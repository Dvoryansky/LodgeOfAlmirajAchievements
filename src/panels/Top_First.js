import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Panel, PanelHeader, PanelHeaderBack, ScreenSpinner, Header, Button, Group, Cell, Div, Avatar, SimpleCell, Text } from '@vkontakte/vkui';

let topUsers;
let topList_First = {	}

const Top_First = ({ id, go }) => {

		const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

		async function makeUsersList() {
		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids": "176146375, krysa_666, 414366317, deniskamyzhik, diman19911, allaworld, 40744463, qqobb, khitushko2013", "fields": "photo_200, city", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data => {
			let i = 0;
			data.response.forEach(element => {
				topList_First[String(i+1)] = element;
				i++;
			});
			setPopout(null);
		});
			console.log(topList_First);

		}
	makeUsersList();

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="achievements" />}>Топ первых</PanelHeader>
			<Group header={<Header mode="secondary">Описание</Header>}>
				<Div>
					<Text weight="regular">Несколько дней с открытия Ложи Альмиража действуют скидки на все миниатюры.
																															Успейте сделать заказ во время распродажи и попадите в список первых последователей
																															Ложи!</Text>
				</Div>
			</Group>

			{topList_First[8] &&
			<Group header={<Header mode="secondary">Первые последователи</Header>}>
				<Cell
					before={topList_First["1"].photo_200 ?  <Avatar src={topList_First["1"].photo_200}/> : null}
					description={topList_First["1"].city && topList_First["1"].city.title ? "г. " + topList_First["1"].city.title : ''}
				>
					{`${topList_First["1"].first_name} ${topList_First["1"].last_name}`}
				</Cell>
				<Cell
					before={topList_First["2"].photo_200 ? <Avatar src={topList_First["2"].photo_200}/> : null}
					description={topList_First["2"].city && topList_First["2"].city.title ? "г. " + topList_First["2"].city.title : ''}
				>
					{`${topList_First["2"].first_name} ${topList_First["2"].last_name}`}
				</Cell>
				<Cell
					before={topList_First["3"].photo_200 ? <Avatar src={topList_First["3"].photo_200}/> : null}
					description={topList_First["3"].city && topList_First["3"].city.title ? "г. " + topList_First["3"].city.title : ''}
				>
					{`${topList_First["3"].first_name} ${topList_First["3"].last_name}`}
				</Cell>
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
