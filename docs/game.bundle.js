/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    BOOTSTRAP_COMPLETED: 'state:bootstrap-completed',
    LOADING_COMPLETED: 'state:loading-completed',
    EXAMPLE_COMPLETED: 'state:example-completed'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'player';

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, key));

        _this.weapon = {
            bullets: [],
            fire: function fire() {}
        };


        game.add.existing(_this);
        game.physics.arcade.enable(_this);

        _this.anchor.setTo(0.5);

        //  Input Enable the sprite
        _this.inputEnabled = true;

        //  Allow dragging - the 'true' parameter will make the sprite snap to the center
        _this.input.enableDrag(true);

        return _this;
    }

    return Player;
}(Phaser.Sprite);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    WIDTH: 360,
    HEIGHT: 640,

    GRAVITY: 0
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bowser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _genericEnemy = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowser = exports.Bowser = function (_GenericEnemy) {
    _inherits(Bowser, _GenericEnemy);

    function Bowser(game, x, y, key, health, weapon) {
        _classCallCheck(this, Bowser);

        // positioning
        var _this = _possibleConstructorReturn(this, (Bowser.__proto__ || Object.getPrototypeOf(Bowser)).call(this, game, x, y, key, health, weapon));

        _this.anchor.setTo(0.5, 1);

        // initialize animations
        _this.animations.add('getHit', [1, 2, 0], 12, false);

        _this.animations.add('flap', [0, 1], 2, true);

        _this.play('flap');

        return _this;
    }

    _createClass(Bowser, [{
        key: 'scheduleShooting',
        value: function scheduleShooting() {

            var bullet = this.weapon.fire(this, this.game.player.x, this.game.player.y);

            this.enemyTimer.add(Phaser.Timer.SECOND * 2, this.scheduleShooting, this);
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(Bowser.prototype.__proto__ || Object.getPrototypeOf(Bowser.prototype), 'reset', this).call(this, x, y, health);

            this.body.velocity.x = speedX;
            this.body.velocity.y = speedY;

            this.scale.setTo(scale / 3);

            // resume timer
            this.enemyTimer.resume();
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {

            var emitter = this.game.add.emitter(this.x, this.y, 100);

            emitter.blendMode = Phaser.blendModes.ADD;
            emitter.gravity.y = 600;
            emitter.setAlpha(1, 0, 500, 'Cubic.easeIn');
            emitter.setAngle(-180, 180, 0, 2400);
            emitter.setRotation(0, 0);
            emitter.minParticleScale = this.scale.x / 3 * 0.25;
            emitter.maxParticleScale = this.scale.x / 3;
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);

            emitter.makeParticles('bowserParticles', [0, 1, 2]);
            emitter.start(true, 500, null, 100);
        }
    }]);

    return Bowser;
}(_genericEnemy.GenericEnemy);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bowsers = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bowser = __webpack_require__(3);

var _fireballs = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowsers = exports.Bowsers = function (_Phaser$Group) {
    _inherits(Bowsers, _Phaser$Group);

    function Bowsers(game) {
        _classCallCheck(this, Bowsers);

        var _this = _possibleConstructorReturn(this, (Bowsers.__proto__ || Object.getPrototypeOf(Bowsers)).call(this, game));

        _this.weapon = new _fireballs.Fireballs(_this.game);

        return _this;
    }

    _createClass(Bowsers, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _bowser.Bowser(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            enemy.damage(1);
            bullet.kill();
        }
    }]);

    return Bowsers;
}(Phaser.Group);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fireball = function (_Phaser$Bullet) {
    _inherits(Fireball, _Phaser$Bullet);

    function Fireball(game, x, y, key, frame) {
        _classCallCheck(this, Fireball);

        var _this = _possibleConstructorReturn(this, (Fireball.__proto__ || Object.getPrototypeOf(Fireball)).call(this, game, x, y, key, frame));

        _this.smoothed = false;

        _this.animations.add('burning', null, 30, true);

        _this.play('burning');

        return _this;
    }

    return Fireball;
}(Phaser.Bullet);

