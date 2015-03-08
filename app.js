var express         = require('express');
var app             = express();
var cors            = require('cors');

var filterRequest   = require('./modules/filter-requests.js');

app.use(cors());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.post('/get-giphy', filterRequest);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
