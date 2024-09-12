
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenSkinShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57bffBFUrhN1raxXs38dm03', 'ScreenSkinShop');
// scripts/ScreenSkinShop.js

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
var SkinMgr = require('SkinMgr');

var game_scene = require('game_scene');

var ScreenMgr = require('ScreenMgr');

var UtilsFB = require('UtilsFB');

var UtilsCommon = require('UtilsCommon');

var ScreenSkinShop = cc.Class({
  "extends": cc.Component,
  properties: {
    skinItemPrefab: {
      "default": null,
      type: cc.Prefab
    },
    content: {
      "default": null,
      type: cc.Node
    },
    processBar: {
      "default": null,
      type: cc.Node
    },
    processTitle: {
      "default": null,
      type: cc.Label
    }
  },
  statics: {
    instance: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    ScreenSkinShop.instance = this;
    this.skinItemPool = new cc.NodePool('SkinItem');
  },
  start: function start() {
    var unlockCountArray = [0, 1, 5, 10];

    for (var i = 0; i < SkinMgr.instance.getSkinSpriteFrameCount(); i++) {
      var skinSpriteFrame = SkinMgr.instance.getSkinSpriteFrame(i);
      var skinItem = this.spawnSkinItem();
      skinItem.node.setParent(this.content);
      var choosed = i == game_scene.instance.currentSkinIndex;
      var unlockCount = 0;

      if (i < unlockCountArray.length) {
        unlockCount = unlockCountArray[i];
      } else {
        unlockCount = unlockCountArray[unlockCountArray.length - 1] + (i - unlockCountArray.length + 1) * 10;
      }

      skinItem.init(skinSpriteFrame, choosed, unlockCount); // skinItem.init(skinSpriteFrame, choosed, 0);
    }

    this.updateLockState();
  },
  onEnable: function onEnable() {
    this.updateLockState();
  },
  onChoose: function onChoose(index) {
    game_scene.instance.onSkinChange(index);

    for (var i = 0; i < this.content.childrenCount; i++) {
      var skinItem = this.content.children[i].getComponent('SkinItem');

      if (i != index) {
        skinItem.onUnchoose();
      }
    }
  },
  spawnSkinItem: function spawnSkinItem() {
    var skinItemNode = null;

    if (this.skinItemPool.size() > 0) {
      skinItemNode = this.skinItemPool.get();
    } else {
      skinItemNode = cc.instantiate(this.skinItemPrefab);
    }

    return skinItemNode.getComponent('SkinItem');
  },
  despawnSkinItem: function despawnSkinItem(item) {
    this.skinItemPool.put(item.node);
  },
  onBtnClickHome: function onBtnClickHome() {
    ScreenMgr.instance.showScreen('ScreenHome');
    ScreenMgr.instance.closeScreen('ScreenSkinShop');
  },
  onBtnClickInvite: function onBtnClickInvite() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64, ['NEW_CONTEXT_ONLY']).then(function () {
      SkinMgr.instance.incrementInvitedCount();
      this.updateLockState();
    }.bind(this))["catch"](function (error) {});
  },
  updateLockState: function updateLockState() {
    var unlockCount = 0;
    var totalCount = this.content.childrenCount;

    for (var i = 0; i < this.content.childrenCount; i++) {
      var skinItem = this.content.children[i].getComponent('SkinItem');

      if (skinItem.updateLockState()) {
        unlockCount += 1;
      }
    }

    var processBarWidth = this.processBar.width;
    this.processBar.position = cc.v2(-processBarWidth + processBarWidth * unlockCount / totalCount, 0);
    this.processTitle.string = unlockCount + "/" + totalCount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlblNraW5TaG9wLmpzIl0sIm5hbWVzIjpbIlNraW5NZ3IiLCJyZXF1aXJlIiwiZ2FtZV9zY2VuZSIsIlNjcmVlbk1nciIsIlV0aWxzRkIiLCJVdGlsc0NvbW1vbiIsIlNjcmVlblNraW5TaG9wIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJza2luSXRlbVByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInByb2Nlc3NCYXIiLCJwcm9jZXNzVGl0bGUiLCJMYWJlbCIsInN0YXRpY3MiLCJpbnN0YW5jZSIsIm9uTG9hZCIsInNraW5JdGVtUG9vbCIsIk5vZGVQb29sIiwic3RhcnQiLCJ1bmxvY2tDb3VudEFycmF5IiwiaSIsImdldFNraW5TcHJpdGVGcmFtZUNvdW50Iiwic2tpblNwcml0ZUZyYW1lIiwiZ2V0U2tpblNwcml0ZUZyYW1lIiwic2tpbkl0ZW0iLCJzcGF3blNraW5JdGVtIiwibm9kZSIsInNldFBhcmVudCIsImNob29zZWQiLCJjdXJyZW50U2tpbkluZGV4IiwidW5sb2NrQ291bnQiLCJsZW5ndGgiLCJpbml0IiwidXBkYXRlTG9ja1N0YXRlIiwib25FbmFibGUiLCJvbkNob29zZSIsImluZGV4Iiwib25Ta2luQ2hhbmdlIiwiY2hpbGRyZW5Db3VudCIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50Iiwib25VbmNob29zZSIsInNraW5JdGVtTm9kZSIsInNpemUiLCJnZXQiLCJpbnN0YW50aWF0ZSIsImRlc3Bhd25Ta2luSXRlbSIsIml0ZW0iLCJwdXQiLCJvbkJ0bkNsaWNrSG9tZSIsInNob3dTY3JlZW4iLCJjbG9zZVNjcmVlbiIsIm9uQnRuQ2xpY2tJbnZpdGUiLCJpbWFnZUJhc2U2NCIsImdldFNjcmVlbnNob3RCYXNlNjQiLCJnZXRDYW1lcmFNYWluIiwiY2hvb3NlQXN5bmMiLCJ0aGVuIiwiaW5jcmVtZW50SW52aXRlZENvdW50IiwiYmluZCIsImVycm9yIiwidG90YWxDb3VudCIsInByb2Nlc3NCYXJXaWR0aCIsIndpZHRoIiwicG9zaXRpb24iLCJ2MiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRyxPQUFPLEdBQUdILE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUssY0FBYyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUMxQixXQUFTRCxFQUFFLENBQUNFLFNBRGM7RUFHMUJDLFVBQVUsRUFBRTtJQUNSQyxjQUFjLEVBQUU7TUFDWixXQUFTLElBREc7TUFFWkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkcsQ0FEUjtJQU1SQyxPQUFPLEVBQUU7TUFDTCxXQUFTLElBREo7TUFFTEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkosQ0FORDtJQVdSQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkosSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkQsQ0FYSjtJQWdCUkUsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZMLElBQUksRUFBRUwsRUFBRSxDQUFDVztJQUZDO0VBaEJOLENBSGM7RUF5QjFCQyxPQUFPLEVBQUU7SUFDTEMsUUFBUSxFQUFFO0VBREwsQ0F6QmlCO0VBNkIxQjtFQUVBQyxNQS9CMEIsb0JBK0JqQjtJQUNMZixjQUFjLENBQUNjLFFBQWYsR0FBMEIsSUFBMUI7SUFDQSxLQUFLRSxZQUFMLEdBQW9CLElBQUlmLEVBQUUsQ0FBQ2dCLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FB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QWxIeUIsQ0FBVCxDQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKCdnYW1lX3NjZW5lJyk7XG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG52YXIgU2NyZWVuU2tpblNob3AgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2luSXRlbVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgfSxcblxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9jZXNzQmFyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9jZXNzVGl0bGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNjcmVlblNraW5TaG9wLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5za2luSXRlbVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ1NraW5JdGVtJyk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgdW5sb2NrQ291bnRBcnJheSA9IFswLCAxLCA1LCAxMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2tpbk1nci5pbnN0YW5jZS5nZXRTa2luU3ByaXRlRnJhbWVDb3VudCgpOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBza2luU3ByaXRlRnJhbWUgPSBTa2luTWdyLmluc3RhbmNlLmdldFNraW5TcHJpdGVGcmFtZShpKTtcbiAgICAgICAgICAgIGxldCBza2luSXRlbSA9IHRoaXMuc3Bhd25Ta2luSXRlbSgpO1xuICAgICAgICAgICAgc2tpbkl0ZW0ubm9kZS5zZXRQYXJlbnQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBjaG9vc2VkID0gaSA9PSBnYW1lX3NjZW5lLmluc3RhbmNlLmN1cnJlbnRTa2luSW5kZXg7XG5cbiAgICAgICAgICAgIGxldCB1bmxvY2tDb3VudCA9IDA7XG4gICAgICAgICAgICBpZiAoaSA8IHVubG9ja0NvdW50QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdW5sb2NrQ291bnQgPSB1bmxvY2tDb3VudEFycmF5W2ldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmxvY2tDb3VudCA9IHVubG9ja0NvdW50QXJyYXlbdW5sb2NrQ291bnRBcnJheS5sZW5ndGggLSAxXSArIChpIC0gdW5sb2NrQ291bnRBcnJheS5sZW5ndGggKyAxKSAqIDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2tpbkl0ZW0uaW5pdChza2luU3ByaXRlRnJhbWUsIGNob29zZWQsIHVubG9ja0NvdW50KTtcbiAgICAgICAgICAgIC8vIHNraW5JdGVtLmluaXQoc2tpblNwcml0ZUZyYW1lLCBjaG9vc2VkLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUxvY2tTdGF0ZSgpO1xuICAgIH0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NrU3RhdGUoKTtcbiAgICB9LFxuXG4gICAgb25DaG9vc2U6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uU2tpbkNoYW5nZShpbmRleCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2tpbkl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KCdTa2luSXRlbScpO1xuICAgICAgICAgICAgaWYgKGkgIT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBza2luSXRlbS5vblVuY2hvb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3Bhd25Ta2luSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2tpbkl0ZW1Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuc2tpbkl0ZW1Qb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIHNraW5JdGVtTm9kZSA9IHRoaXMuc2tpbkl0ZW1Qb29sLmdldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2tpbkl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5za2luSXRlbVByZWZhYik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2tpbkl0ZW1Ob2RlLmdldENvbXBvbmVudCgnU2tpbkl0ZW0nKTtcbiAgICB9LFxuXG4gICAgZGVzcGF3blNraW5JdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNraW5JdGVtUG9vbC5wdXQoaXRlbS5ub2RlKTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0hvbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkhvbWUnKTtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLmNsb3NlU2NyZWVuKCdTY3JlZW5Ta2luU2hvcCcpO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrSW52aXRlKCkge1xuICAgICAgICB2YXIgaW1hZ2VCYXNlNjQgPSBVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSk7XG4gICAgICAgIFV0aWxzRkIuY2hvb3NlQXN5bmMoaW1hZ2VCYXNlNjQsIFsnTkVXX0NPTlRFWFRfT05MWSddKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFNraW5NZ3IuaW5zdGFuY2UuaW5jcmVtZW50SW52aXRlZENvdW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NrU3RhdGUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IH0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVMb2NrU3RhdGUoKSB7XG4gICAgICAgIGxldCB1bmxvY2tDb3VudCA9IDA7XG4gICAgICAgIGxldCB0b3RhbENvdW50ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNraW5JdGVtID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudCgnU2tpbkl0ZW0nKTtcbiAgICAgICAgICAgIGlmIChza2luSXRlbS51cGRhdGVMb2NrU3RhdGUoKSkge1xuICAgICAgICAgICAgICAgIHVubG9ja0NvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvY2Vzc0JhcldpZHRoID0gdGhpcy5wcm9jZXNzQmFyLndpZHRoO1xuICAgICAgICB0aGlzLnByb2Nlc3NCYXIucG9zaXRpb24gPSBjYy52MigtcHJvY2Vzc0JhcldpZHRoICsgcHJvY2Vzc0JhcldpZHRoICogdW5sb2NrQ291bnQgLyB0b3RhbENvdW50LCAwKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVGl0bGUuc3RyaW5nID0gdW5sb2NrQ291bnQgKyBcIi9cIiArIHRvdGFsQ291bnQ7XG4gICAgfSxcbn0pO1xuIl19