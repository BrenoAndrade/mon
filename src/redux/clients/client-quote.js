import ClientBase from "./client-base";

const sing = {};

class ClientQuote {
	constructor() {
		this.client = ClientBase;
	}

	get(symbol) {
		return this.client.get(`stock/${symbol}/quote`);
	}
}

if (!sing.client) sing.client = new ClientQuote();
export default sing.client;
