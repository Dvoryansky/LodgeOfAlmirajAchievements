import React from 'react';
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
				 Text, Title,
			 	 ViewWidth } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import firstAchievement from '../img/firstAchievement.svg';
import miniAchievement_1 from '../img/miniAchievement_1.svg';
import bigAchievement_1 from '../img/bigAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';

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
let progress_Mini = 45;

// Средние миниатюры
let topList_Medium = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Medium = 10;

// Средние миниатюры
let topList_Big = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Big = 10;

// Гигантюры
let topList_Giga = {
	"1": {},
	"2": {},
	"3": {},
}
let progress_Giga = 2;

const Achievements = props => {
  async function makeUsersTopLists() {
		topUsers = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params": {"user_ids":

		// Миниатюры в каждый дом!
		"176146375, "						// Никита
		+ "408481897, "					// Любовь
		+ "168505910, "					// Влад

		// Средние миниатюры
		+ "deniskamyzhik, "     // Денис
		+ "diman19911, "				// Дима
		+ "allaworld, "					// Алла

		// Большие миниатюры
		+ "deniskamyzhik, "
		+ "diman19911, "
		+ "allaworld, "

		// Восстание ГИГАНТЮР
		+ "40744463, "
		+ "qqobb, "
		+ "khitushko2013, "

		// Первые последователи
		+ "414366317, "						// 1-ые 	// ???
		+ "264984631, "											// Riley
		+ "di.klenz, "											// Дима Кленц
		+ "287796990, "
		+ "diman19911, "
		+ "allaworld, "
		+ "40744463, "
		+ "qqobb, "
		+ "qqobb, "
		+ "qqobb, "								// 10-ые
		+ "qqobb, "
		+ "khitushko2013",
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

									<HorizontalCell size='s' header={topList_First["3"].first_name}>
				          	<Avatar size={56} src={topList_First["3"].photo_200}/>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 0 0',
								}}>
									<HorizontalCell size='s' header={topList_First["4"].first_name}>
				          	<Avatar size={56} src={topList_First["4"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_First["5"].first_name}>
				          	<Avatar size={56} src={topList_First["5"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_First["6"].first_name}>
				          	<Avatar size={56} src={topList_First["6"].photo_200}/>
				        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '0 0 10px 0',
								}}>
									<HorizontalCell size='s' header={topList_First["7"].first_name}>
				          	<Avatar size={56} src={topList_First["7"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_First["8"].first_name}>
				          	<Avatar size={56} src={topList_First["8"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_First["9"].first_name}>
				          	<Avatar size={56} src={topList_First["9"].photo_200}/>
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
										  Закажите миниатюры <br /> с диаметром подставки 25мм
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src={miniAchievement_1}  />
							</div>

							<HorizontalScroll>
								<div style={{
									display: 'flex',
									padding: '20px',
								}}>
									<HorizontalCell size='s' header={topList_Mini["1"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Mini["1"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Mini["2"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Mini["2"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Mini["3"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Mini["3"].photo_200}/>
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
									<HorizontalCell size='s' header={topList_Medium["1"].first_name}
									subtitle="245">
										<Avatar size={56} src={topList_Medium["1"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium["2"].first_name}
									subtitle="245">
										<Avatar size={56} src={topList_Medium["2"].photo_200}/>
									</HorizontalCell>

									<HorizontalCell size='s' header={topList_Medium["3"].first_name}
									subtitle="245">
										<Avatar size={56} src={topList_Medium["3"].photo_200}/>
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
									<HorizontalCell size='s' header={topList_Giga["1"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Giga["1"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Giga["2"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Giga["2"].photo_200}/>
				        	</HorizontalCell>

									<HorizontalCell size='s' header={topList_Giga["3"].first_name}
									subtitle="245">
				          	<Avatar size={56} src={topList_Giga["3"].photo_200}/>
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
