(() => {
	var t, e, n, i, r = {
			9823: (t, e, n) => {
				"use strict";
				var i = n(58803),
					r = n(97763),
					s = n(93695),
					o = n(44500),
					a = n(76144),
					l = n(45202);
				const u = "undefined" == typeof self ? n(10967) : null;
				class c {
					static init() {
						c.inited || (c.inited = !0, c.isNode = void 0 !== l && null != l.release && "node" === l.release.name, c.isBrowser = "undefined" != typeof window, c.isMobileBrowser = c.isBrowser && this.isMobile(window), c.isAppleMobileBrowser = c.isBrowser && this.isAppleMobile(window), c.isNode ? c.global = n.g : c.isBrowser ? c.global = window : c.global = self)
					}
					static fromB64ToArray(t) {
						if (null == t) return null;
						if (c.isNode) return new Uint8Array(Buffer.from(t, "base64"));
						{
							const e = c.global.atob(t),
								n = new Uint8Array(e.length);
							for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
							return n
						}
					}
					static fromUrlB64ToArray(t) {
						return c.fromB64ToArray(c.fromUrlB64ToB64(t))
					}
					static fromHexToArray(t) {
						if (c.isNode) return new Uint8Array(Buffer.from(t, "hex"));
						{
							const e = new Uint8Array(t.length / 2);
							for (let n = 0; n < t.length; n += 2) e[n / 2] = parseInt(t.substr(n, 2), 16);
							return e
						}
					}
					static fromUtf8ToArray(t) {
						if (c.isNode) return new Uint8Array(Buffer.from(t, "utf8"));
						{
							const e = unescape(encodeURIComponent(t)),
								n = new Uint8Array(e.length);
							for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
							return n
						}
					}
					static fromByteStringToArray(t) {
						if (null == t) return null;
						const e = new Uint8Array(t.length);
						for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
						return e
					}
					static fromBufferToB64(t) {
						if (null == t) return null;
						if (c.isNode) return Buffer.from(t).toString("base64");
						{
							let e = "";
							const n = new Uint8Array(t);
							for (let t = 0; t < n.byteLength; t++) e += String.fromCharCode(n[t]);
							return c.global.btoa(e)
						}
					}
					static fromBufferToUrlB64(t) {
						return c.fromB64toUrlB64(c.fromBufferToB64(t))
					}
					static fromB64toUrlB64(t) {
						return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
					}
					static fromBufferToUtf8(t) {
						return r.hp.from(t).toString("utf8")
					}
					static fromBufferToByteString(t) {
						return String.fromCharCode.apply(null, new Uint8Array(t))
					}
					static fromBufferToHex(t) {
						if (c.isNode) return Buffer.from(t).toString("hex");
						{
							const e = new Uint8Array(t);
							return Array.prototype.map.call(e, (t => ("00" + t.toString(16)).slice(-2))).join("")
						}
					}
					static hexStringToArrayBuffer(t) {
						if (t.length % 2 != 0) throw "HexString has to be an even length";
						const e = new ArrayBuffer(t.length / 2),
							n = new Uint8Array(e);
						for (let i = 0; i < n.length; i++) {
							const e = t.substr(2 * i, 2),
								r = parseInt(e, 16);
							n[i] = r
						}
						return e
					}
					static fromUrlB64ToB64(t) {
						let e = t.replace(/-/g, "+").replace(/_/g, "/");
						switch (e.length % 4) {
							case 0:
								break;
							case 2:
								e += "==";
								break;
							case 3:
								e += "=";
								break;
							default:
								throw new Error("Illegal base64url string!")
						}
						return e
					}
					static fromUrlB64ToUtf8(t) {
						return c.fromB64ToUtf8(c.fromUrlB64ToB64(t))
					}
					static fromUtf8ToB64(t) {
						return c.isNode ? Buffer.from(t, "utf8").toString("base64") : decodeURIComponent(escape(c.global.btoa(t)))
					}
					static fromUtf8ToUrlB64(t) {
						return c.fromBufferToUrlB64(c.fromUtf8ToArray(t))
					}
					static fromB64ToUtf8(t) {
						return c.isNode ? Buffer.from(t, "base64").toString("utf8") : decodeURIComponent(escape(c.global.atob(t)))
					}
					static newGuid() {
						return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
							const e = 16 * Math.random() | 0;
							return ("x" === t ? e : 3 & e | 8).toString(16)
						}))
					}
					static isGuid(t) {
						return RegExp(c.guidRegex, "i").test(t)
					}
					static getHostname(t) {
						if (c.isNullOrWhitespace(t)) return null;
						if ((t = t.trim()).startsWith("data:")) return null;
						if (t.startsWith("about:")) return null;
						if (t.startsWith("file:")) return null;
						if (t.indexOf("!") > 0) return null;
						try {
							const e = (0, a.EW)(t, {
								validHosts: this.validHosts
							});
							if (null != e) return e
						} catch (e) {
							return null
						}
						return null
					}
					static getHost(t) {
						const e = c.getUrl(t);
						try {
							return null != e && "" !== e.host ? e.host : null
						} catch (n) {
							return null
						}
					}
					static getDomain(t) {
						if (c.isNullOrWhitespace(t)) return null;
						if ((t = t.trim()).startsWith("data:")) return null;
						if (t.startsWith("about:")) return null;
						try {
							const e = (0, a.qg)(t, {
								validHosts: this.validHosts,
								allowPrivateDomains: !0
							});
							if (null != e && null != e.hostname) return "localhost" === e.hostname || e.isIp ? e.hostname : null != e.domain ? e.domain : null
						} catch (e) {
							return null
						}
						return null
					}
					static getQueryParams(t) {
						const e = c.getUrl(t);
						if (null == e || null == e.search || "" === e.search) return null;
						const n = new Map;
						return ("?" === e.search[0] ? e.search.substr(1) : e.search).split("&").forEach((t => {
							const e = t.split("=");
							e.length < 1 || n.set(decodeURIComponent(e[0]).toLowerCase(), null == e[1] ? "" : decodeURIComponent(e[1]))
						})), n
					}
					static getSortFunction(t, e) {
						return (n, i) => null == n[e] && null != i[e] ? -1 : null != n[e] && null == i[e] ? 1 : null == n[e] && null == i[e] ? 0 : t.collator ? t.collator.compare(n[e], i[e]) : n[e].localeCompare(i[e])
					}
					static isNullOrWhitespace(t) {
						return null == t || "string" != typeof t || "" === t.trim()
					}
					static isNullOrEmpty(t) {
						return null == t || "string" != typeof t || "" == t
					}
					static isPromise(t) {
						return null != t && "function" == typeof t.then && "function" == typeof t.catch
					}
					static nameOf(t) {
						return t
					}
					static assign(t, e) {
						return Object.assign(t, e)
					}
					static iterateEnum(t) {
						return Object.keys(t).filter((t => Number.isNaN(+t))).map((e => t[e]))
					}
					static getUrl(t) {
						return this.isNullOrWhitespace(t) ? null : (t = t.trim(), c.getUrlObject(t))
					}
					static camelToPascalCase(t) {
						return t.charAt(0).toUpperCase() + t.slice(1)
					}
					static pickTextColorBasedOnBgColor(t, e = 186, n = !1) {
						const i = "#" === t.charAt(0) ? t.substring(1, 7) : t;
						return .299 * parseInt(i.substring(0, 2), 16) + .587 * parseInt(i.substring(2, 4), 16) + .114 * parseInt(i.substring(4, 6), 16) > e ? n ? "black" : "black !important" : n ? "white" : "white !important"
					}
					static stringToColor(t) {
						let e = 0;
						for (let i = 0; i < t.length; i++) e = t.charCodeAt(i) + ((e << 5) - e);
						let n = "#";
						for (let i = 0; i < 3; i++) {
							n += ("00" + (e >> 8 * i & 255).toString(16)).substr(-2)
						}
						return n
					}
					static getContainerService() {
						if (null == this.global.bitwardenContainerService) throw new Error("global bitwardenContainerService not initialized.");
						return this.global.bitwardenContainerService
					}
					static validateHexColor(t) {
						return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t)
					}
					static mapToRecord(t) {
						return null == t ? null : t instanceof Map ? Object.fromEntries(t) : t
					}
					static recordToMap(t) {
						if (null == t) return null;
						if (t instanceof Map) return t;
						const e = Object.entries(t);
						return 0 === e.length ? new Map : isNaN(Number(e[0][0])) ? new Map(e) : new Map(e.map((t => [Number(t[0]), t[1]])))
					}
					static merge(t, e) {
						return Object.assign(t, e)
					}
					static encodeRFC3986URIComponent(t) {
						return encodeURIComponent(t).replace(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`))
					}
					static normalizePath(t) {
						return i.normalize(decodeURIComponent(t)).replace(/^(\.\.(\/|\\|$))+/, "")
					}
					static isMobile(t) {
						let e = !1;
						var n;
						return n = t.navigator.userAgent || t.navigator.vendor || t.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))) && (e = !0), e || null != t.navigator.userAgent.match(/iPad/i)
					}
					static delay(t) {
						return new Promise((e => setTimeout(e, t)))
					}
					static asyncToObservable(t) {
						return (0, s.of)(void 0).pipe((0, o.n)((() => t())))
					}
					static daysRemaining(t) {
						const e = t.getTime() - Date.now();
						return Math.max(0, Math.floor(e / 864e5))
					}
					static isAppleMobile(t) {
						return null != t.navigator.userAgent.match(/iPhone/i) || null != t.navigator.userAgent.match(/iPad/i)
					}
					static getUrlObject(t) {
						const e = t.indexOf("://") > -1;
						if (!e && t.indexOf(".") > -1) t = "http://" + t;
						else if (!e) return null;
						try {
							return null != u ? new u.URL(t) : new URL(t)
						} catch (n) {}
						return null
					}
				}
				var h;

				function d(t) {
					return t in h ? h[t] : "Unknown encryption type " + t
				}
				c.inited = !1, c.isNode = !1, c.isBrowser = !0, c.isMobileBrowser = !1, c.isAppleMobileBrowser = !1, c.global = null, c.regexpEmojiPresentation = /(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/g, c.validHosts = ["localhost"], c.originalMinimumPasswordLength = 8, c.minimumPasswordLength = 12, c.DomainMatchBlacklist = new Map([
						["google.com", new Set(["script.google.com"])]
					]), c.guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/, c.init(),
					function(t) {
						t[t.AesCbc256_B64 = 0] = "AesCbc256_B64", t[t.AesCbc128_HmacSha256_B64 = 1] = "AesCbc128_HmacSha256_B64", t[t.AesCbc256_HmacSha256_B64 = 2] = "AesCbc256_HmacSha256_B64", t[t.Rsa2048_OaepSha256_B64 = 3] = "Rsa2048_OaepSha256_B64", t[t.Rsa2048_OaepSha1_B64 = 4] = "Rsa2048_OaepSha1_B64", t[t.Rsa2048_OaepSha256_HmacSha256_B64 = 5] = "Rsa2048_OaepSha256_HmacSha256_B64", t[t.Rsa2048_OaepSha1_HmacSha256_B64 = 6] = "Rsa2048_OaepSha1_HmacSha256_B64"
					}(h || (h = {}));
				const y = {
					[h.AesCbc256_B64]: 2,
					[h.AesCbc128_HmacSha256_B64]: 3,
					[h.AesCbc256_HmacSha256_B64]: 3,
					[h.Rsa2048_OaepSha256_B64]: 1,
					[h.Rsa2048_OaepSha1_B64]: 1,
					[h.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
					[h.Rsa2048_OaepSha1_HmacSha256_B64]: 2
				};
				var p, m, f, g, v, w, b;
				! function(t) {
					t[t.Direct = 0] = "Direct", t[t.Azure = 1] = "Azure"
				}(p || (p = {})),
				function(t) {
					t[t.ServerAuthorization = 1] = "ServerAuthorization", t[t.LocalAuthorization = 2] = "LocalAuthorization"
				}(m || (m = {})),
				function(t) {
					t.Local = "local", t.Memory = "memory", t.Session = "session"
				}(f || (f = {})),
				function(t) {
					t.Auto = "auto", t.Pin = "pin"
				}(g || (g = {})),
				function(t) {
					t[t.Debug = 0] = "Debug", t[t.Info = 1] = "Info", t[t.Warning = 2] = "Warning", t[t.Error = 3] = "Error"
				}(v || (v = {})),
				function(t) {
					t.Both = "both", t.Disk = "disk", t.Memory = "memory"
				}(w || (w = {})),
				function(t) {
					t.System = "system", t.Light = "light", t.Dark = "dark", t.Nord = "nord", t.SolarizedDark = "solarizedDark"
				}(b || (b = {}));
				class D {
					constructor(t, e) {
						if (null == t) throw new Error("Must provide key");
						if (null == e)
							if (32 === t.byteLength) e = h.AesCbc256_B64;
							else {
								if (64 !== t.byteLength) throw new Error("Unable to determine encType.");
								e = h.AesCbc256_HmacSha256_B64
							} if (this.key = t, this.encType = e, e === h.AesCbc256_B64 && 32 === t.byteLength) this.encKey = t, this.macKey = null;
						else if (e === h.AesCbc128_HmacSha256_B64 && 32 === t.byteLength) this.encKey = t.slice(0, 16), this.macKey = t.slice(16, 32);
						else {
							if (e !== h.AesCbc256_HmacSha256_B64 || 64 !== t.byteLength) throw new Error("Unsupported encType/key length.");
							this.encKey = t.slice(0, 32), this.macKey = t.slice(32, 64)
						}
						this.keyB64 = c.fromBufferToB64(this.key), this.encKeyB64 = c.fromBufferToB64(this.encKey), null != this.macKey && (this.macKeyB64 = c.fromBufferToB64(this.macKey))
					}
					toJSON() {
						return {
							keyB64: this.keyB64
						}
					}
					static fromString(t) {
						if (null == t) return null;
						const e = c.fromB64ToArray(t);
						return new D(e)
					}
					static fromJSON(t) {
						return D.fromString(null == t ? void 0 : t.keyB64)
					}
				}
				class S {
					constructor(t, e = null) {
						this.isDev = t, this.filter = e, this.timersMap = new Map
					}
					debug(t, ...e) {
						this.isDev && this.write(v.Debug, t, ...e)
					}
					info(t, ...e) {
						this.write(v.Info, t, ...e)
					}
					warning(t, ...e) {
						this.write(v.Warning, t, ...e)
					}
					error(t, ...e) {
						this.write(v.Error, t, ...e)
					}
					write(t, e, ...n) {
						if (null == this.filter || !this.filter(t)) switch (t) {
							case v.Debug:
							case v.Info:
								console.log(e, ...n);
								break;
							case v.Warning:
								console.warn(e, ...n);
								break;
							case v.Error:
								console.error(e, ...n)
						}
					}
				}
				class N {
					constructor(t, e) {
						this.keyService = t, this.encryptService = e
					}
					attachToGlobal(t) {
						t.bitwardenContainerService || (t.bitwardenContainerService = this)
					}
					getKeyService() {
						if (null == this.keyService) throw new Error("ContainerService.keyService not initialized.");
						return this.keyService
					}
					getEncryptService() {
						if (null == this.encryptService) throw new Error("ContainerService.encryptService not initialized.");
						return this.encryptService
					}
				}
				var O = n(52744),
					C = n(55367),
					B = function(t, e, n, i) {
						return new(n || (n = Promise))((function(r, s) {
							function o(t) {
								try {
									l(i.next(t))
								} catch (e) {
									s(e)
								}
							}

							function a(t) {
								try {
									l(i.throw(t))
								} catch (e) {
									s(e)
								}
							}

							function l(t) {
								var e;
								t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
									t(e)
								}))).then(o, a)
							}
							l((i = i.apply(t, e || [])).next())
						}))
					};
				class k {
					constructor(t) {
						var e;
						if (null == (null === (e = null == t ? void 0 : t.crypto) || void 0 === e ? void 0 : e.subtle)) throw new Error("Could not instantiate WebCryptoFunctionService. Could not locate Subtle crypto.");
						this.crypto = t.crypto, this.subtle = this.crypto.subtle, this.wasmSupported = this.checkIfWasmSupported()
					}
					pbkdf2(t, e, n, i) {
						return B(this, void 0, void 0, (function*() {
							const r = "sha256" === n ? 256 : 512,
								s = this.toBuf(t),
								o = {
									name: "PBKDF2",
									salt: this.toBuf(e),
									iterations: i,
									hash: {
										name: this.toWebCryptoAlgorithm(n)
									}
								},
								a = yield this.subtle.importKey("raw", s, {
									name: "PBKDF2"
								}, !1, ["deriveBits"]), l = yield this.subtle.deriveBits(o, a, r);
							return new Uint8Array(l)
						}))
					}
					argon2(t, e, n, i, r) {
						return B(this, void 0, void 0, (function*() {
							if (!this.wasmSupported) throw "Webassembly support is required for the Argon2 KDF feature.";
							const s = new Uint8Array(this.toBuf(t)),
								o = new Uint8Array(this.toBuf(e)),
								a = yield O.hash({
									pass: s,
									salt: o,
									time: n,
									mem: i,
									parallelism: r,
									hashLen: 32,
									type: O.ArgonType.Argon2id
								});
							return O.unloadRuntime(), a.hash
						}))
					}
					hkdf(t, e, n, i, r) {
						return B(this, void 0, void 0, (function*() {
							const s = {
									name: "HKDF",
									salt: this.toBuf(e),
									info: this.toBuf(n),
									hash: {
										name: this.toWebCryptoAlgorithm(r)
									}
								},
								o = yield this.subtle.importKey("raw", t, {
									name: "HKDF"
								}, !1, ["deriveBits"]), a = yield this.subtle.deriveBits(s, o, 8 * i);
							return new Uint8Array(a)
						}))
					}
					hkdfExpand(t, e, n, i) {
						return B(this, void 0, void 0, (function*() {
							const r = "sha256" === i ? 32 : 64;
							if (n > 255 * r) throw new Error("outputByteSize is too large.");
							if (new Uint8Array(t).length < r) throw new Error("prk is too small.");
							const s = this.toBuf(e),
								o = new Uint8Array(s);
							let a = 0,
								l = new Uint8Array(0);
							const u = Math.ceil(n / r),
								c = new Uint8Array(u * r);
							for (let e = 0; e < u; e++) {
								const r = new Uint8Array(l.length + o.length + 1);
								if (r.set(l), r.set(o, l.length), r.set([e + 1], r.length - 1), l = new Uint8Array(yield this.hmac(r, t, i)), c.set(l, a), a += l.length, a >= n) break
							}
							return c.slice(0, n)
						}))
					}
					hash(t, e) {
						return B(this, void 0, void 0, (function*() {
							if ("md5" === e) {
								const e = C.md.md5.create(),
									n = this.toByteString(t);
								return e.update(n, "raw"), c.fromByteStringToArray(e.digest().data)
							}
							const n = this.toBuf(t),
								i = yield this.subtle.digest({
									name: this.toWebCryptoAlgorithm(e)
								}, n);
							return new Uint8Array(i)
						}))
					}
					hmac(t, e, n) {
						return B(this, void 0, void 0, (function*() {
							const i = {
									name: "HMAC",
									hash: {
										name: this.toWebCryptoAlgorithm(n)
									}
								},
								r = yield this.subtle.importKey("raw", e, i, !1, ["sign"]), s = yield this.subtle.sign(i, r, t);
							return new Uint8Array(s)
						}))
					}
					compare(t, e) {
						return B(this, void 0, void 0, (function*() {
							const n = yield this.randomBytes(32), i = {
								name: "HMAC",
								hash: {
									name: "SHA-256"
								}
							}, r = yield this.subtle.importKey("raw", n, i, !1, ["sign"]), s = yield this.subtle.sign(i, r, t), o = yield this.subtle.sign(i, r, e);
							if (s.byteLength !== o.byteLength) return !1;
							const a = new Uint8Array(s),
								l = new Uint8Array(o);
							for (let t = 0; t < l.length; t++)
								if (a[t] !== l[t]) return !1;
							return !0
						}))
					}
					hmacFast(t, e, n) {
						const i = C.hmac.create();
						i.start(n, e), i.update(t);
						const r = i.digest().getBytes();
						return Promise.resolve(r)
					}
					compareFast(t, e) {
						return B(this, void 0, void 0, (function*() {
							const n = yield this.randomBytes(32), i = new Uint32Array(n), r = C.util.createBuffer();
							for (let t = 0; t < i.length; t++) r.putInt32(i[t]);
							const s = r.getBytes(),
								o = C.hmac.create();
							o.start("sha256", s), o.update(t);
							const a = o.digest().getBytes();
							o.start("sha256", null), o.update(e);
							return a === o.digest().getBytes()
						}))
					}
					aesEncrypt(t, e, n) {
						return B(this, void 0, void 0, (function*() {
							const i = yield this.subtle.importKey("raw", n, {
								name: "AES-CBC"
							}, !1, ["encrypt"]), r = yield this.subtle.encrypt({
								name: "AES-CBC",
								iv: e
							}, i, t);
							return new Uint8Array(r)
						}))
					}
					aesDecryptFastParameters(t, e, n, i) {
						const r = {};
						return null != i.meta && (r.encKey = i.meta.encKeyByteString, r.macKey = i.meta.macKeyByteString), null == r.encKey && (r.encKey = C.util.decode64(i.encKeyB64)), r.data = C.util.decode64(t), r.iv = C.util.decode64(e), r.macData = r.iv + r.data, null == r.macKey && null != i.macKeyB64 && (r.macKey = C.util.decode64(i.macKeyB64)), null != n && (r.mac = C.util.decode64(n)), null == i.meta && (i.meta = {}), null == i.meta.encKeyByteString && (i.meta.encKeyByteString = r.encKey), null != r.macKey && null == i.meta.macKeyByteString && (i.meta.macKeyByteString = r.macKey), r
					}
					aesDecryptFast({
						mode: t,
						parameters: e
					}) {
						const n = C.cipher.createDecipher(this.toWebCryptoAesMode(t), e.encKey),
							i = {};
						"cbc" === t && (i.iv = e.iv);
						const r = C.util.createBuffer(e.data);
						n.start(i), n.update(r), n.finish();
						const s = n.output.toString();
						return Promise.resolve(s)
					}
					aesDecrypt(t, e, n, i) {
						return B(this, void 0, void 0, (function*() {
							if ("ecb" === i) {
								const e = {
										data: this.toByteString(t),
										encKey: this.toByteString(n)
									},
									i = yield this.aesDecryptFast({
										mode: "ecb",
										parameters: e
									});
								return c.fromByteStringToArray(i)
							}
							const r = yield this.subtle.importKey("raw", n, {
								name: "AES-CBC"
							}, !1, ["decrypt"]);
							if (null == e) throw new Error("IV is required for CBC mode.");
							const s = yield this.subtle.decrypt({
								name: "AES-CBC",
								iv: e
							}, r, t);
							return new Uint8Array(s)
						}))
					}
					rsaEncrypt(t, e, n) {
						return B(this, void 0, void 0, (function*() {
							const i = {
									name: "RSA-OAEP",
									hash: {
										name: this.toWebCryptoAlgorithm(n)
									}
								},
								r = yield this.subtle.importKey("spki", e, i, !1, ["encrypt"]), s = yield this.subtle.encrypt(i, r, t);
							return new Uint8Array(s)
						}))
					}
					rsaDecrypt(t, e, n) {
						return B(this, void 0, void 0, (function*() {
							const i = {
									name: "RSA-OAEP",
									hash: {
										name: this.toWebCryptoAlgorithm(n)
									}
								},
								r = yield this.subtle.importKey("pkcs8", e, i, !1, ["decrypt"]), s = yield this.subtle.decrypt(i, r, t);
							return new Uint8Array(s)
						}))
					}
					rsaExtractPublicKey(t) {
						return B(this, void 0, void 0, (function*() {
							const e = {
									name: "RSA-OAEP",
									hash: {
										name: this.toWebCryptoAlgorithm("sha1")
									}
								},
								n = yield this.subtle.importKey("pkcs8", t, e, !0, ["decrypt"]), i = yield this.subtle.exportKey("jwk", n), r = {
									kty: "RSA",
									e: i.e,
									n: i.n,
									alg: "RSA-OAEP",
									ext: !0
								}, s = yield this.subtle.importKey("jwk", r, e, !0, ["encrypt"]), o = yield this.subtle.exportKey("spki", s);
							return new Uint8Array(o)
						}))
					}
					aesGenerateKey() {
						return B(this, arguments, void 0, (function*(t = 960) {
							if (512 === t) {
								const t = yield this.aesGenerateKey(256), e = yield this.aesGenerateKey(256);
								return new Uint8Array([...t, ...e])
							}
							const e = {
									name: "AES-CBC",
									length: t
								},
								n = yield this.subtle.generateKey(e, !0, ["encrypt", "decrypt"]), i = yield this.subtle.exportKey("raw", n);
							return new Uint8Array(i)
						}))
					}
					rsaGenerateKeyPair(t) {
						return B(this, void 0, void 0, (function*() {
							const e = {
									name: "RSA-OAEP",
									modulusLength: t,
									publicExponent: new Uint8Array([1, 0, 1]),
									hash: {
										name: this.toWebCryptoAlgorithm("sha1")
									}
								},
								n = yield this.subtle.generateKey(e, !0, ["encrypt", "decrypt"]), i = yield this.subtle.exportKey("spki", n.publicKey), r = yield this.subtle.exportKey("pkcs8", n.privateKey);
							return [new Uint8Array(i), new Uint8Array(r)]
						}))
					}
					randomBytes(t) {
						const e = new Uint8Array(t);
						return this.crypto.getRandomValues(e), Promise.resolve(e)
					}
					toBuf(t) {
						let e;
						return e = "string" == typeof t ? c.fromUtf8ToArray(t) : t, e
					}
					toByteString(t) {
						let e;
						return e = "string" == typeof t ? C.util.encodeUtf8(t) : c.fromBufferToByteString(t), e
					}
					toWebCryptoAlgorithm(t) {
						if ("md5" === t) throw new Error("MD5 is not supported in WebCrypto.");
						return "sha1" === t ? "SHA-1" : "sha256" === t ? "SHA-256" : "SHA-512"
					}
					toWebCryptoAesMode(t) {
						return "cbc" === t ? "AES-CBC" : "AES-ECB"
					}
					checkIfWasmSupported() {
						try {
							if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
								const t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
								if (t instanceof WebAssembly.Module) return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
							}
						} catch (t) {
							return !1
						}
						return !1
					}
				}
				var A = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class x {
					constructor(t) {
						this.buffer = t, this.encryptionType = null, this.dataBytes = null, this.ivBytes = null, this.macBytes = null;
						const e = t,
							n = e[0];
						switch (n) {
							case h.AesCbc128_HmacSha256_B64:
							case h.AesCbc256_HmacSha256_B64: {
								const t = 50;
								e.length < t && this.throwDecryptionError(), this.ivBytes = e.slice(1, 17), this.macBytes = e.slice(17, 49), this.dataBytes = e.slice(49);
								break
							}
							case h.AesCbc256_B64: {
								const t = 18;
								e.length < t && this.throwDecryptionError(), this.ivBytes = e.slice(1, 17), this.dataBytes = e.slice(17);
								break
							}
							default:
								this.throwDecryptionError()
						}
						this.encryptionType = n
					}
					throwDecryptionError() {
						throw new Error("Error parsing encrypted ArrayBuffer: data is corrupted or has an invalid format.")
					}
					static fromResponse(t) {
						return A(this, void 0, void 0, (function*() {
							const e = yield t.arrayBuffer();
							if (null == e) throw new Error("Cannot create EncArrayBuffer from Response - Response is empty");
							return new x(new Uint8Array(e))
						}))
					}
					static fromB64(t) {
						const e = c.fromB64ToArray(t);
						return new x(e)
					}
				}
				var _ = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				const E = "[error: cannot decrypt]";
				class K {
					constructor(t, e, n, i) {
						null != e ? this.initFromData(t, e, n, i) : this.initFromEncryptedString(t)
					}
					get ivBytes() {
						return null == this.iv ? null : c.fromB64ToArray(this.iv)
					}
					get macBytes() {
						return null == this.mac ? null : c.fromB64ToArray(this.mac)
					}
					get dataBytes() {
						return null == this.data ? null : c.fromB64ToArray(this.data)
					}
					toJSON() {
						return this.encryptedString
					}
					static fromJSON(t) {
						return null == t ? null : new K(t)
					}
					initFromData(t, e, n, i) {
						this.encryptedString = null != n ? t + "." + n + "|" + e : t + "." + e, null != i && (this.encryptedString = this.encryptedString + "|" + i), this.encryptionType = t, this.data = e, this.iv = n, this.mac = i
					}
					initFromEncryptedString(t) {
						if (this.encryptedString = t, !this.encryptedString) return;
						const {
							encType: e,
							encPieces: n
						} = K.parseEncryptedString(this.encryptedString);
						if (this.encryptionType = e, n.length === y[e]) switch (e) {
							case h.AesCbc128_HmacSha256_B64:
							case h.AesCbc256_HmacSha256_B64:
								this.iv = n[0], this.data = n[1], this.mac = n[2];
								break;
							case h.AesCbc256_B64:
								this.iv = n[0], this.data = n[1];
								break;
							case h.Rsa2048_OaepSha256_B64:
							case h.Rsa2048_OaepSha1_B64:
								this.data = n[0];
								break;
							case h.Rsa2048_OaepSha256_HmacSha256_B64:
							case h.Rsa2048_OaepSha1_HmacSha256_B64:
								this.data = n[0], this.mac = n[1];
								break;
							default:
								return
						}
					}
					static parseEncryptedString(t) {
						const e = t.split(".");
						let n, i = null;
						if (2 === e.length) try {
							n = parseInt(e[0], null), i = e[1].split("|")
						} catch (r) {
							return {
								encType: NaN,
								encPieces: []
							}
						} else i = t.split("|"), n = 3 === i.length ? h.AesCbc128_HmacSha256_B64 : h.AesCbc256_B64;
						return {
							encType: n,
							encPieces: i
						}
					}
					static isSerializedEncString(t) {
						if (null == t) return !1;
						const {
							encType: e,
							encPieces: n
						} = this.parseEncryptedString(t);
						return !isNaN(e) && 0 !== n.length && y[e] === n.length
					}
					decrypt(t) {
						return _(this, arguments, void 0, (function*(t, e = null, n) {
							if (null != this.decryptedValue) return this.decryptedValue;
							let i = "provided-key";
							try {
								if (null == e)
									if (e = yield this.getKeyForDecryption(t), i = null == t ? `domain-orgkey-${t}` : "domain-userkey|masterkey", null != t) i = `domain-orgkey-${t}`;
									else {
										const t = c.getContainerService().getKeyService();
										i = null == (yield t.getUserKey()) ? "domain-withlegacysupport-masterkey" : "domain-withlegacysupport-userkey"
									} if (null == e) throw new Error("No key to decrypt EncString with orgId " + t);
								const r = c.getContainerService().getEncryptService();
								this.decryptedValue = yield r.decryptToUtf8(this, e, null == i ? n : `${i}${n||""}`)
							} catch (r) {
								this.decryptedValue = E
							}
							return this.decryptedValue
						}))
					}
					decryptWithKey(t, e) {
						return _(this, arguments, void 0, (function*(t, e, n = "domain-withkey") {
							try {
								if (null == t) throw new Error("No key to decrypt EncString");
								this.decryptedValue = yield e.decryptToUtf8(this, t, n)
							} catch (i) {
								this.decryptedValue = E
							}
							return this.decryptedValue
						}))
					}
					getKeyForDecryption(t) {
						return _(this, void 0, void 0, (function*() {
							const e = c.getContainerService().getKeyService();
							return null != t ? yield e.getOrgKey(t): yield e.getUserKeyWithLegacySupport()
						}))
					}
				}
				class T {}
				var P = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class U {
					constructor(t, e, n) {
						this.cryptoFunctionService = t, this.logService = e, this.logMacFailures = n
					}
					encrypt(t, e) {
						return P(this, void 0, void 0, (function*() {
							if (null == e) throw new Error("No encryption key provided.");
							if (null == t) return Promise.resolve(null);
							let n;
							n = "string" == typeof t ? c.fromUtf8ToArray(t) : t;
							const i = yield this.aesEncrypt(n, e), r = c.fromBufferToB64(i.iv), s = c.fromBufferToB64(i.data), o = null != i.mac ? c.fromBufferToB64(i.mac) : null;
							return new K(i.key.encType, s, r, o)
						}))
					}
					encryptToBytes(t, e) {
						return P(this, void 0, void 0, (function*() {
							if (null == e) throw new Error("No encryption key provided.");
							const n = yield this.aesEncrypt(t, e);
							let i = 0;
							null != n.mac && (i = n.mac.byteLength);
							const r = new Uint8Array(1 + n.iv.byteLength + i + n.data.byteLength);
							return r.set([n.key.encType]), r.set(new Uint8Array(n.iv), 1), null != n.mac && r.set(new Uint8Array(n.mac), 1 + n.iv.byteLength), r.set(new Uint8Array(n.data), 1 + n.iv.byteLength + i), new x(r)
						}))
					}
					decryptToUtf8(t, e) {
						return P(this, arguments, void 0, (function*(t, e, n = "no context") {
							if (null == e) throw new Error("No key provided for decryption.");
							if (null != (e = this.resolveLegacyKey(e, t)).macKey && null == (null == t ? void 0 : t.mac)) return this.logService.error("[Encrypt service] Key has mac key but payload is missing mac bytes. Key type " + d(e.encType) + "Payload type " + d(t.encryptionType), "Decrypt context: " + n), null;
							if (e.encType !== t.encryptionType) return this.logService.error("[Encrypt service] Key encryption type does not match payload encryption type. Key type " + d(e.encType) + "Payload type " + d(t.encryptionType), "Decrypt context: " + n), null;
							const i = this.cryptoFunctionService.aesDecryptFastParameters(t.data, t.iv, t.mac, e);
							if (null != i.macKey && null != i.mac) {
								const r = yield this.cryptoFunctionService.hmacFast(i.macData, i.macKey, "sha256");
								if (!(yield this.cryptoFunctionService.compareFast(i.mac, r))) return this.logMacFailed("[Encrypt service] decryptToUtf8 MAC comparison failed. Key or payload has changed. Key type " + d(e.encType) + "Payload type " + d(t.encryptionType) + " Decrypt context: " + n), null
							}
							return yield this.cryptoFunctionService.aesDecryptFast({
								mode: "cbc",
								parameters: i
							})
						}))
					}
					decryptToBytes(t, e) {
						return P(this, arguments, void 0, (function*(t, e, n = "no context") {
							if (null == e) throw new Error("No encryption key provided.");
							if (null == t) throw new Error("Nothing provided for decryption.");
							if (null != (e = this.resolveLegacyKey(e, t)).macKey && null == t.macBytes) return this.logService.error("[Encrypt service] Key has mac key but payload is missing mac bytes. Key type " + d(e.encType) + " Payload type " + d(t.encryptionType) + " Decrypt context: " + n), null;
							if (e.encType !== t.encryptionType) return this.logService.error("[Encrypt service] Key encryption type does not match payload encryption type. Key type " + d(e.encType) + " Payload type " + d(t.encryptionType) + " Decrypt context: " + n), null;
							if (null != e.macKey && null != t.macBytes) {
								const i = new Uint8Array(t.ivBytes.byteLength + t.dataBytes.byteLength);
								i.set(new Uint8Array(t.ivBytes), 0), i.set(new Uint8Array(t.dataBytes), t.ivBytes.byteLength);
								const r = yield this.cryptoFunctionService.hmac(i, e.macKey, "sha256");
								if (null === r) return this.logMacFailed("[Encrypt service#decryptToBytes] Failed to compute MAC. Key type " + d(e.encType) + " Payload type " + d(t.encryptionType) + " Decrypt context: " + n), null;
								if (!(yield this.cryptoFunctionService.compare(t.macBytes, r))) return this.logMacFailed("[Encrypt service#decryptToBytes]: MAC comparison failed. Key or payload has changed. Key type " + d(e.encType) + " Payload type " + d(t.encryptionType) + " Decrypt context: " + n), null
							}
							const i = yield this.cryptoFunctionService.aesDecrypt(t.dataBytes, t.ivBytes, e.encKey, "cbc");
							return null != i ? i : null
						}))
					}
					rsaEncrypt(t, e) {
						return P(this, void 0, void 0, (function*() {
							if (null == t) throw new Error("No data provided for encryption.");
							if (null == e) throw new Error("No public key provided for encryption.");
							const n = yield this.cryptoFunctionService.rsaEncrypt(t, e, "sha1");
							return new K(h.Rsa2048_OaepSha1_B64, c.fromBufferToB64(n))
						}))
					}
					rsaDecrypt(t, e) {
						return P(this, void 0, void 0, (function*() {
							if (null == t) throw new Error("[Encrypt service] rsaDecrypt: No data provided for decryption.");
							let n;
							switch (t.encryptionType) {
								case h.Rsa2048_OaepSha1_B64:
								case h.Rsa2048_OaepSha1_HmacSha256_B64:
									n = "sha1";
									break;
								case h.Rsa2048_OaepSha256_B64:
								case h.Rsa2048_OaepSha256_HmacSha256_B64:
									n = "sha256";
									break;
								default:
									throw new Error("Invalid encryption type.")
							}
							if (null == e) throw new Error("[Encrypt service] rsaDecrypt: No private key provided for decryption.");
							return this.cryptoFunctionService.rsaDecrypt(t.dataBytes, e, n)
						}))
					}
					decryptItems(t, e) {
						return P(this, void 0, void 0, (function*() {
							if (null == t || t.length < 1) return [];
							const n = [];
							for (let i = 0; i < t.length; i++) n.push(yield t[i].decrypt(e));
							return n
						}))
					}
					hash(t, e) {
						return P(this, void 0, void 0, (function*() {
							const n = yield this.cryptoFunctionService.hash(t, e);
							return c.fromBufferToB64(n)
						}))
					}
					aesEncrypt(t, e) {
						return P(this, void 0, void 0, (function*() {
							const n = new T;
							if (n.key = e, n.iv = yield this.cryptoFunctionService.randomBytes(16), n.data = yield this.cryptoFunctionService.aesEncrypt(t, n.iv, n.key.encKey), null != n.key.macKey) {
								const t = new Uint8Array(n.iv.byteLength + n.data.byteLength);
								t.set(new Uint8Array(n.iv), 0), t.set(new Uint8Array(n.data), n.iv.byteLength), n.mac = yield this.cryptoFunctionService.hmac(t, n.key.macKey, "sha256")
							}
							return n
						}))
					}
					logMacFailed(t) {
						this.logMacFailures && this.logService.error(t)
					}
					resolveLegacyKey(t, e) {
						return e.encryptionType === h.AesCbc128_HmacSha256_B64 && t.encType === h.AesCbc256_B64 ? new D(t.key, h.AesCbc128_HmacSha256_B64) : t
					}
				}
				var F, I, J, R, M, j, L, H, z = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class W {
					buildDomainModel(t, e, n, i = []) {
						for (const r in n) {
							if (!n.hasOwnProperty(r)) continue;
							const s = e[n[r] || r];
							i.indexOf(r) > -1 ? t[r] = s || null : t[r] = s ? new K(s) : null
						}
					}
					buildDataModel(t, e, n, i = []) {
						for (const r in n) {
							if (!n.hasOwnProperty(r)) continue;
							const s = t[n[r] || r];
							i.indexOf(r) > -1 ? e[r] = null != s ? s : null : e[r] = null != s ? s.encryptedString : null
						}
					}
					decryptObj(t, e, n) {
						return z(this, arguments, void 0, (function*(t, e, n, i = null, r = "No Domain Context") {
							const s = [],
								o = this;
							for (const a in e) e.hasOwnProperty(a) && function(l) {
								const u = Promise.resolve().then((() => {
									const t = e[l] || l;
									return o[t] ? o[t].decrypt(n, i, `Property: ${a}; ObjectContext: ${r}`) : null
								})).then((e => {
									t[l] = e
								}));
								s.push(u)
							}(a);
							return yield Promise.all(s), t
						}))
					}
					decryptObjWithKey(t, e, n) {
						return z(this, arguments, void 0, (function*(t, e, n, i = this.constructor, r = "No Domain Context") {
							const s = [];
							for (const o of t) {
								const t = this[o];
								s.push(this.decryptProperty(o, t, e, n, `Property: ${o.toString()}; ObjectContext: ${r}`))
							}
							return (yield Promise.all(s)).reduce(((t, e) => Object.assign(Object.assign({}, t), e)), Object.assign({}, this))
						}))
					}
					decryptProperty(t, e, n, i, r) {
						return z(this, void 0, void 0, (function*() {
							let s = null;
							return s = e ? yield e.decryptWithKey(n, i, r): null, {
								[t]: s
							}
						}))
					}
				}! function(t) {
					t[t.Cipher = 0] = "Cipher", t[t.CipherView = 1] = "CipherView"
				}(F || (F = {})),
				function(t) {
					t[t.Login = 1] = "Login", t[t.SecureNote = 2] = "SecureNote", t[t.Card = 3] = "Card", t[t.Identity = 4] = "Identity", t[t.SshKey = 5] = "SshKey"
				}(I || (I = {}));
				class $ {
					constructor(t) {
						null != t && (this.id = t.id, this.url = t.url, this.fileName = t.fileName, this.key = t.key, this.size = t.size, this.sizeName = t.sizeName)
					}
				}
				class V {
					constructor(t) {
						null != t && (this.cardholderName = t.cardholderName, this.brand = t.brand, this.number = t.number, this.expMonth = t.expMonth, this.expYear = t.expYear, this.code = t.code)
					}
				}
				class Y {
					constructor(t) {
						null != t && (this.type = t.type, this.name = t.name, this.value = t.value, this.linkedId = t.linkedId)
					}
				}
				class G {
					constructor(t) {
						null != t && (this.title = t.title, this.firstName = t.firstName, this.middleName = t.middleName, this.lastName = t.lastName, this.address1 = t.address1, this.address2 = t.address2, this.address3 = t.address3, this.city = t.city, this.state = t.state, this.postalCode = t.postalCode, this.country = t.country, this.company = t.company, this.email = t.email, this.phone = t.phone, this.ssn = t.ssn, this.username = t.username, this.passportNumber = t.passportNumber, this.licenseNumber = t.licenseNumber)
					}
				}
				class q {
					constructor(t) {
						null != t && (this.credentialId = t.credentialId, this.keyType = t.keyType, this.keyAlgorithm = t.keyAlgorithm, this.keyCurve = t.keyCurve, this.keyValue = t.keyValue, this.rpId = t.rpId, this.userHandle = t.userHandle, this.userName = t.userName, this.counter = t.counter, this.rpName = t.rpName, this.userDisplayName = t.userDisplayName, this.discoverable = t.discoverable, this.creationDate = t.creationDate)
					}
				}
				class Q {
					constructor(t) {
						this.match = null, null != t && (this.uri = t.uri, this.uriChecksum = t.uriChecksum, this.match = t.match)
					}
				}
				class X {
					constructor(t) {
						var e;
						null != t && (this.username = t.username, this.password = t.password, this.passwordRevisionDate = t.passwordRevisionDate, this.totp = t.totp, this.autofillOnPageLoad = t.autofillOnPageLoad, t.uris && (this.uris = t.uris.map((t => new Q(t)))), t.fido2Credentials && (this.fido2Credentials = null === (e = t.fido2Credentials) || void 0 === e ? void 0 : e.map((t => new q(t)))))
					}
				}
				class Z {
					constructor(t) {
						null != t && (this.password = t.password, this.lastUsedDate = t.lastUsedDate)
					}
				}
				class tt {
					constructor(t) {
						null != t && (this.type = t.type)
					}
				}
				class et {
					constructor(t) {
						null != t && (this.privateKey = t.privateKey, this.publicKey = t.publicKey, this.keyFingerprint = t.keyFingerprint)
					}
				}
				class nt {
					constructor(t, e) {
						if (null != t) {
							switch (this.id = t.id, this.organizationId = t.organizationId, this.folderId = t.folderId, this.edit = t.edit, this.viewPassword = t.viewPassword, this.organizationUseTotp = t.organizationUseTotp, this.favorite = t.favorite, this.revisionDate = t.revisionDate, this.type = t.type, this.name = t.name, this.notes = t.notes, this.collectionIds = null != e ? e : t.collectionIds, this.creationDate = t.creationDate, this.deletedDate = t.deletedDate, this.reprompt = t.reprompt, this.key = t.key, this.type) {
								case I.Login:
									this.login = new X(t.login);
									break;
								case I.SecureNote:
									this.secureNote = new tt(t.secureNote);
									break;
								case I.Card:
									this.card = new V(t.card);
									break;
								case I.Identity:
									this.identity = new G(t.identity);
									break;
								case I.SshKey:
									this.sshKey = new et(t.sshKey)
							}
							null != t.fields && (this.fields = t.fields.map((t => new Y(t)))), null != t.attachments && (this.attachments = t.attachments.map((t => new $(t)))), null != t.passwordHistory && (this.passwordHistory = t.passwordHistory.map((t => new Z(t))))
						}
					}
					static fromJSON(t) {
						return Object.assign(new nt, t)
					}
				}! function(t) {
					t[t.None = 0] = "None", t[t.Password = 1] = "Password"
				}(J || (J = {})),
				function(t) {
					t[t.Text = 0] = "Text", t[t.Hidden = 1] = "Hidden", t[t.Boolean = 2] = "Boolean", t[t.Linked = 3] = "Linked"
				}(R || (R = {})),
				function(t) {
					t[t.Username = 100] = "Username", t[t.Password = 101] = "Password"
				}(M || (M = {})),
				function(t) {
					t[t.CardholderName = 300] = "CardholderName", t[t.ExpMonth = 301] = "ExpMonth", t[t.ExpYear = 302] = "ExpYear", t[t.Code = 303] = "Code", t[t.Brand = 304] = "Brand", t[t.Number = 305] = "Number"
				}(j || (j = {})),
				function(t) {
					t[t.Title = 400] = "Title", t[t.MiddleName = 401] = "MiddleName", t[t.Address1 = 402] = "Address1", t[t.Address2 = 403] = "Address2", t[t.Address3 = 404] = "Address3", t[t.City = 405] = "City", t[t.State = 406] = "State", t[t.PostalCode = 407] = "PostalCode", t[t.Country = 408] = "Country", t[t.Company = 409] = "Company", t[t.Email = 410] = "Email", t[t.Phone = 411] = "Phone", t[t.Ssn = 412] = "Ssn", t[t.Username = 413] = "Username", t[t.PassportNumber = 414] = "PassportNumber", t[t.LicenseNumber = 415] = "LicenseNumber", t[t.FirstName = 416] = "FirstName", t[t.LastName = 417] = "LastName", t[t.FullName = 418] = "FullName"
				}(L || (L = {})),
				function(t) {
					t[t.Generic = 0] = "Generic"
				}(H || (H = {}));
				class it {
					constructor(t) {
						this.id = null, this.url = null, this.size = null, this.sizeName = null, this.fileName = null, this.key = null, t && (this.id = t.id, this.url = t.url, this.size = t.size, this.sizeName = t.sizeName)
					}
					get fileSize() {
						try {
							if (null != this.size) return parseInt(this.size, null)
						} catch (t) {}
						return 0
					}
					static fromJSON(t) {
						const e = null == t.key ? null : D.fromJSON(t.key);
						return Object.assign(new it, t, {
							key: e
						})
					}
				}
				const rt = "\\" + ["/", "-", ".", " "].join("\\").replace(" ", "s");
				new RegExp(`[${rt}]`, "g"), new RegExp(`[^\\d${rt}]`, "g"), new RegExp("^(([1]{1}[0-2]{1})|(0?[1-9]{1}))$"), new RegExp("^2[0-1]{1}\\d{2}$");

				function st(t) {
					const e = null == t || "" === t;
					let n = e ? null : `${t}`;
					if (e || n && /^[1-9]{1}\d{3}$/.test(n)) return n;
					if (n = (n || "").replace(/[^\d]/g, "").replace(/^[0]+(?=.)/, ""), "" === n && (n = null), n && 4 !== n.length) {
						const t = ("00" + n).slice(-2);
						n = `${(new Date).getFullYear()}`.slice(0, 2) + t
					}
					return n
				}
				class ot {
					constructor(t, e) {
						this.propertyKey = t, this._i18nKey = null == e ? void 0 : e.i18nKey, this.sortPosition = e.sortPosition
					}
					get i18nKey() {
						var t;
						return null !== (t = this._i18nKey) && void 0 !== t ? t : this.propertyKey
					}
				}

				function at(t, e) {
					return (n, i) => {
						null == n.linkedFieldOptions && (n.linkedFieldOptions = new Map), n.linkedFieldOptions.set(t, new ot(i, e))
					}
				}
				class lt {}
				var ut = function(t, e, n, i) {
						var r, s = arguments.length,
							o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
						if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
						else
							for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
						return s > 3 && o && Object.defineProperty(e, n, o), o
					},
					ct = function(t, e) {
						if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
					};
				class ht extends lt {
					constructor() {
						super(...arguments), this.cardholderName = null, this.expMonth = null, this.expYear = null, this.code = null, this._brand = null, this._number = null, this._subTitle = null
					}
					get maskedCode() {
						return null != this.code ? "•".repeat(this.code.length) : null
					}
					get maskedNumber() {
						return null != this.number ? "•".repeat(this.number.length) : null
					}
					get brand() {
						return this._brand
					}
					set brand(t) {
						this._brand = t, this._subTitle = null
					}
					get number() {
						return this._number
					}
					set number(t) {
						this._number = t, this._subTitle = null
					}
					get subTitle() {
						if (null == this._subTitle && (this._subTitle = this.brand, null != this.number && this.number.length >= 4)) {
							null != this._subTitle && "" !== this._subTitle ? this._subTitle += ", " : this._subTitle = "";
							const t = this.number.length >= 5 && null != this.number.match(new RegExp("^3[47]")) ? 5 : 4;
							this._subTitle += "*" + this.number.substr(this.number.length - t)
						}
						return this._subTitle
					}
					get expiration() {
						const t = st(this.expYear);
						if (!this.expMonth && !t) return null;
						let e = null != this.expMonth ? ("0" + this.expMonth).slice(-2) : "__";
						return e += " / " + (t || "____"), e
					}
					static fromJSON(t) {
						return Object.assign(new ht, t)
					}
					static getCardBrandByPatterns(t) {
						if (null == t || "string" != typeof t || "" === t.trim()) return null;
						let e = new RegExp("^4");
						return null != t.match(e) ? "Visa" : /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(t) ? "Mastercard" : (e = new RegExp("^3[47]"), null != t.match(e) ? "Amex" : (e = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"), null != t.match(e) ? "Discover" : (e = new RegExp("^36"), null != t.match(e) ? "Diners Club" : (e = new RegExp("^30[0-5]"), null != t.match(e) ? "Diners Club" : (e = new RegExp("^35(2[89]|[3-8][0-9])"), null != t.match(e) ? "JCB" : (e = new RegExp("^(4026|417500|4508|4844|491(3|7))"), null != t.match(e) ? "Visa" : null))))))
					}
				}
				ut([at(j.CardholderName, {
					sortPosition: 0
				}), ct("design:type", String)], ht.prototype, "cardholderName", void 0), ut([at(j.ExpMonth, {
					sortPosition: 3,
					i18nKey: "expirationMonth"
				}), ct("design:type", String)], ht.prototype, "expMonth", void 0), ut([at(j.ExpYear, {
					sortPosition: 4,
					i18nKey: "expirationYear"
				}), ct("design:type", String)], ht.prototype, "expYear", void 0), ut([at(j.Code, {
					sortPosition: 5,
					i18nKey: "securityCode"
				}), ct("design:type", String)], ht.prototype, "code", void 0), ut([at(j.Brand, {
					sortPosition: 2
				}), ct("design:type", String), ct("design:paramtypes", [String])], ht.prototype, "brand", null), ut([at(j.Number, {
					sortPosition: 1
				}), ct("design:type", String), ct("design:paramtypes", [String])], ht.prototype, "number", null);
				class dt {
					constructor(t) {
						this.name = null, this.value = null, this.type = null, this.newField = !1, this.showValue = !1, this.showCount = !1, this.linkedId = null, t && (this.type = t.type, this.linkedId = t.linkedId)
					}
					get maskedValue() {
						return null != this.value ? "••••••••" : null
					}
					static fromJSON(t) {
						return Object.assign(new dt, t)
					}
				}
				var yt = function(t, e, n, i) {
						var r, s = arguments.length,
							o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
						if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
						else
							for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
						return s > 3 && o && Object.defineProperty(e, n, o), o
					},
					pt = function(t, e) {
						if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
					};
				class mt extends lt {
					constructor() {
						super(), this.title = null, this.middleName = null, this.address1 = null, this.address2 = null, this.address3 = null, this.city = null, this.state = null, this.postalCode = null, this.country = null, this.company = null, this.email = null, this.phone = null, this.ssn = null, this.username = null, this.passportNumber = null, this.licenseNumber = null, this._firstName = null, this._lastName = null, this._subTitle = null
					}
					get firstName() {
						return this._firstName
					}
					set firstName(t) {
						this._firstName = t, this._subTitle = null
					}
					get lastName() {
						return this._lastName
					}
					set lastName(t) {
						this._lastName = t, this._subTitle = null
					}
					get subTitle() {
						return null != this._subTitle || null == this.firstName && null == this.lastName || (this._subTitle = "", null != this.firstName && (this._subTitle = this.firstName), null != this.lastName && ("" !== this._subTitle && (this._subTitle += " "), this._subTitle += this.lastName)), this._subTitle
					}
					get fullName() {
						if (null != this.title || null != this.firstName || null != this.middleName || null != this.lastName) {
							let t = "";
							return null != this.title && (t += this.title + " "), null != this.firstName && (t += this.firstName + " "), null != this.middleName && (t += this.middleName + " "), null != this.lastName && (t += this.lastName), t.trim()
						}
						return null
					}
					get fullAddress() {
						let t = this.address1;
						return c.isNullOrWhitespace(this.address2) || (c.isNullOrWhitespace(t) || (t += ", "), t += this.address2), c.isNullOrWhitespace(this.address3) || (c.isNullOrWhitespace(t) || (t += ", "), t += this.address3), t
					}
					get fullAddressPart2() {
						if (null == this.city && null == this.state && null == this.postalCode) return null;
						const t = this.city || "-",
							e = this.state,
							n = this.postalCode || "-";
						let i = t;
						return c.isNullOrWhitespace(e) || (i += ", " + e), i += ", " + n, i
					}
					get fullAddressForCopy() {
						let t = this.fullAddress;
						return null == this.city && null == this.state && null == this.postalCode || (t += "\n" + this.fullAddressPart2), null != this.country && (t += "\n" + this.country), t
					}
					static fromJSON(t) {
						return Object.assign(new mt, t)
					}
				}
				yt([at(L.Title, {
					sortPosition: 0
				}), pt("design:type", String)], mt.prototype, "title", void 0), yt([at(L.MiddleName, {
					sortPosition: 2
				}), pt("design:type", String)], mt.prototype, "middleName", void 0), yt([at(L.Address1, {
					sortPosition: 12
				}), pt("design:type", String)], mt.prototype, "address1", void 0), yt([at(L.Address2, {
					sortPosition: 13
				}), pt("design:type", String)], mt.prototype, "address2", void 0), yt([at(L.Address3, {
					sortPosition: 14
				}), pt("design:type", String)], mt.prototype, "address3", void 0), yt([at(L.City, {
					sortPosition: 15,
					i18nKey: "cityTown"
				}), pt("design:type", String)], mt.prototype, "city", void 0), yt([at(L.State, {
					sortPosition: 16,
					i18nKey: "stateProvince"
				}), pt("design:type", String)], mt.prototype, "state", void 0), yt([at(L.PostalCode, {
					sortPosition: 17,
					i18nKey: "zipPostalCode"
				}), pt("design:type", String)], mt.prototype, "postalCode", void 0), yt([at(L.Country, {
					sortPosition: 18
				}), pt("design:type", String)], mt.prototype, "country", void 0), yt([at(L.Company, {
					sortPosition: 6
				}), pt("design:type", String)], mt.prototype, "company", void 0), yt([at(L.Email, {
					sortPosition: 10
				}), pt("design:type", String)], mt.prototype, "email", void 0), yt([at(L.Phone, {
					sortPosition: 11
				}), pt("design:type", String)], mt.prototype, "phone", void 0), yt([at(L.Ssn, {
					sortPosition: 7
				}), pt("design:type", String)], mt.prototype, "ssn", void 0), yt([at(L.Username, {
					sortPosition: 5
				}), pt("design:type", String)], mt.prototype, "username", void 0), yt([at(L.PassportNumber, {
					sortPosition: 8
				}), pt("design:type", String)], mt.prototype, "passportNumber", void 0), yt([at(L.LicenseNumber, {
					sortPosition: 9
				}), pt("design:type", String)], mt.prototype, "licenseNumber", void 0), yt([at(L.FirstName, {
					sortPosition: 1
				}), pt("design:type", String), pt("design:paramtypes", [String])], mt.prototype, "firstName", null), yt([at(L.LastName, {
					sortPosition: 4
				}), pt("design:type", String), pt("design:paramtypes", [String])], mt.prototype, "lastName", null), yt([at(L.FullName, {
					sortPosition: 3
				}), pt("design:type", String), pt("design:paramtypes", [])], mt.prototype, "fullName", null);
				class ft extends lt {
					constructor() {
						super(...arguments), this.creationDate = null
					}
					get subTitle() {
						return this.userDisplayName
					}
					static fromJSON(t) {
						const e = null != t.creationDate ? new Date(t.creationDate) : null;
						return Object.assign(new ft, t, {
							creationDate: e
						})
					}
				}
				const gt = 0,
					vt = 1,
					wt = 2,
					bt = 3,
					Dt = 4,
					St = 5,
					Nt = ["https://", "http://", "ssh://", "ftp://", "sftp://", "irc://", "vnc://", "rdp://", "ms-rd:", "chrome://", "iosapp://", "androidapp://"];
				class Ot {
					static canLaunch(t) {
						if (c.isNullOrWhitespace(t)) return !1;
						for (let e = 0; e < Nt.length; e++)
							if (0 === t.indexOf(Nt[e])) return !0;
						return !1
					}
				}
				class Ct {
					constructor(t) {
						this.match = null, this._uri = null, this._domain = null, this._hostname = null, this._host = null, this._canLaunch = null, t && (this.match = t.match)
					}
					get uri() {
						return this._uri
					}
					set uri(t) {
						this._uri = t, this._domain = null, this._canLaunch = null
					}
					get domain() {
						return null == this._domain && null != this.uri && (this._domain = c.getDomain(this.uri), "" === this._domain && (this._domain = null)), this._domain
					}
					get hostname() {
						return this.match === Dt ? null : (null == this._hostname && null != this.uri && (this._hostname = c.getHostname(this.uri), "" === this._hostname && (this._hostname = null)), this._hostname)
					}
					get host() {
						return this.match === Dt ? null : (null == this._host && null != this.uri && (this._host = c.getHost(this.uri), "" === this._host && (this._host = null)), this._host)
					}
					get hostnameOrUri() {
						return null != this.hostname ? this.hostname : this.uri
					}
					get hostOrUri() {
						return null != this.host ? this.host : this.uri
					}
					get isWebsite() {
						return null != this.uri && (0 === this.uri.indexOf("http://") || 0 === this.uri.indexOf("https://") || this.uri.indexOf("://") < 0 && !c.isNullOrWhitespace(c.getDomain(this.uri)))
					}
					get canLaunch() {
						return null != this._canLaunch || (null != this.uri && this.match !== Dt ? this._canLaunch = Ot.canLaunch(this.launchUri) : this._canLaunch = !1), this._canLaunch
					}
					get launchUri() {
						return this.uri.indexOf("://") < 0 && !c.isNullOrWhitespace(c.getDomain(this.uri)) ? "http://" + this.uri : this.uri
					}
					static fromJSON(t) {
						return Object.assign(new Ct, t)
					}
					matchesUri(t, e, n = null) {
						var i;
						if (!this.uri || !t) return !1;
						let r = null !== (i = this.match) && void 0 !== i ? i : n;
						null != r || (r = gt);
						const s = c.getDomain(t),
							o = e.add(s);
						switch (r) {
							case gt:
								return this.matchesDomain(t, o);
							case vt: {
								const e = c.getHost(t);
								return null != e && e === c.getHost(this.uri)
							}
							case bt:
								return t === this.uri;
							case wt:
								return t.startsWith(this.uri);
							case Dt:
								try {
									return new RegExp(this.uri, "i").test(t)
								} catch (a) {
									return !1
								}
							case St:
								return !1
						}
						return !1
					}
					matchesDomain(t, e) {
						if (null == t || null == this.domain || !e.has(this.domain)) return !1;
						if (c.DomainMatchBlacklist.has(this.domain)) {
							const e = c.getHost(t);
							return !c.DomainMatchBlacklist.get(this.domain).has(e)
						}
						return !0
					}
				}
				var Bt = function(t, e, n, i) {
						var r, s = arguments.length,
							o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
						if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
						else
							for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
						return s > 3 && o && Object.defineProperty(e, n, o), o
					},
					kt = function(t, e) {
						if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
					};
				class At extends lt {
					constructor(t) {
						super(), this.username = null, this.password = null, this.passwordRevisionDate = null, this.totp = null, this.uris = [], this.autofillOnPageLoad = null, this.fido2Credentials = null, t && (this.passwordRevisionDate = t.passwordRevisionDate, this.autofillOnPageLoad = t.autofillOnPageLoad)
					}
					get uri() {
						return this.hasUris ? this.uris[0].uri : null
					}
					get maskedPassword() {
						return null != this.password ? "••••••••" : null
					}
					get subTitle() {
						var t;
						return c.isNullOrEmpty(this.username) && (null === (t = this.fido2Credentials) || void 0 === t ? void 0 : t.length) > 0 ? this.fido2Credentials[0].userName : this.username
					}
					get canLaunch() {
						return this.hasUris && this.uris.some((t => t.canLaunch))
					}
					get hasTotp() {
						return !c.isNullOrWhitespace(this.totp)
					}
					get launchUri() {
						if (this.hasUris) {
							const t = this.uris.find((t => t.canLaunch));
							if (null != t) return t.launchUri
						}
						return null
					}
					get hasUris() {
						return null != this.uris && this.uris.length > 0
					}
					get hasFido2Credentials() {
						return null != this.fido2Credentials && this.fido2Credentials.length > 0
					}
					matchesUri(t, e, n = null) {
						return null != this.uris && this.uris.some((i => i.matchesUri(t, e, n)))
					}
					static fromJSON(t) {
						var e;
						const n = null == t.passwordRevisionDate ? null : new Date(t.passwordRevisionDate),
							i = t.uris.map((t => Ct.fromJSON(t))),
							r = null === (e = t.fido2Credentials) || void 0 === e ? void 0 : e.map((t => ft.fromJSON(t)));
						return Object.assign(new At, t, {
							passwordRevisionDate: n,
							uris: i,
							fido2Credentials: r
						})
					}
				}
				Bt([at(M.Username, {
					sortPosition: 0
				}), kt("design:type", String)], At.prototype, "username", void 0), Bt([at(M.Password, {
					sortPosition: 1
				}), kt("design:type", String)], At.prototype, "password", void 0);
				class xt {
					constructor(t) {
						this.password = null, this.lastUsedDate = null, t && (this.lastUsedDate = t.lastUsedDate)
					}
					static fromJSON(t) {
						const e = null == t.lastUsedDate ? null : new Date(t.lastUsedDate);
						return Object.assign(new xt, t, {
							lastUsedDate: e
						})
					}
				}
				class _t extends lt {
					constructor(t) {
						super(), this.type = null, t && (this.type = t.type)
					}
					get subTitle() {
						return null
					}
					static fromJSON(t) {
						return Object.assign(new _t, t)
					}
				}
				class Et extends lt {
					constructor(t) {
						super(), this.privateKey = null, this.publicKey = null, this.keyFingerprint = null
					}
					get maskedPrivateKey() {
						if (!this.privateKey || 0 === this.privateKey.length) return "";
						let t = this.privateKey.split("\n").filter((t => "" !== t.trim()));
						return t = t.map(((e, n) => 0 === n || n === t.length - 1 ? e : this.maskLine(e))), t.join("\n")
					}
					maskLine(t) {
						return "•".repeat(32)
					}
					get subTitle() {
						return this.keyFingerprint
					}
					static fromJSON(t) {
						return Object.assign(new Et, t)
					}
				}
				class Kt {
					constructor(t) {
						var e;
						this.initializerKey = F.CipherView, this.id = null, this.organizationId = null, this.folderId = null, this.name = null, this.notes = null, this.type = null, this.favorite = !1, this.organizationUseTotp = !1, this.edit = !1, this.viewPassword = !0, this.login = new At, this.identity = new mt, this.card = new ht, this.secureNote = new _t, this.sshKey = new Et, this.attachments = null, this.fields = null, this.passwordHistory = null, this.collectionIds = null, this.revisionDate = null, this.creationDate = null, this.deletedDate = null, this.reprompt = J.None, this.decryptionFailure = !1, t && (this.id = t.id, this.organizationId = t.organizationId, this.folderId = t.folderId, this.favorite = t.favorite, this.organizationUseTotp = t.organizationUseTotp, this.edit = t.edit, this.viewPassword = t.viewPassword, this.type = t.type, this.localData = t.localData, this.collectionIds = t.collectionIds, this.revisionDate = t.revisionDate, this.creationDate = t.creationDate, this.deletedDate = t.deletedDate, this.reprompt = null !== (e = t.reprompt) && void 0 !== e ? e : J.None)
					}
					get item() {
						switch (this.type) {
							case I.Login:
								return this.login;
							case I.SecureNote:
								return this.secureNote;
							case I.Card:
								return this.card;
							case I.Identity:
								return this.identity;
							case I.SshKey:
								return this.sshKey
						}
						return null
					}
					get subTitle() {
						var t;
						return null === (t = this.item) || void 0 === t ? void 0 : t.subTitle
					}
					get hasPasswordHistory() {
						return this.passwordHistory && this.passwordHistory.length > 0
					}
					get hasAttachments() {
						return this.attachments && this.attachments.length > 0
					}
					get hasOldAttachments() {
						if (this.hasAttachments)
							for (let t = 0; t < this.attachments.length; t++)
								if (null == this.attachments[t].key) return !0;
						return !1
					}
					get hasFields() {
						return this.fields && this.fields.length > 0
					}
					get passwordRevisionDisplayDate() {
						return this.type !== I.Login || null == this.login || null == this.login.password || "" === this.login.password ? null : this.login.passwordRevisionDate
					}
					get isDeleted() {
						return null != this.deletedDate
					}
					get linkedFieldOptions() {
						var t;
						return null === (t = this.item) || void 0 === t ? void 0 : t.linkedFieldOptions
					}
					get isUnassigned() {
						return null != this.organizationId && (null == this.collectionIds || 0 === this.collectionIds.length)
					}
					get canLaunch() {
						return this.type === I.Login && this.login.canLaunch
					}
					linkedFieldValue(t) {
						var e;
						const n = null === (e = this.linkedFieldOptions) || void 0 === e ? void 0 : e.get(t);
						if (null == n) return null;
						this.item;
						return this.item[n.propertyKey]
					}
					linkedFieldI18nKey(t) {
						var e;
						return null === (e = this.linkedFieldOptions.get(t)) || void 0 === e ? void 0 : e.i18nKey
					}
					toJSON() {
						return this
					}
					static fromJSON(t) {
						var e, n, i;
						if (null == t) return null;
						const r = new Kt,
							s = null == t.revisionDate ? null : new Date(t.revisionDate),
							o = null == t.deletedDate ? null : new Date(t.deletedDate),
							a = null === (e = t.attachments) || void 0 === e ? void 0 : e.map((t => it.fromJSON(t))),
							l = null === (n = t.fields) || void 0 === n ? void 0 : n.map((t => dt.fromJSON(t))),
							u = null === (i = t.passwordHistory) || void 0 === i ? void 0 : i.map((t => xt.fromJSON(t)));
						switch (Object.assign(r, t, {
								revisionDate: s,
								deletedDate: o,
								attachments: a,
								fields: l,
								passwordHistory: u
							}), t.type) {
							case I.Card:
								r.card = ht.fromJSON(t.card);
								break;
							case I.Identity:
								r.identity = mt.fromJSON(t.identity);
								break;
							case I.Login:
								r.login = At.fromJSON(t.login);
								break;
							case I.SecureNote:
								r.secureNote = _t.fromJSON(t.secureNote);
								break;
							case I.SshKey:
								r.sshKey = Et.fromJSON(t.sshKey)
						}
						return r
					}
				}
				var Tt = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class Pt extends W {
					constructor(t) {
						super(), null != t && (this.size = t.size, this.buildDomainModel(this, t, {
							id: null,
							url: null,
							sizeName: null,
							fileName: null,
							key: null
						}, ["id", "url", "sizeName"]))
					}
					decrypt(t) {
						return Tt(this, arguments, void 0, (function*(t, e = "No Cipher Context", n) {
							const i = yield this.decryptObj(new it(this), {
								fileName: null
							}, t, n, "DomainType: Attachment; " + e);
							return null != this.key && (i.key = yield this.decryptAttachmentKey(t, n)), i
						}))
					}
					decryptAttachmentKey(t, e) {
						return Tt(this, void 0, void 0, (function*() {
							try {
								null == e && (e = yield this.getKeyForDecryption(t));
								const n = c.getContainerService().getEncryptService(),
									i = yield n.decryptToBytes(this.key, e);
								return new D(i)
							} catch (n) {}
						}))
					}
					getKeyForDecryption(t) {
						return Tt(this, void 0, void 0, (function*() {
							const e = c.getContainerService().getKeyService();
							return null != t ? yield e.getOrgKey(t): yield e.getUserKeyWithLegacySupport()
						}))
					}
					toAttachmentData() {
						const t = new $;
						return t.size = this.size, this.buildDataModel(this, t, {
							id: null,
							url: null,
							sizeName: null,
							fileName: null,
							key: null
						}, ["id", "url", "sizeName"]), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.key),
							n = K.fromJSON(t.fileName);
						return Object.assign(new Pt, t, {
							key: e,
							fileName: n
						})
					}
				}
				var Ut = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class Ft extends W {
					constructor(t) {
						super(), null != t && this.buildDomainModel(this, t, {
							cardholderName: null,
							brand: null,
							number: null,
							expMonth: null,
							expYear: null,
							code: null
						}, [])
					}
					decrypt(t) {
						return Ut(this, arguments, void 0, (function*(t, e = "No Cipher Context", n) {
							return this.decryptObj(new ht, {
								cardholderName: null,
								brand: null,
								number: null,
								expMonth: null,
								expYear: null,
								code: null
							}, t, n, "DomainType: Card; " + e)
						}))
					}
					toCardData() {
						const t = new V;
						return this.buildDataModel(this, t, {
							cardholderName: null,
							brand: null,
							number: null,
							expMonth: null,
							expYear: null,
							code: null
						}), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.cardholderName),
							n = K.fromJSON(t.brand),
							i = K.fromJSON(t.number),
							r = K.fromJSON(t.expMonth),
							s = K.fromJSON(t.expYear),
							o = K.fromJSON(t.code);
						return Object.assign(new Ft, t, {
							cardholderName: e,
							brand: n,
							number: i,
							expMonth: r,
							expYear: s,
							code: o
						})
					}
				}
				class It extends W {
					constructor(t) {
						super(), null != t && (this.type = t.type, this.linkedId = t.linkedId, this.buildDomainModel(this, t, {
							name: null,
							value: null
						}, []))
					}
					decrypt(t, e) {
						return this.decryptObj(new dt(this), {
							name: null,
							value: null
						}, t, e)
					}
					toFieldData() {
						const t = new Y;
						return this.buildDataModel(this, t, {
							name: null,
							value: null,
							type: null,
							linkedId: null
						}, ["type", "linkedId"]), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.name),
							n = K.fromJSON(t.value);
						return Object.assign(new It, t, {
							name: e,
							value: n
						})
					}
				}
				class Jt extends W {
					constructor(t) {
						super(), null != t && this.buildDomainModel(this, t, {
							title: null,
							firstName: null,
							middleName: null,
							lastName: null,
							address1: null,
							address2: null,
							address3: null,
							city: null,
							state: null,
							postalCode: null,
							country: null,
							company: null,
							email: null,
							phone: null,
							ssn: null,
							username: null,
							passportNumber: null,
							licenseNumber: null
						}, [])
					}
					decrypt(t, e = "No Cipher Context", n) {
						return this.decryptObj(new mt, {
							title: null,
							firstName: null,
							middleName: null,
							lastName: null,
							address1: null,
							address2: null,
							address3: null,
							city: null,
							state: null,
							postalCode: null,
							country: null,
							company: null,
							email: null,
							phone: null,
							ssn: null,
							username: null,
							passportNumber: null,
							licenseNumber: null
						}, t, n, "DomainType: Identity; " + e)
					}
					toIdentityData() {
						const t = new G;
						return this.buildDataModel(this, t, {
							title: null,
							firstName: null,
							middleName: null,
							lastName: null,
							address1: null,
							address2: null,
							address3: null,
							city: null,
							state: null,
							postalCode: null,
							country: null,
							company: null,
							email: null,
							phone: null,
							ssn: null,
							username: null,
							passportNumber: null,
							licenseNumber: null
						}), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.title),
							n = K.fromJSON(t.firstName),
							i = K.fromJSON(t.middleName),
							r = K.fromJSON(t.lastName),
							s = K.fromJSON(t.address1),
							o = K.fromJSON(t.address2),
							a = K.fromJSON(t.address3),
							l = K.fromJSON(t.city),
							u = K.fromJSON(t.state),
							c = K.fromJSON(t.postalCode),
							h = K.fromJSON(t.country),
							d = K.fromJSON(t.company),
							y = K.fromJSON(t.email),
							p = K.fromJSON(t.phone),
							m = K.fromJSON(t.ssn),
							f = K.fromJSON(t.username),
							g = K.fromJSON(t.passportNumber),
							v = K.fromJSON(t.licenseNumber);
						return Object.assign(new Jt, t, {
							title: e,
							firstName: n,
							middleName: i,
							lastName: r,
							address1: s,
							address2: o,
							address3: a,
							city: l,
							state: u,
							postalCode: c,
							country: h,
							company: d,
							email: y,
							phone: p,
							ssn: m,
							username: f,
							passportNumber: g,
							licenseNumber: v
						})
					}
				}
				var Rt = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class Mt extends W {
					constructor(t) {
						super(), this.credentialId = null, null != t && (this.buildDomainModel(this, t, {
							credentialId: null,
							keyType: null,
							keyAlgorithm: null,
							keyCurve: null,
							keyValue: null,
							rpId: null,
							userHandle: null,
							userName: null,
							counter: null,
							rpName: null,
							userDisplayName: null,
							discoverable: null
						}, []), this.creationDate = null != t.creationDate ? new Date(t.creationDate) : null)
					}
					decrypt(t, e) {
						return Rt(this, void 0, void 0, (function*() {
							const n = yield this.decryptObj(new ft, {
								credentialId: null,
								keyType: null,
								keyAlgorithm: null,
								keyCurve: null,
								keyValue: null,
								rpId: null,
								userHandle: null,
								userName: null,
								rpName: null,
								userDisplayName: null,
								discoverable: null
							}, t, e), {
								counter: i
							} = yield this.decryptObj({
								counter: ""
							}, {
								counter: null
							}, t, e);
							n.counter = parseInt(i);
							const {
								discoverable: r
							} = yield this.decryptObj({
								discoverable: ""
							}, {
								discoverable: null
							}, t, e);
							return n.discoverable = "true" === r, n.creationDate = this.creationDate, n
						}))
					}
					toFido2CredentialData() {
						const t = new q;
						return t.creationDate = this.creationDate.toISOString(), this.buildDataModel(this, t, {
							credentialId: null,
							keyType: null,
							keyAlgorithm: null,
							keyCurve: null,
							keyValue: null,
							rpId: null,
							userHandle: null,
							userName: null,
							counter: null,
							rpName: null,
							userDisplayName: null,
							discoverable: null
						}), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.credentialId),
							n = K.fromJSON(t.keyType),
							i = K.fromJSON(t.keyAlgorithm),
							r = K.fromJSON(t.keyCurve),
							s = K.fromJSON(t.keyValue),
							o = K.fromJSON(t.rpId),
							a = K.fromJSON(t.userHandle),
							l = K.fromJSON(t.userName),
							u = K.fromJSON(t.counter),
							c = K.fromJSON(t.rpName),
							h = K.fromJSON(t.userDisplayName),
							d = K.fromJSON(t.discoverable),
							y = null != t.creationDate ? new Date(t.creationDate) : null;
						return Object.assign(new Mt, t, {
							credentialId: e,
							keyType: n,
							keyAlgorithm: i,
							keyCurve: r,
							keyValue: s,
							rpId: o,
							userHandle: a,
							userName: l,
							counter: u,
							rpName: c,
							userDisplayName: h,
							discoverable: d,
							creationDate: y
						})
					}
				}
				var jt = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class Lt extends W {
					constructor(t) {
						super(), null != t && (this.match = t.match, this.buildDomainModel(this, t, {
							uri: null,
							uriChecksum: null
						}, []))
					}
					decrypt(t, e = "No Cipher Context", n) {
						return this.decryptObj(new Ct(this), {
							uri: null
						}, t, n, e)
					}
					validateChecksum(t, e, n) {
						return jt(this, void 0, void 0, (function*() {
							if (null == this.uriChecksum) return !1;
							const i = c.getContainerService().getEncryptService(),
								r = yield i.hash(t, "sha256");
							return (yield this.uriChecksum.decrypt(e, n)) === r
						}))
					}
					toLoginUriData() {
						const t = new Q;
						return this.buildDataModel(this, t, {
							uri: null,
							uriChecksum: null,
							match: null
						}, ["match"]), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.uri),
							n = K.fromJSON(t.uriChecksum);
						return Object.assign(new Lt, t, {
							uri: e,
							uriChecksum: n
						})
					}
				}
				var Ht = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class zt extends W {
					constructor(t) {
						super(), null != t && (this.passwordRevisionDate = null != t.passwordRevisionDate ? new Date(t.passwordRevisionDate) : null, this.autofillOnPageLoad = t.autofillOnPageLoad, this.buildDomainModel(this, t, {
							username: null,
							password: null,
							totp: null
						}, []), t.uris && (this.uris = [], t.uris.forEach((t => {
							this.uris.push(new Lt(t))
						}))), t.fido2Credentials && (this.fido2Credentials = t.fido2Credentials.map((t => new Mt(t)))))
					}
					decrypt(t, e) {
						return Ht(this, arguments, void 0, (function*(t, e, n = "No Cipher Context", i) {
							const r = yield this.decryptObj(new At(this), {
								username: null,
								password: null,
								totp: null
							}, t, i, `DomainType: Login; ${n}`);
							if (null != this.uris) {
								r.uris = [];
								for (let s = 0; s < this.uris.length; s++) {
									if (null == this.uris[s].uri) continue;
									const o = yield this.uris[s].decrypt(t, n, i);
									(e || (yield this.uris[s].validateChecksum(o.uri, t, i))) && r.uris.push(o)
								}
							}
							return null != this.fido2Credentials && (r.fido2Credentials = yield Promise.all(this.fido2Credentials.map((e => e.decrypt(t, i))))), r
						}))
					}
					toLoginData() {
						const t = new X;
						return t.passwordRevisionDate = null != this.passwordRevisionDate ? this.passwordRevisionDate.toISOString() : null, t.autofillOnPageLoad = this.autofillOnPageLoad, this.buildDataModel(this, t, {
							username: null,
							password: null,
							totp: null
						}), null != this.uris && this.uris.length > 0 && (t.uris = [], this.uris.forEach((e => {
							t.uris.push(e.toLoginUriData())
						}))), null != this.fido2Credentials && this.fido2Credentials.length > 0 && (t.fido2Credentials = this.fido2Credentials.map((t => t.toFido2CredentialData()))), t
					}
					static fromJSON(t) {
						var e, n, i;
						if (null == t) return null;
						const r = K.fromJSON(t.username),
							s = K.fromJSON(t.password),
							o = K.fromJSON(t.totp),
							a = null == t.passwordRevisionDate ? null : new Date(t.passwordRevisionDate),
							l = null === (e = t.uris) || void 0 === e ? void 0 : e.map((t => Lt.fromJSON(t))),
							u = null !== (i = null === (n = t.fido2Credentials) || void 0 === n ? void 0 : n.map((t => Mt.fromJSON(t)))) && void 0 !== i ? i : [];
						return Object.assign(new zt, t, {
							username: r,
							password: s,
							totp: o,
							passwordRevisionDate: a,
							uris: l,
							fido2Credentials: u
						})
					}
				}
				class Wt extends W {
					constructor(t) {
						super(), null != t && (this.buildDomainModel(this, t, {
							password: null
						}), this.lastUsedDate = new Date(t.lastUsedDate))
					}
					decrypt(t, e) {
						return this.decryptObj(new xt(this), {
							password: null
						}, t, e, "DomainType: PasswordHistory")
					}
					toPasswordHistoryData() {
						const t = new Z;
						return t.lastUsedDate = this.lastUsedDate.toISOString(), this.buildDataModel(this, t, {
							password: null
						}), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.password),
							n = null == t.lastUsedDate ? null : new Date(t.lastUsedDate);
						return Object.assign(new Wt, t, {
							password: e,
							lastUsedDate: n
						})
					}
				}
				var $t = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class Vt extends W {
					constructor(t) {
						super(), null != t && (this.type = t.type)
					}
					decrypt(t) {
						return $t(this, arguments, void 0, (function*(t, e = "No Cipher Context", n) {
							return new _t(this)
						}))
					}
					toSecureNoteData() {
						const t = new tt;
						return t.type = this.type, t
					}
					static fromJSON(t) {
						return null == t ? null : Object.assign(new Vt, t)
					}
				}
				class Yt extends W {
					constructor(t) {
						super(), null != t && this.buildDomainModel(this, t, {
							privateKey: null,
							publicKey: null,
							keyFingerprint: null
						}, [])
					}
					decrypt(t, e = "No Cipher Context", n) {
						return this.decryptObj(new Et, {
							privateKey: null,
							publicKey: null,
							keyFingerprint: null
						}, t, n, "DomainType: SshKey; " + e)
					}
					toSshKeyData() {
						const t = new et;
						return this.buildDataModel(this, t, {
							privateKey: null,
							publicKey: null,
							keyFingerprint: null
						}), t
					}
					static fromJSON(t) {
						if (null == t) return null;
						const e = K.fromJSON(t.privateKey),
							n = K.fromJSON(t.publicKey),
							i = K.fromJSON(t.keyFingerprint);
						return Object.assign(new Yt, t, {
							privateKey: e,
							publicKey: n,
							keyFingerprint: i
						})
					}
				}
				var Gt = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				class qt extends W {
					constructor(t, e = null) {
						if (super(), this.initializerKey = F.Cipher, null != t) {
							switch (this.buildDomainModel(this, t, {
									id: null,
									organizationId: null,
									folderId: null,
									name: null,
									notes: null,
									key: null
								}, ["id", "organizationId", "folderId"]), this.type = t.type, this.favorite = t.favorite, this.organizationUseTotp = t.organizationUseTotp, this.edit = t.edit, null != t.viewPassword ? this.viewPassword = t.viewPassword : this.viewPassword = !0, this.revisionDate = null != t.revisionDate ? new Date(t.revisionDate) : null, this.collectionIds = t.collectionIds, this.localData = e, this.creationDate = null != t.creationDate ? new Date(t.creationDate) : null, this.deletedDate = null != t.deletedDate ? new Date(t.deletedDate) : null, this.reprompt = t.reprompt, this.type) {
								case I.Login:
									this.login = new zt(t.login);
									break;
								case I.SecureNote:
									this.secureNote = new Vt(t.secureNote);
									break;
								case I.Card:
									this.card = new Ft(t.card);
									break;
								case I.Identity:
									this.identity = new Jt(t.identity);
									break;
								case I.SshKey:
									this.sshKey = new Yt(t.sshKey)
							}
							null != t.attachments ? this.attachments = t.attachments.map((t => new Pt(t))) : this.attachments = null, null != t.fields ? this.fields = t.fields.map((t => new It(t))) : this.fields = null, null != t.passwordHistory ? this.passwordHistory = t.passwordHistory.map((t => new Wt(t))) : this.passwordHistory = null
						}
					}
					decrypt(t) {
						return Gt(this, void 0, void 0, (function*() {
							const e = new Kt(this);
							let n = !0;
							if (null != this.key) {
								const i = c.getContainerService().getEncryptService(),
									r = yield i.decryptToBytes(this.key, t, `Cipher Id: ${this.id}; Content: CipherKey; IsEncryptedByOrgKey: ${null!=this.organizationId}`);
								if (null == r) return e.name = "[error: cannot decrypt]", e.decryptionFailure = !0, e;
								t = new D(r), n = !1
							}
							switch (yield this.decryptObj(e, {
									name: null,
									notes: null
								}, this.organizationId, t), this.type) {
								case I.Login:
									e.login = yield this.login.decrypt(this.organizationId, n, `Cipher Id: ${this.id}`, t);
									break;
								case I.SecureNote:
									e.secureNote = yield this.secureNote.decrypt(this.organizationId, `Cipher Id: ${this.id}`, t);
									break;
								case I.Card:
									e.card = yield this.card.decrypt(this.organizationId, `Cipher Id: ${this.id}`, t);
									break;
								case I.Identity:
									e.identity = yield this.identity.decrypt(this.organizationId, `Cipher Id: ${this.id}`, t);
									break;
								case I.SshKey:
									e.sshKey = yield this.sshKey.decrypt(this.organizationId, `Cipher Id: ${this.id}`, t)
							}
							if (null != this.attachments && this.attachments.length > 0) {
								const n = [];
								yield this.attachments.reduce(((e, i) => e.then((() => i.decrypt(this.organizationId, `Cipher Id: ${this.id}`, t))).then((t => {
									n.push(t)
								}))), Promise.resolve()), e.attachments = n
							}
							if (null != this.fields && this.fields.length > 0) {
								const n = [];
								yield this.fields.reduce(((e, i) => e.then((() => i.decrypt(this.organizationId, t))).then((t => {
									n.push(t)
								}))), Promise.resolve()), e.fields = n
							}
							if (null != this.passwordHistory && this.passwordHistory.length > 0) {
								const n = [];
								yield this.passwordHistory.reduce(((e, i) => e.then((() => i.decrypt(this.organizationId, t))).then((t => {
									n.push(t)
								}))), Promise.resolve()), e.passwordHistory = n
							}
							return e
						}))
					}
					toCipherData() {
						var t;
						const e = new nt;
						switch (e.id = this.id, e.organizationId = this.organizationId, e.folderId = this.folderId, e.edit = this.edit, e.viewPassword = this.viewPassword, e.organizationUseTotp = this.organizationUseTotp, e.favorite = this.favorite, e.revisionDate = null != this.revisionDate ? this.revisionDate.toISOString() : null, e.type = this.type, e.collectionIds = this.collectionIds, e.creationDate = null != this.creationDate ? this.creationDate.toISOString() : null, e.deletedDate = null != this.deletedDate ? this.deletedDate.toISOString() : null, e.reprompt = this.reprompt, e.key = null === (t = this.key) || void 0 === t ? void 0 : t.encryptedString, this.buildDataModel(this, e, {
								name: null,
								notes: null
							}), e.type) {
							case I.Login:
								e.login = this.login.toLoginData();
								break;
							case I.SecureNote:
								e.secureNote = this.secureNote.toSecureNoteData();
								break;
							case I.Card:
								e.card = this.card.toCardData();
								break;
							case I.Identity:
								e.identity = this.identity.toIdentityData();
								break;
							case I.SshKey:
								e.sshKey = this.sshKey.toSshKeyData()
						}
						return null != this.fields && (e.fields = this.fields.map((t => t.toFieldData()))), null != this.attachments && (e.attachments = this.attachments.map((t => t.toAttachmentData()))), null != this.passwordHistory && (e.passwordHistory = this.passwordHistory.map((t => t.toPasswordHistoryData()))), e
					}
					static fromJSON(t) {
						var e, n, i;
						if (null == t) return null;
						const r = new qt,
							s = K.fromJSON(t.name),
							o = K.fromJSON(t.notes),
							a = null == t.revisionDate ? null : new Date(t.revisionDate),
							l = null == t.deletedDate ? null : new Date(t.deletedDate),
							u = null === (e = t.attachments) || void 0 === e ? void 0 : e.map((t => Pt.fromJSON(t))),
							c = null === (n = t.fields) || void 0 === n ? void 0 : n.map((t => It.fromJSON(t))),
							h = null === (i = t.passwordHistory) || void 0 === i ? void 0 : i.map((t => Wt.fromJSON(t))),
							d = K.fromJSON(t.key);
						switch (Object.assign(r, t, {
								name: s,
								notes: o,
								revisionDate: a,
								deletedDate: l,
								attachments: u,
								fields: c,
								passwordHistory: h,
								key: d
							}), t.type) {
							case I.Card:
								r.card = Ft.fromJSON(t.card);
								break;
							case I.Identity:
								r.identity = Jt.fromJSON(t.identity);
								break;
							case I.Login:
								r.login = zt.fromJSON(t.login);
								break;
							case I.SecureNote:
								r.secureNote = Vt.fromJSON(t.secureNote);
								break;
							case I.SshKey:
								r.sshKey = Yt.fromJSON(t.sshKey)
						}
						return r
					}
				}
				const Qt = {
					[F.Cipher]: qt.fromJSON,
					[F.CipherView]: Kt.fromJSON
				};
				var Xt = function(t, e, n, i) {
					return new(n || (n = Promise))((function(r, s) {
						function o(t) {
							try {
								l(i.next(t))
							} catch (e) {
								s(e)
							}
						}

						function a(t) {
							try {
								l(i.throw(t))
							} catch (e) {
								s(e)
							}
						}

						function l(t) {
							var e;
							t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(o, a)
						}
						l((i = i.apply(t, e || [])).next())
					}))
				};
				const Zt = self;
				let te, ee = !1;
				Zt.addEventListener("message", (t => Xt(void 0, void 0, void 0, (function*() {
					ee || function() {
						const t = new k(self),
							e = new S(!1);
						te = new U(t, e, !0), new N(null, te).attachToGlobal(self), ee = !0
					}();
					const e = JSON.parse(t.data),
						n = D.fromJSON(e.key),
						i = e.items.map((t => {
							var e;
							return (e = t.initializerKey, Qt[e])(t)
						})),
						r = yield te.decryptItems(i, n);
					Zt.postMessage({
						id: e.id,
						items: JSON.stringify(r)
					})
				}))))
			},
			54836: () => {},
			49701: () => {},
			86973: () => {}
		},
		s = {};

	function o(t) {
		var e = s[t];
		if (void 0 !== e) return e.exports;
		var n = s[t] = {
			id: t,
			loaded: !1,
			exports: {}
		};
		return r[t].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
	}
	o.m = r, o.c = s, o.x = () => {
		var t = o.O(void 0, [972], (() => o(9823)));
		return t = o.O(t)
	}, t = [], o.O = (e, n, i, r) => {
		if (!n) {
			var s = 1 / 0;
			for (c = 0; c < t.length; c++) {
				for (var [n, i, r] = t[c], a = !0, l = 0; l < n.length; l++)(!1 & r || s >= r) && Object.keys(o.O).every((t => o.O[t](n[l]))) ? n.splice(l--, 1) : (a = !1, r < s && (s = r));
				if (a) {
					t.splice(c--, 1);
					var u = i();
					void 0 !== u && (e = u)
				}
			}
			return e
		}
		r = r || 0;
		for (var c = t.length; c > 0 && t[c - 1][2] > r; c--) t[c] = t[c - 1];
		t[c] = [n, i, r]
	}, n = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, o.t = function(t, i) {
		if (1 & i && (t = this(t)), 8 & i) return t;
		if ("object" == typeof t && t) {
			if (4 & i && t.__esModule) return t;
			if (16 & i && "function" == typeof t.then) return t
		}
		var r = Object.create(null);
		o.r(r);
		var s = {};
		e = e || [null, n({}), n([]), n(n)];
		for (var a = 2 & i && t;
			"object" == typeof a && !~e.indexOf(a); a = n(a)) Object.getOwnPropertyNames(a).forEach((e => s[e] = () => t[e]));
		return s.default = () => t, o.d(r, s), r
	}, o.d = (t, e) => {
		for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
			enumerable: !0,
			get: e[n]
		})
	}, o.f = {}, o.e = t => Promise.all(Object.keys(o.f).reduce(((e, n) => (o.f[n](t, e), e)), [])), o.u = t => t + ".df14ebaecd3f1b7832a6.js", o.miniCssF = t => {}, o.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (t) {
			if ("object" == typeof window) return window
		}
	}(), o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), o.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, (() => {
		var t;
		o.g.importScripts && (t = o.g.location + "");
		var e = o.g.document;
		if (!t && e && (e.currentScript && "SCRIPT" === e.currentScript.tagName.toUpperCase() && (t = e.currentScript.src), !t)) {
			var n = e.getElementsByTagName("script");
			if (n.length)
				for (var i = n.length - 1; i > -1 && (!t || !/^http(s?):/.test(t));) t = n[i--].src
		}
		if (!t) throw new Error("Automatic publicPath is not supported in this browser");
		t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = t
	})(), (() => {
		var t = {
			357: 1
		};
		o.f.i = (e, n) => {
			t[e] || importScripts(o.p + o.u(e))
		};
		var e = self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || [],
			n = e.push.bind(e);
		e.push = e => {
			var [i, r, s] = e;
			for (var a in r) o.o(r, a) && (o.m[a] = r[a]);
			for (s && s(o); i.length;) t[i.pop()] = 1;
			n(e)
		}
	})(), i = o.x, o.x = () => o.e(972).then(i);
	o.x()
})();
//# sourceMappingURL=encrypt-worker.6f09472bb5c19382e0d4.js.map