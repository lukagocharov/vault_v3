(() => {
	"use strict";
	var e = {
			46989: (e, t, n) => {
				n.r(t)
			},
			85896: (e, t, n) => {
				n.r(t)
			}
		},
		t = {};

	function n(o) {
		var c = t[o];
		if (void 0 !== c) return c.exports;
		var i = t[o] = {
			exports: {}
		};
		return e[o](i, i.exports, n), i.exports
	}

	function o(e) {
		const t = window.location.href;
		e = e.replace(/[\[\]]/g, "\\$&");
		const n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
		return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
	}
	n.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	};
	var c = function(e, t, n, o) {
		return new(n || (n = Promise))((function(c, i) {
			function r(e) {
				try {
					d(o.next(e))
				} catch (t) {
					i(t)
				}
			}

			function a(e) {
				try {
					d(o.throw(e))
				} catch (t) {
					i(t)
				}
			}

			function d(e) {
				var t;
				e.done ? c(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(r, a)
			}
			d((o = o.apply(e, t || [])).next())
		}))
	};
	window.location.pathname.includes("mobile") ? n(46989) : n(85896), document.addEventListener("DOMContentLoaded", (() => {
		! function() {
			c(this, void 0, void 0, (function*() {
				yield l(), window.addEventListener("message", (e => {
					e.origin && "" !== e.origin && e.origin === r && "start" === e.data && l()
				}), !1)
			}))
		}()
	})), window.captchaSuccess = function(e) {
		a ? document.location.replace("bitwarden://captcha-callback?token=" + encodeURIComponent(e)) : function(e) {
			if (d) return;
			parent.postMessage("success|" + e, i), d = !0
		}(e)
	}, window.captchaError = function() {
		u("An error occurred with the captcha. Try again.")
	};
	let i = null,
		r = null,
		a = null,
		d = !1;

	function l() {
		return c(this, void 0, void 0, (function*() {
			var e;
			d = !1;
			const t = o("data");
			if (!t) return void u("No data.");
			if (i = o("parent"), !i) return void u("No parent.");
			let n;
			i = decodeURIComponent(i), r = new URL(i).origin;
			try {
				n = JSON.parse(function(e, t = !1) {
					return t && (e = e.replace(/ /g, "+")), decodeURIComponent(Array.prototype.map.call(atob(e), (e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))).join(""))
				}(t, !0))
			} catch (m) {
				return void u("Cannot parse data.")
			}
			a = null != n.callbackUri || !0 === n.mobile;
			let l = "https://hcaptcha.com/1/api.js?render=explicit";
			n.locale && (l += `&hl=${null!==(e=encodeURIComponent(n.locale))&&void 0!==e?e:"en"}`);
			const h = document.getElementById("captchaRequired");
			n.captchaRequiredText && h && (h.textContent = n.captchaRequiredText);
			const f = document.createElement("script");
			f.src = l, f.async = !0, f.defer = !0, f.addEventListener("load", (() => {
				hcaptcha.render("captcha", {
						sitekey: encodeURIComponent(n.siteKey),
						callback: "captchaSuccess",
						"error-callback": "captchaError"
					}),
					function() {
						c(this, void 0, void 0, (function*() {
							const e = document.body.lastChild;
							for (;;) s({
								height: "hidden" === e.style.visibility ? document.documentElement.offsetHeight : document.documentElement.scrollHeight,
								width: document.documentElement.scrollWidth
							}), yield p(100)
						}))
					}()
			})), document.head.appendChild(f)
		}))
	}

	function u(e) {
		parent.postMessage("error|" + e, i)
	}

	function s(e) {
		parent.postMessage("info|" + JSON.stringify(e), i)
	}

	function p(e) {
		return c(this, void 0, void 0, (function*() {
			yield new Promise((t => setTimeout(t, e)))
		}))
	}
})();
//# sourceMappingURL=captcha.452be338cbccee353b37.js.map