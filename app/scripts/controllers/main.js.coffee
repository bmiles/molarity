'use strict';

angular.module('molarityApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.unknownMolarity = (1/($scope.knownMw/$scope.knownMass))/$scope.knownVolume;
    
    $scope.unknownMass = ($scope.knownMw * $scope.knownMolarity/$scope.knownVolume);

  }, function DropdownCtrl($scope) {
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}
);

