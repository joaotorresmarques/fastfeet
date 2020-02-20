import * as Yup from 'yup';
import Deliverie from '../models/Deliverie';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliverieController {
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

    return res.json(delivery);
  }
}

export default new DeliverieController();
