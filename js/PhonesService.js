const API_URL = `http://localhost:63342/phone-catalogue-static/api`;

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