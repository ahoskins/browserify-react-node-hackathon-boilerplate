var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

/**
* Routes
**/
app.get('/', function(req, res) {
	res.render('index');
});

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function (req, resp) {
  console.log('Express server listening on port ' + app.get('port'));
});
