(function () {

  "use strict";
  var app;
  app = angular.module('chat');

  app.factory('adminSvc', ['$http', '$log', function adminSvc($http, $log) {

  	var getActiveSessions = function () {
  		return $http.get("/getActiveSessions").then(function (response) {
  			return response.data;
  		});
  	}

    return {
    	getActiveSessions: getActiveSessions
    };
  }]);

}());
