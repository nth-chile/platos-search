var GAME_LEVELS = [
	['                  v                                                                ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                   ',
	 '                                                                                  d',
	 '                                                                   mmmmmmmmmmmmmmmm',
	 '                                                                   xxxxxxxxxxxxxxxx',
	 '                                                                 mmxxxxxxxxxxxxxxxx',
	 '                                                                  xxxxxxxxxxxxxxxxx',
	 '                                                                  xxxxxxxxxxxxxxxxx',
	 '                                                                  xxxxxxxxxxxxxxxxx',
	 '                                                               mmmxxxxxxxxxxxxxxxxx',
	 '                                                              mxxxxxxxxxxxxxxxxxxxx',
	 '                                                             mxxxxxxxxxxxxxxxxxxxxx',
	 '                                                            mxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                           mxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                          mxxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                         mxxxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                        mxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                       mxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 '   x x                                                mxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                     mxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ' @d                                                 mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'mmmmmmmmmmmmmmmmm   mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'xxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ],
	 [
	 'l                                                                                         ',
	 'o                                                                                         ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                                   mmmmmmmmmmmmmmmmmmmmm  ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                              x              =            ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                         x            mmmmmm   xxxxxxxxxxx',
	 '                                                                           x   x          ',
	 '                                                                           x   x          ',
	 '                                                    x   v   v              x   x          ',
	 '                                                                               x          ',
	 '                                                                 =             x          ',
	 '                                               x                               x          ',
	 '                                                                  xxxxxxxxxxxxxx          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                             mmmmmmmmmmmm  xxxxxxxxx x x  x                               ',
	 '                                                          x       x                       ',
	 '                                                          x                               ',
	 '                    mmmmmm             o                  x                               ',
	 '                   m      mmmmmmmmmmmmmmm                                                 ',
	 '                  m                                                                       ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '    @d   o                                                                               d',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm!!!!!!!!!!!!!!!!!!!!!!!!!mmmmmmmmmmmmmmmmmmmmmmmm',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxx',
	 ],
	 [
	 'o                   !x                                        !        xxxxxxxxxxxxxxxxxxx',
	 '!!!!!               !x                               x        v        xxxxxxxxxxxxxxxxxxx',
	 'xxxx!               vx                               x                 xxxxxxxxxxxxxxxxxxx',
	 'x   |                x                               x                 xxxxxxxxxxxxxxxxxxx',
	 'x                    x                               x                 xxxxxxxxxxxxxxxxxxx',
	 'x                    x                               x                 xxxxxxxxxxxxxxxxxxx',
	 'x                    x                               x                 xxxxxxxxxxxxxxxxxxx',
	 'xk                   x                               x                 xxxxxxxxxxxxxxxxxxx',
	 'xxxxxxxxxxxxxxxxx    x                               x      xxxxxxxx    xxxxxxxxxxxxxxxxxx',
	 '                x    x   xxxxxxxxxxxxxxxxxx    x     x     =xxx     x    xxxxxxxxxxxxxxxxx',
	 '                x    x                 xxxx=         x    x  x       x                    ',
	 '                x   x!           =     xxx     xxx   x       x        x                   ',
	 '                x   x                  xxx     xxx   x       x         x                 1',
	 '                x     xxxxxxxxxxxxxx   xxx    xxxx   x      @x          xxxxxxxxxxxxxxxxxx',
	 '                xx                     xxx   =       x      xx                            ',
	 '                xx  x                 =x     xxxxxx         xx                            ',
	 '                xx                     x     x =            xx                            ',
	 '                xx        xxxxxxxxxxxxxx            x   d                                 ',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=           xxxxxx                                ',
	 '                                          x         xx                                    ',
	 '=                                                    x                                    ',
	 '                                                    xx                                    ',
	 'xxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                    ',
	 '    x  x                                                                                  ',
	 '                                                                                          ',
	 '                                                                                         2',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ],
	 [
	 '       x                      x                 x           ',
	 '                           @                                ',
	 '                                                            ',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 ]

];

function Level(plan) {
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];
	console.log(this.width, this.height);
	var actorTypes = {
		'@': Player,
		'o': Coin,
		'=': Lava,
		'|': Lava,
		'v': Lava,
	};

	for (var y = 0; y < this.height; y++){
		var gridLine = [];
		for (var x = 0; x < plan[y].length; x++){
			var ch = plan[y].charAt(x);
			var Actor = actorTypes[ch];
			var fieldType = null;
			if (Actor)
				this.actors.push(new Actor(ch, new Vector(x, y)));
			else if (ch == 'l'){
				fieldType = 'null';
				this.darkness = 'true';
			}
			else if (ch == 'x')
				fieldType = 'wall';
			else if (ch == 'm')
				fieldType = 'moss';
			else if (ch == 'd')
				fieldType = 'door';
			else if (ch == '!')
				fieldType = 'lava';
			gridLine.push(fieldType);
		}
		this.grid.push(gridLine);
	}

	this.player = this.actors.filter(function(actor){
		return actor.type == 'player';
	})[0];
	this.status = this.finishDelay = null;
}

