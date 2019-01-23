import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Types from "@redux/actions-types";
import { get } from "@redux/actions/charts";

import Chart from "./chart";

function mapStateToProps(state) {
	const { current: currentCompany } = state.companies;
	const { status, list, current: currentChart } = state.charts;

	let charts = { data: [] };
	if (list[currentCompany] && list[currentCompany][currentChart]) {
		charts = list[currentCompany][currentChart];
	}

	return {
		charts,
		currentCompany,
		currentChart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(
			{
				getCharts: get
			},
			dispatch
		)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chart);
