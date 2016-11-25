(function() {
  'use strict'

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'menu/templates/items.template.html',
      bindings: {
        items: '<'
      }
    })
})()
