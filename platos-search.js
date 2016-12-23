var GAME_LEVELS = [
	 //door1
	 [
	 '                                                        ',
	 '                                                        ',
	 '                                                        ',
	 '                                                        ',
	 '                                                        ',
	 '                                                        ',
	 '                                  g                     ',
	 '                                  p                     ',
	 '                                 ppp                    ',
	 '                                ppppp                   ',
	 ' @                             ppppppp                  ',
	 'pppppppppppppppppppppppppppppppppppppppppppppppppppppppp',
	 ],
	 //door2
	 [
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '! @  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '!    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '               !!!!!!!!!!!!!!!!!!!!!!!!!!',
	 '                !!!!!!!!!!!!!!!!!!!!!!!!!',
	 '                 !!!!!!!!!!!!!!!!!!!!!!!!',
	 '                                v        ',
	 'xxxxxxxx                                 ',
	 '!!!!!!!!xxx                              ',
	 '!!!!!!!!!!!xx                            ',
	 '!!!!!!!!!!!!!xx                          ',
	 '!!!!!!!!!!!!!!!xx                        ',
	 '!!!!!!!!!!!!!!!!x                      7 ',
	 '!!!!!!!!!!!!!!!!!  xxxxx    xxxx xxxxxxxx',
	 '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 ],
	 //heaven's door
	 [
	 '                                                                                 ',
	 '                                                                                 ',
	 '      @         n                                                                ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                            n    ',
	 '                                                                                 ',
	 '                           n              n                                      ',
	 '                       n              n                                          ',
	 '                                                                    n            ',
	 '                                                      n                          ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
	 '                                                                                 ',
	 ],

	 [
	 '                  v                                                                ',
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
	 '                                                                      mmmmmmmmmmmmm',
	 '                                                                     mxxxxxxxxxxxxx',
	 '                                                                    mxxxxxxxxxxxxxx',
	 '                                                                   mxxxxxxxxxxxxxxx',
	 '                                                                  mxxxxxxxxxxxxxxxx',
	 '                                                                 mxxxxxxxxxxxxxxxxx',
	 '                                                                mxxxxxxxxxxxxxxxxxx',
	 '                                                               mxxxxxxxxxxxxxxxxxxx',
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
	 'd   @                                               mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'mmmmmmmmmmmmmmmmm   mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'xxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ],
	 [
	 'l                                                                                         ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                                                                   rrrrrrrrrrrrrrrrrrrrr  ',
	 '                                                                                          ',
	 '                                                              o                           ',
	 '                                                              r              =            ',
	 '                                                                                          ',
	 '                                                         o                                ',
	 '                                                         r   !!!!!!!!!rrrrrr   rrrrrrrrrrr',
	 '                                                            vrrrrrrrrr     r   r          ',
	 '                                                    o                      r   r          ',
	 '                                                    r                 o    r   r          ',
	 '                               o                                               r          ',
	 '                               r     o         o           r      =            r          ',
	 '                                     r         r                               r          ',
	 '                                                                  rrrrrrrrrrrrrr          ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '                             rrrrrrrrrrrr  rrrrrrrrrrrr   r                               ',
	 '                                                          r       r                       ',
	 '                                                          r                               ',
	 '                                       o                  r                               ',
	 '                         rrrrrrrrrrrrrrrr                                                 ',
	 '                        r                                                                 ',
	 '                       r                                                                  ',
	 '                                                                                          ',
	 'd   @    o                                                                              d ',
	 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr!!!!!!!!!!!!!!!!!!!!!!!!!rrrrrrrrrrrrrrrrrrrrrrrr',
	 ],
	 [
	 'l                   !r                               r        !        rrrrrrrrrrrrrrrrrrr',
	 '!!!!!               !r                               r        v        rrrrrrrrrrrrrrrrrrr',
	 'rrrr!               vr                               r                 rr!!!!!!!!!!!!!!!!!',
	 'r   |                r                               r                 rr!!!!!!!!!!!!!!!!!',
	 'r                    r                               r                 rr!!!!!!!!!!!!!!!!!',
	 'r                    r                               r                 rr!!!!!!!!!!!!!!!!!',
	 'r k     o  o  o      r                               r                 rr!!!!!!!!!!!!!!!!!',
	 'r                    r      o   o   o                r                 rrr!!!!!!!!!!!!!!!!',
	 'rmmmmmmmmmmmmmmmm    r                               r      rrrrrrrr    rrrrrrrrrrrrrrrrrr',
	 '                r    r   rrrrrrrrrrrrrrrrrr    rrrr  r     =rrr     r    rrrrrrrrrrrrrrrrr',
	 '                r    r                 rrrr=         r    r  r       r                    ',
	 '                r   rr           =     rrrr    rrrr or       r        r                   ',
	 '                r    r                 rrr     rrrr or       r         r                D ',
	 '                r    rrrrrrrrrrrrrrr   rrr    rrrrr or       r          rrrrrrrrrrrrrrrrrr',
	 '                rr                     rrr   =      or      rr                            ',
	 '                rr  r         =        r     rrrrrr o                                     ',
	 '   k            rr                     r     rrrrrr o                                     ',
	 'rrrr            rr        rrrrrrrrrrrrrr            r                                     ',
	 '          rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr            rrrrrrrr                              ',
	 '                                          r          r                                    ',
	 '=                                                    r                                    ',
	 '                                                     r                                    ',
	 'rrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                    ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '   d  @    o    o    o    o    o                                                          ',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 ],
	 [

	 'l                                                                                         ',
	 '                                                                                          ',
	 '                                                                                          ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr             ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                     rrr            ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                         rrrr           ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr k                       rrrrr          ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr              rrrrrrrrr  rrrrrr         ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr           rrrrrrrrrr  rrrrrrr        ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr         rrrrrrrrrrr  rrrrrrrr  oo   ',
	 '    r                             rrrrrrrrrrrrrrrrrrrr       rrrrrrrrrrrr            oo   ',
	 '    r                             rrrrrrrrrrrrrrrrrrrrrrr   rrrrrrrrrrrrr                 ',
	 '    r                          o  | rrrrrrrrrrrrrrrrrrrrr    rrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
	 '    r                          r     rrrrrrrrrrrrrrrrrrrr                                 ',
	 '    r    o                           rrrrrrrrrrrrrrrrrrrrr                                ',
	 '    rd @                             rrrrrrrrrrrrrrrrrrrrrr                               ',
	 '    rrrrrrrrrrrrrrrrrrrrrrrrrrrrr    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr    ',
	 '                           rrrrro                                                         ',
	 '                           rrrrr      =                                                   ',
	 '                           rrrrr                                                          ',
	 '                       d   rrrrr     rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
	 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
	 ],
	 [
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                               0 ',
	 '                                                                              rrr',
	 '                                                                             rrrr',
	 '                                                                            rrrrr',
	 '                                      rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
	 '                                     r                                           ',
	 '                                    r                                            ',
	 '                                   r                                             ',
	 '                                  r                                              ',
	 '                                 r                                               ',
	 '                                r                                                ',
	 '                               r                                                 ',
	 '                              r                                                  ',
	 '                             r                                                   ',
	 '                            r                                                    ',
	 '                         rrr                                                     ',
	 '                                                                                 ',
	 '                      a          b              c                              d ',
	 '            mmmmmmmmmmmmmmmmmmmmmmmm  mmmmmmmmmmmm  mmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 '           mxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxx22xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 ' @        mxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'mmmmmmmmmmxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
 	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
 	 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
 	 'xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!         r!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
 	 'xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!         r!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
 	 'xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!rrrrr     v!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
 	 'xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!      r!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	 'xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!                                    v   ',
	 '                   !!!!!!!!!!!!!!!!!!!!!!                                        ',
	 '                   !!!!!!!!!!!!!!!!!!!!!!rrr                                     ',
	 '                   !!!!!!!!!!!!!!!!!!!!!!rrr                                     ',
	 '                      !!!!!!!!!!!!!!!!!!!rrr                                   1 ',
	 '                       !!!!!!!!!!!!!!!!!!rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
	 ],
	 [
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 '                                                                                 ',
	 ' @                                                                               ',
	 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
	 ],
];

var playerXSpeed = 1.6;
var gravity = 4.1;
var jumpSpeed = 6.2;
var scale = 22;
var maxStep = .05;

var playerSprite = document.createElement('img');
playerSprite.src = 'img/plato.svg';

var otherChars = document.createElement('img');
otherChars.src = 'img/otherCharslofi.svg';

var otherSprites = document.createElement('img');
otherSprites.src = 'img/sprites2.svg';

var specialSprites = document.createElement('img');
specialSprites.src = 'img/specialSprites.svg';

var backgroundColors = [
'rgb(186, 183, 94)', //gold
'rgb(252, 98, 60)', //orange
'rgb(170, 255, 253)', //light sky
'rgb(79, 191, 247)', //sky
'rgb(25, 25, 56)',
'rgb(45, 69, 122)',
'rgb(86, 86, 86)',
'rgb(79, 191, 247)', //sky
'rgb(79, 191, 247)', //sky
];

function Level(plan, lvlnmbr) {
	this.background = backgroundColors[lvlnmbr];
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];
	this.text = null;

	var actorTypes = {
		'0': Door,
		'1': Door,
		'2': Door,
		'7': Door,
		'a': King,
		'b': Commoner,
		'c': Monk,
		'd': Door,
		'D': Door,
		'g': Grail,
		'k': Key,
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
			//treats 'l' as an empty space and makes the level dark
			else if (ch == 'l'){
				fieldType = 'null';
				this.darkness = new Darkness(this);
			}
			else if (ch == 'x')
				fieldType = 'wall';
			else if (ch == 'm')
				fieldType = 'moss';
			else if (ch == 'n')
				fieldType = 'cloud';
			else if (ch == 'p')
				fieldType = 'gold';
			else if (ch == 'r')
				fieldType = 'rock';
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
		this.darkness.radius += 25;
		/*
		if (!this.actors.some(function(actor) {
      		return actor.type == "coin";
   		})) {
      		this.status = "won";
      		this.finishDelay = 1;
    	}*/
	}
	else if (type == 'door' && actor.locked == false && (actor.door == 'D' || actor.door == 'd')) {
		this.status = 'won';
	}
	else if (type == 'door' && actor.locked)
		console.log('It\'s locked.');
	else if (type == 'heavensDoor' || type == 'door' && (actor.door == '0' || actor.door == '1' || actor.door == '2' || actor.door == '7'))
		this.status = actor.door;
	else if (type == 'key') {
		this.actors = this.actors.filter(function(other) {
			if (other.locked) other.locked = false;
			return other != actor;
		});
	}
	else if (type == 'grail') {
		this.text = 'You found a gold cup. Press \'e\' to eat it.';
		addEventListener('keypress', response.bind(this));
		function response(event) {
			if(event.keyCode == 101) {
				this.text = '\'I can\'t eat this.\'';
				removeEventListener('keypress', response);
			}
		}
	}
	else if (type == 'king') {
		this.text = '\'Climb the stairs, and you will find a gold cup.\'';
	}
	else if (type == 'commoner') {
		this.text = '\'An honest man? I think I saw him go down into that hole.\'';
	}
	else if (type == 'monk') {
		this.text = '\'Stop this silly search. Jump into the lava and join the Immortals.\'';
	}
};
CanvasDisplay.prototype.drawText = function() {
	this.cx.font = "15px VT323";
	if(this.level.text) {
		this.cx.fillStyle = "white";
  		this.cx.fillText(this.level.text, 10, 50);
  	}
};

//calls .act on each actor and subtracts step by maxStep. repeats until step = 0
Level.prototype.animate = function(step, keys) {
	if (this.status != null)
    	this.finishDelay -= step;

	while (step > 0) {
    	var thisStep = Math.min(step, maxStep);
   		this.actors.forEach(function(actor) {
   			if(actor.act != undefined)
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

//doors and keys are not actors and probably fit better in their own array
//so that no error is thrown by .animate when it tries to call an .act method on
//all the actors. for now, to avoid the error, Key.prototype.act == function(){null;};
function Door(ch, pos) {
	ch == 2 ? this.pos = pos : this.pos = pos.plus(new Vector(0, -1));
	ch == 2 ? this.size = new Vector(1, 1) : this.size = new Vector(1, 2);
	ch == 'D' ? this.locked = true : this.locked = false;
	this.door = ch;
	ch == 2 ? this.type = 'heavensDoor' : this.type = 'door';
}
function Key(ch, pos) {
	this.pos = pos.plus(new Vector(0, 0));
	this.size = new Vector (1, 1);
}
Key.prototype.type = 'key';
Key.prototype.act = function() {
	null;
};

function King(ch, pos) {
	this.pos = pos.plus(new Vector(0, -1.5));
	this.size = new Vector(1.4, 2.5);
	this.type = 'king';
}
function Commoner(ch, pos) {
	this.pos = pos.plus(new Vector(0, -1.4));
	this.size = new Vector(1.25, 2.5);
	this.type = 'commoner';
}
function Monk(ch, pos) {
	this.pos = pos.plus(new Vector(0, -.50));
	this.size = new Vector(1.5, 1.5);
	this.type = 'monk';
}
function Player(ch, pos) {
	this.speed = new Vector(0, 0);
	this.pos = pos.plus(new Vector(0, -1));
	//this.size = new Vector(.8, 1.8);
	this.size = new Vector(.94, 1.9)
	//this.size = new Vector( 1, 2);
}
Player.prototype.type = 'player';
//passes its arguments to moveX and moveY and calls them, and if there is an actor at
//player.pos, passes the actor to playerTouched and calls it
Player.prototype.act = function(step, level, keys) {
	this.moveX(step, level, keys);
	this.moveY(step, level, keys);

	var otherActor = level.actorAt(this);
	if(otherActor && otherActor != this.lastActorTouched) level.playerTouched(otherActor.type, otherActor);
	this.lastActorTouched = otherActor;
	if(!otherActor) level.text = null;

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
	if(obstacle) {
		level.playerTouched(obstacle);
		if(obstacle == 'door') this.pos = newPos;
	}
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
		if (obstacle == 'door') this.pos = newPos;
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
	this.pos = pos.plus(new Vector(.25, .25));
	this.size = new Vector(.5, .5);
}
Coin.prototype.type = 'coin';
Coin.prototype.act = function() {
	var nothing = null;
};
function Grail(ch, pos) {
	this.pos = pos;
	this.size = new Vector(1, 1);
}
Grail.prototype.type = 'grail';
Grail.prototype.act = function() {
	var nothing = null;
};
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
	this.drawFrame(0);
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
	this.drawText();
};
CanvasDisplay.prototype.clearDisplay = function() {
	this.cx.fillStyle = this.level.background;
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
CanvasDisplay.prototype.drawBackground = function() {
	var view = this.viewport;
	var xStart = Math.floor(view.left);
	var xEnd = Math.ceil(view.left + view.width);
	var yStart = Math.floor(view.top);
	var yEnd = Math.ceil(view.top + view.height);

	for (var y = yStart; y < yEnd; y++) {
		for (var x = xStart; x < xEnd; x++) {
		var tile = this.level.grid[y][x];
		var screenX = (x - view.left) * scale;
     	var screenY = (y - view.top) * scale;
     	if (tile == null) continue;
     	else if (tile == 'moss') var tileX = 0;
     	else if (tile == 'wall') var tileX = scale;
     	else if (tile == 'lava') var tileX = scale * 2;
     	else if (tile == 'rock') var tileX = scale * 5;
     	else if (tile == 'cloud') var tileX = scale * 6;
     	else if (tile == 'gold') var tileX = scale * 7;
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
CanvasDisplay.prototype.drawPlayer = function(x, y, width, height) {
	var player = this.level.player;
	width += 3.15 * 2; //lantern hangs out
	x -= 3.15;
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
		var x = Math.round((actor.pos.x - this.viewport.left) * scale);
		var y = (actor.pos.y - this.viewport.top) * scale;
		var tileX;
		//not needed if sprites are 22 wide
		var charHeight = 66;
		var charX;
		if (actor.type == 'lava' || actor.type == 'heavensDoor') tileX = 2 * scale;
		else if (actor.type == 'coin') tileX = Math.ceil(3 * scale);
		else if (actor.type == 'key') tileX = 3.5 * scale;
		else if (actor.type == 'door') {
			this.cx.drawImage(otherSprites,
							4.5 * scale, 0, width / 2, height / 2,
							x,			 y,	width, height);
		}
		else if (actor.type == 'monk') {
			charX = .01;
			charHeight = 33;
		}
		else if (actor.type == 'commoner') charX = 1.5 * scale;
		else if (actor.type == 'king') charX = 3 * scale;
		else if (actor.type == 'player') {
			this.drawPlayer(x, y, width, height);
		}
		else if (actor.type == 'grail') {
			this.cx.drawImage(specialSprites,
							  0, 0, width, height,
							  x, y, width, height);
		}
		if(tileX) {
			this.cx.drawImage(otherSprites,
							  tileX, 0, width, height,
							      x, y, width, height);
		}
		else if(charX) {
			this.cx.drawImage(otherChars,
							  charX, 0, 33, charHeight,
									x,	y,	width, height);
		}
	}, this);
};


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
    runLevel(new Level(plans[n], n), Display, function(status) {
    if (status == "lost")
    	startLevel(n);
    else if (status == '0' || status == '1' || status == '2' || status == '7')
    	startLevel(status);
    else if (n < plans.length - 1)
    	startLevel(n + 1);
    else
        alert("Game over.");
    });
  }
  startLevel(3);
}
runGame(GAME_LEVELS, CanvasDisplay);
alert('Find an honest man. \nDon\'t use the doors on the left that\'s cheating.');