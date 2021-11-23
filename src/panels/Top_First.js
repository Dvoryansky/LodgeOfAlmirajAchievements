import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Button,
				 Cell,
				 Div,
				 Group,
				 Header,
				 Link,
				 Panel, PanelHeader, PanelHeaderBack,
				 ScreenSpinner,
				 Text } from '@vkontakte/vkui';

import noUser from '../img/noUser.png';

const Top_First = ({ id, go }) => {

		const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
		const [state, setState] = useState({userItems: []});



		let firstUsersList = [];

		async function makeUsersList() {
			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids":

				"176146375, "						// 1-ые 	// Никита
				+ "683862458, "										// Минчик
				+ "78913349, "										// Валентин Филипенко
				+ "48864238, "										// Полина Светлова
				+ "603535757, "										// Twi Arwe
				+ "564115201, "									  // Виктория Шеина
				+ "3871584, " 										// Андрей Алибаев
				+ "19881414, "										// Дмитрий Пилюгин
				+ "156977590 ",										// Саша Брагин
				"fields": "photo_200, city", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data => {

					data.response.forEach(user => {
						firstUsersList.push(
						  <Link href={"https://vk.com/id" + user.id} target='_blank'>
								<Cell
							    before={user.photo_200 ?  <Avatar src={user.photo_200}/> : {noUser}}
							    description={user.city && user.city.title ? "г. " + user.city.title : ''}
							  >
							    {`${user.first_name} ${user.last_name}`}
							  </Cell>
							</Link>
						);
					});

				});

				setState({userItems: firstUsersList});
				setPopout(null);
		}
	makeUsersList();

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="achievements" />}>Список Первых</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Некоторое время с открытия Ложи Альмиража действуют скидки до 35% на все миниатюры.
																															Успей сделать заказ во время распродажи и попади в список первых последователей
																															Ложи!</Text>
				</Div>
			</Group>

			{state.userItems &&
				<Group header={<Header mode="secondary">Первые последователи</Header>}>
					{state.userItems}
				</Group>}


		</Panel>
	);
};

Top_First.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Top_First;
