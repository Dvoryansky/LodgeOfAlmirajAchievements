import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAdaptivity, usePlatform, AdaptivityProvider, AppRoot, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Achievements from './panels/Achievements';
import Top_First from './panels/Top_First';
import Top_Medium1 from './panels/Top_Medium1';
import Top_Medium2 from './panels/Top_Medium2';
import Top_Large1 from './panels/Top_Large1';
import Top_Giga1 from './panels/Top_Giga1';
import Top_Giga2 from './panels/Top_Giga2';
import Top_Garg1 from './panels/Top_Garg1';
import Top_Discount from './panels/Top_Discount';

const ROUTES = {
	ACHIEVEMENTS: "achievements",
	TOP_FIRST: "top_first",
	TOP_MEDIUM1: "top_medium1",
	TOP_MEDIUM2: "top_medium2",
	TOP_LARGE1: "top_large1",
	TOP_GIGA1: "top_giga1",
	TOP_GIGA2: "top_giga2",
	TOP_GARG1: "top_garg1",
	TOP_DISCOUNT: "top_discount",
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.ACHIEVEMENTS);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { platform } = usePlatform();
	const [history, setHistory] = useState([ROUTES.ACHIEVEMENTS]) // Заносим начальную панель в массив историй.

	//const { viewWidth } = useAdaptivity();
	//const isDesktop =  viewWidth >= 4;

	const [currentUser, setCurrentUser] = useState(null);

	const [topList_FirstFollowers, setFirstFollowers] = useState( { } );
	const [topList_Medium1, setTopList_Medium1] = useState( { } );
	const [topList_Medium2, setTopList_Medium2] = useState( { } );
	const [topList_Large1, setTopList_Large1] = useState( { } );
	const [topList_Giga1, setTopList_Giga1] = useState( { } );
	const [topList_Giga2, setTopList_Giga2] = useState( { } );
	const [topList_Garg1, setTopList_Garg1] = useState( { } );
	const [topList_Discount, setTopList_Discount] = useState( { } );

	const goBack = () => {
	  if( history.length === 1 ) {  // Если в массиве одно значение:
	    bridge.send("VKWebAppClose", {"status": "success"}); // Отправляем bridge на закрытие сервиса.
	  } else if( history.length > 1 ) { // Если в массиве больше одного значения:
	    history.pop() // удаляем последний элемент в массиве.
	    setActivePanel( history[history.length - 1] ) // Изменяем массив с иторией и меняем активную панель.
	  }
	}

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		window.addEventListener('popstate', (e) => e.preventDefault() & goBack());

		async function fetchUser() {
			const loggedUser = await bridge.send("VKWebAppGetUserInfo");
			setCurrentUser(loggedUser);
		}
		fetchUser();

		async function setAllUsers() {

			// Террейн:
			// Мелочный и предметный (костры, книги, лампы, могильные плиты):
				// Дарья Коснырева 14
				// Виктория Шеина 1
			// Местный (фонари, лавки):
				// Дарья Коснырева 11
				// + "181717329,"										// Александр Тихонович 3
			// Здания (здания, стены, корабли):

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "firstFollowersRequest", "params": {"user_ids":

				// Первые последователи
				"78913349,"								  			// Валентин Филипенко
				+ "48864238,"											// Полина Светлова
				+ "603535757,"										// Twi Arwe (Федьвереш Артур Игоревич)
				+ "564115201,"										// Виктория Шеина
				+ "3871584,"										  // Андрей Алибаев
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

			// Последний добавленный:
			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "medium1MinisRequest", "params": {"user_ids":

				// Миниатюры в каждый дом!
				"194138998,"											// Роман Бегемаев 36
				+ "78913349,"											// Валентин Филипенко 30
				+ "214516819,"										// Наталия Гриценко 19
				+ "16405722,"											// Ал Суетнов 18
				+ "20229474,"											// Тоша Морозов 14
				+ "564115201,"										// Виктория Шеина 11
				+ "121227306,"										// Василевс Смагин 11
				+ "455128917,"										// Семён Иванов 10
				+ "226279714,"										// Дарья Коснырева 10
				+ "4204097,"											// Виталий Артюшкин 10
				+ "143265974,"										// Райдэ Йана 8
				+ "100610386,"										// Алиса Крыжановская 8
				+ "19881414,"											// Дмитрий Пилюгин 8
				+ "361563395,"										// Тимур Мартынов 6
				+ "143407618,"										// Никита Трусилин 6
				+ "603535757,"										// Twi Arwe 6
				+ "142204381,"										// Даниил Чепурной 6
				+ "145607848,"										// Сёма Айзенберг 6
				+ "154474526,"										// Влада Пальчиковская 5
				+ "45633716,"											// Василий Паньков 5
				+ "626033970,"										// Анна Пентус 5
				+ "434591535,"										// Ярослав Чуйко 5
				+ "286800731,"										// Дмитрий Малёванный 5
				+ "542869959,"										// Артём Васильев 5
				+ "13659175,"											// Ярослав Леухин 5
				+ "474788601,"										// Ирина Назарова 4
				+ "145190308,"										// Андрей Морозов 4
				+ "181717329,"										// Александр Тихонович 3
				+ "459262254,"										// Игорь Агапитов 3
				+ "751734911,"										// Гаврил Гавриевов 2
				+ "483842344,"										// Илья Вихрь 2
				+ "551536254,"										// Юрий Иголкин 2
				+ "11385009,"											// Вадим Старовойтов 2
				+ "234245169,"										// Коля Итюменев 2
				+ "96118,"												// Владимир Груздев 2
				+ "317939768,"										// Христофор Врунгель 2
				+ "290479067,"										// Александра Василевич 2
				+ "48864238,"											// Полина Светлова 2
				+ "1846504,"											// Антон Тимошин 2
				+ "88511296,"											// Артём Исаков 1
				+ "170833125,"										// Михаил Горожанкин 1
				+ "25774183,"											// Святослав Дулькейт 1
				+ "104461,"												// Маргарита Лаврова 1
				+ "12610752,"											// Данила Шуляк 1
				+ "3871584,"											// Андрей Алибаев 1
				+ "669067373,"									  // Александр Ондас 1
				+ "7695356",										  // Дамир Кабиров 1
				"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(topList_Medium1_requestAnswer => {
					let i = 1;

					topList_Medium1_requestAnswer.response.forEach(element1 => {
						topList_Medium1[String(i++)] = element1;
					});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "medium2MinisRequest", "params": {"user_ids":

				// Миниатюры в каждый карман!
				"19881414,"												// Дмитрий Пилюгин 20
				+ "181717329,"										// Александр Тихонович 4
				+ "247478402,"										// Алексей Гайдуков 3
				+ "483842344,"										// Илья Вихрь 2
				+ "751734911,"										// Гаврил Гавриевов 2
				+ "536453231,"										// Влад Тельтевский 2
				+ "226279714",										// Дарья Коснырева 1
				"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(topList_Medium2_requestAnswer => {
					let i = 1;

					topList_Medium2_requestAnswer.response.forEach(element2 => {
						topList_Medium2[String(i++)] = element2;
					});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "large1MinisRequest", "params": {"user_ids":

				// Крупная партия
				"121227306,"											// Василевс Смагин 5
				+ "16405722,"											// Ал Суетнов 4 (370)
				+ "181717329,"										// Александр Тихонович 3
				+ "226279714,"										// Дарья Коснырева 3
				+ "459262254,"										// Игорь Агапитов 2
				+ "78913349,"											// Валентин Филипенко 2
				+ "145607848,"										// Сёма Айзенберг 2 (930)
				+ "19881414,"											// Дмитрий Пилюгин 1
				+ "318913952,"										// Ольга Нигериш 1 (890)
				+ "564115201,"										// Виктория Шеина 1
				+ "214516819,"										// Наталия Гриценко 1
				+ "100610386,"										// Алиса Крыжановская 1
				+ "626033970,"										// Анна Пентус 1 (390)
				+ "1846504,"											// Антон Тимошин 1 (690)
				+ "286800731,"										// Дмитрий Малёванный 1 (390)
				+ "13659175,"											// Ярослав Леухин 1 (390)
				+ "194138998,"										// Роман Бегемаев 1 (390)
				+ "48864238,"											// Полина Светлова 1 (390)
				+ ""
				+ ""
				+ ""
				+ ""
				+ ""
				+ ""
				+ ""								// 10-ые
				+ "",
				"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
			}}).then(topList_Large1_requestAnswer => {
					let n = 1;

					topList_Large1_requestAnswer.response.forEach(element2 => {
						topList_Large1[String(n++)] = element2;
					});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "giga1MinisRequest", "params": {"user_ids":

			// Восстание ГИГАНТЮР!
			"16405722,"												// Ал Суетнов 4 (690)
			+ "214516819,"										// Наталия Гриценко 2
			+ "188269225,"										// Оддвар Норд 2 (1580)
			+ "16933004,"											// Андрейка Костин 2 (1780)
			+ "181717329,"										// Александр Тихонович 1
			+ "564115201,"										// Виктория Шеина 1
			+ "145190308,"										// Андрей Морозов 1
			+ "100610386,"										// Алиса Крыжановская 1
			+ "317939768,"										// Христофор Врунгель 1 (890)
			+ "324544054,"										// Майкл Курко 1 (890)
			+ "123588857,"										// Игорь Ыптых 1 (890)
			+ "84064717,"											// Никита Кривоносов 1 (890)
			+ "25774183,"											// Святослав Дулькейт 1 (640)
			+ "104461,"												// Маргарита Лаврова 1 (890)
			+ "58325381,"											// Леонид Соломенников 1 (890)
			+ "12610752,"											// Данила Шуляк 1 (890)
			+ "22932458,"											// Аня Федина 1 (890)
			+ "413383877,"										// Something Seeker 1 (890)
			+ "551114807,"										// Саша Шульгин 1 (890)
			+ "7695356,"									 		// Дамир Кабиров 1 (890)
			+ "603535757,"									 	// Twi Arwe 1 (690)
			+ "19881414,"											// Дмитрий Пилюгин 1 (690)
			+ "477394855,"										// Дмитрий Токарев 1 (690)
			+ "13659175,"											// Ярослав Леухин 1 (690)
			+ "298211931",										// Игорь Дубинский 1 (690)
			"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
		}}).then(topList_Giga1_requestAnswer => {
				let k = 1;

				topList_Giga1_requestAnswer.response.forEach(element => {
					topList_Giga1[String(k++)] = element;
				});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "giga2MinisRequest", "params": {"user_ids":

			// Восстание ГИГАНТЮР! 2
			"19881414,"													// Дмитрий Пилюгин 1
			+ "118340842,"											// Данила Гончар 1
			+ "275557900,"											// Анастасия Бабенышева 1
			+ "601336937,"											// Барбос Кандорфие 1
			+ "198760416,"											// Константин Бородин 1
			+ "361563395,"											// Тимур Мартынов 1
			+ "194138998,"											// Роман Бегемаев 1 (1800)
			+ ""
			+ ""
			+ ""								// 10-ые
			+ "",
			"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
		}}).then(topList_Giga2_requestAnswer => {
				let k = 1;

				topList_Giga2_requestAnswer.response.forEach(element => {
					topList_Giga2[String(k++)] = element;
				});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "garg1MinisRequest", "params": {"user_ids":

			// Иполинский ход
			"626033970,"											// Анна Пентус 1
			+ "",
			"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
		}}).then(topList_Garg1_requestAnswer => {
				let k = 1;

				topList_Garg1_requestAnswer.response.forEach(element => {
					topList_Garg1[String(k++)] = element;
				});
			});

			await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "discountRequest", "params": {"user_ids":

			// Искатель сокровищ
			"118340842,"												// Данила Гончар +1 - 12%
			+"198760416,"												// Константин Бородин 1 - 10%
			+ "",
			"fields": "photo_200, city", "v":"5.132", "access_token":"e2373f10caa6b5d0b37266606145851a358eecce4226f6265217d6d2299ab0b65e805f6b9fed3acaaf12e"
		}}).then(topList_Discount_requestAnswer => {
				let k = 1;

				topList_Discount_requestAnswer.response.forEach(element => {
					topList_Discount[String(k++)] = element;
				});
			});

			setPopout(null);
	}

	setAllUsers();
	}, []);

	const go = e => {
		window.history.pushState( {panel: e.currentTarget.dataset.to}, `${e.currentTarget.dataset.to}` ); // Создаём новую запись в истории браузера
		setActivePanel(e.currentTarget.dataset.to);
  	//setActivePanel( name ); // Меняем активную панель
  	history.push( e.currentTarget.dataset.to ); // Добавляем панель в историю
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}
					history={history} // Ставим историю из массива панелей.
				  onSwipeBack={goBack} // При свайпе выполняется данная функция.
					popout={popout}
				>
					<Achievements id={ROUTES.ACHIEVEMENTS} topList_FirstFollowers={topList_FirstFollowers}
																								 topList_Medium1={topList_Medium1}
																			 					 topList_Medium2={topList_Medium2}
																								 topList_Large1={topList_Large1}
																								 topList_Giga1={topList_Giga1}
																								 topList_Giga2={topList_Giga2}
																								 topList_Garg1={topList_Garg1}
																								 topList_Discount={topList_Discount}
																								 go={go} platform={platform}/>
					<Top_First id={ROUTES.TOP_FIRST} topList_FirstFollowers={topList_FirstFollowers} currentUser={currentUser} go={go} />
					<Top_Medium1 id={ROUTES.TOP_MEDIUM1} topList_Medium1={topList_Medium1} currentUser={currentUser} go={go} />
					<Top_Medium2 id={ROUTES.TOP_MEDIUM2} topList_Medium2={topList_Medium2} currentUser={currentUser} go={go} />
					<Top_Large1 id={ROUTES.TOP_LARGE1} topList_Large1={topList_Large1} currentUser={currentUser} go={go} />
					<Top_Giga1 id={ROUTES.TOP_GIGA1} topList_Giga1={topList_Giga1} currentUser={currentUser} go={go} />
					<Top_Giga2 id={ROUTES.TOP_GIGA2} topList_Giga2={topList_Giga2} currentUser={currentUser} go={go} />
					<Top_Garg1 id={ROUTES.TOP_GARG1} topList_Garg1={topList_Garg1} currentUser={currentUser} go={go} />
					<Top_Discount id={ROUTES.TOP_DISCOUNT} topList_Discount={topList_Discount} currentUser={currentUser} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
