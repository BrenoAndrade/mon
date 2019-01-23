import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import Main from "@app/main/screens";
import configureStore from "@redux/store";

ReactDOM.render(
	<Provider store={configureStore()}>
		<Main />
	</Provider>,
	document.getElementById("root")
);
