import {
  UiHelperUtil,
  colorStyles,
  customElement,
  elementStyles,
  resetStyles
} from "/assets/chunk-O4SRT2X4.js";
import {
  A,
  E,
  b,
  f,
  i,
  i2,
  j,
  u
} from "/assets/chunk-DYOXIJYO.js";

// node_modules/@lit/reactive-element/decorators/property.js
var o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r = (t3 = o, e4, r5) => {
  const { kind: n5, metadata: i5 } = r5;
  let s3 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s3 && globalThis.litPropertyMetadata.set(i5, s3 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s3.set(r5.name, t3), "accessor" === n5) {
    const { name: o4 } = r5;
    return { set(r6) {
      const n6 = e4.get.call(this);
      e4.set.call(this, r6), this.requestUpdate(o4, n6, t3, true, r6);
    }, init(e5) {
      return void 0 !== e5 && this.C(o4, void 0, t3, e5), e5;
    } };
  }
  if ("setter" === n5) {
    const { name: o4 } = r5;
    return function(r6) {
      const n6 = this[o4];
      e4.call(this, r6), this.requestUpdate(o4, n6, t3, true, r6);
    };
  }
  throw Error("Unsupported decorator location: " + n5);
};
function n(t3) {
  return (e4, o4) => "object" == typeof o4 ? r(t3, e4, o4) : ((t4, e5, o5) => {
    const r5 = e5.hasOwnProperty(o5);
    return e5.constructor.createProperty(o5, t4), r5 ? Object.getOwnPropertyDescriptor(e5, o5) : void 0;
  })(t3, e4, o4);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r2(r5) {
  return n({ ...r5, state: true, attribute: false });
}

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js
var styles_default = i`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var __decorate = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiFlex = class WuiFlex2 extends i2 {
  render() {
    this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
    return b`<slot></slot>`;
  }
};
WuiFlex.styles = [resetStyles, styles_default];
__decorate([
  n()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate([
  n()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate([
  n()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate([
  n()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate([
  n()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate([
  n()
], WuiFlex.prototype, "alignItems", void 0);
__decorate([
  n()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate([
  n()
], WuiFlex.prototype, "columnGap", void 0);
__decorate([
  n()
], WuiFlex.prototype, "rowGap", void 0);
__decorate([
  n()
], WuiFlex.prototype, "gap", void 0);
__decorate([
  n()
], WuiFlex.prototype, "padding", void 0);
__decorate([
  n()
], WuiFlex.prototype, "margin", void 0);
WuiFlex = __decorate([
  customElement("wui-flex")
], WuiFlex);

// node_modules/lit-html/directives/if-defined.js
var o2 = (o4) => o4 ?? A;

// node_modules/lit-html/directive.js
var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e2 = (t3) => (...e4) => ({ _$litDirective$: t3, values: e4 });
var i3 = class {
  constructor(t3) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t3, e4, i5) {
    this._$Ct = t3, this._$AM = e4, this._$Ci = i5;
  }
  _$AS(t3, e4) {
    return this.update(t3, e4);
  }
  update(t3, e4) {
    return this.render(...e4);
  }
};

// node_modules/lit-html/directives/class-map.js
var e3 = e2(class extends i3 {
  constructor(t3) {
    if (super(t3), t3.type !== t.ATTRIBUTE || "class" !== t3.name || t3.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t3) {
    return " " + Object.keys(t3).filter((s3) => t3[s3]).join(" ") + " ";
  }
  update(s3, [i5]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== s3.strings && (this.nt = new Set(s3.strings.join(" ").split(/\s/).filter((t3) => "" !== t3)));
      for (const t3 in i5) i5[t3] && !this.nt?.has(t3) && this.st.add(t3);
      return this.render(i5);
    }
    const r5 = s3.element.classList;
    for (const t3 of this.st) t3 in i5 || (r5.remove(t3), this.st.delete(t3));
    for (const t3 in i5) {
      const s4 = !!i5[t3];
      s4 === this.st.has(t3) || this.nt?.has(t3) || (s4 ? (r5.add(t3), this.st.add(t3)) : (r5.remove(t3), this.st.delete(t3)));
    }
    return E;
  }
});

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js
var styles_default2 = i`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiText = class WuiText2 extends i2 {
  constructor() {
    super(...arguments);
    this.variant = "paragraph-500";
    this.color = "fg-300";
    this.align = "left";
    this.lineClamp = void 0;
  }
  render() {
    const classes = {
      [`wui-font-${this.variant}`]: true,
      [`wui-color-${this.color}`]: true,
      [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
    };
    this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
    return b`<slot class=${e3(classes)}></slot>`;
  }
};
WuiText.styles = [resetStyles, styles_default2];
__decorate2([
  n()
], WuiText.prototype, "variant", void 0);
__decorate2([
  n()
], WuiText.prototype, "color", void 0);
__decorate2([
  n()
], WuiText.prototype, "align", void 0);
__decorate2([
  n()
], WuiText.prototype, "lineClamp", void 0);
WuiText = __decorate2([
  customElement("wui-text")
], WuiText);

// node_modules/lit-html/directive-helpers.js
var { I: t2 } = j;
var n2 = (o4) => null === o4 || "object" != typeof o4 && "function" != typeof o4;
var r3 = (o4) => void 0 === o4.strings;

// node_modules/lit-html/async-directive.js
var s = (i5, t3) => {
  const e4 = i5._$AN;
  if (void 0 === e4) return false;
  for (const i6 of e4) i6._$AO?.(t3, false), s(i6, t3);
  return true;
};
var o3 = (i5) => {
  let t3, e4;
  do {
    if (void 0 === (t3 = i5._$AM)) break;
    e4 = t3._$AN, e4.delete(i5), i5 = t3;
  } while (0 === e4?.size);
};
var r4 = (i5) => {
  for (let t3; t3 = i5._$AM; i5 = t3) {
    let e4 = t3._$AN;
    if (void 0 === e4) t3._$AN = e4 = /* @__PURE__ */ new Set();
    else if (e4.has(i5)) break;
    e4.add(i5), c(t3);
  }
};
function h(i5) {
  void 0 !== this._$AN ? (o3(this), this._$AM = i5, r4(this)) : this._$AM = i5;
}
function n3(i5, t3 = false, e4 = 0) {
  const r5 = this._$AH, h3 = this._$AN;
  if (void 0 !== h3 && 0 !== h3.size) if (t3) if (Array.isArray(r5)) for (let i6 = e4; i6 < r5.length; i6++) s(r5[i6], false), o3(r5[i6]);
  else null != r5 && (s(r5, false), o3(r5));
  else s(this, i5);
}
var c = (i5) => {
  i5.type == t.CHILD && (i5._$AP ??= n3, i5._$AQ ??= h);
};
var f2 = class extends i3 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i5, t3, e4) {
    super._$AT(i5, t3, e4), r4(this), this.isConnected = i5._$AU;
  }
  _$AO(i5, t3 = true) {
    i5 !== this.isConnected && (this.isConnected = i5, i5 ? this.reconnected?.() : this.disconnected?.()), t3 && (s(this, i5), o3(this));
  }
  setValue(t3) {
    if (r3(this._$Ct)) this._$Ct._$AI(t3, this);
    else {
      const i5 = [...this._$Ct._$AH];
      i5[this._$Ci] = t3, this._$Ct._$AI(i5, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/private-async-helpers.js
var s2 = class {
  constructor(t3) {
    this.G = t3;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(t3) {
    this.G = t3;
  }
  deref() {
    return this.G;
  }
};
var i4 = class {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ??= new Promise((t3) => this.Z = t3);
  }
  resume() {
    this.Z?.(), this.Y = this.Z = void 0;
  }
};

// node_modules/lit-html/directives/until.js
var n4 = (t3) => !n2(t3) && "function" == typeof t3.then;
var h2 = 1073741823;
var c2 = class extends f2 {
  constructor() {
    super(...arguments), this._$Cwt = h2, this._$Cbt = [], this._$CK = new s2(this), this._$CX = new i4();
  }
  render(...s3) {
    return s3.find((t3) => !n4(t3)) ?? E;
  }
  update(s3, i5) {
    const e4 = this._$Cbt;
    let r5 = e4.length;
    this._$Cbt = i5;
    const o4 = this._$CK, c3 = this._$CX;
    this.isConnected || this.disconnected();
    for (let t3 = 0; t3 < i5.length && !(t3 > this._$Cwt); t3++) {
      const s4 = i5[t3];
      if (!n4(s4)) return this._$Cwt = t3, s4;
      t3 < r5 && s4 === e4[t3] || (this._$Cwt = h2, r5 = 0, Promise.resolve(s4).then(async (t4) => {
        for (; c3.get(); ) await c3.get();
        const i6 = o4.deref();
        if (void 0 !== i6) {
          const e5 = i6._$Cbt.indexOf(s4);
          e5 > -1 && e5 < i6._$Cwt && (i6._$Cwt = e5, i6.setValue(t4));
        }
      }));
    }
    return E;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
};
var m = e2(c2);

// node_modules/@reown/appkit-ui/dist/esm/src/utils/CacheUtil.js
var CacheUtil = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.cache.set(key, value);
  }
  get(key) {
    return this.cache.get(key);
  }
  has(key) {
    return this.cache.has(key);
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
};
var globalSvgCache = new CacheUtil();

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js
var styles_default3 = i`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var ICONS = {
  add: async () => (await import("/assets/add-4AZUHJIX.js")).addSvg,
  allWallets: async () => (await import("/assets/all-wallets-J72LAM4T.js")).allWalletsSvg,
  arrowBottomCircle: async () => (await import("/assets/arrow-bottom-circle-STHQERN4.js")).arrowBottomCircleSvg,
  appStore: async () => (await import("/assets/app-store-O4JNYMHM.js")).appStoreSvg,
  apple: async () => (await import("/assets/apple-MFLIFKUL.js")).appleSvg,
  arrowBottom: async () => (await import("/assets/arrow-bottom-HZU3XNEC.js")).arrowBottomSvg,
  arrowLeft: async () => (await import("/assets/arrow-left-M4WE4W37.js")).arrowLeftSvg,
  arrowRight: async () => (await import("/assets/arrow-right-IM4TWFPN.js")).arrowRightSvg,
  arrowTop: async () => (await import("/assets/arrow-top-3K64YLT4.js")).arrowTopSvg,
  bank: async () => (await import("/assets/bank-VJ2Y4HUM.js")).bankSvg,
  browser: async () => (await import("/assets/browser-A45LM5BO.js")).browserSvg,
  card: async () => (await import("/assets/card-ZDMLOQRH.js")).cardSvg,
  checkmark: async () => (await import("/assets/checkmark-YA2C2FCH.js")).checkmarkSvg,
  checkmarkBold: async () => (await import("/assets/checkmark-bold-NZD4UBVA.js")).checkmarkBoldSvg,
  chevronBottom: async () => (await import("/assets/chevron-bottom-PNB7N7HK.js")).chevronBottomSvg,
  chevronLeft: async () => (await import("/assets/chevron-left-SAZ5VANE.js")).chevronLeftSvg,
  chevronRight: async () => (await import("/assets/chevron-right-ZSPRLMWK.js")).chevronRightSvg,
  chevronTop: async () => (await import("/assets/chevron-top-XBS7LWXC.js")).chevronTopSvg,
  chromeStore: async () => (await import("/assets/chrome-store-YWZ33PAB.js")).chromeStoreSvg,
  clock: async () => (await import("/assets/clock-NF3OQKMO.js")).clockSvg,
  close: async () => (await import("/assets/close-D2BQHWE5.js")).closeSvg,
  compass: async () => (await import("/assets/compass-7AWNZO7D.js")).compassSvg,
  coinPlaceholder: async () => (await import("/assets/coinPlaceholder-WIVJBD7M.js")).coinPlaceholderSvg,
  copy: async () => (await import("/assets/copy-CKCQIBCM.js")).copySvg,
  cursor: async () => (await import("/assets/cursor-PQZ3RLJY.js")).cursorSvg,
  cursorTransparent: async () => (await import("/assets/cursor-transparent-SRCQAY7J.js")).cursorTransparentSvg,
  desktop: async () => (await import("/assets/desktop-JX5GYOKQ.js")).desktopSvg,
  disconnect: async () => (await import("/assets/disconnect-QK4LOZJA.js")).disconnectSvg,
  discord: async () => (await import("/assets/discord-ORMUN6W6.js")).discordSvg,
  etherscan: async () => (await import("/assets/etherscan-ZV3PJPSB.js")).etherscanSvg,
  extension: async () => (await import("/assets/extension-AZIPQ25I.js")).extensionSvg,
  externalLink: async () => (await import("/assets/external-link-HR23RVXP.js")).externalLinkSvg,
  facebook: async () => (await import("/assets/facebook-AHWPAK5H.js")).facebookSvg,
  farcaster: async () => (await import("/assets/farcaster-XQNY7GVZ.js")).farcasterSvg,
  filters: async () => (await import("/assets/filters-PZN4NSDL.js")).filtersSvg,
  github: async () => (await import("/assets/github-ZNWXIOHU.js")).githubSvg,
  google: async () => (await import("/assets/google-X5BFKFRI.js")).googleSvg,
  helpCircle: async () => (await import("/assets/help-circle-P2UVWOZR.js")).helpCircleSvg,
  image: async () => (await import("/assets/image-2WAX6GMM.js")).imageSvg,
  id: async () => (await import("/assets/id-VKQMWIUP.js")).idSvg,
  infoCircle: async () => (await import("/assets/info-circle-WOWSZBAV.js")).infoCircleSvg,
  lightbulb: async () => (await import("/assets/lightbulb-NQ2BDDB5.js")).lightbulbSvg,
  mail: async () => (await import("/assets/mail-5IQEKTYR.js")).mailSvg,
  mobile: async () => (await import("/assets/mobile-RD34NZIZ.js")).mobileSvg,
  more: async () => (await import("/assets/more-J2EDB5TK.js")).moreSvg,
  networkPlaceholder: async () => (await import("/assets/network-placeholder-OMXUJWZI.js")).networkPlaceholderSvg,
  nftPlaceholder: async () => (await import("/assets/nftPlaceholder-3FOM5ZSN.js")).nftPlaceholderSvg,
  off: async () => (await import("/assets/off-7QTHO7BT.js")).offSvg,
  playStore: async () => (await import("/assets/play-store-LV5DE3AB.js")).playStoreSvg,
  plus: async () => (await import("/assets/plus-ANSBSJIQ.js")).plusSvg,
  qrCode: async () => (await import("/assets/qr-code-VYSH3TOZ.js")).qrCodeIcon,
  recycleHorizontal: async () => (await import("/assets/recycle-horizontal-Y2GGCOD7.js")).recycleHorizontalSvg,
  refresh: async () => (await import("/assets/refresh-W2TKR5ZR.js")).refreshSvg,
  search: async () => (await import("/assets/search-IWAZRFVC.js")).searchSvg,
  send: async () => (await import("/assets/send-UJQCLLLU.js")).sendSvg,
  swapHorizontal: async () => (await import("/assets/swapHorizontal-QLHYFGL6.js")).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await import("/assets/swapHorizontalMedium-WNGQCXKV.js")).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await import("/assets/swapHorizontalBold-IDWQ5SIJ.js")).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await import("/assets/swapHorizontalRoundedBold-B3QCPF3K.js")).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await import("/assets/swapVertical-7TGYGVLB.js")).swapVerticalSvg,
  telegram: async () => (await import("/assets/telegram-N33E26UP.js")).telegramSvg,
  threeDots: async () => (await import("/assets/three-dots-3DHIAGRB.js")).threeDotsSvg,
  twitch: async () => (await import("/assets/twitch-SU2W6IQL.js")).twitchSvg,
  twitter: async () => (await import("/assets/x-ROBPU32O.js")).xSvg,
  twitterIcon: async () => (await import("/assets/twitterIcon-XIRCR57S.js")).twitterIconSvg,
  verify: async () => (await import("/assets/verify-IJKJKUFH.js")).verifySvg,
  verifyFilled: async () => (await import("/assets/verify-filled-M6FCTSKY.js")).verifyFilledSvg,
  wallet: async () => (await import("/assets/wallet-MR2CXEQZ.js")).walletSvg,
  walletConnect: async () => (await import("/assets/walletconnect-FOM42F26.js")).walletConnectSvg,
  walletConnectLightBrown: async () => (await import("/assets/walletconnect-FOM42F26.js")).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await import("/assets/walletconnect-FOM42F26.js")).walletConnectBrownSvg,
  walletPlaceholder: async () => (await import("/assets/wallet-placeholder-YR2M2MPT.js")).walletPlaceholderSvg,
  warningCircle: async () => (await import("/assets/warning-circle-QR4Q5X5H.js")).warningCircleSvg,
  x: async () => (await import("/assets/x-ROBPU32O.js")).xSvg,
  info: async () => (await import("/assets/info-JZWQ5ZV6.js")).infoSvg,
  exclamationTriangle: async () => (await import("/assets/exclamation-triangle-FV2YSFCQ.js")).exclamationTriangleSvg,
  reown: async () => (await import("/assets/reown-logo-GTSSGJSL.js")).reownSvg
};
async function getSvg(name) {
  if (globalSvgCache.has(name)) {
    return globalSvgCache.get(name);
  }
  const importFn = ICONS[name] ?? ICONS.copy;
  const svgPromise = importFn();
  globalSvgCache.set(name, svgPromise);
  return svgPromise;
}
var WuiIcon = class WuiIcon2 extends i2 {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "copy";
    this.color = "fg-300";
    this.aspectRatio = "1 / 1";
  }
  render() {
    this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
    return b`${m(getSvg(this.name), b`<div class="fallback"></div>`)}`;
  }
};
WuiIcon.styles = [resetStyles, colorStyles, styles_default3];
__decorate3([
  n()
], WuiIcon.prototype, "size", void 0);
__decorate3([
  n()
], WuiIcon.prototype, "name", void 0);
__decorate3([
  n()
], WuiIcon.prototype, "color", void 0);
__decorate3([
  n()
], WuiIcon.prototype, "aspectRatio", void 0);
WuiIcon = __decorate3([
  customElement("wui-icon")
], WuiIcon);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js
var styles_default4 = i`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiIconBox = class WuiIconBox2 extends i2 {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.backgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.background = "transparent";
    this.border = false;
    this.borderColor = "wui-color-bg-125";
    this.icon = "copy";
  }
  render() {
    const iconSize = this.iconSize || this.size;
    const isLg = this.size === "lg";
    const isXl = this.size === "xl";
    const bgMix = isLg ? "12%" : "16%";
    const borderRadius = isLg ? "xxs" : isXl ? "s" : "3xl";
    const isGray = this.background === "gray";
    const isOpaque = this.background === "opaque";
    const isColorChange = this.backgroundColor === "accent-100" && isOpaque || this.backgroundColor === "success-100" && isOpaque || this.backgroundColor === "error-100" && isOpaque || this.backgroundColor === "inverse-100" && isOpaque;
    let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
    if (isColorChange) {
      bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
    } else if (isGray) {
      bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
    }
    this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
    return b` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
  }
};
WuiIconBox.styles = [resetStyles, elementStyles, styles_default4];
__decorate4([
  n()
], WuiIconBox.prototype, "size", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "backgroundColor", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "iconColor", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "iconSize", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "background", void 0);
__decorate4([
  n({ type: Boolean })
], WuiIconBox.prototype, "border", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "borderColor", void 0);
__decorate4([
  n()
], WuiIconBox.prototype, "icon", void 0);
WuiIconBox = __decorate4([
  customElement("wui-icon-box")
], WuiIconBox);

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js
var styles_default5 = i`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiImage = class WuiImage2 extends i2 {
  constructor() {
    super(...arguments);
    this.src = "./path/to/image.jpg";
    this.alt = "Image";
    this.size = void 0;
  }
  render() {
    this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `;
    return b`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent("onLoadError", { bubbles: true, composed: true }));
  }
};
WuiImage.styles = [resetStyles, colorStyles, styles_default5];
__decorate5([
  n()
], WuiImage.prototype, "src", void 0);
__decorate5([
  n()
], WuiImage.prototype, "alt", void 0);
__decorate5([
  n()
], WuiImage.prototype, "size", void 0);
WuiImage = __decorate5([
  customElement("wui-image")
], WuiImage);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js
var styles_default6 = i`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiTag = class WuiTag2 extends i2 {
  constructor() {
    super(...arguments);
    this.variant = "main";
    this.size = "lg";
  }
  render() {
    this.dataset["variant"] = this.variant;
    this.dataset["size"] = this.size;
    const textVariant = this.size === "md" ? "mini-700" : "micro-700";
    return b`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
WuiTag.styles = [resetStyles, styles_default6];
__decorate6([
  n()
], WuiTag.prototype, "variant", void 0);
__decorate6([
  n()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate6([
  customElement("wui-tag")
], WuiTag);

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/styles.js
var styles_default7 = i`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d = decorators[i5]) r5 = (c3 < 3 ? d(r5) : c3 > 3 ? d(target, key, r5) : d(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
};
var WuiLoadingSpinner = class WuiLoadingSpinner2 extends i2 {
  constructor() {
    super(...arguments);
    this.color = "accent-100";
    this.size = "lg";
  }
  render() {
    this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`;
    this.dataset["size"] = this.size;
    return b`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
WuiLoadingSpinner.styles = [resetStyles, styles_default7];
__decorate7([
  n()
], WuiLoadingSpinner.prototype, "color", void 0);
__decorate7([
  n()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = __decorate7([
  customElement("wui-loading-spinner")
], WuiLoadingSpinner);

export {
  n,
  r2 as r,
  o2 as o,
  e2 as e,
  f2 as f,
  e3 as e2
};
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/async-directive.js:
lit-html/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
lit-html/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
