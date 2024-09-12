
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
    }
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
    this.loading.node.active = false; // upload status:

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
                _context.next = 27;
                break;
              }

              _context.next = 12;
              return res.json();

            case 12:
              data = _context.sent;
              console.log(data);
              _this.blobId.string = 'Blodid: ' + data.newlyCreated.blobObject.blobId;
              _this.SuiId.string = 'Id: ' + data.newlyCreated.blobObject.id;
              _this.blobId.node.active = true;
              _this.SuiId.node.active = true;
              _this.successTips.node.active = true;
              _this.loading.node.active = false;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
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

              _context.next = 37;
              break;

            case 27:
              _this.errorTips.node.active = true;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
              _this.loading.node.active = false;
              console.error('Error:', res.status);
              _context.next = 35;
              return res.text();

            case 35:
              errorData = _context.sent;
              console.error('Error details:', errorData);

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkdhbWVPdmVyLmpzIl0sIm5hbWVzIjpbIlNjcmVlbk1nciIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlV0aWxzRkIiLCJnYW1lX3NjZW5lIiwiYmFzZTY0VG9CaW5hcnkiLCJiYXNlNjRTdHJpbmciLCJiYXNlNjRDbGVhbmVkIiwic3BsaXQiLCJiaW5hcnlTdHJpbmciLCJhdG9iIiwibGVuIiwibGVuZ3RoIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJidWZmZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTmV3U2NvcmUiLCJ0eXBlIiwiTm9kZSIsImxhYmVsU2NvcmUiLCJMYWJlbCIsImxhYmVsU2NvcmVNYXgiLCJzY3JlZW5MZWFkZXJib2FyZCIsImJ0bkhvbWUiLCJCdXR0b24iLCJidG5VcGxvYWQiLCJidG5QbGF5QWdhaW4iLCJsb2FkaW5nIiwiYmxvYklkIiwiU3VpSWQiLCJSaWNoVGV4dCIsInN1Y2Nlc3NUaXBzIiwiZXJyb3JUaXBzIiwic3RhcnQiLCJvbkVuYWJsZSIsIm5vZGUiLCJhY3RpdmUiLCJzY29yZSIsImluc3RhbmNlIiwic2NvcmVNQXgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4Iiwic2V0SXRlbSIsInN0cmluZyIsImNsZWFyTGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZEFzeW5jIiwiQ29uc3RWYWx1ZSIsIkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEIiwidGhlbiIsInNob3dMZWFkZXJib2FyZCIsImJpbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwib25CdG5DbGlja0hvbWUiLCJzaG93U2NyZWVuIiwib25CdG5DbGlja1NoYXJlIiwiaW1hZ2VCYXNlNjQiLCJnZXRTY3JlZW5zaG90QmFzZTY0IiwiZ2V0Q2FtZXJhTWFpbiIsImNob29zZUFzeW5jIiwib25CdG5DbGlja1BsYXlBZ2FpbiIsIm9uR2FtZVN0YXJ0Iiwib25CdG5DbGlja0NvbnRpbnVlIiwib25CdG5DbGlja1VwbG9hZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibmV3bHlDcmVhdGVkIiwiYmxvYk9iamVjdCIsImlkIiwidXBsb2FkTnVtIiwidGV4dCIsImVycm9yRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OytDQVJBOzs7Ozs7QUFVQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBLFNBQVNJLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0VBQ2xDLElBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFDRSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQXRCO0VBRUEsSUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNILGFBQUQsQ0FBekI7RUFDQSxJQUFNSSxHQUFHLEdBQUdGLFlBQVksQ0FBQ0csTUFBekI7RUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlSCxHQUFmLENBQWQ7O0VBRUEsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixHQUFwQixFQUF5QkksQ0FBQyxFQUExQixFQUE4QjtJQUMxQkYsS0FBSyxDQUFDRSxDQUFELENBQUwsR0FBV04sWUFBWSxDQUFDTyxVQUFiLENBQXdCRCxDQUF4QixDQUFYO0VBQ0g7O0VBRUQsT0FBT0YsS0FBSyxDQUFDSSxNQUFiO0FBQ0g7O0FBRURDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Y0E3QzZCO2NBQUE7O1lBQUE7Y0ErQ2pCLEtBQUksQ0FBQ2pELFNBQUwsQ0FBZUcsSUFBZixDQUFvQkMsTUFBcEIsR0FBNkIsSUFBN0I7Y0FFQSxLQUFJLENBQUNiLE9BQUwsQ0FBYVksSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsSUFBM0I7Y0FDQSxLQUFJLENBQUNYLFNBQUwsQ0FBZVUsSUFBZixDQUFvQkMsTUFBcEIsR0FBNkIsSUFBN0I7Y0FDQSxLQUFJLENBQUNWLFlBQUwsQ0FBa0JTLElBQWxCLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQztjQUNBLEtBQUksQ0FBQ1QsT0FBTCxDQUFhUSxJQUFiLENBQWtCQyxNQUFsQixHQUEyQixLQUEzQjtjQUVBb0IsT0FBTyxDQUFDRCxLQUFSLENBQWMsUUFBZCxFQUF3Qm1CLEdBQUcsQ0FBQ0MsTUFBNUI7Y0F0RGlCO2NBQUEsT0F1RE9ELEdBQUcsQ0FBQ1EsSUFBSixFQXZEUDs7WUFBQTtjQXVEWEMsU0F2RFc7Y0F3RGpCM0IsT0FBTyxDQUFDRCxLQUFSLENBQWMsZ0JBQWQsRUFBZ0M0QixTQUFoQzs7WUF4RGlCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBMER4QjtBQXRMSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuaW1wb3J0ICogYXMgQ29uc3RWYWx1ZSBmcm9tICcuL0NvbnN0VmFsdWUnO1xuXG52YXIgU2NyZWVuTWdyID0gcmVxdWlyZSgnU2NyZWVuTWdyJyk7XG52YXIgVXRpbHNDb21tb24gPSByZXF1aXJlKCdVdGlsc0NvbW1vbicpO1xudmFyIFV0aWxzRkIgPSByZXF1aXJlKCdVdGlsc0ZCJyk7XG52YXIgZ2FtZV9zY2VuZSA9IHJlcXVpcmUoJ2dhbWVfc2NlbmUnKTtcblxuZnVuY3Rpb24gYmFzZTY0VG9CaW5hcnkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgYmFzZTY0Q2xlYW5lZCA9IGJhc2U2NFN0cmluZy5zcGxpdCgnLCcpWzFdO1xuXG4gICAgY29uc3QgYmluYXJ5U3RyaW5nID0gYXRvYihiYXNlNjRDbGVhbmVkKTtcbiAgICBjb25zdCBsZW4gPSBiaW5hcnlTdHJpbmcubGVuZ3RoO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xufVxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZU5ld1Njb3JlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgfSxcblxuICAgICAgICBsYWJlbFNjb3JlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGFiZWxTY29yZU1heDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNjcmVlbkxlYWRlcmJvYXJkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogcmVxdWlyZSgnU2NyZWVuTGVhZGVyYm9hcmQnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBidG5Ib21lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blVwbG9hZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBidG5QbGF5QWdhaW46IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBibG9iSWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICAgICAgU3VpSWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5SaWNoVGV4dCxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2Vzc1RpcHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JUaXBzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0blVwbG9hZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuUGxheUFnYWluLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYWJlbFNjb3JlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHVwbG9hZCBzdGF0dXM6XG4gICAgICAgIHRoaXMuYmxvYklkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3VpSWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWNjZXNzVGlwcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yVGlwcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBzY29yZSA9IGdhbWVfc2NlbmUuaW5zdGFuY2Uuc2NvcmU7XG4gICAgICAgIC8vIGxldCBzY29yZU1BeCA9IFV0aWxzRkIuZ2V0U2VsZkxlYWRlcmJvYXJkU2NvcmUoQ29uc3RWYWx1ZS5MRUFERVJCT0FSRF9TT0NSRV9XT1JMRCk7XG4gICAgICAgIGxldCBzY29yZU1BeCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1heFNjb3JlXCIpID8gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWF4U2NvcmVcIikpIDogMFxuXG4gICAgICAgIHRoaXMudGl0bGVOZXdTY29yZS5hY3RpdmUgPSBzY29yZSA+IDAgJiYgc2NvcmUgPiBzY29yZU1BeDtcbiAgICAgICAgc2NvcmVNQXggPSBNYXRoLm1heChzY29yZU1BeCwgc2NvcmUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYXhTY29yZVwiLCBzY29yZU1BeClcblxuICAgICAgICB0aGlzLmxhYmVsU2NvcmUuc3RyaW5nID0gXCJcIiArIHNjb3JlO1xuICAgICAgICB0aGlzLmxhYmVsU2NvcmVNYXguc3RyaW5nID0gXCJNYXggU2NvcmU6IFwiICsgc2NvcmVNQXg7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5MZWFkZXJib2FyZC5jbGVhckxlYWRlcmJvYXJkKCk7XG4gICAgICAgIFV0aWxzRkIuc2V0TGVhZGVyYm9hcmRBc3luYyhDb25zdFZhbHVlLkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxELCB0aGlzLnNjb3JlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuTGVhZGVyYm9hcmQuc2hvd0xlYWRlcmJvYXJkKENvbnN0VmFsdWUuTEVBREVSQk9BUkRfU09DUkVfV09STEQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldGxlYWRlcmJvYXJkYXN5bmMgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrSG9tZSgpIHtcbiAgICAgICAgU2NyZWVuTWdyLmluc3RhbmNlLnNob3dTY3JlZW4oJ1NjcmVlbkhvbWUnKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrU2hhcmUoKSB7XG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcbiAgICAgICAgVXRpbHNGQi5jaG9vc2VBc3luYyhpbWFnZUJhc2U2NCkuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja1BsYXlBZ2FpbigpIHtcbiAgICAgICAgZ2FtZV9zY2VuZS5pbnN0YW5jZS5vbkdhbWVTdGFydCh0cnVlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tDb250aW51ZSgpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdhbWVfc2NlbmUuaW5zdGFuY2Uub25HYW1lU3RhcnQodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIG9uQnRuQ2xpY2tVcGxvYWQoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBpbWFnZUJhc2U2NCA9IFV0aWxzQ29tbW9uLmdldFNjcmVlbnNob3RCYXNlNjQoVXRpbHNDb21tb24uZ2V0Q2FtZXJhTWFpbigpKTtcblxuICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3B1Ymxpc2hlci1kZXZuZXQud2FscnVzLnNwYWNlL3YxL3N0b3JlP2Vwb2Nocz0xJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IGJhc2U2NFRvQmluYXJ5KGltYWdlQmFzZTY0KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYmxvYklkLnN0cmluZyA9ICdCbG9kaWQ6ICcgKyBkYXRhLm5ld2x5Q3JlYXRlZC5ibG9iT2JqZWN0LmJsb2JJZDtcbiAgICAgICAgICAgIHRoaXMuU3VpSWQuc3RyaW5nID0gJ0lkOiAnICsgZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5pZDtcbiAgICAgICAgICAgIHRoaXMuYmxvYklkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuU3VpSWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzVGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blVwbG9hZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blBsYXlBZ2Fpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciB1cGxvYWROdW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1cGxvYWROdW1cIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1cGxvYWROdW1cIikgOiAwXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1cGxvYWROdW1cIiwgcGFyc2VJbnQodXBsb2FkTnVtKSArIDEpXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3bHlDcmVhdGVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzB4MjBjNmEyOTE1MDQ3NDc5Zjc5MjBmMTgzY2JjNTk1M2I3MDhjZmNjNDExOGQ1N2NkMzNlMjM0NGE5M2Q2ZDAyYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWRFcG9jaDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2JJZDogJ0hQVER2MURHN3otaWtEVUpBMHV0WWZMTzAwb011REgzeHo4Rm9rMmExUEknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMzk2MzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcmFzdXJlQ29kZVR5cGU6ICdSZWRTdHVmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJ0aWZpZWRFcG9jaDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2U6IFtPYmplY3RdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFNpemU6IDY1MDIzMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29zdDogMzE3NTAwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blVwbG9hZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blBsYXlBZ2Fpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0YWlsczonLCBlcnJvckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=