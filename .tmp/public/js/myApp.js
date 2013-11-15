var myApp = angular.module('myApp', ["ui.router"])
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
            templateUrl: "/templates/rock.html"
      	}),

      $stateProvider
      	.state("indie", {
            url: "/indie",
            templateUrl: "/templates/indie.html"
      	}),

      $stateProvider
      	.state("r&b", {
            url: "/r&b",
            templateUrl: "/templates/r&b.html"
      	}),

      $stateProvider
      	.state("hip_hop", {
            url: "/hip_hop",
            templateUrl: "/templates/hip_hop.html"
      	}),

      $stateProvider
      	.state("folk", {
            url: "/folk",
            templateUrl: "/templates/folk.html"
      	}),

      $stateProvider
      	.state("country", {
            url: "/country",
            templateUrl: "/templates/country.html"
      	}),

      $stateProvider
      	.state("bluegrass", {
            url: "/bluegrass",
            templateUrl: "/templates/bluegrass.html"
      	}),

      $stateProvider
      	.state("punk", {
            url: "/punk",
            templateUrl: "/templates/punk.html"
      	}),

      $stateProvider
      	.state("soul", {
            url: "/soul",
            templateUrl: "/templates/soul.html"
      	}),

      $stateProvider
      	.state("blues", {
            url: "/blues",
            templateUrl: "/templates/blues.html"
      	}),

      $stateProvider
      	.state("americana", {
            url: "/americana",
            templateUrl: "/templates/americana.html"
      	}),

      $stateProvider
      	.state("heavy_metal", {
            url: "/heavy_metal",
            templateUrl: "/templates/heavy_metal.html"
      	}),

      $stateProvider
      	.state("gospel", {
            url: "/gospel",
            templateUrl: "/templates/gospel.html"
      	}),

      $stateProvider
      	.state("acoustic", {
            url: "/acoustic",
            templateUrl: "/templates/acoustic.html"
      	}),

      $stateProvider
      	.state("classical", {
            url: "/classical",
            templateUrl: "/templates/classical.html"
      	})
});
