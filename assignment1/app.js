(function() {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController($scope) {
    $scope.dishes = ''
    $scope.message = ''
    $scope.numItems = 0   // this _could_ be local for checkMessage, but it was handy to use as model var for debug

    $scope.checkMessage = function() {
      $scope.numItems = $scope.dishes.split(',')
        .reduce((t,v) => { return t + (v.trim().length > 0) }, 0)

      if ($scope.numItems <= 0) {
        $scope.message = 'Please enter data first'
      } else if ($scope.numItems > 3) {
        $scope.message = 'Too Much!'
      } else {
        $scope.message = 'Enjoy!'
      }
    }
  }
})()
