import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Types from "@redux/actions-types";
import { get } from "@redux/actions/companies";

import Search from "./search";

function mapStateToProps(state) {
	const { status, list } = state.companies;
	return { status, Types, companies: list };
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
)(Search);
