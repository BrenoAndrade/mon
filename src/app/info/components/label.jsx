import React from "react";

export default ({ name, value }) => (
	<div style={{ marginRight: 50 }}>
		<h6 style={{ marginBottom: -10 }}>{name}</h6>
		<p>{value}</p>
	</div>
);
