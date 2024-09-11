"use strict";
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