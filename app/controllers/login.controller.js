'use strict';

(function () {
    app.controller('LoginCtrl', ['$scope',
        '$rootScope',
        '$location',
        '$http',
        'NavigationLinkSrv',
        'AuthSrv',
        function ( $scope, $rootScope, $location, $http, NavigationLinkSrv, AuthSrv ) {
            
            $scope.userdata;
            $scope.disbleBtn = false;

            $rootScope.$broadcast('hide-navigation');
            $scope.doLogin = function (form) {
                $scope.disableBtn = true;
                $http.get('data/accounts.json').then(function (response) {
                    var data = response.data;
                    for(var i=0; i<data.length; i++) {
                        if( data[i].barcode == $scope.userdata.username && data[i].password == $scope.userdata.password ) {
                            $scope.disableBtn = false;
                            AuthSrv.setUserData(data[i]);
                            switch ( data[i].type ) {
                                case 1:
                                    NavigationLinkSrv.setNav('administrator', data[i].fullname);
                                    $location.path('/admin');
                                    break;
                                case 2:
                                    NavigationLinkSrv.setNav('operator', {
                                        "name": data[i].fullname,
                                        "department": data[i].department
                                    });
                                    $location.path('/operator');
                                    break;
                            }
                        }
                    }
                });
            };
        }]);
})();