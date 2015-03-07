var request = require('request');


BASE_URL = 'http://api.giphy.com/v1/gifs';
API_KEY = 'dc6zaTOxFJmzC';


function getGifs(searchTerms, callback) {
    url = BASE_URL + '/search?q=' + encodeURIComponent(searchTerms)
        + '&api_key=' + API_KEY;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            images = parseResponse(body);
            callback(images);
        }
    });
}

function parseResponse(body) {
    body = JSON.parse(body);
    images = [];
    body.data.forEach(function (image) {
        images.push(image.images.original.url);
    });
    return images;
}
