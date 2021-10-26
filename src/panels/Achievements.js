import React from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import { Avatar,
				 Banner,
				 Button,
				 Card, CardGrid, CardScroll, ContentCard,
				 Counter,
				 Gallery,
				 Group,
				 Header,
				 HorizontalCell, HorizontalScroll,
				 Panel, PanelHeader, PanelHeaderBack,
				 Progress,
				 Text, Title } from '@vkontakte/vkui';

import { Icon16InfoCirle } from '@vkontakte/icons';
import { Icon12Question } from '@vkontakte/icons';

import achievement from '../img/achievement.png';
import './styles.css';

let topUsers;
let topList = {
	"1": {},
	"2": {},
	"3": {},
}

const Achievements = props => {
 async function usersList() {
		topUsers = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params": {"user_ids": "176146375, 168505910, deniskamyzhik", "fields": "photo_200", "v":"5.131", "access_token":"cd4e738acd4e738acd4e738a93cd37cec6ccd4ecd4e738aac231fbb41d26d522accbf95"}});
		topList["1"] = topUsers.response[0];
		topList["2"] = topUsers.response[1];
		topList["3"] = topUsers.response[2];
	}
	usersList();

	return (
		<Panel id={props.id}>
			<PanelHeader>
				Достижения Ложи
			</PanelHeader>

			<Group>
				<Gallery
		      slideWidth="60%"
		      style={{ height: '450px' }}
					align="center"
					showArrows
		    >
					<div style={{ paddingBottom: '66%' }}>
							<Title
								level="1"
								weight="semibold"
								style={{ textAlign: 'center', marginBottom: 3 }}
							>
								Миниатюры в каждый дом!
							</Title>
							<Text weight="regular"
										style={{
											textAlign: 'center',
											color: 'gray',
											marginBottom: 16
										}}>
										  100 миниатюр хотят найти хозяев <Button size="xs"
																															 mode="tertiary"

																															 after={<Icon12Question width={16}
																																										  height={16}
																																										  style={{ color: 'orange' }} />}
										>
										</Button>
							</Text>

							<div class='AchievementLogo' >
								<Avatar size={196} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"  />
							</div>

							<HorizontalScroll>
							<div style={{ display: 'flex', width: '56%', margin: 'auto' }}>
								<a href="https://vk.com/id176146375" target="_blank"><HorizontalCell size='s' header={topList["1"].first_name}>
			          	<Avatar size={56} src={topList["1"].photo_200}/>
			        	</HorizontalCell></a>

								<HorizontalCell size='s' header={topList["2"].first_name}>
			          	<Avatar size={56} src={topList["2"].photo_200}/>
			        	</HorizontalCell>

								<HorizontalCell size='s' header={topList["3"].first_name}>
			          	<Avatar size={56} src={topList["3"].photo_200}/>
			        	</HorizontalCell>
								</div>
							</HorizontalScroll>

							<br />
							<Progress value={100} />
					</div>

					<div style={{ paddingBottom: '66%' }}>
						<Title
							level="1"
							weight="semibold"
							style={{ textAlign: 'center', marginBottom: 3 }}
						>
						  Миниатюры в каждый карман!
						</Title>
						<Text weight="regular"
									style={{
										textAlign: 'center',
										color: 'gray',
										marginBottom: 16
									}}>
									  1000 миниатюр хотят найти хозяев <Button size="xs"
																														 mode="tertiary"
																														 after={<Icon12Question width={16}
																																									  height={16}
																																									  style={{ color: 'orange' }} />}
									>
									</Button>
						</Text>

						<div class='AchievementLogo' >
							<Avatar size={196} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"  />
						</div>

						<HorizontalScroll>
						<div style={{ display: 'flex', width: '56%', margin: 'auto' }}>
							<HorizontalCell size='s' header={"Иван"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>

							<HorizontalCell size='s' header={"Валера"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>

							<HorizontalCell size='s' header={"Аня"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>
							</div>
						</HorizontalScroll>

						<br />
						<Progress value={(40/300)*100} />
						</div>

					<div style={{ paddingBottom: '66%' }}>
						<Title
							level="1"
							weight="semibold"
							style={{ textAlign: 'center', marginBottom: 3 }}
						>
							Миниатюры каждой миниатюре!
						</Title>
						<Text weight="regular"
									style={{
										textAlign: 'center',
										color: 'gray',
										marginBottom: 16
									}}>
									  3000 миниатюр хотят найти хозяев <Button size="xs"
																														 mode="tertiary"
																														 after={<Icon12Question width={16}
																																									  height={16}
																																									  style={{ color: 'orange' }} />}
									>
									</Button>
						</Text>

						<div class='AchievementLogo' >
							<Avatar size={196} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"  />
						</div>

						<HorizontalScroll>
						<div style={{ display: 'flex', width: '56%', margin: 'auto' }}>
							<HorizontalCell size='s' header={"Иван"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>

							<HorizontalCell size='s' header={"Валера"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>

							<HorizontalCell size='s' header={"Аня"}>
		          	<Avatar size={56}/>
		        	</HorizontalCell>
							</div>
						</HorizontalScroll>

						<br />
						<Progress value={0} />
					</div>
				</Gallery>
		  </Group>

			<Group>
	  	</Group>
		</Panel>
	);
};

Achievements.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Achievements;
