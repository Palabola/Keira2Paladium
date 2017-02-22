/*jslint browser: true, eqeq: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('keira2');

  app.controller("SearchByEntitySAIController", function ($scope, $rootScope, $stateParams, $http) {

    /* Default selectedSourceType */
    $scope.selectedSourceType = 0;

    /* [Function] searchCreatures*/
    $scope.searchCreatures = function (creatureEntry, creatureName, creatureSubname) {

      if ( creatureEntry && (!creatureName && !creatureSubname) && (creatureEntry.length > 2) ) {
          
      $http.get( app.api + "search/creature/" + creatureEntry).success(function (data, status, header, config) {
        $scope.creatures = $rootScope.fixNumericValues(data);
            })
              .error(function (data, status, header, config) {
              console.log("[ERROR] CREATURE SEARCH $http.get request failed");
            });
      }
      
      if ( creatureName && (!creatureEntry && !creatureSubname) && (creatureName.length > 3) ) {
        
         $http.get( app.api + "search/creature/name/" + creatureName).success(function (data, status, header, config) {
        $scope.creatures = $rootScope.fixNumericValues(data);
            })
              .error(function (data, status, header, config) {
              console.log("[ERROR] CREATURE SEARCH $http.get request failed");
            });
        
        
      }
      
      
      if ( creatureSubname && (!creatureEntry && !creatureName) && (creatureSubname.length < 3) ) {
        alert("Please insert a Subname of at least 3 characters");
        return;
      }



    };
    
    $scope.searchGameObjects = function (goEntry, goName) {

      $http.get( app.api + "gameobject/gameobject_template/" + goEntry).success(function (data, status, header, config) {
        $scope.gameobjects = $rootScope.fixNumericValues(data);
      })
        .error(function (data, status, header, config) {
        console.log("[ERROR] gameobject/gameobject_template/ $http.get request failed");
      });

    };
    

    
    

  });

}());
