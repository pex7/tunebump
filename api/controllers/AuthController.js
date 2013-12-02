/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy
  , LocalStrategy = require('passport-local').Strategy;

module.exports = {

  login: function(req, res) {
    res.redirect('/');
  },

  process: function(req, res) {
    passport.authenticate('local', function (err, user, info) {
      if ((err)|| (!user)) {
        return res.send({
          message: 'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function(err) {
        if(err) res.send(err);
        return res.send({
          message: 'login successful'
        });
      });
    }) (req, res);
  },
    
   // GET /auth/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/facebook/callback
  facebook: passport.authenticate('facebook', { scope: ['publish_actions']}),

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page. 
  facebookCallback: passport.authenticate('facebook', { 
  	successRedirect: '/',
  	failureRedirect: '/login' }),

  logout: function(req, res){
  req.logout();
  res.redirect('/');
  },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AuthController)
   */
  _config: {}

  
};
