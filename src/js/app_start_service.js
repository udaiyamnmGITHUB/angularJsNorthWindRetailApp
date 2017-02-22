angularApp.service('appStartService', ['navigationService', '$rootScope', function (navigationService, $rootScope) {

    var startApp = function(){
        navigationService.navigate();
    };

}]);