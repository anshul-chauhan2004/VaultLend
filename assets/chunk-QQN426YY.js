import {
  esm_exports,
  formatJsonRpcError,
  isLocalhostUrl,
  isWsUrl,
  parseConnectionError,
  safeJsonParse,
  safeJsonStringify
} from "/assets/chunk-6UHNYZXD.js";
import {
  require_events
} from "/assets/chunk-6RFZ7UVM.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/assets/chunk-4UESMH6Y.js";

// node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d2, b2) {
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __rest(s2, e) {
  var t = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
    t[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t[p[i2]] = s2[p[i2]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d2 = decorators[i2]) r2 = (c < 3 ? d2(r2) : c > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f2 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o2, m, k2, k22) {
  if (k22 === void 0) k22 = k2;
  o2[k22] = m[k2];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
  if (m) return m.call(o2);
  if (o2 && typeof o2.length === "number") return {
    next: function() {
      if (o2 && i2 >= o2.length) o2 = void 0;
      return { value: o2 && o2[i2++], done: !o2 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m) return o2;
  var i2 = m.call(o2), r2, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar2.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"])) m.call(i2);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read(arguments[i2]));
  return ar2;
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i2, q = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g2[n2]) i2[n2] = function(v2) {
      return new Promise(function(a2, b2) {
        q.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
      });
    };
  }
  function resume(n2, v2) {
    try {
      step(g2[n2](v2));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    if (f2(v2), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o2) {
  var i2, p;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f2) {
    i2[n2] = o2[n2] ? function(v2) {
      return (p = !p) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
    } : f2;
  }
}
function __asyncValues(o2) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o2[Symbol.asyncIterator], i2;
  return m ? m.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o2[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod) if (Object.hasOwnProperty.call(mod, k2)) result[k2] = mod[k2];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3) if (b3.hasOwnProperty(p)) d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_misc(), exports);
    tslib_1.__exportStar(require_time(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds;
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_delay(), exports);
    tslib_1.__exportStar(require_convert(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch2 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_watch2(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_utils(), exports);
    tslib_1.__exportStar(require_watch(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow;
    function getFromWindowOrThrow(name2) {
      const res = getFromWindow(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow;
    function getDocumentOrThrow() {
      return getFromWindowOrThrow("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow;
    function getDocument() {
      return getFromWindow("document");
    }
    exports.getDocument = getDocument;
    function getNavigatorOrThrow() {
      return getFromWindowOrThrow("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow;
    function getNavigator() {
      return getFromWindow("navigator");
    }
    exports.getNavigator = getNavigator;
    function getLocationOrThrow() {
      return getFromWindowOrThrow("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow;
    function getLocation() {
      return getFromWindow("location");
    }
    exports.getLocation = getLocation;
    function getCryptoOrThrow() {
      return getFromWindowOrThrow("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow;
    function getCrypto() {
      return getFromWindow("crypto");
    }
    exports.getCrypto = getCrypto;
    function getLocalStorageOrThrow() {
      return getFromWindowOrThrow("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
    function getLocalStorage() {
      return getFromWindow("localStorage");
    }
    exports.getLocalStorage = getLocalStorage;
  }
});

// node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs2();
    function getWindowMetadata() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i2 = 0; i2 < links.length; i2++) {
          const link = links[i2];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i2 = 0; i2 < metaTags.length; i2++) {
          const tag = metaTags[i2];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata;
  }
});

// node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/detect-browser/es/index.js
var __spreadArray = function(to2, from3, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l3 = from3.length, ar2; i2 < l3; i2++) {
    if (ar2 || !(i2 in from3)) {
      if (!ar2) ar2 = Array.prototype.slice.call(from3, 0, i2);
      ar2[i2] = from3[i2];
    }
  }
  return to2.concat(ar2 || Array.prototype.slice.call(from3));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BrowserInfo2(name2, version2, os) {
      this.name = name2;
      this.version = version2;
      this.os = os;
      this.type = "browser";
    }
    return BrowserInfo2;
  })()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function NodeInfo2(version2) {
      this.version = version2;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  })()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function SearchBotDeviceInfo2(name2, version2, os, bot) {
      this.name = name2;
      this.version = version2;
      this.os = os;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  })()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  })()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  })()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version2, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version2, os);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process !== "undefined" && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}

// node_modules/@walletconnect/relay-auth/dist/index.es.js
var import_time = __toESM(require_cjs());
function En(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t, ...e) {
  if (!En(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function De(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e) {
  fe(t);
  const n2 = e.outputLen;
  if (t.length < n2) throw new Error("digestInto() expects output buffer of length at least " + n2);
}
var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
  return typeof t == "string" && (t = yn(t)), fe(t), t;
}
var xn = class {
  clone() {
    return this._cloneInto();
  }
};
function Bn(t) {
  const e = (r2) => t().update(de(r2)).digest(), n2 = t();
  return e.outputLen = n2.outputLen, e.blockLen = n2.blockLen, e.create = () => t(), e;
}
function he(t = 32) {
  if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
  if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e, n2, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n2, r2);
  const o2 = BigInt(32), s2 = BigInt(4294967295), a2 = Number(n2 >> o2 & s2), u = Number(n2 & s2), i2 = r2 ? 4 : 0, D = r2 ? 0 : 4;
  t.setUint32(e + i2, a2, r2), t.setUint32(e + D, u, r2);
}
var An = class extends xn {
  constructor(e, n2, r2, o2) {
    super(), this.blockLen = e, this.outputLen = n2, this.padOffset = r2, this.isLE = o2, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e), this.view = _t(this.buffer);
  }
  update(e) {
    De(this);
    const { view: n2, buffer: r2, blockLen: o2 } = this;
    e = de(e);
    const s2 = e.length;
    for (let a2 = 0; a2 < s2; ) {
      const u = Math.min(o2 - this.pos, s2 - a2);
      if (u === o2) {
        const i2 = _t(e);
        for (; o2 <= s2 - a2; a2 += o2) this.process(i2, a2);
        continue;
      }
      r2.set(e.subarray(a2, a2 + u), this.pos), this.pos += u, a2 += u, this.pos === o2 && (this.process(n2, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    De(this), gn(e, this), this.finished = true;
    const { buffer: n2, view: r2, blockLen: o2, isLE: s2 } = this;
    let { pos: a2 } = this;
    n2[a2++] = 128, this.buffer.subarray(a2).fill(0), this.padOffset > o2 - a2 && (this.process(r2, 0), a2 = 0);
    for (let l3 = a2; l3 < o2; l3++) n2[l3] = 0;
    Cn(r2, o2 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const u = _t(e), i2 = this.outputLen;
    if (i2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D = i2 / 4, c = this.get();
    if (D > c.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l3 = 0; l3 < D; l3++) u.setUint32(4 * l3, c[l3], s2);
  }
  digest() {
    const { buffer: e, outputLen: n2 } = this;
    this.digestInto(e);
    const r2 = e.slice(0, n2);
    return this.destroy(), r2;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n2, buffer: r2, length: o2, finished: s2, destroyed: a2, pos: u } = this;
    return e.length = o2, e.pos = u, e.finished = s2, e.destroyed = a2, o2 % n2 && e.buffer.set(r2), e;
  }
};
var wt = BigInt(2 ** 32 - 1);
var St = BigInt(32);
function le(t, e = false) {
  return e ? { h: Number(t & wt), l: Number(t >> St & wt) } : { h: Number(t >> St & wt) | 0, l: Number(t & wt) | 0 };
}
function mn(t, e = false) {
  let n2 = new Uint32Array(t.length), r2 = new Uint32Array(t.length);
  for (let o2 = 0; o2 < t.length; o2++) {
    const { h: s2, l: a2 } = le(t[o2], e);
    [n2[o2], r2[o2]] = [s2, a2];
  }
  return [n2, r2];
}
var _n = (t, e) => BigInt(t >>> 0) << St | BigInt(e >>> 0);
var Sn = (t, e, n2) => t >>> n2;
var vn = (t, e, n2) => t << 32 - n2 | e >>> n2;
var In = (t, e, n2) => t >>> n2 | e << 32 - n2;
var Un = (t, e, n2) => t << 32 - n2 | e >>> n2;
var Tn = (t, e, n2) => t << 64 - n2 | e >>> n2 - 32;
var Fn = (t, e, n2) => t >>> n2 - 32 | e << 64 - n2;
var Nn = (t, e) => e;
var Ln = (t, e) => t;
var On = (t, e, n2) => t << n2 | e >>> 32 - n2;
var Hn = (t, e, n2) => e << n2 | t >>> 32 - n2;
var zn = (t, e, n2) => e << n2 - 32 | t >>> 64 - n2;
var Mn = (t, e, n2) => t << n2 - 32 | e >>> 64 - n2;
function qn(t, e, n2, r2) {
  const o2 = (e >>> 0) + (r2 >>> 0);
  return { h: t + n2 + (o2 / 2 ** 32 | 0) | 0, l: o2 | 0 };
}
var $n = (t, e, n2) => (t >>> 0) + (e >>> 0) + (n2 >>> 0);
var kn = (t, e, n2, r2) => e + n2 + r2 + (t / 2 ** 32 | 0) | 0;
var Rn = (t, e, n2, r2) => (t >>> 0) + (e >>> 0) + (n2 >>> 0) + (r2 >>> 0);
var jn = (t, e, n2, r2, o2) => e + n2 + r2 + o2 + (t / 2 ** 32 | 0) | 0;
var Zn = (t, e, n2, r2, o2) => (t >>> 0) + (e >>> 0) + (n2 >>> 0) + (r2 >>> 0) + (o2 >>> 0);
var Gn = (t, e, n2, r2, o2, s2) => e + n2 + r2 + o2 + s2 + (t / 2 ** 32 | 0) | 0;
var x = { fromBig: le, split: mn, toBig: _n, shrSH: Sn, shrSL: vn, rotrSH: In, rotrSL: Un, rotrBH: Tn, rotrBL: Fn, rotr32H: Nn, rotr32L: Ln, rotlSH: On, rotlSL: Hn, rotlBH: zn, rotlBL: Mn, add: qn, add3L: $n, add3H: kn, add4L: Rn, add4H: jn, add5H: Gn, add5L: Zn };
var [Vn, Yn] = (() => x.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
var P = new Uint32Array(80);
var Q = new Uint32Array(80);
var Jn = class extends An {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: n2, Bh: r2, Bl: o2, Ch: s2, Cl: a2, Dh: u, Dl: i2, Eh: D, El: c, Fh: l3, Fl: p, Gh: w2, Gl: h2, Hh: g2, Hl: S } = this;
    return [e, n2, r2, o2, s2, a2, u, i2, D, c, l3, p, w2, h2, g2, S];
  }
  set(e, n2, r2, o2, s2, a2, u, i2, D, c, l3, p, w2, h2, g2, S) {
    this.Ah = e | 0, this.Al = n2 | 0, this.Bh = r2 | 0, this.Bl = o2 | 0, this.Ch = s2 | 0, this.Cl = a2 | 0, this.Dh = u | 0, this.Dl = i2 | 0, this.Eh = D | 0, this.El = c | 0, this.Fh = l3 | 0, this.Fl = p | 0, this.Gh = w2 | 0, this.Gl = h2 | 0, this.Hh = g2 | 0, this.Hl = S | 0;
  }
  process(e, n2) {
    for (let d2 = 0; d2 < 16; d2++, n2 += 4) P[d2] = e.getUint32(n2), Q[d2] = e.getUint32(n2 += 4);
    for (let d2 = 16; d2 < 80; d2++) {
      const m = P[d2 - 15] | 0, F = Q[d2 - 15] | 0, q = x.rotrSH(m, F, 1) ^ x.rotrSH(m, F, 8) ^ x.shrSH(m, F, 7), z = x.rotrSL(m, F, 1) ^ x.rotrSL(m, F, 8) ^ x.shrSL(m, F, 7), I = P[d2 - 2] | 0, O = Q[d2 - 2] | 0, ot = x.rotrSH(I, O, 19) ^ x.rotrBH(I, O, 61) ^ x.shrSH(I, O, 6), tt = x.rotrSL(I, O, 19) ^ x.rotrBL(I, O, 61) ^ x.shrSL(I, O, 6), st = x.add4L(z, tt, Q[d2 - 7], Q[d2 - 16]), at = x.add4H(st, q, ot, P[d2 - 7], P[d2 - 16]);
      P[d2] = at | 0, Q[d2] = st | 0;
    }
    let { Ah: r2, Al: o2, Bh: s2, Bl: a2, Ch: u, Cl: i2, Dh: D, Dl: c, Eh: l3, El: p, Fh: w2, Fl: h2, Gh: g2, Gl: S, Hh: v2, Hl: L } = this;
    for (let d2 = 0; d2 < 80; d2++) {
      const m = x.rotrSH(l3, p, 14) ^ x.rotrSH(l3, p, 18) ^ x.rotrBH(l3, p, 41), F = x.rotrSL(l3, p, 14) ^ x.rotrSL(l3, p, 18) ^ x.rotrBL(l3, p, 41), q = l3 & w2 ^ ~l3 & g2, z = p & h2 ^ ~p & S, I = x.add5L(L, F, z, Yn[d2], Q[d2]), O = x.add5H(I, v2, m, q, Vn[d2], P[d2]), ot = I | 0, tt = x.rotrSH(r2, o2, 28) ^ x.rotrBH(r2, o2, 34) ^ x.rotrBH(r2, o2, 39), st = x.rotrSL(r2, o2, 28) ^ x.rotrBL(r2, o2, 34) ^ x.rotrBL(r2, o2, 39), at = r2 & s2 ^ r2 & u ^ s2 & u, Ct = o2 & a2 ^ o2 & i2 ^ a2 & i2;
      v2 = g2 | 0, L = S | 0, g2 = w2 | 0, S = h2 | 0, w2 = l3 | 0, h2 = p | 0, { h: l3, l: p } = x.add(D | 0, c | 0, O | 0, ot | 0), D = u | 0, c = i2 | 0, u = s2 | 0, i2 = a2 | 0, s2 = r2 | 0, a2 = o2 | 0;
      const At = x.add3L(ot, st, Ct);
      r2 = x.add3H(At, O, tt, at), o2 = At | 0;
    }
    ({ h: r2, l: o2 } = x.add(this.Ah | 0, this.Al | 0, r2 | 0, o2 | 0)), { h: s2, l: a2 } = x.add(this.Bh | 0, this.Bl | 0, s2 | 0, a2 | 0), { h: u, l: i2 } = x.add(this.Ch | 0, this.Cl | 0, u | 0, i2 | 0), { h: D, l: c } = x.add(this.Dh | 0, this.Dl | 0, D | 0, c | 0), { h: l3, l: p } = x.add(this.Eh | 0, this.El | 0, l3 | 0, p | 0), { h: w2, l: h2 } = x.add(this.Fh | 0, this.Fl | 0, w2 | 0, h2 | 0), { h: g2, l: S } = x.add(this.Gh | 0, this.Gl | 0, g2 | 0, S | 0), { h: v2, l: L } = x.add(this.Hh | 0, this.Hl | 0, v2 | 0, L | 0), this.set(r2, o2, s2, a2, u, i2, D, c, l3, p, w2, h2, g2, S, v2, L);
  }
  roundClean() {
    P.fill(0), Q.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Kn = Bn(() => new Jn());
var vt = BigInt(0);
var be = BigInt(1);
var Wn = BigInt(2);
function It(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
  if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
var Xn = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ft(t) {
  Ut(t);
  let e = "";
  for (let n2 = 0; n2 < t.length; n2++) e += Xn[t[n2]];
  return e;
}
function pe(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt : BigInt("0x" + t);
}
var K = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we(t) {
  if (t >= K._0 && t <= K._9) return t - K._0;
  if (t >= K.A && t <= K.F) return t - (K.A - 10);
  if (t >= K.a && t <= K.f) return t - (K.a - 10);
}
function Ee(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n2 = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r2 = new Uint8Array(n2);
  for (let o2 = 0, s2 = 0; o2 < n2; o2++, s2 += 2) {
    const a2 = we(t.charCodeAt(s2)), u = we(t.charCodeAt(s2 + 1));
    if (a2 === void 0 || u === void 0) {
      const i2 = t[s2] + t[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + i2 + '" at index ' + s2);
    }
    r2[o2] = a2 * 16 + u;
  }
  return r2;
}
function Pn(t) {
  return pe(Ft(t));
}
function Et(t) {
  return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e) {
  return Ee(t.toString(16).padStart(e * 2, "0"));
}
function Nt(t, e) {
  return ge(t, e).reverse();
}
function W(t, e, n2) {
  let r2;
  if (typeof e == "string") try {
    r2 = Ee(e);
  } catch (s2) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (It(e)) r2 = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o2 = r2.length;
  if (typeof n2 == "number" && o2 !== n2) throw new Error(t + " of length " + n2 + " expected, got " + o2);
  return r2;
}
function ye(...t) {
  let e = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o2 = t[r2];
    Ut(o2), e += o2.length;
  }
  const n2 = new Uint8Array(e);
  for (let r2 = 0, o2 = 0; r2 < t.length; r2++) {
    const s2 = t[r2];
    n2.set(s2, o2), o2 += s2.length;
  }
  return n2;
}
var Lt = (t) => typeof t == "bigint" && vt <= t;
function Qn(t, e, n2) {
  return Lt(t) && Lt(e) && Lt(n2) && e <= t && t < n2;
}
function ft(t, e, n2, r2) {
  if (!Qn(e, n2, r2)) throw new Error("expected valid " + t + ": " + n2 + " <= n < " + r2 + ", got " + e);
}
function tr(t) {
  let e;
  for (e = 0; t > vt; t >>= be, e += 1) ;
  return e;
}
var er = (t) => (Wn << BigInt(t - 1)) - be;
var nr = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot(t, e, n2 = {}) {
  const r2 = (o2, s2, a2) => {
    const u = nr[s2];
    if (typeof u != "function") throw new Error("invalid validator function");
    const i2 = t[o2];
    if (!(a2 && i2 === void 0) && !u(i2, t)) throw new Error("param " + String(o2) + " is invalid. Expected " + s2 + ", got " + i2);
  };
  for (const [o2, s2] of Object.entries(e)) r2(o2, s2, false);
  for (const [o2, s2] of Object.entries(n2)) r2(o2, s2, true);
  return t;
}
function xe(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n2, ...r2) => {
    const o2 = e.get(n2);
    if (o2 !== void 0) return o2;
    const s2 = t(n2, ...r2);
    return e.set(n2, s2), s2;
  };
}
var M = BigInt(0);
var N = BigInt(1);
var nt = BigInt(2);
var rr = BigInt(3);
var Ht = BigInt(4);
var Be = BigInt(5);
var Ce = BigInt(8);
function H(t, e) {
  const n2 = t % e;
  return n2 >= M ? n2 : e + n2;
}
function or(t, e, n2) {
  if (e < M) throw new Error("invalid exponent, negatives unsupported");
  if (n2 <= M) throw new Error("invalid modulus");
  if (n2 === N) return M;
  let r2 = N;
  for (; e > M; ) e & N && (r2 = r2 * t % n2), t = t * t % n2, e >>= N;
  return r2;
}
function J(t, e, n2) {
  let r2 = t;
  for (; e-- > M; ) r2 *= r2, r2 %= n2;
  return r2;
}
function Ae(t, e) {
  if (t === M) throw new Error("invert: expected non-zero number");
  if (e <= M) throw new Error("invert: expected positive modulus, got " + e);
  let n2 = H(t, e), r2 = e, o2 = M, s2 = N;
  for (; n2 !== M; ) {
    const u = r2 / n2, i2 = r2 % n2, D = o2 - s2 * u;
    r2 = n2, n2 = i2, o2 = s2, s2 = D;
  }
  if (r2 !== N) throw new Error("invert: does not exist");
  return H(o2, e);
}
function sr(t) {
  const e = (t - N) / nt;
  let n2, r2, o2;
  for (n2 = t - N, r2 = 0; n2 % nt === M; n2 /= nt, r2++) ;
  for (o2 = nt; o2 < t && or(o2, e, t) !== t - N; o2++) if (o2 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r2 === 1) {
    const a2 = (t + N) / Ht;
    return function(i2, D) {
      const c = i2.pow(D, a2);
      if (!i2.eql(i2.sqr(c), D)) throw new Error("Cannot find square root");
      return c;
    };
  }
  const s2 = (n2 + N) / nt;
  return function(u, i2) {
    if (u.pow(i2, e) === u.neg(u.ONE)) throw new Error("Cannot find square root");
    let D = r2, c = u.pow(u.mul(u.ONE, o2), n2), l3 = u.pow(i2, s2), p = u.pow(i2, n2);
    for (; !u.eql(p, u.ONE); ) {
      if (u.eql(p, u.ZERO)) return u.ZERO;
      let w2 = 1;
      for (let g2 = u.sqr(p); w2 < D && !u.eql(g2, u.ONE); w2++) g2 = u.sqr(g2);
      const h2 = u.pow(c, N << BigInt(D - w2 - 1));
      c = u.sqr(h2), l3 = u.mul(l3, h2), p = u.mul(p, c), D = w2;
    }
    return l3;
  };
}
function ir(t) {
  if (t % Ht === rr) {
    const e = (t + N) / Ht;
    return function(r2, o2) {
      const s2 = r2.pow(o2, e);
      if (!r2.eql(r2.sqr(s2), o2)) throw new Error("Cannot find square root");
      return s2;
    };
  }
  if (t % Ce === Be) {
    const e = (t - Be) / Ce;
    return function(r2, o2) {
      const s2 = r2.mul(o2, nt), a2 = r2.pow(s2, e), u = r2.mul(o2, a2), i2 = r2.mul(r2.mul(u, nt), a2), D = r2.mul(u, r2.sub(i2, r2.ONE));
      if (!r2.eql(r2.sqr(D), o2)) throw new Error("Cannot find square root");
      return D;
    };
  }
  return sr(t);
}
var ur = (t, e) => (H(t, e) & N) === N;
var cr = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n2 = cr.reduce((r2, o2) => (r2[o2] = "function", r2), e);
  return Ot(t, n2);
}
function fr(t, e, n2) {
  if (n2 < M) throw new Error("invalid exponent, negatives unsupported");
  if (n2 === M) return t.ONE;
  if (n2 === N) return e;
  let r2 = t.ONE, o2 = e;
  for (; n2 > M; ) n2 & N && (r2 = t.mul(r2, o2)), o2 = t.sqr(o2), n2 >>= N;
  return r2;
}
function Dr(t, e) {
  const n2 = new Array(e.length), r2 = e.reduce((s2, a2, u) => t.is0(a2) ? s2 : (n2[u] = s2, t.mul(s2, a2)), t.ONE), o2 = t.inv(r2);
  return e.reduceRight((s2, a2, u) => t.is0(a2) ? s2 : (n2[u] = t.mul(s2, n2[u]), t.mul(s2, a2)), o2), n2;
}
function me(t, e) {
  const n2 = e !== void 0 ? e : t.toString(2).length, r2 = Math.ceil(n2 / 8);
  return { nBitLength: n2, nByteLength: r2 };
}
function _e(t, e, n2 = false, r2 = {}) {
  if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o2, nByteLength: s2 } = me(t, e);
  if (s2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a2;
  const u = Object.freeze({ ORDER: t, isLE: n2, BITS: o2, BYTES: s2, MASK: er(o2), ZERO: M, ONE: N, create: (i2) => H(i2, t), isValid: (i2) => {
    if (typeof i2 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i2);
    return M <= i2 && i2 < t;
  }, is0: (i2) => i2 === M, isOdd: (i2) => (i2 & N) === N, neg: (i2) => H(-i2, t), eql: (i2, D) => i2 === D, sqr: (i2) => H(i2 * i2, t), add: (i2, D) => H(i2 + D, t), sub: (i2, D) => H(i2 - D, t), mul: (i2, D) => H(i2 * D, t), pow: (i2, D) => fr(u, i2, D), div: (i2, D) => H(i2 * Ae(D, t), t), sqrN: (i2) => i2 * i2, addN: (i2, D) => i2 + D, subN: (i2, D) => i2 - D, mulN: (i2, D) => i2 * D, inv: (i2) => Ae(i2, t), sqrt: r2.sqrt || ((i2) => (a2 || (a2 = ir(t)), a2(u, i2))), invertBatch: (i2) => Dr(u, i2), cmov: (i2, D, c) => c ? D : i2, toBytes: (i2) => n2 ? Nt(i2, s2) : ge(i2, s2), fromBytes: (i2) => {
    if (i2.length !== s2) throw new Error("Field.fromBytes: expected " + s2 + " bytes, got " + i2.length);
    return n2 ? Et(i2) : Pn(i2);
  } });
  return Object.freeze(u);
}
var Se = BigInt(0);
var gt = BigInt(1);
function zt(t, e) {
  const n2 = e.negate();
  return t ? n2 : e;
}
function ve(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Mt(t, e) {
  ve(t, e);
  const n2 = Math.ceil(e / t) + 1, r2 = 2 ** (t - 1);
  return { windows: n2, windowSize: r2 };
}
function dr(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n2, r2) => {
    if (!(n2 instanceof e)) throw new Error("invalid point at index " + r2);
  });
}
function hr(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n2, r2) => {
    if (!e.isValid(n2)) throw new Error("invalid scalar at index " + r2);
  });
}
var qt = /* @__PURE__ */ new WeakMap();
var Ie = /* @__PURE__ */ new WeakMap();
function $t(t) {
  return Ie.get(t) || 1;
}
function lr(t, e) {
  return { constTimeNegate: zt, hasPrecomputes(n2) {
    return $t(n2) !== 1;
  }, unsafeLadder(n2, r2, o2 = t.ZERO) {
    let s2 = n2;
    for (; r2 > Se; ) r2 & gt && (o2 = o2.add(s2)), s2 = s2.double(), r2 >>= gt;
    return o2;
  }, precomputeWindow(n2, r2) {
    const { windows: o2, windowSize: s2 } = Mt(r2, e), a2 = [];
    let u = n2, i2 = u;
    for (let D = 0; D < o2; D++) {
      i2 = u, a2.push(i2);
      for (let c = 1; c < s2; c++) i2 = i2.add(u), a2.push(i2);
      u = i2.double();
    }
    return a2;
  }, wNAF(n2, r2, o2) {
    const { windows: s2, windowSize: a2 } = Mt(n2, e);
    let u = t.ZERO, i2 = t.BASE;
    const D = BigInt(2 ** n2 - 1), c = 2 ** n2, l3 = BigInt(n2);
    for (let p = 0; p < s2; p++) {
      const w2 = p * a2;
      let h2 = Number(o2 & D);
      o2 >>= l3, h2 > a2 && (h2 -= c, o2 += gt);
      const g2 = w2, S = w2 + Math.abs(h2) - 1, v2 = p % 2 !== 0, L = h2 < 0;
      h2 === 0 ? i2 = i2.add(zt(v2, r2[g2])) : u = u.add(zt(L, r2[S]));
    }
    return { p: u, f: i2 };
  }, wNAFUnsafe(n2, r2, o2, s2 = t.ZERO) {
    const { windows: a2, windowSize: u } = Mt(n2, e), i2 = BigInt(2 ** n2 - 1), D = 2 ** n2, c = BigInt(n2);
    for (let l3 = 0; l3 < a2; l3++) {
      const p = l3 * u;
      if (o2 === Se) break;
      let w2 = Number(o2 & i2);
      if (o2 >>= c, w2 > u && (w2 -= D, o2 += gt), w2 === 0) continue;
      let h2 = r2[p + Math.abs(w2) - 1];
      w2 < 0 && (h2 = h2.negate()), s2 = s2.add(h2);
    }
    return s2;
  }, getPrecomputes(n2, r2, o2) {
    let s2 = qt.get(r2);
    return s2 || (s2 = this.precomputeWindow(r2, n2), n2 !== 1 && qt.set(r2, o2(s2))), s2;
  }, wNAFCached(n2, r2, o2) {
    const s2 = $t(n2);
    return this.wNAF(s2, this.getPrecomputes(s2, n2, o2), r2);
  }, wNAFCachedUnsafe(n2, r2, o2, s2) {
    const a2 = $t(n2);
    return a2 === 1 ? this.unsafeLadder(n2, r2, s2) : this.wNAFUnsafe(a2, this.getPrecomputes(a2, n2, o2), r2, s2);
  }, setWindowSize(n2, r2) {
    ve(r2, e), Ie.set(n2, r2), qt.delete(n2);
  } };
}
function br(t, e, n2, r2) {
  if (dr(n2, t), hr(r2, e), n2.length !== r2.length) throw new Error("arrays of points and scalars must have equal length");
  const o2 = t.ZERO, s2 = tr(BigInt(n2.length)), a2 = s2 > 12 ? s2 - 3 : s2 > 4 ? s2 - 2 : s2 ? 2 : 1, u = (1 << a2) - 1, i2 = new Array(u + 1).fill(o2), D = Math.floor((e.BITS - 1) / a2) * a2;
  let c = o2;
  for (let l3 = D; l3 >= 0; l3 -= a2) {
    i2.fill(o2);
    for (let w2 = 0; w2 < r2.length; w2++) {
      const h2 = r2[w2], g2 = Number(h2 >> BigInt(l3) & BigInt(u));
      i2[g2] = i2[g2].add(n2[w2]);
    }
    let p = o2;
    for (let w2 = i2.length - 1, h2 = o2; w2 > 0; w2--) h2 = h2.add(i2[w2]), p = p.add(h2);
    if (c = c.add(p), l3 !== 0) for (let w2 = 0; w2 < a2; w2++) c = c.double();
  }
  return c;
}
function pr(t) {
  return ar(t.Fp), Ot(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var G = BigInt(0);
var j = BigInt(1);
var yt = BigInt(2);
var wr = BigInt(8);
var Er = { zip215: true };
function gr(t) {
  const e = pr(t);
  return Ot(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e });
}
function yr(t) {
  const e = gr(t), { Fp: n2, n: r2, prehash: o2, hash: s2, randomBytes: a2, nByteLength: u, h: i2 } = e, D = yt << BigInt(u * 8) - j, c = n2.create, l3 = _e(e.n, e.nBitLength), p = e.uvRatio || ((y, f2) => {
    try {
      return { isValid: true, value: n2.sqrt(y * n2.inv(f2)) };
    } catch {
      return { isValid: false, value: G };
    }
  }), w2 = e.adjustScalarBytes || ((y) => y), h2 = e.domain || ((y, f2, b2) => {
    if (Tt("phflag", b2), f2.length || b2) throw new Error("Contexts/pre-hash are not supported");
    return y;
  });
  function g2(y, f2) {
    ft("coordinate " + y, f2, G, D);
  }
  function S(y) {
    if (!(y instanceof d2)) throw new Error("ExtendedPoint expected");
  }
  const v2 = xe((y, f2) => {
    const { ex: b2, ey: E, ez: B } = y, C2 = y.is0();
    f2 == null && (f2 = C2 ? wr : n2.inv(B));
    const A = c(b2 * f2), U = c(E * f2), _ = c(B * f2);
    if (C2) return { x: G, y: j };
    if (_ !== j) throw new Error("invZ was invalid");
    return { x: A, y: U };
  }), L = xe((y) => {
    const { a: f2, d: b2 } = e;
    if (y.is0()) throw new Error("bad point: ZERO");
    const { ex: E, ey: B, ez: C2, et: A } = y, U = c(E * E), _ = c(B * B), T = c(C2 * C2), $ = c(T * T), R = c(U * f2), V = c(T * c(R + _)), Y = c($ + c(b2 * c(U * _)));
    if (V !== Y) throw new Error("bad point: equation left != right (1)");
    const Z = c(E * B), X = c(C2 * A);
    if (Z !== X) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d2 {
    constructor(f2, b2, E, B) {
      this.ex = f2, this.ey = b2, this.ez = E, this.et = B, g2("x", f2), g2("y", b2), g2("z", E), g2("t", B), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f2) {
      if (f2 instanceof d2) throw new Error("extended point not allowed");
      const { x: b2, y: E } = f2 || {};
      return g2("x", b2), g2("y", E), new d2(b2, E, j, c(b2 * E));
    }
    static normalizeZ(f2) {
      const b2 = n2.invertBatch(f2.map((E) => E.ez));
      return f2.map((E, B) => E.toAffine(b2[B])).map(d2.fromAffine);
    }
    static msm(f2, b2) {
      return br(d2, l3, f2, b2);
    }
    _setWindowSize(f2) {
      q.setWindowSize(this, f2);
    }
    assertValidity() {
      L(this);
    }
    equals(f2) {
      S(f2);
      const { ex: b2, ey: E, ez: B } = this, { ex: C2, ey: A, ez: U } = f2, _ = c(b2 * U), T = c(C2 * B), $ = c(E * U), R = c(A * B);
      return _ === T && $ === R;
    }
    is0() {
      return this.equals(d2.ZERO);
    }
    negate() {
      return new d2(c(-this.ex), this.ey, this.ez, c(-this.et));
    }
    double() {
      const { a: f2 } = e, { ex: b2, ey: E, ez: B } = this, C2 = c(b2 * b2), A = c(E * E), U = c(yt * c(B * B)), _ = c(f2 * C2), T = b2 + E, $ = c(c(T * T) - C2 - A), R = _ + A, V = R - U, Y = _ - A, Z = c($ * V), X = c(R * Y), et = c($ * Y), pt = c(V * R);
      return new d2(Z, X, pt, et);
    }
    add(f2) {
      S(f2);
      const { a: b2, d: E } = e, { ex: B, ey: C2, ez: A, et: U } = this, { ex: _, ey: T, ez: $, et: R } = f2;
      if (b2 === BigInt(-1)) {
        const re = c((C2 - B) * (T + _)), oe = c((C2 + B) * (T - _)), mt = c(oe - re);
        if (mt === G) return this.double();
        const se = c(A * yt * R), ie = c(U * yt * $), ue = ie + se, ce = oe + re, ae = ie - se, Dn = c(ue * mt), dn = c(ce * ae), hn = c(ue * ae), ln = c(mt * ce);
        return new d2(Dn, dn, ln, hn);
      }
      const V = c(B * _), Y = c(C2 * T), Z = c(U * E * R), X = c(A * $), et = c((B + C2) * (_ + T) - V - Y), pt = X - Z, ee = X + Z, ne = c(Y - b2 * V), un = c(et * pt), cn = c(ee * ne), an = c(et * ne), fn = c(pt * ee);
      return new d2(un, cn, fn, an);
    }
    subtract(f2) {
      return this.add(f2.negate());
    }
    wNAF(f2) {
      return q.wNAFCached(this, f2, d2.normalizeZ);
    }
    multiply(f2) {
      const b2 = f2;
      ft("scalar", b2, j, r2);
      const { p: E, f: B } = this.wNAF(b2);
      return d2.normalizeZ([E, B])[0];
    }
    multiplyUnsafe(f2, b2 = d2.ZERO) {
      const E = f2;
      return ft("scalar", E, G, r2), E === G ? F : this.is0() || E === j ? this : q.wNAFCachedUnsafe(this, E, d2.normalizeZ, b2);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i2).is0();
    }
    isTorsionFree() {
      return q.unsafeLadder(this, r2).is0();
    }
    toAffine(f2) {
      return v2(this, f2);
    }
    clearCofactor() {
      const { h: f2 } = e;
      return f2 === j ? this : this.multiplyUnsafe(f2);
    }
    static fromHex(f2, b2 = false) {
      const { d: E, a: B } = e, C2 = n2.BYTES;
      f2 = W("pointHex", f2, C2), Tt("zip215", b2);
      const A = f2.slice(), U = f2[C2 - 1];
      A[C2 - 1] = U & -129;
      const _ = Et(A), T = b2 ? D : n2.ORDER;
      ft("pointHex.y", _, G, T);
      const $ = c(_ * _), R = c($ - j), V = c(E * $ - B);
      let { isValid: Y, value: Z } = p(R, V);
      if (!Y) throw new Error("Point.fromHex: invalid y coordinate");
      const X = (Z & j) === j, et = (U & 128) !== 0;
      if (!b2 && Z === G && et) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et !== X && (Z = c(-Z)), d2.fromAffine({ x: Z, y: _ });
    }
    static fromPrivateKey(f2) {
      return O(f2).point;
    }
    toRawBytes() {
      const { x: f2, y: b2 } = this.toAffine(), E = Nt(b2, n2.BYTES);
      return E[E.length - 1] |= f2 & j ? 128 : 0, E;
    }
    toHex() {
      return Ft(this.toRawBytes());
    }
  }
  d2.BASE = new d2(e.Gx, e.Gy, j, c(e.Gx * e.Gy)), d2.ZERO = new d2(G, j, j, G);
  const { BASE: m, ZERO: F } = d2, q = lr(d2, u * 8);
  function z(y) {
    return H(y, r2);
  }
  function I(y) {
    return z(Et(y));
  }
  function O(y) {
    const f2 = n2.BYTES;
    y = W("private key", y, f2);
    const b2 = W("hashed private key", s2(y), 2 * f2), E = w2(b2.slice(0, f2)), B = b2.slice(f2, 2 * f2), C2 = I(E), A = m.multiply(C2), U = A.toRawBytes();
    return { head: E, prefix: B, scalar: C2, point: A, pointBytes: U };
  }
  function ot(y) {
    return O(y).pointBytes;
  }
  function tt(y = new Uint8Array(), ...f2) {
    const b2 = ye(...f2);
    return I(s2(h2(b2, W("context", y), !!o2)));
  }
  function st(y, f2, b2 = {}) {
    y = W("message", y), o2 && (y = o2(y));
    const { prefix: E, scalar: B, pointBytes: C2 } = O(f2), A = tt(b2.context, E, y), U = m.multiply(A).toRawBytes(), _ = tt(b2.context, U, C2, y), T = z(A + _ * B);
    ft("signature.s", T, G, r2);
    const $ = ye(U, Nt(T, n2.BYTES));
    return W("result", $, n2.BYTES * 2);
  }
  const at = Er;
  function Ct(y, f2, b2, E = at) {
    const { context: B, zip215: C2 } = E, A = n2.BYTES;
    y = W("signature", y, 2 * A), f2 = W("message", f2), b2 = W("publicKey", b2, A), C2 !== void 0 && Tt("zip215", C2), o2 && (f2 = o2(f2));
    const U = Et(y.slice(A, 2 * A));
    let _, T, $;
    try {
      _ = d2.fromHex(b2, C2), T = d2.fromHex(y.slice(0, A), C2), $ = m.multiplyUnsafe(U);
    } catch {
      return false;
    }
    if (!C2 && _.isSmallOrder()) return false;
    const R = tt(B, T.toRawBytes(), _.toRawBytes(), f2);
    return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d2.ZERO);
  }
  return m._setWindowSize(8), { CURVE: e, getPublicKey: ot, sign: st, verify: Ct, ExtendedPoint: d2, utils: { getExtendedPublicKey: O, randomPrivateKey: () => a2(n2.BYTES), precompute(y = 8, f2 = d2.BASE) {
    return f2._setWindowSize(y), f2.multiply(BigInt(3)), f2;
  } } };
}
BigInt(0), BigInt(1);
var kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var xr = BigInt(1);
var Te = BigInt(2);
BigInt(3);
var Br = BigInt(5);
var Cr = BigInt(8);
function Ar(t) {
  const e = BigInt(10), n2 = BigInt(20), r2 = BigInt(40), o2 = BigInt(80), s2 = kt, u = t * t % s2 * t % s2, i2 = J(u, Te, s2) * u % s2, D = J(i2, xr, s2) * t % s2, c = J(D, Br, s2) * D % s2, l3 = J(c, e, s2) * c % s2, p = J(l3, n2, s2) * l3 % s2, w2 = J(p, r2, s2) * p % s2, h2 = J(w2, o2, s2) * w2 % s2, g2 = J(h2, o2, s2) * w2 % s2, S = J(g2, e, s2) * c % s2;
  return { pow_p_5_8: J(S, Te, s2) * t % s2, b2: u };
}
function mr(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e) {
  const n2 = kt, r2 = H(e * e * e, n2), o2 = H(r2 * r2 * e, n2), s2 = Ar(t * o2).pow_p_5_8;
  let a2 = H(t * r2 * s2, n2);
  const u = H(e * a2 * a2, n2), i2 = a2, D = H(a2 * Ue, n2), c = u === t, l3 = u === H(-t, n2), p = u === H(-t * Ue, n2);
  return c && (a2 = i2), (l3 || p) && (a2 = D), ur(a2, n2) && (a2 = H(-a2, n2)), { isValid: c || l3, value: a2 };
}
var Sr = (() => _e(kt, void 0, true))();
var vr = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn, randomBytes: he, adjustScalarBytes: mr, uvRatio: _r }))();
var Rt = (() => yr(vr))();
var jt = "EdDSA";
var Zt = "JWT";
var ut = ".";
var Dt = "base64url";
var Gt = "utf8";
var xt = "utf8";
var Vt = ":";
var Yt = "did";
var Jt = "key";
var dt = "base58btc";
var Kt = "z";
var Wt = "K36";
var Ne = 32;
function Xt(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e) {
  e || (e = t.reduce((o2, s2) => o2 + s2.length, 0));
  const n2 = Le(e);
  let r2 = 0;
  for (const o2 of t) n2.set(o2, r2), r2 += o2.length;
  return Xt(n2);
}
function Ir(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n2 = new Uint8Array(256), r2 = 0; r2 < n2.length; r2++) n2[r2] = 255;
  for (var o2 = 0; o2 < t.length; o2++) {
    var s2 = t.charAt(o2), a2 = s2.charCodeAt(0);
    if (n2[a2] !== 255) throw new TypeError(s2 + " is ambiguous");
    n2[a2] = o2;
  }
  var u = t.length, i2 = t.charAt(0), D = Math.log(u) / Math.log(256), c = Math.log(256) / Math.log(u);
  function l3(h2) {
    if (h2 instanceof Uint8Array || (ArrayBuffer.isView(h2) ? h2 = new Uint8Array(h2.buffer, h2.byteOffset, h2.byteLength) : Array.isArray(h2) && (h2 = Uint8Array.from(h2))), !(h2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h2.length === 0) return "";
    for (var g2 = 0, S = 0, v2 = 0, L = h2.length; v2 !== L && h2[v2] === 0; ) v2++, g2++;
    for (var d2 = (L - v2) * c + 1 >>> 0, m = new Uint8Array(d2); v2 !== L; ) {
      for (var F = h2[v2], q = 0, z = d2 - 1; (F !== 0 || q < S) && z !== -1; z--, q++) F += 256 * m[z] >>> 0, m[z] = F % u >>> 0, F = F / u >>> 0;
      if (F !== 0) throw new Error("Non-zero carry");
      S = q, v2++;
    }
    for (var I = d2 - S; I !== d2 && m[I] === 0; ) I++;
    for (var O = i2.repeat(g2); I < d2; ++I) O += t.charAt(m[I]);
    return O;
  }
  function p(h2) {
    if (typeof h2 != "string") throw new TypeError("Expected String");
    if (h2.length === 0) return new Uint8Array();
    var g2 = 0;
    if (h2[g2] !== " ") {
      for (var S = 0, v2 = 0; h2[g2] === i2; ) S++, g2++;
      for (var L = (h2.length - g2) * D + 1 >>> 0, d2 = new Uint8Array(L); h2[g2]; ) {
        var m = n2[h2.charCodeAt(g2)];
        if (m === 255) return;
        for (var F = 0, q = L - 1; (m !== 0 || F < v2) && q !== -1; q--, F++) m += u * d2[q] >>> 0, d2[q] = m % 256 >>> 0, m = m / 256 >>> 0;
        if (m !== 0) throw new Error("Non-zero carry");
        v2 = F, g2++;
      }
      if (h2[g2] !== " ") {
        for (var z = L - v2; z !== L && d2[z] === 0; ) z++;
        for (var I = new Uint8Array(S + (L - z)), O = S; z !== L; ) I[O++] = d2[z++];
        return I;
      }
    }
  }
  function w2(h2) {
    var g2 = p(h2);
    if (g2) return g2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: l3, decodeUnsafe: p, decode: w2 };
}
var Ur = Ir;
var Tr = Ur;
var He = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Fr = (t) => new TextEncoder().encode(t);
var Nr = (t) => new TextDecoder().decode(t);
var Lr = class {
  constructor(e, n2, r2) {
    this.name = e, this.prefix = n2, this.baseEncode = r2;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Or = class {
  constructor(e, n2, r2) {
    if (this.name = e, this.prefix = n2, n2.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n2.codePointAt(0), this.baseDecode = r2;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ze(this, e);
  }
};
var Hr = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ze(this, e);
  }
  decode(e) {
    const n2 = e[0], r2 = this.decoders[n2];
    if (r2) return r2.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ze = (t, e) => new Hr({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
var zr = class {
  constructor(e, n2, r2, o2) {
    this.name = e, this.prefix = n2, this.baseEncode = r2, this.baseDecode = o2, this.encoder = new Lr(e, n2, r2), this.decoder = new Or(e, n2, o2);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var Bt = ({ name: t, prefix: e, encode: n2, decode: r2 }) => new zr(t, e, n2, r2);
var ht = ({ prefix: t, name: e, alphabet: n2 }) => {
  const { encode: r2, decode: o2 } = Tr(n2, e);
  return Bt({ prefix: t, name: e, encode: r2, decode: (s2) => He(o2(s2)) });
};
var Mr = (t, e, n2, r2) => {
  const o2 = {};
  for (let c = 0; c < e.length; ++c) o2[e[c]] = c;
  let s2 = t.length;
  for (; t[s2 - 1] === "="; ) --s2;
  const a2 = new Uint8Array(s2 * n2 / 8 | 0);
  let u = 0, i2 = 0, D = 0;
  for (let c = 0; c < s2; ++c) {
    const l3 = o2[t[c]];
    if (l3 === void 0) throw new SyntaxError(`Non-${r2} character`);
    i2 = i2 << n2 | l3, u += n2, u >= 8 && (u -= 8, a2[D++] = 255 & i2 >> u);
  }
  if (u >= n2 || 255 & i2 << 8 - u) throw new SyntaxError("Unexpected end of data");
  return a2;
};
var qr = (t, e, n2) => {
  const r2 = e[e.length - 1] === "=", o2 = (1 << n2) - 1;
  let s2 = "", a2 = 0, u = 0;
  for (let i2 = 0; i2 < t.length; ++i2) for (u = u << 8 | t[i2], a2 += 8; a2 > n2; ) a2 -= n2, s2 += e[o2 & u >> a2];
  if (a2 && (s2 += e[o2 & u << n2 - a2]), r2) for (; s2.length * n2 & 7; ) s2 += "=";
  return s2;
};
var k = ({ name: t, prefix: e, bitsPerChar: n2, alphabet: r2 }) => Bt({ prefix: e, name: t, encode(o2) {
  return qr(o2, r2, n2);
}, decode(o2) {
  return Mr(o2, r2, n2, t);
} });
var $r = Bt({ prefix: "\0", name: "identity", encode: (t) => Nr(t), decode: (t) => Fr(t) });
var kr = Object.freeze({ __proto__: null, identity: $r });
var Rr = k({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr = Object.freeze({ __proto__: null, base2: Rr });
var Zr = k({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr = Object.freeze({ __proto__: null, base8: Zr });
var Vr = ht({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr = Object.freeze({ __proto__: null, base10: Vr });
var Jr = k({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Kr = k({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr = Object.freeze({ __proto__: null, base16: Jr, base16upper: Kr });
var Xr = k({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Pr = k({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Qr = k({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var to = k({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var eo = k({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var no = k({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ro = k({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var oo = k({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var so = k({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io = Object.freeze({ __proto__: null, base32: Xr, base32upper: Pr, base32pad: Qr, base32padupper: to, base32hex: eo, base32hexupper: no, base32hexpad: ro, base32hexpadupper: oo, base32z: so });
var uo = ht({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var co = ht({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao = Object.freeze({ __proto__: null, base36: uo, base36upper: co });
var fo = ht({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Do = ht({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho = Object.freeze({ __proto__: null, base58btc: fo, base58flickr: Do });
var lo = k({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var bo = k({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var po = k({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var wo = k({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo = Object.freeze({ __proto__: null, base64: lo, base64pad: bo, base64url: po, base64urlpad: wo });
var Me = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var go = Me.reduce((t, e, n2) => (t[n2] = e, t), []);
var yo = Me.reduce((t, e, n2) => (t[e.codePointAt(0)] = n2, t), []);
function xo(t) {
  return t.reduce((e, n2) => (e += go[n2], e), "");
}
function Bo(t) {
  const e = [];
  for (const n2 of t) {
    const r2 = yo[n2.codePointAt(0)];
    if (r2 === void 0) throw new Error(`Non-base256emoji character: ${n2}`);
    e.push(r2);
  }
  return new Uint8Array(e);
}
var Co = Bt({ prefix: "\u{1F680}", name: "base256emoji", encode: xo, decode: Bo });
var Ao = Object.freeze({ __proto__: null, base256emoji: Co });
var mo = $e;
var qe = 128;
var _o = 127;
var So = ~_o;
var vo = Math.pow(2, 31);
function $e(t, e, n2) {
  e = e || [], n2 = n2 || 0;
  for (var r2 = n2; t >= vo; ) e[n2++] = t & 255 | qe, t /= 128;
  for (; t & So; ) e[n2++] = t & 255 | qe, t >>>= 7;
  return e[n2] = t | 0, $e.bytes = n2 - r2 + 1, e;
}
var Io = Pt;
var Uo = 128;
var ke = 127;
function Pt(t, r2) {
  var n2 = 0, r2 = r2 || 0, o2 = 0, s2 = r2, a2, u = t.length;
  do {
    if (s2 >= u) throw Pt.bytes = 0, new RangeError("Could not decode varint");
    a2 = t[s2++], n2 += o2 < 28 ? (a2 & ke) << o2 : (a2 & ke) * Math.pow(2, o2), o2 += 7;
  } while (a2 >= Uo);
  return Pt.bytes = s2 - r2, n2;
}
var To = Math.pow(2, 7);
var Fo = Math.pow(2, 14);
var No = Math.pow(2, 21);
var Lo = Math.pow(2, 28);
var Oo = Math.pow(2, 35);
var Ho = Math.pow(2, 42);
var zo = Math.pow(2, 49);
var Mo = Math.pow(2, 56);
var qo = Math.pow(2, 63);
var $o = function(t) {
  return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
};
var ko = { encode: mo, decode: Io, encodingLength: $o };
var Re = ko;
var je = (t, e, n2 = 0) => (Re.encode(t, e, n2), e);
var Ze = (t) => Re.encodingLength(t);
var Qt = (t, e) => {
  const n2 = e.byteLength, r2 = Ze(t), o2 = r2 + Ze(n2), s2 = new Uint8Array(o2 + n2);
  return je(t, s2, 0), je(n2, s2, r2), s2.set(e, o2), new Ro(t, n2, e, s2);
};
var Ro = class {
  constructor(e, n2, r2, o2) {
    this.code = e, this.size = n2, this.digest = r2, this.bytes = o2;
  }
};
var Ge = ({ name: t, code: e, encode: n2 }) => new jo(t, e, n2);
var jo = class {
  constructor(e, n2, r2) {
    this.name = e, this.code = n2, this.encode = r2;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const n2 = this.encode(e);
      return n2 instanceof Uint8Array ? Qt(this.code, n2) : n2.then((r2) => Qt(this.code, r2));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e));
var Zo = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var Go = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var Vo = Object.freeze({ __proto__: null, sha256: Zo, sha512: Go });
var Ye = 0;
var Yo = "identity";
var Je = He;
var Jo = (t) => Qt(Ye, Je(t));
var Ko = { code: Ye, name: Yo, encode: Je, digest: Jo };
var Wo = Object.freeze({ __proto__: null, identity: Ko });
new TextEncoder(), new TextDecoder();
var Ke = { ...kr, ...jr, ...Gr, ...Yr, ...Wr, ...io, ...ao, ...ho, ...Eo, ...Ao };
({ ...Vo, ...Wo });
function We(t, e, n2, r2) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: n2 }, decoder: { decode: r2 } };
}
var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
var te = We("ascii", "a", (t) => {
  let e = "a";
  for (let n2 = 0; n2 < t.length; n2++) e += String.fromCharCode(t[n2]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Le(t.length);
  for (let n2 = 0; n2 < t.length; n2++) e[n2] = t.charCodeAt(n2);
  return e;
});
var Pe = { utf8: Xe, "utf-8": Xe, hex: Ke.base16, latin1: te, ascii: te, binary: te, ...Ke };
function ct(t, e = "utf8") {
  const n2 = Pe[e];
  if (!n2) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n2.encoder.encode(t).substring(1);
}
function rt(t, e = "utf8") {
  const n2 = Pe[e];
  if (!n2) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n2.decoder.decode(`${n2.prefix}${t}`);
}
function lt(t) {
  return safeJsonParse(ct(rt(t, Dt), Gt));
}
function bt(t) {
  return ct(rt(safeJsonStringify(t), Gt), Dt);
}
function Qe(t) {
  const e = rt(Wt, dt), n2 = Kt + ct(Oe([e, t]), dt);
  return [Yt, Jt, n2].join(Vt);
}
function en(t) {
  return ct(t, Dt);
}
function nn(t) {
  return rt(t, Dt);
}
function rn(t) {
  return rt([bt(t.header), bt(t.payload)].join(ut), xt);
}
function on(t) {
  return [bt(t.header), bt(t.payload), en(t.signature)].join(ut);
}
function sn(t) {
  const e = t.split(ut), n2 = lt(e[0]), r2 = lt(e[1]), o2 = nn(e[2]), s2 = rt(e.slice(0, 2).join(ut), xt);
  return { header: n2, payload: r2, signature: o2, data: s2 };
}
function Po(t = he(Ne)) {
  const e = Rt.getPublicKey(t);
  return { secretKey: Oe([t, e]), publicKey: e };
}
async function Qo(t, e, n2, r2, o2 = (0, import_time.fromMiliseconds)(Date.now())) {
  const s2 = { alg: jt, typ: Zt }, a2 = Qe(r2.publicKey), u = o2 + n2, i2 = { iss: a2, sub: t, aud: e, iat: o2, exp: u }, D = rn({ header: s2, payload: i2 }), c = Rt.sign(D, r2.secretKey.slice(0, 32));
  return on({ header: s2, payload: i2, signature: c });
}

// node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}

// node_modules/uint8arrays/esm/src/concat.js
function concat(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

// node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x2 = ALPHABET.charAt(i2);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode5(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length2) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i3;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length2) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i3;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode6(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode5,
    decodeUnsafe,
    decode: decode6
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2)) {
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b2) => new TextDecoder().decode(b2);

// node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or2(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name2, prefix, encode: encode5, decode: decode6 }) => new Codec(name2, prefix, encode5, decode6);
var baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode5, decode: decode6 } = base_x_default(alphabet2, name2);
  return from({
    prefix,
    name: name2,
    encode: encode5,
    decode: (text) => coerce(decode6(text))
  });
};
var decode = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i2 = 0; i2 < alphabet2.length; ++i2) {
    codes[alphabet2[i2]] = i2;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end; ++i2) {
    const value = codes[string2[i2]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet2, bitsPerChar, name2);
    }
  });
};

// node_modules/multiformats/esm/src/bases/identity.js
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var alphabetBytesToChars = alphabet.reduce((p, c, i2) => {
  p[i2] = c;
  return p;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p, c, i2) => {
  p[c.codePointAt(0)] = i2;
  return p;
}, []);
function encode2(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, "");
}
function decode2(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: encode2,
  decode: decode2
});

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode3;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
var decode3 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b2, l3 = buf.length;
  do {
    if (counter >= l3) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b2 = buf[counter++];
    res += shift < 28 ? (b2 & REST$1) << shift : (b2 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b2 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode3,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/multiformats/esm/src/varint.js
var decode4 = (data, offset = 0) => {
  const code2 = varint_default.decode(data, offset);
  return [
    code2,
    varint_default.decode.bytes
  ];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/multiformats/esm/src/hashes/digest.js
var create = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes);
};
var decode5 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode4(bytes);
  const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size, digest2, bytes);
};
var equals2 = (a2, b2) => {
  if (a2 === b2) {
    return true;
  } else {
    return a2.code === b2.code && a2.size === b2.size && equals(a2.bytes, b2.bytes);
  }
};
var Digest = class {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
};

// node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name: name2, code: code2, encode: encode5 }) => new Hasher(name2, code2, encode5);
var Hasher = class {
  constructor(name2, code2, encode5) {
    this.name = name2;
    this.code = code2;
    this.encode = encode5;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input) => create(code, encode4(input));
var identity2 = {
  code,
  name,
  encode: encode4,
  digest
};

// node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/multiformats/esm/src/cid.js
var CID = class _CID {
  constructor(version2, code2, multihash, bytes) {
    this.code = code2;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create(code2, digest2);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code2, multihash, bytes } = value;
      return new _CID(version2, code2, multihash, bytes || encodeCID(version2, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version2, multihash, code: code2 } = value;
      const digest2 = decode5(multihash);
      return _CID.create(version2, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version2, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version2, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version2, code2, digest2.bytes);
        return new _CID(version2, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return _CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i2, length2] = decode4(initialBytes.subarray(offset));
      offset += length2;
      return i2;
    };
    let version2 = next();
    let codec = DAG_PB_CODE;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version2, code2, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// node_modules/multiformats/esm/src/basics.js
var bases = {
  ...identity_exports,
  ...base2_exports,
  ...base8_exports,
  ...base10_exports,
  ...base16_exports,
  ...base32_exports,
  ...base36_exports,
  ...base58_exports,
  ...base64_exports,
  ...base256emoji_exports
};
var hashes = {
  ...sha2_browser_exports,
  ...identity_exports2
};

// node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode5, decode6) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode5
    },
    decoder: { decode: decode6 }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i2 = 0; i2 < buf.length; i2++) {
    string2 += String.fromCharCode(buf[i2]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i2 = 0; i2 < str.length; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/uint8arrays/esm/src/from-string.js
function fromString2(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}

// node_modules/uint8arrays/esm/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// node_modules/@walletconnect/relay-api/dist/index.es.js
var C = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events = __toESM(require_events());
var import_time2 = __toESM(require_cjs());
var n = class extends IEvents {
  constructor(e) {
    super();
  }
};
var s = import_time2.FIVE_SECONDS;
var r = { pulse: "heartbeat_pulse" };
var i = class _i extends n {
  constructor(e) {
    super(e), this.events = new import_events.EventEmitter(), this.interval = s, this.interval = e?.interval || s;
  }
  static async init(e) {
    const t = new _i(e);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time2.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r.pulse);
  }
};

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events3 = __toESM(require_events());
var v = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser();
var w = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var d = (r2) => r2.split("?")[0];
var h = 10;
var b = v();
var f = class {
  constructor(e) {
    if (this.url = e, this.events = new import_events3.EventEmitter(), this.registering = false, !isWsUrl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n2) => {
        this.onClose(n2), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!isWsUrl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n2, s2) => {
        this.events.once("register_error", (o2) => {
          this.resetMaxListeners(), s2(o2);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s2(new Error("WebSocket connection is missing or invalid"));
          n2(this.socket);
        });
      });
    }
    return this.url = e, this.registering = true, new Promise((t, n2) => {
      const s2 = (0, esm_exports.isReactNative)() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e) }, o2 = new b(e, [], s2);
      w() ? o2.onerror = (i2) => {
        const a2 = i2;
        n2(this.emitError(a2.error));
      } : o2.on("error", (i2) => {
        n2(this.emitError(i2));
      }), o2.onopen = () => {
        this.onOpen(o2), t(o2);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = false, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const n2 = this.parseError(t), s2 = n2.message || n2.toString(), o2 = formatJsonRpcError(e, s2);
    this.events.emit("payload", o2);
  }
  parseError(e, t = this.url) {
    return parseConnectionError(e, d(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h && this.events.setMaxListeners(h);
  }
  emitError(e) {
    const t = this.parseError(new Error(e?.message || `WebSocket connection failed for host: ${d(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

export {
  detect,
  require_cjs,
  require_cjs2,
  require_cjs3,
  Qe,
  sn,
  Po,
  Qo,
  concat,
  fromString2 as fromString,
  toString2 as toString,
  C,
  IEvents,
  r,
  i,
  destr,
  f
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/relay-auth/dist/index.es.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
