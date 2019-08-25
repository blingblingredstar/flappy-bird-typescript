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
})({"ts/Image.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpriteImage = function SpriteImage(sX, sY, width, height) {
  _classCallCheck(this, SpriteImage);

  this.sX = sX;
  this.sY = sY;
  this.width = width;
  this.height = height;
};

exports.default = SpriteImage;
},{}],"img/sprite.png":[function(require,module,exports) {
module.exports = "/sprite.15e07ed1.png";
},{}],"ts/sprite.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sprite_png_1 = __importDefault(require("../img/sprite.png"));
/** 精灵图 */


var sprite = new Image();
sprite.src = sprite_png_1.default;
exports.default = sprite;
},{"../img/sprite.png":"img/sprite.png"}],"ts/Background.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Image_1 = __importDefault(require("./Image"));

var main_1 = require("../main");

var sprite_1 = __importDefault(require("./sprite"));

var Background =
/*#__PURE__*/
function (_Image_1$default) {
  _inherits(Background, _Image_1$default);

  function Background(sX, sY, width, heigth, dX, dY, dWidth, dHeight) {
    var _this;

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, sX, sY, width, heigth));
    _this.dX = dX;
    _this.dY = dY;
    _this.dWidth = dWidth;
    _this.dHeight = dHeight;
    return _this;
  }
  /** 将图片绘制在canvas元素上 */


  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      main_1.ctx.drawImage(sprite_1.default, this.sX, this.sY, this.width, this.height, this.dX, this.dY, this.dWidth, this.dHeight);
      main_1.ctx.drawImage(sprite_1.default, this.sX, this.sY, this.width, this.height, this.dX + this.width, this.dY, this.dWidth, this.dHeight);
    }
  }]);

  return Background;
}(Image_1.default);

exports.default = Background;
},{"./Image":"ts/Image.ts","../main":"main.ts","./sprite":"ts/sprite.ts"}],"ts/Foreground.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Background_1 = __importDefault(require("./Background"));

var game_1 = __importDefault(require("./game"));

var ForeGround =
/*#__PURE__*/
function (_Background_1$default) {
  _inherits(ForeGround, _Background_1$default);

  function ForeGround(sX, sY, width, height, dX, dY, dWidth, dHeigh, moveX) {
    var _this;

    _classCallCheck(this, ForeGround);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForeGround).call(this, sX, sY, width, height, dX, dY, dWidth, dHeigh));
    _this.moveX = moveX;
    return _this;
  }

  _createClass(ForeGround, [{
    key: "update",
    value: function update() {
      if (game_1.default.state.current === game_1.default.state.gaming) {
        this.dX = (this.dX - this.moveX) % (this.width / 2);
      }
    }
  }]);

  return ForeGround;
}(Background_1.default);

exports.default = ForeGround;
},{"./Background":"ts/Background.ts","./game":"ts/game.ts"}],"ts/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** 角度常量 */

exports.DEGREE = Math.PI / 180;
},{}],"audio/sfx_point.wav":[function(require,module,exports) {
module.exports = "/sfx_point.d2ef77d5.wav";
},{}],"audio/sfx_flap.wav":[function(require,module,exports) {
module.exports = "/sfx_flap.f792f4e5.wav";
},{}],"audio/sfx_hit.wav":[function(require,module,exports) {
module.exports = "/sfx_hit.a86ad5c7.wav";
},{}],"audio/sfx_swooshing.wav":[function(require,module,exports) {
module.exports = "/sfx_swooshing.d35ea5a7.wav";
},{}],"audio/sfx_die.wav":[function(require,module,exports) {
module.exports = "/sfx_die.8210820a.wav";
},{}],"ts/Audio.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sfx_point_wav_1 = __importDefault(require("../audio/sfx_point.wav"));

var sfx_flap_wav_1 = __importDefault(require("../audio/sfx_flap.wav"));

var sfx_hit_wav_1 = __importDefault(require("../audio/sfx_hit.wav"));

var sfx_swooshing_wav_1 = __importDefault(require("../audio/sfx_swooshing.wav"));

var sfx_die_wav_1 = __importDefault(require("../audio/sfx_die.wav"));

