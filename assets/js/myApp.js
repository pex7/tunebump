var myApp = angular.module('myApp', ["ui.router"])
    myApp.config(function($stateProvider, $urlRouterProvider){
      
      $stateProvider
        .state('signup', {
            url: "/signup",
            templateUrl: "/templates/signup.html"
      	}),

      $stateProvider
      	.state('login', {
            url: "/login",
            templateUrl: "/templates/login.html"
      	})
});
