
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