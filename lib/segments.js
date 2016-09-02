var request = require('request');
module.exports = function (options) {
    return {
        create: function (payload, callback) {
            request.post({
                headers: {
                    api_key: options.apiKey
                },
                url: options.url,
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
                url: options.url + '/segments'
            }, function (err, response, body) {
                console.log(err, response.body);
            });
        }
    };
};