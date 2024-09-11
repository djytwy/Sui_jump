"use strict";
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