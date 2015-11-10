'use strict';

( function () {
	app.controller('HomeCtrl', ['$scope',
		'$rootScope',
		'AuthSrv',
		function ( $scope, $rootScope, AuthSrv ) {

			$rootScope.$broadcast('show-navigation');
		}]);
})();