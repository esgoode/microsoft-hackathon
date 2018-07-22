(function () {

	'use strict';
	var app;

	app = angular.module('starter');
	app.controller('homeCtrl', ['$scope', '$state', 'homeSvc', function homeCtrl($scope, $state, homeSvc){

		// $scope.test = function () {
		// 	homeSvc.test().then(function (data) {
		// 		$scope.result = data;
		// 	});
		// }

	}]);
}());