var DevilFire = exports.DevilFire = function (_Phaser$Weapon) {
    _inherits(DevilFire, _Phaser$Weapon);

    function DevilFire(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DevilFire';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, DevilFire);

        var _this2 = _possibleConstructorReturn(this, (DevilFire.__proto__ || Object.getPrototypeOf(DevilFire)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = Fireball;

        _this2.createBullets(16, 'devilFire', 0);

        _this2.bulletAngleOffset = 315;

        return _this2;
    }

    return DevilFire;
}(Phaser.Weapon);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericEnemy = exports.GenericEnemy = function (_Phaser$Sprite) {
    _inherits(GenericEnemy, _Phaser$Sprite);

    function GenericEnemy(game, x, y, key, health, weapon, frame) {
        _classCallCheck(this, GenericEnemy);

        // set variables
        var _this = _possibleConstructorReturn(this, (GenericEnemy.__proto__ || Object.getPrototypeOf(GenericEnemy)).call(this, game, x, y, key));

        if (Array.isArray(weapon)) {
            _this.weapons = weapon;
        } else {
            _this.weapon = weapon;
        }

        _this.health = health;

        // create and initiate timer
        _this.enemyTimer = _this.game.time.create(false); // keeps timer alive after it's done
        _this.enemyTimer.start();

        // positioning
        _this.anchor.setTo(0.5);

        // physics properties
        game.physics.arcade.enable(_this);

        _this.scheduleShooting();

        return _this;
    }

    _createClass(GenericEnemy, [{
        key: 'update',
        value: function update() {

            //bounce on the borders
            if (this.position.x < this.body.halfWidth) {
                this.position.x = this.body.halfWidth + 2;
                this.body.velocity.x *= -1;
            } else if (this.position.x > this.game.world.width - this.body.halfWidth) {
                this.position.x = this.game.world.width - this.body.halfWidth - 2;
                this.body.velocity.x *= -1;
            }

            // kill object at bottom
            if (this.top > this.game.world.height) {
                this.kill();
            }
        }
    }, {
        key: 'scheduleShooting',
        value: function scheduleShooting() {

            this.weapon.fire(this);

            this.enemyTimer.add(Phaser.Timer.SECOND * 2, this.scheduleShooting, this);
        }
    }, {
        key: 'damage',
        value: function damage(amount) {

            // sprite damage functionality
            _get(GenericEnemy.prototype.__proto__ || Object.getPrototypeOf(GenericEnemy.prototype), 'damage', this).call(this, amount);

            // play animation
            this.animateGetHit();

            // when dead
            if (this.health <= 0) {
                this.emitDeath();
                this.enemyTimer.pause();
            }
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(GenericEnemy.prototype.__proto__ || Object.getPrototypeOf(GenericEnemy.prototype), 'reset', this).call(this, x, y, health);

            this.body.velocity.x = speedX;
            this.body.velocity.y = speedY;

            this.scale.setTo(scale);

            // resume timer
            this.enemyTimer.resume();
        }
    }, {
        key: 'animateGetHit',
        value: function animateGetHit() {

            this.play('getHit');
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {}
    }]);

    return GenericEnemy;
}(Phaser.Sprite);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LittleDevil = exports.LittleDevil = function (_Phaser$Sprite) {
    _inherits(LittleDevil, _Phaser$Sprite);

    function LittleDevil(game, x, y) {
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'littleDevil';
        var health = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
        var weapon = arguments[5];

        _classCallCheck(this, LittleDevil);

        // this.game.add.existing( this );

        var _this = _possibleConstructorReturn(this, (LittleDevil.__proto__ || Object.getPrototypeOf(LittleDevil)).call(this, game, x, y, key));

        _this.frequency = 70;
        _this.spread = 60;
        _this.health = health;
        _this.weapon = weapon;

        _this.startingX = x;

        // positioning
        _this.anchor.setTo(0.5);

        // physics properties
        game.physics.arcade.enable(_this);

        _this.body.gravity.y = 50;

        _this.animations.add('footShuffle', [0, 1, 2, 1, 2], 4);

        _this.animations.add('flap', [3, 4, 5, 4], 12, true);

        var footShuffle = _this.play('footShuffle');

        footShuffle.onComplete.addOnce(function () {
            _this.play('flap');
            _this.scheduleShooting();
        });

        // create and initiate timer
        _this.enemyTimer = _this.game.time.create(false); // keeps timer alive after it's done
        _this.enemyTimer.start();

        return _this;
    }

    _createClass(LittleDevil, [{
        key: 'scheduleShooting',
        value: function scheduleShooting() {

            var bullet = this.weapon.fire(this, this.game.player.x, this.game.player.y);

            if (bullet !== null) bullet.scale.setTo(0.5);

            // TODO: on bullet kill set scale back to 1

            this.enemyTimer.add(Phaser.Timer.SECOND * 2, this.scheduleShooting, this);
        }
    }, {
        key: 'damage',
        value: function damage(amount) {

            // sprite damage functionality
            _get(LittleDevil.prototype.__proto__ || Object.getPrototypeOf(LittleDevil.prototype), 'damage', this).call(this, amount);

            // play animation
            // this.animateGetHit();

            // when dead
            if (this.health <= 0) {
                this.emitDeath();
                this.enemyTimer.pause();
            }
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {
            var poof = this.game.add.sprite(this.x, this.y, 'poof');

            poof.anchor.setTo(0.5, 0.5);

            poof.scale.setTo(3, 3);

            var poofAnimation = poof.animations.add('poof');

            poofAnimation.onComplete.add(function () {

                poof.kill();
            }, this);

            poofAnimation.play(12, false);
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(LittleDevil.prototype.__proto__ || Object.getPrototypeOf(LittleDevil.prototype), 'reset', this).call(this, x, y, health);

            this.startingX = x;

            // resume timer
            this.enemyTimer.resume();
        }
    }, {
        key: 'update',
        value: function update() {

            //  Wave movement
            this.body.x = this.startingX + Math.sin(this.y / this.frequency) * this.spread;

            //  Squish and rotate ship for illusion of "banking"
            this.bank = Math.cos((this.y + 60) / this.frequency);
            //   this.scale.x = 0.5 - Math.abs(this.bank) / 8;
            this.scale.x = 1 - Math.abs(this.bank) / 8;
            //   this.angle = 180 - this.bank * 2;
            this.angle = this.bank * 2;

            // kill object at bottom
            if (this.top > this.game.world.height) {
                this.kill();
            }
        }
    }]);

    return LittleDevil;
}(Phaser.Sprite);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Peach = undefined;

var _player = __webpack_require__(1);

var _purpleBubbles = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Peach = exports.Peach = function (_Player) {
    _inherits(Peach, _Player);

    function Peach(game) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'peachShip';

        _classCallCheck(this, Peach);

        var _this = _possibleConstructorReturn(this, (Peach.__proto__ || Object.getPrototypeOf(Peach)).call(this, game, x, y, key));

        _this.smoothed = false;

        _this.weapon = new _purpleBubbles.PurpleBubbles(_this.game);

        _this.angle = 270;

        _this.animations.add('boosters', [0, 1, 2, 3], 6, true);
        _this.play('boosters');

        return _this;
    }

    return Peach;
}(_player.Player);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _superEventEmitter = __webpack_require__(27);

var _superEventEmitter2 = _interopRequireDefault(_superEventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = exports.Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        var _ref;

        _classCallCheck(this, Game);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args)));

        _this.player = null;

        _superEventEmitter2.default.mixin(_this);
        return _this;
    }

    return Game;
}(Phaser.Game);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bootstrapState = __webpack_require__(23);

var _loadingState = __webpack_require__(26);

var _gameState = __webpack_require__(25);

var _bowserWithPeach = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateManager = exports.StateManager = function () {
    function StateManager(game) {
        _classCallCheck(this, StateManager);

        this.game = null;

        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    _createClass(StateManager, [{
        key: 'setupStates',
        value: function setupStates() {
            this.game.state.add('Bootstrap', _bootstrapState.BootstrapState);
            this.game.state.add('Loading', _loadingState.LoadingState);
            this.game.state.add('Game', _gameState.GameState);
            this.game.state.add('BowserWithPeachDemo', _bowserWithPeach.BowserWithPeachDemo);
        }
    }, {
        key: 'setupNativeListeners',
        value: function setupNativeListeners() {
            this.game.state.onStateChange.add(function (newState, oldState) {
                console.debug('Enter to new state: %s', newState);
            });
        }
    }, {
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            this.game.on(_stateEvents2.default.BOOTSTRAP_COMPLETED, function () {
                _this.game.state.start('Loading');
            });

            this.game.on(_stateEvents2.default.LOADING_COMPLETED, function () {
                _this.game.state.start('Game');
                // this.game.state.start('BowserWithPeachDemo');
            });
        }
    }, {
        key: 'start',
        value: function start() {
            this.game.state.start('Bootstrap');
        }
    }]);

    return StateManager;
}();

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FireballParticles = function (_Phaser$Sprite) {
    _inherits(FireballParticles, _Phaser$Sprite);

    function FireballParticles(game, x, y) {
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'devilBlastParticles';
        var frame = arguments[4];

        _classCallCheck(this, FireballParticles);

        var _this = _possibleConstructorReturn(this, (FireballParticles.__proto__ || Object.getPrototypeOf(FireballParticles)).call(this, game, x, y, key, frame));

        _this.anchor.setTo(1, 0.5);

        _this.game.add.existing(_this);

        var impact = _this.animations.add('impact', null, 24);

        impact.onComplete.addOnce(function () {
            return _this.kill();
        });

        _this.play('impact');

        return _this;
    }

    return FireballParticles;
}(Phaser.Sprite);

var Fireball = function (_Phaser$Bullet) {
    _inherits(Fireball, _Phaser$Bullet);

    function Fireball(game, x, y, key, frame) {
        _classCallCheck(this, Fireball);

        var _this2 = _possibleConstructorReturn(this, (Fireball.__proto__ || Object.getPrototypeOf(Fireball)).call(this, game, x, y, key, frame));

        _this2.anchor.setTo(0.5, 0.5);

        _this2.smoothed = false;

        _this2.animations.add('burning', null, 12, true);

        _this2.play('burning');

        return _this2;
    }

    _createClass(Fireball, [{
        key: 'kill',
        value: function kill() {

            var particles = new FireballParticles(this.game, this.x, this.y);
            particles.angle = this.angle;
            _get(Fireball.prototype.__proto__ || Object.getPrototypeOf(Fireball.prototype), 'kill', this).call(this);
        }
    }]);

    return Fireball;
}(Phaser.Bullet);

