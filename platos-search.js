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
	 '                                                      mxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 '                                                     mxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ' d @                                                mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
	 '                                                              o                           ',
	 '                                                              x              =            ',
	 '                                                                                          ',
	 '                                                         o                                ',
	 '                                                         x   !!!!!!!!!mmmmmm   xxxxxxxxxxx',
	 '                                                            vxxxxxxxxx     x   x          ',
	 '                                                    o                      x   x          ',
	 '                                                    x                 o    x   x          ',
	 '                               o                                               x          ',
	 '                               m                           x      =            x          ',
	 '                                     m         x                               x          ',
	 '                                                                  xxxxxxxxxxxxxx          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                             mmmmmmmmmmmm  xxxxxxxxxxxx   x                               ',
	 '                                                          x       x                       ',
	 '                                                          x                               ',
	 '                    mmmmmm             o                  x                               ',
	 '                   m      mmmmmmmmmmmmmmm                                                 ',
	 '                  m                                                                       ',
	 '                                                                                          ',
	 '                                                                                          ',
	 'd   @    o                                                                               d',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm!!!!!!!!!!!!!!!!!!!!!!!!!mmmmmmmmmmmmmmmmmmmmmmmm',
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
	 '                xx        xxxxxxxxxxxxxx            x                                     ',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=           xxxxxx                                ',
	 '                                          x         xx                                    ',
	 '=                                                    x                                    ',
	 '                                                    xx                                    ',
	 'xxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                    ',
	 '    x  x                                                                                  ',
	 '                                                                                          ',
	 '                                                                                         2',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 ],
];

function Level(plan) {
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];
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
				this.darkness = new Darkness(this);
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
	//coins are lantern fuel
	else if (type == 'coin' ) {
		this.actors = this.actors.filter(function(other) {
			return other != actor;
		});
		this.darkness.radius += 20;
		/*
		if (!this.actors.some(function(actor) {
      		return actor.type == "coin";
   		})) {
      		this.status = "won";
      		this.finishDelay = 1;
    	}*/
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
    	if(this.darkness)
    		this.darkness.act(thisStep);
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
	//this.size = new Vector(.8, 1.8);
	this.size = new Vector(.94, 1.9)
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
	if(obstacle && !keys.up && this.speed.y >= 0)
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
		if (keys.up && this.speed.y > 0)
			this.speed.y = -jumpSpeed;
		else
			this.speed.y = 0;
	} else {
		this.pos = newPos;
	}
	this.jumpReady(keys, obstacle);
};

var arrowCodes = {37: "left", 38: "up", 39: "right"};

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
function Darkness(level) {
	this.level = level;
	this.radius = 55;
	this.speed = .5;
}
Darkness.prototype.act = function(step) {
	this.radius -= this.speed * step;
	this.pos = this.level.player.pos.plus(new Vector (this.level.player.size.x / 2, this.level.player.size.y / 2));
};

CanvasDisplay.prototype.drawDarkness = function() {
	var lantern = this.level.darkness.pos;
	var radius = this.level.darkness.radius;
	var x = (lantern.x - this.viewport.left) * scale;
	var y = (lantern.y - this.viewport.top) * scale;
	if(radius < 0)
		this.level.status = 'lost';
	else {
	this.cx.beginPath();
	this.cx.arc(x, y, radius, 0, 7);
	this.cx.moveTo(0, 0);
	this.cx.lineTo(0, this.canvas.height);
	this.cx.lineTo(this.canvas.width, this.canvas.height);
	this.cx.lineTo(this.canvas.width, 0);
	this.cx.fillStyle = 'black';
	this.cx.fill();	
	}
};

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

