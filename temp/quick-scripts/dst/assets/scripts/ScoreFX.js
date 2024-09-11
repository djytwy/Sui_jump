
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '951b4qYbopG47UgLcRT9b/Y', 'ScoreFX');
// scripts/ScoreFX.js

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
    animation: {
      "default": null,
      type: cc.Animation
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.animation.on('finished', this.onPlayFinished, this);
  },
  init: function init(mgr) {
    this.mgr = mgr;
  },
  play: function play() {
    this.animation.play('score_pop');
  },
  setScore: function setScore(score) {
    this.scoreLabel.string = "+" + score;
  },
  onPlayFinished: function onPlayFinished(type, state) {
    this.mgr.despawnScoreFX(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlRlguanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmltYXRpb24iLCJ0eXBlIiwiQW5pbWF0aW9uIiwic2NvcmVMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwib24iLCJvblBsYXlGaW5pc2hlZCIsImluaXQiLCJtZ3IiLCJwbGF5Iiwic2V0U2NvcmUiLCJzY29yZSIsInN0cmluZyIsInN0YXRlIiwiZGVzcGF3blNjb3JlRlgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkYsQ0FESDtJQU1SQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkQ7RUFOSixDQUhQO0VBZUxDLE1BQU0sRUFBRSxrQkFBVztJQUNmLEtBQUtMLFNBQUwsQ0FBZU0sRUFBZixDQUFrQixVQUFsQixFQUE4QixLQUFLQyxjQUFuQyxFQUFtRCxJQUFuRDtFQUNILENBakJJO0VBbUJMQyxJQUFJLEVBQUUsY0FBU0MsR0FBVCxFQUFjO0lBQ2hCLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtFQUNILENBckJJO0VBdUJMQyxJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLVixTQUFMLENBQWVVLElBQWYsQ0FBb0IsV0FBcEI7RUFDSCxDQXpCSTtFQTJCTEMsUUFBUSxFQUFFLGtCQUFTQyxLQUFULEVBQWdCO0lBQ3RCLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCLE1BQU1ELEtBQS9CO0VBQ0gsQ0E3Qkk7RUErQkxMLGNBQWMsRUFBRSx3QkFBU04sSUFBVCxFQUFlYSxLQUFmLEVBQXNCO0lBQ2xDLEtBQUtMLEdBQUwsQ0FBU00sY0FBVCxDQUF3QixJQUF4QjtFQUNIO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvbixcbiAgICAgICAgfSxcblxuICAgICAgICBzY29yZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLm9uKCdmaW5pc2hlZCcsIHRoaXMub25QbGF5RmluaXNoZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbihtZ3IpIHtcbiAgICAgICAgdGhpcy5tZ3IgPSBtZ3I7XG4gICAgfSxcblxuICAgIHBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCdzY29yZV9wb3AnKTtcbiAgICB9LFxuXG4gICAgc2V0U2NvcmU6IGZ1bmN0aW9uKHNjb3JlKSB7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIitcIiArIHNjb3JlO1xuICAgIH0sXG5cbiAgICBvblBsYXlGaW5pc2hlZDogZnVuY3Rpb24odHlwZSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5tZ3IuZGVzcGF3blNjb3JlRlgodGhpcyk7XG4gICAgfSxcbn0pO1xuIl19