// ==UserScript==
// @name        TS-Mod-addons Hats
// @version     1.1.1
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

if(!window.tsmod){
	window.tsmod = true;
	const f = ()=>{}, r = (e)=>e;
	window.loadGame = ()=>{
		window.client.load = true;
	};
	window.profiler = {setState:f};
	window.client = {events:{emit:f},areaData:{check:f},load:!1,imgs:{obj:{},constructos:{},retreived:f,loadPack:f},
	grb:{on:!1},state:null,main:null,drBefore:f,vers:{swi:f}}
	window.client.checkMsgSend = window.client.checkMsg = r;
	window.replaces = {id2:f}
	window.tags = {getChatTag:f}
}
setTimeout(() => {
	document.createElementP = function(name, args = null, fnc = null, parent = null) {
		const element = document.createElement(name);
		if (["input", "textarea"].includes(name)) {
			element.setAttribute("c-lock", "");
		}
		if (args != null) {
			Object.assign(element, args);
			if(args.style && typeof args.style != "string"){
				Object.assign(element.style, args.style);
			}
		}
		if (fnc)fnc(element);
		if(parent) parent.appendChild(element);
		return element;
	};
}, 3000);

window.baseobj = null;

function isSameType(o1,o2){
	return o1.constructor.name === o2.constructor.name
}

