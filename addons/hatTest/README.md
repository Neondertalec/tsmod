~~Warning: Any addon here requires the [main script](https://github.com/Neondertalec/tsmod) to be activated!~~
--
#
# What is this
A script that created clones to test hat images. It is required for you to have any hat equipped.

Console functions:
--
* `load()` - load everything to make it work.

* `createClone(id, heroId, radius=15, x=null, y=null)` - create a single clone

* `fillHeroes()` - fill default hero group (CC1)

* `setCloneHats("link")` - set the hat url  

* `setCloneBodies("link")` - set the body url  

* `setCloneHatsAnimated({data})` - set an animated hat  

* `setCloneBodiesAnimated({data})` - set an animated body

* `camTo(id)` - change camera to a speciffic id, defaults to mirage if no argument passed.

# Example to test your image:

Lets say your image is this and you want to test it:  
![img](https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png)  
which has a `https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png` link.

**Step 1)** Enter the game (preferably an empty server) and stay at **CC1**  
**Step 2)** Open the console (`f12` -> console tab)  
**Step 3)** Write `fillHeroes()` in there to fill the area with heroes.  
**Step 4)** Write `setCloneHats("link")` replacing **link** with your url so in our case it will be this:  
`setCloneHats("https://cdn.discordapp.com/attachments/446437803262476295/1078360744418087032/pixil-frame-0_68.png")`  

Edited the Image? Repeat **step 4**.

Your image is animated?
---------------
instead of using `setCloneHats`, use `setCloneHatsAnimated`  
example:
```js
setCloneHatsAnimated({
	"startRandom":false, // optional
	"frames":[
		{"path": "https://cdn.discordapp.com/emojis/843148319966756895.webp", "duration": 10},
		{"path": "", "duration": 10},
	]
})
```
* path: image url
* duration: duration of the frame, usually 1 frame is `33.3 ms`

# Example to create a clone:

You can create a clone by calling 
`createClone(id, heroId, radius=15, x=null, y=null)`

**Step 1)** Enter the game (preferably an empty server) and stay at **CC1**  
**Step 2)** Open the console (`f12` -> console tab)  

in this function there are 5 parameters `createClone(id, heroId, radius=15, x=null, y=null)`
* `id` - id of the clone, if you create the close with the same id, the other clone will dissapear.  
* `heroId` - the id of the hero starting from 0 being Magmax.  
* `radius` - the radius of the hero, default is 15.  
* `x` - the x position of the clone, your position by default.  
* `y` - the y position of the clone, your position by default.

To create a magmax clone at your position you would do this:
`createClone("my magmax", 0, 15)`
