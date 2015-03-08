var request = require('request');

function contentAPI(campaignInfo, callback) {
     var __base__ = 'https://api.offerpop.com/v1/ugc/collections/';
     var url = __base__ +
               campaignInfo.gallery +
               '?access_token=' +
               campaignInfo.access_token +
               '&social_platform=twitter&media_type=text';

     request(url, function(error, response, body) {
          if (!error && response.statusCode == 200) {
               var parsed = JSON.parse(body);
               var ugc = parsed['_embedded']['ugc:item'];
               var filtered = ugc.map(storeUgcData);

               callback(filtered);
          }
     });
};

function storeUgcData(ugc) {
     var content = ugc.content;
     var single = {
          author: content.author.username,
          avatar: content.author.profile.avatar,
          caption: content.text,
          platform_link: content.platform_data.social_platform_original_url,
          timestamp: new Date(content.created_on).toDateString()
     };

     return single;
};

module.exports = contentAPI;
