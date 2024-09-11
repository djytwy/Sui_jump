
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NraW5JdGVtLmpzIl0sIm5hbWVzIjpbInNjcmVlblNraW5TaG9wIiwicmVxdWlyZSIsIlNraW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNraW4iLCJ0eXBlIiwiU3ByaXRlIiwic3ByaXRlQ2hvb3NlIiwic3ByaXRlRnJhbWVDaG9vc2UiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lVW5jaG9vc2UiLCJsYWJlbEludml0ZUNvdW50IiwiTGFiZWwiLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbkJ0bkNsaWNrIiwidW5sb2NrQ291bnQiLCJ1bmxvY2tlZCIsInN0YXJ0IiwiaW5pdCIsInNraW5TcHJpdGVGcmFtZSIsImNob29zZWQiLCJzcHJpdGVGcmFtZSIsIm9uQ2hvb3NlIiwiaW5zdGFuY2UiLCJvbkJ0bkNsaWNrSW52aXRlIiwiZ2V0U2libGluZ0luZGV4Iiwib25VbmNob29zZSIsInVwZGF0ZUxvY2tTdGF0ZSIsImludml0ZWRDb3VudCIsImdldEludml0ZWRDb3VudCIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFO01BQ0YsV0FBUyxJQURQO01BRUZDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZQLENBREU7SUFNUkMsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZDLENBTk47SUFXUkUsaUJBQWlCLEVBQUU7TUFDZixXQUFTLElBRE07TUFFZkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTO0lBRk0sQ0FYWDtJQWdCUkMsbUJBQW1CLEVBQUU7TUFDakIsV0FBUyxJQURRO01BRWpCTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1M7SUFGUSxDQWhCYjtJQXFCUkUsZ0JBQWdCLEVBQUU7TUFDZCxXQUFTLElBREs7TUFFZE4sSUFBSSxFQUFFTCxFQUFFLENBQUNZO0lBRks7RUFyQlYsQ0FIUDtFQThCTDtFQUVBQyxNQWhDSyxvQkFnQ0s7SUFDTixLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLEtBQUtDLFVBQTNCLEVBQXVDLElBQXZDO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixDQUFuQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7RUFDSCxDQXBDSTtFQXNDTEMsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0k7RUEwQ0w7RUFDQUMsSUFBSSxFQUFFLGNBQVNDLGVBQVQsRUFBMEJDLE9BQTFCLEVBQW1DTCxXQUFuQyxFQUFnRDtJQUNsRCxLQUFLYixJQUFMLENBQVVtQixXQUFWLEdBQXdCRixlQUF4QjtJQUNBLEtBQUtkLFlBQUwsQ0FBa0JnQixXQUFsQixHQUFnQ0QsT0FBTyxHQUFHLEtBQUtkLGlCQUFSLEdBQTRCLEtBQUtFLG1CQUF4RTtJQUNBLEtBQUtPLFdBQUwsR0FBbUJBLFdBQW5CO0VBQ0gsQ0EvQ0k7RUFpRExELFVBQVUsRUFBRSxzQkFBVztJQUNuQixJQUFJLEtBQUtFLFFBQVQsRUFBbUI7TUFDZixLQUFLTSxRQUFMO0lBQ0gsQ0FGRCxNQUVPO01BQ0gzQixjQUFjLENBQUM0QixRQUFmLENBQXdCQyxnQkFBeEI7SUFDSDtFQUNKLENBdkRJO0VBeURMRixRQUFRLEVBQUUsb0JBQVc7SUFDakIsS0FBS2pCLFlBQUwsQ0FBa0JnQixXQUFsQixHQUFnQyxLQUFLZixpQkFBckM7SUFDQVgsY0FBYyxDQUFDNEIsUUFBZixDQUF3QkQsUUFBeEIsQ0FBaUMsS0FBS1YsSUFBTCxDQUFVYSxlQUFWLEVBQWpDO0VBQ0gsQ0E1REk7RUE4RExDLFVBQVUsRUFBRSxzQkFBVztJQUNuQixLQUFLckIsWUFBTCxDQUFrQmdCLFdBQWxCLEdBQWdDLEtBQUtiLG1CQUFyQztFQUNILENBaEVJO0VBa0VMbUIsZUFsRUssNkJBa0VhO0lBQ2QsSUFBSUMsWUFBWSxHQUFHL0IsT0FBTyxDQUFDMEIsUUFBUixDQUFpQk0sZUFBakIsRUFBbkI7O0lBRUEsSUFBSUQsWUFBWSxJQUFJLEtBQUtiLFdBQXpCLEVBQXNDO01BQ2xDLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7TUFDQSxLQUFLUCxnQkFBTCxDQUFzQkcsSUFBdEIsQ0FBMkJrQixNQUEzQixHQUFvQyxLQUFwQztJQUNILENBSEQsTUFHTztNQUNILEtBQUtkLFFBQUwsR0FBZ0IsS0FBaEI7TUFDQSxLQUFLUCxnQkFBTCxDQUFzQkcsSUFBdEIsQ0FBMkJrQixNQUEzQixHQUFvQyxJQUFwQztNQUNBLEtBQUtyQixnQkFBTCxDQUFzQnNCLE1BQXRCLEdBQStCSCxZQUFZLEdBQUcsR0FBZixHQUFxQixLQUFLYixXQUF6RDtJQUNIOztJQUVELE9BQU8sS0FBS0MsUUFBWjtFQUNIO0FBL0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciBzY3JlZW5Ta2luU2hvcCA9IHJlcXVpcmUoJ1NjcmVlblNraW5TaG9wJyk7XG52YXIgU2tpbk1nciA9IHJlcXVpcmUoJ1NraW5NZ3InKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNraW46IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3ByaXRlQ2hvb3NlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNwcml0ZUZyYW1lQ2hvb3NlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3ByaXRlRnJhbWVVbmNob29zZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICB9LFxuXG4gICAgICAgIGxhYmVsSW52aXRlQ291bnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bmxvY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudW5sb2NrZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgaW5pdDogZnVuY3Rpb24oc2tpblNwcml0ZUZyYW1lLCBjaG9vc2VkLCB1bmxvY2tDb3VudCkge1xuICAgICAgICB0aGlzLnNraW4uc3ByaXRlRnJhbWUgPSBza2luU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuc3ByaXRlQ2hvb3NlLnNwcml0ZUZyYW1lID0gY2hvb3NlZCA/IHRoaXMuc3ByaXRlRnJhbWVDaG9vc2UgOiB0aGlzLnNwcml0ZUZyYW1lVW5jaG9vc2U7XG4gICAgICAgIHRoaXMudW5sb2NrQ291bnQgPSB1bmxvY2tDb3VudDtcbiAgICB9LFxuXG4gICAgb25CdG5DbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnVubG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hvb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JlZW5Ta2luU2hvcC5pbnN0YW5jZS5vbkJ0bkNsaWNrSW52aXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25DaG9vc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNwcml0ZUNob29zZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVDaG9vc2U7XG4gICAgICAgIHNjcmVlblNraW5TaG9wLmluc3RhbmNlLm9uQ2hvb3NlKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgfSxcblxuICAgIG9uVW5jaG9vc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNwcml0ZUNob29zZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVVbmNob29zZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlTG9ja1N0YXRlKCkge1xuICAgICAgICBsZXQgaW52aXRlZENvdW50ID0gU2tpbk1nci5pbnN0YW5jZS5nZXRJbnZpdGVkQ291bnQoKVxuXG4gICAgICAgIGlmIChpbnZpdGVkQ291bnQgPj0gdGhpcy51bmxvY2tDb3VudCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxJbnZpdGVDb3VudC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQuc3RyaW5nID0gaW52aXRlZENvdW50ICsgXCIvXCIgKyB0aGlzLnVubG9ja0NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudW5sb2NrZWQ7XG4gICAgfSxcbn0pO1xuIl19