function CanvasDisplay(parent, level) {
	this.canvas = document.createElement('canvas');
	this.canvas.width = Math.min(550, level.width * scale);
	this.canvas.height = Math.min(370, level.height * scale);
	parent.appendChild(this.canvas);
	this.cx = this.canvas.getContext('2d');
	this.level = level;
	this.animationTime = 0;
	this.flipPlayer = false;
	this.viewport = {
		left: 0,
		top: 0,
		width: this.canvas.width / scale,
		height: this.canvas.height / scale
		};
	this.drawFrame(0); //?
}
CanvasDisplay.prototype.clear = function() {
	this.canvas.parentNode.removeChild(this.canvas);
};
CanvasDisplay.prototype.drawFrame = function(step) {
	this.animationTime += step;
	this.updateViewport();
	this.clearDisplay();
	this.drawBackground();
	this.drawActors();
};
CanvasDisplay.prototype.clearDisplay = function() {
	this.cx.fillStyle = 'rgb(79, 191, 247)';
	this.cx.fillRect(0,0, this.canvas.width, this.canvas.height);
};
CanvasDisplay.prototype.updateViewport = function() {
	var view = this.viewport;
	var marginX = view.width / 3;
	var marginY = view.height / 3;
	var player = this.level.player;
	var center = player.pos.plus(player.size.times(0.5));

	if (center.x < view.left + marginX)
 		view.left = Math.max(center.x - marginX, 0);
	else if (center.x > view.left + view.width - marginX)
		view.left = Math.min(center.x + marginX - view.width,
							this.level.width - view.width);
	if (center.y < view.top + marginY)
		view.top = Math.max(center.y - marginY, 0);
	else if (center.y > view.top + view.height - marginY)
		view.top = Math.min(center.y + marginY - view.height,
							this.level.height - view.height);
	view.left = Math.round(view.left * scale) / scale;
	view.top = Math.round(view.top * scale) / scale;
};
var otherSprites = document.createElement('img');
otherSprites.src = 'img/sprites.svg';
CanvasDisplay.prototype.drawBackground = function() {
  var view = this.viewport;
  var xStart = Math.floor(view.left);
  var xEnd = Math.ceil(view.left + view.width);
  var yStart = Math.floor(view.top);
  var yEnd = Math.ceil(view.top + view.height);

  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
     	var tile = this.level.grid[y][x];
     	if (tile == null || tile == 'door') continue;
     	var screenX = (x - view.left) * scale;
     	var screenY = (y - view.top) * scale;
     	if (tile == 'moss') var tileX = 0;
     	else if (tile == 'wall') var tileX = scale;
     	else if (tile == 'lava') var tileX = scale * 2;

     	this.cx.drawImage(otherSprites,
     					tileX,         0, scale, scale,
						screenX, screenY, scale, scale);
    }
  }
};
function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}
var playerSprite = document.createElement('img');
playerSprite.src = 'img/solidplayer.svg';
CanvasDisplay.prototype.drawPlayer = function(x, y, width, height) {
	var player = this.level.player;
	//width += 3.15 * 2; //lantern hangs out
	//x -= 3.15;
	if(player.speed.x != 0)
		this.flipPlayer = player.speed.x < 0;

	this.cx.save();
	if(this.flipPlayer)
		flipHorizontally(this.cx, x + width / 2);
	this.cx.drawImage(playerSprite, x, y, width, height);
	this.cx.restore();
};
CanvasDisplay.prototype.drawActors = function() {
	this.level.actors.forEach(function(actor) {
		var width = actor.size.x * scale;
		var height = actor.size.y * scale;
		var x = (actor.pos.x - this.viewport.left) * scale;
		var y = (actor.pos.y - this.viewport.top) * scale;
		if (actor.type == 'player') {
			this.drawPlayer(x, y, width, height);
		} else {
			var tileX = (actor.type == 'coin' ? 2.5 : 2) * scale;
			this.cx.drawImage(otherSprites,
							  tileX, 0, width, height,
							  x,	 y, width, height);
		}
	}, this);
};

//is this used?
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
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
			display.drawDarkness();
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
runGame(GAME_LEVELS, CanvasDisplay);