exports.SCORE_S = new Audio();
exports.SCORE_S.src = sfx_point_wav_1.default;
exports.FLAP = new Audio();
exports.FLAP.src = sfx_flap_wav_1.default;
exports.HIT = new Audio();
exports.HIT.src = sfx_hit_wav_1.default;
exports.SWOOSHING = new Audio();
exports.SWOOSHING.src = sfx_swooshing_wav_1.default;
exports.DIE = new Audio();
exports.DIE.src = sfx_die_wav_1.default;
},{"../audio/sfx_point.wav":"audio/sfx_point.wav","../audio/sfx_flap.wav":"audio/sfx_flap.wav","../audio/sfx_hit.wav":"audio/sfx_hit.wav","../audio/sfx_swooshing.wav":"audio/sfx_swooshing.wav","../audio/sfx_die.wav":"audio/sfx_die.wav"}],"ts/Bird.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Image_1 = __importDefault(require("./Image"));

var sprite_1 = __importDefault(require("./sprite"));

var main_1 = require("../main");

var game_1 = __importDefault(require("./game"));

var utils_1 = require("./utils");

var Audio_1 = require("./Audio");

var Bird =
/*#__PURE__*/
function (_Image_1$default) {
  _inherits(Bird, _Image_1$default);

  function Bird(sX, sY, width, height) {
    var _this;

    _classCallCheck(this, Bird);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bird).call(this, sX, sY, width, height));
    _this.animation = [{
      sX: 276,
      sY: 112
    }, {
      sX: 276,
      sY: 139
    }, {
      sX: 276,
      sY: 164
    }, {
      sX: 276,
      sY: 139
    }];
    _this.radius = 12;
    _this.frame = 0;
    _this.gravity = 0.25;
    _this.jump = 4.6;
    _this.speed = 0;
    _this.rotation = 0;
    _this.period = 0;
    return _this;
  }

  _createClass(Bird, [{
    key: "draw",
    value: function draw() {
      var bird = this.animation[this.frame];
      main_1.ctx.save();
      main_1.ctx.translate(this.sX, this.sY);
      main_1.ctx.rotate(this.rotation);
      main_1.ctx.drawImage(sprite_1.default, bird.sX, bird.sY, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);
      main_1.ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      /** 小鸟飞行速度 */
      this.period = game_1.default.state.isGameReady() ? 10 : 5;
      /** 游戏每运行5帧，鸟运动1帧 */

      this.frame += game_1.default.frame % this.period === 0 ? 1 : 0;
      /** 鸟的帧数每超过动画数组长度就归零 */

      this.frame = this.frame % this.animation.length;

      if (game_1.default.state.isGameReady()) {
        this.sY = 150;
        this.rotation = 0 * utils_1.DEGREE;
      } else {
        this.speed += this.gravity;
        this.sY += this.speed;

        if (this.sY + this.height / 2 >= main_1.cvs.height - game_1.default.foreground.height) {
          this.sY = main_1.cvs.height - game_1.default.foreground.height - this.height / 2;

          if (game_1.default.state.isGaming()) {
            game_1.default.state.setGameOver();
          }
        }

        if (this.speed >= this.jump) {
          this.rotation = 90 * utils_1.DEGREE;
          this.frame = 1;
        } else {
          this.rotation = -25 * utils_1.DEGREE;
        }
      }
    }
    /** 小鸟跳跃 */

  }, {
    key: "flap",
    value: function flap() {
      Audio_1.FLAP.play();
      this.speed = -this.jump;
    }
  }, {
    key: "speedReset",
    value: function speedReset() {
      this.speed = 0;
    }
  }]);

  return Bird;
}(Image_1.default);

exports.default = Bird;
},{"./Image":"ts/Image.ts","./sprite":"ts/sprite.ts","../main":"main.ts","./game":"ts/game.ts","./utils":"ts/utils.ts","./Audio":"ts/Audio.ts"}],"ts/GetStatus.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Image_1 = __importDefault(require("./Image"));

var main_1 = require("../main");

var sprite_1 = __importDefault(require("./sprite"));

var GameStatus =
/*#__PURE__*/
function (_Image_1$default) {
  _inherits(GameStatus, _Image_1$default);

  function GameStatus(sX, sY, width, height, dX, dY) {
    var _this;

    _classCallCheck(this, GameStatus);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameStatus).call(this, sX, sY, width, height));
    _this.dX = dX;
    _this.dY = dY;
    return _this;
  }

  _createClass(GameStatus, [{
    key: "draw",
    value: function draw(gameFlag) {
      if (gameFlag) {
        main_1.ctx.drawImage(sprite_1.default, this.sX, this.sY, this.width, this.height, this.dX, this.dY, this.width, this.height);
      }
    }
  }]);

  return GameStatus;
}(Image_1.default);

