myModule.controller('createNewContactController', ['$scope', '$modal', '$http', '$state', function($scope, $modal, $http, $state) {
	$scope.newUser = {};
	
	$scope.isSaved = false;
	$scope.message = "";
	$scope.save = function () {
		if($scope.newUser.firstName){
			$scope.message = "First name  is mandatory";
			return;
		}
		if($scope.newUser.lastName){
			$scope.message = "Last name  is mandatory";
			return;
		}
		if($scope.newUser.email){
			$scope.message = "email Id  is mandatory";
			return;
		}
		if($scope.newUser.countryName){
			$scope.newUser.countryName = null;
		}
	userList.push($scope.newUser);
	$scope.isSaved = true;
	$scope.items = userList; 
	$scope.message = "saved successfully";
	};
		
	$scope.cancel = function () {
		$scope.newUser = {};
		$scope.isSaved = false;
		$scope.message = "Please create a new Contact";
	};
	$scope.close = function () {
		$state.go("contactList");
	};
}]);