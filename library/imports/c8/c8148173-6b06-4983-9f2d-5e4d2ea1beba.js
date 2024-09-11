"use strict";
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