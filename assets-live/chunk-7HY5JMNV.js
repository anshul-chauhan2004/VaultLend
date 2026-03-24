import {
  esm_exports
} from "./chunk-KOYK54RZ.js";
import {
  i,
  r
} from "./chunk-JYSQHUK7.js";
import {
  formatUnits
} from "./chunk-Q2V2IXDL.js";
import {
  require_events
} from "./chunk-HMQ2SUHO.js";
import {
  __toESM
} from "./chunk-2EHZJ3EP.js";

// node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "ID_AUTH"
  },
  CONNECTOR_NAMES: {
    AUTH: "Auth"
  },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: {
    PENDING_TRANSACTIONS: 99
  },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122"
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos"
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5"
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
  ],
  HTTP_STATUS_CODES: {
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN: (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org"
};

// node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js
var NetworkUtil = {
  caipNetworkIdToNumber(caipnetworkId) {
    return caipnetworkId ? Number(caipnetworkId.split(":")[1]) : void 0;
  },
  parseEvmChainId(chainId) {
    return typeof chainId === "string" ? this.caipNetworkIdToNumber(chainId) : chainId;
  },
  getNetworksByNamespace(networks, namespace) {
    return networks?.filter((network) => network.chainNamespace === namespace) || [];
  },
  getFirstNetworkByNamespace(networks, namespace) {
    return this.getNetworksByNamespace(networks, namespace)[0];
  },
  getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
    if (!caipNetworkId) {
      return void 0;
    }
    const caipNetwork = caipNetworks.find((network) => network.caipNetworkId === caipNetworkId);
    if (caipNetwork) {
      return caipNetwork.name;
    }
    const [namespace] = caipNetworkId.split(":");
    return ConstantsUtil.CHAIN_NAME_MAP?.[namespace] || void 0;
  }
};

// node_modules/big.js/big.mjs
var DP = 20;
var RM = 1;
var MAX_DP = 1e6;
var MAX_POWER = 1e6;
var NE = -7;
var PE = 21;
var STRICT = false;
var NAME = "[big.js] ";
var INVALID = NAME + "Invalid ";
var INVALID_DP = INVALID + "decimal places";
var INVALID_RM = INVALID + "rounding mode";
var DIV_BY_ZERO = NAME + "Division by zero";
var P = {};
var UNDEFINED = void 0;
var NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
  function Big2(n) {
    var x = this;
    if (!(x instanceof Big2)) return n === UNDEFINED ? _Big_() : new Big2(n);
    if (n instanceof Big2) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== "string") {
        if (Big2.strict === true && typeof n !== "bigint") {
          throw TypeError(INVALID + "value");
        }
        n = n === 0 && 1 / n < 0 ? "-0" : String(n);
      }
      parse(x, n);
    }
    x.constructor = Big2;
  }
  Big2.prototype = P;
  Big2.DP = DP;
  Big2.RM = RM;
  Big2.NE = NE;
  Big2.PE = PE;
  Big2.strict = STRICT;
  Big2.roundDown = 0;
  Big2.roundHalfUp = 1;
  Big2.roundHalfEven = 2;
  Big2.roundUp = 3;
  return Big2;
}
function parse(x, n) {
  var e2, i2, nl;
  if (!NUMERIC.test(n)) {
    throw Error(INVALID + "number");
  }
  x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
  if ((e2 = n.indexOf(".")) > -1) n = n.replace(".", "");
  if ((i2 = n.search(/e/i)) > 0) {
    if (e2 < 0) e2 = i2;
    e2 += +n.slice(i2 + 1);
    n = n.substring(0, i2);
  } else if (e2 < 0) {
    e2 = n.length;
  }
  nl = n.length;
  for (i2 = 0; i2 < nl && n.charAt(i2) == "0"; ) ++i2;
  if (i2 == nl) {
    x.c = [x.e = 0];
  } else {
    for (; nl > 0 && n.charAt(--nl) == "0"; ) ;
    x.e = e2 - i2 - 1;
    x.c = [];
    for (e2 = 0; i2 <= nl; ) x.c[e2++] = +n.charAt(i2++);
  }
  return x;
}
function round(x, sd, rm, more) {
  var xc = x.c;
  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
    xc.length = sd;
    if (more) {
      for (; ++xc[--sd] > 9; ) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }
    for (sd = xc.length; !xc[--sd]; ) xc.pop();
  }
  return x;
}
function stringify(x, doExponential, isNonzero) {
  var e2 = x.e, s2 = x.c.join(""), n = s2.length;
  if (doExponential) {
    s2 = s2.charAt(0) + (n > 1 ? "." + s2.slice(1) : "") + (e2 < 0 ? "e" : "e+") + e2;
  } else if (e2 < 0) {
    for (; ++e2; ) s2 = "0" + s2;
    s2 = "0." + s2;
  } else if (e2 > 0) {
    if (++e2 > n) {
      for (e2 -= n; e2--; ) s2 += "0";
    } else if (e2 < n) {
      s2 = s2.slice(0, e2) + "." + s2.slice(e2);
    }
  } else if (n > 1) {
    s2 = s2.charAt(0) + "." + s2.slice(1);
  }
  return x.s < 0 && isNonzero ? "-" + s2 : s2;
}
P.abs = function() {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};
P.cmp = function(y2) {
  var isneg, x = this, xc = x.c, yc = (y2 = new x.constructor(y2)).c, i2 = x.s, j = y2.s, k2 = x.e, l2 = y2.e;
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i2;
  if (i2 != j) return i2;
  isneg = i2 < 0;
  if (k2 != l2) return k2 > l2 ^ isneg ? 1 : -1;
  j = (k2 = xc.length) < (l2 = yc.length) ? k2 : l2;
  for (i2 = -1; ++i2 < j; ) {
    if (xc[i2] != yc[i2]) return xc[i2] > yc[i2] ^ isneg ? 1 : -1;
  }
  return k2 == l2 ? 0 : k2 > l2 ^ isneg ? 1 : -1;
};
P.div = function(y2) {
  var x = this, Big2 = x.constructor, a = x.c, b = (y2 = new Big2(y2)).c, k2 = x.s == y2.s ? 1 : -1, dp = Big2.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }
  if (!a[0]) {
    y2.s = k2;
    y2.c = [y2.e = 0];
    return y2;
  }
  var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r2 = a.slice(0, bl), rl = r2.length, q = y2, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y2.e) + 1;
  q.s = k2;
  k2 = p < 0 ? 0 : p;
  bz.unshift(0);
  for (; rl++ < bl; ) r2.push(0);
  do {
    for (n = 0; n < 10; n++) {
      if (bl != (rl = r2.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl; ) {
          if (b[ri] != r2[ri]) {
            cmp = b[ri] > r2[ri] ? 1 : -1;
            break;
          }
        }
      }
      if (cmp < 0) {
        for (bt = rl == bl ? b : bz; rl; ) {
          if (r2[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r2[--ri]; ) r2[ri] = 9;
            --r2[ri];
            r2[rl] += 10;
          }
          r2[rl] -= bt[rl];
        }
        for (; !r2[0]; ) r2.shift();
      } else {
        break;
      }
    }
    qc[qi++] = cmp ? n : ++n;
    if (r2[0] && cmp) r2[rl] = a[ai] || 0;
    else r2 = [a[ai]];
  } while ((ai++ < al || r2[0] !== UNDEFINED) && k2--);
  if (!qc[0] && qi != 1) {
    qc.shift();
    q.e--;
    p--;
  }
  if (qi > p) round(q, p, Big2.RM, r2[0] !== UNDEFINED);
  return q;
};
P.eq = function(y2) {
  return this.cmp(y2) === 0;
};
P.gt = function(y2) {
  return this.cmp(y2) > 0;
};
P.gte = function(y2) {
  return this.cmp(y2) > -1;
};
P.lt = function(y2) {
  return this.cmp(y2) < 0;
};
P.lte = function(y2) {
  return this.cmp(y2) < 1;
};
P.minus = P.sub = function(y2) {
  var i2, j, t2, xlty, x = this, Big2 = x.constructor, a = x.s, b = (y2 = new Big2(y2)).s;
  if (a != b) {
    y2.s = -b;
    return x.plus(y2);
  }
  var xc = x.c.slice(), xe = x.e, yc = y2.c, ye = y2.e;
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y2.s = -b;
    } else if (xc[0]) {
      y2 = new Big2(x);
    } else {
      y2.s = 1;
    }
    return y2;
  }
  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t2 = xc;
    } else {
      ye = xe;
      t2 = yc;
    }
    t2.reverse();
    for (b = a; b--; ) t2.push(0);
    t2.reverse();
  } else {
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }
  if (xlty) {
    t2 = xc;
    xc = yc;
    yc = t2;
    y2.s = -y2.s;
  }
  if ((b = (j = yc.length) - (i2 = xc.length)) > 0) for (; b--; ) xc[i2++] = 0;
  for (b = i2; j > a; ) {
    if (xc[--j] < yc[j]) {
      for (i2 = j; i2 && !xc[--i2]; ) xc[i2] = 9;
      --xc[i2];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }
  for (; xc[--b] === 0; ) xc.pop();
  for (; xc[0] === 0; ) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    y2.s = 1;
    xc = [ye = 0];
  }
  y2.c = xc;
  y2.e = ye;
  return y2;
};
P.mod = function(y2) {
  var ygtx, x = this, Big2 = x.constructor, a = x.s, b = (y2 = new Big2(y2)).s;
  if (!y2.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x.s = y2.s = 1;
  ygtx = y2.cmp(x) == 1;
  x.s = a;
  y2.s = b;
  if (ygtx) return new Big2(x);
  a = Big2.DP;
  b = Big2.RM;
  Big2.DP = Big2.RM = 0;
  x = x.div(y2);
  Big2.DP = a;
  Big2.RM = b;
  return this.minus(x.times(y2));
};
P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};
P.plus = P.add = function(y2) {
  var e2, k2, t2, x = this, Big2 = x.constructor;
  y2 = new Big2(y2);
  if (x.s != y2.s) {
    y2.s = -y2.s;
    return x.minus(y2);
  }
  var xe = x.e, xc = x.c, ye = y2.e, yc = y2.c;
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y2 = new Big2(x);
      } else {
        y2.s = x.s;
      }
    }
    return y2;
  }
  xc = xc.slice();
  if (e2 = xe - ye) {
    if (e2 > 0) {
      ye = xe;
      t2 = yc;
    } else {
      e2 = -e2;
      t2 = xc;
    }
    t2.reverse();
    for (; e2--; ) t2.push(0);
    t2.reverse();
  }
  if (xc.length - yc.length < 0) {
    t2 = yc;
    yc = xc;
    xc = t2;
  }
  e2 = yc.length;
  for (k2 = 0; e2; xc[e2] %= 10) k2 = (xc[--e2] = xc[e2] + yc[e2] + k2) / 10 | 0;
  if (k2) {
    xc.unshift(k2);
    ++ye;
  }
  for (e2 = xc.length; xc[--e2] === 0; ) xc.pop();
  y2.c = xc;
  y2.e = ye;
  return y2;
};
P.pow = function(n) {
  var x = this, one = new x.constructor("1"), y2 = one, isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + "exponent");
  }
  if (isneg) n = -n;
  for (; ; ) {
    if (n & 1) y2 = y2.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }
  return isneg ? one.div(y2) : y2;
};
P.prec = function(sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + "precision");
  }
  return round(new this.constructor(this), sd, rm);
};
P.round = function(dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};
P.sqrt = function() {
  var r2, c2, t2, x = this, Big2 = x.constructor, s2 = x.s, e2 = x.e, half = new Big2("0.5");
  if (!x.c[0]) return new Big2(x);
  if (s2 < 0) {
    throw Error(NAME + "No square root");
  }
  s2 = Math.sqrt(+stringify(x, true, true));
  if (s2 === 0 || s2 === 1 / 0) {
    c2 = x.c.join("");
    if (!(c2.length + e2 & 1)) c2 += "0";
    s2 = Math.sqrt(c2);
    e2 = ((e2 + 1) / 2 | 0) - (e2 < 0 || e2 & 1);
    r2 = new Big2((s2 == 1 / 0 ? "5e" : (s2 = s2.toExponential()).slice(0, s2.indexOf("e") + 1)) + e2);
  } else {
    r2 = new Big2(s2 + "");
  }
  e2 = r2.e + (Big2.DP += 4);
  do {
    t2 = r2;
    r2 = half.times(t2.plus(x.div(t2)));
  } while (t2.c.slice(0, e2).join("") !== r2.c.slice(0, e2).join(""));
  return round(r2, (Big2.DP -= 4) + r2.e + 1, Big2.RM);
};
P.times = P.mul = function(y2) {
  var c2, x = this, Big2 = x.constructor, xc = x.c, yc = (y2 = new Big2(y2)).c, a = xc.length, b = yc.length, i2 = x.e, j = y2.e;
  y2.s = x.s == y2.s ? 1 : -1;
  if (!xc[0] || !yc[0]) {
    y2.c = [y2.e = 0];
    return y2;
  }
  y2.e = i2 + j;
  if (a < b) {
    c2 = xc;
    xc = yc;
    yc = c2;
    j = a;
    a = b;
    b = j;
  }
  for (c2 = new Array(j = a + b); j--; ) c2[j] = 0;
  for (i2 = b; i2--; ) {
    b = 0;
    for (j = a + i2; j > i2; ) {
      b = c2[j] + yc[i2] * xc[j - i2 - 1] + b;
      c2[j--] = b % 10;
      b = b / 10 | 0;
    }
    c2[j] = b;
  }
  if (b) ++y2.e;
  else c2.shift();
  for (i2 = c2.length; !c2[--i2]; ) c2.pop();
  y2.c = c2;
  return y2;
};
P.toExponential = function(dp, rm) {
  var x = this, n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp; ) x.c.push(0);
  }
  return stringify(x, true, !!n);
};
P.toFixed = function(dp, rm) {
  var x = this, n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);
    for (dp = dp + x.e + 1; x.c.length < dp; ) x.c.push(0);
  }
  return stringify(x, false, !!n);
};
P[Symbol.for("nodejs.util.inspect.custom")] = P.toJSON = P.toString = function() {
  var x = this, Big2 = x.constructor;
  return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, !!x.c[0]);
};
P.toNumber = function() {
  var n = +stringify(this, true, true);
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + "Imprecise conversion");
  }
  return n;
};
P.toPrecision = function(sd, rm) {
  var x = this, Big2 = x.constructor, n = x.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + "precision");
    }
    x = round(new Big2(x), sd, rm);
    for (; x.c.length < sd; ) x.c.push(0);
  }
  return stringify(x, sd <= x.e || x.e <= Big2.NE || x.e >= Big2.PE, !!n);
};
P.valueOf = function() {
  var x = this, Big2 = x.constructor;
  if (Big2.strict === true) {
    throw Error(NAME + "valueOf disallowed");
  }
  return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, true);
};
var Big = _Big_();
var big_default = Big;

// node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = {
  bigNumber(value) {
    if (!value) {
      return new big_default(0);
    }
    return new big_default(value);
  },
  multiply(a, b) {
    if (a === void 0 || b === void 0) {
      return new big_default(0);
    }
    const aBigNumber = new big_default(a);
    const bBigNumber = new big_default(b);
    return aBigNumber.times(bBigNumber);
  },
  formatNumberToLocalString(value, decimals = 2) {
    if (value === void 0) {
      return "0.00";
    }
    if (typeof value === "number") {
      return value.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      });
    }
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    });
  },
  parseLocalStringToNumber(value) {
    if (value === void 0) {
      return 0;
    }
    return parseFloat(value.replace(/,/gu, ""));
  }
};

// node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js
var erc20ABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];

// node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js
var swapABI = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ type: "bool" }]
  }
];

// node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js
var usdtABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];

// node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js
var ContractUtil = {
  getERC20Abi: (tokenAddress) => {
    if (ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
      return usdtABI;
    }
    return erc20ABI;
  },
  getSwapAbi: () => swapABI
};

// node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
var ParseUtil = {
  validateCaipAddress(address) {
    if (address.split(":")?.length !== 3) {
      throw new Error("Invalid CAIP Address");
    }
    return address;
  },
  parseCaipAddress(caipAddress) {
    const parts = caipAddress.split(":");
    if (parts.length !== 3) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    const [chainNamespace, chainId, address] = parts;
    if (!chainNamespace || !chainId || !address) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    return {
      chainNamespace,
      chainId,
      address
    };
  },
  parseCaipNetworkId(caipNetworkId) {
    const parts = caipNetworkId.split(":");
    if (parts.length !== 2) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    const [chainNamespace, chainId] = parts;
    if (!chainNamespace || !chainId) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    return {
      chainNamespace,
      chainId
    };
  }
};

// node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js
var SafeLocalStorageKeys = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections"
};
function getSafeConnectorIdKey(namespace) {
  if (!namespace) {
    throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  }
  return `@appkit/${namespace}:connected_connector_id`;
}
var SafeLocalStorage = {
  setItem(key, value) {
    if (isSafe() && value !== void 0) {
      localStorage.setItem(key, value);
    }
  },
  getItem(key) {
    if (isSafe()) {
      return localStorage.getItem(key) || void 0;
    }
    return void 0;
  },
  removeItem(key) {
    if (isSafe()) {
      localStorage.removeItem(key);
    }
  },
  clear() {
    if (isSafe()) {
      localStorage.clear();
    }
  }
};
function isSafe() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

