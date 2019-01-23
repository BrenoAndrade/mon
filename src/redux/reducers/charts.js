import Types from "@redux/actions-types";

function prepareCharts(charts, action) {
	const { data, range, symbol, lastUpdateAt } = action;

	return {
		...charts,
		[symbol]: {
			...charts[symbol],
			[range]: {
				data,
				lastUpdateAt: lastUpdateAt || new Date().getTime()
			}
		}
	};
}

function handleReceivedChart(charts = {}, action) {
	switch (action.type) {
		case Types.CHART_RECEIVED_DATA:
			return prepareCharts(charts, action);

		default:
			return charts;
	}
}

function handleEvent(status = Types.CHART_REQUEST_IDLE, action) {
	switch (action.type) {
		case Types.CHART_REQUEST_WAITING:
			return Types.CHART_REQUEST_WAITING;

		case Types.CHART_REQUEST_SUCCESS:
			return Types.CHART_REQUEST_SUCCESS;

		case Types.CHART_REQUEST_FAILURE:
			return Types.CHART_REQUEST_FAILURE;

		default:
			return status;
	}
}

function handleUpdateCurrent(current = "1d", action) {
	switch (action.type) {
		case Types.CHART_RECEIVED_DATA:
			return action.range;
		default:
			return current;
	}
}

export default (charts = {}, action) => ({
	current: handleUpdateCurrent(charts.current, action),
	list: handleReceivedChart(charts.list, action),
	status: handleEvent(charts.status, action)
});
