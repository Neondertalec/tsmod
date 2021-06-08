## [FAQ link](https://github.com/Neondertalec/tsmod/blob/main/faq.md#how-to-install)
# How to install
* **new:** [A short video of how to install](https://youtu.be/XRXmW23zyWw)  
or:

1) Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru) or any other UserScript running extension.  
if you can't install any extensions, go [here](https://github.com/Neondertalec/tsmod/blob/main/README.md#use-with-console)

2) Click on the + button.  
![image](https://cdn.discordapp.com/attachments/617049086452957189/815553184793755668/unknown.png)

3) Paste this code in there so it looks like this.

    ```js
    // ==UserScript==
    // @name        TS-Mod
    // @version     1.1.11
    // @description	Evades.io TS script.
    // @author      Script by: MeOw:3 (🎀Depression🎀#5556), Most ideas: Piger (Piger#2917).
    // @match       https://evades.io/*
    // @match       https://evades.online/*
    // @match       https://eu.evades.io/*
    // @run-at      document-start
    // @downloadURL https://raw.githubusercontent.com/Neondertalec/tsmod/main/tsmod.js
    // @updateURL   https://raw.githubusercontent.com/Neondertalec/tsmod/main/tsmod.js
    // @grant       none
    // ==/UserScript==
    ```
    ![image](https://cdn.discordapp.com/attachments/617049086452957189/815553740798689310/unknown.png)

4) Save it by clicking '`ctrl + s`'

5) Find the script and enable it. Then click on the '`TS-Mod`'  
![image](https://cdn.discordapp.com/attachments/617049086452957189/815554358375743538/unknown.png)

6) Go to '`Settings`' tab and make sure that '`check for updates`' is ticked.
![image](https://cdn.discordapp.com/attachments/617049086452957189/815554982085656586/unknown.png)

7) Also make sure that [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru) is enabled (<aa style="color:red"> **red line** </aa>)  
That the script is the only one turned on (<aa style="color:#5500ff"> **purpe line** </aa>)  
Then clcik on the '`check for updates`' (<aa style="color:cyan"> **cyan line** </aa>)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/815555840148766730/unknown.png)

8) Refresh your browser (if it doesnt help, reopen it).

# Use with console

if you can't install any extensions...  
pass this code into the console:
```js
var xm=new XMLHttpRequest();
xm.open("GET","https://raw.githubusercontent.com/Neondertalec/tsmod/main/console-tsmod.js",false);
xm.send();
eval(xm.response)
```

Update 1.1.52
=============

Addons
------
From now on you can have another extension that will allow you to have a custom tag in the chat and a prefix in the game (#toggletag command) without modifying the script itself.

### the code to use:  
  
```js
// ==UserScript==
// @name        TS-Mod-addons
// @version     1.0.0
// @description	Evades.io TS script addon.
// @author      Script by: MeOw:3 (🎀Depression🎀#5556).
// @match       https://evades.io/*
// @match       https://evades.online/*
// @match       https://eu.evades.io/*
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(()=>{
    globalThis.tagsEX = {...globalThis.tagsEX,...{
        '[ct]':['USER NAME', 'USER NAME 2'],
    }}
    globalThis.tagDataEX = {...globalThis.tagDataEX,...{
        '[ct]': {presudo:"[TAG NAME]", color:"#fff"},
    }};


    let data = [
        {
            names: ["USER NAME", "USER NAME 2"],
            color: "#529b77",
            text: "[custom tag]",
            rainbow: false,
        },
    ]

    // CUSTOM PART END -----------------------------------

    let styles = document.createElement('style');
    let newihtml = "";
    for(let tagdata of data){
			let newarr = [];
			for(let tname of tagdata.names){
				newarr.push('span[arialabel="'+ tname +'"]::before')
			}
			newihtml += newarr.join(",") + `{
				content: "${tagdata.text}"!important;
				margin-right: 4px;
				color: ${tagdata.color}!important;
				${tagdata.rainbow?
					`animation-name: rainbowTextkf;
					animation-duration: 20s;
					animation-iteration-count: infinite;`:
					``
				}
			}`
		}
    styles.innerHTML = newihtml;
    document.head.appendChild(styles);
})()
```

As you can see there is a seperated part.

The first part you can modify is this:
```js
globalThis.tagsEX = {...globalThis.tagsEX,...{
    '[ct]':['USER NAME', 'USER NAME 2'],
}}
globalThis.tagDataEX = {...globalThis.tagDataEX,...{
    '[ct]': {presudo:"[TAG NAME]", color:"#fff"},
}};
```

The **`[ct]`** acts as a key. It should be the same in the top and the bottom parts.  
The **`USER NAME`** is the name of the players you want to assing this prefix.  
The **`#fff`** is the place where you put the color you want.

The second part you can modify is this:
```js
let data = [
    {
        names: ["USER NAME", "USER NAME 2"],
        color: "#529b77",
        text: "[custom tag]",
        rainbow: false,
    },
]
```

The **`names`** contains the names of the players you want to assign the tags.  
The **`color`** is the color of the tag.  
The **`text`** is tag.
The **`rainbow`** is whether you want it to change colors or on (the **`color`** doesnt get used then).

Update 1.1.42
=============

Chat commands
------------------

Every **bold** text from the `[SCRIPT]` message is now acting as a button. Some buttons replace the text in the chat input and others add the text.

![](https://cdn.discordapp.com/attachments/617049086452957189/841975792166109184/ezgif.com-gif-maker.gif)

User card toggler
------------------

Now you can toggle the usercard between the script card and the default (no script) card with the `#toggleusercard` command.

if on:  
![image](https://cdn.discordapp.com/attachments/617049086452957189/841973361214619668/unknown.png)  
if off:  
![image](https://cdn.discordapp.com/attachments/617049086452957189/841973447391444992/unknown.png)

Update 1.1.41
=============

Team run result generator
------------------

When you leftclick on the area on the leaderboard a window will show.
In the window you need to:
* Sellect the players that were on that area when the popup was opened.
* Sellect log id's that you need. (a R button is there to update the logs list).
* Set the format of the result (It saves), hover for the hint.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841972917650194452/unknown.png)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/841973110479650826/unknown.png)

Leaderboard players counter
------------------

Areas in the leaderboard now have a number to the left of them that show the amount of players that are in it right now. You can toggle it with a new command `#toggleusers`

![image](https://cdn.discordapp.com/attachments/617049086452957189/841972314349371392/unknown.png)

Update 1.1.37
=============

Logs
------------------

A new log type is now displayed in a **purple** color.  
It shows when the player joined or left the server.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841969503772082176/unknown.png)


Update 1.1.36
=============

New commands
------------------

new #format and #setformat commands are added.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841766637387382784/unknown.png)

The **G** button is used to copy a format. by the example above the formated result will be `DepressionOwU ;; Area 1 ;; 2:25 ;; (1/3)`.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841766822848233492/unknown.png)

Server number
-------------
The number of the server you are in is displayer in the leaderboard.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841972434546720808/unknown.png)

