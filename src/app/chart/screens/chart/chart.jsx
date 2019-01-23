import React, { PureComponent } from "react";

import Select from "@app/chart/components/select";
import ChartLine from "@app/chart/components/chart-line";

class Chart extends PureComponent {
	constructor(props) {
		super(props);

		this.changeDate = this.changeDate.bind(this);
	}

	changeDate(date) {
		const { currentCompany, actions } = this.props;
		actions.getCharts(currentCompany, date);
	}

	render() {
		const { charts, currentCompany, currentChart } = this.props;

		if (!currentCompany) return null;

		return (
			<div style={{ alignItems: "center" }}>
				<Select onChange={this.changeDate} />
				{charts.data.length > 0 && (
					<ChartLine data={charts.data} x="date" y="" l1="high" l2="low" />
				)}
			</div>
		);
	}
}

export default Chart;
