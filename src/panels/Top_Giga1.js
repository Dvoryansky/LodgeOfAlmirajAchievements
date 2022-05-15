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

let topNumbers = [4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
									1, 1, 1, 1, 1, 1, 1, 1, 1,
									1, 1, 1, 1, 1];

import noUser from '../img/noUser.png';

const Top_Giga1 = ({ id, go, topList_Giga1, currentUser }) => {

		let giga1_usersList = [];
		let placeNumber = 1;
		let isFirst = false;
		let isGiga = false;

		for (let user in topList_Giga1) {

				switch(placeNumber) {
					case 1:
					case 3:
					case 5:
					case 20:
					case 21:
					case 22:
					case 23:
					 	isFirst = true; break;
					default: isFirst = false;
				}

				switch(placeNumber) {
					case 1:
					case 2:
					case 3:
					 	isGiga = true; break;
					default: isGiga = false;
				}

				giga1_usersList.push(
					<Link href={"https://vk.com/id" + topList_Giga1[user].id} target='_blank'>
						<SimpleCell
								before={<div style={{width: '105px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: ''}}><Title style={{width: '25px', textAlign: 'center', backgroundColor: ''}}>{placeNumber++}</Title><Avatar src={topList_Giga1[user].photo_200}/></div>}
							description={topList_Giga1[user].city && topList_Giga1[user].city.title ? "г. " + topList_Giga1[user].city.title : '   '}
							indicator={<Counter style={{width: '50px', height: '30px'}} mode="primary">{topNumbers[placeNumber-2]}</Counter>}
							style={topList_Giga1[user].id == currentUser.id ? {backgroundColor: 'var(--button_secondary_background)'} : {}}
						>
							{`${topList_Giga1[user].first_name} ${topList_Giga1[user].last_name}`}
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
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >ГИГАтоп</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular" style={{
						backgroundColor: "#FFE8CC",
						borderLeft: "6px solid #FF933B",
						padding: "0.1em 2em 0.1em 1em"
					}}>
						<p style={{fontStyle: "italic", textAlign: "justify"}}>«Эти огромные чудища появились в нашем мире ещё до того, как родились герои, способные их победить. Сколько жизней было унесено этими монстрами, сколько караванов уничтожено! А всё ради чего? Ради грёбаного хлеба!»</p>
						<p style={{textAlign: "right"}}>— Дварф Баргейм, владелец таверны «Три гуся», о гусях-гидрах</p>
					</Text>
				</Div>
				<Div>
					<Text weight="regular">
						Достижение «Восстание ГИГАНТЮР» неожиданно быстро набрало оборот, чему мы обязаны последователям из списка ниже и миниатюре <Link href="https://vk.com/market-208451895?w=product-208451895_5671881%2Fquery" target="_blank">гуся-гидры</Link>, которая стала самой популярной гигантюрой Ложи.
						<br /><br />
						Топ-3 последователей получили награды за наиболее значимый вклад в получение этого достижения, а отправленные им гигантюры уже успели порадовать мастеров и игроков в разных уголках мира.
					</Text>
				</Div>
			</Group>

			<Group header={<Header mode="secondary">Топот последователей</Header>}>
				{giga1_usersList}
			</Group>

		</Panel>
	);
};

Top_Giga1.propTypes = {
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

export default Top_Giga1;
