var app = angular.module('app', [ 'ngCookies', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider

	.state('home', {
		url : "/home",
		templateUrl : "pages/nav.html"
	})

	.state('login', {
		url : "/login",
		templateUrl : "pages/login.html"
	})

	.state('profile', {
		url : "/profile",
		templateUrl : "pages/profile.html"
	})

	.state('register', {
		url : "/register",
		templateUrl : "pages/register.html"
	})

	.state('edit', {
		url : "/edit",
		templateUrl : "pages/edit.html"
	})
});


