
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenUpload.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '017c28hgixMyJ0tqnaNcu1r', 'ScreenUpload');
// scripts/ScreenUpload.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var SkinMgr = require('SkinMgr');

var game_scene = require('game_scene');

var ScreenMgr = require('ScreenMgr');

var UtilsFB = require('UtilsFB');

var UtilsCommon = require('UtilsCommon');

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
    loading: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.loading.node.active = true;
    setTimeout(function () {
      _this.loading.node.active = false;
    }, 5000);
  },
  update: function update(dt) {
    if (this.loading === false) {
      ScreenMgr.instance.showScreen('ScreenHome');
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlblVwbG9hZC5qcyJdLCJuYW1lcyI6WyJTa2luTWdyIiwicmVxdWlyZSIsImdhbWVfc2NlbmUiLCJTY3JlZW5NZ3IiLCJVdGlsc0ZCIiwiVXRpbHNDb21tb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxvYWRpbmciLCJ0eXBlIiwiTGFiZWwiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJzZXRUaW1lb3V0IiwidXBkYXRlIiwiZHQiLCJpbnN0YW5jZSIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsT0FBTyxHQUFHSCxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJSSxXQUFXLEdBQUdKLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBSyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxJQURKO01BRUxDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZKO0VBaEJELENBSFA7RUF5Qkw7RUFFQTtFQUVBQyxLQTdCSyxtQkE2Qkc7SUFBQTs7SUFDSixLQUFLSCxPQUFMLENBQWFJLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLElBQTNCO0lBRUFDLFVBQVUsQ0FBQyxZQUFNO01BQ2IsS0FBSSxDQUFDTixPQUFMLENBQWFJLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO0lBQ0gsQ0FGUyxFQUVQLElBRk8sQ0FBVjtFQUdILENBbkNJO0VBcUNMRSxNQXJDSyxrQkFxQ0VDLEVBckNGLEVBcUNNO0lBQ1AsSUFBSSxLQUFLUixPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO01BQ3hCUCxTQUFTLENBQUNnQixRQUFWLENBQW1CQyxVQUFuQixDQUE4QixZQUE5QjtNQUNBLEtBQUtOLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0o7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbnZhciBTa2luTWdyID0gcmVxdWlyZSgnU2tpbk1ncicpO1xudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKCdnYW1lX3NjZW5lJyk7XG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBTY3JlZW5NZ3IuaW5zdGFuY2Uuc2hvd1NjcmVlbignU2NyZWVuSG9tZScpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19