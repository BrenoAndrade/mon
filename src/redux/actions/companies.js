import Types from "@redux/actions-types";
import ClientCompany from "@redux/clients/client-company";
import ClientQuote from "@redux/clients/client-quote";

export function get(symbol) {
	return async (dispatch, getState) => {
		dispatch({ type: Types.COMPANY_REQUEST_WAITING });

		const company = getState().companies.list[symbol.toUpperCase()];
		if (company && company.lastUpdateAt + 30000 < new Date().getTime()) {
			dispatch({
				type: Types.COMPANY_RECEIVED_DATA,
				data: company,
				lastUpdateAt: company.lastUpdateAt
			});
		} else {
			try {
				ClientCompany.get(symbol)
					.then(response => response.json())
					.then(body => {
						dispatch({ type: Types.COMPANY_REQUEST_SUCCESS });
						dispatch({ type: Types.COMPANY_RECEIVED_DATA, data: body });
					});

				ClientQuote.get(symbol)
					.then(response => response.json())
					.then(body => {
						dispatch({ type: Types.COMPANY_REQUEST_SUCCESS });
						dispatch({ type: Types.COMPANY_RECEIVED_DATA, data: body });
					});
			} catch (err) {
				dispatch({ type: Types.COMPANY_REQUEST_FAILURE });
			}
		}
	};
}

export default {
	get
};
