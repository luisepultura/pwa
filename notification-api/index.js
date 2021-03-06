require('dotenv').load();
const  express       = require('express'),
     jwt           = require('jsonwebtoken'),
     morgan        = require('morgan'),
     bodyParser    = require('body-parser'),
     User          = require('./models/user'),
     cors          = require('cors'),
     secrets       = require('./config/secrets'),
     route         = require('./routes');

const port = process.env.PORT || 3333;

const app = express();

// Force HTTPS on heroku
if(process.env.NODE_ENV === 'production'){
  app.enable('trust proxy');
  app.use (function (req, res, next) {
      if(req.secure) {
        //request was via https, so do no special handling
        next();
      } else {
        //request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
      }
  });
}

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyParser for request and parsing info
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public')); //use to serve static files like favicon, css, angular and the rest

/**
 * Routes Configuration
 */
route(app);

//configure any route whatsoever to redirect to angular
app.get('*', function(req, res) {
    /** frontend routes =========================================================
      * route to handle all angular requests
      * load the single view file (angular will handle the page changes on the front-end)
      **/
     res.sendFile(__dirname + '/public/index.html' );
});


/**
 * Start Express server.
 */
app.listen( port, function(){
  console.log("PWA API Server Listening on port ", port );
});