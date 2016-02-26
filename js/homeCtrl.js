var app = angular.module("devMtIn", []);

app.controller("homeCtrl", function($scope, profileService, friendService) {

	//console.log(profileService);

	//deleted
	//$scope.myProfile = profileService.checkForProfile();

	$scope.sortOptions = [{
		display: "Ascending",
		value: false
		},
		{
		display: "Descending",
		value: true
		}
	];

	//profileService.serviceTest(); //will show in console if connected properly

	$scope.editing = false;


	//if referenced in html, it HAS to live on $scope
	//even though saveProfile is tied to profileService.js
	$scope.saveProfile = function(profile) {
		profileService.saveProfile(profile);
		$scope.editing = false;
	};

	$scope.deleteProfile = function() {
		profileService.deleteProfile()
		.then(function(deletedProfile) {
    		localStorage.removeItem('profileId');
    		$scope.myProfile = {};
  		})
		 .catch(function(err) {
		   console.error(err);
		 });
	}

	$scope.checkForProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId'));

  		if (profileId) {
		    profileService.checkForProfile(profileId.profileId)
		    .then(function(profile) {
		      $scope.myProfile = profile.data;
		    })
		    .catch(function(err) {
		      console.error(err);
		    });
  		}
	}

	$scope.checkForProfile();

	$scope.findFriends = function(query) {
		friendService.findFriends($scope.myProfile._id, query)
		.then(function(response) {
			$scope.potentialFriends = response;
		})
	}

});

