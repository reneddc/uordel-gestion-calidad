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
})({"1exCD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3e71edac87ae31f1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jZ78i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wordle = require("./wordle");
var _wordleDefault = parcelHelpers.interopDefault(_wordle);
var _generarHTML = require("./generarHTML");
//Clases
let wordle = new (0, _wordleDefault.default)();
//Variables
let palabraSecreta;
let tamPalabraSecreta;
let intento;
let listaIntentos = [];
let nroIntentos;
let passwordAdministrador = "123";
let categoria = "General";
//VISTAS
const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");
const vistaTutorial = document.querySelector("#vista-tutorial");
const vistaPantallaPrincipal = document.querySelector("#vista-Principal");
const vistaPerdedor = document.querySelector("#vista-perdedor");
const vistaGanador = document.querySelector("#vista-ganador");
const vistaRegistrarseAdmin = document.querySelector("#vista-registro-admistrador");
const vistaBancoPalabras = document.querySelector("#vista-banco-palabras");
const navigator = document.querySelector("#navigator");
//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");
const formIntento = document.querySelector("#ingresar-intento-form");
const formHistorialIntentos = document.querySelector("#historial-intentos-form");
const formTutorial = document.querySelector("#tutorial-form");
const formModalidades = document.querySelector("#modalidades-form");
const formJuegoRapidoPrincipal = document.querySelector("#juego-rapido-form-principal");
const formPerdedor = document.querySelector("#perdedor-form");
const formGanador = document.querySelector("#ganador-form");
const formPalabraSecreta = document.querySelector("#palabra-secreta-form");
const formReintentarPerdedorNuevaPalabra = document.querySelector("#perdedor-form-volver-jugar-rand");
const formReintentarGanadorNuevaPalabra = document.querySelector("#ganador-form-volver-jugar");
const formReintentarMismaPalabra = document.querySelector("#perdedor-form-volver-jugar-same");
const formAdministrador = document.querySelector("#administrador-form");
const formRegistroAdmin = document.querySelector("#registro-admin-form");
const formNuevaPalabra = document.querySelector("#nueva-palabra-form");
const formCategoriaDeportes = document.querySelector("#juego-categoria-deporte");
const formCategoriaUCB = document.querySelector("#juego-categoria-ucb");
const formCategoriaSistemas = document.querySelector("#juego-categoria-sistemas");
const formBotonPista = document.querySelector("#boton-pista");
const formBotonVolver = document.querySelector("#boton-volver-form");
//INPUTS
const passwordAdmin = document.querySelector("#password-admin");
const nuevaPalabra = document.querySelector("#nueva-palabra");
const categoriaDeporte = document.querySelector("#categoria-deporte");
const categoriaUCB = document.querySelector("#categoria-ucb");
const categoriaSistemas = document.querySelector("#categoria-sistemas");
const botonPista = document.querySelector("#boton-mostrar-pista");
//GenerarVistas
function ocultarVista(vista) {
    vista.style.display = "none";
}
function mostrarVista(vista) {
    vista.style.display = "block";
}
function mostrarVistaCampoJuego() {
    formIntento.innerHTML = (0, _generarHTML.generarHtmlIngresarIntento)(tamPalabraSecreta);
    refrescarHistorialIntentos();
    vistaCampoJuego.style.display = "block";
    navigator.style.display = "block";
    mostrarVista(botonPista);
}
function mostrarIntentosRealizados() {
    let palabraIntento = wordle.obtenerIntento();
    if (intento != palabraIntento) alert(palabraIntento);
    else refrescarHistorialIntentos();
    formIntento.innerHTML = (0, _generarHTML.generarHtmlIngresarIntento)(tamPalabraSecreta);
}
function refrescarHistorialIntentos() {
    let listaPistas = wordle.obtenerListaPistas();
    formHistorialIntentos.innerHTML = (0, _generarHTML.generarHtmlHistorialIntentos)(tamPalabraSecreta, listaIntentos, listaPistas);
}
function mostrarVistaPerdedor(resultadoJuego) {
    let listaPistas = wordle.obtenerListaPistas();
    if (resultadoJuego == "Perdedor") {
        vistaPerdedor.style.display = "block";
        navigator.style.display = "block";
        ocultarVista(vistaCampoJuego);
        formPerdedor.innerHTML = (0, _generarHTML.generarHtmlHistorialIntentos)(tamPalabraSecreta, listaIntentos, listaPistas);
    }
}
function mostrarVistaGanador(resultadoJuego) {
    let listaPistas = wordle.obtenerListaPistas();
    if (resultadoJuego == "Ganador") {
        vistaGanador.style.display = "block";
        navigator.style.display = "block";
        ocultarVista(vistaCampoJuego);
        formPalabraSecreta.innerHTML = (0, _generarHTML.generarHtmlPalabraSecreta)(tamPalabraSecreta, palabraSecreta);
        formGanador.innerHTML = (0, _generarHTML.generarHtmlHistorialIntentos)(tamPalabraSecreta, listaIntentos, listaPistas);
    }
}
//Funciones Auxiliares
function ingresarCategorias() {
    let listaCategorias = [
        "General"
    ];
    if (categoriaDeporte.checked) listaCategorias.push("Deporte");
    if (categoriaUCB.checked) listaCategorias.push("UCB");
    if (categoriaSistemas.checked) listaCategorias.push("Sistemas");
    return listaCategorias;
}
function jugarCategoria(categoriaJuego) {
    wordle.definirPalabraSecreta(categoriaJuego);
    categoria = categoriaJuego;
    palabraSecreta = wordle.obtenerPalabraSecreta();
    tamPalabraSecreta = palabraSecreta.length;
    listaIntentos = wordle.obtenerHistorialIntentos();
    ocultarVista(vistaModalidades);
    mostrarVistaCampoJuego();
}
//EVENTOS
formJuegoRapido.addEventListener("submit", (event)=>{
    event.preventDefault();
    jugarCategoria("General");
});
formJuegoRapidoPrincipal.addEventListener("submit", (event)=>{
    event.preventDefault();
    wordle.definirPalabraSecreta();
    palabraSecreta = wordle.obtenerPalabraSecreta();
    tamPalabraSecreta = palabraSecreta.length;
    listaIntentos = wordle.obtenerHistorialIntentos();
    ocultarVista(vistaPantallaPrincipal);
    mostrarVistaCampoJuego();
});
formIntento.addEventListener("submit", (event)=>{
    event.preventDefault();
    let listaCaracteresIntento = document.querySelectorAll(".ingresar-intento");
    intento = "";
    for(let i = 0; i < tamPalabraSecreta; i++)intento = intento + listaCaracteresIntento[i].value;
    wordle.definirIntento(intento);
    listaIntentos = wordle.obtenerHistorialIntentos();
    nroIntentos = wordle.obtenerNroIntentos();
    mostrarIntentosRealizados();
    let resultadoJuego = wordle.obtenerResultadoJuego();
    mostrarVistaPerdedor(resultadoJuego);
    mostrarVistaGanador(resultadoJuego);
});
formTutorial.addEventListener("submit", (event)=>{
    event.preventDefault();
    ocultarVista(vistaPantallaPrincipal);
    mostrarVista(vistaTutorial);
    navigator.style.display = "block";
});
formModalidades.addEventListener("submit", (event)=>{
    event.preventDefault();
    ocultarVista(vistaPantallaPrincipal);
    mostrarVista(vistaModalidades);
    navigator.style.display = "block";
});
formReintentarPerdedorNuevaPalabra.addEventListener("submit", (event)=>{
    event.preventDefault();
    wordle.definirPalabraSecreta(categoria);
    palabraSecreta = wordle.obtenerPalabraSecreta();
    tamPalabraSecreta = palabraSecreta.length;
    listaIntentos = wordle.obtenerHistorialIntentos();
    ocultarVista(vistaPerdedor);
    mostrarVistaCampoJuego();
});
formReintentarGanadorNuevaPalabra.addEventListener("submit", (event)=>{
    event.preventDefault();
    wordle.definirPalabraSecreta(categoria);
    palabraSecreta = wordle.obtenerPalabraSecreta();
    tamPalabraSecreta = palabraSecreta.length;
    listaIntentos = wordle.obtenerHistorialIntentos();
    ocultarVista(vistaGanador);
    mostrarVistaCampoJuego();
});
formReintentarMismaPalabra.addEventListener("submit", (event)=>{
    event.preventDefault();
    wordle.definirSecreta(wordle.obtenerPalabraSecreta());
    palabraSecreta = wordle.obtenerPalabraSecreta();
    tamPalabraSecreta = palabraSecreta.length;
    listaIntentos = wordle.obtenerHistorialIntentos();
    ocultarVista(vistaPerdedor);
    mostrarVistaCampoJuego();
});
formAdministrador.addEventListener("submit", (event)=>{
    event.preventDefault();
    ocultarVista(vistaPantallaPrincipal);
    mostrarVista(vistaRegistrarseAdmin);
    navigator.style.display = "block";
});
formRegistroAdmin.addEventListener("submit", (event)=>{
    event.preventDefault();
    let password = passwordAdmin.value;
    if (password == passwordAdministrador) {
        ocultarVista(vistaRegistrarseAdmin);
        mostrarVista(vistaBancoPalabras);
        navigator.style.display = "block";
    } else alert("Contrase\xf1a incorrecta. Intente de nuevo.");
    passwordAdmin.value = "";
});
formNuevaPalabra.addEventListener("submit", (event)=>{
    event.preventDefault();
    let listaCategorias = [];
    wordle.definirNuevaPalabra(nuevaPalabra.value);
    let nuevaPalabraResp = wordle.obtenerNuevaPalabra();
    if (nuevaPalabraResp == nuevaPalabra.value) {
        listaCategorias = ingresarCategorias();
        wordle.definirCategorias(listaCategorias);
    } else alert(nuevaPalabraResp);
    nuevaPalabra.value = "";
    categoriaDeporte.checked = false;
    categoriaUCB.checked = false;
    categoriaSistemas.checked = false;
});
formCategoriaDeportes.addEventListener("submit", (event)=>{
    event.preventDefault();
    jugarCategoria("Deporte");
});
formCategoriaUCB.addEventListener("submit", (event)=>{
    event.preventDefault();
    jugarCategoria("UCB");
});
formCategoriaSistemas.addEventListener("submit", (event)=>{
    event.preventDefault();
    jugarCategoria("Sistemas");
});
formBotonPista.addEventListener("submit", (event)=>{
    event.preventDefault();
    let posicion = wordle.obtenerPosicionPista();
    let pista = wordle.obtenerPista();
    let inputId = `#input-${posicion}`;
    let intentoPistaPosicion = document.querySelector(inputId);
    intentoPistaPosicion.value = pista;
    ocultarVista(botonPista);
});
formBotonVolver.addEventListener("submit", (event)=>{
    event.preventDefault();
    ocultarVista(vistaBancoPalabras);
    ocultarVista(vistaCampoJuego);
    ocultarVista(vistaGanador);
    ocultarVista(vistaModalidades);
    ocultarVista(vistaPerdedor);
    ocultarVista(vistaRegistrarseAdmin);
    ocultarVista(vistaTutorial);
    mostrarVista(vistaPantallaPrincipal);
    navigator.style.display = "none";
});

},{"./wordle":"4TyOV","./generarHTML":"5odB9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TyOV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _funcionesWordle = require("./funcionesWordle");
var _funcionesWordleDefault = parcelHelpers.interopDefault(_funcionesWordle);
class Wordle {
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.intento;
        this.historialIntentos = [];
        this.listaPistas = [];
        this.nroIntentos;
        this.funcionesWordle = new (0, _funcionesWordleDefault.default)();
        this.cadenaResultado;
        this.nuevaPalabra;
        this.categoria = [];
    }
    definirPalabraSecreta(categoria = "general") {
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar(categoria);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }
    definirSecreta(palabra) {
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecreta(palabra);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }
    definirTamPalabraSecreta() {
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
    }
    definirIntento(intentoPalabra) {
        this.intento = this.funcionesWordle.definirIntento(intentoPalabra, this.tamPalabraSecreta);
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
        this.funcionesWordle.definirCadenaResultado(this.palabraSecreta, this.intento);
    }
    definirNuevaPalabra(nuevaPalabra) {
        this.nuevaPalabra = this.funcionesWordle.agregarNuevaPalabra(nuevaPalabra);
    }
    definirCategorias(categoria) {
        this.categoria = this.funcionesWordle.definirCategorias(categoria);
    }
    obtenerIntento() {
        return this.intento;
    }
    obtenerHistorialIntentos() {
        return this.historialIntentos;
    }
    obtenerNroIntentos() {
        return this.nroIntentos;
    }
    obtenerPalabraSecreta() {
        return this.palabraSecreta;
    }
    obtenerPalabrasSeleccionables() {
        return this.funcionesWordle.obtenerListaPalabras();
    }
    obtenerCadenaResultado() {
        return this.funcionesWordle.obtenerCadenaResultado();
    }
    obtenerListaPistas() {
        return this.listaPistas;
    }
    obtenerResultadoJuego() {
        return this.funcionesWordle.definirResultadoJuego(this.intento, this.palabraSecreta);
    }
    obtenerNuevaPalabra() {
        return this.nuevaPalabra;
    }
    obtenerCategoriaDeporte() {
        return this.funcionesWordle.obtenerCategoriaDeporte();
    }
    obtenerCategoriaUCB() {
        return this.funcionesWordle.obtenerCategoriaUCB();
    }
    obtenerCategoriaSistemas() {
        return this.funcionesWordle.obtenerCategoriaSistemas();
    }
    obtenerPista() {
        return this.funcionesWordle.obtenerPistaAlAzar(this.palabraSecreta);
    }
    obtenerPosicionPista() {
        return this.funcionesWordle.obtenerPosicionPistaAlAzar(this.palabraSecreta);
    }
}
exports.default = Wordle;

},{"./funcionesWordle":"9B8Wc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9B8Wc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _excepcionesWordle = require("./ExcepcionesWordle");
var _excepcionesWordleDefault = parcelHelpers.interopDefault(_excepcionesWordle);
class FuncionesWordle {
    constructor(){
        this.palabrasSeleccionables = [
            "HOJA",
            "HOLA",
            "LOBO",
            "COLA",
            "PALO",
            "PICO",
            "COCA",
            "PERO",
            "DUKE",
            "RAYOS",
            "MESSI",
            "PALOS",
            "LIBRO",
            "LLAVE",
            "BALON",
            "CINCO"
        ];
        this.categoriaDeporte = [
            "MESSI",
            "BALON",
            "DUKE",
            "CINCO"
        ];
        this.categoriaUCB = [
            "LOBO",
            "LIBRO",
            "LLAVE"
        ];
        this.categoriaSistemas = [
            "HOLA",
            "PERO"
        ];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
        this.listaIntentos = [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ];
        this.listaPistas = [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ];
        this.nroIntentos;
        this.cadenaResultado;
        this.copiaPalabraSecreta = [
            ""
        ];
        this.posicionPista = 0;
    }
    definirCategorias(categoria) {
        let palabra = this.palabrasSeleccionables[this.tamPalabrasSeleccionables - 1];
        for(let i = 0; i < categoria.length; i++)switch(categoria[i]){
            case "Deporte":
                this.categoriaDeporte.push(palabra);
                break;
            case "UCB":
                this.categoriaUCB.push(palabra);
                break;
            case "Sistemas":
                this.categoriaSistemas.push(palabra);
                break;
        }
    }
    generarResultadoVacio(tamPalabraSecreta) {
        this.cadenaResultado = [];
        for(var i = 0; i < tamPalabraSecreta; i++)this.cadenaResultado.push("o");
    }
    definirNuevaPalabra(nuevaPalabra) {
        if (nuevaPalabra == "" || this.palabrasSeleccionables.includes(nuevaPalabra)) throw new (0, _excepcionesWordleDefault.default)("Ya existe esa palabra.");
        else {
            this.palabrasSeleccionables.push(nuevaPalabra);
            this.tamPalabrasSeleccionables++;
        }
    }
    agregarNuevaPalabra(nuevaPalabra) {
        let palabra = nuevaPalabra;
        try {
            this.definirNuevaPalabra(nuevaPalabra);
        } catch (error) {
            palabra = error.message;
        }
        return palabra;
    }
    definirPalabraSecretaAlAzar(categoria) {
        let posicion = 0;
        let palabraSec = "";
        this.limpiarListaIntentos();
        switch(categoria){
            case "Deporte":
                posicion = Math.floor(Math.random() * this.categoriaDeporte.length);
                palabraSec = this.categoriaDeporte[posicion];
                break;
            case "UCB":
                posicion = Math.floor(Math.random() * this.categoriaUCB.length);
                palabraSec = this.categoriaUCB[posicion];
                break;
            case "Sistemas":
                posicion = Math.floor(Math.random() * this.categoriaDeporte.length);
                palabraSec = this.categoriaSistemas[posicion];
                break;
            default:
                posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
                palabraSec = this.palabrasSeleccionables[posicion];
                break;
        }
        return palabraSec;
    }
    definirPalabraSecreta(palabra) {
        this.limpiarListaIntentos();
        if (!this.palabrasSeleccionables.includes(palabra)) {
            this.palabrasSeleccionables.push(palabra);
            this.tamPalabrasSeleccionables++;
        }
        return palabra;
    }
    limpiarListaIntentos() {
        this.listaIntentos = [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ];
        this.listaPistas = [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ];
        this.nroIntentos = 0;
    }
    obtenerListaPalabras() {
        return this.palabrasSeleccionables;
    }
    obtenerCategoriaDeporte() {
        return this.categoriaDeporte;
    }
    obtenerCategoriaUCB() {
        return this.categoriaUCB;
    }
    obtenerCategoriaSistemas() {
        return this.categoriaSistemas;
    }
    definirTamanioPalabraSecreta(palabraSecreta) {
        return palabraSecreta.length;
    }
    esIntentoIncompleto(intento, tamPalabraSecreta) {
        if (intento.length < tamPalabraSecreta) throw new (0, _excepcionesWordleDefault.default)("Palabra Incompleta.");
    }
    esIntentoPermitido(intento) {
        if (!this.palabrasSeleccionables.includes(intento)) throw new (0, _excepcionesWordleDefault.default)("No existe esa palabra.");
    }
    agregarIntentoHistorial(intento) {
        this.listaIntentos[this.nroIntentos] = intento;
        this.nroIntentos++;
    }
    definirIntento(intento, tamPalabraSecreta) {
        try {
            if (this.nroIntentos < 6) {
                this.generarResultadoVacio(tamPalabraSecreta);
                this.esIntentoIncompleto(intento, tamPalabraSecreta);
                this.esIntentoPermitido(intento);
                this.agregarIntentoHistorial(intento);
            }
        } catch (err) {
            intento = err.message;
        }
        return intento;
    }
    definirHistorialIntentos() {
        return this.listaIntentos;
    }
    definirNroIntentos() {
        return this.nroIntentos;
    }
    definirListaPistas() {
        return this.listaPistas;
    }
    definirAzules(palabraSecreta, intento) {
        for(let i = 0; i < palabraSecreta.length; i++)if (intento[i] == palabraSecreta[i]) {
            this.cadenaResultado[i] = "z";
            this.copiaPalabraSecreta[i] = ".";
        }
    }
    definirAmarillas(palabraSecreta, intento) {
        let pos;
        for(let i = 0; i < palabraSecreta.length; i++){
            pos = this.copiaPalabraSecreta.indexOf(intento[i]);
            if (this.cadenaResultado[i] != "z" && pos != -1) {
                this.cadenaResultado[i] = "a";
                this.copiaPalabraSecreta[pos] = ".";
            }
        }
    }
    concatenarResultado() {
        this.cadenaResultado = this.cadenaResultado.join("");
    }
    agregarPista() {
        this.listaPistas[this.nroIntentos - 1] = this.cadenaResultado;
    }
    definirCadenaResultado(palabraSecreta, intento) {
        if (this.listaPistas[5].length == 1) {
            this.copiaPalabraSecreta = palabraSecreta.split("");
            this.definirAzules(palabraSecreta, intento);
            this.definirAmarillas(palabraSecreta, intento);
            this.concatenarResultado();
            this.agregarPista();
        }
    }
    obtenerCadenaResultado() {
        return this.cadenaResultado;
    }
    definirResultadoJuego(intento, palabraSecreta) {
        let resultado = "Activo";
        if (intento == palabraSecreta) resultado = "Ganador";
        else if (this.nroIntentos == 6) resultado = "Perdedor";
        return resultado;
    }
    obtenerPistaAlAzar(palabraSecreta) {
        let pista = palabraSecreta[this.posicionPista];
        return pista;
    }
    obtenerPosicionPistaAlAzar(palabraSecreta) {
        this.posicionPista = Math.floor(Math.random() * palabraSecreta.length);
        return this.posicionPista;
    }
}
exports.default = FuncionesWordle;

},{"./ExcepcionesWordle":"5UqVs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UqVs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class WordleError extends Error {
    constructor(message){
        super(message);
    }
}
exports.default = WordleError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5odB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generarHtmlIngresarIntento", ()=>generarHtmlIngresarIntento);
parcelHelpers.export(exports, "generarHtmlHistorialIntentos", ()=>generarHtmlHistorialIntentos);
parcelHelpers.export(exports, "generarHtmlPalabraSecreta", ()=>generarHtmlPalabraSecreta);
function generarHtmlIngresarIntento(tamPalabraSecreta) {
    let codigoFormulario = "";
    let codigoInputs = "";
    let codigoSubmit = `<input type="submit" class="ingresar-palabra-boton submit" value="ACEPTAR"/>`;
    for(let i = 0; i < tamPalabraSecreta; i++){
        if (i < tamPalabraSecreta - 1) codigoInputs = `<input type="text" id="input-${i}" class="ingresar-intento" size="1" maxlength="1" onkeyup="this.value = this.value.toUpperCase(); movetoNext(this,'input-${i + 1}');">`;
        else codigoInputs = `<input type="text" id="input-${i}" class="ingresar-intento" size="1" maxlength="1" onkeyup="this.value = this.value.toUpperCase();"><br>`;
        codigoFormulario = codigoFormulario + codigoInputs;
    }
    codigoFormulario = codigoFormulario + codigoSubmit;
    return codigoFormulario;
}
function generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas) {
    let codigoFormulario = "";
    let codigoInputs;
    let intento = "";
    let pista = "";
    for(let fila = 0; fila < 6; fila++){
        intento = historialIntentos[fila];
        pista = listaPistas[fila];
        for(let col = 0; col < tamPalabraSecreta; col++){
            if (intento != "X") {
                if (pista[col] == "z") codigoInputs = `<input style="background-color: rgb(18, 156, 235);text-align: center" type="text" class="historial-intento fila-${fila + 1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
                if (pista[col] == "a") codigoInputs = `<input style="background-color: rgb(248, 170, 81);text-align: center" type="text" class="historial-intento fila-${fila + 1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
                if (pista[col] == "o") codigoInputs = `<input style="background-color: rgb(194, 192, 192);text-align: center" type="text" class="historial-intento fila-${fila + 1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
            } else codigoInputs = `<input style="background-color: rgb(255, 255, 255)" type="text" class="historial-intento fila-${fila + 1}" size="1" maxlength="1" disabled>`;
            codigoFormulario = codigoFormulario + codigoInputs;
        }
        codigoFormulario = codigoFormulario + "<br>";
    }
    return codigoFormulario;
}
function generarHtmlPalabraSecreta(tamPalabraSecreta, palabraSecreta) {
    //let codigoFormulario = "La palabra secreta es: ";
    let codigoFormulario = "";
    for(let i = 0; i < tamPalabraSecreta; i++)codigoFormulario = codigoFormulario + `<input type="text" class="palabra-secreta" size="1" maxlength="1" disabled value="${palabraSecreta[i]}">`;
    return codigoFormulario;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1exCD","jZ78i"], "jZ78i", "parcelRequire4675")

//# sourceMappingURL=index.87ae31f1.js.map
