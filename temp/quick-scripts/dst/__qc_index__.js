
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/ConstValue');
require('./assets/scripts/PlayerItem');
require('./assets/scripts/ScoreFX');
require('./assets/scripts/ScoreFXMgr');
require('./assets/scripts/ScoreOvertake');
require('./assets/scripts/ScoreOvertakeMgr');
require('./assets/scripts/ScreenGameOver');
require('./assets/scripts/ScreenHome');
require('./assets/scripts/ScreenHomeLeaderboard');
require('./assets/scripts/ScreenLeaderboard');
require('./assets/scripts/ScreenMgr');
require('./assets/scripts/ScreenSkinShop');
require('./assets/scripts/ScreenUpload');
require('./assets/scripts/SkinItem');
require('./assets/scripts/SkinMgr');
require('./assets/scripts/UtilsCommon');
require('./assets/scripts/UtilsFB');
require('./assets/scripts/block');
require('./assets/scripts/game_scene');
require('./assets/scripts/player');

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