//returns every actor object that overlaps with the one given as an argument
Level.prototype.actorAt = function(actor) {
	for(var i = 0; i < this.actors.length; i++) {
		var other = this.actors[i];
		if(other != actor &&
			actor.pos.x + actor.size.x > other.pos.x &&
	        actor.pos.x < other.pos.x + other.size.x &&
	        actor.pos.y + actor.size.y > other.pos.y &&
	        actor.pos.y < other.pos.y + other.size.y)
	    return other;
	}
};
Level.prototype.isFinished = function() {
  return this.status != null && this.finishDelay < 0;
};
Level.prototype.playerTouched = function(type, actor) {
	if (type == "lava" && this.status == null) {
	    this.status = "lost";
	    this.finishDelay = 1;
	}
	else if (type == 'coin' ) {
		this.actors = this.actors.filter(function(other) {
			return other != actor;
		});
		if (!this.actors.some(function(actor) {
      		return actor.type == "coin";
   		})) {
      		this.status = "won";
      		this.finishDelay = 1;
    	}
	}
	else if (type == 'door') {
		this.status = 'won';
	}
};

var playerXSpeed = 1.6;
var gravity = 4.1;
var jumpSpeed = 6;
var scale = 22;
var maxStep = .05;
//calls .act on each actor and subtracts step by maxStep. repeats until step = 0
Level.prototype.animate = function(step, keys) {
	if (this.status != null)
    	this.finishDelay -= step;

	while (step > 0) {
    	var thisStep = Math.min(step, maxStep);
   		this.actors.forEach(function(actor) {
    		actor.act(thisStep, this, keys);
    	}, this);
    	step -= thisStep;
	}
};

function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.times = function(times) {
  return new Vector(this.x * times, this.y * times);
};
//returns 'wall' or 'lava' when the given pos and size overlaps walls or stagnant lava
//treats the table sides and top as walls, and the table bottom as lava
Level.prototype.obstacleAt = function (pos, size) {
	var xStart = Math.floor(pos.x);
	var xEnd = Math.ceil(pos.x + size.x);
	var yStart = Math.floor(pos.y);
	var yEnd = Math.ceil(pos.y + size.y);

	if (xStart < 0 || xEnd > this.width || yStart < 0)
		return 'wall';
	if (yEnd > this.height)
		return 'lava';
	for (var y = yStart; y < yEnd; y++) {
		for (var x = xStart; x < xEnd; x++) {
			var fieldType = this.grid[y][x];
			if (fieldType) return fieldType;
		}
	}
};
function Door(ch, pos) {
	this.pos = pos.plus(new Vector(0, -1));
	this.size = new Vector(10/8, 10/5);
}
//stores player properties
function Player(ch, pos) {
	this.speed = new Vector(0, 0);
	this.pos = pos.plus(new Vector(0, -1));
	//this.size = new Vector(10 / 8, 10 / 5);
	this.size = new Vector(.8, 1.9)
}
Player.prototype.type = 'player';
//passes its arguments to moveX and moveY and calls them, and if there is an actor at
//player.pos, passes the actor to playerTouched and calls it
Player.prototype.act = function(step, level, keys) {
	this.moveX(step, level, keys);
	this.moveY(step, level, keys);

	var otherActor = level.actorAt(this);
	if(otherActor) level.playerTouched(otherActor.type, otherActor);

	//losing animation
	if (level.status == "lost") {
	    this.pos.y += step;
	    this.size.y -= step;
	}
};
//moves left or right unless obstacle at next step. if obstacle, call playertouched

