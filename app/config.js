/*jslint browser: true, white: true, plusplus: true*/
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('keira2');

  /* Edit with path of TC-JSON-API */
  //app.defaultAPI = "http://localhost/API/public/index.php/";
  
  app.defaultAPI = "http://localhost:3000/";

  /* Edit with default version of Keira2
   * Values:
   * - "3.3.5"
   * - "6.x"
   */
  app.defaultVersion = "6.x";


  /* [OPTIONAL] Multiple API instances
   *
   * If you have one separated instance TC-JSON-API for each game version
   * you can specify them by un-commenting and setting properly the following variables
   *
   * WARNING: un-comment the lines below *ONLY* if you are going to set *BOTH OF THEM* properly
   * if you just want to use Keira2 for one game version only, do *NOT* touch the lines below
   *
   */

   app.apiInstances = {};
   //app.apiInstances['3.3.5']  = "../TC-JSON-API/public/index.php/";
   //app.apiInstances['6.x']    = "../TC-JSON-API-6/public/index.php/";

}());
