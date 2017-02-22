myModule.controller('updateContactController',['$scope', '$modalInstance', 'selectedUser', function($scope, $modalInstance, selectedUser) {
	$scope.selectedUser = selectedUser;
	$scope.message = "Please update the selected user";
	$scope.orgContact = angular.copy($scope.selectedUser);
	$scope.isSaved = false;
	$scope.save = function () {
		$scope.message = "saved successfully";
		$scope.isSaved = true;
	};
	$scope.cancel = function () {
		$scope.selectedUser = angular.copy($scope.orgContact);
		$scope.message = "reset with previous values is done ";
		$scope.isSaved = false;
	};
	$scope.close = function () {
		$modalInstance.close();
	};
	
	
}]);