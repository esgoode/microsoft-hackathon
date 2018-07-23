(function () {

	'use strict';
	var app;

	app = angular.module('chat');
	app.controller('homeCtrl', ['$scope', '$state', 'homeSvc', '$location', '$anchorScroll', function homeCtrl($scope, $state, homeSvc, $location, $anchorScroll){

		// $scope.test = function () {
		// 	homeSvc.test().then(function (data) {
		// 		$scope.result = data;
		// 	});
		// }

		$scope.chatLog = [];
		$scope.userInput = '';

		var chat = io.connect('/chat');
		chat.on('chat', function (data) {
			console.log(data);
		    $scope.chatLog.push(data);
		    $scope.$apply();
		    $scope.scrollToBottom();
		});

		var defaultMessage = {
			type: 0,
			who: 'Me',
			content: '',
		}

		$scope.scrollToBottom = function () {
			$location.hash('bottom');
			$anchorScroll();
		}

		$scope.send = function () {
			var newMessage = angular.copy(defaultMessage);
			newMessage.content = $scope.userInput;
			newMessage.time = new Date();
			$scope.chatLog.push(newMessage);
			chat.emit('chat', $scope.userInput);
			$scope.scrollToBottom();
			$scope.userInput = "";
		}

		$scope.scrollToBottom();
	}]);
}());