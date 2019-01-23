import React from "react";

import Label from "@app/info/components/label";

export default props => {
	const { company } = props;
	if (!company) return null;

	const { companyName, CEO, website, description, sector, symbol, latestPrice } = company;

	return (
		<div>
			<Label name="Ultimo Preço" value={latestPrice} />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Label name="Empresa" value={companyName} />
				<Label name="CEO" value={CEO} />
				<Label name="Symbol" value={symbol} />
				<Label name="Setor" value={sector} />
				<Label name="Site" value={website} />
			</div>
			<Label name="Descrição" value={description} />
		</div>
	);
};
