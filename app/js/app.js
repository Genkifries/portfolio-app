'use strict';

var portfolioApp = angular.module('portfolioApp', [
	'ngRoute',
	'portfolioControllers'
]);

portfolioApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			}).
			when('/:workId', {
				templateUrl: 'views/details.html',
				controller: 'detailsCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});

		//this removed # hashtag from url
		$locationProvider.html5Mode(true);
	}
]);