Player.prototype.moveX = function(step, level, keys) {
	this.speed.x = 0;
	if(keys.left) {
		this.speed.x -= playerXSpeed;
	}
	if(keys.right) {
		this.speed.x += playerXSpeed;
		document.getElementsByClassName('game').className += ' right';
	}
	var motion = new Vector(this.speed.x * step, 0);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if(obstacle)
		level.playerTouched(obstacle);
	else
		this.pos = newPos;
};

Player.prototype.jumpReady = function(keys, obstacle) {
	if(obstacle && !keys.space && this.speed.y >= 0)
		jumpSpeed = 6;
	else
		jumpSpeed = 0;
};

Player.prototype.moveY = function(step, level, keys) {
	this.speed.y += step * gravity;
	var motion = new Vector(0, this.speed.y * step);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if (obstacle) {
		level.playerTouched(obstacle);
		if (keys.space && this.speed.y > 0)
			this.speed.y = -jumpSpeed;
		else
			this.speed.y = 0;
	} else {
		this.pos = newPos;
	}
	this.jumpReady(keys, obstacle);
};

var arrowCodes = {37: "left", 32: "space", 39: "right"};

function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}
//stores lava properties
function Lava (ch, pos) {
	this.originalPos = pos;
	this.pos = pos;
	this.size = new Vector(1, 1);
	this.type = 'lava';
	if (ch == '|')
		this.speed = new Vector(0, 1);
	else if (ch == '=')
		this.speed = new Vector(1, 0);
	else if (ch == 'v') {
		this.speed = new Vector(0, 1);
		this.repeatPos = 'true';
	}
}
Lava.prototype.type = 'lava';
//moves the lava
Lava.prototype.act = function(step, level) {
	var nextStep = this.pos.plus(this.speed.times(step));
	var obstacle = level.obstacleAt(nextStep, this.size);
	if (!obstacle){
		this.pos = nextStep;
	}
	else if (this.repeatPos == 'true') {
		this.pos = this.originalPos;
	}
	else {
		this.speed = this.speed.times(-1);
		this.pos = nextStep;
	}
};
//stores coin properties
function Coin(ch, pos) {
	this.pos = pos;
	this.size = new Vector(.5, .5);
}
Coin.prototype.type = 'coin';
Coin.prototype.act = function() {
	var nothing = null;
};
//creates HTML element with optional classname. pass the arguments in quotation marks
function elt(elt, classname) {
	var element = document.createElement(elt);
	if (classname) element.className = classname;
	return element;
}
//creates a div with class 'game', appends it to document body, calls drawBackground,
//attaches the returned table to the div, and calls drawFrame and scrollPlayerIntoView.
function DOMDisplay(parent, level) {
	this.display = parent.appendChild(elt('div', 'game'));
	this.level = level;
	this.actorLayer = null;
	this.display.appendChild(this.drawBackground());
	this.drawFrame();
}
DOMDisplay.prototype.clear = function() {
  this.display.parentNode.removeChild(this.display);
};
DOMDisplay.prototype.scrollPlayerIntoView =  function() {
	var width = this.display.clientWidth;
	var height = this.display.clientHeight;
	var marginX = width / 3;
	var marginY = height / 3;

	var left = this.display.scrollLeft, right = left + width;
	var top = this.display.scrollTop, bottom = top + height;


	var player = this.level.player;
	var center = player.pos.plus(player.size.times(.5)).times(scale);

	if (center.x < left + marginX){
	 	this.display.scrollLeft = center.x - marginX;
	}
	else if (center.x > right - marginX)
	    this.display.scrollLeft = center.x + marginX - width;
	if (center.y < top + marginY)
	    this.display.scrollTop = center.y - marginY;
	else if (center.y > bottom - marginY)
	    this.display.scrollTop = center.y + marginY - height;
	};
