// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"phaser-plugins/juicy.js":[function(require,module,exports) {
'use strict';
/**
* @author       Jeremy Dowell <jeremy@codevinsky.com>
* @license      {@link http://www.wtfpl.net/txt/copying/|WTFPL}
*/

/**
* Creates a new `Juicy` object.
*
* @class Phaser.Plugin.Juicy
* @constructor
*
* @param {Phaser.Game} game Current game instance.
*/

Phaser.Plugin.Juicy = function (game) {
  Phaser.Plugin.call(this, game);
  /**
  * @property {Phaser.Rectangle} _boundsCache - A reference to the current world bounds.
  * @private
  */

  this._boundsCache = Phaser.Utils.extend(false, {}, this.game.world.bounds);
  /**
  * @property {number} _shakeWorldMax - The maximum world shake radius
  * @private
  */

  this._shakeWorldMax = 20;
  /**
  * @property {number} _shakeWorldTime - The maximum world shake time
  * @private
  */

  this._shakeWorldTime = 0;
  /**
  * @property {number} _trailCounter - A count of how many trails we're tracking
  * @private
  */

  this._trailCounter = 0;
  /**
  * @property {object} _overScales - An object containing overscaling configurations
  * @private
  */

  this._overScales = {};
  /**
  * @property {number} _overScalesCounter - A count of how many overScales we're tracking
  * @private
  */

  this._overScalesCounter = 0;
};

Phaser.Plugin.Juicy.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Juicy.prototype.constructor = Phaser.Plugin.Juicy;
/**
* Creates a new `Juicy.ScreenFlash` object.
*
* @class Phaser.Plugin.Juicy.ScreenFlash
* @constructor
*
* @param {Phaser.Game} game -  Current game instance.
* @param {string} color='white' - The color to flash the screen.
* @memberof Phaser.Plugin.Juicy
*/

Phaser.Plugin.Juicy.ScreenFlash = function (game, color) {
  color = color || 'white';
  var bmd = game.add.bitmapData(game.width, game.height);
  bmd.ctx.fillStyle = 'white';
  bmd.ctx.fillRect(0, 0, game.width, game.height);
  Phaser.Sprite.call(this, game, 0, 0, bmd);
  this.alpha = 0;
};

Phaser.Plugin.Juicy.ScreenFlash.prototype = Object.create(Phaser.Sprite.prototype);
Phaser.Plugin.Juicy.ScreenFlash.prototype.constructor = Phaser.Plugin.Juicy.ScreenFlash;
/*
* Flashes the screen
*
* @param {number} [maxAlpha=1] - The maximum alpha to flash the screen to
* @param {number} [duration=100] - The duration of the flash in milliseconds
* @method Phaser.Plugin.Juicy.ScreenFlash.prototype.flash
* @memberof Phaser.Plugin.Juicy.ScreenFlash
*/

Phaser.Plugin.Juicy.ScreenFlash.prototype.flash = function (maxAlpha, duration) {
  maxAlpha = maxAlpha || 1;
  duration = duration || 100;
  var flashTween = this.game.add.tween(this).to({
    alpha: maxAlpha
  }, 100, Phaser.Easing.Bounce.InOut, true, 0, 0, true);
  flashTween.onComplete.add(function () {
    this.alpha = 0;
  }, this);
};
/**
* Creates a new `Juicy.Trail` object.
*
* @class Phaser.Plugin.Juicy.Trail
* @constructor
*
* @param {Phaser.Game} game -  Current game instance.
* @param {number} [trailLength=100] - The length of the trail
* @param {number} [color=0xFFFFFF] - The color of the trail
* @memberof Phaser.Plugin.Juicy
*/


Phaser.Plugin.Juicy.Trail = function (game, trailLength, color) {
  Phaser.Graphics.call(this, game, 0, 0);
  /**
  * @property {Phaser.Sprite} target - The target sprite whose movement we want to create the trail from
  */

  this.target = null;
  /**
  * @property {number} trailLength - The number of segments to use to create the trail
  */

  this.trailLength = trailLength || 100;
  /**
  * @property {number} trailWidth - The width of the trail
  */

  this.trailWidth = 15.0;
  /**
  * @property {boolean} trailScale - Whether or not to taper the trail towards the end
  */

  this.trailScaling = false;
  /**
  * @property {Phaser.Sprite} trailColor - The color of the trail
  */

  this.trailColor = color || 0xFFFFFF;
  /**
  * @property {Array<Phaser.Point>} _segments - A historical collection of the previous position of the target
  * @private
  */

  this._segments = [];
  /**
  * @property {Array<number>} _verts - A collection of vertices created from _segments
  * @private
  */

  this._verts = [];
  /**
  * @property {Array<Phaser.Point>} _segments - A collection of indices created from _verts
  * @private
  */

  this._indices = [];
};

