import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Types from "@redux/actions-types";
import { get } from "@redux/actions/companies";

import Info from "./info";

function mapStateToProps(state) {
	const { current, list } = state.companies;

	let company;
	if (current != null) company = list[current];

	return {
		company
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(
			{
				getCompany: get
			},
			dispatch
		)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);
