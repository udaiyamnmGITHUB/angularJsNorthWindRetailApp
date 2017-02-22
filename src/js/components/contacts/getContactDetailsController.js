myModule.controller('getContactDetailsController',['$scope', '$modal', '$http', function($scope, $modal, $http) {
		$scope.open = function (item) {
			$scope.selectedUser = item;
			
		var modalInstance = $modal.open({
					templateUrl: 'templates/partials/contacts/updateContact.html',
					controller: 'updateContactController',
					resolve: {
						selectedUser: function () {
							return $scope.selectedUser;
						}
					}
				});
			
		};
	}]);