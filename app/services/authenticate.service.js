'use strict';

(function () {
	app.service('AuthSrv', [
		function ( ) {

			this.setUserData = function ( data ) {
				userData = data;
			};
			this.getUserData = function () {
				return userData;
			};
			var userData;
	}]);
})();