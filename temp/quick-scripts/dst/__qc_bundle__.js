
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/ConstValue');
require('./assets/scripts/PlayerItem');
require('./assets/scripts/ScoreFX');
require('./assets/scripts/ScoreFXMgr');
require('./assets/scripts/ScoreOvertake');
require('./assets/scripts/ScoreOvertakeMgr');
require('./assets/scripts/ScreenGameOver');
require('./assets/scripts/ScreenHome');
require('./assets/scripts/ScreenHomeLeaderboard');
require('./assets/scripts/ScreenLeaderboard');
require('./assets/scripts/ScreenMgr');
require('./assets/scripts/ScreenSkinShop');
require('./assets/scripts/ScreenUpload');
require('./assets/scripts/SkinItem');
require('./assets/scripts/SkinMgr');
require('./assets/scripts/UtilsCommon');
require('./assets/scripts/UtilsFB');
require('./assets/scripts/block');
require('./assets/scripts/game_scene');
require('./assets/scripts/player');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PlayerItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4a40H7rANEeLrdimsBVgJX', 'PlayerItem');
// scripts/PlayerItem.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var UtilsFB = require("UtilsFB");

var UtilsCommon = require("UtilsCommon");

var game_scene = require('game_scene');

var ScreenMgr = require('ScreenMgr');

