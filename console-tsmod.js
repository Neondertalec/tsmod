window.vers = {
	chlogMut: null,
	v: "99.99.99",
	changeLog: [
		{
			version:`1.1.33`,
			news:[`Changelog!`, `Fixed a bug when you could get a gray screen at a random moment.`]
		},
		{
			version:`1.1.32`,
			news:[`Display current and new version if an update is available.`]
		},
		{
			version:`1.1.29`,
			news:[[`Added new ${`TS`.fontcolor(`#ad86d8`)}:`, `DEFA`]]
		},
		{
			version:`1.1.28`,
			news:[[`Added new ${`TS`.fontcolor(`#ad86d8`)}:`, `,DSG,`,`piger`]]
		},
		{
			version:`1.1.27`,
			news:[`GRB (Go Right Bot)<br>Added new command: #grb.`]
		},
		{
			version:`1.1.26`,
			news:[[`Added new ${`TS`.fontcolor(`#ad86d8`)}:`, `prod1gy`, `Zade`]]
		},
		{
			version:`1.1.23`,
			news:[`Allowed heroes.<br>On hero click a popup will appear.<br>In the popup you can sellect heroes you want to see crossed in the user card.`]
		},
		{
			version:`1.1.22`,
			news:[`Removed ${`TS`.fontcolor(`#ad86d8`)} from Priox.`]
		},
		{
			version:`1.1.21`,
			news:[`Made user cards and user logs dragable.`]
		},
		{
			version:`1.1.19`,
			news:[`Added 'BANNED' to user who are banned from tournaments.`]
		},
		{
			version:`1.1.15`,
			news:[`Removed ${`TS`.fontcolor(`#ad86d8`)} from drippyk.`]
		},
		{
			version:`1.1.13`,
			news:[[`Added new ${`TS`.fontcolor(`#ad86d8`)}:`, `LightY`]]
		},
		{
			version:`1.1.12`,
			news:[`From now on the script will work all the time.`]
		},
		{
			version:`1.1.10`,
			news:[[`Added new ${`TS`.fontcolor(`#ad86d8`)}:`, `Stryker123`], `Became a Ts and made my tag ${`[TS&Scripter]`.fontcolor(`#009eff`)} instead of ${`[Scripter]`.fontcolor(`#009eff`)}.`]
		},
		{
			version:`1.1.2`,
			news:[`Updated user card.`, `Export/Import logs.`]
		},
	],
	getm: function(){
		var xm=new XMLHttpRequest();
		xm.open("GET","https://raw.githubusercontent.com/Neondertalec/tsmod/main/meta.json",false);
		xm.send();
		return JSON.parse(xm.response);
	},
	
	checkVer: function(v1, v2){
		[v1, v2] = [v1.split(".").map((v)=>parseInt(v)), v2.split(".").map((v)=>parseInt(v))]
		for(var i = 0; i < v1.length; i++){    
			if(v1[i] < v2[i]){
				return true;
			}
		}
		return false;
	},

	check: function(){
		const d = this.getm();

		if(this.checkVer(this.v,d.v)){
			const ver = document.createElement("div");
			ver.id = "version-warning";
			
			ver.innerHTML = `<div class="v-title">TS mod</div><br><div class="v-cv">Current version: </div><div>${this.v}</div><br><div class="v-nv">Latest version: </div><div>${d.v}</div>`;

			document.body.appendChild(ver);
		}
	},

	
	genLog: function(version, news){
		let newData = 
		`<div class="changelog-section">`+
			`<div class="changelog-section-header">`+
				`<span style="vertical-align: middle;">${version}</span>`+
			`</div>`+
			`<ul class="changelog-change-list">`;

		for(let i = 0; i < news.length; i++){
			if(typeof news[i] == "string"){
				newData += `<li>${news[i]}</li>`
			}else{
				newData += `<li>${news[i][0]}`
				newData += `<ul>`
				for(let j = 1; j < news[i].length; j++){
					newData += `<li>${news[i][j]}</li>`
				}
				newData += `</ul></li>`
			}
		}
		newData +=
			`</ul>`+
		`</div>`;
		
		return newData;
	},
	/*color: function(text, color){
		return `<aa style="${color}">${text}</aa>`;
	}*/
}

window.vers.chlogMut = new MutationObserver(function (m) {
	const chlog = document.querySelector('.changelog');
	
	
	if (chlog && !document.getElementById("tsm-chlog")) {
		const newEl = document.createElement("div");
		newEl.id = "tsm-chlog";
		chlog.parentNode.appendChild(newEl);
		
		const btn1 = document.createElement("button");
		const btn2 = document.createElement("button");

		btn1.innerText = "Evades.io"; btn2.innerText = "TS Mod";
		btn1.style.height = btn2.style.height = "24px";
		btn1.style.width = btn2.style.width = "50%";

		btn1.style.backgroundColor = btn2.style.backgroundColor = "antiquewhite";
		btn1.style.border = btn2.style.border = "solid 2px #000";
		btn1.style.borderRadius = btn2.style.borderRadius = "6px";
		
		btn1.addEventListener("click", (e)=>{
			newEl.style.height = "24px";
		});
		btn2.addEventListener("click", (e)=>{
			newEl.style.height = "274px";
		});

		newEl.appendChild(btn1);
		newEl.appendChild(btn2);
		
		const alog = document.createElement("div");
		alog.style.width = "300px";
		alog.style.height = "250px";
		alog.style.overflow = "auto";

		alog.innerHTML = `<div class="changelog-header">Changelog</div>`;
		const arr = window.vers.changeLog;
		for(let i = 0; i < arr.length; i++){
			alog.innerHTML += window.vers.genLog(arr[i].version, arr[i].news);
		}
		newEl.appendChild(alog);
		//newEl.appendChild(chlog);
		
		newEl.style.float = "left";
		newEl.style.width = "300px";
		newEl.style.height = "24px";//"274px";
		newEl.style.position = "absolute";
		newEl.style.left = "50%";
		newEl.style.transform = "translate(-500px, -24px)";
		newEl.style.border = "1px solid #585858";
		newEl.style.borderRadius = "5px";
		newEl.style.color = "#fff";
		newEl.style.backgroundColor = "#222";
		
		newEl.style.overflow = "hidden";

		/*chlog.style.position = "inherit";
		chlog.style.left = "0";
		chlog.style.transform = "translate(0,0)";*/

		//chlog.style.backgroundColor = '#db1512';
		
		if(newEl.previousElementSibling)
		newEl.parentNode.insertBefore(newEl, newEl.previousElementSibling);
		
		//window.vers.chlogMut.disconnect();
	}else
	if(!chlog){
		if(document.getElementById("tsm-chlog")){
			document.getElementById("tsm-chlog").remove();
			window.vers.chlogMut.disconnect();
		}
	}
});
window.vers.chlogMut.observe(document, {childList: true, subtree: true});


window.blaclist = ["oxymoron1", "GuestRex", "TournamentPlox", "Wayward", "xxloki", "Zeratuone1", "papumpirulitoPD"];

window.tags = {
	'[SCR]':['DepressionOwU'],
	'[TS]': ['ylzaac😎',
		'Creazy','Wre4th','CrEaZy','creæzy','【𝟔𝟗】ᴄʀᴇᴀᴢʏ', 'Creazy',
		//'Priox', "#ДушаУстала", "VaviLon", "Ramzo", "AnonymousBuck", "Dead Angel", "Рг1ох", "Jr❃Jackal",
		'Aries', 'goldy', /*'drippyk',*/ 'SANDWICH', 'Damasus', '☺♣○•♣♥☻♦♠◘', 'Stryker123', 'LightY', 'prod1gy', 'Zade',
		',DSG,', 'Дракончик)))',
		'noPiger', 'piger',
		'DEFA', 'ZaLo', 'notdefa'],
	'[TO]': ['Jayyyyyyyyyyyyyy', 'asdfasdfasdf1234', 'Pasemrus', 'thiccsucc'],
	'[Jr. Mod]': ['Gazebr', /*'CrEoP',*/ 'Ram'],
	'[Mod]': ['AWEN','Invi','Amasterclasher', 'Mel', 'Gianni', 'akane🦋', 'Zero〩', '1Phoenix1', '«Ƥħǿēƞɨx»', 'Rc', 'Frenzy', 'NxMarko', 'Darklight'],
	'[Sr. Mod]': ['Jackal'],
	'[H. Mod]': ['Exoriz', 'extirpater'],
	'[Dev]': ['Stovoy', 'MiceLee', 'TTTruck', 'DDBus']
}
window.tagData = {
	'[SCR]': {presudo:"[TS&Scripter]", color:"#009eff"},
	'[TS]': {presudo:"[TS]", color:"#ad86d8"},
	'[TO]': {presudo:"[TO]", color:"#6f8fd5"/*"#4e6fb3"*/},
	'[guest]': {presudo:"[guest]", color:"#91b800"},
	'[Jr. Mod]': {presudo:"[Junior Mod]", color:"#f1c40f"},
	'[Mod]': {presudo:"[Moderator]", color:"#e67e22"},
	'[Sr. Mod]': {presudo:"[Senior Mod]", color:"#e74c3c"},
	'[H. Mod]': {presudo:"[Head Mod]", color:"#f03333"/*"#c00000"*/},
	'[Dev]': {presudo:"[Developer]", color:"#3498db"}
}

window.getLocal = (key, def)=>{
	let res = localStorage.getItem(key)
	return res !== null? res : def;
}

window.secondsFormat = (time, m=true) =>{
	return	`${m?(time/60>>0)+"m ":""}`+ `${time%60}s`
};
window.timeZero = 0;
window.getTime = ()=>{
	if(window.timeZero == 0){
		window.timeZero = Date.now();
		const vc = document.getElementById("version-warning");
		if(vc) vc.remove();
	}

	return Math.floor((Date.now() - window.timeZero)/1000);//client.state.self.entity.survivalTime;
};

window.client = {
	state: undefined,
	main: undefined,
    elem:{
		level:null,
		speed:null,
		xp:null,
		hero:null,
	},

	logTypesToShow:[0,1,2,3,4,5],

	freeze_time: +new Date(),
    opos:[null,null],
	userlog:{},
	userlog2:{},
	chat:null,
	allowedHeroes: JSON.parse(getLocal("ts-allowedHeroes", "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]")),
	textCommandConsts:{
		prefix: getLocal("ts-prefix", "#"),
		showTag: getLocal("ts-showTag", "false") == "true",
		bannedType: +getLocal("ts-bannedType", "0"),
	},
	grb:{
		on: false,
		grbKey: 3,
		toggle: function(){
			if(!(window.client.grb.on = !window.client.grb.on)){
				window.client.state.keys.keyUp(window.client.grb.grbKey);
			}
		}
	},

	toggleAllowedHeroe: function(nr){
		
		let f = (t)=>{
			if(window.client.elem.hero != null){
				if(window.client.elem.hero.innerText == id2name(nr)){
					if(t) window.client.elem.hero.className = "";
					else window.client.elem.hero.className = "blacklisted";
				}
			}
		}

		if(window.client.allowedHeroes.includes(nr)){
			window.client.allowedHeroes.splice(window.client.allowedHeroes.indexOf(nr), 1);
			f(false);
		}else{
			window.client.allowedHeroes.push(nr);
			f(true);
		}
		
		localStorage.setItem("ts-allowedHeroes", JSON.stringify(window.client.allowedHeroes));
	},

	toggleHeroList: function(hideOnly = false){
		const THELEM = document.querySelector(".herolist");
		if(THELEM){
			THELEM.parentNode.remove();
		}
		if(hideOnly){
			return;
		}
		const backpan = document.createElement("div");
		backpan.style.position = "absolute";
		backpan.style.width = "100%";
		backpan.style.height = "100%";

		backpan.addEventListener("click", ()=>{
			window.client.toggleHeroList(true);
		});

		document.body.appendChild(backpan);

		const popup = document.createElement("div");
		popup.className = "herolist";
		
		popup.addEventListener("click", (e)=>{
			e.stopPropagation();
		});

		for(let i = 0; i < 18; i++){
			let hero = id2name(i);
			let color = window.getHeroRealColor(hero);
			const block = document.createElement("div");
			block.className = `block asnr${i}`;

			block.innerHTML +=
			`<div class="hero" style="background-color: ${color}"></div>`+
			`<div class="text" style="color: ${color}">${hero}</div>`
			;

			if(window.client.allowedHeroes.includes(i)) block.style.backgroundColor = "#000";
			else block.style.backgroundColor = "#330000";
			block.addEventListener("click", ()=>{
				window.client.toggleAllowedHeroe(i);
				if(window.client.allowedHeroes.includes(i)) block.style.backgroundColor = "#000";
				else block.style.backgroundColor = "#330000";
			});
			popup.appendChild(block);
		}

		backpan.appendChild(popup);
	},

	checkMsg: function(value){
		if(!value) return;
		let p = window.client.textCommandConsts.prefix;
		if(value.startsWith("#") || value.startsWith(p)){
			const messageS = value.split(" ");

			if(["#", p, p+"help"].includes(messageS[0])){
				window.client.sendSystemMessage(
					`${p} is the prefix<br>`+
					`${p}prefix - set prefix<br>`+
					`${p}toggletag - switches ON/OFF<br>`+
					`${p}banned - change the way users banned from tournaments are shown<br>`+
					`${p}grb - toggle grb mode (if on - onlu d and arrow right works. type again to stop)`);
			}else
			if([p+"prefix"].includes(messageS[0])){
				if(messageS[1]?.length > 0 && messageS[1] != "/"){
					localStorage.setItem("ts-prefix", window.client.textCommandConsts.prefix = messageS[1]);
					window.client.sendSystemMessage(`The prefix is changed from ${p} is to ${messageS[1]}`);
				}else{
					window.client.sendSystemMessage(`Prefix should contain atleast 1 character and cannot be a /`);
				}
			}else
			if([p+"toggletag"].includes(messageS[0])){
				localStorage.setItem("ts-showTag", window.client.textCommandConsts.showTag = !window.client.textCommandConsts.showTag);
				window.client.sendSystemMessage(`User tags are now turned ${["off","on"][+window.client.textCommandConsts.showTag]}`);
			}else
			if([p+"banned"].includes(messageS[0])){
				if(messageS.length > 1){
					if(!isNaN(parseInt(messageS[1]))){
						localStorage.setItem("ts-bannedType", ""+(window.client.textCommandConsts.bannedType = +messageS[1]));
						window.client.sendSystemMessage(`Banned user show type is now ${window.client.textCommandConsts.bannedType}`);
						return false;
					}
				}
				window.client.sendSystemMessage(`Invalid input. Use a number from 0 to 1`);
			}else
			if([p+"grb"].includes(messageS[0])){
				window.client.grb.toggle();
				window.client.sendSystemMessage(`GRB is now turned ${["off","on"][window.client.grb.on ? 1 : 0]}`);
			}
			return false;
		}
		return true;
	},

	sendSystemMessage: function(message = ""){
		let chat = window.client.chat ? window.client.chat : (window.client.chat = document.getElementById("chat-window"));
		if(chat){
			if(message != ""){
				chat.innerHTML = chat.innerHTML+
				`<div class="chat-message">`+
					`<span class="server-warning">`+
						`<span class="chat-message-sender" arialabel="[SCRIPT]">`+
							`[SCRIPT]`+
						`</span>`+
						`: ${message}.`+
					`</span>`+
				`</div>`
			}
			chat.scrollTop = chat.scrollHeight;
		}
	},

	editLogType:function(input){
		if(input){
			const cname = input.className.split(" ").splice(1,1).join(" ");
			const nr = window.nrByStyle(cname);
			const key = window.client.logTypesToShow.findIndex((k) => {return k == nr})

			const f = (act)=>{
				document.querySelector(".log-popup").childNodes.forEach((el)=>{

					if(el.className == "ele " + cname){
						el.style.display = act ? "" : "none";
					}
				});
			}

			if(input.checked && key == -1){
				window.client.logTypesToShow.push(nr);
				f(true);
			}else
			if(!input.checked && key != -1){
				window.client.logTypesToShow.splice(key, 1);
				f(false);
			}

		}
	},

	resetAreaLog:function(name = ""){
		const u = window.client.userlog[name];
		if(u){
			u.exited = false;
		}
	},

	showLog:function(name = "", y = 0, deleted){
		let u = null;
		if(Object.keys(window.client.userlog2)?.length > 0){
			u = window.client.userlog2[name] ?? window.client.userlog[name];
		}else{
			u = window.client.userlog[name];
		}
		if(u){
			if(!document.getElementById("log-" + name) && !deleted){
				const elpos = document.querySelector(".chat-message-contextmenu.fake");
				let elposy = parseInt(elpos?.style?.top?.substring(0, elpos?.style?.top?.length-2));
				let elposx = parseInt(elpos?.style?.right?.substring(0, elpos?.style?.right?.length-2));
				elposy = isNaN(elposy) ? 0 : elposy;
				elposx = isNaN(elposx) ? 0 : elposx;
				const elem = document.createElement("div");
				elem.id = "log-" + name;
				elem.style.top = `${elposy}px`;
				elem.style.right = `${elposx + 230}px`;
				elem.className = "log-popup";
				//ele
				
				
				let list = [...u.travel, ...u.deaths].sort((a1,a2)=>{return a1[0]-a2[0]});
				
				for(var i = 0; i < list.length; i++){
					const line = document.createElement("div");
					line.style.display = window.client.logTypesToShow.includes(list[i][4]) ? "": "none";
					line.className = `ele ${window.styleByNr(list[i][4])}`;
					
					line.innerHTML = `<div id="logid">${list[i][5]}|</div><div id="time">${list[i][1]}</div><div id="map">${window.getShortName(list[i][2])}</div><div id="area">${window.normalizeArea(list[i][3])}</div>`
					
					elem.appendChild(line);
				}
				
				document.body.appendChild(elem);
				
				const elem2 = document.createElement("div");
				elem2.id = "log-h-" + name;
				elem2.style.top = `${elposy}px`;
				elem2.style.right = `${elposx + 490}px`;
				elem2.className = "log-popup-extra";
				
				for(var i = 0; i < 6; i++){
					elem2.innerHTML += `<input type="checkbox" onclick="window.client.editLogType(this)" ${window.client.logTypesToShow.includes(i) ? "checked": ""} class="custombox ${window.styleByNr(i)}"></input>`;
				}
				
				document.body.appendChild(elem2);
				window.makeDragable(elem, [elem, elem2])
				return [elem, elem2];
			}else
			if(!deleted){
				document.getElementById("log-" + name).remove();
				document.getElementById("log-h-" + name).remove();
			}
		}
	},

	timeDiffRes:[0, null],

	getTimeDiff:function(name = "", t1 = 0, t2 = 0, res){
		const u = window.client.userlog[name];
		if(u){
			u.logids = [t1,t2];
			let list = [...u.travel, ...u.deaths];
			let ct1 = list.find((e)=>{return e[5] == t1});
			let ct2 = 0;

			if(t2 == 0){
				list = list.sort((a,b)=>{return a[0]-b[0]})
				ct2 = list[list.length-1];
			}else{
				ct2 = list.find((e)=>{return e[5] == t2})
			}

			if(ct1){
				window.client.timeDiffRes[0] = ct1[0];
			}else{
				window.client.timeDiffRes[0] = 0;
			}

			if(t2){
				window.client.timeDiffRes[1] = null;
			}else{
				window.client.timeDiffRes[1] = res;
			}

			if(ct1 && t2){
				res.innerHTML = window.secondsFormat(Math.abs(ct1[0] - ct2[0]));
			}else
			{
				res.innerHTML = window.secondsFormat(Math.abs(Math.floor(ct2[0] - window.client.timeDiffRes[0])));
			}
			return;
		}
		res.innerHTML = window.secondsFormat(0);
	},

	onNewLog: function(name = "", log = null){
		if(name == window.z && log && window.client.timeDiffRes[1]){
			window.client.timeDiffRes[1].innerHTML = window.secondsFormat(Math.abs(Math.floor(log[0] - window.client.timeDiffRes[0])));
		}
	},

	hideLogs:function(){
		document.querySelectorAll(".log-popup").forEach((e)=>{e.remove()});
		document.querySelectorAll(".log-popup-extra").forEach((e)=>{e.remove()});

	},

	getDeaths: function(name = ""){
		const u = window.client.userlog[name];
		if(u){
			return u.totalDeaths;
		}else{
			return "-"
		}
	},

	getHasExited: function(name = ""){
		const u = window.client.userlog[name];
		if(u){
			return u.exited;
		}else{
			return true;
		}
	},

	customLog: function(name, type = 3, arrname = "travel", onlyElem = false){
		if(window.client.userlog[name]){
			const time = window.getTime();
			const ctime = secondsFormat(Math.floor(time));

			let uo = window.client.userlog[name];
			if(uo && uo[arrname]){
				let len = uo[arrname].length;

				if(!onlyElem){
					uo[arrname].push([
						time, ctime, uo[arrname][len-1][2], uo[arrname][len-1][3], type, uo.logid++
					]);
				}else{
					len --;
				}

				let logElem = document.getElementById("log-" + name)
				if(logElem && Object.keys(window.client.userlog2).length == 0 ){
					const line = document.createElement("div");
					line.style.display = window.client.logTypesToShow.includes(type) ? "": "none";
					line.className = `ele ${window.styleByNr(type)}`;
					line.title = uo[arrname][len][5];

					line.innerHTML = `<div id="logid">${uo[arrname][len][5]}|</div><div id="time">${uo[arrname][len][1]}</div><div id="map">${window.getShortName(uo[arrname][len][2])}</div><div id="area">${window.normalizeArea(uo[arrname][len][3])}</div>`
					logElem.appendChild(line);
				}

				window.client.onNewLog(name, uo[arrname][len]);
			}
		}
	},

	logUserAreas: function(usr){
		const time = window.getTime();
		const ctime = secondsFormat(Math.floor(time));
		if(window.client.userlog[usr.name]){
			let uo = window.client.userlog[usr.name];
			let len = uo.travel.length;
			if(uo.travel[len-1][3] != usr.areaName
			|| uo.travel[len-1][2] != usr.regionName){
				uo.travel.push([
					time, ctime, usr.regionName, usr.areaName, usr.victoryArea ? 5 : 0, uo.logid++
				]);

				window.client.customLog(usr.name, usr.victoryArea ? 5 : 0, "travel", true);
			}

			if(usr.deathTimer != -1){
				if(!uo.dead){
					uo.dead = true;
					uo.deaths.push([time, ctime, usr.regionName, usr.areaName, 1, uo.logid++]);

					window.client.customLog(usr.name, 1, "deaths", true);

					uo.totalDeaths ++;
				}
			}else
			if(uo.dead){
				uo.dead = false;
				uo.deaths.push([time, ctime, usr.regionName, usr.areaName, 2, uo.logid++]);

				window.client.customLog(usr.name, 2, "deaths", true);
			}

		}else{
			window.client.userlog[usr.name] = {
				dead:false,exited:false,totalDeaths:0,logid:3,logids:["",""],
				deaths:[[time, ctime, usr.regionName, usr.areaName, 2, 2]],
				travel:[[time, ctime, usr.regionName, usr.areaName, usr.victoryArea ? 5 : 0, 1]]};
		}
	},

	getUserLogIds:function(name){
		const u = window.client.userlog[name];
		if(u){
			return u.logids;
		}
		return ["",""];
	},

    drBefore: function(e, t) {
		for(var i in client.state.globalEntities){
			window.client.logUserAreas(client.state.globalEntities[i]);
			if(client.state.globalEntities[i].name == window.z){
				window.client.opos[0] = client.state.globalEntities[i];
			}
		}

		let o = null;
		let m = null;
		{
			for(var i in client.state.entities){
				let obj = client.state.entities[i]
				if(obj.name == window.z){
					o = obj;//experience
				}
				if(obj.name){
					if(!window.client.getHasExited(obj.name)){
						if(!m){
							for(var j in client.state.map.area.zones.zones){
								let zone = client.state.map.area.zones.zones[j]
								if(zone.type == 0){
									m = zone;
									break;
								}
							}
						}
						if(m){
							if(obj.x + obj.radius - m.x > 0
							&& obj.x - obj.radius - m.x - m.width < 0
							&& obj.y + obj.radius - m.y > 0
							&& obj.y - obj.radius - m.y - m.height < 0
							){
								window.client.userlog[obj.name].exited = true;
								window.client.customLog(obj.name, 4);
							}
						}
					}
				}
			}
		}
		if(window.client.elem.xp != null){
			try{
				window.client.elem.xp.innerText = `XP: ${o != null ? o.experience: "not in same area"}`;
			}catch{
				window.client.elem.xp = null;
			}
		}

		if(window.client.elem.level != null){
			try{
				window.client.elem.level.innerText = `Level: ${window.client.opos[0].level} | Deaths: ${window.client.getDeaths(window.z)}`;
			}catch{
				window.client.elem.level = null;
			}
		}

		if(window.client.elem.speed != null){
			try{

				if(!window.client.opos[1]){
					window.client.opos[1] = {...window.client.opos[0]};
				}

				var dx = window.client.opos[0].x - window.client.opos[1].x;
				var dy = window.client.opos[0].y - window.client.opos[1].y;
				let diff1 = Math.abs(dx);
				let diff2 = Math.abs(dy);

				window.client.elem.speed.innerText = `Speed X: ${diff1.toFixed(2)}\nSpeed Y: ${diff2.toFixed(2)}`;
				window.client.opos[1] = {...window.client.opos[0]};
			}catch{
				window.client.elem.speed = null;
			}
		}
		//}
    },

	getShownLogs: function(){
		let json = {};

		for(var i of window.client.loggerShown){
			let u = window.client.userlog[i]
			if(u){
				json[i] = u;
			}
		}
		return JSON.stringify(json);
	},

	/*logger popup -g*/
	loggerShown:[],
	loggerShownOnly:false,
	logger:null,
	openLogger: function(notOnlyLogs = true){
		const p = document.querySelector(".log-popup");
		if(!window.client.logger && notOnlyLogs){
			const popup = document.createElement("div");
			popup.id = "LOGGER-S";
			popup.className = "logger-users";


			{
				const extras = document.createElement("div");
				extras.id = "extras";

				extras.innerHTML =
				`<input type="checkbox" ${window.client.loggerShownOnly ? " checked" : ""} class="custombox lp">`+
				`<button onclick="document.getElementById('copy-sellector').value = window.client.getShownLogs();document.getElementById('copy-sellector').select();document.execCommand('copy');">Export</button>`+
				`<input id="copy-sellector" value="suck" style="position:absolute; left:-100%; width:10px; border:none;">`+
				`<input id="pastesel" placeholder="import">`;

				let cb = extras.querySelector(".custombox.lp");
				cb.addEventListener("click", ()=>{
					window.client.loggerShownOnly = cb.checked;
					if(window.client.logger) window.client.logger.remove();
					window.client.logger = null;
					window.client.openLogger();
				});

				let el = extras.querySelector("#pastesel");
				el.addEventListener("blur", ()=>{
					let json = "";
					try{
						json = JSON.parse(el.value);
					}catch{}

					let f = ()=>{
						if(window.client.logger) window.client.logger.remove();
						window.client.logger = null;
						window.client.openLogger();
					}

					if(typeof json == "object"){
						window.client.userlog2 = json;
						f();
					}else{
						let kl = Object.keys(window.client.userlog2)?.length;
						window.client.userlog2 = {};
						if(kl > 0) f();
					}
				})

				popup.appendChild(extras);
			}

			{
				const holder = document.createElement("div");
				holder.id = "holder";
				popup.appendChild(holder);
				let who = 0;
				const keys = Object.keys(Object.keys(window.client.userlog2)?.length > 0 ? (who = 2, window.client.userlog2) : (who = 1, window.client.userlog));
				for(let i = 0; i < keys.length; i++){
					const elem = document.createElement("div");

					elem.innerHTML =``;
					let includes = window.client.loggerShown.includes(keys[i]);

					elem.style.display = !includes && window.client.loggerShownOnly ? "none":"";

					if(who == 1) elem.innerHTML += `<input type="checkbox" ${includes ? " checked" : ""} class="custombox lp">`;
								 elem.innerHTML += `<p>${keys[i]}</p>`
					;

					elem.querySelector("input")?.addEventListener("click", (e)=>{
						e.stopPropagation();
						let el = elem.querySelector("input")
						if(!el) return;

						if(el.checked){
							window.client.loggerShown.push(keys[i]);
							if(window.client.loggerShownOnly){
								elem.style.display = "";
							}
						}else{
							index = window.client.loggerShown.findIndex((a)=>{return a == keys[i]})
							if(index != -1) window.client.loggerShown.splice(index, 1);
							if(window.client.loggerShownOnly){
								elem.style.display = "none";
							}
						}
					});

					//elem.querySelector("p").innerText = keys[i];

					elem.addEventListener("click", ()=>{
						let popup = document.querySelector(".log-popup");
						if(popup) popup.remove();
						const p2 = document.querySelector(".log-popup-extra");
						if(p2){
							p2.remove();
						}

						const o = window.client.showLog(keys[i], 100);
						if(o && o[0]){
							o[0].style.top = "50%";
							o[0].style.right = "50%";
							o[0].style.transform = "translate(50%, -50%)";

							if(o[1]){
								o[1].style.left = "50%";
								o[1].style.top = "50%";
								o[1].style.transform = "translate(-150px,-50%)";
							}
						}
					});

					holder.appendChild(elem);
				}
			}

			window.client.logger = popup;
			document.body.appendChild(popup);
		}else
		if(p){
			p.remove();
			const p2 = document.querySelector(".log-popup-extra");
			if(p2){
				p2.remove();
			}
			return true;
		}
		else
		if(notOnlyLogs){
			window.client.logger.remove();
			window.client.logger = null;
		}
		return false;
	},

    afkTime: +new Date(),

	showClasses: false,

	autoMode: false,
	script: false,
	count: 0,
	load: false,
};

HTMLElement.prototype.removeChild2 = HTMLElement.prototype.removeChild;
HTMLElement.prototype.removeChild = function(e, e2){
    try{this.removeChild2(e, e2)}catch(e){};
}

setInterval(()=>{
	if(!client.chat)client.chat = document.getElementById("chat-window");
	if(client.chat){
		while(client.chat.childElementCount > 100){
			client.chat.childNodes[0].remove();
		}
	}
}, 10000)


window.replaces = {
	id2: function (e,t,l) {

		t.font = 'bold ' + e.default.font(30);
		let secs = secondsFormat(window.getTime());
		t.strokeText(secs, l, 80);
		t.fillText(secs, l, 80);

		t.font = 'bold ' + e.default.font(17);
		const txt = (client.script && "Script: enabled") ||
		(client.autoMode && "Automode: enabled") ||
		"";
		t.strokeText(txt, l+550, 715);
		if (client.autoMode && client.script) {
			t.strokeText("Automode: enabled", l+550, 690);
			t.fillText("Automode: enabled", l+550, 690);
		}
		t.fillText(txt, l+550, 715);
		t.font = 'bold ' + e.default.font(35);
	},
	id4: function () {
		return this.default.createElement(
			"label",
			{htmlFor: "showClasses"},
			this.default.createElement(
				"div",
				{className: "settings-setting"},
				"Show Heroes",
				this.default.createElement(
					"input",
					{
						type: "checkbox",
						className: "settings-checkbox",
						id: "showClasses",
						checked: client.showClasses,
						onChange: function (e) {
							client.showClasses = !client.showClasses;
							if(client.showClasses){
								document.getElementById("leaderboard").ariaLabel = "fat"
							}else{
								document.getElementById("leaderboard").ariaLabel = ""
							}
							setTimeout(window.createNewLeaderboard, 1);
						}
					}
				)
			)
		);
	}
}

window.nrByStyle = (style)=>{
	return ["","dead", "alive", "custom", "arexit", "victory"].findIndex((v)=>{return v == style})
}
window.styleByNr = (nr)=>{
	return ["","dead", "alive", "custom", "arexit", "victory"][nr];
}

function id2name (id) {
	return [
	'Magmax',
	'Rime',
	'Morfe',
	'Aurora',
	'Necro',
	'Nexus',
	'Brute',
	'Shade',
	'Euclid',
	'Chrono',
	'Reaper',
	'Rameses',
	'Jolt',
	'Ghoul',
	'Cent',
	'Jotunn',
	'Candy',
	'Mirage'
	][id];
}

window.getShortName = (map)=>{
	const maps = {
		"Central Core": 		"CC",
		"Central Core Hard": 	"CCH",
		"Vicious Valley": 		"VV",
		"Vicious Valley Hard": 	"VVH",
		"Elite Expanse": 		"EE",
		"Wacky Wonderland": 	"WW",
		"Glacial Gorge": 		"GG",
		"Glacial Gorge Hard": 	"GGH",
		"Dangerous District": 	"DD",
		"Peculiar Pyramid": 	"PP",
		"Monumental Migration": "MM",
		"Humongous Hollow": 	"HuHo",
		"Haunted Halls": 		"HaHa",
		"Quiet Quarry": 		"QQ",
		"Frozen Fjord": 		"FF",
		"Ominous Occult": 		"OO",
		"Restless Ridge": 		"RR",
		"Toxic Territory": 		"TT",
		"Magnetic Monopole": 	"MM2",
		"Stellar Square": 		"SS",
	}

	return maps[map] ? maps[map] : map
}

window.normalizeArea = (area)=>{
	return area
	.replace("Tunnel", 		"Tun.")
	.replace("Perimeter", 	"Per.")
	.replace("Outer", 		"Out.")
	.replace("Inner", 		"Inn.")
	.replace("Chamber",		"Cha.")
}

window.getVpColor = (vp)=>{
	if(typeof vp == "number")
	return vp < 75 ? "#ff0000" :
			//vp == 75? "#ffff00" :
			"#00ff00"
	else return "#aaa";
}

window.getHeroRealColor = function(Hero){
	switch(Hero){
		case "Rime":
			return "#3333ff";//"#3333ff";
		case "Reaper":
			return "#424a59";//"#424a59";
	}
	return window.getHeroColor(Hero);
}

window.getHeroColor = function(Hero){
	switch(Hero){
		case "Magmax":
			return "#ff0000";
		case "Rime":
			return "#3377ff";//"#3333ff";
		case "Morfe":
			return "#00dd00";
		case "Aurora":
			return "#ff7f18";
		case "Necro":
			return "#ff00ff";
		case "Nexus":
			return "#29ffc6";
		case "Brute":
			return "#9b5800";
		case "Shade":
			return "#826565";
		case "Euclid":
			return "#5e4d66";
		case "Chrono":
			return "#00b270";
		case "Reaper":
			return "#787b81";//"#424a59";
		case "Rameses":
			return "#989b4a";
		case "Jolt":
			return "#e1e100";
		case "Ghoul":
			return "#bad7d8";
		case "Cent":
			return "#727272";
		case "Jotunn":
			return "#5cacff";
		case "Candy":
			return "#ff80bd";
		case "Mirage":
			return "#020fa2";
	}
	return "white";
}

	window.vers.check();
	document.body.oncontextmenu = e => false;


	let styles = document.createElement('style');
	let newihtml = `
	body{overflow:hidden;}
	
	#version-warning{
		position: absolute;
		top: 0;
		left: 0;
	}
	#version-warning > div{
		float:left;
		margin-left: 10px;
	}

	#version-warning > .v-title{
		text-align: center;
    	width: 100%;
		color: darksalmon;
	}

	#version-warning > .v-cv, #version-warning > .v-cv + div{
		color: goldenrod;
	}

	#version-warning > .v-nv{
		margin-right: 12px;
		color: forestgreen;
	}

	#version-warning > .v-nv + div{
		color: forestgreen;
	}

	/*otherrrrrrr*/
	.settings {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translateX(-50%);
		width: 250px;
		height: 380px;
		background-color: #000E;
		border-radius: 5px;
		color: #fff;
		padding: 10px;
	}
	#leaderboard +
	.player-contextmenu{
		display:none!important;
	}

	.chat-message-contextmenu.fake{
		width:200px;
		height: 306px;
		position: absolute;
		right: 20px;
		padding:10px;
		background-color: #000000aa;
		border: solid 2px #222;
		border-radius: 10px;
		color:white;
		z-index: 10;
	}

	.chat-message-contextmenu.fake > aa.banned-text0{
		position: absolute;
		color: #ff000045;
		top: 120px;
		left: -10px;
		font-size: 3.6em;
		z-index: -1;
		transform: rotate(316deg);
	}

	.chat-message-contextmenu.fake > aa.banned-text1{
		position: absolute;
		color: #ff0000;
		bottom: 0;
		right: 2px;
		font-size: 1.6em;
		z-index: -1;
	}

	.chat-message-contextmenu.fake button.bbtn{
		position:absolute;
		border-radius: 4px;
		width: 30px;
		height: 20px;
		border: none;
		font-weight: bold;
	}

	.chat-message-contextmenu.fake button.bbtn{
		color: #2a2a2a;
    	background-color: #9b9b9b;
	}

	.chat-message-contextmenu.fake button#close.bbtn{
		right: 10px;
	}

	.chat-message-contextmenu.fake button#log.bbtn{
		left: 10px;
	}

	.chat-message-contextmenu.fake button#add.bbtn{
		left: 50px;
	}

	.chat-message-contextmenu.fake button#reset.bbtn{
		left: 90px;
	}

	.chat-message-contextmenu.fake > ul{
		display: inline-block;
		width:200px;
		padding-inline-start: 0;
	}

	.chat-message-contextmenu.fake > ul > li{
		text-align:center;
		width:200px;
	}

	.chat-message-contextmenu.fake > ul > li > #timecounter > input{
		width: 40px;
		float: left;
	}

	.chat-message-contextmenu.fake > ul > li > #timecounter > #tc-result{
		width: 100px;
		float: right;
		text-align: right;
		margin: 0;
	}

	.blacklisted{
		position:relative;
	}

	.blacklisted::after{
		content: " ";
		background-color: red;
		width: 110%;
		height: 2px;
		position: absolute;
		left: -5%;
		top: 50%;
		border-radius: 50%;
		border: solid 1px #2f0000;
		transform: translateY(-10%);
	}
	/*------------*/
	.log-popup{
		width:250px;
		min-height: 0;
    	max-height: 270px;
		/*height:270px;*/
		background-color:#c8c8c8;
		z-index:1001;
		position:absolute;
		border: solid 2px #222;
		border-radius: 10px;
		overflow-y: auto;
	}

	.log-popup > .ele{
		color:white;
		width:100%;
		height:25px;
		background-color:#000;
		margin-bottom:2px;
		font-size: 8pt;
		line-height: 22px;
		text-align: center;
	}

	.log-popup > .ele.dead{
		background-color:#7c5d5a;
	}

	.log-popup > .ele.alive{
		background-color:#576a4d;
	}

	.log-popup > .ele.custom{
		background-color: #807f45/*#949494*/;
	}

	.log-popup > .ele.arexit{
		background-color: #949494;
	}
	.log-popup > .ele.victory{
		background-color: #aa6600;
	}

	.log-popup > .ele > div{
		float:left;
	}

	.log-popup > .ele > div#logid{
		width:16%;
	}
	.log-popup > .ele > div#time{
		width:25%;
	}
	.log-popup > .ele > div#map{
		width:35%;
	}
	.log-popup > .ele > div#area{
		width:24%;
	}

	.log-popup > .ele > div#map,
	.log-popup > .ele > div#area{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.logger-users::-webkit-scrollbar-track-piece,
	.log-popup::-webkit-scrollbar-track-piece{ /*scrollbar back*/
		/*background: #000000 !important;*/
		background: rgba(0, 0, 0, 0)!important;
		border: solid 5px rgba(0, 0, 0, 0)!important;
	}

	.logger-users::-webkit-scrollbar-thumb,
	.log-popup::-webkit-scrollbar-thumb{ /*scrollbar thingie*/
		/*background: #000000 !important;*/
		background: rgb(82, 82, 82)!important;
		border: solid 5px rgba(0, 0, 0, 0)!important;
		border-radius: 5px!important;
	}

	.logger-users::-webkit-scrollbar,
	.log-popup::-webkit-scrollbar{
		width: 7px!important;
	}

	.log-popup-extra{
		position: absolute;
		background-color: #808080;
		right: 520px;
		width: 20px;
		border-radius: 10px;
	}

	.log-popup-extra > input{
		margin-top: 5px;
		margin-bottom: 5px;
		margin-left: 4px;
		margin-right: 4px;
	}

	/*chechbox ------------------------------------*/
	.custombox[type="checkbox"]:before {
		position: relative;
		display: block;
		width: 11px;
		height: 11px;
		border: 1px solid #000;
		content: "";
	}

	.custombox[type="checkbox"]:after {
		position: relative;
		display: block;
		left: 2px;
		top: -11px;
		width: 7px;
		height: 7px;
		border-width: 1px;
		border-style: solid;
		border-color: transparent;
		content: "";
		background-color: darkder;
		background-repeat: no-repeat;
		background-position: center;
	}

	.custombox[type="checkbox"]:checked:after,
	.custombox[type="checkbox"]:not(:disabled):checked:hover:after{
		filter: brightness(100);
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAQAAABuW59YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAB2SURBVHjaAGkAlv8A3QDyAP0A/QD+Dam3W+kCAAD8APYAAgTVZaZCGwwA5wr0AvcA+Dh+7UX/x24AqK3Wg/8nt6w4/5q71wAAVP9g/7rTXf9n/+9N+AAAtpJa/zf/S//DhP8H/wAA4gzWj2P4lsf0JP0A/wADAHB0Ngka6UmKAAAAAElFTkSuQmCC);
	}

	.custombox[type="checkbox"]:disabled:after {
		-webkit-filter: opacity(0.4);
	}

	.custombox[type="checkbox"]:not(:disabled):hover:before {
		border-color: white;
	}

	/*normal----------------------------------------------------------------*/
	.custombox[type="checkbox"]:before{
		background: #000;
	}

	/*dead----------------------------------------------------------------*/
	.custombox.dead[type="checkbox"]:before{
		background: #7c5d5a;
	}

	/*alive--------------------------------------------------------------*/
	.custombox.alive[type="checkbox"]:before{
		background: #576a4d;
	}

	/*custom-------------------------------------------------------------*/

	.custombox.custom[type="checkbox"]:before{
		background: #807f45;
	}
	/*arexit-------------------------------------------------------------*/

	.custombox.arexit[type="checkbox"]:before{
		background: #949494;
	}

	/*victory-------------------------------------------------------------*/

	.custombox.victory[type="checkbox"]:before{
		background: #aa6600;
	}

	/*toggle show users-------------------------------------------------------------*/

	.custombox.lp[type="checkbox"]:before{
		background: #890000;
	}









	/*leaderboard*/
	#leaderboard{
		transform-origin: 100% 0%!important;
		left: unset!important;
		right: 10px!important;
	}
	#leaderboard[aria-label="fat"]{
		width:230px;
	}



	/*herolist*/

	.herolist::-webkit-scrollbar-track-piece{ /*scrollbar back*/
		/*background: #000000 !important;*/
		background: #ffffff40!important;
		border: solid 5px rgba(0, 0, 0, 0)!important;
	}

	.herolist::-webkit-scrollbar-thumb{ /*scrollbar thingie*/
		/*background: #000000 !important;*/
		background: #c1c1c1!important;
		border: solid 5px rgba(0, 0, 0, 0)!important;
		border-radius: 5px!important;
	}

	.herolist::-webkit-scrollbar{
		width: 7px!important;
	}

	.herolist{
		width:500px;
		height:400px;
		max-height: 50%;
		position:absolute;
		left:50%;
		top:50%;
		transform: translate(-50%, -50%);
		background-color: #000000aa;
		z-index: 10;
		overflow-y: scroll;
	}

	.herolist > .block{
		width: 100px;
		height: 100px;
		background-color: #000;
		margin: 11px 11px 11px 12px;
		float:left;
	}

	.herolist > .block > .hero{
		width: 50%;
		height: 50%;
		background-color: red;
		margin-left: 25%;
		margin-top: 10px;
		border-radius: 100%;
	}

	.herolist > .block > .text{
		color: red;
		text-align: center;
		width: 100%;
		margin-top: 10px;
	}

	/*logger-users*/

	.logger-users{
		position:absolute;
		width:300px;
		max-height:40%;
		left:50%;
		top:50%;
		transform: translate(-50%, -50%);
		background-color: #000000aa;
		color: white;
		overflow-y: auto;
		border-radius: 10px;
	}

	.logger-users > #extras > button, .logger-users > #extras > input#pastesel{
		background-color: #1e1e1e;
		border: solid 2px #272727;
		margin-left: 10px;
		margin-top: 5px;
		margin-bottom: 5px;
		width: 110px;
		font-size: 12pt;
	}

	.logger-users > #extras > button{
		color: #b04300;
    	font-weight: bold;
	}

	.logger-users > #extras > input#pastesel{
		width: 120px;
		color: #a3b000;
    	font-weight: bold;
	}

	.logger-users > #extras > input#pastesel::placeholder{
		color: #b04300;
    	font-weight: bold;
		font-size: 12pt;
	}

	.logger-users > #extras > input.custombox.lp{
		margin-left: 8px;
	}

	.logger-users > #holder > div{
		text-align: center;
		height: 30px;
		line-height: 30px;
		background-color: transparent;
		border-bottom: solid 1px white;
	}

	.logger-users > #holder > div > input{
		float: left;
		margin-top: 8px;
		margin-left: 8px;
	}
	.logger-users > #holder > div > p{
		margin: 0;
		margin-right: 25px;
	}

	.logger-users > #holder::-webkit-scrollbar-thumb{
		background: rgb(183 183 183)!important;
	}`
	if(window.tags){
		if(window.tags["[SCR]"]){
			let newarr = [];
			for(var i in window.tags["[SCR]"]){
				newarr.push('span[arialabel="'+ window.tags["[SCR]"][i] +'"]::before')
			}
			newihtml += newarr.join(",");
		}
	}
	newihtml += `{
		content: "[SCR]";
		margin-right: 4px;
		color: ${window.tagData["[SCR]"].color};
	}`
	if(window.tags){
		if(window.tags["[TO]"]){
			let newarr = [];
			for(var i in window.tags["[TO]"]){
				newarr.push('span[arialabel="'+ window.tags["[TO]"][i] +'"]::before')
			}
			newihtml += newarr.join(",");
		}
	}
	newihtml += `{
		content: "[TO]";
		margin-right: 4px;
		color: ${window.tagData["[TO]"].color};
	}`
	if(window.tags){
		if(window.tags["[TS]"]){
			let newarr = [];
			for(var i in window.tags["[TS]"]){
				newarr.push('span[arialabel="'+ window.tags["[TS]"][i] +'"]::before')
			}
			newihtml += newarr.join(",");
		}
	}
	newihtml += `{
		content: "[TS]";
		margin-right: 4px;
		color: ${window.tagData["[TS]"].color};
	}

	span[arialabel^="Guest"]::before{
		content: "[guest]";
		margin-right: 4px;
		color: ${window.tagData["[guest]"].color};
	}
	`;

	styles.innerHTML = newihtml;

	document.head.appendChild(styles);

	document.addEventListener("keydown", (e)=>{
		if(document.activeElement.localName === "input"){
			if(document.activeElement?.getAttribute("type") != "checkbox") return;
		}
		if(e.code == "KeyR"){
			window.client.openLogger();
		}else
		if(e.code == "Escape"){
			window.client.toggleHeroList(true);
		}
	});

window.checkGlobalError = ()=>{
	if(globalThis._babelPolyfill){
		return false;
	}else{
		return true;
	}
}

window.fireB = () => {
	let event = document.createEvent("Event");
	event.initEvent("keydown", true, true);
	event.keyCode = 66;
	document.dispatchEvent(event);
};

window.createNewLeaderboard = () => {
	fireB();
	setTimeout(fireB, 50);
};

window.removeFakes = ()=>{
	[...document.getElementsByClassName('fake')].forEach(el => el.remove());
}

window.z = "";
window.updateLeaderboard = () => {
	document.body.onclick = () => {
		client.count = 0; //window.removeFakes();
	};

	for (let names of [...document.getElementsByClassName('leaderboard-name')]) {
		names.oncontextmenu = event => {
			let HeroT, Hero, Level, Name;
			if (client.state) {
				for (let i in client.state.globalEntities) {
					const element = client.state.globalEntities[i];

					if (client.showClasses) {
						let right = event.toElement.innerHTML.split(")");
						if (right.length > 1) {
							let left = right[right.length - 2].split("(");
							if (left.length > 1) {

								Hero = left[event.toElement.innerHTML.split("(").length - 1]
								Name = event.toElement.innerHTML.split(" (" + Hero + ")")[event.toElement.innerHTML.split(" (" + Hero + ")").length - 2].replace(window.timerRegex, "");
								if (element.name == Name) Level = element.level;
								continue;

							}
						}
					}

					if (element.name == event.toElement.innerHTML) {
                        window.z = element.name;

						HeroT = element.heroType;
						Hero = id2name(HeroT);
						Level = element.level;
						Name = event.toElement.innerHTML;
					}
				}
			} else {
				Hero = "undefined"
				Name = "undefined"
			}

			//if (client.count > 0) document.getElementsByClassName('fake')[0].remove();
			client.count = 1;

			const name = client.showClasses ? Name : event.toElement.innerHTML;

			let o = null;
			for(var i in client.state.entities){
				let obj = client.state.entities[i]
				if(obj.name == window.z){
					o = obj;//experience
					break;
				}
			}
			window.client.hideLogs();
			window.removeFakes();
			const elem = document.createElement("div");
			elem.className = "chat-message-contextmenu fake";
			elem.style = `top: ${event.y}px; right: 20px; ${(window.client.textCommandConsts.bannedType == 1 && window.blaclist.includes(name)) ? "height:326px!important;" : ""}`;
			elem.id = "elem-"+name
			elem.innerHTML =
			`<aa class="banned-text${window.client.textCommandConsts.bannedType}" style="${!window.blaclist.includes(name) ? 'display: none!important;' : ''}">BANNED</aa>`+
			`<button id="log"class="bbtn"onClick="window.client.showLog('${name}', ${event.y}, window.client.openLogger(false))"title="Open logs popup.">L</button>`+
			`<button id="add"class="bbtn"onClick="window.client.customLog('${name}')"title="Add a custom (special) log.">+</button>`+
			`<button id="reset"class="bbtn"onClick="window.client.resetAreaLog('${name}')"title="Reset the log that shows when the user entered the game area.">R</button>`+
			`<button id="close"class="bbtn"onClick="window.client.hideLogs();this.parentNode.remove()"title="Close the popup.">X</button>`+
			`<div class="chat-message-contextmenu-header" style="text-align:center;margin-top: 30px;">${name}</div>`+
			`<ul style="display: table-cell;">`+
				`<li style="display: table-cell;">`+
					`<a href="/profile/${name}" target="_blank">Profile</a>`+
					`<p>Hero: <b id="c4" class="${window.client.allowedHeroes.includes(HeroT)? '' : 'blacklisted'}" style="color:${window.getHeroColor(Hero)};text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000;font-size: larger; margin-bottom:0;">${Hero}</b></p>`+
					`<p id="c0">VP: <b style="color:${window.getVpColor(o?.winCount)};text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000;font-size: larger; margin-top:0;">${o != null ? o.winCount: "###" }</b></p>`+
					`<p id="c1">Level: ${Level}</p>`+
					`<p id="c2">ss: ${0}</p>`+
					`<p id="c3">XP: ${o != null ? o.experience: "not in same area" }</p>`+
					`<div id="timecounter">`+
					`<input c-lock id="tc-from" type="number" value="${window.client.getUserLogIds(name)[0]}" title="Users log id to start time counting from.">`+
					`<input c-lock id="tc-to" type="number" value="${window.client.getUserLogIds(name)[1]}"title="End time users log id.">`+
					`<p id="tc-result"></p>`+
					`</div>`+
				`</li>`+
			`</ul>`;
			document.getElementById('chat').parentNode.parentNode.append(elem);
            window.client.elem.level = elem.querySelector("ul>li>p#c1");
            window.client.elem.speed = elem.querySelector("ul>li>p#c2");
            window.client.elem.xp = elem.querySelector("ul>li>p#c3");
            window.client.elem.hero = elem.querySelector("ul>li>p>b#c4");
            window.r = elem;
			elem.onClick = function(e) {
				return e.stopPropagation()
			}
			window.makeDragable(elem, [elem]);

			window.client.elem.hero.addEventListener("click", ()=>{
				window.client.toggleHeroList();
			});

			const removcl = (el)=>{
				el.addEventListener("click", (e)=>{
					e.stopPropagation();
				});
				el.addEventListener("mousedown", (e)=>{
					e.stopPropagation();
				});
			}
			
			removcl(window.client.elem.hero);
			let btns = elem.querySelectorAll("button");
			btns.forEach((btn)=>{
				removcl(btn);
			});


			const el1 = elem.querySelector("ul>li>#timecounter>#tc-from");
			const el2 = elem.querySelector("ul>li>#timecounter>#tc-to");
			const el3 = elem.querySelector("ul>li>#timecounter>#tc-result");

			const f = ()=>{

				if(el3){
					window.client.getTimeDiff(name, el1.value, el2.value, el3);
				}
			}

			el1.addEventListener("input", f);
			el2.addEventListener("input", f);
			f();

			return false;
		};
		names.style.cursor = "pointer";
	}
}

window.makeDragable = (elem, elems2drag)=>{
	elem.addEventListener("mousedown", (e)=>{
		if(window.firstPos == null || window.firstPos[2] == null){
			window.firstPos = [e.screenX,e.screenY, elems2drag];
		}
	});
}
document.addEventListener("mousemove", (e)=>{
	if(window.firstPos != null && [e.screenX, e.screenY].join("") != "00"){
		if(window.firstPos[2] != null){
			if(e.stopPropagation) e.stopPropagation();
    		if(e.preventDefault) e.preventDefault();
			for(var i = 0; i < window.firstPos[2].length; i++){
				let el = window.firstPos[2][i];
				el.style.top = (parseInt(el.style.top.substring(0, el.style.top.length-2)) + e.screenY - window.firstPos[1]) + "px";
				el.style.right = (parseInt(el.style.right.substring(0, el.style.right.length-2)) + (window.firstPos[0] - e.screenX) ) + "px";
				//e.screenX,e.screenY
			}
			window.firstPos = [e.screenX,e.screenY, window.firstPos[2]];
		}
	}
});
document.addEventListener("mouseup", (e)=>{
	window.firstPos = null;
});
let settings = document.createElement('label');
settings.innerHTML = "showClasses";


window.timerRegex = /[\S\s]+ • /;
window.updateName = (id, name) => {
	with (client) {
		if (!(showClasses && state)) return name;

		for (let i in state.globalEntities) {
			const element = state.globalEntities[i];
			if (element.id !== id) continue;

			let Hero = id2name(element.heroType);
			let DeathTime = window.secondsFormat(Math.floor(element.deathTimer/1000), false);
			return typeof name == 'string' ? `${element.deathTimer != -1 ? (DeathTime + " • ") : ""}${name} (${Hero})` : name;
		}
	}
}




window.loadGame = () => {
	window.createNewLeaderboard();
	client.load = true;
}



window.kek = function() {};
window.WebSocket.prototype._send = window.WebSocket.prototype.send;
window.WebSocket.prototype.send = function (data) {
	if (this.url.indexOf('evades.io/api/game/connect?') + 1) {
		if (this.url != kek.url) window.kek = this;
	}

    this.onmessage = function (e) {}

    if (window.protobuf) {
        let msg = protobuf.ClientPayload.toObject(protobuf.ClientPayload.decode(data));
        if (msg.keys && msg.keys.find(k=>k.keyType==6&&k.keyEvent==1) && client.main.effects.effects[0] && client.main.effects.effects[0].effectType==2)
            window.client.freeze_time = +new Date();
    }
    client.afkTime = +new Date();
	this._send(data);
}

window.sendDecodeData = msg => window.kek._send(protobuf.ClientPayload.encode(msg).finish());
window.sendData = msg => window.kek._send(new Uint8Array(msg));

window.genPrefix = (name)=>{
	if(window.client.textCommandConsts.showTag){
		for(var tagKey in window.tags){
			let tag = window.tags[tagKey];
			if(tag.includes(name)){
				window.lastPrefix.name = window.tagData[tagKey].presudo;
				window.lastPrefix.color = window.tagData[tagKey].color;
				return;
			}
		}
	}
	window.lastPrefix.name="";
}
window.lastPrefix = {
	color:"red",
	name:""
}

	if (document.getElementsByTagName('script')[0]) {
		var elem = Array.from(document.querySelectorAll('script')).find(a=>a.src.match(/app\.[0-9a-f]{8}\.js/));
		if (elem) {
			let src = elem.src;
			elem.remove();
			elem = document.createElement('script');
			elem.innerHTML=`
				var akek=new XMLHttpRequest();
				akek.open("GET","${src}",false);
				akek.send();
				tmp=akek.response;

				// Декодер от protobuf
				tmp = tmp.replace(
					'n.Payloads.FramePayload.decode(l),',
					'n.Payloads.FramePayload.decode(l);window.protobuf||(window.protobuf=n.Payloads);'
				);

				// Удалить пеллеты и показать большие шары на карте
				//id: 1
				tmp = tmp.replace(
					'this.chat.style.visibility="visible",',
					'this.chat.style.visibility="visible",client.state=t,client.main=t.self.entity,'
				);

				// Собирание инфы со всех игроков
				//id: 2
				tmp = tmp.replace(
					'nter",t.lineWidth=6,t.strokeStyle=this.titleStrokeColor,t.fillStyle=this.titleColor,',
					'nter",t.lineWidth=6,t.strokeStyle=this.titleStrokeColor,t.fillStyle=this.titleColor,replaces.id2.call(this,e,t,l),'
				);
				//id: 3
				tmp = tmp.replace(
					'e.default.createElement("span",{className:"leaderboard-name"},this.props.name),',
					'e.default.createElement("span",{className:"leaderboard-name"},window.updateName(this.props.player.id,this.props.name)),window.updateLeaderboard(e),(!client.load)?window.loadGame():null,'
				);
				//id: 4
				tmp = tmp.replace(
					'ck:this.cancel.bind(this)}),',
					'ck:this.cancel.bind(this)}),replaces.id4.call(e),'
				);

				//Таймеры
				tmp = tmp.replace(
					'(e,i){if(this.ready){',
					'(e,i){this==client.main&&client.drBefore.call(this,e,i);if(this.ready){'
				);

				// Фикс панели
				//id: 8

				tmp = tmp.replace('null!==this.gameState&&null!==this.updateChat&&(!this.gameState.initial&&!(i.ctrlKey||i.altKey||i.metaKey))', 'null!==this.gameState&& !(document.activeElement.getAttributeNames().includes("c-lock"))&&null!==this.updateChat&&(!this.gameState.initial&&!(i.ctrlKey||i.altKey||i.metaKey))');

				tmp = tmp.replace('className:"chat-message-sender"', 'className:"chat-message-sender", ariaLabel:s')

				tmp = tmp.replace('e.textAlign="center",e.fillStyle="black",e.fillText(this.name,a,r-this.radius-11)),',
				'e.font2=e.font,e.font=(window.ssss2??14)+"px Tahoma, Verdana, Segoe, sans-serif",'+
				'window.genPrefix(this.name),e.lineWidth2=e.lineWidth,e.lineWidth=(window.ssss??2.5),e.strokeStyle ="black",e.strokeText(window.lastPrefix.name,a,r-this.radius-11 - (window.consts?.tagY??14)),e.textAlign="center",e.fillStyle=window.lastPrefix.color,e.fillText(window.lastPrefix.name,a,r-this.radius-11 - (window.consts?.tagY??14)),'+
				'e.font=e.font2,e.lineWidth=e.lineWidth2,'+
				'e.textAlign="center",e.fillStyle="black",e.fillText(this.name,a,r-this.radius-11)),');

				/*//left
				tmp = tmp.replace('e.textAlign="center",e.fillStyle="black",e.fillText(this.name,a,r-this.radius-11)),',
				'window.genPrefix(this.name),e.textAlign="left",e.fillStyle=window.lastPrefix.color,e.fillText(window.lastPrefix.name,a - e.measureText(window.lastPrefix.name+this.name).width/1.8,r-this.radius-11),'+
				'e.textAlign="center",e.fillStyle="black",e.fillText(this.name,a + e.measureText(window.lastPrefix.name).width/3,r-this.radius-11)),');
				*/

				tmp = tmp.replace('(this.enteredButtons.add(u),u.mouseOver=!0,u.interactive&&(this.down&&!u.mouseDown?(e.keys.keyDown(u.key),u.onClick()):!this.down&&u.mouseDown&&e.keys.keyUp(u.key),u.mouseDown=this.down,s=!0),o=!0)',
				'((this.gameState.heroInfoCard.hidden && ((u.width == 48 && u.height == 48) || (u.width == 14 && u.height == 14) || (u.width == 82 && u.height == 40)))?false:(this.enteredButtons.add(u),u.mouseOver=!0,u.interactive&&(this.down&&!u.mouseDown?(e.keys.keyDown(u.key),u.onClick()):!this.down&&u.mouseDown&&e.keys.keyUp(u.key),u.mouseDown=this.down,s=!0),o=!0))')

				tmp = tmp.replace('message:t,', 'message: window.client.checkMsg(t) ? t : void 0,');
				//tmp = tmp.replace('this.gameState.chatMessages.push(o.value)', 'window.client.checkMsg(o.value)&&this.gameState.chatMessages.push(o.value)');
				
				tmp = tmp.replace('null!==e&&(this.isKeyUp(e)||this.downKeys.splice(this.downKeys.indexOf(e),1))',
				'if(!window.client.grb.on || (window.client.grb.on && e !== window.client.grb.grbKey)){null!==e&&(this.isKeyUp(e)||this.downKeys.splice(this.downKeys.indexOf(e),1))}')

				tmp = tmp.replace('null!==e&&(this.isKeyDown(e)||this.downKeys.push(e))',
				'if(!window.client.grb.on || (window.client.grb.on && e === window.client.grb.grbKey)){null!==e&&(this.isKeyDown(e)||this.downKeys.push(e))}')

				tmp = tmp.replace('this.downKeys=[]',
				'if(!window.client.grb.on)this.downKeys=[]')

				tmp = tmp.replace('require("babel-polyfill")', 'window.checkGlobalError()&&require("babel-polyfill")');

				// неработающий маркер
				new MutationObserver(function (mutations) {
					if (document.getElementsByClassName('quick-play-button')[0]) {
						document.getElementsByClassName('quick-play-button')[0].style.color='#db1512'
						this.disconnect();
					}
				}).observe(document, {childList: true, subtree: true});

				eval(tmp);
			`;
			document.body.appendChild(elem);
		}
	}