DOMDisplay.prototype.drawBackground = function(){
	var table = elt('table');
	this.level.grid.forEach(function(row){
		var tr = elt('tr');
		tr.style.height = scale + 'px';
		table.appendChild(tr);
		row.forEach(function(block){
			var td = elt('td');
			td.style.cssText = 'height: ' + scale + 'px; width:' + scale + 'px';
			tr.appendChild(td);
			td.className = block;
		});
	});
	return table;
};
DOMDisplay.prototype.drawActors = function() {
	var wrap = elt('div');
	this.level.actors.forEach(function(actor){
		var rect = wrap.appendChild(elt('div', actor.type + ' actor'));
		rect.style.width = actor.size.x * scale + "px";
	    rect.style.height = actor.size.y * scale + "px";
	    rect.style.left = actor.pos.x * scale + "px";
	    rect.style.top = actor.pos.y * scale + "px";
	});
	return wrap;
};
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
DOMDisplay.prototype.drawLantern = function() {
	//adjust lantern
	var lantern = this.level.player.pos.plus(new Vector (-1.5, 1));
	var radius = 55;
	if (this.SVG) this.display.removeChild(this.SVG);

	this.SVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	var darkness = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	var displayHeight = window.getComputedStyle(this.display).getPropertyValue('height').slice(0, -2);
	var displayWidth = window.getComputedStyle(this.display).getPropertyValue('width').slice(0, -2);
	setAttributes(this.SVG, {
		'xmlns': 'http://www.w3.org/2000/svg',
		'height': this.display.clientHeight + 'px',
		'width': this.display.clientWidth + 'px'
	});
	setAttributes(darkness, {
		'd': 'M ' + ((lantern.x  * scale) - this.display.scrollLeft) + ' ' + (lantern.y * scale - this.display.scrollTop) +
		' A ' + radius + ' ' + radius + ' 0 1 1 ' + ((lantern.x  * scale) - this.display.scrollLeft) + ' ' + (lantern.y * scale - this.display.scrollTop + .1) + 
		' M 0 0 H ' + displayWidth + ' V ' + displayHeight + ' H 0 Z',
		'fill':'black',
		'fill-rule':'evenodd'
	});
	this.SVG.appendChild(darkness);
	this.display.appendChild(this.SVG);
};


DOMDisplay.prototype.drawFrame = function () {
	if (this.actorLayer)
		this.display.removeChild(this.actorLayer);
	this.actorLayer = this.display.appendChild(this.drawActors());
	this.display.className = 'game ' + (this.level.status || '');
	if (arrows.left) this.display.className += ' left';
	if(arrows.right) this.display.className += ' right';
	this.scrollPlayerIntoView();
}

function runAnimation(frameFunc) {
	var lastTime = null;
	function frame(timestamp){
		var stop = false;
		if (lastTime != null) {
			var step = Math.min(timestamp - lastTime/10, 100) / 1000;
			stop = frameFunc(step) === false;
		}
		lastTime = timestamp;
		if (!stop) window.requestAnimationFrame(frame);
	}
	window.requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);
function runLevel(level, Display, andThen) {
	var display = new Display(document.body, level);
	runAnimation(function(step) {
		level.animate(step, arrows);
		display.drawFrame();
		if(level.darkness)
			display.drawLantern();
		if (level.isFinished()) {
     		display.clear();
     		if (andThen)
        		andThen(level.status);
      		return false;
   		}
  });
}
function runGame(plans, Display) {
  function startLevel(n) {
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost")
        startLevel(n);
      else if (n < plans.length - 1)
        startLevel(n + 1);
      else
        console.log("You win!");
    });
  }
  startLevel(0);
}
runGame(GAME_LEVELS, DOMDisplay);