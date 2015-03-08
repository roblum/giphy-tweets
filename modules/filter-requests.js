var giphyReq        = require('./giphy-requests.js');
var contentApi      = require('./content-api.js');

function filterRequest(req, res) {
     var query = req.query;
     var campaignInfo = {
          gallery: query.gallery,
          access_token: query.access_token
     };

     contentApi(campaignInfo, giphyApi);

     function giphyApi(data) {
          res.send('complete');
     }
}

module.exports = filterRequest;