var DevilBlast = exports.DevilBlast = function (_Phaser$Weapon) {
    _inherits(DevilBlast, _Phaser$Weapon);

    function DevilBlast(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DevilBlast';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, DevilBlast);

        var _this3 = _possibleConstructorReturn(this, (DevilBlast.__proto__ || Object.getPrototypeOf(DevilBlast)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this3.bulletClass = Fireball;

        _this3.createBullets(16, 'devilBlast', 0);

        _this3.bulletSpeed = 600;

        return _this3;
    }

    return DevilBlast;
}(Phaser.Weapon);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fireball = function (_Phaser$Bullet) {
    _inherits(Fireball, _Phaser$Bullet);

    function Fireball(game, x, y, key, frame) {
        _classCallCheck(this, Fireball);

        var _this = _possibleConstructorReturn(this, (Fireball.__proto__ || Object.getPrototypeOf(Fireball)).call(this, game, x, y, key, frame));

        _this.smoothed = false;

        _this.animations.add('rotate', [0, 1, 2, 3], 6, true);

        _this.play('rotate');

        return _this;
    }

    _createClass(Fireball, [{
        key: 'kill',
        value: function kill() {

            _get(Fireball.prototype.__proto__ || Object.getPrototypeOf(Fireball.prototype), 'kill', this).call(this);
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health) {

            _get(Fireball.prototype.__proto__ || Object.getPrototypeOf(Fireball.prototype), 'reset', this).call(this, x, y, health);
        }
    }]);

    return Fireball;
}(Phaser.Bullet);

var Fireballs = exports.Fireballs = function (_Phaser$Weapon) {
    _inherits(Fireballs, _Phaser$Weapon);

    function Fireballs(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Fireballs';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, Fireballs);

        var _this2 = _possibleConstructorReturn(this, (Fireballs.__proto__ || Object.getPrototypeOf(Fireballs)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = Fireball;

        _this2.createBullets(16, 'fireball', 0);

        return _this2;
    }

    _createClass(Fireballs, [{
        key: 'fire',
        value: function fire(from, x, y, offsetX, offsetY) {
            var bullet = _get(Fireballs.prototype.__proto__ || Object.getPrototypeOf(Fireballs.prototype), 'fire', this).call(this, from, x, y, offsetX, offsetY);
            if (bullet) bullet.scale.setTo(from.scale.x * 10);
        }
    }]);

    return Fireballs;
}(Phaser.Weapon);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlirtyGirl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _genericEnemy = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlirtyGirl = exports.FlirtyGirl = function (_GenericEnemy) {
    _inherits(FlirtyGirl, _GenericEnemy);

    function FlirtyGirl(game, x, y, key, health, weapon) {
        _classCallCheck(this, FlirtyGirl);

        var _this = _possibleConstructorReturn(this, (FlirtyGirl.__proto__ || Object.getPrototypeOf(FlirtyGirl)).call(this, game, x, y, key, health, weapon, '1'));

        _this.smoothed = false;

        // initialize animations
        _this.animations.add('getHit', ['2', '3', '4', '5', '4', '5', '2'], 6, false);

        return _this;
    }

    _createClass(FlirtyGirl, [{
        key: 'emitDeath',
        value: function emitDeath() {

            var emitter = this.game.add.emitter(this.x, this.y, 100);

            emitter.minParticleSpeed.setTo(-400, -400);
            emitter.maxParticleSpeed.setTo(400, 400);
            emitter.minParticleScale = this.scale.x;
            emitter.maxParticleScale = this.scale.x;
            emitter.setAlpha(1, 0, 0.5 * 1000, 'Cubic.easeIn');
            emitter.gravity = 200;

            emitter.makeParticles('flirtyGirl', '8');
            emitter.start(true, 500, null, 1);

            emitter.makeParticles('flirtyGirl', '9');
            emitter.start(true, 500, null, 1);
        }
    }]);

    return FlirtyGirl;
}(_genericEnemy.GenericEnemy);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlirtyGirls = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flirtyGirl = __webpack_require__(15);

var _lips = __webpack_require__(17);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlirtyGirls = exports.FlirtyGirls = function (_Phaser$Group) {
    _inherits(FlirtyGirls, _Phaser$Group);

    function FlirtyGirls(game) {
        _classCallCheck(this, FlirtyGirls);

        var _this = _possibleConstructorReturn(this, (FlirtyGirls.__proto__ || Object.getPrototypeOf(FlirtyGirls)).call(this, game));

        _this.weapon = new _lips.Lips(_this.game);

        return _this;
    }

    _createClass(FlirtyGirls, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _flirtyGirl.FlirtyGirl(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            enemy.damage(1);
            bullet.kill();
        }
    }]);

    return FlirtyGirls;
}(Phaser.Group);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LipsBullet = function (_Phaser$Bullet) {
    _inherits(LipsBullet, _Phaser$Bullet);

    function LipsBullet(game, x, y, key, frame) {
        _classCallCheck(this, LipsBullet);

        var _this = _possibleConstructorReturn(this, (LipsBullet.__proto__ || Object.getPrototypeOf(LipsBullet)).call(this, game, x, y, key, frame));

        _this.smoothed = false;

        _this.animations.add('lick', [0, 1, 2, 3, 2, 1, 0], 12, true);

        _this.play('lick');

        return _this;
    }

    _createClass(LipsBullet, [{
        key: 'kill',
        value: function kill() {

            _get(LipsBullet.prototype.__proto__ || Object.getPrototypeOf(LipsBullet.prototype), 'kill', this).call(this);
        }
    }, {
        key: 'reset',
        value: function reset(x, y) {

            _get(LipsBullet.prototype.__proto__ || Object.getPrototypeOf(LipsBullet.prototype), 'reset', this).call(this, x, y);
            // this.scale.setTo( scale / 2 );
        }
    }]);

    return LipsBullet;
}(Phaser.Bullet);

var Lips = exports.Lips = function (_Phaser$Weapon) {
    _inherits(Lips, _Phaser$Weapon);

    function Lips(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Lips';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, Lips);

        var _this2 = _possibleConstructorReturn(this, (Lips.__proto__ || Object.getPrototypeOf(Lips)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = LipsBullet;

        _this2.createBullets(16, 'lips', 0);

        _this2.fireAngle = Phaser.ANGLE_DOWN;

        _this2.bulletAngleOffset = 270;

        return _this2;
    }

    _createClass(Lips, [{
        key: 'fire',
        value: function fire(from, x, y, offsetX, offsetY) {
            var bullet = _get(Lips.prototype.__proto__ || Object.getPrototypeOf(Lips.prototype), 'fire', this).call(this, from, x, y, offsetX, offsetY);
            if (bullet) bullet.scale.setTo(from.scale.x / 2);
        }
    }]);

    return Lips;
}(Phaser.Weapon);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LittleDevils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _littleDevil = __webpack_require__(7);

var _devilFire = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LittleDevils = exports.LittleDevils = function (_Phaser$Group) {
    _inherits(LittleDevils, _Phaser$Group);

    function LittleDevils(game) {
        _classCallCheck(this, LittleDevils);

        var _this = _possibleConstructorReturn(this, (LittleDevils.__proto__ || Object.getPrototypeOf(LittleDevils)).call(this, game));

        _this.weapon = new _devilFire.DevilFire(_this.game);

        return _this;
    }

    _createClass(LittleDevils, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _littleDevil.LittleDevil(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            enemy.damage(1);
            bullet.kill();
        }
    }]);

    return LittleDevils;
}(Phaser.Group);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeachCoin = exports.PeachCoin = function (_Phaser$Sprite) {
    _inherits(PeachCoin, _Phaser$Sprite);

    function PeachCoin(game, x, y) {
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'peachCoin';
        var health = arguments[4];

        _classCallCheck(this, PeachCoin);

        var _this = _possibleConstructorReturn(this, (PeachCoin.__proto__ || Object.getPrototypeOf(PeachCoin)).call(this, game, x, y, key));
        // constructor( game, x, y, key = 'princessMushroom', health ) {

        game.physics.arcade.enable(_this);

        _this.body.gravity.y = 75;

        _this.anchor.setTo(0.5, 1);

        _this.game.add.existing(_this);

        // this.scale.setTo( 1.5, 1.5 );
        _this.scale.setTo(0.5, 0.5);

        return _this;
    }

    return PeachCoin;
}(Phaser.Sprite);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PurpleBubble = function (_Phaser$Bullet) {
    _inherits(PurpleBubble, _Phaser$Bullet);

    function PurpleBubble(game, x, y, key, frame) {
        _classCallCheck(this, PurpleBubble);

        var _this = _possibleConstructorReturn(this, (PurpleBubble.__proto__ || Object.getPrototypeOf(PurpleBubble)).call(this, game, x, y, key, frame));

        _this.animations.add('expandAndRetract', [0, 1], 3, true);

        _this.play('expandAndRetract');

        return _this;
    }

    return PurpleBubble;
}(Phaser.Bullet);

var PurpleBubbles = exports.PurpleBubbles = function (_Phaser$Weapon) {
    _inherits(PurpleBubbles, _Phaser$Weapon);

    function PurpleBubbles(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PurpleBubbles';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, PurpleBubbles);

        var _this2 = _possibleConstructorReturn(this, (PurpleBubbles.__proto__ || Object.getPrototypeOf(PurpleBubbles)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = PurpleBubble;

        _this2.createBullets(16, 'purpleBubble', 0);

        _this2.nextFire = 0;
        _this2.bulletSpeed = 1800;
        _this2.fireRate = 60;

        _this2.weaponFireSound = _this2.game.add.audio('weapon');

        return _this2;
    }

    _createClass(PurpleBubbles, [{
        key: 'fire',
        value: function fire() {

            var fired = _get(PurpleBubbles.prototype.__proto__ || Object.getPrototypeOf(PurpleBubbles.prototype), 'fire', this).call(this);

            if (fired) this.weaponFireSound.play();
        }
    }]);

    return PurpleBubbles;
}(Phaser.Weapon);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedDevil = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _littleDevil = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { GenericEnemy } from './generic-enemy';


var RedDevil = exports.RedDevil = function (_Phaser$Sprite) {
    _inherits(RedDevil, _Phaser$Sprite);

    function RedDevil(game, x, y, key, health, weapons) {
        _classCallCheck(this, RedDevil);

        // set variables
        var _this = _possibleConstructorReturn(this, (RedDevil.__proto__ || Object.getPrototypeOf(RedDevil)).call(this, game, x, y, key, health, weapons));

        _this.weapons = weapons;
        _this.health = health;

        // create and initiate timer
        _this.enemyTimer = _this.game.time.create(false); // keeps timer alive after it's done
        _this.enemyTimer.start();

        _this.anchor.setTo(0.5);

        _this.animations.add('flap', [0, 1], 2, true);

        _this.animations.add('flip', Phaser.ArrayUtils.numberArray(2, 9), 24);

        _this.animations.add('releaseButtDevils', Phaser.ArrayUtils.numberArray(11, 15).concat([14, 15, 14, 15]), 24);

        _this.animations.add('toot', [14, 15], 4);

        // physics properties
        game.physics.arcade.enable(_this);

        _this.scheduleShooting();

        return _this;
    }

    _createClass(RedDevil, [{
        key: 'scheduleShooting',
        value: function scheduleShooting() {

            this.weapons[0].fire(this, this.game.player.x, this.game.player.y, this.x > this.game.world.centerX ? -16 : 16, 13);

            this.enemyTimer.add(Phaser.Timer.SECOND * 4, this.scheduleShooting, this);

            this.enemyTimer.add(Phaser.Timer.SECOND * 2, function () {
                var _this2 = this;

                // let flip    = this.play( 'flip' );
                var flip = this.play('releaseButtDevils');

                flip.onComplete.addOnce(function () {
                    _this2.weapons[1].fire(_this2, _this2.game.player.x, _this2.game.player.y, _this2.x > _this2.game.world.centerX ? -35 : 35, 55);

                    _this2.play('toot');

                    _this2.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                        _this2.play('flap');
                    }, _this2);
                });
            }, this);
        }
    }, {
        key: 'damage',
        value: function damage(amount) {

            // sprite damage functionality
            _get(RedDevil.prototype.__proto__ || Object.getPrototypeOf(RedDevil.prototype), 'damage', this).call(this, amount);

            // play animation
            // this.animateGetHit();

            // when dead
            if (this.health <= 0) {
                this.emitDeath();
                this.enemyTimer.pause();
            }
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(RedDevil.prototype.__proto__ || Object.getPrototypeOf(RedDevil.prototype), 'reset', this).call(this, x, y, health);

            if (x > this.game.world.centerX) {
                this.scale.setTo(-1, 1);
            } else {
                this.scale.setTo(1, 1);
            }

            var descend = this.game.add.tween(this).to({ x: x, y: 150 }, 2000, "Sine.easeInOut");

            descend.onComplete.addOnce(function () {
                this.enemyTimer.resume();this.play('flap');
            }, this);

            descend.start();
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {

            var x = this.x;
            var y = this.y;

            var poof = this.game.add.sprite(x, y, 'poof');

            poof.anchor.setTo(0.5, 0.5);

            poof.scale.setTo(9, 9);

            var poofAnimation = poof.animations.add('poof');

            poofAnimation.onComplete.add(function () {

                this.game.state.callbackContext.littleDevils.createEnemy(x - 43, y - 39, 12);
                this.game.state.callbackContext.littleDevils.createEnemy(x - 43, y, 12);
                this.game.state.callbackContext.littleDevils.createEnemy(x - 43, y + 39, 12);

                poof.kill();
            }, this);

            poofAnimation.play(12, false);
        }
    }]);

    return RedDevil;
}(Phaser.Sprite);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedDevils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redDevil = __webpack_require__(21);

var _devilBlast = __webpack_require__(13);

var _devilFire = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedDevils = exports.RedDevils = function (_Phaser$Group) {
    _inherits(RedDevils, _Phaser$Group);

    function RedDevils(game) {
        _classCallCheck(this, RedDevils);

        var _this = _possibleConstructorReturn(this, (RedDevils.__proto__ || Object.getPrototypeOf(RedDevils)).call(this, game));

        _this.weapons = [new _devilFire.DevilFire(_this.game), new _devilBlast.DevilBlast(_this.game)];

        return _this;
    }

    _createClass(RedDevils, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _redDevil.RedDevil(this.game, x, y, key, health, this.weapons);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            enemy.damage(1);
            bullet.kill();
        }
    }]);

    return RedDevils;
}(Phaser.Group);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapState = exports.BootstrapState = function (_Phaser$State) {
    _inherits(BootstrapState, _Phaser$State);

    function BootstrapState() {
        _classCallCheck(this, BootstrapState);

        return _possibleConstructorReturn(this, (BootstrapState.__proto__ || Object.getPrototypeOf(BootstrapState)).apply(this, arguments));
    }

    _createClass(BootstrapState, [{
        key: 'init',
        value: function init() {
            //stretches to fit screen
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.image('loader', 'assets/images/loader.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#000000';

            this.game.trigger(_stateEvents2.default.BOOTSTRAP_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return BootstrapState;
}(Phaser.State);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BowserWithPeachDemo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bowser = __webpack_require__(3);

var _bowsers = __webpack_require__(4);

var _peach = __webpack_require__(8);

var _player = __webpack_require__(1);

var _peachCoin = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BowserWithPeachDemo = exports.BowserWithPeachDemo = function (_Phaser$State) {
    _inherits(BowserWithPeachDemo, _Phaser$State);

    function BowserWithPeachDemo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BowserWithPeachDemo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BowserWithPeachDemo.__proto__ || Object.getPrototypeOf(BowserWithPeachDemo)).call.apply(_ref, [this].concat(args))), _this), _this.numLevels = 1, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BowserWithPeachDemo, [{
        key: 'init',
        value: function init(currentLevel) {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // level data
            this.currentLevel = currentLevel ? currentLevel : 1;
        }
    }, {
        key: 'render',
        value: function render() {
            this.game.debug.text(this.game.time.fps, 30, 30);
        }
    }, {
        key: 'create',
        value: function create() {

            this.game.juicy = this.game.plugins.add(new Phaser.Plugin.Juicy(this));

            this.game.time.advancedTiming = true;

            // stars
            var emitter = this.game.add.emitter(this.game.width / 2, 0);
            emitter.minParticleScale = 0.05;
            emitter.maxParticleScale = 0.2;
            emitter.width = this.game.width;
            emitter.setAlpha(1, 0, 1800, 'Cubic.easeIn');
            emitter.setYSpeed(150, 250);
            emitter.setXSpeed(0, 0);
            emitter.setRotation(0, 0);
            emitter.makeParticles('star');
            emitter.start(false, 2000, 50, 0);
            emitter.forEach(function (particle) {
                particle.tint = Phaser.ArrayUtils.getRandomItem([0x72747D, 0x3C3E45, 0xe5e7f0, 0xafb1b8, 0x630dd0]);
            });

            // this.loadLevel();

            this.game.player = new _player.Player(this.game, this.game.world.centerX, this.game.height - 100);

            this.bowsers = new _bowsers.Bowsers(this.game);

            this.bowser = new _bowser.Bowser(this.game, this.game.world.centerX, this.game.world.centerY, 'bowser', 12, this.bowsers.weapon);

            // this.bowser.events.onKilled.add(function( foo ) {

            //     console.log( foo );

            //     this.princessCoinTest   = new PeachCoin(
            //         this.game,
            //         this.bowser.x, 
            //         this.bowser.y
            //     );
            // }, this);

            // this.game.time.events.add(Phaser.Timer.SECOND * 3, function() {
            //     this.bowser.kill();
            // }, this);

            this.bowser.health = 50;

            this.bowser.body.velocity.x = 20;

            this.bowser.scale.setTo(0.3, 0.3);

            this.bowsers.add(this.bowser);

            this.peach = this.game.add.sprite(0, this.bowser.body.height * -1 + 48, 'peach');
            this.peach.animations.add('peekaboo', [0, 1, 2], 1, true);
            this.peach.play('peekaboo');
            this.peach.anchor.setTo(0.5, 1);

            this.bowser.addChild(this.peach);

            this.princessCoinTest = new _peachCoin.PeachCoin(this.game, this.game.world.centerX, this.game.world.centerY);

            this.game.trigger(_stateEvents2.default.EXAMPLE_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            // this.peach.x    = this.bowser.x;
            // this.peach.y    = this.bowser.top + 15;

            if (this.bowser.x < this.game.player.x) {
                this.peach.scale.setTo(-2, 2);
            } else {
                this.peach.scale.setTo(2, 2);
            }

            // player bullet hit enemy
            this.game.physics.arcade.overlap(this.game.player.weapon.bullets, this.bowser, function (bowser, bullet) {
                bullet.kill();
                bowser.damage(1);
            }, null, this);

            // enemy bullets & player detection
            this.game.physics.arcade.overlap(this.bowsers.weapon.bullets, this.game.player, function (player, bullet) {
                // shake the screen
                navigator.vibrate(150);
                bullet.kill();
                _this2.game.juicy.shake();
            }, null, this);

            this.game.physics.arcade.overlap(this.princessCoinTest, this.game.player, function (coin, player) {
                var x = _this2.game.player.x;
                var y = _this2.game.player.y;

                coin.kill();

                _this2.game.player.kill();

                var poof = _this2.game.add.sprite(x, y, 'poof');

                poof.anchor.setTo(0.5, 0.5);

                poof.scale.setTo(3, 3);

                var poofAnimation = poof.animations.add('poof');

                poofAnimation.onComplete.add(function () {
                    poof.kill();

                    this.game.player = new _peach.Peach(this.game, x, y);
                    this.game.player.weapon.trackSprite(this.game.player, 11, (this.game.player.body.halfWidth + 2) * -1);
                }, _this2);

                poofAnimation.play(12, false);
            }, null, this);

            if (this.game.player.alive && this.game.input.activePointer.isDown) {
                this.game.player.weapon.fire();
            }
        }
    }, {
        key: 'loadLevel',
        value: function loadLevel() {
            var _this3 = this;

            this.currentEnemyIndex = 0;
            this.levelData = JSON.parse(this.game.cache.getText('level' + this.currentLevel));

            // end of the level timer
            this.endOfLevelTimer = this.game.time.events.add(this.levelData.duration * Phaser.Timer.SECOND, function () {
                // this.bgMusic.stop();

                if (_this3.currentLevel < _this3.numLevels) {
                    _this3.currentLevel++;
                } else {
                    _this3.currentLevel = 1;
                }

                _this3.game.state.start('Game', true, false, _this3.currentLevel);
            });
            this.scheduleNextEnemy();
        }
    }, {
        key: 'scheduleNextEnemy',
        value: function scheduleNextEnemy() {
            var _this4 = this;

            var nextEnemy = this.levelData.enemies[this.currentEnemyIndex];
            var previousEnemy = this.levelData.enemies[this.currentEnemyIndex - 1];

            if (nextEnemy) {
                var nextTime = Phaser.Timer.SECOND * (nextEnemy.time - (this.currentEnemyIndex == 0 ? 0 : previousEnemy.time));

                this.nextEnemyTimer = this.game.time.events.add(nextTime, function () {
                    _this4.bowsers.createEnemy(nextEnemy.x * _this4.game.world.width, -100, nextEnemy.health, nextEnemy.key, nextEnemy.scale, nextEnemy.speedX, nextEnemy.speedY);
                    _this4.currentEnemyIndex++;
                    _this4.scheduleNextEnemy();
                });
            }
        }
    }]);

    return BowserWithPeachDemo;
}(Phaser.State);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bowsers = __webpack_require__(4);

var _coolInvaders = __webpack_require__(31);

var _flirtyGirls = __webpack_require__(16);

var _littleDevils = __webpack_require__(18);

var _peach = __webpack_require__(8);

var _player = __webpack_require__(1);

var _redDevils = __webpack_require__(22);

var _rainbowInvaders = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalObjects = {
    'bowsers': _bowsers.Bowsers,
    'coolInvaders': _coolInvaders.CoolInvaders,
    'flirtyGirls': _flirtyGirls.FlirtyGirls,
    'littleDevils': _littleDevils.LittleDevils,
    'rainbowInvaders': _rainbowInvaders.RainbowInvaders,
    'redDevils': _redDevils.RedDevils
};

var GameState = exports.GameState = function (_Phaser$State) {
    _inherits(GameState, _Phaser$State);

    function GameState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GameState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameState.__proto__ || Object.getPrototypeOf(GameState)).call.apply(_ref, [this].concat(args))), _this), _this.numLevels = 2, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GameState, [{
        key: 'init',
        value: function init(currentLevel) {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // level data
            this.currentLevel = currentLevel ? currentLevel : 1;
        }
    }, {
        key: 'render',
        value: function render() {
            this.game.debug.text(this.game.time.fps, 30, 30);
        }
    }, {
        key: 'create',
        value: function create() {

            this.game.juicy = this.game.plugins.add(new Phaser.Plugin.Juicy(this));

            this.game.time.advancedTiming = true;

            // stars
            var emitter = this.game.add.emitter(this.game.width / 2, 0);
            emitter.minParticleScale = 0.05;
            emitter.maxParticleScale = 0.2;
            emitter.width = this.game.width;
            emitter.setAlpha(1, 0, 1800, 'Cubic.easeIn');
            emitter.setYSpeed(150, 250);
            emitter.setXSpeed(0, 0);
            emitter.setRotation(0, 0);
            emitter.makeParticles('star');
            emitter.start(false, 2000, 50, 0);
            emitter.forEach(function (particle) {
                particle.tint = Phaser.ArrayUtils.getRandomItem([0x72747D, 0x3C3E45, 0xe5e7f0, 0xafb1b8, 0x630dd0]);
            });

            this.loadLevel();

            this.game.player = new _peach.Peach(this.game, this.game.world.centerX, this.game.height - 100);

            this.game.player.weapon.trackSprite(this.game.player, 11, (this.game.player.body.halfWidth + 2) * -1);

            this.game.trigger(_stateEvents2.default.EXAMPLE_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            if (this.game.player.alive && this.game.input.activePointer.isDown) {
                this.game.player.weapon.fire();
            }
            var self = this;

            this.levelData.groups.forEach(function (group) {

                var bullets = self[group].weapons ? self[group].weapons.map(function (w) {
                    return w.bullets;
                }) : self[group].weapon.bullets;

                _this2.game.physics.arcade.overlap(bullets, _this2.game.player, function (player, bullet) {
                    // shake the screen
                    navigator.vibrate(150);
                    bullet.kill();
                    _this2.game.juicy.shake();
                }, null, _this2);

                // enemies & player bullet overlap detection
                _this2.game.physics.arcade.overlap(_this2.game.player.weapon.bullets, self[group], self[group].damageEnemy, null, _this2);
            });
        }
    }, {
        key: 'loadLevel',
        value: function loadLevel() {
            var _this3 = this;

            this.currentEnemyIndex = 0;
            this.levelData = JSON.parse(this.game.cache.getText('level' + this.currentLevel));

            var self = this;

            this.levelData.groups.forEach(function (group) {
                self[group] = new globalObjects[group](self.game);
            });

            // end of the level timer
            this.endOfLevelTimer = this.game.time.events.add(this.levelData.duration * Phaser.Timer.SECOND, function () {
                // this.bgMusic.stop();

                if (_this3.currentLevel < _this3.numLevels) {
                    _this3.currentLevel++;
                } else {
                    _this3.currentLevel = 1;
                }

                _this3.game.state.start('Game', true, false, _this3.currentLevel);
            });
            this.scheduleNextEnemy();
        }
    }, {
        key: 'scheduleNextEnemy',
        value: function scheduleNextEnemy() {
            var _this4 = this;

            var nextEnemy = this.levelData.enemies[this.currentEnemyIndex];
            var previousEnemy = this.levelData.enemies[this.currentEnemyIndex - 1];

            if (nextEnemy) {
                var nextTime = Phaser.Timer.SECOND * (nextEnemy.time - (this.currentEnemyIndex == 0 ? 0 : previousEnemy.time));

                this.nextEnemyTimer = this.game.time.events.add(nextTime, function () {
                    //   this.bowsers.createEnemy(
                    _this4[nextEnemy.type].createEnemy(nextEnemy.x * _this4.game.world.width, -100, nextEnemy.health, nextEnemy.key, nextEnemy.scale, nextEnemy.speedX, nextEnemy.speedY);
                    _this4.currentEnemyIndex++;
                    _this4.scheduleNextEnemy();
                });
            }
        }
    }]);

    return GameState;
}(Phaser.State);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingState = exports.LoadingState = function (_Phaser$State) {
    _inherits(LoadingState, _Phaser$State);

    function LoadingState() {
        _classCallCheck(this, LoadingState);

        return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
    }

    _createClass(LoadingState, [{
        key: 'preload',
        value: function preload() {

            var loader = this.add.image(this.world.centerX, this.world.centerY, 'loader');
            loader.anchor.set(0.5, 0.5);
            this.load.setPreloadSprite(loader);

            this.load.atlasJSONHash('flirtyGirl', 'assets/images/flirty-girl.png', 'assets/images/flirty-girl.json');

            this.load.audio('weapon', 'assets/sounds/weapon.mp3');

            this.load.image('player', 'assets/images/player.png');
            this.load.image('peachCoin', 'assets/images/peach-coin.png');
            this.load.image('princessMushroom', 'assets/images/princess-mushroom.png');
            this.load.image('star', 'assets/images/star-particle.png');

            this.load.spritesheet('bowser', 'assets/images/bowser-voxel.png', 272, 196, 4, 1);
            this.load.spritesheet('bowserParticles', 'assets/images/bowser-voxel-particles.png', 31, 29);
            this.load.spritesheet('coolInvader', 'assets/images/cool-invader.png', 431, 275);
            this.load.spritesheet('coolInvaderParticles', 'assets/images/cool-invader-voxel-particles.png', 45, 52);
            this.load.spritesheet('devilBlast', 'assets/images/devil-blast.png', 123, 96);
            this.load.spritesheet('devilBlastParticles', 'assets/images/devil-blast-particles.png', 66, 168);
            this.load.spritesheet('devilFire', 'assets/images/devil-fire.png', 42, 35);
            this.load.spritesheet('fireball', 'assets/images/fireball.png', 8, 8);
            this.load.spritesheet('invaderBullet', 'assets/images/invader-bullet.png', 3, 7);
            this.load.spritesheet('lips', 'assets/images/lips.png', 25, 21);
            this.load.spritesheet('littleDevil', 'assets/images/butt-devils.png', 43, 39);
            this.load.spritesheet('peach', 'assets/images/peach.png', 12, 12);
            this.load.spritesheet('peachShip', 'assets/images/peach-ship.png', 52, 32);
            this.load.spritesheet('poof', 'assets/images/poof.png', 16, 15);
            this.load.spritesheet('purpleBubble', 'assets/images/purple-bubble.png', 14, 12);
            this.load.spritesheet('rainbowInvader', 'assets/images/rainbow-invader.png', 263, 174);
            this.load.spritesheet('rainbowInvaderParticles', 'assets/images/rainbow-invader-particles.png', 43, 52);
            this.load.spritesheet('redDevil', 'assets/images/red-devil.png', 160, 166);

            //load level data
            this.load.text('level1', 'assets/maps/level1.json');
            this.load.text('level2', 'assets/maps/level2.json');

            this.load.path = 'assets/images/fireball-particles/';
            this.load.images(['1', '2', '3']);
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.time.events.add(500, function () {
                _this2.game.trigger(_stateEvents2.default.LOADING_COMPLETED);
            });
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return LoadingState;
}(Phaser.State);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EventEmitter=t():e.EventEmitter=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl/)
	 * @name super-event-emitter
	 * @description Super small (2KB) and simple interpretation of popular event management.
	 * @version 4.1.4
	 * @license MIT
	 * @example
	 * var bar = {}; // Or any other object.
	 * EventEmitter.mixin(bar);
	 * bar.on('foo', function () {
	 *     console.log('foo event emitted');
	 * });
	 * bar.emit('foo');
	 */
"use strict";function i(e,t){var n="forEach"in Array.prototype;if(n)e.forEach(t);else for(var i=0;i<e.length;i+=1)t(e[i])}function r(e,t){var n="filter"in Array.prototype;if(n)return e.filter(t);for(var i=[],r=0;r<e.length;r+=1){var o=e[r];t(o)&&i.push(o)}return i}function o(e,t){if(!e)throw new Error(t)}function s(e){return"string"==typeof e}function a(e){return"function"==typeof e}function c(){return this instanceof c?void(this._listeners=[]):new c}var f=n(2),u={on:function(e,t,n){return o(s(e),"EventEmitter#on: name is not a string"),o(a(t),"EventEmitter#on: fn is not a function"),n=n||this,this._listeners.push({name:e,fn:t,ctx:n}),this},once:function(e,t,n){function i(){t.apply(n,arguments),r.off(e,i)}n=n||this;var r=this;return this.on(e,i,n),this},off:function(e,t){return this._listeners=e?r(this._listeners,function(n){return n.name!==e||!!a(t)&&n.fn!==t}):[],this},emit:function(e,t){return o(s(e),"EventEmitter#emit: name is not a string"),i(this._listeners,function(n){n.name===e&&n.fn.call(n.ctx,t);var i=/^all|\*$/.test(n.name);i&&n.fn.call(n.ctx,e,t)}),this}};u.addEventListener=u.addListener=u.bind=u.on,u.removeEventListener=u.removeListener=u.unbind=u.off,u.dispatchEventListener=u.dispatchListener=u.trigger=u.emit,c.prototype=u,c.mixin=function(e){var t=new c;for(var n in t)e[n]=t[n];return e},c.prototype.mixin=c.mixin,c.VERSION=f.version,e.exports=c},function(e,t){e.exports={name:"super-event-emitter",description:"Super small (2KB) and simple interpretation of popular event management.",version:"4.1.4",license:"MIT",author:{name:"Piotr Kowalski",email:"piecioshka@gmail.com",url:"https://piecioshka.pl/"},scripts:{build:"webpack --profile",watch:"webpack -w",test:"jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coverage:"istanbul cover jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coveralls:"npm run coverage && cat ./coverage/lcov.info | coveralls -v"},repository:{type:"git",url:"http://github.com/piecioshka/super-event-emitter.git"},devDependencies:{coveralls:"^2.11.12",istanbul:"^0.4.4",jasmine:"^2.4.1","json-loader":"^0.5.4","string-replace-loader":"^1.0.3",webpack:"^1.12.14"},files:["dist","lib","index.js","package.json","README.md"],keywords:["super","event","emitter","mixin","on","off","emit","trigger","simple"],main:"./dist/super-event-emitter.min.js"}}])});
//# sourceMappingURL=super-event-emitter.min.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(9);

