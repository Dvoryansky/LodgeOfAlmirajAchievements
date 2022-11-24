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
import SwordIcon from '../img/Icons/sword-icon.svg';

let topNumbers = [20, 4, 3, 2, 2, 2, 1];

import noUser from '../img/noUser.png';

const Top_Medium2 = ({ id, go, topList_Medium2, currentUser }) => {

		let medium2_usersList = [];
		let placeNumber = 1;
		let isFirst = false;
		let isGiga = false;
		let isMedium = false;

		for (let user in topList_Medium2) {

				switch(placeNumber) {
					case 1:
					 	isFirst = true; break;
					default: isFirst = false;
				}

				switch(placeNumber) {
					case 0:
					 	isGiga = true; break;
					default: isGiga = false;
				}

				switch(placeNumber) {
					case 0:
					 	isMedium = true; break;
					default: isMedium = false;
				}

				medium2_usersList.push(
					<Link href={"https://vk.com/id" + topList_Medium2[user].id} target='_blank'>
						<SimpleCell
								before={<div style={{width: '105px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: ''}}><Title style={{width: '25px', textAlign: 'center', backgroundColor: ''}}>{placeNumber++}</Title><Avatar src={topList_Medium2[user].photo_200}/></div>}
							description={topList_Medium2[user].city && topList_Medium2[user].city.title ? "г. " + topList_Medium2[user].city.title : '   '}
							indicator={<Counter style={{width: '50px', height: '30px'}} mode="primary">{topNumbers[placeNumber-2]}</Counter>}
							style={topList_Medium2[user].id == currentUser.id ? {backgroundColor: 'var(--button_secondary_background)'} : {}}
						>
							{`${topList_Medium2[user].first_name}  ${topList_Medium2[user].last_name}`}
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
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >Средний топ 2</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Миниатюры ищут своих хозяев! Без вас им не выжить в этом жестоком мире.
																	Заказывайте миниатюры среднего или меньшего размера и станьте героями для них! А они станут героями для вас.</Text>
																	<br/><Text weight="regular">А для самых любознательных тут припрятан редкий пароль на скидку в 20%!!! Вводи "ГигантюрноеПодношение" в поле для промокода при оформлении заказа! И поспеши, потому что пароль сработает только раз!</Text>
				</Div>
			</Group>

			<Group header={<Header mode="secondary">Топ последователей</Header>}>
				{medium2_usersList}
			</Group>

		</Panel>
	);
};

Top_Medium2.propTypes = {
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

export default Top_Medium2;
