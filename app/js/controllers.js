'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('homeCtrl', ['$scope', '$http',
  function ($scope, $http) {
    //the json url is relative to index.html file
    $http.get('works.json').success(function(data) {
      $scope.thumbs = data;
    });
}]);

portfolioControllers.controller('detailsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    
    $scope.workId = $routeParams.workId;

    // to cycle thru current route
    $http.get('works.json').success(function(data) {
      
      $scope.allWorks = data;
      
      var currentWorkIndex;
      var totalWorks = $scope.allWorks.length;
      
      for(var i=0; i<totalWorks; i++) {
        if ($scope.allWorks[i].id === $routeParams.workId) {
          currentWorkIndex = i;
          break;
        } 
      }

      var prevWorkIndex = (currentWorkIndex !== 0) ? (currentWorkIndex - 1) : (totalWorks - 1);
      var nextWorkIndex = (currentWorkIndex !== totalWorks - 1) ? (currentWorkIndex + 1) : (0);
      $scope.prevWork = $scope.allWorks[prevWorkIndex].id;
      $scope.nextWork = $scope.allWorks[nextWorkIndex].id;

    });
      
}])