Phaser.Plugin.Juicy.Trail.prototype = Object.create(Phaser.Graphics.prototype);
Phaser.Plugin.Juicy.Trail.prototype.constructor = Phaser.Plugin.Juicy.Trail;
/**
* Updates the Trail if a target is set
*
* @method Phaser.Plugin.Juicy.Trail#update
* @memberof Phaser.Plugin.Juicy.Trail
*/

Phaser.Plugin.Juicy.Trail.prototype.update = function () {
  if (this.target) {
    this.x = this.target.x;
    this.y = this.target.y;
    this.addSegment(this.target.x, this.target.y);
    this.redrawSegments(this.target.x, this.target.y);
  }
};
/**
* Adds a segment to the segments list and culls the list if it is too long
* 
* @param {number} [x] - The x position of the point
* @param {number} [y] - The y position of the point
* 
* @method Phaser.Plugin.Juicy.Trail#addSegment
* @memberof Phaser.Plugin.Juicy.Trail
*/


Phaser.Plugin.Juicy.Trail.prototype.addSegment = function (x, y) {
  var segment;

  while (this._segments.length > this.trailLength) {
    segment = this._segments.shift();
  }

  if (!segment) {
    segment = new Phaser.Point();
  }

  segment.x = x;
  segment.y = y;

  this._segments.push(segment);
};
/**
* Creates and draws the triangle trail from segments
* 
* @param {number} [offsetX] - The x position of the object
* @param {number} [offsetY] - The y position of the object
* 
* @method Phaser.Plugin.Juicy.Trail#redrawSegment
* @memberof Phaser.Plugin.Juicy.Trail
*/


Phaser.Plugin.Juicy.Trail.prototype.redrawSegments = function (offsetX, offsetY) {
  this.clear();
  var s1,
      // current segment
  s2,
      // previous segment
  vertIndex = 0,
      // keeps track of which vertex index we're at
  offset,
      // temporary storage for amount to extend line outwards, bigger = wider
  ang,
      //temporary storage of the inter-segment angles
  sin = 0,
      // as above
  cos = 0; // again as above
  // first we make sure that the vertice list is the same length as we we want
  // each segment (except the first) will create to vertices with two values each

  if (this._verts.length !== (this._segments.length - 1) * 4) {
    // if it's not correct, we clear the entire list
    this._verts = [];
  } // now we loop over all the segments, the list has the "youngest" segment at the end


  var prevAng = 0;

  for (var j = 0; j < this._segments.length; ++j) {
    // store the active segment for convenience
    s1 = this._segments[j]; // if there's a previous segment, time to do some math

    if (s2) {
      // we calculate the angle between the two segments
      // the result will be in radians, so adding half of pi will "turn" the angle 90 degrees
      // that means we can use the sin and cos values to "expand" the line outwards
      ang = Math.atan2(s1.y - s2.y, s1.x - s2.x) + Math.PI / 2;
      sin = Math.sin(ang);
      cos = Math.cos(ang); // now it's time to creat ethe two vertices that will represent this pair of segments
      // using a loop here is probably a bit overkill since it's only two iterations

      for (var i = 0; i < 2; ++i) {
        // this makes the first segment stand out to the "left" of the line
        // annd the second to the right, changing that magic number at the end will alther the line width
        offset = (-0.5 + i / 1) * this.trailWidth; // if trail scale effect is enabled, we scale down the offset as we move down the list

        if (this.trailScaling) {
          offset *= j / this._segments.length;
        } // finally we put to values in the vert list
        // using the segment coordinates as a base we add the "extended" point
        // offsetX and offsetY are used her to move the entire trail


        this._verts[vertIndex++] = s1.x + cos * offset - offsetX;
        this._verts[vertIndex++] = s1.y + sin * offset - offsetY;
      }
    } // finally store the current segment as the previous segment and go for another round


    s2 = s1.copyTo({});
  } // we need at least four vertices to draw something


  if (this._verts.length >= 8) {
    // now, we have a triangle "strip", but flash can't draw that without 
    // instructions for which vertices to connect, so it's time to make those
    // here, we loop over all the vertices and pair them together in triangles
    // each group of four vertices forms two triangles
    for (var k = 0; k < this._verts.length; k++) {
      this._indices[k * 6 + 0] = k * 2 + 0;
      this._indices[k * 6 + 1] = k * 2 + 1;
      this._indices[k * 6 + 2] = k * 2 + 2;
      this._indices[k * 6 + 3] = k * 2 + 1;
      this._indices[k * 6 + 4] = k * 2 + 2;
      this._indices[k * 6 + 5] = k * 2 + 3;
    }

    this.beginFill(this.trailColor);
    this.drawTriangles(this._verts, this._indices);
    this.endFill();
  }
};
/**
* Add a Sprite reference to this Plugin.
* All this plugin does is move the Sprite across the screen slowly.
* @type {Phaser.Sprite}
*/

