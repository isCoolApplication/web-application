'use strict';

app.controller('NavigationCtrl', ['$scope',
    '$rootScope',
    '$location',
    'NavigationLinkSrv',
    function ( $scope, $rootScope, $location, NavigationLinkSrv ) {

        $scope.show = false;
        $scope.navigation;

        $rootScope.$on('show-navigation', function () {
            $scope.show       = true;
            $scope.navigation = NavigationLinkSrv.getNav();
        });

        $rootScope.$on('hide-navigation', function () {
            $scope.show       = false;
            $scope.navigation = null;
            NavigationLinkSrv.clear();
        });

        $scope.logout = function () {
            // CLEAR DATA
            $location.path('/');
        };
    }]);