(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[807], {
		17530: (t, e, n) => {
			"use strict";
			n.d(e, {
				Pi: () => Kn
			});
			var o = n(81525),
				i = n(52981),
				r = n(58625),
				s = n(55542),
				a = n(81573),
				c = n(47659),
				l = n(29029),
				u = n(56111),
				p = n(88016),
				d = n(7730),
				h = n(6579),
				f = n(38410),
				F = n(22466),
				m = n(36572),
				g = n(56898);

			function b(t, e) {
				if (1 & t && (u.j41(0, "tr", 9), u.EFF(1, "\n          "), u.j41(2, "td", 4), u.EFF(3), u.k0s(), u.EFF(4, "\n          "), u.j41(5, "td", 4), u.EFF(6), u.k0s(), u.EFF(7, "\n        "), u.k0s()), 2 & t) {
					const t = e.$implicit;
					u.R7$(3), u.JRh(t.type), u.R7$(3), u.JRh(t.message)
				}
			}

			function v(t, e) {
				if (1 & t && (u.EFF(0, "\n        "), u.DNE(1, b, 8, 2, "tr", 8), u.nI1(2, "async"), u.EFF(3, "\n      ")), 2 & t) {
					const t = e.$implicit;
					u.R7$(), u.Y8G("ngForOf", u.bMT(2, 1, t))
				}
			}
			class E {
				constructor(t, e) {
					this.dialogRef = t, this.data = e, this.dataSource = new s.s
				}
				ngOnInit() {
					const t = this.data.message.split("\n\n");
					if (1 == t.length) return void(this.dataSource.data = [{
						type: "",
						message: this.data.message
					}]);
					const e = [];
					t.forEach((t => {
						e.push({
							type: "",
							message: t
						})
					})), this.dataSource.data = e
				}
			}
			E.ɵfac = function(t) {
				return new(t || E)(u.rXU(o.ce), u.rXU(o.Qs))
			}, E.ɵcmp = u.VBU({
				type: E,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 40,
				vars: 16,
				consts: [
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[3, "dataSource"],
					["header", ""],
					["bitCell", ""],
					["body", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "bitDialogClose", "", "buttonType", "primary", "type", "button"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "bit-dialog"), u.EFF(1, "\n  "), u.j41(2, "span", 0), u.EFF(3), u.nI1(4, "i18n"), u.k0s(), u.EFF(5, "\n\n  "), u.j41(6, "span", 1), u.EFF(7, "\n    "), u.j41(8, "div"), u.EFF(9), u.nI1(10, "i18n"), u.k0s(), u.EFF(11, "\n    "), u.j41(12, "bit-table", 2), u.EFF(13, "\n      "), u.qex(14, 3), u.EFF(15, "\n        "), u.j41(16, "tr"), u.EFF(17, "\n          "), u.j41(18, "th", 4), u.EFF(19), u.nI1(20, "i18n"), u.k0s(), u.EFF(21, "\n          "), u.j41(22, "th", 4), u.EFF(23), u.nI1(24, "i18n"), u.k0s(), u.EFF(25, "\n        "), u.k0s(), u.EFF(26, "\n      "), u.bVm(), u.EFF(27, "\n      "), u.DNE(28, v, 4, 3, "ng-template", 5), u.EFF(29, "\n    "), u.k0s(), u.EFF(30, "\n  "), u.k0s(), u.EFF(31, "\n\n  "), u.j41(32, "div", 6), u.EFF(33, "\n    "), u.j41(34, "button", 7), u.EFF(35), u.nI1(36, "i18n"), u.k0s(), u.EFF(37, "\n  "), u.k0s(), u.EFF(38, "\n"), u.k0s(), u.EFF(39, "\n")), 2 & t && (u.R7$(3), u.SpI("\n    ", u.bMT(4, 6, "importError"), "\n  "), u.R7$(6), u.JRh(u.bMT(10, 8, "resolveTheErrorsBelowAndTryAgain")), u.R7$(3), u.Y8G("dataSource", e.dataSource), u.R7$(7), u.JRh(u.bMT(20, 10, "name")), u.R7$(4), u.JRh(u.bMT(24, 12, "description")), u.R7$(12), u.SpI("\n      ", u.bMT(36, 14, "ok"), "\n    "))
				},
				dependencies: [i.MD, i.Sq, i.Jj, r.p, p.$, a.P, d.I, h.m, c.b, f.Q, F.Y, m._, m.O, l.t, g.Q],
				encapsulation: 2
			});
			var y = n(51661);

			function k(t, e) {
				if (1 & t && (u.j41(0, "tr", 9), u.EFF(1, "\n          "), u.j41(2, "td", 4), u.EFF(3, "\n            "), u.nrm(4, "i", 10), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n          "), u.j41(8, "td", 4), u.EFF(9), u.k0s(), u.EFF(10, "\n        "), u.k0s()), 2 & t) {
					const t = e.$implicit;
					u.R7$(4), u.ZvI("bwi bwi-fw bwi-", t.icon, ""), u.R7$(), u.SpI("\n            ", u.bMT(6, 5, t.type), "\n          "), u.R7$(4), u.JRh(t.count)
				}
			}

			function I(t, e) {
				if (1 & t && (u.EFF(0, "\n        "), u.DNE(1, k, 11, 7, "tr", 8), u.nI1(2, "async"), u.EFF(3, "\n      ")), 2 & t) {
					const t = e.$implicit;
					u.R7$(), u.Y8G("ngForOf", u.bMT(2, 1, t))
				}
			}
			class w {
				constructor(t, e) {
					this.dialogRef = t, this.data = e, this.dataSource = new s.s
				}
				ngOnInit() {
					null != this.data && (this.dataSource.data = this.buildResultList())
				}
				buildResultList() {
					let t = 0,
						e = 0,
						n = 0,
						o = 0,
						i = 0;
					this.data.ciphers.map((r => {
						switch (r.type) {
							case y.gC.Login:
								t++;
								break;
							case y.gC.Card:
								e++;
								break;
							case y.gC.SecureNote:
								o++;
								break;
							case y.gC.Identity:
								n++;
								break;
							case y.gC.SshKey:
								i++
						}
					}));
					const r = [];
					return t > 0 && r.push({
						icon: "globe",
						type: "typeLogin",
						count: t
					}), e > 0 && r.push({
						icon: "credit-card",
						type: "typeCard",
						count: e
					}), n > 0 && r.push({
						icon: "id-card",
						type: "typeIdentity",
						count: n
					}), o > 0 && r.push({
						icon: "sticky-note",
						type: "typeSecureNote",
						count: o
					}), i > 0 && r.push({
						icon: "key",
						type: "typeSshKey",
						count: i
					}), this.data.folders.length > 0 && r.push({
						icon: "folder",
						type: "folders",
						count: this.data.folders.length
					}), this.data.collections.length > 0 && r.push({
						icon: "collection",
						type: "collections",
						count: this.data.collections.length
					}), r
				}
			}
			w.ɵfac = function(t) {
				return new(t || w)(u.rXU(o.ce), u.rXU(o.Qs))
			}, w.ɵcmp = u.VBU({
				type: w,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 40,
				vars: 17,
				consts: [
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[3, "dataSource"],
					["header", ""],
					["bitCell", ""],
					["body", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "bitDialogClose", "", "buttonType", "primary", "type", "button"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["aria-hidden", "true"]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "bit-dialog"), u.EFF(1, "\n  "), u.j41(2, "span", 0), u.EFF(3), u.nI1(4, "i18n"), u.k0s(), u.EFF(5, "\n\n  "), u.j41(6, "div", 1), u.EFF(7, "\n    "), u.j41(8, "span"), u.EFF(9), u.nI1(10, "i18n"), u.k0s(), u.EFF(11, "\n    "), u.j41(12, "bit-table", 2), u.EFF(13, "\n      "), u.qex(14, 3), u.EFF(15, "\n        "), u.j41(16, "tr"), u.EFF(17, "\n          "), u.j41(18, "th", 4), u.EFF(19), u.nI1(20, "i18n"), u.k0s(), u.EFF(21, "\n          "), u.j41(22, "th", 4), u.EFF(23), u.nI1(24, "i18n"), u.k0s(), u.EFF(25, "\n        "), u.k0s(), u.EFF(26, "\n      "), u.bVm(), u.EFF(27, "\n      "), u.DNE(28, I, 4, 3, "ng-template", 5), u.EFF(29, "\n    "), u.k0s(), u.EFF(30, "\n  "), u.k0s(), u.EFF(31, "\n\n  "), u.qex(32, 6), u.EFF(33, "\n    "), u.j41(34, "button", 7), u.EFF(35), u.nI1(36, "i18n"), u.k0s(), u.EFF(37, "\n  "), u.bVm(), u.EFF(38, "\n"), u.k0s(), u.EFF(39, "\n")), 2 & t && (u.R7$(3), u.SpI("\n    ", u.bMT(4, 6, "importSuccess"), "\n  "), u.R7$(6), u.JRh(u.i5U(10, 8, "importSuccessNumberOfItems", e.data.ciphers.length)), u.R7$(3), u.Y8G("dataSource", e.dataSource), u.R7$(7), u.JRh(u.bMT(20, 11, "type")), u.R7$(4), u.JRh(u.bMT(24, 13, "total")), u.R7$(12), u.SpI("\n      ", u.bMT(36, 15, "ok"), "\n    "))
				},
				dependencies: [i.MD, i.Sq, i.Jj, r.p, p.$, a.P, d.I, h.m, c.b, f.Q, F.Y, m._, m.O, l.t, g.Q],
				encapsulation: 2
			});
			var S = n(51757),
				x = n(26411),
				R = n(37579),
				T = n(22191),
				D = n(49519),
				A = n(57083),
				C = n(86226),
				G = n(97553),
				P = n(43759),
				$ = n(76356),
				O = n(69896),
				V = n(45154),
				j = n(36288);
			class U {
				constructor(t, e) {
					this.dialogRef = t, this.formBuilder = e, this.formGroup = this.formBuilder.group({
						filePassword: ["", S.k0.required]
					}), this.submit = () => {
						this.formGroup.markAsTouched(), this.formGroup.valid && this.dialogRef.close(this.formGroup.value.filePassword)
					}
				}
			}
			U.ɵfac = function(t) {
				return new(t || U)(u.rXU(o.ce), u.rXU(S.ok))
			}, U.ɵcmp = u.VBU({
				type: U,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 42,
				vars: 17,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[1, "tw-mt-6"],
					["bitInput", "", "type", "password", "formControlName", "filePassword", "appAutofocus", "", "appInputVerbatim", ""],
					["type", "button", "bitSuffix", "", "bitIconButton", "", "bitPasswordInputToggle", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "type", "submit"],
					["bitButton", "", "bitDialogClose", "", "buttonType", "secondary", "type", "button"]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "form", 0), u.EFF(1, "\n  "), u.j41(2, "bit-dialog"), u.EFF(3, "\n    "), u.j41(4, "span", 1), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n\n    "), u.j41(8, "div", 2), u.EFF(9), u.nI1(10, "i18n"), u.j41(11, "bit-form-field", 3), u.EFF(12, "\n        "), u.j41(13, "bit-label"), u.EFF(14), u.nI1(15, "i18n"), u.k0s(), u.EFF(16, "\n        "), u.nrm(17, "input", 4), u.EFF(18, "\n        "), u.nrm(19, "button", 5), u.EFF(20, "\n      "), u.k0s(), u.EFF(21, "\n    "), u.k0s(), u.EFF(22, "\n\n    "), u.qex(23, 6), u.EFF(24, "\n      "), u.j41(25, "button", 7), u.EFF(26, "\n        "), u.j41(27, "span"), u.EFF(28), u.nI1(29, "i18n"), u.k0s(), u.EFF(30, "\n      "), u.k0s(), u.EFF(31, "\n      "), u.j41(32, "button", 8), u.EFF(33, "\n        "), u.j41(34, "span"), u.EFF(35), u.nI1(36, "i18n"), u.k0s(), u.EFF(37, "\n      "), u.k0s(), u.EFF(38, "\n    "), u.bVm(), u.EFF(39, "\n  "), u.k0s(), u.EFF(40, "\n"), u.k0s(), u.EFF(41, "\n")), 2 & t && (u.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), u.R7$(5), u.SpI("\n      ", u.bMT(6, 7, "confirmVaultImport"), "\n    "), u.R7$(4), u.SpI("\n      ", u.bMT(10, 9, "confirmVaultImportDesc"), "\n      "), u.R7$(5), u.JRh(u.bMT(15, 11, "confirmFilePassword")), u.R7$(14), u.JRh(u.bMT(29, 13, "importData")), u.R7$(7), u.JRh(u.bMT(36, 15, "cancel")))
				},
				dependencies: [i.MD, r.p, D.B, A.q, p.$, a.P, d.I, h.m, x.L, C.m, G.J, P.h, $.e, O.a, R.C, V.L, l.t, g.Q, T.Q, j.s, S.X1, S.qT, S.me, S.BC, S.cb, S.j4, S.JD],
				encapsulation: 2
			});
			class M {
				constructor(t, e) {
					this.dialogRef = t, this.formBuilder = e, this.formGroup = this.formBuilder.group({
						sshKeyPassword: ["", S.k0.required]
					}), this.submit = () => {
						this.formGroup.markAsTouched(), this.formGroup.valid && this.dialogRef.close(this.formGroup.value.sshKeyPassword)
					}
				}
			}
			M.ɵfac = function(t) {
				return new(t || M)(u.rXU(o.ce), u.rXU(S.ok))
			}, M.ɵcmp = u.VBU({
				type: M,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 42,
				vars: 17,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[1, "tw-mt-6"],
					["bitInput", "", "type", "password", "formControlName", "sshKeyPassword", "appAutofocus", "", "appInputVerbatim", ""],
					["type", "button", "bitSuffix", "", "bitIconButton", "", "bitPasswordInputToggle", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "type", "submit"],
					["bitButton", "", "bitDialogClose", "", "buttonType", "secondary", "type", "button"]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "form", 0), u.EFF(1, "\n  "), u.j41(2, "bit-dialog"), u.EFF(3, "\n    "), u.j41(4, "span", 1), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n\n    "), u.j41(8, "div", 2), u.EFF(9), u.nI1(10, "i18n"), u.j41(11, "bit-form-field", 3), u.EFF(12, "\n        "), u.j41(13, "bit-label"), u.EFF(14), u.nI1(15, "i18n"), u.k0s(), u.EFF(16, "\n        "), u.nrm(17, "input", 4), u.EFF(18, "\n        "), u.nrm(19, "button", 5), u.EFF(20, "\n      "), u.k0s(), u.EFF(21, "\n    "), u.k0s(), u.EFF(22, "\n\n    "), u.qex(23, 6), u.EFF(24, "\n      "), u.j41(25, "button", 7), u.EFF(26, "\n        "), u.j41(27, "span"), u.EFF(28), u.nI1(29, "i18n"), u.k0s(), u.EFF(30, "\n      "), u.k0s(), u.EFF(31, "\n      "), u.j41(32, "button", 8), u.EFF(33, "\n        "), u.j41(34, "span"), u.EFF(35), u.nI1(36, "i18n"), u.k0s(), u.EFF(37, "\n      "), u.k0s(), u.EFF(38, "\n    "), u.bVm(), u.EFF(39, "\n  "), u.k0s(), u.EFF(40, "\n"), u.k0s(), u.EFF(41, "\n")), 2 & t && (u.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), u.R7$(5), u.SpI("\n      ", u.bMT(6, 7, "enterSshKeyPassword"), "\n    "), u.R7$(4), u.SpI("\n      ", u.bMT(10, 9, "enterSshKeyPasswordDesc"), "\n      "), u.R7$(5), u.JRh(u.bMT(15, 11, "confirmSshKeyPassword")), u.R7$(14), u.JRh(u.bMT(29, 13, "importSshKey")), u.R7$(7), u.JRh(u.bMT(36, 15, "cancel")))
				},
				dependencies: [i.MD, r.p, D.B, A.q, p.$, a.P, d.I, h.m, x.L, C.m, G.J, P.h, $.e, O.a, R.C, V.L, l.t, g.Q, T.Q, j.s, S.X1, S.qT, S.me, S.BC, S.cb, S.j4, S.JD],
				encapsulation: 2
			});
			var B, N, q, Y, L = n(74794),
				z = n(66046),
				K = n(33338),
				J = n(56986),
				_ = n(72245),
				X = n(88565),
				H = n(14803),
				W = n(3204),
				Q = n(44500),
				Z = n(69194),
				tt = n(44451),
				et = n(21495),
				nt = n(49700),
				ot = n(12012),
				it = n(52759),
				rt = n(35500),
				st = n(15623),
				at = n(873),
				ct = n(50700),
				lt = n(78781),
				ut = n(5556),
				pt = n(74526),
				dt = n(39488),
				ht = n(8433),
				ft = n(80351),
				Ft = n(8297),
				mt = n(14318),
				gt = n(58950),
				bt = n(88832),
				vt = n(26477),
				Et = n(22848),
				yt = n(46736),
				kt = n(75583),
				It = n(47135),
				wt = n(44280),
				St = n(29377),
				xt = n(13894);
			class Rt {}
			class Tt {}! function(t) {
				t[t.Azure = 0] = "Azure", t[t.OktaAuthServer = 1] = "OktaAuthServer", t[t.OktaNoAuthServer = 2] = "OktaNoAuthServer", t[t.Google = 3] = "Google", t[t.PingOne = 4] = "PingOne", t[t.OneLogin = 5] = "OneLogin"
			}(B || (B = {})),
			function(t) {
				t[t.MasterPassword = 0] = "MasterPassword", t[t.Federated = 3] = "Federated"
			}(N || (N = {})),
			function(t) {
				t[t.GoogleAuth = 0] = "GoogleAuth", t[t.MicrosoftAuth = 1] = "MicrosoftAuth", t[t.Yubikey = 2] = "Yubikey"
			}(q || (q = {})),
			function(t) {
				t[t.Desktop = 0] = "Desktop", t[t.Mobile = 1] = "Mobile"
			}(Y || (Y = {}));
			class Dt {
				static createClientInfo(t) {
					return {
						platform: Y.Desktop,
						id: t,
						description: "Importer"
					}
				}
			}
			class At {
				constructor(t) {
					this.url = t.url, this.username = t.username, this.password = t.password, this.totp = t.totp, this.extra = t.notes, this.name = t.name, this.grouping = "(none)" === t.path ? null : t.path, this.fav = t.isFavorite ? 1 : 0
				}
			}
			class Ct {}
			class Gt {
				constructor(t, e, n) {
					this.waitForOutOfBand = t, this.passcode = e, this.rememberMe = n
				}
				waitForApproval(t) {
					return new Gt(!0, "", t)
				}
				continueWithPasscode(t, e) {
					return new Gt(!1, t, e)
				}
			}
			Gt.cancel = new Gt(!1, "cancel", !1);
			class Pt {
				constructor(t, e) {
					this.passcode = t, this.rememberMe = e
				}
			}
			Pt.cancel = new Pt("cancel", !1);
			class $t {
				constructor() {
					this.parseSecureNotesToAccount = !0
				}
			}
			$t.default = new $t;
			class Ot {}
			class Vt {}
			class jt {
				isFederated() {
					return this.type === N.Federated && this.hasValue(this.identityProviderURL) && this.hasValue(this.openIDConnectAuthority) && this.hasValue(this.openIDConnectClientId)
				}
				get oidcScope() {
					let t = "openid profile email";
					return this.provider === B.PingOne && (t += " lastpass"), t
				}
				get openIDConnectAuthorityBase() {
					return this.openIDConnectAuthority.replace("/.well-known/openid-configuration", "")
				}
				hasValue(t) {
					return null != t && "" !== t.trim()
				}
			}
			var Ut = n(98869);
			class Mt {
				constructor(t) {
					this.arr = t, this.position = 0;
					const e = new Uint32Array([287454020]),
						n = new Uint8Array(e.buffer);
					this.isLittleEndian = 68 === n[0]
				}
				readBytes(t) {
					if (this.position + t > this.arr.length) throw new Error("End of array reached");
					const e = this.arr.subarray(this.position, this.position + t);
					return this.position += t, e
				}
				readUInt16() {
					const t = this.readBytes(2);
					return (t[0] | t[1] << 8) >>> 0
				}
				readUInt32() {
					const t = this.readBytes(4);
					return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0
				}
				readUInt16BigEndian() {
					let t = this.readUInt16();
					if (this.isLittleEndian) {
						t = (255 & t) << 8 | t >> 8 & 255
					}
					return t
				}
				readUInt32BigEndian() {
					let t = this.readUInt32();
					if (this.isLittleEndian) {
						t = (255 & t) << 24 | (t >> 8 & 255) << 16 | (t >> 16 & 255) << 8 | t >> 24 & 255
					}
					return t
				}
				seekFromCurrentPosition(t) {
					const e = this.position + t;
					if (e < 0) throw new Error("Position cannot be negative");
					if (e > this.arr.length) throw new Error("Array not large enough to seek to this position");
					this.position = e
				}
				atEnd() {
					return this.position >= this.arr.length - 1
				}
			}
			var Bt = function(t, e, n, o) {
				return new(n || (n = Promise))((function(i, r) {
					function s(t) {
						try {
							c(o.next(t))
						} catch (e) {
							r(e)
						}
					}

					function a(t) {
						try {
							c(o.throw(t))
						} catch (e) {
							r(e)
						}
					}

					function c(t) {
						var e;
						t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(s, a)
					}
					c((o = o.apply(t, e || [])).next())
				}))
			};
			class Nt {
				constructor() {
					this.isBrowser = !0
				}
				get(t) {
					return Bt(this, arguments, void 0, (function*(t, e = null, n = null) {
						const o = {
							method: "GET",
							credentials: "include"
						};
						this.setHeaders(o, e, n);
						const i = new Request(this.baseUrl + "/" + t, o);
						return yield fetch(i)
					}))
				}
				postForm(t) {
					return Bt(this, arguments, void 0, (function*(t, e = null, n = null, o = null) {
						return yield this.post(t, ((t, n) => {
							if (null != e && e.size > 0) {
								const n = new FormData;
								for (const [t, o] of e) n.set(t, o);
								t.body = n
							}
						}), n, o)
					}))
				}
				postJson(t, e) {
					return Bt(this, arguments, void 0, (function*(t, e, n = null, o = null) {
						return yield this.post(t, ((t, n) => {
							null != e && (n.set("Content-Type", "application/json; charset=utf-8"), t.body = JSON.stringify(e))
						}), n, o)
					}))
				}
				post(t, e) {
					return Bt(this, arguments, void 0, (function*(t, e, n = null, o = null) {
						const i = {
							method: "POST",
							credentials: "include"
						};
						null == n && (n = new Map), e(i, n), this.setHeaders(i, n, o);
						const r = new Request(this.baseUrl + "/" + t, i);
						return yield fetch(r)
					}))
				}
				setHeaders(t, e = null, n = null) {
					const o = new Headers;
					let i = !1;
					if (null != e && e.size > 0) {
						i = !0;
						for (const [t, n] of e) o.set(t, n)
					}
					if (!this.isBrowser && null != n && n.size > 0) {
						i = !0;
						const t = Array.from(n.keys()).map((t => `${t}=${n.get(t)}`)).join("; ");
						o.set("cookie", t)
					}
					i && (t.headers = o)
				}
			}
			var qt = function(t, e, n, o) {
				return new(n || (n = Promise))((function(i, r) {
					function s(t) {
						try {
							c(o.next(t))
						} catch (e) {
							r(e)
						}
					}

					function a(t) {
						try {
							c(o.throw(t))
						} catch (e) {
							r(e)
						}
					}

					function c(t) {
						var e;
						t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(s, a)
					}
					c((o = o.apply(t, e || [])).next())
				}))
			};
			const Yt = new Map([
					[Y.Desktop, "cli"],
					[Y.Mobile, "android"]
				]),
				Lt = new Map([
					["googleauthrequired", q.GoogleAuth],
					["microsoftauthrequired", q.MicrosoftAuth],
					["otprequired", q.Yubikey]
				]);
			class zt {
				constructor(t, e) {
					this.parser = t, this.cryptoUtils = e
				}
				openVault(t, e, n, o, i, r) {
					return qt(this, void 0, void 0, (function*() {
						const s = t.toLowerCase(),
							[a, c] = yield this.login(s, e, n, o, i);
						try {
							const t = yield this.downloadVault(a, c), n = yield this.cryptoUtils.deriveKey(s, e, a.keyIterationCount);
							let o = null;
							return null != a.encryptedPrivateKey && "" != a.encryptedPrivateKey && (o = yield this.parser.parseEncryptedPrivateKey(a.encryptedPrivateKey, n)), this.parseVault(t, n, o, r)
						} finally {
							yield this.logout(a, c)
						}
					}))
				}
				parseVault(t, e, n, o) {
					return qt(this, void 0, void 0, (function*() {
						const i = new Mt(t),
							r = this.parser.extractChunks(i);
						if (!this.isComplete(r)) throw new Error("Blob is truncated or corrupted");
						return yield this.parseAccounts(r, e, n, o)
					}))
				}
				parseAccounts(t, e, n, o) {
					return qt(this, void 0, void 0, (function*() {
						const i = new Array;
						let r = null;
						for (const s of t)
							if ("ACCT" === s.id) {
								const t = null == r ? e : r.encryptionKey,
									n = yield this.parser.parseAcct(s, t, r, o);
								null != n && i.push(n)
							} else "SHAR" === s.id && (r = yield this.parser.parseShar(s, e, n));
						return i
					}))
				}
				isComplete(t) {
					if (t.length > 0 && "ENDM" === t[t.length - 1].id) {
						return "OK" === lt.A.fromBufferToUtf8(t[t.length - 1].payload)
					}
					return !1
				}
				login(t, e, n, o, i) {
					return qt(this, void 0, void 0, (function*() {
						const r = new Nt;
						r.baseUrl = "https://lastpass.com";
						let s = 100100,
							a = null,
							c = null;
						for (let i = 0; i < 3; i++) {
							if (a = yield this.performSingleLoginRequest(t, e, n, s, new Map, o, r), c = this.extractSessionFromLoginResponse(a, s, o), null != c) return [c, r];
							const i = this.getOptionalErrorAttribute(a, "server");
							if (null != i && "" != i.trim()) {
								r.baseUrl = "https://" + i;
								continue
							}
							const l = this.getOptionalErrorAttribute(a, "iterations");
							if (null == l) break;
							try {
								s = parseInt(l)
							} catch (p) {
								throw "Failed to parse the iteration count, expected an integer value '" + l + "'"
							}
						}
						const l = this.getOptionalErrorAttribute(a, "cause");
						if (null == l) throw this.makeLoginError(a);
						const u = Lt.get(l);
						if (null != u ? c = yield this.loginWithOtp(t, e, n, s, u, o, i, r): "outofbandrequired" === l && (c = yield this.loginWithOob(t, e, n, s, this.getAllErrorAttributes(a), o, i, r)), null == c) throw this.makeLoginError(a);
						return [c, r]
					}))
				}
				loginWithOtp(t, e, n, o, i, r, s, a) {
					return qt(this, void 0, void 0, (function*() {
						let c = null;
						switch (i) {
							case q.GoogleAuth:
								c = yield s.provideGoogleAuthPasscode();
								break;
							case q.MicrosoftAuth:
								c = yield s.provideMicrosoftAuthPasscode();
								break;
							case q.Yubikey:
								c = yield s.provideYubikeyPasscode();
								break;
							default:
								throw new Error("Invalid OTP method")
						}
						if (c == Pt.cancel) throw new Error("Second factor step is canceled by the user");
						const l = yield this.performSingleLoginRequest(t, e, n, o, new Map([
							["otp", c.passcode]
						]), r, a), u = this.extractSessionFromLoginResponse(l, o, r);
						if (null == u) throw this.makeLoginError(l);
						return c.rememberMe && (yield this.markDeviceAsTrusted(u, r, a)), u
					}))
				}
				loginWithOob(t, e, n, o, i, r, s, a) {
					return qt(this, void 0, void 0, (function*() {
						const c = i => qt(this, void 0, void 0, (function*() {
							const s = yield this.performSingleLoginRequest(t, e, n, o, i, r, a), l = this.extractSessionFromLoginResponse(s, o, r);
							if (null != l) return l;
							if ("outofbandrequired" != this.getOptionalErrorAttribute(s, "cause")) throw this.makeLoginError(s);
							return i.set("outofbandretry", "1"), i.set("outofbandretryid", this.getErrorAttribute(s, "retryid")), c(i)
						}));
						return yield Promise.race([(() => {
							const t = new Map;
							return t.set("outofbandrequest", 1), c(t)
						})(), (() => qt(this, void 0, void 0, (function*() {
							const e = yield this.approveOob(t, i, s, a);
							if (e == Gt.cancel) throw new Error("Out of band step is canceled by the user");
							const n = new Map;
							n.set("otp", e.passcode);
							const o = yield c(n);
							return e.rememberMe && (yield this.markDeviceAsTrusted(o, r, a)), o
						})))()]).finally((() => {
							s.closeMFADialog()
						}))
					}))
				}
				approveOob(t, e, n, o) {
					return qt(this, void 0, void 0, (function*() {
						const i = e.get("outofbandtype");
						if (null == i) throw new Error("Out of band method is not specified");
						switch (i) {
							case "lastpassauth":
								return n.approveLastPassAuth();
							case "duo":
								return this.approveDuo(t, e, n, o);
							case "salesforcehash":
								return n.approveSalesforceAuth();
							default:
								throw new Error("Out of band method " + i + " is not supported")
						}
					}))
				}
				approveDuo(t, e, n, o) {
					return qt(this, void 0, void 0, (function*() {
						return "1" == e.get("preferduowebsdk") ? this.approveDuoWebSdk(t, e, n, o) : n.approveDuo()
					}))
				}
				approveDuoWebSdk(t, e, n, o) {
					return n.approveDuo()
				}
				markDeviceAsTrusted(t, e, n) {
					return qt(this, void 0, void 0, (function*() {
						const o = new Map([
								["uuid", e.id],
								["trustlabel", e.description],
								["token", t.token]
							]),
							i = yield n.postForm("trust.php", o, null, this.getSessionCookies(t));
						i.status != st.kG.Ok && this.makeError(i)
					}))
				}
				logout(t, e) {
					return qt(this, void 0, void 0, (function*() {
						const n = new Map([
								["method", Yt.get(t.platform)],
								["noredirect", 1]
							]),
							o = yield e.postForm("logout.php", n, null, this.getSessionCookies(t));
						o.status != st.kG.Ok && this.makeError(o)
					}))
				}
				downloadVault(t, e) {
					return qt(this, void 0, void 0, (function*() {
						const n = "getaccts.php?mobile=1&b64=1&hash=0.0&hasplugin=3.0.23&requestsrc=" + Yt.get(t.platform),
							o = yield e.get(n, null, this.getSessionCookies(t));
						if (o.status == st.kG.Ok) {
							const t = yield o.text();
							return lt.A.fromB64ToArray(t)
						}
						this.makeError(o)
					}))
				}
				getSessionCookies(t) {
					return new Map([
						["PHPSESSID", encodeURIComponent(t.id)]
					])
				}
				getErrorAttribute(t, e) {
					const n = this.getOptionalErrorAttribute(t, e);
					if (null != n) return n;
					throw new Error("Unknown response schema: attribute " + e + " is missing")
				}
				getOptionalErrorAttribute(t, e) {
					const n = t.querySelector("response > error");
					if (null == n) return null;
					const o = n.attributes.getNamedItem(e);
					return null == o ? null : o.value
				}
				getAllErrorAttributes(t) {
					const e = t.querySelector("response > error");
					if (null == e) return null;
					const n = new Map;
					for (const o of Array.from(e.attributes)) n.set(o.name, o.value);
					return n
				}
				extractSessionFromLoginResponse(t, e, n) {
					const o = t.querySelector("response > ok");
					if (null == o) return null;
					const i = o.attributes.getNamedItem("sessionid");
					if (null == i) return null;
					const r = o.attributes.getNamedItem("token");
					if (null == r) return null;
					const s = new Ot;
					s.id = i.value, s.keyIterationCount = e, s.token = r.value, s.platform = n.platform;
					const a = o.attributes.getNamedItem("privatekeyenc");
					return null != a && null != a.value && "" != a.value.trim() && (s.encryptedPrivateKey = a.value), s
				}
				performSingleLoginRequest(t, e, n, o, i, r, s) {
					return qt(this, void 0, void 0, (function*() {
						const a = yield this.cryptoUtils.deriveKeyHash(t, e, o), c = new Map([
							["method", Yt.get(r.platform)],
							["xml", "2"],
							["username", t],
							["hash", lt.A.fromBufferToHex(a.buffer)],
							["iterations", o],
							["includeprivatekeyenc", "1"],
							["outofbandsupported", "1"],
							["uuid", r.id],
							["trustlabel", r.description]
						]);
						null != n && (c.set("alpfragmentid", n), c.set("calculatedfragmentid", n));
						for (const [t, e] of i) c.set(t, e);
						const l = yield s.postForm("login.php", c);
						if (l.status == st.kG.Ok) {
							const t = yield l.text();
							return (new window.DOMParser).parseFromString(t, "text/xml")
						}
						this.makeError(l)
					}))
				}
				makeError(t) {
					throw new Error("HTTP request to " + t.url + " failed with status " + t.status + ".")
				}
				makeLoginError(t) {
					var e;
					const n = t.querySelector("response > error");
					if (null == n) return "Unknown response schema";
					const o = n.attributes.getNamedItem("cause"),
						i = n.attributes.getNamedItem("message");
					if (null != o) switch (o.value) {
						case "unknownemail":
							return "Invalid username";
						case "password_invalid":
						case "unknownpassword":
							return "Invalid password";
						case "googleauthfailed":
						case "microsoftauthfailed":
						case "otpfailed":
							return "Second factor code is incorrect";
						case "multifactorresponsefailed":
							return "Out of band authentication failed";
						case "unifiedloginresult":
							return "unifiedloginresult";
						default:
							return null !== (e = null == i ? void 0 : i.value) && void 0 !== e ? e : o.value
					}
					return null != i ? i.value : "Unknown error"
				}
			}
			var Kt = function(t, e, n, o) {
				return new(n || (n = Promise))((function(i, r) {
					function s(t) {
						try {
							c(o.next(t))
						} catch (e) {
							r(e)
						}
					}

					function a(t) {
						try {
							c(o.throw(t))
						} catch (e) {
							r(e)
						}
					}

					function c(t) {
						var e;
						t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(s, a)
					}
					c((o = o.apply(t, e || [])).next())
				}))
			};
			class Jt {
				constructor(t) {
					this.cryptoFunctionService = t
				}
				deriveKey(t, e, n) {
					return Kt(this, void 0, void 0, (function*() {
						if (n < 0) throw new Error("Iteration count should be positive");
						return 1 == n ? yield this.cryptoFunctionService.hash(t + e, "sha256"): yield this.cryptoFunctionService.pbkdf2(e, t, "sha256", n)
					}))
				}
				deriveKeyHash(t, e, n) {
					return Kt(this, void 0, void 0, (function*() {
						const o = yield this.deriveKey(t, e, n);
						return 1 == n ? yield this.cryptoFunctionService.hash(lt.A.fromBufferToHex(o.buffer) + e, "sha256"): yield this.cryptoFunctionService.pbkdf2(o, e, "sha256", 1)
					}))
				}
				ExclusiveOr(t, e) {
					if (t.length !== e.length) throw new Error("Arrays must be the same length.");
					const n = new Uint8Array(t.length);
					for (let o = 0; o < t.length; o++) n[o] = t[o] ^ e[o];
					return n
				}
				decryptAes256PlainWithDefault(t, e, n) {
					return Kt(this, void 0, void 0, (function*() {
						try {
							return this.decryptAes256Plain(t, e)
						} catch (o) {
							return n
						}
					}))
				}
				decryptAes256Base64WithDefault(t, e, n) {
					return Kt(this, void 0, void 0, (function*() {
						try {
							return this.decryptAes256Base64(t, e)
						} catch (o) {
							return n
						}
					}))
				}
				decryptAes256Plain(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						return 0 === t.length ? "" : 33 === t[0] && t.length % 16 == 1 && t.length > 32 ? this.decryptAes256CbcPlain(t, e) : this.decryptAes256EcbPlain(t, e)
					}))
				}
				decryptAes256Base64(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						return 0 === t.length ? "" : 33 === t[0] ? this.decryptAes256CbcBase64(t, e) : this.decryptAes256EcbBase64(t, e)
					}))
				}
				decryptAes256(t, e, n) {
					return Kt(this, arguments, void 0, (function*(t, e, n, o = new Uint8Array(16)) {
						if (0 === t.length) return "";
						const i = yield this.cryptoFunctionService.aesDecrypt(t, o, e, n);
						return lt.A.fromBufferToUtf8(i)
					}))
				}
				decryptAes256EcbPlain(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						return this.decryptAes256(t, e, "ecb")
					}))
				}
				decryptAes256EcbBase64(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						const n = lt.A.fromB64ToArray(lt.A.fromBufferToUtf8(t));
						return this.decryptAes256(n, e, "ecb")
					}))
				}
				decryptAes256CbcPlain(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						const n = t.subarray(17),
							o = t.subarray(1, 17);
						return this.decryptAes256(n, e, "cbc", o)
					}))
				}
				decryptAes256CbcBase64(t, e) {
					return Kt(this, void 0, void 0, (function*() {
						const n = lt.A.fromB64ToArray(lt.A.fromBufferToUtf8(t.subarray(26))),
							o = lt.A.fromB64ToArray(lt.A.fromBufferToUtf8(t.subarray(1, 25)));
						return this.decryptAes256(n, e, "cbc", o)
					}))
				}
			}
			var _t = function(t, e, n, o) {
				return new(n || (n = Promise))((function(i, r) {
					function s(t) {
						try {
							c(o.next(t))
						} catch (e) {
							r(e)
						}
					}

					function a(t) {
						try {
							c(o.throw(t))
						} catch (e) {
							r(e)
						}
					}

					function c(t) {
						var e;
						t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(s, a)
					}
					c((o = o.apply(t, e || [])).next())
				}))
			};
			const Xt = new Set(["Server", "Email Account", "Database", "Instant Messenger"]);
			class Ht {
				constructor(t, e) {
					this.cryptoFunctionService = t, this.cryptoUtils = e
				}
				parseAcct(t, e, n, o) {
					return _t(this, void 0, void 0, (function*() {
						let i, r = 0;
						try {
							const s = "decryption failed",
								a = new Mt(t.payload);
							i = lt.A.fromBufferToUtf8(this.readItem(a)), r = 1;
							const c = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							r = 2;
							const l = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							r = 3;
							const u = this.readItem(a);
							let p = u.length > 0 && 33 === u[0] ? yield this.cryptoUtils.decryptAes256PlainWithDefault(u, e, s): lt.A.fromBufferToUtf8(this.decodeHexLoose(lt.A.fromBufferToUtf8(u)));
							if ("http://group" == p) return null;
							r = 4;
							const d = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							r = 5;
							const h = "1" === lt.A.fromBufferToUtf8(this.readItem(a));
							this.skipItem(a), r = 7;
							let f = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							r = 8;
							let F = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							this.skipItem(a), this.skipItem(a), r = 11;
							const m = "1" === lt.A.fromBufferToUtf8(this.readItem(a));
							if (o.parseSecureNotesToAccount && m) {
								let t = "";
								for (const e of d.split("\n")) {
									const n = e.split(":", 2);
									if (!(n.length < 2)) switch (n[0]) {
										case "NoteType":
											t = n[1];
											break;
										case "Hostname":
											p = n[1];
											break;
										case "Username":
											f = n[1];
											break;
										case "Password":
											F = n[1]
									}
								}
								if (!Xt.has(t)) return null
							}
							this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), this.skipItem(a), r = 39;
							const g = yield this.cryptoUtils.decryptAes256PlainWithDefault(this.readItem(a), e, s);
							r = 42;
							const b = this.makeAccountPath(l, n),
								v = new Rt;
							return v.id = i, v.name = c, v.username = f, v.password = F, v.url = p, v.path = b, v.notes = d, v.totp = g, v.isFavorite = h, v.isShared = null != n, v
						} catch (s) {
							throw new Error("Error parsing accounts on item with ID:" + i + " step #" + r + " errorMessage: " + s.message)
						}
					}))
				}
				parseShar(t, e, n) {
					return _t(this, void 0, void 0, (function*() {
						let e;
						try {
							const o = new Mt(t.payload);
							e = lt.A.fromBufferToUtf8(this.readItem(o));
							const i = this.readItem(o),
								r = lt.A.fromHexToArray(lt.A.fromBufferToUtf8(i)),
								s = yield this.cryptoFunctionService.rsaDecrypt(r, n, "sha1"), a = lt.A.fromHexToArray(lt.A.fromBufferToUtf8(s)), c = this.readItem(o), l = yield this.cryptoUtils.decryptAes256Base64(c, a), u = new Vt;
							return u.id = e, u.name = l, u.encryptionKey = a, u
						} catch (o) {
							throw new Error("Error parsing shared folder with ID:" + e + " errorMessage: " + o.message)
						}
					}))
				}
				parseEncryptedPrivateKey(t, e) {
					return _t(this, void 0, void 0, (function*() {
						const n = yield this.cryptoUtils.decryptAes256(lt.A.fromHexToArray(t), e, "cbc", e.subarray(0, 16)), o = "LastPassPrivateKey<", i = ">LastPassPrivateKey";
						if (!n.startsWith(o) || !n.endsWith(i)) throw new Error("Failed to decrypt private key");
						const r = n.substring(19, n.length - 19);
						return lt.A.fromHexToArray(r)
					}))
				}
				makeAccountPath(t, e) {
					const n = null == t || "" === t.trim();
					return null == e ? n ? "(none)" : t : n ? e.name : e.name + "\\" + t
				}
				extractChunks(t) {
					const e = new Array;
					for (; !t.atEnd();) {
						const n = this.readChunk(t);
						e.push(n)
					}
					return e
				}
				readChunk(t) {
					const e = new Tt;
					return e.id = this.readId(t), e.payload = this.readPayload(t, this.readSize(t)), e
				}
				readItem(t) {
					return this.readPayload(t, this.readSize(t))
				}
				skipItem(t) {
					t.seekFromCurrentPosition(this.readSize(t))
				}
				readId(t) {
					return lt.A.fromBufferToUtf8(t.readBytes(4))
				}
				readSize(t) {
					return t.readUInt32BigEndian()
				}
				readPayload(t, e) {
					return t.readBytes(e)
				}
				decodeHexLoose(t) {
					return lt.A.fromHexToArray(t.length % 2 == 0 ? t : "0" + t)
				}
			}
			var Wt = function(t, e, n, o) {
				return new(n || (n = Promise))((function(i, r) {
					function s(t) {
						try {
							c(o.next(t))
						} catch (e) {
							r(e)
						}
					}

					function a(t) {
						try {
							c(o.throw(t))
						} catch (e) {
							r(e)
						}
					}

					function c(t) {
						var e;
						t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(s, a)
					}
					c((o = o.apply(t, e || [])).next())
				}))
			};
			class Qt {
				constructor(t) {
					this.cryptoFunctionService = t, this.cryptoUtils = new Jt(t);
					const e = new Ht(t, this.cryptoUtils);
					this.client = new zt(e, this.cryptoUtils)
				}
				open(t, e, n, o) {
					return Wt(this, arguments, void 0, (function*(t, e, n, o, i = $t.default) {
						this.accounts = yield this.client.openVault(t, e, null, n, o, i)
					}))
				}
				openFederated(t, e, n) {
					return Wt(this, arguments, void 0, (function*(t, e, n, o = $t.default) {
						if (null == t) throw new Error("Federated user context is not set.");
						const i = yield this.getK1(t), [r, s] = yield this.getK2FragmentId(t), a = yield this.cryptoFunctionService.hash(this.cryptoUtils.ExclusiveOr(i, r), "sha256"), c = lt.A.fromBufferToB64(a);
						this.accounts = yield this.client.openVault(t.username, c, s, e, n, o)
					}))
				}
				setUserTypeContext(t) {
					return Wt(this, void 0, void 0, (function*() {
						const e = t.toLowerCase(),
							n = new Nt;
						n.baseUrl = "https://lastpass.com";
						const o = "lmiapi/login/type?username=" + encodeURIComponent(e),
							i = yield n.get(o);
						if (i.status !== st.kG.Ok) throw new Error("Cannot determine LastPass user type.");
						{
							const t = yield i.json();
							if (this.userType = new jt, this.userType.companyId = t.CompanyId, this.userType.identityProviderGUID = t.IdentityProviderGUID, this.userType.identityProviderURL = t.IdentityProviderURL, this.userType.isPasswordlessEnabled = t.IsPasswordlessEnabled, this.userType.openIDConnectAuthority = t.OpenIDConnectAuthority, this.userType.openIDConnectClientId = t.OpenIDConnectClientId, this.userType.pkceEnabled = t.PkceEnabled, this.userType.provider = t.Provider, this.userType.type = t.type, this.userType.provider === B.Azure) {
								const t = this.userType.openIDConnectAuthority.indexOf("?app");
								t > -1 && (this.userType.openIDConnectAuthority = this.userType.openIDConnectAuthority.substring(0, t))
							}
						}
					}))
				}
				accountsToExportedCsvString(t = !1) {
					if (null == this.accounts) throw new Error("Vault has not opened any accounts.");
					const e = this.accounts.filter((e => !e.isShared || e.isShared && !t)).map((t => new At(t)));
					if (0 === e.length) throw new Error("No accounts to transform");
					return Ut.unparse(e)
				}
				getK1(t) {
					return Wt(this, void 0, void 0, (function*() {
						var e;
						if (null == this.userType) throw new Error("User type is not set.");
						if (!this.userType.isFederated()) throw new Error("Cannot get k1 for LastPass user that is not federated.");
						if (null == t) throw new Error("Federated user is not set.");
						let n = null;
						if (null != (null === (e = t.idpUserInfo) || void 0 === e ? void 0 : e.LastPassK1)) return lt.A.fromByteStringToArray(t.idpUserInfo.LastPassK1);
						if (this.userType.provider === B.Azure) n = yield this.getK1Azure(t);
						else if (this.userType.provider === B.Google) n = yield this.getK1Google(t);
						else {
							const e = this.userType.provider === B.PingOne;
							n = yield this.getK1FromAccessToken(t, e)
						}
						if (null != n) return n;
						throw new Error("Cannot get k1.")
					}))
				}
				getK1Azure(t) {
					return Wt(this, void 0, void 0, (function*() {
						const e = new Nt;
						e.baseUrl = "https://graph.microsoft.com";
						const n = yield e.get("v1.0/me?$select=id,displayName,mail&$expand=extensions", new Map([
							["Authorization", "Bearer " + t.accessToken]
						]));
						if (n.status === st.kG.Ok) {
							const t = yield n.json();
							if (null != (null == t ? void 0 : t.extensions) && t.extensions.length > 0) {
								const e = t.extensions[0].LastPassK1;
								if (null != e) return lt.A.fromB64ToArray(e)
							}
						}
						return null
					}))
				}
				getK1Google(t) {
					return Wt(this, void 0, void 0, (function*() {
						const e = new Map([
								["Authorization", "Bearer " + t.accessToken]
							]),
							n = new Nt;
						n.baseUrl = "https://content.googleapis.com";
						const o = yield n.get("drive/v3/files?pageSize=1&q=name%20%3D%20%27k1.lp%27&spaces=appDataFolder&fields=nextPageToken%2C%20files(id%2C%20name)", e);
						if (o.status === st.kG.Ok) {
							const t = yield o.json(), i = null == t ? void 0 : t.files;
							if (null != i && i.length > 0 && null != i[0].id && "k1.lp" === i[0].name) {
								n.baseUrl = "https://www.googleapis.com";
								const t = yield n.get("drive/v3/files/" + i[0].id + "?alt=media", e);
								if (t.status === st.kG.Ok) {
									const e = yield t.text();
									return lt.A.fromB64ToArray(e)
								}
							}
						}
						return null
					}))
				}
				getK1FromAccessToken(t, e) {
					return Wt(this, void 0, void 0, (function*() {
						const n = (0, nt.iD)(t.accessToken),
							o = null == n ? void 0 : n.LastPassK1;
						return null != o ? e ? lt.A.fromB64ToArray(o) : lt.A.fromByteStringToArray(o) : null
					}))
				}
				getK2FragmentId(t) {
					return Wt(this, void 0, void 0, (function*() {
						if (null == this.userType) throw new Error("User type is not set.");
						if (!this.userType.isFederated()) throw new Error("Cannot get k2 for LastPass user that is not federated.");
						const e = new Nt;
						e.baseUrl = this.userType.identityProviderURL;
						const n = yield e.postJson("federatedlogin/api/v1/getkey", {
							company_id: this.userType.companyId,
							id_token: t.idToken
						});
						if (n.status === st.kG.Ok) {
							const t = yield n.json(), e = null == t ? void 0 : t.k2, o = null == t ? void 0 : t.fragment_id;
							if (null != e && null != o) return [lt.A.fromB64ToArray(e), o]
						}
						throw new Error("Cannot get k2 and/or fragment ID.")
					}))
				}
			}
			var Zt = n(99917),
				te = n(26657);
			class ee {
				constructor(t) {
					this.dialogRef = t, this.formGroup = new S.gE({
						password: new S.MJ("", {
							validators: S.k0.required,
							updateOn: "submit"
						})
					}), this.submit = () => {
						this.formGroup.markAsTouched(), this.formGroup.valid && this.dialogRef.close(this.formGroup.controls.password.value)
					}
				}
				static open(t) {
					const e = t.open(ee);
					return (0, _._)(e.closed)
				}
			}
			ee.ɵfac = function(t) {
				return new(t || ee)(u.rXU(o.ce))
			}, ee.ɵcmp = u.VBU({
				type: ee,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 45,
				vars: 17,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[1, "!tw-mb-0"],
					["bitInput", "", "type", "password", "formControlName", "password", "appAutofocus", "", "appInputVerbatim", ""],
					["type", "button", "bitSuffix", "", "bitIconButton", "", "bitPasswordInputToggle", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "type", "submit", "bitFormButton", ""],
					["bitButton", "", "bitDialogClose", "", "buttonType", "secondary", "type", "button", "bitFormButton", ""]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "form", 0), u.EFF(1, "\n  "), u.j41(2, "bit-dialog"), u.EFF(3, "\n    "), u.j41(4, "span", 1), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n\n    "), u.j41(8, "div", 2), u.EFF(9, "\n      "), u.j41(10, "bit-form-field", 3), u.EFF(11, "\n        "), u.j41(12, "bit-label"), u.EFF(13), u.nI1(14, "i18n"), u.k0s(), u.EFF(15, "\n        "), u.nrm(16, "input", 4), u.EFF(17, "\n        "), u.nrm(18, "button", 5), u.EFF(19, "\n        "), u.j41(20, "bit-hint"), u.EFF(21), u.nI1(22, "i18n"), u.k0s(), u.EFF(23, "\n      "), u.k0s(), u.EFF(24, "\n    "), u.k0s(), u.EFF(25, "\n\n    "), u.qex(26, 6), u.EFF(27, "\n      "), u.j41(28, "button", 7), u.EFF(29, "\n        "), u.j41(30, "span"), u.EFF(31), u.nI1(32, "i18n"), u.k0s(), u.EFF(33, "\n      "), u.k0s(), u.EFF(34, "\n      "), u.j41(35, "button", 8), u.EFF(36, "\n        "), u.j41(37, "span"), u.EFF(38), u.nI1(39, "i18n"), u.k0s(), u.EFF(40, "\n      "), u.k0s(), u.EFF(41, "\n    "), u.bVm(), u.EFF(42, "\n  "), u.k0s(), u.EFF(43, "\n"), u.k0s(), u.EFF(44, "\n")), 2 & t && (u.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), u.R7$(5), u.SpI("\n      ", u.bMT(6, 7, "lastPassAuthRequired"), "\n    "), u.R7$(8), u.JRh(u.bMT(14, 9, "lastPassMasterPassword")), u.R7$(8), u.JRh(u.bMT(22, 11, "confirmIdentity")), u.R7$(10), u.JRh(u.bMT(32, 13, "submit")), u.R7$(7), u.JRh(u.bMT(39, 15, "cancel")))
				},
				dependencies: [i.MD, r.p, D.B, A.q, p.$, S.X1, S.qT, S.me, S.BC, S.cb, S.j4, S.JD, a.P, d.I, h.m, x.L, C.m, Zt.s, G.J, P.h, $.e, O.a, R.C, te.$, V.L, l.t, g.Q, T.Q, j.s, kt.E],
				encapsulation: 2
			});
			class ne {
				get descriptionI18nKey() {
					switch (this.variant) {
						case "oob":
							return "lastPassOOBDesc";
						case "yubikey":
							return "lastPassYubikeyDesc";
						default:
							return "lastPassMFADesc"
					}
				}
				constructor(t, e) {
					this.dialogRef = t, this.data = e, this.variant = this.data.variant, this.formGroup = new S.gE({
						passcode: new S.MJ("", {
							validators: S.k0.required,
							updateOn: "submit"
						})
					}), this.submit = () => {
						this.formGroup.markAsTouched(), this.formGroup.valid && this.dialogRef.close(this.formGroup.value.passcode)
					}
				}
				static open(t, e) {
					return t.open(ne, {
						data: e
					})
				}
			}
			ne.ɵfac = function(t) {
				return new(t || ne)(u.rXU(o.ce), u.rXU(o.Qs))
			}, ne.ɵcmp = u.VBU({
				type: ne,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.aNF],
				decls: 47,
				vars: 20,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[1, "!tw-mb-0"],
					["bitInput", "", "type", "text", "formControlName", "passcode", "appAutofocus", "", "appInputVerbatim", ""],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "type", "submit", "bitFormButton", ""],
					["bitButton", "", "bitDialogClose", "cancel", "buttonType", "secondary", "type", "button", "bitFormButton", ""]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "form", 0), u.EFF(1, "\n  "), u.j41(2, "bit-dialog"), u.EFF(3, "\n    "), u.j41(4, "span", 1), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n\n    "), u.j41(8, "div", 2), u.EFF(9, "\n      "), u.j41(10, "p"), u.EFF(11), u.nI1(12, "i18n"), u.k0s(), u.EFF(13, "\n      "), u.j41(14, "bit-form-field", 3), u.EFF(15, "\n        "), u.j41(16, "bit-label"), u.EFF(17), u.nI1(18, "i18n"), u.k0s(), u.EFF(19, "\n        "), u.nrm(20, "input", 4), u.EFF(21, "\n        "), u.j41(22, "bit-hint"), u.EFF(23), u.nI1(24, "i18n"), u.k0s(), u.EFF(25, "\n      "), u.k0s(), u.EFF(26, "\n    "), u.k0s(), u.EFF(27, "\n\n    "), u.qex(28, 5), u.EFF(29, "\n      "), u.j41(30, "button", 6), u.EFF(31, "\n        "), u.j41(32, "span"), u.EFF(33), u.nI1(34, "i18n"), u.k0s(), u.EFF(35, "\n      "), u.k0s(), u.EFF(36, "\n      "), u.j41(37, "button", 7), u.EFF(38, "\n        "), u.j41(39, "span"), u.EFF(40), u.nI1(41, "i18n"), u.k0s(), u.EFF(42, "\n      "), u.k0s(), u.EFF(43, "\n    "), u.bVm(), u.EFF(44, "\n  "), u.k0s(), u.EFF(45, "\n"), u.k0s(), u.EFF(46, "\n")), 2 & t && (u.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), u.R7$(5), u.SpI("\n      ", u.bMT(6, 8, "lastPassMFARequired"), "\n    "), u.R7$(6), u.JRh(u.bMT(12, 10, e.descriptionI18nKey)), u.R7$(6), u.JRh(u.bMT(18, 12, "passcode")), u.R7$(6), u.JRh(u.bMT(24, 14, "confirmIdentity")), u.R7$(10), u.JRh(u.bMT(34, 16, "continue")), u.R7$(7), u.JRh(u.bMT(41, 18, "cancel")))
				},
				dependencies: [i.MD, r.p, D.B, A.q, p.$, S.X1, S.qT, S.me, S.BC, S.cb, S.j4, S.JD, a.P, d.I, h.m, x.L, C.m, Zt.s, G.J, P.h, R.C, te.$, V.L, l.t, g.Q, T.Q, kt.E],
				encapsulation: 2
			});
			var oe = n(21274),
				ie = function(t, e, n, o) {
					return new(n || (n = Promise))((function(i, r) {
						function s(t) {
							try {
								c(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								c(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function c(t) {
							var e;
							t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(s, a)
						}
						c((o = o.apply(t, e || [])).next())
					}))
				};
			class re {
				constructor(t) {
					this.dialogService = t
				}
				getOTPResult(t) {
					return ie(this, void 0, void 0, (function*() {
						const e = yield this.openMFADialog(t);
						return new Pt(e, !1)
					}))
				}
				getOOBResult(t) {
					return ie(this, void 0, void 0, (function*() {
						const e = yield this.openMFADialog(t);
						return new Gt(!1, e, !1)
					}))
				}
				openMFADialog(t) {
					return this.mfaDialogRef = ne.open(this.dialogService, {
						variant: t
					}), (0, _._)(this.mfaDialogRef.closed)
				}
				closeMFADialog() {
					var t;
					null === (t = this.mfaDialogRef) || void 0 === t || t.close()
				}
				provideGoogleAuthPasscode() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOTPResult("otp")
					}))
				}
				provideMicrosoftAuthPasscode() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOTPResult("otp")
					}))
				}
				provideYubikeyPasscode() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOTPResult("yubikey")
					}))
				}
				approveLastPassAuth() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOOBResult("oob")
					}))
				}
				approveDuo() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOOBResult("oob")
					}))
				}
				approveSalesforceAuth() {
					return ie(this, void 0, void 0, (function*() {
						return this.getOOBResult("oob")
					}))
				}
			}
			re.ɵfac = function(t) {
				return new(t || re)(u.KVO(oe.o))
			}, re.ɵprov = u.jDH({
				token: re,
				factory: re.ɵfac,
				providedIn: "root"
			});
			var se = n(72952),
				ae = n(91059),
				ce = n(37115),
				le = n(52396),
				ue = function(t, e, n, o) {
					return new(n || (n = Promise))((function(i, r) {
						function s(t) {
							try {
								c(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								c(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function c(t) {
							var e;
							t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(s, a)
						}
						c((o = o.apply(t, e || [])).next())
					}))
				};
			class pe {
				constructor(t, e, n, o, i, r, s, a, c, l) {
					this.cryptoFunctionService = t, this.environmentService = e, this.appIdService = n, this.lastPassDirectImportUIService = o, this.platformUtilsService = i, this.passwordGenerationService = r, this.broadcasterService = s, this.ngZone = a, this.dialogService = c, this.i18nService = l, this._ssoImportCallback$ = new z.B, this.ssoImportCallback$ = this._ssoImportCallback$.asObservable(), this.vault = new Qt(this.cryptoFunctionService), this.broadcasterService.subscribe("LastPassDirectImportService", (t => {
						this.ngZone.run((() => ue(this, void 0, void 0, (function*() {
							if ("importCallbackLastPass" === t.command) this._ssoImportCallback$.next({
								oidcCode: t.code,
								oidcState: t.state
							})
						}))))
					}))
				}
				handleImport(t, e) {
					return ue(this, void 0, void 0, (function*() {
						if (yield this.verifyLastPassAccountExists(t), this.isAccountFederated) {
							const n = yield this.handleFederatedLogin(t);
							return yield this.handleFederatedImport(n.oidcCode, n.oidcState, e)
						}
						const n = yield ee.open(this.dialogService);
						return yield this.handleStandardImport(t, n, e)
					}))
				}
				get isAccountFederated() {
					return this.vault.userType.isFederated()
				}
				verifyLastPassAccountExists(t) {
					return ue(this, void 0, void 0, (function*() {
						yield this.vault.setUserTypeContext(t)
					}))
				}
				handleFederatedLogin(t) {
					return ue(this, void 0, void 0, (function*() {
						const e = (0, _._)(this.ssoImportCallback$),
							n = yield this.createOidcSigninRequest(t);
						this.platformUtilsService.launchUri(n.url);
						const o = this.dialogService.openSimpleDialogRef({
								title: this.i18nService.t("awaitingSSO"),
								content: this.i18nService.t("awaitingSSODesc"),
								type: "warning",
								icon: "bwi-key",
								acceptButtonText: this.i18nService.t("cancel"),
								cancelButtonText: null
							}),
							i = (0, _._)(o.closed).then((t => {
								throw Error("SSO auth cancelled")
							}));
						return Promise.race([i, e]).finally((() => {
							o.close()
						}))
					}))
				}
				createOidcSigninRequest(t) {
					return ue(this, void 0, void 0, (function*() {
						return this.oidcClient = new wt.hz({
							authority: this.vault.userType.openIDConnectAuthorityBase,
							client_id: this.vault.userType.openIDConnectClientId,
							redirect_uri: yield this.getOidcRedirectUrl(),
							response_type: "code",
							scope: this.vault.userType.oidcScope,
							response_mode: "query",
							loadUserInfo: !0
						}), yield this.oidcClient.createSigninRequest({
							state: {
								email: t
							},
							nonce: yield this.passwordGenerationService.generatePassword({
								length: 20,
								uppercase: !0,
								lowercase: !0,
								number: !0
							})
						})
					}))
				}
				getOidcRedirectUrlWithParams(t, e) {
					const n = this.oidcClient.settings.redirect_uri,
						o = "code=" + t + "&state=" + e;
					return 0 === n.indexOf("bitwarden://") ? n + "/?" + o : n + "&" + o
				}
				getOidcRedirectUrl() {
					return ue(this, void 0, void 0, (function*() {
						if (this.platformUtilsService.getClientType() === st.sK.Desktop) return "bitwarden://import-callback-lp";
						return (yield(0, _._)(this.environmentService.environment$)).getWebVaultUrl() + "/sso-connector.html?lp=1"
					}))
				}
				handleStandardImport(t, e, n) {
					return ue(this, void 0, void 0, (function*() {
						const o = yield this.createClientInfo(t);
						return yield this.vault.open(t, e, o, this.lastPassDirectImportUIService, {
							parseSecureNotesToAccount: !1
						}), this.vault.accountsToExportedCsvString(!n)
					}))
				}
				handleFederatedImport(t, e, n) {
					return ue(this, void 0, void 0, (function*() {
						const o = yield this.oidcClient.processSigninResponse(this.getOidcRedirectUrlWithParams(t, e)), i = o.userState, r = new Ct;
						r.idToken = o.id_token, r.accessToken = o.access_token, r.idpUserInfo = o.profile, r.username = i.email;
						const s = yield this.createClientInfo(r.username);
						return yield this.vault.openFederated(r, s, this.lastPassDirectImportUIService, {
							parseSecureNotesToAccount: !1
						}), this.vault.accountsToExportedCsvString(!n)
					}))
				}
				createClientInfo(t) {
					return ue(this, void 0, void 0, (function*() {
						const e = "lastpass" + (yield this.appIdService.getAppId()) + t,
							n = yield this.cryptoFunctionService.hash(e, "sha256");
						return Dt.createClientInfo(lt.A.fromBufferToHex(n))
					}))
				}
			}
			pe.ɵfac = function(t) {
				return new(t || pe)(u.KVO(se.R), u.KVO(St.v), u.KVO(ae.Y), u.KVO(re), u.KVO(ce.y), u.KVO(xt.JJ), u.KVO(le.y), u.KVO(u.SKi), u.KVO(oe.o), u.KVO(ct.W))
			}, pe.ɵprov = u.jDH({
				token: pe,
				factory: pe.ɵfac,
				providedIn: "root"
			});
			var de = n(56962),
				he = n(90246),
				fe = n(50352),
				Fe = function(t, e, n, o) {
					return new(n || (n = Promise))((function(i, r) {
						function s(t) {
							try {
								c(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								c(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function c(t) {
							var e;
							t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(s, a)
						}
						c((o = o.apply(t, e || [])).next())
					}))
				};
			class me {
				constructor(t, e, n, o, i) {
					this.formBuilder = t, this.controlContainer = e, this.logService = n, this.lastPassDirectImportService = o, this.i18nService = i, this.formGroup = this.formBuilder.group({
						email: ["", {
							validators: [S.k0.required, S.k0.email],
							asyncValidators: [this.validateAndEmitData()],
							updateOn: "submit"
						}],
						includeSharedFolders: [!1]
					}), this.emailHint$ = this.formGroup.controls.email.statusChanges.pipe((0, W.T)((t => {
						if ("PENDING" === t) return this.i18nService.t("importingYourAccount")
					}))), this.csvDataLoaded = new u.bkB
				}
				ngOnInit() {
					this._parentFormGroup = this.controlContainer.control, this._parentFormGroup.addControl("lastpassOptions", this.formGroup)
				}
				ngOnDestroy() {
					this._parentFormGroup.removeControl("lastpassOptions")
				}
				validateAndEmitData() {
					return () => Fe(this, void 0, void 0, (function*() {
						try {
							const t = yield this.lastPassDirectImportService.handleImport(this.formGroup.controls.email.value, this.formGroup.controls.includeSharedFolders.value);
							return this.csvDataLoaded.emit(t), null
						} catch (t) {
							return this.logService.error(`LP importer error: ${t}`), {
								errors: {
									message: this.i18nService.t(this.getValidationErrorI18nKey(t))
								}
							}
						}
					}))
				}
				getValidationErrorI18nKey(t) {
					switch ("string" == typeof t ? t : null == t ? void 0 : t.message) {
						case "SSO auth cancelled":
						case "Second factor step is canceled by the user":
						case "Out of band step is canceled by the user":
							return "multifactorAuthenticationCancelled";
						case "No accounts to transform":
						case "Vault has not opened any accounts.":
							return "noLastPassDataFound";
						case "Invalid username":
						case "Invalid password":
							return "incorrectUsernameOrPassword";
						case "Second factor code is incorrect":
						case "Out of band authentication failed":
							return "multifactorAuthenticationFailed";
						case "unifiedloginresult":
							return "lastPassTryAgainCheckEmail";
						default:
							return "errorOccurred"
					}
				}
			}
			me.ɵfac = function(t) {
				return new(t || me)(u.rXU(S.ok), u.rXU(S.ZU), u.rXU(de.K), u.rXU(pe), u.rXU(ct.W))
			}, me.ɵcmp = u.VBU({
				type: me,
				selectors: [
					["import-lastpass"]
				],
				outputs: {
					csvDataLoaded: "csvDataLoaded"
				},
				standalone: !0,
				features: [u.aNF],
				decls: 25,
				vars: 10,
				consts: [
					[3, "formGroup"],
					["bitInput", "", "type", "text", "formControlName", "email"],
					["bitCheckbox", "", "type", "checkbox", "formControlName", "includeSharedFolders", "id", "import-lastpass_input_includeSharedFolders"]
				],
				template: function(t, e) {
					1 & t && (u.j41(0, "div", 0), u.EFF(1, "\n  "), u.j41(2, "bit-form-field"), u.EFF(3, "\n    "), u.j41(4, "bit-label"), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n    "), u.nrm(8, "input", 1), u.EFF(9, "\n    "), u.j41(10, "bit-hint"), u.EFF(11), u.nI1(12, "async"), u.k0s(), u.EFF(13, "\n  "), u.k0s(), u.EFF(14, "\n  "), u.j41(15, "bit-form-control"), u.EFF(16, "\n    "), u.nrm(17, "input", 2), u.EFF(18, "\n    "), u.j41(19, "bit-label"), u.EFF(20), u.nI1(21, "i18n"), u.k0s(), u.EFF(22, "\n  "), u.k0s(), u.EFF(23, "\n"), u.k0s(), u.EFF(24, "\n")), 2 & t && (u.Y8G("formGroup", e.formGroup), u.R7$(5), u.JRh(u.bMT(6, 4, "lastPassEmail")), u.R7$(6), u.JRh(u.bMT(12, 6, e.emailHint$)), u.R7$(9), u.JRh(u.bMT(21, 8, "includeSharedFolders")))
				},
				dependencies: [i.MD, i.Jj, r.p, p.$, ft.j, kt.E, x.L, he.f, C.m, Zt.s, G.J, P.h, S.X1, S.me, S.Zm, S.BC, S.cb, S.j4, S.JD, T.Q, It.q, fe.P],
				encapsulation: 2
			});
			var ge = n(18499),
				be = n(69855),
				ve = n(67553),
				Ee = n(33886),
				ye = n(68923),
				ke = n(44432),
				Ie = n(24374),
				we = n(17721),
				Se = n(59032),
				xe = function(t, e, n, o) {
					return new(n || (n = Promise))((function(i, r) {
						function s(t) {
							try {
								c(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								c(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function c(t) {
							var e;
							t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(s, a)
						}
						c((o = o.apply(t, e || [])).next())
					}))
				};

			function Re(t, e) {
				1 & t && (u.j41(0, "bit-callout", 22), u.EFF(1), u.nI1(2, "i18n"), u.k0s()), 2 & t && (u.R7$(), u.SpI("\n  ", u.bMT(2, 1, "personalOwnershipPolicyInEffectImports"), "\n"))
			}

			function Te(t, e) {
				1 & t && (u.nrm(0, "bit-option", 23), u.nI1(1, "i18n")), 2 & t && u.Y8G("label", u.bMT(1, 1, "myVault"))
			}

			function De(t, e) {
				if (1 & t && u.nrm(0, "bit-option", 24), 2 & t) {
					const t = e.$implicit;
					u.Y8G("value", t.id)("label", t.name)
				}
			}

			function Ae(t, e) {
				if (1 & t && u.nrm(0, "bit-option", 27), 2 & t) {
					const t = e.$implicit;
					u.Y8G("value", t)("label", t.name)
				}
			}

			function Ce(t, e) {
				if (1 & t && (u.qex(0), u.EFF(1, "\n            "), u.nrm(2, "bit-option", 25), u.nI1(3, "i18n"), u.EFF(4, "\n            "), u.DNE(5, Ae, 1, 2, "bit-option", 26), u.nI1(6, "async"), u.EFF(7, "\n          "), u.bVm()), 2 & t) {
					const t = u.XpG();
					u.R7$(2), u.Mz_("label", "-- ", u.bMT(3, 4, "selectImportFolder"), " --"), u.Y8G("value", null), u.R7$(3), u.Y8G("ngForOf", u.bMT(6, 6, t.folders$))
				}
			}

			function Ge(t, e) {
				if (1 & t && u.nrm(0, "bit-option", 29), 2 & t) {
					const t = e.$implicit;
					u.Y8G("value", t)("label", t.name)
				}
			}

			function Pe(t, e) {
				if (1 & t && (u.qex(0), u.EFF(1, "\n            "), u.nrm(2, "bit-option", 25), u.nI1(3, "i18n"), u.EFF(4, "\n            "), u.DNE(5, Ge, 1, 2, "bit-option", 28), u.nI1(6, "async"), u.EFF(7, "\n          "), u.bVm()), 2 & t) {
					const t = u.XpG();
					u.R7$(2), u.Mz_("label", "-- ", u.bMT(3, 4, "selectImportCollection"), " --"), u.Y8G("value", null), u.R7$(3), u.Y8G("ngForOf", u.bMT(6, 6, t.collections$))
				}
			}

			function $e(t, e) {
				if (1 & t && u.nrm(0, "bit-option", 25), 2 & t) {
					const t = e.$implicit;
					u.Y8G("value", t.id)("label", t.name)
				}
			}

			function Oe(t, e) {
				if (1 & t && u.nrm(0, "bit-option", 25), 2 & t) {
					const t = e.$implicit;
					u.Y8G("value", t.id)("label", t.name)
				}
			}

			function Ve(t, e) {
				if (1 & t && (u.qex(0), u.EFF(1, "\n            "), u.nrm(2, "bit-option", 30), u.EFF(3, "\n            "), u.DNE(4, Oe, 1, 2, "bit-option", 15), u.EFF(5, "\n          "), u.bVm()), 2 & t) {
					const t = u.XpG();
					u.R7$(4), u.Y8G("ngForOf", t.importOptions)
				}
			}

			function je(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          See detailed instructions on our help site at\n          "), u.j41(2, "a", 32), u.EFF(3, "\n            https://bitwarden.com/help/export-your-data/"), u.k0s(), u.EFF(4, "\n        "), u.bVm())
			}

			function Ue(t, e) {
				1 & t && (u.j41(0, "bit-radio-group", 36), u.EFF(1, "\n            "), u.j41(2, "bit-radio-button", 37), u.EFF(3, "\n              "), u.j41(4, "bit-label"), u.EFF(5), u.nI1(6, "i18n"), u.k0s(), u.EFF(7, "\n            "), u.k0s(), u.EFF(8, "\n            "), u.j41(9, "bit-radio-button", 38), u.EFF(10, "\n              "), u.j41(11, "bit-label"), u.EFF(12), u.nI1(13, "i18n"), u.k0s(), u.EFF(14, "\n            "), u.k0s(), u.EFF(15, "\n          "), u.k0s()), 2 & t && (u.R7$(5), u.JRh(u.bMT(6, 2, "importDirectlyFromLastPass")), u.R7$(7), u.JRh(u.bMT(13, 4, "importFromCSV")))
			}

			function Me(t, e) {
				if (1 & t && (u.qex(0), u.EFF(1, "\n          "), u.j41(2, "p", 33), u.EFF(3), u.nI1(4, "i18n"), u.j41(5, "a", 34), u.EFF(6, "\n              https://bitwarden.com/help/import-from-lastpass/"), u.k0s(), u.EFF(7, "\n          "), u.k0s(), u.EFF(8, "\n          "), u.DNE(9, Ue, 16, 6, "bit-radio-group", 35), u.EFF(10, "\n        "), u.bVm()), 2 & t) {
					const t = u.XpG(2);
					u.R7$(3), u.SpI("\n            ", u.bMT(4, 2, "seeDetailedInstructions"), "\n            "), u.R7$(6), u.Y8G("ngIf", t.showLastPassToggle)
				}
			}

			function Be(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the KeePassX desktop application, navigate to "Database" → "Export to CSV file"\n          and save the CSV file.\n        '), u.bVm())
			}

			function Ne(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          In the Avira web vault, go to "Settings" → "My Data" → "Export data" and save\n          the CSV file.\n        '), u.bVm())
			}

			function qe(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          In the Blur web vault, click your username at the top and go to "Settings" → "Export\n          Data", then click "Export CSV" for your "Accounts".\n        '), u.bVm())
			}

			function Ye(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the SaveInCloud desktop application, navigate to "File" → "Export" → "As\n          XML" and save the XML file.\n        '), u.bVm())
			}

			function Le(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Padlock desktop application, click the hamburger icon in the top left corner and\n          navigate to "Settings" → "Export" button and save the file "As CSV".\n        '), u.bVm())
			}

			function ze(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the KeePass 2 desktop application, navigate to "File" → "Export" and select the\n          "KeePass XML (2.x)" option.\n        '), u.bVm())
			}

			function Ke(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Universal Password Manager desktop application, navigate to "Database" →\n          "Export" and save the CSV file.\n        '), u.bVm())
			}

			function Je(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the SaferPass browser extension, click the hamburger icon in the top left corner and\n          navigate to "Settings". Click the "Export accounts" button to save the CSV file.\n        '), u.bVm())
			}

			function _e(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Meldium web vault, navigate to "Settings". Locate the "Export data" function and\n          click "Show me my data" to save the CSV file.\n        '), u.bVm())
			}

			function Xe(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email"\n          (top right) and select "Settings". Go to "Export" and find the "Export to .csv File"\n          option. Click "Export" to save the CSV file.\n        '), u.bVm())
			}

			function He(t, e) {
				1 & t && (u.j41(0, "span"), u.EFF(1, "\n            The process is exactly the same as importing from Google Chrome.\n          "), u.k0s())
			}

			function We(t, e) {
				if (1 & t && (u.qex(0), u.EFF(1, "\n          "), u.DNE(2, He, 2, 0, "span", 10), u.EFF(3, "\n          See detailed instructions on our help site at\n          "), u.j41(4, "a", 39), u.EFF(5, "\n            https://bitwarden.com/help/import-from-chrome/"), u.k0s(), u.EFF(6, "\n        "), u.bVm()), 2 & t) {
					const t = u.XpG(2);
					u.R7$(2), u.Y8G("ngIf", "chromecsv" !== t.format)
				}
			}

			function Qe(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          See detailed instructions on our help site at\n          "), u.j41(2, "a", 40), u.EFF(3, "\n            https://bitwarden.com/help/import-from-firefox/"), u.k0s(), u.EFF(4, ".\n        "), u.bVm())
			}

			function Ze(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          See detailed instructions on our help site at\n          "), u.j41(2, "a", 41), u.EFF(3, "\n            https://bitwarden.com/help/import-from-safari/"), u.k0s(), u.EFF(4, ".\n        "), u.bVm())
			}

			function tn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          See detailed instructions on our help site at\n          "), u.j41(2, "a", 42), u.EFF(3, "\n            https://bitwarden.com/help/import-from-1password/"), u.k0s(), u.EFF(4, ".\n        "), u.bVm())
			}

			function en(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Password Dragon desktop application, navigate to "File" → "Export" →\n          "To XML". In the dialog that pops up select "All Rows" and check all fields. Click the\n          "Export" button and save the XML file.\n        '), u.bVm())
			}

			function nn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Enpass desktop application, navigate to "File" → "Export" → "As CSV".\n          Select "OK" to the warning alert and save the CSV file. Note that the importer only\n          supports files exported while Enpass is set to the English language, so adjust your\n          settings accordingly.\n        '), u.bVm())
			}

			function on(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Enpass 6 desktop application, click the menu button and navigate to "File"\n          → "Export". Select the ".json" file format option and save the JSON file.\n        '), u.bVm())
			}

			function rn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Password Safe desktop application, navigate to "File" → "Export To" →\n          "XML format..." and save the XML file.\n        '), u.bVm())
			}

			function sn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log in to Dashlane, click on "My Account" → "Settings" → "Export file" and\n          select "Export as a CSV file". This will download a zip archive containing various CSV\n          files. Unzip the archive and import each CSV file individually.\n        '), u.bVm())
			}

			function an(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Dashlane no longer supports the JSON format. Only use this if you have an existing JSON\n          for import. Use the CSV importer when creating new exports.\n        "), u.bVm())
			}

			function cn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the mSecure desktop application, navigate to "File" → "Export" → "CSV\n          File..." and save the CSV file.\n        '), u.bVm())
			}

			function ln(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Sticky Password desktop application, navigate to "Menu" (top right) →\n          "Export" → "Export all". Select the unencrypted format XML option and save the XML\n          file.\n        '), u.bVm())
			}

			function un(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the True Key desktop application, click the gear icon (top right) and then navigate\n          to "App Settings". Click the "Export" button, enter your password and save the CSV file.\n        '), u.bVm())
			}

			function pn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log into the Clipperz web application (clipperz.is/app). Click the hamburger menu icon in\n          the top right to expand the navigation bar. Navigate to "Data" → "Export". Click the\n          "download HTML+JSON" button to save the HTML file.\n        '), u.bVm())
			}

			function dn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the RoboForm Editor desktop application, navigate to "RoboForm" (top left) →\n          "Options" → "Account & Data" and click the "Export" button. Select all of your\n          data, change the "Format" to "CSV file" and then click the "Export" button to save the CSV\n          file. Note: RoboForm only allows you to export Logins. Other items will not be exported.\n        '), u.bVm())
			}

			function hn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log into the Passbolt web vault and navigate to the "Passwords" listing. Select all of the\n          passwords you would like to export and click the "Export" button at the top of the\n          listing. Choose the "csv (lastpass)" export format and click the "Export" button.\n        '), u.bVm())
			}

			function fn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Ascendo DataVault desktop application, navigate to "Tools" → "Export". In\n          the dialog that pops up, select the "All Items (DVX, CSV)" option. Click the "Ok" button\n          to save the CSV file.\n        '), u.bVm())
			}

			function Fn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Password Boss desktop application, navigate to "File" → "Export data"\n          → "Password Boss JSON - not encrypted" and save the JSON file.\n        '), u.bVm())
			}

			function mn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log into the Zoho web vault (vault.zoho.com). Navigate to "Tools" → "Export Secrets".\n          Select "All Secrets" and click the "Zoho Vault Format CSV" button. Highlight and copy the\n          data from the textarea. Open a text editor like Notepad and paste the data. Save the data\n          from the text editor as\n          '), u.j41(2, "code"), u.EFF(3, "zoho_export.csv"), u.k0s(), u.EFF(4, ".\n        "), u.bVm())
			}

			function gn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the SplashID Safe desktop application, click on the SplashID blue lock logo in the\n          top right corner. Navigate to "Export" → "Export as CSV" and save the CSV file.\n        '), u.bVm())
			}

			function bn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the PassKeep mobile app, navigate to "Backup/Restore". Locate the "CSV\n          Backup/Restore" section and click "Backup to CSV" to save the CSV file.\n        '), u.bVm())
			}

			function vn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Make sure you have python-keyring and python-gnomekeyring installed. Save the\n          "), u.j41(2, "a", 43), u.EFF(3, "GNOME Keyring Import/Export"), u.k0s(), u.EFF(4, "\n          python script to your desktop as "), u.j41(5, "code"), u.EFF(6, "pw_helper.py"), u.k0s(), u.EFF(7, ". Open terminal and run\n          "), u.j41(8, "code"), u.EFF(9, "chmod +rx Desktop/pw_helper.py"), u.k0s(), u.EFF(10, " and then\n          "), u.j41(11, "code"), u.EFF(12, "python Desktop/pw_helper.py export Desktop/my_passwords.json"), u.k0s(), u.EFF(13, ". Then upload the\n          resulting "), u.j41(14, "code"), u.EFF(15, "my_passwords.json"), u.k0s(), u.EFF(16, " file here to Bitwarden.\n        "), u.bVm())
			}

			function En(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Using the Password Agent desktop application navigate to "File" → "Export", select\n          the "Fields to export" button and check all of the fields, change the "Output format" to\n          "CSV", and then click the "Start" button to save the CSV file.\n        '), u.bVm())
			}

			function yn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log into the Passpack website vault and navigate to "Settings" → "Export", then click\n          the "Download" button to save the CSV file.\n        '), u.bVm())
			}

			function kn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open your Passman vault and click on "Settings" in the bottom left corner. In the\n          "Settings" window switch to the "Export credentials" tab and choose "JSON" as the export\n          type. Enter your vault\'s passphrase and click the "Export" button to save the JSON file.\n        '), u.bVm())
			}

			function In(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Avast Passwords desktop application and navigate to "Settings" →\n          "Import/export data". Select the "Export" button for the "Export to CSV file" option to\n          save the CSV file.\n        '), u.bVm())
			}

			function wn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Avast Passwords desktop application and navigate to "Settings" →\n          "Import/export data". Select the "Export" button for the "Export to JSON file" option to\n          save the JSON file.\n        '), u.bVm())
			}

			function Sn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the F-Secure KEY desktop application and navigate to "Settings" → "Export\n          Passwords". Select the "Export" button, enter your master password, and save the FSK file.\n        '), u.bVm())
			}

			function xn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Kaspersky Password Manager desktop application and navigate to "Settings" →\n          "Import/Export". Locate the "Export to text file" section and select the "Export" button\n          to save the TXT file.\n        '), u.bVm())
			}

			function Rn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the RememBear desktop application and navigate to "Settings" → "Account" →\n          "Export". Enter your master password and select the "Export Anyway" button to save the CSV\n          file.\n        '), u.bVm())
			}

			function Tn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the PasswordWallet desktop application and navigate to "File" → "Export" →\n          "Visible entries to text file". Enter your password and select the "Ok" button to save the\n          TXT file.\n        '), u.bVm())
			}

			function Dn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Myki desktop browser extension and navigate to "Advanced" → "Export\n          Accounts" and then scan the QR code with your mobile device. Various CSV files will then\n          be saved to your computer\'s downloads folder.\n        '), u.bVm())
			}

			function An(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Export your SecureSafe password safe to a CSV file with a comma delimiter.\n        "), u.bVm())
			}

			function Cn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the LogMeOnce browser extension, then navigate to "Open Menu" → "Export To" and\n          select "CSV File" to save the CSV file.\n        '), u.bVm())
			}

			function Gn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the BlackBerry Password Keeper application, then navigate to "Settings" →\n          "Import/Export". Select "Export Passwords" and follow the instructions on screen to save\n          the unencrypted CSV file.\n        '), u.bVm())
			}

			function Pn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Buttercup desktop application and unlock your vault. Right click on your vault\'s\n          icon and select "Export" to save the CSV file.\n        '), u.bVm())
			}

			function $n(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Open the Codebook desktop application and log in. Navigate to "File" → "Export all",\n          then click "Yes" on the dialog and save the CSV file.\n        '), u.bVm())
			}

			function On(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Open the newest version of the Encryptr desktop application and allow all of your data to\n          sync. Once syncing of your data is complete, the download icon in the top right corner\n          will turn pink. Click the download icon and save the CSV file.\n        "), u.bVm())
			}

			function Vn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          From the Yoti browser extension, click on "Settings", then "Export Saved Logins" and save\n          the CSV file.\n        '), u.bVm())
			}

			function jn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log in to the Psono web vault, click on the "Signed in as"-dropdown, select "Others". Go\n          to the "Export"-tab and select the json type export and then click on Export.\n        '), u.bVm())
			}

			function Un(t, e) {
				1 & t && (u.qex(0), u.EFF(1, '\n          Log in to "https://vault.passky.org" → "Import & Export" → "Export" in the\n          Passky section. ("Backup" is unsupported as it is encrypted).\n        '), u.bVm())
			}

			function Mn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          In the ProtonPass browser extension, go to Settings > Export. Export without PGP\n          encryption and save the zip file.\n        "), u.bVm())
			}

			function Bn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Select Database → Export to file... menu. → Within the export options, ensure\n          Folder names and Column titles is checked. → Press Browse... button and choose the\n          target file and set it's type to CSV file.\n        "), u.bVm())
			}

			function Nn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Open the FullClient, go to the Main Menu and select Export. Start the export passwords\n          wizard and follow the instructions to export a CSV file.\n        "), u.bVm())
			}

			function qn(t, e) {
				1 & t && (u.qex(0), u.EFF(1, "\n          Log in to NordPass and open Settings → Scroll down to the Import and Export section\n          and select Export items → Enter your Master Password and select Continue. → Save\n          the CSV file on your device.\n        "), u.bVm())
			}

			function Yn(t, e) {
				if (1 & t && (u.j41(0, "bit-callout", 31), u.EFF(1, "\n        "), u.DNE(2, je, 5, 0, "ng-container", 10), u.EFF(3, "\n        "), u.DNE(4, Me, 11, 4, "ng-container", 10), u.EFF(5, "\n        "), u.DNE(6, Be, 2, 0, "ng-container", 10), u.EFF(7, "\n        "), u.DNE(8, Ne, 2, 0, "ng-container", 10), u.EFF(9, "\n        "), u.DNE(10, qe, 2, 0, "ng-container", 10), u.EFF(11, "\n        "), u.DNE(12, Ye, 2, 0, "ng-container", 10), u.EFF(13, "\n        "), u.DNE(14, Le, 2, 0, "ng-container", 10), u.EFF(15, "\n        "), u.DNE(16, ze, 2, 0, "ng-container", 10), u.EFF(17, "\n        "), u.DNE(18, Ke, 2, 0, "ng-container", 10), u.EFF(19, "\n        "), u.DNE(20, Je, 2, 0, "ng-container", 10), u.EFF(21, "\n        "), u.DNE(22, _e, 2, 0, "ng-container", 10), u.EFF(23, "\n        "), u.DNE(24, Xe, 2, 0, "ng-container", 10), u.EFF(25, "\n        "), u.EFF(26, "\n        "), u.DNE(27, We, 7, 1, "ng-container", 10), u.EFF(28, "\n        "), u.DNE(29, Qe, 5, 0, "ng-container", 10), u.EFF(30, "\n        "), u.DNE(31, Ze, 5, 0, "ng-container", 10), u.EFF(32, "\n        "), u.DNE(33, tn, 5, 0, "ng-container", 10), u.EFF(34, "\n        "), u.DNE(35, en, 2, 0, "ng-container", 10), u.EFF(36, "\n        "), u.DNE(37, nn, 2, 0, "ng-container", 10), u.EFF(38, "\n        "), u.DNE(39, on, 2, 0, "ng-container", 10), u.EFF(40, "\n        "), u.DNE(41, rn, 2, 0, "ng-container", 10), u.EFF(42, "\n        "), u.DNE(43, sn, 2, 0, "ng-container", 10), u.EFF(44, "\n        "), u.DNE(45, an, 2, 0, "ng-container", 10), u.EFF(46, "\n        "), u.DNE(47, cn, 2, 0, "ng-container", 10), u.EFF(48, "\n        "), u.DNE(49, ln, 2, 0, "ng-container", 10), u.EFF(50, "\n        "), u.DNE(51, un, 2, 0, "ng-container", 10), u.EFF(52, "\n        "), u.DNE(53, pn, 2, 0, "ng-container", 10), u.EFF(54, "\n        "), u.DNE(55, dn, 2, 0, "ng-container", 10), u.EFF(56, "\n        "), u.DNE(57, hn, 2, 0, "ng-container", 10), u.EFF(58, "\n        "), u.DNE(59, fn, 2, 0, "ng-container", 10), u.EFF(60, "\n        "), u.DNE(61, Fn, 2, 0, "ng-container", 10), u.EFF(62, "\n        "), u.DNE(63, mn, 5, 0, "ng-container", 10), u.EFF(64, "\n        "), u.DNE(65, gn, 2, 0, "ng-container", 10), u.EFF(66, "\n        "), u.DNE(67, bn, 2, 0, "ng-container", 10), u.EFF(68, "\n        "), u.DNE(69, vn, 17, 0, "ng-container", 10), u.EFF(70, "\n        "), u.DNE(71, En, 2, 0, "ng-container", 10), u.EFF(72, "\n        "), u.DNE(73, yn, 2, 0, "ng-container", 10), u.EFF(74, "\n        "), u.DNE(75, kn, 2, 0, "ng-container", 10), u.EFF(76, "\n        "), u.DNE(77, In, 2, 0, "ng-container", 10), u.EFF(78, "\n        "), u.DNE(79, wn, 2, 0, "ng-container", 10), u.EFF(80, "\n        "), u.DNE(81, Sn, 2, 0, "ng-container", 10), u.EFF(82, "\n        "), u.DNE(83, xn, 2, 0, "ng-container", 10), u.EFF(84, "\n        "), u.DNE(85, Rn, 2, 0, "ng-container", 10), u.EFF(86, "\n        "), u.DNE(87, Tn, 2, 0, "ng-container", 10), u.EFF(88, "\n        "), u.DNE(89, Dn, 2, 0, "ng-container", 10), u.EFF(90, "\n        "), u.DNE(91, An, 2, 0, "ng-container", 10), u.EFF(92, "\n        "), u.DNE(93, Cn, 2, 0, "ng-container", 10), u.EFF(94, "\n        "), u.DNE(95, Gn, 2, 0, "ng-container", 10), u.EFF(96, "\n        "), u.DNE(97, Pn, 2, 0, "ng-container", 10), u.EFF(98, "\n        "), u.DNE(99, $n, 2, 0, "ng-container", 10), u.EFF(100, "\n        "), u.DNE(101, On, 2, 0, "ng-container", 10), u.EFF(102, "\n        "), u.DNE(103, Vn, 2, 0, "ng-container", 10), u.EFF(104, "\n        "), u.DNE(105, jn, 2, 0, "ng-container", 10), u.EFF(106, "\n        "), u.DNE(107, Un, 2, 0, "ng-container", 10), u.EFF(108, "\n        "), u.DNE(109, Mn, 2, 0, "ng-container", 10), u.EFF(110, "\n        "), u.DNE(111, Bn, 2, 0, "ng-container", 10), u.EFF(112, "\n        "), u.DNE(113, Nn, 2, 0, "ng-container", 10), u.EFF(114, "\n        "), u.DNE(115, qn, 2, 0, "ng-container", 10), u.EFF(116, "\n      "), u.k0s()), 2 & t) {
					const t = u.XpG();
					u.FS9("title", t.getFormatInstructionTitle()), u.R7$(2), u.Y8G("ngIf", "bitwardencsv" === t.format || "bitwardenjson" === t.format), u.R7$(2), u.Y8G("ngIf", "lastpasscsv" === t.format), u.R7$(2), u.Y8G("ngIf", "keepassxcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "aviracsv" === t.format), u.R7$(2), u.Y8G("ngIf", "blurcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "safeincloudxml" === t.format), u.R7$(2), u.Y8G("ngIf", "padlockcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "keepass2xml" === t.format), u.R7$(2), u.Y8G("ngIf", "upmcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "saferpasscsv" === t.format), u.R7$(2), u.Y8G("ngIf", "meldiumcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "keepercsv" === t.format), u.R7$(3), u.Y8G("ngIf", "chromecsv" === t.format || "operacsv" === t.format || "vivaldicsv" === t.format), u.R7$(2), u.Y8G("ngIf", "firefoxcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "safaricsv" === t.format), u.R7$(2), u.Y8G("ngIf", "1password1pux" === t.format || "1password1pif" === t.format || "1passwordwincsv" === t.format || "1passwordmaccsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passworddragonxml" === t.format), u.R7$(2), u.Y8G("ngIf", "enpasscsv" === t.format), u.R7$(2), u.Y8G("ngIf", "enpassjson" === t.format), u.R7$(2), u.Y8G("ngIf", "pwsafexml" === t.format), u.R7$(2), u.Y8G("ngIf", "dashlanecsv" === t.format), u.R7$(2), u.Y8G("ngIf", "dashlanejson" === t.format), u.R7$(2), u.Y8G("ngIf", "msecurecsv" === t.format), u.R7$(2), u.Y8G("ngIf", "stickypasswordxml" === t.format), u.R7$(2), u.Y8G("ngIf", "truekeycsv" === t.format), u.R7$(2), u.Y8G("ngIf", "clipperzhtml" === t.format), u.R7$(2), u.Y8G("ngIf", "roboformcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passboltcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "ascendocsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passwordbossjson" === t.format), u.R7$(2), u.Y8G("ngIf", "zohovaultcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "splashidcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passkeepcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "gnomejson" === t.format), u.R7$(2), u.Y8G("ngIf", "passwordagentcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passpackcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passmanjson" === t.format), u.R7$(2), u.Y8G("ngIf", "avastcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "avastjson" === t.format), u.R7$(2), u.Y8G("ngIf", "fsecurefsk" === t.format), u.R7$(2), u.Y8G("ngIf", "kasperskytxt" === t.format), u.R7$(2), u.Y8G("ngIf", "remembearcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "passwordwallettxt" === t.format), u.R7$(2), u.Y8G("ngIf", "mykicsv" === t.format), u.R7$(2), u.Y8G("ngIf", "securesafecsv" === t.format), u.R7$(2), u.Y8G("ngIf", "logmeoncecsv" === t.format), u.R7$(2), u.Y8G("ngIf", "blackberrycsv" === t.format), u.R7$(2), u.Y8G("ngIf", "buttercupcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "codebookcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "encryptrcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "yoticsv" === t.format), u.R7$(2), u.Y8G("ngIf", "psonojson" === t.format), u.R7$(2), u.Y8G("ngIf", "passkyjson" === t.format), u.R7$(2), u.Y8G("ngIf", "protonpass" === t.format), u.R7$(2), u.Y8G("ngIf", "passwordxpcsv" === t.format), u.R7$(2), u.Y8G("ngIf", "netwrixpasswordsecure" === t.format), u.R7$(2), u.Y8G("ngIf", "nordpasscsv" === t.format)
				}
			}

			function Ln(t, e) {
				if (1 & t) {
					const t = u.RV6();
					u.j41(0, "import-lastpass", 44), u.bIt("csvDataLoaded", (function(e) {
						u.eBV(t);
						const n = u.XpG();
						return u.Njj(n.formGroup.controls.fileContents.setValue(e))
					})), u.k0s()
				}
				if (2 & t) {
					const t = u.XpG();
					u.Y8G("formGroup", t.formGroup)
				}
			}
			const zn = [(0, et.F)({
				provide: yt.RI,
				useClass: yt.Bd,
				deps: [ot.G]
			}), (0, et.F)({
				provide: yt.Tt,
				useClass: yt.XM,
				deps: [ut.p, pt.k, yt.RI, ct.W, tt.YD, Et.Lu, at.N, nt.tQ, rt.Di]
			})];
			class Kn {
				get organizationId() {
					return this._organizationId
				}
				set organizationId(t) {
					this._organizationId = t, this.organizationService.get$(this._organizationId).pipe((0, H.Q)(this.destroy$)).subscribe((t => {
						this._organizationId = null == t ? void 0 : t.id, this.organization = t
					}))
				}
				ngAfterViewInit() {
					this.bitSubmit.loading$.pipe((0, H.Q)(this.destroy$)).subscribe((t => {
						this.formLoading.emit(t)
					})), this.bitSubmit.disabled$.pipe((0, H.Q)(this.destroy$)).subscribe((t => {
						this.formDisabled.emit(t)
					}))
				}
				constructor(t, e, n, o, i, r, s, a, c, l, p, d, h, f) {
					this.i18nService = t, this.importService = e, this.platformUtilsService = n, this.policyService = o, this.logService = i, this.syncService = r, this.dialogService = s, this.folderService = a, this.organizationService = c, this.collectionService = l, this.formBuilder = p, this.importCollectionService = d, this.toastService = h, this.accountService = f, this.format = null, this.destroy$ = new z.B, this._importBlockedByPolicy = !1, this.isFromAC = !1, this.activeUserId$ = this.accountService.activeAccount$.pipe((0, W.T)((t => null == t ? void 0 : t.id))), this.formGroup = this.formBuilder.group({
						vaultSelector: ["myVault", {
							nonNullable: !0,
							validators: [S.k0.required]
						}],
						targetSelector: [null],
						format: [null, [S.k0.required]],
						fileContents: [],
						file: [],
						lastPassType: ["direct"]
					}), this.formLoading = new u.bkB, this.formDisabled = new u.bkB, this.onSuccessfulImport = new u.bkB, this.submit = () => xe(this, void 0, void 0, (function*() {
						yield this.asyncValidatorsFinished(), this.formGroup.invalid ? this.formGroup.markAllAsTouched() : yield this.performImport()
					}))
				}
				get importBlockedByPolicy() {
					return this._importBlockedByPolicy
				}
				get showLastPassToggle() {
					return "lastpasscsv" === this.format && (this.platformUtilsService.getClientType() === st.sK.Desktop || this.platformUtilsService.getClientType() === st.sK.Browser)
				}
				get showLastPassOptions() {
					return this.showLastPassToggle && "direct" === this.formGroup.controls.lastPassType.value
				}
				ngOnInit() {
					return xe(this, void 0, void 0, (function*() {
						this.setImportOptions(), yield this.initializeOrganizations(), this.organizationId && (yield this.canAccessImport(this.organizationId)) ? this.handleOrganizationImportInit() : this.handleImportInit(), this.formGroup.controls.format.valueChanges.pipe((0, H.Q)(this.destroy$)).subscribe((t => {
							this.format = t
						})), yield this.handlePolicies()
					}))
				}
				handleOrganizationImportInit() {
					this.formGroup.controls.vaultSelector.patchValue(this.organizationId), this.formGroup.controls.vaultSelector.disable(), this.collections$ = lt.A.asyncToObservable((() => this.importCollectionService.getAllAdminCollections(this.organizationId).then((t => t.sort(lt.A.getSortFunction(this.i18nService, "name")))))), this.isFromAC = !0
				}
				handleImportInit() {
					this.folders$ = this.activeUserId$.pipe((0, Q.n)((t => this.folderService.folderViews$(t))), (0, W.T)((t => t.filter((t => null != t.id))))), this.formGroup.controls.targetSelector.disable(), (0, K.z)([this.formGroup.controls.vaultSelector.valueChanges, this.organizations$]).pipe((0, H.Q)(this.destroy$)).subscribe((([t, e]) => {
						this.organizationId = "myVault" !== t ? t : void 0, this._importBlockedByPolicy || this.formGroup.controls.targetSelector.enable(), t && (this.collections$ = lt.A.asyncToObservable((() => this.collectionService.getAllDecrypted().then((e => e.filter((e => e.organizationId === t && e.manage)).sort(lt.A.getSortFunction(this.i18nService, "name")))))))
					})), this.formGroup.controls.vaultSelector.setValue("myVault")
				}
				initializeOrganizations() {
					return xe(this, void 0, void 0, (function*() {
						this.organizations$ = (0, J.x)(this.organizationService.memberOrganizations$.pipe((0, W.T)((t => t.filter((t => t.canAccessImport || t.canCreateNewCollections)))), (0, W.T)((t => t.sort(lt.A.getSortFunction(this.i18nService, "name"))))))
					}))
				}
				handlePolicies() {
					return xe(this, void 0, void 0, (function*() {
						(0, K.z)([this.policyService.policyAppliesToActiveUser$(it.tt.PersonalOwnership), this.organizations$]).pipe((0, H.Q)(this.destroy$)).subscribe((([t, e]) => {
							this._importBlockedByPolicy = t, t && 0 == e.length && this.formGroup.disable(), t && e.length > 0 && this.formGroup.controls.vaultSelector.setValue(e[0].id)
						}))
					}))
				}
				asyncValidatorsFinished() {
					return xe(this, void 0, void 0, (function*() {
						this.formGroup.pending && (yield(0, _._)(this.formGroup.statusChanges.pipe((0, Z.p)((t => "PENDING" !== t)))))
					}))
				}
				performImport() {
					return xe(this, void 0, void 0, (function*() {
						if (!(yield this.validateImport())) return;
						const t = this.importService.getImporter(this.format, (() => xe(this, void 0, void 0, (function*() {
							return yield this.getFilePassword()
						}))), this.organizationId);
						if (null === t) return void this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("selectFormat")
						});
						const e = yield this.setImportContents();
						if (null != e && "" !== e) try {
							const n = yield this.importService.import(t, e, this.organizationId, this.formGroup.controls.targetSelector.value, (yield this.canAccessImport(this.organizationId)) && this.isFromAC);
							this.dialogService.open(w, {
								data: n
							}), this.syncService.fullSync(!0), this.onSuccessfulImport.emit(this._organizationId)
						} catch (n) {
							this.dialogService.open(E, {
								data: n
							}), this.logService.error(n)
						} else this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("selectFile")
						})
					}))
				}
				canAccessImport(t) {
					return xe(this, void 0, void 0, (function*() {
						var e;
						return !!t && (null === (e = yield this.organizationService.get(this.organizationId)) || void 0 === e ? void 0 : e.canAccessImport)
					}))
				}
				getFormatInstructionTitle() {
					if (null == this.format) return null;
					const t = this.featuredImportOptions.concat(this.importOptions).filter((t => t.id === this.format));
					return t.length > 0 ? this.i18nService.t("instructionsFor", t[0].name) : null
				}
				setImportOptions() {
					this.featuredImportOptions = [...this.importService.featuredImportOptions], this.importOptions = [...this.importService.regularImportOptions].sort(((t, e) => null == t.name && null != e.name ? -1 : null != t.name && null == e.name ? 1 : null == t.name && null == e.name ? 0 : this.i18nService.collator ? this.i18nService.collator.compare(t.name, e.name) : t.name.localeCompare(e.name)))
				}
				setSelectedFile(t) {
					const e = t.target;
					this.fileSelected = e.files.length > 0 ? e.files[0] : null
				}
				getFileContents(t) {
					return "1password1pux" === this.format && t.name.endsWith(".1pux") ? this.extractZipContent(t, "export.data") : "protonpass" !== this.format || "application/zip" !== t.type && "application/x-zip-compressed" != t.type && !t.name.endsWith(".zip") ? new Promise(((e, n) => {
						const o = new FileReader;
						o.readAsText(t, "utf-8"), o.onload = o => {
							if ("lastpasscsv" === this.format && "text/html" === t.type) {
								const t = (new DOMParser).parseFromString(o.target.result, "text/html").querySelector("pre");
								return null != t ? void e(t.textContent) : void n()
							}
							e(o.target.result)
						}, o.onerror = () => {
							n()
						}
					})) : this.extractZipContent(t, "Proton Pass/data.json")
				}
				extractZipContent(t, e) {
					return (new L).loadAsync(t).then((t => t.file(e).async("string"))).then((function(t) {
						return t
					}), (function(t) {
						return ""
					}))
				}
				getFilePassword() {
					return xe(this, void 0, void 0, (function*() {
						const t = this.dialogService.open(U, {
							ariaModal: !0
						});
						return yield(0, X.s)(t.closed)
					}))
				}
				validateImport() {
					return xe(this, void 0, void 0, (function*() {
						if (this.organization) {
							if (!(yield this.dialogService.openSimpleDialog({
									title: {
										key: "warning"
									},
									content: {
										key: "importWarning",
										placeholders: [this.organization.name]
									},
									type: "warning"
								}))) return !1
						}
						return !this.importBlockedByPolicy || null != this.organizationId || (this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("personalOwnershipPolicyInEffectImports")
						}), !1)
					}))
				}
				setImportContents() {
					return xe(this, void 0, void 0, (function*() {
						const t = document.getElementById("import_input_file").files;
						let e = this.formGroup.controls.fileContents.value;
						if (null != t && t.length > 0) try {
							const n = yield this.getFileContents(t[0]);
							null != n && (e = n)
						} catch (n) {
							this.logService.error(n)
						}
						return e
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}
			Kn.ɵfac = function(t) {
				return new(t || Kn)(u.rXU(ct.W), u.rXU(yt.Tt), u.rXU(ce.y), u.rXU(ge.m), u.rXU(de.K), u.rXU(dt.H), u.rXU(oe.o), u.rXU(pt.k), u.rXU(ve.PV), u.rXU(tt.YD), u.rXU(S.ok), u.rXU(yt.H7, 8), u.rXU(be.f), u.rXU(rt.Di))
			}, Kn.ɵcmp = u.VBU({
				type: Kn,
				selectors: [
					["tools-import"]
				],
				viewQuery: function(t, e) {
					if (1 & t && u.GBs(V.L, 5), 2 & t) {
						let t;
						u.mGM(t = u.lsd()) && (e.bitSubmit = t.first)
					}
				},
				inputs: {
					organizationId: "organizationId"
				},
				outputs: {
					formLoading: "formLoading",
					formDisabled: "formDisabled",
					onSuccessfulImport: "onSuccessfulImport"
				},
				standalone: !0,
				features: [u.Jv_(zn), u.aNF],
				decls: 123,
				vars: 63,
				consts: [
					["fileSelector", ""],
					["type", "info", 4, "ngIf"],
					["id", "import_form_importForm", 3, "formGroup", "bitSubmit"],
					["bitTypography", "h6", 1, "tw-font-bold"],
					[3, "hidden"],
					["formControlName", "vaultSelector"],
					["value", "myVault", "icon", "bwi-user", 3, "label", 4, "ngIf"],
					["icon", "bwi-business", 3, "value", "label", 4, "ngFor", "ngForOf"],
					["disableMargin", ""],
					["formControlName", "targetSelector"],
					[4, "ngIf"],
					[1, "tw-w-1/2"],
					["formControlName", "format"],
					["value", "", 3, "label"],
					["value", "-", "disabled", "", 1, "tw-font-bold", "tw-text-muted", "tw-text-xs", 3, "label"],
					[3, "value", "label", 4, "ngFor", "ngForOf"],
					["type", "info", 3, "title", 4, "ngIf"],
					[3, "formGroup", "csvDataLoaded", 4, "ngIf"],
					[1, "file-selector", "tw-pt-2", "tw-pb-1"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "id", "import_input_file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"],
					["id", "import_textarea_fileContents", "bitInput", "", "formControlName", "fileContents"],
					["type", "info"],
					["value", "myVault", "icon", "bwi-user", 3, "label"],
					["icon", "bwi-business", 3, "value", "label"],
					[3, "value", "label"],
					["icon", "bwi-folder", 3, "value", "label", 4, "ngFor", "ngForOf"],
					["icon", "bwi-folder", 3, "value", "label"],
					["icon", "bwi-collection", 3, "value", "label", 4, "ngFor", "ngForOf"],
					["icon", "bwi-collection", 3, "value", "label"],
					["value", "-", "label", "--------------------------------------", "disabled", ""],
					["type", "info", 3, "title"],
					["bitLink", "", "linkType", "primary", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/export-your-data/"],
					["bitTypography", "body1"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/import-from-lastpass/"],
					["formControlName", "lastPassType", 4, "ngIf"],
					["formControlName", "lastPassType"],
					["id", "import_bit-radio-button_lp-direct", "value", "direct", 1, "tw-block"],
					["id", "import_bit-radio-button_lp-csv", "value", "csv", 1, "tw-block"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/import-from-chrome/"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/import-from-firefox/"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/import-from-safari/"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/import-from-1password/"],
					["target", "_blank", "rel", "noreferrer", "href", "https://bit.ly/2GpOMTg"],
					[3, "csvDataLoaded", "formGroup"]
				],
				template: function(t, e) {
					if (1 & t) {
						const t = u.RV6();
						u.DNE(0, Re, 3, 3, "bit-callout", 1), u.EFF(1, "\n"), u.j41(2, "form", 2), u.EFF(3, "\n  "), u.j41(4, "bit-section"), u.EFF(5, "\n    "), u.j41(6, "bit-section-header"), u.EFF(7, "\n      "), u.j41(8, "h2", 3), u.EFF(9), u.nI1(10, "i18n"), u.k0s(), u.EFF(11, "\n    "), u.k0s(), u.EFF(12, "\n    "), u.j41(13, "bit-card"), u.EFF(14, "\n      "), u.j41(15, "bit-form-field", 4), u.EFF(16, "\n        "), u.j41(17, "bit-label"), u.EFF(18), u.nI1(19, "i18n"), u.k0s(), u.EFF(20, "\n        "), u.j41(21, "bit-select", 5), u.EFF(22, "\n          "), u.DNE(23, Te, 2, 3, "bit-option", 6), u.EFF(24, "\n          "), u.DNE(25, De, 1, 2, "bit-option", 7), u.nI1(26, "async"), u.EFF(27, "\n        "), u.k0s(), u.EFF(28, "\n      "), u.k0s(), u.EFF(29, "\n      "), u.j41(30, "bit-form-field", 8), u.EFF(31, "\n        "), u.j41(32, "bit-label"), u.EFF(33), u.nI1(34, "i18n"), u.nI1(35, "i18n"), u.k0s(), u.EFF(36, "\n        "), u.j41(37, "bit-select", 9), u.EFF(38, "\n          "), u.DNE(39, Ce, 8, 8, "ng-container", 10), u.EFF(40, "\n          "), u.DNE(41, Pe, 8, 8, "ng-container", 10), u.EFF(42, "\n        "), u.k0s(), u.EFF(43, "\n        "), u.j41(44, "bit-hint"), u.EFF(45), u.nI1(46, "i18n"), u.nI1(47, "lowercase"), u.nI1(48, "i18n"), u.nI1(49, "lowercase"), u.nI1(50, "i18n"), u.k0s(), u.EFF(51, "\n      "), u.k0s(), u.EFF(52, "\n    "), u.k0s(), u.EFF(53, "\n  "), u.k0s(), u.EFF(54, "\n\n  "), u.j41(55, "bit-section"), u.EFF(56, "\n    "), u.j41(57, "bit-section-header"), u.EFF(58, "\n      "), u.j41(59, "h2", 3), u.EFF(60), u.nI1(61, "i18n"), u.k0s(), u.EFF(62, "\n    "), u.k0s(), u.EFF(63, "\n    "), u.j41(64, "bit-card"), u.EFF(65, "\n      "), u.j41(66, "bit-form-field", 11), u.EFF(67, "\n        "), u.j41(68, "bit-label"), u.EFF(69), u.nI1(70, "i18n"), u.k0s(), u.EFF(71, "\n        "), u.j41(72, "bit-select", 12), u.EFF(73, "\n          "), u.nrm(74, "bit-option", 13), u.nI1(75, "i18n"), u.EFF(76, "\n          "), u.nrm(77, "bit-option", 14), u.nI1(78, "i18n"), u.EFF(79, "\n          "), u.DNE(80, $e, 1, 2, "bit-option", 15), u.EFF(81, "\n          "), u.DNE(82, Ve, 6, 1, "ng-container", 10), u.EFF(83, "\n        "), u.k0s(), u.EFF(84, "\n      "), u.k0s(), u.EFF(85, "\n      "), u.DNE(86, Yn, 117, 58, "bit-callout", 16), u.EFF(87, "\n      "), u.DNE(88, Ln, 1, 1, "import-lastpass", 17), u.EFF(89, "\n      "), u.j41(90, "div", 4), u.EFF(91, "\n        "), u.j41(92, "bit-form-field"), u.EFF(93, "\n          "), u.j41(94, "bit-label"), u.EFF(95), u.nI1(96, "i18n"), u.k0s(), u.EFF(97, "\n          "), u.j41(98, "div", 18), u.EFF(99, "\n            "), u.j41(100, "button", 19), u.bIt("click", (function() {
							u.eBV(t);
							const e = u.sdS(107);
							return u.Njj(e.click())
						})), u.EFF(101), u.nI1(102, "i18n"), u.k0s(), u.EFF(103), u.nI1(104, "i18n"), u.k0s(), u.EFF(105, "\n          "), u.j41(106, "input", 20, 0), u.bIt("change", (function(n) {
							return u.eBV(t), u.Njj(e.setSelectedFile(n))
						})), u.k0s(), u.EFF(108, "\n        "), u.k0s(), u.EFF(109, "\n        "), u.j41(110, "bit-form-field", 8), u.EFF(111, "\n          "), u.j41(112, "bit-label"), u.EFF(113), u.nI1(114, "i18n"), u.k0s(), u.EFF(115, "\n          "), u.nrm(116, "textarea", 21), u.EFF(117, "\n        "), u.k0s(), u.EFF(118, "\n      "), u.k0s(), u.EFF(119, "\n    "), u.k0s(), u.EFF(120, "\n  "), u.k0s(), u.EFF(121, "\n"), u.k0s(), u.EFF(122, "\n")
					}
					2 & t && (u.Y8G("ngIf", e.importBlockedByPolicy), u.R7$(2), u.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), u.R7$(7), u.JRh(u.bMT(10, 26, "destination")), u.R7$(6), u.Y8G("hidden", e.isFromAC), u.R7$(3), u.JRh(u.bMT(19, 28, "vault")), u.R7$(5), u.Y8G("ngIf", !e.importBlockedByPolicy), u.R7$(2), u.Y8G("ngForOf", u.bMT(26, 30, e.organizations$)), u.R7$(8), u.JRh(e.organizationId ? u.bMT(34, 32, "collection") : u.bMT(35, 34, "folder")), u.R7$(6), u.Y8G("ngIf", !e.organizationId), u.R7$(2), u.Y8G("ngIf", e.organizationId), u.R7$(4), u.JRh(u.i5U(50, 44, "importTargetHint", e.organizationId ? u.bMT(47, 38, u.bMT(46, 36, "collection")) : u.bMT(49, 42, u.bMT(48, 40, "folder")))), u.R7$(15), u.JRh(u.bMT(61, 47, "data")), u.R7$(9), u.JRh(u.bMT(70, 49, "fileFormat")), u.R7$(5), u.Mz_("label", "-- ", u.bMT(75, 51, "select"), " --"), u.R7$(3), u.FS9("label", u.bMT(78, 53, "commonImportFormats")), u.R7$(3), u.Y8G("ngForOf", e.featuredImportOptions), u.R7$(2), u.Y8G("ngIf", e.importOptions && e.importOptions.length), u.R7$(4), u.Y8G("ngIf", e.format), u.R7$(2), u.Y8G("ngIf", e.showLastPassOptions), u.R7$(2), u.Y8G("hidden", e.showLastPassOptions), u.R7$(5), u.JRh(u.bMT(96, 55, "selectImportFile")), u.R7$(6), u.SpI("\n              ", u.bMT(102, 57, "chooseFile"), "\n            "), u.R7$(2), u.SpI("\n            ", e.fileSelected ? e.fileSelected.name : u.bMT(104, 59, "noFileChosen"), "\n          "), u.R7$(10), u.JRh(u.bMT(114, 61, "orCopyPasteFileContents")))
				},
				dependencies: [i.MD, i.Sq, i.bT, i.Jj, i.GH, r.p, p.$, x.L, C.m, Zt.s, G.J, P.h, R.C, V.L, l.t, g.Q, T.Q, ht.p, Ee.w, ye.P, ft.j, ke.G, S.X1, S.qT, S.me, S.BC, S.cb, S.j4, S.JD, me, Ft.K, Ie.d, we.Y, mt.i, gt.U, bt.n, vt.V, Se.L],
				encapsulation: 2
			})
		},
		25156: () => {}
	}
]);
//# sourceMappingURL=807.ed1e3a79eb4208955bd9.js.map