import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAdaptivity, usePlatform, AdaptivityProvider, AppRoot, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Achievements from './panels/Achievements';
import Top_First from './panels/Top_First';
import Top_Medium1 from './panels/Top_Medium1';

const ROUTES = {
	ACHIEVEMENTS: "achievements",
	TOP_FIRST: "top_first",
	TOP_MEDIUM1: "top_medium1",
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.ACHIEVEMENTS);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { platform } = usePlatform();
	//const { viewWidth } = useAdaptivity();
	//const isDesktop =  viewWidth >= 4;

	const [topList_FirstFollowers, setFirstFollowers] = useState( { } );
	const [topList_Medium1, setTopList_Medium1] = useState( { } );

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "firstFollowersRequest", "params": {"user_ids":

			// Первые последователи
			"78913349, "								  		// Валентин Филипенко
			+ "48864238, "										// Полина Светлова
			+ "603535757, "										// Twi Arwe (Федьвереш Артур Игоревич)
			+ "564115201, "										// Виктория Шеина
			+ "3871584, "										  // Андрей Алибаев
			+ "19881414, "										// Дмитрий Пилюгин
			+ "20229474, "										// Тоша Морозов
			+ "194138998, "										// Роман Бегемаев
			+ "477394855, "										// Дмитрий Токарев
			+ "16405722, "				// 10-ые	  // Ал Суетнов
			+ "538759107, "									  // Анна Шарапова
			+ "13659175, "										// Ярослав Леухин
			+ "188269225, "										// Оддвар Норд
			+ "669067373 ", 									// Александр Ондас
			"fields": "photo_200, city", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"
		}}).then(firstFollowers_requestAnswer => {
				let i = 1;
				firstFollowers_requestAnswer.response.forEach(element => {
					topList_FirstFollowers[String(i++)] = element;
				});
		});

		bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "mediumMinisRequest", "params": {"user_ids":

			// Миниатюры в каждый дом!
			"20229474, "											// Тоша Морозов 14
			+ "121227306, "										// Василевс Смагин 11
			+ "19881414, "										// Дмитрий Пилюгин 8
			+ "194138998, "										// Роман Бегемаев 8
			+ "145607848, "										// Сёма Айзенберг 6
			+ "542869959, "										// Артём Васильев 5
			+ "13659175, "										// Ярослав Леухин 5
			+ "603535757, "										// Twi Arwe 3
			+ "16405722, "										// Ал Суетнов 3
			+ "290479067, "										// Александра Василевич 2
			+ "78913349, "										// Валентин Филипенко 2
			+ "48864238, "										// Полина Светлова 2
			+ "1846504, "											// Антон Тимошин 2
			+ "12610752, "										// Данила Шуляк 1
			+ "564115201, "										// Виктория Шеина 1
			+ "3871584, "											// Андрей Алибаев 1
			+ "669067373, "					// 10-ые  // Александр Ондас 1
			+ "7695356 "										  // Дамир Кабиров 1
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(topList_Medium1_requestAnswer => {
				let i = 1;

				topList_Medium1_requestAnswer.response.forEach(element => {
					topList_Medium1[String(i++)] = element;
				});
		});

		setPopout(null);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Achievements id={ROUTES.ACHIEVEMENTS} topList_FirstFollowers={topList_FirstFollowers}
																								 topList_Medium1={topList_Medium1}
																								 go={go} platform={platform}/>
					<Top_First id={ROUTES.TOP_FIRST} topList_FirstFollowers={topList_FirstFollowers} go={go} />
					<Top_Medium1 id={ROUTES.TOP_MEDIUM1} topList_Medium1={topList_Medium1} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
