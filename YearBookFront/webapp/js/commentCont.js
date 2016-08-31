angular.module('app').controller('CommentController', function($scope, $http) {
	$scope.userFrom = {
		userId : 1
	};

	$scope.userTo = {
		userId : 2
	};

	$scope.comment = {
		userFrom : $scope.userFrom,
		userTo : $scope.userTo
	};

	// html tarafından çağrılacak addUser() func.
	$scope.addComment = function() {

		// Java tarafındaki REST servis. UserController.add() method
		var requestURL = "http://localhost:18080/YearBook/comment/add";
		$http.post(requestURL, $scope.comment).then(function(response) {
			// First function handles success
			$scope.content = response.data;
			$scope.getAllUserComments();
		}, function(response) {
			// Second function handles error
			$scope.content = "Something went wrong";

		});

	};
	// $scope.addComment();

	$scope.commentList = [];
	$scope.getAllUserComments = function() {
		var comment = {
			description : $scope.description,
		}
		var requestURL = "http://localhost:18080/YearBook/comment/list";
		$http.post(requestURL, $scope.userFrom).then(function(response) {// userFromun
																			// commentlerini
																			// çağırıyoruz
			// First function handles success
			$scope.commentList = response.data;

		}, function(response) {
			// Second function handles error
			$scope.content = "Something went wrong";
		});
		// $scope.commentList.push(comment);
	};
	$scope.getAllUserComments();

	$scope.edit = function() {
		var requestURL = "http://localhost:18080/YearBook/comment/edit";
		$http.post(requestURL, $scope.comment).then(function(response) {
			// First function handles success
			$scope.content = response.data;
		}, function(response) {
			// Second function handles error
			$scope.content = "Something went wrong";
		});
		$scope.edit();
	}
});