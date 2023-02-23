Warning: Any addon here requires the main script to be activated!
--
#
# What is this
A script that created clones to test hat images. It is required for you to have any hat equipped.

console functions:
--
* `load()` - load everything to work

* `createClone(id, heroId, radius=15, x=null, y=null)` - create a single clone

* `fillHeroes()` - fill default hero group

* `setCloneHats("link")` - set the hat url

# example to test your image:

Lets say your image is this and you want to test it:  
![img](https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png)  
with a `https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png` link.

**Step 1)** Enter the game (prefereably an empty server) and stay at **CC1**  
**Step 2)** Open the console (`f12` -> console tab)  
**Step 3)** write `fillHeroes()` in there. to fill the heroes  
**Step 4)** write `setCloneHats("link")` replacing **link** with your url so in our case it will be this:  `setCloneHats("https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png")`  

Edited the Image? Repeat step 4.

# example to create a clone:

You can create a clone by caling 
`createClone(id, heroId, radius=15, x=null, y=null)`

**Step 1)** Enter the game (prefereably an empty server) and stay at **CC1**  
**Step 2)** Open the console (`f12` -> console tab)  

in this function there are 5 variables `createClone(id, heroId, radius=15, x=null, y=null)`
* `id` - id of the clone, if you create the close with the same id, the other clone will dissapear  
* `heroId` - the id of the hero starting from 0 being Magmax  
* `radius` - te radius of the hero, default is 15  
* `x` - the x position of the clone, your position by default  
* `y` - the y position of the clone, your position by default

TO create a clone at magmax clone at your position you would do this:
`createClone("my magax", 0, 15)`