(function() {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)
    .directive('menuItem', MenuItemDirective)

  function SignupController() {
    var signup = this

    signup.menuItems = new Array()
    signup.menuItems.push("A-1", "B-2")

    signup.submit = function() {
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

            valid = (signup.menuItems.indexOf(modelValue) !== -1)

            return valid
          }
        }
      }
  }

})()
