'use strict';

angular.module('molarityApp')
  .controller('MainCtrl', function ($scope) {
    $scope.calculation = function() {
        if ($scope.radioValue === "selectMolarity") {
          return $scope.findMolarity();
        }
        else if ($scope.radioValue === "selectMass") {
          return $scope.findMass();
        }
        else return 3;
    };
    
    $scope.findMolarity = function() {
      $scope.unknownMolarity =  (1/($scope.knownMw/$scope.knownMass))/$scope.knownVolume;
      return $scope.unknownMolarity;
      };
    
    $scope.findMass = function(){
      $scope.unknownMass = ($scope.knownMw * $scope.knownMolarity/$scope.knownVolume);
      return $scope.unknownMass;
    };
  }
);

