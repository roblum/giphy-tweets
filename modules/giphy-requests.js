var request = require('request');

var BASE_URL = 'http://api.giphy.com/v1/gifs';
var API_KEY = 'dc6zaTOxFJmzC';

function getGifs(searchTerms, callback) {
    var url = BASE_URL + '/search?q=' + encodeURIComponent(searchTerms)
        + '&api_key=' + API_KEY;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var images = parseResponse(body);
            console.log('images', images);
            callback(images);
        }
    });
}

function parseResponse(body) {
    body = JSON.parse(body);
    var images = [];
    body.data.forEach(function (image) {
        images.push(image.images.original.url);
    });
    return images;
}

module.exports = getGifs;