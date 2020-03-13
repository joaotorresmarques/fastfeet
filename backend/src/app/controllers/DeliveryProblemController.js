import { Op } from 'sequelize';
import DeliveryProblem from '../models/DeliveryProblem';
import Deliverie from '../models/Deliverie';

class DeliveryProblemController {
  async index(req, res) {
    const { deliveryIdProblem } = req.params;

    const deliveryProblem = await DeliveryProblem.findOne({
      where: {
        id: deliveryIdProblem,
        description: {
          [Op.not]: null,
        },
      },
    });

    return res.json(deliveryProblem);
  }

  async show(req, res) {
    return res.json();
  }

  async store(req, res) {
    const { deliveryId } = req.params;
    const { description } = req.body;

    const deliverie = await Deliverie.findOne({
      where: { id: deliveryId },
    });

    if (!deliverie) {
      return res.status(400).json({ error: 'Deliverie does not exists' });
    }

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: deliveryId,
      description,
    });

    return res.json(deliveryProblem);
  }
}

export default new DeliveryProblemController();
