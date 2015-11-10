var app = angular.module('application',
    ['ngRoute']);

app.config(['$routeProvider',
	'$locationProvider',
	function ( $routeProvider, $locationProvider ) {

		$locationProvider.html5Mode(false);
	    $locationProvider.hashPrefix('!');

	    $routeProvider
	    	.when('/', {
	    		templateUrl: 'partials/login.html',
	    		controller: 'LoginCtrl'
	    	})

	    	// OPERATOR
	    	.when('/operator',
	    	{
	    		templateUrl: 'partials/operator/index.html',
	    		controller: 'HomeCtrl'
	    	})


	    	// ADMINISTRATOR
	    	.when('/admin',
	    	{
	    		templateUrl: 'partials/administrator/index.html',
	    		controller: 'HomeCtrl'
	    	})
	    	.otherwise( {redirectTo: '/'} );
	}]);