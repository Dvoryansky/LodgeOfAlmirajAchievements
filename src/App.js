import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAdaptivity, View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Achievements from './panels/Achievements';

const ROUTES = {
	HOME: "home",
	ACHIEVEMENTS: "achievements"
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.ACHIEVEMENTS);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { viewWidth } = useAdaptivity();

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} />
					<Achievements id={ROUTES.ACHIEVEMENTS} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
