
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfc2NlbmUuanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlNraW5NZ3IiLCJTY3JlZW5NZ3IiLCJsZWFkZXJib2FyZFNjb3JlIiwiZ2FtZV9zY2VuZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxheWVyIiwidHlwZSIsIk5vZGUiLCJibG9ja19wcmVmYWIiLCJQcmVmYWIiLCJibG9ja19yb290IiwibGVmdF9vcmciLCJ2MiIsIm1hcF9yb290IiwieV9yYWRpbyIsImNoZWNrb3V0Iiwic2NvcmVGWE1nciIsInNjb3JlT3ZlcnRha2VNZ3IiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJoaW50Q29udHJvbExhYmVsIiwiYnRuU2hhcmUiLCJzY3JlZW5MZWFkZXJib2FyZCIsInBsYXllclNraW5TcHJpdGUiLCJTcHJpdGUiLCJzdGF0aWNzIiwiaW5zdGFuY2UiLCJvbkxvYWQiLCJtYXBNb3ZpbmciLCJpc0dhbWVPdmVyIiwiZ2FtaW5nIiwibWFwUm9vdEluaXRQb3MiLCJnZXRQb3NpdGlvbiIsInNjb3JlIiwicGxheWVyX2NvbSIsImdldENvbXBvbmVudCIsInBsYXllckFycmF5IiwiY3VycmVudFNraW5JbmRleCIsInN0YXJ0IiwiaW5pdCIsIm9uR2FtZVN0YXJ0Iiwic2hvd0xhYmVsU2NvcmUiLCJob2xkU2NvcmUiLCJzZXRQb3NpdGlvbiIsInJlbW92ZUFsbENoaWxkcmVuIiwidXBkYXRlU2NvcmVEaXNwbGF5IiwiYWN0aXZlIiwiZGlyZWN0aW9uIiwiY3VyX2Jsb2NrIiwiaW5zdGFudGlhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhZGRDaGlsZCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwid19wb3MiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIm5leHRfYmxvY2siLCJibG9ja196b3JkZXIiLCJhZGRfYmxvY2siLCJub2RlIiwiekluZGV4IiwieF9kaXN0YW5jZSIsInlfZGlzdGFuY2UiLCJuZXh0X3BvcyIsIngiLCJ5Iiwic2V0X25leHRfYmxvY2siLCJpIiwiY2hpbGRyZW5Db3VudCIsImRlc3Ryb3lPdXRCbG9jayIsImNoaWxkcmVuIiwiYmxvY2tOb2RlIiwiYmxvY2siLCJibG9ja1Bvc1dvcmxkIiwicGFyZW50IiwiZ2FtZVBvc1dvcmxkIiwiZGlzdGFuY2UiLCJzdWIiLCJtaW5EaXN0YW5jZVgiLCJ3aWR0aCIsIm1pbkRpc3RhbmNlWSIsImhlaWdodCIsImFicyIsImRlc3Ryb3kiLCJtb3ZlX21hcCIsIm9mZnNldF94Iiwib2Zmc2V0X3kiLCJtMSIsIm1vdmVCeSIsImVuZF9mdW5jIiwiY2FsbEZ1bmMiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJvbl9jaGVja291dF9nYW1lIiwic2hvd1NjcmVlbiIsImdhaW5TY29yZSIsInBvc1dvcmxkIiwicGxheVNjb3JlRlgiLCJwbGF5ZXJPdmVydGFrZW4iLCJnZXRQbGF5ZXJJbmZvU2NvcmVPdmVydGFrZSIsImxlbmd0aCIsInBsYXkiLCJzdHJpbmciLCJvblNob3dMZWFkZXJib2FyZCIsInNob3dMZWFkZXJib2FyZCIsIm9uU2hhcmUiLCJpbWFnZUJhc2U2NCIsImdldFNjcmVlbnNob3RCYXNlNjQiLCJnZXRDYW1lcmFNYWluIiwiY2hvb3NlQXN5bmMiLCJlcnJvciIsIm9uU2tpbkNoYW5nZSIsInNraW5JbmRleCIsInNwcml0ZUZyYW1lIiwiZ2V0U2tpblNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENB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TCxDQUFnQndGLE1BQWhCLEdBQXlCLFlBQVksS0FBS3pFLEtBQTFDO0VBQ0gsQ0FyTnFCO0VBdU50QjBFLGlCQUFpQixFQUFFLDZCQUFZO0lBQzNCLEtBQUtyRixpQkFBTCxDQUF1QnNGLGVBQXZCLENBQXVDN0csZ0JBQXZDO0VBQ0gsQ0F6TnFCO0VBMk50QjhHLE9BQU8sRUFBRSxtQkFBWTtJQUNqQixJQUFJQyxXQUFXLEdBQUdsSCxXQUFXLENBQUNtSCxtQkFBWixDQUFnQ25ILFdBQVcsQ0FBQ29ILGFBQVosRUFBaEMsQ0FBbEI7SUFDQXRILE9BQU8sQ0FBQ3VILFdBQVIsQ0FBb0JILFdBQXBCLFdBQXVDLFVBQUFJLEtBQUssRUFBSSxDQUFHLENBQW5EO0VBQ0gsQ0E5TnFCO0VBZ090QkMsWUFBWSxFQUFFLHNCQUFVQyxTQUFWLEVBQXFCO0lBQy9CLElBQUksS0FBSy9FLGdCQUFMLElBQXlCK0UsU0FBN0IsRUFBd0M7TUFDcEMsS0FBSy9FLGdCQUFMLEdBQXdCK0UsU0FBeEI7TUFDQSxLQUFLN0YsZ0JBQUwsQ0FBc0I4RixXQUF0QixHQUFvQ3hILE9BQU8sQ0FBQzZCLFFBQVIsQ0FBaUI0RixrQkFBakIsQ0FBb0NGLFNBQXBDLENBQXBDO0lBQ0g7RUFDSjtBQXJPcUIsQ0FBVCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2NsYXNzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy9pbmRleC5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy9pbmRleC5odG1sXHJcblxyXG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoXCJVdGlsc0ZCXCIpO1xyXG52YXIgVXRpbHNDb21tb24gPSByZXF1aXJlKFwiVXRpbHNDb21tb25cIik7XHJcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xyXG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XHJcbmNvbnN0IGxlYWRlcmJvYXJkU2NvcmUgPSBcInNjb3JlX3dvcmxkXCI7XHJcbnZhciBnYW1lX3NjZW5lID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBibG9ja19wcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBibG9ja19yb290OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVmdF9vcmc6IGNjLnYyKDAsIDApLFxyXG5cclxuICAgICAgICBtYXBfcm9vdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHlfcmFkaW86IDAuNTU2MDQ3MixcclxuXHJcbiAgICAgICAgY2hlY2tvdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUZYTWdyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1Njb3JlRlhNZ3InKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZU92ZXJ0YWtlTWdyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1Njb3JlT3ZlcnRha2VNZ3InKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhpbnRDb250cm9sTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnRuU2hhcmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY3JlZW5MZWFkZXJib2FyZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiByZXF1aXJlKCdTY3JlZW5MZWFkZXJib2FyZCcpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXllclNraW5TcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGdhbWVfc2NlbmUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWFwTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm1hcFJvb3RJbml0UG9zID0gdGhpcy5tYXBfcm9vdC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2NvbSA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChcInBsYXllclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBcnJheSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNraW5JbmRleCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFV0aWxzRkIuaW5pdChsZWFkZXJib2FyZFNjb3JlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25HYW1lU3RhcnQ6IGZ1bmN0aW9uIChzaG93TGFiZWxTY29yZSwgaG9sZFNjb3JlKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfcm9vdC5zZXRQb3NpdGlvbih0aGlzLm1hcFJvb3RJbml0UG9zKTtcclxuICAgICAgICB0aGlzLmJsb2NrX3Jvb3QucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFob2xkU2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5jaGVja291dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9jb20uZGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrX3ByZWZhYltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0pO1xyXG4gICAgICAgIHRoaXMuYmxvY2tfcm9vdC5hZGRDaGlsZCh0aGlzLmN1cl9ibG9jayk7XHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2suc2V0UG9zaXRpb24odGhpcy5ibG9ja19yb290LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubGVmdF9vcmcpKTtcclxuXHJcbiAgICAgICAgdmFyIHdfcG9zID0gdGhpcy5jdXJfYmxvY2suZ2V0Q2hpbGRCeU5hbWUoXCJtaWRcIikuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbih0aGlzLm1hcF9yb290LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0X2Jsb2NrID0gdGhpcy5jdXJfYmxvY2s7XHJcbiAgICAgICAgdGhpcy5ibG9ja196b3JkZXIgPSAtMTtcclxuICAgICAgICB0aGlzLmFkZF9ibG9jaygpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dMYWJlbFNjb3JlKHNob3dMYWJlbFNjb3JlKTtcclxuXHJcbiAgICAgICAgLy8gVXRpbHNGQi5pbnZpdGVQbGF5ZXJSYW5kb21Bc3luYyhVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSkpLmNhdGNoKGVycm9yID0+IHt9KTtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0xhYmVsU2NvcmU6IGZ1bmN0aW9uIChhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwubm9kZS5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgICAgdGhpcy5oaW50Q29udHJvbExhYmVsLm5vZGUuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuYnRuU2hhcmUuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRfYmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5jdXJfYmxvY2sgPSB0aGlzLm5leHRfYmxvY2s7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tfcHJlZmFiW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja19yb290LmFkZENoaWxkKHRoaXMubmV4dF9ibG9jayk7XHJcbiAgICAgICAgLy8gdGhpcy5uZXh0X2Jsb2NrLnNldExvY2FsWk9yZGVyKHRoaXMuYmxvY2tfem9yZGVyKTtcclxuICAgICAgICB0aGlzLm5leHRfYmxvY2suekluZGV4ID0gdGhpcy5ibG9ja196b3JkZXI7XHJcbiAgICAgICAgdGhpcy5ibG9ja196b3JkZXItLTtcclxuXHJcbiAgICAgICAgdmFyIHhfZGlzdGFuY2UgPSAyMDAgKyBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgICAgIHZhciB5X2Rpc3RhbmNlID0geF9kaXN0YW5jZSAqIHRoaXMueV9yYWRpbztcclxuXHJcbiAgICAgICAgdmFyIG5leHRfcG9zID0gdGhpcy5jdXJfYmxvY2suZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBuZXh0X3Bvcy54ICs9ICh4X2Rpc3RhbmNlICogdGhpcy5wbGF5ZXJfY29tLmRpcmVjdGlvbik7XHJcbiAgICAgICAgbmV4dF9wb3MueSArPSB5X2Rpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jay5zZXRQb3NpdGlvbihuZXh0X3Bvcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBsYXllcl9jb20uc2V0X25leHRfYmxvY2sodGhpcy5uZXh0X2Jsb2NrLmdldENvbXBvbmVudChcImJsb2NrXCIpKTtcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5o6J5rKh5pyJ55So55qEYmxvY2tcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ibG9ja19yb290LmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lPdXRCbG9jayh0aGlzLmJsb2NrX3Jvb3QuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveU91dEJsb2NrOiBmdW5jdGlvbiAoYmxvY2tOb2RlKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnYmxvY2snKTtcclxuICAgICAgICBsZXQgYmxvY2tQb3NXb3JsZCA9IGJsb2NrTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJsb2NrTm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBsZXQgZ2FtZVBvc1dvcmxkID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gYmxvY2tQb3NXb3JsZC5zdWIoZ2FtZVBvc1dvcmxkKTtcclxuICAgICAgICBsZXQgbWluRGlzdGFuY2VYID0gdGhpcy5ub2RlLndpZHRoIC8gMiArIGJsb2NrTm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlWSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyICsgYmxvY2tOb2RlLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZS54KSA+IG1pbkRpc3RhbmNlWCAmJiBNYXRoLmFicyhkaXN0YW5jZS55KSA+IG1pbkRpc3RhbmNlWSkge1xyXG4gICAgICAgICAgICBibG9ja05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZV9tYXAob2Zmc2V0X3gsIG9mZnNldF95KSB7XHJcbiAgICAgICAgdGhpcy5tYXBNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtMSA9IGNjLm1vdmVCeSgwLjUsIG9mZnNldF94LCBvZmZzZXRfeSk7XHJcbiAgICAgICAgdmFyIGVuZF9mdW5jID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZF9ibG9jaygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShbbTEsIGVuZF9mdW5jXSk7XHJcbiAgICAgICAgdGhpcy5tYXBfcm9vdC5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25fY2hlY2tvdXRfZ2FtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TGFiZWxTY29yZShmYWxzZSk7XHJcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkdhbWVPdmVyJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uIChwb3NXb3JsZCwgc2NvcmUpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUZYTWdyLnBsYXlTY29yZUZYKHBvc1dvcmxkLCBzY29yZSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJPdmVydGFrZW4gPSBVdGlsc0ZCLmdldFBsYXllckluZm9TY29yZU92ZXJ0YWtlKGxlYWRlcmJvYXJkU2NvcmUsIHRoaXMuc2NvcmUgLSBzY29yZSwgdGhpcy5zY29yZSk7XHJcbiAgICAgICAgaWYgKHBsYXllck92ZXJ0YWtlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVPdmVydGFrZU1nci5wbGF5KHBvc1dvcmxkLCBwbGF5ZXJPdmVydGFrZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2NvcmVEaXNwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TaG93TGVhZGVyYm9hcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbkxlYWRlcmJvYXJkLnNob3dMZWFkZXJib2FyZChsZWFkZXJib2FyZFNjb3JlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TaGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcclxuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KS5jYXRjaChlcnJvciA9PiB7IH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNraW5DaGFuZ2U6IGZ1bmN0aW9uIChza2luSW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2tpbkluZGV4ICE9IHNraW5JbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTa2luSW5kZXggPSBza2luSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2tpblNwcml0ZS5zcHJpdGVGcmFtZSA9IFNraW5NZ3IuaW5zdGFuY2UuZ2V0U2tpblNwcml0ZUZyYW1lKHNraW5JbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==