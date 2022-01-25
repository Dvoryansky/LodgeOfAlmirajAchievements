import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Button,
				 Div,
				 Group,
				 Header,
				 Link,
				 Panel, PanelHeader, PanelHeaderBack,
				 ScreenSpinner,
				 SimpleCell,
				 Text } from '@vkontakte/vkui';

import { Icon201CircleFillGold } from '@vkontakte/icons';
import { Icon12StarCircleFillYellow } from '@vkontakte/icons';
import noUser from '../img/noUser.png';

const Top_First = ({ id, go, topList_FirstFollowers, currentUser }) => {

		let firstUsersList = [];
		for (let user in topList_FirstFollowers) {
			if (topList_FirstFollowers[user].id == currentUser.id) {
				firstUsersList.push(
					<Link href={"https://vk.com/id" + topList_FirstFollowers[user].id} target='_blank'>
						<SimpleCell
							style={{backgroundColor: '#EDEEF0'}}
							before={topList_FirstFollowers[user].photo_200 ?  <Avatar src={topList_FirstFollowers[user].photo_200}/> : {noUser}}
							description={topList_FirstFollowers[user].city && topList_FirstFollowers[user].city.title ? "г. " + topList_FirstFollowers[user].city.title : ''}
						>
							{`${topList_FirstFollowers[user].first_name} ${topList_FirstFollowers[user].last_name}`}
						</SimpleCell>
					</Link>
				);
			}
			else {
				firstUsersList.push(
					<Link href={"https://vk.com/id" + topList_FirstFollowers[user].id} target='_blank'>
						<SimpleCell
							before={topList_FirstFollowers[user].photo_200 ?  <Avatar src={topList_FirstFollowers[user].photo_200}/> : {noUser}}
							description={topList_FirstFollowers[user].city && topList_FirstFollowers[user].city.title ? "г. " + topList_FirstFollowers[user].city.title : ''}
						>
							{`${topList_FirstFollowers[user].first_name} ${topList_FirstFollowers[user].last_name}`}
						</SimpleCell>
					</Link>
				);
			}
		};

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >Список Первых</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">С 1 по 28 ноября в Ложе Альмиража проходила распродажа в честь открытия.
																															Каждый, кто сделал заказ в этот период, отмечены здесь как первые последователи.
																															<br /><br />Их вклад — первый вклад, и он очень значим для нас. Каждый из первых последователей
																															получил от нас бонус на второй заказ и постоянную скидку в 10% до конца 2022 года.</Text>
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
