(function() {
'use strict';

angular.module('NarrowItDownApp', [])
  .constant('menuServiceUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems)
  
  
  function FoundItems() {
    return {
      // restrict: 'E',
      scope: {
        title: "@",
        list: "<",
        rem: "&",
        idx: "<"
      },
      templateUrl: 'foundItems.html'
    }
  }
  
  MenuSearchService.$inject = ['$http', 'menuServiceUrl']
  function MenuSearchService($http, menuServiceUrl) {
    var searcher = this
    
    searcher.foundItems = []
    
    searcher.getMatchedMenuItems = function (searchTerm) {
      var url = menuServiceUrl
      
      searcher.foundItems = []
      
      return $http.get(url).then(function (result) {
        result.data.menu_items.map((e) => {
          if (e.description.includes(searchTerm)) {
            searcher.foundItems.push(e)
          }
        })
      })
    }
    
    searcher.getFoundItems = function() {
      return searcher.foundItems
    }
  }
  
  
  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var narrower = this
    
    
    narrower.searchTerm = ''
    narrower.foundItems = []
    
    narrower.narrow = function() {
      narrower.foundItems = []
      // var matched = 
      MenuSearchService.getMatchedMenuItems(narrower.searchTerm).then(function() {
        narrower.foundItems = MenuSearchService.getFoundItems()
      })
    }
    
    narrower.removeItem = function(idx) {
      console.log('removing idx ' + idx)
      narrower.foundItems.splice(idx, 1)
    }
  }

})()
