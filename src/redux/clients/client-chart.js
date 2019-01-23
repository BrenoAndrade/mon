import ClientBase from "./client-base";

const sing = {};

class ClientChart {
	constructor() {
		this.client = ClientBase;
	}

	get(symbol, range) {
		return this.client.get(`stock/${symbol}/chart/${range}?chartSimplify=true`);
	}
}

if (!sing.client) sing.client = new ClientChart();
export default sing.client;
