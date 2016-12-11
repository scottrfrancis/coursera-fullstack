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
      dataSvc.categories = []

      return $http.get(url).then(function(result) {

        result.data.map((e) => {
          dataSvc.categories.push(e)
        })

        return dataSvc.categories
      })
    }

    dataSvc.getItemsForCategory = function(categoryShortName) {
      var url = MenuDataServiceEndpoint + "/menu_items.json?category=" + categoryShortName
      dataSvc.items = []

      return $http.get(url).then(function(result) {
        result.data.menu_items.map((e) => {
          dataSvc.items.push(e)
        })

        return dataSvc.items
      })
    }

  }

})()
