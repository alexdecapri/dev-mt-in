app.service("profileService", function($http) {

	var baseUrl = "ttp://connections.devmounta.in/";

	/*
	this.serviceTest = function() {
		console.log("profileService is connected!");
	};
	*/

	this.saveProfile = function(profile) {
		return $http({
			method: "POST", //request method
			url: baseUrl + "api/profiles/", //URL we are making the request to
			data: profile //data we are requesting ot be posted
		})
		.then(function(profileResponse) { //what to do after response comes back from the server
			console.log(profileResponse);
			localStorage.setItem("profileID", JSON.stringify({ 
					profileId: profileResponse.data._id
				}));
		})
		.catch(function(err) {
			console.error(err);
		});
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