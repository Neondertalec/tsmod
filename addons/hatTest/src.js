// ==UserScript==
// @name        TS-Mod-addons Hats
// @version     1.0.3
// @description	Evades.io TS script addon.
// @author      Script by: MeOw:3 (🎀Depression🎀#5556).
// @match       https://*.evades.io/*
// @match       https://*.evades.online/*
// @match       https://*evades.io/*
// @match       https://*evades.online/*
// @match       https://*localhost/*
// @downloadURL https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/hatTest/src.js
// @updateURL   https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/hatTest/src.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

window.baseobj = null;

function isSameType(o1,o2){
	return o1.constructor.name === o2.constructor.name
}

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
	if(newEnt.hatImage && newEnt.hatImage.clone) newEnt.hatImage = newEnt.hatImage.clone()
	if(newEnt.bodyImage && newEnt.bodyImage.clone) newEnt.bodyImage = newEnt.bodyImage.clone()
	if(x) newEnt.x = x;
	if(y) newEnt.y = y;
	return newEnt;
}

function remap(){
	for(let i in client.state.entities){
		if(i[0] != "f") continue;
		let el = client.state.entities[i];

		el.hatImage = client.main.hatImage;
		el.bodyImage = client.main.bodyImage;

		if(client.main.hatImage && client.main.hatImage.clone) el.hatImage = client.main.hatImage.clone()
		if(client.main.bodyImage && client.main.bodyImage.clone) el.bodyImage = client.main.bodyImage.clone()
	}
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

function setImg(obj, key, classE){
	if(!obj[key] || obj[key].constructor.name != (new classE()).constructor.name){
		obj[key] = new classE();
		return true;
	}
	return false;
}

window.setCloneHats = (url)=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	if(setImg(client.main, "hatImage", client.imgs.constructos.SimpleImage)){
		client.main.hatName = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}
	
	client.main.hatImage.src = url;
	
	client.main.hatImage.onerror = ()=>{
		client.main.hatImage.src = "https://cdn.discordapp.com/emojis/835207478567895130.webp";
		console.log("%cInvalid link", "color: red;");
	}
	remap();
}

window.setCloneBodies = (url)=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	if(setImg(client.main, "bodyImage", client.imgs.constructos.SimpleImage)){
		client.main.bodyName = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}

	client.main.bodyImage.src = url;

	client.main.bodyImage.onerror = ()=>{
		client.main.bodyImage.src = "https://cdn.discordapp.com/emojis/835207478567895130.webp";
		console.log("%cInvalid link", "color: red;");
	}
	remap();
}

function loadAsset(prefix, url){
	if(client.imgs.obj){
		const newImage = client.imgs.obj[`${prefix}/${url}`] = new client.imgs.constructos.SimpleImage();
		newImage.src = url;

		newImage.onerror = ()=>{
			newImage.src = "https://cdn.discordapp.com/emojis/835207478567895130.webp";
			console.log("%cInvalid link: " + url, "color: red;");
		}
	}
}

window.setCloneHatsAnimated = (data)=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	for(let i in data.frames){
		loadAsset("tsmod", data.frames[i].path)
	}

	if(setImg(client.main, "hatImage", client.imgs.constructos.AnimatedImage)){
		client.main.hatName = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}
	client.main.hatImage.initData = {prefixPath: "tsmod", data};
	client.main.hatImage.loadFrom(data);
	client.main.hatImage = client.main.hatImage.clone();
	remap();
}

window.setCloneBodiesAnimated = (data)=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	for(let i in data.frames){
		loadAsset("tsmod", data.frames[i].path)
	}

	if(setImg(client.main, "bodyImage", client.imgs.constructos.AnimatedImage)){
		client.main.bodyName = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}
	client.main.bodyImage.initData = {prefixPath: "tsmod", data};
	client.main.bodyImage.loadFrom(data);
	client.main.bodyImage = client.main.bodyImage.clone();
	remap();
}