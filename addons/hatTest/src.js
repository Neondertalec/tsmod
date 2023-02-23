// ==UserScript==
// @name        TS-Mod-addons Hats
// @version     1.0.1
// @description	Evades.io TS script addon.
// @author      Script by: MeOw:3 (🎀Depression🎀#5556).
// @match       https://*.evades.io/*
// @match       https://*.evades.online/*
// @match       https://*evades.io/*
// @match       https://*evades.online/*
// @downloadURL https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/hatTest/src.js
// @updateURL   https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/hatTest/src.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

window.baseobj = null

window.load = ()=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return false;
	}

	window.baseobj = {};
	for(let i in client.main){
		window.baseobj[i] = client.main[i];
	}
	window.baseobj.getEffectConfigs = client.main.getEffectConfigs;
	window.baseobj.render = client.main.render;
	window.baseobj.isDowned = client.main.isDowned;
	window.baseobj.getColor = client.main.getColor;
	window.baseobj.renderIcedEffect = client.main.renderIcedEffect;
	window.baseobj.renderSnowballedEffect = client.main.renderSnowballedEffect;
	window.baseobj.renderPoisonedEffect = client.main.renderPoisonedEffect;
	window.baseobj.renderCrumbledInvulnerabilityEffect = client.main.renderCrumbledInvulnerabilityEffect;
	window.baseobj.renderShadowedInvulnerabilityEffect = client.main.renderShadowedInvulnerabilityEffect;
	window.baseobj.renderAccessory  = client.main.renderAccessory;
	return true;
}

window.createClone = (id, heroId, radius=15, x=null, y = null)=>{
	if(!window.baseobj){
		if(!window.load()) return;
	}

	let newEnt = client.state.entities["f"+id] = {...window.baseobj, x: client.main.x, y: client.main.y, radius:radius, heroType:Math.min(Math.max(0, heroId), window.heroConfig.length-1)};
	newEnt.color = heroConfig[newEnt.heroType].backgroundColor;
	if(x) newEnt.x = x;
	if(y) newEnt.y = y;
	return newEnt;
}

window.fillHeroes = ()=>{
	if(!window.baseobj){
		if(!window.load()) return;
	}
	let i = 0, lineN = 0;
	for(i = 0; i < window.heroConfig.length-1; i++){
		lineN = Math.floor(i/7);
		window.createClone(i, i, 15, 2000 + 43*(i%7), 80 + 52*lineN);
	}

	lineN++;
	let i2 = -1;
	window.createClone(++i, 18, 10, 2000 + 43*((++i2)%7), 80 + 52*lineN);//rock 1
	window.createClone(++i, 18, 8, 2000 + 43*((++i2)%7), 80 + 52*lineN);//rock 2
	window.createClone(++i, 18, 7, 2000 + 43*((++i2)%7), 80 + 52*lineN);//rock 3

	window.createClone(++i, 5, 16, 2000 + 43*((++i2)%7), 80 + 53*lineN);//brute 1
	window.createClone(++i, 5, 17, 2000 + 43*((++i2)%7), 80 + 53*lineN);//brute 2
	window.createClone(++i, 5, 18, 2000 + 43*((++i2)%7), 80 + 53*lineN);//brute 3
	window.createClone(++i, 24, 19, 2000, 80 + 64*lineN);//mortuus max
}

window.setCloneHats = (url)=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}
	if(!client.main.hatImage){
		console.log("%cYou need to have a hat equipped", "color: red; font-size: 20px");
		return;
	}
	
	client.main.hatImage.src = url;
	
	client.main.hatImage.onerror = ()=>{
		client.main.hatImage.src = "https://cdn.discordapp.com/emojis/835207478567895130.webp";
		console.log("%cInvalid link", "color: red;");
	}
	
}