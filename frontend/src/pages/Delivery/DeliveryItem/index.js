import React from 'react';

import PropTypes from 'prop-types';

import { Container, MoreConainer } from './styles';

export default function DeliveryItem({ updateDeliveries, data }) {
  return (
    <Container>
			<small>#{data.id}</small>
			<small>{data.recipient.name}</small>
			<small>{data.product}</small>
			<small>{data.recipient.city}</small>
			<small>{data.recipient.state}</small>
			<Status
				text={data.status}
				color={statusColors[data.status].color}
				background={statusColors[data.status].background}
			/>
			<More>
				<MoreConainer>
					<div>
						<DeliveryModal data={data} />
					</div>
					<div>
						<button
							onClick={() => history.push(`/deliveries/form/${data.id}`)}
							type="button"
						>
							<MdEdit color={colors.info} size={15} />
							<span>Editar</span>
						</button>
					</div>
					<div>
						<button onClick={handleDelete} type="button">
							<MdDeleteForever color={colors.danger} size={15} />
							<span>Excluir</span>
						</button>
					</div>
				</MoreConainer>
			</More>
		</Container>
  );
}

DeliveryItem.propTypes = {
	updateDeliveries: PropTypes.func.isRequired,
	data: PropTypes.shape({
		id: PropTypes.number,
		product: PropTypes.string,
		recipient: PropTypes.shape({
			name: PropTypes.string,
			city: PropTypes.string,
			state: PropTypes.string,
		}),
		status: PropTypes.string,
	}).isRequired,
};