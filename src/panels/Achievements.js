import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Banner,
				 Button,
				 Card, CardGrid, CardScroll, ContentCard,
				 Counter,
				 Div,
				 Gallery,
				 Group,
				 Link,
				 Header,
				 HorizontalCell, HorizontalScroll,
				 Panel, PanelHeader, PanelHeaderBack,
				 Progress,
				 ScreenSpinner,
				 Text, Title,
			 	 ViewWidth } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import firstAchievement from '../img/firstAchievement.svg';
import mediumAchievement_1 from '../img/mediumAchievement_1.svg';
import bigAchievement_1 from '../img/bigAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';
import noUser from '../img/noUser.png';

import './styles.css';

// Первые последователи
let topList_FirstFollowers = {
	"1": {},
	"2": {},
	"3": {},
	"4": {},
	"5": {},
	"6": {},
	"7": {},
	"8": {},
	"9": {},
}

// Миниатюры в каждый дом!
let topRequest_Medium1;
let topList_Medium1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Medium = 19;

// Крупная партия
let topRequest_Big1;
let topList_Big1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Big = 2;

// Восстание ГИГАНТЮР
let topRequest_Giga1;
let topList_Giga1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Giga = 1;

const Achievements = props => {
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  async function makeUsersTopLists() {

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params": {"user_ids":

			// Первые последователи
			"176146375, "						// 1-ые 	// Никита
			+ "683862458, "										// Минчик
			+ "78913349, "										// Валентин Филипенко
			+ "48864238, "										// Полина Светлова
			+ "603535757, "										// Twi Arwe (Федьвереш Артур Игоревич)
			+ "564115201, "										// Виктория Шеина
			+ "3871584, "										  // Андрей Алибаев
			+ "19881414, "										// Дмитрий Пилюгин
			+ "156977590 "										// Саша Брагин
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data2 => {
				let i = 1;
				data2.response.forEach(element => {
					topList_FirstFollowers[String(i++)] = element;
				});
		});

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "33test", "params": {"user_ids":

			// Миниатюры в каждый дом!

			"19881414, "											// Дмитрий Пилюгин 8
			+ "156977590, "										// Саша Брагин 4
			+ "603535757, "										// Twi Arwe 3
			+ "78913349, "										// Валентин Филипенко 2
			+ "48864238, "										// Полина Светлова 1
			+ "564115201 "										// Виктория Шеина 1
			+ " "
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data3 => {
				let i = 1;

				data3.response.forEach(element => {
					topList_Medium1[String(i++)] = element;
				});
		});

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids":

			// Крупная партия
			"603535757, "											// Twi Arwe 1
			+ "48864238, "										// Полина Светлова 1
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data4 => {
				let i = 1;

				data4.response.forEach(element => {
					topList_Big1[String(i++)] = element;
				});
		});

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids":

			// Восстание ГИГАНТЮР!
			"19881414, "												// Дмитрий Пилюгин 1
			+ "48864238, "											// ???
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data4 => {
				let i = 1;

				data4.response.forEach(element => {
					topList_Giga1[String(i++)] = element;
				});
		});

		setPopout(null);
	};
	makeUsersTopLists();

	let sizes = ViewWidth.MOBILE;

	return (
		<Panel id={props.id}>
			<PanelHeader>
				Достижения
			</PanelHeader>

			<Group>
				<Gallery
    			 style={{ height: '650px' }}
					 align='center'
					 isDraggable = 'false'
		    >
					<div style={{
						display: 'flex',
            flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>

							<Title level="1"
										 weight="semibold"
										 style={{ textAlign: 'center', marginBottom: 3 }}
							>
								Первые последователи
							</Title>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
										  Сделайте заказ во время распродажи <br /> в честь основания Ложи Альмиража
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src={firstAchievement} />
							</div>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '20px 0 0 0',
								}}>
									<HorizontalCell size='s' header={topList_FirstFollowers["1"].first_name}>
				          	<Link href={"https://vk.com/id" + topList_FirstFollowers["1"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["1"].photo_200}/>
										</Link>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["2"].first_name}>
				          	<Link href={"https://vk.com/id" + topList_FirstFollowers["2"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["2"].photo_200}/>
										</Link>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["3"].first_name}>
				          	<Link href={"https://vk.com/id" + topList_FirstFollowers["3"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["3"].photo_200}/>
										</Link>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 0 0',
								}}>
									<HorizontalCell size='s' header={topList_FirstFollowers["4"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["4"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["4"].photo_200}/>
									</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["5"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["5"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["5"].photo_200}/>
									</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["6"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["6"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["6"].photo_200}/>
									</Link>
									</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 10px 0',
								}}>
									<HorizontalCell size='s' header={topList_FirstFollowers["7"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["7"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["7"].photo_200}/>
									</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["8"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["8"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["8"].photo_200}/>
									</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["9"].first_name}>
									<Link href={"https://vk.com/id" + topList_FirstFollowers["9"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_FirstFollowers["9"].photo_200}/>
									</Link>
									</HorizontalCell>
								</div>
							</HorizontalScroll>

							<div style={{
								display: 'block',
								padding: '0px',
							}}>

							<Button stretched size="l" onClick={props.go} data-to="top_first">
			 					Смотреть весь список
			 				</Button>
				     	</div>
				</div>
				</Gallery>
		  </Group>




			<Group>
				<Gallery
		      slideWidth={document.documentElement.clientWidth > 600 ? '50%' : '71%'}
		      style={{ height: '550px' }}
					align="center"
					showArrows
		    >
					<div style={{
						display: 'flex',
            flexDirection: 'column',
						alignItems: 'center',
						paddingTop: '20px'
					}}>
							<Title
								level="1"
								weight="semibold"
								style={{ textAlign: 'center', marginBottom: 3 }}
							>
								Миниатюры <br /> в каждый дом!
							</Title>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
										  Закажите миниатюры <br /> с диаметром подставки до 25мм
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src={mediumAchievement_1}  />
							</div>

							<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
								<div style={{
									display: 'flex',
									alignItems: 'normal',
								  justifyContent: 'start',
									padding: '20px',
								}}>
									<HorizontalCell size='s' header={topList_Medium1["1"].first_name}
									subtitle="8">
										<Link href={"https://vk.com/id" + topList_Medium1["1"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["1"].photo_200}/>
										</Link>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium1["2"].first_name}
									subtitle="4">
										<Link href={"https://vk.com/id" + topList_Medium1["2"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["2"].photo_200}/>
										</Link>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium1["3"].first_name}
									subtitle="3">
										<Link href={"https://vk.com/id" + topList_Medium1["3"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["3"].photo_200}/>
										</Link>
				        	</HorizontalCell>
								</div>
								<Progress style={{ margin: 'auto', width: '90%' }} value={(progress_Medium/300)*100} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Medium}/300
								</Text>
							</HorizontalScroll>
					</div>

					<div style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingTop: '20px'
					}}>
							<Title
								level="1"
								weight="semibold"
								style={{ textAlign: 'center', marginBottom: 3 }}
							>
								Крупная <br /> партия
							</Title>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
											Закажите миниатюры <br /> с диаметром подставки 50мм
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src={bigAchievement_1} />
							</div>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '20px',
								}}>
									<HorizontalCell size='s' header={topList_Big1["1"].first_name}
									subtitle="1">
										<Link href={"https://vk.com/id" + topList_Big1["1"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Big1["1"].photo_200}/>
										</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_Big1["2"].first_name}
									subtitle="1">
										<Link href={"https://vk.com/id" + topList_Big1["2"].id} target='_blank'>
											<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Big1["2"].photo_200}/>
										</Link>
									</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
									</HorizontalCell>
								</div>
								<Progress style={{ margin: 'auto', width: '90%' }} value={progress_Big} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
												{progress_Big}/100
								</Text>
							</HorizontalScroll>
					</div>

					<div style={{
						display: 'flex',
            flexDirection: 'column',
						alignItems: 'center',
						paddingTop: '20px'
					}}>
							<Title
								level="1"
								weight="semibold"
								style={{ textAlign: 'center', marginBottom: 3 }}
							>
								Восстание<br /> ГИГАНТЮР
							</Title>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
										  Закажите миниатюры <br /> с диаметром подставки 75мм
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src={gigaAchievement_1} />
							</div>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '20px',
								}}>
								<HorizontalCell size='s' header={topList_Giga1["1"].first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + topList_Giga1["1"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Giga1["1"].photo_200}/>
									</Link>
								</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
				          	<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
				        	</HorizontalCell>
								</div>
								<Progress style={{ margin: 'auto', width: '90%' }} value={progress_Giga*10} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Giga}/10
								</Text>
							</HorizontalScroll>
					</div>
				</Gallery>
		  </Group>

		</Panel>
	);
};

Achievements.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Achievements;
