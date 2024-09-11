
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UtilsCommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d958AFPlJCn6gdYfD/DmfP', 'UtilsCommon');
// scripts/UtilsCommon.js

"use strict";

var UtilsCommon = cc.Class({
  "extends": cc.Component,
  statics: {
    _cameraMain: null,
    getCameraMain: function getCameraMain() {
      if (UtilsCommon._cameraMain == null) {
        UtilsCommon._cameraMain = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
      }

      return UtilsCommon._cameraMain;
    },
    //http://docs.cocos2d-x.org/creator/manual/zh/render/camera.html#截图
    //https://github.com/cocos-creator/example-cases/blob/master/assets/cases/07_render_texture/render_to_canvas.js
    getScreenshotBase64: function getScreenshotBase64(camera) {
      var texture = new cc.RenderTexture();
      var gl = cc.game._renderContext;
      texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);
      camera.targetTexture = texture;
      camera.render();
      camera.targetTexture = null;
      var data = texture.readPixels();
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = texture.width;
      canvas.height = texture.height;
      var width = texture.width;
      var height = texture.height;
      var rowBytes = width * 4;

      for (var row = 0; row < height; row++) {
        var srow = height - 1 - row;
        var imageData = ctx.createImageData(width, 1);
        var start = srow * width * 4;

        for (var i = 0; i < rowBytes; i++) {
          imageData.data[i] = data[start + i];
        }

        ctx.putImageData(imageData, 0, row);
      }

      var dataURL = canvas.toDataURL("image/jpeg");
      return dataURL;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1V0aWxzQ29tbW9uLmpzIl0sIm5hbWVzIjpbIlV0aWxzQ29tbW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJfY2FtZXJhTWFpbiIsImdldENhbWVyYU1haW4iLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiQ2FtZXJhIiwiZ2V0U2NyZWVuc2hvdEJhc2U2NCIsImNhbWVyYSIsInRleHR1cmUiLCJSZW5kZXJUZXh0dXJlIiwiZ2wiLCJnYW1lIiwiX3JlbmRlckNvbnRleHQiLCJpbml0V2l0aFNpemUiLCJ2aXNpYmxlUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiU1RFTkNJTF9JTkRFWDgiLCJ0YXJnZXRUZXh0dXJlIiwicmVuZGVyIiwiZGF0YSIsInJlYWRQaXhlbHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwicm93Qnl0ZXMiLCJyb3ciLCJzcm93IiwiaW1hZ2VEYXRhIiwiY3JlYXRlSW1hZ2VEYXRhIiwic3RhcnQiLCJpIiwicHV0SW1hZ2VEYXRhIiwiZGF0YVVSTCIsInRvRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3ZCLFdBQVNELEVBQUUsQ0FBQ0UsU0FEVztFQUd2QkMsT0FBTyxFQUFFO0lBQ0xDLFdBQVcsRUFBRSxJQURSO0lBRUxDLGFBQWEsRUFBRSx5QkFBVztNQUN0QixJQUFJTixXQUFXLENBQUNLLFdBQVosSUFBMkIsSUFBL0IsRUFBcUM7UUFDakNMLFdBQVcsQ0FBQ0ssV0FBWixHQUEwQkosRUFBRSxDQUFDTSxJQUFILENBQVEsb0JBQVIsRUFBOEJDLFlBQTlCLENBQTJDUCxFQUFFLENBQUNRLE1BQTlDLENBQTFCO01BQ0g7O01BQ0QsT0FBT1QsV0FBVyxDQUFDSyxXQUFuQjtJQUNILENBUEk7SUFTTDtJQUNBO0lBQ0FLLG1CQUFtQixFQUFFLDZCQUFTQyxNQUFULEVBQWlCO01BQ2xDLElBQUlDLE9BQU8sR0FBRyxJQUFJWCxFQUFFLENBQUNZLGFBQVAsRUFBZDtNQUNBLElBQUlDLEVBQUUsR0FBR2IsRUFBRSxDQUFDYyxJQUFILENBQVFDLGNBQWpCO01BQ0FKLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQmhCLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZUMsS0FBcEMsRUFBMkNsQixFQUFFLENBQUNpQixXQUFILENBQWVFLE1BQTFELEVBQWtFTixFQUFFLENBQUNPLGNBQXJFO01BQ0FWLE1BQU0sQ0FBQ1csYUFBUCxHQUF1QlYsT0FBdkI7TUFDQUQsTUFBTSxDQUFDWSxNQUFQO01BQ0FaLE1BQU0sQ0FBQ1csYUFBUCxHQUF1QixJQUF2QjtNQUVBLElBQUlFLElBQUksR0FBR1osT0FBTyxDQUFDYSxVQUFSLEVBQVg7TUFFQSxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO01BQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtNQUNBSixNQUFNLENBQUNQLEtBQVAsR0FBZVAsT0FBTyxDQUFDTyxLQUF2QjtNQUNBTyxNQUFNLENBQUNOLE1BQVAsR0FBZ0JSLE9BQU8sQ0FBQ1EsTUFBeEI7TUFFQSxJQUFJRCxLQUFLLEdBQUdQLE9BQU8sQ0FBQ08sS0FBcEI7TUFDQSxJQUFJQyxNQUFNLEdBQUdSLE9BQU8sQ0FBQ1EsTUFBckI7TUFDQSxJQUFJVyxRQUFRLEdBQUdaLEtBQUssR0FBRyxDQUF2Qjs7TUFDQSxLQUFLLElBQUlhLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdaLE1BQXhCLEVBQWdDWSxHQUFHLEVBQW5DLEVBQXVDO1FBQ25DLElBQUlDLElBQUksR0FBR2IsTUFBTSxHQUFHLENBQVQsR0FBYVksR0FBeEI7UUFDQSxJQUFJRSxTQUFTLEdBQUdMLEdBQUcsQ0FBQ00sZUFBSixDQUFvQmhCLEtBQXBCLEVBQTJCLENBQTNCLENBQWhCO1FBQ0EsSUFBSWlCLEtBQUssR0FBR0gsSUFBSSxHQUFHZCxLQUFQLEdBQWUsQ0FBM0I7O1FBQ0EsS0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sUUFBcEIsRUFBOEJNLENBQUMsRUFBL0IsRUFBbUM7VUFDL0JILFNBQVMsQ0FBQ1YsSUFBVixDQUFlYSxDQUFmLElBQW9CYixJQUFJLENBQUNZLEtBQUssR0FBQ0MsQ0FBUCxDQUF4QjtRQUNIOztRQUVEUixHQUFHLENBQUNTLFlBQUosQ0FBaUJKLFNBQWpCLEVBQTRCLENBQTVCLEVBQStCRixHQUEvQjtNQUNIOztNQUVELElBQUlPLE9BQU8sR0FBR2IsTUFBTSxDQUFDYyxTQUFQLENBQWlCLFlBQWpCLENBQWQ7TUFDQSxPQUFPRCxPQUFQO0lBQ0g7RUExQ0k7QUFIYyxDQUFULENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVXRpbHNDb21tb24gPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBfY2FtZXJhTWFpbjogbnVsbCxcbiAgICAgICAgZ2V0Q2FtZXJhTWFpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHNDb21tb24uX2NhbWVyYU1haW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFV0aWxzQ29tbW9uLl9jYW1lcmFNYWluID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBVdGlsc0NvbW1vbi5fY2FtZXJhTWFpbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvL2h0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvemgvcmVuZGVyL2NhbWVyYS5odG1sI+aIquWbvlxuICAgICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9jb2Nvcy1jcmVhdG9yL2V4YW1wbGUtY2FzZXMvYmxvYi9tYXN0ZXIvYXNzZXRzL2Nhc2VzLzA3X3JlbmRlcl90ZXh0dXJlL3JlbmRlcl90b19jYW52YXMuanNcbiAgICAgICAgZ2V0U2NyZWVuc2hvdEJhc2U2NDogZnVuY3Rpb24oY2FtZXJhKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgZ2wgPSBjYy5nYW1lLl9yZW5kZXJDb250ZXh0O1xuICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUoY2MudmlzaWJsZVJlY3Qud2lkdGgsIGNjLnZpc2libGVSZWN0LmhlaWdodCwgZ2wuU1RFTkNJTF9JTkRFWDgpO1xuICAgICAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xuXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHJvd0J5dGVzID0gd2lkdGggKiA0O1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgIGxldCBzcm93ID0gaGVpZ2h0IC0gMSAtIHJvdztcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqIHdpZHRoICogNDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPSBkYXRhW3N0YXJ0K2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFVUkw7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl19