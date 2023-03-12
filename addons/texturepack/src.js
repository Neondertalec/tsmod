// ==UserScript==
// @name        TS-Mod-addons texturepack
// @version     1.0.1
// @description	Evades.io TS script addon.
// @author      Script by: MeOw:3 (🎀Depression🎀#5556).
// @match       https://evades.io/*
// @match       https://evades.online/*
// @match       https://eu.evades.io/*
// @downloadURL https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/texturepack/src.js
// @updateURL   https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/texturepack/src.js
// @run-at      document-end
// @grant       none
// ==/UserScript==

function loadPack(){
    return {
        "maps/tiles": "https://raw.githubusercontent.com/Neondertalec/tsmod/main/tiles5e12c370.jpg",
    }
}

function tick(fnc, ms){
    setTimeout(fnc, ms);
}

tick(function doTick(){
    if(window.client) window.client.imgs.loadPack(loadPack());
    else{
        tick(doTick, 200);
    }
}, 0);
