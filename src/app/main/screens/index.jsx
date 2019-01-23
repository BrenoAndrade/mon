import React from "react";

import "./style.css";
import Mon from "@assets/svg/mon.svg";

import Search from "@app/search/screens/search";
import Info from "@app/info/screens/info";
import Chart from "@app/chart/screens/chart";

export default () => (
	<div className="main">
		<Mon width={80} height={80} />
		<Search />
		<Chart />
		<Info />
	</div>
);
