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

import noUser from '../img/noUser.png';

const Top_Medium1 = ({ id, go, topList_Medium1, currentUser }) => {

		let medium1_usersList = [];

		for (let user in topList_Medium1) {
			if (topList_Medium1[user].id == currentUser.id) {
				medium1_usersList.push(
					<Link href={"https://vk.com/id" + topList_Medium1[user].id} target='_blank'>
						<SimpleCell
							badge={<Icon201CircleFillGold width={16} height={16} />}
							indicator="10"
							before={topList_Medium1[user].photo_200 ?  <Avatar src={topList_Medium1[user].photo_200}/> : {noUser}}
							description={topList_Medium1[user].city && topList_Medium1[user].city.title ? "г. " + topList_Medium1[user].city.title : ''}
							after=""
						>
							{`${topList_Medium1[user].first_name} ${topList_Medium1[user].last_name}`}
						</SimpleCell>
					</Link>
				);
			}
			else {
				medium1_usersList.push(
					<Link href={"https://vk.com/id" + topList_Medium1[user].id} target='_blank'>
						<SimpleCell
							before={topList_Medium1[user].photo_200 ?  <Avatar src={topList_Medium1[user].photo_200}/> : {noUser}}
							description={topList_Medium1[user].city && topList_Medium1[user].city.title ? "г. " + topList_Medium1[user].city.title : ''}
							after=""
						>
							{`${topList_Medium1[user].first_name} ${topList_Medium1[user].last_name}`}
						</SimpleCell>
					</Link>
				);
			}
		};

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="achievements" />}>Список medium</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Заказывай миниатюры среднего или меньшего размера и попадай в топ!</Text>
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
