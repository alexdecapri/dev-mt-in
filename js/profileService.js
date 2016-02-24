app.service("profileService", function($http) {

	var baseUrl = "http://connections.devmounta.in/";

	/*
	this.serviceTest = function() {
		console.log("profileService is connected!");
	};
	*/

	this.saveProfile = function(profile) {
		return $http({
			method: "POST", //request method
			url: baseUrl + "api/profiles/", //URL we are making the request to
			data: profile //data we are requesting to be posted
		})
		.then(function(profileResponse) { //what to do after response comes back from the server
			console.log("this is the response from the server after posting stuff: ",profileResponse);
			localStorage.setItem("profileId", JSON.stringify({ 
					profileId: profileResponse.data._id
				}));
		})
		.catch(function(err) {
			console.error(err);
		});
	};

	this.deleteProfile = function(profile) {
		var profileId = JSON.parse(localStorage.getItem("profileId")).profileId;

	  	return $http({
	   		method: 'DELETE'
	  		, url: baseUrl + 'api/profiles/' + profileId
	  });
	};

	this.checkForProfile = function(profile) {
		return $http({
			method: "GET",
			url: baseUrl + "api/profiles/" + profile
		})

		// if (localStorage.getItem("profile"))  {
		// 	return JSON.parse(localStorage.getItem("profile"));
		// }
		// return {
		// 	//deleted friends in array because of Day 3
			
		// }
	};
});