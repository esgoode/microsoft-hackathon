(function () {

  "use strict";
  var app;
  app = angular.module('chat');

  app.factory('adminSvc', ['$http', '$log', function adminSvc($http, $log) {

  	var test = function () {
  		var params = {
        test: ""
      }
  		return $http.post("/test", params).then(function (response) {
  			return response.data;
  		});
  	}

    return {
    	test: test
    };
  }]);

}());
