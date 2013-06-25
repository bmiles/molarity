'use strict';
//controllers!

angular.module('molarityApp').controller('MainCtrl', function ($scope) {
    
    $scope.calculation = function() {
        if ($scope.radioValue === "selectMolarity") {
          //return $scope.disMolarity = true;
          return $scope.findMolarity();
          
        }
        else if ($scope.radioValue === "selectMass") {
          return $scope.findMass();
        }
        else return "no calculation selected :(";
    };
    
    $scope.findMolarity = function() {
      $scope.unknownMolarity =  (1/($scope.knownMw/$scope.knownMass))/$scope.knownVolume;
      return $scope.unknownMolarity;
      };
    
    $scope.findMass = function(){
      $scope.unknownMass = ($scope.knownMw * $scope.knownMolarity/$scope.knownVolume);
      return $scope.unknownMass;
      };

    $scope.isDisabled = function (test){
         if (test === $scope.radioValue){
         return true;
         }
    } 
  }
);

function DropdownCtrl($scope) {
  $scope.items = [
    "M",
    "mM",
    "µM",
    "nM",
    "pM"
  ];
}

var ButtonsCtrl = function ($scope) {

  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
};


