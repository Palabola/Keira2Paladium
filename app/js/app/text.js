/*jslint browser: true, eqeq: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('keira2');

  app.controller("TextController", function ($scope, $rootScope, $http, $stateParams) {

    /* At start we have no row selected */
    $scope.selectedRow = -1;

    /* The item currently selected by the user (bound to the view) */
    $scope.selected = {
      Entry         : parseInt($stateParams.entryOrGuid, 10),
      groupid       : 0,
      id             : 0,
      text          : '',
      type : 0,
      sound      : 0,
      BroadcastTextId       : 0,
      comment      : ''
    };

    /* Type check */
    $scope.parseValues = function() {

      $scope.selected.groupid       = parseInt($scope.selected.groupid, 10);
      $scope.selected.id        = parseInt($scope.selected.id, 10);
      $scope.selected.type           = parseInt($scope.selected.type, 10);
      $scope.selected.sound      = parseInt($scope.selected.sound, 10);
      $scope.selected.BroadcastTextId = parseInt($scope.selected.BroadcastTextId, 10);
    };

    /* Select a row from collection */
    $scope.selectRow = function(rows, index) {
      $scope.selectedRow = index;
      $scope.selected = angular.copy(rows[index]);
    };

    /* Edit selected row */
    $scope.editSelectedRowOf = function(rows, primaryKey2) {
      if (!$scope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();


      rows.splice($scope.selectedRow, 1, angular.copy($scope.selected));
    };

    /* Delete selected row from collection */
    $scope.deleteSelectedRowFrom = function(rows) {
      if (!$rootScope.isEntrySelected()) { return; }

      rows.splice($scope.selectedRow, 1);
    };

    /* Add selected row to collection */
    $scope.addRowTo = function(rows, primaryKey2) {
      if (!$rootScope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();


      rows.splice(0, 0, angular.copy($scope.selected));
    };
    
     $scope.sync_database = function (text_data){
         
       console.log(text_data); 
       
       $http({
          method  : 'POST',
          url     : location.origin+'/creature_text_execute',
          //data    :  {sql_query: $scope.SAIScript}, //forms user object
          data    :  $scope.new_creature_text, //forms user object
          headers : {'Content-Type': 'text/plain'} 
         })
          .success(function(data) {  

                $http.get( app.api + "creature/text/" + $stateParams.entryOrGuid )
              .success(function (data, status, header, config) {
              $scope.current_creature_text = $rootScope.fixNumericValues(data);
              $scope.new_creature_text = angular.copy($scope.current_creature_text);
              
             // $scope.
            })
              .error(function (data, status, header, config) {
              console.log("[ERROR] creature/onkill_reputation/ $http.get request failed");
            });


                }
             );
       
         
     };
    
    
    

  });

}());
