var express         = require('express');
var app             = express();
var cors            = require('cors');
var bodyParser      = require('body-parser');

var twitterReq      = require('./modules/twitter-requests.js');
var giphyReq        = require('./modules/giphy-requests.js');
var contentApi      = require('./modules/content-api.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/get-giphy', function(req, res){
   contentApi(10141, '9WmTValX0nUTgZC37bxV1cRIoJwJPG'); 
   res.send('complete');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