window.load = ()=>{
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return false;
	}

	window.baseobj = new (client.main.constructor)();
	for(let i in client.main){
		window.baseobj[i] = client.main[i];
	}
    for(let key of Object.getOwnPropertyNames(client.main.constructor.prototype.__proto__.constructor.prototype.__proto__)){
       window.baseobj[key] = client.main[key];
    }
    for(let key of Object.getOwnPropertyNames(client.main.constructor.prototype.__proto__)){
        window.baseobj[key] = client.main[key];
    }
    window.baseobj.unionState = ()=>{};
    window.baseobj.beforeStateUpdate = ()=>{};
    window.baseobj.receivingStateUpdate = ()=>{};
    window.baseobj.stateFields = ()=>{};
    window.baseobj.afterStateUpdate = ()=>{};
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
	for(i = 0; i < window.heroConfig.length; i++){
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

function setImg(obj, key, classE, ...constructData){
	if(/*!obj[key] || obj[key].constructor.name != (new classE(constructData)).constructor.name*/true){
		obj[key] = new classE(...constructData);
		return true;
	}
	return false;
}


window.camTo = (id = "f15")=>{//default to mirage (middle)
    const entity = client.state.entities[id];
    if(!entity)return
    client.state.self = {id: id, entity}
}

async function fileimg(file){
	return new Promise(async (res, rej)=>{
		let fv = URL.createObjectURL(file);

		const img = new Image();
		img.src = fv;
		img.onload = ()=>{
			res(img);
		};
	})
}

/**
 * 
 * @param {{blank: bool?, texture: Image, frame:{x:number, y:number, w:number, h:number}}} url 
 * @returns 
 */
function setCloneDecor (fillArgs, forTarget = "hatImage"){
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	if(setImg(client.main, forTarget, client.imgs.constructos.SimpleImage, fillArgs)){
		client.main[forTarget.split(/[A-Z]/)[0]+'Name'] = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}

	// client.main.hatImage.src = url;

	client.main.hatImage.onerror = ()=>{
		client.main.hatImage.src = "https://cdn.discordapp.com/emojis/835207478567895130.webp";
		console.log("%cInvalid link", "color: red;");
	}
	remap();
}

function loadAssetNew(prefix, url, img){
	client.imgs.obj[`${prefix}/${url}`] = new client.imgs.constructos.SimpleImage({
		texture: img,
		frame:{
			x:0,
			y:0,
			w:img.width || 1,
			h:img.height || 1,
		}}
	);
}

/**
 * 
 * @param {{frames: {duration: number, path: string, image: Image}[]}} fillArgs 
 * @returns 
 */
function setCloneDecorMulti (fillArgs, forTarget = "hatImage"){
	if(!client.main){
		console.log("%cYou need to enter a server to do this", "color: red; font-size: 20px");
		return;
	}

	for(let i in fillArgs.frames){
		loadAssetNew("tsmod", fillArgs.frames[i].path, fillArgs.frames[i].image);
	}

	if(setImg(client.main, forTarget, client.imgs.constructos.AnimatedImage, "tsmod", fillArgs)){
		client.main[forTarget.split(/[A-Z]/)[0]+'Name'] = "custom";
		window.load();
		console.log("%cPlease recreate your clones if nothing changed", "color: red;");
	}
	/*client.main.hatImage.initData = {prefixPath: "tsmod", data: fillArgs};
	client.main.hatImage.loadFrom(fillArgs);
	client.main.hatImage = client.main.hatImage.clone();*/
	remap();
}

window.createEditMenu = function createEditMenu(){
	const cgui = document.createElementP;
	const durations = {
		hats: [],
		body: []
	};
	return cgui('div', {className: 'editMenu-hattest ht-hiddlen'}, (container)=>{
		cgui('h1', {className: 'title-hattest', innerText: 'Image tester'}, null, container);
		cgui('h3', {className: 'title-hattest', innerText: 'Commands'}, null, container);
		cgui('button', {className: 'btn-hattest', innerText: 'init'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				window.load();
			});
		}, container);
		cgui('button', {className: 'btn-hattest', innerText: 'fill heroes'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				window.fillHeroes();
			});
		}, container);

		cgui('h3', {className: 'title-hattest', innerText: 'Single Hat'}, null, container);

		const hatImgSingleInput = cgui('input', {className: 'input-hattest', type:'file'}, null, container);
		cgui('button', {className: 'btn-hattest', innerText: 'Test hat img'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				console.log(hatImgSingleInput);
				const tex = hatImgSingleInput.files[0] ? await fileimg(hatImgSingleInput.files[0]) : new Image();
				console.log(tex);
				setCloneDecor({
					texture: tex,
					frame:{
						x:0,
						y:0,
						w:tex.width || 1,
						h:tex.height || 1,
					}
				}, 'hatImage');

			});
		}, container);

		
		cgui('h3', {className: 'title-hattest', innerText: 'Single Body'}, null, container);

		const bodyImgSingleInput = cgui('input', {className: 'input-hattest', type:'file'}, null, container);
		cgui('button', {className: 'btn-hattest', innerText: 'Test body img'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				console.log(bodyImgSingleInput, 'bimg');
				console.log(bodyImgSingleInput.files[0]);
				const tex = bodyImgSingleInput.files[0] ? await fileimg(bodyImgSingleInput.files[0]) : new Image();
				console.log(tex);
				setCloneDecor({
					texture: tex,
					frame:{
						x:0,
						y:0,
						w:tex.width || 1,
						h:tex.height || 1,
					}
				}, 'bodyImage');

			});
		}, container);

		cgui('h3', {className: 'title-hattest', innerText: 'Animated Hat'}, null, container);

		const hatImgAnimInput = cgui('input', {className: 'input-hattest', type:'file', multiple:true}, (input)=>{
			input.addEventListener('change', ()=>{
				for(let i = durations.hats.length; i < input.files.length; i++){
					durations.hats.push(500);
				}
				timeContainerHat.innerHTML = '';
				for(let i = 0; i < input.files.length; i++){
					let ii = i;
					cgui('input',{type:'number', className: 'input-hattest', 'value': durations.hats[i]},input=>{
						input.addEventListener('input', ()=>{
							durations.hats[ii] = +input.value || 0;
						});
					},timeContainerHat);
				}
				
			});
		}, container);
		
		const timeContainerHat = cgui('div', {className: 'input-container'}, null, container);

		cgui('button', {className: 'btn-hattest', innerText: 'Test hat animation'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				if(hatImgAnimInput.files.length == 0) return;
				console.log(hatImgAnimInput);
				const texes = [];

				for(let i = 0; i < hatImgAnimInput.files.length; i++){
					texes.push(fileimg(hatImgAnimInput.files[i]));
				}

				const loadedTexes = await Promise.all(texes); 

				console.log(texes);
				
				const parsedData = [];

				for(let i in loadedTexes){
					parsedData.push({duration: durations.hats[i], path: 'hatImage'+i, image: loadedTexes[i]});
				}


				setCloneDecorMulti({
					frames:parsedData
				}, 'hatImage');

			});
		}, container);

		cgui('h3', {className: 'title-hattest', innerText: 'Animated Body'}, null, container);

		const bodyImgAnimInput = cgui('input', {className: 'input-hattest', type:'file', multiple:true}, (input)=>{
			input.addEventListener('change', ()=>{
				for(let i = durations.body.length; i < input.files.length; i++){
					durations.body.push(500);
				}
				timeContainerBody.innerHTML = '';
				for(let i = 0; i < input.files.length; i++){
					let ii = i;
					cgui('input',{type:'number', className: 'input-hattest', 'value': durations.body[i]},input=>{
						input.addEventListener('input', ()=>{
							durations.body[ii] = +input.value || 0;
						});
					},timeContainerBody);
				}
				
			});
		}, container);
		
		const timeContainerBody = cgui('div', {className: 'input-container'}, null, container);

		cgui('button', {className: 'btn-hattest', innerText: 'Test body animation'}, (btn)=>{
			btn.addEventListener('click', async ()=>{
				if(bodyImgAnimInput.files.length == 0) return;
				const texes = [];

				for(let i = 0; i < bodyImgAnimInput.files.length; i++){
					texes.push(fileimg(bodyImgAnimInput.files[i]));
				}

				const loadedTexes = await Promise.all(texes); 

				console.log(texes);
				
				const parsedData = [];

				for(let i in loadedTexes){
					parsedData.push({duration: durations.body[i], path: 'bodyImage'+i, image: loadedTexes[i]});
				}


				setCloneDecorMulti({
					frames:parsedData
				}, 'bodyImage');

			});
		}, container);
	}, document.body);
}

function loadEditMenu(){
	let el = document.querySelector('.editMenu-hattest');
	// el&&el.remove();
	if(!el) el = window.createEditMenu();
	el.classList.toggle('ht-hiddlen');
	console.log(el);
}

document.addEventListener("keydown", (e) => {
	if (e.code == "KeyT") {
		loadEditMenu();
	}
});

let htstyle = document.createElement('style');
htstyle.innerHTML = `
	.ht-hiddlen{
		display: none;
	}

	.editMenu-hattest{
		background: #222;
		border: solid 2px #111;
		position: absolute;
		right: 5px;
		top: 5px;
		bottom: 5px;
		min-width: 300px;
		max-width: 40%;
		z-index: 1001;

		display: flex;
		flex-direction: column;
    	align-items: stretch;
		gap: 5px;

		color: wheat;
	}

	.title-hattest{
		text-align: center;
	}

	.input-container{
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.input-hattest{
	    background: #4f4f4f;
		border: solid 1px #0a0a0a;
		color: white;
		padding: 3px 4px;
	}
	
	.btn-hattest{
		background: #c7c7c7;
    	border: solid 2px #898989;
	}
`;
document.head.appendChild(htstyle);