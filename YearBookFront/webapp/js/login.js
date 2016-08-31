
angular.module('app').controller('LoginController', function($scope, $http ,$state ) {

	$scope.user = {};

	$scope.login = function() {
		var requestURL = "http://localhost:18080/YearBook/userToken/userCheck";
		$http.post(requestURL, $scope.user).then(function(response) {
			$scope.data = response.data.data;
			$scope.error = response.data.error;
			$scope.description = response.data.description;
			$scope.message = response.data.message;
			if ($scope.error == false) {
				$scope.userInfo = response.data.data.user;
				cookies.set('YearBookToken', response.data.data.token);
				$state.go('profile');
			}
			if ($scope.error == true) {
				$state.go('login');
					
			}
		}, function(response) {
			$scope.content = "Something went wrong";
		});
	}
});