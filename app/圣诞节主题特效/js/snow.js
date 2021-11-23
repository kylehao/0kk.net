/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
"use strict";
(function () {

// SnowVolume will change the density of the snowflakes
var SnowVolume = 800;
var elem = document.querySelector('.snow');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = elem.clientWidth;
var height = elem.clientHeight;
var i = 0;
var active = false;

function onResize() {
	width = elem.clientWidth;
	height = elem.clientHeight;
	canvas.width = width;
	canvas.height = height;
	ctx.fillStyle = '#FFF';

	var wasActive = active;
	active = width > 700;

	if (!wasActive && active)
		requestAnimFrame(update);
}

var Snowflake = function () {
	this.x = 0;
	this.y = 0;
	this.vy = 0;
	this.vx = 0;
	this.r = 0;

	this.reset();
}

Snowflake.prototype.reset = function() {
	this.x = Math.random() * width;
	this.y = Math.random() * -height;
	this.vy = 1 + Math.random() * 3;
	this.vx = 0.5 - Math.random();
	this.r = 1 + Math.random() * 2;
	this.o = 0.5 + Math.random() * 0.5;
}

canvas.style.position = 'absolute';
canvas.style.left = canvas.style.top = '0';

var snowflakes = [], snowflake;
for (i = 0; i < SnowVolume; i++) {
	snowflake = new Snowflake();
	snowflake.reset();
	snowflakes.push(snowflake);
}

function update() {

	ctx.clearRect(0, 0, width, height);

	if (!active)
		return;

	for (i = 0; i < SnowVolume; i++) {
		snowflake = snowflakes[i];
		snowflake.y += snowflake.vy;
		snowflake.x += snowflake.vx;

		ctx.globalAlpha = snowflake.o;
		ctx.beginPath();
		ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();

		if (snowflake.y > height) {
			snowflake.reset();
		}
	}

	requestAnimFrame(update);
}

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function( callback ){
		window.setTimeout(callback, 5000 / 60);
	};
})();

onResize();
window.addEventListener('resize', onResize, false);

elem.appendChild(canvas);
})();console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");