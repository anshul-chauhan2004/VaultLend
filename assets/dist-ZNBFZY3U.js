import {
  announceProvider
} from "/assets/chunk-TSNVFBFJ.js";
import {
  anvil,
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  berachain,
  berachainBepolia,
  bsc,
  celo,
  gnosis,
  hoodi,
  katana,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  sepolia
} from "/assets/chunk-OK63HIAV.js";
import {
  createStore,
  devtools,
  persist,
  subscribeWithSelector
} from "/assets/chunk-RDJD5KDJ.js";
import {
  createStore as createStore2,
  del,
  get,
  set
} from "/assets/chunk-IZ453LUA.js";
import "/assets/chunk-4W2H3DZQ.js";
import {
  p256,
  secp256r1
} from "/assets/chunk-EN2EU4MR.js";
import {
  createClient,
  createTransport,
  defineChain,
  fallback,
  from2 as from,
  getContractError,
  getEip712Domain,
  getSelector,
  hashMessage,
  hashTypedData,
  http,
  sha256,
  verifyHash,
  waitForCallsStatus,
  webSocket,
  withCache,
  zeroAddress
} from "/assets/chunk-OLFCHLNF.js";
import {
  BaseError,
  InvalidAddressError,
  decodeErrorResult,
  formatAbiItem2 as formatAbiItem,
  getAddress,
  isAddress,
  keccak_256,
  parseAbiItem,
  parseAbiParameters
} from "/assets/chunk-L5QVK4GY.js";
import {
  secp256k1
} from "/assets/chunk-YCTDYQJR.js";
import "/assets/chunk-YRT6XHLI.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/assets/chunk-4UESMH6Y.js";

// node_modules/@wagmi/connectors/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/@wagmi/connectors/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Chains.js
var Chains_exports = {};
__export(Chains_exports, {
  all: () => all,
  anvil: () => anvil2,
  anvil2: () => anvil22,
  anvil3: () => anvil3,
  arbitrum: () => arbitrum,
  arbitrumSepolia: () => arbitrumSepolia,
  base: () => base,
  baseSepolia: () => baseSepolia,
  berachain: () => berachain,
  berachainBepolia: () => berachainBepolia,
  bsc: () => bsc,
  celo: () => celo,
  gnosis: () => gnosis,
  hoodi: () => hoodi,
  katana: () => katana,
  mainnet: () => mainnet,
  optimism: () => optimism,
  optimismSepolia: () => optimismSepolia,
  polygon: () => polygon,
  sepolia: () => sepolia
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/_generated/chains.js
var chains_exports = {};
__export(chains_exports, {
  arbitrum: () => arbitrum,
  arbitrumSepolia: () => arbitrumSepolia,
  base: () => base,
  baseSepolia: () => baseSepolia,
  berachain: () => berachain,
  berachainBepolia: () => berachainBepolia,
  bsc: () => bsc,
  celo: () => celo,
  gnosis: () => gnosis,
  hoodi: () => hoodi,
  katana: () => katana,
  mainnet: () => mainnet,
  optimism: () => optimism,
  optimismSepolia: () => optimismSepolia,
  polygon: () => polygon,
  sepolia: () => sepolia
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Chains.js
var all = [
  base,
  ...Object.values(chains_exports).filter((c) => c && c.id !== base.id)
];
var anvil2 = anvil;
var anvil22 = /* @__PURE__ */ defineChain({
  ...anvil2,
  id: 31338
});
var anvil3 = /* @__PURE__ */ defineChain({
  ...anvil2,
  id: 31339
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Dialog.js
var Dialog_exports = {};
__export(Dialog_exports, {
  authSession: () => authSession,
  createThemeController: () => createThemeController,
  defaultSize: () => defaultSize,
  experimental_inline: () => experimental_inline,
  from: () => from4,
  getDialogUrl: () => getDialogUrl,
  getReferrer: () => getReferrer,
  handleBlur: () => handleBlur,
  handleResponse: () => handleResponse,
  hostUrls: () => hostUrls,
  iframe: () => iframe,
  noop: () => noop2,
  popup: () => popup,
  requiresConfirmation: () => requiresConfirmation
});

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Json.js
var bigIntSuffix = "#__bigint";
function parse(string4, reviver) {
  return JSON.parse(string4, (key, value_) => {
    const value = value_;
    if (typeof value === "string" && value.endsWith(bigIntSuffix))
      return BigInt(value.slice(0, -bigIntSuffix.length));
    return typeof reviver === "function" ? reviver(key, value) : value;
  });
}
function stringify(value, replacer, space) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof replacer === "function")
      return replacer(key, value2);
    if (typeof value2 === "bigint")
      return value2.toString() + bigIntSuffix;
    return value2;
  }, space);
}

// node_modules/@wagmi/connectors/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Errors.js
var BaseError2 = class _BaseError extends Error {
  static setStaticOptions(options) {
    _BaseError.prototype.docsOrigin = options.docsOrigin;
    _BaseError.prototype.showVersion = options.showVersion;
    _BaseError.prototype.version = options.version;
  }
  constructor(shortMessage, options = {}) {
    const details = (() => {
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if (options.cause && "details" in options.cause && typeof options.cause.details === "string")
        return options.cause.details;
      if (options.cause?.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = options.docsOrigin ?? _BaseError.prototype.docsOrigin;
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const showVersion = Boolean(options.version ?? _BaseError.prototype.showVersion);
    const version3 = options.version ?? _BaseError.prototype.version;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath || showVersion ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0,
        showVersion ? `Version: ${version3}` : void 0
      ] : []
    ].filter((x) => typeof x === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsOrigin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "showVersion", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsOrigin = docsBaseUrl;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
    this.showVersion = showVersion;
    this.version = version3;
  }
  walk(fn) {
    return walk(this, fn);
  }
};
Object.defineProperty(BaseError2, "defaultStaticOptions", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    docsOrigin: "https://oxlib.sh",
    showVersion: false,
    version: `ox@${getVersion()}`
  }
});
(() => {
  BaseError2.setStaticOptions(BaseError2.defaultStaticOptions);
})();
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn);
  return fn ? null : err;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/RpcResponse.js
function parse2(response, options = {}) {
  const { raw = false } = options;
  const response_ = response;
  if (raw)
    return response;
  if (response_.error)
    throw parseError(response_.error);
  return response_.result;
}
function parseError(error48) {
  const error_ = error48;
  if (error_ instanceof Error && !("code" in error_))
    return new InternalError({
      cause: error_,
      data: error_,
      message: error_.message,
      stack: error_.stack
    });
  const { code } = error_;
  if (code === InternalError.code)
    return new InternalError(error_);
  if (code === InvalidInputError.code)
    return new InvalidInputError(error_);
  if (code === InvalidParamsError.code)
    return new InvalidParamsError(error_);
  if (code === InvalidRequestError.code)
    return new InvalidRequestError(error_);
  if (code === LimitExceededError.code)
    return new LimitExceededError(error_);
  if (code === MethodNotFoundError.code)
    return new MethodNotFoundError(error_);
  if (code === MethodNotSupportedError.code)
    return new MethodNotSupportedError(error_);
  if (code === ParseError.code)
    return new ParseError(error_);
  if (code === ResourceNotFoundError.code)
    return new ResourceNotFoundError(error_);
  if (code === ResourceUnavailableError.code)
    return new ResourceUnavailableError(error_);
  if (code === TransactionRejectedError.code)
    return new TransactionRejectedError(error_);
  if (code === VersionNotSupportedError.code)
    return new VersionNotSupportedError(error_);
  return new InternalError({
    cause: error_ instanceof Error ? error_ : void 0,
    data: error_,
    message: error_.message,
    stack: error_ instanceof Error ? error_.stack : void 0
  });
}
var BaseError3 = class extends Error {
  constructor(errorObject) {
    const { cause, code, message, data, stack } = errorObject;
    super(message, { cause });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.BaseError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "stack", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
    this.code = code;
    this.data = data;
    this.stack = stack ?? "";
  }
};
var InvalidInputError = class _InvalidInputError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _InvalidInputError.code,
      data: parameters.data,
      message: parameters.message ?? "Missing or invalid parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidInputError"
    });
  }
};
Object.defineProperty(InvalidInputError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32e3
});
var ResourceNotFoundError = class _ResourceNotFoundError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _ResourceNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not found."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceNotFoundError"
    });
  }
};
Object.defineProperty(ResourceNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32001
});
var ResourceUnavailableError = class _ResourceUnavailableError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _ResourceUnavailableError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not available."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceUnavailableError"
    });
  }
};
Object.defineProperty(ResourceUnavailableError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32002
});
var TransactionRejectedError = class _TransactionRejectedError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _TransactionRejectedError.code,
      data: parameters.data,
      message: parameters.message ?? "Transaction creation failed."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.TransactionRejectedError"
    });
  }
};
Object.defineProperty(TransactionRejectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32003
});
var MethodNotSupportedError = class _MethodNotSupportedError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "Method is not implemented."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotSupportedError"
    });
  }
};
Object.defineProperty(MethodNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32004
});
var LimitExceededError = class _LimitExceededError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _LimitExceededError.code,
      data: parameters.data,
      message: parameters.message ?? "Rate limit exceeded."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.LimitExceededError"
    });
  }
};
Object.defineProperty(LimitExceededError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32005
});
var VersionNotSupportedError = class _VersionNotSupportedError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _VersionNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "JSON-RPC version not supported."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.VersionNotSupportedError"
    });
  }
};
Object.defineProperty(VersionNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32006
});
var InvalidRequestError = class _InvalidRequestError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _InvalidRequestError.code,
      data: parameters.data,
      message: parameters.message ?? "Input is not a valid JSON-RPC request."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidRequestError"
    });
  }
};
Object.defineProperty(InvalidRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32600
});
var MethodNotFoundError = class _MethodNotFoundError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Method does not exist."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotFoundError"
    });
  }
};
Object.defineProperty(MethodNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32601
});
var InvalidParamsError = class _InvalidParamsError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _InvalidParamsError.code,
      data: parameters.data,
      message: parameters.message ?? "Invalid method parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidParamsError"
    });
  }
};
Object.defineProperty(InvalidParamsError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32602
});
var InternalError = class _InternalError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      cause: parameters.cause,
      code: _InternalError.code,
      data: parameters.data,
      message: parameters.message ?? "Internal JSON-RPC error.",
      stack: parameters.stack
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InternalError"
    });
  }
};
Object.defineProperty(InternalError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32603
});
var ParseError = class _ParseError extends BaseError3 {
  constructor(parameters = {}) {
    super({
      code: _ParseError.code,
      data: parameters.data,
      message: parameters.message ?? "Failed to parse JSON-RPC response."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ParseError"
    });
  }
};
Object.defineProperty(ParseError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32700
});

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Provider.js
var ProviderRpcError = class extends Error {
  constructor(code, message) {
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderRpcError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.details = message;
  }
};
var UserRejectedRequestError = class extends ProviderRpcError {
  constructor({ message = "The user rejected the request." } = {}) {
    super(4001, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UserRejectedRequestError"
    });
  }
};
Object.defineProperty(UserRejectedRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4001
});
var UnauthorizedError = class extends ProviderRpcError {
  constructor({ message = "The requested method and/or account has not been authorized by the user." } = {}) {
    super(4100, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4100
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnauthorizedError"
    });
  }
};
Object.defineProperty(UnauthorizedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4100
});
var UnsupportedMethodError = class extends ProviderRpcError {
  constructor({ message = "The provider does not support the requested method." } = {}) {
    super(4200, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4200
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedMethodError"
    });
  }
};
Object.defineProperty(UnsupportedMethodError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4200
});
var DisconnectedError = class extends ProviderRpcError {
  constructor({ message = "The provider is disconnected from all chains." } = {}) {
    super(4900, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4900
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.DisconnectedError"
    });
  }
};
Object.defineProperty(DisconnectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4900
});
var ChainDisconnectedError = class extends ProviderRpcError {
  constructor({ message = "The provider is not connected to the requested chain." } = {}) {
    super(4901, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4901
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.ChainDisconnectedError"
    });
  }
};
Object.defineProperty(ChainDisconnectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4901
});
var SwitchChainError = class extends ProviderRpcError {
  constructor({ message = "An error occurred when attempting to switch chain." } = {}) {
    super(4902, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4902
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.SwitchChainError"
    });
  }
};
Object.defineProperty(SwitchChainError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4902
});
var UnsupportedNonOptionalCapabilityError = class extends ProviderRpcError {
  constructor({ message = "This Wallet does not support a capability that was not marked as optional." } = {}) {
    super(5700, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedNonOptionalCapabilityError"
    });
  }
};
Object.defineProperty(UnsupportedNonOptionalCapabilityError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5700
});
var UnsupportedChainIdError = class extends ProviderRpcError {
  constructor({ message = "This Wallet does not support the requested chain ID." } = {}) {
    super(5710, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5710
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedChainIdError"
    });
  }
};
Object.defineProperty(UnsupportedChainIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5710
});
var DuplicateIdError = class extends ProviderRpcError {
  constructor({ message = "There is already a bundle submitted with this ID." } = {}) {
    super(5720, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5720
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.DuplicateIdError"
    });
  }
};
Object.defineProperty(DuplicateIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5720
});
var UnknownBundleIdError = class extends ProviderRpcError {
  constructor({ message = "This bundle id is unknown / has not been submitted." } = {}) {
    super(5730, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5730
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnknownBundleIdError"
    });
  }
};
Object.defineProperty(UnknownBundleIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5730
});
var BundleTooLargeError = class extends ProviderRpcError {
  constructor({ message = "The call bundle is too large for the Wallet to process." } = {}) {
    super(5740, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5740
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.BundleTooLargeError"
    });
  }
};
Object.defineProperty(BundleTooLargeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5740
});
var AtomicReadyWalletRejectedUpgradeError = class extends ProviderRpcError {
  constructor({ message = "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade." } = {}) {
    super(5750, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5750
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.AtomicReadyWalletRejectedUpgradeError"
    });
  }
};
Object.defineProperty(AtomicReadyWalletRejectedUpgradeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5750
});
var AtomicityNotSupportedError = class extends ProviderRpcError {
  constructor({ message = "The wallet does not support atomic execution but the request requires it." } = {}) {
    super(5760, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5760
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.AtomicityNotSupportedError"
    });
  }
};
Object.defineProperty(AtomicityNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5760
});
function createEmitter() {
  const emitter = new import_index.default();
  return {
    get eventNames() {
      return emitter.eventNames.bind(emitter);
    },
    get listenerCount() {
      return emitter.listenerCount.bind(emitter);
    },
    get listeners() {
      return emitter.listeners.bind(emitter);
    },
    addListener: emitter.addListener.bind(emitter),
    emit: emitter.emit.bind(emitter),
    off: emitter.off.bind(emitter),
    on: emitter.on.bind(emitter),
    once: emitter.once.bind(emitter),
    removeAllListeners: emitter.removeAllListeners.bind(emitter),
    removeListener: emitter.removeListener.bind(emitter)
  };
}
function from2(provider, _options = {}) {
  if (!provider)
    throw new IsUndefinedError();
  return {
    ...provider,
    async request(args) {
      try {
        const result = await provider.request(args);
        if (result && typeof result === "object" && "jsonrpc" in result)
          return parse2(result);
        return result;
      } catch (error48) {
        throw parseError2(error48);
      }
    }
  };
}
function parseError2(error48) {
  const error_ = parseError(error48);
  if (error_ instanceof InternalError) {
    if (!error_.data)
      return error_;
    const { code } = error_.data;
    if (code === DisconnectedError.code)
      return new DisconnectedError(error_);
    if (code === ChainDisconnectedError.code)
      return new ChainDisconnectedError(error_);
    if (code === UserRejectedRequestError.code)
      return new UserRejectedRequestError(error_);
    if (code === UnauthorizedError.code)
      return new UnauthorizedError(error_);
    if (code === UnsupportedMethodError.code)
      return new UnsupportedMethodError(error_);
    if (code === SwitchChainError.code)
      return new SwitchChainError(error_);
    if (code === AtomicReadyWalletRejectedUpgradeError.code)
      return new AtomicReadyWalletRejectedUpgradeError(error_);
    if (code === AtomicityNotSupportedError.code)
      return new AtomicityNotSupportedError(error_);
    if (code === BundleTooLargeError.code)
      return new BundleTooLargeError(error_);
    if (code === UnknownBundleIdError.code)
      return new UnknownBundleIdError(error_);
    if (code === DuplicateIdError.code)
      return new DuplicateIdError(error_);
    if (code === UnsupportedChainIdError.code)
      return new UnsupportedChainIdError(error_);
    if (code === UnsupportedNonOptionalCapabilityError.code)
      return new UnsupportedNonOptionalCapabilityError(error_);
  }
  return error_;
}
var IsUndefinedError = class extends BaseError2 {
  constructor() {
    super("`provider` is undefined.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.IsUndefinedError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/intersectionObserver.js
var supported = () => "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in IntersectionObserverEntry.prototype && "isVisible" in IntersectionObserverEntry.prototype;

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/logger.js
function create(options = {}) {
  const { prefix = "[Porto]" } = options;
  const memo = /* @__PURE__ */ new Set();
  return {
    error: createLogFn(console.error, { prefix }),
    errorOnce: createLogFn(console.error, { memo, prefix }),
    log: createLogFn(console.log, { prefix }),
    logOnce: createLogFn(console.log, { memo, prefix }),
    warn: createLogFn(console.warn, { prefix }),
    warnOnce: createLogFn(console.warn, { memo, prefix })
  };
}
var logger = create();
function createLogFn(fn, options = {}) {
  const { memo, prefix } = options;
  return (...messages) => {
    const message = messages.join(" ");
    if (memo?.has(message))
      return;
    memo?.add(message);
    fn(`${prefix} ${message}`);
  };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/userAgent.js
function isSafari() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("safari") && !ua.includes("chrome");
}
function isFirefox() {
  const ua = navigator.userAgent.toLowerCase();
  return (ua.includes("firefox") || ua.includes("fxios")) && !ua.includes("seamonkey");
}
function isMobile() {
  if (window.navigator?.userAgentData?.mobile)
    return true;
  return (
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing
    navigator.maxTouchPoints > 1 || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.slice(0, 4))
  );
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Messenger.js
var Messenger_exports = {};
__export(Messenger_exports, {
  bridge: () => bridge,
  cliRelay: () => cliRelay,
  from: () => from3,
  fromWindow: () => fromWindow,
  noop: () => noop
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/promise.js
function withResolvers() {
  let resolve = () => void 0;
  let reject = () => void 0;
  const promise2 = new Promise((resolve_, reject_) => {
    resolve = resolve_;
    reject = reject_;
  });
  return { promise: promise2, reject, resolve };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/utils.js
function normalizeValue(value) {
  if (Array.isArray(value))
    return value.map(normalizeValue);
  if (typeof value === "function")
    return void 0;
  if (typeof value !== "object" || value === null)
    return value;
  if (Object.getPrototypeOf(value) !== Object.prototype)
    try {
      return structuredClone(value);
    } catch {
      return void 0;
    }
  const normalized = {};
  for (const [k, v] of Object.entries(value))
    normalized[k] = normalizeValue(v);
  return normalized;
}
function uniqBy(data, fn) {
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of data) {
    const key = fn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}
function uuidv4() {
  if (typeof globalThis !== "undefined" && "crypto" in globalThis)
    return globalThis.crypto.randomUUID();
  return crypto.randomUUID();
}
function withDedupe(fn, { enabled = true, id }) {
  if (!enabled || !id)
    return fn();
  if (withDedupe.cache.get(id))
    return withDedupe.cache.get(id);
  const promise2 = fn().finally(() => withDedupe.cache.delete(id));
  withDedupe.cache.set(id, promise2);
  return promise2;
}
(function(withDedupe2) {
  withDedupe2.cache = /* @__PURE__ */ new Map();
})(withDedupe || (withDedupe = {}));

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Messenger.js
function from3(messenger) {
  return messenger;
}
function fromWindow(w, options = {}) {
  const { targetOrigin } = options;
  const listeners = /* @__PURE__ */ new Map();
  return from3({
    destroy() {
      for (const listener of listeners.values()) {
        w.removeEventListener("message", listener);
      }
    },
    on(topic, listener, id) {
      function handler(event) {
        if (event.data.topic !== topic)
          return;
        if (id && event.data.id !== id)
          return;
        if (targetOrigin && event.origin !== targetOrigin)
          return;
        listener(event.data.payload, event);
      }
      w.addEventListener("message", handler);
      listeners.set(topic, handler);
      return () => w.removeEventListener("message", handler);
    },
    async send(topic, payload, target) {
      const id = uuidv4();
      w.postMessage(normalizeValue({ id, payload, topic }), target ?? targetOrigin ?? "*");
      return { id, payload, topic };
    },
    async sendAsync(topic, payload, target) {
      const { id } = await this.send(topic, payload, target);
      return new Promise((resolve) => this.on(topic, resolve, id));
    }
  });
}
function bridge(parameters) {
  const { from: from_, to, waitForReady = false } = parameters;
  let pending = false;
  const ready = withResolvers();
  from_.on("ready", ready.resolve);
  const messenger = from3({
    destroy() {
      from_.destroy();
      to.destroy();
      if (pending)
        ready.reject();
    },
    on(topic, listener, id) {
      return from_.on(topic, listener, id);
    },
    async send(topic, payload) {
      pending = true;
      if (waitForReady)
        await ready.promise.finally(() => pending = false);
      return to.send(topic, payload);
    },
    async sendAsync(topic, payload) {
      pending = true;
      if (waitForReady)
        await ready.promise.finally(() => pending = false);
      return to.sendAsync(topic, payload);
    }
  });
  return {
    ...messenger,
    ready(options) {
      void messenger.send("ready", options);
    },
    waitForReady() {
      return ready.promise;
    }
  };
}
function noop() {
  return {
    destroy() {
    },
    on() {
      return () => {
      };
    },
    ready() {
    },
    send() {
      return Promise.resolve(void 0);
    },
    sendAsync() {
      return Promise.resolve(void 0);
    },
    waitForReady() {
      return Promise.resolve(void 0);
    }
  };
}
function cliRelay(options) {
  const { relayUrl } = options;
  let eventSource = null;
  const listenerSets = /* @__PURE__ */ new Map();
  function connect() {
    if (!relayUrl || eventSource)
      return;
    eventSource = new EventSource(relayUrl);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (!data.topic)
          return;
        if (!data.payload)
          return;
        const listeners = listenerSets.get(data.topic);
        if (!listeners)
          return;
        for (const listener of listeners)
          listener(data.payload, { data, origin: relayUrl });
      } catch (error48) {
        console.error("Error parsing SSE message:", error48);
      }
    };
    eventSource.onerror = (error48) => {
      console.error("SSE connection error:", error48);
      eventSource?.close();
      eventSource = null;
      setTimeout(connect, 1e3);
    };
  }
  connect();
  async function request(topic, payload) {
    const id = uuidv4();
    const data = { id, payload, topic };
    const response = await fetch(relayUrl, {
      body: stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    return { id, payload, response, topic };
  }
  return {
    destroy() {
      eventSource?.close();
      eventSource = null;
      listenerSets.clear();
    },
    on(topic, listener) {
      if (!listenerSets.has(topic))
        listenerSets.set(topic, /* @__PURE__ */ new Set());
      listenerSets.get(topic).add(listener);
      return () => {
        const listeners = listenerSets.get(topic);
        if (!listeners)
          return;
        listeners.delete(listener);
        if (listeners.size === 0)
          listenerSets.delete(topic);
      };
    },
    async ready(options2) {
      await new Promise((resolve) => setTimeout(resolve, 32));
      void this.send("ready", options2);
    },
    async send(topic, payload) {
      const { id } = await request(topic, payload);
      return { id, payload, topic };
    },
    async sendAsync(topic, payload) {
      const { response } = await request(topic, payload);
      if (!response.ok)
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json"))
        return await response.json();
      return void 0;
    }
  };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/react-native/environment.js
var environment;
var reactNative = {
  get environment() {
    if (!environment)
      throw new Error("React Native environment is not configured");
    return environment;
  },
  set environment(env) {
    environment = env;
  }
};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/react-native/utils.js
function isReactNative() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative")
    return true;
  if (typeof window !== "undefined" && Object.hasOwn(window, "ReactNativeWebView"))
    return true;
  if (typeof globalThis !== "undefined" && Object.hasOwn(globalThis, "HermesEngine"))
    return true;
  return false;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Dialog.js
var AuthSessionStatus = {
  cancel: "cancel",
  error: "error",
  success: "success",
  unknown: "unknown"
};
var hostUrls = {
  local: "http://localhost:5175/dialog/",
  prod: "https://id.porto.sh/dialog",
  stg: "https://stg.id.porto.sh/dialog"
};
function from4(dialog2) {
  return dialog2;
}
function iframe(options = {}) {
  const { skipProtocolCheck, skipUnsupported } = options;
  const includesUnsupported = (requests) => !skipUnsupported && isSafari() && requests?.some((x) => ["wallet_connect", "eth_requestAccounts"].includes(x.method));
  if (typeof window === "undefined")
    return noop2();
  return from4({
    name: "iframe",
    setup(parameters) {
      const { host, internal, theme, themeController } = parameters;
      const { store } = internal;
      const fallback2 = popup().setup(parameters);
      let open = false;
      const hostUrl = new URL(host);
      const root = document.createElement("dialog");
      root.dataset.porto = "";
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-closed", "true");
      root.setAttribute("aria-label", "Porto Wallet");
      root.setAttribute("hidden", "until-found");
      Object.assign(root.style, {
        background: "transparent",
        border: "0",
        outline: "0",
        padding: "0",
        position: "fixed"
      });
      document.body.appendChild(root);
      const iframe2 = document.createElement("iframe");
      iframe2.setAttribute("data-testid", "porto");
      const iframeAllow = [
        "payment",
        `publickey-credentials-get ${hostUrl.origin}`,
        `publickey-credentials-create ${hostUrl.origin}`
      ];
      if (!isFirefox())
        iframeAllow.push("clipboard-write");
      iframe2.setAttribute("allow", iframeAllow.join("; "));
      iframe2.setAttribute("tabindex", "0");
      iframe2.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
      iframe2.setAttribute("src", getDialogUrl(host));
      iframe2.setAttribute("title", "Porto");
      Object.assign(iframe2.style, {
        backgroundColor: "transparent",
        border: "0",
        colorScheme: "light dark",
        height: "100%",
        left: "0",
        position: "fixed",
        top: "0",
        width: "100%"
      });
      const style = document.createElement("style");
      style.innerHTML = `
        dialog[data-porto]::backdrop {
          background: transparent!important;
        }
      `;
      root.appendChild(style);
      root.appendChild(iframe2);
      const messenger = bridge({
        from: fromWindow(window, { targetOrigin: hostUrl.origin }),
        to: fromWindow(iframe2.contentWindow, {
          targetOrigin: hostUrl.origin
        }),
        waitForReady: true
      });
      themeController?._setup(messenger, true);
      const drawerModeQuery = window.matchMedia("(max-width: 460px)");
      const onDrawerModeChange = () => {
        messenger.send("__internal", {
          type: "resize",
          // 460 = drawer mode, 461 = floating mode
          width: drawerModeQuery.matches ? 460 : 461
        });
      };
      drawerModeQuery.addEventListener("change", onDrawerModeChange);
      messenger.on("ready", (options2) => {
        const chainIds = parameters.internal.store.getState().chainIds;
        let compatibleChainIds = chainIds.filter((id) => options2.chainIds.includes(id));
        if (compatibleChainIds.length === 0)
          compatibleChainIds = options2.chainIds;
        store.setState((x) => ({
          ...x,
          chainIds: compatibleChainIds
        }));
        messenger.send("__internal", {
          chainIds: compatibleChainIds,
          mode: "iframe",
          referrer: getReferrer(),
          theme,
          type: "init"
        });
        onDrawerModeChange();
      });
      messenger.on("rpc-response", (response) => {
        if (includesUnsupported([response._request])) {
          const src = iframe2.src;
          iframe2.src = src;
        }
        handleResponse(store, response);
      });
      messenger.on("__internal", (payload) => {
        if (payload.type === "switch" && payload.mode === "popup") {
          fallback2.open();
          fallback2.syncRequests(store.getState().requestQueue);
        }
      });
      let bodyStyle = null;
      let opener = null;
      const onBlur = () => handleBlur(store);
      const onEscape = (event) => {
        if (event.key === "Escape")
          handleBlur(store);
      };
      const inertObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "attributes")
            continue;
          const name = mutation.attributeName;
          if (!name)
            continue;
          if (name !== "inert")
            continue;
          root.removeAttribute(name);
        }
      });
      inertObserver.observe(root, {
        attributeOldValue: true,
        attributes: true
      });
      let dialogActive = false;
      const activatePage = () => {
        if (!dialogActive)
          return;
        dialogActive = false;
        root.removeEventListener("click", onBlur);
        document.removeEventListener("keydown", onEscape);
        root.style.pointerEvents = "none";
        opener?.focus();
        opener = null;
        Object.assign(document.body.style, bodyStyle ?? "");
        document.body.style.overflow = bodyStyle?.overflow ?? "";
      };
      const activateDialog = () => {
        if (dialogActive)
          return;
        dialogActive = true;
        root.addEventListener("click", onBlur);
        document.addEventListener("keydown", onEscape);
        iframe2.focus();
        root.style.pointerEvents = "auto";
        bodyStyle = Object.assign({}, document.body.style);
        document.body.style.overflow = "hidden";
      };
      let visible = false;
      const showDialog = () => {
        if (visible)
          return;
        visible = true;
        if (document.activeElement instanceof HTMLElement)
          opener = document.activeElement;
        root.removeAttribute("hidden");
        root.removeAttribute("aria-closed");
        root.showModal();
      };
      const hideDialog = () => {
        if (!visible)
          return;
        visible = false;
        root.setAttribute("hidden", "true");
        root.setAttribute("aria-closed", "true");
        root.close();
        for (const sibling of root.parentNode ? Array.from(root.parentNode.children) : []) {
          if (sibling === root)
            continue;
          if (!sibling.hasAttribute("inert"))
            continue;
          sibling.removeAttribute("inert");
        }
      };
      return {
        close() {
          fallback2.close();
          open = false;
          messenger.send("__internal", {
            mode: "iframe",
            referrer: getReferrer(),
            type: "init"
          });
          hideDialog();
          activatePage();
        },
        destroy() {
          fallback2.close();
          open = false;
          activatePage();
          hideDialog();
          fallback2.destroy();
          messenger.destroy();
          root.remove();
          inertObserver.disconnect();
          drawerModeQuery.removeEventListener("change", onDrawerModeChange);
        },
        open() {
          if (open)
            return;
          open = true;
          showDialog();
          activateDialog();
          messenger.send("__internal", {
            mode: "iframe",
            referrer: getReferrer(),
            type: "init"
          });
        },
        async secure() {
          const { trustedHosts } = await messenger.waitForReady();
          const secureProtocol = (() => {
            if (skipProtocolCheck)
              return true;
            const secure = window.location.protocol.startsWith("https");
            if (!secure)
              logger.warnOnce("Detected insecure protocol (HTTP).", `

The Porto iframe is not supported on HTTP origins (${window.location.origin})`, "due to lack of WebAuthn support.", "See https://porto.sh/sdk#secure-origins-https for more information.");
            return secure;
          })();
          const intersectionObserverSupported = supported();
          const trustedHost = Boolean(trustedHosts?.includes(window.location.hostname));
          const secureFrame = Boolean(intersectionObserverSupported || trustedHost);
          if (!secureFrame)
            logger.warnOnce([
              `Warning: Browser does not support IntersectionObserver v2 or host "${hostUrl.hostname}" is not trusted by Porto.`,
              "This may result in the dialog falling back to a popup.",
              "",
              `Add "${hostUrl.hostname}" to the trusted hosts list to enable iframe dialog: https://github.com/ithacaxyz/porto/edit/main/src/trusted-hosts.ts`
            ].join("\n"));
          return {
            frame: secureFrame,
            host: trustedHost,
            protocol: secureProtocol
          };
        },
        async syncRequests(requests) {
          const { methodPolicies } = await messenger.waitForReady();
          const secure = await this.secure();
          const headless = requests?.every((request) => methodPolicies?.find((policy) => policy.method === request.request.method)?.modes?.headless === true);
          const unsupported = includesUnsupported(requests.map((x) => x.request));
          if (!headless && (unsupported || !secure.protocol || !secure.frame))
            fallback2.syncRequests(requests);
          else {
            const requiresConfirm = requests.some((x) => requiresConfirmation(x.request, {
              methodPolicies,
              targetOrigin: hostUrl.origin
            }));
            if (!open && requiresConfirm)
              this.open();
            messenger.send("rpc-requests", requests);
          }
        }
      };
    },
    supportsHeadless: true
  });
}
function popup(options = {}) {
  if (typeof window === "undefined")
    return noop2();
  const { type = "auto", size: size3 = defaultSize } = options;
  return from4({
    name: "popup",
    setup(parameters) {
      const { host, internal, themeController } = parameters;
      const { store } = internal;
      const hostUrl = new URL(host);
      let popup2 = null;
      const resolvedType = type === "page" || type === "auto" && isMobile() ? "page" : "popup";
      function onBlur() {
        if (popup2)
          handleBlur(store);
      }
      const offDetectClosed = (() => {
        const timer = setInterval(() => {
          if (popup2?.closed)
            handleBlur(store);
        }, 100);
        return () => clearInterval(timer);
      })();
      let messenger;
      themeController?._setup(null, true);
      return {
        close() {
          if (!popup2)
            return;
          popup2.close();
          popup2 = null;
        },
        destroy() {
          this.close();
          window.removeEventListener("focus", onBlur);
          messenger?.destroy();
          offDetectClosed();
        },
        open() {
          if (resolvedType === "popup") {
            const left = (window.innerWidth - size3.width) / 2 + window.screenX;
            const top = window.screenY + 100;
            popup2 = window.open(getDialogUrl(host), "_blank", `width=${size3.width},height=${size3.height},left=${left},top=${top}`);
          } else {
            popup2 = window.open(getDialogUrl(host), "_blank");
          }
          if (!popup2)
            throw new Error("Failed to open popup");
          messenger = bridge({
            from: fromWindow(window, {
              targetOrigin: hostUrl.origin
            }),
            to: fromWindow(popup2, {
              targetOrigin: hostUrl.origin
            }),
            waitForReady: true
          });
          themeController?._setup(messenger, false);
          messenger.send("__internal", {
            mode: resolvedType === "page" ? "page" : "popup",
            referrer: getReferrer(),
            theme: themeController?.getTheme() ?? parameters.theme,
            type: "init"
          });
          messenger.on("rpc-response", (response) => handleResponse(store, response));
          window.removeEventListener("focus", onBlur);
          window.addEventListener("focus", onBlur);
        },
        async secure() {
          return {
            frame: true,
            host: true,
            protocol: true
          };
        },
        async syncRequests(requests) {
          const requiresConfirm = requests.some((x) => requiresConfirmation(x.request));
          if (requiresConfirm) {
            if (!popup2 || popup2.closed)
              this.open();
            popup2?.focus();
          }
          messenger?.send("rpc-requests", requests);
        }
      };
    },
    supportsHeadless: false
  });
}
function authSession(options = {}) {
  if (!isReactNative())
    return noop2();
  const { requestOptions = { showTitle: true } } = options;
  return from4({
    name: "authSession",
    setup(parameters) {
      const { host, internal } = parameters;
      const { store } = internal;
      const environment2 = reactNative.environment;
      environment2.maybeCompleteAuthSession?.();
      let processing = false;
      let inFlightId = null;
      async function handle(request) {
        const { request: rpcRequest } = request;
        const reactNativePaths = {
          account_verifyEmail: "account_verifyEmail",
          eth_requestAccounts: "eth_requestAccounts",
          eth_sendTransaction: "eth_sendTransaction",
          eth_signTypedData_v4: "eth_signTypedData_v4",
          personal_sign: "personal_sign",
          wallet_addFunds: "wallet_addFunds",
          wallet_connect: "wallet_connect",
          wallet_getAccountVersion: "wallet_getAccountVersion",
          wallet_getAssets: "wallet_getAssets",
          wallet_getCallsStatus: "wallet_getCallsStatus",
          wallet_getCapabilities: "wallet_getCapabilities",
          wallet_getKeys: "wallet_getKeys",
          wallet_getPermissions: "wallet_getPermissions",
          wallet_grantAdmin: "wallet_grantAdmin",
          wallet_grantPermissions: "wallet_grantPermissions",
          wallet_prepareCalls: "wallet_prepareCalls",
          wallet_prepareUpgradeAccount: "wallet_prepareUpgradeAccount",
          wallet_revokeAdmin: "wallet_revokeAdmin",
          wallet_revokePermissions: "wallet_revokePermissions",
          wallet_sendCalls: "wallet_sendCalls",
          wallet_sendPreparedCalls: "wallet_sendPreparedCalls",
          wallet_switchEthereumChain: "wallet_switchEthereumChain",
          wallet_verifySignature: "wallet_verifySignature"
        };
        const rpcMethod = reactNativePaths[rpcRequest.method];
        if (!rpcMethod)
          throw new UnsupportedMethodError({
            message: `Method not supported in Mode.reactNative(): ${rpcRequest.method}`
          });
        const redirectUri = environment2.makeRedirectUri({
          ...options.redirectUri ? { scheme: options.redirectUri.scheme } : {},
          path: options.redirectUri?.path ?? "/",
          preferLocalhost: typeof __DEV__ === "boolean" && __DEV__
        });
        const url2 = new URL(host);
        url2.pathname = `${url2.pathname.replace(/\/$/, "")}/${rpcMethod}`;
        const searchParams = new URLSearchParams({
          id: String(rpcRequest.id),
          jsonrpc: "2.0",
          method: rpcRequest.method,
          redirectUri
        });
        const params = rpcRequest.params ?? [];
        if (params.length > 0)
          searchParams.set("params", stringify(params));
        const decodedParams = rpcRequest._decoded?.params;
        if (decodedParams)
          searchParams.set("_decoded", stringify(decodedParams));
        url2.search = searchParams.toString();
        const result = await environment2.openAuthSessionAsync(url2.toString(), redirectUri, requestOptions);
        const response = (() => {
          if (result.type === "success" && result.url) {
            const resolved = new URL(result.url);
            const status = resolved.searchParams.get("status") ?? AuthSessionStatus.unknown;
            const message = resolved.searchParams.get("message") ?? void 0;
            const payload = resolved.searchParams.get("payload") ?? void 0;
            if (status === AuthSessionStatus.success)
              try {
                return {
                  id: rpcRequest.id,
                  jsonrpc: "2.0",
                  result: payload ? parse(payload) : void 0
                };
              } catch (error49) {
                return {
                  error: {
                    code: -32603,
                    message: error49 instanceof Error ? error49.message : "Failed to parse redirect payload"
                  },
                  id: rpcRequest.id,
                  jsonrpc: "2.0"
                };
              }
            const error48 = status === AuthSessionStatus.cancel ? new UserRejectedRequestError({
              message: message ?? "User rejected request"
            }) : new ProviderRpcError(-32603, message ?? status ?? "Request failed");
            return {
              error: {
                code: error48.code,
                message: error48.message
              },
              id: rpcRequest.id,
              jsonrpc: "2.0"
            };
          }
          if (result.type === "cancel" || result.type === "dismiss")
            return {
              error: {
                code: UserRejectedRequestError.code,
                message: "User rejected request"
              },
              id: rpcRequest.id,
              jsonrpc: "2.0"
            };
          return {
            error: {
              code: -32603,
              message: result.error ?? "Request failed"
            },
            id: rpcRequest.id,
            jsonrpc: "2.0"
          };
        })();
        handleResponse(store, response);
        environment2.dismissAuthSession?.();
      }
      return {
        close() {
          environment2.dismissAuthSession?.();
        },
        destroy() {
          environment2.dismissAuthSession?.();
        },
        open() {
        },
        async secure() {
          return {
            frame: false,
            host: true,
            protocol: true
          };
        },
        async syncRequests(requests) {
          if (processing)
            return;
          const [request] = requests;
          if (!request)
            return;
          if (inFlightId === request.request.id)
            return;
          inFlightId = request.request.id;
          processing = true;
          try {
            await handle(request);
          } catch (error48) {
            handleResponse(store, {
              error: {
                code: -32603,
                message: error48 instanceof Error ? error48.message : "Request failed"
              },
              id: request.request.id,
              jsonrpc: "2.0"
            });
            environment2.dismissAuthSession?.();
          } finally {
            inFlightId = null;
            processing = false;
          }
        }
      };
    },
    supportsHeadless: false
  });
}
function noop2() {
  return from4({
    name: "noop",
    setup() {
      return {
        close() {
        },
        destroy() {
        },
        open() {
        },
        async secure() {
          return {
            frame: true,
            host: true,
            protocol: true
          };
        },
        async syncRequests() {
        }
      };
    },
    supportsHeadless: true
  });
}
function experimental_inline(options) {
  const { element } = options;
  if (typeof window === "undefined")
    return noop2();
  return from4({
    name: "inline",
    setup(parameters) {
      const { host, internal, theme, themeController } = parameters;
      const { store } = internal;
      let open = false;
      const hostUrl = new URL(host);
      const root = document.createElement("div");
      root.dataset.porto = "";
      root.style.height = "100%";
      element().appendChild(root);
      const iframe2 = document.createElement("iframe");
      iframe2.setAttribute("allow", `payment; publickey-credentials-get ${hostUrl.origin}; publickey-credentials-create ${hostUrl.origin}`);
      iframe2.setAttribute("aria-label", "Porto Wallet");
      iframe2.setAttribute("tabindex", "0");
      iframe2.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
      iframe2.setAttribute("src", getDialogUrl(host));
      iframe2.setAttribute("title", "Porto");
      Object.assign(iframe2.style, {
        border: "0",
        height: "100%",
        width: "100%"
      });
      root.appendChild(iframe2);
      const messenger = bridge({
        from: fromWindow(window, { targetOrigin: hostUrl.origin }),
        to: fromWindow(iframe2.contentWindow, {
          targetOrigin: hostUrl.origin
        }),
        waitForReady: true
      });
      themeController?._setup(messenger, true);
      messenger.on("ready", () => {
        messenger.send("__internal", {
          mode: "inline-iframe",
          referrer: getReferrer(),
          theme,
          type: "init"
        });
      });
      messenger.on("rpc-response", (response) => handleResponse(store, response));
      return {
        close() {
        },
        destroy() {
          messenger.destroy();
          root.remove();
        },
        open() {
          if (open)
            return;
          open = true;
          messenger.send("__internal", {
            mode: "iframe",
            referrer: getReferrer(),
            type: "init"
          });
        },
        async secure() {
          return {
            frame: true,
            host: true,
            protocol: true
          };
        },
        async syncRequests(requests) {
          messenger.send("rpc-requests", requests);
        }
      };
    },
    supportsHeadless: true
  });
}
function createThemeController() {
  let lastTheme = null;
  let messenger = null;
  const controller = {
    _setup(messenger_, resetTheme = false) {
      if (resetTheme)
        lastTheme = null;
      messenger = messenger_;
    },
    getTheme() {
      return lastTheme;
    },
    setTheme(theme) {
      lastTheme = theme;
      messenger?.send("__internal", {
        theme,
        type: "set-theme"
      }).catch(() => {
      });
    }
  };
  return controller;
}
var defaultSize = { height: 282, width: 360 };
function requiresConfirmation(request, options = {}) {
  const { methodPolicies, targetOrigin } = options;
  const policy = methodPolicies?.find((x) => x.method === request.method);
  if (!policy)
    return true;
  if (policy.modes?.headless) {
    if (typeof policy.modes.headless === "object" && policy.modes.headless.sameOrigin && targetOrigin !== window.location.origin)
      return true;
    return false;
  }
  return true;
}
function getReferrer() {
  const icon = (() => {
    const dark = document.querySelector('link[rel="icon"][media="(prefers-color-scheme: dark)"]')?.href;
    const light = document.querySelector('link[rel="icon"][media="(prefers-color-scheme: light)"]')?.href ?? document.querySelector('link[rel="icon"]')?.href;
    if (dark && light && dark !== light)
      return { dark, light };
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark)
      return dark;
    return light;
  })();
  return {
    icon,
    title: document.title
  };
}
function handleBlur(store) {
  store.setState((x) => ({
    ...x,
    requestQueue: x.requestQueue.map((x2) => ({
      account: x2.account,
      error: new UserRejectedRequestError(),
      request: x2.request,
      status: "error"
    }))
  }));
}
function handleResponse(store, response) {
  store.setState((x) => ({
    ...x,
    requestQueue: x.requestQueue.map((queued) => {
      if (queued.request.id !== response.id)
        return queued;
      if (response.error)
        return {
          account: queued.account,
          error: response.error,
          request: queued.request,
          status: "error"
        };
      return {
        account: queued.account,
        request: queued.request,
        result: response.result,
        status: "success"
      };
    })
  }));
}
function getDialogUrl(host) {
  const url2 = new URL(host);
  const parentParams = new URLSearchParams(window.location.search);
  const prefix = "porto.";
  for (const [key, value] of parentParams.entries()) {
    if (key.startsWith(prefix))
      url2.searchParams.set(key.slice(prefix.length), value);
  }
  return url2.toString();
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size(bytes),
      maxSize: size_
    });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad(bytes, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return bytes;
  if (bytes.length > size3)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size3,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size3);
  for (let i = 0; i < size3; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size3 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex4, size_) {
  if (size2(hex4) > size_)
    throw new SizeOverflowError2({
      givenSize: size2(hex4),
      maxSize: size_
    });
}
function assertStartOffset2(value, start) {
  if (typeof start === "number" && start > 0 && start > size2(value) - 1)
    throw new SliceOffsetOutOfBoundsError2({
      offset: start,
      position: "start",
      size: size2(value)
    });
}
function assertEndOffset2(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size2(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError2({
      offset: end,
      position: "end",
      size: size2(value)
    });
  }
}
function pad2(hex_, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return hex_;
  const hex4 = hex_.replace("0x", "");
  if (hex4.length > size3 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex4.length / 2),
      targetSize: size3,
      type: "Hex"
    });
  return `0x${hex4[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
}
function trim(value, options = {}) {
  const { dir = "left" } = options;
  let data = value.replace("0x", "");
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (data === "0")
    return "0x";
  if (dir === "right" && data.length % 2 === 1)
    return `0x${data}0`;
  return `0x${data}`;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Hex.js
var encoder = /* @__PURE__ */ new TextEncoder();
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function assert(value, options = {}) {
  const { strict = false } = options;
  if (!value)
    throw new InvalidHexTypeError(value);
  if (typeof value !== "string")
    throw new InvalidHexTypeError(value);
  if (strict) {
    if (!/^0x[0-9a-fA-F]*$/.test(value))
      throw new InvalidHexValueError(value);
  }
  if (!value.startsWith("0x"))
    throw new InvalidHexValueError(value);
}
function concat(...values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
function from5(value) {
  if (value instanceof Uint8Array)
    return fromBytes(value);
  if (Array.isArray(value))
    return fromBytes(new Uint8Array(value));
  return value;
}
function fromBoolean(value, options = {}) {
  const hex4 = `0x${Number(value)}`;
  if (typeof options.size === "number") {
    assertSize2(hex4, options.size);
    return padLeft(hex4, options.size);
  }
  return hex4;
}
function fromBytes(value, options = {}) {
  let string4 = "";
  for (let i = 0; i < value.length; i++)
    string4 += hexes[value[i]];
  const hex4 = `0x${string4}`;
  if (typeof options.size === "number") {
    assertSize2(hex4, options.size);
    return padRight(hex4, options.size);
  }
  return hex4;
}
function fromNumber(value, options = {}) {
  const { signed, size: size3 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size3) {
    if (signed)
      maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size3,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? BigInt.asUintN(size3 * 8, BigInt(value_)) : value_).toString(16);
  const hex4 = `0x${stringValue}`;
  if (size3)
    return padLeft(hex4, size3);
  return hex4;
}
function fromString(value, options = {}) {
  return fromBytes(encoder.encode(value), options);
}
function padLeft(value, size3) {
  return pad2(value, { dir: "left", size: size3 });
}
function padRight(value, size3) {
  return pad2(value, { dir: "right", size: size3 });
}
function slice(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset2(value, start);
  const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
  if (strict)
    assertEndOffset2(value_, start, end);
  return value_;
}
function size2(value) {
  return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
  return trim(value, { dir: "left" });
}
function toBigInt(hex4, options = {}) {
  const { signed } = options;
  if (options.size)
    assertSize2(hex4, options.size);
  const value = BigInt(hex4);
  if (!signed)
    return value;
  const size3 = (hex4.length - 2) / 2;
  const max_unsigned = (1n << BigInt(size3) * 8n) - 1n;
  const max_signed = max_unsigned >> 1n;
  if (value <= max_signed)
    return value;
  return value - max_unsigned - 1n;
}
function toNumber(hex4, options = {}) {
  const { signed, size: size3 } = options;
  if (!signed && !size3)
    return Number(hex4);
  return Number(toBigInt(hex4, options));
}
function validate(value, options = {}) {
  const { strict = false } = options;
  try {
    assert(value, { strict });
    return true;
  } catch {
    return false;
  }
}
var IntegerOutOfRangeError = class extends BaseError2 {
  constructor({ max, min, signed, size: size3, value }) {
    super(`Number \`${value}\` is not in safe${size3 ? ` ${size3 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var InvalidHexTypeError = class extends BaseError2 {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexTypeError"
    });
  }
};
var InvalidHexValueError = class extends BaseError2 {
  constructor(value) {
    super(`Value \`${value}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexValueError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError2 = class extends BaseError2 {
  constructor({ offset, position, size: size3 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError2 {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Bytes.js
var encoder2 = /* @__PURE__ */ new TextEncoder();
function assert2(value) {
  if (value instanceof Uint8Array)
    return;
  if (!value)
    throw new InvalidBytesTypeError(value);
  if (typeof value !== "object")
    throw new InvalidBytesTypeError(value);
  if (!("BYTES_PER_ELEMENT" in value))
    throw new InvalidBytesTypeError(value);
  if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
    throw new InvalidBytesTypeError(value);
}
function from6(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex(value);
  return fromArray(value);
}
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex(value, options = {}) {
  const { size: size3 } = options;
  let hex4 = value;
  if (size3) {
    assertSize2(value, size3);
    hex4 = padRight(value, size3);
  }
  let hexString = hex4.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError2(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft << 4 | nibbleRight;
  }
  return bytes;
}
function fromString2(value, options = {}) {
  const { size: size3 } = options;
  const bytes = encoder2.encode(value);
  if (typeof size3 === "number") {
    assertSize(bytes, size3);
    return padRight2(bytes, size3);
  }
  return bytes;
}
function padRight2(value, size3) {
  return pad(value, { dir: "right", size: size3 });
}
function size(value) {
  return value.length;
}
function slice2(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset(value, start);
  const value_ = value.slice(start, end);
  if (strict)
    assertEndOffset(value_, start, end);
  return value_;
}
function toBigInt2(bytes, options = {}) {
  const { size: size3 } = options;
  if (typeof size3 !== "undefined")
    assertSize(bytes, size3);
  const hex4 = fromBytes(bytes, options);
  return toBigInt(hex4, options);
}
function toHex(value, options = {}) {
  return fromBytes(value, options);
}
function validate2(value) {
  try {
    assert2(value);
    return true;
  } catch {
    return false;
  }
}
var InvalidBytesTypeError = class extends BaseError2 {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
};
var SizeOverflowError = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError = class extends BaseError2 {
  constructor({ offset, position, size: size3 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError2 {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/lru.js
var LruMap = class extends Map {
  constructor(size3) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size3;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: /* @__PURE__ */ new LruMap(8192)
};
var checksum = caches.checksum;

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Hash.js
function keccak256(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from6(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
function sha2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = sha256(from6(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/PublicKey.js
function assert3(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x, y } = publicKey;
  if (compressed === false || typeof x === "bigint" && typeof y === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x === "bigint" && typeof y === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function from7(value) {
  const publicKey = (() => {
    if (validate(value))
      return fromHex2(value);
    if (validate2(value))
      return fromBytes2(value);
    const { prefix, x, y } = value;
    if (typeof x === "bigint" && typeof y === "bigint")
      return { prefix: prefix ?? 4, x, y };
    return { prefix, x };
  })();
  assert3(publicKey);
  return publicKey;
}
function fromBytes2(publicKey) {
  return fromHex2(fromBytes(publicKey));
}
function fromHex2(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError({ publicKey });
  if (publicKey.length === 130) {
    const x2 = BigInt(slice(publicKey, 0, 32));
    const y = BigInt(slice(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x2,
      y
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice(publicKey, 0, 1));
    const x2 = BigInt(slice(publicKey, 1, 33));
    const y = BigInt(slice(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x2,
      y
    };
  }
  const prefix = Number(slice(publicKey, 0, 1));
  const x = BigInt(slice(publicKey, 1, 33));
  return {
    prefix,
    x
  };
}
function toHex2(publicKey, options = {}) {
  assert3(publicKey);
  const { prefix, x, y } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat(
    includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
    fromNumber(x, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y === "bigint" ? fromNumber(y, { size: 32 }) : "0x"
  );
  return publicKey_;
}
var InvalidError = class extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
};
var InvalidPrefixError = class extends BaseError2 {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
};
var InvalidCompressedPrefixError = class extends BaseError2 {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
};
var InvalidUncompressedPrefixError = class extends BaseError2 {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
};
var InvalidSerializedSizeError = class extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size2(from5(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert4(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError2({
      address: value,
      cause: new InvalidInputError2()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError2({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address2) {
  if (checksum.has(address2))
    return checksum.get(address2);
  assert4(address2, { strict: false });
  const hexAddress = address2.substring(2).toLowerCase();
  const hash4 = keccak256(fromString2(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash4[i >> 1] >> 4 >= 8 && characters[i]) {
      characters[i] = characters[i].toUpperCase();
    }
    if ((hash4[i >> 1] & 15) >= 8 && characters[i + 1]) {
      characters[i + 1] = characters[i + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address2, result);
  return result;
}
function from8(address2, options = {}) {
  const { checksum: checksumVal = false } = options;
  assert4(address2);
  if (checksumVal)
    return checksum2(address2);
  return address2;
}
function fromPublicKey(publicKey, options = {}) {
  const address2 = keccak256(`0x${toHex2(publicKey).slice(4)}`).substring(26);
  return from8(`0x${address2}`, options);
}
function isEqual(addressA, addressB) {
  assert4(addressA, { strict: false });
  assert4(addressB, { strict: false });
  return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate3(address2, options = {}) {
  const { strict = true } = options ?? {};
  try {
    assert4(address2, { strict });
    return true;
  } catch {
    return false;
  }
}
var InvalidAddressError2 = class extends BaseError2 {
  constructor({ address: address2, cause }) {
    super(`Address "${address2}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError2 = class extends BaseError2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError2 {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/mini/external.js
var external_exports = {};
__export(external_exports, {
  $brand: () => $brand,
  $input: () => $input,
  $output: () => $output,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodMiniAny: () => ZodMiniAny,
  ZodMiniArray: () => ZodMiniArray,
  ZodMiniBase64: () => ZodMiniBase64,
  ZodMiniBase64URL: () => ZodMiniBase64URL,
  ZodMiniBigInt: () => ZodMiniBigInt,
  ZodMiniBigIntFormat: () => ZodMiniBigIntFormat,
  ZodMiniBoolean: () => ZodMiniBoolean,
  ZodMiniCIDRv4: () => ZodMiniCIDRv4,
  ZodMiniCIDRv6: () => ZodMiniCIDRv6,
  ZodMiniCUID: () => ZodMiniCUID,
  ZodMiniCUID2: () => ZodMiniCUID2,
  ZodMiniCatch: () => ZodMiniCatch,
  ZodMiniCodec: () => ZodMiniCodec,
  ZodMiniCustom: () => ZodMiniCustom,
  ZodMiniCustomStringFormat: () => ZodMiniCustomStringFormat,
  ZodMiniDate: () => ZodMiniDate,
  ZodMiniDefault: () => ZodMiniDefault,
  ZodMiniDiscriminatedUnion: () => ZodMiniDiscriminatedUnion,
  ZodMiniE164: () => ZodMiniE164,
  ZodMiniEmail: () => ZodMiniEmail,
  ZodMiniEmoji: () => ZodMiniEmoji,
  ZodMiniEnum: () => ZodMiniEnum,
  ZodMiniExactOptional: () => ZodMiniExactOptional,
  ZodMiniFile: () => ZodMiniFile,
  ZodMiniFunction: () => ZodMiniFunction,
  ZodMiniGUID: () => ZodMiniGUID,
  ZodMiniIPv4: () => ZodMiniIPv4,
  ZodMiniIPv6: () => ZodMiniIPv6,
  ZodMiniISODate: () => ZodMiniISODate,
  ZodMiniISODateTime: () => ZodMiniISODateTime,
  ZodMiniISODuration: () => ZodMiniISODuration,
  ZodMiniISOTime: () => ZodMiniISOTime,
  ZodMiniIntersection: () => ZodMiniIntersection,
  ZodMiniJWT: () => ZodMiniJWT,
  ZodMiniKSUID: () => ZodMiniKSUID,
  ZodMiniLazy: () => ZodMiniLazy,
  ZodMiniLiteral: () => ZodMiniLiteral,
  ZodMiniMAC: () => ZodMiniMAC,
  ZodMiniMap: () => ZodMiniMap,
  ZodMiniNaN: () => ZodMiniNaN,
  ZodMiniNanoID: () => ZodMiniNanoID,
  ZodMiniNever: () => ZodMiniNever,
  ZodMiniNonOptional: () => ZodMiniNonOptional,
  ZodMiniNull: () => ZodMiniNull,
  ZodMiniNullable: () => ZodMiniNullable,
  ZodMiniNumber: () => ZodMiniNumber,
  ZodMiniNumberFormat: () => ZodMiniNumberFormat,
  ZodMiniObject: () => ZodMiniObject,
  ZodMiniOptional: () => ZodMiniOptional,
  ZodMiniPipe: () => ZodMiniPipe,
  ZodMiniPrefault: () => ZodMiniPrefault,
  ZodMiniPromise: () => ZodMiniPromise,
  ZodMiniReadonly: () => ZodMiniReadonly,
  ZodMiniRecord: () => ZodMiniRecord,
  ZodMiniSet: () => ZodMiniSet,
  ZodMiniString: () => ZodMiniString,
  ZodMiniStringFormat: () => ZodMiniStringFormat,
  ZodMiniSuccess: () => ZodMiniSuccess,
  ZodMiniSymbol: () => ZodMiniSymbol,
  ZodMiniTemplateLiteral: () => ZodMiniTemplateLiteral,
  ZodMiniTransform: () => ZodMiniTransform,
  ZodMiniTuple: () => ZodMiniTuple,
  ZodMiniType: () => ZodMiniType,
  ZodMiniULID: () => ZodMiniULID,
  ZodMiniURL: () => ZodMiniURL,
  ZodMiniUUID: () => ZodMiniUUID,
  ZodMiniUndefined: () => ZodMiniUndefined,
  ZodMiniUnion: () => ZodMiniUnion,
  ZodMiniUnknown: () => ZodMiniUnknown,
  ZodMiniVoid: () => ZodMiniVoid,
  ZodMiniXID: () => ZodMiniXID,
  ZodMiniXor: () => ZodMiniXor,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  catchall: () => catchall,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  clone: () => clone,
  codec: () => codec,
  coerce: () => coerce_exports,
  config: () => config,
  core: () => core_exports2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date2,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  endsWith: () => _endsWith,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  extend: () => extend2,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  function: () => _function,
  globalRegistry: () => globalRegistry,
  gt: () => _gt,
  gte: () => _gte,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  includes: () => _includes,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso_exports,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => _lazy2,
  length: () => _length,
  literal: () => literal,
  locales: () => locales_exports,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  mac: () => mac2,
  map: () => map,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  maximum: () => _lte,
  merge: () => merge2,
  meta: () => meta2,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  minimum: () => _gte,
  multipleOf: () => _multipleOf,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  negative: () => _negative,
  never: () => never,
  nonnegative: () => _nonnegative,
  nonoptional: () => nonoptional,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  omit: () => omit2,
  optional: () => optional,
  overwrite: () => _overwrite,
  parse: () => parse3,
  parseAsync: () => parseAsync,
  partial: () => partial2,
  partialRecord: () => partialRecord,
  pick: () => pick2,
  pipe: () => pipe,
  positive: () => _positive,
  prefault: () => prefault,
  prettifyError: () => prettifyError,
  promise: () => promise,
  property: () => _property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regex: () => _regex,
  regexes: () => regexes_exports,
  registry: () => registry,
  required: () => required2,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeExtend: () => safeExtend2,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  set: () => set2,
  size: () => _size,
  startsWith: () => _startsWith,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => _trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  uppercase: () => _uppercase,
  url: () => url,
  util: () => util_exports,
  uuid: () => uuid2,
  uuidv4: () => uuidv42,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: () => $ZodAny,
  $ZodArray: () => $ZodArray,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodBase64: () => $ZodBase64,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBoolean: () => $ZodBoolean,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCUID: () => $ZodCUID,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCatch: () => $ZodCatch,
  $ZodCheck: () => $ZodCheck,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCodec: () => $ZodCodec,
  $ZodCustom: () => $ZodCustom,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodDate: () => $ZodDate,
  $ZodDefault: () => $ZodDefault,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodE164: () => $ZodE164,
  $ZodEmail: () => $ZodEmail,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEnum: () => $ZodEnum,
  $ZodError: () => $ZodError,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodFile: () => $ZodFile,
  $ZodFunction: () => $ZodFunction,
  $ZodGUID: () => $ZodGUID,
  $ZodIPv4: () => $ZodIPv4,
  $ZodIPv6: () => $ZodIPv6,
  $ZodISODate: () => $ZodISODate,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISOTime: () => $ZodISOTime,
  $ZodIntersection: () => $ZodIntersection,
  $ZodJWT: () => $ZodJWT,
  $ZodKSUID: () => $ZodKSUID,
  $ZodLazy: () => $ZodLazy,
  $ZodLiteral: () => $ZodLiteral,
  $ZodMAC: () => $ZodMAC,
  $ZodMap: () => $ZodMap,
  $ZodNaN: () => $ZodNaN,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNever: () => $ZodNever,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNull: () => $ZodNull,
  $ZodNullable: () => $ZodNullable,
  $ZodNumber: () => $ZodNumber,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodObject: () => $ZodObject,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodOptional: () => $ZodOptional,
  $ZodPipe: () => $ZodPipe,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPromise: () => $ZodPromise,
  $ZodReadonly: () => $ZodReadonly,
  $ZodRealError: () => $ZodRealError,
  $ZodRecord: () => $ZodRecord,
  $ZodRegistry: () => $ZodRegistry,
  $ZodSet: () => $ZodSet,
  $ZodString: () => $ZodString,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodSuccess: () => $ZodSuccess,
  $ZodSymbol: () => $ZodSymbol,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodTransform: () => $ZodTransform,
  $ZodTuple: () => $ZodTuple,
  $ZodType: () => $ZodType,
  $ZodULID: () => $ZodULID,
  $ZodURL: () => $ZodURL,
  $ZodUUID: () => $ZodUUID,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUnion: () => $ZodUnion,
  $ZodUnknown: () => $ZodUnknown,
  $ZodVoid: () => $ZodVoid,
  $ZodXID: () => $ZodXID,
  $ZodXor: () => $ZodXor,
  $brand: () => $brand,
  $constructor: () => $constructor,
  $input: () => $input,
  $output: () => $output,
  Doc: () => Doc,
  JSONSchema: () => json_schema_exports,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  _any: () => _any,
  _array: () => _array,
  _base64: () => _base64,
  _base64url: () => _base64url,
  _bigint: () => _bigint,
  _boolean: () => _boolean,
  _catch: () => _catch,
  _check: () => _check,
  _cidrv4: () => _cidrv4,
  _cidrv6: () => _cidrv6,
  _coercedBigint: () => _coercedBigint,
  _coercedBoolean: () => _coercedBoolean,
  _coercedDate: () => _coercedDate,
  _coercedNumber: () => _coercedNumber,
  _coercedString: () => _coercedString,
  _cuid: () => _cuid,
  _cuid2: () => _cuid2,
  _custom: () => _custom,
  _date: () => _date,
  _decode: () => _decode,
  _decodeAsync: () => _decodeAsync,
  _default: () => _default,
  _discriminatedUnion: () => _discriminatedUnion,
  _e164: () => _e164,
  _email: () => _email,
  _emoji: () => _emoji2,
  _encode: () => _encode,
  _encodeAsync: () => _encodeAsync,
  _endsWith: () => _endsWith,
  _enum: () => _enum,
  _file: () => _file,
  _float32: () => _float32,
  _float64: () => _float64,
  _gt: () => _gt,
  _gte: () => _gte,
  _guid: () => _guid,
  _includes: () => _includes,
  _int: () => _int,
  _int32: () => _int32,
  _int64: () => _int64,
  _intersection: () => _intersection,
  _ipv4: () => _ipv4,
  _ipv6: () => _ipv6,
  _isoDate: () => _isoDate,
  _isoDateTime: () => _isoDateTime,
  _isoDuration: () => _isoDuration,
  _isoTime: () => _isoTime,
  _jwt: () => _jwt,
  _ksuid: () => _ksuid,
  _lazy: () => _lazy,
  _length: () => _length,
  _literal: () => _literal,
  _lowercase: () => _lowercase,
  _lt: () => _lt,
  _lte: () => _lte,
  _mac: () => _mac,
  _map: () => _map,
  _max: () => _lte,
  _maxLength: () => _maxLength,
  _maxSize: () => _maxSize,
  _mime: () => _mime,
  _min: () => _gte,
  _minLength: () => _minLength,
  _minSize: () => _minSize,
  _multipleOf: () => _multipleOf,
  _nan: () => _nan,
  _nanoid: () => _nanoid,
  _nativeEnum: () => _nativeEnum,
  _negative: () => _negative,
  _never: () => _never,
  _nonnegative: () => _nonnegative,
  _nonoptional: () => _nonoptional,
  _nonpositive: () => _nonpositive,
  _normalize: () => _normalize,
  _null: () => _null2,
  _nullable: () => _nullable,
  _number: () => _number,
  _optional: () => _optional,
  _overwrite: () => _overwrite,
  _parse: () => _parse,
  _parseAsync: () => _parseAsync,
  _pipe: () => _pipe,
  _positive: () => _positive,
  _promise: () => _promise,
  _property: () => _property,
  _readonly: () => _readonly,
  _record: () => _record,
  _refine: () => _refine,
  _regex: () => _regex,
  _safeDecode: () => _safeDecode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeEncode: () => _safeEncode,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeParse: () => _safeParse,
  _safeParseAsync: () => _safeParseAsync,
  _set: () => _set,
  _size: () => _size,
  _slugify: () => _slugify,
  _startsWith: () => _startsWith,
  _string: () => _string,
  _stringFormat: () => _stringFormat,
  _stringbool: () => _stringbool,
  _success: () => _success,
  _superRefine: () => _superRefine,
  _symbol: () => _symbol,
  _templateLiteral: () => _templateLiteral,
  _toLowerCase: () => _toLowerCase,
  _toUpperCase: () => _toUpperCase,
  _transform: () => _transform,
  _trim: () => _trim,
  _tuple: () => _tuple,
  _uint32: () => _uint32,
  _uint64: () => _uint64,
  _ulid: () => _ulid,
  _undefined: () => _undefined2,
  _union: () => _union,
  _unknown: () => _unknown,
  _uppercase: () => _uppercase,
  _url: () => _url,
  _uuid: () => _uuid,
  _uuidv4: () => _uuidv4,
  _uuidv6: () => _uuidv6,
  _uuidv7: () => _uuidv7,
  _void: () => _void,
  _xid: () => _xid,
  _xor: () => _xor,
  clone: () => clone,
  config: () => config,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  describe: () => describe,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  extractDefs: () => extractDefs,
  finalize: () => finalize,
  flattenError: () => flattenError,
  formatError: () => formatError,
  globalConfig: () => globalConfig,
  globalRegistry: () => globalRegistry,
  initializeContext: () => initializeContext,
  isValidBase64: () => isValidBase64,
  isValidBase64URL: () => isValidBase64URL,
  isValidJWT: () => isValidJWT,
  locales: () => locales_exports,
  meta: () => meta,
  parse: () => parse3,
  parseAsync: () => parseAsync,
  prettifyError: () => prettifyError,
  process: () => process,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  toDotPath: () => toDotPath,
  toJSONSchema: () => toJSONSchema,
  treeifyError: () => treeifyError,
  util: () => util_exports,
  version: () => version2
});

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer2, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer2(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a2;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = Symbol("zod_brand");
var $ZodAsyncError = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert5,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert5(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set3 = false;
  return {
    get value() {
      if (!set3) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    const match = stepString.match(/\d?e-(\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return clone(a, def);
}
function partial(Class2, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class2, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a2;
    (_a2 = iss).path ?? (_a2.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base643) {
  const binaryString = atob(base643);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  const base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex4) {
  const cleanHex = hex4.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error48, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error48.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error48, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error49) => {
    for (const issue2 of error49.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error48);
  return fieldErrors;
}
function treeifyError(error48, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error49, path = []) => {
    var _a2, _b;
    for (const issue2 of error49.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a2 = curr.properties)[el] ?? (_a2[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error48);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error48) {
  const lines = [];
  const issues = [...error48.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`\u2716 ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
  }
  return lines.join("\n");
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var parse3 = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var encode = /* @__PURE__ */ _encode($ZodRealError);
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var decode = /* @__PURE__ */ _decode($ZodRealError);
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
var cuid = /^[cC][^\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version3) => {
  if (!version3)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version3}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time3 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a2;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a2 = inst._zod).onattach ?? (_a2.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a2;
    (_a2 = inst2._zod.bag).multipleOf ?? (_a2.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size3 = input.size;
    if (size3 <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size3 = input.size;
    if (size3 >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size3 = input.size;
    if (size3 === def.size)
      return;
    const tooBig = size3 > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a2, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a2 = inst._zod).check ?? (_a2.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join("\n"));
  }
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/versions.js
var version2 = {
  major: 4,
  minor: 3,
  patch: 6
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a2;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version2;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url2 = new URL(trimmed);
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url2.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: def.hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.normalize) {
        payload.value = url2.href;
      } else {
        payload.value = trimmed;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter));
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `mac`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error();
      const [address2, prefix] = parts;
      if (!prefix)
        throw new Error();
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address2}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {
      }
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = /* @__PURE__ */ new Set([void 0]);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === void 0) {
    if (key in input) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall2 = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalOut);
      }
    }
    if (!catchall2) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {};`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k = esc(key);
      const schema = shape[key];
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`);
      if (isOptionalOut) {
        doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall2 = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall2)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def);
  def.inclusive = false;
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        results.push(result);
      }
    }
    if (!async)
      return handleExclusiveUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleExclusiveUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!propValues[k])
          propValues[k] = /* @__PURE__ */ new Set();
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map2 = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map2.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map2.set(v, o);
      }
    }
    return map2;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback) {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
    const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
    if (!def.rest) {
      const tooBig = input.length > items.length;
      const tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall) {
        payload.issues.push({
          ...tooBig ? { code: "too_big", maximum: items.length, inclusive: true } : { code: "too_small", minimum: items.length },
          input,
          inst,
          origin: "array"
        });
        return payload;
      }
    }
    let i = -1;
    for (const item of items) {
      i++;
      if (i >= input.length) {
        if (i >= optStart)
          continue;
      }
      const result = item._zod.run({
        value: input[i],
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
      } else {
        handleTupleResult(result, payload, i);
      }
    }
    if (def.rest) {
      const rest = input.slice(items.length);
      for (const el of rest) {
        i++;
        const result = def.rest._zod.run({
          value: el,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      const recordKeys = /* @__PURE__ */ new Set();
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[key] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[key] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Map();
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Set();
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  if (def.values.length === 0) {
    throw new Error("Cannot create literal schema with no valid values");
  }
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === void 0) {
    return { issues: [], value: void 0 };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError("ZodSuccess");
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handleCodecAResult(left2, def, ctx));
      }
      return handleCodecAResult(left, def, ctx);
    } else {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handleCodecAResult(right2, def, ctx));
      }
      return handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (typeof part === "object" && part !== null) {
      if (!part._zod.pattern) {
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(`${part}`));
    } else {
      throw new Error(`Invalid template literal part: ${part}`);
    }
  }
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "string",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: def.format ?? "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
  $ZodType.init(inst, def);
  inst._def = def;
  inst._zod.def = def;
  inst.implement = (func) => {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    return function(...args) {
      const parsedArgs = inst._def.input ? parse3(inst._def.input, args) : args;
      const result = Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return parse3(inst._def.output, result);
      }
      return result;
    };
  };
  inst.implementAsync = (func) => {
    if (typeof func !== "function") {
      throw new Error("implementAsync() must be called with a function");
    }
    return async function(...args) {
      const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
      const result = await Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return await parseAsync(inst._def.output, result);
      }
      return result;
    };
  };
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "function") {
      payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      });
      return payload;
    }
    const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    if (hasPromiseOutput) {
      payload.value = inst.implementAsync(payload.value);
    } else {
      payload.value = inst.implement(payload.value);
    }
    return payload;
  };
  inst.input = (...args) => {
    const F = inst.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: inst._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: inst._def.output
    });
  };
  inst.output = (output) => {
    const F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  };
  return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => def.getter());
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: () => ar_default,
  az: () => az_default,
  be: () => be_default,
  bg: () => bg_default,
  ca: () => ca_default,
  cs: () => cs_default,
  da: () => da_default,
  de: () => de_default,
  en: () => en_default,
  eo: () => eo_default,
  es: () => es_default,
  fa: () => fa_default,
  fi: () => fi_default,
  fr: () => fr_default,
  frCA: () => fr_CA_default,
  he: () => he_default,
  hu: () => hu_default,
  hy: () => hy_default,
  id: () => id_default,
  is: () => is_default,
  it: () => it_default,
  ja: () => ja_default,
  ka: () => ka_default,
  kh: () => kh_default,
  km: () => km_default,
  ko: () => ko_default,
  lt: () => lt_default,
  mk: () => mk_default,
  ms: () => ms_default,
  nl: () => nl_default,
  no: () => no_default,
  ota: () => ota_default,
  pl: () => pl_default,
  ps: () => ps_default,
  pt: () => pt_default,
  ru: () => ru_default,
  sl: () => sl_default,
  sv: () => sv_default,
  ta: () => ta_default,
  th: () => th_default,
  tr: () => tr_default,
  ua: () => ua_default,
  uk: () => uk_default,
  ur: () => ur_default,
  uz: () => uz_default,
  vi: () => vi_default,
  yo: () => yo_default,
  zhCN: () => zh_CN_default,
  zhTW: () => zh_TW_default
});

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ar.js
var error = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
        }
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}`;
        return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/az.js
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}`;
        }
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
        if (_issue.format === "ends_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir`;
        if (_issue.format === "includes")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r`;
        if (_issue.format === "regex")
          return `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
        return `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return `Yanl\u0131\u015F d\u0259y\u0259r`;
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u043B\u0456\u043A",
    array: "\u043C\u0430\u0441\u0456\u045E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
        }
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
      default:
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434`;
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/bg.js
var error4 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u043E\u0434",
    email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    json_string: "JSON \u043D\u0438\u0437",
    e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
        }
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
        let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        if (_issue.format === "emoji")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "datetime")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "date")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        if (_issue.format === "time")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "duration")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434`;
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ca.js
var error5 = () => {
  const Sizable = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
        }
        return `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a m\xE0xim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format inv\xE0lid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}`;
        return `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element inv\xE0lid a ${issue2.origin}`;
      default:
        return `Entrada inv\xE0lida`;
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/cs.js
var error6 = () => {
  const Sizable = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u010D\xEDslo",
    string: "\u0159et\u011Bzec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}`;
        }
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}`;
        return `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${issue2.origin}`;
      default:
        return `Neplatn\xFD vstup`;
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/da.js
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkesl\xE6t",
    date: "ISO-dato",
    time: "ISO-klokkesl\xE6t",
    duration: "ISO-varighed",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "s\xE6t",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
        }
        return `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8gle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xE6rdi i ${issue2.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/de.js
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
        }
        return `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ung\xFCltiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${issue2.origin}`;
      default:
        return `Ung\xFCltige Eingabe`;
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/en.js
var error9 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error9()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/eo.js
var error10 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emo\u011Dio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-da\u016Dro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}`;
        }
        return `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida \u015Dlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function eo_default() {
  return {
    localeError: error10()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/es.js
var error11 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "n\xFAmero",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "n\xFAmero grande",
    symbol: "s\xEDmbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "funci\xF3n",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeraci\xF3n",
    union: "uni\xF3n",
    literal: "literal",
    promise: "promesa",
    void: "vac\xEDo",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
        }
        return `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inv\xE1lida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}`;
        return `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Entrada inv\xE1lida`;
    }
  };
};
function es_default() {
  return {
    localeError: error11()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/fa.js
var error12 = () => {
  const Sizable = {
    string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0622\u0631\u0627\u06CC\u0647"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
        }
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
        }
        return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
        }
        if (_issue.format === "ends_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
        }
        if (_issue.format === "includes") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F`;
        }
        if (_issue.format === "regex") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
      case "invalid_union":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
      default:
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
    }
  };
};
function fa_default() {
  return {
    localeError: error12()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/fi.js
var error13 = () => {
  const Sizable = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
        }
        return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen sy\xF6te`;
    }
  };
};
function fi_default() {
  return {
    localeError: error13()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/fr.js
var error14 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u`;
        }
        return `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${issue2.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}`;
        return `Trop grand : ${issue2.origin ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : ${issue2.origin} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : ${issue2.origin} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_default() {
  return {
    localeError: error14()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/fr-CA.js
var error15 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}`;
        }
        return `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u2264" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u2265" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error15()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/he.js
var error16 = () => {
  const TypeNames = {
    string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
    number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
    boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
    array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
    object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
    null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
    undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
    symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
    function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
    map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
    set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
    file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
    value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
  };
  const Sizable = {
    string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
    // no unit
  };
  const typeEntry = (t) => t ? TypeNames[t] : void 0;
  const typeLabel = (t) => {
    const e = typeEntry(t);
    if (e)
      return e.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => `\u05D4${typeLabel(t)}`;
  const verbFor = (t) => {
    const e = typeEntry(t);
    const gender = e?.gender ?? "m";
    return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
    url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
    time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
    duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
    ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
    ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
    cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
    cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
    base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
    base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
    e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
        }
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
        }
        const stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${restValues} \u05D0\u05D5 ${lastValue}`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
          }
          const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
        return `${noun} \u05DC\u05D0 ${adjective}`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key": {
        return `\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8`;
      }
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${place}`;
      }
      default:
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
    }
  };
};
function he_default() {
  return {
    localeError: error16()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/hu.js
var error17 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "sz\xE1m",
    array: "t\xF6mb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}`;
        }
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
        if (_issue.format === "ends_with")
          return `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
        if (_issue.format === "includes")
          return `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie`;
        return `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
      default:
        return `\xC9rv\xE9nytelen bemenet`;
    }
  };
};
function hu_default() {
  return {
    localeError: error17()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
}
var error18 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0576\u0577\u0561\u0576",
        many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    file: {
      unit: {
        one: "\u0562\u0561\u0575\u0569",
        many: "\u0562\u0561\u0575\u0569\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    array: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    set: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0574\u0578\u0582\u057F\u0584",
    email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
    url: "URL",
    emoji: "\u0567\u0574\u0578\u057B\u056B",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
    date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
    time: "ISO \u056A\u0561\u0574",
    duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
    ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
    cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    json_string: "JSON \u057F\u0578\u0572",
    e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
    jwt: "JWT",
    template_literal: "\u0574\u0578\u0582\u057F\u0584"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0569\u056B\u057E",
    array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
        }
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}`;
        return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E`;
        if (_issue.format === "ends_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E`;
        if (_issue.format === "includes")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
        return `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
      case "unrecognized_keys":
        return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      case "invalid_union":
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      case "invalid_element":
        return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      default:
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574`;
    }
  };
};
function hy_default() {
  return {
    localeError: error18()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/id.js
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function id_default() {
  return {
    localeError: error19()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/is.js
var error20 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "a\xF0 hafa" },
    file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
    array: { unit: "hluti", verb: "a\xF0 hafa" },
    set: { unit: "hluti", verb: "a\xF0 hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefsl\xF3\xF0",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og t\xEDmi",
    date: "ISO dagsetning",
    time: "ISO t\xEDmi",
    duration: "ISO t\xEDmalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 t\xF6lugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}`;
        }
        return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}`;
        return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
        return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}`;
        return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xED ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xED ${issue2.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function is_default() {
  return {
    localeError: error20()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/it.js
var error21 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
        }
        return `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function it_default() {
  return {
    localeError: error21()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ja.js
var error22 = () => {
  const Sizable = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5024",
    array: "\u914D\u5217"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
        }
        return `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
        return `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "ends_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "includes")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "regex")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return `\u7121\u52B9\u306A\u5165\u529B`;
    }
  };
};
function ja_default() {
  return {
    localeError: error22()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ka.js
var error23 = () => {
  const Sizable = {
    string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    url: "URL",
    emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
    date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
    time: "\u10D3\u10E0\u10DD",
    duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
    ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    json_string: "JSON \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    jwt: "JWT",
    template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
    string: "\u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
    function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
    array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
        }
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7`;
        }
        if (_issue.format === "ends_with")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7`;
        if (_issue.format === "includes")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1`;
        if (_issue.format === "regex")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
      case "unrecognized_keys":
        return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
      default:
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0`;
    }
  };
};
function ka_default() {
  return {
    localeError: error23()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/km.js
var error24 = () => {
  const Sizable = {
    string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u179B\u17C1\u1781",
    array: "\u17A2\u17B6\u179A\u17C1 (Array)",
    null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
        }
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}`;
        return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
        return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}`;
        return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      case "invalid_union":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      default:
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
    }
  };
};
function km_default() {
  return {
    localeError: error24()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ko.js
var error25 = () => {
  const Sizable = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
        }
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        const adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC";
        const suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing)
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC";
        const suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing) {
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
        }
        if (_issue.format === "ends_with")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "includes")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "regex")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
      case "invalid_union":
        return `\uC798\uBABB\uB41C \uC785\uB825`;
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
      default:
        return `\uC798\uBABB\uB41C \uC785\uB825`;
    }
  };
};
function ko_default() {
  return {
    localeError: error25()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number5) {
  const abs = Math.abs(number5);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
var error26 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simboli\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "bait\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "\u012Fvestis",
    email: "el. pa\u0161to adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukm\u0117",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 u\u017Ekoduota eilut\u0117",
    base64url: "base64url u\u017Ekoduota eilut\u0117",
    json_string: "JSON eilut\u0117",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "\u012Fvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skai\u010Dius",
    bigint: "sveikasis skai\u010Dius",
    string: "eilut\u0117",
    boolean: "login\u0117 reik\u0161m\u0117",
    undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulin\u0117 reik\u0161m\u0117"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}`;
        }
        return `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}`;
        return `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Eilut\u0117 privalo atitikti ${_issue.pattern}`;
        return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error26()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/mk.js
var error27 = () => {
  const Sizable = {
    string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0431\u0440\u043E\u0458",
    array: "\u043D\u0438\u0437\u0430"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
        }
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
      default:
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441`;
    }
  };
};
function mk_default() {
  return {
    localeError: error27()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ms.js
var error28 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function ms_default() {
  return {
    localeError: error28()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/nl.js
var error29 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
        }
        return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
        return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function nl_default() {
  return {
    localeError: error29()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/no.js
var error30 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
        }
        return `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function no_default() {
  return {
    localeError: error30()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ota.js
var error31 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
        return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.`;
        }
        return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.`;
        if (_issue.format === "ends_with")
          return `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.`;
        if (_issue.format === "regex")
          return `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.`;
        return `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return `K\u0131ymet tan\u0131namad\u0131.`;
    }
  };
};
function ota_default() {
  return {
    localeError: error31()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ps.js
var error32 = () => {
  const Sizable = {
    string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
    array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u064A",
    email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
    date: "\u0646\u06D0\u067C\u0647",
    time: "\u0648\u062E\u062A",
    duration: "\u0645\u0648\u062F\u0647",
    ipv4: "\u062F IPv4 \u067E\u062A\u0647",
    ipv6: "\u062F IPv6 \u067E\u062A\u0647",
    cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
    cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
    base64: "base64-encoded \u0645\u062A\u0646",
    base64url: "base64url-encoded \u0645\u062A\u0646",
    json_string: "JSON \u0645\u062A\u0646",
    e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u064A"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0627\u0631\u06D0"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
        }
        return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC`;
        }
        return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
        }
        if (_issue.format === "ends_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
        }
        if (_issue.format === "includes") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A`;
        }
        if (_issue.format === "regex") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
      }
      case "not_multiple_of":
        return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
      case "unrecognized_keys":
        return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      case "invalid_union":
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
      case "invalid_element":
        return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      default:
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
    }
  };
};
function ps_default() {
  return {
    localeError: error32()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/pl.js
var error33 = () => {
  const Sizable = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
        }
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}`;
        return `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
      default:
        return `Nieprawid\u0142owe dane wej\u015Bciowe`;
    }
  };
};
function pl_default() {
  return {
    localeError: error33()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/pt.js
var error34 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmero",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}`;
        }
        return `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inv\xE1lido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${issue2.origin}`;
      default:
        return `Campo inv\xE1lido`;
    }
  };
};
function pt_default() {
  return {
    localeError: error34()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error35 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435`;
    }
  };
};
function ru_default() {
  return {
    localeError: error35()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/sl.js
var error36 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0161tevilo",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}`;
        }
        return `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se za\u010Deti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se kon\u010Dati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error36()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/sv.js
var error37 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${issue2.expected}, fick ${received}`;
        }
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: f\xF6rv\xE4ntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: f\xF6rv\xE4ntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r stor(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `F\xF6r stor(t): f\xF6rv\xE4ntat ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig str\xE4ng: m\xE5ste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${issue2.origin ?? "v\xE4rdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function sv_default() {
  return {
    localeError: error37()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ta.js
var error38 = () => {
  const Sizable = {
    string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0B8E\u0BA3\u0BCD",
    array: "\u0B85\u0BA3\u0BBF",
    null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${issue2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
        }
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${joinValues(issue2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "ends_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "includes")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "regex")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_issue.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${issue2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1`;
    }
  };
};
function ta_default() {
  return {
    localeError: error38()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/th.js
var error39 = () => {
  const Sizable = {
    string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
    array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
    null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${issue2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
        }
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
        return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_issue.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
        if (_issue.format === "regex")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_issue.pattern}`;
        return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${issue2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      default:
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07`;
    }
  };
};
function th_default() {
  return {
    localeError: error39()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/tr.js
var error40 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmal\u0131" },
    file: { unit: "bayt", verb: "olmal\u0131" },
    array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `Ge\xE7ersiz de\u011Fer: beklenen ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ge\xE7ersiz de\u011Fer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xF6\u011Fe"}`;
        return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ge\xE7ersiz metin: "${_issue.prefix}" ile ba\u015Flamal\u0131`;
        if (_issue.format === "ends_with")
          return `Ge\xE7ersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Ge\xE7ersiz metin: "${_issue.includes}" i\xE7ermeli`;
        if (_issue.format === "regex")
          return `Ge\xE7ersiz metin: ${_issue.pattern} desenine uymal\u0131`;
        return `Ge\xE7ersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${issue2.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return `Ge\xE7ersiz de\u011Fer`;
    }
  };
};
function tr_default() {
  return {
    localeError: error40()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/uk.js
var error41 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${issue2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} \u0431\u0443\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0456" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456`;
    }
  };
};
function uk_default() {
  return {
    localeError: error41()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/ur.js
var error42 = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0646\u0645\u0628\u0631",
    array: "\u0622\u0631\u06D2",
    null: "\u0646\u0644"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${issue2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
        }
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${stringifyPrimitive(issue2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${joinValues(issue2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${adj}${issue2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u06D2 ${adj}${issue2.minimum.toString()} ${sizing.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        }
        return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u0627 ${adj}${issue2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        }
        if (_issue.format === "ends_with")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "includes")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "regex")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_issue.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        return `\u063A\u0644\u0637 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${issue2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${issue2.keys.length > 1 ? "\u0632" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679`;
    }
  };
};
function ur_default() {
  return {
    localeError: error42()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/uz.js
var error43 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
    file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
    array: { unit: "element", verb: "bo\u2018lishi kerak" },
    set: { unit: "element", verb: "bo\u2018lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
        }
        return `Noto\u2018g\u2018ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Noto\u2018g\u2018ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
        return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
        return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
        if (_issue.format === "ends_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.suffix}" bilan tugashi kerak`;
        if (_issue.format === "includes")
          return `Noto\u2018g\u2018ri satr: "${_issue.includes}" ni o\u2018z ichiga olishi kerak`;
        if (_issue.format === "regex")
          return `Noto\u2018g\u2018ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
        return `Noto\u2018g\u2018ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto\u2018g\u2018ri raqam: ${issue2.divisor} ning karralisi bo\u2018lishi kerak`;
      case "unrecognized_keys":
        return `Noma\u2019lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto\u2018g\u2018ri`;
      case "invalid_union":
        return "Noto\u2018g\u2018ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto\u2018g\u2018ri qiymat`;
      default:
        return `Noto\u2018g\u2018ri kirish`;
    }
  };
};
function uz_default() {
  return {
    localeError: error43()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/vi.js
var error44 = () => {
  const Sizable = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "s\u1ED1",
    array: "m\u1EA3ng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${issue2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
        }
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${stringifyPrimitive(issue2.values[0])}`;
        return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "ph\u1EA7n t\u1EED"}`;
        return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      default:
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7`;
    }
  };
};
function vi_default() {
  return {
    localeError: error44()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/zh-CN.js
var error45 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5B57",
    array: "\u6570\u7EC4",
    null: "\u7A7A\u503C(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${issue2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
        }
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${stringifyPrimitive(issue2.values[0])}`;
        return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u4E2A\u5143\u7D20"}`;
        return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.prefix}" \u5F00\u5934`;
        if (_issue.format === "ends_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.suffix}" \u7ED3\u5C3E`;
        if (_issue.format === "includes")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_issue.pattern}`;
        return `\u65E0\u6548${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${issue2.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return `\u65E0\u6548\u8F93\u5165`;
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error45()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/zh-TW.js
var error46 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${issue2.expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
        }
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${stringifyPrimitive(issue2.values[0])}`;
        return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u500B\u5143\u7D20"}`;
        return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.prefix}" \u958B\u982D`;
        }
        if (_issue.format === "ends_with")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.suffix}" \u7D50\u5C3E`;
        if (_issue.format === "includes")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_issue.pattern}`;
        return `\u7121\u6548\u7684 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${issue2.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${issue2.keys.length > 1 ? "\u5011" : ""}\uFF1A${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return `\u7121\u6548\u7684\u8F38\u5165\u503C`;
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error46()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/locales/yo.js
var error47 = () => {
  const Sizable = {
    string: { unit: "\xE0mi", verb: "n\xED" },
    file: { unit: "bytes", verb: "n\xED" },
    array: { unit: "nkan", verb: "n\xED" },
    set: { unit: "nkan", verb: "n\xED" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\xE0k\xF3k\xF2 ISO",
    date: "\u1ECDj\u1ECD\u0301 ISO",
    time: "\xE0k\xF3k\xF2 ISO",
    duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
    ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
    ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
    cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
    cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
    base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
    base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
    json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
    e164: "n\u1ECD\u0301mb\xE0 E.164",
    jwt: "JWT",
    template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\u1ECD\u0301mb\xE0",
    array: "akop\u1ECD"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${issue2.expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
        }
        return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
        return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
        return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_issue.pattern}`;
        return `A\u1E63\xEC\u1E63e: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
};
function yo_default() {
  return {
    localeError: error47()
  };
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/registries.js
var _a;
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta4 = _meta[0];
    this._map.set(schema, meta4);
    if (meta4 && typeof meta4 === "object" && "id" in meta4) {
      this._idmap.set(meta4.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta4 = this._map.get(schema);
    if (meta4 && typeof meta4 === "object" && "id" in meta4) {
      this._idmap.delete(meta4.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _positive(params) {
  return /* @__PURE__ */ _gt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _negative(params) {
  return /* @__PURE__ */ _lt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
  return /* @__PURE__ */ _lte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
  return /* @__PURE__ */ _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _size(size3, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size: size3
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
// @__NO_SIDE_EFFECTS__
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec2 = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: ((input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec2,
          continue: false
        });
        return {};
      }
    }),
    reverseTransform: ((input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    }),
    error: params.error
  });
  return codec2;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta4 = ctx.metadataRegistry.get(schema);
  if (meta4)
    Object.assign(result.schema, meta4);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  json2.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minLength = minimum;
  if (typeof maximum === "number")
    json2.maxLength = maximum;
  if (format) {
    json2.format = formatMap[format] ?? format;
    if (json2.format === "")
      delete json2.format;
    if (format === "time") {
      delete json2.format;
    }
  }
  if (contentEncoding)
    json2.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json2.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json2.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json2.type = "integer";
  else
    json2.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.minimum = exclusiveMinimum;
      json2.exclusiveMinimum = true;
    } else {
      json2.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json2.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json2.minimum;
      else
        delete json2.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.maximum = exclusiveMaximum;
      json2.exclusiveMaximum = true;
    } else {
      json2.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json2.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json2.maximum;
      else
        delete json2.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json2.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
};
var nullProcessor = (_schema, ctx, json2, _params) => {
  if (ctx.target === "openapi-3.0") {
    json2.type = "string";
    json2.nullable = true;
    json2.enum = [null];
  } else {
    json2.type = "null";
  }
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
};
var voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
};
var neverProcessor = (_schema, _ctx, json2, _params) => {
  json2.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
};
var enumProcessor = (schema, _ctx, json2, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json2.type = "number";
  if (values.every((v) => typeof v === "string"))
    json2.type = "string";
  json2.enum = values;
};
var literalProcessor = (schema, ctx, json2, _params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else {
      }
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json2.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.enum = [val];
    } else {
      json2.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json2.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json2.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json2.type = "boolean";
    if (vals.every((v) => v === null))
      json2.type = "null";
    json2.enum = vals;
  }
};
var nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
};
var templateLiteralProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const file2 = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== void 0)
    file2.minLength = minimum;
  if (maximum !== void 0)
    file2.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file2.contentMediaType = mime[0];
      Object.assign(_json, file2);
    } else {
      Object.assign(_json, file2);
      _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
    }
  } else {
    Object.assign(_json, file2);
  }
};
var successProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
};
var setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
  json2.type = "array";
  json2.items = process(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  json2.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json2.properties[key] = process(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === void 0;
    } else {
      return v.optout === void 0;
    }
  }));
  if (requiredKeys.size > 0) {
    json2.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json2.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json2.additionalProperties = false;
  } else if (def.catchall) {
    json2.additionalProperties = process(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json2.oneOf = options;
  } else {
    json2.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const a = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json2.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json2.prefixItems = prefixItems;
    if (rest) {
      json2.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json2.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json2.items.anyOf.push(rest);
    }
    json2.minItems = prefixItems.length;
    if (!rest) {
      json2.maxItems = prefixItems.length;
    }
  } else {
    json2.items = prefixItems;
    if (rest) {
      json2.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json2.patternProperties = {};
    for (const pattern of patterns) {
      json2.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json2.propertyNames = process(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json2.additionalProperties = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json2.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const inner = process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json2.nullable = true;
  } else {
    json2.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json2.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      process(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/json-schema-generator.js
var JSONSchemaGenerator = class {
  /** @deprecated Access via ctx instead */
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  /** @deprecated Access via ctx instead */
  get target() {
    return this.ctx.target;
  }
  /** @deprecated Access via ctx instead */
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  /** @deprecated Access via ctx instead */
  get override() {
    return this.ctx.override;
  }
  /** @deprecated Access via ctx instead */
  get io() {
    return this.ctx.io;
  }
  /** @deprecated Access via ctx instead */
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  /** @deprecated Access via ctx instead */
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  /**
   * Process a schema to prepare it for JSON Schema generation.
   * This must be called before emit().
   */
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process(schema, this.ctx, _params);
  }
  /**
   * Emit the final JSON Schema after processing.
   * Must call process() first.
   */
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
};

// node_modules/@wagmi/connectors/node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};

// node_modules/@wagmi/connectors/node_modules/zod/v4/mini/schemas.js
var ZodMiniType = /* @__PURE__ */ $constructor("ZodMiniType", (inst, def) => {
  if (!inst._zod)
    throw new Error("Uninitialized schema in ZodMiniType.");
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
  inst.check = (...checks) => {
    return inst.clone({
      ...def,
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }, { parent: true });
  };
  inst.with = inst.check;
  inst.clone = (_def, params) => clone(inst, _def, params);
  inst.brand = () => inst;
  inst.register = ((reg, meta4) => {
    reg.add(inst, meta4);
    return inst;
  });
  inst.apply = (fn) => fn(inst);
});
var ZodMiniString = /* @__PURE__ */ $constructor("ZodMiniString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function string2(params) {
  return _string(ZodMiniString, params);
}
var ZodMiniStringFormat = /* @__PURE__ */ $constructor("ZodMiniStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  ZodMiniString.init(inst, def);
});
var ZodMiniEmail = /* @__PURE__ */ $constructor("ZodMiniEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function email2(params) {
  return _email(ZodMiniEmail, params);
}
var ZodMiniGUID = /* @__PURE__ */ $constructor("ZodMiniGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function guid2(params) {
  return _guid(ZodMiniGUID, params);
}
var ZodMiniUUID = /* @__PURE__ */ $constructor("ZodMiniUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function uuid2(params) {
  return _uuid(ZodMiniUUID, params);
}
// @__NO_SIDE_EFFECTS__
function uuidv42(params) {
  return _uuidv4(ZodMiniUUID, params);
}
// @__NO_SIDE_EFFECTS__
function uuidv6(params) {
  return _uuidv6(ZodMiniUUID, params);
}
// @__NO_SIDE_EFFECTS__
function uuidv7(params) {
  return _uuidv7(ZodMiniUUID, params);
}
var ZodMiniURL = /* @__PURE__ */ $constructor("ZodMiniURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function url(params) {
  return _url(ZodMiniURL, params);
}
// @__NO_SIDE_EFFECTS__
function httpUrl(params) {
  return _url(ZodMiniURL, {
    protocol: /^https?$/,
    hostname: regexes_exports.domain,
    ...normalizeParams(params)
  });
}
var ZodMiniEmoji = /* @__PURE__ */ $constructor("ZodMiniEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function emoji2(params) {
  return _emoji2(ZodMiniEmoji, params);
}
var ZodMiniNanoID = /* @__PURE__ */ $constructor("ZodMiniNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function nanoid2(params) {
  return _nanoid(ZodMiniNanoID, params);
}
var ZodMiniCUID = /* @__PURE__ */ $constructor("ZodMiniCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function cuid3(params) {
  return _cuid(ZodMiniCUID, params);
}
var ZodMiniCUID2 = /* @__PURE__ */ $constructor("ZodMiniCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function cuid22(params) {
  return _cuid2(ZodMiniCUID2, params);
}
var ZodMiniULID = /* @__PURE__ */ $constructor("ZodMiniULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function ulid2(params) {
  return _ulid(ZodMiniULID, params);
}
var ZodMiniXID = /* @__PURE__ */ $constructor("ZodMiniXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function xid2(params) {
  return _xid(ZodMiniXID, params);
}
var ZodMiniKSUID = /* @__PURE__ */ $constructor("ZodMiniKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function ksuid2(params) {
  return _ksuid(ZodMiniKSUID, params);
}
var ZodMiniIPv4 = /* @__PURE__ */ $constructor("ZodMiniIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function ipv42(params) {
  return _ipv4(ZodMiniIPv4, params);
}
var ZodMiniIPv6 = /* @__PURE__ */ $constructor("ZodMiniIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function ipv62(params) {
  return _ipv6(ZodMiniIPv6, params);
}
var ZodMiniCIDRv4 = /* @__PURE__ */ $constructor("ZodMiniCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function cidrv42(params) {
  return _cidrv4(ZodMiniCIDRv4, params);
}
var ZodMiniCIDRv6 = /* @__PURE__ */ $constructor("ZodMiniCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function cidrv62(params) {
  return _cidrv6(ZodMiniCIDRv6, params);
}
var ZodMiniMAC = /* @__PURE__ */ $constructor("ZodMiniMAC", (inst, def) => {
  $ZodMAC.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function mac2(params) {
  return _mac(ZodMiniMAC, params);
}
var ZodMiniBase64 = /* @__PURE__ */ $constructor("ZodMiniBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function base642(params) {
  return _base64(ZodMiniBase64, params);
}
var ZodMiniBase64URL = /* @__PURE__ */ $constructor("ZodMiniBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function base64url2(params) {
  return _base64url(ZodMiniBase64URL, params);
}
var ZodMiniE164 = /* @__PURE__ */ $constructor("ZodMiniE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function e1642(params) {
  return _e164(ZodMiniE164, params);
}
var ZodMiniJWT = /* @__PURE__ */ $constructor("ZodMiniJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function jwt(params) {
  return _jwt(ZodMiniJWT, params);
}
var ZodMiniCustomStringFormat = /* @__PURE__ */ $constructor("ZodMiniCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodMiniCustomStringFormat, format, fnOrRegex, _params);
}
// @__NO_SIDE_EFFECTS__
function hostname2(_params) {
  return _stringFormat(ZodMiniCustomStringFormat, "hostname", regexes_exports.hostname, _params);
}
// @__NO_SIDE_EFFECTS__
function hex2(_params) {
  return _stringFormat(ZodMiniCustomStringFormat, "hex", regexes_exports.hex, _params);
}
// @__NO_SIDE_EFFECTS__
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = `${alg}_${enc}`;
  const regex = regexes_exports[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodMiniCustomStringFormat, format, regex, params);
}
var ZodMiniNumber = /* @__PURE__ */ $constructor("ZodMiniNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function number2(params) {
  return _number(ZodMiniNumber, params);
}
var ZodMiniNumberFormat = /* @__PURE__ */ $constructor("ZodMiniNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodMiniNumber.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function int(params) {
  return _int(ZodMiniNumberFormat, params);
}
// @__NO_SIDE_EFFECTS__
function float32(params) {
  return _float32(ZodMiniNumberFormat, params);
}
// @__NO_SIDE_EFFECTS__
function float64(params) {
  return _float64(ZodMiniNumberFormat, params);
}
// @__NO_SIDE_EFFECTS__
function int32(params) {
  return _int32(ZodMiniNumberFormat, params);
}
// @__NO_SIDE_EFFECTS__
function uint32(params) {
  return _uint32(ZodMiniNumberFormat, params);
}
var ZodMiniBoolean = /* @__PURE__ */ $constructor("ZodMiniBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function boolean2(params) {
  return _boolean(ZodMiniBoolean, params);
}
var ZodMiniBigInt = /* @__PURE__ */ $constructor("ZodMiniBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function bigint2(params) {
  return _bigint(ZodMiniBigInt, params);
}
var ZodMiniBigIntFormat = /* @__PURE__ */ $constructor("ZodMiniBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodMiniBigInt.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function int64(params) {
  return _int64(ZodMiniBigIntFormat, params);
}
// @__NO_SIDE_EFFECTS__
function uint64(params) {
  return _uint64(ZodMiniBigIntFormat, params);
}
var ZodMiniSymbol = /* @__PURE__ */ $constructor("ZodMiniSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function symbol(params) {
  return _symbol(ZodMiniSymbol, params);
}
var ZodMiniUndefined = /* @__PURE__ */ $constructor("ZodMiniUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _undefined3(params) {
  return _undefined2(ZodMiniUndefined, params);
}
var ZodMiniNull = /* @__PURE__ */ $constructor("ZodMiniNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _null3(params) {
  return _null2(ZodMiniNull, params);
}
var ZodMiniAny = /* @__PURE__ */ $constructor("ZodMiniAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function any() {
  return _any(ZodMiniAny);
}
var ZodMiniUnknown = /* @__PURE__ */ $constructor("ZodMiniUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function unknown() {
  return _unknown(ZodMiniUnknown);
}
var ZodMiniNever = /* @__PURE__ */ $constructor("ZodMiniNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function never(params) {
  return _never(ZodMiniNever, params);
}
var ZodMiniVoid = /* @__PURE__ */ $constructor("ZodMiniVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _void2(params) {
  return _void(ZodMiniVoid, params);
}
var ZodMiniDate = /* @__PURE__ */ $constructor("ZodMiniDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function date2(params) {
  return _date(ZodMiniDate, params);
}
var ZodMiniArray = /* @__PURE__ */ $constructor("ZodMiniArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function array(element, params) {
  return new ZodMiniArray({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return /* @__PURE__ */ _enum2(Object.keys(shape));
}
var ZodMiniObject = /* @__PURE__ */ $constructor("ZodMiniObject", (inst, def) => {
  $ZodObject.init(inst, def);
  ZodMiniType.init(inst, def);
  defineLazy(inst, "shape", () => def.shape);
});
// @__NO_SIDE_EFFECTS__
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodMiniObject(def);
}
// @__NO_SIDE_EFFECTS__
function strictObject(shape, params) {
  return new ZodMiniObject({
    type: "object",
    shape,
    catchall: /* @__PURE__ */ never(),
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function looseObject(shape, params) {
  return new ZodMiniObject({
    type: "object",
    shape,
    catchall: /* @__PURE__ */ unknown(),
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function extend2(schema, shape) {
  return extend(schema, shape);
}
// @__NO_SIDE_EFFECTS__
function safeExtend2(schema, shape) {
  return safeExtend(schema, shape);
}
// @__NO_SIDE_EFFECTS__
function merge2(schema, shape) {
  return extend(schema, shape);
}
// @__NO_SIDE_EFFECTS__
function pick2(schema, mask) {
  return pick(schema, mask);
}
// @__NO_SIDE_EFFECTS__
function omit2(schema, mask) {
  return omit(schema, mask);
}
// @__NO_SIDE_EFFECTS__
function partial2(schema, mask) {
  return partial(ZodMiniOptional, schema, mask);
}
// @__NO_SIDE_EFFECTS__
function required2(schema, mask) {
  return required(ZodMiniNonOptional, schema, mask);
}
// @__NO_SIDE_EFFECTS__
function catchall(inst, catchall2) {
  return inst.clone({ ...inst._zod.def, catchall: catchall2 });
}
var ZodMiniUnion = /* @__PURE__ */ $constructor("ZodMiniUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function union(options, params) {
  return new ZodMiniUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
var ZodMiniXor = /* @__PURE__ */ $constructor("ZodMiniXor", (inst, def) => {
  ZodMiniUnion.init(inst, def);
  $ZodXor.init(inst, def);
});
function xor(options, params) {
  return new ZodMiniXor({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
var ZodMiniDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodMiniDiscriminatedUnion", (inst, def) => {
  $ZodDiscriminatedUnion.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function discriminatedUnion(discriminator, options, params) {
  return new ZodMiniDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
var ZodMiniIntersection = /* @__PURE__ */ $constructor("ZodMiniIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function intersection(left, right) {
  return new ZodMiniIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodMiniTuple = /* @__PURE__ */ $constructor("ZodMiniTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodMiniTuple({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
var ZodMiniRecord = /* @__PURE__ */ $constructor("ZodMiniRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function record(keyType, valueType, params) {
  return new ZodMiniRecord({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function partialRecord(keyType, valueType, params) {
  const k = clone(keyType);
  k._zod.values = void 0;
  return new ZodMiniRecord({
    type: "record",
    keyType: k,
    valueType,
    ...normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodMiniRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...normalizeParams(params)
  });
}
var ZodMiniMap = /* @__PURE__ */ $constructor("ZodMiniMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function map(keyType, valueType, params) {
  return new ZodMiniMap({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
var ZodMiniSet = /* @__PURE__ */ $constructor("ZodMiniSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function set2(valueType, params) {
  return new ZodMiniSet({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
var ZodMiniEnum = /* @__PURE__ */ $constructor("ZodMiniEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodMiniType.init(inst, def);
  inst.options = Object.values(def.entries);
});
// @__NO_SIDE_EFFECTS__
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodMiniEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function nativeEnum(entries, params) {
  return new ZodMiniEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
var ZodMiniLiteral = /* @__PURE__ */ $constructor("ZodMiniLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function literal(value, params) {
  return new ZodMiniLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
var ZodMiniFile = /* @__PURE__ */ $constructor("ZodMiniFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function file(params) {
  return _file(ZodMiniFile, params);
}
var ZodMiniTransform = /* @__PURE__ */ $constructor("ZodMiniTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function transform(fn) {
  return new ZodMiniTransform({
    type: "transform",
    transform: fn
  });
}
var ZodMiniOptional = /* @__PURE__ */ $constructor("ZodMiniOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function optional(innerType) {
  return new ZodMiniOptional({
    type: "optional",
    innerType
  });
}
var ZodMiniExactOptional = /* @__PURE__ */ $constructor("ZodMiniExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function exactOptional(innerType) {
  return new ZodMiniExactOptional({
    type: "optional",
    innerType
  });
}
var ZodMiniNullable = /* @__PURE__ */ $constructor("ZodMiniNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function nullable(innerType) {
  return new ZodMiniNullable({
    type: "nullable",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function nullish2(innerType) {
  return /* @__PURE__ */ optional(/* @__PURE__ */ nullable(innerType));
}
var ZodMiniDefault = /* @__PURE__ */ $constructor("ZodMiniDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _default2(innerType, defaultValue) {
  return new ZodMiniDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodMiniPrefault = /* @__PURE__ */ $constructor("ZodMiniPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function prefault(innerType, defaultValue) {
  return new ZodMiniPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodMiniNonOptional = /* @__PURE__ */ $constructor("ZodMiniNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function nonoptional(innerType, params) {
  return new ZodMiniNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
var ZodMiniSuccess = /* @__PURE__ */ $constructor("ZodMiniSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function success(innerType) {
  return new ZodMiniSuccess({
    type: "success",
    innerType
  });
}
var ZodMiniCatch = /* @__PURE__ */ $constructor("ZodMiniCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _catch2(innerType, catchValue) {
  return new ZodMiniCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodMiniNaN = /* @__PURE__ */ $constructor("ZodMiniNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function nan(params) {
  return _nan(ZodMiniNaN, params);
}
var ZodMiniPipe = /* @__PURE__ */ $constructor("ZodMiniPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function pipe(in_, out) {
  return new ZodMiniPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodMiniCodec = /* @__PURE__ */ $constructor("ZodMiniCodec", (inst, def) => {
  ZodMiniPipe.init(inst, def);
  $ZodCodec.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function codec(in_, out, params) {
  return new ZodMiniCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
var ZodMiniReadonly = /* @__PURE__ */ $constructor("ZodMiniReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function readonly(innerType) {
  return new ZodMiniReadonly({
    type: "readonly",
    innerType
  });
}
var ZodMiniTemplateLiteral = /* @__PURE__ */ $constructor("ZodMiniTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function templateLiteral(parts, params) {
  return new ZodMiniTemplateLiteral({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
var ZodMiniLazy = /* @__PURE__ */ $constructor("ZodMiniLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _lazy2(getter) {
  return new ZodMiniLazy({
    type: "lazy",
    getter
  });
}
var ZodMiniPromise = /* @__PURE__ */ $constructor("ZodMiniPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function promise(innerType) {
  return new ZodMiniPromise({
    type: "promise",
    innerType
  });
}
var ZodMiniCustom = /* @__PURE__ */ $constructor("ZodMiniCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// @__NO_SIDE_EFFECTS__
function custom(fn, _params) {
  return _custom(ZodMiniCustom, fn ?? (() => true), _params);
}
// @__NO_SIDE_EFFECTS__
function refine(fn, _params = {}) {
  return _refine(ZodMiniCustom, fn, _params);
}
// @__NO_SIDE_EFFECTS__
function superRefine(fn) {
  return _superRefine(fn);
}
var describe2 = describe;
var meta2 = meta;
// @__NO_SIDE_EFFECTS__
function _instanceof(cls, params = {}) {
  const inst = /* @__PURE__ */ custom((data) => data instanceof cls, params);
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodMiniCodec,
  Boolean: ZodMiniBoolean,
  String: ZodMiniString
}, ...args);
// @__NO_SIDE_EFFECTS__
function json() {
  const jsonSchema = /* @__PURE__ */ _lazy2(() => {
    return /* @__PURE__ */ union([/* @__PURE__ */ string2(), /* @__PURE__ */ number2(), /* @__PURE__ */ boolean2(), /* @__PURE__ */ _null3(), /* @__PURE__ */ array(jsonSchema), /* @__PURE__ */ record(/* @__PURE__ */ string2(), jsonSchema)]);
  });
  return jsonSchema;
}
var ZodMiniFunction = /* @__PURE__ */ $constructor("ZodMiniFunction", (inst, def) => {
  $ZodFunction.init(inst, def);
  ZodMiniType.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function _function(params) {
  return new ZodMiniFunction({
    type: "function",
    input: Array.isArray(params?.input) ? /* @__PURE__ */ tuple(params?.input) : params?.input ?? /* @__PURE__ */ array(/* @__PURE__ */ unknown()),
    output: params?.output ?? /* @__PURE__ */ unknown()
  });
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/mini/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodMiniISODate: () => ZodMiniISODate,
  ZodMiniISODateTime: () => ZodMiniISODateTime,
  ZodMiniISODuration: () => ZodMiniISODuration,
  ZodMiniISOTime: () => ZodMiniISOTime,
  date: () => date3,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
var ZodMiniISODateTime = /* @__PURE__ */ $constructor("ZodMiniISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function datetime2(params) {
  return _isoDateTime(ZodMiniISODateTime, params);
}
var ZodMiniISODate = /* @__PURE__ */ $constructor("ZodMiniISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function date3(params) {
  return _isoDate(ZodMiniISODate, params);
}
var ZodMiniISOTime = /* @__PURE__ */ $constructor("ZodMiniISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function time2(params) {
  return _isoTime(ZodMiniISOTime, params);
}
var ZodMiniISODuration = /* @__PURE__ */ $constructor("ZodMiniISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});
// @__NO_SIDE_EFFECTS__
function duration2(params) {
  return _isoDuration(ZodMiniISODuration, params);
}

// node_modules/@wagmi/connectors/node_modules/zod/v4/mini/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint3,
  boolean: () => boolean3,
  date: () => date4,
  number: () => number3,
  string: () => string3
});
// @__NO_SIDE_EFFECTS__
function string3(params) {
  return _coercedString(ZodMiniString, params);
}
// @__NO_SIDE_EFFECTS__
function number3(params) {
  return _coercedNumber(ZodMiniNumber, params);
}
// @__NO_SIDE_EFFECTS__
function boolean3(params) {
  return _coercedBoolean(ZodMiniBoolean, params);
}
// @__NO_SIDE_EFFECTS__
function bigint3(params) {
  return _coercedBigint(ZodMiniBigInt, params);
}
// @__NO_SIDE_EFFECTS__
function date4(params) {
  return _coercedDate(ZodMiniDate, params);
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/Account.js
var Account_exports = {};
__export(Account_exports, {
  from: () => from14,
  fromPrivateKey: () => fromPrivateKey,
  getKey: () => getKey,
  sign: () => sign6
});

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/entropy.js
var extraEntropy = false;

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Secp256k1.js
function getPublicKey(options) {
  const { privateKey } = options;
  const point = secp256k1.ProjectivePoint.fromPrivateKey(from5(privateKey).slice(2));
  return from7(point);
}
function randomPrivateKey(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256k1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverAddress(options) {
  return fromPublicKey(recoverPublicKey(options));
}
function recoverPublicKey(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256k1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const point = signature_.recoverPublicKey(from5(payload).substring(2));
  return from7(point);
}
function sign(options) {
  const { extraEntropy: extraEntropy2 = extraEntropy, hash: hash4, payload, privateKey } = options;
  const { r, s, recovery } = secp256k1.sign(from6(payload), from6(privateKey), {
    extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from5(extraEntropy2).slice(2),
    lowS: true,
    ...hash4 ? { prehash: true } : {}
  });
  return {
    r,
    s,
    yParity: recovery
  };
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Solidity.js
var arrayRegex = /^(.*)\[([0-9]*)\]$/;
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint256 = 2n ** 256n - 1n;

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Signature.js
function assert6(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError({ signature });
  if (signature.r < 0n || signature.r > maxUint256)
    throw new InvalidRError({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256)
    throw new InvalidSError({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes3(signature) {
  return fromHex3(fromBytes(signature));
}
function fromHex3(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError2({ signature });
  const r = BigInt(slice(signature, 0, 32));
  const s = BigInt(slice(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r,
      s
    };
  return {
    r,
    s,
    yParity
  };
}
function extract(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from9(value);
}
function from9(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex3(signature);
    if (signature instanceof Uint8Array)
      return fromBytes3(signature);
    if (typeof signature.r === "string")
      return fromRpc(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert6(signature_);
  return signature_;
}
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity(signature.v)
  };
}
function fromRpc(signature) {
  const yParity = (() => {
    const v = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity(v);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
function toHex3(signature) {
  assert6(signature);
  const r = signature.r;
  const s = signature.s;
  const signature_ = concat(
    fromNumber(r, { size: 32 }),
    fromNumber(s, { size: 32 }),
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === "number" ? fromNumber(yParityToV(signature.yParity), { size: 1 }) : "0x"
  );
  return signature_;
}
function toTuple(signature) {
  const { r, s, yParity } = signature;
  return [
    yParity ? "0x01" : "0x",
    r === 0n ? "0x" : trimLeft(fromNumber(r)),
    s === 0n ? "0x" : trimLeft(fromNumber(s))
  ];
}
function vToYParity(v) {
  if (v === 0 || v === 27)
    return 0;
  if (v === 1 || v === 28)
    return 1;
  if (v >= 35)
    return v % 2 === 0 ? 1 : 0;
  throw new InvalidVError({ value: v });
}
function yParityToV(yParity) {
  if (yParity === 0)
    return 27;
  if (yParity === 1)
    return 28;
  throw new InvalidYParityError({ value: yParity });
}
var InvalidSerializedSizeError2 = class extends BaseError2 {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size2(from5(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
var MissingPropertiesError = class extends BaseError2 {
  constructor({ signature }) {
    super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
var InvalidRError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
var InvalidSError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
var InvalidYParityError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
var InvalidVError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/abiParameters.js
function prepareParameters({ checksumAddress, parameters, values }) {
  const preparedParameters = [];
  for (let i = 0; i < parameters.length; i++) {
    preparedParameters.push(prepareParameter({
      checksumAddress,
      parameter: parameters[i],
      value: values[i]
    }));
  }
  return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
  const parameter = parameter_;
  const arrayComponents = getArrayComponents(parameter.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, {
      checksumAddress,
      length,
      parameter: {
        ...parameter,
        type
      }
    });
  }
  if (parameter.type === "tuple") {
    return encodeTuple(value, {
      checksumAddress,
      parameter
    });
  }
  if (parameter.type === "address") {
    return encodeAddress(value, {
      checksum: checksumAddress
    });
  }
  if (parameter.type === "bool") {
    return encodeBoolean(value);
  }
  if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
    const signed = parameter.type.startsWith("int");
    const [, , size3 = "256"] = integerRegex.exec(parameter.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size3)
    });
  }
  if (parameter.type.startsWith("bytes")) {
    return encodeBytes(value, { type: parameter.type });
  }
  if (parameter.type === "string") {
    return encodeString(value);
  }
  throw new InvalidTypeError(parameter.type);
}
function encode2(preparedParameters) {
  let staticSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size2(encoded);
  }
  const staticParameters = [];
  const dynamicParameters = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic) {
      staticParameters.push(fromNumber(staticSize + dynamicSize, { size: 32 }));
      dynamicParameters.push(encoded);
      dynamicSize += size2(encoded);
    } else {
      staticParameters.push(encoded);
    }
  }
  return concat(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
  const { checksum: checksum3 = false } = options;
  assert4(value, { strict: checksum3 });
  return {
    dynamic: false,
    encoded: padLeft(value.toLowerCase())
  };
}
function encodeArray(value, options) {
  const { checksumAddress, length, parameter } = options;
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new ArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${parameter.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParameters = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter,
      value: value[i]
    });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParameters.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encode2(preparedParameters);
    if (dynamic) {
      const length2 = fromNumber(preparedParameters.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParameters.length > 0 ? concat(length2, data) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { type }) {
  const [, parametersize] = type.split("bytes");
  const bytesSize = size2(value);
  if (!parametersize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
    return {
      dynamic: true,
      encoded: concat(padLeft(fromNumber(bytesSize, { size: 32 })), value_)
    };
  }
  if (bytesSize !== Number.parseInt(parametersize, 10))
    throw new BytesSizeMismatchError({
      expectedSize: Number.parseInt(parametersize, 10),
      value
    });
  return { dynamic: false, encoded: padRight(value) };
}
function encodeBoolean(value) {
  if (typeof value !== "boolean")
    throw new BaseError2(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padLeft(fromBoolean(value)) };
}
function encodeNumber(value, { signed, size: size3 }) {
  if (typeof size3 === "number") {
    const max = 2n ** (BigInt(size3) - (signed ? 1n : 0n)) - 1n;
    const min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size3 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: fromNumber(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = fromString(value);
  const partsLength = Math.ceil(size2(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padRight(slice(hexValue, i * 32, (i + 1) * 32)));
  }
  return {
    dynamic: true,
    encoded: concat(padRight(fromNumber(size2(hexValue), { size: 32 })), ...parts)
  };
}
function encodeTuple(value, options) {
  const { checksumAddress, parameter } = options;
  let dynamic = false;
  const preparedParameters = [];
  for (let i = 0; i < parameter.components.length; i++) {
    const param_ = parameter.components[i];
    const index = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter: param_,
      value: value[index]
    });
    preparedParameters.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encode2(preparedParameters) : concat(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size3) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size3 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
function create2(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var NegativeOffsetError = class extends BaseError2 {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError = class extends BaseError2 {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError2 {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/AbiParameters.js
function encode3(parameters, values, options) {
  const { checksumAddress = false } = options ?? {};
  if (parameters.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: parameters.length,
      givenLength: values.length
    });
  const preparedParameters = prepareParameters({
    checksumAddress,
    parameters,
    values
  });
  const data = encode2(preparedParameters);
  if (data.length === 0)
    return "0x";
  return data;
}
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const value = values[i];
    data.push(encodePacked.encode(type, value));
  }
  return concat(...data);
}
(function(encodePacked2) {
  function encode6(type, value, isArray = false) {
    if (type === "address") {
      const address2 = value;
      assert4(address2);
      return padLeft(address2.toLowerCase(), isArray ? 32 : 0);
    }
    if (type === "string")
      return fromString(value);
    if (type === "bytes")
      return value;
    if (type === "bool")
      return padLeft(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type.match(integerRegex);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size3 = Number.parseInt(bits, 10) / 8;
      return fromNumber(value, {
        size: isArray ? 32 : size3,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type.match(bytesRegex);
    if (bytesMatch) {
      const [_type, size3] = bytesMatch;
      if (Number.parseInt(size3, 10) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError({
          expectedSize: Number.parseInt(size3, 10),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type.match(arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i = 0; i < value.length; i++) {
        data.push(encode6(childType, value[i], true));
      }
      if (data.length === 0)
        return "0x";
      return concat(...data);
    }
    throw new InvalidTypeError(type);
  }
  encodePacked2.encode = encode6;
})(encodePacked || (encodePacked = {}));
function from10(parameters) {
  if (Array.isArray(parameters) && typeof parameters[0] === "string")
    return parseAbiParameters(parameters);
  if (typeof parameters === "string")
    return parseAbiParameters(parameters);
  return parameters;
}
var ArrayLengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength, type }) {
    super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
};
var BytesSizeMismatchError = class extends BaseError2 {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size2(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidArrayError = class extends BaseError2 {
  constructor(value) {
    super(`Value \`${value}\` is not a valid array.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidArrayError"
    });
  }
};
var InvalidTypeError = class extends BaseError2 {
  constructor(type) {
    super(`Type \`${type}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/TypedData.js
function assert7(value) {
  const { domain: domain2, message, primaryType, types } = value;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value2 = data[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value2 === "number" || typeof value2 === "bigint")) {
        const [, base2, size_] = integerMatch;
        fromNumber(value2, {
          signed: base2 === "int",
          size: Number.parseInt(size_ ?? "", 10) / 8
        });
      }
      if (type === "address" && typeof value2 === "string" && !validate3(value2))
        throw new InvalidAddressError2({
          address: value2,
          cause: new InvalidInputError2()
        });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [, size3] = bytesMatch;
        if (size3 && size2(value2) !== Number.parseInt(size3, 10))
          throw new BytesSizeMismatchError2({
            expectedSize: Number.parseInt(size3, 10),
            givenSize: size2(value2)
          });
      }
      const struct2 = types[type];
      if (struct2) {
        validateReference(type);
        validateData(struct2, value2);
      }
    }
  };
  if (types.EIP712Domain && domain2) {
    if (typeof domain2 !== "object")
      throw new InvalidDomainError({ domain: domain2 });
    validateData(types.EIP712Domain, domain2);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function encode4(value) {
  const { domain: domain2 = {}, message, primaryType } = value;
  const types = {
    EIP712Domain: extractEip712DomainTypes(domain2),
    ...value.types
  };
  assert7({
    domain: domain2,
    message,
    primaryType,
    types
  });
  const parts = ["0x19", "0x01"];
  if (domain2)
    parts.push(hashDomain({
      domain: domain2,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return concat(...parts);
}
function encodeType(value) {
  const { primaryType, types } = value;
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${(types[type] ?? []).map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function extractEip712DomainTypes(domain2) {
  return [
    typeof domain2?.name === "string" && { name: "name", type: "string" },
    domain2?.version && { name: "version", type: "string" },
    (typeof domain2?.chainId === "number" || typeof domain2?.chainId === "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    domain2?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain2?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function getSignPayload(value) {
  return keccak256(encode4(value));
}
function hashDomain(value) {
  const { domain: domain2, types } = value;
  return hashStruct({
    data: domain2,
    primaryType: "EIP712Domain",
    types: {
      ...types,
      EIP712Domain: types?.EIP712Domain || extractEip712DomainTypes(domain2)
    }
  });
}
function hashStruct(value) {
  const { data, primaryType, types } = value;
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
var BytesSizeMismatchError2 = class extends BaseError2 {
  constructor({ expectedSize, givenSize }) {
    super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.BytesSizeMismatchError"
    });
  }
};
var InvalidDomainError = class extends BaseError2 {
  constructor({ domain: domain2 }) {
    super(`Invalid domain "${stringify(domain2)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidDomainError"
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError2 {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidPrimaryTypeError"
    });
  }
};
var InvalidStructTypeError = class extends BaseError2 {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidStructTypeError"
    });
  }
};
function encodeData(value) {
  const { data, primaryType, types } = value;
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType] ?? []) {
    const [type, value2] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value2);
  }
  return encode3(encodedTypes, encodedValues);
}
function hashType(value) {
  const { primaryType, types } = value;
  const encodedHashType = fromString(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeField(properties) {
  let { types, name, type, value } = properties;
  if (types[type] !== void 0)
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value, { as: "Hex" })];
  }
  if (type === "string")
    return [
      { type: "bytes32" },
      keccak256(fromString2(value), { as: "Hex" })
    ];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType2 = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType2,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encode3(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}
function findTypeDependencies(value, results = /* @__PURE__ */ new Set()) {
  const { primaryType: primaryType_, types } = value;
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0];
  if (results.has(primaryType) || types[primaryType] === void 0)
    return results;
  results.add(primaryType);
  for (const field of types[primaryType])
    findTypeDependencies({ primaryType: field.type, types }, results);
  return results;
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// node_modules/viem/_esm/accounts/toAccount.js
function toAccount(source) {
  if (typeof source === "string") {
    if (!isAddress(source, { strict: false }))
      throw new InvalidAddressError({ address: source });
    return {
      address: source,
      type: "json-rpc"
    };
  }
  if (!isAddress(source.address, { strict: false }))
    throw new InvalidAddressError({ address: source.address });
  return {
    address: source.address,
    nonceManager: source.nonceManager,
    sign: source.sign,
    signAuthorization: source.signAuthorization,
    signMessage: source.signMessage,
    signTransaction: source.signTransaction,
    signTypedData: source.signTypedData,
    source: "custom",
    type: "local"
  };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/Key.js
var Key_exports = {};
__export(Key_exports, {
  createHeadlessWebAuthnP256: () => createHeadlessWebAuthnP256,
  createP256: () => createP256,
  createSecp256k1: () => createSecp256k1,
  createWebAuthnP256: () => createWebAuthnP256,
  createWebCryptoP256: () => createWebCryptoP256,
  deserialize: () => deserialize,
  from: () => from13,
  fromHeadlessWebAuthnP256: () => fromHeadlessWebAuthnP256,
  fromP256: () => fromP256,
  fromRelay: () => fromRelay,
  fromRelayKeyRole: () => fromRelayKeyRole,
  fromRelayKeyType: () => fromRelayKeyType,
  fromSecp256k1: () => fromSecp256k1,
  fromSerializedKeyType: () => fromSerializedKeyType,
  fromSerializedSpendPeriod: () => fromSerializedSpendPeriod,
  fromWebAuthnP256: () => fromWebAuthnP256,
  fromWebCryptoP256: () => fromWebCryptoP256,
  getFeeToken: () => getFeeToken,
  hash: () => hash2,
  resolvePermissions: () => resolvePermissions,
  serialize: () => serialize,
  serializePublicKey: () => serializePublicKey,
  serializeWebAuthnSignature: () => serializeWebAuthnSignature,
  sign: () => sign5,
  toRelay: () => toRelay,
  toRelayKeyRole: () => toRelayKeyRole,
  toRelayKeyType: () => toRelayKeyType,
  toSerializedKeyType: () => toSerializedKeyType,
  toSerializedSpendPeriod: () => toSerializedSpendPeriod,
  wrapSignature: () => wrapSignature
});

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/abiItem.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError2("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate3(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index) => {
          return isArgOfType(Object.values(arg)[index], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return validate3(args[parameterIndex], {
          strict: false
        });
      if (types.includes("address") && types.includes("bytes"))
        return validate3(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/AbiItem.js
function from11(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
function fromAbi(abi, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate(name, { strict: false });
  const abiItems = abi.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector2(abiItem2) === slice(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
function getSelector2(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi, name] = parameters;
      return fromAbi(abi, name);
    }
    return parameters[0];
  })();
  return slice(getSignatureHash(abiItem), 0, 4);
}
function getSignature(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi, name] = parameters;
      return fromAbi(abi, name);
    }
    return parameters[0];
  })();
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem(abiItem);
  })();
  return normalizeSignature(signature);
}
function getSignatureHash(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi, name] = parameters;
      return fromAbi(abi, name);
    }
    return parameters[0];
  })();
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak256(fromString(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError2 {
  constructor(x, y) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x.type}\` in \`${normalizeSignature(formatAbiItem(x.abiItem))}\`, and`,
        `\`${y.type}\` in \`${normalizeSignature(formatAbiItem(y.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
};
var NotFoundError = class extends BaseError2 {
  constructor({ name, data, type = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/AbiFunction.js
function encodeData2(...parameters) {
  const [abiFunction, args = []] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi, name, args3] = parameters;
      return [fromAbi2(abi, name, { args: args3 }), args3];
    }
    const [abiFunction2, args2] = parameters;
    return [abiFunction2, args2];
  })();
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi2([abiFunction, ...overloads], abiFunction.name, {
    args
  }) : abiFunction;
  const selector = getSelector3(item);
  const data = args.length > 0 ? encode3(item.inputs, args) : void 0;
  return data ? concat(selector, data) : selector;
}
function fromAbi2(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
function getSelector3(abiItem) {
  return getSelector2(abiItem);
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/P256.js
function getPublicKey2(options) {
  const { privateKey } = options;
  const point = secp256r1.ProjectivePoint.fromPrivateKey(typeof privateKey === "string" ? privateKey.slice(2) : fromBytes(privateKey).slice(2));
  return from7(point);
}
function randomPrivateKey2(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256r1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function sign2(options) {
  const { extraEntropy: extraEntropy2 = extraEntropy, hash: hash4, payload, privateKey } = options;
  const { r, s, recovery } = secp256r1.sign(payload instanceof Uint8Array ? payload : fromHex(payload), privateKey instanceof Uint8Array ? privateKey : fromHex(privateKey), {
    extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from5(extraEntropy2).slice(2),
    lowS: true,
    ...hash4 ? { prehash: true } : {}
  });
  return {
    r,
    s,
    yParity: recovery
  };
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Value.js
function from12(value, decimals = 0) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer2 = "", fraction = "0"] = value.split(".");
  const negative = integer2.startsWith("-");
  if (negative)
    integer2 = integer2.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer2 = `${BigInt(integer2) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer2 = `${BigInt(integer2) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer2}${fraction}`);
}
var InvalidDecimalNumberError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is not a valid decimal number.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Value.InvalidDecimalNumberError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Base64.js
var encoder3 = /* @__PURE__ */ new TextEncoder();
var decoder = /* @__PURE__ */ new TextDecoder();
var integerToCharacter = /* @__PURE__ */ Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [i, a.charCodeAt(0)]));
var characterToInteger = {
  ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [a.charCodeAt(0), i])),
  ["=".charCodeAt(0)]: 0,
  ["-".charCodeAt(0)]: 62,
  ["_".charCodeAt(0)]: 63
};
function fromBytes4(value, options = {}) {
  const { pad: pad3 = true, url: url2 = false } = options;
  const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
  for (let i = 0, j = 0; j < value.length; i += 4, j += 3) {
    const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
    encoded[i] = integerToCharacter[y >> 18];
    encoded[i + 1] = integerToCharacter[y >> 12 & 63];
    encoded[i + 2] = integerToCharacter[y >> 6 & 63];
    encoded[i + 3] = integerToCharacter[y & 63];
  }
  const k = value.length % 3;
  const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
  let base643 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
  if (pad3 && k === 1)
    base643 += "==";
  if (pad3 && k === 2)
    base643 += "=";
  if (url2)
    base643 = base643.replaceAll("+", "-").replaceAll("/", "_");
  return base643;
}
function fromHex4(value, options = {}) {
  return fromBytes4(fromHex(value), options);
}
function toBytes2(value) {
  const base643 = value.replace(/=+$/, "");
  const size3 = base643.length;
  const decoded = new Uint8Array(size3 + 3);
  encoder3.encodeInto(base643 + "===", decoded);
  for (let i = 0, j = 0; i < base643.length; i += 4, j += 3) {
    const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
    decoded[j] = x >> 16;
    decoded[j + 1] = x >> 8 & 255;
    decoded[j + 2] = x & 255;
  }
  const decodedSize = (size3 >> 2) * 3 + (size3 % 4 && size3 % 4 - 1);
  return new Uint8Array(decoded.buffer, 0, decodedSize);
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/internal/webauthn.js
function parseAsn1Signature(bytes) {
  const r_start = bytes[4] === 0 ? 5 : 4;
  const r_end = r_start + 32;
  const s_start = bytes[r_end + 2] === 0 ? r_end + 3 : r_end + 2;
  const r = BigInt(fromBytes(bytes.slice(r_start, r_end)));
  const s = BigInt(fromBytes(bytes.slice(s_start)));
  return {
    r,
    s: s > p256.CURVE.n / 2n ? p256.CURVE.n - s : s
  };
}
async function parseCredentialPublicKey(response) {
  try {
    const publicKeyBuffer = response.getPublicKey();
    if (!publicKeyBuffer)
      throw new CredentialCreationFailedError();
    const publicKeyBytes = new Uint8Array(publicKeyBuffer);
    const cryptoKey = await crypto.subtle.importKey("spki", new Uint8Array(publicKeyBytes), {
      name: "ECDSA",
      namedCurve: "P-256",
      hash: "SHA-256"
    }, true, ["verify"]);
    const publicKey = new Uint8Array(await crypto.subtle.exportKey("raw", cryptoKey));
    return from7(publicKey);
  } catch (error48) {
    if (error48.message !== "Permission denied to access object")
      throw error48;
    const data = new Uint8Array(response.attestationObject);
    const coordinateLength = 32;
    const cborPrefix = 88;
    const findStart = (key) => {
      const coordinate = new Uint8Array([key, cborPrefix, coordinateLength]);
      for (let i = 0; i < data.length - coordinate.length; i++)
        if (coordinate.every((byte, j) => data[i + j] === byte))
          return i + coordinate.length;
      throw new CredentialCreationFailedError();
    };
    const xStart = findStart(33);
    const yStart = findStart(34);
    return from7(new Uint8Array([
      4,
      ...data.slice(xStart, xStart + coordinateLength),
      ...data.slice(yStart, yStart + coordinateLength)
    ]));
  }
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/WebAuthnP256.js
var createChallenge = Uint8Array.from([
  105,
  171,
  180,
  181,
  160,
  222,
  75,
  198,
  42,
  42,
  32,
  31,
  141,
  37,
  186,
  233
]);
async function createCredential(options) {
  const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
  const creationOptions = getCredentialCreationOptions(rest);
  try {
    const credential = await createFn(creationOptions);
    if (!credential)
      throw new CredentialCreationFailedError();
    const response = credential.response;
    const publicKey = await parseCredentialPublicKey(response);
    return {
      id: credential.id,
      publicKey,
      raw: credential
    };
  } catch (error48) {
    throw new CredentialCreationFailedError({
      cause: error48
    });
  }
}
function getAuthenticatorData(options = {}) {
  const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
  const rpIdHash = sha2562(fromString(rpId));
  const flag_bytes = fromNumber(flag, { size: 1 });
  const signCount_bytes = fromNumber(signCount, { size: 4 });
  return concat(rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
  const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
  return JSON.stringify({
    type: "webauthn.get",
    challenge: fromHex4(challenge, { url: true, pad: false }),
    origin,
    crossOrigin,
    ...extraClientData
  });
}
function getCredentialCreationOptions(options) {
  const { attestation = "none", authenticatorSelection = {
    residentKey: "preferred",
    requireResidentKey: false,
    userVerification: "required"
  }, challenge = createChallenge, excludeCredentialIds, extensions, name: name_, rp = {
    id: window.location.hostname,
    name: window.document.title
  }, user } = options;
  const name = user?.name ?? name_;
  return {
    publicKey: {
      attestation,
      authenticatorSelection,
      challenge: typeof challenge === "string" ? fromHex(challenge) : challenge,
      ...excludeCredentialIds ? {
        excludeCredentials: excludeCredentialIds?.map((id) => ({
          id: toBytes2(id),
          type: "public-key"
        }))
      } : {},
      pubKeyCredParams: [
        {
          type: "public-key",
          alg: -7
          // p256
        }
      ],
      ...extensions && { extensions },
      rp,
      user: {
        id: user?.id ?? keccak256(fromString2(name), { as: "Bytes" }),
        name,
        displayName: user?.displayName ?? name
      }
    }
  };
}
function getCredentialRequestOptions(options) {
  const { credentialId, challenge, extensions, rpId = window.location.hostname, userVerification = "required" } = options;
  return {
    publicKey: {
      ...credentialId ? {
        allowCredentials: Array.isArray(credentialId) ? credentialId.map((id) => ({
          id: toBytes2(id),
          type: "public-key"
        })) : [
          {
            id: toBytes2(credentialId),
            type: "public-key"
          }
        ]
      } : {},
      challenge: fromHex(challenge),
      ...extensions && { extensions },
      rpId,
      userVerification
    }
  };
}
function getSignPayload2(options) {
  const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = "required" } = options;
  const authenticatorData = getAuthenticatorData({
    flag,
    rpId,
    signCount
  });
  const clientDataJSON = getClientDataJSON({
    challenge,
    crossOrigin,
    extraClientData,
    origin
  });
  const clientDataJSONHash = sha2562(fromString(clientDataJSON));
  const challengeIndex = clientDataJSON.indexOf('"challenge"');
  const typeIndex = clientDataJSON.indexOf('"type"');
  const metadata = {
    authenticatorData,
    clientDataJSON,
    challengeIndex,
    typeIndex,
    userVerificationRequired: userVerification === "required"
  };
  const payload = concat(authenticatorData, clientDataJSONHash);
  return { metadata, payload };
}
async function sign3(options) {
  const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
  const requestOptions = getCredentialRequestOptions(rest);
  try {
    const credential = await getFn(requestOptions);
    if (!credential)
      throw new CredentialRequestFailedError();
    const response = credential.response;
    const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const signature = parseAsn1Signature(new Uint8Array(response.signature));
    return {
      metadata: {
        authenticatorData: fromBytes(new Uint8Array(response.authenticatorData)),
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: requestOptions.publicKey.userVerification === "required"
      },
      signature,
      raw: credential
    };
  } catch (error48) {
    throw new CredentialRequestFailedError({
      cause: error48
    });
  }
}
var CredentialCreationFailedError = class extends BaseError2 {
  constructor({ cause } = {}) {
    super("Failed to create credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialCreationFailedError"
    });
  }
};
var CredentialRequestFailedError = class extends BaseError2 {
  constructor({ cause } = {}) {
    super("Failed to request credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialRequestFailedError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/WebCryptoP256.js
async function createKeyPair(options = {}) {
  const { extractable = false } = options;
  const keypair = await globalThis.crypto.subtle.generateKey({
    name: "ECDSA",
    namedCurve: "P-256"
  }, extractable, ["sign", "verify"]);
  const publicKey_raw = await globalThis.crypto.subtle.exportKey("raw", keypair.publicKey);
  const publicKey = from7(new Uint8Array(publicKey_raw));
  return {
    privateKey: keypair.privateKey,
    publicKey
  };
}
async function sign4(options) {
  const { payload, privateKey } = options;
  const signature = await globalThis.crypto.subtle.sign({
    name: "ECDSA",
    hash: "SHA-256"
  }, privateKey, from6(payload));
  const signature_bytes = fromArray(new Uint8Array(signature));
  const r = toBigInt2(slice2(signature_bytes, 0, 32));
  let s = toBigInt2(slice2(signature_bytes, 32, 64));
  if (s > p256.CURVE.n / 2n)
    s = p256.CURVE.n - s;
  return { r, s };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/call.js
var anyTarget = "0x3232323232323232323232323232323232323232";
var anySelector = "0x32323232";

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/Key.js
var fromRelayKeyType = {
  p256: "p256",
  secp256k1: "secp256k1",
  webauthnp256: "webauthn-p256"
};
var fromRelayKeyRole = {
  admin: "admin",
  normal: "session"
};
var fromSerializedKeyType = {
  0: "p256",
  1: "webauthn-p256",
  2: "secp256k1"
};
var fromSerializedSpendPeriod = {
  0: "minute",
  1: "hour",
  2: "day",
  3: "week",
  4: "month",
  5: "year"
};
var toRelayKeyType = {
  address: "secp256k1",
  p256: "p256",
  secp256k1: "secp256k1",
  "webauthn-p256": "webauthnp256"
};
var toRelayKeyRole = {
  admin: "admin",
  session: "normal"
};
var toSerializedKeyType = {
  address: 2,
  p256: 0,
  secp256k1: 2,
  "webauthn-p256": 1
};
var toSerializedSpendPeriod = {
  day: 2,
  hour: 1,
  minute: 0,
  month: 4,
  week: 3,
  year: 5
};
function createP256(parameters = {}) {
  const privateKey = randomPrivateKey2();
  return fromP256({
    ...parameters,
    privateKey
  });
}
function createSecp256k1(parameters = {}) {
  const privateKey = randomPrivateKey();
  return fromSecp256k1({
    ...parameters,
    privateKey
  });
}
async function createWebAuthnP256(parameters) {
  const { createFn, label, rpId, userId } = parameters;
  const credential = await createCredential({
    authenticatorSelection: {
      requireResidentKey: true,
      residentKey: "required",
      userVerification: "required"
    },
    createFn,
    extensions: {
      credProps: true
    },
    rp: rpId ? {
      id: rpId,
      name: rpId
    } : void 0,
    user: {
      displayName: label,
      id: new Uint8Array(userId ?? fromString2(label)),
      name: label
    }
  });
  return fromWebAuthnP256({
    ...parameters,
    credential: {
      id: credential.id,
      publicKey: credential.publicKey
    },
    id: userId ? toHex(userId) : toHex2(credential.publicKey, {
      includePrefix: false
    })
  });
}
function createHeadlessWebAuthnP256(parameters = {}) {
  const privateKey = randomPrivateKey2();
  return fromHeadlessWebAuthnP256({
    ...parameters,
    privateKey
  });
}
async function createWebCryptoP256(parameters = {}) {
  const keyPair = await createKeyPair();
  return fromWebCryptoP256({
    ...parameters,
    keyPair
  });
}
function deserialize(serialized, options = {}) {
  const { chainId } = options;
  const publicKey = serialized.publicKey;
  const type = fromSerializedKeyType[serialized.keyType];
  return from13({
    chainId,
    expiry: serialized.expiry,
    publicKey,
    role: serialized.isSuperAdmin ? "admin" : "session",
    type
  });
}
function from13(key, options = {}) {
  const { chainId = key.chainId } = options;
  const { expiry = 0, id, prehash = false, role = "admin", type } = key;
  const publicKey = (() => {
    const publicKey2 = key.publicKey;
    if (publicKey2 === "0x")
      return publicKey2;
    if (type === "secp256k1" || type === "address") {
      const isAddress2 = size2(publicKey2) === 20 || toBigInt(slice(publicKey2, 0, 12)) === 0n;
      const address2 = isAddress2 ? slice(publicKey2, -20) : fromPublicKey(fromHex2(publicKey2));
      return address2;
    }
    return publicKey2;
  })();
  return {
    ...key,
    chainId,
    expiry,
    hash: hash2({
      publicKey,
      type
    }),
    id: (id ?? publicKey).toLowerCase(),
    prehash,
    publicKey: publicKey.toLowerCase(),
    role,
    type
  };
}
function fromP256(parameters) {
  const { chainId, expiry, feeToken: feeToken2, permissions: permissions2, privateKey, role } = parameters;
  const publicKey = toHex2(getPublicKey2({ privateKey }), {
    includePrefix: false
  });
  return from13({
    chainId,
    expiry,
    feeToken: feeToken2,
    permissions: permissions2,
    privateKey() {
      return privateKey;
    },
    publicKey,
    role,
    type: "p256"
  });
}
function fromRelay(relayKey, options) {
  const { chainId } = options;
  const { publicKey } = relayKey;
  const isAddress2 = size2(publicKey) === 20 || toBigInt(slice(publicKey, 0, 12)) === 0n;
  const permissions2 = {};
  for (const permission of relayKey.permissions) {
    if (permission.type === "call") {
      permissions2.calls ??= [];
      permissions2.calls.push({
        signature: permission.selector,
        to: permission.to === anyTarget ? void 0 : permission.to
      });
    }
    if (permission.type === "spend") {
      permissions2.spend ??= [];
      permissions2.spend.push({
        limit: permission.limit,
        period: permission.period,
        token: permission.token
      });
    }
  }
  return from13({
    chainId,
    expiry: relayKey.expiry,
    permissions: permissions2,
    publicKey: relayKey.publicKey,
    role: fromRelayKeyRole[relayKey.role],
    type: isAddress2 ? "address" : fromRelayKeyType[relayKey.type]
  });
}
function fromSecp256k1(parameters) {
  const { privateKey, role } = parameters;
  const publicKey = (() => {
    if (parameters.publicKey)
      return parameters.publicKey;
    if (privateKey)
      return fromPublicKey(getPublicKey({ privateKey }));
    return parameters.address.toLowerCase();
  })();
  return from13({
    expiry: parameters.expiry ?? 0,
    feeToken: parameters.feeToken,
    permissions: parameters.permissions,
    privateKey: privateKey ? () => privateKey : void 0,
    publicKey,
    role,
    type: "secp256k1"
  });
}
function fromWebAuthnP256(parameters) {
  const { credential, id, rpId } = parameters;
  const publicKey = toHex2(credential.publicKey, {
    includePrefix: false
  });
  return from13({
    chainId: parameters.chainId,
    expiry: parameters.expiry ?? 0,
    feeToken: parameters.feeToken,
    id,
    permissions: parameters.permissions,
    privateKey: {
      credential,
      rpId
    },
    publicKey,
    role: parameters.role,
    type: "webauthn-p256"
  });
}
function fromHeadlessWebAuthnP256(parameters) {
  const { privateKey } = parameters;
  const publicKey = toHex2(getPublicKey2({ privateKey }), {
    includePrefix: false
  });
  return from13({
    chainId: parameters.chainId,
    expiry: parameters.expiry ?? 0,
    feeToken: parameters.feeToken,
    permissions: parameters.permissions,
    privateKey: {
      privateKey() {
        return privateKey;
      }
    },
    publicKey,
    role: parameters.role,
    type: "webauthn-p256"
  });
}
function fromWebCryptoP256(parameters) {
  const { chainId, expiry, feeToken: feeToken2, keyPair, permissions: permissions2, role } = parameters;
  const { privateKey } = keyPair;
  const publicKey = toHex2(keyPair.publicKey, {
    includePrefix: false
  });
  return from13({
    chainId,
    expiry,
    feeToken: feeToken2,
    permissions: permissions2,
    prehash: true,
    privateKey,
    publicKey,
    role,
    type: "p256"
  });
}
function hash2(key) {
  const { type } = key;
  const publicKey = serializePublicKey(key.publicKey);
  return keccak256(encode3([{ type: "uint8" }, { type: "bytes32" }], [toSerializedKeyType[type], keccak256(publicKey)]));
}
function serializePublicKey(publicKey) {
  return size2(publicKey) < 32 ? padLeft(publicKey, 32) : publicKey;
}
function serialize(key) {
  const { expiry = 0, publicKey, role, type } = key;
  return {
    expiry,
    isSuperAdmin: role === "admin",
    keyType: toSerializedKeyType[type],
    publicKey: serializePublicKey(publicKey)
  };
}
async function sign5(key, parameters) {
  const { address: address2, storage, webAuthn, wrap: wrap3 = true } = parameters;
  const { privateKey, publicKey, type: keyType } = key;
  if (!privateKey)
    throw new Error("Key does not have a private key to sign with.\n\nKey:\n" + stringify(key, null, 2));
  const payload = (() => {
    if (!address2)
      return parameters.payload;
    return getSignPayload({
      domain: { verifyingContract: address2 },
      message: {
        digest: parameters.payload
      },
      primaryType: "ERC1271Sign",
      types: {
        ERC1271Sign: [{ name: "digest", type: "bytes32" }]
      }
    });
  })();
  const [signature, prehash] = await (async () => {
    if (keyType === "p256") {
      const { privateKey: privateKey2 } = key;
      if (typeof privateKey2 === "function")
        return [
          toHex3(sign2({ payload, privateKey: privateKey2() })),
          false
        ];
      if (privateKey2 instanceof CryptoKey) {
        const signature2 = toHex3(await sign4({ payload, privateKey: privateKey2 }));
        return [signature2, true];
      }
    }
    if (keyType === "secp256k1") {
      return [
        toHex3(sign({ payload, privateKey: privateKey() })),
        false
      ];
    }
    if (keyType === "webauthn-p256") {
      if (privateKey.privateKey) {
        const { payload: wrapped, metadata: metadata2 } = getSignPayload2({
          challenge: payload,
          origin: "https://ithaca.xyz",
          rpId: "ithaca.xyz"
        });
        const { r: r2, s: s2 } = sign2({
          hash: true,
          payload: wrapped,
          privateKey: privateKey.privateKey()
        });
        const signature3 = serializeWebAuthnSignature({
          metadata: metadata2,
          signature: { r: r2, s: s2 }
        });
        return [signature3, false];
      }
      const { credential, rpId } = privateKey;
      const cacheKey = `porto.webauthnVerified.${key.hash}`;
      const now = Date.now();
      const verificationTimeout = 10 * 60 * 1e3;
      let requireVerification = true;
      if (storage) {
        const lastVerified = await storage.getItem(cacheKey);
        requireVerification = !lastVerified || now - lastVerified > verificationTimeout;
      }
      const { signature: { r, s }, raw, metadata } = await sign3({
        challenge: payload,
        credentialId: credential.id,
        getFn: webAuthn?.getFn,
        rpId,
        userVerification: requireVerification ? "required" : "preferred"
      });
      const response = raw.response;
      if (!response?.userHandle)
        throw new Error("No user handle in response", {
          cause: { response }
        });
      const id = toHex(new Uint8Array(response.userHandle));
      if (key.id && validate3(key.id) && !isEqual(key.id, id))
        throw new Error(`supplied webauthn key "${key.id}" does not match signature webauthn key "${id}"`, { cause: { id, key } });
      if (requireVerification && storage)
        await storage.setItem(cacheKey, now);
      const signature2 = serializeWebAuthnSignature({
        metadata,
        signature: { r, s }
      });
      return [signature2, false];
    }
    throw new Error(`Key type "${keyType}" is not supported.

Key:
` + stringify(key, null, 2));
  })();
  if (wrap3)
    return wrapSignature(signature, {
      keyType,
      prehash,
      publicKey
    });
  return signature;
}
function toRelay(key, options = {}) {
  const { expiry = 0, prehash = false, publicKey, role = "admin", type } = key;
  const { feeTokens, orchestrator } = options;
  const permissions2 = Object.entries(resolvePermissions(key, {
    feeTokens
  })).map(([key2, v]) => {
    if (key2 === "calls") {
      const calls = v;
      return calls.map(({ signature, to }) => {
        const selector = (() => {
          if (!signature)
            return anySelector;
          if (validate(signature))
            return signature;
          return getSelector3(signature);
        })();
        return {
          selector,
          to: to ?? anyTarget,
          type: "call"
        };
      });
    }
    if (key2 === "feeToken")
      return;
    if (key2 === "spend") {
      const value = v;
      return value.map(({ limit, period, token }) => {
        return {
          limit,
          period,
          token,
          type: "spend"
        };
      });
    }
    throw new Error(`Invalid permission type "${key2}".`);
  }).flat().filter(Boolean);
  if (key.role === "session" && orchestrator)
    permissions2.push({
      selector: anySelector,
      to: orchestrator,
      type: "call"
    });
  return {
    expiry,
    permissions: permissions2 ?? [],
    prehash,
    publicKey: serializePublicKey(publicKey),
    role: toRelayKeyRole[role],
    type: toRelayKeyType[type]
  };
}
function resolvePermissions(key, options) {
  const { permissions: permissions2 } = key;
  const calls = permissions2?.calls ? [...permissions2.calls] : [];
  const spend = permissions2?.spend ? [...permissions2.spend] : [];
  const feeTokens = options.feeTokens?.filter((token) => token.feeToken);
  if (feeTokens && feeTokens.length > 0) {
    const feeToken2 = getFeeToken(key, {
      feeTokens
    });
    if (feeToken2) {
      let index = -1;
      let minPeriod = toSerializedSpendPeriod.year;
      for (let i = 0; i < spend.length; i++) {
        const s = spend[i];
        if (s.token && isEqual(feeToken2.address, s.token)) {
          index = i;
          break;
        }
        if (!s.token && feeToken2.address === zeroAddress) {
          index = i;
          break;
        }
        const period = toSerializedSpendPeriod[s.period];
        if (period < minPeriod)
          minPeriod = period;
      }
      if (index !== -1) {
        spend[index] = {
          ...spend[index],
          limit: spend[index].limit + feeToken2.value
        };
        spend.unshift(spend.splice(index, 1)[0]);
      } else if (typeof minPeriod === "number")
        spend.unshift({
          limit: feeToken2.value,
          period: fromSerializedSpendPeriod[minPeriod],
          token: feeToken2.address
        });
    }
  }
  return { ...permissions2, calls, spend };
}
function getFeeToken(key, options) {
  const { feeTokens } = options;
  if (!key.feeToken)
    return void 0;
  const feeToken2 = feeTokens.find((token) => {
    if (key.feeToken.symbol === token.symbol)
      return true;
    if (!key.feeToken.symbol)
      return token.address === zeroAddress;
    if (key.feeToken.symbol === "native")
      return token.address === zeroAddress;
    return false;
  });
  if (!feeToken2)
    return void 0;
  const value = from12(key.feeToken.limit, feeToken2.decimals);
  return {
    ...feeToken2,
    value
  };
}
function serializeWebAuthnSignature(options) {
  const { metadata, signature } = options;
  return encode3(from10([
    "struct WebAuthnAuth { bytes authenticatorData; string clientDataJSON; uint256 challengeIndex; uint256 typeIndex; bytes32 r; bytes32 s; }",
    "WebAuthnAuth auth"
  ]), [
    {
      authenticatorData: metadata.authenticatorData,
      challengeIndex: BigInt(metadata.challengeIndex),
      clientDataJSON: metadata.clientDataJSON,
      r: fromNumber(signature.r, { size: 32 }),
      s: fromNumber(signature.s, { size: 32 }),
      typeIndex: BigInt(metadata.typeIndex)
    }
  ]);
}
function wrapSignature(signature, options) {
  const { keyType: type, prehash = false, publicKey } = options;
  const keyHash = hash2({ publicKey, type });
  return encodePacked(["bytes", "bytes32", "bool"], [signature, keyHash, prehash]);
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/Account.js
function from14(parameters) {
  const account = typeof parameters === "string" ? { address: parameters } : parameters;
  const source = account.sign ? "privateKey" : "porto";
  const { address: address2, sign: sign_, signMessage, signTransaction, signTypedData, type } = toAccount({
    address: account.address,
    sign({ hash: hash4 }) {
      if (source === "porto")
        throw new Error("`sign` not supported on porto accounts.");
      if (!account.sign)
        throw new Error("`sign` not supported.");
      return account.sign({ hash: hash4 });
    },
    signMessage({ message }) {
      return this.sign({
        hash: hashMessage(message)
      });
    },
    signTransaction() {
      throw new Error("`signTransaction` not supported on porto accounts.");
    },
    signTypedData(typedData) {
      return this.sign({
        hash: hashTypedData(typedData)
      });
    }
  });
  return {
    address: address2,
    keys: account.keys ?? void 0,
    sign: sign_,
    signMessage,
    signTransaction,
    signTypedData,
    source,
    type
  };
}
function fromPrivateKey(privateKey, options = {}) {
  const { keys } = options;
  const address2 = fromPublicKey(getPublicKey({ privateKey }));
  return from14({
    address: address2,
    keys,
    async sign({ hash: hash4 }) {
      return toHex3(sign({
        payload: hash4,
        privateKey
      }));
    },
    source: "privateKey"
  });
}
function getKey(account, parameters = {}) {
  const { key, role } = parameters;
  if (key === null)
    return void 0;
  if (typeof key === "object")
    return key;
  if (account.keys && account.keys.length > 0) {
    if (typeof key === "number")
      return account.keys[key];
    return account.keys.find((key2) => key2.privateKey && (!role || key2.role === role));
  }
  return void 0;
}
async function sign6(account, parameters) {
  const { storage, replaySafe = true, wrap: wrap3 = true, webAuthn } = parameters;
  const key = getKey(account, parameters);
  const payload = (() => {
    if (!replaySafe)
      return parameters.payload;
    return getSignPayload({
      domain: { verifyingContract: account.address },
      message: {
        digest: parameters.payload
      },
      primaryType: "ERC1271Sign",
      types: {
        ERC1271Sign: [{ name: "digest", type: "bytes32" }]
      }
    });
  })();
  const sign7 = (() => {
    if (!key) {
      if (account.source === "privateKey")
        return account.sign;
      return void 0;
    }
    return ({ hash: hash4 }) => sign5(key, {
      address: null,
      payload: hash4,
      storage,
      webAuthn,
      wrap: wrap3
    });
  })();
  if (!sign7)
    throw new Error("cannot find key to sign with.");
  return await sign7({ hash: payload });
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/AbiError.js
function from15(abiError, options = {}) {
  return from11(abiError, options);
}
function fromAbi3(abi, name, options) {
  if (name === "Error")
    return solidityError;
  if (name === "Panic")
    return solidityPanic;
  if (validate(name, { strict: false })) {
    const selector = slice(name, 0, 4);
    if (selector === solidityErrorSelector)
      return solidityError;
    if (selector === solidityPanicSelector)
      return solidityPanic;
  }
  const item = fromAbi(abi, name, options);
  if (item.type !== "error")
    throw new NotFoundError({ name, type: "error" });
  return item;
}
var solidityError = /* @__PURE__ */ from15({
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
});
var solidityErrorSelector = "0x08c379a0";
var solidityPanic = /* @__PURE__ */ from15({
  inputs: [
    {
      name: "reason",
      type: "uint8"
    }
  ],
  name: "Panic",
  type: "error"
});
var solidityPanicSelector = "0x4e487b71";

// node_modules/viem/_esm/experimental/erc7821/errors.js
var FunctionSelectorNotRecognizedError = class extends BaseError {
  constructor() {
    super("Function is not recognized.", {
      metaMessages: [
        "This could be due to any of the following:",
        "  - The contract does not have the function,",
        "  - The address is not a contract."
      ],
      name: "FunctionSelectorNotRecognizedError"
    });
  }
};

// node_modules/ox/_esm/core/AbiError.js
function from16(abiError, options = {}) {
  return from(abiError, options);
}
function getSelector4(abiItem) {
  return getSelector(abiItem);
}

// node_modules/viem/_esm/experimental/erc7821/utils/getExecuteError.js
function getExecuteError(e, parameters) {
  const error48 = e.walk((e2) => "data" in e2);
  if (!error48?.data)
    return e;
  if (error48.data === getSelector4(from16("error FnSelectorNotRecognized()")))
    return new FunctionSelectorNotRecognizedError();
  let matched = null;
  for (const c of parameters.calls) {
    const call2 = c;
    if (!call2.abi)
      continue;
    try {
      const matches = Boolean(decodeErrorResult({
        abi: call2.abi,
        data: error48.data
      }));
      if (!matches)
        continue;
      matched = call2;
    } catch {
    }
  }
  if (matched)
    return getContractError(error48, {
      abi: matched.abi,
      address: matched.to,
      args: matched.args,
      functionName: matched.functionName
    });
  return e;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/utils.js
var address = () => templateLiteral(["0x", string2()], {
  message: "Needs string in format ^0x[A-Fa-f0-9]{40}$."
});
var hex3 = () => templateLiteral(["0x", string2()], {
  message: "Needs string in format ^0x[A-Fa-f0-9]+$."
});
var number4 = () => codec(hex3(), number2(), {
  decode: (value) => toNumber(value),
  encode: (value) => fromNumber(value)
});
var bigint4 = () => codec(hex3(), bigint2({ message: "Required bigint" }), {
  decode: (value) => toBigInt(value),
  encode: (value) => fromNumber(value)
});
function oneOf(options) {
  return union(options);
}
var ValidationError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Schema.ValidationError"
    });
  }
};
function toValidationError(e) {
  const error48 = e;
  let message = `Validation failed with ${error48.issues.length} error${error48.issues.length === 1 ? "" : "s"}:`;
  message += "\n";
  for (const issue2 of error48.issues) {
    if (!issue2)
      continue;
    message += "\n";
    message += formatIssue(issue2);
  }
  return new ValidationError(message);
}
function formatIssue(issue2, level = 0) {
  const path = formatPath(issue2.path);
  const prefix = `- ${path ? `${path}: ` : ""}`;
  const indent = "  ".repeat(level + 1);
  let message = prefix;
  switch (issue2.code) {
    case "invalid_type": {
      const expected = issue2.expected;
      const received = issue2.input ? formatReceivedType(issue2) : "undefined";
      message += `Expected ${expected}. ${issue2.message !== "Invalid input" ? issue2.message : ""}`;
      if (received !== "undefined")
        message += `but received ${received}`;
      break;
    }
    case "too_big": {
      const max = issue2.maximum;
      const inclusive = issue2.inclusive ?? true;
      const exact = issue2.exact ?? false;
      if (exact)
        message += `${issue2.origin} must be exactly ${max}`;
      else
        message += `${issue2.origin} must be ${inclusive ? "at most" : "less than"} ${max}`;
      break;
    }
    case "too_small": {
      const min = issue2.minimum;
      const inclusive = issue2.inclusive ?? true;
      const exact = issue2.exact ?? false;
      if (exact)
        message += `${issue2.origin} must be exactly ${min}`;
      else
        message += `${issue2.origin} must be ${inclusive ? "at least" : "greater than"} ${min}`;
      break;
    }
    case "invalid_format": {
      switch (issue2.format) {
        case "regex":
          message += `Must match pattern: ${issue2.pattern}`;
          break;
        case "starts_with":
          message += `Must start with "${issue2.prefix}"`;
          break;
        case "ends_with":
          message += `Must end with "${issue2.suffix}"`;
          break;
        case "includes":
          message += `Must include "${issue2.includes}"`;
          break;
        case "template_literal":
          message += `Must match pattern: ${issue2.pattern}`;
          break;
        default:
          message += `Invalid ${issue2.format} format`;
      }
      break;
    }
    case "not_multiple_of": {
      message += `Number must be a multiple of ${issue2.divisor}`;
      break;
    }
    case "unrecognized_keys": {
      const keys = issue2.keys.map((k) => `"${k}"`).join(", ");
      message += `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${keys}`;
      break;
    }
    case "invalid_union": {
      const hasErrors = issue2.errors && issue2.errors.length > 0;
      message += "Invalid union value.";
      if (hasErrors) {
        issue2.errors.forEach((optionErrors) => {
          if (optionErrors.length > 0) {
            optionErrors.forEach((subIssue) => {
              message += "\n";
              message += indent;
              message += formatIssue(subIssue, level + 1);
            });
          }
        });
      }
      break;
    }
    case "invalid_key": {
      message += `Invalid ${issue2.origin} key`;
      if (issue2.issues && issue2.issues.length > 0) {
        issue2.issues.forEach((subIssue) => {
          message += "\n";
          message += indent;
          message += formatIssue(subIssue, level + 1);
        });
      }
      break;
    }
    case "invalid_element": {
      message += `Invalid ${issue2.origin} element at key "${issue2.key}"`;
      if (issue2.issues && issue2.issues.length > 0) {
        issue2.issues.forEach((subIssue) => {
          message += "\n";
          message += indent;
          message += formatIssue(subIssue, level + 1);
        });
      }
      break;
    }
    case "invalid_value": {
      const values = issue2.values.map((v) => JSON.stringify(v)).join(", ");
      if (issue2.values.length > 1)
        message += `Expected one of: ${values}`;
      else
        message += `Expected ${values}`;
      break;
    }
    case "custom": {
      message += issue2.message || "Custom validation failed";
      break;
    }
    default: {
      message += issue2.message || "Validation failed";
    }
  }
  return message;
}
function formatPath(path) {
  if (path.length === 0)
    return "";
  return "at `" + path.map((key, index) => {
    if (typeof key === "number")
      return `[${key}]`;
    if (typeof key === "symbol")
      return `[${key.toString()}]`;
    if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) && index > 0)
      return `.${key}`;
    if (index === 0 && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key))
      return key;
    return `["${key}"]`;
  }).join("") + "`";
}
function formatReceivedType(issue2) {
  const value = issue2.input;
  if (value === void 0)
    return "undefined";
  if (value === null)
    return "null";
  const type = typeof value;
  if (type === "object") {
    if (Array.isArray(value))
      return "array";
    if (value instanceof Date)
      return "date";
    if (value instanceof Map)
      return "map";
    if (value instanceof Set)
      return "set";
    return "object";
  }
  return type;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/permission.js
var CallPermission = object({
  /** The selector of the function this permission applies to. */
  selector: hex3(),
  /** The address of the contract this permission applies to. */
  to: address(),
  /** Permission type. */
  type: literal("call")
});
var SpendPermission = object({
  /** The maximum amount that can be spent in the given period. */
  limit: bigint4(),
  /** The period of the limit. */
  period: union([
    literal("minute"),
    literal("hour"),
    literal("day"),
    literal("week"),
    literal("month"),
    literal("year")
  ]),
  /** The token this permission applies to. If `None`, defaults to native token (ETH). */
  token: optional(union([address(), _null3()])),
  /** Permission type. */
  type: literal("spend")
});
var Permission = union([CallPermission, SpendPermission]);

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/key.js
var Key = object({
  /** The expiry of the key. */
  expiry: number4(),
  /** Whether the digest was prehashed. */
  prehash: optional(boolean2()),
  /** Public key. */
  publicKey: hex3(),
  /** Role. */
  role: union([literal("admin"), literal("normal")]),
  /** Key type. */
  type: union([
    literal("p256"),
    literal("secp256k1"),
    literal("webauthnp256")
  ])
});
var WithPermissions = object({
  ...Key.shape,
  /** Represents key permissions. */
  permissions: readonly(array(Permission))
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/capabilities.js
var assetDiffs;
(function(assetDiffs2) {
  assetDiffs2.AssetDiffAsset = union([
    object({
      address: optional(union([address(), _null3()])),
      decimals: optional(union([number2(), _null3()])),
      direction: union([literal("incoming"), literal("outgoing")]),
      fiat: optional(object({
        currency: string2(),
        value: codec(string2(), number2(), {
          decode: (value) => Number(value),
          encode: (value) => String(value)
        })
      })),
      name: optional(union([string2(), _null3()])),
      symbol: string2(),
      type: literal("erc20"),
      value: bigint4()
    }),
    object({
      address: optional(union([address(), _null3()])),
      direction: union([literal("incoming"), literal("outgoing")]),
      fiat: optional(object({
        currency: string2(),
        value: codec(string2(), number2(), {
          decode: (value) => Number(value),
          encode: (value) => String(value)
        })
      })),
      name: optional(union([string2(), _null3()])),
      symbol: string2(),
      type: literal("erc721"),
      uri: string2(),
      value: bigint4()
    }),
    object({
      address: _null3(),
      decimals: optional(union([number2(), _null3()])),
      direction: union([literal("incoming"), literal("outgoing")]),
      fiat: optional(object({
        currency: string2(),
        value: codec(string2(), number2(), {
          decode: (value) => Number(value),
          encode: (value) => String(value)
        })
      })),
      symbol: string2(),
      type: _null3(),
      value: bigint4()
    })
  ]);
  assetDiffs2.Response = record(hex3(), readonly(array(readonly(tuple([address(), readonly(array(assetDiffs2.AssetDiffAsset))])))));
})(assetDiffs || (assetDiffs = {}));
var authorizeKeys;
(function(authorizeKeys2) {
  authorizeKeys2.Request = readonly(array(WithPermissions));
  authorizeKeys2.Response = readonly(array(object({
    ...WithPermissions.shape,
    /** The hash of the authorized key. */
    hash: hex3()
  })));
})(authorizeKeys || (authorizeKeys = {}));
var feeTotals;
(function(feeTotals2) {
  feeTotals2.Response = record(hex3(), object({
    currency: string2(),
    value: string2()
  }));
})(feeTotals || (feeTotals = {}));
var meta3;
(function(meta4) {
  meta4.Request = object({
    /** The address of the fee payer. */
    feePayer: optional(address()),
    /** The token to pa  for the call bundle. If `None`, defaults to native token (ETH). */
    feeToken: optional(address()),
    /** The nonce for the bundle. */
    nonce: optional(bigint4())
  });
})(meta3 || (meta3 = {}));
var requiredFunds;
(function(requiredFunds3) {
  requiredFunds3.Request = readonly(array(object({
    address: address(),
    value: bigint4()
  })));
})(requiredFunds || (requiredFunds = {}));
var revokeKeys;
(function(revokeKeys2) {
  revokeKeys2.Request = readonly(array(object({
    /** The hash of the key to revoke. */
    hash: hex3()
  })));
  revokeKeys2.Response = readonly(array(object({
    /** The hash of the revoked key. */
    hash: hex3()
  })));
})(revokeKeys || (revokeKeys = {}));

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/preCall.js
var PreCall = object({
  /**
   * The user's address.
   *
   * This can be set to `address(0)`, which allows it to be
   * coalesced to the parent Intent's EOA.
   */
  eoa: address(),
  /**
   * An encoded array of calls, using ERC7579 batch execution encoding.
   *
   * `abi.encode(calls)`, where `calls` is of type `Call[]`.
   * This allows for more efficient safe forwarding to the EOA.
   */
  executionData: hex3(),
  /**
   * Per delegated EOA. Same logic as the `nonce` in Intent.
   *
   * A nonce of `type(uint256).max` skips the check, incrementing,
   * and the emission of the {IntentExecuted} event.
   */
  nonce: hex3(),
  /**
   * The wrapped signature.
   *
   * `abi.encodePacked(innerSignature, keyHash, prehash)`.
   */
  signature: hex3()
});
var Context = object({
  ...PreCall.shape,
  chainId: number4()
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/intent.js
var Intent = union([
  object({
    combinedGas: bigint4(),
    encodedFundTransfers: readonly(array(hex3())),
    encodedPreCalls: readonly(array(hex3())),
    eoa: address(),
    executionData: hex3(),
    expiry: bigint4(),
    funder: address(),
    funderSignature: hex3(),
    isMultichain: boolean2(),
    nonce: bigint4(),
    payer: address(),
    paymentAmount: bigint4(),
    paymentMaxAmount: bigint4(),
    paymentRecipient: address(),
    paymentSignature: hex3(),
    paymentToken: address(),
    settler: address(),
    settlerContext: hex3(),
    signature: hex3(),
    supportedAccountImplementation: address()
  }),
  object({
    /** The combined gas limit for payment, verification, and calling the EOA. */
    combinedGas: bigint4(),
    /** Only relevant for multi chain intents. */
    encodedFundTransfers: readonly(array(hex3())),
    /**
     * Optional array of encoded Intents that will be verified and executed
     * before the validation of the overall Intent.
     *
     * A PreCall will NOT have its gas limit or payment applied.
     * The overall Intent's gas limit and payment will be applied, encompassing all its PreCalls.
     * The execution of a PreCall will check and increment the nonce in the PreCall.
     * If at any point, any PreCall cannot be verified to be correct, or fails in execution,
     * the overall Intent will revert before validation, and execute will return a non-zero error.
     * A PreCall can contain PreCalls, forming a tree structure.
     * The `executionData` tree will be executed in post-order (i.e. left -> right -> current).
     * The `encodedPreCalls` are included in the EIP712 signature, which enables execution order
     * to be enforced on-the-fly even if the nonces are from different sequences.
     */
    encodedPreCalls: readonly(array(hex3())),
    /** Users address. */
    eoa: address(),
    /**
     * An encoded array of calls, using ERC7579 batch execution encoding.
     *
     * The format is `abi.encode(calls)`, where `calls` is an array of type `Call[]`.
     * This allows for more efficient safe forwarding to the EOA.
     */
    executionData: hex3(),
    /** The expiration time of the intent. */
    expiry: bigint4(),
    /** The funder address. */
    funder: address(),
    /** The funder's signature. */
    funderSignature: hex3(),
    /** Whether the intent is a multi-chain intent. */
    isMultichain: boolean2(),
    /** Per delegated EOA.
     *
     * # Memory layout
     *
     * Each nonce has the following memory layout:
     *
     *      ,----------------------------------------------------.
     * bits | 0-191 (192 bits)                | 192-255 (64 bits)|
     *      |---------------------------------|------------------|
     * desc | sequence key                    | sequential nonce |
     *      `----------------.----------------|------------------'
     *                       |
     *                       v
     *      ,-------------------------------------.
     * bits | 0-15 (16 bits)  | 16-191 (176 bits) |
     *      |-------------------------------------|
     * desc | multichain flag | remainder         |
     *      `-------------------------------------'
     *
     * If the upper 16 bits of the sequence key is `0xc1d0`, then the EIP-712 has
     * of the Intent will exlude the chain ID.
     *
     * # Ordering
     *
     * Ordering matters within a sequence key, but not between sequence keys.
     *
     * This means that users who do not care about the order of specific intents
     * can sign their intents using a random sequence key. On the other hand, if
     * they do care about ordering, they would use the same sequence key.
     */
    nonce: bigint4(),
    /**
     * The account paying the payment token.
     * If this is `address(0)`, it defaults to the `eoa`.
     */
    payer: address(),
    /**
     * The payment recipient for the ERC20 token.
     *
     * Excluded from signature. The filler can replace this with their own address.
     *
     * This enables multiple fillers, allowing for competitive filling, better uptime.
     * If `address(0)`, the payment will be accrued by the entry point.
     */
    paymentRecipient: address(),
    /**
     * Optional payment signature to be passed into the `compensate` function
     * on the `payer`. This signature is NOT included in the EIP712 signature.
     */
    paymentSignature: hex3(),
    /** The ERC20 or native token used to pay for gas. */
    paymentToken: address(),
    /**
     * The actual pre payment amount, requested by the filler.
     * MUST be less than or equal to `prePaymentMaxAmount`.
     */
    prePaymentAmount: bigint4(),
    /**
     * The amount of the token to pay, before the call batch is executed.
     * This will be required to be less than `totalPaymentMaxAmount`.
     */
    prePaymentMaxAmount: bigint4(),
    /**
     * The address of the settler.
     */
    settler: address(),
    /**
     * Context data passed to the settler for processing attestations.
     *
     * This data is ABI-encoded and contains information needed by the settler
     * to process the multichain intent (e.g., list of chain IDs).
     */
    settlerContext: hex3(),
    /**
     * The actual total payment amount, requested by the filler.
     * MUST be less than or equal to `totalPaymentMaxAmount`
     */
    signature: hex3(),
    /**
     * Optional. If non-zero, the EOA must use `supportedAccountImplementation`.
     * Otherwise, if left as `address(0)`, any EOA implementation will be supported.
     * This field is NOT included in the EIP712 signature.
     */
    supportedAccountImplementation: address(),
    /**
     * The wrapped signature.
     *
     * The format is `abi.encodePacked(innerSignature, keyHash, prehash)` for most signatures,
     * except if it is signed by the EOA root key, in which case `abi.encodePacked(r, s, v)` is valid as well.
     */
    totalPaymentAmount: bigint4(),
    /**
     * The maximum amount of the token to pay.
     */
    totalPaymentMaxAmount: bigint4()
  })
]);
var Partial = object({
  eoa: address(),
  executionData: hex3(),
  nonce: bigint4()
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/quotes.js
var AssetDeficit = external_exports.object({
  /** Asset address. null represents the native token. */
  address: external_exports.union([address(), external_exports.null()]),
  /** Token decimals. */
  decimals: external_exports.optional(external_exports.number()),
  /** Deficit for the asset. */
  deficit: bigint4(),
  /** Fiat value of the deficit. */
  fiat: external_exports.optional(external_exports.object({ currency: external_exports.string(), value: external_exports.string() })),
  /** Token name. */
  name: external_exports.optional(external_exports.string()),
  /** Required amount for the asset. */
  required: bigint4(),
  /** Token symbol. */
  symbol: external_exports.optional(external_exports.string())
});
var Quote = external_exports.object({
  /** An optional additional authorization address, which would be used to delegate the feepayer */
  additionalAuthorization: external_exports.nullish(external_exports.object({
    address: address(),
    chainId: number4(),
    nonce: number4(),
    r: hex3(),
    s: hex3(),
    yParity: number4()
  })),
  /** Assets missing for the intent to execute. */
  assetDeficits: external_exports.optional(external_exports.array(AssetDeficit)),
  /**
   * An optional unsigned authorization item.
   * The account in `eoa` will be delegated to this address.
   */
  authorizationAddress: external_exports.optional(external_exports.union([address(), external_exports.null()])),
  /** Chain ID the quote is for. */
  chainId: number4(),
  /** The price (in wei) of ETH in the payment token. */
  ethPrice: bigint4(),
  /** Extra payment for e.g L1 DA fee that is paid on top of the execution gas. */
  extraPayment: bigint4(),
  /** The deficit of the fee token. */
  feeTokenDeficit: bigint4(),
  /** The fee estimate for the bundle in the destination chains native token. */
  intent: Intent,
  /** The `Intent` the quote is for. */
  nativeFeeEstimate: external_exports.object({
    /** The maximum fee per gas for the bundle. */
    maxFeePerGas: bigint4(),
    /** The maximum priority fee per gas for the bundle. */
    maxPriorityFeePerGas: bigint4()
  }),
  /** The orchestrator for the quote. */
  orchestrator: address(),
  /** The decimals of the payment token. */
  paymentTokenDecimals: external_exports.number(),
  /** The recommended gas limit for the bundle. */
  txGas: bigint4()
});
var Quotes = external_exports.object({
  /** Merkle root if it's a multichain workflow. */
  multiChainRoot: external_exports.optional(external_exports.union([hex3(), external_exports.null()])),
  /**
   * A quote for each intent.
   *
   * - For a single-chain workflow, this will have exactly one item, the output intent.
   * - For a multi-chain workflow, this will have multiple items, where the last one is the output
   *   intent.
   */
  quotes: external_exports.readonly(external_exports.array(Quote)).check(external_exports.minLength(1)),
  /** The time-to-live (UNIX timestamp) of the quotes. */
  ttl: external_exports.number()
});
var Signed = external_exports.object({
  ...Quotes.shape,
  hash: hex3(),
  r: hex3(),
  s: hex3(),
  v: external_exports.optional(hex3()),
  yParity: external_exports.optional(hex3())
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/token.js
var Token = object({
  address: address(),
  decimals: number2(),
  feeToken: optional(boolean2()),
  interop: optional(boolean2()),
  nativeRate: optional(bigint4()),
  symbol: string2(),
  uid: string2()
});
var Symbol2 = string2().check(_regex(/^[A-Z0-9]+$/));

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/relay/schema/rpc.js
var Authorization = object({
  address: address(),
  chainId: number4(),
  nonce: number4()
});
var SignedAuthorization = object({
  ...Authorization.shape,
  r: hex3(),
  s: hex3(),
  yParity: number4()
});
var Call = object({
  data: optional(hex3()),
  to: address(),
  value: optional(bigint4())
});
var account_getOnrampContactInfo;
(function(account_getOnrampContactInfo3) {
  account_getOnrampContactInfo3.Parameters = object({
    /** Address to get onramp status for. */
    address: address(),
    secret: string2()
  });
  account_getOnrampContactInfo3.Request = object({
    method: literal("account_getOnrampContactInfo"),
    params: readonly(tuple([account_getOnrampContactInfo3.Parameters]))
  });
  account_getOnrampContactInfo3.Response = object({
    email: optional(string2()),
    phone: optional(string2()),
    phoneVerifiedAt: optional(number2())
  });
})(account_getOnrampContactInfo || (account_getOnrampContactInfo = {}));
var account_onrampStatus;
(function(account_onrampStatus3) {
  account_onrampStatus3.Parameters = object({
    /** Address to get onramp status for. */
    address: address()
  });
  account_onrampStatus3.Request = object({
    method: literal("account_onrampStatus"),
    params: readonly(tuple([account_onrampStatus3.Parameters]))
  });
  account_onrampStatus3.Response = object({
    email: optional(number2()),
    phone: optional(number2())
  });
})(account_onrampStatus || (account_onrampStatus = {}));
var account_resendVerifyPhone;
(function(account_resendVerifyPhone3) {
  account_resendVerifyPhone3.Parameters = object({
    /** Phone to set for wallet address. */
    phone: string2(),
    /** Address to set phone. */
    walletAddress: address()
  });
  account_resendVerifyPhone3.Request = object({
    method: literal("account_resendVerifyPhone"),
    params: readonly(tuple([account_resendVerifyPhone3.Parameters]))
  });
  account_resendVerifyPhone3.Response = _null3();
})(account_resendVerifyPhone || (account_resendVerifyPhone = {}));
var account_setEmail;
(function(account_setEmail3) {
  account_setEmail3.Parameters = object({
    /** Email to set for wallet address. */
    email: string2().check(_regex(/^.*@.*$/)),
    /** Address to set email. */
    walletAddress: address()
  });
  account_setEmail3.Request = object({
    method: literal("account_setEmail"),
    params: readonly(tuple([account_setEmail3.Parameters]))
  });
  account_setEmail3.Response = _null3();
})(account_setEmail || (account_setEmail = {}));
var account_setPhone;
(function(account_setPhone3) {
  account_setPhone3.Parameters = object({
    /** Phone to set for wallet address. */
    phone: string2(),
    /** Address to set phone. */
    walletAddress: address()
  });
  account_setPhone3.Request = object({
    method: literal("account_setPhone"),
    params: readonly(tuple([account_setPhone3.Parameters]))
  });
  account_setPhone3.Response = _null3();
})(account_setPhone || (account_setPhone = {}));
var account_verifyEmail;
(function(account_verifyEmail3) {
  account_verifyEmail3.Parameters = object({
    chainId: number4(),
    email: string2(),
    signature: hex3(),
    token: string2(),
    walletAddress: address()
  });
  account_verifyEmail3.Request = object({
    method: literal("account_verifyEmail"),
    params: readonly(tuple([account_verifyEmail3.Parameters]))
  });
  account_verifyEmail3.Response = _null3();
})(account_verifyEmail || (account_verifyEmail = {}));
var account_verifyPhone;
(function(account_verifyPhone3) {
  account_verifyPhone3.Parameters = object({
    code: string2(),
    phone: string2(),
    walletAddress: address()
  });
  account_verifyPhone3.Request = object({
    method: literal("account_verifyPhone"),
    params: readonly(tuple([account_verifyPhone3.Parameters]))
  });
  account_verifyPhone3.Response = _null3();
})(account_verifyPhone || (account_verifyPhone = {}));
var health;
(function(health3) {
  health3.Request = object({
    method: literal("health"),
    params: _undefined3()
  });
  health3.Response = object({
    quoteSigner: address(),
    status: string2(),
    version: string2()
  });
})(health || (health = {}));
var wallet_addFaucetFunds;
(function(wallet_addFaucetFunds2) {
  wallet_addFaucetFunds2.Parameters = object({
    address: address(),
    chainId: number4(),
    tokenAddress: address(),
    value: bigint4()
  });
  wallet_addFaucetFunds2.Request = object({
    method: literal("wallet_addFaucetFunds"),
    params: readonly(tuple([wallet_addFaucetFunds2.Parameters]))
  });
  wallet_addFaucetFunds2.Response = object({
    message: optional(string2()),
    transactionHash: hex3()
  });
})(wallet_addFaucetFunds || (wallet_addFaucetFunds = {}));
var wallet_getAccounts;
(function(wallet_getAccounts2) {
  wallet_getAccounts2.Parameters = object({
    /** Target chain ID. */
    chainId: number4(),
    /** Key identifier. */
    id: hex3()
  });
  wallet_getAccounts2.Request = object({
    method: literal("wallet_getAccounts"),
    params: readonly(tuple([wallet_getAccounts2.Parameters]))
  });
  wallet_getAccounts2.Response = readonly(array(object({
    /** Account address. */
    address: address(),
    /** Keys authorized on the account. */
    keys: authorizeKeys.Response
  })));
})(wallet_getAccounts || (wallet_getAccounts = {}));
var wallet_getAuthorization;
(function(wallet_getAuthorization2) {
  wallet_getAuthorization2.Parameters = object({
    address: address()
  });
  wallet_getAuthorization2.Request = object({
    method: literal("wallet_getAuthorization"),
    params: readonly(tuple([wallet_getAuthorization2.Parameters]))
  });
  wallet_getAuthorization2.Response = object({
    authorization: SignedAuthorization,
    data: hex3(),
    to: address()
  });
})(wallet_getAuthorization || (wallet_getAuthorization = {}));
var wallet_getCapabilities;
(function(wallet_getCapabilities3) {
  wallet_getCapabilities3.Request = object({
    method: literal("wallet_getCapabilities"),
    params: optional(tuple([readonly(array(number2()))]))
  });
  const VersionedContract = object({
    address: address(),
    version: optional(union([string2(), _null3()]))
  });
  wallet_getCapabilities3.Response = record(hex3(), object({
    contracts: object({
      /** Account implementation address. */
      accountImplementation: VersionedContract,
      /** Account proxy address. */
      accountProxy: VersionedContract,
      /** Legacy account implementation address. */
      legacyAccountImplementations: readonly(array(VersionedContract)),
      /** Legacy orchestrator address. */
      legacyOrchestrators: readonly(array(union([
        object({
          orchestrator: VersionedContract,
          simulator: VersionedContract
        }),
        VersionedContract
      ]))),
      /** Orchestrator address. */
      orchestrator: VersionedContract,
      /** Simulator address. */
      simulator: VersionedContract
    }),
    fees: object({
      /** Fee recipient address. */
      quoteConfig: object({
        /** Sets a constant rate for the price oracle. Used for testing. */
        constantRate: optional(union([number2(), _null3()])),
        /** Gas estimate configuration. */
        gas: optional(object({
          /** Extra buffer added to Intent gas estimates. */
          intentBuffer: optional(number2()),
          /** Extra buffer added to transaction gas estimates. */
          txBuffer: optional(number2())
        })),
        /** The lifetime of a price rate. */
        rateTtl: number2(),
        /** The lifetime of a fee quote. */
        ttl: number2()
      }),
      /** Quote configuration. */
      recipient: address(),
      /** Tokens the fees can be paid in. */
      tokens: readonly(array(Token))
    })
  }));
})(wallet_getCapabilities || (wallet_getCapabilities = {}));
var wallet_getAssets;
(function(wallet_getAssets3) {
  const AssetType = union([
    literal("native"),
    literal("erc20"),
    literal("erc721"),
    string2()
  ]);
  wallet_getAssets3.Parameters = object({
    account: address(),
    assetFilter: optional(record(hex3(), readonly(array(object({
      address: union([address(), literal("native")]),
      type: AssetType
    }))))),
    assetTypeFilter: optional(readonly(array(AssetType))),
    chainFilter: optional(readonly(array(number4())))
  });
  wallet_getAssets3.Request = object({
    method: literal("wallet_getAssets"),
    params: readonly(tuple([wallet_getAssets3.Parameters]))
  });
  wallet_getAssets3.Price = object({
    currency: string2(),
    value: codec(string2(), number2(), {
      decode: (value) => Number(value),
      encode: (value) => String(value)
    })
  });
  wallet_getAssets3.Response = record(string2(), readonly(array(oneOf([
    object({
      address: address(),
      balance: bigint4(),
      metadata: nullable(object({
        decimals: number2(),
        fiat: nullish2(wallet_getAssets3.Price),
        name: string2(),
        symbol: string2()
      })),
      type: literal("erc20")
    }),
    object({
      address: nullable(literal("native")),
      balance: bigint4(),
      metadata: nullable(object({
        decimals: number2(),
        fiat: nullish2(wallet_getAssets3.Price),
        name: optional(string2()),
        symbol: optional(string2())
      })),
      type: literal("native")
    })
  ]))));
})(wallet_getAssets || (wallet_getAssets = {}));
var wallet_getCallsStatus;
(function(wallet_getCallsStatus3) {
  wallet_getCallsStatus3.Request = object({
    method: literal("wallet_getCallsStatus"),
    params: readonly(tuple([hex3()]))
  });
  wallet_getCallsStatus3.Response = object({
    id: string2(),
    receipts: optional(readonly(array(object({
      blockHash: hex3(),
      blockNumber: number4(),
      chainId: number4(),
      gasUsed: number4(),
      logs: readonly(array(object({
        address: address(),
        data: hex3(),
        topics: readonly(array(hex3()))
      }))),
      status: hex3(),
      transactionHash: hex3()
    })))),
    status: number2()
  });
})(wallet_getCallsStatus || (wallet_getCallsStatus = {}));
var wallet_getKeys;
(function(wallet_getKeys3) {
  wallet_getKeys3.Parameters = object({
    /** The address to get the keys for. */
    address: address(),
    /** Target chain IDs. */
    chainIds: optional(readonly(array(number4())))
  });
  wallet_getKeys3.Request = object({
    method: literal("wallet_getKeys"),
    params: readonly(tuple([wallet_getKeys3.Parameters]))
  });
  wallet_getKeys3.Response = record(hex3(), authorizeKeys.Response);
})(wallet_getKeys || (wallet_getKeys = {}));
var wallet_prepareCalls;
(function(wallet_prepareCalls3) {
  wallet_prepareCalls3.Capabilities = object({
    /** Keys to authorize on the account. */
    authorizeKeys: optional(authorizeKeys.Request),
    /** Metadata for the call bundle. */
    meta: meta3.Request,
    /** Whether the call bundle is to be considered a preCall. */
    preCall: optional(boolean2()),
    /** Optional preCalls to execute before signature verification. */
    preCalls: optional(readonly(array(PreCall))),
    /** Required funds on the target chain. */
    requiredFunds: optional(requiredFunds.Request),
    /** Keys to revoke on the account. */
    revokeKeys: optional(revokeKeys.Request)
  });
  wallet_prepareCalls3.ResponseCapabilities = object({
    /** Asset diff. */
    assetDiffs: optional(assetDiffs.Response),
    /** Keys authorized on the account. */
    authorizeKeys: nullish2(authorizeKeys.Response),
    /** Digest for the fee payer. */
    feePayerDigest: optional(hex3()),
    /** Fee signature. */
    feeSignature: optional(hex3()),
    /** Fee totals. */
    feeTotals: optional(feeTotals.Response),
    /** Keys revoked on the account. */
    revokeKeys: nullish2(revokeKeys.Response)
  });
  wallet_prepareCalls3.Parameters = object({
    /** Capabilities for the account. */
    calls: readonly(array(Call)),
    /** The calls to prepare. */
    capabilities: wallet_prepareCalls3.Capabilities,
    /** The chain ID of the call bundle. */
    chainId: number4(),
    /** The address of the account to prepare the calls for. */
    from: optional(address()),
    /** Key that will be used to sign the call bundle. */
    key: optional(object({
      prehash: boolean2(),
      publicKey: hex3(),
      type: Key.shape.type
    }))
  });
  wallet_prepareCalls3.Request = object({
    method: literal("wallet_prepareCalls"),
    params: readonly(tuple([wallet_prepareCalls3.Parameters]))
  });
  wallet_prepareCalls3.Response = object({
    /** Capabilities. */
    capabilities: wallet_prepareCalls3.ResponseCapabilities,
    /** Quote for the call bundle. */
    context: object({
      /** Quote for the call bundle. */
      preCall: optional(partial2(Context)),
      /** The call bundle. */
      quote: optional(partial2(Signed))
    }),
    /** Digest to sign over. */
    digest: hex3(),
    /** Key that will be used to sign the call bundle. */
    key: nullish2(object({
      prehash: boolean2(),
      publicKey: hex3(),
      type: Key.shape.type
    })),
    /** Signature of the response for verifying the integrity of Relay response. */
    signature: hex3(),
    /** EIP-712 typed data digest. */
    typedData: object({
      domain: union([
        object({
          chainId: union([number4(), number2()]),
          name: string2(),
          verifyingContract: address(),
          version: string2()
        }),
        object({})
      ]),
      message: record(string2(), unknown()),
      primaryType: string2(),
      types: record(string2(), unknown())
    })
  });
})(wallet_prepareCalls || (wallet_prepareCalls = {}));
var wallet_prepareUpgradeAccount;
(function(wallet_prepareUpgradeAccount3) {
  wallet_prepareUpgradeAccount3.Capabilities = object({
    /** Keys to authorize on the account. */
    authorizeKeys: authorizeKeys.Request
  });
  wallet_prepareUpgradeAccount3.Parameters = object({
    /** Address of the EOA to upgrade. */
    address: address(),
    /** Chain ID to initialize the account on. */
    // TODO: `u.number()`
    capabilities: wallet_prepareUpgradeAccount3.Capabilities,
    /** Capabilities. */
    chainId: optional(number2()),
    /** Contract address to delegate to. */
    delegation: address()
  });
  wallet_prepareUpgradeAccount3.Request = object({
    method: literal("wallet_prepareUpgradeAccount"),
    params: readonly(tuple([wallet_prepareUpgradeAccount3.Parameters]))
  });
  wallet_prepareUpgradeAccount3.Response = object({
    /** Capabilities. */
    capabilities: wallet_prepareUpgradeAccount3.Capabilities,
    /** Chain ID to initialize the account on. */
    chainId: number4(),
    /** Context. */
    context: object({
      /** Address of the EOA to upgrade. */
      address: address(),
      /** Unsigned authorization object to be signed by the EOA root key. */
      authorization: Authorization,
      /** Chain ID to initialize the account on. */
      chainId: number4(),
      /** Unsigned pre-call to be signed by the EOA root key. */
      preCall: PreCall
    }),
    /** Digests to sign over. */
    digests: object({
      /** Digest of the authorization object. */
      auth: hex3(),
      /** Digest of the pre-call. */
      exec: hex3()
    }),
    /** EIP-712 typed data digest. */
    typedData: object({
      domain: union([
        object({
          chainId: union([number4(), number2()]),
          name: string2(),
          verifyingContract: address(),
          version: string2()
        }),
        object({})
      ]),
      message: record(string2(), unknown()),
      primaryType: string2(),
      types: record(string2(), unknown())
    })
  });
})(wallet_prepareUpgradeAccount || (wallet_prepareUpgradeAccount = {}));
var wallet_feeTokens;
(function(wallet_feeTokens2) {
  wallet_feeTokens2.Request = object({
    method: literal("wallet_feeTokens"),
    params: optional(_undefined3())
  });
  wallet_feeTokens2.Response = record(hex3(), readonly(array(object({
    address: address(),
    decimals: number2(),
    nativeRate: optional(bigint4()),
    symbol: string2()
  }))));
})(wallet_feeTokens || (wallet_feeTokens = {}));
var wallet_sendPreparedCalls;
(function(wallet_sendPreparedCalls3) {
  wallet_sendPreparedCalls3.Parameters = object({
    /** Capabilities. */
    capabilities: optional(object({
      /** Fee signature. */
      feeSignature: optional(hex3())
    })),
    /** Quote for the call bundle. */
    context: object({
      /** The call bundle. */
      preCall: optional(partial2(Context)),
      /** Quote for the call bundle. */
      quote: optional(partial2(Signed))
    }),
    /** Key that was used to sign the call bundle. */
    key: optional(object({
      prehash: boolean2(),
      publicKey: hex3(),
      type: Key.shape.type
    })),
    /** Signature. */
    signature: hex3()
  });
  wallet_sendPreparedCalls3.Request = object({
    method: literal("wallet_sendPreparedCalls"),
    params: readonly(tuple([wallet_sendPreparedCalls3.Parameters]))
  });
  wallet_sendPreparedCalls3.Response = object({
    /** The ID of the call bundle. */
    id: hex3()
  });
})(wallet_sendPreparedCalls || (wallet_sendPreparedCalls = {}));
var wallet_upgradeAccount;
(function(wallet_upgradeAccount3) {
  wallet_upgradeAccount3.Parameters = object({
    /** Context. */
    context: object({
      /** Address of the EOA to upgrade. */
      address: address(),
      /** Unsigned authorization object to be signed by the EOA root key. */
      authorization: Authorization,
      /** Chain ID to initialize the account on. */
      chainId: number4(),
      /** Unsigned pre-call to be signed by the EOA root key. */
      preCall: PreCall
    }),
    /** Signatures of the `wallet_prepareUpgradeAccount` digests. */
    signatures: object({
      auth: hex3(),
      exec: hex3()
    })
  });
  wallet_upgradeAccount3.Request = object({
    method: literal("wallet_upgradeAccount"),
    params: readonly(tuple([wallet_upgradeAccount3.Parameters]))
  });
  wallet_upgradeAccount3.Response = _undefined3();
})(wallet_upgradeAccount || (wallet_upgradeAccount = {}));
var wallet_verifySignature;
(function(wallet_verifySignature3) {
  wallet_verifySignature3.Parameters = object({
    /** Account address. */
    address: hex3(),
    /** Chain ID of the account with the given key configured. */
    chainId: number4(),
    /** Digest of the message to verify. */
    digest: hex3(),
    /** Signature to verify. */
    signature: hex3()
  });
  wallet_verifySignature3.Request = object({
    method: literal("wallet_verifySignature"),
    params: readonly(tuple([wallet_verifySignature3.Parameters]))
  });
  wallet_verifySignature3.Response = object({
    /** Proof that can be used to verify the signature. */
    proof: nullish2(object({
      /** Address of an account (either delegated or stored) that the signature was verified against. */
      account: address(),
      /** Initialization precall. Provided, if account is a stored account which has not been delegated. */
      initPreCall: nullish2(PreCall),
      /** The key hash that signed the digest. */
      keyHash: hex3()
    })),
    /** Whether the signature is valid. */
    valid: boolean2()
  });
})(wallet_verifySignature || (wallet_verifySignature = {}));

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/internal/relayActions.js
async function getAuthorization(client, parameters) {
  try {
    const method = "wallet_getAuthorization";
    const result = await withCache(() => client.request({
      method,
      params: [
        encode(wallet_getAuthorization.Parameters, parameters)
      ]
    }), { cacheKey: `${client.uid}.${method}.${parameters.address}` });
    return decode(wallet_getAuthorization.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function getCapabilities(client, options = {}) {
  const chainIds = (() => {
    if (options.chainId)
      return [options.chainId];
    if (options.chainIds === "all")
      return void 0;
    if (options.chainIds)
      return options.chainIds;
    return [client.chain.id];
  })();
  try {
    const method = "wallet_getCapabilities";
    const result = await withCache(() => client.request({
      method,
      params: chainIds ? [chainIds] : void 0
    }, {
      retryCount: 0
    }), {
      cacheKey: `${client.uid}.${method}.${chainIds?.join(",")}`
    });
    const parsed = (() => {
      if (options.raw)
        return result;
      return decode(wallet_getCapabilities.Response, result);
    })();
    if (options.chainIds)
      return parsed;
    return Object.values(parsed)[0];
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function getAssets(client, parameters) {
  const { account, assetFilter, assetTypeFilter, chainFilter } = parameters;
  try {
    const method = "wallet_getAssets";
    const result = await client.request({
      method,
      params: [
        encode(wallet_getAssets.Parameters, {
          account,
          assetFilter,
          assetTypeFilter,
          chainFilter
        })
      ]
    });
    const value = decode(wallet_getAssets.Response, result);
    const decoded = Object.entries(value).reduce((acc, [key, value2]) => {
      acc[toNumber(key)] = value2;
      return acc;
    }, {});
    const aggregated = {};
    for (const value2 of Object.values(decoded)) {
      for (const item of value2) {
        const key = JSON.stringify(item.metadata);
        aggregated[key] = {
          ...item,
          balance: item.balance + (aggregated[key]?.balance ?? 0n)
        };
      }
    }
    return {
      ...decoded,
      "0": Object.values(aggregated)
    };
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function addFaucetFunds(client, parameters) {
  const { address: address2, chain = client.chain, tokenAddress, value } = parameters;
  try {
    const method = "wallet_addFaucetFunds";
    const result = await client.request({
      method,
      params: [
        encode(wallet_addFaucetFunds.Parameters, {
          address: address2,
          chainId: chain?.id,
          tokenAddress,
          value
        })
      ]
    }, {
      retryCount: 0
    });
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    return result;
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function getCallsStatus(client, parameters) {
  const { id } = parameters;
  try {
    const method = "wallet_getCallsStatus";
    const result = await client.request({
      method,
      params: [id]
    });
    return decode(wallet_getCallsStatus.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function getKeys(client, parameters) {
  const { address: address2, chainIds } = parameters;
  try {
    const method = "wallet_getKeys";
    const result = await client.request({
      method,
      params: [
        encode(wallet_getKeys.Parameters, {
          address: address2,
          chainIds
        })
      ]
    });
    return decode(wallet_getKeys.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
async function health2(client) {
  const method = "health";
  const result = await withCache(() => client.request({
    method
  }), { cacheKey: `${client.uid}.${method}` });
  return decode(health.Response, result);
}
async function prepareCalls(client, parameters) {
  const { address: address2, capabilities, chain = client.chain, key } = parameters;
  const calls = parameters.calls.map((call2) => {
    return {
      data: call2.abi ? encodeData2(fromAbi2(call2.abi, call2.functionName), call2.args) : call2.data ?? "0x",
      to: call2.to,
      value: call2.value ?? 0n
    };
  });
  try {
    const method = "wallet_prepareCalls";
    const result = await client.request({
      method,
      params: [
        encode(wallet_prepareCalls.Parameters, {
          calls,
          capabilities: {
            ...capabilities,
            meta: {
              ...capabilities?.meta
            }
          },
          chainId: chain?.id,
          from: address2,
          key: key ? {
            prehash: key.prehash,
            publicKey: key.publicKey,
            type: key.type
          } : void 0
        })
      ]
    }, {
      retryCount: 0
    });
    return Object.assign(decode(wallet_prepareCalls.Response, result), { _raw: result });
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48, { calls: parameters.calls });
    throw error48;
  }
}
async function prepareUpgradeAccount(client, parameters) {
  const { address: address2, chain = client.chain, delegation, ...capabilities } = parameters;
  try {
    const method = "wallet_prepareUpgradeAccount";
    const result = await client.request({
      method,
      params: [
        encode(wallet_prepareUpgradeAccount.Parameters, normalizeValue({
          address: address2,
          capabilities,
          chainId: chain?.id,
          delegation
        }))
      ]
    }, {
      retryCount: 0
    });
    return decode(wallet_prepareUpgradeAccount.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function sendPreparedCalls(client, parameters) {
  const { capabilities, context, key, signature } = parameters;
  try {
    const method = "wallet_sendPreparedCalls";
    const result = await client.request({
      method,
      params: [
        encode(wallet_sendPreparedCalls.Parameters, {
          capabilities,
          context: {
            preCall: context.preCall,
            quote: context.quote
          },
          key: key ? {
            prehash: key.prehash,
            publicKey: key.publicKey,
            type: key.type
          } : void 0,
          signature
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(wallet_sendPreparedCalls.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function getOnrampContactInfo(client, parameters) {
  const { address: address2, secret } = parameters;
  try {
    const method = "account_getOnrampContactInfo";
    const result = await client.request({
      method,
      params: [
        encode(account_getOnrampContactInfo.Parameters, {
          address: address2,
          secret
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_getOnrampContactInfo.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function onrampStatus(client, parameters) {
  const { address: address2 } = parameters;
  try {
    const method = "account_onrampStatus";
    const result = await client.request({
      method,
      params: [
        encode(account_onrampStatus.Parameters, {
          address: address2
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_onrampStatus.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function resendVerifyPhone(client, parameters) {
  const { phone, walletAddress } = parameters;
  try {
    const method = "account_resendVerifyPhone";
    const result = await client.request({
      method,
      params: [
        encode(account_resendVerifyPhone.Parameters, {
          phone,
          walletAddress
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_resendVerifyPhone.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function setEmail(client, parameters) {
  const { email: email3, walletAddress } = parameters;
  try {
    const method = "account_setEmail";
    const result = await client.request({
      method,
      params: [
        encode(account_setEmail.Parameters, {
          email: email3,
          walletAddress
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_setEmail.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function setPhone(client, parameters) {
  const { phone, walletAddress } = parameters;
  try {
    const method = "account_setPhone";
    const result = await client.request({
      method,
      params: [
        encode(account_setPhone.Parameters, {
          phone,
          walletAddress
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_setPhone.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function upgradeAccount(client, parameters) {
  const { context, signatures } = parameters;
  try {
    const method = "wallet_upgradeAccount";
    await client.request({
      method,
      params: [
        encode(wallet_upgradeAccount.Parameters, {
          context,
          signatures
        })
      ]
    }, {
      retryCount: 0
    });
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function verifyEmail(client, parameters) {
  const { chainId, email: email3, signature, token, walletAddress } = parameters;
  try {
    const method = "account_verifyEmail";
    const result = await client.request({
      method,
      params: [
        encode(account_verifyEmail.Parameters, {
          chainId,
          email: email3,
          signature,
          token,
          walletAddress
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_verifyEmail.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function verifyPhone(client, parameters) {
  const { code, phone, walletAddress } = parameters;
  try {
    const method = "account_verifyPhone";
    const result = await client.request({
      method,
      params: [
        encode(account_verifyPhone.Parameters, {
          code,
          phone,
          walletAddress
        })
      ]
    }, {
      retryCount: 0
    });
    return decode(account_verifyPhone.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    parseExecutionError(error48);
    throw error48;
  }
}
async function verifyPrepareCallsResponse(client, parameters) {
  const { signature } = parameters;
  const { signature: _, capabilities: { feeSignature: __, ...capabilities }, ...response } = parameters.response;
  const sorted = sortKeys({ capabilities, ...response });
  const payload = keccak256(fromString(JSON.stringify(sorted)));
  const address2 = recoverAddress({
    payload,
    signature: fromHex3(signature)
  });
  const { quoteSigner } = await health2(client);
  return address2 === quoteSigner;
}
async function verifySignature(client, parameters) {
  const { address: address2, chain = client.chain, digest, signature } = parameters;
  try {
    async function fallback2() {
      const valid = await verifyHash(client, {
        address: address2,
        hash: digest,
        signature
      });
      return {
        proof: null,
        valid
      };
    }
    const method = "wallet_verifySignature";
    const result = await (async () => {
      const result2 = await client.request({
        method,
        params: [
          encode(wallet_verifySignature.Parameters, {
            address: address2,
            chainId: chain?.id,
            digest,
            signature
          })
        ]
      }, {
        retryCount: 0
      }).catch(fallback2);
      if (result2.valid)
        return result2;
      return fallback2();
    })();
    return decode(wallet_verifySignature.Response, result);
  } catch (error48) {
    parseSchemaError(error48);
    throw error48;
  }
}
function parseExecutionError(e, { calls } = {}) {
  if (!(e instanceof BaseError))
    return;
  const getAbiError = (error49) => {
    try {
      if (error49.name === "ContractFunctionExecutionError") {
        const data2 = error49.cause.name === "ContractFunctionRevertedError" ? error49.cause.data : void 0;
        if (data2)
          return fromAbi3([data2.abiItem], data2.errorName);
      }
      const cause = error49.walk((e2) => !(e2 instanceof Error) && e2.code === 3);
      if (!cause)
        return void 0;
      const { data, message } = cause;
      if (data === "0xd0d5039b")
        return from15("error Unauthorized()");
      return {
        inputs: [],
        name: (message ?? data).split("(")[0],
        type: "error"
      };
    } catch {
      return void 0;
    }
  };
  const error48 = getExecuteError(e, {
    calls: calls ?? []
  });
  const abiError = getAbiError(error48);
  if (error48 === e && !abiError)
    return;
  throw new ExecutionError(Object.assign(error48, { abiError }));
}
function sortKeys(value) {
  if (typeof value === "object" && value !== null) {
    if (Array.isArray(value))
      return value.map(sortKeys);
    const result = {};
    for (const key of Object.keys(value).sort())
      result[key] = sortKeys(value[key]);
    return result;
  }
  return value;
}
function parseSchemaError(e) {
  if (e.name === "$ZodError")
    throw toValidationError(e);
}
var ExecutionError = class extends BaseError2 {
  constructor(cause) {
    super("An error occurred while executing calls.", {
      cause,
      metaMessages: [cause.abiError && "Reason: " + cause.abiError.name].filter(Boolean)
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Rpc.ExecutionError"
    });
    Object.defineProperty(this, "abiError", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.abiError = cause.abiError;
  }
};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Transport.js
var Transport_exports = {};
__export(Transport_exports, {
  fallback: () => fallback,
  http: () => http,
  relayProxy: () => relayProxy,
  relayUrls: () => relayUrls,
  webSocket: () => webSocket
});
var relayUrls = {
  anvil: { http: "http://localhost:9119" },
  prod: { http: "https://rpc.porto.sh" },
  stg: { http: "https://stg-rpc.porto.sh" }
};
function relayProxy(transports) {
  return (config2) => {
    const transport_public = transports.public(config2);
    const transport_relay = transports.relay(config2);
    return createTransport({
      key: relayProxy.type,
      name: "Relay Proxy",
      async request({ method, params }, options) {
        if (isRelay(method))
          return transport_relay.request({ method, params }, options);
        return transport_public.request({ method, params }, options);
      },
      type: relayProxy.type
    });
  };
}
(function(relayProxy2) {
  relayProxy2.type = "relayProxy";
})(relayProxy || (relayProxy = {}));
function isRelay(method) {
  if (method.startsWith("wallet_"))
    return true;
  if (method.startsWith("account_"))
    return true;
  if (method === "health")
    return true;
  return false;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/RelayClient.js
var clientCache = /* @__PURE__ */ new Map();
function fromPorto(porto, config2 = {}) {
  const { config: config_, id, store } = porto._internal;
  const { chains, relay: relay2 } = config_;
  const state = store.getState();
  const chainId = config2.chainId ?? state.chainIds[0];
  const chain = chains.find((chain2) => chain2.id === chainId);
  if (!chain)
    throw new Error([
      "Could not find a compatible Porto chain on the given chain configuration.",
      "",
      `Provided chains: [${chains.map((chain2) => `${chain2.name} (id: ${chain2.id})`).join(", ")}]`,
      `Needed chain (id): ${chainId}`,
      "Please add this chain (id) to your chain configuration."
    ].join("\n"));
  const transport = relayProxy({
    public: config_.transports[chain.id] ?? fallback(chain.rpcUrls.default.http.map((url2) => http(url2))),
    relay: relay2
  });
  const key = [id, stringify(chain)].filter(Boolean).join(":");
  if (clientCache.has(key))
    return clientCache.get(key);
  const client = createClient({
    ...config2,
    chain,
    pollingInterval: 1e3,
    transport
  });
  clientCache.set(key, client);
  return client;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/key.js
var Base = object({
  /** Chain ID the key belongs to. If not provided, the key is valid on all chains. */
  chainId: optional(number4()),
  /** The expiry of the key. */
  expiry: number4(),
  /** The hash of the key. */
  hash: hex3(),
  /** The id of the key. */
  id: hex3(),
  /** Whether digests should be prehashed. */
  prehash: optional(boolean2()),
  /** Public key. */
  publicKey: hex3(),
  /** Role. */
  role: union([literal("admin"), literal("session")]),
  /** Key type. */
  type: union([
    literal("address"),
    literal("p256"),
    literal("secp256k1"),
    literal("webauthn-p256")
  ])
});
var CallPermissions = readonly(array(oneOf([
  object({
    signature: string2(),
    to: address()
  }),
  object({
    signature: string2()
  }),
  object({
    to: address()
  })
])).check(_minLength(1)));
var FeeToken = object({
  limit: union([
    templateLiteral([number2(), ".", number2()]),
    templateLiteral([number2()])
  ]).check(_regex(/^\d+(\.\d+)?$/)),
  symbol: optional(union([literal("native"), Symbol2]))
});
var SignatureVerificationPermission = object({
  addresses: readonly(array(address()))
});
var SpendPermissions = readonly(array(object({
  limit: bigint4(),
  period: union([
    literal("minute"),
    literal("hour"),
    literal("day"),
    literal("week"),
    literal("month"),
    literal("year")
  ]),
  token: optional(address())
})));
var Permissions = object({
  calls: optional(CallPermissions),
  signatureVerification: optional(SignatureVerificationPermission),
  spend: optional(SpendPermissions)
});
var WithPermissions2 = object({
  ...Base.shape,
  feeToken: optional(nullable(FeeToken)),
  permissions: optional(Permissions)
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/permissions.js
var Permissions2 = object({
  address: address(),
  chainId: optional(number4()),
  expiry: number2(),
  id: hex3(),
  key: pick2(Base, { publicKey: true, type: true }),
  permissions: object({
    calls: CallPermissions,
    signatureVerification: optional(SignatureVerificationPermission),
    spend: optional(SpendPermissions)
  })
});
var Request = object({
  address: optional(address()),
  chainId: optional(number4()),
  expiry: number2().check(_gte(1)),
  feeToken: nullable(FeeToken),
  key: optional(pick2(Base, { publicKey: true, type: true })),
  permissions: object({
    calls: CallPermissions,
    signatureVerification: optional(SignatureVerificationPermission),
    spend: optional(SpendPermissions)
  })
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/permissions.js
var Schema = Permissions2;
function fromKey(key, options) {
  const { chainId, expiry, permissions: permissions2, id, publicKey, type } = key;
  const { address: address2 } = options;
  return {
    address: address2,
    chainId,
    expiry,
    id,
    key: {
      publicKey,
      type
    },
    permissions: permissions2 ?? {}
  };
}
function toKey(permissions2) {
  const { chainId, expiry, key } = permissions2;
  return from13({
    chainId,
    expiry,
    permissions: permissions2.permissions ?? {},
    publicKey: key.publicKey,
    role: "session",
    type: key.type
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/capabilities.js
var atomic;
(function(atomic2) {
  atomic2.GetCapabilitiesResponse = object({
    status: union([literal("supported"), literal("unsupported")])
  });
})(atomic || (atomic = {}));
var createAccount;
(function(createAccount3) {
  createAccount3.Request = union([
    boolean2(),
    object({
      chainId: optional(number4()),
      label: optional(string2())
    })
  ]);
})(createAccount || (createAccount = {}));
var signInWithEthereum;
(function(signInWithEthereum2) {
  signInWithEthereum2.Request = oneOf([
    /** Standard EIP-4361 request object. */
    object({
      chainId: optional(number2()),
      domain: optional(string2()),
      expirationTime: optional(date2()),
      issuedAt: optional(date2()),
      nonce: string2(),
      notBefore: optional(date2()),
      requestId: optional(string2()),
      resources: optional(readonly(array(string2()))),
      scheme: optional(string2()),
      statement: optional(string2()),
      uri: optional(string2()),
      version: optional(literal("1"))
    }),
    /**
     * EIP-4361 request object with an additional `authUrl` field, used
     * to fetch and infer the `nonce`.
     */
    object({
      authUrl: union([
        string2(),
        object({
          logout: string2(),
          nonce: string2(),
          verify: string2()
        })
      ]),
      chainId: optional(number4()),
      domain: optional(string2()),
      expirationTime: optional(date2()),
      issuedAt: optional(date2()),
      notBefore: optional(date2()),
      requestId: optional(string2()),
      resources: optional(readonly(array(string2()))),
      scheme: optional(string2()),
      statement: optional(string2()),
      uri: optional(string2()),
      version: optional(literal("1"))
    })
  ]);
  signInWithEthereum2.Response = object({
    message: string2(),
    signature: hex3(),
    token: optional(string2())
  });
})(signInWithEthereum || (signInWithEthereum = {}));
var feeToken;
(function(feeToken2) {
  feeToken2.GetCapabilitiesResponse = object({
    supported: boolean2(),
    tokens: readonly(array(Token))
  });
  feeToken2.Request = union([Symbol2, address()]);
})(feeToken || (feeToken = {}));
var grantPermissions;
(function(grantPermissions2) {
  grantPermissions2.Request = Request;
})(grantPermissions || (grantPermissions = {}));
var merchant;
(function(merchant2) {
  merchant2.GetCapabilitiesResponse = object({
    supported: boolean2()
  });
})(merchant || (merchant = {}));
var permissions;
(function(permissions2) {
  permissions2.GetCapabilitiesResponse = object({
    supported: boolean2()
  });
  permissions2.Request = object({
    id: optional(union([hex3(), _null3()]))
  });
  permissions2.Response = readonly(array(Permissions2));
})(permissions || (permissions = {}));
var preCalls;
(function(preCalls2) {
  preCalls2.Request = readonly(array(object({
    context: unknown(),
    signature: hex3()
  })));
  preCalls2.Response = preCalls2.Request;
})(preCalls || (preCalls = {}));
var merchantUrl;
(function(merchantUrl2) {
  merchantUrl2.Request = string2();
})(merchantUrl || (merchantUrl = {}));
var requiredFunds2;
(function(requiredFunds3) {
  requiredFunds3.GetCapabilitiesResponse = object({
    supported: boolean2(),
    tokens: readonly(array(Token))
  });
  requiredFunds3.Request = readonly(array(oneOf([
    object({
      address: address(),
      value: bigint4()
    }),
    object({
      symbol: Symbol2,
      value: union([
        templateLiteral([number2(), ".", number2()]),
        templateLiteral([number2()])
      ]).check(_regex(/^\d+(\.\d+)?$/))
    })
  ])));
})(requiredFunds2 || (requiredFunds2 = {}));

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/rpc.js
var KeyWithCredentialId = object({
  ...pick2(Base, { id: true, publicKey: true, type: true }).shape,
  credentialId: optional(string2()),
  privateKey: optional(any())
});
var account_getOnrampContactInfo2;
(function(account_getOnrampContactInfo3) {
  account_getOnrampContactInfo3.Parameters = object({
    address: address(),
    secret: string2()
  });
  account_getOnrampContactInfo3.Request = object({
    method: literal("account_getOnrampContactInfo"),
    params: readonly(tuple([account_getOnrampContactInfo3.Parameters]))
  });
  account_getOnrampContactInfo3.Response = object({
    email: optional(string2()),
    phone: optional(string2()),
    phoneVerifiedAt: optional(number2())
  });
})(account_getOnrampContactInfo2 || (account_getOnrampContactInfo2 = {}));
var account_onrampStatus2;
(function(account_onrampStatus3) {
  account_onrampStatus3.Parameters = object({
    address: address()
  });
  account_onrampStatus3.Request = object({
    method: literal("account_onrampStatus"),
    params: readonly(tuple([account_onrampStatus3.Parameters]))
  });
  account_onrampStatus3.Response = object({
    email: optional(number2()),
    phone: optional(number2())
  });
})(account_onrampStatus2 || (account_onrampStatus2 = {}));
var account_resendVerifyPhone2;
(function(account_resendVerifyPhone3) {
  account_resendVerifyPhone3.Parameters = object({
    email: string2(),
    walletAddress: address()
  });
  account_resendVerifyPhone3.Request = object({
    method: literal("account_resendVerifyPhone"),
    params: readonly(tuple([account_resendVerifyPhone3.Parameters]))
  });
  account_resendVerifyPhone3.Response = _null3();
})(account_resendVerifyPhone2 || (account_resendVerifyPhone2 = {}));
var account_setEmail2;
(function(account_setEmail3) {
  account_setEmail3.Parameters = object({
    email: string2(),
    walletAddress: address()
  });
  account_setEmail3.Request = object({
    method: literal("account_setEmail"),
    params: readonly(tuple([account_setEmail3.Parameters]))
  });
  account_setEmail3.Response = _null3();
})(account_setEmail2 || (account_setEmail2 = {}));
var account_setPhone2;
(function(account_setPhone3) {
  account_setPhone3.Parameters = object({
    email: string2(),
    walletAddress: address()
  });
  account_setPhone3.Request = object({
    method: literal("account_setPhone"),
    params: readonly(tuple([account_setPhone3.Parameters]))
  });
  account_setPhone3.Response = _null3();
})(account_setPhone2 || (account_setPhone2 = {}));
var account_verifyEmail2;
(function(account_verifyEmail3) {
  account_verifyEmail3.Parameters = object({
    chainId: number4(),
    email: string2(),
    token: string2(),
    walletAddress: address()
  });
  account_verifyEmail3.Request = object({
    method: literal("account_verifyEmail"),
    params: readonly(tuple([account_verifyEmail3.Parameters]))
  });
  account_verifyEmail3.Response = _null3();
})(account_verifyEmail2 || (account_verifyEmail2 = {}));
var account_verifyPhone2;
(function(account_verifyPhone3) {
  account_verifyPhone3.Parameters = object({
    code: string2(),
    phone: string2(),
    walletAddress: address()
  });
  account_verifyPhone3.Request = object({
    method: literal("account_verifyPhone"),
    params: readonly(tuple([account_verifyPhone3.Parameters]))
  });
  account_verifyPhone3.Response = _null3();
})(account_verifyPhone2 || (account_verifyPhone2 = {}));
var wallet_addFunds;
(function(wallet_addFunds2) {
  wallet_addFunds2.Parameters = object({
    address: optional(address()),
    chainId: optional(number4()),
    token: optional(address()),
    value: optional(string2())
  });
  wallet_addFunds2.Request = object({
    method: literal("wallet_addFunds"),
    params: readonly(tuple([wallet_addFunds2.Parameters]))
  });
  wallet_addFunds2.Response = object({
    id: hex3()
  });
})(wallet_addFunds || (wallet_addFunds = {}));
var eth_accounts;
(function(eth_accounts2) {
  eth_accounts2.Request = object({
    method: literal("eth_accounts"),
    params: optional(unknown())
  });
  eth_accounts2.Response = readonly(array(address()));
})(eth_accounts || (eth_accounts = {}));
var eth_chainId;
(function(eth_chainId2) {
  eth_chainId2.Request = object({
    method: literal("eth_chainId"),
    params: optional(unknown())
  });
  eth_chainId2.Response = hex3();
})(eth_chainId || (eth_chainId = {}));
var eth_requestAccounts;
(function(eth_requestAccounts2) {
  eth_requestAccounts2.Request = object({
    method: literal("eth_requestAccounts"),
    params: optional(unknown())
  });
  eth_requestAccounts2.Response = readonly(array(address()));
})(eth_requestAccounts || (eth_requestAccounts = {}));
var eth_sendTransaction;
(function(eth_sendTransaction2) {
  eth_sendTransaction2.Request = object({
    method: literal("eth_sendTransaction"),
    params: readonly(tuple([
      object({
        capabilities: optional(object({
          feeToken: optional(feeToken.Request),
          merchantUrl: optional(merchantUrl.Request),
          preCalls: optional(preCalls.Request)
        })),
        chainId: optional(number4()),
        data: optional(hex3()),
        from: optional(address()),
        to: address(),
        value: optional(bigint4())
      })
    ]))
  });
  eth_sendTransaction2.Response = hex3();
})(eth_sendTransaction || (eth_sendTransaction = {}));
var eth_signTypedData_v4;
(function(eth_signTypedData_v42) {
  eth_signTypedData_v42.Request = object({
    method: literal("eth_signTypedData_v4"),
    params: readonly(tuple([address(), string2()]))
  });
  eth_signTypedData_v42.Response = hex3();
})(eth_signTypedData_v4 || (eth_signTypedData_v4 = {}));
var wallet_getAdmins;
(function(wallet_getAdmins2) {
  wallet_getAdmins2.Parameters = object({
    address: optional(address()),
    chainId: optional(number4())
  });
  wallet_getAdmins2.Request = object({
    method: literal("wallet_getAdmins"),
    params: optional(readonly(tuple([wallet_getAdmins2.Parameters])))
  });
  wallet_getAdmins2.Key = KeyWithCredentialId;
  wallet_getAdmins2.Response = object({
    address: address(),
    chainId: number4(),
    keys: readonly(array(wallet_getAdmins2.Key))
  });
})(wallet_getAdmins || (wallet_getAdmins = {}));
var wallet_grantAdmin;
(function(wallet_grantAdmin2) {
  wallet_grantAdmin2.Capabilities = object({
    feeToken: optional(feeToken.Request)
  });
  wallet_grantAdmin2.Parameters = object({
    /** Address of the account to authorize the admin for. */
    address: optional(address()),
    /** Capabilities. */
    capabilities: optional(wallet_grantAdmin2.Capabilities),
    /** Chain ID. */
    chainId: optional(number4()),
    /** Admin Key to authorize. */
    key: pick2(Base, { publicKey: true, type: true })
  });
  wallet_grantAdmin2.Request = object({
    method: literal("wallet_grantAdmin"),
    params: readonly(tuple([wallet_grantAdmin2.Parameters]))
  });
  wallet_grantAdmin2.Response = object({
    address: address(),
    chainId: number4(),
    key: wallet_getAdmins.Key
  });
})(wallet_grantAdmin || (wallet_grantAdmin = {}));
var wallet_grantPermissions;
(function(wallet_grantPermissions2) {
  wallet_grantPermissions2.Parameters = Request;
  wallet_grantPermissions2.Request = object({
    method: literal("wallet_grantPermissions"),
    params: readonly(tuple([wallet_grantPermissions2.Parameters]))
  });
  wallet_grantPermissions2.ResponseCapabilities = object({
    preCalls: optional(preCalls.Response)
  });
  wallet_grantPermissions2.Response = object({
    ...Permissions2.shape,
    capabilities: optional(any())
  });
})(wallet_grantPermissions || (wallet_grantPermissions = {}));
var wallet_getAccountVersion;
(function(wallet_getAccountVersion2) {
  wallet_getAccountVersion2.Parameters = object({
    address: optional(address())
  });
  wallet_getAccountVersion2.Request = object({
    method: literal("wallet_getAccountVersion"),
    params: optional(readonly(tuple([wallet_getAccountVersion2.Parameters])))
  });
  wallet_getAccountVersion2.Response = object({
    current: string2(),
    latest: string2()
  });
})(wallet_getAccountVersion || (wallet_getAccountVersion = {}));
var wallet_getPermissions;
(function(wallet_getPermissions2) {
  wallet_getPermissions2.Parameters = object({
    address: optional(address()),
    chainIds: optional(readonly(array(number4())))
  });
  wallet_getPermissions2.Request = object({
    method: literal("wallet_getPermissions"),
    params: optional(readonly(tuple([wallet_getPermissions2.Parameters])))
  });
  wallet_getPermissions2.Response = permissions.Response;
})(wallet_getPermissions || (wallet_getPermissions = {}));
var wallet_revokeAdmin;
(function(wallet_revokeAdmin2) {
  wallet_revokeAdmin2.Capabilities = object({
    feeToken: optional(feeToken.Request)
  });
  wallet_revokeAdmin2.Parameters = object({
    address: optional(address()),
    capabilities: optional(wallet_revokeAdmin2.Capabilities),
    chainId: optional(number4()),
    id: hex3()
  });
  wallet_revokeAdmin2.Request = object({
    method: literal("wallet_revokeAdmin"),
    params: readonly(tuple([wallet_revokeAdmin2.Parameters]))
  });
  wallet_revokeAdmin2.Response = void 0;
})(wallet_revokeAdmin || (wallet_revokeAdmin = {}));
var wallet_revokePermissions;
(function(wallet_revokePermissions2) {
  wallet_revokePermissions2.Capabilities = object({
    feeToken: optional(feeToken.Request)
  });
  wallet_revokePermissions2.Parameters = object({
    address: optional(address()),
    capabilities: optional(wallet_revokePermissions2.Capabilities),
    id: hex3()
  });
  wallet_revokePermissions2.Request = object({
    method: literal("wallet_revokePermissions"),
    params: readonly(tuple([wallet_revokePermissions2.Parameters]))
  });
  wallet_revokePermissions2.Response = void 0;
})(wallet_revokePermissions || (wallet_revokePermissions = {}));
var wallet_switchEthereumChain;
(function(wallet_switchEthereumChain2) {
  wallet_switchEthereumChain2.Request = object({
    method: literal("wallet_switchEthereumChain"),
    params: readonly(tuple([
      object({
        chainId: hex3()
      })
    ]))
  });
})(wallet_switchEthereumChain || (wallet_switchEthereumChain = {}));
var wallet_upgradeAccount2;
(function(wallet_upgradeAccount3) {
  wallet_upgradeAccount3.Parameters = object({
    context: unknown(),
    signatures: object({
      auth: hex3(),
      exec: hex3()
    })
  });
  wallet_upgradeAccount3.Request = object({
    method: literal("wallet_upgradeAccount"),
    params: readonly(tuple([wallet_upgradeAccount3.Parameters]))
  });
  wallet_upgradeAccount3.ResponseCapabilities = object({
    admins: optional(readonly(array(wallet_getAdmins.Key))),
    permissions: optional(permissions.Response)
  });
  wallet_upgradeAccount3.Response = object({
    address: address(),
    capabilities: optional(wallet_upgradeAccount3.ResponseCapabilities)
  });
})(wallet_upgradeAccount2 || (wallet_upgradeAccount2 = {}));
var personal_sign;
(function(personal_sign2) {
  personal_sign2.Request = object({
    method: literal("personal_sign"),
    params: readonly(tuple([hex3(), address()]))
  });
  personal_sign2.Response = hex3();
})(personal_sign || (personal_sign = {}));
var porto_ping;
(function(porto_ping2) {
  porto_ping2.Request = object({
    method: literal("porto_ping"),
    params: optional(_undefined3())
  });
  porto_ping2.Response = literal("pong");
})(porto_ping || (porto_ping = {}));
var wallet_connect;
(function(wallet_connect2) {
  wallet_connect2.Capabilities = object({
    createAccount: optional(createAccount.Request),
    email: optional(boolean2()),
    grantAdmins: optional(readonly(array(pick2(Base, { publicKey: true, type: true })))),
    grantPermissions: optional(grantPermissions.Request),
    preCalls: optional(preCalls.Request),
    selectAccount: optional(union([
      boolean2(),
      object({
        address: address(),
        key: optional(object({
          credentialId: optional(string2()),
          publicKey: hex3()
        }))
      })
    ])),
    signInWithEthereum: optional(signInWithEthereum.Request)
  });
  wallet_connect2.Parameters = object({
    capabilities: optional(wallet_connect2.Capabilities),
    chainIds: optional(readonly(array(number4())))
  });
  wallet_connect2.Request = object({
    method: literal("wallet_connect"),
    params: optional(readonly(tuple([wallet_connect2.Parameters])))
  });
  wallet_connect2.ResponseCapabilities = object({
    admins: optional(readonly(array(object({
      ...pick2(Base, { id: true, publicKey: true, type: true }).shape,
      credentialId: optional(string2())
    })))),
    permissions: optional(permissions.Response),
    preCalls: optional(preCalls.Response),
    signInWithEthereum: optional(signInWithEthereum.Response)
  });
  wallet_connect2.Response = object({
    accounts: readonly(array(object({
      address: address(),
      capabilities: optional(wallet_connect2.ResponseCapabilities)
    }))),
    chainIds: readonly(array(number4()))
  });
})(wallet_connect || (wallet_connect = {}));
var wallet_disconnect;
(function(wallet_disconnect2) {
  wallet_disconnect2.Request = object({
    method: literal("wallet_disconnect"),
    params: optional(unknown())
  });
  wallet_disconnect2.Response = void 0;
})(wallet_disconnect || (wallet_disconnect = {}));
var wallet_getAssets2;
(function(wallet_getAssets3) {
  wallet_getAssets3.Parameters = wallet_getAssets.Parameters;
  wallet_getAssets3.Request = wallet_getAssets.Request;
  wallet_getAssets3.Response = wallet_getAssets.Response;
})(wallet_getAssets2 || (wallet_getAssets2 = {}));
var wallet_getCallsStatus2;
(function(wallet_getCallsStatus3) {
  wallet_getCallsStatus3.Request = object({
    method: literal("wallet_getCallsStatus"),
    params: tuple([hex3()])
  });
  wallet_getCallsStatus3.Response = object({
    atomic: boolean2(),
    chainId: number4(),
    id: string2(),
    receipts: optional(readonly(array(object({
      blockHash: hex3(),
      blockNumber: hex3(),
      gasUsed: hex3(),
      logs: readonly(array(object({
        address: address(),
        data: hex3(),
        topics: readonly(array(hex3()))
      }))),
      status: hex3(),
      transactionHash: hex3()
    })))),
    status: number2(),
    version: string2()
  });
})(wallet_getCallsStatus2 || (wallet_getCallsStatus2 = {}));
var wallet_getCapabilities2;
(function(wallet_getCapabilities3) {
  wallet_getCapabilities3.Request = object({
    method: literal("wallet_getCapabilities"),
    params: optional(union([
      readonly(tuple([union([hex3(), _undefined3()])])),
      readonly(tuple([
        union([hex3(), _undefined3()]),
        readonly(array(number4()))
      ]))
    ]))
  });
  wallet_getCapabilities3.Response = record(hex3(), object({
    atomic: atomic.GetCapabilitiesResponse,
    feeToken: feeToken.GetCapabilitiesResponse,
    merchant: merchant.GetCapabilitiesResponse,
    permissions: permissions.GetCapabilitiesResponse,
    requiredFunds: requiredFunds2.GetCapabilitiesResponse
  }));
})(wallet_getCapabilities2 || (wallet_getCapabilities2 = {}));
var wallet_getKeys2;
(function(wallet_getKeys3) {
  wallet_getKeys3.Parameters = object({
    address: address(),
    chainIds: optional(readonly(array(number4())))
  });
  wallet_getKeys3.Request = object({
    method: literal("wallet_getKeys"),
    params: readonly(tuple([wallet_getKeys3.Parameters]))
  });
  wallet_getKeys3.Response = readonly(array(WithPermissions2));
})(wallet_getKeys2 || (wallet_getKeys2 = {}));
var wallet_prepareCalls2;
(function(wallet_prepareCalls3) {
  wallet_prepareCalls3.Capabilities = object({
    feeToken: optional(feeToken.Request),
    merchantUrl: optional(merchantUrl.Request),
    permissions: optional(permissions.Request),
    preCalls: optional(preCalls.Request),
    requiredFunds: optional(requiredFunds2.Request)
  });
  wallet_prepareCalls3.Parameters = object({
    calls: readonly(array(object({
      data: optional(hex3()),
      to: address(),
      value: optional(bigint4())
    }))),
    capabilities: optional(wallet_prepareCalls3.Capabilities),
    chainId: optional(number4()),
    from: optional(address()),
    key: optional(pick2(Base, { prehash: true, publicKey: true, type: true })),
    version: optional(string2())
  });
  wallet_prepareCalls3.Request = object({
    method: literal("wallet_prepareCalls"),
    params: readonly(tuple([wallet_prepareCalls3.Parameters]))
  });
  wallet_prepareCalls3.Response = object({
    capabilities: optional(object({
      ...wallet_prepareCalls.ResponseCapabilities.shape,
      quote: optional(Signed)
    })),
    chainId: hex3(),
    context: object({
      account: object({
        address: address()
      }),
      calls: wallet_prepareCalls3.Parameters.shape.calls,
      nonce: bigint4(),
      quote: optional(partial2(Signed))
    }),
    digest: hex3(),
    key: pick2(Base, { prehash: true, publicKey: true, type: true }),
    typedData: object({
      domain: union([
        object({
          chainId: number4(),
          name: string2(),
          verifyingContract: address(),
          version: string2()
        }),
        object({})
      ]),
      message: record(string2(), unknown()),
      primaryType: string2(),
      types: record(string2(), unknown())
    })
  });
})(wallet_prepareCalls2 || (wallet_prepareCalls2 = {}));
var wallet_prepareUpgradeAccount2;
(function(wallet_prepareUpgradeAccount3) {
  wallet_prepareUpgradeAccount3.Capabilities = object({
    ...wallet_connect.Capabilities.shape,
    label: optional(string2())
  });
  wallet_prepareUpgradeAccount3.Parameters = object({
    address: address(),
    capabilities: optional(wallet_prepareUpgradeAccount3.Capabilities),
    chainId: optional(number4())
  });
  wallet_prepareUpgradeAccount3.Request = object({
    method: literal("wallet_prepareUpgradeAccount"),
    params: readonly(tuple([wallet_prepareUpgradeAccount3.Parameters]))
  });
  wallet_prepareUpgradeAccount3.Response = object({
    context: unknown(),
    digests: object({
      auth: hex3(),
      exec: hex3()
    })
  });
})(wallet_prepareUpgradeAccount2 || (wallet_prepareUpgradeAccount2 = {}));
var wallet_sendCalls;
(function(wallet_sendCalls2) {
  wallet_sendCalls2.Capabilities = wallet_prepareCalls2.Capabilities;
  wallet_sendCalls2.Request = object({
    method: literal("wallet_sendCalls"),
    params: readonly(tuple([omit2(wallet_prepareCalls2.Parameters, { key: true })]))
  });
  wallet_sendCalls2.Response = object({
    id: hex3()
  });
})(wallet_sendCalls || (wallet_sendCalls = {}));
var wallet_sendPreparedCalls2;
(function(wallet_sendPreparedCalls3) {
  wallet_sendPreparedCalls3.Parameters = object({
    capabilities: wallet_prepareCalls2.Response.shape.capabilities,
    chainId: hex3(),
    context: wallet_prepareCalls2.Response.shape.context,
    key: wallet_prepareCalls2.Response.shape.key,
    signature: hex3()
  });
  wallet_sendPreparedCalls3.Request = object({
    method: literal("wallet_sendPreparedCalls"),
    params: readonly(tuple([wallet_sendPreparedCalls3.Parameters]))
  });
  wallet_sendPreparedCalls3.Response = readonly(array(object({
    capabilities: optional(record(string2(), unknown())),
    id: hex3()
  })));
})(wallet_sendPreparedCalls2 || (wallet_sendPreparedCalls2 = {}));
var wallet_verifySignature2;
(function(wallet_verifySignature3) {
  wallet_verifySignature3.Parameters = object({
    /** Address of the account. */
    address: address(),
    /** Chain ID. */
    chainId: optional(number4()),
    /** Digest to verify. */
    digest: hex3(),
    /** Signature to verify. */
    signature: hex3()
  });
  wallet_verifySignature3.Request = object({
    method: literal("wallet_verifySignature"),
    params: readonly(tuple([wallet_verifySignature3.Parameters]))
  });
  wallet_verifySignature3.Response = object({
    /** Address of the account. */
    address: address(),
    /** Chain ID. */
    chainId: number4(),
    /** Proof that can be used to verify the signature. */
    proof: optional(unknown()),
    /** Whether the signature is valid. */
    valid: boolean2()
  });
})(wallet_verifySignature2 || (wallet_verifySignature2 = {}));

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/schema/request.js
var Request2 = discriminatedUnion("method", [
  account_verifyEmail2.Request,
  wallet_addFunds.Request,
  eth_accounts.Request,
  eth_chainId.Request,
  eth_requestAccounts.Request,
  eth_sendTransaction.Request,
  eth_signTypedData_v4.Request,
  wallet_getAccountVersion.Request,
  wallet_getAdmins.Request,
  wallet_getPermissions.Request,
  wallet_grantAdmin.Request,
  wallet_grantPermissions.Request,
  wallet_prepareUpgradeAccount2.Request,
  wallet_revokeAdmin.Request,
  wallet_revokePermissions.Request,
  wallet_upgradeAccount2.Request,
  personal_sign.Request,
  porto_ping.Request,
  wallet_connect.Request,
  wallet_disconnect.Request,
  wallet_getAssets2.Request,
  wallet_getCallsStatus2.Request,
  wallet_getCapabilities2.Request,
  wallet_getKeys2.Request,
  wallet_prepareCalls2.Request,
  wallet_sendCalls.Request,
  wallet_sendPreparedCalls2.Request,
  wallet_switchEthereumChain.Request,
  wallet_verifySignature2.Request
]);
function validate4(schema, value) {
  const result = safeParse(schema, value);
  if (result.error) {
    const issue2 = result.error.issues.at(0);
    if (issue2?.code === "invalid_union" && issue2.note === "No matching discriminator")
      throw new MethodNotSupportedError();
    throw new InvalidParamsError(toValidationError(result.error));
  }
  return {
    ...value,
    _decoded: result.data
  };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/store.js
async function waitForHydration(store) {
  if (store.persist.hasHydrated())
    return;
  await new Promise((resolve) => {
    store.persist.onFinishHydration(() => resolve(true));
    setTimeout(() => resolve(true), 100);
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/urlString.js
function toAbsolute(url2) {
  if (!url2)
    return void 0;
  if (url2.startsWith("/"))
    return `${window.location.origin}${url2}`;
  return url2;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/provider.js
function from17(parameters) {
  const { config: config2, getMode, id, store } = parameters;
  const { announceProvider: announceProvider2 } = config2;
  function getCapabilities2(parameters2 = {}) {
    const client = getClient();
    const request = parameters2.request ?? validate4(Request2, {
      method: "wallet_getCapabilities",
      params: parameters2.chainIds ? [void 0, parameters2.chainIds] : void 0
    });
    return withCache(() => getMode().actions.getCapabilities({
      chainIds: parameters2.chainIds,
      internal: {
        client,
        config: config2,
        request,
        store
      }
    }), { cacheKey: `getCapabilities.${id}.${parameters2.chainIds?.join(",")}` });
  }
  function getClient(chainId_) {
    const chainId = typeof chainId_ === "string" ? toNumber(chainId_) : chainId_;
    return fromPorto({ _internal: parameters }, { chainId });
  }
  const lock = /* @__PURE__ */ new Map();
  const preparedAccounts_internal = [];
  const emitter = createEmitter();
  const provider = from2({
    ...emitter,
    async request(request_) {
      await waitForHydration(store);
      const shouldDedupe = [
        "eth_accounts",
        "eth_chainId",
        "eth_requestAccounts",
        "wallet_getAssets",
        "wallet_getCapabilities",
        "wallet_getKeys",
        "wallet_getPermissions",
        "wallet_getAccountVersion",
        "wallet_connect"
      ].includes(request_.method);
      return withDedupe(async () => {
        let request;
        try {
          request = validate4(Request2, request_);
        } catch (e) {
          const error48 = e;
          if (!(error48 instanceof MethodNotSupportedError))
            throw error48;
          if (request_.method.startsWith("wallet_"))
            throw new UnsupportedMethodError();
          return getClient().request(request_);
        }
        const state = store.getState();
        switch (request.method) {
          case "account_verifyEmail": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [parameters2] = request._decoded.params;
            const { chainId, email: email3, token, walletAddress } = parameters2;
            const client = getClient(chainId);
            if (chainId && chainId !== client.chain.id)
              throw new ChainDisconnectedError();
            const account = walletAddress ? state.accounts.find((account2) => isEqual(account2.address, walletAddress)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            return await getMode().actions.verifyEmail({
              account,
              chainId,
              email: email3,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              token,
              walletAddress
            });
          }
          case "wallet_addFunds": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const { address: address2, value, token } = request.params[0] ?? {};
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const result = await getMode().actions.addFunds({
              address: account.address,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              token,
              value
            });
            emitter.emit("message", {
              data: null,
              type: "assetsChanged"
            });
            return result;
          }
          case "eth_accounts": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            return state.accounts.map(getAccountAddress);
          }
          case "eth_chainId": {
            return fromNumber(state.chainIds[0]);
          }
          case "eth_requestAccounts": {
            if (state.accounts.length > 0 && lock.get("eth_requestAccounts"))
              return state.accounts.map(getAccountAddress);
            const client = getClient();
            const { accounts } = await getMode().actions.loadAccounts({
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            store.setState((x) => ({ ...x, accounts }));
            emitter.emit("connect", {
              chainId: fromNumber(client.chain.id)
            });
            lock.set("eth_requestAccounts", true);
            setTimeout(() => lock.delete("eth_requestAccounts"), 1e3);
            return accounts.map(getAccountAddress);
          }
          case "eth_sendTransaction": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ capabilities, chainId, data = "0x", from: from24, to, value }] = request._decoded.params;
            const client = getClient(chainId);
            if (chainId && chainId !== client.chain.id)
              throw new ChainDisconnectedError();
            const account = from24 ? state.accounts.find((account2) => isEqual(account2.address, from24)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const { id: id2 } = await getMode().actions.sendCalls({
              account,
              asTxHash: true,
              calls: [
                {
                  data,
                  to,
                  value
                }
              ],
              chainId: client.chain.id,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              merchantUrl: toAbsolute(config2.merchantUrl ?? capabilities?.merchantUrl)
            });
            return id2;
          }
          case "eth_signTypedData_v4": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [address2, data] = request._decoded.params;
            const account = state.accounts.find((account2) => isEqual(account2.address, address2));
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const signature = await getMode().actions.signTypedData({
              account,
              data,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            return signature;
          }
          case "wallet_grantAdmin": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, capabilities, chainId, key: keyToAuthorize }] = request._decoded.params ?? [{}];
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient(chainId);
            const keyExists = getAdmins([...account.keys ?? []])?.some((key2) => key2.publicKey?.toLowerCase() === keyToAuthorize.publicKey.toLowerCase());
            if (keyExists)
              throw new InvalidParamsError({
                message: "Key already granted as admin."
              });
            const { key } = await getMode().actions.grantAdmin({
              account,
              feeToken: capabilities?.feeToken,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              key: keyToAuthorize
            });
            store.setState((x) => {
              const index = x.accounts.findIndex((x2) => account ? isEqual(x2.address, account.address) : true);
              if (index === -1)
                return x;
              return {
                ...x,
                accounts: x.accounts.map((account2, i) => i === index ? { ...account2, keys: [...account2.keys ?? [], key] } : account2)
              };
            });
            const admins = getAdmins([...account.keys ?? [], key]);
            emitter.emit("message", {
              data: null,
              type: "adminsChanged"
            });
            return encode(wallet_grantAdmin.Response, {
              address: account.address,
              chainId: client.chain.id,
              key: admins.at(-1)
            });
          }
          case "wallet_grantPermissions": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, chainId, ...permissions2 }] = request._decoded.params ?? [{}];
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient(chainId);
            const { key } = await getMode().actions.grantPermissions({
              account,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              permissions: permissions2
            });
            store.setState((x) => {
              const index = x.accounts.findIndex((x2) => account ? isEqual(x2.address, account.address) : true);
              if (index === -1)
                return x;
              return {
                ...x,
                accounts: x.accounts.map((account2, i) => i === index ? { ...account2, keys: [...account2.keys ?? [], key] } : account2)
              };
            });
            emitter.emit("message", {
              data: null,
              type: "permissionsChanged"
            });
            return encode(wallet_grantPermissions.Response, {
              ...fromKey(key, {
                address: account.address
              })
            });
          }
          case "wallet_getAdmins": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, chainId }] = request._decoded.params ?? [{}];
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient(chainId);
            const keys = await getMode().actions.getKeys({
              account,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            const admins = getAdmins(keys);
            return encode(wallet_getAdmins.Response, {
              address: account.address,
              chainId: client.chain.id,
              keys: admins
            });
          }
          case "wallet_prepareUpgradeAccount": {
            const [{ address: address2, capabilities, chainId }] = request._decoded.params ?? [{}];
            const { email: email3, label, grantPermissions: permissions2 } = capabilities ?? {};
            const client = getClient(chainId);
            const { context, digests } = await getMode().actions.prepareUpgradeAccount({
              address: address2,
              email: email3,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              label,
              permissions: permissions2
            });
            preparedAccounts_internal.push(context.account);
            return {
              context,
              digests
            };
          }
          case "wallet_getAccountVersion": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2 }] = request._decoded.params ?? [{}];
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const { current, latest } = await getMode().actions.getAccountVersion({
              address: account.address,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            return {
              current,
              latest
            };
          }
          case "wallet_getKeys": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, chainIds }] = request._decoded.params ?? [{}];
            const account = state.accounts.find((account2) => isEqual(account2.address, address2));
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const keys = await getMode().actions.getKeys({
              account,
              chainIds,
              internal: { client, config: config2, request, store }
            });
            return encode(wallet_getKeys2.Response, keys);
          }
          case "wallet_getPermissions": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, chainIds }] = request._decoded.params ?? [{}];
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const keys = await getMode().actions.getKeys({
              account,
              chainIds,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            const permissions2 = getActivePermissions(keys, {
              address: account.address
            });
            return permissions2;
          }
          case "wallet_revokeAdmin": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, capabilities, id: id2 }] = request._decoded.params;
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            await getMode().actions.revokeAdmin({
              account,
              feeToken: capabilities?.feeToken,
              id: id2,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            const keys = account.keys?.filter((key) => key.id.toLowerCase() !== id2.toLowerCase());
            store.setState((x) => ({
              ...x,
              accounts: x.accounts.map((x2) => isEqual(x2.address, account.address) ? {
                ...x2,
                keys
              } : x2)
            }));
            emitter.emit("message", {
              data: null,
              type: "adminsChanged"
            });
            return;
          }
          case "wallet_revokePermissions": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [{ address: address2, capabilities, id: id2 }] = request._decoded.params;
            const account = address2 ? state.accounts.find((account2) => isEqual(account2.address, address2)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            await getMode().actions.revokePermissions({
              account,
              feeToken: capabilities?.feeToken,
              id: id2,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            const keys = account.keys?.filter((key) => key.id.toLowerCase() !== id2.toLowerCase());
            store.setState((x) => ({
              ...x,
              accounts: x.accounts.map((x2) => isEqual(x2.address, account.address) ? {
                ...x2,
                keys
              } : x2)
            }));
            emitter.emit("message", {
              data: null,
              type: "permissionsChanged"
            });
            return;
          }
          case "wallet_upgradeAccount": {
            const [{ context, signatures }] = request._decoded.params ?? [{}];
            const client = getClient();
            const account_ = preparedAccounts_internal.find((account2) => isEqual(account2.address, context.account.address));
            if (!account_)
              throw new UnauthorizedError();
            const { account } = await getMode().actions.upgradeAccount({
              account: account_,
              context,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              signatures
            });
            const admins = getAdmins(account.keys ?? []);
            const permissions2 = getActivePermissions(account.keys ?? [], {
              address: account.address
            });
            store.setState((x) => ({ ...x, accounts: [account] }));
            emitter.emit("connect", {
              chainId: fromNumber(client.chain.id)
            });
            return {
              address: account.address,
              capabilities: {
                admins,
                ...permissions2.length > 0 ? { permissions: permissions2 } : {}
              }
            };
          }
          case "porto_ping": {
            return "pong";
          }
          case "personal_sign": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [data, address2] = request._decoded.params;
            const account = state.accounts.find((account2) => isEqual(account2.address, address2));
            if (!account)
              throw new UnauthorizedError();
            const client = getClient();
            const signature = await getMode().actions.signPersonalMessage({
              account,
              data,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            return signature;
          }
          case "wallet_connect": {
            const [{ capabilities, chainIds }] = request._decoded.params ?? [
              {}
            ];
            const client = getClient(chainIds?.[0]);
            const chainId = client.chain.id;
            const { createAccount: createAccount3, email: email3, grantAdmins: admins, grantPermissions: permissions2, selectAccount, signInWithEthereum: signInWithEthereum2 } = capabilities ?? {};
            const internal = {
              client,
              config: config2,
              request,
              store
            };
            const { accounts } = await (async () => {
              if (email3 || createAccount3) {
                const { label = void 0 } = typeof createAccount3 === "object" ? createAccount3 : {};
                const { account: account2 } = await getMode().actions.createAccount({
                  admins,
                  email: email3,
                  internal,
                  label,
                  permissions: permissions2,
                  signInWithEthereum: signInWithEthereum2
                });
                return { accounts: [account2] };
              }
              const account = state.accounts[0];
              const { address: address2, key } = (() => {
                if (selectAccount) {
                  if (typeof selectAccount === "object")
                    return selectAccount;
                  return {
                    address: void 0,
                    key: void 0
                  };
                }
                for (const key2 of account?.keys ?? []) {
                  if (key2.type === "webauthn-p256" && key2.role === "admin")
                    return {
                      address: account?.address,
                      key: {
                        credentialId: key2.credentialId ?? key2.privateKey?.credential?.id,
                        publicKey: key2.publicKey
                      }
                    };
                }
                return {
                  address: void 0,
                  key: void 0
                };
              })();
              const loadAccountsParams = {
                internal,
                permissions: permissions2,
                signInWithEthereum: signInWithEthereum2
              };
              try {
                return await getMode().actions.loadAccounts({
                  address: address2,
                  key,
                  ...loadAccountsParams
                });
              } catch (error48) {
                if (error48 instanceof UserRejectedRequestError)
                  throw error48;
                if (address2 && key)
                  return await getMode().actions.loadAccounts(loadAccountsParams);
                throw error48;
              }
            })();
            store.setState((x) => ({ ...x, accounts }));
            const chainIds_response = [
              chainId,
              ...store.getState().chainIds.filter((id2) => id2 !== chainId)
            ];
            emitter.emit("connect", {
              chainId: fromNumber(chainIds_response[0])
            });
            return {
              accounts: accounts.map((account) => ({
                address: getAccountAddress(account),
                capabilities: {
                  admins: account.keys ? getAdmins(account.keys) : [],
                  permissions: account.keys ? getActivePermissions(account.keys, {
                    address: account.address
                  }) : [],
                  ...account.signInWithEthereum && {
                    signInWithEthereum: account.signInWithEthereum
                  }
                }
              })),
              chainIds: chainIds_response.map((chainId2) => fromNumber(chainId2))
            };
          }
          case "wallet_disconnect": {
            const client = getClient();
            await getMode().actions.disconnect?.({
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            store.setState((x) => ({ ...x, accounts: [] }));
            emitter.emit("disconnect", new DisconnectedError());
            return;
          }
          case "wallet_getAssets": {
            const [parameters2] = request._decoded.params ?? [];
            const { account, chainFilter, assetFilter, assetTypeFilter } = parameters2;
            const client = getClient();
            const response = await getMode().actions.getAssets({
              account,
              assetFilter,
              assetTypeFilter,
              chainFilter,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            const value = Object.entries(response).reduce((acc, [key, value2]) => {
              acc[fromNumber(Number(key))] = value2;
              return acc;
            }, {});
            return encode(wallet_getAssets2.Response, value);
          }
          case "wallet_getCallsStatus": {
            const [id2] = request._decoded.params ?? [];
            const client = getClient();
            const response = await getMode().actions.getCallsStatus({
              id: id2,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            return response;
          }
          case "wallet_getCapabilities": {
            const [_, chainIds] = request.params ?? [];
            const capabilities = await getCapabilities2({
              chainIds,
              request
            });
            return capabilities;
          }
          case "wallet_prepareCalls": {
            const [parameters2] = request._decoded.params;
            const { calls, capabilities, chainId, key, from: from24 } = parameters2;
            const client = getClient(chainId);
            const account = from24 ?? state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            if (chainId && chainId !== client.chain.id)
              throw new ChainDisconnectedError();
            const { digest, ...rest } = await getMode().actions.prepareCalls({
              account: from14(account),
              calls,
              feeToken: capabilities?.feeToken,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              key,
              merchantUrl: toAbsolute(config2.merchantUrl ?? capabilities?.merchantUrl),
              requiredFunds: capabilities?.requiredFunds
            });
            return encode(wallet_prepareCalls2.Response, {
              capabilities: rest.capabilities,
              chainId: fromNumber(rest.chainId ?? client.chain.id),
              context: {
                ...rest.context,
                account: {
                  address: rest.account.address
                },
                calls: rest.context.calls ?? [],
                nonce: rest.context.nonce ?? 0n
              },
              digest,
              key: rest.key,
              typedData: rest.typedData
            });
          }
          case "wallet_sendPreparedCalls": {
            const [parameters2] = request._decoded.params;
            const { chainId, context, key, signature } = parameters2;
            const { account } = parameters2.context;
            const client = getClient(chainId);
            if (chainId && toNumber(chainId) !== client.chain.id)
              throw new ChainDisconnectedError();
            const hash4 = await getMode().actions.sendPreparedCalls({
              account: from14(account),
              context,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              key,
              signature
            });
            return [{ id: hash4 }];
          }
          case "wallet_sendCalls": {
            if (state.accounts.length === 0)
              throw new DisconnectedError();
            const [parameters2] = request._decoded.params;
            const { calls, capabilities, chainId, from: from24 } = parameters2;
            const client = getClient(chainId);
            if (chainId && chainId !== client.chain.id)
              throw new ChainDisconnectedError();
            const account = from24 ? state.accounts.find((account2) => isEqual(account2.address, from24)) : state.accounts[0];
            if (!account)
              throw new UnauthorizedError();
            const { id: id2 } = await getMode().actions.sendCalls({
              account,
              calls,
              chainId: client.chain.id,
              feeToken: capabilities?.feeToken,
              internal: {
                client,
                config: config2,
                request,
                store
              },
              merchantUrl: toAbsolute(config2.merchantUrl ?? capabilities?.merchantUrl),
              permissionsId: capabilities?.permissions?.id,
              requiredFunds: capabilities?.requiredFunds
            });
            return { id: id2 };
          }
          case "wallet_switchEthereumChain": {
            const [parameters2] = request._decoded.params;
            const { chainId } = parameters2;
            const chainId_number = toNumber(chainId);
            const chain = config2.chains.find((chain2) => chain2.id === chainId_number);
            if (!chain)
              throw new UnsupportedChainIdError();
            const client = getClient(chainId);
            await getMode().actions.switchChain?.({
              chainId: client.chain.id,
              internal: {
                client,
                config: config2,
                request,
                store
              }
            });
            store.setState((state2) => ({
              ...state2,
              chainIds: [
                chainId_number,
                ...state2.chainIds.filter((id2) => id2 !== chainId_number)
              ]
            }));
            return void 0;
          }
          case "wallet_verifySignature": {
            const [parameters2] = request._decoded.params;
            const { address: address2, chainId, digest, signature } = parameters2;
            const client = getClient(chainId);
            const result = await verifySignature(client, {
              address: address2,
              digest,
              signature
            });
            return {
              ...result,
              address: address2,
              chainId: fromNumber(client.chain.id)
            };
          }
        }
      }, {
        enabled: shouldDedupe,
        id: stringify(request_)
      });
    }
  });
  function setup() {
    let unsubscribe_accounts = () => {
    };
    let unsubscribe_chain = () => {
    };
    void waitForHydration(store).then(() => {
      getCapabilities2().catch(() => {
      });
      unsubscribe_accounts();
      unsubscribe_accounts = store.subscribe((state) => state.accounts, (accounts) => {
        emitter.emit("accountsChanged", accounts.map(getAccountAddress));
      }, {
        equalityFn: (a, b) => a.every((a2, index) => a2.address === b[index]?.address)
      });
      unsubscribe_chain();
      unsubscribe_chain = store.subscribe((state) => state.chainIds[0], (chainId, previousChainId) => {
        if (chainId === previousChainId)
          return;
        emitter.emit("chainChanged", fromNumber(chainId));
      });
    });
    const unannounce = announce(provider, announceProvider2);
    return () => {
      unsubscribe_accounts();
      unsubscribe_chain();
      unannounce();
    };
  }
  const destroy = setup();
  return Object.assign(provider, {
    _internal: {
      destroy
    }
  });
}
function announce(provider, info) {
  if (!info)
    return () => {
    };
  if (typeof window === "undefined" || !window.dispatchEvent)
    return () => {
    };
  const { icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIyIiBoZWlnaHQ9IjQyMiIgdmlld0JveD0iMCAwIDQyMiA0MjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MjIiIGhlaWdodD0iNDIyIiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV8xNSkiPgo8cGF0aCBkPSJNODEgMjg2LjM2NkM4MSAyODAuODkzIDg1LjQ1MDUgMjc2LjQ1NSA5MC45NDA0IDI3Ni40NTVIMzI5LjUxMUMzMzUuMDAxIDI3Ni40NTUgMzM5LjQ1MiAyODAuODkzIDMzOS40NTIgMjg2LjM2NlYzMDYuMTg4QzMzOS40NTIgMzExLjY2MiAzMzUuMDAxIDMxNi4wOTkgMzI5LjUxMSAzMTYuMDk5SDkwLjk0MDRDODUuNDUwNSAzMTYuMDk5IDgxIDMxMS42NjIgODEgMzA2LjE4OFYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAyMzQuODI4Qzg1LjQ1MDUgMjM0LjgyOCA4MSAyMzkuMjY2IDgxIDI0NC43MzlWMjcxLjUzMUM4My44NDMyIDI2OS42MzMgODcuMjYyMiAyNjguNTI2IDkwLjk0MDQgMjY4LjUyNkgzMjkuNTExQzMzMy4xODggMjY4LjUyNiAzMzYuNjA4IDI2OS42MzMgMzM5LjQ1MiAyNzEuNTMxVjI0NC43MzlDMzM5LjQ1MiAyMzkuMjY2IDMzNS4wMDEgMjM0LjgyOCAzMjkuNTExIDIzNC44MjhIOTAuOTQwNFpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgwLjg5MyAzMzUuMDAxIDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTlDODEgMzExLjY2NCA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2NCAzMzkuNDUyIDMwNi4xOVYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAxOTMuMjAxQzg1LjQ1MDUgMTkzLjIwMSA4MSAxOTcuNjM4IDgxIDIwMy4xMTJWMjI5LjkwM0M4My44NDMyIDIyOC4wMDYgODcuMjYyMiAyMjYuODk5IDkwLjk0MDQgMjI2Ljg5OUgzMjkuNTExQzMzMy4xODggMjI2Ljg5OSAzMzYuNjA4IDIyOC4wMDYgMzM5LjQ1MiAyMjkuOTAzVjIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNFpNMzM5LjQ1MiAyNDQuNzM5QzMzOS40NTIgMjM5LjI2NSAzMzUuMDAxIDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNDODEuMjE3NSAyNzEuMzg1IDgxLjQzODMgMjcxLjI0NSA4MS42NjI0IDI3MS4xMDlDODMuODMyNSAyNjkuNzk0IDg2LjMwNTQgMjY4LjkyNyA4OC45NTIzIDI2OC42MzVDODkuNjA1MSAyNjguNTYzIDkwLjI2ODQgMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMzAuMTgzIDI2OC41MjYgMzMwLjg0NiAyNjguNTYzIDMzMS40OTggMjY4LjYzNUMzMzQuNDE5IDI2OC45NTcgMzM3LjEyOCAyNjkuOTggMzM5LjQ1MiAyNzEuNTNWMjQ0LjczOVpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgxLjAyMSAzMzUuMjA2IDI3Ni42NjMgMzI5Ljg5MyAyNzYuNDYyQzMyOS43NjcgMjc2LjQ1NyAzMjkuNjQgMjc2LjQ1NSAzMjkuNTExIDI3Ni40NTVIOTAuOTQwNEM4NS40NTA1IDI3Ni40NTUgODEgMjgwLjg5MyA4MSAyODYuMzY2VjMwNi4xODhDODEgMzExLjY2MiA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2MiAzMzkuNDUyIDMwNi4xODhWMjg2LjM2NloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTguMDE0NiAxMDRDODguNjE3NyAxMDQgODEgMTExLjU5NSA4MSAxMjAuOTY1VjE4OC4yNzZDODMuODQzMiAxODYuMzc5IDg3LjI2MjIgMTg1LjI3MiA5MC45NDA0IDE4NS4yNzJIMzI5LjUxMUMzMzMuMTg4IDE4NS4yNzIgMzM2LjYwOCAxODYuMzc5IDMzOS40NTIgMTg4LjI3NlYxMjAuOTY1QzMzOS40NTIgMTExLjU5NSAzMzEuODMzIDEwNCAzMjIuNDM3IDEwNEg5OC4wMTQ2Wk0zMzkuNDUyIDIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNEM4NS40NTA1IDE5My4yMDEgODEgMTk3LjYzOCA4MSAyMDMuMTEyVjIyOS45MDNDODEuMjE3NSAyMjkuNzU4IDgxLjQzODMgMjI5LjYxOCA4MS42NjI0IDIyOS40ODJDODMuODMyNSAyMjguMTY3IDg2LjMwNTQgMjI3LjMgODguOTUyMyAyMjcuMDA4Qzg5LjYwNTEgMjI2LjkzNiA5MC4yNjg0IDIyNi44OTkgOTAuOTQwNCAyMjYuODk5SDMyOS41MTFDMzMwLjE4MyAyMjYuODk5IDMzMC44NDYgMjI2LjkzNiAzMzEuNDk4IDIyNy4wMDhDMzM0LjQxOSAyMjcuMzMgMzM3LjEyOCAyMjguMzUyIDMzOS40NTIgMjI5LjkwM1YyMDMuMTEyWk0zMzkuNDUyIDI0NC43MzlDMzM5LjQ1MiAyMzkuMzkzIDMzNS4yMDYgMjM1LjAzNiAzMjkuODkzIDIzNC44MzVDMzI5Ljc2NyAyMzQuODMgMzI5LjY0IDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNMODEuMDcwNyAyNzEuNDgzQzgxLjI2NTMgMjcxLjM1NSA4MS40NjI1IDI3MS4yMyA4MS42NjI0IDI3MS4xMDlDODEuOTA4MyAyNzAuOTYgODIuMTU4MSAyNzAuODE3IDgyLjQxMTcgMjcwLjY3OUM4NC4zOTUzIDI2OS42MDUgODYuNjA1NCAyNjguODk0IDg4Ljk1MjMgMjY4LjYzNUM4OS4wMDUyIDI2OC42MjkgODkuMDU4IDI2OC42MjQgODkuMTExIDI2OC42MThDODkuNzEyNSAyNjguNTU3IDkwLjMyMjggMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMjkuNzM4IDI2OC41MjYgMzI5Ljk2NSAyNjguNTMgMzMwLjE5MiAyNjguNTM5QzMzMC42MzEgMjY4LjU1NSAzMzEuMDY3IDI2OC41ODcgMzMxLjQ5OCAyNjguNjM1QzMzNC40MTkgMjY4Ljk1NyAzMzcuMTI4IDI2OS45OCAzMzkuNDUyIDI3MS41M1YyNDQuNzM5Wk0zMzkuNDUyIDI4Ni4zNjZDMzM5LjQ1MiAyODEuMDIxIDMzNS4yMDYgMjc2LjY2MyAzMjkuODkzIDI3Ni40NjJMMzI5Ljg2NSAyNzYuNDYxQzMyOS43NDggMjc2LjQ1NyAzMjkuNjI5IDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTg4QzgxIDMxMS42NjIgODUuNDUwNSAzMTYuMTAxIDkwLjk0MDQgMzE2LjEwMUgzMjkuNTExQzMzNS4wMDEgMzE2LjEwMSAzMzkuNDUyIDMxMS42NjIgMzM5LjQ1MiAzMDYuMTg4VjI4Ni4zNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjY5Ljg2OCAxMzEuNzUyQzI2OS44NjggMTI2LjI3OCAyNzQuMzE4IDEyMS44NCAyNzkuODA4IDEyMS44NEgzMTEuNjE4QzMxNy4xMDggMTIxLjg0IDMyMS41NTggMTI2LjI3OCAzMjEuNTU4IDEzMS43NTJWMTYxLjQ4NUMzMjEuNTU4IDE2Ni45NTkgMzE3LjEwOCAxNzEuMzk2IDMxMS42MTggMTcxLjM5NkgyNzkuODA4QzI3NC4zMTggMTcxLjM5NiAyNjkuODY4IDE2Ni45NTkgMjY5Ljg2OCAxNjEuNDg1VjEzMS43NTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTUiPgo8cmVjdCB3aWR0aD0iMjU5IiBoZWlnaHQ9IjIxMyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxIDEwNCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K", name = "Porto", rdns = "xyz.ithaca.porto" } = typeof info === "object" ? info : {};
  return announceProvider({
    info: {
      icon,
      name,
      rdns,
      uuid: uuidv4()
    },
    provider
  });
}
function getAdmins(keys) {
  return keys.map((key) => {
    if (key.role !== "admin")
      return void 0;
    try {
      return encode(wallet_getAdmins.Key, {
        id: key.id ?? key.publicKey,
        publicKey: key.publicKey,
        type: key.type,
        ...key.type === "webauthn-p256" ? {
          credentialId: key.privateKey?.credential?.id,
          privateKey: {
            credential: {
              id: key.privateKey?.credential?.id
            },
            rpId: key.privateKey?.rpId
          }
        } : {}
      });
    } catch {
      return void 0;
    }
  }).filter(Boolean);
}
function getActivePermissions(keys, { address: address2 }) {
  return keys.map((key) => {
    if (!key.chainId)
      return void 0;
    if (key.role !== "session")
      return void 0;
    if (key.expiry > 0 && key.expiry < BigInt(Math.floor(Date.now() / 1e3)))
      return void 0;
    try {
      return encode(Schema, fromKey(key, { address: address2 }));
    } catch {
      return void 0;
    }
  }).filter(Boolean);
}
function getAccountAddress(account) {
  return getAddress(account.address);
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Mode.js
var Mode_exports = {};
__export(Mode_exports, {
  _internal_types: () => types_exports,
  dialog: () => dialog,
  from: () => from18,
  reactNative: () => reactNative2,
  relay: () => relay
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/mode.js
function from18(mode) {
  return {
    ...mode,
    setup: mode.setup ?? (() => () => {
    })
  };
}
async function getAuthorizedExecuteKey(parameters) {
  const { account, calls, permissionsId } = parameters;
  if (typeof permissionsId !== "undefined") {
    if (permissionsId === null)
      return void 0;
    const key = account.keys?.find((key2) => key2.publicKey === permissionsId && key2.privateKey);
    if (!key)
      throw new Error(`permission (id: ${permissionsId}) does not exist.`);
    return key;
  }
  const sessionKey = account.keys?.find((key) => {
    if (!key.privateKey)
      return false;
    if (key.role !== "session")
      return false;
    if (key.expiry < BigInt(Math.floor(Date.now() / 1e3)))
      return false;
    const hasValidScope = calls.every((call2) => key.permissions?.calls?.some((scope) => {
      if (scope.to && scope.to !== call2.to)
        return false;
      if (scope.signature) {
        if (!call2.data)
          return false;
        const selector = slice(call2.data, 0, 4);
        if (validate(scope.signature))
          return scope.signature === selector;
        if (getSelector2(scope.signature) !== selector)
          return false;
      }
      return true;
    }));
    if (hasValidScope)
      return true;
    return false;
  });
  const adminKey = account.keys?.find((key) => key.role === "admin" && key.privateKey);
  return sessionKey ?? adminKey;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/RpcRequest.js
function createStore3(options = {}) {
  let id = options.id ?? 0;
  return {
    prepare(options2) {
      return from19({
        id: id++,
        ...options2
      });
    },
    get id() {
      return id;
    }
  };
}
function from19(options) {
  return {
    ...options,
    jsonrpc: "2.0"
  };
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/RpcSchema.js
function from20() {
  return null;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/RpcSchema.js
var RpcSchema_exports = {};
__export(RpcSchema_exports, {
  account_getOnrampContactInfo: () => account_getOnrampContactInfo2,
  account_onrampStatus: () => account_onrampStatus2,
  account_resendVerifyPhone: () => account_resendVerifyPhone2,
  account_setEmail: () => account_setEmail2,
  account_setPhone: () => account_setPhone2,
  account_verifyEmail: () => account_verifyEmail2,
  account_verifyPhone: () => account_verifyPhone2,
  eth_accounts: () => eth_accounts,
  eth_chainId: () => eth_chainId,
  eth_requestAccounts: () => eth_requestAccounts,
  eth_sendTransaction: () => eth_sendTransaction,
  eth_signTypedData_v4: () => eth_signTypedData_v4,
  personal_sign: () => personal_sign,
  porto_ping: () => porto_ping,
  wallet_addFunds: () => wallet_addFunds,
  wallet_connect: () => wallet_connect,
  wallet_disconnect: () => wallet_disconnect,
  wallet_getAccountVersion: () => wallet_getAccountVersion,
  wallet_getAdmins: () => wallet_getAdmins,
  wallet_getAssets: () => wallet_getAssets2,
  wallet_getCallsStatus: () => wallet_getCallsStatus2,
  wallet_getCapabilities: () => wallet_getCapabilities2,
  wallet_getKeys: () => wallet_getKeys2,
  wallet_getPermissions: () => wallet_getPermissions,
  wallet_grantAdmin: () => wallet_grantAdmin,
  wallet_grantPermissions: () => wallet_grantPermissions,
  wallet_prepareCalls: () => wallet_prepareCalls2,
  wallet_prepareUpgradeAccount: () => wallet_prepareUpgradeAccount2,
  wallet_revokeAdmin: () => wallet_revokeAdmin,
  wallet_revokePermissions: () => wallet_revokePermissions,
  wallet_sendCalls: () => wallet_sendCalls,
  wallet_sendPreparedCalls: () => wallet_sendPreparedCalls2,
  wallet_switchEthereumChain: () => wallet_switchEthereumChain,
  wallet_upgradeAccount: () => wallet_upgradeAccount2,
  wallet_verifySignature: () => wallet_verifySignature2
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/permissionsRequest.js
var Schema2 = Request;
function fromKey2(key) {
  const { expiry, feeToken: feeToken2, permissions: permissions2, publicKey, type } = key;
  return {
    expiry,
    feeToken: feeToken2 ?? null,
    key: {
      publicKey,
      type
    },
    permissions: permissions2 ?? {}
  };
}
async function toKey2(request, options = {}) {
  if (!request)
    return void 0;
  const chainId = options.chainId ?? request.chainId;
  const expiry = request.expiry ?? 0;
  const feeToken2 = request.feeToken;
  const permissions2 = resolvePermissions(request, {
    feeTokens: options.feeTokens
  });
  const baseParameters = {
    chainId,
    expiry,
    feeToken: feeToken2,
    permissions: permissions2,
    role: "session"
  };
  if (request?.key)
    return from13({
      ...baseParameters,
      publicKey: request.key.publicKey,
      type: request.key.type ?? "secp256k1"
    });
  const hasWebCryptoSubtle = typeof globalThis.crypto?.subtle?.generateKey === "function";
  if (hasWebCryptoSubtle)
    try {
      return await createWebCryptoP256(baseParameters);
    } catch (error48) {
      if (!isWebCryptoUnavailable(error48))
        throw error48;
    }
  return createP256(baseParameters);
}
function isWebCryptoUnavailable(error48) {
  if (!(error48 instanceof Error))
    return false;
  const message = error48.message?.toLowerCase() ?? "";
  return error48.name === "TypeError" || error48.name === "ReferenceError" || message.includes("subtle") || message.includes("generatekey");
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Siwe.js
var domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/;
var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/;
var localhostRegex = /^localhost(:[0-9]{1,5})?$/;
var nonceRegex = /^[a-zA-Z0-9]{8,}$/;
var schemeRegex = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/;
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function createMessage(value) {
  const { chainId, domain: domain2, expirationTime, issuedAt = /* @__PURE__ */ new Date(), nonce, notBefore, requestId, resources, scheme, uri, version: version3 } = value;
  {
    if (chainId !== Math.floor(chainId))
      throw new InvalidMessageFieldError({
        field: "chainId",
        metaMessages: [
          "- Chain ID must be a EIP-155 chain ID.",
          "- See https://eips.ethereum.org/EIPS/eip-155",
          "",
          `Provided value: ${chainId}`
        ]
      });
    if (!(domainRegex.test(domain2) || ipRegex.test(domain2) || localhostRegex.test(domain2)))
      throw new InvalidMessageFieldError({
        field: "domain",
        metaMessages: [
          "- Domain must be an RFC 3986 authority.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${domain2}`
        ]
      });
    if (!nonceRegex.test(nonce))
      throw new InvalidMessageFieldError({
        field: "nonce",
        metaMessages: [
          "- Nonce must be at least 8 characters.",
          "- Nonce must be alphanumeric.",
          "",
          `Provided value: ${nonce}`
        ]
      });
    if (!isUri(uri))
      throw new InvalidMessageFieldError({
        field: "uri",
        metaMessages: [
          "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${uri}`
        ]
      });
    if (version3 !== "1")
      throw new InvalidMessageFieldError({
        field: "version",
        metaMessages: [
          "- Version must be '1'.",
          "",
          `Provided value: ${version3}`
        ]
      });
    if (scheme && !schemeRegex.test(scheme))
      throw new InvalidMessageFieldError({
        field: "scheme",
        metaMessages: [
          "- Scheme must be an RFC 3986 URI scheme.",
          "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
          "",
          `Provided value: ${scheme}`
        ]
      });
    const statement2 = value.statement;
    if (statement2?.includes("\n"))
      throw new InvalidMessageFieldError({
        field: "statement",
        metaMessages: [
          "- Statement must not include '\\n'.",
          "",
          `Provided value: ${statement2}`
        ]
      });
  }
  const address2 = from8(value.address, { checksum: true });
  const origin = (() => {
    if (scheme)
      return `${scheme}://${domain2}`;
    return domain2;
  })();
  const statement = (() => {
    if (!value.statement)
      return "";
    return `${value.statement}
`;
  })();
  const prefix = `${origin} wants you to sign in with your Ethereum account:
${address2}

${statement}`;
  let suffix = `URI: ${uri}
Version: ${version3}
Chain ID: ${chainId}
Nonce: ${nonce}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime)
    suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
  if (notBefore)
    suffix += `
Not Before: ${notBefore.toISOString()}`;
  if (requestId)
    suffix += `
Request ID: ${requestId}`;
  if (resources) {
    let content = "\nResources:";
    for (const resource of resources) {
      if (!isUri(resource))
        throw new InvalidMessageFieldError({
          field: "resources",
          metaMessages: [
            "- Every resource must be a RFC 3986 URI.",
            "- See https://www.rfc-editor.org/rfc/rfc3986",
            "",
            `Provided value: ${resource}`
          ]
        });
      content += `
- ${resource}`;
    }
    suffix += content;
  }
  return `${prefix}
${suffix}`;
}
function isUri(value) {
  if (/[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i.test(value))
    return false;
  if (/%[^0-9a-f]/i.test(value))
    return false;
  if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value))
    return false;
  const splitted = splitUri(value);
  const scheme = splitted[1];
  const authority = splitted[2];
  const path = splitted[3];
  const query = splitted[4];
  const fragment = splitted[5];
  if (!(scheme?.length && path && path.length >= 0))
    return false;
  if (authority?.length) {
    if (!(path.length === 0 || /^\//.test(path)))
      return false;
  } else {
    if (/^\/\//.test(path))
      return false;
  }
  if (!/^[a-z][a-z0-9+\-.]*$/.test(scheme.toLowerCase()))
    return false;
  let out = "";
  out += `${scheme}:`;
  if (authority?.length)
    out += `//${authority}`;
  out += path;
  if (query?.length)
    out += `?${query}`;
  if (fragment?.length)
    out += `#${fragment}`;
  return out;
}
function splitUri(value) {
  return value.match(/(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
}
function parseMessage(message) {
  const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
  const resources = message.split("Resources:")[1]?.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
    ...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
    ...notBefore ? { notBefore: new Date(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
var InvalidMessageFieldError = class extends BaseError2 {
  constructor(parameters) {
    const { field, metaMessages } = parameters;
    super(`Invalid Sign-In with Ethereum message field "${field}".`, {
      metaMessages
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Siwe.InvalidMessageFieldError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/siwe.js
async function authenticate(parameters) {
  const { address: address2, authUrl, message, signature, publicKey } = parameters;
  const { chainId } = parseMessage(message);
  return await fetch(authUrl.verify, {
    body: JSON.stringify({
      address: address2,
      chainId,
      message,
      signature,
      walletAddress: address2,
      ...publicKey && { publicKey }
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then((res) => res.json());
}
async function buildMessage(client, siwe, options) {
  const { chainId = client.chain?.id, domain: domain2, uri, resources, version: version3 = "1" } = siwe;
  const { address: address2 } = options;
  const authUrl = siwe.authUrl ? resolveAuthUrl(siwe.authUrl) : void 0;
  if (!chainId)
    throw new Error("`chainId` is required.");
  if (!domain2)
    throw new Error("`domain` is required.");
  if (!siwe.nonce && !authUrl?.nonce)
    throw new Error("`nonce` or `authUrl.nonce` is required.");
  if (!uri)
    throw new Error("`uri` is required.");
  const nonce = await (async () => {
    if (siwe.nonce)
      return siwe.nonce;
    if (!authUrl?.nonce)
      throw new Error("`nonce` or `authUrl.nonce` is required.");
    const response = await fetch(authUrl.nonce, {
      body: JSON.stringify({
        address: address2,
        chainId,
        walletAddress: address2
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    const res = await response.json().catch(() => void 0);
    if (!res?.nonce)
      throw new Error("`nonce` or `authUrl.nonce` is required.");
    return res.nonce;
  })();
  const message = createMessage({
    ...siwe,
    address: options.address,
    chainId,
    domain: domain2,
    nonce,
    resources,
    uri,
    version: version3
  });
  return message;
}
function resolveAuthUrl(authUrl, origin = "") {
  if (!authUrl)
    return void 0;
  const urls = (() => {
    if (typeof authUrl === "string") {
      const url2 = authUrl.replace(/\/$/, "");
      return {
        logout: url2 + "/logout",
        nonce: url2 + "/nonce",
        verify: url2 + "/verify"
      };
    }
    return authUrl;
  })();
  return {
    logout: resolveUrl(urls.logout, origin),
    nonce: resolveUrl(urls.nonce, origin),
    verify: resolveUrl(urls.verify, origin)
  };
}
function resolveUrl(url2, origin) {
  if (!origin)
    return url2;
  if (!url2.startsWith("/"))
    return url2;
  return origin + url2;
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/PersonalMessage.js
function encode5(data) {
  const message = from5(data);
  return concat(
    // Personal Sign Format: `0x19 ‖ "Ethereum Signed Message:\n" ‖ message.length ‖ message`
    "0x19",
    fromString("Ethereum Signed Message:\n" + size2(message)),
    message
  );
}
function getSignPayload3(data) {
  return keccak256(encode5(data));
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Rlp.js
function from21(value, options) {
  const { as } = options;
  const encodable = getEncodable(value);
  const cursor = create2(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (as === "Hex")
    return fromBytes(cursor.bytes);
  return cursor.bytes;
}
function fromHex5(hex4, options = {}) {
  const { as = "Hex" } = options;
  return from21(hex4, { as });
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode6 } of list) {
        encode6(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? fromHex(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length <= 255)
    return 1;
  if (length <= 65535)
    return 2;
  if (length <= 16777215)
    return 3;
  if (length <= 4294967295)
    return 4;
  throw new BaseError2("Length is too large.");
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/core/Authorization.js
function getSignPayload4(authorization) {
  return hash3(authorization, { presign: true });
}
function hash3(authorization, options = {}) {
  const { presign } = options;
  return keccak256(concat("0x05", fromHex5(toTuple2(presign ? {
    address: authorization.address,
    chainId: authorization.chainId,
    nonce: authorization.nonce
  } : authorization))));
}
function toTuple2(authorization) {
  const { address: address2, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return [
    chainId ? fromNumber(chainId) : "0x",
    address2,
    nonce ? fromNumber(nonce) : "0x",
    ...signature ? toTuple(signature) : []
  ];
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/ContractActions.js
async function getEip712Domain2(client, parameters) {
  const { account = client.account } = parameters;
  const account_ = account ? from14(account) : void 0;
  if (!account_)
    throw new Error("account is required.");
  const { domain: { name, version: version3 } } = await getEip712Domain(client, {
    address: account_.address
  });
  if (!client.chain)
    throw new Error("client.chain is required");
  return {
    chainId: client.chain.id,
    name,
    verifyingContract: account_.address,
    version: version3
  };
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/viem/RelayActions.js
var RelayActions_exports = {};
__export(RelayActions_exports, {
  addFaucetFunds: () => addFaucetFunds,
  createAccount: () => createAccount2,
  decorator: () => decorator,
  getAssets: () => getAssets,
  getAuthorization: () => getAuthorization,
  getCallsStatus: () => getCallsStatus,
  getCapabilities: () => getCapabilities,
  getKeys: () => getKeys2,
  getOnrampContactInfo: () => getOnrampContactInfo2,
  health: () => health2,
  onrampStatus: () => onrampStatus2,
  prepareCalls: () => prepareCalls2,
  prepareUpgradeAccount: () => prepareUpgradeAccount2,
  resendVerifyPhone: () => resendVerifyPhone2,
  sendCalls: () => sendCalls,
  sendPreparedCalls: () => sendPreparedCalls2,
  setEmail: () => setEmail2,
  setPhone: () => setPhone2,
  signCalls: () => signCalls,
  upgradeAccount: () => upgradeAccount2,
  verifyEmail: () => verifyEmail2,
  verifyPhone: () => verifyPhone2,
  verifySignature: () => verifySignature
});
async function createAccount2(client, parameters) {
  const account = fromPrivateKey(randomPrivateKey(), {
    keys: parameters.authorizeKeys
  });
  return await upgradeAccount2(client, {
    ...parameters,
    account
  });
}
async function getKeys2(client, parameters) {
  const { account = client.account, chainIds } = parameters;
  const account_ = account ? from14(account) : void 0;
  if (!account_)
    throw new Error("account is required.");
  const keys = await getKeys(client, {
    address: account_.address,
    chainIds
  });
  return Object.entries(keys).flatMap(([chainId, keys2]) => keys2.map((key) => fromRelay(key, { chainId: Number(chainId) })));
}
async function getOnrampContactInfo2(client, parameters) {
  const { address: address2, secret } = parameters;
  return await getOnrampContactInfo(client, {
    address: address2,
    secret
  });
}
async function onrampStatus2(client, parameters) {
  const { address: address2 } = parameters;
  return await onrampStatus(client, {
    address: address2
  });
}
async function prepareCalls2(client, parameters) {
  const { account = client.account, calls, chain = client.chain, feePayer, merchantUrl: merchantUrl2, nonce, preCalls: preCalls2, requiredFunds: requiredFunds3, revokeKeys: revokeKeys2 } = parameters;
  const account_ = account ? from14(account) : void 0;
  const key = parameters.key ?? (account_ ? getKey(account_, { role: "admin" }) : void 0);
  const hasSessionKey = parameters.authorizeKeys?.some((x) => x.role === "session");
  const { contracts, fees: { tokens } } = await getCapabilities(client, { chainId: chain?.id });
  const orchestrator = hasSessionKey ? contracts.orchestrator.address : void 0;
  const authorizeKeys2 = (parameters.authorizeKeys ?? []).map((key2) => toRelay(key2, { feeTokens: tokens, orchestrator }));
  const feeToken2 = (() => {
    if (parameters.feeToken)
      return parameters.feeToken;
    return key?.permissions?.spend?.[0]?.token;
  })();
  const preCall = typeof preCalls2 === "boolean" ? preCalls2 : false;
  const signedPreCalls = typeof preCalls2 === "object" ? preCalls2.map(({ context: context2, signature: signature2 }) => ({
    ...context2.preCall,
    signature: signature2
  })) : void 0;
  const args = {
    address: account_?.address,
    calls: calls ?? [],
    capabilities: {
      authorizeKeys: authorizeKeys2,
      meta: {
        feePayer,
        feeToken: feeToken2,
        nonce
      },
      preCall,
      preCalls: signedPreCalls,
      requiredFunds: requiredFunds3,
      revokeKeys: revokeKeys2?.map((key2) => ({
        hash: key2.hash
      }))
    },
    chain,
    key: key ? toRelay(key, { feeTokens: tokens }) : void 0
  };
  const result = await (async () => {
    if (merchantUrl2) {
      const client_ = createClient({
        chain: client.chain,
        transport: http(merchantUrl2)
      });
      return await prepareCalls(client_, args).catch((e) => {
        console.error(e);
        return prepareCalls(client, args);
      });
    }
    return await prepareCalls(client, args);
  })();
  const { capabilities, context, digest, signature, typedData } = result;
  if (merchantUrl2) {
    const isValid = await verifyPrepareCallsResponse(client, {
      response: result._raw,
      signature
    });
    if (!isValid)
      throw new Error(`cannot verify integrity of \`wallet_prepareCalls\` response from ${merchantUrl2}`);
  }
  return {
    capabilities: { ...capabilities, quote: context.quote },
    context,
    digest,
    key,
    typedData
  };
}
async function prepareUpgradeAccount2(client, parameters) {
  const { address: address2, authorizeKeys: keys, chain = client.chain } = parameters;
  if (!chain)
    throw new Error("chain is required.");
  const { contracts, fees: { tokens } } = await getCapabilities(client, { chainId: chain.id });
  const delegation = parameters.delegation ?? contracts.accountProxy.address;
  const hasSessionKey = keys.some((x) => x.role === "session");
  const orchestrator = hasSessionKey ? contracts.orchestrator.address : void 0;
  const authorizeKeys2 = keys.map((key) => {
    const permissions2 = key.role === "session" ? key.permissions : {};
    return toRelay({ ...key, permissions: permissions2 }, { feeTokens: tokens, orchestrator });
  });
  const { capabilities, chainId, context, digests, typedData } = await prepareUpgradeAccount(client, {
    address: address2,
    authorizeKeys: authorizeKeys2,
    chain,
    delegation
  });
  const account = from14({
    address: address2,
    keys
  });
  return {
    capabilities,
    chainId,
    context: {
      ...context,
      account
    },
    digests,
    typedData
  };
}
async function resendVerifyPhone2(client, parameters) {
  const { phone, walletAddress } = parameters;
  return await resendVerifyPhone(client, {
    phone,
    walletAddress
  });
}
async function sendCalls(client, parameters) {
  const { account = client.account, chain = client.chain, webAuthn } = parameters;
  if (!chain)
    throw new Error("`chain` is required.");
  const account_ = account ? from14(account) : void 0;
  if (!account_)
    throw new Error("`account` is required.");
  const key = parameters.key ?? getKey(account_, parameters);
  if (!key && !account_.sign)
    throw new Error("`key` or `account` with `sign` is required");
  const preCalls2 = await Promise.all((parameters.preCalls ?? []).map(async (pre) => {
    if (pre.signature)
      return pre;
    const { authorizeKeys: authorizeKeys2, key: key2, calls, revokeKeys: revokeKeys2 } = pre;
    const { context: context2, digest: digest2 } = await prepareCalls2(client, {
      account: account_,
      authorizeKeys: authorizeKeys2,
      calls,
      chain,
      feeToken: parameters.feeToken,
      key: key2,
      preCalls: true,
      revokeKeys: revokeKeys2
    });
    const signature2 = await sign5(key2, {
      address: null,
      payload: digest2,
      webAuthn
    });
    return { context: context2, signature: signature2 };
  }));
  const { capabilities, context, digest } = await prepareCalls2(client, {
    ...parameters,
    account: account_,
    chain,
    key,
    preCalls: preCalls2
  });
  const signature = await (async () => {
    if (key)
      return await sign5(key, {
        address: null,
        payload: digest,
        webAuthn,
        wrap: false
      });
    return await account_.sign({
      hash: digest
    });
  })();
  return await sendPreparedCalls2(client, {
    capabilities: capabilities.feeSignature ? {
      feeSignature: capabilities.feeSignature
    } : void 0,
    context,
    key,
    signature
  });
}
async function signCalls(request, options) {
  const isPrecall = Boolean(request.context.preCall);
  const { account, key } = options;
  if (account) {
    const keyIndex = account.keys?.findIndex((k) => k.publicKey === request.key?.publicKey);
    if (keyIndex === -1)
      throw new Error("key not found");
    return await sign6(account, {
      key: keyIndex,
      payload: request.digest,
      replaySafe: false,
      wrap: isPrecall
    });
  }
  if (key)
    return await sign5(key, {
      address: null,
      payload: request.digest,
      wrap: isPrecall
    });
  throw new Error("no key or account provided");
}
async function sendPreparedCalls2(client, parameters) {
  const { capabilities, context, key, signature } = parameters;
  return await sendPreparedCalls(client, {
    capabilities,
    context,
    key: key ? toRelay(key) : void 0,
    signature
  });
}
async function setEmail2(client, parameters) {
  const { email: email3, walletAddress } = parameters;
  return await setEmail(client, {
    email: email3,
    walletAddress
  });
}
async function setPhone2(client, parameters) {
  const { phone, walletAddress } = parameters;
  return await setPhone(client, {
    phone,
    walletAddress
  });
}
async function upgradeAccount2(client, parameters) {
  if (parameters.account) {
    const { account: account2 } = parameters;
    const authorizeKeys2 = [
      ...account2.keys ?? [],
      ...parameters.authorizeKeys ?? []
    ].filter((key, index, array2) => array2.findIndex((k) => k.id === key.id) === index);
    const { digests, ...request } = await prepareUpgradeAccount2(client, {
      ...parameters,
      address: account2.address,
      authorizeKeys: authorizeKeys2
    });
    const signatures2 = {
      auth: await account2.sign({ hash: digests.auth }),
      exec: await account2.sign({ hash: digests.exec })
    };
    return await upgradeAccount2(client, {
      ...request,
      signatures: signatures2
    });
  }
  const { context, signatures } = parameters;
  const account = from14(context.account);
  await upgradeAccount(client, {
    context,
    signatures
  });
  return account;
}
async function verifyEmail2(client, parameters) {
  const { chainId, email: email3, signature, token, walletAddress } = parameters;
  return await verifyEmail(client, {
    chainId,
    email: email3,
    signature,
    token,
    walletAddress
  });
}
async function verifyPhone2(client, parameters) {
  const { code, phone, walletAddress } = parameters;
  return await verifyPhone(client, {
    code,
    phone,
    walletAddress
  });
}
function decorator(client) {
  return {
    createAccount: (parameters) => createAccount2(client, parameters),
    getCallsStatus: (parameters) => getCallsStatus(client, parameters),
    getCapabilities: () => getCapabilities(client),
    getKeys: (parameters) => getKeys2(client, parameters),
    health: () => health2(client),
    prepareCalls: (parameters) => prepareCalls2(client, parameters),
    prepareUpgradeAccount: (parameters) => prepareUpgradeAccount2(client, parameters),
    sendCalls: (parameters) => sendCalls(client, parameters),
    sendPreparedCalls: (parameters) => sendPreparedCalls2(client, parameters),
    upgradeAccount: (parameters) => upgradeAccount2(client, parameters),
    verifySignature: (parameters) => verifySignature(client, parameters)
  };
}

// node_modules/@wagmi/connectors/node_modules/ox/_esm/erc8010/SignatureErc8010.js
var magicBytes = "0x8010801080108010801080108010801080108010801080108010801080108010";
var suffixParameters = from10("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function assert8(value) {
  if (typeof value === "string") {
    if (slice(value, -32) !== magicBytes)
      throw new InvalidWrappedSignatureError(value);
  } else
    assert6(value.authorization);
}
function wrap(value) {
  const { data, signature } = value;
  assert8(value);
  const self = recoverAddress({
    payload: getSignPayload4(value.authorization),
    signature: from9(value.authorization)
  });
  const suffix = encode3(suffixParameters, [
    {
      ...value.authorization,
      delegation: value.authorization.address,
      chainId: BigInt(value.authorization.chainId)
    },
    value.to ?? self,
    data ?? "0x"
  ]);
  const suffixLength = fromNumber(size2(suffix), { size: 32 });
  return concat(signature, suffix, suffixLength, magicBytes);
}
var InvalidWrappedSignatureError = class extends BaseError2 {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SignatureErc8010.InvalidWrappedSignatureError"
    });
  }
};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/erc8010.js
async function wrap2(client, parameters) {
  const { address: address2 } = parameters;
  const { authorization, data, to } = await getAuthorization(client, {
    address: address2
  });
  return wrap({
    authorization: {
      ...authorization,
      nonce: BigInt(authorization.nonce),
      r: BigInt(authorization.r),
      s: BigInt(authorization.s)
    },
    data,
    signature: parameters.signature,
    to
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/requiredFunds.js
function toRelay2(requiredFunds3, options) {
  const { tokens } = options;
  const interopTokens = tokens.filter((token) => token.interop);
  return requiredFunds3.map((requiredFund) => {
    if (requiredFund.address)
      return requiredFund;
    const interopToken = interopTokens.find((token) => token.symbol === requiredFund.symbol);
    if (!interopToken)
      throw new Error(`interop token not found: ${requiredFund.symbol}`);
    return {
      address: interopToken.address,
      value: from12(requiredFund.value, interopToken.decimals)
    };
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/tokens.js
async function getTokens(client, parameters) {
  const { chain = client.chain } = parameters ?? {};
  const tokens = await getCapabilities(client, {
    chainId: chain?.id
  }).then((capabilities) => capabilities.fees.tokens);
  return tokens;
}
async function getToken(client, parameters) {
  const { addressOrSymbol } = parameters;
  const tokens = await getTokens(client, parameters);
  return tokens.find(getToken.predicate(addressOrSymbol));
}
(function(getToken2) {
  function predicate(addressOrSymbol) {
    return (token) => {
      if (!addressOrSymbol)
        return false;
      if (validate3(addressOrSymbol))
        return isEqual(token.address, addressOrSymbol);
      if (addressOrSymbol === "native")
        return token.address === zeroAddress;
      return addressOrSymbol === token.symbol;
    };
  }
  getToken2.predicate = predicate;
})(getToken || (getToken = {}));
async function resolveFeeToken(client, parameters) {
  const { chain = client.chain, store } = parameters ?? {};
  const state = store?.getState() ?? {};
  const addressOrSymbol = parameters?.addressOrSymbol ?? state.feeToken;
  const feeTokens = await getTokens(client, { chain }).then((tokens) => tokens.filter((token) => token.feeToken));
  const feeToken2 = feeTokens?.find((feeToken3) => {
    if (!addressOrSymbol)
      return false;
    if (addressOrSymbol === "native" && feeToken3.address === zeroAddress)
      return true;
    if (validate3(addressOrSymbol) && isEqual(feeToken3.address, addressOrSymbol))
      return true;
    return addressOrSymbol === feeToken3.symbol;
  });
  return feeToken2;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/modes/relay.js
function relay(parameters = {}) {
  const config2 = parameters;
  const { mock, multichain = true, webAuthn } = config2;
  let address_internal;
  let email_internal;
  const keystoreHost = (() => {
    if (config2.keystoreHost === "self")
      return void 0;
    if (typeof window !== "undefined" && window.location?.hostname === "localhost")
      return void 0;
    return config2.keystoreHost;
  })();
  return from18({
    actions: {
      async addFunds() {
        throw new UnsupportedMethodError();
      },
      async createAccount(parameters2) {
        const { admins, email: email3, label, permissions: permissions2, internal, signInWithEthereum: signInWithEthereum2 } = parameters2;
        const { client } = internal;
        const eoa = fromPrivateKey(randomPrivateKey());
        const feeTokens = await getTokens(client);
        const adminKey = !mock ? await createWebAuthnP256({
          createFn: webAuthn?.createFn,
          label: label || `${eoa.address.slice(0, 8)}\u2026${eoa.address.slice(-6)}`,
          rpId: keystoreHost,
          userId: from6(eoa.address)
        }) : createHeadlessWebAuthnP256();
        const sessionKey = await toKey2(permissions2, {
          chainId: client.chain.id,
          feeTokens
        });
        const adminKeys = admins?.map((admin) => from13(admin));
        const account = await upgradeAccount2(client, {
          account: eoa,
          authorizeKeys: [
            adminKey,
            ...adminKeys ?? [],
            ...sessionKey ? [sessionKey] : []
          ]
        });
        address_internal = eoa.address;
        if (email3 && label)
          await setEmail2(client, {
            email: label,
            walletAddress: account.address
          });
        const signInWithEthereum_response = await (async () => {
          if (!signInWithEthereum2)
            return void 0;
          const message = await buildMessage(client, signInWithEthereum2, {
            address: account.address
          });
          const signature = await sign6(eoa, {
            payload: getSignPayload3(fromString(message))
          });
          const signature_erc8010 = await wrap2(client, {
            address: account.address,
            signature
          });
          return { message, signature: signature_erc8010 };
        })();
        return {
          account: {
            ...account,
            signInWithEthereum: signInWithEthereum_response
          }
        };
      },
      async getAccountVersion(parameters2) {
        const { address: address2, internal } = parameters2;
        const { client } = internal;
        const { contracts } = await getCapabilities(client);
        const { accountImplementation } = contracts;
        const latest = await getEip712Domain2(client, {
          account: from14(accountImplementation)
        }).then((x) => x.version);
        const current = await getEip712Domain2(client, {
          account: address2
        }).then((x) => x.version).catch(() => latest);
        if (!current || !latest)
          throw new Error("version not found.");
        return { current, latest };
      },
      async getAssets(parameters2) {
        const { account, chainFilter, assetFilter, assetTypeFilter, internal } = parameters2;
        const { client } = internal;
        const result = await getAssets(client, {
          account,
          assetFilter,
          assetTypeFilter,
          chainFilter
        });
        return result;
      },
      async getCallsStatus(parameters2) {
        const { id, internal } = parameters2;
        const { client } = internal;
        const result = await getCallsStatus(client, {
          id
        });
        return {
          atomic: true,
          chainId: fromNumber(client.chain.id),
          id,
          receipts: result.receipts?.map((receipt) => ({
            blockHash: receipt.blockHash,
            blockNumber: fromNumber(receipt.blockNumber),
            gasUsed: fromNumber(receipt.gasUsed),
            logs: receipt.logs,
            status: receipt.status,
            transactionHash: receipt.transactionHash
          })),
          status: result.status,
          version: "1.0"
        };
      },
      async getCapabilities(parameters2) {
        const { chainIds, internal } = parameters2;
        const { client } = internal;
        const base2 = {
          atomic: {
            status: "supported"
          },
          atomicBatch: {
            supported: true
          },
          feeToken: {
            supported: true,
            tokens: []
          },
          merchant: {
            supported: true
          },
          permissions: {
            supported: true
          },
          requiredFunds: {
            supported: Boolean(multichain),
            tokens: []
          }
        };
        const capabilities = await getCapabilities(client, {
          chainIds: chainIds ? chainIds.map((id) => toNumber(id)) : "all",
          raw: true
        });
        return Object.entries(capabilities).reduce((acc, [chainId, capabilities2]) => ({
          // biome-ignore lint/performance/noAccumulatingSpread: _
          ...acc,
          [chainId]: {
            ...base2,
            ...capabilities2,
            feeToken: {
              supported: true,
              tokens: capabilities2.fees.tokens
            },
            requiredFunds: {
              supported: Boolean(multichain),
              tokens: multichain ? capabilities2.fees.tokens.filter((token) => token.interop) : []
            }
          }
        }), {});
      },
      async getKeys(parameters2) {
        const { account, chainIds, internal } = parameters2;
        const { client } = internal;
        const keys = await getKeys2(client, {
          account,
          chainIds
        });
        return uniqBy([...keys, ...account.keys ?? []], (key) => key.publicKey);
      },
      async grantAdmin(parameters2) {
        const { account, internal } = parameters2;
        const { client } = internal;
        const authorizeKey = from13(parameters2.key, {
          chainId: client.chain.id
        });
        const feeToken2 = await resolveFeeToken(client, {
          addressOrSymbol: parameters2.feeToken,
          store: internal.store
        });
        const { id } = await sendCalls(client, {
          account,
          authorizeKeys: [authorizeKey],
          feeToken: feeToken2?.address,
          webAuthn
        });
        await waitForCallsStatus(client, {
          id,
          pollingInterval: 500
        });
        return { key: authorizeKey };
      },
      async grantPermissions(parameters2) {
        const { account, internal, permissions: permissions2 } = parameters2;
        const { client } = internal;
        const feeTokens = await getTokens(client);
        const authorizeKey = await toKey2(permissions2, {
          chainId: client.chain.id,
          feeTokens
        });
        if (!authorizeKey)
          throw new Error("key to authorize not found.");
        const adminKey = account.keys?.find((key) => key.role === "admin" && key.privateKey);
        if (!adminKey)
          throw new Error("admin key not found.");
        const { context, digest } = await prepareCalls2(client, {
          account,
          authorizeKeys: [authorizeKey],
          key: adminKey,
          preCalls: true
        });
        const signature = await sign5(adminKey, {
          address: null,
          payload: digest
        });
        await sendPreparedCalls2(client, {
          context,
          key: adminKey,
          signature
        });
        return { key: authorizeKey };
      },
      async loadAccounts(parameters2) {
        const { internal, permissions: permissions2, signInWithEthereum: signInWithEthereum2 } = parameters2;
        const { client } = internal;
        const feeTokens = await getTokens(client);
        const authorizeKey = await toKey2(permissions2, {
          chainId: client.chain.id,
          feeTokens
        });
        const { digest, digestType, message } = await (async () => {
          if (signInWithEthereum2 && parameters2.address) {
            const message2 = await buildMessage(client, signInWithEthereum2, {
              address: parameters2.address
            });
            return {
              context: void 0,
              digest: getSignPayload3(fromString(message2)),
              digestType: "siwe",
              message: message2
            };
          }
          return {
            context: void 0,
            digest: "0x",
            message: void 0
          };
        })();
        const { address: address2, credentialId, webAuthnSignature } = await (async () => {
          if (mock) {
            if (!address_internal)
              throw new Error("address_internal not found.");
            return {
              address: address_internal,
              credentialId: void 0
            };
          }
          if (parameters2.address && parameters2.key)
            return {
              address: parameters2.address,
              credentialId: parameters2.key.credentialId
            };
          const webAuthnSignature2 = await sign3({
            challenge: digest,
            getFn: webAuthn?.getFn,
            rpId: keystoreHost
          });
          const response = webAuthnSignature2.raw.response;
          const address3 = toHex(new Uint8Array(response.userHandle));
          const credentialId2 = webAuthnSignature2.raw.id;
          return { address: address3, credentialId: credentialId2, webAuthnSignature: webAuthnSignature2 };
        })();
        const keys = await getKeys2(client, {
          account: address2,
          chainIds: [client.chain.id]
        });
        const account = from14({
          address: address2,
          keys: [...keys, ...authorizeKey ? [authorizeKey] : []].map((key, i) => {
            if (i === 0) {
              if (key.type === "webauthn-p256")
                return fromWebAuthnP256({
                  ...key,
                  credential: {
                    id: credentialId,
                    publicKey: fromHex2(key.publicKey)
                  },
                  id: address2,
                  rpId: keystoreHost
                });
            }
            return key;
          })
        });
        const adminKey = getKey(account, { role: "admin" });
        const signature = await (async () => {
          if (digest === "0x")
            return void 0;
          if (webAuthnSignature)
            return wrapSignature(serializeWebAuthnSignature(webAuthnSignature), {
              keyType: "webauthn-p256",
              publicKey: adminKey.publicKey
            });
          return await sign5(adminKey, {
            address: account.address,
            payload: digest
          });
        })();
        if (authorizeKey) {
          const { context, digest: digest2 } = await prepareCalls2(client, {
            account,
            authorizeKeys: [authorizeKey],
            preCalls: true
          });
          const signature2 = await sign5(adminKey, {
            address: null,
            payload: digest2
          });
          await sendPreparedCalls2(client, {
            context,
            key: adminKey,
            signature: signature2
          });
        }
        const signInWithEthereum_response = await (async () => {
          if (!signInWithEthereum2)
            return void 0;
          if (digestType === "siwe" && message && signature) {
            const signature_erc8010 = await wrap2(client, {
              address: account.address,
              signature
            });
            return { message, signature: signature_erc8010 };
          }
          {
            const message2 = await buildMessage(client, signInWithEthereum2, {
              address: account.address
            });
            const signature2 = await sign6(account, {
              payload: getSignPayload3(fromString(message2)),
              role: "admin"
            });
            const signature_erc8010 = await wrap2(client, {
              address: account.address,
              signature: signature2
            });
            return {
              message: message2,
              signature: signature_erc8010
            };
          }
        })();
        return {
          accounts: [
            {
              ...account,
              signInWithEthereum: signInWithEthereum_response
            }
          ]
        };
      },
      async prepareCalls(parameters2) {
        const { account, calls, internal, merchantUrl: merchantUrl2 } = parameters2;
        const { client } = internal;
        const key = parameters2.key ?? await getAuthorizedExecuteKey({
          account,
          calls
        });
        if (!key)
          throw new Error("cannot find authorized key to sign with.");
        const [tokens, feeToken2] = await Promise.all([
          getTokens(client),
          resolveFeeToken(client, {
            addressOrSymbol: parameters2.feeToken,
            store: internal.store
          })
        ]);
        const requiredFunds3 = toRelay2(parameters2.requiredFunds ?? [], {
          tokens
        });
        const { capabilities, context, digest, typedData } = await prepareCalls2(client, {
          account,
          calls,
          feeToken: feeToken2?.address,
          key,
          merchantUrl: merchantUrl2,
          requiredFunds: multichain ? requiredFunds3 : void 0
        });
        const quotes = context.quote?.quotes ?? [];
        const outputQuote = quotes[quotes.length - 1];
        return {
          account,
          capabilities: {
            ...capabilities,
            quote: context.quote
          },
          chainId: client.chain.id,
          context: {
            ...context,
            account,
            calls,
            nonce: outputQuote?.intent.nonce
          },
          digest,
          key,
          typedData
        };
      },
      async prepareUpgradeAccount(parameters2) {
        const { address: address2, email: email3, label, internal, permissions: permissions2 } = parameters2;
        const { client } = internal;
        const [tokens, feeToken2] = await Promise.all([
          getTokens(client),
          resolveFeeToken(client, {
            store: internal.store
          })
        ]);
        const adminKey = !mock ? await createWebAuthnP256({
          createFn: webAuthn?.createFn,
          label: label || `${address2.slice(0, 8)}\u2026${address2.slice(-6)}`,
          rpId: keystoreHost,
          userId: from6(address2)
        }) : createHeadlessWebAuthnP256();
        const sessionKey = await toKey2(permissions2, {
          chainId: client.chain.id,
          feeTokens: tokens
        });
        const { context, digests } = await prepareUpgradeAccount2(client, {
          address: address2,
          authorizeKeys: [adminKey, ...sessionKey ? [sessionKey] : []],
          feeToken: feeToken2?.address
        });
        if (email3)
          email_internal = label;
        return {
          context,
          digests
        };
      },
      async revokeAdmin(parameters2) {
        const { account, id, internal } = parameters2;
        const { client } = internal;
        const key = account.keys?.find((key2) => key2.id === id);
        if (!key)
          return;
        if (key.type === "webauthn-p256" && account.keys?.filter((key2) => key2.type === "webauthn-p256").length === 1)
          throw new Error("revoke the only WebAuthn key left.");
        try {
          const feeToken2 = await resolveFeeToken(client, {
            addressOrSymbol: parameters2.feeToken,
            store: internal.store
          });
          const { id: id2 } = await sendCalls(client, {
            account,
            feeToken: feeToken2?.address,
            revokeKeys: [key],
            webAuthn
          });
          await waitForCallsStatus(client, {
            id: id2
          });
        } catch (e) {
          const error48 = e;
          if (error48.name === "Rpc.ExecutionError" && error48.abiError?.name === "KeyDoesNotExist")
            return;
          throw e;
        }
      },
      async revokePermissions(parameters2) {
        const { account, id, internal } = parameters2;
        const { client } = internal;
        const key = account.keys?.find((key2) => key2.id === id);
        if (!key)
          return;
        if (key.role === "admin")
          throw new Error("cannot revoke admins.");
        try {
          const feeToken2 = await resolveFeeToken(client, {
            addressOrSymbol: parameters2.feeToken,
            store: internal.store
          });
          const { id: id2 } = await sendCalls(client, {
            account,
            feeToken: feeToken2?.address,
            revokeKeys: [key],
            webAuthn
          });
          await waitForCallsStatus(client, {
            id: id2
          });
        } catch (e) {
          const error48 = e;
          if (error48.name === "Rpc.ExecutionError" && error48.abiError?.name === "KeyDoesNotExist")
            return;
          throw e;
        }
      },
      async sendCalls(parameters2) {
        const { account, asTxHash, calls, chainId, internal, merchantUrl: merchantUrl2 } = parameters2;
        const { client } = internal;
        const key = await getAuthorizedExecuteKey({
          account,
          calls,
          permissionsId: parameters2.permissionsId
        });
        const [tokens, feeToken2] = await Promise.all([
          getTokens(client),
          resolveFeeToken(client, {
            addressOrSymbol: parameters2.feeToken,
            store: internal.store
          })
        ]);
        const requiredFunds3 = toRelay2(parameters2.requiredFunds ?? [], {
          tokens
        });
        const result = await sendCalls(client, {
          account,
          calls,
          feeToken: feeToken2?.address,
          key,
          merchantUrl: merchantUrl2,
          requiredFunds: multichain ? requiredFunds3 : void 0,
          webAuthn,
          ...chainId ? { chain: { id: chainId } } : {}
        });
        if (asTxHash) {
          const { id, receipts, status } = await waitForCallsStatus(client, {
            id: result.id,
            pollingInterval: 500
          });
          if (!receipts?.[0]) {
            if (status === "success")
              throw new UnknownBundleIdError({
                message: "Call bundle with id: " + id + " not found."
              });
            throw new TransactionRejectedError({
              message: "Transaction failed under call bundle id: " + id + "."
            });
          }
          return {
            id: receipts[0].transactionHash
          };
        }
        return result;
      },
      async sendPreparedCalls(parameters2) {
        const { context, key, internal, signature } = parameters2;
        const { client } = internal;
        const { id } = await sendPreparedCalls2(client, {
          context,
          key,
          signature
        });
        return id;
      },
      async signPersonalMessage(parameters2) {
        const { account, data, internal } = parameters2;
        const { client } = internal;
        const key = account.keys?.find((key2) => key2.role === "admin" && key2.privateKey);
        if (!key)
          throw new Error("cannot find admin key to sign with.");
        const signature = await sign6(account, {
          key,
          payload: getSignPayload3(data),
          webAuthn
        });
        return wrap2(client, { address: account.address, signature });
      },
      async signTypedData(parameters2) {
        const { account, internal } = parameters2;
        const { client } = internal;
        const key = account.keys?.find((key2) => key2.role === "admin" && key2.privateKey);
        if (!key)
          throw new Error("cannot find admin key to sign with.");
        const data = parse(parameters2.data);
        const isOrchestrator = data.domain?.name === "Orchestrator";
        const signature = await sign6(account, {
          key,
          payload: getSignPayload(data),
          // If the domain is the Orchestrator, we don't need to replay-safe sign.
          replaySafe: !isOrchestrator,
          webAuthn
        });
        return isOrchestrator ? signature : wrap2(client, { address: account.address, signature });
      },
      async upgradeAccount(parameters2) {
        const { account, context, internal, signatures } = parameters2;
        const { client } = internal;
        await upgradeAccount2(client, {
          context,
          signatures
        });
        if (email_internal)
          await setEmail2(client, {
            email: email_internal,
            walletAddress: account.address
          });
        return { account };
      },
      async verifyEmail(parameters2) {
        const { account, chainId, email: email3, token, internal, walletAddress } = parameters2;
        const { client } = internal;
        const key = account.keys?.find((key2) => key2.role === "admin" && key2.privateKey);
        if (!key)
          throw new Error("cannot find admin key to sign with.");
        const signature = await sign6(account, {
          key,
          payload: keccak256(fromString(`${email3}${token}`)),
          webAuthn
        });
        return await verifyEmail2(client, {
          chainId,
          email: email3,
          signature,
          token,
          walletAddress
        });
      }
    },
    config: parameters,
    name: "rpc"
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/modes/dialog.js
function dialog(parameters = {}) {
  const { fallback: fallback2 = relay(), host = hostUrls.prod, renderer = iframe(), theme, themeController } = parameters;
  const listeners = /* @__PURE__ */ new Set();
  const requestStore = createStore3();
  function getProvider(store) {
    return from2({
      async request(r) {
        const request = requestStore.prepare(r);
        store.setState((x) => {
          const account = x.accounts[0];
          const adminKey = account?.keys?.find((key) => key.role === "admin" && key.type === "webauthn-p256");
          return {
            ...x,
            requestQueue: [
              ...x.requestQueue,
              {
                account: account ? {
                  address: account.address,
                  key: adminKey ? {
                    credentialId: adminKey?.credentialId,
                    publicKey: adminKey.publicKey
                  } : void 0
                } : void 0,
                request,
                status: "pending"
              }
            ]
          };
        });
        return new Promise((resolve, reject) => {
          const listener = (requestQueue) => {
            const queued = requestQueue.find((x) => x.request.id === request.id);
            if (!queued && requestQueue.length === 0) {
              listeners.delete(listener);
              reject(new UserRejectedRequestError());
              return;
            }
            if (!queued)
              return;
            if (queued.status !== "success" && queued.status !== "error")
              return;
            listeners.delete(listener);
            if (queued.status === "success")
              resolve(queued.result);
            else
              reject(parseError2(queued.error));
            store.setState((x) => ({
              ...x,
              requestQueue: x.requestQueue.filter((x2) => x2.request.id !== request.id)
            }));
          };
          listeners.add(listener);
        });
      }
    }, { schema: from20() });
  }
  return from18({
    actions: {
      async addFunds(parameters2) {
        const { internal } = parameters2;
        const { request, store } = internal;
        if (request.method !== "wallet_addFunds")
          throw new Error("Cannot add funds for method: " + request.method);
        const provider = getProvider(store);
        return await provider.request(request);
      },
      async createAccount(parameters2) {
        const { internal } = parameters2;
        const { client, config: config2, request, store } = internal;
        const { storage } = config2;
        const provider = getProvider(store);
        const account = await (async () => {
          if (request.method === "wallet_connect") {
            const [{ capabilities, chainIds }] = request._decoded.params ?? [{}];
            const authUrl = getAuthUrl(capabilities?.signInWithEthereum?.authUrl ?? config2.authUrl, { storage });
            const signInWithEthereum2 = request.params?.[0]?.capabilities?.signInWithEthereum;
            const key = await toKey2(capabilities?.grantPermissions, {
              chainId: client.chain.id
            });
            const permissionsRequest = key ? encode(Schema2, fromKey2(key)) : void 0;
            const { accounts } = await provider.request({
              ...request,
              params: [
                {
                  capabilities: {
                    ...request.params?.[0]?.capabilities,
                    grantPermissions: permissionsRequest,
                    signInWithEthereum: authUrl || signInWithEthereum2 ? {
                      ...signInWithEthereum2,
                      authUrl
                    } : void 0
                  },
                  chainIds: chainIds?.map((chainId) => fromNumber(chainId))
                }
              ]
            });
            const [account2] = accounts;
            if (!account2)
              throw new Error("no account found.");
            const adminKeys = account2.capabilities?.admins?.map((admin) => from13(admin, { chainId: client.chain.id })).filter(Boolean);
            const sessionKeys = account2.capabilities?.permissions?.map((permission) => {
              try {
                const key_permission = toKey(decode(Schema, permission));
                if (key_permission.id === key?.id)
                  return {
                    ...key_permission,
                    ...key,
                    permissions: key_permission.permissions
                  };
                return key_permission;
              } catch {
                return void 0;
              }
            }).filter(Boolean);
            const signInWithEthereum_response = await (async () => {
              if (!account2.capabilities?.signInWithEthereum)
                return;
              const { message, signature } = account2.capabilities.signInWithEthereum;
              if (!authUrl)
                return {
                  message,
                  signature
                };
              const { token } = await authenticate({
                address: account2.address,
                authUrl,
                message,
                publicKey: account2.capabilities?.admins?.[0]?.publicKey,
                signature
              });
              return {
                message,
                signature,
                token
              };
            })();
            return {
              ...from14({
                address: account2.address,
                keys: [...adminKeys ?? [], ...sessionKeys ?? []]
              }),
              signInWithEthereum: signInWithEthereum_response
            };
          }
          throw new Error(`Account creation not supported on method: ${request.method}`);
        })();
        return {
          account
        };
      },
      async disconnect(parameters2) {
        const { internal } = parameters2;
        const { config: config2 } = internal;
        const { storage } = config2;
        const authUrl_storage = await storage.getItem("porto.authUrl") || void 0;
        const authUrl = getAuthUrl(config2.authUrl ?? authUrl_storage, {
          storage
        });
        if (authUrl)
          await fetch(authUrl.logout, {
            credentials: "include",
            method: "POST"
          }).catch(() => {
          });
      },
      async getAccountVersion(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_getAccountVersion")
          throw new Error("Cannot get version for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.getAccountVersion(parameters2);
        const provider = getProvider(store);
        const result = await provider.request(request);
        return result;
      },
      async getAssets(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_getAssets")
          throw new Error("Cannot get assets for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.getAssets(parameters2);
        const provider = getProvider(store);
        const result = await provider.request(request);
        return decode(wallet_getAssets2.Response, result);
      },
      async getCallsStatus(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_getCallsStatus")
          throw new Error("Cannot get status for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.getCallsStatus(parameters2);
        const provider = getProvider(store);
        const result = await provider.request(request);
        return result;
      },
      async getCapabilities(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_getCapabilities")
          throw new Error("Cannot get capabilities for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.getCapabilities(parameters2);
        const provider = getProvider(store);
        const result = await provider.request(request);
        return result;
      },
      async getKeys(parameters2) {
        const { account, chainIds, internal } = parameters2;
        const { store } = internal;
        const keys = await (async () => {
          if (!renderer.supportsHeadless)
            return fallback2.actions.getKeys(parameters2);
          const provider = getProvider(store);
          const result = await provider.request({
            method: "wallet_getKeys",
            params: [
              encode(wallet_getKeys2.Parameters, {
                address: account.address,
                chainIds
              })
            ]
          });
          return decode(wallet_getKeys2.Response, result);
        })();
        return uniqBy([...keys, ...account.keys ?? []], (key) => key.publicKey);
      },
      async grantAdmin(parameters2) {
        const { internal } = parameters2;
        const { request, store } = internal;
        if (request.method !== "wallet_grantAdmin")
          throw new Error("Cannot authorize admin for method: " + request.method);
        const [params] = request._decoded.params;
        const key = from13(params.key);
        if (!key)
          throw new Error("no key found.");
        const feeToken2 = await resolveFeeToken2(internal, parameters2);
        const provider = getProvider(store);
        await provider.request({
          method: "wallet_grantAdmin",
          params: [
            {
              ...request.params?.[0],
              capabilities: {
                ...request.params?.[0]?.capabilities,
                feeToken: feeToken2
              }
            }
          ]
        });
        return { key };
      },
      async grantPermissions(parameters2) {
        const { internal } = parameters2;
        const { client, request, store } = internal;
        if (request.method !== "wallet_grantPermissions")
          throw new Error("Cannot grant permissions for method: " + request.method);
        const [{ address: address2, ...permissions2 }] = request._decoded.params;
        const key = await toKey2(permissions2, {
          chainId: client.chain.id
        });
        if (!key)
          throw new Error("no key found.");
        const permissionsRequest = encode(Schema2, fromKey2(key));
        const provider = getProvider(store);
        await provider.request({
          method: "wallet_grantPermissions",
          params: [permissionsRequest]
        });
        return { key };
      },
      async loadAccounts(parameters2) {
        const { internal } = parameters2;
        const { client, config: config2, store } = internal;
        const { storage } = config2;
        const provider = getProvider(store);
        const request = internal.request;
        if (request.method !== "wallet_connect" && request.method !== "eth_requestAccounts")
          throw new Error("Cannot load accounts for method: " + request.method);
        const accounts = await (async () => {
          const [params] = request._decoded.params ?? [];
          const { capabilities } = params ?? {};
          const authUrl = getAuthUrl(capabilities?.signInWithEthereum?.authUrl ?? config2.authUrl, { storage });
          const signInWithEthereum2 = request.params?.[0]?.capabilities?.signInWithEthereum;
          const key = await toKey2(capabilities?.grantPermissions, {
            chainId: client.chain.id
          });
          const permissionsRequest = key ? encode(Schema2, fromKey2(key)) : void 0;
          const { accounts: accounts2 } = await provider.request({
            method: "wallet_connect",
            params: [
              {
                ...request.params?.[0],
                capabilities: {
                  ...request.params?.[0]?.capabilities,
                  grantPermissions: permissionsRequest,
                  signInWithEthereum: authUrl || signInWithEthereum2 ? {
                    ...signInWithEthereum2,
                    authUrl
                  } : void 0
                }
              }
            ]
          });
          return Promise.all(accounts2.map(async (account) => {
            const adminKeys = account.capabilities?.admins?.map((key2) => from13(key2)).filter(Boolean);
            const sessionKeys = account.capabilities?.permissions?.map((permission) => {
              try {
                const key_permission = toKey(decode(Schema, permission));
                if (key_permission.id === key?.id)
                  return {
                    ...key_permission,
                    ...key,
                    permissions: key_permission.permissions
                  };
                return key_permission;
              } catch {
                return void 0;
              }
            }).filter(Boolean);
            const signInWithEthereum_response = await (async () => {
              if (!account.capabilities?.signInWithEthereum)
                return;
              const { message, signature } = account.capabilities.signInWithEthereum;
              if (!authUrl)
                return {
                  message,
                  signature
                };
              const { token } = await authenticate({
                address: account.address,
                authUrl,
                message,
                publicKey: account.capabilities?.admins?.[0]?.publicKey,
                signature
              });
              return {
                message,
                signature,
                token
              };
            })();
            return {
              ...from14({
                address: account.address,
                keys: [...adminKeys ?? [], ...sessionKeys ?? []]
              }),
              signInWithEthereum: signInWithEthereum_response
            };
          }));
        })();
        return {
          accounts
        };
      },
      async prepareCalls(parameters2) {
        const { account, internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_prepareCalls")
          throw new Error("Cannot prepare calls for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.prepareCalls(parameters2);
        const feeToken2 = await resolveFeeToken2(internal, parameters2);
        const provider = getProvider(store);
        const result = decode(wallet_prepareCalls2.Response, await provider.request({
          ...request,
          params: [
            {
              ...request.params?.[0],
              capabilities: {
                ...request.params?.[0]?.capabilities,
                feeToken: feeToken2
              }
            }
          ]
        }));
        return {
          account,
          chainId: Number(result.chainId),
          context: result.context,
          digest: result.digest,
          key: result.key,
          typedData: result.typedData
        };
      },
      async prepareUpgradeAccount(parameters2) {
        const { internal } = parameters2;
        const { client, store, request } = internal;
        if (request.method !== "wallet_prepareUpgradeAccount")
          throw new Error("Cannot prepare upgrade for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.prepareUpgradeAccount(parameters2);
        const [{ capabilities }] = request._decoded.params ?? [{}];
        const key = await toKey2(capabilities?.grantPermissions, {
          chainId: client.chain.id
        });
        const permissionsRequest = key ? encode(Schema2, fromKey2(key)) : void 0;
        const provider = getProvider(store);
        const { context, digests } = await provider.request({
          ...request,
          params: [
            {
              ...request.params?.[0],
              capabilities: {
                ...request.params?.[0]?.capabilities,
                grantPermissions: permissionsRequest
              }
            }
          ]
        });
        const keys = context.account.keys?.map((k) => {
          if (k.id === key?.id)
            return { ...k, ...key };
          return k;
        });
        return {
          context: {
            ...context,
            account: { ...context.account, keys }
          },
          digests
        };
      },
      async revokeAdmin(parameters2) {
        const { account, id, internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_revokeAdmin")
          throw new Error("Cannot revoke admin for method: " + request.method);
        const key = account.keys?.find((key2) => key2.id === id);
        if (!key)
          return;
        if (key.type === "webauthn-p256" && account.keys?.filter((key2) => key2.type === "webauthn-p256").length === 1)
          throw new Error("revoke the only WebAuthn key left.");
        const feeToken2 = await resolveFeeToken2(internal, parameters2);
        const provider = getProvider(store);
        return await provider.request({
          ...request,
          params: [
            {
              ...request.params?.[0],
              capabilities: {
                ...request.params?.[0]?.capabilities,
                feeToken: feeToken2
              }
            }
          ]
        });
      },
      async revokePermissions(parameters2) {
        const { account, id, internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_revokePermissions")
          throw new Error("Cannot revoke permissions for method: " + request.method);
        const key = account.keys?.find((key2) => key2.id === id);
        if (!key)
          return;
        if (key.role === "admin")
          throw new Error("cannot revoke permissions.");
        const provider = getProvider(store);
        return await provider.request(request);
      },
      async sendCalls(parameters2) {
        const { account, asTxHash, calls, chainId, internal, merchantUrl: merchantUrl2, requiredFunds: requiredFunds3 } = parameters2;
        const { client, store, request } = internal;
        const provider = getProvider(store);
        const feeToken2 = await resolveFeeToken2(internal, parameters2);
        const key = await getAuthorizedExecuteKey({
          account,
          calls,
          permissionsId: parameters2.permissionsId
        });
        if (key && key.role === "session") {
          if (!renderer.supportsHeadless)
            return fallback2.actions.sendCalls(parameters2);
          try {
            const req = await provider.request(encode(wallet_prepareCalls2.Request, {
              method: "wallet_prepareCalls",
              params: [
                {
                  calls,
                  capabilities: {
                    ...request._decoded.method === "wallet_sendCalls" ? request._decoded.params?.[0]?.capabilities : void 0,
                    feeToken: feeToken2,
                    merchantUrl: merchantUrl2,
                    requiredFunds: requiredFunds3
                  },
                  chainId,
                  from: account.address,
                  key
                }
              ]
            }));
            const quotes = req.capabilities?.quote?.quotes ?? [];
            const hasFeeDeficit = quotes.some((quote, index) => {
              const isMultichainDestination = index === quotes.length - 1 && quotes.length > 1;
              if (isMultichainDestination)
                return false;
              return toBigInt(quote.feeTokenDeficit) > 0n;
            });
            if (hasFeeDeficit)
              throw new Error("insufficient funds");
            const signature = await sign5(key, {
              address: null,
              payload: req.digest,
              wrap: false
            });
            const result = await provider.request({
              method: "wallet_sendPreparedCalls",
              params: [
                {
                  ...req,
                  signature
                }
              ]
            });
            const response = result[0];
            if (!response)
              throw new Error("id not found");
            if (asTxHash) {
              const { id, receipts, status } = await waitForCallsStatus(client, {
                id: response.id,
                pollingInterval: 500
              });
              if (!receipts?.[0]) {
                if (status === "success")
                  throw new UnknownBundleIdError({
                    message: "Call bundle with id: " + id + " not found."
                  });
                throw new TransactionRejectedError({
                  message: "Transaction failed under call bundle id: " + id + "."
                });
              }
              return {
                id: receipts[0].transactionHash
              };
            }
            return response;
          } catch {
          }
        }
        if (request.method === "eth_sendTransaction") {
          const id = await provider.request({
            ...request,
            params: [
              {
                ...request.params?.[0],
                // @ts-expect-error
                capabilities: {
                  feeToken: feeToken2,
                  merchantUrl: merchantUrl2
                },
                ...chainId ? { chainId: fromNumber(chainId) } : {}
              }
            ]
          });
          return { id };
        }
        if (request.method === "wallet_sendCalls") {
          const result = await provider.request({
            method: "wallet_sendCalls",
            params: [
              {
                ...request.params?.[0],
                capabilities: {
                  ...request.params?.[0]?.capabilities,
                  feeToken: feeToken2,
                  merchantUrl: merchantUrl2
                },
                ...chainId ? { chainId: fromNumber(chainId) } : {}
              }
            ]
          });
          return result;
        }
        throw new Error("Cannot execute for method: " + request.method);
      },
      async sendPreparedCalls(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_sendPreparedCalls")
          throw new Error("Cannot send prepared calls for method: " + request.method);
        if (!renderer.supportsHeadless)
          return fallback2.actions.sendPreparedCalls(parameters2);
        const provider = getProvider(store);
        const result = await provider.request(request);
        const id = result[0]?.id;
        if (!id)
          throw new Error("id not found");
        return id;
      },
      async signPersonalMessage(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "personal_sign")
          throw new Error("Cannot sign personal message for method: " + request.method);
        const provider = getProvider(store);
        return await provider.request(request);
      },
      async signTypedData(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "eth_signTypedData_v4")
          throw new Error("Cannot sign typed data for method: " + request.method);
        const provider = getProvider(store);
        return await provider.request(request);
      },
      async switchChain(parameters2) {
        const { internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_switchEthereumChain")
          throw new Error("Cannot switch chain for method: " + request.method);
        if (!renderer.supportsHeadless)
          return;
        const provider = getProvider(store);
        return await provider.request(request);
      },
      async upgradeAccount(parameters2) {
        const { account, internal } = parameters2;
        const { store, request } = internal;
        if (request.method !== "wallet_upgradeAccount")
          throw new Error("Cannot upgrade account for method: " + request.method);
        const provider = getProvider(store);
        await provider.request(request);
        return { account };
      },
      async verifyEmail(parameters2) {
        const { internal } = parameters2;
        const { request, store } = internal;
        if (request.method !== "account_verifyEmail")
          throw new Error("Cannot verify email for method: " + request.method);
        const provider = getProvider(store);
        return await provider.request(request);
      }
    },
    config: parameters,
    name: "dialog",
    setup(parameters2) {
      const { internal } = parameters2;
      const { store } = internal;
      const dialog2 = renderer.setup({
        host,
        internal,
        theme,
        themeController
      });
      const unsubscribe = store.subscribe((x) => x.requestQueue, (requestQueue) => {
        for (const listener of listeners)
          listener(requestQueue);
        const requests = requestQueue.map((x) => x.status === "pending" ? x : void 0).filter(Boolean);
        dialog2.syncRequests(requests).catch(() => {
        });
        if (requests.length === 0)
          dialog2.close();
      });
      return () => {
        unsubscribe();
        dialog2.destroy();
      };
    }
  });
}
async function resolveFeeToken2(internal, parameters) {
  const { config: { feeToken: feeToken2 } } = internal;
  const { feeToken: overrideFeeToken } = parameters ?? {};
  return overrideFeeToken ?? feeToken2;
}
function getAuthUrl(apiUrl, { storage }) {
  if (!apiUrl)
    return void 0;
  const authUrl = resolveAuthUrl(apiUrl, typeof window !== "undefined" ? window.location.origin : void 0);
  if (authUrl)
    storage.setItem("porto.authUrl", authUrl);
  return authUrl;
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/modes/reactNative.js
function reactNative2(parameters = {}) {
  if (!isReactNative())
    return parameters.fallback ?? from18({ actions: relay().actions, name: "relay" });
  const { redirectUri, requestOptions, ...baseParameters } = parameters;
  return from18({
    ...dialog({
      ...baseParameters,
      renderer: authSession({ redirectUri, requestOptions })
    }),
    name: "reactNative"
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/internal/types.js
var types_exports = {};

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Porto.js
var Porto_exports = {};
__export(Porto_exports, {
  create: () => create3,
  defaultConfig: () => defaultConfig
});

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Storage.js
var Storage_exports = {};
__export(Storage_exports, {
  combine: () => combine,
  cookie: () => cookie,
  from: () => from23,
  idb: () => idb,
  localStorage: () => localStorage,
  memory: () => memory
});
function from23(storage) {
  return storage;
}
function combine(...storages) {
  return {
    async getItem(name) {
      const results = await Promise.allSettled(storages.map((x) => x.getItem(name)));
      const result = results.find((x) => x.status === "fulfilled" && x.value !== null);
      if (result?.status !== "fulfilled")
        return null;
      if (result.value === null)
        return null;
      return result.value;
    },
    async removeItem(name) {
      await Promise.allSettled(storages.map((x) => x.removeItem(name)));
    },
    async setItem(name, value) {
      await Promise.allSettled(storages.map((x) => x.setItem(name, value)));
    },
    sizeLimit: Math.min(...storages.map((x) => x.sizeLimit)),
    storages
  };
}
function idb() {
  const store = typeof indexedDB !== "undefined" ? createStore2("porto", "store") : void 0;
  return from23({
    async getItem(name) {
      const value = await get(name, store);
      if (value === null)
        return null;
      return value;
    },
    async removeItem(name) {
      await del(name, store);
    },
    async setItem(name, value) {
      await set(name, normalizeValue(value), store);
    },
    sizeLimit: 1024 * 1024 * 50
    // ≈50MB
  });
}
function localStorage() {
  return from23({
    async getItem(name) {
      const item = window.localStorage.getItem(name);
      if (item === null)
        return null;
      try {
        return parse(item);
      } catch {
        return null;
      }
    },
    async removeItem(name) {
      window.localStorage.removeItem(name);
    },
    async setItem(name, value) {
      window.localStorage.setItem(name, stringify(value));
    },
    sizeLimit: 1024 * 1024 * 5
    // ≈5MB
  });
}
function cookie() {
  return from23({
    async getItem(name) {
      const value = document.cookie.split("; ").find((x) => x.startsWith(`${name}=`));
      if (!value)
        return null;
      try {
        return parse(value.substring(name.length + 1));
      } catch {
        return null;
      }
    },
    async removeItem(name) {
      document.cookie = `${name}=;max-age=-1;path=/`;
    },
    async setItem(name, value) {
      document.cookie = `${name}=${stringify(value)};path=/;samesite=None;secure;max-age=31536000`;
    },
    sizeLimit: 1024 * 4
    // ≈4kB
  });
}
function memory() {
  const store = /* @__PURE__ */ new Map();
  return from23({
    getItem(name) {
      return store.get(name) ?? null;
    },
    removeItem(name) {
      store.delete(name);
    },
    setItem(name, value) {
      store.set(name, value);
    },
    sizeLimit: Number.POSITIVE_INFINITY
  });
}

// node_modules/@wagmi/connectors/node_modules/porto/dist/core/Porto.js
var browser = typeof window !== "undefined" && typeof document !== "undefined";
var defaultConfig = {
  announceProvider: true,
  chains: all,
  mode: browser ? dialog({ host: hostUrls.prod }) : relay(),
  relay: http(relayUrls.prod.http),
  storage: browser && typeof indexedDB !== "undefined" ? idb() : memory(),
  storageKey: "porto.store"
};
function create3(parameters = {}) {
  const chains = parameters.chains ?? defaultConfig.chains;
  const transports = Object.fromEntries(chains.map((chain) => [
    chain.id,
    parameters.transports?.[chain.id] ?? http()
  ]));
  const config2 = {
    announceProvider: parameters.announceProvider ?? defaultConfig.announceProvider,
    authUrl: parameters.authUrl,
    chains,
    feeToken: parameters.feeToken,
    merchantUrl: parameters.merchantUrl,
    mode: parameters.mode ?? defaultConfig.mode,
    relay: parameters.relay ?? defaultConfig.relay,
    storage: parameters.storage ?? defaultConfig.storage,
    storageKey: parameters.storageKey ?? defaultConfig.storageKey,
    transports
  };
  const store = createStore(devtools(subscribeWithSelector(persist((_) => ({
    accounts: [],
    chainIds: config2.chains.map((chain) => chain.id),
    feeToken: config2.feeToken,
    requestQueue: []
  }), {
    merge(p, currentState) {
      const persistedState = p;
      const currentChainId = config2.chains.find((chain) => chain.id === persistedState.chainIds[0])?.id ?? config2.chains[0].id;
      const chainIds = [
        currentChainId,
        ...config2.chains.map((chain) => chain.id).filter((id) => id !== currentChainId)
      ];
      return {
        ...currentState,
        ...persistedState,
        chainIds
      };
    },
    name: config2.storageKey,
    partialize: (state) => ({
      accounts: state.accounts.map((account) => (
        // omit non-serializable properties (e.g. functions).
        normalizeValue(account)
      )),
      chainIds: state.chainIds
    }),
    storage: config2.storage,
    version: 5
  }))));
  let mode = config2.mode;
  const internal = {
    config: config2,
    getMode() {
      return mode;
    },
    id: uuidv4(),
    setMode(i) {
      destroy?.();
      mode = i;
      destroy = i.setup({
        internal
      });
      return destroy;
    },
    store
  };
  const provider = from17(internal);
  let destroy = mode !== null ? mode.setup({
    internal
  }) : () => {
  };
  return {
    _internal: internal,
    config: config2,
    destroy() {
      destroy();
      provider._internal.destroy();
    },
    provider
  };
}
export {
  Account_exports as Account,
  Chains_exports as Chains,
  Dialog_exports as Dialog,
  Key_exports as Key,
  Messenger_exports as Messenger,
  Mode_exports as Mode,
  Porto_exports as Porto,
  RelayActions_exports as RelayActions,
  RpcSchema_exports as RpcSchema,
  Storage_exports as Storage,
  Transport_exports as Transport,
  from17 as from
};
