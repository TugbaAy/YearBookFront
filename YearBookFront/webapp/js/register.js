angular.module('app').controller('NewRecordController', function($scope, $http) {
	$scope.user = {};

	// html tarafından çağrılacak addUser() func.
	$scope.addUser = function() {

		// Java tarafındaki REST servis. UserController.add() method
		var requestURL = "http://localhost:18080/YearBook/user/add";
		$http.post(requestURL, $scope.user).then(function(response) {
			// First function handles success
			$scope.content = response.data;
		}, function(response) {
			// Second function handles error
			$scope.content = "Something went wrong";
		});

	};

});