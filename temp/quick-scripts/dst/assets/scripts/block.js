
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98313d7bZFJqKdxyYnvxjBm', 'block');
// scripts/block.js

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
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
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
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.icon = this.node.getChildByName("icon");
    this.mid = this.node.getChildByName("mid");
    this.up = this.node.getChildByName("up");
    this.down = this.node.getChildByName("down");
    this.left = this.node.getChildByName("left");
    this.right = this.node.getChildByName("right");
  },
  // dir = 1, 右边跳跃, -1 表示左边跳跃
  is_jump_on_block: function is_jump_on_block(w_dst_pos, direction) {
    var mid_pos = this.mid.convertToWorldSpaceAR(cc.v2(0, 0));
    var dir = w_dst_pos.sub(mid_pos);
    var min_len = dir.mag();
    var min_pos = mid_pos; //跳到中间得分多

    var jumpScore = 2;

    if (direction === 1) {
      var up_pos = this.up.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(up_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = up_pos;
        jumpScore = 1;
      }

      var down_pos = this.down.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(down_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = down_pos;
        jumpScore = 1;
      }
    } else {
      var left_pos = this.left.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(left_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = left_pos;
        jumpScore = 1;
      }

      var right_pos = this.right.convertToWorldSpaceAR(cc.v2(0, 0));
      dir = w_dst_pos.sub(right_pos);
      var len = dir.mag();

      if (min_len > len) {
        min_len = len;
        min_pos = right_pos;
        jumpScore = 1;
      }
    } // 找到了跳跃的位置距离参考点最近的那个参考点以及位置;


    dir = w_dst_pos.sub(min_pos);

    if (dir.mag() < 100) {
      w_dst_pos.x = min_pos.x;
      w_dst_pos.y = min_pos.y;
      return jumpScore;
    } // end 


    return 0;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2Jsb2NrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJpY29uIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwibWlkIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiaXNfanVtcF9vbl9ibG9jayIsIndfZHN0X3BvcyIsImRpcmVjdGlvbiIsIm1pZF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImRpciIsInN1YiIsIm1pbl9sZW4iLCJtYWciLCJtaW5fcG9zIiwianVtcFNjb3JlIiwidXBfcG9zIiwibGVuIiwiZG93bl9wb3MiLCJsZWZ0X3BvcyIsInJpZ2h0X3BvcyIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaO0lBRUEsS0FBS0MsR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVUMsY0FBVixDQUF5QixLQUF6QixDQUFYO0lBQ0EsS0FBS0UsRUFBTCxHQUFVLEtBQUtILElBQUwsQ0FBVUMsY0FBVixDQUF5QixJQUF6QixDQUFWO0lBQ0EsS0FBS0csSUFBTCxHQUFZLEtBQUtKLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaO0lBRUEsS0FBS0ksSUFBTCxHQUFZLEtBQUtMLElBQUwsQ0FBVUMsY0FB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QU8sQ0FBQ08sQ0FBdEI7TUFDQWhCLFNBQVMsQ0FBQ2lCLENBQVYsR0FBY1IsT0FBTyxDQUFDUSxDQUF0QjtNQUNBLE9BQU9QLFNBQVA7SUFDSCxDQXBEa0MsQ0FxRG5DOzs7SUFFQSxPQUFPLENBQVA7RUFDSCxDQTdGSSxDQStGTDs7QUEvRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2NsYXNzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy9pbmRleC5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9lZGl0b3JzX2FuZF90b29scy9jcmVhdG9yLWNoYXB0ZXJzL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy9pbmRleC5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcblxyXG4gICAgICAgIHRoaXMubWlkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWlkXCIpO1xyXG4gICAgICAgIHRoaXMudXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ1cFwiKTtcclxuICAgICAgICB0aGlzLmRvd24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkb3duXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0XCIpO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZGlyID0gMSwg5Y+z6L656Lez6LeDLCAtMSDooajnpLrlt6bovrnot7Pot4NcclxuICAgIGlzX2p1bXBfb25fYmxvY2sod19kc3RfcG9zLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWlkX3BvcyA9IHRoaXMubWlkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgdmFyIGRpciA9IHdfZHN0X3Bvcy5zdWIobWlkX3Bvcyk7XHJcbiAgICAgICAgdmFyIG1pbl9sZW4gPSBkaXIubWFnKCk7XHJcbiAgICAgICAgdmFyIG1pbl9wb3MgPSBtaWRfcG9zO1xyXG4gICAgICAgIC8v6Lez5Yiw5Lit6Ze05b6X5YiG5aSaXHJcbiAgICAgICAgdmFyIGp1bXBTY29yZSA9IDI7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgdmFyIHVwX3BvcyA9IHRoaXMudXAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1Yih1cF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSB1cF9wb3M7XHJcbiAgICAgICAgICAgICAgICBqdW1wU2NvcmUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZG93bl9wb3MgPSB0aGlzLmRvd24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1Yihkb3duX3Bvcyk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBkaXIubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChtaW5fbGVuID4gbGVuKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5fbGVuID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgbWluX3BvcyA9IGRvd25fcG9zO1xyXG4gICAgICAgICAgICAgICAganVtcFNjb3JlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxlZnRfcG9zID0gdGhpcy5sZWZ0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGRpciA9IHdfZHN0X3Bvcy5zdWIobGVmdF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSBsZWZ0X3BvcztcclxuICAgICAgICAgICAgICAgIGp1bXBTY29yZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJpZ2h0X3BvcyA9IHRoaXMucmlnaHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1YihyaWdodF9wb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAobWluX2xlbiA+IGxlbikge1xyXG4gICAgICAgICAgICAgICAgbWluX2xlbiA9IGxlbjtcclxuICAgICAgICAgICAgICAgIG1pbl9wb3MgPSByaWdodF9wb3M7XHJcbiAgICAgICAgICAgICAgICBqdW1wU2NvcmUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmib7liLDkuobot7Pot4PnmoTkvY3nva7ot53nprvlj4LogIPngrnmnIDov5HnmoTpgqPkuKrlj4LogIPngrnku6Xlj4rkvY3nva47XHJcbiAgICAgICAgZGlyID0gd19kc3RfcG9zLnN1YihtaW5fcG9zKTtcclxuICAgICAgICBpZiAoZGlyLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHdfZHN0X3Bvcy54ID0gbWluX3Bvcy54O1xyXG4gICAgICAgICAgICB3X2RzdF9wb3MueSA9IG1pbl9wb3MueTtcclxuICAgICAgICAgICAgcmV0dXJuIGp1bXBTY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIFxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==