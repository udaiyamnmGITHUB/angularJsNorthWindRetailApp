login.controller('loginCtl', ['$scope', '$state', 'loginServices', 'userServices', 'appConfigConstants', function ($scope, $state, loginServices, userServices, appConfigConstants) {

    $scope.init = function(){
      $scope.username = "";
      $scope.password = "";
      $scope.errorMessage = "";
    };
    var successLogin = function(response){
        if(response.status === appConfigConstants.res_success_status){
            userServices.createAuthorisedUser(response.userObj);
            $state.go("contactList");
        }
        else{
            //$scope.errorMessage = 'Oops! Your username or password is wrong. Please try again.';
             alert("Oops! Your username or password is wrong. Please try again.");
        }
    } ;

    var failureLogin = function(error){
        alert("sorry, you are not authourized");
    } ;

    $scope.login = function(){
      if($scope.username && $scope.password){
          loginServices.login($scope.username, $scope.password).then(successLogin, failureLogin);
      }

    };

}]);