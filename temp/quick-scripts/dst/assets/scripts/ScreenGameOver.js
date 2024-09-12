
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenGameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57f64yVe21GxKROflaTRrT6', 'ScreenGameOver');
// scripts/ScreenGameOver.js

"use strict";

var ConstValue = _interopRequireWildcard(require("./ConstValue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ScreenMgr = require('ScreenMgr');

var UtilsCommon = require('UtilsCommon');

var UtilsFB = require('UtilsFB');

var game_scene = require('game_scene');

function base64ToBinary(base64String) {
  var base64Cleaned = base64String.split(',')[1];
  var binaryString = atob(base64Cleaned);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

cc.Class({
  "extends": cc.Component,
  properties: {
    titleNewScore: {
      "default": null,
      type: cc.Node
    },
    labelScore: {
      "default": null,
      type: cc.Label
    },
    labelScoreMax: {
      "default": null,
      type: cc.Label
    },
    screenLeaderboard: {
      "default": null,
      type: require('ScreenLeaderboard')
    },
    btnHome: {
      "default": null,
      type: cc.Button
    },
    btnUpload: {
      "default": null,
      type: cc.Button
    },
    btnPlayAgain: {
      "default": null,
      type: cc.Button
    },
    btnCopyBlobId: {
      "default": null,
      type: cc.Button
    },
    btnCopyId: {
      "default": null,
      type: cc.Button
    },
    loading: {
      "default": null,
      type: cc.Label
    },
    blobId: {
      "default": null,
      type: cc.Label
    },
    SuiId: {
      "default": null,
      type: cc.RichText
    },
    successTips: {
      "default": null,
      type: cc.Label
    },
    errorTips: {
      "default": null,
      type: cc.Label
    },
    blobIdString: "",
    SuiIdString: ""
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onEnable: function onEnable() {
    this.btnHome.node.active = true;
    this.btnUpload.node.active = true;
    this.btnPlayAgain.node.active = true;
    this.labelScore.node.active = true;
    this.loading.node.active = false;
    this.btnCopyBlobId.node.active = false;
    this.btnCopyId.node.active = false; // upload status:

    this.blobId.node.active = false;
    this.SuiId.node.active = false;
    this.successTips.node.active = false;
    this.errorTips.node.active = false;
    var score = game_scene.instance.score; // let scoreMAx = UtilsFB.getSelfLeaderboardScore(ConstValue.LEADERBOARD_SOCRE_WORLD);

    var scoreMAx = window.localStorage.getItem("maxScore") ? parseInt(window.localStorage.getItem("maxScore")) : 0;
    this.titleNewScore.active = score > 0 && score > scoreMAx;
    scoreMAx = Math.max(scoreMAx, score);
    window.localStorage.setItem("maxScore", scoreMAx);
    this.labelScore.string = "" + score;
    this.labelScoreMax.string = "Max Score: " + scoreMAx;
    this.screenLeaderboard.clearLeaderboard();
    UtilsFB.setLeaderboardAsync(ConstValue.LEADERBOARD_SOCRE_WORLD, this.score).then(function () {
      this.screenLeaderboard.showLeaderboard(ConstValue.LEADERBOARD_SOCRE_WORLD);
    }.bind(this))["catch"](function (error) {
      console.log("setleaderboardasync error: " + JSON.stringify(error));
    });
  },
  onBtnClickHome: function onBtnClickHome() {
    ScreenMgr.instance.showScreen('ScreenHome');
    this.node.active = false;
  },
  onBtnClickShare: function onBtnClickShare() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64)["catch"](function (error) {});
  },
  onBtnClickPlayAgain: function onBtnClickPlayAgain() {
    game_scene.instance.onGameStart(true, false);
  },
  onBtnClickContinue: function onBtnClickContinue() {
    var imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
    UtilsFB.chooseAsync(imageBase64).then(function () {
      game_scene.instance.onGameStart(true, true);
    })["catch"](function (error) {});
  },
  onBtnClickUpload: function onBtnClickUpload() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var imageBase64, res, data, uploadNum, errorData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.errorTips.node.active = false;
              imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
              _this.btnHome.node.active = false;
              _this.btnUpload.node.active = false;
              _this.btnPlayAgain.node.active = false;
              _this.loading.node.active = true;
              _context.next = 8;
              return fetch('https://publisher-devnet.walrus.space/v1/store?epochs=1', {
                method: 'PUT',
                body: base64ToBinary(imageBase64)
              });

            case 8:
              res = _context.sent;

              if (!(res.status === 200)) {
                _context.next = 31;
                break;
              }

              _context.next = 12;
              return res.json();

            case 12:
              data = _context.sent;
              console.log(data);
              _this.successTips.string = 'Upload Success!';
              _this.blobId.string = 'Blodid: ' + data.newlyCreated.blobObject.blobId;
              _this.SuiId.string = 'Id: ' + data.newlyCreated.blobObject.id;
              _this.blobIdString = data.newlyCreated.blobObject.blobId;
              _this.SuiIdString = data.newlyCreated.blobObject.id;
              _this.blobId.node.active = true;
              _this.SuiId.node.active = true;
              _this.successTips.node.active = true;
              _this.loading.node.active = false;
              _this.btnHome.node.active = true;
              _this.btnPlayAgain.node.active = true;
              _this.btnCopyBlobId.node.active = true;
              _this.btnCopyId.node.active = true;
              uploadNum = window.localStorage.getItem("uploadNum") ? window.localStorage.getItem("uploadNum") : 0;
              window.localStorage.setItem("uploadNum", parseInt(uploadNum) + 1);
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

              _context.next = 41;
              break;

            case 31:
              _this.errorTips.node.active = true;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
              _this.loading.node.active = false;
              console.error('Error:', res.status);
              _context.next = 39;
              return res.text();

            case 39:
              errorData = _context.sent;
              console.error('Error details:', errorData);

            case 41:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onBtnCopyBlobIdClick: function onBtnCopyBlobIdClick() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              window.navigator.clipboard.writeText(_this2.blobIdString).then(function () {
                _this2.successTips.string = 'Copy Blob ID Success!';
              })["catch"](function (e) {
                console.log(e);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onBtnCopyIdClick: function onBtnCopyIdClick() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              window.navigator.clipboard.writeText(_this3.SuiIdString).then(function () {
                _this3.successTips.string = 'Copy ID Success !';
              })["catch"](function (e) {
                console.log(e);
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkdhbWVPdmVyLmpzIl0sIm5hbWVzIjpbIlNjcmVlbk1nciIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlV0aWxzRkIiLCJnYW1lX3NjZW5lIiwiYmFzZTY0VG9CaW5hcnkiLCJiYXNlNjRTdHJpbmciLCJiYXNlNjRDbGVhbmVkIiwic3BsaXQiLCJiaW5hcnlTdHJpbmciLCJhdG9iIiwibGVuIiwibGVuZ3RoIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJidWZmZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTmV3U2NvcmUiLCJ0eXBlIiwiTm9kZSIsImxhYmVsU2NvcmUiLCJMYWJlbCIsImxhYmVsU2NvcmVNYXgiLCJzY3JlZW5MZWFkZXJib2FyZCIsImJ0bkhvbWUiLCJCdXR0b24iLCJidG5VcGxvYWQiLCJidG5QbGF5QWdhaW4iLCJidG5Db3B5QmxvYklkIiwiYnRuQ29weUlkIiwibG9hZGluZyIsImJsb2JJZCIsIlN1aUlkIiwiUmljaFRleHQiLCJzdWNjZXNzVGlwcyIsImVycm9yVGlwcyIsImJsb2JJZFN0cmluZyIsIlN1aUlkU3RyaW5nIiwic3RhcnQiLCJvbkVuYWJsZSIsIm5vZGUiLCJhY3RpdmUiLCJzY29yZSIsImluc3RhbmNlIiwic2NvcmVNQXgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4Iiwic2V0SXRlbSIsInN0cmluZyIsImNsZWFyTGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZEFzeW5jIiwiQ29uc3RWYWx1ZSIsIkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEIiwidGhlbiIsInNob3dMZWFkZXJib2FyZCIsImJpbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwib25CdG5DbGlja0hvbWUiLCJzaG93U2NyZWVuIiwib25CdG5DbGlja1NoYXJlIiwiaW1hZ2VCYXNlNjQiLCJnZXRTY3JlZW5zaG90QmFzZTY0IiwiZ2V0Q2FtZXJhTWFpbiIsImNob29zZUFzeW5jIiwib25CdG5DbGlja1BsYXlBZ2FpbiIsIm9uR2FtZVN0YXJ0Iiwib25CdG5DbGlja0NvbnRpbnVlIiwib25CdG5DbGlja1VwbG9hZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibmV3bHlDcmVhdGVkIiwiYmxvYk9iamVjdCIsImlkIiwidXBsb2FkTnVtIiwidGV4dCIsImVycm9yRGF0YSIsIm9uQnRuQ29weUJsb2JJZENsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsIm9uQnRuQ29weUlkQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OzsrQ0FSQTs7Ozs7O0FBVUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFFQSxTQUFTSSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztFQUNsQyxJQUFNQyxhQUFhLEdBQUdELFlBQVksQ0FBQ0UsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUF0QjtFQUVBLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDSCxhQUFELENBQXpCO0VBQ0EsSUFBTUksR0FBRyxHQUFHRixZQUFZLENBQUNHLE1BQXpCO0VBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLFVBQUosQ0FBZUgsR0FBZixDQUFkOztFQUVBLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osR0FBcEIsRUFBeUJJLENBQUMsRUFBMUIsRUFBOEI7SUFDMUJGLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLEdBQVdOLFlBQVksQ0FBQ08sVUFBYixDQUF3QkQsQ0FBeEIsQ0FBWDtFQUNIOztFQUVELE9BQU9GLEtBQUssQ0FBQ0ksTUFBYjtBQUNIOztBQUVEQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZFLENBRFA7SUFLUkMsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUREO01BRVJGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZELENBTEo7SUFTUkMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhKLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZFLENBVFA7SUFhUkUsaUJBQWlCLEVBQUU7TUFDZixXQUFTLElBRE07TUFFZkwsSUFBSSxFQUFFdEIsT0FBTyxDQUFDLG1CQUFEO0lBRkUsQ0FiWDtJQWlCUjRCLE9BQU8sRUFBRTtNQUNMLFdBQVMsSUFESjtNQUVMTixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7SUFGSixDQWpCRDtJQXFCUkMsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQURGO01BRVBSLElBQUksRUFBRUwsRUFBRSxDQUFDWTtJQUZGLENBckJIO0lBeUJSRSxZQUFZLEVBQUU7TUFDVixXQUFTLElBREM7TUFFVlQsSUFBSSxFQUFFTCxFQUFFLENBQUNZO0lBRkMsQ0F6Qk47SUE2QlJHLGFBQWEsRUFBRTtNQUNYLFdBQVMsSUFERTtNQUVYVixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7SUFGRSxDQTdCUDtJQWlDUkksU0FBUyxFQUFFO01BQ1AsV0FBUyxJQURGO01BRVBYLElBQUksRUFBRUwsRUFBRSxDQUFDWTtJQUZGLENBakNIO0lBcUNSSyxPQUFPLEVBQUU7TUFDTCxXQUFTLElBREo7TUFFTFosSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkosQ0FyQ0Q7SUF5Q1JVLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFETDtNQUVKYixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGTCxDQXpDQTtJQTZDUlcsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhkLElBQUksRUFBRUwsRUFBRSxDQUFDb0I7SUFGTixDQTdDQztJQWlEUkMsV0FBVyxFQUFFO01BQ1QsV0FBUyxJQURBO01BRVRoQixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGQSxDQWpETDtJQXFEUmMsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQURGO01BRVBqQixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGRixDQXJESDtJQXlEUmUsWUFBWSxFQUFFLEVBekROO0lBMERSQyxXQUFXLEVBQUU7RUExREwsQ0FIUDtFQWdFTDtFQUVBO0VBRUFDLEtBcEVLLG1CQW9FRyxDQUVQLENBdEVJO0VBd0VMO0VBRUFDLFFBMUVLLHNCQTBFTTtJQUNQLEtBQUtmLE9BQUwsQ0FBYWdCLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLElBQTNCO0lBQ0EsS0FBS2YsU0FBTCxDQUFlYyxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixJQUE3QjtJQUNBLEtBQUtkLFlBQUwsQ0FBa0JhLElBQWxCLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQztJQUNBLEtBQUtyQixVQUFMLENBQWdCb0IsSUFBaEIsQ0FBcUJDLE1BQXJCLEdBQThCLElBQTlCO0lBQ0EsS0FBS1gsT0FBTCxDQUFhVSxJQUFiLENBQWtCQyxNQUFsQixHQUEyQixLQUEzQjtJQUNBLEtBQUtiLGFBQUwsQ0FBbUJZLElBQW5CLENBQXdCQyxNQUF4QixHQUFpQyxLQUFqQztJQUNBLEtBQUtaLFNBQUwsQ0FBZVcsSUFBZixDQUFvQkMsTUFBcEIsR0FBNkIsS0FBN0IsQ0FQTyxDQVFQOztJQUNBLEtBQUtWLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsS0FBMUI7SUFDQSxLQUFLVCxLQUFMLENBQVdRLElBQVgsQ0FBZ0JDLE1BQWhCLEdBQXlCLEtBQXpCO0lBQ0EsS0FBS1AsV0FBTCxDQUFpQk0sSUFBakIsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0lBQ0EsS0FBS04sU0FBTCxDQUFlSyxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixLQUE3QjtJQUVBLElBQUlDLEtBQUssR0FBRzNDLFVBQVUsQ0FBQzRDLFFBQVgsQ0FBb0JELEtBQWhDLENBZE8sQ0FlUDs7SUFDQSxJQUFJRSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsSUFBMENDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixVQUE1QixDQUFELENBQWxELEdBQThGLENBQTdHO0lBRUEsS0FBSzlCLGFBQUwsQ0FBbUJ3QixNQUFuQixHQUE0QkMsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHRSxRQUFqRDtJQUNBQSxRQUFRLEdBQUdLLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixRQUFULEVBQW1CRixLQUFuQixDQUFYO0lBQ0FHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkssT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NQLFFBQXhDO0lBRUEsS0FBS3hCLFVBQUwsQ0FBZ0JnQyxNQUFoQixHQUF5QixLQUFLVixLQUE5QjtJQUNBLEtBQUtwQixhQUFMLENBQW1COEIsTUFBbkIsR0FBNEIsZ0JBQWdCUixRQUE1QztJQUVBLEtBQUtyQixpQkFBTCxDQUF1QjhCLGdCQUF2QjtJQUNBdkQsT0FBTyxDQUFDd0QsbUJBQVIsQ0FBNEJDLFVBQVUsQ0FBQ0MsdUJBQXZDLEVBQWdFLEtBQUtkLEtBQXJFLEVBQ0tlLElBREwsQ0FDVSxZQUFZO01BQ2QsS0FBS2xDLGlCQUFMLENBQXVCbUMsZUFBdkIsQ0FBdUNILFVBQVUsQ0FBQ0MsdUJBQWxEO0lBQ0gsQ0FGSyxDQUVKRyxJQUZJLENBRUMsSUFGRCxDQURWLFdBSVcsVUFBQUMsS0FBSyxFQUFJO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFnQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsQ0FBNUM7SUFDSCxDQU5MO0VBT0gsQ0EzR0k7RUE2R0xLLGNBN0dLLDRCQTZHWTtJQUNidEUsU0FBUyxDQUFDZ0QsUUFBVixDQUFtQnVCLFVBQW5CLENBQThCLFlBQTlCO0lBQ0EsS0FBSzFCLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtFQUNILENBaEhJO0VBa0hMMEIsZUFsSEssNkJBa0hhO0lBQ2QsSUFBSUMsV0FBVyxHQUFHdkUsV0FBVyxDQUFDd0UsbUJBQVosQ0FBZ0N4RSxXQUFXLENBQUN5RSxhQUFaLEVBQWhDLENBQWxCO0lBQ0F4RSxPQUFPLENBQUN5RSxXQUFSLENBQW9CSCxXQUFwQixXQUF1QyxVQUFBUixLQUFLLEVBQUksQ0FBRyxDQUFuRDtFQUNILENBckhJO0VBdUhMWSxtQkF2SEssaUNBdUhpQjtJQUNsQnpFLFVBQVUsQ0FBQzRDLFFBQVgsQ0FBb0I4QixXQUFwQixDQUFnQyxJQUFoQyxFQUFzQyxLQUF0QztFQUNILENBekhJO0VBMkhMQyxrQkEzSEssZ0NBMkhnQjtJQUNqQixJQUFJTixXQUFXLEdBQUd2RSxXQUFXLENBQUN3RSxtQkFBWixDQUFnQ3hFLFdBQVcsQ0FBQ3lFLGFBQVosRUFBaEMsQ0FBbEI7SUFDQXhFLE9BQU8sQ0FBQ3lFLFdBQVIsQ0FBb0JILFdBQXBCLEVBQ0tYLElBREwsQ0FDVSxZQUFZO01BQ2QxRCxVQUFVLENBQUM0QyxRQUFYLENBQW9COEIsV0FBcEIsQ0FBZ0MsSUFBaEMsRUFBc0MsSUFBdEM7SUFDSCxDQUhMLFdBSVcsVUFBQWIsS0FBSyxFQUFJLENBQUcsQ0FKdkI7RUFLSCxDQWxJSTtFQW9JQ2UsZ0JBcElELDhCQW9Jb0I7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDckIsS0FBSSxDQUFDeEMsU0FBTCxDQUFlSyxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixLQUE3QjtjQUNJMkIsV0FGaUIsR0FFSHZFLFdBQVcsQ0FBQ3dFLG1CQUFaLENBQWdDeEUsV0FBVyxDQUFDeUUsYUFBWixFQUFoQyxDQUZHO2NBSXJCLEtBQUksQ0FBQzlDLE9BQUwsQ0FBYWdCLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO2NBQ0EsS0FBSSxDQUFDZixTQUFMLENBQWVjLElBQWYsQ0FBb0JDLE1BQXBCLEdBQTZCLEtBQTdCO2NBQ0EsS0FBSSxDQUFDZCxZQUFMLENBQWtCYSxJQUFsQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBaEM7Y0FDQSxLQUFJLENBQUNYLE9BQUwsQ0FBYVUsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsSUFBM0I7Y0FQcUI7Y0FBQSxPQVVIbUMsS0FBSyxDQUFDLHlEQUFELEVBQTREO2dCQUMvRUMsTUFBTSxFQUFFLEtBRHVFO2dCQUUvRUMsSUFBSSxFQUFFOUUsY0FBYyxDQUFDb0UsV0FBRDtjQUYyRCxDQUE1RCxDQVZGOztZQUFBO2NBVWZXLEdBVmU7O2NBQUEsTUFjakJBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBZEU7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBLE9BZUVELEdBQUcsQ0FBQ0UsSUFBSixFQWZGOztZQUFBO2NBZVhDLElBZlc7Y0FnQmpCckIsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixJQUFaO2NBQ0EsS0FBSSxDQUFDaEQsV0FBTCxDQUFpQmtCLE1BQWpCLEdBQTBCLGlCQUExQjtjQUNBLEtBQUksQ0FBQ3JCLE1BQUwsQ0FBWXFCLE1BQVosR0FBcUIsYUFBYThCLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsVUFBbEIsQ0FBNkJyRCxNQUEvRDtjQUNBLEtBQUksQ0FBQ0MsS0FBTCxDQUFXb0IsTUFBWCxHQUFvQixTQUFTOEIsSUFBSSxDQUFDQyxZQUFMLENBQWtCQyxVQUFsQixDQUE2QkMsRUFBMUQ7Y0FDQSxLQUFJLENBQUNqRCxZQUFMLEdBQW9COEMsSUFBSSxDQUFDQyxZQUFMLENBQWtCQyxVQUFsQixDQUE2QnJELE1BQWpEO2NBQ0EsS0FBSSxDQUFDTSxXQUFMLEdBQW1CNkMsSUFBSSxDQUFDQyxZQUFMLENBQWtCQyxVQUFsQixDQUE2QkMsRUFBaEQ7Y0FDQSxLQUFJLENBQUN0RCxNQUFMLENBQVlTLElBQVosQ0FBaUJDLE1BQWpCLEdBQTBCLElBQTFCO2NBQ0EsS0FBSSxDQUFDVCxLQUFMLENBQVdRLElBQVgsQ0FBZ0JDLE1BQWhCLEdBQXlCLElBQXpCO2NBQ0EsS0FBSSxDQUFDUCxXQUFMLENBQWlCTSxJQUFqQixDQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7Y0FDQSxLQUFJLENBQUNYLE9BQUwsQ0FBYVUsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsS0FBM0I7Y0FDQSxLQUFJLENBQUNqQixPQUFMLENBQWFnQixJQUFiLENBQWtCQyxNQUFsQixHQUEyQixJQUEzQjtjQUNBLEtBQUksQ0FBQ2QsWUFBTCxDQUFrQmEsSUFBbEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDO2NBRUEsS0FBSSxDQUFDYixhQUFMLENBQW1CWSxJQUFuQixDQUF3QkMsTUFBeEIsR0FBaUMsSUFBakM7Y0FDQSxLQUFJLENBQUNaLFNBQUwsQ0FBZVcsSUFBZixDQUFvQkMsTUFBcEIsR0FBNkIsSUFBN0I7Y0FFSTZDLFNBaENhLEdBZ0NEekMsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixJQUEyQ0YsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQUEzQyxHQUFzRixDQWhDckY7Y0FpQ2pCRixNQUFNLENBQUNDLFlBQVAsQ0FBb0JLLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDSCxRQUFRLENBQUNzQyxTQUFELENBQVIsR0FBc0IsQ0FBL0Q7Y0FDQTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztjQWxENkI7Y0FBQTs7WUFBQTtjQW9EakIsS0FBSSxDQUFDbkQsU0FBTCxDQUFlSyxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixJQUE3QjtjQUVBLEtBQUksQ0FBQ2pCLE9BQUwsQ0FBYWdCLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLElBQTNCO2NBQ0EsS0FBSSxDQUFDZixTQUFMLENBQWVjLElBQWYsQ0FBb0JDLE1BQXBCLEdBQTZCLElBQTdCO2NBQ0EsS0FBSSxDQUFDZCxZQUFMLENBQWtCYSxJQUFsQixDQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEM7Y0FDQSxLQUFJLENBQUNYLE9BQUwsQ0FBYVUsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsS0FBM0I7Y0FFQW9CLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLFFBQWQsRUFBd0JtQixHQUFHLENBQUNDLE1BQTVCO2NBM0RpQjtjQUFBLE9BNERPRCxHQUFHLENBQUNRLElBQUosRUE1RFA7O1lBQUE7Y0E0RFhDLFNBNURXO2NBNkRqQjNCLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLGdCQUFkLEVBQWdDNEIsU0FBaEM7O1lBN0RpQjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQStEeEIsQ0FuTUk7RUFxTUNDLG9CQXJNRCxrQ0FxTXdCO0lBQUE7O0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUN6QjVDLE1BQU0sQ0FBQzZDLFNBQVAsQ0FBaUJDLFNBQWpCLENBQ0tDLFNBREwsQ0FDZSxNQUFJLENBQUN4RCxZQURwQixFQUVLcUIsSUFGTCxDQUVVLFlBQU07Z0JBQ1IsTUFBSSxDQUFDdkIsV0FBTCxDQUFpQmtCLE1BQWpCLEdBQTBCLHVCQUExQjtjQUNILENBSkwsV0FLVyxVQUFDeUMsQ0FBRCxFQUFPO2dCQUNWaEMsT0FBTyxDQUFDQyxHQUFSLENBQVkrQixDQUFaO2NBQ0gsQ0FQTDs7WUFEeUI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFTNUIsQ0E5TUk7RUFnTkNDLGdCQWhORCw4QkFnTm9CO0lBQUE7O0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNyQmpELE1BQU0sQ0FBQzZDLFNBQVAsQ0FBaUJDLFNBQWpCLENBQ0tDLFNBREwsQ0FDZSxNQUFJLENBQUN2RCxXQURwQixFQUVLb0IsSUFGTCxDQUVVLFlBQU07Z0JBQ1IsTUFBSSxDQUFDdkIsV0FBTCxDQUFpQmtCLE1BQWpCLEdBQTBCLG1CQUExQjtjQUNILENBSkwsV0FLVyxVQUFDeUMsQ0FBRCxFQUFPO2dCQUNWaEMsT0FBTyxDQUFDQyxHQUFSLENBQVkrQixDQUFaO2NBQ0gsQ0FQTDs7WUFEcUI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFTeEI7QUF6TkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmltcG9ydCAqIGFzIENvbnN0VmFsdWUgZnJvbSAnLi9Db25zdFZhbHVlJztcblxudmFyIFNjcmVlbk1nciA9IHJlcXVpcmUoJ1NjcmVlbk1ncicpO1xudmFyIFV0aWxzQ29tbW9uID0gcmVxdWlyZSgnVXRpbHNDb21tb24nKTtcbnZhciBVdGlsc0ZCID0gcmVxdWlyZSgnVXRpbHNGQicpO1xudmFyIGdhbWVfc2NlbmUgPSByZXF1aXJlKCdnYW1lX3NjZW5lJyk7XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQmluYXJ5KGJhc2U2NFN0cmluZykge1xuICAgIGNvbnN0IGJhc2U2NENsZWFuZWQgPSBiYXNlNjRTdHJpbmcuc3BsaXQoJywnKVsxXTtcblxuICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IGF0b2IoYmFzZTY0Q2xlYW5lZCk7XG4gICAgY29uc3QgbGVuID0gYmluYXJ5U3RyaW5nLmxlbmd0aDtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbn1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGl0bGVOZXdTY29yZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsU2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxTY29yZU1heDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBzY3JlZW5MZWFkZXJib2FyZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ1NjcmVlbkxlYWRlcmJvYXJkJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bkhvbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnRuVXBsb2FkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blBsYXlBZ2Fpbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBidG5Db3B5QmxvYklkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bkNvcHlJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGJsb2JJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBTdWlJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlJpY2hUZXh0LFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzVGlwczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvclRpcHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICAgICAgYmxvYklkU3RyaW5nOiBcIlwiLFxuICAgICAgICBTdWlJZFN0cmluZzogXCJcIlxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuVXBsb2FkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsU2NvcmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5Db3B5QmxvYklkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuQ29weUlkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHVwbG9hZCBzdGF0dXM6XG4gICAgICAgIHRoaXMuYmxvYklkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3VpSWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWNjZXNzVGlwcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yVGlwcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBzY29yZSA9IGdhbWVfc2NlbmUuaW5zdGFuY2Uuc2NvcmU7XG4gICAgICAgIC8vIGxldCBzY29yZU1BeCA9IFV0aWxzRkIuZ2V0U2VsZkxlYWRlcmJvYXJkU2NvcmUoQ29uc3RWYWx1ZS5MRUFERVJCT0FSRF9TT0NSRV9XT1JMRCk7XG4gICAgICAgIGxldCBzY29yZU1BeCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1heFNjb3JlXCIpID8gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWF4U2NvcmVcIikpIDogMFxuXG4gICAgICAgIHRoaXMudGl0bGVOZXdTY29yZS5hY3RpdmUgPSBzY29yZSA+IDAgJiYgc2NvcmUgPiBzY29yZU1BeDtcbiAgICAgICAgc2NvcmVNQXggPSBNYXRoLm1heChzY29yZU1BeCwgc2NvcmUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYXhTY29yZVwiLCBzY29yZU1BeClcblxuICAgICAgICB0aGlzLmxhYmVsU2NvcmUuc3RyaW5nID0gXCJcIiArIHNjb3JlO1xuICAgICAgICB0aGlzLmxhYmVsU2NvcmVNYXguc3RyaW5nID0gXCJNYXggU2NvcmU6IFwiICsgc2NvcmVNQXg7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5MZWFkZXJib2FyZC5jbGVhckxlYWRlcmJvYXJkKCk7XG4gICAgICAgIFV0aWxzRkIuc2V0TGVhZGVyYm9hcmRBc3luYyhDb25zdFZhbHVlLkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxELCB0aGlzLnNjb3JlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuTGVhZGVyYm9hcmQuc2hvd0xlYWRlcmJvYXJkKENvbnN0VmFsdWUuTEVBREVSQk9BUkRfU09DUkVfV09STEQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldGxlYWRlcmJvYXJkYXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrSG9tZSgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkhvbWUnKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrU2hhcmUoKSB7XG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcbiAgICAgICAgVXRpbHNGQi5jaG9vc2VBc3luYyhpbWFnZUJhc2U2NCkuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja1BsYXlBZ2FpbigpIHtcbiAgICAgICAgZ2FtZV9zY2VuZS5pbnN0YW5jZS5vbkdhbWVTdGFydCh0cnVlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tDb250aW51ZSgpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdhbWVfc2NlbmUuaW5zdGFuY2Uub25HYW1lU3RhcnQodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIG9uQnRuQ2xpY2tVcGxvYWQoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcblxuICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3B1Ymxpc2hlci1kZXZuZXQud2FscnVzLnNwYWNlL3YxL3N0b3JlP2Vwb2Nocz0xJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IGJhc2U2NFRvQmluYXJ5KGltYWdlQmFzZTY0KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc1RpcHMuc3RyaW5nID0gJ1VwbG9hZCBTdWNjZXNzISdcbiAgICAgICAgICAgIHRoaXMuYmxvYklkLnN0cmluZyA9ICdCbG9kaWQ6ICcgKyBkYXRhLm5ld2x5Q3JlYXRlZC5ibG9iT2JqZWN0LmJsb2JJZDtcbiAgICAgICAgICAgIHRoaXMuU3VpSWQuc3RyaW5nID0gJ0lkOiAnICsgZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5pZDtcbiAgICAgICAgICAgIHRoaXMuYmxvYklkU3RyaW5nID0gZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5ibG9iSWQ7XG4gICAgICAgICAgICB0aGlzLlN1aUlkU3RyaW5nID0gZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5pZDtcbiAgICAgICAgICAgIHRoaXMuYmxvYklkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuU3VpSWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzVGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blBsYXlBZ2Fpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuYnRuQ29weUJsb2JJZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bkNvcHlJZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciB1cGxvYWROdW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1cGxvYWROdW1cIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1cGxvYWROdW1cIikgOiAwXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1cGxvYWROdW1cIiwgcGFyc2VJbnQodXBsb2FkTnVtKSArIDEpXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3bHlDcmVhdGVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzB4MjBjNmEyOTE1MDQ3NDc5Zjc5MjBmMTgzY2JjNTk1M2I3MDhjZmNjNDExOGQ1N2NkMzNlMjM0NGE5M2Q2ZDAyYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWRFcG9jaDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2JJZDogJ0hQVER2MURHN3otaWtEVUpBMHV0WWZMTzAwb011REgzeHo4Rm9rMmExUEknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMzk2MzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcmFzdXJlQ29kZVR5cGU6ICdSZWRTdHVmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJ0aWZpZWRFcG9jaDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2U6IFtPYmplY3RdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFNpemU6IDY1MDIzMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29zdDogMzE3NTAwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blVwbG9hZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blBsYXlBZ2Fpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0YWlsczonLCBlcnJvckRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIG9uQnRuQ29weUJsb2JJZENsaWNrKCkge1xuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgICAgICAgLndyaXRlVGV4dCh0aGlzLmJsb2JJZFN0cmluZylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NUaXBzLnN0cmluZyA9ICdDb3B5IEJsb2IgSUQgU3VjY2VzcyEnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgb25CdG5Db3B5SWRDbGljaygpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgICAgICAgIC53cml0ZVRleHQodGhpcy5TdWlJZFN0cmluZylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NUaXBzLnN0cmluZyA9ICdDb3B5IElEIFN1Y2Nlc3MgISdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl19