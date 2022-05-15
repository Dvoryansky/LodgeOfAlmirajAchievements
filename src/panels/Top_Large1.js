import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Button,
				 Counter,
				 Div,
				 Group,
				 Header,
				 Link,
				 Panel, PanelHeader, PanelHeaderBack,
				 ScreenSpinner,
				 SimpleCell,
				 Text,
			 	 Title } from '@vkontakte/vkui';

import { Icon201CircleFillGold } from '@vkontakte/icons';
import { Icon12StarCircleFillYellow } from '@vkontakte/icons';
import DragonIcon from '../img/Icons/dragon-icon.svg';

let topNumbers = [5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

import noUser from '../img/noUser.png';

const Top_Large1 = ({ id, go, topList_Large1, currentUser }) => {

		let large1_usersList = [];
		let placeNumber = 1;
		let isFirst = false;
		let isGiga = false;

		for (let user in topList_Large1) {

				switch(placeNumber) {
					case 2:
					case 4:
					case 7:
					case 13:
					case 14:
					case 15:
					 	isFirst = true; break;
					default: isFirst = false;
				}

				switch(placeNumber) {
					case 2:
					case 8:
					 	isGiga = true; break;
					default: isGiga = false;
				}

				large1_usersList.push(
					<Link href={"https://vk.com/id" + topList_Large1[user].id} target='_blank'>
						<SimpleCell
								before={<div style={{width: '105px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: ''}}><Title style={{width: '25px', textAlign: 'center', backgroundColor: ''}}>{placeNumber++}</Title><Avatar src={topList_Large1[user].photo_200}/></div>}
							description={topList_Large1[user].city && topList_Large1[user].city.title ? "г. " + topList_Large1[user].city.title : '   '}
							indicator={<Counter style={{width: '50px', height: '30px'}} mode="primary">{topNumbers[placeNumber-2]}</Counter>}
							style={topList_Large1[user].id == currentUser.id ? {backgroundColor: 'var(--button_secondary_background)'} : {}}
						>
							{`${topList_Large1[user].first_name} ${topList_Large1[user].last_name}`}
							{isFirst ? <Icon201CircleFillGold width={18} height={18} style={{
					      display: 'inline-block',
					      verticalAlign: 'bottom',
					      position: 'relative',
					      top: -1
					    }}/> : ""}
							{isGiga ? <Avatar size={18} mode="image" src={DragonIcon} style={{
					      display: 'inline-block',
					      verticalAlign: 'bottom',
					      position: 'relative',
					      top: -1
					    }}/> : ""}

						</SimpleCell>
					</Link>
				);
		};

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >Крупный топ</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Заказывай миниатюры крупного размера и попадай в топ!</Text>
				</Div>
			</Group>

			<Group header={<Header mode="secondary">Топ последователей</Header>}>
				{large1_usersList}
			</Group>

		</Panel>
	);
};

Top_Large1.propTypes = {
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

export default Top_Large1;
