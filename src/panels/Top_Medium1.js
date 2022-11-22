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

let topNumbers = [36, 30, 19, 18, 14, 11, 11, 10, 10, 10,
									8, 8, 8, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5,
									4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
									1, 1, 1, 1, 1, 1, 1, 1];

import noUser from '../img/noUser.png';

const Top_Medium1 = ({ id, go, topList_Medium1, currentUser }) => {

		let medium1_usersList = [];
		let placeNumber = 1;
		let isFirst = false;
		let isGiga = false;
		let isMedium = false;

		for (let user in topList_Medium1) {

				switch(placeNumber) {
					case 1:
					case 2:
					case 4:
					case 5:
					case 6:
					case 13:
					case 16:
					case 25:
					case 38:
					case 45:
					case 46:
					 	isFirst = true; break;
					default: isFirst = false;
				}

				switch(placeNumber) {
					case 3:
					case 4:
					 	isGiga = true; break;
					default: isGiga = false;
				}

				switch(placeNumber) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					 	isMedium = true; break;
					default: isMedium = false;
				}

				medium1_usersList.push(
					<Link href={"https://vk.com/id" + topList_Medium1[user].id} target='_blank'>
						<SimpleCell
								before={<div style={{width: '105px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: ''}}><Title style={{width: '25px', textAlign: 'center', backgroundColor: ''}}>{placeNumber++}</Title><Avatar src={topList_Medium1[user].photo_200}/></div>}
							description={topList_Medium1[user].city && topList_Medium1[user].city.title ? "г. " + topList_Medium1[user].city.title : '   '}
							indicator={<Counter style={{width: '50px', height: '30px'}} mode="primary">{topNumbers[placeNumber-2]}</Counter>}
							style={topList_Medium1[user].id == currentUser.id ? {backgroundColor: 'var(--button_secondary_background)'} : {}}
						>
							{`${topList_Medium1[user].first_name}  ${topList_Medium1[user].last_name}`}
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
							{isMedium ? <Avatar size={18} mode="image" src={SwordIcon} style={{
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
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >Средний топ</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular" style={{
						backgroundColor: "#FFE8CC",
						borderLeft: "6px solid #FF933B",
						padding: "0.1em 2em 0.1em 1em",
						color: "black",
					}}>
						<p style={{fontStyle: "italic", textAlign: "justify"}}>«На прошлой неделе губернатора в тюрьму упекли. Говорят, какая-то группа искателей приключений накопали на него компромат. Что ж, поделом ему! Злодеи везде губят простой народ, а на каждого злодея найдутся и свои народные герои»</p>
						<p style={{textAlign: "right"}}>— Человек Геон, фермер близ города, <br />где скандально задержали местного губернатора</p>
					</Text>
				</Div>
				<Div>
					<Text weight="regular">
						Благодаря последователям из списка ниже Ложа отправила первые 300 миниатюр среднего размера в дома игроков по всему миру!
						Топ-5 последователей получили награды за наиболее значимый вклад в получение этого достижения.
					</Text>
				</Div>
			</Group>

			<Group header={<Header mode="secondary">Топ последователей</Header>}>
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
