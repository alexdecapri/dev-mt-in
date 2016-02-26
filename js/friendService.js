var app = angular.module("devMtIn");

app.service("friendService", function($http) {

	var baseUrl = "http://connections.devmounta.in/";

	this.findFriends = function(userId, query) {
		$http({
			method: "GET",
			url: baseUrl + "/api/friends/" + userId + "?name=" + query
		})
	}

});