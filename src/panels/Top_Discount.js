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

let topNumbers = ["1 | 12%", "1 | 10%", "1 | 7%"];

import noUser from '../img/noUser.png';

const Top_Discount = ({ id, go, topList_Discount, currentUser }) => {

		let discount_usersList = [];
		let placeNumber = 1;
		let isFirst = false;

		for (let user in topList_Discount) {

				switch(placeNumber) {
					case 0:
					 	isFirst = true; break;
					default: isFirst = false;
				}

				discount_usersList.push(
					<Link href={"https://vk.com/id" + topList_Discount[user].id} target='_blank'>
						<SimpleCell
								before={<div style={{width: '105px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: ''}}><Title style={{width: '25px', textAlign: 'center', backgroundColor: ''}}>{placeNumber++}</Title><Avatar src={topList_Discount[user].photo_200}/></div>}
							description={topList_Discount[user].city && topList_Discount[user].city.title ? "г. " + topList_Discount[user].city.title : '   '}
							indicator={<Counter style={{width: '65px', height: '30px'}} mode="primary">{topNumbers[placeNumber-2]}</Counter>}
							style={topList_Discount[user].id == currentUser.id ? {backgroundColor: 'var(--button_secondary_background)'} : {}}
						>
							{`${topList_Discount[user].first_name} ${topList_Discount[user].last_name}`}
							{isFirst ? <Icon201CircleFillGold width={18} height={18} style={{
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
			<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />} >Сокровищные последователи</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Минчик разбросал по Ложе пароли, открывающие скидки на заказы! Найди один такой и впиши его в поле для промокода при оформлении заказа. Чем больше паролей ты используешь, тем выше поднимешься по рейтингу. А те, кто найдёт больше всего паролей, целый год смогут использовать самую большую скидку, которую нашли!</Text>
				</Div>
			</Group>

			<Group header={<Header mode="secondary">Топ последователей</Header>}>
				{discount_usersList}
			</Group>

		</Panel>
	);
};

Top_Discount.propTypes = {
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

export default Top_Discount;
