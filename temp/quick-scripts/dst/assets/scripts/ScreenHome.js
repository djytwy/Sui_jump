
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