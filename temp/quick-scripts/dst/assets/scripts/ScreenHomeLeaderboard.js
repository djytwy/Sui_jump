
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