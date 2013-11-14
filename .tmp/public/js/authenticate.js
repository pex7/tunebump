
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();



/******************START OF PASSPORT SETUP******************/

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

var adminUser={
    	username: '',
      email: '',
    	password: ''
    };

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, adminUser);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
      if (username!=='tyler') {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password!=='red') {
        return done(null, false, { message: 'Incorrect password.' });
      }
    return done(null, adminUser);

  }
));

/******************END OF PASSPORT SETUP******************/




app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}





/******************START OF PASSPORT ROUTES******************/

app.get('/', routes.index);

app.get('/login', routes.login);

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login'})
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

/******************END OF PASSPORT ROUTES******************/





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
