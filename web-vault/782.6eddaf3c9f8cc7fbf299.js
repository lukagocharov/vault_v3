"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[782], {
		74782: (n, t, o) => {
			o.r(t), o.d(t, {
				ImportWebComponent: () => m
			});
			var e = o(17530),
				i = o(42594),
				r = o(25065),
				a = o(56111),
				s = o(89459),
				u = o(26657),
				c = o(56898),
				l = o(10672),
				d = o(88016),
				f = o(20464),
				p = function(n, t, o, e) {
					return new(o || (o = Promise))((function(i, r) {
						function a(n) {
							try {
								u(e.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								u(e.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function u(n) {
							var t;
							n.done ? i(n.value) : (t = n.value, t instanceof o ? t : new o((function(n) {
								n(t)
							}))).then(a, s)
						}
						u((e = e.apply(n, t || [])).next())
					}))
				};
			class m {
				constructor(n) {
					this.router = n, this.loading = !1, this.disabled = !1
				}
				onSuccessfulImport(n) {
					return p(this, void 0, void 0, (function*() {
						yield this.router.navigate(["vault"])
					}))
				}
			}
			m.ɵfac = function(n) {
				return new(n || m)(a.rXU(s.Ix))
			}, m.ɵcmp = a.VBU({
				type: m,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [a.aNF],
				decls: 11,
				vars: 5,
				consts: [
					[3, "formDisabled", "formLoading", "onSuccessfulImport"],
					["form", "import_form_importForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]
				],
				template: function(n, t) {
					1 & n && (a.nrm(0, "app-header"), a.EFF(1, "\n\n"), a.j41(2, "bit-container"), a.EFF(3, "\n  "), a.j41(4, "tools-import", 0), a.bIt("formDisabled", (function(n) {
						return t.disabled = n
					}))("formLoading", (function(n) {
						return t.loading = n
					}))("onSuccessfulImport", (function(n) {
						return t.onSuccessfulImport(n)
					})), a.k0s(), a.EFF(5, "\n  "), a.j41(6, "button", 1), a.EFF(7), a.nI1(8, "i18n"), a.k0s(), a.EFF(9, "\n"), a.k0s(), a.EFF(10, "\n")), 2 & n && (a.R7$(6), a.Y8G("disabled", t.disabled)("loading", t.loading), a.R7$(), a.SpI("\n    ", a.bMT(8, 3, "importData"), "\n  "))
				},
				dependencies: [r.G, u.$, c.Q, l.H, d.$, e.Pi, i.G, f.f],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=782.6eddaf3c9f8cc7fbf299.js.map