import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAdaptivity, usePlatform, AdaptivityProvider, AppRoot, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Top_First from './panels/Top_First';
import Achievements from './panels/Achievements';

const ROUTES = {
	ACHIEVEMENTS: "achievements",
	TOP_FIRST: "top_first"
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.ACHIEVEMENTS);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { platform } = usePlatform();
	//const { viewWidth } = useAdaptivity();
	//const isDesktop =  viewWidth >= 4;

	const [topList_FirstFollowers, setFirstFollowers] = useState( { } );

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
			"176146375, "						// 1-ые 	// Никита
			+ "683862458, "										// Минчик
			+ "78913349, "										// Валентин Филипенко
			+ "48864238, "										// Полина Светлова
			+ "603535757, "										// Twi Arwe (Федьвереш Артур Игоревич)
			+ "564115201, "										// Виктория Шеина
			+ "3871584, "										  // Андрей Алибаев
			+ "19881414, "										// Дмитрий Пилюгин
			+ "20229474, "										// Тоша Морозов
			+ "194138998, "					// 10-ые	// Роман Бегемаев
			+ "477394855 ",										// Дмитрий Токарев
			"fields": "photo_200, city", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"
		}}).then(firstFollowers_requestAnswer => {
				let i = 1;
				firstFollowers_requestAnswer.response.forEach(element => {
					topList_FirstFollowers[String(i++)] = element;
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
					<Achievements id={ROUTES.ACHIEVEMENTS} topList_FirstFollowers={topList_FirstFollowers} go={go} platform={platform}/>
					<Top_First id={ROUTES.TOP_FIRST} topList_FirstFollowers={topList_FirstFollowers} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
