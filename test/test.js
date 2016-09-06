var Pushengage = require('../lib/index');
var pe = new Pushengage({
    apiKey: '<Your Key Here>'
});
pe.notifications.send({
    notification_title: 'New Appointment',
    notification_message: 'Customer booked new appointment',
    notification_url: 'http://cartisan.in'
}, function(err, data) {

});
pe.notifications.get({
    
}, function(err, data) {

});
pe.subscribers.get({
    
}, function(err, data) {

});
pe.segments.get({
    
}, function(err, data) {

});