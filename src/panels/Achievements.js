import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import achievement from '../img/achievement.png';
import './styles.css';

const Achievements = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>} // Кнопка назад
		>
			Достижения Ложи
		</PanelHeader>
		<img className="AchievementLogo" src={achievement} alt="Лавка миниатюрщика"/>
	</Panel>
);

Achievements.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Achievements;
