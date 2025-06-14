"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[825], {
		33825: (e, t, n) => {
			n.r(t), n.d(t, {
				AcceptEmergencyComponent: () => E
			});
			var i = n(72245),
				c = n(49700),
				s = n(80885),
				r = n(25065),
				a = n(9413),
				o = n(80755),
				u = n(56111),
				l = n(89459),
				d = n(37115),
				p = n(50700),
				F = n(68455),
				m = n(52981),
				h = n(56898),
				g = n(58806),
				y = n(88016),
				f = function(e, t, n, i) {
					return new(n || (n = Promise))((function(c, s) {
						function r(e) {
							try {
								o(i.next(e))
							} catch (t) {
								s(t)
							}
						}

						function a(e) {
							try {
								o(i.throw(e))
							} catch (t) {
								s(t)
							}
						}

						function o(e) {
							var t;
							e.done ? c(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							}))).then(r, a)
						}
						o((i = i.apply(e, t || [])).next())
					}))
				};
			const v = e => ({
				email: e
			});

			function b(e, t) {
				1 & e && (u.j41(0, "div", 2), u.EFF(1, "\n  "), u.j41(2, "div"), u.EFF(3, "\n    "), u.j41(4, "p", 3), u.EFF(5, "\n      "), u.nrm(6, "i", 4), u.nI1(7, "i18n"), u.EFF(8, "\n      "), u.j41(9, "span", 5), u.EFF(10), u.nI1(11, "i18n"), u.k0s(), u.EFF(12, "\n    "), u.k0s(), u.EFF(13, "\n  "), u.k0s(), u.EFF(14, "\n"), u.k0s()), 2 & e && (u.R7$(6), u.FS9("title", u.bMT(7, 2, "loading")), u.R7$(4), u.JRh(u.bMT(11, 4, "loading")))
			}

			function k(e, t) {
				if (1 & e) {
					const e = u.RV6();
					u.j41(0, "div"), u.EFF(1, "\n  "), u.j41(2, "p", 6), u.EFF(3), u.k0s(), u.EFF(4, "\n  "), u.j41(5, "p", 7), u.EFF(6), u.nI1(7, "i18n"), u.k0s(), u.EFF(8, "\n  "), u.nrm(9, "hr"), u.EFF(10, "\n  "), u.j41(11, "div", 8), u.EFF(12, "\n    "), u.j41(13, "a", 9), u.EFF(14), u.nI1(15, "i18n"), u.k0s(), u.EFF(16, "\n    "), u.j41(17, "button", 10), u.bIt("click", (function() {
						u.eBV(e);
						const t = u.XpG();
						return u.Njj(t.register())
					})), u.EFF(18), u.nI1(19, "i18n"), u.k0s(), u.EFF(20, "\n  "), u.k0s(), u.EFF(21, "\n"), u.k0s()
				}
				if (2 & e) {
					const e = u.XpG();
					u.R7$(3), u.SpI("\n    ", e.name, "\n  "), u.R7$(3), u.JRh(u.bMT(7, 7, "acceptEmergencyAccess")), u.R7$(7), u.Y8G("queryParams", u.eq3(13, v, e.email))("block", !0), u.R7$(), u.SpI("\n      ", u.bMT(15, 9, "logIn"), "\n    "), u.R7$(3), u.Y8G("block", !0), u.R7$(), u.SpI("\n      ", u.bMT(19, 11, "createAccount"), "\n    ")
				}
			}
			class E extends s.X {
				constructor(e, t, n, i, c, s, r) {
					super(e, t, n, i, c, s), this.emergencyAccessService = r, this.requiredParameters = ["id", "name", "email", "token"], this.failedShortMessage = "emergencyInviteAcceptFailedShort", this.failedMessage = "emergencyInviteAcceptFailed"
				}
				authedHandler(e) {
					return f(this, void 0, void 0, (function*() {
						this.actionPromise = this.emergencyAccessService.accept(e.id, e.token), yield this.actionPromise, this.platformUtilService.showToast("success", this.i18nService.t("inviteAccepted"), this.i18nService.t("emergencyInviteAcceptedDesc"), {
							timeout: 1e4
						}), this.router.navigate(["/vault"])
					}))
				}
				unauthedHandler(e) {
					return f(this, void 0, void 0, (function*() {
						this.name = e.name, null != this.name && (this.name = this.name.replace(/\+/g, " ")), e.id && (this.emergencyAccessId = e.id), e.token && (this.acceptEmergencyAccessInviteToken = e.token)
					}))
				}
				register() {
					return f(this, void 0, void 0, (function*() {
						let e, t = yield(0, i._)(this.registerRoute$);
						"/register" === t ? e = {
							email: this.email
						} : "/signup" === t && (t = "/finish-signup", e = {
							email: this.email,
							acceptEmergencyAccessInviteToken: this.acceptEmergencyAccessInviteToken,
							emergencyAccessId: this.emergencyAccessId
						}), yield this.router.navigate([t], {
							queryParams: e
						})
					}))
				}
			}
			E.ɵfac = function(e) {
				return new(e || E)(u.rXU(l.Ix), u.rXU(d.y), u.rXU(p.W), u.rXU(l.nX), u.rXU(F.u), u.rXU(c.cR), u.rXU(o.p))
			}, E.ɵcmp = u.VBU({
				type: E,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.Vt3, u.aNF],
				decls: 4,
				vars: 2,
				consts: [
					["class", "tw-mt-5 tw-flex tw-justify-center", 4, "ngIf"],
					[4, "ngIf"],
					[1, "tw-mt-5", "tw-flex", "tw-justify-center"],
					[1, "tw-text-center"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "bwi-2x", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["bitTypography", "body1", 1, "tw-text-center"],
					["bitTypography", "body1"],
					[1, "tw-flex", "tw-gap-2"],
					["bitButton", "", "buttonType", "primary", "routerLink", "/login", 3, "queryParams", "block"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "click", "block"]
				],
				template: function(e, t) {
					1 & e && (u.DNE(0, b, 15, 6, "div", 0), u.EFF(1, "\n"), u.DNE(2, k, 22, 15, "div", 1), u.EFF(3, "\n")), 2 & e && (u.Y8G("ngIf", t.loading), u.R7$(2), u.Y8G("ngIf", !t.loading && !t.authed))
				},
				dependencies: [r.G, m.bT, l.Wk, h.Q, g.r, y.$, a.S],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=825.89c101434f08c1d5dfa0.js.map