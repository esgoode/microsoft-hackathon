(function () {

  "use strict";
  var app;
  app = angular.module('chat');

  app.factory('homeSvc', ['$http', '$log', function homeSvc($http, $log) {

  	var test = function () {
  		var params = {
        test: ""
      }
  		return $http.post("/test", params).then(function (response) {
  			return response.data;
  		});
  	}

    var generateToken = function () {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < 16; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    return {
    	test: test,
      generateToken: generateToken
    };
  }]);

}());
