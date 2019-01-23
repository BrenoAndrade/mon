import Types from "@redux/actions-types";

function prepareCompany(list, action) {
	const { data, lastUpdateAt } = action;

	return {
		...list,
		[data.symbol]: {
			...list[data.symbol],
			...data,
			lastUpdateAt: lastUpdateAt || new Date().getTime()
		}
	};
}

function handleReceivedCompany(list = {}, action) {
	switch (action.type) {
		case Types.COMPANY_RECEIVED_DATA:
			return prepareCompany(list, action);
		default:
			return list;
	}
}

function handleEvent(status = Types.COMPANY_REQUEST_IDLE, action) {
	switch (action.type) {
		case Types.COMPANY_REQUEST_WAITING:
			return Types.COMPANY_REQUEST_WAITING;

		case Types.COMPANY_REQUEST_SUCCESS:
			return Types.COMPANY_REQUEST_SUCCESS;

		case Types.COMPANY_REQUEST_FAILURE:
			return Types.COMPANY_REQUEST_FAILURE;

		default:
			return status;
	}
}

function handleUpdateCurrent(current = null, action) {
	switch (action.type) {
		case Types.COMPANY_RECEIVED_DATA:
			return action.data.symbol;
		default:
			return current;
	}
}

export default (companies = {}, action) => ({
	current: handleUpdateCurrent(companies.current, action),
	list: handleReceivedCompany(companies.list, action),
	status: handleEvent(companies.status, action)
});
