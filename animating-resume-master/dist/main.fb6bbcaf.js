// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn) {
  var domCode = document.querySelector('#code');
  var n = 0;
  var id = setInterval(function () {
    n += 1;
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight;

    if (n >= code.length) {
      window.clearInterval(id);
      fn && fn.call();
    }
  }, 10);
}

function writeMarkdown(markdown, fn) {
  var domPaper = document.querySelector('#paper>.content');
  var n = 0;
  var id = setInterval(function () {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;

    if (n >= markdown.length) {
      window.clearInterval(id);
      fn && fn.call();
    }
  }, 30);
}

var css1 = "/* \n * \u9762\u8BD5\u5B98\u4F60\u597D\uFF0C\u6211\u662FXXX\n * \u53EA\u7528\u6587\u5B57\u4F5C\u505A\u6211\u4ECB\u7ECD\u592A\u5355\u8C03\u4E86\n * \u6211\u5C31\u7528\u4EE3\u7801\u6765\u4ECB\u7ECD\u5427\n * \u9996\u5148\u51C6\u5907\u4E00\u4E9B\u6837\u5F0F\n */\n*{\n  transition: all 0.8s;\n}\nhtml{\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n#code{\n  border: 1px solid #aaa;\n  padding: 16px;\n}\n/* \u6211\u9700\u8981\u4E00\u70B9\u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n/* \u52A0\u4E00\u4E2A\u547C\u5438\u6548\u679C */\n#code{\n  animation: breath 0.5s infinite alternate-reverse;\n}\n/* \u73B0\u5728\u6B63\u5F0F\u5F00\u59CB */\n/* \u6211\u9700\u8981\u4E00\u5F20\u767D\u7EB8 */\n#code-wrapper{\n  width: 50%; left: 0; position: fixed; \n  height: 100%;\n}\n#paper > .content {\n display: block;\n}\n/* \u4E8E\u662F\u6211\u5C31\u53EF\u4EE5\u5728\u767D\u7EB8\u4E0A\u5199\u5B57\u4E86\uFF0C\u8BF7\u770B\u53F3\u8FB9 */\n";
var css2 = "\n/* \u63A5\u4E0B\u6765\u7528\u4E00\u4E2A\u4F18\u79C0\u7684\u5E93 marked.js\n * \u628A Markdown \u53D8\u6210 HTML\n */\n";
var md = "\n# \u81EA\u6211\u4ECB\u7ECD\n\u6211\u53EB XXX\n1990 \u5E74 1 \u6708\u51FA\u751F\nXXX \u5B66\u6821\u6BD5\u4E1A\n\u81EA\u5B66\u524D\u7AEF\u534A\u5E74\n\u5E0C\u671B\u5E94\u8058\u524D\u7AEF\u5F00\u53D1\u5C97\u4F4D\n# \u6280\u80FD\u4ECB\u7ECD\n\u719F\u6089 JavaScript CSS\n# \u9879\u76EE\u4ECB\u7ECD\n1. XXX \u8F6E\u64AD\n2. XXX \u7B80\u5386\n3. XXX \u753B\u677F\n# \u535A\u5BA2\n- QQ xxxxxxxx\n- Email xxxxxxxx\n- \u624B\u673A xxxxxxx\n- QQ xxxxxxxx\n- Email xxxxxxxx\n- \u624B\u673A xxxxxxx\n# \u8054\u7CFB\u65B9\u5F0F\n- QQ xxxxxxxx\n- Email xxxxxxxx\n- \u624B\u673A xxxxxxx\n# \u8054\u7CFB\u65B9\u5F0F\n- QQ xxxxxxxx\n- Email xxxxxxxx\n- \u624B\u673A xxxxxxx\n\n";
var css3 = "\n/*\n * \u8FD9\u5C31\u662F\u6211\u7684\u4F1A\u52A8\u7684\u7B80\u5386\n * \u8C22\u8C22\u89C2\u770B\n */\n";
writeCss('', css1, function () {
  // writeCss call the function
  createPaper(function () {
    writeMarkdown(md, function () {
      writeCss(css1, css2, function () {
        convertMarkdownToHtml(function () {
          writeCss(css1 + css2, css3, function () {
            console.log('完成');
          });
        });
      });
    });
  });
});

function createPaper(fn) {
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn && fn.call();
}

function convertMarkdownToHtml(fn) {
  var div = document.createElement('div');
  div.className = 'html markdown-body';
  div.innerHTML = marked(md);
  var markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn && fn.call();
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52115" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map