var _stateManager = __webpack_require__(10);

var _game2 = __webpack_require__(2);

var _game3 = _interopRequireDefault(_game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.Game(_game3.default.WIDTH, _game3.default.HEIGHT, 'app', Phaser.CANVAS);
var manager = new _stateManager.StateManager(game);

function start() {
  manager.start();
}

if (window.cordova) {
  document.addEventListener('deviceready', start, false);
} else {
  document.addEventListener('DOMContentLoaded', start, false);
}

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoolInvader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _genericEnemy = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoolInvader = exports.CoolInvader = function (_GenericEnemy) {
    _inherits(CoolInvader, _GenericEnemy);

    function CoolInvader(game, x, y, key, health, weapon) {
        _classCallCheck(this, CoolInvader);

        // positioning
        var _this = _possibleConstructorReturn(this, (CoolInvader.__proto__ || Object.getPrototypeOf(CoolInvader)).call(this, game, x, y, key, health, weapon));

        _this.anchor.setTo(0.5, 1);

        // initialize animations
        _this.animations.add('flap', [0, 1], 2, true);
        _this.getHit = _this.animations.add('getHit', [2, 3, 4, 5], 12, false);

        _this.getHit.onComplete.add(function () {
            return _this.play('flap');
        });

        _this.play('flap');

        return _this;
    }

    _createClass(CoolInvader, [{
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(CoolInvader.prototype.__proto__ || Object.getPrototypeOf(CoolInvader.prototype), 'reset', this).call(this, x, y, health, key, scale, speedX, speedY);

            this.scale.setTo(scale / 3);
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {

            var emitter = this.game.add.emitter(this.x, this.y, 100);

            emitter.blendMode = Phaser.blendModes.ADD;
            emitter.gravity.y = 600;
            emitter.setAlpha(1, 0, 500, 'Cubic.easeIn');
            emitter.setAngle(-180, 180, 0, 2400);
            emitter.setRotation(0, 0);
            emitter.minParticleScale = this.scale.x / 3 * 0.25;
            emitter.maxParticleScale = this.scale.x / 3;
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);

            emitter.makeParticles('coolInvaderParticles', [0, 1, 2]);
            emitter.start(true, 500, null, 100);
        }
    }]);

    return CoolInvader;
}(_genericEnemy.GenericEnemy);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoolInvaders = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coolInvader = __webpack_require__(30);

