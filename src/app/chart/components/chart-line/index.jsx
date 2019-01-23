import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default props => {
	const { data, x, y, l1, l2 } = props;

	return (
		<LineChart
			width={700}
			height={300}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<XAxis dataKey={x} />
			<YAxis dataKey={y} />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey={l1} stroke="#000000" />
			<Line type="monotone" dataKey={l2} stroke="#8884d8" />
		</LineChart>
	);
};
