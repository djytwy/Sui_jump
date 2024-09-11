
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbk1nci5qcyJdLCJuYW1lcyI6WyJTY3JlZW5NZ3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcmVlbnMiLCJ0eXBlIiwiTm9kZSIsInN0YXRpY3MiLCJpbnN0YW5jZSIsIm9uTG9hZCIsInNjcmVlbnNNYXAiLCJNYXAiLCJpIiwibGVuZ3RoIiwic2V0IiwibmFtZSIsImNsb3NlU2NyZWVuIiwic2NyZWVuTmFtZSIsImhhcyIsImdldCIsImFjdGl2ZSIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBRFM7RUFHckJDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUU7TUFDTCxXQUFTLEVBREo7TUFFTEMsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtJQUZEO0VBREQsQ0FIUztFQVVyQkMsT0FBTyxFQUFFO0lBQ0xDLFFBQVEsRUFBRTtFQURMLENBVlk7RUFjckI7RUFFQUMsTUFoQnFCLG9CQWdCWjtJQUNMVixTQUFTLENBQUNTLFFBQVYsR0FBcUIsSUFBckI7SUFDQSxLQUFLRSxVQUFMLEdBQWtCLElBQUlDLEdBQUosRUFBbEI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtSLE9BQUwsQ0FBYVMsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7TUFDMUMsS0FBS0YsVUFBTCxDQUFnQkksR0FBaEIsQ0FBb0IsS0FBS1YsT0FBTCxDQUFhUSxDQUFiLEVBQWdCRyxJQUFwQyxFQUEwQyxLQUFLWCxPQUFMLENBQWFRLENBQWIsQ0FBMUM7SUFDSDtFQUNKLENBdEJvQjtFQXdCckJJLFdBeEJxQix1QkF3QlRDLFVBeEJTLEVBd0JHO0lBQ3BCLElBQUksS0FBS1AsVUFBTCxDQUFnQlEsR0FBaEIsQ0FBb0JELFVBQXBCLENBQUosRUFBcUM7TUFDakMsS0FBS1AsVUFBTCxDQUFnQlMsR0FBaEIsQ0FBb0JGLFVBQXBCLEVBQWdDRyxNQUFoQyxHQUF5QyxLQUF6QztJQUNIO0VBQ0osQ0E1Qm9CO0VBOEJyQkMsVUE5QnFCLHNCQThCVkosVUE5QlUsRUE4QkU7SUFDbkIsSUFBSSxLQUFLUCxVQUFMLENBQWdCUSxHQUFoQixDQUFvQkQsVUFBcEIsQ0FBSixFQUFxQztNQUNqQyxLQUFLUCxVQUFMLENBQWdCUyxHQUFoQixDQUFvQkYsVUFBcEIsRUFBZ0NHLE1BQWhDLEdBQXlDLElBQXpDO0lBQ0g7RUFDSjtBQWxDb0IsQ0FBVCxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIFNjcmVlbk1nciA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjcmVlbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5zY3JlZW5zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NyZWVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zTWFwLnNldCh0aGlzLnNjcmVlbnNbaV0ubmFtZSwgdGhpcy5zY3JlZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9zZVNjcmVlbihzY3JlZW5OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcmVlbnNNYXAuaGFzKHNjcmVlbk5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNNYXAuZ2V0KHNjcmVlbk5hbWUpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dTY3JlZW4oc2NyZWVuTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5zY3JlZW5zTWFwLmhhcyhzY3JlZW5OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zTWFwLmdldChzY3JlZW5OYW1lKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=