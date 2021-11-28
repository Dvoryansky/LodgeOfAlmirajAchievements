import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Button,
				 Div,
				 Gallery,
				 Group,
				 Link,
				 Header,
				 HorizontalCell, HorizontalScroll,
				 Panel, PanelHeader, PanelHeaderBack,
				 Progress,
				 ScreenSpinner,
				 Text, Title } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import firstAchievement from '../img/firstAchievement.svg';
import mediumAchievement_1 from '../img/mediumAchievement_1.svg';
import bigAchievement_1 from '../img/bigAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';
import noUser from '../img/noUser.png';

import './styles.css';

// Миниатюры в каждый дом!
let topList_Medium1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Medium = 39;

// Крупная партия
let topList_Big1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Big = 3;

// Восстание ГИГАНТЮР
let topList_Giga1 = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Giga = 3;

const Achievements = props => {
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  async function makeUsersTopLists() {

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "mediumMinisRequest", "params": {"user_ids":

			// Миниатюры в каждый дом!
			"20229474, "											// Тоша Морозов 14
			+ "19881414, "										// Дмитрий Пилюгин 8
			+ "194138998, "										// Роман Бегемаев 5
			+ "603535757, "										// Twi Arwe 3
			+ "16405722, "										// Ал Суетнов 3
			+ "78913349, "										// Валентин Филипенко 2
			+ "48864238, "										// Полина Светлова 2
			+ "564115201, "										// Виктория Шеина 1
			+ "3871584 "											// Андрей Алибаев 1
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data3 => {
				let i = 1;

				data3.response.forEach(element => {
					topList_Medium1[String(i++)] = element;
				});
		});

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "bigMinisRequest", "params": {"user_ids":

			// Крупная партия
			"603535757, "											// Twi Arwe 1 (690)
			+ "48864238, "										// Полина Светлова 1 (390)
			+ "16405722 "										// Ал Суетнов 1 (370)
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

		await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "gigaMinisRequest", "params": {"user_ids":

			// Восстание ГИГАНТЮР!
			"19881414, "												// Дмитрий Пилюгин 1 (690)
			+ "477394855, "											// Дмитрий Токарев 1 (690)
			+ "16405722 "										// Ал Суетнов 1 (690)
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data5 => {
				let i = 1;

				data5.response.forEach(element => {
					topList_Giga1[String(i++)] = element;
				});
		});

		setPopout(null);
	};
	makeUsersTopLists();

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
									 style={{ marginBottom: 4 }}
						>
							Первые последователи
						</Title>
						<Text weight="regular"
									style={{
										color: 'gray',
										marginBottom: 14
									}}>
									  Сделайте заказ во время распродажи <br /> в честь основания Ложи Альмиража
						</Text>

						<div class='AchievementLogo' >
							<Avatar size={196} mode="image" src={firstAchievement} />
						</div>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '18px 0 0 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers["1"]?.first_name}>
			          	<Link href={"https://vk.com/id" + props.topList_FirstFollowers["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["1"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["2"]?.first_name}>
			          	<Link href={"https://vk.com/id" + props.topList_FirstFollowers["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["2"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["3"]?.first_name}>
			          	<Link href={"https://vk.com/id" + props.topList_FirstFollowers["3"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["3"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>
							</div>
						</HorizontalScroll>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '0 0 0 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers["4"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["4"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["4"]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["5"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["5"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["5"]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["6"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["6"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["6"]?.photo_200}/>
								</Link>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '0 0 10px 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers["7"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["7"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["7"]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["8"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["8"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["8"]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers["9"]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers["9"]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers["9"]?.photo_200}/>
								</Link>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_first">
			 					Смотреть весь список
			 				</Button>
			     	</div>
					</div>
				</Gallery>
		  </Group>



			<Group>
				<Gallery
		      slideWidth={document.documentElement.clientWidth > 600 ? '50%' : '70%'}
		      style={{ height: '550px' }}
					align="center"
					showArrows
		    >
					<div style={{
						display: 'flex',
            flexDirection: 'column',
						alignItems: 'center',
						paddingTop: '20px',
						textAlign: 'center',
					}}>
						<Title
							level="1"
							weight="semibold"
							style={{ marginBottom: 4 }}
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
							<div class='horizontalTopList'>
								<HorizontalCell size='s' header={topList_Medium1["1"].first_name}
								subtitle="14">
									<Link href={"https://vk.com/id" + topList_Medium1["1"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["1"].photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={topList_Medium1["2"].first_name}
								subtitle="8">
									<Link href={"https://vk.com/id" + topList_Medium1["2"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["2"].photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={topList_Medium1["3"].first_name}
								subtitle="5">
									<Link href={"https://vk.com/id" + topList_Medium1["3"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Medium1["3"].photo_200}/>
									</Link>
			        	</HorizontalCell>
							</div>
							<Progress style={{ margin: 'auto', width: '85%' }} value={(progress_Medium/300)*100} />
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
						paddingTop: '20px',
						textAlign: 'center',
					}}>
						<Title
							level="1"
							weight="semibold"
							style={{ marginBottom: 4 }}
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
							<div class='horizontalTopList'>
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

								<HorizontalCell size='s' header={topList_Big1["3"].first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + topList_Big1["3"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Big1["3"].photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
							<Progress style={{ margin: 'auto', width: '85%' }} value={progress_Big} />
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
						paddingTop: '20px',
						textAlign: 'center',
					}}>
						<Title
							level="1"
							weight="semibold"
							style={{ marginBottom: 4 }}
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
							<div class='horizontalTopList'>
								<HorizontalCell size='s' header={topList_Giga1["1"].first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + topList_Giga1["1"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Giga1["1"].photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={topList_Giga1["2"].first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + topList_Giga1["2"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Giga1["2"].photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={topList_Giga1["3"].first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + topList_Giga1["3"].id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={topList_Giga1["3"].photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
							<div>
								<Progress style={{ margin: 'auto', width: '85%' }} value={progress_Giga*10} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Giga}/10
								</Text>
							</div>
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
