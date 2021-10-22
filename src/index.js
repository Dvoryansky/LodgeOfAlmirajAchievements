import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot
} from "@vkontakte/vkui";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
  		<AppRoot>
        <App />
    	</AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