/**
* Begins the screen shake effect
* 
* @param {number} [duration=20] - The duration of the screen shake
* @param {number} [strength=20] - The strength of the screen shake
* 
* @method Phaser.Plugin.Juicy#redrawSegment
* @memberof Phaser.Plugin.Juicy
*/


Phaser.Plugin.Juicy.prototype.shake = function (duration, strength) {
  this._shakeWorldTime = duration || 20;
  this._shakeWorldMax = strength || 20;
  this.game.world.setBounds(this._boundsCache.x - this._shakeWorldMax, this._boundsCache.y - this._shakeWorldMax, this._boundsCache.width + this._shakeWorldMax, this._boundsCache.height + this._shakeWorldMax);
};
/**
* Creates a 'Juicy.ScreenFlash' object
*
* @param {string} color - The color of the screen flash
* 
* @type {Phaser.Plugin.Juicy.ScreenFlash}
*/


Phaser.Plugin.Juicy.prototype.createScreenFlash = function (color) {
  return new Phaser.Plugin.Juicy.ScreenFlash(this.game, color);
};
/**
* Creates a 'Juicy.Trail' object
*
* @param {number} length - The length of the trail
* @param {number} color - The color of the trail
* 
* @type {Phaser.Plugin.Juicy.Trail}
*/


Phaser.Plugin.Juicy.prototype.createTrail = function (length, color) {
  return new Phaser.Plugin.Juicy.Trail(this.game, length, color);
};
/**
* Creates the over scale effect on the given object
*
* @param {Phaser.Sprite} object - The object to over scale
* @param {number} [scale=1.5] - The scale amount to overscale by
* @param {Phaser.Point} [initialScale=new Phaser.Point(1,1)] - The initial scale of the object
* 
*/


Phaser.Plugin.Juicy.prototype.overScale = function (object, scale, initialScale) {
  scale = scale || 1.5;
  var id = this._overScalesCounter++;
  initialScale = initialScale || new Phaser.Point(1, 1);
  var scaleObj = this._overScales[id];

  if (!scaleObj) {
    scaleObj = {
      object: object,
      cache: initialScale.copyTo({})
    };
  }

  scaleObj.scale = scale;
  this._overScales[id] = scaleObj;
};
/**
* Creates the jelly effect on the given object
*
* @param {Phaser.Sprite} object - The object to gelatinize
* @param {number} [strength=0.2] - The strength of the effect
* @param {number} [delay=0] - The delay of the snap-back tween. 50ms are automaticallly added to whatever the delay amount is.
* @param {Phaser.Point} [initialScale=new Phaser.Point(1,1)] - The initial scale of the object
* 
*/


Phaser.Plugin.Juicy.prototype.jelly = function (object, strength, delay, initialScale) {
  strength = strength || 0.2;
  delay = delay || 0;
  initialScale = initialScale || new Phaser.Point(1, 1);
  this.game.add.tween(object.scale).to({
    x: initialScale.x + initialScale.x * strength
  }, 50, Phaser.Easing.Quadratic.InOut, true, delay).to({
    x: initialScale.x
  }, 600, Phaser.Easing.Elastic.Out, true);
  this.game.add.tween(object.scale).to({
    y: initialScale.y + initialScale.y * strength
  }, 50, Phaser.Easing.Quadratic.InOut, true, delay + 50).to({
    y: initialScale.y
  }, 600, Phaser.Easing.Elastic.Out, true);
};
/**
* Creates the mouse stretch effect on the given object
*
* @param {Phaser.Sprite} object - The object to mouse stretch
* @param {number} [strength=0.5] - The strength of the effect
* @param {Phaser.Point} [initialScale=new Phaser.Point(1,1)] - The initial scale of the object
* 
*/


Phaser.Plugin.Juicy.prototype.mouseStretch = function (object, strength, initialScale) {
  strength = strength || 0.5;
  initialScale = initialScale || new Phaser.Point(1, 1);
  object.scale.x = initialScale.x + Math.abs(object.x - this.game.input.activePointer.x) / 100 * strength;
  object.scale.y = initialScale.y + initialScale.y * strength - object.scale.x * strength;
};
/**
* Runs the core update function and causes screen shake and overscaling effects to occur if they are queued to do so.
*
* @method Phaser.Plugin.Juicy#update
* @memberof Phaser.Plugin.Juicy
*/


