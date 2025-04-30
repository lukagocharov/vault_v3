(() => {
	"use strict";
	var e = {
			39684: (e, t, n) => {
				n.r(t)
			}
		},
		t = {};

	function n(a) {
		var s = t[a];
		if (void 0 !== s) return s.exports;
		var o = t[a] = {
			exports: {}
		};
		return e[a](o, o.exports, n), o.exports
	}

	function a(e) {
		const t = window.location.href;
		e = e.replace(/[\[\]]/g, "\\$&");
		const n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
		return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
	}

	function s(e, t = !1) {
		return t && (e = e.replace(/ /g, "+")), decodeURIComponent(Array.prototype.map.call(atob(e), (e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))).join(""))
	}

	function o(e) {
		if (Array.isArray(e) && (e = Uint8Array.from(e)), e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array) {
			let t = "";
			const n = e.byteLength;
			for (let a = 0; a < n; a++) t += String.fromCharCode(e[a]);
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
	};
	var r = function(e, t, n, a) {
		return new(n || (n = Promise))((function(s, o) {
			function r(e) {
				try {
					l(a.next(e))
				} catch (t) {
					o(t)
				}
			}

			function i(e) {
				try {
					l(a.throw(e))
				} catch (t) {
					o(t)
				}
			}

			function l(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(r, i)
			}
			l((a = a.apply(e, t || [])).next())
		}))
	};
	class i {
		constructor(e, t, n) {
			this.systemLanguage = e, this.localesDirectory = t, this.getLocalesJson = n, this.supportedTranslationLocales = ["en"], this.defaultLocale = "en", this.localeNames = new Map([
				["af", "Afrikaans"],
				["ar", "العربية الفصحى"],
				["az", "Azərbaycanca"],
				["be", "Беларуская"],
				["bg", "български"],
				["bn", "বাংলা"],
				["bs", "bosanski jezik"],
				["ca", "català"],
				["cs", "čeština"],
				["cy", "Cymraeg, y Gymraeg"],
				["da", "dansk"],
				["de", "Deutsch"],
				["el", "Ελληνικά"],
				["en", "English"],
				["en-GB", "English (British)"],
				["en-IN", "English (India)"],
				["eo", "Esperanto"],
				["es", "español"],
				["et", "eesti"],
				["eu", "euskara"],
				["fa", "فارسی"],
				["fi", "suomi"],
				["fil", "Wikang Filipino"],
				["fr", "français"],
				["gl", "galego"],
				["he", "עברית"],
				["hi", "हिन्दी"],
				["hr", "hrvatski"],
				["hu", "magyar"],
				["id", "Bahasa Indonesia"],
				["it", "italiano"],
				["ja", "日本語"],
				["ka", "ქართული"],
				["km", "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ"],
				["kn", "ಕನ್ನಡ"],
				["ko", "한국어"],
				["lt", "lietuvių kalba"],
				["lv", "Latvietis"],
				["me", "црногорски"],
				["ml", "മലയാളം"],
				["mr", "मराठी"],
				["my", "ဗမာစကား"],
				["nb", "norsk (bokmål)"],
				["ne", "नेपाली"],
				["nl", "Nederlands"],
				["nn", "Norsk Nynorsk"],
				["or", "ଓଡ଼ିଆ"],
				["pl", "polski"],
				["pt-BR", "português do Brasil"],
				["pt-PT", "português"],
				["ro", "română"],
				["ru", "русский"],
				["si", "සිංහල"],
				["sk", "slovenčina"],
				["sl", "Slovenski jezik, Slovenščina"],
				["sr", "Српски"],
				["sv", "svenska"],
				["te", "తెలుగు"],
				["th", "ไทย"],
				["tr", "Türkçe"],
				["uk", "українська"],
				["vi", "Tiếng Việt"],
				["zh-CN", "中文（中国大陆）"],
				["zh-TW", "中文（台灣）"]
			]), this.defaultMessages = {}, this.localeMessages = {}, this.systemLanguage = e.replace("_", "-")
		}
		init(e) {
			return r(this, void 0, void 0, (function*() {
				if (this.inited) throw new Error("i18n already initialized.");
				if (null == this.supportedTranslationLocales || 0 === this.supportedTranslationLocales.length) throw new Error("supportedTranslationLocales not set.");
				this.inited = !0, this.translationLocale = null != e ? e : this.systemLanguage;
				try {
					this.collator = new Intl.Collator(this.translationLocale, {
						numeric: !0,
						sensitivity: "base"
					})
				} catch (t) {
					this.collator = null
				} - 1 === this.supportedTranslationLocales.indexOf(this.translationLocale) && (this.translationLocale = this.translationLocale.slice(0, 2), -1 === this.supportedTranslationLocales.indexOf(this.translationLocale) && (this.translationLocale = this.defaultLocale)), null != this.localesDirectory && (yield this.loadMessages(this.translationLocale, this.localeMessages), this.translationLocale !== this.defaultLocale && (yield this.loadMessages(this.defaultLocale, this.defaultMessages)))
			}))
		}
		t(e, t, n, a) {
			return this.translate(e, t, n, a)
		}
		translate(e, t, n, a) {
			let s;
			return s = this.localeMessages.hasOwnProperty(e) && this.localeMessages[e] ? this.localeMessages[e] : this.defaultMessages.hasOwnProperty(e) && this.defaultMessages[e] ? this.defaultMessages[e] : "", "" !== s && (null != t && (s = s.split("__$1__").join(t.toString())), null != n && (s = s.split("__$2__").join(n.toString())), null != a && (s = s.split("__$3__").join(a.toString()))), s
		}
		loadMessages(e, t) {
			return r(this, void 0, void 0, (function*() {
				const n = e.replace("-", "_"),
					a = yield this.getLocalesJson(n);
				for (const e in a)
					if (a.hasOwnProperty(e) && (t[e] = a[e].message, a[e].placeholders))
						for (const n in a[e].placeholders) {
							if (!a[e].placeholders.hasOwnProperty(n) || !a[e].placeholders[n].content) continue;
							const s = "\\$" + n.toUpperCase() + "\\$";
							let o = a[e].placeholders[n].content;
							"$1" !== o && "$2" !== o && "$3" !== o || (o = "__$" + o + "__"), t[e] = t[e].replace(new RegExp(s, "g"), o)
						}
			}))
		}
	}
	const l = ["en", "af", "ar", "az", "be", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en-GB", "en-IN", "eo", "es", "et", "eu", "fa", "fi", "fil", "fr", "gl", "he", "hi", "hr", "hu", "id", "it", "ja", "ka", "km", "kn", "ko", "lv", "ml", "mr", "my", "nb", "ne", "nl", "nn", "or", "pl", "pt-PT", "pt-BR", "ro", "ru", "si", "sk", "sl", "sr", "sv", "te", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
	var c = function(e, t, n, a) {
		return new(n || (n = Promise))((function(s, o) {
			function r(e) {
				try {
					l(a.next(e))
				} catch (t) {
					o(t)
				}
			}

			function i(e) {
				try {
					l(a.throw(e))
				} catch (t) {
					o(t)
				}
			}

			function l(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(r, i)
			}
			l((a = a.apply(e, t || [])).next())
		}))
	};
	class u extends i {
		constructor(e, t) {
			super(e || "en-US", t, (e => c(this, void 0, void 0, (function*() {
				const t = this.localesDirectory + "/" + e + "/messages.json?cache=8ikt5mn",
					n = yield fetch(t);
				return yield n.json()
			})))), this.supportedTranslationLocales = l
		}
		get translationLocale() {
			return this._translationLocale
		}
		set translationLocale(e) {
			this._translationLocale = e
		}
	}
	var d = function(e, t, n, a) {
		return new(n || (n = Promise))((function(s, o) {
			function r(e) {
				try {
					l(a.next(e))
				} catch (t) {
					o(t)
				}
			}

			function i(e) {
				try {
					l(a.throw(e))
				} catch (t) {
					o(t)
				}
			}

			function l(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(r, i)
			}
			l((a = a.apply(e, t || [])).next())
		}))
	};
	n(39684);
	let h, f = !1,
		p = null,
		g = !1,
		y = null,
		m = null;

	function v() {
		var e;
		if (f) return;
		if (p = a("parent"), !p) return void b("No parent.");
		p = decodeURIComponent(p), y = null !== (e = a("locale")) && void 0 !== e ? e : "en";
		"1" === a("v") ? function() {
			const e = a("data");
			if (!e) return void b("No data.");
			h = s(e)
		}() : function() {
			let e = null;
			try {
				e = JSON.parse(s(a("data")))
			} catch (t) {
				return void b("Cannot parse data.")
			}
			h = e.data
		}(), f = !0
	}

	function w() {
		if (g) return;
		if (!("credentials" in navigator)) return void b(m.t("webAuthnNotSupported"));
		if (v(), !h) return void b("No data.");
		let e;
		try {
			e = function(e) {
				const t = JSON.parse(e),
					n = t.challenge.replace(/-/g, "+").replace(/_/g, "/");
				return t.challenge = Uint8Array.from(atob(n), (e => e.charCodeAt(0))), t.allowCredentials.forEach((e => {
					const t = e.id.replace(/\_/g, "/").replace(/\-/g, "+");
					e.id = Uint8Array.from(atob(t), (e => e.charCodeAt(0)))
				})), t
			}(h)
		} catch (t) {
			return void b("Cannot parse data.")
		}! function(e) {
			d(this, void 0, void 0, (function*() {
				try {
					const t = yield navigator.credentials.get({
						publicKey: e
					});
					if (g) return;
					const n = function(e) {
							const t = e.response,
								n = new Uint8Array(t.authenticatorData),
								a = new Uint8Array(t.clientDataJSON),
								s = new Uint8Array(e.rawId),
								r = new Uint8Array(t.signature),
								i = {
									id: e.id,
									rawId: o(s),
									type: e.type,
									extensions: e.getClientExtensionResults(),
									response: {
										authenticatorData: o(n),
										clientDataJson: o(a),
										signature: o(r)
									}
								};
							return JSON.stringify(i)
						}(t),
						a = document.getElementById("remember").checked;
					window.postMessage({
							command: "webAuthnResult",
							data: n,
							remember: a
						}, "*"), g = !0,
						function(e) {
							document.getElementById("webauthn-button").disabled = !0;
							const t = document.getElementById("msg");
							L(t), t.textContent = e, t.classList.add("alert"), t.classList.add("alert-success")
						}(m.t("webAuthnSuccess"))
				} catch (t) {
					b(t)
				}
			}))
		}(e)
	}

	function b(e) {
		const t = document.getElementById("msg");
		L(t), t.textContent = e, t.classList.add("alert"), t.classList.add("alert-danger")
	}

	function L(e) {
		e.classList.remove("alert"), e.classList.remove("alert-danger"), e.classList.remove("alert-success")
	}
	document.addEventListener("DOMContentLoaded", (() => d(void 0, void 0, void 0, (function*() {
		v();
		try {
			m = new u(y, "locales")
		} catch (n) {
			b("Failed to load the provided locale " + y), m = new u("en", "locales")
		}
		yield m.init(), document.getElementById("msg").innerText = m.t("webAuthnFallbackMsg"), document.getElementById("remember-label").innerText = m.t("rememberMe");
		const e = document.getElementById("webauthn-button");
		e.innerText = m.t("webAuthnAuthenticate"), e.onclick = w, document.getElementById("spinner").classList.add("d-none");
		const t = document.getElementById("content");
		t.classList.add("d-block"), t.classList.remove("d-none")
	}))))
})();
//# sourceMappingURL=webauthn-fallback.b15359912eff6fbde9ea.js.map