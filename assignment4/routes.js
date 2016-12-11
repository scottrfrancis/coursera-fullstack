(function() {
  'use strict'

  angular.module('MenuApp')
    .config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/')

    // *** Set up UI states ***
    $stateProvider

    // Home page
      .state('home', {
      url: '/',
      templateUrl: 'menu/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'menu/templates/main-categorylist.template.html',
      controller: 'CategoriesController as catctl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'menu/templates/main-itemlist.template.html',
      controller: 'ItemsController as itemctl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        }]
      }
    })

  }

})()
