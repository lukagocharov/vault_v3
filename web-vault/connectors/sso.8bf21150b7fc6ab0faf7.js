(() => {
	"use strict";
	var e = {
			17657: (e, o, n) => {
				n.r(o)
			}
		},
		o = {};

	function n(t) {
		var i = o[t];
		if (void 0 !== i) return i.exports;
		var s = o[t] = {
			exports: {}
		};
		return e[t](s, s.exports, n), s.exports
	}

	function t(e) {
		const o = window.location.href;
		e = e.replace(/[\[\]]/g, "\\$&");
		const n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(o);
		return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
	}

	function i(e, o, n) {
		window.postMessage({
			command: "authResult",
			code: e,
			state: o,
			lastpass: n
		}, "*");
		const t = ("; " + document.cookie).split("; ssoHandOffMessage=").pop().split(";").shift();
		document.cookie = "ssoHandOffMessage=;SameSite=strict;max-age=0";
		const i = document.getElementById("content");
		i.innerHTML = "";
		const s = document.createElement("p");
		s.innerText = t, i.appendChild(s)
	}
	n.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n(17657), window.addEventListener("load", (() => {
		const e = t("code"),
			o = t("state");
		if ("1" === t("lp")) i(e, o, !0);
		else if (null != o && o.includes(":clientId=browser")) i(e, o, !1);
		else {
			window.location.href = window.location.origin + "/#/sso?code=" + e + "&state=" + o;
			const n = function(e, o) {
				const n = new RegExp(o).exec(e);
				if (!n) return null;
				return n[0]
			}(o, "(?<=_returnUri=')(.*)(?=')");
			window.location.href = n ? window.location.origin + `/#${n}` : window.location.origin + "/#/sso?code=" + e + "&state=" + o
		}
	}))
})();
//# sourceMappingURL=sso.8bf21150b7fc6ab0faf7.js.map