var _invaderBullets = __webpack_require__(32);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoolInvaders = exports.CoolInvaders = function (_Phaser$Group) {
    _inherits(CoolInvaders, _Phaser$Group);

    function CoolInvaders(game) {
        _classCallCheck(this, CoolInvaders);

        var _this = _possibleConstructorReturn(this, (CoolInvaders.__proto__ || Object.getPrototypeOf(CoolInvaders)).call(this, game));

        _this.weapon = new _invaderBullets.InvaderBullets(_this.game);

        return _this;
    }

    _createClass(CoolInvaders, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _coolInvader.CoolInvader(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            if (enemy.getHit.isPlaying === false) {
                enemy.damage(1);

                bullet.kill();
            }
        }
    }]);

    return CoolInvaders;
}(Phaser.Group);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvaderBullet = function (_Phaser$Bullet) {
    _inherits(InvaderBullet, _Phaser$Bullet);

    function InvaderBullet(game, x, y, key, frame) {
        _classCallCheck(this, InvaderBullet);

        var _this = _possibleConstructorReturn(this, (InvaderBullet.__proto__ || Object.getPrototypeOf(InvaderBullet)).call(this, game, x, y, key, frame));

        _this.smoothed = false;

        _this.animations.add('gyrate', [0, 1], 2, true);

        _this.play('gyrate');

        return _this;
    }

    return InvaderBullet;
}(Phaser.Bullet);