Phaser.Plugin.Juicy.prototype.update = function () {
  var scaleObj; // Screen Shake

  if (this._shakeWorldTime > 0) {
    var magnitude = this._shakeWorldTime / this._shakeWorldMax * this._shakeWorldMax;
    var x = this.game.rnd.integerInRange(-magnitude, magnitude);
    var y = this.game.rnd.integerInRange(-magnitude, magnitude);
    this.game.camera.x = x;
    this.game.camera.y = y;
    this._shakeWorldTime--;

    if (this._shakeWorldTime <= 0) {
      this.game.world.setBounds(this._boundsCache.x, this._boundsCache.x, this._boundsCache.width, this._boundsCache.height);
    }
  } // over scales


  for (var s in this._overScales) {
    if (this._overScales.hasOwnProperty(s)) {
      scaleObj = this._overScales[s];

      if (scaleObj.scale > 0.01) {
        scaleObj.object.scale.x = scaleObj.scale * scaleObj.cache.x;
        scaleObj.object.scale.y = scaleObj.scale * scaleObj.cache.y;
        scaleObj.scale -= this.game.time.elapsed * scaleObj.scale * 0.35;
      } else {
        scaleObj.object.scale.x = scaleObj.cache.x;
        scaleObj.object.scale.y = scaleObj.cache.y;
        delete this._overScales[s];
      }
    }
  }
}; // for browserify compatibility


if (module && module.exports) {
  module.exports = Phaser.Plugin.Juicy;
} // Draw Triangles Polyfill for back compatibility


if (!Phaser.Graphics.prototype.drawTriangle) {
  Phaser.Graphics.prototype.drawTriangle = function (points, cull) {
    var triangle = new Phaser.Polygon(points);

    if (cull) {
      var cameraToFace = new Phaser.Point(this.game.camera.x - points[0].x, this.game.camera.y - points[0].y);
      var ab = new Phaser.Point(points[1].x - points[0].x, points[1].y - points[0].y);
      var cb = new Phaser.Point(points[1].x - points[2].x, points[1].y - points[2].y);
      var faceNormal = cb.cross(ab);

      if (cameraToFace.dot(faceNormal) > 0) {
        this.drawPolygon(triangle);
      }
    } else {
      this.drawPolygon(triangle);
    }

    return;
  };
  /*
  * Draws {Phaser.Polygon} triangles 
  *
  * @param {Array<Phaser.Point>|Array<number>} vertices - An array of Phaser.Points or numbers that make up the vertices of the triangles
  * @param {Array<number>} {indices=null} - An array of numbers that describe what order to draw the vertices in
  * @param {boolean} [cull=false] - Should we check if the triangle is back-facing
  * @method Phaser.Graphics.prototype.drawTriangles
  */


  Phaser.Graphics.prototype.drawTriangles = function (vertices, indices, cull) {
    var point1 = new Phaser.Point(),
        point2 = new Phaser.Point(),
        point3 = new Phaser.Point(),
        points = [],
        i;

    if (!indices) {
      if (vertices[0] instanceof Phaser.Point) {
        for (i = 0; i < vertices.length / 3; i++) {
          this.drawTriangle([vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]], cull);
        }
      } else {
        for (i = 0; i < vertices.length / 6; i++) {
          point1.x = vertices[i * 6 + 0];
          point1.y = vertices[i * 6 + 1];
          point2.x = vertices[i * 6 + 2];
          point2.y = vertices[i * 6 + 3];
          point3.x = vertices[i * 6 + 4];
          point3.y = vertices[i * 6 + 5];
          this.drawTriangle([point1, point2, point3], cull);
        }
      }
    } else {
      if (vertices[0] instanceof Phaser.Point) {
        for (i = 0; i < indices.length / 3; i++) {
          points.push(vertices[indices[i * 3]]);
          points.push(vertices[indices[i * 3 + 1]]);
          points.push(vertices[indices[i * 3 + 2]]);

          if (points.length === 3) {
            this.drawTriangle(points, cull);
            points = [];
          }
        }
      } else {
        for (i = 0; i < indices.length; i++) {
          point1.x = vertices[indices[i] * 2];
          point1.y = vertices[indices[i] * 2 + 1];
          points.push(point1.copyTo({}));

          if (points.length === 3) {
            this.drawTriangle(points, cull);
            points = [];
          }
        }
      }
    }
  };
}
},{}],"../../.npm-global/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41619" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.npm-global/lib/node_modules/parcel/src/builtins/hmr-runtime.js","phaser-plugins/juicy.js"], null)
//# sourceMappingURL=/juicy.40c9e84d.js.map