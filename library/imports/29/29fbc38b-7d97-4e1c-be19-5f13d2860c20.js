"use strict";
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