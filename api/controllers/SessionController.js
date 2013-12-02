/**
 * SessionController
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

module.exports = {
    
	// create: function(req, res, next) {
	// 	if(!req.param('email') || !req.param('password')) {
	// 		var usernamePasswordRequiredError= [{name: 'usernamePasswordRequired', message: "You must enter a username and password."}];
	// 	}
	// 	console.log(usernamePasswordRequiredError);
	// 	res.redirect('/templates/login');
	// }  

	// User.findOneByEmail(req.param('email')).done(function(err, user) {
	// 	if(err) return next(err);

	// 	if(!user) {
	// 		var noAccountError = [{name: 'noAccount', message: "Email address does not exist"}];
	// 	}

	// 	res.redirect('/templates/login');


	// });
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SessionController)
   */
  _config: {}

  
};
