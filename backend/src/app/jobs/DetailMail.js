import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'DetailMail';
  }

  async handle({ data }) {
    const { checkDeliverymanExists, delivery, checkRecipientExists } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${checkDeliverymanExists.name} <${checkDeliverymanExists.email}>`,
      subject: `Encomenda cadastrada para ${checkDeliverymanExists.name}`,
      template: 'cancellation',
      context: {
        deliveryman: checkDeliverymanExists.name,
        product: delivery.product,
        recipientName: checkRecipientExists.name,
        recipientStreet: checkRecipientExists.street,
        recipientNumber: checkRecipientExists.number,
        recipientZipCode: checkRecipientExists.cep,
        recipientCity: checkRecipientExists.city,
        recipientState: checkRecipientExists.state,
        recipientComplement: checkRecipientExists.complement,
      },
    });
  }
}

export default new CancellationMail();
