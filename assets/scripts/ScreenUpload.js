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
    extends: cc.Component,

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
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.loading.node.active = true;

        setTimeout(() => {
            this.loading.node.active = false;
        }, 5000)
    },

    update(dt) {
        if (this.loading === false) {
            ScreenMgr.instance.showScreen('ScreenHome');
            this.node.active = false;
        }
    },
});
