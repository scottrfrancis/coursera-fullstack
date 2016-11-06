(function() {
  'use strict'

  angular.module('data')
    .constant('MenuDataServiceEndpoint', "https://davids-restaurant.herokuapp.com/")
    .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', 'MenuDataServiceEndpoint']

  function MenuDataService($http,
    MenuDataServiceEndpoint) {
    var dataSvc = this

    dataSvc.getAllCategories = function() {

    }

    dataSvc.getItemsForCategory = function(categoryShortName) {

    }

  }

})()
