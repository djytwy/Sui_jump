
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
    console.log('home.......');
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
      var imageBase64, res, data, errorData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.errorTips.node.active = false;
              imageBase64 = UtilsCommon.getScreenshotBase64(UtilsCommon.getCameraMain());
              console.log(imageBase64);
              _this.btnHome.node.active = false;
              _this.btnUpload.node.active = false;
              _this.btnPlayAgain.node.active = false;
              _this.loading.node.active = true;
              _context.next = 9;
              return fetch('https://publisher-devnet.walrus.space/v1/store?epochs=1', {
                method: 'PUT',
                body: base64ToBinary(imageBase64)
              });

            case 9:
              res = _context.sent;

              if (!(res.status === 200)) {
                _context.next = 26;
                break;
              }

              _context.next = 13;
              return res.json();

            case 13:
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

              _context.next = 36;
              break;

            case 26:
              _this.errorTips.node.active = true;
              _this.btnHome.node.active = true;
              _this.btnUpload.node.active = true;
              _this.btnPlayAgain.node.active = true;
              _this.loading.node.active = false;
              console.error('Error:', res.status);
              _context.next = 34;
              return res.text();

            case 34:
              errorData = _context.sent;
              console.error('Error details:', errorData);

            case 36:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbkdhbWVPdmVyLmpzIl0sIm5hbWVzIjpbIlNjcmVlbk1nciIsInJlcXVpcmUiLCJVdGlsc0NvbW1vbiIsIlV0aWxzRkIiLCJnYW1lX3NjZW5lIiwiYmFzZTY0VG9CaW5hcnkiLCJiYXNlNjRTdHJpbmciLCJiYXNlNjRDbGVhbmVkIiwic3BsaXQiLCJiaW5hcnlTdHJpbmciLCJhdG9iIiwibGVuIiwibGVuZ3RoIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJidWZmZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTmV3U2NvcmUiLCJ0eXBlIiwiTm9kZSIsImxhYmVsU2NvcmUiLCJMYWJlbCIsImxhYmVsU2NvcmVNYXgiLCJzY3JlZW5MZWFkZXJib2FyZCIsImJ0bkhvbWUiLCJCdXR0b24iLCJidG5VcGxvYWQiLCJidG5QbGF5QWdhaW4iLCJsb2FkaW5nIiwiYmxvYklkIiwiU3VpSWQiLCJSaWNoVGV4dCIsInN1Y2Nlc3NUaXBzIiwiZXJyb3JUaXBzIiwic3RhcnQiLCJvbkVuYWJsZSIsIm5vZGUiLCJhY3RpdmUiLCJzY29yZSIsImluc3RhbmNlIiwic2NvcmVNQXgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4Iiwic2V0SXRlbSIsInN0cmluZyIsImNsZWFyTGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZEFzeW5jIiwiQ29uc3RWYWx1ZSIsIkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEIiwidGhlbiIsInNob3dMZWFkZXJib2FyZCIsImJpbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwib25CdG5DbGlja0hvbWUiLCJzaG93U2NyZWVuIiwib25CdG5DbGlja1NoYXJlIiwiaW1hZ2VCYXNlNjQiLCJnZXRTY3JlZW5zaG90QmFzZTY0IiwiZ2V0Q2FtZXJhTWFpbiIsImNob29zZUFzeW5jIiwib25CdG5DbGlja1BsYXlBZ2FpbiIsIm9uR2FtZVN0YXJ0Iiwib25CdG5DbGlja0NvbnRpbnVlIiwib25CdG5DbGlja1VwbG9hZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibmV3bHlDcmVhdGVkIiwiYmxvYk9iamVjdCIsImlkIiwidGV4dCIsImVycm9yRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OytDQVJBOzs7Ozs7QUFVQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBLFNBQVNJLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0VBQ2xDLElBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFDRSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQXRCO0VBRUEsSUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNILGFBQUQsQ0FBekI7RUFDQSxJQUFNSSxHQUFHLEdBQUdGLFlBQVksQ0FBQ0csTUFBekI7RUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlSCxHQUFmLENBQWQ7O0VBRUEsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixHQUFwQixFQUF5QkksQ0FBQyxFQUExQixFQUE4QjtJQUMxQkYsS0FBSyxDQUFDRSxDQUFELENBQUwsR0FBV04sWUFBWSxDQUFDTyxVQUFiLENBQXdCRCxDQUF4QixDQUFYO0VBQ0g7O0VBRUQsT0FBT0YsS0FBSyxDQUFDSSxNQUFiO0FBQ0g7O0FBRURDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VB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QixJQUEzQjtjQUNBLEtBQUksQ0FBQ1gsU0FBTCxDQUFlVSxJQUFmLENBQW9CQyxNQUFwQixHQUE2QixJQUE3QjtjQUNBLEtBQUksQ0FBQ1YsWUFBTCxDQUFrQlMsSUFBbEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDO2NBQ0EsS0FBSSxDQUFDVCxPQUFMLENBQWFRLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO2NBRUFvQixPQUFPLENBQUNELEtBQVIsQ0FBYyxRQUFkLEVBQXdCbUIsR0FBRyxDQUFDQyxNQUE1QjtjQXBEaUI7Y0FBQSxPQXFET0QsR0FBRyxDQUFDTyxJQUFKLEVBckRQOztZQUFBO2NBcURYQyxTQXJEVztjQXNEakIxQixPQUFPLENBQUNELEtBQVIsQ0FBYyxnQkFBZCxFQUFnQzJCLFNBQWhDOztZQXREaUI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUF3RHhCO0FBdExJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5pbXBvcnQgKiBhcyBDb25zdFZhbHVlIGZyb20gJy4vQ29uc3RWYWx1ZSc7XG5cbnZhciBTY3JlZW5NZ3IgPSByZXF1aXJlKCdTY3JlZW5NZ3InKTtcbnZhciBVdGlsc0NvbW1vbiA9IHJlcXVpcmUoJ1V0aWxzQ29tbW9uJyk7XG52YXIgVXRpbHNGQiA9IHJlcXVpcmUoJ1V0aWxzRkInKTtcbnZhciBnYW1lX3NjZW5lID0gcmVxdWlyZSgnZ2FtZV9zY2VuZScpO1xuXG5mdW5jdGlvbiBiYXNlNjRUb0JpbmFyeShiYXNlNjRTdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlNjRDbGVhbmVkID0gYmFzZTY0U3RyaW5nLnNwbGl0KCcsJylbMV07XG5cbiAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSBhdG9iKGJhc2U2NENsZWFuZWQpO1xuICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cblxuICAgIHJldHVybiBieXRlcy5idWZmZXI7XG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpdGxlTmV3U2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGxhYmVsU2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcblxuICAgICAgICBsYWJlbFNjb3JlTWF4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2NyZWVuTGVhZGVyYm9hcmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiByZXF1aXJlKCdTY3JlZW5MZWFkZXJib2FyZCcpLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ0bkhvbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnRuVXBsb2FkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blBsYXlBZ2Fpbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGJsb2JJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBTdWlJZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlJpY2hUZXh0LFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzVGlwczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvclRpcHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYnRuSG9tZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuVXBsb2FkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsU2NvcmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBsb2FkIHN0YXR1czpcbiAgICAgICAgdGhpcy5ibG9iSWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdWlJZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JUaXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHNjb3JlID0gZ2FtZV9zY2VuZS5pbnN0YW5jZS5zY29yZTtcbiAgICAgICAgLy8gbGV0IHNjb3JlTUF4ID0gVXRpbHNGQi5nZXRTZWxmTGVhZGVyYm9hcmRTY29yZShDb25zdFZhbHVlLkxFQURFUkJPQVJEX1NPQ1JFX1dPUkxEKTtcbiAgICAgICAgbGV0IHNjb3JlTUF4ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWF4U2NvcmVcIikgPyBwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXhTY29yZVwiKSkgOiAwXG5cbiAgICAgICAgdGhpcy50aXRsZU5ld1Njb3JlLmFjdGl2ZSA9IHNjb3JlID4gMCAmJiBzY29yZSA+IHNjb3JlTUF4O1xuICAgICAgICBzY29yZU1BeCA9IE1hdGgubWF4KHNjb3JlTUF4LCBzY29yZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1heFNjb3JlXCIsIHNjb3JlTUF4KVxuXG4gICAgICAgIHRoaXMubGFiZWxTY29yZS5zdHJpbmcgPSBcIlwiICsgc2NvcmU7XG4gICAgICAgIHRoaXMubGFiZWxTY29yZU1heC5zdHJpbmcgPSBcIk1heCBTY29yZTogXCIgKyBzY29yZU1BeDtcblxuICAgICAgICB0aGlzLnNjcmVlbkxlYWRlcmJvYXJkLmNsZWFyTGVhZGVyYm9hcmQoKTtcbiAgICAgICAgVXRpbHNGQi5zZXRMZWFkZXJib2FyZEFzeW5jKENvbnN0VmFsdWUuTEVBREVSQk9BUkRfU09DUkVfV09STEQsIHRoaXMuc2NvcmUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5MZWFkZXJib2FyZC5zaG93TGVhZGVyYm9hcmQoQ29uc3RWYWx1ZS5MRUFERVJCT0FSRF9TT0NSRV9XT1JMRCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0bGVhZGVyYm9hcmRhc3luYyBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tIb21lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZS4uLi4uLi4nKTtcblxuICAgICAgICBTY3JlZW5NZ3IuaW5zdGFuY2Uuc2hvd1NjcmVlbignU2NyZWVuSG9tZScpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQnRuQ2xpY2tTaGFyZSgpIHtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBVdGlsc0ZCLmNob29zZUFzeW5jKGltYWdlQmFzZTY0KS5jYXRjaChlcnJvciA9PiB7IH0pO1xuICAgIH0sXG5cbiAgICBvbkJ0bkNsaWNrUGxheUFnYWluKCkge1xuICAgICAgICBnYW1lX3NjZW5lLmluc3RhbmNlLm9uR2FtZVN0YXJ0KHRydWUsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgb25CdG5DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB2YXIgaW1hZ2VCYXNlNjQgPSBVdGlsc0NvbW1vbi5nZXRTY3JlZW5zaG90QmFzZTY0KFV0aWxzQ29tbW9uLmdldENhbWVyYU1haW4oKSk7XG4gICAgICAgIFV0aWxzRkIuY2hvb3NlQXN5bmMoaW1hZ2VCYXNlNjQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2FtZV9zY2VuZS5pbnN0YW5jZS5vbkdhbWVTdGFydCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgb25CdG5DbGlja1VwbG9hZCgpIHtcbiAgICAgICAgdGhpcy5lcnJvclRpcHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGltYWdlQmFzZTY0ID0gVXRpbHNDb21tb24uZ2V0U2NyZWVuc2hvdEJhc2U2NChVdGlsc0NvbW1vbi5nZXRDYW1lcmFNYWluKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUJhc2U2NCk7XG5cbiAgICAgICAgdGhpcy5idG5Ib21lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuVXBsb2FkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuUGxheUFnYWluLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wdWJsaXNoZXItZGV2bmV0LndhbHJ1cy5zcGFjZS92MS9zdG9yZT9lcG9jaHM9MScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBiYXNlNjRUb0JpbmFyeShpbWFnZUJhc2U2NClcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmJsb2JJZC5zdHJpbmcgPSAnQmxvZGlkOiAnICsgZGF0YS5uZXdseUNyZWF0ZWQuYmxvYk9iamVjdC5ibG9iSWQ7XG4gICAgICAgICAgICB0aGlzLlN1aUlkLnN0cmluZyA9ICdJZDogJyArIGRhdGEubmV3bHlDcmVhdGVkLmJsb2JPYmplY3QuaWQ7XG4gICAgICAgICAgICB0aGlzLmJsb2JJZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlN1aUlkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc1RpcHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld2x5Q3JlYXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYk9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcweDIwYzZhMjkxNTA0NzQ3OWY3OTIwZjE4M2NiYzU5NTNiNzA4Y2ZjYzQxMThkNTdjZDMzZTIzNDRhOTNkNmQwMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkRXBvY2g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iSWQ6ICdIUFREdjFERzd6LWlrRFVKQTB1dFlmTE8wMG9NdURIM3h6OEZvazJhMVBJJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDM5NjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJhc3VyZUNvZGVUeXBlOiAnUmVkU3R1ZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VydGlmaWVkRXBvY2g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlOiBbT2JqZWN0XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZWRTaXplOiA2NTAyMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Q6IDMxNzUwMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvclRpcHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmJ0bkhvbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5VcGxvYWQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5QWdhaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlcy5zdGF0dXMpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGFpbHM6JywgZXJyb3JEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19