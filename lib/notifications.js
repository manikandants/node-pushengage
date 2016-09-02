var request = require('request');
module.exports = function (options) {
    return {
        send: function (payload, callback) {
            request.post({
                headers: {
                    api_key: options.apiKey
                },
                url: options.url + '/notifications',
                form: payload
            }, function (err, response, body) {
                console.log(err, response.body);
            });
        },
        get: function (payload, callback) {
            request.get({
                headers: {
                    api_key: options.apiKey
                },
                url: options.url + '/notifications'
            }, function (err, response, body) {
                console.log(err, response.body);
            });
        }
    };
};
