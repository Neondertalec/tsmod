// ==UserScript==
// @name        TS-Mod-addons 3D
// @version     1.0.1
// @description	Evades.io TS script addon.
// @author      Script by: MeOw:3 (🎀Depression🎀#5556).
// @match       https://evades.io/*
// @match       https://evades.online/*
// @match       https://eu.evades.io/*
// @downloadURL https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/3dEvades/src.js
// @updateURL   https://raw.githubusercontent.com/Neondertalec/tsmod/main/addons/3dEvades/src.js
// @run-at      document-start
// @grant       none
// ==/UserScript==
function addReplaces(t,n,a = false){globalThis.extraReplaces!=null?globalThis.extraReplaces.push([t,n,a]):globalThis.extraReplaces=[[t,n,a]]}

globalThis.createArc = function(ctx, x, y, r, render){
    if(!render) return "rgba(0, 0, 0, 0)";
    const rr = ctx.createRadialGradient(x, y, 0, x, y, r);
    rr.addColorStop(0, "rgba(0, 0, 0, 0)");
    rr.addColorStop(0.2, "rgba(0, 0, 0, 0.1)");
    rr.addColorStop(0.8, "rgba(0, 0, 0, 0.4)");
    rr.addColorStop(1, "rgba(0, 0, 0, 0.6)");
    return rr;
}
//enemies
addReplaces('"rgba(205, 75, 27, 0.8)",e.fill()),','"rgba(205, 75, 27, 0.8)",e.fill()),'+
            'e.closePath(),e.beginPath(),e.arc(this.x + t.x, this.y + t.y, this.radius, 0, 2 * Math.PI, !1), e.fillStyle = globalThis.createArc(e, this.x + t.x,this.y + t.y, this.radius), e.fill(),');

//projectiles
addReplaces('t.arc(this.x+e.x,this.y+e.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath()',
            't.arc(this.x+e.x,this.y+e.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath(),'+
            't.closePath(),t.beginPath(),t.arc(this.x + e.x, this.y + e.y, this.radius, 0, 2 * Math.PI, !1), t.fillStyle = globalThis.createArc(t, this.x + e.x,this.y + e.y, this.radius), t.fill()', true);

//heroes
addReplaces('this.renderShadowedInvulnerabilityEffect(e,r,a)',
            'this.renderShadowedInvulnerabilityEffect(e,r,a),'+
            'e.closePath(),e.beginPath(),e.arc(r, a, this.radius, 0, 2 * Math.PI, !1), e.fillStyle = globalThis.createArc(e, r, a, this.radius, !this.isDeparted), e.fill()');

//pellets
addReplaces('t.arc(this.x+e.x,this.y+e.y,this.radius*this.scaleOscillator.value,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath(),',
            't.arc(this.x+e.x,this.y+e.y,this.radius*this.scaleOscillator.value,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath(),'+
            't.beginPath(),t.arc(this.x + e.x, this.y + e.y, this.radius*this.scaleOscillator.value, 0, 2 * Math.PI, !1), t.fillStyle = globalThis.createArc(t, this.x + e.x,this.y + e.y, this.radius*this.scaleOscillator.value), t.fill(),');
