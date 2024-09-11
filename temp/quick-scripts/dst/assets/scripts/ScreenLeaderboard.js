
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