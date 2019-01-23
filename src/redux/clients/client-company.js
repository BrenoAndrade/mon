import ClientBase from "./client-base";

const sing = {};

class ClientCompany {
	constructor() {
		this.client = ClientBase;
	}

	get(symbol) {
		return this.client.get(`stock/${symbol}/company`);
	}
}

if (!sing.client) sing.client = new ClientCompany();
export default sing.client;
