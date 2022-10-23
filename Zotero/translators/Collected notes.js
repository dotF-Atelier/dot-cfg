{
	"translatorID": "e7859c61-54d4-466a-b236-aadcf1f7e83b",
	"label": "Collected notes",
	"description": "exports your notes",
	"creator": "Emiliano heyns",
	"target": "html",
	"displayOptions": {
		"markdown": false
	},
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"inRepository": false,
	"configOptions": {
		"getCollections": true,
		"hash": "61ea86f7ece7c868382705f31942ccae808ac692df286bfa5fa32749e321aeb9"
	},
	"priority": 100,
	"lastUpdated": "2022-09-03"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"e7859c61-54d4-466a-b236-aadcf1f7e83b","label":"Collected notes","description":"exports your notes","creator":"Emiliano heyns","target":"html","displayOptions":{"markdown":false},"minVersion":"4.0.27","maxVersion":"","translatorType":2,"browserSupport":"gcsv","inRepository":false,"configOptions":{"getCollections":true},"priority":100}); // assign new data
      
var Translator___doExport = (() => {
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
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
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

  // node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
  var require_pattern_in_scope = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js"(exports, module) {
      init_globals();
      module.exports = patternInScope;
      function patternInScope(stack, pattern) {
        return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct);
      }
      function listInScope(stack, list, none) {
        var index;
        if (!list) {
          return none;
        }
        if (typeof list === "string") {
          list = [list];
        }
        index = -1;
        while (++index < list.length) {
          if (stack.indexOf(list[index]) !== -1) {
            return true;
          }
        }
        return false;
      }
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/hard-break.js
  var require_hard_break = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/hard-break.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = hardBreak;
      exports.default = _default;
      var patternInScope = require_pattern_in_scope();
      function hardBreak(node, _, context, safe) {
        var index = -1;
        while (++index < context.unsafe.length) {
          if (context.unsafe[index].character === "\n" && patternInScope(context.stack, context.unsafe[index])) {
            return /[ \t]/.test(safe.before) ? "" : " ";
          }
        }
        return "  \n";
      }
    }
  });

  // node_modules/hast-util-has-property/index.js
  var require_hast_util_has_property = __commonJS({
    "node_modules/hast-util-has-property/index.js"(exports, module) {
      init_globals();
      var own = {}.hasOwnProperty;
      module.exports = hasProperty;
      function hasProperty(node, name) {
        var props;
        var value;
        if (!node || !name || typeof node !== "object" || node.type !== "element") {
          return false;
        }
        props = node.properties;
        value = props && own.call(props, name) && props[name];
        return value !== null && value !== void 0 && value !== false;
      }
    }
  });

  // node_modules/hast-util-is-element/convert.js
  var require_convert = __commonJS({
    "node_modules/hast-util-is-element/convert.js"(exports, module) {
      init_globals();
      module.exports = convert;
      function convert(test) {
        if (typeof test === "string") {
          return tagNameFactory(test);
        }
        if (test === null || test === void 0) {
          return element;
        }
        if (typeof test === "object") {
          return any(test);
        }
        if (typeof test === "function") {
          return callFactory(test);
        }
        throw new Error("Expected function, string, or array as test");
      }
      function convertAll(tests) {
        var length = tests.length;
        var index = -1;
        var results = [];
        while (++index < length) {
          results[index] = convert(tests[index]);
        }
        return results;
      }
      function any(tests) {
        var checks = convertAll(tests);
        var length = checks.length;
        return matches;
        function matches() {
          var index = -1;
          while (++index < length) {
            if (checks[index].apply(this, arguments)) {
              return true;
            }
          }
          return false;
        }
      }
      function tagNameFactory(test) {
        return tagName;
        function tagName(node) {
          return element(node) && node.tagName === test;
        }
      }
      function callFactory(test) {
        return call;
        function call(node) {
          return element(node) && Boolean(test.apply(this, arguments));
        }
      }
      function element(node) {
        return node && typeof node === "object" && node.type === "element" && typeof node.tagName === "string";
      }
    }
  });

  // node_modules/repeat-string/index.js
  var require_repeat_string = __commonJS({
    "node_modules/repeat-string/index.js"(exports, module) {
      init_globals();
      var res = "";
      var cache;
      module.exports = repeat;
      function repeat(str, num) {
        if (typeof str !== "string") {
          throw new TypeError("expected a string");
        }
        if (num === 1)
          return str;
        if (num === 2)
          return str + str;
        var max = str.length * num;
        if (cache !== str || typeof cache === "undefined") {
          cache = str;
          res = "";
        } else if (res.length >= max) {
          return res.substr(0, max);
        }
        while (max > res.length && num > 1) {
          if (num & 1) {
            res += str;
          }
          num >>= 1;
          str += str;
        }
        res += str;
        res = res.substr(0, max);
        return res;
      }
    }
  });

  // node_modules/unist-util-is/convert.js
  var require_convert2 = __commonJS({
    "node_modules/unist-util-is/convert.js"(exports, module) {
      init_globals();
      module.exports = convert;
      function convert(test) {
        if (test == null) {
          return ok;
        }
        if (typeof test === "string") {
          return typeFactory(test);
        }
        if (typeof test === "object") {
          return "length" in test ? anyFactory(test) : allFactory(test);
        }
        if (typeof test === "function") {
          return test;
        }
        throw new Error("Expected function, string, or object as test");
      }
      function allFactory(test) {
        return all;
        function all(node) {
          var key;
          for (key in test) {
            if (node[key] !== test[key])
              return false;
          }
          return true;
        }
      }
      function anyFactory(tests) {
        var checks = [];
        var index = -1;
        while (++index < tests.length) {
          checks[index] = convert(tests[index]);
        }
        return any;
        function any() {
          var index2 = -1;
          while (++index2 < checks.length) {
            if (checks[index2].apply(this, arguments)) {
              return true;
            }
          }
          return false;
        }
      }
      function typeFactory(test) {
        return type2;
        function type2(node) {
          return Boolean(node && node.type === test);
        }
      }
      function ok() {
        return true;
      }
    }
  });

  // node_modules/unist-util-find-after/index.js
  var require_unist_util_find_after = __commonJS({
    "node_modules/unist-util-find-after/index.js"(exports, module) {
      init_globals();
      var convert = require_convert2();
      module.exports = findAfter;
      function findAfter(parent, index, test) {
        var is = convert(test);
        var children;
        var child;
        var length;
        if (!parent || !parent.type || !parent.children) {
          throw new Error("Expected parent node");
        }
        children = parent.children;
        length = children.length;
        if (index && index.type) {
          index = children.indexOf(index);
        }
        if (isNaN(index) || index < 0 || index === Infinity) {
          throw new Error("Expected positive finite index or child node");
        }
        while (++index < length) {
          child = children[index];
          if (is(child, index, parent)) {
            return child;
          }
        }
        return null;
      }
    }
  });

  // node_modules/hast-util-to-text/index.js
  var require_hast_util_to_text = __commonJS({
    "node_modules/hast-util-to-text/index.js"(exports, module) {
      init_globals();
      var repeat = require_repeat_string();
      var convert = require_convert();
      var findAfter = require_unist_util_find_after();
      module.exports = toText;
      var searchLineFeeds = /\n/g;
      var searchTabOrSpaces = /[\t ]+/g;
      var br = convert("br");
      var p = convert("p");
      var cell = convert(["th", "td"]);
      var row = convert("tr");
      var notRendered = convert([
        "datalist",
        "head",
        "noembed",
        "noframes",
        "rp",
        "script",
        "style",
        "template",
        "title",
        "noscript",
        hidden,
        closedDialog
      ]);
      var blockOrCaption = convert([
        "caption",
        "html",
        "body",
        "address",
        "blockquote",
        "center",
        "dialog",
        "div",
        "figure",
        "figcaption",
        "footer",
        "form,",
        "header",
        "hr",
        "legend",
        "listing",
        "main",
        "p",
        "plaintext",
        "pre",
        "xmp",
        "article",
        "aside",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hgroup",
        "nav",
        "section",
        "dir",
        "dd",
        "dl",
        "dt",
        "menu",
        "ol",
        "ul"
      ]);
      function toText(node) {
        var children = node.children || [];
        var block = blockOrCaption(node);
        var whiteSpace = inferWhiteSpace(node, {});
        var index = -1;
        var results;
        var result;
        var value;
        var count;
        if (node.type === "text" || node.type === "comment") {
          return collectText(node, {
            whiteSpace,
            breakBefore: true,
            breakAfter: true
          });
        }
        results = [];
        while (++index < children.length) {
          results = results.concat(
            innerTextCollection(children[index], index, node, {
              whiteSpace,
              breakBefore: index ? null : block,
              breakAfter: index < children.length - 1 ? br(children[index + 1]) : block
            })
          );
        }
        index = -1;
        result = [];
        while (++index < results.length) {
          value = results[index];
          if (typeof value === "number") {
            if (count !== void 0 && value > count)
              count = value;
          } else if (value) {
            if (count)
              result.push(repeat("\n", count));
            count = 0;
            result.push(value);
          }
        }
        return result.join("");
      }
      function innerTextCollection(node, index, parent, options) {
        if (node.type === "element") {
          return collectElement(node, index, parent, options);
        }
        if (node.type === "text") {
          return [
            options.whiteSpace === "normal" ? collectText(node, options) : collectPreText(node, options)
          ];
        }
        return [];
      }
      function collectElement(node, _, parent, options) {
        var whiteSpace = inferWhiteSpace(node, options);
        var children = node.children || [];
        var index = -1;
        var items = [];
        var prefix;
        var suffix;
        if (notRendered(node)) {
          return items;
        }
        if (br(node)) {
          suffix = "\n";
        } else if (row(node) && findAfter(parent, node, row)) {
          suffix = "\n";
        } else if (p(node)) {
          prefix = 2;
          suffix = 2;
        } else if (blockOrCaption(node)) {
          prefix = 1;
          suffix = 1;
        }
        while (++index < children.length) {
          items = items.concat(
            innerTextCollection(children[index], index, node, {
              whiteSpace,
              breakBefore: index ? null : prefix,
              breakAfter: index < children.length - 1 ? br(children[index + 1]) : suffix
            })
          );
        }
        if (cell(node) && findAfter(parent, node, cell)) {
          items.push("	");
        }
        if (prefix)
          items.unshift(prefix);
        if (suffix)
          items.push(suffix);
        return items;
      }
      function collectText(node, options) {
        var value = String(node.value);
        var lines = [];
        var result = [];
        var start = 0;
        var index = -1;
        var match;
        var end;
        var join;
        while (start < value.length) {
          searchLineFeeds.lastIndex = start;
          match = searchLineFeeds.exec(value);
          end = match ? match.index : value.length;
          lines.push(
            trimAndcollapseSpacesAndTabs(
              value.slice(start, end).replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, ""),
              options.breakBefore,
              options.breakAfter
            )
          );
          start = end + 1;
        }
        while (++index < lines.length) {
          if (lines[index].charCodeAt(lines[index].length - 1) === 8203 || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 8203) {
            result.push(lines[index]);
            join = "";
          } else if (lines[index]) {
            if (join)
              result.push(join);
            result.push(lines[index]);
            join = " ";
          }
        }
        return result.join("");
      }
      function collectPreText(node) {
        return String(node.value);
      }
      function trimAndcollapseSpacesAndTabs(value, breakBefore, breakAfter) {
        var result = [];
        var start = 0;
        var match;
        var end;
        while (start < value.length) {
          searchTabOrSpaces.lastIndex = start;
          match = searchTabOrSpaces.exec(value);
          end = match ? match.index : value.length;
          if (!start && !end && match && !breakBefore) {
            result.push("");
          }
          if (start !== end) {
            result.push(value.slice(start, end));
          }
          start = match ? end + match[0].length : end;
        }
        if (start !== end && !breakAfter) {
          result.push("");
        }
        return result.join(" ");
      }
      function inferWhiteSpace(node, options) {
        var props = node.properties || {};
        var inherit = options.whiteSpace || "normal";
        switch (node.tagName) {
          case "listing":
          case "plaintext":
          case "xmp":
            return "pre";
          case "nobr":
            return "nowrap";
          case "pre":
            return props.wrap ? "pre-wrap" : "pre";
          case "td":
          case "th":
            return props.noWrap ? "nowrap" : inherit;
          case "textarea":
            return "pre-wrap";
          default:
            return inherit;
        }
      }
      function hidden(node) {
        return (node.properties || {}).hidden;
      }
      function closedDialog(node) {
        return node.tagName === "dialog" && !(node.properties || {}).open;
      }
    }
  });

  // node_modules/trim-trailing-lines/index.js
  var require_trim_trailing_lines = __commonJS({
    "node_modules/trim-trailing-lines/index.js"(exports, module) {
      init_globals();
      module.exports = trimTrailingLines;
      function trimTrailingLines(value) {
        return String(value).replace(/\n+$/, "");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/wrap-text.js
  var require_wrap_text = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/wrap-text.js"(exports, module) {
      init_globals();
      module.exports = wrapText;
      function wrapText(h, value) {
        return h.wrapText ? value : value.replace(/\r?\n|\r/g, " ");
      }
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/to-mdast-code-block.js
  var require_to_mdast_code_block = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/to-mdast-code-block.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = code2;
      exports.default = _default;
      var has = require_hast_util_has_property();
      var convert = require_convert();
      var toText = require_hast_util_to_text();
      var trim = require_trim_trailing_lines();
      var wrapText = require_wrap_text();
      var prefixes = ["language-", "lang-", "highlight-source-"];
      var isPre = convert("pre");
      var isCode = convert("code");
      function code2(h, node, parent) {
        var children = node.children;
        var index = -1;
        var classList = [];
        var lang;
        if (isPre(node)) {
          lang = node.properties.lang || null;
          classList = [...parent.properties.className || [], ...node.properties.className || []];
          while (++index < children.length) {
            if (isCode(children[index]) && has(children[index], "className")) {
              classList = classList.concat(children[index].properties.className);
              break;
            }
          }
        }
        if (classList) {
          index = -1;
          while (++index < classList.length) {
            if (lang)
              break;
            for (const prefix of prefixes) {
              if (classList[index].slice(0, prefix.length) === prefix) {
                lang = classList[index].slice(prefix.length);
                break;
              }
            }
          }
        }
        return h(node, "code", {
          lang: lang || null,
          meta: null
        }, trim(wrapText(h, toText(node))));
      }
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/to-mdast-comment.js
  var require_to_mdast_comment = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/to-mdast-comment.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = comment;
      module.exports = comment;
      function comment(_h, _node) {
        return void 0;
      }
    }
  });

  // node_modules/bail/index.js
  var require_bail = __commonJS({
    "node_modules/bail/index.js"(exports, module) {
      init_globals();
      module.exports = bail;
      function bail(err) {
        if (err) {
          throw err;
        }
      }
    }
  });

  // node_modules/unified/node_modules/is-buffer/index.js
  var require_is_buffer = __commonJS({
    "node_modules/unified/node_modules/is-buffer/index.js"(exports, module) {
      init_globals();
      module.exports = function isBuffer(obj) {
        return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
      };
    }
  });

  // node_modules/extend/index.js
  var require_extend = __commonJS({
    "node_modules/extend/index.js"(exports, module) {
      init_globals();
      var hasOwn = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var defineProperty = Object.defineProperty;
      var gOPD = Object.getOwnPropertyDescriptor;
      var isArray = function isArray2(arr) {
        if (typeof Array.isArray === "function") {
          return Array.isArray(arr);
        }
        return toStr.call(arr) === "[object Array]";
      };
      var isPlainObject = function isPlainObject2(obj) {
        if (!obj || toStr.call(obj) !== "[object Object]") {
          return false;
        }
        var hasOwnConstructor = hasOwn.call(obj, "constructor");
        var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
          return false;
        }
        var key;
        for (key in obj) {
        }
        return typeof key === "undefined" || hasOwn.call(obj, key);
      };
      var setProperty = function setProperty2(target, options) {
        if (defineProperty && options.name === "__proto__") {
          defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
          });
        } else {
          target[options.name] = options.newValue;
        }
      };
      var getProperty = function getProperty2(obj, name) {
        if (name === "__proto__") {
          if (!hasOwn.call(obj, name)) {
            return void 0;
          } else if (gOPD) {
            return gOPD(obj, name).value;
          }
        }
        return obj[name];
      };
      module.exports = function extend() {
        var options, name, src, copy, copyIsArray, clone;
        var target = arguments[0];
        var i = 1;
        var length = arguments.length;
        var deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[1] || {};
          i = 2;
        }
        if (target == null || typeof target !== "object" && typeof target !== "function") {
          target = {};
        }
        for (; i < length; ++i) {
          options = arguments[i];
          if (options != null) {
            for (name in options) {
              src = getProperty(target, name);
              copy = getProperty(options, name);
              if (target !== copy) {
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                  if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && isArray(src) ? src : [];
                  } else {
                    clone = src && isPlainObject(src) ? src : {};
                  }
                  setProperty(target, { name, newValue: extend(deep, clone, copy) });
                } else if (typeof copy !== "undefined") {
                  setProperty(target, { name, newValue: copy });
                }
              }
            }
          }
        }
        return target;
      };
    }
  });

  // node_modules/unified/node_modules/is-plain-obj/index.js
  var require_is_plain_obj = __commonJS({
    "node_modules/unified/node_modules/is-plain-obj/index.js"(exports, module) {
      init_globals();
      module.exports = (value) => {
        if (Object.prototype.toString.call(value) !== "[object Object]") {
          return false;
        }
        const prototype = Object.getPrototypeOf(value);
        return prototype === null || prototype === Object.prototype;
      };
    }
  });

  // node_modules/trough/wrap.js
  var require_wrap = __commonJS({
    "node_modules/trough/wrap.js"(exports, module) {
      init_globals();
      var slice = [].slice;
      module.exports = wrap;
      function wrap(fn, callback) {
        var invoked;
        return wrapped;
        function wrapped() {
          var params = slice.call(arguments, 0);
          var callback2 = fn.length > params.length;
          var result;
          if (callback2) {
            params.push(done);
          }
          try {
            result = fn.apply(null, params);
          } catch (error) {
            if (callback2 && invoked) {
              throw error;
            }
            return done(error);
          }
          if (!callback2) {
            if (result && typeof result.then === "function") {
              result.then(then, done);
            } else if (result instanceof Error) {
              done(result);
            } else {
              then(result);
            }
          }
        }
        function done() {
          if (!invoked) {
            invoked = true;
            callback.apply(null, arguments);
          }
        }
        function then(value) {
          done(null, value);
        }
      }
    }
  });

  // node_modules/trough/index.js
  var require_trough = __commonJS({
    "node_modules/trough/index.js"(exports, module) {
      init_globals();
      var wrap = require_wrap();
      module.exports = trough;
      trough.wrap = wrap;
      var slice = [].slice;
      function trough() {
        var fns = [];
        var middleware = {};
        middleware.run = run;
        middleware.use = use;
        return middleware;
        function run() {
          var index = -1;
          var input = slice.call(arguments, 0, -1);
          var done = arguments[arguments.length - 1];
          if (typeof done !== "function") {
            throw new Error("Expected function as last argument, not " + done);
          }
          next.apply(null, [null].concat(input));
          function next(err) {
            var fn = fns[++index];
            var params = slice.call(arguments, 0);
            var values = params.slice(1);
            var length = input.length;
            var pos = -1;
            if (err) {
              done(err);
              return;
            }
            while (++pos < length) {
              if (values[pos] === null || values[pos] === void 0) {
                values[pos] = input[pos];
              }
            }
            input = values;
            if (fn) {
              wrap(fn, next).apply(null, input);
            } else {
              done.apply(null, [null].concat(input));
            }
          }
        }
        function use(fn) {
          if (typeof fn !== "function") {
            throw new Error("Expected `fn` to be a function, not " + fn);
          }
          fns.push(fn);
          return middleware;
        }
      }
    }
  });

  // node_modules/vfile/node_modules/unist-util-stringify-position/index.js
  var require_unist_util_stringify_position = __commonJS({
    "node_modules/vfile/node_modules/unist-util-stringify-position/index.js"(exports, module) {
      init_globals();
      var own = {}.hasOwnProperty;
      module.exports = stringify;
      function stringify(value) {
        if (!value || typeof value !== "object") {
          return "";
        }
        if (own.call(value, "position") || own.call(value, "type")) {
          return position(value.position);
        }
        if (own.call(value, "start") || own.call(value, "end")) {
          return position(value);
        }
        if (own.call(value, "line") || own.call(value, "column")) {
          return point(value);
        }
        return "";
      }
      function point(point2) {
        if (!point2 || typeof point2 !== "object") {
          point2 = {};
        }
        return index(point2.line) + ":" + index(point2.column);
      }
      function position(pos) {
        if (!pos || typeof pos !== "object") {
          pos = {};
        }
        return point(pos.start) + "-" + point(pos.end);
      }
      function index(value) {
        return value && typeof value === "number" ? value : 1;
      }
    }
  });

  // node_modules/vfile/node_modules/vfile-message/index.js
  var require_vfile_message = __commonJS({
    "node_modules/vfile/node_modules/vfile-message/index.js"(exports, module) {
      init_globals();
      var stringify = require_unist_util_stringify_position();
      module.exports = VMessage;
      function VMessagePrototype() {
      }
      VMessagePrototype.prototype = Error.prototype;
      VMessage.prototype = new VMessagePrototype();
      var proto = VMessage.prototype;
      proto.file = "";
      proto.name = "";
      proto.reason = "";
      proto.message = "";
      proto.stack = "";
      proto.fatal = null;
      proto.column = null;
      proto.line = null;
      function VMessage(reason, position, origin) {
        var parts;
        var range;
        var location;
        if (typeof position === "string") {
          origin = position;
          position = null;
        }
        parts = parseOrigin(origin);
        range = stringify(position) || "1:1";
        location = {
          start: { line: null, column: null },
          end: { line: null, column: null }
        };
        if (position && position.position) {
          position = position.position;
        }
        if (position) {
          if (position.start) {
            location = position;
            position = position.start;
          } else {
            location.start = position;
          }
        }
        if (reason.stack) {
          this.stack = reason.stack;
          reason = reason.message;
        }
        this.message = reason;
        this.name = range;
        this.reason = reason;
        this.line = position ? position.line : null;
        this.column = position ? position.column : null;
        this.location = location;
        this.source = parts[0];
        this.ruleId = parts[1];
      }
      function parseOrigin(origin) {
        var result = [null, null];
        var index;
        if (typeof origin === "string") {
          index = origin.indexOf(":");
          if (index === -1) {
            result[1] = origin;
          } else {
            result[0] = origin.slice(0, index);
            result[1] = origin.slice(index + 1);
          }
        }
        return result;
      }
    }
  });

  // node_modules/vfile/lib/minpath.browser.js
  var require_minpath_browser = __commonJS({
    "node_modules/vfile/lib/minpath.browser.js"(exports) {
      init_globals();
      exports.basename = basename;
      exports.dirname = dirname;
      exports.extname = extname;
      exports.join = join;
      exports.sep = "/";
      function basename(path, ext) {
        var start = 0;
        var end = -1;
        var index;
        var firstNonSlashEnd;
        var seenNonSlash;
        var extIndex;
        if (ext !== void 0 && typeof ext !== "string") {
          throw new TypeError('"ext" argument must be a string');
        }
        assertPath(path);
        index = path.length;
        if (ext === void 0 || !ext.length || ext.length > path.length) {
          while (index--) {
            if (path.charCodeAt(index) === 47) {
              if (seenNonSlash) {
                start = index + 1;
                break;
              }
            } else if (end < 0) {
              seenNonSlash = true;
              end = index + 1;
            }
          }
          return end < 0 ? "" : path.slice(start, end);
        }
        if (ext === path) {
          return "";
        }
        firstNonSlashEnd = -1;
        extIndex = ext.length - 1;
        while (index--) {
          if (path.charCodeAt(index) === 47) {
            if (seenNonSlash) {
              start = index + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd < 0) {
              seenNonSlash = true;
              firstNonSlashEnd = index + 1;
            }
            if (extIndex > -1) {
              if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
                if (extIndex < 0) {
                  end = index;
                }
              } else {
                extIndex = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end) {
          end = firstNonSlashEnd;
        } else if (end < 0) {
          end = path.length;
        }
        return path.slice(start, end);
      }
      function dirname(path) {
        var end;
        var unmatchedSlash;
        var index;
        assertPath(path);
        if (!path.length) {
          return ".";
        }
        end = -1;
        index = path.length;
        while (--index) {
          if (path.charCodeAt(index) === 47) {
            if (unmatchedSlash) {
              end = index;
              break;
            }
          } else if (!unmatchedSlash) {
            unmatchedSlash = true;
          }
        }
        return end < 0 ? path.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path.charCodeAt(0) === 47 ? "//" : path.slice(0, end);
      }
      function extname(path) {
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var preDotState = 0;
        var unmatchedSlash;
        var code2;
        var index;
        assertPath(path);
        index = path.length;
        while (index--) {
          code2 = path.charCodeAt(index);
          if (code2 === 47) {
            if (unmatchedSlash) {
              startPart = index + 1;
              break;
            }
            continue;
          }
          if (end < 0) {
            unmatchedSlash = true;
            end = index + 1;
          }
          if (code2 === 46) {
            if (startDot < 0) {
              startDot = index;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot > -1) {
            preDotState = -1;
          }
        }
        if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path.slice(startDot, end);
      }
      function join() {
        var index = -1;
        var joined;
        while (++index < arguments.length) {
          assertPath(arguments[index]);
          if (arguments[index]) {
            joined = joined === void 0 ? arguments[index] : joined + "/" + arguments[index];
          }
        }
        return joined === void 0 ? "." : normalize(joined);
      }
      function normalize(path) {
        var absolute;
        var value;
        assertPath(path);
        absolute = path.charCodeAt(0) === 47;
        value = normalizeString(path, !absolute);
        if (!value.length && !absolute) {
          value = ".";
        }
        if (value.length && path.charCodeAt(path.length - 1) === 47) {
          value += "/";
        }
        return absolute ? "/" + value : value;
      }
      function normalizeString(path, allowAboveRoot) {
        var result = "";
        var lastSegmentLength = 0;
        var lastSlash = -1;
        var dots = 0;
        var index = -1;
        var code2;
        var lastSlashIndex;
        while (++index <= path.length) {
          if (index < path.length) {
            code2 = path.charCodeAt(index);
          } else if (code2 === 47) {
            break;
          } else {
            code2 = 47;
          }
          if (code2 === 47) {
            if (lastSlash === index - 1 || dots === 1) {
            } else if (lastSlash !== index - 1 && dots === 2) {
              if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
                if (result.length > 2) {
                  lastSlashIndex = result.lastIndexOf("/");
                  if (lastSlashIndex !== result.length - 1) {
                    if (lastSlashIndex < 0) {
                      result = "";
                      lastSegmentLength = 0;
                    } else {
                      result = result.slice(0, lastSlashIndex);
                      lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                    }
                    lastSlash = index;
                    dots = 0;
                    continue;
                  }
                } else if (result.length) {
                  result = "";
                  lastSegmentLength = 0;
                  lastSlash = index;
                  dots = 0;
                  continue;
                }
              }
              if (allowAboveRoot) {
                result = result.length ? result + "/.." : "..";
                lastSegmentLength = 2;
              }
            } else {
              if (result.length) {
                result += "/" + path.slice(lastSlash + 1, index);
              } else {
                result = path.slice(lastSlash + 1, index);
              }
              lastSegmentLength = index - lastSlash - 1;
            }
            lastSlash = index;
            dots = 0;
          } else if (code2 === 46 && dots > -1) {
            dots++;
          } else {
            dots = -1;
          }
        }
        return result;
      }
      function assertPath(path) {
        if (typeof path !== "string") {
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(path)
          );
        }
      }
    }
  });

  // node_modules/vfile/lib/minproc.browser.js
  var require_minproc_browser = __commonJS({
    "node_modules/vfile/lib/minproc.browser.js"(exports) {
      init_globals();
      exports.cwd = cwd;
      function cwd() {
        return "/";
      }
    }
  });

  // node_modules/vfile/node_modules/is-buffer/index.js
  var require_is_buffer2 = __commonJS({
    "node_modules/vfile/node_modules/is-buffer/index.js"(exports, module) {
      init_globals();
      module.exports = function isBuffer(obj) {
        return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
      };
    }
  });

  // node_modules/vfile/lib/core.js
  var require_core = __commonJS({
    "node_modules/vfile/lib/core.js"(exports, module) {
      init_globals();
      var p = require_minpath_browser();
      var proc = require_minproc_browser();
      var buffer = require_is_buffer2();
      module.exports = VFile;
      var own = {}.hasOwnProperty;
      var order = ["history", "path", "basename", "stem", "extname", "dirname"];
      VFile.prototype.toString = toString;
      Object.defineProperty(VFile.prototype, "path", { get: getPath, set: setPath });
      Object.defineProperty(VFile.prototype, "dirname", {
        get: getDirname,
        set: setDirname
      });
      Object.defineProperty(VFile.prototype, "basename", {
        get: getBasename,
        set: setBasename
      });
      Object.defineProperty(VFile.prototype, "extname", {
        get: getExtname,
        set: setExtname
      });
      Object.defineProperty(VFile.prototype, "stem", { get: getStem, set: setStem });
      function VFile(options) {
        var prop;
        var index;
        if (!options) {
          options = {};
        } else if (typeof options === "string" || buffer(options)) {
          options = { contents: options };
        } else if ("message" in options && "messages" in options) {
          return options;
        }
        if (!(this instanceof VFile)) {
          return new VFile(options);
        }
        this.data = {};
        this.messages = [];
        this.history = [];
        this.cwd = proc.cwd();
        index = -1;
        while (++index < order.length) {
          prop = order[index];
          if (own.call(options, prop)) {
            this[prop] = options[prop];
          }
        }
        for (prop in options) {
          if (order.indexOf(prop) < 0) {
            this[prop] = options[prop];
          }
        }
      }
      function getPath() {
        return this.history[this.history.length - 1];
      }
      function setPath(path) {
        assertNonEmpty(path, "path");
        if (this.path !== path) {
          this.history.push(path);
        }
      }
      function getDirname() {
        return typeof this.path === "string" ? p.dirname(this.path) : void 0;
      }
      function setDirname(dirname) {
        assertPath(this.path, "dirname");
        this.path = p.join(dirname || "", this.basename);
      }
      function getBasename() {
        return typeof this.path === "string" ? p.basename(this.path) : void 0;
      }
      function setBasename(basename) {
        assertNonEmpty(basename, "basename");
        assertPart(basename, "basename");
        this.path = p.join(this.dirname || "", basename);
      }
      function getExtname() {
        return typeof this.path === "string" ? p.extname(this.path) : void 0;
      }
      function setExtname(extname) {
        assertPart(extname, "extname");
        assertPath(this.path, "extname");
        if (extname) {
          if (extname.charCodeAt(0) !== 46) {
            throw new Error("`extname` must start with `.`");
          }
          if (extname.indexOf(".", 1) > -1) {
            throw new Error("`extname` cannot contain multiple dots");
          }
        }
        this.path = p.join(this.dirname, this.stem + (extname || ""));
      }
      function getStem() {
        return typeof this.path === "string" ? p.basename(this.path, this.extname) : void 0;
      }
      function setStem(stem) {
        assertNonEmpty(stem, "stem");
        assertPart(stem, "stem");
        this.path = p.join(this.dirname || "", stem + (this.extname || ""));
      }
      function toString(encoding) {
        return (this.contents || "").toString(encoding);
      }
      function assertPart(part, name) {
        if (part && part.indexOf(p.sep) > -1) {
          throw new Error(
            "`" + name + "` cannot be a path: did not expect `" + p.sep + "`"
          );
        }
      }
      function assertNonEmpty(part, name) {
        if (!part) {
          throw new Error("`" + name + "` cannot be empty");
        }
      }
      function assertPath(path, name) {
        if (!path) {
          throw new Error("Setting `" + name + "` requires `path` to be set too");
        }
      }
    }
  });

  // node_modules/vfile/lib/index.js
  var require_lib = __commonJS({
    "node_modules/vfile/lib/index.js"(exports, module) {
      init_globals();
      var VMessage = require_vfile_message();
      var VFile = require_core();
      module.exports = VFile;
      VFile.prototype.message = message;
      VFile.prototype.info = info;
      VFile.prototype.fail = fail;
      function message(reason, position, origin) {
        var message2 = new VMessage(reason, position, origin);
        if (this.path) {
          message2.name = this.path + ":" + message2.name;
          message2.file = this.path;
        }
        message2.fatal = false;
        this.messages.push(message2);
        return message2;
      }
      function fail() {
        var message2 = this.message.apply(this, arguments);
        message2.fatal = true;
        throw message2;
      }
      function info() {
        var message2 = this.message.apply(this, arguments);
        message2.fatal = null;
        return message2;
      }
    }
  });

  // node_modules/vfile/index.js
  var require_vfile = __commonJS({
    "node_modules/vfile/index.js"(exports, module) {
      init_globals();
      module.exports = require_lib();
    }
  });

  // node_modules/unified/index.js
  var require_unified = __commonJS({
    "node_modules/unified/index.js"(exports, module) {
      init_globals();
      var bail = require_bail();
      var buffer = require_is_buffer();
      var extend = require_extend();
      var plain = require_is_plain_obj();
      var trough = require_trough();
      var vfile = require_vfile();
      module.exports = unified().freeze();
      var slice = [].slice;
      var own = {}.hasOwnProperty;
      var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
      function pipelineParse(p, ctx2) {
        ctx2.tree = p.parse(ctx2.file);
      }
      function pipelineRun(p, ctx2, next) {
        p.run(ctx2.tree, ctx2.file, done);
        function done(error, tree, file) {
          if (error) {
            next(error);
          } else {
            ctx2.tree = tree;
            ctx2.file = file;
            next();
          }
        }
      }
      function pipelineStringify(p, ctx2) {
        var result = p.stringify(ctx2.tree, ctx2.file);
        if (result === void 0 || result === null) {
        } else if (typeof result === "string" || buffer(result)) {
          if ("value" in ctx2.file) {
            ctx2.file.value = result;
          }
          ctx2.file.contents = result;
        } else {
          ctx2.file.result = result;
        }
      }
      function unified() {
        var attachers = [];
        var transformers = trough();
        var namespace = {};
        var freezeIndex = -1;
        var frozen;
        processor.data = data;
        processor.freeze = freeze;
        processor.attachers = attachers;
        processor.use = use;
        processor.parse = parse;
        processor.stringify = stringify;
        processor.run = run;
        processor.runSync = runSync;
        processor.process = process2;
        processor.processSync = processSync;
        return processor;
        function processor() {
          var destination = unified();
          var index = -1;
          while (++index < attachers.length) {
            destination.use.apply(null, attachers[index]);
          }
          destination.data(extend(true, {}, namespace));
          return destination;
        }
        function freeze() {
          var values;
          var transformer;
          if (frozen) {
            return processor;
          }
          while (++freezeIndex < attachers.length) {
            values = attachers[freezeIndex];
            if (values[1] === false) {
              continue;
            }
            if (values[1] === true) {
              values[1] = void 0;
            }
            transformer = values[0].apply(processor, values.slice(1));
            if (typeof transformer === "function") {
              transformers.use(transformer);
            }
          }
          frozen = true;
          freezeIndex = Infinity;
          return processor;
        }
        function data(key, value) {
          if (typeof key === "string") {
            if (arguments.length === 2) {
              assertUnfrozen("data", frozen);
              namespace[key] = value;
              return processor;
            }
            return own.call(namespace, key) && namespace[key] || null;
          }
          if (key) {
            assertUnfrozen("data", frozen);
            namespace = key;
            return processor;
          }
          return namespace;
        }
        function use(value) {
          var settings;
          assertUnfrozen("use", frozen);
          if (value === null || value === void 0) {
          } else if (typeof value === "function") {
            addPlugin.apply(null, arguments);
          } else if (typeof value === "object") {
            if ("length" in value) {
              addList(value);
            } else {
              addPreset(value);
            }
          } else {
            throw new Error("Expected usable value, not `" + value + "`");
          }
          if (settings) {
            namespace.settings = extend(namespace.settings || {}, settings);
          }
          return processor;
          function addPreset(result) {
            addList(result.plugins);
            if (result.settings) {
              settings = extend(settings || {}, result.settings);
            }
          }
          function add(value2) {
            if (typeof value2 === "function") {
              addPlugin(value2);
            } else if (typeof value2 === "object") {
              if ("length" in value2) {
                addPlugin.apply(null, value2);
              } else {
                addPreset(value2);
              }
            } else {
              throw new Error("Expected usable value, not `" + value2 + "`");
            }
          }
          function addList(plugins) {
            var index = -1;
            if (plugins === null || plugins === void 0) {
            } else if (typeof plugins === "object" && "length" in plugins) {
              while (++index < plugins.length) {
                add(plugins[index]);
              }
            } else {
              throw new Error("Expected a list of plugins, not `" + plugins + "`");
            }
          }
          function addPlugin(plugin, value2) {
            var entry = find(plugin);
            if (entry) {
              if (plain(entry[1]) && plain(value2)) {
                value2 = extend(true, entry[1], value2);
              }
              entry[1] = value2;
            } else {
              attachers.push(slice.call(arguments));
            }
          }
        }
        function find(plugin) {
          var index = -1;
          while (++index < attachers.length) {
            if (attachers[index][0] === plugin) {
              return attachers[index];
            }
          }
        }
        function parse(doc) {
          var file = vfile(doc);
          var Parser;
          freeze();
          Parser = processor.Parser;
          assertParser("parse", Parser);
          if (newable(Parser, "parse")) {
            return new Parser(String(file), file).parse();
          }
          return Parser(String(file), file);
        }
        function run(node, file, cb) {
          assertNode(node);
          freeze();
          if (!cb && typeof file === "function") {
            cb = file;
            file = null;
          }
          if (!cb) {
            return new Promise(executor);
          }
          executor(null, cb);
          function executor(resolve, reject) {
            transformers.run(node, vfile(file), done);
            function done(error, tree, file2) {
              tree = tree || node;
              if (error) {
                reject(error);
              } else if (resolve) {
                resolve(tree);
              } else {
                cb(null, tree, file2);
              }
            }
          }
        }
        function runSync(node, file) {
          var result;
          var complete;
          run(node, file, done);
          assertDone("runSync", "run", complete);
          return result;
          function done(error, tree) {
            complete = true;
            result = tree;
            bail(error);
          }
        }
        function stringify(node, doc) {
          var file = vfile(doc);
          var Compiler;
          freeze();
          Compiler = processor.Compiler;
          assertCompiler("stringify", Compiler);
          assertNode(node);
          if (newable(Compiler, "compile")) {
            return new Compiler(node, file).compile();
          }
          return Compiler(node, file);
        }
        function process2(doc, cb) {
          freeze();
          assertParser("process", processor.Parser);
          assertCompiler("process", processor.Compiler);
          if (!cb) {
            return new Promise(executor);
          }
          executor(null, cb);
          function executor(resolve, reject) {
            var file = vfile(doc);
            pipeline.run(processor, { file }, done);
            function done(error) {
              if (error) {
                reject(error);
              } else if (resolve) {
                resolve(file);
              } else {
                cb(null, file);
              }
            }
          }
        }
        function processSync(doc) {
          var file;
          var complete;
          freeze();
          assertParser("processSync", processor.Parser);
          assertCompiler("processSync", processor.Compiler);
          file = vfile(doc);
          process2(file, done);
          assertDone("processSync", "process", complete);
          return file;
          function done(error) {
            complete = true;
            bail(error);
          }
        }
      }
      function newable(value, name) {
        return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
      }
      function keys(value) {
        var key;
        for (key in value) {
          return true;
        }
        return false;
      }
      function assertParser(name, Parser) {
        if (typeof Parser !== "function") {
          throw new Error("Cannot `" + name + "` without `Parser`");
        }
      }
      function assertCompiler(name, Compiler) {
        if (typeof Compiler !== "function") {
          throw new Error("Cannot `" + name + "` without `Compiler`");
        }
      }
      function assertUnfrozen(name, frozen) {
        if (frozen) {
          throw new Error(
            "Cannot invoke `" + name + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
          );
        }
      }
      function assertNode(node) {
        if (!node || typeof node.type !== "string") {
          throw new Error("Expected node, got `" + node + "`");
        }
      }
      function assertDone(name, asyncName, complete) {
        if (!complete) {
          throw new Error(
            "`" + name + "` finished async. Use `" + asyncName + "` instead"
          );
        }
      }
    }
  });

  // node_modules/xtend/immutable.js
  var require_immutable = __commonJS({
    "node_modules/xtend/immutable.js"(exports, module) {
      init_globals();
      module.exports = extend;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function extend() {
        var target = {};
        for (var i = 0; i < arguments.length; i++) {
          var source2 = arguments[i];
          for (var key in source2) {
            if (hasOwnProperty.call(source2, key)) {
              target[key] = source2[key];
            }
          }
        }
        return target;
      }
    }
  });

  // node_modules/property-information/lib/util/schema.js
  var require_schema = __commonJS({
    "node_modules/property-information/lib/util/schema.js"(exports, module) {
      init_globals();
      module.exports = Schema;
      var proto = Schema.prototype;
      proto.space = null;
      proto.normal = {};
      proto.property = {};
      function Schema(property, normal, space) {
        this.property = property;
        this.normal = normal;
        if (space) {
          this.space = space;
        }
      }
    }
  });

  // node_modules/property-information/lib/util/merge.js
  var require_merge = __commonJS({
    "node_modules/property-information/lib/util/merge.js"(exports, module) {
      init_globals();
      var xtend = require_immutable();
      var Schema = require_schema();
      module.exports = merge;
      function merge(definitions) {
        var length = definitions.length;
        var property = [];
        var normal = [];
        var index = -1;
        var info;
        var space;
        while (++index < length) {
          info = definitions[index];
          property.push(info.property);
          normal.push(info.normal);
          space = info.space;
        }
        return new Schema(
          xtend.apply(null, property),
          xtend.apply(null, normal),
          space
        );
      }
    }
  });

  // node_modules/property-information/normalize.js
  var require_normalize = __commonJS({
    "node_modules/property-information/normalize.js"(exports, module) {
      init_globals();
      module.exports = normalize;
      function normalize(value) {
        return value.toLowerCase();
      }
    }
  });

  // node_modules/property-information/lib/util/info.js
  var require_info = __commonJS({
    "node_modules/property-information/lib/util/info.js"(exports, module) {
      init_globals();
      module.exports = Info;
      var proto = Info.prototype;
      proto.space = null;
      proto.attribute = null;
      proto.property = null;
      proto.boolean = false;
      proto.booleanish = false;
      proto.overloadedBoolean = false;
      proto.number = false;
      proto.commaSeparated = false;
      proto.spaceSeparated = false;
      proto.commaOrSpaceSeparated = false;
      proto.mustUseProperty = false;
      proto.defined = false;
      function Info(property, attribute) {
        this.property = property;
        this.attribute = attribute;
      }
    }
  });

  // node_modules/property-information/lib/util/types.js
  var require_types = __commonJS({
    "node_modules/property-information/lib/util/types.js"(exports) {
      init_globals();
      var powers = 0;
      exports.boolean = increment();
      exports.booleanish = increment();
      exports.overloadedBoolean = increment();
      exports.number = increment();
      exports.spaceSeparated = increment();
      exports.commaSeparated = increment();
      exports.commaOrSpaceSeparated = increment();
      function increment() {
        return Math.pow(2, ++powers);
      }
    }
  });

  // node_modules/property-information/lib/util/defined-info.js
  var require_defined_info = __commonJS({
    "node_modules/property-information/lib/util/defined-info.js"(exports, module) {
      init_globals();
      var Info = require_info();
      var types = require_types();
      module.exports = DefinedInfo;
      DefinedInfo.prototype = new Info();
      DefinedInfo.prototype.defined = true;
      var checks = [
        "boolean",
        "booleanish",
        "overloadedBoolean",
        "number",
        "commaSeparated",
        "spaceSeparated",
        "commaOrSpaceSeparated"
      ];
      var checksLength = checks.length;
      function DefinedInfo(property, attribute, mask, space) {
        var index = -1;
        var check;
        mark(this, "space", space);
        Info.call(this, property, attribute);
        while (++index < checksLength) {
          check = checks[index];
          mark(this, check, (mask & types[check]) === types[check]);
        }
      }
      function mark(values, key, value) {
        if (value) {
          values[key] = value;
        }
      }
    }
  });

  // node_modules/property-information/lib/util/create.js
  var require_create = __commonJS({
    "node_modules/property-information/lib/util/create.js"(exports, module) {
      init_globals();
      var normalize = require_normalize();
      var Schema = require_schema();
      var DefinedInfo = require_defined_info();
      module.exports = create;
      function create(definition) {
        var space = definition.space;
        var mustUseProperty = definition.mustUseProperty || [];
        var attributes = definition.attributes || {};
        var props = definition.properties;
        var transform = definition.transform;
        var property = {};
        var normal = {};
        var prop;
        var info;
        for (prop in props) {
          info = new DefinedInfo(
            prop,
            transform(attributes, prop),
            props[prop],
            space
          );
          if (mustUseProperty.indexOf(prop) !== -1) {
            info.mustUseProperty = true;
          }
          property[prop] = info;
          normal[normalize(prop)] = prop;
          normal[normalize(info.attribute)] = prop;
        }
        return new Schema(property, normal, space);
      }
    }
  });

  // node_modules/property-information/lib/xlink.js
  var require_xlink = __commonJS({
    "node_modules/property-information/lib/xlink.js"(exports, module) {
      init_globals();
      var create = require_create();
      module.exports = create({
        space: "xlink",
        transform: xlinkTransform,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null
        }
      });
      function xlinkTransform(_, prop) {
        return "xlink:" + prop.slice(5).toLowerCase();
      }
    }
  });

  // node_modules/property-information/lib/xml.js
  var require_xml = __commonJS({
    "node_modules/property-information/lib/xml.js"(exports, module) {
      init_globals();
      var create = require_create();
      module.exports = create({
        space: "xml",
        transform: xmlTransform,
        properties: {
          xmlLang: null,
          xmlBase: null,
          xmlSpace: null
        }
      });
      function xmlTransform(_, prop) {
        return "xml:" + prop.slice(3).toLowerCase();
      }
    }
  });

  // node_modules/property-information/lib/util/case-sensitive-transform.js
  var require_case_sensitive_transform = __commonJS({
    "node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
      init_globals();
      module.exports = caseSensitiveTransform;
      function caseSensitiveTransform(attributes, attribute) {
        return attribute in attributes ? attributes[attribute] : attribute;
      }
    }
  });

  // node_modules/property-information/lib/util/case-insensitive-transform.js
  var require_case_insensitive_transform = __commonJS({
    "node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
      init_globals();
      var caseSensitiveTransform = require_case_sensitive_transform();
      module.exports = caseInsensitiveTransform;
      function caseInsensitiveTransform(attributes, property) {
        return caseSensitiveTransform(attributes, property.toLowerCase());
      }
    }
  });

  // node_modules/property-information/lib/xmlns.js
  var require_xmlns = __commonJS({
    "node_modules/property-information/lib/xmlns.js"(exports, module) {
      init_globals();
      var create = require_create();
      var caseInsensitiveTransform = require_case_insensitive_transform();
      module.exports = create({
        space: "xmlns",
        attributes: {
          xmlnsxlink: "xmlns:xlink"
        },
        transform: caseInsensitiveTransform,
        properties: {
          xmlns: null,
          xmlnsXLink: null
        }
      });
    }
  });

  // node_modules/property-information/lib/aria.js
  var require_aria = __commonJS({
    "node_modules/property-information/lib/aria.js"(exports, module) {
      init_globals();
      var types = require_types();
      var create = require_create();
      var booleanish = types.booleanish;
      var number2 = types.number;
      var spaceSeparated = types.spaceSeparated;
      module.exports = create({
        transform: ariaTransform,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: booleanish,
          ariaAutoComplete: null,
          ariaBusy: booleanish,
          ariaChecked: booleanish,
          ariaColCount: number2,
          ariaColIndex: number2,
          ariaColSpan: number2,
          ariaControls: spaceSeparated,
          ariaCurrent: null,
          ariaDescribedBy: spaceSeparated,
          ariaDetails: null,
          ariaDisabled: booleanish,
          ariaDropEffect: spaceSeparated,
          ariaErrorMessage: null,
          ariaExpanded: booleanish,
          ariaFlowTo: spaceSeparated,
          ariaGrabbed: booleanish,
          ariaHasPopup: null,
          ariaHidden: booleanish,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: spaceSeparated,
          ariaLevel: number2,
          ariaLive: null,
          ariaModal: booleanish,
          ariaMultiLine: booleanish,
          ariaMultiSelectable: booleanish,
          ariaOrientation: null,
          ariaOwns: spaceSeparated,
          ariaPlaceholder: null,
          ariaPosInSet: number2,
          ariaPressed: booleanish,
          ariaReadOnly: booleanish,
          ariaRelevant: null,
          ariaRequired: booleanish,
          ariaRoleDescription: spaceSeparated,
          ariaRowCount: number2,
          ariaRowIndex: number2,
          ariaRowSpan: number2,
          ariaSelected: booleanish,
          ariaSetSize: number2,
          ariaSort: null,
          ariaValueMax: number2,
          ariaValueMin: number2,
          ariaValueNow: number2,
          ariaValueText: null,
          role: null
        }
      });
      function ariaTransform(_, prop) {
        return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
      }
    }
  });

  // node_modules/property-information/lib/svg.js
  var require_svg = __commonJS({
    "node_modules/property-information/lib/svg.js"(exports, module) {
      init_globals();
      var types = require_types();
      var create = require_create();
      var caseSensitiveTransform = require_case_sensitive_transform();
      var boolean = types.boolean;
      var number2 = types.number;
      var spaceSeparated = types.spaceSeparated;
      var commaSeparated = types.commaSeparated;
      var commaOrSpaceSeparated = types.commaOrSpaceSeparated;
      module.exports = create({
        space: "svg",
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin"
        },
        transform: caseSensitiveTransform,
        properties: {
          about: commaOrSpaceSeparated,
          accentHeight: number2,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: number2,
          amplitude: number2,
          arabicForm: null,
          ascent: number2,
          attributeName: null,
          attributeType: null,
          azimuth: number2,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: number2,
          by: null,
          calcMode: null,
          capHeight: number2,
          className: spaceSeparated,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: number2,
          diffuseConstant: number2,
          direction: null,
          display: null,
          dur: null,
          divisor: number2,
          dominantBaseline: null,
          download: boolean,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: number2,
          enableBackground: null,
          end: null,
          event: null,
          exponent: number2,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: number2,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: commaSeparated,
          g2: commaSeparated,
          glyphName: commaSeparated,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: number2,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: number2,
          horizOriginX: number2,
          horizOriginY: number2,
          id: null,
          ideographic: number2,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: number2,
          k: number2,
          k1: number2,
          k2: number2,
          k3: number2,
          k4: number2,
          kernelMatrix: commaOrSpaceSeparated,
          kernelUnitLength: null,
          keyPoints: null,
          keySplines: null,
          keyTimes: null,
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: number2,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: number2,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: number2,
          overlineThickness: number2,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: number2,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: spaceSeparated,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: number2,
          pointsAtY: number2,
          pointsAtZ: number2,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: commaOrSpaceSeparated,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: commaOrSpaceSeparated,
          rev: commaOrSpaceSeparated,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: commaOrSpaceSeparated,
          requiredFeatures: commaOrSpaceSeparated,
          requiredFonts: commaOrSpaceSeparated,
          requiredFormats: commaOrSpaceSeparated,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: number2,
          specularExponent: number2,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: number2,
          strikethroughThickness: number2,
          string: null,
          stroke: null,
          strokeDashArray: commaOrSpaceSeparated,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: number2,
          strokeOpacity: number2,
          strokeWidth: null,
          style: null,
          surfaceScale: number2,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: commaOrSpaceSeparated,
          tabIndex: number2,
          tableValues: null,
          target: null,
          targetX: number2,
          targetY: number2,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: commaOrSpaceSeparated,
          to: null,
          transform: null,
          u1: null,
          u2: null,
          underlinePosition: number2,
          underlineThickness: number2,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: number2,
          values: null,
          vAlphabetic: number2,
          vMathematical: number2,
          vectorEffect: null,
          vHanging: number2,
          vIdeographic: number2,
          version: null,
          vertAdvY: number2,
          vertOriginX: number2,
          vertOriginY: number2,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: number2,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null
        }
      });
    }
  });

  // node_modules/property-information/svg.js
  var require_svg2 = __commonJS({
    "node_modules/property-information/svg.js"(exports, module) {
      init_globals();
      var merge = require_merge();
      var xlink = require_xlink();
      var xml = require_xml();
      var xmlns = require_xmlns();
      var aria = require_aria();
      var svg = require_svg();
      module.exports = merge([xml, xlink, xmlns, aria, svg]);
    }
  });

  // node_modules/hastscript/svg-case-sensitive-tag-names.json
  var require_svg_case_sensitive_tag_names = __commonJS({
    "node_modules/hastscript/svg-case-sensitive-tag-names.json"(exports, module) {
      module.exports = [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "solidColor",
        "textArea",
        "textPath"
      ];
    }
  });

  // node_modules/property-information/find.js
  var require_find = __commonJS({
    "node_modules/property-information/find.js"(exports, module) {
      init_globals();
      var normalize = require_normalize();
      var DefinedInfo = require_defined_info();
      var Info = require_info();
      var data = "data";
      module.exports = find;
      var valid = /^data[-\w.:]+$/i;
      var dash = /-[a-z]/g;
      var cap = /[A-Z]/g;
      function find(schema2, value) {
        var normal = normalize(value);
        var prop = value;
        var Type = Info;
        if (normal in schema2.normal) {
          return schema2.property[schema2.normal[normal]];
        }
        if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
          if (value.charAt(4) === "-") {
            prop = datasetToProperty(value);
          } else {
            value = datasetToAttribute(value);
          }
          Type = DefinedInfo;
        }
        return new Type(prop, value);
      }
      function datasetToProperty(attribute) {
        var value = attribute.slice(5).replace(dash, camelcase);
        return data + value.charAt(0).toUpperCase() + value.slice(1);
      }
      function datasetToAttribute(property) {
        var value = property.slice(4);
        if (dash.test(value)) {
          return property;
        }
        value = value.replace(cap, kebab);
        if (value.charAt(0) !== "-") {
          value = "-" + value;
        }
        return data + value;
      }
      function kebab($0) {
        return "-" + $0.toLowerCase();
      }
      function camelcase($0) {
        return $0.charAt(1).toUpperCase();
      }
    }
  });

  // node_modules/hast-util-parse-selector/index.js
  var require_hast_util_parse_selector = __commonJS({
    "node_modules/hast-util-parse-selector/index.js"(exports, module) {
      init_globals();
      module.exports = parse;
      var search = /[#.]/g;
      function parse(selector, defaultTagName) {
        var value = selector || "";
        var name = defaultTagName || "div";
        var props = {};
        var start = 0;
        var subvalue;
        var previous;
        var match;
        while (start < value.length) {
          search.lastIndex = start;
          match = search.exec(value);
          subvalue = value.slice(start, match ? match.index : value.length);
          if (subvalue) {
            if (!previous) {
              name = subvalue;
            } else if (previous === "#") {
              props.id = subvalue;
            } else if (props.className) {
              props.className.push(subvalue);
            } else {
              props.className = [subvalue];
            }
            start += subvalue.length;
          }
          if (match) {
            previous = match[0];
            start++;
          }
        }
        return { type: "element", tagName: name, properties: props, children: [] };
      }
    }
  });

  // node_modules/space-separated-tokens/index.js
  var require_space_separated_tokens = __commonJS({
    "node_modules/space-separated-tokens/index.js"(exports) {
      init_globals();
      exports.parse = parse;
      exports.stringify = stringify;
      var empty = "";
      var space = " ";
      var whiteSpace = /[ \t\n\r\f]+/g;
      function parse(value) {
        var input = String(value || empty).trim();
        return input === empty ? [] : input.split(whiteSpace);
      }
      function stringify(values) {
        return values.join(space).trim();
      }
    }
  });

  // node_modules/comma-separated-tokens/index.js
  var require_comma_separated_tokens = __commonJS({
    "node_modules/comma-separated-tokens/index.js"(exports) {
      init_globals();
      exports.parse = parse;
      exports.stringify = stringify;
      var comma = ",";
      var space = " ";
      var empty = "";
      function parse(value) {
        var values = [];
        var input = String(value || empty);
        var index = input.indexOf(comma);
        var lastIndex = 0;
        var end = false;
        var val;
        while (!end) {
          if (index === -1) {
            index = input.length;
            end = true;
          }
          val = input.slice(lastIndex, index).trim();
          if (val || !end) {
            values.push(val);
          }
          lastIndex = index + 1;
          index = input.indexOf(comma, lastIndex);
        }
        return values;
      }
      function stringify(values, options) {
        var settings = options || {};
        var left = settings.padLeft === false ? empty : space;
        var right = settings.padRight ? space : empty;
        if (values[values.length - 1] === empty) {
          values = values.concat(empty);
        }
        return values.join(right + comma + left).trim();
      }
    }
  });

  // node_modules/hastscript/factory.js
  var require_factory = __commonJS({
    "node_modules/hastscript/factory.js"(exports, module) {
      init_globals();
      var find = require_find();
      var normalize = require_normalize();
      var parseSelector = require_hast_util_parse_selector();
      var spaces = require_space_separated_tokens().parse;
      var commas = require_comma_separated_tokens().parse;
      module.exports = factory;
      var own = {}.hasOwnProperty;
      function factory(schema2, defaultTagName, caseSensitive) {
        var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
        return h;
        function h(selector, properties) {
          var node = parseSelector(selector, defaultTagName);
          var children = Array.prototype.slice.call(arguments, 2);
          var name = node.tagName.toLowerCase();
          var property;
          node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
          if (properties && isChildren(properties, node)) {
            children.unshift(properties);
            properties = null;
          }
          if (properties) {
            for (property in properties) {
              addProperty(node.properties, property, properties[property]);
            }
          }
          addChild(node.children, children);
          if (node.tagName === "template") {
            node.content = { type: "root", children: node.children };
            node.children = [];
          }
          return node;
        }
        function addProperty(properties, key, value) {
          var info;
          var property;
          var result;
          if (value === null || value === void 0 || value !== value) {
            return;
          }
          info = find(schema2, key);
          property = info.property;
          result = value;
          if (typeof result === "string") {
            if (info.spaceSeparated) {
              result = spaces(result);
            } else if (info.commaSeparated) {
              result = commas(result);
            } else if (info.commaOrSpaceSeparated) {
              result = spaces(commas(result).join(" "));
            }
          }
          if (property === "style" && typeof value !== "string") {
            result = style(result);
          }
          if (property === "className" && properties.className) {
            result = properties.className.concat(result);
          }
          properties[property] = parsePrimitives(info, property, result);
        }
      }
      function isChildren(value, node) {
        return typeof value === "string" || "length" in value || isNode(node.tagName, value);
      }
      function isNode(tagName, value) {
        var type2 = value.type;
        if (tagName === "input" || !type2 || typeof type2 !== "string") {
          return false;
        }
        if (typeof value.children === "object" && "length" in value.children) {
          return true;
        }
        type2 = type2.toLowerCase();
        if (tagName === "button") {
          return type2 !== "menu" && type2 !== "submit" && type2 !== "reset" && type2 !== "button";
        }
        return "value" in value;
      }
      function addChild(nodes, value) {
        var index;
        var length;
        if (typeof value === "string" || typeof value === "number") {
          nodes.push({ type: "text", value: String(value) });
          return;
        }
        if (typeof value === "object" && "length" in value) {
          index = -1;
          length = value.length;
          while (++index < length) {
            addChild(nodes, value[index]);
          }
          return;
        }
        if (typeof value !== "object" || !("type" in value)) {
          throw new Error("Expected node, nodes, or string, got `" + value + "`");
        }
        nodes.push(value);
      }
      function parsePrimitives(info, name, value) {
        var index;
        var length;
        var result;
        if (typeof value !== "object" || !("length" in value)) {
          return parsePrimitive(info, name, value);
        }
        length = value.length;
        index = -1;
        result = [];
        while (++index < length) {
          result[index] = parsePrimitive(info, name, value[index]);
        }
        return result;
      }
      function parsePrimitive(info, name, value) {
        var result = value;
        if (info.number || info.positiveNumber) {
          if (!isNaN(result) && result !== "") {
            result = Number(result);
          }
        } else if (info.boolean || info.overloadedBoolean) {
          if (typeof result === "string" && (result === "" || normalize(value) === normalize(name))) {
            result = true;
          }
        }
        return result;
      }
      function style(value) {
        var result = [];
        var key;
        for (key in value) {
          result.push([key, value[key]].join(": "));
        }
        return result.join("; ");
      }
      function createAdjustMap(values) {
        var length = values.length;
        var index = -1;
        var result = {};
        var value;
        while (++index < length) {
          value = values[index];
          result[value.toLowerCase()] = value;
        }
        return result;
      }
    }
  });

  // node_modules/hastscript/svg.js
  var require_svg3 = __commonJS({
    "node_modules/hastscript/svg.js"(exports, module) {
      init_globals();
      var schema2 = require_svg2();
      var caseSensitive = require_svg_case_sensitive_tag_names();
      var factory = require_factory();
      var svg = factory(schema2, "g", caseSensitive);
      svg.displayName = "svg";
      module.exports = svg;
    }
  });

  // node_modules/property-information/lib/html.js
  var require_html = __commonJS({
    "node_modules/property-information/lib/html.js"(exports, module) {
      init_globals();
      var types = require_types();
      var create = require_create();
      var caseInsensitiveTransform = require_case_insensitive_transform();
      var boolean = types.boolean;
      var overloadedBoolean = types.overloadedBoolean;
      var booleanish = types.booleanish;
      var number2 = types.number;
      var spaceSeparated = types.spaceSeparated;
      var commaSeparated = types.commaSeparated;
      module.exports = create({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv"
        },
        transform: caseInsensitiveTransform,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: commaSeparated,
          acceptCharset: spaceSeparated,
          accessKey: spaceSeparated,
          action: null,
          allow: null,
          allowFullScreen: boolean,
          allowPaymentRequest: boolean,
          allowUserMedia: boolean,
          alt: null,
          as: null,
          async: boolean,
          autoCapitalize: null,
          autoComplete: spaceSeparated,
          autoFocus: boolean,
          autoPlay: boolean,
          capture: boolean,
          charSet: null,
          checked: boolean,
          cite: null,
          className: spaceSeparated,
          cols: number2,
          colSpan: null,
          content: null,
          contentEditable: booleanish,
          controls: boolean,
          controlsList: spaceSeparated,
          coords: number2 | commaSeparated,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: boolean,
          defer: boolean,
          dir: null,
          dirName: null,
          disabled: boolean,
          download: overloadedBoolean,
          draggable: booleanish,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: boolean,
          formTarget: null,
          headers: spaceSeparated,
          height: number2,
          hidden: boolean,
          high: number2,
          href: null,
          hrefLang: null,
          htmlFor: spaceSeparated,
          httpEquiv: spaceSeparated,
          id: null,
          imageSizes: null,
          imageSrcSet: commaSeparated,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: boolean,
          itemId: null,
          itemProp: spaceSeparated,
          itemRef: spaceSeparated,
          itemScope: boolean,
          itemType: spaceSeparated,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: boolean,
          low: number2,
          manifest: null,
          max: null,
          maxLength: number2,
          media: null,
          method: null,
          min: null,
          minLength: number2,
          multiple: boolean,
          muted: boolean,
          name: null,
          nonce: null,
          noModule: boolean,
          noValidate: boolean,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: boolean,
          optimum: number2,
          pattern: null,
          ping: spaceSeparated,
          placeholder: null,
          playsInline: boolean,
          poster: null,
          preload: null,
          readOnly: boolean,
          referrerPolicy: null,
          rel: spaceSeparated,
          required: boolean,
          reversed: boolean,
          rows: number2,
          rowSpan: number2,
          sandbox: spaceSeparated,
          scope: null,
          scoped: boolean,
          seamless: boolean,
          selected: boolean,
          shape: null,
          size: number2,
          sizes: null,
          slot: null,
          span: number2,
          spellCheck: booleanish,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: commaSeparated,
          start: number2,
          step: null,
          style: null,
          tabIndex: number2,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: boolean,
          useMap: null,
          value: booleanish,
          width: number2,
          wrap: null,
          align: null,
          aLink: null,
          archive: spaceSeparated,
          axis: null,
          background: null,
          bgColor: null,
          border: number2,
          borderColor: null,
          bottomMargin: number2,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: boolean,
          declare: boolean,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: number2,
          leftMargin: number2,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: number2,
          marginWidth: number2,
          noResize: boolean,
          noHref: boolean,
          noShade: boolean,
          noWrap: boolean,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: number2,
          rules: null,
          scheme: null,
          scrolling: booleanish,
          standby: null,
          summary: null,
          text: null,
          topMargin: number2,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: number2,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: boolean,
          disableRemotePlayback: boolean,
          prefix: null,
          property: null,
          results: number2,
          security: null,
          unselectable: null
        }
      });
    }
  });

  // node_modules/property-information/html.js
  var require_html2 = __commonJS({
    "node_modules/property-information/html.js"(exports, module) {
      init_globals();
      var merge = require_merge();
      var xlink = require_xlink();
      var xml = require_xml();
      var xmlns = require_xmlns();
      var aria = require_aria();
      var html2 = require_html();
      module.exports = merge([xml, xlink, xmlns, aria, html2]);
    }
  });

  // node_modules/hastscript/html.js
  var require_html3 = __commonJS({
    "node_modules/hastscript/html.js"(exports, module) {
      init_globals();
      var schema2 = require_html2();
      var factory = require_factory();
      var html2 = factory(schema2, "div");
      html2.displayName = "html";
      module.exports = html2;
    }
  });

  // node_modules/hastscript/index.js
  var require_hastscript = __commonJS({
    "node_modules/hastscript/index.js"(exports, module) {
      init_globals();
      module.exports = require_html3();
    }
  });

  // node_modules/vfile-location/index.js
  var require_vfile_location = __commonJS({
    "node_modules/vfile-location/index.js"(exports, module) {
      init_globals();
      module.exports = factory;
      function factory(file) {
        var value = String(file);
        var indices = [];
        var search = /\r?\n|\r/g;
        while (search.exec(value)) {
          indices.push(search.lastIndex);
        }
        indices.push(value.length + 1);
        return {
          toPoint: offsetToPoint,
          toPosition: offsetToPoint,
          toOffset: pointToOffset
        };
        function offsetToPoint(offset) {
          var index = -1;
          if (offset > -1 && offset < indices[indices.length - 1]) {
            while (++index < indices.length) {
              if (indices[index] > offset) {
                return {
                  line: index + 1,
                  column: offset - (indices[index - 1] || 0) + 1,
                  offset
                };
              }
            }
          }
          return {};
        }
        function pointToOffset(point) {
          var line = point && point.line;
          var column = point && point.column;
          var offset;
          if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
            offset = (indices[line - 2] || 0) + column - 1 || 0;
          }
          return offset > -1 && offset < indices[indices.length - 1] ? offset : -1;
        }
      }
    }
  });

  // node_modules/web-namespaces/index.json
  var require_web_namespaces = __commonJS({
    "node_modules/web-namespaces/index.json"(exports, module) {
      module.exports = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
    }
  });

  // node_modules/hast-util-from-parse5/index.js
  var require_hast_util_from_parse5 = __commonJS({
    "node_modules/hast-util-from-parse5/index.js"(exports, module) {
      init_globals();
      var s = require_svg3();
      var h = require_hastscript();
      var find = require_find();
      var html2 = require_html2();
      var svg = require_svg2();
      var vfileLocation = require_vfile_location();
      var ns = require_web_namespaces();
      module.exports = wrapper;
      var own = {}.hasOwnProperty;
      var map = {
        "#document": root,
        "#document-fragment": root,
        "#text": text,
        "#comment": comment,
        "#documentType": doctype
      };
      function wrapper(ast, options) {
        var settings = options || {};
        var file;
        if (settings.messages) {
          file = settings;
          settings = {};
        } else {
          file = settings.file;
        }
        return transform(ast, {
          schema: settings.space === "svg" ? svg : html2,
          file,
          verbose: settings.verbose
        });
      }
      function transform(ast, config) {
        var schema2 = config.schema;
        var fn = own.call(map, ast.nodeName) ? map[ast.nodeName] : element;
        var children;
        var result;
        var position2;
        if (fn === element) {
          config.schema = ast.namespaceURI === ns.svg ? svg : html2;
        }
        if (ast.childNodes) {
          children = nodes(ast.childNodes, config);
        }
        result = fn(ast, children, config);
        if (ast.sourceCodeLocation && config.file) {
          position2 = location(result, ast.sourceCodeLocation, config);
          if (position2) {
            config.location = true;
            result.position = position2;
          }
        }
        config.schema = schema2;
        return result;
      }
      function nodes(children, config) {
        var index = -1;
        var result = [];
        while (++index < children.length) {
          result[index] = transform(children[index], config);
        }
        return result;
      }
      function root(ast, children, config) {
        var result = {
          type: "root",
          children,
          data: { quirksMode: ast.mode === "quirks" || ast.mode === "limited-quirks" }
        };
        var doc;
        var location2;
        if (config.file && config.location) {
          doc = String(config.file);
          location2 = vfileLocation(doc);
          result.position = {
            start: location2.toPoint(0),
            end: location2.toPoint(doc.length)
          };
        }
        return result;
      }
      function doctype(ast) {
        return {
          type: "doctype",
          name: ast.name || "",
          public: ast.publicId || null,
          system: ast.systemId || null
        };
      }
      function text(ast) {
        return { type: "text", value: ast.value };
      }
      function comment(ast) {
        return { type: "comment", value: ast.data };
      }
      function element(ast, children, config) {
        var fn = config.schema.space === "svg" ? s : h;
        var props = {};
        var index = -1;
        var result;
        var attribute;
        var pos;
        var start;
        var end;
        while (++index < ast.attrs.length) {
          attribute = ast.attrs[index];
          props[(attribute.prefix ? attribute.prefix + ":" : "") + attribute.name] = attribute.value;
        }
        result = fn(ast.tagName, props, children);
        if (result.tagName === "template" && "content" in ast) {
          pos = ast.sourceCodeLocation;
          start = pos && pos.startTag && position(pos.startTag).end;
          end = pos && pos.endTag && position(pos.endTag).start;
          result.content = transform(ast.content, config);
          if ((start || end) && config.file) {
            result.content.position = { start, end };
          }
        }
        return result;
      }
      function location(node, location2, config) {
        var result = position(location2);
        var tail;
        var key;
        var props;
        if (node.type === "element") {
          tail = node.children[node.children.length - 1];
          if (!location2.endTag && tail && tail.position && tail.position.end) {
            result.end = Object.assign({}, tail.position.end);
          }
          if (config.verbose) {
            props = {};
            for (key in location2.attrs) {
              props[find(config.schema, key).property] = position(location2.attrs[key]);
            }
            node.data = {
              position: {
                opening: position(location2.startTag),
                closing: location2.endTag ? position(location2.endTag) : null,
                properties: props
              }
            };
          }
        }
        return result;
      }
      function position(loc) {
        var start = point({
          line: loc.startLine,
          column: loc.startCol,
          offset: loc.startOffset
        });
        var end = point({
          line: loc.endLine,
          column: loc.endCol,
          offset: loc.endOffset
        });
        return start || end ? { start, end } : null;
      }
      function point(point2) {
        return point2.line && point2.column ? point2 : null;
      }
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/common/unicode.js
  var require_unicode = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/common/unicode.js"(exports) {
      init_globals();
      var UNDEFINED_CODE_POINTS = [
        65534,
        65535,
        131070,
        131071,
        196606,
        196607,
        262142,
        262143,
        327678,
        327679,
        393214,
        393215,
        458750,
        458751,
        524286,
        524287,
        589822,
        589823,
        655358,
        655359,
        720894,
        720895,
        786430,
        786431,
        851966,
        851967,
        917502,
        917503,
        983038,
        983039,
        1048574,
        1048575,
        1114110,
        1114111
      ];
      exports.REPLACEMENT_CHARACTER = "\uFFFD";
      exports.CODE_POINTS = {
        EOF: -1,
        NULL: 0,
        TABULATION: 9,
        CARRIAGE_RETURN: 13,
        LINE_FEED: 10,
        FORM_FEED: 12,
        SPACE: 32,
        EXCLAMATION_MARK: 33,
        QUOTATION_MARK: 34,
        NUMBER_SIGN: 35,
        AMPERSAND: 38,
        APOSTROPHE: 39,
        HYPHEN_MINUS: 45,
        SOLIDUS: 47,
        DIGIT_0: 48,
        DIGIT_9: 57,
        SEMICOLON: 59,
        LESS_THAN_SIGN: 60,
        EQUALS_SIGN: 61,
        GREATER_THAN_SIGN: 62,
        QUESTION_MARK: 63,
        LATIN_CAPITAL_A: 65,
        LATIN_CAPITAL_F: 70,
        LATIN_CAPITAL_X: 88,
        LATIN_CAPITAL_Z: 90,
        RIGHT_SQUARE_BRACKET: 93,
        GRAVE_ACCENT: 96,
        LATIN_SMALL_A: 97,
        LATIN_SMALL_F: 102,
        LATIN_SMALL_X: 120,
        LATIN_SMALL_Z: 122,
        REPLACEMENT_CHARACTER: 65533
      };
      exports.CODE_POINT_SEQUENCES = {
        DASH_DASH_STRING: [45, 45],
        DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
        CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
        SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
        PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
        SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
      };
      exports.isSurrogate = function(cp) {
        return cp >= 55296 && cp <= 57343;
      };
      exports.isSurrogatePair = function(cp) {
        return cp >= 56320 && cp <= 57343;
      };
      exports.getSurrogatePairCodePoint = function(cp1, cp2) {
        return (cp1 - 55296) * 1024 + 9216 + cp2;
      };
      exports.isControlCodePoint = function(cp) {
        return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
      };
      exports.isUndefinedCodePoint = function(cp) {
        return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/common/error-codes.js
  var require_error_codes = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/common/error-codes.js"(exports, module) {
      init_globals();
      module.exports = {
        controlCharacterInInputStream: "control-character-in-input-stream",
        noncharacterInInputStream: "noncharacter-in-input-stream",
        surrogateInInputStream: "surrogate-in-input-stream",
        nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
        endTagWithAttributes: "end-tag-with-attributes",
        endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
        unexpectedSolidusInTag: "unexpected-solidus-in-tag",
        unexpectedNullCharacter: "unexpected-null-character",
        unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
        invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
        unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
        missingEndTagName: "missing-end-tag-name",
        unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
        unknownNamedCharacterReference: "unknown-named-character-reference",
        missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
        unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
        unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
        eofBeforeTagName: "eof-before-tag-name",
        eofInTag: "eof-in-tag",
        missingAttributeValue: "missing-attribute-value",
        missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
        missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
        missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
        missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
        missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
        missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
        missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
        missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
        abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
        abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
        cdataInHtmlContent: "cdata-in-html-content",
        incorrectlyOpenedComment: "incorrectly-opened-comment",
        eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
        eofInDoctype: "eof-in-doctype",
        nestedComment: "nested-comment",
        abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
        eofInComment: "eof-in-comment",
        incorrectlyClosedComment: "incorrectly-closed-comment",
        eofInCdata: "eof-in-cdata",
        absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
        nullCharacterReference: "null-character-reference",
        surrogateCharacterReference: "surrogate-character-reference",
        characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
        controlCharacterReference: "control-character-reference",
        noncharacterCharacterReference: "noncharacter-character-reference",
        missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
        missingDoctypeName: "missing-doctype-name",
        invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
        duplicateAttribute: "duplicate-attribute",
        nonConformingDoctype: "non-conforming-doctype",
        missingDoctype: "missing-doctype",
        misplacedDoctype: "misplaced-doctype",
        endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
        closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
        disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
        openElementsLeftAfterEof: "open-elements-left-after-eof",
        abandonedHeadElementChild: "abandoned-head-element-child",
        misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
        nestedNoscriptInHead: "nested-noscript-in-head",
        eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/preprocessor.js
  var require_preprocessor = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/preprocessor.js"(exports, module) {
      init_globals();
      var unicode = require_unicode();
      var ERR = require_error_codes();
      var $ = unicode.CODE_POINTS;
      var DEFAULT_BUFFER_WATERLINE = 1 << 16;
      var Preprocessor = class {
        constructor() {
          this.html = null;
          this.pos = -1;
          this.lastGapPos = -1;
          this.lastCharPos = -1;
          this.gapStack = [];
          this.skipNextNewLine = false;
          this.lastChunkWritten = false;
          this.endOfChunkHit = false;
          this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        }
        _err() {
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos);
          this.lastGapPos = this.pos;
        }
        _processSurrogate(cp) {
          if (this.pos !== this.lastCharPos) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if (unicode.isSurrogatePair(nextCp)) {
              this.pos++;
              this._addGap();
              return unicode.getSurrogatePairCodePoint(cp, nextCp);
            }
          } else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return $.EOF;
          }
          this._err(ERR.surrogateInInputStream);
          return cp;
        }
        dropParsedChunk() {
          if (this.pos > this.bufferWaterline) {
            this.lastCharPos -= this.pos;
            this.html = this.html.substring(this.pos);
            this.pos = 0;
            this.lastGapPos = -1;
            this.gapStack = [];
          }
        }
        write(chunk, isLastChunk) {
          if (this.html) {
            this.html += chunk;
          } else {
            this.html = chunk;
          }
          this.lastCharPos = this.html.length - 1;
          this.endOfChunkHit = false;
          this.lastChunkWritten = isLastChunk;
        }
        insertHtmlAtCurrentPos(chunk) {
          this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
          this.lastCharPos = this.html.length - 1;
          this.endOfChunkHit = false;
        }
        advance() {
          this.pos++;
          if (this.pos > this.lastCharPos) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return $.EOF;
          }
          let cp = this.html.charCodeAt(this.pos);
          if (this.skipNextNewLine && cp === $.LINE_FEED) {
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
          if (cp === $.CARRIAGE_RETURN) {
            this.skipNextNewLine = true;
            return $.LINE_FEED;
          }
          this.skipNextNewLine = false;
          if (unicode.isSurrogate(cp)) {
            cp = this._processSurrogate(cp);
          }
          const isCommonValidRange = cp > 31 && cp < 127 || cp === $.LINE_FEED || cp === $.CARRIAGE_RETURN || cp > 159 && cp < 64976;
          if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
          }
          return cp;
        }
        _checkForProblematicCharacters(cp) {
          if (unicode.isControlCodePoint(cp)) {
            this._err(ERR.controlCharacterInInputStream);
          } else if (unicode.isUndefinedCodePoint(cp)) {
            this._err(ERR.noncharacterInInputStream);
          }
        }
        retreat() {
          if (this.pos === this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
          }
          this.pos--;
        }
      };
      module.exports = Preprocessor;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/named-entity-data.js
  var require_named_entity_data = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/named-entity-data.js"(exports, module) {
      init_globals();
      module.exports = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/index.js
  var require_tokenizer = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/index.js"(exports, module) {
      init_globals();
      var Preprocessor = require_preprocessor();
      var unicode = require_unicode();
      var neTree = require_named_entity_data();
      var ERR = require_error_codes();
      var $ = unicode.CODE_POINTS;
      var $$ = unicode.CODE_POINT_SEQUENCES;
      var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
      };
      var HAS_DATA_FLAG = 1 << 0;
      var DATA_DUPLET_FLAG = 1 << 1;
      var HAS_BRANCHES_FLAG = 1 << 2;
      var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
      var DATA_STATE = "DATA_STATE";
      var RCDATA_STATE = "RCDATA_STATE";
      var RAWTEXT_STATE = "RAWTEXT_STATE";
      var SCRIPT_DATA_STATE = "SCRIPT_DATA_STATE";
      var PLAINTEXT_STATE = "PLAINTEXT_STATE";
      var TAG_OPEN_STATE = "TAG_OPEN_STATE";
      var END_TAG_OPEN_STATE = "END_TAG_OPEN_STATE";
      var TAG_NAME_STATE = "TAG_NAME_STATE";
      var RCDATA_LESS_THAN_SIGN_STATE = "RCDATA_LESS_THAN_SIGN_STATE";
      var RCDATA_END_TAG_OPEN_STATE = "RCDATA_END_TAG_OPEN_STATE";
      var RCDATA_END_TAG_NAME_STATE = "RCDATA_END_TAG_NAME_STATE";
      var RAWTEXT_LESS_THAN_SIGN_STATE = "RAWTEXT_LESS_THAN_SIGN_STATE";
      var RAWTEXT_END_TAG_OPEN_STATE = "RAWTEXT_END_TAG_OPEN_STATE";
      var RAWTEXT_END_TAG_NAME_STATE = "RAWTEXT_END_TAG_NAME_STATE";
      var SCRIPT_DATA_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_END_TAG_OPEN_STATE = "SCRIPT_DATA_END_TAG_OPEN_STATE";
      var SCRIPT_DATA_END_TAG_NAME_STATE = "SCRIPT_DATA_END_TAG_NAME_STATE";
      var SCRIPT_DATA_ESCAPE_START_STATE = "SCRIPT_DATA_ESCAPE_START_STATE";
      var SCRIPT_DATA_ESCAPE_START_DASH_STATE = "SCRIPT_DATA_ESCAPE_START_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_STATE = "SCRIPT_DATA_ESCAPED_STATE";
      var SCRIPT_DATA_ESCAPED_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";
      var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE";
      var BEFORE_ATTRIBUTE_NAME_STATE = "BEFORE_ATTRIBUTE_NAME_STATE";
      var ATTRIBUTE_NAME_STATE = "ATTRIBUTE_NAME_STATE";
      var AFTER_ATTRIBUTE_NAME_STATE = "AFTER_ATTRIBUTE_NAME_STATE";
      var BEFORE_ATTRIBUTE_VALUE_STATE = "BEFORE_ATTRIBUTE_VALUE_STATE";
      var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";
      var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";
      var ATTRIBUTE_VALUE_UNQUOTED_STATE = "ATTRIBUTE_VALUE_UNQUOTED_STATE";
      var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
      var SELF_CLOSING_START_TAG_STATE = "SELF_CLOSING_START_TAG_STATE";
      var BOGUS_COMMENT_STATE = "BOGUS_COMMENT_STATE";
      var MARKUP_DECLARATION_OPEN_STATE = "MARKUP_DECLARATION_OPEN_STATE";
      var COMMENT_START_STATE = "COMMENT_START_STATE";
      var COMMENT_START_DASH_STATE = "COMMENT_START_DASH_STATE";
      var COMMENT_STATE = "COMMENT_STATE";
      var COMMENT_LESS_THAN_SIGN_STATE = "COMMENT_LESS_THAN_SIGN_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_STATE = "COMMENT_LESS_THAN_SIGN_BANG_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";
      var COMMENT_END_DASH_STATE = "COMMENT_END_DASH_STATE";
      var COMMENT_END_STATE = "COMMENT_END_STATE";
      var COMMENT_END_BANG_STATE = "COMMENT_END_BANG_STATE";
      var DOCTYPE_STATE = "DOCTYPE_STATE";
      var BEFORE_DOCTYPE_NAME_STATE = "BEFORE_DOCTYPE_NAME_STATE";
      var DOCTYPE_NAME_STATE = "DOCTYPE_NAME_STATE";
      var AFTER_DOCTYPE_NAME_STATE = "AFTER_DOCTYPE_NAME_STATE";
      var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";
      var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
      var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
      var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";
      var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";
      var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      var BOGUS_DOCTYPE_STATE = "BOGUS_DOCTYPE_STATE";
      var CDATA_SECTION_STATE = "CDATA_SECTION_STATE";
      var CDATA_SECTION_BRACKET_STATE = "CDATA_SECTION_BRACKET_STATE";
      var CDATA_SECTION_END_STATE = "CDATA_SECTION_END_STATE";
      var CHARACTER_REFERENCE_STATE = "CHARACTER_REFERENCE_STATE";
      var NAMED_CHARACTER_REFERENCE_STATE = "NAMED_CHARACTER_REFERENCE_STATE";
      var AMBIGUOUS_AMPERSAND_STATE = "AMBIGUOS_AMPERSAND_STATE";
      var NUMERIC_CHARACTER_REFERENCE_STATE = "NUMERIC_CHARACTER_REFERENCE_STATE";
      var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
      var DECIMAL_CHARACTER_REFERENCE_START_STATE = "DECIMAL_CHARACTER_REFERENCE_START_STATE";
      var HEXADEMICAL_CHARACTER_REFERENCE_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_STATE";
      var DECIMAL_CHARACTER_REFERENCE_STATE = "DECIMAL_CHARACTER_REFERENCE_STATE";
      var NUMERIC_CHARACTER_REFERENCE_END_STATE = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
      function isWhitespace(cp) {
        return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
      }
      function isAsciiDigit(cp) {
        return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
      }
      function isAsciiUpper(cp) {
        return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
      }
      function isAsciiLower(cp) {
        return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
      }
      function isAsciiLetter(cp) {
        return isAsciiLower(cp) || isAsciiUpper(cp);
      }
      function isAsciiAlphaNumeric(cp) {
        return isAsciiLetter(cp) || isAsciiDigit(cp);
      }
      function isAsciiUpperHexDigit(cp) {
        return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F;
      }
      function isAsciiLowerHexDigit(cp) {
        return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F;
      }
      function isAsciiHexDigit(cp) {
        return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
      }
      function toAsciiLowerCodePoint(cp) {
        return cp + 32;
      }
      function toChar(cp) {
        if (cp <= 65535) {
          return String.fromCharCode(cp);
        }
        cp -= 65536;
        return String.fromCharCode(cp >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | cp & 1023);
      }
      function toAsciiLowerChar(cp) {
        return String.fromCharCode(toAsciiLowerCodePoint(cp));
      }
      function findNamedEntityTreeBranch(nodeIx, cp) {
        const branchCount = neTree[++nodeIx];
        let lo = ++nodeIx;
        let hi = lo + branchCount - 1;
        while (lo <= hi) {
          const mid = lo + hi >>> 1;
          const midCp = neTree[mid];
          if (midCp < cp) {
            lo = mid + 1;
          } else if (midCp > cp) {
            hi = mid - 1;
          } else {
            return neTree[mid + branchCount];
          }
        }
        return -1;
      }
      var Tokenizer = class {
        constructor() {
          this.preprocessor = new Preprocessor();
          this.tokenQueue = [];
          this.allowCDATA = false;
          this.state = DATA_STATE;
          this.returnState = "";
          this.charRefCode = -1;
          this.tempBuff = [];
          this.lastStartTagName = "";
          this.consumedAfterSnapshot = -1;
          this.active = false;
          this.currentCharacterToken = null;
          this.currentToken = null;
          this.currentAttr = null;
        }
        _err() {
        }
        _errOnNextCodePoint(err) {
          this._consume();
          this._err(err);
          this._unconsume();
        }
        getNextToken() {
          while (!this.tokenQueue.length && this.active) {
            this.consumedAfterSnapshot = 0;
            const cp = this._consume();
            if (!this._ensureHibernation()) {
              this[this.state](cp);
            }
          }
          return this.tokenQueue.shift();
        }
        write(chunk, isLastChunk) {
          this.active = true;
          this.preprocessor.write(chunk, isLastChunk);
        }
        insertHtmlAtCurrentPos(chunk) {
          this.active = true;
          this.preprocessor.insertHtmlAtCurrentPos(chunk);
        }
        _ensureHibernation() {
          if (this.preprocessor.endOfChunkHit) {
            for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
              this.preprocessor.retreat();
            }
            this.active = false;
            this.tokenQueue.push({ type: Tokenizer.HIBERNATION_TOKEN });
            return true;
          }
          return false;
        }
        _consume() {
          this.consumedAfterSnapshot++;
          return this.preprocessor.advance();
        }
        _unconsume() {
          this.consumedAfterSnapshot--;
          this.preprocessor.retreat();
        }
        _reconsumeInState(state) {
          this.state = state;
          this._unconsume();
        }
        _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
          let consumedCount = 0;
          let isMatch = true;
          const patternLength = pattern.length;
          let patternPos = 0;
          let cp = startCp;
          let patternCp = void 0;
          for (; patternPos < patternLength; patternPos++) {
            if (patternPos > 0) {
              cp = this._consume();
              consumedCount++;
            }
            if (cp === $.EOF) {
              isMatch = false;
              break;
            }
            patternCp = pattern[patternPos];
            if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
              isMatch = false;
              break;
            }
          }
          if (!isMatch) {
            while (consumedCount--) {
              this._unconsume();
            }
          }
          return isMatch;
        }
        _isTempBufferEqualToScriptString() {
          if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
            return false;
          }
          for (let i = 0; i < this.tempBuff.length; i++) {
            if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
              return false;
            }
          }
          return true;
        }
        _createStartTagToken() {
          this.currentToken = {
            type: Tokenizer.START_TAG_TOKEN,
            tagName: "",
            selfClosing: false,
            ackSelfClosing: false,
            attrs: []
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: Tokenizer.END_TAG_TOKEN,
            tagName: "",
            selfClosing: false,
            attrs: []
          };
        }
        _createCommentToken() {
          this.currentToken = {
            type: Tokenizer.COMMENT_TOKEN,
            data: ""
          };
        }
        _createDoctypeToken(initialName) {
          this.currentToken = {
            type: Tokenizer.DOCTYPE_TOKEN,
            name: initialName,
            forceQuirks: false,
            publicId: null,
            systemId: null
          };
        }
        _createCharacterToken(type2, ch) {
          this.currentCharacterToken = {
            type: type2,
            chars: ch
          };
        }
        _createEOFToken() {
          this.currentToken = { type: Tokenizer.EOF_TOKEN };
        }
        _createAttr(attrNameFirstCh) {
          this.currentAttr = {
            name: attrNameFirstCh,
            value: ""
          };
        }
        _leaveAttrName(toState) {
          if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
            this.currentToken.attrs.push(this.currentAttr);
          } else {
            this._err(ERR.duplicateAttribute);
          }
          this.state = toState;
        }
        _leaveAttrValue(toState) {
          this.state = toState;
        }
        _emitCurrentToken() {
          this._emitCurrentCharacterToken();
          const ct = this.currentToken;
          this.currentToken = null;
          if (ct.type === Tokenizer.START_TAG_TOKEN) {
            this.lastStartTagName = ct.tagName;
          } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
            if (ct.attrs.length > 0) {
              this._err(ERR.endTagWithAttributes);
            }
            if (ct.selfClosing) {
              this._err(ERR.endTagWithTrailingSolidus);
            }
          }
          this.tokenQueue.push(ct);
        }
        _emitCurrentCharacterToken() {
          if (this.currentCharacterToken) {
            this.tokenQueue.push(this.currentCharacterToken);
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          this._createEOFToken();
          this._emitCurrentToken();
        }
        _appendCharToCurrentCharacterToken(type2, ch) {
          if (this.currentCharacterToken && this.currentCharacterToken.type !== type2) {
            this._emitCurrentCharacterToken();
          }
          if (this.currentCharacterToken) {
            this.currentCharacterToken.chars += ch;
          } else {
            this._createCharacterToken(type2, ch);
          }
        }
        _emitCodePoint(cp) {
          let type2 = Tokenizer.CHARACTER_TOKEN;
          if (isWhitespace(cp)) {
            type2 = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
          } else if (cp === $.NULL) {
            type2 = Tokenizer.NULL_CHARACTER_TOKEN;
          }
          this._appendCharToCurrentCharacterToken(type2, toChar(cp));
        }
        _emitSeveralCodePoints(codePoints) {
          for (let i = 0; i < codePoints.length; i++) {
            this._emitCodePoint(codePoints[i]);
          }
        }
        _emitChars(ch) {
          this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
        }
        _matchNamedCharacterReference(startCp) {
          let result = null;
          let excess = 1;
          let i = findNamedEntityTreeBranch(0, startCp);
          this.tempBuff.push(startCp);
          while (i > -1) {
            const current = neTree[i];
            const inNode = current < MAX_BRANCH_MARKER_VALUE;
            const nodeWithData = inNode && current & HAS_DATA_FLAG;
            if (nodeWithData) {
              result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
              excess = 0;
            }
            const cp = this._consume();
            this.tempBuff.push(cp);
            excess++;
            if (cp === $.EOF) {
              break;
            }
            if (inNode) {
              i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
            } else {
              i = cp === current ? ++i : -1;
            }
          }
          while (excess--) {
            this.tempBuff.pop();
            this._unconsume();
          }
          return result;
        }
        _isCharacterReferenceInAttribute() {
          return this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE;
        }
        _isCharacterReferenceAttributeQuirk(withSemicolon) {
          if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
            const nextCp = this._consume();
            this._unconsume();
            return nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
          }
          return false;
        }
        _flushCodePointsConsumedAsCharacterReference() {
          if (this._isCharacterReferenceInAttribute()) {
            for (let i = 0; i < this.tempBuff.length; i++) {
              this.currentAttr.value += toChar(this.tempBuff[i]);
            }
          } else {
            this._emitSeveralCodePoints(this.tempBuff);
          }
          this.tempBuff = [];
        }
        [DATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = TAG_OPEN_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = DATA_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [RCDATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.AMPERSAND) {
            this.returnState = RCDATA_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = RCDATA_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [RAWTEXT_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [PLAINTEXT_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [TAG_OPEN_STATE](cp) {
          if (cp === $.EXCLAMATION_MARK) {
            this.state = MARKUP_DECLARATION_OPEN_STATE;
          } else if (cp === $.SOLIDUS) {
            this.state = END_TAG_OPEN_STATE;
          } else if (isAsciiLetter(cp)) {
            this._createStartTagToken();
            this._reconsumeInState(TAG_NAME_STATE);
          } else if (cp === $.QUESTION_MARK) {
            this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          } else if (cp === $.EOF) {
            this._err(ERR.eofBeforeTagName);
            this._emitChars("<");
            this._emitEOFToken();
          } else {
            this._err(ERR.invalidFirstCharacterOfTagName);
            this._emitChars("<");
            this._reconsumeInState(DATA_STATE);
          }
        }
        [END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(TAG_NAME_STATE);
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingEndTagName);
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofBeforeTagName);
            this._emitChars("</");
            this._emitEOFToken();
          } else {
            this._err(ERR.invalidFirstCharacterOfTagName);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          }
        }
        [TAG_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          } else if (cp === $.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentToken.tagName += toChar(cp);
          }
        }
        [RCDATA_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = RCDATA_END_TAG_OPEN_STATE;
          } else {
            this._emitChars("<");
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RCDATA_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RCDATA_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this.state = DATA_STATE;
                this._emitCurrentToken();
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RAWTEXT_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = RAWTEXT_END_TAG_OPEN_STATE;
          } else {
            this._emitChars("<");
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [RAWTEXT_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [RAWTEXT_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [SCRIPT_DATA_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
          } else if (cp === $.EXCLAMATION_MARK) {
            this.state = SCRIPT_DATA_ESCAPE_START_STATE;
            this._emitChars("<!");
          } else {
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              } else if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              } else if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPE_START_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
            this._emitChars("-");
          } else {
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPE_START_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else {
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_DASH_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = SCRIPT_DATA_STATE;
            this._emitChars(">");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
          } else if (isAsciiLetter(cp)) {
            this.tempBuff = [];
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
          } else {
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
            this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          } else if (isAsciiUpper(cp)) {
            this.tempBuff.push(toAsciiLowerCodePoint(cp));
            this._emitCodePoint(cp);
          } else if (isAsciiLower(cp)) {
            this.tempBuff.push(cp);
            this._emitCodePoint(cp);
          } else {
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = SCRIPT_DATA_STATE;
            this._emitChars(">");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
            this._emitChars("/");
          } else {
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
            this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          } else if (isAsciiUpper(cp)) {
            this.tempBuff.push(toAsciiLowerCodePoint(cp));
            this._emitCodePoint(cp);
          } else if (isAsciiLower(cp)) {
            this.tempBuff.push(cp);
            this._emitCodePoint(cp);
          } else {
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
          }
        }
        [BEFORE_ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
            this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.EQUALS_SIGN) {
            this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = ATTRIBUTE_NAME_STATE;
          } else {
            this._createAttr("");
            this._reconsumeInState(ATTRIBUTE_NAME_STATE);
          }
        }
        [ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
            this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
            this._unconsume();
          } else if (cp === $.EQUALS_SIGN) {
            this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
          } else if (isAsciiUpper(cp)) {
            this.currentAttr.name += toAsciiLowerChar(cp);
          } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
            this._err(ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += toChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;
          } else {
            this.currentAttr.name += toChar(cp);
          }
        }
        [AFTER_ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
          } else if (cp === $.EQUALS_SIGN) {
            this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._createAttr("");
            this._reconsumeInState(ATTRIBUTE_NAME_STATE);
          }
        }
        [BEFORE_ATTRIBUTE_VALUE_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingAttributeValue);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else {
            this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
          }
        }
        [ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [ATTRIBUTE_VALUE_UNQUOTED_STATE](cp) {
          if (isWhitespace(cp)) {
            this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._leaveAttrValue(DATA_STATE);
            this._emitCurrentToken();
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
            this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += toChar(cp);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [AFTER_ATTRIBUTE_VALUE_QUOTED_STATE](cp) {
          if (isWhitespace(cp)) {
            this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.SOLIDUS) {
            this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._leaveAttrValue(DATA_STATE);
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._err(ERR.missingWhitespaceBetweenAttributes);
            this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
          }
        }
        [SELF_CLOSING_START_TAG_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.currentToken.selfClosing = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._err(ERR.unexpectedSolidusInTag);
            this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
          }
        }
        [BOGUS_COMMENT_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._emitCurrentToken();
            this._emitEOFToken();
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
          } else {
            this.currentToken.data += toChar(cp);
          }
        }
        [MARKUP_DECLARATION_OPEN_STATE](cp) {
          if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
            this._createCommentToken();
            this.state = COMMENT_START_STATE;
          } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
            this.state = DOCTYPE_STATE;
          } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
            if (this.allowCDATA) {
              this.state = CDATA_SECTION_STATE;
            } else {
              this._err(ERR.cdataInHtmlContent);
              this._createCommentToken();
              this.currentToken.data = "[CDATA[";
              this.state = BOGUS_COMMENT_STATE;
            }
          } else if (!this._ensureHibernation()) {
            this._err(ERR.incorrectlyOpenedComment);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          }
        }
        [COMMENT_START_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_START_DASH_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_START_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "-";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_DASH_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.currentToken.data += "<";
            this.state = COMMENT_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += toChar(cp);
          }
        }
        [COMMENT_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.EXCLAMATION_MARK) {
            this.currentToken.data += "!";
            this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.currentToken.data += "!";
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
          } else {
            this._reconsumeInState(COMMENT_END_DASH_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE](cp) {
          if (cp !== $.GREATER_THAN_SIGN && cp !== $.EOF) {
            this._err(ERR.nestedComment);
          }
          this._reconsumeInState(COMMENT_END_STATE);
        }
        [COMMENT_END_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "-";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_END_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EXCLAMATION_MARK) {
            this.state = COMMENT_END_BANG_STATE;
          } else if (cp === $.HYPHEN_MINUS) {
            this.currentToken.data += "-";
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "--";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_END_BANG_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.currentToken.data += "--!";
            this.state = COMMENT_END_DASH_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.incorrectlyClosedComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "--!";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [DOCTYPE_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingWhitespaceBeforeDoctypeName);
            this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
          }
        }
        [BEFORE_DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (isAsciiUpper(cp)) {
            this._createDoctypeToken(toAsciiLowerChar(cp));
            this.state = DOCTYPE_NAME_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._createDoctypeToken(unicode.REPLACEMENT_CHARACTER);
            this.state = DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeName);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._createDoctypeToken(toChar(cp));
            this.state = DOCTYPE_NAME_STATE;
          }
        }
        [DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = AFTER_DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (isAsciiUpper(cp)) {
            this.currentToken.name += toAsciiLowerChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.name += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.name += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
            this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
          } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
            this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
          } else if (!this._ensureHibernation()) {
            this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.publicId += toChar(cp);
          }
        }
        [DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.publicId += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.systemId += toChar(cp);
          }
        }
        [DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.systemId += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BOGUS_DOCTYPE_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
          } else if (cp === $.EOF) {
            this._emitCurrentToken();
            this._emitEOFToken();
          }
        }
        [CDATA_SECTION_STATE](cp) {
          if (cp === $.RIGHT_SQUARE_BRACKET) {
            this.state = CDATA_SECTION_BRACKET_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInCdata);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [CDATA_SECTION_BRACKET_STATE](cp) {
          if (cp === $.RIGHT_SQUARE_BRACKET) {
            this.state = CDATA_SECTION_END_STATE;
          } else {
            this._emitChars("]");
            this._reconsumeInState(CDATA_SECTION_STATE);
          }
        }
        [CDATA_SECTION_END_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
          } else if (cp === $.RIGHT_SQUARE_BRACKET) {
            this._emitChars("]");
          } else {
            this._emitChars("]]");
            this._reconsumeInState(CDATA_SECTION_STATE);
          }
        }
        [CHARACTER_REFERENCE_STATE](cp) {
          this.tempBuff = [$.AMPERSAND];
          if (cp === $.NUMBER_SIGN) {
            this.tempBuff.push(cp);
            this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
          } else if (isAsciiAlphaNumeric(cp)) {
            this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
          } else {
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [NAMED_CHARACTER_REFERENCE_STATE](cp) {
          const matchResult = this._matchNamedCharacterReference(cp);
          if (this._ensureHibernation()) {
            this.tempBuff = [$.AMPERSAND];
          } else if (matchResult) {
            const withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $.SEMICOLON;
            if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
              if (!withSemicolon) {
                this._errOnNextCodePoint(ERR.missingSemicolonAfterCharacterReference);
              }
              this.tempBuff = matchResult;
            }
            this._flushCodePointsConsumedAsCharacterReference();
            this.state = this.returnState;
          } else {
            this._flushCodePointsConsumedAsCharacterReference();
            this.state = AMBIGUOUS_AMPERSAND_STATE;
          }
        }
        [AMBIGUOUS_AMPERSAND_STATE](cp) {
          if (isAsciiAlphaNumeric(cp)) {
            if (this._isCharacterReferenceInAttribute()) {
              this.currentAttr.value += toChar(cp);
            } else {
              this._emitCodePoint(cp);
            }
          } else {
            if (cp === $.SEMICOLON) {
              this._err(ERR.unknownNamedCharacterReference);
            }
            this._reconsumeInState(this.returnState);
          }
        }
        [NUMERIC_CHARACTER_REFERENCE_STATE](cp) {
          this.charRefCode = 0;
          if (cp === $.LATIN_SMALL_X || cp === $.LATIN_CAPITAL_X) {
            this.tempBuff.push(cp);
            this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
          } else {
            this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
          }
        }
        [HEXADEMICAL_CHARACTER_REFERENCE_START_STATE](cp) {
          if (isAsciiHexDigit(cp)) {
            this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
          } else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [DECIMAL_CHARACTER_REFERENCE_START_STATE](cp) {
          if (isAsciiDigit(cp)) {
            this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
          } else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [HEXADEMICAL_CHARACTER_REFERENCE_STATE](cp) {
          if (isAsciiUpperHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 55;
          } else if (isAsciiLowerHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 87;
          } else if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 48;
          } else if (cp === $.SEMICOLON) {
            this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
          } else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
          }
        }
        [DECIMAL_CHARACTER_REFERENCE_STATE](cp) {
          if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 10 + cp - 48;
          } else if (cp === $.SEMICOLON) {
            this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
          } else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
          }
        }
        [NUMERIC_CHARACTER_REFERENCE_END_STATE]() {
          if (this.charRefCode === $.NULL) {
            this._err(ERR.nullCharacterReference);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (this.charRefCode > 1114111) {
            this._err(ERR.characterReferenceOutsideUnicodeRange);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (unicode.isSurrogate(this.charRefCode)) {
            this._err(ERR.surrogateCharacterReference);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (unicode.isUndefinedCodePoint(this.charRefCode)) {
            this._err(ERR.noncharacterCharacterReference);
          } else if (unicode.isControlCodePoint(this.charRefCode) || this.charRefCode === $.CARRIAGE_RETURN) {
            this._err(ERR.controlCharacterReference);
            const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];
            if (replacement) {
              this.charRefCode = replacement;
            }
          }
          this.tempBuff = [this.charRefCode];
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      };
      Tokenizer.CHARACTER_TOKEN = "CHARACTER_TOKEN";
      Tokenizer.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
      Tokenizer.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
      Tokenizer.START_TAG_TOKEN = "START_TAG_TOKEN";
      Tokenizer.END_TAG_TOKEN = "END_TAG_TOKEN";
      Tokenizer.COMMENT_TOKEN = "COMMENT_TOKEN";
      Tokenizer.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
      Tokenizer.EOF_TOKEN = "EOF_TOKEN";
      Tokenizer.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
      Tokenizer.MODE = {
        DATA: DATA_STATE,
        RCDATA: RCDATA_STATE,
        RAWTEXT: RAWTEXT_STATE,
        SCRIPT_DATA: SCRIPT_DATA_STATE,
        PLAINTEXT: PLAINTEXT_STATE
      };
      Tokenizer.getTokenAttr = function(token, attrName) {
        for (let i = token.attrs.length - 1; i >= 0; i--) {
          if (token.attrs[i].name === attrName) {
            return token.attrs[i].value;
          }
        }
        return null;
      };
      module.exports = Tokenizer;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/common/html.js
  var require_html4 = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/common/html.js"(exports) {
      init_globals();
      var NS = exports.NAMESPACES = {
        HTML: "http://www.w3.org/1999/xhtml",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
      };
      exports.ATTRS = {
        TYPE: "type",
        ACTION: "action",
        ENCODING: "encoding",
        PROMPT: "prompt",
        NAME: "name",
        COLOR: "color",
        FACE: "face",
        SIZE: "size"
      };
      exports.DOCUMENT_MODE = {
        NO_QUIRKS: "no-quirks",
        QUIRKS: "quirks",
        LIMITED_QUIRKS: "limited-quirks"
      };
      var $ = exports.TAG_NAMES = {
        A: "a",
        ADDRESS: "address",
        ANNOTATION_XML: "annotation-xml",
        APPLET: "applet",
        AREA: "area",
        ARTICLE: "article",
        ASIDE: "aside",
        B: "b",
        BASE: "base",
        BASEFONT: "basefont",
        BGSOUND: "bgsound",
        BIG: "big",
        BLOCKQUOTE: "blockquote",
        BODY: "body",
        BR: "br",
        BUTTON: "button",
        CAPTION: "caption",
        CENTER: "center",
        CODE: "code",
        COL: "col",
        COLGROUP: "colgroup",
        DD: "dd",
        DESC: "desc",
        DETAILS: "details",
        DIALOG: "dialog",
        DIR: "dir",
        DIV: "div",
        DL: "dl",
        DT: "dt",
        EM: "em",
        EMBED: "embed",
        FIELDSET: "fieldset",
        FIGCAPTION: "figcaption",
        FIGURE: "figure",
        FONT: "font",
        FOOTER: "footer",
        FOREIGN_OBJECT: "foreignObject",
        FORM: "form",
        FRAME: "frame",
        FRAMESET: "frameset",
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
        HEAD: "head",
        HEADER: "header",
        HGROUP: "hgroup",
        HR: "hr",
        HTML: "html",
        I: "i",
        IMG: "img",
        IMAGE: "image",
        INPUT: "input",
        IFRAME: "iframe",
        KEYGEN: "keygen",
        LABEL: "label",
        LI: "li",
        LINK: "link",
        LISTING: "listing",
        MAIN: "main",
        MALIGNMARK: "malignmark",
        MARQUEE: "marquee",
        MATH: "math",
        MENU: "menu",
        META: "meta",
        MGLYPH: "mglyph",
        MI: "mi",
        MO: "mo",
        MN: "mn",
        MS: "ms",
        MTEXT: "mtext",
        NAV: "nav",
        NOBR: "nobr",
        NOFRAMES: "noframes",
        NOEMBED: "noembed",
        NOSCRIPT: "noscript",
        OBJECT: "object",
        OL: "ol",
        OPTGROUP: "optgroup",
        OPTION: "option",
        P: "p",
        PARAM: "param",
        PLAINTEXT: "plaintext",
        PRE: "pre",
        RB: "rb",
        RP: "rp",
        RT: "rt",
        RTC: "rtc",
        RUBY: "ruby",
        S: "s",
        SCRIPT: "script",
        SECTION: "section",
        SELECT: "select",
        SOURCE: "source",
        SMALL: "small",
        SPAN: "span",
        STRIKE: "strike",
        STRONG: "strong",
        STYLE: "style",
        SUB: "sub",
        SUMMARY: "summary",
        SUP: "sup",
        TABLE: "table",
        TBODY: "tbody",
        TEMPLATE: "template",
        TEXTAREA: "textarea",
        TFOOT: "tfoot",
        TD: "td",
        TH: "th",
        THEAD: "thead",
        TITLE: "title",
        TR: "tr",
        TRACK: "track",
        TT: "tt",
        U: "u",
        UL: "ul",
        SVG: "svg",
        VAR: "var",
        WBR: "wbr",
        XMP: "xmp"
      };
      exports.SPECIAL_ELEMENTS = {
        [NS.HTML]: {
          [$.ADDRESS]: true,
          [$.APPLET]: true,
          [$.AREA]: true,
          [$.ARTICLE]: true,
          [$.ASIDE]: true,
          [$.BASE]: true,
          [$.BASEFONT]: true,
          [$.BGSOUND]: true,
          [$.BLOCKQUOTE]: true,
          [$.BODY]: true,
          [$.BR]: true,
          [$.BUTTON]: true,
          [$.CAPTION]: true,
          [$.CENTER]: true,
          [$.COL]: true,
          [$.COLGROUP]: true,
          [$.DD]: true,
          [$.DETAILS]: true,
          [$.DIR]: true,
          [$.DIV]: true,
          [$.DL]: true,
          [$.DT]: true,
          [$.EMBED]: true,
          [$.FIELDSET]: true,
          [$.FIGCAPTION]: true,
          [$.FIGURE]: true,
          [$.FOOTER]: true,
          [$.FORM]: true,
          [$.FRAME]: true,
          [$.FRAMESET]: true,
          [$.H1]: true,
          [$.H2]: true,
          [$.H3]: true,
          [$.H4]: true,
          [$.H5]: true,
          [$.H6]: true,
          [$.HEAD]: true,
          [$.HEADER]: true,
          [$.HGROUP]: true,
          [$.HR]: true,
          [$.HTML]: true,
          [$.IFRAME]: true,
          [$.IMG]: true,
          [$.INPUT]: true,
          [$.LI]: true,
          [$.LINK]: true,
          [$.LISTING]: true,
          [$.MAIN]: true,
          [$.MARQUEE]: true,
          [$.MENU]: true,
          [$.META]: true,
          [$.NAV]: true,
          [$.NOEMBED]: true,
          [$.NOFRAMES]: true,
          [$.NOSCRIPT]: true,
          [$.OBJECT]: true,
          [$.OL]: true,
          [$.P]: true,
          [$.PARAM]: true,
          [$.PLAINTEXT]: true,
          [$.PRE]: true,
          [$.SCRIPT]: true,
          [$.SECTION]: true,
          [$.SELECT]: true,
          [$.SOURCE]: true,
          [$.STYLE]: true,
          [$.SUMMARY]: true,
          [$.TABLE]: true,
          [$.TBODY]: true,
          [$.TD]: true,
          [$.TEMPLATE]: true,
          [$.TEXTAREA]: true,
          [$.TFOOT]: true,
          [$.TH]: true,
          [$.THEAD]: true,
          [$.TITLE]: true,
          [$.TR]: true,
          [$.TRACK]: true,
          [$.UL]: true,
          [$.WBR]: true,
          [$.XMP]: true
        },
        [NS.MATHML]: {
          [$.MI]: true,
          [$.MO]: true,
          [$.MN]: true,
          [$.MS]: true,
          [$.MTEXT]: true,
          [$.ANNOTATION_XML]: true
        },
        [NS.SVG]: {
          [$.TITLE]: true,
          [$.FOREIGN_OBJECT]: true,
          [$.DESC]: true
        }
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/parser/open-element-stack.js
  var require_open_element_stack = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/parser/open-element-stack.js"(exports, module) {
      init_globals();
      var HTML = require_html4();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      function isImpliedEndTagRequired(tn) {
        switch (tn.length) {
          case 1:
            return tn === $.P;
          case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;
          case 3:
            return tn === $.RTC;
          case 6:
            return tn === $.OPTION;
          case 8:
            return tn === $.OPTGROUP;
        }
        return false;
      }
      function isImpliedEndTagRequiredThoroughly(tn) {
        switch (tn.length) {
          case 1:
            return tn === $.P;
          case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI || tn === $.TD || tn === $.TH || tn === $.TR;
          case 3:
            return tn === $.RTC;
          case 5:
            return tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD;
          case 6:
            return tn === $.OPTION;
          case 7:
            return tn === $.CAPTION;
          case 8:
            return tn === $.OPTGROUP || tn === $.COLGROUP;
        }
        return false;
      }
      function isScopingElement(tn, ns) {
        switch (tn.length) {
          case 2:
            if (tn === $.TD || tn === $.TH) {
              return ns === NS.HTML;
            } else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) {
              return ns === NS.MATHML;
            }
            break;
          case 4:
            if (tn === $.HTML) {
              return ns === NS.HTML;
            } else if (tn === $.DESC) {
              return ns === NS.SVG;
            }
            break;
          case 5:
            if (tn === $.TABLE) {
              return ns === NS.HTML;
            } else if (tn === $.MTEXT) {
              return ns === NS.MATHML;
            } else if (tn === $.TITLE) {
              return ns === NS.SVG;
            }
            break;
          case 6:
            return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;
          case 7:
            return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;
          case 8:
            return tn === $.TEMPLATE && ns === NS.HTML;
          case 13:
            return tn === $.FOREIGN_OBJECT && ns === NS.SVG;
          case 14:
            return tn === $.ANNOTATION_XML && ns === NS.MATHML;
        }
        return false;
      }
      var OpenElementStack = class {
        constructor(document2, treeAdapter) {
          this.stackTop = -1;
          this.items = [];
          this.current = document2;
          this.currentTagName = null;
          this.currentTmplContent = null;
          this.tmplCount = 0;
          this.treeAdapter = treeAdapter;
        }
        _indexOf(element) {
          let idx = -1;
          for (let i = this.stackTop; i >= 0; i--) {
            if (this.items[i] === element) {
              idx = i;
              break;
            }
          }
          return idx;
        }
        _isInTemplate() {
          return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
        }
        _updateCurrentElement() {
          this.current = this.items[this.stackTop];
          this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
          this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
        }
        push(element) {
          this.items[++this.stackTop] = element;
          this._updateCurrentElement();
          if (this._isInTemplate()) {
            this.tmplCount++;
          }
        }
        pop() {
          this.stackTop--;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
          }
          this._updateCurrentElement();
        }
        replace(oldElement, newElement) {
          const idx = this._indexOf(oldElement);
          this.items[idx] = newElement;
          if (idx === this.stackTop) {
            this._updateCurrentElement();
          }
        }
        insertAfter(referenceElement, newElement) {
          const insertionIdx = this._indexOf(referenceElement) + 1;
          this.items.splice(insertionIdx, 0, newElement);
          if (insertionIdx === ++this.stackTop) {
            this._updateCurrentElement();
          }
        }
        popUntilTagNamePopped(tagName) {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === tagName && ns === NS.HTML) {
              break;
            }
          }
        }
        popUntilElementPopped(element) {
          while (this.stackTop > -1) {
            const poppedElement = this.current;
            this.pop();
            if (poppedElement === element) {
              break;
            }
          }
        }
        popUntilNumberedHeaderPopped() {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML) {
              break;
            }
          }
        }
        popUntilTableCellPopped() {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === $.TD || tn === $.TH && ns === NS.HTML) {
              break;
            }
          }
        }
        popAllUpToHtmlElement() {
          this.stackTop = 0;
          this._updateCurrentElement();
        }
        clearBackToTableContext() {
          while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        clearBackToTableBodyContext() {
          while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT && this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        clearBackToTableRowContext() {
          while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        remove(element) {
          for (let i = this.stackTop; i >= 0; i--) {
            if (this.items[i] === element) {
              this.items.splice(i, 1);
              this.stackTop--;
              this._updateCurrentElement();
              break;
            }
          }
        }
        tryPeekProperlyNestedBodyElement() {
          const element = this.items[1];
          return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
        }
        contains(element) {
          return this._indexOf(element) > -1;
        }
        getCommonAncestor(element) {
          let elementIdx = this._indexOf(element);
          return --elementIdx >= 0 ? this.items[elementIdx] : null;
        }
        isRootHtmlElementCurrent() {
          return this.stackTop === 0 && this.currentTagName === $.HTML;
        }
        hasInScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if (isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasNumberedHeaderInScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML) {
              return true;
            }
            if (isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInListItemScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInButtonScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInTableScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) {
              return false;
            }
          }
          return true;
        }
        hasTableBodyContextInTableScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) {
              return true;
            }
            if (tn === $.TABLE || tn === $.HTML) {
              return false;
            }
          }
          return true;
        }
        hasInSelectScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn !== $.OPTION && tn !== $.OPTGROUP) {
              return false;
            }
          }
          return true;
        }
        generateImpliedEndTags() {
          while (isImpliedEndTagRequired(this.currentTagName)) {
            this.pop();
          }
        }
        generateImpliedEndTagsThoroughly() {
          while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
            this.pop();
          }
        }
        generateImpliedEndTagsWithExclusion(exclusionTagName) {
          while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
            this.pop();
          }
        }
      };
      module.exports = OpenElementStack;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/parser/formatting-element-list.js
  var require_formatting_element_list = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/parser/formatting-element-list.js"(exports, module) {
      init_globals();
      var NOAH_ARK_CAPACITY = 3;
      var FormattingElementList = class {
        constructor(treeAdapter) {
          this.length = 0;
          this.entries = [];
          this.treeAdapter = treeAdapter;
          this.bookmark = null;
        }
        _getNoahArkConditionCandidates(newElement) {
          const candidates = [];
          if (this.length >= NOAH_ARK_CAPACITY) {
            const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
            const neTagName = this.treeAdapter.getTagName(newElement);
            const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
            for (let i = this.length - 1; i >= 0; i--) {
              const entry = this.entries[i];
              if (entry.type === FormattingElementList.MARKER_ENTRY) {
                break;
              }
              const element = entry.element;
              const elementAttrs = this.treeAdapter.getAttrList(element);
              const isCandidate = this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI && elementAttrs.length === neAttrsLength;
              if (isCandidate) {
                candidates.push({ idx: i, attrs: elementAttrs });
              }
            }
          }
          return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
        }
        _ensureNoahArkCondition(newElement) {
          const candidates = this._getNoahArkConditionCandidates(newElement);
          let cLength = candidates.length;
          if (cLength) {
            const neAttrs = this.treeAdapter.getAttrList(newElement);
            const neAttrsLength = neAttrs.length;
            const neAttrsMap = /* @__PURE__ */ Object.create(null);
            for (let i = 0; i < neAttrsLength; i++) {
              const neAttr = neAttrs[i];
              neAttrsMap[neAttr.name] = neAttr.value;
            }
            for (let i = 0; i < neAttrsLength; i++) {
              for (let j = 0; j < cLength; j++) {
                const cAttr = candidates[j].attrs[i];
                if (neAttrsMap[cAttr.name] !== cAttr.value) {
                  candidates.splice(j, 1);
                  cLength--;
                }
                if (candidates.length < NOAH_ARK_CAPACITY) {
                  return;
                }
              }
            }
            for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
              this.entries.splice(candidates[i].idx, 1);
              this.length--;
            }
          }
        }
        insertMarker() {
          this.entries.push({ type: FormattingElementList.MARKER_ENTRY });
          this.length++;
        }
        pushElement(element, token) {
          this._ensureNoahArkCondition(element);
          this.entries.push({
            type: FormattingElementList.ELEMENT_ENTRY,
            element,
            token
          });
          this.length++;
        }
        insertElementAfterBookmark(element, token) {
          let bookmarkIdx = this.length - 1;
          for (; bookmarkIdx >= 0; bookmarkIdx--) {
            if (this.entries[bookmarkIdx] === this.bookmark) {
              break;
            }
          }
          this.entries.splice(bookmarkIdx + 1, 0, {
            type: FormattingElementList.ELEMENT_ENTRY,
            element,
            token
          });
          this.length++;
        }
        removeEntry(entry) {
          for (let i = this.length - 1; i >= 0; i--) {
            if (this.entries[i] === entry) {
              this.entries.splice(i, 1);
              this.length--;
              break;
            }
          }
        }
        clearToLastMarker() {
          while (this.length) {
            const entry = this.entries.pop();
            this.length--;
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
          }
        }
        getElementEntryInScopeWithTagName(tagName) {
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              return null;
            }
            if (this.treeAdapter.getTagName(entry.element) === tagName) {
              return entry;
            }
          }
          return null;
        }
        getElementEntry(element) {
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
              return entry;
            }
          }
          return null;
        }
      };
      FormattingElementList.MARKER_ENTRY = "MARKER_ENTRY";
      FormattingElementList.ELEMENT_ENTRY = "ELEMENT_ENTRY";
      module.exports = FormattingElementList;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/utils/mixin.js
  var require_mixin = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/utils/mixin.js"(exports, module) {
      init_globals();
      var Mixin = class {
        constructor(host) {
          const originalMethods = {};
          const overriddenMethods = this._getOverriddenMethods(this, originalMethods);
          for (const key of Object.keys(overriddenMethods)) {
            if (typeof overriddenMethods[key] === "function") {
              originalMethods[key] = host[key];
              host[key] = overriddenMethods[key];
            }
          }
        }
        _getOverriddenMethods() {
          throw new Error("Not implemented");
        }
      };
      Mixin.install = function(host, Ctor, opts) {
        if (!host.__mixins) {
          host.__mixins = [];
        }
        for (let i = 0; i < host.__mixins.length; i++) {
          if (host.__mixins[i].constructor === Ctor) {
            return host.__mixins[i];
          }
        }
        const mixin = new Ctor(host, opts);
        host.__mixins.push(mixin);
        return mixin;
      };
      module.exports = Mixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js
  var require_preprocessor_mixin = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js"(exports, module) {
      init_globals();
      var Mixin = require_mixin();
      var PositionTrackingPreprocessorMixin = class extends Mixin {
        constructor(preprocessor) {
          super(preprocessor);
          this.preprocessor = preprocessor;
          this.isEol = false;
          this.lineStartPos = 0;
          this.droppedBufferSize = 0;
          this.offset = 0;
          this.col = 0;
          this.line = 1;
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            advance() {
              const pos = this.pos + 1;
              const ch = this.html[pos];
              if (mxn.isEol) {
                mxn.isEol = false;
                mxn.line++;
                mxn.lineStartPos = pos;
              }
              if (ch === "\n" || ch === "\r" && this.html[pos + 1] !== "\n") {
                mxn.isEol = true;
              }
              mxn.col = pos - mxn.lineStartPos + 1;
              mxn.offset = mxn.droppedBufferSize + pos;
              return orig.advance.call(this);
            },
            retreat() {
              orig.retreat.call(this);
              mxn.isEol = false;
              mxn.col = this.pos - mxn.lineStartPos + 1;
            },
            dropParsedChunk() {
              const prevPos = this.pos;
              orig.dropParsedChunk.call(this);
              const reduction = prevPos - this.pos;
              mxn.lineStartPos -= reduction;
              mxn.droppedBufferSize += reduction;
              mxn.offset = mxn.droppedBufferSize + this.pos;
            }
          };
        }
      };
      module.exports = PositionTrackingPreprocessorMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js
  var require_tokenizer_mixin = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js"(exports, module) {
      init_globals();
      var Mixin = require_mixin();
      var Tokenizer = require_tokenizer();
      var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
      var LocationInfoTokenizerMixin = class extends Mixin {
        constructor(tokenizer) {
          super(tokenizer);
          this.tokenizer = tokenizer;
          this.posTracker = Mixin.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin);
          this.currentAttrLocation = null;
          this.ctLoc = null;
        }
        _getCurrentLocation() {
          return {
            startLine: this.posTracker.line,
            startCol: this.posTracker.col,
            startOffset: this.posTracker.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1
          };
        }
        _attachCurrentAttrLocationInfo() {
          this.currentAttrLocation.endLine = this.posTracker.line;
          this.currentAttrLocation.endCol = this.posTracker.col;
          this.currentAttrLocation.endOffset = this.posTracker.offset;
          const currentToken = this.tokenizer.currentToken;
          const currentAttr = this.tokenizer.currentAttr;
          if (!currentToken.location.attrs) {
            currentToken.location.attrs = /* @__PURE__ */ Object.create(null);
          }
          currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
        }
        _getOverriddenMethods(mxn, orig) {
          const methods = {
            _createStartTagToken() {
              orig._createStartTagToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createEndTagToken() {
              orig._createEndTagToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createCommentToken() {
              orig._createCommentToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createDoctypeToken(initialName) {
              orig._createDoctypeToken.call(this, initialName);
              this.currentToken.location = mxn.ctLoc;
            },
            _createCharacterToken(type2, ch) {
              orig._createCharacterToken.call(this, type2, ch);
              this.currentCharacterToken.location = mxn.ctLoc;
            },
            _createEOFToken() {
              orig._createEOFToken.call(this);
              this.currentToken.location = mxn._getCurrentLocation();
            },
            _createAttr(attrNameFirstCh) {
              orig._createAttr.call(this, attrNameFirstCh);
              mxn.currentAttrLocation = mxn._getCurrentLocation();
            },
            _leaveAttrName(toState) {
              orig._leaveAttrName.call(this, toState);
              mxn._attachCurrentAttrLocationInfo();
            },
            _leaveAttrValue(toState) {
              orig._leaveAttrValue.call(this, toState);
              mxn._attachCurrentAttrLocationInfo();
            },
            _emitCurrentToken() {
              const ctLoc = this.currentToken.location;
              if (this.currentCharacterToken) {
                this.currentCharacterToken.location.endLine = ctLoc.startLine;
                this.currentCharacterToken.location.endCol = ctLoc.startCol;
                this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
              }
              if (this.currentToken.type === Tokenizer.EOF_TOKEN) {
                ctLoc.endLine = ctLoc.startLine;
                ctLoc.endCol = ctLoc.startCol;
                ctLoc.endOffset = ctLoc.startOffset;
              } else {
                ctLoc.endLine = mxn.posTracker.line;
                ctLoc.endCol = mxn.posTracker.col + 1;
                ctLoc.endOffset = mxn.posTracker.offset + 1;
              }
              orig._emitCurrentToken.call(this);
            },
            _emitCurrentCharacterToken() {
              const ctLoc = this.currentCharacterToken && this.currentCharacterToken.location;
              if (ctLoc && ctLoc.endOffset === -1) {
                ctLoc.endLine = mxn.posTracker.line;
                ctLoc.endCol = mxn.posTracker.col;
                ctLoc.endOffset = mxn.posTracker.offset;
              }
              orig._emitCurrentCharacterToken.call(this);
            }
          };
          Object.keys(Tokenizer.MODE).forEach((modeName) => {
            const state = Tokenizer.MODE[modeName];
            methods[state] = function(cp) {
              mxn.ctLoc = mxn._getCurrentLocation();
              orig[state].call(this, cp);
            };
          });
          return methods;
        }
      };
      module.exports = LocationInfoTokenizerMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js
  var require_open_element_stack_mixin = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js"(exports, module) {
      init_globals();
      var Mixin = require_mixin();
      var LocationInfoOpenElementStackMixin = class extends Mixin {
        constructor(stack, opts) {
          super(stack);
          this.onItemPop = opts.onItemPop;
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            pop() {
              mxn.onItemPop(this.current);
              orig.pop.call(this);
            },
            popAllUpToHtmlElement() {
              for (let i = this.stackTop; i > 0; i--) {
                mxn.onItemPop(this.items[i]);
              }
              orig.popAllUpToHtmlElement.call(this);
            },
            remove(element) {
              mxn.onItemPop(this.current);
              orig.remove.call(this, element);
            }
          };
        }
      };
      module.exports = LocationInfoOpenElementStackMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/parser-mixin.js
  var require_parser_mixin = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/parser-mixin.js"(exports, module) {
      init_globals();
      var Mixin = require_mixin();
      var Tokenizer = require_tokenizer();
      var LocationInfoTokenizerMixin = require_tokenizer_mixin();
      var LocationInfoOpenElementStackMixin = require_open_element_stack_mixin();
      var HTML = require_html4();
      var $ = HTML.TAG_NAMES;
      var LocationInfoParserMixin = class extends Mixin {
        constructor(parser) {
          super(parser);
          this.parser = parser;
          this.treeAdapter = this.parser.treeAdapter;
          this.posTracker = null;
          this.lastStartTagToken = null;
          this.lastFosterParentingLocation = null;
          this.currentToken = null;
        }
        _setStartLocation(element) {
          let loc = null;
          if (this.lastStartTagToken) {
            loc = Object.assign({}, this.lastStartTagToken.location);
            loc.startTag = this.lastStartTagToken.location;
          }
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        _setEndLocation(element, closingToken) {
          const loc = this.treeAdapter.getNodeSourceCodeLocation(element);
          if (loc) {
            if (closingToken.location) {
              const ctLoc = closingToken.location;
              const tn = this.treeAdapter.getTagName(element);
              const isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;
              const endLoc = {};
              if (isClosingEndTag) {
                endLoc.endTag = Object.assign({}, ctLoc);
                endLoc.endLine = ctLoc.endLine;
                endLoc.endCol = ctLoc.endCol;
                endLoc.endOffset = ctLoc.endOffset;
              } else {
                endLoc.endLine = ctLoc.startLine;
                endLoc.endCol = ctLoc.startCol;
                endLoc.endOffset = ctLoc.startOffset;
              }
              this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
            }
          }
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            _bootstrap(document2, fragmentContext) {
              orig._bootstrap.call(this, document2, fragmentContext);
              mxn.lastStartTagToken = null;
              mxn.lastFosterParentingLocation = null;
              mxn.currentToken = null;
              const tokenizerMixin = Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
              mxn.posTracker = tokenizerMixin.posTracker;
              Mixin.install(this.openElements, LocationInfoOpenElementStackMixin, {
                onItemPop: function(element) {
                  mxn._setEndLocation(element, mxn.currentToken);
                }
              });
            },
            _runParsingLoop(scriptHandler) {
              orig._runParsingLoop.call(this, scriptHandler);
              for (let i = this.openElements.stackTop; i >= 0; i--) {
                mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
              }
            },
            _processTokenInForeignContent(token) {
              mxn.currentToken = token;
              orig._processTokenInForeignContent.call(this, token);
            },
            _processToken(token) {
              mxn.currentToken = token;
              orig._processToken.call(this, token);
              const requireExplicitUpdate = token.type === Tokenizer.END_TAG_TOKEN && (token.tagName === $.HTML || token.tagName === $.BODY && this.openElements.hasInScope($.BODY));
              if (requireExplicitUpdate) {
                for (let i = this.openElements.stackTop; i >= 0; i--) {
                  const element = this.openElements.items[i];
                  if (this.treeAdapter.getTagName(element) === token.tagName) {
                    mxn._setEndLocation(element, token);
                    break;
                  }
                }
              }
            },
            _setDocumentType(token) {
              orig._setDocumentType.call(this, token);
              const documentChildren = this.treeAdapter.getChildNodes(this.document);
              const cnLength = documentChildren.length;
              for (let i = 0; i < cnLength; i++) {
                const node = documentChildren[i];
                if (this.treeAdapter.isDocumentTypeNode(node)) {
                  this.treeAdapter.setNodeSourceCodeLocation(node, token.location);
                  break;
                }
              }
            },
            _attachElementToTree(element) {
              mxn._setStartLocation(element);
              mxn.lastStartTagToken = null;
              orig._attachElementToTree.call(this, element);
            },
            _appendElement(token, namespaceURI) {
              mxn.lastStartTagToken = token;
              orig._appendElement.call(this, token, namespaceURI);
            },
            _insertElement(token, namespaceURI) {
              mxn.lastStartTagToken = token;
              orig._insertElement.call(this, token, namespaceURI);
            },
            _insertTemplate(token) {
              mxn.lastStartTagToken = token;
              orig._insertTemplate.call(this, token);
              const tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
              this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
            },
            _insertFakeRootElement() {
              orig._insertFakeRootElement.call(this);
              this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
            },
            _appendCommentNode(token, parent) {
              orig._appendCommentNode.call(this, token, parent);
              const children = this.treeAdapter.getChildNodes(parent);
              const commentNode = children[children.length - 1];
              this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
            },
            _findFosterParentingLocation() {
              mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
              return mxn.lastFosterParentingLocation;
            },
            _insertCharacters(token) {
              orig._insertCharacters.call(this, token);
              const hasFosterParent = this._shouldFosterParentOnInsertion();
              const parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current;
              const siblings = this.treeAdapter.getChildNodes(parent);
              const textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1;
              const textNode = siblings[textNodeIdx];
              const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
              if (tnLoc) {
                const { endLine, endCol, endOffset } = token.location;
                this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
              } else {
                this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
              }
            }
          };
        }
      };
      module.exports = LocationInfoParserMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/mixin-base.js
  var require_mixin_base = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/mixin-base.js"(exports, module) {
      init_globals();
      var Mixin = require_mixin();
      var ErrorReportingMixinBase = class extends Mixin {
        constructor(host, opts) {
          super(host);
          this.posTracker = null;
          this.onParseError = opts.onParseError;
        }
        _setErrorLocation(err) {
          err.startLine = err.endLine = this.posTracker.line;
          err.startCol = err.endCol = this.posTracker.col;
          err.startOffset = err.endOffset = this.posTracker.offset;
        }
        _reportError(code2) {
          const err = {
            code: code2,
            startLine: -1,
            startCol: -1,
            startOffset: -1,
            endLine: -1,
            endCol: -1,
            endOffset: -1
          };
          this._setErrorLocation(err);
          this.onParseError(err);
        }
        _getOverriddenMethods(mxn) {
          return {
            _err(code2) {
              mxn._reportError(code2);
            }
          };
        }
      };
      module.exports = ErrorReportingMixinBase;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js
  var require_preprocessor_mixin2 = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js"(exports, module) {
      init_globals();
      var ErrorReportingMixinBase = require_mixin_base();
      var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
      var Mixin = require_mixin();
      var ErrorReportingPreprocessorMixin = class extends ErrorReportingMixinBase {
        constructor(preprocessor, opts) {
          super(preprocessor, opts);
          this.posTracker = Mixin.install(preprocessor, PositionTrackingPreprocessorMixin);
          this.lastErrOffset = -1;
        }
        _reportError(code2) {
          if (this.lastErrOffset !== this.posTracker.offset) {
            this.lastErrOffset = this.posTracker.offset;
            super._reportError(code2);
          }
        }
      };
      module.exports = ErrorReportingPreprocessorMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js
  var require_tokenizer_mixin2 = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js"(exports, module) {
      init_globals();
      var ErrorReportingMixinBase = require_mixin_base();
      var ErrorReportingPreprocessorMixin = require_preprocessor_mixin2();
      var Mixin = require_mixin();
      var ErrorReportingTokenizerMixin = class extends ErrorReportingMixinBase {
        constructor(tokenizer, opts) {
          super(tokenizer, opts);
          const preprocessorMixin = Mixin.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);
          this.posTracker = preprocessorMixin.posTracker;
        }
      };
      module.exports = ErrorReportingTokenizerMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js
  var require_parser_mixin2 = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js"(exports, module) {
      init_globals();
      var ErrorReportingMixinBase = require_mixin_base();
      var ErrorReportingTokenizerMixin = require_tokenizer_mixin2();
      var LocationInfoTokenizerMixin = require_tokenizer_mixin();
      var Mixin = require_mixin();
      var ErrorReportingParserMixin = class extends ErrorReportingMixinBase {
        constructor(parser, opts) {
          super(parser, opts);
          this.opts = opts;
          this.ctLoc = null;
          this.locBeforeToken = false;
        }
        _setErrorLocation(err) {
          if (this.ctLoc) {
            err.startLine = this.ctLoc.startLine;
            err.startCol = this.ctLoc.startCol;
            err.startOffset = this.ctLoc.startOffset;
            err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
            err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
            err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
          }
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            _bootstrap(document2, fragmentContext) {
              orig._bootstrap.call(this, document2, fragmentContext);
              Mixin.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
              Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
            },
            _processInputToken(token) {
              mxn.ctLoc = token.location;
              orig._processInputToken.call(this, token);
            },
            _err(code2, options) {
              mxn.locBeforeToken = options && options.beforeToken;
              mxn._reportError(code2);
            }
          };
        }
      };
      module.exports = ErrorReportingParserMixin;
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/tree-adapters/default.js
  var require_default = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/tree-adapters/default.js"(exports) {
      init_globals();
      var { DOCUMENT_MODE } = require_html4();
      exports.createDocument = function() {
        return {
          nodeName: "#document",
          mode: DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      };
      exports.createDocumentFragment = function() {
        return {
          nodeName: "#document-fragment",
          childNodes: []
        };
      };
      exports.createElement = function(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      };
      exports.createCommentNode = function(data) {
        return {
          nodeName: "#comment",
          data,
          parentNode: null
        };
      };
      var createTextNode = function(value) {
        return {
          nodeName: "#text",
          value,
          parentNode: null
        };
      };
      var appendChild = exports.appendChild = function(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      };
      var insertBefore = exports.insertBefore = function(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      };
      exports.setTemplateContent = function(templateElement, contentElement) {
        templateElement.content = contentElement;
      };
      exports.getTemplateContent = function(templateElement) {
        return templateElement.content;
      };
      exports.setDocumentType = function(document2, name, publicId, systemId) {
        let doctypeNode = null;
        for (let i = 0; i < document2.childNodes.length; i++) {
          if (document2.childNodes[i].nodeName === "#documentType") {
            doctypeNode = document2.childNodes[i];
            break;
          }
        }
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          appendChild(document2, {
            nodeName: "#documentType",
            name,
            publicId,
            systemId
          });
        }
      };
      exports.setDocumentMode = function(document2, mode) {
        document2.mode = mode;
      };
      exports.getDocumentMode = function(document2) {
        return document2.mode;
      };
      exports.detachNode = function(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      };
      exports.insertText = function(parentNode, text) {
        if (parentNode.childNodes.length) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (prevNode.nodeName === "#text") {
            prevNode.value += text;
            return;
          }
        }
        appendChild(parentNode, createTextNode(text));
      };
      exports.insertTextBefore = function(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && prevNode.nodeName === "#text") {
          prevNode.value += text;
        } else {
          insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      };
      exports.adoptAttributes = function(recipient2, attrs) {
        const recipientAttrsMap = [];
        for (let i = 0; i < recipient2.attrs.length; i++) {
          recipientAttrsMap.push(recipient2.attrs[i].name);
        }
        for (let j = 0; j < attrs.length; j++) {
          if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
            recipient2.attrs.push(attrs[j]);
          }
        }
      };
      exports.getFirstChild = function(node) {
        return node.childNodes[0];
      };
      exports.getChildNodes = function(node) {
        return node.childNodes;
      };
      exports.getParentNode = function(node) {
        return node.parentNode;
      };
      exports.getAttrList = function(element) {
        return element.attrs;
      };
      exports.getTagName = function(element) {
        return element.tagName;
      };
      exports.getNamespaceURI = function(element) {
        return element.namespaceURI;
      };
      exports.getTextNodeContent = function(textNode) {
        return textNode.value;
      };
      exports.getCommentNodeContent = function(commentNode) {
        return commentNode.data;
      };
      exports.getDocumentTypeNodeName = function(doctypeNode) {
        return doctypeNode.name;
      };
      exports.getDocumentTypeNodePublicId = function(doctypeNode) {
        return doctypeNode.publicId;
      };
      exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
        return doctypeNode.systemId;
      };
      exports.isTextNode = function(node) {
        return node.nodeName === "#text";
      };
      exports.isCommentNode = function(node) {
        return node.nodeName === "#comment";
      };
      exports.isDocumentTypeNode = function(node) {
        return node.nodeName === "#documentType";
      };
      exports.isElementNode = function(node) {
        return !!node.tagName;
      };
      exports.setNodeSourceCodeLocation = function(node, location) {
        node.sourceCodeLocation = location;
      };
      exports.getNodeSourceCodeLocation = function(node) {
        return node.sourceCodeLocation;
      };
      exports.updateNodeSourceCodeLocation = function(node, endLocation) {
        node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/utils/merge-options.js
  var require_merge_options = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/utils/merge-options.js"(exports, module) {
      init_globals();
      module.exports = function mergeOptions(defaults2, options) {
        options = options || /* @__PURE__ */ Object.create(null);
        return [defaults2, options].reduce((merged, optObj) => {
          Object.keys(optObj).forEach((key) => {
            merged[key] = optObj[key];
          });
          return merged;
        }, /* @__PURE__ */ Object.create(null));
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/common/doctype.js
  var require_doctype = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/common/doctype.js"(exports) {
      init_globals();
      var { DOCUMENT_MODE } = require_html4();
      var VALID_DOCTYPE_NAME = "html";
      var VALID_SYSTEM_ID = "about:legacy-compat";
      var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
      var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
        "+//silmaril//dtd html pro v0r11 19970101//",
        "-//as//dtd html 3.0 aswedit + extensions//",
        "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
        "-//ietf//dtd html 2.0 level 1//",
        "-//ietf//dtd html 2.0 level 2//",
        "-//ietf//dtd html 2.0 strict level 1//",
        "-//ietf//dtd html 2.0 strict level 2//",
        "-//ietf//dtd html 2.0 strict//",
        "-//ietf//dtd html 2.0//",
        "-//ietf//dtd html 2.1e//",
        "-//ietf//dtd html 3.0//",
        "-//ietf//dtd html 3.2 final//",
        "-//ietf//dtd html 3.2//",
        "-//ietf//dtd html 3//",
        "-//ietf//dtd html level 0//",
        "-//ietf//dtd html level 1//",
        "-//ietf//dtd html level 2//",
        "-//ietf//dtd html level 3//",
        "-//ietf//dtd html strict level 0//",
        "-//ietf//dtd html strict level 1//",
        "-//ietf//dtd html strict level 2//",
        "-//ietf//dtd html strict level 3//",
        "-//ietf//dtd html strict//",
        "-//ietf//dtd html//",
        "-//metrius//dtd metrius presentational//",
        "-//microsoft//dtd internet explorer 2.0 html strict//",
        "-//microsoft//dtd internet explorer 2.0 html//",
        "-//microsoft//dtd internet explorer 2.0 tables//",
        "-//microsoft//dtd internet explorer 3.0 html strict//",
        "-//microsoft//dtd internet explorer 3.0 html//",
        "-//microsoft//dtd internet explorer 3.0 tables//",
        "-//netscape comm. corp.//dtd html//",
        "-//netscape comm. corp.//dtd strict html//",
        "-//o'reilly and associates//dtd html 2.0//",
        "-//o'reilly and associates//dtd html extended 1.0//",
        "-//o'reilly and associates//dtd html extended relaxed 1.0//",
        "-//sq//dtd html 2.0 hotmetal + extensions//",
        "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
        "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
        "-//spyglass//dtd html 2.0 extended//",
        "-//sun microsystems corp.//dtd hotjava html//",
        "-//sun microsystems corp.//dtd hotjava strict html//",
        "-//w3c//dtd html 3 1995-03-24//",
        "-//w3c//dtd html 3.2 draft//",
        "-//w3c//dtd html 3.2 final//",
        "-//w3c//dtd html 3.2//",
        "-//w3c//dtd html 3.2s draft//",
        "-//w3c//dtd html 4.0 frameset//",
        "-//w3c//dtd html 4.0 transitional//",
        "-//w3c//dtd html experimental 19960712//",
        "-//w3c//dtd html experimental 970421//",
        "-//w3c//dtd w3 html//",
        "-//w3o//dtd w3 html 3.0//",
        "-//webtechs//dtd mozilla html 2.0//",
        "-//webtechs//dtd mozilla html//"
      ];
      var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ]);
      var QUIRKS_MODE_PUBLIC_IDS = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"];
      var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
      var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ]);
      function enquoteDoctypeId(id) {
        const quote = id.indexOf('"') !== -1 ? "'" : '"';
        return quote + id + quote;
      }
      function hasPrefix(publicId, prefixes) {
        for (let i = 0; i < prefixes.length; i++) {
          if (publicId.indexOf(prefixes[i]) === 0) {
            return true;
          }
        }
        return false;
      }
      exports.isConforming = function(token) {
        return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
      };
      exports.getDocumentMode = function(token) {
        if (token.name !== VALID_DOCTYPE_NAME) {
          return DOCUMENT_MODE.QUIRKS;
        }
        const systemId = token.systemId;
        if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
          return DOCUMENT_MODE.QUIRKS;
        }
        let publicId = token.publicId;
        if (publicId !== null) {
          publicId = publicId.toLowerCase();
          if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
            return DOCUMENT_MODE.QUIRKS;
          }
          let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.QUIRKS;
          }
          prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.LIMITED_QUIRKS;
          }
        }
        return DOCUMENT_MODE.NO_QUIRKS;
      };
      exports.serializeContent = function(name, publicId, systemId) {
        let str = "!DOCTYPE ";
        if (name) {
          str += name;
        }
        if (publicId) {
          str += " PUBLIC " + enquoteDoctypeId(publicId);
        } else if (systemId) {
          str += " SYSTEM";
        }
        if (systemId !== null) {
          str += " " + enquoteDoctypeId(systemId);
        }
        return str;
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/common/foreign-content.js
  var require_foreign_content = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/common/foreign-content.js"(exports) {
      init_globals();
      var Tokenizer = require_tokenizer();
      var HTML = require_html4();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      var ATTRS = HTML.ATTRS;
      var MIME_TYPES = {
        TEXT_HTML: "text/html",
        APPLICATION_XML: "application/xhtml+xml"
      };
      var DEFINITION_URL_ATTR = "definitionurl";
      var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
      var SVG_ATTRS_ADJUSTMENT_MAP = {
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
      };
      var XML_ATTRS_ADJUSTMENT_MAP = {
        "xlink:actuate": { prefix: "xlink", name: "actuate", namespace: NS.XLINK },
        "xlink:arcrole": { prefix: "xlink", name: "arcrole", namespace: NS.XLINK },
        "xlink:href": { prefix: "xlink", name: "href", namespace: NS.XLINK },
        "xlink:role": { prefix: "xlink", name: "role", namespace: NS.XLINK },
        "xlink:show": { prefix: "xlink", name: "show", namespace: NS.XLINK },
        "xlink:title": { prefix: "xlink", name: "title", namespace: NS.XLINK },
        "xlink:type": { prefix: "xlink", name: "type", namespace: NS.XLINK },
        "xml:base": { prefix: "xml", name: "base", namespace: NS.XML },
        "xml:lang": { prefix: "xml", name: "lang", namespace: NS.XML },
        "xml:space": { prefix: "xml", name: "space", namespace: NS.XML },
        xmlns: { prefix: "", name: "xmlns", namespace: NS.XMLNS },
        "xmlns:xlink": { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }
      };
      var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
      };
      var EXITS_FOREIGN_CONTENT = {
        [$.B]: true,
        [$.BIG]: true,
        [$.BLOCKQUOTE]: true,
        [$.BODY]: true,
        [$.BR]: true,
        [$.CENTER]: true,
        [$.CODE]: true,
        [$.DD]: true,
        [$.DIV]: true,
        [$.DL]: true,
        [$.DT]: true,
        [$.EM]: true,
        [$.EMBED]: true,
        [$.H1]: true,
        [$.H2]: true,
        [$.H3]: true,
        [$.H4]: true,
        [$.H5]: true,
        [$.H6]: true,
        [$.HEAD]: true,
        [$.HR]: true,
        [$.I]: true,
        [$.IMG]: true,
        [$.LI]: true,
        [$.LISTING]: true,
        [$.MENU]: true,
        [$.META]: true,
        [$.NOBR]: true,
        [$.OL]: true,
        [$.P]: true,
        [$.PRE]: true,
        [$.RUBY]: true,
        [$.S]: true,
        [$.SMALL]: true,
        [$.SPAN]: true,
        [$.STRONG]: true,
        [$.STRIKE]: true,
        [$.SUB]: true,
        [$.SUP]: true,
        [$.TABLE]: true,
        [$.TT]: true,
        [$.U]: true,
        [$.UL]: true,
        [$.VAR]: true
      };
      exports.causesExit = function(startTagToken) {
        const tn = startTagToken.tagName;
        const isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
        return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
      };
      exports.adjustTokenMathMLAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
          }
        }
      };
      exports.adjustTokenSVGAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
          if (adjustedAttrName) {
            token.attrs[i].name = adjustedAttrName;
          }
        }
      };
      exports.adjustTokenXMLAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
          if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
          }
        }
      };
      exports.adjustTokenSVGTagName = function(token) {
        const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
        if (adjustedTagName) {
          token.tagName = adjustedTagName;
        }
      };
      function isMathMLTextIntegrationPoint(tn, ns) {
        return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
      }
      function isHtmlIntegrationPoint(tn, ns, attrs) {
        if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
          for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name === ATTRS.ENCODING) {
              const value = attrs[i].value.toLowerCase();
              return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
          }
        }
        return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
      }
      exports.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
        if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
          return true;
        }
        if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
          return true;
        }
        return false;
      };
    }
  });

  // node_modules/rehype-parse/node_modules/parse5/lib/parser/index.js
  var require_parser = __commonJS({
    "node_modules/rehype-parse/node_modules/parse5/lib/parser/index.js"(exports, module) {
      init_globals();
      var Tokenizer = require_tokenizer();
      var OpenElementStack = require_open_element_stack();
      var FormattingElementList = require_formatting_element_list();
      var LocationInfoParserMixin = require_parser_mixin();
      var ErrorReportingParserMixin = require_parser_mixin2();
      var Mixin = require_mixin();
      var defaultTreeAdapter = require_default();
      var mergeOptions = require_merge_options();
      var doctype = require_doctype();
      var foreignContent = require_foreign_content();
      var ERR = require_error_codes();
      var unicode = require_unicode();
      var HTML = require_html4();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      var ATTRS = HTML.ATTRS;
      var DEFAULT_OPTIONS = {
        scriptingEnabled: true,
        sourceCodeLocationInfo: false,
        onParseError: null,
        treeAdapter: defaultTreeAdapter
      };
      var HIDDEN_INPUT_TYPE = "hidden";
      var AA_OUTER_LOOP_ITER = 8;
      var AA_INNER_LOOP_ITER = 3;
      var INITIAL_MODE = "INITIAL_MODE";
      var BEFORE_HTML_MODE = "BEFORE_HTML_MODE";
      var BEFORE_HEAD_MODE = "BEFORE_HEAD_MODE";
      var IN_HEAD_MODE = "IN_HEAD_MODE";
      var IN_HEAD_NO_SCRIPT_MODE = "IN_HEAD_NO_SCRIPT_MODE";
      var AFTER_HEAD_MODE = "AFTER_HEAD_MODE";
      var IN_BODY_MODE = "IN_BODY_MODE";
      var TEXT_MODE = "TEXT_MODE";
      var IN_TABLE_MODE = "IN_TABLE_MODE";
      var IN_TABLE_TEXT_MODE = "IN_TABLE_TEXT_MODE";
      var IN_CAPTION_MODE = "IN_CAPTION_MODE";
      var IN_COLUMN_GROUP_MODE = "IN_COLUMN_GROUP_MODE";
      var IN_TABLE_BODY_MODE = "IN_TABLE_BODY_MODE";
      var IN_ROW_MODE = "IN_ROW_MODE";
      var IN_CELL_MODE = "IN_CELL_MODE";
      var IN_SELECT_MODE = "IN_SELECT_MODE";
      var IN_SELECT_IN_TABLE_MODE = "IN_SELECT_IN_TABLE_MODE";
      var IN_TEMPLATE_MODE = "IN_TEMPLATE_MODE";
      var AFTER_BODY_MODE = "AFTER_BODY_MODE";
      var IN_FRAMESET_MODE = "IN_FRAMESET_MODE";
      var AFTER_FRAMESET_MODE = "AFTER_FRAMESET_MODE";
      var AFTER_AFTER_BODY_MODE = "AFTER_AFTER_BODY_MODE";
      var AFTER_AFTER_FRAMESET_MODE = "AFTER_AFTER_FRAMESET_MODE";
      var INSERTION_MODE_RESET_MAP = {
        [$.TR]: IN_ROW_MODE,
        [$.TBODY]: IN_TABLE_BODY_MODE,
        [$.THEAD]: IN_TABLE_BODY_MODE,
        [$.TFOOT]: IN_TABLE_BODY_MODE,
        [$.CAPTION]: IN_CAPTION_MODE,
        [$.COLGROUP]: IN_COLUMN_GROUP_MODE,
        [$.TABLE]: IN_TABLE_MODE,
        [$.BODY]: IN_BODY_MODE,
        [$.FRAMESET]: IN_FRAMESET_MODE
      };
      var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {
        [$.CAPTION]: IN_TABLE_MODE,
        [$.COLGROUP]: IN_TABLE_MODE,
        [$.TBODY]: IN_TABLE_MODE,
        [$.TFOOT]: IN_TABLE_MODE,
        [$.THEAD]: IN_TABLE_MODE,
        [$.COL]: IN_COLUMN_GROUP_MODE,
        [$.TR]: IN_TABLE_BODY_MODE,
        [$.TD]: IN_ROW_MODE,
        [$.TH]: IN_ROW_MODE
      };
      var TOKEN_HANDLERS = {
        [INITIAL_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInInitialMode,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: doctypeInInitialMode,
          [Tokenizer.START_TAG_TOKEN]: tokenInInitialMode,
          [Tokenizer.END_TAG_TOKEN]: tokenInInitialMode,
          [Tokenizer.EOF_TOKEN]: tokenInInitialMode
        },
        [BEFORE_HTML_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHtml,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagBeforeHtml,
          [Tokenizer.END_TAG_TOKEN]: endTagBeforeHtml,
          [Tokenizer.EOF_TOKEN]: tokenBeforeHtml
        },
        [BEFORE_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagBeforeHead,
          [Tokenizer.END_TAG_TOKEN]: endTagBeforeHead,
          [Tokenizer.EOF_TOKEN]: tokenBeforeHead
        },
        [IN_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagInHead,
          [Tokenizer.END_TAG_TOKEN]: endTagInHead,
          [Tokenizer.EOF_TOKEN]: tokenInHead
        },
        [IN_HEAD_NO_SCRIPT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInHeadNoScript,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagInHeadNoScript,
          [Tokenizer.END_TAG_TOKEN]: endTagInHeadNoScript,
          [Tokenizer.EOF_TOKEN]: tokenInHeadNoScript
        },
        [AFTER_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterHead,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterHead,
          [Tokenizer.EOF_TOKEN]: tokenAfterHead
        },
        [IN_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInBody,
          [Tokenizer.END_TAG_TOKEN]: endTagInBody,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [TEXT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: ignoreToken,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: ignoreToken,
          [Tokenizer.END_TAG_TOKEN]: endTagInText,
          [Tokenizer.EOF_TOKEN]: eofInText
        },
        [IN_TABLE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTable,
          [Tokenizer.END_TAG_TOKEN]: endTagInTable,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TABLE_TEXT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTableText,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
          [Tokenizer.COMMENT_TOKEN]: tokenInTableText,
          [Tokenizer.DOCTYPE_TOKEN]: tokenInTableText,
          [Tokenizer.START_TAG_TOKEN]: tokenInTableText,
          [Tokenizer.END_TAG_TOKEN]: tokenInTableText,
          [Tokenizer.EOF_TOKEN]: tokenInTableText
        },
        [IN_CAPTION_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInCaption,
          [Tokenizer.END_TAG_TOKEN]: endTagInCaption,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_COLUMN_GROUP_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInColumnGroup,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInColumnGroup,
          [Tokenizer.END_TAG_TOKEN]: endTagInColumnGroup,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TABLE_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTableBody,
          [Tokenizer.END_TAG_TOKEN]: endTagInTableBody,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_ROW_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInRow,
          [Tokenizer.END_TAG_TOKEN]: endTagInRow,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_CELL_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInCell,
          [Tokenizer.END_TAG_TOKEN]: endTagInCell,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_SELECT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInSelect,
          [Tokenizer.END_TAG_TOKEN]: endTagInSelect,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_SELECT_IN_TABLE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInSelectInTable,
          [Tokenizer.END_TAG_TOKEN]: endTagInSelectInTable,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TEMPLATE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTemplate,
          [Tokenizer.END_TAG_TOKEN]: endTagInTemplate,
          [Tokenizer.EOF_TOKEN]: eofInTemplate
        },
        [AFTER_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterBody,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterBody,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterBody,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [IN_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInFrameset,
          [Tokenizer.END_TAG_TOKEN]: endTagInFrameset,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterFrameset,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterFrameset,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_AFTER_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterBody,
          [Tokenizer.END_TAG_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_AFTER_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterFrameset,
          [Tokenizer.END_TAG_TOKEN]: ignoreToken,
          [Tokenizer.EOF_TOKEN]: stopParsing
        }
      };
      var Parser = class {
        constructor(options) {
          this.options = mergeOptions(DEFAULT_OPTIONS, options);
          this.treeAdapter = this.options.treeAdapter;
          this.pendingScript = null;
          if (this.options.sourceCodeLocationInfo) {
            Mixin.install(this, LocationInfoParserMixin);
          }
          if (this.options.onParseError) {
            Mixin.install(this, ErrorReportingParserMixin, { onParseError: this.options.onParseError });
          }
        }
        parse(html2) {
          const document2 = this.treeAdapter.createDocument();
          this._bootstrap(document2, null);
          this.tokenizer.write(html2, true);
          this._runParsingLoop(null);
          return document2;
        }
        parseFragment(html2, fragmentContext) {
          if (!fragmentContext) {
            fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);
          }
          const documentMock = this.treeAdapter.createElement("documentmock", NS.HTML, []);
          this._bootstrap(documentMock, fragmentContext);
          if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) {
            this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
          }
          this._initTokenizerForFragmentParsing();
          this._insertFakeRootElement();
          this._resetInsertionMode();
          this._findFormInFragmentContext();
          this.tokenizer.write(html2, true);
          this._runParsingLoop(null);
          const rootElement = this.treeAdapter.getFirstChild(documentMock);
          const fragment = this.treeAdapter.createDocumentFragment();
          this._adoptNodes(rootElement, fragment);
          return fragment;
        }
        _bootstrap(document2, fragmentContext) {
          this.tokenizer = new Tokenizer(this.options);
          this.stopped = false;
          this.insertionMode = INITIAL_MODE;
          this.originalInsertionMode = "";
          this.document = document2;
          this.fragmentContext = fragmentContext;
          this.headElement = null;
          this.formElement = null;
          this.openElements = new OpenElementStack(this.document, this.treeAdapter);
          this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
          this.tmplInsertionModeStack = [];
          this.tmplInsertionModeStackTop = -1;
          this.currentTmplInsertionMode = null;
          this.pendingCharacterTokens = [];
          this.hasNonWhitespacePendingCharacterToken = false;
          this.framesetOk = true;
          this.skipNextNewLine = false;
          this.fosterParentingEnabled = false;
        }
        _err() {
        }
        _runParsingLoop(scriptHandler) {
          while (!this.stopped) {
            this._setupTokenizerCDATAMode();
            const token = this.tokenizer.getNextToken();
            if (token.type === Tokenizer.HIBERNATION_TOKEN) {
              break;
            }
            if (this.skipNextNewLine) {
              this.skipNextNewLine = false;
              if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === "\n") {
                if (token.chars.length === 1) {
                  continue;
                }
                token.chars = token.chars.substr(1);
              }
            }
            this._processInputToken(token);
            if (scriptHandler && this.pendingScript) {
              break;
            }
          }
        }
        runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
          this._runParsingLoop(scriptHandler);
          if (scriptHandler && this.pendingScript) {
            const script = this.pendingScript;
            this.pendingScript = null;
            scriptHandler(script);
            return;
          }
          if (writeCallback) {
            writeCallback();
          }
        }
        _setupTokenizerCDATAMode() {
          const current = this._getAdjustedCurrentElement();
          this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
        }
        _switchToTextParsing(currentToken, nextTokenizerState) {
          this._insertElement(currentToken, NS.HTML);
          this.tokenizer.state = nextTokenizerState;
          this.originalInsertionMode = this.insertionMode;
          this.insertionMode = TEXT_MODE;
        }
        switchToPlaintextParsing() {
          this.insertionMode = TEXT_MODE;
          this.originalInsertionMode = IN_BODY_MODE;
          this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
        }
        _getAdjustedCurrentElement() {
          return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let node = this.fragmentContext;
          do {
            if (this.treeAdapter.getTagName(node) === $.FORM) {
              this.formElement = node;
              break;
            }
            node = this.treeAdapter.getParentNode(node);
          } while (node);
        }
        _initTokenizerForFragmentParsing() {
          if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
            const tn = this.treeAdapter.getTagName(this.fragmentContext);
            if (tn === $.TITLE || tn === $.TEXTAREA) {
              this.tokenizer.state = Tokenizer.MODE.RCDATA;
            } else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
              this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
            } else if (tn === $.SCRIPT) {
              this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
            } else if (tn === $.PLAINTEXT) {
              this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
            }
          }
        }
        _setDocumentType(token) {
          const name = token.name || "";
          const publicId = token.publicId || "";
          const systemId = token.systemId || "";
          this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        }
        _attachElementToTree(element) {
          if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(element);
          } else {
            const parent = this.openElements.currentTmplContent || this.openElements.current;
            this.treeAdapter.appendChild(parent, element);
          }
        }
        _appendElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element);
        }
        _insertElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element);
          this.openElements.push(element);
        }
        _insertFakeElement(tagName) {
          const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
          this._attachElementToTree(element);
          this.openElements.push(element);
        }
        _insertTemplate(token) {
          const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
          const content = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(tmpl, content);
          this._attachElementToTree(tmpl);
          this.openElements.push(tmpl);
        }
        _insertFakeRootElement() {
          const element = this.treeAdapter.createElement($.HTML, NS.HTML, []);
          this.treeAdapter.appendChild(this.openElements.current, element);
          this.openElements.push(element);
        }
        _appendCommentNode(token, parent) {
          const commentNode = this.treeAdapter.createCommentNode(token.data);
          this.treeAdapter.appendChild(parent, commentNode);
        }
        _insertCharacters(token) {
          if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentText(token.chars);
          } else {
            const parent = this.openElements.currentTmplContent || this.openElements.current;
            this.treeAdapter.insertText(parent, token.chars);
          }
        }
        _adoptNodes(donor, recipient2) {
          for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
            this.treeAdapter.detachNode(child);
            this.treeAdapter.appendChild(recipient2, child);
          }
        }
        _shouldProcessTokenInForeignContent(token) {
          const current = this._getAdjustedCurrentElement();
          if (!current || current === this.document) {
            return false;
          }
          const ns = this.treeAdapter.getNamespaceURI(current);
          if (ns === NS.HTML) {
            return false;
          }
          if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML && token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG) {
            return false;
          }
          const isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN || token.type === Tokenizer.NULL_CHARACTER_TOKEN || token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
          const isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN && token.tagName !== $.MGLYPH && token.tagName !== $.MALIGNMARK;
          if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) {
            return false;
          }
          if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML)) {
            return false;
          }
          return token.type !== Tokenizer.EOF_TOKEN;
        }
        _processToken(token) {
          TOKEN_HANDLERS[this.insertionMode][token.type](this, token);
        }
        _processTokenInBodyMode(token) {
          TOKEN_HANDLERS[IN_BODY_MODE][token.type](this, token);
        }
        _processTokenInForeignContent(token) {
          if (token.type === Tokenizer.CHARACTER_TOKEN) {
            characterInForeignContent(this, token);
          } else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
            nullCharacterInForeignContent(this, token);
          } else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
            insertCharacters(this, token);
          } else if (token.type === Tokenizer.COMMENT_TOKEN) {
            appendComment(this, token);
          } else if (token.type === Tokenizer.START_TAG_TOKEN) {
            startTagInForeignContent(this, token);
          } else if (token.type === Tokenizer.END_TAG_TOKEN) {
            endTagInForeignContent(this, token);
          }
        }
        _processInputToken(token) {
          if (this._shouldProcessTokenInForeignContent(token)) {
            this._processTokenInForeignContent(token);
          } else {
            this._processToken(token);
          }
          if (token.type === Tokenizer.START_TAG_TOKEN && token.selfClosing && !token.ackSelfClosing) {
            this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
          }
        }
        _isIntegrationPoint(element, foreignNS) {
          const tn = this.treeAdapter.getTagName(element);
          const ns = this.treeAdapter.getNamespaceURI(element);
          const attrs = this.treeAdapter.getAttrList(element);
          return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
        }
        _reconstructActiveFormattingElements() {
          const listLength = this.activeFormattingElements.length;
          if (listLength) {
            let unopenIdx = listLength;
            let entry = null;
            do {
              unopenIdx--;
              entry = this.activeFormattingElements.entries[unopenIdx];
              if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
                unopenIdx++;
                break;
              }
            } while (unopenIdx > 0);
            for (let i = unopenIdx; i < listLength; i++) {
              entry = this.activeFormattingElements.entries[i];
              this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
              entry.element = this.openElements.current;
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags();
          this.openElements.popUntilTableCellPopped();
          this.activeFormattingElements.clearToLastMarker();
          this.insertionMode = IN_ROW_MODE;
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion($.P);
          this.openElements.popUntilTagNamePopped($.P);
        }
        _resetInsertionMode() {
          for (let i = this.openElements.stackTop, last = false; i >= 0; i--) {
            let element = this.openElements.items[i];
            if (i === 0) {
              last = true;
              if (this.fragmentContext) {
                element = this.fragmentContext;
              }
            }
            const tn = this.treeAdapter.getTagName(element);
            const newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
            if (newInsertionMode) {
              this.insertionMode = newInsertionMode;
              break;
            } else if (!last && (tn === $.TD || tn === $.TH)) {
              this.insertionMode = IN_CELL_MODE;
              break;
            } else if (!last && tn === $.HEAD) {
              this.insertionMode = IN_HEAD_MODE;
              break;
            } else if (tn === $.SELECT) {
              this._resetInsertionModeForSelect(i);
              break;
            } else if (tn === $.TEMPLATE) {
              this.insertionMode = this.currentTmplInsertionMode;
              break;
            } else if (tn === $.HTML) {
              this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
              break;
            } else if (last) {
              this.insertionMode = IN_BODY_MODE;
              break;
            }
          }
        }
        _resetInsertionModeForSelect(selectIdx) {
          if (selectIdx > 0) {
            for (let i = selectIdx - 1; i > 0; i--) {
              const ancestor = this.openElements.items[i];
              const tn = this.treeAdapter.getTagName(ancestor);
              if (tn === $.TEMPLATE) {
                break;
              } else if (tn === $.TABLE) {
                this.insertionMode = IN_SELECT_IN_TABLE_MODE;
                return;
              }
            }
          }
          this.insertionMode = IN_SELECT_MODE;
        }
        _pushTmplInsertionMode(mode) {
          this.tmplInsertionModeStack.push(mode);
          this.tmplInsertionModeStackTop++;
          this.currentTmplInsertionMode = mode;
        }
        _popTmplInsertionMode() {
          this.tmplInsertionModeStack.pop();
          this.tmplInsertionModeStackTop--;
          this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
        }
        _isElementCausesFosterParenting(element) {
          const tn = this.treeAdapter.getTagName(element);
          return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
        }
        _shouldFosterParentOnInsertion() {
          return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
        }
        _findFosterParentingLocation() {
          const location = {
            parent: null,
            beforeElement: null
          };
          for (let i = this.openElements.stackTop; i >= 0; i--) {
            const openElement = this.openElements.items[i];
            const tn = this.treeAdapter.getTagName(openElement);
            const ns = this.treeAdapter.getNamespaceURI(openElement);
            if (tn === $.TEMPLATE && ns === NS.HTML) {
              location.parent = this.treeAdapter.getTemplateContent(openElement);
              break;
            } else if (tn === $.TABLE) {
              location.parent = this.treeAdapter.getParentNode(openElement);
              if (location.parent) {
                location.beforeElement = openElement;
              } else {
                location.parent = this.openElements.items[i - 1];
              }
              break;
            }
          }
          if (!location.parent) {
            location.parent = this.openElements.items[0];
          }
          return location;
        }
        _fosterParentElement(element) {
          const location = this._findFosterParentingLocation();
          if (location.beforeElement) {
            this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
          } else {
            this.treeAdapter.appendChild(location.parent, element);
          }
        }
        _fosterParentText(chars) {
          const location = this._findFosterParentingLocation();
          if (location.beforeElement) {
            this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
          } else {
            this.treeAdapter.insertText(location.parent, chars);
          }
        }
        _isSpecialElement(element) {
          const tn = this.treeAdapter.getTagName(element);
          const ns = this.treeAdapter.getNamespaceURI(element);
          return HTML.SPECIAL_ELEMENTS[ns][tn];
        }
      };
      module.exports = Parser;
      function aaObtainFormattingElementEntry(p, token) {
        let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
        if (formattingElementEntry) {
          if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
          } else if (!p.openElements.hasInScope(token.tagName)) {
            formattingElementEntry = null;
          }
        } else {
          genericEndTagInBody(p, token);
        }
        return formattingElementEntry;
      }
      function aaObtainFurthestBlock(p, formattingElementEntry) {
        let furthestBlock = null;
        for (let i = p.openElements.stackTop; i >= 0; i--) {
          const element = p.openElements.items[i];
          if (element === formattingElementEntry.element) {
            break;
          }
          if (p._isSpecialElement(element)) {
            furthestBlock = element;
          }
        }
        if (!furthestBlock) {
          p.openElements.popUntilElementPopped(formattingElementEntry.element);
          p.activeFormattingElements.removeEntry(formattingElementEntry);
        }
        return furthestBlock;
      }
      function aaInnerLoop(p, furthestBlock, formattingElement) {
        let lastElement = furthestBlock;
        let nextElement = p.openElements.getCommonAncestor(furthestBlock);
        for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
          nextElement = p.openElements.getCommonAncestor(element);
          const elementEntry = p.activeFormattingElements.getElementEntry(element);
          const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
          const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
          if (shouldRemoveFromOpenElements) {
            if (counterOverflow) {
              p.activeFormattingElements.removeEntry(elementEntry);
            }
            p.openElements.remove(element);
          } else {
            element = aaRecreateElementFromEntry(p, elementEntry);
            if (lastElement === furthestBlock) {
              p.activeFormattingElements.bookmark = elementEntry;
            }
            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
          }
        }
        return lastElement;
      }
      function aaRecreateElementFromEntry(p, elementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
        const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
        p.openElements.replace(elementEntry.element, newElement);
        elementEntry.element = newElement;
        return newElement;
      }
      function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
        if (p._isElementCausesFosterParenting(commonAncestor)) {
          p._fosterParentElement(lastElement);
        } else {
          const tn = p.treeAdapter.getTagName(commonAncestor);
          const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
          if (tn === $.TEMPLATE && ns === NS.HTML) {
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
          }
          p.treeAdapter.appendChild(commonAncestor, lastElement);
        }
      }
      function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
        const token = formattingElementEntry.token;
        const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
        p._adoptNodes(furthestBlock, newElement);
        p.treeAdapter.appendChild(furthestBlock, newElement);
        p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
        p.openElements.remove(formattingElementEntry.element);
        p.openElements.insertAfter(furthestBlock, newElement);
      }
      function callAdoptionAgency(p, token) {
        let formattingElementEntry;
        for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
          formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);
          if (!formattingElementEntry) {
            break;
          }
          const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
          if (!furthestBlock) {
            break;
          }
          p.activeFormattingElements.bookmark = formattingElementEntry;
          const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
          const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
          p.treeAdapter.detachNode(lastElement);
          aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
          aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
        }
      }
      function ignoreToken() {
      }
      function misplacedDoctype(p) {
        p._err(ERR.misplacedDoctype);
      }
      function appendComment(p, token) {
        p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
      }
      function appendCommentToRootHtmlElement(p, token) {
        p._appendCommentNode(token, p.openElements.items[0]);
      }
      function appendCommentToDocument(p, token) {
        p._appendCommentNode(token, p.document);
      }
      function insertCharacters(p, token) {
        p._insertCharacters(token);
      }
      function stopParsing(p) {
        p.stopped = true;
      }
      function doctypeInInitialMode(p, token) {
        p._setDocumentType(token);
        const mode = token.forceQuirks ? HTML.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
        if (!doctype.isConforming(token)) {
          p._err(ERR.nonConformingDoctype);
        }
        p.treeAdapter.setDocumentMode(p.document, mode);
        p.insertionMode = BEFORE_HTML_MODE;
      }
      function tokenInInitialMode(p, token) {
        p._err(ERR.missingDoctype, { beforeToken: true });
        p.treeAdapter.setDocumentMode(p.document, HTML.DOCUMENT_MODE.QUIRKS);
        p.insertionMode = BEFORE_HTML_MODE;
        p._processToken(token);
      }
      function startTagBeforeHtml(p, token) {
        if (token.tagName === $.HTML) {
          p._insertElement(token, NS.HTML);
          p.insertionMode = BEFORE_HEAD_MODE;
        } else {
          tokenBeforeHtml(p, token);
        }
      }
      function endTagBeforeHtml(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) {
          tokenBeforeHtml(p, token);
        }
      }
      function tokenBeforeHtml(p, token) {
        p._insertFakeRootElement();
        p.insertionMode = BEFORE_HEAD_MODE;
        p._processToken(token);
      }
      function startTagBeforeHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.HEAD) {
          p._insertElement(token, NS.HTML);
          p.headElement = p.openElements.current;
          p.insertionMode = IN_HEAD_MODE;
        } else {
          tokenBeforeHead(p, token);
        }
      }
      function endTagBeforeHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) {
          tokenBeforeHead(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenBeforeHead(p, token) {
        p._insertFakeElement($.HEAD);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
        p._processToken(token);
      }
      function startTagInHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.TITLE) {
          p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);
        } else if (tn === $.NOSCRIPT) {
          if (p.options.scriptingEnabled) {
            p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
          } else {
            p._insertElement(token, NS.HTML);
            p.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
          }
        } else if (tn === $.NOFRAMES || tn === $.STYLE) {
          p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
        } else if (tn === $.SCRIPT) {
          p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);
        } else if (tn === $.TEMPLATE) {
          p._insertTemplate(token, NS.HTML);
          p.activeFormattingElements.insertMarker();
          p.framesetOk = false;
          p.insertionMode = IN_TEMPLATE_MODE;
          p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
        } else if (tn === $.HEAD) {
          p._err(ERR.misplacedStartTagForHeadElement);
        } else {
          tokenInHead(p, token);
        }
      }
      function endTagInHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HEAD) {
          p.openElements.pop();
          p.insertionMode = AFTER_HEAD_MODE;
        } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) {
          tokenInHead(p, token);
        } else if (tn === $.TEMPLATE) {
          if (p.openElements.tmplCount > 0) {
            p.openElements.generateImpliedEndTagsThoroughly();
            if (p.openElements.currentTagName !== $.TEMPLATE) {
              p._err(ERR.closingOfElementWithOpenChildElements);
            }
            p.openElements.popUntilTagNamePopped($.TEMPLATE);
            p.activeFormattingElements.clearToLastMarker();
            p._popTmplInsertionMode();
            p._resetInsertionMode();
          } else {
            p._err(ERR.endTagWithoutMatchingOpenElement);
          }
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHead(p, token) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
        p._processToken(token);
      }
      function startTagInHeadNoScript(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BASEFONT || tn === $.BGSOUND || tn === $.HEAD || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.STYLE) {
          startTagInHead(p, token);
        } else if (tn === $.NOSCRIPT) {
          p._err(ERR.nestedNoscriptInHead);
        } else {
          tokenInHeadNoScript(p, token);
        }
      }
      function endTagInHeadNoScript(p, token) {
        const tn = token.tagName;
        if (tn === $.NOSCRIPT) {
          p.openElements.pop();
          p.insertionMode = IN_HEAD_MODE;
        } else if (tn === $.BR) {
          tokenInHeadNoScript(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHeadNoScript(p, token) {
        const errCode = token.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
        p._err(errCode);
        p.openElements.pop();
        p.insertionMode = IN_HEAD_MODE;
        p._processToken(token);
      }
      function startTagAfterHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BODY) {
          p._insertElement(token, NS.HTML);
          p.framesetOk = false;
          p.insertionMode = IN_BODY_MODE;
        } else if (tn === $.FRAMESET) {
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_FRAMESET_MODE;
        } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
          p._err(ERR.abandonedHeadElementChild);
          p.openElements.push(p.headElement);
          startTagInHead(p, token);
          p.openElements.remove(p.headElement);
        } else if (tn === $.HEAD) {
          p._err(ERR.misplacedStartTagForHeadElement);
        } else {
          tokenAfterHead(p, token);
        }
      }
      function endTagAfterHead(p, token) {
        const tn = token.tagName;
        if (tn === $.BODY || tn === $.HTML || tn === $.BR) {
          tokenAfterHead(p, token);
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenAfterHead(p, token) {
        p._insertFakeElement($.BODY);
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function whitespaceCharacterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
      }
      function characterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function htmlStartTagInBody(p, token) {
        if (p.openElements.tmplCount === 0) {
          p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
        }
      }
      function bodyStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (bodyElement && p.openElements.tmplCount === 0) {
          p.framesetOk = false;
          p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
        }
      }
      function framesetStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (p.framesetOk && bodyElement) {
          p.treeAdapter.detachNode(bodyElement);
          p.openElements.popAllUpToHtmlElement();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_FRAMESET_MODE;
        }
      }
      function addressStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function numberedHeaderStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        const tn = p.openElements.currentTagName;
        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
          p.openElements.pop();
        }
        p._insertElement(token, NS.HTML);
      }
      function preStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.skipNextNewLine = true;
        p.framesetOk = false;
      }
      function formStartTagInBody(p, token) {
        const inTemplate = p.openElements.tmplCount > 0;
        if (!p.formElement || inTemplate) {
          if (p.openElements.hasInButtonScope($.P)) {
            p._closePElement();
          }
          p._insertElement(token, NS.HTML);
          if (!inTemplate) {
            p.formElement = p.openElements.current;
          }
        }
      }
      function listItemStartTagInBody(p, token) {
        p.framesetOk = false;
        const tn = token.tagName;
        for (let i = p.openElements.stackTop; i >= 0; i--) {
          const element = p.openElements.items[i];
          const elementTn = p.treeAdapter.getTagName(element);
          let closeTn = null;
          if (tn === $.LI && elementTn === $.LI) {
            closeTn = $.LI;
          } else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) {
            closeTn = elementTn;
          }
          if (closeTn) {
            p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
            p.openElements.popUntilTagNamePopped(closeTn);
            break;
          }
          if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element)) {
            break;
          }
        }
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function plaintextStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
      }
      function buttonStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.BUTTON)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.BUTTON);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
      }
      function aStartTagInBody(p, token) {
        const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);
        if (activeElementEntry) {
          callAdoptionAgency(p, token);
          p.openElements.remove(activeElementEntry.element);
          p.activeFormattingElements.removeEntry(activeElementEntry);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function bStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function nobrStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        if (p.openElements.hasInScope($.NOBR)) {
          callAdoptionAgency(p, token);
          p._reconstructActiveFormattingElements();
        }
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function appletStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
      }
      function tableStartTagInBody(p, token) {
        if (p.treeAdapter.getDocumentMode(p.document) !== HTML.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_TABLE_MODE;
      }
      function areaStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function inputStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, NS.HTML);
        const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
        if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
          p.framesetOk = false;
        }
        token.ackSelfClosing = true;
      }
      function paramStartTagInBody(p, token) {
        p._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      }
      function hrStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._appendElement(token, NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function imageStartTagInBody(p, token) {
        token.tagName = $.IMG;
        areaStartTagInBody(p, token);
      }
      function textareaStartTagInBody(p, token) {
        p._insertElement(token, NS.HTML);
        p.skipNextNewLine = true;
        p.tokenizer.state = Tokenizer.MODE.RCDATA;
        p.originalInsertionMode = p.insertionMode;
        p.framesetOk = false;
        p.insertionMode = TEXT_MODE;
      }
      function xmpStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._reconstructActiveFormattingElements();
        p.framesetOk = false;
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function iframeStartTagInBody(p, token) {
        p.framesetOk = false;
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function noembedStartTagInBody(p, token) {
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function selectStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE) {
          p.insertionMode = IN_SELECT_IN_TABLE_MODE;
        } else {
          p.insertionMode = IN_SELECT_MODE;
        }
      }
      function optgroupStartTagInBody(p, token) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
      }
      function rbStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.RUBY)) {
          p.openElements.generateImpliedEndTags();
        }
        p._insertElement(token, NS.HTML);
      }
      function rtStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.RUBY)) {
          p.openElements.generateImpliedEndTagsWithExclusion($.RTC);
        }
        p._insertElement(token, NS.HTML);
      }
      function menuStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function mathStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenMathMLAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, NS.MATHML);
        } else {
          p._insertElement(token, NS.MATHML);
        }
        token.ackSelfClosing = true;
      }
      function svgStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenSVGAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, NS.SVG);
        } else {
          p._insertElement(token, NS.SVG);
        }
        token.ackSelfClosing = true;
      }
      function genericStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
      }
      function startTagInBody(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 1:
            if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) {
              bStartTagInBody(p, token);
            } else if (tn === $.P) {
              addressStartTagInBody(p, token);
            } else if (tn === $.A) {
              aStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 2:
            if (tn === $.DL || tn === $.OL || tn === $.UL) {
              addressStartTagInBody(p, token);
            } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
              numberedHeaderStartTagInBody(p, token);
            } else if (tn === $.LI || tn === $.DD || tn === $.DT) {
              listItemStartTagInBody(p, token);
            } else if (tn === $.EM || tn === $.TT) {
              bStartTagInBody(p, token);
            } else if (tn === $.BR) {
              areaStartTagInBody(p, token);
            } else if (tn === $.HR) {
              hrStartTagInBody(p, token);
            } else if (tn === $.RB) {
              rbStartTagInBody(p, token);
            } else if (tn === $.RT || tn === $.RP) {
              rtStartTagInBody(p, token);
            } else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) {
              genericStartTagInBody(p, token);
            }
            break;
          case 3:
            if (tn === $.DIV || tn === $.DIR || tn === $.NAV) {
              addressStartTagInBody(p, token);
            } else if (tn === $.PRE) {
              preStartTagInBody(p, token);
            } else if (tn === $.BIG) {
              bStartTagInBody(p, token);
            } else if (tn === $.IMG || tn === $.WBR) {
              areaStartTagInBody(p, token);
            } else if (tn === $.XMP) {
              xmpStartTagInBody(p, token);
            } else if (tn === $.SVG) {
              svgStartTagInBody(p, token);
            } else if (tn === $.RTC) {
              rbStartTagInBody(p, token);
            } else if (tn !== $.COL) {
              genericStartTagInBody(p, token);
            }
            break;
          case 4:
            if (tn === $.HTML) {
              htmlStartTagInBody(p, token);
            } else if (tn === $.BASE || tn === $.LINK || tn === $.META) {
              startTagInHead(p, token);
            } else if (tn === $.BODY) {
              bodyStartTagInBody(p, token);
            } else if (tn === $.MAIN || tn === $.MENU) {
              addressStartTagInBody(p, token);
            } else if (tn === $.FORM) {
              formStartTagInBody(p, token);
            } else if (tn === $.CODE || tn === $.FONT) {
              bStartTagInBody(p, token);
            } else if (tn === $.NOBR) {
              nobrStartTagInBody(p, token);
            } else if (tn === $.AREA) {
              areaStartTagInBody(p, token);
            } else if (tn === $.MATH) {
              mathStartTagInBody(p, token);
            } else if (tn === $.MENU) {
              menuStartTagInBody(p, token);
            } else if (tn !== $.HEAD) {
              genericStartTagInBody(p, token);
            }
            break;
          case 5:
            if (tn === $.STYLE || tn === $.TITLE) {
              startTagInHead(p, token);
            } else if (tn === $.ASIDE) {
              addressStartTagInBody(p, token);
            } else if (tn === $.SMALL) {
              bStartTagInBody(p, token);
            } else if (tn === $.TABLE) {
              tableStartTagInBody(p, token);
            } else if (tn === $.EMBED) {
              areaStartTagInBody(p, token);
            } else if (tn === $.INPUT) {
              inputStartTagInBody(p, token);
            } else if (tn === $.PARAM || tn === $.TRACK) {
              paramStartTagInBody(p, token);
            } else if (tn === $.IMAGE) {
              imageStartTagInBody(p, token);
            } else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) {
              genericStartTagInBody(p, token);
            }
            break;
          case 6:
            if (tn === $.SCRIPT) {
              startTagInHead(p, token);
            } else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
              addressStartTagInBody(p, token);
            } else if (tn === $.BUTTON) {
              buttonStartTagInBody(p, token);
            } else if (tn === $.STRIKE || tn === $.STRONG) {
              bStartTagInBody(p, token);
            } else if (tn === $.APPLET || tn === $.OBJECT) {
              appletStartTagInBody(p, token);
            } else if (tn === $.KEYGEN) {
              areaStartTagInBody(p, token);
            } else if (tn === $.SOURCE) {
              paramStartTagInBody(p, token);
            } else if (tn === $.IFRAME) {
              iframeStartTagInBody(p, token);
            } else if (tn === $.SELECT) {
              selectStartTagInBody(p, token);
            } else if (tn === $.OPTION) {
              optgroupStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 7:
            if (tn === $.BGSOUND) {
              startTagInHead(p, token);
            } else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) {
              addressStartTagInBody(p, token);
            } else if (tn === $.LISTING) {
              preStartTagInBody(p, token);
            } else if (tn === $.MARQUEE) {
              appletStartTagInBody(p, token);
            } else if (tn === $.NOEMBED) {
              noembedStartTagInBody(p, token);
            } else if (tn !== $.CAPTION) {
              genericStartTagInBody(p, token);
            }
            break;
          case 8:
            if (tn === $.BASEFONT) {
              startTagInHead(p, token);
            } else if (tn === $.FRAMESET) {
              framesetStartTagInBody(p, token);
            } else if (tn === $.FIELDSET) {
              addressStartTagInBody(p, token);
            } else if (tn === $.TEXTAREA) {
              textareaStartTagInBody(p, token);
            } else if (tn === $.TEMPLATE) {
              startTagInHead(p, token);
            } else if (tn === $.NOSCRIPT) {
              if (p.options.scriptingEnabled) {
                noembedStartTagInBody(p, token);
              } else {
                genericStartTagInBody(p, token);
              }
            } else if (tn === $.OPTGROUP) {
              optgroupStartTagInBody(p, token);
            } else if (tn !== $.COLGROUP) {
              genericStartTagInBody(p, token);
            }
            break;
          case 9:
            if (tn === $.PLAINTEXT) {
              plaintextStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
              addressStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          default:
            genericStartTagInBody(p, token);
        }
      }
      function bodyEndTagInBody(p) {
        if (p.openElements.hasInScope($.BODY)) {
          p.insertionMode = AFTER_BODY_MODE;
        }
      }
      function htmlEndTagInBody(p, token) {
        if (p.openElements.hasInScope($.BODY)) {
          p.insertionMode = AFTER_BODY_MODE;
          p._processToken(token);
        }
      }
      function addressEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function formEndTagInBody(p) {
        const inTemplate = p.openElements.tmplCount > 0;
        const formElement = p.formElement;
        if (!inTemplate) {
          p.formElement = null;
        }
        if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
          p.openElements.generateImpliedEndTags();
          if (inTemplate) {
            p.openElements.popUntilTagNamePopped($.FORM);
          } else {
            p.openElements.remove(formElement);
          }
        }
      }
      function pEndTagInBody(p) {
        if (!p.openElements.hasInButtonScope($.P)) {
          p._insertFakeElement($.P);
        }
        p._closePElement();
      }
      function liEndTagInBody(p) {
        if (p.openElements.hasInListItemScope($.LI)) {
          p.openElements.generateImpliedEndTagsWithExclusion($.LI);
          p.openElements.popUntilTagNamePopped($.LI);
        }
      }
      function ddEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tn);
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function numberedHeaderEndTagInBody(p) {
        if (p.openElements.hasNumberedHeaderInScope()) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilNumberedHeaderPopped();
        }
      }
      function appletEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
          p.activeFormattingElements.clearToLastMarker();
        }
      }
      function brEndTagInBody(p) {
        p._reconstructActiveFormattingElements();
        p._insertFakeElement($.BR);
        p.openElements.pop();
        p.framesetOk = false;
      }
      function genericEndTagInBody(p, token) {
        const tn = token.tagName;
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          if (p.treeAdapter.getTagName(element) === tn) {
            p.openElements.generateImpliedEndTagsWithExclusion(tn);
            p.openElements.popUntilElementPopped(element);
            break;
          }
          if (p._isSpecialElement(element)) {
            break;
          }
        }
      }
      function endTagInBody(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 1:
            if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) {
              callAdoptionAgency(p, token);
            } else if (tn === $.P) {
              pEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 2:
            if (tn === $.DL || tn === $.UL || tn === $.OL) {
              addressEndTagInBody(p, token);
            } else if (tn === $.LI) {
              liEndTagInBody(p, token);
            } else if (tn === $.DD || tn === $.DT) {
              ddEndTagInBody(p, token);
            } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
              numberedHeaderEndTagInBody(p, token);
            } else if (tn === $.BR) {
              brEndTagInBody(p, token);
            } else if (tn === $.EM || tn === $.TT) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 3:
            if (tn === $.BIG) {
              callAdoptionAgency(p, token);
            } else if (tn === $.DIR || tn === $.DIV || tn === $.NAV || tn === $.PRE) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 4:
            if (tn === $.BODY) {
              bodyEndTagInBody(p, token);
            } else if (tn === $.HTML) {
              htmlEndTagInBody(p, token);
            } else if (tn === $.FORM) {
              formEndTagInBody(p, token);
            } else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) {
              callAdoptionAgency(p, token);
            } else if (tn === $.MAIN || tn === $.MENU) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 5:
            if (tn === $.ASIDE) {
              addressEndTagInBody(p, token);
            } else if (tn === $.SMALL) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 6:
            if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
              addressEndTagInBody(p, token);
            } else if (tn === $.APPLET || tn === $.OBJECT) {
              appletEndTagInBody(p, token);
            } else if (tn === $.STRIKE || tn === $.STRONG) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 7:
            if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY || tn === $.LISTING) {
              addressEndTagInBody(p, token);
            } else if (tn === $.MARQUEE) {
              appletEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 8:
            if (tn === $.FIELDSET) {
              addressEndTagInBody(p, token);
            } else if (tn === $.TEMPLATE) {
              endTagInHead(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          default:
            genericEndTagInBody(p, token);
        }
      }
      function eofInBody(p, token) {
        if (p.tmplInsertionModeStackTop > -1) {
          eofInTemplate(p, token);
        } else {
          p.stopped = true;
        }
      }
      function endTagInText(p, token) {
        if (token.tagName === $.SCRIPT) {
          p.pendingScript = p.openElements.current;
        }
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
      }
      function eofInText(p, token) {
        p._err(ERR.eofInElementThatCanContainOnlyText);
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
        p._processToken(token);
      }
      function characterInTable(p, token) {
        const curTn = p.openElements.currentTagName;
        if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
          p.pendingCharacterTokens = [];
          p.hasNonWhitespacePendingCharacterToken = false;
          p.originalInsertionMode = p.insertionMode;
          p.insertionMode = IN_TABLE_TEXT_MODE;
          p._processToken(token);
        } else {
          tokenInTable(p, token);
        }
      }
      function captionStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p.activeFormattingElements.insertMarker();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_CAPTION_MODE;
      }
      function colgroupStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_COLUMN_GROUP_MODE;
      }
      function colStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement($.COLGROUP);
        p.insertionMode = IN_COLUMN_GROUP_MODE;
        p._processToken(token);
      }
      function tbodyStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_TABLE_BODY_MODE;
      }
      function tdStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement($.TBODY);
        p.insertionMode = IN_TABLE_BODY_MODE;
        p._processToken(token);
      }
      function tableStartTagInTable(p, token) {
        if (p.openElements.hasInTableScope($.TABLE)) {
          p.openElements.popUntilTagNamePopped($.TABLE);
          p._resetInsertionMode();
          p._processToken(token);
        }
      }
      function inputStartTagInTable(p, token) {
        const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
        if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
          p._appendElement(token, NS.HTML);
        } else {
          tokenInTable(p, token);
        }
        token.ackSelfClosing = true;
      }
      function formStartTagInTable(p, token) {
        if (!p.formElement && p.openElements.tmplCount === 0) {
          p._insertElement(token, NS.HTML);
          p.formElement = p.openElements.current;
          p.openElements.pop();
        }
      }
      function startTagInTable(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 2:
            if (tn === $.TD || tn === $.TH || tn === $.TR) {
              tdStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 3:
            if (tn === $.COL) {
              colStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 4:
            if (tn === $.FORM) {
              formStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 5:
            if (tn === $.TABLE) {
              tableStartTagInTable(p, token);
            } else if (tn === $.STYLE) {
              startTagInHead(p, token);
            } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
              tbodyStartTagInTable(p, token);
            } else if (tn === $.INPUT) {
              inputStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 6:
            if (tn === $.SCRIPT) {
              startTagInHead(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 7:
            if (tn === $.CAPTION) {
              captionStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 8:
            if (tn === $.COLGROUP) {
              colgroupStartTagInTable(p, token);
            } else if (tn === $.TEMPLATE) {
              startTagInHead(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          default:
            tokenInTable(p, token);
        }
      }
      function endTagInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.TABLE)) {
            p.openElements.popUntilTagNamePopped($.TABLE);
            p._resetInsertionMode();
          }
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
          tokenInTable(p, token);
        }
      }
      function tokenInTable(p, token) {
        const savedFosterParentingState = p.fosterParentingEnabled;
        p.fosterParentingEnabled = true;
        p._processTokenInBodyMode(token);
        p.fosterParentingEnabled = savedFosterParentingState;
      }
      function whitespaceCharacterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
      }
      function characterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
        p.hasNonWhitespacePendingCharacterToken = true;
      }
      function tokenInTableText(p, token) {
        let i = 0;
        if (p.hasNonWhitespacePendingCharacterToken) {
          for (; i < p.pendingCharacterTokens.length; i++) {
            tokenInTable(p, p.pendingCharacterTokens[i]);
          }
        } else {
          for (; i < p.pendingCharacterTokens.length; i++) {
            p._insertCharacters(p.pendingCharacterTokens[i]);
          }
        }
        p.insertionMode = p.originalInsertionMode;
        p._processToken(token);
      }
      function startTagInCaption(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCaption(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
            if (tn === $.TABLE) {
              p._processToken(token);
            }
          }
        } else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
          endTagInBody(p, token);
        }
      }
      function startTagInColumnGroup(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.COL) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.TEMPLATE) {
          startTagInHead(p, token);
        } else {
          tokenInColumnGroup(p, token);
        }
      }
      function endTagInColumnGroup(p, token) {
        const tn = token.tagName;
        if (tn === $.COLGROUP) {
          if (p.openElements.currentTagName === $.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
          }
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else if (tn !== $.COL) {
          tokenInColumnGroup(p, token);
        }
      }
      function tokenInColumnGroup(p, token) {
        if (p.openElements.currentTagName === $.COLGROUP) {
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token);
        }
      }
      function startTagInTableBody(p, token) {
        const tn = token.tagName;
        if (tn === $.TR) {
          p.openElements.clearBackToTableBodyContext();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_ROW_MODE;
        } else if (tn === $.TH || tn === $.TD) {
          p.openElements.clearBackToTableBodyContext();
          p._insertFakeElement($.TR);
          p.insertionMode = IN_ROW_MODE;
          p._processToken(token);
        } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else {
          startTagInTable(p, token);
        }
      }
      function endTagInTableBody(p, token) {
        const tn = token.tagName;
        if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
          }
        } else if (tn === $.TABLE) {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) {
          endTagInTable(p, token);
        }
      }
      function startTagInRow(p, token) {
        const tn = token.tagName;
        if (tn === $.TH || tn === $.TD) {
          p.openElements.clearBackToTableRowContext();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_CELL_MODE;
          p.activeFormattingElements.insertMarker();
        } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else {
          startTagInTable(p, token);
        }
      }
      function endTagInRow(p, token) {
        const tn = token.tagName;
        if (tn === $.TR) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
          }
        } else if (tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH) {
          endTagInTable(p, token);
        }
      }
      function startTagInCell(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
            p._closeTableCell();
            p._processToken(token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCell(p, token) {
        const tn = token.tagName;
        if (tn === $.TD || tn === $.TH) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_ROW_MODE;
          }
        } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) {
          endTagInBody(p, token);
        }
      }
      function startTagInSelect(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.OPTION) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
          p._insertElement(token, NS.HTML);
        } else if (tn === $.OPTGROUP) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagName === $.OPTGROUP) {
            p.openElements.pop();
          }
          p._insertElement(token, NS.HTML);
        } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
          if (p.openElements.hasInSelectScope($.SELECT)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();
            if (tn !== $.SELECT) {
              p._processToken(token);
            }
          }
        } else if (tn === $.SCRIPT || tn === $.TEMPLATE) {
          startTagInHead(p, token);
        }
      }
      function endTagInSelect(p, token) {
        const tn = token.tagName;
        if (tn === $.OPTGROUP) {
          const prevOpenElement = p.openElements.items[p.openElements.stackTop - 1];
          const prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
          if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagName === $.OPTGROUP) {
            p.openElements.pop();
          }
        } else if (tn === $.OPTION) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
        } else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        }
      }
      function startTagInSelectInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          p._processToken(token);
        } else {
          startTagInSelect(p, token);
        }
      }
      function endTagInSelectInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();
            p._processToken(token);
          }
        } else {
          endTagInSelect(p, token);
        }
      }
      function startTagInTemplate(p, token) {
        const tn = token.tagName;
        if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
          startTagInHead(p, token);
        } else {
          const newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
          p._popTmplInsertionMode();
          p._pushTmplInsertionMode(newInsertionMode);
          p.insertionMode = newInsertionMode;
          p._processToken(token);
        }
      }
      function endTagInTemplate(p, token) {
        if (token.tagName === $.TEMPLATE) {
          endTagInHead(p, token);
        }
      }
      function eofInTemplate(p, token) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.popUntilTagNamePopped($.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p._popTmplInsertionMode();
          p._resetInsertionMode();
          p._processToken(token);
        } else {
          p.stopped = true;
        }
      }
      function startTagAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterBody(p, token);
        }
      }
      function endTagAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          if (!p.fragmentContext) {
            p.insertionMode = AFTER_AFTER_BODY_MODE;
          }
        } else {
          tokenAfterBody(p, token);
        }
      }
      function tokenAfterBody(p, token) {
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function startTagInFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.FRAMESET) {
          p._insertElement(token, NS.HTML);
        } else if (tn === $.FRAME) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function endTagInFrameset(p, token) {
        if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
          p.openElements.pop();
          if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET) {
            p.insertionMode = AFTER_FRAMESET_MODE;
          }
        }
      }
      function startTagAfterFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function endTagAfterFrameset(p, token) {
        if (token.tagName === $.HTML) {
          p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
        }
      }
      function startTagAfterAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterAfterBody(p, token);
        }
      }
      function tokenAfterAfterBody(p, token) {
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function startTagAfterAfterFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function nullCharacterInForeignContent(p, token) {
        token.chars = unicode.REPLACEMENT_CHARACTER;
        p._insertCharacters(token);
      }
      function characterInForeignContent(p, token) {
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function startTagInForeignContent(p, token) {
        if (foreignContent.causesExit(token) && !p.fragmentContext) {
          while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.current)) {
            p.openElements.pop();
          }
          p._processToken(token);
        } else {
          const current = p._getAdjustedCurrentElement();
          const currentNs = p.treeAdapter.getNamespaceURI(current);
          if (currentNs === NS.MATHML) {
            foreignContent.adjustTokenMathMLAttrs(token);
          } else if (currentNs === NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
          }
          foreignContent.adjustTokenXMLAttrs(token);
          if (token.selfClosing) {
            p._appendElement(token, currentNs);
          } else {
            p._insertElement(token, currentNs);
          }
          token.ackSelfClosing = true;
        }
      }
      function endTagInForeignContent(p, token) {
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
            p._processToken(token);
            break;
          }
          if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
            p.openElements.popUntilElementPopped(element);
            break;
          }
        }
      }
    }
  });

  // node_modules/rehype-parse/errors.json
  var require_errors = __commonJS({
    "node_modules/rehype-parse/errors.json"(exports, module) {
      module.exports = {
        abandonedHeadElementChild: {
          reason: "Unexpected metadata element after head",
          description: "Unexpected element after head. Expected the element before `</head>`",
          url: false
        },
        abruptClosingOfEmptyComment: {
          reason: "Unexpected abruptly closed empty comment",
          description: "Unexpected `>` or `->`. Expected `-->` to close comments"
        },
        abruptDoctypePublicIdentifier: {
          reason: "Unexpected abruptly closed public identifier",
          description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
        },
        abruptDoctypeSystemIdentifier: {
          reason: "Unexpected abruptly closed system identifier",
          description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
        },
        absenceOfDigitsInNumericCharacterReference: {
          reason: "Unexpected non-digit at start of numeric character reference",
          description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
        },
        cdataInHtmlContent: {
          reason: "Unexpected CDATA section in HTML",
          description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
        },
        characterReferenceOutsideUnicodeRange: {
          reason: "Unexpected too big numeric character reference",
          description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
        },
        closingOfElementWithOpenChildElements: {
          reason: "Unexpected closing tag with open child elements",
          description: "Unexpectedly closing tag. Expected other tags to be closed first",
          url: false
        },
        controlCharacterInInputStream: {
          reason: "Unexpected control character",
          description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
        },
        controlCharacterReference: {
          reason: "Unexpected control character reference",
          description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
        },
        disallowedContentInNoscriptInHead: {
          reason: "Disallowed content inside `<noscript>` in `<head>`",
          description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
          url: false
        },
        duplicateAttribute: {
          reason: "Unexpected duplicate attribute",
          description: "Unexpectedly double attribute. Expected attributes to occur only once"
        },
        endTagWithAttributes: {
          reason: "Unexpected attribute on closing tag",
          description: "Unexpected attribute. Expected `>` instead"
        },
        endTagWithTrailingSolidus: {
          reason: "Unexpected slash at end of closing tag",
          description: "Unexpected `%c-1`. Expected `>` instead"
        },
        endTagWithoutMatchingOpenElement: {
          reason: "Unexpected unopened end tag",
          description: "Unexpected end tag. Expected no end tag or another end tag",
          url: false
        },
        eofBeforeTagName: {
          reason: "Unexpected end of file",
          description: "Unexpected end of file. Expected tag name instead"
        },
        eofInCdata: {
          reason: "Unexpected end of file in CDATA",
          description: "Unexpected end of file. Expected `]]>` to close the CDATA"
        },
        eofInComment: {
          reason: "Unexpected end of file in comment",
          description: "Unexpected end of file. Expected `-->` to close the comment"
        },
        eofInDoctype: {
          reason: "Unexpected end of file in doctype",
          description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
        },
        eofInElementThatCanContainOnlyText: {
          reason: "Unexpected end of file in element that can only contain text",
          description: "Unexpected end of file. Expected text or a closing tag",
          url: false
        },
        eofInScriptHtmlCommentLikeText: {
          reason: "Unexpected end of file in comment inside script",
          description: "Unexpected end of file. Expected `-->` to close the comment"
        },
        eofInTag: {
          reason: "Unexpected end of file in tag",
          description: "Unexpected end of file. Expected `>` to close the tag"
        },
        incorrectlyClosedComment: {
          reason: "Incorrectly closed comment",
          description: "Unexpected `%c-1`. Expected `-->` to close the comment"
        },
        incorrectlyOpenedComment: {
          reason: "Incorrectly opened comment",
          description: "Unexpected `%c`. Expected `<!--` to open the comment"
        },
        invalidCharacterSequenceAfterDoctypeName: {
          reason: "Invalid sequence after doctype name",
          description: "Unexpected sequence at `%c`. Expected `public` or `system`"
        },
        invalidFirstCharacterOfTagName: {
          reason: "Invalid first character in tag name",
          description: "Unexpected `%c`. Expected an ASCII letter instead"
        },
        misplacedDoctype: {
          reason: "Misplaced doctype",
          description: "Unexpected doctype. Expected doctype before head",
          url: false
        },
        misplacedStartTagForHeadElement: {
          reason: "Misplaced `<head>` start tag",
          description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
          url: false
        },
        missingAttributeValue: {
          reason: "Missing attribute value",
          description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
        },
        missingDoctype: {
          reason: "Missing doctype before other content",
          description: "Expected a `<!doctype html>` before anything else",
          url: false
        },
        missingDoctypeName: {
          reason: "Missing doctype name",
          description: "Unexpected doctype end at `%c`. Expected `html` instead"
        },
        missingDoctypePublicIdentifier: {
          reason: "Missing public identifier in doctype",
          description: "Unexpected `%c`. Expected identifier for `public` instead"
        },
        missingDoctypeSystemIdentifier: {
          reason: "Missing system identifier in doctype",
          description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
        },
        missingEndTagName: {
          reason: "Missing name in end tag",
          description: "Unexpected `%c`. Expected an ASCII letter instead"
        },
        missingQuoteBeforeDoctypePublicIdentifier: {
          reason: "Missing quote before public identifier in doctype",
          description: "Unexpected `%c`. Expected `\"` or `'` instead"
        },
        missingQuoteBeforeDoctypeSystemIdentifier: {
          reason: "Missing quote before system identifier in doctype",
          description: "Unexpected `%c`. Expected `\"` or `'` instead"
        },
        missingSemicolonAfterCharacterReference: {
          reason: "Missing semicolon after character reference",
          description: "Unexpected `%c`. Expected `;` instead"
        },
        missingWhitespaceAfterDoctypePublicKeyword: {
          reason: "Missing whitespace after public identifier in doctype",
          description: "Unexpected `%c`. Expected ASCII whitespace instead"
        },
        missingWhitespaceAfterDoctypeSystemKeyword: {
          reason: "Missing whitespace after system identifier in doctype",
          description: "Unexpected `%c`. Expected ASCII whitespace instead"
        },
        missingWhitespaceBeforeDoctypeName: {
          reason: "Missing whitespace before doctype name",
          description: "Unexpected `%c`. Expected ASCII whitespace instead"
        },
        missingWhitespaceBetweenAttributes: {
          reason: "Missing whitespace between attributes",
          description: "Unexpected `%c`. Expected ASCII whitespace instead"
        },
        missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
          reason: "Missing whitespace between public and system identifiers in doctype",
          description: "Unexpected `%c`. Expected ASCII whitespace instead"
        },
        nestedComment: {
          reason: "Unexpected nested comment",
          description: "Unexpected `<!--`. Expected `-->`"
        },
        nestedNoscriptInHead: {
          reason: "Unexpected nested `<noscript>` in `<head>`",
          description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
          url: false
        },
        nonConformingDoctype: {
          reason: "Unexpected non-conforming doctype declaration",
          description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
          url: false
        },
        nonVoidHtmlElementStartTagWithTrailingSolidus: {
          reason: "Unexpected trailing slash on start tag of non-void element",
          description: "Unexpected `/`. Expected `>` instead"
        },
        noncharacterCharacterReference: {
          reason: "Unexpected noncharacter code point referenced by character reference",
          description: "Unexpected code point. Do not use noncharacters in HTML"
        },
        noncharacterInInputStream: {
          reason: "Unexpected noncharacter character",
          description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
        },
        nullCharacterReference: {
          reason: "Unexpected NULL character referenced by character reference",
          description: "Unexpected code point. Do not use NULL characters in HTML"
        },
        openElementsLeftAfterEof: {
          reason: "Unexpected end of file",
          description: "Unexpected end of file. Expected closing tag instead",
          url: false
        },
        surrogateCharacterReference: {
          reason: "Unexpected surrogate character referenced by character reference",
          description: "Unexpected code point. Do not use lone surrogate characters in HTML"
        },
        surrogateInInputStream: {
          reason: "Unexpected surrogate character",
          description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
        },
        unexpectedCharacterAfterDoctypeSystemIdentifier: {
          reason: "Invalid character after system identifier in doctype",
          description: "Unexpected character at `%c`. Expected `>`"
        },
        unexpectedCharacterInAttributeName: {
          reason: "Unexpected character in attribute name",
          description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
        },
        unexpectedCharacterInUnquotedAttributeValue: {
          reason: "Unexpected character in unquoted attribute value",
          description: "Unexpected `%c`. Quote the attribute value to include it"
        },
        unexpectedEqualsSignBeforeAttributeName: {
          reason: "Unexpected equals sign before attribute name ",
          description: "Unexpected `%c`. Add an attribute name before it"
        },
        unexpectedNullCharacter: {
          reason: "Unexpected NULL character",
          description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
        },
        unexpectedQuestionMarkInsteadOfTagName: {
          reason: "Unexpected question mark instead of tag name",
          description: "Unexpected `%c`. Expected an ASCII letter instead"
        },
        unexpectedSolidusInTag: {
          reason: "Unexpected slash in tag",
          description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
        },
        unknownNamedCharacterReference: {
          reason: "Unexpected unknown named character reference",
          description: "Unexpected character reference. Expected known named character references"
        }
      };
    }
  });

  // node_modules/rehype-parse/index.js
  var require_rehype_parse = __commonJS({
    "node_modules/rehype-parse/index.js"(exports, module) {
      init_globals();
      var fromParse5 = require_hast_util_from_parse5();
      var Parser5 = require_parser();
      var errors = require_errors();
      var base = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-";
      var fatalities = { 2: true, 1: false, 0: null };
      module.exports = parse;
      function parse(options) {
        var settings = Object.assign({}, options, this.data("settings"));
        var position = settings.position;
        position = typeof position === "boolean" ? position : true;
        this.Parser = parser;
        function parser(doc, file) {
          var fn = settings.fragment ? "parseFragment" : "parse";
          var onParseError = settings.emitParseErrors ? onerror : null;
          var parse5 = new Parser5({
            sourceCodeLocationInfo: position,
            onParseError,
            scriptingEnabled: false
          });
          return fromParse5(parse5[fn](doc), {
            space: settings.space,
            file,
            verbose: settings.verbose
          });
          function onerror(err) {
            var code2 = err.code;
            var name = camelcase(code2);
            var setting = settings[name];
            var config = setting === void 0 || setting === null ? true : setting;
            var level = typeof config === "number" ? config : config ? 1 : 0;
            var start = {
              line: err.startLine,
              column: err.startCol,
              offset: err.startOffset
            };
            var end = { line: err.endLine, column: err.endCol, offset: err.endOffset };
            var info;
            var message;
            if (level) {
              info = errors[name] || {
                reason: "",
                description: ""
              };
              message = file.message(format(info.reason), { start, end });
              message.source = "parse-error";
              message.ruleId = code2;
              message.fatal = fatalities[level];
              message.note = format(info.description);
              message.url = info.url === false ? null : base + code2;
            }
            function format(value) {
              return value.replace(/%c(?:-(\d+))?/g, char).replace(/%x/g, encodedChar);
            }
            function char($0, $1) {
              var offset = $1 ? -parseInt($1, 10) : 0;
              var char2 = doc.charAt(err.startOffset + offset);
              return char2 === "`" ? "` ` `" : char2;
            }
            function encodedChar() {
              var char2 = doc.charCodeAt(err.startOffset).toString(16).toUpperCase();
              return "0x" + char2;
            }
          }
        }
      }
      function camelcase(value) {
        return value.replace(/-[a-z]/g, replacer);
      }
      function replacer($0) {
        return $0.charAt(1).toUpperCase();
      }
    }
  });

  // node_modules/hast-util-is-element/index.js
  var require_hast_util_is_element = __commonJS({
    "node_modules/hast-util-is-element/index.js"(exports, module) {
      init_globals();
      var convert = require_convert();
      module.exports = isElement;
      isElement.convert = convert;
      function isElement(node, test, index, parent, context) {
        var hasParent = parent !== null && parent !== void 0;
        var hasIndex = index !== null && index !== void 0;
        var check = convert(test);
        if (hasIndex && (typeof index !== "number" || index < 0 || index === Infinity)) {
          throw new Error("Expected positive finite index for child node");
        }
        if (hasParent && (!parent.type || !parent.children)) {
          throw new Error("Expected parent node");
        }
        if (!node || !node.type || typeof node.type !== "string") {
          return false;
        }
        if (hasParent !== hasIndex) {
          throw new Error("Expected both parent and index");
        }
        return check.call(context, node, index, parent);
      }
    }
  });

  // node_modules/hast-util-embedded/index.js
  var require_hast_util_embedded = __commonJS({
    "node_modules/hast-util-embedded/index.js"(exports, module) {
      init_globals();
      var convert = require_convert();
      module.exports = convert([
        "audio",
        "canvas",
        "embed",
        "iframe",
        "img",
        "math",
        "object",
        "picture",
        "svg",
        "video"
      ]);
    }
  });

  // node_modules/hast-util-whitespace/index.js
  var require_hast_util_whitespace = __commonJS({
    "node_modules/hast-util-whitespace/index.js"(exports, module) {
      init_globals();
      module.exports = interElementWhiteSpace;
      var re2 = /[ \t\n\f\r]/g;
      function interElementWhiteSpace(node) {
        var value;
        if (node && typeof node === "object" && node.type === "text") {
          value = node.value || "";
        } else if (typeof node === "string") {
          value = node;
        } else {
          return false;
        }
        return value.replace(re2, "") === "";
      }
    }
  });

  // node_modules/rehype-minify-whitespace/block.js
  var require_block = __commonJS({
    "node_modules/rehype-minify-whitespace/block.js"(exports, module) {
      init_globals();
      module.exports = [
        "br",
        "wbr",
        "li",
        "table",
        "caption",
        "colgroup",
        "col",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "td",
        "th",
        "summary",
        "optgroup",
        "option",
        "html",
        "head",
        "body",
        "address",
        "blockquote",
        "center",
        "dialog",
        "div",
        "figure",
        "figcaption",
        "footer",
        "form",
        "header",
        "hr",
        "legend",
        "listing",
        "main",
        "p",
        "plaintext",
        "pre",
        "xmp",
        "article",
        "aside",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hgroup",
        "nav",
        "section",
        "dir",
        "dd",
        "dl",
        "dt",
        "menu",
        "ol",
        "ul",
        "li",
        "th",
        "td"
      ];
    }
  });

  // node_modules/rehype-minify-whitespace/content.js
  var require_content = __commonJS({
    "node_modules/rehype-minify-whitespace/content.js"(exports, module) {
      init_globals();
      module.exports = [
        "button",
        "input",
        "select",
        "textarea"
      ];
    }
  });

  // node_modules/rehype-minify-whitespace/skippable.js
  var require_skippable = __commonJS({
    "node_modules/rehype-minify-whitespace/skippable.js"(exports, module) {
      init_globals();
      module.exports = [
        "area",
        "base",
        "basefont",
        "dialog",
        "datalist",
        "head",
        "link",
        "meta",
        "noembed",
        "noframes",
        "param",
        "rp",
        "script",
        "source",
        "style",
        "template",
        "track",
        "title"
      ];
    }
  });

  // node_modules/rehype-minify-whitespace/index.js
  var require_rehype_minify_whitespace = __commonJS({
    "node_modules/rehype-minify-whitespace/index.js"(exports, module) {
      init_globals();
      var is = require_hast_util_is_element();
      var embedded = require_hast_util_embedded();
      var convert = require_convert2();
      var whitespace = require_hast_util_whitespace();
      var blocks = require_block();
      var contents = require_content();
      var skippables = require_skippable();
      module.exports = minifyWhitespace;
      var ignorableNode = convert(["doctype", "comment"]);
      var parent = convert(["element", "root"]);
      var root = convert(["root"]);
      var element = convert(["element"]);
      var text = convert(["text"]);
      function minifyWhitespace(options) {
        var collapse = collapseFactory(
          (options || {}).newlines ? replaceNewlines : replaceWhitespace
        );
        return transform;
        function transform(tree) {
          minify(tree, { collapse, whitespace: "normal" });
        }
      }
      function minify(node, options) {
        var settings;
        if (parent(node)) {
          settings = Object.assign({}, options);
          if (root(node) || blocklike(node)) {
            settings.before = true;
            settings.after = true;
          }
          settings.whitespace = inferWhiteSpace(node, options);
          return all(node, settings);
        }
        if (text(node)) {
          if (options.whitespace === "normal") {
            return minifyText(node, options);
          }
          if (options.whitespace === "nowrap") {
            node.value = options.collapse(node.value);
          }
        }
        return {
          remove: false,
          ignore: ignorableNode(node),
          stripAtStart: false
        };
      }
      function minifyText(node, options) {
        var value = options.collapse(node.value);
        var start = 0;
        var end = value.length;
        var result = { remove: false, ignore: false, stripAtStart: false };
        if (options.before && removable(value.charAt(0))) {
          start++;
        }
        if (start !== end && removable(value.charAt(end - 1))) {
          if (options.after) {
            end--;
          } else {
            result.stripAtStart = true;
          }
        }
        if (start === end) {
          result.remove = true;
        } else {
          node.value = value.slice(start, end);
        }
        return result;
      }
      function all(parent2, options) {
        var before = options.before;
        var after = options.after;
        var children = parent2.children;
        var length = children.length;
        var index = -1;
        var result;
        while (++index < length) {
          result = minify(
            children[index],
            Object.assign({}, options, {
              before,
              after: collapsableAfter(children, index, after)
            })
          );
          if (result.remove) {
            children.splice(index, 1);
            index--;
            length--;
          } else if (!result.ignore) {
            before = result.stripAtStart;
          }
          if (content(children[index])) {
            before = false;
          }
        }
        return {
          remove: false,
          ignore: false,
          stripAtStart: before || after
        };
      }
      function collapsableAfter(nodes, index, after) {
        var length = nodes.length;
        var node;
        var result;
        while (++index < length) {
          node = nodes[index];
          result = inferBoundary(node);
          if (result === void 0 && node.children && !skippable(node)) {
            result = collapsableAfter(node.children, -1);
          }
          if (typeof result === "boolean") {
            return result;
          }
        }
        return after;
      }
      function inferBoundary(node) {
        if (element(node)) {
          if (content(node)) {
            return false;
          }
          if (blocklike(node)) {
            return true;
          }
        } else if (text(node)) {
          if (!whitespace(node)) {
            return false;
          }
        } else if (!ignorableNode(node)) {
          return false;
        }
      }
      function content(node) {
        return embedded(node) || is(node, contents);
      }
      function blocklike(node) {
        return is(node, blocks);
      }
      function skippable(node) {
        var props = node.properties || {};
        return ignorableNode(node) || is(node, skippables) || props.hidden;
      }
      function removable(character) {
        return character === " " || character === "\n";
      }
      function replaceNewlines(value) {
        var match = /\r?\n|\r/.exec(value);
        return match ? match[0] : " ";
      }
      function replaceWhitespace() {
        return " ";
      }
      function collapseFactory(replace) {
        return collapse;
        function collapse(value) {
          return String(value).replace(/[\t\n\v\f\r ]+/g, replace);
        }
      }
      function inferWhiteSpace(node, options) {
        var props = node.properties || {};
        switch (node.tagName) {
          case "listing":
          case "plaintext":
          case "xmp":
            return "pre";
          case "nobr":
            return "nowrap";
          case "pre":
            return props.wrap ? "pre-wrap" : "pre";
          case "td":
          case "th":
            return props.noWrap ? "nowrap" : options.whitespace;
          case "textarea":
            return "pre-wrap";
          default:
            return options.whitespace;
        }
      }
    }
  });

  // node_modules/unist-util-visit-parents/color.browser.js
  var require_color_browser = __commonJS({
    "node_modules/unist-util-visit-parents/color.browser.js"(exports, module) {
      init_globals();
      module.exports = identity;
      function identity(d) {
        return d;
      }
    }
  });

  // node_modules/unist-util-visit-parents/index.js
  var require_unist_util_visit_parents = __commonJS({
    "node_modules/unist-util-visit-parents/index.js"(exports, module) {
      init_globals();
      module.exports = visitParents;
      var convert = require_convert2();
      var color = require_color_browser();
      var CONTINUE = true;
      var SKIP = "skip";
      var EXIT = false;
      visitParents.CONTINUE = CONTINUE;
      visitParents.SKIP = SKIP;
      visitParents.EXIT = EXIT;
      function visitParents(tree, test, visitor, reverse) {
        var step;
        var is;
        if (typeof test === "function" && typeof visitor !== "function") {
          reverse = visitor;
          visitor = test;
          test = null;
        }
        is = convert(test);
        step = reverse ? -1 : 1;
        factory(tree, null, [])();
        function factory(node, index, parents) {
          var value = typeof node === "object" && node !== null ? node : {};
          var name;
          if (typeof value.type === "string") {
            name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
            visit.displayName = "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")";
          }
          return visit;
          function visit() {
            var grandparents = parents.concat(node);
            var result = [];
            var subresult;
            var offset;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
              result = toResult(visitor(node, parents));
              if (result[0] === EXIT) {
                return result;
              }
            }
            if (node.children && result[0] !== SKIP) {
              offset = (reverse ? node.children.length : -1) + step;
              while (offset > -1 && offset < node.children.length) {
                subresult = factory(node.children[offset], offset, grandparents)();
                if (subresult[0] === EXIT) {
                  return subresult;
                }
                offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
              }
            }
            return result;
          }
        }
      }
      function toResult(value) {
        if (value !== null && typeof value === "object" && "length" in value) {
          return value;
        }
        if (typeof value === "number") {
          return [CONTINUE, value];
        }
        return [value];
      }
    }
  });

  // node_modules/unist-util-visit/index.js
  var require_unist_util_visit = __commonJS({
    "node_modules/unist-util-visit/index.js"(exports, module) {
      init_globals();
      module.exports = visit;
      var visitParents = require_unist_util_visit_parents();
      var CONTINUE = visitParents.CONTINUE;
      var SKIP = visitParents.SKIP;
      var EXIT = visitParents.EXIT;
      visit.CONTINUE = CONTINUE;
      visit.SKIP = SKIP;
      visit.EXIT = EXIT;
      function visit(tree, test, visitor, reverse) {
        if (typeof test === "function" && typeof visitor !== "function") {
          reverse = visitor;
          visitor = test;
          test = null;
        }
        visitParents(tree, test, overload, reverse);
        function overload(node, parents) {
          var parent = parents[parents.length - 1];
          var index = parent ? parent.children.indexOf(node) : null;
          return visitor(node, index, parent);
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/all.js
  var require_all = __commonJS({
    "node_modules/hast-util-to-mdast/lib/all.js"(exports, module) {
      init_globals();
      module.exports = all;
      var one = require_one();
      function all(h, parent) {
        var nodes = parent.children || [];
        var values = [];
        var index = -1;
        var result;
        while (++index < nodes.length) {
          result = one(h, nodes[index], parent);
          if (result) {
            values = values.concat(result);
          }
        }
        return values;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/own.js
  var require_own = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/own.js"(exports, module) {
      init_globals();
      module.exports = {}.hasOwnProperty;
    }
  });

  // node_modules/hast-util-to-mdast/lib/one.js
  var require_one = __commonJS({
    "node_modules/hast-util-to-mdast/lib/one.js"(exports, module) {
      init_globals();
      module.exports = one;
      var all = require_all();
      var own = require_own();
      var wrapText = require_wrap_text();
      function one(h, node, parent) {
        var fn;
        if (node.type === "element") {
          if (node.properties && node.properties.dataMdast === "ignore") {
            return;
          }
          if (own.call(h.handlers, node.tagName)) {
            fn = h.handlers[node.tagName];
          }
        } else if (own.call(h.handlers, node.type)) {
          fn = h.handlers[node.type];
        }
        return (typeof fn === "function" ? fn : unknown)(h, node, parent);
      }
      function unknown(h, node) {
        if (node.value) {
          return h(node, "text", wrapText(h, node.value));
        }
        return all(h, node);
      }
    }
  });

  // node_modules/mdast-util-phrasing/index.js
  var require_mdast_util_phrasing = __commonJS({
    "node_modules/mdast-util-phrasing/index.js"(exports, module) {
      init_globals();
      var convert = require_convert2();
      var isPhrasing = convert([
        "break",
        "delete",
        "emphasis",
        "footnote",
        "footnoteReference",
        "image",
        "imageReference",
        "inlineCode",
        "link",
        "linkReference",
        "strong",
        "text"
      ]);
      isPhrasing.displayName = "isPhrasing";
      module.exports = isPhrasing;
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/shallow.js
  var require_shallow = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/shallow.js"(exports, module) {
      init_globals();
      module.exports = shallow;
      var own = require_own();
      function shallow(node) {
        var copy = {};
        var key;
        for (key in node) {
          if (own.call(node, key) && key !== "children") {
            copy[key] = node[key];
          }
        }
        return copy;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/wrap.js
  var require_wrap2 = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/wrap.js"(exports, module) {
      init_globals();
      module.exports = wrap;
      wrap.needed = needed;
      var extend = require_extend();
      var phrasing = require_mdast_util_phrasing();
      var shallow = require_shallow();
      function wrap(nodes) {
        return runs(nodes, onphrasing);
        function onphrasing(nodes2) {
          var head = nodes2[0];
          if (nodes2.length === 1 && head.type === "text" && (head.value === " " || head.value === "\n")) {
            return [];
          }
          return { type: "paragraph", children: nodes2 };
        }
      }
      function runs(nodes, onphrasing, onnonphrasing) {
        var nonphrasing = onnonphrasing || identity;
        var flattened = flatten(nodes);
        var result = [];
        var index = -1;
        var node;
        var queue;
        while (++index < flattened.length) {
          node = flattened[index];
          if (phrasing(node)) {
            if (!queue)
              queue = [];
            queue.push(node);
          } else {
            if (queue) {
              result = result.concat(onphrasing(queue));
              queue = void 0;
            }
            result = result.concat(nonphrasing(node));
          }
        }
        if (queue) {
          result = result.concat(onphrasing(queue));
        }
        return result;
      }
      function flatten(nodes) {
        var flattened = [];
        var index = -1;
        var node;
        while (++index < nodes.length) {
          node = nodes[index];
          if ((node.type === "delete" || node.type === "link") && needed(node.children)) {
            flattened = flattened.concat(split(node));
          } else {
            flattened.push(node);
          }
        }
        return flattened;
      }
      function needed(nodes) {
        var index = -1;
        var node;
        while (++index < nodes.length) {
          node = nodes[index];
          if (!phrasing(node) || node.children && needed(node.children)) {
            return true;
          }
        }
      }
      function split(node) {
        return runs(node.children, onphrasing, onnonphrasing);
        function onnonphrasing(child) {
          var parent = extend(true, {}, shallow(node));
          var copy = shallow(child);
          copy.children = [parent];
          parent.children = child.children;
          return copy;
        }
        function onphrasing(nodes) {
          var parent = extend(true, {}, shallow(node));
          parent.children = nodes;
          return parent;
        }
      }
      function identity(n) {
        return n;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/wrap-children.js
  var require_wrap_children = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/wrap-children.js"(exports, module) {
      init_globals();
      module.exports = wrapped;
      var all = require_all();
      var wrap = require_wrap2();
      function wrapped(h, node) {
        return wrap(all(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/base.js
  var require_base = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/base.js"(exports, module) {
      init_globals();
      module.exports = base;
      function base(h, node) {
        if (!h.baseFound) {
          h.frozenBaseUrl = node.properties.href;
          h.baseFound = true;
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/blockquote.js
  var require_blockquote = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/blockquote.js"(exports, module) {
      init_globals();
      module.exports = blockquote;
      var wrapChildren = require_wrap_children();
      function blockquote(h, node) {
        return h(node, "blockquote", wrapChildren(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/break.js
  var require_break = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/break.js"(exports, module) {
      init_globals();
      module.exports = br;
      function br(h, node) {
        return h.wrapText ? h(node, "break") : h(node, "text", " ");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/code.js
  var require_code = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/code.js"(exports, module) {
      init_globals();
      module.exports = code2;
      var has = require_hast_util_has_property();
      var convert = require_convert();
      var toText = require_hast_util_to_text();
      var trim = require_trim_trailing_lines();
      var wrapText = require_wrap_text();
      var prefix = "language-";
      var pre = convert("pre");
      var isCode = convert("code");
      function code2(h, node) {
        var children = node.children;
        var index = -1;
        var classList;
        var lang;
        if (pre(node)) {
          while (++index < children.length) {
            if (isCode(children[index]) && has(children[index], "className")) {
              classList = children[index].properties.className;
              break;
            }
          }
        }
        if (classList) {
          index = -1;
          while (++index < classList.length) {
            if (classList[index].slice(0, prefix.length) === prefix) {
              lang = classList[index].slice(prefix.length);
              break;
            }
          }
        }
        return h(
          node,
          "code",
          { lang: lang || null, meta: null },
          trim(wrapText(h, toText(node)))
        );
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/comment.js
  var require_comment = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/comment.js"(exports, module) {
      init_globals();
      module.exports = comment;
      var wrapText = require_wrap_text();
      function comment(h, node) {
        return h(node, "html", "<!--" + wrapText(h, node.value) + "-->");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/delete.js
  var require_delete = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/delete.js"(exports, module) {
      init_globals();
      module.exports = del;
      var all = require_all();
      function del(h, node) {
        return h(node, "delete", all(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/list-items-spread.js
  var require_list_items_spread = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/list-items-spread.js"(exports, module) {
      init_globals();
      module.exports = spread;
      function spread(children) {
        var index = -1;
        if (children.length > 1) {
          while (++index < children.length) {
            if (children[index].spread) {
              return true;
            }
          }
        }
        return false;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js
  var require_wrap_list_items = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js"(exports, module) {
      init_globals();
      module.exports = wrapListItems;
      var all = require_all();
      function wrapListItems(h, node) {
        var children = all(h, node);
        var index = -1;
        while (++index < children.length) {
          if (children[index].type !== "listItem") {
            children[index] = {
              type: "listItem",
              spread: false,
              checked: null,
              children: [children[index]]
            };
          }
        }
        return children;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/dl.js
  var require_dl = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/dl.js"(exports, module) {
      init_globals();
      module.exports = dl;
      var convert = require_convert();
      var spread = require_list_items_spread();
      var wrapListItems = require_wrap_list_items();
      var div = convert("div");
      var dt = convert("dt");
      var dd = convert("dd");
      function dl(h, node) {
        var children = node.children;
        var index = -1;
        var clean2 = [];
        var groups = [];
        var group = { titles: [], definitions: [] };
        var content;
        var child;
        while (++index < children.length) {
          child = children[index];
          clean2 = clean2.concat(div(child) ? child.children : child);
        }
        index = -1;
        while (++index < clean2.length) {
          child = clean2[index];
          if (dt(child)) {
            if (dd(clean2[index - 1])) {
              groups.push(group);
              group = { titles: [], definitions: [] };
            }
            group.titles.push(child);
          } else {
            group.definitions.push(child);
          }
        }
        groups.push(group);
        index = -1;
        content = [];
        while (++index < groups.length) {
          group = handle(h, groups[index].titles).concat(
            handle(h, groups[index].definitions)
          );
          if (group.length) {
            content.push({
              type: "listItem",
              spread: group.length > 1,
              checked: null,
              children: group
            });
          }
        }
        if (content.length) {
          return h(
            node,
            "list",
            { ordered: false, start: null, spread: spread(content) },
            content
          );
        }
      }
      function handle(h, children) {
        var nodes = wrapListItems(h, { children });
        if (!nodes.length) {
          return nodes;
        }
        if (nodes.length === 1) {
          return nodes[0].children;
        }
        return [
          {
            type: "list",
            ordered: false,
            start: null,
            spread: spread(nodes),
            children: nodes
          }
        ];
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/emphasis.js
  var require_emphasis = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/emphasis.js"(exports, module) {
      init_globals();
      module.exports = emphasis;
      var all = require_all();
      function emphasis(h, node) {
        return h(node, "emphasis", all(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/heading.js
  var require_heading = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/heading.js"(exports, module) {
      init_globals();
      module.exports = heading;
      var all = require_all();
      function heading(h, node) {
        var depth = Number(node.tagName.charAt(1)) || 1;
        var wrap = h.wrapText;
        var result;
        h.wrapText = false;
        result = h(node, "heading", { depth }, all(h, node));
        h.wrapText = wrap;
        return result;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/resolve.js
  var require_resolve = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/resolve.js"(exports, module) {
      init_globals();
      module.exports = resolve;
      function resolve(h, url2) {
        if (url2 === null || url2 === void 0) {
          return "";
        }
        if (h.frozenBaseUrl && typeof URL !== "undefined") {
          return String(new URL(url2, h.frozenBaseUrl));
        }
        return url2;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/iframe.js
  var require_iframe = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/iframe.js"(exports, module) {
      init_globals();
      module.exports = iframe;
      var resolve = require_resolve();
      var wrapText = require_wrap_text();
      function iframe(h, node) {
        var src = node.properties.src;
        var title2 = node.properties.title;
        if (src && title2) {
          return {
            type: "link",
            title: null,
            url: resolve(h, src),
            children: [{ type: "text", value: wrapText(h, title2) }]
          };
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/image.js
  var require_image = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/image.js"(exports, module) {
      init_globals();
      module.exports = image;
      var resolve = require_resolve();
      function image(h, node) {
        return h(node, "image", {
          url: resolve(h, node.properties.src),
          title: node.properties.title || null,
          alt: node.properties.alt || ""
        });
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/inline-code.js
  var require_inline_code = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/inline-code.js"(exports, module) {
      init_globals();
      module.exports = inlineCode;
      var toText = require_hast_util_to_text();
      var wrapText = require_wrap_text();
      function inlineCode(h, node) {
        return h(node, "inlineCode", wrapText(h, toText(node)));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/util/find-selected-options.js
  var require_find_selected_options = __commonJS({
    "node_modules/hast-util-to-mdast/lib/util/find-selected-options.js"(exports, module) {
      init_globals();
      var has = require_hast_util_has_property();
      var convert = require_convert();
      var toText = require_hast_util_to_text();
      var wrapText = require_wrap_text();
      module.exports = findSelectedOptions;
      var option = convert("option");
      function findSelectedOptions(h, node, properties) {
        var props = properties || node.properties;
        var options = findOptions(node);
        var size = Math.min(parseInt(props.size, 10), 0) || (props.multiple ? 4 : 1);
        var index = -1;
        var selectedOptions = [];
        var values = [];
        var option2;
        var list;
        var content;
        var label2;
        var value;
        while (++index < options.length) {
          if (has(options[index], "selected")) {
            selectedOptions.push(options[index]);
          }
        }
        list = selectedOptions.length ? selectedOptions : options;
        options = list.slice(0, size);
        index = -1;
        while (++index < options.length) {
          option2 = options[index];
          content = wrapText(h, toText(option2));
          label2 = content || option2.properties.label;
          value = option2.properties.value || content;
          values.push([value, label2 === value ? null : label2]);
        }
        return values;
      }
      function findOptions(node) {
        var children = node.children;
        var index = -1;
        var results = [];
        var child;
        while (++index < children.length) {
          child = children[index];
          if (option(child)) {
            if (!has(child, "disabled")) {
              results.push(child);
            }
          } else if (child.children) {
            results = results.concat(findOptions(child));
          }
        }
        return results;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/input.js
  var require_input = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/input.js"(exports, module) {
      init_globals();
      module.exports = input;
      var convert = require_convert();
      var repeat = require_repeat_string();
      var findSelectedOptions = require_find_selected_options();
      var own = require_own();
      var resolve = require_resolve();
      var wrapText = require_wrap_text();
      var datalist = convert("datalist");
      function input(h, node) {
        var props = node.properties;
        var value = props.value || props.placeholder;
        var results = [];
        var values = [];
        var index = -1;
        var list;
        if (props.disabled || props.type === "hidden" || props.type === "file") {
          return;
        }
        if (props.type === "checkbox" || props.type === "radio") {
          return h(
            node,
            "text",
            wrapText(h, h[props.checked ? "checked" : "unchecked"])
          );
        }
        if (props.type === "image") {
          return props.alt || value ? h(node, "image", {
            url: resolve(h, props.src),
            title: props.title && wrapText(h, props.title) || null,
            alt: wrapText(h, props.alt || value)
          }) : [];
        }
        if (value) {
          values = [[value]];
        } else if (props.type !== "password" && props.type !== "file" && props.type !== "submit" && props.type !== "reset" && props.type !== "button" && props.list) {
          list = String(props.list).toUpperCase();
          if (own.call(h.nodeById, list) && datalist(h.nodeById[list])) {
            values = findSelectedOptions(h, h.nodeById[list], props);
          }
        }
        if (!values.length) {
          return;
        }
        if (props.type === "password") {
          values[0] = [repeat("\u2022", values[0][0].length)];
        }
        if (props.type === "url" || props.type === "email") {
          while (++index < values.length) {
            value = resolve(h, values[index][0]);
            results.push(
              h(
                node,
                "link",
                {
                  title: null,
                  url: wrapText(h, props.type === "email" ? "mailto:" + value : value)
                },
                [{ type: "text", value: wrapText(h, values[index][1] || value) }]
              )
            );
            if (index !== values.length - 1) {
              results.push({ type: "text", value: ", " });
            }
          }
          return results;
        }
        while (++index < values.length) {
          results.push(
            values[index][1] ? values[index][1] + " (" + values[index][0] + ")" : values[index][0]
          );
        }
        return h(node, "text", wrapText(h, results.join(", ")));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/link.js
  var require_link = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/link.js"(exports, module) {
      init_globals();
      module.exports = link;
      var all = require_all();
      var resolve = require_resolve();
      function link(h, node) {
        return h(
          node,
          "link",
          {
            title: node.properties.title || null,
            url: resolve(h, node.properties.href)
          },
          all(h, node)
        );
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/list-item.js
  var require_list_item = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/list-item.js"(exports, module) {
      init_globals();
      module.exports = listItem;
      var convert = require_convert();
      var shallow = require_shallow();
      var wrapChildren = require_wrap_children();
      var p = convert("p");
      var input = convert("input");
      function listItem(h, node) {
        var head = node.children[0];
        var checked = null;
        var content;
        var checkbox;
        var clone;
        var headClone;
        if (p(head)) {
          checkbox = head.children[0];
          if (input(checkbox) && (checkbox.properties.type === "checkbox" || checkbox.properties.type === "radio")) {
            checked = Boolean(checkbox.properties.checked);
            headClone = shallow(head);
            headClone.children = head.children.slice(1);
            clone = shallow(node);
            clone.children = [headClone].concat(node.children.slice(1));
          }
        }
        content = wrapChildren(h, clone || node);
        return h(
          node,
          "listItem",
          { spread: content.length > 1, checked },
          content
        );
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/list.js
  var require_list = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/list.js"(exports, module) {
      init_globals();
      module.exports = list;
      var convert = require_convert();
      var has = require_hast_util_has_property();
      var spread = require_list_items_spread();
      var wrapListItems = require_wrap_list_items();
      var ol = convert("ol");
      function list(h, node) {
        var ordered = ol(node);
        var children = wrapListItems(h, node);
        var start = null;
        if (ordered) {
          start = has(node, "start") ? node.properties.start : 1;
        }
        return h(
          node,
          "list",
          { ordered, start, spread: spread(children) },
          children
        );
      }
    }
  });

  // node_modules/hast-util-to-mdast/node_modules/mdast-util-to-string/index.js
  var require_mdast_util_to_string = __commonJS({
    "node_modules/hast-util-to-mdast/node_modules/mdast-util-to-string/index.js"(exports, module) {
      init_globals();
      module.exports = toString;
      function toString(node) {
        return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
      }
      function all(values) {
        var result = [];
        var length = values.length;
        var index = -1;
        while (++index < length) {
          result[index] = toString(values[index]);
        }
        return result.join("");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/media.js
  var require_media = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/media.js"(exports, module) {
      init_globals();
      module.exports = media;
      var convert = require_convert();
      var toString = require_mdast_util_to_string();
      var visit = require_unist_util_visit();
      var all = require_all();
      var resolve = require_resolve();
      var wrap = require_wrap2();
      var source2 = convert("source");
      var video = convert("video");
      function media(h, node) {
        var nodes = all(h, node);
        var poster = video(node) && node.properties.poster;
        var src = node.properties.src;
        var index = -1;
        var linkInFallbackContent;
        visit({ type: "root", children: nodes }, "link", findLink);
        if (linkInFallbackContent || wrap.needed(nodes)) {
          return nodes;
        }
        while (!src && ++index < node.children.length) {
          if (source2(node.children[index])) {
            src = node.children[index].properties.src;
          }
        }
        if (poster) {
          nodes = [
            {
              type: "image",
              title: null,
              url: resolve(h, poster),
              alt: toString({ children: nodes })
            }
          ];
        }
        return {
          type: "link",
          title: node.properties.title || null,
          url: resolve(h, src),
          children: nodes
        };
        function findLink() {
          linkInFallbackContent = true;
          return visit.EXIT;
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/paragraph.js
  var require_paragraph = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/paragraph.js"(exports, module) {
      init_globals();
      module.exports = paragraph;
      var all = require_all();
      function paragraph(h, node) {
        var nodes = all(h, node);
        if (nodes.length) {
          return h(node, "paragraph", nodes);
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/q.js
  var require_q = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/q.js"(exports, module) {
      init_globals();
      module.exports = q;
      var all = require_all();
      function q(h, node) {
        var expected = h.quotes[h.qNesting % h.quotes.length];
        var contents;
        h.qNesting++;
        contents = all(h, node);
        h.qNesting--;
        contents.unshift({ type: "text", value: expected.charAt(0) });
        contents.push({
          type: "text",
          value: expected.length > 1 ? expected.charAt(1) : expected
        });
        return contents;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/root.js
  var require_root = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/root.js"(exports, module) {
      init_globals();
      module.exports = root;
      var all = require_all();
      var wrap = require_wrap2();
      function root(h, node) {
        var children = all(h, node);
        if (h.document || wrap.needed(children)) {
          children = wrap(children);
        }
        return h(node, "root", children);
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/select.js
  var require_select = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/select.js"(exports, module) {
      init_globals();
      module.exports = select;
      var findSelectedOptions = require_find_selected_options();
      var wrapText = require_wrap_text();
      function select(h, node) {
        var values = findSelectedOptions(h, node);
        var index = -1;
        var results = [];
        var value;
        while (++index < values.length) {
          value = values[index];
          results.push(value[1] ? value[1] + " (" + value[0] + ")" : value[0]);
        }
        if (results.length) {
          return h(node, "text", wrapText(h, results.join(", ")));
        }
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/strong.js
  var require_strong = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/strong.js"(exports, module) {
      init_globals();
      module.exports = strong;
      var all = require_all();
      function strong(h, node) {
        return h(node, "strong", all(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/table-cell.js
  var require_table_cell = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/table-cell.js"(exports, module) {
      init_globals();
      module.exports = cell;
      var all = require_all();
      function cell(h, node) {
        var wrap = h.wrapText;
        var result;
        h.wrapText = false;
        result = h(node, "tableCell", all(h, node));
        h.wrapText = wrap;
        return result;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/table-row.js
  var require_table_row = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/table-row.js"(exports, module) {
      init_globals();
      module.exports = row;
      var all = require_all();
      function row(h, node) {
        return h(node, "tableRow", all(h, node));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/table.js
  var require_table = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/table.js"(exports, module) {
      init_globals();
      module.exports = table;
      var convert = require_convert();
      var visit = require_unist_util_visit();
      var all = require_all();
      var thead = convert("thead");
      var tr = convert("tr");
      var cell = convert(["th", "td"]);
      function table(h, node) {
        var info = inspect2(node);
        return h(node, "table", { align: info.align }, toRows(all(h, node), info));
      }
      function inspect2(node) {
        var headless = true;
        var align = [null];
        var rowIndex = 0;
        var cellIndex = 0;
        visit(node, "element", visitor);
        return { align, headless };
        function visitor(child) {
          if (thead(child)) {
            headless = false;
          } else if (tr(child)) {
            rowIndex++;
            cellIndex = 0;
          } else if (cell(child)) {
            if (!align[cellIndex]) {
              align[cellIndex] = child.properties.align || null;
            }
            if (headless && rowIndex < 2 && child.tagName === "th") {
              headless = false;
            }
            cellIndex++;
          }
        }
      }
      function toRows(children, info) {
        var nodes = [];
        var index = -1;
        var node;
        var queue;
        if (info.headless) {
          nodes.push({ type: "tableRow", children: [] });
        }
        while (++index < children.length) {
          node = children[index];
          if (node.type === "tableRow") {
            if (queue) {
              node.children = queue.concat(node.children);
              queue = void 0;
            }
            nodes.push(node);
          } else {
            if (!queue)
              queue = [];
            queue.push(node);
          }
        }
        if (queue) {
          node = nodes[nodes.length - 1];
          node.children = node.children.concat(queue);
        }
        index = -1;
        while (++index < nodes.length) {
          node = nodes[index];
          node.children = toCells(node.children, info);
        }
        return nodes;
      }
      function toCells(children, info) {
        var nodes = [];
        var index = -1;
        var node;
        var queue;
        while (++index < children.length) {
          node = children[index];
          if (node.type === "tableCell") {
            if (queue) {
              node.children = queue.concat(node.children);
              queue = void 0;
            }
            nodes.push(node);
          } else {
            if (!queue)
              queue = [];
            queue.push(node);
          }
        }
        if (queue) {
          node = nodes[nodes.length - 1];
          if (!node) {
            node = { type: "tableCell", children: [] };
            nodes.push(node);
          }
          node.children = node.children.concat(queue);
        }
        index = nodes.length - 1;
        while (++index < info.align.length) {
          nodes.push({ type: "tableCell", children: [] });
        }
        return nodes;
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/text.js
  var require_text = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/text.js"(exports, module) {
      init_globals();
      module.exports = text;
      var wrapText = require_wrap_text();
      function text(h, node) {
        return h(node, "text", wrapText(h, node.value));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/textarea.js
  var require_textarea = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/textarea.js"(exports, module) {
      init_globals();
      module.exports = textarea;
      var toText = require_hast_util_to_text();
      var wrapText = require_wrap_text();
      function textarea(h, node) {
        return h(node, "text", wrapText(h, toText(node)));
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/thematic-break.js
  var require_thematic_break = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/thematic-break.js"(exports, module) {
      init_globals();
      module.exports = thematicBreak;
      function thematicBreak(h, node) {
        return h(node, "thematicBreak");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/wbr.js
  var require_wbr = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/wbr.js"(exports, module) {
      init_globals();
      module.exports = wbr;
      function wbr(h, node) {
        return h(node, "text", "\u200B");
      }
    }
  });

  // node_modules/hast-util-to-mdast/lib/handlers/index.js
  var require_handlers = __commonJS({
    "node_modules/hast-util-to-mdast/lib/handlers/index.js"(exports) {
      init_globals();
      var all = require_all();
      var wrapped = require_wrap_children();
      var base = require_base();
      var blockquote = require_blockquote();
      var br = require_break();
      var code2 = require_code();
      var comment = require_comment();
      var del = require_delete();
      var dl = require_dl();
      var emphasis = require_emphasis();
      var heading = require_heading();
      var iframe = require_iframe();
      var image = require_image();
      var inlineCode = require_inline_code();
      var input = require_input();
      var link = require_link();
      var listItem = require_list_item();
      var list = require_list();
      var media = require_media();
      var paragraph = require_paragraph();
      var quote = require_q();
      var root = require_root();
      var select = require_select();
      var strong = require_strong();
      var cell = require_table_cell();
      var row = require_table_row();
      var table = require_table();
      var text = require_text();
      var textarea = require_textarea();
      var thematicBreak = require_thematic_break();
      var wbr = require_wbr();
      exports.root = root;
      exports.text = text;
      exports.comment = comment;
      exports.doctype = ignore;
      exports.applet = ignore;
      exports.area = ignore;
      exports.basefont = ignore;
      exports.bgsound = ignore;
      exports.caption = ignore;
      exports.col = ignore;
      exports.colgroup = ignore;
      exports.command = ignore;
      exports.content = ignore;
      exports.datalist = ignore;
      exports.dialog = ignore;
      exports.element = ignore;
      exports.embed = ignore;
      exports.frame = ignore;
      exports.frameset = ignore;
      exports.isindex = ignore;
      exports.keygen = ignore;
      exports.link = ignore;
      exports.math = ignore;
      exports.menu = ignore;
      exports.menuitem = ignore;
      exports.meta = ignore;
      exports.nextid = ignore;
      exports.noembed = ignore;
      exports.noframes = ignore;
      exports.optgroup = ignore;
      exports.option = ignore;
      exports.param = ignore;
      exports.script = ignore;
      exports.shadow = ignore;
      exports.source = ignore;
      exports.spacer = ignore;
      exports.style = ignore;
      exports.svg = ignore;
      exports.template = ignore;
      exports.title = ignore;
      exports.track = ignore;
      exports.abbr = all;
      exports.acronym = all;
      exports.bdi = all;
      exports.bdo = all;
      exports.big = all;
      exports.blink = all;
      exports.button = all;
      exports.canvas = all;
      exports.cite = all;
      exports.data = all;
      exports.details = all;
      exports.dfn = all;
      exports.font = all;
      exports.ins = all;
      exports.label = all;
      exports.map = all;
      exports.marquee = all;
      exports.meter = all;
      exports.nobr = all;
      exports.noscript = all;
      exports.object = all;
      exports.output = all;
      exports.progress = all;
      exports.rb = all;
      exports.rbc = all;
      exports.rp = all;
      exports.rt = all;
      exports.rtc = all;
      exports.ruby = all;
      exports.slot = all;
      exports.small = all;
      exports.span = all;
      exports.sup = all;
      exports.sub = all;
      exports.tbody = all;
      exports.tfoot = all;
      exports.thead = all;
      exports.time = all;
      exports.address = wrapped;
      exports.article = wrapped;
      exports.aside = wrapped;
      exports.body = wrapped;
      exports.center = wrapped;
      exports.div = wrapped;
      exports.fieldset = wrapped;
      exports.figcaption = wrapped;
      exports.figure = wrapped;
      exports.form = wrapped;
      exports.footer = wrapped;
      exports.header = wrapped;
      exports.hgroup = wrapped;
      exports.html = wrapped;
      exports.legend = wrapped;
      exports.main = wrapped;
      exports.multicol = wrapped;
      exports.nav = wrapped;
      exports.picture = wrapped;
      exports.section = wrapped;
      exports.a = link;
      exports.audio = media;
      exports.b = strong;
      exports.base = base;
      exports.blockquote = blockquote;
      exports.br = br;
      exports.code = inlineCode;
      exports.dir = list;
      exports.dl = dl;
      exports.dt = listItem;
      exports.dd = listItem;
      exports.del = del;
      exports.em = emphasis;
      exports.h1 = heading;
      exports.h2 = heading;
      exports.h3 = heading;
      exports.h4 = heading;
      exports.h5 = heading;
      exports.h6 = heading;
      exports.hr = thematicBreak;
      exports.i = emphasis;
      exports.iframe = iframe;
      exports.img = image;
      exports.image = image;
      exports.input = input;
      exports.kbd = inlineCode;
      exports.li = listItem;
      exports.listing = code2;
      exports.mark = emphasis;
      exports.ol = list;
      exports.p = paragraph;
      exports.plaintext = code2;
      exports.pre = code2;
      exports.q = quote;
      exports.s = del;
      exports.samp = inlineCode;
      exports.select = select;
      exports.strike = del;
      exports.strong = strong;
      exports.summary = paragraph;
      exports.table = table;
      exports.td = cell;
      exports.textarea = textarea;
      exports.th = cell;
      exports.tr = row;
      exports.tt = inlineCode;
      exports.u = emphasis;
      exports.ul = list;
      exports.var = inlineCode;
      exports.video = media;
      exports.wbr = wbr;
      exports.xmp = code2;
      function ignore() {
      }
    }
  });

  // node_modules/hast-util-to-mdast/index.js
  var require_hast_util_to_mdast = __commonJS({
    "node_modules/hast-util-to-mdast/index.js"(exports, module) {
      init_globals();
      module.exports = toMdast;
      var has = require_hast_util_has_property();
      var minify = require_rehype_minify_whitespace();
      var convert = require_convert2();
      var visit = require_unist_util_visit();
      var xtend = require_immutable();
      var one = require_one();
      var handlers = require_handlers();
      var own = require_own();
      var block = convert(["heading", "paragraph", "root"]);
      function toMdast(tree, options) {
        var settings = options || {};
        var byId = {};
        var mdast;
        h.nodeById = byId;
        h.baseFound = false;
        h.frozenBaseUrl = null;
        h.wrapText = true;
        h.qNesting = 0;
        h.handlers = settings.handlers ? xtend(handlers, settings.handlers) : handlers;
        h.augment = augment;
        h.document = settings.document;
        h.checked = settings.checked || "[x]";
        h.unchecked = settings.unchecked || "[ ]";
        h.quotes = settings.quotes || ['"'];
        visit(tree, "element", onelement);
        minify({ newlines: settings.newlines === true })(tree);
        mdast = one(h, tree, null);
        visit(mdast, "text", ontext);
        return mdast;
        function h(node, type2, props, children) {
          var result;
          if (!children && (typeof props === "string" || typeof props === "object" && "length" in props)) {
            children = props;
            props = {};
          }
          result = xtend({ type: type2 }, props);
          if (typeof children === "string") {
            result.value = children;
          } else if (children) {
            result.children = children;
          }
          return augment(node, result);
        }
        function augment(left, right) {
          if (left.position) {
            right.position = left.position;
          }
          return right;
        }
        function onelement(node) {
          var id = has(node, "id") && String(node.properties.id).toUpperCase();
          if (id && !own.call(byId, id)) {
            byId[id] = node;
          }
        }
        function ontext(node, index, parent) {
          var previous = parent.children[index - 1];
          if (previous && node.type === previous.type) {
            previous.value += node.value;
            parent.children.splice(index, 1);
            if (previous.position && node.position) {
              previous.position.end = node.position.end;
            }
            return index - 1;
          }
          node.value = node.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, "$1");
          if (block(parent)) {
            if (!index) {
              node.value = node.value.replace(/^[\t ]+/, "");
            }
            if (index === parent.children.length - 1) {
              node.value = node.value.replace(/[\t ]+$/, "");
            }
          }
          if (!node.value) {
            parent.children.splice(index, 1);
            return index;
          }
        }
      }
    }
  });

  // node_modules/rehype-remark/index.js
  var require_rehype_remark = __commonJS({
    "node_modules/rehype-remark/index.js"(exports, module) {
      init_globals();
      var hast2mdast = require_hast_util_to_mdast();
      module.exports = function(destination, options) {
        var settings;
        var processor;
        if (typeof destination === "function") {
          processor = destination;
          settings = options || {};
        } else {
          settings = destination || {};
        }
        if (settings.document === void 0 || settings.document === null) {
          settings = Object.assign({}, settings, { document: true });
        }
        return processor ? bridge(processor, settings) : mutate(settings);
      };
      function bridge(destination, options) {
        return transformer;
        function transformer(node, file, next) {
          destination.run(hast2mdast(node, options), file, done);
          function done(err) {
            next(err);
          }
        }
      }
      function mutate(options) {
        return transformer;
        function transformer(node) {
          return hast2mdast(node, options);
        }
      }
    }
  });

  // node_modules/zwitch/index.js
  var require_zwitch = __commonJS({
    "node_modules/zwitch/index.js"(exports, module) {
      init_globals();
      module.exports = factory;
      var noop = Function.prototype;
      var own = {}.hasOwnProperty;
      function factory(key, options) {
        var settings = options || {};
        function one(value) {
          var fn = one.invalid;
          var handlers = one.handlers;
          if (value && own.call(value, key)) {
            fn = own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown;
          }
          return (fn || noop).apply(this, arguments);
        }
        one.handlers = settings.handlers || {};
        one.invalid = settings.invalid;
        one.unknown = settings.unknown;
        return one;
      }
    }
  });

  // node_modules/direction/index.js
  var require_direction = __commonJS({
    "node_modules/direction/index.js"(exports, module) {
      init_globals();
      module.exports = direction;
      var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
      var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
      var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
      function direction(value) {
        value = String(value || "");
        if (rtl.test(value)) {
          return "rtl";
        }
        if (ltr.test(value)) {
          return "ltr";
        }
        return "neutral";
      }
    }
  });

  // node_modules/hast-util-to-string/index.js
  var require_hast_util_to_string = __commonJS({
    "node_modules/hast-util-to-string/index.js"(exports, module) {
      init_globals();
      module.exports = toString;
      function toString(node) {
        if ("children" in node) {
          return all(node);
        }
        return "value" in node ? node.value : "";
      }
      function one(node) {
        if (node.type === "text") {
          return node.value;
        }
        return node.children ? all(node) : "";
      }
      function all(node) {
        var children = node.children;
        var length = children.length;
        var index = -1;
        var result = [];
        while (++index < length) {
          result[index] = one(children[index]);
        }
        return result.join("");
      }
    }
  });

  // node_modules/hast-util-select/lib/enter-state.js
  var require_enter_state = __commonJS({
    "node_modules/hast-util-select/lib/enter-state.js"(exports, module) {
      init_globals();
      module.exports = enter;
      var direction = require_direction();
      var is = require_hast_util_is_element();
      var toString = require_hast_util_to_string();
      var svg = require_svg2();
      var visit = require_unist_util_visit();
      function enter(state, node) {
        var schema2 = state.schema;
        var language2 = state.language;
        var currentDirection = state.direction;
        var editableOrEditingHost = state.editableOrEditingHost;
        var dirInferred;
        var type2;
        var found;
        var lang;
        var dir;
        if (node.type === "element") {
          lang = node.properties.xmlLang || node.properties.lang;
          type2 = node.properties.type || "text";
          dir = dirProperty(node);
          if (lang != null) {
            state.language = lang;
            found = true;
          }
          if (schema2.space === "html") {
            if (node.properties.contentEditable === "true") {
              state.editableOrEditingHost = true;
              found = true;
            }
            if (is(node, "svg")) {
              state.schema = svg;
              found = true;
            }
            if (dir === "rtl") {
              dirInferred = dir;
            } else if (dir === "ltr" || dir !== "auto" && is(node, "html") || dir !== "auto" && is(node, "input") && type2 === "tel") {
              dirInferred = "ltr";
            } else if (dir === "auto" || is(node, "bdi")) {
              if (is(node, "textarea")) {
                dirInferred = dirBidi(toString(node));
              } else if (is(node, "input") && (type2 === "email" || type2 === "search" || type2 === "tel" || type2 === "text")) {
                dirInferred = node.properties.value ? dirBidi(node.properties.value) : "ltr";
              } else {
                visit(node, inferDirectionality);
              }
            }
            if (dirInferred) {
              state.direction = dirInferred;
              found = true;
            }
          } else if (state.editableOrEditingHost) {
            state.editableOrEditingHost = false;
            found = true;
          }
        }
        return found ? reset : noop;
        function reset() {
          state.schema = schema2;
          state.language = language2;
          state.direction = currentDirection;
          state.editableOrEditingHost = editableOrEditingHost;
        }
        function inferDirectionality(child) {
          if (child.type === "text") {
            dirInferred = dirBidi(child.value);
            return dirInferred ? visit.EXIT : null;
          }
          if (child !== node && (is(child, ["bdi", "script", "style", "textare"]) || dirProperty(child))) {
            return visit.SKIP;
          }
        }
      }
      function dirBidi(value) {
        var result = direction(value);
        return result === "neutral" ? null : result;
      }
      function dirProperty(node) {
        var value = typeof node.properties.dir === "string" ? node.properties.dir.toLowerCase() : null;
        return value === "auto" || value === "ltr" || value === "rtl" ? value : null;
      }
      function noop() {
      }
    }
  });

  // node_modules/hast-util-select/lib/nest.js
  var require_nest = __commonJS({
    "node_modules/hast-util-select/lib/nest.js"(exports, module) {
      init_globals();
      module.exports = match;
      var zwitch = require_zwitch();
      var enter = require_enter_state();
      var own = {}.hasOwnProperty;
      var handle = zwitch("nestingOperator", {
        unknown: unknownNesting,
        invalid: topScan,
        handlers: {
          null: descendant,
          ">": child,
          "+": nextSibling,
          "~": subsequentSibling
        }
      });
      function match(query, node, index, parent, state) {
        return handle(query, node, index, parent, state);
      }
      function unknownNesting(query) {
        throw new Error("Unexpected nesting `" + query.nestingOperator + "`");
      }
      function topScan(query, node, index, parent, state) {
        if (parent) {
          throw new Error("topScan is supposed to be called from the root node");
        }
        state.iterator.apply(null, arguments);
        if (!state.shallow)
          descendant.apply(null, arguments);
      }
      function descendant(query, node, index, parent, state) {
        var previous = state.iterator;
        state.iterator = iterator;
        child.apply(this, arguments);
        function iterator(_, node2, index2, parent2, state2) {
          state2.iterator = previous;
          previous.apply(this, arguments);
          state2.iterator = iterator;
          if (state2.one && state2.found)
            return;
          child.call(this, query, node2, index2, parent2, state2);
        }
      }
      function child(query, node, index, parent, state) {
        if (!node.children || !node.children.length)
          return;
        indexedSearch(query, node, state);
      }
      function nextSibling(query, node, index, parent, state) {
        if (!parent)
          return;
        indexedSearch(query, parent, state, index + 1, true);
      }
      function subsequentSibling(query, node, index, parent, state) {
        if (!parent)
          return;
        indexedSearch(query, parent, state, index + 1);
      }
      function indexedSearch(query, parent, state, from, firstElementOnly) {
        var handle2 = state.index ? delay : add;
        var children = parent.children;
        var types = {};
        var delayed = [];
        var elements = 0;
        var index = -1;
        if (from == null)
          from = 0;
        if (from >= children.length)
          return;
        if (state.index) {
          while (++index < from) {
            if (children[index].type === "element")
              count(children[index].tagName);
          }
        }
        index = from - 1;
        while (++index < children.length) {
          if (children[index].type === "element") {
            handle2(children[index], index);
            if (state.one && state.found)
              return;
            if (firstElementOnly)
              break;
          }
        }
        if (state.index) {
          index = -1;
          while (++index < delayed.length) {
            delayed[index]();
            if (state.one && state.found)
              return;
          }
        }
        function delay(node, childIndex) {
          var elementsBefore = elements;
          var elementsByTypeBefore = own.call(types, node.tagName) ? types[node.tagName] : 0;
          count(node.tagName);
          delayed.push(fn);
          function fn() {
            state.elementIndex = elementsBefore;
            state.typeIndex = elementsByTypeBefore;
            state.elementCount = elements;
            state.typeCount = types[node.tagName];
            add(node, childIndex);
          }
        }
        function add(node, childIndex) {
          var exit = enter(state, node);
          state.iterator(query, node, childIndex, parent, state);
          exit();
        }
        function count(name) {
          if (!own.call(types, name))
            types[name] = 0;
          elements++;
          types[name]++;
        }
      }
    }
  });

  // node_modules/bcp-47-match/index.js
  var require_bcp_47_match = __commonJS({
    "node_modules/bcp-47-match/index.js"(exports) {
      init_globals();
      exports.basicFilter = factory(basic, true);
      exports.extendedFilter = factory(extended, true);
      exports.lookup = factory(lookup);
      function basic(tag, range) {
        return range === "*" || tag === range || tag.indexOf(range + "-") > -1;
      }
      function extended(tag, range) {
        var left = tag.split("-");
        var right = range.split("-");
        var leftIndex = 0;
        var rightIndex = 0;
        if (right[rightIndex] !== "*" && left[leftIndex] !== right[rightIndex]) {
          return false;
        }
        leftIndex++;
        rightIndex++;
        while (rightIndex < right.length) {
          if (right[rightIndex] === "*") {
            rightIndex++;
            continue;
          }
          if (!left[leftIndex])
            return false;
          if (left[leftIndex] === right[rightIndex]) {
            leftIndex++;
            rightIndex++;
            continue;
          }
          if (left[leftIndex].length === 1)
            return false;
          leftIndex++;
        }
        return true;
      }
      function lookup(tag, range) {
        var right = range;
        var index;
        while (true) {
          if (right === "*" || tag === right)
            return true;
          index = right.lastIndexOf("-");
          if (index < 0)
            return false;
          if (right.charAt(index - 2) === "-")
            index -= 2;
          right = right.slice(0, index);
        }
      }
      function factory(check, filter) {
        return match;
        function match(tags, ranges) {
          var left = cast(tags, "tag");
          var right = cast(ranges == null ? "*" : ranges, "range");
          var matches = [];
          var rightIndex = -1;
          var range;
          var leftIndex;
          var next;
          while (++rightIndex < right.length) {
            range = right[rightIndex].toLowerCase();
            if (!filter && range === "*")
              continue;
            leftIndex = -1;
            next = [];
            while (++leftIndex < left.length) {
              if (check(left[leftIndex].toLowerCase(), range)) {
                if (!filter)
                  return left[leftIndex];
                matches.push(left[leftIndex]);
              } else {
                next.push(left[leftIndex]);
              }
            }
            left = next;
          }
          return filter ? matches : void 0;
        }
      }
      function cast(values, name) {
        var value = values && typeof values === "string" ? [values] : values;
        if (!value || typeof value !== "object" || !("length" in value)) {
          throw new Error(
            "Invalid " + name + " `" + value + "`, expected non-empty string"
          );
        }
        return value;
      }
    }
  });

  // node_modules/not/index.js
  var require_not = __commonJS({
    "node_modules/not/index.js"(exports, module) {
      init_globals();
      module.exports = not;
      function not(f) {
        return negation;
        function negation() {
          return !f.apply(this, arguments);
        }
      }
    }
  });

  // node_modules/hast-util-select/lib/pseudo.js
  var require_pseudo = __commonJS({
    "node_modules/hast-util-select/lib/pseudo.js"(exports, module) {
      init_globals();
      module.exports = match;
      var bcp47Match = require_bcp_47_match();
      var commaSeparated = require_comma_separated_tokens();
      var has = require_hast_util_has_property();
      var is = require_hast_util_is_element();
      var whitespace = require_hast_util_whitespace();
      var not = require_not();
      var zwitch = require_zwitch();
      var anything = require_any();
      var handle = zwitch("name", {
        unknown: unknownPseudo,
        invalid: invalidPseudo,
        handlers: {
          any: matches,
          "any-link": anyLink,
          blank,
          checked,
          dir,
          disabled,
          empty,
          enabled: not(disabled),
          "first-child": firstChild,
          "first-of-type": firstOfType,
          has: hasSelector,
          lang,
          "last-child": lastChild,
          "last-of-type": lastOfType,
          matches,
          not: not(matches),
          "nth-child": nthChild,
          "nth-last-child": nthLastChild,
          "nth-of-type": nthOfType,
          "nth-last-of-type": nthLastOfType,
          "only-child": onlyChild,
          "only-of-type": onlyOfType,
          optional: not(required),
          "read-only": not(readWrite),
          "read-write": readWrite,
          required,
          root,
          scope
        }
      });
      match.needsIndex = [
        "first-child",
        "first-of-type",
        "last-child",
        "last-of-type",
        "nth-child",
        "nth-last-child",
        "nth-of-type",
        "nth-last-of-type",
        "only-child",
        "only-of-type"
      ];
      function match(query, node, index, parent, state) {
        var pseudos = query.pseudos;
        var offset = -1;
        while (++offset < pseudos.length) {
          if (!handle(pseudos[offset], node, index, parent, state))
            return;
        }
        return true;
      }
      function matches(query, node, index, parent, state) {
        var shallow = state.shallow;
        var one = state.one;
        var result;
        state.shallow = true;
        state.one = true;
        result = anything(query.value, node, state)[0] === node;
        state.shallow = shallow;
        state.one = one;
        return result;
      }
      function anyLink(query, node) {
        return is(node, ["a", "area", "link"]) && has(node, "href");
      }
      function checked(query, node) {
        if (is(node, ["input", "menuitem"])) {
          return (node.properties.type === "checkbox" || node.properties.type === "radio") && has(node, "checked");
        }
        if (is(node, "option"))
          return has(node, "selected");
      }
      function dir(query, node, index, parent, state) {
        return state.direction === query.value;
      }
      function disabled(query, node) {
        return is(node, [
          "button",
          "input",
          "select",
          "textarea",
          "optgroup",
          "option",
          "menuitem",
          "fieldset"
        ]) && has(node, "disabled");
      }
      function required(query, node) {
        return is(node, ["input", "textarea", "select"]) && has(node, "required");
      }
      function readWrite(query, node, index, parent, state) {
        return is(node, ["input", "textarea"]) ? !has(node, "readOnly") && !has(node, "disabled") : state.editableOrEditingHost;
      }
      function root(query, node, index, parent, state) {
        return (!parent || parent.type === "root") && (state.schema.space === "html" || state.schema.space === "svg") && is(node, ["html", "svg"]);
      }
      function scope(query, node, index, parent, state) {
        return is(node) && state.scopeElements.indexOf(node) > -1;
      }
      function empty(query, node) {
        return !someChildren(node, check);
        function check(child) {
          return child.type === "element" || child.type === "text";
        }
      }
      function blank(query, node) {
        return !someChildren(node, check);
        function check(child) {
          return child.type === "element" || child.type === "text" && !whitespace(child);
        }
      }
      function firstChild(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.elementIndex === 0;
      }
      function lang(query, node, index, parent, state) {
        return state.language !== "" && state.language != null && bcp47Match.extendedFilter(state.language, commaSeparated.parse(query.value)).length;
      }
      function lastChild(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.elementIndex === state.elementCount - 1;
      }
      function onlyChild(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.elementCount === 1;
      }
      function nthChild(query, node, index, parent, state) {
        assertDeep(state, query);
        return query.value(state.elementIndex);
      }
      function nthLastChild(query, node, index, parent, state) {
        assertDeep(state, query);
        return query.value(state.elementCount - state.elementIndex - 1);
      }
      function nthOfType(query, node, index, parent, state) {
        assertDeep(state, query);
        return query.value(state.typeIndex);
      }
      function nthLastOfType(query, node, index, parent, state) {
        assertDeep(state, query);
        return query.value(state.typeCount - 1 - state.typeIndex);
      }
      function firstOfType(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.typeIndex === 0;
      }
      function lastOfType(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.typeIndex === state.typeCount - 1;
      }
      function onlyOfType(query, node, index, parent, state) {
        assertDeep(state, query);
        return state.typeCount === 1;
      }
      function someChildren(node, check) {
        var children = node.children;
        var index = -1;
        while (++index < children.length) {
          if (check(children[index]))
            return true;
        }
      }
      function invalidPseudo() {
        throw new Error("Invalid pseudo-selector");
      }
      function unknownPseudo(query) {
        if (query.name) {
          throw new Error("Unknown pseudo-selector `" + query.name + "`");
        }
        throw new Error("Unexpected pseudo-element or empty pseudo-class");
      }
      function assertDeep(state, query) {
        if (state.shallow) {
          throw new Error("Cannot use `:" + query.name + "` without parent");
        }
      }
      function hasSelector(query, node, index, parent, state) {
        var shallow = state.shallow;
        var one = state.one;
        var scopeElements = state.scopeElements;
        var value = appendScope(query.value);
        var result;
        state.shallow = false;
        state.one = true;
        state.scopeElements = [node];
        result = anything(value, node, state)[0];
        state.shallow = shallow;
        state.one = one;
        state.scopeElements = scopeElements;
        return result;
      }
      function appendScope(value) {
        var selector = value.type === "ruleSet" ? { type: "selectors", selectors: [value] } : value;
        var index = -1;
        var rule;
        while (++index < selector.selectors.length) {
          rule = selector.selectors[index].rule;
          rule.nestingOperator = null;
          if (!rule.pseudos || rule.pseudos.length !== 1 || rule.pseudos[0].name !== "scope") {
            selector.selectors[index] = {
              type: "rule",
              rule,
              pseudos: [{ name: "scope" }]
            };
          }
        }
        return selector;
      }
    }
  });

  // node_modules/hast-util-select/lib/attribute.js
  var require_attribute = __commonJS({
    "node_modules/hast-util-select/lib/attribute.js"(exports, module) {
      init_globals();
      module.exports = match;
      var commas = require_comma_separated_tokens();
      var has = require_hast_util_has_property();
      var find = require_find();
      var spaces = require_space_separated_tokens();
      var zwitch = require_zwitch();
      var handle = zwitch("operator", {
        unknown: unknownOperator,
        invalid: exists,
        handlers: {
          "=": exact,
          "~=": spaceSeparatedList,
          "|=": exactOrPrefix,
          "^=": begins,
          "$=": ends,
          "*=": contains
        }
      });
      function match(query, node, schema2) {
        var attrs = query.attrs;
        var index = -1;
        while (++index < attrs.length) {
          if (!handle(attrs[index], node, find(schema2, attrs[index].name)))
            return;
        }
        return true;
      }
      function exists(query, node, info) {
        return has(node, info.property);
      }
      function exact(query, node, info) {
        return has(node, info.property) && normalizeValue(node.properties[info.property], info) === query.value;
      }
      function spaceSeparatedList(query, node, info) {
        var value = node.properties[info.property];
        return !info.commaSeparated && value && typeof value === "object" && value.indexOf(query.value) > -1 || has(node, info.property) && normalizeValue(value, info) === query.value;
      }
      function exactOrPrefix(query, node, info) {
        var value = normalizeValue(node.properties[info.property], info);
        return has(node, info.property) && (value === query.value || value.slice(0, query.value.length) === query.value && value.charAt(query.value.length) === "-");
      }
      function begins(query, node, info) {
        return has(node, info.property) && normalizeValue(node.properties[info.property], info).slice(
          0,
          query.value.length
        ) === query.value;
      }
      function ends(query, node, info) {
        return has(node, info.property) && normalizeValue(node.properties[info.property], info).slice(
          -query.value.length
        ) === query.value;
      }
      function contains(query, node, info) {
        return has(node, info.property) && normalizeValue(node.properties[info.property], info).indexOf(query.value) > -1;
      }
      function unknownOperator(query) {
        throw new Error("Unknown operator `" + query.operator + "`");
      }
      function normalizeValue(value, info) {
        if (typeof value === "number") {
          return String(value);
        }
        if (typeof value === "boolean") {
          return info.attribute;
        }
        if (typeof value === "object" && "length" in value) {
          return (info.commaSeparated ? commas.stringify : spaces.stringify)(value);
        }
        return value;
      }
    }
  });

  // node_modules/hast-util-select/lib/class-name.js
  var require_class_name = __commonJS({
    "node_modules/hast-util-select/lib/class-name.js"(exports, module) {
      init_globals();
      module.exports = match;
      function match(query, node) {
        var value = node.properties.className || [];
        var index = -1;
        while (++index < query.classNames.length) {
          if (value.indexOf(query.classNames[index]) < 0)
            return;
        }
        return true;
      }
    }
  });

  // node_modules/hast-util-select/lib/id.js
  var require_id = __commonJS({
    "node_modules/hast-util-select/lib/id.js"(exports, module) {
      init_globals();
      module.exports = match;
      function match(query, node) {
        return node.properties.id === query.id;
      }
    }
  });

  // node_modules/hast-util-select/lib/name.js
  var require_name = __commonJS({
    "node_modules/hast-util-select/lib/name.js"(exports, module) {
      init_globals();
      module.exports = match;
      function match(query, node) {
        return query.tagName === "*" || query.tagName === node.tagName;
      }
    }
  });

  // node_modules/hast-util-select/lib/test.js
  var require_test = __commonJS({
    "node_modules/hast-util-select/lib/test.js"(exports, module) {
      init_globals();
      module.exports = test;
      var attributes = require_attribute();
      var classNames = require_class_name();
      var id = require_id();
      var name = require_name();
      var pseudos = require_pseudo();
      function test(query, node, index, parent, state) {
        return node && node.type === "element" && (!query.tagName || name(query, node)) && (!query.classNames || classNames(query, node)) && (!query.id || id(query, node)) && (!query.attrs || attributes(query, node, state.schema)) && (!query.pseudos || pseudos(query, node, index, parent, state));
      }
    }
  });

  // node_modules/hast-util-select/lib/any.js
  var require_any = __commonJS({
    "node_modules/hast-util-select/lib/any.js"(exports, module) {
      init_globals();
      module.exports = match;
      var html2 = require_html2();
      var svg = require_svg2();
      var zwitch = require_zwitch();
      var enter = require_enter_state();
      var nest = require_nest();
      var pseudo = require_pseudo();
      var test = require_test();
      var type2 = zwitch("type", {
        unknown: unknownType,
        invalid: invalidType,
        handlers: {
          selectors,
          ruleSet,
          rule
        }
      });
      function match(query, node, state) {
        return query && node ? type2(query, node, state) : [];
      }
      function selectors(query, node, state) {
        var collect = collector(state.one);
        var index = -1;
        while (++index < query.selectors.length) {
          collect(ruleSet(query.selectors[index], node, state));
        }
        return collect.result;
      }
      function ruleSet(query, node, state) {
        return rule(query.rule, node, state);
      }
      function rule(query, tree, state) {
        var collect = collector(state.one);
        if (state.shallow && query.rule) {
          throw new Error("Expected selector without nesting");
        }
        nest(
          query,
          tree,
          0,
          null,
          configure(query, {
            schema: state.space === "svg" ? svg : html2,
            language: null,
            direction: "ltr",
            editableOrEditingHost: false,
            scopeElements: tree.type === "root" ? tree.children : [tree],
            iterator,
            one: state.one,
            shallow: state.shallow
          })
        );
        return collect.result;
        function iterator(query2, node, index, parent, state2) {
          var exit = enter(state2, node);
          if (test(query2, node, index, parent, state2)) {
            if (query2.rule) {
              nest(query2.rule, node, index, parent, configure(query2.rule, state2));
            } else {
              collect(node);
              state2.found = true;
            }
          }
          exit();
        }
        function configure(query2, state2) {
          var pseudos = query2.pseudos || [];
          var index = -1;
          while (++index < pseudos.length) {
            if (pseudo.needsIndex.indexOf(pseudos[index].name) > -1) {
              state2.index = true;
              break;
            }
          }
          return state2;
        }
      }
      function unknownType(query) {
        throw new Error("Unknown type `" + query.type + "`");
      }
      function invalidType() {
        throw new Error("Invalid type");
      }
      function collector(one) {
        var result = [];
        var found;
        collect.result = result;
        return collect;
        function collect(source2) {
          var index = -1;
          if ("length" in source2) {
            while (++index < source2.length) {
              collectOne(source2[index]);
            }
          } else {
            collectOne(source2);
          }
          function collectOne(element) {
            if (one) {
              if (found)
                throw new Error("Cannot collect multiple nodes");
              found = true;
            }
            if (result.indexOf(element) < 0)
              result.push(element);
          }
        }
      }
    }
  });

  // node_modules/css-selector-parser/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/css-selector-parser/lib/utils.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function isIdentStart(c) {
        return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "-" || c === "_";
      }
      exports.isIdentStart = isIdentStart;
      function isIdent(c) {
        return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "-" || c === "_";
      }
      exports.isIdent = isIdent;
      function isHex(c) {
        return c >= "a" && c <= "f" || c >= "A" && c <= "F" || c >= "0" && c <= "9";
      }
      exports.isHex = isHex;
      function escapeIdentifier(s) {
        var len = s.length;
        var result = "";
        var i = 0;
        while (i < len) {
          var chr = s.charAt(i);
          if (exports.identSpecialChars[chr]) {
            result += "\\" + chr;
          } else {
            if (!(chr === "_" || chr === "-" || chr >= "A" && chr <= "Z" || chr >= "a" && chr <= "z" || i !== 0 && chr >= "0" && chr <= "9")) {
              var charCode = chr.charCodeAt(0);
              if ((charCode & 63488) === 55296) {
                var extraCharCode = s.charCodeAt(i++);
                if ((charCode & 64512) !== 55296 || (extraCharCode & 64512) !== 56320) {
                  throw Error("UCS-2(decode): illegal sequence");
                }
                charCode = ((charCode & 1023) << 10) + (extraCharCode & 1023) + 65536;
              }
              result += "\\" + charCode.toString(16) + " ";
            } else {
              result += chr;
            }
          }
          i++;
        }
        return result;
      }
      exports.escapeIdentifier = escapeIdentifier;
      function escapeStr(s) {
        var len = s.length;
        var result = "";
        var i = 0;
        var replacement;
        while (i < len) {
          var chr = s.charAt(i);
          if (chr === '"') {
            chr = '\\"';
          } else if (chr === "\\") {
            chr = "\\\\";
          } else if ((replacement = exports.strReplacementsRev[chr]) !== void 0) {
            chr = replacement;
          }
          result += chr;
          i++;
        }
        return '"' + result + '"';
      }
      exports.escapeStr = escapeStr;
      exports.identSpecialChars = {
        "!": true,
        '"': true,
        "#": true,
        "$": true,
        "%": true,
        "&": true,
        "'": true,
        "(": true,
        ")": true,
        "*": true,
        "+": true,
        ",": true,
        ".": true,
        "/": true,
        ";": true,
        "<": true,
        "=": true,
        ">": true,
        "?": true,
        "@": true,
        "[": true,
        "\\": true,
        "]": true,
        "^": true,
        "`": true,
        "{": true,
        "|": true,
        "}": true,
        "~": true
      };
      exports.strReplacementsRev = {
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\f": "\\f",
        "\v": "\\v"
      };
      exports.singleQuoteEscapeChars = {
        n: "\n",
        r: "\r",
        t: "	",
        f: "\f",
        "\\": "\\",
        "'": "'"
      };
      exports.doubleQuotesEscapeChars = {
        n: "\n",
        r: "\r",
        t: "	",
        f: "\f",
        "\\": "\\",
        '"': '"'
      };
    }
  });

  // node_modules/css-selector-parser/lib/parser-context.js
  var require_parser_context = __commonJS({
    "node_modules/css-selector-parser/lib/parser-context.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var utils_1 = require_utils();
      function parseCssSelector(str, pos, pseudos, attrEqualityMods, ruleNestingOperators, substitutesEnabled) {
        var l = str.length;
        var chr = "";
        function getStr(quote, escapeTable) {
          var result = "";
          pos++;
          chr = str.charAt(pos);
          while (pos < l) {
            if (chr === quote) {
              pos++;
              return result;
            } else if (chr === "\\") {
              pos++;
              chr = str.charAt(pos);
              var esc = void 0;
              if (chr === quote) {
                result += quote;
              } else if ((esc = escapeTable[chr]) !== void 0) {
                result += esc;
              } else if (utils_1.isHex(chr)) {
                var hex = chr;
                pos++;
                chr = str.charAt(pos);
                while (utils_1.isHex(chr)) {
                  hex += chr;
                  pos++;
                  chr = str.charAt(pos);
                }
                if (chr === " ") {
                  pos++;
                  chr = str.charAt(pos);
                }
                result += String.fromCharCode(parseInt(hex, 16));
                continue;
              } else {
                result += chr;
              }
            } else {
              result += chr;
            }
            pos++;
            chr = str.charAt(pos);
          }
          return result;
        }
        function getIdent() {
          var result = "";
          chr = str.charAt(pos);
          while (pos < l) {
            if (utils_1.isIdent(chr)) {
              result += chr;
            } else if (chr === "\\") {
              pos++;
              if (pos >= l) {
                throw Error("Expected symbol but end of file reached.");
              }
              chr = str.charAt(pos);
              if (utils_1.identSpecialChars[chr]) {
                result += chr;
              } else if (utils_1.isHex(chr)) {
                var hex = chr;
                pos++;
                chr = str.charAt(pos);
                while (utils_1.isHex(chr)) {
                  hex += chr;
                  pos++;
                  chr = str.charAt(pos);
                }
                if (chr === " ") {
                  pos++;
                  chr = str.charAt(pos);
                }
                result += String.fromCharCode(parseInt(hex, 16));
                continue;
              } else {
                result += chr;
              }
            } else {
              return result;
            }
            pos++;
            chr = str.charAt(pos);
          }
          return result;
        }
        function skipWhitespace() {
          chr = str.charAt(pos);
          var result = false;
          while (chr === " " || chr === "	" || chr === "\n" || chr === "\r" || chr === "\f") {
            result = true;
            pos++;
            chr = str.charAt(pos);
          }
          return result;
        }
        function parse() {
          var res = parseSelector();
          if (pos < l) {
            throw Error('Rule expected but "' + str.charAt(pos) + '" found.');
          }
          return res;
        }
        function parseSelector() {
          var selector = parseSingleSelector();
          if (!selector) {
            return null;
          }
          var res = selector;
          chr = str.charAt(pos);
          while (chr === ",") {
            pos++;
            skipWhitespace();
            if (res.type !== "selectors") {
              res = {
                type: "selectors",
                selectors: [selector]
              };
            }
            selector = parseSingleSelector();
            if (!selector) {
              throw Error('Rule expected after ",".');
            }
            res.selectors.push(selector);
          }
          return res;
        }
        function parseSingleSelector() {
          skipWhitespace();
          var selector = {
            type: "ruleSet"
          };
          var rule = parseRule();
          if (!rule) {
            return null;
          }
          var currentRule = selector;
          while (rule) {
            rule.type = "rule";
            currentRule.rule = rule;
            currentRule = rule;
            skipWhitespace();
            chr = str.charAt(pos);
            if (pos >= l || chr === "," || chr === ")") {
              break;
            }
            if (ruleNestingOperators[chr]) {
              var op = chr;
              pos++;
              skipWhitespace();
              rule = parseRule();
              if (!rule) {
                throw Error('Rule expected after "' + op + '".');
              }
              rule.nestingOperator = op;
            } else {
              rule = parseRule();
              if (rule) {
                rule.nestingOperator = null;
              }
            }
          }
          return selector;
        }
        function parseRule() {
          var rule = null;
          while (pos < l) {
            chr = str.charAt(pos);
            if (chr === "*") {
              pos++;
              (rule = rule || {}).tagName = "*";
            } else if (utils_1.isIdentStart(chr) || chr === "\\") {
              (rule = rule || {}).tagName = getIdent();
            } else if (chr === ".") {
              pos++;
              rule = rule || {};
              (rule.classNames = rule.classNames || []).push(getIdent());
            } else if (chr === "#") {
              pos++;
              (rule = rule || {}).id = getIdent();
            } else if (chr === "[") {
              pos++;
              skipWhitespace();
              var attr = {
                name: getIdent()
              };
              skipWhitespace();
              if (chr === "]") {
                pos++;
              } else {
                var operator = "";
                if (attrEqualityMods[chr]) {
                  operator = chr;
                  pos++;
                  chr = str.charAt(pos);
                }
                if (pos >= l) {
                  throw Error('Expected "=" but end of file reached.');
                }
                if (chr !== "=") {
                  throw Error('Expected "=" but "' + chr + '" found.');
                }
                attr.operator = operator + "=";
                pos++;
                skipWhitespace();
                var attrValue = "";
                attr.valueType = "string";
                if (chr === '"') {
                  attrValue = getStr('"', utils_1.doubleQuotesEscapeChars);
                } else if (chr === "'") {
                  attrValue = getStr("'", utils_1.singleQuoteEscapeChars);
                } else if (substitutesEnabled && chr === "$") {
                  pos++;
                  attrValue = getIdent();
                  attr.valueType = "substitute";
                } else {
                  while (pos < l) {
                    if (chr === "]") {
                      break;
                    }
                    attrValue += chr;
                    pos++;
                    chr = str.charAt(pos);
                  }
                  attrValue = attrValue.trim();
                }
                skipWhitespace();
                if (pos >= l) {
                  throw Error('Expected "]" but end of file reached.');
                }
                if (chr !== "]") {
                  throw Error('Expected "]" but "' + chr + '" found.');
                }
                pos++;
                attr.value = attrValue;
              }
              rule = rule || {};
              (rule.attrs = rule.attrs || []).push(attr);
            } else if (chr === ":") {
              pos++;
              var pseudoName = getIdent();
              var pseudo = {
                name: pseudoName
              };
              if (chr === "(") {
                pos++;
                var value = "";
                skipWhitespace();
                if (pseudos[pseudoName] === "selector") {
                  pseudo.valueType = "selector";
                  value = parseSelector();
                } else {
                  pseudo.valueType = pseudos[pseudoName] || "string";
                  if (chr === '"') {
                    value = getStr('"', utils_1.doubleQuotesEscapeChars);
                  } else if (chr === "'") {
                    value = getStr("'", utils_1.singleQuoteEscapeChars);
                  } else if (substitutesEnabled && chr === "$") {
                    pos++;
                    value = getIdent();
                    pseudo.valueType = "substitute";
                  } else {
                    while (pos < l) {
                      if (chr === ")") {
                        break;
                      }
                      value += chr;
                      pos++;
                      chr = str.charAt(pos);
                    }
                    value = value.trim();
                  }
                  skipWhitespace();
                }
                if (pos >= l) {
                  throw Error('Expected ")" but end of file reached.');
                }
                if (chr !== ")") {
                  throw Error('Expected ")" but "' + chr + '" found.');
                }
                pos++;
                pseudo.value = value;
              }
              rule = rule || {};
              (rule.pseudos = rule.pseudos || []).push(pseudo);
            } else {
              break;
            }
          }
          return rule;
        }
        return parse();
      }
      exports.parseCssSelector = parseCssSelector;
    }
  });

  // node_modules/css-selector-parser/lib/render.js
  var require_render = __commonJS({
    "node_modules/css-selector-parser/lib/render.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var utils_1 = require_utils();
      function renderEntity(entity) {
        var res = "";
        switch (entity.type) {
          case "ruleSet":
            var currentEntity = entity.rule;
            var parts = [];
            while (currentEntity) {
              if (currentEntity.nestingOperator) {
                parts.push(currentEntity.nestingOperator);
              }
              parts.push(renderEntity(currentEntity));
              currentEntity = currentEntity.rule;
            }
            res = parts.join(" ");
            break;
          case "selectors":
            res = entity.selectors.map(renderEntity).join(", ");
            break;
          case "rule":
            if (entity.tagName) {
              if (entity.tagName === "*") {
                res = "*";
              } else {
                res = utils_1.escapeIdentifier(entity.tagName);
              }
            }
            if (entity.id) {
              res += "#" + utils_1.escapeIdentifier(entity.id);
            }
            if (entity.classNames) {
              res += entity.classNames.map(function(cn) {
                return "." + utils_1.escapeIdentifier(cn);
              }).join("");
            }
            if (entity.attrs) {
              res += entity.attrs.map(function(attr) {
                if ("operator" in attr) {
                  if (attr.valueType === "substitute") {
                    return "[" + utils_1.escapeIdentifier(attr.name) + attr.operator + "$" + attr.value + "]";
                  } else {
                    return "[" + utils_1.escapeIdentifier(attr.name) + attr.operator + utils_1.escapeStr(attr.value) + "]";
                  }
                } else {
                  return "[" + utils_1.escapeIdentifier(attr.name) + "]";
                }
              }).join("");
            }
            if (entity.pseudos) {
              res += entity.pseudos.map(function(pseudo) {
                if (pseudo.valueType) {
                  if (pseudo.valueType === "selector") {
                    return ":" + utils_1.escapeIdentifier(pseudo.name) + "(" + renderEntity(pseudo.value) + ")";
                  } else if (pseudo.valueType === "substitute") {
                    return ":" + utils_1.escapeIdentifier(pseudo.name) + "($" + pseudo.value + ")";
                  } else if (pseudo.valueType === "numeric") {
                    return ":" + utils_1.escapeIdentifier(pseudo.name) + "(" + pseudo.value + ")";
                  } else {
                    return ":" + utils_1.escapeIdentifier(pseudo.name) + "(" + utils_1.escapeIdentifier(pseudo.value) + ")";
                  }
                } else {
                  return ":" + utils_1.escapeIdentifier(pseudo.name);
                }
              }).join("");
            }
            break;
          default:
            throw Error('Unknown entity type: "' + entity.type + '".');
        }
        return res;
      }
      exports.renderEntity = renderEntity;
    }
  });

  // node_modules/css-selector-parser/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/css-selector-parser/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var parser_context_1 = require_parser_context();
      var render_1 = require_render();
      var CssSelectorParser = function() {
        function CssSelectorParser2() {
          this.pseudos = {};
          this.attrEqualityMods = {};
          this.ruleNestingOperators = {};
          this.substitutesEnabled = false;
        }
        CssSelectorParser2.prototype.registerSelectorPseudos = function() {
          var pseudos = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
          }
          for (var _a2 = 0, pseudos_1 = pseudos; _a2 < pseudos_1.length; _a2++) {
            var pseudo = pseudos_1[_a2];
            this.pseudos[pseudo] = "selector";
          }
          return this;
        };
        CssSelectorParser2.prototype.unregisterSelectorPseudos = function() {
          var pseudos = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
          }
          for (var _a2 = 0, pseudos_2 = pseudos; _a2 < pseudos_2.length; _a2++) {
            var pseudo = pseudos_2[_a2];
            delete this.pseudos[pseudo];
          }
          return this;
        };
        CssSelectorParser2.prototype.registerNumericPseudos = function() {
          var pseudos = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
          }
          for (var _a2 = 0, pseudos_3 = pseudos; _a2 < pseudos_3.length; _a2++) {
            var pseudo = pseudos_3[_a2];
            this.pseudos[pseudo] = "numeric";
          }
          return this;
        };
        CssSelectorParser2.prototype.unregisterNumericPseudos = function() {
          var pseudos = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
          }
          for (var _a2 = 0, pseudos_4 = pseudos; _a2 < pseudos_4.length; _a2++) {
            var pseudo = pseudos_4[_a2];
            delete this.pseudos[pseudo];
          }
          return this;
        };
        CssSelectorParser2.prototype.registerNestingOperators = function() {
          var operators = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operators[_i] = arguments[_i];
          }
          for (var _a2 = 0, operators_1 = operators; _a2 < operators_1.length; _a2++) {
            var operator = operators_1[_a2];
            this.ruleNestingOperators[operator] = true;
          }
          return this;
        };
        CssSelectorParser2.prototype.unregisterNestingOperators = function() {
          var operators = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operators[_i] = arguments[_i];
          }
          for (var _a2 = 0, operators_2 = operators; _a2 < operators_2.length; _a2++) {
            var operator = operators_2[_a2];
            delete this.ruleNestingOperators[operator];
          }
          return this;
        };
        CssSelectorParser2.prototype.registerAttrEqualityMods = function() {
          var mods = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            mods[_i] = arguments[_i];
          }
          for (var _a2 = 0, mods_1 = mods; _a2 < mods_1.length; _a2++) {
            var mod = mods_1[_a2];
            this.attrEqualityMods[mod] = true;
          }
          return this;
        };
        CssSelectorParser2.prototype.unregisterAttrEqualityMods = function() {
          var mods = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            mods[_i] = arguments[_i];
          }
          for (var _a2 = 0, mods_2 = mods; _a2 < mods_2.length; _a2++) {
            var mod = mods_2[_a2];
            delete this.attrEqualityMods[mod];
          }
          return this;
        };
        CssSelectorParser2.prototype.enableSubstitutes = function() {
          this.substitutesEnabled = true;
          return this;
        };
        CssSelectorParser2.prototype.disableSubstitutes = function() {
          this.substitutesEnabled = false;
          return this;
        };
        CssSelectorParser2.prototype.parse = function(str) {
          return parser_context_1.parseCssSelector(str, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
        };
        CssSelectorParser2.prototype.render = function(path) {
          return render_1.renderEntity(path).trim();
        };
        return CssSelectorParser2;
      }();
      exports.CssSelectorParser = CssSelectorParser;
    }
  });

  // node_modules/nth-check/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/nth-check/lib/parse.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = void 0;
      var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
      var ZERO = "0".charCodeAt(0);
      var NINE = "9".charCodeAt(0);
      function parse(formula) {
        formula = formula.trim().toLowerCase();
        if (formula === "even") {
          return [2, 0];
        } else if (formula === "odd") {
          return [2, 1];
        }
        var idx = 0;
        var a = 0;
        var sign = readSign();
        var number2 = readNumber();
        if (idx < formula.length && formula.charAt(idx) === "n") {
          idx++;
          a = sign * (number2 !== null && number2 !== void 0 ? number2 : 1);
          skipWhitespace();
          if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number2 = readNumber();
          } else {
            sign = number2 = 0;
          }
        }
        if (number2 === null || idx < formula.length) {
          throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
        }
        return [a, sign * number2];
        function readSign() {
          if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
          }
          if (formula.charAt(idx) === "+") {
            idx++;
          }
          return 1;
        }
        function readNumber() {
          var start = idx;
          var value = 0;
          while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
          }
          return idx === start ? null : value;
        }
        function skipWhitespace() {
          while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
            idx++;
          }
        }
      }
      exports.parse = parse;
    }
  });

  // node_modules/boolbase/index.js
  var require_boolbase = __commonJS({
    "node_modules/boolbase/index.js"(exports, module) {
      init_globals();
      module.exports = {
        trueFunc: function trueFunc() {
          return true;
        },
        falseFunc: function falseFunc() {
          return false;
        }
      };
    }
  });

  // node_modules/nth-check/lib/compile.js
  var require_compile = __commonJS({
    "node_modules/nth-check/lib/compile.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = void 0;
      var boolbase_1 = require_boolbase();
      function compile(parsed) {
        var a = parsed[0];
        var b = parsed[1] - 1;
        if (b < 0 && a <= 0)
          return boolbase_1.falseFunc;
        if (a === -1)
          return function(index) {
            return index <= b;
          };
        if (a === 0)
          return function(index) {
            return index === b;
          };
        if (a === 1)
          return b < 0 ? boolbase_1.trueFunc : function(index) {
            return index >= b;
          };
        var absA = Math.abs(a);
        var bMod = (b % absA + absA) % absA;
        return a > 1 ? function(index) {
          return index >= b && index % absA === bMod;
        } : function(index) {
          return index <= b && index % absA === bMod;
        };
      }
      exports.compile = compile;
    }
  });

  // node_modules/nth-check/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/nth-check/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = exports.parse = void 0;
      var parse_1 = require_parse();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var compile_1 = require_compile();
      Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
        return compile_1.compile;
      } });
      function nthCheck(formula) {
        return (0, compile_1.compile)((0, parse_1.parse)(formula));
      }
      exports.default = nthCheck;
    }
  });

  // node_modules/hast-util-select/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/hast-util-select/lib/parse.js"(exports, module) {
      init_globals();
      module.exports = parse;
      var Parser = require_lib2().CssSelectorParser;
      var nthCheck = require_lib3().default;
      var zwitch = require_zwitch();
      var nth = ["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"];
      var parser = new Parser();
      var compile = zwitch("type", {
        handlers: {
          selectors,
          ruleSet,
          rule
        }
      });
      parser.registerAttrEqualityMods("~", "|", "^", "$", "*");
      parser.registerSelectorPseudos("any", "matches", "not", "has");
      parser.registerNestingOperators(">", "+", "~");
      function parse(selector) {
        if (typeof selector !== "string") {
          throw new Error("Expected `string` as selector, not `" + selector + "`");
        }
        return compile(parser.parse(selector));
      }
      function selectors(query) {
        var selectors2 = query.selectors;
        var index = -1;
        while (++index < selectors2.length) {
          compile(selectors2[index]);
        }
        return query;
      }
      function ruleSet(query) {
        return rule(query.rule);
      }
      function rule(query) {
        var pseudos = query.pseudos || [];
        var index = -1;
        var pseudo;
        while (++index < pseudos.length) {
          pseudo = pseudos[index];
          if (nth.indexOf(pseudo.name) > -1) {
            pseudo.value = nthCheck(pseudo.value);
            pseudo.valueType = "function";
          }
        }
        compile(query.rule);
        return query;
      }
    }
  });

  // node_modules/hast-util-select/index.js
  var require_hast_util_select = __commonJS({
    "node_modules/hast-util-select/index.js"(exports) {
      init_globals();
      exports.matches = matches;
      exports.selectAll = selectAll;
      exports.select = select;
      var any = require_any();
      var parse = require_parse2();
      function matches(selector, node, space) {
        return Boolean(
          any(parse(selector), node, { space, one: true, shallow: true })[0]
        );
      }
      function select(selector, node, space) {
        return any(parse(selector), node, { space, one: true })[0] || null;
      }
      function selectAll(selector, node, space) {
        return any(parse(selector), node, { space });
      }
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/to-node-array.js
  var require_to_node_array = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/to-node-array.js"(exports, module) {
      init_globals();
      function toNodeArray(input) {
        if (typeof input === "string") {
          return [{
            type: "text",
            value: input
          }];
        } else if (Array.isArray(input)) {
          return input;
        } else if (!input) {
          return [];
        } else if (input.type === "root") {
          return input.children;
        }
        return [input];
      }
      module.exports = toNodeArray;
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/hast-util-insert.js
  var require_hast_util_insert = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/hast-util-insert.js"(exports, module) {
      init_globals();
      var hastUtilSelect = require_hast_util_select();
      var toNodeArray = require_to_node_array();
      function hastUtilInsert(tree, selector, nodes, action = "insert") {
        const foundNode = hastUtilSelect.select(selector, tree);
        if (foundNode) {
          if (typeof nodes === "function") {
            nodes = nodes.call(tree, foundNode);
          }
          const nodeArray = toNodeArray(nodes);
          if (action === "append") {
            foundNode.children = foundNode.children.concat(nodeArray);
          } else if (action === "prepend") {
            foundNode.children = nodeArray.concat(foundNode.children);
          } else if (action === "insert") {
            foundNode.children = nodeArray.slice();
          }
        }
        return foundNode;
      }
      module.exports = hastUtilInsert;
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/rehype-insert.js
  var require_rehype_insert = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/rehype-insert.js"(exports, module) {
      init_globals();
      var hastUtilInsert = require_hast_util_insert();
      function rehypeInsert(options = {}) {
        return function rehypeInsertTransformer(tree) {
          const {
            insertions = []
          } = options;
          insertions.forEach(function(i) {
            hastUtilInsert(tree, i.selector, i.insert, i.action);
          });
        };
      }
      module.exports = rehypeInsert;
    }
  });

  // node_modules/mdast-util-to-markdown/lib/configure.js
  var require_configure = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/configure.js"(exports, module) {
      init_globals();
      module.exports = configure;
      function configure(base, extension) {
        var index = -1;
        var key;
        if (extension.extensions) {
          while (++index < extension.extensions.length) {
            configure(base, extension.extensions[index]);
          }
        }
        for (key in extension) {
          if (key === "extensions") {
          } else if (key === "unsafe" || key === "join") {
            base[key] = base[key].concat(extension[key] || []);
          } else if (key === "handlers") {
            base[key] = Object.assign(base[key], extension[key] || {});
          } else {
            base.options[key] = extension[key];
          }
        }
        return base;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/container-flow.js
  var require_container_flow = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/container-flow.js"(exports, module) {
      init_globals();
      module.exports = flow;
      var repeat = require_repeat_string();
      function flow(parent, context) {
        var children = parent.children || [];
        var results = [];
        var index = -1;
        var child;
        while (++index < children.length) {
          child = children[index];
          results.push(
            context.handle(child, parent, context, { before: "\n", after: "\n" })
          );
          if (index + 1 < children.length) {
            results.push(between(child, children[index + 1]));
          }
        }
        return results.join("");
        function between(left, right) {
          var index2 = -1;
          var result;
          while (++index2 < context.join.length) {
            result = context.join[index2](left, right, parent, context);
            if (result === true || result === 1) {
              break;
            }
            if (typeof result === "number") {
              return repeat("\n", 1 + Number(result));
            }
            if (result === false) {
              return "\n\n<!---->\n\n";
            }
          }
          return "\n\n";
        }
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
  var require_indent_lines = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/indent-lines.js"(exports, module) {
      init_globals();
      module.exports = indentLines;
      var eol = /\r?\n|\r/g;
      function indentLines(value, map) {
        var result = [];
        var start = 0;
        var line = 0;
        var match;
        while (match = eol.exec(value)) {
          one(value.slice(start, match.index));
          result.push(match[0]);
          start = match.index + match[0].length;
          line++;
        }
        one(value.slice(start));
        return result.join("");
        function one(value2) {
          result.push(map(value2, line, !value2));
        }
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
  var require_blockquote2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/blockquote.js"(exports, module) {
      init_globals();
      module.exports = blockquote;
      var flow = require_container_flow();
      var indentLines = require_indent_lines();
      function blockquote(node, _, context) {
        var exit = context.enter("blockquote");
        var value = indentLines(flow(node, context), map);
        exit();
        return value;
      }
      function map(line, index, blank) {
        return ">" + (blank ? "" : " ") + line;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/break.js
  var require_break2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/break.js"(exports, module) {
      init_globals();
      module.exports = hardBreak;
      var patternInScope = require_pattern_in_scope();
      function hardBreak(node, _, context, safe) {
        var index = -1;
        while (++index < context.unsafe.length) {
          if (context.unsafe[index].character === "\n" && patternInScope(context.stack, context.unsafe[index])) {
            return /[ \t]/.test(safe.before) ? "" : " ";
          }
        }
        return "\\\n";
      }
    }
  });

  // node_modules/longest-streak/index.js
  var require_longest_streak = __commonJS({
    "node_modules/longest-streak/index.js"(exports, module) {
      init_globals();
      module.exports = longestStreak;
      function longestStreak(value, character) {
        var count = 0;
        var maximum = 0;
        var expected;
        var index;
        if (typeof character !== "string" || character.length !== 1) {
          throw new Error("Expected character");
        }
        value = String(value);
        index = value.indexOf(character);
        expected = index;
        while (index !== -1) {
          count++;
          if (index === expected) {
            if (count > maximum) {
              maximum = count;
            }
          } else {
            count = 1;
          }
          expected = index + 1;
          index = value.indexOf(character, expected);
        }
        return maximum;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
  var require_format_code_as_indented = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js"(exports, module) {
      init_globals();
      module.exports = formatCodeAsIndented;
      function formatCodeAsIndented(node, context) {
        return !context.options.fences && node.value && !node.lang && /[^ \r\n]/.test(node.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value);
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-fence.js
  var require_check_fence = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-fence.js"(exports, module) {
      init_globals();
      module.exports = checkFence;
      function checkFence(context) {
        var marker = context.options.fence || "`";
        if (marker !== "`" && marker !== "~") {
          throw new Error(
            "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
  var require_pattern_compile = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js"(exports, module) {
      init_globals();
      module.exports = patternCompile;
      function patternCompile(pattern) {
        var before;
        var after;
        if (!pattern._compiled) {
          before = pattern.before ? "(?:" + pattern.before + ")" : "";
          after = pattern.after ? "(?:" + pattern.after + ")" : "";
          if (pattern.atBreak) {
            before = "[\\r\\n][\\t ]*" + before;
          }
          pattern._compiled = new RegExp(
            (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (after || ""),
            "g"
          );
        }
        return pattern._compiled;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/safe.js
  var require_safe = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/safe.js"(exports, module) {
      init_globals();
      module.exports = safe;
      var patternCompile = require_pattern_compile();
      var patternInScope = require_pattern_in_scope();
      function safe(context, input, config) {
        var value = (config.before || "") + (input || "") + (config.after || "");
        var positions = [];
        var result = [];
        var infos = {};
        var index = -1;
        var before;
        var after;
        var position;
        var pattern;
        var expression;
        var match;
        var start;
        var end;
        while (++index < context.unsafe.length) {
          pattern = context.unsafe[index];
          if (!patternInScope(context.stack, pattern)) {
            continue;
          }
          expression = patternCompile(pattern);
          while (match = expression.exec(value)) {
            before = "before" in pattern || pattern.atBreak;
            after = "after" in pattern;
            position = match.index + (before ? match[1].length : 0);
            if (positions.indexOf(position) === -1) {
              positions.push(position);
              infos[position] = { before, after };
            } else {
              if (infos[position].before && !before) {
                infos[position].before = false;
              }
              if (infos[position].after && !after) {
                infos[position].after = false;
              }
            }
          }
        }
        positions.sort(numerical);
        start = config.before ? config.before.length : 0;
        end = value.length - (config.after ? config.after.length : 0);
        index = -1;
        while (++index < positions.length) {
          position = positions[index];
          if (position < start || position >= end) {
            continue;
          }
          if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after) {
            continue;
          }
          if (start !== position) {
            result.push(escapeBackslashes(value.slice(start, position), "\\"));
          }
          start = position;
          if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || config.encode.indexOf(value.charAt(position)) === -1)) {
            result.push("\\");
          } else {
            result.push(
              "&#x" + value.charCodeAt(position).toString(16).toUpperCase() + ";"
            );
            start++;
          }
        }
        result.push(escapeBackslashes(value.slice(start, end), config.after));
        return result.join("");
      }
      function numerical(a, b) {
        return a - b;
      }
      function escapeBackslashes(value, after) {
        var expression = /\\(?=[!-/:-@[-`{-~])/g;
        var positions = [];
        var results = [];
        var index = -1;
        var start = 0;
        var whole = value + after;
        var match;
        while (match = expression.exec(whole)) {
          positions.push(match.index);
        }
        while (++index < positions.length) {
          if (start !== positions[index]) {
            results.push(value.slice(start, positions[index]));
          }
          results.push("\\");
          start = positions[index];
        }
        results.push(value.slice(start));
        return results.join("");
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/code.js
  var require_code2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/code.js"(exports, module) {
      init_globals();
      module.exports = code2;
      var repeat = require_repeat_string();
      var streak = require_longest_streak();
      var formatCodeAsIndented = require_format_code_as_indented();
      var checkFence = require_check_fence();
      var indentLines = require_indent_lines();
      var safe = require_safe();
      function code2(node, _, context) {
        var marker = checkFence(context);
        var raw = node.value || "";
        var suffix = marker === "`" ? "GraveAccent" : "Tilde";
        var value;
        var sequence;
        var exit;
        var subexit;
        if (formatCodeAsIndented(node, context)) {
          exit = context.enter("codeIndented");
          value = indentLines(raw, map);
        } else {
          sequence = repeat(marker, Math.max(streak(raw, marker) + 1, 3));
          exit = context.enter("codeFenced");
          value = sequence;
          if (node.lang) {
            subexit = context.enter("codeFencedLang" + suffix);
            value += safe(context, node.lang, {
              before: "`",
              after: " ",
              encode: ["`"]
            });
            subexit();
          }
          if (node.lang && node.meta) {
            subexit = context.enter("codeFencedMeta" + suffix);
            value += " " + safe(context, node.meta, {
              before: " ",
              after: "\n",
              encode: ["`"]
            });
            subexit();
          }
          value += "\n";
          if (raw) {
            value += raw + "\n";
          }
          value += sequence;
        }
        exit();
        return value;
      }
      function map(line, _, blank) {
        return (blank ? "" : "    ") + line;
      }
    }
  });

  // node_modules/parse-entities/decode-entity.browser.js
  var require_decode_entity_browser = __commonJS({
    "node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
      init_globals();
      var el;
      var semicolon = 59;
      module.exports = decodeEntity;
      function decodeEntity(characters) {
        var entity = "&" + characters + ";";
        var char;
        el = el || document.createElement("i");
        el.innerHTML = entity;
        char = el.textContent;
        if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
          return false;
        }
        return char === entity ? false : char;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/association.js
  var require_association = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/association.js"(exports, module) {
      init_globals();
      module.exports = association;
      var decode = require_decode_entity_browser();
      var characterEscape = /\\([!-/:-@[-`{-~])/g;
      var characterReference = /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function association(node) {
        if (node.label || !node.identifier) {
          return node.label || "";
        }
        return node.identifier.replace(characterEscape, "$1").replace(characterReference, decodeIfPossible);
      }
      function decodeIfPossible($0, $1) {
        return decode($1) || $0;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-quote.js
  var require_check_quote = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-quote.js"(exports, module) {
      init_globals();
      module.exports = checkQuote;
      function checkQuote(context) {
        var marker = context.options.quote || '"';
        if (marker !== '"' && marker !== "'") {
          throw new Error(
            "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/definition.js
  var require_definition = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/definition.js"(exports, module) {
      init_globals();
      module.exports = definition;
      var association = require_association();
      var checkQuote = require_check_quote();
      var safe = require_safe();
      function definition(node, _, context) {
        var marker = checkQuote(context);
        var suffix = marker === '"' ? "Quote" : "Apostrophe";
        var exit = context.enter("definition");
        var subexit = context.enter("label");
        var value = "[" + safe(context, association(node), { before: "[", after: "]" }) + "]: ";
        subexit();
        if (!node.url || /[ \t\r\n]/.test(node.url)) {
          subexit = context.enter("destinationLiteral");
          value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
        } else {
          subexit = context.enter("destinationRaw");
          value += safe(context, node.url, { before: " ", after: " " });
        }
        subexit();
        if (node.title) {
          subexit = context.enter("title" + suffix);
          value += " " + marker + safe(context, node.title, { before: marker, after: marker }) + marker;
          subexit();
        }
        exit();
        return value;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
  var require_check_emphasis = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js"(exports, module) {
      init_globals();
      module.exports = checkEmphasis;
      function checkEmphasis(context) {
        var marker = context.options.emphasis || "*";
        if (marker !== "*" && marker !== "_") {
          throw new Error(
            "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
  var require_container_phrasing = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js"(exports, module) {
      init_globals();
      module.exports = phrasing;
      function phrasing(parent, context, safeOptions) {
        var children = parent.children || [];
        var results = [];
        var index = -1;
        var before = safeOptions.before;
        var after;
        var handle;
        var child;
        while (++index < children.length) {
          child = children[index];
          if (index + 1 < children.length) {
            handle = context.handle.handlers[children[index + 1].type];
            if (handle && handle.peek)
              handle = handle.peek;
            after = handle ? handle(children[index + 1], parent, context, {
              before: "",
              after: ""
            }).charAt(0) : "";
          } else {
            after = safeOptions.after;
          }
          if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
            results[results.length - 1] = results[results.length - 1].replace(
              /(\r?\n|\r)$/,
              " "
            );
            before = " ";
          }
          results.push(
            context.handle(child, parent, context, {
              before,
              after
            })
          );
          before = results[results.length - 1].slice(-1);
        }
        return results.join("");
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
  var require_emphasis2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/emphasis.js"(exports, module) {
      init_globals();
      module.exports = emphasis;
      emphasis.peek = emphasisPeek;
      var checkEmphasis = require_check_emphasis();
      var phrasing = require_container_phrasing();
      function emphasis(node, _, context) {
        var marker = checkEmphasis(context);
        var exit = context.enter("emphasis");
        var value = phrasing(node, context, { before: marker, after: marker });
        exit();
        return marker + value + marker;
      }
      function emphasisPeek(node, _, context) {
        return context.options.emphasis || "*";
      }
    }
  });

  // node_modules/mdast-util-to-string/index.js
  var require_mdast_util_to_string2 = __commonJS({
    "node_modules/mdast-util-to-string/index.js"(exports, module) {
      init_globals();
      module.exports = toString;
      function toString(node) {
        return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
      }
      function all(values) {
        var result = [];
        var index = -1;
        while (++index < values.length) {
          result[index] = toString(values[index]);
        }
        return result.join("");
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
  var require_format_heading_as_setext = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js"(exports, module) {
      init_globals();
      module.exports = formatHeadingAsSetext;
      var toString = require_mdast_util_to_string2();
      function formatHeadingAsSetext(node, context) {
        return context.options.setext && (!node.depth || node.depth < 3) && toString(node);
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/heading.js
  var require_heading2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/heading.js"(exports, module) {
      init_globals();
      module.exports = heading;
      var repeat = require_repeat_string();
      var formatHeadingAsSetext = require_format_heading_as_setext();
      var phrasing = require_container_phrasing();
      function heading(node, _, context) {
        var rank = Math.max(Math.min(6, node.depth || 1), 1);
        var exit;
        var subexit;
        var value;
        var sequence;
        if (formatHeadingAsSetext(node, context)) {
          exit = context.enter("headingSetext");
          subexit = context.enter("phrasing");
          value = phrasing(node, context, { before: "\n", after: "\n" });
          subexit();
          exit();
          return value + "\n" + repeat(
            rank === 1 ? "=" : "-",
            value.length - (Math.max(value.lastIndexOf("\r"), value.lastIndexOf("\n")) + 1)
          );
        }
        sequence = repeat("#", rank);
        exit = context.enter("headingAtx");
        subexit = context.enter("phrasing");
        value = phrasing(node, context, { before: "# ", after: "\n" });
        value = value ? sequence + " " + value : sequence;
        if (context.options.closeAtx) {
          value += " " + sequence;
        }
        subexit();
        exit();
        return value;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/html.js
  var require_html5 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/html.js"(exports, module) {
      init_globals();
      module.exports = html2;
      html2.peek = htmlPeek;
      function html2(node) {
        return node.value || "";
      }
      function htmlPeek() {
        return "<";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/image.js
  var require_image2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/image.js"(exports, module) {
      init_globals();
      module.exports = image;
      image.peek = imagePeek;
      var checkQuote = require_check_quote();
      var safe = require_safe();
      function image(node, _, context) {
        var quote = checkQuote(context);
        var suffix = quote === '"' ? "Quote" : "Apostrophe";
        var exit = context.enter("image");
        var subexit = context.enter("label");
        var value = "![" + safe(context, node.alt, { before: "[", after: "]" }) + "](";
        subexit();
        if (!node.url && node.title || /[ \t\r\n]/.test(node.url)) {
          subexit = context.enter("destinationLiteral");
          value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
        } else {
          subexit = context.enter("destinationRaw");
          value += safe(context, node.url, {
            before: "(",
            after: node.title ? " " : ")"
          });
        }
        subexit();
        if (node.title) {
          subexit = context.enter("title" + suffix);
          value += " " + quote + safe(context, node.title, { before: quote, after: quote }) + quote;
          subexit();
        }
        value += ")";
        exit();
        return value;
      }
      function imagePeek() {
        return "!";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
  var require_image_reference = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/image-reference.js"(exports, module) {
      init_globals();
      module.exports = imageReference;
      imageReference.peek = imageReferencePeek;
      var association = require_association();
      var safe = require_safe();
      function imageReference(node, _, context) {
        var type2 = node.referenceType;
        var exit = context.enter("imageReference");
        var subexit = context.enter("label");
        var alt = safe(context, node.alt, { before: "[", after: "]" });
        var value = "![" + alt + "]";
        var reference;
        var stack;
        subexit();
        stack = context.stack;
        context.stack = [];
        subexit = context.enter("reference");
        reference = safe(context, association(node), { before: "[", after: "]" });
        subexit();
        context.stack = stack;
        exit();
        if (type2 === "full" || !alt || alt !== reference) {
          value += "[" + reference + "]";
        } else if (type2 !== "shortcut") {
          value += "[]";
        }
        return value;
      }
      function imageReferencePeek() {
        return "!";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
  var require_inline_code2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/inline-code.js"(exports, module) {
      init_globals();
      module.exports = inlineCode;
      inlineCode.peek = inlineCodePeek;
      var patternCompile = require_pattern_compile();
      function inlineCode(node, parent, context) {
        var value = node.value || "";
        var sequence = "`";
        var index = -1;
        var pattern;
        var expression;
        var match;
        var position;
        while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
          sequence += "`";
        }
        if (/[^ \r\n]/.test(value) && (/[ \r\n`]/.test(value.charAt(0)) || /[ \r\n`]/.test(value.charAt(value.length - 1)))) {
          value = " " + value + " ";
        }
        while (++index < context.unsafe.length) {
          pattern = context.unsafe[index];
          if (!pattern.atBreak)
            continue;
          expression = patternCompile(pattern);
          while (match = expression.exec(value)) {
            position = match.index;
            if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) {
              position--;
            }
            value = value.slice(0, position) + " " + value.slice(match.index + 1);
          }
        }
        return sequence + value + sequence;
      }
      function inlineCodePeek() {
        return "`";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
  var require_format_link_as_autolink = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js"(exports, module) {
      init_globals();
      module.exports = formatLinkAsAutolink;
      var toString = require_mdast_util_to_string2();
      function formatLinkAsAutolink(node, context) {
        var raw = toString(node);
        return !context.options.resourceLink && node.url && !node.title && node.children && node.children.length === 1 && node.children[0].type === "text" && (raw === node.url || "mailto:" + raw === node.url) && /^[a-z][a-z+.-]+:/i.test(node.url) && !/[\0- <>\u007F]/.test(node.url);
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/link.js
  var require_link2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/link.js"(exports, module) {
      init_globals();
      module.exports = link;
      link.peek = linkPeek;
      var checkQuote = require_check_quote();
      var formatLinkAsAutolink = require_format_link_as_autolink();
      var phrasing = require_container_phrasing();
      var safe = require_safe();
      function link(node, _, context) {
        var quote = checkQuote(context);
        var suffix = quote === '"' ? "Quote" : "Apostrophe";
        var exit;
        var subexit;
        var value;
        var stack;
        if (formatLinkAsAutolink(node, context)) {
          stack = context.stack;
          context.stack = [];
          exit = context.enter("autolink");
          value = "<" + phrasing(node, context, { before: "<", after: ">" }) + ">";
          exit();
          context.stack = stack;
          return value;
        }
        exit = context.enter("link");
        subexit = context.enter("label");
        value = "[" + phrasing(node, context, { before: "[", after: "]" }) + "](";
        subexit();
        if (!node.url && node.title || /[ \t\r\n]/.test(node.url)) {
          subexit = context.enter("destinationLiteral");
          value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
        } else {
          subexit = context.enter("destinationRaw");
          value += safe(context, node.url, {
            before: "(",
            after: node.title ? " " : ")"
          });
        }
        subexit();
        if (node.title) {
          subexit = context.enter("title" + suffix);
          value += " " + quote + safe(context, node.title, { before: quote, after: quote }) + quote;
          subexit();
        }
        value += ")";
        exit();
        return value;
      }
      function linkPeek(node, _, context) {
        return formatLinkAsAutolink(node, context) ? "<" : "[";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
  var require_link_reference = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/link-reference.js"(exports, module) {
      init_globals();
      module.exports = linkReference;
      linkReference.peek = linkReferencePeek;
      var association = require_association();
      var phrasing = require_container_phrasing();
      var safe = require_safe();
      function linkReference(node, _, context) {
        var type2 = node.referenceType;
        var exit = context.enter("linkReference");
        var subexit = context.enter("label");
        var text = phrasing(node, context, { before: "[", after: "]" });
        var value = "[" + text + "]";
        var reference;
        var stack;
        subexit();
        stack = context.stack;
        context.stack = [];
        subexit = context.enter("reference");
        reference = safe(context, association(node), { before: "[", after: "]" });
        subexit();
        context.stack = stack;
        exit();
        if (type2 === "full" || !text || text !== reference) {
          value += "[" + reference + "]";
        } else if (type2 !== "shortcut") {
          value += "[]";
        }
        return value;
      }
      function linkReferencePeek() {
        return "[";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/list.js
  var require_list2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/list.js"(exports, module) {
      init_globals();
      module.exports = list;
      var flow = require_container_flow();
      function list(node, _, context) {
        var exit = context.enter("list");
        var value = flow(node, context);
        exit();
        return value;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
  var require_check_bullet = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-bullet.js"(exports, module) {
      init_globals();
      module.exports = checkBullet;
      function checkBullet(context) {
        var marker = context.options.bullet || "*";
        if (marker !== "*" && marker !== "+" && marker !== "-") {
          throw new Error(
            "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
  var require_check_list_item_indent = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js"(exports, module) {
      init_globals();
      module.exports = checkListItemIndent;
      function checkListItemIndent(context) {
        var style = context.options.listItemIndent || "tab";
        if (style === 1 || style === "1") {
          return "one";
        }
        if (style !== "tab" && style !== "one" && style !== "mixed") {
          throw new Error(
            "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
          );
        }
        return style;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/list-item.js
  var require_list_item2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/list-item.js"(exports, module) {
      init_globals();
      module.exports = listItem;
      var repeat = require_repeat_string();
      var checkBullet = require_check_bullet();
      var checkListItemIndent = require_check_list_item_indent();
      var flow = require_container_flow();
      var indentLines = require_indent_lines();
      function listItem(node, parent, context) {
        var bullet = checkBullet(context);
        var listItemIndent = checkListItemIndent(context);
        var size;
        var value;
        var exit;
        if (parent && parent.ordered) {
          bullet = (parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + ".";
        }
        size = bullet.length + 1;
        if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.spread || node.spread)) {
          size = Math.ceil(size / 4) * 4;
        }
        exit = context.enter("listItem");
        value = indentLines(flow(node, context), map);
        exit();
        return value;
        function map(line, index, blank) {
          if (index) {
            return (blank ? "" : repeat(" ", size)) + line;
          }
          return (blank ? bullet : bullet + repeat(" ", size - bullet.length)) + line;
        }
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
  var require_paragraph2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/paragraph.js"(exports, module) {
      init_globals();
      module.exports = paragraph;
      var phrasing = require_container_phrasing();
      function paragraph(node, _, context) {
        var exit = context.enter("paragraph");
        var subexit = context.enter("phrasing");
        var value = phrasing(node, context, { before: "\n", after: "\n" });
        subexit();
        exit();
        return value;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/root.js
  var require_root2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/root.js"(exports, module) {
      init_globals();
      module.exports = root;
      var flow = require_container_flow();
      function root(node, _, context) {
        return flow(node, context);
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-strong.js
  var require_check_strong = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-strong.js"(exports, module) {
      init_globals();
      module.exports = checkStrong;
      function checkStrong(context) {
        var marker = context.options.strong || "*";
        if (marker !== "*" && marker !== "_") {
          throw new Error(
            "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/strong.js
  var require_strong2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/strong.js"(exports, module) {
      init_globals();
      module.exports = strong;
      strong.peek = strongPeek;
      var checkStrong = require_check_strong();
      var phrasing = require_container_phrasing();
      function strong(node, _, context) {
        var marker = checkStrong(context);
        var exit = context.enter("strong");
        var value = phrasing(node, context, { before: marker, after: marker });
        exit();
        return marker + marker + value + marker + marker;
      }
      function strongPeek(node, _, context) {
        return context.options.strong || "*";
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/text.js
  var require_text2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/text.js"(exports, module) {
      init_globals();
      module.exports = text;
      var safe = require_safe();
      function text(node, parent, context, safeOptions) {
        return safe(context, node.value, safeOptions);
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js
  var require_check_rule_repeat = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js"(exports, module) {
      init_globals();
      module.exports = checkRule;
      function checkRule(context) {
        var repetition = context.options.ruleRepetition || 3;
        if (repetition < 3) {
          throw new Error(
            "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
          );
        }
        return repetition;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/util/check-rule.js
  var require_check_rule = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/util/check-rule.js"(exports, module) {
      init_globals();
      module.exports = checkRule;
      function checkRule(context) {
        var marker = context.options.rule || "*";
        if (marker !== "*" && marker !== "-" && marker !== "_") {
          throw new Error(
            "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
          );
        }
        return marker;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
  var require_thematic_break2 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js"(exports, module) {
      init_globals();
      module.exports = thematicBreak;
      var repeat = require_repeat_string();
      var checkRepeat = require_check_rule_repeat();
      var checkRule = require_check_rule();
      function thematicBreak(node, parent, context) {
        var value = repeat(
          checkRule(context) + (context.options.ruleSpaces ? " " : ""),
          checkRepeat(context)
        );
        return context.options.ruleSpaces ? value.slice(0, -1) : value;
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/handle/index.js
  var require_handle = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/handle/index.js"(exports) {
      init_globals();
      exports.blockquote = require_blockquote2();
      exports.break = require_break2();
      exports.code = require_code2();
      exports.definition = require_definition();
      exports.emphasis = require_emphasis2();
      exports.hardBreak = require_break2();
      exports.heading = require_heading2();
      exports.html = require_html5();
      exports.image = require_image2();
      exports.imageReference = require_image_reference();
      exports.inlineCode = require_inline_code2();
      exports.link = require_link2();
      exports.linkReference = require_link_reference();
      exports.list = require_list2();
      exports.listItem = require_list_item2();
      exports.paragraph = require_paragraph2();
      exports.root = require_root2();
      exports.strong = require_strong2();
      exports.text = require_text2();
      exports.thematicBreak = require_thematic_break2();
    }
  });

  // node_modules/mdast-util-to-markdown/lib/join.js
  var require_join = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/join.js"(exports, module) {
      init_globals();
      module.exports = [joinDefaults];
      var formatCodeAsIndented = require_format_code_as_indented();
      var formatHeadingAsSetext = require_format_heading_as_setext();
      function joinDefaults(left, right, parent, context) {
        if (right.type === "list" && right.type === left.type && Boolean(left.ordered) === Boolean(right.ordered) || right.type === "code" && formatCodeAsIndented(right, context) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, context))) {
          return false;
        }
        if (typeof parent.spread === "boolean") {
          if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, context))) {
            return;
          }
          return parent.spread ? 1 : 0;
        }
      }
    }
  });

  // node_modules/mdast-util-to-markdown/lib/unsafe.js
  var require_unsafe = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/unsafe.js"(exports, module) {
      init_globals();
      module.exports = [
        {
          character: "	",
          inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
        },
        {
          character: "\r",
          inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
          ]
        },
        {
          character: "\n",
          inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
          ]
        },
        {
          character: " ",
          inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
        },
        { character: "!", after: "\\[", inConstruct: "phrasing" },
        { character: '"', inConstruct: "titleQuote" },
        { atBreak: true, character: "#" },
        { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
        { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
        { character: "'", inConstruct: "titleApostrophe" },
        { character: "(", inConstruct: "destinationRaw" },
        { before: "\\]", character: "(", inConstruct: "phrasing" },
        { atBreak: true, before: "\\d+", character: ")" },
        { character: ")", inConstruct: "destinationRaw" },
        { atBreak: true, character: "*" },
        { character: "*", inConstruct: "phrasing" },
        { atBreak: true, character: "+" },
        { atBreak: true, character: "-" },
        { atBreak: true, before: "\\d+", character: ".", after: "(?:[ 	\r\n]|$)" },
        { atBreak: true, character: "<", after: "[!/?A-Za-z]" },
        { character: "<", after: "[!/?A-Za-z]", inConstruct: "phrasing" },
        { character: "<", inConstruct: "destinationLiteral" },
        { atBreak: true, character: "=" },
        { atBreak: true, character: ">" },
        { character: ">", inConstruct: "destinationLiteral" },
        { atBreak: true, character: "[" },
        { character: "[", inConstruct: ["phrasing", "label", "reference"] },
        { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
        {
          character: "]",
          inConstruct: ["label", "reference"]
        },
        { atBreak: true, character: "_" },
        { before: "[^A-Za-z]", character: "_", inConstruct: "phrasing" },
        { character: "_", after: "[^A-Za-z]", inConstruct: "phrasing" },
        { atBreak: true, character: "`" },
        {
          character: "`",
          inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedMetaGraveAccent",
            "phrasing"
          ]
        },
        { atBreak: true, character: "~" }
      ];
    }
  });

  // node_modules/mdast-util-to-markdown/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/mdast-util-to-markdown/lib/index.js"(exports, module) {
      init_globals();
      module.exports = toMarkdown;
      var zwitch = require_zwitch();
      var configure = require_configure();
      var defaultHandlers = require_handle();
      var defaultJoin = require_join();
      var defaultUnsafe = require_unsafe();
      function toMarkdown(tree, options) {
        var settings = options || {};
        var context = {
          enter,
          stack: [],
          unsafe: [],
          join: [],
          handlers: {},
          options: {}
        };
        var result;
        configure(context, {
          unsafe: defaultUnsafe,
          join: defaultJoin,
          handlers: defaultHandlers
        });
        configure(context, settings);
        if (context.options.tightDefinitions) {
          context.join = [joinDefinition].concat(context.join);
        }
        context.handle = zwitch("type", {
          invalid,
          unknown,
          handlers: context.handlers
        });
        result = context.handle(tree, null, context, { before: "\n", after: "\n" });
        if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
          result += "\n";
        }
        return result;
        function enter(name) {
          context.stack.push(name);
          return exit;
          function exit() {
            context.stack.pop();
          }
        }
      }
      function invalid(value) {
        throw new Error("Cannot handle value `" + value + "`, expected node");
      }
      function unknown(node) {
        throw new Error("Cannot handle unknown node `" + node.type + "`");
      }
      function joinDefinition(left, right) {
        if (left.type === "definition" && left.type === right.type) {
          return 0;
        }
      }
    }
  });

  // node_modules/mdast-util-to-markdown/index.js
  var require_mdast_util_to_markdown = __commonJS({
    "node_modules/mdast-util-to-markdown/index.js"(exports, module) {
      init_globals();
      module.exports = require_lib4();
    }
  });

  // node_modules/remark-stringify/index.js
  var require_remark_stringify = __commonJS({
    "node_modules/remark-stringify/index.js"(exports, module) {
      init_globals();
      module.exports = stringify;
      var toMarkdown = require_mdast_util_to_markdown();
      function stringify(options) {
        var self2 = this;
        this.Compiler = compile;
        function compile(tree) {
          return toMarkdown(
            tree,
            Object.assign({}, self2.data("settings"), options, {
              extensions: self2.data("toMarkdownExtensions") || []
            })
          );
        }
      }
    }
  });

  // node_modules/unist-util-remove/index.js
  var require_unist_util_remove = __commonJS({
    "node_modules/unist-util-remove/index.js"(exports, module) {
      init_globals();
      var convert = require_convert2();
      module.exports = remove;
      function remove(tree, options, test) {
        var is = convert(test || options);
        var cascade = options.cascade == null ? true : options.cascade;
        return preorder(tree, null, null);
        function preorder(node, index, parent) {
          var children = node.children;
          var childIndex = -1;
          var position = 0;
          if (is(node, index, parent)) {
            return null;
          }
          if (children && children.length) {
            while (++childIndex < children.length) {
              if (preorder(children[childIndex], childIndex, node)) {
                children[position++] = children[childIndex];
              }
            }
            if (cascade && !position) {
              return null;
            }
            children.length = position;
          }
          return node;
        }
      }
    }
  });

  // node_modules/mdast-squeeze-links/index.js
  var require_mdast_squeeze_links = __commonJS({
    "node_modules/mdast-squeeze-links/index.js"(exports, module) {
      init_globals();
      var remove = require_unist_util_remove();
      module.exports = squeeze;
      function squeeze(tree) {
        return remove(tree, { cascade: false }, isEmptyLink);
      }
      function isEmptyLink(node) {
        return node.type === "link" && node.children instanceof Array && node.children.every(isEmptyText);
      }
      function isEmptyText(node) {
        return node.type === "text" && /^\s*$/.test(node.value);
      }
    }
  });

  // node_modules/remark-squeeze-links/index.js
  var require_remark_squeeze_links = __commonJS({
    "node_modules/remark-squeeze-links/index.js"(exports, module) {
      init_globals();
      var squeezeLinks = require_mdast_squeeze_links();
      module.exports = function() {
        return squeezeLinks;
      };
    }
  });

  // node_modules/mdast-util-gfm-autolink-literal/to-markdown.js
  var require_to_markdown = __commonJS({
    "node_modules/mdast-util-gfm-autolink-literal/to-markdown.js"(exports) {
      init_globals();
      var inConstruct = "phrasing";
      var notInConstruct = ["autolink", "link", "image", "label"];
      exports.unsafe = [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct,
          notInConstruct
        }
      ];
    }
  });

  // node_modules/mdast-util-gfm-strikethrough/to-markdown.js
  var require_to_markdown2 = __commonJS({
    "node_modules/mdast-util-gfm-strikethrough/to-markdown.js"(exports) {
      init_globals();
      var phrasing = require_container_phrasing();
      exports.unsafe = [{ character: "~", inConstruct: "phrasing" }];
      exports.handlers = { delete: handleDelete };
      handleDelete.peek = peekDelete;
      function handleDelete(node, _, context) {
        var exit = context.enter("emphasis");
        var value = phrasing(node, context, { before: "~", after: "~" });
        exit();
        return "~~" + value + "~~";
      }
      function peekDelete() {
        return "~";
      }
    }
  });

  // node_modules/markdown-table/index.js
  var require_markdown_table = __commonJS({
    "node_modules/markdown-table/index.js"(exports, module) {
      init_globals();
      var repeat = require_repeat_string();
      module.exports = markdownTable;
      var trailingWhitespace = / +$/;
      var space = " ";
      var lineFeed = "\n";
      var dash = "-";
      var colon = ":";
      var verticalBar = "|";
      var x = 0;
      var C = 67;
      var L = 76;
      var R = 82;
      var c = 99;
      var l = 108;
      var r = 114;
      function markdownTable(table, options) {
        var settings = options || {};
        var padding = settings.padding !== false;
        var start = settings.delimiterStart !== false;
        var end = settings.delimiterEnd !== false;
        var align = (settings.align || []).concat();
        var alignDelimiters = settings.alignDelimiters !== false;
        var alignments = [];
        var stringLength = settings.stringLength || defaultStringLength;
        var rowIndex = -1;
        var rowLength = table.length;
        var cellMatrix = [];
        var sizeMatrix = [];
        var row = [];
        var sizes = [];
        var longestCellByColumn = [];
        var mostCellsPerRow = 0;
        var cells;
        var columnIndex;
        var columnLength;
        var largest;
        var size;
        var cell;
        var lines;
        var line;
        var before;
        var after;
        var code2;
        while (++rowIndex < rowLength) {
          cells = table[rowIndex];
          columnIndex = -1;
          columnLength = cells.length;
          row = [];
          sizes = [];
          if (columnLength > mostCellsPerRow) {
            mostCellsPerRow = columnLength;
          }
          while (++columnIndex < columnLength) {
            cell = serialize(cells[columnIndex]);
            if (alignDelimiters === true) {
              size = stringLength(cell);
              sizes[columnIndex] = size;
              largest = longestCellByColumn[columnIndex];
              if (largest === void 0 || size > largest) {
                longestCellByColumn[columnIndex] = size;
              }
            }
            row.push(cell);
          }
          cellMatrix[rowIndex] = row;
          sizeMatrix[rowIndex] = sizes;
        }
        columnIndex = -1;
        columnLength = mostCellsPerRow;
        if (typeof align === "object" && "length" in align) {
          while (++columnIndex < columnLength) {
            alignments[columnIndex] = toAlignment(align[columnIndex]);
          }
        } else {
          code2 = toAlignment(align);
          while (++columnIndex < columnLength) {
            alignments[columnIndex] = code2;
          }
        }
        columnIndex = -1;
        columnLength = mostCellsPerRow;
        row = [];
        sizes = [];
        while (++columnIndex < columnLength) {
          code2 = alignments[columnIndex];
          before = "";
          after = "";
          if (code2 === l) {
            before = colon;
          } else if (code2 === r) {
            after = colon;
          } else if (code2 === c) {
            before = colon;
            after = colon;
          }
          size = alignDelimiters ? Math.max(
            1,
            longestCellByColumn[columnIndex] - before.length - after.length
          ) : 1;
          cell = before + repeat(dash, size) + after;
          if (alignDelimiters === true) {
            size = before.length + size + after.length;
            if (size > longestCellByColumn[columnIndex]) {
              longestCellByColumn[columnIndex] = size;
            }
            sizes[columnIndex] = size;
          }
          row[columnIndex] = cell;
        }
        cellMatrix.splice(1, 0, row);
        sizeMatrix.splice(1, 0, sizes);
        rowIndex = -1;
        rowLength = cellMatrix.length;
        lines = [];
        while (++rowIndex < rowLength) {
          row = cellMatrix[rowIndex];
          sizes = sizeMatrix[rowIndex];
          columnIndex = -1;
          columnLength = mostCellsPerRow;
          line = [];
          while (++columnIndex < columnLength) {
            cell = row[columnIndex] || "";
            before = "";
            after = "";
            if (alignDelimiters === true) {
              size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
              code2 = alignments[columnIndex];
              if (code2 === r) {
                before = repeat(space, size);
              } else if (code2 === c) {
                if (size % 2 === 0) {
                  before = repeat(space, size / 2);
                  after = before;
                } else {
                  before = repeat(space, size / 2 + 0.5);
                  after = repeat(space, size / 2 - 0.5);
                }
              } else {
                after = repeat(space, size);
              }
            }
            if (start === true && columnIndex === 0) {
              line.push(verticalBar);
            }
            if (padding === true && !(alignDelimiters === false && cell === "") && (start === true || columnIndex !== 0)) {
              line.push(space);
            }
            if (alignDelimiters === true) {
              line.push(before);
            }
            line.push(cell);
            if (alignDelimiters === true) {
              line.push(after);
            }
            if (padding === true) {
              line.push(space);
            }
            if (end === true || columnIndex !== columnLength - 1) {
              line.push(verticalBar);
            }
          }
          line = line.join("");
          if (end === false) {
            line = line.replace(trailingWhitespace, "");
          }
          lines.push(line);
        }
        return lines.join(lineFeed);
      }
      function serialize(value) {
        return value === null || value === void 0 ? "" : String(value);
      }
      function defaultStringLength(value) {
        return value.length;
      }
      function toAlignment(value) {
        var code2 = typeof value === "string" ? value.charCodeAt(0) : x;
        return code2 === L || code2 === l ? l : code2 === R || code2 === r ? r : code2 === C || code2 === c ? c : x;
      }
    }
  });

  // node_modules/mdast-util-gfm-table/to-markdown.js
  var require_to_markdown3 = __commonJS({
    "node_modules/mdast-util-gfm-table/to-markdown.js"(exports, module) {
      init_globals();
      var phrasing = require_container_phrasing();
      var defaultInlineCode = require_inline_code2();
      var markdownTable = require_markdown_table();
      module.exports = toMarkdown;
      function toMarkdown(options) {
        var settings = options || {};
        var padding = settings.tableCellPadding;
        var alignDelimiters = settings.tablePipeAlign;
        var stringLength = settings.stringLength;
        var around = padding ? " " : "|";
        return {
          unsafe: [
            { character: "\r", inConstruct: "tableCell" },
            { character: "\n", inConstruct: "tableCell" },
            { atBreak: true, character: "|", after: "[	 :-]" },
            { character: "|", inConstruct: "tableCell" },
            { atBreak: true, character: ":", after: "-" },
            { atBreak: true, character: "-", after: "[:|-]" }
          ],
          handlers: {
            table: handleTable,
            tableRow: handleTableRow,
            tableCell: handleTableCell,
            inlineCode: inlineCodeWithTable
          }
        };
        function handleTable(node, _, context) {
          return serializeData(handleTableAsData(node, context), node.align);
        }
        function handleTableRow(node, _, context) {
          var row = handleTableRowAsData(node, context);
          var value = serializeData([row]);
          return value.slice(0, value.indexOf("\n"));
        }
        function handleTableCell(node, _, context) {
          var exit = context.enter("tableCell");
          var value = phrasing(node, context, { before: around, after: around });
          exit();
          return value;
        }
        function serializeData(matrix, align) {
          return markdownTable(matrix, {
            align,
            alignDelimiters,
            padding,
            stringLength
          });
        }
        function handleTableAsData(node, context) {
          var children = node.children;
          var index = -1;
          var length = children.length;
          var result = [];
          var subexit = context.enter("table");
          while (++index < length) {
            result[index] = handleTableRowAsData(children[index], context);
          }
          subexit();
          return result;
        }
        function handleTableRowAsData(node, context) {
          var children = node.children;
          var index = -1;
          var length = children.length;
          var result = [];
          var subexit = context.enter("tableRow");
          while (++index < length) {
            result[index] = handleTableCell(children[index], node, context);
          }
          subexit();
          return result;
        }
        function inlineCodeWithTable(node, parent, context) {
          var value = defaultInlineCode(node, parent, context);
          if (context.stack.indexOf("tableCell") !== -1) {
            value = value.replace(/\|/g, "\\$&");
          }
          return value;
        }
      }
    }
  });

  // node_modules/mdast-util-gfm-task-list-item/to-markdown.js
  var require_to_markdown4 = __commonJS({
    "node_modules/mdast-util-gfm-task-list-item/to-markdown.js"(exports) {
      init_globals();
      var defaultListItem = require_list_item2();
      exports.unsafe = [{ atBreak: true, character: "-", after: "[:|-]" }];
      exports.handlers = {
        listItem: listItemWithTaskListItem
      };
      function listItemWithTaskListItem(node, parent, context) {
        var value = defaultListItem(node, parent, context);
        var head = node.children[0];
        if (typeof node.checked === "boolean" && head && head.type === "paragraph") {
          value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
        }
        return value;
        function check($0) {
          return $0 + "[" + (node.checked ? "x" : " ") + "] ";
        }
      }
    }
  });

  // node_modules/mdast-util-gfm/to-markdown.js
  var require_to_markdown5 = __commonJS({
    "node_modules/mdast-util-gfm/to-markdown.js"(exports, module) {
      init_globals();
      var autolinkLiteral = require_to_markdown();
      var strikethrough = require_to_markdown2();
      var table = require_to_markdown3();
      var taskListItem = require_to_markdown4();
      var configure = require_configure();
      module.exports = toMarkdown;
      function toMarkdown(options) {
        var config = configure(
          { handlers: {}, join: [], unsafe: [], options: {} },
          {
            extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
          }
        );
        return Object.assign(config.options, {
          handlers: config.handlers,
          join: config.join,
          unsafe: config.unsafe
        });
      }
    }
  });

  // node_modules/@inkdropapp/html2markdown/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/@inkdropapp/html2markdown/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = HTML2Markdown;
      var _hardBreak = _interopRequireDefault(require_hard_break());
      var _toMdastCodeBlock = _interopRequireDefault(require_to_mdast_code_block());
      var _toMdastComment = _interopRequireDefault(require_to_mdast_comment());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getConverter(opts) {
        const {
          toMdast: toMdastOptions = {},
          stringify: stringifyOptions = {},
          baseURI = null
        } = opts || {};
        const unified = require_unified();
        const rehypeParse = require_rehype_parse();
        const rehype2remark = require_rehype_remark();
        const rehypeInsert = require_rehype_insert();
        const stringify = require_remark_stringify();
        const squeezeLinks = require_remark_squeeze_links();
        const gfm = require_to_markdown5();
        const remark = unified().data("toMarkdownExtensions", [gfm()]).use(rehypeParse).use(rehypeInsert, {
          insertions: baseURI ? [{
            selector: "head",
            insert: {
              type: "element",
              tagName: "base",
              properties: {
                href: baseURI
              },
              children: []
            }
          }] : []
        }).use(rehype2remark, {
          handlers: {
            pre: _toMdastCodeBlock.default,
            comment: _toMdastComment.default,
            ...toMdastOptions.handlers || {}
          },
          ...toMdastOptions
        });
        return remark.use(squeezeLinks).use(stringify, {
          listItemIndent: "1",
          bullet: "*",
          commonmark: true,
          fences: true,
          handlers: {
            break: _hardBreak.default,
            ...stringifyOptions.handlers || {}
          },
          ...stringifyOptions
        });
      }
      function HTML2Markdown(html2, opts) {
        const c = getConverter(opts);
        return c.processSync(html2).toString().replace(/\\\[(x| )\]/g, "[$1]");
      }
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
  var require_types2 = __commonJS({
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
      exports.types = require_types2();
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

  // translators/Collected notes.ts
  var Collected_notes_exports = {};
  __export(Collected_notes_exports, {
    Translator: () => Translator,
    doExport: () => doExport
  });
  init_globals();
  var import_html2markdown = __toESM(require_lib5());

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

  // content/escape.ts
  init_globals();
  function html(str) {
    const entity = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    return str.replace(/[<>&"']/g, (c) => entity[c] || `&#${c.charCodeAt(0)};`);
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
    URL: () => URL2,
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
  var URL2 = {
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
    URL: URL2,
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

  // translators/Collected notes.ts
  function clean(item) {
    switch (item.itemType) {
      case "note":
      case "annotation":
      case "attachment":
        return item;
    }
    const cleaned = { ...item, extra: get(item.extra, "zotero").extra };
    cleaned.extra = cleaned.extra.split("\n").filter((line) => !line.match(/^OCLC:/i)).join("\n");
    return cleaned;
  }
  function sorted(collections) {
    return collections.sort((a, b) => a.name.localeCompare(b.name, void 0, { sensitivity: "base" }));
  }
  var Exporter = class {
    constructor() {
      this.levels = 0;
      this.body = "";
      this.html = "";
      this.markdown = "";
      const items = {};
      const filed = /* @__PURE__ */ new Set();
      const collections = {};
      for (const item of Translator.items) {
        const cleaned = clean(item);
        if (this.keep(cleaned))
          items[item.itemID] = cleaned;
      }
      for (const [key, collection] of Object.entries(Translator.collections)) {
        for (const itemID of collection.items)
          filed.add(itemID);
        collections[key] = {
          name: collection.name,
          items: (collection.items || []).map((itemID) => items[itemID]).filter((item) => item),
          collections: [],
          root: !Translator.collections[collection.parent]
        };
      }
      for (const [key, collection] of Object.entries(Translator.collections)) {
        collections[key].collections = (collection.collections || []).map((coll) => collections[coll]).filter((coll) => coll);
      }
      const unfiled = { name: "Unfiled", items: Object.values(items).filter((item) => !filed.has(item.itemID)), collections: [], root: true };
      if (!this.prune(unfiled))
        this.write_collection(unfiled);
      for (const collection of sorted(Object.values(collections))) {
        if (collection.root && !this.prune(collection))
          this.write_collection(collection);
      }
      let style = "\n  body {\n    counter-reset: h1;\n  }\n\n";
      for (let level = 1; level <= this.levels; level++) {
        if (level !== this.levels)
          style += `  h${level} {
    counter-reset: h${level + 1};
  }
`;
        style += `  h${level}:before {
`;
        const label2 = Array.from({ length: level }, (_x, i) => `counter(h${i + 1}, decimal)`).join(' "." ');
        style += `    content: ${label2} ".\\0000a0\\0000a0";
`;
        style += `    counter-increment: h${level};
`;
        style += "  }\n\n";
      }
      style += "  blockquote { border-left: 1px solid gray; }\n";
      this.html = `<html><head><style>${style}</style></head><body>${this.body}</body></html>`;
      if (Translator.options.markdown)
        this.markdown = (0, import_html2markdown.default)(this.html);
    }
    show(context, args) {
      log.debug(`collectednotes.${context}: ${JSON.stringify(Array.from(args))}`);
    }
    write_collection(collection, level = 1) {
      this.levels = Math.max(this.levels, level);
      this.body += `<h${level}>${html(collection.name)}</h${level}>
`;
      for (const item of collection.items) {
        this.write_item(item);
      }
      for (const coll of sorted(collection.collections)) {
        this.write_collection(coll, level + 1);
      }
    }
    write_item(item) {
      switch (item.itemType) {
        case "note":
          this.note(item.note, "note");
          break;
        case "attachment":
          this.item(item);
          break;
        default:
          this.item(item);
          break;
      }
    }
    prune(collection) {
      if (!collection)
        return true;
      collection.collections = collection.collections.filter((sub) => !this.prune(sub));
      return !collection.items.length && !collection.collections.length;
    }
    note(note, type2) {
      switch (type2) {
        case "extra":
          if (!note)
            return;
          this.body += `<blockquote><pre>${html(note)}</pre></blockquote>
`;
          break;
        case "attachment":
          if (!note.note)
            return;
          this.body += `<blockquote><div><samp>${note.title}</samp></div>${note.note}</blockquote>
`;
          break;
        default:
          if (!note.note)
            return;
          this.body += `<blockquote>${note.note}</blockquote>
`;
          break;
      }
    }
    creator(cr) {
      return [cr.lastName, cr.name, cr.firstName].find((v) => v) || "";
    }
    creators(cr) {
      switch (cr.length) {
        case 0:
        case 1:
          return cr[0];
        case 2:
          return cr.join(" and ");
        default:
          return `${cr.slice(0, cr.length - 1).join(", ")}, and ${cr[cr.length - 1]}`;
      }
    }
    item(item) {
      let notes = [];
      let title2 = "";
      if (item.itemType === "attachment") {
        if (item.note)
          notes = [{ note: item.note }];
        if (item.title)
          title2 = `<samp>${html(item.title)}</samp>`;
      } else {
        notes = (item.notes || []).filter((note) => note.note);
        const creators = this.creators(item.creators.map((creator) => this.creator(creator)).filter((v) => v));
        let date2 = null;
        if (item.date) {
          date2 = Zotero.BetterBibTeX.parseDate(item.date);
          if (date2.from)
            date2 = date2.from;
          date2 = typeof date2.year === "number" ? date2.year : item.date;
        }
        const author2 = [creators, date2].filter((v) => v).join(", ");
        if (item.title)
          title2 += `<i>${html(item.title)}</i>`;
        if (author2)
          title2 += ` (${html(author2)})`;
        title2 = title2.trim();
      }
      this.body += `<div>${title2}</div>
`;
      this.note(item.extra, "extra");
      for (const note of notes) {
        this.note(note, "note");
      }
      for (const att of item.attachments || []) {
        this.note(att, "attachment");
      }
    }
    keep(item) {
      var _a2, _b, _c;
      if (!item)
        return false;
      switch (item.itemType) {
        case "note":
        case "annotation":
          return item.note;
        case "attachment":
          return (_a2 = item.notes) == null ? void 0 : _a2.find((note) => note.note);
        default:
          return item.extra || ((_b = item.notes) == null ? void 0 : _b.find((note) => note.note)) || ((_c = item.attachments) == null ? void 0 : _c.find((att) => att.note));
      }
    }
  };
  function doExport() {
    Translator.init("export");
    if (Translator.options.markdown) {
      Zotero.write(new Exporter().markdown);
    } else {
      Zotero.write(new Exporter().html);
    }
  }
  return __toCommonJS(Collected_notes_exports);
})();
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var { Translator, doExport } = Translator___doExport;
