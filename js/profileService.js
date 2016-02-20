app.service("profileService", function($http) {

	var baseUrul = "ttp://connections.devmounta.in/";

	/*
	this.serviceTest = function() {
		console.log("profileService is connected!");
	};
	*/

	this.saveProfile = function(profile) {
		localStorage.setItem("profile", JSON.stringify(profile));
	};

	this.deleteProfile = function(profile) {
		localStorage.removeItem("profile");
	};

	this.checkForProfile = function() {
		if (localStorage.getItem("profile"))  {
			return JSON.parse(localStorage.getItem("profile"));
		}
		return {
			//deleted friends in array because of Day 3
			
		}
	};
});