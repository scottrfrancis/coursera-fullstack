(function() {
  'use strict'

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController)


  CategoriesController.$inject = ['MenuDataService', 'categories']

  function CategoriesController(MenuDataService, categories) {
    var catctl = this
    catctl.categories = categories

    catctl.foo = 'bar'
  }

})()
