/*jslint browser: true, eqeq: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('keira2');

 /* Stupid JS */
    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
           arr[i] = [];
        }

        return arr;
      }


  /* INIT ARRAYS */
  app.scalling    = [];
  app.scalling.hp = [];
  app.scalling.dmg = [];
  app.scalling.hp.lvl  = Create2DArray(200);
  app.scalling.dmg.lvl  = Create2DArray(200);
   /*  Warrior / Mage   */

  
  app.scalling.hp.lvl[6][110] = {1:"1075123", 2:"1075123", 4:"1039223", 8:"860099"};
  app.scalling.hp.lvl[6][111] = {1:"1075123", 2:"1075123", 4:"1039223", 8:"860099"};
  app.scalling.hp.lvl[6][112] = {1:"1112213", 2:"1112213", 4:"1039223", 8:"889771"};
  app.scalling.hp.lvl[6][113] = {1:"1150587", 2:"1150587", 4:"1150587", 8:"920470"};

  app.scalling.hp.lvl[7][120] = {1:"30500", 2:"30500", 4:"30500", 8:"24400"};
  app.scalling.hp.lvl[7][121] = {1:"30500", 2:"30500", 4:"30500", 8:"24400"};
  app.scalling.hp.lvl[7][122] = {1:"30500", 2:"30500", 4:"30500", 8:"24400"};
  app.scalling.hp.lvl[7][123] = {1:"30500", 2:"30500", 4:"30500", 8:"24400"};
  
  app.scalling.dmg.lvl[6][110] = 32835;
  app.scalling.dmg.lvl[6][111] = 33791;
  app.scalling.dmg.lvl[6][112] = 34774;
  app.scalling.dmg.lvl[6][113] = 35786;

  app.scalling.dmg.lvl[7][120] = 947;
  app.scalling.dmg.lvl[7][121] = 947;
  app.scalling.dmg.lvl[7][122] = 947;
  app.scalling.dmg.lvl[7][123] = 947;
  
}());
