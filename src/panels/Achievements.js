import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Button,
				 Gallery,
				 Group,
				 Link,
				 Header,
				 HorizontalCell, HorizontalScroll,
				 Panel, PanelHeader, WriteBarIcon,
				 Progress,
				 Text, Title } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import firstAchievement from '../img/firstAchievement.svg';
import mediumAchievement_1 from '../img/mediumAchievement_1.svg';
import largeAchievement_1 from '../img/largeAchievement_1.svg';
import gigaAchievement_1 from '../img/gigaAchievement_1.svg';
import gigaAchievement_2 from '../img/gigaAchievement_2.svg';
import gargAchievement_1 from '../img/gargAchievement_1.svg';

import unavailableAchievement from '../img/unavailableAchievement.svg';
import noUser from '../img/noUser.png';

import './styles.css';

let progress_Medium = 268;
let progress_Large = 26;
let progress_Giga = 32;
let progress_Garg = 1;

let keys = [];

const Achievements = props => {

	const [slideIndex_Giga, setSlideIndex_Giga] = useState(1);

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
					style={{ height: '510px' }}
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
							Тайное <br /> достижение
						</Title>
						<Text weight="regular"
									style={{
										textAlign: 'center',
										color: 'gray',
										marginBottom: 16
									}}>
										Для открытия нужно что-то сделать
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={unavailableAchievement} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={"Здесь"}
								subtitle="никого">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>

								<HorizontalCell size='s' header={"И тут"}
								subtitle="тоже">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>

								<HorizontalCell size='s' header={"Где же"}
								subtitle="все?..">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<div style={{ width: '99.5%' }}>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
											Здесь должно быть что-то. Но что? <br /> Ответ	придётся поискать.
							</Text>
						</div>
					</div>

				</Gallery>
			</Group>

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
								subtitle="36">
									<Link href={"https://vk.com/id" + props.topList_Medium1["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Medium1["1"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Medium1["2"]?.first_name}
								subtitle="30">
									<Link href={"https://vk.com/id" + props.topList_Medium1["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Medium1["2"]?.photo_200}/>
									</Link>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Medium1["3"]?.first_name}
								subtitle="19">
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

				</Gallery>
		  </Group>


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
							Крупная <br /> партия
						</Title>
						<Text weight="regular"
									style={{
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
								subtitle="4">
									<Link href={"https://vk.com/id" + props.topList_Large1["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Large1["2"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Large1["3"]?.first_name}
								subtitle="3">
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

				</Gallery>
		  </Group>


			<Group>
				<Gallery
					slideWidth={document.documentElement.clientWidth > 580 ? '50%' : '70%'}
					style={{ height: '610px' }}
					align="center"
					slideIndex={slideIndex_Giga}
        	onChange={setSlideIndex_Giga}
					showArrows
					isDraggable
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
							Восстание<br /> ГИГАНТЮР
						</Title>
						<Text weight="regular"
									style={{
										textAlign: 'center',
										color: 'gray',
										marginBottom: 16
									}}>
									  Призываю вас! <br /> Восстаньте, гигантюры!
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={gigaAchievement_1} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Giga1["1"]?.first_name}
								subtitle="4">
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
								subtitle="2">
									<Link href={"https://vk.com/id" + props.topList_Giga1["3"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga1["3"]?.photo_200}/>
									</Link>
								</HorizontalCell>
							</div>
						</HorizontalScroll>

						<div style={{ width: '99.5%' }}>

							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
											Все 30 гигантюр восстали и творят хаос! <br />Кто же их остановит? И остановит ли?..
							</Text>
						</div>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_giga1">
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
							Гигантюрный<br /> ХАОС
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
							<Avatar size={196} mode="image" src={gigaAchievement_2} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Giga2["1"]?.first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + props.topList_Giga2["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga2["1"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={props.topList_Giga2["2"]?.first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + props.topList_Giga2["2"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Giga2["2"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={"Третий"}
								subtitle="не лишний">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>
							</div>

							<div style={{}}>
								<div style={{ width: '30%', display: 'inline-block'}}>
									<progress class="progressA" value={30/30*100} max="70"/>
								</div>
									<div style={{width: '60%', display: 'inline-block'}}>
									<progress class="progressB" value={progress_Giga-30} max="70" />
								</div>
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16,
											}}>
												{progress_Giga}/100
								</Text>
							</div>
						</HorizontalScroll>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_giga2">
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
					</div>

				</Gallery>
		  </Group>


			<Group>
				<Gallery
					slideWidth={document.documentElement.clientWidth > 580 ? '50%' : '70%'}
					style={{ height: '580px' }}
					align="center"
					isDraggable
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
							Исполинский ход
						</Title>
						<Text weight="regular"
									style={{
										textAlign: 'center',
										color: 'gray',
										marginBottom: 16
									}}>
									  Закажите миниатюры <br /> исполинского размера
						</Text>

						<div className='AchievementLogo' >
							<Avatar size={196} mode="image" src={gargAchievement_1} />
						</div>

						<HorizontalScroll>
							<div className='horizontalTopList'>
								<HorizontalCell size='s' header={props.topList_Garg1["1"]?.first_name}
								subtitle="1">
									<Link href={"https://vk.com/id" + props.topList_Garg1["1"]?.id} target='_blank'>
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={props.topList_Garg1["1"]?.photo_200}/>
									</Link>
								</HorizontalCell>

								<HorizontalCell size='s' header={"Никого"}
								subtitle="нет">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>

								<HorizontalCell size='s' header={"Только"}
								subtitle="Анна">
										<Avatar size={props.platform === 'ios' ? 64 : 56} src={noUser}/>
								</HorizontalCell>
							</div>
							<div>
								<Progress style={{ margin: 'auto', width: '85%' }} value={progress_Garg/15*100} />
								<Text weight="regular"
											style={{
												textAlign: 'center',
												color: 'gray',
												marginBottom: 16
											}}>
											  {progress_Garg}/15
								</Text>
							</div>
						</HorizontalScroll>

						<div>
							<Button stretched size="l" onClick={props.go} data-to="top_garg1">
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
