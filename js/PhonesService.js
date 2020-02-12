const API_URL = `https://a-gunderin.github.io/spa-on-vanilla-js/api`;

const PhonesService = {

    async _sendRequest(url) {
        const response = await fetch(`${API_URL}/${url}.json`);
        return await response.json();
    },

    getAll() {
        return this._sendRequest("phones");
    },

    getById(phoneId) {
        return this._sendRequest(`phones/${phoneId}`);
    }
};

export default PhonesService;