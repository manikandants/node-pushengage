var request = require('request');
module.exports = function (options) {
    return {
        get: function (payload, callback) {
            request.get({
                headers: {
                    api_key: options.apiKey
                },
                url: options.url + '/subscribers'
            }, function (err, response, body) {
                console.log(err, response.body);
            });
        }
    };
};