Update 1.1.33
=============

Changelog
------------------

Every change is now described in the changelog on the main page of evades.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841765889689780264/unknown.png)

Update 1.1.32
=============

Version
------------------

The versions are now shown when there is an update available.

![image](https://cdn.discordapp.com/attachments/617049086452957189/841765444632182844/unknown.png)

Update 1.1.27
=============

GRB (Go Right Bot)
------------------

Toggle grb by **`#grb`** command  
if grb is **`on`**:
1) when you press **`D`** or **`RIGHT ARROW`**, you will start moving right.
2) You can not move with keys.

when grb is turned **`off`**, you will stop and be able to play as always.

Update 1.1.23
=============

Not allowed heroes
------------------
By clicking on the hero ( <text style="color:#ff80bd">**Candy**</text> in this example ):  

![image](https://cdn.discordapp.com/attachments/617049086452957189/827224134147637258/unknown.png)  

A window will appear:  

![image](https://cdn.discordapp.com/attachments/617049086452957189/827224181455978516/unknown.png)  
  
To close this window, click anywhere on the screen.  
By clicking on any of the heroes it will toggle *(**black** <--> **dark red**)*:  
  
![image](https://cdn.discordapp.com/attachments/617049086452957189/827224248090099760/unknown.png)  
  
If the hero is **dark red**, the hero on the user card will be crossed:  
  
![image](https://cdn.discordapp.com/attachments/617049086452957189/827224308840792165/unknown.png)    

Update 1.1.19
=============
Victroy points
--------------
Now user cards display victory points  
![image](https://cdn.discordapp.com/attachments/617049086452957189/824002506643603476/unknown.png)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/824002565397938266/unknown.png)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/824003026695618570/unknown.png)  

Banned users
---------------
Banned users now have *"**BANNED**"* text on their user card. There are currently two types of the text.  

1\)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/824003925077393448/unknown.png)  
2\)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/824004007935737896/unknown.png)

To change between them there is a new command **`#banned`** which accepts 1 argument: **`1`** or **`2`**.  

Update 1.1.11
=============

Filtering checkboxes
---------------

![image](https://cdn.discordapp.com/attachments/617049086452957189/815537376629489674/unknown.png)  

The checkboxes are made so you can filter users you want to see.  
  
![Image](https://cdn.discordapp.com/attachments/617049086452957189/815537594892812318/unknown.png)

Export / Import runs
---------------
![Image](https://cdn.discordapp.com/attachments/617049086452957189/815536942837530644/unknown.png)  
* **Export**:  
    By clicking the button you get the runs that are selected are pasted into your **clipboard**.  

* **Import**:  
    By pasting the text that got exported in to the import input and pressing enter, the list will show the exported players runs.  
    To return to the current runs, you need to press on import and then press enter key without typing anything.  

Chat tags
---------

Added tags to the chat for TS, TO and my self (~~egoistic... isnt it?~~).  

![image](https://cdn.discordapp.com/attachments/761540044225773568/813388669309157406/unknown.png)
![image](https://cdn.discordapp.com/attachments/761540044225773568/813388963112681472/unknown.png)
![image](https://cdn.discordapp.com/attachments/761540044225773568/813388842065068042/unknown.png)  

Chat commands
-------------
By typing `#` in to the chat you will receive a message like this...  

![image](https://cdn.discordapp.com/attachments/617049086452957189/815550046762172446/unknown.png)

Currently available commands:  
* **\#**, **help** - shows the help line.
* **prefix** - sets your current prefix to the one you specify.  
*note: '`/`' can not be a prefix.*
* **toggletag** - shows / hides the ingame tags.  

*also: everything is being saved even after you close yuor browser.*

Ingame tags
-----------
![image](https://cdn.discordapp.com/attachments/617049086452957189/815544790107947059/tags.png)

Hero card fix
------------
When the hero card is hidden you no longer hover on invisible buttons.

Other
-----
[The 1.0.0 video](https://www.youtube.com/watch?v=MA9A8OmK0Xo)
