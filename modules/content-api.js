var request = require('request');

function contentAPI(id, token, callback) {
    var __base__ = 'https://api.offerpop.com/v1/ugc/collections/';
    var url = __base__ + id + '?access_token=' + token + '&social_platform=instagram,twitter';

    request(url, function(error, response, body) {
       if (!error && response.statusCode == 200) { 
            console.log('data', JSON.parse(body));
            var parsed = JSON.parse(body);
            callback(parsed);
       }
    });
}

module.exports = contentAPI;
