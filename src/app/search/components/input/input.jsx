import React, { PureComponent } from "react";

import "./style.css";

class Input extends PureComponent {
	render() {
		const { onChange, value } = this.props;
		return (
			<input
				style={{ width: "400px", marginTop: "12px" }}
				name="input-search"
				className="input-search"
				value={value}
				onChange={onChange}
				type="text"
			/>
		);
	}
}

export default Input;
