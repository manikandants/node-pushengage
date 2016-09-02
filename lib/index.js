var PushEngage = function (options) {
    options = options || {};
    if (!options.apiKey) {
        return console.error('Please initialize with an apiKey');
    }
    options.url = options.url || 'https://www.pushengage.com/apiv1';
    return {
        notifications: require('./notifications')(options),
        subscribers: require('./subscribers')(options),
        segments: require('./segments')(options),
    };
};

module.exports = PushEngage;