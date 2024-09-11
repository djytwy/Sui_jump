"use strict";
cc._RF.push(module, '4c07a2iBFhL0rdTlIXKUvUn', 'UtilsFB');
// scripts/UtilsFB.js

"use strict";

var UtilsFB = cc.Class({
  "extends": cc.Component,
  statics: {
    leaderboardMapLocal: {},
    init: function init(leaderboardName) {
      UtilsFB.getLeaderboardAsync(leaderboardName)["catch"](function (error) {});
    },
    invitePlayerRandomAsync: function invitePlayerRandomAsync(imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.player.getConnectedPlayersAsync().then(function (players) {
          if (players.length) {
            var randomIndex = Math.floor(Math.random() * players.length);
            var playerID = players[randomIndex].getID();
            UtilsFB.invitePlayerAsync(playerID, imageBase64).then(function () {
              resolve();
            })["catch"](function (error) {
              reject(error);
            });
          } else {
            UtilsFB.debugLog("getConnectedPlayersAsync error: player count 0.");
            reject("Player count is 0.");
          }
        })["catch"](function (error) {
          UtilsFB.debugLog("getConnectedPlayersAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    invitePlayerAsync: function invitePlayerAsync(playerID, imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.context.createAsync(playerID).then(function () {
          FBInstant.updateAsync({
            action: 'CUSTOM',
            cta: 'Join the Game',
            image: imageBase64,
            text: {
              "default": 'Play with me',
              localizations: {}
            },
            template: 'VILLAGE_INVASION',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH',
            data: {
              createId: playerID
            }
          }).then(function () {
            // UtilsFB.debugLog("updateAsync success.");
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("updateAsync error: " + JSON.stringify(error));
            reject(error);
          });
        })["catch"](function (error) {
          UtilsFB.debugLog("createAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    getLeaderboardAsync: function getLeaderboardAsync(leaderboardName) {
      UtilsFB.debugLog("getLeaderboardAsync");
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant === 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

        if (playerArray != null) {
          UtilsFB.debugLog("getLeaderboardAsync local");
          resolve(playerArray);
        }

        FBInstant.getLeaderboardAsync(leaderboardName).then(function (leaderboard) {
          UtilsFB.debugLog("getLeaderboardAsync leaderboard: " + JSON.stringify(leaderboard));
          return leaderboard.getConnectedPlayerEntriesAsync(10, 0);
        }).then(function (entries) {
          UtilsFB.debugLog("getConnectedPlayerEntriesAsync entries: " + JSON.stringify(entries));
          var playerArray = new Array();
          var leaderboardScoreSelf = UtilsFB.getSelfLeaderboardScore();

          for (var i = 0; i < entries.length; i++) {
            var playerInfo = {};
            var player = entries[i].getPlayer();
            playerInfo.isSelf = player.getID() == FBInstant.player.getID();
            playerInfo.id = player.getID();
            playerInfo.playerName = player.getName();
            playerInfo.photoUrl = player.getPhoto(); // 如果是自己，设置大的分数，防止分数还没保存上时，获取到的分数是旧的

            if (playerInfo.isSelf) {
              playerInfo.score = Math.max(leaderboardScoreSelf, entries[i].getScore());
            } else {
              playerInfo.score = entries[i].getScore();
            }

            playerInfo.rank = entries[i].getRank();
            playerInfo.photoTexture = null;
            playerArray.push(playerInfo);
          }

          UtilsFB.updateLeaderboardLocal(leaderboardName, playerArray);
          resolve(playerArray);
        })["catch"](function (error) {
          UtilsFB.debugLog("getLeaderboardAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    loadPlayerArrayPhoto: function loadPlayerArrayPhoto(playerArray) {
      UtilsFB.debugLog("loadPlayerArrayPhoto");

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          UtilsFB.loadPlayerPhotoAsync(playerArray[i])["catch"](function (error) {});
        }
      }
    },
    loadPlayerPhotoAsync: function loadPlayerPhotoAsync(playerInfo) {
      return new Promise(function (resolve, reject) {
        cc.loader.load({
          url: playerInfo.photoUrl,
          type: 'jpg'
        }, function (err, texture) {
          if (texture != null) {
            playerInfo.photoTexture = texture;
            resolve();
          } else {
            UtilsFB.debugLog("loadPlayerPhotoAsync error: " + JSON.stringify(err));
            reject(err);
          }
        });
      });
    },
    setLeaderboardAsync: function setLeaderboardAsync(leaderboardName, score) {
      UtilsFB.debugLog("setLeaderboardAsync");
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        if (UtilsFB.setLeaderboardLocal(leaderboardName, score)) {
          resolve();
        }

        FBInstant.getLeaderboardAsync(leaderboardName).then(function (leaderboard) {
          return leaderboard.setScoreAsync(score);
        }).then(function () {
          resolve();
        })["catch"](function (error) {
          UtilsFB.debugLog("setLeaderboardAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    getPlayerPhotoAsync: function getPlayerPhotoAsync(playerInfo) {
      return new Promise(function (resolve, reject) {
        if (playerInfo.photoTexture != null) {
          resolve();
        } else {
          UtilsFB.loadPlayerPhotoAsync(playerInfo).then(function () {
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("getPlayerPhotoAsync error: " + JSON.stringify(error));
            reject(error);
          });
        }
      });
    },
    getLeaderboardLocal: function getLeaderboardLocal(leaderboardName) {
      if (leaderboardName in UtilsFB.leaderboardMapLocal) {
        return UtilsFB.leaderboardMapLocal[leaderboardName].playerArray;
      }

      return null;
    },
    updateLeaderboardLocal: function updateLeaderboardLocal(leaderboardName, playerArray) {
      UtilsFB.debugLog("updateLeaderboardLocal: " + leaderboardName);

      if (!(leaderboardName in UtilsFB.leaderboardMapLocal)) {
        UtilsFB.leaderboardMapLocal[leaderboardName] = {};
      }

      UtilsFB.leaderboardMapLocal[leaderboardName].playerArray = playerArray;
      UtilsFB.loadPlayerArrayPhoto(UtilsFB.leaderboardMapLocal[leaderboardName].playerArray);
    },
    setLeaderboardLocal: function setLeaderboardLocal(leaderboardName, score) {
      var ret = false;

      if (leaderboardName in UtilsFB.leaderboardMapLocal) {
        var playerArrayLocal = UtilsFB.leaderboardMapLocal[leaderboardName].playerArray;
        var scoreUpdated = false;

        if (playerArrayLocal != null) {
          for (var i = 0; i < playerArrayLocal.length; i++) {
            var playerInfo = playerArrayLocal[i];

            if (playerInfo.isSelf) {
              if (score > playerInfo.score) {
                playerInfo.score = score;
                scoreUpdated = true;
              }

              ret = true;
            }
          }
        }

        if (scoreUpdated) {
          var compare = function compare(play1, play2) {
            var score1 = play1.score;
            var score2 = play2.score;

            if (score1 < score2) {
              return 1;
            } else if (score1 > score2) {
              return -1;
            } else {
              return 0;
            }
          };

          playerArrayLocal.sort(compare);

          for (var _i = 0; _i < playerArrayLocal.length; _i++) {
            playerArrayLocal[_i].rank = _i + 1;
          }
        }
      }

      return ret;
    },
    getPlayerInfoScoreOvertake: function getPlayerInfoScoreOvertake(leaderboardName, scoreBefore, scoreCurrent) {
      var playerOvertaken = [];
      var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          var playerInfo = playerArray[i];
          var score = playerInfo.score;

          if (scoreBefore <= score && score < scoreCurrent) {
            playerOvertaken.push(playerInfo);
          }
        }
      }

      return playerOvertaken;
    },
    getSelfLeaderboardScore: function getSelfLeaderboardScore(leaderboardName) {
      var playerArray = UtilsFB.getLeaderboardLocal(leaderboardName);

      if (playerArray != null) {
        for (var i = 0; i < playerArray.length; i++) {
          var playerInfo = playerArray[i];

          if (playerInfo.isSelf) {
            return playerInfo.score;
          }
        }
      }

      return -1;
    },
    shareAsync: function shareAsync(message, imageBase64) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        FBInstant.shareAsync({
          intent: 'SHARE',
          image: imageBase64,
          text: message,
          data: {
            myReplayData: '...'
          }
        }).then(function () {
          resolve();
        })["catch"](function (error) {
          UtilsFB.debugLog("shareAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    chooseAsync: function chooseAsync(imageBase64, filters) {
      return new Promise(function (resolve, reject) {
        if (typeof FBInstant == 'undefined') {
          reject("FBInstant undefined");
          return;
        }

        filters = filters || [];
        FBInstant.context.chooseAsync({
          filters: filters
        }).then(function () {
          FBInstant.updateAsync({
            action: 'CUSTOM',
            cta: 'Join the Game',
            image: imageBase64,
            text: {
              "default": 'Play with me',
              localizations: {}
            },
            template: 'VILLAGE_INVASION',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH',
            data: {}
          }).then(function () {
            UtilsFB.debugLog("chooseAsync success.");
            resolve();
          })["catch"](function (error) {
            UtilsFB.debugLog("chooseAsync updateAsync error: " + JSON.stringify(error));
            reject(error);
          });
        })["catch"](function (error) {
          UtilsFB.debugLog("chooseAsync error: " + JSON.stringify(error));
          reject(error);
        });
      });
    },
    debugLog: function debugLog(message) {// console.log("[fb]" + message);
    }
  }
});

cc._RF.pop();