/**
 * SongController
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

var fs = require("fs");
var shortId = require('shortid');

module.exports = {
    
  	upload : function(req, res){
  		console.log(req.query.genre);
  		console.log(req.query.artist);
  		console.log(req.query.song_title);
  		console.log(req.files);
  		var fileId = shortId.generate();
		fs.readFile(req.files.file.path, function (err, data) {
		  var newPath = __dirname + "/../../assets/uploads/"+fileId+".mp3";
		  console.log(newPath);
		  console.log(err);
		  fs.writeFile(newPath, data, function (err) {
		  	Song.create({
		  		fileId: fileId,
		  		genre: req.query.genre,
		  		artist: req.query.artist,
		  		title: req.query.song_title

		  	}).then(function(songs){
		  		console.log(songs);
		  	});
		  	console.log(err);
		  });
		});

  	},


  _config: {}

  
};
