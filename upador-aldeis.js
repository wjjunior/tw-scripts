// ==UserScript==
// @name         Upador de Aldeias
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.tribalwars.com.pt/*
// @match        https://*.tribalwars.com.br/*
// @match        https://*.die-staemme.de/*
// @match        https://*.plemiona.pl/*
// @match        https://*.tribalwars.no.com/*
// @match        https://*.tribalwars.net/*
// @match        https://*.guerrastribales.es/*
// @grant        none
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...


var buildings = [
  ["main_buildrow_main", 0],
  ["main_buildrow_barracks", 0],
  ["main_buildrow_church_f", 0],
  ["main_buildrow_smith", 0],
  ["main_buildrow_place", 0],
  ["main_buildrow_statue", 1],
  ["main_buildrow_market", 0],
  ["main_buildrow_wood", 0],
  ["main_buildrow_stone", 0],
  ["main_buildrow_iron", 0],
  ["main_buildrow_farm", 0],
  ["main_buildrow_storage", 0],
  ["main_buildrow_hide", 0],
  ["main_buildrow_wall", 0],
  ["main_buildrow_garage", 0],
  ["main_buildrow_stable", 0],
  ["main_buildrow_snob", 0],
];

var autoBuild = [
  ["main_buildrow_wood", 1],
  ["main_buildrow_stone", 1],
  ["main_buildrow_iron", 1],
  ["main_buildrow_wood", 2],
  ["main_buildrow_stone", 2],
  ["main_buildrow_main", 2],
  ["main_buildrow_main", 3],
  ["main_buildrow_barracks", 2],
  ["main_buildrow_wood", 3],
  ["main_buildrow_stone", 3],
  ["main_buildrow_barracks", 2],
  ["main_buildrow_storage", 2],
  ["main_buildrow_storage", 3],
  ["main_buildrow_iron", 2],
  ["main_buildrow_barracks", 3],
  ["main_buildrow_iron", 3],
  ["main_buildrow_farm", 2],
  ["main_buildrow_main", 4],
  ["main_buildrow_main", 5],
  ["main_buildrow_statue", 1],
  ["main_buildrow_main", 4],
  ["main_buildrow_smith", 1],
  ["main_buildrow_wood", 4],
  ["main_buildrow_stone", 4],
  //   ["main_buildrow_wall", 1],
  //   ["main_buildrow_hide", 2],
  ["main_buildrow_market", 1],
  ["main_buildrow_market", 2],
  ["main_buildrow_market", 3],
  ["main_buildrow_wood", 5],
  ["main_buildrow_stone", 5],
  ["main_buildrow_wood", 6],
  ["main_buildrow_stone", 5],
  ["main_buildrow_wood", 7],
  ["main_buildrow_stone", 7],
  ["main_buildrow_storage", 4],
  ["main_buildrow_wood", 8],
  ["main_buildrow_stone", 8],
  ["main_buildrow_storage", 5],
  ["main_buildrow_farm", 3],
  ["main_buildrow_iron", 4],
  ["main_buildrow_wood", 9],
  ["main_buildrow_stone", 9],
  ["main_buildrow_storage", 6],
  ["main_buildrow_iron", 5],
  ["main_buildrow_wood", 10],
  ["main_buildrow_stone", 10],
  ["main_buildrow_storage", 7],
  ["main_buildrow_iron", 5],
  ["main_buildrow_iron", 6],
  ["main_buildrow_iron", 7],
  ["main_buildrow_iron", 8],
  ["main_buildrow_iron", 9],
  ["main_buildrow_iron", 10],
  ["main_buildrow_storage", 8],
  ["main_buildrow_wood", 11],
  ["main_buildrow_stone", 11],
  ["main_buildrow_iron", 15],
  ["main_buildrow_storage", 9],
  ["main_buildrow_wood", 12],
  ["main_buildrow_stone", 12],
  ["main_buildrow_iron", 12],
  ["main_buildrow_farm", 4],
  ["main_buildrow_farm", 5],
  ["main_buildrow_wood", 14],
  ["main_buildrow_stone", 13],
  ["main_buildrow_storage", 10],
  ["main_buildrow_wood", 13],
  ["main_buildrow_stone", 13],
  ["main_buildrow_storage", 11],
  ["main_buildrow_wood", 14],
  ["main_buildrow_stone", 14],
  ["main_buildrow_market", 4],
  ["main_buildrow_market", 5],
  ["main_buildrow_market", 6],
  ["main_buildrow_market", 7],
  ["main_buildrow_wood", 15],
  ["main_buildrow_stone", 15],
  ["main_buildrow_iron", 15],
  ["main_buildrow_market", 8], //here
  ["main_buildrow_wood", 16],
  ["main_buildrow_stone", 16],
  ["main_buildrow_market", 8],
  ["main_buildrow_market", 9],
  ["main_buildrow_market", 10],
  ["main_buildrow_market", 11],
  ["main_buildrow_market", 12],
  ["main_buildrow_wood", 17],
  ["main_buildrow_stone", 17],
  ["main_buildrow_iron", 17],
  ["main_buildrow_market", 13],
  ["main_buildrow_market", 14],
  ["main_buildrow_storage", 12],
  ["main_buildrow_wood", 18],
  ["main_buildrow_stone", 18],
  ["main_buildrow_iron", 18],
  //   ["main_buildrow_smith", 11],
  ["main_buildrow_wood", 19],
  ["main_buildrow_stone", 19],
  ["main_buildrow_iron", 19],
  ["main_buildrow_wood", 21],
  ["main_buildrow_stone", 21],
  ["main_buildrow_iron", 21],
  ["main_buildrow_main", 20],
  //   ["main_buildrow_smith", 20],
  ["main_buildrow_wood", 22],
  ["main_buildrow_stone", 22],
  ["main_buildrow_iron", 22],
  ["main_buildrow_wood", 23],
  ["main_buildrow_stone", 23],
  ["main_buildrow_iron", 23],
  ["main_buildrow_wood", 24],
  ["main_buildrow_stone", 24],
  ["main_buildrow_iron", 24],
  ["main_buildrow_wood", 25],
  ["main_buildrow_stone", 25],
  ["main_buildrow_iron", 25],
  //   ["main_buildrow_barracks", 25],
  ["main_buildrow_farm", 20],
  ["main_buildrow_storage", 20],
  ["main_buildrow_wood", 27],
  ["main_buildrow_stone", 27],
  ["main_buildrow_iron", 27],
  ["main_buildrow_wood", 30],
  ["main_buildrow_stone", 30],
  ["main_buildrow_iron", 30],
  //   ["main_buildrow_stable", 20],
];

console.log("starting");
setInterval(function () {
  for (var i = 0; i < buildings.length; i++) {
    var aux = getBuldingLevel(buildings[i][0]);

    if (aux != undefined && !isNaN(aux * 1)) {
      buildings[i][1] = aux * 1;
    }
  }

  autoBuilding();
}, 3000);

function autoBuilding() {
  if ($(location).attr("href").indexOf("screen=main") != -1) {
    var done = false;
    //se so tem 0 na lista de espera
    if ($('[id="buildqueue"]').find("tr").length == 0) {
      for (var i = 0; i < autoBuild.length; i++) {
        if (done) {
          break;
        }
        for (var c = 0; c < buildings.length; c++) {
          if (done) {
            break;
          }
          //se sao do mesmo tipo de construçao
          if (autoBuild[i][0] == buildings[c][0]) {
            //se o nivel é menor ou seja ainda nao foi construido
            if (autoBuild[i][1] > buildings[c][1]) {
              done = true;
              build(buildings[c][0]);
              // console.log(autoBuild[i][0]+" to "+autoBuild[i][1]+" building");
            }
          }
        }
      }
    }
  }
}

function getBuldingLevel(building) {
  return $('[id="' + building + '"]')
    .find("td")
    .eq(0)
    .find("span")
    .text()
    .split(" ")[1];
}

function build(building) {
  var haveWood =
    $('[id="' + building + '"]')
      .find("td")
      .eq(1)
      .text() *
      1 <
    $('[id="wood"]').text() * 1;
  var haveStone =
    $('[id="' + building + '"]')
      .find("td")
      .eq(2)
      .text() *
      1 <
    $('[id="stone"]').text() * 1;
  var haveIron =
    $('[id="' + building + '"]')
      .find("td")
      .eq(3)
      .text() *
      1 <
    $('[id="iron"]').text() * 1;

  if (haveWood && haveStone && haveIron) {
    console.log("building =======>" + building);
    $('[id="' + building + '"]')
      .find("td")
      .eq(6)
      .find("a")
      .eq(1)
      .click();
  }
}

setInterval(function () {
  var text = "";
  var tr = $('[id="buildqueue"]').find("tr").eq(1);

  text = tr
    .find("td")
    .eq(1)
    .find("span")
    .eq(0)
    .text()
    .split(" ")
    .join("")
    .split("\n")
    .join("");
  var timeSplit = text.split(":");

  if (timeSplit[0] * 60 * 60 + timeSplit[1] * 60 + timeSplit[2] * 1 < 3 * 60) {
    console.log("Speeding building for free");
    tr.find("td").eq(2).find("a").eq(2).click();
  }
  //missao concluida
  $('[class="btn btn-confirm-yes"]').click();
}, 1000);

setInterval(function () {
  if ($(location).attr("href").indexOf("screen=main") != -1) {
    location.reload();
  }
}, 1000 * 60 * 30);
