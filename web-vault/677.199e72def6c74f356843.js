"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[677], {
		47677: (n, t, o) => {
			o.r(t), o.d(t, {
				ExportWebComponent: () => b
			});
			var e = o(86573),
				r = o(42594),
				i = o(25065),
				s = o(56111),
				a = o(89459),
				u = o(26657),
				c = o(56898),
				d = o(10672),
				l = o(88016),
				f = o(20464),
				p = function(n, t, o, e) {
					return new(o || (o = Promise))((function(r, i) {
						function s(n) {
							try {
								u(e.next(n))
							} catch (t) {
								i(t)
							}
						}

						function a(n) {
							try {
								u(e.throw(n))
							} catch (t) {
								i(t)
							}
						}

						function u(n) {
							var t;
							n.done ? r(n.value) : (t = n.value, t instanceof o ? t : new o((function(n) {
								n(t)
							}))).then(s, a)
						}
						u((e = e.apply(n, t || [])).next())
					}))
				};
			class b {
				constructor(n) {
					this.router = n, this.loading = !1, this.disabled = !1
				}
				onSuccessfulExport(n) {
					return p(this, void 0, void 0, (function*() {}))
				}
			}
			b.ɵfac = function(n) {
				return new(n || b)(s.rXU(a.Ix))
			}, b.ɵcmp = s.VBU({
				type: b,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [s.aNF],
				decls: 11,
				vars: 5,
				consts: [
					[3, "formDisabled", "formLoading", "onSuccessfulExport"],
					["form", "export_form_exportForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]
				],
				template: function(n, t) {
					1 & n && (s.nrm(0, "app-header"), s.EFF(1, "\n\n"), s.j41(2, "bit-container"), s.EFF(3, "\n  "), s.j41(4, "tools-export", 0), s.bIt("formDisabled", (function(n) {
						return t.disabled = n
					}))("formLoading", (function(n) {
						return t.loading = n
					}))("onSuccessfulExport", (function(n) {
						return t.onSuccessfulExport(n)
					})), s.k0s(), s.EFF(5, "\n  "), s.j41(6, "button", 1), s.EFF(7), s.nI1(8, "i18n"), s.k0s(), s.EFF(9, "\n"), s.k0s(), s.EFF(10, "\n")), 2 & n && (s.R7$(6), s.Y8G("disabled", t.disabled)("loading", t.loading), s.R7$(), s.SpI("\n    ", s.bMT(8, 3, "confirmFormat"), "\n  "))
				},
				dependencies: [i.G, u.$, c.Q, d.H, l.$, e.i, r.G, f.f],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=677.199e72def6c74f356843.js.map