exports.default = GameStatus;
},{"./Image":"ts/Image.ts","../main":"main.ts","./sprite":"ts/sprite.ts"}],"ts/Pipe.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = require("../main");

var sprite_1 = __importDefault(require("./sprite"));

var game_1 = __importDefault(require("./game"));

var Pipe =
/*#__PURE__*/
function () {
  function Pipe() {
    _classCallCheck(this, Pipe);

    this.top = {
      sX: 553,
      sY: 0
    };
    this.bottom = {
      sX: 502,
      sY: 0
    };
    this.position = [];
    this.width = 53;
    this.height = 400;
    this.gap = 85;
    this.maxYposition = -150;
    this.dX = 2;
  }

  _createClass(Pipe, [{
    key: "draw",
    value: function draw() {
      var _this = this;

      this.position.forEach(function (p) {
        var topYPosition = p.sY;
        var bottomYPosition = p.sY + _this.height + _this.gap;
        main_1.ctx.drawImage(sprite_1.default, _this.top.sX, _this.top.sY, _this.width, _this.height, p.sX, topYPosition, _this.width, _this.height);
        main_1.ctx.drawImage(sprite_1.default, _this.bottom.sX, _this.bottom.sY, _this.width, _this.height, p.sX, bottomYPosition, _this.width, _this.height);
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      if (!game_1.default.state.isGaming()) {
        return;
      }

      if (game_1.default.frame % 100 === 0) {
        this.position.push({
          sX: main_1.cvs.width,
          sY: this.maxYposition * (Math.random() + 1)
        });
      }

      this.position.forEach(function (p) {
        var bottomPipeYPosition = p.sY + _this2.height + _this2.gap;
        /** 碰撞检测 */

        if ( // 检测是否与顶部管道碰撞
        game_1.default.bird.sX + game_1.default.bird.radius > p.sX && game_1.default.bird.sX - game_1.default.bird.radius < p.sX + _this2.width && game_1.default.bird.sY + game_1.default.bird.radius > p.sY && game_1.default.bird.sY - game_1.default.bird.radius < p.sY + _this2.height) {
          game_1.default.state.setGameOver();
        }

        if ( // 检测是否与底部管道碰撞
        game_1.default.bird.sX + game_1.default.bird.radius > p.sX && game_1.default.bird.sX - game_1.default.bird.radius < p.sX + _this2.width && game_1.default.bird.sY + game_1.default.bird.radius > bottomPipeYPosition && game_1.default.bird.sY - game_1.default.bird.radius < bottomPipeYPosition + _this2.height) {
          game_1.default.state.setGameOver();
        }

        p.sX -= _this2.dX;

        if (p.sX + _this2.width <= 0) {
          _this2.position.shift();

          game_1.default.score.updateScore();
        }
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.position = [];
    }
  }]);

  return Pipe;
}();

exports.default = Pipe;
},{"../main":"main.ts","./sprite":"ts/sprite.ts","./game":"ts/game.ts"}],"ts/game.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Background_1 = __importDefault(require("./Background"));

var main_1 = require("../main");

var Foreground_1 = __importDefault(require("./Foreground"));

var Bird_1 = __importDefault(require("./Bird"));

var GetStatus_1 = __importDefault(require("./GetStatus"));

var Pipe_1 = __importDefault(require("./Pipe"));

var Audio_1 = require("./Audio");

var game = {
  /** 游戏帧数 */
  frame: 0,

  /** 游戏分数 */
  score: {
    best: Number.parseInt(localStorage.getItem('best'), 10) || 0,
    value: 0,
    draw: function draw() {
      main_1.ctx.fillStyle = '#fff';
      main_1.ctx.strokeStyle = '#000';

      if (game.state.current === game.state.gaming) {
        main_1.ctx.lineWidth = 2;
        main_1.ctx.font = '35px Teko';
        main_1.ctx.fillText(this.value + '', main_1.cvs.width / 2, 50);
        main_1.ctx.strokeText(this.value + '', main_1.cvs.width / 2, 50);
      } else if (game.state.current === game.state.gameOver) {
        main_1.ctx.font = '25px Teko';
        main_1.ctx.fillText(this.value + '', 225, 186);
        main_1.ctx.strokeText(this.value + '', 225, 186);
        main_1.ctx.fillText(this.best + '', 225, 228);
        main_1.ctx.strokeText(this.best + '', 225, 228);
      }
    },
    updateScore: function updateScore() {
      Audio_1.SCORE_S.play();
      this.value += 1;
      this.best = Math.max(this.value, this.best);
      localStorage.setItem('best', this.best + '');
    },
    reset: function reset() {
      this.value = 0;
    }
  },

  /** 游戏状态 */
  state: {
    /** 游戏当前状态 */
    current: 0,

    /** 准备开始游戏 */
    getReady: 0,

    /** 游戏进行中 */
    gaming: 1,

    /** 游戏结束 */
    gameOver: 2,

    /** */
    isGameReady: function isGameReady() {
      return this.current === this.getReady;
    },
    isGaming: function isGaming() {
      return this.current === this.gaming;
    },
    isGameOver: function isGameOver() {
      return this.current === this.gameOver;
    },
    setGameReady: function setGameReady() {
      this.current = this.getReady;
    },
    setGaming: function setGaming() {
      Audio_1.SWOOSHING.play();
      this.current = this.gaming;
    },
    setGameOver: function setGameOver() {
      Audio_1.DIE.play();
      this.current = this.gameOver;
    }
  },
  background: new Background_1.default(0, 0, 275, 226, 0, main_1.cvs.height - 226, 275, 226),
  foreground: new Foreground_1.default(276, 0, 224, 112, 0, main_1.cvs.height - 112, 224, 112, 2),
  gameReady: new GetStatus_1.default(0, 228, 173, 152, main_1.cvs.width / 2 - 173 / 2, 80),
  gameOver: new GetStatus_1.default(175, 228, 225, 202, main_1.cvs.width / 2 - 225 / 2, 90),
  startBtn: {
    x: 120,
    y: 263,
    width: 83,
    height: 29
  },

  /** 小鸟 */
  bird: new Bird_1.default(50, 150, 34, 26),

  /** 管道 */
  pipe: new Pipe_1.default(),

  /** 绘制画面 */
  draw: function draw() {
    main_1.ctx.fillStyle = '#70c5ce';
    main_1.ctx.fillRect(0, 0, main_1.cvs.width, main_1.cvs.height);
    this.background.draw();
    this.foreground.draw();
    this.bird.draw();
    this.pipe.draw();
    this.gameReady.draw(game.state.current === game.state.getReady);
    this.gameOver.draw(game.state.current === game.state.gameOver);
    this.score.draw();
  },
  update: function update() {
    this.foreground.update();
    this.bird.update();
    this.pipe.update();
  },
  loop: function loop() {
    game.draw();
    game.frame++;
    game.update();
    requestAnimationFrame(game.loop);
  }
};
exports.default = game;
},{"./Background":"ts/Background.ts","../main":"main.ts","./Foreground":"ts/Foreground.ts","./Bird":"ts/Bird.ts","./GetStatus":"ts/GetStatus.ts","./Pipe":"ts/Pipe.ts","./Audio":"ts/Audio.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cvs = document.getElementById('cvs');
exports.ctx = exports.cvs.getContext('2d');

var game_1 = __importDefault(require("./ts/game"));

exports.cvs.addEventListener('click', function (event) {
  switch (game_1.default.state.current) {
    case game_1.default.state.getReady:
      game_1.default.state.setGaming();
      break;

    case game_1.default.state.gaming:
      if (game_1.default.bird.sY - game_1.default.bird.radius <= 0) {
        return;
      }

      game_1.default.bird.flap();
      break;

    case game_1.default.state.gameOver:
      var rect = exports.cvs.getBoundingClientRect();
      var clickX = event.clientX - rect.left;
      var clickY = event.clientY - rect.top;

      if ( // 检查是否点击开始按钮
      clickX >= game_1.default.startBtn.x && clickX <= game_1.default.startBtn.x + game_1.default.startBtn.width && clickY >= game_1.default.startBtn.y && clickY <= game_1.default.startBtn.y + game_1.default.startBtn.height) {
        game_1.default.pipe.reset();
        game_1.default.bird.speedReset();
        game_1.default.score.reset();
        game_1.default.state.setGameReady();
      }

      break;
  }
});
game_1.default.loop();
},{"./ts/game":"ts/game.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55037" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map