(() => {
	"use strict";
	var e = {
			77321: (e, t, n) => {
				n.r(t)
			}
		},
		t = {};

	function n(o) {
		var s = t[o];
		if (void 0 !== s) return s.exports;
		var a = t[o] = {
			exports: {}
		};
		return e[o](a, a.exports, n), a.exports
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
	var s = function(e, t, n, o) {
		return new(n || (n = Promise))((function(s, a) {
			function i(e) {
				try {
					r(o.next(e))
				} catch (t) {
					a(t)
				}
			}

			function l(e) {
				try {
					r(o.throw(e))
				} catch (t) {
					a(t)
				}
			}

			function r(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(i, l)
			}
			r((o = o.apply(e, t || [])).next())
		}))
	};
	class a {
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
			return s(this, void 0, void 0, (function*() {
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
		t(e, t, n, o) {
			return this.translate(e, t, n, o)
		}
		translate(e, t, n, o) {
			let s;
			return s = this.localeMessages.hasOwnProperty(e) && this.localeMessages[e] ? this.localeMessages[e] : this.defaultMessages.hasOwnProperty(e) && this.defaultMessages[e] ? this.defaultMessages[e] : "", "" !== s && (null != t && (s = s.split("__$1__").join(t.toString())), null != n && (s = s.split("__$2__").join(n.toString())), null != o && (s = s.split("__$3__").join(o.toString()))), s
		}
		loadMessages(e, t) {
			return s(this, void 0, void 0, (function*() {
				const n = e.replace("-", "_"),
					o = yield this.getLocalesJson(n);
				for (const e in o)
					if (o.hasOwnProperty(e) && (t[e] = o[e].message, o[e].placeholders))
						for (const n in o[e].placeholders) {
							if (!o[e].placeholders.hasOwnProperty(n) || !o[e].placeholders[n].content) continue;
							const s = "\\$" + n.toUpperCase() + "\\$";
							let a = o[e].placeholders[n].content;
							"$1" !== a && "$2" !== a && "$3" !== a || (a = "__$" + a + "__"), t[e] = t[e].replace(new RegExp(s, "g"), a)
						}
			}))
		}
	}
	const i = ["en", "af", "ar", "az", "be", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en-GB", "en-IN", "eo", "es", "et", "eu", "fa", "fi", "fil", "fr", "gl", "he", "hi", "hr", "hu", "id", "it", "ja", "ka", "km", "kn", "ko", "lv", "ml", "mr", "my", "nb", "ne", "nl", "nn", "or", "pl", "pt-PT", "pt-BR", "ro", "ru", "si", "sk", "sl", "sr", "sv", "te", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
	var l = function(e, t, n, o) {
		return new(n || (n = Promise))((function(s, a) {
			function i(e) {
				try {
					r(o.next(e))
				} catch (t) {
					a(t)
				}
			}

			function l(e) {
				try {
					r(o.throw(e))
				} catch (t) {
					a(t)
				}
			}

			function r(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(i, l)
			}
			r((o = o.apply(e, t || [])).next())
		}))
	};
	class r extends a {
		constructor(e, t) {
			super(e || "en-US", t, (e => l(this, void 0, void 0, (function*() {
				const t = this.localesDirectory + "/" + e + "/messages.json?cache=8ikt5mn",
					n = yield fetch(t);
				return yield n.json()
			})))), this.supportedTranslationLocales = i
		}
		get translationLocale() {
			return this._translationLocale
		}
		set translationLocale(e) {
			this._translationLocale = e
		}
	}
	var c = function(e, t, n, o) {
		return new(n || (n = Promise))((function(s, a) {
			function i(e) {
				try {
					r(o.next(e))
				} catch (t) {
					a(t)
				}
			}

			function l(e) {
				try {
					r(o.throw(e))
				} catch (t) {
					a(t)
				}
			}

			function r(e) {
				var t;
				e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(i, l)
			}
			r((o = o.apply(e, t || [])).next())
		}))
	};
	n(77321);
	let d = null;

	function u(e) {
		const t = document.getElementById("content");
		t.className = "text-center", t.innerHTML = "";
		const n = document.createElement("h1"),
			o = document.createElement("p");
		if (n.textContent = d.t("youSuccessfullyLoggedIn"), o.textContent = "web" == e ? o.textContent = d.t("thisWindowWillCloseIn5Seconds") : d.t("youMayCloseThisWindow"), n.className = "font-weight-semibold", o.className = "mb-4", t.appendChild(n), t.appendChild(o), "web" == e) {
			const e = document.createElement("button");
			e.textContent = d.t("close"), e.className = "bg-primary text-white border-0 rounded py-2 px-3", e.addEventListener("click", (() => {
				window.close()
			})), t.appendChild(e);
			let n = Number(o.textContent.match(/\d+/)[0]);
			const s = setInterval((() => {
				n > 1 ? (o.textContent = o.textContent.replace(String(n), String(n - 1)), n--) : (clearInterval(s), window.close())
			}), 1e3)
		}
	}
	window.addEventListener("load", (() => c(void 0, void 0, void 0, (function*() {
		const e = o("duoFramelessUrl");
		if (e) return void
		function(e) {
			const t = new URL(e);
			if ("https:" !== t.protocol || !t.hostname.endsWith(".duosecurity.com") && !t.hostname.endsWith(".duofederal.com")) throw new Error("Invalid redirect URL");
			window.location.href = decodeURIComponent(e)
		}(e);
		const t = o("client"),
			n = o("code"),
			s = o("state");
		if (d = new r(navigator.language, "locales"), yield d.init(), "web" === t) {
			const e = new BroadcastChannel("duoResult");
			e.postMessage({
				code: n,
				state: s
			}), e.close(), u(t)
		} else "browser" === t ? (window.postMessage({
			command: "duoResult",
			code: n,
			state: s
		}, "*"), u(t)) : "mobile" !== t && "desktop" !== t || ("desktop" === t && u(t), document.location.replace("bitwarden://duo-callback?code=" + encodeURIComponent(n) + "&state=" + encodeURIComponent(s)))
	}))))
})();
//# sourceMappingURL=duo-redirect.a8aee212b2ba62d2b905.js.map