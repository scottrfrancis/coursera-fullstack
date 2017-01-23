(function() {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)
    .directive('menuItem', MenuItemDirective)

  SignupController.$inject = ['menuItems', 'MenuService', 'FaveService']
  MenuItemDirective.$inject = ['$q']

  function SignupController(menuItems, MenuService, FaveService) {
    var signup = this
    signup.menuService = MenuService
    signup.faveService = FaveService

    signup.menuShorts = menuItems.menu_items.map(function(e) {
      return e.short_name
    })

    signup.submit = function() {
      // check the fave
      signup.menuService.getMenuItem(this.fave).then(function(data) {
        console.log(data)
      })

      signup.faveService.fave = this.fave

      signup.completed = true
    }
  }

  function MenuItemDirective($q) {
    var signup = this

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$asyncValidators.menuItem = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            // return true
            return $q.resolve()
          }

          var def = $q.defer()
          // valid = (scope.signupCtrl.menuShorts.indexOf(modelValue) !== -1)
          scope.signupCtrl.menuService.getMenuItem(modelValue)
            .then(function(data) {
              console.log("menuItem returned: " + data)
              // return (data !== undefined)
              if (data !== undefined) {
                def.resolve()
              } else {
                def.reject()
              }
          })

          return def.promise
        }
      }
    }
  }

})()
