(function() {
'use strict'

angular.module('public')
  .controller('MyinfoController', MyinfoController)

MyinfoController.$inject = ['savedItems']

function MyinfoController(savedItems) {
  var info = this

  console.log(savedItems)
  info.savedItems = savedItems

  info.savedItems.test = 'foo'
}

})
