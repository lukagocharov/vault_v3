"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[887], {
		29887: (n, t, e) => {
			e.r(t), e.d(t, {
				OrganizationReportingModule: () => Ee
			});
			var i = e(25065),
				a = e(11525),
				r = e(7870),
				o = e(89459),
				s = e(67553),
				F = e(9477),
				c = e(39488),
				l = e(21659),
				p = e(7983),
				d = e(56111),
				u = e(5556),
				g = e(72331),
				E = e(50700),
				h = e(52981),
				f = e(1639),
				b = e(93103),
				m = e(47428),
				I = e(47696),
				R = e(56898),
				v = e(44432),
				$ = e(10672),
				k = e(59032),
				w = e(38410),
				j = e(22466),
				S = e(32316),
				y = e(36572),
				G = e(12694),
				T = e(16496),
				N = e(71944),
				M = e(20464),
				X = e(88016),
				D = e(91975),
				z = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function U(n, t) {
				1 & n && (d.j41(0, "bit-callout", 7), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & n && (d.FS9("title", d.bMT(1, 2, "goodNews")), d.R7$(2), d.SpI("\n      ", d.bMT(3, 4, "noExposedPasswords"), "\n    "))
			}

			function C(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "bit-toggle", 20), d.EFF(3), d.j41(4, "span", 21), d.EFF(5), d.k0s(), d.EFF(6, "\n          "), d.k0s(), d.EFF(7, "\n        "), d.bVm()), 2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(2), d.Y8G("value", n), d.R7$(), d.SpI("\n            ", e.getName(n), "\n            "), d.R7$(2), d.SpI(" ", e.getCount(n), " ")
				}
			}

			function Y(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "bit-toggle-group", 18), d.nI1(1, "async"), d.nI1(2, "i18n"), d.bIt("selectedChange", (function(t) {
						d.eBV(n);
						const e = d.XpG(3);
						return d.Njj(e.filterOrgToggle(t))
					})), d.EFF(3, "\n        "), d.DNE(4, C, 8, 3, "ng-container", 19), d.EFF(5, "\n      "), d.k0s()
				}
				if (2 & n) {
					const n = d.XpG(3);
					d.Y8G("selected", d.bMT(1, 3, n.filterOrgStatus$)), d.BMQ("aria-label", d.bMT(2, 5, "addAccessFilter")), d.R7$(4), d.Y8G("ngForOf", n.filterStatus)
				}
			}

			function x(n, t) {
				1 & n && (d.j41(0, "th", 22), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & n && (d.R7$(), d.SpI("\n              ", d.bMT(2, 1, "owner"), "\n            "))
			}

			function A(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.qex(0), d.EFF(1, "\n                "), d.j41(2, "a", 29), d.nI1(3, "i18n"), d.bIt("click", (function() {
						d.eBV(n);
						const t = d.XpG().$implicit,
							e = d.XpG(4);
						return d.Njj(e.selectCipher(t))
					})), d.EFF(4), d.k0s(), d.EFF(5, "\n              "), d.bVm()
				}
				if (2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.FS9("title", d.i5U(3, 2, "editItemWithName", n.name)), d.R7$(2), d.JRh(n.name)
				}
			}

			function O(n, t) {
				if (1 & n && (d.EFF(0, "\n                "), d.j41(1, "span"), d.EFF(2), d.k0s(), d.EFF(3, "\n              ")), 2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.JRh(n.name)
				}
			}

			function V(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 30), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 31), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "shared")), d.R7$(4), d.JRh(d.bMT(7, 4, "shared")))
			}

			function P(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 32), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 31), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "attachments")), d.R7$(4), d.JRh(d.bMT(7, 4, "attachments")))
			}

			function J(n, t) {
				if (1 & n && (d.j41(0, "app-org-badge", 34), d.nI1(1, "async"), d.nI1(2, "orgNameFromId"), d.EFF(3, "\n              "), d.k0s()), 2 & n) {
					const n = d.XpG(2).$implicit,
						t = d.XpG(4);
					d.Y8G("disabled", t.disabled)("organizationId", n.organizationId)("organizationName", d.i5U(2, 5, n.organizationId, d.bMT(1, 3, t.organizations$)))
				}
			}

			function B(n, t) {
				if (1 & n && (d.j41(0, "td", 13), d.EFF(1, "\n              "), d.DNE(2, J, 4, 8, "app-org-badge", 33), d.EFF(3, "\n            "), d.k0s()), 2 & n) {
					const n = d.XpG(5);
					d.R7$(2), d.Y8G("ngIf", !n.organization)
				}
			}

			function q(n, t) {
				if (1 & n && (d.j41(0, "tr", 12), d.EFF(1, "\n            "), d.j41(2, "td", 13), d.EFF(3, "\n              "), d.nrm(4, "app-vault-icon", 24), d.EFF(5, "\n            "), d.k0s(), d.EFF(6, "\n            "), d.j41(7, "td", 13), d.EFF(8, "\n              "), d.DNE(9, A, 6, 5, "ng-container", 25), d.EFF(10, "\n              "), d.DNE(11, O, 4, 1, "ng-template", null, 1, d.C5r), d.EFF(13, "\n              "), d.DNE(14, V, 9, 6, "ng-container", 6), d.EFF(15, "\n              "), d.DNE(16, P, 9, 6, "ng-container", 6), d.EFF(17, "\n              "), d.nrm(18, "br"), d.EFF(19, "\n              "), d.j41(20, "small"), d.EFF(21), d.k0s(), d.EFF(22, "\n            "), d.k0s(), d.EFF(23, "\n            "), d.DNE(24, B, 4, 1, "td", 26), d.EFF(25, "\n            "), d.j41(26, "td", 27), d.EFF(27, "\n              "), d.j41(28, "span", 28), d.EFF(29), d.nI1(30, "number"), d.nI1(31, "i18n"), d.k0s(), d.EFF(32, "\n            "), d.k0s(), d.EFF(33, "\n          "), d.k0s()), 2 & n) {
					const n = t.$implicit,
						e = d.sdS(12),
						i = d.XpG(4);
					d.R7$(4), d.Y8G("cipher", n), d.R7$(5), d.Y8G("ngIf", !i.organization || i.canManageCipher(n))("ngIfElse", e), d.R7$(5), d.Y8G("ngIf", !i.organization && n.organizationId), d.R7$(2), d.Y8G("ngIf", n.hasAttachments), d.R7$(5), d.JRh(n.subTitle), d.R7$(3), d.Y8G("ngIf", !i.isAdminConsoleActive), d.R7$(5), d.SpI("\n                ", d.i5U(31, 10, "exposedXTimes", d.bMT(30, 8, n.exposedXTimes)), "\n              ")
				}
			}

			function H(n, t) {
				if (1 & n && (d.EFF(0, "\n          "), d.DNE(1, q, 34, 13, "tr", 23), d.nI1(2, "async"), d.EFF(3, "\n        ")), 2 & n) {
					const n = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, n))
				}
			}

			function L(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "bit-callout", 8), d.nI1(3, "i18n"), d.EFF(4), d.nI1(5, "number"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n      "), d.DNE(8, Y, 6, 7, "bit-toggle-group", 9), d.EFF(9, "\n      "), d.j41(10, "bit-table", 10), d.EFF(11, "\n        "), d.qex(12, 11), d.EFF(13, "\n          "), d.j41(14, "tr", 12), d.EFF(15, "\n            "), d.nrm(16, "th", 13), d.EFF(17, "\n            "), d.j41(18, "th", 14), d.EFF(19), d.nI1(20, "i18n"), d.k0s(), d.EFF(21, "\n            "), d.DNE(22, x, 3, 3, "th", 15), d.EFF(23, "\n            "), d.j41(24, "th", 16), d.EFF(25), d.nI1(26, "i18n"), d.k0s(), d.EFF(27, "\n          "), d.k0s(), d.EFF(28, "\n        "), d.bVm(), d.EFF(29, "\n        "), d.DNE(30, H, 4, 3, "ng-template", 17), d.EFF(31, "\n      "), d.k0s(), d.EFF(32, "\n    "), d.bVm()), 2 & n) {
					const n = d.XpG(2);
					d.R7$(2), d.FS9("title", d.bMT(3, 8, "exposedPasswordsFound")), d.Y8G("useAlertRole", !0), d.R7$(2), d.SpI("\n        ", d.brH(6, 12, "exposedPasswordsFoundReportDesc", d.bMT(5, 10, n.ciphers.length), n.vaultMsg), "\n      "), d.R7$(4), d.Y8G("ngIf", n.showFilterToggle && !n.isAdminConsoleActive), d.R7$(2), d.Y8G("dataSource", n.dataSource), d.R7$(9), d.JRh(d.bMT(20, 16, "name")), d.R7$(3), d.Y8G("ngIf", !n.isAdminConsoleActive), d.R7$(3), d.SpI("\n              ", d.bMT(26, 18, "timesExposed"), "\n            ")
				}
			}

			function W(n, t) {
				if (1 & n && (d.j41(0, "div", 4), d.EFF(1, "\n    "), d.DNE(2, U, 4, 6, "bit-callout", 5), d.EFF(3, "\n    "), d.DNE(4, L, 33, 20, "ng-container", 6), d.EFF(5, "\n  "), d.k0s()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.ciphers.length), d.R7$(2), d.Y8G("ngIf", n.ciphers.length)
				}
			}

			function Q(n, t) {}
			class _ extends p.y {
				constructor(n, t, e, i, a, r, o, s) {
					super(n, t, i, e, r, o, s), this.route = a
				}
				ngOnInit() {
					return z(this, void 0, void 0, (function*() {
						this.isAdminConsoleActive = !0, this.route.parent.parent.params.subscribe((n => z(this, void 0, void 0, (function*() {
							this.organization = yield this.organizationService.get(n.organizationId), this.manageableCiphers = yield this.cipherService.getAll()
						}))))
					}))
				}
				getAllCiphers() {
					return this.cipherService.getAllFromApiForOrganization(this.organization.id)
				}
				canManageCipher(n) {
					return this.manageableCiphers.some((t => t.id === n.id))
				}
			}
			_.ɵfac = function(n) {
				return new(n || _)(d.rXU(u.p), d.rXU(g.d), d.rXU(F.B), d.rXU(s.PV), d.rXU(o.nX), d.rXU(l.qX), d.rXU(E.W), d.rXU(c.H))
			}, _.ɵcmp = d.VBU({
				type: _,
				selectors: [
					["app-org-exposed-passwords-report"]
				],
				features: [d.Vt3],
				decls: 18,
				vars: 8,
				consts: [
					["cipherAddEdit", ""],
					["cantManage", ""],
					["type", "submit", "buttonType", "primary", "bitButton", "", 3, "click", "loading"],
					["class", "tw-mt-4", 4, "ngIf"],
					[1, "tw-mt-4"],
					["type", "success", 3, "title", 4, "ngIf"],
					[4, "ngIf"],
					["type", "success", 3, "title"],
					["type", "danger", 3, "title", "useAlertRole"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					[3, "dataSource"],
					["header", ""],
					["bitRow", ""],
					["bitCell", ""],
					["bitCell", "", "bitSortable", "name"],
					["bitCell", "", "bitSortable", "organizationId", 4, "ngIf"],
					["bitCell", "", "bitSortable", "exposedXTimes", 1, "tw-text-right"],
					["body", ""],
					[3, "selectedChange", "selected"],
					[4, "ngFor", "ngForOf"],
					[3, "value"],
					["bitBadge", "", "variant", "info"],
					["bitCell", "", "bitSortable", "organizationId"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					[3, "cipher"],
					[4, "ngIf", "ngIfElse"],
					["bitCell", "", 4, "ngIf"],
					["bitCell", "", 1, "tw-text-right"],
					["bitBadge", "", "variant", "warning"],
					["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection", 3, "title"],
					[1, "tw-sr-only"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]
				],
				template: function(n, t) {
					if (1 & n) {
						const n = d.RV6();
						d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.j41(4, "p"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n  "), d.j41(8, "button", 2), d.bIt("click", (function() {
							return d.eBV(n), d.Njj(t.load())
						})), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n  "), d.DNE(12, W, 6, 2, "div", 3), d.EFF(13, "\n  "), d.DNE(14, Q, 0, 0, "ng-template", null, 0, d.C5r), d.EFF(16, "\n"), d.k0s(), d.EFF(17, "\n")
					}
					2 & n && (d.R7$(5), d.JRh(d.bMT(6, 4, "exposedPasswordsReportDesc")), d.R7$(3), d.Y8G("loading", t.loading), d.R7$(), d.SpI("\n    ", d.bMT(10, 6, "checkExposedPasswords"), "\n  "), d.R7$(3), d.Y8G("ngIf", t.hasLoaded))
				},
				dependencies: [h.Sq, h.bT, f.R, b.Y, m.x, I.n, R.Q, v.G, $.H, k.L, w.Q, j.Y, S.O, y._, y.O, G.H, T.a, N.P, M.f, h.Jj, h.QX, X.$, D.t],
				encapsulation: 2
			});
			var K = e(81540),
				Z = e(56962),
				nn = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function tn(n, t) {
				1 & n && (d.j41(0, "div"), d.EFF(1, "\n    "), d.nrm(2, "i", 3), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.k0s()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function en(n, t) {
				1 & n && (d.j41(0, "bit-callout", 7), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & n && (d.FS9("title", d.bMT(1, 2, "goodNews")), d.R7$(2), d.SpI("\n      ", d.bMT(3, 4, "noInactive2fa"), "\n    "))
			}

			function an(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "bit-toggle", 15), d.EFF(3), d.j41(4, "span", 16), d.EFF(5), d.k0s(), d.EFF(6, "\n          "), d.k0s(), d.EFF(7, "\n        "), d.bVm()), 2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(2), d.Y8G("value", n), d.R7$(), d.SpI("\n            ", e.getName(n), "\n            "), d.R7$(2), d.SpI(" ", e.getCount(n), " ")
				}
			}

			function rn(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "bit-toggle-group", 13), d.nI1(1, "async"), d.nI1(2, "i18n"), d.bIt("selectedChange", (function(t) {
						d.eBV(n);
						const e = d.XpG(3);
						return d.Njj(e.filterOrgToggle(t))
					})), d.EFF(3, "\n        "), d.DNE(4, an, 8, 3, "ng-container", 14), d.EFF(5, "\n      "), d.k0s()
				}
				if (2 & n) {
					const n = d.XpG(3);
					d.Y8G("selected", d.bMT(1, 3, n.filterOrgStatus$)), d.BMQ("aria-label", d.bMT(2, 5, "addAccessFilter")), d.R7$(4), d.Y8G("ngForOf", n.filterStatus)
				}
			}

			function on(n, t) {
				1 & n && (d.qex(0, 17), d.EFF(1, "\n          "), d.j41(2, "tr", 18), d.EFF(3, "\n            "), d.nrm(4, "th", 19), d.EFF(5, "\n            "), d.j41(6, "th", 19), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n            "), d.j41(10, "th", 19), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n            "), d.nrm(14, "th", 19), d.EFF(15, "\n          "), d.k0s(), d.EFF(16, "\n        "), d.bVm()), 2 & n && (d.R7$(7), d.JRh(d.bMT(8, 2, "name")), d.R7$(4), d.JRh(d.bMT(12, 4, "owner")))
			}

			function sn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                  "), d.nrm(2, "i", 26), d.nI1(3, "i18n"), d.EFF(4, "\n                  "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n                "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "shared")), d.R7$(4), d.JRh(d.bMT(7, 4, "shared")))
			}

			function Fn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                  "), d.nrm(2, "i", 27), d.nI1(3, "i18n"), d.EFF(4, "\n                  "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n                "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "attachments")), d.R7$(4), d.JRh(d.bMT(7, 4, "attachments")))
			}

			function cn(n, t) {
				if (1 & n && (d.j41(0, "app-org-badge", 28), d.nI1(1, "async"), d.nI1(2, "orgNameFromId"), d.EFF(3, "\n                "), d.k0s()), 2 & n) {
					const n = d.XpG().$implicit,
						t = d.XpG(4);
					d.Y8G("disabled", t.disabled)("organizationId", n.organizationId)("organizationName", d.i5U(2, 5, n.organizationId, d.bMT(1, 3, t.organizations$)))
				}
			}

			function ln(n, t) {
				if (1 & n && (d.j41(0, "a", 29), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & n) {
					const n = d.XpG().$implicit,
						t = d.XpG(4);
					d.FS9("href", t.cipherDocs.get(n.id), d.B4B), d.R7$(), d.SpI("\n                  ", d.bMT(2, 2, "instructions"), "")
				}
			}

			function pn(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "tr", 18), d.EFF(1, "\n              "), d.j41(2, "td", 19), d.EFF(3, "\n                "), d.nrm(4, "app-vault-icon", 21), d.EFF(5, "\n              "), d.k0s(), d.EFF(6, "\n              "), d.j41(7, "td", 19), d.EFF(8, "\n                "), d.j41(9, "a", 22), d.nI1(10, "i18n"), d.bIt("click", (function() {
						const t = d.eBV(n).$implicit,
							e = d.XpG(4);
						return d.Njj(e.selectCipher(t))
					})), d.EFF(11), d.k0s(), d.EFF(12, "\n                "), d.DNE(13, sn, 9, 6, "ng-container", 1), d.EFF(14, "\n                "), d.DNE(15, Fn, 9, 6, "ng-container", 1), d.EFF(16, "\n                "), d.nrm(17, "br"), d.EFF(18, "\n                "), d.j41(19, "small"), d.EFF(20), d.k0s(), d.EFF(21, "\n              "), d.k0s(), d.EFF(22, "\n              "), d.j41(23, "td", 19), d.EFF(24, "\n                "), d.DNE(25, cn, 4, 8, "app-org-badge", 23), d.EFF(26, "\n              "), d.k0s(), d.EFF(27, "\n              "), d.j41(28, "td", 24), d.EFF(29, "\n                "), d.DNE(30, ln, 3, 4, "a", 25), d.EFF(31, "\n              "), d.k0s(), d.EFF(32, "\n            "), d.k0s()
				}
				if (2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(4), d.Y8G("cipher", n), d.R7$(5), d.FS9("title", d.i5U(10, 8, "editItemWithName", n.name)), d.R7$(2), d.JRh(n.name), d.R7$(2), d.Y8G("ngIf", !e.organization && n.organizationId), d.R7$(2), d.Y8G("ngIf", n.hasAttachments), d.R7$(5), d.JRh(n.subTitle), d.R7$(5), d.Y8G("ngIf", !e.organization), d.R7$(5), d.Y8G("ngIf", e.cipherDocs.has(n.id))
				}
			}

			function dn(n, t) {
				if (1 & n && (d.EFF(0, "\n            "), d.DNE(1, pn, 33, 11, "tr", 20), d.nI1(2, "async"), d.EFF(3, "\n          ")), 2 & n) {
					const n = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, n))
				}
			}

			function un(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "bit-callout", 8), d.nI1(3, "i18n"), d.EFF(4), d.nI1(5, "number"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n      "), d.DNE(8, rn, 6, 7, "bit-toggle-group", 9), d.EFF(9, "\n      "), d.j41(10, "bit-table", 10), d.EFF(11, "\n        "), d.DNE(12, on, 17, 6, "ng-container", 11), d.EFF(13, "\n        "), d.j41(14, "tbody"), d.EFF(15, "\n          "), d.DNE(16, dn, 4, 3, "ng-template", 12), d.EFF(17, "\n        "), d.k0s()(), d.EFF(18, "\n    "), d.bVm()), 2 & n) {
					const n = d.XpG(2);
					d.R7$(2), d.FS9("title", d.bMT(3, 5, "inactive2faFound")), d.R7$(2), d.SpI("\n        ", d.brH(6, 9, "inactive2faFoundReportDesc", d.bMT(5, 7, n.ciphers.length), n.vaultMsg), "\n      "), d.R7$(4), d.Y8G("ngIf", n.showFilterToggle && !n.isAdminConsoleActive), d.R7$(2), d.Y8G("dataSource", n.dataSource), d.R7$(2), d.Y8G("ngIf", !n.isAdminConsoleActive)
				}
			}

			function gn(n, t) {
				if (1 & n && (d.j41(0, "div", 5), d.EFF(1, "\n    "), d.DNE(2, en, 4, 6, "bit-callout", 6), d.EFF(3, "\n    "), d.DNE(4, un, 19, 13, "ng-container", 1), d.EFF(5, "\n  "), d.k0s()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.ciphers.length), d.R7$(2), d.Y8G("ngIf", n.ciphers.length)
				}
			}

			function En(n, t) {}
			class hn extends K.O {
				constructor(n, t, e, i, a, r, o, s) {
					super(n, r, t, i, a, o, s), this.route = e
				}
				ngOnInit() {
					const n = Object.create(null, {
						ngOnInit: {
							get: () => super.ngOnInit
						}
					});
					return nn(this, void 0, void 0, (function*() {
						this.isAdminConsoleActive = !0, this.route.parent.parent.params.subscribe((t => nn(this, void 0, void 0, (function*() {
							this.organization = yield this.organizationService.get(t.organizationId), yield n.ngOnInit.call(this)
						}))))
					}))
				}
				getAllCiphers() {
					return this.cipherService.getAllFromApiForOrganization(this.organization.id)
				}
			}
			hn.ɵfac = function(n) {
				return new(n || hn)(d.rXU(u.p), d.rXU(F.B), d.rXU(o.nX), d.rXU(Z.K), d.rXU(l.qX), d.rXU(s.PV), d.rXU(E.W), d.rXU(c.H))
			}, hn.ɵcmp = d.VBU({
				type: hn,
				selectors: [
					["app-inactive-two-factor-report"]
				],
				features: [d.Vt3],
				decls: 16,
				vars: 5,
				consts: [
					["cipherAddEdit", ""],
					[4, "ngIf"],
					["class", "tw-mt-4", 4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "tw-mt-4"],
					["type", "success", 3, "title", 4, "ngIf"],
					["type", "success", 3, "title"],
					["type", "danger", 3, "title"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					[3, "dataSource"],
					["header", "", 4, "ngIf"],
					["body", ""],
					[3, "selectedChange", "selected"],
					[4, "ngFor", "ngForOf"],
					[3, "value"],
					["bitBadge", "", "variant", "info"],
					["header", ""],
					["bitRow", ""],
					["bitCell", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					[3, "cipher"],
					["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"],
					["bitCell", "", 1, "tw-text-right"],
					["bitBadge", "", "target", "_blank", "rel", "noreferrer", 3, "href", 4, "ngIf"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection", 3, "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName"],
					["bitBadge", "", "target", "_blank", "rel", "noreferrer", 3, "href"]
				],
				template: function(n, t) {
					1 & n && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.j41(4, "p"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n  "), d.DNE(8, tn, 9, 6, "div", 1), d.EFF(9, "\n  "), d.DNE(10, gn, 6, 2, "div", 2), d.EFF(11, "\n  "), d.DNE(12, En, 0, 0, "ng-template", null, 0, d.C5r), d.EFF(14, "\n"), d.k0s(), d.EFF(15, "\n")), 2 & n && (d.R7$(5), d.JRh(d.bMT(6, 3, "inactive2faReportDesc")), d.R7$(3), d.Y8G("ngIf", !t.hasLoaded && t.loading), d.R7$(2), d.Y8G("ngIf", t.hasLoaded))
				},
				dependencies: [h.Sq, h.bT, f.R, b.Y, m.x, I.n, v.G, $.H, k.L, w.Q, j.Y, y._, y.O, G.H, T.a, N.P, M.f, h.Jj, h.QX, X.$, D.t],
				encapsulation: 2
			});
			var fn = e(75837),
				bn = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function mn(n, t) {
				1 & n && (d.j41(0, "div"), d.EFF(1, "\n    "), d.nrm(2, "i", 4), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.k0s()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function In(n, t) {
				1 & n && (d.j41(0, "bit-callout", 8), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & n && (d.FS9("title", d.bMT(1, 2, "goodNews")), d.R7$(2), d.SpI("\n      ", d.bMT(3, 4, "noReusedPasswords"), "\n    "))
			}

			function Rn(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "bit-toggle", 16), d.EFF(3), d.j41(4, "span", 17), d.EFF(5), d.k0s(), d.EFF(6, "\n          "), d.k0s(), d.EFF(7, "\n        "), d.bVm()), 2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(2), d.Y8G("value", n), d.R7$(), d.SpI("\n            ", e.getName(n), "\n            "), d.R7$(2), d.SpI(" ", e.getCount(n), " ")
				}
			}

			function vn(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "bit-toggle-group", 14), d.nI1(1, "async"), d.nI1(2, "i18n"), d.bIt("selectedChange", (function(t) {
						d.eBV(n);
						const e = d.XpG(3);
						return d.Njj(e.filterOrgToggle(t))
					})), d.EFF(3, "\n        "), d.DNE(4, Rn, 8, 3, "ng-container", 15), d.EFF(5, "\n      "), d.k0s()
				}
				if (2 & n) {
					const n = d.XpG(3);
					d.Y8G("selected", d.bMT(1, 3, n.filterOrgStatus$)), d.BMQ("aria-label", d.bMT(2, 5, "addAccessFilter")), d.R7$(4), d.Y8G("ngForOf", n.filterStatus)
				}
			}

			function $n(n, t) {
				1 & n && (d.qex(0, 18), d.EFF(1, "\n          "), d.j41(2, "tr", 19), d.EFF(3, "\n            "), d.nrm(4, "th", 20), d.EFF(5, "\n            "), d.j41(6, "th", 20), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n            "), d.j41(10, "th", 20), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n            "), d.j41(14, "th", 21), d.EFF(15), d.nI1(16, "i18n"), d.k0s(), d.EFF(17, "\n          "), d.k0s(), d.EFF(18, "\n        "), d.bVm()), 2 & n && (d.R7$(7), d.JRh(d.bMT(8, 3, "name")), d.R7$(4), d.JRh(d.bMT(12, 5, "owner")), d.R7$(4), d.JRh(d.bMT(16, 7, "timesReused")))
			}

			function kn(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.qex(0), d.EFF(1, "\n                "), d.j41(2, "a", 27), d.nI1(3, "i18n"), d.bIt("click", (function() {
						d.eBV(n);
						const t = d.XpG().$implicit,
							e = d.XpG(4);
						return d.Njj(e.selectCipher(t))
					})), d.EFF(4), d.k0s(), d.EFF(5, "\n              "), d.bVm()
				}
				if (2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.FS9("title", d.i5U(3, 2, "editItemWithName", n.name)), d.R7$(2), d.JRh(n.name)
				}
			}

			function wn(n, t) {
				if (1 & n && (d.EFF(0, "\n                "), d.j41(1, "span"), d.EFF(2), d.k0s(), d.EFF(3, "\n              ")), 2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.JRh(n.name)
				}
			}

			function jn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 28), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "shared")), d.R7$(4), d.JRh(d.bMT(7, 4, "shared")))
			}

			function Sn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 29), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "attachments")), d.R7$(4), d.JRh(d.bMT(7, 4, "attachments")))
			}

			function yn(n, t) {
				if (1 & n && (d.j41(0, "app-org-badge", 30), d.nI1(1, "async"), d.nI1(2, "orgNameFromId"), d.EFF(3, "\n              "), d.k0s()), 2 & n) {
					const n = d.XpG().$implicit,
						t = d.XpG(4);
					d.Y8G("disabled", t.disabled)("organizationId", n.organizationId)("organizationName", d.i5U(2, 5, n.organizationId, d.bMT(1, 3, t.organizations$)))
				}
			}

			function Gn(n, t) {
				if (1 & n && (d.j41(0, "tr", 19), d.EFF(1, "\n            "), d.j41(2, "td", 20), d.EFF(3, "\n              "), d.nrm(4, "app-vault-icon", 23), d.EFF(5, "\n            "), d.k0s(), d.EFF(6, "\n            "), d.j41(7, "td", 20), d.EFF(8, "\n              "), d.DNE(9, kn, 6, 5, "ng-container", 24), d.EFF(10, "\n              "), d.DNE(11, wn, 4, 1, "ng-template", null, 1, d.C5r), d.EFF(13, "\n              "), d.DNE(14, jn, 9, 6, "ng-container", 2), d.EFF(15, "\n              "), d.DNE(16, Sn, 9, 6, "ng-container", 2), d.EFF(17, "\n              "), d.nrm(18, "br"), d.EFF(19, "\n              "), d.j41(20, "small"), d.EFF(21), d.k0s(), d.EFF(22, "\n            "), d.k0s(), d.EFF(23, "\n            "), d.j41(24, "td", 20), d.EFF(25, "\n              "), d.DNE(26, yn, 4, 8, "app-org-badge", 25), d.EFF(27, "\n            "), d.k0s(), d.EFF(28, "\n            "), d.j41(29, "td", 21), d.EFF(30, "\n              "), d.j41(31, "span", 26), d.EFF(32), d.nI1(33, "i18n"), d.k0s(), d.EFF(34, "\n            "), d.k0s(), d.EFF(35, "\n          "), d.k0s()), 2 & n) {
					const n = t.$implicit,
						e = d.sdS(12),
						i = d.XpG(4);
					d.R7$(4), d.Y8G("cipher", n), d.R7$(5), d.Y8G("ngIf", !i.organization || i.canManageCipher(n))("ngIfElse", e), d.R7$(5), d.Y8G("ngIf", !i.organization && n.organizationId), d.R7$(2), d.Y8G("ngIf", n.hasAttachments), d.R7$(5), d.JRh(n.subTitle), d.R7$(5), d.Y8G("ngIf", !i.organization), d.R7$(6), d.SpI("\n                ", d.i5U(33, 8, "reusedXTimes", i.passwordUseMap.get(n.login.password)), "\n              ")
				}
			}

			function Tn(n, t) {
				if (1 & n && (d.EFF(0, "\n          "), d.DNE(1, Gn, 36, 11, "tr", 22), d.nI1(2, "async"), d.EFF(3, "\n        ")), 2 & n) {
					const n = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, n))
				}
			}

			function Nn(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "bit-callout", 9), d.nI1(3, "i18n"), d.EFF(4), d.nI1(5, "number"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n\n      "), d.DNE(8, vn, 6, 7, "bit-toggle-group", 10), d.EFF(9, "\n\n      "), d.j41(10, "bit-table", 11), d.EFF(11, "\n        "), d.DNE(12, $n, 19, 9, "ng-container", 12), d.EFF(13, "\n        "), d.DNE(14, Tn, 4, 3, "ng-template", 13), d.EFF(15, "\n      "), d.k0s(), d.EFF(16, "\n    "), d.bVm()), 2 & n) {
					const n = d.XpG(2);
					d.R7$(2), d.FS9("title", d.bMT(3, 5, "reusedPasswordsFound")), d.R7$(2), d.SpI("\n        ", d.brH(6, 9, "reusedPasswordsFoundReportDesc", d.bMT(5, 7, n.ciphers.length), n.vaultMsg), "\n      "), d.R7$(4), d.Y8G("ngIf", n.showFilterToggle && !n.isAdminConsoleActive), d.R7$(2), d.Y8G("dataSource", n.dataSource), d.R7$(2), d.Y8G("ngIf", !n.isAdminConsoleActive)
				}
			}

			function Mn(n, t) {
				if (1 & n && (d.j41(0, "div", 6), d.EFF(1, "\n    "), d.DNE(2, In, 4, 6, "bit-callout", 7), d.EFF(3, "\n    "), d.DNE(4, Nn, 17, 13, "ng-container", 2), d.EFF(5, "\n  "), d.k0s()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.ciphers.length), d.R7$(2), d.Y8G("ngIf", n.ciphers.length)
				}
			}

			function Xn(n, t) {}
			class Dn extends fn.A {
				constructor(n, t, e, i, a, r, o) {
					super(n, i, t, a, r, o), this.route = e
				}
				ngOnInit() {
					const n = Object.create(null, {
						ngOnInit: {
							get: () => super.ngOnInit
						}
					});
					return bn(this, void 0, void 0, (function*() {
						this.isAdminConsoleActive = !0, this.route.parent.parent.params.subscribe((t => bn(this, void 0, void 0, (function*() {
							this.organization = yield this.organizationService.get(t.organizationId), this.manageableCiphers = yield this.cipherService.getAll(), yield n.ngOnInit.call(this)
						}))))
					}))
				}
				getAllCiphers() {
					return this.cipherService.getAllFromApiForOrganization(this.organization.id)
				}
				canManageCipher(n) {
					return this.manageableCiphers.some((t => t.id === n.id))
				}
			}
			Dn.ɵfac = function(n) {
				return new(n || Dn)(d.rXU(u.p), d.rXU(F.B), d.rXU(o.nX), d.rXU(s.PV), d.rXU(l.qX), d.rXU(E.W), d.rXU(c.H))
			}, Dn.ɵcmp = d.VBU({
				type: Dn,
				selectors: [
					["app-reused-passwords-report"]
				],
				features: [d.Vt3],
				decls: 16,
				vars: 5,
				consts: [
					["cipherAddEdit", ""],
					["cantManage", ""],
					[4, "ngIf"],
					["class", "tw-mt-4", 4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "tw-mt-4"],
					["type", "success", 3, "title", 4, "ngIf"],
					["type", "success", 3, "title"],
					["type", "danger", 3, "title"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					[3, "dataSource"],
					["header", "", 4, "ngIf"],
					["body", ""],
					[3, "selectedChange", "selected"],
					[4, "ngFor", "ngForOf"],
					[3, "value"],
					["bitBadge", "", "variant", "info"],
					["header", ""],
					["bitRow", ""],
					["bitCell", ""],
					["bitCell", "", 1, "tw-text-right"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					[3, "cipher"],
					[4, "ngIf", "ngIfElse"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"],
					["bitBadge", "", "variant", "warning"],
					["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection", 3, "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]
				],
				template: function(n, t) {
					1 & n && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.j41(4, "p"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n  "), d.DNE(8, mn, 9, 6, "div", 2), d.EFF(9, "\n  "), d.DNE(10, Mn, 6, 2, "div", 3), d.EFF(11, "\n  "), d.DNE(12, Xn, 0, 0, "ng-template", null, 0, d.C5r), d.EFF(14, "\n"), d.k0s(), d.EFF(15, "\n")), 2 & n && (d.R7$(5), d.JRh(d.bMT(6, 3, "reusedPasswordsReportDesc")), d.R7$(3), d.Y8G("ngIf", !t.hasLoaded && t.loading), d.R7$(2), d.Y8G("ngIf", t.hasLoaded))
				},
				dependencies: [h.Sq, h.bT, f.R, b.Y, m.x, I.n, v.G, $.H, k.L, w.Q, j.Y, y._, y.O, G.H, T.a, N.P, M.f, h.Jj, h.QX, X.$, D.t],
				encapsulation: 2
			});
			var zn = e(44451),
				Un = e(89357),
				Cn = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function Yn(n, t) {
				1 & n && (d.j41(0, "div"), d.EFF(1, "\n    "), d.nrm(2, "i", 3), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.k0s()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function xn(n, t) {
				1 & n && (d.j41(0, "bit-callout", 7), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & n && (d.FS9("title", d.bMT(1, 2, "goodNews")), d.R7$(2), d.SpI("\n      ", d.bMT(3, 4, "noUnsecuredWebsites"), "\n    "))
			}

			function An(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "bit-toggle", 15), d.EFF(3), d.j41(4, "span", 16), d.EFF(5), d.k0s(), d.EFF(6, "\n          "), d.k0s(), d.EFF(7, "\n        "), d.bVm()), 2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(2), d.Y8G("value", n), d.R7$(), d.SpI("\n            ", e.getName(n), "\n            "), d.R7$(2), d.SpI(" ", e.getCount(n), " ")
				}
			}

			function On(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "bit-toggle-group", 13), d.nI1(1, "async"), d.nI1(2, "i18n"), d.bIt("selectedChange", (function(t) {
						d.eBV(n);
						const e = d.XpG(3);
						return d.Njj(e.filterOrgToggle(t))
					})), d.EFF(3, "\n        "), d.DNE(4, An, 8, 3, "ng-container", 14), d.EFF(5, "\n      "), d.k0s()
				}
				if (2 & n) {
					const n = d.XpG(3);
					d.Y8G("selected", d.bMT(1, 3, n.filterOrgStatus$)), d.BMQ("aria-label", d.bMT(2, 5, "addAccessFilter")), d.R7$(4), d.Y8G("ngForOf", n.filterStatus)
				}
			}

			function Vn(n, t) {
				1 & n && (d.qex(0, 17), d.EFF(1, "\n          "), d.j41(2, "tr", 18), d.EFF(3, "\n            "), d.nrm(4, "th", 19), d.EFF(5, "\n            "), d.j41(6, "th", 19), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n            "), d.j41(10, "th", 19), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n            "), d.nrm(14, "th", 19), d.EFF(15, "\n          "), d.k0s(), d.EFF(16, "\n        "), d.bVm()), 2 & n && (d.R7$(7), d.JRh(d.bMT(8, 2, "name")), d.R7$(4), d.JRh(d.bMT(12, 4, "owner")))
			}

			function Pn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 24), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "shared")), d.R7$(4), d.JRh(d.bMT(7, 4, "shared")))
			}

			function Jn(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 25), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 4), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "attachments")), d.R7$(4), d.JRh(d.bMT(7, 4, "attachments")))
			}

			function Bn(n, t) {
				if (1 & n && (d.j41(0, "app-org-badge", 26), d.nI1(1, "async"), d.nI1(2, "orgNameFromId"), d.EFF(3, "\n              "), d.k0s()), 2 & n) {
					const n = d.XpG().$implicit,
						t = d.XpG(4);
					d.Y8G("disabled", t.disabled)("organizationId", n.organizationId)("organizationName", d.i5U(2, 5, n.organizationId, d.bMT(1, 3, t.organizations$)))
				}
			}

			function qn(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "tr", 18), d.EFF(1, "\n            "), d.j41(2, "td", 19), d.EFF(3, "\n              "), d.nrm(4, "app-vault-icon", 21), d.EFF(5, "\n            "), d.k0s(), d.EFF(6, "\n            "), d.j41(7, "td", 19), d.EFF(8, "\n              "), d.j41(9, "a", 22), d.nI1(10, "i18n"), d.bIt("click", (function() {
						const t = d.eBV(n).$implicit,
							e = d.XpG(4);
						return d.Njj(e.selectCipher(t))
					})), d.EFF(11), d.k0s(), d.EFF(12, "\n              "), d.DNE(13, Pn, 9, 6, "ng-container", 1), d.EFF(14, "\n              "), d.DNE(15, Jn, 9, 6, "ng-container", 1), d.EFF(16, "\n              "), d.nrm(17, "br"), d.EFF(18, "\n              "), d.j41(19, "small"), d.EFF(20), d.k0s(), d.EFF(21, "\n            "), d.k0s(), d.EFF(22, "\n            "), d.j41(23, "td", 19), d.EFF(24, "\n              "), d.DNE(25, Bn, 4, 8, "app-org-badge", 23), d.EFF(26, "\n            "), d.k0s(), d.EFF(27, "\n          "), d.k0s()
				}
				if (2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(4), d.Y8G("cipher", n), d.R7$(5), d.FS9("title", d.i5U(10, 7, "editItemWithName", n.name)), d.R7$(2), d.SpI("\n                ", n.name, "\n              "), d.R7$(2), d.Y8G("ngIf", !e.organization && n.organizationId), d.R7$(2), d.Y8G("ngIf", n.hasAttachments), d.R7$(5), d.JRh(n.subTitle), d.R7$(5), d.Y8G("ngIf", !e.organization)
				}
			}

			function Hn(n, t) {
				if (1 & n && (d.EFF(0, "\n          "), d.DNE(1, qn, 28, 10, "tr", 20), d.nI1(2, "async"), d.EFF(3, "\n        ")), 2 & n) {
					const n = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, n))
				}
			}

			function Ln(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "bit-callout", 8), d.nI1(3, "i18n"), d.EFF(4), d.nI1(5, "number"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n\n      "), d.DNE(8, On, 6, 7, "bit-toggle-group", 9), d.EFF(9, "\n      "), d.j41(10, "bit-table", 10), d.EFF(11, "\n        "), d.DNE(12, Vn, 17, 6, "ng-container", 11), d.EFF(13, "\n        "), d.DNE(14, Hn, 4, 3, "ng-template", 12), d.EFF(15, "\n      "), d.k0s(), d.EFF(16, "\n    "), d.bVm()), 2 & n) {
					const n = d.XpG(2);
					d.R7$(2), d.FS9("title", d.bMT(3, 5, "unsecuredWebsitesFound")), d.R7$(2), d.SpI("\n        ", d.brH(6, 9, "unsecuredWebsitesFoundReportDesc", d.bMT(5, 7, n.ciphers.length), n.vaultMsg), "\n      "), d.R7$(4), d.Y8G("ngIf", n.showFilterToggle && !n.isAdminConsoleActive), d.R7$(2), d.Y8G("dataSource", n.dataSource), d.R7$(2), d.Y8G("ngIf", !n.isAdminConsoleActive)
				}
			}

			function Wn(n, t) {
				if (1 & n && (d.j41(0, "div", 5), d.EFF(1, "\n    "), d.DNE(2, xn, 4, 6, "bit-callout", 6), d.EFF(3, "\n    "), d.DNE(4, Ln, 17, 13, "ng-container", 1), d.EFF(5, "\n  "), d.k0s()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.ciphers.length), d.R7$(2), d.Y8G("ngIf", n.ciphers.length)
				}
			}

			function Qn(n, t) {}
			class _n extends Un.U {
				constructor(n, t, e, i, a, r, o, s) {
					super(n, i, t, a, r, o, s), this.route = e
				}
				ngOnInit() {
					const n = Object.create(null, {
						ngOnInit: {
							get: () => super.ngOnInit
						}
					});
					return Cn(this, void 0, void 0, (function*() {
						this.isAdminConsoleActive = !0, this.route.parent.parent.params.subscribe((t => Cn(this, void 0, void 0, (function*() {
							this.organization = yield this.organizationService.get(t.organizationId), yield n.ngOnInit.call(this)
						}))))
					}))
				}
				getAllCiphers() {
					return this.cipherService.getAllFromApiForOrganization(this.organization.id)
				}
			}
			_n.ɵfac = function(n) {
				return new(n || _n)(d.rXU(u.p), d.rXU(F.B), d.rXU(o.nX), d.rXU(s.PV), d.rXU(l.qX), d.rXU(E.W), d.rXU(c.H), d.rXU(zn.YD))
			}, _n.ɵcmp = d.VBU({
				type: _n,
				selectors: [
					["app-unsecured-websites-report"]
				],
				features: [d.Vt3],
				decls: 16,
				vars: 5,
				consts: [
					["cipherAddEdit", ""],
					[4, "ngIf"],
					["class", "tw-mt-4", 4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "tw-mt-4"],
					["type", "success", 3, "title", 4, "ngIf"],
					["type", "success", 3, "title"],
					["type", "danger", 3, "title"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					[3, "dataSource"],
					["header", "", 4, "ngIf"],
					["body", ""],
					[3, "selectedChange", "selected"],
					[4, "ngFor", "ngForOf"],
					[3, "value"],
					["bitBadge", "", "variant", "info"],
					["header", ""],
					["bitRow", ""],
					["bitCell", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					[3, "cipher"],
					["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection", 3, "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]
				],
				template: function(n, t) {
					1 & n && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.j41(4, "p"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n  "), d.DNE(8, Yn, 9, 6, "div", 1), d.EFF(9, "\n  "), d.DNE(10, Wn, 6, 2, "div", 2), d.EFF(11, "\n  "), d.DNE(12, Qn, 0, 0, "ng-template", null, 0, d.C5r), d.EFF(14, "\n"), d.k0s(), d.EFF(15, "\n")), 2 & n && (d.R7$(5), d.JRh(d.bMT(6, 3, "unsecuredWebsitesReportDesc")), d.R7$(3), d.Y8G("ngIf", !t.hasLoaded && t.loading), d.R7$(2), d.Y8G("ngIf", t.hasLoaded))
				},
				dependencies: [h.Sq, h.bT, f.R, b.Y, m.x, I.n, v.G, $.H, k.L, w.Q, j.Y, y._, y.O, G.H, T.a, N.P, M.f, h.Jj, h.QX, X.$, D.t],
				encapsulation: 2
			});
			var Kn = e(63457),
				Zn = e(17889),
				nt = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function tt(n, t) {
				1 & n && (d.j41(0, "div"), d.EFF(1, "\n    "), d.nrm(2, "i", 4), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.k0s()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function et(n, t) {
				1 & n && (d.j41(0, "bit-callout", 8), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & n && (d.FS9("title", d.bMT(1, 2, "goodNews")), d.R7$(2), d.SpI("\n      ", d.bMT(3, 4, "noWeakPasswords"), "\n    "))
			}

			function it(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "bit-toggle", 21), d.EFF(3), d.j41(4, "span", 22), d.EFF(5), d.k0s(), d.EFF(6, "\n          "), d.k0s(), d.EFF(7, "\n        "), d.bVm()), 2 & n) {
					const n = t.$implicit,
						e = d.XpG(4);
					d.R7$(2), d.Y8G("value", n), d.R7$(), d.SpI("\n            ", e.getName(n), "\n            "), d.R7$(2), d.SpI(" ", e.getCount(n), " ")
				}
			}

			function at(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.j41(0, "bit-toggle-group", 19), d.nI1(1, "async"), d.nI1(2, "i18n"), d.bIt("selectedChange", (function(t) {
						d.eBV(n);
						const e = d.XpG(3);
						return d.Njj(e.filterOrgToggle(t))
					})), d.EFF(3, "\n        "), d.DNE(4, it, 8, 3, "ng-container", 20), d.EFF(5, "\n      "), d.k0s()
				}
				if (2 & n) {
					const n = d.XpG(3);
					d.Y8G("selected", d.bMT(1, 3, n.filterOrgStatus$)), d.BMQ("aria-label", d.bMT(2, 5, "addAccessFilter")), d.R7$(4), d.Y8G("ngForOf", n.filterStatus)
				}
			}

			function rt(n, t) {
				1 & n && (d.j41(0, "th", 23), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & n && (d.R7$(), d.SpI("\n              ", d.bMT(2, 1, "owner"), "\n            "))
			}

			function ot(n, t) {
				if (1 & n) {
					const n = d.RV6();
					d.qex(0), d.EFF(1, "\n                "), d.j41(2, "a", 30), d.nI1(3, "i18n"), d.bIt("click", (function() {
						d.eBV(n);
						const t = d.XpG().$implicit,
							e = d.XpG(4);
						return d.Njj(e.selectCipher(t))
					})), d.EFF(4), d.k0s(), d.EFF(5, "\n              "), d.bVm()
				}
				if (2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.FS9("title", d.i5U(3, 2, "editItemWithName", n.name)), d.R7$(2), d.JRh(n.name)
				}
			}

			function st(n, t) {
				if (1 & n && (d.EFF(0, "\n                "), d.j41(1, "span"), d.EFF(2), d.k0s(), d.EFF(3, "\n              ")), 2 & n) {
					const n = d.XpG().$implicit;
					d.R7$(2), d.JRh(n.name)
				}
			}

			function Ft(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 31), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "shared")), d.R7$(4), d.JRh(d.bMT(7, 4, "shared")))
			}

			function ct(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n                "), d.nrm(2, "i", 32), d.nI1(3, "i18n"), d.EFF(4, "\n                "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n              "), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "attachments")), d.R7$(4), d.JRh(d.bMT(7, 4, "attachments")))
			}

			function lt(n, t) {
				if (1 & n && (d.j41(0, "app-org-badge", 34), d.nI1(1, "async"), d.nI1(2, "orgNameFromId"), d.EFF(3, "\n              "), d.k0s()), 2 & n) {
					const n = d.XpG(2).$implicit,
						t = d.XpG(4);
					d.Y8G("disabled", t.disabled)("organizationId", n.organizationId)("organizationName", d.i5U(2, 5, n.organizationId, d.bMT(1, 3, t.organizations$)))
				}
			}

			function pt(n, t) {
				if (1 & n && (d.j41(0, "td", 14), d.EFF(1, "\n              "), d.DNE(2, lt, 4, 8, "app-org-badge", 33), d.EFF(3, "\n            "), d.k0s()), 2 & n) {
					const n = d.XpG(5);
					d.R7$(2), d.Y8G("ngIf", !n.organization)
				}
			}

			function dt(n, t) {
				if (1 & n && (d.j41(0, "tr", 13), d.EFF(1, "\n            "), d.j41(2, "td", 14), d.EFF(3, "\n              "), d.nrm(4, "app-vault-icon", 25), d.EFF(5, "\n            "), d.k0s(), d.EFF(6, "\n            "), d.j41(7, "td", 14), d.EFF(8, "\n              "), d.DNE(9, ot, 6, 5, "ng-container", 26), d.EFF(10, "\n              "), d.DNE(11, st, 4, 1, "ng-template", null, 1, d.C5r), d.EFF(13, "\n              "), d.DNE(14, Ft, 9, 6, "ng-container", 2), d.EFF(15, "\n              "), d.DNE(16, ct, 9, 6, "ng-container", 2), d.EFF(17, "\n              "), d.nrm(18, "br"), d.EFF(19, "\n              "), d.j41(20, "small"), d.EFF(21), d.k0s(), d.EFF(22, "\n            "), d.k0s(), d.EFF(23, "\n            "), d.DNE(24, pt, 4, 1, "td", 27), d.EFF(25, "\n            "), d.j41(26, "td", 28), d.EFF(27, "\n              "), d.j41(28, "span", 29), d.EFF(29), d.nI1(30, "i18n"), d.k0s(), d.EFF(31, "\n            "), d.k0s(), d.EFF(32, "\n          "), d.k0s()), 2 & n) {
					const n = t.$implicit,
						e = d.sdS(12),
						i = d.XpG(4);
					d.R7$(4), d.Y8G("cipher", n), d.R7$(5), d.Y8G("ngIf", !i.organization || i.canManageCipher(n))("ngIfElse", e), d.R7$(5), d.Y8G("ngIf", !i.organization && n.organizationId), d.R7$(2), d.Y8G("ngIf", n.hasAttachments), d.R7$(5), d.JRh(n.subTitle), d.R7$(3), d.Y8G("ngIf", !i.isAdminConsoleActive), d.R7$(4), d.Y8G("variant", n.reportValue.badgeVariant), d.R7$(), d.SpI("\n                ", d.bMT(30, 9, n.reportValue.label), "\n              ")
				}
			}

			function ut(n, t) {
				if (1 & n && (d.EFF(0, "\n          "), d.DNE(1, dt, 33, 11, "tr", 24), d.nI1(2, "async"), d.EFF(3, "\n        ")), 2 & n) {
					const n = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, n))
				}
			}

			function gt(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "bit-callout", 9), d.nI1(3, "i18n"), d.EFF(4), d.nI1(5, "number"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n      "), d.DNE(8, at, 6, 7, "bit-toggle-group", 10), d.EFF(9, "\n      "), d.j41(10, "bit-table", 11), d.EFF(11, "\n        "), d.qex(12, 12), d.EFF(13, "\n          "), d.j41(14, "tr", 13), d.EFF(15, "\n            "), d.nrm(16, "th", 14), d.EFF(17, "\n            "), d.j41(18, "th", 15), d.EFF(19), d.nI1(20, "i18n"), d.k0s(), d.EFF(21, "\n            "), d.DNE(22, rt, 3, 3, "th", 16), d.EFF(23, "\n            "), d.j41(24, "th", 17), d.EFF(25), d.nI1(26, "i18n"), d.k0s(), d.EFF(27, "\n          "), d.k0s(), d.EFF(28, "\n        "), d.bVm(), d.EFF(29, "\n        "), d.DNE(30, ut, 4, 3, "ng-template", 18), d.EFF(31, "\n      "), d.k0s(), d.EFF(32, "\n    "), d.bVm()), 2 & n) {
					const n = d.XpG(2);
					d.R7$(2), d.FS9("title", d.bMT(3, 7, "weakPasswordsFound")), d.R7$(2), d.SpI("\n        ", d.brH(6, 11, "weakPasswordsFoundReportDesc", d.bMT(5, 9, n.ciphers.length), n.vaultMsg), "\n      "), d.R7$(4), d.Y8G("ngIf", n.showFilterToggle && !n.isAdminConsoleActive), d.R7$(2), d.Y8G("dataSource", n.dataSource), d.R7$(9), d.JRh(d.bMT(20, 15, "name")), d.R7$(3), d.Y8G("ngIf", !n.isAdminConsoleActive), d.R7$(3), d.SpI("\n              ", d.bMT(26, 17, "weakness"), "\n            ")
				}
			}

			function Et(n, t) {
				if (1 & n && (d.j41(0, "div", 6), d.EFF(1, "\n    "), d.DNE(2, et, 4, 6, "bit-callout", 7), d.EFF(3, "\n    "), d.DNE(4, gt, 33, 19, "ng-container", 2), d.EFF(5, "\n  "), d.k0s()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.ciphers.length), d.R7$(2), d.Y8G("ngIf", n.ciphers.length)
				}
			}

			function ht(n, t) {}
			class ft extends Zn.w {
				constructor(n, t, e, i, a, r, o, s) {
					super(n, t, a, e, r, o, s), this.route = i
				}
				ngOnInit() {
					const n = Object.create(null, {
						ngOnInit: {
							get: () => super.ngOnInit
						}
					});
					return nt(this, void 0, void 0, (function*() {
						this.isAdminConsoleActive = !0, this.route.parent.parent.params.subscribe((t => nt(this, void 0, void 0, (function*() {
							this.organization = yield this.organizationService.get(t.organizationId), this.manageableCiphers = yield this.cipherService.getAll(), yield n.ngOnInit.call(this)
						}))))
					}))
				}
				getAllCiphers() {
					return this.cipherService.getAllFromApiForOrganization(this.organization.id)
				}
				canManageCipher(n) {
					return this.manageableCiphers.some((t => t.id === n.id))
				}
			}
			ft.ɵfac = function(n) {
				return new(n || ft)(d.rXU(u.p), d.rXU(Kn.Q), d.rXU(F.B), d.rXU(o.nX), d.rXU(s.PV), d.rXU(l.qX), d.rXU(E.W), d.rXU(c.H))
			}, ft.ɵcmp = d.VBU({
				type: ft,
				selectors: [
					["app-weak-passwords-report"]
				],
				features: [d.Vt3],
				decls: 16,
				vars: 5,
				consts: [
					["cipherAddEdit", ""],
					["cantManage", ""],
					[4, "ngIf"],
					["class", "tw-mt-4", 4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "tw-mt-4"],
					["type", "success", 3, "title", 4, "ngIf"],
					["type", "success", 3, "title"],
					["type", "danger", 3, "title"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					[3, "dataSource"],
					["header", ""],
					["bitRow", ""],
					["bitCell", ""],
					["bitCell", "", "bitSortable", "name"],
					["bitCell", "", "bitSortable", "organizationId", 4, "ngIf"],
					["bitCell", "", "bitSortable", "score", "default", "", 1, "tw-text-right"],
					["body", ""],
					[3, "selectedChange", "selected"],
					[4, "ngFor", "ngForOf"],
					[3, "value"],
					["bitBadge", "", "variant", "info"],
					["bitCell", "", "bitSortable", "organizationId"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					[3, "cipher"],
					[4, "ngIf", "ngIfElse"],
					["bitCell", "", 4, "ngIf"],
					["bitCell", "", 1, "tw-text-right"],
					["bitBadge", "", 3, "variant"],
					["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection", 3, "title"],
					["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"],
					["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]
				],
				template: function(n, t) {
					1 & n && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.j41(4, "p"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n  "), d.DNE(8, tt, 9, 6, "div", 2), d.EFF(9, "\n  "), d.DNE(10, Et, 6, 2, "div", 3), d.EFF(11, "\n  "), d.DNE(12, ht, 0, 0, "ng-template", null, 0, d.C5r), d.EFF(14, "\n"), d.k0s(), d.EFF(15, "\n")), 2 & n && (d.R7$(5), d.JRh(d.bMT(6, 3, "weakPasswordsReportDesc")), d.R7$(3), d.Y8G("ngIf", !t.hasLoaded && t.loading), d.R7$(2), d.Y8G("ngIf", t.hasLoaded))
				},
				dependencies: [h.Sq, h.bT, f.R, b.Y, m.x, I.n, v.G, $.H, k.L, w.Q, j.Y, S.O, y._, y.O, G.H, T.a, N.P, M.f, h.Jj, h.QX, X.$, D.t],
				encapsulation: 2
			});
			var bt = e(21274),
				mt = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function It() {
				return (n, t) => mt(this, void 0, void 0, (function*() {
					const t = (0, d.WQX)(o.Ix),
						e = (0, d.WQX)(s.PV),
						i = (0, d.WQX)(bt.o),
						a = yield e.get(n.params.organizationId);
					if (null == a) return t.createUrlTree(["/"]);
					if (a.isFreeOrg) {
						if (!a.canEditSubscription) return yield i.openSimpleDialog({
							title: {
								key: "upgradeOrganizationCloseSecurityGaps"
							},
							content: {
								key: "upgradeOrganizationCloseSecurityGapsDesc"
							},
							acceptButtonText: {
								key: "ok"
							},
							cancelButtonText: null,
							type: "info"
						}), !1;
						(yield i.openSimpleDialog({
							title: {
								key: "upgradeOrganizationCloseSecurityGaps"
							},
							content: {
								key: "upgradeOrganizationCloseSecurityGapsDesc"
							},
							acceptButtonText: {
								key: "upgradeOrganization"
							},
							type: "info",
							icon: "bwi-arrow-circle-up"
						})) && (yield t.navigate(["organizations", a.id, "billing", "subscription"], {
							queryParams: {
								upgrade: !0
							}
						}))
					}
					return !a.isFreeOrg
				}))
			}
			var Rt = e(77259),
				vt = e(95661),
				$t = e(66046),
				kt = e(73276),
				wt = e(14803),
				jt = e(90171),
				St = e(15623),
				yt = e(62800),
				Gt = e(98869);
			class Tt {
				constructor(n) {
					this.message = n.humanReadableMessage, this.appIcon = n.appIcon, this.appName = n.appName, this.userId = n.userId, this.userName = n.userName, this.userEmail = n.userEmail, this.date = n.date, this.ip = n.ip, this.type = St.Bx[n.type], this.installationId = n.installationId
				}
			}
			var Nt = function(n, t, e, i) {
				return new(e || (e = Promise))((function(a, r) {
					function o(n) {
						try {
							F(i.next(n))
						} catch (t) {
							r(t)
						}
					}

					function s(n) {
						try {
							F(i.throw(n))
						} catch (t) {
							r(t)
						}
					}

					function F(n) {
						var t;
						n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
							n(t)
						}))).then(o, s)
					}
					F((i = i.apply(n, t || [])).next())
				}))
			};
			class Mt {
				getEventExport(n) {
					return Nt(this, void 0, void 0, (function*() {
						return Gt.unparse(n.map((n => new Tt(n))))
					}))
				}
				getFileName(n = null, t = "csv") {
					const e = new Date;
					return "bitwarden" + (n ? "_" + n : "") + "_export_" + (e.getFullYear() + "" + this.padNumber(e.getMonth() + 1, 2) + this.padNumber(e.getDate(), 2) + this.padNumber(e.getHours(), 2) + this.padNumber(e.getMinutes(), 2) + this.padNumber(e.getSeconds(), 2)) + "." + t
				}
				padNumber(n, t, e = "0") {
					const i = n.toString();
					return i.length >= t ? i : new Array(t - i.length + 1).join(e) + i
				}
			}
			Mt.ɵfac = function(n) {
				return new(n || Mt)
			}, Mt.ɵprov = d.jDH({
				token: Mt,
				factory: Mt.ɵfac,
				providedIn: "root"
			});
			var Xt = e(51757),
				Dt = e(97319),
				zt = e(37115),
				Ut = e(53127),
				Ct = e(69855),
				Yt = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};
			class xt {
				constructor(n, t, e, i, a, r, o) {
					this.eventService = n, this.i18nService = t, this.exportService = e, this.platformUtilsService = i, this.logService = a, this.fileDownloadService = r, this.toastService = o, this.loading = !0, this.loaded = !1, this.dirtyDates = !0, this.eventsForm = new Xt.gE({
						start: new Xt.MJ(null),
						end: new Xt.MJ(null)
					}), this.loadMoreEvents = () => Yt(this, void 0, void 0, (function*() {
						yield this.loadEvents(!1)
					})), this.refreshEvents = () => Yt(this, void 0, void 0, (function*() {
						yield this.loadEvents(!0)
					})), this.exportEvents = () => Yt(this, void 0, void 0, (function*() {
						if (this.dirtyDates) return;
						this.loading = !0;
						const n = this.parseDates();
						if (null == n) return;
						let t;
						try {
							t = this.export(n[0], n[1]), yield t
						} catch (e) {
							this.logService.error(`Handled exception: ${e}`)
						}
						t = null, this.loading = !1
					})), this.loadEvents = n => Yt(this, void 0, void 0, (function*() {
						const t = this.parseDates();
						if (null == t) return;
						this.loading = !0;
						let e, i = [];
						e = this.loadAndParseEvents(t[0], t[1], n ? null : this.continuationToken);
						const a = yield e;
						this.continuationToken = a.continuationToken, i = a.events, !n && null != this.events && this.events.length > 0 ? this.events = this.events.concat(i) : this.events = i, this.dirtyDates = !1, this.loading = !1, e = null
					}));
					const s = this.eventService.getDefaultDateFilters();
					this.start = s[0], this.end = s[1]
				}
				get start() {
					return this.eventsForm.value.start
				}
				set start(n) {
					this.eventsForm.get("start").setValue(n)
				}
				get end() {
					return this.eventsForm.value.end
				}
				set end(n) {
					this.eventsForm.get("end").setValue(n)
				}
				loadAndParseEvents(n, t, e) {
					return Yt(this, void 0, void 0, (function*() {
						const i = yield this.requestEvents(n, t, e), a = yield Promise.all(i.data.map((n => Yt(this, void 0, void 0, (function*() {
							const t = null == n.actingUserId ? n.userId : n.actingUserId,
								e = yield this.eventService.getEventInfo(n), i = this.getUserName(n, t), a = null != i ? i.name : this.i18nService.t("unknown");
							return new Dt.g({
								message: e.message,
								humanReadableMessage: e.humanReadableMessage,
								appIcon: e.appIcon,
								appName: e.appName,
								userId: t,
								userName: a,
								userEmail: null != i ? i.email : "",
								date: n.date,
								ip: n.ipAddress,
								type: n.type,
								installationId: n.installationId,
								systemUser: n.systemUser,
								serviceAccountId: n.serviceAccountId
							})
						})))));
						return {
							continuationToken: i.continuationToken,
							events: a
						}
					}))
				}
				parseDates() {
					let n = null;
					try {
						n = this.eventService.formatDateFilters(this.start, this.end)
					} catch (t) {
						return this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("invalidDateRange")
						}), null
					}
					return n
				}
				export (n, t) {
					return Yt(this, void 0, void 0, (function*() {
						let e = this.continuationToken,
							i = [].concat(this.events);
						for (; null != e;) {
							const a = yield this.loadAndParseEvents(n, t, e);
							e = a.continuationToken, i = i.concat(a.events)
						}
						const a = yield this.exportService.getEventExport(i), r = this.exportService.getFileName(this.exportFileName, "csv");
						this.fileDownloadService.download({
							fileName: r,
							blobData: a,
							blobOptions: {
								type: "text/plain"
							}
						})
					}))
				}
			}
			xt.ɵfac = function(n) {
				return new(n || xt)(d.rXU(yt.US), d.rXU(E.W), d.rXU(Mt), d.rXU(zt.y), d.rXU(Z.K), d.rXU(Ut.y), d.rXU(Ct.f))
			}, xt.ɵdir = d.FsC({
				type: xt
			});
			var At = e(12012),
				Ot = e(13417),
				Vt = e(3892),
				Pt = e(26657),
				Jt = e(86226),
				Bt = e(97553),
				qt = e(43759),
				Ht = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function Lt(n, t) {
				1 & n && (d.qex(0), d.EFF(1, "\n  "), d.nrm(2, "i", 9), d.nI1(3, "i18n"), d.EFF(4, "\n  "), d.j41(5, "span", 10), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n"), d.bVm()), 2 & n && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function Wt(n, t) {
				1 & n && (d.j41(0, "p"), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & n && (d.R7$(), d.JRh(d.bMT(2, 1, "noEventsInList")))
			}

			function Qt(n, t) {
				if (1 & n && (d.j41(0, "tr", 16), d.EFF(1, "\n        "), d.j41(2, "td", 17), d.EFF(3), d.nI1(4, "date"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "td", 13), d.EFF(7, "\n          "), d.j41(8, "span", 18), d.EFF(9), d.k0s(), d.EFF(10, "\n        "), d.k0s(), d.EFF(11, "\n        "), d.j41(12, "td", 13), d.EFF(13, "\n          "), d.j41(14, "span", 18), d.EFF(15), d.k0s(), d.EFF(16, "\n        "), d.k0s(), d.EFF(17, "\n        "), d.nrm(18, "td", 19), d.EFF(19, "\n      "), d.k0s()), 2 & n) {
					const n = t.$implicit;
					d.R7$(3), d.JRh(d.i5U(4, 8, n.date, "medium")), d.R7$(5), d.FCK("title", "", n.appName, ", ", n.ip, ""), d.R7$(), d.JRh(n.appName), d.R7$(5), d.FS9("title", n.userEmail), d.R7$(), d.JRh(n.userName), d.R7$(3), d.Y8G("innerHTML", n.message, d.npT)
				}
			}

			function _t(n, t) {
				if (1 & n && (d.EFF(0, "\n      "), d.DNE(1, Qt, 20, 11, "tr", 15), d.EFF(2, "\n    ")), 2 & n) {
					const n = d.XpG(3);
					d.R7$(), d.Y8G("ngForOf", n.events)
				}
			}

			function Kt(n, t) {
				1 & n && (d.j41(0, "bit-table"), d.EFF(1, "\n    "), d.qex(2, 12), d.EFF(3, "\n      "), d.j41(4, "tr"), d.EFF(5, "\n        "), d.j41(6, "th", 13), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n        "), d.j41(10, "th", 13), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n        "), d.j41(14, "th", 13), d.EFF(15), d.nI1(16, "i18n"), d.k0s(), d.EFF(17, "\n        "), d.j41(18, "th", 13), d.EFF(19), d.nI1(20, "i18n"), d.k0s(), d.EFF(21, "\n      "), d.k0s(), d.EFF(22, "\n    "), d.bVm(), d.EFF(23, "\n    "), d.DNE(24, _t, 3, 1, "ng-template", 14), d.EFF(25, "\n  "), d.k0s()), 2 & n && (d.R7$(7), d.JRh(d.bMT(8, 4, "timestamp")), d.R7$(4), d.JRh(d.bMT(12, 6, "client")), d.R7$(4), d.JRh(d.bMT(16, 8, "member")), d.R7$(4), d.JRh(d.bMT(20, 10, "event")))
			}

			function Zt(n, t) {
				if (1 & n && (d.j41(0, "button", 20), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & n) {
					const n = d.XpG(2);
					d.Y8G("bitAction", n.loadMoreEvents), d.R7$(), d.SpI("\n    ", d.bMT(2, 2, "loadMore"), "\n  ")
				}
			}

			function ne(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n  "), d.DNE(2, Wt, 3, 3, "p", 8), d.EFF(3, "\n  "), d.DNE(4, Kt, 26, 12, "bit-table", 8), d.EFF(5, "\n  "), d.DNE(6, Zt, 3, 4, "button", 11), d.EFF(7, "\n"), d.bVm()), 2 & n) {
					const n = d.XpG();
					d.R7$(2), d.Y8G("ngIf", !n.events || !n.events.length), d.R7$(2), d.Y8G("ngIf", n.events && n.events.length), d.R7$(2), d.Y8G("ngIf", n.continuationToken)
				}
			}
			const te = {
				[St.p2.SCIM]: null,
				[St.p2.DomainVerification]: "domainVerification",
				[St.p2.PublicApi]: "publicApi"
			};
			class ee extends xt {
				constructor(n, t, e, i, a, r, o, s, F, c, l, p, d, u) {
					super(e, i, a, r, s, d, u), this.apiService = n, this.route = t, this.router = o, this.userNamePipe = F, this.organizationService = c, this.organizationUserApiService = l, this.providerService = p, this.exportFileName = "org-events", this.orgUsersUserIdMap = new Map, this.destroy$ = new $t.B
				}
				ngOnInit() {
					return Ht(this, void 0, void 0, (function*() {
						this.route.params.pipe((0, kt.H)((n => Ht(this, void 0, void 0, (function*() {
							this.organizationId = n.organizationId, this.organization = yield this.organizationService.get(this.organizationId), null != this.organization && this.organization.useEvents ? yield this.load(): yield this.router.navigate(["/organizations", this.organizationId])
						})))), (0, wt.Q)(this.destroy$)).subscribe()
					}))
				}
				load() {
					return Ht(this, void 0, void 0, (function*() {
						if ((yield this.organizationUserApiService.getAllMiniUserDetails(this.organizationId)).data.forEach((n => {
								const t = this.userNamePipe.transform(n);
								this.orgUsersUserIdMap.set(n.userId, {
									name: t,
									email: n.email
								})
							})), null != this.organization.providerId) try {
							if (null != (yield this.providerService.get(this.organization.providerId)) && (yield this.providerService.get(this.organization.providerId)).canManageUsers) {
								(yield this.apiService.getProviderUsers(this.organization.providerId)).data.forEach((n => {
									const t = this.userNamePipe.transform(n);
									this.orgUsersUserIdMap.set(n.userId, {
										name: `${t} (${this.organization.providerName})`,
										email: n.email
									})
								}))
							}
						} catch (n) {
							this.logService.warning(n)
						}
						yield this.refreshEvents(), this.loaded = !0
					}))
				}
				requestEvents(n, t, e) {
					return this.apiService.getEventsOrganization(this.organizationId, n, t, e)
				}
				getUserName(n, t) {
					if (null != n.installationId) return {
						name: `Installation: ${n.installationId}`
					};
					if (null != t) {
						if (this.orgUsersUserIdMap.has(t)) return this.orgUsersUserIdMap.get(t);
						if (null != n.providerId && n.providerId === this.organization.providerId) return {
							name: this.organization.providerName
						}
					}
					if (null != n.systemUser) {
						const t = te[n.systemUser];
						return t ? {
							name: this.i18nService.t(t)
						} : {
							name: St.p2[n.systemUser]
						}
					}
					return n.serviceAccountId ? {
						name: this.i18nService.t("machineAccount") + " " + this.getShortId(n.serviceAccountId)
					} : null
				}
				getShortId(n) {
					return null == n ? void 0 : n.substring(0, 8)
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}
			ee.ɵfac = function(n) {
				return new(n || ee)(d.rXU(At.G), d.rXU(o.nX), d.rXU(yt.US), d.rXU(E.W), d.rXU(Mt), d.rXU(zt.y), d.rXU(o.Ix), d.rXU(Z.K), d.rXU(jt.b), d.rXU(s.PV), d.rXU(zn.uB), d.rXU(Ot.$), d.rXU(Ut.y), d.rXU(Ct.f))
			}, ee.ɵcmp = d.VBU({
				type: ee,
				selectors: [
					["app-org-events"]
				],
				features: [d.Vt3],
				decls: 54,
				vars: 24,
				consts: [
					[1, "tw-mb-4", 3, "formGroup"],
					[1, "tw-mt-4", "tw-flex", "tw-items-center"],
					["bitInput", "", "type", "datetime-local", "formControlName", "start", 3, "change", "placeholder"],
					[1, "tw-mx-2"],
					["bitInput", "", "type", "datetime-local", "formControlName", "end", 3, "change", "placeholder"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "primary", 1, "tw-mx-3", "tw-mt-1", 3, "bitAction"],
					["type", "button", "bitButton", "", "bitFormButton", "", 1, "tw-mt-1", 3, "bitAction", "disabled"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-sign-in"],
					[4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction", 4, "ngIf"],
					["header", ""],
					["bitCell", ""],
					["body", ""],
					["bitRow", "", "alignContent", "top", 4, "ngFor", "ngForOf"],
					["bitRow", "", "alignContent", "top"],
					["bitCell", "", 1, "tw-whitespace-nowrap"],
					[3, "title"],
					["bitCell", "", 3, "innerHTML"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"]
				],
				template: function(n, t) {
					1 & n && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "div", 0), d.EFF(3, "\n  "), d.j41(4, "div", 1), d.EFF(5, "\n    "), d.j41(6, "bit-form-field"), d.EFF(7, "\n      "), d.j41(8, "bit-label"), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n      "), d.j41(12, "input", 2), d.nI1(13, "i18n"), d.bIt("change", (function() {
						return t.dirtyDates = !0
					})), d.k0s(), d.EFF(14, "\n    "), d.k0s(), d.EFF(15, "\n    "), d.j41(16, "span", 3), d.EFF(17, "-"), d.k0s(), d.EFF(18, "\n    "), d.j41(19, "bit-form-field"), d.EFF(20, "\n      "), d.j41(21, "bit-label"), d.EFF(22), d.nI1(23, "i18n"), d.k0s(), d.EFF(24, "\n      "), d.j41(25, "input", 4), d.nI1(26, "i18n"), d.bIt("change", (function() {
						return t.dirtyDates = !0
					})), d.k0s(), d.EFF(27, "\n    "), d.k0s(), d.EFF(28, "\n    "), d.j41(29, "form"), d.EFF(30, "\n      "), d.j41(31, "button", 5), d.EFF(32), d.nI1(33, "i18n"), d.k0s(), d.EFF(34, "\n    "), d.k0s(), d.EFF(35, "\n    "), d.j41(36, "form"), d.EFF(37, "\n      "), d.j41(38, "button", 6), d.EFF(39, "\n        "), d.j41(40, "span"), d.EFF(41), d.nI1(42, "i18n"), d.k0s(), d.EFF(43, "\n        "), d.nrm(44, "i", 7), d.EFF(45, "\n      "), d.k0s(), d.EFF(46, "\n    "), d.k0s(), d.EFF(47, "\n  "), d.k0s(), d.EFF(48, "\n"), d.k0s(), d.EFF(49, "\n"), d.DNE(50, Lt, 9, 6, "ng-container", 8), d.EFF(51, "\n"), d.DNE(52, ne, 8, 3, "ng-container", 8), d.EFF(53, "\n")), 2 & n && (d.R7$(2), d.Y8G("formGroup", t.eventsForm), d.R7$(7), d.JRh(d.bMT(10, 12, "from")), d.R7$(3), d.FS9("placeholder", d.bMT(13, 14, "startDate")), d.R7$(10), d.JRh(d.bMT(23, 16, "to")), d.R7$(3), d.FS9("placeholder", d.bMT(26, 18, "endDate")), d.R7$(6), d.Y8G("bitAction", t.refreshEvents), d.R7$(), d.SpI("\n        ", d.bMT(33, 20, "update"), "\n      "), d.R7$(6), d.Y8G("bitAction", t.exportEvents)("disabled", t.dirtyDates), d.R7$(3), d.JRh(d.bMT(42, 22, "export")), d.R7$(9), d.Y8G("ngIf", !t.loaded), d.R7$(2), d.Y8G("ngIf", t.loaded))
				},
				dependencies: [h.Sq, h.bT, Xt.qT, Xt.me, Xt.BC, Xt.cb, Xt.cV, Xt.j4, Xt.JD, Vt.p, Pt.$, R.Q, Jt.m, Bt.J, qt.h, w.Q, j.Y, y._, y.O, M.f, h.vh, X.$],
				encapsulation: 2
			});
			var ie = e(69194),
				ae = e(3204),
				re = e(12610),
				oe = e(10436),
				se = e(58806),
				Fe = e(47784),
				ce = function(n, t, e, i) {
					return new(e || (e = Promise))((function(a, r) {
						function o(n) {
							try {
								F(i.next(n))
							} catch (t) {
								r(t)
							}
						}

						function s(n) {
							try {
								F(i.throw(n))
							} catch (t) {
								r(t)
							}
						}

						function F(n) {
							var t;
							n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(o, s)
						}
						F((i = i.apply(n, t || [])).next())
					}))
				};

			function le(n, t) {
				if (1 & n && (d.qex(0), d.EFF(1, "\n  "), d.nrm(2, "app-header"), d.EFF(3, "\n\n  "), d.j41(4, "p", 3), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n\n  "), d.nrm(8, "app-report-list", 4), d.nI1(9, "async"), d.EFF(10, "\n"), d.bVm()), 2 & n) {
					const n = d.XpG();
					d.R7$(5), d.JRh(d.bMT(6, 2, "orgsReportsDesc")), d.R7$(3), d.Y8G("reports", d.bMT(9, 4, n.reports$))
				}
			}

			function pe(n, t) {
				1 & n && (d.j41(0, "a", 5), d.EFF(1, "\n    "), d.nrm(2, "i", 6), d.EFF(3), d.nI1(4, "i18n"), d.k0s()), 2 & n && (d.R7$(3), d.SpI("\n    ", d.bMT(4, 1, "backToReports"), "\n  "))
			}
			class de {
				constructor(n, t, e) {
					this.route = n, this.organizationService = t, this.router = e
				}
				ngOnInit() {
					return ce(this, void 0, void 0, (function*() {
						this.homepage$ = this.router.events.pipe((0, ie.p)((n => n instanceof o.wF)), (0, ae.T)((n => this.isReportsHomepageRouteUrl(n.urlAfterRedirects))), (0, re.Z)(this.isReportsHomepageRouteUrl(this.router.url))), this.reports$ = this.route.params.pipe((0, kt.H)((n => this.organizationService.get$(n.organizationId))), (0, ae.T)((n => this.buildReports(n.productTierType))))
					}))
				}
				buildReports(n) {
					const t = n == oe.K_.Free ? r.C0.RequiresUpgrade : r.C0.Enabled;
					return [Object.assign(Object.assign({}, r.uE[r.nI.ExposedPasswords]), {
						variant: t
					}), Object.assign(Object.assign({}, r.uE[r.nI.ReusedPasswords]), {
						variant: t
					}), Object.assign(Object.assign({}, r.uE[r.nI.WeakPasswords]), {
						variant: t
					}), Object.assign(Object.assign({}, r.uE[r.nI.UnsecuredWebsites]), {
						variant: t
					}), Object.assign(Object.assign({}, r.uE[r.nI.Inactive2fa]), {
						variant: t
					}), Object.assign(Object.assign({}, r.uE[r.nI.MemberAccessReport]), {
						variant: n == oe.K_.Enterprise ? r.C0.Enabled : r.C0.RequiresEnterprise
					})]
				}
				isReportsHomepageRouteUrl(n) {
					return n.endsWith("/reports")
				}
			}
			de.ɵfac = function(n) {
				return new(n || de)(d.rXU(o.nX), d.rXU(s.PV), d.rXU(o.Ix))
			}, de.ɵcmp = d.VBU({
				type: de,
				selectors: [
					["app-org-reports-home"]
				],
				decls: 11,
				vars: 6,
				consts: [
					[4, "ngIf"],
					[1, "tw-mt-4"],
					["bitButton", "", "routerLink", "./", 4, "ngIf"],
					["bitTypography", "body1"],
					[3, "reports"],
					["bitButton", "", "routerLink", "./"],
					["aria-hidden", "true", 1, "bwi", "bwi-angle-left"]
				],
				template: function(n, t) {
					1 & n && (d.DNE(0, le, 11, 6, "ng-container", 0), d.nI1(1, "async"), d.EFF(2, "\n\n"), d.nrm(3, "router-outlet"), d.EFF(4, "\n\n"), d.j41(5, "div", 1), d.EFF(6, "\n  "), d.DNE(7, pe, 5, 3, "a", 2), d.nI1(8, "async"), d.EFF(9, "\n"), d.k0s(), d.EFF(10, "\n")), 2 & n && (d.Y8G("ngIf", d.bMT(1, 2, t.homepage$)), d.R7$(7), d.Y8G("ngIf", !d.bMT(8, 4, t.homepage$)))
				},
				dependencies: [h.bT, o.n3, o.Wk, R.Q, se.r, Fe.i, M.f, h.Jj, X.$],
				encapsulation: 2
			});
			const ue = [{
				path: "",
				canActivate: [(0, Rt.V)(s.Ue)],
				children: [{
					path: "",
					pathMatch: "full",
					canActivate: [(0, vt.r)((function(n) {
						if (n.canAccessEventLogs) return "events";
						if (n.canAccessReports) return "reports";
						return
					}))],
					children: []
				}, {
					path: "reports",
					component: de,
					canActivate: [(0, Rt.V)()],
					data: {
						titleId: "reports"
					},
					children: [{
						path: "exposed-passwords-report",
						component: _,
						data: {
							titleId: "exposedPasswordsReport"
						},
						canActivate: [It()]
					}, {
						path: "inactive-two-factor-report",
						component: hn,
						data: {
							titleId: "inactive2faReport"
						},
						canActivate: [It()]
					}, {
						path: "reused-passwords-report",
						component: Dn,
						data: {
							titleId: "reusedPasswordsReport"
						},
						canActivate: [It()]
					}, {
						path: "unsecured-websites-report",
						component: _n,
						data: {
							titleId: "unsecuredWebsitesReport"
						},
						canActivate: [It()]
					}, {
						path: "weak-passwords-report",
						component: ft,
						data: {
							titleId: "weakPasswordsReport"
						},
						canActivate: [It()]
					}]
				}, {
					path: "events",
					component: ee,
					canActivate: [(0, Rt.V)((n => n.canAccessEventLogs))],
					data: {
						titleId: "eventLogs"
					}
				}]
			}];
			class ge {}
			ge.ɵfac = function(n) {
				return new(n || ge)
			}, ge.ɵmod = d.$C({
				type: ge
			}), ge.ɵinj = d.G2t({
				imports: [o.iI.forChild(ue), o.iI]
			});
			class Ee {}
			Ee.ɵfac = function(n) {
				return new(n || Ee)
			}, Ee.ɵmod = d.$C({
				type: Ee
			}), Ee.ɵinj = d.G2t({
				imports: [a.G, r.DF, ge, i.T]
			})
		}
	}
]);
//# sourceMappingURL=887.4fa1b5784a38bed10538.js.map