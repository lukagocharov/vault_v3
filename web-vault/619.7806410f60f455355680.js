"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[619], {
		28619: (n, t, o) => {
			o.r(t), o.d(t, {
				OrganizationVaultExportComponent: () => p
			});
			var e = o(86573),
				r = o(25065),
				i = o(56111),
				a = o(89459),
				u = o(26657),
				s = o(56898),
				c = o(10672),
				d = o(88016),
				l = o(20464),
				f = function(n, t, o, e) {
					return new(o || (o = Promise))((function(r, i) {
						function a(n) {
							try {
								s(e.next(n))
							} catch (t) {
								i(t)
							}
						}

						function u(n) {
							try {
								s(e.throw(n))
							} catch (t) {
								i(t)
							}
						}

						function s(n) {
							var t;
							n.done ? r(n.value) : (t = n.value, t instanceof o ? t : new o((function(n) {
								n(t)
							}))).then(a, u)
						}
						s((e = e.apply(n, t || [])).next())
					}))
				};
			class p {
				constructor(n) {
					this.route = n, this.routeOrgId = null, this.loading = !1, this.disabled = !1
				}
				ngOnInit() {
					return f(this, void 0, void 0, (function*() {
						this.routeOrgId = this.route.snapshot.paramMap.get("organizationId")
					}))
				}
				onSuccessfulExport(n) {
					return f(this, void 0, void 0, (function*() {}))
				}
			}
			p.ɵfac = function(n) {
				return new(n || p)(i.rXU(a.nX))
			}, p.ɵcmp = i.VBU({
				type: p,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [i.aNF],
				decls: 11,
				vars: 6,
				consts: [
					[3, "formDisabled", "formLoading", "onSuccessfulExport", "organizationId"],
					["form", "export_form_exportForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]
				],
				template: function(n, t) {
					1 & n && (i.nrm(0, "app-header"), i.EFF(1, "\n\n"), i.j41(2, "bit-container"), i.EFF(3, "\n  "), i.j41(4, "tools-export", 0), i.bIt("formDisabled", (function(n) {
						return t.disabled = n
					}))("formLoading", (function(n) {
						return t.loading = n
					}))("onSuccessfulExport", (function(n) {
						return t.onSuccessfulExport(n)
					})), i.k0s(), i.EFF(5, "\n  "), i.j41(6, "button", 1), i.EFF(7), i.nI1(8, "i18n"), i.k0s(), i.EFF(9, "\n"), i.k0s(), i.EFF(10, "\n")), 2 & n && (i.R7$(4), i.FS9("organizationId", t.routeOrgId), i.R7$(2), i.Y8G("disabled", t.disabled)("loading", t.loading), i.R7$(), i.SpI("\n    ", i.bMT(8, 4, "confirmFormat"), "\n  "))
				},
				dependencies: [r.G, u.$, s.Q, c.H, d.$, e.i, r.T, l.f],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=619.7806410f60f455355680.js.map