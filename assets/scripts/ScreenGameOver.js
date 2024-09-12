// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
import * as ConstValue from './ConstValue';

var ScreenMgr = require('ScreenMgr');
var UtilsCommon = require('UtilsCommon');
var UtilsFB = require('UtilsFB');
var game_scene = require('game_scene');

function base64ToBinary(base64String) {
    const base64Cleaned = base64String.split(',')[1];

    const binaryString = atob(base64Cleaned);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
}

cc.Class({
    extends: cc.Component,

    properties: {
        titleNewScore: {
            default: null,
            type: cc.Node,
        },

        labelScore: {
            default: null,
            type: cc.Label,
        },

        labelScoreMax: {
            default: null,
            type: cc.Label,
        },

        screenLeaderboard: {
            default: null,
            type: require('ScreenLeaderboard'),
        },

        btnHome: {
            default: null,
            type: cc.Button
        },
        btnUpload: {
            default: null,
            type: cc.Button
        },
        btnPlayAgain: {
            default: null,
            type: cc.Button
        },
        loading: {
            default: null,
            type: cc.Label,
        },
        blobId: {
            default: null,
            type: cc.Label,
        },
        SuiId: {
            default: null,
            type: cc.RichText,
        },
        successTips: {
            default: null,
            type: cc.Label,
        },
        errorTips: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    onEnable() {
        this.btnHome.node.active = true;
        this.btnUpload.node.active = true;
        this.btnPlayAgain.node.active = true;
        this.labelScore.node.active = true;
        this.loading.node.active = false;
        // upload status:
        this.blobId.node.active = false;
        this.SuiId.node.active = false;
        this.successTips.node.active = false;
        this.errorTips.node.active = false;

        let score = game_scene.instance.score;
        // let scoreMAx = UtilsFB.getSelfLeaderboardScore(ConstValue.LEADERBOARD_SOCRE_WORLD);
        let scoreMAx = window.localStorage.getItem("maxScore") ? parseInt(window.localStorage.getItem("maxScore")) : 0

        this.titleNewScore.active = score > 0 && score > scoreMAx;
        scoreMAx = Math.max(scoreMAx, score);
        window.localStorage.setItem("maxScore", scoreMAx)

        this.labelScore.string = "" + score;
        this.labelScoreMax.string = "Max Score: " + scoreMAx;

        this.screenLeaderboard.clearLeaderboard();
        UtilsFB.setLeaderboardAsync(ConstValue.LEADERBOARD_SOCRE_WORLD, this.score)
            .then(function () {
                this.screenLeaderboard.showLeaderboard(ConstValue.LEADERBOARD_SOCRE_WORLD);
            }.bind(this))
            .catch(error => {
                console.log("setleaderboardasync error: " + JSON.stringify(error));
            });
    },

    onBtnClickHome() {
        ScreenMgr.instance.showScreen('ScreenHome');
        this.node.active = false;
    },

    onBtnClickShare() {
        var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
        UtilsFB.chooseAsync(imageBase64).catch(error => { });
    },

    onBtnClickPlayAgain() {
        game_scene.instance.onGameStart(true, false);
    },

    onBtnClickContinue() {
        var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
        UtilsFB.chooseAsync(imageBase64)
            .then(function () {
                game_scene.instance.onGameStart(true, true);
            })
            .catch(error => { });
    },

    async onBtnClickUpload() {
        this.errorTips.node.active = false;
        var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());

        this.btnHome.node.active = false;
        this.btnUpload.node.active = false;
        this.btnPlayAgain.node.active = false;
        this.loading.node.active = true;


        const res = await fetch('https://publisher-devnet.walrus.space/v1/store?epochs=1', {
            method: 'PUT',
            body: base64ToBinary(imageBase64)
        });
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            this.blobId.string = 'Blodid: ' + data.newlyCreated.blobObject.blobId;
            this.SuiId.string = 'Id: ' + data.newlyCreated.blobObject.id;
            this.blobId.node.active = true;
            this.SuiId.node.active = true;
            this.successTips.node.active = true;
            this.loading.node.active = false;
            this.btnHome.node.active = true;
            this.btnUpload.node.active = true;
            this.btnPlayAgain.node.active = true;

            var uploadNum = window.localStorage.getItem("uploadNum") ? window.localStorage.getItem("uploadNum") : 0
            window.localStorage.setItem("uploadNum", parseInt(uploadNum) + 1)
            /**
             * {
                    newlyCreated: {
                        blobObject: {
                        id: '0x20c6a2915047479f7920f183cbc5953b708cfcc4118d57cd33e2344a93d6d02c',
                        storedEpoch: 0,
                        blobId: 'HPTDv1DG7z-ikDUJA0utYfLO00oMuDH3xz8Fok2a1PI',
                        size: 39635,
                        erasureCodeType: 'RedStuff',
                        certifiedEpoch: 0,
                        storage: [Object]
                        },
                        encodedSize: 65023000,
                        cost: 3175000
                    }
                }
             */
        } else {
            this.errorTips.node.active = true;

            this.btnHome.node.active = true;
            this.btnUpload.node.active = true;
            this.btnPlayAgain.node.active = true;
            this.loading.node.active = false;

            console.error('Error:', res.status);
            const errorData = await res.text();
            console.error('Error details:', errorData);
        }
    }
});
