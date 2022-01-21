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

	const [currentUser, setCurrentUser] = useState(null);

	const [topList_FirstFollowers, setFirstFollowers] = useState( { } );
	const [topList_Medium1, setTopList_Medium1] = useState( { } );
	const [topList_Big1, setTopList_Big1] = useState( { } );
	const [topList_Giga1, setTopList_Giga1] = useState( { } );

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchUser() {

			const loggedUser = await bridge.send("VKWebAppGetUserInfo");
			setCurrentUser(loggedUser);
		}
		fetchUser();

		async function setAllUsers() {

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "firstFollowersRequest", "params": {"user_ids":

				// Первые последователи
				"78913349,"								  			// Валентин Филипенко
				+ "48864238,"											// Полина Светлова
				+ "603535757,"										// Twi Arwe (Федьвереш Артур Игоревич)
				+ "564115201,"										// Виктория Шеина
				+ "3871584,"										  // Андрей Алибаев
				+ "176146375," // DELETE
				+ "19881414,"											// Дмитрий Пилюгин
				+ "20229474,"											// Тоша Морозов
				+ "194138998,"										// Роман Бегемаев
				+ "477394855,"										// Дмитрий Токарев
				+ "16405722,"				// 10-ые	  	// Ал Суетнов
				+ "538759107,"									  // Анна Шарапова
				+ "13659175,"											// Ярослав Леухин
				+ "188269225,"										// Оддвар Норд
				+ "669067373", 										// Александр Ондас
				"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(firstFollowers_requestAnswer => {
					let i = 1;
					firstFollowers_requestAnswer.response.forEach(element => {
						topList_FirstFollowers[String(i++)] = element;
					});
			});

			// Последний добавленный: Святослав Дулькейт
			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "medium1MinisRequest", "params": {"user_ids":

				// Миниатюры в каждый дом!
				"78913349,"												// Валентин Филипенко 23
				+ "20229474,"											// Тоша Морозов 14
				+ "121227306,"										// Василевс Смагин 11
				+ "19881414,"											// Дмитрий Пилюгин 8
				+ "194138998,"										// Роман Бегемаев 8
				+ "142204381,"										// Даниил Чепурной 6
				+ "145607848,"										// Сёма Айзенберг 6
				+ "286800731,"										// Дмитрий Малёванный 5
				+ "542869959,"										// Артём Васильев 5
				+ "13659175,"											// Ярослав Леухин 5
				+ "603535757,"										// Twi Arwe 3
				+ "16405722,"											// Ал Суетнов 3
				+ "290479067,"										// Александра Василевич 2
				+ "48864238,"											// Полина Светлова 2
				+ "1846504,"											// Антон Тимошин 2
				+ "25774183,"											// Святослав Дулькейт 1
				+ "104461,"												// Маргарита Лаврова 1
				+ "12610752,"											// Данила Шуляк 1
				+ "564115201,"										// Виктория Шеина 1
				+ "3871584,"											// Андрей Алибаев 1
				+ "669067373,"									  // Александр Ондас 1
				+ "7695356",										  // Дамир Кабиров 1
				"fields": "photo_200", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(topList_Medium1_requestAnswer => {
					let i = 1;

					topList_Medium1_requestAnswer.response.forEach(element1 => {
						topList_Medium1[String(i++)] = element1;
					});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "big1MinisRequest", "params": {"user_ids":

				// Крупная партия
				"121227306,"											// Василевс Смагин 5
				+ "145607848,"										// Сёма Айзенберг 2 (930)
				+ "1846504,"											// Антон Тимошин 1 (690)
				+ "286800731,"										// Дмитрий Малёванный 1 (390)
				+ "13659175,"										// Ярослав Леухин 1 (390)
				+ "194138998,"										// Роман Бегемаев 1 (390)
				+ "48864238,"										// Полина Светлова 1 (390)
				+ "16405722"											// Ал Суетнов 1 (370)
				+ " "
				+ " "
				+ " "
				+ " "
				+ " "
				+ " "
				+ " "								// 10-ые
				+ " ",
				"fields": "photo_200", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(topList_Big1_requestAnswer => {
					let n = 1;

					topList_Big1_requestAnswer.response.forEach(element2 => {
						topList_Big1[String(n++)] = element2;
					});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "giga1MinisRequest", "params": {"user_ids":

			// Восстание ГИГАНТЮР!
			"16933004,"												// Андрейка Костин 2 (1780)
			+ "324544054,"										// Майкл Курко 1 (890)
			+ "123588857,"										// Игорь Ыптых 1 (890)
			+ "84064717,"											// Никита Кривоносов 1 (890)
			+ "25774183,"											// Святослав Дулькейт 1 (890)
			+ "104461,"												// Маргарита Лаврова 1 (890)
			+ "58325381,"											// Леонид Соломенников 1 (890)
			+ "318913952,"										// Ольга Нигериш 1 (890)
			+ "12610752,"											// Данила Шуляк 1 (890)
			+ "22932458,"											// Аня Федина 1 (890)
			+ "413383877,"										// Something Seeker 1 (890)
			+ "551114807,"										// Саша Шульгин 1 (890)
			+ "7695356,"									 		// Дамир Кабиров 1 (890)
			+ "603535757,"									 	// Twi Arwe 1 (690)
			+ "19881414,"											// Дмитрий Пилюгин 1 (690)
			+ "477394855,"										// Дмитрий Токарев 1 (690)
			+ "16405722,"											// Ал Суетнов 1 (690)
			+ "13659175,"											// Ярослав Леухин 1 (690)
			+ "188269225,"										// Оддвар Норд 1 (690)
			+ "298211931"											// Игорь Дубинский 1 (690)
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
		}}).then(topList_Giga1_requestAnswer => {
				let k = 1;

				topList_Giga1_requestAnswer.response.forEach(element => {
					topList_Giga1[String(k++)] = element;
				});
			});

			setPopout(null);
	}

	setAllUsers();
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
																								 topList_Big1={topList_Big1}
																								 topList_Giga1={topList_Giga1}
																								 go={go} platform={platform}/>
					<Top_First id={ROUTES.TOP_FIRST} topList_FirstFollowers={topList_FirstFollowers} currentUser={currentUser} go={go} />
					<Top_Medium1 id={ROUTES.TOP_MEDIUM1} topList_Medium1={topList_Medium1} currentUser={currentUser} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;