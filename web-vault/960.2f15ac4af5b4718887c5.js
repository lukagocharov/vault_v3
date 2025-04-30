"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[960], {
		77259: (e, t, i) => {
			i.d(t, {
				V: () => d
			});
			var n = i(56111),
				o = i(89459),
				r = i(67553),
				s = i(50700),
				a = i(39488),
				l = i(69855),
				c = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function d(e) {
				return (t, i) => c(this, void 0, void 0, (function*() {
					const c = (0, n.WQX)(o.Ix),
						d = (0, n.WQX)(r.PV),
						h = (0, n.WQX)(l.f),
						u = (0, n.WQX)(s.W),
						p = (0, n.WQX)(a.H);
					null == (yield p.getLastSync()) && (yield p.fullSync(!1));
					const g = yield d.get(t.params.organizationId);
					if (null == g) return c.createUrlTree(["/"]);
					if (!g.isOwner && !g.enabled) return h.showToast({
						variant: "error",
						title: null,
						message: u.t("organizationIsDisabled")
					}), c.createUrlTree(["/"]);
					if (!(null == e || e(g))) {
						const e = i.root.queryParamMap.get("itemId") || i.root.queryParamMap.get("cipherId");
						return e ? c.createUrlTree(["/vault"], {
							queryParams: {
								itemId: e
							}
						}) : (h.showToast({
							variant: "error",
							title: null,
							message: u.t("accessDenied")
						}), (0, r.OV)(g) ? c.createUrlTree(["/organizations", g.id]) : c.createUrlTree(["/"]))
					}
					return !0
				}))
			}
		},
		95661: (e, t, i) => {
			i.d(t, {
				r: () => a
			});
			var n = i(56111),
				o = i(89459),
				r = i(67553),
				s = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function a(e) {
				return (t, i) => s(this, void 0, void 0, (function*() {
					const s = (0, n.WQX)(o.Ix),
						a = (0, n.WQX)(r.PV),
						l = yield a.get(t.params.organizationId);
					if (null != e) {
						let t = e(l);
						return "string" == typeof t && (t = [t]), s.createUrlTree([i.url, ...t])
					}
					return null != l && (0, r.OV)(l) ? s.createUrlTree(["/organizations", l.id]) : s.createUrlTree(["/"])
				}))
			}
		},
		76876: (e, t, i) => {
			i.d(t, {
				l: () => O
			});
			var n = i(81525),
				o = i(44451),
				r = i(90171),
				s = i(97319),
				a = i(55542),
				l = i(62800),
				c = i(25065),
				d = i(56111),
				h = i(12012),
				u = i(50700),
				p = i(37115),
				g = i(56962),
				m = i(51757),
				F = i(2471),
				f = i(69855),
				v = i(52981),
				b = i(39801),
				E = i(3892),
				I = i(26657),
				w = i(45154),
				y = i(56898),
				S = i(7730),
				C = i(6579),
				k = i(86226),
				T = i(97553),
				R = i(43759),
				$ = i(38410),
				M = i(22466),
				j = i(36572),
				D = i(88016),
				G = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function A(e, t) {
				if (1 & e && (d.j41(0, "small", 16), d.EFF(1), d.k0s()), 2 & e) {
					const e = d.XpG();
					d.R7$(), d.JRh(e.name)
				}
			}

			function x(e, t) {
				1 & e && (d.j41(0, "div"), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & e && (d.R7$(), d.SpI("\n      ", d.bMT(2, 1, "noEventsInList"), "\n    "))
			}

			function U(e, t) {
				1 & e && (d.j41(0, "th", 19), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & e && (d.R7$(), d.JRh(d.bMT(2, 1, "member")))
			}

			function z(e, t) {
				if (1 & e && (d.j41(0, "td", 19), d.EFF(1, "\n            "), d.j41(2, "span", 27), d.EFF(3), d.k0s(), d.EFF(4, "\n          "), d.k0s()), 2 & e) {
					const e = d.XpG().$implicit;
					d.R7$(2), d.FS9("appA11yTitle", e.userEmail), d.R7$(), d.JRh(e.userName)
				}
			}

			function N(e, t) {
				if (1 & e && (d.j41(0, "tr", 24), d.EFF(1, "\n          "), d.j41(2, "td", 19), d.EFF(3), d.nI1(4, "date"), d.k0s(), d.EFF(5, "\n          "), d.j41(6, "td", 19), d.EFF(7, "\n            "), d.nrm(8, "i", 25), d.EFF(9, "\n            "), d.j41(10, "span", 20), d.EFF(11), d.k0s(), d.EFF(12, "\n          "), d.k0s(), d.EFF(13, "\n          "), d.DNE(14, z, 5, 2, "td", 21), d.EFF(15, "\n          "), d.nrm(16, "td", 26), d.EFF(17, "\n        "), d.k0s()), 2 & e) {
					const e = t.$implicit,
						i = d.XpG(3);
					d.R7$(3), d.JRh(d.i5U(4, 11, e.date, "medium")), d.R7$(5), d.ZvI("tw-text-muted bwi bwi-lg ", e.appIcon, ""), d.FCK("title", "", e.appName, ", ", e.ip, ""), d.R7$(3), d.Lme("", e.appName, ", ", e.ip, ""), d.R7$(3), d.Y8G("ngIf", i.showUser), d.R7$(2), d.Y8G("innerHTML", e.message, d.npT)
				}
			}

			function X(e, t) {
				if (1 & e && (d.EFF(0, "\n        "), d.DNE(1, N, 18, 14, "tr", 23), d.nI1(2, "async"), d.EFF(3, "\n      ")), 2 & e) {
					const e = t.$implicit;
					d.R7$(), d.Y8G("ngForOf", d.bMT(2, 1, e))
				}
			}

			function V(e, t) {
				if (1 & e && (d.j41(0, "bit-table", 17), d.EFF(1, "\n      "), d.qex(2, 18), d.EFF(3, "\n        "), d.j41(4, "tr"), d.EFF(5, "\n          "), d.j41(6, "th", 19), d.EFF(7), d.nI1(8, "i18n"), d.k0s(), d.EFF(9, "\n          "), d.j41(10, "th", 19), d.EFF(11, "\n            "), d.j41(12, "span", 20), d.EFF(13), d.nI1(14, "i18n"), d.k0s(), d.EFF(15, "\n          "), d.k0s(), d.EFF(16, "\n          "), d.DNE(17, U, 3, 3, "th", 21), d.EFF(18, "\n          "), d.j41(19, "th", 19), d.EFF(20), d.nI1(21, "i18n"), d.k0s(), d.EFF(22, "\n        "), d.k0s(), d.EFF(23, "\n      "), d.bVm(), d.EFF(24, "\n      "), d.DNE(25, X, 4, 3, "ng-template", 22), d.EFF(26, "\n    "), d.k0s()), 2 & e) {
					const e = d.XpG();
					d.Y8G("dataSource", e.dataSource), d.R7$(7), d.JRh(d.bMT(8, 5, "timestamp")), d.R7$(6), d.JRh(d.bMT(14, 7, "client")), d.R7$(4), d.Y8G("ngIf", e.showUser), d.R7$(3), d.JRh(d.bMT(21, 9, "event"))
				}
			}

			function B(e, t) {
				if (1 & e && (d.j41(0, "button", 28), d.EFF(1), d.nI1(2, "i18n"), d.k0s()), 2 & e) {
					const e = d.XpG();
					d.Y8G("bitAction", e.loadMoreEvents), d.R7$(), d.SpI("\n      ", d.bMT(2, 2, "loadMore"), "\n    ")
				}
			}
			class P {
				get name() {
					return this.params.name
				}
				get showUser() {
					var e;
					return null !== (e = this.params.showUser) && void 0 !== e && e
				}
				constructor(e, t, i, n, o, r, s, l, c, d, h) {
					this.params = e, this.apiService = t, this.i18nService = i, this.eventService = n, this.platformUtilsService = o, this.userNamePipe = r, this.logService = s, this.organizationUserApiService = l, this.formBuilder = c, this.validationService = d, this.toastService = h, this.loading = !0, this.dataSource = new a.s, this.filterFormGroup = this.formBuilder.group({
						start: [""],
						end: [""]
					}), this.orgUsersUserIdMap = new Map, this.orgUsersIdMap = new Map, this.loadMoreEvents = () => G(this, void 0, void 0, (function*() {
						yield this.loadEvents(!1)
					})), this.refreshEvents = () => G(this, void 0, void 0, (function*() {
						yield this.loadEvents(!0)
					}))
				}
				ngOnInit() {
					return G(this, void 0, void 0, (function*() {
						const e = this.eventService.getDefaultDateFilters();
						this.filterFormGroup.setValue({
							start: e[0],
							end: e[1]
						}), yield this.load()
					}))
				}
				load() {
					return G(this, void 0, void 0, (function*() {
						try {
							if (this.showUser) {
								(yield this.organizationUserApiService.getAllMiniUserDetails(this.params.organizationId)).data.forEach((e => {
									const t = this.userNamePipe.transform(e);
									this.orgUsersIdMap.set(e.id, {
										name: t,
										email: e.email
									}), this.orgUsersUserIdMap.set(e.userId, {
										name: t,
										email: e.email
									})
								}))
							}
							yield this.loadEvents(!0)
						} catch (e) {
							this.logService.error(e), this.validationService.showError(e)
						}
						this.loading = !1
					}))
				}
				loadEvents(e) {
					return G(this, void 0, void 0, (function*() {
						let t, i = null;
						try {
							i = this.eventService.formatDateFilters(this.filterFormGroup.value.start, this.filterFormGroup.value.end)
						} catch (o) {
							return void this.toastService.showToast({
								variant: "error",
								title: this.i18nService.t("errorOccurred"),
								message: this.i18nService.t("invalidDateRange")
							})
						}
						t = "user" === this.params.entity && this.params.providerId ? yield this.apiService.getEventsProviderUser(this.params.providerId, this.params.entityId, i[0], i[1], e ? null : this.continuationToken): "user" === this.params.entity ? yield this.apiService.getEventsOrganizationUser(this.params.organizationId, this.params.entityId, i[0], i[1], e ? null : this.continuationToken): yield this.apiService.getEventsCipher(this.params.entityId, i[0], i[1], e ? null : this.continuationToken), this.continuationToken = t.continuationToken;
						const n = yield Promise.all(t.data.map((e => G(this, void 0, void 0, (function*() {
							const t = null == e.actingUserId ? e.userId : e.actingUserId,
								i = yield this.eventService.getEventInfo(e), n = this.showUser && null != t && this.orgUsersUserIdMap.has(t) ? this.orgUsersUserIdMap.get(t) : null;
							return new s.g({
								message: i.message,
								humanReadableMessage: i.humanReadableMessage,
								appIcon: i.appIcon,
								appName: i.appName,
								userId: t,
								userName: null != n ? n.name : this.showUser ? this.i18nService.t("unknown") : null,
								userEmail: null != n ? n.email : this.showUser ? "" : null,
								date: e.date,
								ip: e.ipAddress,
								type: e.type,
								installationId: e.installationId,
								systemUser: e.systemUser,
								serviceAccountId: e.serviceAccountId
							})
						})))));
						!e && null != this.dataSource.data && this.dataSource.data.length > 0 ? this.dataSource.data = this.dataSource.data.concat(n) : this.dataSource.data = n
					}))
				}
			}
			P.ɵfac = function(e) {
				return new(e || P)(d.rXU(n.Qs), d.rXU(h.G), d.rXU(u.W), d.rXU(l.US), d.rXU(p.y), d.rXU(r.b), d.rXU(g.K), d.rXU(o.uB), d.rXU(m.ok), d.rXU(F.B), d.rXU(f.f))
			}, P.ɵcmp = d.VBU({
				type: P,
				selectors: [
					["ng-component"]
				],
				standalone: !0,
				features: [d.aNF],
				decls: 62,
				vars: 28,
				consts: [
					["dialogSize", "large", 3, "loading"],
					["bitDialogTitle", ""],
					["class", "tw-text-muted", 4, "ngIf"],
					["bitDialogContent", ""],
					[3, "formGroup", "bitSubmit"],
					[1, "tw-flex", "tw-items-center", "tw-space-x-2"],
					["bitInput", "", "type", "datetime-local", "id", "start", "formControlName", "start", 3, "placeholder"],
					[1, "tw-mx-2"],
					["bitInput", "", "type", "datetime-local", "id", "end", "formControlName", "end", 3, "placeholder"],
					["type", "submit", "bitButton", "", "buttonType", "primary", "bitFormButton", ""],
					["aria-hidden", "true", 1, "bwi", "bwi-refresh", "bwi-fw"],
					[4, "ngIf"],
					[3, "dataSource", 4, "ngIf"],
					["bitButton", "", "buttonType", "secondary", "block", "", "type", "button", 3, "bitAction", 4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "secondary", "type", "button", "bitDialogClose", ""],
					[1, "tw-text-muted"],
					[3, "dataSource"],
					["header", ""],
					["bitCell", ""],
					[1, "tw-sr-only"],
					["bitCell", "", 4, "ngIf"],
					["body", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["aria-hidden", "true", 3, "title"],
					["bitCell", "", 3, "innerHTML"],
					[3, "appA11yTitle"],
					["bitButton", "", "buttonType", "secondary", "block", "", "type", "button", 3, "bitAction"]
				],
				template: function(e, t) {
					1 & e && (d.j41(0, "bit-dialog", 0), d.EFF(1, "\n  "), d.j41(2, "span", 1), d.EFF(3), d.nI1(4, "i18n"), d.DNE(5, A, 2, 1, "small", 2), d.EFF(6, "\n  "), d.k0s(), d.EFF(7, "\n  "), d.j41(8, "div", 3), d.EFF(9, "\n    "), d.j41(10, "form", 4), d.EFF(11, "\n      "), d.j41(12, "div", 5), d.EFF(13, "\n        "), d.j41(14, "bit-form-field"), d.EFF(15, "\n          "), d.j41(16, "bit-label"), d.EFF(17), d.nI1(18, "i18n"), d.k0s(), d.EFF(19, "\n          "), d.nrm(20, "input", 6), d.nI1(21, "i18n"), d.EFF(22, "\n        "), d.k0s(), d.EFF(23, "\n        "), d.j41(24, "span", 7), d.EFF(25, "-"), d.k0s(), d.EFF(26, "\n        "), d.j41(27, "bit-form-field"), d.EFF(28, "\n          "), d.j41(29, "bit-label"), d.EFF(30), d.nI1(31, "i18n"), d.k0s(), d.EFF(32, "\n          "), d.nrm(33, "input", 8), d.nI1(34, "i18n"), d.EFF(35, "\n        "), d.k0s(), d.EFF(36, "\n        "), d.j41(37, "button", 9), d.EFF(38, "\n          "), d.nrm(39, "i", 10), d.EFF(40), d.nI1(41, "i18n"), d.k0s(), d.EFF(42, "\n      "), d.k0s(), d.EFF(43, "\n    "), d.k0s(), d.EFF(44, "\n    "), d.nrm(45, "hr"), d.EFF(46, "\n    "), d.DNE(47, x, 3, 3, "div", 11), d.EFF(48, "\n    "), d.DNE(49, V, 27, 11, "bit-table", 12), d.EFF(50, "\n    "), d.DNE(51, B, 3, 4, "button", 13), d.EFF(52, "\n  "), d.k0s(), d.EFF(53, "\n  "), d.qex(54, 14), d.EFF(55, "\n    "), d.j41(56, "button", 15), d.EFF(57), d.nI1(58, "i18n"), d.k0s(), d.EFF(59, "\n  "), d.bVm(), d.EFF(60, "\n"), d.k0s(), d.EFF(61, "\n")), 2 & e && (d.Y8G("loading", t.loading), d.R7$(3), d.SpI("\n    ", d.bMT(4, 14, "eventLogs"), "\n    "), d.R7$(2), d.Y8G("ngIf", t.name), d.R7$(5), d.Y8G("formGroup", t.filterFormGroup)("bitSubmit", t.refreshEvents), d.R7$(7), d.JRh(d.bMT(18, 16, "from")), d.R7$(3), d.FS9("placeholder", d.bMT(21, 18, "startDate")), d.R7$(10), d.JRh(d.bMT(31, 20, "to")), d.R7$(3), d.FS9("placeholder", d.bMT(34, 22, "endDate")), d.R7$(7), d.SpI("\n          ", d.bMT(41, 24, "refresh"), "\n        "), d.R7$(7), d.Y8G("ngIf", !t.dataSource.data || !t.dataSource.data.length), d.R7$(2), d.Y8G("ngIf", null == t.dataSource || null == t.dataSource.data ? null : t.dataSource.data.length), d.R7$(2), d.Y8G("ngIf", t.continuationToken), d.R7$(6), d.SpI("\n      ", d.bMT(58, 26, "close"), "\n    "))
				},
				dependencies: [c.G, v.Sq, v.bT, m.qT, m.me, m.BC, m.cb, m.j4, m.JD, b.C, E.p, I.$, w.L, y.Q, S.I, C.m, k.m, T.J, R.h, $.Q, M.Y, j._, j.O, v.Jj, v.vh, D.$],
				encapsulation: 2
			});
			const O = (e, t) => e.open(P, t)
		},
		53960: (e, t, i) => {
			i.r(t), i.d(t, {
				OrganizationModule: () => On
			});
			var n = i(7306),
				o = i(25065),
				r = i(81667),
				s = i(89459),
				a = i(26200),
				l = i(44140),
				c = i(67553),
				d = i(82468),
				h = i(77259),
				u = i(95661),
				p = i(38763),
				g = i(32823),
				m = i(33999),
				F = i(11525),
				f = i(14092),
				v = i(20400),
				b = i(53203),
				E = i(99703),
				I = i(28389),
				w = i(56111),
				y = i(16878),
				S = i(66046),
				C = i(36790),
				k = i(33338),
				T = i(93695),
				R = i(72245),
				$ = i(88565),
				M = i(69194),
				j = i(3204),
				D = i(44500),
				G = i(36359),
				A = i(34040),
				x = i(14803),
				U = i(27442),
				z = i(14928),
				N = i(36006),
				X = i(73276),
				V = i(44451),
				B = i(34530),
				P = i(9477),
				O = i(15623),
				Y = i(83516),
				L = i(78781),
				q = i(24930),
				W = i(36501),
				H = i(23567),
				_ = i(89923),
				J = i(90097),
				Q = i(59525),
				K = i(21659),
				Z = i(76876),
				ee = i(50700);
			class te {
				constructor(e) {
					this.i18nService = e, this.RENEWAL_WARNING_DAYS = 14, this.GRACE_PERIOD_DAYS = 30
				}
				getWarning(e, t) {
					if (!e.hasReseller) return null;
					if (this.shouldShowPastDueWarning(t)) {
						const i = this.getGracePeriodEndDate(t.invoiceDueDate);
						return i ? {
							type: "warning",
							message: this.i18nService.t("resellerPastDueWarningMsg", e.providerName, this.formatDate(i))
						} : null
					}
					if (this.shouldShowInvoiceWarning(t)) {
						const i = t.invoiceCreatedDate,
							n = t.invoiceDueDate;
						return i && n ? {
							type: "info",
							message: this.i18nService.t("resellerOpenInvoiceWarningMgs", e.providerName, this.formatDate(t.invoiceCreatedDate), this.formatDate(t.invoiceDueDate))
						} : null
					}
					if (this.shouldShowRenewalWarning(t)) {
						return t.subPeriodEndDate ? {
							type: "info",
							message: this.i18nService.t("resellerRenewalWarningMsg", e.providerName, this.formatDate(t.subPeriodEndDate))
						} : null
					}
					return null
				}
				shouldShowRenewalWarning(e) {
					if (!e.hasSubscription || !e.subPeriodEndDate) return !1;
					const t = new Date(e.subPeriodEndDate);
					return Math.ceil((t.getTime() - Date.now()) / 864e5) <= this.RENEWAL_WARNING_DAYS
				}
				shouldShowInvoiceWarning(e) {
					if (!e.hasOpenInvoice || !e.invoiceDueDate) return !1;
					return new Date(e.invoiceDueDate) > new Date
				}
				shouldShowPastDueWarning(e) {
					if (!e.hasOpenInvoice || !e.invoiceDueDate) return !1;
					return new Date(e.invoiceDueDate) <= new Date && !e.isSubscriptionUnpaid
				}
				getGracePeriodEndDate(e) {
					if (!e) return null;
					const t = new Date(e);
					return t.setDate(t.getDate() + this.GRACE_PERIOD_DAYS), t
				}
				formatDate(e) {
					return e ? new Date(e).toLocaleDateString("en-US", {
						month: "short",
						day: "2-digit",
						year: "numeric"
					}) : "N/A"
				}
			}
			te.ɵfac = function(e) {
				return new(e || te)(w.KVO(ee.W))
			}, te.ɵprov = w.jDH({
				token: te,
				factory: te.ɵfac,
				providedIn: "root"
			});
			var ie = i(56108),
				ne = i(51122),
				oe = i(85494),
				re = i(24593),
				se = i(17290),
				ae = i(41143),
				le = i(9083),
				ce = i(39738),
				de = i(8144),
				he = i(47911),
				ue = i(30550),
				pe = i(52981),
				ge = i(58625),
				me = (i(84488), i(10436)),
				Fe = i(51661),
				fe = i(90647),
				ve = i(56615),
				be = i(60893),
				Ee = i(42594),
				Ie = i(21274),
				we = i(1601),
				ye = i(13496),
				Se = i(53997),
				Ce = i(82494),
				ke = i(32924),
				Te = i(51757),
				Re = i(39801),
				$e = i(56898),
				Me = i(36288),
				je = i(88016),
				De = i(1576),
				Ge = i(88547),
				Ae = i(20464),
				xe = i(74594),
				Ue = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};
			const ze = () => [],
				Ne = e => ({
					organizationId: e,
					collectionId: null
				}),
				Xe = e => ({
					collectionId: e
				});

			function Ve(e, t) {
				if (1 & e && (w.j41(0, "bit-breadcrumb", 12), w.EFF(1), w.k0s()), 2 & e) {
					const e = t.$implicit;
					w.Y8G("route", w.lJ4(3, ze))("queryParams", w.eq3(4, Xe, e.id)), w.R7$(), w.SpI("\n        ", e.name, "\n      ")
				}
			}

			function Be(e, t) {
				if (1 & e && (w.j41(0, "bit-breadcrumbs", 9), w.EFF(1, "\n    "), w.j41(2, "bit-breadcrumb", 10), w.EFF(3), w.j41(4, "span"), w.EFF(5), w.nI1(6, "i18n"), w.nI1(7, "lowercase"), w.k0s(), w.EFF(8, "\n    "), w.k0s(), w.EFF(9, "\n\n    "), w.qex(10), w.EFF(11, "\n      "), w.DNE(12, Ve, 2, 6, "bit-breadcrumb", 11), w.EFF(13, "\n    "), w.bVm(), w.EFF(14, "\n  "), w.k0s()), 2 & e) {
					const e = w.XpG();
					w.R7$(2), w.Y8G("route", w.lJ4(9, ze))("queryParams", w.eq3(10, Ne, e.organization.id)), w.R7$(), w.SpI("\n      ", e.organization.name, "\n      "), w.R7$(2), w.SpI("\n        ", w.bMT(7, 7, w.bMT(6, 5, "collections")), "\n      "), w.R7$(7), w.Y8G("ngForOf", e.collections)
				}
			}

			function Pe(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.qex(0), w.EFF(1, "\n          "), w.j41(2, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.editCollection(t.CollectionDialogTabType.Info, !1))
					})), w.EFF(3, "\n            "), w.nrm(4, "i", 16), w.EFF(5), w.nI1(6, "i18n"), w.k0s(), w.EFF(7, "\n          "), w.j41(8, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.editCollection(t.CollectionDialogTabType.Access, !1))
					})), w.EFF(9, "\n            "), w.nrm(10, "i", 17), w.EFF(11), w.nI1(12, "i18n"), w.k0s(), w.EFF(13, "\n        "), w.bVm()
				}
				2 & e && (w.R7$(5), w.SpI("\n            ", w.bMT(6, 2, "editInfo"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(12, 4, "access"), "\n          "))
			}

			function Oe(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.qex(0), w.EFF(1, "\n          "), w.j41(2, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.editCollection(t.CollectionDialogTabType.Info, !0))
					})), w.EFF(3, "\n            "), w.nrm(4, "i", 16), w.EFF(5), w.nI1(6, "i18n"), w.k0s(), w.EFF(7, "\n          "), w.j41(8, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.editCollection(t.CollectionDialogTabType.Access, !0))
					})), w.EFF(9, "\n            "), w.nrm(10, "i", 17), w.EFF(11), w.nI1(12, "i18n"), w.k0s(), w.EFF(13, "\n        "), w.bVm()
				}
				2 & e && (w.R7$(5), w.SpI("\n            ", w.bMT(6, 2, "viewInfo"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(12, 4, "viewAccess"), "\n          "))
			}

			function Ye(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.deleteCollection())
					})), w.EFF(1, "\n          "), w.j41(2, "span", 18), w.EFF(3, "\n            "), w.nrm(4, "i", 19), w.EFF(5), w.nI1(6, "i18n"), w.k0s(), w.EFF(7, "\n        "), w.k0s()
				}
				2 & e && (w.R7$(5), w.SpI("\n            ", w.bMT(6, 1, "delete"), "\n          "))
			}

			function Le(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n      "), w.nrm(2, "button", 13), w.EFF(3, "\n      "), w.j41(4, "bit-menu", null, 0), w.EFF(6, "\n        "), w.DNE(7, Pe, 14, 6, "ng-container", 6), w.EFF(8, "\n        "), w.DNE(9, Oe, 14, 6, "ng-container", 6), w.EFF(10, "\n        "), w.DNE(11, Ye, 8, 3, "button", 14), w.EFF(12, "\n      "), w.k0s(), w.EFF(13, "\n    "), w.bVm()), 2 & e) {
					const e = w.sdS(5),
						t = w.XpG();
					w.R7$(2), w.Y8G("bitMenuTriggerFor", e), w.R7$(5), w.Y8G("ngIf", t.canEditCollection), w.R7$(2), w.Y8G("ngIf", !t.canEditCollection && t.canViewCollectionInfo), w.R7$(2), w.Y8G("ngIf", t.canDeleteCollection)
				}
			}

			function qe(e, t) {
				1 & e && (w.j41(0, "small"), w.EFF(1, "\n      "), w.nrm(2, "i", 20), w.nI1(3, "i18n"), w.EFF(4, "\n      "), w.j41(5, "span", 21), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n    "), w.k0s()), 2 & e && (w.R7$(2), w.FS9("title", w.bMT(3, 2, "loading")), w.R7$(4), w.JRh(w.bMT(7, 4, "loading")))
			}

			function We(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-search", 22), w.nI1(1, "i18n"), w.bIt("ngModelChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.Njj(i.onSearchTextChanged(t))
					})), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG();
					w.Y8G("ngModel", e.searchText)("placeholder", w.bMT(1, 2, "searchCollection"))
				}
			}

			function He(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.qex(0), w.EFF(1, "\n            "), w.nrm(2, "bit-menu-divider"), w.EFF(3, "\n            "), w.j41(4, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCollection())
					})), w.EFF(5, "\n              "), w.nrm(6, "i", 34), w.EFF(7), w.nI1(8, "i18n"), w.k0s(), w.EFF(9, "\n          "), w.bVm()
				}
				2 & e && (w.R7$(7), w.SpI("\n              ", w.bMT(8, 1, "collection"), "\n            "))
			}

			function _e(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.qex(0), w.EFF(1, "\n      "), w.j41(2, "div", 25), w.EFF(3, "\n        "), w.j41(4, "button", 26), w.nI1(5, "i18n"), w.EFF(6, "\n          "), w.nrm(7, "i", 27), w.EFF(8), w.nI1(9, "i18n"), w.nrm(10, "i", 28), w.EFF(11, "\n        "), w.k0s(), w.EFF(12, "\n        "), w.j41(13, "bit-menu", 29, 2), w.EFF(15, "\n          "), w.j41(16, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.addCipher(t.CipherType.Login))
					})), w.EFF(17, "\n            "), w.nrm(18, "i", 30), w.EFF(19), w.nI1(20, "i18n"), w.k0s(), w.EFF(21, "\n          "), w.j41(22, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.addCipher(t.CipherType.Card))
					})), w.EFF(23, "\n            "), w.nrm(24, "i", 31), w.EFF(25), w.nI1(26, "i18n"), w.k0s(), w.EFF(27, "\n          "), w.j41(28, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.addCipher(t.CipherType.Identity))
					})), w.EFF(29, "\n            "), w.nrm(30, "i", 32), w.EFF(31), w.nI1(32, "i18n"), w.k0s(), w.EFF(33, "\n          "), w.j41(34, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.addCipher(t.CipherType.SecureNote))
					})), w.EFF(35, "\n            "), w.nrm(36, "i", 33), w.EFF(37), w.nI1(38, "i18n"), w.k0s(), w.EFF(39, "\n          "), w.DNE(40, He, 10, 3, "ng-container", 6), w.EFF(41, "\n        "), w.k0s(), w.EFF(42, "\n      "), w.k0s(), w.EFF(43, "\n    "), w.bVm()
				}
				if (2 & e) {
					const e = w.sdS(14),
						t = w.XpG(2);
					w.R7$(4), w.FS9("appA11yTitle", w.bMT(5, 8, "new")), w.Y8G("bitMenuTriggerFor", e), w.R7$(4), w.SpI("\n          ", w.bMT(9, 10, "new"), ""), w.R7$(11), w.SpI("\n            ", w.bMT(20, 12, "typeLogin"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(26, 14, "typeCard"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(32, 16, "typeIdentity"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(38, 18, "note"), "\n          "), w.R7$(3), w.Y8G("ngIf", t.canCreateCollection)
				}
			}

			function Je(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "div", 25), w.EFF(1, "\n        "), w.j41(2, "button", 26), w.nI1(3, "i18n"), w.EFF(4, "\n          "), w.nrm(5, "i", 27), w.EFF(6), w.nI1(7, "i18n"), w.nrm(8, "i", 28), w.EFF(9, "\n        "), w.k0s(), w.EFF(10, "\n        "), w.j41(11, "bit-menu", 29, 2), w.EFF(13, "\n          "), w.j41(14, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCipher())
					})), w.EFF(15, "\n            "), w.nrm(16, "i", 37), w.EFF(17), w.nI1(18, "i18n"), w.k0s(), w.EFF(19, "\n          "), w.j41(20, "button", 15), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCollection())
					})), w.EFF(21, "\n            "), w.nrm(22, "i", 34), w.EFF(23), w.nI1(24, "i18n"), w.k0s(), w.EFF(25, "\n        "), w.k0s(), w.EFF(26, "\n      "), w.k0s()
				}
				if (2 & e) {
					const e = w.sdS(12);
					w.R7$(2), w.FS9("appA11yTitle", w.bMT(3, 5, "new")), w.Y8G("bitMenuTriggerFor", e), w.R7$(4), w.SpI("\n          ", w.bMT(7, 7, "new"), ""), w.R7$(11), w.SpI("\n            ", w.bMT(18, 9, "item"), "\n          "), w.R7$(6), w.SpI("\n            ", w.bMT(24, 11, "collection"), "\n          ")
				}
			}

			function Qe(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 38), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCipher())
					})), w.EFF(1, "\n        "), w.nrm(2, "i", 39), w.EFF(3), w.nI1(4, "i18n"), w.k0s()
				}
				2 & e && (w.R7$(3), w.SpI("\n        ", w.bMT(4, 1, "newItem"), "\n      "))
			}

			function Ke(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 38), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCollection())
					})), w.EFF(1, "\n        "), w.nrm(2, "i", 39), w.EFF(3), w.nI1(4, "i18n"), w.k0s()
				}
				2 & e && (w.R7$(3), w.SpI("\n        ", w.bMT(4, 1, "newCollection"), "\n      "))
			}

			function Ze(e, t) {
				if (1 & e && (w.EFF(0, "\n      "), w.EFF(1, "\n      "), w.DNE(2, Je, 27, 13, "div", 35), w.EFF(3, "\n\n      "), w.EFF(4, "\n      "), w.DNE(5, Qe, 5, 3, "button", 36), w.EFF(6, "\n\n      "), w.EFF(7, "\n      "), w.DNE(8, Ke, 5, 3, "button", 36), w.EFF(9, "\n    ")), 2 & e) {
					const e = w.XpG(2);
					w.R7$(2), w.Y8G("ngIf", e.canCreateCipher && e.canCreateCollection), w.R7$(3), w.Y8G("ngIf", e.canCreateCipher && !e.canCreateCollection), w.R7$(3), w.Y8G("ngIf", e.canCreateCollection && !e.canCreateCipher)
				}
			}

			function et(e, t) {
				if (1 & e && (w.j41(0, "div", 23), w.EFF(1, "\n    "), w.EFF(2, "\n    "), w.DNE(3, _e, 44, 20, "ng-container", 24), w.EFF(4, "\n\n    "), w.DNE(5, Ze, 10, 3, "ng-template", null, 1, w.C5r), w.EFF(7, "\n  "), w.k0s()), 2 & e) {
					const e = w.sdS(6),
						t = w.XpG();
					w.R7$(3), w.Y8G("ngIf", t.extensionRefreshEnabled && t.canCreateCipher)("ngIfElse", e)
				}
			}
			class tt {
				constructor(e, t, i, n, o, r) {
					this.organizationService = e, this.i18nService = t, this.dialogService = i, this.collectionAdminService = n, this.router = o, this.configService = r, this.All = ue.u, this.Unassigned = V.I_, this.onAddCipher = new w.bkB, this.onAddCollection = new w.bkB, this.onEditCollection = new w.bkB, this.onDeleteCollection = new w.bkB, this.searchTextChanged = new w.bkB, this.CollectionDialogTabType = v._K, this.organizations$ = this.organizationService.organizations$, this.extensionRefreshEnabled = !1, this.CipherType = Fe.gC
				}
				ngOnInit() {
					return Ue(this, void 0, void 0, (function*() {
						this.extensionRefreshEnabled = yield this.configService.getFeatureFlag(d.T.ExtensionRefresh)
					}))
				}
				get title() {
					var e, t;
					const i = this.i18nService.t("collections").toLowerCase();
					return null != this.collection ? this.collection.node.name : this.filter.collectionId === V.I_ ? this.i18nService.t("unassigned") : (null === (e = this.organization) || void 0 === e ? void 0 : e.name) ? `${null===(t=this.organization)||void 0===t?void 0:t.name} ${i}` : this.i18nService.t("collections")
				}
				get icon() {
					return void 0 !== this.filter.collectionId ? "bwi-collection" : ""
				}
				get showBreadcrumbs() {
					return void 0 !== this.filter.collectionId && this.filter.collectionId !== ue.u
				}
				get collections() {
					if (null == this.collection) return [];
					const e = [this.collection];
					for (; null != e[e.length - 1].parent;) e.push(e[e.length - 1].parent);
					return e.slice(1).reverse().map((e => e.node))
				}
				showFreeOrgUpgradeDialog() {
					const e = {
						title: this.i18nService.t("upgradeOrganization"),
						content: this.i18nService.t(this.organization.canEditSubscription ? "freeOrgMaxCollectionReachedManageBilling" : "freeOrgMaxCollectionReachedNoManageBilling", this.organization.maxCollections),
						type: "primary"
					};
					this.organization.canEditSubscription ? e.acceptButtonText = this.i18nService.t("upgrade") : (e.acceptButtonText = this.i18nService.t("ok"), e.cancelButtonText = null);
					const t = this.dialogService.openSimpleDialogRef(e);
					(0, R._)(t.closed).then((e => {
						e && e && this.organization.canEditSubscription && this.router.navigate(["/organizations", this.organization.id, "billing", "subscription"], {
							queryParams: {
								upgrade: !0
							}
						})
					}))
				}
				get canEditCollection() {
					return void 0 !== this.collection && this.collection.node.canEdit(this.organization)
				}
				addCipher(e) {
					this.onAddCipher.emit(e)
				}
				addCollection() {
					return Ue(this, void 0, void 0, (function*() {
						if (this.organization.productTierType === me.K_.Free) {
							if ((yield this.collectionAdminService.getAll(this.organization.id)).length === this.organization.maxCollections) return void this.showFreeOrgUpgradeDialog()
						}
						this.onAddCollection.emit()
					}))
				}
				editCollection(e, t) {
					return Ue(this, void 0, void 0, (function*() {
						this.onEditCollection.emit({
							tab: e,
							readonly: t
						})
					}))
				}
				get canDeleteCollection() {
					return void 0 !== this.collection && this.collection.node.canDelete(this.organization)
				}
				get canViewCollectionInfo() {
					return this.collection.node.canViewCollectionInfo(this.organization)
				}
				get canCreateCollection() {
					var e;
					return null === (e = this.organization) || void 0 === e ? void 0 : e.canCreateNewCollections
				}
				get canCreateCipher() {
					var e, t;
					return !((null === (e = this.organization) || void 0 === e ? void 0 : e.isProviderUser) && !(null === (t = this.organization) || void 0 === t ? void 0 : t.isMember))
				}
				deleteCollection() {
					this.onDeleteCollection.emit()
				}
				onSearchTextChanged(e) {
					this.searchText = e, this.searchTextChanged.emit(e)
				}
			}
			tt.ɵfac = function(e) {
				return new(e || tt)(w.rXU(c.PV), w.rXU(ee.W), w.rXU(Ie.o), w.rXU(V.vE), w.rXU(s.Ix), w.rXU(we.w))
			}, tt.ɵcmp = w.VBU({
				type: tt,
				selectors: [
					["app-org-vault-header"]
				],
				inputs: {
					loading: "loading",
					filter: "filter",
					organization: "organization",
					collection: "collection",
					searchText: "searchText"
				},
				outputs: {
					onAddCipher: "onAddCipher",
					onAddCollection: "onAddCollection",
					onEditCollection: "onEditCollection",
					onDeleteCollection: "onDeleteCollection",
					searchTextChanged: "searchTextChanged"
				},
				standalone: !0,
				features: [w.aNF],
				decls: 16,
				vars: 7,
				consts: [
					["editCollectionMenu", ""],
					["nonRefresh", ""],
					["addOptions", ""],
					[3, "title", "icon"],
					["slot", "breadcrumbs", 4, "ngIf"],
					["slot", "title-suffix"],
					[4, "ngIf"],
					["class", "tw-grow", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"],
					["class", "tw-shrink-0", 4, "ngIf"],
					["slot", "breadcrumbs"],
					["queryParamsHandling", "merge", 3, "route", "queryParams"],
					["icon", "bwi-collection", "queryParamsHandling", "merge", 3, "route", "queryParams", 4, "ngFor", "ngForOf"],
					["icon", "bwi-collection", "queryParamsHandling", "merge", 3, "route", "queryParams"],
					["bitIconButton", "bwi-angle-down", "size", "small", "type", "button", "aria-haspopup", "true", 3, "bitMenuTriggerFor"],
					["type", "button", "bitMenuItem", "", 3, "click", 4, "ngIf"],
					["type", "button", "bitMenuItem", "", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-pencil-square"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-users"],
					[1, "tw-text-danger"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-trash"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "tw-grow", 3, "ngModelChange", "ngModel", "placeholder"],
					[1, "tw-shrink-0"],
					[4, "ngIf", "ngIfElse"],
					["appListDropdown", ""],
					["bitButton", "", "buttonType", "primary", "type", "button", "id", "newItemDropdown", 3, "bitMenuTriggerFor", "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus-f"],
					["aria-hidden", "true", 1, "bwi", "tw-ml-2"],
					["aria-labelledby", "newItemDropdown"],
					["slot", "start", "aria-hidden", "true", 1, "bwi", "bwi-globe"],
					["slot", "start", "aria-hidden", "true", 1, "bwi", "bwi-credit-card"],
					["slot", "start", "aria-hidden", "true", 1, "bwi", "bwi-id-card"],
					["slot", "start", "aria-hidden", "true", 1, "bwi", "bwi-sticky-note"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-collection"],
					["appListDropdown", "", 4, "ngIf"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "click", 4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-globe"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus", "bwi-fw"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "app-header", 3), w.EFF(1, "\n  "), w.DNE(2, Be, 15, 12, "bit-breadcrumbs", 4), w.EFF(3, "\n\n  "), w.qex(4, 5), w.EFF(5, "\n    "), w.DNE(6, Le, 14, 4, "ng-container", 6), w.EFF(7, "\n    "), w.DNE(8, qe, 9, 6, "small", 6), w.EFF(9, "\n  "), w.bVm(), w.EFF(10, "\n\n  "), w.DNE(11, We, 2, 4, "bit-search", 7), w.EFF(12, "\n\n  "), w.DNE(13, et, 8, 2, "div", 8), w.EFF(14, "\n"), w.k0s(), w.EFF(15, "\n")), 2 & e && (w.Y8G("title", t.title)("icon", t.icon), w.R7$(2), w.Y8G("ngIf", t.showBreadcrumbs), w.R7$(4), w.Y8G("ngIf", null != t.collection && (t.canEditCollection || t.canDeleteCollection || t.canViewCollectionInfo)), w.R7$(2), w.Y8G("ngIf", t.loading), w.R7$(3), w.Y8G("ngIf", (null == t.organization ? null : t.organization.isProviderUser) && !(null != t.organization && t.organization.isMember)), w.R7$(2), w.Y8G("ngIf", "trash" !== t.filter.type && t.filter.collectionId !== t.Unassigned && t.organization))
				},
				dependencies: [pe.MD, pe.Sq, pe.bT, pe.GH, fe.M, ye.Z, Se.O, Ce.w, ke.M, o.G, Te.BC, Te.vS, Re.C, $e.Q, Me.s, je.$, ve.V, De.m, Ge.D, Ee.G, Ae.f, be.t, xe.S, ge.p],
				encapsulation: 2
			});
			var it, nt = i(7400),
				ot = i(73589),
				rt = i(81525),
				st = i(38766),
				at = i(37115),
				lt = i(26657),
				ct = i(45154),
				dt = i(7730),
				ht = i(6579),
				ut = i(43184),
				pt = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function gt(e, t) {
				if (1 & e && (w.nrm(0, "bit-access-selector", 10), w.nI1(1, "i18n"), w.nI1(2, "i18n"), w.nI1(3, "i18n"), w.nI1(4, "i18n")), 2 & e) {
					const e = w.XpG();
					w.Y8G("permissionMode", e.PermissionMode.Edit)("items", e.accessItems)("columnHeader", w.bMT(1, 6, "groupSlashMemberColumnHeader"))("selectorLabelText", w.bMT(2, 8, "selectGroupsAndMembers"))("selectorHelpText", w.bMT(3, 10, "userPermissionOverrideHelperDesc"))("emptySelectionText", w.bMT(4, 12, "noMembersOrGroupsAdded"))
				}
			}

			function mt(e, t) {
				if (1 & e && (w.nrm(0, "bit-access-selector", 11), w.nI1(1, "i18n"), w.nI1(2, "i18n"), w.nI1(3, "i18n")), 2 & e) {
					const e = w.XpG();
					w.Y8G("permissionMode", e.PermissionMode.Edit)("items", e.accessItems)("columnHeader", w.bMT(1, 5, "memberColumnHeader"))("selectorLabelText", w.bMT(2, 7, "selectMembers"))("emptySelectionText", w.bMT(3, 9, "noMembersAdded"))
				}
			}! function(e) {
				e.Saved = "saved", e.Canceled = "canceled"
			}(it || (it = {}));
			class Ft {
				constructor(e, t, i, n, o, r, s, a, l) {
					this.params = e, this.dialogRef = t, this.formBuilder = i, this.organizationService = n, this.groupService = o, this.organizationUserApiService = r, this.platformUtilsService = s, this.i18nService = a, this.collectionAdminService = l, this.PermissionMode = st.ZC, this.formGroup = this.formBuilder.group({
						access: [
							[]
						]
					}), this.loading = !0, this.accessItems = [], this.destroy$ = new S.B, this.submit = () => pt(this, void 0, void 0, (function*() {
						const e = this.formGroup.controls.access.value.filter((e => e.type === st.Uv.Member)).map(st.yo),
							t = this.formGroup.controls.access.value.filter((e => e.type === st.Uv.Group)).map(st.yo);
						yield this.collectionAdminService.bulkAssignAccess(this.organization.id, this.params.collections.map((e => e.id)), e, t), this.platformUtilsService.showToast("success", null, this.i18nService.t("editedCollections")), this.dialogRef.close(it.Saved)
					})), this.numCollections = this.params.collections.length;
					const c = this.organizationService.get$(this.params.organizationId),
						d = c.pipe((0, D.n)((e => e.useGroups ? this.groupService.getAll(e.id) : (0, T.of)([]))));
					(0, k.z)([c, d, this.organizationUserApiService.getAllMiniUserDetails(this.params.organizationId)]).pipe((0, x.Q)(this.destroy$)).subscribe((([e, t, i]) => {
						this.organization = e, this.accessItems = [].concat(t.map(st.NU), i.data.map(st.df)), this.loading = !1
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				static open(e, t) {
					return e.open(Ft, t)
				}
			}
			Ft.ɵfac = function(e) {
				return new(e || Ft)(w.rXU(rt.Qs), w.rXU(rt.ce), w.rXU(Te.ok), w.rXU(c.PV), w.rXU(r.nK), w.rXU(V.uB), w.rXU(at.y), w.rXU(ee.W), w.rXU(V.vE))
			}, Ft.ɵcmp = w.VBU({
				type: Ft,
				selectors: [
					["app-bulk-collections-dialog"]
				],
				standalone: !0,
				features: [w.aNF],
				decls: 32,
				vars: 18,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["dialogSize", "large", 3, "loading"],
					["bitDialogTitle", ""],
					[1, "tw-text-sm", "tw-normal-case", "tw-text-muted"],
					["bitDialogContent", ""],
					["formControlName", "access", 3, "permissionMode", "items", "columnHeader", "selectorLabelText", "selectorHelpText", "emptySelectionText", 4, "ngIf"],
					["formControlName", "access", 3, "permissionMode", "items", "columnHeader", "selectorLabelText", "emptySelectionText", 4, "ngIf"],
					["bitDialogFooter", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", "bitDialogClose", ""],
					["formControlName", "access", 3, "permissionMode", "items", "columnHeader", "selectorLabelText", "selectorHelpText", "emptySelectionText"],
					["formControlName", "access", 3, "permissionMode", "items", "columnHeader", "selectorLabelText", "emptySelectionText"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "form", 0), w.EFF(1, "\n  "), w.j41(2, "bit-dialog", 1), w.EFF(3, "\n    "), w.j41(4, "span", 2), w.EFF(5), w.nI1(6, "i18n"), w.j41(7, "span", 3), w.EFF(8), w.nI1(9, "i18n"), w.k0s(), w.EFF(10, "\n    "), w.k0s(), w.EFF(11, "\n\n    "), w.j41(12, "div", 4), w.EFF(13, "\n      "), w.DNE(14, gt, 5, 14, "bit-access-selector", 5), w.EFF(15, "\n      "), w.DNE(16, mt, 4, 11, "bit-access-selector", 6), w.EFF(17, "\n    "), w.k0s(), w.EFF(18, "\n\n    "), w.qex(19, 7), w.EFF(20, "\n      "), w.j41(21, "button", 8), w.EFF(22), w.nI1(23, "i18n"), w.k0s(), w.EFF(24, "\n      "), w.j41(25, "button", 9), w.EFF(26), w.nI1(27, "i18n"), w.k0s(), w.EFF(28, "\n    "), w.bVm(), w.EFF(29, "\n  "), w.k0s(), w.EFF(30, "\n"), w.k0s(), w.EFF(31, "\n")), 2 & e && (w.Y8G("formGroup", t.formGroup)("bitSubmit", t.submit), w.R7$(2), w.Y8G("loading", t.loading), w.R7$(3), w.SpI("\n      ", w.bMT(6, 10, "assignCollectionAccess"), "\n      "), w.R7$(3), w.Lme("\n        ", t.numCollections, " ", w.bMT(9, 12, 1 == t.numCollections ? "collection" : "collections"), "\n      "), w.R7$(6), w.Y8G("ngIf", null == t.organization ? null : t.organization.useGroups), w.R7$(2), w.Y8G("ngIf", !(null != t.organization && t.organization.useGroups)), w.R7$(6), w.SpI("\n        ", w.bMT(23, 14, "save"), "\n      "), w.R7$(4), w.SpI("\n        ", w.bMT(27, 16, "cancel"), "\n      "))
				},
				dependencies: [o.G, pe.bT, Te.qT, Te.BC, Te.cb, Te.j4, Te.JD, lt.$, ct.L, $e.Q, dt.I, ht.m, je.$, st.mH, ut.t],
				encapsulation: 2
			});
			var ft = i(21457),
				vt = i(29029),
				bt = i(22690);

			function Et(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 3), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG();
						return w.Njj(t.viewCollectionClicked.emit({
							readonly: !1,
							tab: t.collectionDialogTabType.Info
						}))
					})), w.EFF(1, "\n      "), w.nrm(2, "i", 4), w.EFF(3), w.nI1(4, "i18n"), w.k0s()
				}
				2 & e && (w.R7$(3), w.SpI(" ", w.bMT(4, 1, "editCollection"), "\n    "))
			}

			function It(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 3), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG();
						return w.Njj(t.viewCollectionClicked.emit({
							readonly: !0,
							tab: t.collectionDialogTabType.Access
						}))
					})), w.EFF(1, "\n      "), w.nrm(2, "i", 5), w.EFF(3), w.nI1(4, "i18n"), w.k0s()
				}
				2 & e && (w.R7$(3), w.SpI(" ", w.bMT(4, 1, "viewAccess"), "\n    "))
			}
			const wt = ft.Sm`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="10 -10 120 140" fill="none">
  <rect class="tw-stroke-secondary-600" width="134" height="86" x="3" y="31.485" stroke-width="6" rx="11"/>
  <path class="tw-fill-secondary-600" d="M123.987 20.15H14.779a3.114 3.114 0 0 1-2.083-.95 3.036 3.036 0 0 1 0-4.208 3.125 3.125 0 0 1 2.083-.951h109.208c.792.043 1.536.38 2.083.95a3.035 3.035 0 0 1 0 4.208 3.115 3.115 0 0 1-2.083.95Zm-6.649-14.041h-95.91a3.114 3.114 0 0 1-2.082-.95 3.036 3.036 0 0 1-.848-2.105c0-.782.306-1.538.848-2.104A3.125 3.125 0 0 1 21.43 0h95.909c.791.043 1.535.38 2.082.95.547.57.849 1.322.849 2.104a3.05 3.05 0 0 1-.849 2.104 3.115 3.115 0 0 1-2.082.95ZM95.132 74.407A42.317 42.317 0 0 0 83.59 65.43l8.799-8.657a1.59 1.59 0 0 0 .004-2.27 1.641 1.641 0 0 0-2.298-.004l-9.64 9.479a28.017 28.017 0 0 0-10.483-2.13c-14.323 0-24.814 12.342-25.298 12.89a2.431 2.431 0 0 0-.675 1.64c-.01.612.215 1.203.626 1.66a43.981 43.981 0 0 0 11.873 9.485l-8.806 8.658a1.601 1.601 0 0 0-.499 1.138 1.602 1.602 0 0 0 1.008 1.5 1.651 1.651 0 0 0 1.255-.009c.199-.085.379-.205.528-.359l9.634-9.443a27.16 27.16 0 0 0 10.359 2.158c14.323 0 24.753-12.086 25.23-12.63a2.983 2.983 0 0 0-.078-4.128h.002ZM49.204 77.82a1.82 1.82 0 0 1-.43-.6 1.767 1.767 0 0 1-.152-.72 1.778 1.778 0 0 1 .582-1.32c3.857-3.564 11.782-9.686 20.77-9.676 2.564.037 5.105.508 7.508 1.395l-3.291 3.235a7.793 7.793 0 0 0-5.02-1.226 7.746 7.746 0 0 0-4.676 2.18 7.528 7.528 0 0 0-1 9.563l-4.199 4.143a43.135 43.135 0 0 1-10.092-6.974Zm26.059-1.318a5.19 5.19 0 0 1-1.557 3.68 5.326 5.326 0 0 1-3.733 1.521c-.82-.005-1.63-.2-2.359-.57l7.067-6.952c.377.718.575 1.513.582 2.321Zm-10.58 0a5.136 5.136 0 0 1 .673-2.555 5.204 5.204 0 0 1 1.862-1.897 5.302 5.302 0 0 1 5.172-.146l-7.096 6.977a5.06 5.06 0 0 1-.61-2.379Zm26.053 1.331c-3.857 3.56-11.779 9.677-20.763 9.677a22.723 22.723 0 0 1-7.454-1.369l3.292-3.226a7.793 7.793 0 0 0 4.995 1.192 7.734 7.734 0 0 0 4.642-2.176 7.524 7.524 0 0 0 1.033-9.506l4.224-4.168a43.258 43.258 0 0 1 10.02 6.945 1.788 1.788 0 0 1 .585 1.313 1.788 1.788 0 0 1-.577 1.318h.003Z"/>
</svg>`;
			class yt {
				constructor() {
					this.icon = wt, this.collectionDialogTabType = v._K, this.canEditCollection = !1, this.canViewCollectionInfo = !1, this.viewCollectionClicked = new w.bkB
				}
			}
			yt.ɵfac = function(e) {
				return new(e || yt)
			}, yt.ɵcmp = w.VBU({
				type: yt,
				selectors: [
					["collection-access-restricted"]
				],
				inputs: {
					canEditCollection: "canEditCollection",
					canViewCollectionInfo: "canViewCollectionInfo"
				},
				outputs: {
					viewCollectionClicked: "viewCollectionClicked"
				},
				standalone: !0,
				features: [w.aNF],
				decls: 10,
				vars: 6,
				consts: [
					[1, "tw-mt-2", "tw-block", 3, "icon"],
					["slot", "title", 1, "tw-mt-4", "tw-block"],
					["slot", "button", "bitButton", "", "buttonType", "secondary", "type", "button", 3, "click", 4, "ngIf"],
					["slot", "button", "bitButton", "", "buttonType", "secondary", "type", "button", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-pencil-square"],
					["aria-hidden", "true", 1, "bwi", "bwi-users"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "bit-no-items", 0), w.EFF(1, "\n    "), w.j41(2, "span", 1), w.EFF(3), w.nI1(4, "i18n"), w.k0s(), w.EFF(5, "\n    "), w.DNE(6, Et, 5, 3, "button", 2), w.EFF(7, "\n    "), w.DNE(8, It, 5, 3, "button", 2), w.EFF(9, "\n  "), w.k0s()), 2 & e && (w.Y8G("icon", t.icon), w.R7$(3), w.JRh(w.bMT(4, 4, "youDoNotHavePermissions")), w.R7$(3), w.Y8G("ngIf", t.canEditCollection), w.R7$(2), w.Y8G("ngIf", !t.canEditCollection && t.canViewCollectionInfo))
				},
				dependencies: [o.G, pe.bT, $e.Q, je.$, vt.t, Q.s, bt.D],
				encapsulation: 2
			});
			var St = i(12012),
				Ct = i(18499),
				kt = i(52759),
				Tt = i(5556),
				Rt = i(50451),
				$t = i(23293),
				Mt = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};
			class jt {
				constructor() {
					this.policyService = (0, w.WQX)(Ct.m), this.organizationService = (0, w.WQX)(c.PV), this.routedVaultFilterService = (0, w.WQX)(de.B), this.collectionAdminService = (0, w.WQX)(V.vE), this.cipherService = (0, w.WQX)(Tt.p), this.apiService = (0, w.WQX)(St.G), this.allowPersonalOwnership$ = this.policyService.policyAppliesToActiveUser$(kt.tt.PersonalOwnership).pipe((0, j.T)((e => !e))), this.organizationId$ = this.routedVaultFilterService.filter$.pipe((0, j.T)((e => e.organizationId)), (0, M.p)((e => void 0 !== e))), this.allOrganizations$ = this.organizationService.organizations$.pipe((0, j.T)((e => e.filter((e => e.isMember && e.enabled && e.status === kt.Zx.Confirmed))))), this.organization$ = (0, k.z)([this.allOrganizations$, this.organizationId$]).pipe((0, j.T)((([e, t]) => e.find((e => e.id === t))))), this.allCollections$ = this.organization$.pipe((0, D.n)((e => Mt(this, void 0, void 0, (function*() {
						return yield this.collectionAdminService.getAll(e.id)
					})))))
				}
				buildConfig(e, t, i) {
					return Mt(this, void 0, void 0, (function*() {
						var n, o, r;
						const [s, a, l, c] = yield(0, R._)((0, k.z)([this.organization$, this.allowPersonalOwnership$, this.allOrganizations$, this.allCollections$])), d = "clone" === e ? l : [s], h = "clone" === e && a, u = yield this.getCipher(t, s);
						return {
							mode: e,
							cipherType: null !== (o = null !== (n = null == u ? void 0 : u.type) && void 0 !== n ? n : i) && void 0 !== o ? o : Fe.gC.Login,
							admin: null !== (r = s.canEditAllCiphers) && void 0 !== r && r,
							allowPersonalOwnership: h,
							originalCipher: u,
							collections: c,
							organizations: d,
							folders: [],
							hideIndividualVaultFields: !0,
							isAdminConsole: !0
						}
					}))
				}
				getCipher(e, t) {
					return Mt(this, void 0, void 0, (function*() {
						if (null == e) return null;
						const i = yield this.cipherService.get(e);
						return t.canEditAllCiphers || null == i ? yield this.getCipherFromAdminApi(e): i
					}))
				}
				getCipherFromAdminApi(e) {
					return Mt(this, void 0, void 0, (function*() {
						const t = yield this.apiService.getCipherAdmin(e);
						t.edit = !0, t.viewPassword = !0;
						const i = new Rt.A(t);
						return new $t.o(i)
					}))
				}
			}
			jt.ɵfac = function(e) {
				return new(e || jt)
			}, jt.ɵprov = w.jDH({
				token: jt,
				factory: jt.ɵfac
			});
			var Dt = i(91240),
				Gt = i(18990),
				At = i(72737),
				xt = i(95637),
				Ut = i(31408),
				zt = i(74526),
				Nt = i(35500),
				Xt = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};
			class Vt extends Ut.u {
				constructor(e, t, i, n, o, r, s, a) {
					super(e, t, i, n, o, r, s, a), this.destroy$ = new S.B, this._collections = new At.m(1), this.filteredCollections$ = this._collections.asObservable(), this.collectionTree$ = this.filteredCollections$.pipe((0, j.T)((e => this.buildCollectionTree(e))))
				}
				reloadCollections(e) {
					return Xt(this, void 0, void 0, (function*() {
						this._collections.next(e)
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}
			Vt.ɵfac = function(e) {
				return new(e || Vt)(w.KVO(c.PV), w.KVO(zt.k), w.KVO(Tt.p), w.KVO(Ct.m), w.KVO(ee.W), w.KVO(xt.v2), w.KVO(V.YD), w.KVO(Nt.Di))
			}, Vt.ɵprov = w.jDH({
				token: Vt,
				factory: Vt.ɵfac
			});
			class Bt {}
			Bt.ɵfac = function(e) {
				return new(e || Bt)
			}, Bt.ɵmod = w.$C({
				type: Bt
			}), Bt.ɵinj = w.G2t({
				providers: [{
					provide: Dt.u,
					useClass: Vt
				}],
				imports: [Gt.m, be.t]
			});
			var Pt = i(69855),
				Ot = i(52396),
				Yt = i(79816),
				Lt = i(56962),
				qt = i(81582),
				Wt = i(63098),
				Ht = i(11224),
				_t = i(48180),
				Jt = i(58605),
				Qt = i(57621),
				Kt = i(49519),
				Zt = i(49492),
				ei = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function ti(e, t) {
				1 & e && (w.j41(0, "div", 3), w.EFF(1, "\n    "), w.nrm(2, "i", 4), w.EFF(3, "\n  "), w.k0s())
			}

			function ii(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n        "), w.j41(2, "div", 12), w.EFF(3, "\n          "), w.j41(4, "app-filter-section", 13), w.EFF(5, " "), w.k0s(), w.EFF(6, "\n        "), w.k0s(), w.EFF(7, "\n      "), w.bVm()), 2 & e) {
					const e = t.$implicit,
						i = w.XpG(2);
					w.R7$(4), w.Y8G("activeFilter", i.activeFilter)("section", e)
				}
			}

			function ni(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "div"), w.EFF(1, "\n    "), w.j41(2, "div", 5), w.EFF(3), w.nI1(4, "i18n"), w.j41(5, "a", 6), w.nI1(6, "i18n"), w.EFF(7, "\n        "), w.nrm(8, "i", 7), w.EFF(9, "\n      "), w.k0s(), w.EFF(10, "\n    "), w.k0s(), w.EFF(11, "\n    "), w.j41(12, "div", 8), w.EFF(13, "\n      "), w.j41(14, "div", 9), w.EFF(15, "\n        "), w.j41(16, "bit-search", 10), w.nI1(17, "i18n"), w.mxI("ngModelChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.DH7(i.searchText, t) || (i.searchText = t), w.Njj(t)
					})), w.bIt("ngModelChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.Njj(i.onSearchTextChanged(t))
					})), w.k0s(), w.EFF(18, "\n      "), w.k0s(), w.EFF(19, "\n      "), w.DNE(20, ii, 8, 2, "ng-container", 11), w.EFF(21, "\n    "), w.k0s(), w.EFF(22, "\n  "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG();
					w.R7$(3), w.SpI("\n      ", w.bMT(4, 5, "filters"), "\n      "), w.R7$(2), w.FS9("appA11yTitle", w.bMT(6, 7, "learnMoreAboutSearchingYourVault")), w.R7$(11), w.FS9("placeholder", w.bMT(17, 9, e.searchPlaceholder)), w.R50("ngModel", e.searchText), w.R7$(4), w.Y8G("ngForOf", e.filtersList)
				}
			}
			class oi extends Qt.C {
				set organization(e) {
					e && e !== this._organization && (this._organization = e, this.vaultFilterService.setOrganizationFilter(this._organization))
				}
				constructor(e, t, i, n, o, r, s) {
					super(e, t, i, n, o, r, s), this.vaultFilterService = e, this.policyService = t, this.i18nService = i, this.platformUtilsService = n, this.billingApiService = o, this.dialogService = r, this.configService = s
				}
				ngOnInit() {
					return ei(this, void 0, void 0, (function*() {
						this.filters = yield this.buildAllFilters(), this.activeFilter.selectedCipherTypeNode || (this.activeFilter.resetFilter(), this.activeFilter.selectedCollectionNode = yield this.getDefaultFilter()), this.isLoaded = !0
					}))
				}
				ngOnChanges(e) {
					return ei(this, void 0, void 0, (function*() {
						e.organization && (this.filters = yield this.buildAllFilters())
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				removeCollapsibleCollection() {
					return ei(this, void 0, void 0, (function*() {
						const e = yield(0, R._)(this.vaultFilterService.collapsedFilterNodes$);
						e.delete("AllCollections"), yield this.vaultFilterService.setCollapsedFilterNodes(e)
					}))
				}
				addCollectionFilter() {
					return ei(this, void 0, void 0, (function*() {
						this.removeCollapsibleCollection();
						return {
							data$: this.vaultFilterService.buildTypeTree({
								id: "AllCollections",
								name: "collections",
								type: "all",
								icon: "bwi-collection"
							}, [{
								id: "AllCollections",
								name: "Collections",
								type: "all",
								icon: "bwi-collection"
							}]),
							header: {
								showHeader: !1,
								isSelectable: !0
							},
							action: this.applyCollectionFilter
						}
					}))
				}
				buildAllFilters() {
					return ei(this, void 0, void 0, (function*() {
						const e = {};
						return e.typeFilter = yield this.addTypeFilter(["favorites"]), e.collectionFilter = yield this.addCollectionFilter(), e.trashFilter = yield this.addTrashFilter(), e
					}))
				}
				getDefaultFilter() {
					return ei(this, void 0, void 0, (function*() {
						var e;
						return yield(0, R._)(null === (e = this.filters) || void 0 === e ? void 0 : e.collectionFilter.data$)
					}))
				}
			}
			oi.ɵfac = function(e) {
				return new(e || oi)(w.rXU(Dt.u), w.rXU(Ct.m), w.rXU(ee.W), w.rXU(at.y), w.rXU(_t.P), w.rXU(Ie.o), w.rXU(we.w))
			}, oi.ɵcmp = w.VBU({
				type: oi,
				selectors: [
					["app-organization-vault-filter"]
				],
				inputs: {
					organization: "organization"
				},
				features: [w.Vt3, w.OA$],
				decls: 7,
				vars: 2,
				consts: [
					[1, "card", "vault-filters"],
					["class", "container loading-spinner", 4, "ngIf"],
					[4, "ngIf"],
					[1, "container", "loading-spinner"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "bwi-3x"],
					[1, "card-header", "d-flex"],
					["href", "https://bitwarden.com/help/searching-vault/", "target", "_blank", "rel", "noreferrer", 1, "ml-auto", 3, "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-question-circle"],
					[1, "card-body"],
					[1, "tw-mb-4"],
					["id", "search", "autocomplete", "off", "appAutofocus", "", 3, "ngModelChange", "placeholder", "ngModel"],
					[4, "ngFor", "ngForOf"],
					[1, "filter"],
					[3, "activeFilter", "section"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "div", 0), w.EFF(1, "\n  "), w.DNE(2, ti, 4, 0, "div", 1), w.EFF(3, "\n  "), w.DNE(4, ni, 23, 11, "div", 2), w.EFF(5, "\n"), w.k0s(), w.EFF(6, "\n")), 2 & e && (w.R7$(2), w.Y8G("ngIf", !t.isLoaded), w.R7$(2), w.Y8G("ngIf", t.isLoaded))
				},
				dependencies: [pe.Sq, pe.bT, Te.BC, Te.vS, Re.C, Kt.B, Zt.H, xe.S, je.$],
				encapsulation: 2
			});
			var ri = i(85523),
				si = i(44432),
				ai = i(59032),
				li = i(12694),
				ci = i(16496),
				di = i(91326),
				hi = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};
			const ui = ["attachments"],
				pi = ["cipherAddEdit"],
				gi = ["collectionsModal"],
				mi = e => [e],
				Fi = () => [];

			function fi(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-banner", 12), w.EFF(1), w.j41(2, "a", 13), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.navigateToPaymentMethod())
					})), w.EFF(3), w.nI1(4, "i18n"), w.k0s(), w.EFF(5, "\n  "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG().ngIf;
					w.Y8G("showClose", !1), w.R7$(), w.SpI("\n    ", e.message, "\n    "), w.R7$(2), w.SpI("\n      ", w.bMT(4, 3, "clickHereToAddPaymentMethod"), "\n    ")
				}
			}

			function vi(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n  "), w.DNE(2, fi, 6, 5, "bit-banner", 11), w.EFF(3, "\n"), w.bVm()), 2 & e) {
					const e = t.ngIf,
						i = w.XpG();
					w.R7$(2), w.Y8G("ngIf", !i.refreshing && e.shownBanner)
				}
			}

			function bi(e, t) {
				if (1 & e && (w.j41(0, "bit-banner", 15), w.EFF(1), w.k0s()), 2 & e) {
					const e = w.XpG().ngIf;
					w.Y8G("showClose", !1), w.R7$(), w.SpI("\n    ", null == e ? null : e.message, "\n  ")
				}
			}

			function Ei(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n  "), w.DNE(2, bi, 2, 2, "bit-banner", 14), w.EFF(3, "\n"), w.bVm()), 2 & e) {
					const e = w.XpG();
					w.R7$(2), w.Y8G("ngIf", !e.refreshing)
				}
			}

			function Ii(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "div", 16), w.EFF(1, "\n    "), w.j41(2, "div", 17), w.EFF(3, "\n      "), w.j41(4, "div", 18), w.EFF(5, "\n        "), w.j41(6, "div", 19), w.EFF(7, "\n          "), w.j41(8, "app-organization-vault-filter", 20), w.nI1(9, "async"), w.bIt("searchTextChanged", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.Njj(i.filterSearchText(t))
					})), w.k0s(), w.EFF(10, "\n        "), w.k0s(), w.EFF(11, "\n      "), w.k0s(), w.EFF(12, "\n    "), w.k0s(), w.EFF(13, "\n  "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG();
					w.R7$(8), w.Y8G("organization", e.organization)("activeFilter", e.activeFilter)("searchText", w.bMT(9, 3, e.currentSearchText$))
				}
			}

			function wi(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-toggle-group", 21), w.nI1(1, "async"), w.nI1(2, "i18n"), w.bIt("selectedChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.Njj(i.addAccessToggle(t))
					})), w.EFF(3, "\n      "), w.j41(4, "bit-toggle", 22), w.EFF(5), w.nI1(6, "i18n"), w.k0s(), w.EFF(7, "\n\n      "), w.j41(8, "bit-toggle", 22), w.EFF(9), w.nI1(10, "i18n"), w.k0s(), w.EFF(11, "\n    "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG();
					w.Y8G("selected", w.bMT(1, 6, e.addAccessStatus$)), w.BMQ("aria-label", w.bMT(2, 8, "addAccessFilter")), w.R7$(4), w.Y8G("value", 0), w.R7$(), w.SpI("\n        ", w.bMT(6, 10, "all"), "\n      "), w.R7$(3), w.Y8G("value", 1), w.R7$(), w.SpI("\n        ", w.bMT(10, 12, "addAccess"), "\n      ")
				}
			}

			function yi(e, t) {
				if (1 & e && (w.j41(0, "bit-callout", 23), w.EFF(1), w.k0s()), 2 & e) {
					const e = w.XpG();
					w.R7$(), w.SpI("\n      ", e.trashCleanupWarning, "\n    ")
				}
			}

			function Si(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "button", 27), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(3);
						return w.Njj(t.addCipher())
					})), w.EFF(1, "\n          "), w.nrm(2, "i", 28), w.EFF(3), w.nI1(4, "i18n"), w.k0s()
				}
				2 & e && (w.R7$(3), w.SpI(" ", w.bMT(4, 1, "newItem"), "\n        "))
			}

			function Ci(e, t) {
				if (1 & e && (w.j41(0, "bit-no-items"), w.EFF(1, "\n        "), w.j41(2, "span", 25), w.EFF(3), w.nI1(4, "i18n"), w.k0s(), w.EFF(5, "\n        "), w.DNE(6, Si, 5, 3, "button", 26), w.EFF(7, "\n      "), w.k0s()), 2 & e) {
					const e = w.XpG(2);
					w.R7$(3), w.JRh(w.bMT(4, 2, "noItemsInList")), w.R7$(3), w.Y8G("ngIf", "trash" !== e.filter.type && e.filter.collectionId !== e.Unassigned && (null == e.selectedCollection || null == e.selectedCollection.node ? null : e.selectedCollection.node.canEditItems(e.organization)))
				}
			}

			function ki(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "collection-access-restricted", 29), w.bIt("viewCollectionClicked", (function(t) {
						w.eBV(e);
						const i = w.XpG(2);
						return w.Njj(i.editCollection(i.selectedCollection.node, t.tab, t.readonly))
					})), w.EFF(1, "\n      "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG(2);
					w.Y8G("canEditCollection", null == e.selectedCollection || null == e.selectedCollection.node ? null : e.selectedCollection.node.canEdit(e.organization))("canViewCollectionInfo", null == e.selectedCollection || null == e.selectedCollection.node ? null : e.selectedCollection.node.canViewCollectionInfo(e.organization))
				}
			}

			function Ti(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n      "), w.DNE(2, Ci, 8, 4, "bit-no-items", 3), w.EFF(3, "\n      "), w.DNE(4, ki, 2, 2, "collection-access-restricted", 24), w.EFF(5, "\n    "), w.bVm()), 2 & e) {
					const e = w.XpG();
					w.R7$(2), w.Y8G("ngIf", !e.showCollectionAccessRestricted), w.R7$(2), w.Y8G("ngIf", e.showCollectionAccessRestricted)
				}
			}

			function Ri(e, t) {
				1 & e && (w.j41(0, "div", 30), w.EFF(1, "\n      "), w.nrm(2, "i", 31), w.nI1(3, "i18n"), w.EFF(4, "\n      "), w.j41(5, "span", 32), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n    "), w.k0s()), 2 & e && (w.R7$(2), w.FS9("title", w.bMT(3, 2, "loading")), w.R7$(4), w.JRh(w.bMT(7, 4, "loading")))
			}

			function $i(e, t) {}

			function Mi(e, t) {}

			function ji(e, t) {}
			const Di = "OrgVaultComponent";
			var Gi;
			! function(e) {
				e[e.All = 0] = "All", e[e.AddAccess = 1] = "AddAccess"
			}(Gi || (Gi = {}));
			class Ai {
				get hideVaultFilters() {
					var e, t;
					return (null === (e = this.organization) || void 0 === e ? void 0 : e.isProviderUser) && !(null === (t = this.organization) || void 0 === t ? void 0 : t.isMember)
				}
				constructor(e, t, i, n, o, r, s, a, l, c, d, h, u, p, g, m, F, f, b, E, I, w, k, T, R, $, A, x, U, z, N, X, B, P) {
					this.route = e, this.organizationService = t, this.vaultFilterService = i, this.routedVaultFilterBridgeService = n, this.routedVaultFilterService = o, this.router = r, this.changeDetectorRef = s, this.syncService = a, this.i18nService = l, this.modalService = c, this.dialogService = d, this.messagingService = h, this.broadcasterService = u, this.ngZone = p, this.platformUtilsService = g, this.cipherService = m, this.passwordRepromptService = F, this.collectionAdminService = f, this.searchService = b, this.searchPipe = E, this.groupService = I, this.logService = w, this.eventCollectionService = k, this.totpService = T, this.apiService = R, this.collectionService = $, this.toastService = A, this.configService = x, this.cipherFormConfigService = U, this.organizationApiService = z, this.trialFlowService = N, this.billingApiService = X, this.organizationBillingService = B, this.resellerWarningService = P, this.Unassigned = V.I_, this.trashCleanupWarning = null, this.activeFilter = new ne.$, this.showAddAccessToggle = !1, this.noItemIcon = _.v, this.performingInitialLoad = !0, this.refreshing = !1, this.processingEvent = !1, this.filter = {}, this.hasSubscription$ = new y.t(!1), this.prevCipherId = null, this.searchText$ = new S.B, this.refresh$ = new y.t(null), this.destroy$ = new S.B, this.addAccessStatus$ = new y.t(0), this.unpaidSubscriptionDialog$ = this.organizationService.organizations$.pipe((0, M.p)((e => 1 === e.length)), (0, j.T)((([e]) => e)), (0, D.n)((e => (0, C.H)(this.billingApiService.getOrganizationBillingMetadata(e.id)).pipe((0, G.M)((e => {
						this.hasSubscription$.next(e.hasSubscription)
					})), (0, D.n)((t => (0, C.H)(this.trialFlowService.handleUnpaidSubscriptionDialog(e, t)))))))), this.CollectionDialogTabType = v._K
				}
				ngOnInit() {
					return hi(this, void 0, void 0, (function*() {
						this.extensionRefreshEnabled = yield this.configService.getFeatureFlag(d.T.ExtensionRefresh), this.resellerManagedOrgAlert = yield this.configService.getFeatureFlag(d.T.ResellerManagedOrgAlert), this.trashCleanupWarning = this.i18nService.t(this.platformUtilsService.isSelfHost() ? "trashCleanupWarningSelfHosted" : "trashCleanupWarning");
						const e = this.routedVaultFilterService.filter$,
							t = e.pipe((0, j.T)((e => e.organizationId)), (0, M.p)((e => void 0 !== e)), (0, A.F)()),
							i = t.pipe((0, D.n)((e => this.organizationService.get$(e))), (0, x.Q)(this.destroy$), (0, U.t)({
								refCount: !1,
								bufferSize: 1
							})),
							n = (0, k.z)([i, this.route.queryParams]).pipe((0, z.$)(), (0, D.n)((e => hi(this, [e], void 0, (function*([e]) {
								this.organization = e, e.canEditAnyCollection || (yield this.syncService.fullSync(!1))
							})))), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							}));
						this.broadcasterService.subscribe(Di, (e => {
							this.ngZone.run((() => hi(this, void 0, void 0, (function*() {
								if ("syncCompleted" === e.command) e.successfully && (this.refresh(), this.changeDetectorRef.detectChanges())
							}))))
						})), this.routedVaultFilterBridgeService.activeFilter$.pipe((0, x.Q)(this.destroy$)).subscribe((e => {
							this.activeFilter = e, this.activeFilter.collectionId || (this.showAddAccessToggle = !1)
						})), this.searchText$.pipe((0, N.B)(200), (0, x.Q)(this.destroy$)).subscribe((e => this.router.navigate([], {
							queryParams: {
								search: L.A.isNullOrEmpty(e) ? null : e
							},
							queryParamsHandling: "merge",
							replaceUrl: !0
						}))), this.currentSearchText$ = this.route.queryParams.pipe((0, j.T)((e => e.search))), this.allCollectionsWithoutUnassigned$ = this.refresh$.pipe((0, D.n)((() => t)), (0, D.n)((e => this.collectionAdminService.getAll(e))), (0, U.t)({
							refCount: !1,
							bufferSize: 1
						})), this.editableCollections$ = this.allCollectionsWithoutUnassigned$.pipe((0, j.T)((e => this.organization.canEditAllCiphers ? e : e.filter((e => e.assigned && !e.readOnly)))), (0, U.t)({
							refCount: !0,
							bufferSize: 1
						}));
						const o = (0, k.z)([t, this.allCollectionsWithoutUnassigned$]).pipe((0, j.T)((([e, t]) => {
								const i = new V.nb;
								return i.name = this.i18nService.t("unassigned"), i.id = V.I_, i.organizationId = e, t.concat(i)
							}))),
							r = t.pipe((0, D.n)((e => this.groupService.getAll(e))), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							s = (0, k.z)([i, this.refresh$]).pipe((0, D.n)((e => hi(this, [e], void 0, (function*([e]) {
								let t;
								return this.showAddAccessToggle && !e || this.addAccessToggle(0), !e.isMember && e.isProviderUser ? [] : (e.canEditAllCiphers ? (t = yield this.cipherService.getAllFromApiForOrganization(e.id), null == t || t.forEach((e => e.edit = !0))) : t = yield this.cipherService.getManyFromApiForOrganization(e.id), yield this.searchService.indexCiphers(t, e.id), t)
							})))), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							a = s.pipe((0, j.T)((e => Object.fromEntries(e.map((e => [e.id, e])))))),
							l = o.pipe((0, j.T)((e => (0, nt.m)(e))), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							c = (0, k.z)([l, e, this.currentSearchText$, this.addAccessStatus$]).pipe((0, M.p)((([e, t]) => null != e && null != t)), (0, X.H)((e => hi(this, [e], void 0, (function*([e, t, i, n]) {
								var o;
								if (t.collectionId === V.I_ || void 0 === t.collectionId && void 0 !== t.type) return [];
								this.showAddAccessToggle = !1;
								let r = [];
								if (void 0 === t.collectionId || t.collectionId === ue.u) r = e.map((e => e.node));
								else {
									const i = H.F.getTreeNodeObjectFromList(e, t.collectionId);
									r = null !== (o = null == i ? void 0 : i.children.map((e => e.node))) && void 0 !== o ? o : []
								}
								return (yield this.searchService.isSearchable(i)) && (r = this.searchPipe.transform(r, i, (e => e.name), (e => e.id))), this.showAddAccessToggle = !this.organization.allowAdminAccessToAllCollectionItems && this.organization.canEditUnmanagedCollections && r.some((e => e.unmanaged)), 1 === n && this.showAddAccessToggle && (r = r.filter((e => e.unmanaged))), r
							})))), (0, x.Q)(this.destroy$), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							h = (0, k.z)([l, e]).pipe((0, M.p)((([e, t]) => null != e && null != t)), (0, j.T)((([e, t]) => {
								if (void 0 !== t.collectionId && t.collectionId !== ue.u && t.collectionId !== V.I_) return H.F.getTreeNodeObjectFromList(e, t.collectionId)
							})), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							u = (0, k.z)([e, h, i]).pipe((0, j.T)((([e, t, i]) => e.collectionId === V.I_ && !i.canEditUnassignedCiphers || !i.canEditAllCiphers && null != t && !t.node.assigned)), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							})),
							p = (0, k.z)([s, e, this.currentSearchText$, u]).pipe((0, M.p)((([e, t]) => null != e && null != t)), (0, X.H)((e => hi(this, [e], void 0, (function*([e, t, i, n]) {
								if (void 0 === t.collectionId && void 0 === t.type) return [];
								if (n) return [];
								const o = (0, he.J)(t);
								return (yield this.searchService.isSearchable(i)) ? yield this.searchService.searchCiphers(i, [o], e): e.filter(o)
							})))), (0, U.t)({
								refCount: !0,
								bufferSize: 1
							}));
						n.pipe((0, D.n)((() => (0, k.z)([this.route.queryParams, a]))), (0, M.p)((() => null == this.vaultItemDialogRef || !this.extensionRefreshEnabled)), (0, D.n)((e => hi(this, [e], void 0, (function*([e, t]) {
							const i = xi(e);
							if (!i) return void(this.prevCipherId = null);
							if (i === this.prevCipherId) return;
							this.prevCipherId = i;
							const n = t[i];
							if (n) {
								let t = e.action;
								if ("showFailedToDecrypt" == t) return K.Tp.open(this.dialogService, {
									cipherIds: [i]
								}), void(yield this.router.navigate([], {
									queryParams: {
										itemId: null,
										cipherId: null,
										action: null
									},
									queryParamsHandling: "merge",
									replaceUrl: !0
								}));
								null == t && this.extensionRefreshEnabled && (t = "view"), "view" === t ? yield this.viewCipherById(n): yield this.editCipherId(n, !1)
							} else this.toastService.showToast({
								variant: "error",
								title: null,
								message: this.i18nService.t("unknownCipher")
							}), yield this.router.navigate([], {
								queryParams: {
									cipherId: null,
									itemId: null
								},
								queryParamsHandling: "merge"
							})
						})))), (0, x.Q)(this.destroy$)).subscribe(), n.pipe((0, D.n)((() => (0, k.z)([this.route.queryParams, i, s]))), (0, D.n)((e => hi(this, [e], void 0, (function*([e, t, i]) {
							const n = e.viewEvents;
							if (!n) return;
							const o = i.find((e => e.id === n));
							t.useEvents && null != o ? yield this.viewEvents(o): (this.toastService.showToast({
								variant: "error",
								title: null,
								message: this.i18nService.t("unknownCipher")
							}), yield this.router.navigate([], {
								queryParams: {
									viewEvents: null
								},
								queryParamsHandling: "merge"
							}))
						})))), (0, x.Q)(this.destroy$)).subscribe(), this.unpaidSubscriptionDialog$.pipe((0, x.Q)(this.destroy$)).subscribe(), this.freeTrial$ = (0, k.z)([i, this.hasSubscription$.pipe((0, M.p)((e => null !== e)))]).pipe((0, M.p)((([e, t]) => e.isOwner && t && e.canViewBillingHistory)), (0, D.n)((([e]) => (0, k.z)([(0, T.of)(e), this.organizationApiService.getSubscription(e.id), this.organizationBillingService.getPaymentSource(e.id)]))), (0, j.T)((([e, t, i]) => this.trialFlowService.checkForOrgsWithUpcomingPaymentIssues(e, t, i)))), this.resellerWarning$ = i.pipe((0, M.p)((e => e.isOwner && this.resellerManagedOrgAlert)), (0, D.n)((e => (0, C.H)(this.billingApiService.getOrganizationBillingMetadata(e.id)).pipe((0, j.T)((t => ({
							org: e,
							metadata: t
						})))))), (0, j.T)((({
							org: e,
							metadata: t
						}) => this.resellerWarningService.getWarning(e, t)))), n.pipe((0, D.n)((() => this.refresh$)), (0, G.M)((() => this.refreshing = !0)), (0, D.n)((() => (0, k.z)([i, e, o, r, p, c, h, u]))), (0, x.Q)(this.destroy$)).subscribe((([e, t, i, n, o, r, s, a]) => {
							this.organization = e, this.filter = t, this.allCollections = i, this.allGroups = n, this.ciphers = o, this.collections = r, this.selectedCollection = s, this.showCollectionAccessRestricted = a, this.isEmpty = 0 === (null == r ? void 0 : r.length) && 0 === (null == o ? void 0 : o.length), this.vaultFilterService.reloadCollections(i), this.refreshing = !1, this.performingInitialLoad = !1
						}))
					}))
				}
				navigateToPaymentMethod() {
					return hi(this, void 0, void 0, (function*() {
						var e;
						yield this.router.navigate(["organizations", `${null===(e=this.organization)||void 0===e?void 0:e.id}`, "billing", "payment-method"], {
							state: {
								launchPaymentModalAutomatically: !0
							}
						})
					}))
				}
				addAccessToggle(e) {
					this.addAccessStatus$.next(e)
				}
				get loading() {
					return this.refreshing || this.processingEvent
				}
				ngOnDestroy() {
					this.broadcasterService.unsubscribe(Di), this.destroy$.next(), this.destroy$.complete()
				}
				onVaultItemsEvent(e) {
					return hi(this, void 0, void 0, (function*() {
						this.processingEvent = !0;
						try {
							switch (e.type) {
								case "viewAttachments":
									yield this.editCipherAttachments(e.item);
									break;
								case "clone":
									yield this.cloneCipher(e.item);
									break;
								case "restore":
									1 === e.items.length ? yield this.restore(e.items[0]): yield this.bulkRestore(e.items);
									break;
								case "delete": {
									const t = e.items.filter((e => void 0 === e.collection)).map((e => e.cipher)),
										i = e.items.filter((e => void 0 === e.cipher)).map((e => e.collection));
									1 === t.length && 0 === i.length ? yield this.deleteCipher(t[0]): 0 === t.length && 1 === i.length ? yield this.deleteCollection(i[0]): yield this.bulkDelete(t, i, this.organization);
									break
								}
								case "copyField":
									yield this.copy(e.item, e.field);
									break;
								case "editCollection":
									yield this.editCollection(e.item, v._K.Info, e.readonly);
									break;
								case "viewCollectionAccess":
									yield this.editCollection(e.item, v._K.Access, e.readonly);
									break;
								case "bulkEditCollectionAccess":
									yield this.bulkEditCollectionAccess(e.items, this.organization);
									break;
								case "assignToCollections":
									yield this.bulkAssignToCollections(e.items);
									break;
								case "viewEvents":
									yield this.viewEvents(e.item)
							}
						} finally {
							this.processingEvent = !1
						}
					}))
				}
				filterSearchText(e) {
					this.searchText$.next(e)
				}
				editCipherAttachments(e) {
					return hi(this, void 0, void 0, (function*() {
						if (0 !== (null == e ? void 0 : e.reprompt) && !(yield this.passwordRepromptService.showPasswordPrompt())) return void this.go({
							cipherId: null,
							itemId: null
						});
						if (null == this.organization.maxStorageGb || 0 === this.organization.maxStorageGb) return void this.messagingService.send("upgradeOrganization", {
							organizationId: e.organizationId
						});
						const t = ae._.open(this.dialogService, {
								cipherId: e.id
							}),
							i = yield(0, R._)(t.closed);
						i.action !== ae.N.Removed && i.action !== ae.N.Uploaded || this.refresh()
					}))
				}
				addCipher(e) {
					return hi(this, void 0, void 0, (function*() {
						if (this.extensionRefreshEnabled) return this.addCipherV2(e);
						let t = [];
						t = yield(0, R._)(this.editableCollections$), yield this.editCipher(null, !1, (i => {
							i.type = e || this.activeFilter.cipherType, i.collections = t, this.activeFilter.collectionId && (i.collectionIds = [this.activeFilter.collectionId])
						}))
					}))
				}
				addCipherV2(e) {
					return hi(this, void 0, void 0, (function*() {
						const t = yield this.cipherFormConfigService.buildConfig("add", null, e), i = this.activeFilter.collectionId;
						t.initialValues = {
							organizationId: this.organization.id,
							collectionIds: i ? [i] : []
						}, yield this.openVaultItemDialog("form", t)
					}))
				}
				editCipher(e, t, i) {
					return hi(this, void 0, void 0, (function*() {
						return this.editCipherId(e, t, i)
					}))
				}
				editCipherId(e, t, i) {
					return hi(this, void 0, void 0, (function*() {
						if (e && 0 !== e.reprompt && !(yield this.passwordRepromptService.showPasswordPrompt())) return void this.go({
							cipherId: null,
							itemId: null
						});
						if (this.extensionRefreshEnabled) return void(yield this.editCipherIdV2(e, t));
						const n = t => {
								t.organization = this.organization, t.organizationId = this.organization.id, t.cipherId = null == e ? void 0 : e.id, t.collectionId = this.activeFilter.collectionId, t.onSavedCipher.pipe((0, x.Q)(this.destroy$)).subscribe((() => {
									o.close(), this.refresh()
								})), t.onDeletedCipher.pipe((0, x.Q)(this.destroy$)).subscribe((() => {
									o.close(), this.refresh()
								})), t.onRestoredCipher.pipe((0, x.Q)(this.destroy$)).subscribe((() => {
									o.close(), this.refresh()
								}))
							},
							[o, r] = yield this.modalService.openViewRef(ot.t, this.cipherAddEditModalRef, null == i ? n : e => {
								n(e), i(e)
							});
						return o.onClosedPromise().then((() => {
							this.go({
								cipherId: null,
								itemId: null,
								action: null
							})
						})), r
					}))
				}
				editCipherIdV2(e, t) {
					return hi(this, void 0, void 0, (function*() {
						const i = yield this.cipherFormConfigService.buildConfig(t ? "clone" : "edit", null == e ? void 0 : e.id);
						yield this.openVaultItemDialog("form", i, e)
					}))
				}
				viewCipherById(e) {
					return hi(this, void 0, void 0, (function*() {
						if (!e) return;
						if (e && 0 !== e.reprompt && !(yield this.passwordRepromptService.showPasswordPrompt())) return void(yield this.go({
							cipherId: null,
							itemId: null,
							action: null
						}));
						const t = yield this.cipherFormConfigService.buildConfig("edit", e.id, e.type);
						yield this.openVaultItemDialog("view", t, e, this.activeFilter.collectionId)
					}))
				}
				openVaultItemDialog(e, t, i, n) {
					return hi(this, void 0, void 0, (function*() {
						const o = !!i && (!i.edit && !this.organization.canEditAllCiphers),
							r = o ? "view" : e;
						this.vaultItemDialogRef = re.V.open(this.dialogService, {
							mode: r,
							formConfig: t,
							disableForm: o,
							activeCollectionId: n,
							isAdminConsoleAction: !0
						});
						const s = yield(0, $.s)(this.vaultItemDialogRef.closed);
						this.vaultItemDialogRef = void 0, s !== re.r.Deleted && s !== re.r.Saved || this.refresh(), yield this.go({
							cipherId: null,
							itemId: null,
							action: null
						})
					}))
				}
				cloneCipher(e) {
					return hi(this, void 0, void 0, (function*() {
						var t;
						if (null === (t = e.login) || void 0 === t ? void 0 : t.hasFido2Credentials) {
							if (!(yield this.dialogService.openSimpleDialog({
									title: {
										key: "passkeyNotCopied"
									},
									content: {
										key: "passkeyNotCopiedAlert"
									},
									type: "info"
								}))) return !1
						}
						let i = [];
						i = yield(0, R._)(this.editableCollections$), yield this.editCipher(e, !0, (t => {
							t.cloneMode = !0, t.collections = i, t.collectionIds = e.collectionIds
						}))
					}))
				}
				restore(e) {
					return hi(this, void 0, void 0, (function*() {
						var t;
						if (e.isDeleted)
							if (this.organization.permissions.editAnyCollection || e.edit || this.organization.allowAdminAccessToAllCollectionItems) {
								if (yield this.repromptCipher([e])) try {
									const i = (null === (t = this.organization) || void 0 === t ? void 0 : t.canEditAnyCollection) || e.isUnassigned;
									yield this.cipherService.restoreWithServer(e.id, i), this.toastService.showToast({
										variant: "success",
										title: null,
										message: this.i18nService.t("restoredItem")
									}), this.refresh()
								} catch (i) {
									this.logService.error(i)
								}
							} else this.showMissingPermissionsError()
					}))
				}
				bulkRestore(e) {
					return hi(this, void 0, void 0, (function*() {
						if (!this.organization.permissions.editAnyCollection && e.some((e => !e.edit && !this.organization.allowAdminAccessToAllCollectionItems))) return void this.showMissingPermissionsError();
						if (!(yield this.repromptCipher(e))) return;
						const t = [],
							i = [];
						this.organization.canEditAllCiphers ? e.map((e => {
							t.push(e.id)
						})) : e.map((e => {
							0 === e.collectionIds.length ? i.push(e.id) : e.edit && t.push(e.id)
						})), 0 !== i.length || 0 !== t.length ? ((i.length > 0 || t.length > 0) && (yield this.cipherService.restoreManyWithServer([...i, ...t], this.organization.id)), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("restoredItems")
						}), this.refresh()) : this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("nothingSelected")
						})
					}))
				}
				deleteCipher(e) {
					return hi(this, void 0, void 0, (function*() {
						if (!e.edit && !this.organization.canEditAllCiphers) return void this.showMissingPermissionsError();
						if (!(yield this.repromptCipher([e]))) return;
						const t = e.isDeleted;
						if (!(yield this.dialogService.openSimpleDialog({
								title: {
									key: t ? "permanentlyDeleteItem" : "deleteItem"
								},
								content: {
									key: t ? "permanentlyDeleteItemConfirmation" : "deleteItemConfirmation"
								},
								type: "warning"
							}))) return !1;
						try {
							yield this.deleteCipherWithServer(e.id, t, e.isUnassigned), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t(t ? "permanentlyDeletedItem" : "deletedItem")
							}), this.refresh()
						} catch (i) {
							this.logService.error(i)
						}
					}))
				}
				deleteCollection(e) {
					return hi(this, void 0, void 0, (function*() {
						var t, i, n, o;
						if (!e.canDelete(this.organization)) return void this.showMissingPermissionsError();
						if (yield this.dialogService.openSimpleDialog({
								title: e.name,
								content: {
									key: "deleteCollectionConfirmation"
								},
								type: "warning"
							})) try {
							yield this.apiService.deleteCollection(null === (t = this.organization) || void 0 === t ? void 0 : t.id, e.id), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("deletedCollectionId", e.name)
							}), (null === (i = this.selectedCollection) || void 0 === i ? void 0 : i.node.id) === e.id && (yield this.cipherService.clear(), this.router.navigate([], {
								queryParams: {
									collectionId: null !== (o = null === (n = this.selectedCollection.parent) || void 0 === n ? void 0 : n.node.id) && void 0 !== o ? o : null
								},
								queryParamsHandling: "merge",
								replaceUrl: !0
							})), this.refresh()
						} catch (r) {
							this.logService.error(r)
						}
					}))
				}
				bulkDelete(e, t, i) {
					return hi(this, void 0, void 0, (function*() {
						if (!(yield this.repromptCipher(e))) return;
						const n = [],
							o = [];
						if (e.map((e => {
								e.isUnassigned ? n.push(e.id) : o.push(e.id)
							})), 0 === e.length && 0 === t.length) return void this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("nothingSelected")
						});
						const r = null == t || t.every((e => e.canDelete(i)));
						if (!(null == e || e.every((e => e.edit)) || this.organization.canEditAllCiphers) || !r) return void this.showMissingPermissionsError();
						const s = (0, le.Q0)(this.dialogService, {
							data: {
								permanent: "trash" === this.filter.type,
								cipherIds: o,
								collections: t,
								organization: i,
								unassignedCiphers: n
							}
						});
						(yield(0, $.s)(s.closed)) === le.vA.Deleted && this.refresh()
					}))
				}
				copy(e, t) {
					return hi(this, void 0, void 0, (function*() {
						let i, n, o;
						if ("username" === t) i = "Username", n = e.login.username, o = "username";
						else if ("password" === t) i = "Password", n = e.login.password, o = "password";
						else {
							if ("totp" !== t) return void this.toastService.showToast({
								variant: "error",
								title: null,
								message: this.i18nService.t("unexpectedError")
							});
							i = "TOTP", n = yield this.totpService.getCode(e.login.totp), o = "verificationCodeTotp"
						}
						this.passwordRepromptService.protectedFields().includes(i) && !(yield this.repromptCipher([e])) || e.viewPassword && (this.platformUtilsService.copyToClipboard(n, {
							window
						}), this.toastService.showToast({
							variant: "info",
							title: null,
							message: this.i18nService.t("valueCopied", this.i18nService.t(o))
						}), "password" === t ? yield this.eventCollectionService.collect(O.Bx.Cipher_ClientCopiedPassword, e.id): "totp" === t && (yield this.eventCollectionService.collect(O.Bx.Cipher_ClientCopiedHiddenField, e.id)))
					}))
				}
				addCollection() {
					return hi(this, void 0, void 0, (function*() {
						var e, t;
						const i = (0, v.jN)(this.dialogService, {
								data: {
									organizationId: null === (e = this.organization) || void 0 === e ? void 0 : e.id,
									parentCollectionId: null === (t = this.selectedCollection) || void 0 === t ? void 0 : t.node.id,
									limitNestedCollections: !this.organization.canEditAnyCollection
								}
							}),
							n = yield(0, $.s)(i.closed);
						n.action !== v.RZ.Saved && n.action !== v.RZ.Deleted || this.refresh()
					}))
				}
				editCollection(e, t, i) {
					return hi(this, void 0, void 0, (function*() {
						var n, o, r, s;
						const a = (0, v.jN)(this.dialogService, {
								data: {
									collectionId: null == e ? void 0 : e.id,
									organizationId: null === (n = this.organization) || void 0 === n ? void 0 : n.id,
									initialTab: t,
									readonly: i,
									isAddAccessCollection: e.unmanaged,
									limitNestedCollections: !this.organization.canEditAnyCollection
								}
							}),
							l = yield(0, $.s)(a.closed);
						l.action !== v.RZ.Saved && l.action !== v.RZ.Deleted || (this.refresh(), l.action === v.RZ.Deleted && (null === (o = this.selectedCollection) || void 0 === o ? void 0 : o.node.id) === (null == e ? void 0 : e.id) && this.router.navigate([], {
							queryParams: {
								collectionId: null !== (s = null === (r = this.selectedCollection.parent) || void 0 === r ? void 0 : r.node.id) && void 0 !== s ? s : null
							},
							queryParamsHandling: "merge",
							replaceUrl: !0
						}))
					}))
				}
				bulkEditCollectionAccess(e, t) {
					return hi(this, void 0, void 0, (function*() {
						var i;
						if (0 === e.length) return void this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("noCollectionsSelected")
						});
						if (e.some((e => !e.canEdit(t)))) return void this.showMissingPermissionsError();
						const n = Ft.open(this.dialogService, {
							data: {
								collections: e,
								organizationId: null === (i = this.organization) || void 0 === i ? void 0 : i.id
							}
						});
						(yield(0, $.s)(n.closed)) === it.Saved && this.refresh()
					}))
				}
				bulkAssignToCollections(e) {
					return hi(this, void 0, void 0, (function*() {
						var t, i, n, o;
						if (0 === e.length) return void this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("nothingSelected")
						});
						const r = yield(0, R._)(this.editableCollections$), s = oe.G.open(this.dialogService, {
							data: {
								ciphers: e,
								organizationId: null === (t = this.organization) || void 0 === t ? void 0 : t.id,
								availableCollections: r,
								activeCollection: null === (n = null === (i = this.activeFilter) || void 0 === i ? void 0 : i.selectedCollectionNode) || void 0 === n ? void 0 : n.node,
								isSingleCipherAdmin: 1 === e.length && ((null === (o = this.organization) || void 0 === o ? void 0 : o.canEditAllCiphers) || e[0].isUnassigned)
							}
						});
						(yield(0, $.s)(s.closed)) === K.f$.Saved && this.refresh()
					}))
				}
				viewEvents(e) {
					return hi(this, void 0, void 0, (function*() {
						yield(0, Z.l)(this.dialogService, {
							data: {
								name: e.name,
								organizationId: this.organization.id,
								entityId: e.id,
								showUser: !0,
								entity: "cipher"
							}
						})
					}))
				}
				deleteCipherWithServer(e, t, i) {
					var n;
					const o = (null === (n = this.organization) || void 0 === n ? void 0 : n.canEditAllCiphers) || i;
					return t ? this.cipherService.deleteWithServer(e, o) : this.cipherService.softDeleteWithServer(e, o)
				}
				repromptCipher(e) {
					return hi(this, void 0, void 0, (function*() {
						const t = !e.find((e => e.reprompt !== W.b.None));
						return t || (yield this.passwordRepromptService.showPasswordPrompt())
					}))
				}
				refresh() {
					this.refresh$.next()
				}
				go(e = null) {
					null == e && (e = {
						type: this.activeFilter.cipherType,
						collectionId: this.activeFilter.collectionId,
						deleted: this.activeFilter.isDeleted || null
					}), this.router.navigate([], {
						relativeTo: this.route,
						queryParams: e,
						queryParamsHandling: "merge",
						replaceUrl: !0
					})
				}
				showMissingPermissionsError() {
					this.toastService.showToast({
						variant: "error",
						title: null,
						message: this.i18nService.t("missingPermissions")
					})
				}
			}
			Ai.ɵfac = function(e) {
				return new(e || Ai)(w.rXU(s.nX), w.rXU(c.PV), w.rXU(Dt.u), w.rXU(ce.a), w.rXU(de.B), w.rXU(s.Ix), w.rXU(w.gRc), w.rXU(q.H), w.rXU(ee.W), w.rXU(P.B), w.rXU(Ie.o), w.rXU(Y.U), w.rXU(Ot.y), w.rXU(w.SKi), w.rXU(at.y), w.rXU(Tt.p), w.rXU(K.qX), w.rXU(V.vE), w.rXU(Yt.S), w.rXU(B.R), w.rXU(r.nK), w.rXU(Lt.K), w.rXU(qt.c), w.rXU(Wt.R), w.rXU(St.G), w.rXU(V.YD), w.rXU(Pt.f), w.rXU(we.w), w.rXU(K.hI), w.rXU(Ht.X), w.rXU(ie.A), w.rXU(_t.P), w.rXU(Jt.Y), w.rXU(te))
			}, Ai.ɵcmp = w.VBU({
				type: Ai,
				selectors: [
					["app-org-vault"]
				],
				viewQuery: function(e, t) {
					if (1 & e && (w.GBs(ui, 7, w.c1b), w.GBs(pi, 7, w.c1b), w.GBs(gi, 7, w.c1b)), 2 & e) {
						let e;
						w.mGM(e = w.lsd()) && (t.attachmentsModalRef = e.first), w.mGM(e = w.lsd()) && (t.cipherAddEditModalRef = e.first), w.mGM(e = w.lsd()) && (t.collectionsModalRef = e.first)
					}
				},
				standalone: !0,
				features: [w.Jv_([de.B, ce.a, {
					provide: K.hI,
					useClass: jt
				}]), w.aNF],
				decls: 38,
				vars: 46,
				consts: [
					["attachments", ""],
					["cipherAddEdit", ""],
					["collectionsModal", ""],
					[4, "ngIf"],
					[3, "onAddCipher", "onAddCollection", "onEditCollection", "onDeleteCollection", "searchTextChanged", "filter", "loading", "organization", "collection", "searchText"],
					[1, "row"],
					["class", "col-3", 4, "ngIf"],
					[3, "selected", "selectedChange", 4, "ngIf"],
					["type", "warning", 4, "ngIf"],
					[3, "onEvent", "ciphers", "collections", "allCollections", "allOrganizations", "allGroups", "disabled", "showOwner", "showPermissionsColumn", "showCollections", "showGroups", "showPremiumFeatures", "showBulkMove", "showBulkTrashOptions", "useEvents", "showAdminActions", "showBulkEditCollectionAccess", "showBulkAddToCollections", "viewingOrgVault", "addAccessStatus", "addAccessToggle", "activeCollection"],
					["class", "tw-mt-6 tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-start", 4, "ngIf"],
					["id", "free-trial-banner", "class", "-tw-m-6 tw-flex tw-flex-col tw-pb-6", "icon", "bwi-billing", "bannerType", "premium", 3, "showClose", 4, "ngIf"],
					["id", "free-trial-banner", "icon", "bwi-billing", "bannerType", "premium", 1, "-tw-m-6", "tw-flex", "tw-flex-col", "tw-pb-6", 3, "showClose"],
					["bitLink", "", "linkType", "secondary", "rel", "noreferrer noopener", 1, "tw-cursor-pointer", 3, "click"],
					["id", "reseller-warning-banner", "class", "-tw-m-6 tw-flex tw-flex-col tw-pb-6", "icon", "bwi-billing", "bannerType", "info", 3, "showClose", 4, "ngIf"],
					["id", "reseller-warning-banner", "icon", "bwi-billing", "bannerType", "info", 1, "-tw-m-6", "tw-flex", "tw-flex-col", "tw-pb-6", 3, "showClose"],
					[1, "col-3"],
					[1, "groupings"],
					[1, "content"],
					[1, "inner-content"],
					[3, "searchTextChanged", "organization", "activeFilter", "searchText"],
					[3, "selectedChange", "selected"],
					[3, "value"],
					["type", "warning"],
					[3, "canEditCollection", "canViewCollectionInfo", "viewCollectionClicked", 4, "ngIf"],
					["slot", "title", 1, "tw-mt-4", "tw-block"],
					["slot", "button", "bitButton", "", "buttonType", "primary", "type", "button", 3, "click", 4, "ngIf"],
					["slot", "button", "bitButton", "", "buttonType", "primary", "type", "button", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus"],
					[3, "viewCollectionClicked", "canEditCollection", "canViewCollectionInfo"],
					[1, "tw-mt-6", "tw-flex", "tw-h-full", "tw-flex-col", "tw-items-center", "tw-justify-start"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"]
				],
				template: function(e, t) {
					if (1 & e) {
						const e = w.RV6();
						w.DNE(0, vi, 4, 1, "ng-container", 3), w.nI1(1, "async"), w.EFF(2, "\n"), w.DNE(3, Ei, 4, 1, "ng-container", 3), w.nI1(4, "async"), w.EFF(5, "\n\n"), w.j41(6, "app-org-vault-header", 4), w.nI1(7, "async"), w.bIt("onAddCipher", (function(i) {
							return w.eBV(e), w.Njj(t.addCipher(i))
						}))("onAddCollection", (function() {
							return w.eBV(e), w.Njj(t.addCollection())
						}))("onEditCollection", (function(i) {
							return w.eBV(e), w.Njj(t.editCollection(t.selectedCollection.node, i.tab, i.readonly))
						}))("onDeleteCollection", (function() {
							return w.eBV(e), w.Njj(t.deleteCollection(t.selectedCollection.node))
						}))("searchTextChanged", (function(i) {
							return w.eBV(e), w.Njj(t.filterSearchText(i))
						})), w.k0s(), w.EFF(8, "\n\n"), w.j41(9, "div", 5), w.EFF(10, "\n  "), w.DNE(11, Ii, 14, 5, "div", 6), w.EFF(12, "\n  "), w.j41(13, "div"), w.EFF(14, "\n    "), w.DNE(15, wi, 12, 14, "bit-toggle-group", 7), w.EFF(16, "\n    "), w.DNE(17, yi, 2, 1, "bit-callout", 8), w.EFF(18, "\n    "), w.j41(19, "app-vault-items", 9), w.nI1(20, "async"), w.bIt("onEvent", (function(i) {
							return w.eBV(e), w.Njj(t.onVaultItemsEvent(i))
						})), w.EFF(21, "\n    "), w.k0s(), w.EFF(22, "\n    "), w.DNE(23, Ti, 6, 2, "ng-container", 3), w.EFF(24, "\n    "), w.DNE(25, Ri, 9, 6, "div", 10), w.EFF(26, "\n  "), w.k0s(), w.EFF(27, "\n"), w.k0s(), w.EFF(28, "\n"), w.DNE(29, $i, 0, 0, "ng-template", null, 0, w.C5r), w.EFF(31, "\n"), w.DNE(32, Mi, 0, 0, "ng-template", null, 1, w.C5r), w.EFF(34, "\n"), w.DNE(35, ji, 0, 0, "ng-template", null, 2, w.C5r), w.EFF(37, "\n")
					}
					2 & e && (w.Y8G("ngIf", w.bMT(1, 35, t.freeTrial$)), w.R7$(3), w.Y8G("ngIf", w.bMT(4, 37, t.resellerWarning$)), w.R7$(3), w.Y8G("filter", t.filter)("loading", t.refreshing)("organization", t.organization)("collection", t.selectedCollection)("searchText", w.bMT(7, 39, t.currentSearchText$)), w.R7$(5), w.Y8G("ngIf", !t.hideVaultFilters), w.R7$(2), w.HbH(t.hideVaultFilters ? "col-12" : "col-9"), w.R7$(2), w.Y8G("ngIf", t.showAddAccessToggle && t.activeFilter.selectedCollectionNode), w.R7$(2), w.Y8G("ngIf", t.activeFilter.isDeleted), w.R7$(2), w.Y8G("ciphers", t.ciphers)("collections", t.collections)("allCollections", t.allCollections)("allOrganizations", t.organization ? w.eq3(43, mi, t.organization) : w.lJ4(45, Fi))("allGroups", t.allGroups)("disabled", t.loading)("showOwner", !1)("showPermissionsColumn", !0)("showCollections", void 0 !== t.filter.type)("showGroups", (null == t.organization ? null : t.organization.useGroups) && (void 0 === t.filter.type && void 0 === t.filter.collectionId || void 0 !== t.filter.collectionId))("showPremiumFeatures", null == t.organization ? null : t.organization.useTotp)("showBulkMove", !1)("showBulkTrashOptions", "trash" === t.filter.type)("useEvents", null == t.organization ? null : t.organization.canAccessEventLogs)("showAdminActions", !0)("showBulkEditCollectionAccess", !0)("showBulkAddToCollections", !0)("viewingOrgVault", !0)("addAccessStatus", w.bMT(20, 41, t.addAccessStatus$))("addAccessToggle", t.showAddAccessToggle)("activeCollection", null == t.selectedCollection ? null : t.selectedCollection.node), w.R7$(4), w.Y8G("ngIf", !t.performingInitialLoad && t.isEmpty), w.R7$(2), w.Y8G("ngIf", t.performingInitialLoad))
				},
				dependencies: [tt, yt, Bt, oi, se.l, ri.W_, o.G, pe.bT, $e.Q, si.G, ai.L, li.H, ci.a, pe.Jj, je.$, J.H, di.K, Q.s, bt.D],
				encapsulation: 2
			});
			const xi = e => e.itemId || e.cipherId,
				Ui = [{
					path: "",
					component: Ai,
					canActivate: [(0, h.V)(c.of)],
					data: {
						titleId: "vaults"
					}
				}];
			class zi {}
			zi.ɵfac = function(e) {
				return new(e || zi)
			}, zi.ɵmod = w.$C({
				type: zi
			}), zi.ɵinj = w.G2t({
				imports: [s.iI.forChild(Ui), s.iI]
			});
			class Ni {}
			Ni.ɵfac = function(e) {
				return new(e || Ni)
			}, Ni.ɵmod = w.$C({
				type: Ni
			}), Ni.ɵinj = w.G2t({
				imports: [zi, F.G, m.T, I.B, E.O, f.t, v.pe, Ai, b.vG]
			});
			var Xi = function(e, t, i, n) {
				return new(i || (i = Promise))((function(o, r) {
					function s(e) {
						try {
							l(n.next(e))
						} catch (t) {
							r(t)
						}
					}

					function a(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
							e(t)
						}))).then(s, a)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			var Vi = i(5326),
				Bi = i(2073),
				Pi = i(67582),
				Oi = i(83234),
				Yi = i(47696);
			const Li = ["imageEle"];

			function qi(e, t) {
				1 & e && (w.j41(0, "span", 11), w.EFF(1), w.nI1(2, "i18n"), w.k0s()), 2 & e && (w.R7$(), w.SpI("\n      ", w.bMT(2, 1, "new"), "\n    "))
			}
			class Wi {
				constructor(e, t) {
					this.themeStateService = e, this.systemTheme$ = t, this.destroyed$ = new S.B
				}
				ngAfterViewInit() {
					(0, k.z)([this.themeStateService.selectedTheme$, this.systemTheme$]).pipe((0, x.Q)(this.destroyed$)).subscribe((([e, t]) => {
						if (this.imageDarkMode)
							if (e === Pi.SV.System) {
								const e = t === Pi.SV.Dark || t === Pi.SV.SolarizedDark;
								this.imageEle.nativeElement.src = e ? this.imageDarkMode : this.image
							} else e === Pi.SV.Dark || e === Pi.SV.SolarizedDark ? this.imageEle.nativeElement.src = this.imageDarkMode : this.imageEle.nativeElement.src = this.image
					}))
				}
				ngOnDestroy() {
					this.destroyed$.next(), this.destroyed$.complete()
				}
				showNewBadge() {
					if (!this.newBadgeExpiration) return !1;
					const e = new Date(this.newBadgeExpiration);
					return !isNaN(e.getTime()) && e > new Date
				}
			}

			function Hi(e, t) {
				if (1 & e && (w.j41(0, "li", 2), w.nI1(1, "i18n"), w.nI1(2, "i18n"), w.EFF(3, "\n    "), w.nrm(4, "app-integration-card", 3), w.EFF(5, "\n  "), w.k0s()), 2 & e) {
					const e = t.$implicit,
						i = w.XpG();
					w.Y8G("title", w.i5U(1, 8, i.tooltipI18nKey, e.name)), w.BMQ("aria-label", w.i5U(2, 11, i.ariaI18nKey, e.name)), w.R7$(4), w.Y8G("name", e.name)("linkURL", e.linkURL)("image", e.image)("imageDarkMode", e.imageDarkMode)("externalURL", e.type === i.IntegrationType.SDK)("newBadgeExpiration", e.newBadgeExpiration)
				}
			}
			Wi.ɵfac = function(e) {
				return new(e || Wi)(w.rXU(Oi.oO), w.rXU(Bi.eL))
			}, Wi.ɵcmp = w.VBU({
				type: Wi,
				selectors: [
					["app-integration-card"]
				],
				viewQuery: function(e, t) {
					if (1 & e && w.GBs(Li, 5), 2 & e) {
						let e;
						w.mGM(e = w.lsd()) && (t.imageEle = e.first)
					}
				},
				inputs: {
					name: "name",
					image: "image",
					imageDarkMode: "imageDarkMode",
					linkURL: "linkURL",
					externalURL: "externalURL",
					newBadgeExpiration: "newBadgeExpiration"
				},
				standalone: !0,
				features: [w.aNF],
				decls: 28,
				vars: 4,
				consts: [
					["imageEle", ""],
					[1, "tw-block", "tw-h-full", "tw-overflow-hidden", "tw-rounded", "tw-border", "tw-border-solid", "tw-border-secondary-600", "tw-relative", "tw-transition-all", "hover:tw-scale-105", "focus-within:tw-outline-none", "focus-within:tw-ring", "focus-within:tw-ring-primary-700", "focus-within:tw-ring-offset-2"],
					[1, "tw-flex", "tw-bg-secondary-100", "tw-items-center", "tw-justify-end", "tw-pt-4", "tw-pr-4"],
					[1, "bwi", "bwi-external-link"],
					[1, "tw-flex", "tw-h-32", "tw-bg-secondary-100", "tw-items-center", "tw-justify-center", "tw-pb-2", "tw-px-6", "lg:tw-pb-4", "lg:tw-px-12"],
					[1, "tw-flex", "tw-items-center", "tw-justify-center", "tw-h-28", "tw-w-28", "lg:tw-w-40"],
					["alt", "", 1, "tw-block", "tw-mx-auto", "tw-h-auto", "tw-max-w-full", "tw-max-h-full", 3, "src"],
					[1, "tw-p-5"],
					[1, "tw-text-main", "tw-text-lg", "tw-font-semibold"],
					["rel", "noopener noreferrer", "target", "_blank", 1, "tw-block", "tw-mb-0", "tw-font-bold", "hover:tw-no-underline", "focus:tw-outline-none", "after:tw-content-['']", "after:tw-block", "after:tw-absolute", "after:tw-w-full", "after:tw-h-full", "after:tw-left-0", "after:tw-top-0", 3, "href"],
					["bitBadge", "", "class", "tw-mt-3", "variant", "secondary", 4, "ngIf"],
					["bitBadge", "", "variant", "secondary", 1, "tw-mt-3"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "div", 1), w.EFF(1, "\n  "), w.j41(2, "div", 2), w.EFF(3, "\n    "), w.nrm(4, "i", 3), w.EFF(5, "\n  "), w.k0s(), w.EFF(6, "\n  "), w.j41(7, "div", 4), w.EFF(8, "\n    "), w.j41(9, "div", 5), w.EFF(10, "\n      "), w.nrm(11, "img", 6, 0), w.EFF(13, "\n    "), w.k0s(), w.EFF(14, "\n  "), w.k0s(), w.EFF(15, "\n  "), w.j41(16, "div", 7), w.EFF(17, "\n    "), w.j41(18, "h3", 8), w.EFF(19), w.k0s(), w.EFF(20, "\n    "), w.j41(21, "a", 9), w.EFF(22, "\n    "), w.k0s(), w.EFF(23, "\n    "), w.DNE(24, qi, 3, 3, "span", 10), w.EFF(25, "\n  "), w.k0s(), w.EFF(26, "\n"), w.k0s(), w.EFF(27, "\n")), 2 & e && (w.R7$(11), w.Y8G("src", t.image, w.B4B), w.R7$(8), w.JRh(t.name), w.R7$(2), w.Y8G("href", t.linkURL, w.B4B), w.R7$(3), w.Y8G("ngIf", t.showNewBadge()))
				},
				dependencies: [F.G, pe.bT, Yi.n, je.$],
				encapsulation: 2
			});
			class _i {
				constructor() {
					this.ariaI18nKey = "integrationCardAriaLabel", this.tooltipI18nKey = "integrationCardTooltip", this.IntegrationType = O.pq
				}
			}
			_i.ɵfac = function(e) {
				return new(e || _i)
			}, _i.ɵcmp = w.VBU({
				type: _i,
				selectors: [
					["app-integration-grid"]
				],
				inputs: {
					integrations: "integrations",
					ariaI18nKey: "ariaI18nKey",
					tooltipI18nKey: "tooltipI18nKey"
				},
				standalone: !0,
				features: [w.aNF],
				decls: 5,
				vars: 1,
				consts: [
					[1, "tw-inline-grid", "tw-grid-cols-3", "tw-gap-6", "tw-m-0", "tw-p-0", "tw-w-full", "tw-auto-cols-auto", "tw-list-none", "lg:tw-grid-cols-4", "lg:tw-gap-10", "lg:tw-w-auto"],
					[3, "title", 4, "ngFor", "ngForOf"],
					[3, "title"],
					[3, "name", "linkURL", "image", "imageDarkMode", "externalURL", "newBadgeExpiration"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "ul", 0), w.EFF(1, "\n  "), w.DNE(2, Hi, 6, 14, "li", 1), w.EFF(3, "\n"), w.k0s(), w.EFF(4, "\n")), 2 & e && (w.R7$(2), w.Y8G("ngForOf", t.integrations))
				},
				dependencies: [Wi, F.G, pe.Sq, je.$],
				encapsulation: 2
			});
			class Ji {
				transform(e, t) {
					return e.filter((e => e.type === t))
				}
			}
			Ji.ɵfac = function(e) {
				return new(e || Ji)
			}, Ji.ɵpipe = w.EJ8({
				name: "filterIntegrations",
				type: Ji,
				pure: !0,
				standalone: !0
			});
			var Qi = i(88516),
				Ki = i(49608),
				Zi = i(58806);

			function en(e, t) {
				if (1 & e && (w.j41(0, "bit-tab", 3), w.nI1(1, "i18n"), w.EFF(2, "\n    "), w.j41(3, "section", 4), w.EFF(4, "\n      "), w.j41(5, "h2", 5), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n      "), w.j41(9, "p", 6), w.EFF(10), w.nI1(11, "i18n"), w.j41(12, "a", 8), w.EFF(13), w.nI1(14, "i18n"), w.k0s(), w.EFF(15), w.nI1(16, "i18n"), w.k0s(), w.EFF(17, "\n      "), w.nrm(18, "app-integration-grid", 7), w.nI1(19, "filterIntegrations"), w.EFF(20, "\n    "), w.k0s(), w.EFF(21, "\n  "), w.k0s()), 2 & e) {
					const e = w.XpG(2);
					w.Y8G("label", w.bMT(1, 6, "singleSignOn")), w.R7$(6), w.JRh(w.bMT(7, 8, "singleSignOn")), w.R7$(4), w.SpI("\n        ", w.bMT(11, 10, "ssoDescStart"), "\n        "), w.R7$(3), w.JRh(w.bMT(14, 12, "singleSignOn")), w.R7$(2), w.SpI("\n        ", w.bMT(16, 14, "ssoDescEnd"), "\n      "), w.R7$(3), w.Y8G("integrations", w.i5U(19, 16, e.integrationsList, e.IntegrationType.SSO))
				}
			}

			function tn(e, t) {
				if (1 & e && (w.j41(0, "section", 4), w.EFF(1, "\n      "), w.j41(2, "h2", 5), w.EFF(3), w.nI1(4, "i18n"), w.k0s(), w.EFF(5, "\n      "), w.j41(6, "p", 6), w.EFF(7), w.nI1(8, "i18n"), w.j41(9, "a", 10), w.EFF(10), w.nI1(11, "i18n"), w.k0s(), w.EFF(12), w.nI1(13, "i18n"), w.k0s(), w.EFF(14, "\n      "), w.nrm(15, "app-integration-grid", 7), w.nI1(16, "filterIntegrations"), w.EFF(17, "\n    "), w.k0s()), 2 & e) {
					const e = w.XpG(3);
					w.R7$(3), w.SpI("\n        ", w.bMT(4, 5, "scimIntegration"), "\n      "), w.R7$(4), w.SpI("\n        ", w.bMT(8, 7, "scimIntegrationDescStart"), "\n        "), w.R7$(3), w.JRh(w.bMT(11, 9, "scimIntegration")), w.R7$(2), w.SpI("\n        ", w.bMT(13, 11, "scimIntegrationDescEnd"), "\n      "), w.R7$(3), w.Y8G("integrations", w.i5U(16, 13, e.integrationsList, e.IntegrationType.SCIM))
				}
			}

			function nn(e, t) {
				if (1 & e && (w.j41(0, "section", 4), w.EFF(1, "\n      "), w.j41(2, "h2", 5), w.EFF(3), w.nI1(4, "i18n"), w.k0s(), w.EFF(5, "\n      "), w.j41(6, "p", 6), w.EFF(7), w.nI1(8, "i18n"), w.k0s(), w.EFF(9, "\n      "), w.nrm(10, "app-integration-grid", 7), w.nI1(11, "filterIntegrations"), w.EFF(12, "\n    "), w.k0s()), 2 & e) {
					const e = w.XpG(3);
					w.R7$(3), w.SpI("\n        ", w.bMT(4, 3, "bwdc"), "\n      "), w.R7$(4), w.JRh(w.bMT(8, 5, "bwdcDesc")), w.R7$(3), w.Y8G("integrations", w.i5U(11, 7, e.integrationsList, e.IntegrationType.BWDC))
				}
			}

			function on(e, t) {
				if (1 & e && (w.j41(0, "bit-tab", 3), w.nI1(1, "i18n"), w.EFF(2, "\n    "), w.DNE(3, tn, 18, 16, "section", 9), w.EFF(4, "\n    "), w.DNE(5, nn, 13, 10, "section", 9), w.EFF(6, "\n  "), w.k0s()), 2 & e) {
					const e = w.XpG().ngIf;
					w.Y8G("label", w.bMT(1, 3, "userProvisioning")), w.R7$(3), w.Y8G("ngIf", e.useScim), w.R7$(2), w.Y8G("ngIf", e.useDirectory)
				}
			}

			function rn(e, t) {
				if (1 & e && (w.j41(0, "bit-tab", 3), w.nI1(1, "i18n"), w.EFF(2, "\n    "), w.j41(3, "section", 4), w.EFF(4, "\n      "), w.j41(5, "h2", 5), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n      "), w.j41(9, "p", 6), w.EFF(10), w.nI1(11, "i18n"), w.k0s(), w.EFF(12, "\n      "), w.nrm(13, "app-integration-grid", 7), w.nI1(14, "filterIntegrations"), w.EFF(15, "\n    "), w.k0s(), w.EFF(16, "\n  "), w.k0s()), 2 & e) {
					const e = w.XpG(2);
					w.Y8G("label", w.bMT(1, 4, "eventManagement")), w.R7$(6), w.SpI("\n        ", w.bMT(7, 6, "eventManagement"), "\n      "), w.R7$(4), w.JRh(w.bMT(11, 8, "eventManagementDesc")), w.R7$(3), w.Y8G("integrations", w.i5U(14, 10, e.integrationsList, e.IntegrationType.EVENT))
				}
			}

			function sn(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-tab-group", 1), w.mxI("selectedIndexChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.DH7(i.tabIndex, t) || (i.tabIndex = t), w.Njj(t)
					})), w.EFF(1, "\n  "), w.DNE(2, en, 22, 19, "bit-tab", 2), w.EFF(3, "\n\n  "), w.DNE(4, on, 7, 5, "bit-tab", 2), w.EFF(5, "\n\n  "), w.DNE(6, rn, 17, 13, "bit-tab", 2), w.EFF(7, "\n\n  "), w.j41(8, "bit-tab", 3), w.nI1(9, "i18n"), w.EFF(10, "\n    "), w.j41(11, "section", 4), w.EFF(12, "\n      "), w.j41(13, "h2", 5), w.EFF(14), w.nI1(15, "i18n"), w.k0s(), w.EFF(16, "\n      "), w.j41(17, "p", 6), w.EFF(18), w.nI1(19, "i18n"), w.k0s(), w.EFF(20, "\n      "), w.nrm(21, "app-integration-grid", 7), w.nI1(22, "filterIntegrations"), w.EFF(23, "\n    "), w.k0s(), w.EFF(24, "\n  "), w.k0s(), w.EFF(25, "\n"), w.k0s()
				}
				if (2 & e) {
					const e = t.ngIf,
						i = w.XpG();
					w.R50("selectedIndex", i.tabIndex), w.R7$(2), w.Y8G("ngIf", e.useSso), w.R7$(2), w.Y8G("ngIf", e.useScim || e.useDirectory), w.R7$(2), w.Y8G("ngIf", e.useEvents), w.R7$(2), w.Y8G("label", w.bMT(9, 8, "deviceManagement")), w.R7$(6), w.SpI("\n        ", w.bMT(15, 10, "deviceManagement"), "\n      "), w.R7$(4), w.JRh(w.bMT(19, 12, "deviceManagementDesc")), w.R7$(3), w.Y8G("integrations", w.i5U(22, 14, i.integrationsList, i.IntegrationType.DEVICE))
				}
			}
			class an {
				ngOnInit() {
					this.organization$ = this.route.params.pipe((0, D.n)((e => this.organizationService.get$(e.organizationId))))
				}
				constructor(e, t) {
					this.route = e, this.organizationService = t, this.integrationsList = [], this.integrationsList = [{
						name: "AD FS",
						linkURL: "https://bitwarden.com/help/saml-adfs/",
						image: "../../../../../../../images/integrations/azure-active-directory.svg",
						type: O.pq.SSO
					}, {
						name: "Auth0",
						linkURL: "https://bitwarden.com/help/saml-auth0/",
						image: "../../../../../../../images/integrations/logo-auth0-badge-color.svg",
						type: O.pq.SSO
					}, {
						name: "AWS",
						linkURL: "https://bitwarden.com/help/saml-aws/",
						image: "../../../../../../../images/integrations/aws-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/aws-darkmode.svg",
						type: O.pq.SSO
					}, {
						name: "Microsoft Entra ID",
						linkURL: "https://bitwarden.com/help/saml-azure/",
						image: "../../../../../../../images/integrations/logo-microsoft-entra-id-color.svg",
						type: O.pq.SSO
					}, {
						name: "Duo",
						linkURL: "https://bitwarden.com/help/saml-duo/",
						image: "../../../../../../../images/integrations/logo-duo-color.svg",
						type: O.pq.SSO
					}, {
						name: "Google",
						linkURL: "https://bitwarden.com/help/saml-google/",
						image: "../../../../../../../images/integrations/logo-google-badge-color.svg",
						type: O.pq.SSO
					}, {
						name: "JumpCloud",
						linkURL: "https://bitwarden.com/help/saml-jumpcloud/",
						image: "../../../../../../../images/integrations/logo-jumpcloud-badge-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/jumpcloud-darkmode.svg",
						type: O.pq.SSO
					}, {
						name: "KeyCloak",
						linkURL: "https://bitwarden.com/help/saml-keycloak/",
						image: "../../../../../../../images/integrations/logo-keycloak-icon.svg",
						type: O.pq.SSO
					}, {
						name: "Okta",
						linkURL: "https://bitwarden.com/help/saml-okta/",
						image: "../../../../../../../images/integrations/logo-okta-symbol-black.svg",
						imageDarkMode: "../../../../../../../images/integrations/okta-darkmode.svg",
						type: O.pq.SSO
					}, {
						name: "OneLogin",
						linkURL: "https://bitwarden.com/help/saml-onelogin/",
						image: "../../../../../../../images/integrations/logo-onelogin-badge-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/onelogin-darkmode.svg",
						type: O.pq.SSO
					}, {
						name: "PingFederate",
						linkURL: "https://bitwarden.com/help/saml-pingfederate/",
						image: "../../../../../../../images/integrations/logo-ping-identity-badge-color.svg",
						type: O.pq.SSO
					}, {
						name: "Microsoft Entra ID",
						linkURL: "https://bitwarden.com/help/microsoft-entra-id-scim-integration/",
						image: "../../../../../../../images/integrations/logo-microsoft-entra-id-color.svg",
						type: O.pq.SCIM
					}, {
						name: "Okta",
						linkURL: "https://bitwarden.com/help/okta-scim-integration/",
						image: "../../../../../../../images/integrations/logo-okta-symbol-black.svg",
						imageDarkMode: "../../../../../../../images/integrations/okta-darkmode.svg",
						type: O.pq.SCIM
					}, {
						name: "OneLogin",
						linkURL: "https://bitwarden.com/help/onelogin-scim-integration/",
						image: "../../../../../../../images/integrations/logo-onelogin-badge-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/onelogin-darkmode.svg",
						type: O.pq.SCIM
					}, {
						name: "JumpCloud",
						linkURL: "https://bitwarden.com/help/jumpcloud-scim-integration/",
						image: "../../../../../../../images/integrations/logo-jumpcloud-badge-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/jumpcloud-darkmode.svg",
						type: O.pq.SCIM
					}, {
						name: "Ping Identity",
						linkURL: "https://bitwarden.com/help/ping-identity-scim-integration/",
						image: "../../../../../../../images/integrations/logo-ping-identity-badge-color.svg",
						type: O.pq.SCIM
					}, {
						name: "Active Directory",
						linkURL: "https://bitwarden.com/help/ldap-directory/",
						image: "../../../../../../../images/integrations/azure-active-directory.svg",
						type: O.pq.BWDC
					}, {
						name: "Microsoft Entra ID",
						linkURL: "https://bitwarden.com/help/microsoft-entra-id/",
						image: "../../../../../../../images/integrations/logo-microsoft-entra-id-color.svg",
						type: O.pq.BWDC
					}, {
						name: "Google Workspace",
						linkURL: "https://bitwarden.com/help/workspace-directory/",
						image: "../../../../../../../images/integrations/logo-google-badge-color.svg",
						type: O.pq.BWDC
					}, {
						name: "Okta",
						linkURL: "https://bitwarden.com/help/okta-directory/",
						image: "../../../../../../../images/integrations/logo-okta-symbol-black.svg",
						imageDarkMode: "../../../../../../../images/integrations/okta-darkmode.svg",
						type: O.pq.BWDC
					}, {
						name: "OneLogin",
						linkURL: "https://bitwarden.com/help/onelogin-directory/",
						image: "../../../../../../../images/integrations/logo-onelogin-badge-color.svg",
						imageDarkMode: "../../../../../../../images/integrations/onelogin-darkmode.svg",
						type: O.pq.BWDC
					}, {
						name: "Splunk",
						linkURL: "https://bitwarden.com/help/splunk-siem/",
						image: "../../../../../../../images/integrations/logo-splunk-black.svg",
						imageDarkMode: "../../../../../../../images/integrations/splunk-darkmode.svg",
						type: O.pq.EVENT
					}, {
						name: "Microsoft Sentinel",
						linkURL: "https://bitwarden.com/help/microsoft-sentinel-siem/",
						image: "../../../../../../../images/integrations/logo-microsoft-sentinel-color.svg",
						type: O.pq.EVENT
					}, {
						name: "Rapid7",
						linkURL: "https://bitwarden.com/help/rapid7-siem/",
						image: "../../../../../../../images/integrations/logo-rapid7-black.svg",
						imageDarkMode: "../../../../../../../images/integrations/rapid7-darkmode.svg",
						type: O.pq.EVENT
					}, {
						name: "Elastic",
						linkURL: "https://bitwarden.com/help/elastic-siem/",
						image: "../../../../../../../images/integrations/logo-elastic-badge-color.svg",
						type: O.pq.EVENT
					}, {
						name: "Panther",
						linkURL: "https://bitwarden.com/help/panther-siem/",
						image: "../../../../../../../images/integrations/logo-panther-round-color.svg",
						type: O.pq.EVENT
					}, {
						name: "Microsoft Intune",
						linkURL: "https://bitwarden.com/help/deploy-browser-extensions-with-intune/",
						image: "../../../../../../../images/integrations/logo-microsoft-intune-color.svg",
						type: O.pq.DEVICE
					}]
				}
				get IntegrationType() {
					return O.pq
				}
			}
			an.ɵfac = function(e) {
				return new(e || an)(w.rXU(s.nX), w.rXU(c.PV))
			}, an.ɵcmp = w.VBU({
				type: an,
				selectors: [
					["ac-integrations"]
				],
				standalone: !0,
				features: [w.aNF],
				decls: 6,
				vars: 3,
				consts: [
					[3, "selectedIndex", "selectedIndexChange", 4, "ngIf"],
					[3, "selectedIndexChange", "selectedIndex"],
					[3, "label", 4, "ngIf"],
					[3, "label"],
					[1, "tw-mb-9"],
					["bitTypography", "h2"],
					["bitTypography", "body1"],
					[3, "integrations"],
					["bitLink", "", "routerLink", "../settings/sso", 1, "tw-lowercase"],
					["class", "tw-mb-9", 4, "ngIf"],
					["bitLink", "", "routerLink", "../settings/scim"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "app-header"), w.EFF(1, " "), w.k0s(), w.EFF(2, "\n\n"), w.DNE(3, sn, 26, 17, "bit-tab-group", 0), w.nI1(4, "async"), w.EFF(5, "\n")), 2 & e && (w.R7$(3), w.Y8G("ngIf", w.bMT(4, 1, t.organization$)))
				},
				dependencies: [F.G, pe.bT, s.Wk, ai.L, Qi.W, Ki.j, Zi.r, pe.Jj, je.$, Vi.R, _i, Ee.G, Ae.f, Ji],
				encapsulation: 2
			});
			var ln, cn, dn = i(83731),
				hn = i(55542),
				un = i(75811),
				pn = i(7861),
				gn = i(3892),
				mn = i(86226),
				Fn = i(99917),
				fn = i(97553),
				vn = i(43759),
				bn = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function En(e, t) {
				if (1 & e && (w.j41(0, "span", 11), w.EFF(1), w.k0s()), 2 & e) {
					const e = w.XpG();
					w.R7$(), w.JRh(null == e.group ? null : e.group.name)
				}
			}

			function In(e, t) {
				1 & e && (w.j41(0, "div"), w.EFF(1, "\n        "), w.nrm(2, "i", 12), w.nI1(3, "i18n"), w.EFF(4, "\n        "), w.j41(5, "span", 13), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n      "), w.k0s()), 2 & e && (w.R7$(2), w.FS9("title", w.bMT(3, 2, "loading")), w.R7$(4), w.JRh(w.bMT(7, 4, "loading")))
			}

			function wn(e, t) {
				1 & e && (w.j41(0, "span"), w.EFF(1), w.nI1(2, "i18n"), w.k0s()), 2 & e && (w.R7$(), w.SpI("\n              ", w.bMT(2, 1, "restrictedGroupAccessDesc"), "\n            "))
			}

			function yn(e, t) {
				1 & e && (w.j41(0, "span"), w.EFF(1), w.nI1(2, "i18n"), w.k0s()), 2 & e && (w.R7$(), w.SpI("\n              ", w.bMT(2, 1, "restrictedCollectionAssignmentDesc"), "\n            "))
			}

			function Sn(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-tab-group", 14), w.mxI("selectedIndexChange", (function(t) {
						w.eBV(e);
						const i = w.XpG();
						return w.DH7(i.tabIndex, t) || (i.tabIndex = t), w.Njj(t)
					})), w.EFF(1, "\n        "), w.j41(2, "bit-tab", 15), w.nI1(3, "i18n"), w.EFF(4, "\n          "), w.j41(5, "bit-form-field"), w.EFF(6, "\n            "), w.j41(7, "bit-label"), w.EFF(8), w.nI1(9, "i18n"), w.k0s(), w.EFF(10, "\n            "), w.nrm(11, "input", 16), w.EFF(12, "\n            "), w.j41(13, "bit-hint"), w.EFF(14), w.nI1(15, "i18n"), w.k0s(), w.EFF(16, "\n          "), w.k0s(), w.EFF(17, "\n          "), w.j41(18, "bit-form-field"), w.EFF(19, "\n            "), w.j41(20, "bit-label"), w.EFF(21), w.nI1(22, "i18n"), w.k0s(), w.EFF(23, "\n            "), w.nrm(24, "input", 17), w.EFF(25, "\n            "), w.j41(26, "bit-hint"), w.EFF(27), w.nI1(28, "i18n"), w.k0s(), w.EFF(29, "\n          "), w.k0s(), w.EFF(30, "\n        "), w.k0s(), w.EFF(31, "\n\n        "), w.j41(32, "bit-tab", 15), w.nI1(33, "i18n"), w.EFF(34, "\n          "), w.j41(35, "p"), w.EFF(36), w.nI1(37, "i18n"), w.DNE(38, wn, 3, 3, "span", 5), w.nI1(39, "async"), w.EFF(40, "\n          "), w.k0s(), w.EFF(41, "\n          "), w.nrm(42, "bit-access-selector", 18), w.nI1(43, "i18n"), w.nI1(44, "i18n"), w.nI1(45, "i18n"), w.EFF(46, "\n        "), w.k0s(), w.EFF(47, "\n\n        "), w.j41(48, "bit-tab", 15), w.nI1(49, "i18n"), w.EFF(50, "\n          "), w.j41(51, "p"), w.EFF(52), w.nI1(53, "i18n"), w.DNE(54, yn, 3, 3, "span", 5), w.nI1(55, "async"), w.EFF(56, "\n          "), w.k0s(), w.EFF(57, "\n          "), w.nrm(58, "bit-access-selector", 19), w.nI1(59, "i18n"), w.nI1(60, "i18n"), w.nI1(61, "i18n"), w.EFF(62, "\n        "), w.k0s(), w.EFF(63, "\n      "), w.k0s()
				}
				if (2 & e) {
					const e = w.XpG();
					w.R50("selectedIndex", e.tabIndex), w.R7$(2), w.FS9("label", w.bMT(3, 23, "groupInfo")), w.R7$(6), w.JRh(w.bMT(9, 25, "name")), w.R7$(6), w.JRh(w.i5U(15, 27, "characterMaximum", 100)), w.R7$(7), w.JRh(w.bMT(22, 30, "externalId")), w.R7$(6), w.JRh(w.bMT(28, 32, "externalIdDesc")), w.R7$(5), w.FS9("label", w.bMT(33, 34, "members")), w.R7$(4), w.SpI("\n            ", w.bMT(37, 36, "editGroupMembersDesc"), "\n            "), w.R7$(2), w.Y8G("ngIf", w.bMT(39, 38, e.cannotAddSelfToGroup$)), w.R7$(4), w.Y8G("items", e.members)("showMemberRoles", !0)("permissionMode", e.PermissionMode.Hidden)("columnHeader", w.bMT(43, 40, "member"))("selectorLabelText", w.bMT(44, 42, "selectMembers"))("emptySelectionText", w.bMT(45, 44, "noMembersAdded")), w.R7$(6), w.FS9("label", w.bMT(49, 46, "collections")), w.R7$(4), w.SpI("\n            ", w.bMT(53, 48, "editGroupCollectionsDesc"), "\n            "), w.R7$(2), w.Y8G("ngIf", !w.bMT(55, 50, e.canAssignAccessToAnyCollection$)), w.R7$(4), w.Y8G("items", e.collections)("permissionMode", e.PermissionMode.Edit)("columnHeader", w.bMT(59, 52, "collection"))("selectorLabelText", w.bMT(60, 54, "selectCollections"))("emptySelectionText", w.bMT(61, 56, "noCollectionsAdded"))
				}
			}! function(e) {
				e[e.Info = 0] = "Info", e[e.Members = 1] = "Members", e[e.Collections = 2] = "Collections"
			}(ln || (ln = {})),
			function(e) {
				e.Saved = "saved", e.Canceled = "canceled", e.Deleted = "deleted"
			}(cn || (cn = {}));
			class Cn {
				get groupId() {
					return this.params.groupId
				}
				get organizationId() {
					return this.params.organizationId
				}
				get editMode() {
					return null != this.groupId
				}
				get orgMembers$() {
					return (0, C.H)(this.organizationUserApiService.getAllMiniUserDetails(this.organizationId)).pipe((0, j.T)((e => e.data.map((e => {
						var t;
						return {
							id: e.id,
							type: st.Uv.Member,
							email: e.email,
							role: e.type,
							listName: (null === (t = e.name) || void 0 === t ? void 0 : t.length) > 0 ? `${e.name} (${e.email})` : e.email,
							labelName: e.name || e.email,
							status: e.status,
							userId: e.userId
						}
					})))))
				}
				constructor(e, t, i, n, o, r, s, a, l, c, d, h, u, p, g) {
					var m;
					this.params = e, this.dialogRef = t, this.apiService = i, this.organizationUserApiService = n, this.groupService = o, this.i18nService = r, this.platformUtilsService = s, this.logService = a, this.formBuilder = l, this.changeDetectorRef = c, this.dialogService = d, this.organizationService = h, this.accountService = u, this.collectionAdminService = p, this.toastService = g, this.organization$ = this.organizationService.get$(this.organizationId).pipe((0, U.t)({
						refCount: !0
					})), this.PermissionMode = st.ZC, this.ResultType = cn, this.loading = !0, this.collections = [], this.members = [], this.groupForm = this.formBuilder.group({
						name: ["", [Te.k0.required, Te.k0.maxLength(100)]],
						externalId: this.formBuilder.control({
							value: "",
							disabled: !0
						}),
						members: [
							[]
						],
						collections: [
							[]
						]
					}), this.destroy$ = new S.B, this.orgCollections$ = (0, C.H)(this.collectionAdminService.getAll(this.organizationId)).pipe((0, U.t)({
						refCount: !0,
						bufferSize: 1
					})), this.groupDetails$ = (0, T.of)(this.editMode).pipe((0, X.H)((e => e ? (0, k.z)([this.groupService.get(this.organizationId, this.groupId), this.apiService.getGroupUsers(this.organizationId, this.groupId)]).pipe((0, j.T)((([e, t]) => Object.assign(Object.assign({}, e), {
						members: t
					}))), (0, un.W)((e => (e instanceof pn._ ? this.logService.error(e.message) : this.logService.error(e.toString()), (0, T.of)(void 0))))) : (0, T.of)(void 0))), (0, U.t)({
						refCount: !0,
						bufferSize: 1
					})), this.allowAdminAccessToAllCollectionItems$ = this.organization$.pipe((0, j.T)((e => e.allowAdminAccessToAllCollectionItems))), this.canAssignAccessToAnyCollection$ = (0, k.z)([this.organization$, this.allowAdminAccessToAllCollectionItems$]).pipe((0, j.T)((([e, t]) => e.canEditAnyCollection || e.permissions.manageGroups && t))), this.cannotAddSelfToGroup$ = (0, k.z)([this.allowAdminAccessToAllCollectionItems$, this.groupDetails$]).pipe((0, j.T)((([e, t]) => !e && null != t))), this.submit = () => bn(this, void 0, void 0, (function*() {
						var e, t;
						if (this.groupForm.markAllAsTouched(), this.groupForm.invalid) return void(this.tabIndex !== ln.Info && this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("fieldOnTabRequiresAttention", this.i18nService.t("groupInfo"))
						}));
						const i = this.groupForm.value,
							n = {
								id: this.groupId,
								organizationId: this.organizationId,
								name: i.name,
								members: null !== (t = null === (e = i.members) || void 0 === e ? void 0 : e.map((e => e.id))) && void 0 !== t ? t : [],
								collections: i.collections.map((e => (0, st.yo)(e))),
								externalId: i.externalId
							};
						yield this.groupService.save(n), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t(this.editMode ? "editedGroupId" : "createdGroupId", i.name)
						}), this.dialogRef.close(cn.Saved)
					})), this.delete = () => bn(this, void 0, void 0, (function*() {
						if (!this.editMode) return;
						if (!(yield this.dialogService.openSimpleDialog({
								title: this.group.name,
								content: {
									key: "deleteGroupConfirmation"
								},
								type: "warning"
							}))) return !1;
						yield this.groupService.delete(this.organizationId, this.groupId), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("deletedGroupId", this.group.name)
						}), this.dialogRef.close(cn.Deleted)
					})), this.tabIndex = null !== (m = e.initialTab) && void 0 !== m ? m : ln.Info
				}
				ngOnInit() {
					this.loading = !0, this.title = this.i18nService.t(this.editMode ? "editGroup" : "newGroup"), (0, k.z)([this.orgCollections$, this.orgMembers$, this.groupDetails$, this.cannotAddSelfToGroup$, this.accountService.activeAccount$, this.organization$]).pipe((0, x.Q)(this.destroy$)).subscribe((([e, t, i, n, o, r]) => {
						var s;
						if (this.members = t, this.group = i, this.collections = function(e, t, i) {
								return e.map((e => {
									var n;
									const o = null !== (n = null == i ? void 0 : i.collections.find((t => t.id == e.id))) && void 0 !== n ? n : void 0;
									return {
										id: e.id,
										type: st.Uv.Collection,
										labelName: e.name,
										listName: e.name,
										readonly: !e.canEditGroupAccess(t),
										readonlyPermission: o ? (0, st.Jh)(o) : void 0
									}
								})).filter((e => !e.readonly || (null == i ? void 0 : i.collections.some((t => t.id == e.id)))))
							}(e, r, i), null != this.group && (this.changeDetectorRef.detectChanges(), this.groupForm.patchValue({
								name: this.group.name,
								externalId: this.group.externalId,
								members: this.group.members.map((e => ({
									id: e,
									type: st.Uv.Member
								}))),
								collections: kn(i, this.collections)
							})), n) {
							const e = null === (s = this.members.find((e => e.userId === o.id))) || void 0 === s ? void 0 : s.id,
								t = this.groupForm.value.members.some((t => t.id === e));
							null == e || t || (this.members = this.members.filter((t => t.id !== e)))
						}
						this.loading = !1
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
			}

			function kn(e, t) {
				return e.collections.filter((e => !t.find((t => t.id == e.id)).readonly)).map((e => ({
					id: e.id,
					type: st.Uv.Collection,
					permission: (0, st.Jh)(e)
				})))
			}
			Cn.ɵfac = function(e) {
				return new(e || Cn)(w.rXU(rt.Qs), w.rXU(rt.ce), w.rXU(St.G), w.rXU(V.uB), w.rXU(r.EB), w.rXU(ee.W), w.rXU(at.y), w.rXU(Lt.K), w.rXU(Te.ok), w.rXU(w.gRc), w.rXU(Ie.o), w.rXU(c.PV), w.rXU(Nt.Di), w.rXU(V.vE), w.rXU(Pt.f))
			}, Cn.ɵcmp = w.VBU({
				type: Cn,
				selectors: [
					["app-group-add-edit"]
				],
				decls: 32,
				vars: 18,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["dialogSize", "large", 3, "disablePadding"],
					["bitDialogTitle", ""],
					["class", "tw-text-sm tw-normal-case tw-text-muted", 4, "ngIf"],
					["bitDialogContent", ""],
					[4, "ngIf"],
					[3, "selectedIndex", "selectedIndexChange", 4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "bitFormButton", "", "type", "submit"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitDialogClose"],
					["type", "button", "buttonType", "danger", "bitIconButton", "bwi-trash", "bitFormButton", "", 1, "tw-ml-auto", 3, "bitAction", "appA11yTitle"],
					[1, "tw-text-sm", "tw-normal-case", "tw-text-muted"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "selectedIndexChange", "selectedIndex"],
					[3, "label"],
					["bitInput", "", "appAutofocus", "", "type", "text", "formControlName", "name"],
					["bitInput", "", "type", "text", "formControlName", "externalId"],
					["formControlName", "members", 3, "items", "showMemberRoles", "permissionMode", "columnHeader", "selectorLabelText", "emptySelectionText"],
					["formControlName", "collections", 3, "items", "permissionMode", "columnHeader", "selectorLabelText", "emptySelectionText"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "form", 0), w.EFF(1, "\n  "), w.j41(2, "bit-dialog", 1), w.EFF(3, "\n    "), w.j41(4, "span", 2), w.EFF(5), w.DNE(6, En, 2, 1, "span", 3), w.EFF(7, "\n    "), w.k0s(), w.EFF(8, "\n    "), w.j41(9, "div", 4), w.EFF(10, "\n      "), w.DNE(11, In, 9, 6, "div", 5), w.EFF(12, "\n\n      "), w.DNE(13, Sn, 64, 58, "bit-tab-group", 6), w.EFF(14, "\n    "), w.k0s(), w.EFF(15, "\n    "), w.qex(16, 7), w.EFF(17, "\n      "), w.j41(18, "button", 8), w.EFF(19), w.nI1(20, "i18n"), w.k0s(), w.EFF(21, "\n      "), w.j41(22, "button", 9), w.EFF(23), w.nI1(24, "i18n"), w.k0s(), w.EFF(25, "\n      "), w.nrm(26, "button", 10), w.nI1(27, "i18n"), w.EFF(28, "\n    "), w.bVm(), w.EFF(29, "\n  "), w.k0s(), w.EFF(30, "\n"), w.k0s(), w.EFF(31, "\n")), 2 & e && (w.Y8G("formGroup", t.groupForm)("bitSubmit", t.submit), w.R7$(2), w.Y8G("disablePadding", !t.loading), w.R7$(3), w.SpI("\n      ", t.title, "\n      "), w.R7$(), w.Y8G("ngIf", t.editMode), w.R7$(5), w.Y8G("ngIf", t.loading), w.R7$(2), w.Y8G("ngIf", !t.loading), w.R7$(6), w.SpI("\n        ", w.bMT(20, 12, "save"), "\n      "), w.R7$(3), w.Y8G("bitDialogClose", t.ResultType.Canceled), w.R7$(), w.SpI("\n        ", w.bMT(24, 14, "cancel"), "\n      "), w.R7$(3), w.Y8G("bitAction", t.delete)("appA11yTitle", w.bMT(27, 16, "delete")))
				},
				dependencies: [pe.bT, Te.qT, Te.me, Te.BC, Te.cb, Te.j4, Te.JD, Re.C, Kt.B, gn.p, lt.$, ct.L, $e.Q, dt.I, ht.m, mn.m, Fn.s, fn.J, vn.h, Me.s, Qi.W, Ki.j, ut.t, pe.Jj, je.$],
				encapsulation: 2
			});
			var Tn = i(94438),
				Rn = i(50352),
				$n = i(38410),
				Mn = i(22466),
				jn = i(32316),
				Dn = i(36572),
				Gn = function(e, t, i, n) {
					return new(i || (i = Promise))((function(o, r) {
						function s(e) {
							try {
								l(n.next(e))
							} catch (t) {
								r(t)
							}
						}

						function a(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								r(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
								e(t)
							}))).then(s, a)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};

			function An(e, t) {
				1 & e && (w.qex(0), w.EFF(1, "\n  "), w.nrm(2, "i", 6), w.nI1(3, "i18n"), w.EFF(4, "\n  "), w.j41(5, "span", 7), w.EFF(6), w.nI1(7, "i18n"), w.k0s(), w.EFF(8, "\n"), w.bVm()), 2 & e && (w.R7$(2), w.FS9("title", w.bMT(3, 2, "loading")), w.R7$(4), w.JRh(w.bMT(7, 4, "loading")))
			}

			function xn(e, t) {
				1 & e && (w.j41(0, "p"), w.EFF(1), w.nI1(2, "i18n"), w.k0s()), 2 & e && (w.R7$(), w.JRh(w.bMT(2, 1, "noGroupsInList")))
			}

			function Un(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "tr", 24), w.EFF(1, "\n          "), w.j41(2, "td", 25), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.check(t))
					})), w.EFF(3, "\n            "), w.j41(4, "input", 26), w.mxI("ngModelChange", (function(t) {
						const i = w.eBV(e).$implicit;
						return w.DH7(i.checked, t) || (i.checked = t), w.Njj(t)
					})), w.k0s(), w.EFF(5, "\n          "), w.k0s(), w.EFF(6, "\n          "), w.j41(7, "td", 27), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.edit(t))
					})), w.EFF(8, "\n            "), w.j41(9, "button", 28), w.EFF(10), w.k0s(), w.EFF(11, "\n          "), w.k0s(), w.EFF(12, "\n          "), w.j41(13, "td", 25), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.edit(t, i.ModalTabType.Collections))
					})), w.EFF(14, "\n            "), w.nrm(15, "bit-badge-list", 29), w.EFF(16, "\n          "), w.k0s(), w.EFF(17, "\n          "), w.j41(18, "td", 16), w.EFF(19, "\n            "), w.nrm(20, "button", 18), w.nI1(21, "i18n"), w.EFF(22, "\n\n            "), w.j41(23, "bit-menu", null, 1), w.EFF(25, "\n              "), w.j41(26, "button", 19), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.edit(t))
					})), w.EFF(27, "\n                "), w.nrm(28, "i", 30), w.EFF(29), w.nI1(30, "i18n"), w.k0s(), w.EFF(31, "\n              "), w.j41(32, "button", 19), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.edit(t, i.ModalTabType.Members))
					})), w.EFF(33, "\n                "), w.nrm(34, "i", 31), w.EFF(35), w.nI1(36, "i18n"), w.k0s(), w.EFF(37, "\n              "), w.j41(38, "button", 19), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.edit(t, i.ModalTabType.Collections))
					})), w.EFF(39, "\n                "), w.nrm(40, "i", 32), w.EFF(41), w.nI1(42, "i18n"), w.k0s(), w.EFF(43, "\n              "), w.j41(44, "button", 19), w.bIt("click", (function() {
						const t = w.eBV(e).$implicit,
							i = w.XpG(4);
						return w.Njj(i.delete(t))
					})), w.EFF(45, "\n                "), w.j41(46, "span", 20), w.nrm(47, "i", 21), w.EFF(48), w.nI1(49, "i18n"), w.k0s(), w.EFF(50, "\n              "), w.k0s(), w.EFF(51, "\n            "), w.k0s(), w.EFF(52, "\n          "), w.k0s(), w.EFF(53, "\n        "), w.k0s()
				}
				if (2 & e) {
					const e = t.$implicit,
						i = w.sdS(24),
						n = w.XpG(4);
					w.Y8G("ngClass", n.rowHeightClass), w.R7$(4), w.R50("ngModel", e.checked), w.R7$(6), w.SpI("\n              ", e.details.name, "\n            "), w.R7$(5), w.Y8G("items", e.collectionNames)("maxItems", 3), w.R7$(5), w.FS9("appA11yTitle", w.bMT(21, 11, "options")), w.Y8G("bitMenuTriggerFor", i), w.R7$(9), w.SpI(" ", w.bMT(30, 13, "editInfo"), "\n              "), w.R7$(6), w.SpI(" ", w.bMT(36, 15, "members"), "\n              "), w.R7$(6), w.SpI(" ", w.bMT(42, 17, "collections"), "\n              "), w.R7$(7), w.SpI(" ", w.bMT(49, 19, "delete"), "")
				}
			}

			function zn(e, t) {
				if (1 & e && (w.EFF(0, "\n        "), w.DNE(1, Un, 54, 21, "tr", 23), w.EFF(2, "\n      ")), 2 & e) {
					const e = t.$implicit;
					w.R7$(), w.Y8G("cdkVirtualForOf", e)
				}
			}

			function Nn(e, t) {
				if (1 & e) {
					const e = w.RV6();
					w.j41(0, "bit-table", 10), w.EFF(1, "\n      "), w.qex(2, 11), w.EFF(3, "\n        "), w.j41(4, "tr"), w.EFF(5, "\n          "), w.j41(6, "th", 12), w.EFF(7, "\n            "), w.j41(8, "input", 13), w.bIt("change", (function(t) {
						w.eBV(e);
						const i = w.XpG(2);
						return w.Njj(i.toggleAllVisible(t))
					})), w.k0s(), w.EFF(9, "\n            "), w.j41(10, "label", 14), w.EFF(11), w.nI1(12, "i18n"), w.k0s(), w.EFF(13, "\n          "), w.k0s(), w.EFF(14, "\n          "), w.j41(15, "th", 15), w.EFF(16), w.nI1(17, "i18n"), w.k0s(), w.EFF(18, "\n          "), w.j41(19, "th", 16), w.EFF(20), w.nI1(21, "i18n"), w.k0s(), w.EFF(22, "\n          "), w.j41(23, "th", 17), w.EFF(24, "\n            "), w.nrm(25, "button", 18), w.nI1(26, "i18n"), w.EFF(27, "\n\n            "), w.j41(28, "bit-menu", null, 0), w.EFF(30, "\n              "), w.j41(31, "button", 19), w.bIt("click", (function() {
						w.eBV(e);
						const t = w.XpG(2);
						return w.Njj(t.deleteAllSelected())
					})), w.EFF(32, "\n                "), w.j41(33, "span", 20), w.nrm(34, "i", 21), w.EFF(35), w.nI1(36, "i18n"), w.k0s(), w.EFF(37, "\n              "), w.k0s(), w.EFF(38, "\n            "), w.k0s(), w.EFF(39, "\n          "), w.k0s(), w.EFF(40, "\n        "), w.k0s(), w.EFF(41, "\n      "), w.bVm(), w.EFF(42, "\n      "), w.DNE(43, zn, 3, 1, "ng-template", 22), w.EFF(44, "\n    "), w.k0s()
				}
				if (2 & e) {
					const e = w.sdS(29),
						t = w.XpG(2);
					w.Y8G("dataSource", t.dataSource), w.R7$(11), w.JRh(w.bMT(12, 7, "all")), w.R7$(5), w.JRh(w.bMT(17, 9, "name")), w.R7$(4), w.JRh(w.bMT(21, 11, "collections")), w.R7$(5), w.FS9("appA11yTitle", w.bMT(26, 13, "options")), w.Y8G("bitMenuTriggerFor", e), w.R7$(10), w.SpI(" ", w.bMT(36, 15, "delete"), "")
				}
			}

			function Xn(e, t) {
				if (1 & e && (w.qex(0), w.EFF(1, "\n  "), w.DNE(2, xn, 3, 3, "p", 5), w.EFF(3, "\n  "), w.EFF(4, "\n  "), w.j41(5, "cdk-virtual-scroll-viewport", 8), w.EFF(6, "\n    "), w.DNE(7, Nn, 45, 17, "bit-table", 9), w.EFF(8, "\n  "), w.k0s(), w.EFF(9, "\n"), w.bVm()), 2 & e) {
					const e = w.XpG();
					w.R7$(2), w.Y8G("ngIf", !e.dataSource.filteredData.length), w.R7$(3), w.Y8G("itemSize", e.rowHeight), w.R7$(2), w.Y8G("ngIf", e.dataSource.filteredData.length)
				}
			}
			class Vn {
				constructor(e, t, i, n, o, r, s, a) {
					this.apiService = e, this.groupService = t, this.route = i, this.i18nService = n, this.dialogService = o, this.logService = r, this.collectionService = s, this.toastService = a, this.loading = !0, this.dataSource = new hn.s, this.searchControl = new Te.MJ(""), this.rowHeight = 52, this.rowHeightClass = "tw-h-[52px]", this.ModalTabType = ln, this.refreshGroups$ = new y.t(null), this.route.params.pipe((0, G.M)((e => this.organizationId = e.organizationId)), (0, D.n)((() => (0, k.z)([(0, C.H)(this.apiService.getCollections(this.organizationId)).pipe((0, X.H)((e => this.toCollectionMap(e)))), this.refreshGroups$.pipe((0, D.n)((() => this.groupService.getAllDetails(this.organizationId))))]))), (0, j.T)((([e, t]) => t.map((t => {
						var i;
						return {
							id: t.id,
							name: t.name,
							details: t,
							checked: !1,
							collectionNames: t.collections.map((t => {
								var i;
								return null === (i = e[t.id]) || void 0 === i ? void 0 : i.name
							})).sort(null === (i = this.i18nService.collator) || void 0 === i ? void 0 : i.compare)
						}
					})))), (0, dn.pQ)()).subscribe((e => {
						this.dataSource.data = e, this.loading = !1
					})), this.searchControl.valueChanges.pipe((0, N.B)(200), (0, dn.pQ)()).subscribe((e => this.dataSource.filter = (e => {
						null != e || (e = "");
						const t = e.trim().toLowerCase();
						return e => {
							const i = e.details;
							return -1 != i.id.toLowerCase().indexOf(t) || -1 != i.name.toLowerCase().indexOf(t)
						}
					})(e))), this.route.queryParams.pipe((0, z.$)(), (0, dn.pQ)()).subscribe((e => {
						this.searchControl.setValue(e.search)
					}))
				}
				edit(e) {
					return Gn(this, arguments, void 0, (function*(e, t = ln.Info) {
						const i = (n = this.dialogService, o = {
							data: {
								initialTab: t,
								organizationId: this.organizationId,
								groupId: null != e ? e.details.id : null
							}
						}, n.open(Cn, o));
						var n, o;
						const r = yield(0, $.s)(i.closed);
						r == cn.Saved ? this.refreshGroups$.next() : r == cn.Deleted && this.removeGroup(e)
					}))
				}
				add() {
					return Gn(this, void 0, void 0, (function*() {
						yield this.edit(null)
					}))
				}
				delete(e) {
					return Gn(this, void 0, void 0, (function*() {
						if (!(yield this.dialogService.openSimpleDialog({
								title: e.details.name,
								content: {
									key: "deleteGroupConfirmation"
								},
								type: "warning"
							}))) return !1;
						try {
							yield this.groupService.delete(this.organizationId, e.details.id), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("deletedGroupId", e.details.name)
							}), this.removeGroup(e)
						} catch (t) {
							this.logService.error(t)
						}
					}))
				}
				deleteAllSelected() {
					return Gn(this, void 0, void 0, (function*() {
						const e = this.dataSource.data.filter((e => e.checked));
						if (0 == e.length) return;
						const t = e.map((e => e.details.name)).join(", ");
						if (!(yield this.dialogService.openSimpleDialog({
								title: {
									key: "deleteMultipleGroupsConfirmation",
									placeholders: [e.length.toString()]
								},
								content: t,
								type: "warning"
							}))) return !1;
						try {
							yield this.groupService.deleteMany(this.organizationId, e.map((e => e.details.id))), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("deletedManyGroups", e.length.toString())
							}), e.forEach((e => this.removeGroup(e)))
						} catch (i) {
							this.logService.error(i)
						}
					}))
				}
				check(e) {
					e.checked = !e.checked
				}
				toggleAllVisible(e) {
					this.dataSource.filteredData.forEach((t => t.checked = e.target.checked))
				}
				removeGroup(e) {
					this.dataSource.data = this.dataSource.data.filter((t => t !== e))
				}
				toCollectionMap(e) {
					return Gn(this, void 0, void 0, (function*() {
						const t = e.data.map((e => new V.pM(new V.Fw(e)))),
							i = yield this.collectionService.decryptMany(t), n = {};
						return i.forEach((e => n[e.id] = e)), n
					}))
				}
			}
			Vn.ɵfac = function(e) {
				return new(e || Vn)(w.rXU(St.G), w.rXU(r.EB), w.rXU(s.nX), w.rXU(ee.W), w.rXU(Ie.o), w.rXU(Lt.K), w.rXU(V.YD), w.rXU(Pt.f))
			}, Vn.ɵcmp = w.VBU({
				type: Vn,
				selectors: [
					["ng-component"]
				],
				decls: 16,
				vars: 9,
				consts: [
					["headerMenu", ""],
					["rowMenu", ""],
					[1, "tw-w-80", 3, "placeholder", "formControl"],
					["bitButton", "", "type", "button", "buttonType", "primary", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus", "bwi-fw"],
					[4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["scrollWindow", "", 1, "tw-pb-8", 3, "itemSize"],
					[3, "dataSource", 4, "ngIf"],
					[3, "dataSource"],
					["header", ""],
					["bitCell", "", 1, "tw-w-20"],
					["type", "checkbox", "bitCheckbox", "", "id", "selectAll", 1, "tw-mr-2", 3, "change"],
					["for", "selectAll", 1, "tw-mb-0", "!tw-font-bold", "!tw-text-muted"],
					["bitCell", "", "bitSortable", "name", "default", ""],
					["bitCell", ""],
					["bitCell", "", 1, "tw-w-10"],
					["type", "button", "bitIconButton", "bwi-ellipsis-v", "size", "small", 3, "bitMenuTriggerFor", "appA11yTitle"],
					["type", "button", "bitMenuItem", "", 3, "click"],
					[1, "tw-text-danger"],
					["aria-hidden", "true", 1, "bwi", "bwi-trash"],
					["body", ""],
					["bitRow", "", 3, "ngClass", 4, "cdkVirtualFor", "cdkVirtualForOf"],
					["bitRow", "", 3, "ngClass"],
					["bitCell", "", 1, "tw-cursor-pointer", 3, "click"],
					["type", "checkbox", "bitCheckbox", "", 3, "ngModelChange", "ngModel"],
					["bitCell", "", 1, "tw-cursor-pointer", "tw-font-bold", 3, "click"],
					["type", "button", "bitLink", ""],
					["variant", "secondary", 3, "items", "maxItems"],
					["aria-hidden", "true", 1, "bwi", "bwi-pencil-square"],
					["aria-hidden", "true", 1, "bwi", "bwi-user"],
					["aria-hidden", "true", 1, "bwi", "bwi-collection"]
				],
				template: function(e, t) {
					1 & e && (w.j41(0, "app-header"), w.EFF(1, "\n  "), w.nrm(2, "bit-search", 2), w.nI1(3, "i18n"), w.EFF(4, "\n  "), w.j41(5, "button", 3), w.bIt("click", (function() {
						return t.add()
					})), w.EFF(6, "\n    "), w.nrm(7, "i", 4), w.EFF(8), w.nI1(9, "i18n"), w.k0s(), w.EFF(10, "\n"), w.k0s(), w.EFF(11, "\n\n"), w.DNE(12, An, 9, 6, "ng-container", 5), w.EFF(13, "\n"), w.DNE(14, Xn, 10, 3, "ng-container", 5), w.EFF(15, "\n")), 2 & e && (w.R7$(2), w.Y8G("placeholder", w.bMT(3, 5, "searchGroups"))("formControl", t.searchControl), w.R7$(6), w.SpI("\n    ", w.bMT(9, 7, "newGroup"), "\n  "), w.R7$(4), w.Y8G("ngIf", t.loading), w.R7$(2), w.Y8G("ngIf", !t.loading))
				},
				dependencies: [pe.YU, pe.bT, Te.Zm, Te.BC, Te.vS, Te.l_, Re.C, Tn.p, $e.Q, Rn.P, Me.s, ai.o, ye.Z, Se.O, Ce.w, $n.Q, Mn.Y, jn.O, Dn._, Dn.O, xe.S, Ae.f, n.yg, n.E$, n.d6, n.Zr, je.$],
				encapsulation: 2
			});
			const Bn = [{
				path: ":organizationId",
				component: p.d,
				canActivate: [(0, g.i)(), a.W_, (0, h.V)(c.OV)],
				children: [{
					path: "",
					pathMatch: "full",
					canActivate: [(0, u.r)((function(e) {
						if ((0, c.of)(e)) return "vault";
						if ((0, c.pe)(e)) return "members";
						if ((0, c.ex)(e)) return "groups";
						if ((0, c.Ue)(e)) return "reporting";
						if ((0, c.Dl)(e)) return "settings";
						return
					}))],
					children: []
				}, {
					path: "vault",
					loadChildren: () => Ni
				}, {
					path: "integrations",
					canActivate: [(0, l.H)(d.T.PM14505AdminConsoleIntegrationPage), function(e = !0) {
						return (t, i) => Xi(this, void 0, void 0, (function*() {
							const i = (0, w.WQX)(s.Ix),
								n = (0, w.WQX)(c.PV),
								o = (0, w.WQX)(Ie.o),
								r = yield n.get(t.params.organizationId);
							if (null == r) return i.createUrlTree(["/"]);
							if (r.productTierType != me.K_.Enterprise && e) {
								if (!r.canEditSubscription) return yield o.openSimpleDialog({
									title: {
										key: "upgradeOrganizationEnterprise"
									},
									content: {
										key: "onlyAvailableForEnterpriseOrganization"
									},
									acceptButtonText: {
										key: "ok"
									},
									cancelButtonText: null,
									type: "info"
								}), !1;
								(yield o.openSimpleDialog({
									title: {
										key: "upgradeOrganizationEnterprise"
									},
									content: {
										key: "onlyAvailableForEnterpriseOrganization"
									},
									acceptButtonText: {
										key: "upgradeOrganization"
									},
									type: "info",
									icon: "bwi-arrow-circle-up"
								})) && (yield i.navigate(["organizations", r.id, "billing", "subscription"], {
									queryParams: {
										upgrade: !0,
										productTierType: me.K_.Enterprise
									}
								}))
							}
							return r.productTierType == me.K_.Enterprise
						}))
					}(!1), (0, h.V)((function(e) {
						return e.canAccessIntegrations
					}))],
					component: an,
					data: {
						titleId: "integrations"
					}
				}, {
					path: "settings",
					loadChildren: () => i.e(64).then(i.bind(i, 40064)).then((e => e.OrganizationSettingsModule))
				}, {
					path: "members",
					loadChildren: () => i.e(331).then(i.bind(i, 40331)).then((e => e.MembersModule))
				}, {
					component: Vn,
					path: "groups",
					canActivate: [(0, h.V)(c.ex)],
					data: {
						titleId: "groups"
					}
				}, {
					path: "reporting",
					loadChildren: () => i.e(887).then(i.bind(i, 29887)).then((e => e.OrganizationReportingModule))
				}, {
					path: "billing",
					loadChildren: () => Promise.all([i.e(680), i.e(982)]).then(i.bind(i, 77601)).then((e => e.OrganizationBillingModule))
				}]
			}];
			class Pn {}
			Pn.ɵfac = function(e) {
				return new(e || Pn)
			}, Pn.ɵmod = w.$C({
				type: Pn
			}), Pn.ɵinj = w.G2t({
				imports: [s.iI.forChild(Bn), s.iI]
			});
			class On {}
			On.ɵfac = function(e) {
				return new(e || On)
			}, On.ɵmod = w.$C({
				type: On
			}), On.ɵinj = w.G2t({
				imports: [Vi.R, st.mH, r.Je, Pn, o.T, n.E9]
			})
		},
		38766: (e, t, i) => {
			i.d(t, {
				Jh: () => r.Jh,
				NU: () => r.NU,
				Uv: () => r.Uv,
				ZC: () => n.Z,
				df: () => r.df,
				mH: () => o.m,
				yo: () => r.yo
			});
			var n = i(43184),
				o = i(97434),
				r = i(45980)
		},
		5326: (e, t, i) => {
			i.d(t, {
				R: () => a
			});
			var n = i(60893),
				o = i(11525),
				r = i(97434),
				s = i(56111);
			class a {}
			a.ɵfac = function(e) {
				return new(e || a)
			}, a.ɵmod = s.$C({
				type: a
			}), a.ɵinj = s.G2t({
				imports: [o.G, r.m, n.t, o.G, r.m, n.t]
			})
		},
		97319: (e, t, i) => {
			i.d(t, {
				g: () => n
			});
			class n {
				constructor(e) {
					this.message = e.message, this.humanReadableMessage = e.humanReadableMessage, this.appIcon = e.appIcon, this.appName = e.appName, this.userId = e.userId, this.userName = e.userName, this.userEmail = e.userEmail, this.date = e.date, this.ip = e.ip, this.type = e.type, this.installationId = e.installationId, this.systemUser = e.systemUser, this.serviceAccountId = e.serviceAccountId
				}
			}
		}
	}
]);
//# sourceMappingURL=960.2f15ac4af5b4718887c5.js.map