cc.Class({
  "extends": cc.Component,
  properties: {
    rank: {
      "default": null,
      type: cc.Label
    },
    portrait: {
      "default": null,
      type: cc.Sprite
    },
    playerName: {
      "default": null,
      type: cc.Label
    },
    score: {
      "default": null,
      type: cc.Label
    },
    btnPlay: {
      "default": null,
      type: cc.Node
    },
    btnPlayLabel: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.node.on('click', this.onBtnClick, this);
    this.defaultPortraitSprite = this.portrait.spriteFrame;
  },
  onBtnClick: function onBtnClick() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());

    if (this.playerData.isSelf) {
      UtilsFB.chooseAsync(imageBase64)["catch"](function (error) {});
    } else {
      UtilsFB.invitePlayerAsync(this.playerData.id, imageBase64).then(function () {
        this.playGame();
      }.bind(this))["catch"](function (error) {
        this.playGame();
      }.bind(this));
    }
  },
  playGame: function playGame() {
    ScreenMgr.instance.closeScreen('ScreenHomeLeaderboard');
    ScreenMgr.instance.closeScreen('ScreenGameOver');
    game_scene.instance.onGameStart(true, false);
  },
  updatePlayerInfo: function updatePlayerInfo(playerData) {
    // console.log("update player info: " + JSON.stringify(playerData));
    this.playerData = playerData;
    this.rank.string = playerData.rank;
    this.playerName.string = playerData.playerName;
    this.score.string = playerData.score; // this.portrait.spriteFrame = this.defaultPortraitSprite;

    UtilsFB.getPlayerPhotoAsync(playerData).then(function () {
      if (playerData.photoTexture != null) {
        this.portrait.spriteFrame = new cc.SpriteFrame();
        this.portrait.spriteFrame.setTexture(playerData.photoTexture);
      }
    }.bind(this))["catch"](function (error) {});
    this.btnPlayLabel.string = this.playerData.isSelf ? 'Share' : 'Play';
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllckl0ZW0uanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsImdhbWVfc2NlbmUiLCJTY3JlZW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJhbmsiLCJ0eXBlIiwiTGFiZWwiLCJwb3J0cmFpdCIsIlNwcml0ZSIsInBsYXllck5hbWUiLCJzY29yZSIsImJ0blBsYXkiLCJOb2RlIiwiYnRuUGxheUxhYmVsIiwib25Mb2FkIiwibm9kZSIsIm9uIiwib25CdG5DbGljayIsImRlZmF1bHRQb3J0cmFpdFNwcml0ZSIsInNwcml0ZUZyYW1lIiwiaW1hZ2VCYXNlNjQiLCJnZXRTY3JlZW5zaG90QmFzZTY0IiwiZ2V0Q2FtZXJhTWFpbiIsInBsYXllckRhdGEiLCJpc1NlbGYiLCJjaG9vc2VBc3luYyIsImVycm9yIiwiaW52aXRlUGxheWVyQXN5bmMiLCJpZCIsInRoZW4iLCJwbGF5R2FtZSIsImJpbmQiLCJpbnN0YW5jZSIsImNsb3NlU2NyZWVuIiwib25HYW1lU3RhcnQiLCJ1cGRhdGVQbGF5ZXJJbmZvIiwic3RyaW5nIiwiZ2V0UGxheWVyUGhvdG9Bc3luYyIsInBob3RvVGV4dHVyZSIsIlNwcml0ZUZyYW1lIiwic2V0VGV4dHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxTQUFTLEdBQUdILE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBSSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUs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LENBUGxCO0lBU0EsS0FBS2IsWUFBTCxDQUFrQnVCLE1BQWxCLEdBQTJCLEtBQUtiLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCLE9BQXpCLEdBQW1DLE1BQTlEO0VBQ0g7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIFV0aWxzRkIgPSByZXF1aXJlKFwiVXRpbHNGQlwiKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoXCJVdGlsc0NvbW1vblwiKTtcbnZhciBnYW1lX3NjZW5lID0gcmVxdWlyZSgnZ2FtZV9zY2VuZScpO1xudmFyIFNjcmVlbk1nciA9IHJlcXVpcmUoJ1NjcmVlbk1ncicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmFuazoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBwb3J0cmFpdDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyTmFtZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBzY29yZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ0blBsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ0blBsYXlMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UG9ydHJhaXRTcHJpdGUgPSB0aGlzLnBvcnRyYWl0LnNwcml0ZUZyYW1lO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJEYXRhLmlzU2VsZikge1xuICAgICAgICAgICAgVXRpbHNGQi5jaG9vc2VBc3luYyhpbWFnZUJhc2U2NCkuY2F0Y2goZXJyb3IgPT57fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVdGlsc0ZCLmludml0ZVBsYXllckFzeW5jKHRoaXMucGxheWVyRGF0YS5pZCwgaW1hZ2VCYXNlNjQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7ICAgXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBsYXlHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLmNsb3NlU2NyZWVuKCdTY3JlZW5Ib21lTGVhZGVyYm9hcmQnKTtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLmNsb3NlU2NyZWVuKCdTY3JlZW5HYW1lT3ZlcicpO1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uR2FtZVN0YXJ0KHRydWUsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUGxheWVySW5mbzogZnVuY3Rpb24ocGxheWVyRGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZSBwbGF5ZXIgaW5mbzogXCIgKyBKU09OLnN0cmluZ2lmeShwbGF5ZXJEYXRhKSk7XG4gICAgICAgIHRoaXMucGxheWVyRGF0YSA9IHBsYXllckRhdGE7XG4gICAgICAgIHRoaXMucmFuay5zdHJpbmcgPSBwbGF5ZXJEYXRhLnJhbms7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBwbGF5ZXJEYXRhLnBsYXllck5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gcGxheWVyRGF0YS5zY29yZTtcblxuICAgICAgICAvLyB0aGlzLnBvcnRyYWl0LnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0UG9ydHJhaXRTcHJpdGU7XG4gICAgICAgIFV0aWxzRkIuZ2V0UGxheWVyUGhvdG9Bc3luYyhwbGF5ZXJEYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJEYXRhLnBob3RvVGV4dHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0cmFpdC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9ydHJhaXQuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZShwbGF5ZXJEYXRhLnBob3RvVGV4dHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHt9KTtcblxuICAgICAgICB0aGlzLmJ0blBsYXlMYWJlbC5zdHJpbmcgPSB0aGlzLnBsYXllckRhdGEuaXNTZWxmID8gJ1NoYXJlJyA6ICdQbGF5JztcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreOvertake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61c1cZEtg9JWr4aXhhEoB4+', 'ScoreOvertake');
// scripts/ScoreOvertake.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var UtilsFB = require("UtilsFB");

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    overtakeLabel: {
      "default": null,
      type: cc.Label
    },
    photo: {
      "default": null,
      type: cc.Sprite
    },
    animation: {
      "default": null,
      type: cc.Animation
    }
  },
  onLoad: function onLoad() {
    this.animation.on('finished', this.onPlayFinished, this);
  },
  init: function init(mgr) {
    this.mgr = mgr;
  },
  play: function play() {
    this.animation.play('overtake_fade');
  },
  setPlayerInfo: function setPlayerInfo(playerInfo) {
    if (playerInfo.isSelf) {
      this.overtakeLabel.string = "New revord!";
    } else {
      this.overtakeLabel.string = "Overtake " + playerInfo.playerName;
    }

    UtilsFB.getPlayerPhotoAsync(playerInfo).then(function () {
      if (playerInfo.photoTexture != null) {
        this.photo.spriteFrame = new cc.SpriteFrame();
        this.photo.spriteFrame.setTexture(playerInfo.photoTexture);
      }
    }.bind(this))["catch"](function (error) {});
  },
  onPlayFinished: function onPlayFinished(type, state) {
    this.mgr.despawn(this);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlT3ZlcnRha2UuanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm92ZXJ0YWtlTGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJwaG90byIsIlNwcml0ZSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIm9uTG9hZCIsIm9uIiwib25QbGF5RmluaXNoZWQiLCJpbml0IiwibWdyIiwicGxheSIsInNldFBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNTZWxmIiwic3RyaW5nIiwicGxheWVyTmFtZSIsImdldFBsYXllclBob3RvQXN5bmMiLCJ0aGVuIiwicGhvdG9UZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNldFRleHR1cmUiLCJiaW5kIiwiZXJyb3IiLCJzdGF0ZSIsImRlc3Bhd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUFDLGFBQWEsRUFBRTtNQUNYLFdBQVMsSUFERTtNQUVYQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQWpCUDtJQXNCUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZOLENBdEJDO0lBMkJSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEosSUFBSSxFQUFFTCxFQUFFLENBQUNVO0lBRkY7RUEzQkgsQ0FIUDtFQW9DTEMsTUFBTSxFQUFFLGtCQUFXO0lBQ2YsS0FBS0YsU0FBTCxDQUFlRyxFQUFmLENBQWtCLFVBQWxCLEVBQThCLEtBQUtDLGNBQW5DLEVBQW1ELElBQW5EO0VBQ0gsQ0F0Q0k7RUF3Q0xDLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWM7SUFDaEIsS0FBS0EsR0FBTCxHQUFXQSxHQUFYO0VBQ0gsQ0ExQ0k7RUE0Q0xDLElBQUksRUFBRSxnQkFBVztJQUNiLEtBQUtQLFNBQUwsQ0FBZU8sSUFBZixDQUFvQixlQUFwQjtFQUNILENBOUNJO0VBZ0RMQyxhQUFhLEVBQUUsdUJBQVNDLFVBQVQsRUFBcUI7SUFDaEMsSUFBSUEsVUFBVSxDQUFDQyxNQUFmLEVBQXVCO01BQ25CLEtBQUtmLGFBQUwsQ0FBbUJnQixNQUFuQixHQUE0QixhQUE1QjtJQUNILENBRkQsTUFFTztNQUNILEtBQUtoQixhQUFMLENBQW1CZ0IsTUFBbkIsR0FBNEIsY0FBY0YsVUFBVSxDQUFDRyxVQUFyRDtJQUNIOztJQUVEdkIsT0FBTyxDQUFDd0IsbUJBQVIsQ0FBNEJKLFVBQTVCLEVBQ0NLLElBREQsQ0FDTSxZQUFXO01BQ2IsSUFBSUwsVUFBVSxDQUFDTSxZQUFYLElBQTJCLElBQS9CLEVBQXFDO1FBQ2pDLEtBQUtqQixLQUFMLENBQVdrQixXQUFYLEdBQXlCLElBQUl6QixFQUFFLENBQUMwQixXQUFQLEVBQXpCO1FBQ0EsS0FBS25CLEtBQUwsQ0FBV2tCLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDVCxVQUFVLENBQUNNLFlBQTdDO01BQ0g7SUFDSixDQUxLLENBS0pJLElBTEksQ0FLQyxJQUxELENBRE4sV0FPTyxVQUFBQyxLQUFLLEVBQUksQ0FBRSxDQVBsQjtFQVNILENBaEVJO0VBa0VMaEIsY0FBYyxFQUFFLHdCQUFTUixJQUFULEVBQWV5QixLQUFmLEVBQXNCO0lBQ2xDLEtBQUtmLEdBQUwsQ0FBU2dCLE9BQVQsQ0FBaUIsSUFBakI7RUFDSDtBQXBFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoXCJVdGlsc0ZCXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcblxuICAgICAgICBvdmVydGFrZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGhvdG86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uUGxheUZpbmlzaGVkLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24obWdyKSB7XG4gICAgICAgIHRoaXMubWdyID0gbWdyO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnb3ZlcnRha2VfZmFkZScpO1xuICAgIH0sXG5cbiAgICBzZXRQbGF5ZXJJbmZvOiBmdW5jdGlvbihwbGF5ZXJJbmZvKSB7XG4gICAgICAgIGlmIChwbGF5ZXJJbmZvLmlzU2VsZikge1xuICAgICAgICAgICAgdGhpcy5vdmVydGFrZUxhYmVsLnN0cmluZyA9IFwiTmV3IHJldm9yZCFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcnRha2VMYWJlbC5zdHJpbmcgPSBcIk92ZXJ0YWtlIFwiICsgcGxheWVySW5mby5wbGF5ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHNGQi5nZXRQbGF5ZXJQaG90b0FzeW5jKHBsYXllckluZm8pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHBsYXllckluZm8ucGhvdG9UZXh0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90by5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHBsYXllckluZm8ucGhvdG9UZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge30pO1xuXG4gICAgfSxcblxuICAgIG9uUGxheUZpbmlzaGVkOiBmdW5jdGlvbih0eXBlLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLm1nci5kZXNwYXduKHRoaXMpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenLeaderboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8081bzy7CJEPYJsaU/vIwa4', 'ScreenLeaderboard');
// scripts/ScreenLeaderboard.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var UtilsFB = require("UtilsFB");

var UtilsCommon = require("UtilsCommon");

cc.Class({
  "extends": cc.Component,
  properties: {
    playerItemPrefab: {
      "default": null,
      type: cc.Prefab
    },
    content: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.playerItemPool = new cc.NodePool("playerItem");
    this.canvasNode = cc.find('Canvas');
  },
  showLeaderboard: function showLeaderboard(leaderboardName) {
    if (typeof FBInstant === 'undefined') {
      this.showLeaderboardDebug();
    }

    UtilsFB.getLeaderboardAsync(leaderboardName).then(function (playerArray) {
      this.showLeaderboardInternal(playerArray);
    }.bind(this))["catch"](function (error) {});
  },
  showLeaderboardInternal: function showLeaderboardInternal(playerArray) {
    this.node.active = true;
    this.updateLeaderboard(playerArray); // this.show();
  },
  showLeaderboardDebug: function showLeaderboardDebug() {
    var playerArray = new Array();

    for (var i = 0; i < 15; i++) {
      var playerInfo = {};
      playerInfo.id = "2127737910604444";
      playerInfo.playerName = "player " + i;
      playerInfo.score = 10 + i * 2;
      playerInfo.rank = i + 1;

      if (i % 2 == 0) {
        playerInfo.portraitUrl = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2127737910604444&height=256&width=256&ext=1542184412&hash=AeRpQBaamgXpc3fM";
      } else {
        playerInfo.portraitUrl = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2445785048770311&height=256&width=256&ext=1542255362&hash=AeQ_-nxXrs2f6OE4";
      }

      playerArray.push(playerInfo);
    }

    this.showLeaderboardInternal(playerArray);
  },
  show: function show() {
    var beginPos = cc.v2(0, -(this.canvasNode.height + this.node.height) / 2);
    var endPos = cc.v2(0, 0);
    var showAction = cc.moveTo(0.5, endPos).easing(cc.easeCubicActionOut());
    this.node.position = beginPos;
    this.node.runAction(showAction);
  },
  hide: function hide() {
    var endPos = cc.v2(0, -(this.canvasNode.height + this.node.height) / 2);
    var hideAction = cc.moveTo(0.5, endPos).easing(cc.easeCubicActionIn());
    this.node.runAction(hideAction);
  },
  updateLeaderboard: function updateLeaderboard(playerArray) {
    this.clearLeaderboard();

    for (var i = 0; i < playerArray.length; i++) {
      var playerItemNode = this.spawnPlayerItem();
      playerItemNode.getComponent('PlayerItem').updatePlayerInfo(playerArray[i]);
      playerItemNode.setParent(this.content);
    }
  },
  clearLeaderboard: function clearLeaderboard() {
    for (var i = this.content.childrenCount - 1; i >= 0; i--) {
      this.despawnPlayerItem(this.content.children[i]);
    }
  },
  spawnPlayerItem: function spawnPlayerItem() {
    if (this.playerItemPool.size() > 0) {
      return this.playerItemPool.get(this);
    } else {
      return cc.instantiate(this.playerItemPrefab);
    }
  },
  despawnPlayerItem: function despawnPlayerItem(playerItemNode) {
    this.playerItemPool.put(playerItemNode);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkxlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIlV0aWxzRkIiLCJyZXF1aXJlIiwiVXRpbHNDb21tb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllckl0ZW1QcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwiY29udGVudCIsIk5vZGUiLCJvbkxvYWQiLCJwbGF5ZXJJdGVtUG9vbCIsIk5vZGVQb29sIiwiY2FudmFzTm9kZSIsImZpbmQiLCJzaG93TGVhZGVyYm9hcmQiLCJsZWFkZXJib2FyZE5hbWUiLCJGQkluc3RhbnQiLCJzaG93TGVhZGVyYm9hcmREZWJ1ZyIsImdldExlYWRlcmJvYXJkQXN5bmMiLCJ0aGVuIiwicGxheWVyQXJyYXkiLCJzaG93TGVhZGVyYm9hcmRJbnRlcm5hbCIsImJpbmQiLCJlcnJvciIsIm5vZGUiLCJhY3RpdmUiLCJ1cGRhdGVMZWFkZXJib2FyZCIsIkFycmF5IiwiaSIsInBsYXllckluZm8iLCJpZCIsInBsYXllck5hbWUiLCJzY29yZSIsInJhbmsiLCJwb3J0cmFpdFVybCIsInB1c2giLCJzaG93IiwiYmVnaW5Qb3MiLCJ2MiIsImhlaWdodCIsImVuZFBvcyIsInNob3dBY3Rpb24iLCJtb3ZlVG8iLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJwb3NpdGlvbiIsInJ1bkFjdGlvbiIsImhpZGUiLCJoaWRlQWN0aW9uIiwiZWFzZUN1YmljQWN0aW9uSW4iLCJjbGVhckxlYWRlcmJvYXJkIiwibGVuZ3RoIiwicGxheWVySXRlbU5vZGUiLCJzcGF3blBsYXllckl0ZW0iLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVQbGF5ZXJJbmZvIiwic2V0UGFyZW50IiwiY2hpbGRyZW5Db3VudCIsImRlc3Bhd25QbGF5ZXJJdGVtIiwiY2hpbGRyZW4iLCJzaXplIiwiZ2V0IiwiaW5zdGFudGlhdGUiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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dUIsS0FBS25ELE9BQUwsQ0FBYW9ELFFBQWIsQ0FBc0IvQixDQUF0QixDQUF2QjtJQUNIO0VBQ0osQ0ExRkk7RUE0Rkx5QixlQUFlLEVBQUUsMkJBQVc7SUFDeEIsSUFBSSxLQUFLM0MsY0FBTCxDQUFvQmtELElBQXBCLEtBQTZCLENBQWpDLEVBQW9DO01BQ2hDLE9BQU8sS0FBS2xELGNBQUwsQ0FBb0JtRCxHQUFwQixDQUF3QixJQUF4QixDQUFQO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsT0FBTzdELEVBQUUsQ0FBQzhELFdBQUgsQ0FBZSxLQUFLMUQsZ0JBQXBCLENBQVA7SUFDSDtFQUNKLENBbEdJO0VBb0dMc0QsaUJBQWlCLEVBQUUsMkJBQVNOLGNBQVQsRUFBeUI7SUFDeEMsS0FBSzFDLGNBQUwsQ0FBb0JxRCxHQUFwQixDQUF3QlgsY0FBeEI7RUFDSDtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxudmFyIFV0aWxzRkIgPSByZXF1aXJlKFwiVXRpbHNGQlwiKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoXCJVdGlsc0NvbW1vblwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYXllckl0ZW1QcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJdGVtUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChcInBsYXllckl0ZW1cIik7XG4gICAgICAgIHRoaXMuY2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgIH0sXG5cbiAgICBzaG93TGVhZGVyYm9hcmQ6IGZ1bmN0aW9uKGxlYWRlcmJvYXJkTmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xlYWRlcmJvYXJkRGVidWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzRkIuZ2V0TGVhZGVyYm9hcmRBc3luYyhsZWFkZXJib2FyZE5hbWUpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHBsYXllckFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMZWFkZXJib2FyZEludGVybmFsKHBsYXllckFycmF5KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dMZWFkZXJib2FyZEludGVybmFsOiBmdW5jdGlvbihwbGF5ZXJBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVMZWFkZXJib2FyZChwbGF5ZXJBcnJheSk7XG4gICAgICAgIC8vIHRoaXMuc2hvdygpO1xuICAgIH0sXG5cbiAgICBzaG93TGVhZGVyYm9hcmREZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwbGF5ZXJBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbGF5ZXJJbmZvID0ge307XG4gICAgICAgICAgICBwbGF5ZXJJbmZvLmlkID0gXCIyMTI3NzM3OTEwNjA0NDQ0XCI7XG4gICAgICAgICAgICBwbGF5ZXJJbmZvLnBsYXllck5hbWUgPSBcInBsYXllciBcIiArIGk7XG4gICAgICAgICAgICBwbGF5ZXJJbmZvLnNjb3JlID0gMTAgKyBpICogMjtcbiAgICAgICAgICAgIHBsYXllckluZm8ucmFuayA9IGkgKyAxO1xuXG4gICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHBsYXllckluZm8ucG9ydHJhaXRVcmwgPSBcImh0dHBzOi8vcGxhdGZvcm0tbG9va2FzaWRlLmZic2J4LmNvbS9wbGF0Zm9ybS9pbnN0YW50Z2FtZXMvcHJvZmlsZV9waWMuanBnP2lncGlkPTIxMjc3Mzc5MTA2MDQ0NDQmaGVpZ2h0PTI1NiZ3aWR0aD0yNTYmZXh0PTE1NDIxODQ0MTImaGFzaD1BZVJwUUJhYW1nWHBjM2ZNXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllckluZm8ucG9ydHJhaXRVcmwgPSBcImh0dHBzOi8vcGxhdGZvcm0tbG9va2FzaWRlLmZic2J4LmNvbS9wbGF0Zm9ybS9pbnN0YW50Z2FtZXMvcHJvZmlsZV9waWMuanBnP2lncGlkPTI0NDU3ODUwNDg3NzAzMTEmaGVpZ2h0PTI1NiZ3aWR0aD0yNTYmZXh0PTE1NDIyNTUzNjImaGFzaD1BZVFfLW54WHJzMmY2T0U0XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsYXllckFycmF5LnB1c2gocGxheWVySW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dMZWFkZXJib2FyZEludGVybmFsKHBsYXllckFycmF5KTtcbiAgICB9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBiZWdpblBvcyA9IGNjLnYyKDAsIC0odGhpcy5jYW52YXNOb2RlLmhlaWdodCArIHRoaXMubm9kZS5oZWlnaHQpIC8gMik7XG4gICAgICAgIHZhciBlbmRQb3MgPSBjYy52MigwLCAwKTtcbiAgICAgICAgdmFyIHNob3dBY3Rpb24gPSBjYy5tb3ZlVG8oMC41LCBlbmRQb3MpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gYmVnaW5Qb3M7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2hvd0FjdGlvbik7XG4gICAgfSxcblxuICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZW5kUG9zID0gY2MudjIoMCwgLSh0aGlzLmNhbnZhc05vZGUuaGVpZ2h0ICsgdGhpcy5ub2RlLmhlaWdodCkgLyAyKTsgXG4gICAgICAgIHZhciBoaWRlQWN0aW9uID0gY2MubW92ZVRvKDAuNSwgZW5kUG9zKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oaGlkZUFjdGlvbik7XG4gICAgfSxcblxuICAgIHVwZGF0ZUxlYWRlcmJvYXJkOiBmdW5jdGlvbihwbGF5ZXJBcnJheSkge1xuICAgICAgICB0aGlzLmNsZWFyTGVhZGVyYm9hcmQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBsYXllckl0ZW1Ob2RlID0gdGhpcy5zcGF3blBsYXllckl0ZW0oKTtcbiAgICAgICAgICAgIHBsYXllckl0ZW1Ob2RlLmdldENvbXBvbmVudCgnUGxheWVySXRlbScpLnVwZGF0ZVBsYXllckluZm8ocGxheWVyQXJyYXlbaV0pO1xuICAgICAgICAgICAgcGxheWVySXRlbU5vZGUuc2V0UGFyZW50KHRoaXMuY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJMZWFkZXJib2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Bhd25QbGF5ZXJJdGVtKHRoaXMuY29udGVudC5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3Bhd25QbGF5ZXJJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVySXRlbVBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVySXRlbVBvb2wuZ2V0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucGxheWVySXRlbVByZWZhYik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzcGF3blBsYXllckl0ZW06IGZ1bmN0aW9uKHBsYXllckl0ZW1Ob2RlKSB7XG4gICAgICAgIHRoaXMucGxheWVySXRlbVBvb2wucHV0KHBsYXllckl0ZW1Ob2RlKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49b1dZGz/ZHsa3V5MX+cNO7', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjAueF9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0VBQ1g7RUFDQTtFQUNBRCxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsMkJBQVYsR0FBd0MsSUFBeEM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIOS5i+WJjeeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmlmIChjYy5Ub2dnbGUpIHtcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2NoZWNrID0gdHJ1ZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenHomeLeaderboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29fbcOLfZdOHL4ZXxPShgwg', 'ScreenHomeLeaderboard');
// scripts/ScreenHomeLeaderboard.js

"use strict";

var ConstValue = _interopRequireWildcard(require("./ConstValue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var UtilsFB = require('UtilsFB');

var UtilsCommon = require('UtilsCommon');

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onEnable: function onEnable() {
    this.screenLeaderboard.clearLeaderboard();
    UtilsFB.setLeaderboardAsync(ConstValue.LEADERBOARD_SOCRE_WORLD, this.score).then(function () {
      this.screenLeaderboard.showLeaderboard(ConstValue.LEADERBOARD_SOCRE_WORLD);
    }.bind(this))["catch"](function (error) {
      console.log("setleaderboardasync error: " + JSON.stringify(error));
    });
  },
  onBtnClickInvite: function onBtnClickInvite() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync2(imageBase64)["catch"](function (error) {});
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkhvbWVMZWFkZXJib2FyZC5qcyJdLCJuYW1lcyI6WyJVdGlsc0ZCIiwicmVxdWlyZSIsIlV0aWxzQ29tbW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY3JlZW5MZWFkZXJib2FyZCIsInR5cGUiLCJzdGFydCIsIm9uRW5hYmxlIiwiY2xlYXJMZWFkZXJib2FyZCIsInNldExlYWRlcmJvYXJkQXN5bmMiLCJDb25zdFZhbHVlIiwiTEVBREVSQk9BUkRfU09DUkVfV09STEQiLCJzY29yZSIsInRoZW4iLCJzaG93TGVhZGVyYm9hcmQiLCJiaW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQnRuQ2xpY2tJbnZpdGUiLCJpbWFnZUJhc2U2NCIsImdldFNjcmVlbnNob3RCYXNlNjQiLCJnZXRDYW1lcmFNYWluIiwiY2hvb3NlQXN5bmMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBQyxpQkFBaUIsRUFBRTtNQUNmLFdBQVMsSUFETTtNQUVmQyxJQUFJLEVBQUVQLE9BQU8sQ0FBQyxtQkFBRDtJQUZFO0VBakJYLENBSFA7RUEwQkw7RUFFQTtFQUVBUSxLQTlCSyxtQkE4QkksQ0FFUixDQWhDSTtFQWtDTDtFQUVBQyxRQXBDSyxzQkFvQ007SUFDUCxLQUFLSCxpQkFBTCxDQUF1QkksZ0JBQXZCO0lBQ0FYLE9BQU8sQ0FBQ1ksbUJBQVIsQ0FBNEJDLFVBQVUsQ0FBQ0MsdUJBQXZDLEVBQWdFLEtBQUtDLEtBQXJFLEVBQ0NDLElBREQsQ0FDTSxZQUFXO01BQ2IsS0FBS1QsaUJBQUwsQ0FBdUJVLGVBQXZCLENBQXVDSixVQUFVLENBQUNDLHVCQUFsRDtJQUNILENBRkssQ0FFSkksSUFGSSxDQUVDLElBRkQsQ0FETixXQUlPLFVBQUFDLEtBQUssRUFBSTtNQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBZ0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTVDO0lBQ0gsQ0FORDtFQU9ILENBN0NJO0VBK0NMSyxnQkEvQ0ssOEJBK0NjO0lBQ2YsSUFBSUMsV0FBVyxHQUFHdkIsV0FBVyxDQUFDd0IsbUJBQVosQ0FBZ0N4QixXQUFXLENBQUN5QixhQUFaLEVBQWhDLENBQWxCO0lBQ0EzQixPQUFPLENBQUM0QixZQUFSLENBQXFCSCxXQUFyQixXQUF3QyxVQUFBTixLQUFLLEVBQUcsQ0FBRSxDQUFsRDtFQUNIO0FBbERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5pbXBvcnQgKiBhcyBDb25zdFZhbHVlIGZyb20gXCIuL0NvbnN0VmFsdWVcIjtcbnZhciBVdGlsc0ZCID0gcmVxdWlyZSgnVXRpbHNGQicpO1xudmFyIFV0aWxzQ29tbW9uID0gcmVxdWlyZSgnVXRpbHNDb21tb24nKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgc2NyZWVuTGVhZGVyYm9hcmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiByZXF1aXJlKCdTY3JlZW5MZWFkZXJib2FyZCcpLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNjcmVlbkxlYWRlcmJvYXJkLmNsZWFyTGVhZGVyYm9hcmQoKTtcbiAgICAgICAgVXRpbHNGQi5zZXRMZWFkZXJib2FyZEFzeW5jKENvbnN0VmFsdWUuTEVBREVSQk9BUkRfU09DUkVfV09STEQsIHRoaXMuc2NvcmUpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5MZWFkZXJib2FyZC5zaG93TGVhZGVyYm9hcmQoQ29uc3RWYWx1ZS5MRUFERVJCT0FSRF9TT0NSRV9XT1JMRCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0bGVhZGVyYm9hcmRhc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0ludml0ZSgpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jMihpbWFnZUJhc2U2NCkuY2F0Y2goZXJyb3IgPT57fSk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e3d3uk/+xJdZgDNuHQMr34', 'ScreenMgr');
// scripts/ScreenMgr.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var ScreenMgr = cc.Class({
  "extends": cc.Component,
  properties: {
    screens: {
      "default": [],
      type: [cc.Node]
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    ScreenMgr.instance = this;
    this.screensMap = new Map();

    for (var i = 0; i < this.screens.length; i++) {
      this.screensMap.set(this.screens[i].name, this.screens[i]);
    }
  },
  closeScreen: function closeScreen(screenName) {
    if (this.screensMap.has(screenName)) {
      this.screensMap.get(screenName).active = false;
    }
  },
  showScreen: function showScreen(screenName) {
    if (this.screensMap.has(screenName)) {
      this.screensMap.get(screenName).active = true;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbk1nci5qcyJdLCJuYW1lcyI6WyJTY3JlZW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcmVlbnMiLCJ0eXBlIiwiTm9kZSIsInN0YXRpY3MiLCJpbnN0YW5jZSIsIm9uTG9hZCIsInNjcmVlbnNNYXAiLCJNYXAiLCJpIiwibGVuZ3RoIiwic2V0IiwibmFtZSIsImNsb3NlU2NyZWVuIiwic2NyZWVuTmFtZSIsImhhcyIsImdldCIsImFjdGl2ZSIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBRFM7RUFHckJDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUU7TUFDTCxXQUFTLEVBREo7TUFFTEMsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtJQUZEO0VBREQsQ0FIUztFQVVyQkMsT0FBTyxFQUFFO0lBQ0xDLFFBQVEsRUFBRTtFQURMLENBVlk7RUFjckI7RUFFQUMsTUFoQnFCLG9CQWdCWjtJQUNMVixTQUFTLENBQUNTLFFBQVYsR0FBcUIsSUFBckI7SUFDQSxLQUFLRSxVQUFMLEdBQWtCLElBQUlDLEdBQUosRUFBbEI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtSLE9BQUwsQ0FBYVMsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7TUFDMUMsS0FBS0YsVUFBTCxDQUFnQkksR0FBaEIsQ0FBb0IsS0FBS1YsT0FBTCxDQUFhUSxDQUFiLEVBQWdCRyxJQUFwQyxFQUEwQyxLQUFLWCxPQUFMLENBQWFRLENBQWIsQ0FBMUM7SUFDSDtFQUNKLENBdEJvQjtFQXdCckJJLFdBeEJxQix1QkF3QlRDLFVBeEJTLEVBd0JHO0lBQ3BCLElBQUksS0FBS1AsVUFBTCxDQUFnQlEsR0FBaEIsQ0FBb0JELFVBQXBCLENBQUosRUFBcUM7TUFDakMsS0FBS1AsVUFBTCxDQUFnQlMsR0FBaEIsQ0FBb0JGLFVBQXBCLEVBQWdDRyxNQUFoQyxHQUF5QyxLQUF6QztJQUNIO0VBQ0osQ0E1Qm9CO0VBOEJyQkMsVUE5QnFCLHNCQThCVkosVUE5QlUsRUE4QkU7SUFDbkIsSUFBSSxLQUFLUCxVQUFMLENBQWdCUSxHQUFoQixDQUFvQkQsVUFBcEIsQ0FBSixFQUFxQztNQUNqQyxLQUFLUCxVQUFMLENBQWdCUyxHQUFoQixDQUFvQkYsVUFBcEIsRUFBZ0NHLE1BQWhDLEdBQXlDLElBQXpDO0lBQ0g7RUFDSjtBQWxDb0IsQ0FBVCxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIFNjcmVlbk1nciA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjcmVlbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5zY3JlZW5zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NyZWVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zTWFwLnNldCh0aGlzLnNjcmVlbnNbaV0ubmFtZSwgdGhpcy5zY3JlZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9zZVNjcmVlbihzY3JlZW5OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcmVlbnNNYXAuaGFzKHNjcmVlbk5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNNYXAuZ2V0KHNjcmVlbk5hbWUpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dTY3JlZW4oc2NyZWVuTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5zY3JlZW5zTWFwLmhhcyhzY3JlZW5OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zTWFwLmdldChzY3JlZW5OYW1lKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreOvertakeMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b3baEshgdFrptv+x52jE9P', 'ScoreOvertakeMgr');
// scripts/ScoreOvertakeMgr.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    scoreOvertakePrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  onLoad: function onLoad() {
    this.scoreOvertakePool = new cc.NodePool("scoreOvertake");
  },
  play: function play(posWorld, playerArray) {
    if (playerArray.length > 0) {
      var scoreOvertake = this.spawn();
      var posLocal = this.node.convertToNodeSpaceAR(posWorld);
      scoreOvertake.node.position = posLocal;
      scoreOvertake.setPlayerInfo(playerArray[0]);
      scoreOvertake.play();
    }
  },
  spawn: function spawn() {
    var scoreOvertakeNode = null;

    if (this.scoreOvertakePool.size() > 0) {
      scoreOvertakeNode = this.scoreOvertakePool.get();
    } else {
      scoreOvertakeNode = cc.instantiate(this.scoreOvertakePrefab);
    }

    this.node.addChild(scoreOvertakeNode);
    var scoreOvertake = scoreOvertakeNode.getComponent('ScoreOvertake');
    scoreOvertake.init(this);
    return scoreOvertake;
  },
  despawn: function despawn(scoreOvertake) {
    this.scoreOvertakePool.put(scoreOvertake.node);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlT3ZlcnRha2VNZ3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZU92ZXJ0YWtlUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm9uTG9hZCIsInNjb3JlT3ZlcnRha2VQb29sIiwiTm9kZVBvb2wiLCJwbGF5IiwicG9zV29ybGQiLCJwbGF5ZXJBcnJheSIsImxlbmd0aCIsInNjb3JlT3ZlcnRha2UiLCJzcGF3biIsInBvc0xvY2FsIiwibm9kZSIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zaXRpb24iLCJzZXRQbGF5ZXJJbmZvIiwic2NvcmVPdmVydGFrZU5vZGUiLCJzaXplIiwiZ2V0IiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXQiLCJkZXNwYXduIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsbUJBQW1CLEVBQUU7TUFDakIsV0FBUyxJQURRO01BRWpCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGUTtFQWhCYixDQUhQO0VBeUJMQyxNQXpCSyxvQkF5Qks7SUFDTixLQUFLQyxpQkFBTCxHQUF5QixJQUFJUixFQUFFLENBQUNTLFFBQVAsQ0FBZ0IsZUFBaEIsQ0FBekI7RUFDSCxDQTNCSTtFQTZCTEMsSUFBSSxFQUFFLGNBQVNDLFFBQVQsRUFBbUJDLFdBQW5CLEVBQWdDO0lBQ2xDLElBQUlBLFdBQVcsQ0FBQ0MsTUFBWixHQUFxQixDQUF6QixFQUE0QjtNQUN4QixJQUFJQyxhQUFhLEdBQUcsS0FBS0MsS0FBTCxFQUFwQjtNQUNBLElBQUlDLFFBQVEsR0FBRyxLQUFLQyxJQUFMLENBQVVDLG9CQUFWLENBQStCUCxRQUEvQixDQUFmO01BQ0FHLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQkUsUUFBbkIsR0FBOEJILFFBQTlCO01BQ0FGLGFBQWEsQ0FBQ00sYUFBZCxDQUE0QlIsV0FBVyxDQUFDLENBQUQsQ0FBdkM7TUFDQUUsYUFBYSxDQUFDSixJQUFkO0lBQ0g7RUFDSixDQXJDSTtFQXVDTEssS0FBSyxFQUFFLGlCQUFXO0lBQ2QsSUFBSU0saUJBQWlCLEdBQUcsSUFBeEI7O0lBQ0EsSUFBSSxLQUFLYixpQkFBTCxDQUF1QmMsSUFBdkIsS0FBZ0MsQ0FBcEMsRUFBdUM7TUFDbkNELGlCQUFpQixHQUFHLEtBQUtiLGlCQUFMLENBQXVCZSxHQUF2QixFQUFwQjtJQUNILENBRkQsTUFFTztNQUNIRixpQkFBaUIsR0FBR3JCLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLcEIsbUJBQXBCLENBQXBCO0lBQ0g7O0lBRUQsS0FBS2EsSUFBTCxDQUFVUSxRQUFWLENBQW1CSixpQkFBbkI7SUFDQSxJQUFJUCxhQUFhLEdBQUdPLGlCQUFpQixDQUFDSyxZQUFsQixDQUErQixlQUEvQixDQUFwQjtJQUNBWixhQUFhLENBQUNhLElBQWQsQ0FBbUIsSUFBbkI7SUFFQSxPQUFPYixhQUFQO0VBQ0gsQ0FwREk7RUFzRExjLE9BQU8sRUFBRSxpQkFBU2QsYUFBVCxFQUF3QjtJQUM3QixLQUFLTixpQkFBTCxDQUF1QnFCLEdBQXZCLENBQTJCZixhQUFhLENBQUNHLElBQXpDO0VBQ0g7QUF4REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2NvcmVPdmVydGFrZVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY29yZU92ZXJ0YWtlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChcInNjb3JlT3ZlcnRha2VcIik7XG4gICAgfSxcblxuICAgIHBsYXk6IGZ1bmN0aW9uKHBvc1dvcmxkLCBwbGF5ZXJBcnJheSkge1xuICAgICAgICBpZiAocGxheWVyQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNjb3JlT3ZlcnRha2UgPSB0aGlzLnNwYXduKCk7XG4gICAgICAgICAgICBsZXQgcG9zTG9jYWwgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zV29ybGQpO1xuICAgICAgICAgICAgc2NvcmVPdmVydGFrZS5ub2RlLnBvc2l0aW9uID0gcG9zTG9jYWw7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlLnNldFBsYXllckluZm8ocGxheWVyQXJyYXlbMF0pO1xuICAgICAgICAgICAgc2NvcmVPdmVydGFrZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3Bhd246IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2NvcmVPdmVydGFrZU5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zY29yZU92ZXJ0YWtlUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlTm9kZSA9IHRoaXMuc2NvcmVPdmVydGFrZVBvb2wuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVPdmVydGFrZVByZWZhYik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2NvcmVPdmVydGFrZU5vZGUpO1xuICAgICAgICB2YXIgc2NvcmVPdmVydGFrZSA9IHNjb3JlT3ZlcnRha2VOb2RlLmdldENvbXBvbmVudCgnU2NvcmVPdmVydGFrZScpO1xuICAgICAgICBzY29yZU92ZXJ0YWtlLmluaXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHNjb3JlT3ZlcnRha2U7XG4gICAgfSxcblxuICAgIGRlc3Bhd246IGZ1bmN0aW9uKHNjb3JlT3ZlcnRha2UpIHtcbiAgICAgICAgdGhpcy5zY29yZU92ZXJ0YWtlUG9vbC5wdXQoc2NvcmVPdmVydGFrZS5ub2RlKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenSkinShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57bffBFUrhN1raxXs38dm03', 'ScreenSkinShop');
// scripts/ScreenSkinShop.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var SkinMgr = require('SkinMgr');

var game_scene = require('game_scene');

var ScreenMgr = require('ScreenMgr');

var UtilsFB = require('UtilsFB');

var UtilsCommon = require('UtilsCommon');

var ScreenSkinShop = cc.Class({
  "extends": cc.Component,
  properties: {
    skinItemPrefab: {
      "default": null,
      type: cc.Prefab
    },
    content: {
      "default": null,
      type: cc.Node
    },
    processBar: {
      "default": null,
      type: cc.Node
    },
    processTitle: {
      "default": null,
      type: cc.Label
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    ScreenSkinShop.instance = this;
    this.skinItemPool = new cc.NodePool('SkinItem');
  },
  start: function start() {
    var unlockCountArray = [0, 1, 2, 5];

    for (var i = 0; i < SkinMgr.instance.getSkinSpriteFrameCount(); i++) {
      var skinSpriteFrame = SkinMgr.instance.getSkinSpriteFrame(i);
      var skinItem = this.spawnSkinItem();
      skinItem.node.setParent(this.content);
      var choosed = i == game_scene.instance.currentSkinIndex;
      var unlockCount = 0;

      if (i < unlockCountArray.length) {
        unlockCount = unlockCountArray[i];
      } else {
        unlockCount = unlockCountArray[unlockCountArray.length - 1] + (i - unlockCountArray.length + 1) * 5;
      } // skinItem.init(skinSpriteFrame, choosed, unlockCount);


      skinItem.init(skinSpriteFrame, choosed, 0);
    }

    this.updateLockState();
  },
  onEnable: function onEnable() {
    this.updateLockState();
  },
  onChoose: function onChoose(index) {
    game_scene.instance.onSkinChange(index);

    for (var i = 0; i < this.content.childrenCount; i++) {
      var skinItem = this.content.children[i].getComponent('SkinItem');

      if (i != index) {
        skinItem.onUnchoose();
      }
    }
  },
  spawnSkinItem: function spawnSkinItem() {
    var skinItemNode = null;

    if (this.skinItemPool.size() > 0) {
      skinItemNode = this.skinItemPool.get();
    } else {
      skinItemNode = cc.instantiate(this.skinItemPrefab);
    }

    return skinItemNode.getComponent('SkinItem');
  },
  despawnSkinItem: function despawnSkinItem(item) {
    this.skinItemPool.put(item.node);
  },
  onBtnClickHome: function onBtnClickHome() {
    ScreenMgr.instance.showScreen('ScreenHome');
    ScreenMgr.instance.closeScreen('ScreenSkinShop');
  },
  onBtnClickInvite: function onBtnClickInvite() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64, ['NEW_CONTEXT_ONLY']).then(function () {
      SkinMgr.instance.incrementInvitedCount();
      this.updateLockState();
    }.bind(this))["catch"](function (error) {});
  },
  updateLockState: function updateLockState() {
    var unlockCount = 0;
    var totalCount = this.content.childrenCount;

    for (var i = 0; i < this.content.childrenCount; i++) {
      var skinItem = this.content.children[i].getComponent('SkinItem');

      if (skinItem.updateLockState()) {
        unlockCount += 1;
      }
    }

    var processBarWidth = this.processBar.width;
    this.processBar.position = cc.v2(-processBarWidth + processBarWidth * unlockCount / totalCount, 0);
    this.processTitle.string = unlockCount + "/" + totalCount;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlblNraW5TaG9wLmpzIl0sIm5hbWVzIjpbIlNraW5NZ3IiLCJyZXF1aXJlIiwiZ2FtZV9zY2VuZSIsIlNjcmVlbk1nciIsIlV0aWxzRkIiLCJVdGlsc0NvbW1vbiIsIlNjcmVlblNraW5TaG9wIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJza2luSXRlbVByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInByb2Nlc3NCYXIiLCJwcm9jZXNzVGl0bGUiLCJMYWJlbCIsInN0YXRpY3MiLCJpbnN0YW5jZSIsIm9uTG9hZCIsInNraW5JdGVtUG9vbCIsIk5vZGVQb29sIiwic3RhcnQiLCJ1bmxvY2tDb3VudEFycmF5IiwiaSIsImdldFNraW5TcHJpdGVGcmFtZUNvdW50Iiwic2tpblNwcml0ZUZyYW1lIiwiZ2V0U2tpblNwcml0ZUZyYW1lIiwic2tpbkl0ZW0iLCJzcGF3blNraW5JdGVtIiwibm9kZSIsInNldFBhcmVudCIsImNob29zZWQiLCJjdXJyZW50U2tpbkluZGV4IiwidW5sb2NrQ291bnQiLCJsZW5ndGgiLCJpbml0IiwidXBkYXRlTG9ja1N0YXRlIiwib25FbmFibGUiLCJvbkNob29zZSIsImluZGV4Iiwib25Ta2luQ2hhbmdlIiwiY2hpbGRyZW5Db3VudCIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50Iiwib25VbmNob29zZSIsInNraW5JdGVtTm9kZSIsInNpemUiLCJnZXQiLCJpbnN0YW50aWF0ZSIsImRlc3Bhd25Ta2luSXRlbSIsIml0ZW0iLCJwdXQiLCJvbkJ0bkNsaWNrSG9tZSIsInNob3dTY3JlZW4iLCJjbG9zZVNjcmVlbiIsIm9uQnRuQ2xpY2tJbnZpdGUiLCJpbWFnZUJhc2U2NCIsImdldFNjcmVlbnNob3RCYXNlNjQiLCJnZXRDYW1lcmFNYWluIiwiY2hvb3NlQXN5bmMiLCJ0aGVuIiwiaW5jcmVtZW50SW52aXRlZENvdW50IiwiYmluZCIsImVycm9yIiwidG90YWxDb3VudCIsInByb2Nlc3NCYXJXaWR0aCIsIndpZHRoIiwicG9zaXRpb24iLCJ2MiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRyxPQUFPLEdBQUdILE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUssY0FBYyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUMxQixXQUFTRCxFQUFFLENBQUNFLFNBRGM7RUFHMUJDLFVBQVUsRUFBRTtJQUNSQyxjQUFjLEVBQUU7TUFDWixXQUFTLElBREc7TUFFWkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkcsQ0FEUjtJQU1SQyxPQUFPLEVBQUU7TUFDTCxXQUFTLElBREo7TUFFTEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkosQ0FORDtJQVdSQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkosSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkQsQ0FYSjtJQWdCUkUsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZMLElBQUksRUFBRUwsRUFBRSxDQUFDVztJQUZDO0VBaEJOLENBSGM7RUF5QjFCQyxPQUFPLEVBQUU7SUFDTEMsUUFBUSxFQUFFO0VBREwsQ0F6QmlCO0VBNkIxQjtFQUVBQyxNQS9CMEIsb0JBK0JqQjtJQUNMZixjQUFjLENBQUNjLFFBQWYsR0FBMEIsSUFBMUI7SUFDQSxLQUFLRSxZQUFMLEdBQW9CLElBQUlmLEVBQUUsQ0FBQ2dCLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FB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QW5IeUIsQ0FBVCxDQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKCdnYW1lX3NjZW5lJyk7XG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG52YXIgU2NyZWVuU2tpblNob3AgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2luSXRlbVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgfSxcblxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9jZXNzQmFyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9jZXNzVGl0bGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNjcmVlblNraW5TaG9wLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5za2luSXRlbVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ1NraW5JdGVtJyk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgdW5sb2NrQ291bnRBcnJheSA9IFswLCAxLCAyLCA1XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTa2luTWdyLmluc3RhbmNlLmdldFNraW5TcHJpdGVGcmFtZUNvdW50KCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNraW5TcHJpdGVGcmFtZSA9IFNraW5NZ3IuaW5zdGFuY2UuZ2V0U2tpblNwcml0ZUZyYW1lKGkpO1xuICAgICAgICAgICAgbGV0IHNraW5JdGVtID0gdGhpcy5zcGF3blNraW5JdGVtKCk7XG4gICAgICAgICAgICBza2luSXRlbS5ub2RlLnNldFBhcmVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGNob29zZWQgPSBpID09IGdhbWVfc2NlbmUuaW5zdGFuY2UuY3VycmVudFNraW5JbmRleDtcblxuICAgICAgICAgICAgbGV0IHVubG9ja0NvdW50ID0gMDtcbiAgICAgICAgICAgIGlmIChpIDwgdW5sb2NrQ291bnRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB1bmxvY2tDb3VudCA9IHVubG9ja0NvdW50QXJyYXlbaV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9ja0NvdW50ID0gdW5sb2NrQ291bnRBcnJheVt1bmxvY2tDb3VudEFycmF5Lmxlbmd0aCAtIDFdICsgKGkgLSB1bmxvY2tDb3VudEFycmF5Lmxlbmd0aCArIDEpICogNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNraW5JdGVtLmluaXQoc2tpblNwcml0ZUZyYW1lLCBjaG9vc2VkLCB1bmxvY2tDb3VudCk7XG4gICAgICAgICAgICBza2luSXRlbS5pbml0KHNraW5TcHJpdGVGcmFtZSwgY2hvb3NlZCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUxvY2tTdGF0ZSgpO1xuICAgIH0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NrU3RhdGUoKTtcbiAgICB9LFxuXG4gICAgb25DaG9vc2U6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uU2tpbkNoYW5nZShpbmRleCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2tpbkl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KCdTa2luSXRlbScpO1xuICAgICAgICAgICAgaWYgKGkgIT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBza2luSXRlbS5vblVuY2hvb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3Bhd25Ta2luSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2tpbkl0ZW1Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuc2tpbkl0ZW1Qb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIHNraW5JdGVtTm9kZSA9IHRoaXMuc2tpbkl0ZW1Qb29sLmdldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2tpbkl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5za2luSXRlbVByZWZhYik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2tpbkl0ZW1Ob2RlLmdldENvbXBvbmVudCgnU2tpbkl0ZW0nKTtcbiAgICB9LFxuXG4gICAgZGVzcGF3blNraW5JdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNraW5JdGVtUG9vbC5wdXQoaXRlbS5ub2RlKTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0hvbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkhvbWUnKTtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLmNsb3NlU2NyZWVuKCdTY3JlZW5Ta2luU2hvcCcpO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrSW52aXRlKCkge1xuICAgICAgICB2YXIgaW1hZ2VCYXNlNjQgPSBVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSk7XG4gICAgICAgIFV0aWxzRkIuY2hvb3NlQXN5bmMoaW1hZ2VCYXNlNjQsIFsnTkVXX0NPTlRFWFRfT05MWSddKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFNraW5NZ3IuaW5zdGFuY2UuaW5jcmVtZW50SW52aXRlZENvdW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NrU3RhdGUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IH0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVMb2NrU3RhdGUoKSB7XG4gICAgICAgIGxldCB1bmxvY2tDb3VudCA9IDA7XG4gICAgICAgIGxldCB0b3RhbENvdW50ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNraW5JdGVtID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudCgnU2tpbkl0ZW0nKTtcbiAgICAgICAgICAgIGlmIChza2luSXRlbS51cGRhdGVMb2NrU3RhdGUoKSkge1xuICAgICAgICAgICAgICAgIHVubG9ja0NvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvY2Vzc0JhcldpZHRoID0gdGhpcy5wcm9jZXNzQmFyLndpZHRoO1xuICAgICAgICB0aGlzLnByb2Nlc3NCYXIucG9zaXRpb24gPSBjYy52MigtcHJvY2Vzc0JhcldpZHRoICsgcHJvY2Vzc0JhcldpZHRoICogdW5sb2NrQ291bnQgLyB0b3RhbENvdW50LCAwKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVGl0bGUuc3RyaW5nID0gdW5sb2NrQ291bnQgKyBcIi9cIiArIHRvdGFsQ291bnQ7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8148FzawZJg58tXk0uob66', 'SkinItem');
// scripts/SkinItem.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var screenSkinShop = require('ScreenSkinShop');

var SkinMgr = require('SkinMgr');

cc.Class({
  "extends": cc.Component,
  properties: {
    skin: {
      "default": null,
      type: cc.Sprite
    },
    spriteChoose: {
      "default": null,
      type: cc.Sprite
    },
    spriteFrameChoose: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrameUnchoose: {
      "default": null,
      type: cc.SpriteFrame
    },
    labelInviteCount: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on('click', this.onBtnClick, this);
    this.unlockCount = 0;
    this.unlocked = true;
  },
  start: function start() {},
  // update (dt) {},
  init: function init(skinSpriteFrame, choosed, unlockCount) {
    this.skin.spriteFrame = skinSpriteFrame;
    this.spriteChoose.spriteFrame = choosed ? this.spriteFrameChoose : this.spriteFrameUnchoose;
    this.unlockCount = unlockCount;
  },
  onBtnClick: function onBtnClick() {
    if (this.unlocked) {
      this.onChoose();
    } else {
      screenSkinShop.instance.onBtnClickInvite();
    }
  },
  onChoose: function onChoose() {
    this.spriteChoose.spriteFrame = this.spriteFrameChoose;
    screenSkinShop.instance.onChoose(this.node.getSiblingIndex());
  },
  onUnchoose: function onUnchoose() {
    this.spriteChoose.spriteFrame = this.spriteFrameUnchoose;
  },
  updateLockState: function updateLockState() {
    var invitedCount = SkinMgr.instance.getInvitedCount();

    if (invitedCount >= this.unlockCount) {
      this.unlocked = true;
      this.labelInviteCount.node.active = false;
    } else {
      this.unlocked = false;
      this.labelInviteCount.node.active = true;
      this.labelInviteCount.string = invitedCount + "/" + this.unlockCount;
    }

    return this.unlocked;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NraW5JdGVtLmpzIl0sIm5hbWVzIjpbInNjcmVlblNraW5TaG9wIiwicmVxdWlyZSIsIlNraW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNraW4iLCJ0eXBlIiwiU3ByaXRlIiwic3ByaXRlQ2hvb3NlIiwic3ByaXRlRnJhbWVDaG9vc2UiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lVW5jaG9vc2UiLCJsYWJlbEludml0ZUNvdW50IiwiTGFiZWwiLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbkJ0bkNsaWNrIiwidW5sb2NrQ291bnQiLCJ1bmxvY2tlZCIsInN0YXJ0IiwiaW5pdCIsInNraW5TcHJpdGVGcmFtZSIsImNob29zZWQiLCJzcHJpdGVGcmFtZSIsIm9uQ2hvb3NlIiwiaW5zdGFuY2UiLCJvbkJ0bkNsaWNrSW52aXRlIiwiZ2V0U2libGluZ0luZGV4Iiwib25VbmNob29zZSIsInVwZGF0ZUxvY2tTdGF0ZSIsImludml0ZWRDb3VudCIsImdldEludml0ZWRDb3VudCIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFO01BQ0YsV0FBUyxJQURQO01BRUZDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZQLENBREU7SUFNUkMsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZDLENBTk47SUFXUkUsaUJBQWlCLEVBQUU7TUFDZixXQUFTLElBRE07TUFFZkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTO0lBRk0sQ0FYWDtJQWdCUkMsbUJBQW1CLEVBQUU7TUFDakIsV0FBUyxJQURRO01BRWpCTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1M7SUFGUSxDQWhCYjtJQXFCUkUsZ0JBQWdCLEVBQUU7TUFDZCxXQUFTLElBREs7TUFFZE4sSUFBSSxFQUFFTCxFQUFFLENBQUNZO0lBRks7RUFyQlYsQ0FIUDtFQThCTDtFQUVBQyxNQWhDSyxvQkFnQ0s7SUFDTixLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLEtBQUtDLFVBQTNCLEVBQXVDLElBQXZDO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixDQUFuQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7RUFDSCxDQXBDSTtFQXNDTEMsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0k7RUEwQ0w7RUFDQUMsSUFBSSxFQUFFLGNBQVNDLGVBQVQsRUFBMEJDLE9BQTFCLEVBQW1DTCxXQUFuQyxFQUFnRDtJQUNsRCxLQUFLYixJQUFMLENBQVVtQixXQUFWLEdBQXdCRixlQUF4QjtJQUNBLEtBQUtkLFlBQUwsQ0FBa0JnQixXQUFsQixHQUFnQ0QsT0FBTyxHQUFHLEtBQUtkLGlCQUFSLEdBQTRCLEtBQUtFLG1CQUF4RTtJQUNBLEtBQUtPLFdBQUwsR0FBbUJBLFdBQW5CO0VBQ0gsQ0EvQ0k7RUFpRExELFVBQVUsRUFBRSxzQkFBVztJQUNuQixJQUFJLEtBQUtFLFFBQVQsRUFBbUI7TUFDZixLQUFLTSxRQUFMO0lBQ0gsQ0FGRCxNQUVPO01BQ0gzQixjQUFjLENBQUM0QixRQUFmLENBQXdCQyxnQkFBeEI7SUFDSDtFQUNKLENBdkRJO0VBeURMRixRQUFRLEVBQUUsb0JBQVc7SUFDakIsS0FBS2pCLFlBQUwsQ0FBa0JnQixXQUFsQixHQUFnQyxLQUFLZixpQkFBckM7SUFDQVgsY0FBYyxDQUFDNEIsUUFBZixDQUF3QkQsUUFBeEIsQ0FBaUMsS0FBS1YsSUFBTCxDQUFVYSxlQUFWLEVBQWpDO0VBQ0gsQ0E1REk7RUE4RExDLFVBQVUsRUFBRSxzQkFBVztJQUNuQixLQUFLckIsWUFBTCxDQUFrQmdCLFdBQWxCLEdBQWdDLEtBQUtiLG1CQUFyQztFQUNILENBaEVJO0VBa0VMbUIsZUFsRUssNkJBa0VhO0lBQ2QsSUFBSUMsWUFBWSxHQUFHL0IsT0FBTyxDQUFDMEIsUUFBUixDQUFpQk0sZUFBakIsRUFBbkI7O0lBRUEsSUFBSUQsWUFBWSxJQUFJLEtBQUtiLFdBQXpCLEVBQXNDO01BQ2xDLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7TUFDQSxLQUFLUCxnQkFBTCxDQUFzQkcsSUFBdEIsQ0FBMkJrQixNQUEzQixHQUFvQyxLQUFwQztJQUNILENBSEQsTUFHTztNQUNILEtBQUtkLFFBQUwsR0FBZ0IsS0FBaEI7TUFDQSxLQUFLUCxnQkFBTCxDQUFzQkcsSUFBdEIsQ0FBMkJrQixNQUEzQixHQUFvQyxJQUFwQztNQUNBLEtBQUtyQixnQkFBTCxDQUFzQnNCLE1BQXRCLEdBQStCSCxZQUFZLEdBQUcsR0FBZixHQUFxQixLQUFLYixXQUF6RDtJQUNIOztJQUVELE9BQU8sS0FBS0MsUUFBWjtFQUNIO0FBL0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciBzY3JlZW5Ta2luU2hvcCA9IHJlcXVpcmUoJ1NjcmVlblNraW5TaG9wJyk7XG52YXIgU2tpbk1nciA9IHJlcXVpcmUoJ1NraW5NZ3InKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNraW46IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3ByaXRlQ2hvb3NlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNwcml0ZUZyYW1lQ2hvb3NlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3ByaXRlRnJhbWVVbmNob29zZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICB9LFxuXG4gICAgICAgIGxhYmVsSW52aXRlQ291bnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bmxvY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudW5sb2NrZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgaW5pdDogZnVuY3Rpb24oc2tpblNwcml0ZUZyYW1lLCBjaG9vc2VkLCB1bmxvY2tDb3VudCkge1xuICAgICAgICB0aGlzLnNraW4uc3ByaXRlRnJhbWUgPSBza2luU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuc3ByaXRlQ2hvb3NlLnNwcml0ZUZyYW1lID0gY2hvb3NlZCA/IHRoaXMuc3ByaXRlRnJhbWVDaG9vc2UgOiB0aGlzLnNwcml0ZUZyYW1lVW5jaG9vc2U7XG4gICAgICAgIHRoaXMudW5sb2NrQ291bnQgPSB1bmxvY2tDb3VudDtcbiAgICB9LFxuXG4gICAgb25CdG5DbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnVubG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hvb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JlZW5Ta2luU2hvcC5pbnN0YW5jZS5vbkJ0bkNsaWNrSW52aXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25DaG9vc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNwcml0ZUNob29zZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVDaG9vc2U7XG4gICAgICAgIHNjcmVlblNraW5TaG9wLmluc3RhbmNlLm9uQ2hvb3NlKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgfSxcblxuICAgIG9uVW5jaG9vc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNwcml0ZUNob29zZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVVbmNob29zZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlTG9ja1N0YXRlKCkge1xuICAgICAgICBsZXQgaW52aXRlZENvdW50ID0gU2tpbk1nci5pbnN0YW5jZS5nZXRJbnZpdGVkQ291bnQoKVxuXG4gICAgICAgIGlmIChpbnZpdGVkQ291bnQgPj0gdGhpcy51bmxvY2tDb3VudCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxJbnZpdGVDb3VudC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQuc3RyaW5nID0gaW52aXRlZENvdW50ICsgXCIvXCIgKyB0aGlzLnVubG9ja0NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudW5sb2NrZWQ7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UtilsCommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d958AFPlJCn6gdYfD/DmfP', 'UtilsCommon');
// scripts/UtilsCommon.js

"use strict";

var UtilsCommon = cc.Class({
  "extends": cc.Component,
  statics: {
    _cameraMain: null,
    getCameraMain: function getCameraMain() {
      if (UtilsCommon._cameraMain == null) {
        UtilsCommon._cameraMain = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
      }

      return UtilsCommon._cameraMain;
    },
    //http://docs.cocos2d-x.org/creator/manual/zh/render/camera.html#截图
    //https://github.com/cocos-creator/example-cases/blob/master/assets/cases/07_render_texture/render_to_canvas.js
    getScreenshotBase64: function getScreenshotBase64(camera) {
      var texture = new cc.RenderTexture();
      var gl = cc.game._renderContext;
      texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);
      camera.targetTexture = texture;
      camera.render();
      camera.targetTexture = null;
      var data = texture.readPixels();
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = texture.width;
      canvas.height = texture.height;
      var width = texture.width;
      var height = texture.height;
      var rowBytes = width * 4;

      for (var row = 0; row < height; row++) {
        var srow = height - 1 - row;
        var imageData = ctx.createImageData(width, 1);
        var start = srow * width * 4;

        for (var i = 0; i < rowBytes; i++) {
          imageData.data[i] = data[start + i];
        }

        ctx.putImageData(imageData, 0, row);
      }

      var dataURL = canvas.toDataURL("image/jpeg");
      return dataURL;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1V0aWxzQ29tbW9uLmpzIl0sIm5hbWVzIjpbIlV0aWxzQ29tbW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJfY2FtZXJhTWFpbiIsImdldENhbWVyYU1haW4iLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiQ2FtZXJhIiwiZ2V0U2NyZWVuc2hvdEJhc2U2NCIsImNhbWVyYSIsInRleHR1cmUiLCJSZW5kZXJUZXh0dXJlIiwiZ2wiLCJnYW1lIiwiX3JlbmRlckNvbnRleHQiLCJpbml0V2l0aFNpemUiLCJ2aXNpYmxlUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiU1RFTkNJTF9JTkRFWDgiLCJ0YXJnZXRUZXh0dXJlIiwicmVuZGVyIiwiZGF0YSIsInJlYWRQaXhlbHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwicm93Qnl0ZXMiLCJyb3ciLCJzcm93IiwiaW1hZ2VEYXRhIiwiY3JlYXRlSW1hZ2VEYXRhIiwic3RhcnQiLCJpIiwicHV0SW1hZ2VEYXRhIiwiZGF0YVVSTCIsInRvRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3ZCLFdBQVNELEVBQUUsQ0FBQ0UsU0FEVztFQUd2QkMsT0FBTyxFQUFFO0lBQ0xDLFdBQVcsRUFBRSxJQURSO0lBRUxDLGFBQWEsRUFBRSx5QkFBVztNQUN0QixJQUFJTixXQUFXLENBQUNLLFdBQVosSUFBMkIsSUFBL0IsRUFBcUM7UUFDakNMLFdBQVcsQ0FBQ0ssV0FBWixHQUEwQkosRUFBRSxDQUFDTSxJQUFILENBQVEsb0JBQVIsRUFBOEJDLFlBQTlCLENBQTJDUCxFQUFFLENBQUNRLE1BQTlDLENBQTFCO01BQ0g7O01BQ0QsT0FBT1QsV0FBVyxDQUFDSyxXQUFuQjtJQUNILENBUEk7SUFTTDtJQUNBO0lBQ0FLLG1CQUFtQixFQUFFLDZCQUFTQyxNQUFULEVBQWlCO01BQ2xDLElBQUlDLE9BQU8sR0FBRyxJQUFJWCxFQUFFLENBQUNZLGFBQVAsRUFBZDtNQUNBLElBQUlDLEVBQUUsR0FBR2IsRUFBRSxDQUFDYyxJQUFILENBQVFDLGNBQWpCO01BQ0FKLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQmhCLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZUMsS0FBcEMsRUFBMkNsQixFQUFFLENBQUNpQixXQUFILENBQWVFLE1BQTFELEVBQWtFTixFQUFFLENBQUNPLGNBQXJFO01BQ0FWLE1BQU0sQ0FBQ1csYUFBUCxHQUF1QlYsT0FBdkI7TUFDQUQsTUFBTSxDQUFDWSxNQUFQO01BQ0FaLE1BQU0sQ0FBQ1csYUFBUCxHQUF1QixJQUF2QjtNQUVBLElBQUlFLElBQUksR0FBR1osT0FBTyxDQUFDYSxVQUFSLEVBQVg7TUFFQSxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO01BQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtNQUNBSixNQUFNLENBQUNQLEtBQVAsR0FBZVAsT0FBTyxDQUFDTyxLQUF2QjtNQUNBTyxNQUFNLENBQUNOLE1BQVAsR0FBZ0JSLE9BQU8sQ0FBQ1EsTUFBeEI7TUFFQSxJQUFJRCxLQUFLLEdBQUdQLE9BQU8sQ0FBQ08sS0FBcEI7TUFDQSxJQUFJQyxNQUFNLEdBQUdSLE9BQU8sQ0FBQ1EsTUFBckI7TUFDQSxJQUFJVyxRQUFRLEdBQUdaLEtBQUssR0FBRyxDQUF2Qjs7TUFDQSxLQUFLLElBQUlhLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdaLE1BQXhCLEVBQWdDWSxHQUFHLEVBQW5DLEVBQXVDO1FBQ25DLElBQUlDLElBQUksR0FBR2IsTUFBTSxHQUFHLENBQVQsR0FBYVksR0FBeEI7UUFDQSxJQUFJRSxTQUFTLEdBQUdMLEdBQUcsQ0FBQ00sZUFBSixDQUFvQmhCLEtBQXBCLEVBQTJCLENBQTNCLENBQWhCO1FBQ0EsSUFBSWlCLEtBQUssR0FBR0gsSUFBSSxHQUFHZCxLQUFQLEdBQWUsQ0FBM0I7O1FBQ0EsS0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sUUFBcEIsRUFBOEJNLENBQUMsRUFBL0IsRUFBbUM7VUFDL0JILFNBQVMsQ0FBQ1YsSUFBVixDQUFlYSxDQUFmLElBQW9CYixJQUFJLENBQUNZLEtBQUssR0FBQ0MsQ0FBUCxDQUF4QjtRQUNIOztRQUVEUixHQUFHLENBQUNTLFlBQUosQ0FBaUJKLFNBQWpCLEVBQTRCLENBQTVCLEVBQStCRixHQUEvQjtNQUNIOztNQUVELElBQUlPLE9BQU8sR0FBR2IsTUFBTSxDQUFDYyxTQUFQLENBQWlCLFlBQWpCLENBQWQ7TUFDQSxPQUFPRCxPQUFQO0lBQ0g7RUExQ0k7QUFIYyxDQUFULENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVXRpbHNDb21tb24gPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBfY2FtZXJhTWFpbjogbnVsbCxcbiAgICAgICAgZ2V0Q2FtZXJhTWFpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHNDb21tb24uX2NhbWVyYU1haW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFV0aWxzQ29tbW9uLl9jYW1lcmFNYWluID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBVdGlsc0NvbW1vbi5fY2FtZXJhTWFpbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvL2h0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvemgvcmVuZGVyL2NhbWVyYS5odG1sI+aIquWbvlxuICAgICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9jb2Nvcy1jcmVhdG9yL2V4YW1wbGUtY2FzZXMvYmxvYi9tYXN0ZXIvYXNzZXRzL2Nhc2VzLzA3X3JlbmRlcl90ZXh0dXJlL3JlbmRlcl90b19jYW52YXMuanNcbiAgICAgICAgZ2V0U2NyZWVuc2hvdEJhc2U2NDogZnVuY3Rpb24oY2FtZXJhKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgZ2wgPSBjYy5nYW1lLl9yZW5kZXJDb250ZXh0O1xuICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUoY2MudmlzaWJsZVJlY3Qud2lkdGgsIGNjLnZpc2libGVSZWN0LmhlaWdodCwgZ2wuU1RFTkNJTF9JTkRFWDgpO1xuICAgICAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xuXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHJvd0J5dGVzID0gd2lkdGggKiA0O1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgIGxldCBzcm93ID0gaGVpZ2h0IC0gMSAtIHJvdztcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqIHdpZHRoICogNDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPSBkYXRhW3N0YXJ0K2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFVUkw7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenUpload.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '017c28hgixMyJ0tqnaNcu1r', 'ScreenUpload');
// scripts/ScreenUpload.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var SkinMgr = require('SkinMgr');

var game_scene = require('game_scene');

var ScreenMgr = require('ScreenMgr');

var UtilsFB = require('UtilsFB');

var UtilsCommon = require('UtilsCommon');

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    loading: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.loading.node.active = true;
    setTimeout(function () {
      _this.loading.node.active = false;
    }, 5000);
  },
  update: function update(dt) {
    if (this.loading === false) {
      ScreenMgr.instance.showScreen('ScreenHome');
      this.node.active = false;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlblVwbG9hZC5qcyJdLCJuYW1lcyI6WyJTa2luTWdyIiwicmVxdWlyZSIsImdhbWVfc2NlbmUiLCJTY3JlZW5NZ3IiLCJVdGlsc0ZCIiwiVXRpbHNDb21tb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxvYWRpbmciLCJ0eXBlIiwiTGFiZWwiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJzZXRUaW1lb3V0IiwidXBkYXRlIiwiZHQiLCJpbnN0YW5jZSIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsT0FBTyxHQUFHSCxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJSSxXQUFXLEdBQUdKLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBSyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxJQURKO01BRUxDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZKO0VBaEJELENBSFA7RUF5Qkw7RUFFQTtFQUVBQyxLQTdCSyxtQkE2Qkc7SUFBQTs7SUFDSixLQUFLSCxPQUFMLENBQWFJLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLElBQTNCO0lBRUFDLFVBQVUsQ0FBQyxZQUFNO01BQ2IsS0FBSSxDQUFDTixPQUFMLENBQWFJLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO0lBQ0gsQ0FGUyxFQUVQLElBRk8sQ0FBVjtFQUdILENBbkNJO0VBcUNMRSxNQXJDSyxrQkFxQ0VDLEVBckNGLEVBcUNNO0lBQ1AsSUFBSSxLQUFLUixPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO01BQ3hCUCxTQUFTLENBQUNnQixRQUFWLENBQW1CQyxVQUFuQixDQUE4QixZQUE5QjtNQUNBLEtBQUtOLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0o7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKCdnYW1lX3NjZW5lJyk7XG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBTY3JlZW5NZ3IuaW5zdGFuY2Uuc2hvd1NjcmVlbignU2NyZWVuSG9tZScpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fee9JgiFJD/LE6AoB4KkCA', 'SkinMgr');
// scripts/SkinMgr.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var SkinMgr = cc.Class({
  "extends": cc.Component,
  properties: {
    skinSpriteFrames: {
      "default": [],
      type: [cc.SpriteFrame]
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    SkinMgr.instance = this;
    this.invitedCount = 0;
  },
  start: function start() {
    if (typeof FBInstant != 'undefined') {
      FBInstant.player.getStatsAsync(['invitedCount']).then(function (stats) {
        this.invitedCount = stats['invitedCount'];
        console.log("getStatsAsync success: " + JSON.stringify(stats) + " invitedCount: " + this.invitedCount);
      }.bind(this))["catch"](function (error) {
        console.log("getStatsAsync error: " + JSON.stringify(error));
      });
    }
  },
  getSkinSpriteFrame: function getSkinSpriteFrame(index) {
    return this.skinSpriteFrames[index];
  },
  getSkinSpriteFrameCount: function getSkinSpriteFrameCount() {
    return this.skinSpriteFrames.length;
  },
  getInvitedCount: function getInvitedCount() {
    return this.invitedCount;
  },
  incrementInvitedCount: function incrementInvitedCount() {
    this.invitedCount += 1;

    if (typeof FBInstant != 'undefined') {
      FBInstant.player.incrementStatsAsync({
        invitedCount: 1
      }).then(function (stats) {
        console.log("incrementStatsAsync success: " + JSON.stringify(stats));
        this.invitedCount = stats['invitedCount'];
      }.bind(this))["catch"](function (error) {
        console.log("incrementStatsAsync error: " + JSON.stringify(error));
      });
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NraW5NZ3IuanMiXSwibmFtZXMiOlsiU2tpbk1nciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2tpblNwcml0ZUZyYW1lcyIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInN0YXRpY3MiLCJpbnN0YW5jZSIsIm9uTG9hZCIsImludml0ZWRDb3VudCIsInN0YXJ0IiwiRkJJbnN0YW50IiwicGxheWVyIiwiZ2V0U3RhdHNBc3luYyIsInRoZW4iLCJzdGF0cyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCIsImVycm9yIiwiZ2V0U2tpblNwcml0ZUZyYW1lIiwiaW5kZXgiLCJnZXRTa2luU3ByaXRlRnJhbWVDb3VudCIsImxlbmd0aCIsImdldEludml0ZWRDb3VudCIsImluY3JlbWVudEludml0ZWRDb3VudCIsImluY3JlbWVudFN0YXRzQXN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNuQixXQUFTRCxFQUFFLENBQUNFLFNBRE87RUFHbkJDLFVBQVUsRUFBRTtJQUNSQyxnQkFBZ0IsRUFBRTtNQUNkLFdBQVMsRUFESztNQUVkQyxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxXQUFKO0lBRlE7RUFEVixDQUhPO0VBVW5CQyxPQUFPLEVBQUU7SUFDTEMsUUFBUSxFQUFFO0VBREwsQ0FWVTtFQWNuQjtFQUVBQyxNQWhCbUIsb0JBZ0JUO0lBQ05WLE9BQU8sQ0FBQ1MsUUFBUixHQUFtQixJQUFuQjtJQUNBLEtBQUtFLFlBQUwsR0FBb0IsQ0FBcEI7RUFDSCxDQW5Ca0I7RUFxQm5CQyxLQXJCbUIsbUJBcUJYO0lBQ0osSUFBSSxPQUFPQyxTQUFQLElBQW9CLFdBQXhCLEVBQXFDO01BQ2pDQSxTQUFTLENBQUNDLE1BQVYsQ0FBaUJDLGFBQWpCLENBQStCLENBQUMsY0FBRCxDQUEvQixFQUNDQyxJQURELENBQ00sVUFBU0MsS0FBVCxFQUFnQjtRQUNsQixLQUFLTixZQUFMLEdBQW9CTSxLQUFLLENBQUMsY0FBRCxDQUF6QjtRQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBNEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTVCLEdBQW9ELGlCQUFwRCxHQUF3RSxLQUFLTixZQUF6RjtNQUNILENBSEssQ0FHSlcsSUFISSxDQUdDLElBSEQsQ0FETixXQUtPLFVBQVNDLEtBQVQsRUFBZ0I7UUFDbkJMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUEwQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVFLEtBQWYsQ0FBdEM7TUFDSCxDQVBEO0lBUUg7RUFDSixDQWhDa0I7RUFrQ25CQyxrQkFBa0IsRUFBRSw0QkFBU0MsS0FBVCxFQUFnQjtJQUNoQyxPQUFPLEtBQUtwQixnQkFBTCxDQUFzQm9CLEtBQXRCLENBQVA7RUFDSCxDQXBDa0I7RUFzQ25CQyx1QkFBdUIsRUFBRSxtQ0FBVztJQUNoQyxPQUFPLEtBQUtyQixnQkFBTCxDQUFzQnNCLE1BQTdCO0VBQ0gsQ0F4Q2tCO0VBMENuQkMsZUExQ21CLDZCQTBDRDtJQUNkLE9BQU8sS0FBS2pCLFlBQVo7RUFDSCxDQTVDa0I7RUE4Q25Ca0IscUJBOUNtQixtQ0E4Q0s7SUFDcEIsS0FBS2xCLFlBQUwsSUFBcUIsQ0FBckI7O0lBRUEsSUFBSSxPQUFPRSxTQUFQLElBQW9CLFdBQXhCLEVBQXFDO01BQ2pDQSxTQUFTLENBQUNDLE1BQVYsQ0FDQ2dCLG1CQURELENBQ3FCO1FBQ2pCbkIsWUFBWSxFQUFFO01BREcsQ0FEckIsRUFJQ0ssSUFKRCxDQUlNLFVBQVNDLEtBQVQsRUFBZ0I7UUFDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFrQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsQ0FBOUM7UUFDQSxLQUFLTixZQUFMLEdBQW9CTSxLQUFLLENBQUMsY0FBRCxDQUF6QjtNQUNILENBSEssQ0FHSkssSUFISSxDQUdDLElBSEQsQ0FKTixXQVFPLFVBQVNDLEtBQVQsRUFBZ0I7UUFDbkJMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFnQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVFLEtBQWYsQ0FBNUM7TUFDSCxDQVZEO0lBV0g7RUFDSjtBQTlEa0IsQ0FBVCxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxudmFyIFNraW5NZ3IgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2luU3ByaXRlRnJhbWVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2tpbk1nci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW52aXRlZENvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBGQkluc3RhbnQucGxheWVyLmdldFN0YXRzQXN5bmMoWydpbnZpdGVkQ291bnQnXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVkQ291bnQgPSBzdGF0c1snaW52aXRlZENvdW50J107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRTdGF0c0FzeW5jIHN1Y2Nlc3M6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdHMpICsgXCIgaW52aXRlZENvdW50OiBcIiArIHRoaXMuaW52aXRlZENvdW50KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0U3RhdHNBc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0U2tpblNwcml0ZUZyYW1lOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5za2luU3ByaXRlRnJhbWVzW2luZGV4XTtcbiAgICB9LFxuXG4gICAgZ2V0U2tpblNwcml0ZUZyYW1lQ291bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5za2luU3ByaXRlRnJhbWVzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgZ2V0SW52aXRlZENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnZpdGVkQ291bnQ7XG4gICAgfSxcblxuICAgIGluY3JlbWVudEludml0ZWRDb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnZpdGVkQ291bnQgKz0gMTtcblxuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgRkJJbnN0YW50LnBsYXllclxuICAgICAgICAgICAgLmluY3JlbWVudFN0YXRzQXN5bmMoe1xuICAgICAgICAgICAgICAgIGludml0ZWRDb3VudDogMSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdGF0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5jcmVtZW50U3RhdHNBc3luYyBzdWNjZXNzOiBcIiArIEpTT04uc3RyaW5naWZ5KHN0YXRzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVkQ291bnQgPSBzdGF0c1snaW52aXRlZENvdW50J107XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluY3JlbWVudFN0YXRzQXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98313d7bZFJqKdxyYnvxjBm', 'block');
// scripts/block.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.icon = this.node.getChildByName("icon");
    this.mid = this.node.getChildByName("mid");
    this.up = this.node.getChildByName("up");
    this.down = this.node.getChildByName("down");
    this.left = this.node.getChildByName("left");
    this.right = this.node.getChildByName("right");
  },
  // dir = 1, 右边跳跃, -1 表示左边跳跃
  is_jump_on_block: function is_jump_on_block(w_dst_pos, direction) {
    var mid_pos = this.mid.convertToWorldSpaceAR(cc.v2(0, 0));
    var dir = w_dst_pos.sub(mid_pos);
    var min_len = dir.mag();
    var min_pos = mid_pos; //跳到中间得分多

    var jumpScore = 2;

    if (direction === 1) {
      var up_pos = this.up.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(up_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = up_pos;
        jumpScore = 1;
      }

      var down_pos = this.down.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(down_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = down_pos;
        jumpScore = 1;
      }
    } else {
      var left_pos = this.left.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(left_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = left_pos;
        jumpScore = 1;
      }

      var right_pos = this.right.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(right_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = right_pos;
        jumpScore = 1;
      }
    } // 找到了跳跃的位置距离参考点最近的那个参考点以及位置;


    dir = w_dst_pos.sub(min_pos);

    if (dir.mag() < 100) {
      w_dst_pos.x = min_pos.x;
      w_dst_pos.y = min_pos.y;
      return jumpScore;
    } // end 


    return 0;
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2Jsb2NrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJpY29uIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwibWlkIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiaXNfanVtcF9vbl9ibG9jayIsIndfZHN0X3BvcyIsImRpcmVjdGlvbiIsIm1pZF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImRpciIsInN1YiIsIm1pbl9sZW4iLCJtYWciLCJtaW5fcG9zIiwianVtcFNjb3JlIiwidXBfcG9zIiwibGVuIiwiZG93bl9wb3MiLCJsZWZ0X3BvcyIsInJpZ2h0X3BvcyIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaO0lBRUEsS0FBS0MsR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVUMsY0FBVixDQUF5QixLQUF6QixDQUFYO0lBQ0EsS0FBS0UsRUFBTCxHQUFVLEtBQUtILElBQUwsQ0FBVUMsY0FBVixDQUF5QixJQUF6QixDQUFWO0lBQ0EsS0FBS0csSUFBTCxHQUFZLEtBQUtKLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaO0lBRUEsS0FBS0ksSUFBTCxHQUFZLEtBQUtMLElBQUwsQ0FBVUMsY0FB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QU8sQ0FBQ08sQ0FBdEI7TUFDQWhCLFNBQVMsQ0FBQ2lCLENBQVYsR0FBY1IsT0FBTyxDQUFDUSxDQUF0QjtNQUNBLE9BQU9QLFNBQVA7SUFDSCxDQXBEa0MsQ0FxRG5DOzs7SUFFQSxPQUFPLENBQVA7RUFDSCxDQTdGSSxDQStGTDs7QUEvRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2NsYXNzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy9pbmRleC5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy9pbmRleC5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcblxyXG4gICAgICAgIHRoaXMubWlkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWlkXCIpO1xyXG4gICAgICAgIHRoaXMudXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ1cFwiKTtcclxuICAgICAgICB0aGlzLmRvd24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkb3duXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0XCIpO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZGlyID0gMSwg5Y+z6L656Lez6LeDLCAtMSDooajnpLrlt6bovrnot7Pot4NcclxuICAgIGlzX2p1bXBfb25fYmxvY2sod19kc3RfcG9zLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWlkX3BvcyA9IHRoaXMubWlkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgdmFyIGRpciA9IHdfZHN0X3Bvcy5zdWIobWlkX3Bvcyk7XHJcbiAgICAgICAgdmFyIG1pbl9sZW4gPSBkaXIubWFnKCk7XHJcbiAgICAgICAgdmFyIG1pbl9wb3MgPSBtaWRfcG9zO1xyXG4gICAgICAgIC8v6Lez5Yiw5Lit6Ze05b6X5YiG5aSaXHJcbiAgICAgICAgdmFyIGp1bXBTY29yZSA9IDI7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgdmFyIHVwX3BvcyA9IHRoaXMudXAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1Yih1cF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSB1cF9wb3M7XHJcbiAgICAgICAgICAgICAgICBqdW1wU2NvcmUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZG93bl9wb3MgPSB0aGlzLmRvd24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1Yihkb3duX3Bvcyk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBkaXIubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChtaW5fbGVuID4gbGVuKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5fbGVuID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgbWluX3BvcyA9IGRvd25fcG9zO1xyXG4gICAgICAgICAgICAgICAganVtcFNjb3JlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxlZnRfcG9zID0gdGhpcy5sZWZ0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGRpciA9IHdfZHN0X3Bvcy5zdWIobGVmdF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSBsZWZ0X3BvcztcclxuICAgICAgICAgICAgICAgIGp1bXBTY29yZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJpZ2h0X3BvcyA9IHRoaXMucmlnaHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1YihyaWdodF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSByaWdodF9wb3M7XHJcbiAgICAgICAgICAgICAgICBqdW1wU2NvcmUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmib7liLDkuobot7Pot4PnmoTkvY3nva7ot53nprvlj4LogIPngrnmnIDov5HnmoTpgqPkuKrlj4LogIPngrnku6Xlj4rkvY3nva47XHJcbiAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1YihtaW5fcG9zKTtcclxuICAgICAgICBpZiAoZGlyLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHdfZHN0X3Bvcy54ID0gbWluX3Bvcy54O1xyXG4gICAgICAgICAgICB3X2RzdF9wb3MueSA9IG1pbl9wb3MueTtcclxuICAgICAgICAgICAgcmV0dXJuIGp1bXBTY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIFxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UtilsFB.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c07a2iBFhL0rdTlIXKUvUn', 'UtilsFB');
// scripts/UtilsFB.js

"use strict";

var UtilsFB = cc.Class({
  "extends": cc.Component,
  statics: {
    leaderboardMapLocal: {},
    init: function init(leaderboardName) {
      UtilsFB.getLeaderboardAsync(leaderboardName)["catch"](function (error) {});
    },
    invitePlayerRandomAsync: function invitePlayerRandomAsync(imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.player.getConnectedPlayersAsync().then(function (players) {
          if (players.length) {
            var randomIndex = Math.floor(Math.random() * players.length);
            var playerID = players[randomIndex].getID();
            UtilsFB.invitePlayerAsync(playerID, imageBase64).then(function () {
              resolve();
            })["catch"](function (error) {
              reject(error);
            });
          } else {
            UtilsFB.debugLog("getConnectedPlayersAsync error: player count 0.");
            reject("Player count is 0.");
          }
        })["catch"](function (error) {
          UtilsFB.debugLog("getConnectedPlayersAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    invitePlayerAsync: function invitePlayerAsync(playerID, imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.context.createAsync(playerID).then(function () {
          FBInstant.updateAsync({
            action: 'CUSTOM',
            cta: 'Join the Game',
            image: imageBase64,
            text: {
              "default": 'Play with me',
              localizations: {}
            },
            template: 'VILLAGE_INVASION',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH',
            data: {
              createId: playerID
            }
          }).then(function () {
            // UtilsFB.debugLog("updateAsync success.");
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("updateAsync error: " + JSON.stringify(error));
            reject(error);
          });
        })["catch"](function (error) {
          UtilsFB.debugLog("createAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    getLeaderboardAsync: function getLeaderboardAsync(leaderboardName) {
      UtilsFB.debugLog("getLeaderboardAsync");
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

        if (playerArray != null) {
          UtilsFB.debugLog("getLeaderboardAsync local");
          resolve(playerArray);
        }

        FBInstant.getLeaderboardAsync(leaderboardName).then(function (leaderboard) {
          UtilsFB.debugLog("getLeaderboardAsync leaderboard: " + JSON.stringify(leaderboard));
          return leaderboard.getConnectedPlayerEntriesAsync(10, 0);
        }).then(function (entries) {
          UtilsFB.debugLog("getConnectedPlayerEntriesAsync entries: " + JSON.stringify(entries));
          var playerArray = new Array();
          var leaderboardScoreSelf = UtilsFB.getSelfLeaderboardScore();

          for (var i = 0; i < entries.length; i++) {
            var playerInfo = {};
            var player = entries[i].getPlayer();
            playerInfo.isSelf = player.getID() == FBInstant.player.getID();
            playerInfo.id = player.getID();
            playerInfo.playerName = player.getName();
            playerInfo.photoUrl = player.getPhoto(); // 如果是自己，设置大的分数，防止分数还没保存上时，获取到的分数是旧的

            if (playerInfo.isSelf) {
              playerInfo.score = Math.max(leaderboardScoreSelf, entries[i].getScore());
            } else {
              playerInfo.score = entries[i].getScore();
            }

            playerInfo.rank = entries[i].getRank();
            playerInfo.photoTexture = null;
            playerArray.push(playerInfo);
          }

          UtilsFB.updateLeaderboardLocal(leaderboardName, playerArray);
          resolve(playerArray);
        })["catch"](function (error) {
          UtilsFB.debugLog("getLeaderboardAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    loadPlayerArrayPhoto: function loadPlayerArrayPhoto(playerArray) {
      UtilsFB.debugLog("loadPlayerArrayPhoto");

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          UtilsFB.loadPlayerPhotoAsync(playerArray[i])["catch"](function (error) {});
        }
      }
    },
    loadPlayerPhotoAsync: function loadPlayerPhotoAsync(playerInfo) {
      return new Promise(function (resolve, reject) {
        cc.loader.load({
          url: playerInfo.photoUrl,
          type: 'jpg'
        }, function (err, texture) {
          if (texture != null) {
            playerInfo.photoTexture = texture;
            resolve();
          } else {
            UtilsFB.debugLog("loadPlayerPhotoAsync error: " + JSON.stringify(err));
            reject(err);
          }
        });
      });
    },
    setLeaderboardAsync: function setLeaderboardAsync(leaderboardName, score) {
      UtilsFB.debugLog("setLeaderboardAsync");
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        if (UtilsFB.setLeaderboardLocal(leaderboardName, score)) {
          resolve();
        }

        FBInstant.getLeaderboardAsync(leaderboardName).then(function (leaderboard) {
          return leaderboard.setScoreAsync(score);
        }).then(function () {
          resolve();
        })["catch"](function (error) {
          UtilsFB.debugLog("setLeaderboardAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    getPlayerPhotoAsync: function getPlayerPhotoAsync(playerInfo) {
      return new Promise(function (resolve, reject) {
        if (playerInfo.photoTexture != null) {
          resolve();
        } else {
          UtilsFB.loadPlayerPhotoAsync(playerInfo).then(function () {
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("getPlayerPhotoAsync error: " + JSON.stringify(error));
            reject(error);
          });
        }
      });
    },
    getLeaderboardLocal: function getLeaderboardLocal(leaderboardName) {
      if (leaderboardName in UtilsFB.leaderboardMapLocal) {
        return UtilsFB.leaderboardMapLocal[leaderboardName].playerArray;
      }

      return null;
    },
    updateLeaderboardLocal: function updateLeaderboardLocal(leaderboardName, playerArray) {
      UtilsFB.debugLog("updateLeaderboardLocal: " + leaderboardName);

      if (!(leaderboardName in UtilsFB.leaderboardMapLocal)) {
        UtilsFB.leaderboardMapLocal[leaderboardName] = {};
      }

      UtilsFB.leaderboardMapLocal[leaderboardName].playerArray = playerArray;
      UtilsFB.loadPlayerArrayPhoto(UtilsFB.leaderboardMapLocal[leaderboardName].playerArray);
    },
    setLeaderboardLocal: function setLeaderboardLocal(leaderboardName, score) {
      var ret = false;

      if (leaderboardName in UtilsFB.leaderboardMapLocal) {
        var playerArrayLocal = UtilsFB.leaderboardMapLocal[leaderboardName].playerArray;
        var scoreUpdated = false;

        if (playerArrayLocal != null) {
          for (var i = 0; i < playerArrayLocal.length; i++) {
            var playerInfo = playerArrayLocal[i];

            if (playerInfo.isSelf) {
              if (score > playerInfo.score) {
                playerInfo.score = score;
                scoreUpdated = true;
              }

              ret = true;
            }
          }
        }

        if (scoreUpdated) {
          var compare = function compare(play1, play2) {
            var score1 = play1.score;
            var score2 = play2.score;

            if (score1 < score2) {
              return 1;
            } else if (score1 > score2) {
              return -1;
            } else {
              return 0;
            }
          };

          playerArrayLocal.sort(compare);

          for (var _i = 0; _i < playerArrayLocal.length; _i++) {
            playerArrayLocal[_i].rank = _i + 1;
          }
        }
      }

      return ret;
    },
    getPlayerInfoScoreOvertake: function getPlayerInfoScoreOvertake(leaderboardName, scoreBefore, scoreCurrent) {
      var playerOvertaken = [];
      var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          var playerInfo = playerArray[i];
          var score = playerInfo.score;

          if (scoreBefore <= score && score < scoreCurrent) {
            playerOvertaken.push(playerInfo);
          }
        }
      }

      return playerOvertaken;
    },
    getSelfLeaderboardScore: function getSelfLeaderboardScore(leaderboardName) {
      var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          var playerInfo = playerArray[i];

          if (playerInfo.isSelf) {
            return playerInfo.score;
          }
        }
      }

      return -1;
    },
    shareAsync: function shareAsync(message, imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.shareAsync({
          intent: 'SHARE',
          image: imageBase64,
          text: message,
          data: {
            myReplayData: '...'
          }
        }).then(function () {
          resolve();
        })["catch"](function (error) {
          UtilsFB.debugLog("shareAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    chooseAsync: function chooseAsync(imageBase64, filters) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        filters = filters || [];
        FBInstant.context.chooseAsync({
          filters: filters
        }).then(function () {
          FBInstant.updateAsync({
            action: 'CUSTOM',
            cta: 'Join the Game',
            image: imageBase64,
            text: {
              "default": 'Play with me',
              localizations: {}
            },
            template: 'VILLAGE_INVASION',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH',
            data: {}
          }).then(function () {
            UtilsFB.debugLog("chooseAsync success.");
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("chooseAsync updateAsync error: " + JSON.stringify(error));
            reject(error);
          });
        })["catch"](function (error) {
          UtilsFB.debugLog("chooseAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    debugLog: function debugLog(message) {// console.log("[fb]" + message);
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1V0aWxzRkIuanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJzdGF0aWNzIiwibGVhZGVyYm9hcmRNYXBMb2NhbCIsImluaXQiLCJsZWFkZXJib2FyZE5hbWUiLCJnZXRMZWFkZXJib2FyZEFzeW5jIiwiZXJyb3IiLCJpbnZpdGVQbGF5ZXJSYW5kb21Bc3luYyIsImltYWdlQmFzZTY0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJGQkluc3RhbnQiLCJwbGF5ZXIiLCJnZXRDb25uZWN0ZWRQbGF5ZXJzQXN5bmMiLCJ0aGVuIiwicGxheWVycyIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheWVySUQiLCJnZXRJRCIsImludml0ZVBsYXllckFzeW5jIiwiZGVidWdMb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGV4dCIsImNyZWF0ZUFzeW5jIiwidXBkYXRlQXN5bmMiLCJhY3Rpb24iLCJjdGEiLCJpbWFnZSIsInRleHQiLCJsb2NhbGl6YXRpb25zIiwidGVtcGxhdGUiLCJzdHJhdGVneSIsIm5vdGlmaWNhdGlvbiIsImRhdGEiLCJjcmVhdGVJZCIsInBsYXllckFycmF5IiwiZ2V0TGVhZGVyYm9hcmRMb2NhbCIsImxlYWRlcmJvYXJkIiwiZ2V0Q29ubmVjdGVkUGxheWVyRW50cmllc0FzeW5jIiwiZW50cmllcyIsIkFycmF5IiwibGVhZGVyYm9hcmRTY29yZVNlbGYiLCJnZXRTZWxmTGVhZGVyYm9hcmRTY29yZSIsImkiLCJwbGF5ZXJJbmZvIiwiZ2V0UGxheWVyIiwiaXNTZWxmIiwiaWQiLCJwbGF5ZXJOYW1lIiwiZ2V0TmFtZSIsInBob3RvVXJsIiwiZ2V0UGhvdG8iLCJzY29yZSIsIm1heCIsImdldFNjb3JlIiwicmFuayIsImdldFJhbmsiLCJwaG90b1RleHR1cmUiLCJwdXNoIiwidXBkYXRlTGVhZGVyYm9hcmRMb2NhbCIsImxvYWRQbGF5ZXJBcnJheVBob3RvIiwibG9hZFBsYXllclBob3RvQXN5bmMiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwidHlwZSIsImVyciIsInRleHR1cmUiLCJzZXRMZWFkZXJib2FyZEFzeW5jIiwic2V0TGVhZGVyYm9hcmRMb2NhbCIsInNldFNjb3JlQXN5bmMiLCJnZXRQbGF5ZXJQaG90b0FzeW5jIiwicmV0IiwicGxheWVyQXJyYXlMb2NhbCIsInNjb3JlVXBkYXRlZCIsImNvbXBhcmUiLCJwbGF5MSIsInBsYXkyIiwic2NvcmUxIiwic2NvcmUyIiwic29ydCIsImdldFBsYXllckluZm9TY29yZU92ZXJ0YWtlIiwic2NvcmVCZWZvcmUiLCJzY29yZUN1cnJlbnQiLCJwbGF5ZXJPdmVydGFrZW4iLCJzaGFyZUFzeW5jIiwibWVzc2FnZSIsImludGVudCIsIm15UmVwbGF5RGF0YSIsImNob29zZUFzeW5jIiwiZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ25CLFdBQVNELEVBQUUsQ0FBQ0UsU0FETztFQUduQkMsT0FBTyxFQUFFO0lBQ0xDLG1CQUFtQixFQUFFLEVBRGhCO0lBR0xDLElBQUksRUFBRSxjQUFTQyxlQUFULEVBQTBCO01BQzVCUCxPQUFPLENBQUNRLG1CQUFSLENBQTRCRCxlQUE1QixXQUFtRCxVQUFBRSxLQUFLLEVBQUksQ0FBRSxDQUE5RDtJQUNILENBTEk7SUFPTEMsdUJBQXVCLEVBQUUsaUNBQVNDLFdBQVQsRUFBc0I7TUFDM0MsT0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7UUFDekMsSUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO1VBQ2xDRCxNQUFNLENBQUMscUJBQUQsQ0FBTjtVQUNBO1FBQ0g7O1FBRURDLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsd0JBQWpCLEdBQ0NDLElBREQsQ0FDTSxVQUFTQyxPQUFU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U0osS0FBVCxFQUFnQjtZQUNuQlQsT0FBTyxDQUFDNEIsUUFBUixDQUFpQixvQ0FBb0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlckIsS0FBZixDQUFyRDtZQUNBSyxNQUFNLENBQUNMLEtBQUQsQ0FBTjtVQUNILENBdkJEO1FBd0JILENBM0JELFdBNEJPLFVBQVNBLEtBQVQsRUFBZ0I7VUFDbkJULE9BQU8sQ0FBQzRCLFFBQVIsQ0FBaUIsd0JBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLEtBQWYsQ0FBekM7VUFDQUssTUFBTSxDQUFDTCxLQUFELENBQU47UUFDSCxDQS9CRDtNQWdDSCxDQXhDTSxDQUFQO0lBeUNILENBaFdJO0lBa1dMbUIsUUFBUSxFQUFFLGtCQUFTbUUsT0FBVCxFQUFrQixDQUN4QjtJQUNIO0VBcFdJO0FBSFUsQ0FBVCxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVXRpbHNGQiA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGxlYWRlcmJvYXJkTWFwTG9jYWw6IHt9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGxlYWRlcmJvYXJkTmFtZSkge1xuICAgICAgICAgICAgVXRpbHNGQi5nZXRMZWFkZXJib2FyZEFzeW5jKGxlYWRlcmJvYXJkTmFtZSkuY2F0Y2goZXJyb3IgPT4ge30pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludml0ZVBsYXllclJhbmRvbUFzeW5jOiBmdW5jdGlvbihpbWFnZUJhc2U2NCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJGQkluc3RhbnQgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRkJJbnN0YW50LnBsYXllci5nZXRDb25uZWN0ZWRQbGF5ZXJzQXN5bmMoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogcGxheWVycy5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJJRCA9IHBsYXllcnNbcmFuZG9tSW5kZXhdLmdldElEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmludml0ZVBsYXllckFzeW5jKHBsYXllcklELCBpbWFnZUJhc2U2NClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwiZ2V0Q29ubmVjdGVkUGxheWVyc0FzeW5jIGVycm9yOiBwbGF5ZXIgY291bnQgMC5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlBsYXllciBjb3VudCBpcyAwLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJnZXRDb25uZWN0ZWRQbGF5ZXJzQXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludml0ZVBsYXllckFzeW5jOiBmdW5jdGlvbihwbGF5ZXJJRCwgaW1hZ2VCYXNlNjQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRkJJbnN0YW50IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZCSW5zdGFudC5jb250ZXh0LmNyZWF0ZUFzeW5jKHBsYXllcklEKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBGQkluc3RhbnQudXBkYXRlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnQ1VTVE9NJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0YTogJ0pvaW4gdGhlIEdhbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdQbGF5IHdpdGggbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ1ZJTExBR0VfSU5WQVNJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k6ICdJTU1FRElBVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAnTk9fUFVTSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSWQ6cGxheWVySURcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVdGlsc0ZCLmRlYnVnTG9nKFwidXBkYXRlQXN5bmMgc3VjY2Vzcy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHNGQi5kZWJ1Z0xvZyhcInVwZGF0ZUFzeW5jIGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwiY3JlYXRlQXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldExlYWRlcmJvYXJkQXN5bmM6IGZ1bmN0aW9uKGxlYWRlcmJvYXJkTmFtZSkge1xuICAgICAgICAgICAgVXRpbHNGQi5kZWJ1Z0xvZyhcImdldExlYWRlcmJvYXJkQXN5bmNcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkZCSW5zdGFudCB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyQXJyYXkgPSBVdGlsc0ZCLmdldExlYWRlcmJvYXJkTG9jYWwobGVhZGVyYm9hcmROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyQXJyYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwiZ2V0TGVhZGVyYm9hcmRBc3luYyBsb2NhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbGF5ZXJBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRkJJbnN0YW50XG4gICAgICAgICAgICAgICAgLmdldExlYWRlcmJvYXJkQXN5bmMobGVhZGVyYm9hcmROYW1lKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGxlYWRlcmJvYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJnZXRMZWFkZXJib2FyZEFzeW5jIGxlYWRlcmJvYXJkOiBcIiArIEpTT04uc3RyaW5naWZ5KGxlYWRlcmJvYXJkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFkZXJib2FyZC5nZXRDb25uZWN0ZWRQbGF5ZXJFbnRyaWVzQXN5bmMoMTAsIDApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJnZXRDb25uZWN0ZWRQbGF5ZXJFbnRyaWVzQXN5bmMgZW50cmllczogXCIgKyBKU09OLnN0cmluZ2lmeShlbnRyaWVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVhZGVyYm9hcmRTY29yZVNlbGYgPSBVdGlsc0ZCLmdldFNlbGZMZWFkZXJib2FyZFNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckluZm8gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBlbnRyaWVzW2ldLmdldFBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVySW5mby5pc1NlbGYgPSBwbGF5ZXIuZ2V0SUQoKSA9PSBGQkluc3RhbnQucGxheWVyLmdldElEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvLmlkID0gcGxheWVyLmdldElEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvLnBsYXllck5hbWUgPSBwbGF5ZXIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVySW5mby5waG90b1VybCA9IHBsYXllci5nZXRQaG90bygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6Ieq5bex77yM6K6+572u5aSn55qE5YiG5pWw77yM6Ziy5q2i5YiG5pWw6L+Y5rKh5L+d5a2Y5LiK5pe277yM6I635Y+W5Yiw55qE5YiG5pWw5piv5pen55qEXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVySW5mby5pc1NlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvLnNjb3JlID0gTWF0aC5tYXgobGVhZGVyYm9hcmRTY29yZVNlbGYsIGVudHJpZXNbaV0uZ2V0U2NvcmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckluZm8uc2NvcmUgPSBlbnRyaWVzW2ldLmdldFNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvLnJhbmsgPSBlbnRyaWVzW2ldLmdldFJhbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckluZm8ucGhvdG9UZXh0dXJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckFycmF5LnB1c2gocGxheWVySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLnVwZGF0ZUxlYWRlcmJvYXJkTG9jYWwobGVhZGVyYm9hcmROYW1lLCBwbGF5ZXJBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGxheWVyQXJyYXkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJnZXRMZWFkZXJib2FyZEFzeW5jIGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkUGxheWVyQXJyYXlQaG90bzogZnVuY3Rpb24ocGxheWVyQXJyYXkpIHtcbiAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJsb2FkUGxheWVyQXJyYXlQaG90b1wiKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJBcnJheSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmxvYWRQbGF5ZXJQaG90b0FzeW5jKHBsYXllckFycmF5W2ldKS5jYXRjaChlcnJvciA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRQbGF5ZXJQaG90b0FzeW5jOiBmdW5jdGlvbihwbGF5ZXJJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogcGxheWVySW5mby5waG90b1VybCwgdHlwZTogJ2pwZyd9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckluZm8ucGhvdG9UZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJsb2FkUGxheWVyUGhvdG9Bc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICB9LFxuXG4gICAgICAgIHNldExlYWRlcmJvYXJkQXN5bmMobGVhZGVyYm9hcmROYW1lLCBzY29yZSkge1xuICAgICAgICAgICAgVXRpbHNGQi5kZWJ1Z0xvZyhcInNldExlYWRlcmJvYXJkQXN5bmNcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRkJJbnN0YW50IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChVdGlsc0ZCLnNldExlYWRlcmJvYXJkTG9jYWwobGVhZGVyYm9hcmROYW1lLCBzY29yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZCSW5zdGFudFxuICAgICAgICAgICAgICAgIC5nZXRMZWFkZXJib2FyZEFzeW5jKGxlYWRlcmJvYXJkTmFtZSlcbiAgICAgICAgICAgICAgICAudGhlbihsZWFkZXJib2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFkZXJib2FyZC5zZXRTY29yZUFzeW5jKHNjb3JlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHNGQi5kZWJ1Z0xvZyhcInNldExlYWRlcmJvYXJkQXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFBsYXllclBob3RvQXN5bmMocGxheWVySW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJJbmZvLnBob3RvVGV4dHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmxvYWRQbGF5ZXJQaG90b0FzeW5jKHBsYXllckluZm8pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJnZXRQbGF5ZXJQaG90b0FzeW5jIGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMZWFkZXJib2FyZExvY2FsKGxlYWRlcmJvYXJkTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxlYWRlcmJvYXJkTmFtZSBpbiBVdGlsc0ZCLmxlYWRlcmJvYXJkTWFwTG9jYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHNGQi5sZWFkZXJib2FyZE1hcExvY2FsW2xlYWRlcmJvYXJkTmFtZV0ucGxheWVyQXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVMZWFkZXJib2FyZExvY2FsKGxlYWRlcmJvYXJkTmFtZSwgcGxheWVyQXJyYXkpIHtcbiAgICAgICAgICAgIFV0aWxzRkIuZGVidWdMb2coXCJ1cGRhdGVMZWFkZXJib2FyZExvY2FsOiBcIiArIGxlYWRlcmJvYXJkTmFtZSk7XG4gICAgICAgICAgICBpZiAoIShsZWFkZXJib2FyZE5hbWUgaW4gVXRpbHNGQi5sZWFkZXJib2FyZE1hcExvY2FsKSkge1xuICAgICAgICAgICAgICAgIFV0aWxzRkIubGVhZGVyYm9hcmRNYXBMb2NhbFtsZWFkZXJib2FyZE5hbWVdID0ge307XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFV0aWxzRkIubGVhZGVyYm9hcmRNYXBMb2NhbFtsZWFkZXJib2FyZE5hbWVdLnBsYXllckFycmF5ID0gcGxheWVyQXJyYXk7XG4gICAgICAgICAgICBVdGlsc0ZCLmxvYWRQbGF5ZXJBcnJheVBob3RvKFV0aWxzRkIubGVhZGVyYm9hcmRNYXBMb2NhbFtsZWFkZXJib2FyZE5hbWVdLnBsYXllckFycmF5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRMZWFkZXJib2FyZExvY2FsKGxlYWRlcmJvYXJkTmFtZSwgc2NvcmUpIHtcbiAgICAgICAgICAgIGxldCByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChsZWFkZXJib2FyZE5hbWUgaW4gVXRpbHNGQi5sZWFkZXJib2FyZE1hcExvY2FsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllckFycmF5TG9jYWwgPSBVdGlsc0ZCLmxlYWRlcmJvYXJkTWFwTG9jYWxbbGVhZGVyYm9hcmROYW1lXS5wbGF5ZXJBcnJheTtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckFycmF5TG9jYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckFycmF5TG9jYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJJbmZvID0gcGxheWVyQXJyYXlMb2NhbFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJJbmZvLmlzU2VsZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IHBsYXllckluZm8uc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVySW5mby5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlVXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcGFyZSA9IGZ1bmN0aW9uKHBsYXkxLCBwbGF5Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlMSA9IHBsYXkxLnNjb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlMiA9IHBsYXkyLnNjb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlMSA8IHNjb3JlMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZTEgPiBzY29yZTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckFycmF5TG9jYWwuc29ydChjb21wYXJlKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckFycmF5TG9jYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckFycmF5TG9jYWxbaV0ucmFuayA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFBsYXllckluZm9TY29yZU92ZXJ0YWtlKGxlYWRlcmJvYXJkTmFtZSwgc2NvcmVCZWZvcmUsIHNjb3JlQ3VycmVudCkge1xuICAgICAgICAgICAgbGV0IHBsYXllck92ZXJ0YWtlbiA9IFtdO1xuICAgICAgICAgICAgbGV0IHBsYXllckFycmF5ID0gVXRpbHNGQi5nZXRMZWFkZXJib2FyZExvY2FsKGxlYWRlcmJvYXJkTmFtZSk7XG4gICAgICAgICAgICBpZiAocGxheWVyQXJyYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckluZm8gPSBwbGF5ZXJBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gcGxheWVySW5mby5zY29yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQmVmb3JlIDw9IHNjb3JlICYmIHNjb3JlIDwgc2NvcmVDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPdmVydGFrZW4ucHVzaChwbGF5ZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBsYXllck92ZXJ0YWtlbjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTZWxmTGVhZGVyYm9hcmRTY29yZShsZWFkZXJib2FyZE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJBcnJheSA9IFV0aWxzRkIuZ2V0TGVhZGVyYm9hcmRMb2NhbChsZWFkZXJib2FyZE5hbWUpO1xuICAgICAgICAgICAgaWYgKHBsYXllckFycmF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJJbmZvID0gcGxheWVyQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJJbmZvLmlzU2VsZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllckluZm8uc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaGFyZUFzeW5jOiBmdW5jdGlvbihtZXNzYWdlLCBpbWFnZUJhc2U2NCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkZCSW5zdGFudCB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGQkluc3RhbnQuc2hhcmVBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGludGVudDogJ1NIQVJFJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlQmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bXlSZXBsYXlEYXRhOiAnLi4uJyB9LFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwic2hhcmVBc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hvb3NlQXN5bmM6IGZ1bmN0aW9uKGltYWdlQmFzZTY0LCBmaWx0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRkJJbnN0YW50IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgRkJJbnN0YW50LmNvbnRleHQuY2hvb3NlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIEZCSW5zdGFudC51cGRhdGVBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdDVVNUT00nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3RhOiAnSm9pbiB0aGUgR2FtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJ1BsYXkgd2l0aCBtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uczoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnVklMTEFHRV9JTlZBU0lPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogJ0lNTUVESUFURScsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb246ICdOT19QVVNIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwiY2hvb3NlQXN5bmMgc3VjY2Vzcy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHNGQi5kZWJ1Z0xvZyhcImNob29zZUFzeW5jIHVwZGF0ZUFzeW5jIGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc0ZCLmRlYnVnTG9nKFwiY2hvb3NlQXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlYnVnTG9nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltmYl1cIiArIG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '009ddJbVedO7YsbYf5Tsthb', 'ScreenHome');
// scripts/ScreenHome.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var ScreenMgr = require('ScreenMgr');

var game_scene = require('game_scene');

cc.Class({
  "extends": cc.Component,
  properties: {
    screenHomeLeaderboard: {
      "default": null,
      type: cc.Node
    },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onEnable: function onEnable() {
    game_scene.instance.onGameStart(false, false);
  },
  // update (dt) {},
  onBtnClickPlay: function onBtnClickPlay() {
    this.node.active = false;
    game_scene.instance.showLabelScore(true);
  },
  onBtnClickLeaderboard: function onBtnClickLeaderboard() {
    this.node.active = false;
    this.screenHomeLeaderboard.active = true;
  },
  onBtnClickLeaderboardClose: function onBtnClickLeaderboardClose() {
    this.screenHomeLeaderboard.active = false;
    this.node.active = true;
  },
  onBtnClickSkinShop: function onBtnClickSkinShop() {
    ScreenMgr.instance.showScreen('ScreenSkinShop');
    ScreenMgr.instance.closeScreen('ScreenHome');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkhvbWUuanMiXSwibmFtZXMiOlsiU2NyZWVuTWdyIiwicmVxdWlyZSIsImdhbWVfc2NlbmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcmVlbkhvbWVMZWFkZXJib2FyZCIsInR5cGUiLCJOb2RlIiwic2NyZWVuTGVhZGVyYm9hcmQiLCJzdGFydCIsIm9uRW5hYmxlIiwiaW5zdGFuY2UiLCJvbkdhbWVTdGFydCIsIm9uQnRuQ2xpY2tQbGF5Iiwibm9kZSIsImFjdGl2ZSIsInNob3dMYWJlbFNjb3JlIiwib25CdG5DbGlja0xlYWRlcmJvYXJkIiwib25CdG5DbGlja0xlYWRlcmJvYXJkQ2xvc2UiLCJvbkJ0bkNsaWNrU2tpblNob3AiLCJzaG93U2NyZWVuIiwiY2xvc2VTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMscUJBQXFCLEVBQUU7TUFDbkIsV0FBUyxJQURVO01BRW5CQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGVSxDQURmO0lBTVJDLGlCQUFpQixFQUFFO01BQ2YsV0FBUyxJQURNO01BRWZGLElBQUksRUFBRVAsT0FBTyxDQUFDLG1CQUFEO0lBRkU7RUFOWCxDQUhQO0VBZUw7RUFFQTtFQUVBVSxLQW5CSyxtQkFtQkksQ0FFUixDQXJCSTtFQXVCTEMsUUF2Qkssc0JBdUJNO0lBQ1BWLFVBQVUsQ0FBQ1csUUFBWCxDQUFvQkMsV0FBcEIsQ0FBZ0MsS0FBaEMsRUFBdUMsS0FBdkM7RUFDSCxDQXpCSTtFQTJCTDtFQUVBQyxjQUFjLEVBQUUsMEJBQVc7SUFDdkIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0FmLFVBQVUsQ0FBQ1csUUFBWCxDQUFvQkssY0FBcEIsQ0FBbUMsSUFBbkM7RUFDSCxDQWhDSTtFQWtDTEMscUJBQXFCLEVBQUUsaUNBQVc7SUFDOUIsS0FBS0gsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0EsS0FBS1YscUJBQUwsQ0FBMkJVLE1BQTNCLEdBQW9DLElBQXBDO0VBQ0gsQ0FyQ0k7RUF1Q0xHLDBCQUEwQixFQUFFLHNDQUFXO0lBQ25DLEtBQUtiLHFCQUFMLENBQTJCVSxNQUEzQixHQUFvQyxLQUFwQztJQUNBLEtBQUtELElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtFQUNILENBMUNJO0VBNENMSSxrQkFBa0IsRUFBRSw4QkFBVztJQUMzQnJCLFNBQVMsQ0FBQ2EsUUFBVixDQUFtQlMsVUFBbkIsQ0FBOEIsZ0JBQTlCO0lBQ0F0QixTQUFTLENBQUNhLFFBQVYsQ0FBbUJVLFdBQW5CLENBQStCLFlBQS9CO0VBQ0g7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbnZhciBTY3JlZW5NZ3IgPSByZXF1aXJlKCdTY3JlZW5NZ3InKTtcbnZhciBnYW1lX3NjZW5lID0gcmVxdWlyZSgnZ2FtZV9zY2VuZScpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2NyZWVuSG9tZUxlYWRlcmJvYXJkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBzY3JlZW5MZWFkZXJib2FyZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1NjcmVlbkxlYWRlcmJvYXJkJyksXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uR2FtZVN0YXJ0KGZhbHNlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG4gICAgb25CdG5DbGlja1BsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGdhbWVfc2NlbmUuaW5zdGFuY2Uuc2hvd0xhYmVsU2NvcmUodHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tMZWFkZXJib2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY3JlZW5Ib21lTGVhZGVyYm9hcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0xlYWRlcmJvYXJkQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNjcmVlbkhvbWVMZWFkZXJib2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tTa2luU2hvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFNjcmVlbk1nci5pbnN0YW5jZS5zaG93U2NyZWVuKCdTY3JlZW5Ta2luU2hvcCcpO1xuICAgICAgICBTY3JlZW5NZ3IuaW5zdGFuY2UuY2xvc2VTY3JlZW4oJ1NjcmVlbkhvbWUnKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fd31d27O1JdLPDqO4p8XV+', 'game_scene');
// scripts/game_scene.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var UtilsFB = require("UtilsFB");

var UtilsCommon = require("UtilsCommon");

var SkinMgr = require('SkinMgr');

var ScreenMgr = require('ScreenMgr');

var leaderboardScore = "score_world";
var game_scene = cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    player: {
      type: cc.Node,
      "default": null
    },
    block_prefab: {
      "default": [],
      type: cc.Prefab
    },
    block_root: {
      type: cc.Node,
      "default": null
    },
    left_org: cc.v2(0, 0),
    map_root: {
      type: cc.Node,
      "default": null
    },
    y_radio: 0.5560472,
    checkout: {
      type: cc.Node,
      "default": null
    },
    scoreFXMgr: {
      "default": null,
      type: require('ScoreFXMgr')
    },
    scoreOvertakeMgr: {
      "default": null,
      type: require('ScoreOvertakeMgr')
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    },
    hintControlLabel: {
      "default": null,
      type: cc.Label
    },
    btnShare: {
      "default": null,
      type: cc.Node
    },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    },
    playerSkinSprite: {
      "default": null,
      type: cc.Sprite
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    game_scene.instance = this;
    this.mapMoving = false;
    this.isGameOver = true;
    this.gaming = false;
    this.mapRootInitPos = this.map_root.getPosition();
    this.score = 0;
    this.player_com = this.player.getComponent("player");
    this.playerArray = null;
    this.currentSkinIndex = 0;
  },
  start: function start() {
    UtilsFB.init(leaderboardScore);
  },
  onGameStart: function onGameStart(showLabelScore, holdScore) {
    this.map_root.setPosition(this.mapRootInitPos);
    this.block_root.removeAllChildren(true);

    if (!holdScore) {
      this.score = 0;
    }

    this.updateScoreDisplay();
    this.checkout.active = false;
    this.player_com.direction = 1;
    this.cur_block = cc.instantiate(this.block_prefab[Math.floor(Math.random() * 3)]);
    this.block_root.addChild(this.cur_block);
    this.cur_block.setPosition(this.block_root.convertToNodeSpaceAR(this.left_org));
    var w_pos = this.cur_block.getChildByName("mid").convertToWorldSpaceAR(cc.v2(0, 0));
    this.player.setPosition(this.map_root.convertToNodeSpaceAR(w_pos));
    this.next_block = this.cur_block;
    this.block_zorder = -1;
    this.add_block();
    this.showLabelScore(showLabelScore); // UtilsFB.invitePlayerRandomAsync(UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain())).catch(error => {});

    this.isGameOver = false;
  },
  showLabelScore: function showLabelScore(active) {
    this.scoreLabel.node.active = active;
    this.hintControlLabel.node.active = active;
    this.btnShare.active = active;
  },
  add_block: function add_block() {
    this.cur_block = this.next_block;
    this.next_block = cc.instantiate(this.block_prefab[Math.floor(Math.random() * 3)]);
    this.block_root.addChild(this.next_block); // this.next_block.setLocalZOrder(this.block_zorder);

    this.next_block.zIndex = this.block_zorder;
    this.block_zorder--;
    var x_distance = 200 + Math.random() * 200;
    var y_distance = x_distance * this.y_radio;
    var next_pos = this.cur_block.getPosition();
    next_pos.x += x_distance * this.player_com.direction;
    next_pos.y += y_distance;
    this.next_block.setPosition(next_pos);
    this.player_com.set_next_block(this.next_block.getComponent("block")); // 删除掉没有用的block

    for (var i = this.block_root.childrenCount - 1; i >= 0; i--) {
      this.destroyOutBlock(this.block_root.children[i]);
    } // end 

  },
  destroyOutBlock: function destroyOutBlock(blockNode) {
    var block = blockNode.getComponent('block');
    var blockPosWorld = blockNode.parent.convertToWorldSpaceAR(blockNode.getPosition());
    var gamePosWorld = this.node.getPosition();
    var distance = blockPosWorld.sub(gamePosWorld);
    var minDistanceX = this.node.width / 2 + blockNode.width / 2;
    var minDistanceY = this.node.height / 2 + blockNode.height / 2;

    if (Math.abs(distance.x) > minDistanceX && Math.abs(distance.y) > minDistanceY) {
      blockNode.destroy();
    }
  },
  move_map: function move_map(offset_x, offset_y) {
    this.mapMoving = true;
    var m1 = cc.moveBy(0.5, offset_x, offset_y);
    var end_func = cc.callFunc(function () {
      this.mapMoving = false;
      this.add_block();
    }.bind(this));
    var seq = cc.sequence([m1, end_func]);
    this.map_root.runAction(seq);
  },
  on_checkout_game: function on_checkout_game() {
    this.isGameOver = true;
    this.showLabelScore(false);
    ScreenMgr.instance.showScreen('ScreenGameOver');
    return;
  },
  gainScore: function gainScore(posWorld, score) {
    this.score += score;
    this.updateScoreDisplay();
    this.scoreFXMgr.playScoreFX(posWorld, score);
    var playerOvertaken = UtilsFB.getPlayerInfoScoreOvertake(leaderboardScore, this.score - score, this.score);

    if (playerOvertaken.length > 0) {
      this.scoreOvertakeMgr.play(posWorld, playerOvertaken);
    }
  },
  updateScoreDisplay: function updateScoreDisplay() {
    this.scoreLabel.string = "Score: " + this.score;
  },
  onShowLeaderboard: function onShowLeaderboard() {
    this.screenLeaderboard.showLeaderboard(leaderboardScore);
  },
  onShare: function onShare() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64)["catch"](function (error) {});
  },
  onSkinChange: function onSkinChange(skinIndex) {
    if (this.currentSkinIndex != skinIndex) {
      this.currentSkinIndex = skinIndex;
      this.playerSkinSprite.spriteFrame = SkinMgr.instance.getSkinSpriteFrame(skinIndex);
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfc2NlbmUuanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlNraW5NZ3IiLCJTY3JlZW5NZ3IiLCJsZWFkZXJib2FyZFNjb3JlIiwiZ2FtZV9zY2VuZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxheWVyIiwidHlwZSIsIk5vZGUiLCJibG9ja19wcmVmYWIiLCJQcmVmYWIiLCJibG9ja19yb290IiwibGVmdF9vcmciLCJ2MiIsIm1hcF9yb290IiwieV9yYWRpbyIsImNoZWNrb3V0Iiwic2NvcmVGWE1nciIsInNjb3JlT3ZlcnRha2VNZ3IiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJoaW50Q29udHJvbExhYmVsIiwiYnRuU2hhcmUiLCJzY3JlZW5MZWFkZXJib2FyZCIsInBsYXllclNraW5TcHJpdGUiLCJTcHJpdGUiLCJzdGF0aWNzIiwiaW5zdGFuY2UiLCJvbkxvYWQiLCJtYXBNb3ZpbmciLCJpc0dhbWVPdmVyIiwiZ2FtaW5nIiwibWFwUm9vdEluaXRQb3MiLCJnZXRQb3NpdGlvbiIsInNjb3JlIiwicGxheWVyX2NvbSIsImdldENvbXBvbmVudCIsInBsYXllckFycmF5IiwiY3VycmVudFNraW5JbmRleCIsInN0YXJ0IiwiaW5pdCIsIm9uR2FtZVN0YXJ0Iiwic2hvd0xhYmVsU2NvcmUiLCJob2xkU2NvcmUiLCJzZXRQb3NpdGlvbiIsInJlbW92ZUFsbENoaWxkcmVuIiwidXBkYXRlU2NvcmVEaXNwbGF5IiwiYWN0aXZlIiwiZGlyZWN0aW9uIiwiY3VyX2Jsb2NrIiwiaW5zdGFudGlhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhZGRDaGlsZCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwid19wb3MiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIm5leHRfYmxvY2siLCJibG9ja196b3JkZXIiLCJhZGRfYmxvY2siLCJub2RlIiwiekluZGV4IiwieF9kaXN0YW5jZSIsInlfZGlzdGFuY2UiLCJuZXh0X3BvcyIsIngiLCJ5Iiwic2V0X25leHRfYmxvY2siLCJpIiwiY2hpbGRyZW5Db3VudCIsImRlc3Ryb3lPdXRCbG9jayIsImNoaWxkcmVuIiwiYmxvY2tOb2RlIiwiYmxvY2siLCJibG9ja1Bvc1dvcmxkIiwicGFyZW50IiwiZ2FtZVBvc1dvcmxkIiwiZGlzdGFuY2UiLCJzdWIiLCJtaW5EaXN0YW5jZVgiLCJ3aWR0aCIsIm1pbkRpc3RhbmNlWSIsImhlaWdodCIsImFicyIsImRlc3Ryb3kiLCJtb3ZlX21hcCIsIm9mZnNldF94Iiwib2Zmc2V0X3kiLCJtMSIsIm1vdmVCeSIsImVuZF9mdW5jIiwiY2FsbEZ1bmMiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJvbl9jaGVja291dF9nYW1lIiwic2hvd1NjcmVlbiIsImdhaW5TY29yZSIsInBvc1dvcmxkIiwicGxheVNjb3JlRlgiLCJwbGF5ZXJPdmVydGFrZW4iLCJnZXRQbGF5ZXJJbmZvU2NvcmVPdmVydGFrZSIsImxlbmd0aCIsInBsYXkiLCJzdHJpbmciLCJvblNob3dMZWFkZXJib2FyZCIsInNob3dMZWFkZXJib2FyZCIsIm9uU2hhcmUiLCJpbWFnZUJhc2U2NCIsImdldFNjcmVlbnNob3RCYXNlNjQiLCJnZXRDYW1lcmFNYWluIiwiY2hvb3NlQXN5bmMiLCJlcnJvciIsIm9uU2tpbkNoYW5nZSIsInNraW5JbmRleCIsInNwcml0ZUZyYW1lIiwiZ2V0U2tpblNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENB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TCxDQUFnQndGLE1BQWhCLEdBQXlCLFlBQVksS0FBS3pFLEtBQTFDO0VBQ0gsQ0FyTnFCO0VBdU50QjBFLGlCQUFpQixFQUFFLDZCQUFZO0lBQzNCLEtBQUtyRixpQkFBTCxDQUF1QnNGLGVBQXZCLENBQXVDN0csZ0JBQXZDO0VBQ0gsQ0F6TnFCO0VBMk50QjhHLE9BQU8sRUFBRSxtQkFBWTtJQUNqQixJQUFJQyxXQUFXLEdBQUdsSCxXQUFXLENBQUNtSCxtQkFBWixDQUFnQ25ILFdBQVcsQ0FBQ29ILGFBQVosRUFBaEMsQ0FBbEI7SUFDQXRILE9BQU8sQ0FBQ3VILFdBQVIsQ0FBb0JILFdBQXBCLFdBQXVDLFVBQUFJLEtBQUssRUFBSSxDQUFHLENBQW5EO0VBQ0gsQ0E5TnFCO0VBZ090QkMsWUFBWSxFQUFFLHNCQUFVQyxTQUFWLEVBQXFCO0lBQy9CLElBQUksS0FBSy9FLGdCQUFMLElBQXlCK0UsU0FBN0IsRUFBd0M7TUFDcEMsS0FBSy9FLGdCQUFMLEdBQXdCK0UsU0FBeEI7TUFDQSxLQUFLN0YsZ0JBQUwsQ0FBc0I4RixXQUF0QixHQUFvQ3hILE9BQU8sQ0FBQzZCLFFBQVIsQ0FBaUI0RixrQkFBakIsQ0FBb0NGLFNBQXBDLENBQXBDO0lBQ0g7RUFDSjtBQXJPcUIsQ0FBVCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2NsYXNzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy9pbmRleC5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy9pbmRleC5odG1sXHJcblxyXG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoXCJVdGlsc0ZCXCIpO1xyXG52YXIgVXRpbHNDb21tb24gPSByZXF1aXJlKFwiVXRpbHNDb21tb25cIik7XHJcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xyXG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XHJcbmNvbnN0IGxlYWRlcmJvYXJkU2NvcmUgPSBcInNjb3JlX3dvcmxkXCI7XHJcbnZhciBnYW1lX3NjZW5lID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBibG9ja19wcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBibG9ja19yb290OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVmdF9vcmc6IGNjLnYyKDAsIDApLFxyXG5cclxuICAgICAgICBtYXBfcm9vdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHlfcmFkaW86IDAuNTU2MDQ3MixcclxuXHJcbiAgICAgICAgY2hlY2tvdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUZYTWdyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1Njb3JlRlhNZ3InKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZU92ZXJ0YWtlTWdyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1Njb3JlT3ZlcnRha2VNZ3InKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhpbnRDb250cm9sTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnRuU2hhcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY3JlZW5MZWFkZXJib2FyZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiByZXF1aXJlKCdTY3JlZW5MZWFkZXJib2FyZCcpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXllclNraW5TcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGdhbWVfc2NlbmUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWFwTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm1hcFJvb3RJbml0UG9zID0gdGhpcy5tYXBfcm9vdC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2NvbSA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChcInBsYXllclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBcnJheSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNraW5JbmRleCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFV0aWxzRkIuaW5pdChsZWFkZXJib2FyZFNjb3JlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25HYW1lU3RhcnQ6IGZ1bmN0aW9uIChzaG93TGFiZWxTY29yZSwgaG9sZFNjb3JlKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfcm9vdC5zZXRQb3NpdGlvbih0aGlzLm1hcFJvb3RJbml0UG9zKTtcclxuICAgICAgICB0aGlzLmJsb2NrX3Jvb3QucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFob2xkU2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5jaGVja291dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9jb20uZGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrX3ByZWZhYltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0pO1xyXG4gICAgICAgIHRoaXMuYmxvY2tfcm9vdC5hZGRDaGlsZCh0aGlzLmN1cl9ibG9jayk7XHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2suc2V0UG9zaXRpb24odGhpcy5ibG9ja19yb290LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubGVmdF9vcmcpKTtcclxuXHJcbiAgICAgICAgdmFyIHdfcG9zID0gdGhpcy5jdXJfYmxvY2suZ2V0Q2hpbGRCeU5hbWUoXCJtaWRcIikuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbih0aGlzLm1hcF9yb290LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0X2Jsb2NrID0gdGhpcy5jdXJfYmxvY2s7XHJcbiAgICAgICAgdGhpcy5ibG9ja196b3JkZXIgPSAtMTtcclxuICAgICAgICB0aGlzLmFkZF9ibG9jaygpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dMYWJlbFNjb3JlKHNob3dMYWJlbFNjb3JlKTtcclxuXHJcbiAgICAgICAgLy8gVXRpbHNGQi5pbnZpdGVQbGF5ZXJSYW5kb21Bc3luYyhVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSkpLmNhdGNoKGVycm9yID0+IHt9KTtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0xhYmVsU2NvcmU6IGZ1bmN0aW9uIChhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwubm9kZS5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgICAgdGhpcy5oaW50Q29udHJvbExhYmVsLm5vZGUuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuYnRuU2hhcmUuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRfYmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2sgPSB0aGlzLm5leHRfYmxvY2s7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tfcHJlZmFiW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja19yb290LmFkZENoaWxkKHRoaXMubmV4dF9ibG9jayk7XHJcbiAgICAgICAgLy8gdGhpcy5uZXh0X2Jsb2NrLnNldExvY2FsWk9yZGVyKHRoaXMuYmxvY2tfem9yZGVyKTtcclxuICAgICAgICB0aGlzLm5leHRfYmxvY2suekluZGV4ID0gdGhpcy5ibG9ja196b3JkZXI7XHJcbiAgICAgICAgdGhpcy5ibG9ja196b3JkZXItLTtcclxuXHJcbiAgICAgICAgdmFyIHhfZGlzdGFuY2UgPSAyMDAgKyBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgICAgIHZhciB5X2Rpc3RhbmNlID0geF9kaXN0YW5jZSAqIHRoaXMueV9yYWRpbztcclxuXHJcbiAgICAgICAgdmFyIG5leHRfcG9zID0gdGhpcy5jdXJfYmxvY2suZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBuZXh0X3Bvcy54ICs9ICh4X2Rpc3RhbmNlICogdGhpcy5wbGF5ZXJfY29tLmRpcmVjdGlvbik7XHJcbiAgICAgICAgbmV4dF9wb3MueSArPSB5X2Rpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jay5zZXRQb3NpdGlvbihuZXh0X3Bvcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBsYXllcl9jb20uc2V0X25leHRfYmxvY2sodGhpcy5uZXh0X2Jsb2NrLmdldENvbXBvbmVudChcImJsb2NrXCIpKTtcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5o6J5rKh5pyJ55So55qEYmxvY2tcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ibG9ja19yb290LmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lPdXRCbG9jayh0aGlzLmJsb2NrX3Jvb3QuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveU91dEJsb2NrOiBmdW5jdGlvbiAoYmxvY2tOb2RlKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnYmxvY2snKTtcclxuICAgICAgICBsZXQgYmxvY2tQb3NXb3JsZCA9IGJsb2NrTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJsb2NrTm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBsZXQgZ2FtZVBvc1dvcmxkID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gYmxvY2tQb3NXb3JsZC5zdWIoZ2FtZVBvc1dvcmxkKTtcclxuICAgICAgICBsZXQgbWluRGlzdGFuY2VYID0gdGhpcy5ub2RlLndpZHRoIC8gMiArIGJsb2NrTm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlWSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyICsgYmxvY2tOb2RlLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZS54KSA+IG1pbkRpc3RhbmNlWCAmJiBNYXRoLmFicyhkaXN0YW5jZS55KSA+IG1pbkRpc3RhbmNlWSkge1xyXG4gICAgICAgICAgICBibG9ja05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZV9tYXAob2Zmc2V0X3gsIG9mZnNldF95KSB7XHJcbiAgICAgICAgdGhpcy5tYXBNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtMSA9IGNjLm1vdmVCeSgwLjUsIG9mZnNldF94LCBvZmZzZXRfeSk7XHJcbiAgICAgICAgdmFyIGVuZF9mdW5jID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZF9ibG9jaygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShbbTEsIGVuZF9mdW5jXSk7XHJcbiAgICAgICAgdGhpcy5tYXBfcm9vdC5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25fY2hlY2tvdXRfZ2FtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TGFiZWxTY29yZShmYWxzZSk7XHJcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkdhbWVPdmVyJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uIChwb3NXb3JsZCwgc2NvcmUpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUZYTWdyLnBsYXlTY29yZUZYKHBvc1dvcmxkLCBzY29yZSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJPdmVydGFrZW4gPSBVdGlsc0ZCLmdldFBsYXllckluZm9TY29yZU92ZXJ0YWtlKGxlYWRlcmJvYXJkU2NvcmUsIHRoaXMuc2NvcmUgLSBzY29yZSwgdGhpcy5zY29yZSk7XHJcbiAgICAgICAgaWYgKHBsYXllck92ZXJ0YWtlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVPdmVydGFrZU1nci5wbGF5KHBvc1dvcmxkLCBwbGF5ZXJPdmVydGFrZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2NvcmVEaXNwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TaG93TGVhZGVyYm9hcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbkxlYWRlcmJvYXJkLnNob3dMZWFkZXJib2FyZChsZWFkZXJib2FyZFNjb3JlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TaGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcclxuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KS5jYXRjaChlcnJvciA9PiB7IH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNraW5DaGFuZ2U6IGZ1bmN0aW9uIChza2luSW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2tpbkluZGV4ICE9IHNraW5JbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2luSW5kZXggPSBza2luSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2tpblNwcml0ZS5zcHJpdGVGcmFtZSA9IFNraW5NZ3IuaW5zdGFuY2UuZ2V0U2tpblNwcml0ZUZyYW1lKHNraW5JbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f578AePkZFkpfO+uSSmwuu', 'ConstValue');
// scripts/ConstValue.js

"use strict";

exports.__esModule = true;
exports.LEADERBOARD_SOCRE_WORLD = void 0;
var LEADERBOARD_SOCRE_WORLD = "score_world";
exports.LEADERBOARD_SOCRE_WORLD = LEADERBOARD_SOCRE_WORLD;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbnN0VmFsdWUuanMiXSwibmFtZXMiOlsiTEVBREVSQk9BUkRfU09DUkVfV09STEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSx1QkFBdUIsR0FBRyxhQUFoQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExFQURFUkJPQVJEX1NPQ1JFX1dPUkxEID0gXCJzY29yZV93b3JsZFwiOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenGameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57f64yVe21GxKROflaTRrT6', 'ScreenGameOver');
// scripts/ScreenGameOver.js

"use strict";

var ConstValue = _interopRequireWildcard(require("./ConstValue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ScreenMgr = require('ScreenMgr');

var UtilsCommon = require('UtilsCommon');

var UtilsFB = require('UtilsFB');

var game_scene = require('game_scene');

function base64ToBinary(base64String) {
  var base64Cleaned = base64String.split(',')[1];
  var binaryString = atob(base64Cleaned);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

cc.Class({
  "extends": cc.Component,
  properties: {
    titleNewScore: {
      "default": null,
      type: cc.Node
    },
    labelScore: {
      "default": null,
      type: cc.Label
    },
    labelScoreMax: {
      "default": null,
      type: cc.Label
    },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    },
    btnHome: {
      "default": null,
      type: cc.Button
    },
    btnUpload: {
      "default": null,
      type: cc.Button
    },
    btnPlayAgain: {
      "default": null,
      type: cc.Button
    },
    loading: {
      "default": null,
      type: cc.Label
    },
    blobId: {
      "default": null,
      type: cc.Label
    },
    SuiId: {
      "default": null,
      type: cc.RichText
    },
    successTips: {
      "default": null,
      type: cc.Label
    },
    errorTips: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onEnable: function onEnable() {
    this.btnHome.node.active = true;
    this.btnUpload.node.active = true;
    this.btnPlayAgain.node.active = true;
    this.labelScore.node.active = true;
    this.loading.node.active = false; // upload status:

    this.blobId.node.active = false;
    this.SuiId.node.active = false;
    this.successTips.node.active = false;
    this.errorTips.node.active = false;
    var score = game_scene.instance.score; // let scoreMAx = UtilsFB.getSelfLeaderboardScore(ConstValue.LEADERBOARD_SOCRE_WORLD);

    var scoreMAx = window.localStorage.getItem("maxScore") ? parseInt(window.localStorage.getItem("maxScore")) : 0;
    this.titleNewScore.active = score > 0 && score > scoreMAx;
    scoreMAx = Math.max(scoreMAx, score);
    window.localStorage.setItem("maxScore", scoreMAx);
    this.labelScore.string = "" + score;
    this.labelScoreMax.string = "Max Score: " + scoreMAx;
    this.screenLeaderboard.clearLeaderboard();
    UtilsFB.setLeaderboardAsync(ConstValue.LEADERBOARD_SOCRE_WORLD, this.score).then(function () {
      this.screenLeaderboard.showLeaderboard(ConstValue.LEADERBOARD_SOCRE_WORLD);
    }.bind(this))["catch"](function (error) {
      console.log("setleaderboardasync error: " + JSON.stringify(error));
    });
  },
  onBtnClickHome: function onBtnClickHome() {
    console.log('home.......');
    ScreenMgr.instance.showScreen('ScreenHome');
    this.node.active = false;
  },
  onBtnClickShare: function onBtnClickShare() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64)["catch"](function (error) {});
  },
  onBtnClickPlayAgain: function onBtnClickPlayAgain() {
    game_scene.instance.onGameStart(true, false);
  },
  onBtnClickContinue: function onBtnClickContinue() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64).then(function () {
      game_scene.instance.onGameStart(true, true);
    })["catch"](function (error) {});
  },
  onBtnClickUpload: function onBtnClickUpload() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var imageBase64, res, data, errorData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.errorTips.node.active = false;
              imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
              console.log(imageBase64);
              _this.btnHome.node.active = false;
              _this.btnUpload.node.active = false;
              _this.btnPlayAgain.node.active = false;
              _this.loading.node.active = true;
              _context.next = 9;
              return fetch('https://publisher-devnet.walrus.space/v1/store?epochs=1', {
                method: 'PUT',
                body: base64ToBinary(imageBase64)
              });

            case 9:
              res = _context.sent;

              if (!(res.status === 200)) {
                _context.next = 26;
                break;
              }

              _context.next = 13;
              return res.json();

            case 13:
              data = _context.sent;
              console.log(data);
              _this.blobId.string = 'Blodid: ' + data.newlyCreated.blobObject.blobId;
              _this.SuiId.string = 'Id: ' + data.newlyCreated.blobObject.id;
              _this.blobId.node.active = true;
              _this.SuiId.node.active = true;
              _this.successTips.node.active = true;
              _this.loading.node.active = false;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
              /**
               * {
                      newlyCreated: {
                          blobObject: {
                          id: '0x20c6a2915047479f7920f183cbc5953b708cfcc4118d57cd33e2344a93d6d02c',
                          storedEpoch: 0,
                          blobId: 'HPTDv1DG7z-ikDUJA0utYfLO00oMuDH3xz8Fok2a1PI',
                          size: 39635,
                          erasureCodeType: 'RedStuff',
                          certifiedEpoch: 0,
                          storage: [Object]
                          },
                          encodedSize: 65023000,
                          cost: 3175000
                      }
                  }
               */

              _context.next = 36;
              break;

            case 26:
              _this.errorTips.node.active = true;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
              _this.loading.node.active = false;
              console.error('Error:', res.status);
              _context.next = 34;
              return res.text();

            case 34:
              errorData = _context.sent;
              console.error('Error details:', errorData);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkdhbWVPdmVyLmpzIl0sIm5hbWVzIjpbIlNjcmVlbk1nciIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlV0aWxzRkIiLCJnYW1lX3NjZW5lIiwiYmFzZTY0VG9CaW5hcnkiLCJiYXNlNjRTdHJpbmciLCJiYXNlNjRDbGVhbmVkIiwic3BsaXQiLCJiaW5hcnlTdHJpbmciLCJhdG9iIiwibGVuIiwibGVuZ3RoIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJidWZmZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTmV3U2NvcmUiLCJ0eXBlIiwiTm9kZSIsImxhYmVsU2NvcmUiLCJMYWJlbCIsImxhYmVsU2NvcmVNYXgiLCJzY3JlZW5MZWFkZXJib2FyZCIsImJ0bkhvbWUiLCJCdXR0b24iLCJidG5VcGxvYWQiLCJidG5QbGF5QWdhaW4iLCJsb2FkaW5nIiwiYmxvYklkIiwiU3VpSWQiLCJSaWNoVGV4dCIsInN1Y2Nlc3NUaXBzIiwiZXJyb3JUaXBzIiwic3RhcnQiLCJvbkVuYWJsZSIsIm5vZGUiLCJhY3RpdmUiLCJzY29yZSIsImluc3RhbmNlIiwic2NvcmVNQXgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4Iiwic2V0SXRlbSIsInN0cmluZyIsImNsZWFyTGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZEFzeW5jIiwiQ29uc3RWYWx1ZSIsIkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEIiwidGhlbiIsInNob3dMZWFkZXJib2FyZCIsImJpbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwib25CdG5DbGlja0hvbWUiLCJzaG93U2NyZWVuIiwib25CdG5DbGlja1NoYXJlIiwiaW1hZ2VCYXNlNjQiLCJnZXRTY3JlZW5zaG90QmFzZTY0IiwiZ2V0Q2FtZXJhTWFpbiIsImNob29zZUFzeW5jIiwib25CdG5DbGlja1BsYXlBZ2FpbiIsIm9uR2FtZVN0YXJ0Iiwib25CdG5DbGlja0NvbnRpbnVlIiwib25CdG5DbGlja1VwbG9hZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibmV3bHlDcmVhdGVkIiwiYmxvYk9iamVjdCIsImlkIiwidGV4dCIsImVycm9yRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OytDQVJBOzs7Ozs7QUFVQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBLFNBQVNJLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0VBQ2xDLElBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFDRSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQXRCO0VBRUEsSUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNILGFBQUQsQ0FBekI7RUFDQSxJQUFNSSxHQUFHLEdBQUdGLFlBQVksQ0FBQ0csTUFBekI7RUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlSCxHQUFmLENBQWQ7O0VBRUEsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixHQUFwQixFQUF5QkksQ0FBQyxFQUExQixFQUE4QjtJQUMxQkYsS0FBSyxDQUFDRSxDQUFELENBQUwsR0FBV04sWUFBWSxDQUFDTyxVQUFiLENBQXdCRCxDQUF4QixDQUFYO0VBQ0g7O0VBRUQsT0FBT0YsS0FBSyxDQUFDSSxNQUFiO0FBQ0g7O0FBRURDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VB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QixJQUEzQjtjQUNBLEtBQUksQ0FBQ1gsU0FBTCxDQUFlVSxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixJQUE3QjtjQUNBLEtBQUksQ0FBQ1YsWUFBTCxDQUFrQlMsSUFBbEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDO2NBQ0EsS0FBSSxDQUFDVCxPQUFMLENBQWFRLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO2NBRUFvQixPQUFPLENBQUNELEtBQVIsQ0FBYyxRQUFkLEVBQXdCbUIsR0FBRyxDQUFDQyxNQUE1QjtjQXBEaUI7Y0FBQSxPQXFET0QsR0FBRyxDQUFDTyxJQUFKLEVBckRQOztZQUFBO2NBcURYQyxTQXJEVztjQXNEakIxQixPQUFPLENBQUNELEtBQVIsQ0FBYyxnQkFBZCxFQUFnQzJCLFNBQWhDOztZQXREaUI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUF3RHhCO0FBdExJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5pbXBvcnQgKiBhcyBDb25zdFZhbHVlIGZyb20gJy4vQ29uc3RWYWx1ZSc7XG5cbnZhciBTY3JlZW5NZ3IgPSByZXF1aXJlKCdTY3JlZW5NZ3InKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBnYW1lX3NjZW5lID0gcmVxdWlyZSgnZ2FtZV9zY2VuZScpO1xuXG5mdW5jdGlvbiBiYXNlNjRUb0JpbmFyeShiYXNlNjRTdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlNjRDbGVhbmVkID0gYmFzZTY0U3RyaW5nLnNwbGl0KCcsJylbMV07XG5cbiAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSBhdG9iKGJhc2U2NENsZWFuZWQpO1xuICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cblxuICAgIHJldHVybiBieXRlcy5idWZmZXI7XG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpdGxlTmV3U2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGxhYmVsU2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcblxuICAgICAgICBsYWJlbFNjb3JlTWF4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2NyZWVuTGVhZGVyYm9hcmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiByZXF1aXJlKCdTY3JlZW5MZWFkZXJib2FyZCcpLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ0bkhvbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnRuVXBsb2FkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blBsYXlBZ2Fpbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGJsb2JJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBTdWlJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlJpY2hUZXh0LFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzVGlwczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvclRpcHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuVXBsb2FkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsU2NvcmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBsb2FkIHN0YXR1czpcbiAgICAgICAgdGhpcy5ibG9iSWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdWlJZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHNjb3JlID0gZ2FtZV9zY2VuZS5pbnN0YW5jZS5zY29yZTtcbiAgICAgICAgLy8gbGV0IHNjb3JlTUF4ID0gVXRpbHNGQi5nZXRTZWxmTGVhZGVyYm9hcmRTY29yZShDb25zdFZhbHVlLkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEKTtcbiAgICAgICAgbGV0IHNjb3JlTUF4ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWF4U2NvcmVcIikgPyBwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXhTY29yZVwiKSkgOiAwXG5cbiAgICAgICAgdGhpcy50aXRsZU5ld1Njb3JlLmFjdGl2ZSA9IHNjb3JlID4gMCAmJiBzY29yZSA+IHNjb3JlTUF4O1xuICAgICAgICBzY29yZU1BeCA9IE1hdGgubWF4KHNjb3JlTUF4LCBzY29yZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1heFNjb3JlXCIsIHNjb3JlTUF4KVxuXG4gICAgICAgIHRoaXMubGFiZWxTY29yZS5zdHJpbmcgPSBcIlwiICsgc2NvcmU7XG4gICAgICAgIHRoaXMubGFiZWxTY29yZU1heC5zdHJpbmcgPSBcIk1heCBTY29yZTogXCIgKyBzY29yZU1BeDtcblxuICAgICAgICB0aGlzLnNjcmVlbkxlYWRlcmJvYXJkLmNsZWFyTGVhZGVyYm9hcmQoKTtcbiAgICAgICAgVXRpbHNGQi5zZXRMZWFkZXJib2FyZEFzeW5jKENvbnN0VmFsdWUuTEVBREVSQk9BUkRfU09DUkVfV09STEQsIHRoaXMuc2NvcmUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5MZWFkZXJib2FyZC5zaG93TGVhZGVyYm9hcmQoQ29uc3RWYWx1ZS5MRUFERVJCT0FSRF9TT0NSRV9XT1JMRCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0bGVhZGVyYm9hcmRhc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tIb21lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZS4uLi4uLi4nKTtcblxuICAgICAgICBTY3JlZW5NZ3IuaW5zdGFuY2Uuc2hvd1NjcmVlbignU2NyZWVuSG9tZScpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tTaGFyZSgpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KS5jYXRjaChlcnJvciA9PiB7IH0pO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrUGxheUFnYWluKCkge1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uR2FtZVN0YXJ0KHRydWUsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB2YXIgaW1hZ2VCYXNlNjQgPSBVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSk7XG4gICAgICAgIFV0aWxzRkIuY2hvb3NlQXN5bmMoaW1hZ2VCYXNlNjQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2FtZV9zY2VuZS5pbnN0YW5jZS5vbkdhbWVTdGFydCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgb25CdG5DbGlja1VwbG9hZCgpIHtcbiAgICAgICAgdGhpcy5lcnJvclRpcHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUJhc2U2NCk7XG5cbiAgICAgICAgdGhpcy5idG5Ib21lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuVXBsb2FkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuUGxheUFnYWluLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wdWJsaXNoZXItZGV2bmV0LndhbHJ1cy5zcGFjZS92MS9zdG9yZT9lcG9jaHM9MScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBiYXNlNjRUb0JpbmFyeShpbWFnZUJhc2U2NClcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmJsb2JJZC5zdHJpbmcgPSAnQmxvZGlkOiAnICsgZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5ibG9iSWQ7XG4gICAgICAgICAgICB0aGlzLlN1aUlkLnN0cmluZyA9ICdJZDogJyArIGRhdGEubmV3bHlDcmVhdGVkLmJsb2JPYmplY3QuaWQ7XG4gICAgICAgICAgICB0aGlzLmJsb2JJZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlN1aUlkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc1RpcHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld2x5Q3JlYXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYk9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcweDIwYzZhMjkxNTA0NzQ3OWY3OTIwZjE4M2NiYzU5NTNiNzA4Y2ZjYzQxMThkNTdjZDMzZTIzNDRhOTNkNmQwMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkRXBvY2g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iSWQ6ICdIUFREdjFERzd6LWlrRFVKQTB1dFlmTE8wMG9NdURIM3h6OEZvazJhMVBJJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDM5NjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJhc3VyZUNvZGVUeXBlOiAnUmVkU3R1ZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VydGlmaWVkRXBvY2g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlOiBbT2JqZWN0XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZWRTaXplOiA2NTAyMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Q6IDMxNzUwMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvclRpcHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlcy5zdGF0dXMpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGFpbHM6JywgZXJyb3JEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21c8axcsehOF7uRiV385w6I', 'player');
// scripts/player.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var game_scene = require("game_scene");

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    init_speed: 150,
    a_power: 600,
    y_radio: 0.5560472,
    game_manager: {
      type: game_scene,
      "default": null
    },
    audioJumpPressOnce: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpPressRepeat: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpSuccess: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpFail: {
      "default": null,
      type: cc.AudioClip
    },
    pressParticle: {
      "default": null,
      type: cc.ParticleSystem
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.next_block = null;
    this.direction = 1; // 1，-1

    this.jumping = false;
    this.motionStreak = this.getComponent(cc.MotionStreak);
  },
  player_jump: function player_jump() {
    this.motionStreak.enabled = true;
    this.jumping = true;
    var x_distance = this.x_distance * this.direction;
    var y_distance = this.x_distance * this.y_radio;
    var target_pos = this.node.getPosition();
    target_pos.x += x_distance;
    target_pos.y += y_distance;
    this.rot_node.runAction(cc.rotateBy(0.5, 360 * this.direction));
    var w_pos = this.node.parent.convertToWorldSpaceAR(target_pos);
    var is_game_over = false;
    var jumpScore = this.next_block.is_jump_on_block(w_pos, this.direction);

    if (jumpScore > 0) {
      target_pos = this.node.parent.convertToNodeSpaceAR(w_pos); // target_pos就变成了参考点的位置;

      y_distance = target_pos.sub(this.node.getPosition()).y;
    } else {
      is_game_over = true;
    }

    var j = cc.jumpTo(0.5, target_pos, 200, 1);
    this.direction = Math.random() < 0.5 ? -1 : 1;
    var end_func = cc.callFunc(function () {
      this.motionStreak.enabled = false;
      this.jumping = false;

      if (is_game_over) {
        this.game_manager.on_checkout_game();
        cc.audioEngine.playEffect(this.audioJumpFail);
      } else {
        if (this.direction === -1) {
          this.game_manager.move_map(580 - w_pos.x, -y_distance);
        } else {
          this.game_manager.move_map(180 - w_pos.x, -y_distance);
        }

        var playerPosWorld = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        this.game_manager.gainScore(playerPosWorld, jumpScore);
        cc.audioEngine.playEffect(this.audioJumpSuccess);
      }
    }.bind(this));
    var seq = cc.sequence(j, end_func);
    this.node.runAction(seq);
  },
  set_next_block: function set_next_block(block) {
    this.next_block = block;
  },
  start: function start() {
    this.rot_node = this.node.getChildByName("rotate");
    this.anim_node = this.rot_node.getChildByName("anim");
    this.is_power_mode = false;
    this.speed = 0;
    this.x_distance = 0;
    this.game_manager.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      this.onTouchStart();
    }.bind(this), this);
    this.game_manager.node.on(cc.Node.EventType.TOUCH_END, function (e) {
      this.onTouchEnd();
    }.bind(this), this);
    this.game_manager.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
      this.onTouchEnd();
    }.bind(this), this);
  },
  onTouchStart: function onTouchStart() {
    if (this.game_manager.mapMoving || this.jumping) {
      return;
    }

    this.is_power_mode = true;
    this.x_distance = 0;
    this.speed = this.init_speed;
    this.anim_node.stopAllActions();
    this.anim_node.runAction(cc.scaleTo(2, 1, 0.5));
    this.pressParticle.enabled = true;
    this.pressParticle.resetSystem();
    this.playTouchSound();
  },
  onTouchEnd: function onTouchEnd() {
    if (this.is_power_mode) {
      this.is_power_mode = false;
      this.anim_node.stopAllActions();
      this.anim_node.runAction(cc.scaleTo(0.5, 1, 1));
      this.player_jump();
      this.pressParticle.enabled = false;
      this.stopTouchSound();
    }
  },
  playTouchSound: function playTouchSound() {
    this.audioIDPressOnce = cc.audioEngine.playEffect(this.audioJumpPressOnce, false);
    var audioTimePressOnce = cc.audioEngine.getDuration(this.audioIDPressOnce);
    this.audioPressRepeatAlreadyPlay = false;

    this.audioPressRepeatCallback = function () {
      this.audioPressRepeatAlreadyPlay = true;
      this.audioIDPressRepeat = cc.audioEngine.playEffect(this.audioJumpPressRepeat, true);
    }; //大音效播放完之后，开始重复播放小音效


    this.scheduleOnce(this.audioPressRepeatCallback, audioTimePressOnce);
  },
  stopTouchSound: function stopTouchSound() {
    if (this.audioPressRepeatAlreadyPlay) {
      cc.audioEngine.stopEffect(this.audioIDPressRepeat);
    } else {
      cc.audioEngine.stopEffect(this.audioIDPressOnce);
      this.unschedule(this.audioPressRepeatCallback);
    }
  },
  update: function update(dt) {
    if (this.is_power_mode) {
      this.speed += this.a_power * dt;
      this.x_distance += this.speed * dt;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BsYXllci5qcyJdLCJuYW1lcyI6WyJnYW1lX3NjZW5lIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdF9zcGVlZCIsImFfcG93ZXIiLCJ5X3JhZGlvIiwiZ2FtZV9tYW5hZ2VyIiwidHlwZSIsImF1ZGlvSnVtcFByZXNzT25jZSIsIkF1ZGlvQ2xpcCIsImF1ZGlvSnVtcFByZXNzUmVwZWF0IiwiYXVkaW9KdW1wU3VjY2VzcyIsImF1ZGlvSnVtcEZhaWwiLCJwcmVzc1BhcnRpY2xlIiwiUGFydGljbGVTeXN0ZW0iLCJvbkxvYWQiLCJuZXh0X2Jsb2NrIiwiZGlyZWN0aW9uIiwianVtcGluZyIsIm1vdGlvblN0cmVhayIsImdldENvbXBvbmVudCIsIk1vdGlvblN0cmVhayIsInBsYXllcl9qdW1wIiwiZW5hYmxlZCIsInhfZGlzdGFuY2UiLCJ5X2Rpc3RhbmNlIiwidGFyZ2V0X3BvcyIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsIngiLCJ5Iiwicm90X25vZGUiLCJydW5BY3Rpb24iLCJyb3RhdGVCeSIsIndfcG9zIiwicGFyZW50IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiaXNfZ2FtZV9vdmVyIiwianVtcFNjb3JlIiwiaXNfanVtcF9vbl9ibG9jayIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3ViIiwiaiIsImp1bXBUbyIsIk1hdGgiLCJyYW5kb20iLCJlbmRfZnVuYyIsImNhbGxGdW5jIiwib25fY2hlY2tvdXRfZ2FtZSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm1vdmVfbWFwIiwicGxheWVyUG9zV29ybGQiLCJnYWluU2NvcmUiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiLCJzZXRfbmV4dF9ibG9jayIsImJsb2NrIiwic3RhcnQiLCJnZXRDaGlsZEJ5TmFtZSIsImFuaW1fbm9kZSIsImlzX3Bvd2VyX21vZGUiLCJzcGVlZCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZSIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJUT1VDSF9DQU5DRUwiLCJtYXBNb3ZpbmciLCJzdG9wQWxsQWN0aW9ucyIsInNjYWxlVG8iLCJyZXNldFN5c3RlbSIsInBsYXlUb3VjaFNvdW5kIiwic3RvcFRvdWNoU291bmQiLCJhdWRpb0lEUHJlc3NPbmNlIiwiYXVkaW9UaW1lUHJlc3NPbmNlIiwiZ2V0RHVyYXRpb24iLCJhdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkiLCJhdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2siLCJhdWRpb0lEUHJlc3NSZXBlYXQiLCJzY2hlZHVsZU9uY2UiLCJzdG9wRWZmZWN0IiwidW5zY2hlZHVsZSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQyxVQUFVLEVBQUUsR0FoQko7SUFpQlJDLE9BQU8sRUFBRSxHQWpCRDtJQWtCUkMsT0FBTyxFQUFFLFNBbEJEO0lBb0JSQyxZQUFZLEVBQUU7TUFDVkMsSUFBSSxFQUFFVixVQURJO01BRVYsV0FBUztJQUZDLENBcEJOO0lBeUJSVyxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLElBRE87TUFFaEJELElBQUksRUFBRVIsRUFBRSxDQUFDVTtJQUZPLENBekJaO0lBOEJSQyxvQkFBb0IsRUFBRTtNQUNsQixXQUFTLElBRFM7TUFFbEJILElBQUksRUFBRVIsRUFBRSxDQUFDVTtJQUZTLENBOUJkO0lBbUNSRSxn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Six3QkFBckI7SUFDSDtFQUNKLENBdE1JO0VBd01MSyxNQXhNSyxrQkF3TUdDLEVBeE1ILEVBd01PO0lBQ1IsSUFBSSxLQUFLM0IsYUFBVCxFQUF3QjtNQUNwQixLQUFLQyxLQUFMLElBQWUsS0FBSzNELE9BQUwsR0FBZXFGLEVBQTlCO01BQ0EsS0FBS2pFLFVBQUwsSUFBbUIsS0FBS3VDLEtBQUwsR0FBYTBCLEVBQWhDO0lBQ0g7RUFDSjtBQTdNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly93d3cuY29jb3MuY29tL2RvY3MvY3JlYXRvci9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvZWRpdG9yc19hbmRfdG9vbHMvY3JlYXRvci1jaGFwdGVycy9zY3JpcHRpbmcvY2xhc3MvaW5kZXguaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzL2luZGV4Lmh0bWxcclxudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKFwiZ2FtZV9zY2VuZVwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBpbml0X3NwZWVkOiAxNTAsXHJcbiAgICAgICAgYV9wb3dlcjogNjAwLFxyXG4gICAgICAgIHlfcmFkaW86IDAuNTU2MDQ3MixcclxuXHJcbiAgICAgICAgZ2FtZV9tYW5hZ2VyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGdhbWVfc2NlbmUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wUHJlc3NPbmNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhdWRpb0p1bXBQcmVzc1JlcGVhdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wU3VjY2Vzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wRmFpbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcHJlc3NQYXJ0aWNsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QYXJ0aWNsZVN5c3RlbSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxOyAvLyAx77yMLTFcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsgPSB0aGlzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5ZXJfanVtcCgpIHtcclxuICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgeF9kaXN0YW5jZSA9IHRoaXMueF9kaXN0YW5jZSAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgIHZhciB5X2Rpc3RhbmNlID0gdGhpcy54X2Rpc3RhbmNlICogdGhpcy55X3JhZGlvO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0X3BvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRhcmdldF9wb3MueCArPSB4X2Rpc3RhbmNlO1xyXG4gICAgICAgIHRhcmdldF9wb3MueSArPSB5X2Rpc3RhbmNlO1xyXG5cclxuICAgICAgICB0aGlzLnJvdF9ub2RlLnJ1bkFjdGlvbihjYy5yb3RhdGVCeSgwLjUsIDM2MCAqIHRoaXMuZGlyZWN0aW9uKSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3X3BvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldF9wb3MpO1xyXG4gICAgICAgIHZhciBpc19nYW1lX292ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGp1bXBTY29yZSA9IHRoaXMubmV4dF9ibG9jay5pc19qdW1wX29uX2Jsb2NrKHdfcG9zLCB0aGlzLmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChqdW1wU2NvcmUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldF9wb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKTsgLy8gdGFyZ2V0X3Bvc+WwseWPmOaIkOS6huWPguiAg+eCueeahOS9jee9rjtcclxuICAgICAgICAgICAgeV9kaXN0YW5jZSA9IHRhcmdldF9wb3Muc3ViKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKS55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzX2dhbWVfb3ZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaiA9IGNjLmp1bXBUbygwLjUsIHRhcmdldF9wb3MsIDIwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAoTWF0aC5yYW5kb20oKSA8IDAuNSkgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgIHZhciBlbmRfZnVuYyA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzX2dhbWVfb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lX21hbmFnZXIub25fY2hlY2tvdXRfZ2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcEZhaWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm1vdmVfbWFwKDU4MCAtIHdfcG9zLngsIC15X2Rpc3RhbmNlKTsgICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm1vdmVfbWFwKDE4MCAtIHdfcG9zLngsIC15X2Rpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyUG9zV29ybGQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVfbWFuYWdlci5nYWluU2NvcmUocGxheWVyUG9zV29ybGQsIGp1bXBTY29yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcFN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKGosIGVuZF9mdW5jKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRfbmV4dF9ibG9jayhibG9jaykge1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IGJsb2NrO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucm90X25vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5hbmltX25vZGUgPSB0aGlzLnJvdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy54X2Rpc3RhbmNlID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lX21hbmFnZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZV9tYW5hZ2VyLm1hcE1vdmluZyB8fCB0aGlzLmp1bXBpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnhfZGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmluaXRfc3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbV9ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5hbmltX25vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMiwgMSwgMC41KSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJlc3NQYXJ0aWNsZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXNzUGFydGljbGUucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLnBsYXlUb3VjaFNvdW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3Bvd2VyX21vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbV9ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbV9ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuNSwgMSwgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfanVtcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzc1BhcnRpY2xlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVG91Y2hTb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGxheVRvdWNoU291bmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9JRFByZXNzT25jZSA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb0p1bXBQcmVzc09uY2UsIGZhbHNlKTtcclxuICAgICAgICB2YXIgYXVkaW9UaW1lUHJlc3NPbmNlID0gY2MuYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24odGhpcy5hdWRpb0lEUHJlc3NPbmNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF1ZGlvUHJlc3NSZXBlYXRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUHJlc3NSZXBlYXRBbHJlYWR5UGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9JRFByZXNzUmVwZWF0ID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcFByZXNzUmVwZWF0LCB0cnVlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5aSn6Z+z5pWI5pKt5pS+5a6M5LmL5ZCO77yM5byA5aeL6YeN5aSN5pKt5pS+5bCP6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2ssIGF1ZGlvVGltZVByZXNzT25jZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BUb3VjaFNvdW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmF1ZGlvSURQcmVzc1JlcGVhdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmF1ZGlvSURQcmVzc09uY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3Bvd2VyX21vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAodGhpcy5hX3Bvd2VyICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnhfZGlzdGFuY2UgKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFXMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abfceRHxotDsqiepyn4350M', 'ScoreFXMgr');
// scripts/ScoreFXMgr.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    scoreFXPrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  onLoad: function onLoad() {
    this.scoreFXPool = new cc.NodePool("scoreFX");
  },
  playScoreFX: function playScoreFX(posWorld, score) {
    var scoreFX = this.spawnScoreFX();
    var posLocal = this.node.convertToNodeSpaceAR(posWorld);
    scoreFX.node.position = posLocal;
    scoreFX.setScore(score);
    scoreFX.play();
  },
  spawnScoreFX: function spawnScoreFX() {
    var scoreFXNode = null;

    if (this.scoreFXPool.size() > 0) {
      scoreFXNode = this.scoreFXPool.get();
    } else {
      scoreFXNode = cc.instantiate(this.scoreFXPrefab);
    }

    this.node.addChild(scoreFXNode);
    var scoreFX = scoreFXNode.getComponent('ScoreFX');
    scoreFX.init(this);
    return scoreFX;
  },
  despawnScoreFX: function despawnScoreFX(scoreFX) {
    this.scoreFXPool.put(scoreFX.node);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlRlhNZ3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZUZYUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm9uTG9hZCIsInNjb3JlRlhQb29sIiwiTm9kZVBvb2wiLCJwbGF5U2NvcmVGWCIsInBvc1dvcmxkIiwic2NvcmUiLCJzY29yZUZYIiwic3Bhd25TY29yZUZYIiwicG9zTG9jYWwiLCJub2RlIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJwb3NpdGlvbiIsInNldFNjb3JlIiwicGxheSIsInNjb3JlRlhOb2RlIiwic2l6ZSIsImdldCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZGVzcGF3blNjb3JlRlgiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxhQUFhLEVBQUU7TUFDWCxXQUFTLElBREU7TUFFWEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkU7RUFEUCxDQUhQO0VBVUxDLE1BVkssb0JBVUs7SUFDTixLQUFLQyxXQUFMLEdBQW1CLElBQUlSLEVBQUUsQ0FBQ1MsUUFBUCxDQUFnQixTQUFoQixDQUFuQjtFQUNILENBWkk7RUFjTEMsV0FBVyxFQUFFLHFCQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUEwQjtJQUNuQyxJQUFJQyxPQUFPLEdBQUcsS0FBS0MsWUFBTCxFQUFkO0lBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsb0JBQVYsQ0FBK0JOLFFBQS9CLENBQWY7SUFDQUUsT0FBTyxDQUFDRyxJQUFSLENBQWFFLFFBQWIsR0FBd0JILFFBQXhCO0lBQ0FGLE9BQU8sQ0FBQ00sUUFBUixDQUFpQlAsS0FBakI7SUFDQUMsT0FBTyxDQUFDTyxJQUFSO0VBQ0gsQ0FwQkk7RUFzQkxOLFlBQVksRUFBRSx3QkFBVztJQUNyQixJQUFJTyxXQUFXLEdBQUcsSUFBbEI7O0lBQ0EsSUFBSSxLQUFLYixXQUFMLENBQWlCYyxJQUFqQixLQUEwQixDQUE5QixFQUFpQztNQUM3QkQsV0FBVyxHQUFHLEtBQUtiLFdBQUwsQ0FBaUJlLEdBQWpCLEVBQWQ7SUFDSCxDQUZELE1BRU87TUFDSEYsV0FBVyxHQUFHckIsRUFBRSxDQUFDd0IsV0FBSCxDQUFlLEtBQUtwQixhQUFwQixDQUFkO0lBQ0g7O0lBRUQsS0FBS1ksSUFBTCxDQUFVUyxRQUFWLENBQW1CSixXQUFuQjtJQUNBLElBQUlSLE9BQU8sR0FBR1EsV0FBVyxDQUFDSyxZQUFaLENBQXlCLFNBQXpCLENBQWQ7SUFDQWIsT0FBTyxDQUFDYyxJQUFSLENBQWEsSUFBYjtJQUVBLE9BQU9kLE9BQVA7RUFDSCxDQW5DSTtFQXFDTGUsY0FBYyxFQUFFLHdCQUFTZixPQUFULEVBQWtCO0lBQzlCLEtBQUtMLFdBQUwsQ0FBaUJxQixHQUFqQixDQUFxQmhCLE9BQU8sQ0FBQ0csSUFBN0I7RUFDSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzY29yZUZYUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNjb3JlRlhQb29sID0gbmV3IGNjLk5vZGVQb29sKFwic2NvcmVGWFwiKTtcbiAgICB9LFxuXG4gICAgcGxheVNjb3JlRlg6IGZ1bmN0aW9uKHBvc1dvcmxkLCBzY29yZSkge1xuICAgICAgICBsZXQgc2NvcmVGWCA9IHRoaXMuc3Bhd25TY29yZUZYKCk7XG4gICAgICAgIGxldCBwb3NMb2NhbCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NXb3JsZCk7XG4gICAgICAgIHNjb3JlRlgubm9kZS5wb3NpdGlvbiA9IHBvc0xvY2FsO1xuICAgICAgICBzY29yZUZYLnNldFNjb3JlKHNjb3JlKTtcbiAgICAgICAgc2NvcmVGWC5wbGF5KCk7XG4gICAgfSxcblxuICAgIHNwYXduU2NvcmVGWDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzY29yZUZYTm9kZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnNjb3JlRlhQb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIHNjb3JlRlhOb2RlID0gdGhpcy5zY29yZUZYUG9vbC5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3JlRlhOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZUZYUHJlZmFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzY29yZUZYTm9kZSk7XG4gICAgICAgIHZhciBzY29yZUZYID0gc2NvcmVGWE5vZGUuZ2V0Q29tcG9uZW50KCdTY29yZUZYJyk7XG4gICAgICAgIHNjb3JlRlguaW5pdCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gc2NvcmVGWDtcbiAgICB9LFxuXG4gICAgZGVzcGF3blNjb3JlRlg6IGZ1bmN0aW9uKHNjb3JlRlgpIHtcbiAgICAgICAgdGhpcy5zY29yZUZYUG9vbC5wdXQoc2NvcmVGWC5ub2RlKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '951b4qYbopG47UgLcRT9b/Y', 'ScoreFX');
// scripts/ScoreFX.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    animation: {
      "default": null,
      type: cc.Animation
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.animation.on('finished', this.onPlayFinished, this);
  },
  init: function init(mgr) {
    this.mgr = mgr;
  },
  play: function play() {
    this.animation.play('score_pop');
  },
  setScore: function setScore(score) {
    this.scoreLabel.string = "+" + score;
  },
  onPlayFinished: function onPlayFinished(type, state) {
    this.mgr.despawnScoreFX(this);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlRlguanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmltYXRpb24iLCJ0eXBlIiwiQW5pbWF0aW9uIiwic2NvcmVMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwib24iLCJvblBsYXlGaW5pc2hlZCIsImluaXQiLCJtZ3IiLCJwbGF5Iiwic2V0U2NvcmUiLCJzY29yZSIsInN0cmluZyIsInN0YXRlIiwiZGVzcGF3blNjb3JlRlgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkYsQ0FESDtJQU1SQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkQ7RUFOSixDQUhQO0VBZUxDLE1BQU0sRUFBRSxrQkFBVztJQUNmLEtBQUtMLFNBQUwsQ0FBZU0sRUFBZixDQUFrQixVQUFsQixFQUE4QixLQUFLQyxjQUFuQyxFQUFtRCxJQUFuRDtFQUNILENBakJJO0VBbUJMQyxJQUFJLEVBQUUsY0FBU0MsR0FBVCxFQUFjO0lBQ2hCLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtFQUNILENBckJJO0VBdUJMQyxJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLVixTQUFMLENBQWVVLElBQWYsQ0FBb0IsV0FBcEI7RUFDSCxDQXpCSTtFQTJCTEMsUUFBUSxFQUFFLGtCQUFTQyxLQUFULEVBQWdCO0lBQ3RCLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCLE1BQU1ELEtBQS9CO0VBQ0gsQ0E3Qkk7RUErQkxMLGNBQWMsRUFBRSx3QkFBU04sSUFBVCxFQUFlYSxLQUFmLEVBQXNCO0lBQ2xDLEtBQUtMLEdBQUwsQ0FBU00sY0FBVCxDQUF3QixJQUF4QjtFQUNIO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvbixcbiAgICAgICAgfSxcblxuICAgICAgICBzY29yZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLm9uKCdmaW5pc2hlZCcsIHRoaXMub25QbGF5RmluaXNoZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbihtZ3IpIHtcbiAgICAgICAgdGhpcy5tZ3IgPSBtZ3I7XG4gICAgfSxcblxuICAgIHBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCdzY29yZV9wb3AnKTtcbiAgICB9LFxuXG4gICAgc2V0U2NvcmU6IGZ1bmN0aW9uKHNjb3JlKSB7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIitcIiArIHNjb3JlO1xuICAgIH0sXG5cbiAgICBvblBsYXlGaW5pc2hlZDogZnVuY3Rpb24odHlwZSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5tZ3IuZGVzcGF3blNjb3JlRlgodGhpcyk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------