var InvaderBullets = exports.InvaderBullets = function (_Phaser$Weapon) {
    _inherits(InvaderBullets, _Phaser$Weapon);

    function InvaderBullets(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'InvaderBullets';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, InvaderBullets);

        var _this2 = _possibleConstructorReturn(this, (InvaderBullets.__proto__ || Object.getPrototypeOf(InvaderBullets)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = InvaderBullet;

        _this2.createBullets(16, 'invaderBullet', 0);

        _this2.fireAngle = Phaser.ANGLE_DOWN;

        _this2.bulletAngleOffset = 90;

        return _this2;
    }

    _createClass(InvaderBullets, [{
        key: 'fire',
        value: function fire(from, x, y, offsetX, offsetY) {

            var bullet = _get(InvaderBullets.prototype.__proto__ || Object.getPrototypeOf(InvaderBullets.prototype), 'fire', this).call(this, from, x, y, offsetX, offsetY);
            if (bullet) bullet.scale.setTo(from.scale.x * 15);
        }
    }]);

    return InvaderBullets;
}(Phaser.Weapon);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RainbowInvader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _genericEnemy = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RainbowInvader = exports.RainbowInvader = function (_GenericEnemy) {
    _inherits(RainbowInvader, _GenericEnemy);

    function RainbowInvader(game, x, y, key, health, weapon) {
        _classCallCheck(this, RainbowInvader);

        // positioning
        var _this = _possibleConstructorReturn(this, (RainbowInvader.__proto__ || Object.getPrototypeOf(RainbowInvader)).call(this, game, x, y, key, health, weapon));

        _this.anchor.setTo(0.5, 1);

        // initialize animations
        _this.animations.add('flap', [0, 1], 2, true);
        _this.getHit = _this.animations.add('getHit', [2, 3, 4, 5], 12, false);

        _this.getHit.onComplete.add(function () {
            return _this.play('flap');
        });

        _this.play('flap');

        return _this;
    }

    _createClass(RainbowInvader, [{
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(RainbowInvader.prototype.__proto__ || Object.getPrototypeOf(RainbowInvader.prototype), 'reset', this).call(this, x, y, health, key, scale, speedX, speedY);

            this.scale.setTo(scale / 3);
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {

            var emitter = this.game.add.emitter(this.x, this.y, 100);

            emitter.blendMode = Phaser.blendModes.ADD;
            emitter.gravity.y = 600;
            emitter.setAlpha(1, 0, 500, 'Cubic.easeIn');
            emitter.setAngle(-180, 180, 0, 2400);
            emitter.setRotation(0, 0);
            emitter.minParticleScale = this.scale.x / 3 * 0.25;
            emitter.maxParticleScale = this.scale.x / 3;
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);

            emitter.makeParticles('rainbowInvaderParticles', Phaser.ArrayUtils.numberArray(0, 8));
            emitter.start(true, 500, null, 100);
        }
    }]);

    return RainbowInvader;
}(_genericEnemy.GenericEnemy);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RainbowInvaders = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rainbowInvader = __webpack_require__(33);

