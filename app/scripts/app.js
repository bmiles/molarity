'use strict';

var molarityApp = angular.module('molarityApp', [
  'ui.bootstrap'
  ]);
  
  angular.module('molarityApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
