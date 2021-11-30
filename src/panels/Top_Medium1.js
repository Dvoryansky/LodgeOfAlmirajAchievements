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

const Top_Medium1 = ({ id, go, topList_Medium1 }) => {

		//const [state, setState] = useState({userItems: []});

		let medium1_usersList = [];

		for (let user in topList_Medium1) {
			medium1_usersList.push(
				<Link href={"https://vk.com/id" + topList_Medium1[user].id} target='_blank'>
					<Cell
						before={topList_Medium1[user].photo_200 ?  <Avatar src={topList_Medium1[user].photo_200}/> : {noUser}}
						description={topList_Medium1[user].city && topList_Medium1[user].city.title ? "г. " + topList_Medium1[user].city.title : ''}
					>
						{`${topList_Medium1[user].first_name} ${topList_Medium1[user].last_name}`}
					</Cell>
				</Link>
			);
		};

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="achievements" />}>Список medium</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">С 1 по 28 ноября в Ложе Альмиража проходила распродажа в честь открытия.
																															Каждый, кто сделал заказ в этот период, отмечены здесь как первые последователи.
																															<br /><br />Их вклад — первый вклад, и он очень значим для нас.</Text>
				</Div>
			</Group>

				<Group header={<Header mode="secondary">Первые последователи</Header>}>
					{medium1_usersList}
				</Group>


		</Panel>
	);
};

Top_Medium1.propTypes = {
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

export default Top_Medium1;
