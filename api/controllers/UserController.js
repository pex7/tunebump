/**
 * UserController
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
  , LocalStrategy = require('passport-local').Strategy
  ,	bcrypt = require('bcrypt');

module.exports = {


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};


passport.serializeUser(function(user, done) {
		done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	findById(id, function(err, user) {
			done(err, user);
	});
});

passport.use(new LocalStrategy(
		function(username, password, done){
			process.nextTick(function() {
				findByUsername(username, function(err, user) {
					if(err)
						return done(null, err);
					if (!user) {
						return done(null, false, {
							message: "unknown username: " + username
						});
					}
					bcrypt.compare(password, user.password, function(err, res) {
						if (!res)
							return done(null, false, {
								message: 'invalid password'
							});
						var returnUser = {
							username: user.username,
							createdAt: user.createdAt,
							email: user.email,
							id: user.id
						};
						return done(null, returnUser, {
							message: 'Logged in Successfully'
						});
					});
				})
			});
		}
	));	
