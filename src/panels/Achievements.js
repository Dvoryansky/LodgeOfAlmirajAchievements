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
import miniAchievement_1 from '../img/miniAchievement_1.svg';
import bigAchievement_1 from '../img/bigAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';
import noUser from '../img/noUser.png';

import './styles.css';

// Первые последователи
let topRequest_FirstFollowers;
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
let progress_Medium = 7;

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
let progress_Giga = 0;

const Achievements = props => {
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  async function makeUsersTopLists() {

		topRequest_FirstFollowers = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params": {"user_ids":

			// Первые последователи
			"176146375, "						// 1-ые 	// Никита
			+ "683862458, "										// Минчик
			+ "78913349, "										// Валентин Филипенко
			+ "48864238, "										// Полина Светлова
			+ "603535757 "										// Twi Arwe
			+ " "
			+ " "
			+ " "
			+ " "
			+ " "								// 10-ые
			+ " ",
			"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data2 => {
				let i = 1;
				data2.response.forEach(element => {
					topList_FirstFollowers[String(i++)] = element;
				});
		});

		topRequest_Medium1 = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "33test", "params": {"user_ids":

			// Крупная партия
			"603535757, "											// Twi Arwe
			+ "78913349, "										// Валентин Филипенко
			+ "48864238, "										// Полина Светлова
			+ " "
			+ " "
			+ " "
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

		topRequest_Giga1 = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids":

			// Восстание ГИГАНТЮР
			"603535757, "											// Twi Arwe
			+ "48864238, "										// Полина Светлова
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

		topRequest_Big1 = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "34test", "params": {"user_ids":

			// Миниатюры в каждый дом!
			"603535757, "											// Twi Arwe
			+ "48864238, "											// Полина Светлова
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
				<Gallery slideWidth={props.isDesktop ? '50%' : '70%'}
		      			 style={{ height: '650px' }}
								 align="center"
								 showArrows
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
				          	<Avatar size={56} src={topList_FirstFollowers["1"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["2"].first_name}>
				          	<Avatar size={56} src={topList_FirstFollowers["2"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["3"].first_name}>
				          	<Avatar size={56} src={topList_FirstFollowers["3"].photo_200}/>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 0 0',
								}}>
									<HorizontalCell size='s' header={topList_FirstFollowers["4"].first_name}>
										<Avatar size={56} src={topList_FirstFollowers["4"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_FirstFollowers["5"].first_name}>
										<Avatar size={56} src={topList_FirstFollowers["5"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' >
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 10px 0',
								}}>
									<HorizontalCell size='s' >
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' >
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' >
				          	<Avatar size={56} src={noUser}/>
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
		      slideWidth={props.isDesktop ? '50%' : '70%'}
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
								<Avatar size={196} mode="image" src={miniAchievement_1}  />
							</div>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '20px',
								}}>
									<HorizontalCell size='s' header={topList_Medium1["1"].first_name}
									subtitle="3">
				          	<Avatar size={56} src={topList_Medium1["1"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium1["2"].first_name}
									subtitle="2">
				          	<Avatar size={56} src={topList_Medium1["2"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium1["3"].first_name}
									subtitle="2">
				          	<Avatar size={56} src={topList_Medium1["3"].photo_200}/>
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
										<Avatar size={56} src={topList_Big1["1"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_Big1["2"].first_name}
									subtitle="1">
										<Avatar size={56} src={topList_Big1["2"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
										<Avatar size={56} src={noUser}/>
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
									<HorizontalCell size='s' header={""}
									subtitle="">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={""}
									subtitle="">
				          	<Avatar size={56} src={noUser}/>
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
