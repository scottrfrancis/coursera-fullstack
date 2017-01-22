(function() {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)
    .directive('menuItem', MenuItemDirective)

  SignupController.$inject = ['menuItems', 'FaveService']

  function SignupController(menuItems, FaveService) {
    var signup = this
    signup.faveService = FaveService

    signup.menuShorts = menuItems.menu_items.map(function(e) {
      return e.short_name
    })

    signup.submit = function() {
      // save the fave
      signup.faveService.fave = this.fave
        // signup.faveService.saveFave('bar')

      signup.completed = true
    }
  }

  function MenuItemDirective() {
    var signup = this

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.menuItem = function(modelValue, viewValue) {
          var valid = false

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true
          }

          valid = (scope.signupCtrl.menuShorts.indexOf(modelValue) !== -1)

          return valid
        }
      }
    }
  }

})()
