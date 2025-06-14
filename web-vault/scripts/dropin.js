! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var t;
		((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).dropin = e()
	}
}((function() {
	return function e(t, n, i) {
		function r(a, s) {
			if (!n[a]) {
				if (!t[a]) {
					var l = "function" == typeof require && require;
					if (!s && l) return l(a, !0);
					if (o) return o(a, !0);
					var d = new Error("Cannot find module '" + a + "'");
					throw d.code = "MODULE_NOT_FOUND", d
				}
				var c = n[a] = {
					exports: {}
				};
				t[a][0].call(c.exports, (function(e) {
					return r(t[a][1][e] || e)
				}), c, c.exports, e, t, n, i)
			}
			return n[a].exports
		}
		for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
		return r
	}({
		1: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.loadStylesheet = n.loadScript = void 0;
			var i = e("./load-script");
			n.loadScript = i;
			var r = e("./load-stylesheet");
			n.loadStylesheet = r
		}, {
			"./load-script": 2,
			"./load-stylesheet": 3
		}],
		2: [function(e, t, n) {
			"use strict";
			var i = {};

			function r(e) {
				var t, n = JSON.stringify(e);
				if (!e.forceScriptReload && (t = i[n])) return t;
				var r = document.createElement("script"),
					o = e.dataAttributes || {},
					a = e.container || document.head;
				return r.src = e.src, r.id = e.id || "", r.async = !0, e.type && r.setAttribute("type", "".concat(e.type)), e.crossorigin && r.setAttribute("crossorigin", "".concat(e.crossorigin)), Object.keys(o).forEach((function(e) {
					r.setAttribute("data-".concat(e), "".concat(o[e]))
				})), t = new Promise((function(t, n) {
					r.addEventListener("load", (function() {
						t(r)
					})), r.addEventListener("error", (function() {
						n(new Error("".concat(e.src, " failed to load.")))
					})), r.addEventListener("abort", (function() {
						n(new Error("".concat(e.src, " has aborted.")))
					})), a.appendChild(r)
				})), i[n] = t, t
			}
			r.clearCache = function() {
				i = {}
			}, t.exports = r
		}, {}],
		3: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				var t = document.querySelector('link[href="'.concat(e.href, '"]'));
				if (t) return Promise.resolve(t);
				t = document.createElement("link");
				var n = e.container || document.head;
				return t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e.href), t.setAttribute("id", e.id), n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), Promise.resolve(t)
			}
		}, {}],
		4: [function(e, t, n) {
			t.exports = e("./dist/load-script")
		}, {
			"./dist/load-script": 2
		}],
		5: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, /Android/i.test(e)
			}
		}, {}],
		6: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, /CrOS/i.test(e)
			}
		}, {}],
		7: [function(e, t, n) {
			"use strict";
			var i = e("./is-edge"),
				r = e("./is-samsung"),
				o = e("./is-duckduckgo"),
				a = e("./is-opera"),
				s = e("./is-silk");
			t.exports = function(e) {
				return !(-1 === (e = e || window.navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || i(e) || r(e) || o(e) || a(e) || s(e))
			}
		}, {
			"./is-duckduckgo": 8,
			"./is-edge": 9,
			"./is-opera": 20,
			"./is-samsung": 21,
			"./is-silk": 22
		}],
		8: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/")
			}
		}, {}],
		9: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/") || -1 !== e.indexOf("Edg/")
			}
		}, {}],
		10: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, /Firefox/i.test(e)
			}
		}, {}],
		11: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 10")
			}
		}, {}],
		12: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9")
			}
		}, {}],
		13: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, /FxiOS/i.test(e)
			}
		}, {}],
		14: [function(e, t, n) {
			"use strict";
			var i = e("./is-ios");
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, i(e) && function(e) {
					return /\bGSA\b/.test(e)
				}(e)
			}
		}, {
			"./is-ios": 18
		}],
		15: [function(e, t, n) {
			"use strict";
			var i = e("./is-ios"),
				r = e("./is-ios-firefox"),
				o = /webkit/i;
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, i(e) && function(e) {
					return o.test(e)
				}(e) && ! function(e) {
					return e.indexOf("CriOS") > -1
				}(e) && !r(e) && ! function(e) {
					return e.indexOf("FBAN") > -1
				}(e)
			}
		}, {
			"./is-ios": 18,
			"./is-ios-firefox": 13
		}],
		16: [function(e, t, n) {
			"use strict";
			var i = e("./is-ios"),
				r = e("./is-ios-google-search-app");
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, !!i(e) && (!!r(e) || /.+AppleWebKit(?!.*Safari)/i.test(e))
			}
		}, {
			"./is-ios": 18,
			"./is-ios-google-search-app": 14
		}],
		17: [function(e, t, n) {
			"use strict";
			var i = e("./is-ios-webview");
			t.exports = function(e, t) {
				return t = void 0 !== t ? t : window.statusbar.visible, i(e) && t
			}
		}, {
			"./is-ios-webview": 16
		}],
		18: [function(e, t, n) {
			"use strict";
			var i = e("./is-ipados");
			t.exports = function(e, t, n) {
				void 0 === t && (t = !0), e = e || window.navigator.userAgent;
				var r = /iPhone|iPod|iPad/i.test(e);
				return t ? r || i(e, n) : r
			}
		}, {
			"./is-ipados": 19
		}],
		19: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t) {
				return e = e || window.navigator.userAgent, t = t || window.document, /Mac|iPad/i.test(e) && "ontouchend" in t
			}
		}, {}],
		20: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("OPR/") || -1 !== e.indexOf("Opera/") || -1 !== e.indexOf("OPT/")
			}
		}, {}],
		21: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, /SamsungBrowser/i.test(e)
			}
		}, {}],
		22: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/")
			}
		}, {}],
		23: [function(e, t, n) {
			"use strict";
			var i = e("./is-android"),
				r = e("./is-ios-firefox"),
				o = e("./is-ios-webview"),
				a = e("./is-chrome"),
				s = e("./is-samsung"),
				l = e("./is-duckduckgo");

			function d(e) {
				return (e = e || window.navigator.userAgent).indexOf("Opera Mini") > -1
			}
			t.exports = function(e) {
				return e = e || window.navigator.userAgent, !(o(e) || r(e) || function(e) {
					return e = e || window.navigator.userAgent, !!i(e) && /Version\/[\d.]+/i.test(e) && !d(e) && !l(e)
				}(e) || d(e) || function(e) {
					var t = (e = e || window.navigator.userAgent).match(/CriOS\/(\d+)\./);
					return !!t && parseInt(t[1], 10) < 48
				}(e) || function(e) {
					return !a(e) && !s(e) && /samsung/i.test(e)
				}(e))
			}
		}, {
			"./is-android": 5,
			"./is-chrome": 7,
			"./is-duckduckgo": 8,
			"./is-ios-firefox": 13,
			"./is-ios-webview": 16,
			"./is-samsung": 21
		}],
		24: [function(e, t, n) {
			t.exports = e("./dist/is-android")
		}, {
			"./dist/is-android": 5
		}],
		25: [function(e, t, n) {
			t.exports = e("./dist/is-chrome-os")
		}, {
			"./dist/is-chrome-os": 6
		}],
		26: [function(e, t, n) {
			t.exports = e("./dist/is-chrome")
		}, {
			"./dist/is-chrome": 7
		}],
		27: [function(e, t, n) {
			t.exports = e("./dist/is-firefox")
		}, {
			"./dist/is-firefox": 10
		}],
		28: [function(e, t, n) {
			t.exports = e("./dist/is-ie10")
		}, {
			"./dist/is-ie10": 11
		}],
		29: [function(e, t, n) {
			t.exports = e("./dist/is-ie9")
		}, {
			"./dist/is-ie9": 12
		}],
		30: [function(e, t, n) {
			t.exports = e("./dist/is-ios-safari")
		}, {
			"./dist/is-ios-safari": 15
		}],
		31: [function(e, t, n) {
			t.exports = e("./dist/is-ios-webview")
		}, {
			"./dist/is-ios-webview": 16
		}],
		32: [function(e, t, n) {
			t.exports = e("./dist/is-ios-wkwebview")
		}, {
			"./dist/is-ios-wkwebview": 17
		}],
		33: [function(e, t, n) {
			t.exports = e("./dist/is-ios")
		}, {
			"./dist/is-ios": 18
		}],
		34: [function(e, t, n) {
			t.exports = e("./dist/is-samsung")
		}, {
			"./dist/is-samsung": 21
		}],
		35: [function(e, t, n) {
			t.exports = e("./dist/supports-popups")
		}, {
			"./dist/supports-popups": 23
		}],
		36: [function(e, t, n) {
			"use strict";
			var i = function() {
				function e() {
					this._events = {}
				}
				return e.prototype.on = function(e, t) {
					this._events[e] ? this._events[e].push(t) : this._events[e] = [t]
				}, e.prototype.off = function(e, t) {
					var n = this._events[e];
					if (n) {
						var i = n.indexOf(t);
						n.splice(i, 1)
					}
				}, e.prototype._emit = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					var i = this._events[e];
					i && i.forEach((function(e) {
						e.apply(void 0, t)
					}))
				}, e.prototype.hasListener = function(e) {
					var t = this._events[e];
					return !!t && t.length > 0
				}, e.createChild = function(t) {
					t.prototype = Object.create(e.prototype, {
						constructor: t
					})
				}, e
			}();
			t.exports = i
		}, {}],
		37: [function(e, t, n) {
			"use strict";
			var i = "undefined" != typeof Promise ? Promise : null,
				r = function() {
					function e(t) {
						var n = this;
						"function" != typeof t ? (this._promise = new e.Promise((function(e, t) {
							n._resolveFunction = e, n._rejectFunction = t
						})), t = t || {}, this._onResolve = t.onResolve || e.defaultOnResolve, this._onReject = t.onReject || e.defaultOnReject, e.shouldCatchExceptions(t) && this._promise.catch((function() {})), this._resetState()) : this._promise = new e.Promise(t)
					}
					return e.defaultOnResolve = function(t) {
						return e.Promise.resolve(t)
					}, e.defaultOnReject = function(t) {
						return e.Promise.reject(t)
					}, e.setPromise = function(t) {
						e.Promise = t
					}, e.shouldCatchExceptions = function(t) {
						return t.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(t.suppressUnhandledPromiseMessage) : Boolean(e.suppressUnhandledPromiseMessage)
					}, e.all = function(t) {
						return e.Promise.all(t)
					}, e.allSettled = function(t) {
						return e.Promise.allSettled(t)
					}, e.race = function(t) {
						return e.Promise.race(t)
					}, e.reject = function(t) {
						return e.Promise.reject(t)
					}, e.resolve = function(t) {
						return e.Promise.resolve(t)
					}, e.prototype.then = function() {
						for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
						return (e = this._promise).then.apply(e, t)
					}, e.prototype.catch = function() {
						for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
						return (e = this._promise).catch.apply(e, t)
					}, e.prototype.resolve = function(t) {
						var n = this;
						return this.isFulfilled || (this._setResolved(), e.Promise.resolve().then((function() {
							return n._onResolve(t)
						})).then((function(e) {
							n._resolveFunction(e)
						})).catch((function(e) {
							n._resetState(), n.reject(e)
						}))), this
					}, e.prototype.reject = function(t) {
						var n = this;
						return this.isFulfilled || (this._setRejected(), e.Promise.resolve().then((function() {
							return n._onReject(t)
						})).then((function(e) {
							n._setResolved(), n._resolveFunction(e)
						})).catch((function(e) {
							return n._rejectFunction(e)
						}))), this
					}, e.prototype._resetState = function() {
						this.isFulfilled = !1, this.isResolved = !1, this.isRejected = !1
					}, e.prototype._setResolved = function() {
						this.isFulfilled = !0, this.isResolved = !0, this.isRejected = !1
					}, e.prototype._setRejected = function() {
						this.isFulfilled = !0, this.isResolved = !1, this.isRejected = !0
					}, e.Promise = i, e
				}();
			t.exports = r
		}, {}],
		38: [function(e, t, n) {
			"use strict";
			var i = e("./lib/set-attributes"),
				r = e("./lib/default-attributes"),
				o = e("./lib/assign");
			t.exports = function(e) {
				void 0 === e && (e = {});
				var t = document.createElement("iframe"),
					n = (0, o.assign)({}, r.defaultAttributes, e);
				return n.style && "string" != typeof n.style && ((0, o.assign)(t.style, n.style), delete n.style), (0, i.setAttributes)(t, n), t.getAttribute("id") || (t.id = t.name), t
			}
		}, {
			"./lib/assign": 39,
			"./lib/default-attributes": 40,
			"./lib/set-attributes": 41
		}],
		39: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.assign = void 0, n.assign = function(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				return t.forEach((function(t) {
					"object" == typeof t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}
		}, {}],
		40: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.defaultAttributes = void 0, n.defaultAttributes = {
				src: "about:blank",
				frameBorder: 0,
				allowtransparency: !0,
				scrolling: "no"
			}
		}, {}],
		41: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.setAttributes = void 0, n.setAttributes = function(e, t) {
				for (var n in t)
					if (t.hasOwnProperty(n)) {
						var i = t[n];
						null == i ? e.removeAttribute(n) : e.setAttribute(n, i)
					}
			}
		}, {}],
		42: [function(e, t, n) {
			"use strict";
			t.exports = function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
					var t = 16 * Math.random() | 0;
					return ("x" === e ? t : 3 & t | 8).toString(16)
				}))
			}
		}, {}],
		43: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.deferred = function(e) {
				return function() {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					setTimeout((function() {
						try {
							e.apply(void 0, t)
						} catch (n) {
							console.log("Error in callback function"), console.log(n)
						}
					}), 1)
				}
			}
		}, {}],
		44: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.once = function(e) {
				var t = !1;
				return function() {
					for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
					t || (t = !0, e.apply(void 0, n))
				}
			}
		}, {}],
		45: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.promiseOrCallback = function(e, t) {
				if (!t) return e;
				e.then((function(e) {
					return t(null, e)
				})).catch((function(e) {
					return t(e)
				}))
			}
		}, {}],
		46: [function(e, t, n) {
			"use strict";
			var i = e("./lib/deferred"),
				r = e("./lib/once"),
				o = e("./lib/promise-or-callback");

			function a(e) {
				return function() {
					for (var t, n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
					return "function" == typeof n[n.length - 1] && (t = n.pop(), t = r.once(i.deferred(t))), o.promiseOrCallback(e.apply(this, n), t)
				}
			}
			a.wrapPrototype = function(e, t) {
				void 0 === t && (t = {});
				var n = t.ignoreMethods || [],
					i = !0 === t.transformPrivateMethods;
				return Object.getOwnPropertyNames(e.prototype).filter((function(t) {
					var r, o = "constructor" !== t && "function" == typeof e.prototype[t],
						a = -1 === n.indexOf(t);
					return r = !!i || "_" !== t.charAt(0), o && r && a
				})).forEach((function(t) {
					var n = e.prototype[t];
					e.prototype[t] = a(n)
				})), e
			}, t.exports = a
		}, {
			"./lib/deferred": 43,
			"./lib/once": 44,
			"./lib/promise-or-callback": 45
		}],
		47: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error"),
				r = e("../lib/analytics"),
				o = e("./errors"),
				a = e("../lib/methods"),
				s = e("../lib/convert-methods-to-error"),
				l = e("@braintree/wrap-promise");

			function d(e) {
				this._instantiatedWithClient = Boolean(!e.useDeferredClient), this._client = e.client, this._createPromise = e.createPromise, this._client && this._setMerchantIdentifier()
			}
			d.prototype._waitForClient = function() {
				return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
					this._client = e, this._setMerchantIdentifier()
				}.bind(this))
			}, d.prototype._setMerchantIdentifier = function() {
				var e = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
				e && Object.defineProperty(this, "merchantIdentifier", {
					value: e.merchantIdentifier,
					configurable: !1,
					writable: !1
				})
			}, d.prototype.createPaymentRequest = function(e) {
				return this._instantiatedWithClient ? this._createPaymentRequestSynchronously(e) : this._waitForClient().then(function() {
					return this._createPaymentRequestSynchronously(e)
				}.bind(this))
			}, d.prototype._createPaymentRequestSynchronously = function(e) {
				var t = this._client.getConfiguration().gatewayConfiguration.applePayWeb,
					n = {
						countryCode: t.countryCode,
						currencyCode: t.currencyCode,
						merchantCapabilities: t.merchantCapabilities || ["supports3DS"],
						supportedNetworks: t.supportedNetworks.map((function(e) {
							return "mastercard" === e ? "masterCard" : e
						}))
					};
				return Object.assign({}, n, e)
			}, d.prototype.performValidation = function(e) {
				var t = this;
				return e && e.validationURL ? this._waitForClient().then((function() {
					var n = {
						validationUrl: e.validationURL,
						domainName: e.domainName || window.location.hostname,
						merchantIdentifier: e.merchantIdentifier || t.merchantIdentifier
					};
					return null != e.displayName && (n.displayName = e.displayName), t._client.request({
						method: "post",
						endpoint: "apple_pay_web/sessions",
						data: {
							_meta: {
								source: "apple-pay"
							},
							applePayWebSession: n
						}
					})
				})).then((function(e) {
					return r.sendEvent(t._client, "applepay.performValidation.succeeded"), Promise.resolve(e)
				})).catch((function(e) {
					return r.sendEvent(t._client, "applepay.performValidation.failed"), "CLIENT_REQUEST_ERROR" === e.code ? Promise.reject(new i({
						type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
						code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
						message: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
						details: {
							originalError: e.details.originalError
						}
					})) : Promise.reject(new i({
						type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
						code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
						message: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
						details: {
							originalError: e
						}
					}))
				})) : Promise.reject(new i(o.APPLE_PAY_VALIDATION_URL_REQUIRED))
			}, d.prototype.tokenize = function(e) {
				var t = this;
				return e.token ? this._waitForClient().then((function() {
					return t._client.request({
						method: "post",
						endpoint: "payment_methods/apple_payment_tokens",
						data: {
							_meta: {
								source: "apple-pay"
							},
							applePaymentToken: Object.assign({}, e.token, {
								paymentData: btoa(JSON.stringify(e.token.paymentData))
							})
						}
					})
				})).then((function(e) {
					return r.sendEvent(t._client, "applepay.tokenize.succeeded"), Promise.resolve(e.applePayCards[0])
				})).catch((function(e) {
					return r.sendEvent(t._client, "applepay.tokenize.failed"), Promise.reject(new i({
						type: o.APPLE_PAY_TOKENIZATION.type,
						code: o.APPLE_PAY_TOKENIZATION.code,
						message: o.APPLE_PAY_TOKENIZATION.message,
						details: {
							originalError: e
						}
					}))
				})) : Promise.reject(new i(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED))
			}, d.prototype.teardown = function() {
				return s(this, a(d.prototype)), Promise.resolve()
			}, t.exports = l.wrapPrototype(d)
		}, {
			"../lib/analytics": 85,
			"../lib/braintree-error": 90,
			"../lib/convert-methods-to-error": 92,
			"../lib/methods": 120,
			"./errors": 48,
			"@braintree/wrap-promise": 46
		}],
		48: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error");
			t.exports = {
				APPLE_PAY_NOT_ENABLED: {
					type: i.types.MERCHANT,
					code: "APPLE_PAY_NOT_ENABLED",
					message: "Apple Pay is not enabled for this merchant."
				},
				APPLE_PAY_VALIDATION_URL_REQUIRED: {
					type: i.types.MERCHANT,
					code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
					message: "performValidation must be called with a validationURL."
				},
				APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
					type: i.types.NETWORK,
					code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
					message: "A network error occurred when validating the Apple Pay merchant."
				},
				APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
					type: i.types.MERCHANT,
					code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
					message: "Make sure you have registered your domain name in the Braintree Control Panel."
				},
				APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
					type: i.types.MERCHANT,
					code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
					message: "tokenize must be called with a payment token."
				},
				APPLE_PAY_TOKENIZATION: {
					type: i.types.NETWORK,
					code: "APPLE_PAY_TOKENIZATION",
					message: "A network error occurred when processing the Apple Pay payment."
				}
			}
		}, {
			"../lib/braintree-error": 90
		}],
		49: [function(e, t, n) {
			"use strict";
			var i = e("./apple-pay"),
				r = e("../lib/analytics"),
				o = e("../lib/braintree-error"),
				a = e("../lib/basic-component-verification"),
				s = e("../lib/create-assets-url"),
				l = e("../lib/create-deferred-client"),
				d = e("./errors"),
				c = e("@braintree/wrap-promise");
			t.exports = {
				create: c((function(e) {
					var t = "Apple Pay";
					return a.verify({
						name: t,
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						var n, a = l.create({
							authorization: e.authorization,
							client: e.client,
							debug: e.debug,
							assetsUrl: s.create(e.authorization),
							name: t
						}).then((function(e) {
							return e.getConfiguration().gatewayConfiguration.applePayWeb ? (r.sendEvent(e, "applepay.initialized"), e) : Promise.reject(new o(d.APPLE_PAY_NOT_ENABLED))
						}));
						return e.createPromise = a, n = new i(e), e.useDeferredClient ? n : a.then((function(e) {
							return n._client = e, n
						}))
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/analytics": 85,
			"../lib/basic-component-verification": 88,
			"../lib/braintree-error": 90,
			"../lib/create-assets-url": 94,
			"../lib/create-deferred-client": 96,
			"./apple-pay": 47,
			"./errors": 48,
			"@braintree/wrap-promise": 46
		}],
		50: [function(e, t, n) {
			"use strict";
			var i = e("./constants").BRAINTREE_VERSION,
				r = e("./request/graphql"),
				o = e("./request"),
				a = e("../lib/is-verified-domain"),
				s = e("../lib/braintree-error"),
				l = e("../lib/convert-to-braintree-error"),
				d = e("./get-configuration").getConfiguration,
				c = e("../lib/create-authorization-data"),
				p = e("../lib/add-metadata"),
				u = e("@braintree/wrap-promise"),
				h = e("../lib/once"),
				m = e("../lib/deferred"),
				y = e("../lib/assign").assign,
				f = e("../lib/analytics"),
				E = e("./errors"),
				v = e("../lib/constants").VERSION,
				g = e("../lib/constants").GRAPHQL_URLS,
				_ = e("../lib/methods"),
				b = e("../lib/convert-methods-to-error"),
				P = e("../lib/assets"),
				C = e("../lib/constants").FRAUDNET_FNCLS,
				A = e("../lib/constants").FRAUDNET_SOURCE,
				T = e("../lib/constants").FRAUDNET_URL,
				I = {};

			function D(e) {
				var t, n;
				if (e = e || {}, t = JSON.stringify(e), !(n = e.gatewayConfiguration)) throw new s(E.CLIENT_MISSING_GATEWAY_CONFIGURATION);
				if (["assetsUrl", "clientApiUrl", "configUrl"].forEach((function(e) {
						if (e in n && !a(n[e])) throw new s({
							type: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
							code: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
							message: e + " property is on an invalid domain."
						})
					})), this.getConfiguration = function() {
						return JSON.parse(t)
					}, this._request = o, this._configuration = this.getConfiguration(), this._clientApiBaseUrl = n.clientApiUrl + "/v1/", n.graphQL) {
					if (!a(n.graphQL.url)) throw new s({
						type: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
						code: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
						message: "graphQL.url property is on an invalid domain."
					});
					this._graphQL = new r({
						graphQL: n.graphQL
					})
				}
			}
			D.initialize = function(e) {
				var t, n, i = I[e.authorization];
				if (i) return f.sendEvent(i, "custom.client.load.cached"), i;
				try {
					n = c(e.authorization)
				} catch (r) {
					return Promise.reject(new s(E.CLIENT_INVALID_AUTHORIZATION))
				}
				return i = d(n).then((function(n) {
					return e.debug && (n.isDebug = !0), n.authorization = e.authorization, t = new D(n)
				})), I[e.authorization] = i, f.sendEvent(i, "custom.client.load.initialized"), i.then((function(e) {
					return f.sendEvent(t, "custom.client.load.succeeded"), e
				})).catch((function(t) {
					return delete I[e.authorization], Promise.reject(t)
				}))
			}, D.clearCache = function() {
				I = {}
			}, D.prototype._findOrCreateFraudnetJSON = function(e) {
				var t, n, i, r, o = document.querySelector('script[fncls="' + C + '"]');
				o || ((o = document.body.appendChild(document.createElement("script"))).type = "application/json", o.setAttribute("fncls", C)), t = this.getConfiguration(), n = {
					rda_tenant: "bt_card",
					mid: t.gatewayConfiguration.merchantId
				}, (i = t.authorizationFingerprint) && i.split("&").forEach((function(e) {
					var t = e.split("=");
					"customer_id" === t[0] && t.length > 1 && (n.cid = t[1])
				})), r = {
					f: e.substr(0, 32),
					fp: n,
					bu: !1,
					s: A
				}, o.text = JSON.stringify(r)
			}, D.prototype.request = function(e, t) {
				var n = this,
					r = new Promise((function(t, r) {
						var o, a, d, c, u, h = Boolean("payment_methods/credit_cards" === e.endpoint && n.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);
						if ("graphQLApi" !== e.api && (e.method ? e.endpoint || (o = "options.endpoint") : o = "options.method"), o) throw new s({
							type: E.CLIENT_OPTION_REQUIRED.type,
							code: E.CLIENT_OPTION_REQUIRED.code,
							message: o + " is required when making a request."
						});
						if (a = "api" in e ? e.api : "clientApi", c = {
								method: e.method,
								graphQL: n._graphQL,
								timeout: e.timeout,
								metadata: n._configuration.analyticsMetadata
							}, "clientApi" === a) d = n._clientApiBaseUrl, c.data = p(n._configuration, e.data);
						else {
							if ("graphQLApi" !== a) throw new s({
								type: E.CLIENT_OPTION_INVALID.type,
								code: E.CLIENT_OPTION_INVALID.code,
								message: "options.api is invalid."
							});
							d = g[n._configuration.gatewayConfiguration.environment], e.endpoint = "", c.method = "post", c.data = y({
								clientSdkMetadata: {
									platform: n._configuration.analyticsMetadata.platform,
									source: n._configuration.analyticsMetadata.source,
									integration: n._configuration.analyticsMetadata.integration,
									sessionId: n._configuration.analyticsMetadata.sessionId,
									version: v
								}
							}, e.data), c.headers = {
								Authorization: "Bearer " + ((u = n._configuration).authorizationFingerprint || u.authorization),
								"Braintree-Version": i
							}
						}
						c.url = d + e.endpoint, c.sendAnalyticsEvent = function(e) {
							f.sendEvent(n, e)
						}, n._request(c, (function(e, i, o) {
							var d, c;
							c = function(e, t) {
								var n; - 1 === e ? n = new s(E.CLIENT_REQUEST_TIMEOUT) : 401 === e ? n = new s(E.CLIENT_AUTHORIZATION_INVALID) : 403 === e ? n = new s(E.CLIENT_AUTHORIZATION_INSUFFICIENT) : 429 === e ? n = new s(E.CLIENT_RATE_LIMITED) : e >= 500 ? n = new s(E.CLIENT_GATEWAY_NETWORK) : (e < 200 || e >= 400) && (n = l(t, {
									type: E.CLIENT_REQUEST_ERROR.type,
									code: E.CLIENT_REQUEST_ERROR.code,
									message: E.CLIENT_REQUEST_ERROR.message
								}));
								if (n) return n.details = n.details || {}, n.details.httpStatus = e, n
							}(o, e), c ? r(c) : "graphQLApi" === a && i.errors ? r(l(i.errors, {
								type: E.CLIENT_GRAPHQL_REQUEST_ERROR.type,
								code: E.CLIENT_GRAPHQL_REQUEST_ERROR.code,
								message: E.CLIENT_GRAPHQL_REQUEST_ERROR.message
							})) : (d = y({
								_httpStatus: o
							}, i), h && d.creditCards && d.creditCards.length > 0 && (n._findOrCreateFraudnetJSON(d.creditCards[0].nonce), P.loadScript({
								src: T,
								forceScriptReload: !0
							})), t(d))
						}))
					}));
				return "function" == typeof t ? (t = h(m(t)), void r.then((function(e) {
					t(null, e, e._httpStatus)
				})).catch((function(e) {
					var n = e && e.details && e.details.httpStatus;
					t(e, null, n)
				}))) : r
			}, D.prototype.toJSON = function() {
				return this.getConfiguration()
			}, D.prototype.getVersion = function() {
				return v
			}, D.prototype.teardown = u((function() {
				return delete I[this.getConfiguration().authorization], b(this, _(D.prototype)), Promise.resolve()
			})), t.exports = D
		}, {
			"../lib/add-metadata": 84,
			"../lib/analytics": 85,
			"../lib/assets": 86,
			"../lib/assign": 87,
			"../lib/braintree-error": 90,
			"../lib/constants": 91,
			"../lib/convert-methods-to-error": 92,
			"../lib/convert-to-braintree-error": 93,
			"../lib/create-authorization-data": 95,
			"../lib/deferred": 97,
			"../lib/is-verified-domain": 118,
			"../lib/methods": 120,
			"../lib/once": 121,
			"./constants": 51,
			"./errors": 52,
			"./get-configuration": 53,
			"./request": 64,
			"./request/graphql": 62,
			"@braintree/wrap-promise": 46
		}],
		51: [function(e, t, n) {
			"use strict";
			t.exports = {
				BRAINTREE_VERSION: "2018-05-10"
			}
		}, {}],
		52: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error");
			t.exports = {
				CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
					type: i.types.MERCHANT,
					code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"
				},
				CLIENT_OPTION_REQUIRED: {
					type: i.types.MERCHANT,
					code: "CLIENT_OPTION_REQUIRED"
				},
				CLIENT_OPTION_INVALID: {
					type: i.types.MERCHANT,
					code: "CLIENT_OPTION_INVALID"
				},
				CLIENT_MISSING_GATEWAY_CONFIGURATION: {
					type: i.types.INTERNAL,
					code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
					message: "Missing gatewayConfiguration."
				},
				CLIENT_INVALID_AUTHORIZATION: {
					type: i.types.MERCHANT,
					code: "CLIENT_INVALID_AUTHORIZATION",
					message: "Authorization is invalid. Make sure your client token or tokenization key is valid."
				},
				CLIENT_GATEWAY_NETWORK: {
					type: i.types.NETWORK,
					code: "CLIENT_GATEWAY_NETWORK",
					message: "Cannot contact the gateway at this time."
				},
				CLIENT_REQUEST_TIMEOUT: {
					type: i.types.NETWORK,
					code: "CLIENT_REQUEST_TIMEOUT",
					message: "Request timed out waiting for a reply."
				},
				CLIENT_REQUEST_ERROR: {
					type: i.types.NETWORK,
					code: "CLIENT_REQUEST_ERROR",
					message: "There was a problem with your request."
				},
				CLIENT_GRAPHQL_REQUEST_ERROR: {
					type: i.types.NETWORK,
					code: "CLIENT_GRAPHQL_REQUEST_ERROR",
					message: "There was a problem with your request."
				},
				CLIENT_RATE_LIMITED: {
					type: i.types.MERCHANT,
					code: "CLIENT_RATE_LIMITED",
					message: "You are being rate-limited; please try again in a few minutes."
				},
				CLIENT_AUTHORIZATION_INSUFFICIENT: {
					type: i.types.MERCHANT,
					code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
					message: "The authorization used has insufficient privileges."
				},
				CLIENT_AUTHORIZATION_INVALID: {
					type: i.types.MERCHANT,
					code: "CLIENT_AUTHORIZATION_INVALID",
					message: "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted."
				}
			}
		}, {
			"../lib/braintree-error": 90
		}],
		53: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error"),
				r = e("@braintree/wrap-promise"),
				o = e("./request"),
				a = e("@braintree/uuid"),
				s = e("../lib/constants"),
				l = e("./errors"),
				d = e("./request/graphql"),
				c = e("../lib/constants").GRAPHQL_URLS,
				p = e("../lib/is-date-string-before-or-on"),
				u = e("./constants").BRAINTREE_VERSION;
			t.exports = {
				getConfiguration: r((function(e) {
					return new Promise((function(t, n) {
						var r, h, m, y, f = a(),
							E = {
								merchantAppId: window.location.host,
								platform: s.PLATFORM,
								sdkVersion: s.VERSION,
								source: s.SOURCE,
								integration: s.INTEGRATION,
								integrationType: s.INTEGRATION,
								sessionId: f
							};
						h = e.attrs, m = e.configUrl, h._meta = E, h.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION, h.configVersion = "3", y = {
							url: m,
							method: "GET",
							data: h
						}, h.authorizationFingerprint && e.graphQL ? (p(e.graphQL.date, u) && (y.graphQL = new d({
							graphQL: {
								url: e.graphQL.url,
								features: ["configuration"]
							}
						})), y.metadata = E) : h.tokenizationKey && (y.graphQL = new d({
							graphQL: {
								url: c[e.environment],
								features: ["configuration"]
							}
						}), y.metadata = E), o(y, (function(e, o, a) {
							var s;
							if (e) return s = 403 === a ? l.CLIENT_AUTHORIZATION_INSUFFICIENT : 401 === a ? l.CLIENT_AUTHORIZATION_INVALID : l.CLIENT_GATEWAY_NETWORK, void n(new i({
								type: s.type,
								code: s.code,
								message: s.message,
								details: {
									originalError: e
								}
							}));
							r = {
								authorizationType: h.tokenizationKey ? "TOKENIZATION_KEY" : "CLIENT_TOKEN",
								authorizationFingerprint: h.authorizationFingerprint,
								analyticsMetadata: E,
								gatewayConfiguration: o
							}, t(r)
						}))
					}))
				}))
			}
		}, {
			"../lib/braintree-error": 90,
			"../lib/constants": 91,
			"../lib/is-date-string-before-or-on": 116,
			"./constants": 51,
			"./errors": 52,
			"./request": 64,
			"./request/graphql": 62,
			"@braintree/uuid": 42,
			"@braintree/wrap-promise": 46
		}],
		54: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error"),
				r = e("./client"),
				o = e("@braintree/wrap-promise"),
				a = e("../lib/errors");
			t.exports = {
				create: o((function(e) {
					return e.authorization ? r.initialize(e) : Promise.reject(new i({
						type: a.INSTANTIATION_OPTION_REQUIRED.type,
						code: a.INSTANTIATION_OPTION_REQUIRED.code,
						message: "options.authorization is required when instantiating a client."
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/braintree-error": 90,
			"../lib/errors": 100,
			"./client": 50,
			"@braintree/wrap-promise": 46
		}],
		55: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/querystring"),
				r = e("../../lib/assign").assign,
				o = e("./prep-body"),
				a = e("./parse-body"),
				s = e("./xhr"),
				l = s.isAvailable,
				d = e("./graphql/request"),
				c = e("./default-request"),
				p = 1,
				u = 408;

			function h(e, t, n) {
				var m, y, f, E, v, g, _, b = e.url,
					P = e.graphQL,
					C = e.timeout,
					A = s.getRequestObject(),
					T = n,
					I = Boolean(P && P.isGraphQLRequest(b, e.data));
				e.headers = r({
					"Content-Type": "application/json"
				}, e.headers), b = (f = I ? new d(e) : new c(e)).getUrl(), E = f.getBody(), v = f.getMethod(), g = f.getHeaders(), "GET" === v && (b = i.queryify(b, E), E = null), l ? A.onreadystatechange = function() {
					if (4 === A.readyState) {
						if (0 === A.status && I) return delete e.graphQL, void h(e, t, n);
						if (_ = a(A.responseText), y = f.adaptResponseBody(_), (m = f.determineStatus(A.status, _)) >= 400 || m < 200) {
							if (I && function(e) {
									var t = !e.data && e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
									return "UNKNOWN" === t || "INTERNAL" === t
								}(_)) return delete e.graphQL, void h(e, t, n);
							if (t < p && function(e) {
									return !e || e === u
								}(m)) return t++, void h(e, t, n);
							T(y || "error", null, m || 500)
						} else T(null, y, m)
					}
				} : (e.headers && (b = i.queryify(b, g)), A.onload = function() {
					T(null, a(A.responseText), A.status)
				}, A.onerror = function() {
					T("error", null, 500)
				}, A.onprogress = function() {}, A.ontimeout = function() {
					T("timeout", null, -1)
				});
				try {
					A.open(v, b, !0)
				} catch (D) {
					if (!I) throw D;
					return delete e.graphQL, void h(e, t, n)
				}
				A.timeout = C, l && Object.keys(g).forEach((function(e) {
					A.setRequestHeader(e, g[e])
				}));
				try {
					A.send(o(v, E))
				} catch (N) {}
			}
			t.exports = {
				request: function(e, t) {
					h(e, 0, t)
				}
			}
		}, {
			"../../lib/assign": 87,
			"../../lib/querystring": 122,
			"./default-request": 56,
			"./graphql/request": 63,
			"./parse-body": 65,
			"./prep-body": 66,
			"./xhr": 67
		}],
		56: [function(e, t, n) {
			"use strict";

			function i(e) {
				this._url = e.url, this._data = e.data, this._method = e.method, this._headers = e.headers
			}
			i.prototype.getUrl = function() {
				return this._url
			}, i.prototype.getBody = function() {
				return this._data
			}, i.prototype.getMethod = function() {
				return this._method
			}, i.prototype.getHeaders = function() {
				return this._headers
			}, i.prototype.adaptResponseBody = function(e) {
				return e
			}, i.prototype.determineStatus = function(e) {
				return e
			}, t.exports = i
		}, {}],
		57: [function(e, t, n) {
			"use strict";
			var i = e("./error"),
				r = e("../../../../lib/assign").assign,
				o = {
					creditCard: {
						AMERICAN_EXPRESS: "American Express",
						DISCOVER: "Discover",
						INTERNATIONAL_MAESTRO: "Maestro",
						JCB: "JCB",
						MASTERCARD: "MasterCard",
						SOLO: "Solo",
						UK_MAESTRO: "UK Maestro",
						UNION_PAY: "UnionPay",
						VISA: "Visa",
						ELO: "Elo",
						HIPER: "Hiper",
						HIPERCARD: "Hipercard"
					},
					applePayWeb: {
						VISA: "visa",
						MASTERCARD: "mastercard",
						DISCOVER: "discover",
						AMERICAN_EXPRESS: "amex",
						INTERNATIONAL_MAESTRO: "maestro",
						ELO: "elo"
					},
					visaCheckout: {
						VISA: "Visa",
						MASTERCARD: "MasterCard",
						DISCOVER: "Discover",
						AMERICAN_EXPRESS: "American Express"
					},
					googlePay: {
						VISA: "visa",
						MASTERCARD: "mastercard",
						DISCOVER: "discover",
						AMERICAN_EXPRESS: "amex",
						INTERNATIONAL_MAESTRO: "maestro",
						ELO: "elo"
					},
					masterpass: {
						VISA: "visa",
						MASTERCARD: "master",
						DISCOVER: "discover",
						AMERICAN_EXPRESS: "amex",
						DINERS: "diners",
						INTERNATIONAL_MAESTRO: "maestro",
						JCB: "jcb"
					}
				};

			function a(e, t) {
				return e.reduce((function(e, n) {
					return t.hasOwnProperty(n) ? e.concat(t[n]) : e
				}), [])
			}
			t.exports = function(e, t) {
				return e.data && !e.errors ? function(e, t) {
					var n, i = e.data.clientConfiguration;
					n = {
						environment: i.environment.toLowerCase(),
						clientApiUrl: i.clientApiUrl,
						assetsUrl: i.assetsUrl,
						analytics: {
							url: i.analyticsUrl
						},
						merchantId: i.merchantId,
						venmo: "off"
					}, i.supportedFeatures && (n.graphQL = {
						url: t._graphQL._config.url,
						features: i.supportedFeatures.map((function(e) {
							return e.toLowerCase()
						}))
					});
					i.braintreeApi && (n.braintreeApi = i.braintreeApi);
					i.applePayWeb && (n.applePayWeb = i.applePayWeb, n.applePayWeb.supportedNetworks = a(i.applePayWeb.supportedCardBrands, o.applePayWeb), delete n.applePayWeb.supportedCardBrands);
					i.ideal && (n.ideal = i.ideal);
					i.kount && (n.kount = {
						kountMerchantId: i.kount.merchantId
					});
					i.creditCard ? (n.challenges = i.creditCard.challenges.map((function(e) {
						return e.toLowerCase()
					})), n.creditCards = {
						supportedCardTypes: a(i.creditCard.supportedCardBrands, o.creditCard)
					}, n.threeDSecureEnabled = i.creditCard.threeDSecureEnabled, n.threeDSecure = i.creditCard.threeDSecure) : (n.challenges = [], n.creditCards = {
						supportedCardTypes: []
					}, n.threeDSecureEnabled = !1);
					i.googlePay && (n.androidPay = {
						displayName: i.googlePay.displayName,
						enabled: !0,
						environment: i.googlePay.environment.toLowerCase(),
						googleAuthorizationFingerprint: i.googlePay.googleAuthorization,
						paypalClientId: i.googlePay.paypalClientId,
						supportedNetworks: a(i.googlePay.supportedCardBrands, o.googlePay)
					});
					i.venmo && (n.payWithVenmo = {
						merchantId: i.venmo.merchantId,
						accessToken: i.venmo.accessToken,
						environment: i.venmo.environment.toLowerCase(),
						enrichedCustomerDataEnabled: i.venmo.enrichedCustomerDataEnabled
					});
					i.paypal ? (n.paypalEnabled = !0, n.paypal = r({}, i.paypal), n.paypal.currencyIsoCode = n.paypal.currencyCode, n.paypal.environment = n.paypal.environment.toLowerCase(), delete n.paypal.currencyCode) : n.paypalEnabled = !1;
					i.unionPay && (n.unionPay = {
						enabled: !0,
						merchantAccountId: i.unionPay.merchantAccountId
					});
					i.visaCheckout && (n.visaCheckout = {
						apikey: i.visaCheckout.apiKey,
						encryptionKey: i.visaCheckout.encryptionKey,
						externalClientId: i.visaCheckout.externalClientId,
						supportedCardTypes: a(i.visaCheckout.supportedCardBrands, o.visaCheckout)
					});
					i.masterpass && (n.masterpass = {
						merchantCheckoutId: i.masterpass.merchantCheckoutId,
						supportedNetworks: a(i.masterpass.supportedCardBrands, o.masterpass)
					});
					i.usBankAccount && (n.usBankAccount = {
						routeId: i.usBankAccount.routeId,
						plaid: {
							publicKey: i.usBankAccount.plaidPublicKey
						}
					});
					return n
				}(e, t) : i(e)
			}
		}, {
			"../../../../lib/assign": 87,
			"./error": 59
		}],
		58: [function(e, t, n) {
			"use strict";
			var i = e("./error"),
				r = {
					AMERICAN_EXPRESS: "American Express",
					DINERS: "Discover",
					DISCOVER: "Discover",
					ELO: "Elo",
					HIPER: "Hiper",
					HIPERCARD: "Hipercard",
					INTERNATIONAL_MAESTRO: "Maestro",
					JCB: "JCB",
					MASTERCARD: "MasterCard",
					UK_MAESTRO: "Maestro",
					UNION_PAY: "UnionPay",
					VISA: "Visa"
				},
				o = {
					YES: "Yes",
					NO: "No",
					UNKNOWN: "Unknown"
				},
				a = {
					PSDTWO: "psd2"
				};
			t.exports = function(e) {
				return e.data && !e.errors ? function(e) {
					var t, n, i = e.data.tokenizeCreditCard,
						s = i.creditCard,
						l = s.last4 ? s.last4.substr(2, 4) : "",
						d = s.binData;
					d && (["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"].forEach((function(e) {
						d[e] ? d[e] = o[d[e]] : d[e] = "Unknown"
					})), ["issuingBank", "countryOfIssuance", "productId"].forEach((function(e) {
						d[e] || (d[e] = "Unknown")
					})));
					t = {
						creditCards: [{
							binData: d,
							consumed: !1,
							description: l ? "ending in " + l : "",
							nonce: i.token,
							details: {
								cardholderName: s.cardholderName,
								expirationMonth: s.expirationMonth,
								expirationYear: s.expirationYear,
								bin: s.bin || "",
								cardType: r[s.brandCode] || "Unknown",
								lastFour: s.last4 || "",
								lastTwo: l
							},
							type: "CreditCard",
							threeDSecureInfo: null
						}]
					}, i.authenticationInsight && (n = i.authenticationInsight.customerAuthenticationRegulationEnvironment, t.creditCards[0].authenticationInsight = {
						regulationEnvironment: a[n] || n.toLowerCase()
					});
					return t
				}(e) : i(e)
			}
		}, {
			"./error": 59
		}],
		59: [function(e, t, n) {
			"use strict";

			function i(e, t, n) {
				var r, o = t.extensions.legacyCode,
					a = e[0];
				1 !== e.length ? (n.forEach((function(e) {
					e.field === a && (r = e)
				})), r || (r = {
					field: a,
					fieldErrors: []
				}, n.push(r)), i(e.slice(1), t, r.fieldErrors)) : n.push({
					code: o,
					field: a,
					message: t.message
				})
			}

			function r(e) {
				return {
					creditCard: "Credit card is invalid"
				} [e[0].field]
			}
			t.exports = function(e) {
				var t = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
				return "VALIDATION" === t ? function(e) {
					var t = function(e) {
						var t = [];
						return e.forEach((function(e) {
							e.extensions && e.extensions.inputPath && i(e.extensions.inputPath.slice(1), e, t)
						})), t
					}(e.errors);
					if (0 === t.length) return {
						error: {
							message: e.errors[0].message
						}
					};
					return {
						error: {
							message: r(t)
						},
						fieldErrors: t
					}
				}(e) : t ? function(e) {
					return {
						error: {
							message: e.errors[0].message
						},
						fieldErrors: []
					}
				}(e) : {
					error: {
						message: "There was a problem serving your request"
					},
					fieldErrors: []
				}
			}
		}, {}],
		60: [function(e, t, n) {
			"use strict";
			t.exports = function() {
				return {
					query: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",
					operationName: "ClientConfiguration"
				}
			}
		}, {}],
		61: [function(e, t, n) {
			"use strict";
			var i = e("../../../../lib/assign").assign;

			function r(e, t) {
				var n = e.creditCard,
					r = n && n.billingAddress,
					o = n && n.expirationDate,
					a = n && (n.expirationMonth || o && o.split("/")[0].trim()),
					s = n && (n.expirationYear || o && o.split("/")[1].trim()),
					l = {
						input: {
							creditCard: {
								number: n && n.number,
								expirationMonth: a,
								expirationYear: s,
								cvv: n && n.cvv,
								cardholderName: n && n.cardholderName
							},
							options: {}
						}
					};
				return t.hasAuthenticationInsight && (l.authenticationInsightInput = {
					merchantAccountId: e.merchantAccountId
				}), r && (l.input.creditCard.billingAddress = r), l.input = function(e, t) {
					var n;
					e.creditCard && e.creditCard.options && "boolean" == typeof e.creditCard.options.validate ? n = e.creditCard.options.validate : e.authorizationFingerprint && e.tokenizationKey || e.authorizationFingerprint ? n = !0 : e.tokenizationKey && (n = !1);
					"boolean" == typeof n && (t.options = i({
						validate: n
					}, t.options));
					return t
				}(e, l.input), l
			}
			t.exports = function(e) {
				var t, n, i, o = {
					hasAuthenticationInsight: Boolean(e.authenticationInsight && e.merchantAccountId)
				};
				return {
					query: (t = o, n = t.hasAuthenticationInsight, i = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!", n && (i += ", $authenticationInsightInput: AuthenticationInsightInput!"), i += ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } ", n && (i += "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }"), i += "  } }"),
					variables: r(e, o),
					operationName: "TokenizeCreditCard"
				}
			}
		}, {
			"../../../../lib/assign": 87
		}],
		62: [function(e, t, n) {
			"use strict";
			var i = {
					tokenize_credit_cards: "payment_methods/credit_cards",
					configuration: "configuration"
				},
				r = ["creditCard.options.unionPayEnrollment"];

			function o(e) {
				this._config = e.graphQL
			}
			o.prototype.getGraphQLEndpoint = function() {
				return this._config.url
			}, o.prototype.isGraphQLRequest = function(e, t) {
				var n, o = this.getClientApiPath(e);
				return !(!this._isGraphQLEnabled() || !o) && (n = this._config.features.some((function(e) {
					return i[e] === o
				})), ! function(e) {
					return r.some((function(t) {
						return void 0 !== t.split(".").reduce((function(e, t) {
							return e && e[t]
						}), e)
					}))
				}(t) && n)
			}, o.prototype.getClientApiPath = function(e) {
				var t, n = e.split("/client_api/v1/");
				return n.length > 1 && (t = n[1].split("?")[0]), t
			}, o.prototype._isGraphQLEnabled = function() {
				return Boolean(this._config)
			}, t.exports = o
		}, {}],
		63: [function(e, t, n) {
			"use strict";
			var i = e("../../constants").BRAINTREE_VERSION,
				r = e("../../../lib/assign").assign,
				o = e("../../../lib/snake-case-to-camel-case"),
				a = e("./generators/credit-card-tokenization"),
				s = e("./adapters/credit-card-tokenization"),
				l = e("./generators/configuration"),
				d = e("./adapters/configuration"),
				c = {
					"payment_methods/credit_cards": a,
					configuration: l
				},
				p = {
					"payment_methods/credit_cards": s,
					configuration: d
				};

			function u(e) {
				var t = e.graphQL.getClientApiPath(e.url);
				this._graphQL = e.graphQL, this._data = e.data, this._method = e.method, this._headers = e.headers, this._clientSdkMetadata = {
					source: e.metadata.source,
					integration: e.metadata.integration,
					sessionId: e.metadata.sessionId
				}, this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype, this._generator = c[t], this._adapter = p[t], this._sendAnalyticsEvent("graphql.init")
			}

			function h(e) {
				var t = {};
				return Object.keys(e).forEach((function(n) {
					var i = o(n);
					"object" == typeof e[n] ? t[i] = h(e[n]) : "number" == typeof e[n] ? t[i] = String(e[n]) : t[i] = e[n]
				})), t
			}
			u.prototype.getUrl = function() {
				return this._graphQL.getGraphQLEndpoint()
			}, u.prototype.getBody = function() {
				var e = h(this._data),
					t = this._generator(e),
					n = r({
						clientSdkMetadata: this._clientSdkMetadata
					}, t);
				return JSON.stringify(n)
			}, u.prototype.getMethod = function() {
				return "POST"
			}, u.prototype.getHeaders = function() {
				var e, t;
				return this._data.authorizationFingerprint ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"), e = this._data.authorizationFingerprint) : (this._sendAnalyticsEvent("graphql.tokenization-key"), e = this._data.tokenizationKey), t = {
					Authorization: "Bearer " + e,
					"Braintree-Version": i
				}, r({}, this._headers, t)
			}, u.prototype.adaptResponseBody = function(e) {
				return this._adapter(e, this)
			}, u.prototype.determineStatus = function(e, t) {
				var n, i;
				return 200 === e ? (i = t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorClass, n = t.data && !t.errors ? 200 : "VALIDATION" === i ? 422 : "AUTHORIZATION" === i ? 403 : "AUTHENTICATION" === i ? 401 : function(e, t) {
					return !e && t.errors[0].message
				}(i, t) ? 403 : 500) : n = e || 500, this._sendAnalyticsEvent("graphql.status." + e), this._sendAnalyticsEvent("graphql.determinedStatus." + n), n
			}, t.exports = u
		}, {
			"../../../lib/assign": 87,
			"../../../lib/snake-case-to-camel-case": 124,
			"../../constants": 51,
			"./adapters/configuration": 57,
			"./adapters/credit-card-tokenization": 58,
			"./generators/configuration": 60,
			"./generators/credit-card-tokenization": 61
		}],
		64: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/once"),
				r = e("./ajax-driver");
			t.exports = function(e, t) {
				t = i(t || Function.prototype), e.method = (e.method || "GET").toUpperCase(), e.timeout = null == e.timeout ? 6e4 : e.timeout, e.data = e.data || {}, r.request(e, t)
			}
		}, {
			"../../lib/once": 121,
			"./ajax-driver": 55
		}],
		65: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				try {
					e = JSON.parse(e)
				} catch (t) {}
				return e
			}
		}, {}],
		66: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t) {
				if ("string" != typeof e) throw new Error("Method must be a string");
				return "get" !== e.toLowerCase() && null != t && (t = "string" == typeof t ? t : JSON.stringify(t)), t
			}
		}, {}],
		67: [function(e, t, n) {
			"use strict";
			var i = "undefined" != typeof window && window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest;
			t.exports = {
				isAvailable: i,
				getRequestObject: function() {
					return i ? new window.XMLHttpRequest : new window.XDomainRequest
				}
			}
		}, {}],
		68: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error");
			t.exports = {
				GOOGLE_PAYMENT_NOT_ENABLED: {
					type: i.types.MERCHANT,
					code: "GOOGLE_PAYMENT_NOT_ENABLED",
					message: "Google Pay is not enabled for this merchant."
				},
				GOOGLE_PAYMENT_GATEWAY_ERROR: {
					code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
					message: "There was an error when tokenizing the Google Pay payment method.",
					type: i.types.UNKNOWN
				},
				GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
					code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
					type: i.types.MERCHANT
				}
			}
		}, {
			"../lib/braintree-error": 90
		}],
		69: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../lib/assign").assign,
				o = e("../lib/convert-methods-to-error"),
				a = e("../lib/find"),
				s = e("../lib/generate-google-pay-configuration"),
				l = e("../lib/braintree-error"),
				d = e("./errors"),
				c = e("../lib/methods"),
				p = e("@braintree/wrap-promise"),
				u = {
					1: "_createV1PaymentDataRequest",
					2: "_createV2PaymentDataRequest"
				};

			function h(e) {
				if (this._createPromise = e.createPromise, this._client = e.client, this._useDeferredClient = e.useDeferredClient, this._googlePayVersion = e.googlePayVersion || 1, this._googleMerchantId = e.googleMerchantId, this._isUnsupportedGooglePayAPIVersion()) throw new l({
					code: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
					message: "The Braintree SDK does not support Google Pay version " + this._googlePayVersion + ". Please upgrade the version of your Braintree SDK and contact support if this error persists.",
					type: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type
				})
			}
			h.prototype._waitForClient = function() {
				return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
					this._client = e
				}.bind(this))
			}, h.prototype._isUnsupportedGooglePayAPIVersion = function() {
				return !(this._googlePayVersion in u)
			}, h.prototype._getDefaultConfig = function() {
				return this._defaultConfig || (this._defaultConfig = s(this._client.getConfiguration(), this._googlePayVersion, this._googleMerchantId)), this._defaultConfig
			}, h.prototype._createV1PaymentDataRequest = function(e) {
				var t = this._getDefaultConfig(),
					n = e.cardRequirements && e.cardRequirements.allowedCardNetworks,
					i = t.cardRequirements.allowedCardNetworks,
					o = n || i;
				return (e = r({}, t, e)).cardRequirements.allowedCardNetworks = o, e
			}, h.prototype._createV2PaymentDataRequest = function(e) {
				var t = this._getDefaultConfig();
				return e.allowedPaymentMethods && e.allowedPaymentMethods.forEach((function(e) {
					var n = a(t.allowedPaymentMethods, "type", e.type);
					n && function(e, t) {
						Object.keys(t).forEach((function(n) {
							"object" == typeof t[n] ? e[n] = r({}, t[n], e[n]) : e[n] = e[n] || t[n]
						}))
					}(e, n)
				})), e = r({}, t, e)
			}, h.prototype.createPaymentDataRequest = function(e) {
				return this._useDeferredClient ? this._waitForClient().then(function() {
					return this._createPaymentDataRequestSyncronously(e)
				}.bind(this)) : this._createPaymentDataRequestSyncronously(e)
			}, h.prototype._createPaymentDataRequestSyncronously = function(e) {
				var t = r({}, e),
					n = this._googlePayVersion,
					o = u[n];
				return i.sendEvent(this._createPromise, "google-payment.v" + n + ".createPaymentDataRequest"), this[o](t)
			}, h.prototype.parseResponse = function(e) {
				var t = this;
				return Promise.resolve().then((function() {
					var n, r = 2 === e.apiVersion ? e.paymentMethodData.tokenizationData.token : e.paymentMethodToken.token,
						o = JSON.parse(r),
						a = o.error;
					return a ? Promise.reject(a) : (i.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded"), o.paypalAccounts ? (n = o.paypalAccounts[0], i.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded.paypal"), Promise.resolve({
						nonce: n.nonce,
						type: n.type,
						description: n.description
					})) : (n = o.androidPayCards[0], i.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded.google-payment"), Promise.resolve({
						nonce: n.nonce,
						type: n.type,
						description: n.description,
						details: {
							cardType: n.details.cardType,
							lastFour: n.details.lastFour,
							lastTwo: n.details.lastTwo,
							isNetworkTokenized: n.details.isNetworkTokenized,
							bin: n.details.bin
						},
						binData: n.binData
					})))
				})).catch((function(e) {
					return i.sendEvent(t._createPromise, "google-payment.parseResponse.failed"), Promise.reject(new l({
						code: d.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
						message: d.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
						type: d.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
						details: {
							originalError: e
						}
					}))
				}))
			}, h.prototype.teardown = function() {
				return o(this, c(h.prototype)), Promise.resolve()
			}, t.exports = p.wrapPrototype(h)
		}, {
			"../lib/analytics": 85,
			"../lib/assign": 87,
			"../lib/braintree-error": 90,
			"../lib/convert-methods-to-error": 92,
			"../lib/find": 102,
			"../lib/generate-google-pay-configuration": 114,
			"../lib/methods": 120,
			"./errors": 68,
			"@braintree/wrap-promise": 46
		}],
		70: [function(e, t, n) {
			"use strict";
			var i = e("./google-payment"),
				r = e("../lib/braintree-error"),
				o = e("../lib/create-assets-url"),
				a = e("../lib/create-deferred-client"),
				s = e("../lib/basic-component-verification"),
				l = e("@braintree/wrap-promise"),
				d = e("./errors");
			t.exports = {
				create: l((function(e) {
					var t = "Google Pay";
					return s.verify({
						name: t,
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						var n, s;
						return n = a.create({
							authorization: e.authorization,
							client: e.client,
							debug: e.debug,
							assetsUrl: o.create(e.authorization),
							name: t
						}).then((function(t) {
							var n = t.getConfiguration();
							return e.client = t, n.gatewayConfiguration.androidPay ? t : Promise.reject(new r(d.GOOGLE_PAYMENT_NOT_ENABLED))
						})), e.createPromise = n, s = new i(e), e.useDeferredClient ? s : n.then((function(e) {
							return s._client = e, s
						}))
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/basic-component-verification": 88,
			"../lib/braintree-error": 90,
			"../lib/create-assets-url": 94,
			"../lib/create-deferred-client": 96,
			"./errors": 68,
			"./google-payment": 69,
			"@braintree/wrap-promise": 46
		}],
		71: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/braintree-error"),
				r = e("../shared/errors"),
				o = e("../shared/constants").allowedAttributes;
			t.exports = function(e, t) {
				var n;
				return o.hasOwnProperty(e) ? null == t || function(e, t) {
					if ("string" === o[e]) return "string" == typeof t || "number" == typeof t;
					if ("boolean" === o[e]) return "true" === String(t) || "false" === String(t);
					return !1
				}(e, t) || (n = new i({
					type: r.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
					code: r.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
					message: 'Value "' + t + '" is not allowed for "' + e + '" attribute.'
				})) : n = new i({
					type: r.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
					code: r.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
					message: 'The "' + e + '" attribute is not supported in Hosted Fields.'
				}), n
			}
		}, {
			"../../lib/braintree-error": 90,
			"../shared/constants": 79,
			"../shared/errors": 80
		}],
		72: [function(e, t, n) {
			"use strict";
			var i = e("../shared/constants"),
				r = e("../../lib/use-min");
			t.exports = function(e, t, n) {
				return e + "/web/" + i.VERSION + "/html/hosted-fields-frame" + r(n) + ".html#" + t
			}
		}, {
			"../../lib/use-min": 125,
			"../shared/constants": 79
		}],
		73: [function(e, t, n) {
			"use strict";
			var i = e("../shared/constants").navigationDirections,
				r = e("../shared/browser-detection"),
				o = e("../shared/focus-intercept"),
				a = e("../shared/find-parent-tags"),
				s = ["INPUT", "SELECT", "TEXTAREA"],
				l = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];

			function d(e) {
				return r.hasSoftwareKeyboard() ? s.indexOf(e.tagName) > -1 && l.indexOf(e.type) < 0 : "hidden" !== e.type
			}

			function c(e) {
				var t, n;
				for (t = 0; t < e.length; t++)
					if (d(n = e[t])) return n;
				return null
			}
			t.exports = {
				removeExtraFocusElements: function(e, t) {
					var n = Array.prototype.slice.call(e.elements);
					[c(n), c(n.reverse())].forEach((function(e) {
						e && o.matchFocusElement(e.getAttribute("id")) && t(e.getAttribute("id"))
					}))
				},
				createFocusChangeHandler: function(e, t) {
					return function(n) {
						var r, s, l, c, p = document.getElementById("bt-" + n.field + "-" + n.direction + "-" + e);
						if (p)
							if (l = a(p, "form")[0], document.forms.length < 1 || !l) t.onRemoveFocusIntercepts();
							else {
								r = (l = [].slice.call(l.elements)).indexOf(p), c = function(e, t) {
									switch (e) {
										case i.BACK:
											return {
												checkIndexBounds: function(e) {
													return e < 0
												}, indexChange: -1
											};
										case i.FORWARD:
											return {
												checkIndexBounds: function(e) {
													return e > t - 1
												}, indexChange: 1
											}
									}
									return {}
								}(n.direction, l.length);
								do {
									if (r += c.indexChange, c.checkIndexBounds(r)) return;
									s = l[r]
								} while (!d(s));
								o.matchFocusElement(s.getAttribute("id")) ? t.onTriggerInputFocus(s.getAttribute("data-braintree-type")) : s.focus()
							}
					}
				}
			}
		}, {
			"../shared/browser-detection": 78,
			"../shared/constants": 79,
			"../shared/find-parent-tags": 81,
			"../shared/focus-intercept": 82
		}],
		74: [function(e, t, n) {
			"use strict";
			var i = e("../shared/constants").allowedStyles;
			t.exports = function(e) {
				var t, n = document.createElement("input"),
					r = {};
				return "." === e[0] && (e = e.substring(1)), n.className = e, n.style.display = "none !important", n.style.position = "fixed !important", n.style.left = "-99999px !important", n.style.top = "-99999px !important", document.body.appendChild(n), t = window.getComputedStyle(n), i.forEach((function(e) {
					var n = t[e];
					n && (r[e] = n)
				})), document.body.removeChild(n), r
			}
		}, {
			"../shared/constants": 79
		}],
		75: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/assign").assign,
				r = e("../../lib/create-assets-url"),
				o = e("../../lib/is-verified-domain"),
				a = e("../../lib/destructor"),
				s = e("@braintree/iframer"),
				l = e("framebus"),
				d = e("../../lib/create-deferred-client"),
				c = e("../../lib/braintree-error"),
				p = e("./compose-url"),
				u = e("./get-styles-from-class"),
				h = e("../shared/constants"),
				m = e("../shared/errors"),
				y = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
				f = e("@braintree/uuid"),
				E = e("../shared/find-parent-tags"),
				v = e("../shared/browser-detection"),
				g = h.events,
				_ = e("@braintree/event-emitter"),
				b = e("./inject-frame"),
				P = e("../../lib/analytics"),
				C = h.allowedFields,
				A = e("../../lib/methods"),
				T = e("../../lib/shadow"),
				I = e("../../lib/find-root-node"),
				D = e("../../lib/convert-methods-to-error"),
				N = e("../../lib/errors"),
				w = e("../shared/get-card-types"),
				O = e("./attribute-validation-error"),
				M = e("@braintree/wrap-promise"),
				F = e("./focus-change"),
				L = e("../shared/focus-intercept").destroy;

			function k(e) {
				var t, n, E, v, C, I = this,
					O = {},
					M = {},
					S = [],
					R = f();
				if (this._merchantConfigurationOptions = i({}, e), e.client ? (E = (n = e.client.getConfiguration()).gatewayConfiguration.assetsUrl, v = n.isDebug) : (E = r.create(e.authorization), v = Boolean(e.isDebug)), this._clientPromise = d.create({
						client: e.client,
						authorization: e.authorization,
						debug: v,
						assetsUrl: E,
						name: "Hosted Fields"
					}), C = p(E, R, v), !e.fields || 0 === Object.keys(e.fields).length) throw new c({
					type: N.INSTANTIATION_OPTION_REQUIRED.type,
					code: N.INSTANTIATION_OPTION_REQUIRED.code,
					message: "options.fields is required when instantiating Hosted Fields."
				});
				_.call(this), this._injectedNodes = [], this._destructor = new a, this._fields = O, this._state = {
					fields: {},
					cards: w("")
				}, this._bus = new l({
					channel: R,
					verifyDomain: o,
					targetFrames: [window]
				}), this._destructor.registerFunctionForTeardown((function() {
					I._bus.teardown()
				})), e.client ? P.sendEvent(this._clientPromise, "custom.hosted-fields.initialized") : P.sendEvent(this._clientPromise, "custom.hosted-fields.initialized.deferred-client"), Object.keys(e.fields).forEach(function(t) {
					var n, i, r, o, a;
					if (!h.allowedFields.hasOwnProperty(t)) throw new c({
						type: m.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
						code: m.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
						message: '"' + t + '" is not a valid field.'
					});
					if ("string" == typeof(i = (n = e.fields[t]).container || n.selector) && (i = document.querySelector(i)), !i || 1 !== i.nodeType) throw new c({
						type: m.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
						code: m.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
						message: m.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
						details: {
							fieldSelector: n.selector,
							fieldContainer: n.container,
							fieldKey: t
						}
					});
					if (i.querySelector('iframe[name^="braintree-"]')) throw new c({
						type: m.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
						code: m.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
						message: m.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
						details: {
							fieldSelector: n.selector,
							fieldContainer: n.container,
							fieldKey: t
						}
					});
					if (r = i, T.isShadowElement(r) && (r = T.transformToSlot(r, "height: 100%")), n.maxlength && "number" != typeof n.maxlength) throw new c({
						type: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
						code: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
						message: "The value for maxlength must be a number.",
						details: {
							fieldKey: t
						}
					});
					if (n.minlength && "number" != typeof n.minlength) throw new c({
						type: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
						code: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
						message: "The value for minlength must be a number.",
						details: {
							fieldKey: t
						}
					});
					o = s({
						type: t,
						name: "braintree-hosted-field-" + t,
						style: h.defaultIFrameStyle,
						title: n.iframeTitle || "Secure Credit Card Frame - " + h.allowedFields[t].label
					}), this._bus.addTargetFrame(o), this._injectedNodes.push.apply(this._injectedNodes, b(R, o, r, (function() {
						I.focus(t)
					}))), this._setupLabelFocus(t, i), O[t] = {
						frameElement: o,
						containerElement: i
					}, a = new Promise((function(e) {
						M[t] = e
					})), S.push(a), this._state.fields[t] = {
						isEmpty: !0,
						isValid: !1,
						isPotentiallyValid: !0,
						isFocused: !1,
						container: i
					}, setTimeout((function() {
						o.src = C
					}), 0)
				}.bind(this)), this._merchantConfigurationOptions.styles && Object.keys(this._merchantConfigurationOptions.styles).forEach((function(e) {
					var t = I._merchantConfigurationOptions.styles[e];
					"string" == typeof t && (I._merchantConfigurationOptions.styles[e] = u(t))
				})), this._bus.on(g.REMOVE_FOCUS_INTERCEPTS, (function(e) {
					L(e && e.id)
				})), this._bus.on(g.TRIGGER_FOCUS_CHANGE, F.createFocusChangeHandler(R, {
					onRemoveFocusIntercepts: function(e) {
						I._bus.emit(g.REMOVE_FOCUS_INTERCEPTS, {
							id: e
						})
					},
					onTriggerInputFocus: function(e) {
						I.focus(e)
					}
				})), this._bus.on(g.READY_FOR_CLIENT, (function(e) {
					I._clientPromise.then((function(t) {
						e(t)
					}))
				})), this._bus.on(g.CARD_FORM_ENTRY_HAS_BEGUN, (function() {
					P.sendEvent(I._clientPromise, "hosted-fields.input.started")
				})), this._bus.on(g.BIN_AVAILABLE, (function(e) {
					I._emit("binAvailable", {
						bin: e
					})
				})), t = setTimeout((function() {
					P.sendEvent(I._clientPromise, "custom.hosted-fields.load.timed-out"), I._emit("timeout")
				}), y), Promise.all(S).then((function(e) {
					var n, r, o = e[0];
					clearTimeout(t), o((n = I._merchantConfigurationOptions, (r = i({}, n)).fields = i({}, r.fields), Object.keys(r.fields).forEach((function(e) {
						r.fields[e] = i({}, r.fields[e]), delete r.fields[e].container
					})), r)), I._cleanUpFocusIntercepts(), I._emit("ready")
				})), this._bus.on(g.FRAME_READY, (function(e, t) {
					M[e.field](t)
				})), this._bus.on(g.INPUT_EVENT, function(e) {
					return function(t) {
						var n, i = t.merchantPayload,
							r = i.emittedBy,
							o = e[r].containerElement;
						Object.keys(i.fields).forEach((function(t) {
							i.fields[t].container = e[t].containerElement
						})), n = i.fields[r], o.classList.toggle(h.externalClasses.FOCUSED, n.isFocused), o.classList.toggle(h.externalClasses.VALID, n.isValid), o.classList.toggle(h.externalClasses.INVALID, !n.isPotentiallyValid), this._state = {
							cards: i.cards,
							fields: i.fields
						}, this._emit(t.type, i)
					}
				}(O).bind(this)), this._destructor.registerFunctionForTeardown((function() {
					var e, t, n;
					for (e = 0; e < I._injectedNodes.length; e++)(n = (t = I._injectedNodes[e]).parentNode).removeChild(t), n.classList.remove(h.externalClasses.FOCUSED, h.externalClasses.INVALID, h.externalClasses.VALID)
				})), this._destructor.registerFunctionForTeardown((function() {
					L()
				})), this._destructor.registerFunctionForTeardown((function() {
					var e = A(k.prototype).concat(A(_.prototype));
					D(I, e)
				}))
			}
			_.createChild(k), k.prototype._setupLabelFocus = function(e, t) {
				var n, i, r = this,
					o = I(t);
				if (null != t.id) {
					for (n = Array.prototype.slice.call(document.querySelectorAll('label[for="' + t.id + '"]')), o !== document && (n = n.concat(Array.prototype.slice.call(o.querySelectorAll('label[for="' + t.id + '"]')))), n = (n = n.concat(E(t, "label"))).filter((function(e, t, n) {
							return n.indexOf(e) === t
						})), i = 0; i < n.length; i++) n[i].addEventListener("click", a, !1);
					this._destructor.registerFunctionForTeardown((function() {
						for (i = 0; i < n.length; i++) n[i].removeEventListener("click", a, !1)
					}))
				}

				function a() {
					r.focus(e)
				}
			}, k.prototype._getAnyFieldContainer = function() {
				var e = this;
				return Object.keys(this._fields).reduce((function(t, n) {
					return t || e._fields[n].containerElement
				}), null)
			}, k.prototype._cleanUpFocusIntercepts = function() {
				var e, t;
				document.forms.length < 1 ? this._bus.emit(g.REMOVE_FOCUS_INTERCEPTS) : (e = this._getAnyFieldContainer(), (t = E(e, "form")[0]) ? F.removeExtraFocusElements(t, function(e) {
					this._bus.emit(g.REMOVE_FOCUS_INTERCEPTS, {
						id: e
					})
				}.bind(this)) : this._bus.emit(g.REMOVE_FOCUS_INTERCEPTS))
			}, k.prototype._attachInvalidFieldContainersToError = function(e) {
				e.details && e.details.invalidFieldKeys && e.details.invalidFieldKeys.length > 0 && (e.details.invalidFields = {}, e.details.invalidFieldKeys.forEach(function(t) {
					e.details.invalidFields[t] = this._fields[t].containerElement
				}.bind(this)))
			}, k.prototype.getChallenges = function() {
				return this._clientPromise.then((function(e) {
					return e.getConfiguration().gatewayConfiguration.challenges
				}))
			}, k.prototype.getSupportedCardTypes = function() {
				return this._clientPromise.then((function(e) {
					return e.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.map((function(e) {
						return "MasterCard" === e ? "Mastercard" : e
					}))
				}))
			}, k.prototype.teardown = function() {
				var e = this;
				return new Promise((function(t, n) {
					e._destructor.teardown((function(i) {
						P.sendEvent(e._clientPromise, "custom.hosted-fields.teardown-completed"), i ? n(i) : t()
					}))
				}))
			}, k.prototype.tokenize = function(e) {
				var t = this;
				return e || (e = {}), new Promise((function(n, i) {
					t._bus.emit(g.TOKENIZATION_REQUEST, e, (function(e) {
						var r = e[0],
							o = e[1];
						r ? (t._attachInvalidFieldContainersToError(r), i(new c(r))) : n(o)
					}))
				}))
			}, k.prototype.addClass = function(e, t) {
				var n;
				return C.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(g.ADD_CLASS, {
					field: e,
					classname: t
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.'
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.'
				}), n ? Promise.reject(n) : Promise.resolve()
			}, k.prototype.removeClass = function(e, t) {
				var n;
				return C.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(g.REMOVE_CLASS, {
					field: e,
					classname: t
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.'
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.'
				}), n ? Promise.reject(n) : Promise.resolve()
			}, k.prototype.setAttribute = function(e) {
				var t, n;
				return C.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = O(e.attribute, e.value)) ? n = t : this._bus.emit(g.SET_ATTRIBUTE, {
					field: e.field,
					attribute: e.attribute,
					value: e.value
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
				}), n ? Promise.reject(n) : Promise.resolve()
			}, k.prototype.setMonthOptions = function(e) {
				var t, n = this,
					i = this._merchantConfigurationOptions.fields;
				return i.expirationMonth ? i.expirationMonth.select || (t = "Expiration month field must be a select element.") : t = "Expiration month field must exist to use setMonthOptions.", t ? Promise.reject(new c({
					type: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
					message: t
				})) : new Promise((function(t) {
					n._bus.emit(g.SET_MONTH_OPTIONS, e, t)
				}))
			}, k.prototype.setMessage = function(e) {
				this._bus.emit(g.SET_MESSAGE, {
					field: e.field,
					message: e.message
				})
			}, k.prototype.removeAttribute = function(e) {
				var t, n;
				return C.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = O(e.attribute)) ? n = t : this._bus.emit(g.REMOVE_ATTRIBUTE, {
					field: e.field,
					attribute: e.attribute
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
				}) : n = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
				}), n ? Promise.reject(n) : Promise.resolve()
			}, k.prototype.setPlaceholder = function(e, t) {
				return this.setAttribute({
					field: e,
					attribute: "placeholder",
					value: t
				})
			}, k.prototype.clear = function(e) {
				var t;
				return C.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(g.CLEAR_FIELD, {
					field: e
				}) : t = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.'
				}) : t = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.'
				}), t ? Promise.reject(t) : Promise.resolve()
			}, k.prototype.focus = function(e) {
				var t, n = this._fields[e];
				return C.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? (n.frameElement.focus(), this._bus.emit(g.TRIGGER_INPUT_FOCUS, {
					field: e
				}), v.isIos() && setTimeout((function() {
					var e, t, i, r;
					e = n.containerElement, t = e.getBoundingClientRect(), i = Math.floor(t.height / 2), r = Math.floor(t.width / 2), t.top < (window.innerHeight - i || document.documentElement.clientHeight - i) && t.right > r && t.bottom > i && t.left < (window.innerWidth - r || document.documentElement.clientWidth - r) || n.containerElement.scrollIntoView()
				}), 5)) : t = new c({
					type: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
					code: m.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
					message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.'
				}) : t = new c({
					type: m.HOSTED_FIELDS_FIELD_INVALID.type,
					code: m.HOSTED_FIELDS_FIELD_INVALID.code,
					message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.'
				}), t ? Promise.reject(t) : Promise.resolve()
			}, k.prototype.getState = function() {
				return this._state
			}, t.exports = M.wrapPrototype(k)
		}, {
			"../../lib/analytics": 85,
			"../../lib/assign": 87,
			"../../lib/braintree-error": 90,
			"../../lib/constants": 91,
			"../../lib/convert-methods-to-error": 92,
			"../../lib/create-assets-url": 94,
			"../../lib/create-deferred-client": 96,
			"../../lib/destructor": 98,
			"../../lib/errors": 100,
			"../../lib/find-root-node": 101,
			"../../lib/is-verified-domain": 118,
			"../../lib/methods": 120,
			"../../lib/shadow": 123,
			"../shared/browser-detection": 78,
			"../shared/constants": 79,
			"../shared/errors": 80,
			"../shared/find-parent-tags": 81,
			"../shared/focus-intercept": 82,
			"../shared/get-card-types": 83,
			"./attribute-validation-error": 71,
			"./compose-url": 72,
			"./focus-change": 73,
			"./get-styles-from-class": 74,
			"./inject-frame": 76,
			"@braintree/event-emitter": 36,
			"@braintree/iframer": 38,
			"@braintree/uuid": 42,
			"@braintree/wrap-promise": 46,
			framebus: 166
		}],
		76: [function(e, t, n) {
			"use strict";
			var i = e("../shared/focus-intercept"),
				r = e("../shared/constants").navigationDirections;
			t.exports = function(e, t, n, o) {
				var a = t.getAttribute("type"),
					s = document.createElement("div"),
					l = document.createDocumentFragment(),
					d = i.generate(e, a, r.BACK, o),
					c = i.generate(e, a, r.FORWARD, o);
				return s.style.clear = "both", l.appendChild(d), l.appendChild(t), l.appendChild(c), l.appendChild(s), n.appendChild(l), [t, s]
			}
		}, {
			"../shared/constants": 79,
			"../shared/focus-intercept": 82
		}],
		77: [function(e, t, n) {
			"use strict";
			var i = e("./external/hosted-fields"),
				r = e("../lib/basic-component-verification"),
				o = e("./shared/errors"),
				a = e("restricted-input/supports-input-formatting"),
				s = e("@braintree/wrap-promise"),
				l = e("../lib/braintree-error");
			t.exports = {
				supportsInputFormatting: a,
				create: s((function(e) {
					return r.verify({
						name: "Hosted Fields",
						authorization: e.authorization,
						client: e.client
					}).then((function() {
						var t = new i(e);
						return new Promise((function(e, n) {
							t.on("ready", (function() {
								e(t)
							})), t.on("timeout", (function() {
								n(new l(o.HOSTED_FIELDS_TIMEOUT))
							}))
						}))
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/basic-component-verification": 88,
			"../lib/braintree-error": 90,
			"./external/hosted-fields": 75,
			"./shared/errors": 80,
			"@braintree/wrap-promise": 46,
			"restricted-input/supports-input-formatting": 201
		}],
		78: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/browser-detection/is-android"),
				r = e("@braintree/browser-detection/is-chrome-os"),
				o = e("@braintree/browser-detection/is-ios"),
				a = e("@braintree/browser-detection/is-chrome");
			t.exports = {
				isAndroid: i,
				isChromeOS: r,
				isChromeIos: function() {
					return a() && o()
				},
				isFirefox: e("@braintree/browser-detection/is-firefox"),
				isIos: o,
				isIosWebview: e("@braintree/browser-detection/is-ios-webview"),
				hasSoftwareKeyboard: function() {
					return i() || r() || o()
				}
			}
		}, {
			"@braintree/browser-detection/is-android": 24,
			"@braintree/browser-detection/is-chrome": 26,
			"@braintree/browser-detection/is-chrome-os": 25,
			"@braintree/browser-detection/is-firefox": 27,
			"@braintree/browser-detection/is-ios": 33,
			"@braintree/browser-detection/is-ios-webview": 31
		}],
		79: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/enumerate"),
				r = e("./errors"),
				o = {
					VERSION: "3.103.0",
					maxExpirationYearAge: 19,
					externalEvents: {
						FOCUS: "focus",
						BLUR: "blur",
						EMPTY: "empty",
						NOT_EMPTY: "notEmpty",
						VALIDITY_CHANGE: "validityChange",
						CARD_TYPE_CHANGE: "cardTypeChange"
					},
					defaultMaxLengths: {
						number: 19,
						postalCode: 8,
						expirationDate: 7,
						expirationMonth: 2,
						expirationYear: 4,
						cvv: 3
					},
					externalClasses: {
						FOCUSED: "braintree-hosted-fields-focused",
						INVALID: "braintree-hosted-fields-invalid",
						VALID: "braintree-hosted-fields-valid"
					},
					navigationDirections: {
						BACK: "before",
						FORWARD: "after"
					},
					defaultIFrameStyle: {
						border: "none",
						width: "100%",
						height: "100%",
						float: "left"
					},
					tokenizationErrorCodes: {
						81724: r.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
						81736: r.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
					},
					allowedStyles: ["-moz-appearance", "-moz-box-shadow", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-box-shadow", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "box-shadow", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "opacity", "outline", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-shadow", "transition"],
					allowedFields: {
						cardholderName: {
							name: "cardholder-name",
							label: "Cardholder Name"
						},
						number: {
							name: "credit-card-number",
							label: "Credit Card Number"
						},
						cvv: {
							name: "cvv",
							label: "CVV"
						},
						expirationDate: {
							name: "expiration",
							label: "Expiration Date"
						},
						expirationMonth: {
							name: "expiration-month",
							label: "Expiration Month"
						},
						expirationYear: {
							name: "expiration-year",
							label: "Expiration Year"
						},
						postalCode: {
							name: "postal-code",
							label: "Postal Code"
						}
					},
					allowedAttributes: {
						"aria-invalid": "boolean",
						"aria-required": "boolean",
						disabled: "boolean",
						placeholder: "string"
					},
					autocompleteMappings: {
						"cardholder-name": "cc-name",
						"credit-card-number": "cc-number",
						expiration: "cc-exp",
						"expiration-month": "cc-exp-month",
						"expiration-year": "cc-exp-year",
						cvv: "cc-csc",
						"postal-code": "billing postal-code"
					}
				};
			o.events = i(["ADD_CLASS", "AUTOFILL_DATA_AVAILABLE", "BIN_AVAILABLE", "CARD_FORM_ENTRY_HAS_BEGUN", "CLEAR_FIELD", "CONFIGURATION", "FRAME_READY", "INPUT_EVENT", "READY_FOR_CLIENT", "REMOVE_ATTRIBUTE", "REMOVE_CLASS", "REMOVE_FOCUS_INTERCEPTS", "SET_ATTRIBUTE", "SET_MESSAGE", "SET_MONTH_OPTIONS", "TOKENIZATION_REQUEST", "TRIGGER_FOCUS_CHANGE", "TRIGGER_INPUT_FOCUS", "VALIDATE_STRICT"], "hosted-fields:"), t.exports = o
		}, {
			"../../lib/enumerate": 99,
			"./errors": 80
		}],
		80: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/braintree-error");
			t.exports = {
				HOSTED_FIELDS_TIMEOUT: {
					type: i.types.UNKNOWN,
					code: "HOSTED_FIELDS_TIMEOUT",
					message: "Hosted Fields timed out when attempting to set up."
				},
				HOSTED_FIELDS_INVALID_FIELD_KEY: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_INVALID_FIELD_KEY"
				},
				HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
					message: "Selector does not reference a valid DOM node."
				},
				HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
					message: "Element already contains a Braintree iframe."
				},
				HOSTED_FIELDS_FIELD_INVALID: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_FIELD_INVALID"
				},
				HOSTED_FIELDS_FIELD_NOT_PRESENT: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_FIELD_NOT_PRESENT"
				},
				HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
					type: i.types.NETWORK,
					code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
					message: "A tokenization network error occurred."
				},
				HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
					type: i.types.CUSTOMER,
					code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
					message: "This credit card already exists in the merchant's vault."
				},
				HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
					type: i.types.CUSTOMER,
					code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
					message: "CVV verification failed during tokenization."
				},
				HOSTED_FIELDS_FAILED_TOKENIZATION: {
					type: i.types.CUSTOMER,
					code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
					message: "The supplied card data failed tokenization."
				},
				HOSTED_FIELDS_FIELDS_EMPTY: {
					type: i.types.CUSTOMER,
					code: "HOSTED_FIELDS_FIELDS_EMPTY",
					message: "All fields are empty. Cannot tokenize empty card fields."
				},
				HOSTED_FIELDS_FIELDS_INVALID: {
					type: i.types.CUSTOMER,
					code: "HOSTED_FIELDS_FIELDS_INVALID",
					message: "Some payment input fields are invalid. Cannot tokenize invalid card fields."
				},
				HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"
				},
				HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"
				},
				HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
					type: i.types.MERCHANT,
					code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID"
				}
			}
		}, {
			"../../lib/braintree-error": 90
		}],
		81: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t) {
				for (var n = e.parentNode, i = []; null != n;) null != n.tagName && n.tagName.toLowerCase() === t && i.push(n), n = n.parentNode;
				return i
			}
		}, {}],
		82: [function(e, t, n) {
			"use strict";
			var i = e("./browser-detection"),
				r = e("./constants"),
				o = Object.keys(r.allowedFields),
				a = r.navigationDirections,
				s = {
					generate: function(e, t, n, r) {
						var o = document.createElement("input");
						return i.hasSoftwareKeyboard() || i.isFirefox() ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("autocomplete", "off"), o.setAttribute("data-braintree-direction", n), o.setAttribute("data-braintree-type", t), o.setAttribute("id", "bt-" + t + "-" + n + "-" + e), o.setAttribute("style", JSON.stringify({
							border: "none !important",
							display: "block !important",
							height: "1px !important",
							left: "-1px !important",
							opacity: "0 !important",
							position: "absolute !important",
							top: "-1px !important",
							width: "1px !important"
						}).replace(/[{}"]/g, "").replace(/,/g, ";")), o.classList.add("focus-intercept"), o.addEventListener("focus", (function(e) {
							r(e), i.hasSoftwareKeyboard() || o.blur()
						})), o) : document.createDocumentFragment()
					},
					destroy: function(e) {
						var t;
						e ? t = [document.getElementById(e)] : (t = document.querySelectorAll("[data-braintree-direction]"), t = [].slice.call(t)), t.forEach((function(e) {
							e && 1 === e.nodeType && s.matchFocusElement(e.getAttribute("id")) && e.parentNode.removeChild(e)
						}))
					},
					matchFocusElement: function(e) {
						var t, n, i, r;
						return !!e && (!((t = e.split("-")).length < 4) && (n = "bt" === t[0], i = o.indexOf(t[1]) > -1, r = t[2] === a.BACK || t[2] === a.FORWARD, Boolean(n && i && r)))
					}
				};
			t.exports = s
		}, {
			"./browser-detection": 78,
			"./constants": 79
		}],
		83: [function(e, t, n) {
			"use strict";
			var i = e("credit-card-type");
			t.exports = function(e) {
				var t = i(e);
				return t.forEach((function(e) {
					"mastercard" === e.type && (e.type = "master-card")
				})), t
			}
		}, {
			"credit-card-type": 158
		}],
		84: [function(e, t, n) {
			"use strict";
			var i = e("./create-authorization-data"),
				r = e("./json-clone"),
				o = e("./constants");
			t.exports = function(e, t) {
				var n, a = t ? r(t) : {},
					s = i(e.authorization).attrs,
					l = r(e.analyticsMetadata);
				for (n in a.braintreeLibraryVersion = o.BRAINTREE_LIBRARY_VERSION, a._meta) a._meta.hasOwnProperty(n) && (l[n] = a._meta[n]);
				return a._meta = l, s.tokenizationKey ? a.tokenizationKey = s.tokenizationKey : a.authorizationFingerprint = s.authorizationFingerprint, a
			}
		}, {
			"./constants": 91,
			"./create-authorization-data": 95,
			"./json-clone": 119
		}],
		85: [function(e, t, n) {
			"use strict";
			var i = e("./constants"),
				r = e("./add-metadata");
			t.exports = {
				sendEvent: function(e, t, n) {
					var o = Date.now();
					return Promise.resolve(e).then((function(e) {
						var a = Date.now(),
							s = e.getConfiguration(),
							l = e._request,
							d = s.gatewayConfiguration.analytics.url,
							c = {
								analytics: [{
									kind: i.ANALYTICS_PREFIX + t,
									isAsync: Math.floor(a / 1e3) !== Math.floor(o / 1e3),
									timestamp: o
								}]
							};
						l({
							url: d,
							method: "post",
							data: r(s, c),
							timeout: i.ANALYTICS_REQUEST_TIMEOUT_MS
						}, n)
					})).catch((function(e) {
						n && n(e)
					}))
				}
			}
		}, {
			"./add-metadata": 84,
			"./constants": 91
		}],
		86: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/asset-loader/load-script");
			t.exports = {
				loadScript: i
			}
		}, {
			"@braintree/asset-loader/load-script": 4
		}],
		87: [function(e, t, n) {
			"use strict";
			var i = "function" == typeof Object.assign ? Object.assign : r;

			function r(e) {
				var t, n, i;
				for (t = 1; t < arguments.length; t++)
					for (i in n = arguments[t]) n.hasOwnProperty(i) && (e[i] = n[i]);
				return e
			}
			t.exports = {
				assign: i,
				_assign: r
			}
		}, {}],
		88: [function(e, t, n) {
			"use strict";
			var i = e("./braintree-error"),
				r = e("./errors"),
				o = "3.103.0";
			t.exports = {
				verify: function(e) {
					var t, n, a;
					return e ? (a = e.name, t = e.client, n = e.authorization, t || n ? n || t.getVersion() === o ? Promise.resolve() : Promise.reject(new i({
						type: r.INCOMPATIBLE_VERSIONS.type,
						code: r.INCOMPATIBLE_VERSIONS.code,
						message: "Client (version " + t.getVersion() + ") and " + a + " (version " + o + ") components must be from the same SDK version."
					})) : Promise.reject(new i({
						type: r.INSTANTIATION_OPTION_REQUIRED.type,
						code: r.INSTANTIATION_OPTION_REQUIRED.code,
						message: "options.client is required when instantiating " + a + "."
					}))) : Promise.reject(new i({
						type: r.INVALID_USE_OF_INTERNAL_FUNCTION.type,
						code: r.INVALID_USE_OF_INTERNAL_FUNCTION.code,
						message: "Options must be passed to basicComponentVerification function."
					}))
				}
			}
		}, {
			"./braintree-error": 90,
			"./errors": 100
		}],
		89: [function(e, t, n) {
			"use strict";
			var i = e("./once");

			function r(e, t) {
				0 === e.length ? (e(), t(null)) : e(t)
			}
			t.exports = function(e, t) {
				var n, o = e.length,
					a = o,
					s = i(t);
				if (0 !== o)
					for (n = 0; n < o; n++) r(e[n], l);
				else s(null);

				function l(e) {
					e ? s(e) : 0 === (a -= 1) && s(null)
				}
			}
		}, {
			"./once": 121
		}],
		90: [function(e, t, n) {
			"use strict";
			var i = e("./enumerate");

			function r(e) {
				if (!r.types.hasOwnProperty(e.type)) throw new Error(e.type + " is not a valid type.");
				if (!e.code) throw new Error("Error code required.");
				if (!e.message) throw new Error("Error message required.");
				this.name = "BraintreeError", this.code = e.code, this.message = e.message, this.type = e.type, this.details = e.details
			}
			r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.types = i(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]), r.findRootError = function(e) {
				return e instanceof r && e.details && e.details.originalError ? r.findRootError(e.details.originalError) : e
			}, t.exports = r
		}, {
			"./enumerate": 99
		}],
		91: [function(e, t, n) {
			"use strict";
			var i = "3.103.0",
				r = "web";
			t.exports = {
				ANALYTICS_PREFIX: r + ".",
				ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
				ASSETS_URLS: {
					production: "https://assets.braintreegateway.com",
					sandbox: "https://assets.braintreegateway.com"
				},
				CLIENT_API_URLS: {
					production: "https://api.braintreegateway.com:443",
					sandbox: "https://api.sandbox.braintreegateway.com:443"
				},
				FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
				FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
				FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
				BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
				GRAPHQL_URLS: {
					production: "https://payments.braintree-api.com/graphql",
					sandbox: "https://payments.sandbox.braintree-api.com/graphql"
				},
				INTEGRATION_TIMEOUT_MS: 6e4,
				VERSION: i,
				INTEGRATION: "custom",
				SOURCE: "client",
				PLATFORM: r,
				BRAINTREE_LIBRARY_VERSION: "braintree/web/" + i
			}
		}, {}],
		92: [function(e, t, n) {
			"use strict";
			var i = e("./braintree-error"),
				r = e("./errors");
			t.exports = function(e, t) {
				t.forEach((function(t) {
					e[t] = function() {
						throw new i({
							type: r.METHOD_CALLED_AFTER_TEARDOWN.type,
							code: r.METHOD_CALLED_AFTER_TEARDOWN.code,
							message: t + " cannot be called after teardown."
						})
					}
				}))
			}
		}, {
			"./braintree-error": 90,
			"./errors": 100
		}],
		93: [function(e, t, n) {
			"use strict";
			var i = e("./braintree-error");
			t.exports = function(e, t) {
				return e instanceof i ? e : new i({
					type: t.type,
					code: t.code,
					message: t.message,
					details: {
						originalError: e
					}
				})
			}
		}, {
			"./braintree-error": 90
		}],
		94: [function(e, t, n) {
			"use strict";
			var i = e("./constants").ASSETS_URLS;
			t.exports = {
				create: function(e) {
					return i.production
				}
			}
		}, {
			"./constants": 91
		}],
		95: [function(e, t, n) {
			"use strict";
			var i = e("../lib/vendor/polyfill").atob,
				r = e("../lib/constants").CLIENT_API_URLS;
			t.exports = function(e) {
				var t, n, o, a, s = {
					attrs: {},
					configUrl: ""
				};
				return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (o = e.split("_"), a = o[0], n = {
					merchantId: o.slice(2).join("_"),
					environment: a
				}, s.environment = n.environment, s.attrs.tokenizationKey = e, s.configUrl = r[n.environment] + "/merchants/" + n.merchantId + "/client_api/v1/configuration") : (t = JSON.parse(i(e)), s.environment = t.environment, s.attrs.authorizationFingerprint = t.authorizationFingerprint, s.configUrl = t.configUrl, s.graphQL = t.graphQL), s
			}
		}, {
			"../lib/constants": 91,
			"../lib/vendor/polyfill": 126
		}],
		96: [function(e, t, n) {
			"use strict";
			var i = e("./braintree-error"),
				r = e("./assets"),
				o = e("./errors"),
				a = "3.103.0";
			t.exports = {
				create: function(e) {
					var t = Promise.resolve();
					return e.client ? Promise.resolve(e.client) : (window.braintree && window.braintree.client || (t = r.loadScript({
						src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
					}).catch((function(e) {
						return Promise.reject(new i({
							type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
							code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
							message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
							details: {
								originalError: e
							}
						}))
					}))), t.then((function() {
						return window.braintree.client.VERSION !== a ? Promise.reject(new i({
							type: o.INCOMPATIBLE_VERSIONS.type,
							code: o.INCOMPATIBLE_VERSIONS.code,
							message: "Client (version " + window.braintree.client.VERSION + ") and " + e.name + " (version " + a + ") components must be from the same SDK version."
						})) : window.braintree.client.create({
							authorization: e.authorization,
							debug: e.debug
						})
					})))
				}
			}
		}, {
			"./assets": 86,
			"./braintree-error": 90,
			"./errors": 100
		}],
		97: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return function() {
					var t = arguments;
					setTimeout((function() {
						e.apply(null, t)
					}), 1)
				}
			}
		}, {}],
		98: [function(e, t, n) {
			"use strict";
			var i = e("./batch-execute-functions");

			function r() {
				this._teardownRegistry = [], this._isTearingDown = !1
			}
			r.prototype.registerFunctionForTeardown = function(e) {
				"function" == typeof e && this._teardownRegistry.push(e)
			}, r.prototype.teardown = function(e) {
				this._isTearingDown ? e(new Error("Destructor is already tearing down")) : (this._isTearingDown = !0, i(this._teardownRegistry, function(t) {
					this._teardownRegistry = [], this._isTearingDown = !1, "function" == typeof e && e(t)
				}.bind(this)))
			}, t.exports = r
		}, {
			"./batch-execute-functions": 89
		}],
		99: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t) {
				return t = null == t ? "" : t, e.reduce((function(e, n) {
					return e[n] = t + n, e
				}), {})
			}
		}, {}],
		100: [function(e, t, n) {
			"use strict";
			var i = e("./braintree-error");
			t.exports = {
				INVALID_USE_OF_INTERNAL_FUNCTION: {
					type: i.types.INTERNAL,
					code: "INVALID_USE_OF_INTERNAL_FUNCTION"
				},
				INSTANTIATION_OPTION_REQUIRED: {
					type: i.types.MERCHANT,
					code: "INSTANTIATION_OPTION_REQUIRED"
				},
				INCOMPATIBLE_VERSIONS: {
					type: i.types.MERCHANT,
					code: "INCOMPATIBLE_VERSIONS"
				},
				CLIENT_SCRIPT_FAILED_TO_LOAD: {
					type: i.types.NETWORK,
					code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
					message: "Braintree client script could not be loaded."
				},
				METHOD_CALLED_AFTER_TEARDOWN: {
					type: i.types.MERCHANT,
					code: "METHOD_CALLED_AFTER_TEARDOWN"
				}
			}
		}, {
			"./braintree-error": 90
		}],
		101: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				for (; e.parentNode;) e = e.parentNode;
				return e
			}
		}, {}],
		102: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t, n) {
				var i;
				for (i = 0; i < e.length; i++)
					if (e[i].hasOwnProperty(t) && e[i][t] === n) return e[i];
				return null
			}
		}, {}],
		103: [function(e, t, n) {
			"use strict";
			var i = e("./strategies/popup"),
				r = e("./strategies/popup-bridge"),
				o = e("./strategies/modal"),
				a = e("framebus"),
				s = e("../shared/events"),
				l = e("../shared/errors"),
				d = e("../shared/constants"),
				c = e("@braintree/uuid"),
				p = e("@braintree/iframer"),
				u = e("../../braintree-error"),
				h = e("../shared/browser-detection"),
				m = e("./../../assign").assign,
				y = e("../../constants").BUS_CONFIGURATION_REQUEST_EVENT,
				f = ["name", "dispatchFrameUrl", "openFrameUrl"];

			function E() {}

			function v(e) {
				! function(e) {
					if (!e) throw new Error("Valid configuration is required");
					if (f.forEach((function(t) {
							if (!e.hasOwnProperty(t)) throw new Error("A valid frame " + t + " must be provided")
						})), !/^[\w_]+$/.test(e.name)) throw new Error("A valid frame name must be provided")
				}(e), this._serviceId = c().replace(/-/g, ""), this._options = {
					name: e.name + "_" + this._serviceId,
					dispatchFrameUrl: e.dispatchFrameUrl,
					openFrameUrl: e.openFrameUrl,
					height: e.height,
					width: e.width,
					top: e.top,
					left: e.left
				}, this.state = e.state || {}, this._bus = new a({
					channel: this._serviceId
				}), this._setBusEvents()
			}
			v.prototype.initialize = function(e) {
				var t = function() {
					e(), this._bus.off(s.DISPATCH_FRAME_READY, t)
				}.bind(this);
				this._bus.on(s.DISPATCH_FRAME_READY, t), this._writeDispatchFrame()
			}, v.prototype._writeDispatchFrame = function() {
				var e = d.DISPATCH_FRAME_NAME + "_" + this._serviceId,
					t = this._options.dispatchFrameUrl;
				this._dispatchFrame = p({
					"aria-hidden": !0,
					name: e,
					title: e,
					src: t,
					class: d.DISPATCH_FRAME_CLASS,
					height: 0,
					width: 0,
					style: {
						position: "absolute",
						left: "-9999px"
					}
				}), document.body.appendChild(this._dispatchFrame)
			}, v.prototype._setBusEvents = function() {
				this._bus.on(s.DISPATCH_FRAME_REPORT, function(e, t) {
					this._onCompleteCallback && this._onCompleteCallback.call(null, e.err, e.payload), this._frame.close(), this._onCompleteCallback = null, t && t()
				}.bind(this)), this._bus.on(y, function(e) {
					e(this.state)
				}.bind(this))
			}, v.prototype.open = function(e, t) {
				if (e = e || {}, this._frame = this._getFrameForEnvironment(e), this._frame.initialize(t), !(this._frame instanceof r)) {
					if (m(this.state, e.state), this._onCompleteCallback = t, this._frame.open(), this.isFrameClosed()) return this._cleanupFrame(), void(t && t(new u(l.FRAME_SERVICE_FRAME_OPEN_FAILED)));
					this._pollForPopupClose()
				}
			}, v.prototype.redirect = function(e) {
				this._frame && !this.isFrameClosed() && this._frame.redirect(e)
			}, v.prototype.close = function() {
				this.isFrameClosed() || this._frame.close()
			}, v.prototype.focus = function() {
				this.isFrameClosed() || this._frame.focus()
			}, v.prototype.createHandler = function(e) {
				return e = e || {}, {
					close: function() {
						e.beforeClose && e.beforeClose(), this.close()
					}.bind(this),
					focus: function() {
						e.beforeFocus && e.beforeFocus(), this.focus()
					}.bind(this)
				}
			}, v.prototype.createNoopHandler = function() {
				return {
					close: E,
					focus: E
				}
			}, v.prototype.teardown = function() {
				this.close(), this._dispatchFrame.parentNode.removeChild(this._dispatchFrame), this._dispatchFrame = null, this._cleanupFrame()
			}, v.prototype.isFrameClosed = function() {
				return null == this._frame || this._frame.isClosed()
			}, v.prototype._cleanupFrame = function() {
				this._frame = null, clearInterval(this._popupInterval), this._popupInterval = null
			}, v.prototype._pollForPopupClose = function() {
				return this._popupInterval = setInterval(function() {
					this.isFrameClosed() && (this._cleanupFrame(), this._onCompleteCallback && this._onCompleteCallback(new u(l.FRAME_SERVICE_FRAME_CLOSED)))
				}.bind(this), d.POPUP_POLL_INTERVAL), this._popupInterval
			}, v.prototype._getFrameForEnvironment = function(e) {
				var t = h.supportsPopups(),
					n = Boolean(window.popupBridge),
					a = m({}, this._options, e);
				return n ? new r(a) : t ? new i(a) : new o(a)
			}, t.exports = v
		}, {
			"../../braintree-error": 90,
			"../../constants": 91,
			"../shared/browser-detection": 110,
			"../shared/constants": 111,
			"../shared/errors": 112,
			"../shared/events": 113,
			"./../../assign": 87,
			"./strategies/modal": 105,
			"./strategies/popup": 108,
			"./strategies/popup-bridge": 106,
			"@braintree/iframer": 38,
			"@braintree/uuid": 42,
			framebus: 166
		}],
		104: [function(e, t, n) {
			"use strict";
			var i = e("./frame-service");
			t.exports = {
				create: function(e, t) {
					var n = new i(e);
					n.initialize((function() {
						t(n)
					}))
				}
			}
		}, {
			"./frame-service": 103
		}],
		105: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/iframer"),
				r = e("../../../assign").assign,
				o = e("../../shared/browser-detection"),
				a = {
					position: "fixed",
					top: 0,
					left: 0,
					bottom: 0,
					padding: 0,
					margin: 0,
					border: 0,
					outline: "none",
					zIndex: 20001,
					background: "#FFFFFF"
				};

			function s() {}

			function l(e) {
				this._closed = null, this._frame = null, this._options = e || {}, this._container = this._options.container || document.body
			}
			l.prototype.initialize = s, l.prototype.open = function() {
				var e = {
					src: this._options.openFrameUrl,
					name: this._options.name,
					scrolling: "yes",
					height: "100%",
					width: "100%",
					style: r({}, a),
					title: "Lightbox Frame"
				};
				o.isIos() ? (o.isIosWKWebview() && (this._lockScrolling(), e.style = {}), this._el = document.createElement("div"), r(this._el.style, a, {
					height: "100%",
					width: "100%",
					overflow: "auto",
					"-webkit-overflow-scrolling": "touch"
				}), this._frame = i(e), this._el.appendChild(this._frame)) : this._el = this._frame = i(e), this._closed = !1, this._container.appendChild(this._el)
			}, l.prototype.focus = s, l.prototype.close = function() {
				this._container.removeChild(this._el), this._frame = null, this._closed = !0, o.isIosWKWebview() && this._unlockScrolling()
			}, l.prototype.isClosed = function() {
				return Boolean(this._closed)
			}, l.prototype.redirect = function(e) {
				this._frame.src = e
			}, l.prototype._unlockScrolling = function() {
				document.body.style.overflow = this._savedBodyProperties.overflowStyle, document.body.style.position = this._savedBodyProperties.positionStyle, window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top), delete this._savedBodyProperties
			}, l.prototype._lockScrolling = function() {
				var e = document.documentElement;
				this._savedBodyProperties = {
					left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
					top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					overflowStyle: document.body.style.overflow,
					positionStyle: document.body.style.position
				}, document.body.style.overflow = "hidden", document.body.style.position = "fixed", window.scrollTo(0, 0)
			}, t.exports = l
		}, {
			"../../../assign": 87,
			"../../shared/browser-detection": 110,
			"@braintree/iframer": 38
		}],
		106: [function(e, t, n) {
			"use strict";
			var i = e("../../../braintree-error"),
				r = e("../../shared/errors");

			function o() {}

			function a(e) {
				this._closed = null, this._options = e
			}
			a.prototype.initialize = function(e) {
				var t = this;
				window.popupBridge.onComplete = function(n, o) {
					var a = !o && !n;
					t._closed = !0, n || a ? e(new i(r.FRAME_SERVICE_FRAME_CLOSED)) : e(null, o)
				}
			}, a.prototype.open = function(e) {
				var t;
				t = (e = e || {}).openFrameUrl || this._options.openFrameUrl, this._closed = !1, window.popupBridge.open(t)
			}, a.prototype.focus = o, a.prototype.close = o, a.prototype.isClosed = function() {
				return Boolean(this._closed)
			}, a.prototype.redirect = function(e) {
				this.open({
					openFrameUrl: e
				})
			}, t.exports = a
		}, {
			"../../../braintree-error": 90,
			"../../shared/errors": 112
		}],
		107: [function(e, t, n) {
			"use strict";
			var i = e("../../../shared/constants"),
				r = e("./position");

			function o(e, t, n) {
				return void 0 !== t ? t : r[e](n)
			}
			t.exports = function(e) {
				var t = e.height || i.DEFAULT_POPUP_HEIGHT,
					n = e.width || i.DEFAULT_POPUP_WIDTH,
					r = o("top", e.top, t),
					a = o("left", e.left, n);
				return [i.POPUP_BASE_OPTIONS, "height=" + t, "width=" + n, "top=" + r, "left=" + a].join(",")
			}
		}, {
			"../../../shared/constants": 111,
			"./position": 109
		}],
		108: [function(e, t, n) {
			"use strict";
			var i = e("./compose-options");

			function r(e) {
				this._frame = null, this._options = e || {}
			}
			r.prototype.initialize = function() {}, r.prototype.open = function() {
				this._frame = window.open(this._options.openFrameUrl, this._options.name, i(this._options))
			}, r.prototype.focus = function() {
				this._frame.focus()
			}, r.prototype.close = function() {
				this._frame.closed || this._frame.close()
			}, r.prototype.isClosed = function() {
				return !this._frame || Boolean(this._frame.closed)
			}, r.prototype.redirect = function(e) {
				this._frame.location.href = e
			}, t.exports = r
		}, {
			"./compose-options": 107
		}],
		109: [function(e, t, n) {
			"use strict";

			function i(e, t, n) {
				return (e - t) / 2 + n
			}
			t.exports = {
				top: function(e) {
					return i(window.outerHeight || document.documentElement.clientHeight, e, null == window.screenY ? window.screenTop : window.screenY)
				},
				left: function(e) {
					return i(window.outerWidth || document.documentElement.clientWidth, e, null == window.screenX ? window.screenLeft : window.screenX)
				},
				center: i
			}
		}, {}],
		110: [function(e, t, n) {
			"use strict";
			t.exports = {
				isIos: e("@braintree/browser-detection/is-ios"),
				isIosWKWebview: e("@braintree/browser-detection/is-ios-wkwebview"),
				supportsPopups: e("@braintree/browser-detection/supports-popups")
			}
		}, {
			"@braintree/browser-detection/is-ios": 33,
			"@braintree/browser-detection/is-ios-wkwebview": 32,
			"@braintree/browser-detection/supports-popups": 35
		}],
		111: [function(e, t, n) {
			"use strict";
			t.exports = {
				DISPATCH_FRAME_NAME: "dispatch",
				DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
				POPUP_BASE_OPTIONS: "resizable,scrollbars",
				DEFAULT_POPUP_WIDTH: 450,
				DEFAULT_POPUP_HEIGHT: 535,
				POPUP_POLL_INTERVAL: 100,
				POPUP_CLOSE_TIMEOUT: 100
			}
		}, {}],
		112: [function(e, t, n) {
			"use strict";
			var i = e("../../braintree-error");
			t.exports = {
				FRAME_SERVICE_FRAME_CLOSED: {
					type: i.types.INTERNAL,
					code: "FRAME_SERVICE_FRAME_CLOSED",
					message: "Frame closed before tokenization could occur."
				},
				FRAME_SERVICE_FRAME_OPEN_FAILED: {
					type: i.types.INTERNAL,
					code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
					message: "Frame failed to open."
				}
			}
		}, {
			"../../braintree-error": 90
		}],
		113: [function(e, t, n) {
			"use strict";
			var i = e("../../enumerate");
			t.exports = i(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:")
		}, {
			"../../enumerate": 99
		}],
		114: [function(e, t, n) {
			"use strict";
			var i = "3.103.0",
				r = e("./assign").assign;

			function o(e, t) {
				var n = e.analyticsMetadata,
					o = {
						gateway: "braintree",
						"braintree:merchantId": e.gatewayConfiguration.merchantId,
						"braintree:apiVersion": "v1",
						"braintree:sdkVersion": i,
						"braintree:metadata": JSON.stringify({
							source: n.source,
							integration: n.integration,
							sessionId: n.sessionId,
							version: i,
							platform: n.platform
						})
					};
				return r({}, o, t)
			}
			t.exports = function(e, t, n) {
				var i, r, a = e.gatewayConfiguration.androidPay,
					s = "production" === e.gatewayConfiguration.environment ? "PRODUCTION" : "TEST";
				return 2 === t ? (i = {
					apiVersion: 2,
					apiVersionMinor: 0,
					environment: s,
					allowedPaymentMethods: [{
						type: "CARD",
						parameters: {
							allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
							allowedCardNetworks: a.supportedNetworks.map((function(e) {
								return e.toUpperCase()
							}))
						},
						tokenizationSpecification: {
							type: "PAYMENT_GATEWAY",
							parameters: o(e, {
								"braintree:authorizationFingerprint": a.googleAuthorizationFingerprint
							})
						}
					}]
				}, n && (i.merchantInfo = {
					merchantId: n
				}), a.paypalClientId && (r = {
					type: "PAYPAL",
					parameters: {
						purchase_context: {
							purchase_units: [{
								payee: {
									client_id: a.paypalClientId
								},
								recurring_payment: !0
							}]
						}
					},
					tokenizationSpecification: {
						type: "PAYMENT_GATEWAY",
						parameters: o(e, {
							"braintree:paypalClientId": a.paypalClientId
						})
					}
				}, i.allowedPaymentMethods.push(r))) : (i = {
					environment: s,
					allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
					paymentMethodTokenizationParameters: {
						tokenizationType: "PAYMENT_GATEWAY",
						parameters: o(e, {
							"braintree:authorizationFingerprint": a.googleAuthorizationFingerprint
						})
					},
					cardRequirements: {
						allowedCardNetworks: a.supportedNetworks.map((function(e) {
							return e.toUpperCase()
						}))
					}
				}, "TOKENIZATION_KEY" === e.authorizationType && (i.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] = e.authorization), n && (i.merchantId = n), t && (i.apiVersion = t)), i
			}
		}, {
			"./assign": 87
		}],
		115: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				e = e || window;
				try {
					return e.self !== e.top
				} catch (t) {
					return !0
				}
			}
		}, {}],
		116: [function(e, t, n) {
			"use strict";

			function i(e) {
				var t = e.split("-");
				return new Date(t[0], t[1], t[2])
			}
			t.exports = function(e, t) {
				return i(e) <= i(t)
			}
		}, {}],
		117: [function(e, t, n) {
			"use strict";
			t.exports = {
				isHTTPS: function(e) {
					return "https:" === (e = e || window.location.protocol)
				}
			}
		}, {}],
		118: [function(e, t, n) {
			"use strict";
			var i, r = {
				"paypal.com": 1,
				"braintreepayments.com": 1,
				"braintreegateway.com": 1,
				"braintree-api.com": 1
			};
			t.exports = function(e) {
				var t;
				return e = e.toLowerCase(), !!/^https:/.test(e) && ((i = i || document.createElement("a")).href = e, t = i.hostname.split(".").slice(-2).join("."), r.hasOwnProperty(t))
			}
		}, {}],
		119: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return JSON.parse(JSON.stringify(e))
			}
		}, {}],
		120: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return Object.keys(e).filter((function(t) {
					return "function" == typeof e[t]
				}))
			}
		}, {}],
		121: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				var t = !1;
				return function() {
					t || (t = !0, e.apply(null, arguments))
				}
			}
		}, {}],
		122: [function(e, t, n) {
			"use strict";

			function i(e) {
				return e = e || window.location.href, /\?/.test(e)
			}

			function r(e, t) {
				var n, i, o, a, s = [];
				for (o in e) e.hasOwnProperty(o) && (i = e[o], n = t ? (a = e) && "object" == typeof a && "number" == typeof a.length && "[object Array]" === Object.prototype.toString.call(a) ? t + "[]" : t + "[" + o + "]" : o, "object" == typeof i ? s.push(r(i, n)) : s.push(encodeURIComponent(n) + "=" + encodeURIComponent(i)));
				return s.join("&")
			}
			t.exports = {
				parse: function(e) {
					return i(e = e || window.location.href) ? (e.split("?")[1] || "").replace(/#.*$/, "").split("&").reduce((function(e, t) {
						var n = t.split("="),
							i = decodeURIComponent(n[0]),
							r = decodeURIComponent(n[1]);
						return e[i] = r, e
					}), {}) : {}
				},
				stringify: r,
				queryify: function(e, t) {
					return e = e || "", null != t && "object" == typeof t && function(e) {
						var t;
						for (t in e)
							if (e.hasOwnProperty(t)) return !0;
						return !1
					}(t) && (e += -1 === e.indexOf("?") ? "?" : "", e += -1 !== e.indexOf("=") ? "&" : "", e += r(t)), e
				},
				hasQueryParams: i
			}
		}, {}],
		123: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/uuid"),
				r = e("./find-root-node");

			function o(e) {
				return "[object ShadowRoot]" === (e = r(e)).toString()
			}

			function a(e) {
				return o(e = r(e)) ? e.host : null
			}
			t.exports = {
				isShadowElement: o,
				getShadowHost: a,
				transformToSlot: function e(t, n) {
					var s = r(t).querySelector("style"),
						l = a(t),
						d = "shadow-slot-" + i(),
						c = document.createElement("slot"),
						p = document.createElement("div");
					return c.setAttribute("name", d), t.appendChild(c), p.setAttribute("slot", d), l.appendChild(p), n && (s || (s = document.createElement("style"), t.appendChild(s)), s.sheet.insertRule('::slotted([slot="' + d + '"]) { ' + n + " }")), o(l) ? e(p, n) : p
				}
			}
		}, {
			"./find-root-node": 101,
			"@braintree/uuid": 42
		}],
		124: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return -1 === e.indexOf("_") ? e : e.toLowerCase().replace(/(\_\w)/g, (function(e) {
					return e[1].toUpperCase()
				}))
			}
		}, {}],
		125: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return e ? "" : ".min"
			}
		}, {}],
		126: [function(e, t, n) {
			"use strict";
			var i = "function" == typeof atob ? atob : r;

			function r(e) {
				var t, n, i, r, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					l = "";
				if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
				a = 0;
				do {
					t = (63 & s.indexOf(e.charAt(a++))) << 2 | (r = s.indexOf(e.charAt(a++))) >> 4 & 3, n = (15 & r) << 4 | (o = s.indexOf(e.charAt(a++))) >> 2 & 15, i = (3 & o) << 6 | 63 & s.indexOf(e.charAt(a++)), l += String.fromCharCode(t) + (n ? String.fromCharCode(n) : "") + (i ? String.fromCharCode(i) : "")
				} while (a < e.length);
				return l
			}
			t.exports = {
				atob: function(e) {
					return i.call(window, e)
				},
				_atob: r
			}
		}, {}],
		127: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error");
			t.exports = {
				PAYPAL_NOT_ENABLED: {
					type: i.types.MERCHANT,
					code: "PAYPAL_NOT_ENABLED",
					message: "PayPal is not enabled for this merchant."
				},
				PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
					type: i.types.MERCHANT,
					code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
					message: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree."
				},
				PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
					type: i.types.NETWORK,
					code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
					message: "Could not tokenize user's PayPal account."
				},
				PAYPAL_FLOW_FAILED: {
					type: i.types.NETWORK,
					code: "PAYPAL_FLOW_FAILED",
					message: "Could not initialize PayPal flow."
				},
				PAYPAL_FLOW_OPTION_REQUIRED: {
					type: i.types.MERCHANT,
					code: "PAYPAL_FLOW_OPTION_REQUIRED",
					message: "PayPal flow property is invalid or missing."
				},
				PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
					type: i.types.MERCHANT,
					code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED"
				},
				PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
					type: i.types.NETWORK,
					code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
					message: "Something went wrong when setting up the checkout workflow."
				},
				PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
					type: i.types.MERCHANT,
					code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
					message: "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action."
				},
				PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
					type: i.types.CUSTOMER,
					code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
					message: "Customer closed PayPal popup before authorizing."
				},
				PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
					type: i.types.MERCHANT,
					code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
					message: "Vault initiated checkout already in progress."
				},
				PAYPAL_INVALID_PAYMENT_OPTION: {
					type: i.types.MERCHANT,
					code: "PAYPAL_INVALID_PAYMENT_OPTION",
					message: "PayPal payment options are invalid."
				},
				PAYPAL_MISSING_REQUIRED_OPTION: {
					type: i.types.MERCHANT,
					code: "PAYPAL_MISSING_REQUIRED_OPTION",
					message: "Missing required option."
				}
			}
		}, {
			"../lib/braintree-error": 90
		}],
		128: [function(e, t, n) {
			"use strict";
			var i = e("../lib/basic-component-verification"),
				r = e("@braintree/wrap-promise"),
				o = e("./paypal-checkout");
			t.exports = {
				create: r((function(e) {
					return i.verify({
						name: "PayPal Checkout",
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						return new o(e)._initialize(e)
					}))
				})),
				isSupported: function() {
					return !0
				},
				VERSION: "3.103.0"
			}
		}, {
			"../lib/basic-component-verification": 88,
			"./paypal-checkout": 129,
			"@braintree/wrap-promise": 46
		}],
		129: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../lib/assign").assign,
				o = e("../lib/create-deferred-client"),
				a = e("../lib/create-assets-url"),
				s = e("@braintree/extended-promise"),
				l = e("@braintree/wrap-promise"),
				d = e("../lib/braintree-error"),
				c = e("../lib/convert-to-braintree-error"),
				p = e("./errors"),
				u = e("../paypal/shared/constants"),
				h = e("../lib/frame-service/external"),
				m = e("../lib/create-authorization-data"),
				y = e("../lib/methods"),
				f = e("../lib/use-min"),
				E = e("../lib/convert-methods-to-error"),
				v = e("../lib/querystring"),
				g = e("../lib/constants").INTEGRATION_TIMEOUT_MS,
				_ = ["amount", "currency", "vaultInitiatedCheckoutPaymentMethodToken"];

			function b(e) {
				this._merchantAccountId = e.merchantAccountId, this._autoSetDataUserIdToken = Boolean(e.autoSetDataUserIdToken)
			}
			s.suppressUnhandledPromiseMessage = !0, b.prototype._initialize = function(e) {
				var t;
				return e.client ? (t = e.client.getConfiguration(), this._authorizationInformation = {
					fingerprint: t.authorizationFingerprint,
					environment: t.gatewayConfiguration.environment
				}) : (t = m(e.authorization), this._authorizationInformation = {
					fingerprint: t.attrs.authorizationFingerprint,
					environment: t.environment
				}), this._clientPromise = o.create({
					authorization: e.authorization,
					client: e.client,
					debug: e.debug,
					assetsUrl: a.create(e.authorization),
					name: "PayPal Checkout"
				}).then(function(e) {
					return this._configuration = e.getConfiguration(), this._merchantAccountId || (this._configuration.gatewayConfiguration.paypalEnabled ? !0 === this._configuration.gatewayConfiguration.paypal.environmentNoNetwork && (this._setupError = new d(p.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)) : this._setupError = new d(p.PAYPAL_NOT_ENABLED)), this._setupError ? Promise.reject(this._setupError) : (i.sendEvent(e, "paypal-checkout.initialized"), this._frameServicePromise = this._setupFrameService(e), e)
				}.bind(this)), e.client ? this._clientPromise.then(function() {
					return this
				}.bind(this)) : Promise.resolve(this)
			}, b.prototype._setupFrameService = function(e) {
				var t = new s,
					n = e.getConfiguration(),
					r = setTimeout((function() {
						i.sendEvent(e, "paypal-checkout.frame-service.timed-out"), t.reject(new d(p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED))
					}), g);
				return this._assetsUrl = n.gatewayConfiguration.paypal.assetsUrl + "/web/3.103.0", this._isDebug = n.isDebug, this._loadingFrameUrl = this._assetsUrl + "/html/paypal-landing-frame" + f(this._isDebug) + ".html", h.create({
					name: "braintreepaypallanding",
					dispatchFrameUrl: this._assetsUrl + "/html/dispatch-frame" + f(this._isDebug) + ".html",
					openFrameUrl: this._loadingFrameUrl
				}, function(e) {
					this._frameService = e, clearTimeout(r), t.resolve()
				}.bind(this)), t
			}, b.prototype.createPayment = function(e) {
				return e && u.FLOW_ENDPOINTS.hasOwnProperty(e.flow) ? (i.sendEvent(this._clientPromise, "paypal-checkout.createPayment"), this._createPaymentResource(e).then((function(t) {
					return "checkout" === e.flow ? v.parse(t.paymentResource.redirectUrl).token : t.agreementSetup.tokenId
				}))) : Promise.reject(new d(p.PAYPAL_FLOW_OPTION_REQUIRED))
			}, b.prototype._createPaymentResource = function(e, t) {
				var n = this,
					r = "paypal_hermes/" + u.FLOW_ENDPOINTS[e.flow];
				return delete this.intentFromCreatePayment, t = t || {}, !0 === e.offerCredit && i.sendEvent(this._clientPromise, "paypal-checkout.credit.offered"), this._clientPromise.then((function(i) {
					return i.request({
						endpoint: r,
						method: "post",
						data: n._formatPaymentResourceData(e, t)
					}).then((function(t) {
						return n.intentFromCreatePayment = e.intent, t
					}))
				})).catch((function(e) {
					return n._setupError ? Promise.reject(n._setupError) : 422 === (e.details && e.details.httpStatus) ? Promise.reject(new d({
						type: p.PAYPAL_INVALID_PAYMENT_OPTION.type,
						code: p.PAYPAL_INVALID_PAYMENT_OPTION.code,
						message: p.PAYPAL_INVALID_PAYMENT_OPTION.message,
						details: {
							originalError: e
						}
					})) : Promise.reject(c(e, {
						type: p.PAYPAL_FLOW_FAILED.type,
						code: p.PAYPAL_FLOW_FAILED.code,
						message: p.PAYPAL_FLOW_FAILED.message
					}))
				}))
			}, b.prototype.updatePayment = function(e) {
				var t = this;
				return !e || this._hasMissingOption(e, u.REQUIRED_OPTIONS) ? (i.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.missing-options"), Promise.reject(new d(p.PAYPAL_MISSING_REQUIRED_OPTION))) : this._verifyConsistentCurrency(e) ? (i.sendEvent(this._clientPromise, "paypal-checkout.updatePayment"), this._clientPromise.then((function(n) {
					return n.request({
						endpoint: "paypal_hermes/patch_payment_resource",
						method: "post",
						data: t._formatUpdatePaymentData(e)
					})
				})).catch((function(e) {
					return 422 === (e.details && e.details.httpStatus) ? (i.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.invalid"), Promise.reject(new d({
						type: p.PAYPAL_INVALID_PAYMENT_OPTION.type,
						code: p.PAYPAL_INVALID_PAYMENT_OPTION.code,
						message: p.PAYPAL_INVALID_PAYMENT_OPTION.message,
						details: {
							originalError: e
						}
					}))) : (i.sendEvent(t._clientPromise, "paypal-checkout.updatePayment." + p.PAYPAL_FLOW_FAILED.code), Promise.reject(c(e, {
						type: p.PAYPAL_FLOW_FAILED.type,
						code: p.PAYPAL_FLOW_FAILED.code,
						message: p.PAYPAL_FLOW_FAILED.message
					})))
				}))) : (i.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.inconsistent-currencies"), Promise.reject(new d({
					type: p.PAYPAL_INVALID_PAYMENT_OPTION.type,
					code: p.PAYPAL_INVALID_PAYMENT_OPTION.code,
					message: p.PAYPAL_INVALID_PAYMENT_OPTION.message,
					details: {
						originalError: new Error("One or more shipping option currencies differ from checkout currency.")
					}
				})))
			}, b.prototype.startVaultInitiatedCheckout = function(e) {
				var t, n = this;
				return this._vaultInitiatedCheckoutInProgress ? (i.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress"), Promise.reject(new d(p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS))) : (_.forEach((function(n) {
					e.hasOwnProperty(n) || (t = n)
				})), t ? Promise.reject(new d({
					type: p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type,
					code: p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code,
					message: "Required param " + t + " is missing."
				})) : (this._vaultInitiatedCheckoutInProgress = !0, this._addModalBackdrop(e), e = r({}, e, {
					flow: "checkout"
				}), i.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.started"), this._waitForVaultInitiatedCheckoutDependencies().then((function() {
					var t = new s,
						i = n._createPaymentResource(e, {
							returnUrl: n._constructVaultCheckutUrl("redirect-frame"),
							cancelUrl: n._constructVaultCheckutUrl("cancel-frame")
						}).then((function(e) {
							var i = e.paymentResource.redirectUrl;
							return n._frameService.redirect(i), t
						}));
					return n._frameService.open({}, n._createFrameServiceCallback(t)), i
				})).catch((function(e) {
					return n._vaultInitiatedCheckoutInProgress = !1, n._removeModalBackdrop(), "FRAME_SERVICE_FRAME_CLOSED" === e.code ? (i.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer"), Promise.reject(new d(p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED))) : (n._frameService && n._frameService.close(), e.code && e.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1 ? (i.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened"), Promise.reject(new d({
						code: p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.code,
						type: p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.type,
						message: p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.message,
						details: {
							originalError: e
						}
					}))) : Promise.reject(e))
				})).then((function(e) {
					return n._frameService.close(), n._vaultInitiatedCheckoutInProgress = !1, n._removeModalBackdrop(), i.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.succeeded"), Promise.resolve(e)
				}))))
			}, b.prototype._addModalBackdrop = function(e) {
				e.optOutOfModalBackdrop || (this._modalBackdrop || (this._modalBackdrop = document.createElement("div"), this._modalBackdrop.setAttribute("data-braintree-paypal-vault-initiated-checkout-modal", !0), this._modalBackdrop.style.position = "fixed", this._modalBackdrop.style.top = 0, this._modalBackdrop.style.bottom = 0, this._modalBackdrop.style.left = 0, this._modalBackdrop.style.right = 0, this._modalBackdrop.style.zIndex = 9999, this._modalBackdrop.style.background = "black", this._modalBackdrop.style.opacity = "0.7", this._modalBackdrop.addEventListener("click", function() {
					this.focusVaultInitiatedCheckoutWindow()
				}.bind(this))), document.body.appendChild(this._modalBackdrop))
			}, b.prototype._removeModalBackdrop = function() {
				this._modalBackdrop && this._modalBackdrop.parentNode && this._modalBackdrop.parentNode.removeChild(this._modalBackdrop)
			}, b.prototype.closeVaultInitiatedCheckoutWindow = function() {
				return this._vaultInitiatedCheckoutInProgress && i.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant"), this._waitForVaultInitiatedCheckoutDependencies().then(function() {
					this._frameService.close()
				}.bind(this))
			}, b.prototype.focusVaultInitiatedCheckoutWindow = function() {
				return this._waitForVaultInitiatedCheckoutDependencies().then(function() {
					this._frameService.focus()
				}.bind(this))
			}, b.prototype._createFrameServiceCallback = function(e) {
				var t = this;
				return function(n, i) {
					n ? e.reject(n) : i && (t._frameService.redirect(t._loadingFrameUrl), t.tokenizePayment({
						paymentToken: i.token,
						payerID: i.PayerID,
						paymentID: i.paymentId,
						orderID: i.orderId
					}).then((function(t) {
						e.resolve(t)
					})).catch((function(t) {
						e.reject(t)
					})))
				}
			}, b.prototype._waitForVaultInitiatedCheckoutDependencies = function() {
				var e = this;
				return this._clientPromise.then((function() {
					return e._frameServicePromise
				}))
			}, b.prototype._constructVaultCheckutUrl = function(e) {
				var t = this._frameService._serviceId;
				return this._assetsUrl + "/html/" + e + f(this._isDebug) + ".html?channel=" + t
			}, b.prototype.tokenizePayment = function(e) {
				var t, n = this,
					r = !0,
					o = {
						flow: e.billingToken && !e.paymentID ? "vault" : "checkout",
						intent: e.intent || this.intentFromCreatePayment
					},
					a = {
						ecToken: e.paymentToken,
						billingToken: e.billingToken,
						payerId: e.payerID,
						paymentId: e.paymentID,
						orderId: e.orderID,
						shippingOptionsId: e.shippingOptionsId
					};
				return e.hasOwnProperty("vault") && (r = e.vault), o.vault = r, i.sendEvent(this._clientPromise, "paypal-checkout.tokenization.started"), this._clientPromise.then((function(e) {
					return e.request({
						endpoint: "payment_methods/paypal_accounts",
						method: "post",
						data: n._formatTokenizeData(o, a)
					})
				})).then((function(e) {
					return t = n._formatTokenizePayload(e), i.sendEvent(n._clientPromise, "paypal-checkout.tokenization.success"), t.creditFinancingOffered && i.sendEvent(n._clientPromise, "paypal-checkout.credit.accepted"), t
				})).catch((function(e) {
					return n._setupError ? Promise.reject(n._setupError) : (i.sendEvent(n._clientPromise, "paypal-checkout.tokenization.failed"), Promise.reject(c(e, {
						type: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
						code: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
						message: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
					})))
				}))
			}, b.prototype.getClientId = function() {
				return this._clientPromise.then((function(e) {
					return e.getConfiguration().gatewayConfiguration.paypal.clientId
				}))
			}, b.prototype.loadPayPalSDK = function(e) {
				var t = new s,
					n = e && e.dataAttributes || {},
					i = n["user-id-token"] || n["data-user-id-token"];
				return i || (i = this._authorizationInformation.fingerprint && this._authorizationInformation.fingerprint.split("?")[0]), this._paypalScript = document.createElement("script"), delete(e = r({}, {
					components: "buttons"
				}, e)).dataAttributes, e.vault ? e.intent = e.intent || "tokenize" : (e.intent = e.intent || "authorize", e.currency = e.currency || "USD"), this._paypalScript.onload = function() {
					t.resolve()
				}, Object.keys(n).forEach(function(e) {
					this._paypalScript.setAttribute("data-" + e.replace(/^data\-/, ""), n[e])
				}.bind(this)), (e["client-id"] ? Promise.resolve(e["client-id"]) : this.getClientId()).then(function(t) {
					e["client-id"] = t, this._autoSetDataUserIdToken && i && (this._paypalScript.setAttribute("data-user-id-token", i), this._attachPreloadPixel({
						id: t,
						userIdToken: i,
						amount: n.amount,
						currency: e.currency,
						merchantId: e["merchant-id"]
					})), this._paypalScript.src = v.queryify("https://www.paypal.com/sdk/js?", e), document.head.insertBefore(this._paypalScript, document.head.firstElementChild)
				}.bind(this)), t.then(function() {
					return this
				}.bind(this))
			}, b.prototype._attachPreloadPixel = function(e) {
				var t, n = e.id,
					i = e.userIdToken,
					r = this._authorizationInformation.environment,
					o = "https://www.{ENV}paypal.com/smart/buttons/preload".replace("{ENV}", "production" === r ? "" : "sandbox."),
					a = {
						"client-id": n,
						"user-id-token": i
					};
				e.amount && (a.amount = e.amount), e.currency && (a.currency = e.currency), e.merchantId && (a["merchant-id"] = e.merchantId), (t = new XMLHttpRequest).open("GET", v.queryify(o, a)), t.send()
			}, b.prototype._formatPaymentResourceData = function(e, t) {
				var n, i = this._configuration.gatewayConfiguration,
					r = e.intent,
					o = {
						returnUrl: t.returnUrl || "https://www.paypal.com/checkoutnow/error",
						cancelUrl: t.cancelUrl || "https://www.paypal.com/checkoutnow/error",
						offerPaypalCredit: !0 === e.offerCredit,
						merchantAccountId: this._merchantAccountId,
						experienceProfile: {
							brandName: e.displayName || i.paypal.displayName,
							localeCode: e.locale,
							noShipping: (!e.enableShippingAddress).toString(),
							addressOverride: !1 === e.shippingAddressEditable,
							landingPageType: e.landingPageType
						},
						shippingOptions: e.shippingOptions
					};
				if ("checkout" === e.flow) {
					for (n in o.amount = e.amount, o.currencyIsoCode = e.currency, o.requestBillingAgreement = e.requestBillingAgreement, r && ("capture" === r && (r = "sale"), o.intent = r), e.hasOwnProperty("lineItems") && (o.lineItems = e.lineItems), e.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken") && (o.vaultInitiatedCheckoutPaymentMethodToken = e.vaultInitiatedCheckoutPaymentMethodToken), e.hasOwnProperty("shippingOptions") && (o.shippingOptions = e.shippingOptions), e.shippingAddressOverride) e.shippingAddressOverride.hasOwnProperty(n) && (o[n] = e.shippingAddressOverride[n]);
					e.hasOwnProperty("billingAgreementDetails") && (o.billingAgreementDetails = e.billingAgreementDetails)
				} else o.shippingAddress = e.shippingAddressOverride, e.billingAgreementDescription && (o.description = e.billingAgreementDescription);
				return this._riskCorrelationId = e.riskCorrelationId, e.riskCorrelationId && (o.correlationId = this._riskCorrelationId), o
			}, b.prototype._verifyConsistentCurrency = function(e) {
				return !(e.currency && e.hasOwnProperty("shippingOptions") && Array.isArray(e.shippingOptions)) || e.shippingOptions.every((function(t) {
					return t.amount && t.amount.currency && e.currency.toLowerCase() === t.amount.currency.toLowerCase()
				}))
			}, b.prototype._hasMissingOption = function(e, t) {
				var n, i;
				if (t = t || [], !e.hasOwnProperty("amount") && !e.hasOwnProperty("lineItems")) return !0;
				for (n = 0; n < t.length; n++)
					if (i = t[n], !e.hasOwnProperty(i)) return !0;
				return !1
			}, b.prototype._formatUpdatePaymentData = function(e) {
				var t = {
					merchantAccountId: this._merchantAccountId,
					paymentId: e.paymentId || e.orderId,
					currencyIsoCode: e.currency
				};
				return e.hasOwnProperty("amount") && (t.amount = e.amount), e.hasOwnProperty("lineItems") && (t.lineItems = e.lineItems), e.hasOwnProperty("shippingOptions") && (t.shippingOptions = e.shippingOptions), e.hasOwnProperty("amountBreakdown") && (t.amountBreakdown = e.amountBreakdown), e.hasOwnProperty("shippingAddress") && (i.sendEvent(this._clientPromise, "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant"), t.line1 = e.shippingAddress.line1, e.shippingAddress.hasOwnProperty("line2") && (t.line2 = e.shippingAddress.line2), t.city = e.shippingAddress.city, t.state = e.shippingAddress.state, t.postalCode = e.shippingAddress.postalCode, t.countryCode = e.shippingAddress.countryCode, e.shippingAddress.hasOwnProperty("phone") && (t.phone = e.shippingAddress.phone), e.shippingAddress.hasOwnProperty("recipientName") && (t.recipientName = e.shippingAddress.recipientName)), t
			}, b.prototype._formatTokenizeData = function(e, t) {
				var n = this._configuration,
					i = n.gatewayConfiguration,
					r = "TOKENIZATION_KEY" === n.authorizationType,
					o = "vault" === e.flow,
					a = {
						paypalAccount: {
							correlationId: this._riskCorrelationId || t.billingToken || t.ecToken,
							options: {
								validate: o && !r && e.vault
							}
						}
					};
				return o ? a.paypalAccount.billingAgreementToken = t.billingToken : (a.paypalAccount.paymentToken = t.paymentId || t.orderId, a.paypalAccount.payerId = t.payerId, a.paypalAccount.unilateral = i.paypal.unvettedMerchant, e.intent && (a.paypalAccount.intent = e.intent)), this._merchantAccountId && (a.merchantAccountId = this._merchantAccountId), a
			}, b.prototype._formatTokenizePayload = function(e) {
				var t, n = {};
				return e.paypalAccounts && (n = e.paypalAccounts[0]), t = {
					nonce: n.nonce,
					details: {},
					type: n.type
				}, n.details && n.details.payerInfo && (t.details = n.details.payerInfo), n.details && n.details.creditFinancingOffered && (t.creditFinancingOffered = n.details.creditFinancingOffered), n.details && n.details.shippingOptionId && (t.shippingOptionId = n.details.shippingOptionId), n.details && n.details.cobrandedCardLabel && (t.cobrandedCardLabel = n.details.cobrandedCardLabel), t
			}, b.prototype.teardown = function() {
				var e = this;
				return E(this, y(b.prototype)), this._paypalScript && this._paypalScript.parentNode && this._paypalScript.parentNode.removeChild(this._paypalScript), this._frameServicePromise.catch((function() {})).then((function() {
					return e._frameService ? e._frameService.teardown() : Promise.resolve()
				}))
			}, t.exports = l.wrapPrototype(b)
		}, {
			"../lib/analytics": 85,
			"../lib/assign": 87,
			"../lib/braintree-error": 90,
			"../lib/constants": 91,
			"../lib/convert-methods-to-error": 92,
			"../lib/convert-to-braintree-error": 93,
			"../lib/create-assets-url": 94,
			"../lib/create-authorization-data": 95,
			"../lib/create-deferred-client": 96,
			"../lib/frame-service/external": 104,
			"../lib/methods": 120,
			"../lib/querystring": 122,
			"../lib/use-min": 125,
			"../paypal/shared/constants": 130,
			"./errors": 127,
			"@braintree/extended-promise": 37,
			"@braintree/wrap-promise": 46
		}],
		130: [function(e, t, n) {
			"use strict";
			t.exports = {
				LANDING_FRAME_NAME: "braintreepaypallanding",
				FLOW_ENDPOINTS: {
					checkout: "create_payment_resource",
					vault: "setup_billing_agreement"
				},
				REQUIRED_OPTIONS: ["paymentId", "currency"]
			}
		}, {}],
		131: [function(e, t, n) {
			"use strict";
			var i = e("../../../lib/assign").assign,
				r = e("../../../lib/analytics"),
				o = e("../../../lib/braintree-error"),
				a = e("../../../lib/is-verified-domain"),
				s = e("@braintree/extended-promise"),
				l = e("@braintree/event-emitter"),
				d = e("../../shared/errors"),
				c = e("@braintree/iframer"),
				p = e("framebus"),
				u = e("../../shared/constants"),
				h = e("@braintree/uuid"),
				m = e("../../shared/events"),
				y = e("../../../lib/use-min"),
				f = e("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT,
				E = "3.103.0";

			function v(e) {
				l.call(this), this._client = e.client, this._createPromise = e.createPromise, this._createOptions = e, this._client ? (this._isDebug = this._client.getConfiguration().isDebug, this._assetsUrl = this._client.getConfiguration().gatewayConfiguration.assetsUrl) : (this._isDebug = Boolean(e.isDebug), this._assetsUrl = e.assetsUrl), this._assetsUrl = this._assetsUrl + "/web/" + E
			}
			s.suppressUnhandledPromiseMessage = !0, l.createChild(v), v.prototype._waitForClient = function() {
				return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
					this._client = e
				}.bind(this))
			}, v.prototype.setUpEventListeners = function() {
				throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
			}, v.prototype.verifyCard = function(e, t) {
				var n, i, o = this;
				return t = t || {}, (i = this._checkForVerifyCardError(e, t)) ? Promise.reject(i) : (this._verifyCardInProgress = !0, n = this._formatVerifyCardOptions(e), this._formatLookupData(n).then((function(e) {
					return r.sendEvent(o._createPromise, "three-d-secure.verification-flow.started"), o._performLookup(n.nonce, e)
				})).then((function(e) {
					return r.sendEvent(o._createPromise, "three-d-secure.verification-flow.3ds-version." + e.lookup.threeDSecureVersion), o._onLookupComplete(e, n)
				})).then((function(e) {
					return o.initializeChallengeWithLookupResponse(e, n)
				})).then((function(e) {
					return o._resetVerificationState(), r.sendEvent(o._createPromise, "three-d-secure.verification-flow.completed"), e
				})).catch((function(e) {
					return o._resetVerificationState(), r.sendEvent(o._createPromise, "three-d-secure.verification-flow.failed"), Promise.reject(e)
				})))
			}, v.prototype._checkForFrameworkSpecificVerifyCardErrors = function() {
				throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
			}, v.prototype._presentChallenge = function() {
				throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
			}, v.prototype.prepareLookup = function() {
				throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
			}, v.prototype._resetVerificationState = function() {
				this._verifyCardInProgress = !1, this._verifyCardPromisePlus = null, "function" == typeof this._reloadThreeDSecure && this._reloadThreeDSecure()
			}, v.prototype._performLookup = function(e, t) {
				var n = this,
					i = "payment_methods/" + e + "/three_d_secure/lookup";
				return this._waitForClient().then((function() {
					return n._client.request({
						endpoint: i,
						method: "post",
						data: t
					}).catch((function(e) {
						var t, i = e && e.details && e.details.httpStatus,
							a = "three-d-secure.verification-flow.lookup-failed";
						return 404 === i ? (t = d.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR, a += ".404") : 422 === i ? (t = d.THREEDS_LOOKUP_VALIDATION_ERROR, a += ".422") : t = d.THREEDS_LOOKUP_ERROR, r.sendEvent(n._createPromise, a), Promise.reject(new o({
							type: t.type,
							code: t.code,
							message: t.message,
							details: {
								originalError: e
							}
						}))
					}))
				}))
			}, v.prototype._existsAndIsNumeric = function(e) {
				return !(null == e || Array.isArray(e) || "boolean" == typeof e || "string" == typeof e && "" === e.trim() || isNaN(Number(e)))
			}, v.prototype._checkForVerifyCardError = function(e, t) {
				var n;
				return !0 === this._verifyCardInProgress ? new o(d.THREEDS_AUTHENTICATION_IN_PROGRESS) : (e.nonce ? this._existsAndIsNumeric(e.amount) || (n = "an amount") : n = "a nonce", n || (n = this._checkForFrameworkSpecificVerifyCardErrors(e, t)), n ? new o({
					type: d.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
					code: d.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
					message: "verifyCard options must include " + n + "."
				}) : null)
			}, v.prototype.initializeChallengeWithLookupResponse = function(e, t) {
				var n = this;
				return t = t || {}, this._lookupPaymentMethod = e.paymentMethod, n._verifyCardPromisePlus = n._verifyCardPromisePlus || new s, n._handleLookupResponse(e, t), n._verifyCardPromisePlus.then((function(e) {
					return r.sendEvent(n._createPromise, "three-d-secure.verification-flow.liability-shifted." + String(e.liabilityShifted)), r.sendEvent(n._createPromise, "three-d-secure.verification-flow.liability-shift-possible." + String(e.liabilityShiftPossible)), e
				}))
			}, v.prototype._handleLookupResponse = function(e, t) {
				var n, i = Boolean(e.lookup && e.lookup.acsUrl);
				r.sendEvent(this._createPromise, "three-d-secure.verification-flow.challenge-presented." + String(i)), i ? this._presentChallenge(e, t) : ((n = this._formatAuthResponse(e.paymentMethod, e.threeDSecureInfo)).verificationDetails = e.threeDSecureInfo, this._verifyCardPromisePlus.resolve(n))
			}, v.prototype._onLookupComplete = function(e) {
				return this._lookupPaymentMethod = e.paymentMethod, this._verifyCardPromisePlus = new s, Promise.resolve(e)
			}, v.prototype._formatAuthResponse = function(e, t) {
				return {
					nonce: e.nonce,
					type: e.type,
					binData: e.binData,
					details: e.details,
					description: e.description && e.description.replace(/\+/g, " "),
					liabilityShifted: t && t.liabilityShifted,
					liabilityShiftPossible: t && t.liabilityShiftPossible,
					threeDSecureInfo: e.threeDSecureInfo
				}
			}, v.prototype._formatVerifyCardOptions = function(e) {
				return i({}, e)
			}, v.prototype._formatLookupData = function(e) {
				var t = {
					amount: e.amount
				};
				return !0 === e.collectDeviceData && (t.browserColorDepth = window.screen.colorDepth, t.browserJavaEnabled = window.navigator.javaEnabled(), t.browserJavascriptEnabled = !0, t.browserLanguage = window.navigator.language, t.browserScreenHeight = window.screen.height, t.browserScreenWidth = window.screen.width, t.browserTimeZone = (new Date).getTimezoneOffset(), t.deviceChannel = "Browser"), Promise.resolve(t)
			}, v.prototype._handleV1AuthResponse = function(e) {
				var t = JSON.parse(e.auth_response);
				t.success ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(t.paymentMethod, t.threeDSecureInfo)) : t.threeDSecureInfo && t.threeDSecureInfo.liabilityShiftPossible ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(this._lookupPaymentMethod, t.threeDSecureInfo)) : this._verifyCardPromisePlus.reject(new o({
					type: o.types.UNKNOWN,
					code: "UNKNOWN_AUTH_RESPONSE",
					message: t.error.message
				}))
			}, v.prototype.cancelVerifyCard = function() {
				var e, t;
				return this._verifyCardInProgress = !1, this._lookupPaymentMethod ? (t = this._lookupPaymentMethod.threeDSecureInfo, e = i({}, this._lookupPaymentMethod, {
					liabilityShiftPossible: t && t.liabilityShiftPossible,
					liabilityShifted: t && t.liabilityShifted,
					verificationDetails: t && t.verificationDetails
				}), Promise.resolve(e)) : Promise.reject(new o(d.THREEDS_NO_VERIFICATION_PAYLOAD))
			}, v.prototype._setupV1Bus = function(e) {
				var t = this._client.getConfiguration(),
					n = window.location.href.split("#")[0],
					i = e.lookupResponse,
					r = h(),
					o = new p({
						channel: r,
						verifyDomain: a
					}),
					s = this._assetsUrl + "/html/three-d-secure-authentication-complete-frame.html?channel=" + encodeURIComponent(r) + "&";
				return o.on(f, (function(r) {
					r({
						clientConfiguration: t,
						nonce: e.nonce,
						acsUrl: i.acsUrl,
						pareq: i.pareq,
						termUrl: i.termUrl + "&three_d_secure_version=" + E + "&authentication_complete_base_url=" + encodeURIComponent(s),
						md: i.md,
						parentUrl: n
					})
				})), o.on(m.AUTHENTICATION_COMPLETE, e.handleAuthResponse), o
			}, v.prototype._setupV1Iframe = function(e) {
				var t = this._assetsUrl + "/html/three-d-secure-bank-frame" + y(this._isDebug) + ".html?showLoader=" + e.showLoader;
				return c({
					src: t,
					height: 400,
					width: 400,
					name: u.LANDING_FRAME_NAME + "_" + this._v1Bus.channel,
					title: "3D Secure Authorization Frame"
				})
			}, v.prototype._setupV1Elements = function(e) {
				this._v1Bus = this._setupV1Bus(e), this._v1Iframe = this._setupV1Iframe(e)
			}, v.prototype._teardownV1Elements = function() {
				this._v1Bus && (this._v1Bus.teardown(), this._v1Bus = null), this._v1Iframe && this._v1Iframe.parentNode && (this._v1Iframe.parentNode.removeChild(this._v1Iframe), this._v1Iframe = null), this._onV1Keyup && (document.removeEventListener("keyup", this._onV1Keyup), this._onV1Keyup = null)
			}, v.prototype.teardown = function() {
				return r.sendEvent(this._createPromise, "three-d-secure.teardown-completed"), this._teardownV1Elements(), Promise.resolve()
			}, t.exports = v
		}, {
			"../../../lib/analytics": 85,
			"../../../lib/assign": 87,
			"../../../lib/braintree-error": 90,
			"../../../lib/constants": 91,
			"../../../lib/is-verified-domain": 118,
			"../../../lib/use-min": 125,
			"../../shared/constants": 140,
			"../../shared/errors": 141,
			"../../shared/events": 142,
			"@braintree/event-emitter": 36,
			"@braintree/extended-promise": 37,
			"@braintree/iframer": 38,
			"@braintree/uuid": 42,
			framebus: 166
		}],
		132: [function(e, t, n) {
			"use strict";
			var i = e("./songbird");

			function r(e) {
				i.call(this, e)
			}
			r.prototype = Object.create(i.prototype, {
				constructor: i
			}), r.prototype._createV1IframeModalElement = function(e) {
				var t = document.createElement("div");
				return t.innerHTML = '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">×</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>', t.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(e), t
			}, r.prototype._createCardinalConfigurationOptions = function(e) {
				var t = i.prototype._createCardinalConfigurationOptions.call(this, e);
				return t.payment.framework = "bootstrap3", t
			}, t.exports = r
		}, {
			"./songbird": 137
		}],
		133: [function(e, t, n) {
			"use strict";
			var i = e("./songbird");

			function r(e) {
				i.call(this, e)
			}
			r.prototype = Object.create(i.prototype, {
				constructor: i
			}), r.prototype._createV1IframeModalElement = function(e) {
				var t = document.createElement("div"),
					n = Boolean(this._createOptions && this._createOptions.cardinalSDKConfig && this._createOptions.cardinalSDKConfig.payment && this._createOptions.cardinalSDKConfig.payment.displayExitButton);
				return t.innerHTML = '<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color=\'#000\'" onMouseOut="this.style.color=\'#999\'">×</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>', n || (t.querySelector("[data-braintree-v1-fallback-close-button]").style.display = "none"), t.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(e), t
			}, t.exports = r
		}, {
			"./songbird": 137
		}],
		134: [function(e, t, n) {
			"use strict";
			var i = e("./legacy"),
				r = e("./cardinal-modal"),
				o = e("./bootstrap3-modal"),
				a = e("./inline-iframe");
			t.exports = {
				legacy: i,
				"cardinal-modal": r,
				"bootstrap3-modal": o,
				"inline-iframe": a
			}
		}, {
			"./bootstrap3-modal": 132,
			"./cardinal-modal": 133,
			"./inline-iframe": 135,
			"./legacy": 136
		}],
		135: [function(e, t, n) {
			"use strict";
			var i = e("./songbird"),
				r = e("../../../lib/braintree-error"),
				o = e("../../shared/errors"),
				a = e("../../../lib/enumerate");

			function s(e) {
				i.call(this, e)
			}
			s.prototype = Object.create(i.prototype, {
				constructor: i
			}), s.events = a(["AUTHENTICATION_IFRAME_AVAILABLE"], "inline-iframe-framework:"), s.prototype.setUpEventListeners = function(e) {
				i.prototype.setUpEventListeners.call(this, e), this.on(s.events.AUTHENTICATION_IFRAME_AVAILABLE, (function(t, n) {
					e("authentication-iframe-available", t, n)
				}))
			}, s.prototype._createCardinalConfigurationOptions = function(e) {
				var t = i.prototype._createCardinalConfigurationOptions.call(this, e);
				return t.payment.framework = "inline", t
			}, s.prototype._addV1IframeToPage = function() {
				this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, {
					element: this._v1Modal
				}, (function() {}))
			}, s.prototype._setupFrameworkSpecificListeners = function() {
				this.setCardinalListener("ui.inline.setup", this._onInlineSetup.bind(this))
			}, s.prototype._onInlineSetup = function(e, t, n, i) {
				var a, l;
				e && t ? ("CCA" !== t.paymentType || "suppress" !== t.data.mode && "static" !== t.data.mode) && (l = !0) : l = !0, l ? i(new r(o.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT)) : ((a = document.createElement("div")).innerHTML = e, "suppress" === t.data.mode ? (a.style.display = "none", document.body.appendChild(a), n()) : "static" === t.data.mode && this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, {
					element: a
				}, (function() {
					n()
				})))
			}, t.exports = s
		}, {
			"../../../lib/braintree-error": 90,
			"../../../lib/enumerate": 99,
			"../../shared/errors": 141,
			"./songbird": 137
		}],
		136: [function(e, t, n) {
			"use strict";
			var i = e("./base"),
				r = e("../../../lib/deferred");

			function o(e) {
				i.call(this, e)
			}
			o.prototype = Object.create(i.prototype, {
				constructor: o
			}), o.prototype.setUpEventListeners = function() {}, o.prototype.transformV1CustomerBillingAddress = function(e) {
				return e.billingAddress.line1 = e.billingAddress.streetAddress, e.billingAddress.line2 = e.billingAddress.extendedAddress, e.billingAddress.city = e.billingAddress.locality, e.billingAddress.state = e.billingAddress.region, e.billingAddress.countryCode = e.billingAddress.countryCodeAlpha2, delete e.billingAddress.streetAddress, delete e.billingAddress.extendedAddress, delete e.billingAddress.locality, delete e.billingAddress.region, delete e.billingAddress.countryCodeAlpha2, e
			}, o.prototype._createIframe = function(e) {
				var t = this;
				return this._setupV1Elements({
					nonce: e.nonce,
					lookupResponse: e.lookupResponse,
					showLoader: e.showLoader,
					handleAuthResponse: function(n) {
						t._handleAuthResponse(n, e)
					}
				}), this._v1Iframe
			}, o.prototype._handleAuthResponse = function(e, t) {
				this._v1Bus.teardown(), t.removeFrame(), r(function() {
					this._handleV1AuthResponse(e)
				}.bind(this))()
			}, o.prototype._checkForFrameworkSpecificVerifyCardErrors = function(e) {
				var t;
				return "function" != typeof e.addFrame ? t = "an addFrame function" : "function" != typeof e.removeFrame && (t = "a removeFrame function"), t
			}, o.prototype._formatVerifyCardOptions = function(e) {
				var t = i.prototype._formatVerifyCardOptions.call(this, e);
				return t.addFrame = r(e.addFrame), t.removeFrame = r(e.removeFrame), t.showLoader = !1 !== e.showLoader, t
			}, o.prototype._formatLookupData = function(e) {
				var t = this;
				return i.prototype._formatLookupData.call(this, e).then((function(n) {
					return e.customer && e.customer.billingAddress && (n.customer = t.transformV1CustomerBillingAddress(e.customer)), n
				}))
			}, o.prototype._presentChallenge = function(e, t) {
				t.addFrame(null, this._createIframe({
					showLoader: t.showLoader,
					lookupResponse: e.lookup,
					nonce: e.paymentMethod.nonce,
					removeFrame: t.removeFrame
				}))
			}, t.exports = o
		}, {
			"../../../lib/deferred": 97,
			"./base": 131
		}],
		137: [function(e, t, n) {
			"use strict";
			var i = e("./base"),
				r = e("../../../lib/assign").assign,
				o = e("../../../lib/deferred"),
				a = e("../../../lib/braintree-error"),
				s = e("../../../lib/convert-to-braintree-error"),
				l = e("../../../lib/analytics"),
				d = e("../../../lib/assets"),
				c = e("../../shared/errors"),
				p = e("../../../lib/enumerate"),
				u = e("../../shared/constants"),
				h = e("@braintree/extended-promise"),
				m = e("../../../lib/constants").INTEGRATION_TIMEOUT_MS,
				y = e("../../../lib/constants").PLATFORM,
				f = "3.103.0",
				E = ["ui.close", "ui.render", "ui.renderHidden", "ui.loading.close", "ui.loading.render"],
				v = ["low_value", "transaction_risk_analysis"];

			function g(e) {
				i.call(this, e), this._songbirdInitFailed = !1, this._clientMetadata = {
					requestedThreeDSecureVersion: "2",
					sdkVersion: y + "/" + f
				}, this.originalSetupOptions = e, this._getDfReferenceIdPromisePlus = new h, this.setupSongbird(e), this._cardinalEvents = []
			}

			function _(e, t, n) {
				t[n + "Line1"] = e.streetAddress, t[n + "Line2"] = e.extendedAddress, t[n + "Line3"] = e.line3, t[n + "City"] = e.locality, t[n + "State"] = e.region, t[n + "PostalCode"] = e.postalCode, t[n + "CountryCode"] = e.countryCodeAlpha2
			}
			h.suppressUnhandledPromiseMessage = !0, g.prototype = Object.create(i.prototype, {
				constructor: g
			}), g.events = p(["LOOKUP_COMPLETE", "CUSTOMER_CANCELED", "UI.CLOSE", "UI.RENDER", "UI.RENDERHIDDEN", "UI.LOADING.CLOSE", "UI.LOADING.RENDER"], "songbird-framework:"), g.prototype.setUpEventListeners = function(e) {
				this.on(g.events.LOOKUP_COMPLETE, (function(t, n) {
					e("lookup-complete", t, n)
				})), this.on(g.events.CUSTOMER_CANCELED, (function() {
					e("customer-canceled")
				})), this.on(g.events["UI.CLOSE"], (function() {
					e("authentication-modal-close")
				})), this.on(g.events["UI.RENDER"], (function() {
					e("authentication-modal-render")
				})), this.on(g.events["UI.RENDERHIDDEN"], (function() {
					e("authentication-modal-render-hidden")
				})), this.on(g.events["UI.LOADING.CLOSE"], (function() {
					e("authentication-modal-loader-close")
				})), this.on(g.events["UI.LOADING.RENDER"], (function() {
					e("authentication-modal-loader-render")
				}))
			}, g.prototype.prepareLookup = function(e) {
				var t = r({}, e),
					n = this;
				return this.getDfReferenceId().then((function(e) {
					t.dfReferenceId = e
				})).then((function() {
					return n._triggerCardinalBinProcess(e.bin)
				})).catch((function() {})).then((function() {
					return n._waitForClient()
				})).then((function() {
					return t.clientMetadata = n._clientMetadata, t.authorizationFingerprint = n._client.getConfiguration().authorizationFingerprint, t.braintreeLibraryVersion = "braintree/web/" + f, t
				}))
			}, g.prototype.initializeChallengeWithLookupResponse = function(e, t) {
				return this.setupSongbird().then(function() {
					return i.prototype.initializeChallengeWithLookupResponse.call(this, e, t)
				}.bind(this))
			}, g.prototype.handleSongbirdError = function(e) {
				this._songbirdInitFailed = !0, this._removeSongbirdListeners(), l.sendEvent(this._createPromise, "three-d-secure.cardinal-sdk.songbird-error." + e), this._songbirdPromise && this._songbirdPromise.resolve()
			}, g.prototype._triggerCardinalBinProcess = function(e) {
				var t = this,
					n = Date.now();
				return window.Cardinal.trigger("bin.process", e).then((function(e) {
					t._clientMetadata.issuerDeviceDataCollectionTimeElapsed = Date.now() - n, t._clientMetadata.issuerDeviceDataCollectionResult = e && e.Status
				}))
			}, g.prototype.transformBillingAddress = function(e, t) {
				return t && (_(t, e, "billing"), e.billingPhoneNumber = t.phoneNumber, e.billingGivenName = t.givenName, e.billingSurname = t.surname), e
			}, g.prototype.transformShippingAddress = function(e) {
				var t = e.shippingAddress;
				return t && (_(t, e, "shipping"), delete e.shippingAddress), e
			}, g.prototype._createV1IframeModalElement = function(e) {
				var t = document.createElement("div");
				return t.innerHTML = '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>', t.querySelector('[data-braintree-v1-fallback-iframe-container="true"]').appendChild(e), t
			}, g.prototype._createV1IframeModal = function(e) {
				var t = this._createV1IframeModalElement(e),
					n = t.querySelector("[data-braintree-v1-fallback-close-button]"),
					i = t.querySelector("[data-braintree-v1-fallback-backdrop]"),
					r = this;

				function o() {
					t.parentNode.removeChild(t), r.cancelVerifyCard(c.THREEDS_CARDINAL_SDK_CANCELED), document.removeEventListener("keyup", r._onV1Keyup), r._onV1Keyup = null
				}
				return this._onV1Keyup = function(e) {
					"Escape" === e.key && t.parentNode && o()
				}, n && n.addEventListener("click", o), i && i.addEventListener("click", o), document.addEventListener("keyup", this._onV1Keyup), t
			}, g.prototype._addV1IframeToPage = function() {
				document.body.appendChild(this._v1Modal)
			}, g.prototype.setupSongbird = function(e) {
				var t = this,
					n = Date.now();
				return this._songbirdPromise || (e = e || {}, this._songbirdPromise = new h, this._v2SetupFailureReason = "reason-unknown", t._loadCardinalScript(e).then((function() {
					return window.Cardinal ? t._configureCardinalSdk({
						setupOptions: e,
						setupStartTime: n
					}) : (t._v2SetupFailureReason = "cardinal-global-unavailable", Promise.reject(new a(c.THREEDS_CARDINAL_SDK_SETUP_FAILED)))
				})).catch((function(e) {
					var n = s(e, {
						type: c.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
						code: c.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
						message: c.THREEDS_CARDINAL_SDK_SETUP_FAILED.message
					});
					t._getDfReferenceIdPromisePlus.reject(n), window.clearTimeout(t._songbirdSetupTimeoutReference), l.sendEvent(t._client, "three-d-secure.cardinal-sdk.init.setup-failed"), t.handleSongbirdError("cardinal-sdk-setup-failed." + t._v2SetupFailureReason)
				}))), this._songbirdPromise
			}, g.prototype._configureCardinalSdk = function(e) {
				var t = this;
				return this._waitForClient().then((function() {
					return t._client.getConfiguration().gatewayConfiguration.threeDSecure
				})).then((function(n) {
					var i = n.cardinalAuthenticationJWT,
						r = e.setupOptions,
						o = e.setupStartTime,
						a = t._createCardinalConfigurationOptions(r);
					E.forEach((function(e) {
						t.setCardinalListener(e, (function() {
							t._emit(g.events[e.toUpperCase()])
						}))
					})), t.setCardinalListener("payments.setupComplete", t._createPaymentsSetupCompleteCallback()), t._setupFrameworkSpecificListeners(), window.Cardinal.configure(a), window.Cardinal.setup("init", {
						jwt: i
					}), t._clientMetadata.cardinalDeviceDataCollectionTimeElapsed = Date.now() - o, t.setCardinalListener("payments.validated", t._createPaymentsValidatedCallback())
				})).catch((function(e) {
					return t._v2SetupFailureReason = "cardinal-configuration-threw-error", Promise.reject(e)
				}))
			}, g.prototype.setCardinalListener = function(e, t) {
				this._cardinalEvents.push(e), window.Cardinal.on(e, t)
			}, g.prototype._setupFrameworkSpecificListeners = function() {}, g.prototype._createCardinalConfigurationOptions = function(e) {
				var t = e.cardinalSDKConfig || {},
					n = t.payment || {};
				return !t.logging && e.loggingEnabled && (t.logging = {
					level: "verbose"
				}), t.payment = {}, n.hasOwnProperty("displayLoading") && (t.payment.displayLoading = n.displayLoading), n.hasOwnProperty("displayExitButton") && (t.payment.displayExitButton = n.displayExitButton), t
			}, g.prototype._loadCardinalScript = function(e) {
				var t = this;
				return this._waitForClient().then((function() {
					var n = t._getCardinalScriptSource();
					return t._songbirdSetupTimeoutReference = window.setTimeout((function() {
						l.sendEvent(t._client, "three-d-secure.cardinal-sdk.init.setup-timeout"), t.handleSongbirdError("cardinal-sdk-setup-timeout")
					}), e.timeout || m), d.loadScript({
						src: n
					})
				})).catch((function(e) {
					return t._v2SetupFailureReason = "songbird-js-failed-to-load", Promise.reject(s(e, c.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED))
				}))
			}, g.prototype._getCardinalScriptSource = function() {
				var e = this._client.getConfiguration().gatewayConfiguration;
				return e && "production" === e.environment ? u.CARDINAL_SCRIPT_SOURCE.production : u.CARDINAL_SCRIPT_SOURCE.sandbox
			}, g.prototype._createPaymentsSetupCompleteCallback = function() {
				var e = this;
				return function(t) {
					e._getDfReferenceIdPromisePlus.resolve(t.sessionId), window.clearTimeout(e._songbirdSetupTimeoutReference), l.sendEvent(e._createPromise, "three-d-secure.cardinal-sdk.init.setup-completed"), e._songbirdPromise.resolve()
				}
			}, g.prototype.getDfReferenceId = function() {
				return this._getDfReferenceIdPromisePlus
			}, g.prototype._performJWTValidation = function(e, t) {
				var n = this,
					i = this._lookupPaymentMethod.nonce,
					r = "payment_methods/" + i + "/three_d_secure/authenticate_from_jwt",
					o = e && e.Payment && e.Payment.ExtendedData && e.Payment.ExtendedData.ChallengeCancel;
				return o && (l.sendEvent(this._createPromise, "three-d-secure.verification-flow.cardinal-sdk.cancel-code." + o), "01" === o && this._emit(g.events.CUSTOMER_CANCELED)), l.sendEvent(this._createPromise, "three-d-secure.verification-flow.upgrade-payment-method.started"), this._waitForClient().then((function() {
					return n._client.request({
						method: "post",
						endpoint: r,
						data: {
							jwt: t,
							paymentMethodNonce: i
						}
					})
				})).then((function(t) {
					var i = t.paymentMethod || n._lookupPaymentMethod,
						r = n._formatAuthResponse(i, t.threeDSecureInfo);
					return r.rawCardinalSDKVerificationData = e, l.sendEvent(n._client, "three-d-secure.verification-flow.upgrade-payment-method.succeeded"), Promise.resolve(r)
				})).catch((function(e) {
					var t = new a({
						type: c.THREEDS_JWT_AUTHENTICATION_FAILED.type,
						code: c.THREEDS_JWT_AUTHENTICATION_FAILED.code,
						message: c.THREEDS_JWT_AUTHENTICATION_FAILED.message,
						details: {
							originalError: e
						}
					});
					return l.sendEvent(n._client, "three-d-secure.verification-flow.upgrade-payment-method.errored"), Promise.reject(t)
				}))
			}, g.prototype._createPaymentsValidatedCallback = function() {
				var e = this;
				return function(t, n) {
					var i;
					if (l.sendEvent(e._createPromise, "three-d-secure.verification-flow.cardinal-sdk.action-code." + t.ActionCode.toLowerCase()), e._verifyCardPromisePlus) switch (t.ActionCode) {
						case "SUCCESS":
						case "NOACTION":
						case "FAILURE":
							e._performJWTValidation(t, n).then((function(t) {
								e._verifyCardPromisePlus.resolve(t)
							})).catch((function(t) {
								e._verifyCardPromisePlus.reject(t)
							}));
							break;
						case "ERROR":
							switch (l.sendEvent(e._createPromise, "three-d-secure.verification-flow.cardinal-sdk-error." + t.ErrorNumber), t.ErrorNumber) {
								case 10001:
								case 10002:
									i = new a(c.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT);
									break;
								case 10003:
								case 10007:
								case 10009:
									i = new a(c.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT);
									break;
								case 10005:
								case 10006:
									i = new a(c.THREEDS_CARDINAL_SDK_BAD_CONFIG);
									break;
								case 10008:
								case 10010:
									i = new a(c.THREEDS_CARDINAL_SDK_BAD_JWT);
									break;
								case 10011:
									l.sendEvent(e._createPromise, "three-d-secure.verification-flow.canceled"), i = new a(c.THREEDS_CARDINAL_SDK_CANCELED);
									break;
								default:
									i = new a(c.THREEDS_CARDINAL_SDK_ERROR)
							}
							i.details = {
								originalError: {
									code: t.ErrorNumber,
									description: t.ErrorDescription
								}
							}, e._verifyCardPromisePlus.reject(i)
					} else e.handleSongbirdError("cardinal-sdk-setup-error.number-" + t.ErrorNumber)
				}
			}, g.prototype._checkForVerifyCardError = function(e, t) {
				return e.bin ? i.prototype._checkForVerifyCardError.call(this, e, t) : new a({
					type: c.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
					code: c.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
					message: "verifyCard options must include a BIN."
				})
			}, g.prototype._checkForFrameworkSpecificVerifyCardErrors = function(e, t) {
				var n;
				return "function" == typeof e.onLookupComplete || t.ignoreOnLookupCompleteRequirement || (n = "an onLookupComplete function"), n
			}, g.prototype._formatVerifyCardOptions = function(e) {
				var t = i.prototype._formatVerifyCardOptions.call(this, e),
					n = t.additionalInformation || {};
				return n = this.transformBillingAddress(n, e.billingAddress), n = this.transformShippingAddress(n), e.onLookupComplete && (t.onLookupComplete = o(e.onLookupComplete)), e.email && (n.email = e.email), e.mobilePhoneNumber && (n.mobilePhoneNumber = e.mobilePhoneNumber), t.additionalInformation = n, t
			}, g.prototype._onLookupComplete = function(e, t) {
				var n = this;
				return i.prototype._onLookupComplete.call(this, e).then((function(e) {
					return new Promise((function(i, r) {
						function o() {
							i(e)
						}
						e.requiresUserAuthentication = Boolean(e.lookup && e.lookup.acsUrl), n._verifyCardPromisePlus.catch(r), t.onLookupComplete ? t.onLookupComplete(e, o) : n._emit(g.events.LOOKUP_COMPLETE, e, o)
					}))
				}))
			}, g.prototype._presentChallenge = function(e) {
				!this._songbirdInitFailed && e.lookup.transactionId && window.Cardinal.continue("cca", {
					AcsUrl: e.lookup.acsUrl,
					Payload: e.lookup.pareq
				}, {
					OrderDetails: {
						TransactionId: e.lookup.transactionId
					}
				})
			}, g.prototype._formatLookupData = function(e) {
				var t = this;
				return i.prototype._formatLookupData.call(this, e).then((function(n) {
					if (n.additionalInfo = e.additionalInformation, e.accountType && (n.accountType = e.accountType), e.challengeRequested && (n.challengeRequested = e.challengeRequested), e.requestedExemptionType) {
						if (!v.includes(e.requestedExemptionType)) throw new a({
							code: c.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code,
							type: c.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type,
							message: "requestedExemptionType `" + e.requestedExemptionType + "` is not a valid exemption. The accepted values are: `" + v.join("`, `") + "`"
						});
						n.requestedExemptionType = e.requestedExemptionType
					}
					return e.customFields && (n.customFields = e.customFields), e.dataOnlyRequested && (n.dataOnlyRequested = e.dataOnlyRequested), e.exemptionRequested && (n.exemptionRequested = e.exemptionRequested), e.requestVisaDAF && (n.requestVisaDAF = e.requestVisaDAF), e.bin && (n.bin = e.bin), null != e.cardAdd && (n.cardAdd = e.cardAdd), null != e.cardAddChallengeRequested && (n.cardAdd = e.cardAddChallengeRequested), e.merchantName && (n.merchantName = e.merchantName), t.prepareLookup(n)
				}))
			}, g.prototype.cancelVerifyCard = function(e) {
				var t = this;
				return i.prototype.cancelVerifyCard.call(this).then((function(n) {
					return t._verifyCardPromisePlus && (e = e || new a(c.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT), t._verifyCardPromisePlus.reject(e)), n
				}))
			}, g.prototype._removeSongbirdListeners = function() {
				this._cardinalEvents.forEach((function(e) {
					window.Cardinal.off(e)
				})), this._cardinalEvents = []
			}, g.prototype.teardown = function() {
				return window.Cardinal && this._removeSongbirdListeners(), i.prototype.teardown.call(this)
			}, g.prototype._reloadThreeDSecure = function() {
				var e = this,
					t = Date.now();
				return e.teardown().then((function() {
					e._configureCardinalSdk({
						setupOptions: e.originalSetupOptions,
						setupStartTime: t
					})
				}))
			}, t.exports = g
		}, {
			"../../../lib/analytics": 85,
			"../../../lib/assets": 86,
			"../../../lib/assign": 87,
			"../../../lib/braintree-error": 90,
			"../../../lib/constants": 91,
			"../../../lib/convert-to-braintree-error": 93,
			"../../../lib/deferred": 97,
			"../../../lib/enumerate": 99,
			"../../shared/constants": 140,
			"../../shared/errors": 141,
			"./base": 131,
			"@braintree/extended-promise": 37
		}],
		138: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/wrap-promise"),
				r = e("../../lib/methods"),
				o = e("../../lib/convert-methods-to-error"),
				a = e("@braintree/event-emitter"),
				s = e("./frameworks");

			function l(e) {
				var t = this,
					n = s[e.framework];
				a.call(this), this._framework = new n(e), this._framework.setUpEventListeners((function() {
					t._emit.apply(t, arguments)
				}))
			}
			a.createChild(l), l.prototype.verifyCard = function(e) {
				var t;
				return this.hasListener("lookup-complete") && (t = {
					ignoreOnLookupCompleteRequirement: !0
				}), this._framework.verifyCard(e, t)
			}, l.prototype.initializeChallengeWithLookupResponse = function(e) {
				return "string" == typeof e && (e = JSON.parse(e)), this._framework.initializeChallengeWithLookupResponse(e)
			}, l.prototype.prepareLookup = function(e) {
				return this._framework.prepareLookup(e).then((function(e) {
					return JSON.stringify(e)
				}))
			}, l.prototype.cancelVerifyCard = function() {
				return this._framework.cancelVerifyCard()
			}, l.prototype.teardown = function() {
				var e = r(l.prototype).concat(r(a.prototype));
				return o(this, e), this._framework.teardown()
			}, t.exports = i.wrapPrototype(l)
		}, {
			"../../lib/convert-methods-to-error": 92,
			"../../lib/methods": 120,
			"./frameworks": 134,
			"@braintree/event-emitter": 36,
			"@braintree/wrap-promise": 46
		}],
		139: [function(e, t, n) {
			"use strict";
			var i = e("./external/three-d-secure"),
				r = e("../lib/is-https").isHTTPS,
				o = e("../lib/basic-component-verification"),
				a = e("../lib/create-deferred-client"),
				s = e("../lib/create-assets-url"),
				l = e("../lib/braintree-error"),
				d = e("../lib/analytics"),
				c = e("./shared/errors"),
				p = e("@braintree/wrap-promise");
			t.exports = {
				create: p((function(e) {
					var t = "3D Secure",
						n = function(e) {
							var t = String(e.version || "");
							if (!t || "1" === t) throw new l({
								code: c.THREEDS_UNSUPPORTED_VERSION.code,
								type: c.THREEDS_UNSUPPORTED_VERSION.type,
								message: c.THREEDS_UNSUPPORTED_VERSION.message
							});
							switch (t) {
								case "2":
								case "2-cardinal-modal":
									return "cardinal-modal";
								case "2-bootstrap3-modal":
									return "bootstrap3-modal";
								case "2-inline-iframe":
									return "inline-iframe";
								default:
									throw new l({
										code: c.THREEDS_UNRECOGNIZED_VERSION.code,
										type: c.THREEDS_UNRECOGNIZED_VERSION.type,
										message: "Version `" + e.version + "` is not a recognized version. You may need to update the version of your Braintree SDK to support this version."
									})
							}
						}(e);
					return o.verify({
						name: t,
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						var o = s.create(e.authorization),
							p = a.create({
								authorization: e.authorization,
								client: e.client,
								debug: e.debug,
								assetsUrl: o,
								name: t
							}).then((function(t) {
								var i, o = t.getConfiguration(),
									a = o.gatewayConfiguration;
								return e.client = t, a.threeDSecureEnabled || (i = c.THREEDS_NOT_ENABLED), "TOKENIZATION_KEY" === o.authorizationType && (i = c.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), "production" === a.environment && !r() && (i = c.THREEDS_HTTPS_REQUIRED), "legacy" === n || a.threeDSecure && a.threeDSecure.cardinalAuthenticationJWT || (d.sendEvent(e.client, "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT"), i = c.THREEDS_NOT_ENABLED_FOR_V2), i ? Promise.reject(new l(i)) : (d.sendEvent(e.client, "three-d-secure.initialized"), t)
							})),
							u = new i({
								client: e.client,
								assetsUrl: o,
								createPromise: p,
								loggingEnabled: e.loggingEnabled,
								cardinalSDKConfig: e.cardinalSDKConfig,
								framework: n
							});
						return e.client ? p.then((function() {
							return u
						})) : u
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/analytics": 85,
			"../lib/basic-component-verification": 88,
			"../lib/braintree-error": 90,
			"../lib/create-assets-url": 94,
			"../lib/create-deferred-client": 96,
			"../lib/is-https": 117,
			"./external/three-d-secure": 138,
			"./shared/errors": 141,
			"@braintree/wrap-promise": 46
		}],
		140: [function(e, t, n) {
			"use strict";
			t.exports = {
				LANDING_FRAME_NAME: "braintreethreedsecurelanding",
				CARDINAL_SCRIPT_SOURCE: {
					production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
					sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js"
				}
			}
		}, {}],
		141: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/braintree-error");
			t.exports = {
				THREEDS_NOT_ENABLED: {
					type: i.types.MERCHANT,
					code: "THREEDS_NOT_ENABLED",
					message: "3D Secure is not enabled for this merchant."
				},
				THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
					type: i.types.MERCHANT,
					code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
					message: "3D Secure can not use a tokenization key for authorization."
				},
				THREEDS_HTTPS_REQUIRED: {
					type: i.types.MERCHANT,
					code: "THREEDS_HTTPS_REQUIRED",
					message: "3D Secure requires HTTPS."
				},
				THREEDS_NOT_ENABLED_FOR_V2: {
					type: i.types.MERCHANT,
					code: "THREEDS_NOT_ENABLED_FOR_V2",
					message: "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/"
				},
				THREEDS_UNRECOGNIZED_VERSION: {
					type: i.types.MERCHANT,
					code: "THREEDS_UNRECOGNIZED_VERSION"
				},
				THREEDS_CARDINAL_SDK_SETUP_FAILED: {
					type: i.types.UNKNOWN,
					code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
					message: "Something went wrong setting up Cardinal's Songbird.js library."
				},
				THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
					type: i.types.NETWORK,
					code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
					message: "Cardinal's Songbird.js library could not be loaded."
				},
				THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
					type: i.types.UNKNOWN,
					code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
					message: "Cardinal's Songbird.js took too long to setup."
				},
				THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
					type: i.types.UNKNOWN,
					code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
					message: "Cardinal's API took too long to respond."
				},
				THREEDS_CARDINAL_SDK_BAD_CONFIG: {
					type: i.types.MERCHANT,
					code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
					message: "JWT or other required field missing. Please check your setup configuration."
				},
				THREEDS_CARDINAL_SDK_BAD_JWT: {
					type: i.types.MERCHANT,
					code: "THREEDS_CARDINAL_SDK_BAD_JWT",
					message: "Cardinal JWT missing or malformed. Please check your setup configuration."
				},
				THREEDS_CARDINAL_SDK_ERROR: {
					type: i.types.UNKNOWN,
					code: "THREEDS_CARDINAL_SDK_ERROR",
					message: "A general error has occurred with Cardinal. See description for more information."
				},
				THREEDS_CARDINAL_SDK_CANCELED: {
					type: i.types.CUSTOMER,
					code: "THREEDS_CARDINAL_SDK_CANCELED",
					message: "Canceled by user."
				},
				THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
					type: i.types.MERCHANT,
					code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
					message: "3D Secure verfication canceled by merchant."
				},
				THREEDS_AUTHENTICATION_IN_PROGRESS: {
					type: i.types.MERCHANT,
					code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
					message: "Cannot call verifyCard while existing authentication is in progress."
				},
				THREEDS_MISSING_VERIFY_CARD_OPTION: {
					type: i.types.MERCHANT,
					code: "THREEDS_MISSING_VERIFY_CARD_OPTION"
				},
				THREEDS_JWT_AUTHENTICATION_FAILED: {
					type: i.types.UNKNOWN,
					code: "THREEDS_JWT_AUTHENTICATION_FAILED",
					message: "Something went wrong authenticating the JWT from Cardinal"
				},
				THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
					type: i.types.MERCHANT,
					code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
					message: "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed"
				},
				THREEDS_LOOKUP_VALIDATION_ERROR: {
					type: i.types.CUSTOMER,
					code: "THREEDS_LOOKUP_VALIDATION_ERROR",
					message: "The data passed in `verifyCard` did not pass validation checks. See details for more info"
				},
				THREEDS_LOOKUP_ERROR: {
					type: i.types.UNKNOWN,
					code: "THREEDS_LOOKUP_ERROR",
					message: "Something went wrong during the 3D Secure lookup"
				},
				THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
					type: i.types.UNKNOWN,
					code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
					message: "Something went wrong when attempting to add the authentication iframe to the page."
				},
				THREEDS_NO_VERIFICATION_PAYLOAD: {
					type: i.types.MERCHANT,
					code: "THREEDS_NO_VERIFICATION_PAYLOAD",
					message: "No verification payload available."
				},
				THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
					type: i.types.INTERNAL,
					code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
					message: "Term Url must be on a Braintree domain."
				},
				THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
					type: i.types.INTERNAL,
					code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
					message: "Method not implemented for this framework."
				},
				THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
					type: i.types.MERCHANT,
					code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID",
					message: "Requested Exemption Type is invalid."
				},
				THREEDS_UNSUPPORTED_VERSION: {
					type: i.types.MERCHANT,
					code: "THREEDS_UNSUPPORTED_VERSION",
					message: "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create"
				}
			}
		}, {
			"../../lib/braintree-error": 90
		}],
		142: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/enumerate");
			t.exports = i(["AUTHENTICATION_COMPLETE"], "threedsecure:")
		}, {
			"../../lib/enumerate": 99
		}],
		143: [function(e, t, n) {
			"use strict";
			var i = e("../lib/braintree-error");
			t.exports = {
				VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
					type: i.types.MERCHANT,
					code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
					message: "A client token with a customer id must be used to delete a payment method nonce."
				},
				VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
					type: i.types.MERCHANT,
					code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND"
				},
				VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
					type: i.types.UNKNOWN,
					code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR"
				}
			}
		}, {
			"../lib/braintree-error": 90
		}],
		144: [function(e, t, n) {
			"use strict";
			var i = e("../lib/basic-component-verification"),
				r = e("../lib/create-deferred-client"),
				o = e("../lib/create-assets-url"),
				a = e("./vault-manager"),
				s = e("@braintree/wrap-promise");
			t.exports = {
				create: s((function(e) {
					var t = "Vault Manager";
					return i.verify({
						name: t,
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						return new a({
							createPromise: r.create({
								authorization: e.authorization,
								client: e.client,
								debug: e.debug,
								assetsUrl: o.create(e.authorization),
								name: t
							})
						})
					}))
				})),
				VERSION: "3.103.0"
			}
		}, {
			"../lib/basic-component-verification": 88,
			"../lib/create-assets-url": 94,
			"../lib/create-deferred-client": 96,
			"./vault-manager": 145,
			"@braintree/wrap-promise": 46
		}],
		145: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../lib/braintree-error"),
				o = e("./errors"),
				a = e("../lib/convert-methods-to-error"),
				s = e("../lib/methods"),
				l = e("@braintree/wrap-promise");

			function d(e) {
				this._createPromise = e.createPromise
			}

			function c(e) {
				var t = {
					nonce: e.nonce,
					default: e.default,
					details: e.details,
					hasSubscription: e.hasSubscription,
					type: e.type
				};
				return e.description && (t.description = e.description), e.binData && (t.binData = e.binData), t
			}
			d.prototype.fetchPaymentMethods = function(e) {
				var t;
				return t = !0 === (e = e || {}).defaultFirst ? 1 : 0, this._createPromise.then((function(e) {
					return e.request({
						endpoint: "payment_methods",
						method: "get",
						data: {
							defaultFirst: t
						}
					})
				})).then(function(e) {
					return i.sendEvent(this._createPromise, "vault-manager.fetch-payment-methods.succeeded"), e.paymentMethods.map(c)
				}.bind(this))
			}, d.prototype.deletePaymentMethod = function(e) {
				return this._createPromise.then((function(t) {
					return "CLIENT_TOKEN" === t.getConfiguration().authorizationType ? t.request({
						api: "graphQLApi",
						data: {
							query: "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}",
							variables: {
								input: {
									singleUseTokenId: e
								}
							},
							operationName: "DeletePaymentMethodFromSingleUseToken"
						}
					}).then((function() {
						i.sendEvent(t, "vault-manager.delete-payment-method.succeeded")
					})).catch((function(n) {
						var a, s = n.details.originalError;
						return i.sendEvent(t, "vault-manager.delete-payment-method.failed"), s[0] && "NOT_FOUND" === s[0].extensions.errorClass && (a = new r({
							type: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,
							code: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,
							message: "A payment method for payment method nonce `" + e + "` could not be found.",
							details: {
								originalError: s
							}
						})), a || (a = new r({
							type: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type,
							code: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code,
							message: "An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `" + e + "`.",
							details: {
								originalError: s
							}
						})), Promise.reject(a)
					})) : Promise.reject(new r(o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN))
				}))
			}, d.prototype.teardown = function() {
				return a(this, s(d.prototype)), Promise.resolve()
			}, t.exports = l.wrapPrototype(d)
		}, {
			"../lib/analytics": 85,
			"../lib/braintree-error": 90,
			"../lib/convert-methods-to-error": 92,
			"../lib/methods": 120,
			"./errors": 143,
			"@braintree/wrap-promise": 46
		}],
		146: [function(e, t, n) {
			"use strict";
			var i = (this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			})(e("./venmo-desktop"));
			t.exports = function(e) {
				return new i.default(e).initialize()
			}
		}, {
			"./venmo-desktop": 148
		}],
		147: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.UPDATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = n.CREATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = void 0, n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}", n.CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}", n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}", n.UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}", n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}", n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}"
		}, {}],
		148: [function(e, t, n) {
			"use strict";
			var i = this && this.__assign || function() {
					return i = Object.assign || function(e) {
						for (var t, n = 1, i = arguments.length; n < i; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}, i.apply(this, arguments)
				},
				r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var o = r(e("framebus")),
				a = r(e("@braintree/iframer")),
				s = r(e("@braintree/uuid")),
				l = e("../shared/events"),
				d = e("./queries"),
				c = function() {
					function e(e) {
						this.isHidden = !0, this.env = e.environment, this.id = s.default(), this.profileId = e.profileId, this.displayName = e.displayName, this.paymentMethodUsage = e.paymentMethodUsage, this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage;
						var t = e.url + "#" + this.env + "_" + this.id;
						this.bus = new o.default({
							channel: this.id,
							verifyDomain: e.verifyDomain,
							targetFrames: []
						}), this.apiRequest = e.apiRequest, this.sendEvent = e.sendEvent, this.Promise = e.Promise, this.alertBox = document.createElement("div"), this.alertBox.setAttribute("data-venmo-desktop-id", this.id), this.alertBox.setAttribute("role", "alert"), this.alertBox.style.position = "fixed", this.alertBox.style.display = "none", this.alertBox.style.height = "1px", this.alertBox.style.width = "1px", this.alertBox.style.overflow = "hidden", this.alertBox.style.zIndex = "0", this.iframe = a.default({
							src: t,
							name: "venmo-desktop-iframe",
							style: {
								display: "none",
								position: "fixed",
								top: "0",
								bottom: "0",
								right: "0",
								left: "0",
								height: "100%",
								width: "100%",
								zIndex: "9999999"
							},
							title: "Venmo Desktop"
						}), this.bus.addTargetFrame(this.iframe)
					}
					return e.prototype.initialize = function() {
						var e = this;
						return new this.Promise((function(t) {
							e.bus.on(l.VENMO_DESKTOP_IFRAME_READY, (function() {
								t(e)
							})), e.bus.on(l.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, (function() {
								e.sendEvent("venmo.tokenize.desktop.restarted-from-error-view"), e.startPolling()
							})), document.body.appendChild(e.iframe), document.body.appendChild(e.alertBox)
						}))
					}, e.prototype.launchDesktopFlow = function() {
						var e = this;
						this.isHidden = !1;
						var t = new this.Promise((function(t, n) {
							e.launchDesktopPromiseRejectFunction = n;
							var i = function() {
									e.bus.off(l.VENMO_DESKTOP_CUSTOMER_CANCELED, o), e.bus.off(l.VENMO_DESKTOP_UNKNOWN_ERROR, r)
								},
								r = function(t) {
									i(), e.sendEvent("venmo.tokenize.desktop.unknown-error"), n({
										allowUIToHandleError: !1,
										reason: "UNKNOWN_ERROR",
										err: t
									})
								},
								o = function() {
									i(), e.updateVenmoDesktopPaymentContext("CANCELED"), e.sendEvent("venmo.tokenize.desktop.status-change.canceled-from-modal"), n({
										allowUIToHandleError: !1,
										reason: "CUSTOMER_CANCELED"
									})
								};
							e.completedHandler = function(e) {
								i(), t(e)
							}, e.bus.on(l.VENMO_DESKTOP_CUSTOMER_CANCELED, o), e.bus.on(l.VENMO_DESKTOP_UNKNOWN_ERROR, r)
						}));
						return this.iframe.style.display = "block", this.setAlert("Generating a QR code, get your Venmo app ready"), this.iframe.focus(), this.startPolling(), t.then((function(t) {
							return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, t
						})).catch((function(t) {
							return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, e.Promise.reject(t)
						}))
					}, e.prototype.triggerCompleted = function(e) {
						var t = this;
						this.isHidden || setTimeout((function() {
							t.completedHandler && t.completedHandler(e), delete t.completedHandler
						}), 2e3)
					}, e.prototype.triggerRejected = function(e) {
						this.launchDesktopPromiseRejectFunction && this.launchDesktopPromiseRejectFunction(e)
					}, e.prototype.hideDesktopFlow = function() {
						this.setAlert(""), this.iframe.style.display = "none", this.bus.emit(l.VENMO_DESKTOP_CLOSED_FROM_PARENT), this.isHidden = !0
					}, e.prototype.displayError = function(e) {
						this.isHidden || (this.bus.emit(l.VENMO_DESKTOP_DISPLAY_ERROR, {
							message: e
						}), this.setAlert(e))
					}, e.prototype.displayQRCode = function(e, t) {
						this.isHidden || (this.bus.emit(l.VENMO_DESKTOP_DISPLAY_QR_CODE, {
							id: e,
							merchantId: t
						}), this.setAlert("To scan the QR code, open your Venmo app"))
					}, e.prototype.authorize = function() {
						this.isHidden || (this.bus.emit(l.VENMO_DESKTOP_AUTHORIZE), this.setAlert("Venmo account authorized"))
					}, e.prototype.authorizing = function() {
						this.isHidden || (this.bus.emit(l.VENMO_DESKTOP_AUTHORIZING), this.setAlert("Authorize on your Venmo app"))
					}, e.prototype.startPolling = function() {
						var e = this;
						return this.createVenmoDesktopPaymentContext().then((function(t) {
							var n = new Date(t.expiresAt).getTime() - new Date(t.createdAt).getTime(),
								i = Date.now() + n;
							return e.displayQRCode(t.id, t.merchantId), e.pollForStatusChange(t.status, i)
						})).then((function(t) {
							if (t) {
								var n = t.userName || "";
								n = "@" + n.replace("@", ""), e.triggerCompleted({
									paymentMethodNonce: t.paymentMethodId,
									username: n,
									payerInfo: t.payerInfo,
									id: e.venmoContextId || ""
								})
							}
						})).catch((function(t) {
							t.allowUIToHandleError || (e.sendEvent("venmo.tokenize.desktop.unhandled-error"), e.triggerRejected(t))
						}))
					}, e.prototype.pollForStatusChange = function(e, t) {
						var n = this;
						return this.venmoContextId ? Date.now() > t ? this.updateVenmoDesktopPaymentContext("EXPIRED").then((function() {
							return n.displayError("Something went wrong"), n.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout"), n.Promise.reject({
								allowUIToHandleError: !0,
								reason: "TIMEOUT"
							})
						})) : this.lookupVenmoDesktopPaymentContext().then((function(i) {
							if (!n.venmoContextId || !i) return n.Promise.resolve();
							var r = i.status;
							if (r !== e) switch (e = r, n.sendEvent("venmo.tokenize.desktop.status-change." + e.toLowerCase()), e) {
								case "CREATED":
									break;
								case "EXPIRED":
								case "FAILED":
								case "CANCELED":
									var o = "CANCELED" === e ? "The authorization was canceled" : "Something went wrong";
									return n.displayError(o), n.Promise.reject({
										allowUIToHandleError: !0,
										reason: e
									});
								case "SCANNED":
									n.authorizing();
									break;
								case "APPROVED":
									return n.authorize(), n.Promise.resolve(i)
							}
							return new n.Promise((function(i, r) {
								setTimeout((function() {
									n.pollForStatusChange(e, t).then(i).catch(r)
								}), 1e3)
							}))
						})) : this.Promise.resolve()
					}, e.prototype.teardown = function() {
						this.bus.teardown(), this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.alertBox.parentNode && this.alertBox.parentNode.removeChild(this.alertBox)
					}, e.prototype.setAlert = function(e) {
						this.alertBox.style.display = e ? "block" : "none", this.alertBox.textContent = e
					}, e.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation = function(e) {
						return this.apiRequest(d.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, {
							input: {
								environment: this.env,
								intent: e
							}
						}).then((function(e) {
							return e.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext
						}))
					}, e.prototype.createPaymentContextFromGraphQL = function(e) {
						var t = {
							intent: e,
							paymentMethodUsage: this.paymentMethodUsage,
							customerClient: "DESKTOP"
						};
						return this.profileId && (t.merchantProfileId = this.profileId), this.displayName && (t.displayName = this.displayName), this.apiRequest(d.CREATE_PAYMENT_CONTEXT_QUERY, {
							input: t
						}).then((function(e) {
							return e.createVenmoPaymentContext.venmoPaymentContext
						}))
					}, e.prototype.createVenmoDesktopPaymentContext = function() {
						var e = this;
						return (this.shouldUseLegacyQRCodeMutation ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP") : this.createPaymentContextFromGraphQL("PAY_FROM_APP")).then((function(t) {
							e.venmoContextId = t.id;
							var n = e.profileId || t.merchantId;
							return {
								id: t.id,
								status: t.status,
								merchantId: n,
								createdAt: t.createdAt,
								expiresAt: t.expiresAt
							}
						}))
					}, e.prototype.updateVenmoDesktopPaymentContext = function(e, t) {
						if (void 0 === t && (t = {}), !this.venmoContextId) return this.Promise.resolve();
						var n = {
								input: i({
									id: this.venmoContextId,
									status: e
								}, t)
							},
							r = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : d.UPDATE_PAYMENT_CONTEXT_QUERY;
						return this.apiRequest(r, n).then((function() {}))
					}, e.prototype.lookupVenmoDesktopPaymentContext = function() {
						if (!this.venmoContextId) return this.Promise.resolve();
						var e = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : d.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
						return this.apiRequest(e, {
							id: this.venmoContextId
						}).then((function(e) {
							return e.node
						}))
					}, e
				}();
			n.default = c
		}, {
			"../shared/events": 153,
			"./queries": 147,
			"@braintree/iframer": 38,
			"@braintree/uuid": 42,
			framebus: 166
		}],
		149: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../lib/basic-component-verification"),
				o = e("../lib/create-deferred-client"),
				a = e("../lib/create-assets-url"),
				s = e("./shared/errors"),
				l = e("@braintree/wrap-promise"),
				d = e("../lib/braintree-error"),
				c = e("./venmo"),
				p = e("./shared/supports-venmo");
			t.exports = {
				create: l((function(e) {
					var t = "Venmo";
					return r.verify({
						name: t,
						client: e.client,
						authorization: e.authorization
					}).then((function() {
						var n, r;
						return e.profileId && "string" != typeof e.profileId ? Promise.reject(new d(s.VENMO_INVALID_PROFILE_ID)) : e.deepLinkReturnUrl && "string" != typeof e.deepLinkReturnUrl ? Promise.reject(new d(s.VENMO_INVALID_DEEP_LINK_RETURN_URL)) : (n = o.create({
							authorization: e.authorization,
							client: e.client,
							debug: e.debug,
							assetsUrl: a.create(e.authorization),
							name: t
						}).then((function(t) {
							var n = t.getConfiguration();
							return e.client = t, n.gatewayConfiguration.payWithVenmo ? t : Promise.reject(new d(s.VENMO_NOT_ENABLED))
						})), e.createPromise = n, r = new c(e), i.sendEvent(n, "venmo.initialized"), n.then((function() {
							return r
						})))
					}))
				})),
				isBrowserSupported: function(e) {
					return p.isBrowserSupported(e)
				},
				VERSION: "3.103.0"
			}
		}, {
			"../lib/analytics": 85,
			"../lib/basic-component-verification": 88,
			"../lib/braintree-error": 90,
			"../lib/create-assets-url": 94,
			"../lib/create-deferred-client": 96,
			"./shared/errors": 152,
			"./shared/supports-venmo": 155,
			"./venmo": 157,
			"@braintree/wrap-promise": 46
		}],
		150: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/browser-detection/is-android"),
				r = e("@braintree/browser-detection/is-chrome"),
				o = e("@braintree/browser-detection/is-ios"),
				a = e("@braintree/browser-detection/is-ios-safari"),
				s = e("@braintree/browser-detection/is-ios-webview"),
				l = e("@braintree/browser-detection/is-samsung");
			t.exports = {
				isAndroid: i,
				isAndroidWebview: function() {
					return i() && window.navigator.userAgent.toLowerCase().indexOf("wv") > -1
				},
				isChrome: r,
				isIos: o,
				isIosChrome: function() {
					return o() && r()
				},
				isSamsung: l,
				isIosSafari: a,
				isIosWebview: s,
				isFacebookOwnedBrowserOnAndroid: function() {
					var e = window.navigator.userAgent.toLowerCase();
					return e.indexOf("huawei") > -1 && e.indexOf("fban") > -1 || !!i() && (e.indexOf("fb_iab") > -1 || e.indexOf("instagram") > -1)
				},
				doesNotSupportWindowOpenInIos: function() {
					return !!o() && (s() || !a())
				}
			}
		}, {
			"@braintree/browser-detection/is-android": 24,
			"@braintree/browser-detection/is-chrome": 26,
			"@braintree/browser-detection/is-ios": 33,
			"@braintree/browser-detection/is-ios-safari": 30,
			"@braintree/browser-detection/is-ios-webview": 31,
			"@braintree/browser-detection/is-samsung": 34
		}],
		151: [function(e, t, n) {
			"use strict";
			t.exports = {
				DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
				DEFAULT_PROCESS_RESULTS_DELAY: 1e3,
				VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout",
				VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout",
				VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web"
			}
		}, {}],
		152: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/braintree-error");
			t.exports = {
				VENMO_NOT_ENABLED: {
					type: i.types.MERCHANT,
					code: "VENMO_NOT_ENABLED",
					message: "Venmo is not enabled for this merchant."
				},
				VENMO_TOKENIZATION_REQUEST_ACTIVE: {
					type: i.types.MERCHANT,
					code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
					message: "Another tokenization request is active."
				},
				VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
					type: i.types.MERCHANT,
					code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
					message: "No tokenization in progress."
				},
				VENMO_APP_FAILED: {
					type: i.types.UNKNOWN,
					code: "VENMO_APP_FAILED",
					message: "Venmo app encountered a problem."
				},
				VENMO_APP_CANCELED: {
					type: i.types.CUSTOMER,
					code: "VENMO_APP_CANCELED",
					message: "Venmo app authorization was canceled."
				},
				VENMO_CANCELED: {
					type: i.types.CUSTOMER,
					code: "VENMO_CANCELED",
					message: "User canceled Venmo authorization, or Venmo app is not available."
				},
				VENMO_CUSTOMER_CANCELED: {
					type: i.types.CUSTOMER,
					code: "VENMO_CUSTOMER_CANCELED",
					message: "User canceled Venmo authorization."
				},
				VENMO_NETWORK_ERROR: {
					type: i.types.NETWORK,
					code: "VENMO_NETWORK_ERROR",
					message: "Something went wrong making the request"
				},
				VENMO_DESKTOP_CANCELED: {
					type: i.types.CUSTOMER,
					code: "VENMO_DESKTOP_CANCELED",
					message: "User canceled Venmo authorization by closing the Venmo Desktop modal."
				},
				VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
					type: i.types.MERCHANT,
					code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
					message: "The Venmo tokenization was canceled by the merchant."
				},
				VENMO_DESKTOP_UNKNOWN_ERROR: {
					type: i.types.UNKNOWN,
					code: "VENMO_DESKTOP_UNKNOWN_ERROR",
					message: "Something went wrong with the Venmo Desktop flow."
				},
				VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
					type: i.types.NETWORK,
					code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
					message: "Something went wrong creating the Venmo Payment Context."
				},
				VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
					type: i.types.UNKNOWN,
					code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
					message: "Something went wrong during mobile polling."
				},
				VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
					type: i.types.CUSTOMER,
					code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
					message: "The Venmo authorization request is expired."
				},
				VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
					type: i.types.CUSTOMER,
					code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
					message: "The Venmo authorization was canceled"
				},
				VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
					type: i.types.CUSTOMER,
					code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
					message: "Customer took too long to authorize Venmo payment."
				},
				VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
					type: i.types.UNKNOWN,
					code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
					message: "The Venmo authorization failed."
				},
				VENMO_INVALID_PROFILE_ID: {
					type: i.types.MERCHANT,
					code: "VENMO_INVALID_PROFILE_ID",
					message: "Venmo profile ID is invalid."
				},
				VENMO_INVALID_DEEP_LINK_RETURN_URL: {
					type: i.types.MERCHANT,
					code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
					message: "Venmo deep link return URL is invalid."
				},
				VENMO_TOKENIZATION_FAILED: {
					type: i.types.UNKNOWN,
					code: "VENMO_TOKENIZATION_FAILED",
					message: "Venmo encountered a problem"
				},
				VENMO_ECD_DISABLED: {
					type: i.types.MERCHANT,
					code: "ECD_DISABLED",
					message: "Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data."
				}
			}
		}, {
			"../../lib/braintree-error": 90
		}],
		153: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.VENMO_DESKTOP_UNKNOWN_ERROR = n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = n.VENMO_DESKTOP_CLOSED_FROM_PARENT = n.VENMO_DESKTOP_IFRAME_READY = n.VENMO_DESKTOP_DISPLAY_QR_CODE = n.VENMO_DESKTOP_DISPLAY_ERROR = n.VENMO_DESKTOP_CUSTOMER_CANCELED = n.VENMO_DESKTOP_AUTHORIZING = n.VENMO_DESKTOP_AUTHORIZE = n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = void 0, n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT", n.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE", n.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING", n.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED", n.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR", n.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE", n.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY", n.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT", n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE", n.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR"
		}, {}],
		154: [function(e, t, n) {
			"use strict";
			var i = e("./constants");
			t.exports = function(e) {
				return e.useAllowDesktopWebLogin ? i.VENMO_WEB_LOGIN_URL : e.mobileWebFallBack ? i.VENMO_APP_OR_MOBILE_AUTH_URL : i.VENMO_MOBILE_APP_AUTH_ONLY_URL
			}
		}, {
			"./constants": 151
		}],
		155: [function(e, t, n) {
			"use strict";
			var i = e("./browser-detection"),
				r = e("../../lib/in-iframe");
			t.exports = {
				isBrowserSupported: function(e) {
					var t, n, o, a = i.isAndroid(),
						s = a || i.isIos(),
						l = a && i.isChrome(),
						d = i.isIosSafari() || l;
					return t = !0 === ((e = e || {}).allowDesktopWebLogin || e.allowDesktop), n = !e.hasOwnProperty("allowNewBrowserTab") || e.allowNewBrowserTab, o = !e.hasOwnProperty("allowWebviews") || e.allowWebviews, !(!(n && !r()) && i.isIosChrome() || i.isFacebookOwnedBrowserOnAndroid() || i.isSamsung()) && (!(!o && (i.isAndroidWebview() || i.isIosWebview())) && (s ? n ? s : d : t))
				}
			}
		}, {
			"../../lib/in-iframe": 115,
			"./browser-detection": 150
		}],
		156: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/frame-service/external"),
				r = e("../../lib/use-min"),
				o = e("@braintree/extended-promise"),
				a = e("../shared/errors"),
				s = e("../../lib/braintree-error"),
				l = '<svg width="198" height="58" viewBox="0 0 198 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z" fill="white"/>\n</svg>',
				d = "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.",
				c = 400,
				p = 570,
				u = {
					backdrop: "venmo-desktop-web-backdrop",
					backdropHidden: "venmo-desktop-web-backdrop.hidden",
					backdropContainer: "venmo-backdrop-container",
					cancelButton: "venmo-popup-cancel-button",
					continueButton: "venmo-popup-continue-button",
					message: "venmo-message",
					instructions: "venmo-instructions",
					venmoLogo: "venmo-full-logo"
				};

			function h(e) {
				var t = e.frameServiceInstance,
					n = e.venmoUrl,
					i = e.checkForStatusChange,
					r = e.cancelTokenization,
					l = e.checkPaymentContextStatus,
					d = new o;
				return document.getElementById(u.continueButton).addEventListener("click", (function() {
					t.focus()
				})), document.getElementById(u.cancelButton).addEventListener("click", (function() {
					t.close(), r(), m()
				})), t.open({}, (function(e) {
					e ? d.reject(e) : i(1).then((function(e) {
						d.resolve(e)
					})).catch((function(e) {
						l().then((function(t) {
							"CREATED" === t.status ? d.reject(new s(a.VENMO_CUSTOMER_CANCELED)) : d.reject(e)
						}))
					})), t.close(), m()
				})), t.redirect(n), d
			}

			function m() {
				document.getElementById("venmo-desktop-web-backdrop").classList.add("hidden")
			}

			function y() {
				var e, t, n, i, r, o, a, s, c, p, h, m, y, f, E = document.getElementById(u.backdrop);
				E ? E.classList.remove("hidden") : (e = document.createElement("style"), t = document.createElement("div"), n = document.createElement("div"), i = document.createElement("div"), r = document.createElement("div"), o = document.createElement("div"), a = document.createElement("button"), s = document.createElement("button"), e.id = "venmo-desktop-web__injected-styles", e.innerHTML = (c = ["#" + u.backdropHidden + " {", "display: none;", "}", "#" + u.backdrop + " {", "z-index: 3141592632;", "cursor: pointer;", "position: fixed;", "top: 0;", "left: 0;", "bottom: 0;", "width: 100%;", "background: rgba(0, 0, 0, 0.8);", "}"], p = ["#" + u.backdropContainer + " {", "display: flex;", "align-content: center;", "justify-content: center;", "align-items: center;", "width: 100%;", "height: 100%;", "flex-direction: column;", "}"], h = ["#" + u.cancelButton + " {", "height: 24px;", "width: 380px;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "line-height: 24px;", "text-align: center;", "background-color: transparent;", "border: none;", "color: #FFFFFF;", "margin-top: 28px;", "}"], m = ["#" + u.continueButton + " {", "width: 400px;", "height: 50px;", "background: #0074DE;", "border-radius: 24px;", "border: none;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "color: #FFFFFF;", "margin-top: 44px;", "}"], y = ["#" + u.message + " {", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 500;", "font-size: 24px;", "line-height: 32px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 32px;", "}"], f = ["#" + u.instructions + " {", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 400;", "font-size: 16px;", "line-height: 20px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 16px;", "width: 400px;", "}"], c.concat(p, h, m, y, f).join("\n")), t.id = u.backdrop, n.id = u.backdropContainer, i.id = u.venmoLogo, i.innerHTML = l, r.id = u.message, r.innerText = "What would you like to do?", o.id = u.instructions, o.innerText = d, a.id = u.continueButton, a.innerText = "Continue payment", s.id = u.cancelButton, s.innerText = "Cancel payment", document.head.appendChild(e), n.appendChild(i), n.appendChild(r), n.appendChild(o), n.appendChild(a), n.appendChild(s), t.appendChild(n), document.body.appendChild(t), t.addEventListener("click", (function(e) {
					e.stopPropagation()
				})))
			}
			o.suppressUnhandledPromiseMessage = !0, t.exports = {
				runWebLogin: function(e) {
					return y(), h(e)
				},
				openPopup: h,
				setupDesktopWebLogin: function(e) {
					var t = new o,
						n = e.assetsUrl,
						a = e.debug || !1,
						s = {
							top: Math.round((window.outerHeight - p) / 2) + window.screenTop,
							left: Math.round((window.outerWidth - c) / 2) + window.screenLeft
						},
						l = n + "/web/3.103.0/html";
					return i.create({
						name: "venmoDesktopWebLogin",
						dispatchFrameUrl: l + "/dispatch-frame" + r(a) + ".html",
						openFrameUrl: l + "/venmo-landing-frame" + r(a) + ".html",
						top: s.top,
						left: s.left,
						height: p,
						width: c
					}, (function(e) {
						t.resolve(e)
					})), t
				},
				POPUP_WIDTH: c,
				POPUP_HEIGHT: p
			}
		}, {
			"../../lib/braintree-error": 90,
			"../../lib/frame-service/external": 104,
			"../../lib/use-min": 125,
			"../shared/errors": 152,
			"@braintree/extended-promise": 37
		}],
		157: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("./shared/supports-venmo"),
				o = e("./shared/browser-detection"),
				a = e("./shared/constants"),
				s = e("./shared/errors"),
				l = e("../lib/querystring"),
				d = e("../lib/is-verified-domain"),
				c = e("../lib/methods"),
				p = e("../lib/convert-methods-to-error"),
				u = e("@braintree/wrap-promise"),
				h = e("../lib/braintree-error"),
				m = e("../lib/in-iframe"),
				y = e("@braintree/extended-promise"),
				f = e("./shared/get-venmo-url"),
				E = e("./shared/web-login-backdrop"),
				v = e("../lib/snake-case-to-camel-case"),
				g = e("./external/"),
				_ = e("./external/queries"),
				b = "3.103.0";

			function P(e) {
				var t = this;
				this._allowDesktopWebLogin = e.allowDesktopWebLogin || !1, this._mobileWebFallBack = e.mobileWebFallBack || !1, this._createPromise = e.createPromise, this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab, this._allowWebviews = !1 !== e.allowWebviews, this._allowDesktop = !0 === e.allowDesktop, this._useRedirectForIOS = !0 === e.useRedirectForIOS, this._profileId = e.profileId, this._displayName = e.displayName, this._deepLinkReturnUrl = e.deepLinkReturnUrl, this._ignoreHistoryChanges = e.ignoreHistoryChanges, this._paymentMethodUsage = (e.paymentMethodUsage || "").toUpperCase(), this._shouldUseLegacyFlow = !this._paymentMethodUsage, this._requireManualReturn = !0 === e.requireManualReturn, this._useDesktopQRFlow = this._allowDesktop && this._isDesktop() && !this._allowDesktopWebLogin, this._useAllowDesktopWebLogin = this._allowDesktopWebLogin && this._isDesktop(), this._cannotHaveReturnUrls = m() || this._requireManualReturn, this._allowAndroidRecreation = !1 !== e.allowAndroidRecreation, this._maxRetryCount = 3, this._collectCustomerBillingAddress = e.collectCustomerBillingAddress || !1, this._collectCustomerShippingAddress = e.collectCustomerShippingAddress || !1, this._isFinalAmount = e.isFinalAmount || !1, this._lineItems = e.lineItems, this._subTotalAmount = e.subTotalAmount, this._discountAmount = e.discountAmount, this._taxAmount = e.taxAmount, this._shippingAmount = e.shippingAmount, this._totalAmount = e.totalAmount, this._shouldCreateVenmoPaymentContext = this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow, i.sendEvent(this._createPromise, "venmo.desktop-flow.configured." + String(Boolean(this._allowDesktop))), this.hasTokenizationResult() ? i.sendEvent(this._createPromise, "venmo.appswitch.return-in-new-tab") : this._useDesktopQRFlow ? this._createPromise = this._createPromise.then((function(e) {
					var n = e.getConfiguration().gatewayConfiguration;
					return g({
						url: n.assetsUrl + "/web/" + b + "/html/venmo-desktop-frame.html",
						environment: "production" === n.environment ? "PRODUCTION" : "SANDBOX",
						profileId: t._profileId || n.payWithVenmo.merchantId,
						paymentMethodUsage: t._paymentMethodUsage,
						displayName: t._displayName,
						Promise,
						apiRequest: function(t, n) {
							return e.request({
								api: "graphQLApi",
								data: {
									query: t,
									variables: n
								}
							}).then((function(e) {
								return e.data
							}))
						},
						sendEvent: function(e) {
							i.sendEvent(t._createPromise, e)
						},
						verifyDomain: d
					}).then((function(n) {
						return t._venmoDesktopInstance = n, i.sendEvent(t._createPromise, "venmo.desktop-flow.presented"), e
					})).catch((function() {
						return i.sendEvent(t._createPromise, "venmo.desktop-flow.setup-failed"), t._useDesktopQRFlow = !1, e
					}))
				})) : this._shouldCreateVenmoPaymentContext && (this._mobilePollingInterval = 250, this._mobilePollingExpiresThreshold = 3e5, this._createPromise = this._createPromise.then((function(e) {
					var n, r, o = t._cannotHaveReturnUrls ? "manual-return" : "mobile-payment-context",
						a = e.getConfiguration();
					return r = E.setupDesktopWebLogin({
						assetsUrl: a.gatewayConfiguration.assetsUrl,
						debug: a.isDebug
					}).then((function(e) {
						t._frameServiceInstance = e
					})).catch((function(e) {
						return e
					})), t._mobilePollingContextEnvironment = a.gatewayConfiguration.environment.toUpperCase(), n = t._createVenmoPaymentContext(e).then((function() {
						return i.sendEvent(t._createPromise, "venmo." + o + ".presented"), e
					})).catch((function(e) {
						return i.sendEvent(t._createPromise, "venmo." + o + ".setup-failed"), Promise.reject(new h({
							type: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type,
							code: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code,
							message: C(e) ? e.details.originalError[0].message : s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message,
							details: {
								originalError: e
							}
						}))
					})), y.all([r, n]).then((function(e) {
						var t = e[1];
						return Promise.resolve(t)
					})).catch((function(e) {
						return Promise.reject(e)
					}))
				})))
			}

			function C(e) {
				return e.details && e.details.originalError && e.details.originalError[0] && e.details.originalError[0].extensions && "VALIDATION" === e.details.originalError[0].extensions.errorClass && "user_error" === e.details.originalError[0].extensions.errorType
			}

			function A(e) {
				var t = (e || window.location.hash.substring(1)).split("&").reduce((function(e, t) {
					var n = t.split("="),
						i = decodeURIComponent(n[0]).replace(/\W/g, ""),
						r = v(i),
						o = decodeURIComponent(n[1]);
					return e[r] = o, e
				}), {});
				return t.resourceId && (t.id = t.resourceId), t
			}

			function T(e) {
				return "@" + (e = e || "").replace("@", "")
			}

			function I() {
				var e;
				return void 0 !== window.document.hidden ? e = "visibilitychange" : void 0 !== window.document.msHidden ? e = "msvisibilitychange" : void 0 !== window.document.webkitHidden && (e = "webkitvisibilitychange"), e
			}
			y.suppressUnhandledPromiseMessage = !0, P.prototype._createVenmoPaymentContext = function(e, t) {
				var n, i, r = this,
					o = e.getConfiguration().gatewayConfiguration.payWithVenmo,
					a = !1,
					l = r._useAllowDesktopWebLogin ? "NATIVE_WEB" : "MOBILE_WEB";
				if (!this._shouldCreateVenmoPaymentContext) return Promise.resolve();
				if (this._shouldUseLegacyFlow) n = e.request({
					api: "graphQLApi",
					data: {
						query: _.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
						variables: {
							input: {
								environment: this._mobilePollingContextEnvironment,
								intent: "PAY_FROM_APP"
							}
						}
					}
				}).then((function(e) {
					return e.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext
				}));
				else {
					if ((this._collectCustomerBillingAddress || this._collectCustomerShippingAddress) && !o.enrichedCustomerDataEnabled) return Promise.reject(new h(s.VENMO_ECD_DISABLED));
					this._lineItems && this._lineItems.forEach((function(e) {
						e.unitTaxAmount = e.unitTaxAmount || "0"
					})), i = {
						subTotalAmount: this._subTotalAmount,
						discountAmount: this._discountAmount,
						taxAmount: this._taxAmount,
						shippingAmount: this._shippingAmount,
						totalAmount: this._totalAmount,
						lineItems: this._lineItems
					}, a = Object.keys(i).some((function(e) {
						return void 0 !== i[e]
					})), n = e.request({
						api: "graphQLApi",
						data: {
							query: _.CREATE_PAYMENT_CONTEXT_QUERY,
							variables: {
								input: {
									paymentMethodUsage: this._paymentMethodUsage,
									intent: "CONTINUE",
									customerClient: l,
									isFinalAmount: this._isFinalAmount,
									displayName: this._displayName,
									paysheetDetails: {
										collectCustomerBillingAddress: this._collectCustomerBillingAddress,
										collectCustomerShippingAddress: this._collectCustomerShippingAddress,
										transactionDetails: a ? i : void 0
									}
								}
							}
						}
					}).then((function(e) {
						return e.data.createVenmoPaymentContext.venmoPaymentContext
					}))
				}
				return n.then((function(n) {
					var i = .6666 * (new Date(n.expiresAt) - new Date(n.createdAt));
					clearTimeout(r._refreshPaymentContextTimeout), r._refreshPaymentContextTimeout = setTimeout((function() {
						r._tokenizationInProgress || r._createVenmoPaymentContext(e, !0)
					}), i), t && r._tokenizationInProgress || (r._venmoPaymentContextStatus = n.status, r._venmoPaymentContextId = n.id)
				}))
			}, P.prototype.appSwitch = function(e) {
				this._deepLinkReturnUrl ? window.navigator.platform && /iPhone|iPad|iPod/.test(window.navigator.platform) ? (i.sendEvent(this._createPromise, "venmo.appswitch.start.ios-webview"), window.location.href = e) : window.popupBridge && "function" == typeof window.popupBridge.open ? (i.sendEvent(this._createPromise, "venmo.appswitch.start.popup-bridge"), window.popupBridge.open(e)) : (i.sendEvent(this._createPromise, "venmo.appswitch.start.webview"), window.open(e)) : (i.sendEvent(this._createPromise, "venmo.appswitch.start.browser"), o.doesNotSupportWindowOpenInIos() || this._shouldUseRedirectStrategy() ? window.location.href = e : window.open(e))
			}, P.prototype.getUrl = function() {
				return this._createPromise.then(function(e) {
					var t = e.getConfiguration(),
						n = {},
						i = this._deepLinkReturnUrl || window.location.href.replace(window.location.hash, ""),
						r = t.gatewayConfiguration.payWithVenmo,
						o = t.analyticsMetadata,
						a = r.accessToken,
						s = {
							_meta: {
								version: o.sdkVersion,
								integration: o.integration,
								platform: o.platform,
								sessionId: o.sessionId
							}
						};
					return this._isDebug = t.isDebug, this._assetsUrl = t.gatewayConfiguration.assetsUrl, i = i.replace(/#*$/, ""), this._venmoPaymentContextId && (this._shouldUseLegacyFlow ? a += "|pcid:" + this._venmoPaymentContextId : n.resource_id = this._venmoPaymentContextId), this._shouldIncludeReturnUrls() || this._useAllowDesktopWebLogin ? (this._useAllowDesktopWebLogin && (i = this._assetsUrl + "/web/" + b + "/html/redirect-frame.html"), n["x-success"] = i + "#venmoSuccess=1", n["x-cancel"] = i + "#venmoCancel=1", n["x-error"] = i + "#venmoError=1") : (n["x-success"] = "NOOP", n["x-cancel"] = "NOOP", n["x-error"] = "NOOP"), this._allowAndroidRecreation ? n.allowAndroidRecreation = 1 : n.allowAndroidRecreation = 0, n.ua = window.navigator.userAgent, n.braintree_merchant_id = this._profileId || r.merchantId, n.braintree_access_token = a, n.braintree_environment = r.environment, n.braintree_sdk_data = btoa(JSON.stringify(s)), f({
						useAllowDesktopWebLogin: this._useAllowDesktopWebLogin,
						mobileWebFallBack: this._mobileWebFallBack
					}) + "?" + l.stringify(n)
				}.bind(this))
			}, P.prototype.isBrowserSupported = function() {
				return r.isBrowserSupported({
					allowNewBrowserTab: this._allowNewBrowserTab,
					allowWebviews: this._allowWebviews,
					allowDesktop: this._allowDesktop,
					allowDesktopWebLogin: this._allowDesktopWebLogin
				})
			}, P.prototype.hasTokenizationResult = function() {
				return this._hasTokenizationResult()
			}, P.prototype._hasTokenizationResult = function(e) {
				var t = A(e);
				return void 0 !== (t.venmoSuccess || t.venmoError || t.venmoCancel)
			}, P.prototype._shouldIncludeReturnUrls = function() {
				return !!this._deepLinkReturnUrl || !this._cannotHaveReturnUrls
			}, P.prototype._isDesktop = function() {
				return !(o.isIos() || o.isAndroid())
			}, P.prototype.tokenize = function(e) {
				var t = this;
				return e = e || {}, !0 === this._tokenizationInProgress ? Promise.reject(new h(s.VENMO_TOKENIZATION_REQUEST_ACTIVE)) : (this._tokenizationInProgress = !0, (this._useDesktopQRFlow ? this._tokenizeForDesktopQRFlow(e) : this._useAllowDesktopWebLogin ? this._tokenizeWebLoginWithRedirect() : this._cannotHaveReturnUrls ? this._tokenizeForMobileWithManualReturn() : this._tokenizeForMobileWithHashChangeListeners(e)).then((function(e) {
					return t._createPromise.then((function(e) {
						return t._createVenmoPaymentContext(e)
					})).then((function() {
						return t._tokenizationInProgress = !1,
							function(e) {
								var t = {
									nonce: e.paymentMethodNonce,
									type: "VenmoAccount",
									details: {
										username: T(e.username),
										paymentContextId: e.id
									}
								};
								e.payerInfo && (t.details.payerInfo = e.payerInfo, t.details.payerInfo.userName = T(e.payerInfo.userName));
								return t
							}(e)
					}))
				})).catch((function(e) {
					return t._createPromise.then((function(e) {
						return t._createVenmoPaymentContext(e)
					})).then((function() {
						return t._tokenizationInProgress = !1, Promise.reject(e)
					}))
				})))
			}, P.prototype.cancelTokenization = function() {
				return this._tokenizationInProgress ? (this._removeVisibilityEventListener(), this._tokenizePromise && this._tokenizePromise.reject(new h(s.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)), Promise.all([this._cancelMobilePaymentContext(), this._cancelVenmoDesktopContext()])) : Promise.reject(new h(s.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE))
			}, P.prototype._tokenizeWebLoginWithRedirect = function() {
				var e = this;
				return i.sendEvent(e._createPromise, "venmo.tokenize.web-login.start"), this._tokenizePromise = new y, this.getUrl().then((function(t) {
					return E.runWebLogin({
						checkForStatusChange: e._checkPaymentContextStatusAndProcessResult.bind(e),
						cancelTokenization: e.cancelTokenization.bind(e),
						frameServiceInstance: e._frameServiceInstance,
						venmoUrl: t,
						debug: e._isDebug,
						checkPaymentContextStatus: e._checkPaymentContextStatus.bind(e)
					}).then((function(t) {
						i.sendEvent(e._createPromise, "venmo.tokenize.web-login.success"), e._tokenizePromise.resolve({
							paymentMethodNonce: t.paymentMethodId,
							username: t.userName,
							payerInfo: t.payerInfo,
							id: e._venmoPaymentContextId
						})
					})).catch((function(t) {
						i.sendEvent(e._createPromise, "venmo.tokenize.web-login.failure"), e._tokenizePromise.reject(t)
					})), e._tokenizePromise
				}))
			}, P.prototype._queryPaymentContextStatus = function(e) {
				var t = this;
				return this._createPromise.then((function(n) {
					var i = t._shouldUseLegacyFlow ? _.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : _.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
					return n.request({
						api: "graphQLApi",
						data: {
							query: i,
							variables: {
								id: e
							}
						}
					})
				})).then((function(e) {
					return e.data.node
				}))
			}, P.prototype._checkPaymentContextStatusAndProcessResult = function(e) {
				var t = this;
				return t._checkPaymentContextStatus().then((function(n) {
					var r = n.status;
					if (r !== t._venmoPaymentContextStatus) switch (t._venmoPaymentContextStatus = r, i.sendEvent(t._createPromise, "venmo.tokenize.web-login.status-change"), r) {
						case "APPROVED":
							return Promise.resolve(n);
						case "CANCELED":
							return Promise.reject(new h(s.VENMO_CUSTOMER_CANCELED));
						case "FAILED":
							return Promise.reject(new h(s.VENMO_TOKENIZATION_FAILED))
					}
					return new Promise((function(n, i) {
						return e < t._maxRetryCount ? (e++, t._checkPaymentContextStatusAndProcessResult(e).then(n).catch(i)) : i(new h(s.VENMO_TOKENIZATION_FAILED))
					}))
				}))
			}, P.prototype._checkPaymentContextStatus = function() {
				return this._queryPaymentContextStatus(this._venmoPaymentContextId).catch((function(e) {
					return Promise.reject(new h({
						type: s.VENMO_NETWORK_ERROR.type,
						code: s.VENMO_NETWORK_ERROR.code,
						message: s.VENMO_NETWORK_ERROR.message,
						details: e
					}))
				})).then((function(e) {
					return Promise.resolve(e)
				}))
			}, P.prototype._pollForStatusChange = function() {
				var e = this;
				return Date.now() > e._mobilePollingContextExpiresIn ? Promise.reject(new h(s.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT)) : this._queryPaymentContextStatus(this._venmoPaymentContextId).catch((function(e) {
					return Promise.reject(new h({
						type: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
						code: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
						message: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
						details: {
							originalError: e
						}
					}))
				})).then((function(t) {
					var n = t.status;
					if (n !== e._venmoPaymentContextStatus) switch (e._venmoPaymentContextStatus = n, i.sendEvent(e._createPromise, "venmo.tokenize.manual-return.status-change." + n.toLowerCase()), n) {
						case "EXPIRED":
						case "FAILED":
						case "CANCELED":
							return Promise.reject(new h(s["VENMO_MOBILE_POLLING_TOKENIZATION_" + n]));
						case "APPROVED":
							return Promise.resolve(t)
					}
					return new Promise((function(t, n) {
						setTimeout((function() {
							e._pollForStatusChange().then(t).catch(n)
						}), e._mobilePollingInterval)
					}))
				}))
			}, P.prototype._tokenizeForMobileWithManualReturn = function() {
				var e = this;
				return i.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start"), this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold, this._tokenizePromise = new y, this._pollForStatusChange().then((function(t) {
					i.sendEvent(e._createPromise, "venmo.tokenize.manual-return.success"), e._tokenizePromise.resolve({
						paymentMethodNonce: t.paymentMethodId,
						username: t.userName,
						payerInfo: t.payerInfo,
						id: e._venmoPaymentContextId
					})
				})).catch((function(t) {
					i.sendEvent(e._createPromise, "venmo.tokenize.manual-return.failure"), e._tokenizePromise.reject(t)
				})), this.getUrl().then((function(t) {
					return e.appSwitch(t), e._tokenizePromise
				}))
			}, P.prototype._shouldUseRedirectStrategy = function() {
				return !!o.isIos() && (!0 === this._mobileWebFallBack || this._useRedirectForIOS)
			}, P.prototype._tokenizeForMobileWithHashChangeListeners = function(e) {
				var t, n, r = this;
				if (this.hasTokenizationResult()) return this.processHashChangeFlowResults();

				function o(e) {
					var t;
					r.processHashChangeFlowResults(e).catch((function(e) {
						t = e
					})).then((function(e) {
						r._ignoreHistoryChanges || window.location.hash === r._previousHash || (window.location.hash = r._previousHash), r._removeVisibilityEventListener(), t ? r._tokenizePromise.reject(t) : r._tokenizePromise.resolve(e), delete r._tokenizePromise
					}))
				}
				return i.sendEvent(this._createPromise, "venmo.tokenize.mobile.start"), this._tokenizePromise = new y, this._previousHash = window.location.hash, this._onHashChangeListener = function(e) {
					var i = e.newURL.split("#")[1];
					r._hasTokenizationResult(i) && (t = !0, clearTimeout(n), o(i))
				}, window.addEventListener("hashchange", this._onHashChangeListener, !1), this._visibilityChangeListener = function() {
					var i = e.processResultsDelay || a.DEFAULT_PROCESS_RESULTS_DELAY;
					window.document.hidden || t || (n = setTimeout(o, i))
				}, this.getUrl().then((function(e) {
					return r.appSwitch(e), setTimeout((function() {
						window.document.addEventListener(I(), r._visibilityChangeListener)
					}), a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY), r._tokenizePromise
				}))
			}, P.prototype._tokenizeForDesktopQRFlow = function() {
				var e = this;
				return i.sendEvent(this._createPromise, "venmo.tokenize.desktop.start"), this._tokenizePromise = new y, this._createPromise.then((function() {
					return e._venmoDesktopInstance.launchDesktopFlow()
				})).then((function(t) {
					e._venmoDesktopInstance.hideDesktopFlow(), i.sendEvent(e._createPromise, "venmo.tokenize.desktop.success"), e._tokenizePromise.resolve(t)
				})).catch((function(t) {
					i.sendEvent(e._createPromise, "venmo.tokenize.desktop.failure"), e._venmoDesktopInstance && e._venmoDesktopInstance.hideDesktopFlow(), t && "CUSTOMER_CANCELED" === t.reason ? e._tokenizePromise.reject(new h(s.VENMO_DESKTOP_CANCELED)) : e._tokenizePromise.reject(new h({
						type: s.VENMO_DESKTOP_UNKNOWN_ERROR.type,
						code: s.VENMO_DESKTOP_UNKNOWN_ERROR.code,
						message: s.VENMO_DESKTOP_UNKNOWN_ERROR.message,
						details: {
							originalError: t
						}
					}))
				})), this._tokenizePromise
			}, P.prototype._cancelMobilePaymentContext = function() {
				var e = this;
				return this._createPromise.then((function(t) {
					var n;
					return e._venmoPaymentContextId ? (n = e._shouldUseLegacyFlow ? _.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : _.UPDATE_PAYMENT_CONTEXT_QUERY, t.request({
						api: "graphQLApi",
						data: {
							query: n,
							variables: {
								input: {
									id: e._venmoPaymentContextId,
									status: "CANCELED"
								}
							}
						}
					})) : Promise.resolve()
				}))
			}, P.prototype._cancelVenmoDesktopContext = function() {
				var e = this;
				return this._createPromise.then((function() {
					return e._venmoDesktopInstance && e._venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED"), Promise.resolve()
				}))
			}, P.prototype.teardown = function() {
				var e = this;
				return this._removeVisibilityEventListener(), this._createPromise.then(function() {
					e._venmoDesktopInstance && e._venmoDesktopInstance.teardown(), clearTimeout(e._refreshPaymentContextTimeout), e._cancelMobilePaymentContext(), p(this, c(P.prototype))
				}.bind(this))
			}, P.prototype._removeVisibilityEventListener = function() {
				window.removeEventListener("hashchange", this._onHashChangeListener), window.document.removeEventListener(I(), this._visibilityChangeListener), delete this._visibilityChangeListener, delete this._onHashChangeListener
			}, P.prototype.processHashChangeFlowResults = function(e) {
				var t = this,
					n = A(e);
				return new Promise((function(e, r) {
					t._shouldUseLegacyFlow ? n.venmoSuccess ? (i.sendEvent(t._createPromise, "venmo.appswitch.handle.success"), e(n)) : n.venmoError ? (i.sendEvent(t._createPromise, "venmo.appswitch.handle.error"), r(new h({
						type: s.VENMO_APP_FAILED.type,
						code: s.VENMO_APP_FAILED.code,
						message: s.VENMO_APP_FAILED.message,
						details: {
							originalError: {
								message: decodeURIComponent(n.errorMessage),
								code: n.errorCode
							}
						}
					}))) : n.venmoCancel ? (i.sendEvent(t._createPromise, "venmo.appswitch.handle.cancel"), r(new h(s.VENMO_APP_CANCELED))) : (i.sendEvent(t._createPromise, "venmo.appswitch.cancel-or-unavailable"), r(new h(s.VENMO_CANCELED))) : t._pollForStatusChange().then((function(n) {
						return i.sendEvent(t._createPromise, "venmo.appswitch.handle.payment-context-status-query.success"), e({
							paymentMethodNonce: n.paymentMethodId,
							username: n.userName,
							payerInfo: n.payerInfo,
							id: t._venmoPaymentContextId
						})
					})).catch((function(o) {
						o.type === s.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type && r(o), i.sendEvent(t._createPromise, "venmo.process-results.payment-context-status-query-failed"), e(n)
					})), t._clearFragmentParameters()
				}))
			}, P.prototype._clearFragmentParameters = function() {
				this._ignoreHistoryChanges || "function" == typeof window.history.replaceState && window.location.hash && history.pushState({}, "", window.location.href.slice(0, window.location.href.indexOf("#")))
			}, t.exports = u.wrapPrototype(P)
		}, {
			"../lib/analytics": 85,
			"../lib/braintree-error": 90,
			"../lib/convert-methods-to-error": 92,
			"../lib/in-iframe": 115,
			"../lib/is-verified-domain": 118,
			"../lib/methods": 120,
			"../lib/querystring": 122,
			"../lib/snake-case-to-camel-case": 124,
			"./external/": 146,
			"./external/queries": 147,
			"./shared/browser-detection": 150,
			"./shared/constants": 151,
			"./shared/errors": 152,
			"./shared/get-venmo-url": 154,
			"./shared/supports-venmo": 155,
			"./shared/web-login-backdrop": 156,
			"@braintree/extended-promise": 37,
			"@braintree/wrap-promise": 46
		}],
		158: [function(e, t, n) {
			"use strict";
			var i = this && this.__assign || function() {
					return i = Object.assign || function(e) {
						for (var t, n = 1, i = arguments.length; n < i; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}, i.apply(this, arguments)
				},
				r = e("./lib/card-types"),
				o = e("./lib/add-matching-cards-to-results"),
				a = e("./lib/is-valid-input-type"),
				s = e("./lib/find-best-match"),
				l = e("./lib/clone"),
				d = {},
				c = {
					VISA: "visa",
					MASTERCARD: "mastercard",
					AMERICAN_EXPRESS: "american-express",
					DINERS_CLUB: "diners-club",
					DISCOVER: "discover",
					JCB: "jcb",
					UNIONPAY: "unionpay",
					MAESTRO: "maestro",
					ELO: "elo",
					MIR: "mir",
					HIPER: "hiper",
					HIPERCARD: "hipercard"
				},
				p = [c.VISA, c.MASTERCARD, c.AMERICAN_EXPRESS, c.DINERS_CLUB, c.DISCOVER, c.JCB, c.UNIONPAY, c.MAESTRO, c.ELO, c.MIR, c.HIPER, c.HIPERCARD],
				u = (0, l.clone)(p);

			function h(e) {
				return d[e] || r[e]
			}

			function m(e, t) {
				void 0 === t && (t = !1);
				var n = u.indexOf(e);
				if (!t && -1 === n) throw new Error('"' + e + '" is not a supported card type.');
				return n
			}

			function y(e) {
				var t = [];
				if (!(0, a.isValidInputType)(e)) return t;
				if (0 === e.length) return u.map((function(e) {
					return (0, l.clone)(h(e))
				}));
				u.forEach((function(n) {
					var i = h(n);
					(0, o.addMatchingCardsToResults)(e, i, t)
				}));
				var n = (0, s.findBestMatch)(t);
				return n ? [n] : t
			}
			y.getTypeInfo = function(e) {
				return (0, l.clone)(h(e))
			}, y.removeCard = function(e) {
				var t = m(e);
				u.splice(t, 1)
			}, y.addCard = function(e) {
				var t = m(e.type, !0);
				d[e.type] = e, -1 === t && u.push(e.type)
			}, y.updateCard = function(e, t) {
				var n = d[e] || r[e];
				if (!n) throw new Error('"'.concat(e, "\" is not a recognized type. Use `addCard` instead.'"));
				if (t.type && n.type !== t.type) throw new Error("Cannot overwrite type parameter.");
				var o = (0, l.clone)(n);
				o = i(i({}, o), t), d[o.type] = o
			}, y.changeOrder = function(e, t) {
				var n = m(e);
				u.splice(n, 1), u.splice(t, 0, e)
			}, y.resetModifications = function() {
				u = (0, l.clone)(p), d = {}
			}, y.types = c, t.exports = y
		}, {
			"./lib/add-matching-cards-to-results": 159,
			"./lib/card-types": 160,
			"./lib/clone": 161,
			"./lib/find-best-match": 162,
			"./lib/is-valid-input-type": 163
		}],
		159: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.addMatchingCardsToResults = void 0;
			var i = e("./clone"),
				r = e("./matches");
			n.addMatchingCardsToResults = function(e, t, n) {
				var o, a;
				for (o = 0; o < t.patterns.length; o++) {
					var s = t.patterns[o];
					if ((0, r.matches)(e, s)) {
						var l = (0, i.clone)(t);
						a = Array.isArray(s) ? String(s[0]).length : String(s).length, e.length >= a && (l.matchStrength = a), n.push(l);
						break
					}
				}
			}
		}, {
			"./clone": 161,
			"./matches": 164
		}],
		160: [function(e, t, n) {
			"use strict";
			t.exports = {
				visa: {
					niceType: "Visa",
					type: "visa",
					patterns: [4],
					gaps: [4, 8, 12],
					lengths: [16, 18, 19],
					code: {
						name: "CVV",
						size: 3
					}
				},
				mastercard: {
					niceType: "Mastercard",
					type: "mastercard",
					patterns: [
						[51, 55],
						[2221, 2229],
						[223, 229],
						[23, 26],
						[270, 271], 2720
					],
					gaps: [4, 8, 12],
					lengths: [16],
					code: {
						name: "CVC",
						size: 3
					}
				},
				"american-express": {
					niceType: "American Express",
					type: "american-express",
					patterns: [34, 37],
					gaps: [4, 10],
					lengths: [15],
					code: {
						name: "CID",
						size: 4
					}
				},
				"diners-club": {
					niceType: "Diners Club",
					type: "diners-club",
					patterns: [
						[300, 305], 36, 38, 39
					],
					gaps: [4, 10],
					lengths: [14, 16, 19],
					code: {
						name: "CVV",
						size: 3
					}
				},
				discover: {
					niceType: "Discover",
					type: "discover",
					patterns: [6011, [644, 649], 65],
					gaps: [4, 8, 12],
					lengths: [16, 19],
					code: {
						name: "CID",
						size: 3
					}
				},
				jcb: {
					niceType: "JCB",
					type: "jcb",
					patterns: [2131, 1800, [3528, 3589]],
					gaps: [4, 8, 12],
					lengths: [16, 17, 18, 19],
					code: {
						name: "CVV",
						size: 3
					}
				},
				unionpay: {
					niceType: "UnionPay",
					type: "unionpay",
					patterns: [620, [62100, 62182],
						[62184, 62187],
						[62185, 62197],
						[62200, 62205],
						[622010, 622999], 622018, [62207, 62209],
						[623, 626], 6270, 6272, 6276, [627700, 627779],
						[627781, 627799],
						[6282, 6289], 6291, 6292, 810, [8110, 8131],
						[8132, 8151],
						[8152, 8163],
						[8164, 8171]
					],
					gaps: [4, 8, 12],
					lengths: [14, 15, 16, 17, 18, 19],
					code: {
						name: "CVN",
						size: 3
					}
				},
				maestro: {
					niceType: "Maestro",
					type: "maestro",
					patterns: [493698, [5e5, 504174],
						[504176, 506698],
						[506779, 508999],
						[56, 59], 63, 67, 6
					],
					gaps: [4, 8, 12],
					lengths: [12, 13, 14, 15, 16, 17, 18, 19],
					code: {
						name: "CVC",
						size: 3
					}
				},
				elo: {
					niceType: "Elo",
					type: "elo",
					patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778],
						[509e3, 509999], 627780, 636297, 636368, [650031, 650033],
						[650035, 650051],
						[650405, 650439],
						[650485, 650538],
						[650541, 650598],
						[650700, 650718],
						[650720, 650727],
						[650901, 650978],
						[651652, 651679],
						[655e3, 655019],
						[655021, 655058]
					],
					gaps: [4, 8, 12],
					lengths: [16],
					code: {
						name: "CVE",
						size: 3
					}
				},
				mir: {
					niceType: "Mir",
					type: "mir",
					patterns: [
						[2200, 2204]
					],
					gaps: [4, 8, 12],
					lengths: [16, 17, 18, 19],
					code: {
						name: "CVP2",
						size: 3
					}
				},
				hiper: {
					niceType: "Hiper",
					type: "hiper",
					patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
					gaps: [4, 8, 12],
					lengths: [16],
					code: {
						name: "CVC",
						size: 3
					}
				},
				hipercard: {
					niceType: "Hipercard",
					type: "hipercard",
					patterns: [606282],
					gaps: [4, 8, 12],
					lengths: [16],
					code: {
						name: "CVC",
						size: 3
					}
				}
			}
		}, {}],
		161: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.clone = void 0, n.clone = function(e) {
				return e ? JSON.parse(JSON.stringify(e)) : null
			}
		}, {}],
		162: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.findBestMatch = void 0, n.findBestMatch = function(e) {
				return function(e) {
					var t = e.filter((function(e) {
						return e.matchStrength
					})).length;
					return t > 0 && t === e.length
				}(e) ? e.reduce((function(e, t) {
					return e ? Number(e.matchStrength) < Number(t.matchStrength) ? t : e : t
				})) : null
			}
		}, {}],
		163: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.isValidInputType = void 0, n.isValidInputType = function(e) {
				return "string" == typeof e || e instanceof String
			}
		}, {}],
		164: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.matches = void 0, n.matches = function(e, t) {
				return Array.isArray(t) ? function(e, t, n) {
					var i = String(t).length,
						r = e.substr(0, i),
						o = parseInt(r, 10);
					return t = parseInt(String(t).substr(0, r.length), 10), n = parseInt(String(n).substr(0, r.length), 10), o >= t && o <= n
				}(e, t[0], t[1]) : function(e, t) {
					return (t = String(t)).substring(0, e.length) === e.substring(0, t.length)
				}(e, t)
			}
		}, {}],
		165: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.Framebus = void 0;
			var i = e("./lib"),
				r = "undefined" != typeof window && window.Promise,
				o = function() {
					function e(e) {
						void 0 === e && (e = {}), this.origin = e.origin || "*", this.channel = e.channel || "", this.verifyDomain = e.verifyDomain, this.targetFrames = e.targetFrames || [], this.limitBroadcastToFramesArray = Boolean(e.targetFrames), this.isDestroyed = !1, this.listeners = [], this.hasAdditionalChecksForOnListeners = Boolean(this.verifyDomain || this.limitBroadcastToFramesArray)
					}
					return e.setPromise = function(t) {
						e.Promise = t
					}, e.target = function(t) {
						return new e(t)
					}, e.prototype.addTargetFrame = function(e) {
						this.limitBroadcastToFramesArray && this.targetFrames.push(e)
					}, e.prototype.include = function(e) {
						return null != e && (null != e.Window && (e.constructor === e.Window && (i.childWindows.push(e), !0)))
					}, e.prototype.target = function(t) {
						return e.target(t)
					}, e.prototype.emit = function(e, t, n) {
						if (this.isDestroyed) return !1;
						var r = this.origin;
						if (e = this.namespaceEvent(e), (0, i.isntString)(e)) return !1;
						if ((0, i.isntString)(r)) return !1;
						"function" == typeof t && (n = t, t = void 0);
						var o = (0, i.packagePayload)(e, r, t, n);
						return !!o && (this.limitBroadcastToFramesArray ? this.targetFramesAsWindows().forEach((function(e) {
							(0, i.sendMessage)(e, o, r)
						})) : (0, i.broadcast)(o, {
							origin: r,
							frame: window.top || window.self
						}), !0)
					}, e.prototype.emitAsPromise = function(t, n) {
						var i = this;
						return new e.Promise((function(e, r) {
							i.emit(t, n, (function(t) {
								e(t)
							})) || r(new Error('Listener not added for "'.concat(t, '"')))
						}))
					}, e.prototype.on = function(e, t) {
						if (this.isDestroyed) return !1;
						var n = this,
							r = this.origin,
							o = t;
						return e = this.namespaceEvent(e), !(0, i.subscriptionArgsInvalid)(e, o, r) && (this.hasAdditionalChecksForOnListeners && (o = function() {
							for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
							n.passesVerifyDomainCheck(this && this.origin) && n.hasMatchingTargetFrame(this && this.source) && t.apply(void 0, e)
						}), this.listeners.push({
							eventName: e,
							handler: o,
							originalHandler: t
						}), i.subscribers[r] = i.subscribers[r] || {}, i.subscribers[r][e] = i.subscribers[r][e] || [], i.subscribers[r][e].push(o), !0)
					}, e.prototype.off = function(e, t) {
						var n = t;
						if (this.isDestroyed) return !1;
						if (this.verifyDomain)
							for (var r = 0; r < this.listeners.length; r++) {
								var o = this.listeners[r];
								o.originalHandler === t && (n = o.handler)
							}
						e = this.namespaceEvent(e);
						var a = this.origin;
						if ((0, i.subscriptionArgsInvalid)(e, n, a)) return !1;
						var s = i.subscribers[a] && i.subscribers[a][e];
						if (!s) return !1;
						for (r = 0; r < s.length; r++)
							if (s[r] === n) return s.splice(r, 1), !0;
						return !1
					}, e.prototype.teardown = function() {
						if (!this.isDestroyed) {
							this.isDestroyed = !0;
							for (var e = 0; e < this.listeners.length; e++) {
								var t = this.listeners[e];
								this.off(t.eventName, t.handler)
							}
							this.listeners.length = 0
						}
					}, e.prototype.passesVerifyDomainCheck = function(e) {
						return !this.verifyDomain || this.checkOrigin(e)
					}, e.prototype.targetFramesAsWindows = function() {
						return this.limitBroadcastToFramesArray ? this.targetFrames.map((function(e) {
							return e instanceof HTMLIFrameElement ? e.contentWindow : e
						})).filter((function(e) {
							return e
						})) : []
					}, e.prototype.hasMatchingTargetFrame = function(e) {
						if (!this.limitBroadcastToFramesArray) return !0;
						var t = this.targetFramesAsWindows().find((function(t) {
							return t === e
						}));
						return Boolean(t)
					}, e.prototype.checkOrigin = function(e) {
						var t, n = document.createElement("a");
						return n.href = location.href, t = "https:" === n.protocol ? n.host.replace(/:443$/, "") : "http:" === n.protocol ? n.host.replace(/:80$/, "") : n.host, n.protocol + "//" + t === e || (!this.verifyDomain || this.verifyDomain(e))
					}, e.prototype.namespaceEvent = function(e) {
						return this.channel ? "".concat(this.channel, ":").concat(e) : e
					}, e.Promise = r, e
				}();
			n.Framebus = o
		}, {
			"./lib": 173
		}],
		166: [function(e, t, n) {
			"use strict";
			var i = e("./lib"),
				r = e("./framebus");
			(0, i.attach)(), t.exports = r.Framebus
		}, {
			"./framebus": 165,
			"./lib": 173
		}],
		167: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.detach = n.attach = void 0;
			var i = e("./"),
				r = !1;
			n.attach = function() {
				r || "undefined" == typeof window || (r = !0, window.addEventListener("message", i.onMessage, !1))
			}, n.detach = function() {
				r = !1, window.removeEventListener("message", i.onMessage, !1)
			}
		}, {
			"./": 173
		}],
		168: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.broadcastToChildWindows = void 0;
			var i = e("./");
			n.broadcastToChildWindows = function(e, t, n) {
				for (var r = i.childWindows.length - 1; r >= 0; r--) {
					var o = i.childWindows[r];
					o.closed ? i.childWindows.splice(r, 1) : n !== o && (0, i.broadcast)(e, {
						origin: t,
						frame: o.top
					})
				}
			}
		}, {
			"./": 173
		}],
		169: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.broadcast = void 0;
			var i = e("./");
			n.broadcast = function e(t, n) {
				var r, o = 0,
					a = n.origin,
					s = n.frame;
				try {
					for (s.postMessage(t, a), (0, i.hasOpener)(s) && s.opener.top !== window.top && e(t, {
							origin: a,
							frame: s.opener.top
						}); r = s.frames[o];) e(t, {
						origin: a,
						frame: r
					}), o++
				} catch (l) {}
			}
		}, {
			"./": 173
		}],
		170: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.subscribers = n.childWindows = n.prefix = void 0, n.prefix = "/*framebus*/", n.childWindows = [], n.subscribers = {}
		}, {}],
		171: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.dispatch = void 0;
			var i = e("./");
			n.dispatch = function(e, t, n, r, o) {
				if (i.subscribers[e] && i.subscribers[e][t]) {
					var a = [];
					n && a.push(n), r && a.push(r);
					for (var s = 0; s < i.subscribers[e][t].length; s++) i.subscribers[e][t][s].apply(o, a)
				}
			}
		}, {
			"./": 173
		}],
		172: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.hasOpener = void 0, n.hasOpener = function(e) {
				return e.top === e && (null != e.opener && (e.opener !== e && !0 !== e.opener.closed))
			}
		}, {}],
		173: [function(e, t, n) {
			"use strict";
			var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
					void 0 === i && (i = n);
					var r = Object.getOwnPropertyDescriptor(t, n);
					r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
						enumerable: !0,
						get: function() {
							return t[n]
						}
					}), Object.defineProperty(e, i, r)
				} : function(e, t, n, i) {
					void 0 === i && (i = n), e[i] = t[n]
				}),
				r = this && this.__exportStar || function(e, t) {
					for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
				};
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), r(e("./attach"), n), r(e("./broadcast-to-child-windows"), n), r(e("./broadcast"), n), r(e("./constants"), n), r(e("./dispatch"), n), r(e("./has-opener"), n), r(e("./is-not-string"), n), r(e("./message"), n), r(e("./package-payload"), n), r(e("./send-message"), n), r(e("./subscribe-replier"), n), r(e("./subscription-args-invalid"), n), r(e("./types"), n), r(e("./unpack-payload"), n)
		}, {
			"./attach": 167,
			"./broadcast": 169,
			"./broadcast-to-child-windows": 168,
			"./constants": 170,
			"./dispatch": 171,
			"./has-opener": 172,
			"./is-not-string": 174,
			"./message": 175,
			"./package-payload": 176,
			"./send-message": 177,
			"./subscribe-replier": 178,
			"./subscription-args-invalid": 179,
			"./types": 180,
			"./unpack-payload": 181
		}],
		174: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.isntString = void 0, n.isntString = function(e) {
				return "string" != typeof e
			}
		}, {}],
		175: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.onMessage = void 0;
			var i = e("./");
			n.onMessage = function(e) {
				if (!(0, i.isntString)(e.data)) {
					var t = (0, i.unpackPayload)(e);
					if (t) {
						var n = t.eventData,
							r = t.reply;
						(0, i.dispatch)("*", t.event, n, r, e), (0, i.dispatch)(e.origin, t.event, n, r, e), (0, i.broadcastToChildWindows)(e.data, t.origin, e.source)
					}
				}
			}
		}, {
			"./": 173
		}],
		176: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.packagePayload = void 0;
			var i = e("./");
			n.packagePayload = function(e, t, n, r) {
				var o, a = {
					event: e,
					origin: t
				};
				"function" == typeof r && (a.reply = (0, i.subscribeReplier)(r, t)), a.eventData = n;
				try {
					o = i.prefix + JSON.stringify(a)
				} catch (s) {
					throw new Error("Could not stringify event: ".concat(s.message))
				}
				return o
			}
		}, {
			"./": 173
		}],
		177: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.sendMessage = void 0, n.sendMessage = function(e, t, n) {
				try {
					e.postMessage(t, n)
				} catch (i) {}
			}
		}, {}],
		178: [function(e, t, n) {
			"use strict";
			var i = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.subscribeReplier = void 0;
			var r = e("../framebus"),
				o = i(e("@braintree/uuid"));
			n.subscribeReplier = function(e, t) {
				var n = (0, o.default)();
				return r.Framebus.target({
					origin: t
				}).on(n, (function i(o, a) {
					e(o, a), r.Framebus.target({
						origin: t
					}).off(n, i)
				})), n
			}
		}, {
			"../framebus": 165,
			"@braintree/uuid": 182
		}],
		179: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.subscriptionArgsInvalid = void 0;
			var i = e("./");
			n.subscriptionArgsInvalid = function(e, t, n) {
				return !!(0, i.isntString)(e) || ("function" != typeof t || (0, i.isntString)(n))
			}
		}, {
			"./": 173
		}],
		180: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			})
		}, {}],
		181: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.unpackPayload = void 0;
			var i = e("./");
			n.unpackPayload = function(e) {
				var t;
				if (e.data.slice(0, i.prefix.length) !== i.prefix) return !1;
				try {
					t = JSON.parse(e.data.slice(i.prefix.length))
				} catch (a) {
					return !1
				}
				if (t.reply) {
					var n = e.origin,
						r = e.source,
						o = t.reply;
					t.reply = function(e) {
						if (r) {
							var t = (0, i.packagePayload)(o, n, e);
							t && r.postMessage(t, n)
						}
					}
				}
				return t
			}
		}, {
			"./": 173
		}],
		182: [function(e, t, n) {
			"use strict";
			t.exports = function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
					var t = 16 * Math.random() | 0;
					return ("x" === e ? t : 3 & t | 8).toString(16)
				}))
			}
		}, {}],
		183: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.isIos = n.isIE9 = n.isSamsungBrowser = n.isAndroidChrome = n.isKitKatWebview = void 0;
			var i = "undefined" != typeof window && window.navigator && window.navigator.userAgent,
				r = e("@braintree/browser-detection/is-android"),
				o = e("@braintree/browser-detection/is-chrome-os"),
				a = e("@braintree/browser-detection/is-chrome"),
				s = e("@braintree/browser-detection/is-ios");
			n.isIos = s;
			var l = e("@braintree/browser-detection/is-ie9");
			n.isIE9 = l;
			var d = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
			n.isKitKatWebview = function(e) {
				return void 0 === e && (e = i), r(e) && d.test(e)
			}, n.isAndroidChrome = function(e) {
				return void 0 === e && (e = i), (r(e) || o(e)) && a(e)
			}, n.isSamsungBrowser = function(e) {
				return void 0 === e && (e = i), /SamsungBrowser/.test(e) || function(e) {
					return !a(e) && e.indexOf("Samsung") > -1
				}(e)
			}
		}, {
			"@braintree/browser-detection/is-android": 196,
			"@braintree/browser-detection/is-chrome": 198,
			"@braintree/browser-detection/is-chrome-os": 197,
			"@braintree/browser-detection/is-ie9": 199,
			"@braintree/browser-detection/is-ios": 200
		}],
		184: [function(e, t, n) {
			"use strict";
			var i = e("./lib/device");
			t.exports = function() {
				return !(0, i.isSamsungBrowser)()
			}
		}, {
			"./lib/device": 183
		}],
		185: [function(e, t, n) {
			arguments[4][5][0].apply(n, arguments)
		}, {
			dup: 5
		}],
		186: [function(e, t, n) {
			arguments[4][6][0].apply(n, arguments)
		}, {
			dup: 6
		}],
		187: [function(e, t, n) {
			arguments[4][7][0].apply(n, arguments)
		}, {
			"./is-duckduckgo": 188,
			"./is-edge": 189,
			"./is-opera": 193,
			"./is-samsung": 194,
			"./is-silk": 195,
			dup: 7
		}],
		188: [function(e, t, n) {
			arguments[4][8][0].apply(n, arguments)
		}, {
			dup: 8
		}],
		189: [function(e, t, n) {
			arguments[4][9][0].apply(n, arguments)
		}, {
			dup: 9
		}],
		190: [function(e, t, n) {
			arguments[4][12][0].apply(n, arguments)
		}, {
			dup: 12
		}],
		191: [function(e, t, n) {
			arguments[4][18][0].apply(n, arguments)
		}, {
			"./is-ipados": 192,
			dup: 18
		}],
		192: [function(e, t, n) {
			arguments[4][19][0].apply(n, arguments)
		}, {
			dup: 19
		}],
		193: [function(e, t, n) {
			arguments[4][20][0].apply(n, arguments)
		}, {
			dup: 20
		}],
		194: [function(e, t, n) {
			arguments[4][21][0].apply(n, arguments)
		}, {
			dup: 21
		}],
		195: [function(e, t, n) {
			arguments[4][22][0].apply(n, arguments)
		}, {
			dup: 22
		}],
		196: [function(e, t, n) {
			arguments[4][24][0].apply(n, arguments)
		}, {
			"./dist/is-android": 185,
			dup: 24
		}],
		197: [function(e, t, n) {
			arguments[4][25][0].apply(n, arguments)
		}, {
			"./dist/is-chrome-os": 186,
			dup: 25
		}],
		198: [function(e, t, n) {
			arguments[4][26][0].apply(n, arguments)
		}, {
			"./dist/is-chrome": 187,
			dup: 26
		}],
		199: [function(e, t, n) {
			arguments[4][29][0].apply(n, arguments)
		}, {
			"./dist/is-ie9": 190,
			dup: 29
		}],
		200: [function(e, t, n) {
			arguments[4][33][0].apply(n, arguments)
		}, {
			"./dist/is-ios": 191,
			dup: 33
		}],
		201: [function(e, t, n) {
			t.exports = e("./dist/supports-input-formatting")
		}, {
			"./dist/supports-input-formatting": 184
		}],
		202: [function(e, t, n) {
			"use strict";
			t.exports = {
				paymentOptionIDs: {
					card: "card",
					paypal: "paypal",
					paypalCredit: "paypalCredit",
					applePay: "applePay",
					venmo: "venmo",
					googlePay: "googlePay"
				},
				paymentMethodTypes: {
					card: "CreditCard",
					paypal: "PayPalAccount",
					paypalCredit: "PayPalAccount",
					applePay: "ApplePayCard",
					venmo: "VenmoAccount",
					googlePay: "AndroidPayCard"
				},
				analyticsKinds: {
					CreditCard: "card",
					PayPalAccount: "paypal",
					ApplePayCard: "applepay",
					VenmoAccount: "venmo",
					AndroidPayCard: "googlepay"
				},
				paymentMethodCardTypes: {
					Visa: "visa",
					MasterCard: "master-card",
					"American Express": "american-express",
					"Diners Club": "diners-club",
					Discover: "discover",
					JCB: "jcb",
					UnionPay: "unionpay",
					Maestro: "maestro",
					Elo: "elo",
					Hiper: "hiper",
					Hipercard: "hipercard"
				},
				cardTypeIcons: {
					visa: "visa",
					mastercard: "master-card",
					"american-express": "american-express",
					"diners-club": "diners-club",
					discover: "discover",
					jcb: "jcb",
					"union-pay": "unionpay",
					maestro: "maestro",
					elo: "elo",
					hiper: "hiper",
					hipercard: "hipercard"
				},
				configurationCardTypes: {
					visa: "Visa",
					"master-card": "MasterCard",
					"american-express": "American Express",
					"diners-club": "Discover",
					discover: "Discover",
					jcb: "JCB",
					unionpay: "UnionPay",
					maestro: "Maestro",
					elo: "Elo",
					hiper: "Hiper",
					hipercard: "Hipercard"
				},
				dependencySetupStates: {
					DONE: "done",
					FAILED: "failed",
					INITIALIZING: "initializing",
					NOT_ENABLED: "not-enabled"
				},
				errors: {
					NO_PAYMENT_METHOD_ERROR: "No payment method is available.",
					DEVELOPER_MISCONFIGURATION_MESSAGE: "Developer Error: Something went wrong. Check the console for details."
				},
				ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
				ANALYTICS_PREFIX: "web.dropin.",
				CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT: 200,
				CHECKOUT_JS_SOURCE: "https://www.paypalobjects.com/api/checkout.min.js",
				GOOGLE_PAYMENT_SOURCE: "https://pay.google.com/gp/p/js/pay.js",
				INTEGRATION: "dropin2",
				PAYPAL_CHECKOUT_SCRIPT_ID: "braintree-dropin-paypal-checkout-script",
				GOOGLE_PAYMENT_SCRIPT_ID: "braintree-dropin-google-payment-script",
				DATA_COLLECTOR_SCRIPT_ID: "braintree-dropin-data-collector-script",
				STYLESHEET_ID: "braintree-dropin-stylesheet"
			}
		}, {}],
		203: [function(e, t, n) {
			"use strict";
			var i = e("./lib/analytics"),
				r = e("./lib/dropin-error"),
				o = e("@braintree/event-emitter"),
				a = e("./constants"),
				s = a.paymentMethodTypes,
				l = a.paymentOptionIDs,
				d = a.dependencySetupStates,
				c = e("./lib/is-guest-checkout"),
				p = e("./views/payment-sheet-views"),
				u = e("braintree-web/vault-manager"),
				h = e("./views/payment-options-view").ID,
				m = [s.applePay, s.googlePay, s.venmo],
				y = [l.card, l.paypal, l.paypalCredit, l.venmo, l.applePay, l.googlePay],
				f = ["threeDSecure", "dataCollector"],
				E = y.concat(f);

			function v(e) {
				for (this.rootNode = e.container, this.componentID = e.componentID, this.merchantConfiguration = e.merchantConfiguration, this.isGuestCheckout = c(e.client), this.dependencyStates = E.reduce(function(e, t) {
						return this._shouldIncludeDependency(t) && (e[t] = d.INITIALIZING), e
					}.bind(this), {}), this.hiddenVaultedPaymentMethodTypes = function(e) {
						var t = [].concat(m);
						Array.isArray(e) && e.forEach((function(e) {
							var n = s[e];
							n && (t.indexOf(n) > -1 || t.push(n))
						}));
						return t
					}(e.merchantConfiguration.hiddenVaultedPaymentMethodTypes), this.failedDependencies = {}, this._options = e, this._setupComplete = !1, this.shouldWaitForVerifyCard = !1; this.rootNode.parentNode;) this.rootNode = this.rootNode.parentNode;
				this.isInShadowDom = "[object ShadowRoot]" === this.rootNode.toString(), o.call(this)
			}
			o.createChild(v), v.prototype.initialize = function() {
				var e, t = this,
					n = setInterval((function() {
						for (e in t.dependencyStates)
							if (t.dependencyStates[e] === d.INITIALIZING) return;
						clearInterval(n), t._emit("asyncDependenciesReady")
					}), 200);
				return u.create({
					client: t._options.client
				}).then((function(e) {
					return t._vaultManager = e, t._getSupportedPaymentOptions(t._options)
				})).then((function(e) {
					return t.supportedPaymentOptions = e, t.getVaultedPaymentMethods()
				})).then((function(e) {
					t._paymentMethods = e, t._paymentMethodIsRequestable = t._paymentMethods.length > 0
				}))
			}, v.prototype.confirmDropinReady = function() {
				this._setupComplete = !0
			}, v.prototype.isPaymentMethodRequestable = function() {
				return Boolean(this._paymentMethodIsRequestable)
			}, v.prototype.addPaymentMethod = function(e) {
				this._paymentMethods.push(e), this._emit("addPaymentMethod", e), this.changeActivePaymentMethod(e)
			}, v.prototype.removePaymentMethod = function(e) {
				var t = this._paymentMethods.indexOf(e); - 1 !== t && (this._paymentMethods.splice(t, 1), this._emit("removePaymentMethod", e))
			}, v.prototype.refreshPaymentMethods = function() {
				var e = this;
				return e.getVaultedPaymentMethods().then((function(t) {
					e._paymentMethods = t, e._emit("refreshPaymentMethods")
				}))
			}, v.prototype.changeActivePaymentMethod = function(e) {
				this._activePaymentMethod = e, this._emit("changeActivePaymentMethod", e)
			}, v.prototype.changeActiveView = function(e) {
				var t = this._activePaymentViewId;
				this._activePaymentViewId = e, this._emit("changeActiveView", {
					previousViewId: t,
					newViewId: e
				})
			}, v.prototype.removeActivePaymentMethod = function() {
				this._activePaymentMethod = null, this._emit("removeActivePaymentMethod"), this.setPaymentMethodRequestable({
					isRequestable: !1
				})
			}, v.prototype.selectPaymentOption = function(e) {
				this._emit("paymentOptionSelected", {
					paymentOption: e
				})
			}, v.prototype.enableEditMode = function() {
				i.sendEvent(this._options.client, "manager.appeared"), this._isInEditMode = !0, this._emit("enableEditMode")
			}, v.prototype.disableEditMode = function() {
				this._isInEditMode = !1, this._emit("disableEditMode")
			}, v.prototype.isInEditMode = function() {
				return Boolean(this._isInEditMode)
			}, v.prototype.confirmPaymentMethodDeletion = function(e) {
				this._paymentMethodWaitingToBeDeleted = e, this._emit("confirmPaymentMethodDeletion", e)
			}, v.prototype._shouldIncludeDependency = function(e) {
				if ("card" === e) {
					if (!1 === this.merchantConfiguration.card) return !1
				} else if (!this.merchantConfiguration[e]) return !1;
				return f.indexOf(e) > -1 || (this.merchantConfiguration.paymentOptionPriority ? this.merchantConfiguration.paymentOptionPriority.indexOf(e) > -1 : y.indexOf(e) > -1)
			}, v.prototype._shouldEmitRequestableEvent = function(e) {
				var t = this.isPaymentMethodRequestable() === e.isRequestable,
					n = (e.selectedPaymentMethod && e.selectedPaymentMethod.nonce) === this._paymentMethodRequestableNonce;
				return !!this._setupComplete && (!this.shouldWaitForVerifyCard && !(t && (!e.isRequestable || n)))
			}, v.prototype.setPaymentMethodRequestable = function(e) {
				var t = this._shouldEmitRequestableEvent(e),
					n = {
						paymentMethodIsSelected: Boolean(e.selectedPaymentMethod),
						type: e.type
					};
				this._paymentMethodIsRequestable = e.isRequestable, e.isRequestable ? this._paymentMethodRequestableNonce = e.selectedPaymentMethod && e.selectedPaymentMethod.nonce : delete this._paymentMethodRequestableNonce, t && (e.isRequestable ? this._emit("paymentMethodRequestable", n) : this._emit("noPaymentMethodRequestable"))
			}, v.prototype.getPaymentMethods = function() {
				return this._paymentMethods.slice()
			}, v.prototype.getActivePaymentMethod = function() {
				return this._activePaymentMethod
			}, v.prototype.hasPaymentMethods = function() {
				return this.getPaymentMethods().length > 0
			}, v.prototype.getInitialViewId = function() {
				return this.supportedPaymentOptions.length > 1 ? h : this.supportedPaymentOptions[0]
			}, v.prototype.getActivePaymentViewId = function() {
				return this._activePaymentViewId
			}, v.prototype.reportAppSwitchPayload = function(e) {
				this.appSwitchPayload = e
			}, v.prototype.reportAppSwitchError = function(e, t) {
				this.appSwitchError = {
					id: e,
					error: t
				}
			}, v.prototype.hasAtLeastOneAvailablePaymentOption = function() {
				var e;
				for (e = 0; e < this.supportedPaymentOptions.length; e++)
					if (this.dependencyStates[this.supportedPaymentOptions[e]] === d.DONE) return !0;
				return !1
			}, v.prototype.asyncDependencyReady = function(e) {
				this.dependencyStates[e] = d.DONE
			}, v.prototype.asyncDependencyFailed = function(e) {
				this.failedDependencies.hasOwnProperty(e.view) || (this.failedDependencies[e.view] = e.error, this.dependencyStates[e.view] = d.FAILED)
			}, v.prototype.cancelInitialization = function(e) {
				this._emit("cancelInitialization", e)
			}, v.prototype.reportError = function(e) {
				this._emit("errorOccurred", e)
			}, v.prototype.clearError = function() {
				this._emit("errorCleared")
			}, v.prototype.preventUserAction = function() {
				this._emit("preventUserAction")
			}, v.prototype.allowUserAction = function() {
				this._emit("allowUserAction")
			}, v.prototype.deleteVaultedPaymentMethod = function() {
				var e, t = this,
					n = Promise.resolve();
				return this._emit("startVaultedPaymentMethodDeletion"), t.isGuestCheckout || (n = this._vaultManager.deletePaymentMethod(this._paymentMethodWaitingToBeDeleted.nonce).catch((function(t) {
					e = t
				}))), n.then((function() {
					return delete t._paymentMethodWaitingToBeDeleted, t.refreshPaymentMethods()
				})).then((function() {
					t.disableEditMode(), t._emit("finishVaultedPaymentMethodDeletion", e)
				}))
			}, v.prototype.cancelDeleteVaultedPaymentMethod = function() {
				this._emit("cancelVaultedPaymentMethodDeletion"), delete this._paymentMethodWaitingToBeDeleted
			}, v.prototype.getVaultedPaymentMethods = function() {
				var e = this;
				return e.isGuestCheckout ? Promise.resolve([]) : e._vaultManager.fetchPaymentMethods({
					defaultFirst: !1 !== this.merchantConfiguration.showDefaultPaymentMethodFirst
				}).then((function(t) {
					return e._getSupportedPaymentMethods(t).map((function(e) {
						return e.vaulted = !0, e
					}))
				})).catch((function() {
					return Promise.resolve([])
				}))
			}, v.prototype._getSupportedPaymentMethods = function(e) {
				var t = this,
					n = this.supportedPaymentOptions.reduce((function(e, n) {
						var i = s[n];
						return function(e, t) {
							return e && -1 === t.indexOf(e)
						}(i, t.hiddenVaultedPaymentMethodTypes) && e.push(i), e
					}), []);
				return e.filter((function(e) {
					return n.indexOf(e.type) > -1
				}))
			}, v.prototype._getSupportedPaymentOptions = function(e) {
				var t, n = this,
					i = e.merchantConfiguration.paymentOptionPriority || y;
				if (!(i instanceof Array)) throw new r("paymentOptionPriority must be an array.");
				return t = (i = i.filter((function(e, t) {
					return i.indexOf(e) === t
				}))).map((function(t) {
					return function(e, t) {
						return function(e, t) {
							var n = p[l[e]];
							if (!n) return Promise.reject(new r("paymentOptionPriority: Invalid payment option specified."));
							return n.isEnabled({
								client: t.client,
								merchantConfiguration: t.merchantConfiguration
							}).catch((function(e) {
								return console.error(n.ID + " view errored when checking if it was supported."), console.error(e), Promise.resolve(!1)
							}))
						}(e, t).then((function(t) {
							return {
								success: t,
								id: l[e]
							}
						}))
					}(t, e).then((function(e) {
						return e.success || (n.dependencyStates[e.id] = d.NOT_ENABLED), e
					}))
				})), Promise.all(t).then((function(e) {
					return 0 === (e = e.filter((function(e) {
						return e.success
					}))).length ? Promise.reject(new r("No valid payment options available.")) : e.map((function(e) {
						return e.id
					}))
				}))
			}, t.exports = v
		}, {
			"./constants": 202,
			"./lib/analytics": 207,
			"./lib/dropin-error": 212,
			"./lib/is-guest-checkout": 214,
			"./views/payment-options-view": 264,
			"./views/payment-sheet-views": 269,
			"@braintree/event-emitter": 36,
			"braintree-web/vault-manager": 144
		}],
		204: [function(e, t, n) {
			"use strict";
			var i = e("./lib/assign").assign,
				r = e("./lib/analytics"),
				o = e("./constants"),
				a = e("./lib/dropin-error"),
				s = e("./dropin-model"),
				l = e("@braintree/event-emitter"),
				d = e("@braintree/asset-loader"),
				c = e("./views/main-view"),
				p = o.paymentOptionIDs,
				u = e("./translations").translations,
				h = e("./lib/is-utf-8"),
				m = e("@braintree/uuid"),
				y = e("./lib/sanitize-html"),
				f = e("./lib/data-collector"),
				E = e("./lib/three-d-secure"),
				v = e("@braintree/wrap-promise").wrapPrototype,
				g = ["changeActiveView", "paymentMethodRequestable", "noPaymentMethodRequestable", "paymentOptionSelected", "card:binAvailable", "card:blur", "card:cardTypeChange", "card:empty", "card:focus", "card:inputSubmitRequest", "card:notEmpty", "card:validityChange", "3ds:customer-canceled", "3ds:authentication-modal-render", "3ds:authentication-modal-close"],
				_ = [p.paypal, p.paypalCredit, p.applePay, p.googlePay, "threeDSecure"],
				b = [p.paypal, p.paypalCredit, p.applePay, p.googlePay],
				P = {};

			function C(e) {
				this._client = e.client, this._componentID = m(), this._dropinWrapper = document.createElement("div"), this._dropinWrapper.id = "braintree--dropin__" + this._componentID, this._dropinWrapper.setAttribute("data-braintree-id", "wrapper"), this._dropinWrapper.style.display = "none", this._dropinWrapper.className = "braintree-loading", this._merchantConfiguration = e.merchantConfiguration, l.call(this)
			}
			P[o.paymentMethodTypes.googlePay] = !0, P[o.paymentMethodTypes.applePay] = !0, l.createChild(C), C.prototype._initialize = function(e) {
				var t, n, o = this,
					l = o._merchantConfiguration.container || o._merchantConfiguration.selector;
				return l ? o._merchantConfiguration.container && o._merchantConfiguration.selector ? (r.sendEvent(o._client, "configuration-error"), void e(new a("Must only have one options.selector or options.container."))) : ("string" == typeof l && (l = document.querySelector(l)), l && 1 === l.nodeType ? l.innerHTML.trim() ? (r.sendEvent(o._client, "configuration-error"), void e(new a("options.selector or options.container must reference an empty DOM node."))) : (o._strings = i({}, u.en), o._merchantConfiguration.locale && (t = u[o._merchantConfiguration.locale] || u[o._merchantConfiguration.locale.split("_")[0]], o._strings = i(o._strings, t)), h() || (o._strings.endingIn = o._strings.endingIn.replace(/•/g, "*")), o._merchantConfiguration.translations && Object.keys(o._merchantConfiguration.translations).forEach((function(e) {
					o._strings[e] = y(o._merchantConfiguration.translations[e])
				})), n = Object.keys(o._strings).reduce((function(e, t) {
					var n = o._strings[t];
					return e.replace(RegExp("{{" + t + "}}", "g"), n)
				}), '<div class="braintree-dropin">\n  <div data-braintree-id="methods-label" class="braintree-heading">&nbsp;</div>\n  <div data-braintree-id="methods-edit" class="braintree-hidden braintree-heading" role="button" tabindex="0">{{edit}}</div>\n  <div data-braintree-id="choose-a-way-to-pay" class="braintree-heading">{{chooseAWayToPay}}</div>\n  <div class="braintree-placeholder">&nbsp;</div>\n\n  <div data-braintree-id="upper-container" class="braintree-upper-container">\n    <div data-braintree-id="loading-container" class="braintree-loader__container">\n      <div data-braintree-id="loading-indicator" class="braintree-loader__indicator">\n        <svg width="14" height="16" class="braintree-loader__lock">\n          <use xlink:href="#iconLockLoader"></use>\n        </svg>\n      </div>\n    </div>\n\n    <div data-braintree-id="delete-confirmation" class="braintree-delete-confirmation braintree-sheet">\n      <div data-braintree-id="delete-confirmation__message"></div>\n      <div class="braintree-delete-confirmation__button-container">\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__no" class="braintree-delete-confirmation__button">{{deleteCancelButton}}</div>\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__yes" class="braintree-delete-confirmation__button">{{deleteConfirmationButton}}</div>\n      </div>\n    </div>\n\n    <div data-braintree-id="methods" class="braintree-methods braintree-methods-initial">\n      <div data-braintree-id="methods-container"></div>\n    </div>\n\n    <div data-braintree-id="options" class="braintree-test-class braintree-options braintree-options-initial">\n      <div data-braintree-id="payment-options-container" class="braintree-options-list"></div>\n    </div>\n\n    <div data-braintree-id="sheet-container" class="braintree-sheet__container">\n      <div data-braintree-id="paypal" class="braintree-paypal braintree-sheet">\n        <div data-braintree-id="paypal-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPal"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="paypalCredit" class="braintree-paypalCredit braintree-sheet">\n        <div data-braintree-id="paypal-credit-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPalCredit"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal Credit}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-credit-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="applePay" class="braintree-applePay braintree-sheet">\n        <div data-braintree-id="apple-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoApplePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Apple Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="apple-pay-button" class="braintree-sheet__button--apple-pay apple-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="googlePay" class="braintree-googlePay braintree-sheet">\n        <div data-braintree-id="google-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoGooglePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Google Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="google-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="venmo" class="braintree-venmo braintree-sheet">\n        <div data-braintree-id="venmo-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoVenmo"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Venmo}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <svg data-braintree-id="venmo-button" class="braintree-sheet__button--venmo">\n            <use xlink:href="#buttonVenmo"></use>\n          </svg>\n        </div>\n      </div>\n      <div data-braintree-id="card" class="braintree-card braintree-form braintree-sheet">\n        <div data-braintree-id="card-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24" class="braintree-icon--bordered" aria-hidden="true">\n                <use xlink:href="#iconCardFront"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__text">{{payWithCard}}</div>\n          </div>\n          <div data-braintree-id="card-view-icons" class="braintree-sheet__icons"></div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--form">\n          <div data-braintree-id="cardholder-name-field-group" class="braintree-form__field-group">\n            <label for="braintree__card-view-input__cardholder-name">\n              <div class="braintree-form__label">{{cardholderNameLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-cardholder-name braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="cardholder-name-field-error" class="braintree-form__field-error" role="alert"></div>\n          </div>\n          <div data-braintree-id="number-field-group" class="braintree-form__field-group">\n            <label>\n              <div class="braintree-form__label">{{cardNumberLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-number braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div data-braintree-id="card-number-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                    <svg width="40" height="24" class="braintree-icon--bordered">\n                    <use data-braintree-id="card-number-icon-svg" xlink:href="#iconCardFront"></use>\n                    </svg>\n                  </div>\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="number-field-error" class="braintree-form__field-error" role="alert"></div>\n          </div>\n\n          <div class="braintree-form__flexible-fields">\n            <div data-braintree-id="expiration-date-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{expirationDateLabel}}\n                  <span class="braintree-form__descriptor">{{expirationDateLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-expiration"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="expiration-date-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n\n            <div data-braintree-id="cvv-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{cvvLabel}}\n                  <span data-braintree-id="cvv-label-descriptor" class="braintree-form__descriptor">{{cvvThreeDigitLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-cvv"></div>\n                  <div class="braintree-form__icon-container">\n                    <div data-braintree-id="cvv-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                      <svg width="40" height="24" class="braintree-icon--bordered">\n                      <use data-braintree-id="cvv-icon-svg" xlink:href="#iconCVVBack"></use>\n                      </svg>\n                    </div>\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="cvv-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n            <div data-braintree-id="postal-code-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{postalCodeLabel}}</div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-postal-code"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="postal-code-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n            <div class="braintree-form__notice-of-collection">\n              <a href="https://www.paypal.com/us/legalhub/home" target="_blank" rel="noopener noreferrer">{{noticeOfCollection}}</a>\n            </div>\n          </div>\n\n          <div data-braintree-id="save-card-field-group" class="braintree-form__field-group braintree-hidden">\n            <label>\n              <div class="braintree-form__field braintree-form__checkbox">\n                <input type="checkbox" data-braintree-id="save-card-input" checked />\n              </div>\n              <div class="braintree-form__label">{{saveCardLabel}}</div>\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div data-braintree-id="sheet-error" class="braintree-sheet__error">\n        <div class="braintree-form__icon braintree-sheet__error-icon">\n          <svg width="24" height="24">\n            <use xlink:href="#iconError"></use>\n          </svg>\n        </div>\n        <div data-braintree-id="sheet-error-text" class="braintree-sheet__error-text"></div>\n      </div>\n    </div>\n  </div>\n\n  <div data-braintree-id="lower-container" class="braintree-test-class braintree-options braintree-hidden">\n    <div data-braintree-id="other-ways-to-pay" class="braintree-heading">{{otherWaysToPay}}</div>\n  </div>\n\n  <div data-braintree-id="toggle" class="braintree-large-button braintree-toggle braintree-hidden" tabindex="0" role="button">\n    <span>{{chooseAnotherWayToPay}}</span>\n  </div>\n</div>\n<div data-braintree-id="disable-wrapper" class="braintree-dropin__disabled braintree-hidden"></div>\n'), o._dropinWrapper.innerHTML = '<svg data-braintree-id="svgs">\n  <defs>\n    <symbol id="icon-visa" viewBox="0 0 44 14.2">\n      <title>Visa</title>\n      <path fill="#1434CB" d="M16.8,0.2L11,13.9H7.3L4.5,3C4.3,2.3,4.2,2.1,3.6,1.8C2.8,1.3,1.4,0.9,0.1,0.6l0.1-0.4h6   c0.8,0,1.5,0.5,1.6,1.4l1.5,7.9L13,0.2H16.8z M31.4,9.4c0-3.6-5-3.8-5-5.4c0-0.5,0.5-1,1.5-1.1c0.5-0.1,1.9-0.1,3.5,0.6L32,0.6   C31.2,0.3,30.1,0,28.7,0c-3.5,0-6,1.9-6,4.5c0,2,1.8,3.1,3.1,3.7c1.4,0.7,1.8,1.1,1.8,1.7c0,0.9-1.1,1.3-2.1,1.3   c-1.8,0-2.8-0.5-3.6-0.9l-0.6,3c0.8,0.4,2.3,0.7,3.9,0.7C28.9,14.1,31.4,12.3,31.4,9.4 M40.6,13.9h3.3L41,0.2h-3   c-0.7,0-1.3,0.4-1.5,1l-5.3,12.7h3.7l0.7-2h4.5L40.6,13.9z M36.7,9.1l1.9-5.1l1.1,5.1H36.7z M21.8,0.2l-2.9,13.7h-3.5l2.9-13.7   H21.8z"/>\n    </symbol>\n\n    <symbol id="icon-master-card" viewBox="0 0 40 24">\n      <title>MasterCard</title>\n      <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" fill="#FFF" />\n      <path d="M11.085 22.2v-1.36c0-.522-.318-.863-.864-.863-.272 0-.568.09-.773.386-.16-.25-.386-.386-.727-.386-.228 0-.455.068-.637.318v-.272h-.478V22.2h.478v-1.202c0-.386.204-.567.523-.567.318 0 .478.205.478.568V22.2h.477v-1.202c0-.386.23-.567.524-.567.32 0 .478.205.478.568V22.2h.523zm7.075-2.177h-.774v-.658h-.478v.658h-.432v.43h.432v.998c0 .5.205.795.75.795.206 0 .433-.068.592-.16l-.136-.407c-.136.09-.296.114-.41.114-.227 0-.318-.137-.318-.363v-.976h.774v-.43zm4.048-.046c-.273 0-.454.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .204.023.295.046l.137-.454c-.09-.023-.228-.023-.32-.023zm-6.118.227c-.228-.16-.546-.227-.888-.227-.546 0-.91.272-.91.703 0 .363.274.567.75.635l.23.023c.25.045.385.113.385.227 0 .16-.182.272-.5.272-.32 0-.57-.113-.728-.227l-.228.363c.25.18.59.272.932.272.637 0 1-.295 1-.703 0-.385-.295-.59-.75-.658l-.227-.022c-.205-.023-.364-.068-.364-.204 0-.16.16-.25.41-.25.272 0 .545.114.682.182l.205-.386zm12.692-.227c-.273 0-.455.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .203.023.294.046L29.1 20c-.09-.023-.227-.023-.318-.023zm-6.096 1.134c0 .66.455 1.135 1.16 1.135.32 0 .546-.068.774-.25l-.228-.385c-.182.136-.364.204-.57.204-.385 0-.658-.272-.658-.703 0-.407.273-.68.66-.702.204 0 .386.068.568.204l.228-.385c-.228-.182-.455-.25-.774-.25-.705 0-1.16.477-1.16 1.134zm4.413 0v-1.087h-.48v.272c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.317 0 .545-.113.68-.317v.272h.48v-1.09zm-1.753 0c0-.384.25-.702.66-.702.387 0 .66.295.66.703 0 .387-.273.704-.66.704-.41-.022-.66-.317-.66-.703zm-5.71-1.133c-.636 0-1.09.454-1.09 1.134 0 .682.454 1.135 1.114 1.135.32 0 .638-.09.888-.295l-.228-.34c-.18.136-.41.227-.636.227-.296 0-.592-.136-.66-.522h1.615v-.18c.022-.704-.388-1.158-1.002-1.158zm0 .41c.297 0 .502.18.547.52h-1.137c.045-.295.25-.52.59-.52zm11.852.724v-1.95h-.48v1.135c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.68-.317v.272h.48v-1.09zm-1.752 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703zm-15.97 0v-1.087h-.476v.272c-.16-.204-.387-.318-.683-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.682-.317v.272h.477v-1.09zm-1.773 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703z" fill="#000" />\n      <path fill="#FF5F00" d="M23.095 3.49H15.93v12.836h7.165" />\n      <path d="M16.382 9.91c0-2.61 1.23-4.922 3.117-6.42-1.39-1.087-3.14-1.745-5.05-1.745-4.528 0-8.19 3.65-8.19 8.164 0 4.51 3.662 8.162 8.19 8.162 1.91 0 3.66-.657 5.05-1.746-1.89-1.474-3.118-3.81-3.118-6.417z" fill="#EB001B" />\n      <path d="M32.76 9.91c0 4.51-3.664 8.162-8.19 8.162-1.91 0-3.662-.657-5.05-1.746 1.91-1.496 3.116-3.81 3.116-6.417 0-2.61-1.228-4.922-3.116-6.42 1.388-1.087 3.14-1.745 5.05-1.745 4.526 0 8.19 3.674 8.19 8.164z" fill="#F79E1B" />\n    </symbol>\n\n    <symbol id="icon-unionpay" viewBox="0 0 40 24">\n      <title>Union Pay</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.877 2h8.126c1.135 0 1.84.93 1.575 2.077l-3.783 16.35c-.267 1.142-1.403 2.073-2.538 2.073H5.13c-1.134 0-1.84-.93-1.574-2.073L7.34 4.076C7.607 2.93 8.74 2 9.878 2z" fill="#E21836" />\n      <path d="M17.325 2h9.345c1.134 0 .623.93.356 2.077l-3.783 16.35c-.265 1.142-.182 2.073-1.32 2.073H12.58c-1.137 0-1.84-.93-1.574-2.073l3.783-16.35C15.056 2.93 16.19 2 17.324 2z" fill="#00447B" />\n      <path d="M26.3 2h8.126c1.136 0 1.84.93 1.575 2.077l-3.782 16.35c-.266 1.142-1.402 2.073-2.54 2.073h-8.122c-1.137 0-1.842-.93-1.574-2.073l3.78-16.35C24.03 2.93 25.166 2 26.303 2z" fill="#007B84" />\n      <path d="M27.633 14.072l-.99 3.3h.266l-.208.68h-.266l-.062.212h-.942l.064-.21H23.58l.193-.632h.194l1.005-3.35.2-.676h.962l-.1.34s.255-.184.498-.248c.242-.064 1.636-.088 1.636-.088l-.206.672h-.33zm-1.695 0l-.254.843s.285-.13.44-.172c.16-.04.395-.057.395-.057l.182-.614h-.764zm-.38 1.262l-.263.877s.29-.15.447-.196c.157-.037.396-.066.396-.066l.185-.614h-.766zm-.614 2.046h.767l.222-.74h-.765l-.223.74z" fill="#FEFEFE" />\n      <path d="M28.055 13.4h1.027l.01.385c-.005.065.05.096.17.096h.208l-.19.637h-.555c-.48.035-.662-.172-.65-.406l-.02-.71zM28.193 16.415h-.978l.167-.566H28.5l.16-.517h-1.104l.19-.638h3.072l-.193.638h-1.03l-.16.516h1.032l-.17.565H29.18l-.2.24h.454l.11.712c.013.07.014.116.036.147.023.026.158.038.238.038h.137l-.21.694h-.348c-.054 0-.133-.004-.243-.01-.105-.008-.18-.07-.25-.105-.064-.03-.16-.11-.182-.24l-.11-.712-.507.7c-.162.222-.38.39-.748.39h-.712l.186-.62h.273c.078 0 .15-.03.2-.056.052-.023.098-.05.15-.126l.74-1.05zM17.478 14.867h2.59l-.19.622H18.84l-.16.53h1.06l-.194.64h-1.06l-.256.863c-.03.095.25.108.353.108l.53-.072-.212.71h-1.193c-.096 0-.168-.013-.272-.037-.1-.023-.145-.07-.19-.138-.043-.07-.11-.128-.064-.278l.343-1.143h-.588l.195-.65h.592l.156-.53h-.588l.188-.623zM19.223 13.75h1.063l-.194.65H18.64l-.157.136c-.067.066-.09.038-.18.087-.08.04-.254.123-.477.123h-.466l.19-.625h.14c.118 0 .198-.01.238-.036.046-.03.098-.096.157-.203l.267-.487h1.057l-.187.356zM20.74 13.4h.905l-.132.46s.286-.23.487-.313c.2-.075.65-.143.65-.143l1.464-.007-.498 1.672c-.085.286-.183.472-.244.555-.055.087-.12.16-.248.23-.124.066-.236.104-.34.115-.096.007-.244.01-.45.012h-1.41l-.4 1.324c-.037.13-.055.194-.03.23.02.03.068.066.135.066l.62-.06-.21.726h-.698c-.22 0-.383-.004-.495-.013-.108-.01-.22 0-.295-.058-.065-.058-.164-.133-.162-.21.007-.073.037-.192.082-.356l1.268-4.23zm1.922 1.69h-1.484l-.09.3h1.283c.152-.018.184.004.196-.003l.096-.297zm-1.402-.272s.29-.266.786-.353c.112-.022.82-.015.82-.015l.106-.357h-1.496l-.216.725z" fill="#FEFEFE" />\n      <path d="M23.382 16.1l-.084.402c-.036.125-.067.22-.16.302-.1.084-.216.172-.488.172l-.502.02-.004.455c-.006.13.028.117.048.138.024.022.045.032.067.04l.157-.008.48-.028-.198.663h-.552c-.385 0-.67-.008-.765-.084-.092-.057-.105-.132-.103-.26l.035-1.77h.88l-.013.362h.212c.072 0 .12-.007.15-.026.027-.02.047-.048.06-.093l.087-.282h.692zM10.84 7.222c-.032.143-.596 2.763-.598 2.764-.12.53-.21.91-.508 1.152-.172.14-.37.21-.6.21-.37 0-.587-.185-.624-.537l-.007-.12.113-.712s.593-2.388.7-2.703c.002-.017.005-.026.007-.035-1.152.01-1.357 0-1.37-.018-.007.024-.037.173-.037.173l-.605 2.688-.05.23-.1.746c0 .22.042.4.13.553.275.485 1.06.557 1.504.557.573 0 1.11-.123 1.47-.345.63-.375.797-.962.944-1.48l.067-.267s.61-2.48.716-2.803c.003-.017.006-.026.01-.035-.835.01-1.08 0-1.16-.018zM14.21 12.144c-.407-.006-.55-.006-1.03.018l-.018-.036c.042-.182.087-.363.127-.548l.06-.25c.086-.39.173-.843.184-.98.007-.084.036-.29-.2-.29-.1 0-.203.048-.307.096-.058.207-.174.79-.23 1.055-.118.558-.126.62-.178.897l-.036.037c-.42-.006-.566-.006-1.05.018l-.024-.04c.08-.332.162-.668.24-.998.203-.9.25-1.245.307-1.702l.04-.028c.47-.067.585-.08 1.097-.185l.043.047-.077.287c.086-.052.168-.104.257-.15.242-.12.51-.155.658-.155.223 0 .468.062.57.323.098.232.034.52-.094 1.084l-.066.287c-.13.627-.152.743-.225 1.174l-.05.036zM15.87 12.144c-.245 0-.405-.006-.56 0-.153 0-.303.008-.532.018l-.013-.02-.015-.02c.062-.238.097-.322.128-.406.03-.084.06-.17.115-.41.072-.315.116-.535.147-.728.033-.187.052-.346.075-.53l.02-.014.02-.018c.244-.036.4-.057.56-.082.16-.024.32-.055.574-.103l.008.023.008.022c-.047.195-.094.39-.14.588-.047.197-.094.392-.137.587-.093.414-.13.57-.152.68-.02.105-.026.163-.063.377l-.022.02-.023.017zM19.542 10.728c.143-.633.033-.928-.108-1.11-.213-.273-.59-.36-.978-.36-.235 0-.793.023-1.23.43-.312.29-.458.687-.546 1.066-.088.387-.19 1.086.447 1.344.198.085.48.108.662.108.466 0 .945-.13 1.304-.513.278-.312.405-.775.448-.965zm-1.07-.046c-.02.106-.113.503-.24.673-.086.123-.19.198-.305.198-.033 0-.235 0-.238-.3-.003-.15.027-.304.063-.47.108-.478.236-.88.56-.88.255 0 .27.298.16.78zM29.536 12.187c-.493-.004-.635-.004-1.09.015l-.03-.037c.124-.472.248-.943.358-1.42.142-.62.175-.882.223-1.244l.037-.03c.49-.07.625-.09 1.135-.186l.015.044c-.093.388-.186.777-.275 1.166-.19.816-.258 1.23-.33 1.658l-.044.035z" fill="#FEFEFE" />\n      <path d="M29.77 10.784c.144-.63-.432-.056-.525-.264-.14-.323-.052-.98-.62-1.2-.22-.085-.732.025-1.17.428-.31.29-.458.683-.544 1.062-.088.38-.19 1.078.444 1.328.2.085.384.11.567.103.638-.034 1.124-1.002 1.483-1.386.277-.303.326.115.368-.07zm-.974-.047c-.024.1-.117.503-.244.67-.083.117-.283.192-.397.192-.032 0-.232 0-.24-.3 0-.146.03-.3.067-.467.11-.47.235-.87.56-.87.254 0 .363.293.254.774zM22.332 12.144c-.41-.006-.55-.006-1.03.018l-.018-.036c.04-.182.087-.363.13-.548l.057-.25c.09-.39.176-.843.186-.98.008-.084.036-.29-.198-.29-.1 0-.203.048-.308.096-.057.207-.175.79-.232 1.055-.115.558-.124.62-.176.897l-.035.037c-.42-.006-.566-.006-1.05.018l-.022-.04.238-.998c.203-.9.25-1.245.307-1.702l.038-.028c.472-.067.587-.08 1.098-.185l.04.047-.073.287c.084-.052.17-.104.257-.15.24-.12.51-.155.655-.155.224 0 .47.062.575.323.095.232.03.52-.098 1.084l-.065.287c-.133.627-.154.743-.225 1.174l-.05.036zM26.32 8.756c-.07.326-.282.603-.554.736-.225.114-.498.123-.78.123h-.183l.013-.074.336-1.468.01-.076.007-.058.132.015.71.062c.275.105.388.38.31.74zM25.88 7.22l-.34.003c-.883.01-1.238.006-1.383-.012l-.037.182-.315 1.478-.793 3.288c.77-.01 1.088-.01 1.22.004l.21-1.024s.153-.644.163-.667c0 0 .047-.066.096-.092h.07c.665 0 1.417 0 2.005-.437.4-.298.675-.74.797-1.274.03-.132.054-.29.054-.446 0-.205-.04-.41-.16-.568-.3-.423-.896-.43-1.588-.433zM33.572 9.28l-.04-.043c-.502.1-.594.118-1.058.18l-.034.034-.005.023-.003-.007c-.345.803-.334.63-.615 1.26-.003-.03-.003-.048-.004-.077l-.07-1.37-.044-.043c-.53.1-.542.118-1.03.18l-.04.034-.006.056.003.007c.06.315.047.244.108.738.03.244.065.49.093.73.05.4.077.6.134 1.21-.328.55-.408.757-.722 1.238l.017.044c.478-.018.587-.018.94-.018l.08-.088c.265-.578 2.295-4.085 2.295-4.085zM16.318 9.62c.27-.19.304-.45.076-.586-.23-.137-.634-.094-.906.095-.273.186-.304.45-.075.586.228.134.633.094.905-.096z" fill="#FEFEFE" />\n      <path d="M31.238 13.415l-.397.684c-.124.232-.357.407-.728.41l-.632-.01.184-.618h.124c.064 0 .11-.004.148-.022.03-.01.054-.035.08-.072l.233-.373h.988z" fill="#FEFEFE" />\n    </symbol>\n\n    <symbol id="icon-american-express" viewBox="0 0 40 24">\n      <title>American Express</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path fill="#1478BE" d="M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z" />\n      <path d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z" fill="#1478BE" />\n    </symbol>\n\n    <symbol id="icon-jcb" viewBox="0 0 40 24">\n      <title>JCB</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M33.273 2.01h.013v17.062c-.004 1.078-.513 2.103-1.372 2.746-.63.47-1.366.67-2.14.67-.437 0-4.833.026-4.855 0-.01-.01 0-.07 0-.082v-6.82c0-.04.004-.064.033-.064h5.253c.867 0 1.344-.257 1.692-.61.44-.448.574-1.162.294-1.732-.24-.488-.736-.78-1.244-.913-.158-.04-.32-.068-.483-.083-.01 0-.064 0-.07-.006-.03-.034.023-.04.038-.046.102-.033.215-.042.32-.073.532-.164.993-.547 1.137-1.105.15-.577-.05-1.194-.524-1.552-.34-.257-.768-.376-1.187-.413-.43-.038-4.774-.022-5.21-.022-.072 0-.05-.02-.05-.09V5.63c0-.31.01-.616.073-.92.126-.592.41-1.144.815-1.59.558-.615 1.337-1.01 2.16-1.093.478-.048 4.89-.017 5.305-.017zm-4.06 8.616c.06.272-.01.567-.204.77-.173.176-.407.25-.648.253-.195.003-1.725 0-1.788 0l.003-1.645c.012-.027.02-.018.06-.018.097 0 1.713-.004 1.823.005.232.02.45.12.598.306.076.096.128.208.155.328zm-2.636 2.038h1.944c.242.002.47.063.652.228.226.204.327.515.283.815-.04.263-.194.5-.422.634-.187.112-.39.125-.6.125h-1.857v-1.8z" fill="#53B230" />\n      <path d="M6.574 13.89c-.06-.03-.06-.018-.07-.06-.006-.026-.005-8.365.003-8.558.04-.95.487-1.857 1.21-2.47.517-.434 1.16-.71 1.83-.778.396-.04.803-.018 1.2-.018.69 0 4.11-.013 4.12 0 .008.008.002 16.758 0 17.074-.003.956-.403 1.878-1.105 2.523-.506.465-1.15.77-1.83.86-.41.056-5.02.032-5.363.032-.066 0-.054.013-.066-.024-.01-.025 0-7 0-7.17.66.178 1.35.28 2.03.348.662.067 1.33.093 1.993.062.93-.044 1.947-.192 2.712-.762.32-.238.574-.553.73-.922.148-.353.2-.736.2-1.117 0-.348.006-3.93-.016-3.942-.023-.014-2.885-.015-2.9.012-.012.022 0 3.87 0 3.95-.003.47-.16.933-.514 1.252-.468.42-1.11.47-1.707.423-.687-.055-1.357-.245-1.993-.508-.157-.065-.312-.135-.466-.208z" fill="#006CB9" />\n      <path d="M15.95 9.835c-.025.02-.05.04-.072.06V6.05c0-.295-.012-.594.01-.888.12-1.593 1.373-2.923 2.944-3.126.382-.05 5.397-.042 5.41-.026.01.01 0 .062 0 .074v16.957c0 1.304-.725 2.52-1.89 3.1-.504.25-1.045.35-1.605.35-.322 0-4.757.015-4.834 0-.05-.01-.023.01-.035-.02-.007-.022 0-6.548 0-7.44v-.422c.554.48 1.256.75 1.96.908.536.12 1.084.176 1.63.196.537.02 1.076.01 1.61-.037.546-.05 1.088-.136 1.625-.244.137-.028.274-.057.41-.09.033-.006.17-.017.187-.044.013-.02 0-.097 0-.12v-1.324c-.582.292-1.19.525-1.83.652-.778.155-1.64.198-2.385-.123-.752-.326-1.2-1.024-1.274-1.837-.076-.837.173-1.716.883-2.212.736-.513 1.7-.517 2.553-.38.634.1 1.245.305 1.825.58.078.037.154.075.23.113V9.322c0-.02.013-.1 0-.118-.02-.028-.152-.038-.188-.046-.066-.016-.133-.03-.2-.045C22.38 9 21.84 8.908 21.3 8.85c-.533-.06-1.068-.077-1.603-.066-.542.01-1.086.054-1.62.154-.662.125-1.32.337-1.883.716-.085.056-.167.117-.245.18z" fill="#E20138" />\n    </symbol>\n\n    <symbol id="icon-discover" viewBox="0 0 40 24">\n      <title>Discover</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M38.995 11.75S27.522 20.1 6.5 23.5h31.495c.552 0 1-.448 1-1V11.75z" fill="#F48024" />\n      <path d="M5.332 11.758c-.338.305-.776.438-1.47.438h-.29V8.55h.29c.694 0 1.115.124 1.47.446.37.33.595.844.595 1.372 0 .53-.224 1.06-.595 1.39zM4.077 7.615H2.5v5.515h1.57c.833 0 1.435-.197 1.963-.637.63-.52 1-1.305 1-2.116 0-1.628-1.214-2.762-2.956-2.762zM7.53 13.13h1.074V7.616H7.53M11.227 9.732c-.645-.24-.834-.397-.834-.695 0-.347.338-.61.8-.61.322 0 .587.132.867.446l.562-.737c-.462-.405-1.015-.612-1.618-.612-.975 0-1.718.678-1.718 1.58 0 .76.346 1.15 1.355 1.513.42.148.635.247.743.314.215.14.322.34.322.57 0 .448-.354.78-.834.78-.51 0-.924-.258-1.17-.736l-.695.67c.495.726 1.09 1.05 1.907 1.05 1.116 0 1.9-.745 1.9-1.812 0-.876-.363-1.273-1.585-1.72zM13.15 10.377c0 1.62 1.27 2.877 2.907 2.877.462 0 .858-.09 1.347-.32v-1.267c-.43.43-.81.604-1.297.604-1.082 0-1.85-.785-1.85-1.9 0-1.06.792-1.895 1.8-1.895.512 0 .9.183 1.347.62V7.83c-.472-.24-.86-.34-1.322-.34-1.627 0-2.932 1.283-2.932 2.887zM25.922 11.32l-1.468-3.705H23.28l2.337 5.656h.578l2.38-5.655H27.41M29.06 13.13h3.046v-.934h-1.973v-1.488h1.9v-.934h-1.9V8.55h1.973v-.935H29.06M34.207 10.154h-.314v-1.67h.33c.67 0 1.034.28 1.034.818 0 .554-.364.852-1.05.852zm2.155-.91c0-1.033-.71-1.628-1.95-1.628H32.82v5.514h1.073v-2.215h.14l1.487 2.215h1.32l-1.733-2.323c.81-.165 1.255-.72 1.255-1.563z" fill="#221F20" />\n      <path d="M23.6 10.377c0 1.62-1.31 2.93-2.927 2.93-1.617.002-2.928-1.31-2.928-2.93s1.31-2.932 2.928-2.932c1.618 0 2.928 1.312 2.928 2.932z" fill="#F48024" />\n    </symbol>\n\n    <symbol id="icon-diners-club" viewBox="0 0 40 24">\n      <title>Diners Club</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.02 11.83c0-5.456 4.54-9.88 10.14-9.88 5.6 0 10.139 4.424 10.139 9.88-.002 5.456-4.54 9.88-10.14 9.88-5.6 0-10.14-4.424-10.14-9.88z" fill="#FEFEFE" />\n      <path fill="#FFF" d="M32.522 22H8.5V1.5h24.022" />\n      <path d="M25.02 11.732c-.003-2.534-1.607-4.695-3.868-5.55v11.102c2.26-.857 3.865-3.017 3.87-5.552zm-8.182 5.55V6.18c-2.26.86-3.86 3.017-3.867 5.55.007 2.533 1.61 4.69 3.868 5.55zm2.158-14.934c-5.25.002-9.503 4.202-9.504 9.384 0 5.182 4.254 9.38 9.504 9.382 5.25 0 9.504-4.2 9.505-9.382 0-5.182-4.254-9.382-9.504-9.384zM18.973 22C13.228 22.027 8.5 17.432 8.5 11.84 8.5 5.726 13.228 1.5 18.973 1.5h2.692c5.677 0 10.857 4.225 10.857 10.34 0 5.59-5.18 10.16-10.857 10.16h-2.692z" fill="#004A97" />\n    </symbol>\n\n    <symbol id="icon-maestro" viewBox="0 0 40 24">\n      <title>Maestro</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M14.67 22.39V21c.022-.465-.303-.86-.767-.882h-.116c-.3-.023-.603.14-.788.394-.164-.255-.442-.417-.743-.394-.256-.023-.51.116-.65.324v-.278h-.487v2.203h.487v-1.183c-.046-.278.162-.533.44-.58h.094c.325 0 .488.21.488.58v1.23h.487v-1.23c-.047-.278.162-.556.44-.58h.093c.325 0 .487.21.487.58v1.23l.534-.024zm2.712-1.09v-1.113h-.487v.28c-.162-.21-.417-.326-.695-.326-.65 0-1.16.51-1.16 1.16 0 .65.51 1.16 1.16 1.16.278 0 .533-.117.695-.325v.278h.487V21.3zm-1.786 0c.024-.37.348-.65.72-.626.37.023.65.348.626.72-.023.347-.302.625-.673.625-.372 0-.674-.28-.674-.65-.023-.047-.023-.047 0-.07zm12.085-1.16c.163 0 .325.024.465.094.14.046.278.14.37.255.117.115.186.23.256.37.117.3.117.626 0 .927-.046.14-.138.255-.254.37-.116.117-.232.186-.37.256-.303.116-.65.116-.952 0-.14-.046-.28-.14-.37-.255-.118-.116-.187-.232-.257-.37-.116-.302-.116-.627 0-.928.047-.14.14-.255.256-.37.115-.117.23-.187.37-.256.163-.07.325-.116.488-.093zm0 .465c-.092 0-.185.023-.278.046-.092.024-.162.094-.232.14-.07.07-.116.14-.14.232-.068.185-.068.394 0 .58.024.092.094.162.14.23.07.07.14.117.232.14.186.07.37.07.557 0 .092-.023.16-.092.23-.14.07-.068.117-.138.14-.23.07-.186.07-.395 0-.58-.023-.093-.093-.162-.14-.232-.07-.07-.138-.116-.23-.14-.094-.045-.187-.07-.28-.045zm-7.677.695c0-.695-.44-1.16-1.043-1.16-.65 0-1.16.534-1.137 1.183.023.65.534 1.16 1.183 1.136.325 0 .65-.093.905-.302l-.23-.348c-.187.14-.42.232-.65.232-.326.023-.627-.21-.673-.533h1.646v-.21zm-1.646-.21c.023-.3.278-.532.58-.532.3 0 .556.232.556.533h-1.136zm3.664-.346c-.207-.116-.44-.186-.695-.186-.255 0-.417.093-.417.255 0 .163.162.186.37.21l.233.022c.488.07.766.278.766.672 0 .395-.37.72-1.02.72-.348 0-.673-.094-.95-.28l.23-.37c.21.162.465.232.743.232.324 0 .51-.094.51-.28 0-.115-.117-.185-.395-.23l-.232-.024c-.487-.07-.765-.302-.765-.65 0-.44.37-.718.927-.718.325 0 .627.07.905.232l-.21.394zm2.32-.116h-.788v.997c0 .23.07.37.325.37.14 0 .3-.046.417-.115l.14.417c-.186.116-.395.162-.604.162-.58 0-.765-.302-.765-.812v-1.02h-.44v-.44h.44v-.673h.487v.672h.79v.44zm1.67-.51c.117 0 .233.023.35.07l-.14.463c-.093-.045-.21-.045-.302-.045-.325 0-.464.208-.464.58v1.25h-.487v-2.2h.487v.277c.116-.255.325-.37.557-.394z" fill="#000" />\n      <path fill="#7673C0" d="M23.64 3.287h-7.305V16.41h7.306" />\n      <path d="M16.8 9.848c0-2.55 1.183-4.985 3.2-6.56C16.384.435 11.12 1.06 8.29 4.7 5.435 8.32 6.06 13.58 9.703 16.41c3.038 2.387 7.283 2.387 10.32 0-2.04-1.578-3.223-3.99-3.223-6.562z" fill="#EB001B" />\n      <path d="M33.5 9.848c0 4.613-3.735 8.346-8.35 8.346-1.88 0-3.69-.626-5.15-1.785 3.618-2.83 4.245-8.092 1.415-11.71-.418-.532-.882-.996-1.415-1.413C23.618.437 28.883 1.06 31.736 4.7 32.873 6.163 33.5 7.994 33.5 9.85z" fill="#00A1DF" />\n    </symbol>\n\n    <symbol id="icon-elo" viewBox="0 0 48 29">\n      <title>Elo</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hiper" viewBox="0 0 48 29">\n      <title>Hiper</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hipercard" viewBox="0 0 48 29">\n      <title>Hipercard</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="logoPayPal" viewBox="0 0 48 29">\n      <title>PayPal Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" />\n      <path d="M31.216 16.4c.394-.7.69-1.5.886-2.4.196-.8.196-1.6.1-2.2-.1-.7-.396-1.2-.79-1.7-.195-.3-.59-.5-.885-.7.1-.8.1-1.5 0-2.1-.1-.6-.394-1.1-.886-1.6-.885-1-2.56-1.6-4.922-1.6h-6.4c-.492 0-.787.3-.886.8l-2.658 17.2c0 .2 0 .3.1.4.097.1.294.2.393.2h4.036l-.295 1.8c0 .1 0 .3.1.4.098.1.195.2.393.2h3.35c.393 0 .688-.3.786-.7v-.2l.59-4.1v-.2c.1-.4.395-.7.788-.7h.59c1.675 0 3.152-.4 4.137-1.1.59-.5 1.083-1 1.478-1.7h-.002z" fill="#263B80" />\n      <path d="M21.364 9.4c0-.3.196-.5.492-.6.098-.1.196-.1.394-.1h5.02c.592 0 1.183 0 1.675.1.1 0 .295.1.394.1.098 0 .294.1.393.1.1 0 .1 0 .197.102.295.1.492.2.69.3.295-1.6 0-2.7-.887-3.8-.985-1.1-2.658-1.6-4.923-1.6h-6.4c-.49 0-.885.3-.885.8l-2.758 17.3c-.098.3.197.6.59.6h3.94l.985-6.4 1.083-6.9z" fill="#263B80" />\n      <path d="M30.523 9.4c0 .1 0 .3-.098.4-.887 4.4-3.742 5.9-7.484 5.9h-1.87c-.492 0-.787.3-.886.8l-.985 6.2-.296 1.8c0 .3.196.6.492.6h3.348c.394 0 .69-.3.787-.7v-.2l.592-4.1v-.2c.1-.4.394-.7.787-.7h.69c3.248 0 5.808-1.3 6.497-5.2.296-1.6.197-3-.69-3.9-.196-.3-.49-.5-.885-.7z" fill="#159BD7" />\n      <path d="M29.635 9c-.098 0-.295-.1-.394-.1-.098 0-.294-.1-.393-.1-.492-.102-1.083-.102-1.673-.102h-5.022c-.1 0-.197 0-.394.1-.198.1-.394.3-.492.6l-1.083 6.9v.2c.1-.5.492-.8.886-.8h1.87c3.742 0 6.598-1.5 7.484-5.9 0-.1 0-.3.098-.4-.196-.1-.492-.2-.69-.3 0-.1-.098-.1-.196-.1z" fill="#232C65" />\n    </symbol>\n\n    <symbol id="logoPayPalCredit" viewBox="0 0 48 29">\n      <title>PayPal Credit Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" fill-rule="nonzero" />\n      <path d="M27.44 21.6h.518c1.377 0 2.67-.754 2.953-2.484.248-1.588-.658-2.482-2.14-2.482h-.38c-.093 0-.172.067-.187.16l-.763 4.805zm-1.254-6.646c.024-.158.16-.273.32-.273h2.993c2.47 0 4.2 1.942 3.81 4.436-.4 2.495-2.752 4.436-5.21 4.436h-3.05c-.116 0-.205-.104-.187-.218l1.323-8.38zM22.308 16.907l-.192 1.21h2.38c.116 0 .204.103.186.217l-.23 1.462c-.023.157-.16.273-.318.273h-2.048c-.16 0-.294.114-.32.27l-.203 1.26h2.52c.117 0 .205.102.187.217l-.228 1.46c-.025.16-.16.275-.32.275h-4.55c-.116 0-.204-.104-.186-.218l1.322-8.38c.025-.158.16-.273.32-.273h4.55c.116 0 .205.104.187.22l-.23 1.46c-.024.158-.16.274-.32.274H22.63c-.16 0-.295.115-.32.273M35.325 23.552h-1.81c-.115 0-.203-.104-.185-.218l1.322-8.38c.025-.158.16-.273.32-.273h1.81c.115 0 .203.104.185.22l-1.322 8.38c-.025.156-.16.272-.32.272M14.397 18.657h.224c.754 0 1.62-.14 1.777-1.106.158-.963-.345-1.102-1.15-1.104h-.326c-.097 0-.18.07-.197.168l-.326 2.043zm3.96 4.895h-2.37c-.102 0-.194-.058-.238-.15l-1.565-3.262h-.023l-.506 3.19c-.02.128-.13.222-.26.222h-1.86c-.116 0-.205-.104-.187-.218l1.33-8.432c.02-.128.13-.22.26-.22h3.222c1.753 0 2.953.834 2.66 2.728-.2 1.224-1.048 2.283-2.342 2.506l2.037 3.35c.076.125-.014.286-.16.286zM40.216 23.552h-1.808c-.116 0-.205-.104-.187-.218l1.06-6.7h-1.684c-.116 0-.205-.104-.187-.218l.228-1.462c.025-.157.16-.273.32-.273h5.62c.116 0 .205.104.186.22l-.228 1.46c-.025.158-.16.274-.32.274h-1.63l-1.05 6.645c-.025.156-.16.272-.32.272M11.467 17.202c-.027.164-.228.223-.345.104-.395-.405-.975-.62-1.6-.62-1.41 0-2.526 1.083-2.75 2.458-.21 1.4.588 2.41 2.022 2.41.592 0 1.22-.225 1.74-.6.144-.105.34.02.313.194l-.328 2.03c-.02.12-.108.22-.226.254-.702.207-1.24.355-1.9.355-3.823 0-4.435-3.266-4.238-4.655.553-3.894 3.712-4.786 5.65-4.678.623.034 1.182.117 1.73.323.177.067.282.25.252.436l-.32 1.99" fill="#21306F" />\n      <path d="M23.184 7.67c-.11.717-.657.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.105.123.137.305.097.557zm-.23-1.87h-1.998c-.137 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h1.024c.095 0 .177-.07.192-.164l.23-1.452c.02-.135.136-.235.273-.235h.63c1.317 0 2.076-.636 2.275-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51z" fill="#0093C7" />\n      <path d="M8.936 7.67c-.11.717-.656.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.104.123.136.305.096.557zm-.23-1.87H6.708c-.136 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h.955c.136 0 .252-.1.274-.234l.217-1.382c.02-.135.137-.235.274-.235h.633c1.316 0 2.075-.636 2.274-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51zM13.343 9.51c-.092.545-.526.912-1.08.912-.277 0-.5-.09-.642-.258-.14-.168-.193-.406-.148-.672.086-.542.527-.92 1.072-.92.27 0 .492.09.637.26.148.172.205.412.163.677zm1.334-1.863h-.957c-.082 0-.152.06-.164.14l-.042.268-.067-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.135 1.923-.092.56.038 1.097.356 1.47.29.344.708.487 1.204.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.017-.102-.06-.193-.163-.193z" fill="#21306F" />\n      <path d="M27.59 9.51c-.09.545-.525.912-1.078.912-.278 0-.5-.09-.643-.258-.142-.168-.195-.406-.15-.672.086-.542.526-.92 1.07-.92.273 0 .494.09.64.26.146.172.203.412.16.677zm1.334-1.863h-.956c-.082 0-.152.06-.164.14l-.043.268-.065-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.136 1.923-.092.56.038 1.097.355 1.47.292.344.71.487 1.205.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.015-.102-.063-.193-.166-.193z" fill="#0093C7" />\n      <path d="M19.77 7.647h-.96c-.092 0-.178.045-.23.122L17.254 9.72l-.562-1.877c-.035-.118-.143-.198-.266-.198h-.945c-.113 0-.194.112-.157.22l1.06 3.108-.997 1.404c-.078.11 0 .262.136.262h.96c.092 0 .177-.044.23-.12l3.196-4.614c.077-.11-.002-.26-.137-.26" fill="#21306F" />\n      <path d="M30.052 5.94l-.82 5.216c-.016.1.062.192.165.192h.824c.138 0 .254-.1.275-.234l.81-5.122c.015-.1-.064-.193-.166-.193h-.924c-.082 0-.15.06-.164.14" fill="#0093C7" />\n    </symbol>\n\n    <symbol id="iconCardFront" viewBox="0 0 48 29">\n      <title>Generic Card</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="iconCVVBack" viewBox="0 0 40 24">\n      <title>CVV Back</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF"/>\n      <path fill="#828282" d="M0 5h40v4H0z" />\n      <path d="M20 13.772v5.456c0 .423.37.772.82.772h13.36c.45 0 .82-.35.82-.772v-5.456c0-.423-.37-.772-.82-.772H20.82c-.45 0-.82.35-.82.772zm-1-.142c0-.9.76-1.63 1.68-1.63h13.64c.928 0 1.68.737 1.68 1.63v5.74c0 .9-.76 1.63-1.68 1.63H20.68c-.928 0-1.68-.737-1.68-1.63v-5.74z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="23.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="16.5" r="1.5" />\n    </symbol>\n\n    <symbol id="iconCVVFront" viewBox="0 0 40 24">\n      <title>CVV Front</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF" />\n      <path d="M16 5.772v5.456c0 .423.366.772.81.772h17.38c.444 0 .81-.348.81-.772V5.772C35 5.35 34.634 5 34.19 5H16.81c-.444 0-.81.348-.81.772zm-1-.142c0-.9.75-1.63 1.66-1.63h17.68c.917 0 1.66.737 1.66 1.63v5.74c0 .9-.75 1.63-1.66 1.63H16.66c-.917 0-1.66-.737-1.66-1.63V5.63z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="19.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="23.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="8.5" r="1.5" />\n      <path d="M4 7.833C4 7.47 4.476 7 4.89 7h6.22c.414 0 .89.47.89.833v3.334c0 .364-.476.833-.89.833H4.89c-.414 0-.89-.47-.89-.833V7.833zM4 18.5c0-.828.668-1.5 1.5-1.5h29c.828 0 1.5.666 1.5 1.5 0 .828-.668 1.5-1.5 1.5h-29c-.828 0-1.5-.666-1.5-1.5z" fill="#828282" />\n    </symbol>\n\n    <symbol id="iconCheck" viewBox="0 0 42 32">\n      <title>Check</title>\n      <path class="path1" d="M14.379 29.76L39.741 3.415 36.194.001l-21.815 22.79-10.86-11.17L0 15.064z" />\n    </symbol>\n\n    <symbol id="iconX" viewBox="0 0 32 32">\n      <title>X</title>\n      <path d="M29 3.54L25.46 0 14.5 10.97 3.54 0.01 0 3.54 10.96 14.5 0.01 25.46 3.54 28.99 14.5 18.04 25.46 29 28.99 25.46 18.03 14.5 29 3.54z"/>\n    </symbol>\n\n    <symbol id="iconLockLoader" viewBox="0 0 28 32">\n      <title>Lock Loader</title>\n      <path d="M6 10V8c0-4.422 3.582-8 8-8 4.41 0 8 3.582 8 8v2h-4V7.995C18 5.79 16.205 4 14 4c-2.21 0-4 1.792-4 3.995V10H6zM.997 14c-.55 0-.997.445-.997.993v16.014c0 .548.44.993.997.993h26.006c.55 0 .997-.445.997-.993V14.993c0-.548-.44-.993-.997-.993H.997z" />\n    </symbol>\n\n    <symbol id="iconError" height="24" viewBox="0 0 24 24" width="24">\n      <path d="M0 0h24v24H0z" fill="none" />\n      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />\n    </symbol>\n\n    <symbol id="logoApplePay" viewBox="0 0 165.52 105.97">\n      <title>Apple Pay Logo</title>\n      <path id="_Path_" data-name="&lt;Path&gt;" fill="#231f20" d="M150.7 0h-139a20.78 20.78 0 0 0-3.12.3 10.51 10.51 0 0 0-3 1 9.94 9.94 0 0 0-4.31 4.32 10.46 10.46 0 0 0-1 3A20.65 20.65 0 0 0 0 11.7v82.57a20.64 20.64 0 0 0 .3 3.11 10.46 10.46 0 0 0 1 3 9.94 9.94 0 0 0 4.35 4.35 10.47 10.47 0 0 0 3 1 20.94 20.94 0 0 0 3.11.27h142.06a21 21 0 0 0 3.11-.27 10.48 10.48 0 0 0 3-1 9.94 9.94 0 0 0 4.35-4.35 10.4 10.4 0 0 0 1-3 20.63 20.63 0 0 0 .27-3.11V11.69a20.64 20.64 0 0 0-.27-3.11 10.4 10.4 0 0 0-1-3 9.94 9.94 0 0 0-4.35-4.35 10.52 10.52 0 0 0-3-1 20.84 20.84 0 0 0-3.1-.23h-1.43z"/>\n      <path id="_Path_2" data-name="&lt;Path&gt;" fill="#fff" d="M150.7 3.53h3.03a17.66 17.66 0 0 1 2.58.22 7 7 0 0 1 2 .65 6.41 6.41 0 0 1 2.8 2.81 6.88 6.88 0 0 1 .64 2 17.56 17.56 0 0 1 .22 2.58v82.38a17.54 17.54 0 0 1-.22 2.59 6.85 6.85 0 0 1-.64 2 6.41 6.41 0 0 1-2.81 2.81 6.92 6.92 0 0 1-2 .65 18 18 0 0 1-2.57.22H11.79a18 18 0 0 1-2.58-.22 6.94 6.94 0 0 1-2-.65 6.41 6.41 0 0 1-2.8-2.8 6.93 6.93 0 0 1-.65-2 17.47 17.47 0 0 1-.22-2.58v-82.4a17.49 17.49 0 0 1 .22-2.59 6.92 6.92 0 0 1 .65-2 6.41 6.41 0 0 1 2.8-2.8 7 7 0 0 1 2-.65 17.63 17.63 0 0 1 2.58-.22H150.7"/>\n      <g id="_Group_" data-name="&lt;Group&gt;">\n      <g id="_Group_2" data-name="&lt;Group&gt;">\n      <path id="_Path_3" data-name="&lt;Path&gt;" class="cls-1" d="M43.51 35.77a9.15 9.15 0 0 0 2.1-6.52 9.07 9.07 0 0 0-6 3.11 8.56 8.56 0 0 0-2.16 6.27 7.57 7.57 0 0 0 6.06-2.86"/>\n      <path id="_Path_4" data-name="&lt;Path&gt;" class="cls-1" d="M45.59 39.08c-3.35-.2-6.2 1.9-7.79 1.9s-4-1.8-6.7-1.75a9.87 9.87 0 0 0-8.4 5.1c-3.6 6.2-.95 15.4 2.55 20.45 1.7 2.5 3.75 5.25 6.45 5.15s3.55-1.65 6.65-1.65 4 1.65 6.7 1.6 4.55-2.5 6.25-5a22.2 22.2 0 0 0 2.8-5.75 9.08 9.08 0 0 1-5.45-8.25A9.26 9.26 0 0 1 53 43.13a9.57 9.57 0 0 0-7.45-4"/>\n      </g>\n      <g id="_Group_3" data-name="&lt;Group&gt;">\n      <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M79 32.11c7.28 0 12.35 5 12.35 12.32S86.15 56.8 78.79 56.8h-8.06v12.82h-5.82V32.11zm-8.27 19.81h6.68c5.07 0 8-2.73 8-7.46S82.48 37 77.44 37h-6.71z"/>\n      <path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M92.76 61.85c0-4.81 3.67-7.56 10.42-8l7.25-.44v-2.06c0-3-2-4.7-5.56-4.7-2.94 0-5.07 1.51-5.51 3.82h-5.24c.16-4.86 4.73-8.4 10.92-8.4 6.65 0 11 3.48 11 8.89v18.66h-5.38v-4.5h-.13a9.59 9.59 0 0 1-8.58 4.78c-5.42 0-9.19-3.22-9.19-8.05zm17.68-2.42v-2.11l-6.47.42c-3.64.23-5.54 1.59-5.54 4s2 3.77 5.07 3.77c3.95-.05 6.94-2.57 6.94-6.08z"/>\n      <path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M121 79.65v-4.5a17.14 17.14 0 0 0 1.72.1c2.57 0 4-1.09 4.91-3.9l.52-1.66-9.88-27.29h6.08l6.86 22.15h.13l6.86-22.15h5.93l-10.21 28.67c-2.34 6.58-5 8.73-10.68 8.73a15.93 15.93 0 0 1-2.24-.15z"/>\n      </g>\n      </g>\n    </symbol>\n    <symbol id="logoGooglePay" viewbox="0 0 752 400" >\n      <g>\n        <title>Google Pay Mark</title>\n        <path d="m552.7,0l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200z" fill="#FFFFFF" id="Base_1_"/>\n        <path d="m552.7,16.2c24.7,0 48.7,4.9 71.3,14.5c21.9,9.3 41.5,22.6 58.5,39.5c16.9,16.9 30.2,36.6 39.5,58.5c9.6,22.6 14.5,46.6 14.5,71.3s-4.9,48.7 -14.5,71.3c-9.3,21.9 -22.6,41.5 -39.5,58.5c-16.9,16.9 -36.6,30.2 -58.5,39.5c-22.6,9.6 -46.6,14.5 -71.3,14.5l-352,0c-24.7,0 -48.7,-4.9 -71.3,-14.5c-21.9,-9.3 -41.5,-22.6 -58.5,-39.5c-16.9,-16.9 -30.2,-36.6 -39.5,-58.5c-9.6,-22.6 -14.5,-46.6 -14.5,-71.3s4.9,-48.7 14.5,-71.3c9.3,-21.9 22.6,-41.5 39.5,-58.5c16.9,-16.9 36.6,-30.2 58.5,-39.5c22.6,-9.6 46.6,-14.5 71.3,-14.5l352,0m0,-16.2l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200l0,0z" fill="#3C4043" id="Outline"/>\n        <g id="G_Pay_Lockup_1_">\n         <g id="Pay_Typeface_3_">\n          <path d="m359.3,214.2l0,60.5l-19.2,0l0,-149.4l50.9,0c12.9,0 23.9,4.3 32.9,12.9c9.2,8.6 13.8,19.1 13.8,31.5c0,12.7 -4.6,23.2 -13.8,31.7c-8.9,8.5 -19.9,12.7 -32.9,12.7l-31.7,0l0,0.1zm0,-70.5l0,52.1l32.1,0c7.6,0 14,-2.6 19,-7.7c5.1,-5.1 7.7,-11.3 7.7,-18.3c0,-6.9 -2.6,-13 -7.7,-18.1c-5,-5.3 -11.3,-7.9 -19,-7.9l-32.1,0l0,-0.1z" fill="#3C4043" id="Letter_p_3_"/>\n          <path d="m487.9,169.1c14.2,0 25.4,3.8 33.6,11.4c8.2,7.6 12.3,18 12.3,31.2l0,63l-18.3,0l0,-14.2l-0.8,0c-7.9,11.7 -18.5,17.5 -31.7,17.5c-11.3,0 -20.7,-3.3 -28.3,-10s-11.4,-15 -11.4,-25c0,-10.6 4,-19 12,-25.2c8,-6.3 18.7,-9.4 32,-9.4c11.4,0 20.8,2.1 28.1,6.3l0,-4.4c0,-6.7 -2.6,-12.3 -7.9,-17c-5.3,-4.7 -11.5,-7 -18.6,-7c-10.7,0 -19.2,4.5 -25.4,13.6l-16.9,-10.6c9.3,-13.5 23.1,-20.2 41.3,-20.2zm-24.8,74.2c0,5 2.1,9.2 6.4,12.5c4.2,3.3 9.2,5 14.9,5c8.1,0 15.3,-3 21.6,-9s9.5,-13 9.5,-21.1c-6,-4.7 -14.3,-7.1 -25,-7.1c-7.8,0 -14.3,1.9 -19.5,5.6c-5.3,3.9 -7.9,8.6 -7.9,14.1z" fill="#3C4043" id="Letter_a_3_"/>\n          <path d="m638.2,172.4l-64,147.2l-19.8,0l23.8,-51.5l-42.2,-95.7l20.9,0l30.4,73.4l0.4,0l29.6,-73.4l20.9,0z" fill="#3C4043" id="Letter_y_3_"/>\n         </g>\n         <g id="G_Mark_1_">\n          <path d="m282.93,202c0,-6.26 -0.56,-12.25 -1.6,-18.01l-80.48,0l0,33l46.35,0.01c-1.88,10.98 -7.93,20.34 -17.2,26.58l0,21.41l27.59,0c16.11,-14.91 25.34,-36.95 25.34,-62.99z" fill="#4285F4" id="Blue_500"/>\n          <path d="m230.01,243.58c-7.68,5.18 -17.57,8.21 -29.14,8.21c-22.35,0 -41.31,-15.06 -48.1,-35.36l-28.46,0l0,22.08c14.1,27.98 43.08,47.18 76.56,47.18c23.14,0 42.58,-7.61 56.73,-20.71l-27.59,-21.4z" fill="#34A853" id="Green_500_1_"/>\n          <path d="m150.09,200.05c0,-5.7 0.95,-11.21 2.68,-16.39l0,-22.08l-28.46,0c-5.83,11.57 -9.11,24.63 -9.11,38.47s3.29,26.9 9.11,38.47l28.46,-22.08c-1.73,-5.18 -2.68,-10.69 -2.68,-16.39z" fill="#FABB05" id="Yellow_500_1_"/>\n          <path d="m200.87,148.3c12.63,0 23.94,4.35 32.87,12.85l24.45,-24.43c-14.85,-13.83 -34.21,-22.32 -57.32,-22.32c-33.47,0 -62.46,19.2 -76.56,47.18l28.46,22.08c6.79,-20.3 25.75,-35.36 48.1,-35.36z" fill="#E94235" id="Red_500"/>\n         </g>\n        </g>\n       </g>\n    </symbol>\n\n    <symbol id="logoVenmo" viewBox="0 0 48 32">\n      <title>Venmo</title>\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="47.4074074" height="31.6049383" rx="3.16049383"/>\n        <path d="M33.1851852,10.1131555 C33.1851852,14.8373944 29.2425262,20.9745161 26.0425868,25.2839506 L18.7337285,25.2839506 L15.8024691,7.35534396 L22.202175,6.73384536 L23.7519727,19.4912014 C25.2000422,17.0781163 26.9870326,13.2859484 26.9870326,10.7005 C26.9870326,9.28531656 26.7500128,8.32139205 26.3796046,7.52770719 L32.207522,6.32098765 C32.8813847,7.45939896 33.1851852,8.63196439 33.1851852,10.1131555 Z" fill="#FFF"/>\n      </g>\n    </symbol>\n    <symbol id="buttonVenmo" viewBox="0 0 295 42">\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="295" height="42" rx="3"/>\n        <path d="M11.3250791 0C11.7902741.780434316 12 1.58428287 12 2.59970884 12 5.838396 9.27822123 10.0456806 7.06917212 13L2.02356829 13 0 .709099732 4.41797878.283033306 5.48786751 9.02879887C6.48752911 7.3745159 7.72116169 4.77480706 7.72116169 3.00236102 7.72116169 2.03218642 7.55753727 1.37137098 7.30182933.827262801L11.3250791 0 11.3250791 0zM17.5051689 5.68512193C18.333931 5.68512193 20.4203856 5.28483546 20.4203856 4.03281548 20.4203856 3.43161451 20.0177536 3.13172102 19.5432882 3.13172102 18.7131868 3.13172102 17.6238766 4.18269796 17.5051689 5.68512193L17.5051689 5.68512193zM17.4102028 8.1647385C17.4102028 9.69351403 18.2153451 10.293301 19.2827401 10.293301 20.4451012 10.293301 21.5580312 9.99340752 23.0045601 9.21725797L22.4597224 13.1234575C21.440541 13.649203 19.8521716 14 18.310433 14 14.3996547 14 13 11.49596 13 8.36552446 13 4.30815704 15.2767521 0 19.9706358 0 22.554932 0 24 1.52864698 24 3.65720949 24.0002435 7.08869546 19.8287953 8.13992948 17.4102028 8.1647385L17.4102028 8.1647385zM37 2.84753211C37 3.32189757 36.9261179 4.00994664 36.8526108 4.45959542L35.4649774 12.9998782 30.9621694 12.9998782 32.2279161 5.1711436C32.2519185 4.95879931 32.3256755 4.53131032 32.3256755 4.29412759 32.3256755 3.72466988 31.9603904 3.5825794 31.5212232 3.5825794 30.9379171 3.5825794 30.3532359 3.84326124 29.9638234 4.03356751L28.5281854 13 24 13 26.0686989.213683657 29.9878258.213683657 30.0374555 1.23425123C30.9620444.641294408 32.1795365 3.90379019e-8 33.9069526 3.90379019e-8 36.1955476-.000243475057 37 1.1387937 37 2.84753211L37 2.84753211zM51.2981937 1.39967969C52.6582977.49918987 53.9425913 0 55.7133897 0 58.1518468 0 59 1.13900518 59 2.84769558 59 3.32204771 58.9223438 4.01007745 58.8448195 4.4597136L57.3830637 12.9997565 52.6328518 12.9997565 53.9932194 5.00577861C54.0182698 4.792101 54.0708756 4.53142648 54.0708756 4.36608506 54.0708756 3.72493046 53.6854953 3.58272222 53.2224587 3.58272222 52.6325881 3.58272222 52.0429812 3.81989829 51.6052587 4.03369766L50.0914245 12.9998782 45.3423992 12.9998782 46.7027668 5.00590037C46.7278172 4.79222275 46.7788409 4.53154824 46.7788409 4.36620681 46.7788409 3.72505221 46.3933287 3.58284398 45.9318743 3.58284398 45.3153711 3.58284398 44.7000546 3.84351849 44.2893602 4.03381941L42.7740757 13 38 13 40.1814929.214042876 44.2643098.214042876 44.3925941 1.28145692C45.3423992.641763367 46.6253743.000487014507 48.3452809.000487014507 49.8344603 0 50.8094476.593061916 51.2981937 1.39967969L51.2981937 1.39967969zM67.5285327 5.39061542C67.5285327 4.29258876 67.2694573 3.54396333 66.4936812 3.54396333 64.7759775 3.54396333 64.4232531 6.76273249 64.4232531 8.4093242 64.4232531 9.65848482 64.7530184 10.4315735 65.5285529 10.4315735 67.1521242 10.4315735 67.5285327 7.03707905 67.5285327 5.39061542L67.5285327 5.39061542zM60 8.21054461C60 3.96893154 62.1170713 0 66.988027 0 70.6583423 0 72 2.29633967 72 5.46592624 72 9.65835674 69.905767 14 64.9173573 14 61.2233579 14 60 11.4294418 60 8.21054461L60 8.21054461z" transform="translate(112 14)" fill="#FFF"/>\n      </g>\n    </symbol>\n\n    <symbol id="iconClose" width="21" height="21" viewBox="0 0 21 21" overflow="visible">\n      <path d="M16 5.414L14.586 4 10 8.586 5.414 4 4 5.414 8.586 10 4 14.586 5.414 16 10 11.414 14.586 16 16 14.586 11.414 10"/>\n    </symbol>\n  </defs>\n</svg>\n' + n, l.appendChild(o._dropinWrapper), o._model = new s({
					client: o._client,
					container: l,
					componentID: o._componentID,
					merchantConfiguration: o._merchantConfiguration
				}), o._injectStylesheet(), void o._model.initialize().then((function() {
					return o._model.on("cancelInitialization", (function(t) {
						o._dropinWrapper.innerHTML = "", r.sendEvent(o._client, "load-error"), e(t)
					})), o._model.on("asyncDependenciesReady", (function() {
						o._model.hasAtLeastOneAvailablePaymentOption() ? (r.sendEvent(o._client, "appeared"), o._disableErroredPaymentMethods(), o._handleAppSwitch(), o._model.confirmDropinReady(), e(null, o)) : o._model.cancelInitialization(new a("All payment options failed to load."))
					})), g.forEach((function(e) {
						o._model.on(e, (function(t) {
							o._emit(e, t)
						}))
					})), o._setUpDependenciesAndViews()
				})).catch((function(t) {
					o.teardown().then((function() {
						e(t)
					}))
				}))) : (r.sendEvent(o._client, "configuration-error"), void e(new a("options.selector or options.container must reference a valid DOM node.")))) : (r.sendEvent(o._client, "configuration-error"), void e(new a("options.container is required.")))
			}, C.prototype.updateConfiguration = function(e, t, n) {
				var i; - 1 !== _.indexOf(e) && ("threeDSecure" !== e ? (i = this._mainView.getView(e)) && (i.updateConfiguration(t, n), -1 !== b.indexOf(e) && (this._removeUnvaultedPaymentMethods((function(t) {
					return t.type === o.paymentMethodTypes[e]
				})), this._navigateToInitialView())) : this._threeDSecure && this._threeDSecure.updateConfiguration(t, n))
			}, C.prototype.getAvailablePaymentOptions = function() {
				return this._model.supportedPaymentOptions
			}, C.prototype.clearSelectedPaymentMethod = function() {
				this._removeUnvaultedPaymentMethods(), this._model.removeActivePaymentMethod(), 0 !== this._model.getPaymentMethods().length ? (this._mainView.showLoadingIndicator(), this._model.refreshPaymentMethods().then(function() {
					this._navigateToInitialView(), this._mainView.hideLoadingIndicator()
				}.bind(this))) : this._navigateToInitialView()
			}, C.prototype._setUpDataCollector = function() {
				var e = this,
					t = i({}, e._merchantConfiguration.dataCollector, {
						client: e._client
					});
				this._dataCollector = new f(t), this._dataCollector.initialize().then((function() {
					e._model.asyncDependencyReady("dataCollector")
				})).catch((function(t) {
					e._model.cancelInitialization(new a({
						message: "Data Collector failed to set up.",
						braintreeWebError: t
					}))
				}))
			}, C.prototype._setUpThreeDSecure = function() {
				var e = this;
				this._threeDSecure = new E(this._client, this._model), this._threeDSecure.initialize().then((function() {
					e._model.asyncDependencyReady("threeDSecure")
				})).catch((function(t) {
					e._model.cancelInitialization(new a({
						message: "3D Secure failed to set up.",
						braintreeWebError: t
					}))
				}))
			}, C.prototype._setUpDependenciesAndViews = function() {
				this._merchantConfiguration.dataCollector && this._setUpDataCollector(), this._merchantConfiguration.threeDSecure && this._setUpThreeDSecure(), this._mainView = new c({
					client: this._client,
					element: this._dropinWrapper,
					model: this._model,
					strings: this._strings
				})
			}, C.prototype._removeUnvaultedPaymentMethods = function(e) {
				e = e || function() {
					return !0
				}, this._model.getPaymentMethods().forEach(function(t) {
					e(t) && !t.vaulted && this._model.removePaymentMethod(t)
				}.bind(this))
			}, C.prototype._navigateToInitialView = function() {
				var e = this._model.getInitialViewId();
				this._mainView.primaryView.ID === e || this._model.hasPaymentMethods() || this._mainView.setPrimaryView(e)
			}, C.prototype._supportsPaymentOption = function(e) {
				return -1 !== this._model.supportedPaymentOptions.indexOf(e)
			}, C.prototype._disableErroredPaymentMethods = function() {
				var e, t = Object.keys(this._model.failedDependencies);
				0 !== t.length && (e = this._mainView.getOptionsElements(), t.forEach(function(t) {
					var n = e[t],
						i = n.div,
						r = n.clickHandler,
						a = this._model.failedDependencies[t],
						s = i.querySelector(".braintree-option__disabled-message");
					i.classList.add("braintree-disabled"), i.removeEventListener("click", r), s.innerHTML = o.errors.DEVELOPER_MISCONFIGURATION_MESSAGE, console.error(a)
				}.bind(this)))
			}, C.prototype._sendVaultedPaymentMethodAppearAnalyticsEvents = function() {
				var e, t, n = {},
					i = this._model._paymentMethods;
				for (e = 0; e < i.length; e++)(t = i[e].type) in n || (n[t] = !0, r.sendEvent(this._client, "vaulted-" + o.analyticsKinds[t] + ".appear"))
			}, C.prototype._handleAppSwitch = function() {
				this._model.appSwitchError ? (this._mainView.setPrimaryView(this._model.appSwitchError.id), this._model.reportError(this._model.appSwitchError.error)) : this._model.appSwitchPayload ? this._model.addPaymentMethod(this._model.appSwitchPayload) : this._sendVaultedPaymentMethodAppearAnalyticsEvents()
			}, C.prototype.requestPaymentMethod = function(e) {
				var t = this;
				return e = e || {}, this._mainView.requestPaymentMethod().then((function(n) {
					return t._shouldPerformThreeDSecureVerification(n) ? (t._mainView.showLoadingIndicator(), t._threeDSecure.verify(n, e.threeDSecure).then((function(e) {
						return t._model.shouldWaitForVerifyCard = !1, n.nonce = e.nonce, n.liabilityShifted = e.liabilityShifted, n.liabilityShiftPossible = e.liabilityShiftPossible, n.threeDSecureInfo = e.threeDSecureInfo, t._model.setPaymentMethodRequestable({
							isRequestable: Boolean(e),
							type: e.type,
							selectedPaymentMethod: n
						}), t._mainView.hideLoadingIndicator(), n
					})).catch((function(e) {
						return t.clearSelectedPaymentMethod(), t._model.refreshPaymentMethods().then((function() {
							return t._mainView.hideLoadingIndicator(), Promise.reject(new a({
								message: "Something went wrong during 3D Secure authentication. Please try again.",
								braintreeWebError: e
							}))
						}))
					}))) : n
				})).then((function(e) {
					return t._dataCollector && (e.deviceData = t._dataCollector.getDeviceData()), e
				})).then((function(e) {
					return function(e) {
						var t = {
							nonce: e.nonce,
							details: e.details,
							type: e.type
						};
						null != e.vaulted && (t.vaulted = e.vaulted);
						e.type === o.paymentMethodTypes.card && (t.description = e.description);
						e.type in P && (t.details.rawPaymentData = e.rawPaymentData);
						"boolean" == typeof e.liabilityShiftPossible && (t.liabilityShifted = e.liabilityShifted, t.liabilityShiftPossible = e.liabilityShiftPossible);
						e.threeDSecureInfo && (t.threeDSecureInfo = e.threeDSecureInfo);
						e.deviceData && (t.deviceData = e.deviceData);
						e.binData && (t.binData = e.binData);
						return t
					}(e)
				}))
			}, C.prototype._shouldPerformThreeDSecureVerification = function(e) {
				return !!this._threeDSecure && (null == e.liabilityShifted && (e.type === o.paymentMethodTypes.card || e.type === o.paymentMethodTypes.googlePay && !1 === e.details.isNetworkTokenized))
			}, C.prototype._removeStylesheet = function() {
				var e = document.getElementById(o.STYLESHEET_ID);
				e && e.parentNode.removeChild(e)
			}, C.prototype._injectStylesheet = function() {
				var e, t = {
					id: o.STYLESHEET_ID
				};
				document.getElementById(o.STYLESHEET_ID) || (e = this._client.getConfiguration().gatewayConfiguration.assetsUrl, t.href = e + "/web/dropin/1.43.0/css/dropin.css", this._model.isInShadowDom && (t.container = this._model.rootNode), d.loadStylesheet(t))
			}, C.prototype.teardown = function() {
				var e, t = Promise.resolve(),
					n = this;
				return this._removeStylesheet(), this._mainView && t.then((function() {
					return n._mainView.teardown().catch((function(t) {
						e = t
					}))
				})), this._dataCollector && t.then(function() {
					return this._dataCollector.teardown().catch((function(t) {
						e = new a({
							message: "Drop-in errored tearing down Data Collector.",
							braintreeWebError: t
						})
					}))
				}.bind(this)), this._threeDSecure && t.then(function() {
					return this._threeDSecure.teardown().catch((function(t) {
						e = new a({
							message: "Drop-in errored tearing down 3D Secure.",
							braintreeWebError: t
						})
					}))
				}.bind(this)), t.then((function() {
					return n._removeDropinWrapper()
				})).then((function() {
					return e ? Promise.reject(e) : Promise.resolve()
				}))
			}, C.prototype.isPaymentMethodRequestable = function() {
				return this._model.isPaymentMethodRequestable()
			}, C.prototype._removeDropinWrapper = function() {
				return this._dropinWrapper.parentNode.removeChild(this._dropinWrapper), Promise.resolve()
			}, t.exports = v(C)
		}, {
			"./constants": 202,
			"./dropin-model": 203,
			"./lib/analytics": 207,
			"./lib/assign": 208,
			"./lib/data-collector": 211,
			"./lib/dropin-error": 212,
			"./lib/is-utf-8": 216,
			"./lib/sanitize-html": 219,
			"./lib/three-d-secure": 221,
			"./translations": 242,
			"./views/main-view": 261,
			"@braintree/asset-loader": 1,
			"@braintree/event-emitter": 36,
			"@braintree/uuid": 42,
			"@braintree/wrap-promise": 46
		}],
		205: [function(e, t, n) {
			"use strict";
			var i = e("./dropin"),
				r = e("braintree-web/client"),
				o = e("./lib/create-from-script-tag"),
				a = e("./constants"),
				s = e("./lib/analytics"),
				l = e("./lib/dropin-error"),
				d = e("@braintree/wrap-promise"),
				c = "1.43.0";

			function p(e) {
				return e.authorization ? r.create({
					authorization: e.authorization
				}).catch((function(e) {
					return Promise.reject(new l({
						message: "There was an error creating Drop-in.",
						braintreeWebError: e
					}))
				})).then((function(t) {
					return "TOKENIZATION_KEY" === (t = function(e) {
						var t = e.getConfiguration();
						return t.analyticsMetadata.integration = a.INTEGRATION, t.analyticsMetadata.integrationType = a.INTEGRATION, t.analyticsMetadata.dropinVersion = c, e.getConfiguration = function() {
							return t
						}, e
					}(t)).getConfiguration().authorizationType ? s.sendEvent(t, "started.tokenization-key") : s.sendEvent(t, "started.client-token"), new Promise((function(n, r) {
						new i({
							merchantConfiguration: e,
							client: t
						})._initialize((function(e, t) {
							e ? r(e) : n(t)
						}))
					}))
				})) : Promise.reject(new l("options.authorization is required."))
			}
			o(p, "undefined" != typeof document && document.querySelector("script[data-braintree-dropin-authorization]")), t.exports = {
				create: d(p),
				VERSION: c
			}
		}, {
			"./constants": 202,
			"./dropin": 204,
			"./lib/analytics": 207,
			"./lib/create-from-script-tag": 210,
			"./lib/dropin-error": 212,
			"@braintree/wrap-promise": 46,
			"braintree-web/client": 54
		}],
		206: [function(e, t, n) {
			"use strict";
			t.exports = function(e, t) {
				e.addEventListener("click", t), e.addEventListener("keyup", (function(e) {
					13 === e.keyCode && t()
				}))
			}
		}, {}],
		207: [function(e, t, n) {
			"use strict";
			var i = e("./polyfill").atob,
				r = e("../constants"),
				o = e("braintree-web/client").VERSION;
			t.exports = {
				sendEvent: function(e, t, n) {
					var a, s = e.getConfiguration(),
						l = e._request,
						d = (a = Date.now(), Math.floor(a / 1e3)),
						c = s.gatewayConfiguration.analytics.url,
						p = {
							analytics: [{
								kind: r.ANALYTICS_PREFIX + t,
								timestamp: d
							}],
							_meta: s.analyticsMetadata,
							braintreeLibraryVersion: o
						};
					"TOKENIZATION_KEY" === s.authorizationType ? p.tokenizationKey = s.authorization : p.authorizationFingerprint = JSON.parse(i(s.authorization)).authorizationFingerprint, l({
						url: c,
						method: "post",
						data: p,
						timeout: r.ANALYTICS_REQUEST_TIMEOUT_MS
					}, n)
				}
			}
		}, {
			"../constants": 202,
			"./polyfill": 218,
			"braintree-web/client": 54
		}],
		208: [function(e, t, n) {
			"use strict";
			var i = "function" == typeof Object.assign ? Object.assign : r;

			function r(e) {
				var t, n, i;
				for (t = 1; t < arguments.length; t++)
					for (i in n = arguments[t]) n.hasOwnProperty(i) && (e[i] = n[i]);
				return e
			}
			t.exports = {
				assign: i,
				_assign: r
			}
		}, {}],
		209: [function(e, t, n) {
			"use strict";
			var i = e("@braintree/browser-detection/is-ie9"),
				r = e("@braintree/browser-detection/is-ie10");
			t.exports = {
				isIe9: i,
				isIe10: r
			}
		}, {
			"@braintree/browser-detection/is-ie10": 28,
			"@braintree/browser-detection/is-ie9": 29
		}],
		210: [function(e, t, n) {
			"use strict";
			var i = e("./analytics"),
				r = e("./find-parent-form"),
				o = e("@braintree/uuid"),
				a = e("./dropin-error"),
				s = e("./kebab-case-to-camel-case"),
				l = ["locale", "payment-option-priority", "data-collector.kount", "data-collector.paypal", "card.cardholderName", "card.cardholderName.required", "card.cardholder-name", "card.cardholder-name.required", "paypal.amount", "paypal.currency", "paypal.flow", "paypal.landing-page-type", "paypal-credit.amount", "paypal-credit.currency", "paypal-credit.flow", "paypal-credit.landing-page-type"];

			function d(e, t, n) {
				var i = n.querySelector('[name="' + e + '"]');
				i || ((i = document.createElement("input")).type = "hidden", i.name = e, n.appendChild(i)), i.value = t
			}

			function c(e, t, n) {
				var i = t.split("."),
					r = s(i[0]);
				1 === i.length ? e[r] = function(e) {
					try {
						return JSON.parse(e)
					} catch (t) {
						return e
					}
				}(n) : (e[r] = e[r] || {}, c(e[r], i.slice(1).join("."), n))
			}
			t.exports = function(e, t) {
				var n, s, p, u;
				if (t) {
					if (!(n = t.getAttribute("data-braintree-dropin-authorization"))) throw new a("Authorization not found in data-braintree-dropin-authorization attribute");
					if ((s = document.createElement("div")).id = "braintree-dropin-" + o(), !(u = r.findParentForm(t))) throw new a("No form found for script tag integration.");
					u.addEventListener("submit", (function(e) {
						e.preventDefault()
					})), t.parentNode.insertBefore(s, t), p = {
						authorization: n,
						container: s
					}, l.forEach((function(e) {
						var n = t.getAttribute("data-" + e);
						null != n && c(p, e, n)
					})), e(p).then((function(e) {
						i.sendEvent(e._client, "integration-type.script-tag"), u.addEventListener("submit", (function() {
							e.requestPaymentMethod((function(e, t) {
								e || (d("payment_method_nonce", t.nonce, u), t.deviceData && d("device_data", t.deviceData, u), u.submit())
							}))
						}))
					}))
				}
			}
		}, {
			"./analytics": 207,
			"./dropin-error": 212,
			"./find-parent-form": 213,
			"./kebab-case-to-camel-case": 217,
			"@braintree/uuid": 42
		}],
		211: [function(e, t, n) {
			(function(n) {
				(function() {
					"use strict";
					var i = e("../constants"),
						r = e("./analytics"),
						o = e("@braintree/asset-loader");

					function a(e) {
						this._config = e
					}
					a.prototype.initialize = function() {
						var e = this;
						return Promise.resolve().then((function() {
							var t;
							return n.braintree && n.braintree.dataCollector ? Promise.resolve() : (t = e._config.client.getVersion(), o.loadScript({
								src: "https://js.braintreegateway.com/web/" + t + "/js/data-collector.min.js",
								id: i.DATA_COLLECTOR_SCRIPT_ID
							}))
						})).then((function() {
							return n.braintree.dataCollector.create(e._config)
						})).then((function(t) {
							e._instance = t
						})).catch((function(t) {
							r.sendEvent(e._config.client, "data-collector.setup-failed"), e.log(t)
						}))
					}, a.prototype.log = function(e) {
						console.log(e)
					}, a.prototype.getDeviceData = function() {
						return this._instance ? this._instance.deviceData : ""
					}, a.prototype.teardown = function() {
						return this._instance ? this._instance.teardown() : Promise.resolve()
					}, t.exports = a
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"../constants": 202,
			"./analytics": 207,
			"@braintree/asset-loader": 1
		}],
		212: [function(e, t, n) {
			"use strict";

			function i(e) {
				this.name = "DropinError", this.message = "string" == typeof e ? e : e.message, ! function(e) {
					return "BraintreeError" === e.name
				}(e) ? this._braintreeWebError = e.braintreeWebError : this._braintreeWebError = e
			}
			i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, t.exports = i
		}, {}],
		213: [function(e, t, n) {
			"use strict";
			t.exports = {
				findParentForm: function e(t) {
					var n = t.parentNode;
					return n && "FORM" !== n.nodeName ? e(n) : n
				}
			}
		}, {}],
		214: [function(e, t, n) {
			"use strict";
			var i = e("./polyfill").atob;
			t.exports = function(e) {
				var t, n = e.getConfiguration();
				return "TOKENIZATION_KEY" === n.authorizationType || (!(t = JSON.parse(i(n.authorization)).authorizationFingerprint) || -1 === t.indexOf("customer_id="))
			}
		}, {
			"./polyfill": 218
		}],
		215: [function(e, t, n) {
			(function(e) {
				(function() {
					"use strict";
					t.exports = {
						isHTTPS: function() {
							return "https:" === e.location.protocol
						}
					}
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		216: [function(e, t, n) {
			(function(e) {
				(function() {
					"use strict";
					t.exports = function(t) {
						return t = t || e, Boolean(t.document.characterSet && "utf-8" === t.document.characterSet.toLowerCase())
					}
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		217: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				var t = e.split("-"),
					n = t.shift(),
					i = t.map((function(e) {
						return e.charAt(0).toUpperCase() + e.substring(1)
					}));
				return [n].concat(i).join("")
			}
		}, {}],
		218: [function(e, t, n) {
			(function(e) {
				(function() {
					"use strict";
					var n = "function" == typeof e.atob ? e.atob : i;

					function i(e) {
						var t, n, i, r, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
							l = "";
						if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
						a = 0;
						do {
							t = (63 & s.indexOf(e.charAt(a++))) << 2 | (r = s.indexOf(e.charAt(a++))) >> 4 & 3, n = (15 & r) << 4 | (o = s.indexOf(e.charAt(a++))) >> 2 & 15, i = (3 & o) << 6 | 63 & s.indexOf(e.charAt(a++)), l += String.fromCharCode(t) + (n ? String.fromCharCode(n) : "") + (i ? String.fromCharCode(i) : "")
						} while (a < e.length);
						return l
					}
					t.exports = {
						atob: function(t) {
							return n.call(e, t)
						},
						_atob: i
					}
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		219: [function(e, t, n) {
			"use strict";
			t.exports = function(e) {
				return "string" != typeof e ? "" : e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
			}
		}, {}],
		220: [function(e, t, n) {
			"use strict";
			t.exports = function() {
				var e = document.createElement("div");
				return ["-webkit-", "-moz-", "-ms-", "-o-", ""].forEach((function(t) {
					e.style.cssText += t + "flex-basis: 1px"
				})), Boolean(e.style.length)
			}
		}, {}],
		221: [function(e, t, n) {
			"use strict";
			var i = e("./assign").assign,
				r = e("braintree-web/three-d-secure"),
				o = ["customer-canceled", "authentication-modal-render", "authentication-modal-close"];

			function a(e, t) {
				this._client = e, this._model = t, this._config = i({}, t.merchantConfiguration.threeDSecure)
			}
			a.prototype.initialize = function() {
				var e = this,
					t = {
						client: this._client,
						version: 2
					};
				return this._config.cardinalSDKConfig && (t.cardinalSDKConfig = this._config.cardinalSDKConfig), r.create(t).then((function(t) {
					e._instance = t, o.forEach((function(t) {
						e._instance.on(t, (function(n) {
							e._model._emit("3ds:" + t, n)
						}))
					}))
				}))
			}, a.prototype.verify = function(e, t) {
				var n = i({
					amount: this._config.amount
				}, t, {
					nonce: e.nonce,
					bin: e.details.bin,
					onLookupComplete: function(e, t) {
						t()
					}
				});
				return n.additionalInformation = n.additionalInformation || {}, n.additionalInformation.acsWindowSize = n.additionalInformation.acsWindowSize || "03", this._model.shouldWaitForVerifyCard = !0, this._instance.verifyCard(n)
			}, a.prototype.updateConfiguration = function(e, t) {
				this._config[e] = t
			}, a.prototype.teardown = function() {
				return this._instance.teardown()
			}, t.exports = a
		}, {
			"./assign": 208,
			"braintree-web/three-d-secure": 139
		}],
		222: [function(e, t, n) {
			"use strict";
			var i = e("./browser-detection");

			function r(e) {
				return !!e && ("none" === e.style.display || r(e.parentNode))
			}
			t.exports = {
				onTransitionEnd: function(e, t, n) {
					i.isIe9() || r(e) ? n() : e.addEventListener("transitionend", (function i(r) {
						r.propertyName === t && (e.removeEventListener("transitionend", i), n())
					}))
				}
			}
		}, {
			"./browser-detection": 209
		}],
		223: [function(e, t, n) {
			"use strict";
			t.exports = {
				delay: function(e) {
					return e = e || 0, new Promise((function(t) {
						window.setTimeout(t, e)
					}))
				}
			}
		}, {}],
		224: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "الدفع بواسطة {{paymentSource}}",
				chooseAnotherWayToPay: "اختر طريقة دفع أخرى",
				chooseAWayToPay: "اختر طريقة الدفع",
				otherWaysToPay: "طرق أخرى للدفع",
				edit: "تحرير",
				doneEditing: "تم",
				editPaymentMethods: "تحرير طرق الدفع",
				CreditCardDeleteConfirmationMessage: "هل تريد حذف بطاقة {{secondaryIdentifier}} التي تنتهي بالأرقام {{identifier}}؟",
				PayPalAccountDeleteConfirmationMessage: "هل تريد حذف {{identifier}}الحساب PayPal؟",
				VenmoAccountDeleteConfirmationMessage: "هل تريد فعلاً حذف حساب Venmo الذي يحمل اسم المستخدم {{identifier}}؟",
				genericDeleteConfirmationMessage: "هل تريد بالفعل حذف طريقة الدفع؟",
				deleteCancelButton: "إلغاء",
				deleteConfirmationButton: "حذف",
				fieldEmptyForCvv: "يرجى إدخال رمز حماية البطاقة.",
				fieldEmptyForExpirationDate: "يرجى إدخال تاريخ انتهاء الصلاحية.",
				fieldEmptyForCardholderName: "يرجى إدخال اسم صاحب البطاقة.",
				fieldTooLongForCardholderName: "يجب أن يقل اسم صاحب البطاقة عن 256 حرفاً.",
				fieldEmptyForNumber: "يرجى إدخال رقم.",
				fieldEmptyForPostalCode: "يرجى إدخال الرمز البريدي.",
				fieldInvalidForCardholderName: "اسم حامل البطاقة غير صحيح.",
				fieldInvalidForCvv: "رمز الحماية غير صحيح.",
				fieldInvalidForExpirationDate: "تاريخ انتهاء الصلاحية غير صحيح.",
				fieldInvalidForNumber: "رقم البطاقة غير صحيح.",
				fieldInvalidForPostalCode: "الرمز البريدي غير صحيح.",
				noticeOfCollection: 'عندما أدفع ببطاقتي، فأنا أوافق على "بيان الخصوصية لدى PayPal".',
				genericError: "حدث خطأ ما من جانبنا.",
				hostedFieldsTokenizationFailOnDuplicateError: "هذه البطاقة الائتمانية محفوظة كطريقة دفع حالياً.",
				hostedFieldsFailedTokenizationError: "يرجى مراجعة معلوماتك وإعادة المحاولة.",
				hostedFieldsFieldsInvalidError: "يرجى مراجعة معلوماتك وإعادة المحاولة.",
				hostedFieldsTokenizationNetworkErrorError: "خطأ في الشبكة. يرجى المحاولة مجدداً.",
				hostedFieldsTokenizationCvvVerificationFailedError: "فشلت مصادقة بطاقة الائتمان. يرجى مراجعة معلوماتك وإعادة المحاولة.",
				paypalButtonMustBeUsed: "استخدم زر PayPal لاستئناف الدفع.",
				venmoButtonMustBeUsed: "استخدِم زر Venmo لمتابعة إجراء دفعتك",
				applePayButtonMustBeUsed: " استخدِم زر Apple Pay لمتابعة عملية الدفع التي تُجريها.",
				paypalAccountTokenizationFailedError: "وقع خطأ أثناء إضافة حساب PayPal. يرجى إعادة المحاولة.",
				paypalFlowFailedError: "وقع خطأ أثناء الاتصال بـ PayPal. يرجى إعادة المحاولة.",
				paypalTokenizationRequestActiveError: "تفويض الدفع عبر PayPal قيد التنفيذ.",
				venmoCanceledError: "وقع خطأ. تأكد أن أحدث إصدار من تطبيق Venmo مثبت في جهازك وأن متصفحك يدعم التبديل إلى Venmo.",
				vaultManagerPaymentMethodDeletionError: "فشل حذف طريقة الدفع. أعد المحاولة.",
				venmoAppFailedError: "تطبيق Venmo غير موجود في جهازك.",
				unsupportedCardTypeError: "نوع البطاقة غير مدعوم. يرجى تجربة بطاقة أخرى.",
				applePayTokenizationError: "وقع خطأ في الشبكة أثناء معالجة الدفع عبر Apple Pay. يرجى إعادة المحاولة.",
				applePayActiveCardError: "إضافة بطاقة مدعومة إلى محفظة Apple Pay.",
				cardholderNameLabel: "اسم صاحب البطاقة",
				cardNumberLabel: "رقم البطاقة",
				cvvLabel: "رمز CVV‏",
				cvvThreeDigitLabelSubheading: "(3 أرقام)",
				cvvFourDigitLabelSubheading: "(4 أرقام)",
				cardholderNamePlaceholder: "اسم صاحب البطاقة",
				expirationDateLabel: "تاريخ انتهاء الصلاحية",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "الشهر/ السنة",
				postalCodeLabel: "الرمز البريدي",
				saveCardLabel: "حفظ البطاقة",
				payWithCard: "الدفع ببطاقة سحب أو ائتمان",
				endingIn: "تنتهي بتاريخ {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo‏",
				Card: "البطاقة",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express‏",
				Discover: "Discover‏",
				"Diners Club": "Diners Club‏",
				Elo: "Elo‏",
				Hiper: "Hiper‏",
				Hipercard: "Hipercard‏",
				MasterCard: "Mastercard‏",
				Visa: "Visa‏",
				JCB: "JCB‏",
				Maestro: "Maestro‏",
				UnionPay: "UnionPay‏"
			}
		}, {}],
		225: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Forma úhrady: {{paymentSource}}",
				chooseAnotherWayToPay: "Vybrat jiný způsob platby",
				chooseAWayToPay: "Vybrat způsob platby",
				otherWaysToPay: "Jiné způsoby platby",
				edit: "Upravit",
				doneEditing: "Hotovo",
				editPaymentMethods: "Upravit způsoby platby",
				CreditCardDeleteConfirmationMessage: "Chcete kartu {{secondaryIdentifier}} s koncovým číslem {{identifier}}odstranit?",
				PayPalAccountDeleteConfirmationMessage: "Chcete {{identifier}}účtu PayPal odstranit?",
				VenmoAccountDeleteConfirmationMessage: "Opravdu chcete účet Venmo s uživatelským jménem {{identifier}} odstranit?",
				genericDeleteConfirmationMessage: "Opravdu chcete tento způsob platby odstranit?",
				deleteCancelButton: "Zrušit",
				deleteConfirmationButton: "Odstranit",
				fieldEmptyForCvv: "Vyplňte kód CVV.",
				fieldEmptyForExpirationDate: "Vyplňte datum vypršení platnosti.",
				fieldEmptyForCardholderName: "Vyplňte jméno držitele karty.",
				fieldTooLongForCardholderName: "Jméno držitele karty musí obsahovat méně než 256 znaků.",
				fieldEmptyForNumber: "Vyplňte číslo.",
				fieldEmptyForPostalCode: "Vyplňte poštovní směrovací číslo.",
				fieldInvalidForCardholderName: "Toto jméno držitele karty není platné.",
				fieldInvalidForCvv: "Tento bezpečnostní kód není platný.",
				fieldInvalidForExpirationDate: "Toto datum vypršení platnosti není platné.",
				fieldInvalidForNumber: "Toto číslo karty není platné.",
				fieldInvalidForPostalCode: "Toto poštovní směrovací číslo není platné.",
				noticeOfCollection: "Zaplacením kartou vyjadřuji souhlas s prohlášením o ochraně osobních údajů společnosti PayPal.",
				genericError: "Došlo k chybě na naší straně.",
				hostedFieldsTokenizationFailOnDuplicateError: "Tato kreditní karta je již jako způsob platby uložena.",
				hostedFieldsFailedTokenizationError: "Zkontrolujte zadané informace a zkuste to znovu.",
				hostedFieldsFieldsInvalidError: "Zkontrolujte zadané informace a zkuste to znovu.",
				hostedFieldsTokenizationNetworkErrorError: "Došlo k chybě sítě. Zkuste to znovu.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Ověření kreditní karty se nezdařilo. Zkontrolujte zadané informace a zkuste to znovu.",
				paypalButtonMustBeUsed: "Chcete-li přejít k platbě, použijte tlačítko PayPal.",
				venmoButtonMustBeUsed: "Chcete-li pokračovat v placení, použijte tlačítko Venmo.",
				applePayButtonMustBeUsed: "Chcete-li přejít k platbě, použijte tlačítko Apple Pay.",
				paypalAccountTokenizationFailedError: "Při přidávání účtu PayPal došlo k chybě. Zkuste to znovu.",
				paypalFlowFailedError: "Při připojování ke službě PayPal došlo k chybě. Zkuste to znovu.",
				paypalTokenizationRequestActiveError: "Autorizace platby přes PayPal již probíhá.",
				venmoCanceledError: "Došlo k chybě. Zkontrolujte, zda máte v zařízení nainstalovanou nejnovější verzi aplikace Venmo a zda prohlížeč přechod na aplikaci Venmo podporuje.",
				vaultManagerPaymentMethodDeletionError: "Způsob platby se nepodařilo odstranit. Zkuste to znovu.",
				venmoAppFailedError: "Aplikaci Venmo se ve vašem zařízení nepodařilo najít.",
				unsupportedCardTypeError: "Tento typ karty není podporován. Vyzkoušejte jinou kartu.",
				applePayTokenizationError: "Při zpracování platby přes Apple Pay došlo k chybě sítě. Zkuste to znovu.",
				applePayActiveCardError: "Přidejte si podporovanou kartu do peněženky Apple Pay.",
				cardholderNameLabel: "Jméno držitele karty",
				cardNumberLabel: "Číslo karty",
				cvvLabel: "Kód CVV",
				cvvThreeDigitLabelSubheading: "(3 číslice)",
				cvvFourDigitLabelSubheading: "(4 číslice)",
				cardholderNamePlaceholder: "Jméno držitele karty",
				expirationDateLabel: "Datum vypršení platnosti",
				expirationDateLabelSubheading: "(MM/RR)",
				expirationDatePlaceholder: "MM/RR",
				postalCodeLabel: "Poštovní směrovací číslo",
				saveCardLabel: "Uložit kartu",
				payWithCard: "Zaplatit kartou",
				endingIn: "Koncové číslo {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Karta",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		226: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Betaling med {{paymentSource}}",
				chooseAnotherWayToPay: "Vælg en anden betalingsmetode",
				chooseAWayToPay: "Vælg, hvordan du vil betale",
				otherWaysToPay: "Andre måder at betale på",
				edit: "Rediger",
				doneEditing: "Udført",
				editPaymentMethods: "Rediger betalingsmetode",
				CreditCardDeleteConfirmationMessage: "Vil du slette dit {{secondaryIdentifier}}-kort, der slutter på {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Vil du slette PayPal-kontoen for {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Er du sikker på, at du vil slette Venmo-konto med brugernavnet {{identifier}}?",
				genericDeleteConfirmationMessage: "Er du sikker på, at du vil slette denne betalingsmetode?",
				deleteCancelButton: "Annuller",
				deleteConfirmationButton: "Slet",
				fieldEmptyForCvv: "Du skal indtaste kontrolcifrene.",
				fieldEmptyForExpirationDate: "Du skal indtaste en udløbsdato.",
				fieldEmptyForCardholderName: "Du skal indtaste kortholderens navn.",
				fieldTooLongForCardholderName: "Kortholders navn skal være mindre end 256 tegn.",
				fieldEmptyForNumber: "Du skal indtaste et nummer.",
				fieldEmptyForPostalCode: "Du skal indtaste et postnummer.",
				fieldInvalidForCardholderName: "Kortindehaverens navn er ugyldigt.",
				fieldInvalidForCvv: "Denne sikkerhedskode er ugyldig.",
				fieldInvalidForExpirationDate: "Denne udløbsdato er ugyldig.",
				fieldInvalidForNumber: "Dette kortnummer er ikke gyldigt.",
				fieldInvalidForPostalCode: "Dette postnummer er ikke gyldigt.",
				noticeOfCollection: "Når jeg betaler med mit kort, accepterer jeg PayPals erklæring om personlige oplysninger.",
				genericError: "Der opstod en fejl.",
				hostedFieldsTokenizationFailOnDuplicateError: "Dette betalingskort findes allerede som en gemt betalingsmetode.",
				hostedFieldsFailedTokenizationError: "Tjek oplysningerne, og prøv igen.",
				hostedFieldsFieldsInvalidError: "Tjek oplysningerne, og prøv igen.",
				hostedFieldsTokenizationNetworkErrorError: "Netværksfejl. Prøv igen.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Bekræftelse af betalingskort mislykkedes. Tjek oplysningerne, og prøv igen.",
				paypalButtonMustBeUsed: "Brug PayPal-knappen til at fortsætte med din betaling.",
				venmoButtonMustBeUsed: "Brug Venmo-knappen til at fortsætte med din betaling.",
				applePayButtonMustBeUsed: "Brug Apple Pay-knappen til at fortsætte med din betaling.",
				paypalAccountTokenizationFailedError: "Der opstod en fejl under tilføjelsen af PayPal-kontoen. Prøv igen.",
				paypalFlowFailedError: "Det lykkedes ikke at oprette forbindelse til PayPal. Prøv igen.",
				paypalTokenizationRequestActiveError: "PayPals betalingsautorisation er allerede i gang.",
				venmoCanceledError: "Der opstod et problem. Sørg for, at den nyeste version af Venmo-appen er installeret på din enhed, og at din browser understøtter skift til Venmo.",
				vaultManagerPaymentMethodDeletionError: "Betalingsmetoden kunne ikke slettes. Prøv igen.",
				venmoAppFailedError: "Venmo-appen blev ikke fundet på din enhed.",
				unsupportedCardTypeError: "Korttypen understøttes ikke. Prøv et andet kort.",
				applePayTokenizationError: "Der opstod en netværksfejl under behandling af Apple Pay-betalingen. Prøv igen.",
				applePayActiveCardError: "Føj et understøttet kort til din Apple Pay-e-pung.",
				cardholderNameLabel: "Kortindehaverens navn",
				cardNumberLabel: "Kortnummer",
				cvvLabel: "Kontrolcifre",
				cvvThreeDigitLabelSubheading: "(3 cifre)",
				cvvFourDigitLabelSubheading: "(4 cifre)",
				cardholderNamePlaceholder: "Kortindehaverens navn",
				expirationDateLabel: "Udløbsdato",
				expirationDateLabelSubheading: "(MM/ÅÅ)",
				expirationDatePlaceholder: "MM/ÅÅ",
				postalCodeLabel: "Postnummer",
				saveCardLabel: "Gem kort",
				payWithCard: "Betal med betalingskort",
				endingIn: "Slutter på {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kort",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		227: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Zahlen mit {{paymentSource}}",
				chooseAnotherWayToPay: "Wählen Sie eine andere Zahlungsquelle",
				chooseAWayToPay: "Wählen Sie eine Zahlungsquelle",
				otherWaysToPay: "Sonstige Zahlungsquellen",
				edit: "Ändern",
				doneEditing: "Fertig",
				editPaymentMethods: "Zahlungsquellen bearbeiten",
				CreditCardDeleteConfirmationMessage: "{{secondaryIdentifier}}-Karte mit den Endziffern {{identifier}} löschen?",
				PayPalAccountDeleteConfirmationMessage: "PayPal-Konto {{identifier}} löschen?",
				VenmoAccountDeleteConfirmationMessage: "Wollen Sie das Venmo-Konto mit dem Benutzernamen {{identifier}} wirklich löschen?",
				genericDeleteConfirmationMessage: "Möchten Sie diese Zahlungsquelle wirklich löschen?",
				deleteCancelButton: "Abbrechen",
				deleteConfirmationButton: "Löschen",
				fieldEmptyForCvv: "Geben Sie die Kartenprüfnummer (CVV) ein.",
				fieldEmptyForExpirationDate: "Geben Sie das Ablaufdatum ein.",
				fieldEmptyForCardholderName: "Geben Sie den Namen des Karteninhabers ein.",
				fieldTooLongForCardholderName: "Der Name des Karteninhabers darf nicht länger als 256 Zeichen sein.",
				fieldEmptyForNumber: "Geben Sie eine Nummer ein.",
				fieldEmptyForPostalCode: "Geben Sie eine Postleitzahl ein.",
				fieldInvalidForCardholderName: "Der Name des Karteninhabers ist nicht gültig.",
				fieldInvalidForCvv: "Diese Kartenprüfnummer ist ungültig.",
				fieldInvalidForExpirationDate: "Dieses Ablaufdatum ist ungültig.",
				fieldInvalidForNumber: "Diese Kartennummer ist ungültig.",
				fieldInvalidForPostalCode: "Diese Postleitzahl ist ungültig.",
				noticeOfCollection: "Indem ich mit meiner Karte bezahle, stimme ich der PayPal-Datenschutzerklärung zu.",
				genericError: "Bei uns ist ein Fehler aufgetreten.",
				hostedFieldsTokenizationFailOnDuplicateError: "Diese Kreditkarte ist bereits als gespeicherte Zahlungsquelle vorhanden.",
				hostedFieldsFailedTokenizationError: "Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
				hostedFieldsFieldsInvalidError: "Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
				hostedFieldsTokenizationNetworkErrorError: "Netzwerkfehler. Versuchen Sie es bitte erneut.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Die Kreditkartenverifizierung ist fehlgeschlagen. Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
				paypalButtonMustBeUsed: "Verwenden Sie den PayPal-Button, um mit der Zahlung fortzufahren.",
				venmoButtonMustBeUsed: "Verwenden Sie den Venmo-Button, um mit Ihrer Zahlung fortzufahren.",
				applePayButtonMustBeUsed: "Verwenden Sie den Apple Pay-Button, um mit der Zahlung fortzufahren.",
				paypalAccountTokenizationFailedError: "Beim Hinzufügen des PayPal-Kontos ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
				paypalFlowFailedError: "Bei der Verbindung mit PayPal ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
				paypalTokenizationRequestActiveError: "Die PayPal-Zahlungsautorisierung wird bereits vorgenommen.",
				venmoCanceledError: "Etwas ist schief gelaufen. Vergewissern Sie sich, dass Sie die neueste Version der Venmo-App auf Ihrem Gerät installiert haben und Ihr Browser den Wechsel zu Venmo unterstützt.",
				vaultManagerPaymentMethodDeletionError: "Die Zahlungsquelle konnte nicht gelöscht werden. Versuchen Sie es erneut.",
				venmoAppFailedError: "Die Venmo-App wurde nicht auf Ihrem Gerät gefunden.",
				unsupportedCardTypeError: "Dieser Kartentyp wird nicht unterstützt. Versuchen Sie es mit einer anderen Karte.",
				applePayTokenizationError: "Bei der Verarbeitung der Apple Pay-Zahlung ist ein Netzwerkfehler aufgetreten. Versuchen Sie es bitte erneut.",
				applePayActiveCardError: "Fügen Sie Ihrem Apple Pay-Wallet eine unterstützte Karte hinzu.",
				cardholderNameLabel: "Name des Karteninhabers",
				cardNumberLabel: "Kartennummer",
				cvvLabel: "Kartenprüfnummer",
				cvvThreeDigitLabelSubheading: "(3-stellig)",
				cvvFourDigitLabelSubheading: "(4-stellig)",
				cardholderNamePlaceholder: "Name des Karteninhabers",
				expirationDateLabel: "Gültig bis",
				expirationDateLabelSubheading: "(MM/JJ)",
				expirationDatePlaceholder: "MM/JJ",
				postalCodeLabel: "Postleitzahl",
				saveCardLabel: "Karte speichern",
				payWithCard: "Mit Karte zahlen",
				endingIn: "Mit den Endziffern {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Karte",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		228: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Πληρωμή με {{paymentSource}}",
				chooseAnotherWayToPay: "Επιλογή ενός άλλου τρόπου πληρωμής",
				chooseAWayToPay: "Επιλογή τρόπου πληρωμής",
				otherWaysToPay: "Άλλοι τρόποι πληρωμής",
				edit: "Επεξεργασία",
				doneEditing: "Τέλος",
				editPaymentMethods: "Επεξεργασία μεθόδων πληρωμής",
				CreditCardDeleteConfirmationMessage: "Διαγραφή της κάρτας {{secondaryIdentifier}} που λήγει σε {{identifier}};",
				PayPalAccountDeleteConfirmationMessage: "Διαγραφή {{identifier}}λογαριασμού PayPal;",
				VenmoAccountDeleteConfirmationMessage: "Θέλετε σίγουρα να διαγράψετε τον λογαριασμό Venmo με το όνομα χρήστη {{identifier}};",
				genericDeleteConfirmationMessage: "Θέλετε σίγουρα να διαγράψετε αυτήν τη μέθοδο πληρωμής;",
				deleteCancelButton: "Ακύρωση",
				deleteConfirmationButton: "Διαγραφή",
				fieldEmptyForCvv: "Συμπληρώστε έναν κωδικό ασφαλείας (CVV).",
				fieldEmptyForExpirationDate: "Συμπληρώστε ημερομηνία λήξης.",
				fieldEmptyForCardholderName: "Συμπληρώστε το όνομα ενός κατόχου κάρτας.",
				fieldTooLongForCardholderName: "Το όνομα του κατόχου της κάρτας πρέπει να περιέχει λιγότερους από 256 χαρακτήρες.",
				fieldEmptyForNumber: "Συμπληρώστε έναν αριθμό.",
				fieldEmptyForPostalCode: "Συμπληρώστε έναν ταχυδρομικό κώδικα.",
				fieldInvalidForCardholderName: "Αυτό το όνομα κατόχου κάρτας δεν είναι έγκυρο.",
				fieldInvalidForCvv: "Αυτός ο κωδικός ασφαλείας δεν είναι έγκυρος.",
				fieldInvalidForExpirationDate: "Αυτή η ημερομηνία λήξης δεν είναι έγκυρη.",
				fieldInvalidForNumber: "Αυτός ο αριθμός κάρτας δεν είναι έγκυρος.",
				fieldInvalidForPostalCode: "Αυτός ο ταχυδρομικός κώδικας δεν είναι έγκυρος.",
				noticeOfCollection: "Πληρώνοντας με την κάρτα μου, αποδέχομαι τη Δήλωση απορρήτου της PayPal.",
				genericError: "Προέκυψε πρόβλημα στο σύστημά μας.",
				hostedFieldsTokenizationFailOnDuplicateError: "Αυτή η πιστωτική κάρτα υπάρχει ήδη ως αποθηκευμένη μέθοδος πληρωμής.",
				hostedFieldsFailedTokenizationError: "Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
				hostedFieldsFieldsInvalidError: "Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
				hostedFieldsTokenizationNetworkErrorError: "Σφάλμα δικτύου. Δοκιμάστε ξανά.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Η επαλήθευση της πιστωτικής κάρτας απέτυχε. Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
				paypalButtonMustBeUsed: "Χρησιμοποιήστε το κουμπί PayPal για να συνεχίσετε με την πληρωμή.",
				venmoButtonMustBeUsed: "Χρησιμοποιήστε το κουμπί Venmo για να συνεχίσετε με την πληρωμή σας.",
				applePayButtonMustBeUsed: "Χρησιμοποιήστε το κουμπί Apple Pay για να συνεχίσετε με την πληρωμή.",
				paypalAccountTokenizationFailedError: "Προέκυψε κάποιο πρόβλημα με την προσθήκη του λογαριασμού PayPal. Δοκιμάστε ξανά.",
				paypalFlowFailedError: "Προέκυψε κάποιο πρόβλημα με τη σύνδεση στην PayPal. Δοκιμάστε ξανά.",
				paypalTokenizationRequestActiveError: "Η εξουσιοδότηση πληρωμής μέσω PayPal βρίσκεται ήδη σε εξέλιξη.",
				venmoCanceledError: "Προέκυψε πρόβλημα. Βεβαιωθείτε ότι έχετε την πιο πρόσφατη έκδοση της εφαρμογής Venmo εγκατεστημένη στη συσκευή σας και ότι το πρόγραμμα περιήγησής σας υποστηρίζει τη μετάβαση στη Venmo.",
				vaultManagerPaymentMethodDeletionError: "Η διαγραφή της μεθόδου πληρωμής είναι αδύνατη, δοκιμάστε ξανά.",
				venmoAppFailedError: "Η εφαρμογή Venmo δεν βρέθηκε στη συσκευή σας.",
				unsupportedCardTypeError: "Αυτός ο τύπος κάρτας δεν υποστηρίζεται. Δοκιμάστε μια άλλη κάρτα.",
				applePayTokenizationError: "Προέκυψε σφάλμα δικτύου κατά την επεξεργασία της πληρωμής μέσω Apple Pay. Δοκιμάστε ξανά.",
				applePayActiveCardError: "Προσθέστε μια υποστηριζόμενη κάρτα στο ψηφιακό πορτοφόλι Apple Pay.",
				cardholderNameLabel: "Όνομα κατόχου κάρτας",
				cardNumberLabel: "Αριθμός κάρτας",
				cvvLabel: "Κωδικός ασφαλείας (CVV)",
				cvvThreeDigitLabelSubheading: "(3 ψηφία)",
				cvvFourDigitLabelSubheading: "(4 ψηφία)",
				cardholderNamePlaceholder: "Όνομα κατόχου κάρτας",
				expirationDateLabel: "Ημερομηνία λήξης",
				expirationDateLabelSubheading: "(ΜΜ/ΕΕ)",
				expirationDatePlaceholder: "ΜΜ/ΕΕ",
				postalCodeLabel: "Ταχυδρομικός κώδικας",
				saveCardLabel: "Αποθήκευση κάρτας",
				payWithCard: "Πληρωμή με κάρτα",
				endingIn: "Που λήγει σε {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Κάρτα",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		229: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Paying with {{paymentSource}}",
				chooseAnotherWayToPay: "Choose another way to pay",
				chooseAWayToPay: "Choose a way to pay",
				otherWaysToPay: "Other ways to pay",
				edit: "Edit",
				doneEditing: "Done",
				editPaymentMethods: "Edit payment methods",
				CreditCardDeleteConfirmationMessage: "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Delete PayPal account {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Are you sure you want to delete Venmo account with username {{identifier}}?",
				genericDeleteConfirmationMessage: "Are you sure you want to delete this payment method?",
				deleteCancelButton: "Cancel",
				deleteConfirmationButton: "Delete",
				fieldEmptyForCvv: "Please enter a CVV.",
				fieldEmptyForExpirationDate: "Please enter an expiry date.",
				fieldEmptyForCardholderName: "Please enter a cardholder name.",
				fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.",
				fieldEmptyForNumber: "Please enter a number.",
				fieldEmptyForPostalCode: "Please enter a postcode.",
				fieldInvalidForCardholderName: "This cardholder name isn't valid.",
				fieldInvalidForCvv: "This CVV isn't valid.",
				fieldInvalidForExpirationDate: "This expiry date isn't valid.",
				fieldInvalidForNumber: "This card number isn't valid.",
				fieldInvalidForPostalCode: "This postcode isn't valid.",
				noticeOfCollection: "By paying with my card, I agree to the PayPal Privacy Statement.",
				genericError: "We're sorry, something seems to have gone wrong.",
				hostedFieldsTokenizationFailOnDuplicateError: "This card already exists as a saved payment method.",
				hostedFieldsFailedTokenizationError: "Please check your entries and try again.",
				hostedFieldsFieldsInvalidError: "Please check your entries and try again.",
				hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Card verification failed. Please check your entries and try again.",
				paypalButtonMustBeUsed: "Use the PayPal button to continue with your payment.",
				venmoButtonMustBeUsed: "Use the Venmo button to continue with your payment.",
				applePayButtonMustBeUsed: "Use the Apple Pay button to continue with your payment.",
				paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.",
				paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.",
				paypalTokenizationRequestActiveError: "PayPal payment authorisation is already in progress.",
				venmoCanceledError: "We're sorry, something seems to have gone wrong. Please make sure you have the most recent version of the Venmo app installed on your device and that your browser supports switching to Venmo.",
				vaultManagerPaymentMethodDeletionError: "Unable to delete payment method. Please try again.",
				venmoAppFailedError: "The Venmo app couldn't be found on your device.",
				unsupportedCardTypeError: "This card type isn't supported. Please try another card.",
				applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.",
				applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
				cardholderNameLabel: "Cardholder name",
				cardNumberLabel: "Card number",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 digits)",
				cvvFourDigitLabelSubheading: "(4 digits)",
				cardholderNamePlaceholder: "Cardholder name",
				expirationDateLabel: "Expiry date",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "Postcode",
				saveCardLabel: "Save card",
				payWithCard: "Pay with card",
				endingIn: "Ending in {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Card",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		230: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Paying with {{paymentSource}}",
				chooseAnotherWayToPay: "Choose another way to pay",
				chooseAWayToPay: "Choose a way to pay",
				otherWaysToPay: "Other ways to pay",
				edit: "Edit",
				doneEditing: "Done",
				editPaymentMethods: "Edit funding sources",
				CreditCardDeleteConfirmationMessage: "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Delete PayPal account {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Are you sure you want to delete Venmo account with username {{identifier}}?",
				genericDeleteConfirmationMessage: "Are you sure you want to delete this funding source?",
				deleteCancelButton: "Cancel",
				deleteConfirmationButton: "Delete",
				fieldEmptyForCvv: "Please enter a security code.",
				fieldEmptyForExpirationDate: "Please enter an expiry date.",
				fieldEmptyForCardholderName: "Please enter a cardholder name.",
				fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.",
				fieldEmptyForNumber: "Please enter a number.",
				fieldEmptyForPostalCode: "Please enter a postcode.",
				fieldInvalidForCardholderName: "This cardholder name isn't valid.",
				fieldInvalidForCvv: "This security code isn't valid.",
				fieldInvalidForExpirationDate: "This expiry date isn't valid.",
				fieldInvalidForNumber: "This card number isn't valid.",
				fieldInvalidForPostalCode: "This postcode isn't valid.",
				noticeOfCollection: "By paying with my card, I agree to the PayPal Privacy Statement.",
				genericError: "Something went wrong on our end.",
				hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved funding source.",
				hostedFieldsFailedTokenizationError: "Please check your information and try again.",
				hostedFieldsFieldsInvalidError: "Please check your information and try again.",
				hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Please check your information and try again.",
				paypalButtonMustBeUsed: "Use the PayPal button to continue with your payment.",
				venmoButtonMustBeUsed: "Use the Venmo button to continue with your payment.",
				applePayButtonMustBeUsed: "Use the Apple Pay button to continue with your payment.",
				paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.",
				paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.",
				paypalTokenizationRequestActiveError: "PayPal payment authorisation is already in progress.",
				venmoCanceledError: "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
				vaultManagerPaymentMethodDeletionError: "We were unable to delete the funding source. Please try again.",
				venmoAppFailedError: "The Venmo app couldn't be found on your device.",
				unsupportedCardTypeError: "This card type isn't supported. Please try another card.",
				applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.",
				applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
				cardholderNameLabel: "Cardholder name",
				cardNumberLabel: "Card number",
				cvvLabel: "Security code",
				cvvThreeDigitLabelSubheading: "(3 digits)",
				cvvFourDigitLabelSubheading: "(4 digits)",
				cardholderNamePlaceholder: "Cardholder name",
				expirationDateLabel: "Expiry date",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "Postcode",
				saveCardLabel: "Save card",
				payWithCard: "Pay with card",
				endingIn: "Ending in {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Card",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		231: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Paying with {{paymentSource}}",
				chooseAnotherWayToPay: "Choose another way to pay",
				chooseAWayToPay: "Choose a way to pay",
				otherWaysToPay: "Other ways to pay",
				edit: "Edit",
				doneEditing: "Done",
				editPaymentMethods: "Edit payment methods",
				CreditCardDeleteConfirmationMessage: "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Delete PayPal account {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Are you sure you want to delete Venmo account with username {{identifier}}?",
				genericDeleteConfirmationMessage: "Are you sure you want to delete this payment method?",
				deleteCancelButton: "Cancel",
				deleteConfirmationButton: "Delete",
				fieldEmptyForCvv: "Please enter a CVV.",
				fieldEmptyForExpirationDate: "Please enter an expiry date.",
				fieldEmptyForCardholderName: "Please enter a cardholder name.",
				fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.",
				fieldEmptyForNumber: "Please enter a number.",
				fieldEmptyForPostalCode: "Please enter a PIN code.",
				fieldInvalidForCardholderName: "This cardholder name isn't valid.",
				fieldInvalidForCvv: "This CVV isn't valid.",
				fieldInvalidForExpirationDate: "This expiry date isn't valid.",
				fieldInvalidForNumber: "This card number isn't valid.",
				fieldInvalidForPostalCode: "This PIN code isn't valid.",
				noticeOfCollection: "By paying with my card, I agree to the PayPal Privacy Statement.",
				genericError: "We're sorry, something seems to have gone wrong.",
				hostedFieldsTokenizationFailOnDuplicateError: "This card already exists as a saved payment method.",
				hostedFieldsFailedTokenizationError: "Please check your information and try again.",
				hostedFieldsFieldsInvalidError: "Please check your information and try again.",
				hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Card verification failed. Please check your information and try again.",
				paypalButtonMustBeUsed: "Use the PayPal button to continue with your payment.",
				venmoButtonMustBeUsed: "Use the Venmo button to continue with your payment.",
				applePayButtonMustBeUsed: "Use the Apple Pay button to continue with your payment.",
				paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.",
				paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.",
				paypalTokenizationRequestActiveError: "PayPal payment authorisation is already in progress.",
				venmoCanceledError: "We're sorry, something seems to have gone wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
				vaultManagerPaymentMethodDeletionError: "Unable to delete payment method. Please try again.",
				venmoAppFailedError: "The Venmo app couldn't be found on your device.",
				unsupportedCardTypeError: "This card type isn't supported. Please try another card.",
				applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.",
				applePayActiveCardError: "Add a supported card to your Apple Pay digital wallet.",
				cardholderNameLabel: "Cardholder name",
				cardNumberLabel: "Card number",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 digits)",
				cvvFourDigitLabelSubheading: "(4 digits)",
				cardholderNamePlaceholder: "Cardholder name",
				expirationDateLabel: "Expiry date",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "PIN code",
				saveCardLabel: "Save card",
				payWithCard: "Pay with card",
				endingIn: "Ending in {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Card",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		232: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Paying with {{paymentSource}}",
				chooseAnotherWayToPay: "Choose another way to pay",
				chooseAWayToPay: "Choose a way to pay",
				otherWaysToPay: "Other ways to pay",
				edit: "Edit",
				doneEditing: "Done",
				editPaymentMethods: "Edit payment methods",
				CreditCardDeleteConfirmationMessage: "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Delete PayPal account {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Are you sure you want to delete Venmo account with username {{identifier}}?",
				genericDeleteConfirmationMessage: "Are you sure you want to delete this payment method?",
				deleteCancelButton: "Cancel",
				deleteConfirmationButton: "Delete",
				fieldEmptyForCvv: "Please fill out a CVV.",
				fieldEmptyForExpirationDate: "Please fill out an expiration date.",
				fieldEmptyForCardholderName: "Please fill out a cardholder name.",
				fieldEmptyForNumber: "Please fill out a card number.",
				fieldEmptyForPostalCode: "Please fill out a postal code.",
				fieldInvalidForCardholderName: "This cardholder name is not valid.",
				fieldInvalidForCvv: "This security code is not valid.",
				fieldInvalidForExpirationDate: "This expiration date is not valid.",
				fieldInvalidForNumber: "This card number is not valid.",
				fieldInvalidForPostalCode: "This postal code is not valid.",
				fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.",
				noticeOfCollection: "By paying with my card, I agree to the PayPal Privacy Statement.",
				genericError: "Something went wrong on our end.",
				hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved payment method.",
				hostedFieldsFailedTokenizationError: "Please check your information and try again.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Please check your information and try again.",
				hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.",
				hostedFieldsFieldsInvalidError: "Please check your information and try again.",
				paypalButtonMustBeUsed: "Use the PayPal button to continue with your payment.",
				venmoButtonMustBeUsed: "Use the Venmo button to continue with your payment.",
				applePayButtonMustBeUsed: "Use the Apple Pay button to continue with your payment.",
				paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.",
				paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.",
				paypalTokenizationRequestActiveError: "PayPal payment authorization is already in progress.",
				applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.",
				applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
				vaultManagerPaymentMethodDeletionError: "Unable to delete payment method, try again.",
				venmoCanceledError: "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
				venmoAppFailedError: "The Venmo app could not be found on your device.",
				unsupportedCardTypeError: "This card type is not supported. Please try another card.",
				cardholderNameLabel: "Cardholder Name",
				cardNumberLabel: "Card Number",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 digits)",
				cvvFourDigitLabelSubheading: "(4 digits)",
				expirationDateLabel: "Expiration Date",
				expirationDateLabelSubheading: "(MM/YY)",
				cardholderNamePlaceholder: "Cardholder Name",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "Postal Code",
				saveCardLabel: "Save card",
				payWithCard: "Pay with card",
				endingIn: "Ending in {{lastFourCardDigits}}",
				Card: "Card",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Apple Pay": "Apple Pay",
				"Google Pay": "Google Pay",
				Venmo: "Venmo",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		233: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Pagar con {{paymentSource}}",
				chooseAnotherWayToPay: "Seleccionar otra forma de pago",
				chooseAWayToPay: "Seleccionar forma de pago",
				otherWaysToPay: "Otras formas de pago",
				edit: "Editar",
				doneEditing: "Hecho",
				editPaymentMethods: "Editar formas de pago",
				CreditCardDeleteConfirmationMessage: "¿Eliminar la tarjeta {{secondaryIdentifier}} terminada en {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "¿Eliminar la cuenta PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "¿Seguro que deseas eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
				genericDeleteConfirmationMessage: "¿Seguro que deseas eliminar esta forma de pago?",
				deleteCancelButton: "Cancelar",
				deleteConfirmationButton: "Eliminar",
				fieldEmptyForCvv: "Introduce el CVV.",
				fieldEmptyForExpirationDate: "Introduce una fecha de vencimiento.",
				fieldEmptyForCardholderName: "Introduce el nombre del titular de la tarjeta.",
				fieldTooLongForCardholderName: "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
				fieldEmptyForNumber: "Introduce un número.",
				fieldEmptyForPostalCode: "Introduce un código postal.",
				fieldInvalidForCardholderName: "El nombre del titular de la tarjeta no es válido.",
				fieldInvalidForCvv: "El código de seguridad no es válido.",
				fieldInvalidForExpirationDate: "La fecha de vencimiento no es válida.",
				fieldInvalidForNumber: "El número de tarjeta no es válido.",
				fieldInvalidForPostalCode: "El código postal no es válido.",
				noticeOfCollection: "Al pagar con mi tarjeta, acepto la Declaración de privacidad de PayPal.",
				genericError: "Ha habido un problema.",
				hostedFieldsTokenizationFailOnDuplicateError: "Esta tarjeta de crédito ya existe como forma de pago guardada.",
				hostedFieldsFailedTokenizationError: "Comprueba la información e inténtalo de nuevo.",
				hostedFieldsFieldsInvalidError: "Comprueba la información e inténtalo de nuevo.",
				hostedFieldsTokenizationNetworkErrorError: "Error de red. Inténtalo de nuevo.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Error al verificar la tarjeta de crédito. Comprueba la información e inténtalo de nuevo.",
				paypalButtonMustBeUsed: "Utiliza el botón de PayPal para continuar con el pago.",
				venmoButtonMustBeUsed: "Pulsa el botón de Venmo para continuar con el pago.",
				applePayButtonMustBeUsed: "Utiliza el botón de Apple Pay para continuar con el pago.",
				paypalAccountTokenizationFailedError: "Se ha producido un error al añadir la cuenta PayPal. Inténtalo de nuevo.",
				paypalFlowFailedError: "Se ha producido un error al conectar con PayPal. Inténtalo de nuevo.",
				paypalTokenizationRequestActiveError: "La autorización del pago de PayPal ya está en curso.",
				venmoCanceledError: "Ha habido un error. Asegúrate de tener la versión más reciente de la aplicación de Venmo instalada en el dispositivo y de que el navegador admita el cambio a Venmo.",
				vaultManagerPaymentMethodDeletionError: "No se puede eliminar la forma de pago. Inténtalo de nuevo.",
				venmoAppFailedError: "No se ha podido encontrar la aplicación de Venmo en tu dispositivo.",
				unsupportedCardTypeError: "No se admite este tipo de tarjeta. Prueba con otra tarjeta.",
				applePayTokenizationError: "Se ha producido un error de red al procesar el pago de Apple Pay. Inténtalo de nuevo.",
				applePayActiveCardError: "Añade una tarjeta compatible a tu cartera de Apple Pay.",
				cardholderNameLabel: "Nombre del titular de la tarjeta",
				cardNumberLabel: "Número de tarjeta",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 dígitos)",
				cvvFourDigitLabelSubheading: "(4 dígitos)",
				cardholderNamePlaceholder: "Nombre del titular de la tarjeta",
				expirationDateLabel: "Fecha de vencimiento",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Código postal",
				saveCardLabel: "Guardar tarjeta",
				payWithCard: "Pagar con tarjeta",
				endingIn: "Terminada en {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Tarjeta",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		234: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Pagar con {{paymentSource}}",
				chooseAnotherWayToPay: "Elija otra forma de pago",
				chooseAWayToPay: "Seleccione una forma de pago",
				otherWaysToPay: "Otras formas de pago",
				edit: "Editar",
				doneEditing: "Listo",
				editPaymentMethods: "Editar métodos de pago",
				CreditCardDeleteConfirmationMessage: "¿Eliminar tarjeta {{secondaryIdentifier}} con terminación {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "¿Desea eliminar la cuenta de PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "¿Seguro que desea eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
				genericDeleteConfirmationMessage: "¿Seguro que desea eliminar esta forma de pago?",
				deleteCancelButton: "Cancelar",
				deleteConfirmationButton: "Eliminar",
				fieldEmptyForCvv: "Ingrese un CVV.",
				fieldEmptyForExpirationDate: "Ingrese una fecha de vencimiento.",
				fieldEmptyForCardholderName: "Ingrese un nombre de titular de tarjeta.",
				fieldTooLongForCardholderName: "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
				fieldEmptyForNumber: "Ingrese un número.",
				fieldEmptyForPostalCode: "Ingrese un código postal.",
				fieldInvalidForCardholderName: "El nombre del titular de la tarjeta no es válido.",
				fieldInvalidForCvv: "Este código de seguridad no es válido.",
				fieldInvalidForExpirationDate: "Esta fecha de vencimiento no es válida.",
				fieldInvalidForNumber: "Este número de tarjeta no es válido.",
				fieldInvalidForPostalCode: "Este código postal no es válido.",
				noticeOfCollection: "Al pagar con mi tarjeta, acepto el Aviso de Privacidad de PayPal.",
				genericError: "Se ha producido un error.",
				hostedFieldsTokenizationFailOnDuplicateError: "Esta tarjeta de crédito ya existe como forma de pago guardada.",
				hostedFieldsFailedTokenizationError: "Revise la información e inténtelo de nuevo.",
				hostedFieldsFieldsInvalidError: "Revise la información e inténtelo de nuevo.",
				hostedFieldsTokenizationNetworkErrorError: "Error de red. Inténtelo de nuevo.",
				hostedFieldsTokenizationCvvVerificationFailedError: "La verificación de la tarjeta de crédito falló. Revise la información e inténtelo de nuevo.",
				paypalButtonMustBeUsed: "Utilice el botón de PayPal para continuar con su pago.",
				venmoButtonMustBeUsed: "Use el botón Venmo para continuar con el pago.",
				applePayButtonMustBeUsed: "Utilice el botón de Apple Pay para continuar con su pago.",
				paypalAccountTokenizationFailedError: "Se ha producido un error al agregar la cuenta de PayPal. Inténtelo de nuevo.",
				paypalFlowFailedError: "Se ha producido un error al conectar con PayPal. Inténtelo de nuevo.",
				paypalTokenizationRequestActiveError: "La autorización de pago de PayPal ya está en curso.",
				venmoCanceledError: "Se ha producido un error. Asegúrese de que tiene la versión más reciente de la aplicación de Venmo instalada en su dispositivo y que su navegador admita el sitio web Venmo.",
				vaultManagerPaymentMethodDeletionError: "No se pudo eliminar la forma de pago, inténtelo de nuevo.",
				venmoAppFailedError: "No se pudo encontrar la aplicación de Venmo en su dispositivo.",
				unsupportedCardTypeError: "Este tipo de tarjeta no es compatible. Inténtelo con otra tarjeta.",
				applePayTokenizationError: "Se ha producido un error de red al procesar el pago de Apple Pay. Inténtelo de nuevo.",
				applePayActiveCardError: "Agregue una tarjeta compatible a su cartera de Apple Pay.",
				cardholderNameLabel: "Nombre del titular de la tarjeta",
				cardNumberLabel: "Número de tarjeta",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 dígitos)",
				cvvFourDigitLabelSubheading: "(4 dígitos)",
				cardholderNamePlaceholder: "Nombre del titular de la tarjeta",
				expirationDateLabel: "Fecha de vencimiento",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Código postal",
				saveCardLabel: "Guardar tarjeta",
				payWithCard: "Pagar con tarjeta",
				endingIn: "Con terminación {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Tarjeta",
				PayPal: "Paypal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		235: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Maksuväline: {{paymentSource}}",
				chooseAnotherWayToPay: "Valitse toinen maksutapa",
				chooseAWayToPay: "Valitse maksutapa",
				otherWaysToPay: "Muita maksutapoja",
				edit: "Muokkaa",
				doneEditing: "Valmis",
				editPaymentMethods: "Muokkaa maksutapoja",
				CreditCardDeleteConfirmationMessage: "Haluatko poistaa {{secondaryIdentifier}}} -kortin, joka päättyy {{identifier}}}?",
				PayPalAccountDeleteConfirmationMessage: "Haluatko poistaa PayPal-tilin {{identifier}}}?",
				VenmoAccountDeleteConfirmationMessage: "Haluatko varmasti poistaa Venmo-tilin, jonka käyttäjätunnus on {{identifier}}}?",
				genericDeleteConfirmationMessage: "Haluatko varmasti poistaa tämän maksutavan?",
				deleteCancelButton: "Peruuta",
				deleteConfirmationButton: "Poista",
				fieldEmptyForCvv: "Anna turvakoodi.",
				fieldEmptyForExpirationDate: "Anna voimassaolon päättymispäivämäärä.",
				fieldEmptyForCardholderName: "Anna kortinhaltijan nimi.",
				fieldTooLongForCardholderName: "Kortinhaltijan nimen on oltava alle 256 merkkiä.",
				fieldEmptyForNumber: "Anna numero.",
				fieldEmptyForPostalCode: "Anna postinumero.",
				fieldInvalidForCardholderName: "Kortinhaltijan nimi ei ole kelvollinen.",
				fieldInvalidForCvv: "Turvakoodi ei ole kelvollinen.",
				fieldInvalidForExpirationDate: "Päättymispäivämäärä ei ole kelvollinen.",
				fieldInvalidForNumber: "Kortin numero ei ole kelvollinen.",
				fieldInvalidForPostalCode: "Postinumero ei ole kelvollinen.",
				noticeOfCollection: "Maksamalla kortillani hyväksyn PayPal tietosuojaselosteen.",
				genericError: "Jokin meni pieleen tässä päässä.",
				hostedFieldsTokenizationFailOnDuplicateError: "Tämä luottokortti on jo tallennettu maksutavaksi.",
				hostedFieldsFailedTokenizationError: "Tarkista tiedot ja yritä uudelleen.",
				hostedFieldsFieldsInvalidError: "Tarkista tiedot ja yritä uudelleen.",
				hostedFieldsTokenizationNetworkErrorError: "Verkkovirhe. Yritä uudelleen.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Luottokortin varmennus epäonnistui. Tarkista tiedot ja yritä uudelleen.",
				paypalButtonMustBeUsed: "Jatka maksua PayPal-painikkeen avulla.",
				venmoButtonMustBeUsed: "Jatka maksua Venmo-painikkeella.",
				applePayButtonMustBeUsed: "Jatka maksua Apple Pay-painikkeen avulla.",
				paypalAccountTokenizationFailedError: "Jotain meni pieleen PayPal-tiliä lisätessä. Yritä uudelleen.",
				paypalFlowFailedError: "Jotain meni pieleen muodostettaessa yhteyttä PayPaliin. Yritä uudelleen.",
				paypalTokenizationRequestActiveError: "PayPal-maksun valtuutus on jo meneillään.",
				venmoCanceledError: "Jokin meni pieleen. Varmista, että laitteeseesi on asennettu Venmo-sovelluksen viimeisin versio, ja että selain tukee vaihtamista Venmoon.",
				vaultManagerPaymentMethodDeletionError: "Maksutavan poistaminen ei onnistu, yritä uudelleen.",
				venmoAppFailedError: "Venmo-sovellusta ei löytynyt laitteesta.",
				unsupportedCardTypeError: "Tätä korttityyppiä ei tueta. Kokeile toista korttia.",
				applePayTokenizationError: "Tapahtui verkkovirhe Apple Pay -maksun käsittelyssä. Yritä uudelleen.",
				applePayActiveCardError: "Lisää tuettu kortti Apple Pay -lompakkoon.",
				cardholderNameLabel: "Kortinhaltijan nimi",
				cardNumberLabel: "Kortin numero",
				cvvLabel: "Kortin turvakoodi",
				cvvThreeDigitLabelSubheading: "(kolme numeroa)",
				cvvFourDigitLabelSubheading: "(neljä numeroa)",
				cardholderNamePlaceholder: "Kortinhaltijan nimi",
				expirationDateLabel: "Päättymispäivämäärä",
				expirationDateLabelSubheading: "(KK/VV)",
				expirationDatePlaceholder: "KK/VV",
				postalCodeLabel: "Postinumero",
				saveCardLabel: "Tallenna kortti",
				payWithCard: "Maksa kortilla",
				endingIn: "Päättyy {{lastFourCardDigits}}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kortti",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		236: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Payer avec {{paymentSource}}",
				chooseAnotherWayToPay: "Choisir un autre mode de paiement",
				chooseAWayToPay: "Choisir un mode de paiement",
				otherWaysToPay: "Autres modes de paiement",
				edit: "Modifier",
				doneEditing: "Terminé",
				editPaymentMethods: "Modifier les modes de paiement",
				CreditCardDeleteConfirmationMessage: "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}} ?",
				PayPalAccountDeleteConfirmationMessage: "Supprimer le compte PayPal {{identifier}} ?",
				VenmoAccountDeleteConfirmationMessage: "Souhaitez-vous vraiment supprimer le compte Venmo dont le nom d'utilisateur est {{identifier}} ?",
				genericDeleteConfirmationMessage: "Voulez-vous vraiment supprimer ce mode paiement ?",
				deleteCancelButton: "Annuler",
				deleteConfirmationButton: "Supprimer",
				fieldEmptyForCvv: "Saisissez un CVV.",
				fieldEmptyForExpirationDate: "Saisissez une date d'expiration.",
				fieldEmptyForCardholderName: "Saisissez le nom du titulaire de la carte.",
				fieldTooLongForCardholderName: "Le nom du titulaire de la carte doit contenir moins de 256 caractères.",
				fieldEmptyForNumber: "Saisissez un numéro.",
				fieldEmptyForPostalCode: "Saisissez un code postal.",
				fieldInvalidForCardholderName: "Le nom de ce titulaire de la carte n'est pas valide.",
				fieldInvalidForCvv: "Ce cryptogramme visuel n'est pas valide.",
				fieldInvalidForExpirationDate: "Cette date d'expiration n'est pas valide.",
				fieldInvalidForNumber: "Ce numéro de carte n'est pas valide.",
				fieldInvalidForPostalCode: "Ce code postal n'est pas valide.",
				noticeOfCollection: "En payant avec ma carte, j’accepte la Politique de confidentialité de PayPal.",
				genericError: "Une erreur s'est produite de notre côté.",
				hostedFieldsTokenizationFailOnDuplicateError: "Cette carte de crédit est déjà enregistrée en tant que mode de paiement.",
				hostedFieldsFailedTokenizationError: "Veuillez vérifier vos informations, puis réessayer.",
				hostedFieldsFieldsInvalidError: "Veuillez vérifier vos informations, puis réessayer.",
				hostedFieldsTokenizationNetworkErrorError: "Erreur de réseau. Réessayez.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Échec de vérification de la carte de crédit. Veuillez vérifier vos informations, puis réessayer.",
				paypalButtonMustBeUsed: "Utilisez le bouton PayPal pour poursuivre votre paiement.",
				venmoButtonMustBeUsed: "Utilisez le bouton Venmo pour continuer votre paiement.",
				applePayButtonMustBeUsed: "Utilisez le bouton Apple Pay pour poursuivre votre paiement.",
				paypalAccountTokenizationFailedError: "Une erreur s'est produite lors de l'ajout du compte PayPal. Veuillez réessayer.",
				paypalFlowFailedError: "Une erreur s'est produite lors de la connexion à PayPal. Veuillez réessayer.",
				paypalTokenizationRequestActiveError: "L'autorisation de paiement PayPal est déjà en cours.",
				venmoCanceledError: "Une erreur s'est produite. Assurez-vous que la version la plus récente de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
				vaultManagerPaymentMethodDeletionError: "Impossible de supprimer le mode de paiement. Réessayez.",
				venmoAppFailedError: "L'application Venmo n'est pas présente sur votre appareil.",
				unsupportedCardTypeError: "Ce type de carte n'est pas pris en charge. Veuillez essayer une autre carte.",
				applePayTokenizationError: "Une erreur de réseau s'est produite lors du traitement du paiement Apple Pay. Veuillez réessayer.",
				applePayActiveCardError: "Ajoutez une carte prise en charge à votre portefeuille Apple Pay.",
				cardholderNameLabel: "Nom du titulaire de la carte",
				cardNumberLabel: "Numéro de carte",
				cvvLabel: "Cryptogramme visuel",
				cvvThreeDigitLabelSubheading: "(3 chiffres)",
				cvvFourDigitLabelSubheading: "(4 chiffres)",
				cardholderNamePlaceholder: "Nom du titulaire de la carte",
				expirationDateLabel: "Date d'expiration",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Code postal",
				saveCardLabel: "Enregistrer la carte",
				payWithCard: "Payer par carte",
				endingIn: "Se terminant par {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Carte",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		237: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Payer avec : {{paymentSource}}",
				chooseAnotherWayToPay: "Choisir un autre mode de paiement",
				chooseAWayToPay: "Choisir un mode de paiement",
				otherWaysToPay: "Autres modes de paiement",
				edit: "Modifier",
				doneEditing: "Terminé",
				editPaymentMethods: "Modifier les modes de paiement",
				CreditCardDeleteConfirmationMessage: "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}} ?",
				PayPalAccountDeleteConfirmationMessage: "Supprimer le compte PayPal {{identifier}} ?",
				VenmoAccountDeleteConfirmationMessage: "Souhaitez-vous vraiment supprimer le compte Venmo associé au nom d'utilisateur {{identifier}} ?",
				genericDeleteConfirmationMessage: "Souhaitez-vous vraiment supprimer ce mode de paiement ?",
				deleteCancelButton: "Annuler",
				deleteConfirmationButton: "Supprimer",
				fieldEmptyForCvv: "Renseignez un cryptogramme visuel.",
				fieldEmptyForExpirationDate: "Renseignez une date d'expiration.",
				fieldEmptyForCardholderName: "Renseignez le nom du titulaire de la carte.",
				fieldTooLongForCardholderName: "Le nom du titulaire de la carte doit comporter moins de 256 caractères.",
				fieldEmptyForNumber: "Renseignez un numéro.",
				fieldEmptyForPostalCode: "Renseignez un code postal.",
				fieldInvalidForCardholderName: "Le nom de ce titulaire de la carte est incorrect.",
				fieldInvalidForCvv: "Ce cryptogramme visuel est incorrect.",
				fieldInvalidForExpirationDate: "Cette date d'expiration est incorrecte.",
				fieldInvalidForNumber: "Ce numéro de carte est incorrect.",
				fieldInvalidForPostalCode: "Ce code postal est incorrect.",
				noticeOfCollection: "En payant avec ma carte, j'accepte la Politique de confidentialité de PayPal.",
				genericError: "Une erreur est survenue.",
				hostedFieldsTokenizationFailOnDuplicateError: "Cette carte bancaire existe déjà en tant que mode de paiement enregistré.",
				hostedFieldsFailedTokenizationError: "Vérifiez vos informations et réessayez.",
				hostedFieldsFieldsInvalidError: "Vérifiez vos informations et réessayez.",
				hostedFieldsTokenizationNetworkErrorError: "Erreur réseau. Réessayez.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Échec de la vérification de carte bancaire. Vérifiez vos informations et réessayez.",
				paypalButtonMustBeUsed: "Utilisez le bouton PayPal pour poursuivre le paiement.",
				venmoButtonMustBeUsed: "Utilisez le bouton Venmo pour poursuivre le paiement.",
				applePayButtonMustBeUsed: "Utilisez le bouton Apple Pay pour poursuivre le paiement.",
				paypalAccountTokenizationFailedError: "Une erreur est survenue lors de l'ajout du compte PayPal. Réessayez.",
				paypalFlowFailedError: "Une erreur est survenue lors de la connexion à PayPal. Réessayez.",
				paypalTokenizationRequestActiveError: "L'autorisation de paiement PayPal est déjà en cours.",
				venmoCanceledError: "Une erreur est survenue. Vérifiez que la dernière version de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
				vaultManagerPaymentMethodDeletionError: "Impossible de supprimer le mode de paiement, réessayez.",
				venmoAppFailedError: "Nous n'avons pas trouvé l'application Venmo sur votre appareil.",
				unsupportedCardTypeError: "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
				applePayTokenizationError: "Une erreur réseau est survenue lors du traitement du paiement Apple Pay. Réessayez.",
				applePayActiveCardError: "Enregistrez une carte prise en charge sur votre portefeuille Apple Pay.",
				cardholderNameLabel: "Nom du titulaire de la carte",
				cardNumberLabel: "Numéro de carte",
				cvvLabel: "Crypto.",
				cvvThreeDigitLabelSubheading: "(3 chiffres)",
				cvvFourDigitLabelSubheading: "(4 chiffres)",
				cardholderNamePlaceholder: "Nom du titulaire de la carte",
				expirationDateLabel: "Date d'expiration",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Code postal",
				saveCardLabel: "Enregistrer la carte",
				payWithCard: "Payer par carte",
				endingIn: "Se terminant par {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Carte",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		238: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Payer avec {{paymentSource}}",
				chooseAnotherWayToPay: "Choisir un autre mode de paiement",
				chooseAWayToPay: "Choisir un mode de paiement",
				otherWaysToPay: "Autres modes de paiement",
				edit: "Modifier",
				doneEditing: "Terminé",
				editPaymentMethods: "Modifier les modes de paiement",
				CreditCardDeleteConfirmationMessage: "Supprimer la carte {{secondaryIdentifier}}} se terminant par {{identifier}}} ?",
				PayPalAccountDeleteConfirmationMessage: "Supprimer le compte PayPal {{identifier}}} ?",
				VenmoAccountDeleteConfirmationMessage: "Souhaitez-vous vraiment supprimer le compte Venmo associé au nom d'utilisateur {{identifier}}} ?",
				genericDeleteConfirmationMessage: "Souhaitez-vous vraiment supprimer ce mode de paiement ?",
				deleteCancelButton: "Annuler",
				deleteConfirmationButton: "Supprimer",
				fieldEmptyForCvv: "Renseignez un cryptogramme visuel.",
				fieldEmptyForExpirationDate: "Renseignez une date d'expiration.",
				fieldEmptyForCardholderName: "Renseignez le nom du titulaire de la carte.",
				fieldTooLongForCardholderName: "Le nom du titulaire de la carte doit comporter moins de 256 caractères.",
				fieldEmptyForNumber: "Renseignez un numéro.",
				fieldEmptyForPostalCode: "Renseignez un code postal.",
				fieldInvalidForCardholderName: "Le nom de ce titulaire de la carte est incorrect.",
				fieldInvalidForCvv: "Ce cryptogramme visuel est incorrect.",
				fieldInvalidForExpirationDate: "Cette date d'expiration est incorrecte.",
				fieldInvalidForNumber: "Ce numéro de carte est incorrect.",
				fieldInvalidForPostalCode: "Ce code postal est incorrect.",
				noticeOfCollection: "En payant avec ma carte, j'accepte la Politique de confidentialité de PayPal.",
				genericError: "Une erreur est survenue.",
				hostedFieldsTokenizationFailOnDuplicateError: "Cette carte bancaire existe déjà en tant que mode de paiement enregistré.",
				hostedFieldsFailedTokenizationError: "Vérifiez vos informations et réessayez.",
				hostedFieldsFieldsInvalidError: "Vérifiez vos informations et réessayez.",
				hostedFieldsTokenizationNetworkErrorError: "Erreur réseau. Réessayez.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Échec de la vérification de carte bancaire. Vérifiez vos informations et réessayez.",
				paypalButtonMustBeUsed: "Utilisez le bouton PayPal pour poursuivre le paiement.",
				venmoButtonMustBeUsed: "Utilisez le bouton Venmo pour poursuivre le paiement.",
				applePayButtonMustBeUsed: "Utilisez le bouton Apple Pay pour poursuivre le paiement.",
				paypalAccountTokenizationFailedError: "Une erreur est survenue lors de l'ajout du compte PayPal. Réessayez.",
				paypalFlowFailedError: "Une erreur est survenue lors de la connexion à PayPal. Réessayez.",
				paypalTokenizationRequestActiveError: "L'autorisation de paiement PayPal est déjà en cours.",
				venmoCanceledError: "Une erreur est survenue. Vérifiez que la dernière version de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
				vaultManagerPaymentMethodDeletionError: "Impossible de supprimer le mode de paiement, réessayez.",
				venmoAppFailedError: "Nous n'avons pas trouvé l'application Venmo sur votre appareil.",
				unsupportedCardTypeError: "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
				applePayTokenizationError: "Une erreur réseau est survenue lors du traitement du paiement Apple Pay. Réessayez.",
				applePayActiveCardError: "Enregistrez une carte prise en charge sur votre portefeuille Apple Pay.",
				cardholderNameLabel: "Nom du titulaire de la carte",
				cardNumberLabel: "Numéro de carte",
				cvvLabel: "Crypto.",
				cvvThreeDigitLabelSubheading: "(3 chiffres)",
				cvvFourDigitLabelSubheading: "(4 chiffres)",
				cardholderNamePlaceholder: "Nom du titulaire de la carte",
				expirationDateLabel: "Date d'expiration",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Code postal",
				saveCardLabel: "Enregistrer la carte",
				payWithCard: "Payer par carte",
				endingIn: "Se termine le {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Carte",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		239: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "תשלום באמצעות {{paymentSource}}",
				chooseAnotherWayToPay: "עליך לבחור שיטת תשלום אחרת",
				chooseAWayToPay: "כיצד ברצונך לשלם?",
				otherWaysToPay: "שיטות תשלום אחרות",
				edit: "עריכה",
				doneEditing: "בוצע",
				editPaymentMethods: "עריכת שיטות תשלום",
				CreditCardDeleteConfirmationMessage: "למחוק {{secondaryIdentifier}} הכרטיס המסתיים {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "למחוק PayPal החשבון {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "האם אתה בטוח שברצונך למחוק את חשבון Venmo הרשום תחת שם המשתמש {{identifier}}?",
				genericDeleteConfirmationMessage: "האם אתה בטוח שברצונך למחוק שיטת תשלום זו?",
				deleteCancelButton: "ביטול",
				deleteConfirmationButton: "מחיקה",
				fieldEmptyForCvv: "עליך למלא את מספר האבטחה של כרטיס האשראי.",
				fieldEmptyForExpirationDate: "עליך למלא את תאריך פקיעת התוקף.",
				fieldEmptyForCardholderName: "עליך למלא את שם בעל הכרטיס.",
				fieldTooLongForCardholderName: "שם בעל הכרטיס יכול להכיל 256 תווים לכל היותר.",
				fieldEmptyForNumber: "עליך למלא את המספר.",
				fieldEmptyForPostalCode: "עליך למלא את המיקוד.",
				fieldInvalidForCardholderName: "שם בעל הכרטיס אינו חוקי.",
				fieldInvalidForCvv: "קוד אבטחה אינו חוקי.",
				fieldInvalidForExpirationDate: "תאריך פקיעת התוקף אינו חוקי.",
				fieldInvalidForNumber: "מספר כרטיס האשראי אינו חוקי.",
				fieldInvalidForPostalCode: "המיקוד אינו חוקי.",
				noticeOfCollection: "בכך שאני משלם/ת באמצעות כרטיס האשראי שלי, אני מסכים/ה להצהרת הפרטיות של PayPal.",
				genericError: "נראה שמשהו השתבש בצד שלנו.",
				hostedFieldsTokenizationFailOnDuplicateError: "כרטיס אשראי זה כבר שמור כשיטת תשלום.",
				hostedFieldsFailedTokenizationError: "עליך לבדוק את הפרטים שלך ולנסות שוב.",
				hostedFieldsFieldsInvalidError: "עליך לבדוק את הפרטים שלך ולנסות שוב.",
				hostedFieldsTokenizationNetworkErrorError: "שגיאת רשת. עליך לנסות שוב.",
				hostedFieldsTokenizationCvvVerificationFailedError: "אימות כרטיס האשראי נכשל. עליך לבדוק את הפרטים שלך ולנסות שוב.",
				paypalButtonMustBeUsed: "להשתמש בלחצן PayPal כדי להמשיך בביצוע התשלום שלך.",
				venmoButtonMustBeUsed: "השתמשו בלחצן Venmo כדי להמשיך בתשלום שלכם.",
				applePayButtonMustBeUsed: "השתמשו בלחצן Apple Pay כדי להמשיך בביצוע התשלום שלכם.",
				paypalAccountTokenizationFailedError: "משהו השתבש בעת הוספת חשבון PayPal. עליך לנסות שוב.",
				paypalFlowFailedError: "משהו השתבש בהתחברות ל-PayPal. עליך לנסות שוב.",
				paypalTokenizationRequestActiveError: "אישור התשלום של PayPal כבר מתבצע.",
				venmoCanceledError: "נראה שמשהו השתבש. עליך לוודא שהגרסה העדכנית ביותר של אפליקציית Venmo מותקנת במכשיר שלך, ושהדפדפן שלך תומך במעבר ל-Venmo.",
				vaultManagerPaymentMethodDeletionError: "לא הצלחנו למחוק את שיטת התשלום, עליך לנסות שוב.",
				venmoAppFailedError: "לא מצאנו למצוא את אפליקציית Venmo במכשיר שלך.",
				unsupportedCardTypeError: "סוג כרטיס זה אינו נתמך. עליך לנסות כרטיס אחר.",
				applePayTokenizationError: "אירעה שגיאת רשת בעת עיבוד תשלום התשלומים של Apple Pay. עליך לנסות שוב.",
				applePayActiveCardError: "הוספת כרטיס נתמך לארנק Apple Pay שלך.",
				cardholderNameLabel: "שם בעל הכרטיס",
				cardNumberLabel: "מספר כרטיס",
				cvvLabel: "קוד אבטחת כרטיס (CVV)",
				cvvThreeDigitLabelSubheading: "(3 ספרות)",
				cvvFourDigitLabelSubheading: "(4 ספרות)",
				cardholderNamePlaceholder: "שם בעל הכרטיס",
				expirationDateLabel: "תאריך פקיעת תוקף",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY‏",
				postalCodeLabel: "מיקוד",
				saveCardLabel: "שמירת כרטיס אשראי",
				payWithCard: "לשלם באמצעות כרטיס אשראי",
				endingIn: "מסתיים בתאריך {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "כרטיס",
				PayPal: "PayPal‏",
				"PayPal Credit": "PayPal Credit‏",
				"Google Pay": "Google Pay",
				"American Express": "אמריקן אקספרס",
				Discover: "Discover‏",
				"Diners Club": "דיינרס קלאב",
				Elo: "Elo‏",
				Hiper: "Hiper‏",
				Hipercard: "HiperCard‏",
				MasterCard: "מאסטרקארד",
				Visa: "Visa",
				JCB: "JCB‏",
				Maestro: "Maestro‏",
				UnionPay: "UnionPay‏"
			}
		}, {}],
		240: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Fizetés ezzel: {{paymentSource}}",
				chooseAnotherWayToPay: "Válasszon másik fizetési módot",
				chooseAWayToPay: "Válasszon fizetési módot",
				otherWaysToPay: "Egyéb fizetési módok",
				edit: "Szerkesztés",
				doneEditing: "Kész",
				editPaymentMethods: "Fizetési módok szerkesztése",
				CreditCardDeleteConfirmationMessage: "Törli a(z) {{identifier}}} végű {{secondaryIdentifier}}} kártyát?",
				PayPalAccountDeleteConfirmationMessage: "Törli a(z) {{identifier}} PayPal-számlát?",
				VenmoAccountDeleteConfirmationMessage: "Biztosan törli a(z) {{identifier}} felhasználónévhez tartozó Venmo-számlát?",
				genericDeleteConfirmationMessage: "Biztosan törli ezt a fizetési módot?",
				deleteCancelButton: "Mégse",
				deleteConfirmationButton: "Törlés",
				fieldEmptyForCvv: "Kérjük, töltse ki a CVV-számot.",
				fieldEmptyForExpirationDate: "Töltse ki a lejárati dátumot.",
				fieldEmptyForCardholderName: "Töltse ki a kártyabirtokos nevét.",
				fieldTooLongForCardholderName: "A kártyatulajdonos neve nem lehet hosszabb mint 256 karakter.",
				fieldEmptyForNumber: "Töltse ki a számot.",
				fieldEmptyForPostalCode: "Töltse ki az irányítószámot.",
				fieldInvalidForCardholderName: "Ez a kártyabirtokos neve nem érvényes.",
				fieldInvalidForCvv: "Ez a biztonsági kód nem érvényes.",
				fieldInvalidForExpirationDate: "Ez a lejárati dátum érvénytelen.",
				fieldInvalidForNumber: "Ez a kártyaszám nem érvényes.",
				fieldInvalidForPostalCode: "Ez az irányítószám nem érvényes.",
				noticeOfCollection: "A kártyámmal történő fizetés révén elfogadom a PayPal Adatvédelmi nyilatkozatát.",
				genericError: "Hiba történt a mi oldalunkon.",
				hostedFieldsTokenizationFailOnDuplicateError: "Ez a hitelkártya már szerepel mentett fizetési módként.",
				hostedFieldsFailedTokenizationError: "Ellenőrizze az adatait, majd próbálja újra.",
				hostedFieldsFieldsInvalidError: "Ellenőrizze az adatait, majd próbálja újra.",
				hostedFieldsTokenizationNetworkErrorError: "Hálózati hiba. Próbálja újra.",
				hostedFieldsTokenizationCvvVerificationFailedError: "A hitelkártya hitelesítése sikertelen. Ellenőrizze az adatait, majd próbálja újra.",
				paypalButtonMustBeUsed: "A fizetés folytatásához használja a PayPal-gombot.",
				venmoButtonMustBeUsed: "Használja a Venmo-gombot a fizetés folytatásához.",
				applePayButtonMustBeUsed: "A fizetés folytatásához használja az Apple Pay-gombot.",
				paypalAccountTokenizationFailedError: "Hiba történt a PayPal-számla hozzáadása közben. Próbálja újra.",
				paypalFlowFailedError: "Hiba történt a PayPalhoz való kapcsolódás közben. Próbálja újra.",
				paypalTokenizationRequestActiveError: "A PayPal-fizetés engedélyezése már folyamatban van.",
				venmoCanceledError: "Hiba történt. Ellenőrizze, hogy eszközére a Venmo-alkalmazás legfrissebb verziója van-e telepítve, és hogy a böngészője támogatja-e a Venmo-ra történő átváltást.",
				vaultManagerPaymentMethodDeletionError: "Nem sikerült törölni a fizetési módot, próbálja újra.",
				venmoAppFailedError: "A Venmo alkalmazást nem találja a rendszer az eszközön.",
				unsupportedCardTypeError: "Ez a kártyatípus nem támogatott. Próbáljon meg egy másik kártyát.",
				applePayTokenizationError: "Hálózati hiba történt az Apple Pay-kifizetés közben. Próbálja újra.",
				applePayActiveCardError: "Adjon egy támogatott kártyát az Apple Pay pénztárcához.",
				cardholderNameLabel: "Kártyabirtokos neve",
				cardNumberLabel: "Kártyaszám",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 számjegy)",
				cvvFourDigitLabelSubheading: "(4 számjegy)",
				cardholderNamePlaceholder: "Kártyabirtokos neve",
				expirationDateLabel: "Lejárati dátum",
				expirationDateLabelSubheading: "(HH/ÉÉ)",
				expirationDatePlaceholder: "HH/ÉÉ",
				postalCodeLabel: "Irányítószám",
				saveCardLabel: "Kártya mentése",
				payWithCard: "Fizetés bankkártyával vagy hitelkártyával",
				endingIn: "{{lastFourCardDigits}}} végű",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kártya",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		241: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Membayar dengan {{paymentSource}}",
				chooseAnotherWayToPay: "Pilih metode pembayaran lain",
				chooseAWayToPay: "Pilih cara pembayaran",
				otherWaysToPay: "Cara lain untuk membayar",
				edit: "Edit",
				doneEditing: "Selesai",
				editPaymentMethods: "Edit metode pembayaran",
				CreditCardDeleteConfirmationMessage: "Hapus kartu {{secondaryIdentifier}} yang berakhiran dengan {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Hapus rekening PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Yakin ingin menghapus rekening Venmo dengan nama pengguna {{identifier}}?",
				genericDeleteConfirmationMessage: "Yakin ingin menghapus metode pembayaran ini?",
				deleteCancelButton: "Batalkan",
				deleteConfirmationButton: "Hapus",
				fieldEmptyForCvv: "Mohon mengisi CVV.",
				fieldEmptyForExpirationDate: "Silakan mengisi tanggal kedaluwarsa.",
				fieldEmptyForCardholderName: "Silakan mengisi nama pemilik kartu.",
				fieldTooLongForCardholderName: "Nama pemilik kartu harus kurang dari 256 karakter.",
				fieldEmptyForNumber: "Mohon mengisi angkanya.",
				fieldEmptyForPostalCode: "Mohon mengisi kode pos.",
				fieldInvalidForCardholderName: "Nama pemilik kartu ini tidak valid.",
				fieldInvalidForCvv: "Kode keamanan ini tidak valid.",
				fieldInvalidForExpirationDate: "Tanggal kedaluwarsa ini tidak valid.",
				fieldInvalidForNumber: "Nomor kartu ini tidak valid.",
				fieldInvalidForPostalCode: "Kode pos ini tidak valid.",
				noticeOfCollection: "Dengan membayar menggunakan kartu, saya menyetujui Pernyataan Privasi PayPal.",
				genericError: "Ada yang salah pada sistem kami.",
				hostedFieldsTokenizationFailOnDuplicateError: "Kartu kredit ini telah ada sebelumnya sebagai metode pembayaran tersimpan.",
				hostedFieldsFailedTokenizationError: "Mohon periksa informasi Anda dan coba lagi.",
				hostedFieldsFieldsInvalidError: "Mohon periksa informasi Anda dan coba lagi.",
				hostedFieldsTokenizationNetworkErrorError: "Kesalahan jaringan. Mohon coba lagi.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Verifikasi kartu kredit gagal. Mohon periksa informasi Anda dan coba lagi.",
				paypalButtonMustBeUsed: "Gunakan tombol PayPal untuk melanjutkan pembayaran.",
				venmoButtonMustBeUsed: "Gunakan tombol Venmo untuk melanjutkan pembayaran Anda.",
				applePayButtonMustBeUsed: "Gunakan tombol Apple Pay untuk melanjutkan pembayaran.",
				paypalAccountTokenizationFailedError: "Terjadi kesalahan saat menambahkan rekening PayPal. Mohon coba lagi.",
				paypalFlowFailedError: "Terjadi kesalahan ketika menghubungkan ke PayPal. Mohon coba lagi.",
				paypalTokenizationRequestActiveError: "Otorisasi pembayaran PayPal sedang diproses.",
				venmoCanceledError: "Terjadi kesalahan. Pastikan Anda memiliki aplikasi Venmo versi terbaru di perangkat dan peramban Anda mendukung peralihan ke Venmo.",
				vaultManagerPaymentMethodDeletionError: "Tidak dapat menghapus metode pembayaran, coba lagi.",
				venmoAppFailedError: "Aplikasi Venmo tidak dapat ditemukan di perangkat Anda.",
				unsupportedCardTypeError: "Jenis kartu ini tidak didukung. Mohon coba kartu lainnya.",
				applePayTokenizationError: "Terjadi kesalahan pada jaringan saat memproses pembayaran Apple Pay. Mohon coba lagi.",
				applePayActiveCardError: "Tambahkan kartu yang didukung oleh wallet Apple Pay Anda.",
				cardholderNameLabel: "Nama Pemilik Kartu",
				cardNumberLabel: "Nomor Kartu",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 angka)",
				cvvFourDigitLabelSubheading: "(4 angka)",
				cardholderNamePlaceholder: "Nama Pemilik Kartu",
				expirationDateLabel: "Tanggal Kedaluwarsa",
				expirationDateLabelSubheading: "(BB/TT)",
				expirationDatePlaceholder: "BB/TT",
				postalCodeLabel: "Kode Pos",
				saveCardLabel: "Simpan kartu",
				payWithCard: "Bayar dengan kartu",
				endingIn: "Berakhiran dengan {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kartu",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Jelajahi",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		242: [function(e, t, n) {
			"use strict";
			var i = e("../lib/assign").assign,
				r = {
					ar_EG: e("./ar_EG"),
					cs_CZ: e("./cs_CZ"),
					da_DK: e("./da_DK"),
					de_DE: e("./de_DE"),
					el_GR: e("./el_GR"),
					en_AU: e("./en_AU"),
					en_GB: e("./en_GB"),
					en_IN: e("./en_IN"),
					en_US: e("./en_US"),
					es_ES: e("./es_ES"),
					es_XC: e("./es_XC"),
					fi_FI: e("./fi_FI"),
					fr_CA: e("./fr_CA"),
					fr_FR: e("./fr_FR"),
					fr_XC: e("./fr_XC"),
					he_IL: e("./he_IL"),
					hu_HU: e("./hu_HU"),
					id_ID: e("./id_ID"),
					it_IT: e("./it_IT"),
					ja_JP: e("./ja_JP"),
					ko_KR: e("./ko_KR"),
					nl_NL: e("./nl_NL"),
					no_NO: e("./no_NO"),
					pl_PL: e("./pl_PL"),
					pt_BR: e("./pt_BR"),
					pt_PT: e("./pt_PT"),
					ru_RU: e("./ru_RU"),
					sk_SK: e("./sk_SK"),
					sv_SE: e("./sv_SE"),
					th_TH: e("./th_TH"),
					zh_CN: e("./zh_CN"),
					zh_HK: e("./zh_HK"),
					zh_TW: e("./zh_TW"),
					zh_XC: e("./zh_XC")
				},
				o = {
					ar: r.ar_EG,
					cs: r.cs_CZ,
					da: r.da_DK,
					de: r.de_DE,
					el: r.el_GR,
					en: r.en_US,
					es: r.es_ES,
					fi: r.fi_FI,
					fr: r.fr_FR,
					id: r.id_ID,
					it: r.it_IT,
					hu: r.hu_HU,
					ja: r.ja_JP,
					ko: r.ko_KR,
					nl: r.nl_NL,
					no: r.no_NO,
					pl: r.pl_PL,
					pt: r.pt_PT,
					ru: r.ru_RU,
					sk: r.sk_SK,
					sv: r.sv_SE,
					th: r.th_TH,
					zh: r.zh_CN
				};
			t.exports = {
				twoCharacterLocaleAliases: o,
				fiveCharacterLocales: r,
				translations: i({}, o, r)
			}
		}, {
			"../lib/assign": 208,
			"./ar_EG": 224,
			"./cs_CZ": 225,
			"./da_DK": 226,
			"./de_DE": 227,
			"./el_GR": 228,
			"./en_AU": 229,
			"./en_GB": 230,
			"./en_IN": 231,
			"./en_US": 232,
			"./es_ES": 233,
			"./es_XC": 234,
			"./fi_FI": 235,
			"./fr_CA": 236,
			"./fr_FR": 237,
			"./fr_XC": 238,
			"./he_IL": 239,
			"./hu_HU": 240,
			"./id_ID": 241,
			"./it_IT": 243,
			"./ja_JP": 244,
			"./ko_KR": 245,
			"./nl_NL": 246,
			"./no_NO": 247,
			"./pl_PL": 248,
			"./pt_BR": 249,
			"./pt_PT": 250,
			"./ru_RU": 251,
			"./sk_SK": 252,
			"./sv_SE": 253,
			"./th_TH": 254,
			"./zh_CN": 255,
			"./zh_HK": 256,
			"./zh_TW": 257,
			"./zh_XC": 258
		}],
		243: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Metodo di pagamento: {{paymentSource}}",
				chooseAnotherWayToPay: "Scegli un altro metodo di pagamento",
				chooseAWayToPay: "Scegli un metodo di pagamento",
				otherWaysToPay: "Altri metodi di pagamento",
				edit: "Modifica",
				doneEditing: "Fine",
				editPaymentMethods: "Modifica metodi di pagamento",
				CreditCardDeleteConfirmationMessage: "Eliminare la carta {{secondaryIdentifier}} le cui ultime cifre sono {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Eliminare il conto PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Vuoi davvero eliminare il conto Venmo con il nome utente {{identifier}}?",
				genericDeleteConfirmationMessage: "Vuoi davvero eliminare questo metodo di pagamento?",
				deleteCancelButton: "Annulla",
				deleteConfirmationButton: "Rimuovi",
				fieldEmptyForCvv: "Compila un CVV.",
				fieldEmptyForExpirationDate: "Compila una data di scadenza.",
				fieldEmptyForCardholderName: "Compila un nome del titolare.",
				fieldTooLongForCardholderName: "Il nome del titolare della carta non può contenere più di 256 caratteri.",
				fieldEmptyForNumber: "Compila un numero.",
				fieldEmptyForPostalCode: "Compila un CAP.",
				fieldInvalidForCardholderName: "Il nome del titolare non è valido.",
				fieldInvalidForCvv: "Il codice di sicurezza non è valido.",
				fieldInvalidForExpirationDate: "La data di scadenza non è valida.",
				fieldInvalidForNumber: "Il numero di carta non è valido.",
				fieldInvalidForPostalCode: "Il CAP non è valido.",
				noticeOfCollection: "Pagando con la carta, accetto la Dichiarazione sulla privacy di PayPal.",
				genericError: "Si è verificato un errore nei nostri sistemi.",
				hostedFieldsTokenizationFailOnDuplicateError: "Questa carta di credito esiste già come metodo di pagamento salvato.",
				hostedFieldsFailedTokenizationError: "Controlla i tuoi dati e riprova.",
				hostedFieldsFieldsInvalidError: "Controlla i tuoi dati e riprova.",
				hostedFieldsTokenizationNetworkErrorError: "Errore di rete. Riprova.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Verifica della carta di credito non riuscita. Controlla i tuoi dati e riprova.",
				paypalButtonMustBeUsed: "Usa il pulsante PayPal per continuare con il pagamento.",
				venmoButtonMustBeUsed: "Usa il pulsante Venmo per continuare il pagamento.",
				applePayButtonMustBeUsed: "Usa il pulsante Apple Pay per continuare con il pagamento.",
				paypalAccountTokenizationFailedError: "Si è verificato un errore durante l'aggiunta del conto PayPal. Riprova.",
				paypalFlowFailedError: "Si è verificato un errore durante la connessione a PayPal. Riprova.",
				paypalTokenizationRequestActiveError: "Autorizzazione di pagamento PayPal già in corso.",
				venmoCanceledError: "Si è verificato un errore. Assicurati di avere installato la versione più recente dell'app Venmo sul tuo dispositivo e che il tuo browser supporti il passaggio a Venmo.",
				vaultManagerPaymentMethodDeletionError: "Impossibile eliminare il metodo di pagamento, riprova.",
				venmoAppFailedError: "Impossibile trovare l'app Venmo sul tuo dispositivo.",
				unsupportedCardTypeError: "Questo tipo di carta non è supportato. Prova con un'altra carta.",
				applePayTokenizationError: "Si è verificato un errore di rete durante l'elaborazione del pagamento Apple Pay. Riprova.",
				applePayActiveCardError: "Aggiungi una carta supportata al tuo wallet Apple Pay.",
				cardholderNameLabel: "Nome del titolare",
				cardNumberLabel: "Numero di carta",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 cifre)",
				cvvFourDigitLabelSubheading: "(4 cifre)",
				cardholderNamePlaceholder: "Nome del titolare",
				expirationDateLabel: "Data di scadenza",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "CAP",
				saveCardLabel: "Salva carta",
				payWithCard: "Paga con una carta",
				endingIn: "Le ultime cifre sono {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Carta",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		244: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "{{paymentSource}}でのお支払い",
				chooseAnotherWayToPay: "別の支払方法を選択してください",
				chooseAWayToPay: "支払方法を選択してください",
				otherWaysToPay: "その他の支払方法",
				edit: "編集",
				doneEditing: "完了",
				editPaymentMethods: "支払方法の編集",
				CreditCardDeleteConfirmationMessage: "{{secondaryIdentifier}}カード(末尾番号: {{identifier}})を削除しますか?",
				PayPalAccountDeleteConfirmationMessage: "PayPalアカウント{{identifier}}を削除しますか?",
				VenmoAccountDeleteConfirmationMessage: "ユーザー名{{identifier}}のVenmoアカウントを削除してよろしいですか?",
				genericDeleteConfirmationMessage: "この支払方法を削除しますか?",
				deleteCancelButton: "キャンセル",
				deleteConfirmationButton: "削除",
				fieldEmptyForCvv: "CVVを入力してください。",
				fieldEmptyForExpirationDate: "有効期限を入力してください。",
				fieldEmptyForCardholderName: "カード保有者の名前を入力してください。",
				fieldTooLongForCardholderName: "カード保有者の名前は256文字未満にしてください。",
				fieldEmptyForNumber: "番号を入力してください。",
				fieldEmptyForPostalCode: "郵便番号を入力してください。",
				fieldInvalidForCardholderName: "このカード保有者の名前は無効です。",
				fieldInvalidForCvv: "このセキュリティコードは無効です。",
				fieldInvalidForExpirationDate: "この有効期限は無効です。",
				fieldInvalidForNumber: "このカード番号は無効です。",
				fieldInvalidForPostalCode: "この郵便番号は無効です。",
				noticeOfCollection: "カードで支払うことにより、PayPalプライバシーステートメントに同意したものとみなされます。",
				genericError: "弊社側で問題が発生しました。",
				hostedFieldsTokenizationFailOnDuplicateError: "このクレジットカードは、保存済みの支払方法としてすでに存在します。",
				hostedFieldsFailedTokenizationError: "情報を確認してもう一度お試しください。",
				hostedFieldsFieldsInvalidError: "情報を確認してもう一度お試しください。",
				hostedFieldsTokenizationNetworkErrorError: "ネットワークエラーです。再度お試しください。",
				hostedFieldsTokenizationCvvVerificationFailedError: "クレジットカードの認証に失敗しました。情報を確認してもう一度お試しください。",
				paypalButtonMustBeUsed: "支払いを続行するには、PayPalボタンを使用します。",
				venmoButtonMustBeUsed: "お支払いを続行するには、Venmoボタンを使用してください。",
				applePayButtonMustBeUsed: "Apple Payボタンを使用してお支払いを続行してください。",
				paypalAccountTokenizationFailedError: "PayPalアカウントの追加中に問題が発生しました。再度お試しください。",
				paypalFlowFailedError: "PayPalへの接続に問題が発生しました。再度お試しください。",
				paypalTokenizationRequestActiveError: "PayPalの支払い承認はすでに処理中です。",
				venmoCanceledError: "問題が発生しました。お使いの端末にVenmoアプリの最新バージョンがインストールされており、お使いのブラウザがVenmoへの切り替えをサポートしていることをご確認ください。",
				vaultManagerPaymentMethodDeletionError: "支払方法を削除できない場合は、もう一度お試しください。",
				venmoAppFailedError: "お客さまの端末でVenmoアプリを見つけることができませんでした。",
				unsupportedCardTypeError: "このカードのタイプはサポートされていません。別のカードをご使用ください。",
				applePayTokenizationError: "Apple Payの支払いの処理中にネットワークエラーが発生しました。再度お試しください。",
				applePayActiveCardError: "Apple Payウォレットに対応しているカードを追加してください。",
				cardholderNameLabel: "カード保有者の名前",
				cardNumberLabel: "カード番号",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3桁)",
				cvvFourDigitLabelSubheading: "(4桁)",
				cardholderNamePlaceholder: "カード保有者の名前",
				expirationDateLabel: "有効期限",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "郵便番号",
				saveCardLabel: "カードを保存",
				payWithCard: "カードで支払う",
				endingIn: "末尾番号: {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "カード",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "銀聯(UnionPay)"
			}
		}, {}],
		245: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "결제수단: {{paymentSource}}",
				chooseAnotherWayToPay: "다른 결제수단을 선택해 주세요.",
				chooseAWayToPay: "결제수단 선택",
				otherWaysToPay: "다른 결제수단",
				edit: "편집",
				doneEditing: "완료",
				editPaymentMethods: "결제수단 편집",
				CreditCardDeleteConfirmationMessage: "{{identifier}}(으)로 끝나는 {{secondaryIdentifier}} 카드를 삭제하시겠습니까?",
				PayPalAccountDeleteConfirmationMessage: "PayPal 계정 {{identifier}}을(를) 삭제하시겠습니까?",
				VenmoAccountDeleteConfirmationMessage: "사용자 이름 {{identifier}}의 Venmo 계정을 정말 삭제하시겠습니까?",
				genericDeleteConfirmationMessage: "이 결제수단을 삭제하시겠습니까?",
				deleteCancelButton: "취소",
				deleteConfirmationButton: "삭제",
				fieldEmptyForCvv: "CVV를 입력하세요.",
				fieldEmptyForExpirationDate: "만료일을 입력하세요.",
				fieldEmptyForCardholderName: "카드 소유자 이름을 입력하세요.",
				fieldTooLongForCardholderName: "카드 소유자 이름은 256자 미만이어야 합니다.",
				fieldEmptyForNumber: "번호를 입력하세요.",
				fieldEmptyForPostalCode: "우편번호를 입력하세요.",
				fieldInvalidForCardholderName: "이 카드 소유자 이름은 유효하지 않습니다.",
				fieldInvalidForCvv: "이 보안 코드는 유효하지 않습니다.",
				fieldInvalidForExpirationDate: "이 만료일은 유효하지 않습니다.",
				fieldInvalidForNumber: "이 카드 번호는 유효하지 않습니다.",
				fieldInvalidForPostalCode: "이 우편번호는 유효하지 않습니다.",
				noticeOfCollection: "자신의 카드로 결제함으로써 사용자는 PayPal 개인정보 취급방침에 동의합니다.",
				genericError: "저희 쪽에 문제가 발생했습니다.",
				hostedFieldsTokenizationFailOnDuplicateError: "이 신용카드는 이미 저장된 결제수단으로 설정되어 있습니다.",
				hostedFieldsFailedTokenizationError: "정보를 확인하고 다시 시도해 주세요.",
				hostedFieldsFieldsInvalidError: "정보를 확인하고 다시 시도해 주세요.",
				hostedFieldsTokenizationNetworkErrorError: "네트워크 오류입니다. 다시 시도해 주세요.",
				hostedFieldsTokenizationCvvVerificationFailedError: "신용카드 인증에 실패했습니다. 정보를 확인하고 다시 시도해 주세요.",
				paypalButtonMustBeUsed: "PayPal 버튼을 사용하여 결제를 계속 진행하세요.",
				venmoButtonMustBeUsed: "결제를 계속하려면 Venmo 버튼을 사용하세요.",
				applePayButtonMustBeUsed: "Apple Pay 버튼을 사용하여 결제를 계속 진행하세요.",
				paypalAccountTokenizationFailedError: "PayPal 계정을 추가하는 중에 문제가 발생했습니다. 다시 시도해 주세요.",
				paypalFlowFailedError: "PayPal에 연결하는 데 문제가 발생했습니다. 다시 시도해 주세요.",
				paypalTokenizationRequestActiveError: "PayPal 결제 승인이 이미 진행 중입니다.",
				venmoCanceledError: "오류가 발생했습니다. 기기에 최신 버전의 Venmo 앱이 설치되어 있고 브라우저가 Venmo로의 전환을 지원하는지 확인하세요.",
				vaultManagerPaymentMethodDeletionError: "결제수단을 삭제할 수 없습니다. 다시 시도해 주세요.",
				venmoAppFailedError: "기기에서 Venmo 앱을 찾을 수 없습니다.",
				unsupportedCardTypeError: "이 카드 유형은 지원되지 않습니다. 다른 카드로 시도해 주세요.",
				applePayTokenizationError: "Apple Pay 결제를 처리하는 동안 네트워크 오류가 발생했습니다. 다시 시도해 주세요.",
				applePayActiveCardError: "Apple Pay 전자지갑에 지원되는 카드를 추가하세요.",
				cardholderNameLabel: "카드 소유자 이름",
				cardNumberLabel: "카드 번호",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3자리)",
				cvvFourDigitLabelSubheading: "(4자리)",
				cardholderNamePlaceholder: "카드 소유자 이름",
				expirationDateLabel: "만료일",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "우편번호",
				saveCardLabel: "카드 저장",
				payWithCard: "카드로 결제",
				endingIn: "다음으로 끝남: {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "카드",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		246: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Betalen met {{paymentSource}}",
				chooseAnotherWayToPay: "Kies een andere betaalmethode",
				chooseAWayToPay: "Kies een betaalmethode",
				otherWaysToPay: "Andere betaalmethoden",
				edit: "Bewerken",
				doneEditing: "Klaar",
				editPaymentMethods: "Betaalmethoden bewerken",
				CreditCardDeleteConfirmationMessage: "{{secondaryIdentifier}}-kaart eindigend op {{identifier}} verwijderen?",
				PayPalAccountDeleteConfirmationMessage: "PayPal-rekening {{identifier}} verwijderen?",
				VenmoAccountDeleteConfirmationMessage: "Weet je zeker dat je de Venmo-rekening met gebruikersnaam {{identifier}} wilt verwijderen?",
				genericDeleteConfirmationMessage: "Weet je zeker dat je deze betaalmethode wilt verwijderen?",
				deleteCancelButton: "Annuleren",
				deleteConfirmationButton: "Verwijderen",
				fieldEmptyForCvv: "Vul een CVV in.",
				fieldEmptyForExpirationDate: "Vul een vervaldatum in.",
				fieldEmptyForCardholderName: "Vul de naam van de kaarthouder in.",
				fieldTooLongForCardholderName: "Naam kaarthouder moet minder dan 256 tekens bevatten.",
				fieldEmptyForNumber: "Vul een nummer in.",
				fieldEmptyForPostalCode: "Vul een postcode in.",
				fieldInvalidForCardholderName: "Naam kaarthouder is ongeldig.",
				fieldInvalidForCvv: "Deze beveiligingscode is ongeldig.",
				fieldInvalidForExpirationDate: "Deze vervaldatum is ongeldig.",
				fieldInvalidForNumber: "Dit kaartnummer is ongeldig.",
				fieldInvalidForPostalCode: "Deze postcode is ongeldig.",
				noticeOfCollection: "Door met mijn kaart te betalen, ga ik akkoord met de PayPal Privacyverklaring.",
				genericError: "Er is aan onze kant iets fout gegaan.",
				hostedFieldsTokenizationFailOnDuplicateError: "Deze creditcard bestaat al als opgeslagen betaalmethode.",
				hostedFieldsFailedTokenizationError: "Controleer je gegevens en probeer het opnieuw.",
				hostedFieldsFieldsInvalidError: "Controleer je gegevens en probeer het opnieuw.",
				hostedFieldsTokenizationNetworkErrorError: "Netwerkfout. Probeer het opnieuw.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Verificatie van creditcard is mislukt. Controleer je gegevens en probeer het opnieuw.",
				paypalButtonMustBeUsed: "Gebruik de PayPal-knop om door te gaan met je betaling.",
				venmoButtonMustBeUsed: "Gebruik de Venmo-knop om door te gaan met je betaling.",
				applePayButtonMustBeUsed: "Gebruik de knop Apple Pay om door te gaan met je betaling.",
				paypalAccountTokenizationFailedError: "Er is iets fout gegaan bij het toevoegen van de PayPal-rekening. Probeer het opnieuw.",
				paypalFlowFailedError: "Er is iets fout gegaan bij het verbinden met PayPal. Probeer het opnieuw.",
				paypalTokenizationRequestActiveError: "PayPal-betaalautorisatie is al in voortgang.",
				venmoCanceledError: "Er is iets fout gegaan. Zorg ervoor dat je de recentste versie van de Venmo-app op je apparaat geïnstalleerd hebt en dat je browser ondersteuning biedt voor overschakelen naar Venmo.",
				vaultManagerPaymentMethodDeletionError: "Kan betaalmethode niet verwijderen. Probeer het opnieuw.",
				venmoAppFailedError: "De Venmo-app is niet gevonden op je apparaat.",
				unsupportedCardTypeError: "Dit kaarttype wordt niet ondersteund. Gebruik een andere kaart.",
				applePayTokenizationError: "Er is een netwerkfout opgetreden bij het verwerken van de Apple Pay-betaling. Probeer het opnieuw.",
				applePayActiveCardError: "Voeg een ondersteunde kaart toe aan je Apple Pay-wallet.",
				cardholderNameLabel: "Naam kaarthouder",
				cardNumberLabel: "Kaartnummer",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 cijfers)",
				cvvFourDigitLabelSubheading: "(4 cijfers)",
				cardholderNamePlaceholder: "Naam kaarthouder",
				expirationDateLabel: "Vervaldatum",
				expirationDateLabelSubheading: "(mm/jj)",
				expirationDatePlaceholder: "mm/jj",
				postalCodeLabel: "Postcode",
				saveCardLabel: "Kaart opslaan",
				payWithCard: "Betalen met kaart",
				endingIn: "Eindigend op {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kaart",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		247: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Betaler med {{paymentSource}}",
				chooseAnotherWayToPay: "Velg en annen betalingsmåte",
				chooseAWayToPay: "Velg betalingsmåte",
				otherWaysToPay: "Andre betalingsmåter",
				edit: "Endre",
				doneEditing: "Ferdig",
				editPaymentMethods: "Rediger betalingsmetode",
				CreditCardDeleteConfirmationMessage: "Vil du slette {{secondaryIdentifier}}-kortet som slutter på {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Vil du slette PayPal-konto {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Er du sikker på at du vil slette Venmo-kontoen med brukernavnet {{identifier}}?",
				genericDeleteConfirmationMessage: "Er du sikker på at du vil slette denne betalingsmetoden?",
				deleteCancelButton: "Avbryt",
				deleteConfirmationButton: "Slett",
				fieldEmptyForCvv: "Fyll ut sikkerhetskode (CVV).",
				fieldEmptyForExpirationDate: "Fyll ut utløpsdato.",
				fieldEmptyForCardholderName: "Fyll ut kortinnehavers navn.",
				fieldTooLongForCardholderName: "Kortinnehaverens må ha mindre enn 256 tegn.",
				fieldEmptyForNumber: "Fyll ut nummer.",
				fieldEmptyForPostalCode: "Fyll ut postnummer.",
				fieldInvalidForCardholderName: "Denne kortinnehaverens navn er ikke gyldig.",
				fieldInvalidForCvv: "Denne sikkerhetskoden er ikke gyldig.",
				fieldInvalidForExpirationDate: "Denne utløpsdatoen er ikke gyldig.",
				fieldInvalidForNumber: "Dette kortnummeret er ikke gyldig.",
				fieldInvalidForPostalCode: "Dette postnummeret er ikke gyldig.",
				noticeOfCollection: "Ved å betale med kortet godtar jeg PayPals personvernerklæring.",
				genericError: "Noe gikk galt hos oss.",
				hostedFieldsTokenizationFailOnDuplicateError: "Dette betalingskortet finnes allerede som en lagret betalingsmetode.",
				hostedFieldsFailedTokenizationError: "Kontroller informasjonen, og prøv på nytt.",
				hostedFieldsFieldsInvalidError: "Kontroller informasjonen, og prøv på nytt.",
				hostedFieldsTokenizationNetworkErrorError: "Nettverksfeil. Prøv på nytt.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Kontroll av betalingskort mislyktes. Kontroller informasjonen, og prøv på nytt.",
				paypalButtonMustBeUsed: "Bruk PayPal-knappen for å fortsette med betalingen.",
				venmoButtonMustBeUsed: "Bruk Venmo-knappen for å fortsette med betalingen.",
				applePayButtonMustBeUsed: "Bruk Apple Pay-knappen for å fortsette med betalingen.",
				paypalAccountTokenizationFailedError: "Kan ikke legge til PayPal-kontoen. Prøv på nytt.",
				paypalFlowFailedError: "Kan ikke koble til PayPal. Prøv på nytt.",
				paypalTokenizationRequestActiveError: "PayPals prosess for betalingsgodkjenning har allerede startet.",
				venmoCanceledError: "Noe gikk galt. Kontroller at den nyeste versjonen av Venmo-appen er installert på enheten din, og at nettleseren din støtter bruk av Venmo.",
				vaultManagerPaymentMethodDeletionError: "Kan ikke slette betalingsmetoden. Prøv på nytt.",
				venmoAppFailedError: "Finner ikke Venmo-appen på enheten.",
				unsupportedCardTypeError: "Denne korttypen støttes ikke. Prøv et annet kort.",
				applePayTokenizationError: "Nettverksfeil under behandling av Apple Pay-betalingen. Prøv på nytt.",
				applePayActiveCardError: "Legg til et støttet kort i e-lommeboken for Apple Pay.",
				cardholderNameLabel: "Kortinnehavers navn",
				cardNumberLabel: "Kortnummer",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 sifre)",
				cvvFourDigitLabelSubheading: "(4 sifre)",
				cardholderNamePlaceholder: "Kortinnehavers navn",
				expirationDateLabel: "Utløpsdato",
				expirationDateLabelSubheading: "(MM/ÅÅ)",
				expirationDatePlaceholder: "MM/ÅÅ",
				postalCodeLabel: "Postnummer",
				saveCardLabel: "Lagre kort",
				payWithCard: "Betal med kort",
				endingIn: "Slutter på {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kort",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		248: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Źródło finansowania płatności: {{paymentSource}}",
				chooseAnotherWayToPay: "Wybierz inny sposób płatności.",
				chooseAWayToPay: "Wybierz sposób płatności",
				otherWaysToPay: "Inne sposoby płatności",
				edit: "Edytuj",
				doneEditing: "Gotowe",
				editPaymentMethods: "Edytuj formy płatności",
				CreditCardDeleteConfirmationMessage: "Usunąć kartę {{secondaryIdentifier}} o numerze zakończonym cyframi {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Usunąć {{identifier}}konta PayPal?",
				VenmoAccountDeleteConfirmationMessage: "Czy na pewno chcesz usunąć konto Venmo o nazwie użytkownika {{identifier}}?",
				genericDeleteConfirmationMessage: "Na pewno chcesz usunąć tę formę płatności?",
				deleteCancelButton: "Anuluj",
				deleteConfirmationButton: "Usuń",
				fieldEmptyForCvv: "Wpisz kod CVV.",
				fieldEmptyForExpirationDate: "Wpisz datę ważności.",
				fieldEmptyForCardholderName: "Podaj imię i nazwisko posiadacza karty.",
				fieldTooLongForCardholderName: "Imię i nazwisko posiadacza karty musi mieć mniej niż 256 znaków.",
				fieldEmptyForNumber: "Podaj numer.",
				fieldEmptyForPostalCode: "Podaj kod pocztowy.",
				fieldInvalidForCardholderName: "To imię i nazwisko posiadacza karty jest nieprawidłowe.",
				fieldInvalidForCvv: "Ten kod bezpieczeństwa jest nieprawidłowy.",
				fieldInvalidForExpirationDate: "Ta data ważności jest nieprawidłowa.",
				fieldInvalidForNumber: "Numer karty jest nieprawidłowy.",
				fieldInvalidForPostalCode: "Kod pocztowy jest nieprawidłowy.",
				noticeOfCollection: "Dokonując płatności kartą, akceptuję Informacje dotyczące zasad ochrony danych firmy PayPal.",
				genericError: "Wystąpił błąd po naszej stronie.",
				hostedFieldsTokenizationFailOnDuplicateError: "Ta karta kredytowa istnieje jako zapisana forma płatności.",
				hostedFieldsFailedTokenizationError: "Sprawdź swoje informacje i spróbuj ponownie.",
				hostedFieldsFieldsInvalidError: "Sprawdź swoje informacje i spróbuj ponownie.",
				hostedFieldsTokenizationNetworkErrorError: "Błąd sieci. Spróbuj ponownie.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Weryfikacja karty kredytowej nie powiodła się. Sprawdź swoje informacje i spróbuj ponownie.",
				paypalButtonMustBeUsed: "Aby kontynuować płatność, użyj przycisku PayPal.",
				venmoButtonMustBeUsed: "Użyj przycisku Venmo, aby kontynuować płatność",
				applePayButtonMustBeUsed: "Aby kontynuować płatność, użyj przycisku Apple Pay.",
				paypalAccountTokenizationFailedError: "Coś poszło nie tak przy dodawaniu konta PayPal. Spróbuj ponownie.",
				paypalFlowFailedError: "Wystąpił problem przy nawiązywaniu połączenia z PayPal. Spróbuj ponownie.",
				paypalTokenizationRequestActiveError: "Autoryzacja płatności PayPal jest w trakcie realizacji.",
				venmoCanceledError: "Coś poszło nie tak. Upewnij się, że na Twoim urządzeniu jest zainstalowana najnowsza wersja aplikacji Venmo, a Twoja przeglądarka obsługuje przełączanie na Venmo.",
				vaultManagerPaymentMethodDeletionError: "Nie można usunąć formy płatności, spróbuj ponownie.",
				venmoAppFailedError: "Aplikacja Venmo nie została odnaleziona na Twoim urządzeniu.",
				unsupportedCardTypeError: "Ten typ karty nie jest obsługiwany. Spróbuj użyć innej karty.",
				applePayTokenizationError: "Wystąpił błąd sieciowy podczas przetwarzania płatności Apple Pay. Spróbuj ponownie.",
				applePayActiveCardError: "Dodaj obsługiwaną kartę do portfela Apple Pay.",
				cardholderNameLabel: "Imię i nazwisko posiadacza karty",
				cardNumberLabel: "Numer karty",
				cvvLabel: "Kod CVV/CVC2",
				cvvThreeDigitLabelSubheading: "(3 cyfry)",
				cvvFourDigitLabelSubheading: "(4 cyfry)",
				cardholderNamePlaceholder: "Imię i nazwisko posiadacza karty",
				expirationDateLabel: "Data ważności",
				expirationDateLabelSubheading: "(MM/RR)",
				expirationDatePlaceholder: "MM/RR",
				postalCodeLabel: "Kod pocztowy",
				saveCardLabel: "Zapisz kartę",
				payWithCard: "Zapłać kartą",
				endingIn: "Numer zakończonym cyframi {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Karta",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		249: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Pagando com {{paymentSource}}",
				chooseAnotherWayToPay: "Escolha outro meio de pagamento",
				chooseAWayToPay: "Escolha um meio de pagamento",
				otherWaysToPay: "Outras formas de pagar",
				edit: "Editar",
				doneEditing: "Concluído",
				editPaymentMethods: "Editar meios de pagamento",
				CreditCardDeleteConfirmationMessage: "Excluir cartão {{secondaryIdentifier}} de final {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Excluir conta do PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Tem certeza de que deseja excluir a conta do Venmo com nome de usuário {{identifier}}?",
				genericDeleteConfirmationMessage: "Tem certeza que deseja excluir este meio de pagamento?",
				deleteCancelButton: "Cancelar",
				deleteConfirmationButton: "Excluir",
				fieldEmptyForCvv: "Preencha um CVV.",
				fieldEmptyForExpirationDate: "Preencha uma data de vencimento.",
				fieldEmptyForCardholderName: "Preencha um nome para o titular do cartão.",
				fieldTooLongForCardholderName: "O nome do titular do cartão deve ter menos de 256 caracteres.",
				fieldEmptyForNumber: "Preencha um número.",
				fieldEmptyForPostalCode: "Preencha um código postal.",
				fieldInvalidForCardholderName: "O nome do titular do cartão é inválido.",
				fieldInvalidForCvv: "Este código de segurança é inválido.",
				fieldInvalidForExpirationDate: "Esta data de vencimento é inválida.",
				fieldInvalidForNumber: "O número do cartão é inválido.",
				fieldInvalidForPostalCode: "Este código postal é inválido.",
				noticeOfCollection: "Ao pagar com o meu cartão, aceito a Declaração de Privacidade da PayPal.",
				genericError: "Ocorreu um erro.",
				hostedFieldsTokenizationFailOnDuplicateError: "Este cartão de crédito já existe como um meio de pagamento salvo.",
				hostedFieldsFailedTokenizationError: "Verifique as informações e tente novamente.",
				hostedFieldsFieldsInvalidError: "Verifique as informações e tente novamente.",
				hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Falha na verificação do cartão de crédito. Verifique as informações e tente novamente.",
				paypalButtonMustBeUsed: "Use o botão do PayPal para prosseguir com o pagamento.",
				venmoButtonMustBeUsed: "Utilize o botão Venmo para continuar o seu pagamento.",
				applePayButtonMustBeUsed: "Use o botão Apple Pay para prosseguir com o pagamento.",
				paypalAccountTokenizationFailedError: "Ocorreu um erro ao adicionar a conta do PayPal. Tente novamente.",
				paypalFlowFailedError: "Ocorreu um erro na conexão com o PayPal. Tente novamente.",
				paypalTokenizationRequestActiveError: "A autorização de pagamento do PayPal já está em andamento.",
				venmoCanceledError: "Ocorreu um erro. Certifique-se de que você tenha a versão mais recente do aplicativo Venmo instalada no seu dispositivo, e que seu navegador aceite a mudança para o Venmo.",
				vaultManagerPaymentMethodDeletionError: "Não é possível excluir o meio de pagamento, tente novamente.",
				venmoAppFailedError: "O aplicativo Venmo não foi encontrado no seu dispositivo.",
				unsupportedCardTypeError: "Este tipo de cartão não é aceito. Tente outro cartão.",
				applePayTokenizationError: "Ocorreu um erro de rede ao processar o pagamento do Apple Pay. Tente novamente.",
				applePayActiveCardError: "Adicione um cartão compatível à sua carteira Apple Pay.",
				cardholderNameLabel: "Nome do titular do cartão",
				cardNumberLabel: "Número do cartão",
				cvvLabel: "CSC",
				cvvThreeDigitLabelSubheading: "(3 dígitos)",
				cvvFourDigitLabelSubheading: "(4 dígitos)",
				cardholderNamePlaceholder: "Nome do titular do cartão",
				expirationDateLabel: "Data de vencimento",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "CEP",
				saveCardLabel: "Salvar cartão",
				payWithCard: "Pague com seu cartão de crédito",
				endingIn: "De final {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Cartão",
				PayPal: "PayPal",
				"PayPal Credit": "Crédito do PayPal",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Descobrir",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		250: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Pagamento com {{paymentSource}}",
				chooseAnotherWayToPay: "Escolher outra forma de pagamento",
				chooseAWayToPay: "Escolher forma de pagamento",
				otherWaysToPay: "Outras formas de pagamento",
				edit: "Editar",
				doneEditing: "Concluído",
				editPaymentMethods: "Editar meios de pagamento",
				CreditCardDeleteConfirmationMessage: "Eliminar cartão {{secondaryIdentifier}} terminado em {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Eliminar conta PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Quer mesmo eliminar a conta Venmo com o nome de utilizador {{identifier}}?",
				genericDeleteConfirmationMessage: "Quer mesmo eliminar este meio de pagamento?",
				deleteCancelButton: "Cancelar",
				deleteConfirmationButton: "Eliminar",
				fieldEmptyForCvv: "Introduza um CVV.",
				fieldEmptyForExpirationDate: "Introduza uma data de validade.",
				fieldEmptyForCardholderName: "Introduza um nome do titular do cartão.",
				fieldTooLongForCardholderName: "O Nome do titular do cartão deve ter menos de 256 carateres.",
				fieldEmptyForNumber: "Introduza um número.",
				fieldEmptyForPostalCode: "Introduza um código postal.",
				fieldInvalidForCardholderName: "Este nome do titular do cartão não é válido.",
				fieldInvalidForCvv: "Este código de segurança não é válido.",
				fieldInvalidForExpirationDate: "Esta data de validade não é válida.",
				fieldInvalidForNumber: "Este número de cartão não é válido.",
				fieldInvalidForPostalCode: "Este código postal não é válido.",
				noticeOfCollection: "Ao pagar com o meu cartão, aceito a Declaração de Privacidade da PayPal.",
				genericError: "Tudo indica que houve um problema.",
				hostedFieldsTokenizationFailOnDuplicateError: "Este cartão de crédito já existe como meio de pagamento guardado.",
				hostedFieldsFailedTokenizationError: "Verifique as suas informações e tente novamente.",
				hostedFieldsFieldsInvalidError: "Verifique as suas informações e tente novamente.",
				hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.",
				hostedFieldsTokenizationCvvVerificationFailedError: "A verificação do cartão de crédito falhou. Verifique as suas informações e tente novamente.",
				paypalButtonMustBeUsed: "Use o botão PayPal para continuar o seu pagamento.",
				venmoButtonMustBeUsed: "Utilize o botão Venmo para continuar o seu pagamento.",
				applePayButtonMustBeUsed: "Utilize o botão Apple Pay para continuar o seu pagamento.",
				paypalAccountTokenizationFailedError: "Ocorreu um erro ao adicionar a conta PayPal. Tente novamente.",
				paypalFlowFailedError: "Ocorreu um erro ao ligar ao PayPal. Tente novamente.",
				paypalTokenizationRequestActiveError: "A autorização de pagamento com PayPal já está em curso.",
				venmoCanceledError: "Ocorreu um erro. Certifique-se de que tem a versão mais recente da aplicação Venmo instalada no seu dispositivo e que o seu navegador suporta a mudança para Venmo.",
				vaultManagerPaymentMethodDeletionError: "Não é possível eliminar o meio de pagamento; tente novamente.",
				venmoAppFailedError: "A aplicação Venmo não foi encontrada no seu dispositivo.",
				unsupportedCardTypeError: "Este tipo de cartão não é suportado. Tente com outro cartão.",
				applePayTokenizationError: "Ocorreu um erro de rede ao processar o pagamento com Apple Pay. Tente novamente.",
				applePayActiveCardError: "Adicione um cartão suportado à sua carteira Apple Pay.",
				cardholderNameLabel: "Nome do titular do cartão",
				cardNumberLabel: "Número do cartão",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 dígitos)",
				cvvFourDigitLabelSubheading: "(4 dígitos)",
				cardholderNamePlaceholder: "Nome do titular do cartão",
				expirationDateLabel: "Data de validade",
				expirationDateLabelSubheading: "(MM/AA)",
				expirationDatePlaceholder: "MM/AA",
				postalCodeLabel: "Código postal",
				saveCardLabel: "Guardar cartão",
				payWithCard: "Pagar com cartão",
				endingIn: "Termina em {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Cartão",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		251: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Оплата с помощью {{paymentSource}}",
				chooseAnotherWayToPay: "Выберите другой способ оплаты",
				chooseAWayToPay: "Выберите способ оплаты",
				otherWaysToPay: "Другие способы оплаты",
				edit: "Изменить",
				doneEditing: "Готово",
				editPaymentMethods: "Изменить способы оплаты",
				CreditCardDeleteConfirmationMessage: "Удалить карту {{secondaryIdentifier}} с номером, заканчивающимся на {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Удалить счет PayPal {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Вы действительно хотите удалить счет Venmo с именем пользователя {{identifier}}?",
				genericDeleteConfirmationMessage: "Вы действительно хотите удалить этот способ оплаты?",
				deleteCancelButton: "Отмена",
				deleteConfirmationButton: "Удалить",
				fieldEmptyForCvv: "Укажите код безопасности.",
				fieldEmptyForExpirationDate: "Укажите дату окончания срока действия.",
				fieldEmptyForCardholderName: "Укажите имя владельца карты.",
				fieldTooLongForCardholderName: "Имя владельца карты должно содержать не более 256 символов.",
				fieldEmptyForNumber: "Укажите номер.",
				fieldEmptyForPostalCode: "Укажите почтовый индекс.",
				fieldInvalidForCardholderName: "Недопустимое имя владельца карты.",
				fieldInvalidForCvv: "Недопустимый код безопасности.",
				fieldInvalidForExpirationDate: "Недопустимая дата истечения срока действия.",
				fieldInvalidForNumber: "Недопустимый номер карты.",
				fieldInvalidForPostalCode: "Недопустимый почтовый индекс.",
				noticeOfCollection: "Выполняя оплату с помощью карты, я соглашаюсь с условиями Положения о конфиденциальности PayPal.",
				genericError: "Возникла проблема с нашей стороны.",
				hostedFieldsTokenizationFailOnDuplicateError: "Данная кредитная карта уже существует как сохраненный способ оплаты.",
				hostedFieldsFailedTokenizationError: "Проверьте правильность ввода данных и повторите попытку.",
				hostedFieldsFieldsInvalidError: "Проверьте правильность ввода данных и повторите попытку.",
				hostedFieldsTokenizationNetworkErrorError: "Сбой сети. Повторите попытку.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Сбой при проверке кредитной карты. Проверьте правильность ввода данных и повторите попытку.",
				paypalButtonMustBeUsed: "Используйте кнопку PayPal, чтобы продолжить оплату.",
				venmoButtonMustBeUsed: "Используйте кнопку Venmo, чтобы продолжить оплату.",
				applePayButtonMustBeUsed: "Нажмите кнопку Apple Pay, чтобы продолжить оплату.",
				paypalAccountTokenizationFailedError: "Возникла ошибка при добавлении счета PayPal. Повторите попытку.",
				paypalFlowFailedError: "Возникла ошибка при подключении к PayPal. Повторите попытку.",
				paypalTokenizationRequestActiveError: "Авторизация платежа через PayPal уже выполняется.",
				venmoCanceledError: "Возникла ошибка. Убедитесь, что на вашем устройстве установлена самая последняя версия приложения Venmo и браузер поддерживает переход на Venmo.",
				vaultManagerPaymentMethodDeletionError: "Не удалось удалить способ оплаты, повторите попытку.",
				venmoAppFailedError: "Приложение Venmo не удается обнаружить на вашем устройстве.",
				unsupportedCardTypeError: "Данный тип карты не поддерживается. Попробуйте воспользоваться другой картой.",
				applePayTokenizationError: "Возникла ошибка сети при обработке платежа Apple Pay. Повторите попытку.",
				applePayActiveCardError: "Добавьте поддерживаемую карту в ваш счет Apple Pay.",
				cardholderNameLabel: "Имя владельца карты",
				cardNumberLabel: "Номер карты",
				cvvLabel: "Код безопасности карты CVV",
				cvvThreeDigitLabelSubheading: "(3 цифры)",
				cvvFourDigitLabelSubheading: "(4 цифры)",
				cardholderNamePlaceholder: "Имя владельца карты",
				expirationDateLabel: "Дата окончания срока действия",
				expirationDateLabelSubheading: "(ММ/ГГ)",
				expirationDatePlaceholder: "ММ/ГГ",
				postalCodeLabel: "Индекс",
				saveCardLabel: "Сохранить карту",
				payWithCard: "Оплатить банковской картой",
				endingIn: "Заканчивается на {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Карта",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Полезное",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		252: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Spôsob platby: {{paymentSource}}",
				chooseAnotherWayToPay: "Vyberte iný spôsob platby",
				chooseAWayToPay: "Zvoľte spôsob platby",
				otherWaysToPay: "Iné spôsoby platby",
				edit: "Upraviť",
				doneEditing: "Hotovo",
				editPaymentMethods: "Upraviť spôsoby platby",
				CreditCardDeleteConfirmationMessage: "Chcete odstrániť kartu {{secondaryIdentifier}} končiacu sa na {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Chcete odstrániť {{identifier}}účtu PayPal?",
				VenmoAccountDeleteConfirmationMessage: "Naozaj chcete odstrániť účet Venmo s menom používateľa {{identifier}}?",
				genericDeleteConfirmationMessage: "Ste si istí, že chcete tento spôsob platby odstrániť?",
				deleteCancelButton: "Zrušiť",
				deleteConfirmationButton: "Odstrániť",
				fieldEmptyForCvv: "Vyplňte kód CVV.",
				fieldEmptyForExpirationDate: "Zadajte dátum skončenia platnosti.",
				fieldEmptyForCardholderName: "Zadajte meno majiteľa karty.",
				fieldTooLongForCardholderName: "Meno majiteľa karty musí obsahovať menej ako 256 znakov.",
				fieldEmptyForNumber: "Zadajte číslo.",
				fieldEmptyForPostalCode: "Zadajte PSČ.",
				fieldInvalidForCardholderName: "Toto meno majiteľa karty je neplatné.",
				fieldInvalidForCvv: "Tento bezpečnostný kód je neplatný.",
				fieldInvalidForExpirationDate: "Tento dátum skončenia platnosti je neplatný.",
				fieldInvalidForNumber: "Toto číslo karty je neplatné.",
				fieldInvalidForPostalCode: "Toto PSČ je neplatné.",
				noticeOfCollection: "Zaplatením kartou vyjadrujem súhlas s Vyhlásením spoločnosti PayPal o ochrane osobných údajov.",
				genericError: "Vyskytla sa chyba na našej strane.",
				hostedFieldsTokenizationFailOnDuplicateError: "Táto kreditná karta už existuje ako uložený spôsob platby.",
				hostedFieldsFailedTokenizationError: "Skontrolujte údaje a skúste to znova.",
				hostedFieldsFieldsInvalidError: "Skontrolujte údaje a skúste to znova.",
				hostedFieldsTokenizationNetworkErrorError: "Chyba v sieti. Skúste to znova.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Overenie kreditnej karty nebolo úspešné. Skontrolujte údaje a skúste to znova.",
				paypalButtonMustBeUsed: "Ak chcete pokračovať v platbe, použite tlačidlo PayPal.",
				venmoButtonMustBeUsed: "Ak chcete pokračovať v platbe, použite tlačidlo Venmo.",
				applePayButtonMustBeUsed: "Ak chcete pokračovať v platbe, použite tlačidlo Apple Pay.",
				paypalAccountTokenizationFailedError: "Vyskytla sa chyba pri pridávaní účtu PayPal. Skúste to znova.",
				paypalFlowFailedError: "Vyskytla sa chyba pri pripájaní do účtu PayPal. Skúste to znova.",
				paypalTokenizationRequestActiveError: "Autorizácia platby PayPal už prebieha.",
				venmoCanceledError: "Vyskytla sa chyba. Skontrolujte, či máte v zariadení nainštalovanú najnovšiu verziu aplikácie Venmo a či prehliadač podporuje prechod na aplikáciu Venmo.",
				vaultManagerPaymentMethodDeletionError: "Nebolo možné odstrániť spôsob platby, skúste to znova.",
				venmoAppFailedError: "Aplikáciu Venmo sa vo vašom zariadení nepodarilo nájsť.",
				unsupportedCardTypeError: "Tento typ karty nie je podporovaný. Prosím skúste inú kartu.",
				applePayTokenizationError: "Počas spracúvania platby cez Apple Pay došlo k chybe siete. Skúste to znova.",
				applePayActiveCardError: "Pridajte si podporovanú kartu do peňaženky Apple Pay.",
				cardholderNameLabel: "Meno majiteľa karty",
				cardNumberLabel: "Číslo karty",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 číslice)",
				cvvFourDigitLabelSubheading: "(4 číslice)",
				cardholderNamePlaceholder: "Meno majiteľa karty",
				expirationDateLabel: "Dátum skončenia platnosti",
				expirationDateLabelSubheading: "(MM/RR)",
				expirationDatePlaceholder: "MM/RR",
				postalCodeLabel: "PSČ",
				saveCardLabel: "Uložiť kartu",
				payWithCard: "Zaplatiť kartou",
				endingIn: "Končí {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Karta",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		253: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "Betalar med {{paymentSource}}",
				chooseAnotherWayToPay: "Välj ett annat sätt att betala",
				chooseAWayToPay: "Välj ett sätt att betala",
				otherWaysToPay: "Andra sätt att betala",
				edit: "Ändra",
				doneEditing: "Klart",
				editPaymentMethods: "Ändra betalningsmetoder",
				CreditCardDeleteConfirmationMessage: "Ta bort {{secondaryIdentifier}}-kortet som slutar på {{identifier}}?",
				PayPalAccountDeleteConfirmationMessage: "Ta bort PayPal-konto {{identifier}}?",
				VenmoAccountDeleteConfirmationMessage: "Är du säker på att du vill ta bort Venmo-kontot med användarnamnet {{identifier}}?",
				genericDeleteConfirmationMessage: "Är du säker på att du vill ta bort den här betalningsmetoden?",
				deleteCancelButton: "Avbryt",
				deleteConfirmationButton: "Ta bort",
				fieldEmptyForCvv: "Fyll i ett CVV.",
				fieldEmptyForExpirationDate: "Fyll i ett utgångsdatum.",
				fieldEmptyForCardholderName: "Fyll i kortinnehavarens namn.",
				fieldTooLongForCardholderName: "Namnet på kortinnehavaren måste vara kortare än 256 tecken.",
				fieldEmptyForNumber: "Fyll i ett nummer.",
				fieldEmptyForPostalCode: "Fyll i ett postnummer.",
				fieldInvalidForCardholderName: "Namnet på kortinnehavaren är ogiltigt.",
				fieldInvalidForCvv: "Den här säkerhetskoden är inte giltig.",
				fieldInvalidForExpirationDate: "Utgångsdatumet är ogiltigt.",
				fieldInvalidForNumber: "Det här kortnumret är ogiltigt.",
				fieldInvalidForPostalCode: "Postnumret är ogiltigt.",
				noticeOfCollection: "Genom att betala med mitt kort godkänner jag PayPals sekretessmeddelande.",
				genericError: "Ett fel uppstod.",
				hostedFieldsTokenizationFailOnDuplicateError: "Det här kreditkortet finns redan som en sparad betalningsmetod.",
				hostedFieldsFailedTokenizationError: "Kontrollera uppgifterna och försök igen.",
				hostedFieldsFieldsInvalidError: "Kontrollera uppgifterna och försök igen.",
				hostedFieldsTokenizationNetworkErrorError: "Nätverksfel. Försök igen.",
				hostedFieldsTokenizationCvvVerificationFailedError: "Verifiering av kreditkortet misslyckades. Kontrollera uppgifterna och försök igen.",
				paypalButtonMustBeUsed: "Använd PayPal-knappen för att fortsätta med din betalning.",
				venmoButtonMustBeUsed: "Använd Venmo-knappen för att fortsätta med din betalning.",
				applePayButtonMustBeUsed: "Använd PayPal-knappen för att fortsätta med din betalning.",
				paypalAccountTokenizationFailedError: "Något gick fel när du lade till PayPal-kontot. Försök igen.",
				paypalFlowFailedError: "Något gick fel med att ansluta till PayPal. Försök igen.",
				paypalTokenizationRequestActiveError: "Godkännande av PayPal-betalning pågår redan.",
				venmoCanceledError: "Något gick fel. Se till att du har den senaste versionen av Venmo-appen installerad på din enhet och att din webbläsare stöder byte till Venmo.",
				vaultManagerPaymentMethodDeletionError: "Kan inte ta bort betalningsmetoden, försök igen.",
				venmoAppFailedError: "Det gick inte att hitta Venmo-appen på din enhet.",
				unsupportedCardTypeError: "Den här korttypen stöds inte. Prova med ett annat kort.",
				applePayTokenizationError: "Ett nätverksfel uppstod när Apple Pay-betalningen behandlades. Försök igen.",
				applePayActiveCardError: "Lägg till ett kort som stöds i din Apple Pay e-plånbok.",
				cardholderNameLabel: "Kortinnehavarens namn",
				cardNumberLabel: "Kortnummer",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 siffror)",
				cvvFourDigitLabelSubheading: "(4 siffror)",
				cardholderNamePlaceholder: "Kortinnehavarens namn",
				expirationDateLabel: "Utgångsdatum",
				expirationDateLabelSubheading: "(MM/ÅÅ)",
				expirationDatePlaceholder: "MM/ÅÅ",
				postalCodeLabel: "Postnummer",
				saveCardLabel: "Spara kort",
				payWithCard: "Betala med kort",
				endingIn: "Slutar på {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "Kort",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		254: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "ชำระเงินด้วย {{paymentSource}}",
				chooseAnotherWayToPay: "เลือกวิธีการชำระเงินอื่น",
				chooseAWayToPay: "โปรดเลือกวิธีชำระเงิน",
				otherWaysToPay: "วิธีอื่นในการชำระเงิน",
				edit: "แก้ไข",
				doneEditing: "เสร็จแล้ว",
				editPaymentMethods: "แก้ไขวิธีการชำระเงิน",
				CreditCardDeleteConfirmationMessage: "ลบบัตร {{secondaryIdentifier}} ที่ลงท้ายด้วย {{identifier}} หรือไม่",
				PayPalAccountDeleteConfirmationMessage: "คุณต้องการลบบัญชี PayPal {{identifier}} หรือไม่",
				VenmoAccountDeleteConfirmationMessage: "คุณแน่ใจหรือไม่ว่าต้องการลบบัญชี Venmo ที่มีชื่อผู้ใช้ {{identifier}}",
				genericDeleteConfirmationMessage: "คุณแน่ใจหรือไม่ว่าต้องการลบการชำระเงินรายการนี้ออก",
				deleteCancelButton: "ยกเลิก",
				deleteConfirmationButton: "ลบ",
				fieldEmptyForCvv: "โปรดกรอกข้อมูลในบัตร CVV",
				fieldEmptyForExpirationDate: "โปรดกรอกข้อมูลวันที่หมดอายุ",
				fieldEmptyForCardholderName: "โปรดกรอกชื่อผู้ถือบัตร",
				fieldTooLongForCardholderName: "ชื่อผู้ถือบัตรต้องไม่เกิน 256 อักขระ",
				fieldEmptyForNumber: "โปรดกรอกหมายเลข",
				fieldEmptyForPostalCode: "โปรดกรอกข้อมูลในรหัสไปรษณีย์",
				fieldInvalidForCardholderName: "ชื่อผู้ถือบัตรนี้ไม่ถูกต้อง",
				fieldInvalidForCvv: "รหัสความปลอดภัยนี้ไม่ถูกต้อง",
				fieldInvalidForExpirationDate: "วันที่หมดอายุนี้ไม่ถูกต้อง",
				fieldInvalidForNumber: "หมายเลขบัตรนี้ไม่ถูกต้อง",
				fieldInvalidForPostalCode: "รหัสไปรษณีย์นี้ไม่ถูกต้อง",
				noticeOfCollection: "การชําระเงินด้วยบัตรนี้ถือว่าข้าพเจ้ายอมรับนโยบายความเป็นส่วนตัวของ PayPal",
				genericError: "เกิดข้อผิดพลาดขึ้นในระบบของเรา",
				hostedFieldsTokenizationFailOnDuplicateError: "บัตรเครดิตนี้เป็นวิธีการชำระเงินที่บันทึกไว้แล้ว",
				hostedFieldsFailedTokenizationError: "โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
				hostedFieldsFieldsInvalidError: "โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
				hostedFieldsTokenizationNetworkErrorError: "ข้อผิดพลาดของเครือข่าย โปรดลองอีกครั้ง",
				hostedFieldsTokenizationCvvVerificationFailedError: "การตรวจสอบยืนยันบัตรเครดิตไม่สำเร็จ โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
				paypalButtonMustBeUsed: "ใช้ปุ่ม PayPal เพื่อดำเนินการชำระเงินต่อไป",
				venmoButtonMustBeUsed: "ใช้ปุ่ม Venmo เพื่อดําเนินการชําระเงินต่อไป",
				applePayButtonMustBeUsed: "ใช้ปุ่ม Apple Pay เพื่อดำเนินการชำระเงินต่อไป.",
				paypalAccountTokenizationFailedError: "เกิดข้อผิดพลาดบางอย่างในการเพิ่มบัญชี PayPal โปรดลองอีกครั้ง",
				paypalFlowFailedError: "เกิดข้อผิดพลาดในการเชื่อมต่อกับ PayPal โปรดลองอีกครั้ง",
				paypalTokenizationRequestActiveError: "การอนุมัติการชำระเงิน PayPal อยู่ในระหว่างดำเนินการแล้ว",
				venmoCanceledError: "เกิดข้อผิดพลาดบางประการ ตรวจสอบให้แน่ใจว่าคุณมีแอปพลิเคชัน Venmo เวอร์ชันล่าสุดที่ติดตั้งไว้ในอุปกรณ์ของคุณและเบราว์เซอร์ของคุณรองรับการเปลี่ยนเป็น Venmo",
				vaultManagerPaymentMethodDeletionError: "ไม่สามารถลบวิธีการชำระเงินได้โปรดลองอีกครั้ง",
				venmoAppFailedError: "ไม่พบแอป Venmo ในอุปกรณ์ของคุณ",
				unsupportedCardTypeError: "ไม่รองรับบัตรประเภทนี้ โปรดลองใช้บัตรใบอื่น",
				applePayTokenizationError: "เกิดข้อผิดพลาดในเครือข่ายขณะประมวลผลการชำระเงินของ Apple Pay โปรดลองอีกครั้ง",
				applePayActiveCardError: "เพิ่มบัตรที่รองรับไปยังกระเป๋าสตางค์ Apple Pay ของคุณ",
				cardholderNameLabel: "ชื่อของผู้ถือบัตร",
				cardNumberLabel: "หมายเลขบัตร",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "(3 หลัก)",
				cvvFourDigitLabelSubheading: "(4 หลัก)",
				cardholderNamePlaceholder: "ชื่อของผู้ถือบัตร",
				expirationDateLabel: "วันหมดอายุ",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "รหัสไปรษณีย์",
				saveCardLabel: "บันทึกบัตร",
				payWithCard: "ชำระด้วยบัตรเดบิตหรือบัตรเครดิต",
				endingIn: "ลงท้ายด้วย {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "บัตร",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		255: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "使用{{paymentSource}}付款",
				chooseAnotherWayToPay: "请选择其它付款方式。",
				chooseAWayToPay: "选择付款方式",
				otherWaysToPay: "其他付款方式",
				edit: "编辑",
				doneEditing: "完成",
				editPaymentMethods: "编辑付款方式",
				CreditCardDeleteConfirmationMessage: "删除尾号为{{identifier}}的{{secondaryIdentifier}}卡？",
				PayPalAccountDeleteConfirmationMessage: "删除PayPal账户{{identifier}}？",
				VenmoAccountDeleteConfirmationMessage: "您确定要删除用户名为{{identifier}}的Venmo账户吗？",
				genericDeleteConfirmationMessage: "确定要删除此付款方式吗？",
				deleteCancelButton: "取消",
				deleteConfirmationButton: "删除",
				fieldEmptyForCvv: "请填写CVV。",
				fieldEmptyForExpirationDate: "请填写有效期限。",
				fieldEmptyForCardholderName: "请填写持卡人姓名。",
				fieldTooLongForCardholderName: "持卡人姓名必须少于256个字符。",
				fieldEmptyForNumber: "请填写一个号码。",
				fieldEmptyForPostalCode: "请填写邮政编码。",
				fieldInvalidForCardholderName: "此持卡人姓名无效。",
				fieldInvalidForCvv: "此安全码无效。",
				fieldInvalidForExpirationDate: "此有效期限无效。",
				fieldInvalidForNumber: "此卡号无效。",
				fieldInvalidForPostalCode: "此邮政编码无效。",
				noticeOfCollection: "使用我的卡付款即表示我同意PayPal隐私声明。",
				genericError: "我们遇到了一些问题。",
				hostedFieldsTokenizationFailOnDuplicateError: "此信用卡已存在于已保存的付款方式。",
				hostedFieldsFailedTokenizationError: "请检查您的信息，然后重试。",
				hostedFieldsFieldsInvalidError: "请检查您的信息，然后重试。",
				hostedFieldsTokenizationNetworkErrorError: "网络错误。请重试。",
				hostedFieldsTokenizationCvvVerificationFailedError: "信用卡验证失败。请检查您的信息，然后重试。",
				paypalButtonMustBeUsed: "使用PayPal按钮继续付款。",
				venmoButtonMustBeUsed: "使用Venmo按钮继续付款。",
				applePayButtonMustBeUsed: "使用Apple Pay按钮以便继续进行您的付款。",
				paypalAccountTokenizationFailedError: "添加PayPal账户时遇到了一些问题。请重试。",
				paypalFlowFailedError: "连接到PayPal遇到了一些问题。请重试。",
				paypalTokenizationRequestActiveError: "PayPal付款授权已在处理中。",
				venmoCanceledError: "遇到了一些问题。请确保您的设备上安装了最新版本的Venmo应用，并且您的浏览器支持切换到Venmo。",
				vaultManagerPaymentMethodDeletionError: "无法删除付款方式，请重试。",
				venmoAppFailedError: "在您的设备上找不到Venmo应用程序。",
				unsupportedCardTypeError: "不支持该卡类型。请尝试其他卡。",
				applePayTokenizationError: "处理Apple Pay付款时发生了网络错误。请重试。",
				applePayActiveCardError: "在您的Apple Pay钱包中添加一张受支持的卡。",
				cardholderNameLabel: "持卡人姓名",
				cardNumberLabel: "卡号",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "（3位数）",
				cvvFourDigitLabelSubheading: "（4位数）",
				cardholderNamePlaceholder: "持卡人姓名",
				expirationDateLabel: "有效期限",
				expirationDateLabelSubheading: "（月/年）",
				expirationDatePlaceholder: "月/年",
				postalCodeLabel: "邮政编码",
				saveCardLabel: "保存此卡",
				payWithCard: "使用卡支付",
				endingIn: "尾号为{{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "卡",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "发现",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "银联"
			}
		}, {}],
		256: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "付款方式為 {{paymentSource}}",
				chooseAnotherWayToPay: "請選擇其他付款方式",
				chooseAWayToPay: "選擇付款方式",
				otherWaysToPay: "其他付款方式",
				edit: "編輯",
				doneEditing: "完成",
				editPaymentMethods: "編輯付款方式",
				CreditCardDeleteConfirmationMessage: "刪除最後數字為 {{identifier}} 的 {{secondaryIdentifier}} 卡嗎？",
				PayPalAccountDeleteConfirmationMessage: "刪除 {{identifier}} PayPal 帳戶嗎？",
				VenmoAccountDeleteConfirmationMessage: "確定要刪除用戶名稱為 {{identifier}} 的 Venmo 帳戶嗎？",
				genericDeleteConfirmationMessage: "確定要刪除此付款方式嗎？",
				deleteCancelButton: "取消",
				deleteConfirmationButton: "刪除",
				fieldEmptyForCvv: "請填寫信用卡認證碼（CVV）。",
				fieldEmptyForExpirationDate: "請填寫到期日。",
				fieldEmptyForCardholderName: "請填寫持卡人姓名。",
				fieldTooLongForCardholderName: "持卡人姓名必須少於 256 個字元。",
				fieldEmptyForNumber: "請填寫數字。",
				fieldEmptyForPostalCode: "請填寫郵遞區號。",
				fieldInvalidForCardholderName: "持卡人姓名無效。",
				fieldInvalidForCvv: "此安全代碼無效。",
				fieldInvalidForExpirationDate: "此到期日無效。",
				fieldInvalidForNumber: "此卡號無效。",
				fieldInvalidForPostalCode: "郵遞區號無效。",
				noticeOfCollection: "一經使用信用卡付款，即表示我同意 PayPal 的《私隱權聲明》。",
				genericError: "系統發生錯誤。",
				hostedFieldsTokenizationFailOnDuplicateError: "此信用卡為已儲存的付款方式。",
				hostedFieldsFailedTokenizationError: "請檢查你的資料，然後重試。",
				hostedFieldsFieldsInvalidError: "請檢查你的資料，然後重試。",
				hostedFieldsTokenizationNetworkErrorError: "網絡錯誤。請再試一次。",
				hostedFieldsTokenizationCvvVerificationFailedError: "信用卡認證失敗。請檢查你的資料，然後重試。",
				paypalButtonMustBeUsed: "使用「PayPal 按鈕」繼續付款。",
				venmoButtonMustBeUsed: "使用 Venmo 按鈕以繼續付款。",
				applePayButtonMustBeUsed: "使用 Apple Pay 按鈕繼續付款。",
				paypalAccountTokenizationFailedError: "新增 PayPal 帳戶出現問題，請再試一次。",
				paypalFlowFailedError: "連接至 PayPal 出現問題，請再試一次。",
				paypalTokenizationRequestActiveError: "正在處理 PayPal 授權付款。",
				venmoCanceledError: "系統出現錯誤，請確保裝置已安裝最新版本的 Venmo 應用程式，及瀏覽器支援切換至 Venmo。",
				vaultManagerPaymentMethodDeletionError: "無法刪除付款方式，請再試一次。",
				venmoAppFailedError: "無法在裝置上找到 Venmo 應用程式。",
				unsupportedCardTypeError: "不支援此卡類型。請改用其他信用卡。",
				applePayTokenizationError: "處理 Apple Pay 付款時網路發生錯誤。請再試一次。",
				applePayActiveCardError: "新增可用的信用卡到 Apple Pay 錢包。",
				cardholderNameLabel: "持卡人姓名",
				cardNumberLabel: "卡號",
				cvvLabel: "CVV",
				cvvThreeDigitLabelSubheading: "（3 位數）",
				cvvFourDigitLabelSubheading: "（4 位數）",
				cardholderNamePlaceholder: "持卡人姓名",
				expirationDateLabel: "到期日",
				expirationDateLabelSubheading: "(MM/YY)",
				expirationDatePlaceholder: "MM/YY",
				postalCodeLabel: "郵遞區號",
				saveCardLabel: "儲存卡",
				payWithCard: "使用扣帳卡或信用卡付款",
				endingIn: "最後數字為 {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "信用卡",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "Discover",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "UnionPay"
			}
		}, {}],
		257: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "使用 {{paymentSource}} 付款",
				chooseAnotherWayToPay: "選擇其他付款方式",
				chooseAWayToPay: "選擇付款方式",
				otherWaysToPay: "其他付款方式",
				edit: "編輯",
				doneEditing: "完成",
				editPaymentMethods: "編輯付款方式",
				CreditCardDeleteConfirmationMessage: "刪除末碼為 {{identifier}} 的 {{secondaryIdentifier}} 卡片？",
				PayPalAccountDeleteConfirmationMessage: "刪除 {{identifier}} 的 PayPal 帳戶？",
				VenmoAccountDeleteConfirmationMessage: "確定要刪除用戶名稱為 {{identifier}} 的 Venmo 帳戶？",
				genericDeleteConfirmationMessage: "確定要刪除此付款方式？",
				deleteCancelButton: "取消",
				deleteConfirmationButton: "刪除",
				fieldEmptyForCvv: "填寫信用卡驗證碼。",
				fieldEmptyForExpirationDate: "填寫到期日。",
				fieldEmptyForCardholderName: "填寫持卡人姓名。",
				fieldTooLongForCardholderName: "持卡人姓名必須少於 256 個字元。",
				fieldEmptyForNumber: "填寫數字。",
				fieldEmptyForPostalCode: "填寫郵遞區號。",
				fieldInvalidForCardholderName: "此持卡人姓名無效。",
				fieldInvalidForCvv: "此安全代碼無效。",
				fieldInvalidForExpirationDate: "此到期日無效。",
				fieldInvalidForNumber: "此卡號無效。",
				fieldInvalidForPostalCode: "此郵遞區號無效。",
				noticeOfCollection: "使用我的卡片付款，即表示我同意「PayPal 隱私權聲明」。",
				genericError: "我們的系統發生問題。",
				hostedFieldsTokenizationFailOnDuplicateError: "此信用卡已經是儲存的付款方式。",
				hostedFieldsFailedTokenizationError: "請檢查你的資料並重試。",
				hostedFieldsFieldsInvalidError: "請檢查你的資料並重試。",
				hostedFieldsTokenizationNetworkErrorError: "網路錯誤。請重試。",
				hostedFieldsTokenizationCvvVerificationFailedError: "信用卡認證失敗。請檢查你的資料並重試。",
				paypalButtonMustBeUsed: "使用 PayPal 按鈕繼續付款。",
				venmoButtonMustBeUsed: "使用 Venmo 按鈕繼續付款。",
				applePayButtonMustBeUsed: "使用 PayPal 按鈕繼續付款。",
				paypalAccountTokenizationFailedError: "新增 PayPal 帳戶時發生錯誤。請重試。",
				paypalFlowFailedError: "連結至 PayPal 時發生錯誤。請重試。",
				paypalTokenizationRequestActiveError: "PayPal 付款授權已在進行中。",
				venmoCanceledError: "系統發生錯誤。確保你在裝置上安裝了最新版本的 Venmo 應用程式，且瀏覽器支援轉換至 Venmo。",
				vaultManagerPaymentMethodDeletionError: "無法刪除付款方式，請重試。",
				venmoAppFailedError: "你的裝置上找不到 Venmo 應用程式。",
				unsupportedCardTypeError: "不支援此卡片類型，請改用其他卡片。",
				applePayTokenizationError: "處理 Apple Pay 付款時發生網路連線錯誤。請重試。",
				applePayActiveCardError: "將支援卡片新增至你的 Apple Pay 錢包。",
				cardholderNameLabel: "持卡人姓名",
				cardNumberLabel: "卡號",
				cvvLabel: "信用卡驗證碼",
				cvvThreeDigitLabelSubheading: "（3 位數）",
				cvvFourDigitLabelSubheading: "（4 位數）",
				cardholderNamePlaceholder: "持卡人姓名",
				expirationDateLabel: "到期日",
				expirationDateLabelSubheading: "（月 / 年）",
				expirationDatePlaceholder: "月 / 年",
				postalCodeLabel: "郵遞區號",
				saveCardLabel: "儲存卡片",
				payWithCard: "使用卡片付款",
				endingIn: "末碼為 {{lastFourCardDigits}}",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "卡片",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "美國運通",
				Discover: "發現卡",
				"Diners Club": "大來卡",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "銀聯"
			}
		}, {}],
		258: [function(e, t, n) {
			"use strict";
			t.exports = {
				payingWith: "使用{{paymentSource}}付款",
				chooseAnotherWayToPay: "选择其他付款方式",
				chooseAWayToPay: "选择付款方式",
				otherWaysToPay: "其他付款方式",
				edit: "编辑",
				doneEditing: "完成",
				editPaymentMethods: "编辑付款方式",
				CreditCardDeleteConfirmationMessage: "删除以{{identifier}}}结尾的{{secondaryIdentifier}}}卡？",
				PayPalAccountDeleteConfirmationMessage: "删除PayPal账户{{identifier}}}？",
				VenmoAccountDeleteConfirmationMessage: "确定要删除用户名为{{identifier}}}的Venmo账户吗？",
				genericDeleteConfirmationMessage: "确定要删除此付款方式吗？",
				deleteCancelButton: "取消",
				deleteConfirmationButton: "删除",
				fieldEmptyForCvv: "请填写卡校验值。",
				fieldEmptyForExpirationDate: "请填写有效期限。",
				fieldEmptyForCardholderName: "请填写持卡人姓名。",
				fieldTooLongForCardholderName: "持卡人姓名必须少于256个字符。",
				fieldEmptyForNumber: "请填写号码。",
				fieldEmptyForPostalCode: "请填写邮政编码。",
				fieldInvalidForCardholderName: "此持卡人姓名无效。",
				fieldInvalidForCvv: "此验证码无效。",
				fieldInvalidForExpirationDate: "此有效期限无效。",
				fieldInvalidForNumber: "此卡号无效。",
				fieldInvalidForPostalCode: "此邮政编码无效。",
				noticeOfCollection: "使用我的卡付款即表示我同意PayPal隐私声明。",
				genericError: "我们遇到了一些问题。",
				hostedFieldsTokenizationFailOnDuplicateError: "此信用卡已存在于已保存的付款方式中。",
				hostedFieldsFailedTokenizationError: "请检查您的信息，然后重试。",
				hostedFieldsFieldsInvalidError: "请检查您的信息，然后重试。",
				hostedFieldsTokenizationNetworkErrorError: "网络错误。请重试。",
				hostedFieldsTokenizationCvvVerificationFailedError: "信用卡认证失败。请检查您的信息，然后重试。",
				paypalButtonMustBeUsed: "使用PayPal按钮以便继续进行您的付款。",
				venmoButtonMustBeUsed: "使用Venmo按钮继续付款。",
				applePayButtonMustBeUsed: "使用Apple Pay按钮以便继续进行您的付款。",
				paypalAccountTokenizationFailedError: "添加PayPal账户时遇到了问题。请重试。",
				paypalFlowFailedError: "连接到PayPal时遇到了问题。请重试。",
				paypalTokenizationRequestActiveError: "PayPal付款授权正在处理中。",
				venmoCanceledError: "遇到了一些问题。请确保您的设备上安装了最新版本的Venmo应用，并且您的浏览器支持切换到Venmo。",
				vaultManagerPaymentMethodDeletionError: "无法删除付款方式，请重试。",
				venmoAppFailedError: "未能在您的设备上找到Venmo应用。",
				unsupportedCardTypeError: "不支持该卡类型。请尝试其它卡。",
				applePayTokenizationError: "处理Apple Pay付款时出现了网络错误。请重试。",
				applePayActiveCardError: "在您的Apple Pay钱包中添加一张受支持的卡。",
				cardholderNameLabel: "持卡人姓名",
				cardNumberLabel: "卡号",
				cvvLabel: "卡校验值",
				cvvThreeDigitLabelSubheading: "（3位数）",
				cvvFourDigitLabelSubheading: "（4位数）",
				cardholderNamePlaceholder: "持卡人姓名",
				expirationDateLabel: "有效期限",
				expirationDateLabelSubheading: "（月/年）",
				expirationDatePlaceholder: "月/年",
				postalCodeLabel: "邮政编码",
				saveCardLabel: "保存卡",
				payWithCard: "使用卡支付",
				endingIn: "以{{lastFourCardDigits}}}结尾",
				"Apple Pay": "Apple Pay",
				Venmo: "Venmo",
				Card: "卡",
				PayPal: "PayPal",
				"PayPal Credit": "PayPal Credit",
				"Google Pay": "Google Pay",
				"American Express": "American Express",
				Discover: "发现",
				"Diners Club": "Diners Club",
				Elo: "Elo",
				Hiper: "Hiper",
				Hipercard: "Hipercard",
				MasterCard: "Mastercard",
				Visa: "Visa",
				JCB: "JCB",
				Maestro: "Maestro",
				UnionPay: "银联"
			}
		}, {}],
		259: [function(e, t, n) {
			"use strict";
			var i = e("../lib/assign").assign,
				r = e("../lib/dropin-error"),
				o = e("../constants").errors;

			function a(e) {
				i(this, e = e || {})
			}
			a.prototype.getElementById = function(e) {
				return this.element ? this.element.querySelector('[data-braintree-id="' + e + '"]') : null
			}, a.prototype.requestPaymentMethod = function() {
				return Promise.reject(new r(o.NO_PAYMENT_METHOD_ERROR))
			}, a.prototype.getPaymentMethod = function() {
				return this.activeMethodView && this.activeMethodView.paymentMethod
			}, a.prototype.onSelection = function() {}, a.prototype.teardown = function() {
				return Promise.resolve()
			}, a.prototype.preventUserAction = function() {
				this.element && this.element.classList.add("braintree-sheet--loading"), this.model.preventUserAction()
			}, a.prototype.allowUserAction = function() {
				this.element && this.element.classList.remove("braintree-sheet--loading"), this.model.allowUserAction()
			}, t.exports = a
		}, {
			"../constants": 202,
			"../lib/assign": 208,
			"../lib/dropin-error": 212
		}],
		260: [function(e, t, n) {
			"use strict";
			var i = e("./base-view"),
				r = e("../lib/add-selection-event-handler"),
				o = e("../constants").paymentMethodTypes;

			function a() {
				i.apply(this, arguments), this._initialize()
			}
			a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.ID = a.prototype.ID = "delete-confirmation", a.prototype._initialize = function() {
				this._yesButton = this.getElementById("delete-confirmation__yes"), this._noButton = this.getElementById("delete-confirmation__no"), this._messageBox = this.getElementById("delete-confirmation__message"), r(this._yesButton, function() {
					this.model.deleteVaultedPaymentMethod()
				}.bind(this)), r(this._noButton, function() {
					this.model.cancelDeleteVaultedPaymentMethod()
				}.bind(this))
			}, a.prototype.applyPaymentMethod = function(e) {
				var t, n, i = this.strings[e.type + "DeleteConfirmationMessage"];
				if (i) {
					switch (e.type) {
						case o.card:
							t = e.details.lastFour, n = e.details.cardType, n = this.strings[n] || n;
							break;
						case o.paypal:
							t = e.details.email;
							break;
						case o.venmo:
							t = e.details.username
					}
					i = i.replace("{{identifier}}", t), n && (i = i.replace("{{secondaryIdentifier}}", n))
				} else i = this.strings.genericDeleteConfirmationMessage;
				this._messageBox.innerText = i
			}, a.prototype.onSelection = function() {
				window.requestAnimationFrame(function() {
					this._yesButton.focus()
				}.bind(this))
			}, t.exports = a
		}, {
			"../constants": 202,
			"../lib/add-selection-event-handler": 206,
			"./base-view": 259
		}],
		261: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../constants").analyticsKinds,
				o = e("./base-view"),
				a = e("./payment-sheet-views"),
				s = e("./payment-methods-view"),
				l = e("./payment-options-view"),
				d = e("./delete-confirmation-view"),
				c = e("../lib/add-selection-event-handler"),
				p = e("../lib/wait"),
				u = e("../lib/supports-flexbox"),
				h = e("../constants").CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT,
				m = e("../constants").errors.DEVELOPER_MISCONFIGURATION_MESSAGE;

			function y() {
				o.apply(this, arguments), this.dependenciesInitializing = 0, this._initialize()
			}

			function f(e) {
				return "braintree-show-" + e
			}
			y.prototype = Object.create(o.prototype), y.prototype.constructor = y, y.prototype._initialize = function() {
				var e;
				this._hasMultiplePaymentOptions = this.model.supportedPaymentOptions.length > 1, this._views = {}, this.sheetContainer = this.getElementById("sheet-container"), this.sheetErrorText = this.getElementById("sheet-error-text"), this.toggle = this.getElementById("toggle"), this.disableWrapper = this.getElementById("disable-wrapper"), this.lowerContainer = this.getElementById("lower-container"), this.loadingContainer = this.getElementById("loading-container"), this.dropinContainer = this.element.querySelector(".braintree-dropin"), this.supportsFlexbox = u(), this.model.on("asyncDependenciesReady", this.hideLoadingIndicator.bind(this)), this.model.on("errorOccurred", this.showSheetError.bind(this)), this.model.on("errorCleared", this.hideSheetError.bind(this)), this.model.on("preventUserAction", this.preventUserAction.bind(this)), this.model.on("allowUserAction", this.allowUserAction.bind(this)), this.paymentSheetViewIDs = Object.keys(a).reduce(function(e, t) {
					var n, i;
					return -1 !== this.model.supportedPaymentOptions.indexOf(t) && ((i = new(n = a[t])({
						element: this.getElementById(n.ID),
						mainView: this,
						model: this.model,
						client: this.client,
						strings: this.strings
					})).initialize(), this.addView(i), e.push(i.ID)), e
				}.bind(this), []), this.paymentMethodsViews = new s({
					element: this.element,
					model: this.model,
					client: this.client,
					strings: this.strings
				}), this.addView(this.paymentMethodsViews), this.deleteConfirmationView = new d({
					element: this.getElementById("delete-confirmation"),
					model: this.model,
					strings: this.strings
				}), this.addView(this.deleteConfirmationView), c(this.toggle, this.toggleAdditionalOptions.bind(this)), this.model.on("changeActivePaymentMethod", function() {
					p.delay(h).then(function() {
						var e = s.ID;
						this.model.hasPaymentMethods() || (e = this.model.getInitialViewId()), this.setPrimaryView(e)
					}.bind(this))
				}.bind(this)), this.model.on("changeActiveView", this._onChangeActiveView.bind(this)), this.model.on("removeActivePaymentMethod", function() {
					var e = this.getView(this.model.getActivePaymentViewId());
					e && "function" == typeof e.removeActivePaymentMethod && e.removeActivePaymentMethod()
				}.bind(this)), this.model.on("enableEditMode", this.enableEditMode.bind(this)), this.model.on("disableEditMode", this.disableEditMode.bind(this)), this.model.on("confirmPaymentMethodDeletion", this.openConfirmPaymentMethodDeletionDialog.bind(this)), this.model.on("cancelVaultedPaymentMethodDeletion", this.cancelVaultedPaymentMethodDeletion.bind(this)), this.model.on("startVaultedPaymentMethodDeletion", this.startVaultedPaymentMethodDeletion.bind(this)), this.model.on("finishVaultedPaymentMethodDeletion", this.finishVaultedPaymentMethodDeletion.bind(this)), this._hasMultiplePaymentOptions && (e = new l({
					client: this.client,
					element: this.getElementById(l.ID),
					mainView: this,
					model: this.model,
					strings: this.strings
				}), this.addView(e)), this._sendToDefaultView()
			}, y.prototype._onChangeActiveView = function(e) {
				var t = e.newViewId,
					n = this.getView(t);
				t === s.ID ? (this.paymentMethodsViews.container.classList.add("braintree-methods--active"), this.sheetContainer.classList.remove("braintree-sheet--active")) : (p.delay(0).then(function() {
					this.sheetContainer.classList.add("braintree-sheet--active")
				}.bind(this)), this.paymentMethodsViews.container.classList.remove("braintree-methods--active"), this.getView(t).getPaymentMethod() || this.model.setPaymentMethodRequestable({
					isRequestable: !1
				})), n.onSelection()
			}, y.prototype.addView = function(e) {
				this._views[e.ID] = e
			}, y.prototype.getView = function(e) {
				return this._views[e]
			}, y.prototype.setPrimaryView = function(e, t) {
				var n;
				p.delay(0).then(function() {
					this.element.className = f(e), t && this.element.classList.add(f(t))
				}.bind(this)), this.primaryView = this.getView(e), this.model.changeActiveView(e), -1 !== this.paymentSheetViewIDs.indexOf(e) ? this.model.getPaymentMethods().length > 0 || this.getView(l.ID) ? this.showToggle() : this.hideToggle() : e === s.ID ? (this.showToggle(), this.getElementById("lower-container").appendChild(this.getElementById("options"))) : e === l.ID && this.hideToggle(), this.supportsFlexbox || this.element.setAttribute("data-braintree-no-flexbox", !0), n = this.primaryView.getPaymentMethod(), this.model.setPaymentMethodRequestable({
					isRequestable: Boolean(n && !this.model.isInEditMode()),
					type: n && n.type,
					selectedPaymentMethod: n
				}), this.model.clearError()
			}, y.prototype.requestPaymentMethod = function() {
				return this.getView(this.model.getActivePaymentViewId()).requestPaymentMethod().then(function(e) {
					return i.sendEvent(this.client, "request-payment-method." + r[e.type]), e
				}.bind(this)).catch(function(e) {
					return i.sendEvent(this.client, "request-payment-method.error"), Promise.reject(e)
				}.bind(this))
			}, y.prototype.hideLoadingIndicator = function() {
				this.dropinContainer.classList.remove("braintree-loading"), this.dropinContainer.classList.add("braintree-loaded"), this.loadingContainer.classList.add("braintree-hidden")
			}, y.prototype.showLoadingIndicator = function() {
				this.dropinContainer.classList.add("braintree-loading"), this.dropinContainer.classList.remove("braintree-loaded"), this.loadingContainer.classList.remove("braintree-hidden")
			}, y.prototype.toggleAdditionalOptions = function() {
				var e, t = -1 !== this.paymentSheetViewIDs.indexOf(this.primaryView.ID);
				this.hideToggle(), this._hasMultiplePaymentOptions ? t ? 0 === this.model.getPaymentMethods().length ? this.setPrimaryView(l.ID) : (this.setPrimaryView(s.ID, l.ID), this.hideToggle()) : this.element.classList.add(f(l.ID)) : (e = this.paymentSheetViewIDs[0], this.element.classList.add(f(e)), this.model.changeActiveView(e))
			}, y.prototype.showToggle = function() {
				this.model.isInEditMode() || (this.toggle.classList.remove("braintree-hidden"), this.lowerContainer.classList.add("braintree-hidden"))
			}, y.prototype.hideToggle = function() {
				this.toggle.classList.add("braintree-hidden"), this.lowerContainer.classList.remove("braintree-hidden")
			}, y.prototype.showSheetError = function(e) {
				var t, n, i = this.strings.genericError;
				t = this.strings.hasOwnProperty(e) ? this.strings[e] : e && "string" == typeof e.code ? this.strings[(n = e.code, n.toLowerCase().replace(/(\_\w)/g, (function(e) {
					return e[1].toUpperCase()
				})) + "Error")] || i : "developerError" === e ? m : i, this.dropinContainer.classList.add("braintree-sheet--has-error"), this.sheetErrorText.innerHTML = t
			}, y.prototype.hideSheetError = function() {
				this.dropinContainer.classList.remove("braintree-sheet--has-error")
			}, y.prototype.getOptionsElements = function() {
				return this._views.options.elements
			}, y.prototype.preventUserAction = function() {
				this.disableWrapper.classList.remove("braintree-hidden")
			}, y.prototype.allowUserAction = function() {
				this.disableWrapper.classList.add("braintree-hidden")
			}, y.prototype.teardown = function() {
				var e, t = Object.keys(this._views).map(function(t) {
					return this._views[t].teardown().catch((function(t) {
						e = t
					}))
				}.bind(this));
				return Promise.all(t).then((function() {
					return e ? Promise.reject(e) : Promise.resolve()
				}))
			}, y.prototype.enableEditMode = function() {
				this.setPrimaryView(this.paymentMethodsViews.ID), this.paymentMethodsViews.enableEditMode(), this.hideToggle(), this.model.setPaymentMethodRequestable({
					isRequestable: !1
				})
			}, y.prototype.disableEditMode = function() {
				var e;
				this.hideSheetError(), this.paymentMethodsViews.disableEditMode(), this.showToggle(), e = this.primaryView.getPaymentMethod(), this.model.setPaymentMethodRequestable({
					isRequestable: Boolean(e),
					type: e && e.type,
					selectedPaymentMethod: e
				})
			}, y.prototype.openConfirmPaymentMethodDeletionDialog = function(e) {
				this.deleteConfirmationView.applyPaymentMethod(e), this.setPrimaryView(this.deleteConfirmationView.ID)
			}, y.prototype.cancelVaultedPaymentMethodDeletion = function() {
				this.setPrimaryView(this.paymentMethodsViews.ID)
			}, y.prototype.startVaultedPaymentMethodDeletion = function() {
				this.element.className = "", this.showLoadingIndicator()
			}, y.prototype.finishVaultedPaymentMethodDeletion = function(e) {
				var t = this;
				return this.paymentMethodsViews.refreshPaymentMethods(), e && this.model.getPaymentMethods().length > 0 ? (this.model.enableEditMode(), this.showSheetError("vaultManagerPaymentMethodDeletionError")) : this._sendToDefaultView(), new Promise((function(e) {
					p.delay(500).then((function() {
						t.hideLoadingIndicator(), e()
					}))
				}))
			}, y.prototype._sendToDefaultView = function() {
				var e = this.model.getPaymentMethods(),
					t = !1 !== this.model.merchantConfiguration.preselectVaultedPaymentMethod;
				e.length > 0 ? t ? (i.sendEvent(this.client, "vaulted-card.preselect"), this.model.changeActivePaymentMethod(e[0])) : this.setPrimaryView(this.paymentMethodsViews.ID) : this._hasMultiplePaymentOptions ? this.setPrimaryView(l.ID) : this.setPrimaryView(this.paymentSheetViewIDs[0])
			}, t.exports = y
		}, {
			"../constants": 202,
			"../lib/add-selection-event-handler": 206,
			"../lib/analytics": 207,
			"../lib/supports-flexbox": 220,
			"../lib/wait": 223,
			"./base-view": 259,
			"./delete-confirmation-view": 260,
			"./payment-methods-view": 263,
			"./payment-options-view": 264,
			"./payment-sheet-views": 269
		}],
		262: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("./base-view"),
				o = e("../constants"),
				a = e("../lib/add-selection-event-handler");

			function s() {
				r.apply(this, arguments), this._initialize()
			}
			s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype._initialize = function() {
				var e, t = '<div class="braintree-method__icon-container braintree-method__delete-container">\n  <div class="braintree-method__icon braintree-method__delete">\n    <svg width="48" height="29">\n      <use xlink:href="#iconX"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="braintree-method__logo">\n  <svg width="40" height="24" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-method__label">@TITLE<br><div class="braintree-method__label--small">@SUBTITLE</div></div>\n\n<div class="braintree-method__icon-container braintree-method__check-container">\n  <div class="braintree-method__icon braintree-method__check">\n    <svg height="100%" width="100%">\n      <use xlink:href="#iconCheck"></use>\n    </svg>\n  </div>\n</div>\n',
					n = o.paymentMethodCardTypes,
					i = o.paymentMethodTypes;
				switch (this.element = document.createElement("div"), this.element.className = "braintree-method", this.element.setAttribute("tabindex", "0"), this.element.setAttribute("role", "button"), a(this.element, function() {
						this.model.isInEditMode() ? this._selectDelete() : this._choosePaymentMethod()
					}.bind(this)), this.paymentMethod.type) {
					case i.applePay:
						t = t.replace(/@ICON/g, "logoApplePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Apple Pay"]).replace(/@SUBTITLE/g, "");
						break;
					case i.card:
						e = this.strings.endingIn.replace("{{lastFourCardDigits}}", this.paymentMethod.details.lastFour), t = t.replace(/@ICON/g, "icon-" + n[this.paymentMethod.details.cardType]).replace(/@CLASSNAME/g, " braintree-icon--bordered").replace(/@TITLE/g, e).replace(/@SUBTITLE/g, this.strings[this.paymentMethod.details.cardType]);
						break;
					case i.googlePay:
						t = t.replace(/@ICON/g, "logoGooglePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Google Pay"]).replace(/@SUBTITLE/g, "");
						break;
					case i.paypal:
						t = t.replace(/@ICON/g, "logoPayPal").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.email).replace(/@SUBTITLE/g, this.strings.PayPal);
						break;
					case i.venmo:
						t = t.replace(/@ICON/g, "logoVenmo").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.username).replace(/@SUBTITLE/g, this.strings.Venmo)
				}
				this.element.innerHTML = t, this.checkMark = this.element.querySelector(".braintree-method__check-container")
			}, s.prototype.setActive = function(e) {
				setTimeout(function() {
					this.element.classList.toggle("braintree-method--active", e)
				}.bind(this), 0)
			}, s.prototype.enableEditMode = function() {
				this.checkMark.classList.add("braintree-hidden"), this.paymentMethod.hasSubscription && this.element.classList.add("braintree-method--disabled")
			}, s.prototype.disableEditMode = function() {
				this.checkMark.classList.remove("braintree-hidden"), this.element.classList.remove("braintree-method--disabled")
			}, s.prototype.teardown = function() {
				this.element.parentNode && this.element.parentNode.removeChild(this.element)
			}, s.prototype._choosePaymentMethod = function() {
				this.paymentMethod.vaulted && i.sendEvent(this.client, "vaulted-" + o.analyticsKinds[this.paymentMethod.type] + ".select"), this.model.changeActivePaymentMethod(this.paymentMethod)
			}, s.prototype._selectDelete = function() {
				this.model.confirmPaymentMethodDeletion(this.paymentMethod)
			}, t.exports = s
		}, {
			"../constants": 202,
			"../lib/add-selection-event-handler": 206,
			"../lib/analytics": 207,
			"./base-view": 259
		}],
		263: [function(e, t, n) {
			"use strict";
			var i = e("./base-view"),
				r = e("./payment-method-view"),
				o = e("../lib/dropin-error"),
				a = e("../constants").errors,
				s = e("../lib/add-selection-event-handler"),
				l = {
					CreditCard: "Card",
					PayPalAccount: "PayPal",
					ApplePayCard: "Apple Pay",
					AndroidPayCard: "Google Pay",
					VenmoAccount: "Venmo"
				};

			function d() {
				i.apply(this, arguments), this._initialize()
			}
			d.prototype = Object.create(i.prototype), d.prototype.constructor = d, d.ID = d.prototype.ID = "methods", d.prototype._initialize = function() {
				this.views = [], this.container = this.getElementById("methods-container"), this._headingLabel = this.getElementById("methods-label"), this._editButton = this.getElementById("methods-edit"), this.model.on("addPaymentMethod", this._addPaymentMethod.bind(this)), this.model.on("changeActivePaymentMethod", this._changeActivePaymentMethodView.bind(this)), this.model.on("refreshPaymentMethods", this.refreshPaymentMethods.bind(this)), this.refreshPaymentMethods(), this.model.merchantConfiguration.vaultManager && (this.model.on("removePaymentMethod", this._removePaymentMethod.bind(this)), s(this._editButton, function() {
					this.model.isInEditMode() ? this.model.disableEditMode() : this.model.enableEditMode()
				}.bind(this)), this._editButton.classList.remove("braintree-hidden"))
			}, d.prototype.removeActivePaymentMethod = function() {
				this.activeMethodView && (this.activeMethodView.setActive(!1), this.activeMethodView = null, this._headingLabel.classList.add("braintree-no-payment-method-selected"))
			}, d.prototype._getPaymentMethodString = function() {
				var e, t;
				return this.activeMethodView ? (e = l[this.activeMethodView.paymentMethod.type], t = this.strings[e], this.strings.payingWith.replace("{{paymentSource}}", t)) : ""
			}, d.prototype.enableEditMode = function() {
				this.container.classList.add("braintree-methods--edit"), this._editButton.innerHTML = this.strings.deleteCancelButton, this._headingLabel.innerHTML = this.strings.editPaymentMethods, this.views.forEach((function(e) {
					e.enableEditMode()
				}))
			}, d.prototype.disableEditMode = function() {
				this.container.classList.remove("braintree-methods--edit"), this._editButton.innerHTML = this.strings.edit, this._headingLabel.innerHTML = this._getPaymentMethodString(), this.views.forEach((function(e) {
					e.disableEditMode()
				}))
			}, d.prototype._addPaymentMethod = function(e) {
				var t = new r({
					model: this.model,
					paymentMethod: e,
					client: this.client,
					strings: this.strings
				});
				this.model.isGuestCheckout && this.container.firstChild && (this.views[0].teardown(), this.views.pop()), this.container.firstChild ? this.container.insertBefore(t.element, this.container.firstChild) : this.container.appendChild(t.element), this.views.push(t)
			}, d.prototype._removePaymentMethod = function(e) {
				var t;
				for (t = 0; t < this.views.length; t++)
					if (this.views[t].paymentMethod === e) {
						this.views[t].teardown(), this._headingLabel.innerHTML = "&nbsp;", this.views.splice(t, 1);
						break
					}
			}, d.prototype._changeActivePaymentMethodView = function(e) {
				var t, n = this.activeMethodView;
				for (t = 0; t < this.views.length; t++)
					if (this.views[t].paymentMethod === e) {
						this.activeMethodView = this.views[t], this._headingLabel.innerHTML = this._getPaymentMethodString();
						break
					} n && n.setActive(!1), this.activeMethodView.setActive(!0), this._headingLabel.classList.remove("braintree-no-payment-method-selected")
			}, d.prototype.requestPaymentMethod = function() {
				return !this.activeMethodView || this.model.isInEditMode() ? Promise.reject(new o(a.NO_PAYMENT_METHOD_ERROR)) : Promise.resolve(this.activeMethodView.paymentMethod)
			}, d.prototype.refreshPaymentMethods = function() {
				var e, t = this.model.getPaymentMethods();
				for (this.views.forEach((function(e) {
						e.teardown()
					})), this.views = [], e = t.length - 1; e >= 0; e--) this._addPaymentMethod(t[e])
			}, t.exports = d
		}, {
			"../constants": 202,
			"../lib/add-selection-event-handler": 206,
			"../lib/dropin-error": 212,
			"./base-view": 259,
			"./payment-method-view": 262
		}],
		264: [function(e, t, n) {
			"use strict";
			var i = e("../lib/analytics"),
				r = e("../lib/add-selection-event-handler"),
				o = e("./base-view"),
				a = e("../constants").paymentOptionIDs;

			function s() {
				o.apply(this, arguments), this._initialize()
			}
			s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.ID = s.prototype.ID = "options", s.prototype._initialize = function() {
				this.container = this.getElementById("payment-options-container"), this.elements = {}, this.model.supportedPaymentOptions.forEach(function(e) {
					this._addPaymentOption(e)
				}.bind(this))
			}, s.prototype._addPaymentOption = function(e) {
				var t, n = document.createElement("div"),
					o = '<div class="braintree-option__logo">\n  <svg width="48" height="29" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-option__label" aria-label="@OPTION_LABEL">\n  @OPTION_TITLE\n  <div class="braintree-option__disabled-message"></div>\n</div>\n',
					s = function() {
						this.mainView.setPrimaryView(e), this.model.selectPaymentOption(e), i.sendEvent(this.client, "selected." + a[e])
					}.bind(this);
				switch (n.className = "braintree-option braintree-option__" + e, n.setAttribute("tabindex", "0"), n.setAttribute("role", "button"), e) {
					case a.applePay:
						t = this.strings["Apple Pay"], o = o.replace(/@ICON/g, "logoApplePay");
						break;
					case a.card:
						t = this.strings.Card, o = (o = o.replace(/@ICON/g, "iconCardFront")).replace(/@CLASSNAME/g, "braintree-icon--bordered");
						break;
					case a.googlePay:
						t = this.strings["Google Pay"], o = o.replace(/@ICON/g, "logoGooglePay");
						break;
					case a.paypal:
						t = this.strings.PayPal, o = o.replace(/@ICON/g, "logoPayPal");
						break;
					case a.paypalCredit:
						t = this.strings["PayPal Credit"], o = o.replace(/@ICON/g, "logoPayPalCredit");
						break;
					case a.venmo:
						t = this.strings.Venmo, o = o.replace(/@ICON/g, "logoVenmo")
				}
				o = (o = (o = o.replace(/@OPTION_LABEL/g, this._generateOptionLabel(t))).replace(/@OPTION_TITLE/g, t)).replace(/@CLASSNAME/g, ""), n.innerHTML = o, r(n, s), this.container.appendChild(n), this.elements[e] = {
					div: n,
					clickHandler: s
				}
			}, s.prototype._generateOptionLabel = function(e) {
				return this.strings.payingWith.replace("{{paymentSource}}", e)
			}, t.exports = s
		}, {
			"../constants": 202,
			"../lib/add-selection-event-handler": 206,
			"../lib/analytics": 207,
			"./base-view": 259
		}],
		265: [function(e, t, n) {
			(function(n) {
				(function() {
					"use strict";
					var i = e("../../lib/assign").assign,
						r = e("../base-view"),
						o = e("braintree-web/apple-pay"),
						a = e("../../lib/dropin-error"),
						s = e("../../lib/is-https"),
						l = e("../../constants").paymentOptionIDs;

					function d() {
						r.apply(this, arguments)
					}
					d.prototype = Object.create(r.prototype), d.prototype.constructor = d, d.ID = d.prototype.ID = l.applePay, d.prototype.initialize = function() {
						var e = this;
						return e.applePayConfiguration = i({}, e.model.merchantConfiguration.applePay), e.applePaySessionVersion = e.applePayConfiguration.applePaySessionVersion || 2, delete e.applePayConfiguration.applePaySessionVersion, o.create({
							client: this.client
						}).then((function(t) {
							e.buttonDiv = e.getElementById("apple-pay-button"), e.applePayInstance = t, e.buttonDiv.onclick = e._showPaymentSheet.bind(e), e.buttonDiv.style["-apple-pay-button-style"] = e.model.merchantConfiguration.applePay.buttonStyle || "black", e.model.asyncDependencyReady(d.ID)
						})).catch((function(t) {
							e.model.asyncDependencyFailed({
								view: e.ID,
								error: new a(t)
							})
						}))
					}, d.prototype.requestPaymentMethod = function() {
						return this.model.reportError("applePayButtonMustBeUsed"), r.prototype.requestPaymentMethod.call(this)
					}, d.prototype._showPaymentSheet = function() {
						var e, t, i = this;
						return this._sessionInProgress || (this._sessionInProgress = !0, e = this.applePayInstance.createPaymentRequest(this.applePayConfiguration.paymentRequest), (t = new n.ApplePaySession(i.applePaySessionVersion, e)).onvalidatemerchant = function(e) {
							i.applePayInstance.performValidation({
								validationURL: e.validationURL,
								displayName: i.applePayConfiguration.displayName
							}).then((function(e) {
								t.completeMerchantValidation(e)
							})).catch((function(e) {
								i.model.reportError(e), i._sessionInProgress = !1, t.abort()
							}))
						}, t.onpaymentauthorized = function(e) {
							i.applePayInstance.tokenize({
								token: e.payment.token
							}).then((function(r) {
								i._sessionInProgress = !1, t.completePayment(n.ApplePaySession.STATUS_SUCCESS), r.rawPaymentData = e.payment, i.model.addPaymentMethod(r)
							})).catch((function(e) {
								i.model.reportError(e), i._sessionInProgress = !1, t.completePayment(n.ApplePaySession.STATUS_FAILURE)
							}))
						}, t.oncancel = function() {
							i._sessionInProgress = !1
						}, t.begin()), !1
					}, d.prototype.updateConfiguration = function(e, t) {
						this.applePayConfiguration[e] = t
					}, d.isEnabled = function(e) {
						var t = e.client.getConfiguration().gatewayConfiguration.applePayWeb && Boolean(e.merchantConfiguration.applePay),
							i = e.merchantConfiguration.applePay && e.merchantConfiguration.applePay.applePaySessionVersion;
						return i = i || 2, t && n.ApplePaySession && s.isHTTPS() && n.ApplePaySession.supportsVersion(i) ? Promise.resolve(Boolean(n.ApplePaySession.canMakePayments())) : Promise.resolve(!1)
					}, t.exports = d
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"../../constants": 202,
			"../../lib/assign": 208,
			"../../lib/dropin-error": 212,
			"../../lib/is-https": 215,
			"../base-view": 259,
			"braintree-web/apple-pay": 49
		}],
		266: [function(e, t, n) {
			(function(n) {
				(function() {
					"use strict";
					var i, r = e("../../lib/analytics"),
						o = e("../../lib/assign").assign,
						a = e("../../lib/browser-detection"),
						s = e("../base-view"),
						l = e("braintree-web/paypal-checkout"),
						d = e("../../lib/dropin-error"),
						c = e("../../constants"),
						p = e("@braintree/asset-loader"),
						u = e("../../translations").fiveCharacterLocales,
						h = ["offerCredit", "locale"];

					function m() {
						s.apply(this, arguments)
					}
					m.prototype = Object.create(s.prototype), m.prototype.initialize = function() {
						var e, t = Boolean(this._isPayPalCredit),
							i = !1,
							r = this,
							a = t ? "paypalCredit" : "paypal",
							s = this.model.merchantConfiguration[a],
							c = "#braintree--dropin__" + this.model.componentID;
						return this.paypalConfiguration = o({}, s), e = setTimeout((function() {
							r.model.asyncDependencyFailed({
								view: r.ID,
								error: new d("There was an error connecting to PayPal.")
							})
						}), 3e4), l.create({
							client: this.client
						}).then((function(o) {
							var s, l = '[data-braintree-id="paypal-button"]',
								d = "production" === r.client.getConfiguration().gatewayConfiguration.environment ? "production" : "sandbox",
								h = r.model.merchantConfiguration.locale;
							return r.paypalInstance = o, r.paypalConfiguration.offerCredit = Boolean(t), s = {
								env: d,
								style: r.paypalConfiguration.buttonStyle || {},
								commit: r.paypalConfiguration.commit,
								payment: function() {
									return o.createPayment(r.paypalConfiguration).catch(p)
								},
								onAuthorize: function(e) {
									var t = r.paypalConfiguration.vault && !1 === r.paypalConfiguration.vault.vaultPayPal;
									return t && (e.vault = !1), o.tokenizePayment(e).then((function(e) {
										t || "vault" !== r.paypalConfiguration.flow || r.model.isGuestCheckout || (e.vaulted = !0), r.model.addPaymentMethod(e)
									})).catch(p)
								},
								onError: p
							}, h && h in u && (r.paypalConfiguration.locale = h, s.locale = h), s.funding = {
								disallowed: []
							}, Object.keys(n.paypal.FUNDING).forEach((function(e) {
								"PAYPAL" !== e && "CREDIT" !== e && s.funding.disallowed.push(n.paypal.FUNDING[e])
							})), t ? (l = '[data-braintree-id="paypal-credit-button"]', s.style.label = "credit") : s.funding.disallowed.push(n.paypal.FUNDING.CREDIT), l = c + " " + l, n.paypal.Button.render(s, l).then((function() {
								r.model.asyncDependencyReady(a), i = !0, clearTimeout(e)
							}))
						})).catch(p);

						function p(t) {
							i ? r.model.reportError(t) : (r.model.asyncDependencyFailed({
								view: r.ID,
								error: t
							}), clearTimeout(e))
						}
					}, m.prototype.requestPaymentMethod = function() {
						return this.model.reportError("paypalButtonMustBeUsed"), s.prototype.requestPaymentMethod.call(this)
					}, m.prototype.updateConfiguration = function(e, t) {
						-1 === h.indexOf(e) && (this.paypalConfiguration[e] = t)
					}, m.isEnabled = function(e) {
						var t = e.client.getConfiguration().gatewayConfiguration,
							o = e.merchantConfiguration.paypal || e.merchantConfiguration.paypalCredit;
						return t.paypalEnabled ? a.isIe9() || a.isIe10() ? (r.sendEvent(e.client, e.viewID + ".checkout.js-browser-not-supported"), Promise.resolve(!1)) : n.paypal && n.paypal.Button ? Promise.resolve(!0) : i || (i = p.loadScript({
							src: c.CHECKOUT_JS_SOURCE,
							id: c.PAYPAL_CHECKOUT_SCRIPT_ID,
							dataAttributes: {
								"log-level": o.logLevel || "warn"
							}
						}).then((function() {
							return Promise.resolve(!0)
						})).catch((function() {
							return Promise.resolve(!1)
						})).then((function(e) {
							return i = null, Promise.resolve(e)
						}))) : Promise.resolve(!1)
					}, t.exports = m
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"../../constants": 202,
			"../../lib/analytics": 207,
			"../../lib/assign": 208,
			"../../lib/browser-detection": 209,
			"../../lib/dropin-error": 212,
			"../../translations": 242,
			"../base-view": 259,
			"@braintree/asset-loader": 1,
			"braintree-web/paypal-checkout": 128
		}],
		267: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/assign").assign,
				r = e("../base-view"),
				o = e("../../constants"),
				a = e("../../lib/dropin-error"),
				s = e("braintree-web/hosted-fields"),
				l = e("../../lib/is-utf-8"),
				d = e("../../lib/transition-helper"),
				c = ["empty", "inputSubmitRequest", "binAvailable"],
				p = ["number", "expirationDate", "cvv", "postalCode", "cardholderName"];

			function u() {
				r.apply(this, arguments)
			}

			function h(e) {
				return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
			}

			function m(e) {
				return e[0].toUpperCase() + e.substr(1)
			}

			function y(e) {
				var t = l() ? "•" : "*";
				return Array(e + 1).join(t)
			}
			u.prototype = Object.create(r.prototype), u.prototype.constructor = u, u.ID = u.prototype.ID = o.paymentOptionIDs.card, u.prototype.initialize = function() {
				var e, t, n, i = this.getElementById("cardholder-name-field-group");
				return this.model.merchantConfiguration.card && !0 !== this.model.merchantConfiguration.card ? this.merchantConfiguration = this.model.merchantConfiguration.card : this.merchantConfiguration = {}, this.merchantConfiguration.vault = this.merchantConfiguration.vault || {}, this.hasCardholderName = Boolean(this.merchantConfiguration.cardholderName), this.cardholderNameRequired = this.hasCardholderName && !0 === this.merchantConfiguration.cardholderName.required, n = this._generateHostedFieldsOptions(), this._renderCardIcons(), this._hideUnsupportedCardIcons(), this.hasCVV = n.fields.cvv, this.saveCardInput = this.getElementById("save-card-input"), this.cardNumberIcon = this.getElementById("card-number-icon"), this.cardNumberIconSvg = this.getElementById("card-number-icon-svg"), this.cvvIcon = this.getElementById("cvv-icon"), this.cvvIconSvg = this.getElementById("cvv-icon-svg"), this.cvvLabelDescriptor = this.getElementById("cvv-label-descriptor"), this.fieldErrors = {}, this.hasCardholderName || (i.parentNode.removeChild(i), p = p.filter((function(e) {
					return "cardholderName" !== e
				}))), this.hasCVV || ((e = this.getElementById("cvv-field-group")).parentNode.removeChild(e), p = p.filter((function(e) {
					return "cvv" !== e
				}))), n.fields.postalCode || ((t = this.getElementById("postal-code-field-group")).parentNode.removeChild(t), p = p.filter((function(e) {
					return "postalCode" !== e
				}))), this.model.isGuestCheckout || !0 !== this.merchantConfiguration.vault.allowVaultCardOverride || this.getElementById("save-card-field-group").classList.remove("braintree-hidden"), !1 === this.merchantConfiguration.vault.vaultCard && (this.saveCardInput.checked = !1), s.create(n).then(function(e) {
					this.hostedFieldsInstance = e, this.hostedFieldsInstance.on("blur", this._onBlurEvent.bind(this)), this.hostedFieldsInstance.on("cardTypeChange", this._onCardTypeChangeEvent.bind(this)), this.hostedFieldsInstance.on("focus", this._onFocusEvent.bind(this)), this.hostedFieldsInstance.on("notEmpty", this._onNotEmptyEvent.bind(this)), this.hostedFieldsInstance.on("validityChange", this._onValidityChangeEvent.bind(this)), p.forEach(function(e) {
						this.hostedFieldsInstance.setAttribute({
							field: e,
							attribute: "aria-required",
							value: !0
						})
					}.bind(this)), c.forEach(function(e) {
						this.hostedFieldsInstance.on(e, function(t) {
							this.model._emit("card:" + e, t)
						}.bind(this))
					}.bind(this)), this.model.asyncDependencyReady(u.ID)
				}.bind(this)).catch(function(e) {
					this.model.asyncDependencyFailed({
						view: this.ID,
						error: e
					})
				}.bind(this))
			}, u.prototype._sendRequestableEvent = function() {
				this._isTokenizing || this.model.setPaymentMethodRequestable({
					isRequestable: this._validateForm(),
					type: o.paymentMethodTypes.card
				})
			}, u.prototype._renderCardIcons = function() {
				var e = this.merchantConfiguration.overrides,
					t = this.getElementById("card-view-icons"),
					n = e && e.fields && e.fields.number && e.fields.number.supportedCardBrands;
				t.innerHTML = '<div data-braintree-id="visa-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-visa"></use>\n    </svg>\n</div>\n<div data-braintree-id="master-card-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-master-card"></use>\n    </svg>\n</div>\n<div data-braintree-id="unionpay-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-unionpay"></use>\n    </svg>\n</div>\n<div data-braintree-id="american-express-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-american-express"></use>\n    </svg>\n</div>\n<div data-braintree-id="jcb-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-jcb"></use>\n    </svg>\n</div>\n\x3c!--Elo, Hiper, and Hipercard currently use the generic icon.\nThe  braintree-hidden class should be removed here once we get icons for these cards--\x3e\n<div data-braintree-id="elo-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-elo"></use>\n    </svg>\n</div>\n<div data-braintree-id="hiper-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hiper"></use>\n    </svg>\n</div>\n<div data-braintree-id="hipercard-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hipercard"></use>\n    </svg>\n</div>\n\x3c!-- Remove braintree-hidden class when supportedCardType accurately indicates Diners Club support --\x3e\n<div data-braintree-id="diners-club-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-diners-club"></use>\n    </svg>\n</div>\n<div data-braintree-id="discover-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-discover"></use>\n    </svg>\n</div>\n<div data-braintree-id="maestro-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-maestro"></use>\n    </svg>\n</div>\n', n && Object.keys(n).forEach((function(e) {
					var t, i, r;
					!1 === n[e] && (t = 'div[data-braintree-id="' + o.cardTypeIcons[e] + '-card-icon"]', i = document.querySelector(t), (r = i) && r.classList.add("braintree-hidden"))
				}))
			}, u.prototype._generateHostedFieldsOptions = function() {
				var e, t = this.client.getConfiguration().gatewayConfiguration.challenges,
					n = -1 !== t.indexOf("cvv"),
					r = -1 !== t.indexOf("postal_code"),
					o = this.merchantConfiguration.overrides,
					a = {
						client: this.client,
						fields: {
							cardholderName: {
								container: this._getFieldContainer("cardholder-name"),
								placeholder: this.strings.cardholderNamePlaceholder
							},
							number: {
								container: this._getFieldContainer("number"),
								placeholder: (e = y(4), [e, e, e, e].join(" "))
							},
							expirationDate: {
								container: this._getFieldContainer("expiration"),
								placeholder: this.strings.expirationDatePlaceholder
							},
							cvv: {
								container: this._getFieldContainer("cvv"),
								placeholder: y(3)
							},
							postalCode: {
								container: this._getFieldContainer("postal-code")
							}
						},
						styles: {
							input: {
								"font-size": "16px",
								"font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
								color: "#000"
							},
							":focus": {
								color: "black"
							},
							"::-webkit-input-placeholder": {
								color: "#6a6a6a"
							},
							":-moz-placeholder": {
								color: "#6a6a6a"
							},
							"::-moz-placeholder": {
								color: "#6a6a6a"
							},
							":-ms-input-placeholder ": {
								color: "#6a6a6a"
							},
							"input::-ms-clear": {
								color: "transparent"
							}
						}
					};
				return this.hasCardholderName || delete a.fields.cardholderName, n || delete a.fields.cvv, r || delete a.fields.postalCode, o ? (o.fields && (o.fields.cvv && void 0 !== o.fields.cvv.placeholder && (this._hasCustomCVVPlaceholder = !0), Object.keys(o.fields).forEach((function(e) {
					"cvv" !== e && "postalCode" !== e || null !== o.fields[e] ? a.fields[e] && i(a.fields[e], o.fields[e], {
						selector: a.fields[e].selector
					}) : delete a.fields[e]
				}))), o.styles && Object.keys(o.styles).forEach((function(e) {
					var t;
					null !== o.styles[e] ? "string" != typeof o.styles[e] ? (t = o.styles[e], Object.keys(t).forEach((function(e) {
						var n = h(e);
						t[n] = t[e]
					})), a.styles[e] = a.styles[e] || {}, i(a.styles[e], o.styles[e])) : a.styles[e] = o.styles[e] : delete a.styles[e]
				})), a) : a
			}, u.prototype._validateForm = function(e) {
				var t, n, i, r = !0,
					a = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
				return !!this.hostedFieldsInstance && (i = this.hostedFieldsInstance.getState(), Object.keys(i.fields).forEach(function(t) {
					var n = i.fields[t];
					(e || r) && (n.isEmpty ? this.cardholderNameRequired || "cardholderName" !== t ? (r = !1, e && this.showFieldError(t, this.strings["fieldEmptyFor" + m(t)])) : r = !0 : n.isValid || (r = !1, e && this.showFieldError(t, this.strings["fieldInvalidFor" + m(t)])))
				}.bind(this)), i.fields.number.isValid && ((n = (t = i.cards[0]) && o.configurationCardTypes[t.type]) && -1 !== a.indexOf(n) || (r = !1, e && this.showFieldError("number", this.strings.unsupportedCardTypeError))), r)
			}, u.prototype.getPaymentMethod = function() {
				if (this._validateForm()) return {
					type: o.paymentMethodTypes.card
				}
			}, u.prototype.tokenize = function() {
				var e, t = this,
					n = t.hostedFieldsInstance.getState(),
					i = {
						vault: this._shouldVault()
					};
				return this.model.clearError(), this._validateForm(!0) ? (!this.cardholderNameRequired && n.fields.cardholderName && n.fields.cardholderName.isEmpty && (i.fieldsToTokenize = Object.keys(n.fields).filter((function(e) {
					return "cardholderName" !== e
				}))), t._isTokenizing = !0, t.hostedFieldsInstance.tokenize(i).then((function(i) {
					return !1 === t.merchantConfiguration.clearFieldsAfterTokenization || Object.keys(n.fields).forEach((function(e) {
						t.hostedFieldsInstance.clear(e)
					})), t._shouldVault() && (i.vaulted = !0), new Promise((function(n) {
						e = function() {
							setTimeout((function() {
								t.model.addPaymentMethod(i), n(i), t.element.classList.remove("braintree-sheet--tokenized")
							}), 0)
						}, d.onTransitionEnd(t.element, "max-height", e), setTimeout((function() {
							t.allowUserAction(), t._isTokenizing = !1
						}), o.CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT), t.element.classList.add("braintree-sheet--tokenized")
					}))
				})).catch((function(e) {
					return t._isTokenizing = !1, t.model.reportError(e), t.allowUserAction(), Promise.reject(new a({
						message: o.errors.NO_PAYMENT_METHOD_ERROR,
						braintreeWebError: e
					}))
				}))) : (t.model.reportError("hostedFieldsFieldsInvalidError"), t.allowUserAction(), Promise.reject(new a(o.errors.NO_PAYMENT_METHOD_ERROR)))
			}, u.prototype.showFieldError = function(e, t) {
				var n = this.getElementById(h(e) + "-field-group"),
					i = n.querySelector("input");
				this.fieldErrors.hasOwnProperty(e) || (this.fieldErrors[e] = this.getElementById(h(e) + "-field-error")), n.classList.add("braintree-form__field-group--has-error"), this.fieldErrors[e].innerHTML = t, i ? i.setAttribute("aria-invalid", !0) : (this.hostedFieldsInstance.setAttribute({
					field: e,
					attribute: "aria-invalid",
					value: !0
				}), this.hostedFieldsInstance.setMessage({
					field: e,
					message: t
				}))
			}, u.prototype.hideFieldError = function(e) {
				var t = this.getElementById(h(e) + "-field-group"),
					n = t.querySelector("input");
				this.fieldErrors.hasOwnProperty(e) || (this.fieldErrors[e] = this.getElementById(h(e) + "-field-error")), t.classList.remove("braintree-form__field-group--has-error"), n ? n.removeAttribute("aria-invalid") : (this.hostedFieldsInstance.removeAttribute({
					field: e,
					attribute: "aria-invalid"
				}), this.hostedFieldsInstance.setMessage({
					field: e,
					message: ""
				}))
			}, u.prototype.teardown = function() {
				return this.hostedFieldsInstance.teardown()
			}, u.prototype._shouldVault = function() {
				return !this.model.isGuestCheckout && this.saveCardInput.checked
			}, u.prototype._getFieldContainer = function(e) {
				return "expiration" === e && (e = "expiration-date"), this.getElementById(e + "-field-group").querySelector(".braintree-form__hosted-field")
			}, u.prototype._onBlurEvent = function(e) {
				var t = e.fields[e.emittedBy];
				this.getElementById(h(e.emittedBy) + "-field-group").classList.remove("braintree-form__field-group--is-focused"), t.isPotentiallyValid && this.hideFieldError(e.emittedBy), this._shouldApplyFieldEmptyError(e.emittedBy, t) ? this.showFieldError(e.emittedBy, this.strings["fieldEmptyFor" + m(e.emittedBy)]) : t.isEmpty || t.isValid ? "number" !== e.emittedBy || this._isCardTypeSupported(e.cards[0]) || this.showFieldError("number", this.strings.unsupportedCardTypeError) : this.showFieldError(e.emittedBy, this.strings["fieldInvalidFor" + m(e.emittedBy)]), this.model._emit("card:blur", e), setTimeout(function() {
					this._shouldApplyFieldEmptyError(e.emittedBy, t) && this.showFieldError(e.emittedBy, this.strings["fieldEmptyFor" + m(e.emittedBy)])
				}.bind(this), 150)
			}, u.prototype._onCardTypeChangeEvent = function(e) {
				var t, n = "#iconCardFront",
					i = "#iconCVVBack",
					r = this.strings.cvvThreeDigitLabelSubheading,
					o = y(3),
					a = this.getElementById("number-field-group");
				1 === e.cards.length ? (n = "#icon-" + (t = e.cards[0].type), "american-express" === t && (i = "#iconCVVFront", r = this.strings.cvvFourDigitLabelSubheading, o = y(4)), a.classList.add("braintree-form__field-group--card-type-known")) : a.classList.remove("braintree-form__field-group--card-type-known"), "number" === e.emittedBy && this._isCardTypeSupported(e.cards[0]) && this.hideFieldError(e.emittedBy), this.cardNumberIconSvg.setAttribute("xlink:href", n), this.hasCVV && (this.cvvIconSvg.setAttribute("xlink:href", i), this.cvvLabelDescriptor.innerHTML = r, this._hasCustomCVVPlaceholder || this.hostedFieldsInstance.setAttribute({
					field: "cvv",
					attribute: "placeholder",
					value: o
				})), this.model._emit("card:cardTypeChange", e)
			}, u.prototype._onFocusEvent = function(e) {
				this.getElementById(h(e.emittedBy) + "-field-group").classList.add("braintree-form__field-group--is-focused"), this.model._emit("card:focus", e)
			}, u.prototype._onNotEmptyEvent = function(e) {
				this.hideFieldError(e.emittedBy), this.model._emit("card:notEmpty", e)
			}, u.prototype._onValidityChangeEvent = function(e) {
				var t, n = e.fields[e.emittedBy];
				t = "number" === e.emittedBy && e.cards[0] ? n.isValid && this._isCardTypeSupported(e.cards[0]) : n.isValid, n.container.classList.toggle("braintree-form__field--valid", t), n.isPotentiallyValid && this.hideFieldError(e.emittedBy), this._sendRequestableEvent(), this.model._emit("card:validityChange", e)
			}, u.prototype.requestPaymentMethod = function() {
				return this.preventUserAction(), this.tokenize()
			}, u.prototype.onSelection = function() {
				this.hostedFieldsInstance && (setTimeout(function() {
					this.hasCardholderName ? this.hostedFieldsInstance.focus("cardholderName") : this.hostedFieldsInstance.focus("number")
				}.bind(this), 50), this._sendRequestableEvent())
			}, u.prototype._hideUnsupportedCardIcons = function() {
				var e = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
				Object.keys(o.configurationCardTypes).forEach(function(t) {
					var n = o.configurationCardTypes[t]; - 1 === e.indexOf(n) && this.getElementById(t + "-card-icon").classList.add("braintree-hidden")
				}.bind(this))
			}, u.prototype._isCardTypeSupported = function(e) {
				var t = e && e.type,
					n = o.configurationCardTypes[t];
				return -1 !== this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.indexOf(n)
			}, u.isEnabled = function(e) {
				var t = e.client.getConfiguration().gatewayConfiguration,
					n = !1 === e.merchantConfiguration.card;
				return Promise.resolve(!n && t.creditCards.supportedCardTypes.length > 0)
			}, u.prototype._shouldApplyFieldEmptyError = function(e, t) {
				return !!t.isEmpty && (!("cardholderName" === e && !this.cardholderNameRequired) && (n = document.activeElement && document.activeElement.id, document.activeElement instanceof HTMLIFrameElement && -1 !== n.indexOf("braintree-hosted-field")));
				var n
			}, t.exports = u
		}, {
			"../../constants": 202,
			"../../lib/assign": 208,
			"../../lib/dropin-error": 212,
			"../../lib/is-utf-8": 216,
			"../../lib/transition-helper": 222,
			"../base-view": 259,
			"braintree-web/hosted-fields": 77
		}],
		268: [function(e, t, n) {
			(function(n) {
				(function() {
					"use strict";
					var i = e("../../lib/assign").assign,
						r = e("../base-view"),
						o = e("braintree-web/google-payment"),
						a = e("../../lib/dropin-error"),
						s = e("../../constants"),
						l = e("@braintree/asset-loader"),
						d = e("../../lib/analytics");

					function c() {
						r.apply(this, arguments)
					}

					function p(e) {
						return new n.google.payments.api.PaymentsClient({
							environment: "production" === e.getConfiguration().gatewayConfiguration.environment ? "PRODUCTION" : "TEST"
						})
					}
					c.prototype = Object.create(r.prototype), c.prototype.constructor = c, c.ID = c.prototype.ID = s.paymentOptionIDs.googlePay, c.prototype.initialize = function() {
						var e, t, n, r = this;
						return r.googlePayConfiguration = i({}, r.model.merchantConfiguration.googlePay), t = r.googlePayConfiguration.googlePayVersion, n = r.googlePayConfiguration.merchantId, e = i({
							buttonType: "short"
						}, r.googlePayConfiguration.button, {
							onClick: function(e) {
								e.preventDefault(), r.preventUserAction(), r.tokenize().then((function() {
									r.allowUserAction()
								}))
							}
						}), delete r.googlePayConfiguration.googlePayVersion, delete r.googlePayConfiguration.merchantId, delete r.googlePayConfiguration.button, o.create({
							client: r.client,
							googlePayVersion: t,
							googleMerchantId: n
						}).then((function(e) {
							r.googlePayInstance = e, r.paymentsClient = p(r.client)
						})).then((function() {
							r.getElementById("google-pay-button").appendChild(r.paymentsClient.createButton(e)), r.model.asyncDependencyReady(c.ID)
						})).catch((function(e) {
							r.model.asyncDependencyFailed({
								view: r.ID,
								error: new a(e)
							})
						}))
					}, c.prototype.tokenize = function() {
						var e, t = this,
							n = t.googlePayInstance.createPaymentDataRequest(t.googlePayConfiguration);
						return t.paymentsClient.loadPaymentData(n).then((function(n) {
							return e = n, t.googlePayInstance.parseResponse(n)
						})).then((function(n) {
							n.rawPaymentData = e, t.model.addPaymentMethod(n)
						})).catch((function(e) {
							var n = e;
							if ("DEVELOPER_ERROR" === e.statusCode) console.error(e), n = "developerError";
							else {
								if ("CANCELED" === e.statusCode) return void d.sendEvent(t.client, "googlepay.loadPaymentData.canceled");
								e.statusCode && d.sendEvent(t.client, "googlepay.loadPaymentData.failed")
							}
							t.model.reportError(n)
						}))
					}, c.prototype.updateConfiguration = function(e, t) {
						this.googlePayConfiguration[e] = t
					}, c.isEnabled = function(e) {
						return e.client.getConfiguration().gatewayConfiguration.androidPay && Boolean(e.merchantConfiguration.googlePay) ? Promise.resolve().then((function() {
							return n.google && n.google.payments && n.google.payments.api && n.google.payments.api.PaymentsClient ? Promise.resolve() : l.loadScript({
								id: s.GOOGLE_PAYMENT_SCRIPT_ID,
								src: s.GOOGLE_PAYMENT_SOURCE
							})
						})).then((function() {
							return p(e.client).isReadyToPay({
								allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"]
							})
						})).then((function(e) {
							return Boolean(e.result)
						})) : Promise.resolve(!1)
					}, t.exports = c
				}).call(this)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"../../constants": 202,
			"../../lib/analytics": 207,
			"../../lib/assign": 208,
			"../../lib/dropin-error": 212,
			"../base-view": 259,
			"@braintree/asset-loader": 1,
			"braintree-web/google-payment": 70
		}],
		269: [function(e, t, n) {
			"use strict";
			var i = e("../../constants").paymentOptionIDs,
				r = {};
			r[i.applePay] = e("./apple-pay-view"), r[i.card] = e("./card-view"), r[i.googlePay] = e("./google-pay-view"), r[i.paypal] = e("./paypal-view"), r[i.paypalCredit] = e("./paypal-credit-view"), r[i.venmo] = e("./venmo-view"), t.exports = r
		}, {
			"../../constants": 202,
			"./apple-pay-view": 265,
			"./card-view": 267,
			"./google-pay-view": 268,
			"./paypal-credit-view": 270,
			"./paypal-view": 271,
			"./venmo-view": 272
		}],
		270: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/assign").assign,
				r = e("../../constants").paymentOptionIDs,
				o = e("./base-paypal-view");

			function a() {
				o.apply(this, arguments), this._isPayPalCredit = !0
			}
			a.prototype = Object.create(o.prototype), a.prototype.constructor = a, a.ID = a.prototype.ID = r.paypalCredit, a.isEnabled = function(e) {
				return e.merchantConfiguration.paypalCredit ? o.isEnabled(i({
					viewID: a.ID
				}, e)) : Promise.resolve(!1)
			}, t.exports = a
		}, {
			"../../constants": 202,
			"../../lib/assign": 208,
			"./base-paypal-view": 266
		}],
		271: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/assign").assign,
				r = e("../../constants").paymentOptionIDs,
				o = e("./base-paypal-view");

			function a() {
				o.apply(this, arguments)
			}
			a.prototype = Object.create(o.prototype), a.prototype.constructor = a, a.ID = a.prototype.ID = r.paypal, a.isEnabled = function(e) {
				return e.merchantConfiguration.paypal ? o.isEnabled(i({
					viewID: a.ID
				}, e)) : Promise.resolve(!1)
			}, t.exports = a
		}, {
			"../../constants": 202,
			"../../lib/assign": 208,
			"./base-paypal-view": 266
		}],
		272: [function(e, t, n) {
			"use strict";
			var i = e("../../lib/assign").assign,
				r = e("../base-view"),
				o = e("braintree-web/venmo"),
				a = e("../../lib/dropin-error"),
				s = e("../../constants").paymentOptionIDs;

			function l() {
				r.apply(this, arguments)
			}
			l.prototype = Object.create(r.prototype), l.prototype.constructor = l, l.ID = l.prototype.ID = s.venmo, l.prototype.initialize = function() {
				var e = this,
					t = i({}, e.model.merchantConfiguration.venmo, {
						client: this.client
					});
				return o.create(t).then((function(t) {
					return e.venmoInstance = t, e.venmoInstance.hasTokenizationResult() ? e.venmoInstance.tokenize().then((function(t) {
						e.model.reportAppSwitchPayload(t)
					})).catch((function(t) {
						e._isIgnorableError(t) || e.model.reportAppSwitchError(s.venmo, t)
					})) : Promise.resolve()
				})).then((function() {
					e.getElementById("venmo-button").addEventListener("click", (function(t) {
						return t.preventDefault(), e.preventUserAction(), e.venmoInstance.tokenize().then((function(t) {
							e.model.addPaymentMethod(t)
						})).catch((function(t) {
							e._isIgnorableError(t) || e.model.reportError(t)
						})).then((function() {
							e.allowUserAction()
						}))
					})), e.model.asyncDependencyReady(l.ID)
				})).catch((function(t) {
					e.model.asyncDependencyFailed({
						view: e.ID,
						error: new a(t)
					})
				}))
			}, l.prototype.requestPaymentMethod = function() {
				return this.model.reportError("venmoButtonMustBeUsed"), r.prototype.requestPaymentMethod.call(this)
			}, l.prototype._isIgnorableError = function(e) {
				return "VENMO_APP_CANCELED" === e.code || "VENMO_DESKTOP_CANCELED" === e.code
			}, l.isEnabled = function(e) {
				return e.client.getConfiguration().gatewayConfiguration.payWithVenmo && Boolean(e.merchantConfiguration.venmo) ? Promise.resolve(o.isBrowserSupported(e.merchantConfiguration.venmo)) : Promise.resolve(!1)
			}, t.exports = l
		}, {
			"../../constants": 202,
			"../../lib/assign": 208,
			"../../lib/dropin-error": 212,
			"../base-view": 259,
			"braintree-web/venmo": 149
		}]
	}, {}, [205])(205)
}));