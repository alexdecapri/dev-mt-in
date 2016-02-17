var app = angular.module("devMtIn");

app.controller("homeCtrl", function($scope) {
	$scope.myProfile = {
		// name: "Alex DeCapri",
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	};

	$scope.sortOptions = [{
		display: "Ascending",
		value: false
		},
		{
		display: "Descending",
		value: true
		}
	];
});