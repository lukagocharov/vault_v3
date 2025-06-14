"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[982], {
		77601: (t, n, i) => {
			i.r(n), i.d(n, {
				OrganizationBillingModule: () => ue
			});
			var e = i(90097),
				o = i(50866),
				s = i(25065),
				H = i(55067),
				r = i(89459),
				a = i(32451),
				c = i(67553),
				u = i(82468),
				l = i(77259),
				d = i(56111),
				p = i(13417),
				h = i(52759),
				F = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};
			const b = t => F(void 0, void 0, void 0, (function*() {
				const n = (0, d.WQX)(c.PV),
					i = (0, d.WQX)(p.$),
					e = yield n.get(t.params.organizationId);
				if (!e.hasProvider) return !0;
				const o = yield i.get(e.providerId);
				return !o || o.providerStatus !== h.kC.Billable
			}));
			var g = i(83724),
				m = i(66046),
				S = i(73276),
				f = i(14803),
				v = i(49247),
				E = i(52981),
				y = i(56898),
				I = i(10672),
				w = i(78650),
				k = i(20464),
				C = i(88016),
				R = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};

			function T(t, n) {
				1 & t && (d.qex(0), d.EFF(1, "\n    "), d.nrm(2, "i", 1), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 2), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.bVm()), 2 & t && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function $(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 5), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(2);
						return d.Njj(n.load())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				2 & t && (d.R7$(), d.SpI("\n      ", d.bMT(2, 1, "loadMore"), "\n    "))
			}

			function M(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n    "), d.nrm(2, "app-billing-history", 3), d.EFF(3, "\n    "), d.DNE(4, $, 3, 3, "button", 4), d.EFF(5, "\n  "), d.bVm()), 2 & t) {
					const t = d.XpG();
					d.R7$(2), d.Y8G("openInvoices", t.openInvoices)("paidInvoices", t.paidInvoices)("transactions", t.transactions), d.R7$(2), d.Y8G("ngIf", t.hasAdditionalHistory)
				}
			}
			class j {
				constructor(t, n) {
					this.organizationBillingApiService = t, this.route = n, this.loading = !1, this.firstLoaded = !1, this.openInvoices = [], this.paidInvoices = [], this.transactions = [], this.hasAdditionalHistory = !1, this.destroy$ = new m.B
				}
				ngOnInit() {
					return R(this, void 0, void 0, (function*() {
						this.route.params.pipe((0, S.H)((t => R(this, void 0, void 0, (function*() {
							this.organizationId = t.organizationId, yield this.load(), this.firstLoaded = !0
						})))), (0, f.Q)(this.destroy$)).subscribe()
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				load() {
					return R(this, void 0, void 0, (function*() {
						this.loading || (this.loading = !0, this.loading = !1)
					}))
				}
			}
			j.ɵfac = function(t) {
				return new(t || j)(d.rXU(v.C), d.rXU(r.nX))
			}, j.ɵcmp = d.VBU({
				type: j,
				selectors: [
					["ng-component"]
				],
				decls: 10,
				vars: 2,
				consts: [
					[4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "openInvoices", "paidInvoices", "transactions"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click", 4, "ngIf"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "app-header"), d.EFF(1, " "), d.k0s(), d.EFF(2, "\n\n"), d.j41(3, "bit-container"), d.EFF(4, "\n  "), d.DNE(5, T, 9, 6, "ng-container", 0), d.EFF(6, "\n  "), d.DNE(7, M, 6, 4, "ng-container", 0), d.EFF(8, "\n"), d.k0s(), d.EFF(9, "\n")), 2 & t && (d.R7$(5), d.Y8G("ngIf", !n.firstLoaded && n.loading), d.R7$(2), d.Y8G("ngIf", n.openInvoices || n.paidInvoices || n.transactions))
				},
				dependencies: [E.bT, y.Q, I.H, w.D, k.f, C.$],
				encapsulation: 2
			});
			var G = i(88565),
				A = i(72245),
				x = i(10436),
				P = i(4886),
				D = i(63247),
				B = i(97062),
				U = i(81525),
				X = i(51757),
				z = i(7248);
			class N extends z.V {
				constructor() {
					super(...arguments), this.type = h.pC.Default
				}
			}
			var Y = i(62166),
				O = i(12012),
				V = i(37115),
				L = i(50700),
				q = i(11224),
				J = i(56962),
				_ = i(69855),
				W = i(7855),
				K = i(39801),
				Z = i(89946),
				Q = i(26657),
				tt = i(45154),
				nt = i(44432),
				it = i(7730),
				et = i(6579),
				ot = i(86226),
				st = i(97553),
				Ht = i(43759),
				rt = i(69896),
				at = i(36288),
				ct = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};

			function ut(t, n) {
				1 & t && (d.j41(0, "app-user-verification", 9), d.EFF(1, "\n      "), d.k0s())
			}

			function lt(t, n) {
				1 & t && (d.qex(0), d.EFF(1, "\n        "), d.j41(2, "p"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "bit-callout", 10), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n      "), d.bVm()), 2 & t && (d.R7$(3), d.JRh(d.bMT(4, 2, "rotateBillingSyncTokenTitle")), d.R7$(4), d.SpI("\n          ", d.bMT(8, 4, "rotateBillingSyncTokenWarning"), "\n        "))
			}

			function dt(t, n) {
				if (1 & t && (d.j41(0, "div", 15), d.EFF(1, "\n          "), d.j41(2, "b", 16), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5), d.nI1(6, "date"), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.R7$(3), d.SpI("", d.bMT(4, 2, "lastSync"), ":"), d.R7$(2), d.SpI("\n          ", d.i5U(6, 4, t.lastSyncDate, "medium"), "\n        ")
				}
			}

			function pt(t, n) {
				if (1 & t && (d.j41(0, "div", 17), d.EFF(1, "\n          "), d.nrm(2, "i", 18), d.EFF(3), d.nI1(4, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.R7$(3), d.SpI("\n          ", d.i5U(4, 1, 1 === t.daysBetween ? "awaitingSyncSingular" : "awaitingSyncPlural", t.daysBetween), "\n        ")
				}
			}

			function ht(t, n) {
				if (1 & t && (d.j41(0, "div"), d.EFF(1, "\n        "), d.j41(2, "p"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "bit-form-field"), d.EFF(7, "\n          "), d.j41(8, "bit-label"), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n          "), d.nrm(12, "input", 11), d.EFF(13, "\n          "), d.nrm(14, "button", 12), d.nI1(15, "i18n"), d.nI1(16, "i18n"), d.EFF(17, "\n        "), d.k0s(), d.EFF(18, "\n        "), d.DNE(19, dt, 7, 7, "div", 13), d.EFF(20, "\n        "), d.DNE(21, pt, 5, 4, "div", 14), d.EFF(22, "\n      "), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.R7$(3), d.JRh(d.bMT(4, 8, "copyPasteBillingSync")), d.R7$(6), d.JRh(d.bMT(10, 10, "billingSyncKey")), d.R7$(3), d.Y8G("value", t.clientSecret), d.R7$(2), d.Y8G("valueLabel", d.bMT(15, 12, "billingSyncKey"))("appCopyClick", t.clientSecret)("appA11yTitle", d.bMT(16, 14, "copyValue")), d.R7$(5), d.Y8G("ngIf", t.showLastSyncText), d.R7$(2), d.Y8G("ngIf", t.showAwaitingSyncText)
				}
			}

			function Ft(t, n) {
				if (1 & t && (d.j41(0, "button", 19), d.EFF(1), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.R7$(), d.SpI("\n        ", t.submitButtonText, "\n      ")
				}
			}

			function bt(t, n) {
				1 & t && (d.j41(0, "button", 20), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.SpI("\n        ", d.bMT(2, 1, "close"), "\n      "))
			}

			function gt(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 21), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG();
						return d.Njj(n.cancelRotate())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				2 & t && (d.R7$(), d.SpI("\n        ", d.bMT(2, 1, "cancel"), "\n      "))
			}

			function mt(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 21), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG();
						return d.Njj(n.rotateToken())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				2 & t && (d.R7$(), d.SpI("\n        ", d.bMT(2, 1, "rotateToken"), "\n      "))
			}
			class St {
				constructor(t, n, i, e, o, s, H, r) {
					this.data = t, this.userVerificationService = n, this.apiService = i, this.platformUtilsService = e, this.i18nService = o, this.organizationApiService = s, this.logService = H, this.toastService = r, this.formGroup = new X.gE({
						verification: new X.MJ(null, X.k0.required)
					}), this.submit = () => ct(this, void 0, void 0, (function*() {
						try {
							const t = this.userVerificationService.buildRequest(this.formGroup.value.verification, N).then((t => (t.type = h.pC.BillingSync, t)));
							if (this.showRotateScreen) {
								const n = yield t.then((t => this.organizationApiService.rotateApiKey(this.organizationId, t)));
								yield this.load(n), this.showRotateScreen = !1, this.toastService.showToast({
									variant: "success",
									title: null,
									message: this.i18nService.t("billingSyncApiKeyRotated")
								})
							} else {
								const n = yield t.then((t => this.organizationApiService.getOrCreateApiKey(this.organizationId, t)));
								yield this.load(n)
							}
						} catch (t) {
							throw this.logService.error(t), t
						}
					})), this.organizationId = t.organizationId, this.hasBillingToken = t.hasBillingToken
				}
				copy() {
					this.platformUtilsService.copyToClipboard(this.clientSecret)
				}
				load(t) {
					return ct(this, void 0, void 0, (function*() {
						this.clientSecret = t.apiKey, this.keyRevisionDate = t.revisionDate, this.hasBillingToken = !0;
						const n = yield this.apiService.getSponsorshipSyncStatus(this.organizationId);
						this.lastSyncDate = n.lastSyncDate
					}))
				}
				cancelRotate() {
					this.showRotateScreen = !1
				}
				rotateToken() {
					this.showRotateScreen = !0
				}
				dayDiff(t, n) {
					const i = Math.abs(n.getTime() - t.getTime());
					return Math.round(i / 864e5)
				}
				get submitButtonText() {
					return this.showRotateScreen ? this.i18nService.t("rotateToken") : this.i18nService.t(this.hasBillingToken ? "continue" : "generateToken")
				}
				get showLastSyncText() {
					return this.lastSyncDate && this.lastSyncDate > this.keyRevisionDate
				}
				get showAwaitingSyncText() {
					return this.lastSyncDate && this.lastSyncDate <= this.keyRevisionDate
				}
				get daysBetween() {
					return this.dayDiff(this.keyRevisionDate, new Date)
				}
				static open(t, n) {
					return t.open(St, {
						data: n
					})
				}
			}
			St.ɵfac = function(t) {
				return new(t || St)(d.rXU(U.Qs), d.rXU(Y.i), d.rXU(O.G), d.rXU(V.y), d.rXU(L.W), d.rXU(q.X), d.rXU(J.K), d.rXU(_.f))
			}, St.ɵcmp = d.VBU({
				type: St,
				selectors: [
					["ng-component"]
				],
				decls: 30,
				vars: 12,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					["formControlName", "verification", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", 4, "ngIf"],
					["bitButton", "", "bitDialogClose", "", "type", "button", 4, "ngIf"],
					["bitButton", "", "type", "button", 3, "click", 4, "ngIf"],
					["formControlName", "verification"],
					["type", "warning"],
					["bitInput", "", "id", "clientSecret", "type", "text", "disabled", "", 1, "tw-font-mono", 3, "value"],
					["bitIconButton", "bwi-clone", "bitSuffix", "", "type", "button", "showToast", "", 3, "valueLabel", "appCopyClick", "appA11yTitle"],
					["class", "tw-mt-2 tw-text-sm tw-text-muted", 4, "ngIf"],
					["class", "tw-mt-2 tw-text-sm tw-text-danger", 4, "ngIf"],
					[1, "tw-mt-2", "tw-text-sm", "tw-text-muted"],
					[1, "tw-font-semibold"],
					[1, "tw-mt-2", "tw-text-sm", "tw-text-danger"],
					[1, "bwi", "bwi-error"],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"],
					["bitButton", "", "bitDialogClose", "", "type", "button"],
					["bitButton", "", "type", "button", 3, "click"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "bit-dialog"), d.EFF(3, "\n    "), d.j41(4, "span", 1), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n    "), d.j41(8, "div", 2), d.EFF(9, "\n      "), d.DNE(10, ut, 2, 0, "app-user-verification", 3), d.EFF(11, "\n\n      "), d.DNE(12, lt, 10, 6, "ng-container", 4), d.EFF(13, "\n\n      "), d.DNE(14, ht, 23, 16, "div", 4), d.EFF(15, "\n    "), d.k0s(), d.EFF(16, "\n    "), d.qex(17, 5), d.EFF(18, "\n      "), d.DNE(19, Ft, 2, 1, "button", 6), d.EFF(20, "\n      "), d.DNE(21, bt, 3, 3, "button", 7), d.EFF(22, "\n      "), d.DNE(23, gt, 3, 3, "button", 8), d.EFF(24, "\n      "), d.DNE(25, mt, 3, 3, "button", 8), d.EFF(26, "\n    "), d.bVm(), d.EFF(27, "\n  "), d.k0s(), d.EFF(28, "\n"), d.k0s(), d.EFF(29, "\n")), 2 & t && (d.Y8G("formGroup", n.formGroup)("bitSubmit", n.submit), d.R7$(5), d.SpI("\n      ", d.bMT(6, 10, n.hasBillingToken ? "viewBillingToken" : "generateBillingToken"), "\n    "), d.R7$(5), d.Y8G("ngIf", !n.clientSecret), d.R7$(2), d.Y8G("ngIf", n.clientSecret && n.showRotateScreen), d.R7$(2), d.Y8G("ngIf", n.clientSecret && !n.showRotateScreen), d.R7$(5), d.Y8G("ngIf", !n.clientSecret || n.showRotateScreen), d.R7$(2), d.Y8G("ngIf", !n.showRotateScreen), d.R7$(2), d.Y8G("ngIf", n.showRotateScreen), d.R7$(2), d.Y8G("ngIf", n.clientSecret && !n.showRotateScreen))
				},
				dependencies: [W.q, E.bT, X.qT, X.BC, X.cb, X.j4, X.JD, K.C, Z.D, Q.$, tt.L, y.Q, nt.G, it.I, et.m, ot.m, st.J, Ht.h, rt.a, at.s, E.vh, C.$],
				encapsulation: 2
			});
			var ft, vt = i(16452),
				Et = i(53127),
				yt = i(3892),
				It = i(59032),
				wt = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};
			! function(t) {
				t.Cancelled = "cancelled", t.Downloaded = "downloaded"
			}(ft || (ft = {}));
			class kt {
				constructor(t, n, i, e, o) {
					this.data = t, this.dialogRef = n, this.fileDownloadService = i, this.organizationApiService = e, this.formBuilder = o, this.licenseForm = this.formBuilder.group({
						installationId: ["", [X.k0.required]]
					}), this.submit = () => wt(this, void 0, void 0, (function*() {
						this.licenseForm.markAllAsTouched();
						const t = this.licenseForm.get("installationId").value;
						if (null == t || "" === t) return;
						const n = yield this.organizationApiService.getLicense(this.data.organizationId, t), i = JSON.stringify(n, null, 2);
						this.fileDownloadService.download({
							fileName: "bitwarden_organization_license.json",
							blobData: i
						}), this.dialogRef.close(ft.Downloaded)
					})), this.cancel = () => {
						this.dialogRef.close(ft.Cancelled)
					}
				}
				static open(t, n) {
					return t.open(kt, n)
				}
			}
			kt.ɵfac = function(t) {
				return new(t || kt)(d.rXU(U.Qs), d.rXU(U.ce), d.rXU(Et.y), d.rXU(q.X), d.rXU(X.ok))
			}, kt.ɵcmp = d.VBU({
				type: kt,
				selectors: [
					["ng-component"]
				],
				decls: 45,
				vars: 18,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"],
					[1, "tw-col-span-8"],
					["bitLink", "", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/licensing-on-premise/#organization-account-sharing", "slot", "end", 1, "tw-ml-auto", 3, "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-question-circle"],
					["type", "text", "bitInput", "", "formControlName", "installationId"],
					["bitDialogFooter", ""],
					["bitButton", "", "bitFormButton", "", "buttonType", "primary", "type", "submit"],
					["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "bit-dialog"), d.EFF(3, "\n    "), d.j41(4, "span", 1), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n    "), d.qex(8, 2), d.EFF(9, "\n      "), d.j41(10, "div", 3), d.EFF(11, "\n        "), d.j41(12, "div", 4), d.EFF(13, "\n          "), d.j41(14, "bit-form-field"), d.EFF(15, "\n            "), d.j41(16, "bit-label"), d.EFF(17), d.nI1(18, "i18n"), d.j41(19, "a", 5), d.nI1(20, "i18n"), d.EFF(21, "\n                "), d.nrm(22, "i", 6), d.EFF(23, "\n              "), d.k0s(), d.EFF(24, "\n            "), d.k0s(), d.EFF(25, "\n            "), d.nrm(26, "input", 7), d.EFF(27, "\n          "), d.k0s(), d.EFF(28, "\n        "), d.k0s(), d.EFF(29, "\n      "), d.k0s(), d.EFF(30, "\n    "), d.bVm(), d.EFF(31, "\n    "), d.qex(32, 8), d.EFF(33, "\n      "), d.j41(34, "button", 9), d.EFF(35), d.nI1(36, "i18n"), d.k0s(), d.EFF(37, "\n      "), d.j41(38, "button", 10), d.EFF(39), d.nI1(40, "i18n"), d.k0s(), d.EFF(41, "\n    "), d.bVm(), d.EFF(42, "\n  "), d.k0s(), d.EFF(43, "\n"), d.k0s(), d.EFF(44, "\n")), 2 & t && (d.Y8G("formGroup", n.licenseForm)("bitSubmit", n.submit), d.R7$(5), d.JRh(d.bMT(6, 8, "downloadLicense")), d.R7$(12), d.SpI("", d.bMT(18, 10, "enterInstallationId"), "\n              "), d.R7$(2), d.FS9("appA11yTitle", d.bMT(20, 12, "learnMore")), d.R7$(16), d.SpI("\n        ", d.bMT(36, 14, "submit"), "\n      "), d.R7$(3), d.Y8G("bitAction", n.cancel), d.R7$(), d.SpI("\n        ", d.bMT(40, 16, "cancel"), "\n      "))
				},
				dependencies: [X.qT, X.me, X.BC, X.cb, X.j4, X.JD, K.C, yt.p, Q.$, tt.L, y.Q, et.m, ot.m, st.J, Ht.h, It.L, C.$],
				encapsulation: 2
			});
			var Ct = i(21457);
			const Rt = Ct.Sm`
<svg width="216" height="231" viewBox="0 0 216 231" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M133.356 85.6618C133.136 85.43 132.871 85.2457 132.577 85.1198C132.283 84.9939 131.968 84.93 131.648 84.9318H87.8482C87.5289 84.93 87.2113 84.9939 86.9175 85.1198C86.6237 85.2457 86.359 85.43 86.14 85.6618C85.9083 85.8808 85.7239 86.1473 85.598 86.4411C85.4721 86.7349 85.4082 87.0506 85.41 87.37V116.57C85.4192 118.793 85.8499 120.994 86.6802 123.056C87.4705 125.091 88.5326 127.011 89.8375 128.761C91.1789 130.515 92.6808 132.137 94.3233 133.612C95.8472 135.01 97.4532 136.318 99.1304 137.528C100.59 138.565 102.123 139.547 103.729 140.474C105.335 141.401 106.469 142.027 107.131 142.354C107.799 142.682 108.339 142.941 108.741 143.113C109.055 143.264 109.4 143.339 109.748 143.332C110.091 143.337 110.431 143.257 110.737 143.102C111.146 142.923 111.679 142.671 112.354 142.343C113.03 142.014 114.179 141.386 115.756 140.463C117.333 139.539 118.884 138.554 120.355 137.517C122.034 136.306 123.642 134.999 125.169 133.601C126.814 132.128 128.316 130.504 129.655 128.75C130.958 126.998 132.021 125.08 132.813 123.045C133.645 120.983 134.075 118.782 134.083 116.559V87.3591C134.085 87.0415 134.021 86.7276 133.895 86.4356C133.769 86.1436 133.586 85.8808 133.356 85.6618ZM127.71 116.836C127.71 127.421 109.748 136.514 109.748 136.514V91.1879H127.71V116.836Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M24.6216 122.3C24.7144 123.4 25.6819 124.217 26.7825 124.125C27.8832 124.032 28.7002 123.064 28.6074 121.964L24.6216 122.3ZM151.501 45.7445C152.57 45.4679 153.213 44.3768 152.936 43.3074L148.429 25.8809C148.152 24.8115 147.061 24.1688 145.992 24.4454C144.922 24.722 144.28 25.8131 144.556 26.8825L148.563 42.3728L133.073 46.3793C132.003 46.6559 131.361 47.747 131.637 48.8164C131.914 49.8858 133.005 50.5285 134.074 50.2519L151.501 45.7445ZM28.6074 121.964C26.6788 99.0874 34.4658 75.5543 51.9661 58.054L49.1377 55.2256C30.7695 73.5938 22.5982 98.2999 24.6216 122.3L28.6074 121.964ZM51.9661 58.054C78.5404 31.4797 119.036 27.3026 149.985 45.5315L152.015 42.0849C119.534 22.9534 77.0327 27.3306 49.1377 55.2256L51.9661 58.054Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M67.4747 185.062C66.4089 185.352 65.7801 186.451 66.0701 187.517L70.797 204.885C71.0871 205.951 72.1862 206.58 73.252 206.29C74.3179 205.999 74.9467 204.9 74.6567 203.834L70.455 188.396L85.8934 184.194C86.9592 183.904 87.5881 182.805 87.298 181.739C87.008 180.674 85.9088 180.045 84.843 180.335L67.4747 185.062ZM192.478 100.283C192.286 99.1952 191.248 98.4697 190.16 98.6625C189.072 98.8552 188.347 99.8931 188.54 100.981L192.478 100.283ZM166.138 172.225C139.813 198.55 99.8271 202.897 68.9932 185.255L67.0068 188.727C99.3669 207.242 141.333 202.687 168.966 175.054L166.138 172.225ZM188.54 100.981C192.985 126.07 185.516 152.847 166.138 172.225L168.966 175.054C189.307 154.713 197.142 126.603 192.478 100.283L188.54 100.981Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M37.726 108.132C39.283 92.1931 46.1655 76.6765 58.3734 64.4686C75.2893 47.5527 98.5583 40.8618 120.5 44.396" stroke="rgb(var(--color-secondary-700))" stroke-width="2" stroke-linecap="round"/>
  <path d="M180.595 119.132C179.653 136.119 172.693 152.834 159.717 165.811C144.44 181.088 123.982 188.025 104 186.623" stroke="rgb(var(--color-secondary-700))" stroke-width="2" stroke-linecap="round"/>
  <rect x="153.5" y="56.1317" width="49" height="34" rx="2.5" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M153.5 63.6317V63.6317C153.5 66.9454 156.186 69.6317 159.5 69.6317H172.509M202.5 63.6317V63.6317C202.5 66.9454 199.814 69.6317 196.5 69.6317H183.491" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <mask id="path-8-inside-1_1000_26057" fill="white">
    <rect x="172" y="65.6317" width="12" height="9" rx="1.25"/>
  </mask>
  <rect x="172" y="65.6317" width="12" height="9" rx="1.25" stroke="rgb(var(--color-secondary-700))" stroke-width="6" mask="url(#path-8-inside-1_1000_26057)"/>
  <path d="M187 54.6317C187 54.6317 187 53.6317 187 52.6317C187 51.6317 186.053 50.6317 185.105 50.6317C184.158 50.6317 171.842 50.6317 170.895 50.6317C169.947 50.6317 169 51.6317 169 52.6317C169 53.6317 169 54.6317 169 54.6317" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="48" cy="141" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M64.9935 168.5H64.9126H64.8318H64.7512H64.6708H64.5905H64.5104H64.4304H64.3506H64.2709H64.1914H64.1121H64.0329H63.9538H63.8749H63.7962H63.7176H63.6392H63.5609H63.4828H63.4048H63.3269H63.2492H63.1717H63.0943H63.017H62.9399H62.8629H62.7861H62.7094H62.6329H62.5565H62.4802H62.4041H62.3281H62.2523H62.1766H62.101H62.0256H61.9503H61.8751H61.8001H61.7252H61.6504H61.5758H61.5013H61.4269H61.3527H61.2786H61.2046H61.1308H61.0571H60.9835H60.91H60.8367H60.7635H60.6904H60.6175H60.5446H60.4719H60.3993H60.3269H60.2545H60.1823H60.1102H60.0382H59.9664H59.8946H59.823H59.7515H59.6801H59.6088H59.5376H59.4666H59.3956H59.3248H59.2541H59.1835H59.113H59.0426H58.9724H58.9022H58.8322H58.7622H58.6924H58.6226H58.553H58.4835H58.4141H58.3448H58.2756H58.2065H58.1375H58.0686H57.9998H57.9311H57.8625H57.794H57.7256H57.6572H57.589H57.5209H57.4529H57.385H57.3172H57.2494H57.1818H57.1142H57.0468H56.9794H56.9121H56.8449H56.7779H56.7108H56.6439H56.5771H56.5103H56.4437H56.3771H56.3106H56.2442H56.1779H56.1117H56.0455H55.9794H55.9134H55.8475H55.7817H55.7159H55.6502H55.5846H55.5191H55.4537H55.3883H55.323H55.2578H55.1926H55.1275H55.0625H54.9976H54.9328H54.868H54.8032H54.7386H54.674H54.6095H54.5451H54.4807H54.4164H54.3521H54.2879H54.2238H54.1598H54.0958H54.0318H53.968H53.9042H53.8404H53.7767H53.7131H53.6495H53.586H53.5226H53.4592H53.3958H53.3325H53.2693H53.2061H53.143H53.0799H53.0169H52.9539H52.891H52.8281H52.7653H52.7025H52.6398H52.5771H52.5145H52.4519H52.3894H52.3269H52.2645H52.202H52.1397H52.0774H52.0151H51.9528H51.8907H51.8285H51.7664H51.7043H51.6423H51.5803H51.5183H51.4564H51.3945H51.3326H51.2708H51.209H51.1472H51.0855H51.0238H50.9621H50.9005H50.8389H50.7773H50.7157H50.6542H50.5927H50.5312H50.4698H50.4084H50.347H50.2856H50.2243H50.1629H50.1016H50.0404H49.9791H49.9178H49.8566H49.7954H49.7342H49.6731H49.6119H49.5508H49.4896H49.4285H49.3674H49.3064H49.2453H49.1842H49.1232H49.0622H49.0011H48.9401H48.8791H48.8181H48.7571H48.6962H48.6352H48.5742H48.5133H48.4523H48.3913H48.3304H48.2694H48.2085H48.1475H48.0866H48.0257H47.9647H47.9038H47.8428H47.7819H47.7209H47.6599H47.599H47.538H47.477H47.416H47.3551H47.2941H47.2331H47.172H47.111H47.05H46.9889H46.9279H46.8668H46.8057H46.7446H46.6835H46.6224H46.5612H46.5001H46.4389H46.3777H46.3165H46.2553H46.194H46.1328H46.0715H46.0102H45.9489H45.8875H45.8261H45.7647H45.7033H45.6418H45.5804H45.5189H45.4573H45.3958H45.3342H45.2726H45.2109H45.1493H45.0876H45.0258H44.9641H44.9023H44.8404H44.7786H44.7166H44.6547H44.5927H44.5307H44.4687H44.4066H44.3445H44.2823H44.2201H44.1578H44.0956H44.0332H43.9709H43.9084H43.846H43.7835H43.7209H43.6583H43.5957H43.533H43.4703H43.4075H43.3447H43.2818H43.2189H43.1559H43.0929H43.0298H42.9666H42.9034H42.8402H42.7769H42.7135H42.6501H42.5867H42.5231H42.4596H42.3959H42.3322H42.2685H42.2046H42.1408H42.0768H42.0128H41.9487H41.8846H41.8204H41.7562H41.6918H41.6274H41.563H41.4985H41.4339H41.3692H41.3045H41.2397H41.1748H41.1098H41.0448H40.9797H40.9146H40.8493H40.784H40.7186H40.6532H40.5876H40.522H40.4563H40.3905H40.3247H40.2588H40.1928H40.1267H40.0605H39.9942H39.9279H39.8615H39.795H39.7284H39.6617H39.5949H39.5281H39.4611H39.3941H39.327H39.2598H39.1925H39.1251H39.0576H38.9901H38.9224H38.8547H38.7868H38.7189H38.6508H38.5827H38.5145H38.4461H38.3777H38.3092H38.2406H38.1719H38.103H38.0341H37.9651H37.896H37.8267H37.7574H37.688H37.6184H37.5488H37.479H37.4092H37.3392H37.2691H37.199H37.1287H37.0583H36.9878H36.9171H36.8464H36.7755H36.7046H36.6335H36.5623H36.491H36.4196H36.3481H36.2764H36.2046H36.1328H36.0607H35.9886H35.9164H35.844H35.7715H35.6989H35.6262H35.5533H35.4803H35.4072H35.334H35.2606H35.1872H35.1135H35.0398H34.9659H34.8919H34.8178H34.7436H34.6692H34.5947H34.52H34.4452H34.3703H34.2952H34.2201H34.1447H34.0693H33.9937H33.9179H33.8421H33.7661H33.6899H33.6136H33.5372H33.4606H33.3839H33.3071H33.2301H33.1529H33.0756H32.9982H32.9206H32.8429H32.765H32.687H32.6088H32.5305H32.452H32.3734H32.2946H32.2157H32.1367H32.0574H31.978H31.8985H31.8188H31.739H31.659H31.5788H31.4985H31.418H31.3374H31.2566H31.1757H31.0946H31.0133H30.9318H30.8503H30.7685H30.6866H30.6045H30.5222H30.4398H30.3572H30.2745H30.1915C30.0489 168.5 29.9693 168.466 29.9164 168.433C29.8553 168.394 29.7779 168.322 29.702 168.192C29.5361 167.906 29.4608 167.48 29.5197 167.111C30.9235 158.322 38.6474 151.574 47.9925 151.574C57.3375 151.574 65.0615 158.322 66.4652 167.111C66.5751 167.799 66.4037 168.054 66.3124 168.149C66.1888 168.278 65.8364 168.5 64.9935 168.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="20" cy="141" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M36.9935 168.5H36.9126H36.8318H36.7512H36.6708H36.5905H36.5104H36.4304H36.3506H36.2709H36.1914H36.1121H36.0329H35.9538H35.8749H35.7962H35.7176H35.6392H35.5609H35.4828H35.4048H35.3269H35.2492H35.1717H35.0943H35.017H34.9399H34.8629H34.7861H34.7094H34.6329H34.5565H34.4802H34.4041H34.3281H34.2523H34.1766H34.101H34.0256H33.9503H33.8751H33.8001H33.7252H33.6504H33.5758H33.5013H33.4269H33.3527H33.2786H33.2046H33.1308H33.0571H32.9835H32.91H32.8367H32.7635H32.6904H32.6175H32.5446H32.4719H32.3993H32.3269H32.2545H32.1823H32.1102H32.0382H31.9664H31.8946H31.823H31.7515H31.6801H31.6088H31.5376H31.4666H31.3956H31.3248H31.2541H31.1835H31.113H31.0426H30.9724H30.9022H30.8322H30.7622H30.6924H30.6226H30.553H30.4835H30.4141H30.3448H30.2756H30.2065H30.1375H30.0686H29.9998H29.9311H29.8625H29.794H29.7256H29.6572H29.589H29.5209H29.4529H29.385H29.3172H29.2494H29.1818H29.1142H29.0468H28.9794H28.9121H28.8449H28.7779H28.7108H28.6439H28.5771H28.5103H28.4437H28.3771H28.3106H28.2442H28.1779H28.1117H28.0455H27.9794H27.9134H27.8475H27.7817H27.7159H27.6502H27.5846H27.5191H27.4537H27.3883H27.323H27.2578H27.1926H27.1275H27.0625H26.9976H26.9328H26.868H26.8032H26.7386H26.674H26.6095H26.5451H26.4807H26.4164H26.3521H26.2879H26.2238H26.1598H26.0958H26.0318H25.968H25.9042H25.8404H25.7767H25.7131H25.6495H25.586H25.5226H25.4592H25.3958H25.3325H25.2693H25.2061H25.143H25.0799H25.0169H24.9539H24.891H24.8281H24.7653H24.7025H24.6398H24.5771H24.5145H24.4519H24.3894H24.3269H24.2645H24.202H24.1397H24.0774H24.0151H23.9528H23.8907H23.8285H23.7664H23.7043H23.6423H23.5803H23.5183H23.4564H23.3945H23.3326H23.2708H23.209H23.1472H23.0855H23.0238H22.9621H22.9005H22.8389H22.7773H22.7157H22.6542H22.5927H22.5312H22.4698H22.4084H22.347H22.2856H22.2243H22.1629H22.1016H22.0404H21.9791H21.9178H21.8566H21.7954H21.7342H21.6731H21.6119H21.5508H21.4896H21.4285H21.3674H21.3064H21.2453H21.1842H21.1232H21.0622H21.0011H20.9401H20.8791H20.8181H20.7571H20.6962H20.6352H20.5742H20.5133H20.4523H20.3913H20.3304H20.2694H20.2085H20.1475H20.0866H20.0257H19.9647H19.9038H19.8428H19.7819H19.7209H19.6599H19.599H19.538H19.477H19.416H19.3551H19.2941H19.2331H19.172H19.111H19.05H18.9889H18.9279H18.8668H18.8057H18.7446H18.6835H18.6224H18.5612H18.5001H18.4389H18.3777H18.3165H18.2553H18.194H18.1328H18.0715H18.0102H17.9489H17.8875H17.8261H17.7647H17.7033H17.6418H17.5804H17.5189H17.4573H17.3958H17.3342H17.2726H17.2109H17.1493H17.0876H17.0258H16.9641H16.9023H16.8404H16.7786H16.7166H16.6547H16.5927H16.5307H16.4687H16.4066H16.3445H16.2823H16.2201H16.1578H16.0956H16.0332H15.9709H15.9084H15.846H15.7835H15.7209H15.6583H15.5957H15.533H15.4703H15.4075H15.3447H15.2818H15.2189H15.1559H15.0929H15.0298H14.9666H14.9034H14.8402H14.7769H14.7135H14.6501H14.5867H14.5231H14.4596H14.3959H14.3322H14.2685H14.2046H14.1408H14.0768H14.0128H13.9487H13.8846H13.8204H13.7562H13.6918H13.6274H13.563H13.4985H13.4339H13.3692H13.3045H13.2397H13.1748H13.1098H13.0448H12.9797H12.9146H12.8493H12.784H12.7186H12.6532H12.5876H12.522H12.4563H12.3905H12.3247H12.2588H12.1928H12.1267H12.0605H11.9942H11.9279H11.8615H11.795H11.7284H11.6617H11.5949H11.5281H11.4611H11.3941H11.327H11.2598H11.1925H11.1251H11.0576H10.9901H10.9224H10.8547H10.7868H10.7189H10.6508H10.5827H10.5145H10.4461H10.3777H10.3092H10.2406H10.1719H10.103H10.0341H9.9651H9.89597H9.82674H9.75741H9.68798H9.61843H9.54879H9.47904H9.40918H9.33921H9.26914H9.19896H9.12867H9.05826H8.98775H8.91713H8.8464H8.77555H8.70459H8.63351H8.56232H8.49102H8.4196H8.34807H8.27641H8.20464H8.13276H8.06075H7.98862H7.91638H7.84401H7.77152H7.69891H7.62617H7.55332H7.48034H7.40723H7.334H7.26064H7.18716H7.11355H7.03981H6.96594H6.89195H6.81782H6.74356H6.66918H6.59466H6.52H6.44522H6.3703H6.29525H6.22006H6.14474H6.06928H5.99368H5.91795H5.84208H5.76607H5.68992H5.61363H5.5372H5.46062H5.38391H5.30705H5.23005H5.15291H5.07562H4.99819H4.92061H4.84288H4.76501H4.68699H4.60882H4.5305H4.45203H4.37342H4.29465H4.21573H4.13665H4.05743H3.97805H3.89851H3.81882H3.73898H3.65898H3.57882H3.49851H3.41804H3.33741H3.25662H3.17566H3.09455H3.01328H2.93185H2.85025H2.76849H2.68657H2.60448H2.52223H2.43981H2.35722H2.27447H2.19155C2.04893 168.5 1.96927 168.466 1.91645 168.433C1.85532 168.394 1.77792 168.322 1.702 168.192C1.53613 167.906 1.46078 167.48 1.51975 167.111C2.92347 158.322 10.6474 151.574 19.9925 151.574C29.3375 151.574 37.0615 158.322 38.4652 167.111C38.5751 167.799 38.4037 168.054 38.3124 168.149C38.1888 168.278 37.8364 168.5 36.9935 168.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="34" cy="154" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M50.9935 181.5H50.9126H50.8318H50.7512H50.6708H50.5905H50.5104H50.4304H50.3506H50.2709H50.1914H50.1121H50.0329H49.9538H49.8749H49.7962H49.7176H49.6392H49.5609H49.4828H49.4048H49.3269H49.2492H49.1717H49.0943H49.017H48.9399H48.8629H48.7861H48.7094H48.6329H48.5565H48.4802H48.4041H48.3281H48.2523H48.1766H48.101H48.0256H47.9503H47.8751H47.8001H47.7252H47.6504H47.5758H47.5013H47.4269H47.3527H47.2786H47.2046H47.1308H47.0571H46.9835H46.91H46.8367H46.7635H46.6904H46.6175H46.5446H46.4719H46.3993H46.3269H46.2545H46.1823H46.1102H46.0382H45.9664H45.8946H45.823H45.7515H45.6801H45.6088H45.5376H45.4666H45.3956H45.3248H45.2541H45.1835H45.113H45.0426H44.9724H44.9022H44.8322H44.7622H44.6924H44.6226H44.553H44.4835H44.4141H44.3448H44.2756H44.2065H44.1375H44.0686H43.9998H43.9311H43.8625H43.794H43.7256H43.6572H43.589H43.5209H43.4529H43.385H43.3172H43.2494H43.1818H43.1142H43.0468H42.9794H42.9121H42.8449H42.7779H42.7108H42.6439H42.5771H42.5103H42.4437H42.3771H42.3106H42.2442H42.1779H42.1117H42.0455H41.9794H41.9134H41.8475H41.7817H41.7159H41.6502H41.5846H41.5191H41.4537H41.3883H41.323H41.2578H41.1926H41.1275H41.0625H40.9976H40.9328H40.868H40.8032H40.7386H40.674H40.6095H40.5451H40.4807H40.4164H40.3521H40.2879H40.2238H40.1598H40.0958H40.0318H39.968H39.9042H39.8404H39.7767H39.7131H39.6495H39.586H39.5226H39.4592H39.3958H39.3325H39.2693H39.2061H39.143H39.0799H39.0169H38.9539H38.891H38.8281H38.7653H38.7025H38.6398H38.5771H38.5145H38.4519H38.3894H38.3269H38.2645H38.202H38.1397H38.0774H38.0151H37.9528H37.8907H37.8285H37.7664H37.7043H37.6423H37.5803H37.5183H37.4564H37.3945H37.3326H37.2708H37.209H37.1472H37.0855H37.0238H36.9621H36.9005H36.8389H36.7773H36.7157H36.6542H36.5927H36.5312H36.4698H36.4084H36.347H36.2856H36.2243H36.1629H36.1016H36.0404H35.9791H35.9178H35.8566H35.7954H35.7342H35.6731H35.6119H35.5508H35.4896H35.4285H35.3674H35.3064H35.2453H35.1842H35.1232H35.0622H35.0011H34.9401H34.8791H34.8181H34.7571H34.6962H34.6352H34.5742H34.5133H34.4523H34.3913H34.3304H34.2694H34.2085H34.1475H34.0866H34.0257H33.9647H33.9038H33.8428H33.7819H33.7209H33.6599H33.599H33.538H33.477H33.416H33.3551H33.2941H33.2331H33.172H33.111H33.05H32.9889H32.9279H32.8668H32.8057H32.7446H32.6835H32.6224H32.5612H32.5001H32.4389H32.3777H32.3165H32.2553H32.194H32.1328H32.0715H32.0102H31.9489H31.8875H31.8261H31.7647H31.7033H31.6418H31.5804H31.5189H31.4573H31.3958H31.3342H31.2726H31.2109H31.1493H31.0876H31.0258H30.9641H30.9023H30.8404H30.7786H30.7166H30.6547H30.5927H30.5307H30.4687H30.4066H30.3445H30.2823H30.2201H30.1578H30.0956H30.0332H29.9709H29.9084H29.846H29.7835H29.7209H29.6583H29.5957H29.533H29.4703H29.4075H29.3447H29.2818H29.2189H29.1559H29.0929H29.0298H28.9666H28.9034H28.8402H28.7769H28.7135H28.6501H28.5867H28.5231H28.4596H28.3959H28.3322H28.2685H28.2046H28.1408H28.0768H28.0128H27.9487H27.8846H27.8204H27.7562H27.6918H27.6274H27.563H27.4985H27.4339H27.3692H27.3045H27.2397H27.1748H27.1098H27.0448H26.9797H26.9146H26.8493H26.784H26.7186H26.6532H26.5876H26.522H26.4563H26.3905H26.3247H26.2588H26.1928H26.1267H26.0605H25.9942H25.9279H25.8615H25.795H25.7284H25.6617H25.5949H25.5281H25.4611H25.3941H25.327H25.2598H25.1925H25.1251H25.0576H24.9901H24.9224H24.8547H24.7868H24.7189H24.6508H24.5827H24.5145H24.4461H24.3777H24.3092H24.2406H24.1719H24.103H24.0341H23.9651H23.896H23.8267H23.7574H23.688H23.6184H23.5488H23.479H23.4092H23.3392H23.2691H23.199H23.1287H23.0583H22.9878H22.9171H22.8464H22.7755H22.7046H22.6335H22.5623H22.491H22.4196H22.3481H22.2764H22.2046H22.1328H22.0607H21.9886H21.9164H21.844H21.7715H21.6989H21.6262H21.5533H21.4803H21.4072H21.334H21.2606H21.1872H21.1135H21.0398H20.9659H20.8919H20.8178H20.7436H20.6692H20.5947H20.52H20.4452H20.3703H20.2952H20.2201H20.1447H20.0693H19.9937H19.9179H19.8421H19.7661H19.6899H19.6136H19.5372H19.4606H19.3839H19.3071H19.2301H19.1529H19.0756H18.9982H18.9206H18.8429H18.765H18.687H18.6088H18.5305H18.452H18.3734H18.2946H18.2157H18.1367H18.0574H17.978H17.8985H17.8188H17.739H17.659H17.5788H17.4985H17.418H17.3374H17.2566H17.1757H17.0946H17.0133H16.9318H16.8503H16.7685H16.6866H16.6045H16.5222H16.4398H16.3572H16.2745H16.1915C16.045 181.5 15.9628 181.465 15.9092 181.432C15.8479 181.394 15.772 181.324 15.6978 181.198C15.5354 180.922 15.4617 180.509 15.5193 180.153C16.9196 171.496 24.6325 164.823 33.9925 164.823C43.3524 164.823 51.0654 171.496 52.4657 180.153C52.574 180.823 52.4052 181.064 52.319 181.152C52.1962 181.279 51.8413 181.5 50.9935 181.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
</svg>
`;
			var Tt = i(21274),
				$t = i(1601),
				Mt = i(48180),
				jt = i(47696),
				Gt = i(58384),
				At = i(38140),
				xt = i(38410),
				Pt = i(22466),
				Dt = i(36572),
				Bt = i(58806),
				Ut = i(52136);
			class Xt {
				constructor(t, n) {
					this.seatAdjustment = t, this.maxAutoscaleSeats = n
				}
			}
			var zt = i(50352),
				Nt = i(90246),
				Yt = i(99917),
				Ot = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};
			class Vt {
				constructor(t, n, i, e, o) {
					this.i18nService = t, this.organizationApiService = n, this.formBuilder = i, this.toastService = e, this.internalOrganizationService = o, this.seatPrice = 0, this.interval = "year", this.onAdjusted = new d.bkB, this.destroy$ = new m.B, this.adjustSubscriptionForm = this.formBuilder.group({
						newSeatCount: [0, [X.k0.min(0)]],
						limitSubscription: [!1],
						newMaxSeats: [0, [X.k0.min(0)]]
					}), this.submit = () => Ot(this, void 0, void 0, (function*() {
						if (this.adjustSubscriptionForm.markAllAsTouched(), this.adjustSubscriptionForm.invalid) return;
						const t = new Xt(this.additionalSeatCount, this.adjustSubscriptionForm.value.newMaxSeats),
							n = yield this.organizationApiService.updatePasswordManagerSeats(this.organizationId, t), i = yield this.internalOrganizationService.get(this.organizationId), e = new Ut.o(n, {
								isMember: i.isMember,
								isProviderUser: i.isProviderUser
							});
						yield this.internalOrganizationService.upsert(e), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("subscriptionUpdated")
						}), this.onAdjusted.emit()
					}))
				}
				ngOnInit() {
					this.adjustSubscriptionForm.valueChanges.pipe((0, f.Q)(this.destroy$)).subscribe((t => {
						const n = this.adjustSubscriptionForm.controls.newMaxSeats;
						t.limitSubscription ? (n.setValidators([X.k0.min(t.newSeatCount)]), n.enable({
							emitEvent: !1
						})) : n.disable({
							emitEvent: !1
						})
					})), this.adjustSubscriptionForm.patchValue({
						newSeatCount: this.currentSeatCount,
						newMaxSeats: this.maxAutoscaleSeats,
						limitSubscription: null != this.maxAutoscaleSeats
					})
				}
				limitSubscriptionChanged() {
					this.adjustSubscriptionForm.value.limitSubscription || (this.adjustSubscriptionForm.value.newMaxSeats = null)
				}
				get additionalSeatCount() {
					return this.adjustSubscriptionForm.value.newSeatCount ? this.adjustSubscriptionForm.value.newSeatCount - this.currentSeatCount : 0
				}
				get maxSeatTotal() {
					var t;
					return Math.abs((null !== (t = this.adjustSubscriptionForm.value.newMaxSeats) && void 0 !== t ? t : 0) * this.seatPrice)
				}
				get seatTotalCost() {
					return Math.abs(this.adjustSubscriptionForm.value.newSeatCount * this.seatPrice)
				}
				get limitSubscription() {
					return this.adjustSubscriptionForm.value.limitSubscription
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}
			Vt.ɵfac = function(t) {
				return new(t || Vt)(d.rXU(L.W), d.rXU(q.X), d.rXU(X.ok), d.rXU(_.f), d.rXU(c.k4))
			}, Vt.ɵcmp = d.VBU({
				type: Vt,
				selectors: [
					["app-adjust-subscription"]
				],
				inputs: {
					organizationId: "organizationId",
					maxAutoscaleSeats: "maxAutoscaleSeats",
					currentSeatCount: "currentSeatCount",
					seatPrice: "seatPrice",
					interval: "interval"
				},
				outputs: {
					onAdjusted: "onAdjusted"
				},
				decls: 73,
				vars: 49,
				consts: [
					[3, "formGroup", "bitSubmit"],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"],
					[1, "tw-col-span-8"],
					["bitInput", "", "formControlName", "newSeatCount", "type", "number", "min", "0", "step", "1"],
					["bitCheckbox", "", "formControlName", "limitSubscription", "type", "checkbox", 3, "change"],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4", "tw-mb-4", 3, "hidden"],
					["bitInput", "", "formControlName", "newMaxSeats", "type", "number", "step", "1", 3, "min"],
					["bitButton", "", "buttonType", "primary", "bitFormButton", "", "type", "submit"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "div", 1), d.EFF(3, "\n    "), d.j41(4, "div", 2), d.EFF(5, "\n      "), d.j41(6, "bit-form-field"), d.EFF(7, "\n        "), d.j41(8, "bit-label"), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n        "), d.nrm(12, "input", 3), d.EFF(13, "\n        "), d.j41(14, "bit-hint"), d.EFF(15, "\n          "), d.j41(16, "strong"), d.EFF(17), d.nI1(18, "i18n"), d.k0s(), d.EFF(19), d.nI1(20, "currency"), d.nI1(21, "currency"), d.nI1(22, "i18n"), d.k0s(), d.EFF(23, "\n      "), d.k0s(), d.EFF(24, "\n    "), d.k0s(), d.EFF(25, "\n  "), d.k0s(), d.EFF(26, "\n  "), d.j41(27, "div"), d.EFF(28, "\n    "), d.j41(29, "bit-form-control"), d.EFF(30, "\n      "), d.j41(31, "input", 4), d.bIt("change", (function() {
						return n.limitSubscriptionChanged()
					})), d.k0s(), d.EFF(32, "\n      "), d.j41(33, "bit-label"), d.EFF(34), d.nI1(35, "i18n"), d.k0s(), d.EFF(36, "\n      "), d.j41(37, "bit-hint"), d.EFF(38), d.nI1(39, "i18n"), d.k0s(), d.EFF(40, "\n    "), d.k0s(), d.EFF(41, "\n  "), d.k0s(), d.EFF(42, "\n  "), d.j41(43, "div", 5), d.EFF(44, "\n    "), d.j41(45, "div", 2), d.EFF(46, "\n      "), d.j41(47, "bit-form-field"), d.EFF(48, "\n        "), d.j41(49, "bit-label"), d.EFF(50), d.nI1(51, "i18n"), d.k0s(), d.EFF(52, "\n        "), d.nrm(53, "input", 6), d.EFF(54, "\n        "), d.j41(55, "bit-hint"), d.EFF(56, "\n          "), d.j41(57, "strong"), d.EFF(58), d.nI1(59, "i18n"), d.k0s(), d.EFF(60), d.nI1(61, "currency"), d.nI1(62, "currency"), d.nI1(63, "i18n"), d.k0s(), d.EFF(64, "\n      "), d.k0s(), d.EFF(65, "\n    "), d.k0s(), d.EFF(66, "\n  "), d.k0s(), d.EFF(67, "\n  "), d.j41(68, "button", 7), d.EFF(69), d.nI1(70, "i18n"), d.k0s(), d.EFF(71, "\n"), d.k0s(), d.EFF(72, "\n")), 2 & t && (d.Y8G("formGroup", n.adjustSubscriptionForm)("bitSubmit", n.submit), d.R7$(9), d.JRh(d.bMT(10, 19, "subscriptionSeats")), d.R7$(8), d.SpI("", d.bMT(18, 21, "total"), ":"), d.R7$(2), d.LHq("\n          ", n.adjustSubscriptionForm.value.newSeatCount || 0, " ×\n          ", d.i5U(20, 23, n.seatPrice, "$"), " = ", d.i5U(21, 26, n.seatTotalCost, "$"), " /\n          ", d.bMT(22, 29, n.interval), ""), d.R7$(15), d.JRh(d.bMT(35, 31, "limitSubscription")), d.R7$(4), d.SpI(" ", d.bMT(39, 33, "limitSubscriptionDesc"), ""), d.R7$(5), d.Y8G("hidden", !n.adjustSubscriptionForm.value.limitSubscription), d.R7$(7), d.JRh(d.bMT(51, 35, "maxSeatLimit")), d.R7$(3), d.Y8G("min", null == n.adjustSubscriptionForm.value.newSeatCount ? 1 : n.adjustSubscriptionForm.value.newSeatCount), d.R7$(5), d.SpI("", d.bMT(59, 37, "maxSeatCost"), ":"), d.R7$(2), d.LHq("\n          ", n.adjustSubscriptionForm.value.newMaxSeats || 0, " ×\n          ", d.i5U(61, 39, n.seatPrice, "$"), " = ", d.i5U(62, 42, n.maxSeatTotal, "$"), " /\n          ", d.bMT(63, 45, n.interval), ""), d.R7$(9), d.SpI("\n    ", d.bMT(70, 47, "save"), "\n  "))
				},
				dependencies: [X.qT, X.me, X.Q0, X.Zm, X.BC, X.cb, X.VZ, X.j4, X.JD, Q.$, tt.L, y.Q, zt.P, Nt.f, ot.m, Yt.s, st.J, Ht.h, E.oe, C.$],
				encapsulation: 2
			});
			i(69580);
			var Lt = i(53072),
				qt = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};
			class Jt {
				constructor(t) {
					this.logService = t, this.onChanged = new d.bkB, this.onCanceled = new d.bkB
				}
				submit() {
					return qt(this, void 0, void 0, (function*() {
						try {
							this.onChanged.emit()
						} catch (t) {
							this.logService.error(t)
						}
					}))
				}
				cancel() {
					this.onCanceled.emit()
				}
			}
			Jt.ɵfac = function(t) {
				return new(t || Jt)(d.rXU(J.K))
			}, Jt.ɵcmp = d.VBU({
				type: Jt,
				selectors: [
					["app-change-plan"]
				],
				inputs: {
					organizationId: "organizationId",
					currentPlan: "currentPlan",
					preSelectedProductTier: "preSelectedProductTier"
				},
				outputs: {
					onChanged: "onChanged",
					onCanceled: "onCanceled"
				},
				decls: 20,
				vars: 14,
				consts: [
					[1, "tw-relative", "tw-flex", "tw-flex-col", "tw-min-w-0", "tw-rounded", "tw-border", "tw-border-solid", "tw-border-secondary-300"],
					[1, "tw-flex-auto", "tw-p-5"],
					["bitIconButton", "bwi-close", "buttonType", "main", "type", "button", "size", "small", 1, "tw-float-right", 3, "click", "appA11yTitle"],
					["bitTypography", "h2"],
					["bitTypography", "body1", 1, "tw-mb-0"],
					[3, "onCanceled", "showFree", "showCancel", "organizationId", "currentPlan", "preSelectedProductTier"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "div", 0), d.EFF(1, "\n  "), d.j41(2, "div", 1), d.EFF(3, "\n    "), d.j41(4, "button", 2), d.nI1(5, "i18n"), d.bIt("click", (function() {
						return n.cancel()
					})), d.k0s(), d.EFF(6, "\n    "), d.j41(7, "h2", 3), d.EFF(8), d.nI1(9, "i18n"), d.k0s(), d.EFF(10, "\n    "), d.j41(11, "p", 4), d.EFF(12), d.nI1(13, "i18n"), d.k0s(), d.EFF(14, "\n    "), d.j41(15, "app-organization-plans", 5), d.bIt("onCanceled", (function() {
						return n.cancel()
					})), d.EFF(16, "\n    "), d.k0s(), d.EFF(17, "\n  "), d.k0s(), d.EFF(18, "\n"), d.k0s(), d.EFF(19, "\n")), 2 & t && (d.R7$(4), d.FS9("appA11yTitle", d.bMT(5, 8, "cancel")), d.R7$(4), d.JRh(d.bMT(9, 10, "changeBillingPlan")), d.R7$(4), d.JRh(d.bMT(13, 12, "changeBillingPlanUpgrade")), d.R7$(3), d.Y8G("showFree", !1)("showCancel", !0)("organizationId", n.organizationId)("currentPlan", n.currentPlan)("preSelectedProductTier", n.preSelectedProductTier))
				},
				dependencies: [K.C, at.s, Bt.r, Lt.v, C.$],
				encapsulation: 2
			});
			class _t {}
			var Wt = i(68466),
				Kt = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};

			function Zt(t, n) {
				if (1 & t && (d.j41(0, "bit-form-field", 1), d.EFF(1, "\n    "), d.j41(2, "bit-label"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n    "), d.nrm(6, "input", 9), d.EFF(7, "\n    "), d.j41(8, "bit-hint"), d.EFF(9, "\n      "), d.j41(10, "strong"), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13), d.nI1(14, "currency"), d.nI1(15, "currency"), d.nI1(16, "i18n"), d.k0s(), d.EFF(17, "\n  "), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.R7$(3), d.JRh(d.bMT(4, 7, "maxSeatLimit")), d.R7$(3), d.Y8G("min", t.formGroup.value.seatCount), d.R7$(5), d.SpI("", d.bMT(12, 9, "maxSeatCost"), ":"), d.R7$(2), d.LHq("\n      ", t.formGroup.value.maxAutoscaleSeats || 0, " × ", d.i5U(14, 11, t.options.seatPrice, "$"), " =\n      ", d.i5U(15, 14, t.maxSeatTotalCost, "$"), " /\n      ", d.bMT(16, 17, t.options.interval), "\n    ")
				}
			}

			function Qt(t, n) {
				if (1 & t && (d.j41(0, "bit-form-field", 1), d.EFF(1, "\n    "), d.j41(2, "bit-label"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n    "), d.nrm(6, "input", 10), d.EFF(7, "\n    "), d.j41(8, "bit-hint"), d.EFF(9, "\n      "), d.j41(10, "div"), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n      "), d.j41(14, "strong"), d.EFF(15), d.nI1(16, "i18n"), d.k0s(), d.EFF(17), d.nI1(18, "currency"), d.nI1(19, "currency"), d.nI1(20, "i18n"), d.k0s(), d.EFF(21, "\n  "), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.R7$(3), d.JRh(d.bMT(4, 8, "machineAccountLimit")), d.R7$(3), d.Y8G("min", t.formGroup.value.additionalServiceAccounts), d.R7$(5), d.SpI("\n        ", d.i5U(12, 10, "includedMachineAccounts", t.options.baseServiceAccountCount), "\n      "), d.R7$(4), d.SpI("", d.bMT(16, 13, "maxMachineAccountCost"), ":"), d.R7$(2), d.LHq("\n      ", t.maxAdditionalServiceAccounts, " ×\n      ", d.i5U(18, 15, t.options.additionalServiceAccountPrice, "$"), " =\n      ", d.i5U(19, 18, t.maxServiceAccountTotalCost, "$"), " / ", d.bMT(20, 21, t.options.interval), "\n    ")
				}
			}
			class tn {
				get monthlyServiceAccountPrice() {
					return "month" == this.options.interval ? this.options.additionalServiceAccountPrice : this.options.additionalServiceAccountPrice / 12
				}
				get serviceAccountTotalCost() {
					return Math.abs(this.formGroup.value.additionalServiceAccounts * this.options.additionalServiceAccountPrice)
				}
				get seatTotalCost() {
					return Math.abs(this.formGroup.value.seatCount * this.options.seatPrice)
				}
				get maxAdditionalServiceAccounts() {
					var t;
					const n = null !== (t = this.formGroup.value.maxAutoscaleServiceAccounts) && void 0 !== t ? t : 0;
					return Math.max(0, n - this.options.baseServiceAccountCount)
				}
				get maxServiceAccountTotalCost() {
					return this.maxAdditionalServiceAccounts * this.options.additionalServiceAccountPrice
				}
				get maxSeatTotalCost() {
					var t;
					return Math.abs((null !== (t = this.formGroup.value.maxAutoscaleSeats) && void 0 !== t ? t : 0) * this.options.seatPrice)
				}
				constructor(t, n, i, e, o, s) {
					this.formBuilder = t, this.organizationApiService = n, this.i18nService = i, this.platformUtilsService = e, this.toastService = o, this.internalOrganizationService = s, this.onAdjusted = new d.bkB, this.destroy$ = new m.B, this.formGroup = this.formBuilder.group({
						seatCount: [0, [X.k0.required, X.k0.min(1)]],
						limitSeats: [!1],
						maxAutoscaleSeats: [null],
						additionalServiceAccounts: [0, [X.k0.required, X.k0.min(0)]],
						limitServiceAccounts: [!1],
						maxAutoscaleServiceAccounts: [null]
					}), this.submit = () => Kt(this, void 0, void 0, (function*() {
						if (this.formGroup.markAllAsTouched(), this.formGroup.invalid) return;
						const t = new _t;
						t.seatAdjustment = this.formGroup.value.seatCount - this.options.seatCount, t.serviceAccountAdjustment = this.formGroup.value.additionalServiceAccounts - this.options.additionalServiceAccounts, t.maxAutoscaleSeats = this.formGroup.value.limitSeats ? this.formGroup.value.maxAutoscaleSeats : null, t.maxAutoscaleServiceAccounts = this.formGroup.value.limitServiceAccounts ? this.formGroup.value.maxAutoscaleServiceAccounts : null;
						const n = yield this.organizationApiService.updateSecretsManagerSubscription(this.organizationId, t), i = yield this.internalOrganizationService.get(this.organizationId), e = new Ut.o(n, {
							isMember: i.isMember,
							isProviderUser: i.isProviderUser
						});
						yield this.internalOrganizationService.upsert(e), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("subscriptionUpdated")
						}), this.onAdjusted.emit()
					}))
				}
				ngOnInit() {
					this.formGroup.valueChanges.pipe((0, f.Q)(this.destroy$)).subscribe((t => {
						const n = this.formGroup.controls.maxAutoscaleSeats,
							i = this.formGroup.controls.maxAutoscaleServiceAccounts;
						t.limitSeats ? (n.setValidators([X.k0.min(t.seatCount)]), n.enable({
							emitEvent: !1
						})) : n.disable({
							emitEvent: !1
						}), t.limitServiceAccounts ? (i.setValidators([X.k0.min(t.additionalServiceAccounts + this.options.baseServiceAccountCount)]), i.enable({
							emitEvent: !1
						})) : i.disable({
							emitEvent: !1
						})
					})), this.formGroup.patchValue({
						seatCount: this.options.seatCount,
						maxAutoscaleSeats: this.options.maxAutoscaleSeats,
						additionalServiceAccounts: this.options.additionalServiceAccounts,
						maxAutoscaleServiceAccounts: this.options.maxAutoscaleServiceAccounts,
						limitSeats: null != this.options.maxAutoscaleSeats,
						limitServiceAccounts: null != this.options.maxAutoscaleServiceAccounts
					})
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}
			tn.ɵfac = function(t) {
				return new(t || tn)(d.rXU(X.ok), d.rXU(q.X), d.rXU(L.W), d.rXU(V.y), d.rXU(_.f), d.rXU(c.k4))
			}, tn.ɵcmp = d.VBU({
				type: tn,
				selectors: [
					["app-sm-adjust-subscription"]
				],
				inputs: {
					organizationId: "organizationId",
					options: "options"
				},
				outputs: {
					onAdjusted: "onAdjusted"
				},
				decls: 86,
				vars: 67,
				consts: [
					[3, "formGroup", "bitSubmit"],
					[1, "tw-w-2/3"],
					["bitInput", "", "id", "smSeatCount", "formControlName", "seatCount", "type", "number", "step", "1", "min", "1"],
					["type", "checkbox", "bitCheckbox", "", "id", "limitSmSeats", "formControlName", "limitSeats"],
					["class", "tw-w-2/3", 4, "ngIf"],
					["bitInput", "", "id", "additionalServiceAccountCount", "formControlName", "additionalServiceAccounts", "type", "number", "step", "1", "min", "0"],
					["type", "checkbox", "bitCheckbox", "", "id", "limitServiceAccounts", "formControlName", "limitServiceAccounts"],
					["type", "submit", "bitButton", "", "buttonType", "primary", "bitFormButton", ""],
					[1, "tw-mt-2", 3, "formGroup"],
					["bitInput", "", "id", "smSeatLimit", "formControlName", "maxAutoscaleSeats", "type", "number", "step", "1", 3, "min"],
					["bitInput", "", "id", "additionalServiceAccountLimit", "formControlName", "maxAutoscaleServiceAccounts", "type", "number", "step", "1", 3, "min"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "bit-form-field", 1), d.EFF(3, "\n    "), d.j41(4, "bit-label"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n    "), d.nrm(8, "input", 2), d.EFF(9, "\n    "), d.j41(10, "bit-hint"), d.EFF(11, "\n      "), d.j41(12, "strong"), d.EFF(13), d.nI1(14, "i18n"), d.k0s(), d.EFF(15), d.nI1(16, "currency"), d.nI1(17, "currency"), d.nI1(18, "i18n"), d.k0s(), d.EFF(19, "\n  "), d.k0s(), d.EFF(20, "\n  "), d.j41(21, "bit-form-control"), d.EFF(22, "\n    "), d.j41(23, "bit-label"), d.EFF(24), d.nI1(25, "i18n"), d.k0s(), d.EFF(26, "\n    "), d.nrm(27, "input", 3), d.EFF(28, "\n    "), d.j41(29, "bit-hint"), d.EFF(30), d.nI1(31, "i18n"), d.k0s(), d.EFF(32, "\n  "), d.k0s(), d.EFF(33, "\n  "), d.DNE(34, Zt, 18, 19, "bit-form-field", 4), d.EFF(35, "\n  "), d.j41(36, "bit-form-field", 1), d.EFF(37, "\n    "), d.j41(38, "bit-label"), d.EFF(39), d.nI1(40, "i18n"), d.k0s(), d.EFF(41, "\n    "), d.nrm(42, "input", 5), d.EFF(43, "\n    "), d.j41(44, "bit-hint"), d.EFF(45, "\n      "), d.j41(46, "div"), d.EFF(47), d.nI1(48, "i18n"), d.nI1(49, "currency"), d.nI1(50, "i18n"), d.k0s(), d.EFF(51, "\n      "), d.j41(52, "div"), d.EFF(53, "\n        "), d.j41(54, "strong"), d.EFF(55), d.nI1(56, "i18n"), d.k0s(), d.EFF(57), d.nI1(58, "currency"), d.nI1(59, "currency"), d.nI1(60, "i18n"), d.k0s(), d.EFF(61, "\n    "), d.k0s(), d.EFF(62, "\n  "), d.k0s(), d.EFF(63, "\n  "), d.j41(64, "bit-form-control"), d.EFF(65, "\n    "), d.j41(66, "bit-label"), d.EFF(67), d.nI1(68, "i18n"), d.k0s(), d.EFF(69, "\n    "), d.nrm(70, "input", 6), d.EFF(71, "\n    "), d.j41(72, "bit-hint"), d.EFF(73), d.nI1(74, "i18n"), d.k0s(), d.EFF(75, "\n  "), d.k0s(), d.EFF(76, "\n  "), d.DNE(77, Qt, 22, 23, "bit-form-field", 4), d.EFF(78, "\n  "), d.j41(79, "button", 7), d.EFF(80), d.nI1(81, "i18n"), d.k0s(), d.EFF(82, "\n  "), d.nrm(83, "bit-error-summary", 8), d.EFF(84, "\n"), d.k0s(), d.EFF(85, "\n")), 2 & t && (d.Y8G("formGroup", n.formGroup)("bitSubmit", n.submit), d.R7$(5), d.JRh(d.bMT(6, 24, "subscriptionSeats")), d.R7$(8), d.SpI("", d.bMT(14, 26, "total"), ":"), d.R7$(2), d.LHq("\n      ", n.formGroup.value.seatCount || 0, " × ", d.i5U(16, 28, n.options.seatPrice, "$"), " =\n      ", d.i5U(17, 31, n.seatTotalCost, "$"), " / ", d.bMT(18, 34, n.options.interval), "\n    "), d.R7$(9), d.JRh(d.bMT(25, 36, "limitSubscription")), d.R7$(6), d.SpI("\n      ", d.bMT(31, 38, "limitSmSubscriptionDesc"), "\n    "), d.R7$(4), d.Y8G("ngIf", n.formGroup.value.limitSeats), d.R7$(5), d.JRh(d.bMT(40, 40, "additionalMachineAccounts")), d.R7$(8), d.Lme("\n        ", d.i5U(48, 42, "includedMachineAccounts", n.options.baseServiceAccountCount), "\n        ", d.i5U(50, 48, "addAdditionalMachineAccounts", d.i5U(49, 45, n.monthlyServiceAccountPrice, "$")), "\n      "), d.R7$(8), d.SpI("", d.bMT(56, 51, "total"), ":"), d.R7$(2), d.LHq("\n        ", n.formGroup.value.additionalServiceAccounts || 0, " ×\n        ", d.i5U(58, 53, n.options.additionalServiceAccountPrice, "$"), " =\n        ", d.i5U(59, 56, n.serviceAccountTotalCost, "$"), " / ", d.bMT(60, 59, n.options.interval), "\n      "), d.R7$(10), d.JRh(d.bMT(68, 61, "limitMachineAccounts")), d.R7$(6), d.SpI("\n      ", d.bMT(74, 63, "limitMachineAccountsDesc"), "\n    "), d.R7$(4), d.Y8G("ngIf", n.formGroup.value.limitServiceAccounts), d.R7$(3), d.SpI("\n    ", d.bMT(81, 65, "save"), "\n  "), d.R7$(3), d.Y8G("formGroup", n.formGroup))
				},
				dependencies: [E.bT, X.qT, X.me, X.Q0, X.Zm, X.BC, X.cb, X.VZ, X.j4, X.JD, Q.$, tt.L, y.Q, zt.P, Nt.f, ot.m, Yt.s, st.J, Wt.E, Ht.h, E.oe, C.$],
				encapsulation: 2
			});
			i(84488);
			class nn {}
			i(69138);
			var en = i(92945),
				on = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};

			function sn(t, n) {
				if (1 & t && (d.j41(0, "form", 1), d.EFF(1, "\n  "), d.nrm(2, "sm-subscribe", 2), d.EFF(3, "\n"), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.Y8G("formGroup", t.formGroup)("bitSubmit", t.submit), d.R7$(2), d.Y8G("formGroup", t.formGroup)("selectedPlan", t.plan)("upgradeOrganization", !1)("showSubmitButton", !0)("customerDiscount", t.customerDiscount)
				}
			}
			class Hn {
				constructor(t, n, i, e, o, s, r) {
					this.apiService = t, this.formBuilder = n, this.platformUtilsService = i, this.i18nService = e, this.organizationApiService = o, this.organizationService = s, this.toastService = r, this.onSubscribe = new d.bkB, this.formGroup = (0, H.Fk)(this.formBuilder), this.submit = () => on(this, void 0, void 0, (function*() {
						const t = new nn;
						t.additionalSmSeats = this.plan.SecretsManager.hasAdditionalSeatsOption ? this.formGroup.value.userSeats : 0, t.additionalServiceAccounts = this.plan.SecretsManager.hasAdditionalServiceAccountOption ? this.formGroup.value.additionalServiceAccounts : 0;
						const n = yield this.organizationApiService.subscribeToSecretsManager(this.organization.id, t), i = new Ut.o(n, {
							isMember: this.organization.isMember,
							isProviderUser: this.organization.isProviderUser
						});
						yield this.organizationService.upsert(i), yield this.apiService.refreshIdentityToken(), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("subscribedToSecretsManager")
						}), this.onSubscribe.emit()
					}))
				}
			}

			function rn(t, n) {
				if (1 & t && (d.j41(0, "button", 5), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.Y8G("bitAction", t.requestReinstatement), d.R7$(), d.SpI("\n      ", d.bMT(2, 2, "reinstateSubscription"), "\n    ")
				}
			}

			function an(t, n) {
				if (1 & t && (d.j41(0, "bit-callout", 3), d.EFF(1, "\n    "), d.j41(2, "p"), d.EFF(3), d.k0s(), d.EFF(4, "\n    "), d.DNE(5, rn, 3, 4, "button", 4), d.EFF(6, "\n  "), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.Y8G("type", t.data.callout.severity)("title", t.data.callout.header), d.R7$(3), d.JRh(t.data.callout.body), d.R7$(2), d.Y8G("ngIf", t.data.callout.showReinstatementButton)
				}
			}

			function cn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "dt"), d.EFF(3), d.k0s(), d.EFF(4, "\n      "), d.j41(5, "dd"), d.EFF(6, "\n        "), d.j41(7, "span", 6), d.EFF(8), d.k0s(), d.EFF(9, "\n      "), d.k0s(), d.EFF(10, "\n      "), d.j41(11, "dt"), d.EFF(12), d.nI1(13, "titlecase"), d.k0s(), d.EFF(14, "\n      "), d.j41(15, "dd"), d.EFF(16), d.nI1(17, "date"), d.k0s(), d.EFF(18, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG();
					d.R7$(3), d.JRh(t.data.status.label), d.R7$(5), d.SpI("\n          ", t.displayedStatus, "\n        "), d.R7$(4), d.SpI("\n        ", d.bMT(13, 4, t.data.date.label), "\n      "), d.R7$(4), d.SpI("\n        ", d.i5U(17, 6, t.data.date.value, "mediumDate"), "\n      ")
				}
			}
			Hn.ɵfac = function(t) {
				return new(t || Hn)(d.rXU(O.G), d.rXU(X.ok), d.rXU(V.y), d.rXU(L.W), d.rXU(q.X), d.rXU(c.k4), d.rXU(_.f))
			}, Hn.ɵcmp = d.VBU({
				type: Hn,
				selectors: [
					["sm-subscribe-standalone"]
				],
				inputs: {
					plan: "plan",
					organization: "organization",
					customerDiscount: "customerDiscount"
				},
				outputs: {
					onSubscribe: "onSubscribe"
				},
				decls: 2,
				vars: 1,
				consts: [
					[3, "formGroup", "bitSubmit", 4, "ngIf"],
					[3, "formGroup", "bitSubmit"],
					[3, "formGroup", "selectedPlan", "upgradeOrganization", "showSubmitButton", "customerDiscount"]
				],
				template: function(t, n) {
					1 & t && (d.DNE(0, sn, 4, 7, "form", 0), d.EFF(1, "\n")), 2 & t && d.Y8G("ngIf", n.plan)
				},
				dependencies: [E.bT, X.qT, X.cb, X.j4, tt.L, en.m],
				encapsulation: 2
			});
			class un {
				constructor(t, n) {
					this.datePipe = t, this.i18nService = n, this.reinstatementRequested = new d.bkB, this.requestReinstatement = () => this.reinstatementRequested.emit()
				}
				get displayedStatus() {
					return this.subscription.items.some((t => t.sponsoredSubscriptionItem)) ? this.i18nService.t("sponsored") : this.data.status.value
				}
				get planName() {
					return this.organizationSubscriptionResponse.plan.name
				}
				get status() {
					return this.subscription ? "canceled" != this.subscription.status && this.subscription.cancelAtEndDate ? "pending_cancellation" : this.subscription.status : "free"
				}
				get subscription() {
					var t;
					return null === (t = this.organizationSubscriptionResponse) || void 0 === t ? void 0 : t.subscription
				}
				get data() {
					const t = this.i18nService.t("status"),
						n = this.i18nService.t("nextCharge"),
						i = this.i18nService.t("subscriptionExpired"),
						e = this.i18nService.t("cancellationDate");
					switch (this.status) {
						case "free":
							return {};
						case "trialing":
							return {
								status: {
									label: t,
									value: this.i18nService.t("trial")
								}, date: {
									label: n,
									value: this.subscription.periodEndDate
								}
							};
						case "active":
							return {
								status: {
									label: t,
									value: this.i18nService.t("active")
								}, date: {
									label: n,
									value: this.subscription.periodEndDate
								}
							};
						case "past_due": {
							const n = this.i18nService.t("pastDue"),
								e = this.datePipe.transform(this.subscription.suspensionDate, "mediumDate"),
								o = "charge_automatically" === this.subscription.collectionMethod ? this.i18nService.t("pastDueWarningForChargeAutomatically", this.subscription.gracePeriod, e) : this.i18nService.t("pastDueWarningForSendInvoice", this.subscription.gracePeriod, e);
							return {
								status: {
									label: t,
									value: n
								},
								date: {
									label: i,
									value: this.subscription.unpaidPeriodEndDate
								},
								callout: {
									severity: "warning",
									header: n,
									body: o,
									showReinstatementButton: !1
								}
							}
						}
						case "unpaid":
							return {
								status: {
									label: t,
									value: this.i18nService.t("unpaid")
								}, date: {
									label: i,
									value: this.subscription.unpaidPeriodEndDate
								}, callout: {
									severity: "danger",
									header: this.i18nService.t("unpaidInvoice"),
									body: this.i18nService.t("toReactivateYourSubscription"),
									showReinstatementButton: !1
								}
							};
						case "pending_cancellation": {
							const n = this.i18nService.t("pendingCancellation");
							return {
								status: {
									label: t,
									value: n
								},
								date: {
									label: e,
									value: this.subscription.periodEndDate
								},
								callout: {
									severity: "warning",
									header: n,
									body: this.i18nService.t("subscriptionPendingCanceled"),
									showReinstatementButton: !0
								}
							}
						}
						case "incomplete_expired":
						case "canceled": {
							const n = this.i18nService.t("canceled");
							return {
								status: {
									label: t,
									value: n
								},
								date: {
									label: e,
									value: this.subscription.periodEndDate
								},
								callout: {
									severity: "danger",
									header: n,
									body: this.i18nService.t("subscriptionCanceled"),
									showReinstatementButton: !1
								}
							}
						}
					}
				}
			}
			un.ɵfac = function(t) {
				return new(t || un)(d.rXU(E.vh), d.rXU(L.W))
			}, un.ɵcmp = d.VBU({
				type: un,
				selectors: [
					["app-subscription-status"]
				],
				inputs: {
					organizationSubscriptionResponse: "organizationSubscriptionResponse"
				},
				outputs: {
					reinstatementRequested: "reinstatementRequested"
				},
				decls: 17,
				vars: 6,
				consts: [
					[3, "type", "title", 4, "ngIf"],
					[1, "tw-grid", "tw-grid-flow-col", "tw-grid-rows-2"],
					[4, "ngIf"],
					[3, "type", "title"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction", 4, "ngIf"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction"],
					[1, "tw-capitalize"]
				],
				template: function(t, n) {
					1 & t && (d.qex(0), d.EFF(1, "\n  "), d.DNE(2, an, 7, 4, "bit-callout", 0), d.EFF(3, "\n  "), d.j41(4, "dl", 1), d.EFF(5, "\n    "), d.j41(6, "dt"), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n    "), d.j41(10, "dd"), d.EFF(11), d.k0s(), d.EFF(12, "\n    "), d.DNE(13, cn, 19, 9, "ng-container", 2), d.EFF(14, "\n  "), d.k0s(), d.EFF(15, "\n"), d.bVm(), d.EFF(16, "\n")), 2 & t && (d.R7$(2), d.Y8G("ngIf", n.data.callout), d.R7$(5), d.JRh(d.bMT(8, 4, "billingPlan")), d.R7$(4), d.JRh(n.planName), d.R7$(2), d.Y8G("ngIf", n.data.status && n.data.date))
				},
				dependencies: [E.bT, yt.p, y.Q, nt.G, E.PV, E.vh, C.$],
				encapsulation: 2
			});
			var ln = function(t, n, i, e) {
				return new(i || (i = Promise))((function(o, s) {
					function H(t) {
						try {
							a(e.next(t))
						} catch (n) {
							s(n)
						}
					}

					function r(t) {
						try {
							a(e.throw(t))
						} catch (n) {
							s(n)
						}
					}

					function a(t) {
						var n;
						t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
							t(n)
						}))).then(H, r)
					}
					a((e = e.apply(t, n || [])).next())
				}))
			};
			const dn = t => ({
					"tw-text-danger": t
				}),
				pn = t => ({
					"tw-pl-20": t
				}),
				hn = t => ["/providers", t, "manage-client-organizations"];

			function Fn(t, n) {
				1 & t && (d.qex(0), d.EFF(1, "\n  "), d.nrm(2, "i", 7), d.nI1(3, "i18n"), d.EFF(4, "\n  "), d.j41(5, "span", 8), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n"), d.bVm()), 2 & t && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function bn(t, n) {
				1 & t && (d.j41(0, "bit-callout", 13), d.nI1(1, "i18n"), d.EFF(2), d.nI1(3, "i18n"), d.k0s()), 2 & t && (d.FS9("title", d.bMT(1, 2, "canceled")), d.R7$(2), d.SpI("\n        ", d.bMT(3, 4, "subscriptionCanceled"), ""))
			}

			function gn(t, n) {
				if (1 & t && (d.j41(0, "button", 15), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(5);
					d.Y8G("bitAction", t.reinstate), d.R7$(), d.SpI("\n          ", d.bMT(2, 2, "reinstateSubscription"), "\n        ")
				}
			}

			function mn(t, n) {
				if (1 & t && (d.j41(0, "bit-callout", 13), d.nI1(1, "i18n"), d.EFF(2, "\n        "), d.j41(3, "p"), d.EFF(4), d.nI1(5, "i18n"), d.k0s(), d.EFF(6, "\n        "), d.DNE(7, gn, 3, 4, "button", 14), d.EFF(8, "\n      "), d.k0s()), 2 & t) {
					const t = d.XpG(4);
					d.FS9("title", d.bMT(1, 3, "pendingCancellation")), d.R7$(4), d.JRh(d.bMT(5, 5, "subscriptionPendingCanceled")), d.R7$(3), d.Y8G("ngIf", t.userOrg.canEditSubscription)
				}
			}

			function Sn(t, n) {
				1 & t && (d.j41(0, "span", 19), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.JRh(d.bMT(2, 1, "pendingCancellation")))
			}

			function fn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "dt"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n          "), d.j41(6, "dd"), d.EFF(7, "\n            "), d.j41(8, "span", 16), d.EFF(9), d.k0s(), d.EFF(10, "\n            "), d.DNE(11, Sn, 3, 3, "span", 17), d.EFF(12, "\n          "), d.k0s(), d.EFF(13, "\n          "), d.j41(14, "dt", 18), d.EFF(15), d.nI1(16, "i18n"), d.k0s(), d.EFF(17, "\n          "), d.j41(18, "dd", 18), d.EFF(19), d.nI1(20, "date"), d.k0s(), d.EFF(21, "\n        "), d.bVm()), 2 & t) {
					const t = d.XpG(4);
					d.R7$(3), d.JRh(d.bMT(4, 7, "status")), d.R7$(6), d.JRh(t.isSponsoredSubscription ? "sponsored" : t.subscription.status || "-"), d.R7$(2), d.Y8G("ngIf", t.subscriptionMarkedForCancel), d.R7$(3), d.Y8G("ngClass", d.eq3(14, dn, t.isExpired)), d.R7$(), d.SpI("\n            ", d.bMT(16, 9, "subscriptionExpiration"), "\n          "), d.R7$(3), d.Y8G("ngClass", d.eq3(16, dn, t.isExpired)), d.R7$(), d.SpI("\n            ", t.nextInvoice ? d.i5U(20, 11, t.sub.subscription.periodEndDate, "mediumDate") : "-", "\n          ")
				}
			}

			function vn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.DNE(2, bn, 4, 6, "bit-callout", 11), d.EFF(3, "\n      "), d.DNE(4, mn, 9, 7, "bit-callout", 11), d.EFF(5, "\n\n      "), d.j41(6, "dl", 12), d.EFF(7, "\n        "), d.j41(8, "dt"), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n        "), d.j41(12, "dd"), d.EFF(13), d.k0s(), d.EFF(14, "\n        "), d.DNE(15, fn, 22, 18, "ng-container", 5), d.EFF(16, "\n      "), d.k0s(), d.EFF(17, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(2), d.Y8G("ngIf", t.subscription && t.subscription.cancelled), d.R7$(2), d.Y8G("ngIf", t.subscriptionMarkedForCancel), d.R7$(5), d.JRh(d.bMT(10, 5, "billingPlan")), d.R7$(4), d.JRh(t.sub.plan.name), d.R7$(2), d.Y8G("ngIf", t.subscription)
				}
			}

			function En(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "app-subscription-status", 20), d.bIt("reinstatementRequested", (function() {
						d.eBV(t);
						const n = d.XpG(3);
						return d.Njj(n.reinstate())
					})), d.k0s()
				}
				if (2 & t) {
					const t = d.XpG(3);
					d.Y8G("organizationSubscriptionResponse", t.sub)
				}
			}

			function yn(t, n) {
				if (1 & t && (d.j41(0, "span", 25), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(4);
					d.R7$(), d.JRh(d.i5U(2, 1, "providerDiscount", null == t.customerDiscount ? null : t.customerDiscount.percentOff))
				}
			}

			function In(t, n) {
				if (1 & t && (d.j41(0, "span"), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG().$implicit;
					d.R7$(), d.SpI("", d.bMT(2, 1, t.productName), " -")
				}
			}

			function wn(t, n) {
				1 & t && (d.qex(0), d.EFF(1), d.nI1(2, "i18n"), d.bVm()), 2 & t && (d.R7$(), d.SpI("\n                    ", d.bMT(2, 1, "freeForOneYear"), "\n                  "))
			}

			function kn(t, n) {
				if (1 & t && (d.j41(0, "span", 32), d.EFF(1), d.nI1(2, "currency"), d.nI1(3, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(2).$implicit,
						n = d.XpG(6);
					d.R7$(), d.Lme("", d.i5U(2, 2, n.calculateTotalAppliedDiscount(t.quantity * t.amount), "$"), "\n                        / ", d.bMT(3, 5, "year"), "")
				}
			}

			function Cn(t, n) {
				if (1 & t && (d.EFF(0, "\n                    "), d.j41(1, "div", 30), d.EFF(2, "\n                      "), d.j41(3, "span"), d.EFF(4), d.nI1(5, "currency"), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n                      "), d.DNE(8, kn, 4, 7, "span", 31), d.EFF(9, "\n                    "), d.k0s(), d.EFF(10, "\n                  ")), 2 & t) {
					const t = d.XpG().$implicit,
						n = d.XpG(6);
					d.R7$(4), d.Lme("\n                        ", d.i5U(5, 3, t.quantity * t.amount, "$"), " /", d.bMT(6, 6, t.interval), "\n                      "), d.R7$(4), d.Y8G("ngIf", (null == n.customerDiscount ? null : n.customerDiscount.percentOff) && !n.isSecretsManagerTrial())
				}
			}

			function Rn(t, n) {
				if (1 & t && (d.j41(0, "tr", 27), d.EFF(1, "\n                "), d.j41(2, "td", 28), d.EFF(3, "\n                  "), d.DNE(4, In, 3, 3, "span", 5), d.EFF(5), d.nI1(6, "currency"), d.k0s(), d.EFF(7, "\n                "), d.j41(8, "td", 29), d.EFF(9, "\n                  "), d.DNE(10, wn, 3, 3, "ng-container", 6), d.EFF(11, "\n                  "), d.DNE(12, Cn, 11, 8, "ng-template", null, 2, d.C5r), d.EFF(14, "\n                "), d.k0s(), d.EFF(15, "\n              "), d.k0s()), 2 & t) {
					const t = n.$implicit,
						i = d.sdS(13),
						e = d.XpG(6);
					d.R7$(2), d.Y8G("ngClass", d.eq3(10, pn, t.addonSubscriptionItem)), d.R7$(2), d.Y8G("ngIf", !t.addonSubscriptionItem), d.R7$(), d.E5c("\n                  ", t.name, " ", t.quantity > 1 ? "×" + t.quantity : "", " @\n                  ", d.i5U(6, 7, t.amount, "$"), "\n                "), d.R7$(5), d.Y8G("ngIf", null == e.sub || null == e.sub.customerDiscount || null == e.sub.customerDiscount.appliesTo ? null : e.sub.customerDiscount.appliesTo.includes(t.productId))("ngIfElse", i)
				}
			}

			function Tn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n              "), d.DNE(2, Rn, 16, 12, "tr", 26), d.EFF(3, "\n            "), d.bVm()), 2 & t) {
					const t = d.XpG(5);
					d.R7$(2), d.Y8G("ngForOf", t.subscriptionLineItems)
				}
			}

			function $n(t, n) {
				1 & t && (d.j41(0, "tr", 27), d.EFF(1, "\n                "), d.j41(2, "td", 34), d.EFF(3), d.nI1(4, "i18n"), d.nI1(5, "i18n"), d.k0s(), d.EFF(6, "\n                "), d.j41(7, "td", 29), d.EFF(8), d.nI1(9, "i18n"), d.k0s(), d.EFF(10, "\n              "), d.k0s()), 2 & t && (d.R7$(3), d.Lme("", d.bMT(4, 3, "passwordManager"), " - ", d.bMT(5, 5, "freeOrganization"), ""), d.R7$(5), d.JRh(d.bMT(9, 7, "free")))
			}

			function Mn(t, n) {
				1 & t && (d.j41(0, "tr", 27), d.EFF(1, "\n                "), d.j41(2, "td", 34), d.EFF(3), d.nI1(4, "i18n"), d.nI1(5, "i18n"), d.k0s(), d.EFF(6, "\n                "), d.j41(7, "td", 29), d.EFF(8), d.nI1(9, "i18n"), d.k0s(), d.EFF(10, "\n              "), d.k0s()), 2 & t && (d.R7$(3), d.Lme("", d.bMT(4, 3, "secretsManager"), " - ", d.bMT(5, 5, "freeOrganization"), ""), d.R7$(5), d.JRh(d.bMT(9, 7, "free")))
			}

			function jn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n              "), d.DNE(2, $n, 11, 9, "tr", 33), d.EFF(3, "\n              "), d.DNE(4, Mn, 11, 9, "tr", 33), d.EFF(5, "\n            "), d.bVm()), 2 & t) {
					const t = d.XpG(5);
					d.R7$(2), d.Y8G("ngIf", t.userOrg.usePasswordManager), d.R7$(2), d.Y8G("ngIf", t.userOrg.useSecretsManager)
				}
			}

			function Gn(t, n) {
				if (1 & t && (d.EFF(0, "\n            "), d.DNE(1, Tn, 4, 1, "ng-container", 5), d.EFF(2, "\n            "), d.DNE(3, jn, 6, 2, "ng-container", 5), d.EFF(4, "\n          ")), 2 & t) {
					const t = d.XpG(4);
					d.R7$(), d.Y8G("ngIf", t.subscription), d.R7$(2), d.Y8G("ngIf", t.userOrg.isFreeOrg)
				}
			}

			function An(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "div", 21), d.EFF(3, "\n        "), d.j41(4, "strong", 22), d.EFF(5), d.nI1(6, "i18n"), d.DNE(7, yn, 3, 4, "span", 23), d.k0s(), d.EFF(8, "\n        "), d.j41(9, "bit-table"), d.EFF(10, "\n          "), d.DNE(11, Gn, 5, 2, "ng-template", 24), d.EFF(12, "\n        "), d.k0s(), d.EFF(13, "\n      "), d.k0s(), d.EFF(14, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(5), d.JRh(d.bMT(6, 2, "details")), d.R7$(2), d.Y8G("ngIf", (null == t.customerDiscount ? null : t.customerDiscount.percentOff) > 0 && !t.isSecretsManagerTrial())
				}
			}

			function xn(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 38), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.changePlan())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				2 & t && (d.R7$(), d.SpI("\n          ", d.bMT(2, 1, "changeBillingPlan"), "\n        "))
			}

			function Pn(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "app-change-plan", 39), d.bIt("onChanged", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.closeChangePlan())
					}))("onCanceled", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.closeChangePlan())
					})), d.k0s()
				}
				if (2 & t) {
					const t = d.XpG(4);
					d.Y8G("organizationId", t.organizationId)("currentPlan", t.sub.plan)("preSelectedProductTier", t.preSelectedProductTier)
				}
			}

			function Dn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "div", 35), d.EFF(3, "\n        "), d.DNE(4, xn, 3, 3, "button", 36), d.EFF(5, "\n        "), d.DNE(6, Pn, 1, 3, "app-change-plan", 37), d.EFF(7, "\n      "), d.k0s(), d.EFF(8, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(4), d.Y8G("ngIf", t.showChangePlanButton), d.R7$(2), d.Y8G("ngIf", t.showChangePlan)
				}
			}

			function Bn(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n      "), d.j41(2, "div", 40), d.EFF(3, "\n        "), d.j41(4, "sm-subscribe-standalone", 41), d.bIt("onSubscribe", (function() {
						d.eBV(t);
						const n = d.XpG(3);
						return d.Njj(n.subscriptionAdjusted())
					})), d.k0s(), d.EFF(5, "\n      "), d.k0s(), d.EFF(6, "\n    "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(3);
					d.R7$(4), d.Y8G("plan", t.sub.plan)("organization", t.userOrg)("customerDiscount", t.customerDiscount)
				}
			}

			function Un(t, n) {
				1 & t && (d.j41(0, "p", 44), d.EFF(1), d.nI1(2, "i18n"), d.nI1(3, "i18n"), d.nI1(4, "i18n"), d.j41(5, "a", 46), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n      "), d.k0s()), 2 & t && (d.R7$(), d.E5c("\n        ", d.bMT(2, 4, "smStandaloneTrialSeatCountUpdateMessageFragment1"), "\n        ", d.bMT(3, 6, "passwordManager"), "\n        ", d.bMT(4, 8, "smStandaloneTrialSeatCountUpdateMessageFragment2"), "\n        "), d.R7$(5), d.SpI("", d.bMT(7, 10, "contactSupportShort"), ".\n        "))
			}

			function Xn(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n        "), d.j41(2, "h3", 47), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "app-adjust-subscription", 48), d.bIt("onAdjusted", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.subscriptionAdjusted())
					})), d.EFF(7, "\n        "), d.k0s(), d.EFF(8, "\n      "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(4);
					d.R7$(3), d.JRh(d.bMT(4, 6, "passwordManager")), d.R7$(3), d.Y8G("seatPrice", t.seatPrice)("organizationId", t.organizationId)("interval", t.billingInterval)("currentSeatCount", t.seats)("maxAutoscaleSeats", t.maxAutoscaleSeats)
				}
			}

			function zn(t, n) {
				if (1 & t && (d.j41(0, "button", 49), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(4);
					d.Y8G("bitAction", t.removeSponsorship), d.R7$(), d.SpI("\n        ", d.bMT(2, 2, "removeSponsorship"), "\n      ")
				}
			}

			function Nn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n          "), d.j41(2, "div", 52), d.EFF(3, "\n            "), d.j41(4, "div", 53), d.EFF(5, "\n              "), d.j41(6, "button", 15), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n              "), d.j41(10, "button", 15), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n            "), d.k0s(), d.EFF(14, "\n          "), d.k0s(), d.EFF(15, "\n        "), d.bVm()), 2 & t) {
					const t = d.XpG(5);
					d.R7$(6), d.Y8G("bitAction", t.adjustStorage(!0)), d.R7$(), d.SpI("\n                ", d.bMT(8, 4, "addStorage"), "\n              "), d.R7$(3), d.Y8G("bitAction", t.adjustStorage(!1)), d.R7$(), d.SpI("\n                ", d.bMT(12, 6, "removeStorage"), "\n              ")
				}
			}

			function Yn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n        "), d.j41(2, "h4", 50), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "p", 44), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n        "), d.nrm(10, "bit-progress", 51), d.EFF(11, "\n        "), d.DNE(12, Nn, 16, 8, "ng-container", 5), d.EFF(13, "\n      "), d.bVm()), 2 & t) {
					const t = d.XpG(4);
					d.R7$(3), d.JRh(d.bMT(4, 4, "storage")), d.R7$(4), d.SpI("\n          ", d.brH(8, 6, "subscriptionStorage", t.sub.maxStorageGb || 0, t.sub.storageName || "0 MB"), "\n        "), d.R7$(3), d.Y8G("barWidth", t.storagePercentage), d.R7$(2), d.Y8G("ngIf", t.subscription && !t.subscription.cancelled && !t.subscriptionMarkedForCancel)
				}
			}

			function On(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n        "), d.j41(2, "h3", 54), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "app-sm-adjust-subscription", 55), d.bIt("onAdjusted", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.subscriptionAdjusted())
					})), d.k0s(), d.EFF(7, "\n      "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(4);
					d.R7$(3), d.JRh(d.bMT(4, 3, "secretsManager")), d.R7$(3), d.Y8G("organizationId", t.organizationId)("options", t.smOptions)
				}
			}

			function Vn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "h2", 42), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n      "), d.DNE(6, Un, 9, 12, "p", 43), d.EFF(7, "\n      "), d.j41(8, "p", 44), d.EFF(9), d.k0s(), d.EFF(10, "\n      "), d.DNE(11, Xn, 9, 8, "ng-container", 5), d.EFF(12, "\n      "), d.DNE(13, zn, 3, 4, "button", 45), d.EFF(14, "\n      "), d.DNE(15, Yn, 14, 10, "ng-container", 5), d.EFF(16, "\n      "), d.DNE(17, On, 8, 5, "ng-container", 5), d.EFF(18, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(3), d.JRh(d.bMT(4, 7, "manageSubscription")), d.R7$(3), d.Y8G("ngIf", "sm-standalone" === (null == t.customerDiscount ? null : t.customerDiscount.id)), d.R7$(3), d.JRh(t.subscriptionDesc), d.R7$(2), d.Y8G("ngIf", t.subscription && t.canAdjustSeats && !t.subscription.cancelled && !t.subscriptionMarkedForCancel && (!t.customerDiscount || "sm-standalone" != t.customerDiscount.id)), d.R7$(2), d.Y8G("ngIf", t.isSponsoredSubscription), d.R7$(2), d.Y8G("ngIf", !t.customerDiscount || "sm-standalone" != t.customerDiscount.id), d.R7$(2), d.Y8G("ngIf", t.showAdjustSecretsManager)
				}
			}

			function Ln(t, n) {
				1 & t && d.eu8(0)
			}

			function qn(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 57), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(4);
						return d.Njj(n.cancelSubscription())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				2 & t && (d.R7$(), d.SpI("\n          ", d.bMT(2, 1, "cancelSubscription"), "\n        "))
			}

			function Jn(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "h2", 42), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n      "), d.j41(6, "p", 44), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n      "), d.j41(10, "div", 53), d.EFF(11, "\n        "), d.DNE(12, qn, 3, 3, "button", 56), d.EFF(13, "\n      "), d.k0s(), d.EFF(14, "\n    "), d.bVm()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(3), d.JRh(d.bMT(4, 3, "additionalOptions")), d.R7$(4), d.SpI("\n        ", d.bMT(8, 5, "additionalOptionsDesc"), "\n      "), d.R7$(5), d.Y8G("ngIf", t.subscription && !t.subscription.cancelled && !t.subscriptionMarkedForCancel)
				}
			}

			function _n(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n    "), d.DNE(2, vn, 18, 7, "ng-container", 5), d.nI1(3, "async"), d.EFF(4, "\n    "), d.DNE(5, En, 1, 1, "app-subscription-status", 9), d.nI1(6, "async"), d.EFF(7, "\n    "), d.DNE(8, An, 15, 4, "ng-container", 5), d.EFF(9, "\n\n    "), d.DNE(10, Dn, 9, 2, "ng-container", 5), d.EFF(11, "\n\n    "), d.DNE(12, Bn, 7, 3, "ng-container", 5), d.EFF(13, "\n\n    "), d.DNE(14, Vn, 19, 9, "ng-container", 5), d.EFF(15, "\n    "), d.DNE(16, Ln, 1, 0, "ng-container", 10), d.EFF(17, "\n    "), d.DNE(18, Jn, 15, 7, "ng-container", 5), d.EFF(19, "\n  "), d.bVm()), 2 & t) {
					const t = d.XpG(2),
						n = d.sdS(10);
					d.R7$(2), d.Y8G("ngIf", !d.bMT(3, 8, t.showUpdatedSubscriptionStatusSection$)), d.R7$(3), d.Y8G("ngIf", d.bMT(6, 10, t.showUpdatedSubscriptionStatusSection$)), d.R7$(3), d.Y8G("ngIf", t.userOrg.canEditSubscription), d.R7$(2), d.Y8G("ngIf", t.userOrg.canEditSubscription), d.R7$(2), d.Y8G("ngIf", t.showSecretsManagerSubscribe), d.R7$(2), d.Y8G("ngIf", t.userOrg.canEditSubscription), d.R7$(2), d.Y8G("ngTemplateOutlet", n), d.R7$(2), d.Y8G("ngIf", t.userOrg.canEditSubscription)
				}
			}

			function Wn(t, n) {
				if (1 & t && (d.j41(0, "bit-container"), d.EFF(1, "\n  "), d.DNE(2, _n, 20, 12, "ng-container", 5), d.EFF(3, "\n"), d.k0s()), 2 & t) {
					const t = d.XpG();
					d.R7$(2), d.Y8G("ngIf", t.sub && !t.loading)
				}
			}

			function Kn(t, n) {
				if (1 & t && (d.j41(0, "p", 44), d.EFF(1), d.nI1(2, "i18n"), d.j41(3, "a", 60), d.EFF(4), d.nI1(5, "i18n"), d.k0s(), d.EFF(6, ".\n      "), d.k0s()), 2 & t) {
					const t = d.XpG(4);
					d.R7$(), d.SpI("\n        ", d.bMT(2, 3, "manageSubscriptionFromThe"), "\n        "), d.R7$(2), d.Y8G("routerLink", d.eq3(7, hn, t.userOrg.providerId)), d.R7$(), d.JRh(d.bMT(5, 5, "providerPortal"))
				}
			}

			function Zn(t, n) {
				if (1 & t && (d.EFF(0, "\n        "), d.j41(1, "p"), d.EFF(2), d.nI1(3, "i18n"), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n      ")), 2 & t) {
					const t = d.XpG(4);
					d.R7$(2), d.Lme("\n          ", d.i5U(3, 2, "billingManagedByProvider", t.userOrg.providerName), ".\n          ", d.bMT(4, 5, "billingContactProviderForAssistance"), ".\n        ")
				}
			}

			function Qn(t, n) {
				1 & t && d.eu8(0)
			}

			function ti(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n      "), d.j41(2, "h2", 58), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n      "), d.DNE(6, Kn, 7, 9, "p", 59), d.EFF(7, "\n      "), d.DNE(8, Zn, 6, 7, "ng-template", null, 4, d.C5r), d.EFF(10, "\n      "), d.DNE(11, Qn, 1, 0, "ng-container", 10), d.EFF(12, "\n    "), d.bVm()), 2 & t) {
					const t = d.sdS(9),
						n = d.XpG(3),
						i = d.sdS(10);
					d.R7$(3), d.JRh(d.bMT(4, 4, "manageSubscription")), d.R7$(3), d.Y8G("ngIf", n.userOrg.isProviderUser)("ngIfElse", t), d.R7$(5), d.Y8G("ngTemplateOutlet", i)
				}
			}

			function ni(t, n) {
				if (1 & t && (d.EFF(0, "\n      "), d.j41(1, "div", 61), d.EFF(2, "\n        "), d.nrm(3, "bit-icon", 62), d.EFF(4, "\n        "), d.j41(5, "p", 63), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n        "), d.j41(9, "p"), d.EFF(10), d.nI1(11, "i18n"), d.k0s(), d.EFF(12, "\n      "), d.k0s(), d.EFF(13, "\n    ")), 2 & t) {
					const t = d.XpG(3);
					d.R7$(3), d.Y8G("icon", t.subscriptionHiddenIcon), d.R7$(3), d.JRh(d.i5U(7, 3, "billingManagedByProvider", t.userOrg.providerName)), d.R7$(4), d.JRh(d.bMT(11, 6, "billingContactProviderForAssistance"))
				}
			}

			function ii(t, n) {
				if (1 & t && (d.j41(0, "bit-container"), d.EFF(1, "\n    "), d.DNE(2, ti, 13, 6, "ng-container", 6), d.EFF(3, "\n    "), d.DNE(4, ni, 14, 8, "ng-template", null, 3, d.C5r), d.EFF(6, "\n  "), d.k0s()), 2 & t) {
					const t = d.sdS(5),
						n = d.XpG(2);
					d.R7$(2), d.Y8G("ngIf", n.organizationIsManagedByConsolidatedBillingMSP)("ngIfElse", t)
				}
			}

			function ei(t, n) {
				if (1 & t && (d.EFF(0, "\n  "), d.DNE(1, ii, 7, 2, "bit-container", 5), d.EFF(2, "\n")), 2 & t) {
					const t = d.XpG();
					d.R7$(), d.Y8G("ngIf", !t.loading)
				}
			}

			function oi(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "button", 38), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(3);
						return d.Njj(n.manageBillingSync())
					})), d.EFF(1), d.nI1(2, "i18n"), d.k0s()
				}
				if (2 & t) {
					const t = d.XpG(3);
					d.R7$(), d.SpI("\n        ", d.bMT(2, 1, t.hasBillingSyncToken ? "viewBillingToken" : "setUpBillingSync"), "\n      ")
				}
			}

			function si(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n    "), d.j41(2, "h2", 42), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n    "), d.j41(6, "p", 44), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n    "), d.j41(10, "div", 53), d.EFF(11, "\n      "), d.j41(12, "button", 38), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(2);
						return d.Njj(n.downloadLicense())
					})), d.EFF(13), d.nI1(14, "i18n"), d.k0s(), d.EFF(15, "\n      "), d.DNE(16, oi, 3, 3, "button", 36), d.EFF(17, "\n    "), d.k0s(), d.EFF(18, "\n  "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(2);
					d.R7$(3), d.SpI("\n      ", d.bMT(4, 4, "selfHostingTitleProper"), "\n    "), d.R7$(4), d.SpI("\n      ", d.bMT(8, 6, "toHostBitwardenOnYourOwnServer"), "\n    "), d.R7$(6), d.SpI("\n        ", d.bMT(14, 8, "downloadLicense"), "\n      "), d.R7$(3), d.Y8G("ngIf", t.canUseBillingSync)
				}
			}

			function Hi(t, n) {
				if (1 & t && (d.EFF(0, "\n  "), d.DNE(1, si, 19, 10, "ng-container", 5), d.EFF(2, "\n")), 2 & t) {
					const t = d.XpG();
					d.R7$(), d.Y8G("ngIf", t.showSelfHost)
				}
			}
			class ri {
				constructor(t, n, i, e, o, s, H, r, a, c) {
					this.apiService = t, this.i18nService = n, this.logService = i, this.organizationService = e, this.organizationApiService = o, this.route = s, this.dialogService = H, this.configService = r, this.toastService = a, this.billingApiService = c, this.lineItems = [], this.showChangePlan = !1, this.showDownloadLicense = !1, this.showAdjustSecretsManager = !1, this.showSecretsManagerSubscribe = !1, this.loading = !0, this.preSelectedProductTier = x.K_.Free, this.showSubscription = !0, this.showSelfHost = !1, this.organizationIsManagedByConsolidatedBillingMSP = !1, this.subscriptionHiddenIcon = Rt, this.teamsStarter = x.K_.TeamsStarter, this.deprecateStripeSourcesAPI$ = this.configService.getFeatureFlag$(u.T.AC2476_DeprecateStripeSourcesAPI), this.destroy$ = new m.B, this.cancelSubscription = () => ln(this, void 0, void 0, (function*() {
						const t = (0, B.GM)(this.dialogService, {
							data: {
								type: "Organization",
								id: this.organizationId
							}
						});
						(yield(0, G.s)(t.closed)) !== B.vD.Closed && (yield this.load())
					})), this.reinstate = () => ln(this, void 0, void 0, (function*() {
						if (this.loading) return;
						if (yield this.dialogService.openSimpleDialog({
								title: {
									key: "reinstateSubscription"
								},
								content: {
									key: "reinstateConfirmation"
								},
								type: "warning"
							})) try {
							yield this.organizationApiService.reinstate(this.organizationId), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("reinstated")
							}), yield this.load()
						} catch (t) {
							this.logService.error(t)
						}
					})), this.adjustStorage = t => () => ln(this, void 0, void 0, (function*() {
						if (yield(0, A._)(this.deprecateStripeSourcesAPI$)) {
							const n = P.A.open(this.dialogService, {
								data: {
									price: this.storageGbPrice,
									cadence: this.billingInterval,
									type: t ? "Add" : "Remove",
									organizationId: this.organizationId
								}
							});
							(yield(0, G.s)(n.closed)) === P.E.Submitted && (yield this.load())
						} else {
							const n = (0, D.Lk)(this.dialogService, {
								data: {
									storageGbPrice: this.storageGbPrice,
									add: t,
									organizationId: this.organizationId,
									interval: this.billingInterval
								}
							});
							(yield(0, G.s)(n.closed)) === D.Ay.Adjusted && (yield this.load())
						}
					})), this.removeSponsorship = () => ln(this, void 0, void 0, (function*() {
						if (yield this.dialogService.openSimpleDialog({
								title: {
									key: "removeSponsorship"
								},
								content: {
									key: "removeSponsorshipConfirmation"
								},
								acceptButtonText: {
									key: "remove"
								},
								type: "warning"
							})) try {
							yield this.apiService.deleteRemoveSponsorship(this.organizationId), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("removeSponsorshipSuccess")
							}), yield this.load()
						} catch (t) {
							this.logService.error(t)
						}
					})), this.discountPrice = (t, n = null) => {
						var i;
						return t - (!(null === (i = this.customerDiscount) || void 0 === i ? void 0 : i.active) || n && this.customerDiscount.appliesTo.length && !this.customerDiscount.appliesTo.includes(n) ? 0 : t * (this.customerDiscount.percentOff / 100))
					}
				}
				ngOnInit() {
					return ln(this, void 0, void 0, (function*() {
						if (this.organizationId = this.route.snapshot.params[ri.ROUTE_PARAM_ORGANIZATION_ID], yield this.load(), this.showUpdatedSubscriptionStatusSection$ = this.configService.getFeatureFlag$(u.T.AC1795_UpdatedSubscriptionStatusSection), this.route.snapshot.queryParams[ri.QUERY_PARAM_UPGRADE]) {
							yield this.changePlan();
							const t = this.route.snapshot.queryParamMap.get("productTierType");
							if (null != t) {
								const n = Number(t);
								Object.values(x.K_).includes(n) && (this.preSelectedProductTier = n)
							}
						}
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				load() {
					return ln(this, void 0, void 0, (function*() {
						var t, n, i, e, o, s, H, r, a;
						this.loading = !0, this.locale = yield(0, A._)(this.i18nService.locale$), this.userOrg = yield this.organizationService.get(this.organizationId);
						const c = !this.userOrg.hasProvider && this.userOrg.isOwner,
							u = this.userOrg.hasReseller && this.userOrg.isOwner,
							l = this.userOrg.hasProvider && this.userOrg.isProviderUser,
							d = yield this.billingApiService.getOrganizationBillingMetadata(this.organizationId);
						this.organizationIsManagedByConsolidatedBillingMSP = this.userOrg.hasProvider && d.isManaged, this.showSubscription = c || u || l && !this.organizationIsManagedByConsolidatedBillingMSP, this.showSelfHost = d.isEligibleForSelfHost, this.showSubscription && (this.sub = yield this.organizationApiService.getSubscription(this.organizationId), this.lineItems = null === (n = null === (t = this.sub) || void 0 === t ? void 0 : t.subscription) || void 0 === n ? void 0 : n.items, this.lineItems && this.lineItems.length && (this.lineItems = this.lineItems.map((t => {
							var n, i;
							const e = t.amount * t.quantity,
								o = (null === (i = null === (n = this.sub.plan) || void 0 === n ? void 0 : n.SecretsManager) || void 0 === i ? void 0 : i.seatPrice) * t.quantity;
							return t.productName = e === o || t.name.includes("Service Accounts") ? "secretsManager" : "passwordManager", t
						})).sort(ai)), 100 == (null === (e = null === (i = this.sub) || void 0 === i ? void 0 : i.customerDiscount) || void 0 === e ? void 0 : e.percentOff) && this.lineItems.reverse());
						const p = yield this.organizationApiService.getApiKeyInformation(this.organizationId);
						this.hasBillingSyncToken = p.data.some((t => t.keyType === h.pC.BillingSync)), this.showSecretsManagerSubscribe = this.userOrg.canEditSubscription && !this.userOrg.hasProvider && (null === (s = null === (o = this.sub) || void 0 === o ? void 0 : o.plan) || void 0 === s ? void 0 : s.SecretsManager) && !this.userOrg.useSecretsManager && !(null === (H = this.subscription) || void 0 === H ? void 0 : H.cancelled) && !this.subscriptionMarkedForCancel, this.showAdjustSecretsManager = this.userOrg.canEditSubscription && this.userOrg.useSecretsManager && null != this.subscription && (null === (a = null === (r = this.sub.plan) || void 0 === r ? void 0 : r.SecretsManager) || void 0 === a ? void 0 : a.hasAdditionalSeatsOption) && !this.subscription.cancelled && !this.subscriptionMarkedForCancel, this.loading = !1
					}))
				}
				get subscription() {
					return null != this.sub ? this.sub.subscription : null
				}
				get subscriptionLineItems() {
					return this.lineItems.map((t => ({
						name: t.name,
						amount: this.discountPrice(t.amount, t.productId),
						quantity: t.quantity,
						interval: t.interval,
						sponsoredSubscriptionItem: t.sponsoredSubscriptionItem,
						addonSubscriptionItem: t.addonSubscriptionItem,
						productName: t.productName,
						productId: t.productId
					})))
				}
				get nextInvoice() {
					return null != this.sub ? this.sub.upcomingInvoice : null
				}
				get customerDiscount() {
					return null != this.sub ? this.sub.customerDiscount : null
				}
				get isExpired() {
					const t = this.nextInvoice;
					return null != t && new Date(t.date).getTime() < Date.now()
				}
				get storagePercentage() {
					return null != this.sub && this.sub.maxStorageGb ? +(this.sub.storageGb / this.sub.maxStorageGb * 100).toFixed(2) : 0
				}
				get billingInterval() {
					return !this.sub.plan.isAnnual ? "month" : "year"
				}
				get storageGbPrice() {
					return this.sub.plan.PasswordManager.additionalStoragePricePerGb
				}
				get seatPrice() {
					return this.discountPrice(this.sub.plan.PasswordManager.seatPrice)
				}
				get seats() {
					return this.sub.seats
				}
				get smOptions() {
					return {
						seatCount: this.sub.smSeats,
						maxAutoscaleSeats: this.sub.maxAutoscaleSmSeats,
						seatPrice: this.sub.plan.SecretsManager.seatPrice,
						maxAutoscaleServiceAccounts: this.sub.maxAutoscaleSmServiceAccounts,
						additionalServiceAccounts: this.sub.smServiceAccounts - this.sub.plan.SecretsManager.baseServiceAccount,
						interval: this.sub.plan.isAnnual ? "year" : "month",
						additionalServiceAccountPrice: this.sub.plan.SecretsManager.additionalPricePerServiceAccount,
						baseServiceAccountCount: this.sub.plan.SecretsManager.baseServiceAccount
					}
				}
				get maxAutoscaleSeats() {
					return this.sub.maxAutoscaleSeats
				}
				get canAdjustSeats() {
					return this.sub.plan.PasswordManager.hasAdditionalSeatsOption
				}
				get isSponsoredSubscription() {
					var t;
					return null === (t = this.sub.subscription) || void 0 === t ? void 0 : t.items.some((t => t.sponsoredSubscriptionItem))
				}
				get subscriptionDesc() {
					if (this.sub.planType === x.OL.Free) return this.i18nService.t("subscriptionFreePlan", this.sub.seats.toString());
					if (this.sub.planType === x.OL.FamiliesAnnually || this.sub.planType === x.OL.FamiliesAnnually2019 || this.sub.planType === x.OL.TeamsStarter2023 || this.sub.planType === x.OL.TeamsStarter) return this.isSponsoredSubscription ? this.i18nService.t("subscriptionSponsoredFamiliesPlan", this.sub.seats.toString()) : this.i18nService.t("subscriptionUpgrade", this.sub.seats.toString());
					if (this.sub.maxAutoscaleSeats === this.sub.seats && null != this.sub.seats) {
						const t = this.sub.plan.isAnnual ? "annualSubscriptionUserSeatsMessage" : "monthlySubscriptionUserSeatsMessage";
						return this.i18nService.t(t + "subscriptionSeatMaxReached", this.sub.seats.toString())
					}
					if (this.userOrg.productTierType === x.K_.TeamsStarter) return this.i18nService.t("subscriptionUserSeatsWithoutAdditionalSeatsOption", 10);
					if (null == this.sub.maxAutoscaleSeats) {
						const t = this.sub.plan.isAnnual ? "annualSubscriptionUserSeatsMessage" : "monthlySubscriptionUserSeatsMessage";
						return this.i18nService.t(t)
					} {
						const t = this.sub.plan.isAnnual ? "annualSubscriptionUserSeatsMessage" : "monthlySubscriptionUserSeatsMessage";
						return this.i18nService.t(t, this.sub.maxAutoscaleSeats.toString())
					}
				}
				get subscriptionMarkedForCancel() {
					return null != this.subscription && !this.subscription.cancelled && this.subscription.cancelAtEndDate
				}
				changePlan() {
					return ln(this, void 0, void 0, (function*() {
						const t = (0, vt.IO)(this.dialogService, {
							data: {
								organizationId: this.organizationId,
								subscription: this.sub,
								productTierType: this.userOrg.productTierType
							}
						});
						(yield(0, G.s)(t.closed)) !== vt.d1.Closed && (yield this.load())
					}))
				}
				isSecretsManagerTrial() {
					var t, n, i, e;
					return null !== (e = null === (i = null === (n = null === (t = this.sub) || void 0 === t ? void 0 : t.subscription) || void 0 === n ? void 0 : n.items) || void 0 === i ? void 0 : i.some((t => {
						var n, i, e;
						return null === (e = null === (i = null === (n = this.sub) || void 0 === n ? void 0 : n.customerDiscount) || void 0 === i ? void 0 : i.appliesTo) || void 0 === e ? void 0 : e.includes(t.productId)
					}))) && void 0 !== e && e
				}
				closeChangePlan() {
					this.showChangePlan = !1
				}
				downloadLicense() {
					return ln(this, void 0, void 0, (function*() {
						kt.open(this.dialogService, {
							data: {
								organizationId: this.organizationId
							}
						})
					}))
				}
				manageBillingSync() {
					return ln(this, void 0, void 0, (function*() {
						const t = St.open(this.dialogService, {
							organizationId: this.organizationId,
							hasBillingToken: this.hasBillingSyncToken
						});
						yield(0, A._)(t.closed), yield this.load()
					}))
				}
				subscriptionAdjusted() {
					return ln(this, void 0, void 0, (function*() {
						yield this.load()
					}))
				}
				calculateTotalAppliedDiscount(t) {
					var n;
					return t / (1 - (null === (n = this.customerDiscount) || void 0 === n ? void 0 : n.percentOff) / 100)
				}
				get showChangePlanButton() {
					return this.sub.plan.productTier !== x.K_.Enterprise && !this.showChangePlan
				}
				get canUseBillingSync() {
					return this.userOrg.productTierType === x.K_.Enterprise
				}
			}

			function ai(t, n) {
				return t.productName == n.productName ? t.addonSubscriptionItem == n.addonSubscriptionItem ? 0 : t.addonSubscriptionItem ? 1 : -1 : t.productName.localeCompare(n.productName)
			}
			ri.QUERY_PARAM_UPGRADE = "upgrade", ri.ROUTE_PARAM_ORGANIZATION_ID = "organizationId", ri.ɵfac = function(t) {
				return new(t || ri)(d.rXU(O.G), d.rXU(L.W), d.rXU(J.K), d.rXU(c.PV), d.rXU(q.X), d.rXU(r.nX), d.rXU(Tt.o), d.rXU($t.w), d.rXU(_.f), d.rXU(Mt.P))
			}, ri.ɵcmp = d.VBU({
				type: ri,
				selectors: [
					["ng-component"]
				],
				decls: 12,
				vars: 3,
				consts: [
					["hideSubscription", ""],
					["setupSelfHost", ""],
					["calculateElse", ""],
					["organizationIsNotManagedByConsolidatedBillingMSP", ""],
					["isOrganizationOwner", ""],
					[4, "ngIf"],
					[4, "ngIf", "ngIfElse"],
					[1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "organizationSubscriptionResponse", "reinstatementRequested", 4, "ngIf"],
					[4, "ngTemplateOutlet"],
					["type", "warning", 3, "title", 4, "ngIf"],
					[1, "tw-grid", "tw-grid-flow-col", "tw-grid-rows-2"],
					["type", "warning", 3, "title"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction", 4, "ngIf"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction"],
					[1, "tw-capitalize"],
					["bitBadge", "", "variant", "warning", 4, "ngIf"],
					[3, "ngClass"],
					["bitBadge", "", "variant", "warning"],
					[3, "reinstatementRequested", "organizationSubscriptionResponse"],
					[1, "tw-flex-col"],
					[1, "tw-block", "tw-border-0", "tw-border-b", "tw-border-solid", "tw-border-secondary-300"],
					["class", "tw-ml-3", "bitBadge", "", "variant", "success", 4, "ngIf"],
					["body", ""],
					["bitBadge", "", "variant", "success", 1, "tw-ml-3"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["bitCell", "", 1, "tw-align-middle", 3, "ngClass"],
					["bitCell", "", 1, "tw-text-right"],
					[1, "tw-flex", "tw-flex-col"],
					["class", "tw-line-through !tw-text-muted", 4, "ngIf"],
					[1, "tw-line-through", "!tw-text-muted"],
					["bitRow", "", 4, "ngIf"],
					["bitCell", ""],
					[1, "tw-mt-5"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "click", 4, "ngIf"],
					[3, "organizationId", "currentPlan", "preSelectedProductTier", "onChanged", "onCanceled", 4, "ngIf"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "click"],
					[3, "onChanged", "onCanceled", "organizationId", "currentPlan", "preSelectedProductTier"],
					[1, "tw-mt-7"],
					[3, "onSubscribe", "plan", "organization", "customerDiscount"],
					["bitTypography", "h2", 1, "tw-mt-7"],
					["bitTypography", "body1", 4, "ngIf"],
					["bitTypography", "body1"],
					["bitButton", "", "buttonType", "danger", "type", "button", 3, "bitAction", 4, "ngIf"],
					["href", "https://bitwarden.com/contact/", "target", "_blank", "rel", "noreferrer"],
					["bitTypography", "h3", 1, "tw-mt-7"],
					[3, "onAdjusted", "seatPrice", "organizationId", "interval", "currentSeatCount", "maxAutoscaleSeats"],
					["bitButton", "", "buttonType", "danger", "type", "button", 3, "bitAction"],
					["bitTypography", "h4", 1, "tw-mt-9"],
					["bgColor", "success", 3, "barWidth"],
					[1, "tw-mt-3"],
					[1, "tw-flex", "tw-space-x-2"],
					["bitTypography", "h3", 1, "tw-mt-9"],
					[3, "onAdjusted", "organizationId", "options"],
					["bitButton", "", "buttonType", "danger", "type", "button", 3, "click", 4, "ngIf"],
					["bitButton", "", "buttonType", "danger", "type", "button", 3, "click"],
					["bitTypography", "h2"],
					["bitTypography", "body1", 4, "ngIf", "ngIfElse"],
					[3, "routerLink"],
					[1, "tw-flex", "tw-flex-col", "tw-items-center", "tw-text-info"],
					[3, "icon"],
					[1, "tw-font-bold"]
				],
				template: function(t, n) {
					if (1 & t && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.DNE(2, Fn, 9, 6, "ng-container", 5), d.EFF(3, "\n\n"), d.DNE(4, Wn, 4, 1, "bit-container", 6), d.EFF(5, "\n"), d.DNE(6, ei, 3, 1, "ng-template", null, 0, d.C5r), d.EFF(8, "\n\n"), d.DNE(9, Hi, 3, 1, "ng-template", null, 1, d.C5r), d.EFF(11, "\n")), 2 & t) {
						const t = d.sdS(7);
						d.R7$(2), d.Y8G("ngIf", n.loading), d.R7$(2), d.Y8G("ngIf", n.showSubscription)("ngIfElse", t)
					}
				},
				dependencies: [r.Wk, E.YU, E.Sq, E.bT, E.T3, yt.p, jt.n, y.Q, nt.G, I.H, Gt.i, At.X, xt.Q, Pt.Y, Dt._, Dt.O, Bt.r, k.f, Vt, Jt, tn, Hn, un, E.Jj, E.oe, E.vh, C.$],
				encapsulation: 2
			});
			var ci = i(20702);
			class ui extends ci.r {
				constructor(t) {
					if (super(t), null == t) return;
					this.billingSyncKey = this.getResponseProperty("BillingSyncKey");
					const n = this.getResponseProperty("LastLicenseSync");
					n && (this.lastLicenseSync = new Date(n))
				}
			}
			class li {
				constructor(t) {
					null != t && (this.planName = t.plan.name, this.expirationWithGracePeriod = null != t.expiration ? new Date(t.expiration) : null, this.expirationWithoutGracePeriod = null != t.expirationWithoutGracePeriod ? new Date(t.expirationWithoutGracePeriod) : null)
				}
				get hasSeparateGracePeriod() {
					return null != this.expirationWithGracePeriod && null != this.expirationWithoutGracePeriod
				}
				get hasExpiration() {
					return null != this.expirationWithGracePeriod
				}
				get isExpiredWithoutGracePeriod() {
					return this.hasSeparateGracePeriod && this.expirationWithoutGracePeriod < new Date
				}
				get isExpiredAndOutsideGracePeriod() {
					return this.hasExpiration && this.expirationWithGracePeriod < new Date
				}
				get isInTrial() {
					return this.expirationWithGracePeriod && this.expirationWithoutGracePeriod && this.expirationWithGracePeriod.getTime() === this.expirationWithoutGracePeriod.getTime()
				}
			}
			var di = i(29377),
				pi = i(83516);
			class hi {
				constructor(t, n, i, e) {
					this.organizationId = t, this.type = n, this.enabled = i, this.config = e
				}
			}
			class Fi {
				constructor(t) {
					this.billingSyncKey = t
				}
			}
			var bi = i(49519),
				gi = i(57083),
				mi = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};
			class Si {
				constructor(t, n, i, e) {
					this.dialogRef = t, this.data = n, this.apiService = i, this.logService = e, this.submit = () => mi(this, void 0, void 0, (function*() {
						var t;
						try {
							const n = new hi(this.entityId, h.eH.CloudBillingSync, !0, new Fi(this.formGroup.value.billingSyncKey)),
								i = null == this.existingConnectionId ? yield this.apiService.createOrganizationConnection(n, ui): yield this.apiService.updateOrganizationConnection(n, ui, this.existingConnectionId);
							this.existingConnectionId = null == i ? void 0 : i.id, this.billingSyncKey = null === (t = null == i ? void 0 : i.config) || void 0 === t ? void 0 : t.billingSyncKey, this.setParentConnection(i), this.dialogRef.close()
						} catch (n) {
							this.logService.error(n)
						}
					})), this.deleteConnection = () => mi(this, void 0, void 0, (function*() {
						yield this.apiService.deleteOrganizationConnection(this.existingConnectionId), this.setParentConnection(null), this.dialogRef.close()
					})), this.entityId = n.entityId, this.existingConnectionId = n.existingConnectionId, this.billingSyncKey = n.billingSyncKey, this.setParentConnection = n.setParentConnection, this.formGroup = new X.gE({
						billingSyncKey: new X.MJ(this.billingSyncKey, X.k0.required)
					})
				}
				static open(t, n) {
					return t.open(Si, {
						data: n
					})
				}
			}
			Si.ɵfac = function(t) {
				return new(t || Si)(d.rXU(U.ce), d.rXU(U.Qs), d.rXU(O.G), d.rXU(J.K))
			}, Si.ɵcmp = d.VBU({
				type: Si,
				selectors: [
					["ng-component"]
				],
				decls: 40,
				vars: 21,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					["bitInput", "", "id", "billingSyncKey", "type", "text", "formControlName", "billingSyncKey", "appAutofocus", "", "appInputVerbatim", ""],
					["bitDialogFooter", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"],
					["bitButton", "", "bitDialogClose", "", "type", "button"],
					["type", "button", "buttonType", "danger", "bitIconButton", "bwi-trash", "bitFormButton", "", 1, "tw-ml-auto", 3, "bitAction", "appA11yTitle"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "form", 0), d.EFF(1, "\n  "), d.j41(2, "bit-dialog"), d.EFF(3, "\n    "), d.j41(4, "span", 1), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n    "), d.j41(8, "div", 2), d.EFF(9, "\n      "), d.j41(10, "p"), d.EFF(11), d.nI1(12, "i18n"), d.k0s(), d.EFF(13, "\n      "), d.j41(14, "bit-form-field"), d.EFF(15, "\n        "), d.j41(16, "bit-label"), d.EFF(17), d.nI1(18, "i18n"), d.k0s(), d.EFF(19, "\n        "), d.nrm(20, "input", 3), d.EFF(21, "\n      "), d.k0s(), d.EFF(22, "\n    "), d.k0s(), d.EFF(23, "\n    "), d.qex(24, 4), d.EFF(25, "\n      "), d.j41(26, "button", 5), d.EFF(27), d.nI1(28, "i18n"), d.k0s(), d.EFF(29, "\n      "), d.j41(30, "button", 6), d.EFF(31), d.nI1(32, "i18n"), d.k0s(), d.EFF(33, "\n      "), d.nrm(34, "button", 7), d.nI1(35, "i18n"), d.EFF(36, "\n    "), d.bVm(), d.EFF(37, "\n  "), d.k0s(), d.EFF(38, "\n"), d.k0s(), d.EFF(39, "\n")), 2 & t && (d.Y8G("formGroup", n.formGroup)("bitSubmit", n.submit), d.R7$(5), d.SpI("\n      ", d.bMT(6, 9, "manageBillingTokenSync"), "\n    "), d.R7$(6), d.JRh(d.bMT(12, 11, "billingSyncKeyDesc")), d.R7$(6), d.SpI("\n          ", d.bMT(18, 13, "billingSyncKey"), "\n        "), d.R7$(10), d.SpI("\n        ", d.bMT(28, 15, "save"), "\n      "), d.R7$(4), d.SpI("\n        ", d.bMT(32, 17, "cancel"), "\n      "), d.R7$(3), d.FS9("appA11yTitle", d.bMT(35, 19, "delete")), d.Y8G("bitAction", n.deleteConnection))
				},
				dependencies: [X.qT, X.me, X.BC, X.cb, X.j4, X.JD, K.C, bi.B, gi.q, yt.p, Q.$, tt.L, y.Q, it.I, et.m, ot.m, st.J, Ht.h, at.s, C.$],
				encapsulation: 2
			});
			var fi = i(24374),
				vi = i(17721),
				Ei = i(13583);
			const yi = Ct.Sm`
<svg width="216" height="231" viewBox="0 0 216 231" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M133.356 85.6618C133.136 85.43 132.871 85.2457 132.577 85.1198C132.283 84.9939 131.968 84.93 131.648 84.9318H87.8482C87.5289 84.93 87.2113 84.9939 86.9175 85.1198C86.6237 85.2457 86.359 85.43 86.14 85.6618C85.9083 85.8808 85.7239 86.1473 85.598 86.4411C85.4721 86.7349 85.4082 87.0506 85.41 87.37V116.57C85.4192 118.793 85.8499 120.994 86.6802 123.056C87.4705 125.091 88.5326 127.011 89.8375 128.761C91.1789 130.515 92.6808 132.137 94.3233 133.612C95.8472 135.01 97.4532 136.318 99.1304 137.528C100.59 138.565 102.123 139.547 103.729 140.474C105.335 141.401 106.469 142.027 107.131 142.354C107.799 142.682 108.339 142.941 108.741 143.113C109.055 143.264 109.4 143.339 109.748 143.332C110.091 143.337 110.431 143.257 110.737 143.102C111.146 142.923 111.679 142.671 112.354 142.343C113.03 142.014 114.179 141.386 115.756 140.463C117.333 139.539 118.884 138.554 120.355 137.517C122.034 136.306 123.642 134.999 125.169 133.601C126.814 132.128 128.316 130.504 129.655 128.75C130.958 126.998 132.021 125.08 132.813 123.045C133.645 120.983 134.075 118.782 134.083 116.559V87.3591C134.085 87.0415 134.021 86.7276 133.895 86.4356C133.769 86.1436 133.586 85.8808 133.356 85.6618ZM127.71 116.836C127.71 127.421 109.748 136.514 109.748 136.514V91.1879H127.71V116.836Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M24.6216 122.3C24.7144 123.4 25.6819 124.217 26.7825 124.125C27.8832 124.032 28.7002 123.064 28.6074 121.964L24.6216 122.3ZM151.501 45.7445C152.57 45.4679 153.213 44.3768 152.936 43.3074L148.429 25.8809C148.152 24.8115 147.061 24.1688 145.992 24.4454C144.922 24.722 144.28 25.8131 144.556 26.8825L148.563 42.3728L133.073 46.3793C132.003 46.6559 131.361 47.747 131.637 48.8164C131.914 49.8858 133.005 50.5285 134.074 50.2519L151.501 45.7445ZM28.6074 121.964C26.6788 99.0874 34.4658 75.5543 51.9661 58.054L49.1377 55.2256C30.7695 73.5938 22.5982 98.2999 24.6216 122.3L28.6074 121.964ZM51.9661 58.054C78.5404 31.4797 119.036 27.3026 149.985 45.5315L152.015 42.0849C119.534 22.9534 77.0327 27.3306 49.1377 55.2256L51.9661 58.054Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M67.4747 185.062C66.4089 185.352 65.7801 186.451 66.0701 187.517L70.797 204.885C71.0871 205.951 72.1862 206.58 73.252 206.29C74.3179 205.999 74.9467 204.9 74.6567 203.834L70.455 188.396L85.8934 184.194C86.9592 183.904 87.5881 182.805 87.298 181.739C87.008 180.674 85.9088 180.045 84.843 180.335L67.4747 185.062ZM192.478 100.283C192.286 99.1952 191.248 98.4697 190.16 98.6625C189.072 98.8552 188.347 99.8931 188.54 100.981L192.478 100.283ZM166.138 172.225C139.813 198.55 99.8271 202.897 68.9932 185.255L67.0068 188.727C99.3669 207.242 141.333 202.687 168.966 175.054L166.138 172.225ZM188.54 100.981C192.985 126.07 185.516 152.847 166.138 172.225L168.966 175.054C189.307 154.713 197.142 126.603 192.478 100.283L188.54 100.981Z" fill="rgb(var(--color-secondary-700))"/>
  <path d="M37.726 108.132C39.283 92.1931 46.1655 76.6765 58.3734 64.4686C75.2893 47.5527 98.5583 40.8618 120.5 44.396" stroke="rgb(var(--color-secondary-700))" stroke-width="2" stroke-linecap="round"/>
  <path d="M180.595 119.132C179.653 136.119 172.693 152.834 159.717 165.811C144.44 181.088 123.982 188.025 104 186.623" stroke="rgb(var(--color-secondary-700))" stroke-width="2" stroke-linecap="round"/>
  <rect x="153.5" y="56.1317" width="49" height="34" rx="2.5" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M153.5 63.6317V63.6317C153.5 66.9454 156.186 69.6317 159.5 69.6317H172.509M202.5 63.6317V63.6317C202.5 66.9454 199.814 69.6317 196.5 69.6317H183.491" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <mask id="path-8-inside-1_1000_26057" fill="white">
    <rect x="172" y="65.6317" width="12" height="9" rx="1.25"/>
  </mask>
  <rect x="172" y="65.6317" width="12" height="9" rx="1.25" stroke="rgb(var(--color-secondary-700))" stroke-width="6" mask="url(#path-8-inside-1_1000_26057)"/>
  <path d="M187 54.6317C187 54.6317 187 53.6317 187 52.6317C187 51.6317 186.053 50.6317 185.105 50.6317C184.158 50.6317 171.842 50.6317 170.895 50.6317C169.947 50.6317 169 51.6317 169 52.6317C169 53.6317 169 54.6317 169 54.6317" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="48" cy="141" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M64.9935 168.5H64.9126H64.8318H64.7512H64.6708H64.5905H64.5104H64.4304H64.3506H64.2709H64.1914H64.1121H64.0329H63.9538H63.8749H63.7962H63.7176H63.6392H63.5609H63.4828H63.4048H63.3269H63.2492H63.1717H63.0943H63.017H62.9399H62.8629H62.7861H62.7094H62.6329H62.5565H62.4802H62.4041H62.3281H62.2523H62.1766H62.101H62.0256H61.9503H61.8751H61.8001H61.7252H61.6504H61.5758H61.5013H61.4269H61.3527H61.2786H61.2046H61.1308H61.0571H60.9835H60.91H60.8367H60.7635H60.6904H60.6175H60.5446H60.4719H60.3993H60.3269H60.2545H60.1823H60.1102H60.0382H59.9664H59.8946H59.823H59.7515H59.6801H59.6088H59.5376H59.4666H59.3956H59.3248H59.2541H59.1835H59.113H59.0426H58.9724H58.9022H58.8322H58.7622H58.6924H58.6226H58.553H58.4835H58.4141H58.3448H58.2756H58.2065H58.1375H58.0686H57.9998H57.9311H57.8625H57.794H57.7256H57.6572H57.589H57.5209H57.4529H57.385H57.3172H57.2494H57.1818H57.1142H57.0468H56.9794H56.9121H56.8449H56.7779H56.7108H56.6439H56.5771H56.5103H56.4437H56.3771H56.3106H56.2442H56.1779H56.1117H56.0455H55.9794H55.9134H55.8475H55.7817H55.7159H55.6502H55.5846H55.5191H55.4537H55.3883H55.323H55.2578H55.1926H55.1275H55.0625H54.9976H54.9328H54.868H54.8032H54.7386H54.674H54.6095H54.5451H54.4807H54.4164H54.3521H54.2879H54.2238H54.1598H54.0958H54.0318H53.968H53.9042H53.8404H53.7767H53.7131H53.6495H53.586H53.5226H53.4592H53.3958H53.3325H53.2693H53.2061H53.143H53.0799H53.0169H52.9539H52.891H52.8281H52.7653H52.7025H52.6398H52.5771H52.5145H52.4519H52.3894H52.3269H52.2645H52.202H52.1397H52.0774H52.0151H51.9528H51.8907H51.8285H51.7664H51.7043H51.6423H51.5803H51.5183H51.4564H51.3945H51.3326H51.2708H51.209H51.1472H51.0855H51.0238H50.9621H50.9005H50.8389H50.7773H50.7157H50.6542H50.5927H50.5312H50.4698H50.4084H50.347H50.2856H50.2243H50.1629H50.1016H50.0404H49.9791H49.9178H49.8566H49.7954H49.7342H49.6731H49.6119H49.5508H49.4896H49.4285H49.3674H49.3064H49.2453H49.1842H49.1232H49.0622H49.0011H48.9401H48.8791H48.8181H48.7571H48.6962H48.6352H48.5742H48.5133H48.4523H48.3913H48.3304H48.2694H48.2085H48.1475H48.0866H48.0257H47.9647H47.9038H47.8428H47.7819H47.7209H47.6599H47.599H47.538H47.477H47.416H47.3551H47.2941H47.2331H47.172H47.111H47.05H46.9889H46.9279H46.8668H46.8057H46.7446H46.6835H46.6224H46.5612H46.5001H46.4389H46.3777H46.3165H46.2553H46.194H46.1328H46.0715H46.0102H45.9489H45.8875H45.8261H45.7647H45.7033H45.6418H45.5804H45.5189H45.4573H45.3958H45.3342H45.2726H45.2109H45.1493H45.0876H45.0258H44.9641H44.9023H44.8404H44.7786H44.7166H44.6547H44.5927H44.5307H44.4687H44.4066H44.3445H44.2823H44.2201H44.1578H44.0956H44.0332H43.9709H43.9084H43.846H43.7835H43.7209H43.6583H43.5957H43.533H43.4703H43.4075H43.3447H43.2818H43.2189H43.1559H43.0929H43.0298H42.9666H42.9034H42.8402H42.7769H42.7135H42.6501H42.5867H42.5231H42.4596H42.3959H42.3322H42.2685H42.2046H42.1408H42.0768H42.0128H41.9487H41.8846H41.8204H41.7562H41.6918H41.6274H41.563H41.4985H41.4339H41.3692H41.3045H41.2397H41.1748H41.1098H41.0448H40.9797H40.9146H40.8493H40.784H40.7186H40.6532H40.5876H40.522H40.4563H40.3905H40.3247H40.2588H40.1928H40.1267H40.0605H39.9942H39.9279H39.8615H39.795H39.7284H39.6617H39.5949H39.5281H39.4611H39.3941H39.327H39.2598H39.1925H39.1251H39.0576H38.9901H38.9224H38.8547H38.7868H38.7189H38.6508H38.5827H38.5145H38.4461H38.3777H38.3092H38.2406H38.1719H38.103H38.0341H37.9651H37.896H37.8267H37.7574H37.688H37.6184H37.5488H37.479H37.4092H37.3392H37.2691H37.199H37.1287H37.0583H36.9878H36.9171H36.8464H36.7755H36.7046H36.6335H36.5623H36.491H36.4196H36.3481H36.2764H36.2046H36.1328H36.0607H35.9886H35.9164H35.844H35.7715H35.6989H35.6262H35.5533H35.4803H35.4072H35.334H35.2606H35.1872H35.1135H35.0398H34.9659H34.8919H34.8178H34.7436H34.6692H34.5947H34.52H34.4452H34.3703H34.2952H34.2201H34.1447H34.0693H33.9937H33.9179H33.8421H33.7661H33.6899H33.6136H33.5372H33.4606H33.3839H33.3071H33.2301H33.1529H33.0756H32.9982H32.9206H32.8429H32.765H32.687H32.6088H32.5305H32.452H32.3734H32.2946H32.2157H32.1367H32.0574H31.978H31.8985H31.8188H31.739H31.659H31.5788H31.4985H31.418H31.3374H31.2566H31.1757H31.0946H31.0133H30.9318H30.8503H30.7685H30.6866H30.6045H30.5222H30.4398H30.3572H30.2745H30.1915C30.0489 168.5 29.9693 168.466 29.9164 168.433C29.8553 168.394 29.7779 168.322 29.702 168.192C29.5361 167.906 29.4608 167.48 29.5197 167.111C30.9235 158.322 38.6474 151.574 47.9925 151.574C57.3375 151.574 65.0615 158.322 66.4652 167.111C66.5751 167.799 66.4037 168.054 66.3124 168.149C66.1888 168.278 65.8364 168.5 64.9935 168.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="20" cy="141" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M36.9935 168.5H36.9126H36.8318H36.7512H36.6708H36.5905H36.5104H36.4304H36.3506H36.2709H36.1914H36.1121H36.0329H35.9538H35.8749H35.7962H35.7176H35.6392H35.5609H35.4828H35.4048H35.3269H35.2492H35.1717H35.0943H35.017H34.9399H34.8629H34.7861H34.7094H34.6329H34.5565H34.4802H34.4041H34.3281H34.2523H34.1766H34.101H34.0256H33.9503H33.8751H33.8001H33.7252H33.6504H33.5758H33.5013H33.4269H33.3527H33.2786H33.2046H33.1308H33.0571H32.9835H32.91H32.8367H32.7635H32.6904H32.6175H32.5446H32.4719H32.3993H32.3269H32.2545H32.1823H32.1102H32.0382H31.9664H31.8946H31.823H31.7515H31.6801H31.6088H31.5376H31.4666H31.3956H31.3248H31.2541H31.1835H31.113H31.0426H30.9724H30.9022H30.8322H30.7622H30.6924H30.6226H30.553H30.4835H30.4141H30.3448H30.2756H30.2065H30.1375H30.0686H29.9998H29.9311H29.8625H29.794H29.7256H29.6572H29.589H29.5209H29.4529H29.385H29.3172H29.2494H29.1818H29.1142H29.0468H28.9794H28.9121H28.8449H28.7779H28.7108H28.6439H28.5771H28.5103H28.4437H28.3771H28.3106H28.2442H28.1779H28.1117H28.0455H27.9794H27.9134H27.8475H27.7817H27.7159H27.6502H27.5846H27.5191H27.4537H27.3883H27.323H27.2578H27.1926H27.1275H27.0625H26.9976H26.9328H26.868H26.8032H26.7386H26.674H26.6095H26.5451H26.4807H26.4164H26.3521H26.2879H26.2238H26.1598H26.0958H26.0318H25.968H25.9042H25.8404H25.7767H25.7131H25.6495H25.586H25.5226H25.4592H25.3958H25.3325H25.2693H25.2061H25.143H25.0799H25.0169H24.9539H24.891H24.8281H24.7653H24.7025H24.6398H24.5771H24.5145H24.4519H24.3894H24.3269H24.2645H24.202H24.1397H24.0774H24.0151H23.9528H23.8907H23.8285H23.7664H23.7043H23.6423H23.5803H23.5183H23.4564H23.3945H23.3326H23.2708H23.209H23.1472H23.0855H23.0238H22.9621H22.9005H22.8389H22.7773H22.7157H22.6542H22.5927H22.5312H22.4698H22.4084H22.347H22.2856H22.2243H22.1629H22.1016H22.0404H21.9791H21.9178H21.8566H21.7954H21.7342H21.6731H21.6119H21.5508H21.4896H21.4285H21.3674H21.3064H21.2453H21.1842H21.1232H21.0622H21.0011H20.9401H20.8791H20.8181H20.7571H20.6962H20.6352H20.5742H20.5133H20.4523H20.3913H20.3304H20.2694H20.2085H20.1475H20.0866H20.0257H19.9647H19.9038H19.8428H19.7819H19.7209H19.6599H19.599H19.538H19.477H19.416H19.3551H19.2941H19.2331H19.172H19.111H19.05H18.9889H18.9279H18.8668H18.8057H18.7446H18.6835H18.6224H18.5612H18.5001H18.4389H18.3777H18.3165H18.2553H18.194H18.1328H18.0715H18.0102H17.9489H17.8875H17.8261H17.7647H17.7033H17.6418H17.5804H17.5189H17.4573H17.3958H17.3342H17.2726H17.2109H17.1493H17.0876H17.0258H16.9641H16.9023H16.8404H16.7786H16.7166H16.6547H16.5927H16.5307H16.4687H16.4066H16.3445H16.2823H16.2201H16.1578H16.0956H16.0332H15.9709H15.9084H15.846H15.7835H15.7209H15.6583H15.5957H15.533H15.4703H15.4075H15.3447H15.2818H15.2189H15.1559H15.0929H15.0298H14.9666H14.9034H14.8402H14.7769H14.7135H14.6501H14.5867H14.5231H14.4596H14.3959H14.3322H14.2685H14.2046H14.1408H14.0768H14.0128H13.9487H13.8846H13.8204H13.7562H13.6918H13.6274H13.563H13.4985H13.4339H13.3692H13.3045H13.2397H13.1748H13.1098H13.0448H12.9797H12.9146H12.8493H12.784H12.7186H12.6532H12.5876H12.522H12.4563H12.3905H12.3247H12.2588H12.1928H12.1267H12.0605H11.9942H11.9279H11.8615H11.795H11.7284H11.6617H11.5949H11.5281H11.4611H11.3941H11.327H11.2598H11.1925H11.1251H11.0576H10.9901H10.9224H10.8547H10.7868H10.7189H10.6508H10.5827H10.5145H10.4461H10.3777H10.3092H10.2406H10.1719H10.103H10.0341H9.9651H9.89597H9.82674H9.75741H9.68798H9.61843H9.54879H9.47904H9.40918H9.33921H9.26914H9.19896H9.12867H9.05826H8.98775H8.91713H8.8464H8.77555H8.70459H8.63351H8.56232H8.49102H8.4196H8.34807H8.27641H8.20464H8.13276H8.06075H7.98862H7.91638H7.84401H7.77152H7.69891H7.62617H7.55332H7.48034H7.40723H7.334H7.26064H7.18716H7.11355H7.03981H6.96594H6.89195H6.81782H6.74356H6.66918H6.59466H6.52H6.44522H6.3703H6.29525H6.22006H6.14474H6.06928H5.99368H5.91795H5.84208H5.76607H5.68992H5.61363H5.5372H5.46062H5.38391H5.30705H5.23005H5.15291H5.07562H4.99819H4.92061H4.84288H4.76501H4.68699H4.60882H4.5305H4.45203H4.37342H4.29465H4.21573H4.13665H4.05743H3.97805H3.89851H3.81882H3.73898H3.65898H3.57882H3.49851H3.41804H3.33741H3.25662H3.17566H3.09455H3.01328H2.93185H2.85025H2.76849H2.68657H2.60448H2.52223H2.43981H2.35722H2.27447H2.19155C2.04893 168.5 1.96927 168.466 1.91645 168.433C1.85532 168.394 1.77792 168.322 1.702 168.192C1.53613 167.906 1.46078 167.48 1.51975 167.111C2.92347 158.322 10.6474 151.574 19.9925 151.574C29.3375 151.574 37.0615 158.322 38.4652 167.111C38.5751 167.799 38.4037 168.054 38.3124 168.149C38.1888 168.278 37.8364 168.5 36.9935 168.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <circle cx="34" cy="154" r="10.5" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
  <path d="M50.9935 181.5H50.9126H50.8318H50.7512H50.6708H50.5905H50.5104H50.4304H50.3506H50.2709H50.1914H50.1121H50.0329H49.9538H49.8749H49.7962H49.7176H49.6392H49.5609H49.4828H49.4048H49.3269H49.2492H49.1717H49.0943H49.017H48.9399H48.8629H48.7861H48.7094H48.6329H48.5565H48.4802H48.4041H48.3281H48.2523H48.1766H48.101H48.0256H47.9503H47.8751H47.8001H47.7252H47.6504H47.5758H47.5013H47.4269H47.3527H47.2786H47.2046H47.1308H47.0571H46.9835H46.91H46.8367H46.7635H46.6904H46.6175H46.5446H46.4719H46.3993H46.3269H46.2545H46.1823H46.1102H46.0382H45.9664H45.8946H45.823H45.7515H45.6801H45.6088H45.5376H45.4666H45.3956H45.3248H45.2541H45.1835H45.113H45.0426H44.9724H44.9022H44.8322H44.7622H44.6924H44.6226H44.553H44.4835H44.4141H44.3448H44.2756H44.2065H44.1375H44.0686H43.9998H43.9311H43.8625H43.794H43.7256H43.6572H43.589H43.5209H43.4529H43.385H43.3172H43.2494H43.1818H43.1142H43.0468H42.9794H42.9121H42.8449H42.7779H42.7108H42.6439H42.5771H42.5103H42.4437H42.3771H42.3106H42.2442H42.1779H42.1117H42.0455H41.9794H41.9134H41.8475H41.7817H41.7159H41.6502H41.5846H41.5191H41.4537H41.3883H41.323H41.2578H41.1926H41.1275H41.0625H40.9976H40.9328H40.868H40.8032H40.7386H40.674H40.6095H40.5451H40.4807H40.4164H40.3521H40.2879H40.2238H40.1598H40.0958H40.0318H39.968H39.9042H39.8404H39.7767H39.7131H39.6495H39.586H39.5226H39.4592H39.3958H39.3325H39.2693H39.2061H39.143H39.0799H39.0169H38.9539H38.891H38.8281H38.7653H38.7025H38.6398H38.5771H38.5145H38.4519H38.3894H38.3269H38.2645H38.202H38.1397H38.0774H38.0151H37.9528H37.8907H37.8285H37.7664H37.7043H37.6423H37.5803H37.5183H37.4564H37.3945H37.3326H37.2708H37.209H37.1472H37.0855H37.0238H36.9621H36.9005H36.8389H36.7773H36.7157H36.6542H36.5927H36.5312H36.4698H36.4084H36.347H36.2856H36.2243H36.1629H36.1016H36.0404H35.9791H35.9178H35.8566H35.7954H35.7342H35.6731H35.6119H35.5508H35.4896H35.4285H35.3674H35.3064H35.2453H35.1842H35.1232H35.0622H35.0011H34.9401H34.8791H34.8181H34.7571H34.6962H34.6352H34.5742H34.5133H34.4523H34.3913H34.3304H34.2694H34.2085H34.1475H34.0866H34.0257H33.9647H33.9038H33.8428H33.7819H33.7209H33.6599H33.599H33.538H33.477H33.416H33.3551H33.2941H33.2331H33.172H33.111H33.05H32.9889H32.9279H32.8668H32.8057H32.7446H32.6835H32.6224H32.5612H32.5001H32.4389H32.3777H32.3165H32.2553H32.194H32.1328H32.0715H32.0102H31.9489H31.8875H31.8261H31.7647H31.7033H31.6418H31.5804H31.5189H31.4573H31.3958H31.3342H31.2726H31.2109H31.1493H31.0876H31.0258H30.9641H30.9023H30.8404H30.7786H30.7166H30.6547H30.5927H30.5307H30.4687H30.4066H30.3445H30.2823H30.2201H30.1578H30.0956H30.0332H29.9709H29.9084H29.846H29.7835H29.7209H29.6583H29.5957H29.533H29.4703H29.4075H29.3447H29.2818H29.2189H29.1559H29.0929H29.0298H28.9666H28.9034H28.8402H28.7769H28.7135H28.6501H28.5867H28.5231H28.4596H28.3959H28.3322H28.2685H28.2046H28.1408H28.0768H28.0128H27.9487H27.8846H27.8204H27.7562H27.6918H27.6274H27.563H27.4985H27.4339H27.3692H27.3045H27.2397H27.1748H27.1098H27.0448H26.9797H26.9146H26.8493H26.784H26.7186H26.6532H26.5876H26.522H26.4563H26.3905H26.3247H26.2588H26.1928H26.1267H26.0605H25.9942H25.9279H25.8615H25.795H25.7284H25.6617H25.5949H25.5281H25.4611H25.3941H25.327H25.2598H25.1925H25.1251H25.0576H24.9901H24.9224H24.8547H24.7868H24.7189H24.6508H24.5827H24.5145H24.4461H24.3777H24.3092H24.2406H24.1719H24.103H24.0341H23.9651H23.896H23.8267H23.7574H23.688H23.6184H23.5488H23.479H23.4092H23.3392H23.2691H23.199H23.1287H23.0583H22.9878H22.9171H22.8464H22.7755H22.7046H22.6335H22.5623H22.491H22.4196H22.3481H22.2764H22.2046H22.1328H22.0607H21.9886H21.9164H21.844H21.7715H21.6989H21.6262H21.5533H21.4803H21.4072H21.334H21.2606H21.1872H21.1135H21.0398H20.9659H20.8919H20.8178H20.7436H20.6692H20.5947H20.52H20.4452H20.3703H20.2952H20.2201H20.1447H20.0693H19.9937H19.9179H19.8421H19.7661H19.6899H19.6136H19.5372H19.4606H19.3839H19.3071H19.2301H19.1529H19.0756H18.9982H18.9206H18.8429H18.765H18.687H18.6088H18.5305H18.452H18.3734H18.2946H18.2157H18.1367H18.0574H17.978H17.8985H17.8188H17.739H17.659H17.5788H17.4985H17.418H17.3374H17.2566H17.1757H17.0946H17.0133H16.9318H16.8503H16.7685H16.6866H16.6045H16.5222H16.4398H16.3572H16.2745H16.1915C16.045 181.5 15.9628 181.465 15.9092 181.432C15.8479 181.394 15.772 181.324 15.6978 181.198C15.5354 180.922 15.4617 180.509 15.5193 180.153C16.9196 171.496 24.6325 164.823 33.9925 164.823C43.3524 164.823 51.0654 171.496 52.4657 180.153C52.574 180.823 52.4052 181.064 52.319 181.152C52.1962 181.279 51.8413 181.5 50.9935 181.5Z" fill="rgb(var(--color-background))" stroke="rgb(var(--color-secondary-700))" stroke-width="3"/>
</svg>
`;
			class Ii {
				constructor() {
					this.subscriptionHiddenIcon = yi
				}
			}
			Ii.ɵfac = function(t) {
				return new(t || Ii)
			}, Ii.ɵcmp = d.VBU({
				type: Ii,
				selectors: [
					["app-org-subscription-hidden"]
				],
				inputs: {
					providerName: "providerName"
				},
				decls: 12,
				vars: 8,
				consts: [
					[1, "tw-flex", "tw-flex-col", "tw-items-center", "tw-text-info"],
					[3, "icon"],
					[1, "tw-font-bold"]
				],
				template: function(t, n) {
					1 & t && (d.j41(0, "div", 0), d.EFF(1, "\n    "), d.nrm(2, "bit-icon", 1), d.EFF(3, "\n    "), d.j41(4, "p", 2), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n    "), d.j41(8, "p"), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n  "), d.k0s()), 2 & t && (d.R7$(2), d.Y8G("icon", n.subscriptionHiddenIcon), d.R7$(3), d.JRh(d.i5U(6, 3, "billingManagedByProvider", n.providerName)), d.R7$(4), d.JRh(d.bMT(10, 6, "billingContactProviderForAssistance")))
				},
				dependencies: [Gt.i, C.$],
				encapsulation: 2
			});
			var wi = function(t, n, i, e) {
				return new(i || (i = Promise))((function(o, s) {
					function H(t) {
						try {
							a(e.next(t))
						} catch (n) {
							s(n)
						}
					}

					function r(t) {
						try {
							a(e.throw(t))
						} catch (n) {
							s(n)
						}
					}

					function a(t) {
						var n;
						t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
							t(n)
						}))).then(H, r)
					}
					a((e = e.apply(t, n || [])).next())
				}))
			};
			const ki = t => ({
				"tw-text-danger": t
			});

			function Ci(t, n) {
				1 & t && (d.qex(0), d.EFF(1, "\n    "), d.nrm(2, "i", 2), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 3), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.bVm()), 2 & t && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function Ri(t, n) {
				if (1 & t && d.nrm(0, "app-org-subscription-hidden", 4), 2 & t) {
					const t = d.XpG();
					d.Y8G("providerName", t.userOrg.providerName)
				}
			}

			function Ti(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n        "), d.j41(2, "dt"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n        "), d.j41(6, "dd"), d.EFF(7), d.nI1(8, "date"), d.nI1(9, "i18n"), d.k0s(), d.EFF(10, "\n      "), d.bVm()), 2 & t) {
					const t = d.XpG(2);
					d.R7$(3), d.JRh(d.bMT(4, 2, "lastLicenseSync")), d.R7$(4), d.SpI("\n          ", null != t.lastLicenseSync ? d.i5U(8, 4, t.lastLicenseSync, "medium") : d.bMT(9, 7, "never"), "\n        ")
				}
			}

			function $i(t, n) {
				if (1 & t && (d.j41(0, "div", 16), d.EFF(1), d.nI1(2, "date"), d.nI1(3, "i18n"), d.k0s()), 2 & t) {
					const t = d.XpG(3);
					d.R7$(), d.SpI("\n          ", d.i5U(3, 4, "selfHostGracePeriodHelp", d.i5U(2, 1, t.subscription.expirationWithGracePeriod, "mediumDate")), "\n        ")
				}
			}

			function Mi(t, n) {
				if (1 & t && (d.j41(0, "dd", 5), d.EFF(1), d.nI1(2, "date"), d.DNE(3, $i, 4, 7, "div", 15), d.EFF(4, "\n      "), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.Y8G("ngClass", d.eq3(6, ki, t.showAsExpired)), d.R7$(), d.SpI("\n        ", d.i5U(2, 3, t.subscription.hasSeparateGracePeriod ? t.subscription.expirationWithoutGracePeriod : t.subscription.expirationWithGracePeriod, "mediumDate"), "\n        "), d.R7$(2), d.Y8G("ngIf", t.subscription.hasSeparateGracePeriod && !t.subscription.isInTrial)
				}
			}

			function ji(t, n) {
				1 & t && (d.j41(0, "dd"), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.JRh(d.bMT(2, 1, "neverExpires")))
			}

			function Gi(t, n) {
				if (1 & t && (d.j41(0, "bit-radio-button", 17), d.EFF(1, "\n          "), d.j41(2, "bit-label"), d.EFF(3), d.nI1(4, "i18n"), d.j41(5, "a", 18), d.EFF(6, "\n              "), d.nrm(7, "i", 7), d.EFF(8, "\n              "), d.j41(9, "span", 3), d.EFF(10), d.nI1(11, "i18n"), d.k0s(), d.EFF(12, "\n            "), d.k0s(), d.EFF(13, "\n          "), d.k0s(), d.EFF(14, "\n          "), d.j41(15, "bit-hint"), d.EFF(16), d.nI1(17, "i18n"), d.k0s(), d.EFF(18, "\n        "), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.Y8G("value", t.licenseOptions.SYNC)("disabled", t.disableLicenseSyncControl), d.R7$(3), d.SpI("", d.bMT(4, 5, "automaticSync"), "\n            "), d.R7$(7), d.JRh(d.bMT(11, 7, "billingSyncHelp")), d.R7$(6), d.SpI("\n            ", d.bMT(17, 9, "automaticBillingSyncDesc"), "\n          ")
				}
			}

			function Ai(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n          "), d.j41(2, "div", 19), d.EFF(3, "\n            "), d.j41(4, "button", 20), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG(2);
						return d.Njj(n.manageBillingSyncSelfHosted())
					})), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n            "), d.j41(8, "button", 21), d.EFF(9), d.nI1(10, "i18n"), d.k0s(), d.EFF(11, "\n          "), d.k0s(), d.EFF(12, "\n        "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(2);
					d.R7$(5), d.SpI("\n              ", d.bMT(6, 4, "manageBillingTokenSync"), "\n            "), d.R7$(3), d.Y8G("bitAction", t.syncLicense)("disabled", !t.billingSyncEnabled), d.R7$(), d.SpI("\n              ", d.bMT(10, 6, "syncLicense"), "\n            ")
				}
			}

			function xi(t, n) {
				if (1 & t && (d.j41(0, "bit-radio-button", 22), d.EFF(1, "\n          "), d.j41(2, "bit-label"), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n          "), d.j41(6, "bit-hint"), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n        "), d.k0s()), 2 & t) {
					const t = d.XpG(2);
					d.Y8G("value", t.licenseOptions.UPLOAD), d.R7$(3), d.JRh(d.bMT(4, 3, "manualUpload")), d.R7$(4), d.SpI("\n            ", d.bMT(8, 5, "manualBillingTokenUploadDesc"), "\n          ")
				}
			}

			function Pi(t, n) {
				1 & t && (d.j41(0, "bit-label", 26), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.SpI("\n            ", d.bMT(2, 1, "licenseAndBillingManagementDesc"), "\n          "))
			}

			function Di(t, n) {
				1 & t && (d.j41(0, "h3", 27), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.SpI("\n            ", d.bMT(2, 1, "uploadLicense"), "\n          "))
			}

			function Bi(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.qex(0), d.EFF(1, "\n          "), d.DNE(2, Pi, 3, 3, "bit-label", 23), d.EFF(3, "\n          "), d.DNE(4, Di, 3, 3, "h3", 24), d.EFF(5, "\n          "), d.j41(6, "app-update-license", 25), d.bIt("onUpdated", (function() {
						d.eBV(t);
						const n = d.XpG(2);
						return d.Njj(n.licenseUploaded())
					})), d.k0s(), d.EFF(7, "\n        "), d.bVm()
				}
				if (2 & t) {
					const t = d.XpG(2);
					d.R7$(2), d.Y8G("ngIf", !t.showAutomaticSyncAndManualUpload), d.R7$(2), d.Y8G("ngIf", t.showAutomaticSyncAndManualUpload), d.R7$(2), d.Y8G("showAutomaticSyncAndManualUpload", t.showAutomaticSyncAndManualUpload)("organizationId", t.organizationId)("showCancel", !1)
				}
			}

			function Ui(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n    "), d.j41(2, "dl"), d.EFF(3, "\n      "), d.j41(4, "dt"), d.EFF(5), d.nI1(6, "i18n"), d.k0s(), d.EFF(7, "\n      "), d.j41(8, "dd"), d.EFF(9), d.k0s(), d.EFF(10, "\n      "), d.DNE(11, Ti, 11, 9, "ng-container", 0), d.EFF(12, "\n      "), d.j41(13, "dt"), d.EFF(14, "\n        "), d.j41(15, "span", 5), d.EFF(16), d.nI1(17, "i18n"), d.k0s(), d.EFF(18, "\n        "), d.j41(19, "a", 6), d.nI1(20, "i18n"), d.EFF(21, "\n          "), d.nrm(22, "i", 7), d.EFF(23, "\n          "), d.j41(24, "span", 3), d.EFF(25), d.nI1(26, "i18n"), d.k0s(), d.EFF(27, "\n        "), d.k0s(), d.EFF(28, "\n      "), d.k0s(), d.EFF(29, "\n      "), d.DNE(30, Mi, 5, 8, "dd", 8), d.EFF(31, "\n      "), d.DNE(32, ji, 3, 3, "dd", 0), d.EFF(33, "\n    "), d.k0s(), d.EFF(34, "\n\n    "), d.j41(35, "a", 9), d.EFF(36), d.nI1(37, "i18n"), d.k0s(), d.EFF(38, "\n    "), d.j41(39, "form", 10), d.EFF(40, "\n      "), d.j41(41, "bit-radio-group", 11), d.EFF(42, "\n        "), d.j41(43, "h2", 12), d.EFF(44), d.nI1(45, "i18n"), d.k0s(), d.EFF(46, "\n        "), d.DNE(47, Gi, 19, 11, "bit-radio-button", 13), d.EFF(48, "\n        "), d.DNE(49, Ai, 13, 8, "ng-container", 0), d.EFF(50, "\n\n        "), d.DNE(51, xi, 10, 7, "bit-radio-button", 14), d.EFF(52, "\n        "), d.DNE(53, Bi, 8, 5, "ng-container", 0), d.EFF(54, "\n      "), d.k0s(), d.EFF(55, "\n    "), d.k0s(), d.EFF(56, "\n  "), d.bVm()), 2 & t) {
					const t = d.XpG();
					d.R7$(5), d.JRh(d.bMT(6, 18, "billingPlan")), d.R7$(4), d.JRh(t.subscription.planName), d.R7$(2), d.Y8G("ngIf", t.billingSyncSetUp), d.R7$(4), d.Y8G("ngClass", d.eq3(30, ki, t.showAsExpired)), d.R7$(), d.JRh(d.bMT(17, 20, "subscriptionExpiration")), d.R7$(3), d.Y8G("appA11yTitle", d.bMT(20, 22, "licensePaidFeaturesHelp")), d.R7$(6), d.JRh(d.bMT(26, 24, "licensePaidFeaturesHelp")), d.R7$(5), d.Y8G("ngIf", t.subscription.hasExpiration), d.R7$(2), d.Y8G("ngIf", !t.subscription.hasExpiration), d.R7$(3), d.FS9("href", t.cloudWebVaultUrl, d.B4B), d.R7$(), d.SpI("\n      ", d.bMT(37, 26, "launchCloudSubscription"), "\n    "), d.R7$(3), d.Y8G("formGroup", t.form), d.R7$(2), d.Y8G("block", !0), d.R7$(3), d.SpI("\n          ", d.bMT(45, 28, "licenseAndBillingManagement"), "\n        "), d.R7$(3), d.Y8G("ngIf", t.showAutomaticSyncAndManualUpload), d.R7$(2), d.Y8G("ngIf", t.updateMethod === t.licenseOptions.SYNC), d.R7$(2), d.Y8G("ngIf", t.showAutomaticSyncAndManualUpload), d.R7$(2), d.Y8G("ngIf", t.updateMethod === t.licenseOptions.UPLOAD)
				}
			}
			var Xi;
			! function(t) {
				t[t.SYNC = 0] = "SYNC", t[t.UPLOAD = 1] = "UPLOAD"
			}(Xi || (Xi = {}));
			class zi {
				set existingBillingSyncConnection(t) {
					this._existingBillingSyncConnection = t, this.form.get("updateMethod").setValue(this.billingSyncEnabled ? Xi.SYNC : Xi.UPLOAD)
				}
				get existingBillingSyncConnection() {
					return this._existingBillingSyncConnection
				}
				get billingSyncEnabled() {
					var t;
					return null === (t = this.existingBillingSyncConnection) || void 0 === t ? void 0 : t.enabled
				}
				get showAsExpired() {
					return this.subscription.hasSeparateGracePeriod ? this.subscription.isExpiredWithoutGracePeriod : this.subscription.isExpiredAndOutsideGracePeriod
				}
				constructor(t, n, i, e, o, s, H, r, a, c) {
					this.messagingService = t, this.apiService = n, this.organizationService = i, this.route = e, this.organizationApiService = o, this.platformUtilsService = s, this.i18nService = H, this.environmentService = r, this.dialogService = a, this.toastService = c, this.licenseOptions = Xi, this.form = new X.gE({
						updateMethod: new X.MJ(Xi.UPLOAD)
					}), this.disableLicenseSyncControl = !1, this.firstLoaded = !1, this.loading = !1, this.destroy$ = new m.B, this.syncLicense = () => wi(this, void 0, void 0, (function*() {
						this.form.get("updateMethod").setValue(Xi.SYNC), yield this.organizationApiService.selfHostedSyncLicense(this.organizationId), this.load(), yield this.loadOrganizationConnection(), this.messagingService.send("updatedOrgLicense"), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("licenseSyncSuccess")
						})
					}))
				}
				ngOnInit() {
					return wi(this, void 0, void 0, (function*() {
						this.cloudWebVaultUrl = yield(0, A._)(this.environmentService.cloudWebVaultUrl$), this.route.params.pipe((0, S.H)((t => wi(this, void 0, void 0, (function*() {
							this.organizationId = t.organizationId, yield this.load(), yield this.loadOrganizationConnection(), this.firstLoaded = !0
						})))), (0, f.Q)(this.destroy$)).subscribe()
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				load() {
					return wi(this, void 0, void 0, (function*() {
						if (!this.loading) {
							if (this.loading = !0, this.userOrg = yield this.organizationService.get(this.organizationId), this.showAutomaticSyncAndManualUpload = this.userOrg.productTierType != x.K_.Families, this.userOrg.canViewSubscription) {
								const t = yield this.organizationApiService.getSubscription(this.organizationId);
								this.subscription = new li(t)
							}
							this.loading = !1
						}
					}))
				}
				loadOrganizationConnection() {
					return wi(this, void 0, void 0, (function*() {
						if (!this.firstLoaded) {
							const t = yield this.apiService.getCloudCommunicationsEnabled();
							this.disableLicenseSyncControl = !t
						}
						this.disableLicenseSyncControl || (this.existingBillingSyncConnection = yield this.apiService.getOrganizationConnection(this.organizationId, h.eH.CloudBillingSync, ui))
					}))
				}
				licenseUploaded() {
					this.load(), this.messagingService.send("updatedOrgLicense")
				}
				manageBillingSyncSelfHosted() {
					var t, n, i;
					Si.open(this.dialogService, {
						entityId: this.organizationId,
						existingConnectionId: null === (t = this.existingBillingSyncConnection) || void 0 === t ? void 0 : t.id,
						billingSyncKey: null === (i = null === (n = this.existingBillingSyncConnection) || void 0 === n ? void 0 : n.config) || void 0 === i ? void 0 : i.billingSyncKey,
						setParentConnection: t => {
							this.existingBillingSyncConnection = t
						}
					})
				}
				get billingSyncSetUp() {
					var t;
					return null != (null === (t = this.existingBillingSyncConnection) || void 0 === t ? void 0 : t.id)
				}
				get updateMethod() {
					return this.form.get("updateMethod").value
				}
				get lastLicenseSync() {
					var t, n;
					return null === (n = null === (t = this.existingBillingSyncConnection) || void 0 === t ? void 0 : t.config) || void 0 === n ? void 0 : n.lastLicenseSync
				}
			}
			zi.ɵfac = function(t) {
				return new(t || zi)(d.rXU(pi.U), d.rXU(O.G), d.rXU(c.PV), d.rXU(r.nX), d.rXU(q.X), d.rXU(V.y), d.rXU(L.W), d.rXU(di.v), d.rXU(Tt.o), d.rXU(_.f))
			}, zi.ɵcmp = d.VBU({
				type: zi,
				selectors: [
					["ng-component"]
				],
				decls: 11,
				vars: 3,
				consts: [
					[4, "ngIf"],
					[3, "providerName", 4, "ngIf"],
					[1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "providerName"],
					[3, "ngClass"],
					["href", "https://bitwarden.com/help/licensing-on-premise/#update-organization-license", "target", "_blank", "rel", "noreferrer", 3, "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-question-circle"],
					[3, "ngClass", 4, "ngIf"],
					["bitButton", "", "buttonType", "secondary", "target", "_blank", "rel", "noreferrer", 3, "href"],
					[3, "formGroup"],
					["formControlName", "updateMethod", 3, "block"],
					[1, "mt-5"],
					["id", "automatic-sync", 3, "value", "disabled", 4, "ngIf"],
					["id", "manual-upload", "class", "tw-mt-6", 3, "value", 4, "ngIf"],
					["class", "tw-text-muted", 4, "ngIf"],
					[1, "tw-text-muted"],
					["id", "automatic-sync", 3, "value", "disabled"],
					["href", "https://bitwarden.com/help/families-for-enterprise-self-hosted/", "target", "_blank", "rel", "noreferrer", "slot", "end", "bitLink", ""],
					[1, "tw-mt-6"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "click"],
					["bitButton", "", "buttonType", "primary", "type", "button", 3, "bitAction", "disabled"],
					["id", "manual-upload", 1, "tw-mt-6", 3, "value"],
					["class", "tw-mb-6 tw-block", 4, "ngIf"],
					["class", "tw-font-semibold tw-mt-6", 4, "ngIf"],
					[3, "onUpdated", "showAutomaticSyncAndManualUpload", "organizationId", "showCancel"],
					[1, "tw-mb-6", "tw-block"],
					[1, "tw-font-semibold", "tw-mt-6"]
				],
				template: function(t, n) {
					1 & t && (d.nrm(0, "app-header"), d.EFF(1, "\n\n"), d.j41(2, "bit-container"), d.EFF(3, "\n  "), d.DNE(4, Ci, 9, 6, "ng-container", 0), d.EFF(5, "\n\n  "), d.DNE(6, Ri, 1, 1, "app-org-subscription-hidden", 1), d.EFF(7, "\n\n  "), d.DNE(8, Ui, 57, 32, "ng-container", 0), d.EFF(9, "\n"), d.k0s(), d.EFF(10, "\n")), 2 & t && (d.R7$(4), d.Y8G("ngIf", !n.firstLoaded && n.loading), d.R7$(2), d.Y8G("ngIf", n.firstLoaded && !n.userOrg.canViewSubscription), d.R7$(2), d.Y8G("ngIf", n.subscription && n.firstLoaded))
				},
				dependencies: [E.YU, E.bT, X.qT, X.BC, X.cb, X.j4, X.JD, K.C, yt.p, y.Q, I.H, ot.m, Yt.s, It.L, fi.d, vi.Y, Ei.m, k.f, Ii, E.vh, C.$],
				encapsulation: 2
			});
			var Ni = i(83731),
				Yi = i(44500),
				Oi = i(36790),
				Vi = i(24930),
				Li = i(56108),
				qi = i(34014),
				Ji = i(54662),
				_i = i(88832),
				Wi = i(17733),
				Ki = i(91326),
				Zi = function(t, n, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function H(t) {
							try {
								a(e.next(t))
							} catch (n) {
								s(n)
							}
						}

						function r(t) {
							try {
								a(e.throw(t))
							} catch (n) {
								s(n)
							}
						}

						function a(t) {
							var n;
							t.done ? o(t.value) : (n = t.value, n instanceof i ? n : new i((function(t) {
								t(n)
							}))).then(H, r)
						}
						a((e = e.apply(t, n || [])).next())
					}))
				};

			function Qi(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "bit-banner", 2), d.EFF(1), d.j41(2, "a", 3), d.bIt("click", (function() {
						d.eBV(t);
						const n = d.XpG();
						return d.Njj(n.changePayment())
					})), d.EFF(3), d.nI1(4, "i18n"), d.k0s(), d.EFF(5, "\n"), d.k0s()
				}
				if (2 & t) {
					const t = d.XpG();
					d.Y8G("showClose", !1), d.R7$(), d.SpI("\n  ", t.freeTrialData.message, "\n  "), d.R7$(2), d.SpI("\n    ", d.bMT(4, 3, "clickHereToAddPaymentMethod"), "\n  ")
				}
			}

			function te(t, n) {
				1 & t && (d.qex(0), d.EFF(1, "\n    "), d.nrm(2, "i", 4), d.nI1(3, "i18n"), d.EFF(4, "\n    "), d.j41(5, "span", 5), d.EFF(6), d.nI1(7, "i18n"), d.k0s(), d.EFF(8, "\n  "), d.bVm()), 2 & t && (d.R7$(2), d.FS9("title", d.bMT(3, 2, "loading")), d.R7$(4), d.JRh(d.bMT(7, 4, "loading")))
			}

			function ne(t, n) {
				1 & t && (d.j41(0, "p", 8), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.JRh(d.bMT(2, 1, "noPaymentMethod")))
			}

			function ie(t, n) {
				if (1 & t) {
					const t = d.RV6();
					d.j41(0, "app-verify-bank-account", 13), d.bIt("submitted", (function() {
						d.eBV(t);
						const n = d.XpG(3);
						return d.Njj(n.load())
					})), d.EFF(1, "\n        "), d.k0s()
				}
				if (2 & t) {
					const t = d.XpG(3);
					d.Y8G("onSubmit", t.verifyBankAccount)
				}
			}

			function ee(t, n) {
				1 & t && (d.j41(0, "span"), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.SpI("- ", d.bMT(2, 1, "unverified"), ""))
			}

			function oe(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n        "), d.DNE(2, ie, 2, 1, "app-verify-bank-account", 11), d.EFF(3, "\n        "), d.j41(4, "p"), d.EFF(5, "\n          "), d.nrm(6, "i", 12), d.EFF(7), d.DNE(8, ee, 3, 3, "span", 1), d.EFF(9, "\n        "), d.k0s(), d.EFF(10, "\n      "), d.bVm()), 2 & t) {
					const t = d.XpG(2);
					d.R7$(2), d.Y8G("ngIf", t.paymentSource.needsVerification), d.R7$(4), d.Y8G("ngClass", t.paymentSourceClasses), d.R7$(), d.SpI("\n          ", t.paymentSource.description, "\n          "), d.R7$(), d.Y8G("ngIf", t.paymentSource.needsVerification)
				}
			}

			function se(t, n) {
				1 & t && (d.j41(0, "p", 8), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & t && (d.R7$(), d.SpI("\n        ", d.bMT(2, 1, "paymentChargedWithUnpaidSubscription"), "\n      "))
			}

			function He(t, n) {
				if (1 & t && (d.qex(0), d.EFF(1, "\n    "), d.EFF(2, "\n    "), d.j41(3, "bit-section"), d.EFF(4, "\n      "), d.j41(5, "h2", 6), d.EFF(6), d.k0s(), d.EFF(7, "\n      "), d.j41(8, "p", 7), d.EFF(9), d.nI1(10, "currency"), d.k0s(), d.EFF(11, "\n      "), d.j41(12, "p", 8), d.EFF(13), d.nI1(14, "i18n"), d.k0s(), d.EFF(15, "\n      "), d.j41(16, "button", 9), d.EFF(17), d.nI1(18, "i18n"), d.k0s(), d.EFF(19, "\n    "), d.k0s(), d.EFF(20, "\n    "), d.EFF(21, "\n    "), d.j41(22, "bit-section"), d.EFF(23, "\n      "), d.j41(24, "h2", 6), d.EFF(25), d.nI1(26, "i18n"), d.k0s(), d.EFF(27, "\n      "), d.DNE(28, ne, 3, 3, "p", 10), d.EFF(29, "\n      "), d.DNE(30, oe, 11, 4, "ng-container", 1), d.EFF(31, "\n      "), d.j41(32, "button", 9), d.EFF(33), d.k0s(), d.EFF(34, "\n      "), d.DNE(35, se, 3, 3, "p", 10), d.EFF(36, "\n    "), d.k0s(), d.EFF(37, "\n  "), d.bVm()), 2 & t) {
					const t = d.XpG();
					d.R7$(6), d.SpI("\n        ", t.accountCreditHeaderText, "\n      "), d.R7$(3), d.JRh(d.i5U(10, 11, t.Math.abs(t.accountCredit), "$")), d.R7$(4), d.JRh(d.bMT(14, 14, "creditAppliedDesc")), d.R7$(3), d.Y8G("bitAction", t.addAccountCredit), d.R7$(), d.SpI("\n        ", d.bMT(18, 16, "addCredit"), "\n      "), d.R7$(8), d.JRh(d.bMT(26, 18, "paymentMethod")), d.R7$(3), d.Y8G("ngIf", !t.paymentSource), d.R7$(2), d.Y8G("ngIf", t.paymentSource), d.R7$(2), d.Y8G("bitAction", t.updatePaymentMethod), d.R7$(), d.SpI("\n        ", t.updatePaymentSourceButtonText, "\n      "), d.R7$(2), d.Y8G("ngIf", t.subscriptionIsUnpaid)
				}
			}
			class re {
				constructor(t, n, i, e, o, s, H, r, a, c, u, l) {
					var d, p;
					this.activatedRoute = t, this.billingApiService = n, this.organizationApiService = i, this.dialogService = e, this.i18nService = o, this.platformUtilsService = s, this.router = H, this.toastService = r, this.location = a, this.trialFlowService = c, this.organizationService = u, this.syncService = l, this.isUnpaid = !1, this.loading = !0, this.Math = Math, this.launchPaymentModalAutomatically = !1, this.addAccountCredit = () => Zi(this, void 0, void 0, (function*() {
						const t = (0, qi.nf)(this.dialogService, {
							data: {
								organizationId: this.organizationId
							}
						});
						(yield(0, G.s)(t.closed)) === qi.as.Added && (yield this.load())
					})), this.load = () => Zi(this, void 0, void 0, (function*() {
						var t;
						this.loading = !0;
						const {
							accountCredit: n,
							paymentSource: i,
							subscriptionStatus: e
						} = yield this.billingApiService.getOrganizationPaymentMethod(this.organizationId);
						if (this.accountCredit = n, this.paymentSource = i, this.subscriptionStatus = e, this.organizationId) {
							const t = this.organizationApiService.getSubscription(this.organizationId),
								n = this.organizationService.get(this.organizationId);
							[this.organizationSubscriptionResponse, this.organization] = yield Promise.all([t, n]), this.freeTrialData = this.trialFlowService.checkForOrgsWithUpcomingPaymentIssues(this.organization, this.organizationSubscriptionResponse, i)
						}
						this.isUnpaid = null !== (t = "unpaid" === this.subscriptionStatus) && void 0 !== t && t, this.launchPaymentModalAutomatically && window.setTimeout((() => Zi(this, void 0, void 0, (function*() {
							yield this.changePayment(), this.launchPaymentModalAutomatically = !1, this.location.replaceState(this.location.path(), "", {})
						}))), 800), this.loading = !1
					})), this.updatePaymentMethod = () => Zi(this, void 0, void 0, (function*() {
						var t, n;
						const i = Ji.N.open(this.dialogService, {
							data: {
								initialPaymentMethod: null === (t = this.paymentSource) || void 0 === t ? void 0 : t.type,
								organizationId: this.organizationId,
								productTier: null === (n = this.organization) || void 0 === n ? void 0 : n.productTierType
							}
						});
						(yield(0, G.s)(i.closed)) === Ji.e.Submitted && (yield this.load())
					})), this.changePayment = () => Zi(this, void 0, void 0, (function*() {
						var t, n;
						const i = Ji.N.open(this.dialogService, {
							data: {
								initialPaymentMethod: null === (t = this.paymentSource) || void 0 === t ? void 0 : t.type,
								organizationId: this.organizationId,
								productTier: null === (n = this.organization) || void 0 === n ? void 0 : n.productTierType
							}
						});
						(yield(0, G.s)(i.closed)) === Ji.e.Submitted && (this.location.replaceState(this.location.path(), "", {}), this.launchPaymentModalAutomatically && !this.organization.enabled && (yield this.syncService.fullSync(!0)), this.launchPaymentModalAutomatically = !1, yield this.load())
					})), this.verifyBankAccount = t => Zi(this, void 0, void 0, (function*() {
						yield this.billingApiService.verifyOrganizationBankAccount(this.organizationId, t), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("verifiedBankAccount")
						})
					})), this.activatedRoute.params.pipe((0, Ni.pQ)(), (0, Yi.n)((({
						organizationId: t
					}) => this.platformUtilsService.isSelfHost() ? (0, Oi.H)(this.router.navigate(["/settings/subscription"])) : (this.organizationId = t, (0, Oi.H)(this.load()))))).subscribe();
					const h = null === (p = null === (d = this.router.getCurrentNavigation()) || void 0 === d ? void 0 : d.extras) || void 0 === p ? void 0 : p.state,
						F = a.getState();
					h && Object.prototype.hasOwnProperty.call(h, "launchPaymentModalAutomatically") ? this.launchPaymentModalAutomatically = h.launchPaymentModalAutomatically : F && Object.prototype.hasOwnProperty.call(F, "launchPaymentModalAutomatically") ? this.launchPaymentModalAutomatically = F.launchPaymentModalAutomatically : this.launchPaymentModalAutomatically = !1
				}
				ngOnDestroy() {
					this.launchPaymentModalAutomatically = !1
				}
				get accountCreditHeaderText() {
					const t = this.accountCredit <= 0 ? "accountBalance" : "accountCredit";
					return this.i18nService.t(t)
				}
				get paymentSourceClasses() {
					if (null == this.paymentSource) return [];
					switch (this.paymentSource.type) {
						case x.eq.Card:
							return ["bwi-credit-card"];
						case x.eq.BankAccount:
							return ["bwi-bank"];
						case x.eq.Check:
							return ["bwi-money"];
						case x.eq.PayPal:
							return ["bwi-paypal text-primary"];
						default:
							return []
					}
				}
				get subscriptionIsUnpaid() {
					return "unpaid" === this.subscriptionStatus
				}
				get updatePaymentSourceButtonText() {
					const t = null == this.paymentSource ? "addPaymentMethod" : "changePaymentMethod";
					return this.i18nService.t(t)
				}
			}
			re.ɵfac = function(t) {
				return new(t || re)(d.rXU(r.nX), d.rXU(Mt.P), d.rXU(q.X), d.rXU(Tt.o), d.rXU(L.W), d.rXU(V.y), d.rXU(r.Ix), d.rXU(_.f), d.rXU(E.aZ), d.rXU(Li.A), d.rXU(c.PV), d.rXU(Vi.H))
			}, re.ɵcmp = d.VBU({
				type: re,
				selectors: [
					["ng-component"]
				],
				decls: 11,
				vars: 3,
				consts: [
					["id", "free-trial-banner", "class", "-tw-m-6 tw-flex tw-flex-col tw-pb-6", "bannerType", "premium", "icon", "bwi-billing", 3, "showClose", 4, "ngIf"],
					[4, "ngIf"],
					["id", "free-trial-banner", "bannerType", "premium", "icon", "bwi-billing", 1, "-tw-m-6", "tw-flex", "tw-flex-col", "tw-pb-6", 3, "showClose"],
					["bitLink", "", "linkType", "secondary", "rel", "noreferrer noopener", 1, "tw-cursor-pointer", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["bitTypography", "h2"],
					[1, "tw-text-lg", "tw-font-bold"],
					["bitTypography", "body1"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "bitAction"],
					["bitTypography", "body1", 4, "ngIf"],
					[3, "onSubmit", "submitted", 4, "ngIf"],
					[1, "bwi", "bwi-fw", 3, "ngClass"],
					[3, "submitted", "onSubmit"]
				],
				template: function(t, n) {
					1 & t && (d.DNE(0, Qi, 6, 5, "bit-banner", 0), d.EFF(1, "\n"), d.nrm(2, "app-header"), d.EFF(3, "\n"), d.j41(4, "bit-container"), d.EFF(5, "\n  "), d.DNE(6, te, 9, 6, "ng-container", 1), d.EFF(7, "\n  "), d.DNE(8, He, 38, 20, "ng-container", 1), d.EFF(9, "\n"), d.k0s(), d.EFF(10, "\n")), 2 & t && (d.Y8G("ngIf", null == n.freeTrialData ? null : n.freeTrialData.shownBanner), d.R7$(6), d.Y8G("ngIf", n.loading), d.R7$(2), d.Y8G("ngIf", !n.loading))
				},
				dependencies: [E.YU, E.bT, yt.p, y.Q, I.H, It.L, _i.n, Bt.r, Wi.Q, k.f, Ki.K, E.oe, C.$],
				encapsulation: 2
			});
			const ae = [{
				path: "",
				canActivate: [(0, l.V)(c.Vc)],
				children: [{
					path: "",
					pathMatch: "full",
					redirectTo: "subscription"
				}, {
					path: "subscription",
					component: g._.isSelfHost() ? zi : ri,
					data: {
						titleId: "subscription"
					}
				}, ...(0, a.w)({
					defaultComponent: H.NB,
					flaggedComponent: re,
					featureFlag: u.T.AC2476_DeprecateStripeSourcesAPI,
					routeOptions: {
						path: "payment-method",
						canActivate: [(0, l.V)((t => t.canEditPaymentMethods)), b],
						data: {
							titleId: "paymentMethod"
						}
					}
				}), {
					path: "history",
					component: j,
					canActivate: [(0, l.V)((t => t.canViewBillingHistory)), b],
					data: {
						titleId: "billingHistory"
					}
				}]
			}];
			class ce {}
			ce.ɵfac = function(t) {
				return new(t || ce)
			}, ce.ɵmod = d.$C({
				type: ce
			}), ce.ɵinj = d.G2t({
				imports: [r.iI.forChild(ae), r.iI]
			});
			class ue {}
			ue.ɵfac = function(t) {
				return new(t || ue)
			}, ue.ɵmod = d.$C({
				type: ue
			}), ue.ɵinj = d.G2t({
				imports: [ce, o.R6, H.rd, Lt.v, s.T, e.H]
			})
		}
	}
]);
//# sourceMappingURL=982.74e3b99c39e6db3490fb.js.map