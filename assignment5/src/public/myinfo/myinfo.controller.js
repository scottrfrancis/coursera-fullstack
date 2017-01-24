(function() {
'use strict'

angular.module('public')
  .controller('MyinfoController', MyinfoController)

MyinfoController.$inject = ['savedItems', 'MenuService']

function MyinfoController(savedItems, MenuService) {
  var info = this

  info.savedItems = savedItems

  MenuService.getMenuItem(savedItems.fave)
  .then(function(data) {
      info.faveItem = data
  })
}
})()
