import { Op } from 'sequelize';

import Deliverie from '../models/Deliverie';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverieStatusController {
  async index(req, res) {
    const deliverymanExists = await Deliveryman.findOne({
      where: { id: req.body.id },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliverie = await Deliverie.findAll({
      where: {
        deliveryman_id: req.body.id,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(deliverie);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliverymanExists = await Deliveryman.findOne({
      where: { id },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliverie = await Deliverie.findAll({
      where: {
        end_date: {
          [Op.ne]: null,
        },
      },
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['url', 'path', 'name'],
        },
      ],
    });

    return res.json(deliverie);
  }
}

export default new DeliverieStatusController();
