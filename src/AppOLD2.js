import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import bridge from '@vkontakte/vk-bridge';
import {
  useAdaptivity,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
	ScreenSpinner,
	Div,
	Button,
	Avatar,
	Progress
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Achievements from './panels/Achievements';

const ROUTES = {
	HOME: "home",
	ACHIEVEMENTS: "achievements"
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.HOME);
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
    <SplitLayout header={<PanelHeader separator={false} />}>
      <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
        <View activePanel="main">
          <Panel id="main">
            <PanelHeader>VKUI</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
              <SimpleCell>Hello</SimpleCell>
              <SimpleCell>World</SimpleCell>
            </Group>

						<Group header={<Header mode="secondary">Типы кнопок</Header>}>
							<Div>
								<Button>Primary</Button>
							</Div>
							<Div>
								<Button mode="secondary">Secondary</Button>
							</Div>
							<Div>
								<Button mode="tertiary">Tertiary</Button>
							</Div>
							<Div>
								<Button mode="outline">Outline</Button>
							</Div>
							<Div>
								<Button mode="commerce">Commerce</Button>
							</Div>
							<Div>
								<Button mode="destructive">Destructive</Button>
							</Div>
							<Div style={{ background: '#232323' }}>
								<Button mode="overlay_primary">Overlay Primary</Button>
							</Div>
							<Div style={{ background: '#232323' }}>
								<Button mode="overlay_secondary">Overlay Secondary</Button>
							</Div>
							<Div style={{ background: '#232323' }}>
								<Button mode="overlay_outline">Overlay Outline</Button>
							</Div>
						</Group>
						<Group>
							<Div style={{display: 'flex'}}>
				        <Button stretched mode="secondary" size="m">
				          Edit Info
				        </Button>
					        <Button stretched mode="secondary" size="m">
					          Edit Info
					        </Button>
				      </Div>
						</Group>

						<Group>
		          <SimpleCell indicator="+7 ••• •• •• 96" >
		            Номер телефона
		          </SimpleCell>
		          <SimpleCell indicator="g•••@gmail.com">
		            Email
		          </SimpleCell>
		        </Group>

						<Group>
			        <Header mode="secondary">Дефолтный размер</Header>
			        <SimpleCell
			          description="VKontakte"
			          before={<Avatar src="https://sun9-68.userapi.com/impg/ugf8DkdgLKOOQgD4nc2IFCgT6wNNGJIdu_pdWA/MV28oI1JBzo.jpg?size=1620x2160&quality=96&sign=e2a222f49662a6da5c0d6b312e9d2aa8&type=album"/>}
			        >
			          Никита Дворянский
			        </SimpleCell>
			      </Group>

						<Group>
			        <Div>
			          <Progress value={(84/300)*100} />
			        </Div>
			      </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
	);
}


export default App;
