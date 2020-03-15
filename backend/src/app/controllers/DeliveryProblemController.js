import * as Yup from 'yup';

// import pt from 'date-fns/locale/pt';
// import { format, parseISO } from 'date-fns';

import DeliveryProblem from '../models/DeliveryProblem';
import Deliverie from '../models/Deliverie';
import Deliveryman from '../models/Deliveryman';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const { deliveryIdProblem } = req.params;

    const deliveryExists = await Deliverie.findOne({
      where: { id: deliveryIdProblem },
    });

    if (!deliveryExists) {
      return res.status(400).json({ error: 'Deliverie does not exists' });
    }

    const deliveryProblems = await DeliveryProblem.findAll({
      where: {
        delivery_id: deliveryIdProblem,
      },
      include: [
        {
          model: Deliverie,
          as: 'deliveryProblem',
          attributes: [
            'id',
            'product',
            'deliveryman_id',
            'recipient_id',
            'canceled_at',
          ],
        },
      ],
    });

    return res.json(deliveryProblems);
  }

  async show(req, res) {
    const deliveryProblems = await DeliveryProblem.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: Deliverie,
          as: 'deliveryProblem',
          attributes: [
            'id',
            'product',
            'deliveryman_id',
            'recipient_id',
            'canceled_at',
          ],
        },
      ],
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const schema = Yup.object(req.body).shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const { deliveryId } = req.params;
    const { description } = req.body;

    const deliverieExists = await Deliverie.findOne({
      where: { id: deliveryId },
    });

    if (!deliverieExists) {
      return res.status(400).json({ error: 'Deliverie does not exists' });
    }

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: deliveryId,
      description,
    });

    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const { deliveryId } = req.params;

    const deliveryProblem = await DeliveryProblem.findOne({
      where: { id: deliveryId },
    });

    if (!deliveryProblem) {
      return res
        .status(400)
        .json({ error: 'Delivery Problem does not exists' });
    }

    const delivery = await Deliverie.findByPk(deliveryProblem.delivery_id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (delivery.end_date !== null && delivery.signature_id !== null) {
      return res
        .status(400)
        .json({ error: 'This delivery has been completed' });
    }
    delivery.update({
      canceled_at: new Date(),
    });

    const startDate = delivery.start_date;
    const endDate = delivery.end_date;

    await Queue.add(CancellationMail.key, {
      delivery,
      deliveryman: delivery.deliveryman,
      problem: deliveryProblem,
      startDate,
      endDate,
    });

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();
