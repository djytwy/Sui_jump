"use strict";
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