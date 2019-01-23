import React from "react";

import Input from "@app/search/components/input";

class Search extends React.PureComponent {
	constructor(props) {
		super(props);

		this.changeValueInput = this.changeValueInput.bind(this);

		this.state = {
			value: ""
		};
	}

	getCompany(value) {
		const { actions, companies } = this.props;

		clearTimeout(this.timeoutGetCompany);
		this.timeoutGetCompany = setTimeout(() => {
			actions.getCompany(value);
		}, 1000);
	}

	changeValueInput({ target: { value } }) {
		this.setState({ value });
		this.getCompany(value);
	}

	formatMessage(status) {
		const { Types } = this.props;

		switch (status) {
			case Types.COMPANY_REQUEST_WAITING:
				return "Buscando...";

			case Types.COMPANY_REQUEST_SUCCESS:
				return "Sucesso!";

			case Types.COMPANY_REQUEST_FAILURE:
				return "Ocorreu algum erro :(";

			default:
				return "Digite o símbolo da empresa!";
		}
	}

	render() {
		const { value } = this.state;
		const { status } = this.props;

		const message = this.formatMessage(status);

		return (
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<h3>{message}</h3>
				<Input value={value} onChange={this.changeValueInput} />
			</div>
		);
	}
}

export default Search;
