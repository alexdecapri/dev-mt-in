var app = angular.module("devMtIn");

app.controller("homeCtrl", function($scope, profileService) {

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

	$scope.deleteProfile = function(profile) {
		profileService.deleteProfile(profile);
		$scope.myProfile = profileService.checkForProfile();
	}

});

