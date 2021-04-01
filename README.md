# How to install
1) Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru) or any other UserScript running extension.  
if you can't install any extensions, go [here](https://github.com/Neondertalec/tsmod/blob/main/README.md#use-with-console)

2) Click on the + button.  
![image](https://cdn.discordapp.com/attachments/617049086452957189/815553184793755668/unknown.png)

3) Paste this code in there so it look like this.

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

7) Make sure that [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru) is enabled (<aa style="color:red"> **red line** </aa>)  
That the script is the only one turned on (<aa style="color:#5500ff"> **purpe line** </aa>)  
Then clcik on the '`check for updates`' (<aa style="color:cyan"> **cyan line** </aa>)  
![image](https://cdn.discordapp.com/attachments/617049086452957189/815555840148766730/unknown.png)

8) Refresh your browser (if it doesnt help, reopen ir).

# Use with console

if you cant install any extensions...  
pass this code into the console:
```js
var xm=new XMLHttpRequest();
xm.open("GET","https://raw.githubusercontent.com/Neondertalec/tsmod/main/console-tsmod.js",false);
xm.send();
eval(xm.response)
```

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
