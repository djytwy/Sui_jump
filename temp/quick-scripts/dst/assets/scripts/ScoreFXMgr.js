
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFXMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlRlhNZ3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZUZYUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm9uTG9hZCIsInNjb3JlRlhQb29sIiwiTm9kZVBvb2wiLCJwbGF5U2NvcmVGWCIsInBvc1dvcmxkIiwic2NvcmUiLCJzY29yZUZYIiwic3Bhd25TY29yZUZYIiwicG9zTG9jYWwiLCJub2RlIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJwb3NpdGlvbiIsInNldFNjb3JlIiwicGxheSIsInNjb3JlRlhOb2RlIiwic2l6ZSIsImdldCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZGVzcGF3blNjb3JlRlgiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxhQUFhLEVBQUU7TUFDWCxXQUFTLElBREU7TUFFWEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkU7RUFEUCxDQUhQO0VBVUxDLE1BVkssb0JBVUs7SUFDTixLQUFLQyxXQUFMLEdBQW1CLElBQUlSLEVBQUUsQ0FBQ1MsUUFBUCxDQUFnQixTQUFoQixDQUFuQjtFQUNILENBWkk7RUFjTEMsV0FBVyxFQUFFLHFCQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUEwQjtJQUNuQyxJQUFJQyxPQUFPLEdBQUcsS0FBS0MsWUFBTCxFQUFkO0lBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsb0JBQVYsQ0FBK0JOLFFBQS9CLENBQWY7SUFDQUUsT0FBTyxDQUFDRyxJQUFSLENBQWFFLFFBQWIsR0FBd0JILFFBQXhCO0lBQ0FGLE9BQU8sQ0FBQ00sUUFBUixDQUFpQlAsS0FBakI7SUFDQUMsT0FBTyxDQUFDTyxJQUFSO0VBQ0gsQ0FwQkk7RUFzQkxOLFlBQVksRUFBRSx3QkFBVztJQUNyQixJQUFJTyxXQUFXLEdBQUcsSUFBbEI7O0lBQ0EsSUFBSSxLQUFLYixXQUFMLENBQWlCYyxJQUFqQixLQUEwQixDQUE5QixFQUFpQztNQUM3QkQsV0FBVyxHQUFHLEtBQUtiLFdBQUwsQ0FBaUJlLEdBQWpCLEVBQWQ7SUFDSCxDQUZELE1BRU87TUFDSEYsV0FBVyxHQUFHckIsRUFBRSxDQUFDd0IsV0FBSCxDQUFlLEtBQUtwQixhQUFwQixDQUFkO0lBQ0g7O0lBRUQsS0FBS1ksSUFBTCxDQUFVUyxRQUFWLENBQW1CSixXQUFuQjtJQUNBLElBQUlSLE9BQU8sR0FBR1EsV0FBVyxDQUFDSyxZQUFaLENBQXlCLFNBQXpCLENBQWQ7SUFDQWIsT0FBTyxDQUFDYyxJQUFSLENBQWEsSUFBYjtJQUVBLE9BQU9kLE9BQVA7RUFDSCxDQW5DSTtFQXFDTGUsY0FBYyxFQUFFLHdCQUFTZixPQUFULEVBQWtCO0lBQzlCLEtBQUtMLFdBQUwsQ0FBaUJxQixHQUFqQixDQUFxQmhCLE9BQU8sQ0FBQ0csSUFBN0I7RUFDSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzY29yZUZYUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNjb3JlRlhQb29sID0gbmV3IGNjLk5vZGVQb29sKFwic2NvcmVGWFwiKTtcbiAgICB9LFxuXG4gICAgcGxheVNjb3JlRlg6IGZ1bmN0aW9uKHBvc1dvcmxkLCBzY29yZSkge1xuICAgICAgICBsZXQgc2NvcmVGWCA9IHRoaXMuc3Bhd25TY29yZUZYKCk7XG4gICAgICAgIGxldCBwb3NMb2NhbCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NXb3JsZCk7XG4gICAgICAgIHNjb3JlRlgubm9kZS5wb3NpdGlvbiA9IHBvc0xvY2FsO1xuICAgICAgICBzY29yZUZYLnNldFNjb3JlKHNjb3JlKTtcbiAgICAgICAgc2NvcmVGWC5wbGF5KCk7XG4gICAgfSxcblxuICAgIHNwYXduU2NvcmVGWDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzY29yZUZYTm9kZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnNjb3JlRlhQb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIHNjb3JlRlhOb2RlID0gdGhpcy5zY29yZUZYUG9vbC5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3JlRlhOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZUZYUHJlZmFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzY29yZUZYTm9kZSk7XG4gICAgICAgIHZhciBzY29yZUZYID0gc2NvcmVGWE5vZGUuZ2V0Q29tcG9uZW50KCdTY29yZUZYJyk7XG4gICAgICAgIHNjb3JlRlguaW5pdCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gc2NvcmVGWDtcbiAgICB9LFxuXG4gICAgZGVzcGF3blNjb3JlRlg6IGZ1bmN0aW9uKHNjb3JlRlgpIHtcbiAgICAgICAgdGhpcy5zY29yZUZYUG9vbC5wdXQoc2NvcmVGWC5ub2RlKTtcbiAgICB9LFxufSk7XG4iXX0=