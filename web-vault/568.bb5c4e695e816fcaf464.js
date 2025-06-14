"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[568], {
		18568: (n, t, i) => {
			i.r(t), i.d(t, {
				IndividualBillingModule: () => gt
			});
			var e = i(42594),
				o = i(55067),
				s = i(89459),
				r = i(32451),
				a = i(82468),
				c = i(56111),
				l = i(37115),
				u = i(2922),
				F = i(52981),
				p = i(56898),
				d = i(58806),
				h = i(78650),
				m = i(88016),
				b = function(n, t, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function r(n) {
							try {
								c(e.next(n))
							} catch (t) {
								s(t)
							}
						}

						function a(n) {
							try {
								c(e.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
								n(t)
							}))).then(r, a)
						}
						c((e = e.apply(n, t || [])).next())
					}))
				};

			function f(n, t) {
				1 & n && (c.qex(0), c.EFF(1, "\n  "), c.nrm(2, "i", 3), c.nI1(3, "i18n"), c.EFF(4, "\n  "), c.j41(5, "span", 4), c.EFF(6), c.nI1(7, "i18n"), c.k0s(), c.EFF(8, "\n"), c.bVm()), 2 & n && (c.R7$(2), c.FS9("title", c.bMT(3, 2, "loading")), c.R7$(4), c.JRh(c.bMT(7, 4, "loading")))
			}

			function E(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "button", 7), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(2);
						return c.Njj(t.load())
					})), c.EFF(1), c.nI1(2, "i18n"), c.k0s()
				}
				2 & n && (c.R7$(), c.SpI("\n    ", c.bMT(2, 1, "loadMore"), "\n  "))
			}

			function g(n, t) {
				if (1 & n && (c.qex(0), c.EFF(1, "\n  "), c.nrm(2, "app-billing-history", 5), c.EFF(3, "\n  "), c.DNE(4, E, 3, 3, "button", 6), c.EFF(5, "\n"), c.bVm()), 2 & n) {
					const n = c.XpG();
					c.R7$(2), c.Y8G("openInvoices", n.openInvoices)("paidInvoices", n.paidInvoices)("transactions", n.transactions), c.R7$(2), c.Y8G("ngIf", n.hasAdditionalHistory)
				}
			}
			class I {
				constructor(n, t, i) {
					this.platformUtilsService = n, this.router = t, this.accountBillingApiService = i, this.loading = !1, this.firstLoaded = !1, this.openInvoices = [], this.paidInvoices = [], this.transactions = [], this.hasAdditionalHistory = !1
				}
				ngOnInit() {
					return b(this, void 0, void 0, (function*() {
						this.platformUtilsService.isSelfHost() ? this.router.navigate(["/settings/subscription"]) : (yield this.load(), this.firstLoaded = !0)
					}))
				}
				load() {
					return b(this, void 0, void 0, (function*() {
						if (this.loading) return;
						this.loading = !0;
						const n = this.accountBillingApiService.getBillingInvoices("open", this.openInvoices.length > 0 ? this.openInvoices[this.openInvoices.length - 1].id : null),
							t = this.accountBillingApiService.getBillingInvoices("paid", this.paidInvoices.length > 0 ? this.paidInvoices[this.paidInvoices.length - 1].id : null),
							i = this.accountBillingApiService.getBillingTransactions(this.transactions.length > 0 ? this.transactions[this.transactions.length - 1].createdDate : null),
							e = yield n, o = yield t, s = yield i;
						this.openInvoices = [...this.openInvoices, ...e], this.paidInvoices = [...this.paidInvoices, ...o], this.transactions = [...this.transactions, ...s], this.hasAdditionalHistory = e.length >= 5 || o.length >= 5 || s.length >= 5, this.loading = !1
					}))
				}
			}
			I.ɵfac = function(n) {
				return new(n || I)(c.rXU(l.y), c.rXU(s.Ix), c.rXU(u.k))
			}, I.ɵcmp = c.VBU({
				type: I,
				selectors: [
					["ng-component"]
				],
				decls: 11,
				vars: 5,
				consts: [
					[1, "tw-flex", "tw-justify-between", "tw-mb-2", "tw-pb-2", "tw-mt-6"],
					["bitTypography", "h2"],
					[4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "openInvoices", "paidInvoices", "transactions"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click", 4, "ngIf"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"]
				],
				template: function(n, t) {
					1 & n && (c.j41(0, "div", 0), c.EFF(1, "\n  "), c.j41(2, "h2", 1), c.EFF(3), c.nI1(4, "i18n"), c.k0s(), c.EFF(5, "\n"), c.k0s(), c.EFF(6, "\n"), c.DNE(7, f, 9, 6, "ng-container", 2), c.EFF(8, "\n"), c.DNE(9, g, 6, 4, "ng-container", 2), c.EFF(10, "\n")), 2 & n && (c.R7$(3), c.SpI("\n    ", c.bMT(4, 3, "billingHistory"), "\n  "), c.R7$(4), c.Y8G("ngIf", !t.firstLoaded && t.loading), c.R7$(2), c.Y8G("ngIf", t.openInvoices || t.paidInvoices || t.transactions))
				},
				dependencies: [F.bT, p.Q, d.r, h.D, m.$],
				encapsulation: 2
			});
			var y = i(83731),
				S = i(51757),
				v = i(44500),
				k = i(33338),
				R = i(73276),
				$ = i(36790),
				T = i(93695),
				j = i(36006),
				w = i(29377),
				U = i(24930),
				G = i(315),
				M = i(39236),
				x = i(12012),
				C = i(58329),
				P = i(1601),
				B = i(50700),
				X = i(69855),
				D = i(83078),
				A = i(76799),
				L = i(35500),
				N = i(26657),
				V = i(45154),
				J = i(44432),
				Y = i(86226),
				H = i(99917),
				_ = i(97553),
				O = i(43759),
				q = i(59032),
				z = i(88832),
				W = i(10010),
				Q = function(n, t, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function r(n) {
							try {
								c(e.next(n))
							} catch (t) {
								s(t)
							}
						}

						function a(n) {
							try {
								c(e.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
								n(t)
							}))).then(r, a)
						}
						c((e = e.apply(n, t || [])).next())
					}))
				};
			class K extends W.X {
				constructor(n, t, i, e, o, s, r) {
					super(t, i, e, s, r), this.apiService = n, this.formBuilder = t, this.i18nService = i, this.platformUtilsService = e, this.syncService = o, this.toastService = s, this.tokenService = r, this.onLicenseFileUploaded = new c.bkB
				}
				submit() {
					const n = Object.create(null, {
						submit: {
							get: () => super.submit
						}
					});
					return Q(this, void 0, void 0, (function*() {
						yield n.submit.call(this);
						const t = new FormData;
						t.append("license", this.formValue.file), yield this.apiService.postAccountLicense(t), yield this.apiService.refreshIdentityToken(), yield this.syncService.fullSync(!0), this.onLicenseFileUploaded.emit()
					}))
				}
				get description() {
					return "uploadLicenseFilePremium"
				}
				get hintFileName() {
					return "bitwarden_premium_license.json"
				}
			}
			K.ɵfac = function(n) {
				return new(n || K)(c.rXU(x.G), c.rXU(S.ok), c.rXU(B.W), c.rXU(l.y), c.rXU(U.H), c.rXU(X.f), c.rXU(D.B))
			}, K.ɵcmp = c.VBU({
				type: K,
				selectors: [
					["individual-self-hosting-license-uploader"]
				],
				outputs: {
					onLicenseFileUploaded: "onLicenseFileUploaded"
				},
				features: [c.Vt3],
				decls: 33,
				vars: 21,
				consts: [
					["fileSelector", ""],
					["bitTypography", "body1"],
					[3, "formGroup", "bitSubmit"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "formControlName", "file", "accept", "application/JSON", "hidden", "", 1, "tw-hidden", 3, "change"],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"]
				],
				template: function(n, t) {
					if (1 & n) {
						const n = c.RV6();
						c.j41(0, "p", 1), c.EFF(1), c.nI1(2, "i18n"), c.k0s(), c.EFF(3, "\n"), c.j41(4, "form", 2), c.EFF(5, "\n  "), c.j41(6, "bit-form-field"), c.EFF(7, "\n    "), c.j41(8, "bit-label"), c.EFF(9), c.nI1(10, "i18n"), c.k0s(), c.EFF(11, "\n    "), c.j41(12, "div"), c.EFF(13, "\n      "), c.j41(14, "button", 3), c.bIt("click", (function() {
							c.eBV(n);
							const t = c.sdS(21);
							return c.Njj(t.click())
						})), c.EFF(15), c.nI1(16, "i18n"), c.k0s(), c.EFF(17), c.nI1(18, "i18n"), c.k0s(), c.EFF(19, "\n    "), c.j41(20, "input", 4, 0), c.bIt("change", (function(i) {
							return c.eBV(n), c.Njj(t.onLicenseFileSelectedChanged(i))
						})), c.k0s(), c.EFF(22, "\n    "), c.j41(23, "bit-hint"), c.EFF(24), c.nI1(25, "i18n"), c.k0s(), c.EFF(26, "\n  "), c.k0s(), c.EFF(27, "\n  "), c.j41(28, "button", 5), c.EFF(29), c.nI1(30, "i18n"), c.k0s(), c.EFF(31, "\n"), c.k0s(), c.EFF(32, "\n")
					}
					2 & n && (c.R7$(), c.JRh(c.bMT(2, 8, "uploadLicenseFileOrg")), c.R7$(3), c.Y8G("formGroup", t.form)("bitSubmit", t.submit), c.R7$(5), c.JRh(c.bMT(10, 10, t.description)), c.R7$(6), c.SpI("\n        ", c.bMT(16, 12, "chooseFile"), "\n      "), c.R7$(2), c.SpI("\n      ", t.form.value.file ? t.form.value.file.name : c.bMT(18, 14, "noFileChosen"), "\n    "), c.R7$(7), c.JRh(c.i5U(25, 16, "licenseFileDesc", t.hintFileName)), c.R7$(5), c.SpI("\n    ", c.bMT(30, 19, "submit"), "\n  "))
				},
				dependencies: [S.qT, S.me, S.BC, S.cb, S.j4, S.JD, N.$, V.L, p.Q, Y.m, H.s, _.J, O.h, d.r, m.$],
				encapsulation: 2
			});
			var Z = function(n, t, i, e) {
				return new(i || (i = Promise))((function(o, s) {
					function r(n) {
						try {
							c(e.next(n))
						} catch (t) {
							s(t)
						}
					}

					function a(n) {
						try {
							c(e.throw(n))
						} catch (t) {
							s(t)
						}
					}

					function c(n) {
						var t;
						n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
							n(t)
						}))).then(r, a)
					}
					c((e = e.apply(n, t || [])).next())
				}))
			};
			const nn = n => ({
					"tw-mb-0": n
				}),
				tn = () => ({
					plan: "families"
				});

			function en(n, t) {
				1 & n && (c.j41(0, "h2", 11), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n && (c.R7$(), c.JRh(c.bMT(2, 1, "goPremium")))
			}

			function on(n, t) {
				1 & n && (c.j41(0, "bit-callout", 12), c.nI1(1, "i18n"), c.EFF(2), c.nI1(3, "i18n"), c.k0s()), 2 & n && (c.FS9("title", c.bMT(1, 2, "youHavePremiumAccess")), c.R7$(2), c.SpI("\n    ", c.bMT(3, 4, "alreadyPremiumFromOrg"), "\n  "))
			}

			function sn(n, t) {
				if (1 & n && (c.j41(0, "a", 13), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n) {
					const n = c.XpG();
					c.Mz_("href", "", n.premiumURL, "}", c.B4B), c.R7$(), c.SpI("\n      ", c.bMT(2, 3, "purchasePremium"), "\n    ")
				}
			}

			function rn(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.qex(0), c.EFF(1, "\n    "), c.j41(2, "p", 15), c.EFF(3), c.nI1(4, "i18n"), c.k0s(), c.EFF(5, "\n    "), c.j41(6, "form", 16), c.EFF(7, "\n      "), c.j41(8, "bit-form-field"), c.EFF(9, "\n        "), c.j41(10, "bit-label"), c.EFF(11), c.nI1(12, "i18n"), c.k0s(), c.EFF(13, "\n        "), c.j41(14, "div"), c.EFF(15, "\n          "), c.j41(16, "button", 17), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.sdS(23);
						return c.Njj(t.click())
					})), c.EFF(17), c.nI1(18, "i18n"), c.k0s(), c.EFF(19), c.nI1(20, "i18n"), c.k0s(), c.EFF(21, "\n        "), c.j41(22, "input", 18, 0), c.bIt("change", (function(t) {
						c.eBV(n);
						const i = c.XpG(2);
						return c.Njj(i.onLicenseFileSelected(t))
					})), c.k0s(), c.EFF(24, "\n        "), c.j41(25, "bit-hint"), c.EFF(26), c.nI1(27, "i18n"), c.k0s(), c.EFF(28, "\n      "), c.k0s(), c.EFF(29, "\n      "), c.j41(30, "button", 19), c.EFF(31), c.nI1(32, "i18n"), c.k0s(), c.EFF(33, "\n    "), c.k0s(), c.EFF(34, "\n  "), c.bVm()
				}
				if (2 & n) {
					const n = c.XpG(2);
					c.R7$(3), c.JRh(c.bMT(4, 8, "uploadLicenseFilePremium")), c.R7$(3), c.Y8G("formGroup", n.licenseFormGroup)("bitSubmit", n.submitPremiumLicense), c.R7$(5), c.JRh(c.bMT(12, 10, "licenseFile")), c.R7$(6), c.SpI("\n            ", c.bMT(18, 12, "chooseFile"), "\n          "), c.R7$(2), c.SpI("\n          ", n.licenseFormGroup.value.file ? n.licenseFormGroup.value.file.name : c.bMT(20, 14, "noFileChosen"), "\n        "), c.R7$(7), c.JRh(c.i5U(27, 16, "licenseFileDesc", "bitwarden_premium_license.json")), c.R7$(5), c.SpI("\n        ", c.bMT(32, 19, "submit"), "\n      ")
				}
			}

			function an(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "individual-self-hosting-license-uploader", 20), c.bIt("onLicenseFileUploaded", (function() {
						c.eBV(n);
						const t = c.XpG(2);
						return c.Njj(t.onLicenseFileSelectedChanged())
					})), c.k0s()
				}
			}

			function cn(n, t) {
				if (1 & n && (c.j41(0, "bit-section"), c.EFF(1, "\n  "), c.DNE(2, rn, 35, 21, "ng-container", 9), c.nI1(3, "async"), c.EFF(4, "\n  "), c.DNE(5, an, 1, 0, "individual-self-hosting-license-uploader", 14), c.nI1(6, "async"), c.EFF(7, "\n"), c.k0s()), 2 & n) {
					const n = c.XpG();
					c.R7$(2), c.Y8G("ngIf", !c.bMT(3, 2, n.useLicenseUploaderComponent$)), c.R7$(3), c.Y8G("ngIf", c.bMT(6, 4, n.useLicenseUploaderComponent$))
				}
			}

			function ln(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "form", 16), c.EFF(1, "\n  "), c.j41(2, "bit-section"), c.EFF(3, "\n    "), c.j41(4, "h2", 11), c.EFF(5), c.nI1(6, "i18n"), c.k0s(), c.EFF(7, "\n    "), c.j41(8, "div", 21), c.EFF(9, "\n      "), c.j41(10, "bit-form-field", 22), c.EFF(11, "\n        "), c.j41(12, "bit-label"), c.EFF(13), c.nI1(14, "i18n"), c.k0s(), c.EFF(15, "\n        "), c.nrm(16, "input", 23), c.nI1(17, "i18n"), c.EFF(18, "\n        "), c.j41(19, "bit-hint"), c.EFF(20), c.nI1(21, "currency"), c.nI1(22, "i18n"), c.nI1(23, "i18n"), c.k0s(), c.EFF(24, "\n      "), c.k0s(), c.EFF(25, "\n    "), c.k0s(), c.EFF(26, "\n  "), c.k0s(), c.EFF(27, "\n  "), c.j41(28, "bit-section"), c.EFF(29, "\n    "), c.j41(30, "h2", 11), c.EFF(31), c.nI1(32, "i18n"), c.k0s(), c.EFF(33), c.nI1(34, "i18n"), c.nI1(35, "currency"), c.nrm(36, "br"), c.EFF(37), c.nI1(38, "i18n"), c.nI1(39, "currency"), c.nI1(40, "currency"), c.nrm(41, "hr", 24), c.EFF(42, "\n  "), c.k0s(), c.EFF(43, "\n  "), c.j41(44, "bit-section"), c.EFF(45, "\n    "), c.j41(46, "h3", 11), c.EFF(47), c.nI1(48, "i18n"), c.k0s(), c.EFF(49, "\n    "), c.nrm(50, "app-payment-v2", 25), c.EFF(51, "\n    "), c.j41(52, "app-tax-info", 26), c.bIt("taxInformationChanged", (function() {
						c.eBV(n);
						const t = c.XpG();
						return c.Njj(t.onTaxInformationChanged())
					})), c.k0s(), c.EFF(53, "\n    "), c.j41(54, "div", 27), c.EFF(55, "\n      "), c.j41(56, "div", 28), c.EFF(57, "\n        "), c.j41(58, "span"), c.EFF(59), c.nI1(60, "i18n"), c.nI1(61, "currency"), c.k0s(), c.EFF(62, "\n        "), c.j41(63, "span"), c.EFF(64), c.nI1(65, "i18n"), c.nI1(66, "currency"), c.k0s(), c.EFF(67, "\n      "), c.k0s(), c.EFF(68, "\n    "), c.k0s(), c.EFF(69, "\n    "), c.nrm(70, "hr", 29), c.EFF(71, "\n    "), c.j41(72, "p", 15), c.EFF(73, "\n      "), c.j41(74, "strong"), c.EFF(75), c.nI1(76, "i18n"), c.k0s(), c.EFF(77), c.nI1(78, "currency"), c.nI1(79, "i18n"), c.k0s(), c.EFF(80, "\n    "), c.j41(81, "button", 19), c.EFF(82), c.nI1(83, "i18n"), c.k0s(), c.EFF(84, "\n  "), c.k0s(), c.EFF(85, "\n"), c.k0s()
				}
				if (2 & n) {
					const n = c.XpG();
					c.Y8G("formGroup", n.addOnFormGroup)("bitSubmit", n.submitPayment), c.R7$(5), c.JRh(c.bMT(6, 23, "addons")), c.R7$(8), c.JRh(c.bMT(14, 25, "additionalStorageGb")), c.R7$(3), c.FS9("placeholder", c.bMT(17, 27, "additionalStorageGbDesc")), c.R7$(4), c.JRh(c.ii3(23, 34, "additionalStorageIntervalDesc", "1 GB", c.i5U(21, 29, n.storageGBPrice, "$"), c.bMT(22, 32, "year"))), c.R7$(11), c.JRh(c.bMT(32, 39, "summary")), c.R7$(2), c.Lme("\n    ", c.bMT(34, 41, "premiumMembership"), ": ", c.i5U(35, 43, n.premiumPrice, "$"), " "), c.R7$(4), c.LHq("\n    ", c.bMT(38, 46, "additionalStorageGb"), ": ", n.addOnFormGroup.value.additionalStorage || 0, " GB ×\n    ", c.i5U(39, 48, n.storageGBPrice, "$"), " =\n    ", c.i5U(40, 51, n.additionalStorageCost, "$"), "\n    "), c.R7$(10), c.JRh(c.bMT(48, 54, "paymentInformation")), c.R7$(3), c.Y8G("showBankAccount", !1), c.R7$(9), c.Lme("", c.bMT(60, 56, "planPrice"), ": ", c.i5U(61, 58, n.subtotal, "USD $"), ""), c.R7$(5), c.Lme("", c.bMT(65, 61, "estimatedTax"), ": ", c.i5U(66, 63, n.estimatedTax, "USD $"), ""), c.R7$(11), c.SpI("", c.bMT(76, 66, "total"), ":"), c.R7$(2), c.Lme(" ", c.i5U(78, 68, n.total, "USD $"), "/", c.bMT(79, 71, "year"), "\n    "), c.R7$(5), c.SpI("\n      ", c.bMT(83, 73, "submit"), "\n    ")
				}
			}
			class un {
				constructor(n, t, i, e, o, s, r, c, l, u, F, p, d) {
					this.activatedRoute = n, this.apiService = t, this.billingAccountProfileStateService = i, this.configService = e, this.environmentService = o, this.i18nService = s, this.platformUtilsService = r, this.router = c, this.syncService = l, this.toastService = u, this.tokenService = F, this.taxService = p, this.accountService = d, this.addOnFormGroup = new S.gE({
						additionalStorage: new S.MJ(0, [S.k0.min(0), S.k0.max(99)])
					}), this.licenseFormGroup = new S.gE({
						file: new S.MJ(null, [S.k0.required])
					}), this.isSelfHost = !1, this.useLicenseUploaderComponent$ = this.configService.getFeatureFlag$(a.T.PM11901_RefactorSelfHostingLicenseUploader), this.estimatedTax = 0, this.familyPlanMaxUserCount = 6, this.premiumPrice = 10, this.storageGBPrice = 4, this.finalizeUpgrade = () => Z(this, void 0, void 0, (function*() {
						yield this.apiService.refreshIdentityToken(), yield this.syncService.fullSync(!0)
					})), this.postFinalizeUpgrade = () => Z(this, void 0, void 0, (function*() {
						this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("premiumUpdated")
						}), yield this.navigateToSubscriptionPage()
					})), this.navigateToSubscriptionPage = () => this.router.navigate(["../user-subscription"], {
						relativeTo: this.activatedRoute
					}), this.onLicenseFileSelected = n => {
						const t = n.target;
						this.licenseFormGroup.value.file = t.files.length > 0 ? t.files[0] : null
					}, this.submitPremiumLicense = () => Z(this, void 0, void 0, (function*() {
						if (this.licenseFormGroup.markAllAsTouched(), this.licenseFormGroup.invalid) return this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("selectFile")
						});
						if (!(yield this.tokenService.getEmailVerified())) return this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("verifyEmailFirst")
						});
						const n = new FormData;
						n.append("license", this.licenseFormGroup.value.file), yield this.apiService.postAccountLicense(n), yield this.finalizeUpgrade(), yield this.postFinalizeUpgrade()
					})), this.submitPayment = () => Z(this, void 0, void 0, (function*() {
						if (this.taxInfoComponent.taxFormGroup.markAllAsTouched(), this.taxInfoComponent.taxFormGroup.invalid) return;
						const {
							type: n,
							token: t
						} = yield this.paymentComponent.tokenize(), i = new FormData;
						i.append("paymentMethodType", n.toString()), i.append("paymentToken", t), i.append("additionalStorageGb", this.addOnFormGroup.value.additionalStorage.toString()), i.append("country", this.taxInfoComponent.country), i.append("postalCode", this.taxInfoComponent.postalCode), yield this.apiService.postPremium(i), yield this.finalizeUpgrade(), yield this.postFinalizeUpgrade()
					})), this.isSelfHost = this.platformUtilsService.isSelfHost(), this.hasPremiumFromAnyOrganization$ = this.accountService.activeAccount$.pipe((0, v.n)((n => this.billingAccountProfileStateService.hasPremiumFromAnyOrganization$(n.id)))), (0, k.z)([this.accountService.activeAccount$.pipe((0, v.n)((n => this.billingAccountProfileStateService.hasPremiumPersonally$(n.id)))), this.environmentService.cloudWebVaultUrl$]).pipe((0, y.pQ)(), (0, R.H)((([n, t]) => n ? (0, $.H)(this.navigateToSubscriptionPage()) : (this.cloudWebVaultURL = t, (0, T.of)(!0))))).subscribe(), this.addOnFormGroup.controls.additionalStorage.valueChanges.pipe((0, j.B)(1e3), (0, y.pQ)()).subscribe((() => {
						this.refreshSalesTax()
					}))
				}
				get additionalStorageCost() {
					return this.storageGBPrice * this.addOnFormGroup.value.additionalStorage
				}
				get premiumURL() {
					return `${this.cloudWebVaultURL}/#/settings/subscription/premium`
				}
				get subtotal() {
					return this.premiumPrice + this.additionalStorageCost
				}
				get total() {
					return this.subtotal + this.estimatedTax
				}
				onLicenseFileSelectedChanged() {
					return Z(this, void 0, void 0, (function*() {
						yield this.postFinalizeUpgrade()
					}))
				}
				refreshSalesTax() {
					if (!this.taxInfoComponent.country || !this.taxInfoComponent.postalCode) return;
					const n = {
						passwordManager: {
							additionalStorage: this.addOnFormGroup.value.additionalStorage
						},
						taxInformation: {
							postalCode: this.taxInfoComponent.postalCode,
							country: this.taxInfoComponent.country
						}
					};
					this.taxService.previewIndividualInvoice(n).then((n => {
						this.estimatedTax = n.taxAmount
					})).catch((n => {
						this.toastService.showToast({
							title: "",
							variant: "error",
							message: this.i18nService.t(n.message)
						})
					}))
				}
				onTaxInformationChanged() {
					this.refreshSalesTax()
				}
			}
			un.ɵfac = function(n) {
				return new(n || un)(c.rXU(s.nX), c.rXU(x.G), c.rXU(C.Q), c.rXU(P.w), c.rXU(w.v), c.rXU(B.W), c.rXU(l.y), c.rXU(s.Ix), c.rXU(U.H), c.rXU(X.f), c.rXU(D.B), c.rXU(A.j), c.rXU(L.Di))
			}, un.ɵcmp = c.VBU({
				type: un,
				selectors: [
					["ng-component"]
				],
				viewQuery: function(n, t) {
					if (1 & n && (c.GBs(G.u, 5), c.GBs(M.d, 5)), 2 & n) {
						let n;
						c.mGM(n = c.lsd()) && (t.paymentComponent = n.first), c.mGM(n = c.lsd()) && (t.taxInfoComponent = n.first)
					}
				},
				decls: 75,
				vars: 47,
				consts: [
					["fileSelector", ""],
					["bitTypography", "h2", 4, "ngIf"],
					["type", "info", "icon", "bwi bwi-star-f", 3, "title", 4, "ngIf"],
					["type", "success"],
					[1, "bwi-ul"],
					["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success", "bwi-li"],
					["bitTypography", "body1", 3, "ngClass"],
					["bitLink", "", "linkType", "primary", "routerLink", "/create-organization", 3, "queryParams"],
					["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href", 4, "ngIf"],
					[4, "ngIf"],
					[3, "formGroup", "bitSubmit", 4, "ngIf"],
					["bitTypography", "h2"],
					["type", "info", "icon", "bwi bwi-star-f", 3, "title"],
					["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href"],
					[3, "onLicenseFileUploaded", 4, "ngIf"],
					["bitTypography", "body1"],
					[3, "formGroup", "bitSubmit"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"],
					["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""],
					[3, "onLicenseFileUploaded"],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"],
					[1, "tw-col-span-6"],
					["bitInput", "", "formControlName", "additionalStorage", "type", "number", "step", "1", 3, "placeholder"],
					[1, "tw-my-3"],
					[3, "showBankAccount"],
					[3, "taxInformationChanged"],
					[1, "tw-mb-4"],
					[1, "tw-text-muted", "tw-text-sm", "tw-flex", "tw-flex-col"],
					[1, "tw-my-1", "tw-w-1/4", "tw-ml-0"]
				],
				template: function(n, t) {
					1 & n && (c.j41(0, "bit-section"), c.EFF(1, "\n  "), c.DNE(2, en, 3, 3, "h2", 1), c.EFF(3, "\n  "), c.DNE(4, on, 4, 6, "bit-callout", 2), c.nI1(5, "async"), c.EFF(6, "\n  "), c.j41(7, "bit-callout", 3), c.EFF(8, "\n    "), c.j41(9, "p"), c.EFF(10), c.nI1(11, "i18n"), c.k0s(), c.EFF(12, "\n    "), c.j41(13, "ul", 4), c.EFF(14, "\n      "), c.j41(15, "li"), c.EFF(16, "\n        "), c.nrm(17, "i", 5), c.EFF(18), c.nI1(19, "i18n"), c.k0s(), c.EFF(20, "\n      "), c.j41(21, "li"), c.EFF(22, "\n        "), c.nrm(23, "i", 5), c.EFF(24), c.nI1(25, "i18n"), c.k0s(), c.EFF(26, "\n      "), c.j41(27, "li"), c.EFF(28, "\n        "), c.nrm(29, "i", 5), c.EFF(30), c.nI1(31, "i18n"), c.k0s(), c.EFF(32, "\n      "), c.j41(33, "li"), c.EFF(34, "\n        "), c.nrm(35, "i", 5), c.EFF(36), c.nI1(37, "i18n"), c.k0s(), c.EFF(38, "\n      "), c.j41(39, "li"), c.EFF(40, "\n        "), c.nrm(41, "i", 5), c.EFF(42), c.nI1(43, "i18n"), c.k0s(), c.EFF(44, "\n      "), c.j41(45, "li"), c.EFF(46, "\n        "), c.nrm(47, "i", 5), c.EFF(48), c.nI1(49, "i18n"), c.k0s(), c.EFF(50, "\n      "), c.j41(51, "li"), c.EFF(52, "\n        "), c.nrm(53, "i", 5), c.EFF(54), c.nI1(55, "i18n"), c.k0s(), c.EFF(56, "\n    "), c.k0s(), c.EFF(57, "\n    "), c.j41(58, "p", 6), c.EFF(59), c.nI1(60, "currency"), c.nI1(61, "i18n"), c.j41(62, "a", 7), c.EFF(63), c.nI1(64, "i18n"), c.k0s(), c.EFF(65, "\n    "), c.k0s(), c.EFF(66, "\n    "), c.DNE(67, sn, 3, 5, "a", 8), c.EFF(68, "\n  "), c.k0s(), c.EFF(69, "\n"), c.k0s(), c.EFF(70, "\n"), c.DNE(71, cn, 8, 6, "bit-section", 9), c.EFF(72, "\n"), c.DNE(73, ln, 86, 75, "form", 10), c.EFF(74, "\n")), 2 & n && (c.R7$(2), c.Y8G("ngIf", !t.isSelfHost), c.R7$(2), c.Y8G("ngIf", c.bMT(5, 17, t.hasPremiumFromAnyOrganization$)), c.R7$(6), c.JRh(c.bMT(11, 19, "premiumUpgradeUnlockFeatures")), c.R7$(8), c.SpI("\n        ", c.bMT(19, 21, "premiumSignUpStorage"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(25, 23, "premiumSignUpTwoStepOptions"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(31, 25, "premiumSignUpEmergency"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(37, 27, "premiumSignUpReports"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(43, 29, "premiumSignUpTotp"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(49, 31, "premiumSignUpSupport"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(55, 33, "premiumSignUpFuture"), "\n      "), c.R7$(4), c.Y8G("ngClass", c.eq3(44, nn, !t.isSelfHost)), c.R7$(), c.SpI("\n      ", c.brH(61, 38, "premiumPriceWithFamilyPlan", c.i5U(60, 35, t.premiumPrice, "$"), t.familyPlanMaxUserCount), "\n      "), c.R7$(3), c.Y8G("queryParams", c.lJ4(46, tn)), c.R7$(), c.SpI("\n        ", c.bMT(64, 42, "bitwardenFamiliesPlan"), "\n      "), c.R7$(4), c.Y8G("ngIf", t.isSelfHost), c.R7$(4), c.Y8G("ngIf", t.isSelfHost), c.R7$(2), c.Y8G("ngIf", !t.isSelfHost))
				},
				dependencies: [s.Wk, F.YU, F.bT, S.qT, S.me, S.Q0, S.BC, S.cb, S.j4, S.JD, N.$, V.L, p.Q, J.G, Y.m, H.s, _.J, O.h, q.L, z.n, d.r, M.d, G.u, K, F.Jj, F.oe, m.$],
				encapsulation: 2
			});
			var Fn = i(72245),
				pn = i(83516),
				dn = i(39488),
				hn = i(26231),
				mn = function(n, t, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function r(n) {
							try {
								c(e.next(n))
							} catch (t) {
								s(t)
							}
						}

						function a(n) {
							try {
								c(e.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
								n(t)
							}))).then(r, a)
						}
						c((e = e.apply(n, t || [])).next())
					}))
				};
			const bn = n => ({
					"tw-mb-0": n
				}),
				fn = () => ({
					plan: "families"
				});

			function En(n, t) {
				1 & n && (c.j41(0, "h2", 11), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n && (c.R7$(), c.JRh(c.bMT(2, 1, "goPremium")))
			}

			function gn(n, t) {
				1 & n && (c.j41(0, "bit-callout", 12), c.nI1(1, "i18n"), c.EFF(2), c.nI1(3, "i18n"), c.k0s()), 2 & n && (c.FS9("title", c.bMT(1, 2, "youHavePremiumAccess")), c.R7$(2), c.SpI("\n    ", c.bMT(3, 4, "alreadyPremiumFromOrg"), "\n  "))
			}

			function In(n, t) {
				if (1 & n && (c.j41(0, "a", 13), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n) {
					const n = c.XpG();
					c.Mz_("href", "", n.cloudWebVaultUrl, "/#/settings/subscription/premium", c.B4B), c.R7$(), c.SpI("\n      ", c.bMT(2, 3, "purchasePremium"), "\n    ")
				}
			}

			function yn(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "bit-section"), c.EFF(1, "\n  "), c.j41(2, "p", 14), c.EFF(3), c.nI1(4, "i18n"), c.k0s(), c.EFF(5, "\n  "), c.j41(6, "form", 15), c.EFF(7, "\n    "), c.j41(8, "bit-form-field"), c.EFF(9, "\n      "), c.j41(10, "bit-label"), c.EFF(11), c.nI1(12, "i18n"), c.k0s(), c.EFF(13, "\n      "), c.j41(14, "div", 16), c.EFF(15, "\n        "), c.j41(16, "button", 17), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.sdS(23);
						return c.Njj(t.click())
					})), c.EFF(17), c.nI1(18, "i18n"), c.k0s(), c.EFF(19), c.nI1(20, "i18n"), c.k0s(), c.EFF(21, "\n      "), c.j41(22, "input", 18, 0), c.bIt("change", (function(t) {
						c.eBV(n);
						const i = c.XpG();
						return c.Njj(i.setSelectedFile(t))
					})), c.k0s(), c.EFF(24, "\n      "), c.j41(25, "bit-hint"), c.EFF(26), c.nI1(27, "i18n"), c.k0s(), c.EFF(28, "\n    "), c.k0s(), c.EFF(29, "\n    "), c.j41(30, "button", 19), c.EFF(31), c.nI1(32, "i18n"), c.k0s(), c.EFF(33, "\n  "), c.k0s(), c.EFF(34, "\n"), c.k0s()
				}
				if (2 & n) {
					const n = c.XpG();
					c.R7$(3), c.JRh(c.bMT(4, 8, "uploadLicenseFilePremium")), c.R7$(3), c.Y8G("formGroup", n.licenseForm)("bitSubmit", n.submit), c.R7$(5), c.JRh(c.bMT(12, 10, "licenseFile")), c.R7$(6), c.SpI("\n          ", c.bMT(18, 12, "chooseFile"), "\n        "), c.R7$(2), c.SpI("\n        ", n.licenseFile ? n.licenseFile.name : c.bMT(20, 14, "noFileChosen"), "\n      "), c.R7$(7), c.JRh(c.i5U(27, 16, "licenseFileDesc", "bitwarden_premium_license.json")), c.R7$(5), c.SpI("\n      ", c.bMT(32, 19, "submit"), "\n    ")
				}
			}

			function Sn(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "form", 15), c.EFF(1, "\n  "), c.j41(2, "bit-section"), c.EFF(3, "\n    "), c.j41(4, "h2", 11), c.EFF(5), c.nI1(6, "i18n"), c.k0s(), c.EFF(7, "\n    "), c.j41(8, "div", 20), c.EFF(9, "\n      "), c.j41(10, "bit-form-field", 21), c.EFF(11, "\n        "), c.j41(12, "bit-label"), c.EFF(13), c.nI1(14, "i18n"), c.k0s(), c.EFF(15, "\n        "), c.nrm(16, "input", 22), c.nI1(17, "i18n"), c.EFF(18, "\n        "), c.j41(19, "bit-hint"), c.EFF(20), c.nI1(21, "currency"), c.nI1(22, "i18n"), c.nI1(23, "i18n"), c.k0s(), c.EFF(24, "\n      "), c.k0s(), c.EFF(25, "\n    "), c.k0s(), c.EFF(26, "\n  "), c.k0s(), c.EFF(27, "\n  "), c.j41(28, "bit-section"), c.EFF(29, "\n    "), c.j41(30, "h2", 11), c.EFF(31), c.nI1(32, "i18n"), c.k0s(), c.EFF(33), c.nI1(34, "i18n"), c.nI1(35, "currency"), c.nrm(36, "br"), c.EFF(37), c.nI1(38, "i18n"), c.nI1(39, "currency"), c.nI1(40, "currency"), c.nrm(41, "hr", 23), c.EFF(42, "\n  "), c.k0s(), c.EFF(43, "\n  "), c.j41(44, "bit-section"), c.EFF(45, "\n    "), c.j41(46, "h3", 11), c.EFF(47), c.nI1(48, "i18n"), c.k0s(), c.EFF(49, "\n    "), c.nrm(50, "app-payment", 24), c.EFF(51, "\n    "), c.j41(52, "app-tax-info", 25), c.bIt("taxInformationChanged", (function() {
						c.eBV(n);
						const t = c.XpG();
						return c.Njj(t.onTaxInformationChanged())
					})), c.k0s(), c.EFF(53, "\n    "), c.j41(54, "div", 26), c.EFF(55, "\n      "), c.j41(56, "div", 27), c.EFF(57), c.nI1(58, "i18n"), c.nI1(59, "currency"), c.nrm(60, "br"), c.EFF(61, "\n        "), c.qex(62), c.EFF(63), c.nI1(64, "i18n"), c.nI1(65, "currency"), c.bVm(), c.EFF(66, "\n      "), c.k0s(), c.EFF(67, "\n      "), c.nrm(68, "hr", 28), c.EFF(69, "\n      "), c.j41(70, "p", 14), c.EFF(71, "\n        "), c.j41(72, "strong"), c.EFF(73), c.nI1(74, "i18n"), c.k0s(), c.EFF(75), c.nI1(76, "currency"), c.nI1(77, "i18n"), c.k0s(), c.EFF(78, "\n    "), c.k0s(), c.EFF(79, "\n    "), c.j41(80, "p", 29), c.EFF(81), c.nI1(82, "i18n"), c.k0s(), c.EFF(83, "\n    "), c.j41(84, "button", 30), c.EFF(85), c.nI1(86, "i18n"), c.k0s(), c.EFF(87, "\n  "), c.k0s(), c.EFF(88, "\n"), c.k0s()
				}
				if (2 & n) {
					const n = c.XpG();
					c.Y8G("formGroup", n.addonForm)("bitSubmit", n.submit), c.R7$(5), c.JRh(c.bMT(6, 24, "addons")), c.R7$(8), c.JRh(c.bMT(14, 26, "additionalStorageGb")), c.R7$(3), c.FS9("placeholder", c.bMT(17, 28, "additionalStorageGbDesc")), c.R7$(4), c.JRh(c.ii3(23, 35, "additionalStorageIntervalDesc", "1 GB", c.i5U(21, 30, n.storageGbPrice, "$"), c.bMT(22, 33, "year"))), c.R7$(11), c.JRh(c.bMT(32, 40, "summary")), c.R7$(2), c.Lme("\n    ", c.bMT(34, 42, "premiumMembership"), ": ", c.i5U(35, 44, n.premiumPrice, "$"), " "), c.R7$(4), c.LHq("\n    ", c.bMT(38, 47, "additionalStorageGb"), ": ", n.additionalStorage || 0, " GB ×\n    ", c.i5U(39, 49, n.storageGbPrice, "$"), " =\n    ", c.i5U(40, 52, n.additionalStorageTotal, "$"), "\n    "), c.R7$(10), c.JRh(c.bMT(48, 55, "paymentInformation")), c.R7$(3), c.Y8G("hideBank", !0), c.R7$(7), c.Lme("\n        ", c.bMT(58, 57, "planPrice"), ": ", c.i5U(59, 59, n.subtotal, "USD $"), "\n        "), c.R7$(6), c.Lme("\n          ", c.bMT(64, 62, "estimatedTax"), ": ", c.i5U(65, 64, n.taxCharges, "USD $"), "\n        "), c.R7$(10), c.SpI("", c.bMT(74, 67, "total"), ":"), c.R7$(2), c.Lme(" ", c.i5U(76, 69, n.total, "USD $"), "/", c.bMT(77, 72, "year"), "\n      "), c.R7$(6), c.JRh(c.bMT(82, 74, "paymentChargedAnnually")), c.R7$(4), c.SpI("\n      ", c.bMT(86, 76, "submit"), "\n    ")
				}
			}
			class vn {
				constructor(n, t, i, e, o, s, r, a, c, l, u, F) {
					this.apiService = n, this.i18nService = t, this.platformUtilsService = i, this.tokenService = e, this.router = o, this.messagingService = s, this.syncService = r, this.environmentService = a, this.billingAccountProfileStateService = c, this.toastService = l, this.taxService = u, this.accountService = F, this.selfHosted = !1, this.premiumPrice = 10, this.familyPlanMaxUserCount = 6, this.storageGbPrice = 4, this.licenseFile = null, this.licenseForm = new S.gE({
						file: new S.MJ(null, [S.k0.required])
					}), this.addonForm = new S.gE({
						additionalStorage: new S.MJ(0, [S.k0.max(99), S.k0.min(0)])
					}), this.estimatedTax = 0, this.submit = () => mn(this, void 0, void 0, (function*() {
						var n;
						if (!this.taxInfoComponent || (null === (n = this.taxInfoComponent) || void 0 === n ? void 0 : n.taxFormGroup.valid))
							if (this.licenseForm.markAllAsTouched(), this.addonForm.markAllAsTouched(), this.selfHosted && null == this.licenseFile) this.toastService.showToast({
								variant: "error",
								title: this.i18nService.t("errorOccurred"),
								message: this.i18nService.t("selectFile")
							});
							else if (this.selfHosted) {
							if (!this.tokenService.getEmailVerified()) return void this.toastService.showToast({
								variant: "error",
								title: this.i18nService.t("errorOccurred"),
								message: this.i18nService.t("verifyEmailFirst")
							});
							const n = new FormData;
							n.append("license", this.licenseFile), yield this.apiService.postAccountLicense(n).then((() => this.finalizePremium()))
						} else yield this.paymentComponent.createPaymentToken().then((n => {
							var t, i, e, o;
							const s = new FormData;
							return s.append("paymentMethodType", n[1].toString()), null != n[0] && s.append("paymentToken", n[0]), s.append("additionalStorageGb", (this.additionalStorage || 0).toString()), s.append("country", null === (i = null === (t = this.taxInfoComponent) || void 0 === t ? void 0 : t.taxFormGroup) || void 0 === i ? void 0 : i.value.country), s.append("postalCode", null === (o = null === (e = this.taxInfoComponent) || void 0 === e ? void 0 : e.taxFormGroup) || void 0 === o ? void 0 : o.value.postalCode), this.apiService.postPremium(s)
						})).then((n => n.success || null == n.paymentIntentClientSecret ? this.finalizePremium() : this.paymentComponent.handleStripeCardPayment(n.paymentIntentClientSecret, (() => this.finalizePremium()))));
						else this.taxInfoComponent.taxFormGroup.markAllAsTouched()
					})), this.selfHosted = i.isSelfHost(), this.canAccessPremium$ = this.accountService.activeAccount$.pipe((0, v.n)((n => this.billingAccountProfileStateService.hasPremiumFromAnySource$(n.id)))), this.addonForm.controls.additionalStorage.valueChanges.pipe((0, j.B)(1e3), (0, y.pQ)()).subscribe((() => {
						this.refreshSalesTax()
					}))
				}
				setSelectedFile(n) {
					const t = n.target,
						i = t.files.length > 0 ? t.files[0] : null;
					this.licenseFile = i
				}
				ngOnInit() {
					return mn(this, void 0, void 0, (function*() {
						this.cloudWebVaultUrl = yield(0, Fn._)(this.environmentService.cloudWebVaultUrl$);
						const n = yield(0, Fn._)(this.accountService.activeAccount$);
						(yield(0, Fn._)(this.billingAccountProfileStateService.hasPremiumPersonally$(n.id))) && this.router.navigate(["/settings/subscription/user-subscription"])
					}))
				}
				finalizePremium() {
					return mn(this, void 0, void 0, (function*() {
						yield this.apiService.refreshIdentityToken(), yield this.syncService.fullSync(!0), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("premiumUpdated")
						}), yield this.router.navigate(["/settings/subscription/user-subscription"])
					}))
				}
				get additionalStorage() {
					return this.addonForm.get("additionalStorage").value
				}
				get additionalStorageTotal() {
					return this.storageGbPrice * Math.abs(this.additionalStorage || 0)
				}
				get subtotal() {
					return this.premiumPrice + this.additionalStorageTotal
				}
				get taxCharges() {
					return this.estimatedTax
				}
				get total() {
					return this.subtotal + this.taxCharges || 0
				}
				refreshSalesTax() {
					if (!this.taxInfoComponent.country || !this.taxInfoComponent.postalCode) return;
					const n = {
						passwordManager: {
							additionalStorage: this.addonForm.value.additionalStorage
						},
						taxInformation: {
							postalCode: this.taxInfoComponent.postalCode,
							country: this.taxInfoComponent.country
						}
					};
					this.taxService.previewIndividualInvoice(n).then((n => {
						this.estimatedTax = n.taxAmount
					})).catch((n => {
						this.toastService.showToast({
							title: "",
							variant: "error",
							message: this.i18nService.t(n.message)
						})
					}))
				}
				onTaxInformationChanged() {
					this.refreshSalesTax()
				}
			}
			vn.ɵfac = function(n) {
				return new(n || vn)(c.rXU(x.G), c.rXU(B.W), c.rXU(l.y), c.rXU(D.B), c.rXU(s.Ix), c.rXU(pn.U), c.rXU(dn.H), c.rXU(w.v), c.rXU(C.Q), c.rXU(X.f), c.rXU(A.j), c.rXU(L.Di))
			}, vn.ɵcmp = c.VBU({
				type: vn,
				selectors: [
					["ng-component"]
				],
				viewQuery: function(n, t) {
					if (1 & n && (c.GBs(o.Yd, 5), c.GBs(o.dW, 5)), 2 & n) {
						let n;
						c.mGM(n = c.lsd()) && (t.paymentComponent = n.first), c.mGM(n = c.lsd()) && (t.taxInfoComponent = n.first)
					}
				},
				decls: 75,
				vars: 47,
				consts: [
					["fileSelector", ""],
					["bitTypography", "h2", 4, "ngIf"],
					["type", "info", "icon", "bwi bwi-star-f", 3, "title", 4, "ngIf"],
					["type", "success"],
					[1, "bwi-ul"],
					["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success", "bwi-li"],
					["bitTypography", "body1", 3, "ngClass"],
					["bitLink", "", "linkType", "primary", "routerLink", "/create-organization", 3, "queryParams"],
					["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href", 4, "ngIf"],
					[4, "ngIf"],
					[3, "formGroup", "bitSubmit", 4, "ngIf"],
					["bitTypography", "h2"],
					["type", "info", "icon", "bwi bwi-star-f", 3, "title"],
					["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href"],
					["bitTypography", "body1"],
					[3, "formGroup", "bitSubmit"],
					[1, "tw-pt-2", "tw-pb-1"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"],
					["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"],
					[1, "tw-col-span-6"],
					["bitInput", "", "formControlName", "additionalStorage", "type", "number", "step", "1", 3, "placeholder"],
					[1, "tw-my-3"],
					[3, "hideBank"],
					[3, "taxInformationChanged"],
					["id", "price", 1, "tw-my-4"],
					[1, "tw-text-muted", "tw-text-sm"],
					[1, "tw-my-1", "tw-w-1/4", "tw-ml-0"],
					["bitTypography", "body2"],
					["type", "submit", "bitButton", "", "bitFormButton", ""]
				],
				template: function(n, t) {
					1 & n && (c.j41(0, "bit-section"), c.EFF(1, "\n  "), c.DNE(2, En, 3, 3, "h2", 1), c.EFF(3, "\n  "), c.DNE(4, gn, 4, 6, "bit-callout", 2), c.nI1(5, "async"), c.EFF(6, "\n  "), c.j41(7, "bit-callout", 3), c.EFF(8, "\n    "), c.j41(9, "p"), c.EFF(10), c.nI1(11, "i18n"), c.k0s(), c.EFF(12, "\n    "), c.j41(13, "ul", 4), c.EFF(14, "\n      "), c.j41(15, "li"), c.EFF(16, "\n        "), c.nrm(17, "i", 5), c.EFF(18), c.nI1(19, "i18n"), c.k0s(), c.EFF(20, "\n      "), c.j41(21, "li"), c.EFF(22, "\n        "), c.nrm(23, "i", 5), c.EFF(24), c.nI1(25, "i18n"), c.k0s(), c.EFF(26, "\n      "), c.j41(27, "li"), c.EFF(28, "\n        "), c.nrm(29, "i", 5), c.EFF(30), c.nI1(31, "i18n"), c.k0s(), c.EFF(32, "\n      "), c.j41(33, "li"), c.EFF(34, "\n        "), c.nrm(35, "i", 5), c.EFF(36), c.nI1(37, "i18n"), c.k0s(), c.EFF(38, "\n      "), c.j41(39, "li"), c.EFF(40, "\n        "), c.nrm(41, "i", 5), c.EFF(42), c.nI1(43, "i18n"), c.k0s(), c.EFF(44, "\n      "), c.j41(45, "li"), c.EFF(46, "\n        "), c.nrm(47, "i", 5), c.EFF(48), c.nI1(49, "i18n"), c.k0s(), c.EFF(50, "\n      "), c.j41(51, "li"), c.EFF(52, "\n        "), c.nrm(53, "i", 5), c.EFF(54), c.nI1(55, "i18n"), c.k0s(), c.EFF(56, "\n    "), c.k0s(), c.EFF(57, "\n    "), c.j41(58, "p", 6), c.EFF(59), c.nI1(60, "currency"), c.nI1(61, "i18n"), c.j41(62, "a", 7), c.EFF(63), c.nI1(64, "i18n"), c.k0s(), c.EFF(65, "\n    "), c.k0s(), c.EFF(66, "\n    "), c.DNE(67, In, 3, 5, "a", 8), c.EFF(68, "\n  "), c.k0s(), c.EFF(69, "\n"), c.k0s(), c.EFF(70, "\n"), c.DNE(71, yn, 35, 21, "bit-section", 9), c.EFF(72, "\n"), c.DNE(73, Sn, 89, 78, "form", 10), c.EFF(74, "\n")), 2 & n && (c.R7$(2), c.Y8G("ngIf", !t.selfHosted), c.R7$(2), c.Y8G("ngIf", c.bMT(5, 17, t.canAccessPremium$)), c.R7$(6), c.JRh(c.bMT(11, 19, "premiumUpgradeUnlockFeatures")), c.R7$(8), c.SpI("\n        ", c.bMT(19, 21, "premiumSignUpStorage"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(25, 23, "premiumSignUpTwoStepOptions"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(31, 25, "premiumSignUpEmergency"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(37, 27, "premiumSignUpReports"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(43, 29, "premiumSignUpTotp"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(49, 31, "premiumSignUpSupport"), "\n      "), c.R7$(6), c.SpI("\n        ", c.bMT(55, 33, "premiumSignUpFuture"), "\n      "), c.R7$(4), c.Y8G("ngClass", c.eq3(44, bn, !t.selfHosted)), c.R7$(), c.SpI("\n      ", c.brH(61, 38, "premiumPriceWithFamilyPlan", c.i5U(60, 35, t.premiumPrice, "$"), t.familyPlanMaxUserCount), "\n      "), c.R7$(3), c.Y8G("queryParams", c.lJ4(46, fn)), c.R7$(), c.JRh(c.bMT(64, 42, "bitwardenFamiliesPlan")), c.R7$(4), c.Y8G("ngIf", t.selfHosted), c.R7$(4), c.Y8G("ngIf", t.selfHosted), c.R7$(2), c.Y8G("ngIf", !t.selfHosted))
				},
				dependencies: [s.Wk, F.YU, F.bT, S.qT, S.me, S.Q0, S.BC, S.cb, S.j4, S.JD, N.$, V.L, p.Q, J.G, Y.m, H.s, _.J, O.h, q.L, z.n, d.r, hn.Y, M.d, F.Jj, F.oe, m.$],
				encapsulation: 2
			});
			var kn = i(10672),
				Rn = i(39805),
				$n = i(97560),
				Tn = i(20464);

			function jn(n, t) {
				if (1 & n && (c.j41(0, "bit-tab-nav-bar", 1), c.EFF(1, "\n    "), c.j41(2, "bit-tab-link", 2), c.nI1(3, "async"), c.EFF(4), c.nI1(5, "i18n"), c.k0s(), c.EFF(6, "\n    "), c.j41(7, "bit-tab-link", 3), c.EFF(8), c.nI1(9, "i18n"), c.k0s(), c.EFF(10, "\n    "), c.j41(11, "bit-tab-link", 4), c.EFF(12), c.nI1(13, "i18n"), c.k0s(), c.EFF(14, "\n  "), c.k0s()), 2 & n) {
					const n = c.XpG();
					c.R7$(2), c.Y8G("route", c.bMT(3, 4, n.hasPremium$) ? "user-subscription" : "premium"), c.R7$(2), c.JRh(c.bMT(5, 6, "subscription")), c.R7$(4), c.JRh(c.bMT(9, 8, "paymentMethod")), c.R7$(4), c.JRh(c.bMT(13, 10, "billingHistory"))
				}
			}
			class wn {
				constructor(n, t, i) {
					this.platformUtilsService = n, this.hasPremium$ = i.activeAccount$.pipe((0, v.n)((n => t.hasPremiumPersonally$(n.id))))
				}
				ngOnInit() {
					this.selfHosted = this.platformUtilsService.isSelfHost()
				}
			}
			wn.ɵfac = function(n) {
				return new(n || wn)(c.rXU(l.y), c.rXU(C.Q), c.rXU(L.Di))
			}, wn.ɵcmp = c.VBU({
				type: wn,
				selectors: [
					["ng-component"]
				],
				decls: 10,
				vars: 1,
				consts: [
					["slot", "tabs", 4, "ngIf"],
					["slot", "tabs"],
					[3, "route"],
					["route", "payment-method"],
					["route", "billing-history"]
				],
				template: function(n, t) {
					1 & n && (c.j41(0, "app-header"), c.EFF(1, "\n  "), c.DNE(2, jn, 15, 12, "bit-tab-nav-bar", 0), c.EFF(3, "\n"), c.k0s(), c.EFF(4, "\n\n"), c.j41(5, "bit-container"), c.EFF(6, "\n  "), c.nrm(7, "router-outlet"), c.EFF(8, "\n"), c.k0s(), c.EFF(9, "\n")), 2 & n && (c.R7$(2), c.Y8G("ngIf", !t.selfHosted))
				},
				dependencies: [s.n3, F.bT, kn.H, Rn.J, $n.T, Tn.f, F.Jj, m.$],
				encapsulation: 2
			});
			var Un = i(88565),
				Gn = i(4886),
				Mn = i(63247),
				xn = i(97062),
				Cn = i(33438),
				Pn = i(13583),
				Bn = i(81525),
				Xn = i(11224),
				Dn = i(3892),
				An = i(7730),
				Ln = i(6579),
				Nn = function(n, t, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function r(n) {
							try {
								c(e.next(n))
							} catch (t) {
								s(t)
							}
						}

						function a(n) {
							try {
								c(e.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
								n(t)
							}))).then(r, a)
						}
						c((e = e.apply(n, t || [])).next())
					}))
				};

			function Vn(n, t) {
				if (1 & n && (c.j41(0, "button", 9), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n) {
					const n = c.XpG();
					c.Y8G("bitAction", n.cancel), c.R7$(), c.SpI("\n        ", c.bMT(2, 2, "cancel"), "\n      ")
				}
			}
			class Jn extends Pn.m {
				constructor(n, t, i, e, o, s, r) {
					super(t, i, e, o, s, r), this.dialogRef = n, this.submitLicenseDialog = () => Nn(this, void 0, void 0, (function*() {
						yield this.submitLicense()
					})), this.cancel = () => Nn(this, void 0, void 0, (function*() {
						yield this.cancel(), this.dialogRef.close(Cn.Y.Cancelled)
					}))
				}
				submitLicense() {
					return Nn(this, void 0, void 0, (function*() {
						(yield this.submit()) === Cn.Y.Updated && this.dialogRef.close(Cn.Y.Updated)
					}))
				}
				static open(n) {
					return n.open(Jn)
				}
			}
			Jn.ɵfac = function(n) {
				return new(n || Jn)(c.rXU(Bn.ce), c.rXU(x.G), c.rXU(B.W), c.rXU(l.y), c.rXU(Xn.X), c.rXU(S.ok), c.rXU(X.f))
			}, Jn.ɵcmp = c.VBU({
				type: Jn,
				selectors: [
					["ng-component"]
				],
				features: [c.Vt3],
				decls: 41,
				vars: 22,
				consts: [
					["fileSelector", ""],
					[3, "formGroup", "bitSubmit"],
					["dialogSize", "default", 3, "title"],
					["bitDialogContent", ""],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"],
					["bitDialogFooter", ""],
					["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""],
					["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", "bitDialogClose", "", 3, "bitAction", 4, "ngIf"],
					["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", "bitDialogClose", "", 3, "bitAction"]
				],
				template: function(n, t) {
					if (1 & n) {
						const n = c.RV6();
						c.j41(0, "form", 1), c.EFF(1, "\n  "), c.j41(2, "bit-dialog", 2), c.nI1(3, "i18n"), c.EFF(4, "\n    "), c.qex(5, 3), c.EFF(6, "\n      "), c.j41(7, "bit-form-field"), c.EFF(8, "\n        "), c.j41(9, "bit-label"), c.EFF(10), c.nI1(11, "i18n"), c.k0s(), c.EFF(12, "\n        "), c.j41(13, "div"), c.EFF(14, "\n          "), c.j41(15, "button", 4), c.bIt("click", (function() {
							c.eBV(n);
							const t = c.sdS(22);
							return c.Njj(t.click())
						})), c.EFF(16), c.nI1(17, "i18n"), c.k0s(), c.EFF(18), c.nI1(19, "i18n"), c.k0s(), c.EFF(20, "\n        "), c.j41(21, "input", 5, 0), c.bIt("change", (function(i) {
							return c.eBV(n), c.Njj(t.setSelectedFile(i))
						})), c.k0s(), c.EFF(23, "\n        "), c.j41(24, "bit-hint"), c.EFF(25), c.nI1(26, "i18n"), c.k0s(), c.EFF(27, "\n      "), c.k0s(), c.EFF(28, "\n    "), c.bVm(), c.EFF(29, "\n    "), c.qex(30, 6), c.EFF(31, "\n      "), c.j41(32, "button", 7), c.EFF(33), c.nI1(34, "i18n"), c.k0s(), c.EFF(35, "\n      "), c.DNE(36, Vn, 3, 4, "button", 8), c.EFF(37, "\n    "), c.bVm(), c.EFF(38, "\n  "), c.k0s(), c.EFF(39, "\n"), c.k0s(), c.EFF(40, "\n")
					}
					2 & n && (c.Y8G("formGroup", t.updateLicenseForm)("bitSubmit", t.submitLicenseDialog), c.R7$(2), c.Y8G("title", c.bMT(3, 9, "updateLicense")), c.R7$(8), c.JRh(c.bMT(11, 11, "licenseFile")), c.R7$(6), c.SpI("\n            ", c.bMT(17, 13, "chooseFile"), "\n          "), c.R7$(2), c.SpI("\n          ", t.licenseFile ? t.licenseFile.name : c.bMT(19, 15, "noFileChosen"), "\n        "), c.R7$(7), c.JRh(c.i5U(26, 17, "licenseFileDesc", "bitwarden_premium_license.json")), c.R7$(8), c.SpI("\n        ", c.bMT(34, 20, "submit"), "\n      "), c.R7$(3), c.Y8G("ngIf", t.showCancel))
				},
				dependencies: [F.bT, S.qT, S.me, S.BC, S.cb, S.j4, S.JD, Dn.p, N.$, V.L, p.Q, An.I, Ln.m, Y.m, H.s, _.J, O.h, m.$],
				encapsulation: 2
			});
			var Yn = i(56962),
				Hn = i(53127),
				_n = i(21274),
				On = i(5771),
				qn = i(47696),
				zn = i(38140),
				Wn = i(38410),
				Qn = i(36572),
				Kn = function(n, t, i, e) {
					return new(i || (i = Promise))((function(o, s) {
						function r(n) {
							try {
								c(e.next(n))
							} catch (t) {
								s(t)
							}
						}

						function a(n) {
							try {
								c(e.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof i ? t : new i((function(n) {
								n(t)
							}))).then(r, a)
						}
						c((e = e.apply(n, t || [])).next())
					}))
				};

			function Zn(n, t) {
				1 & n && (c.qex(0), c.EFF(1, "\n  "), c.nrm(2, "i", 3), c.nI1(3, "i18n"), c.EFF(4, "\n  "), c.j41(5, "span", 4), c.EFF(6), c.nI1(7, "i18n"), c.k0s(), c.EFF(8, "\n"), c.bVm()), 2 & n && (c.R7$(2), c.FS9("title", c.bMT(3, 2, "loading")), c.R7$(4), c.JRh(c.bMT(7, 4, "loading")))
			}

			function nt(n, t) {
				1 & n && (c.j41(0, "bit-callout", 7), c.nI1(1, "i18n"), c.EFF(2), c.nI1(3, "i18n"), c.k0s()), 2 & n && (c.FS9("title", c.bMT(1, 2, "canceled")), c.R7$(2), c.SpI("\n    ", c.bMT(3, 4, "subscriptionCanceled"), ""))
			}

			function tt(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "bit-callout", 7), c.nI1(1, "i18n"), c.EFF(2, "\n    "), c.j41(3, "p", 8), c.EFF(4), c.nI1(5, "i18n"), c.k0s(), c.EFF(6, "\n    "), c.j41(7, "button", 9, 0), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(2);
						return c.Njj(t.reinstate())
					})), c.EFF(9), c.nI1(10, "i18n"), c.k0s(), c.EFF(11, "\n  "), c.k0s()
				}
				if (2 & n) {
					const n = c.sdS(8),
						t = c.XpG(2);
					c.FS9("title", c.bMT(1, 5, "pendingCancellation")), c.R7$(4), c.JRh(c.bMT(5, 7, "subscriptionPendingCanceled")), c.R7$(3), c.Y8G("appApiAction", t.reinstatePromise)("disabled", n.loading), c.R7$(2), c.SpI("\n      ", c.bMT(10, 9, "reinstateSubscription"), "\n    ")
				}
			}

			function it(n, t) {
				if (1 & n && (c.j41(0, "dd"), c.EFF(1), c.nI1(2, "date"), c.k0s()), 2 & n) {
					const n = c.XpG(3);
					c.R7$(), c.JRh(c.i5U(2, 1, n.sub.expiration, "mediumDate"))
				}
			}

			function et(n, t) {
				1 & n && (c.j41(0, "dd"), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n && (c.R7$(), c.JRh(c.bMT(2, 1, "neverExpires")))
			}

			function ot(n, t) {
				if (1 & n && (c.j41(0, "dl"), c.EFF(1, "\n    "), c.j41(2, "dt"), c.EFF(3), c.nI1(4, "i18n"), c.k0s(), c.EFF(5, "\n    "), c.DNE(6, it, 3, 4, "dd", 2), c.EFF(7, "\n    "), c.DNE(8, et, 3, 3, "dd", 2), c.EFF(9, "\n  "), c.k0s()), 2 & n) {
					const n = c.XpG(2);
					c.R7$(3), c.JRh(c.bMT(4, 3, "expiration")), c.R7$(3), c.Y8G("ngIf", n.sub.expiration), c.R7$(2), c.Y8G("ngIf", !n.sub.expiration)
				}
			}

			function st(n, t) {
				1 & n && (c.j41(0, "span", 15), c.EFF(1), c.nI1(2, "i18n"), c.k0s()), 2 & n && (c.R7$(), c.JRh(c.bMT(2, 1, "pendingCancellation")))
			}

			function rt(n, t) {
				if (1 & n && (c.j41(0, "tr"), c.EFF(1, "\n            "), c.j41(2, "td", 20), c.EFF(3), c.nI1(4, "currency"), c.k0s(), c.EFF(5, "\n            "), c.j41(6, "td", 20), c.EFF(7), c.nI1(8, "currency"), c.nI1(9, "i18n"), c.k0s(), c.EFF(10, "\n          "), c.k0s()), 2 & n) {
					const n = t.$implicit;
					c.R7$(3), c.E5c("\n              ", n.name, " ", n.quantity > 1 ? "×" + n.quantity : "", " @\n              ", c.i5U(4, 5, n.amount, "$"), "\n            "), c.R7$(4), c.Lme("", c.i5U(8, 8, n.quantity * n.amount, "$"), " /", c.bMT(9, 11, n.interval), "")
				}
			}

			function at(n, t) {
				if (1 & n && (c.EFF(0, "\n          "), c.DNE(1, rt, 11, 13, "tr", 19), c.EFF(2, "\n        ")), 2 & n) {
					const n = c.XpG(4);
					c.R7$(), c.Y8G("ngForOf", n.subscription.items)
				}
			}

			function ct(n, t) {
				1 & n && (c.j41(0, "div", 16), c.EFF(1, "\n      "), c.j41(2, "strong", 17), c.EFF(3), c.nI1(4, "i18n"), c.k0s(), c.EFF(5, "\n      "), c.j41(6, "bit-table"), c.EFF(7, "\n        "), c.DNE(8, at, 3, 1, "ng-template", 18), c.EFF(9, "\n      "), c.k0s(), c.EFF(10, "\n    "), c.k0s()), 2 & n && (c.R7$(3), c.JRh(c.bMT(4, 1, "details")))
			}

			function lt(n, t) {
				if (1 & n && (c.j41(0, "div", 10), c.EFF(1, "\n    "), c.j41(2, "div", 11), c.EFF(3, "\n      "), c.j41(4, "dl"), c.EFF(5, "\n        "), c.j41(6, "dt"), c.EFF(7), c.nI1(8, "i18n"), c.k0s(), c.EFF(9, "\n        "), c.j41(10, "dd"), c.EFF(11, "\n          "), c.j41(12, "span", 12), c.EFF(13), c.k0s(), c.EFF(14, "\n          "), c.DNE(15, st, 3, 3, "span", 13), c.EFF(16, "\n        "), c.k0s(), c.EFF(17, "\n        "), c.j41(18, "dt"), c.EFF(19), c.nI1(20, "i18n"), c.k0s(), c.EFF(21, "\n        "), c.j41(22, "dd"), c.EFF(23), c.nI1(24, "date"), c.nI1(25, "currency"), c.k0s(), c.EFF(26, "\n      "), c.k0s(), c.EFF(27, "\n    "), c.k0s(), c.EFF(28, "\n    "), c.DNE(29, ct, 11, 3, "div", 14), c.EFF(30, "\n  "), c.k0s()), 2 & n) {
					const n = c.XpG(2);
					c.R7$(7), c.JRh(c.bMT(8, 6, "status")), c.R7$(6), c.JRh(n.subscription && n.subscriptionStatus || "-"), c.R7$(2), c.Y8G("ngIf", n.subscriptionMarkedForCancel), c.R7$(4), c.JRh(c.bMT(20, 8, "nextCharge")), c.R7$(4), c.SpI("\n          ", n.nextInvoice ? c.i5U(24, 10, n.sub.subscription.periodEndDate, "mediumDate") + ", " + c.i5U(25, 13, n.nextInvoice.amount, "$") : "-", "\n        "), c.R7$(6), c.Y8G("ngIf", n.subscription)
				}
			}

			function ut(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.qex(0), c.EFF(1, "\n    "), c.j41(2, "div"), c.EFF(3, "\n      "), c.j41(4, "button", 21), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(2);
						return c.Njj(t.updateLicense())
					})), c.EFF(5), c.nI1(6, "i18n"), c.k0s(), c.EFF(7, "\n      "), c.j41(8, "a", 22), c.EFF(9), c.nI1(10, "i18n"), c.k0s(), c.EFF(11, "\n    "), c.k0s(), c.EFF(12, "\n  "), c.bVm()
				}
				if (2 & n) {
					const n = c.XpG(2);
					c.R7$(5), c.SpI("\n        ", c.bMT(6, 4, "updateLicense"), "\n      "), c.R7$(3), c.Mz_("href", "", n.cloudWebVaultUrl, "/#/settings/subscription", c.B4B), c.R7$(), c.SpI("\n        ", c.bMT(10, 6, "launchCloudSubscription"), "\n      ")
				}
			}

			function Ft(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "button", 28), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(3);
						return c.Njj(t.downloadLicense())
					})), c.EFF(1), c.nI1(2, "i18n"), c.k0s()
				}
				2 & n && (c.R7$(), c.SpI("\n        ", c.bMT(2, 1, "downloadLicense"), "\n      "))
			}

			function pt(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.j41(0, "button", 29, 1), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(3);
						return c.Njj(t.cancelSubscription())
					})), c.EFF(2), c.nI1(3, "i18n"), c.k0s()
				}
				if (2 & n) {
					const n = c.sdS(1),
						t = c.XpG(3);
					c.Y8G("appApiAction", t.cancelPromise)("disabled", n.loading), c.R7$(2), c.SpI("\n        ", c.bMT(3, 3, "cancelSubscription"), "\n      ")
				}
			}

			function dt(n, t) {
				if (1 & n) {
					const n = c.RV6();
					c.qex(0), c.EFF(1, "\n      "), c.j41(2, "div", 30), c.EFF(3, "\n        "), c.j41(4, "div", 31), c.EFF(5, "\n          "), c.j41(6, "button", 28), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(3);
						return c.Njj(t.adjustStorage(!0))
					})), c.EFF(7), c.nI1(8, "i18n"), c.k0s(), c.EFF(9, "\n          "), c.j41(10, "button", 28), c.bIt("click", (function() {
						c.eBV(n);
						const t = c.XpG(3);
						return c.Njj(t.adjustStorage(!1))
					})), c.EFF(11), c.nI1(12, "i18n"), c.k0s(), c.EFF(13, "\n        "), c.k0s(), c.EFF(14, "\n      "), c.k0s(), c.EFF(15, "\n    "), c.bVm()
				}
				2 & n && (c.R7$(7), c.SpI("\n            ", c.bMT(8, 2, "addStorage"), "\n          "), c.R7$(4), c.SpI("\n            ", c.bMT(12, 4, "removeStorage"), "\n          "))
			}

			function ht(n, t) {
				if (1 & n && (c.qex(0), c.EFF(1, "\n    "), c.j41(2, "div", 23), c.EFF(3, "\n      "), c.DNE(4, Ft, 3, 3, "button", 24), c.EFF(5, "\n      "), c.DNE(6, pt, 4, 5, "button", 25), c.EFF(7, "\n    "), c.k0s(), c.EFF(8, "\n    "), c.j41(9, "h3", 26), c.EFF(10), c.nI1(11, "i18n"), c.k0s(), c.EFF(12, "\n    "), c.j41(13, "p", 8), c.EFF(14), c.nI1(15, "i18n"), c.k0s(), c.EFF(16, "\n    "), c.nrm(17, "bit-progress", 27), c.EFF(18, "\n    "), c.DNE(19, dt, 16, 6, "ng-container", 2), c.EFF(20, "\n  "), c.bVm()), 2 & n) {
					const n = c.XpG(2);
					c.R7$(4), c.Y8G("ngIf", !n.subscription || !n.subscription.cancelled), c.R7$(2), c.Y8G("ngIf", n.subscription && !n.subscription.cancelled && !n.subscriptionMarkedForCancel), c.R7$(4), c.JRh(c.bMT(11, 6, "storage")), c.R7$(4), c.SpI("\n      ", c.brH(15, 8, "subscriptionStorage", n.sub.maxStorageGb || 0, n.sub.storageName || "0 MB"), "\n    "), c.R7$(3), c.Y8G("barWidth", n.storagePercentage), c.R7$(2), c.Y8G("ngIf", n.subscription && !n.subscription.cancelled && !n.subscriptionMarkedForCancel)
				}
			}

			function mt(n, t) {
				if (1 & n && (c.qex(0), c.EFF(1, "\n  "), c.DNE(2, nt, 4, 6, "bit-callout", 5), c.EFF(3, "\n  "), c.DNE(4, tt, 12, 11, "bit-callout", 5), c.EFF(5, "\n  "), c.DNE(6, ot, 10, 5, "dl", 2), c.EFF(7, "\n  "), c.DNE(8, lt, 31, 16, "div", 6), c.EFF(9, "\n  "), c.DNE(10, ut, 13, 8, "ng-container", 2), c.EFF(11, "\n  "), c.DNE(12, ht, 21, 12, "ng-container", 2), c.EFF(13, "\n"), c.bVm()), 2 & n) {
					const n = c.XpG();
					c.R7$(2), c.Y8G("ngIf", n.subscription && n.subscription.cancelled), c.R7$(2), c.Y8G("ngIf", n.subscriptionMarkedForCancel), c.R7$(2), c.Y8G("ngIf", n.selfHosted), c.R7$(2), c.Y8G("ngIf", !n.selfHosted), c.R7$(2), c.Y8G("ngIf", n.selfHosted), c.R7$(2), c.Y8G("ngIf", !n.selfHosted)
				}
			}
			class bt {
				constructor(n, t, i, e, o, s, r, c, l, u, F, p) {
					this.apiService = n, this.platformUtilsService = t, this.i18nService = i, this.router = e, this.logService = o, this.fileDownloadService = s, this.dialogService = r, this.environmentService = c, this.billingAccountProfileStateService = l, this.toastService = u, this.configService = F, this.accountService = p, this.loading = !1, this.firstLoaded = !1, this.selfHosted = !1, this.deprecateStripeSourcesAPI$ = this.configService.getFeatureFlag$(a.T.AC2476_DeprecateStripeSourcesAPI), this.cancelSubscription = () => Kn(this, void 0, void 0, (function*() {
						const n = (0, xn.GM)(this.dialogService, {
							data: {
								type: "User"
							}
						});
						this.cancelPromise = (0, Un.s)(n.closed);
						(yield this.cancelPromise) !== xn.vD.Closed && (yield this.load())
					})), this.updateLicense = () => Kn(this, void 0, void 0, (function*() {
						if (this.loading) return;
						const n = Jn.open(this.dialogService);
						(yield(0, Un.s)(n.closed)) === Cn.Y.Updated && (yield this.load())
					})), this.adjustStorage = n => Kn(this, void 0, void 0, (function*() {
						if (yield(0, Fn._)(this.deprecateStripeSourcesAPI$)) {
							const t = Gn.A.open(this.dialogService, {
								data: {
									price: 4,
									cadence: "year",
									type: n ? "Add" : "Remove"
								}
							});
							(yield(0, Un.s)(t.closed)) === Gn.E.Submitted && (yield this.load())
						} else {
							const t = (0, Mn.Lk)(this.dialogService, {
								data: {
									storageGbPrice: 4,
									add: n
								}
							});
							(yield(0, Un.s)(t.closed)) === Mn.Ay.Adjusted && (yield this.load())
						}
					})), this.selfHosted = this.platformUtilsService.isSelfHost()
				}
				ngOnInit() {
					return Kn(this, void 0, void 0, (function*() {
						this.cloudWebVaultUrl = yield(0, Fn._)(this.environmentService.cloudWebVaultUrl$), yield this.load(), this.firstLoaded = !0
					}))
				}
				load() {
					return Kn(this, void 0, void 0, (function*() {
						if (this.loading) return;
						const n = yield(0, Fn._)(this.accountService.activeAccount$);
						(yield(0, Fn._)(this.billingAccountProfileStateService.hasPremiumPersonally$(n.id))) ? (this.loading = !0, this.sub = yield this.apiService.getUserSubscription(), this.loading = !1) : this.router.navigate(["/settings/subscription/premium"])
					}))
				}
				reinstate() {
					return Kn(this, void 0, void 0, (function*() {
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
							this.reinstatePromise = this.apiService.postReinstatePremium(), yield this.reinstatePromise, this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("reinstated")
							}), this.load()
						} catch (n) {
							this.logService.error(n)
						}
					}))
				}
				downloadLicense() {
					if (this.loading) return;
					const n = JSON.stringify(this.sub.license, null, 2);
					this.fileDownloadService.download({
						fileName: "bitwarden_premium_license.json",
						blobData: n
					})
				}
				get subscriptionMarkedForCancel() {
					return null != this.subscription && !this.subscription.cancelled && this.subscription.cancelAtEndDate
				}
				get subscription() {
					return null != this.sub ? this.sub.subscription : null
				}
				get nextInvoice() {
					return null != this.sub ? this.sub.upcomingInvoice : null
				}
				get storagePercentage() {
					return null != this.sub && this.sub.maxStorageGb ? +(this.sub.storageGb / this.sub.maxStorageGb * 100).toFixed(2) : 0
				}
				get title() {
					return this.i18nService.t(this.selfHosted ? "subscription" : "premiumMembership")
				}
				get subscriptionStatus() {
					if (this.subscription) {
						if ("incomplete" === this.subscription.status) {
							const n = new Date(this.subscription.periodStartDate).getTime();
							return (new Date).getTime() - n <= 15e3 ? this.i18nService.t("active") : this.subscription.status
						}
						return this.subscription.status
					}
					return null
				}
			}
			bt.ɵfac = function(n) {
				return new(n || bt)(c.rXU(x.G), c.rXU(l.y), c.rXU(B.W), c.rXU(s.Ix), c.rXU(Yn.K), c.rXU(Hn.y), c.rXU(_n.o), c.rXU(w.v), c.rXU(C.Q), c.rXU(X.f), c.rXU(P.w), c.rXU(L.Di))
			}, bt.ɵcmp = c.VBU({
				type: bt,
				selectors: [
					["ng-component"]
				],
				decls: 4,
				vars: 2,
				consts: [
					["reinstateBtn", ""],
					["cancelBtn", ""],
					[4, "ngIf"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["type", "warning", 3, "title", 4, "ngIf"],
					["class", "tw-flex tw-w-full", 4, "ngIf"],
					["type", "warning", 3, "title"],
					["bitTypography", "body1"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click", "appApiAction", "disabled"],
					[1, "tw-flex", "tw-w-full"],
					[1, "tw-w-1/3"],
					[1, "tw-capitalize"],
					["bitBadge", "", "variant", "warning", 4, "ngIf"],
					["class", "tw-w-2/3", 4, "ngIf"],
					["bitBadge", "", "variant", "warning"],
					[1, "tw-w-2/3"],
					[1, "!tw-block", "tw-mb-1"],
					["body", ""],
					[4, "ngFor", "ngForOf"],
					["bitCell", ""],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"],
					["bitButton", "", "buttonType", "secondary", "target", "_blank", "rel", "noreferrer", 3, "href"],
					[1, "tw-flex", "tw-justify-between"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click", 4, "ngIf"],
					["bitButton", "", "type", "button", "buttonType", "danger", "class", "tw-ml-auto", 3, "appApiAction", "disabled", "click", 4, "ngIf"],
					["bitTypography", "h3", 1, "tw-mt-16"],
					["bgColor", "success", "size", "default", 3, "barWidth"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitButton", "", "type", "button", "buttonType", "danger", 1, "tw-ml-auto", 3, "click", "appApiAction", "disabled"],
					[1, "tw-mt-3"],
					[1, "tw-flex", "tw-gap-1"]
				],
				template: function(n, t) {
					1 & n && (c.DNE(0, Zn, 9, 6, "ng-container", 2), c.EFF(1, "\n"), c.DNE(2, mt, 14, 6, "ng-container", 2), c.EFF(3, "\n")), 2 & n && (c.Y8G("ngIf", !t.firstLoaded && t.loading), c.R7$(2), c.Y8G("ngIf", t.sub))
				},
				dependencies: [F.Sq, F.bT, On.k, qn.n, p.Q, J.G, zn.X, Wn.Q, Qn._, Qn.O, d.r, F.oe, F.vh, m.$],
				encapsulation: 2
			});
			const ft = [{
				path: "",
				component: wn,
				data: {
					titleId: "subscription"
				},
				children: [{
					path: "",
					pathMatch: "full",
					redirectTo: "premium"
				}, {
					path: "user-subscription",
					component: bt,
					data: {
						titleId: "premiumMembership"
					}
				}, ...(0, r.w)({
					defaultComponent: vn,
					flaggedComponent: un,
					featureFlag: a.T.AC2476_DeprecateStripeSourcesAPI,
					routeOptions: {
						path: "premium",
						data: {
							titleId: "goPremium"
						}
					}
				}), {
					path: "payment-method",
					component: o.NB,
					data: {
						titleId: "paymentMethod"
					}
				}, {
					path: "billing-history",
					component: I,
					data: {
						titleId: "billingHistory"
					}
				}]
			}];
			class Et {}
			Et.ɵfac = function(n) {
				return new(n || Et)
			}, Et.ɵmod = c.$C({
				type: Et
			}), Et.ɵinj = c.G2t({
				imports: [s.iI.forChild(ft), s.iI]
			});
			class gt {}
			gt.ɵfac = function(n) {
				return new(n || gt)
			}, gt.ɵmod = c.$C({
				type: gt
			}), gt.ɵinj = c.G2t({
				imports: [Et, o.rd, e.G]
			})
		}
	}
]);
//# sourceMappingURL=568.bb5c4e695e816fcaf464.js.map