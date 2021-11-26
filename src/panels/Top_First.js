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

const Top_First = ({ id, go, topList_FirstFollowers }) => {

		//const [state, setState] = useState({userItems: []});

		let firstUsersList = [];

		for (let user in topList_FirstFollowers) {
			firstUsersList.push(
				<Link href={"https://vk.com/id" + topList_FirstFollowers[user].id} target='_blank'>
					<Cell
						before={topList_FirstFollowers[user].photo_200 ?  <Avatar src={topList_FirstFollowers[user].photo_200}/> : {noUser}}
						description={topList_FirstFollowers[user].city && topList_FirstFollowers[user].city.title ? "г. " + topList_FirstFollowers[user].city.title : ''}
					>
						{`${topList_FirstFollowers[user].first_name} ${topList_FirstFollowers[user].last_name}`}
					</Cell>
				</Link>
			);
		};

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="achievements" />}>Список Первых</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">До 28 ноября в Ложе Альмиража действуют скидки до 35% на все миниатюры.
																															Успей сделать заказ во время распродажи и попади в список первых последователей
																															Ложи!</Text>
				</Div>
			</Group>

				<Group header={<Header mode="secondary">Первые последователи</Header>}>
					{firstUsersList}
				</Group>


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
