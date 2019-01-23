import Types from "@redux/actions-types";
import ClientChart from "@redux/clients/client-chart";

export function get(symbol, range) {
	return async (dispatch, getState) => {
		dispatch({ type: Types.CHART_REQUEST_WAITING });

		const symbolUp = symbol.toUpperCase();
		const { charts } = getState();

		if (
			charts.list &&
			charts.list[symbolUp] &&
			charts.list[symbolUp][range] &&
			charts.list[symbolUp][range].lastUpdateAt + 30000 < new Date().getTime()
		) {
			dispatch({
				type: Types.CHART_RECEIVED_DATA,
				data: chart.data,
				symbol: symbolUp,
				lastUpdateAt: chart.lastUpdateAt,
				range
			});
		} else {
			ClientChart.get(symbol, range)
				.then(response => response.json())
				.then(data => {
					dispatch({ type: Types.CHART_REQUEST_SUCCESS });
					dispatch({ type: Types.CHART_RECEIVED_DATA, data, range, symbol: symbolUp });
				})
				.catch(err => {
					dispatch({ type: Types.CHART_REQUEST_FAILURE });
				});
		}
	};
}

export default {
	get
};