var _rainbowInvaderBullets = __webpack_require__(35);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RainbowInvaders = exports.RainbowInvaders = function (_Phaser$Group) {
    _inherits(RainbowInvaders, _Phaser$Group);

    function RainbowInvaders(game) {
        _classCallCheck(this, RainbowInvaders);

        var _this = _possibleConstructorReturn(this, (RainbowInvaders.__proto__ || Object.getPrototypeOf(RainbowInvaders)).call(this, game));

        _this.weapon = new _rainbowInvaderBullets.RainbowInvaderBullets(_this.game);

        return _this;
    }

    _createClass(RainbowInvaders, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _rainbowInvader.RainbowInvader(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            if (enemy.getHit.isPlaying === false) {
                enemy.damage(1);

                bullet.kill();
            }
        }
    }]);

    return RainbowInvaders;
}(Phaser.Group);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RainbowInvaderBullet = function (_Phaser$Bullet) {
    _inherits(RainbowInvaderBullet, _Phaser$Bullet);

    function RainbowInvaderBullet(game, x, y, key, frame) {
        _classCallCheck(this, RainbowInvaderBullet);

        var _this = _possibleConstructorReturn(this, (RainbowInvaderBullet.__proto__ || Object.getPrototypeOf(RainbowInvaderBullet)).call(this, game, x, y, key, frame));

        _this.smoothed = false;

        _this.animations.add('gyrate', [0, 1], 2, true);

        _this.play('gyrate');

        return _this;
    }

    _createClass(RainbowInvaderBullet, [{
        key: 'update',
        value: function update() {

            _get(RainbowInvaderBullet.prototype.__proto__ || Object.getPrototypeOf(RainbowInvaderBullet.prototype), 'update', this).call(this);

            this.tint = Phaser.ArrayUtils.getRandomItem([0xCF4242, 0xF5972A, 0xE39D4B, 0xECF030, 0x289E65, 0x3F5CF2, 0xA24DD6, 0xF69EF7]);
        }
    }]);

    return RainbowInvaderBullet;
}(Phaser.Bullet);

var RainbowInvaderBullets = exports.RainbowInvaderBullets = function (_Phaser$Weapon) {
    _inherits(RainbowInvaderBullets, _Phaser$Weapon);

    function RainbowInvaderBullets(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'RainbowInvaderBullets';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, RainbowInvaderBullets);

        var _this2 = _possibleConstructorReturn(this, (RainbowInvaderBullets.__proto__ || Object.getPrototypeOf(RainbowInvaderBullets)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = RainbowInvaderBullet;

        _this2.createBullets(16, 'invaderBullet', 0);

        _this2.fireAngle = Phaser.ANGLE_DOWN;

        _this2.bulletAngleOffset = 90;

        return _this2;
    }

    _createClass(RainbowInvaderBullets, [{
        key: 'fire',
        value: function fire(from, x, y, offsetX, offsetY) {

            var bullet = _get(RainbowInvaderBullets.prototype.__proto__ || Object.getPrototypeOf(RainbowInvaderBullets.prototype), 'fire', this).call(this, from, x, y, offsetX, offsetY);
            if (bullet) bullet.scale.setTo(from.scale.x * 15);
        }
    }]);

    return RainbowInvaderBullets;
}(Phaser.Weapon);

/***/ })
/******/ ]);