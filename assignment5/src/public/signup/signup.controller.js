(function() {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)
    .directive('menuItem', MenuItemDirective)

  function SignupController() {
    var signup = this

    signup.submit = function() {
      signup.completed = true
    }
  }

  function MenuItemDirective() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$validators.menuItem = function(modelValue, viewValue) {
            var valid = false

            if (ctrl.$isEmpty(modelValue)) {
              // consider empty models to be valid
              return true
            }

            if (viewValue > 12) {
              valid = true
            }

            return valid
          }
        }
      }
  }

})()
