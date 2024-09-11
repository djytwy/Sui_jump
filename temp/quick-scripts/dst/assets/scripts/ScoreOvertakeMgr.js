
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreOvertakeMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b3baEshgdFrptv+x52jE9P', 'ScoreOvertakeMgr');
// scripts/ScoreOvertakeMgr.js

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
    scoreOvertakePrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  onLoad: function onLoad() {
    this.scoreOvertakePool = new cc.NodePool("scoreOvertake");
  },
  play: function play(posWorld, playerArray) {
    if (playerArray.length > 0) {
      var scoreOvertake = this.spawn();
      var posLocal = this.node.convertToNodeSpaceAR(posWorld);
      scoreOvertake.node.position = posLocal;
      scoreOvertake.setPlayerInfo(playerArray[0]);
      scoreOvertake.play();
    }
  },
  spawn: function spawn() {
    var scoreOvertakeNode = null;

    if (this.scoreOvertakePool.size() > 0) {
      scoreOvertakeNode = this.scoreOvertakePool.get();
    } else {
      scoreOvertakeNode = cc.instantiate(this.scoreOvertakePrefab);
    }

    this.node.addChild(scoreOvertakeNode);
    var scoreOvertake = scoreOvertakeNode.getComponent('ScoreOvertake');
    scoreOvertake.init(this);
    return scoreOvertake;
  },
  despawn: function despawn(scoreOvertake) {
    this.scoreOvertakePool.put(scoreOvertake.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlT3ZlcnRha2VNZ3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZU92ZXJ0YWtlUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm9uTG9hZCIsInNjb3JlT3ZlcnRha2VQb29sIiwiTm9kZVBvb2wiLCJwbGF5IiwicG9zV29ybGQiLCJwbGF5ZXJBcnJheSIsImxlbmd0aCIsInNjb3JlT3ZlcnRha2UiLCJzcGF3biIsInBvc0xvY2FsIiwibm9kZSIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zaXRpb24iLCJzZXRQbGF5ZXJJbmZvIiwic2NvcmVPdmVydGFrZU5vZGUiLCJzaXplIiwiZ2V0IiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXQiLCJkZXNwYXduIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsbUJBQW1CLEVBQUU7TUFDakIsV0FBUyxJQURRO01BRWpCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGUTtFQWhCYixDQUhQO0VBeUJMQyxNQXpCSyxvQkF5Qks7SUFDTixLQUFLQyxpQkFBTCxHQUF5QixJQUFJUixFQUFFLENBQUNTLFFBQVAsQ0FBZ0IsZUFBaEIsQ0FBekI7RUFDSCxDQTNCSTtFQTZCTEMsSUFBSSxFQUFFLGNBQVNDLFFBQVQsRUFBbUJDLFdBQW5CLEVBQWdDO0lBQ2xDLElBQUlBLFdBQVcsQ0FBQ0MsTUFBWixHQUFxQixDQUF6QixFQUE0QjtNQUN4QixJQUFJQyxhQUFhLEdBQUcsS0FBS0MsS0FBTCxFQUFwQjtNQUNBLElBQUlDLFFBQVEsR0FBRyxLQUFLQyxJQUFMLENBQVVDLG9CQUFWLENBQStCUCxRQUEvQixDQUFmO01BQ0FHLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQkUsUUFBbkIsR0FBOEJILFFBQTlCO01BQ0FGLGFBQWEsQ0FBQ00sYUFBZCxDQUE0QlIsV0FBVyxDQUFDLENBQUQsQ0FBdkM7TUFDQUUsYUFBYSxDQUFDSixJQUFkO0lBQ0g7RUFDSixDQXJDSTtFQXVDTEssS0FBSyxFQUFFLGlCQUFXO0lBQ2QsSUFBSU0saUJBQWlCLEdBQUcsSUFBeEI7O0lBQ0EsSUFBSSxLQUFLYixpQkFBTCxDQUF1QmMsSUFBdkIsS0FBZ0MsQ0FBcEMsRUFBdUM7TUFDbkNELGlCQUFpQixHQUFHLEtBQUtiLGlCQUFMLENBQXVCZSxHQUF2QixFQUFwQjtJQUNILENBRkQsTUFFTztNQUNIRixpQkFBaUIsR0FBR3JCLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLcEIsbUJBQXBCLENBQXBCO0lBQ0g7O0lBRUQsS0FBS2EsSUFBTCxDQUFVUSxRQUFWLENBQW1CSixpQkFBbkI7SUFDQSxJQUFJUCxhQUFhLEdBQUdPLGlCQUFpQixDQUFDSyxZQUFsQixDQUErQixlQUEvQixDQUFwQjtJQUNBWixhQUFhLENBQUNhLElBQWQsQ0FBbUIsSUFBbkI7SUFFQSxPQUFPYixhQUFQO0VBQ0gsQ0FwREk7RUFzRExjLE9BQU8sRUFBRSxpQkFBU2QsYUFBVCxFQUF3QjtJQUM3QixLQUFLTixpQkFBTCxDQUF1QnFCLEdBQXZCLENBQTJCZixhQUFhLENBQUNHLElBQXpDO0VBQ0g7QUF4REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2NvcmVPdmVydGFrZVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY29yZU92ZXJ0YWtlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChcInNjb3JlT3ZlcnRha2VcIik7XG4gICAgfSxcblxuICAgIHBsYXk6IGZ1bmN0aW9uKHBvc1dvcmxkLCBwbGF5ZXJBcnJheSkge1xuICAgICAgICBpZiAocGxheWVyQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNjb3JlT3ZlcnRha2UgPSB0aGlzLnNwYXduKCk7XG4gICAgICAgICAgICBsZXQgcG9zTG9jYWwgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zV29ybGQpO1xuICAgICAgICAgICAgc2NvcmVPdmVydGFrZS5ub2RlLnBvc2l0aW9uID0gcG9zTG9jYWw7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlLnNldFBsYXllckluZm8ocGxheWVyQXJyYXlbMF0pO1xuICAgICAgICAgICAgc2NvcmVPdmVydGFrZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3Bhd246IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2NvcmVPdmVydGFrZU5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zY29yZU92ZXJ0YWtlUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlTm9kZSA9IHRoaXMuc2NvcmVPdmVydGFrZVBvb2wuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29yZU92ZXJ0YWtlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVPdmVydGFrZVByZWZhYik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2NvcmVPdmVydGFrZU5vZGUpO1xuICAgICAgICB2YXIgc2NvcmVPdmVydGFrZSA9IHNjb3JlT3ZlcnRha2VOb2RlLmdldENvbXBvbmVudCgnU2NvcmVPdmVydGFrZScpO1xuICAgICAgICBzY29yZU92ZXJ0YWtlLmluaXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHNjb3JlT3ZlcnRha2U7XG4gICAgfSxcblxuICAgIGRlc3Bhd246IGZ1bmN0aW9uKHNjb3JlT3ZlcnRha2UpIHtcbiAgICAgICAgdGhpcy5zY29yZU92ZXJ0YWtlUG9vbC5wdXQoc2NvcmVPdmVydGFrZS5ub2RlKTtcbiAgICB9LFxufSk7XG4iXX0=