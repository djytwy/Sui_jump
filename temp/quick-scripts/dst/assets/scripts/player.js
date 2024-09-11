
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21c8axcsehOF7uRiV385w6I', 'player');
// scripts/player.js

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
var game_scene = require("game_scene");

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
    init_speed: 150,
    a_power: 600,
    y_radio: 0.5560472,
    game_manager: {
      type: game_scene,
      "default": null
    },
    audioJumpPressOnce: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpPressRepeat: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpSuccess: {
      "default": null,
      type: cc.AudioClip
    },
    audioJumpFail: {
      "default": null,
      type: cc.AudioClip
    },
    pressParticle: {
      "default": null,
      type: cc.ParticleSystem
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.next_block = null;
    this.direction = 1; // 1，-1

    this.jumping = false;
    this.motionStreak = this.getComponent(cc.MotionStreak);
  },
  player_jump: function player_jump() {
    this.motionStreak.enabled = true;
    this.jumping = true;
    var x_distance = this.x_distance * this.direction;
    var y_distance = this.x_distance * this.y_radio;
    var target_pos = this.node.getPosition();
    target_pos.x += x_distance;
    target_pos.y += y_distance;
    this.rot_node.runAction(cc.rotateBy(0.5, 360 * this.direction));
    var w_pos = this.node.parent.convertToWorldSpaceAR(target_pos);
    var is_game_over = false;
    var jumpScore = this.next_block.is_jump_on_block(w_pos, this.direction);

    if (jumpScore > 0) {
      target_pos = this.node.parent.convertToNodeSpaceAR(w_pos); // target_pos就变成了参考点的位置;

      y_distance = target_pos.sub(this.node.getPosition()).y;
    } else {
      is_game_over = true;
    }

    var j = cc.jumpTo(0.5, target_pos, 200, 1);
    this.direction = Math.random() < 0.5 ? -1 : 1;
    var end_func = cc.callFunc(function () {
      this.motionStreak.enabled = false;
      this.jumping = false;

      if (is_game_over) {
        this.game_manager.on_checkout_game();
        cc.audioEngine.playEffect(this.audioJumpFail);
      } else {
        if (this.direction === -1) {
          this.game_manager.move_map(580 - w_pos.x, -y_distance);
        } else {
          this.game_manager.move_map(180 - w_pos.x, -y_distance);
        }

        var playerPosWorld = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        this.game_manager.gainScore(playerPosWorld, jumpScore);
        cc.audioEngine.playEffect(this.audioJumpSuccess);
      }
    }.bind(this));
    var seq = cc.sequence(j, end_func);
    this.node.runAction(seq);
  },
  set_next_block: function set_next_block(block) {
    this.next_block = block;
  },
  start: function start() {
    this.rot_node = this.node.getChildByName("rotate");
    this.anim_node = this.rot_node.getChildByName("anim");
    this.is_power_mode = false;
    this.speed = 0;
    this.x_distance = 0;
    this.game_manager.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      this.onTouchStart();
    }.bind(this), this);
    this.game_manager.node.on(cc.Node.EventType.TOUCH_END, function (e) {
      this.onTouchEnd();
    }.bind(this), this);
    this.game_manager.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
      this.onTouchEnd();
    }.bind(this), this);
  },
  onTouchStart: function onTouchStart() {
    if (this.game_manager.mapMoving || this.jumping) {
      return;
    }

    this.is_power_mode = true;
    this.x_distance = 0;
    this.speed = this.init_speed;
    this.anim_node.stopAllActions();
    this.anim_node.runAction(cc.scaleTo(2, 1, 0.5));
    this.pressParticle.enabled = true;
    this.pressParticle.resetSystem();
    this.playTouchSound();
  },
  onTouchEnd: function onTouchEnd() {
    if (this.is_power_mode) {
      this.is_power_mode = false;
      this.anim_node.stopAllActions();
      this.anim_node.runAction(cc.scaleTo(0.5, 1, 1));
      this.player_jump();
      this.pressParticle.enabled = false;
      this.stopTouchSound();
    }
  },
  playTouchSound: function playTouchSound() {
    this.audioIDPressOnce = cc.audioEngine.playEffect(this.audioJumpPressOnce, false);
    var audioTimePressOnce = cc.audioEngine.getDuration(this.audioIDPressOnce);
    this.audioPressRepeatAlreadyPlay = false;

    this.audioPressRepeatCallback = function () {
      this.audioPressRepeatAlreadyPlay = true;
      this.audioIDPressRepeat = cc.audioEngine.playEffect(this.audioJumpPressRepeat, true);
    }; //大音效播放完之后，开始重复播放小音效


    this.scheduleOnce(this.audioPressRepeatCallback, audioTimePressOnce);
  },
  stopTouchSound: function stopTouchSound() {
    if (this.audioPressRepeatAlreadyPlay) {
      cc.audioEngine.stopEffect(this.audioIDPressRepeat);
    } else {
      cc.audioEngine.stopEffect(this.audioIDPressOnce);
      this.unschedule(this.audioPressRepeatCallback);
    }
  },
  update: function update(dt) {
    if (this.is_power_mode) {
      this.speed += this.a_power * dt;
      this.x_distance += this.speed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BsYXllci5qcyJdLCJuYW1lcyI6WyJnYW1lX3NjZW5lIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdF9zcGVlZCIsImFfcG93ZXIiLCJ5X3JhZGlvIiwiZ2FtZV9tYW5hZ2VyIiwidHlwZSIsImF1ZGlvSnVtcFByZXNzT25jZSIsIkF1ZGlvQ2xpcCIsImF1ZGlvSnVtcFByZXNzUmVwZWF0IiwiYXVkaW9KdW1wU3VjY2VzcyIsImF1ZGlvSnVtcEZhaWwiLCJwcmVzc1BhcnRpY2xlIiwiUGFydGljbGVTeXN0ZW0iLCJvbkxvYWQiLCJuZXh0X2Jsb2NrIiwiZGlyZWN0aW9uIiwianVtcGluZyIsIm1vdGlvblN0cmVhayIsImdldENvbXBvbmVudCIsIk1vdGlvblN0cmVhayIsInBsYXllcl9qdW1wIiwiZW5hYmxlZCIsInhfZGlzdGFuY2UiLCJ5X2Rpc3RhbmNlIiwidGFyZ2V0X3BvcyIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsIngiLCJ5Iiwicm90X25vZGUiLCJydW5BY3Rpb24iLCJyb3RhdGVCeSIsIndfcG9zIiwicGFyZW50IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiaXNfZ2FtZV9vdmVyIiwianVtcFNjb3JlIiwiaXNfanVtcF9vbl9ibG9jayIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3ViIiwiaiIsImp1bXBUbyIsIk1hdGgiLCJyYW5kb20iLCJlbmRfZnVuYyIsImNhbGxGdW5jIiwib25fY2hlY2tvdXRfZ2FtZSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm1vdmVfbWFwIiwicGxheWVyUG9zV29ybGQiLCJnYWluU2NvcmUiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiLCJzZXRfbmV4dF9ibG9jayIsImJsb2NrIiwic3RhcnQiLCJnZXRDaGlsZEJ5TmFtZSIsImFuaW1fbm9kZSIsImlzX3Bvd2VyX21vZGUiLCJzcGVlZCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZSIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJUT1VDSF9DQU5DRUwiLCJtYXBNb3ZpbmciLCJzdG9wQWxsQWN0aW9ucyIsInNjYWxlVG8iLCJyZXNldFN5c3RlbSIsInBsYXlUb3VjaFNvdW5kIiwic3RvcFRvdWNoU291bmQiLCJhdWRpb0lEUHJlc3NPbmNlIiwiYXVkaW9UaW1lUHJlc3NPbmNlIiwiZ2V0RHVyYXRpb24iLCJhdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkiLCJhdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2siLCJhdWRpb0lEUHJlc3NSZXBlYXQiLCJzY2hlZHVsZU9uY2UiLCJzdG9wRWZmZWN0IiwidW5zY2hlZHVsZSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQyxVQUFVLEVBQUUsR0FoQko7SUFpQlJDLE9BQU8sRUFBRSxHQWpCRDtJQWtCUkMsT0FBTyxFQUFFLFNBbEJEO0lBb0JSQyxZQUFZLEVBQUU7TUFDVkMsSUFBSSxFQUFFVixVQURJO01BRVYsV0FBUztJQUZDLENBcEJOO0lBeUJSVyxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLElBRE87TUFFaEJELElBQUksRUFBRVIsRUFBRSxDQUFDVTtJQUZPLENBekJaO0lBOEJSQyxvQkFBb0IsRUFBRTtNQUNsQixXQUFTLElBRFM7TUFFbEJILElBQUksRUFBRVIsRUFBRSxDQUFDVTtJQUZTLENBOUJkO0lBbUNSRSxnQkFBZ0IsRUFBRTtNQUNkLFdBQVMsSUFESztNQUVkSixJQUFJLEVBQUVSLEVBQUUsQ0FBQ1U7SUFGSyxDQW5DVjtJQXdDUkcsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhMLElBQUksRUFBRVIsRUFBRSxDQUFDVTtJQUZFLENBeENQO0lBNkNSSSxhQUFhLEVBQUU7TUFDWCxXQUFTLElBREU7TUFFWE4sSUFBSSxFQUFFUixFQUFFLENBQUNlO0lBRkU7RUE3Q1AsQ0FIUDtFQXNETDtFQUVBQyxNQXhESyxvQkF3REs7SUFDTixLQUFLQyxVQUFMLEdBQWtCLElBQWxCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFqQixDQUZNLENBRWM7O0lBQ3BCLEtBQUtDLE9BQUwsR0FBZSxLQUFmO0lBRUEsS0FBS0MsWUFBTCxHQUFvQixLQUFLQyxZQUFMLENBQWtCckIsRUFBRSxDQUFDc0IsWUFBckIsQ0FBcEI7RUFDSCxDQTlESTtFQWdFTEMsV0FoRUsseUJBZ0VTO0lBQ1YsS0FBS0gsWUFBTCxDQUFrQkksT0FBbEIsR0FBNEIsSUFBNUI7SUFDQSxLQUFLTCxPQUFMLEdBQWUsSUFBZjtJQUVBLElBQUlNLFVBQVUsR0FBRyxLQUFLQSxVQUFMLEdBQWtCLEtBQUtQLFNBQXhDO0lBQ0EsSUFBSVEsVUFBVSxHQUFHLEtBQUtELFVBQUwsR0FBa0IsS0FBS25CLE9BQXhDO0lBRUEsSUFBSXFCLFVBQVUsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBakI7SUFDQUYsVUFBVSxDQUFDRyxDQUFYLElBQWdCTCxVQUFoQjtJQUNBRSxVQUFVLENBQUNJLENBQVgsSUFBZ0JMLFVBQWhCO0lBRUEsS0FBS00sUUFBTCxDQUFjQyxTQUFkLENBQXdCakMsRUFBRSxDQUFDa0MsUUFBSCxDQUFZLEdBQVosRUFBaUIsTUFBTSxLQUFLaEIsU0FBNUIsQ0FBeEI7SUFHQSxJQUFJaUIsS0FBSyxHQUFHLEtBQUtQLElBQUwsQ0FBVVEsTUFBVixDQUFpQkMscUJBQWpCLENBQXVDVixVQUF2QyxDQUFaO0lBQ0EsSUFBSVcsWUFBWSxHQUFHLEtBQW5CO0lBRUEsSUFBSUMsU0FBUyxHQUFHLEtBQUt0QixVQUFMLENBQWdCdUIsZ0JBQWhCLENBQWlDTCxLQUFqQyxFQUF3QyxLQUFLakIsU0FBN0MsQ0FBaEI7O0lBRUEsSUFBSXFCLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtNQUNmWixVQUFVLEdBQUcsS0FBS0MsSUFBTCxDQUFVUSxNQUFWLENBQWlCSyxvQkFBakIsQ0FBc0NOLEtBQXRDLENBQWIsQ0FEZSxDQUM0Qzs7TUFDM0RULFVBQVUsR0FBR0MsVUFBVSxDQUFDZSxHQUFYLENBQWUsS0FBS2QsSUFBTCxDQUFVQyxXQUFWLEVBQWYsRUFBd0NFLENBQXJEO0lBQ0gsQ0FIRCxNQUdPO01BQ0hPLFlBQVksR0FBRyxJQUFmO0lBQ0g7O0lBRUQsSUFBSUssQ0FBQyxHQUFHM0MsRUFBRSxDQUFDNEMsTUFBSCxDQUFVLEdBQVYsRUFBZWpCLFVBQWYsRUFBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBUjtJQUNBLEtBQUtULFNBQUwsR0FBa0IyQixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsR0FBd0IsQ0FBQyxDQUF6QixHQUE2QixDQUE5QztJQUVBLElBQUlDLFFBQVEsR0FBRy9DLEVBQUUsQ0FBQ2dELFFBQUgsQ0FBWSxZQUFXO01BQ2xDLEtBQUs1QixZQUFMLENBQWtCSSxPQUFsQixHQUE0QixLQUE1QjtNQUNBLEtBQUtMLE9BQUwsR0FBZSxLQUFmOztNQUVBLElBQUltQixZQUFKLEVBQWtCO1FBQ2QsS0FBSy9CLFlBQUwsQ0FBa0IwQyxnQkFBbEI7UUFDQWpELEVBQUUsQ0FBQ2tELFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLdEMsYUFBL0I7TUFDSCxDQUhELE1BR087UUFDSCxJQUFJLEtBQUtLLFNBQUwsS0FBbUIsQ0FBQyxDQUF4QixFQUEyQjtVQUN2QixLQUFLWCxZQUFMLENBQWtCNkMsUUFBbEIsQ0FBMkIsTUFBTWpCLEtBQUssQ0FBQ0wsQ0FBdkMsRUFBMEMsQ0FBQ0osVUFBM0M7UUFDSCxDQUZELE1BRU87VUFDSCxLQUFLbkIsWUFBTCxDQUFrQjZDLFFBQWxCLENBQTJCLE1BQU1qQixLQUFLLENBQUNMLENBQXZDLEVBQTBDLENBQUNKLFVBQTNDO1FBQ0g7O1FBRUQsSUFBSTJCLGNBQWMsR0FBRyxLQUFLekIsSUFBTCxDQUFVUSxNQUFWLENBQWlCQyxxQkFBakIsQ0FBdUMsS0FBS1QsSUFBTCxDQUFVQyxXQUFWLEVBQXZDLENBQXJCO1FBQ0EsS0FBS3RCLFlBQUwsQ0FBa0IrQyxTQUFsQixDQUE0QkQsY0FBNUIsRUFBNENkLFNBQTVDO1FBRUF2QyxFQUFFLENBQUNrRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3ZDLGdCQUEvQjtNQUNIO0lBQ0osQ0FuQjBCLENBbUJ6QjJDLElBbkJ5QixDQW1CcEIsSUFuQm9CLENBQVosQ0FBZjtJQXNCQSxJQUFJQyxHQUFHLEdBQUd4RCxFQUFFLENBQUN5RCxRQUFILENBQVlkLENBQVosRUFBZUksUUFBZixDQUFWO0lBRUEsS0FBS25CLElBQUwsQ0FBVUssU0FBVixDQUFvQnVCLEdBQXBCO0VBQ0gsQ0F0SEk7RUF3SExFLGNBeEhLLDBCQXdIVUMsS0F4SFYsRUF3SGlCO0lBQ2xCLEtBQUsxQyxVQUFMLEdBQWtCMEMsS0FBbEI7RUFDSCxDQTFISTtFQTRITEMsS0E1SEssbUJBNEhJO0lBR0wsS0FBSzVCLFFBQUwsR0FBZ0IsS0FBS0osSUFBTCxDQUFVaUMsY0FBVixDQUF5QixRQUF6QixDQUFoQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBSzlCLFFBQUwsQ0FBYzZCLGNBQWQsQ0FBNkIsTUFBN0IsQ0FBakI7SUFFQSxLQUFLRSxhQUFMLEdBQXFCLEtBQXJCO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLENBQWI7SUFDQSxLQUFLdkMsVUFBTCxHQUFrQixDQUFsQjtJQUVBLEtBQUtsQixZQUFMLENBQWtCcUIsSUFBbEIsQ0FBdUJxQyxFQUF2QixDQUEwQmpFLEVBQUUsQ0FBQ2tFLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBNUMsRUFBeUQsVUFBU0MsQ0FBVCxFQUFZO01BQ2pFLEtBQUtDLFlBQUw7SUFDSCxDQUZ3RCxDQUV2RGYsSUFGdUQsQ0FFbEQsSUFGa0QsQ0FBekQsRUFFYyxJQUZkO0lBSUEsS0FBS2hELFlBQUwsQ0FBa0JxQixJQUFsQixDQUF1QnFDLEVBQXZCLENBQTBCakUsRUFBRSxDQUFDa0UsSUFBSCxDQUFRQyxTQUFSLENBQWtCSSxTQUE1QyxFQUF1RCxVQUFTRixDQUFULEVBQVk7TUFDL0QsS0FBS0csVUFBTDtJQUNILENBRnNELENBRXJEakIsSUFGcUQsQ0FFaEQsSUFGZ0QsQ0FBdkQsRUFFYyxJQUZkO0lBSUEsS0FBS2hELFlBQUwsQ0FBa0JxQixJQUFsQixDQUF1QnFDLEVBQXZCLENBQTBCakUsRUFBRSxDQUFDa0UsSUFBSCxDQUFRQyxTQUFSLENBQWtCTSxZQUE1QyxFQUEwRCxVQUFTSixDQUFULEVBQVk7TUFDbEUsS0FBS0csVUFBTDtJQUNILENBRnlELENBRXhEakIsSUFGd0QsQ0FFbkQsSUFGbUQsQ0FBMUQsRUFFYyxJQUZkO0VBR0gsQ0FqSkk7RUFtSkxlLFlBQVksRUFBRSx3QkFBVztJQUNyQixJQUFJLEtBQUsvRCxZQUFMLENBQWtCbUUsU0FBbEIsSUFBK0IsS0FBS3ZELE9BQXhDLEVBQWlEO01BQzdDO0lBQ0g7O0lBRUQsS0FBSzRDLGFBQUwsR0FBcUIsSUFBckI7SUFDQSxLQUFLdEMsVUFBTCxHQUFrQixDQUFsQjtJQUNBLEtBQUt1QyxLQUFMLEdBQWEsS0FBSzVELFVBQWxCO0lBRUEsS0FBSzBELFNBQUwsQ0FBZWEsY0FBZjtJQUNBLEtBQUtiLFNBQUwsQ0FBZTdCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUM0RSxPQUFILENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsR0FBakIsQ0FBekI7SUFFQSxLQUFLOUQsYUFBTCxDQUFtQlUsT0FBbkIsR0FBNkIsSUFBN0I7SUFDQSxLQUFLVixhQUFMLENBQW1CK0QsV0FBbkI7SUFDQSxLQUFLQyxjQUFMO0VBQ0gsQ0FsS0k7RUFvS0xOLFVBQVUsRUFBRSxzQkFBVztJQUNuQixJQUFJLEtBQUtULGFBQVQsRUFBd0I7TUFDcEIsS0FBS0EsYUFBTCxHQUFxQixLQUFyQjtNQUNBLEtBQUtELFNBQUwsQ0FBZWEsY0FBZjtNQUNBLEtBQUtiLFNBQUwsQ0FBZTdCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUM0RSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUF6QjtNQUVBLEtBQUtyRCxXQUFMO01BRUEsS0FBS1QsYUFBTCxDQUFtQlUsT0FBbkIsR0FBNkIsS0FBN0I7TUFDQSxLQUFLdUQsY0FBTDtJQUNIO0VBQ0osQ0EvS0k7RUFpTExELGNBQWMsRUFBRSwwQkFBVztJQUN2QixLQUFLRSxnQkFBTCxHQUF3QmhGLEVBQUUsQ0FBQ2tELFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLMUMsa0JBQS9CLEVBQW1ELEtBQW5ELENBQXhCO0lBQ0EsSUFBSXdFLGtCQUFrQixHQUFHakYsRUFBRSxDQUFDa0QsV0FBSCxDQUFlZ0MsV0FBZixDQUEyQixLQUFLRixnQkFBaEMsQ0FBekI7SUFFQSxLQUFLRywyQkFBTCxHQUFtQyxLQUFuQzs7SUFDQSxLQUFLQyx3QkFBTCxHQUFnQyxZQUFXO01BQ3ZDLEtBQUtELDJCQUFMLEdBQW1DLElBQW5DO01BQ0EsS0FBS0Usa0JBQUwsR0FBMEJyRixFQUFFLENBQUNrRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3hDLG9CQUEvQixFQUFxRCxJQUFyRCxDQUExQjtJQUNILENBSEQsQ0FMdUIsQ0FVdkI7OztJQUNBLEtBQUsyRSxZQUFMLENBQWtCLEtBQUtGLHdCQUF2QixFQUFpREgsa0JBQWpEO0VBQ0gsQ0E3TEk7RUErTExGLGNBQWMsRUFBRSwwQkFBVztJQUN2QixJQUFJLEtBQUtJLDJCQUFULEVBQXNDO01BQ2xDbkYsRUFBRSxDQUFDa0QsV0FBSCxDQUFlcUMsVUFBZixDQUEwQixLQUFLRixrQkFBL0I7SUFDSCxDQUZELE1BRU87TUFDSHJGLEVBQUUsQ0FBQ2tELFdBQUgsQ0FBZXFDLFVBQWYsQ0FBMEIsS0FBS1AsZ0JBQS9CO01BQ0EsS0FBS1EsVUFBTCxDQUFnQixLQUFLSix3QkFBckI7SUFDSDtFQUNKLENBdE1JO0VBd01MSyxNQXhNSyxrQkF3TUdDLEVBeE1ILEVBd01PO0lBQ1IsSUFBSSxLQUFLM0IsYUFBVCxFQUF3QjtNQUNwQixLQUFLQyxLQUFMLElBQWUsS0FBSzNELE9BQUwsR0FBZXFGLEVBQTlCO01BQ0EsS0FBS2pFLFVBQUwsSUFBbUIsS0FBS3VDLEtBQUwsR0FBYTBCLEVBQWhDO0lBQ0g7RUFDSjtBQTdNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly93d3cuY29jb3MuY29tL2RvY3MvY3JlYXRvci9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvZWRpdG9yc19hbmRfdG9vbHMvY3JlYXRvci1jaGFwdGVycy9zY3JpcHRpbmcvY2xhc3MvaW5kZXguaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzL2luZGV4Lmh0bWxcclxudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKFwiZ2FtZV9zY2VuZVwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBpbml0X3NwZWVkOiAxNTAsXHJcbiAgICAgICAgYV9wb3dlcjogNjAwLFxyXG4gICAgICAgIHlfcmFkaW86IDAuNTU2MDQ3MixcclxuXHJcbiAgICAgICAgZ2FtZV9tYW5hZ2VyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGdhbWVfc2NlbmUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wUHJlc3NPbmNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhdWRpb0p1bXBQcmVzc1JlcGVhdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wU3VjY2Vzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXVkaW9KdW1wRmFpbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcHJlc3NQYXJ0aWNsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QYXJ0aWNsZVN5c3RlbSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxOyAvLyAx77yMLTFcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsgPSB0aGlzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5ZXJfanVtcCgpIHtcclxuICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgeF9kaXN0YW5jZSA9IHRoaXMueF9kaXN0YW5jZSAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgIHZhciB5X2Rpc3RhbmNlID0gdGhpcy54X2Rpc3RhbmNlICogdGhpcy55X3JhZGlvO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0X3BvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRhcmdldF9wb3MueCArPSB4X2Rpc3RhbmNlO1xyXG4gICAgICAgIHRhcmdldF9wb3MueSArPSB5X2Rpc3RhbmNlO1xyXG5cclxuICAgICAgICB0aGlzLnJvdF9ub2RlLnJ1bkFjdGlvbihjYy5yb3RhdGVCeSgwLjUsIDM2MCAqIHRoaXMuZGlyZWN0aW9uKSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3X3BvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldF9wb3MpO1xyXG4gICAgICAgIHZhciBpc19nYW1lX292ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGp1bXBTY29yZSA9IHRoaXMubmV4dF9ibG9jay5pc19qdW1wX29uX2Jsb2NrKHdfcG9zLCB0aGlzLmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChqdW1wU2NvcmUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldF9wb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKTsgLy8gdGFyZ2V0X3Bvc+WwseWPmOaIkOS6huWPguiAg+eCueeahOS9jee9rjtcclxuICAgICAgICAgICAgeV9kaXN0YW5jZSA9IHRhcmdldF9wb3Muc3ViKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKS55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzX2dhbWVfb3ZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaiA9IGNjLmp1bXBUbygwLjUsIHRhcmdldF9wb3MsIDIwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAoTWF0aC5yYW5kb20oKSA8IDAuNSkgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgIHZhciBlbmRfZnVuYyA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzX2dhbWVfb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lX21hbmFnZXIub25fY2hlY2tvdXRfZ2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcEZhaWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm1vdmVfbWFwKDU4MCAtIHdfcG9zLngsIC15X2Rpc3RhbmNlKTsgICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm1vdmVfbWFwKDE4MCAtIHdfcG9zLngsIC15X2Rpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyUG9zV29ybGQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVfbWFuYWdlci5nYWluU2NvcmUocGxheWVyUG9zV29ybGQsIGp1bXBTY29yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcFN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKGosIGVuZF9mdW5jKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRfbmV4dF9ibG9jayhibG9jaykge1xyXG4gICAgICAgIHRoaXMubmV4dF9ibG9jayA9IGJsb2NrO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucm90X25vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5hbmltX25vZGUgPSB0aGlzLnJvdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy54X2Rpc3RhbmNlID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lX21hbmFnZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZV9tYW5hZ2VyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZCgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZV9tYW5hZ2VyLm1hcE1vdmluZyB8fCB0aGlzLmp1bXBpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnhfZGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmluaXRfc3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbV9ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5hbmltX25vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMiwgMSwgMC41KSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJlc3NQYXJ0aWNsZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXNzUGFydGljbGUucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLnBsYXlUb3VjaFNvdW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3Bvd2VyX21vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19wb3dlcl9tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbV9ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbV9ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuNSwgMSwgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfanVtcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzc1BhcnRpY2xlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVG91Y2hTb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGxheVRvdWNoU291bmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9JRFByZXNzT25jZSA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb0p1bXBQcmVzc09uY2UsIGZhbHNlKTtcclxuICAgICAgICB2YXIgYXVkaW9UaW1lUHJlc3NPbmNlID0gY2MuYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24odGhpcy5hdWRpb0lEUHJlc3NPbmNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF1ZGlvUHJlc3NSZXBlYXRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUHJlc3NSZXBlYXRBbHJlYWR5UGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9JRFByZXNzUmVwZWF0ID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvSnVtcFByZXNzUmVwZWF0LCB0cnVlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5aSn6Z+z5pWI5pKt5pS+5a6M5LmL5ZCO77yM5byA5aeL6YeN5aSN5pKt5pS+5bCP6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2ssIGF1ZGlvVGltZVByZXNzT25jZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BUb3VjaFNvdW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1ByZXNzUmVwZWF0QWxyZWFkeVBsYXkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmF1ZGlvSURQcmVzc1JlcGVhdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmF1ZGlvSURQcmVzc09uY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hdWRpb1ByZXNzUmVwZWF0Q2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3Bvd2VyX21vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAodGhpcy5hX3Bvd2VyICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnhfZGlzdGFuY2UgKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=