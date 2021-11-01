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
let topUsers;
let topList_First = {
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
let topList_Mini = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Mini = 0;

// Средние миниатюры
let topList_Medium = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Medium = 0;

// Средние миниатюры
let topList_Big = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Big = 0;

// Гигантюры
let topList_Giga = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Giga = 0;

const Achievements = props => {
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  async function makeUsersTopLists() {
		topUsers = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params": {"user_ids":

		// Миниатюры в каждый дом!
		"1, "						//
		+ "2, "					//
		+ "3, "					//

		// Средние миниатюры
		+ "4, "     //
		+ "5, "				//
		+ "6, "					//

		// Большие миниатюры
		+ "7, "
		+ "9, "
		+ "8, "

		// Восстание ГИГАНТЮР
		+ "10, "
		+ "11, "
		+ "12, "

		// Первые последователи
		+ "176146375, "						// 1-ые 	// Никита
		+ "683862458, "											// Минчик
		+ " "											// ???
		+ " "
		+ " "
		+ " "
		+ " "
		+ " "
		+ " "
		+ " "								// 10-ые
		+ " "
		+ " ",
		"fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}}).then(data => {
			let i = 0;
			data.response.forEach(element => {
				if (i > 11) {
					topList_First[String(i-11)] = element;
				};
				i++;
			});

			topList_Mini["1"] = data.response[0];
			topList_Mini["2"] = data.response[1];
			topList_Mini["3"] = data.response[2];

			topList_Medium["1"] = data.response[3];
			topList_Medium["2"] = data.response[4];
			topList_Medium["3"] = data.response[5];

			topList_Big["1"] = data.response[6];
			topList_Big["2"] = data.response[7];
			topList_Big["3"] = data.response[8];

			topList_Giga["1"] = data.response[9];
			topList_Giga["2"] = data.response[10];
			topList_Giga["3"] = data.response[11];

			setPopout(null);

		});


		console.log(topList_First);

	};
	makeUsersTopLists();

	//console.log(props);

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
									<HorizontalCell size='s' header={topList_First["1"].first_name}>
				          	<Avatar size={56} src={topList_First["1"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_First["2"].first_name}>
				          	<Avatar size={56} src={topList_First["2"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' >
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 0 0',
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
									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="0">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="0">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="0">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>
								</div>
								<Progress style={{ margin: 'auto', width: '90%' }} value={(progress_Mini/300)*100} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Mini}/300
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
									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
										<Avatar size={56} src={noUser}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
										<Avatar size={56} src={noUser}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
										<Avatar size={56} src={noUser}/>
									</HorizontalCell>
								</div>
								<Progress style={{ margin: 'auto', width: '90%' }} value={progress_Medium} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
												{progress_Medium}/100
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
									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
				          	<Avatar size={56} src={noUser}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={"<пусто>"}
									subtitle="245">
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
