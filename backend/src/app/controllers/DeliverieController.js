import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliverie from '../models/Deliverie';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import DetailMail from '../jobs/DetailMail';
import Queue from '../../lib/Queue';

class DeliverieController {
  async index(req, res) {
    const { page, q } = req.query;
    const currentPage = page || '1';
    const name = q || '';

    const deliveries = await Deliverie.findAndCountAll({
      where: {
        product: {
          [Op.like]: `%${name}%`,
        },
      },
      order: [['id', 'DESC']],
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email', 'avatar_id'],
          include: {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'cep',
            'number',
            'state',
            'city',
            'complement',
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['url', 'path', 'name'],
        },
      ],
      attributes: [
        'id',
        'product',
        'deliveryman_id',
        'recipient_id',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      limit: 4,
      offset: (currentPage - 1) * 4,
    });
    return res.json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object(req.body).shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const checkDeliverymanExists = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    const checkRecipientExists = await Recipient.findOne({
      where: { id: recipient_id },
    });

    if (!(checkDeliverymanExists || checkRecipientExists)) {
      return res
        .status(400)
        .json({ error: 'Deliveryman and Recipient does not exists' });
    }

    if (!checkDeliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    if (!checkRecipientExists) {
      return res.status(400).json({ error: 'Recipient does not exits' });
    }

    const delivery = await Deliverie.create({
      product,
      deliveryman_id,
      recipient_id,
    });

    await Queue.add(DetailMail.key, {
      checkDeliverymanExists,
      delivery,
      checkRecipientExists,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object(req.body).shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const { recipient_id, deliveryman_id } = req.body;

    const recipientExists = await Recipient.findOne({
      where: { id: recipient_id },
    });

    const deliverymanExists = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    if (!(recipientExists || deliverymanExists)) {
      return res
        .status(400)
        .json({ error: 'Recipient and Deliveryman does not exists' });
    }

    if (!recipientExists) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliverie = await Deliverie.findByPk(req.params.id);

    const { id, product } = await deliverie.update(req.body);

    return res.json({
      id,
      product,
      deliveryman_id,
      recipient_id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryExists = await Deliverie.findByPk(id);

    if (!deliveryExists) {
      return res.status(400).json({ error: 'Delivery not exists' });
    }

    await Deliverie.destroy({ where: { id } });

    return res.status(200).json();
  }
}

export default new DeliverieController();
