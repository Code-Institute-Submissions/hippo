angular.module('HippoSite', ['ngRoute', 'RouteControllers']);

angular.module('HippoSite').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/info', {
		templateUrl: 'templates/info.html',
		controller: 'InfoController'
	});
});