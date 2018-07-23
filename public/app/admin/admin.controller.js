(function () {

	'use strict';
	var app;

	app = angular.module('chat');
	app.controller('adminCtrl', ['$scope', '$state', 'adminSvc', function adminCtrl($scope, $state, adminSvc){

		// $scope.test = function () {
		// 	adminSvc.test().then(function (data) {
		// 		$scope.result = data;
		// 	});
		// }

		$scope.activeSession;

		adminSvc.getActiveSessions().then(function (data) {
			$scope.sessions = data;
		});

		$scope.makeActive = function (session) {
			console.log("makeActive called");
			$scope.activeSession = session;
		}


	}]);
}());