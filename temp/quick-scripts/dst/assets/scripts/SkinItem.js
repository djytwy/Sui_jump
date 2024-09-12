
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
    // let invitedCount = SkinMgr.instance.getInvitedCount()
    // if (invitedCount >= this.unlockCount) {
    //     this.unlocked = true;
    //     this.labelInviteCount.node.active = false;
    // } else {
    //     this.unlocked = false;
    //     this.labelInviteCount.node.active = true;
    //     this.labelInviteCount.string = invitedCount + "/" + this.unlockCount;
    // }
    // return this.unlocked;
    var uploadCount = window.localStorage.getItem("uploadNum") ? parseInt(window.localStorage.getItem("uploadNum")) : 0;

    if (uploadCount >= this.unlockCount) {
      this.unlocked = true;
      this.labelInviteCount.node.active = false;
    } else {
      this.unlocked = false;
      this.labelInviteCount.node.active = true;
      this.labelInviteCount.string = uploadCount + "/" + this.unlockCount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NraW5JdGVtLmpzIl0sIm5hbWVzIjpbInNjcmVlblNraW5TaG9wIiwicmVxdWlyZSIsIlNraW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNraW4iLCJ0eXBlIiwiU3ByaXRlIiwic3ByaXRlQ2hvb3NlIiwic3ByaXRlRnJhbWVDaG9vc2UiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lVW5jaG9vc2UiLCJsYWJlbEludml0ZUNvdW50IiwiTGFiZWwiLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbkJ0bkNsaWNrIiwidW5sb2NrQ291bnQiLCJ1bmxvY2tlZCIsInN0YXJ0IiwiaW5pdCIsInNraW5TcHJpdGVGcmFtZSIsImNob29zZWQiLCJzcHJpdGVGcmFtZSIsIm9uQ2hvb3NlIiwiaW5zdGFuY2UiLCJvbkJ0bkNsaWNrSW52aXRlIiwiZ2V0U2libGluZ0luZGV4Iiwib25VbmNob29zZSIsInVwZGF0ZUxvY2tTdGF0ZSIsInVwbG9hZENvdW50Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwiYWN0aXZlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTVCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUU7TUFDRixXQUFTLElBRFA7TUFFRkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRlAsQ0FERTtJQU1SQyxZQUFZLEVBQUU7TUFDVixXQUFTLElBREM7TUFFVkYsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkMsQ0FOTjtJQVdSRSxpQkFBaUIsRUFBRTtNQUNmLFdBQVMsSUFETTtNQUVmSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1M7SUFGTSxDQVhYO0lBZ0JSQyxtQkFBbUIsRUFBRTtNQUNqQixXQUFTLElBRFE7TUFFakJMLElBQUksRUFBRUwsRUFBRSxDQUFDUztJQUZRLENBaEJiO0lBcUJSRSxnQkFBZ0IsRUFBRTtNQUNkLFdBQVMsSUFESztNQUVkTixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7SUFGSztFQXJCVixDQUhQO0VBOEJMO0VBRUFDLE1BaENLLG9CQWdDSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsS0FBS0MsVUFBM0IsRUFBdUMsSUFBdkM7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQW5CO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixJQUFoQjtFQUNILENBcENJO0VBc0NMQyxLQXRDSyxtQkFzQ0csQ0FFUCxDQXhDSTtFQTBDTDtFQUNBQyxJQUFJLEVBQUUsY0FBVUMsZUFBVixFQUEyQkMsT0FBM0IsRUFBb0NMLFdBQXBDLEVBQWlEO0lBQ25ELEtBQUtiLElBQUwsQ0FBVW1CLFdBQVYsR0FBd0JGLGVBQXhCO0lBQ0EsS0FBS2QsWUFBTCxDQUFrQmdCLFdBQWxCLEdBQWdDRCxPQUFPLEdBQUcsS0FBS2QsaUJBQVIsR0FBNEIsS0FBS0UsbUJBQXhFO0lBQ0EsS0FBS08sV0FBTCxHQUFtQkEsV0FBbkI7RUFDSCxDQS9DSTtFQWlETEQsVUFBVSxFQUFFLHNCQUFZO0lBQ3BCLElBQUksS0FBS0UsUUFBVCxFQUFtQjtNQUNmLEtBQUtNLFFBQUw7SUFDSCxDQUZELE1BRU87TUFDSDNCLGNBQWMsQ0FBQzRCLFFBQWYsQ0FBd0JDLGdCQUF4QjtJQUNIO0VBQ0osQ0F2REk7RUF5RExGLFFBQVEsRUFBRSxvQkFBWTtJQUNsQixLQUFLakIsWUFBTCxDQUFrQmdCLFdBQWxCLEdBQWdDLEtBQUtmLGlCQUFyQztJQUNBWCxjQUFjLENBQUM0QixRQUFmLENBQXdCRCxRQUF4QixDQUFpQyxLQUFLVixJQUFMLENBQVVhLGVBQVYsRUFBakM7RUFDSCxDQTVESTtFQThETEMsVUFBVSxFQUFFLHNCQUFZO0lBQ3BCLEtBQUtyQixZQUFMLENBQWtCZ0IsV0FBbEIsR0FBZ0MsS0FBS2IsbUJBQXJDO0VBQ0gsQ0FoRUk7RUFrRUxtQixlQWxFSyw2QkFrRWE7SUFDZDtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUVBLElBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixJQUEyQ0MsUUFBUSxDQUFDSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFdBQTVCLENBQUQsQ0FBbkQsR0FBZ0csQ0FBbEg7O0lBRUEsSUFBSUgsV0FBVyxJQUFJLEtBQUtiLFdBQXhCLEVBQXFDO01BQ2pDLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7TUFDQSxLQUFLUCxnQkFBTCxDQUFzQkcsSUFBdEIsQ0FBMkJxQixNQUEzQixHQUFvQyxLQUFwQztJQUNILENBSEQsTUFHTztNQUNILEtBQUtqQixRQUFMLEdBQWdCLEtBQWhCO01BQ0EsS0FBS1AsZ0JBQUwsQ0FBc0JHLElBQXRCLENBQTJCcUIsTUFBM0IsR0FBb0MsSUFBcEM7TUFDQSxLQUFLeEIsZ0JBQUwsQ0FBc0J5QixNQUF0QixHQUErQk4sV0FBVyxHQUFHLEdBQWQsR0FBb0IsS0FBS2IsV0FBeEQ7SUFDSDs7SUFFRCxPQUFPLEtBQUtDLFFBQVo7RUFDSDtBQTVGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgc2NyZWVuU2tpblNob3AgPSByZXF1aXJlKCdTY3JlZW5Ta2luU2hvcCcpO1xudmFyIFNraW5NZ3IgPSByZXF1aXJlKCdTa2luTWdyJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2luOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNwcml0ZUNob29zZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICAgICAgfSxcblxuICAgICAgICBzcHJpdGVGcmFtZUNob29zZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNwcml0ZUZyYW1lVW5jaG9vc2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgfSxcblxuICAgICAgICBsYWJlbEludml0ZUNvdW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bmxvY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudW5sb2NrZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBpbml0OiBmdW5jdGlvbiAoc2tpblNwcml0ZUZyYW1lLCBjaG9vc2VkLCB1bmxvY2tDb3VudCkge1xuICAgICAgICB0aGlzLnNraW4uc3ByaXRlRnJhbWUgPSBza2luU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuc3ByaXRlQ2hvb3NlLnNwcml0ZUZyYW1lID0gY2hvb3NlZCA/IHRoaXMuc3ByaXRlRnJhbWVDaG9vc2UgOiB0aGlzLnNwcml0ZUZyYW1lVW5jaG9vc2U7XG4gICAgICAgIHRoaXMudW5sb2NrQ291bnQgPSB1bmxvY2tDb3VudDtcbiAgICB9LFxuXG4gICAgb25CdG5DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51bmxvY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNob29zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NyZWVuU2tpblNob3AuaW5zdGFuY2Uub25CdG5DbGlja0ludml0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2hvb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlQ2hvb3NlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUNob29zZTtcbiAgICAgICAgc2NyZWVuU2tpblNob3AuaW5zdGFuY2Uub25DaG9vc2UodGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKTtcbiAgICB9LFxuXG4gICAgb25VbmNob29zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNwcml0ZUNob29zZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVVbmNob29zZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlTG9ja1N0YXRlKCkge1xuICAgICAgICAvLyBsZXQgaW52aXRlZENvdW50ID0gU2tpbk1nci5pbnN0YW5jZS5nZXRJbnZpdGVkQ291bnQoKVxuXG4gICAgICAgIC8vIGlmIChpbnZpdGVkQ291bnQgPj0gdGhpcy51bmxvY2tDb3VudCkge1xuICAgICAgICAvLyAgICAgdGhpcy51bmxvY2tlZCA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMudW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIHRoaXMubGFiZWxJbnZpdGVDb3VudC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQuc3RyaW5nID0gaW52aXRlZENvdW50ICsgXCIvXCIgKyB0aGlzLnVubG9ja0NvdW50O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudW5sb2NrZWQ7XG5cbiAgICAgICAgbGV0IHVwbG9hZENvdW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXBsb2FkTnVtXCIpID8gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXBsb2FkTnVtXCIpKSA6IDBcblxuICAgICAgICBpZiAodXBsb2FkQ291bnQgPj0gdGhpcy51bmxvY2tDb3VudCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxJbnZpdGVDb3VudC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsSW52aXRlQ291bnQuc3RyaW5nID0gdXBsb2FkQ291bnQgKyBcIi9cIiArIHRoaXMudW5sb2NrQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy51bmxvY2tlZDtcbiAgICB9LFxufSk7XG4iXX0=