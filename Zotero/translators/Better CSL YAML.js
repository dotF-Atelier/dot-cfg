{
	"translatorID": "0f238e69-043e-4882-93bf-342de007de19",
	"label": "Better CSL YAML",
	"description": "exports items in pandoc-compatible CSL-YAML format, with added citation keys and parsing of metadata",
	"creator": "Emiliano heyns",
	"target": "yaml",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"displayOptions": {
		"keepUpdated": false,
		"worker": true
	},
	"configOptions": {
		"getCollections": true,
		"hash": "53ee9c50c3dd1960ec2e9ede0077b6ff4f54a53c43437d71496bbe078660505a"
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 800,
	"inRepository": false,
	"lastUpdated": "2022-09-03"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"0f238e69-043e-4882-93bf-342de007de19","label":"Better CSL YAML","description":"exports items in pandoc-compatible CSL-YAML format, with added citation keys and parsing of metadata","creator":"Emiliano heyns","target":"yaml","minVersion":"4.0.27","maxVersion":"","displayOptions":{"keepUpdated":false,"worker":true},"configOptions":{"getCollections":true},"translatorType":3,"browserSupport":"gcsv","priority":800,"inRepository":false}); // assign new data
      
var Translator___detectImport___doExport___doImport = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_globals();
      var process2 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop2() {
      }
      process2.on = noop2;
      process2.addListener = noop2;
      process2.once = noop2;
      process2.off = noop2;
      process2.removeListener = noop2;
      process2.removeAllListeners = noop2;
      process2.emit = noop2;
      process2.prependListener = noop2;
      process2.prependOnceListener = noop2;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
    }
  });

  // setup/loaders/globals.js
  var process, global;
  var init_globals = __esm({
    "setup/loaders/globals.js"() {
      process = require_browser();
      global = Function("return this")();
    }
  });

  // node_modules/fast-safe-stringify/index.js
  var require_fast_safe_stringify = __commonJS({
    "node_modules/fast-safe-stringify/index.js"(exports, module) {
      init_globals();
      module.exports = stringify;
      stringify.default = stringify;
      stringify.stable = deterministicStringify;
      stringify.stableStringify = deterministicStringify;
      var LIMIT_REPLACE_NODE = "[...]";
      var CIRCULAR_REPLACE_NODE = "[Circular]";
      var arr = [];
      var replacerStack = [];
      function defaultOptions() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER
        };
      }
      function stringify(obj, replacer, spacer, options) {
        if (typeof options === "undefined") {
          options = defaultOptions();
        }
        decirc(obj, "", 0, [], void 0, 0, options);
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function setReplace(replace, val, k, parent) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
        if (propertyDescriptor.get !== void 0) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: replace });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k, replace]);
          }
        } else {
          parent[k] = replace;
          arr.push([parent, k, val]);
        }
      }
      function decirc(val, k, edgeIndex, stack, parent, depth, options) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              decirc(val[i], i, i, stack, val, depth, options);
            }
          } else {
            var keys = Object.keys(val);
            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              decirc(val[key], key, i, stack, val, depth, options);
            }
          }
          stack.pop();
        }
      }
      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer, options) {
        if (typeof options === "undefined") {
          options = defaultOptions();
        }
        var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          try {
            if (typeof val.toJSON === "function") {
              return;
            }
          } catch (_) {
            return;
          }
          if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              deterministicDecirc(val[i], i, i, stack, val, depth, options);
            }
          } else {
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              deterministicDecirc(val[key], key, i, stack, val, depth, options);
              tmp[key] = val[key];
            }
            if (typeof parent !== "undefined") {
              arr.push([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack.pop();
        }
      }
      function replaceGetterValues(replacer) {
        replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
          return v;
        };
        return function(key, val) {
          if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
              var part = replacerStack[i];
              if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
              }
            }
          }
          return replacer.call(this, key, val);
        };
      }
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      init_globals();
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(exports, module) {
      init_globals();
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      init_globals();
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      init_globals();
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var slice = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = "[object Function]";
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(
              that,
              args.concat(slice.call(arguments))
            );
          }
        };
        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push("$" + i);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      init_globals();
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/has/src/index.js
  var require_src = __commonJS({
    "node_modules/has/src/index.js"(exports, module) {
      init_globals();
      var bind = require_function_bind();
      module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      init_globals();
      var undefined2;
      var $SyntaxError = SyntaxError;
      var $Function = Function;
      var $TypeError = TypeError;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = Object.getPrototypeOf || function(x) {
        return x.__proto__;
      };
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_src();
      var $concat = bind.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
      var $replace = bind.call(Function.call, String.prototype.replace);
      var $strSlice = bind.call(Function.call, String.prototype.slice);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number2, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      init_globals();
      var bind = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
      var $max = GetIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind, $call, arguments);
        if ($gOPD && $defineProperty) {
          var desc = $gOPD(func, "length");
          if (desc.configurable) {
            $defineProperty(
              func,
              "length",
              { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
            );
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      init_globals();
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/is-arguments/index.js"(exports, module) {
      init_globals();
      var hasToStringTag = require_shams2()();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = function() {
        return isStandardArguments(arguments);
      }();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/is-generator-function/index.js"(exports, module) {
      init_globals();
      var toStr = Object.prototype.toString;
      var fnToStr = Function.prototype.toString;
      var isFnRegex = /^\s*(?:function)?\*/;
      var hasToStringTag = require_shams2()();
      var getProto = Object.getPrototypeOf;
      var getGeneratorFunc = function() {
        if (!hasToStringTag) {
          return false;
        }
        try {
          return Function("return function*() {}")();
        } catch (e) {
        }
      };
      var GeneratorFunction;
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex.test(fnToStr.call(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr.call(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        if (typeof GeneratorFunction === "undefined") {
          var generatorFunc = getGeneratorFunc();
          GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
        }
        return getProto(fn) === GeneratorFunction;
      };
    }
  });

  // node_modules/foreach/index.js
  var require_foreach = __commonJS({
    "node_modules/foreach/index.js"(exports, module) {
      init_globals();
      var hasOwn = Object.prototype.hasOwnProperty;
      var toString = Object.prototype.toString;
      module.exports = function forEach(obj, fn, ctx2) {
        if (toString.call(fn) !== "[object Function]") {
          throw new TypeError("iterator must be a function");
        }
        var l = obj.length;
        if (l === +l) {
          for (var i = 0; i < l; i++) {
            fn.call(ctx2, obj[i], i, obj);
          }
        } else {
          for (var k in obj) {
            if (hasOwn.call(obj, k)) {
              fn.call(ctx2, obj[k], k, obj);
            }
          }
        }
      };
    }
  });

  // node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/available-typed-arrays/index.js"(exports, module) {
      init_globals();
      var possibleNames = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ];
      var g = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
  var require_getOwnPropertyDescriptor = __commonJS({
    "node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
      init_globals();
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/is-typed-array/index.js"(exports, module) {
      init_globals();
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var anyTrue = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!anyTrue) {
            try {
              anyTrue = getter.call(value) === typedArray;
            } catch (e) {
            }
          }
        });
        return anyTrue;
      };
      module.exports = function isTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          var tag = $slice($toString(value), 8, -1);
          return $indexOf(typedArrays, tag) > -1;
        }
        if (!gOPD) {
          return false;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/which-typed-array/index.js"(exports, module) {
      init_globals();
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          if (typeof g[typedArray] === "function") {
            var arr = new g[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf(arr);
              var descriptor = gOPD(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
              }
              toStrTags[typedArray] = descriptor.get;
            }
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var foundName = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!foundName) {
            try {
              var name = getter.call(value);
              if (name === typedArray) {
                foundName = name;
              }
            } catch (e) {
            }
          }
        });
        return foundName;
      };
      var isTypedArray = require_is_typed_array();
      module.exports = function whichTypedArray(value) {
        if (!isTypedArray(value)) {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          return $slice($toString(value), 8, -1);
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/util/support/types.js
  var require_types = __commonJS({
    "node_modules/util/support/types.js"(exports) {
      init_globals();
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/util/support/isBufferBrowser.js"(exports, module) {
      init_globals();
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      init_globals();
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // (disabled):node_modules/util/util.js
  var require_util = __commonJS({
    "(disabled):node_modules/util/util.js"(exports) {
      init_globals();
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect2(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%")
            return "%";
          if (i >= len)
            return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect2(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set, pid, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect2(obj, opts) {
        var ctx2 = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3)
          ctx2.depth = arguments[2];
        if (arguments.length >= 4)
          ctx2.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx2.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx2, opts);
        }
        if (isUndefined(ctx2.showHidden))
          ctx2.showHidden = false;
        if (isUndefined(ctx2.depth))
          ctx2.depth = 2;
        if (isUndefined(ctx2.colors))
          ctx2.colors = false;
        if (isUndefined(ctx2.customInspect))
          ctx2.customInspect = true;
        if (ctx2.colors)
          ctx2.stylize = stylizeWithColor;
        return formatValue(ctx2, obj, ctx2.depth);
      }
      exports.inspect = inspect2;
      inspect2.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect2.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect2.styles[styleType];
        if (style) {
          return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx2, value, recurseTimes) {
        if (ctx2.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx2);
          if (!isString(ret)) {
            ret = formatValue(ctx2, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx2, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx2.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx2.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx2.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx2.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx2.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx2.stylize("[Object]", "special");
          }
        }
        ctx2.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx2, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx2, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx2.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx2, value) {
        if (isUndefined(value))
          return ctx2.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx2.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx2.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx2.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx2.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx2, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(
              ctx2,
              value,
              recurseTimes,
              visibleKeys,
              String(i),
              true
            ));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(
              ctx2,
              value,
              recurseTimes,
              visibleKeys,
              key,
              true
            ));
          }
        });
        return output;
      }
      function formatProperty(ctx2, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx2.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx2.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx2.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx2.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx2, desc.value, null);
            } else {
              str = formatValue(ctx2, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").substr(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx2.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx2.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx2.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re2) {
        return isObject(re2) && objectToString(re2) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject(add))
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol)
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
        return Object.defineProperties(
          fn,
          getOwnPropertyDescriptors(original)
        );
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(
            function(ret) {
              process.nextTick(cb.bind(null, null, ret));
            },
            function(rej) {
              process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
            }
          );
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(
          callbackified,
          getOwnPropertyDescriptors(original)
        );
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // node_modules/loupe/loupe.js
  var require_loupe = __commonJS({
    "node_modules/loupe/loupe.js"(exports, module) {
      init_globals();
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.loupe = {}));
      })(exports, function(exports2) {
        "use strict";
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var ansiColors = {
          bold: ["1", "22"],
          dim: ["2", "22"],
          italic: ["3", "23"],
          underline: ["4", "24"],
          inverse: ["7", "27"],
          hidden: ["8", "28"],
          strike: ["9", "29"],
          black: ["30", "39"],
          red: ["31", "39"],
          green: ["32", "39"],
          yellow: ["33", "39"],
          blue: ["34", "39"],
          magenta: ["35", "39"],
          cyan: ["36", "39"],
          white: ["37", "39"],
          brightblack: ["30;1", "39"],
          brightred: ["31;1", "39"],
          brightgreen: ["32;1", "39"],
          brightyellow: ["33;1", "39"],
          brightblue: ["34;1", "39"],
          brightmagenta: ["35;1", "39"],
          brightcyan: ["36;1", "39"],
          brightwhite: ["37;1", "39"],
          grey: ["90", "39"]
        };
        var styles = {
          special: "cyan",
          number: "yellow",
          bigint: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          symbol: "green",
          date: "magenta",
          regexp: "red"
        };
        var truncator = "\u2026";
        function colorise(value, styleType) {
          var color = ansiColors[styles[styleType]] || ansiColors[styleType];
          if (!color) {
            return String(value);
          }
          return "\x1B[".concat(color[0], "m").concat(String(value), "\x1B[").concat(color[1], "m");
        }
        function normaliseOptions() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$showHidden = _ref.showHidden, showHidden = _ref$showHidden === void 0 ? false : _ref$showHidden, _ref$depth = _ref.depth, depth = _ref$depth === void 0 ? 2 : _ref$depth, _ref$colors = _ref.colors, colors = _ref$colors === void 0 ? false : _ref$colors, _ref$customInspect = _ref.customInspect, customInspect = _ref$customInspect === void 0 ? true : _ref$customInspect, _ref$showProxy = _ref.showProxy, showProxy = _ref$showProxy === void 0 ? false : _ref$showProxy, _ref$maxArrayLength = _ref.maxArrayLength, maxArrayLength = _ref$maxArrayLength === void 0 ? Infinity : _ref$maxArrayLength, _ref$breakLength = _ref.breakLength, breakLength = _ref$breakLength === void 0 ? Infinity : _ref$breakLength, _ref$seen = _ref.seen, seen = _ref$seen === void 0 ? [] : _ref$seen, _ref$truncate = _ref.truncate, truncate2 = _ref$truncate === void 0 ? Infinity : _ref$truncate, _ref$stylize = _ref.stylize, stylize = _ref$stylize === void 0 ? String : _ref$stylize;
          var options = {
            showHidden: Boolean(showHidden),
            depth: Number(depth),
            colors: Boolean(colors),
            customInspect: Boolean(customInspect),
            showProxy: Boolean(showProxy),
            maxArrayLength: Number(maxArrayLength),
            breakLength: Number(breakLength),
            truncate: Number(truncate2),
            seen,
            stylize
          };
          if (options.colors) {
            options.stylize = colorise;
          }
          return options;
        }
        function truncate(string, length) {
          var tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : truncator;
          string = String(string);
          var tailLength = tail.length;
          var stringLength = string.length;
          if (tailLength > length && stringLength > tailLength) {
            return tail;
          }
          if (stringLength > length && stringLength > tailLength) {
            return "".concat(string.slice(0, length - tailLength)).concat(tail);
          }
          return string;
        }
        function inspectList(list, options, inspectItem) {
          var separator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
          inspectItem = inspectItem || options.inspect;
          var size = list.length;
          if (size === 0)
            return "";
          var originalLength = options.truncate;
          var output = "";
          var peek = "";
          var truncated = "";
          for (var i = 0; i < size; i += 1) {
            var last = i + 1 === list.length;
            var secondToLast = i + 2 === list.length;
            truncated = "".concat(truncator, "(").concat(list.length - i, ")");
            var value = list[i];
            options.truncate = originalLength - output.length - (last ? 0 : separator.length);
            var string = peek || inspectItem(value, options) + (last ? "" : separator);
            var nextLength = output.length + string.length;
            var truncatedLength = nextLength + truncated.length;
            if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
              break;
            }
            if (!last && !secondToLast && truncatedLength > originalLength) {
              break;
            }
            peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator);
            if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
              break;
            }
            output += string;
            if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
              truncated = "".concat(truncator, "(").concat(list.length - i - 1, ")");
              break;
            }
            truncated = "";
          }
          return "".concat(output).concat(truncated);
        }
        function quoteComplexKey(key) {
          if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
            return key;
          }
          return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        }
        function inspectProperty(_ref2, options) {
          var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], value = _ref3[1];
          options.truncate -= 2;
          if (typeof key === "string") {
            key = quoteComplexKey(key);
          } else if (typeof key !== "number") {
            key = "[".concat(options.inspect(key, options), "]");
          }
          options.truncate -= key.length;
          value = options.inspect(value, options);
          return "".concat(key, ": ").concat(value);
        }
        function inspectArray(array, options) {
          var nonIndexProperties = Object.keys(array).slice(array.length);
          if (!array.length && !nonIndexProperties.length)
            return "[]";
          options.truncate -= 4;
          var listContents = inspectList(array, options);
          options.truncate -= listContents.length;
          var propertyContents = "";
          if (nonIndexProperties.length) {
            propertyContents = inspectList(nonIndexProperties.map(function(key) {
              return [key, array[key]];
            }), options, inspectProperty);
          }
          return "[ ".concat(listContents).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
        }
        var toString = Function.prototype.toString;
        var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
        function getFuncName(aFunc) {
          if (typeof aFunc !== "function") {
            return null;
          }
          var name = "";
          if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
            var match = toString.call(aFunc).match(functionNameMatch);
            if (match) {
              name = match[1];
            }
          } else {
            name = aFunc.name;
          }
          return name;
        }
        var getFuncName_1 = getFuncName;
        var getArrayName = function getArrayName2(array) {
          if (typeof Buffer === "function" && array instanceof Buffer) {
            return "Buffer";
          }
          if (array[Symbol.toStringTag]) {
            return array[Symbol.toStringTag];
          }
          return getFuncName_1(array.constructor);
        };
        function inspectTypedArray(array, options) {
          var name = getArrayName(array);
          options.truncate -= name.length + 4;
          var nonIndexProperties = Object.keys(array).slice(array.length);
          if (!array.length && !nonIndexProperties.length)
            return "".concat(name, "[]");
          var output = "";
          for (var i = 0; i < array.length; i++) {
            var string = "".concat(options.stylize(truncate(array[i], options.truncate), "number")).concat(i === array.length - 1 ? "" : ", ");
            options.truncate -= string.length;
            if (array[i] !== array.length && options.truncate <= 3) {
              output += "".concat(truncator, "(").concat(array.length - array[i] + 1, ")");
              break;
            }
            output += string;
          }
          var propertyContents = "";
          if (nonIndexProperties.length) {
            propertyContents = inspectList(nonIndexProperties.map(function(key) {
              return [key, array[key]];
            }), options, inspectProperty);
          }
          return "".concat(name, "[ ").concat(output).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
        }
        function inspectDate(dateObject, options) {
          var split = dateObject.toJSON().split("T");
          var date2 = split[0];
          return options.stylize("".concat(date2, "T").concat(truncate(split[1], options.truncate - date2.length - 1)), "date");
        }
        function inspectFunction(func, options) {
          var name = getFuncName_1(func);
          if (!name) {
            return options.stylize("[Function]", "special");
          }
          return options.stylize("[Function ".concat(truncate(name, options.truncate - 11), "]"), "special");
        }
        function inspectMapEntry(_ref, options) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
          options.truncate -= 4;
          key = options.inspect(key, options);
          options.truncate -= key.length;
          value = options.inspect(value, options);
          return "".concat(key, " => ").concat(value);
        }
        function mapToEntries(map) {
          var entries = [];
          map.forEach(function(value, key) {
            entries.push([key, value]);
          });
          return entries;
        }
        function inspectMap(map, options) {
          var size = map.size - 1;
          if (size <= 0) {
            return "Map{}";
          }
          options.truncate -= 7;
          return "Map{ ".concat(inspectList(mapToEntries(map), options, inspectMapEntry), " }");
        }
        var isNaN2 = Number.isNaN || function(i) {
          return i !== i;
        };
        function inspectNumber(number2, options) {
          if (isNaN2(number2)) {
            return options.stylize("NaN", "number");
          }
          if (number2 === Infinity) {
            return options.stylize("Infinity", "number");
          }
          if (number2 === -Infinity) {
            return options.stylize("-Infinity", "number");
          }
          if (number2 === 0) {
            return options.stylize(1 / number2 === Infinity ? "+0" : "-0", "number");
          }
          return options.stylize(truncate(number2, options.truncate), "number");
        }
        function inspectBigInt(number2, options) {
          var nums = truncate(number2.toString(), options.truncate - 1);
          if (nums !== truncator)
            nums += "n";
          return options.stylize(nums, "bigint");
        }
        function inspectRegExp(value, options) {
          var flags = value.toString().split("/")[2];
          var sourceLength = options.truncate - (2 + flags.length);
          var source2 = value.source;
          return options.stylize("/".concat(truncate(source2, sourceLength), "/").concat(flags), "regexp");
        }
        function arrayFromSet(set) {
          var values = [];
          set.forEach(function(value) {
            values.push(value);
          });
          return values;
        }
        function inspectSet(set, options) {
          if (set.size === 0)
            return "Set{}";
          options.truncate -= 7;
          return "Set{ ".concat(inspectList(arrayFromSet(set), options), " }");
        }
        var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
        var escapeCharacters = {
          "\b": "\\b",
          "	": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          "'": "\\'",
          "\\": "\\\\"
        };
        var hex = 16;
        var unicodeLength = 4;
        function escape(char) {
          return escapeCharacters[char] || "\\u".concat("0000".concat(char.charCodeAt(0).toString(hex)).slice(-unicodeLength));
        }
        function inspectString(string, options) {
          if (stringEscapeChars.test(string)) {
            string = string.replace(stringEscapeChars, escape);
          }
          return options.stylize("'".concat(truncate(string, options.truncate - 2), "'"), "string");
        }
        function inspectSymbol(value) {
          if ("description" in Symbol.prototype) {
            return value.description ? "Symbol(".concat(value.description, ")") : "Symbol()";
          }
          return value.toString();
        }
        var getPromiseValue = function getPromiseValue2() {
          return "Promise{\u2026}";
        };
        try {
          var _process$binding = process.binding("util"), getPromiseDetails = _process$binding.getPromiseDetails, kPending = _process$binding.kPending, kRejected = _process$binding.kRejected;
          if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
            getPromiseValue = function getPromiseValue2(value, options) {
              var _getPromiseDetails = getPromiseDetails(value), _getPromiseDetails2 = _slicedToArray(_getPromiseDetails, 2), state = _getPromiseDetails2[0], innerValue = _getPromiseDetails2[1];
              if (state === kPending) {
                return "Promise{<pending>}";
              }
              return "Promise".concat(state === kRejected ? "!" : "", "{").concat(options.inspect(innerValue, options), "}");
            };
          }
        } catch (notNode) {
        }
        var inspectPromise = getPromiseValue;
        function inspectObject(object, options) {
          var properties = Object.getOwnPropertyNames(object);
          var symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : [];
          if (properties.length === 0 && symbols.length === 0) {
            return "{}";
          }
          options.truncate -= 4;
          options.seen = options.seen || [];
          if (options.seen.indexOf(object) >= 0) {
            return "[Circular]";
          }
          options.seen.push(object);
          var propertyContents = inspectList(properties.map(function(key) {
            return [key, object[key]];
          }), options, inspectProperty);
          var symbolContents = inspectList(symbols.map(function(key) {
            return [key, object[key]];
          }), options, inspectProperty);
          options.seen.pop();
          var sep = "";
          if (propertyContents && symbolContents) {
            sep = ", ";
          }
          return "{ ".concat(propertyContents).concat(sep).concat(symbolContents, " }");
        }
        var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
        function inspectClass(value, options) {
          var name = "";
          if (toStringTag && toStringTag in value) {
            name = value[toStringTag];
          }
          name = name || getFuncName_1(value.constructor);
          if (!name || name === "_class") {
            name = "<Anonymous Class>";
          }
          options.truncate -= name.length;
          return "".concat(name).concat(inspectObject(value, options));
        }
        function inspectArguments(args, options) {
          if (args.length === 0)
            return "Arguments[]";
          options.truncate -= 13;
          return "Arguments[ ".concat(inspectList(args, options), " ]");
        }
        var errorKeys = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
        function inspectObject$1(error, options) {
          var properties = Object.getOwnPropertyNames(error).filter(function(key) {
            return errorKeys.indexOf(key) === -1;
          });
          var name = error.name;
          options.truncate -= name.length;
          var message = "";
          if (typeof error.message === "string") {
            message = truncate(error.message, options.truncate);
          } else {
            properties.unshift("message");
          }
          message = message ? ": ".concat(message) : "";
          options.truncate -= message.length + 5;
          var propertyContents = inspectList(properties.map(function(key) {
            return [key, error[key]];
          }), options, inspectProperty);
          return "".concat(name).concat(message).concat(propertyContents ? " { ".concat(propertyContents, " }") : "");
        }
        function inspectAttribute(_ref, options) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
          options.truncate -= 3;
          if (!value) {
            return "".concat(options.stylize(key, "yellow"));
          }
          return "".concat(options.stylize(key, "yellow"), "=").concat(options.stylize('"'.concat(value, '"'), "string"));
        }
        function inspectHTMLCollection(collection, options) {
          return inspectList(collection, options, inspectHTML, "\n");
        }
        function inspectHTML(element, options) {
          var properties = element.getAttributeNames();
          var name = element.tagName.toLowerCase();
          var head = options.stylize("<".concat(name), "special");
          var headClose = options.stylize(">", "special");
          var tail = options.stylize("</".concat(name, ">"), "special");
          options.truncate -= name.length * 2 + 5;
          var propertyContents = "";
          if (properties.length > 0) {
            propertyContents += " ";
            propertyContents += inspectList(properties.map(function(key) {
              return [key, element.getAttribute(key)];
            }), options, inspectAttribute, " ");
          }
          options.truncate -= propertyContents.length;
          var truncate2 = options.truncate;
          var children = inspectHTMLCollection(element.children, options);
          if (children && children.length > truncate2) {
            children = "".concat(truncator, "(").concat(element.children.length, ")");
          }
          return "".concat(head).concat(propertyContents).concat(headClose).concat(children).concat(tail);
        }
        var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
        var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
        var nodeInspect = false;
        try {
          var nodeUtil = require_util();
          nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
        } catch (noNodeInspect) {
          nodeInspect = false;
        }
        var constructorMap = /* @__PURE__ */ new WeakMap();
        var stringTagMap = {};
        var baseTypesMap = {
          undefined: function undefined$1(value, options) {
            return options.stylize("undefined", "undefined");
          },
          null: function _null(value, options) {
            return options.stylize(null, "null");
          },
          boolean: function boolean(value, options) {
            return options.stylize(value, "boolean");
          },
          Boolean: function Boolean2(value, options) {
            return options.stylize(value, "boolean");
          },
          number: inspectNumber,
          Number: inspectNumber,
          bigint: inspectBigInt,
          BigInt: inspectBigInt,
          string: inspectString,
          String: inspectString,
          function: inspectFunction,
          Function: inspectFunction,
          symbol: inspectSymbol,
          Symbol: inspectSymbol,
          Array: inspectArray,
          Date: inspectDate,
          Map: inspectMap,
          Set: inspectSet,
          RegExp: inspectRegExp,
          Promise: inspectPromise,
          WeakSet: function WeakSet2(value, options) {
            return options.stylize("WeakSet{\u2026}", "special");
          },
          WeakMap: function WeakMap2(value, options) {
            return options.stylize("WeakMap{\u2026}", "special");
          },
          Arguments: inspectArguments,
          Int8Array: inspectTypedArray,
          Uint8Array: inspectTypedArray,
          Uint8ClampedArray: inspectTypedArray,
          Int16Array: inspectTypedArray,
          Uint16Array: inspectTypedArray,
          Int32Array: inspectTypedArray,
          Uint32Array: inspectTypedArray,
          Float32Array: inspectTypedArray,
          Float64Array: inspectTypedArray,
          Generator: function Generator() {
            return "";
          },
          DataView: function DataView2() {
            return "";
          },
          ArrayBuffer: function ArrayBuffer2() {
            return "";
          },
          Error: inspectObject$1,
          HTMLCollection: inspectHTMLCollection,
          NodeList: inspectHTMLCollection
        };
        var inspectCustom = function inspectCustom2(value, options, type2) {
          if (chaiInspect in value && typeof value[chaiInspect] === "function") {
            return value[chaiInspect](options);
          }
          if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
            return value[nodeInspect](options.depth, options);
          }
          if ("inspect" in value && typeof value.inspect === "function") {
            return value.inspect(options.depth, options);
          }
          if ("constructor" in value && constructorMap.has(value.constructor)) {
            return constructorMap.get(value.constructor)(value, options);
          }
          if (stringTagMap[type2]) {
            return stringTagMap[type2](value, options);
          }
          return "";
        };
        var toString$1 = Object.prototype.toString;
        function inspect2(value, options) {
          options = normaliseOptions(options);
          options.inspect = inspect2;
          var _options = options, customInspect = _options.customInspect;
          var type2 = value === null ? "null" : _typeof(value);
          if (type2 === "object") {
            type2 = toString$1.call(value).slice(8, -1);
          }
          if (baseTypesMap[type2]) {
            return baseTypesMap[type2](value, options);
          }
          if (customInspect && value) {
            var output = inspectCustom(value, options, type2);
            if (output) {
              if (typeof output === "string")
                return output;
              return inspect2(output, options);
            }
          }
          var proto = value ? Object.getPrototypeOf(value) : false;
          if (proto === Object.prototype || proto === null) {
            return inspectObject(value, options);
          }
          if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
            return inspectHTML(value, options);
          }
          if ("constructor" in value) {
            if (value.constructor !== Object) {
              return inspectClass(value, options);
            }
            return inspectObject(value, options);
          }
          if (value === Object(value)) {
            return inspectObject(value, options);
          }
          return options.stylize(String(value), type2);
        }
        function registerConstructor(constructor, inspector) {
          if (constructorMap.has(constructor)) {
            return false;
          }
          constructorMap.add(constructor, inspector);
          return true;
        }
        function registerStringTag(stringTag, inspector) {
          if (stringTag in stringTagMap) {
            return false;
          }
          stringTagMap[stringTag] = inspector;
          return true;
        }
        var custom = chaiInspect;
        exports2.custom = custom;
        exports2.default = inspect2;
        exports2.inspect = inspect2;
        exports2.registerConstructor = registerConstructor;
        exports2.registerStringTag = registerStringTag;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // gen/items/csl-types.json
  var require_csl_types = __commonJS({
    "gen/items/csl-types.json"(exports, module) {
      module.exports = ["review-book", "document", "software", "article-journal", "graphic", "book", "song", "thesis", "dataset", "chapter", "review", "post", "report", "treaty", "hearing", "gazette", "regulation", "webpage", "article-magazine", "article", "legal_commentary", "interview", "pamphlet", "personal_communication", "entry", "figure", "post-weblog", "legal_case", "classic", "video", "entry-dictionary", "bill", "speech", "standard", "paper-conference", "entry-encyclopedia", "musical_score", "article-newspaper", "broadcast", "motion_picture", "legislation", "patent", "manuscript", "map"];
    }
  });

  // node_modules/js-yaml/lib/common.js
  var require_common = __commonJS({
    "node_modules/js-yaml/lib/common.js"(exports, module) {
      init_globals();
      function isNothing(subject2) {
        return typeof subject2 === "undefined" || subject2 === null;
      }
      function isObject(subject2) {
        return typeof subject2 === "object" && subject2 !== null;
      }
      function toArray(sequence) {
        if (Array.isArray(sequence))
          return sequence;
        else if (isNothing(sequence))
          return [];
        return [sequence];
      }
      function extend(target, source2) {
        var index, length, key, sourceKeys;
        if (source2) {
          sourceKeys = Object.keys(source2);
          for (index = 0, length = sourceKeys.length; index < length; index += 1) {
            key = sourceKeys[index];
            target[key] = source2[key];
          }
        }
        return target;
      }
      function repeat(string, count) {
        var result = "", cycle;
        for (cycle = 0; cycle < count; cycle += 1) {
          result += string;
        }
        return result;
      }
      function isNegativeZero(number2) {
        return number2 === 0 && Number.NEGATIVE_INFINITY === 1 / number2;
      }
      module.exports.isNothing = isNothing;
      module.exports.isObject = isObject;
      module.exports.toArray = toArray;
      module.exports.repeat = repeat;
      module.exports.isNegativeZero = isNegativeZero;
      module.exports.extend = extend;
    }
  });

  // node_modules/js-yaml/lib/exception.js
  var require_exception = __commonJS({
    "node_modules/js-yaml/lib/exception.js"(exports, module) {
      init_globals();
      function formatError(exception, compact) {
        var where = "", message = exception.reason || "(unknown reason)";
        if (!exception.mark)
          return message;
        if (exception.mark.name) {
          where += 'in "' + exception.mark.name + '" ';
        }
        where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")";
        if (!compact && exception.mark.snippet) {
          where += "\n\n" + exception.mark.snippet;
        }
        return message + " " + where;
      }
      function YAMLException(reason, mark) {
        Error.call(this);
        this.name = "YAMLException";
        this.reason = reason;
        this.mark = mark;
        this.message = formatError(this, false);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack || "";
        }
      }
      YAMLException.prototype = Object.create(Error.prototype);
      YAMLException.prototype.constructor = YAMLException;
      YAMLException.prototype.toString = function toString(compact) {
        return this.name + ": " + formatError(this, compact);
      };
      module.exports = YAMLException;
    }
  });

  // node_modules/js-yaml/lib/snippet.js
  var require_snippet = __commonJS({
    "node_modules/js-yaml/lib/snippet.js"(exports, module) {
      init_globals();
      var common = require_common();
      function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
        var head = "";
        var tail = "";
        var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
        if (position - lineStart > maxHalfLength) {
          head = " ... ";
          lineStart = position - maxHalfLength + head.length;
        }
        if (lineEnd - position > maxHalfLength) {
          tail = " ...";
          lineEnd = position + maxHalfLength - tail.length;
        }
        return {
          str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
          pos: position - lineStart + head.length
        };
      }
      function padStart(string, max) {
        return common.repeat(" ", max - string.length) + string;
      }
      function makeSnippet(mark, options) {
        options = Object.create(options || null);
        if (!mark.buffer)
          return null;
        if (!options.maxLength)
          options.maxLength = 79;
        if (typeof options.indent !== "number")
          options.indent = 1;
        if (typeof options.linesBefore !== "number")
          options.linesBefore = 3;
        if (typeof options.linesAfter !== "number")
          options.linesAfter = 2;
        var re2 = /\r?\n|\r|\0/g;
        var lineStarts = [0];
        var lineEnds = [];
        var match;
        var foundLineNo = -1;
        while (match = re2.exec(mark.buffer)) {
          lineEnds.push(match.index);
          lineStarts.push(match.index + match[0].length);
          if (mark.position <= match.index && foundLineNo < 0) {
            foundLineNo = lineStarts.length - 2;
          }
        }
        if (foundLineNo < 0)
          foundLineNo = lineStarts.length - 1;
        var result = "", i, line;
        var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
        var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
        for (i = 1; i <= options.linesBefore; i++) {
          if (foundLineNo - i < 0)
            break;
          line = getLine(
            mark.buffer,
            lineStarts[foundLineNo - i],
            lineEnds[foundLineNo - i],
            mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
            maxLineLength
          );
          result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
        }
        line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
        result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
        result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
        for (i = 1; i <= options.linesAfter; i++) {
          if (foundLineNo + i >= lineEnds.length)
            break;
          line = getLine(
            mark.buffer,
            lineStarts[foundLineNo + i],
            lineEnds[foundLineNo + i],
            mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
            maxLineLength
          );
          result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
        }
        return result.replace(/\n$/, "");
      }
      module.exports = makeSnippet;
    }
  });

  // node_modules/js-yaml/lib/type.js
  var require_type = __commonJS({
    "node_modules/js-yaml/lib/type.js"(exports, module) {
      init_globals();
      var YAMLException = require_exception();
      var TYPE_CONSTRUCTOR_OPTIONS = [
        "kind",
        "multi",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "representName",
        "defaultStyle",
        "styleAliases"
      ];
      var YAML_NODE_KINDS = [
        "scalar",
        "sequence",
        "mapping"
      ];
      function compileStyleAliases(map) {
        var result = {};
        if (map !== null) {
          Object.keys(map).forEach(function(style) {
            map[style].forEach(function(alias) {
              result[String(alias)] = style;
            });
          });
        }
        return result;
      }
      function Type(tag, options) {
        options = options || {};
        Object.keys(options).forEach(function(name) {
          if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
          }
        });
        this.options = options;
        this.tag = tag;
        this.kind = options["kind"] || null;
        this.resolve = options["resolve"] || function() {
          return true;
        };
        this.construct = options["construct"] || function(data) {
          return data;
        };
        this.instanceOf = options["instanceOf"] || null;
        this.predicate = options["predicate"] || null;
        this.represent = options["represent"] || null;
        this.representName = options["representName"] || null;
        this.defaultStyle = options["defaultStyle"] || null;
        this.multi = options["multi"] || false;
        this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
        if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
          throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
        }
      }
      module.exports = Type;
    }
  });

  // node_modules/js-yaml/lib/schema.js
  var require_schema = __commonJS({
    "node_modules/js-yaml/lib/schema.js"(exports, module) {
      init_globals();
      var YAMLException = require_exception();
      var Type = require_type();
      function compileList(schema2, name) {
        var result = [];
        schema2[name].forEach(function(currentType) {
          var newIndex = result.length;
          result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
              newIndex = previousIndex;
            }
          });
          result[newIndex] = currentType;
        });
        return result;
      }
      function compileMap() {
        var result = {
          scalar: {},
          sequence: {},
          mapping: {},
          fallback: {},
          multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
          }
        }, index, length;
        function collectType(type2) {
          if (type2.multi) {
            result.multi[type2.kind].push(type2);
            result.multi["fallback"].push(type2);
          } else {
            result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
          }
        }
        for (index = 0, length = arguments.length; index < length; index += 1) {
          arguments[index].forEach(collectType);
        }
        return result;
      }
      function Schema(definition) {
        return this.extend(definition);
      }
      Schema.prototype.extend = function extend(definition) {
        var implicit = [];
        var explicit = [];
        if (definition instanceof Type) {
          explicit.push(definition);
        } else if (Array.isArray(definition)) {
          explicit = explicit.concat(definition);
        } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
          if (definition.implicit)
            implicit = implicit.concat(definition.implicit);
          if (definition.explicit)
            explicit = explicit.concat(definition.explicit);
        } else {
          throw new YAMLException("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
        }
        implicit.forEach(function(type2) {
          if (!(type2 instanceof Type)) {
            throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
          }
          if (type2.loadKind && type2.loadKind !== "scalar") {
            throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
          }
          if (type2.multi) {
            throw new YAMLException("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
          }
        });
        explicit.forEach(function(type2) {
          if (!(type2 instanceof Type)) {
            throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
          }
        });
        var result = Object.create(Schema.prototype);
        result.implicit = (this.implicit || []).concat(implicit);
        result.explicit = (this.explicit || []).concat(explicit);
        result.compiledImplicit = compileList(result, "implicit");
        result.compiledExplicit = compileList(result, "explicit");
        result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
        return result;
      };
      module.exports = Schema;
    }
  });

  // node_modules/js-yaml/lib/type/str.js
  var require_str = __commonJS({
    "node_modules/js-yaml/lib/type/str.js"(exports, module) {
      init_globals();
      var Type = require_type();
      module.exports = new Type("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(data) {
          return data !== null ? data : "";
        }
      });
    }
  });

  // node_modules/js-yaml/lib/type/seq.js
  var require_seq = __commonJS({
    "node_modules/js-yaml/lib/type/seq.js"(exports, module) {
      init_globals();
      var Type = require_type();
      module.exports = new Type("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(data) {
          return data !== null ? data : [];
        }
      });
    }
  });

  // node_modules/js-yaml/lib/type/map.js
  var require_map = __commonJS({
    "node_modules/js-yaml/lib/type/map.js"(exports, module) {
      init_globals();
      var Type = require_type();
      module.exports = new Type("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(data) {
          return data !== null ? data : {};
        }
      });
    }
  });

  // node_modules/js-yaml/lib/schema/failsafe.js
  var require_failsafe = __commonJS({
    "node_modules/js-yaml/lib/schema/failsafe.js"(exports, module) {
      init_globals();
      var Schema = require_schema();
      module.exports = new Schema({
        explicit: [
          require_str(),
          require_seq(),
          require_map()
        ]
      });
    }
  });

  // node_modules/js-yaml/lib/type/null.js
  var require_null = __commonJS({
    "node_modules/js-yaml/lib/type/null.js"(exports, module) {
      init_globals();
      var Type = require_type();
      function resolveYamlNull(data) {
        if (data === null)
          return true;
        var max = data.length;
        return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
      }
      function constructYamlNull() {
        return null;
      }
      function isNull(object) {
        return object === null;
      }
      module.exports = new Type("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
          canonical: function() {
            return "~";
          },
          lowercase: function() {
            return "null";
          },
          uppercase: function() {
            return "NULL";
          },
          camelcase: function() {
            return "Null";
          },
          empty: function() {
            return "";
          }
        },
        defaultStyle: "lowercase"
      });
    }
  });

  // node_modules/js-yaml/lib/type/bool.js
  var require_bool = __commonJS({
    "node_modules/js-yaml/lib/type/bool.js"(exports, module) {
      init_globals();
      var Type = require_type();
      function resolveYamlBoolean(data) {
        if (data === null)
          return false;
        var max = data.length;
        return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
      }
      function constructYamlBoolean(data) {
        return data === "true" || data === "True" || data === "TRUE";
      }
      function isBoolean(object) {
        return Object.prototype.toString.call(object) === "[object Boolean]";
      }
      module.exports = new Type("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
          lowercase: function(object) {
            return object ? "true" : "false";
          },
          uppercase: function(object) {
            return object ? "TRUE" : "FALSE";
          },
          camelcase: function(object) {
            return object ? "True" : "False";
          }
        },
        defaultStyle: "lowercase"
      });
    }
  });

  // node_modules/js-yaml/lib/type/int.js
  var require_int = __commonJS({
    "node_modules/js-yaml/lib/type/int.js"(exports, module) {
      init_globals();
      var common = require_common();
      var Type = require_type();
      function isHexCode(c) {
        return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
      }
      function isOctCode(c) {
        return 48 <= c && c <= 55;
      }
      function isDecCode(c) {
        return 48 <= c && c <= 57;
      }
      function resolveYamlInteger(data) {
        if (data === null)
          return false;
        var max = data.length, index = 0, hasDigits = false, ch;
        if (!max)
          return false;
        ch = data[index];
        if (ch === "-" || ch === "+") {
          ch = data[++index];
        }
        if (ch === "0") {
          if (index + 1 === max)
            return true;
          ch = data[++index];
          if (ch === "b") {
            index++;
            for (; index < max; index++) {
              ch = data[index];
              if (ch === "_")
                continue;
              if (ch !== "0" && ch !== "1")
                return false;
              hasDigits = true;
            }
            return hasDigits && ch !== "_";
          }
          if (ch === "x") {
            index++;
            for (; index < max; index++) {
              ch = data[index];
              if (ch === "_")
                continue;
              if (!isHexCode(data.charCodeAt(index)))
                return false;
              hasDigits = true;
            }
            return hasDigits && ch !== "_";
          }
          if (ch === "o") {
            index++;
            for (; index < max; index++) {
              ch = data[index];
              if (ch === "_")
                continue;
              if (!isOctCode(data.charCodeAt(index)))
                return false;
              hasDigits = true;
            }
            return hasDigits && ch !== "_";
          }
        }
        if (ch === "_")
          return false;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isDecCode(data.charCodeAt(index))) {
            return false;
          }
          hasDigits = true;
        }
        if (!hasDigits || ch === "_")
          return false;
        return true;
      }
      function constructYamlInteger(data) {
        var value = data, sign = 1, ch;
        if (value.indexOf("_") !== -1) {
          value = value.replace(/_/g, "");
        }
        ch = value[0];
        if (ch === "-" || ch === "+") {
          if (ch === "-")
            sign = -1;
          value = value.slice(1);
          ch = value[0];
        }
        if (value === "0")
          return 0;
        if (ch === "0") {
          if (value[1] === "b")
            return sign * parseInt(value.slice(2), 2);
          if (value[1] === "x")
            return sign * parseInt(value.slice(2), 16);
          if (value[1] === "o")
            return sign * parseInt(value.slice(2), 8);
        }
        return sign * parseInt(value, 10);
      }
      function isInteger(object) {
        return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
      }
      module.exports = new Type("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
          binary: function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
          },
          octal: function(obj) {
            return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
          },
          decimal: function(obj) {
            return obj.toString(10);
          },
          hexadecimal: function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
          }
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"]
        }
      });
    }
  });

  // node_modules/js-yaml/lib/type/float.js
  var require_float = __commonJS({
    "node_modules/js-yaml/lib/type/float.js"(exports, module) {
      init_globals();
      var common = require_common();
      var Type = require_type();
      var YAML_FLOAT_PATTERN = new RegExp(
        "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
      );
      function resolveYamlFloat(data) {
        if (data === null)
          return false;
        if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") {
          return false;
        }
        return true;
      }
      function constructYamlFloat(data) {
        var value, sign;
        value = data.replace(/_/g, "").toLowerCase();
        sign = value[0] === "-" ? -1 : 1;
        if ("+-".indexOf(value[0]) >= 0) {
          value = value.slice(1);
        }
        if (value === ".inf") {
          return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        } else if (value === ".nan") {
          return NaN;
        }
        return sign * parseFloat(value, 10);
      }
      var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
      function representYamlFloat(object, style) {
        var res;
        if (isNaN(object)) {
          switch (style) {
            case "lowercase":
              return ".nan";
            case "uppercase":
              return ".NAN";
            case "camelcase":
              return ".NaN";
          }
        } else if (Number.POSITIVE_INFINITY === object) {
          switch (style) {
            case "lowercase":
              return ".inf";
            case "uppercase":
              return ".INF";
            case "camelcase":
              return ".Inf";
          }
        } else if (Number.NEGATIVE_INFINITY === object) {
          switch (style) {
            case "lowercase":
              return "-.inf";
            case "uppercase":
              return "-.INF";
            case "camelcase":
              return "-.Inf";
          }
        } else if (common.isNegativeZero(object)) {
          return "-0.0";
        }
        res = object.toString(10);
        return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
      }
      function isFloat(object) {
        return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
      }
      module.exports = new Type("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: "lowercase"
      });
    }
  });

  // node_modules/js-yaml/lib/schema/json.js
  var require_json = __commonJS({
    "node_modules/js-yaml/lib/schema/json.js"(exports, module) {
      init_globals();
      module.exports = require_failsafe().extend({
        implicit: [
          require_null(),
          require_bool(),
          require_int(),
          require_float()
        ]
      });
    }
  });

  // node_modules/js-yaml/lib/schema/core.js
  var require_core = __commonJS({
    "node_modules/js-yaml/lib/schema/core.js"(exports, module) {
      init_globals();
      module.exports = require_json();
    }
  });

  // node_modules/js-yaml/lib/type/timestamp.js
  var require_timestamp = __commonJS({
    "node_modules/js-yaml/lib/type/timestamp.js"(exports, module) {
      init_globals();
      var Type = require_type();
      var YAML_DATE_REGEXP = new RegExp(
        "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
      );
      var YAML_TIMESTAMP_REGEXP = new RegExp(
        "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
      );
      function resolveYamlTimestamp(data) {
        if (data === null)
          return false;
        if (YAML_DATE_REGEXP.exec(data) !== null)
          return true;
        if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
          return true;
        return false;
      }
      function constructYamlTimestamp(data) {
        var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date2;
        match = YAML_DATE_REGEXP.exec(data);
        if (match === null)
          match = YAML_TIMESTAMP_REGEXP.exec(data);
        if (match === null)
          throw new Error("Date resolve error");
        year = +match[1];
        month = +match[2] - 1;
        day = +match[3];
        if (!match[4]) {
          return new Date(Date.UTC(year, month, day));
        }
        hour = +match[4];
        minute = +match[5];
        second = +match[6];
        if (match[7]) {
          fraction = match[7].slice(0, 3);
          while (fraction.length < 3) {
            fraction += "0";
          }
          fraction = +fraction;
        }
        if (match[9]) {
          tz_hour = +match[10];
          tz_minute = +(match[11] || 0);
          delta = (tz_hour * 60 + tz_minute) * 6e4;
          if (match[9] === "-")
            delta = -delta;
        }
        date2 = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
        if (delta)
          date2.setTime(date2.getTime() - delta);
        return date2;
      }
      function representYamlTimestamp(object) {
        return object.toISOString();
      }
      module.exports = new Type("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp
      });
    }
  });

  // node_modules/js-yaml/lib/type/merge.js
  var require_merge = __commonJS({
    "node_modules/js-yaml/lib/type/merge.js"(exports, module) {
      init_globals();
      var Type = require_type();
      function resolveYamlMerge(data) {
        return data === "<<" || data === null;
      }
      module.exports = new Type("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: resolveYamlMerge
      });
    }
  });

  // node_modules/js-yaml/lib/type/binary.js
  var require_binary = __commonJS({
    "node_modules/js-yaml/lib/type/binary.js"(exports, module) {
      init_globals();
      var Type = require_type();
      var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      function resolveYamlBinary(data) {
        if (data === null)
          return false;
        var code2, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
        for (idx = 0; idx < max; idx++) {
          code2 = map.indexOf(data.charAt(idx));
          if (code2 > 64)
            continue;
          if (code2 < 0)
            return false;
          bitlen += 6;
        }
        return bitlen % 8 === 0;
      }
      function constructYamlBinary(data) {
        var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
        for (idx = 0; idx < max; idx++) {
          if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
          }
          bits = bits << 6 | map.indexOf(input.charAt(idx));
        }
        tailbits = max % 4 * 6;
        if (tailbits === 0) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        } else if (tailbits === 18) {
          result.push(bits >> 10 & 255);
          result.push(bits >> 2 & 255);
        } else if (tailbits === 12) {
          result.push(bits >> 4 & 255);
        }
        return new Uint8Array(result);
      }
      function representYamlBinary(object) {
        var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
        for (idx = 0; idx < max; idx++) {
          if (idx % 3 === 0 && idx) {
            result += map[bits >> 18 & 63];
            result += map[bits >> 12 & 63];
            result += map[bits >> 6 & 63];
            result += map[bits & 63];
          }
          bits = (bits << 8) + object[idx];
        }
        tail = max % 3;
        if (tail === 0) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        } else if (tail === 2) {
          result += map[bits >> 10 & 63];
          result += map[bits >> 4 & 63];
          result += map[bits << 2 & 63];
          result += map[64];
        } else if (tail === 1) {
          result += map[bits >> 2 & 63];
          result += map[bits << 4 & 63];
          result += map[64];
          result += map[64];
        }
        return result;
      }
      function isBinary(obj) {
        return Object.prototype.toString.call(obj) === "[object Uint8Array]";
      }
      module.exports = new Type("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary
      });
    }
  });

  // node_modules/js-yaml/lib/type/omap.js
  var require_omap = __commonJS({
    "node_modules/js-yaml/lib/type/omap.js"(exports, module) {
      init_globals();
      var Type = require_type();
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var _toString = Object.prototype.toString;
      function resolveYamlOmap(data) {
        if (data === null)
          return true;
        var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];
          pairHasKey = false;
          if (_toString.call(pair) !== "[object Object]")
            return false;
          for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
              if (!pairHasKey)
                pairHasKey = true;
              else
                return false;
            }
          }
          if (!pairHasKey)
            return false;
          if (objectKeys.indexOf(pairKey) === -1)
            objectKeys.push(pairKey);
          else
            return false;
        }
        return true;
      }
      function constructYamlOmap(data) {
        return data !== null ? data : [];
      }
      module.exports = new Type("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: resolveYamlOmap,
        construct: constructYamlOmap
      });
    }
  });

  // node_modules/js-yaml/lib/type/pairs.js
  var require_pairs = __commonJS({
    "node_modules/js-yaml/lib/type/pairs.js"(exports, module) {
      init_globals();
      var Type = require_type();
      var _toString = Object.prototype.toString;
      function resolveYamlPairs(data) {
        if (data === null)
          return true;
        var index, length, pair, keys, result, object = data;
        result = new Array(object.length);
        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];
          if (_toString.call(pair) !== "[object Object]")
            return false;
          keys = Object.keys(pair);
          if (keys.length !== 1)
            return false;
          result[index] = [keys[0], pair[keys[0]]];
        }
        return true;
      }
      function constructYamlPairs(data) {
        if (data === null)
          return [];
        var index, length, pair, keys, result, object = data;
        result = new Array(object.length);
        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];
          keys = Object.keys(pair);
          result[index] = [keys[0], pair[keys[0]]];
        }
        return result;
      }
      module.exports = new Type("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: resolveYamlPairs,
        construct: constructYamlPairs
      });
    }
  });

  // node_modules/js-yaml/lib/type/set.js
  var require_set = __commonJS({
    "node_modules/js-yaml/lib/type/set.js"(exports, module) {
      init_globals();
      var Type = require_type();
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      function resolveYamlSet(data) {
        if (data === null)
          return true;
        var key, object = data;
        for (key in object) {
          if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null)
              return false;
          }
        }
        return true;
      }
      function constructYamlSet(data) {
        return data !== null ? data : {};
      }
      module.exports = new Type("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: resolveYamlSet,
        construct: constructYamlSet
      });
    }
  });

  // node_modules/js-yaml/lib/schema/default.js
  var require_default = __commonJS({
    "node_modules/js-yaml/lib/schema/default.js"(exports, module) {
      init_globals();
      module.exports = require_core().extend({
        implicit: [
          require_timestamp(),
          require_merge()
        ],
        explicit: [
          require_binary(),
          require_omap(),
          require_pairs(),
          require_set()
        ]
      });
    }
  });

  // node_modules/js-yaml/lib/loader.js
  var require_loader = __commonJS({
    "node_modules/js-yaml/lib/loader.js"(exports, module) {
      init_globals();
      var common = require_common();
      var YAMLException = require_exception();
      var makeSnippet = require_snippet();
      var DEFAULT_SCHEMA = require_default();
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var CONTEXT_FLOW_IN = 1;
      var CONTEXT_FLOW_OUT = 2;
      var CONTEXT_BLOCK_IN = 3;
      var CONTEXT_BLOCK_OUT = 4;
      var CHOMPING_CLIP = 1;
      var CHOMPING_STRIP = 2;
      var CHOMPING_KEEP = 3;
      var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
      var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
      var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
      var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function _class(obj) {
        return Object.prototype.toString.call(obj);
      }
      function is_EOL(c) {
        return c === 10 || c === 13;
      }
      function is_WHITE_SPACE(c) {
        return c === 9 || c === 32;
      }
      function is_WS_OR_EOL(c) {
        return c === 9 || c === 32 || c === 10 || c === 13;
      }
      function is_FLOW_INDICATOR(c) {
        return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
      }
      function fromHexCode(c) {
        var lc;
        if (48 <= c && c <= 57) {
          return c - 48;
        }
        lc = c | 32;
        if (97 <= lc && lc <= 102) {
          return lc - 97 + 10;
        }
        return -1;
      }
      function escapedHexLen(c) {
        if (c === 120) {
          return 2;
        }
        if (c === 117) {
          return 4;
        }
        if (c === 85) {
          return 8;
        }
        return 0;
      }
      function fromDecimalCode(c) {
        if (48 <= c && c <= 57) {
          return c - 48;
        }
        return -1;
      }
      function simpleEscapeSequence(c) {
        return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
      }
      function charFromCodepoint(c) {
        if (c <= 65535) {
          return String.fromCharCode(c);
        }
        return String.fromCharCode(
          (c - 65536 >> 10) + 55296,
          (c - 65536 & 1023) + 56320
        );
      }
      var simpleEscapeCheck = new Array(256);
      var simpleEscapeMap = new Array(256);
      for (i = 0; i < 256; i++) {
        simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
        simpleEscapeMap[i] = simpleEscapeSequence(i);
      }
      var i;
      function State(input, options) {
        this.input = input;
        this.filename = options["filename"] || null;
        this.schema = options["schema"] || DEFAULT_SCHEMA;
        this.onWarning = options["onWarning"] || null;
        this.legacy = options["legacy"] || false;
        this.json = options["json"] || false;
        this.listener = options["listener"] || null;
        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;
        this.length = input.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;
        this.firstTabInLine = -1;
        this.documents = [];
      }
      function generateError(state, message) {
        var mark = {
          name: state.filename,
          buffer: state.input.slice(0, -1),
          position: state.position,
          line: state.line,
          column: state.position - state.lineStart
        };
        mark.snippet = makeSnippet(mark);
        return new YAMLException(message, mark);
      }
      function throwError(state, message) {
        throw generateError(state, message);
      }
      function throwWarning(state, message) {
        if (state.onWarning) {
          state.onWarning.call(null, generateError(state, message));
        }
      }
      var directiveHandlers = {
        YAML: function handleYamlDirective(state, name, args) {
          var match, major, minor;
          if (state.version !== null) {
            throwError(state, "duplication of %YAML directive");
          }
          if (args.length !== 1) {
            throwError(state, "YAML directive accepts exactly one argument");
          }
          match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
          if (match === null) {
            throwError(state, "ill-formed argument of the YAML directive");
          }
          major = parseInt(match[1], 10);
          minor = parseInt(match[2], 10);
          if (major !== 1) {
            throwError(state, "unacceptable YAML version of the document");
          }
          state.version = args[0];
          state.checkLineBreaks = minor < 2;
          if (minor !== 1 && minor !== 2) {
            throwWarning(state, "unsupported YAML version of the document");
          }
        },
        TAG: function handleTagDirective(state, name, args) {
          var handle, prefix;
          if (args.length !== 2) {
            throwError(state, "TAG directive accepts exactly two arguments");
          }
          handle = args[0];
          prefix = args[1];
          if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
          }
          if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
          }
          if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
          }
          try {
            prefix = decodeURIComponent(prefix);
          } catch (err) {
            throwError(state, "tag prefix is malformed: " + prefix);
          }
          state.tagMap[handle] = prefix;
        }
      };
      function captureSegment(state, start, end, checkJson) {
        var _position, _length, _character, _result;
        if (start < end) {
          _result = state.input.slice(start, end);
          if (checkJson) {
            for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
              _character = _result.charCodeAt(_position);
              if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
                throwError(state, "expected valid JSON character");
              }
            }
          } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, "the stream contains non-printable characters");
          }
          state.result += _result;
        }
      }
      function mergeMappings(state, destination, source2, overridableKeys) {
        var sourceKeys, key, index, quantity;
        if (!common.isObject(source2)) {
          throwError(state, "cannot merge mappings; the provided source object is unacceptable");
        }
        sourceKeys = Object.keys(source2);
        for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
          key = sourceKeys[index];
          if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source2[key];
            overridableKeys[key] = true;
          }
        }
      }
      function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
        var index, quantity;
        if (Array.isArray(keyNode)) {
          keyNode = Array.prototype.slice.call(keyNode);
          for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
            if (Array.isArray(keyNode[index])) {
              throwError(state, "nested arrays are not supported inside keys");
            }
            if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
              keyNode[index] = "[object Object]";
            }
          }
        }
        if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
          keyNode = "[object Object]";
        }
        keyNode = String(keyNode);
        if (_result === null) {
          _result = {};
        }
        if (keyTag === "tag:yaml.org,2002:merge") {
          if (Array.isArray(valueNode)) {
            for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
              mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
          } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
          }
        } else {
          if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.lineStart = startLineStart || state.lineStart;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
          }
          if (keyNode === "__proto__") {
            Object.defineProperty(_result, keyNode, {
              configurable: true,
              enumerable: true,
              writable: true,
              value: valueNode
            });
          } else {
            _result[keyNode] = valueNode;
          }
          delete overridableKeys[keyNode];
        }
        return _result;
      }
      function readLineBreak(state) {
        var ch;
        ch = state.input.charCodeAt(state.position);
        if (ch === 10) {
          state.position++;
        } else if (ch === 13) {
          state.position++;
          if (state.input.charCodeAt(state.position) === 10) {
            state.position++;
          }
        } else {
          throwError(state, "a line break is expected");
        }
        state.line += 1;
        state.lineStart = state.position;
        state.firstTabInLine = -1;
      }
      function skipSeparationSpace(state, allowComments, checkIndent) {
        var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            if (ch === 9 && state.firstTabInLine === -1) {
              state.firstTabInLine = state.position;
            }
            ch = state.input.charCodeAt(++state.position);
          }
          if (allowComments && ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 10 && ch !== 13 && ch !== 0);
          }
          if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while (ch === 32) {
              state.lineIndent++;
              ch = state.input.charCodeAt(++state.position);
            }
          } else {
            break;
          }
        }
        if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
          throwWarning(state, "deficient indentation");
        }
        return lineBreaks;
      }
      function testDocumentSeparator(state) {
        var _position = state.position, ch;
        ch = state.input.charCodeAt(_position);
        if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
          _position += 3;
          ch = state.input.charCodeAt(_position);
          if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
          }
        }
        return false;
      }
      function writeFoldedLines(state, count) {
        if (count === 1) {
          state.result += " ";
        } else if (count > 1) {
          state.result += common.repeat("\n", count - 1);
        }
      }
      function readPlainScalar(state, nodeIndent, withinFlowCollection) {
        var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
        ch = state.input.charCodeAt(state.position);
        if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
          return false;
        }
        if (ch === 63 || ch === 45) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
          }
        }
        state.kind = "scalar";
        state.result = "";
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
        while (ch !== 0) {
          if (ch === 58) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
              break;
            }
          } else if (ch === 35) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
              break;
            }
          } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
          } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
              hasPendingContent = true;
              ch = state.input.charCodeAt(state.position);
              continue;
            } else {
              state.position = captureEnd;
              state.line = _line;
              state.lineStart = _lineStart;
              state.lineIndent = _lineIndent;
              break;
            }
          }
          if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
          }
          if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
          }
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, captureEnd, false);
        if (state.result) {
          return true;
        }
        state.kind = _kind;
        state.result = _result;
        return false;
      }
      function readSingleQuotedScalar(state, nodeIndent) {
        var ch, captureStart, captureEnd;
        ch = state.input.charCodeAt(state.position);
        if (ch !== 39) {
          return false;
        }
        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;
        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 39) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 39) {
              captureStart = state.position;
              state.position++;
              captureEnd = state.position;
            } else {
              return true;
            }
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
          } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a single quoted scalar");
          } else {
            state.position++;
            captureEnd = state.position;
          }
        }
        throwError(state, "unexpected end of the stream within a single quoted scalar");
      }
      function readDoubleQuotedScalar(state, nodeIndent) {
        var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch !== 34) {
          return false;
        }
        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;
        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 34) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
          } else if (ch === 92) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
              skipSeparationSpace(state, false, nodeIndent);
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
              state.result += simpleEscapeMap[ch];
              state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
              hexLength = tmp;
              hexResult = 0;
              for (; hexLength > 0; hexLength--) {
                ch = state.input.charCodeAt(++state.position);
                if ((tmp = fromHexCode(ch)) >= 0) {
                  hexResult = (hexResult << 4) + tmp;
                } else {
                  throwError(state, "expected hexadecimal character");
                }
              }
              state.result += charFromCodepoint(hexResult);
              state.position++;
            } else {
              throwError(state, "unknown escape sequence");
            }
            captureStart = captureEnd = state.position;
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
          } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a double quoted scalar");
          } else {
            state.position++;
            captureEnd = state.position;
          }
        }
        throwError(state, "unexpected end of the stream within a double quoted scalar");
      }
      function readFlowCollection(state, nodeIndent) {
        var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch === 91) {
          terminator = 93;
          isMapping = false;
          _result = [];
        } else if (ch === 123) {
          terminator = 125;
          isMapping = true;
          _result = {};
        } else {
          return false;
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }
        ch = state.input.charCodeAt(++state.position);
        while (ch !== 0) {
          skipSeparationSpace(state, true, nodeIndent);
          ch = state.input.charCodeAt(state.position);
          if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
          } else if (!readNext) {
            throwError(state, "missed comma between flow collection entries");
          } else if (ch === 44) {
            throwError(state, "expected the node content, but found ','");
          }
          keyTag = keyNode = valueNode = null;
          isPair = isExplicitPair = false;
          if (ch === 63) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
              isPair = isExplicitPair = true;
              state.position++;
              skipSeparationSpace(state, true, nodeIndent);
            }
          }
          _line = state.line;
          _lineStart = state.lineStart;
          _pos = state.position;
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          keyTag = state.tag;
          keyNode = state.result;
          skipSeparationSpace(state, true, nodeIndent);
          ch = state.input.charCodeAt(state.position);
          if ((isExplicitPair || state.line === _line) && ch === 58) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
          }
          if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
          } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
          } else {
            _result.push(keyNode);
          }
          skipSeparationSpace(state, true, nodeIndent);
          ch = state.input.charCodeAt(state.position);
          if (ch === 44) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
          } else {
            readNext = false;
          }
        }
        throwError(state, "unexpected end of the stream within a flow collection");
      }
      function readBlockScalar(state, nodeIndent) {
        var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch === 124) {
          folding = false;
        } else if (ch === 62) {
          folding = true;
        } else {
          return false;
        }
        state.kind = "scalar";
        state.result = "";
        while (ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
          if (ch === 43 || ch === 45) {
            if (CHOMPING_CLIP === chomping) {
              chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
              throwError(state, "repeat of a chomping mode identifier");
            }
          } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
              throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!detectedIndent) {
              textIndent = nodeIndent + tmp - 1;
              detectedIndent = true;
            } else {
              throwError(state, "repeat of an indentation width identifier");
            }
          } else {
            break;
          }
        }
        if (is_WHITE_SPACE(ch)) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (is_WHITE_SPACE(ch));
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (!is_EOL(ch) && ch !== 0);
          }
        }
        while (ch !== 0) {
          readLineBreak(state);
          state.lineIndent = 0;
          ch = state.input.charCodeAt(state.position);
          while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
          if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
          }
          if (is_EOL(ch)) {
            emptyLines++;
            continue;
          }
          if (state.lineIndent < textIndent) {
            if (chomping === CHOMPING_KEEP) {
              state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
              if (didReadContent) {
                state.result += "\n";
              }
            }
            break;
          }
          if (folding) {
            if (is_WHITE_SPACE(ch)) {
              atMoreIndented = true;
              state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (atMoreIndented) {
              atMoreIndented = false;
              state.result += common.repeat("\n", emptyLines + 1);
            } else if (emptyLines === 0) {
              if (didReadContent) {
                state.result += " ";
              }
            } else {
              state.result += common.repeat("\n", emptyLines);
            }
          } else {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          }
          didReadContent = true;
          detectedIndent = true;
          emptyLines = 0;
          captureStart = state.position;
          while (!is_EOL(ch) && ch !== 0) {
            ch = state.input.charCodeAt(++state.position);
          }
          captureSegment(state, captureStart, state.position, false);
        }
        return true;
      }
      function readBlockSequence(state, nodeIndent) {
        var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
        if (state.firstTabInLine !== -1)
          return false;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }
        ch = state.input.charCodeAt(state.position);
        while (ch !== 0) {
          if (state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
          }
          if (ch !== 45) {
            break;
          }
          following = state.input.charCodeAt(state.position + 1);
          if (!is_WS_OR_EOL(following)) {
            break;
          }
          detected = true;
          state.position++;
          if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
              _result.push(null);
              ch = state.input.charCodeAt(state.position);
              continue;
            }
          }
          _line = state.line;
          composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
          _result.push(state.result);
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
          if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a sequence entry");
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }
        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = "sequence";
          state.result = _result;
          return true;
        }
        return false;
      }
      function readBlockMapping(state, nodeIndent, flowIndent) {
        var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
        if (state.firstTabInLine !== -1)
          return false;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }
        ch = state.input.charCodeAt(state.position);
        while (ch !== 0) {
          if (!atExplicitKey && state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
          }
          following = state.input.charCodeAt(state.position + 1);
          _line = state.line;
          if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
            if (ch === 63) {
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = true;
              allowCompact = true;
            } else if (atExplicitKey) {
              atExplicitKey = false;
              allowCompact = true;
            } else {
              throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            state.position += 1;
            ch = following;
          } else {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
            if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
              break;
            }
            if (state.line === _line) {
              ch = state.input.charCodeAt(state.position);
              while (is_WHITE_SPACE(ch)) {
                ch = state.input.charCodeAt(++state.position);
              }
              if (ch === 58) {
                ch = state.input.charCodeAt(++state.position);
                if (!is_WS_OR_EOL(ch)) {
                  throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                }
                if (atExplicitKey) {
                  storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                  keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = false;
                allowCompact = false;
                keyTag = state.tag;
                keyNode = state.result;
              } else if (detected) {
                throwError(state, "can not read an implicit mapping pair; a colon is missed");
              } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true;
              }
            } else if (detected) {
              throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          }
          if (state.line === _line || state.lineIndent > nodeIndent) {
            if (atExplicitKey) {
              _keyLine = state.line;
              _keyLineStart = state.lineStart;
              _keyPos = state.position;
            }
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
              if (atExplicitKey) {
                keyNode = state.result;
              } else {
                valueNode = state.result;
              }
            }
            if (!atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
              keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
          }
          if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a mapping entry");
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
        }
        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = "mapping";
          state.result = _result;
        }
        return detected;
      }
      function readTagProperty(state) {
        var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch !== 33)
          return false;
        if (state.tag !== null) {
          throwError(state, "duplication of a tag property");
        }
        ch = state.input.charCodeAt(++state.position);
        if (ch === 60) {
          isVerbatim = true;
          ch = state.input.charCodeAt(++state.position);
        } else if (ch === 33) {
          isNamed = true;
          tagHandle = "!!";
          ch = state.input.charCodeAt(++state.position);
        } else {
          tagHandle = "!";
        }
        _position = state.position;
        if (isVerbatim) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && ch !== 62);
          if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
          } else {
            throwError(state, "unexpected end of the stream within a verbatim tag");
          }
        } else {
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            if (ch === 33) {
              if (!isNamed) {
                tagHandle = state.input.slice(_position - 1, state.position + 1);
                if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                  throwError(state, "named tag handle cannot contain such characters");
                }
                isNamed = true;
                _position = state.position + 1;
              } else {
                throwError(state, "tag suffix cannot contain exclamation marks");
              }
            }
            ch = state.input.charCodeAt(++state.position);
          }
          tagName = state.input.slice(_position, state.position);
          if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, "tag suffix cannot contain flow indicator characters");
          }
        }
        if (tagName && !PATTERN_TAG_URI.test(tagName)) {
          throwError(state, "tag name cannot contain such characters: " + tagName);
        }
        try {
          tagName = decodeURIComponent(tagName);
        } catch (err) {
          throwError(state, "tag name is malformed: " + tagName);
        }
        if (isVerbatim) {
          state.tag = tagName;
        } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
          state.tag = state.tagMap[tagHandle] + tagName;
        } else if (tagHandle === "!") {
          state.tag = "!" + tagName;
        } else if (tagHandle === "!!") {
          state.tag = "tag:yaml.org,2002:" + tagName;
        } else {
          throwError(state, 'undeclared tag handle "' + tagHandle + '"');
        }
        return true;
      }
      function readAnchorProperty(state) {
        var _position, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch !== 38)
          return false;
        if (state.anchor !== null) {
          throwError(state, "duplication of an anchor property");
        }
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (state.position === _position) {
          throwError(state, "name of an anchor node must contain at least one character");
        }
        state.anchor = state.input.slice(_position, state.position);
        return true;
      }
      function readAlias(state) {
        var _position, alias, ch;
        ch = state.input.charCodeAt(state.position);
        if (ch !== 42)
          return false;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (state.position === _position) {
          throwError(state, "name of an alias node must contain at least one character");
        }
        alias = state.input.slice(_position, state.position);
        if (!_hasOwnProperty.call(state.anchorMap, alias)) {
          throwError(state, 'unidentified alias "' + alias + '"');
        }
        state.result = state.anchorMap[alias];
        skipSeparationSpace(state, true, -1);
        return true;
      }
      function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
        var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
        if (state.listener !== null) {
          state.listener("open", state);
        }
        state.tag = null;
        state.anchor = null;
        state.kind = null;
        state.result = null;
        allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
        if (allowToSeek) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          }
        }
        if (indentStatus === 1) {
          while (readTagProperty(state) || readAnchorProperty(state)) {
            if (skipSeparationSpace(state, true, -1)) {
              atNewLine = true;
              allowBlockCollections = allowBlockStyles;
              if (state.lineIndent > parentIndent) {
                indentStatus = 1;
              } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
              } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
              }
            } else {
              allowBlockCollections = false;
            }
          }
        }
        if (allowBlockCollections) {
          allowBlockCollections = atNewLine || allowCompact;
        }
        if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
          if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
          } else {
            flowIndent = parentIndent + 1;
          }
          blockIndent = state.position - state.lineStart;
          if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
              hasContent = true;
            } else {
              if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                hasContent = true;
              } else if (readAlias(state)) {
                hasContent = true;
                if (state.tag !== null || state.anchor !== null) {
                  throwError(state, "alias node should not have any properties");
                }
              } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                hasContent = true;
                if (state.tag === null) {
                  state.tag = "?";
                }
              }
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
            }
          } else if (indentStatus === 0) {
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
          }
        }
        if (state.tag === null) {
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        } else if (state.tag === "?") {
          if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type2 = state.implicitTypes[typeIndex];
            if (type2.resolve(state.result)) {
              state.result = type2.construct(state.result);
              state.tag = type2.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (state.tag !== "!") {
          if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
            type2 = state.typeMap[state.kind || "fallback"][state.tag];
          } else {
            type2 = null;
            typeList = state.typeMap.multi[state.kind || "fallback"];
            for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
              if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                type2 = typeList[typeIndex];
                break;
              }
            }
          }
          if (!type2) {
            throwError(state, "unknown tag !<" + state.tag + ">");
          }
          if (state.result !== null && type2.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
          }
          if (!type2.resolve(state.result, state.tag)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
          } else {
            state.result = type2.construct(state.result, state.tag);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        }
        if (state.listener !== null) {
          state.listener("close", state);
        }
        return state.tag !== null || state.anchor !== null || hasContent;
      }
      function readDocument(state) {
        var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
        state.version = null;
        state.checkLineBreaks = state.legacy;
        state.tagMap = /* @__PURE__ */ Object.create(null);
        state.anchorMap = /* @__PURE__ */ Object.create(null);
        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
          if (state.lineIndent > 0 || ch !== 37) {
            break;
          }
          hasDirectives = true;
          ch = state.input.charCodeAt(++state.position);
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveName = state.input.slice(_position, state.position);
          directiveArgs = [];
          if (directiveName.length < 1) {
            throwError(state, "directive name must not be less than one character in length");
          }
          while (ch !== 0) {
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 35) {
              do {
                ch = state.input.charCodeAt(++state.position);
              } while (ch !== 0 && !is_EOL(ch));
              break;
            }
            if (is_EOL(ch))
              break;
            _position = state.position;
            while (ch !== 0 && !is_WS_OR_EOL(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
          }
          if (ch !== 0)
            readLineBreak(state);
          if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
          } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
          }
        }
        skipSeparationSpace(state, true, -1);
        if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        } else if (hasDirectives) {
          throwError(state, "directives end mark is expected");
        }
        composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
        skipSeparationSpace(state, true, -1);
        if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
          throwWarning(state, "non-ASCII line breaks are interpreted as content");
        }
        state.documents.push(state.result);
        if (state.position === state.lineStart && testDocumentSeparator(state)) {
          if (state.input.charCodeAt(state.position) === 46) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
          }
          return;
        }
        if (state.position < state.length - 1) {
          throwError(state, "end of the stream or a document separator is expected");
        } else {
          return;
        }
      }
      function loadDocuments(input, options) {
        input = String(input);
        options = options || {};
        if (input.length !== 0) {
          if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
            input += "\n";
          }
          if (input.charCodeAt(0) === 65279) {
            input = input.slice(1);
          }
        }
        var state = new State(input, options);
        var nullpos = input.indexOf("\0");
        if (nullpos !== -1) {
          state.position = nullpos;
          throwError(state, "null byte is not allowed in input");
        }
        state.input += "\0";
        while (state.input.charCodeAt(state.position) === 32) {
          state.lineIndent += 1;
          state.position += 1;
        }
        while (state.position < state.length - 1) {
          readDocument(state);
        }
        return state.documents;
      }
      function loadAll(input, iterator, options) {
        if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
          options = iterator;
          iterator = null;
        }
        var documents = loadDocuments(input, options);
        if (typeof iterator !== "function") {
          return documents;
        }
        for (var index = 0, length = documents.length; index < length; index += 1) {
          iterator(documents[index]);
        }
      }
      function load(input, options) {
        var documents = loadDocuments(input, options);
        if (documents.length === 0) {
          return void 0;
        } else if (documents.length === 1) {
          return documents[0];
        }
        throw new YAMLException("expected a single document in the stream, but found more");
      }
      module.exports.loadAll = loadAll;
      module.exports.load = load;
    }
  });

  // node_modules/js-yaml/lib/dumper.js
  var require_dumper = __commonJS({
    "node_modules/js-yaml/lib/dumper.js"(exports, module) {
      init_globals();
      var common = require_common();
      var YAMLException = require_exception();
      var DEFAULT_SCHEMA = require_default();
      var _toString = Object.prototype.toString;
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var CHAR_BOM = 65279;
      var CHAR_TAB = 9;
      var CHAR_LINE_FEED = 10;
      var CHAR_CARRIAGE_RETURN = 13;
      var CHAR_SPACE = 32;
      var CHAR_EXCLAMATION = 33;
      var CHAR_DOUBLE_QUOTE = 34;
      var CHAR_SHARP = 35;
      var CHAR_PERCENT = 37;
      var CHAR_AMPERSAND = 38;
      var CHAR_SINGLE_QUOTE = 39;
      var CHAR_ASTERISK = 42;
      var CHAR_COMMA = 44;
      var CHAR_MINUS = 45;
      var CHAR_COLON = 58;
      var CHAR_EQUALS = 61;
      var CHAR_GREATER_THAN = 62;
      var CHAR_QUESTION = 63;
      var CHAR_COMMERCIAL_AT = 64;
      var CHAR_LEFT_SQUARE_BRACKET = 91;
      var CHAR_RIGHT_SQUARE_BRACKET = 93;
      var CHAR_GRAVE_ACCENT = 96;
      var CHAR_LEFT_CURLY_BRACKET = 123;
      var CHAR_VERTICAL_LINE = 124;
      var CHAR_RIGHT_CURLY_BRACKET = 125;
      var ESCAPE_SEQUENCES = {};
      ESCAPE_SEQUENCES[0] = "\\0";
      ESCAPE_SEQUENCES[7] = "\\a";
      ESCAPE_SEQUENCES[8] = "\\b";
      ESCAPE_SEQUENCES[9] = "\\t";
      ESCAPE_SEQUENCES[10] = "\\n";
      ESCAPE_SEQUENCES[11] = "\\v";
      ESCAPE_SEQUENCES[12] = "\\f";
      ESCAPE_SEQUENCES[13] = "\\r";
      ESCAPE_SEQUENCES[27] = "\\e";
      ESCAPE_SEQUENCES[34] = '\\"';
      ESCAPE_SEQUENCES[92] = "\\\\";
      ESCAPE_SEQUENCES[133] = "\\N";
      ESCAPE_SEQUENCES[160] = "\\_";
      ESCAPE_SEQUENCES[8232] = "\\L";
      ESCAPE_SEQUENCES[8233] = "\\P";
      var DEPRECATED_BOOLEANS_SYNTAX = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF"
      ];
      var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
      function compileStyleMap(schema2, map) {
        var result, keys, index, length, tag, style, type2;
        if (map === null)
          return {};
        result = {};
        keys = Object.keys(map);
        for (index = 0, length = keys.length; index < length; index += 1) {
          tag = keys[index];
          style = String(map[tag]);
          if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
          }
          type2 = schema2.compiledTypeMap["fallback"][tag];
          if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
            style = type2.styleAliases[style];
          }
          result[tag] = style;
        }
        return result;
      }
      function encodeHex(character) {
        var string, handle, length;
        string = character.toString(16).toUpperCase();
        if (character <= 255) {
          handle = "x";
          length = 2;
        } else if (character <= 65535) {
          handle = "u";
          length = 4;
        } else if (character <= 4294967295) {
          handle = "U";
          length = 8;
        } else {
          throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
        }
        return "\\" + handle + common.repeat("0", length - string.length) + string;
      }
      var QUOTING_TYPE_SINGLE = 1;
      var QUOTING_TYPE_DOUBLE = 2;
      function State(options) {
        this.schema = options["schema"] || DEFAULT_SCHEMA;
        this.indent = Math.max(1, options["indent"] || 2);
        this.noArrayIndent = options["noArrayIndent"] || false;
        this.skipInvalid = options["skipInvalid"] || false;
        this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
        this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
        this.sortKeys = options["sortKeys"] || false;
        this.lineWidth = options["lineWidth"] || 80;
        this.noRefs = options["noRefs"] || false;
        this.noCompatMode = options["noCompatMode"] || false;
        this.condenseFlow = options["condenseFlow"] || false;
        this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
        this.forceQuotes = options["forceQuotes"] || false;
        this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
        this.implicitTypes = this.schema.compiledImplicit;
        this.explicitTypes = this.schema.compiledExplicit;
        this.tag = null;
        this.result = "";
        this.duplicates = [];
        this.usedDuplicates = null;
      }
      function indentString(string, spaces) {
        var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
        while (position < length) {
          next = string.indexOf("\n", position);
          if (next === -1) {
            line = string.slice(position);
            position = length;
          } else {
            line = string.slice(position, next + 1);
            position = next + 1;
          }
          if (line.length && line !== "\n")
            result += ind;
          result += line;
        }
        return result;
      }
      function generateNextLine(state, level) {
        return "\n" + common.repeat(" ", state.indent * level);
      }
      function testImplicitResolving(state, str) {
        var index, length, type2;
        for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
          type2 = state.implicitTypes[index];
          if (type2.resolve(str)) {
            return true;
          }
        }
        return false;
      }
      function isWhitespace(c) {
        return c === CHAR_SPACE || c === CHAR_TAB;
      }
      function isPrintable(c) {
        return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
      }
      function isNsCharOrWhitespace(c) {
        return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
      }
      function isPlainSafe(c, prev, inblock) {
        var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
        var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
        return (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
      }
      function isPlainSafeFirst(c) {
        return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
      }
      function isPlainSafeLast(c) {
        return !isWhitespace(c) && c !== CHAR_COLON;
      }
      function codePointAt(string, pos) {
        var first = string.charCodeAt(pos), second;
        if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
          second = string.charCodeAt(pos + 1);
          if (second >= 56320 && second <= 57343) {
            return (first - 55296) * 1024 + second - 56320 + 65536;
          }
        }
        return first;
      }
      function needIndentIndicator(string) {
        var leadingSpaceRe = /^\n* /;
        return leadingSpaceRe.test(string);
      }
      var STYLE_PLAIN = 1;
      var STYLE_SINGLE = 2;
      var STYLE_LITERAL = 3;
      var STYLE_FOLDED = 4;
      var STYLE_DOUBLE = 5;
      function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
        var i;
        var char = 0;
        var prevChar = null;
        var hasLineBreak = false;
        var hasFoldableLine = false;
        var shouldTrackWidth = lineWidth !== -1;
        var previousLineBreak = -1;
        var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
        if (singleLineOnly || forceQuotes) {
          for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
            char = codePointAt(string, i);
            if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
          }
        } else {
          for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
            char = codePointAt(string, i);
            if (char === CHAR_LINE_FEED) {
              hasLineBreak = true;
              if (shouldTrackWidth) {
                hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
                previousLineBreak = i;
              }
            } else if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
          }
          hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
        }
        if (!hasLineBreak && !hasFoldableLine) {
          if (plain && !forceQuotes && !testAmbiguousType(string)) {
            return STYLE_PLAIN;
          }
          return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
        }
        if (indentPerLevel > 9 && needIndentIndicator(string)) {
          return STYLE_DOUBLE;
        }
        if (!forceQuotes) {
          return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
      }
      function writeScalar(state, string, level, iskey, inblock) {
        state.dump = function() {
          if (string.length === 0) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
          }
          if (!state.noCompatMode) {
            if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
              return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
            }
          }
          var indent = state.indent * Math.max(1, level);
          var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
          var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
          function testAmbiguity(string2) {
            return testImplicitResolving(state, string2);
          }
          switch (chooseScalarStyle(
            string,
            singleLineOnly,
            state.indent,
            lineWidth,
            testAmbiguity,
            state.quotingType,
            state.forceQuotes && !iskey,
            inblock
          )) {
            case STYLE_PLAIN:
              return string;
            case STYLE_SINGLE:
              return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
              return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
              return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
              return '"' + escapeString(string, lineWidth) + '"';
            default:
              throw new YAMLException("impossible error: invalid scalar style");
          }
        }();
      }
      function blockHeader(string, indentPerLevel) {
        var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
        var clip = string[string.length - 1] === "\n";
        var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
        var chomp = keep ? "+" : clip ? "" : "-";
        return indentIndicator + chomp + "\n";
      }
      function dropEndingNewline(string) {
        return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
      }
      function foldString(string, width) {
        var lineRe = /(\n+)([^\n]*)/g;
        var result = function() {
          var nextLF = string.indexOf("\n");
          nextLF = nextLF !== -1 ? nextLF : string.length;
          lineRe.lastIndex = nextLF;
          return foldLine(string.slice(0, nextLF), width);
        }();
        var prevMoreIndented = string[0] === "\n" || string[0] === " ";
        var moreIndented;
        var match;
        while (match = lineRe.exec(string)) {
          var prefix = match[1], line = match[2];
          moreIndented = line[0] === " ";
          result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
          prevMoreIndented = moreIndented;
        }
        return result;
      }
      function foldLine(line, width) {
        if (line === "" || line[0] === " ")
          return line;
        var breakRe = / [^ ]/g;
        var match;
        var start = 0, end, curr = 0, next = 0;
        var result = "";
        while (match = breakRe.exec(line)) {
          next = match.index;
          if (next - start > width) {
            end = curr > start ? curr : next;
            result += "\n" + line.slice(start, end);
            start = end + 1;
          }
          curr = next;
        }
        result += "\n";
        if (line.length - start > width && curr > start) {
          result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
        } else {
          result += line.slice(start);
        }
        return result.slice(1);
      }
      function escapeString(string) {
        var result = "";
        var char = 0;
        var escapeSeq;
        for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = codePointAt(string, i);
          escapeSeq = ESCAPE_SEQUENCES[char];
          if (!escapeSeq && isPrintable(char)) {
            result += string[i];
            if (char >= 65536)
              result += string[i + 1];
          } else {
            result += escapeSeq || encodeHex(char);
          }
        }
        return result;
      }
      function writeFlowSequence(state, level, object) {
        var _result = "", _tag = state.tag, index, length, value;
        for (index = 0, length = object.length; index < length; index += 1) {
          value = object[index];
          if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
          }
          if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
            if (_result !== "")
              _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
          }
        }
        state.tag = _tag;
        state.dump = "[" + _result + "]";
      }
      function writeBlockSequence(state, level, object, compact) {
        var _result = "", _tag = state.tag, index, length, value;
        for (index = 0, length = object.length; index < length; index += 1) {
          value = object[index];
          if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
          }
          if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
            if (!compact || _result !== "") {
              _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              _result += "-";
            } else {
              _result += "- ";
            }
            _result += state.dump;
          }
        }
        state.tag = _tag;
        state.dump = _result || "[]";
      }
      function writeFlowMapping(state, level, object) {
        var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          pairBuffer = "";
          if (_result !== "")
            pairBuffer += ", ";
          if (state.condenseFlow)
            pairBuffer += '"';
          objectKey = objectKeyList[index];
          objectValue = object[objectKey];
          if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
          }
          if (!writeNode(state, level, objectKey, false, false)) {
            continue;
          }
          if (state.dump.length > 1024)
            pairBuffer += "? ";
          pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
          if (!writeNode(state, level, objectValue, false, false)) {
            continue;
          }
          pairBuffer += state.dump;
          _result += pairBuffer;
        }
        state.tag = _tag;
        state.dump = "{" + _result + "}";
      }
      function writeBlockMapping(state, level, object, compact) {
        var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
        if (state.sortKeys === true) {
          objectKeyList.sort();
        } else if (typeof state.sortKeys === "function") {
          objectKeyList.sort(state.sortKeys);
        } else if (state.sortKeys) {
          throw new YAMLException("sortKeys must be a boolean or a function");
        }
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          pairBuffer = "";
          if (!compact || _result !== "") {
            pairBuffer += generateNextLine(state, level);
          }
          objectKey = objectKeyList[index];
          objectValue = object[objectKey];
          if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
          }
          if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue;
          }
          explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
          if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              pairBuffer += "?";
            } else {
              pairBuffer += "? ";
            }
          }
          pairBuffer += state.dump;
          if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
          }
          if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue;
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
          } else {
            pairBuffer += ": ";
          }
          pairBuffer += state.dump;
          _result += pairBuffer;
        }
        state.tag = _tag;
        state.dump = _result || "{}";
      }
      function detectType(state, object, explicit) {
        var _result, typeList, index, length, type2, style;
        typeList = explicit ? state.explicitTypes : state.implicitTypes;
        for (index = 0, length = typeList.length; index < length; index += 1) {
          type2 = typeList[index];
          if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
            if (explicit) {
              if (type2.multi && type2.representName) {
                state.tag = type2.representName(object);
              } else {
                state.tag = type2.tag;
              }
            } else {
              state.tag = "?";
            }
            if (type2.represent) {
              style = state.styleMap[type2.tag] || type2.defaultStyle;
              if (_toString.call(type2.represent) === "[object Function]") {
                _result = type2.represent(object, style);
              } else if (_hasOwnProperty.call(type2.represent, style)) {
                _result = type2.represent[style](object, style);
              } else {
                throw new YAMLException("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
              }
              state.dump = _result;
            }
            return true;
          }
        }
        return false;
      }
      function writeNode(state, level, object, block, compact, iskey, isblockseq) {
        state.tag = null;
        state.dump = object;
        if (!detectType(state, object, false)) {
          detectType(state, object, true);
        }
        var type2 = _toString.call(state.dump);
        var inblock = block;
        var tagStr;
        if (block) {
          block = state.flowLevel < 0 || state.flowLevel > level;
        }
        var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
        if (objectOrArray) {
          duplicateIndex = state.duplicates.indexOf(object);
          duplicate = duplicateIndex !== -1;
        }
        if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
          compact = false;
        }
        if (duplicate && state.usedDuplicates[duplicateIndex]) {
          state.dump = "*ref_" + duplicateIndex;
        } else {
          if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
          }
          if (type2 === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
              writeBlockMapping(state, level, state.dump, compact);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + state.dump;
              }
            } else {
              writeFlowMapping(state, level, state.dump);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + " " + state.dump;
              }
            }
          } else if (type2 === "[object Array]") {
            if (block && state.dump.length !== 0) {
              if (state.noArrayIndent && !isblockseq && level > 0) {
                writeBlockSequence(state, level - 1, state.dump, compact);
              } else {
                writeBlockSequence(state, level, state.dump, compact);
              }
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + state.dump;
              }
            } else {
              writeFlowSequence(state, level, state.dump);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + " " + state.dump;
              }
            }
          } else if (type2 === "[object String]") {
            if (state.tag !== "?") {
              writeScalar(state, state.dump, level, iskey, inblock);
            }
          } else if (type2 === "[object Undefined]") {
            return false;
          } else {
            if (state.skipInvalid)
              return false;
            throw new YAMLException("unacceptable kind of an object to dump " + type2);
          }
          if (state.tag !== null && state.tag !== "?") {
            tagStr = encodeURI(
              state.tag[0] === "!" ? state.tag.slice(1) : state.tag
            ).replace(/!/g, "%21");
            if (state.tag[0] === "!") {
              tagStr = "!" + tagStr;
            } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
              tagStr = "!!" + tagStr.slice(18);
            } else {
              tagStr = "!<" + tagStr + ">";
            }
            state.dump = tagStr + " " + state.dump;
          }
        }
        return true;
      }
      function getDuplicateReferences(object, state) {
        var objects = [], duplicatesIndexes = [], index, length;
        inspectNode(object, objects, duplicatesIndexes);
        for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
          state.duplicates.push(objects[duplicatesIndexes[index]]);
        }
        state.usedDuplicates = new Array(length);
      }
      function inspectNode(object, objects, duplicatesIndexes) {
        var objectKeyList, index, length;
        if (object !== null && typeof object === "object") {
          index = objects.indexOf(object);
          if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
              duplicatesIndexes.push(index);
            }
          } else {
            objects.push(object);
            if (Array.isArray(object)) {
              for (index = 0, length = object.length; index < length; index += 1) {
                inspectNode(object[index], objects, duplicatesIndexes);
              }
            } else {
              objectKeyList = Object.keys(object);
              for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
              }
            }
          }
        }
      }
      function dump2(input, options) {
        options = options || {};
        var state = new State(options);
        if (!state.noRefs)
          getDuplicateReferences(input, state);
        var value = input;
        if (state.replacer) {
          value = state.replacer.call({ "": value }, "", value);
        }
        if (writeNode(state, 0, value, true, true))
          return state.dump + "\n";
        return "";
      }
      module.exports.dump = dump2;
    }
  });

  // node_modules/js-yaml/index.js
  var require_js_yaml = __commonJS({
    "node_modules/js-yaml/index.js"(exports, module) {
      init_globals();
      var loader = require_loader();
      var dumper = require_dumper();
      function renamed(from, to) {
        return function() {
          throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
        };
      }
      module.exports.Type = require_type();
      module.exports.Schema = require_schema();
      module.exports.FAILSAFE_SCHEMA = require_failsafe();
      module.exports.JSON_SCHEMA = require_json();
      module.exports.CORE_SCHEMA = require_core();
      module.exports.DEFAULT_SCHEMA = require_default();
      module.exports.load = loader.load;
      module.exports.loadAll = loader.loadAll;
      module.exports.dump = dumper.dump;
      module.exports.YAMLException = require_exception();
      module.exports.types = {
        binary: require_binary(),
        float: require_float(),
        map: require_map(),
        null: require_null(),
        pairs: require_pairs(),
        set: require_set(),
        timestamp: require_timestamp(),
        bool: require_bool(),
        int: require_int(),
        merge: require_merge(),
        omap: require_omap(),
        seq: require_seq(),
        str: require_str()
      };
      module.exports.safeLoad = renamed("safeLoad", "load");
      module.exports.safeLoadAll = renamed("safeLoadAll", "loadAll");
      module.exports.safeDump = renamed("safeDump", "dump");
    }
  });

  // translators/Better CSL YAML.ts
  var Better_CSL_YAML_exports = {};
  __export(Better_CSL_YAML_exports, {
    Translator: () => Translator,
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
  });
  init_globals();

  // translators/lib/translator.ts
  init_globals();

  // gen/preferences/meta.ts
  init_globals();
  var names = [
    "ascii",
    "asciiBibLaTeX",
    "asciiBibTeX",
    "autoAbbrev",
    "autoAbbrevStyle",
    "autoExport",
    "autoExportDelay",
    "autoExportIdleWait",
    "autoExportPathReplaceDiacritics",
    "autoExportPathReplaceDirSep",
    "autoExportPathReplaceSpace",
    "automaticTags",
    "autoPinDelay",
    "auxImport",
    "baseAttachmentPath",
    "biblatexExtendedDateFormat",
    "biblatexExtendedNameFormat",
    "biblatexExtractEprint",
    "bibtexParticleNoOp",
    "bibtexURL",
    "cache",
    "cacheFlushInterval",
    "charmap",
    "citeCommand",
    "citekeyFold",
    "citekeyFormat",
    "citekeyFormatBackup",
    "citekeySearch",
    "csquotes",
    "DOIandURL",
    "exportBibTeXStrings",
    "exportBraceProtection",
    "exportTitleCase",
    "extraMergeCitekeys",
    "extraMergeCSL",
    "extraMergeTeX",
    "git",
    "import",
    "importBibTeXStrings",
    "importCaseProtection",
    "importCitationKey",
    "importExtra",
    "importJabRefAbbreviations",
    "importJabRefStrings",
    "importNoteToExtra",
    "importSentenceCase",
    "importUnknownTexCommand",
    "itemObserverDelay",
    "jabrefFormat",
    "jieba",
    "keyConflictPolicy",
    "keyScope",
    "kuroshiro",
    "language",
    "mapMath",
    "mapText",
    "mapUnicode",
    "parseParticles",
    "patchDates",
    "platform",
    "postscript",
    "postscriptOverride",
    "preferencesOverride",
    "qualityReport",
    "quickCopyEta",
    "quickCopyMode",
    "quickCopyOrgMode",
    "quickCopyPandocBrackets",
    "quickCopySelectLink",
    "rawImports",
    "rawLaTag",
    "relativeFilePaths",
    "retainCache",
    "scrubDatabase",
    "separatorList",
    "separatorNames",
    "skipFields",
    "skipWords",
    "startupProgress",
    "strings",
    "stringsOverride",
    "testing",
    "verbatimFields",
    "warnBulkModify",
    "warnTitleCased"
  ];
  var affects = {
    ascii: ["Better BibLaTeX", "Better BibTeX"],
    asciiBibLaTeX: ["Better BibLaTeX"],
    asciiBibTeX: ["Better BibTeX"],
    autoAbbrev: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    autoAbbrevStyle: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    automaticTags: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    baseAttachmentPath: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    biblatexExtendedDateFormat: ["Better BibLaTeX"],
    biblatexExtendedNameFormat: ["Better BibLaTeX"],
    biblatexExtractEprint: ["Better BibLaTeX", "Better BibTeX"],
    bibtexParticleNoOp: ["Better BibTeX"],
    bibtexURL: ["Better BibTeX"],
    cache: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    charmap: ["Better BibLaTeX", "Better BibTeX"],
    csquotes: ["Better BibLaTeX", "Better BibTeX"],
    DOIandURL: ["Better BibLaTeX", "Better BibTeX"],
    exportBibTeXStrings: ["Better BibLaTeX", "Better BibTeX"],
    exportBraceProtection: ["Better BibLaTeX", "Better BibTeX"],
    exportTitleCase: ["Better BibLaTeX", "Better BibTeX"],
    jabrefFormat: ["Better BibLaTeX", "Better BibTeX"],
    language: ["Better BibLaTeX", "Better BibTeX"],
    mapMath: ["Better BibLaTeX", "Better BibTeX"],
    mapText: ["Better BibLaTeX", "Better BibTeX"],
    mapUnicode: ["Better BibLaTeX", "Better BibTeX"],
    parseParticles: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    postscript: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    qualityReport: ["Better BibLaTeX", "Better BibTeX"],
    rawLaTag: ["Better BibLaTeX", "Better BibTeX"],
    relativeFilePaths: ["Better BibLaTeX", "Better BibTeX"],
    separatorList: ["Better BibLaTeX", "Better BibTeX"],
    separatorNames: ["Better BibLaTeX", "Better BibTeX"],
    skipFields: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    skipWords: ["Better BibLaTeX", "Better BibTeX"],
    strings: ["Better BibLaTeX", "Better BibTeX"]
  };
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: false,
    biblatexExtractEprint: true,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheFlushInterval: 5,
    charmap: "",
    citeCommand: "cite",
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatBackup: "",
    citekeySearch: true,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    mapMath: "",
    mapText: "",
    mapUnicode: "conservative",
    parseParticles: true,
    patchDates: "",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/",
    warnBulkModify: 10,
    warnTitleCased: false
  };
  var schema = {
    autoExport: {
      preferences: ["asciiBibLaTeX", "asciiBibTeX", "biblatexExtendedNameFormat", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
      displayOptions: ["exportNotes", "useJournalAbbreviation"]
    },
    translator: {
      "Better CSL JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      },
      "BetterBibTeX JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "36a3b0b5-bad0-4a04-b79b-441c7cef77db"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes"
          ]
        },
        cache: false,
        preferences: [],
        displayOptions: ["exportNotes"]
      },
      "Better BibTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "ca65189f-8815-4afe-8c8b-8c7c15f0edca"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibTeX", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      },
      "Better CSL YAML": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "0f238e69-043e-4882-93bf-342de007de19"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      },
      "Better BibLaTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f895aa0d-f28e-47fe-b247-2ea77c6ed583"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibLaTeX", "biblatexExtendedNameFormat", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      }
    }
  };

  // content/client.ts
  init_globals();
  var ctx = typeof self === "undefined" ? void 0 : self;
  var _a;
  var worker = !!((_a = ctx == null ? void 0 : ctx.location) == null ? void 0 : _a.search);
  function clientname() {
    var _a2;
    if (worker)
      return new URLSearchParams(ctx.location.search).get("clientName");
    if (Zotero.clientName)
      return Zotero.clientName;
    if ((_a2 = Zotero.BetterBibTeX) == null ? void 0 : _a2.clientName)
      return Zotero.BetterBibTeX.clientName;
    dump(`better-bibtex client detection: worker: ${worker}, assuming Zotero`);
    return "Zotero";
  }
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // content/ping.ts
  init_globals();
  var Pinger = class {
    constructor({ start = 0, total, step = 5, name = "", callback }) {
      this.incr = 100 / total;
      this.name = name;
      this.pct = start * this.incr;
      this.step = step;
      this.callback = callback;
      this.next = Math.floor(this.pct / step) * step;
      if (this.name)
        Zotero.debug(`ping: ${name} start ${JSON.stringify({ ...this, start, total })}`);
      this.emit();
    }
    update() {
      this.pct += this.incr;
      if (this.name)
        Zotero.debug(`ping: ${this.name} update to ${this.pct}`);
      if (Math.round(this.pct) >= this.next)
        this.emit();
    }
    emit() {
      if (this.callback) {
        if (this.name)
          Zotero.debug(`ping: ${this.name} emit ${Math.min(this.next, 100)}`);
        this.callback(Math.min(this.next, 100));
        if (this.next > 100)
          this.callback = null;
        this.next += this.step;
      }
    }
    done() {
      if (this.name)
        Zotero.debug(`ping: ${this.name} done`);
      if (this.callback && this.pct < this.next)
        this.callback(Math.min(this.next, 100));
    }
  };

  // translators/lib/translator.ts
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
  }();
  var Items = class {
    constructor(cacheable) {
      this.list = [];
      this.map = {};
      let item;
      while (item = Zotero.nextItem()) {
        item.$cacheable = cacheable;
        item.journalAbbreviation = item.journalAbbreviation || item.autoJournalAbbreviation;
        this.list.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      }
      this.list.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
      this.ping = new Pinger({
        total: this.list.length,
        callback: (pct) => Zotero.worker ? Zotero.BetterBibTeX.setProgress(pct) : null
      });
    }
    *items() {
      for (const item of this.list) {
        yield this.current = item;
        this.ping.update();
      }
      this.ping.done();
    }
    *regularitems() {
      for (const item of this.list) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
        this.ping.update();
      }
      this.ping.done();
    }
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  var ITranslator = class {
    constructor() {
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.cacheable = true;
      this.initialized = false;
      const collator = new Intl.Collator("en");
      this.stringCompare = collator.compare.bind(collator);
    }
    get exportDir() {
      this._items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this._items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    init(mode) {
      var _a2, _b, _c, _d, _e;
      this[ZOTERO_TRANSLATOR_INFO.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = ZOTERO_TRANSLATOR_INFO.displayOptions || {};
      let start = `${ZOTERO_TRANSLATOR_INFO.label} ${mode} translator starting in ${Zotero.worker ? "background" : "foreground"}`;
      if (!!Zotero.worker !== (mode === "export" && !!this.options.worker))
        start += ", which was unexpected";
      dump(start);
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false)
          this.cacheable = false;
      } catch (err) {
      }
      for (const key in this.options) {
        if (typeof this.options[key] === "boolean") {
          this.options[key] = Zotero.getOption(key);
        } else {
          this.options[key] = !!Zotero.getOption(key);
        }
      }
      if (mode === "export") {
        this.cache = {
          hits: 0,
          requests: 0
        };
        this.export = {
          dir: Zotero.getOption("exportDir"),
          path: Zotero.getOption("exportPath")
        };
        if ((_a2 = this.export.dir) == null ? void 0 : _a2.endsWith(this.paths.sep))
          this.export.dir = this.export.dir.slice(0, -1);
        this.options.cacheUse = Zotero.getOption("cacheUse");
      }
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a3, _b2;
        acc[pref] = (_b2 = (_a3 = this.getPreferenceOverride(pref)) != null ? _a3 : Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _b2 : dflt;
        return acc;
      }, {});
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      this.skipField = this.skipFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      let m;
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
      if (mode === "export") {
        this.unicode = !this.preferences[`ascii${ZOTERO_TRANSLATOR_INFO.label.replace(/Better /, "")}`];
        if (this.preferences.baseAttachmentPath && (this.export.dir === this.preferences.baseAttachmentPath || ((_b = this.export.dir) == null ? void 0 : _b.startsWith(this.preferences.baseAttachmentPath + this.paths.sep)))) {
          this.preferences.relativeFilePaths = true;
        }
        this.cacheable = this.cacheable && this.preferences.cache && !(this.options.exportFileData || this.preferences.relativeFilePaths || this.preferences.baseAttachmentPath && ((_c = this.export.dir) == null ? void 0 : _c.startsWith(this.preferences.baseAttachmentPath)));
        if (this.BetterTeX) {
          this.preferences.separatorList = this.preferences.separatorList.trim();
          this.preferences.separatorNames = this.preferences.separatorNames.trim();
          this.and = {
            list: {
              re: new RegExp(escapeRegExp(this.preferences.separatorList), "g"),
              repl: ` {${this.preferences.separatorList}} `
            },
            names: {
              re: new RegExp(` ${escapeRegExp(this.preferences.separatorNames)} `, "g"),
              repl: ` {${this.preferences.separatorNames}} `
            }
          };
          this.preferences.separatorList = ` ${this.preferences.separatorList} `;
          this.preferences.separatorNames = ` ${this.preferences.separatorNames} `;
        }
      }
      this.collections = {};
      if (mode === "export" && ((_d = ZOTERO_TRANSLATOR_INFO.configOptions) == null ? void 0 : _d.getCollections) && Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
      if (!this.initialized && mode === "export" && this.preferences.testing && typeof __estrace === "undefined" && ((_e = schema.translator[ZOTERO_TRANSLATOR_INFO.label]) == null ? void 0 : _e.cache)) {
        const ignored = ["testing"];
        this.preferences = new Proxy(this.preferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            var _a3;
            if (property === "toJSON")
              return object[property];
            if (!names.includes(property))
              throw new TypeError(`Unsupported preference ${property}`);
            if (!ignored.includes(property) && !((_a3 = affects[property]) == null ? void 0 : _a3.includes(ZOTERO_TRANSLATOR_INFO.label)))
              throw new TypeError(`Preference ${property} claims not to affect ${ZOTERO_TRANSLATOR_INFO.label}`);
            return object[property];
          }
        });
      }
      this.initialized = true;
    }
    getPreferenceOverride(pref) {
      try {
        const override = Zotero.getOption(`preference_${pref}`);
        if (typeof override !== "undefined")
          this.cacheable = false;
        return override;
      } catch (err) {
        return void 0;
      }
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.collections[key])
        return;
      this.collections[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.collections[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.collections[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.collections).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      this._items = this._items || new Items(this.cacheable);
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this._items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.collections[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
    get items() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.items();
    }
    get regularitems() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.regularitems();
    }
  };
  var Translator = new ITranslator();

  // translators/csl/csl.ts
  init_globals();

  // gen/items/simplify.ts
  init_globals();
  var zotero = client === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.documentNumber || item.archiveID)
        item.number = v;
      if (scrub) {
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (v = item.repository || item.institution)
        item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
    }
    if (jurism) {
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }

  // content/extra.ts
  init_globals();

  // gen/items/extra-fields.json
  var extra_fields_exports = {};
  __export(extra_fields_exports, {
    DOI: () => DOI,
    ISBN: () => ISBN,
    ISSN: () => ISSN,
    PMCID: () => PMCID,
    PMID: () => PMID,
    URL: () => URL,
    "access date": () => access_date,
    accessDate: () => accessDate,
    accessed: () => accessed,
    "admin flag": () => admin_flag,
    "admin-flag": () => admin_flag2,
    adminFlag: () => adminFlag,
    "adoption date": () => adoption_date,
    adoptionDate: () => adoptionDate,
    album: () => album,
    "application number": () => application_number,
    applicationNumber: () => applicationNumber,
    archive: () => archive,
    "archive collection": () => archive_collection,
    "archive id": () => archive_id,
    "archive location": () => archive_location,
    "archive place": () => archive_place,
    "archive-place": () => archive_place2,
    archiveCollection: () => archiveCollection,
    archiveID: () => archiveID,
    archiveLocation: () => archiveLocation,
    archive_collection: () => archive_collection2,
    archive_location: () => archive_location2,
    artist: () => artist,
    "artwork medium": () => artwork_medium,
    "artwork size": () => artwork_size,
    artworkMedium: () => artworkMedium,
    artworkSize: () => artworkSize,
    "assembly number": () => assembly_number,
    assemblyNumber: () => assemblyNumber,
    assignee: () => assignee,
    "attorney agent": () => attorney_agent,
    attorneyAgent: () => attorneyAgent,
    "audio file type": () => audio_file_type,
    "audio recording format": () => audio_recording_format,
    audioFileType: () => audioFileType,
    audioRecordingFormat: () => audioRecordingFormat,
    author: () => author,
    authority: () => authority,
    "bill number": () => bill_number,
    billNumber: () => billNumber,
    "blog title": () => blog_title,
    blogTitle: () => blogTitle,
    "book abbreviation": () => book_abbreviation,
    "book author": () => book_author,
    "book title": () => book_title,
    bookAbbreviation: () => bookAbbreviation,
    bookAuthor: () => bookAuthor,
    bookTitle: () => bookTitle,
    "call number": () => call_number,
    "call-number": () => call_number2,
    callNumber: () => callNumber,
    cartographer: () => cartographer,
    "case name": () => case_name,
    caseName: () => caseName,
    "cast member": () => cast_member,
    castMember: () => castMember,
    "chapter number": () => chapter_number,
    "chapter-number": () => chapter_number2,
    "citation key": () => citation_key,
    citationKey: () => citationKey,
    code: () => code,
    "code number": () => code_number,
    "code pages": () => code_pages,
    "code volume": () => code_volume,
    codeNumber: () => codeNumber,
    codePages: () => codePages,
    codeVolume: () => codeVolume,
    "collection editor": () => collection_editor,
    "collection number": () => collection_number,
    "collection title": () => collection_title,
    "collection-editor": () => collection_editor2,
    "collection-number": () => collection_number2,
    "collection-title": () => collection_title2,
    commenter: () => commenter,
    committee: () => committee,
    company: () => company,
    composer: () => composer,
    "conference date": () => conference_date,
    "conference name": () => conference_name,
    conferenceDate: () => conferenceDate,
    conferenceName: () => conferenceName,
    "container author": () => container_author,
    "container title": () => container_title,
    "container title short": () => container_title_short,
    "container-author": () => container_author2,
    "container-title": () => container_title2,
    "container-title-short": () => container_title_short2,
    contributor: () => contributor,
    cosponsor: () => cosponsor,
    counsel: () => counsel,
    country: () => country,
    court: () => court,
    "csl type": () => csl_type,
    "csl-type": () => csl_type2,
    date: () => date,
    "date amended": () => date_amended,
    "date decided": () => date_decided,
    "date enacted": () => date_enacted,
    dateAmended: () => dateAmended,
    dateDecided: () => dateDecided,
    dateEnacted: () => dateEnacted,
    default: () => extra_fields_default,
    "dictionary title": () => dictionary_title,
    dictionaryTitle: () => dictionaryTitle,
    dimensions: () => dimensions,
    director: () => director,
    distributor: () => distributor,
    division: () => division,
    "docket number": () => docket_number,
    docketNumber: () => docketNumber,
    "document name": () => document_name,
    "document number": () => document_number,
    "document-name": () => document_name2,
    "document-number": () => document_number2,
    documentName: () => documentName,
    documentNumber: () => documentNumber,
    doi: () => doi,
    edition: () => edition,
    editor: () => editor,
    "editorial director": () => editorial_director,
    "editorial-director": () => editorial_director2,
    "encyclopedia title": () => encyclopedia_title,
    encyclopediaTitle: () => encyclopediaTitle,
    "episode number": () => episode_number,
    episodeNumber: () => episodeNumber,
    event: () => event,
    "event date": () => event_date,
    "event place": () => event_place,
    "event title": () => event_title,
    "event-date": () => event_date2,
    "event-place": () => event_place2,
    "event-title": () => event_title2,
    "filing date": () => filing_date,
    filingDate: () => filingDate,
    "first page": () => first_page,
    firstPage: () => firstPage,
    "forum title": () => forum_title,
    forumTitle: () => forumTitle,
    "gazette flag": () => gazette_flag,
    "gazette-flag": () => gazette_flag2,
    gazetteFlag: () => gazetteFlag,
    genre: () => genre,
    guest: () => guest,
    history: () => history,
    illustrator: () => illustrator,
    institution: () => institution,
    "interview medium": () => interview_medium,
    interviewMedium: () => interviewMedium,
    interviewee: () => interviewee,
    interviewer: () => interviewer,
    inventor: () => inventor,
    isbn: () => isbn,
    issn: () => issn,
    issue: () => issue,
    "issue date": () => issue_date,
    issueDate: () => issueDate,
    issued: () => issued,
    "issuing authority": () => issuing_authority,
    issuingAuthority: () => issuingAuthority,
    "journal abbreviation": () => journal_abbreviation,
    journalAbbreviation: () => journalAbbreviation,
    jurisdiction: () => jurisdiction,
    label: () => label,
    language: () => language,
    "legal status": () => legal_status,
    legalStatus: () => legalStatus,
    "legislative body": () => legislative_body,
    legislativeBody: () => legislativeBody,
    "letter type": () => letter_type,
    letterType: () => letterType,
    "library catalog": () => library_catalog,
    libraryCatalog: () => libraryCatalog,
    license: () => license,
    "manuscript type": () => manuscript_type,
    manuscriptType: () => manuscriptType,
    "map type": () => map_type,
    mapType: () => mapType,
    medium: () => medium,
    "meeting name": () => meeting_name,
    "meeting number": () => meeting_number,
    meetingName: () => meetingName,
    meetingNumber: () => meetingNumber,
    "name of act": () => name_of_act,
    nameOfAct: () => nameOfAct,
    network: () => network,
    "news case date": () => news_case_date,
    newsCaseDate: () => newsCaseDate,
    "num pages": () => num_pages,
    numPages: () => numPages,
    number: () => number,
    "number of pages": () => number_of_pages,
    "number of volumes": () => number_of_volumes,
    "number-of-pages": () => number_of_pages2,
    "number-of-volumes": () => number_of_volumes2,
    numberOfVolumes: () => numberOfVolumes,
    "opening date": () => opening_date,
    "opening-date": () => opening_date2,
    openingDate: () => openingDate,
    opus: () => opus,
    "original author": () => original_author,
    "original date": () => original_date,
    "original publisher": () => original_publisher,
    "original publisher place": () => original_publisher_place,
    "original title": () => original_title,
    "original-author": () => original_author2,
    "original-date": () => original_date2,
    "original-publisher": () => original_publisher2,
    "original-publisher-place": () => original_publisher_place2,
    "original-title": () => original_title2,
    originalDate: () => originalDate,
    page: () => page,
    pages: () => pages,
    "parent treaty": () => parent_treaty,
    parentTreaty: () => parentTreaty,
    "patent number": () => patent_number,
    patentNumber: () => patentNumber,
    performer: () => performer,
    place: () => place,
    pmcid: () => pmcid,
    pmid: () => pmid,
    podcaster: () => podcaster,
    "post type": () => post_type,
    postType: () => postType,
    "presentation type": () => presentation_type,
    presentationType: () => presentationType,
    presenter: () => presenter,
    "priority date": () => priority_date,
    "priority numbers": () => priority_numbers,
    priorityDate: () => priorityDate,
    priorityNumbers: () => priorityNumbers,
    "proceedings title": () => proceedings_title,
    proceedingsTitle: () => proceedingsTitle,
    producer: () => producer,
    "program title": () => program_title,
    programTitle: () => programTitle,
    programmer: () => programmer,
    "programming language": () => programming_language,
    programmingLanguage: () => programmingLanguage,
    "public law number": () => public_law_number,
    publicLawNumber: () => publicLawNumber,
    "publication date": () => publication_date,
    "publication number": () => publication_number,
    "publication title": () => publication_title,
    "publication-date": () => publication_date2,
    "publication-number": () => publication_number2,
    publicationDate: () => publicationDate,
    publicationNumber: () => publicationNumber,
    publicationTitle: () => publicationTitle,
    publisher: () => publisher,
    "publisher place": () => publisher_place,
    "publisher-place": () => publisher_place2,
    recipient: () => recipient,
    references: () => references,
    "regnal year": () => regnal_year,
    regnalYear: () => regnalYear,
    "regulation type": () => regulation_type,
    regulationType: () => regulationType,
    "regulatory body": () => regulatory_body,
    regulatoryBody: () => regulatoryBody,
    reign: () => reign,
    release: () => release,
    "report number": () => report_number,
    "report type": () => report_type,
    reportNumber: () => reportNumber,
    reportType: () => reportType,
    reporter: () => reporter,
    "reporter volume": () => reporter_volume,
    reporterVolume: () => reporterVolume,
    repository: () => repository,
    "resolution label": () => resolution_label,
    resolutionLabel: () => resolutionLabel,
    "reviewed author": () => reviewed_author,
    "reviewed title": () => reviewed_title,
    "reviewed-author": () => reviewed_author2,
    "reviewed-title": () => reviewed_title2,
    reviewedAuthor: () => reviewedAuthor,
    rights: () => rights,
    "running time": () => running_time,
    runningTime: () => runningTime,
    scale: () => scale,
    "script writer": () => script_writer,
    "script-writer": () => script_writer2,
    scriptwriter: () => scriptwriter,
    section: () => section,
    series: () => series,
    "series editor": () => series_editor,
    "series number": () => series_number,
    "series text": () => series_text,
    "series title": () => series_title,
    seriesEditor: () => seriesEditor,
    seriesNumber: () => seriesNumber,
    seriesText: () => seriesText,
    seriesTitle: () => seriesTitle,
    session: () => session,
    "session type": () => session_type,
    sessionType: () => sessionType,
    "short title": () => short_title,
    shortTitle: () => shortTitle,
    "signing date": () => signing_date,
    signingDate: () => signingDate,
    source: () => source,
    sponsor: () => sponsor,
    status: () => status,
    studio: () => studio,
    subject: () => subject,
    submitted: () => submitted,
    supplement: () => supplement,
    "supplement name": () => supplement_name,
    supplementName: () => supplementName,
    system: () => system,
    "testimony by": () => testimony_by,
    testimonyBy: () => testimonyBy,
    "thesis type": () => thesis_type,
    thesisType: () => thesisType,
    title: () => title,
    "title short": () => title_short,
    "title-short": () => title_short2,
    translator: () => translator,
    "treaty number": () => treaty_number,
    treatyNumber: () => treatyNumber,
    type: () => type,
    university: () => university,
    url: () => url,
    version: () => version,
    "version number": () => version_number,
    versionNumber: () => versionNumber,
    "video recording format": () => video_recording_format,
    videoRecordingFormat: () => videoRecordingFormat,
    volume: () => volume,
    "volume title": () => volume_title,
    "volume-title": () => volume_title2,
    volumeTitle: () => volumeTitle,
    "website title": () => website_title,
    "website type": () => website_type,
    websiteTitle: () => websiteTitle,
    websiteType: () => websiteType,
    "words by": () => words_by,
    wordsBy: () => wordsBy,
    "year as volume": () => year_as_volume,
    yearAsVolume: () => yearAsVolume
  });
  var DOI = {
    csl: [
      "DOI"
    ],
    type: "text",
    zotero: [
      "DOI"
    ]
  };
  var ISBN = {
    csl: [
      "ISBN"
    ],
    type: "text",
    zotero: [
      "ISBN"
    ]
  };
  var ISSN = {
    csl: [
      "ISSN"
    ],
    type: "text",
    zotero: [
      "ISSN"
    ]
  };
  var PMCID = {
    csl: [
      "PMCID"
    ],
    type: "text"
  };
  var PMID = {
    csl: [
      "PMID"
    ],
    type: "text"
  };
  var URL = {
    csl: [
      "URL"
    ],
    type: "text"
  };
  var access_date = {
    csl: [
      "accessed"
    ],
    type: "date",
    zotero: [
      "accessDate"
    ]
  };
  var accessDate = {
    type: "date",
    zotero: [
      "accessDate"
    ]
  };
  var accessed = {
    csl: [
      "accessed"
    ],
    type: "date",
    zotero: [
      "accessDate"
    ]
  };
  var admin_flag = {
    csl: [
      "admin-flag"
    ],
    type: "text",
    zotero: [
      "adminFlag"
    ]
  };
  var admin_flag2 = {
    csl: [
      "admin-flag"
    ],
    type: "text"
  };
  var adminFlag = {
    type: "text",
    zotero: [
      "adminFlag"
    ]
  };
  var adoption_date = {
    type: "date",
    zotero: [
      "adoptionDate"
    ]
  };
  var adoptionDate = {
    type: "date",
    zotero: [
      "adoptionDate"
    ]
  };
  var album = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var application_number = {
    type: "text",
    zotero: [
      "applicationNumber"
    ]
  };
  var applicationNumber = {
    type: "text",
    zotero: [
      "applicationNumber"
    ]
  };
  var archive = {
    csl: [
      "archive"
    ],
    type: "text",
    zotero: [
      "archive"
    ]
  };
  var archive_collection = {
    csl: [
      "archive_collection"
    ],
    type: "text",
    zotero: [
      "archiveCollection"
    ]
  };
  var archive_id = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var archive_location = {
    csl: [
      "archive_location"
    ],
    type: "text",
    zotero: [
      "archiveLocation"
    ]
  };
  var archive_place = {
    csl: [
      "archive-place"
    ],
    type: "text"
  };
  var archive_place2 = {
    csl: [
      "archive-place"
    ],
    type: "text"
  };
  var archiveCollection = {
    type: "text",
    zotero: [
      "archiveCollection"
    ]
  };
  var archiveID = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var archiveLocation = {
    type: "text",
    zotero: [
      "archiveLocation"
    ]
  };
  var archive_collection2 = {
    csl: [
      "archive_collection"
    ],
    type: "text"
  };
  var archive_location2 = {
    csl: [
      "archive_location"
    ],
    type: "text"
  };
  var artist = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "artist"
    ]
  };
  var artwork_medium = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var artwork_size = {
    type: "text",
    zotero: [
      "artworkSize"
    ]
  };
  var artworkMedium = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var artworkSize = {
    type: "text",
    zotero: [
      "artworkSize"
    ]
  };
  var assembly_number = {
    type: "text",
    zotero: [
      "assemblyNumber",
      "seriesNumber"
    ]
  };
  var assemblyNumber = {
    type: "text",
    zotero: [
      "assemblyNumber",
      "seriesNumber"
    ]
  };
  var assignee = {
    type: "text",
    zotero: [
      "assignee"
    ]
  };
  var attorney_agent = {
    csl: [
      "attorneyAgent"
    ],
    type: "name",
    zotero: [
      "attorneyAgent"
    ]
  };
  var attorneyAgent = {
    csl: [
      "attorneyAgent"
    ],
    type: "name",
    zotero: [
      "attorneyAgent"
    ]
  };
  var audio_file_type = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var audio_recording_format = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var audioFileType = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var audioRecordingFormat = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var author = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "author"
    ]
  };
  var authority = {
    csl: [
      "authority"
    ],
    type: "text",
    zotero: [
      "court",
      "legislativeBody",
      "issuingAuthority",
      "institution",
      "regulatoryBody"
    ]
  };
  var bill_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var billNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var blog_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var blogTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var book_abbreviation = {
    csl: [
      "container-title-short"
    ],
    type: "text",
    zotero: [
      "journalAbbreviation"
    ]
  };
  var book_author = {
    csl: [
      "container-author"
    ],
    type: "name",
    zotero: [
      "bookAuthor"
    ]
  };
  var book_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var bookAbbreviation = {
    type: "text",
    zotero: [
      "journalAbbreviation"
    ]
  };
  var bookAuthor = {
    type: "name",
    zotero: [
      "bookAuthor"
    ]
  };
  var bookTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var call_number = {
    csl: [
      "call-number"
    ],
    type: "text",
    zotero: [
      "callNumber"
    ]
  };
  var call_number2 = {
    csl: [
      "call-number"
    ],
    type: "text"
  };
  var callNumber = {
    type: "text",
    zotero: [
      "callNumber"
    ]
  };
  var cartographer = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "cartographer"
    ]
  };
  var case_name = {
    csl: [
      "title"
    ],
    type: "text",
    zotero: [
      "title"
    ]
  };
  var caseName = {
    type: "text",
    zotero: [
      "title"
    ]
  };
  var cast_member = {
    csl: [
      "castMember"
    ],
    type: "name",
    zotero: [
      "castMember"
    ]
  };
  var castMember = {
    csl: [
      "castMember"
    ],
    type: "name",
    zotero: [
      "castMember"
    ]
  };
  var chapter_number = {
    csl: [
      "chapter-number"
    ],
    type: "text",
    zotero: [
      "session"
    ]
  };
  var chapter_number2 = {
    csl: [
      "chapter-number"
    ],
    type: "text"
  };
  var citation_key = {
    type: "text",
    zotero: [
      "citationKey"
    ]
  };
  var citationKey = {
    type: "text",
    zotero: [
      "citationKey"
    ]
  };
  var code = {
    type: "text",
    zotero: [
      "code"
    ]
  };
  var code_number = {
    type: "text",
    zotero: [
      "codeNumber"
    ]
  };
  var code_pages = {
    csl: [
      "page"
    ],
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var code_volume = {
    type: "text",
    zotero: [
      "volume"
    ]
  };
  var codeNumber = {
    type: "text",
    zotero: [
      "codeNumber"
    ]
  };
  var codePages = {
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var codeVolume = {
    type: "text",
    zotero: [
      "volume"
    ]
  };
  var collection_editor = {
    csl: [
      "collection-editor"
    ],
    type: "name",
    zotero: [
      "seriesEditor"
    ]
  };
  var collection_number = {
    csl: [
      "collection-number"
    ],
    type: "text",
    zotero: [
      "seriesNumber",
      "assemblyNumber",
      "regnalYear",
      "yearAsVolume"
    ]
  };
  var collection_title = {
    csl: [
      "collection-title"
    ],
    type: "text",
    zotero: [
      "seriesTitle",
      "series",
      "parentTreaty"
    ]
  };
  var collection_editor2 = {
    csl: [
      "collection-editor"
    ],
    type: "name"
  };
  var collection_number2 = {
    csl: [
      "collection-number"
    ],
    type: "text"
  };
  var collection_title2 = {
    csl: [
      "collection-title"
    ],
    type: "text"
  };
  var commenter = {
    csl: [
      "commenter"
    ],
    type: "name",
    zotero: [
      "commenter"
    ]
  };
  var committee = {
    csl: [
      "committee"
    ],
    type: "text",
    zotero: [
      "committee"
    ]
  };
  var company = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var composer = {
    csl: [
      "composer"
    ],
    type: "name",
    zotero: [
      "composer"
    ]
  };
  var conference_date = {
    type: "date",
    zotero: [
      "conferenceDate"
    ]
  };
  var conference_name = {
    type: "text",
    zotero: [
      "conferenceName"
    ]
  };
  var conferenceDate = {
    type: "date",
    zotero: [
      "conferenceDate"
    ]
  };
  var conferenceName = {
    type: "text",
    zotero: [
      "conferenceName"
    ]
  };
  var container_author = {
    csl: [
      "container-author"
    ],
    type: "name",
    zotero: [
      "bookAuthor"
    ]
  };
  var container_title = {
    csl: [
      "container-title"
    ],
    type: "text",
    zotero: [
      "publicationTitle",
      "reporter",
      "code"
    ]
  };
  var container_title_short = {
    csl: [
      "container-title-short"
    ],
    type: "text",
    zotero: [
      "journalAbbreviation"
    ]
  };
  var container_author2 = {
    csl: [
      "container-author"
    ],
    type: "name"
  };
  var container_title2 = {
    csl: [
      "container-title"
    ],
    type: "text"
  };
  var container_title_short2 = {
    csl: [
      "container-title-short"
    ],
    type: "text"
  };
  var contributor = {
    csl: [
      "contributor"
    ],
    type: "name",
    zotero: [
      "contributor"
    ]
  };
  var cosponsor = {
    csl: [
      "cosponsor"
    ],
    type: "name",
    zotero: [
      "cosponsor"
    ]
  };
  var counsel = {
    csl: [
      "counsel"
    ],
    type: "name",
    zotero: [
      "counsel"
    ]
  };
  var country = {
    type: "text",
    zotero: [
      "country"
    ]
  };
  var court = {
    type: "text",
    zotero: [
      "court"
    ]
  };
  var csl_type = {
    csl: [
      "csl-type"
    ],
    type: "text"
  };
  var csl_type2 = {
    csl: [
      "csl-type"
    ],
    type: "text"
  };
  var date = {
    csl: [
      "issued"
    ],
    type: "date",
    zotero: [
      "date"
    ]
  };
  var date_amended = {
    type: "date",
    zotero: [
      "dateAmended"
    ]
  };
  var date_decided = {
    csl: [
      "issued"
    ],
    type: "date",
    zotero: [
      "date"
    ]
  };
  var date_enacted = {
    csl: [
      "issued"
    ],
    type: "date",
    zotero: [
      "date"
    ]
  };
  var dateAmended = {
    type: "date",
    zotero: [
      "dateAmended"
    ]
  };
  var dateDecided = {
    type: "date",
    zotero: [
      "date"
    ]
  };
  var dateEnacted = {
    type: "date",
    zotero: [
      "date"
    ]
  };
  var dictionary_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var dictionaryTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var dimensions = {
    csl: [
      "dimensions"
    ],
    type: "text",
    zotero: [
      "artworkSize",
      "runningTime"
    ]
  };
  var director = {
    csl: [
      "director"
    ],
    type: "name",
    zotero: [
      "director"
    ]
  };
  var distributor = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var division = {
    csl: [
      "division"
    ],
    type: "text",
    zotero: [
      "division"
    ]
  };
  var docket_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var docketNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var document_name = {
    csl: [
      "document-name"
    ],
    type: "text",
    zotero: [
      "documentName"
    ]
  };
  var document_number = {
    csl: [
      "document-number"
    ],
    type: "text",
    zotero: [
      "documentNumber",
      "number"
    ]
  };
  var document_name2 = {
    csl: [
      "document-name"
    ],
    type: "text"
  };
  var document_number2 = {
    csl: [
      "document-number"
    ],
    type: "text"
  };
  var documentName = {
    type: "text",
    zotero: [
      "documentName"
    ]
  };
  var documentNumber = {
    type: "text",
    zotero: [
      "documentNumber",
      "number"
    ]
  };
  var doi = {
    csl: [
      "DOI"
    ],
    type: "text",
    zotero: [
      "DOI"
    ]
  };
  var edition = {
    csl: [
      "edition"
    ],
    type: "text",
    zotero: [
      "edition"
    ]
  };
  var editor = {
    csl: [
      "editor"
    ],
    type: "name",
    zotero: [
      "editor"
    ]
  };
  var editorial_director = {
    csl: [
      "editorial-director"
    ],
    type: "name"
  };
  var editorial_director2 = {
    csl: [
      "editorial-director"
    ],
    type: "name"
  };
  var encyclopedia_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var encyclopediaTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var episode_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var episodeNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var event = {
    csl: [
      "event"
    ],
    type: "text",
    zotero: [
      "resolutionLabel"
    ]
  };
  var event_date = {
    csl: [
      "event-date"
    ],
    type: "date",
    zotero: [
      "dateAmended",
      "signingDate",
      "conferenceDate"
    ]
  };
  var event_place = {
    csl: [
      "event-place"
    ],
    type: "text"
  };
  var event_title = {
    csl: [
      "event-title"
    ],
    type: "text"
  };
  var event_date2 = {
    csl: [
      "event-date"
    ],
    type: "date"
  };
  var event_place2 = {
    csl: [
      "event-place"
    ],
    type: "text"
  };
  var event_title2 = {
    csl: [
      "event-title"
    ],
    type: "text"
  };
  var filing_date = {
    csl: [
      "submitted"
    ],
    type: "date",
    zotero: [
      "filingDate"
    ]
  };
  var filingDate = {
    type: "date",
    zotero: [
      "filingDate"
    ]
  };
  var first_page = {
    csl: [
      "page"
    ],
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var firstPage = {
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var forum_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var forumTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var gazette_flag = {
    csl: [
      "gazette-flag"
    ],
    type: "text",
    zotero: [
      "gazetteFlag"
    ]
  };
  var gazette_flag2 = {
    csl: [
      "gazette-flag"
    ],
    type: "text"
  };
  var gazetteFlag = {
    type: "text",
    zotero: [
      "gazetteFlag"
    ]
  };
  var genre = {
    csl: [
      "genre"
    ],
    type: "text",
    zotero: [
      "genre",
      "type"
    ]
  };
  var guest = {
    csl: [
      "guest"
    ],
    type: "name",
    zotero: [
      "guest"
    ]
  };
  var history = {
    type: "text",
    zotero: [
      "history"
    ]
  };
  var illustrator = {
    csl: [
      "illustrator"
    ],
    type: "name"
  };
  var institution = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "institution",
      "publisher"
    ]
  };
  var interview_medium = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var interviewMedium = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var interviewee = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "interviewee"
    ]
  };
  var interviewer = {
    csl: [
      "interviewer"
    ],
    type: "name",
    zotero: [
      "interviewer"
    ]
  };
  var inventor = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "inventor"
    ]
  };
  var isbn = {
    csl: [
      "ISBN"
    ],
    type: "text",
    zotero: [
      "ISBN"
    ]
  };
  var issn = {
    csl: [
      "ISSN"
    ],
    type: "text",
    zotero: [
      "ISSN"
    ]
  };
  var issue = {
    csl: [
      "issue"
    ],
    type: "text",
    zotero: [
      "issue"
    ]
  };
  var issue_date = {
    csl: [
      "issued"
    ],
    type: "date",
    zotero: [
      "date"
    ]
  };
  var issueDate = {
    type: "date",
    zotero: [
      "date"
    ]
  };
  var issued = {
    csl: [
      "issued"
    ],
    type: "date",
    zotero: [
      "date"
    ]
  };
  var issuing_authority = {
    type: "text",
    zotero: [
      "issuingAuthority"
    ]
  };
  var issuingAuthority = {
    type: "text",
    zotero: [
      "issuingAuthority"
    ]
  };
  var journal_abbreviation = {
    csl: [
      "container-title-short"
    ],
    type: "text",
    zotero: [
      "journalAbbreviation"
    ]
  };
  var journalAbbreviation = {
    type: "text",
    zotero: [
      "journalAbbreviation"
    ]
  };
  var jurisdiction = {
    csl: [
      "jurisdiction"
    ],
    type: "text",
    zotero: [
      "jurisdiction"
    ]
  };
  var label = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var language = {
    csl: [
      "language"
    ],
    type: "text",
    zotero: [
      "language"
    ]
  };
  var legal_status = {
    type: "text",
    zotero: [
      "legalStatus"
    ]
  };
  var legalStatus = {
    type: "text",
    zotero: [
      "legalStatus"
    ]
  };
  var legislative_body = {
    type: "text",
    zotero: [
      "legislativeBody"
    ]
  };
  var legislativeBody = {
    type: "text",
    zotero: [
      "legislativeBody"
    ]
  };
  var letter_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var letterType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var library_catalog = {
    csl: [
      "source"
    ],
    type: "text",
    zotero: [
      "libraryCatalog"
    ]
  };
  var libraryCatalog = {
    type: "text",
    zotero: [
      "libraryCatalog"
    ]
  };
  var license = {
    csl: [
      "license"
    ],
    type: "text",
    zotero: [
      "rights"
    ]
  };
  var manuscript_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var manuscriptType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var map_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var mapType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var medium = {
    csl: [
      "medium"
    ],
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var meeting_name = {
    type: "text",
    zotero: [
      "meetingName"
    ]
  };
  var meeting_number = {
    type: "text",
    zotero: [
      "meetingNumber"
    ]
  };
  var meetingName = {
    type: "text",
    zotero: [
      "meetingName"
    ]
  };
  var meetingNumber = {
    type: "text",
    zotero: [
      "meetingNumber"
    ]
  };
  var name_of_act = {
    csl: [
      "title"
    ],
    type: "text",
    zotero: [
      "title"
    ]
  };
  var nameOfAct = {
    type: "text",
    zotero: [
      "title"
    ]
  };
  var network = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var news_case_date = {
    type: "date",
    zotero: [
      "newsCaseDate"
    ]
  };
  var newsCaseDate = {
    type: "date",
    zotero: [
      "newsCaseDate"
    ]
  };
  var num_pages = {
    csl: [
      "number-of-pages"
    ],
    type: "text",
    zotero: [
      "numPages"
    ]
  };
  var numPages = {
    type: "text",
    zotero: [
      "numPages"
    ]
  };
  var number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var number_of_pages = {
    csl: [
      "number-of-pages"
    ],
    type: "text",
    zotero: [
      "numPages"
    ]
  };
  var number_of_volumes = {
    csl: [
      "number-of-volumes"
    ],
    type: "text",
    zotero: [
      "numberOfVolumes"
    ]
  };
  var number_of_pages2 = {
    csl: [
      "number-of-pages"
    ],
    type: "text"
  };
  var number_of_volumes2 = {
    csl: [
      "number-of-volumes"
    ],
    type: "text"
  };
  var numberOfVolumes = {
    type: "text",
    zotero: [
      "numberOfVolumes"
    ]
  };
  var opening_date = {
    csl: [
      "opening-date"
    ],
    type: "date",
    zotero: [
      "openingDate"
    ]
  };
  var opening_date2 = {
    csl: [
      "opening-date"
    ],
    type: "date"
  };
  var openingDate = {
    type: "date",
    zotero: [
      "openingDate"
    ]
  };
  var opus = {
    type: "text",
    zotero: [
      "opus"
    ]
  };
  var original_author = {
    csl: [
      "original-author"
    ],
    type: "name"
  };
  var original_date = {
    csl: [
      "original-date"
    ],
    type: "date",
    zotero: [
      "originalDate"
    ]
  };
  var original_publisher = {
    csl: [
      "original-publisher"
    ],
    type: "text"
  };
  var original_publisher_place = {
    csl: [
      "original-publisher-place"
    ],
    type: "text"
  };
  var original_title = {
    csl: [
      "original-title"
    ],
    type: "text"
  };
  var original_author2 = {
    csl: [
      "original-author"
    ],
    type: "name"
  };
  var original_date2 = {
    csl: [
      "original-date"
    ],
    type: "date"
  };
  var original_publisher2 = {
    csl: [
      "original-publisher"
    ],
    type: "text"
  };
  var original_publisher_place2 = {
    csl: [
      "original-publisher-place"
    ],
    type: "text"
  };
  var original_title2 = {
    csl: [
      "original-title"
    ],
    type: "text"
  };
  var originalDate = {
    type: "date",
    zotero: [
      "originalDate"
    ]
  };
  var page = {
    csl: [
      "page"
    ],
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var pages = {
    csl: [
      "page"
    ],
    type: "text",
    zotero: [
      "pages"
    ]
  };
  var parent_treaty = {
    type: "text",
    zotero: [
      "parentTreaty"
    ]
  };
  var parentTreaty = {
    type: "text",
    zotero: [
      "parentTreaty"
    ]
  };
  var patent_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var patentNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var performer = {
    csl: [
      "performer"
    ],
    type: "name",
    zotero: [
      "performer"
    ]
  };
  var place = {
    csl: [
      "event-place",
      "publisher-place"
    ],
    type: "text",
    zotero: [
      "place"
    ]
  };
  var pmcid = {
    csl: [
      "PMCID"
    ],
    type: "text"
  };
  var pmid = {
    csl: [
      "PMID"
    ],
    type: "text"
  };
  var podcaster = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "podcaster"
    ]
  };
  var post_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var postType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var presentation_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var presentationType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var presenter = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "presenter"
    ]
  };
  var priority_date = {
    type: "date",
    zotero: [
      "priorityDate"
    ]
  };
  var priority_numbers = {
    type: "text",
    zotero: [
      "priorityNumbers"
    ]
  };
  var priorityDate = {
    type: "date",
    zotero: [
      "priorityDate"
    ]
  };
  var priorityNumbers = {
    type: "text",
    zotero: [
      "priorityNumbers"
    ]
  };
  var proceedings_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var proceedingsTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var producer = {
    csl: [
      "producer"
    ],
    type: "name",
    zotero: [
      "producer"
    ]
  };
  var program_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var programTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var programmer = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "programmer"
    ]
  };
  var programming_language = {
    type: "text",
    zotero: [
      "programmingLanguage"
    ]
  };
  var programmingLanguage = {
    type: "text",
    zotero: [
      "programmingLanguage"
    ]
  };
  var public_law_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var publicLawNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var publication_date = {
    csl: [
      "publication-date"
    ],
    type: "date",
    zotero: [
      "publicationDate"
    ]
  };
  var publication_number = {
    csl: [
      "publication-number"
    ],
    type: "text",
    zotero: [
      "publicationNumber"
    ]
  };
  var publication_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var publication_date2 = {
    csl: [
      "publication-date"
    ],
    type: "date"
  };
  var publication_number2 = {
    csl: [
      "publication-number"
    ],
    type: "text"
  };
  var publicationDate = {
    type: "date",
    zotero: [
      "publicationDate"
    ]
  };
  var publicationNumber = {
    type: "text",
    zotero: [
      "publicationNumber"
    ]
  };
  var publicationTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var publisher = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var publisher_place = {
    csl: [
      "publisher-place"
    ],
    type: "text"
  };
  var publisher_place2 = {
    csl: [
      "publisher-place"
    ],
    type: "text"
  };
  var recipient = {
    csl: [
      "recipient"
    ],
    type: "name",
    zotero: [
      "recipient"
    ]
  };
  var references = {
    csl: [
      "references"
    ],
    type: "text",
    zotero: [
      "references"
    ]
  };
  var regnal_year = {
    type: "text",
    zotero: [
      "regnalYear"
    ]
  };
  var regnalYear = {
    type: "text",
    zotero: [
      "regnalYear"
    ]
  };
  var regulation_type = {
    type: "text",
    zotero: [
      "regulationType",
      "type"
    ]
  };
  var regulationType = {
    type: "text",
    zotero: [
      "regulationType",
      "type"
    ]
  };
  var regulatory_body = {
    type: "text",
    zotero: [
      "regulatoryBody",
      "legislativeBody"
    ]
  };
  var regulatoryBody = {
    type: "text",
    zotero: [
      "regulatoryBody",
      "legislativeBody"
    ]
  };
  var reign = {
    type: "text",
    zotero: [
      "reign"
    ]
  };
  var release = {
    csl: [
      "edition"
    ],
    type: "text",
    zotero: [
      "edition"
    ]
  };
  var report_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var report_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var reportNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var reportType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var reporter = {
    type: "text",
    zotero: [
      "reporter",
      "publicationTitle"
    ]
  };
  var reporter_volume = {
    type: "text",
    zotero: [
      "volume"
    ]
  };
  var reporterVolume = {
    type: "text",
    zotero: [
      "volume"
    ]
  };
  var repository = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var resolution_label = {
    type: "text",
    zotero: [
      "resolutionLabel"
    ]
  };
  var resolutionLabel = {
    type: "text",
    zotero: [
      "resolutionLabel"
    ]
  };
  var reviewed_author = {
    csl: [
      "reviewed-author"
    ],
    type: "name",
    zotero: [
      "reviewedAuthor"
    ]
  };
  var reviewed_title = {
    csl: [
      "reviewed-title"
    ],
    type: "text"
  };
  var reviewed_author2 = {
    csl: [
      "reviewed-author"
    ],
    type: "name"
  };
  var reviewed_title2 = {
    csl: [
      "reviewed-title"
    ],
    type: "text"
  };
  var reviewedAuthor = {
    type: "name",
    zotero: [
      "reviewedAuthor"
    ]
  };
  var rights = {
    csl: [
      "rights"
    ],
    type: "text",
    zotero: [
      "rights"
    ]
  };
  var running_time = {
    type: "text",
    zotero: [
      "runningTime"
    ]
  };
  var runningTime = {
    type: "text",
    zotero: [
      "runningTime"
    ]
  };
  var scale = {
    csl: [
      "scale"
    ],
    type: "text",
    zotero: [
      "scale"
    ]
  };
  var script_writer = {
    csl: [
      "script-writer"
    ],
    type: "name",
    zotero: [
      "scriptwriter"
    ]
  };
  var script_writer2 = {
    csl: [
      "script-writer"
    ],
    type: "name"
  };
  var scriptwriter = {
    csl: [
      "scriptwriter"
    ],
    type: "name",
    zotero: [
      "scriptwriter"
    ]
  };
  var section = {
    csl: [
      "section"
    ],
    type: "text",
    zotero: [
      "section"
    ]
  };
  var series = {
    type: "text",
    zotero: [
      "series"
    ]
  };
  var series_editor = {
    csl: [
      "collection-editor"
    ],
    type: "name",
    zotero: [
      "seriesEditor"
    ]
  };
  var series_number = {
    type: "text",
    zotero: [
      "seriesNumber"
    ]
  };
  var series_text = {
    type: "text",
    zotero: [
      "seriesText"
    ]
  };
  var series_title = {
    type: "text",
    zotero: [
      "seriesTitle"
    ]
  };
  var seriesEditor = {
    type: "name",
    zotero: [
      "seriesEditor"
    ]
  };
  var seriesNumber = {
    type: "text",
    zotero: [
      "seriesNumber"
    ]
  };
  var seriesText = {
    type: "text",
    zotero: [
      "seriesText"
    ]
  };
  var seriesTitle = {
    type: "text",
    zotero: [
      "seriesTitle"
    ]
  };
  var session = {
    csl: [
      "chapter-number"
    ],
    type: "text",
    zotero: [
      "session"
    ]
  };
  var session_type = {
    type: "text",
    zotero: [
      "sessionType",
      "type"
    ]
  };
  var sessionType = {
    type: "text",
    zotero: [
      "sessionType",
      "type"
    ]
  };
  var short_title = {
    csl: [
      "title-short"
    ],
    type: "text",
    zotero: [
      "shortTitle"
    ]
  };
  var shortTitle = {
    type: "text",
    zotero: [
      "shortTitle"
    ]
  };
  var signing_date = {
    type: "date",
    zotero: [
      "signingDate"
    ]
  };
  var signingDate = {
    type: "date",
    zotero: [
      "signingDate"
    ]
  };
  var source = {
    csl: [
      "source"
    ],
    type: "text",
    zotero: [
      "libraryCatalog"
    ]
  };
  var sponsor = {
    csl: [
      "author"
    ],
    type: "name",
    zotero: [
      "sponsor"
    ]
  };
  var status = {
    csl: [
      "status"
    ],
    type: "text",
    zotero: [
      "status"
    ]
  };
  var studio = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var subject = {
    csl: [
      "title"
    ],
    type: "text",
    zotero: [
      "title"
    ]
  };
  var submitted = {
    csl: [
      "submitted"
    ],
    type: "date",
    zotero: [
      "filingDate"
    ]
  };
  var supplement = {
    csl: [
      "supplement"
    ],
    type: "text",
    zotero: [
      "supplementName"
    ]
  };
  var supplement_name = {
    csl: [
      "supplement"
    ],
    type: "text",
    zotero: [
      "supplementName"
    ]
  };
  var supplementName = {
    type: "text",
    zotero: [
      "supplementName"
    ]
  };
  var system = {
    type: "text",
    zotero: [
      "system"
    ]
  };
  var testimony_by = {
    csl: [
      "testimonyBy"
    ],
    type: "name",
    zotero: [
      "testimonyBy"
    ]
  };
  var testimonyBy = {
    csl: [
      "testimonyBy"
    ],
    type: "name",
    zotero: [
      "testimonyBy"
    ]
  };
  var thesis_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var thesisType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var title = {
    csl: [
      "title"
    ],
    type: "text",
    zotero: [
      "title"
    ]
  };
  var title_short = {
    csl: [
      "title-short"
    ],
    type: "text",
    zotero: [
      "shortTitle"
    ]
  };
  var title_short2 = {
    csl: [
      "title-short"
    ],
    type: "text"
  };
  var translator = {
    csl: [
      "translator"
    ],
    type: "name",
    zotero: [
      "translator"
    ]
  };
  var treaty_number = {
    csl: [
      "number"
    ],
    type: "text",
    zotero: [
      "number"
    ]
  };
  var treatyNumber = {
    type: "text",
    zotero: [
      "number"
    ]
  };
  var type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var university = {
    csl: [
      "publisher"
    ],
    type: "text",
    zotero: [
      "publisher"
    ]
  };
  var url = {
    csl: [
      "URL"
    ],
    type: "text",
    zotero: [
      "url"
    ]
  };
  var version = {
    csl: [
      "version"
    ],
    type: "text",
    zotero: [
      "versionNumber"
    ]
  };
  var version_number = {
    csl: [
      "version"
    ],
    type: "text",
    zotero: [
      "versionNumber"
    ]
  };
  var versionNumber = {
    type: "text",
    zotero: [
      "versionNumber"
    ]
  };
  var video_recording_format = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var videoRecordingFormat = {
    type: "text",
    zotero: [
      "medium"
    ]
  };
  var volume = {
    csl: [
      "volume"
    ],
    type: "text",
    zotero: [
      "volume"
    ]
  };
  var volume_title = {
    csl: [
      "volume-title"
    ],
    type: "text",
    zotero: [
      "volumeTitle"
    ]
  };
  var volume_title2 = {
    csl: [
      "volume-title"
    ],
    type: "text"
  };
  var volumeTitle = {
    type: "text",
    zotero: [
      "volumeTitle"
    ]
  };
  var website_title = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var website_type = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var websiteTitle = {
    type: "text",
    zotero: [
      "publicationTitle"
    ]
  };
  var websiteType = {
    type: "text",
    zotero: [
      "type"
    ]
  };
  var words_by = {
    csl: [
      "wordsBy"
    ],
    type: "name",
    zotero: [
      "wordsBy"
    ]
  };
  var wordsBy = {
    csl: [
      "wordsBy"
    ],
    type: "name",
    zotero: [
      "wordsBy"
    ]
  };
  var year_as_volume = {
    type: "text",
    zotero: [
      "yearAsVolume"
    ]
  };
  var yearAsVolume = {
    type: "text",
    zotero: [
      "yearAsVolume"
    ]
  };
  var extra_fields_default = {
    DOI,
    ISBN,
    ISSN,
    PMCID,
    PMID,
    URL,
    "access date": access_date,
    accessDate,
    accessed,
    "admin flag": admin_flag,
    "admin-flag": admin_flag2,
    adminFlag,
    "adoption date": adoption_date,
    adoptionDate,
    album,
    "application number": application_number,
    applicationNumber,
    archive,
    "archive collection": archive_collection,
    "archive id": archive_id,
    "archive location": archive_location,
    "archive place": archive_place,
    "archive-place": archive_place2,
    archiveCollection,
    archiveID,
    archiveLocation,
    archive_collection: archive_collection2,
    archive_location: archive_location2,
    artist,
    "artwork medium": artwork_medium,
    "artwork size": artwork_size,
    artworkMedium,
    artworkSize,
    "assembly number": assembly_number,
    assemblyNumber,
    assignee,
    "attorney agent": attorney_agent,
    attorneyAgent,
    "audio file type": audio_file_type,
    "audio recording format": audio_recording_format,
    audioFileType,
    audioRecordingFormat,
    author,
    authority,
    "bill number": bill_number,
    billNumber,
    "blog title": blog_title,
    blogTitle,
    "book abbreviation": book_abbreviation,
    "book author": book_author,
    "book title": book_title,
    bookAbbreviation,
    bookAuthor,
    bookTitle,
    "call number": call_number,
    "call-number": call_number2,
    callNumber,
    cartographer,
    "case name": case_name,
    caseName,
    "cast member": cast_member,
    castMember,
    "chapter number": chapter_number,
    "chapter-number": chapter_number2,
    "citation key": citation_key,
    citationKey,
    code,
    "code number": code_number,
    "code pages": code_pages,
    "code volume": code_volume,
    codeNumber,
    codePages,
    codeVolume,
    "collection editor": collection_editor,
    "collection number": collection_number,
    "collection title": collection_title,
    "collection-editor": collection_editor2,
    "collection-number": collection_number2,
    "collection-title": collection_title2,
    commenter,
    committee,
    company,
    composer,
    "conference date": conference_date,
    "conference name": conference_name,
    conferenceDate,
    conferenceName,
    "container author": container_author,
    "container title": container_title,
    "container title short": container_title_short,
    "container-author": container_author2,
    "container-title": container_title2,
    "container-title-short": container_title_short2,
    contributor,
    cosponsor,
    counsel,
    country,
    court,
    "csl type": csl_type,
    "csl-type": csl_type2,
    date,
    "date amended": date_amended,
    "date decided": date_decided,
    "date enacted": date_enacted,
    dateAmended,
    dateDecided,
    dateEnacted,
    "dictionary title": dictionary_title,
    dictionaryTitle,
    dimensions,
    director,
    distributor,
    division,
    "docket number": docket_number,
    docketNumber,
    "document name": document_name,
    "document number": document_number,
    "document-name": document_name2,
    "document-number": document_number2,
    documentName,
    documentNumber,
    doi,
    edition,
    editor,
    "editorial director": editorial_director,
    "editorial-director": editorial_director2,
    "encyclopedia title": encyclopedia_title,
    encyclopediaTitle,
    "episode number": episode_number,
    episodeNumber,
    event,
    "event date": event_date,
    "event place": event_place,
    "event title": event_title,
    "event-date": event_date2,
    "event-place": event_place2,
    "event-title": event_title2,
    "filing date": filing_date,
    filingDate,
    "first page": first_page,
    firstPage,
    "forum title": forum_title,
    forumTitle,
    "gazette flag": gazette_flag,
    "gazette-flag": gazette_flag2,
    gazetteFlag,
    genre,
    guest,
    history,
    illustrator,
    institution,
    "interview medium": interview_medium,
    interviewMedium,
    interviewee,
    interviewer,
    inventor,
    isbn,
    issn,
    issue,
    "issue date": issue_date,
    issueDate,
    issued,
    "issuing authority": issuing_authority,
    issuingAuthority,
    "journal abbreviation": journal_abbreviation,
    journalAbbreviation,
    jurisdiction,
    label,
    language,
    "legal status": legal_status,
    legalStatus,
    "legislative body": legislative_body,
    legislativeBody,
    "letter type": letter_type,
    letterType,
    "library catalog": library_catalog,
    libraryCatalog,
    license,
    "manuscript type": manuscript_type,
    manuscriptType,
    "map type": map_type,
    mapType,
    medium,
    "meeting name": meeting_name,
    "meeting number": meeting_number,
    meetingName,
    meetingNumber,
    "name of act": name_of_act,
    nameOfAct,
    network,
    "news case date": news_case_date,
    newsCaseDate,
    "num pages": num_pages,
    numPages,
    number,
    "number of pages": number_of_pages,
    "number of volumes": number_of_volumes,
    "number-of-pages": number_of_pages2,
    "number-of-volumes": number_of_volumes2,
    numberOfVolumes,
    "opening date": opening_date,
    "opening-date": opening_date2,
    openingDate,
    opus,
    "original author": original_author,
    "original date": original_date,
    "original publisher": original_publisher,
    "original publisher place": original_publisher_place,
    "original title": original_title,
    "original-author": original_author2,
    "original-date": original_date2,
    "original-publisher": original_publisher2,
    "original-publisher-place": original_publisher_place2,
    "original-title": original_title2,
    originalDate,
    page,
    pages,
    "parent treaty": parent_treaty,
    parentTreaty,
    "patent number": patent_number,
    patentNumber,
    performer,
    place,
    pmcid,
    pmid,
    podcaster,
    "post type": post_type,
    postType,
    "presentation type": presentation_type,
    presentationType,
    presenter,
    "priority date": priority_date,
    "priority numbers": priority_numbers,
    priorityDate,
    priorityNumbers,
    "proceedings title": proceedings_title,
    proceedingsTitle,
    producer,
    "program title": program_title,
    programTitle,
    programmer,
    "programming language": programming_language,
    programmingLanguage,
    "public law number": public_law_number,
    publicLawNumber,
    "publication date": publication_date,
    "publication number": publication_number,
    "publication title": publication_title,
    "publication-date": publication_date2,
    "publication-number": publication_number2,
    publicationDate,
    publicationNumber,
    publicationTitle,
    publisher,
    "publisher place": publisher_place,
    "publisher-place": publisher_place2,
    recipient,
    references,
    "regnal year": regnal_year,
    regnalYear,
    "regulation type": regulation_type,
    regulationType,
    "regulatory body": regulatory_body,
    regulatoryBody,
    reign,
    release,
    "report number": report_number,
    "report type": report_type,
    reportNumber,
    reportType,
    reporter,
    "reporter volume": reporter_volume,
    reporterVolume,
    repository,
    "resolution label": resolution_label,
    resolutionLabel,
    "reviewed author": reviewed_author,
    "reviewed title": reviewed_title,
    "reviewed-author": reviewed_author2,
    "reviewed-title": reviewed_title2,
    reviewedAuthor,
    rights,
    "running time": running_time,
    runningTime,
    scale,
    "script writer": script_writer,
    "script-writer": script_writer2,
    scriptwriter,
    section,
    series,
    "series editor": series_editor,
    "series number": series_number,
    "series text": series_text,
    "series title": series_title,
    seriesEditor,
    seriesNumber,
    seriesText,
    seriesTitle,
    session,
    "session type": session_type,
    sessionType,
    "short title": short_title,
    shortTitle,
    "signing date": signing_date,
    signingDate,
    source,
    sponsor,
    status,
    studio,
    subject,
    submitted,
    supplement,
    "supplement name": supplement_name,
    supplementName,
    system,
    "testimony by": testimony_by,
    testimonyBy,
    "thesis type": thesis_type,
    thesisType,
    title,
    "title short": title_short,
    "title-short": title_short2,
    translator,
    "treaty number": treaty_number,
    treatyNumber,
    type,
    university,
    url,
    version,
    "version number": version_number,
    versionNumber,
    "video recording format": video_recording_format,
    videoRecordingFormat,
    volume,
    "volume title": volume_title,
    "volume-title": volume_title2,
    volumeTitle,
    "website title": website_title,
    "website type": website_type,
    websiteTitle,
    websiteType,
    "words by": words_by,
    wordsBy,
    "year as volume": year_as_volume,
    yearAsVolume
  };

  // content/extra.ts
  function cslCreator(value) {
    const creator = value.split(/\s*\|\|\s*/);
    if (creator.length === 2) {
      const csl_creator = { family: creator[0] || "", given: creator[1] || "" };
      Zotero.BetterBibTeX.CSL().parseParticles(csl_creator);
      return csl_creator;
    } else {
      return { literal: value };
    }
  }
  var re = {
    old: /^{:((?:bib(?:la)?)?tex\.)?([^:]+)(:)\s*([^}]+)}$/i,
    new: /^((?:bib(?:la)?)?tex\.)?([^:=]+)\s*([:=])\s*([\S\s]*)/i
  };
  var otherFields = ["lccn", "mr", "zbl", "arxiv", "jstor", "hdl", "googlebooksid"];
  function get(extra, mode, options) {
    let defaults2 = false;
    if (!options) {
      options = { citationKey: true, aliases: true, kv: true, tex: true };
      defaults2 = true;
    }
    const other = { zotero: "csl", csl: "zotero" }[mode];
    extra = extra || "";
    const extraFields = {
      kv: options.kv || defaults2 ? {} : void 0,
      creator: {},
      creators: [],
      tex: options.tex || defaults2 ? {} : void 0,
      citationKey: "",
      aliases: options.aliases || defaults2 ? [] : void 0
    };
    let ef;
    extra = extra.split("\n").filter((line, i) => {
      const m = line.match(re.old) || line.match(re.new);
      if (!m)
        return true;
      let [, tex, key, assign, value] = m;
      const texmode = assign === "=" ? "raw" : tex && (tex.includes("T") || tex.match(/^[A-Z]/)) ? "cased" : void 0;
      tex = tex && tex.toLowerCase();
      if (!tex && texmode)
        return true;
      if (tex) {
        key = key.trim().toLowerCase();
      } else {
        key = key.trim().replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
      }
      value = value.trim();
      if (options.citationKey && !tex && ["citation key", "bibtex"].includes(key)) {
        extraFields.citationKey = value;
        return false;
      }
      if (options.aliases && !tex && key === "citation key alias") {
        extraFields.aliases = [...extraFields.aliases, ...value.split(/s*,\s*/).filter((alias) => alias)];
        return false;
      }
      if (options.aliases && tex && options.aliases && key === "ids") {
        extraFields.aliases = [...extraFields.aliases, ...value.split(/s*,\s*/).filter((alias) => alias)];
        return false;
      }
      if (options.kv && key !== "citation key" && (ef = extra_fields_exports[key]) && !tex) {
        for (const field of ef[mode] || ef[other]) {
          switch (ef.type) {
            case "name":
              extraFields.creator[field] = extraFields.creator[field] || [];
              extraFields.creator[field].push(value);
              extraFields.creators.push({ name: value, type: field });
              break;
            case "text":
            case "date":
              extraFields.kv[field] = value;
              break;
            default:
              throw new Error(`Unexpected extra field type ${ef.type}`);
          }
        }
        return false;
      }
      if (options.tex && tex && !key.includes(" ")) {
        extraFields.tex[tex + key] = { value, mode: texmode, line: i };
        return false;
      }
      if (options.tex && !tex && otherFields.includes(key.replace(/[- ]/g, ""))) {
        extraFields.tex[`tex.${key.replace(/[- ]/g, "")}`] = { value, line: i };
        return false;
      }
      return true;
    }).join("\n").trim();
    extraFields.aliases = Array.from(new Set(extraFields.aliases)).filter((key) => key !== extraFields.citationKey);
    return { extra, extraFields };
  }

  // content/logger.ts
  init_globals();

  // content/stringify.ts
  init_globals();
  var import_fast_safe_stringify = __toESM(require_fast_safe_stringify());
  function asciify(str) {
    return str.replace(/[\u007F-\uFFFF]/g, (chr) => `\\u${`0000${chr.charCodeAt(0).toString(16)}`.substr(-4)}`);
  }

  // content/logger.ts
  var import_loupe = __toESM(require_loupe());
  function print(msg) {
    dump(msg + "\n");
  }
  var Logger = class {
    constructor() {
      this.verbose = false;
    }
    format({ error = false, worker: worker2 = 0, translator: translator2 = "", issue: issue2 = 0 }, msg) {
      let workername = `${worker2}`;
      let diff = null;
      const now = Date.now();
      if (this.timestamp)
        diff = now - this.timestamp;
      this.timestamp = now;
      if (typeof msg !== "string") {
        let output = issue2 ? `issue ${issue2}: ` : "";
        for (const m of msg) {
          const type2 = typeof m;
          if (type2 === "string" || m instanceof String || type2 === "number" || type2 === "undefined" || type2 === "boolean" || m === null) {
            output += m;
          } else if (m instanceof Error || m instanceof ErrorEvent || m.toString() === "[object ErrorEvent]") {
            output += this.formatError(m);
          } else if (m && type2 === "object" && m.message) {
            output += this.formatError({ message: m.errorCode ? `${m.message} (${m.errorCode})` : m.message, filename: m.fileName, lineno: m.lineNumber, colno: m.column, stack: m.stack });
          } else {
            output += (0, import_loupe.inspect)(m);
          }
          output += " ";
        }
        msg = output;
      }
      if (worker) {
        if (!worker2 && typeof workerJob !== "undefined") {
          worker2 = workerJob.job;
          workername = `${workerJob.job}`;
        }
        translator2 = translator2 || workerJob.translator;
      } else {
        if (worker2)
          workername = `${worker2} (ceci n'est pas une ouvrier)`;
        if (!translator2 && typeof ZOTERO_TRANSLATOR_INFO !== "undefined")
          translator2 = ZOTERO_TRANSLATOR_INFO.label;
      }
      const prefix = ["better-bibtex", translator2, error && ":error:", worker2 && `(worker ${workername})`].filter((p) => p).join(" ");
      return `{${prefix}} +${diff} ${asciify(msg)}`;
    }
    formatError(e, indent = "") {
      let msg = [e.name, e.message].filter((s) => s).join(": ");
      if (e.filename || e.fileName)
        msg += ` in ${e.filename || e.fileName}`;
      if (e.lineno || e.lineNumber) {
        msg += ` line ${e.lineno}`;
        if (e.colno)
          msg += `, col ${e.colno}`;
      }
      if (e.stack)
        msg += `
${indent}${e.stack.replace(/\n/g, `${indent}
`)}`;
      if (e.error)
        msg += `
${indent}${this.formatError(e.error, "  ")}
`;
      return `${indent}<Error: ${msg}>`;
    }
    get enabled() {
      if (typeof ZOTERO_TRANSLATOR_INFO === "undefined")
        return Zotero.Debug.enabled;
      if (!Zotero.worker)
        return true;
      return !workerJob || workerJob.debugEnabled;
    }
    debug(...msg) {
      if (this.enabled)
        Zotero.debug(this.format({}, msg));
    }
    dump(...msg) {
      if (this.enabled)
        print(this.format({}, msg));
    }
    for(issue2, ...msg) {
      if (this.enabled)
        Zotero.debug(this.format({ issue: issue2 }, msg));
    }
    error(...msg) {
      Zotero.debug(this.format({ error: true }, msg));
    }
    status({ error = false, worker: worker2 = 0, translator: translator2 = "" }, ...msg) {
      if (error || this.enabled)
        Zotero.debug(this.format({ error, worker: worker2, translator: translator2 }, msg));
    }
  };
  var log = new Logger();

  // translators/lib/postscript.ts
  init_globals();
  function postscript(kind, main, guard) {
    let body = `
    // aliases for backwards compat
    const item = source;
    const zotero = source;

    const reference = target;
    const entry = target;
    const ${kind} = target;

    // referencetype is the legacy name of entrytype
    const entrytype = reference.referencetype = entry.entrytype

    const result = (() => { ${main}; })();

    // entry type change through legacy field
    if (entry.entrytype === entrytype && reference.referencetype !== entrytype) entry.entrytype = reference.referencetype
    delete entry.referencetype

    switch (typeof result) {
      case 'undefined': return { cache: true, write: true }
      case 'boolean': return { cache: result, write: true }
      case 'object': return { cache: true, write: true, ...result }
      default:
        Zotero.debug('Unexpected postscript result ' + JSON.stringify(result));
        return { cache: false, write: true }
    }
  `;
    if (guard)
      body = `${guard} = true; try { ${body} } finally { ${guard} = false; }`;
    log.debug("postscript=", body);
    return new Function("target", "source", "Translator", "Zotero", "extra", body);
  }
  var noop = function(_entry, _item, _translator, _extra) {
    return { cache: true, write: true };
  };

  // translators/csl/csl.ts
  var validCSLTypes = require_csl_types();
  var keyOrder = [
    "id",
    "year",
    "season",
    "month",
    "day",
    "circa"
  ].reduce((acc, field, idx) => {
    acc[field] = idx + 1;
    return acc;
  }, {});
  var CSLExporter = new class {
    initialize() {
      try {
        if (Translator.preferences.postscript.trim()) {
          this.postscript = postscript("csl", Translator.preferences.postscript);
        } else {
          this.postscript = noop;
        }
      } catch (err) {
        this.postscript = noop;
        log.error("failed to install postscript", err, "\n", Translator.preferences.postscript);
      }
    }
    postscript(_entry, _item, _translator, _zotero, _extra) {
      return { cache: true, write: true };
    }
    doExport() {
      const items = [];
      const order = [];
      for (const item of Translator.regularitems) {
        order.push({ citationKey: item.citationKey, i: items.length });
        let cached;
        if (cached = Zotero.BetterBibTeX.cacheFetch(item.itemID, Translator.options, Translator.preferences)) {
          items.push(cached.entry);
          continue;
        }
        simplifyForExport(item);
        if (item.accessDate) {
          item.accessDate = item.accessDate.replace(/T?[0-9]{2}:[0-9]{2}:[0-9]{2}.*/, "").trim();
        }
        Object.assign(item, get(item.extra, "csl"));
        let csl = Zotero.Utilities.itemToCSLJSON(item);
        csl["citation-key"] = item.citationKey;
        if (Zotero.worker)
          csl.note = item.extra || void 0;
        if (item.place)
          csl[item.itemType === "presentation" ? "event-place" : "publisher-place"] = item.place;
        if (item.ISBN)
          csl.ISBN = item.ISBN;
        if (item.itemType === "videoRecording" && csl.type === "video")
          csl.type = "motion_picture";
        if (csl.journalAbbreviation)
          [csl.journalAbbreviation, csl["container-title-short"]] = [csl["container-title-short"], csl.journalAbbreviation];
        if (item.date) {
          const parsed = Zotero.BetterBibTeX.parseDate(item.date);
          if (parsed.type)
            csl.issued = this.date2CSL(parsed);
          if (parsed.orig)
            csl["original-date"] = this.date2CSL(parsed.orig);
        }
        if (item.accessDate)
          csl.accessed = this.date2CSL(Zotero.BetterBibTeX.parseDate(item.accessDate));
        if ((csl.type === "motion_picture" || csl.type === "broadcast") && csl.author && !csl.director)
          [csl.author, csl.director] = [csl.director, csl.author];
        csl.id = item.citationKey;
        if (csl.type === "broadcast" && csl.genre === "television broadcast")
          delete csl.genre;
        const extraFields = JSON.parse(JSON.stringify(item.extraFields));
        if (!validCSLTypes.includes(item.extraFields.kv["csl-type"]) && validCSLTypes.includes(item.extraFields.kv.type)) {
          csl.type = item.extraFields.kv.type;
          delete item.extraFields.kv.type;
        }
        for (const [name, value] of Object.entries(item.extraFields.kv)) {
          const ef = extra_fields_exports[name];
          if (!ef.csl)
            continue;
          if (ef.type === "date") {
            csl[name] = this.date2CSL(Zotero.BetterBibTeX.parseDate(value));
          } else if (name === "csl-type") {
            if (!validCSLTypes.includes(value))
              continue;
            csl.type = value;
          } else if (!csl[name]) {
            csl[name] = value;
          }
          delete item.extraFields.kv[name];
        }
        for (const [field, value] of Object.entries(item.extraFields.creator)) {
          if (!extra_fields_exports[field].csl)
            continue;
          csl[field] = value.map(cslCreator);
          delete item.extraFields.creator[field];
        }
        for (const kind of ["translator", "author", "editor", "director", "reviewed-author"]) {
          for (const creator of csl[kind] || []) {
            delete creator.multi;
          }
        }
        delete csl.multi;
        delete csl.system_id;
        let allow = { cache: true, write: true };
        try {
          allow = this.postscript(csl, item, Translator, Zotero, extraFields);
        } catch (err) {
          log.error("CSL.postscript failed:", err);
          allow.cache = false;
        }
        for (const field of Translator.skipFields) {
          delete csl[field];
        }
        csl = this.sortObject(csl);
        csl = this.serialize(csl);
        if (allow.cache)
          Zotero.BetterBibTeX.cacheStore(item.itemID, Translator.options, Translator.preferences, csl);
        if (allow.write)
          items.push(csl);
      }
      order.sort((a, b) => a.citationKey.localeCompare(b.citationKey, void 0, { sensitivity: "base" }));
      Zotero.write(this.flush(order.map((o) => items[o.i])));
    }
    keySort(a, b) {
      const oa = keyOrder[a];
      const ob = keyOrder[b];
      if (oa && ob)
        return oa - ob;
      if (oa)
        return -1;
      if (ob)
        return 1;
      return a.localeCompare(b, void 0, { sensitivity: "base" });
    }
    sortObject(obj) {
      if (obj && !Array.isArray(obj) && typeof obj === "object") {
        for (const field of Object.keys(obj).sort(this.keySort)) {
          const value = obj[field];
          delete obj[field];
          obj[field] = this.sortObject(value);
        }
      }
      return obj;
    }
  }();

  // translators/Better CSL YAML.ts
  var YAML = require_js_yaml();
  var htmlConverter = new class HTML {
    convert(html) {
      this.markdown = "";
      this.walk(Zotero.BetterBibTeX.parseHTML(html));
      return this.markdown;
    }
    walk(tag) {
      if (!tag)
        return;
      if (["#text", "pre", "script"].includes(tag.nodeName)) {
        this.markdown += tag.value.replace(/([[*~^])/g, "\\$1");
        return;
      }
      let span_attrs = "";
      switch (tag.nodeName) {
        case "i":
        case "em":
        case "italic":
          this.markdown += "*";
          break;
        case "b":
        case "strong":
          this.markdown += "**";
          break;
        case "a":
          if (tag.attr.href && tag.attr.href.length)
            this.markdown += "[";
          break;
        case "sup":
          this.markdown += "^";
          break;
        case "sub":
          this.markdown += "~";
          break;
        case "sc":
          this.markdown += '<span style="font-variant:small-caps;">';
          tag.attr.style = "font-variant:small-caps;";
          break;
        case "span":
          for (const [k, v] of Object.entries(tag.attr)) {
            span_attrs += ` ${k}="${v}"`;
          }
          if (span_attrs)
            this.markdown += `<span${span_attrs}>`;
          break;
        case "tbody":
        case "#document":
        case "html":
        case "head":
        case "body":
          break;
        default:
          log.error(`unexpected tag '${tag.nodeName}'`);
      }
      for (const child of tag.childNodes) {
        this.walk(child);
      }
      switch (tag.nodeName) {
        case "i":
        case "italic":
        case "em":
          this.markdown += "*";
          break;
        case "b":
        case "strong":
          this.markdown += "**";
          break;
        case "sup":
          this.markdown += "^";
          break;
        case "sub":
          this.markdown += "~";
          break;
        case "a":
          if (tag.attr.href && tag.attr.href.length)
            this.markdown += `](${tag.attr.href})`;
          break;
        case "sc":
          this.markdown += "</span>";
          break;
        case "span":
          if (span_attrs)
            this.markdown += "</span>";
          break;
      }
    }
  }();
  function date2csl(date2) {
    switch (date2.type) {
      case "open":
        return { year: 0 };
      case "date":
        return {
          year: date2.year > 0 ? date2.year : date2.year - 1,
          month: date2.month || void 0,
          day: date2.month && date2.day ? date2.day : void 0,
          circa: date2.approximate || date2.uncertain ? true : void 0
        };
      case "season":
        return {
          year: date2.year > 0 ? date2.year : date2.year - 1,
          season: date2.season,
          circa: date2.approximate || date2.uncertain ? true : void 0
        };
      default:
        throw new Error(`Expected date or open, got ${date2.type}`);
    }
  }
  CSLExporter.date2CSL = function(date2) {
    switch (date2.type) {
      case "date":
      case "season":
        return [date2csl(date2)];
      case "interval":
        return [date2csl(date2.from), date2csl(date2.to)];
      case "verbatim":
        return [{ literal: date2.verbatim }];
      default:
        throw new Error(`Unexpected date type ${JSON.stringify(date2)}`);
    }
  };
  CSLExporter.serialize = function(csl) {
    for (const [k, v] of Object.entries(csl)) {
      if (typeof v === "string" && v.indexOf("<") >= 0)
        csl[k] = htmlConverter.convert(v);
    }
    return YAML.dump([csl], { skipInvalid: true });
  };
  CSLExporter.flush = (items) => `---
references:
${items.join("\n")}...
`;
  function doExport() {
    Translator.init("export");
    CSLExporter.initialize();
    CSLExporter.doExport();
  }
  function parseInput() {
    let src = "";
    let chunk;
    while (chunk = Zotero.read(102400)) {
      src += chunk;
    }
    src = src.replace(/\n---[\r\n]*$/, "\n...\n");
    return YAML.load(src);
  }
  function detectImport() {
    try {
      return parseInput().references;
    } catch (err) {
      return false;
    }
  }
  function fill(n, template) {
    const str = `${Math.abs(n)}`;
    const padded = `${template}${str}`;
    return `${n < 0 ? "-" : ""}${padded.slice(-Math.max(str.length, template.length))}`;
  }
  function circa(date2) {
    return date2.circa ? "?" : "";
  }
  var seasons = [void 0, "Spring", "Summer", "Autumn", "Winter"];
  function join(dates) {
    switch (dates.length) {
      case 0:
        return "";
      case 1:
        return dates[0];
      case 2:
        if (dates.find((date2) => date2.includes(" "))) {
          return dates.join(" - ");
        } else {
          return dates.join("/");
        }
      default:
        return dates.join(", ");
    }
  }
  function cslDate(date2) {
    if (date2.raw || date2.literal)
      return date2.raw || date2.literal;
    const datepart = date2["date-part"];
    if (!datepart || !datepart[0])
      return "";
    let year = datepart.unshift();
    if (!year)
      return "";
    if (year < 0)
      year += 1;
    let month = datepart.unshift();
    const day = datepart.unshift();
    let season;
    if (date2.season) {
      season = date2.season;
    } else {
      for (const offset of [20, 12]) {
        if (month && month > offset) {
          season = month - offset;
          month = void 0;
        }
      }
    }
    if (typeof season === "number")
      season = seasons[season] || season;
    if (typeof season === "number")
      return `${fill(year, "0000")}-${fill(season, "00")}${circa(date2)}`;
    if (season)
      return `${season} ${fill(year, "0000")}`;
    if (day && month)
      return `${fill(year, "0000")}-${fill(month, "00")}-${fill(day, "0000")}${circa(date2)}`;
    if (month)
      return `${fill(year, "0000")}-${fill(month, "00")}${circa(date2)}`;
    return `${fill(year, "0000")}${circa(date2)}`;
  }
  function yamlDate(date2) {
    if (date2.literal)
      return date2.literal;
    if (!date2.year)
      return "";
    if (date2.year < 0)
      date2.year += 1;
    if (!date2.season) {
      for (const offset of [20, 12]) {
        if (date2.month && date2.month > offset) {
          date2.season = date2.month - offset;
          delete date2.month;
        }
      }
    }
    if (typeof date2.season === "number")
      date2.season = seasons[date2.season] || date2.season;
    if (typeof date2.season === "number")
      return `${fill(date2.year, "0000")}-${fill(date2.season, "00")}${circa(date2)}`;
    if (date2.season)
      return `${date2.season} ${fill(date2.year, "0000")}`;
    if (date2.day && date2.month)
      return `${fill(date2.year, "0000")}-${fill(date2.month, "00")}-${fill(date2.day, "0000")}${circa(date2)}`;
    if (date2.month)
      return `${fill(date2.year, "0000")}-${fill(date2.month, "00")}${circa(date2)}`;
    return `${fill(date2.year, "0000")}${circa(date2)}`;
  }
  async function doImport() {
    for (const source2 of parseInput().references) {
      const item = new Zotero.Item();
      if (!source2.type)
        source2.type = "article";
      Zotero.Utilities.itemFromCSLJSON(item, source2);
      for (const [csl, zotero2] of Object.entries({ accessed: "accessDate", issued: "date", submitted: "filingDate", "original-date": "Original date" })) {
        if (typeof source2[csl] === "undefined")
          continue;
        let value;
        if (source2[csl].raw || source2[csl].literal) {
          value = source2[csl].raw || source2[csl].literal;
        } else if (source2[csl]["date-parts"]) {
          value = join(source2[csl]["date-parts"].map((dp) => cslDate({ ...source2[csl], "date-part": dp })));
        } else if (typeof source2[csl] === "number" || typeof source2[csl] === "string") {
          value = source2[csl];
        } else {
          value = join(source2[csl].map(yamlDate));
        }
        if (zotero2.includes(" ")) {
          item.extra = `${item.extra || ""}
${zotero2}: ${value}`.trim();
        } else {
          item[zotero2] = value;
        }
      }
      if (typeof source2.id === "string" && !source2.id.match(/^[0-9]+$/) && !(item.extra || "").toLowerCase().match(/(^|\n)citation key:/)) {
        item.extra = `${item.extra || ""}
Citation Key: ${source2.id}`.trim();
      }
      await item.complete();
    }
  }
  return __toCommonJS(Better_CSL_YAML_exports);
})();
var { Translator, detectImport, doExport, doImport } = Translator___detectImport___doExport___doImport;
