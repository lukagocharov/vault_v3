(() => {
	"use strict";
	var e = {
			39684: (e, t, n) => {
				n.r(t)
			}
		},
		t = {};

	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = t[r] = {
			exports: {}
		};
		return e[r](a, a.exports, n), a.exports
	}

	function r(e) {
		const t = window.location.href;
		e = e.replace(/[\[\]]/g, "\\$&");
		const n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
		return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
	}

	function o(e, t = !1) {
		return t && (e = e.replace(/ /g, "+")), decodeURIComponent(Array.prototype.map.call(atob(e), (e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))).join(""))
	}

	function a(e) {
		if (Array.isArray(e) && (e = Uint8Array.from(e)), e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array) {
			let t = "";
			const n = e.byteLength;
			for (let r = 0; r < n; r++) t += String.fromCharCode(e[r]);
			e = window.btoa(t)
		}
		if ("string" != typeof e) throw new Error("could not coerce to string");
		return e = e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/g, "")
	}
	n.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n(39684);
	const i = "bitwarden://webauthn-callback";
	let c, d = !1,
		l = null,
		u = null,
		s = null,
		p = null,
		f = null,
		g = !1,
		y = !1,
		b = !1,
		m = null;

	function h() {
		if (d) return;
		if (p = r("parent"), !p) return void x("No parent.");
		p = decodeURIComponent(p), f = new URL(p).origin;
		"1" === r("v") ? function() {
			const e = r("data");
			if (!e) return void x("No data.");
			c = o(e), l = r("headerText"), u = r("btnText"), s = r("btnReturnText")
		}() : function() {
			let e = null;
			try {
				e = JSON.parse(o(r("data")))
			} catch (t) {
				return void x("Cannot parse data.")
			}
			g = null != e.callbackUri || !0 === e.mobile, c = e.data, l = e.headerText, u = e.btnText, s = e.btnReturnText
		}(), d = !0
	}

	function w() {
		if (b = !1, "credentials" in navigator)
			if (h(), c) {
				try {
					m = function(e) {
						const t = JSON.parse(e),
							n = t.challenge.replace(/-/g, "+").replace(/_/g, "/");
						return t.challenge = Uint8Array.from(atob(n), (e => e.charCodeAt(0))), t.allowCredentials.forEach((e => {
							const t = e.id.replace(/\_/g, "/").replace(/\-/g, "+");
							e.id = Uint8Array.from(atob(t), (e => e.charCodeAt(0)))
						})), t
					}(c)
				} catch (e) {
					return void x("Cannot parse webauthn data.")
				}
				y = !1, g || -1 !== navigator.userAgent.indexOf(" Safari/") && -1 === navigator.userAgent.indexOf("Chrome") || U()
			} else x("No data.");
		else x("WebAuthn is not supported in this browser.")
	}

	function U() {
		y || navigator.credentials.get({
			publicKey: m
		}).then(A).catch(x)
	}

	function x(e) {
		g ? (document.location.replace(i + "?error=" + encodeURIComponent(e)), v(i + "?error=" + encodeURIComponent(e))) : parent.postMessage("error|" + e, p)
	}

	function A(e) {
		if (b) return;
		const t = function(e) {
			const t = e.response,
				n = new Uint8Array(t.authenticatorData),
				r = new Uint8Array(t.clientDataJSON),
				o = new Uint8Array(e.rawId),
				i = new Uint8Array(t.signature),
				c = {
					id: e.id,
					rawId: a(o),
					type: e.type,
					extensions: e.getClientExtensionResults(),
					response: {
						authenticatorData: a(n),
						clientDataJson: a(r),
						signature: a(i)
					}
				};
			return JSON.stringify(c)
		}(e);
		g ? (document.location.replace(i + "?data=" + encodeURIComponent(t)), v(i + "?data=" + encodeURIComponent(t))) : (parent.postMessage("success|" + t, p), b = !0)
	}

	function v(e) {
		const t = document.getElementById("webauthn-button");
		t.innerText = decodeURI(s), t.onclick = () => {
			document.location.replace(e)
		}
	}
	document.addEventListener("DOMContentLoaded", (() => {
		var e;
		if (w(), window.addEventListener("message", (e => {
				e.origin && "" !== e.origin && e.origin === f && ("stop" === e.data ? y = !0 : "start" === e.data && y && w())
			}), !1), e = "ready", g || parent.postMessage("info|" + e, p), h(), l) {
			document.getElementById("webauthn-header").innerText = decodeURI(l)
		}
		if (u) {
			const e = document.getElementById("webauthn-button");
			e.innerText = decodeURI(u), e.onclick = U
		}
	}))
})();
//# sourceMappingURL=webauthn.04cf1b411806d417a4e0.js.map