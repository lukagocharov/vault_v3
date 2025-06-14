"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[506], {
		79506: (n, t, o) => {
			o.r(t), o.d(t, {
				OrgImportComponent: () => F
			});
			var e = o(72245),
				i = o(44451),
				r = o(67553),
				a = o(28020),
				c = o(17530),
				s = o(25065),
				u = o(56111),
				l = function(n, t, o, e) {
					return new(o || (o = Promise))((function(i, r) {
						function a(n) {
							try {
								s(e.next(n))
							} catch (t) {
								r(t)
							}
						}

						function c(n) {
							try {
								s(e.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							var t;
							n.done ? i(n.value) : (t = n.value, t instanceof o ? t : new o((function(n) {
								n(t)
							}))).then(a, c)
						}
						s((e = e.apply(n, t || [])).next())
					}))
				};
			class d {
				constructor(n) {
					this.collectionAdminService = n
				}
				getAllAdminCollections(n) {
					return l(this, void 0, void 0, (function*() {
						return yield this.collectionAdminService.getAll(n)
					}))
				}
			}
			d.ɵfac = function(n) {
				return new(n || d)(u.KVO(i.vE))
			}, d.ɵprov = u.jDH({
				token: d,
				factory: d.ɵfac
			});
			var f = o(89459),
				p = o(26657),
				m = o(56898),
				h = o(10672),
				v = o(88016),
				g = o(20464),
				b = function(n, t, o, e) {
					return new(o || (o = Promise))((function(i, r) {
						function a(n) {
							try {
								s(e.next(n))
							} catch (t) {
								r(t)
							}
						}

						function c(n) {
							try {
								s(e.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							var t;
							n.done ? i(n.value) : (t = n.value, t instanceof o ? t : new o((function(n) {
								n(t)
							}))).then(a, c)
						}
						s((e = e.apply(n, t || [])).next())
					}))
				};
			class F {
				constructor(n, t, o) {
					this.route = n, this.organizationService = t, this.router = o, this.routeOrgId = null, this.loading = !1, this.disabled = !1
				}
				ngOnInit() {
					this.routeOrgId = this.route.snapshot.paramMap.get("organizationId")
				}
				onSuccessfulImport(n) {
					return b(this, void 0, void 0, (function*() {
						const t = yield(0, e._)(this.organizationService.get$(n));
						null != t && (0, r.of)(t) && (yield this.router.navigate(["organizations", n, "vault"]))
					}))
				}
			}
			F.ɵfac = function(n) {
				return new(n || F)(u.rXU(f.nX), u.rXU(r.PV), u.rXU(f.Ix))
			}, F.ɵcmp = u.VBU({
				type: F,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [u.Jv_([{
					provide: a.H7,
					useClass: d,
					deps: [i.vE]
				}]), u.aNF],
				decls: 11,
				vars: 6,
				consts: [
					[3, "formDisabled", "formLoading", "onSuccessfulImport", "organizationId"],
					["form", "import_form_importForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]
				],
				template: function(n, t) {
					1 & n && (u.nrm(0, "app-header"), u.EFF(1, "\n\n"), u.j41(2, "bit-container"), u.EFF(3, "\n  "), u.j41(4, "tools-import", 0), u.bIt("formDisabled", (function(n) {
						return t.disabled = n
					}))("formLoading", (function(n) {
						return t.loading = n
					}))("onSuccessfulImport", (function(n) {
						return t.onSuccessfulImport(n)
					})), u.k0s(), u.EFF(5, "\n  "), u.j41(6, "button", 1), u.EFF(7), u.nI1(8, "i18n"), u.k0s(), u.EFF(9, "\n"), u.k0s(), u.EFF(10, "\n")), 2 & n && (u.R7$(4), u.FS9("organizationId", t.routeOrgId), u.R7$(2), u.Y8G("disabled", t.disabled)("loading", t.loading), u.R7$(), u.SpI("\n    ", u.bMT(8, 4, "importData"), "\n  "))
				},
				dependencies: [s.G, p.$, m.Q, h.H, v.$, c.Pi, s.T, g.f],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=506.21bb9e8f747672eeb22b.js.map