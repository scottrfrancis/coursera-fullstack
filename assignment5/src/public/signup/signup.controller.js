(function() {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)
    .directive('menuItem', MenuItemDirective)

  SignupController.$inject = ['menuItems']

  function SignupController(menuItems) {
    var signup = this

    signup.menuShorts = menuItems.menu_items.map(function(e) {
      return e.short_name
    })

    signup.submit = function() {
      // check fave



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
