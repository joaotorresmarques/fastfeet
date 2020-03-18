import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page, q } = req.query;
    const currentPage = page || '1';
    const name = q || '';

    const recipient = await Recipient.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      order: [['id', 'ASC']],
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'cep',
      ],
      limit: 5,
      offset: (currentPage - 1) * 5,
    });

    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { name } = req.body;

    const recipient = await Recipient.findOne({
      where: { name },
    });

    if (recipient) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { recipientId } = req.params;
    const { name } = req.body;

    const recipient = await Recipient.findByPk(recipientId);

    if (name && name !== recipient.name) {
      const recipientExists = await Recipient.findOne({
        where: { name },
      });

      if (recipientExists) {
        return res.status(400).json({ error: 'Recipient already exists' });
      }
    }

    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }
}

export default new RecipientController();
