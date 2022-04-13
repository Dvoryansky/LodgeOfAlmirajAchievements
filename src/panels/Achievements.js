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
				 Text, Title } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import firstAchievement from '../img/firstAchievement.svg';
import mediumAchievement_1 from '../img/mediumAchievement_1.svg';
import largeAchievement_1 from '../img/largeAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';
import noUser from '../img/noUser.png';

import './styles.css';

let progress_Medium = 167;
let progress_Large = 20;
let progress_Giga = 26;

let keys = [];

const Achievements = props => {

	if (!keys[0]) {
		keys = Object.keys(props.topList_FirstFollowers);
		keys.sort(() => {return Math.random() - 0.5;});
	}

	return (
		<Panel id={props.id}>
			<PanelHeader>
				Достижения
			</PanelHeader>

			<Group>
				<Gallery
		      slideWidth={document.documentElement.clientWidth > 580 ? '50%' : '70%'}
		      style={{ height: '580px' }}
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
									  Закажите миниатюры <br /> среднего или меньшего размера
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={mediumAchievement_1}  />
						</div>
						<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Medium1["1"]?.first_name}
								subtitle="30">
									<Link href={"https://vk.com/id" + props.topList_Medium1["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Medium1["1"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Medium1["2"]?.first_name}
								subtitle="14">
									<Link href={"https://vk.com/id" + props.topList_Medium1["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Medium1["2"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Medium1["3"]?.first_name}
								subtitle="11">
									<Link href={"https://vk.com/id" + props.topList_Medium1["3"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Medium1["3"]?.photo_200}/>
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

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_medium1">
			 					Смотреть весь топ
			 				</Button>
			     	</div>
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
										Закажите миниатюры <br /> крупного размера
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={largeAchievement_1} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Large1["1"]?.first_name}
								subtitle="5">
									<Link href={"https://vk.com/id" + props.topList_Large1["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Large1["1"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Large1["2"]?.first_name}
								subtitle="3">
									<Link href={"https://vk.com/id" + props.topList_Large1["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Large1["2"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Large1["3"]?.first_name}
								subtitle="2">
									<Link href={"https://vk.com/id" + props.topList_Large1["3"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Large1["3"]?.photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
							<Progress style={{ margin: 'auto', width: '85%' }} value={progress_Large} />
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
											{progress_Large}/100
							</Text>
						</HorizontalScroll>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_large1">
			 					Смотреть весь топ
			 				</Button>
			     	</div>
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
									  Закажите миниатюры <br /> огромного размера
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={gigaAchievement_1} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Giga1["1"]?.first_name}
								subtitle="2">
									<Link href={"https://vk.com/id" + props.topList_Giga1["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga1["1"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Giga1["2"]?.first_name}
								subtitle="2">
									<Link href={"https://vk.com/id" + props.topList_Giga1["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga1["2"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Giga1["3"]?.first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + props.topList_Giga1["3"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga1["3"]?.photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
							<div>
								<Progress style={{ margin: 'auto', width: '85%' }} value={progress_Giga*10/3} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Giga}/30
								</Text>
							</div>
						</HorizontalScroll>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_giga1">
			 					Смотреть весь топ
			 				</Button>
			     	</div>
					</div>
				</Gallery>
		  </Group>

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

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={firstAchievement} />
						</div>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '18px 0 0 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[0]]?.first_name}>
									<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[0]]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[0]]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[1]]?.first_name}>
									<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[1]]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[1]]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[2]]?.first_name}>
									<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[2]]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[2]]?.photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '0 0 0 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[3]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[3]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[3]]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[4]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[4]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[4]]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[5]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[5]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[5]]?.photo_200}/>
								</Link>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<HorizontalScroll>
							<div style={{
								display: 'flex',
								padding: '0 0 10px 0',
							}}>
								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[6]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[6]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[6]]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[7]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[7]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[7]]?.photo_200}/>
								</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_FirstFollowers[keys[8]]?.first_name}>
								<Link href={"https://vk.com/id" + props.topList_FirstFollowers[keys[8]]?.id} target='_blank'>
									<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_FirstFollowers[keys[8]]?.photo_200}/>
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

		</Panel>
	);
};

Achievements.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Achievements;
