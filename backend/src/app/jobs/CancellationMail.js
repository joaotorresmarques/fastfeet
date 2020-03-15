import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, problem, startDate, endDate } = data;

    console.log('A fila executou CancellationMail');

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Encomenda cancelada por ${deliveryman.name}`,
      template: 'cancellation',
      context: {
        product: delivery.product,
        deliveryman: deliveryman.name,
        description: problem.description,
        startDate,
        endDate,
      },
    });
  }
}

export default new CancellationMail();
