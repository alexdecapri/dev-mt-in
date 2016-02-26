var app = angular.module("devMtIn");

app.service("friendService", function($http) {

	var baseUrl = "http://connections.devmounta.in/";

	

	this.findFriends = function(userId, query) {
		return $http({
			method: "GET",
			url: baseUrl + "/api/friends/" + userId + "?name=" + query
		})
		.then(function(response) {
			return response.data;
		})
	}

});