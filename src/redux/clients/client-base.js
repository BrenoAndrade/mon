import { url } from "@config/client.json";

const Client = {
	get: path => fetch(`${url}${path}`)
};

export default Client;
