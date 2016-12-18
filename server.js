// set up
var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var mongooose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

// configuration
mongooose.connect(configDB.url);  // connect to DB

require('./config/passport')(passport);

// set up express app
app.use(morgan('dev'));  // log every request to the console
app.use(cookieParser());  // read cookies ( need for auth )
app.use(bodyParser()); // get info from html form

app.set('view engine', 'ejs');  // set up ejs for templating

// required for passport
app.use(session({secret: 'isfjdkjdkfjdkf'})); // session secret
app.use(passport.initialize());
app.use(passport.session());  // login session
app.use(flash());   // use connect-flash for flash msg stored in session


// routes
require('./modules/routes.js')(app, passport);  // load routes & pass in the app and fully configure

// launch
app.listen(port);
console.log('Server up on port: ' + port);
