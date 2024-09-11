"use strict";
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