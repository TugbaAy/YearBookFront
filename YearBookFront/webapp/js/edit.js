angular.module('app').controller('EditController', function($scope, $http) {
	
	$scope.user = {
		userId : 1
	};
	
	$scope.getUser = function() {

		$http.post('http://localhost:18080/YearBook/user/getUser', $scope.user).then(function(response){
			$scope.user=response.data;
		},
		function(response){
			$scope.content="Something went wrong;"	;
		});
	}
	$scope.getUser();
	$scope.edit=function(){
		$http.post('http://localhost:18080/YearBook/user/edit', $scope.user).then(function(response){
			$scope.user=response.data;
		},
		function(response){
			$scope.content="Something went wrong;"	;
		});
	}

});
