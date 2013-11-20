var myApp = angular.module('myApp', ["ui.router", "angularFileUpload"])
    myApp.config(function($stateProvider, $urlRouterProvider){
      
      $stateProvider
        .state("signup", {
            url: "/signup",
            templateUrl: "/templates/signup.html"
      	}),

      $stateProvider
      	.state("login", {
            url: "/login",
            templateUrl: "/templates/login.html"
      	}),

      $stateProvider
      	.state("rock", {
            url: "/rock",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("indie", {
            url: "/indie",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("r&b", {
            url: "/r&b",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("hip_hop", {
            url: "/hip_hop",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("folk", {
            url: "/folk",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("country", {
            url: "/country",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("bluegrass", {
            url: "/bluegrass",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("punk", {
            url: "/punk",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("soul", {
            url: "/soul",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("blues", {
            url: "/blues",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("americana", {
            url: "/americana",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("heavy_metal", {
            url: "/heavy_metal",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("gospel", {
            url: "/gospel",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("acoustic", {
            url: "/acoustic",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("classical", {
            url: "/classical",
            controller: SongCtrl,
            templateUrl: "/templates/genre.html"
      	}),

      $stateProvider
      	.state("song", {
            url: "/song",
            templateUrl: "/templates/song.html"
      	})
});

var MyCtrl = [ '$scope', '$upload', '$location', '$rootScope', function($scope, $upload, $location, $rootScope) {

	$scope.possible_genres = [{name:'Rock'}, 
		{name:'Indie'}, {name:'R&B'}, {name:'Hip Hop'}, 
		{name:'Folk'}, {name:'Country'}, {name:'Bluegrass'},
		{name:'Punk'}, {name:'Soul'}, {name:'Blues'},
		{name:'Americana'}, {name:'Heavy Metal'}, {name:'Gospel'},
		{name:'Acoustic'}, {name:'Classical'}];

	$scope.artist = '';
	$scope.song_title = '';
	
	$scope.upload_genre = $scope.possible_genres[0];


  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var $file = $files[i];
      $scope.upload = $upload.upload({
        url: 'song/upload?genre='+encodeURIComponent($scope.upload_genre.name.toLowerCase())+'&artist='+encodeURIComponent($scope.artist)+'&song_title='+encodeURIComponent($scope.song_title), //upload.php script, node.js route, or servlet url
        method: "POST",
        // headers: {'headerKey': 'headerValue'}, withCredential: true,
        // data: {myObj: $scope.myModelObj},
        file: $file,
        //(optional) set 'Content-Desposition' formData name for file
        //fileFormDataName: myFile,
        progress: function(evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      })
      //.error(...).then(...); 
    }
  }

  $scope.bump = function () {
    FB.ui({
       method:'feed',
       type: 'audio',
       name: 'Tune Bump',
       link: 'https://developers.facebook.com/docs/reference/dialogs/',
       source: 'http://localhost:1337/uploads/'+$scope.song.field+'.mp3',
       description: 'Bump a song to a friend.'
    });
  }


}];

var SongCtrl = ['$scope', '$location', '$http', '$rootScope', function($scope, $location, $http, $rootScope) {
	var genre = $location.path().replace('/', '');
	$rootScope.genre = genre;
	$scope.genre = genre.toUpperCase();
	console.log("current genre", genre);
	$http.get('/song?genre='+encodeURIComponent(genre)).success(function(result) {
		$scope.songs = result;
		console.log("songs of genre", genre, result);
	});
}];

