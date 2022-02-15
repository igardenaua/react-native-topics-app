export const fetchAsync = async (resource, setState, ...callbacks) => {

	callbacks.forEach(cb => cb(true));

	try {
		const Request = await fetch(resource);
		const response = await Request.json();

		setState(response);
		
		callbacks.forEach(cb => cb(false));
		console.log('Got response from: ', resource);
	} catch(e) {
		console.log("Error fetching async data. ", e);
	}
};

export default {
	fetch: async (resource, setState, loadingStates = [], handleResponse = () => false) => {
		loadingStates.forEach(ls => ls(true));

		return fetch(resource).then(r => r.json()).then(response => {
			setState(response);
			handleResponse(response);
			loadingStates.forEach(ls => ls(false));
		}).catch(e => console.log("Error fetching async data. ", e));
	},
	fetchAsync
};