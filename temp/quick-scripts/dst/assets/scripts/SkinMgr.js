
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