import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, problem } = data;

    console.log('A fila executou CancellationMail');

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Cancelamento de entrega`,
      template: 'cancellation',
      context: {
        product: delivery.product,
        deliveryman: deliveryman.name,
        description: problem.description,
      },
    });
  }
}

export default new CancellationMail();
