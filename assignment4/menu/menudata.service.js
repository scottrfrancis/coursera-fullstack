(function() {
  'use strict'

  angular.module('data')
    .constant('MenuDataServiceEndpoint', "https://davids-restaurant.herokuapp.com/")
    .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', 'MenuDataServiceEndpoint']

  function MenuDataService($http,
    MenuDataServiceEndpoint) {
    var dataSvc = this

    var categories = []
    var items = []

    dataSvc.getAllCategories = function() {
      var url = MenuDataServiceEndpoint + "/categories.json"
      dataSvc.items = []

      return $http.get(url).then(function (result) {
        result.data.menu_items.map((e) => {
          dataSvc.categories.push(e)
        })
      })
    }

    dataSvc.getItemsForCategory = function(categoryShortName) {
      var url = MenuDataServiceEndpoint
        + "/menu_items.json?category=" + categoryShortName

      return $http.get(url).then(function (result) {
        result.data.menu_items.map((e) => {
          dataSvc.categories.push(e)
        })
      })
    }

  }

})()
