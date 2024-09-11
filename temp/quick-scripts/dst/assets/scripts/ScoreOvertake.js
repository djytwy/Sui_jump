
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreOvertake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61c1cZEtg9JWr4aXhhEoB4+', 'ScoreOvertake');
// scripts/ScoreOvertake.js

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
var UtilsFB = require("UtilsFB");

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
    overtakeLabel: {
      "default": null,
      type: cc.Label
    },
    photo: {
      "default": null,
      type: cc.Sprite
    },
    animation: {
      "default": null,
      type: cc.Animation
    }
  },
  onLoad: function onLoad() {
    this.animation.on('finished', this.onPlayFinished, this);
  },
  init: function init(mgr) {
    this.mgr = mgr;
  },
  play: function play() {
    this.animation.play('overtake_fade');
  },
  setPlayerInfo: function setPlayerInfo(playerInfo) {
    if (playerInfo.isSelf) {
      this.overtakeLabel.string = "New revord!";
    } else {
      this.overtakeLabel.string = "Overtake " + playerInfo.playerName;
    }

    UtilsFB.getPlayerPhotoAsync(playerInfo).then(function () {
      if (playerInfo.photoTexture != null) {
        this.photo.spriteFrame = new cc.SpriteFrame();
        this.photo.spriteFrame.setTexture(playerInfo.photoTexture);
      }
    }.bind(this))["catch"](function (error) {});
  },
  onPlayFinished: function onPlayFinished(type, state) {
    this.mgr.despawn(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlT3ZlcnRha2UuanMiXSwibmFtZXMiOlsiVXRpbHNGQiIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm92ZXJ0YWtlTGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJwaG90byIsIlNwcml0ZSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIm9uTG9hZCIsIm9uIiwib25QbGF5RmluaXNoZWQiLCJpbml0IiwibWdyIiwicGxheSIsInNldFBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNTZWxmIiwic3RyaW5nIiwicGxheWVyTmFtZSIsImdldFBsYXllclBob3RvQXN5bmMiLCJ0aGVuIiwicGhvdG9UZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNldFRleHR1cmUiLCJiaW5kIiwiZXJyb3IiLCJzdGF0ZSIsImRlc3Bhd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUFDLGFBQWEsRUFBRTtNQUNYLFdBQVMsSUFERTtNQUVYQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQWpCUDtJQXNCUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZOLENBdEJDO0lBMkJSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEosSUFBSSxFQUFFTCxFQUFFLENBQUNVO0lBRkY7RUEzQkgsQ0FIUDtFQW9DTEMsTUFBTSxFQUFFLGtCQUFXO0lBQ2YsS0FBS0YsU0FBTCxDQUFlRyxFQUFmLENBQWtCLFVBQWxCLEVBQThCLEtBQUtDLGNBQW5DLEVBQW1ELElBQW5EO0VBQ0gsQ0F0Q0k7RUF3Q0xDLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWM7SUFDaEIsS0FBS0EsR0FBTCxHQUFXQSxHQUFYO0VBQ0gsQ0ExQ0k7RUE0Q0xDLElBQUksRUFBRSxnQkFBVztJQUNiLEtBQUtQLFNBQUwsQ0FBZU8sSUFBZixDQUFvQixlQUFwQjtFQUNILENBOUNJO0VBZ0RMQyxhQUFhLEVBQUUsdUJBQVNDLFVBQVQsRUFBcUI7SUFDaEMsSUFBSUEsVUFBVSxDQUFDQyxNQUFmLEVBQXVCO01BQ25CLEtBQUtmLGFBQUwsQ0FBbUJnQixNQUFuQixHQUE0QixhQUE1QjtJQUNILENBRkQsTUFFTztNQUNILEtBQUtoQixhQUFMLENBQW1CZ0IsTUFBbkIsR0FBNEIsY0FBY0YsVUFBVSxDQUFDRyxVQUFyRDtJQUNIOztJQUVEdkIsT0FBTyxDQUFDd0IsbUJBQVIsQ0FBNEJKLFVBQTVCLEVBQ0NLLElBREQsQ0FDTSxZQUFXO01BQ2IsSUFBSUwsVUFBVSxDQUFDTSxZQUFYLElBQTJCLElBQS9CLEVBQXFDO1FBQ2pDLEtBQUtqQixLQUFMLENBQVdrQixXQUFYLEdBQXlCLElBQUl6QixFQUFFLENBQUMwQixXQUFQLEVBQXpCO1FBQ0EsS0FBS25CLEtBQUwsQ0FBV2tCLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDVCxVQUFVLENBQUNNLFlBQTdDO01BQ0g7SUFDSixDQUxLLENBS0pJLElBTEksQ0FLQyxJQUxELENBRE4sV0FPTyxVQUFBQyxLQUFLLEVBQUksQ0FBRSxDQVBsQjtFQVNILENBaEVJO0VBa0VMaEIsY0FBYyxFQUFFLHdCQUFTUixJQUFULEVBQWV5QixLQUFmLEVBQXNCO0lBQ2xDLEtBQUtmLEdBQUwsQ0FBU2dCLE9BQVQsQ0FBaUIsSUFBakI7RUFDSDtBQXBFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoXCJVdGlsc0ZCXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcblxuICAgICAgICBvdmVydGFrZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGhvdG86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uUGxheUZpbmlzaGVkLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24obWdyKSB7XG4gICAgICAgIHRoaXMubWdyID0gbWdyO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnb3ZlcnRha2VfZmFkZScpO1xuICAgIH0sXG5cbiAgICBzZXRQbGF5ZXJJbmZvOiBmdW5jdGlvbihwbGF5ZXJJbmZvKSB7XG4gICAgICAgIGlmIChwbGF5ZXJJbmZvLmlzU2VsZikge1xuICAgICAgICAgICAgdGhpcy5vdmVydGFrZUxhYmVsLnN0cmluZyA9IFwiTmV3IHJldm9yZCFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcnRha2VMYWJlbC5zdHJpbmcgPSBcIk92ZXJ0YWtlIFwiICsgcGxheWVySW5mby5wbGF5ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHNGQi5nZXRQbGF5ZXJQaG90b0FzeW5jKHBsYXllckluZm8pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHBsYXllckluZm8ucGhvdG9UZXh0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90by5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHBsYXllckluZm8ucGhvdG9UZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge30pO1xuXG4gICAgfSxcblxuICAgIG9uUGxheUZpbmlzaGVkOiBmdW5jdGlvbih0eXBlLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLm1nci5kZXNwYXduKHRoaXMpO1xuICAgIH0sXG59KTtcbiJdfQ==