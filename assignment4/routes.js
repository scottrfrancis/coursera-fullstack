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

    // Premade list page
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

    .state('categories.items', {
      url: '/{categoryShortName}/items',
      templateUrl: 'menu/templates/items.template.html',
      controller: 'ItemsController as itemctl',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getItemsForCategory("L")
        }]
      }
    })

    // .state('mainList.itemDetail', {
    //   url: '/item-detail/{itemId}',
    //   templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    //   controller: "ItemDetailController as itemDetail"
    // });

  }

})()
