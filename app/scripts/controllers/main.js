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

/*
    $scope.molarityUnitFactor = function() {
        if ($scope.molarityUnit === "si"){
            $scope.molarityFactor = 1;
            //return $scope.molarityFactor;
        } else if ($scope.molarityUnit === "milli"){
            $scope.molarityFactor = 0.001;
        
        } else if ($scope.molarityUnit === "micro"){
            $scope.molarityFactor = 0.000001;

        } else if ($scope.molarityUnit === "nano"){
            $scope.molarityFactor = 0.000000001;
        
        } else if ($scope.molarityUnit === "pico"){
            $scope.molarityFactor = 0.000000000001;
        }
    };
    $scope.massUnitFactor = function() {
        if ($scope.massUnit === "si"){
            $scope.massFactor = 1;
        } else if ($scope.massUnit === "milli"){
            $scope.massFactor = 0.001;
        
        } else if ($scope.massUnit === "micro"){
            $scope.massFactor = 0.000001;

        } else if ($scope.massUnit === "nano"){
            $scope.massFactor = 0.000000001;
        
        }
    };
    $scope.volumeFactor = function() {
        if ($scope.volumeUnit === "si"){
            return 1;
        } else if ($scope.volumeUnit === "milli"){
            return 0.001;
        
        } else if ($scope.volumeUnit === "micro"){
            return 0.000001;

        } else if ($scope.volumeUnit === "nano"){
            return 0.000000001;
        
        } else if ($scope.volumeUnit === "nano"){
            return 0.000000000001;
        }
    };
*/
    
    $scope.findMolarity = function() {
      var mass = $scope.knownMass;
      var massUnit = $scope.massUnit;
      var mw = $scope.knownMw;
      var volume = $scope.knownVolume;
      var volumeUnit = $scope.volumeUnit;
        
      $scope.unknownMolarity = (1/(mw/(mass*massUnit)))/(volume*volumeUnit);
      return $scope.unknownMolarity + " g/mol";
      };
    
    $scope.findMass = function(){      
      var mw = $scope.knownMw;
      var molarity = $scope.knownMolarity;
      var molarityUnit = $scope.molarityUnit;
      var volume = $scope.knownVolume;
      var volumeUnit = $scope.volumeUnit;
      
      $scope.unknownMass = (mw*(molarity*molarityUnit)*(volume*volumeUnit));
      return $scope.unknownMass + " g";
      };

    $scope.isDisabled = function (test){
      if (test === $scope.radioValue){
        return true;
        };
      };
      

  }
);

var ButtonsCtrl = function ($scope) {

  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
};


