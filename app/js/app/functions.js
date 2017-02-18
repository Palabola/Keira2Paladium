/*jslint browser: true, white: true, plusplus: true, eqeq: true*/
/*global angular, console, alert, squel*/
/*jslint es5: true */

(function () {
  'use strict';

  var app = angular.module('keira2');


  /* SYNCHRONOUS FUNCTIONS
   * - they are used to get the Creature\Quest\Spell\Item\GameObject name in a synchronous way
   * - returns the ID when fails
   * - since they SYNCHRONOUS request, use it ONLY when really needed
   * - `false` attribute makes the requests synchronous
   * - used for: SAI Editor comments generation
   */
  var $jsonp = (function(){
  var that = {};

  that.send = function(src, options) {
    var callback_name = options.callbackName || 'callback',
      on_success = options.onSuccess || function(){},
      on_timeout = options.onTimeout || function(){},
      timeout = options.timeout || 10; // sec

    var timeout_trigger = window.setTimeout(function(){
      window[callback_name] = function(){};
      on_timeout();
    }, timeout * 1000);

    window[callback_name] = function(data){
      window.clearTimeout(timeout_trigger);
      on_success(data);
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  return that;
        })();



  app.synchGetCreatureNameById = function(id) {
    var request, data;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "creature/creature_template/" + id, false);
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return id; }
      return data[0].name;
    } else {
      return id;
    }
  };

  app.synchGetCreatureNameByGuid = function(guid) {
    var request, data, id;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "creature/creature_addon/guid/" + guid, false);
    request.send(null);

    if (request.status === 200) {

      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return guid; }
      id = data[0].id;

      request = new XMLHttpRequest();
      request.open('GET', app.api + "creature/creature_template/" + id, false);
      request.send(null);

      if (!Array.isArray(data) || request.status === 200) {

        data = JSON.parse(request.responseText);
        if (data.length < 1) { return guid; }
        return data[0].name;

      } else {
        return guid;
      }
    } else {
      return guid;
    }
  };

  app.synchGetQuestTitleById = function(id) {
    var request, data;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "quest/template/" + id, false);
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return id; }
      return data[0].Title;
    } else {
      return id;
    }
  };

  app.synchGetQuestTitleByCriteriaFunc1 = function(requiredNpcOrGo1, requiredNpcOrGo2, requiredNpcOrGo3, requiredNpcOrGo4) {
    if (requiredNpcOrGo1 == undefined) { requiredNpcOrGo1 = ""; }
    if (requiredNpcOrGo2 == undefined) { requiredNpcOrGo2 = ""; }
    if (requiredNpcOrGo3 == undefined) { requiredNpcOrGo3 = ""; }
    if (requiredNpcOrGo4 == undefined) { requiredNpcOrGo4 = ""; }
    var request, data;
    request = new XMLHttpRequest();
    request.open(
      'GET',
      app.api + "custom/GetQuestTitleByCriteria/?"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo1 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo2 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo3 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo4,
      false
    );
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return ""; }
      return data[0].title;
    } else {
      return "";
    }
  };

  app.synchGetQuestTitleByCriteriaFunc2 = function(requiredNpcOrGo1, requiredNpcOrGo2, requiredNpcOrGo3, requiredNpcOrGo4, requiredSpellCast1) {
    if (requiredNpcOrGo1 == undefined) { requiredNpcOrGo1 = ""; }
    if (requiredNpcOrGo2 == undefined) { requiredNpcOrGo2 = ""; }
    if (requiredNpcOrGo3 == undefined) { requiredNpcOrGo3 = ""; }
    if (requiredNpcOrGo4 == undefined) { requiredNpcOrGo4 = ""; }
    if (requiredSpellCast1 == undefined) { requiredSpellCast1 = ""; }
    var request, data;
    request = new XMLHttpRequest();
    request.open(
      'GET',
      app.api + "custom/GetQuestTitleByCriteria/?"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo1 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo2 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo3 + "&"
      + "RequiredNpcOrGo1=" + requiredNpcOrGo4 + "&"
      + "RequiredSpellCast1=" + requiredSpellCast1,
      false
    );
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return ""; }
      return data[0].title;
    } else {
      return "";
    }
  };

  app.synchGetItemNameById = function(id) {
    var request, data;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "item/template/" + id, false);
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return id; }
      return data[0].name;
    } else {
      return id;
    }
  };

  app.synchGetGameObjectNameById = function(id) {
    var request, data;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "gameobject/gameobject_template/" + id, false);
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return id; }
      return data[0].name;
    } else {
      return id;
    }
  };

  app.synchGetGameObjectNameByGuid = function(guid) {
    var request, data, id;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "gameobject/gameobject/guid/" + guid, false);
    request.send(null);

    if (request.status === 200) {

      data = JSON.parse(request.responseText);
      if (!Array.isArray(data) || data.length < 1) { return guid; }
      id = data[0].id;

      request = new XMLHttpRequest();
      request.open('GET', app.api + "gameobject/gameobject_template/" + id, false);
      request.send(null);

      if (!Array.isArray(data) || request.status === 200) {

        data = JSON.parse(request.responseText);
        if (data.length < 1) { return guid; }
        return data[0].name;

      } else {
        return guid;
      }
    } else {
      return guid;
    }
  };

    

  app.synchGetSpellNameById = function(id) {
    var request, data;
    request = new XMLHttpRequest();
    request.open('GET', app.api + "dbc/spells/" + id, false);
    request.send(null);

    if (request.status === 200) {
      data = JSON.parse(request.responseText);
      console.log(data);
      return data.spellName+' ('+id+') ';
    } else {
      return id;
    }
  };

}());
