// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kQMTH":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"adjPd":[function(require,module,exports) {
var _servicePopUpJs = require("./servicePop-up.js");
var _textAnimationJs = require("./textAnimation.js");
var _validatorJs = require("./validator.js");
var _generatorJs = require("./generator.js");

},{"./servicePop-up.js":"hM8uU","./textAnimation.js":"iYPo3","./validator.js":"7K9yH","./generator.js":"kH1y0"}],"hM8uU":[function(require,module,exports) {
const validatorWindow = document.querySelector(".validator");
const closeVW = document.querySelector(".val");
const openVW = document.querySelector(".validatorOption");
const generateWindow = document.querySelector(".generate");
const openGW = document.querySelector(".generateOption");
const closeGW = document.querySelector(".gen");
const closingVW = ()=>{
    validatorWindow.style.display = "none";
};
const closingGW = ()=>{
    generateWindow.style.display = "none";
};
const openingValidatorWindow = ()=>{
    validatorWindow.style.display = "flex";
};
const openingGenerateWindow = ()=>{
    generateWindow.style.display = "flex";
};
closeVW.addEventListener("click", closingVW);
closeGW.addEventListener("click", closingGW);
openVW.addEventListener("click", openingValidatorWindow);
openGW.addEventListener("click", openingGenerateWindow);

},{}],"iYPo3":[function(require,module,exports) {
const textToAnimation = document.querySelector(".mainText span.text");
const cursorAnimation = document.querySelector(".mainText span.cursor");
let mainText = "Peselowiec";
let text = "";
let number = 0;
let time = 200;
const animationCursorFunc = ()=>{
    cursorAnimation.classList.toggle("cursorAnimation");
};
const addingText = ()=>{
    if (text == mainText) text = "";
    text = text + mainText[number];
    number++;
    textToAnimation.textContent = text;
    if (number == mainText.length) {
        number = 0;
        clearInterval(turnOn);
        setTimeout(helpingFunc, 5000);
    }
};
const helpingFunc = ()=>{
    turnOn = setInterval(addingText, time);
};
setInterval(animationCursorFunc, 300);
let turnOn = setTimeout(helpingFunc, 1000);

},{}],"7K9yH":[function(require,module,exports) {
const input = document.querySelector("div.validator input");
const btn = document.querySelector("div.validator div.finding button");
const problemInfo = document.querySelector("p.problem");
const dateInfo = document.querySelector("p.date span.description");
const sexInfo = document.querySelector("p.sex span.description");
let year;
let month;
let day;
const checkingLength = ()=>{
    if (input.value.toString().length == 11) {
        problemInfo.textContent = "";
        checkingCorrect();
    } else {
        problemInfo.style.color = "red";
        problemInfo.textContent = "Podano za mało cyfr";
        dateInfo.textContent = "";
        sexInfo.textContent = "";
    }
};
const checkingCorrect = ()=>{
    let helping = 1;
    let sum = 0;
    let toCount;
    for(let i = 0; i <= 9; i++){
        sum = sum + helping * input.value[i];
        helping += 2;
        if (helping == 5) helping += 2;
        if (helping == 11) helping = 1;
    }
    if (sum % 10 == 0) toCount = 0;
    else toCount = 10 - sum % 10;
    if (toCount == input.value[input.value.length - 1]) checkingDate();
    else {
        problemInfo.style.color = "red";
        problemInfo.textContent = "Nieprawidłowy numer pesel";
        dateInfo.textContent = "";
        sexInfo.textContent = "";
    }
};
const checkingDate = ()=>{
    let toHelpMonth;
    let firstLoopHelp = 0;
    let secondLoopHelp = 0;
    let toNumHelp;
    let helpingDay = 0;
    if (input.value[2] == 0 || input.value[2] == 1) year = 19 + input.value[0] + input.value[1];
    if (input.value[2] == 2 || input.value[2] == 3) year = 20 + input.value[0] + input.value[1];
    if (input.value[2] != 0 && input.value[2] != 1 && input.value[2] != 2 && input.value[2] != 3) {
        disableTextContent();
        return;
    }
    for(let i = 0; i <= 11; i++){
        if ((input.value[2] == 0 + firstLoopHelp || input.value[2] == 2 + firstLoopHelp) && input.value[3] == i + 1 + secondLoopHelp) {
            if (input.value[2] == 2 || input.value[2] == 3) {
                toNumHelp = Number(input.value[2]);
                toNumHelp -= 2;
                month = `${toNumHelp}${input.value[3]}`;
                toHelpMonth = toNumHelp * 10 + Number(input.value[3]);
            } else {
                month = `${input.value[2]}${input.value[3]}`;
                toHelpMonth = Number(input.value[2]) * 10 + Number(input.value[3]);
            }
        }
        if (i == 8) {
            firstLoopHelp++;
            secondLoopHelp -= 10;
        }
    }
    let toHelpDay = `${input.value[4]}${input.value[5]}`;
    if (toHelpMonth == 1 || toHelpMonth == 3 || toHelpMonth == 5 || toHelpMonth == 7 || toHelpMonth == 8 || toHelpMonth == 10 || toHelpMonth == 12) {
        if (toHelpDay <= 31) {
            day = toHelpDay;
            helpingDay = 1;
        }
    }
    if (toHelpMonth == 4 || toHelpMonth == 6 || toHelpMonth == 9 || toHelpMonth == 11) {
        if (toHelpDay <= 30) {
            day = toHelpDay;
            helpingDay = 1;
        }
    }
    if (toHelpMonth == 2 && year % 4 == 0) {
        if (toHelpDay <= 29) {
            day = toHelpDay;
            helpingDay = 1;
        }
    }
    if (toHelpMonth == 2 && year % 4 != 0) {
        if (toHelpDay <= 28) {
            day = toHelpDay;
            helpingDay = 1;
        }
    }
    if (helpingDay == 0) {
        disableTextContent();
        return;
    }
    dateInfo.textContent = `${day}.${month}.${year}`;
    checkingSex();
    additionalFunc();
};
const checkingSex = ()=>{
    if (input.value[9] % 2 == 0) sexInfo.textContent = "żeńskiej";
    else sexInfo.textContent = "męskiej";
};
const additionalFunc = ()=>{
    problemInfo.style.color = "green";
    problemInfo.textContent = "Podany pesel jest prawidłowy";
    correctDate();
};
const correctDate = ()=>{
    year = Number(year);
    month = Number(month);
    day = Number(day);
    const currentDate = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    };
    let helpToCorrectData = 0;
    if (year > currentDate.year || year < 1900) disableTextContent();
    else helpToCorrectData++;
    if (month > currentDate.month && year == currentDate.year) disableTextContent();
    else helpToCorrectData++;
    if (day > currentDate.day && month >= currentDate.month && year == currentDate.year) disableTextContent();
    else helpToCorrectData++;
    if (helpToCorrectData == 3) input.value = "";
};
const disableTextContent = ()=>{
    problemInfo.style.color = "red";
    problemInfo.textContent = "Nieprawidłowy numer pesel";
    sexInfo.textContent = "";
    dateInfo.textContent = "";
};
const checkPressEnter = (e)=>{
    if (e.keyCode == 13) checkingLength();
};
input.addEventListener("keydown", checkPressEnter);
btn.addEventListener("click", checkingLength);

},{}],"kH1y0":[function(require,module,exports) {
const chosenDate = document.querySelector("div.generate div.maintop input.date");
const btn = document.querySelector("div.generate button");
const numberContent = document.querySelector("div.generate div.maintop input.number");
const maleSelect = document.querySelector(".male");
const femaleSelect = document.querySelector(".female");
const dateInfo = document.querySelector("p.date span.toGenerateDescription");
const sexInfo = document.querySelector("p.sex span.toGenerateDescription");
const generateList = document.querySelector("ul.generateList");
const problem = document.querySelector("p.problemGenerate");
let year = "";
let month = "";
let day = "";
let help = "";
let pesel;
const chosenDateFunc = ()=>{
    for(let i = 0; i <= 3; i++)year = year + chosenDate.value[i];
    for(let i1 = 5; i1 <= 6; i1++)month = month + chosenDate.value[i1];
    for(let i2 = 8; i2 <= 9; i2++)day = day + chosenDate.value[i2];
    correctDate();
    year = "";
    day = "";
    month = "";
};
const correctDate = ()=>{
    year = Number(year);
    month = Number(month);
    day = Number(day);
    const currentDate = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    };
    let helpToCorrectData = 0;
    if (year > currentDate.year || year < 1900) disableTextContent();
    else helpToCorrectData++;
    if (month > currentDate.month && year == currentDate.year) disableTextContent();
    else helpToCorrectData++;
    if (day > currentDate.day && month >= currentDate.month && year == currentDate.year) disableTextContent();
    else helpToCorrectData++;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day > 31) disableTextContent();
        else helpToCorrectData++;
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) disableTextContent();
        else helpToCorrectData++;
    }
    if (month == 2 && year % 4 != 0) {
        if (day > 28) disableTextContent();
        else helpToCorrectData++;
    }
    if (month == 2 && year % 4 == 0) {
        if (day > 29) disableTextContent();
        else helpToCorrectData++;
    }
    if (helpToCorrectData == 4) checkingNumber();
    helpToCorrectData = 0;
};
const disableTextContent = ()=>{
    dateInfo.textContent = "";
    generateList.textContent = "";
    sexInfo.textContent = "";
    problem.textContent = "Wprowadzono niepopraną date";
    return;
};
const checkingNumber = ()=>{
    problem.textContent = "";
    if (numberContent.value > 10) numberError();
    else checkClickSexSelect();
};
const numberError = ()=>{
    dateInfo.textContent = "";
    generateList.textContent = "";
    sexInfo.textContent = "";
    problem.textContent = "Maksymalnie 10 wygenerowanych peseli";
};
const checkClickSexSelect = ()=>{
    if (help == "") sexError();
    else generatePesel();
};
const sexError = ()=>{
    dateInfo.textContent = "";
    sexInfo.textContent = "";
    generateList.textContent = "";
    problem.textContent = "Nie wybrano płci";
};
const generatePesel = ()=>{
    generateList.textContent = "";
    let toMonthHelp = false;
    let randomNumbers = [];
    let controlNumber = 0;
    if (year >= 2000) {
        toMonthHelp = true;
        pesel = `${year - 2000}`;
    } else pesel = `${year - 1900}`;
    if (pesel < 10) pesel = `${0}${pesel}`;
    if (toMonthHelp) pesel = `${pesel}${month + 20}`;
    else {
        if (month < 10) month = `${0}${month}`;
        pesel = `${pesel}${month}`;
    }
    if (day < 10) day = `${0}${day}`;
    pesel = `${pesel}${day}`;
    for(let i = 0; i <= numberContent.value - 1; i++){
        generating(randomNumbers);
        controlNumberFunc(controlNumber, randomNumbers, pesel);
        randomNumbers = [];
    }
};
const generating = (randomNumbers)=>{
    for(let i = 0; i <= 3; i++){
        let helpToRandom = Math.floor(Math.random() * 10);
        if (i == 3 && help == "k") {
            if (helpToRandom % 2 == 0) randomNumbers.push(helpToRandom);
            else {
                helpToRandom--;
                randomNumbers.push(helpToRandom);
            }
        }
        if (i == 3 && help == "m") {
            if (helpToRandom % 2 == 1) randomNumbers.push(helpToRandom);
            else {
                helpToRandom++;
                randomNumbers.push(helpToRandom);
            }
        }
        if (i < 3) randomNumbers.push(Math.floor(Math.random() * 10));
    }
};
const controlNumberFunc = (controlNumber, randomNumbers, pesel1)=>{
    let helpToControlNumber = [
        1,
        3,
        7,
        9,
        1,
        3,
        7,
        9,
        1,
        3
    ];
    for(let i = 0; i <= 3; i++)pesel1 = `${pesel1}${randomNumbers[i]}`;
    for(let i3 = 0; i3 <= 9; i3++)controlNumber = Number(pesel1[i3]) * helpToControlNumber[i3] + controlNumber;
    controlNumber = controlNumber % 10;
    controlNumber = 10 - controlNumber;
    if (controlNumber == 10) controlNumber = 0;
    pesel1 = `${pesel1}${controlNumber}`;
    writingPesels(pesel1);
};
const writingPesels = (pesel2)=>{
    const li = document.createElement("li");
    generateList.append(li);
    dateInfo.textContent = chosenDate.value;
    if (help == "k") sexInfo.textContent = " żeńskiej";
    else sexInfo.textContent = " męskiej";
    li.textContent = pesel2;
    generateList.append();
};
btn.addEventListener("click", chosenDateFunc);
maleSelect.addEventListener("click", ()=>{
    help = "m";
});
femaleSelect.addEventListener("click", ()=>{
    help = "k";
});

},{}]},["kQMTH","adjPd"], "adjPd", "parcelRequire66a3")

//# sourceMappingURL=index.63aff760.js.map