// node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js
function getW3mThemeVariables(themeVariables, themeType) {
  if (themeType === "light") {
    return {
      "--w3m-accent": themeVariables?.["--w3m-accent"] || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    };
  }
  return {
    "--w3m-accent": themeVariables?.["--w3m-accent"] || "hsla(230, 100%, 67%, 1)",
    "--w3m-background": "#121313"
  };
}

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
var StorageUtil = {
  // Cache expiry in milliseconds
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5
  },
  isCacheExpired(timestamp, cacheExpiry) {
    return Date.now() - timestamp > cacheExpiry;
  },
  getActiveNetworkProps() {
    const namespace = StorageUtil.getActiveNamespace();
    const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
    const stringChainId = caipNetworkId ? caipNetworkId.split(":")[1] : void 0;
    const chainId = stringChainId ? isNaN(Number(stringChainId)) ? stringChainId : Number(stringChainId) : void 0;
    return {
      namespace,
      caipNetworkId,
      chainId
    };
  },
  setWalletConnectDeepLink({ name, href }) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
      if (deepLink) {
        return JSON.parse(deepLink);
      }
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
    return void 0;
  },
  deleteWalletConnectDeepLink() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(namespace) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(caipNetworkId) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
      StorageUtil.setActiveNamespace(caipNetworkId.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return void 0;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(namespace) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.removeItem(key);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(wallet) {
    try {
      const recentWallets = StorageUtil.getRecentWallets();
      const exists = recentWallets.find((w) => w.id === wallet.id);
      if (!exists) {
        recentWallets.unshift(wallet);
        if (recentWallets.length > 2) {
          recentWallets.pop();
        }
        SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
      }
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
      return recent ? JSON.parse(recent) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  setConnectedConnectorId(namespace, connectorId) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.setItem(key, connectorId);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      const activeNamespace = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
      return activeNamespace;
    } catch {
      console.info("Unable to get active namespace");
    }
    return void 0;
  },
  getConnectedConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    try {
      const key = getSafeConnectorIdKey(namespace);
      return SafeLocalStorage.getItem(key);
    } catch (e2) {
      console.info("Unable to get connected connector id in namespace ", namespace);
    }
    return void 0;
  },
  setConnectedSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
    return void 0;
  },
  deleteConnectedSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
    return void 0;
  },
  getStoredActiveCaipNetworkId() {
    const storedCaipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    const networkId = storedCaipNetworkId?.split(":")?.[1];
    return networkId;
  },
  setConnectionStatus(status) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
    } catch {
      return void 0;
    }
  },
  getConnectedNamespaces() {
    try {
      const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
      if (!namespaces?.length) {
        return [];
      }
      return namespaces.split(",");
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(namespaces) {
    try {
      const uniqueNamespaces = Array.from(new Set(namespaces));
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(namespace) {
    try {
      const namespaces = StorageUtil.getConnectedNamespaces();
      if (!namespaces.includes(namespace)) {
        namespaces.push(namespace);
        StorageUtil.setConnectedNamespaces(namespaces);
      }
    } catch {
      console.info("Unable to add connected namespace");
    }
  },
  removeConnectedNamespace(namespace) {
    try {
      const namespaces = StorageUtil.getConnectedNamespaces();
      const index = namespaces.indexOf(namespace);
      if (index > -1) {
        namespaces.splice(index, 1);
        StorageUtil.setConnectedNamespaces(namespaces);
      }
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to get telegram social provider");
      return null;
    }
  },
  setTelegramSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      const balanceCache = cache[caipAddress];
      if (balanceCache && !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
        return balanceCache.balance;
      }
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateBalanceCache(params) {
    try {
      const cache = StorageUtil.getBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getNativeBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromNativeBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getNativeBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      const nativeBalanceCache = cache[caipAddress];
      if (nativeBalanceCache && !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
        return nativeBalanceCache;
      }
      console.info("Discarding cache for address", caipAddress);
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateNativeBalanceCache(params) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getEnsCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return cache;
  },
  getEnsFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      const ensCache = cache[address];
      if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
        return ensCache.ens;
      }
      StorageUtil.removeEnsFromCache(address);
    } catch {
      console.info("Unable to get ens name from cache", address);
    }
    return void 0;
  },
  updateEnsCache(params) {
    try {
      const cache = StorageUtil.getEnsCache();
      cache[params.address] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update ens name cache", params);
    }
  },
  removeEnsFromCache(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove ens name from cache", address);
    }
  },
  getIdentityCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return cache;
  },
  getIdentityFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      const identityCache = cache[address];
      if (identityCache && !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
        return identityCache.identity;
      }
      StorageUtil.removeIdentityFromCache(address);
    } catch {
      console.info("Unable to get identity from cache", address);
    }
    return void 0;
  },
  updateIdentityCache(params) {
    try {
      const cache = StorageUtil.getIdentityCache();
      cache[params.address] = {
        identity: params.identity,
        timestamp: params.timestamp
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update identity cache", params);
    }
  },
  removeIdentityFromCache(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove identity from cache", address);
    }
  },
  clearAddressCache() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(accountTypes) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
    } catch {
      console.info("Unable to set preferred account types", accountTypes);
    }
  },
  getPreferredAccountTypes() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
      if (!result) {
        return {};
      }
      return JSON.parse(result);
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(connections, chainNamespace) {
    try {
      const newConnections = {
        ...StorageUtil.getConnections(),
        [chainNamespace]: connections
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(newConnections));
    } catch (error) {
      console.error("Unable to sync connections to storage", error);
    }
  },
  getConnections() {
    try {
      const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
      if (!connectionsStorage) {
        return {};
      }
      return JSON.parse(connectionsStorage);
    } catch (error) {
      console.error("Unable to get connections from storage", error);
      return {};
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var SECURE_SITE = (
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org"
);
var ONRAMP_PROVIDERS = [
  {
    label: "Coinbase",
    name: "coinbase",
    feeRange: "1-2%",
    url: "",
    supportedChains: ["eip155"]
  },
  {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
  }
];
var MELD_PUBLIC_KEY = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
var ConstantsUtil2 = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  FIVE_SEC_MS: 5e3,
  THREE_SEC_MS: 3e3,
  ONE_SEC_MS: 1e3,
  SECURE_SITE,
  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  /**
   * Network name to Coinbase Pay SDK chain name map object
   * @see supported chain names on Coinbase for Pay SDK: https://github.com/coinbase/cbpay-js/blob/d4bda2c05c4d5917c8db6a05476b603546046394/src/types/onramp.ts
   */
  WC_COINBASE_PAY_SDK_CHAINS: [
    "ethereum",
    "arbitrum",
    "polygon",
    "berachain",
    "avalanche-c-chain",
    "optimism",
    "celo",
    "base"
  ],
  WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
  WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
    Ethereum: "ethereum",
    "Arbitrum One": "arbitrum",
    Polygon: "polygon",
    Berachain: "berachain",
    Avalanche: "avalanche-c-chain",
    "OP Mainnet": "optimism",
    Celo: "celo",
    Base: "base"
  },
  WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
  SWAP_SUPPORTED_NETWORKS: [
    // Ethereum'
    "eip155:1",
    // Arbitrum One'
    "eip155:42161",
    // Optimism'
    "eip155:10",
    // ZKSync Era'
    "eip155:324",
    // Base'
    "eip155:8453",
    // BNB Smart Chain'
    "eip155:56",
    // Polygon'
    "eip155:137",
    // Gnosis'
    "eip155:100",
    // Avalanche'
    "eip155:43114",
    // Fantom'
    "eip155:250",
    // Klaytn'
    "eip155:8217",
    // Aurora
    "eip155:1313161554"
  ],
  NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
  ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"],
  ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155"],
  NATIVE_TOKEN_ADDRESS: {
    eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    solana: "So11111111111111111111111111111111111111111",
    polkadot: "0x",
    bip122: "0x",
    cosmos: "0x"
  },
  CONVERT_SLIPPAGE_TOLERANCE: 1,
  CONNECT_LABELS: {
    MOBILE: "Open and continue in the wallet app",
    WEB: "Open and continue in the wallet app"
  },
  SEND_SUPPORTED_NAMESPACES: ["eip155", "solana"],
  DEFAULT_REMOTE_FEATURES: {
    swaps: ["1inch"],
    onramp: ["coinbase", "meld"],
    email: true,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook"
    ],
    activity: true,
    reownBranding: true
  },
  DEFAULT_REMOTE_FEATURES_DISABLED: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
    activity: false,
    reownBranding: false
  },
  DEFAULT_FEATURES: {
    receive: true,
    send: true,
    emailShowWallets: true,
    connectorTypeOrder: [
      "walletConnect",
      "recent",
      "injected",
      "featured",
      "custom",
      "external",
      "recommended"
    ],
    analytics: true,
    allWallets: true,
    legalCheckbox: false,
    smartSessions: false,
    collapseWallets: false,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: void 0,
    pay: false
  },
  DEFAULT_SOCIALS: [
    "google",
    "x",
    "farcaster",
    "discord",
    "apple",
    "github",
    "facebook"
  ],
  DEFAULT_ACCOUNT_TYPES: {
    bip122: "payment",
    eip155: "smartAccount",
    polkadot: "eoa",
    solana: "eoa"
  },
  ADAPTER_TYPES: {
    UNIVERSAL: "universal",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    BITCOIN: "bitcoin"
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = {
  isMobile() {
    if (this.isClient()) {
      return Boolean(typeof window?.matchMedia === "function" && window?.matchMedia("(pointer:coarse)")?.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
    }
    return false;
  },
  checkCaipNetwork(network, networkName = "") {
    return network?.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile()) {
      return false;
    }
    const ua = window?.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && ua.includes("android");
  },
  isIos() {
    if (!this.isMobile()) {
      return false;
    }
    const ua = window?.navigator.userAgent.toLowerCase();
    return ua.includes("iphone") || ua.includes("ipad");
  },
  isSafari() {
    if (!this.isClient()) {
      return false;
    }
    const ua = window?.navigator.userAgent.toLowerCase();
    return ua.includes("safari");
  },
  isClient() {
    return typeof window !== "undefined";
  },
  isPairingExpired(expiry) {
    return expiry ? expiry - Date.now() <= ConstantsUtil2.TEN_SEC_MS : true;
  },
  isAllowedRetry(lastRetry, differenceMs = ConstantsUtil2.ONE_SEC_MS) {
    return Date.now() - lastRetry >= differenceMs;
  },
  copyToClopboard(text) {
    navigator.clipboard.writeText(text);
  },
  isIframe() {
    try {
      return window?.self !== window?.top;
    } catch (e2) {
      return false;
    }
  },
  isSafeApp() {
    if (CoreHelperUtil.isClient() && window.self !== window.top) {
      try {
        const ancestor = window?.location?.ancestorOrigins?.[0];
        const safeAppUrl = "https://app.safe.global";
        if (ancestor) {
          const ancestorUrl = new URL(ancestor);
          const safeUrl = new URL(safeAppUrl);
          return ancestorUrl.hostname === safeUrl.hostname;
        }
      } catch {
        return false;
      }
    }
    return false;
  },
  getPairingExpiry() {
    return Date.now() + ConstantsUtil2.FOUR_MINUTES_MS;
  },
  getNetworkId(caipAddress) {
    return caipAddress?.split(":")[1];
  },
  getPlainAddress(caipAddress) {
    return caipAddress?.split(":")[2];
  },
  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(func, timeout = 500) {
    let timer = void 0;
    return (...args) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  formatNativeUrl(appUrl, wcUri, universalLink = null) {
    if (CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    let safeUniversalLink = universalLink;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    if (safeUniversalLink && !safeUniversalLink?.endsWith("/")) {
      safeUniversalLink = `${safeUniversalLink}/`;
    }
    if (this.isTelegram() && this.isAndroid()) {
      wcUri = encodeURIComponent(wcUri);
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      redirectUniversalLink: safeUniversalLink ? `${safeUniversalLink}wc?uri=${encodedWcUrl}` : void 0,
      href: safeAppUrl
    };
  },
  formatUniversalUrl(appUrl, wcUri) {
    if (!CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  getOpenTargetForPlatform(target) {
    if (target === "popupWindow") {
      return target;
    }
    if (this.isTelegram()) {
      if (StorageUtil.getTelegramSocialProvider()) {
        return "_top";
      }
      return "_blank";
    }
    return target;
  },
  openHref(href, target, features) {
    window?.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  returnOpenHref(href, target, features) {
    return window?.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  isPWA() {
    if (typeof window === "undefined") {
      return false;
    }
    const isStandaloneDisplayMode = window.matchMedia?.("(display-mode: standalone)")?.matches;
    const isIOSStandalone = window?.navigator?.standalone;
    return Boolean(isStandaloneDisplayMode || isIOSStandalone);
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
  },
  formatBalance(balance, symbol) {
    let formattedBalance = "0.000";
    if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        const formattedValue = Math.floor(number * 1e3) / 1e3;
        if (formattedValue) {
          formattedBalance = formattedValue.toString();
        }
      }
    }
    return `${formattedBalance}${symbol ? ` ${symbol}` : ""}`;
  },
  formatBalance2(balance, symbol) {
    let formattedBalance = void 0;
    if (balance === "0") {
      formattedBalance = "0";
    } else if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        formattedBalance = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0];
      }
    }
    return {
      value: formattedBalance ?? "0",
      rest: formattedBalance === "0" ? "000" : "",
      symbol
    };
  },
  getApiUrl() {
    return ConstantsUtil.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return ConstantsUtil.PULSE_API_URL;
  },
  getUUID() {
    if (crypto?.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c2) => {
      const r2 = Math.random() * 16 | 0;
      const v = c2 === "x" ? r2 : r2 & 3 | 8;
      return v.toString(16);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseError(error) {
    if (typeof error === "string") {
      return error;
    } else if (typeof error?.issues?.[0]?.message === "string") {
      return error.issues[0].message;
    } else if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  },
  sortRequestedNetworks(approvedIds, requestedNetworks = []) {
    const approvedIndexMap = {};
    if (requestedNetworks && approvedIds) {
      approvedIds.forEach((id, index) => {
        approvedIndexMap[id] = index;
      });
      requestedNetworks.sort((a, b) => {
        const indexA = approvedIndexMap[a.id];
        const indexB = approvedIndexMap[b.id];
        if (indexA !== void 0 && indexB !== void 0) {
          return indexA - indexB;
        } else if (indexA !== void 0) {
          return -1;
        } else if (indexB !== void 0) {
          return 1;
        }
        return 0;
      });
    }
    return requestedNetworks;
  },
  calculateBalance(array) {
    let sum = 0;
    for (const item of array) {
      sum += item.value ?? 0;
    }
    return sum;
  },
  formatTokenBalance(number) {
    const roundedNumber = number.toFixed(2);
    const [dollars, pennies] = roundedNumber.split(".");
    return { dollars, pennies };
  },
  isAddress(address, chain = "eip155") {
    switch (chain) {
      case "eip155":
        if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
          return false;
        } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
          return true;
        }
        return false;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
      default:
        return false;
    }
  },
  uniqueBy(arr, key) {
    const set = /* @__PURE__ */ new Set();
    return arr.filter((item) => {
      const keyValue = item[key];
      if (set.has(keyValue)) {
        return false;
      }
      set.add(keyValue);
      return true;
    });
  },
  generateSdkVersion(adapters, platform, version) {
    const hasNoAdapters = adapters.length === 0;
    const adapterNames = hasNoAdapters ? ConstantsUtil2.ADAPTER_TYPES.UNIVERSAL : adapters.map((adapter) => adapter.adapterType).join(",");
    return `${platform}-${adapterNames}-${version}`;
  },
  // eslint-disable-next-line max-params
  createAccount(namespace, address, type, publicKey, path) {
    return {
      namespace,
      address,
      type,
      publicKey,
      path
    };
  },
  isCaipAddress(address) {
    if (typeof address !== "string") {
      return false;
    }
    const sections = address.split(":");
    const namespace = sections[0];
    return sections.filter(Boolean).length === 3 && namespace in ConstantsUtil.CHAIN_NAME_MAP;
  },
  isMac() {
    const ua = window?.navigator.userAgent.toLowerCase();
    return ua.includes("macintosh") && !ua.includes("safari");
  },
  formatTelegramSocialLoginUrl(url) {
    const valueToInject = `--${encodeURIComponent(window?.location.href)}`;
    const paramToInject = "state=";
    const parsedUrl = new URL(url);
    if (parsedUrl.host === "auth.magic.link") {
      const providerParam = "provider_authorization_url=";
      const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
      const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
      return url.replace(providerUrl, encodeURIComponent(resultUrl));
    }
    return this.injectIntoUrl(url, paramToInject, valueToInject);
  },
  injectIntoUrl(url, key, appendString) {
    const keyIndex = url.indexOf(key);
    if (keyIndex === -1) {
      throw new Error(`${key} parameter not found in the URL: ${url}`);
    }
    const keyEndIndex = url.indexOf("&", keyIndex);
    const keyLength = key.length;
    const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
    const beforeKeyValue = url.substring(0, keyIndex + keyLength);
    const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
    const afterKeyValue = url.substring(keyEndIndex);
    const newKeyValue = currentKeyValue + appendString;
    const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
    return newUrl;
  }
};

// node_modules/proxy-compare/dist/index.modern.js
var e = Symbol();
var t = Symbol();
var s = Object.getPrototypeOf;
var c = /* @__PURE__ */ new WeakMap();
var l = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype);
var y = (e2) => l(e2) && e2[t] || null;
var h = (e2, t2 = true) => {
  c.set(e2, t2);
};

// node_modules/valtio/esm/vanilla.mjs
var isObject = (x) => typeof x === "object" && x !== null;
var proxyStateMap = /* @__PURE__ */ new WeakMap();
var refSet = /* @__PURE__ */ new WeakSet();
var buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      h(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = y(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e2) => {
          value.status = "rejected";
          value.reason = e2;
          notifyUpdate(["reject", [prop], e2]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
var [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}

// node_modules/valtio/esm/vanilla/utils.mjs
function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return subscribe(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    },
    notifyInSync
  );
}
var DEVTOOLS = Symbol();
function proxyMap(entries2) {
  const map = proxy({
    data: Array.from(entries2 || []),
    has(key) {
      return this.data.some((p) => p[0] === key);
    },
    set(key, value) {
      const record = this.data.find((p) => p[0] === key);
      if (record) {
        record[1] = value;
      } else {
        this.data.push([key, value]);
      }
      return this;
    },
    get(key) {
      var _a;
      return (_a = this.data.find((p) => p[0] === key)) == null ? void 0 : _a[1];
    },
    delete(key) {
      const index = this.data.findIndex((p) => p[0] === key);
      if (index === -1) {
        return false;
      }
      this.data.splice(index, 1);
      return true;
    },
    clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    toJSON() {
      return new Map(this.data);
    },
    forEach(cb) {
      this.data.forEach((p) => {
        cb(p[1], p[0], this);
      });
    },
    keys() {
      return this.data.map((p) => p[0]).values();
    },
    values() {
      return this.data.map((p) => p[1]).values();
    },
    entries() {
      return new Map(this.data).entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    [Symbol.iterator]() {
      return this.entries();
    }
  });
  Object.defineProperties(map, {
    data: {
      enumerable: false
    },
    size: {
      enumerable: false
    },
    toJSON: {
      enumerable: false
    }
  });
  Object.seal(map);
  return map;
}

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js
var OptionsUtil = {
  getFeatureValue(key, features) {
    const optionValue = features?.[key];
    if (optionValue === void 0) {
      return ConstantsUtil2.DEFAULT_FEATURES[key];
    }
    return optionValue;
  },
  filterSocialsByPlatform(socials) {
    if (!socials || !socials.length) {
      return socials;
    }
    if (CoreHelperUtil.isTelegram()) {
      if (CoreHelperUtil.isIos()) {
        return socials.filter((s2) => s2 !== "google");
      }
      if (CoreHelperUtil.isMac()) {
        return socials.filter((s2) => s2 !== "x");
      }
      if (CoreHelperUtil.isAndroid()) {
        return socials.filter((s2) => !["facebook", "x"].includes(s2));
      }
    }
    return socials;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var state = proxy({
  features: ConstantsUtil2.DEFAULT_FEATURES,
  projectId: "",
  sdkType: "appkit",
  sdkVersion: "html-wagmi-undefined",
  defaultAccountTypes: ConstantsUtil2.DEFAULT_ACCOUNT_TYPES,
  enableNetworkSwitch: true,
  experimental_preferUniversalLinks: false,
  remoteFeatures: {}
});
var OptionsController = {
  state,
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  setOptions(options) {
    Object.assign(state, options);
  },
  setRemoteFeatures(remoteFeatures) {
    if (!remoteFeatures) {
      return;
    }
    const newRemoteFeatures = { ...state.remoteFeatures, ...remoteFeatures };
    state.remoteFeatures = newRemoteFeatures;
    if (state.remoteFeatures?.socials) {
      state.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(state.remoteFeatures.socials);
    }
  },
  setFeatures(features) {
    if (!features) {
      return;
    }
    if (!state.features) {
      state.features = ConstantsUtil2.DEFAULT_FEATURES;
    }
    const newFeatures = { ...state.features, ...features };
    state.features = newFeatures;
  },
  setProjectId(projectId) {
    state.projectId = projectId;
  },
  setCustomRpcUrls(customRpcUrls) {
    state.customRpcUrls = customRpcUrls;
  },
  setAllWallets(allWallets) {
    state.allWallets = allWallets;
  },
  setIncludeWalletIds(includeWalletIds) {
    state.includeWalletIds = includeWalletIds;
  },
  setExcludeWalletIds(excludeWalletIds) {
    state.excludeWalletIds = excludeWalletIds;
  },
  setFeaturedWalletIds(featuredWalletIds) {
    state.featuredWalletIds = featuredWalletIds;
  },
  setTokens(tokens) {
    state.tokens = tokens;
  },
  setTermsConditionsUrl(termsConditionsUrl) {
    state.termsConditionsUrl = termsConditionsUrl;
  },
  setPrivacyPolicyUrl(privacyPolicyUrl) {
    state.privacyPolicyUrl = privacyPolicyUrl;
  },
  setCustomWallets(customWallets) {
    state.customWallets = customWallets;
  },
  setIsSiweEnabled(isSiweEnabled) {
    state.isSiweEnabled = isSiweEnabled;
  },
  setIsUniversalProvider(isUniversalProvider) {
    state.isUniversalProvider = isUniversalProvider;
  },
  setSdkVersion(sdkVersion) {
    state.sdkVersion = sdkVersion;
  },
  setMetadata(metadata) {
    state.metadata = metadata;
  },
  setDisableAppend(disableAppend) {
    state.disableAppend = disableAppend;
  },
  setEIP6963Enabled(enableEIP6963) {
    state.enableEIP6963 = enableEIP6963;
  },
  setDebug(debug) {
    state.debug = debug;
  },
  setEnableWalletConnect(enableWalletConnect) {
    state.enableWalletConnect = enableWalletConnect;
  },
  setEnableWalletGuide(enableWalletGuide) {
    state.enableWalletGuide = enableWalletGuide;
  },
  setEnableAuthLogger(enableAuthLogger) {
    state.enableAuthLogger = enableAuthLogger;
  },
  setEnableWallets(enableWallets) {
    state.enableWallets = enableWallets;
  },
  setPreferUniversalLinks(preferUniversalLinks) {
    state.experimental_preferUniversalLinks = preferUniversalLinks;
  },
  setHasMultipleAddresses(hasMultipleAddresses) {
    state.hasMultipleAddresses = hasMultipleAddresses;
  },
  setSIWX(siwx) {
    state.siwx = siwx;
  },
  setConnectMethodsOrder(connectMethodsOrder) {
    state.features = {
      ...state.features,
      connectMethodsOrder
    };
  },
  setWalletFeaturesOrder(walletFeaturesOrder) {
    state.features = {
      ...state.features,
      walletFeaturesOrder
    };
  },
  setSocialsOrder(socialsOrder) {
    state.remoteFeatures = {
      ...state.remoteFeatures,
      socials: socialsOrder
    };
  },
  setCollapseWallets(collapseWallets) {
    state.features = {
      ...state.features,
      collapseWallets
    };
  },
  setEnableEmbedded(enableEmbedded) {
    state.enableEmbedded = enableEmbedded;
  },
  setAllowUnsupportedChain(allowUnsupportedChain) {
    state.allowUnsupportedChain = allowUnsupportedChain;
  },
  setManualWCControl(manualWCControl) {
    state.manualWCControl = manualWCControl;
  },
  setEnableNetworkSwitch(enableNetworkSwitch) {
    state.enableNetworkSwitch = enableNetworkSwitch;
  },
  setDefaultAccountTypes(defaultAccountType = {}) {
    Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
      if (accountType) {
        state.defaultAccountTypes[namespace] = accountType;
      }
    });
  },
  setUniversalProviderConfigOverride(universalProviderConfigOverride) {
    state.universalProviderConfigOverride = universalProviderConfigOverride;
  },
  getUniversalProviderConfigOverride() {
    return state.universalProviderConfigOverride;
  },
  getSnapshot() {
    return snapshot(state);
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js
async function fetchData(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`, {
      cause: response
    });
    throw err;
  }
  return response;
}
var FetchUtil = class {
  constructor({ baseUrl: baseUrl4, clientId }) {
    this.baseUrl = baseUrl4;
    this.clientId = clientId;
  }
  async get({ headers, signal, cache, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal, cache });
    return response.json();
  }
  async getBlob({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal });
    return response.blob();
  }
  async post({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async put({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "PUT",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async delete({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "DELETE",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  createUrl({ path, params }) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value);
        }
      });
    }
    if (this.clientId) {
      url.searchParams.append("clientId", this.clientId);
    }
    return url;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TelemetryController.js
var DEFAULT_STATE = Object.freeze({
  enabled: true,
  events: []
});
var api = new FetchUtil({ baseUrl: CoreHelperUtil.getAnalyticsUrl(), clientId: null });
var MAX_ERRORS_PER_MINUTE = 5;
var ONE_MINUTE_MS = 60 * 1e3;
var state2 = proxy({
  ...DEFAULT_STATE
});
var TelemetryController = {
  state: state2,
  subscribeKey(key, callback) {
    return subscribeKey(state2, key, callback);
  },
  async sendError(error, category) {
    if (!state2.enabled) {
      return;
    }
    const now = Date.now();
    const recentErrors = state2.events.filter((event) => {
      const eventTime = new Date(event.properties.timestamp || "").getTime();
      return now - eventTime < ONE_MINUTE_MS;
    });
    if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
      return;
    }
    const errorEvent = {
      type: "error",
      event: category,
      properties: {
        errorType: error.name,
        errorMessage: error.message,
        stackTrace: error.stack,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    state2.events.push(errorEvent);
    try {
      if (typeof window === "undefined") {
        return;
      }
      const { projectId, sdkType, sdkVersion } = OptionsController.state;
      await api.post({
        path: "/e",
        params: {
          projectId,
          st: sdkType,
          sv: sdkVersion || "html-wagmi-4.2.2"
        },
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          props: {
            type: "error",
            event: category,
            errorType: error.name,
            errorMessage: error.message,
            stackTrace: error.stack
          }
        }
      });
    } catch {
    }
  },
  enable() {
    state2.enabled = true;
  },
  disable() {
    state2.enabled = false;
  },
  clearEvents() {
    state2.events = [];
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js
var AppKitError = class _AppKitError extends Error {
  constructor(message, category, originalError) {
    super(message);
    this.name = "AppKitError";
    this.category = category;
    this.originalError = originalError;
    Object.setPrototypeOf(this, _AppKitError.prototype);
    let isStackConstructedFromOriginal = false;
    if (originalError instanceof Error && typeof originalError.stack === "string" && originalError.stack) {
      const originalErrorStack = originalError.stack;
      const firstNewlineIndex = originalErrorStack.indexOf("\n");
      if (firstNewlineIndex > -1) {
        const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
        this.stack = `${this.name}: ${this.message}
${originalFrames}`;
        isStackConstructedFromOriginal = true;
      }
    }
    if (!isStackConstructedFromOriginal) {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, _AppKitError);
      } else if (!this.stack) {
        this.stack = `${this.name}: ${this.message}`;
      }
    }
  }
};
function errorHandler(err, defaultCategory) {
  const error = err instanceof AppKitError ? err : new AppKitError(err instanceof Error ? err.message : String(err), defaultCategory, err);
  TelemetryController.sendError(error, error.category);
  throw error;
}
function withErrorBoundary(controller16, defaultCategory = "INTERNAL_SDK_ERROR") {
  const newController = {};
  Object.keys(controller16).forEach((key) => {
    const original = controller16[key];
    if (typeof original === "function") {
      let wrapped = original;
      if (original.constructor.name === "AsyncFunction") {
        wrapped = async (...args) => {
          try {
            return await original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      } else {
        wrapped = (...args) => {
          try {
            return original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      }
      newController[key] = wrapped;
    } else {
      newController[key] = original;
    }
  });
  return newController;
}

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var state3 = proxy({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
});
var controller = {
  state: state3,
  subscribeNetworkImages(callback) {
    return subscribe(state3.networkImages, () => callback(state3.networkImages));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state3, key, callback);
  },
  subscribe(callback) {
    return subscribe(state3, () => callback(state3));
  },
  setWalletImage(key, value) {
    state3.walletImages[key] = value;
  },
  setNetworkImage(key, value) {
    state3.networkImages[key] = value;
  },
  setChainImage(key, value) {
    state3.chainImages[key] = value;
  },
  setConnectorImage(key, value) {
    state3.connectorImages = { ...state3.connectorImages, [key]: value };
  },
  setTokenImage(key, value) {
    state3.tokenImages[key] = value;
  },
  setCurrencyImage(key, value) {
    state3.currencyImages[key] = value;
  }
};
var AssetController = withErrorBoundary(controller);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var namespaceImageIds = {
  // Ethereum
  eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
  // Solana
  solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
  // Polkadot
  polkadot: "",
  // Bitcoin
  bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  // Cosmos
  cosmos: ""
};
var state4 = proxy({
  networkImagePromises: {}
});
var AssetUtil = {
  async fetchWalletImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    await ApiController._fetchWalletImage(imageId);
    return this.getWalletImageById(imageId);
  },
  async fetchNetworkImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    const existingImage = this.getNetworkImageById(imageId);
    if (existingImage) {
      return existingImage;
    }
    if (!state4.networkImagePromises[imageId]) {
      state4.networkImagePromises[imageId] = ApiController._fetchNetworkImage(imageId);
    }
    await state4.networkImagePromises[imageId];
    return this.getNetworkImageById(imageId);
  },
  getWalletImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.walletImages[imageId];
  },
  getWalletImage(wallet) {
    if (wallet?.image_url) {
      return wallet?.image_url;
    }
    if (wallet?.image_id) {
      return AssetController.state.walletImages[wallet.image_id];
    }
    return void 0;
  },
  getNetworkImage(network) {
    if (network?.assets?.imageUrl) {
      return network?.assets?.imageUrl;
    }
    if (network?.assets?.imageId) {
      return AssetController.state.networkImages[network.assets.imageId];
    }
    return void 0;
  },
  getNetworkImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.networkImages[imageId];
  },
  getConnectorImage(connector) {
    if (connector?.imageUrl) {
      return connector.imageUrl;
    }
    if (connector?.imageId) {
      return AssetController.state.connectorImages[connector.imageId];
    }
    return void 0;
  },
  getChainImage(chain) {
    return AssetController.state.networkImages[namespaceImageIds[chain]];
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js
var CUSTOM_DEEPLINK_WALLETS = {
  PHANTOM: {
    id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    url: "https://phantom.app"
  },
  SOLFLARE: {
    id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    url: "https://solflare.com"
  },
  COINBASE: {
    id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    url: "https://go.cb-w.com"
  }
};
var MobileWalletUtil = {
  /**
   * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
   *
   * @param {string} id - The id of the wallet.
   * @param {ChainNamespace} namespace - The namespace of the chain.
   */
  handleMobileDeeplinkRedirect(id, namespace) {
    const href = window.location.href;
    const encodedHref = encodeURIComponent(href);
    if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !("phantom" in window)) {
      const protocol = href.startsWith("https") ? "https" : "http";
      const host = href.split("/")[2];
      const encodedRef = encodeURIComponent(`${protocol}://${host}`);
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
    }
    if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !("solflare" in window)) {
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
    }
    if (namespace === ConstantsUtil.CHAIN.SOLANA) {
      if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !("coinbaseSolana" in window)) {
        window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
      }
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var DEFAULT_STATE2 = Object.freeze({
  message: "",
  variant: "success",
  svg: void 0,
  open: false,
  autoClose: true
});
var state5 = proxy({
  ...DEFAULT_STATE2
});
var controller2 = {
  state: state5,
  subscribeKey(key, callback) {
    return subscribeKey(state5, key, callback);
  },
  showLoading(message, options = {}) {
    this._showMessage({ message, variant: "loading", ...options });
  },
  showSuccess(message) {
    this._showMessage({ message, variant: "success" });
  },
  showSvg(message, svg) {
    this._showMessage({ message, svg });
  },
  showError(message) {
    const errorMessage = CoreHelperUtil.parseError(message);
    this._showMessage({ message: errorMessage, variant: "error" });
  },
  hide() {
    state5.message = DEFAULT_STATE2.message;
    state5.variant = DEFAULT_STATE2.variant;
    state5.svg = DEFAULT_STATE2.svg;
    state5.open = DEFAULT_STATE2.open;
    state5.autoClose = DEFAULT_STATE2.autoClose;
  },
  _showMessage({ message, svg, variant = "success", autoClose = DEFAULT_STATE2.autoClose }) {
    if (state5.open) {
      state5.open = false;
      setTimeout(() => {
        state5.message = message;
        state5.variant = variant;
        state5.svg = svg;
        state5.open = true;
        state5.autoClose = autoClose;
      }, 150);
    } else {
      state5.message = message;
      state5.variant = variant;
      state5.svg = svg;
      state5.open = true;
      state5.autoClose = autoClose;
    }
  }
};
var SnackController = controller2;

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js
var DEFAULT_OPTIONS = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
};
var baseUrl = CoreHelperUtil.getBlockchainApiUrl();
var state6 = proxy({
  clientId: null,
  api: new FetchUtil({ baseUrl, clientId: null }),
  supportedChains: { http: [], ws: [] }
});
var BlockchainApiController = {
  state: state6,
  async get(request) {
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const projectId = OptionsController.state.projectId;
    const params = {
      ...request.params || {},
      st: st2,
      sv,
      projectId
    };
    return state6.api.get({
      ...request,
      params
    });
  },
  getSdkProperties() {
    const { sdkType, sdkVersion } = OptionsController.state;
    return {
      st: sdkType || "unknown",
      sv: sdkVersion || "unknown"
    };
  },
  async isNetworkSupported(networkId) {
    if (!networkId) {
      return false;
    }
    try {
      if (!state6.supportedChains.http.length) {
        await BlockchainApiController.getSupportedNetworks();
      }
    } catch (e2) {
      return false;
    }
    return state6.supportedChains.http.includes(networkId);
  },
  async getSupportedNetworks() {
    try {
      const supportedChains = await BlockchainApiController.get({
        path: "v1/supported-chains"
      });
      state6.supportedChains = supportedChains;
      return supportedChains;
    } catch {
      return state6.supportedChains;
    }
  },
  async fetchIdentity({ address, caipNetworkId }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(caipNetworkId);
    if (!isSupported) {
      return { avatar: "", name: "" };
    }
    const identityCache = StorageUtil.getIdentityFromCacheForAddress(address);
    if (identityCache) {
      return identityCache;
    }
    const result = await BlockchainApiController.get({
      path: `/v1/identity/${address}`,
      params: {
        sender: ChainController.state.activeCaipAddress ? CoreHelperUtil.getPlainAddress(ChainController.state.activeCaipAddress) : void 0
      }
    });
    StorageUtil.updateIdentityCache({
      address,
      identity: result,
      timestamp: Date.now()
    });
    return result;
  },
  async fetchTransactions({ account, cursor, onramp, signal, cache, chainId }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { data: [], next: void 0 };
    }
    return BlockchainApiController.get({
      path: `/v1/account/${account}/history`,
      params: {
        cursor,
        onramp,
        chainId
      },
      signal,
      cache
    });
  },
  async fetchSwapQuote({ amount, userAddress, from, to, gasPrice }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { quotes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/quotes`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        amount,
        userAddress,
        from,
        to,
        gasPrice
      }
    });
  },
  async fetchSwapTokens({ chainId }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { tokens: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/tokens`,
      params: { chainId }
    });
  },
  async fetchTokenPrice({ addresses }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { fungibles: [] };
    }
    return state6.api.post({
      path: "/v1/fungible/price",
      body: {
        currency: "usd",
        addresses,
        projectId: OptionsController.state.projectId
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async fetchSwapAllowance({ tokenAddress, userAddress }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { allowance: "0" };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/allowance`,
      params: {
        tokenAddress,
        userAddress
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async fetchGasPrice({ chainId }) {
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Gas Price");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/gas-price`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        chainId,
        st: st2,
        sv
      }
    });
  },
  async generateSwapCalldata({ amount, from, to, userAddress, disableEstimate }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return state6.api.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount,
        eip155: {
          slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE
        },
        projectId: OptionsController.state.projectId,
        from,
        to,
        userAddress,
        disableEstimate
      }
    });
  },
  async generateApproveCalldata({ from, to, userAddress }) {
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/build-approve`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        userAddress,
        from,
        to,
        st: st2,
        sv
      }
    });
  },
  async getBalance(address, chainId, forceUpdate) {
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      SnackController.showError("Token Balance Unavailable");
      return { balances: [] };
    }
    const caipAddress = `${chainId}:${address}`;
    const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
    if (cachedBalance) {
      return cachedBalance;
    }
    const balance = await BlockchainApiController.get({
      path: `/v1/account/${address}/balance`,
      params: {
        currency: "usd",
        chainId,
        forceUpdate,
        st: st2,
        sv
      }
    });
    StorageUtil.updateBalanceCache({
      caipAddress,
      balance,
      timestamp: Date.now()
    });
    return balance;
  },
  async lookupEnsName(name) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { addresses: {}, attributes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/account/${name}`,
      params: { apiVersion: "2" }
    });
  },
  async reverseLookupEnsName({ address }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    return BlockchainApiController.get({
      path: `/v1/profile/reverse/${address}`,
      params: {
        sender: AccountController.state.address,
        apiVersion: "2"
      }
    });
  },
  async getEnsNameSuggestions(name) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { suggestions: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/suggestions/${name}`,
      params: { zone: "reown.id" }
    });
  },
  async registerEnsName({ coinType, address, message, signature }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { success: false };
    }
    return state6.api.post({
      path: `/v1/profile/account`,
      body: { coin_type: coinType, address, message, signature },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return "";
    }
    const response = await state6.api.post({
      path: `/v1/generators/onrampurl`,
      params: {
        projectId: OptionsController.state.projectId
      },
      body: {
        destinationWallets,
        defaultNetwork,
        partnerUserId,
        defaultExperience: "buy",
        presetCryptoAmount: purchaseAmount,
        presetFiatAmount: paymentAmount
      }
    });
    return response.url;
  },
  async getOnrampOptions() {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { paymentCurrencies: [], purchaseCurrencies: [] };
    }
    try {
      const response = await BlockchainApiController.get({
        path: `/v1/onramp/options`
      });
      return response;
    } catch (e2) {
      return DEFAULT_OPTIONS;
    }
  },
  async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
    try {
      const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
      if (!isSupported) {
        return null;
      }
      const response = await state6.api.post({
        path: `/v1/onramp/quote`,
        params: {
          projectId: OptionsController.state.projectId
        },
        body: {
          purchaseCurrency,
          paymentCurrency,
          amount,
          network
        }
      });
      return response;
    } catch (e2) {
      return {
        coinbaseFee: { amount, currency: paymentCurrency.id },
        networkFee: { amount, currency: paymentCurrency.id },
        paymentSubtotal: { amount, currency: paymentCurrency.id },
        paymentTotal: { amount, currency: paymentCurrency.id },
        purchaseAmount: { amount, currency: paymentCurrency.id },
        quoteId: "mocked-quote-id"
      };
    }
  },
  async getSmartSessions(caipAddress) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    return BlockchainApiController.get({
      path: `/v1/sessions/${caipAddress}`
    });
  },
  async revokeSmartSession(address, pci, signature) {
    const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
    if (!isSupported) {
      return { success: false };
    }
    return state6.api.post({
      path: `/v1/sessions/${address}/revoke`,
      params: {
        projectId: OptionsController.state.projectId
      },
      body: {
        pci,
        signature
      }
    });
  },
  setClientId(clientId) {
    state6.clientId = clientId;
    state6.api = new FetchUtil({ baseUrl, clientId });
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js
var state7 = proxy({
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false,
  addressLabels: /* @__PURE__ */ new Map(),
  allAccounts: []
});
var controller3 = {
  state: state7,
  replaceState(newState) {
    if (!newState) {
      return;
    }
    Object.assign(state7, ref(newState));
  },
  subscribe(callback) {
    return ChainController.subscribeChainProp("accountState", (accountState2) => {
      if (accountState2) {
        return callback(accountState2);
      }
      return void 0;
    });
  },
  subscribeKey(property, callback, chain) {
    let prev = void 0;
    return ChainController.subscribeChainProp("accountState", (accountState2) => {
      if (accountState2) {
        const nextValue = accountState2[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    }, chain);
  },
  setStatus(status, chain) {
    ChainController.setAccountProp("status", status, chain);
  },
  getCaipAddress(chain) {
    return ChainController.getAccountProp("caipAddress", chain);
  },
  setCaipAddress(caipAddress, chain) {
    const newAddress = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    if (chain === ChainController.state.activeChain) {
      ChainController.state.activeCaipAddress = caipAddress;
    }
    ChainController.setAccountProp("caipAddress", caipAddress, chain);
    ChainController.setAccountProp("address", newAddress, chain);
  },
  setBalance(balance, balanceSymbol, chain) {
    ChainController.setAccountProp("balance", balance, chain);
    ChainController.setAccountProp("balanceSymbol", balanceSymbol, chain);
  },
  setProfileName(profileName, chain) {
    ChainController.setAccountProp("profileName", profileName, chain);
  },
  setProfileImage(profileImage, chain) {
    ChainController.setAccountProp("profileImage", profileImage, chain);
  },
  setUser(user, chain) {
    ChainController.setAccountProp("user", user, chain);
  },
  setAddressExplorerUrl(explorerUrl, chain) {
    ChainController.setAccountProp("addressExplorerUrl", explorerUrl, chain);
  },
  setSmartAccountDeployed(isDeployed, chain) {
    ChainController.setAccountProp("smartAccountDeployed", isDeployed, chain);
  },
  setCurrentTab(currentTab) {
    ChainController.setAccountProp("currentTab", currentTab, ChainController.state.activeChain);
  },
  setTokenBalance(tokenBalance, chain) {
    if (tokenBalance) {
      ChainController.setAccountProp("tokenBalance", tokenBalance, chain);
    }
  },
  setShouldUpdateToAddress(address, chain) {
    ChainController.setAccountProp("shouldUpdateToAddress", address, chain);
  },
  setAllAccounts(accounts, namespace) {
    ChainController.setAccountProp("allAccounts", accounts, namespace);
  },
  addAddressLabel(address, label, chain) {
    const map = ChainController.getAccountProp("addressLabels", chain) || /* @__PURE__ */ new Map();
    map.set(address, label);
    ChainController.setAccountProp("addressLabels", map, chain);
  },
  removeAddressLabel(address, chain) {
    const map = ChainController.getAccountProp("addressLabels", chain) || /* @__PURE__ */ new Map();
    map.delete(address);
    ChainController.setAccountProp("addressLabels", map, chain);
  },
  setConnectedWalletInfo(connectedWalletInfo, chain) {
    ChainController.setAccountProp("connectedWalletInfo", connectedWalletInfo, chain, false);
  },
  setPreferredAccountType(preferredAccountType, chain) {
    ChainController.setAccountProp("preferredAccountTypes", {
      ...state7.preferredAccountTypes,
      [chain]: preferredAccountType
    }, chain);
  },
  setPreferredAccountTypes(preferredAccountTypes) {
    state7.preferredAccountTypes = preferredAccountTypes;
  },
  setSocialProvider(socialProvider, chain) {
    if (socialProvider) {
      ChainController.setAccountProp("socialProvider", socialProvider, chain);
    }
  },
  setSocialWindow(socialWindow, chain) {
    ChainController.setAccountProp("socialWindow", socialWindow ? ref(socialWindow) : void 0, chain);
  },
  setFarcasterUrl(farcasterUrl, chain) {
    ChainController.setAccountProp("farcasterUrl", farcasterUrl, chain);
  },
  async fetchTokenBalance(onError) {
    state7.balanceLoading = true;
    const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
    const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
    const caipAddress = ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    if (state7.lastRetry && !CoreHelperUtil.isAllowedRetry(state7.lastRetry, 30 * ConstantsUtil2.ONE_SEC_MS)) {
      state7.balanceLoading = false;
      return [];
    }
    try {
      if (address && chainId && chain) {
        const response = await BlockchainApiController.getBalance(address, chainId);
        const filteredBalances = response.balances.filter((balance) => balance.quantity.decimals !== "0");
        AccountController.setTokenBalance(filteredBalances, chain);
        state7.lastRetry = void 0;
        state7.balanceLoading = false;
        return filteredBalances;
      }
    } catch (error) {
      state7.lastRetry = Date.now();
      onError?.(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
      state7.balanceLoading = false;
    }
    return [];
  },
  resetAccount(chain) {
    ChainController.resetAccount(chain);
  }
};
var AccountController = withErrorBoundary(controller3);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js
var NetworkUtil2 = {
  /**
   * Function to handle the network switch.
   * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
   * @param args.network - The network to switch to.
   * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
   * @returns void
   */
  onSwitchNetwork({ network, ignoreSwitchConfirmation = false }) {
    const currentNetwork = ChainController.state.activeCaipNetwork;
    const routerData = RouterController.state.data;
    const isSameNetwork = network.id === currentNetwork?.id;
    if (isSameNetwork) {
      return;
    }
    const isCurrentNamespaceConnected = AccountController.getCaipAddress(ChainController.state.activeChain);
    const isDifferentNamespace = network.chainNamespace !== ChainController.state.activeChain;
    const isNextNamespaceConnected = AccountController.getCaipAddress(network.chainNamespace);
    const connectorId = ConnectorController.getConnectorId(ChainController.state.activeChain);
    const isConnectedWithAuth = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
    const isSupportedForAuthConnector = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c2) => c2 === network.chainNamespace);
    if (ignoreSwitchConfirmation || isConnectedWithAuth && isSupportedForAuthConnector) {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    } else if (
      /**
       * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
       */
      isCurrentNamespaceConnected && isDifferentNamespace && !isNextNamespaceConnected
    ) {
      RouterController.push("SwitchActiveChain", {
        switchToChain: network.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network
      });
    } else {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var state8 = proxy({
  message: "",
  variant: "info",
  open: false
});
var controller4 = {
  state: state8,
  subscribeKey(key, callback) {
    return subscribeKey(state8, key, callback);
  },
  open(message, variant) {
    const { debug } = OptionsController.state;
    const { shortMessage, longMessage } = message;
    if (debug) {
      state8.message = shortMessage;
      state8.variant = variant;
      state8.open = true;
    }
    if (longMessage) {
      console.error(typeof longMessage === "function" ? longMessage() : longMessage);
    }
  },
  close() {
    state8.open = false;
    state8.message = "";
    state8.variant = "info";
  }
};
var AlertController = withErrorBoundary(controller4);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var baseUrl2 = CoreHelperUtil.getAnalyticsUrl();
var api2 = new FetchUtil({ baseUrl: baseUrl2, clientId: null });
var excluded = ["MODAL_CREATED"];
var state9 = proxy({
  timestamp: Date.now(),
  reportedErrors: {},
  data: {
    type: "track",
    event: "MODAL_CREATED"
  }
});
var EventsController = {
  state: state9,
  subscribe(callback) {
    return subscribe(state9, () => callback(state9));
  },
  getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      projectId,
      st: sdkType,
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  async _sendAnalyticsEvent(payload) {
    try {
      const address = AccountController.state.address;
      if (excluded.includes(payload.data.event) || typeof window === "undefined") {
        return;
      }
      await api2.post({
        path: "/e",
        params: EventsController.getSdkProperties(),
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: payload.timestamp,
          props: { ...payload.data, address }
        }
      });
      state9.reportedErrors["FORBIDDEN"] = false;
    } catch (err) {
      const isForbiddenError = err instanceof Error && err.cause instanceof Response && err.cause.status === ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN && !state9.reportedErrors["FORBIDDEN"];
      if (isForbiddenError) {
        AlertController.open({
          shortMessage: "Invalid App Configuration",
          longMessage: `Origin ${isSafe() ? window.origin : "uknown"} not found on Allowlist - update configuration on cloud.reown.com`
        }, "error");
        state9.reportedErrors["FORBIDDEN"] = true;
      }
    }
  },
  sendEvent(data) {
    state9.timestamp = Date.now();
    state9.data = data;
    if (OptionsController.state.features?.analytics) {
      EventsController._sendAnalyticsEvent(state9);
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js
var state10 = proxy({
  loading: false,
  open: false,
  selectedNetworkId: void 0,
  activeChain: void 0,
  initialized: false
});
var PublicStateController = {
  state: state10,
  subscribe(callback) {
    return subscribe(state10, () => callback(state10));
  },
  subscribeOpen(callback) {
    return subscribeKey(state10, "open", callback);
  },
  set(newState) {
    Object.assign(state10, { ...state10, ...newState });
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var state11 = proxy({
  loading: false,
  loadingNamespaceMap: /* @__PURE__ */ new Map(),
  open: false,
  shake: false,
  namespace: void 0
});
var controller5 = {
  state: state11,
  subscribe(callback) {
    return subscribe(state11, () => callback(state11));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state11, key, callback);
  },
  async open(options) {
    const isConnected = AccountController.state.status === "connected";
    const namespace = options?.namespace;
    const currentNamespace = ChainController.state.activeChain;
    const isSwitchingNamespace = namespace && namespace !== currentNamespace;
    const caipAddress = ChainController.getAccountData(options?.namespace)?.caipAddress;
    if (ConnectionController.state.wcBasic) {
      ApiController.prefetch({ fetchNetworkImages: false, fetchConnectorImages: false });
    } else {
      await ApiController.prefetch({
        fetchConnectorImages: !isConnected,
        fetchFeaturedWallets: !isConnected,
        fetchRecommendedWallets: !isConnected
      });
    }
    ConnectorController.setFilterByNamespace(options?.namespace);
    ModalController.setLoading(true, namespace);
    if (namespace && isSwitchingNamespace) {
      const namespaceNetwork = ChainController.getNetworkData(namespace)?.caipNetwork || ChainController.getRequestedCaipNetworks(namespace)[0];
      if (namespaceNetwork) {
        NetworkUtil2.onSwitchNetwork({ network: namespaceNetwork, ignoreSwitchConfirmation: true });
      }
    } else {
      const hasNoAdapters = ChainController.state.noAdapters;
      if (OptionsController.state.manualWCControl || hasNoAdapters && !caipAddress) {
        if (CoreHelperUtil.isMobile()) {
          RouterController.reset("AllWallets");
        } else {
          RouterController.reset("ConnectingWalletConnectBasic");
        }
      } else if (options?.view) {
        RouterController.reset(options.view, options.data);
      } else if (caipAddress) {
        RouterController.reset("Account");
      } else {
        RouterController.reset("Connect");
      }
    }
    state11.open = true;
    PublicStateController.set({ open: true });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected: Boolean(caipAddress) }
    });
  },
  close() {
    const isEmbeddedEnabled = OptionsController.state.enableEmbedded;
    const isConnected = Boolean(ChainController.state.activeCaipAddress);
    if (state11.open) {
      EventsController.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: { connected: isConnected }
      });
    }
    state11.open = false;
    RouterController.reset("Connect");
    ModalController.clearLoading();
    if (isEmbeddedEnabled) {
      if (isConnected) {
        RouterController.replace("Account");
      } else {
        RouterController.push("Connect");
      }
    } else {
      PublicStateController.set({ open: false });
    }
    ConnectionController.resetUri();
  },
  setLoading(loading, namespace) {
    if (namespace) {
      state11.loadingNamespaceMap.set(namespace, loading);
    }
    state11.loading = loading;
    PublicStateController.set({ loading });
  },
  clearLoading() {
    state11.loadingNamespaceMap.clear();
    state11.loading = false;
  },
  shake() {
    if (state11.shake) {
      return;
    }
    state11.shake = true;
    setTimeout(() => {
      state11.shake = false;
    }, 500);
  }
};
var ModalController = withErrorBoundary(controller5);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var state12 = proxy({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
});
var controller6 = {
  state: state12,
  subscribeKey(key, callback) {
    return subscribeKey(state12, key, callback);
  },
  pushTransactionStack(action) {
    state12.transactionStack.push(action);
  },
  popTransactionStack(status) {
    const action = state12.transactionStack.pop();
    if (!action) {
      return;
    }
    const { onSuccess, onError, onCancel } = action;
    switch (status) {
      case "success":
        onSuccess?.();
        break;
      case "error":
        onError?.();
        RouterController.goBack();
        break;
      case "cancel":
        onCancel?.();
        RouterController.goBack();
        break;
      default:
    }
  },
  push(view, data) {
    if (view !== state12.view) {
      state12.view = view;
      state12.history.push(view);
      state12.data = data;
    }
  },
  reset(view, data) {
    state12.view = view;
    state12.history = [view];
    state12.data = data;
  },
  replace(view, data) {
    const lastView = state12.history.at(-1);
    const isSameView = lastView === view;
    if (!isSameView) {
      state12.view = view;
      state12.history[state12.history.length - 1] = view;
      state12.data = data;
    }
  },
  goBack() {
    const isConnected = ChainController.state.activeCaipAddress;
    const isFarcasterView = RouterController.state.view === "ConnectingFarcaster";
    const shouldReload = !isConnected && isFarcasterView;
    if (state12.history.length > 1) {
      state12.history.pop();
      const [last] = state12.history.slice(-1);
      if (last) {
        const isConnectView = last === "Connect";
        if (isConnected && isConnectView) {
          state12.view = "Account";
        } else {
          state12.view = last;
        }
      }
    } else {
      ModalController.close();
    }
    if (state12.data?.wallet) {
      state12.data.wallet = void 0;
    }
    setTimeout(() => {
      if (shouldReload) {
        AccountController.setFarcasterUrl(void 0, ChainController.state.activeChain);
        const authConnector = ConnectorController.getAuthConnector();
        authConnector?.provider?.reload();
        const optionsState = snapshot(OptionsController.state);
        authConnector?.provider?.syncDappData?.({
          metadata: optionsState.metadata,
          sdkVersion: optionsState.sdkVersion,
          projectId: optionsState.projectId,
          sdkType: optionsState.sdkType
        });
      }
    }, 100);
  },
  goBackToIndex(historyIndex) {
    if (state12.history.length > 1) {
      state12.history = state12.history.slice(0, historyIndex + 1);
      const [last] = state12.history.slice(-1);
      if (last) {
        state12.view = last;
      }
    }
  },
  goBackOrCloseModal() {
    if (RouterController.state.history.length > 1) {
      RouterController.goBack();
    } else {
      ModalController.close();
    }
  }
};
var RouterController = withErrorBoundary(controller6);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var state13 = proxy({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
});
var controller7 = {
  state: state13,
  subscribe(callback) {
    return subscribe(state13, () => callback(state13));
  },
  setThemeMode(themeMode) {
    state13.themeMode = themeMode;
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariables = controller7.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeMode,
          themeVariables,
          w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(themeVariables) {
    state13.themeVariables = { ...state13.themeVariables, ...themeVariables };
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariablesSnapshot = controller7.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeVariables: themeVariablesSnapshot,
          w3mThemeVariables: getW3mThemeVariables(state13.themeVariables, state13.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return snapshot(state13);
  }
};
var ThemeController = withErrorBoundary(controller7);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var defaultActiveConnectors = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0
};
var state14 = proxy({
  allConnectors: [],
  connectors: [],
  activeConnector: void 0,
  filterByNamespace: void 0,
  activeConnectorIds: { ...defaultActiveConnectors },
  filterByNamespaceMap: {
    eip155: true,
    solana: true,
    polkadot: true,
    bip122: true,
    cosmos: true
  }
});
var controller8 = {
  state: state14,
  subscribe(callback) {
    return subscribe(state14, () => {
      callback(state14);
    });
  },
  subscribeKey(key, callback) {
    return subscribeKey(state14, key, callback);
  },
  initialize(namespaces) {
    namespaces.forEach((namespace) => {
      const connectorId = StorageUtil.getConnectedConnectorId(namespace);
      if (connectorId) {
        ConnectorController.setConnectorId(connectorId, namespace);
      }
    });
  },
  setActiveConnector(connector) {
    if (connector) {
      state14.activeConnector = ref(connector);
    }
  },
  setConnectors(connectors) {
    const newConnectors = connectors.filter((newConnector) => !state14.allConnectors.some((existingConnector) => existingConnector.id === newConnector.id && ConnectorController.getConnectorName(existingConnector.name) === ConnectorController.getConnectorName(newConnector.name) && existingConnector.chain === newConnector.chain));
    newConnectors.forEach((connector) => {
      if (connector.type !== "MULTI_CHAIN") {
        state14.allConnectors.push(ref(connector));
      }
    });
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
    state14.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
  },
  filterByNamespaces(enabledNamespaces) {
    Object.keys(state14.filterByNamespaceMap).forEach((namespace) => {
      state14.filterByNamespaceMap[namespace] = false;
    });
    enabledNamespaces.forEach((namespace) => {
      state14.filterByNamespaceMap[namespace] = true;
    });
    ConnectorController.updateConnectorsForEnabledNamespaces();
  },
  filterByNamespace(namespace, enabled) {
    state14.filterByNamespaceMap[namespace] = enabled;
    ConnectorController.updateConnectorsForEnabledNamespaces();
  },
  updateConnectorsForEnabledNamespaces() {
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
    const areAllNamespacesEnabled = ConnectorController.areAllNamespacesEnabled();
    state14.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
    if (areAllNamespacesEnabled) {
      ApiController.clearFilterByNamespaces();
    } else {
      ApiController.filterByNamespaces(enabledNamespaces);
    }
  },
  getEnabledNamespaces() {
    return Object.entries(state14.filterByNamespaceMap).filter(([_, enabled]) => enabled).map(([namespace]) => namespace);
  },
  getEnabledConnectors(enabledNamespaces) {
    return state14.allConnectors.filter((connector) => enabledNamespaces.includes(connector.chain));
  },
  areAllNamespacesEnabled() {
    return Object.values(state14.filterByNamespaceMap).every((enabled) => enabled);
  },
  mergeMultiChainConnectors(connectors) {
    const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
    const mergedConnectors = [];
    connectorsByNameMap.forEach((keyConnectors) => {
      const firstItem = keyConnectors[0];
      const isAuthConnector = firstItem?.id === ConstantsUtil.CONNECTOR_ID.AUTH;
      if (keyConnectors.length > 1 && firstItem) {
        mergedConnectors.push({
          name: firstItem.name,
          imageUrl: firstItem.imageUrl,
          imageId: firstItem.imageId,
          connectors: [...keyConnectors],
          type: isAuthConnector ? "AUTH" : "MULTI_CHAIN",
          // These values are just placeholders, we don't use them in multi-chain connector select screen
          chain: "eip155",
          id: firstItem?.id || ""
        });
      } else if (firstItem) {
        mergedConnectors.push(firstItem);
      }
    });
    return mergedConnectors;
  },
  generateConnectorMapByName(connectors) {
    const connectorsByNameMap = /* @__PURE__ */ new Map();
    connectors.forEach((connector) => {
      const { name } = connector;
      const connectorName = ConnectorController.getConnectorName(name);
      if (!connectorName) {
        return;
      }
      const connectorsByName = connectorsByNameMap.get(connectorName) || [];
      const haveSameConnector = connectorsByName.find((c2) => c2.chain === connector.chain);
      if (!haveSameConnector) {
        connectorsByName.push(connector);
      }
      connectorsByNameMap.set(connectorName, connectorsByName);
    });
    return connectorsByNameMap;
  },
  getConnectorName(name) {
    if (!name) {
      return name;
    }
    const nameOverrideMap = {
      "Trust Wallet": "Trust"
    };
    return nameOverrideMap[name] || name;
  },
  getUniqueConnectorsByName(connectors) {
    const uniqueConnectors = [];
    connectors.forEach((c2) => {
      if (!uniqueConnectors.find((uc) => uc.chain === c2.chain)) {
        uniqueConnectors.push(c2);
      }
    });
    return uniqueConnectors;
  },
  addConnector(connector) {
    if (connector.id === ConstantsUtil.CONNECTOR_ID.AUTH) {
      const authConnector = connector;
      const optionsState = snapshot(OptionsController.state);
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      authConnector?.provider?.syncDappData?.({
        metadata: optionsState.metadata,
        sdkVersion: optionsState.sdkVersion,
        projectId: optionsState.projectId,
        sdkType: optionsState.sdkType
      });
      authConnector?.provider?.syncTheme({
        themeMode,
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
      ConnectorController.setConnectors([connector]);
    } else {
      ConnectorController.setConnectors([connector]);
    }
  },
  getAuthConnector(chainNamespace) {
    const activeNamespace = chainNamespace || ChainController.state.activeChain;
    const authConnector = state14.connectors.find((c2) => c2.id === ConstantsUtil.CONNECTOR_ID.AUTH);
    if (!authConnector) {
      return void 0;
    }
    if (authConnector?.connectors?.length) {
      const connector = authConnector.connectors.find((c2) => c2.chain === activeNamespace);
      return connector;
    }
    return authConnector;
  },
  getAnnouncedConnectorRdns() {
    return state14.connectors.filter((c2) => c2.type === "ANNOUNCED").map((c2) => c2.info?.rdns);
  },
  getConnectorById(id) {
    return state14.allConnectors.find((c2) => c2.id === id);
  },
  getConnector(id, rdns) {
    const connectorsByNamespace = state14.allConnectors.filter((c2) => c2.chain === ChainController.state.activeChain);
    return connectorsByNamespace.find((c2) => c2.explorerId === id || c2.info?.rdns === rdns);
  },
  syncIfAuthConnector(connector) {
    if (connector.id !== "ID_AUTH") {
      return;
    }
    const authConnector = connector;
    const optionsState = snapshot(OptionsController.state);
    const themeMode = ThemeController.getSnapshot().themeMode;
    const themeVariables = ThemeController.getSnapshot().themeVariables;
    authConnector?.provider?.syncDappData?.({
      metadata: optionsState.metadata,
      sdkVersion: optionsState.sdkVersion,
      sdkType: optionsState.sdkType,
      projectId: optionsState.projectId
    });
    authConnector.provider.syncTheme({
      themeMode,
      themeVariables,
      w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
    });
  },
  /**
   * Returns the connectors filtered by namespace.
   * @param namespace - The namespace to filter the connectors by.
   * @returns ConnectorWithProviders[].
   */
  getConnectorsByNamespace(namespace) {
    const namespaceConnectors = state14.allConnectors.filter((connector) => connector.chain === namespace);
    return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
  },
  selectWalletConnector(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    const namespace = ChainController.state.activeChain;
    MobileWalletUtil.handleMobileDeeplinkRedirect(connector?.explorerId || wallet.id, namespace);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  },
  /**
   * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
   * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
   * @returns ConnectorWithProviders[].
   */
  getConnectors(namespace) {
    if (namespace) {
      return ConnectorController.getConnectorsByNamespace(namespace);
    }
    return ConnectorController.mergeMultiChainConnectors(state14.allConnectors);
  },
  /**
   * Sets the filter by namespace and updates the connectors.
   * @param namespace - The namespace to filter the connectors by.
   */
  setFilterByNamespace(namespace) {
    state14.filterByNamespace = namespace;
    state14.connectors = ConnectorController.getConnectors(namespace);
    ApiController.setFilterByNamespace(namespace);
  },
  setConnectorId(connectorId, namespace) {
    if (connectorId) {
      state14.activeConnectorIds = {
        ...state14.activeConnectorIds,
        [namespace]: connectorId
      };
      StorageUtil.setConnectedConnectorId(namespace, connectorId);
    }
  },
  removeConnectorId(namespace) {
    state14.activeConnectorIds = {
      ...state14.activeConnectorIds,
      [namespace]: void 0
    };
    StorageUtil.deleteConnectedConnectorId(namespace);
  },
  getConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    return state14.activeConnectorIds[namespace];
  },
  isConnected(namespace) {
    if (!namespace) {
      return Object.values(state14.activeConnectorIds).some((id) => Boolean(id));
    }
    return Boolean(state14.activeConnectorIds[namespace]);
  },
  resetConnectorIds() {
    state14.activeConnectorIds = { ...defaultActiveConnectors };
  }
};
var ConnectorController = withErrorBoundary(controller8);

// node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var DEFAULT_SDK_URL = "https://secure.walletconnect.org/sdk";
var SECURE_SITE_SDK = (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_SDK_URL"] : void 0) || DEFAULT_SDK_URL;
var DEFAULT_LOG_LEVEL = (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_DEFAULT_LOG_LEVEL"] : void 0) || "error";
var SECURE_SITE_SDK_VERSION = (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_SDK_VERSION"] : void 0) || "4";
var W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "eth_getUserOperationReceipt",
    "eth_estimateUserOperationGas",
    "eth_getUserOperationByHash",
    "eth_supportedEntryPoints",
    "wallet_getAssets"
  ],
  NOT_SAFE_RPC_METHODS: [
    "personal_sign",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "solana_signMessage",
    "solana_signTransaction",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction",
    "wallet_sendCalls",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "eth_sendUserOperation"
  ],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TransactionsController.js
var state15 = proxy({
  transactions: [],
  coinbaseTransactions: {},
  transactionsByYear: {},
  lastNetworkInView: void 0,
  loading: false,
  empty: false,
  next: void 0
});
var controller9 = {
  state: state15,
  subscribe(callback) {
    return subscribe(state15, () => callback(state15));
  },
  setLastNetworkInView(lastNetworkInView) {
    state15.lastNetworkInView = lastNetworkInView;
  },
  async fetchTransactions(accountAddress, onramp) {
    if (!accountAddress) {
      throw new Error("Transactions can't be fetched without an accountAddress");
    }
    state15.loading = true;
    try {
      const response = await BlockchainApiController.fetchTransactions({
        account: accountAddress,
        cursor: state15.next,
        onramp,
        // Coinbase transaction history state updates require the latest data
        cache: onramp === "coinbase" ? "no-cache" : void 0,
        chainId: ChainController.state.activeCaipNetwork?.caipNetworkId
      });
      const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
      const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
      const filteredTransactions = [...state15.transactions, ...sameChainTransactions];
      state15.loading = false;
      if (onramp === "coinbase") {
        state15.coinbaseTransactions = TransactionsController.groupTransactionsByYearAndMonth(state15.coinbaseTransactions, response.data);
      } else {
        state15.transactions = filteredTransactions;
        state15.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state15.transactionsByYear, sameChainTransactions);
      }
      state15.empty = filteredTransactions.length === 0;
      state15.next = response.next ? response.next : void 0;
    } catch (error) {
      const activeChainNamespace = ChainController.state.activeChain;
      EventsController.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: accountAddress,
          projectId: OptionsController.state.projectId,
          cursor: state15.next,
          isSmartAccount: AccountController.state.preferredAccountTypes?.[activeChainNamespace] === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SnackController.showError("Failed to fetch transactions");
      state15.loading = false;
      state15.empty = true;
      state15.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
    const grouped = transactionsMap;
    transactions.forEach((transaction) => {
      const year = new Date(transaction.metadata.minedAt).getFullYear();
      const month = new Date(transaction.metadata.minedAt).getMonth();
      const yearTransactions = grouped[year] ?? {};
      const monthTransactions = yearTransactions[month] ?? [];
      const newMonthTransactions = monthTransactions.filter((tx) => tx.id !== transaction.id);
      grouped[year] = {
        ...yearTransactions,
        [month]: [...newMonthTransactions, transaction].sort((a, b) => new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
      };
    });
    return grouped;
  },
  filterSpamTransactions(transactions) {
    return transactions.filter((transaction) => {
      const isAllSpam = transaction.transfers.every((transfer) => transfer.nft_info?.flags.is_spam === true);
      return !isAllSpam;
    });
  },
  filterByConnectedChain(transactions) {
    const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
    const filteredTransactions = transactions.filter((transaction) => transaction.metadata.chain === chainId);
    return filteredTransactions;
  },
  clearCursor() {
    state15.next = void 0;
  },
  resetTransactions() {
    state15.transactions = [];
    state15.transactionsByYear = {};
    state15.lastNetworkInView = void 0;
    state15.loading = false;
    state15.empty = false;
    state15.next = void 0;
  }
};
var TransactionsController = withErrorBoundary(controller9, "API_ERROR");

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js
var state16 = proxy({
  connections: /* @__PURE__ */ new Map(),
  wcError: false,
  buffering: false,
  status: "disconnected"
});
var wcConnectionPromise;
var controller10 = {
  state: state16,
  subscribeKey(key, callback) {
    return subscribeKey(state16, key, callback);
  },
  _getClient() {
    return state16._client;
  },
  setClient(client) {
    state16._client = ref(client);
  },
  async connectWalletConnect() {
    if (CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari() && CoreHelperUtil.isIos()) {
      if (wcConnectionPromise) {
        await wcConnectionPromise;
        wcConnectionPromise = void 0;
        return;
      }
      if (!CoreHelperUtil.isPairingExpired(state16?.wcPairingExpiry)) {
        const link = state16.wcUri;
        state16.wcUri = link;
        return;
      }
      wcConnectionPromise = ConnectionController._getClient()?.connectWalletConnect?.().catch(() => void 0);
      ConnectionController.state.status = "connecting";
      await wcConnectionPromise;
      wcConnectionPromise = void 0;
      state16.wcPairingExpiry = void 0;
      ConnectionController.state.status = "connected";
    } else {
      await ConnectionController._getClient()?.connectWalletConnect?.();
    }
  },
  async connectExternal(options, chain, setChain = true) {
    await ConnectionController._getClient()?.connectExternal?.(options);
    if (setChain) {
      ChainController.setActiveNamespace(chain);
    }
  },
  async reconnectExternal(options) {
    await ConnectionController._getClient()?.reconnectExternal?.(options);
    const namespace = options.chain || ChainController.state.activeChain;
    if (namespace) {
      ConnectorController.setConnectorId(options.id, namespace);
    }
  },
  async setPreferredAccountType(accountType, namespace) {
    ModalController.setLoading(true, ChainController.state.activeChain);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    AccountController.setPreferredAccountType(accountType, namespace);
    await authConnector.provider.setPreferredAccount(accountType);
    StorageUtil.setPreferredAccountTypes(AccountController.state.preferredAccountTypes ?? { [namespace]: accountType });
    await ConnectionController.reconnectExternal(authConnector);
    ModalController.setLoading(false, ChainController.state.activeChain);
    EventsController.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: {
        accountType,
        network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
      }
    });
  },
  async signMessage(message) {
    return ConnectionController._getClient()?.signMessage(message);
  },
  parseUnits(value, decimals) {
    return ConnectionController._getClient()?.parseUnits(value, decimals);
  },
  formatUnits(value, decimals) {
    return ConnectionController._getClient()?.formatUnits(value, decimals);
  },
  async sendTransaction(args) {
    return ConnectionController._getClient()?.sendTransaction(args);
  },
  async getCapabilities(params) {
    return ConnectionController._getClient()?.getCapabilities(params);
  },
  async grantPermissions(params) {
    return ConnectionController._getClient()?.grantPermissions(params);
  },
  async walletGetAssets(params) {
    return ConnectionController._getClient()?.walletGetAssets(params) ?? {};
  },
  async estimateGas(args) {
    return ConnectionController._getClient()?.estimateGas(args);
  },
  async writeContract(args) {
    return ConnectionController._getClient()?.writeContract(args);
  },
  async getEnsAddress(value) {
    return ConnectionController._getClient()?.getEnsAddress(value);
  },
  async getEnsAvatar(value) {
    return ConnectionController._getClient()?.getEnsAvatar(value);
  },
  checkInstalled(ids) {
    return ConnectionController._getClient()?.checkInstalled?.(ids) || false;
  },
  resetWcConnection() {
    state16.wcUri = void 0;
    state16.wcPairingExpiry = void 0;
    state16.wcLinking = void 0;
    state16.recentWallet = void 0;
    state16.status = "disconnected";
    TransactionsController.resetTransactions();
    StorageUtil.deleteWalletConnectDeepLink();
  },
  resetUri() {
    state16.wcUri = void 0;
    state16.wcPairingExpiry = void 0;
    wcConnectionPromise = void 0;
  },
  finalizeWcConnection() {
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setAppKitRecent(recentWallet);
    }
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: wcLinking ? "mobile" : "qrcode",
        name: RouterController.state.data?.wallet?.name || "Unknown"
      }
    });
  },
  setWcBasic(wcBasic) {
    state16.wcBasic = wcBasic;
  },
  setUri(uri) {
    state16.wcUri = uri;
    state16.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
  },
  setWcLinking(wcLinking) {
    state16.wcLinking = wcLinking;
  },
  setWcError(wcError) {
    state16.wcError = wcError;
    state16.buffering = false;
  },
  setRecentWallet(wallet) {
    state16.recentWallet = wallet;
  },
  setBuffering(buffering) {
    state16.buffering = buffering;
  },
  setStatus(status) {
    state16.status = status;
  },
  async disconnect(namespace) {
    try {
      await ConnectionController._getClient()?.disconnect(namespace);
    } catch (error) {
      throw new AppKitError("Failed to disconnect", "INTERNAL_SDK_ERROR", error);
    }
  },
  setConnections(connections, chainNamespace) {
    state16.connections.set(chainNamespace, connections);
  },
  switchAccount({ connection, address, namespace }) {
    const connectedConnectorId = ConnectorController.state.activeConnectorIds[namespace];
    const isConnectorConnected = connectedConnectorId === connection.connectorId;
    if (isConnectorConnected) {
      const currentNetwork = ChainController.state.activeCaipNetwork;
      if (currentNetwork) {
        const caipAddress = `${namespace}:${currentNetwork.id}:${address}`;
        AccountController.setCaipAddress(caipAddress, namespace);
      } else {
        console.warn(`No current network found for namespace "${namespace}"`);
      }
    } else {
      const connector = ConnectorController.getConnector(connection.connectorId);
      if (connector) {
        ConnectionController.connectExternal(connector, namespace);
      } else {
        console.warn(`No connector found for namespace "${namespace}"`);
      }
    }
  }
};
var ConnectionController = withErrorBoundary(controller10);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/ERC7811Util.js
var ERC7811Utils = {
  /**
   * Creates a Balance object from an ERC7811 Asset object
   * @param asset - Asset object to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns Balance object
   */
  createBalance(asset, chainId) {
    const metadata = {
      name: asset.metadata["name"] || "",
      symbol: asset.metadata["symbol"] || "",
      decimals: asset.metadata["decimals"] || 0,
      value: asset.metadata["value"] || 0,
      price: asset.metadata["price"] || 0,
      iconUrl: asset.metadata["iconUrl"] || ""
    };
    return {
      name: metadata.name,
      symbol: metadata.symbol,
      chainId,
      address: asset.address === "native" ? void 0 : this.convertAddressToCAIP10Address(asset.address, chainId),
      value: metadata.value,
      price: metadata.price,
      quantity: {
        decimals: metadata.decimals.toString(),
        numeric: this.convertHexToBalance({
          hex: asset.balance,
          decimals: metadata.decimals
        })
      },
      iconUrl: metadata.iconUrl
    };
  },
  /**
   * Converts a hex string to a Balance object
   * @param hex - Hex string to convert
   * @param decimals - Number of decimals to use
   * @returns Balance object
   */
  convertHexToBalance({ hex, decimals }) {
    return formatUnits(BigInt(hex), decimals);
  },
  /**
   * Converts an address to a CAIP-10 address
   * @param address - Address to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns CAIP-10 address
   */
  convertAddressToCAIP10Address(address, chainId) {
    return `${chainId}:${address}`;
  },
  /**
   *  Creates a CAIP-2 Chain ID from a chain ID and namespace
   * @param chainId  - Chain ID in hex format
   * @param namespace  - Chain namespace
   * @returns
   */
  createCAIP2ChainId(chainId, namespace) {
    return `${namespace}:${parseInt(chainId, 16)}`;
  },
  /**
   * Gets the chain ID in hex format from a CAIP-2 Chain ID
   * @param caip2ChainId - CAIP-2 Chain ID
   * @returns Chain ID in hex format
   */
  getChainIdHexFromCAIP2ChainId(caip2ChainId) {
    const parts = caip2ChainId.split(":");
    if (parts.length < 2 || !parts[1]) {
      return "0x0";
    }
    const chainPart = parts[1];
    const parsed = parseInt(chainPart, 10);
    return isNaN(parsed) ? "0x0" : `0x${parsed.toString(16)}`;
  },
  /**
   * Checks if a response is a valid WalletGetAssetsResponse
   * @param response - The response to check
   * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
   */
  isWalletGetAssetsResponse(response) {
    if (typeof response !== "object" || response === null) {
      return false;
    }
    return Object.values(response).every((value) => Array.isArray(value) && value.every((asset) => this.isValidAsset(asset)));
  },
  /**
   * Checks if an asset object is valid.
   * @param asset - The asset object to check.
   * @returns True if the asset is valid, false otherwise.
   */
  isValidAsset(asset) {
    return typeof asset === "object" && asset !== null && typeof asset.address === "string" && typeof asset.balance === "string" && (asset.type === "ERC20" || asset.type === "NATIVE") && typeof asset.metadata === "object" && asset.metadata !== null && typeof asset.metadata["name"] === "string" && typeof asset.metadata["symbol"] === "string" && typeof asset.metadata["decimals"] === "number" && typeof asset.metadata["price"] === "number" && typeof asset.metadata["iconUrl"] === "string";
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/SendApiUtil.js
var SendApiUtil = {
  async getMyTokensWithBalance(forceUpdate) {
    const address = AccountController.state.address;
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!address || !caipNetwork) {
      return [];
    }
    if (caipNetwork.chainNamespace === "eip155") {
      const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
      if (eip155Balances) {
        return this.filterLowQualityTokens(eip155Balances);
      }
    }
    const response = await BlockchainApiController.getBalance(address, caipNetwork.caipNetworkId, forceUpdate);
    return this.filterLowQualityTokens(response.balances);
  },
  async getEIP155Balances(address, caipNetwork) {
    try {
      const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
      const walletCapabilities = await ConnectionController.getCapabilities(address);
      if (!walletCapabilities?.[chainIdHex]?.["assetDiscovery"]?.supported) {
        return null;
      }
      const walletGetAssetsResponse = await ConnectionController.walletGetAssets({
        account: address,
        chainFilter: [chainIdHex]
      });
      if (!ERC7811Utils.isWalletGetAssetsResponse(walletGetAssetsResponse)) {
        return null;
      }
      const assets = walletGetAssetsResponse[chainIdHex] || [];
      return assets.map((asset) => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
    } catch (error) {
      return null;
    }
  },
  /**
   * The 1Inch API includes many low-quality tokens in the balance response,
   * which appear inconsistently. This filter prevents them from being displayed.
   */
  filterLowQualityTokens(balances) {
    return balances.filter((balance) => balance.quantity.decimals !== "0");
  },
  mapBalancesToSwapTokens(balances) {
    return balances?.map((token) => ({
      ...token,
      address: token?.address ? token.address : ChainController.getActiveNetworkTokenAddress(),
      decimals: parseInt(token.quantity.decimals, 10),
      logoUri: token.iconUrl,
      eip2612: false
    })) || [];
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js
var state17 = proxy({
  tokenBalances: [],
  loading: false
});
var controller11 = {
  state: state17,
  subscribe(callback) {
    return subscribe(state17, () => callback(state17));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state17, key, callback);
  },
  setToken(token) {
    if (token) {
      state17.token = ref(token);
    }
  },
  setTokenAmount(sendTokenAmount) {
    state17.sendTokenAmount = sendTokenAmount;
  },
  setReceiverAddress(receiverAddress) {
    state17.receiverAddress = receiverAddress;
  },
  setReceiverProfileImageUrl(receiverProfileImageUrl) {
    state17.receiverProfileImageUrl = receiverProfileImageUrl;
  },
  setReceiverProfileName(receiverProfileName) {
    state17.receiverProfileName = receiverProfileName;
  },
  setNetworkBalanceInUsd(networkBalanceInUSD) {
    state17.networkBalanceInUSD = networkBalanceInUSD;
  },
  setLoading(loading) {
    state17.loading = loading;
  },
  async sendToken() {
    try {
      SendController.setLoading(true);
      switch (ChainController.state.activeCaipNetwork?.chainNamespace) {
        case "eip155":
          await SendController.sendEvmToken();
          return;
        case "solana":
          await SendController.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    } finally {
      SendController.setLoading(false);
    }
  },
  async sendEvmToken() {
    const activeChainNamespace = ChainController.state.activeChain;
    const activeAccountType = AccountController.state.preferredAccountTypes?.[activeChainNamespace];
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    if (!SendController.state.token) {
      throw new Error("A token is required");
    }
    if (SendController.state.token?.address) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.address,
          amount: SendController.state.sendTokenAmount,
          network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
        }
      });
      await SendController.sendERC20Token({
        receiverAddress: SendController.state.receiverAddress,
        tokenAddress: SendController.state.token.address,
        sendTokenAmount: SendController.state.sendTokenAmount,
        decimals: SendController.state.token.quantity.decimals
      });
    } else {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.symbol || "",
          amount: SendController.state.sendTokenAmount,
          network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
        }
      });
      await SendController.sendNativeToken({
        receiverAddress: SendController.state.receiverAddress,
        sendTokenAmount: SendController.state.sendTokenAmount,
        decimals: SendController.state.token.quantity.decimals
      });
    }
  },
  async fetchTokenBalance(onError) {
    state17.loading = true;
    const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
    const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
    const caipAddress = ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    if (state17.lastRetry && !CoreHelperUtil.isAllowedRetry(state17.lastRetry, 30 * ConstantsUtil2.ONE_SEC_MS)) {
      state17.loading = false;
      return [];
    }
    try {
      if (address && chainId && chain) {
        const balances = await SendApiUtil.getMyTokensWithBalance();
        state17.tokenBalances = balances;
        state17.lastRetry = void 0;
        return balances;
      }
    } catch (error) {
      state17.lastRetry = Date.now();
      onError?.(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
      state17.loading = false;
    }
    return [];
  },
  fetchNetworkBalance() {
    if (state17.tokenBalances.length === 0) {
      return;
    }
    const networkTokenBalances = SendApiUtil.mapBalancesToSwapTokens(state17.tokenBalances);
    if (!networkTokenBalances) {
      return;
    }
    const networkToken = networkTokenBalances.find((token) => token.address === ChainController.getActiveNetworkTokenAddress());
    if (!networkToken) {
      return;
    }
    state17.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async sendNativeToken(params) {
    RouterController.pushTransactionStack({});
    const to = params.receiverAddress;
    const address = AccountController.state.address;
    const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const data = "0x";
    await ConnectionController.sendTransaction({
      chainNamespace: "eip155",
      to,
      address,
      data,
      value: value ?? BigInt(0)
    });
    EventsController.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountTypes?.["eip155"] === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: SendController.state.token?.symbol || "",
        amount: params.sendTokenAmount,
        network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
      }
    });
    ConnectionController._getClient()?.updateBalance("eip155");
    SendController.resetSend();
  },
  async sendERC20Token(params) {
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    if (AccountController.state.address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
      const tokenAddress = CoreHelperUtil.getPlainAddress(params.tokenAddress);
      await ConnectionController.writeContract({
        fromAddress: AccountController.state.address,
        tokenAddress,
        args: [params.receiverAddress, amount ?? BigInt(0)],
        method: "transfer",
        abi: ContractUtil.getERC20Abi(tokenAddress),
        chainNamespace: "eip155"
      });
      SendController.resetSend();
    }
  },
  async sendSolanaToken() {
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    await ConnectionController.sendTransaction({
      chainNamespace: "solana",
      to: SendController.state.receiverAddress,
      value: SendController.state.sendTokenAmount
    });
    ConnectionController._getClient()?.updateBalance("solana");
    SendController.resetSend();
  },
  resetSend() {
    state17.token = void 0;
    state17.sendTokenAmount = void 0;
    state17.receiverAddress = void 0;
    state17.receiverProfileImageUrl = void 0;
    state17.receiverProfileName = void 0;
    state17.loading = false;
    state17.tokenBalances = [];
  }
};
var SendController = withErrorBoundary(controller11);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var accountState = {
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false,
  addressLabels: /* @__PURE__ */ new Map(),
  allAccounts: [],
  user: void 0
};
var networkState = {
  caipNetwork: void 0,
  supportsAllNetworks: true,
  smartAccountEnabledNetworks: []
};
var state18 = proxy({
  chains: proxyMap(),
  activeCaipAddress: void 0,
  activeChain: void 0,
  activeCaipNetwork: void 0,
  noAdapters: false,
  universalAdapter: {
    networkControllerClient: void 0,
    connectionControllerClient: void 0
  },
  isSwitchingNamespace: false
});
var controller12 = {
  state: state18,
  subscribe(callback) {
    return subscribe(state18, () => {
      callback(state18);
    });
  },
  subscribeKey(key, callback) {
    return subscribeKey(state18, key, callback);
  },
  subscribeChainProp(property, callback, chain) {
    let prev = void 0;
    return subscribe(state18.chains, () => {
      const activeChain = chain || state18.activeChain;
      if (activeChain) {
        const nextValue = state18.chains.get(activeChain)?.[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    });
  },
  initialize(adapters, caipNetworks, clients) {
    const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil.getActiveNetworkProps();
    const activeCaipNetwork = caipNetworks?.find((network) => network.id.toString() === activeChainId?.toString());
    const defaultAdapter = adapters.find((adapter) => adapter?.namespace === activeNamespace);
    const adapterToActivate = defaultAdapter || adapters?.[0];
    const namespacesFromAdapters = adapters.map((a) => a.namespace).filter((n) => n !== void 0);
    const namespaces = OptionsController.state.enableEmbedded ? /* @__PURE__ */ new Set([...namespacesFromAdapters]) : /* @__PURE__ */ new Set([...caipNetworks?.map((network) => network.chainNamespace) ?? []]);
    if (adapters?.length === 0 || !adapterToActivate) {
      state18.noAdapters = true;
    }
    if (!state18.noAdapters) {
      state18.activeChain = adapterToActivate?.namespace;
      state18.activeCaipNetwork = activeCaipNetwork;
      ChainController.setChainNetworkData(adapterToActivate?.namespace, {
        caipNetwork: activeCaipNetwork
      });
      if (state18.activeChain) {
        PublicStateController.set({ activeChain: adapterToActivate?.namespace });
      }
    }
    namespaces.forEach((namespace) => {
      const namespaceNetworks = caipNetworks?.filter((network) => network.chainNamespace === namespace);
      ChainController.state.chains.set(namespace, {
        namespace,
        networkState: proxy({
          ...networkState,
          caipNetwork: namespaceNetworks?.[0]
        }),
        accountState: proxy(accountState),
        caipNetworks: namespaceNetworks ?? [],
        ...clients
      });
      ChainController.setRequestedCaipNetworks(namespaceNetworks ?? [], namespace);
    });
  },
  removeAdapter(namespace) {
    if (state18.activeChain === namespace) {
      const nextAdapter = Array.from(state18.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
      if (nextAdapter) {
        const caipNetwork = nextAdapter[1]?.caipNetworks?.[0];
        if (caipNetwork) {
          ChainController.setActiveCaipNetwork(caipNetwork);
        }
      }
    }
    state18.chains.delete(namespace);
  },
  addAdapter(adapter, { networkControllerClient, connectionControllerClient }, caipNetworks) {
    state18.chains.set(adapter.namespace, {
      namespace: adapter.namespace,
      networkState: {
        ...networkState,
        caipNetwork: caipNetworks[0]
      },
      accountState,
      caipNetworks,
      connectionControllerClient,
      networkControllerClient
    });
    ChainController.setRequestedCaipNetworks(caipNetworks?.filter((caipNetwork) => caipNetwork.chainNamespace === adapter.namespace) ?? [], adapter.namespace);
  },
  addNetwork(network) {
    const chainAdapter = state18.chains.get(network.chainNamespace);
    if (chainAdapter) {
      const newNetworks = [...chainAdapter.caipNetworks || []];
      if (!chainAdapter.caipNetworks?.find((caipNetwork) => caipNetwork.id === network.id)) {
        newNetworks.push(network);
      }
      state18.chains.set(network.chainNamespace, { ...chainAdapter, caipNetworks: newNetworks });
      ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
      ConnectorController.filterByNamespace(network.chainNamespace, true);
    }
  },
  removeNetwork(namespace, networkId) {
    const chainAdapter = state18.chains.get(namespace);
    if (chainAdapter) {
      const isActiveNetwork = state18.activeCaipNetwork?.id === networkId;
      const newCaipNetworksOfAdapter = [
        ...chainAdapter.caipNetworks?.filter((network) => network.id !== networkId) || []
      ];
      if (isActiveNetwork && chainAdapter?.caipNetworks?.[0]) {
        ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
      }
      state18.chains.set(namespace, { ...chainAdapter, caipNetworks: newCaipNetworksOfAdapter });
      ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
      if (newCaipNetworksOfAdapter.length === 0) {
        ConnectorController.filterByNamespace(namespace, false);
      }
    }
  },
  setAdapterNetworkState(chain, props) {
    const chainAdapter = state18.chains.get(chain);
    if (chainAdapter) {
      chainAdapter.networkState = {
        ...chainAdapter.networkState || networkState,
        ...props
      };
      state18.chains.set(chain, chainAdapter);
    }
  },
  setChainAccountData(chain, accountProps, _unknown = true) {
    if (!chain) {
      throw new Error("Chain is required to update chain account data");
    }
    const chainAdapter = state18.chains.get(chain);
    if (chainAdapter) {
      const newAccountState = { ...chainAdapter.accountState || accountState, ...accountProps };
      state18.chains.set(chain, { ...chainAdapter, accountState: newAccountState });
      if (state18.chains.size === 1 || state18.activeChain === chain) {
        if (accountProps.caipAddress) {
          state18.activeCaipAddress = accountProps.caipAddress;
        }
        AccountController.replaceState(newAccountState);
      }
    }
  },
  setChainNetworkData(chain, networkProps) {
    if (!chain) {
      return;
    }
    const chainAdapter = state18.chains.get(chain);
    if (chainAdapter) {
      const newNetworkState = { ...chainAdapter.networkState || networkState, ...networkProps };
      state18.chains.set(chain, { ...chainAdapter, networkState: newNetworkState });
    }
  },
  // eslint-disable-next-line max-params
  setAccountProp(prop, value, chain, replaceState = true) {
    ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
    if (prop === "status" && value === "disconnected" && chain) {
      ConnectorController.removeConnectorId(chain);
    }
  },
  setActiveNamespace(chain) {
    state18.activeChain = chain;
    const newAdapter = chain ? state18.chains.get(chain) : void 0;
    const caipNetwork = newAdapter?.networkState?.caipNetwork;
    if (caipNetwork?.id && chain) {
      state18.activeCaipAddress = newAdapter?.accountState?.caipAddress;
      state18.activeCaipNetwork = caipNetwork;
      ChainController.setChainNetworkData(chain, { caipNetwork });
      StorageUtil.setActiveCaipNetworkId(caipNetwork?.caipNetworkId);
      PublicStateController.set({
        activeChain: chain,
        selectedNetworkId: caipNetwork?.caipNetworkId
      });
    }
  },
  setActiveCaipNetwork(caipNetwork) {
    if (!caipNetwork) {
      return;
    }
    if (state18.activeChain !== caipNetwork.chainNamespace) {
      ChainController.setIsSwitchingNamespace(true);
    }
    const newAdapter = state18.chains.get(caipNetwork.chainNamespace);
    state18.activeChain = caipNetwork.chainNamespace;
    state18.activeCaipNetwork = caipNetwork;
    ChainController.setChainNetworkData(caipNetwork.chainNamespace, { caipNetwork });
    if (newAdapter?.accountState?.address) {
      state18.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${newAdapter?.accountState?.address}`;
    } else {
      state18.activeCaipAddress = void 0;
    }
    ChainController.setAccountProp("caipAddress", state18.activeCaipAddress, caipNetwork.chainNamespace);
    if (newAdapter) {
      AccountController.replaceState(newAdapter.accountState);
    }
    SendController.resetSend();
    PublicStateController.set({
      activeChain: state18.activeChain,
      selectedNetworkId: state18.activeCaipNetwork?.caipNetworkId
    });
    StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
    const isSupported = ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
    if (!isSupported && OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && !ConnectionController.state.wcBasic) {
      ChainController.showUnsupportedChainUI();
    }
  },
  addCaipNetwork(caipNetwork) {
    if (!caipNetwork) {
      return;
    }
    const chain = state18.chains.get(caipNetwork.chainNamespace);
    if (chain) {
      chain?.caipNetworks?.push(caipNetwork);
    }
  },
  async switchActiveNamespace(namespace) {
    if (!namespace) {
      return;
    }
    const isDifferentChain = namespace !== ChainController.state.activeChain;
    const caipNetworkOfNamespace = ChainController.getNetworkData(namespace)?.caipNetwork;
    const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace?.id);
    if (isDifferentChain && firstNetworkWithChain) {
      await ChainController.switchActiveNetwork(firstNetworkWithChain);
    }
  },
  async switchActiveNetwork(network) {
    const activeAdapter = ChainController.state.chains.get(ChainController.state.activeChain);
    const unsupportedNetwork = !activeAdapter?.caipNetworks?.some((caipNetwork) => caipNetwork.id === state18.activeCaipNetwork?.id);
    const networkControllerClient = ChainController.getNetworkControllerClient(network.chainNamespace);
    if (networkControllerClient) {
      try {
        await networkControllerClient.switchCaipNetwork(network);
        if (unsupportedNetwork) {
          ModalController.close();
        }
      } catch (error) {
        RouterController.goBack();
      }
      EventsController.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: { network: network.caipNetworkId }
      });
    }
  },
  getNetworkControllerClient(chainNamespace) {
    const chain = chainNamespace || state18.activeChain;
    const chainAdapter = state18.chains.get(chain);
    if (!chainAdapter) {
      throw new Error("Chain adapter not found");
    }
    if (!chainAdapter.networkControllerClient) {
      throw new Error("NetworkController client not set");
    }
    return chainAdapter.networkControllerClient;
  },
  getConnectionControllerClient(_chain) {
    const chain = _chain || state18.activeChain;
    if (!chain) {
      throw new Error("Chain is required to get connection controller client");
    }
    const chainAdapter = state18.chains.get(chain);
    if (!chainAdapter?.connectionControllerClient) {
      throw new Error("ConnectionController client not set");
    }
    return chainAdapter.connectionControllerClient;
  },
  getAccountProp(key, _chain) {
    let chain = state18.activeChain;
    if (_chain) {
      chain = _chain;
    }
    if (!chain) {
      return void 0;
    }
    const chainAccountState = state18.chains.get(chain)?.accountState;
    if (!chainAccountState) {
      return void 0;
    }
    return chainAccountState[key];
  },
  getNetworkProp(key, namespace) {
    const chainNetworkState = state18.chains.get(namespace)?.networkState;
    if (!chainNetworkState) {
      return void 0;
    }
    return chainNetworkState[key];
  },
  getRequestedCaipNetworks(chainToFilter) {
    const adapter = state18.chains.get(chainToFilter);
    const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = adapter?.networkState || {};
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks;
  },
  getAllRequestedCaipNetworks() {
    const requestedCaipNetworks = [];
    state18.chains.forEach((chainAdapter) => {
      const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
      requestedCaipNetworks.push(...caipNetworks);
    });
    return requestedCaipNetworks;
  },
  setRequestedCaipNetworks(caipNetworks, chain) {
    ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const namespaces = allRequestedCaipNetworks.map((network) => network.chainNamespace);
    const uniqueNamespaces = Array.from(new Set(namespaces));
    ConnectorController.filterByNamespaces(uniqueNamespaces);
  },
  getAllApprovedCaipNetworkIds() {
    const approvedCaipNetworkIds = [];
    state18.chains.forEach((chainAdapter) => {
      const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
      approvedCaipNetworkIds.push(...approvedIds);
    });
    return approvedCaipNetworkIds;
  },
  getActiveCaipNetwork() {
    return state18.activeCaipNetwork;
  },
  getActiveCaipAddress() {
    return state18.activeCaipAddress;
  },
  getApprovedCaipNetworkIds(namespace) {
    const adapter = state18.chains.get(namespace);
    const approvedCaipNetworkIds = adapter?.networkState?.approvedCaipNetworkIds || [];
    return approvedCaipNetworkIds;
  },
  async setApprovedCaipNetworksData(namespace) {
    const networkControllerClient = ChainController.getNetworkControllerClient();
    const data = await networkControllerClient?.getApprovedCaipNetworksData();
    ChainController.setAdapterNetworkState(namespace, {
      approvedCaipNetworkIds: data?.approvedCaipNetworkIds,
      supportsAllNetworks: data?.supportsAllNetworks
    });
  },
  checkIfSupportedNetwork(namespace, caipNetwork) {
    const activeCaipNetwork = caipNetwork || state18.activeCaipNetwork;
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
    if (!requestedCaipNetworks.length) {
      return true;
    }
    return requestedCaipNetworks?.some((network) => network.id === activeCaipNetwork?.id);
  },
  checkIfSupportedChainId(chainId) {
    if (!state18.activeChain) {
      return true;
    }
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(state18.activeChain);
    return requestedCaipNetworks?.some((network) => network.id === chainId);
  },
  // Smart Account Network Handlers
  setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain) {
    ChainController.setAdapterNetworkState(chain, { smartAccountEnabledNetworks });
  },
  checkIfSmartAccountEnabled() {
    const networkId = NetworkUtil.caipNetworkIdToNumber(state18.activeCaipNetwork?.caipNetworkId);
    const activeChain = state18.activeChain;
    if (!activeChain || !networkId) {
      return false;
    }
    const smartAccountEnabledNetworks = ChainController.getNetworkProp("smartAccountEnabledNetworks", activeChain);
    return Boolean(smartAccountEnabledNetworks?.includes(Number(networkId)));
  },
  getActiveNetworkTokenAddress() {
    const namespace = state18.activeCaipNetwork?.chainNamespace || "eip155";
    const chainId = state18.activeCaipNetwork?.id || 1;
    const address = ConstantsUtil2.NATIVE_TOKEN_ADDRESS[namespace];
    return `${namespace}:${chainId}:${address}`;
  },
  showUnsupportedChainUI() {
    ModalController.open({ view: "UnsupportedChain" });
  },
  checkIfNamesSupported() {
    const activeCaipNetwork = state18.activeCaipNetwork;
    return Boolean(activeCaipNetwork?.chainNamespace && ConstantsUtil2.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
  },
  resetNetwork(namespace) {
    ChainController.setAdapterNetworkState(namespace, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: true,
      smartAccountEnabledNetworks: []
    });
  },
  resetAccount(chain) {
    const chainToWrite = chain;
    if (!chainToWrite) {
      throw new Error("Chain is required to set account prop");
    }
    state18.activeCaipAddress = void 0;
    ChainController.setChainAccountData(chainToWrite, {
      smartAccountDeployed: false,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountTypes: void 0,
      socialProvider: void 0,
      socialWindow: void 0,
      farcasterUrl: void 0,
      allAccounts: [],
      user: void 0,
      status: "disconnected"
    });
    ConnectorController.removeConnectorId(chainToWrite);
  },
  setIsSwitchingNamespace(isSwitchingNamespace) {
    state18.isSwitchingNamespace = isSwitchingNamespace;
  },
  getFirstCaipNetworkSupportsAuthConnector() {
    const availableChains = [];
    let firstCaipNetwork = void 0;
    state18.chains.forEach((chain) => {
      if (ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((ns) => ns === chain.namespace)) {
        if (chain.namespace) {
          availableChains.push(chain.namespace);
        }
      }
    });
    if (availableChains.length > 0) {
      const firstAvailableChain = availableChains[0];
      firstCaipNetwork = firstAvailableChain ? state18.chains.get(firstAvailableChain)?.caipNetworks?.[0] : void 0;
      return firstCaipNetwork;
    }
    return void 0;
  },
  getAccountData(chainNamespace) {
    if (!chainNamespace) {
      return AccountController.state;
    }
    return ChainController.state.chains.get(chainNamespace)?.accountState;
  },
  getNetworkData(chainNamespace) {
    const namespace = chainNamespace || state18.activeChain;
    if (!namespace) {
      return void 0;
    }
    return ChainController.state.chains.get(namespace)?.networkState;
  },
  getCaipNetworkByNamespace(chainNamespace, chainId) {
    if (!chainNamespace) {
      return void 0;
    }
    const chain = ChainController.state.chains.get(chainNamespace);
    const byChainId = chain?.caipNetworks?.find((network) => network.id === chainId);
    if (byChainId) {
      return byChainId;
    }
    return chain?.networkState?.caipNetwork || chain?.caipNetworks?.[0];
  },
  /**
   * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
   * @param namespace - The namespace to get the requested CaipNetwork IDs for
   * @returns The requested CaipNetwork IDs
   */
  getRequestedCaipNetworkIds() {
    const namespace = ConnectorController.state.filterByNamespace;
    const chains = namespace ? [state18.chains.get(namespace)] : Array.from(state18.chains.values());
    return chains.flatMap((chain) => chain?.caipNetworks || []).map((caipNetwork) => caipNetwork.caipNetworkId);
  },
  getCaipNetworks(namespace) {
    if (namespace) {
      return ChainController.getRequestedCaipNetworks(namespace);
    }
    return ChainController.getAllRequestedCaipNetworks();
  }
};
var ChainController = withErrorBoundary(controller12);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var baseUrl3 = CoreHelperUtil.getApiUrl();
var api3 = new FetchUtil({
  baseUrl: baseUrl3,
  clientId: null
});
var entries = 40;
var recommendedEntries = 4;
var imageCountToFetch = 20;
var state19 = proxy({
  promises: {},
  page: 1,
  count: 0,
  featured: [],
  allFeatured: [],
  recommended: [],
  allRecommended: [],
  wallets: [],
  filteredWallets: [],
  search: [],
  isAnalyticsEnabled: false,
  excludedWallets: [],
  isFetchingRecommendedWallets: false
});
var ApiController = {
  state: state19,
  subscribeKey(key, callback) {
    return subscribeKey(state19, key, callback);
  },
  _getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      projectId,
      st: sdkType || "appkit",
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  _filterOutExtensions(wallets) {
    if (OptionsController.state.isUniversalProvider) {
      return wallets.filter((w) => Boolean(w.mobile_link || w.desktop_link || w.webapp_link));
    }
    return wallets;
  },
  async _fetchWalletImage(imageId) {
    const imageUrl = `${api3.baseUrl}/getWalletImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchNetworkImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchConnectorImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchCurrencyImage(countryCode) {
    const imageUrl = `${api3.baseUrl}/public/getCurrencyImage/${countryCode}`;
    const blob = await api3.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
  },
  async _fetchTokenImage(symbol) {
    const imageUrl = `${api3.baseUrl}/public/getTokenImage/${symbol}`;
    const blob = await api3.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
  },
  _filterWalletsByPlatform(wallets) {
    const filteredWallets = CoreHelperUtil.isMobile() ? wallets?.filter((w) => {
      if (w.mobile_link) {
        return true;
      }
      if (w.id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id) {
        return true;
      }
      const isSolana = ChainController.state.activeChain === "solana";
      return isSolana && (w.id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id || w.id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id);
    }) : wallets;
    return filteredWallets;
  },
  async fetchProjectConfig() {
    const response = await api3.get({
      path: "/appkit/v1/config",
      params: ApiController._getSdkProperties()
    });
    return response.features;
  },
  async fetchAllowedOrigins() {
    try {
      const { allowedOrigins } = await api3.get({
        path: "/projects/v1/origins",
        params: ApiController._getSdkProperties()
      });
      return allowedOrigins;
    } catch (error) {
      return [];
    }
  },
  async fetchNetworkImages() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const ids = requestedCaipNetworks?.map(({ assets }) => assets?.imageId).filter(Boolean).filter((imageId) => !AssetUtil.getNetworkImageById(imageId));
    if (ids) {
      await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
    }
  },
  async fetchConnectorImages() {
    const { connectors } = ConnectorController.state;
    const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
    await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
  },
  async fetchCurrencyImages(currencies = []) {
    await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
  },
  async fetchTokenImages(tokens = []) {
    await Promise.allSettled(tokens.map((token) => ApiController._fetchTokenImage(token)));
  },
  async fetchWallets(params) {
    const exclude = params.exclude ?? [];
    const sdkProperties = ApiController._getSdkProperties();
    if (sdkProperties.sv.startsWith("html-core-")) {
      exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map((w) => w.id));
    }
    const wallets = await api3.get({
      path: "/getWallets",
      params: {
        ...ApiController._getSdkProperties(),
        ...params,
        page: String(params.page),
        entries: String(params.entries),
        include: params.include?.join(","),
        exclude: exclude.join(",")
      }
    });
    const filteredWallets = ApiController._filterWalletsByPlatform(wallets?.data);
    return {
      data: filteredWallets || [],
      // Keep original count for display on main page
      count: wallets?.count
    };
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds } = OptionsController.state;
    if (featuredWalletIds?.length) {
      const params = {
        ...ApiController._getSdkProperties(),
        page: 1,
        entries: featuredWalletIds?.length ?? recommendedEntries,
        include: featuredWalletIds
      };
      const { data } = await ApiController.fetchWallets(params);
      const sortedData = [...data].sort((a, b) => featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
      const images = sortedData.map((d) => d.image_id).filter(Boolean);
      await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
      state19.featured = sortedData;
      state19.allFeatured = sortedData;
    }
  },
  async fetchRecommendedWallets() {
    try {
      state19.isFetchingRecommendedWallets = true;
      const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
      const exclude = [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean);
      const chains = ChainController.getRequestedCaipNetworkIds().join(",");
      const params = {
        page: 1,
        entries: recommendedEntries,
        include: includeWalletIds,
        exclude,
        chains
      };
      const { data, count } = await ApiController.fetchWallets(params);
      const recent = StorageUtil.getRecentWallets();
      const recommendedImages = data.map((d) => d.image_id).filter(Boolean);
      const recentImages = recent.map((r2) => r2.image_id).filter(Boolean);
      await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
      state19.recommended = data;
      state19.allRecommended = data;
      state19.count = count ?? 0;
    } catch {
    } finally {
      state19.isFetchingRecommendedWallets = false;
    }
  },
  async fetchWalletsByPage({ page }) {
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    const exclude = [
      ...state19.recommended.map(({ id }) => id),
      ...excludeWalletIds ?? [],
      ...featuredWalletIds ?? []
    ].filter(Boolean);
    const params = {
      page,
      entries,
      include: includeWalletIds,
      exclude,
      chains
    };
    const { data, count } = await ApiController.fetchWallets(params);
    const images = data.slice(0, imageCountToFetch).map((w) => w.image_id).filter(Boolean);
    await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
    state19.wallets = CoreHelperUtil.uniqueBy([...state19.wallets, ...ApiController._filterOutExtensions(data)], "id").filter((w) => w.chains?.some((chain) => chains.includes(chain)));
    state19.count = count > state19.count ? count : state19.count;
    state19.page = page;
  },
  async initializeExcludedWallets({ ids }) {
    const params = {
      page: 1,
      entries: ids.length,
      include: ids
    };
    const { data } = await ApiController.fetchWallets(params);
    if (data) {
      data.forEach((wallet) => {
        state19.excludedWallets.push({ rdns: wallet.rdns, name: wallet.name });
      });
    }
  },
  async searchWallet({ search, badge }) {
    const { includeWalletIds, excludeWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    state19.search = [];
    const params = {
      page: 1,
      entries: 100,
      search: search?.trim(),
      badge_type: badge,
      include: includeWalletIds,
      exclude: excludeWalletIds,
      chains
    };
    const { data } = await ApiController.fetchWallets(params);
    EventsController.sendEvent({
      type: "track",
      event: "SEARCH_WALLET",
      properties: { badge: badge ?? "", search: search ?? "" }
    });
    const images = data.map((w) => w.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state19.search = ApiController._filterOutExtensions(data);
  },
  initPromise(key, fetchFn) {
    const existingPromise = state19.promises[key];
    if (existingPromise) {
      return existingPromise;
    }
    return state19.promises[key] = fetchFn();
  },
  prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true } = {}) {
    const promises = [
      fetchConnectorImages && ApiController.initPromise("connectorImages", ApiController.fetchConnectorImages),
      fetchFeaturedWallets && ApiController.initPromise("featuredWallets", ApiController.fetchFeaturedWallets),
      fetchRecommendedWallets && ApiController.initPromise("recommendedWallets", ApiController.fetchRecommendedWallets),
      fetchNetworkImages && ApiController.initPromise("networkImages", ApiController.fetchNetworkImages)
    ].filter(Boolean);
    return Promise.allSettled(promises);
  },
  prefetchAnalyticsConfig() {
    if (OptionsController.state.features?.analytics) {
      ApiController.fetchAnalyticsConfig();
    }
  },
  async fetchAnalyticsConfig() {
    try {
      const { isAnalyticsEnabled } = await api3.get({
        path: "/getAnalyticsConfig",
        params: ApiController._getSdkProperties()
      });
      OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
    } catch (error) {
      OptionsController.setFeatures({ analytics: false });
    }
  },
  filterByNamespaces(namespaces) {
    if (!namespaces?.length) {
      state19.featured = state19.allFeatured;
      state19.recommended = state19.allRecommended;
      return;
    }
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state19.featured = state19.allFeatured.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
    state19.recommended = state19.allRecommended.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
    state19.filteredWallets = state19.wallets.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
  },
  clearFilterByNamespaces() {
    state19.filteredWallets = [];
  },
  setFilterByNamespace(namespace) {
    if (!namespace) {
      state19.featured = state19.allFeatured;
      state19.recommended = state19.allRecommended;
      return;
    }
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state19.featured = state19.allFeatured.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
    state19.recommended = state19.allRecommended.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
    state19.filteredWallets = state19.wallets.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
  }
};

// node_modules/@reown/appkit-controllers/node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events = __toESM(require_events());
var Dt = "wc";
var qt = "universal_provider";
var U2 = `${Dt}@2:${qt}:`;
var st = "https://rpc.walletconnect.org/v1/";
var jt = `${st}bundler`;

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var SIWXUtil = {
  getSIWX() {
    return OptionsController.state.siwx;
  },
  async initializeIfEnabled() {
    const siwx = OptionsController.state.siwx;
    const caipAddress = ChainController.getActiveCaipAddress();
    if (!(siwx && caipAddress)) {
      return;
    }
    const [namespace, chainId, address] = caipAddress.split(":");
    if (!ChainController.checkIfSupportedNetwork(namespace)) {
      return;
    }
    try {
      const sessions = await siwx.getSessions(`${namespace}:${chainId}`, address);
      if (sessions.length) {
        return;
      }
      await ModalController.open({
        view: "SIWXSignMessage"
      });
    } catch (error) {
      console.error("SIWXUtil:initializeIfEnabled", error);
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties()
      });
      await ConnectionController._getClient()?.disconnect().catch(console.error);
      RouterController.reset("Connect");
      SnackController.showError("A problem occurred while trying initialize authentication");
    }
  },
  async requestSignMessage() {
    const siwx = OptionsController.state.siwx;
    const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
    const network = ChainController.getActiveCaipNetwork();
    const client = ConnectionController._getClient();
    if (!siwx) {
      throw new Error("SIWX is not enabled");
    }
    if (!address) {
      throw new Error("No ActiveCaipAddress found");
    }
    if (!network) {
      throw new Error("No ActiveCaipNetwork or client found");
    }
    if (!client) {
      throw new Error("No ConnectionController client found");
    }
    try {
      const siwxMessage = await siwx.createMessage({
        chainId: network.caipNetworkId,
        accountAddress: address
      });
      const message = siwxMessage.toString();
      const connectorId = ConnectorController.getConnectorId(network.chainNamespace);
      if (connectorId === ConstantsUtil.CONNECTOR_ID.AUTH) {
        RouterController.pushTransactionStack({});
      }
      const signature = await client.signMessage(message);
      await siwx.addSession({
        data: siwxMessage,
        message,
        signature
      });
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      const properties = this.getSIWXEventProperties();
      if (!ModalController.state.open || RouterController.state.view === "ApproveTransaction") {
        await ModalController.open({
          view: "SIWXSignMessage"
        });
      }
      if (properties.isSmartAccount) {
        SnackController.showError("This application might not support Smart Accounts");
      } else {
        SnackController.showError("Signature declined");
      }
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties
      });
      console.error("SWIXUtil:requestSignMessage", error);
    }
  },
  async cancelSignMessage() {
    try {
      const siwx = this.getSIWX();
      const isRequired = siwx?.getRequired?.();
      if (isRequired) {
        await ConnectionController.disconnect();
      } else {
        ModalController.close();
      }
      RouterController.reset("Connect");
      EventsController.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      console.error("SIWXUtil:cancelSignMessage", error);
    }
  },
  async getSessions() {
    const siwx = OptionsController.state.siwx;
    const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
    const network = ChainController.getActiveCaipNetwork();
    if (!(siwx && address && network)) {
      return [];
    }
    return siwx.getSessions(network.caipNetworkId, address);
  },
  async isSIWXCloseDisabled() {
    const siwx = this.getSIWX();
    if (siwx) {
      const isApproveSignScreen = RouterController.state.view === "ApproveTransaction";
      const isSiwxSignMessage = RouterController.state.view === "SIWXSignMessage";
      if (isApproveSignScreen || isSiwxSignMessage) {
        return siwx.getRequired?.() && (await this.getSessions()).length === 0;
      }
    }
    return false;
  },
  async universalProviderAuthenticate({ universalProvider, chains, methods }) {
    const siwx = SIWXUtil.getSIWX();
    const namespaces = new Set(chains.map((chain) => chain.split(":")[0]));
    if (!siwx || namespaces.size !== 1 || !namespaces.has("eip155")) {
      return false;
    }
    const siwxMessage = await siwx.createMessage({
      chainId: ChainController.getActiveCaipNetwork()?.caipNetworkId || "",
      accountAddress: ""
    });
    const result = await universalProvider.authenticate({
      nonce: siwxMessage.nonce,
      domain: siwxMessage.domain,
      uri: siwxMessage.uri,
      exp: siwxMessage.expirationTime,
      iat: siwxMessage.issuedAt,
      nbf: siwxMessage.notBefore,
      requestId: siwxMessage.requestId,
      version: siwxMessage.version,
      resources: siwxMessage.resources,
      statement: siwxMessage.statement,
      chainId: siwxMessage.chainId,
      methods,
      // The first chainId is what is used for universal provider to build the message
      chains: [siwxMessage.chainId, ...chains.filter((chain) => chain !== siwxMessage.chainId)]
    });
    SnackController.showLoading("Authenticating...", { autoClose: false });
    AccountController.setConnectedWalletInfo({
      ...result.session.peer.metadata,
      name: result.session.peer.metadata.name,
      icon: result.session.peer.metadata.icons?.[0],
      type: "WALLET_CONNECT"
    }, Array.from(namespaces)[0]);
    if (result?.auths?.length) {
      const sessions = result.auths.map((cacao) => {
        const message = universalProvider.client.formatAuthMessage({
          request: cacao.p,
          iss: cacao.p.iss
        });
        return {
          data: {
            ...cacao.p,
            accountAddress: cacao.p.iss.split(":").slice(-1).join(""),
            chainId: cacao.p.iss.split(":").slice(2, 4).join(":"),
            uri: cacao.p.aud,
            version: cacao.p.version || siwxMessage.version,
            expirationTime: cacao.p.exp,
            issuedAt: cacao.p.iat,
            notBefore: cacao.p.nbf
          },
          message,
          signature: cacao.s.s,
          cacao
        };
      });
      try {
        await siwx.setSessions(sessions);
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: SIWXUtil.getSIWXEventProperties()
        });
      } catch (error) {
        console.error("SIWX:universalProviderAuth - failed to set sessions", error);
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: SIWXUtil.getSIWXEventProperties()
        });
        await universalProvider.disconnect().catch(console.error);
        throw error;
      } finally {
        SnackController.hide();
      }
    }
    return true;
  },
  getSIWXEventProperties() {
    const activeChainNamespace = ChainController.state.activeChain;
    return {
      network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
      isSmartAccount: AccountController.state.preferredAccountTypes?.[activeChainNamespace] === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
    };
  },
  async clearSessions() {
    const siwx = this.getSIWX();
    if (siwx) {
      await siwx.setSessions([]);
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/ModalUtil.js
var ModalUtil = {
  isUnsupportedChainView() {
    return RouterController.state.view === "UnsupportedChain" || RouterController.state.view === "SwitchNetwork" && RouterController.state.history.includes("UnsupportedChain");
  },
  async safeClose() {
    if (this.isUnsupportedChainView()) {
      ModalController.shake();
      return;
    }
    const isSIWXCloseDisabled = await SIWXUtil.isSIWXCloseDisabled();
    if (isSIWXCloseDisabled) {
      ModalController.shake();
      return;
    }
    ModalController.close();
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OnRampController.js
var USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
var USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
};
var defaultState = {
  providers: ONRAMP_PROVIDERS,
  selectedProvider: null,
  error: null,
  purchaseCurrency: USDC_CURRENCY_DEFAULT,
  paymentCurrency: USD_CURRENCY_DEFAULT,
  purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
  paymentCurrencies: [],
  quotesLoading: false
};
var state20 = proxy(defaultState);
var controller13 = {
  state: state20,
  subscribe(callback) {
    return subscribe(state20, () => callback(state20));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state20, key, callback);
  },
  setSelectedProvider(provider) {
    if (provider && provider.name === "meld") {
      const currency = ChainController.state.activeChain === ConstantsUtil.CHAIN.SOLANA ? "SOL" : "USDC";
      const address = AccountController.state.address ?? "";
      const url = new URL(provider.url);
      url.searchParams.append("publicKey", MELD_PUBLIC_KEY);
      url.searchParams.append("destinationCurrencyCode", currency);
      url.searchParams.append("walletAddress", address);
      url.searchParams.append("externalCustomerId", OptionsController.state.projectId);
      state20.selectedProvider = { ...provider, url: url.toString() };
    } else {
      state20.selectedProvider = provider;
    }
  },
  setOnrampProviders(providers) {
    if (Array.isArray(providers) && providers.every((item) => typeof item === "string")) {
      const validOnramp = providers;
      const newProviders = ONRAMP_PROVIDERS.filter((provider) => validOnramp.includes(provider.name));
      state20.providers = newProviders;
    } else {
      state20.providers = [];
    }
  },
  setPurchaseCurrency(currency) {
    state20.purchaseCurrency = currency;
  },
  setPaymentCurrency(currency) {
    state20.paymentCurrency = currency;
  },
  setPurchaseAmount(amount) {
    OnRampController.state.purchaseAmount = amount;
  },
  setPaymentAmount(amount) {
    OnRampController.state.paymentAmount = amount;
  },
  async getAvailableCurrencies() {
    const options = await BlockchainApiController.getOnrampOptions();
    state20.purchaseCurrencies = options.purchaseCurrencies;
    state20.paymentCurrencies = options.paymentCurrencies;
    state20.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
    state20.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    state20.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state20.purchaseCurrency,
        paymentCurrency: state20.paymentCurrency,
        amount: state20.paymentAmount?.toString() || "0",
        network: state20.purchaseCurrency?.symbol
      });
      state20.quotesLoading = false;
      state20.purchaseAmount = Number(quote?.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state20.error = error.message;
      state20.quotesLoading = false;
      return null;
    } finally {
      state20.quotesLoading = false;
    }
  },
  resetState() {
    state20.selectedProvider = null;
    state20.error = null;
    state20.purchaseCurrency = USDC_CURRENCY_DEFAULT;
    state20.paymentCurrency = USD_CURRENCY_DEFAULT;
    state20.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
    state20.paymentCurrencies = [];
    state20.paymentAmount = void 0;
    state20.purchaseAmount = void 0;
    state20.quotesLoading = false;
  }
};
var OnRampController = withErrorBoundary(controller13);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js
var state21 = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
var controller14 = {
  state: state21,
  subscribe(callback) {
    return subscribe(state21, () => callback(state21));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state21, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state21.open = true;
    state21.message = message;
    state21.triggerRect = triggerRect;
    state21.variant = variant;
  },
  hide() {
    state21.open = false;
    state21.message = "";
    state21.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};
var TooltipController = withErrorBoundary(controller14);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/EnsUtil.js
var SLIP44_MSB = 2147483648;
var EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js
var state22 = proxy({
  suggestions: [],
  loading: false
});
var controller15 = {
  state: state22,
  subscribe(callback) {
    return subscribe(state22, () => callback(state22));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state22, key, callback);
  },
  async resolveName(name) {
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e2) {
      const error = e2;
      throw new Error(error?.reasons?.[0]?.description || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
      return false;
    }
  },
  async getSuggestions(value) {
    try {
      state22.loading = true;
      state22.suggestions = [];
      const response = await BlockchainApiController.getEnsNameSuggestions(value);
      state22.suggestions = response.suggestions.map((suggestion) => ({
        ...suggestion,
        name: suggestion.name
      })) || [];
      return state22.suggestions;
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
      state22.loading = false;
    }
  },
  async getNamesForAddress(address) {
    try {
      const network = ChainController.state.activeCaipNetwork;
      if (!network) {
        return [];
      }
      const cachedEns = StorageUtil.getEnsFromCacheForAddress(address);
      if (cachedEns) {
        return cachedEns;
      }
      const response = await BlockchainApiController.reverseLookupEnsName({ address });
      StorageUtil.updateEnsCache({
        address,
        ens: response,
        timestamp: Date.now()
      });
      return response;
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    const network = ChainController.state.activeCaipNetwork;
    if (!network) {
      throw new Error("Network not found");
    }
    const address = AccountController.state.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state22.loading = true;
    try {
      const message = JSON.stringify({
        name,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        onCancel() {
          RouterController.replace("RegisterAccountName");
        }
      });
      const signature = await ConnectionController.signMessage(message);
      state22.loading = false;
      const networkId = network.id;
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      AccountController.setProfileName(name, network.chainNamespace);
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state22.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    const ensError = error;
    return ensError?.reasons?.[0]?.description || defaultError;
  }
};
var EnsController = withErrorBoundary(controller15);

// node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var themeTag = void 0;
var darkModeTag = void 0;
var lightModeTag = void 0;
function initializeTheming(themeVariables, themeMode) {
  themeTag = document.createElement("style");
  darkModeTag = document.createElement("style");
  lightModeTag = document.createElement("style");
  themeTag.textContent = createRootStyles(themeVariables).core.cssText;
  darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
  lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
  document.head.appendChild(themeTag);
  document.head.appendChild(darkModeTag);
  document.head.appendChild(lightModeTag);
  setColorTheme(themeMode);
}
function setColorTheme(themeMode) {
  if (darkModeTag && lightModeTag) {
    if (themeMode === "light") {
      darkModeTag.removeAttribute("media");
      lightModeTag.media = "enabled";
    } else {
      lightModeTag.removeAttribute("media");
      darkModeTag.media = "enabled";
    }
  }
}
function setThemeVariables(themeVariables) {
  if (themeTag && darkModeTag && lightModeTag) {
    themeTag.textContent = createRootStyles(themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
  }
}
function createRootStyles(themeVariables) {
  return {
    core: i`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${r(themeVariables?.["--w3m-color-mix-strength"] ? `${themeVariables["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${r(themeVariables?.["--w3m-font-family"] || "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${r(themeVariables?.["--w3m-font-size-master"] || "10px")};
        --w3m-border-radius-master: ${r(themeVariables?.["--w3m-border-radius-master"] || "4px")};
        --w3m-z-index: ${r(themeVariables?.["--w3m-z-index"] || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
    light: i`
      :root {
        --w3m-color-mix: ${r(themeVariables?.["--w3m-color-mix"] || "#fff")};
        --w3m-accent: ${r(getW3mThemeVariables(themeVariables, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${r(getW3mThemeVariables(themeVariables, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
    dark: i`
      :root {
        --w3m-color-mix: ${r(themeVariables?.["--w3m-color-mix"] || "#000")};
        --w3m-accent: ${r(getW3mThemeVariables(themeVariables, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${r(getW3mThemeVariables(themeVariables, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
  };
}
var resetStyles = i`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`;
var elementStyles = i`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
var colorStyles = i`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = {
  getSpacingStyles(spacing, index) {
    if (Array.isArray(spacing)) {
      return spacing[index] ? `var(--wui-spacing-${spacing[index]})` : void 0;
    } else if (typeof spacing === "string") {
      return `var(--wui-spacing-${spacing})`;
    }
    return void 0;
  },
  getFormattedDate(date) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
  },
  getHostName(url) {
    try {
      const newUrl = new URL(url);
      return newUrl.hostname;
    } catch (error) {
      return "";
    }
  },
  getTruncateString({ string, charsStart, charsEnd, truncate }) {
    if (string.length <= charsStart + charsEnd) {
      return string;
    }
    if (truncate === "end") {
      return `${string.substring(0, charsStart)}...`;
    } else if (truncate === "start") {
      return `...${string.substring(string.length - charsEnd)}`;
    }
    return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
  },
  generateAvatarColors(address) {
    const hash = address.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "");
    const baseColor = hash.substring(0, 6).padEnd(6, "0");
    const rgbColor = this.hexToRgb(baseColor);
    const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master");
    const radius = Number(masterBorderRadius?.replace("px", ""));
    const edge = 100 - 3 * radius;
    const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
    const colors = [];
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const tintedColor = this.tintColor(rgbColor, 0.15 * i2);
      colors.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
    }
    return `
    --local-color-1: ${colors[0]};
    --local-color-2: ${colors[1]};
    --local-color-3: ${colors[2]};
    --local-color-4: ${colors[3]};
    --local-color-5: ${colors[4]};
    --local-radial-circle: ${gradientCircle}
   `;
  },
  hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r2 = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return [r2, g, b];
  },
  tintColor(rgb, tint) {
    const [r2, g, b] = rgb;
    const tintedR = Math.round(r2 + (255 - r2) * tint);
    const tintedG = Math.round(g + (255 - g) * tint);
    const tintedB = Math.round(b + (255 - b) * tint);
    return [tintedR, tintedG, tintedB];
  },
  isNumber(character) {
    const regex = {
      number: /^[0-9]+$/u
    };
    return regex.number.test(character);
  },
  getColorTheme(theme) {
    if (theme) {
      return theme;
    } else if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)")?.matches) {
        return "dark";
      }
      return "light";
    }
    return "dark";
  },
  splitBalance(input) {
    const parts = input.split(".");
    if (parts.length === 2) {
      return [parts[0], parts[1]];
    }
    return ["0", "00"];
  },
  roundNumber(number, threshold, fixed) {
    const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
    return roundedNumber;
  },
  formatNumberToLocalString(value, decimals = 2) {
    if (value === void 0) {
      return "0.00";
    }
    if (typeof value === "number") {
      return value.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      });
    }
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    });
  }
};

// node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
function standardCustomElement(tagName, descriptor) {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
      }
    }
  };
}
function legacyCustomElement(tagName, clazz) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, clazz);
  }
  return clazz;
}
function customElement(tagName) {
  return function create(classOrDescriptor) {
    return typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
}

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil3 = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "NFTs" }, { label: "Activity" }],
  SECURE_SITE_ORIGIN: (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org",
  VIEW_DIRECTION: {
    Next: "next",
    Prev: "prev"
  },
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
  ANIMATION_DURATIONS: {
    HeaderText: 120,
    ModalHeight: 150,
    ViewTransition: 150
  }
};

export {
  ConstantsUtil,
  NetworkUtil,
  ParseUtil,
  proxy,
  subscribe,
  ref,
  subscribeKey,
  ConstantsUtil2,
  StorageUtil,
  CoreHelperUtil,
  OptionsController,
  AssetController,
  AssetUtil,
  AlertController,
  EventsController,
  ApiController,
  RouterController,
  ThemeController,
  ConnectorController,
  SnackController,
  ConnectionController,
  PublicStateController,
  SendController,
  ChainController,
  BlockchainApiController,
  AccountController,
  ModalController,
  OnRampController,
  TooltipController,
  EnsController,
  SIWXUtil,
  ModalUtil,
  ConstantsUtil3,
  initializeTheming,
  setColorTheme,
  setThemeVariables,
  resetStyles,
  elementStyles,
  colorStyles,
  UiHelperUtil,
  customElement
};
