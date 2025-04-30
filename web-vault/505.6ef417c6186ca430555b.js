"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[505], {
		31505: (e, t, n) => {
			n.r(t), n.d(t, {
				MigrateFromLegacyEncryptionComponent: () => X
			});
			var i = n(51757),
				r = n(72245),
				o = n(83516),
				s = n(39488),
				c = n(22848),
				a = n(25065),
				u = n(62600),
				l = n(31362),
				d = n(56111),
				y = n(35500),
				p = n(50700),
				h = n(56962),
				F = n(69855),
				m = n(21274),
				b = n(49519),
				f = n(41103),
				v = n(26657),
				w = n(45154),
				k = n(56898),
				g = n(44432),
				E = n(86226),
				S = n(97553),
				U = n(43759),
				T = n(76356),
				j = n(69896),
				I = n(36288),
				R = n(58806),
				x = n(88016),
				G = function(e, t, n, i) {
					return new(n || (n = Promise))((function(r, o) {
						function s(e) {
							try {
								a(i.next(e))
							} catch (t) {
								o(t)
							}
						}

						function c(e) {
							try {
								a(i.throw(e))
							} catch (t) {
								o(t)
							}
						}

						function a(e) {
							var t;
							e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							}))).then(s, c)
						}
						a((i = i.apply(e, t || [])).next())
					}))
				};
			class X {
				constructor(e, t, n, o, s, c, a, u, l, d) {
					this.accountService = e, this.keyRotationService = t, this.i18nService = n, this.keyService = o, this.messagingService = s, this.logService = c, this.syncService = a, this.toastService = u, this.dialogService = l, this.folderApiService = d, this.formGroup = new i.gE({
						masterPassword: new i.MJ("", [i.k0.required])
					}), this.submit = () => G(this, void 0, void 0, (function*() {
						if (this.formGroup.markAsTouched(), this.formGroup.invalid) return;
						const e = yield(0, r._)(this.accountService.activeAccount$);
						if (yield this.keyService.hasUserKey(e.id)) throw this.messagingService.send("logout"), new Error("User key already exists, cannot migrate legacy encryption.");
						const t = this.formGroup.value.masterPassword;
						try {
							yield this.syncService.fullSync(!1, !0), yield this.keyRotationService.rotateUserKeyAndEncryptedData(t, e), this.toastService.showToast({
								variant: "success",
								title: this.i18nService.t("keyUpdated"),
								message: this.i18nService.t("logBackInOthersToo"),
								timeout: 15e3
							}), this.messagingService.send("logout")
						} catch (n) {
							if ("All existing folders must be included in the rotation." === n.message) {
								if (yield this.dialogService.openSimpleDialog({
										type: "warning",
										title: {
											key: "encryptionKeyUpdateCannotProceed"
										},
										content: {
											key: "keyUpdateFoldersFailed"
										},
										acceptButtonText: {
											key: "ok"
										},
										cancelButtonText: {
											key: "cancel"
										}
									})) return yield this.folderApiService.deleteAll(e.id), yield this.syncService.fullSync(!0, !0), void(yield this.submit())
							}
							throw this.logService.error(n), n
						}
					}))
				}
			}
			X.ɵfac = function(e) {
				return new(e || X)(d.rXU(y.Di), d.rXU(l.y), d.rXU(p.W), d.rXU(c.Lu), d.rXU(o.U), d.rXU(h.K), d.rXU(s.H), d.rXU(F.f), d.rXU(m.o), d.rXU(f.w))
			}, X.ɵcmp = d.VBU({
				type: X,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [d.aNF],
				decls: 43,
				vars: 20,
				consts: [
					[3, "formGroup", "bitSubmit"],
					[1, "tw-mt-12", "tw-flex", "tw-justify-center"],
					[1, "tw-max-w-xl"],
					["bitTypography", "h1", 1, "tw-mb-4", "tw-text-center"],
					[1, "tw-block", "tw-rounded", "tw-border", "tw-border-solid", "tw-border-secondary-300", "tw-bg-background", "tw-p-8"],
					["href", "https://bitwarden.com/help/account-encryption-key/#rotate-your-encryption-key", "target", "_blank", "rel", "noreferrer"],
					["type", "warning"],
					["id", "masterPassword", "bitInput", "", "type", "password", "formControlName", "masterPassword", "appAutofocus", ""],
					["type", "button", "bitIconButton", "", "bitSuffix", "", "bitPasswordInputToggle", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", "block", ""]
				],
				template: function(e, t) {
					1 & e && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "div", 1), d.EFF(3, "\n    "), d.j41(4, "div", 2), d.EFF(5, "\n      "), d.j41(6, "h1", 3), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n      "), d.j41(10, "div", 4), d.EFF(11, "\n        "), d.j41(12, "p"), d.EFF(13), d.nI1(14, "i18n"), d.j41(15, "a", 5), d.EFF(16), d.nI1(17, "i18n"), d.k0s(), d.EFF(18, "\n        "), d.k0s(), d.EFF(19, "\n        "), d.j41(20, "bit-callout", 6), d.EFF(21), d.nI1(22, "i18n"), d.k0s(), d.EFF(23, "\n\n        "), d.j41(24, "bit-form-field"), d.EFF(25, "\n          "), d.j41(26, "bit-label"), d.EFF(27), d.nI1(28, "i18n"), d.k0s(), d.EFF(29, "\n          "), d.nrm(30, "input", 7), d.EFF(31, "\n          "), d.nrm(32, "button", 8), d.EFF(33, "\n        "), d.k0s(), d.EFF(34, "\n        "), d.j41(35, "button", 9), d.EFF(36), d.nI1(37, "i18n"), d.k0s(), d.EFF(38, "\n      "), d.k0s(), d.EFF(39, "\n    "), d.k0s(), d.EFF(40, "\n  "), d.k0s(), d.EFF(41, "\n"), d.k0s(), d.EFF(42, "\n")), 2 & e && (d.Y8G("formGroup", t.formGroup)("bitSubmit", t.submit), d.R7$(7), d.JRh(d.bMT(8, 8, "updateEncryptionKey")), d.R7$(6), d.SpI("\n          ", d.bMT(14, 10, "updateEncryptionSchemeDesc"), "\n          "), d.R7$(3), d.JRh(d.bMT(17, 12, "learnMore")), d.R7$(5), d.JRh(d.bMT(22, 14, "updateEncryptionKeyWarning")), d.R7$(6), d.JRh(d.bMT(28, 16, "masterPass")), d.R7$(9), d.SpI("\n          ", d.bMT(37, 18, "updateEncryptionKey"), "\n        "))
				},
				dependencies: [a.G, i.qT, i.me, i.BC, i.cb, i.j4, i.JD, b.B, v.$, w.L, k.Q, g.G, E.m, S.J, U.h, T.e, j.a, I.s, R.r, x.$, u.H],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=505.6ef417c6186ca430555b.js.map