import React from "react";

const dates = ["1d", "1m", "3m", "6m", "ytd", "1y", "2y", "5y"];

export default props => {
	const { onChange } = props;

	return (
		<div
			style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "20px" }}
		>
			{dates.map(date => (
				<input
					style={{ margin: 5, backgroundColor: "#0047BB", color: "#fff", borderRadius: 5 }}
					type="submit"
					value={date}
					onClick={() => onChange(date)}
				/>
			))}
		</div>
	);
};
