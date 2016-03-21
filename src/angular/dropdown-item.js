module.exports = angular.module('mui.dropdown-item', [])
  .directive('muiDropdownItem', function() {
    return {
      restrict : 'AE',
      replace: true,
      scope : {
        muiLink : '@'
      },
      transclude : true,
      template : '<li><a href="{{link}}" ng-transclude></a></li>'
    };
  });
