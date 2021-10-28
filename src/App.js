import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAdaptivity, View, ScreenSpinner, AdaptivityProvider, AppRoot, usePlatform, IOS, ANDROID } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Top_First from './panels/Top_First';
import Achievements from './panels/Achievements';

const ROUTES = {
	ACHIEVEMENTS: "achievements",
	TOP_FIRST: "top_first"
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.ACHIEVEMENTS);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { viewWidth } = useAdaptivity();

	const platform = usePlatform();
	console.log(platform);
	const isDesktop = viewWidth >= 4;
	console.log(isDesktop);

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
					<Top_First id={ROUTES.TOP_FIRST} platform={platform} isDesktop={isDesktop} go={go} />
					<Achievements id={ROUTES.ACHIEVEMENTS} go={go} viewWidth={viewWidth}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
