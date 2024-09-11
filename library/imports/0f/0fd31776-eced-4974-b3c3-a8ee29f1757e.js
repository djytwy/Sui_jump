"use strict";
cc._RF.push(module, '0fd31d27O1JdLPDqO4p8XV+', 'game_scene');
// scripts/game_scene.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var UtilsFB = require("UtilsFB");

var UtilsCommon = require("UtilsCommon");

var SkinMgr = require('SkinMgr');

var ScreenMgr = require('ScreenMgr');

var leaderboardScore = "score_world";
var game_scene = cc.Class({
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
    player: {
      type: cc.Node,
      "default": null
    },
    block_prefab: {
      "default": [],
      type: cc.Prefab
    },
    block_root: {
      type: cc.Node,
      "default": null
    },
    left_org: cc.v2(0, 0),
    map_root: {
      type: cc.Node,
      "default": null
    },
    y_radio: 0.5560472,
    checkout: {
      type: cc.Node,
      "default": null
    },
    scoreFXMgr: {
      "default": null,
      type: require('ScoreFXMgr')
    },
    scoreOvertakeMgr: {
      "default": null,
      type: require('ScoreOvertakeMgr')
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    },
    hintControlLabel: {
      "default": null,
      type: cc.Label
    },
    btnShare: {
      "default": null,
      type: cc.Node
    },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    },
    playerSkinSprite: {
      "default": null,
      type: cc.Sprite
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    game_scene.instance = this;
    this.mapMoving = false;
    this.isGameOver = true;
    this.gaming = false;
    this.mapRootInitPos = this.map_root.getPosition();
    this.score = 0;
    this.player_com = this.player.getComponent("player");
    this.playerArray = null;
    this.currentSkinIndex = 0;
  },
  start: function start() {
    UtilsFB.init(leaderboardScore);
  },
  onGameStart: function onGameStart(showLabelScore, holdScore) {
    this.map_root.setPosition(this.mapRootInitPos);
    this.block_root.removeAllChildren(true);

    if (!holdScore) {
      this.score = 0;
    }

    this.updateScoreDisplay();
    this.checkout.active = false;
    this.player_com.direction = 1;
    this.cur_block = cc.instantiate(this.block_prefab[Math.floor(Math.random() * 3)]);
    this.block_root.addChild(this.cur_block);
    this.cur_block.setPosition(this.block_root.convertToNodeSpaceAR(this.left_org));
    var w_pos = this.cur_block.getChildByName("mid").convertToWorldSpaceAR(cc.v2(0, 0));
    this.player.setPosition(this.map_root.convertToNodeSpaceAR(w_pos));
    this.next_block = this.cur_block;
    this.block_zorder = -1;
    this.add_block();
    this.showLabelScore(showLabelScore); // UtilsFB.invitePlayerRandomAsync(UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain())).catch(error => {});

    this.isGameOver = false;
  },
  showLabelScore: function showLabelScore(active) {
    this.scoreLabel.node.active = active;
    this.hintControlLabel.node.active = active;
    this.btnShare.active = active;
  },
  add_block: function add_block() {
    this.cur_block = this.next_block;
    this.next_block = cc.instantiate(this.block_prefab[Math.floor(Math.random() * 3)]);
    this.block_root.addChild(this.next_block); // this.next_block.setLocalZOrder(this.block_zorder);

    this.next_block.zIndex = this.block_zorder;
    this.block_zorder--;
    var x_distance = 200 + Math.random() * 200;
    var y_distance = x_distance * this.y_radio;
    var next_pos = this.cur_block.getPosition();
    next_pos.x += x_distance * this.player_com.direction;
    next_pos.y += y_distance;
    this.next_block.setPosition(next_pos);
    this.player_com.set_next_block(this.next_block.getComponent("block")); // 删除掉没有用的block

    for (var i = this.block_root.childrenCount - 1; i >= 0; i--) {
      this.destroyOutBlock(this.block_root.children[i]);
    } // end 

  },
  destroyOutBlock: function destroyOutBlock(blockNode) {
    var block = blockNode.getComponent('block');
    var blockPosWorld = blockNode.parent.convertToWorldSpaceAR(blockNode.getPosition());
    var gamePosWorld = this.node.getPosition();
    var distance = blockPosWorld.sub(gamePosWorld);
    var minDistanceX = this.node.width / 2 + blockNode.width / 2;
    var minDistanceY = this.node.height / 2 + blockNode.height / 2;

    if (Math.abs(distance.x) > minDistanceX && Math.abs(distance.y) > minDistanceY) {
      blockNode.destroy();
    }
  },
  move_map: function move_map(offset_x, offset_y) {
    this.mapMoving = true;
    var m1 = cc.moveBy(0.5, offset_x, offset_y);
    var end_func = cc.callFunc(function () {
      this.mapMoving = false;
      this.add_block();
    }.bind(this));
    var seq = cc.sequence([m1, end_func]);
    this.map_root.runAction(seq);
  },
  on_checkout_game: function on_checkout_game() {
    this.isGameOver = true;
    this.showLabelScore(false);
    ScreenMgr.instance.showScreen('ScreenGameOver');
    return;
  },
  gainScore: function gainScore(posWorld, score) {
    this.score += score;
    this.updateScoreDisplay();
    this.scoreFXMgr.playScoreFX(posWorld, score);
    var playerOvertaken = UtilsFB.getPlayerInfoScoreOvertake(leaderboardScore, this.score - score, this.score);

    if (playerOvertaken.length > 0) {
      this.scoreOvertakeMgr.play(posWorld, playerOvertaken);
    }
  },
  updateScoreDisplay: function updateScoreDisplay() {
    this.scoreLabel.string = "Score: " + this.score;
  },
  onShowLeaderboard: function onShowLeaderboard() {
    this.screenLeaderboard.showLeaderboard(leaderboardScore);
  },
  onShare: function onShare() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64)["catch"](function (error) {});
  },
  onSkinChange: function onSkinChange(skinIndex) {
    if (this.currentSkinIndex != skinIndex) {
      this.currentSkinIndex = skinIndex;
      this.playerSkinSprite.spriteFrame = SkinMgr.instance.getSkinSpriteFrame(skinIndex);
    }
  }
});

cc._RF.pop();