"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[680], {
		4886: (n, t, e) => {
			e.d(t, {
				A: () => $,
				E: () => i
			});
			var i, o = e(81525),
				s = e(51757),
				a = e(32074),
				r = e(56111),
				c = e(12012),
				F = e(50700),
				l = e(11224),
				u = e(69855),
				p = e(52981),
				d = e(26657),
				b = e(45154),
				h = e(56898),
				m = e(7730),
				f = e(6579),
				E = e(86226),
				g = e(99917),
				v = e(97553),
				I = e(43759),
				S = e(58806),
				k = e(88016),
				y = function(n, t, e, i) {
					return new(e || (e = Promise))((function(o, s) {
						function a(n) {
							try {
								c(i.next(n))
							} catch (t) {
								s(t)
							}
						}

						function r(n) {
							try {
								c(i.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(a, r)
						}
						c((i = i.apply(n, t || [])).next())
					}))
				};

			function R(n, t) {
				if (1 & n && (r.j41(0, "bit-hint"), r.EFF(1, "\n            "), r.EFF(2, "\n            "), r.j41(3, "strong"), r.EFF(4), r.nI1(5, "i18n"), r.k0s(), r.EFF(6), r.nI1(7, "currency"), r.nI1(8, "currency"), r.nI1(9, "i18n"), r.k0s()), 2 & n) {
					const n = r.XpG();
					r.R7$(4), r.JRh(r.bMT(5, 5, "total")), r.R7$(2), r.LHq("\n            ", n.formGroup.value.storage, " GB × ", r.i5U(7, 7, n.price, "$"), " =\n            ", r.i5U(8, 10, n.price * n.formGroup.value.storage, "$"), " /\n            ", r.bMT(9, 13, n.cadence), "\n          ")
				}
			}! function(n) {
				n.Submitted = "submitted", n.Closed = "closed"
			}(i || (i = {}));
			class $ {
				constructor(n, t, e, o, r, c) {
					switch (this.apiService = n, this.dialogParams = t, this.dialogRef = e, this.i18nService = o, this.organizationApiService = r, this.toastService = c, this.formGroup = new s.gE({
							storage: new s.MJ(0, [s.k0.required, s.k0.min(0), s.k0.max(99)])
						}), this.ResultType = i, this.submit = () => y(this, void 0, void 0, (function*() {
							const n = new a.D;
							switch (this.dialogParams.type) {
								case "Add":
									n.storageGbAdjustment = this.formGroup.value.storage;
									break;
								case "Remove":
									n.storageGbAdjustment = -1 * this.formGroup.value.storage
							}
							this.organizationId ? yield this.organizationApiService.updateStorage(this.organizationId, n): yield this.apiService.postAccountStorage(n), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("adjustedStorage", n.storageGbAdjustment.toString())
							}), this.dialogRef.close(this.ResultType.Submitted)
						})), this.price = this.dialogParams.price, this.cadence = this.dialogParams.cadence, this.organizationId = this.dialogParams.organizationId, this.dialogParams.type) {
						case "Add":
							this.title = this.i18nService.t("addStorage"), this.body = this.i18nService.t("storageAddNote"), this.storageFieldLabel = this.i18nService.t("gbStorageAdd");
							break;
						case "Remove":
							this.title = this.i18nService.t("removeStorage"), this.body = this.i18nService.t("storageRemoveNote"), this.storageFieldLabel = this.i18nService.t("gbStorageRemove")
					}
				}
			}
			$.open = (n, t) => n.open($, t), $.ɵfac = function(n) {
				return new(n || $)(r.rXU(c.G), r.rXU(o.Qs), r.rXU(o.ce), r.rXU(F.W), r.rXU(l.X), r.rXU(u.f))
			}, $.ɵcmp = r.VBU({
				type: $,
				selectors: [
					["ng-component"]
				],
				decls: 36,
				vars: 13,
				consts: [
					[3, "formGroup", "bitSubmit"],
					[3, "title"],
					["bitDialogContent", ""],
					["bitTypography", "body1"],
					[1, "tw-grid", "two-grid-cols-12"],
					[1, "tw-col-span-7"],
					["bitInput", "", "type", "number", "formControlName", "storage"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitDialogClose"]
				],
				template: function(n, t) {
					1 & n && (r.j41(0, "form", 0), r.EFF(1, "\n  "), r.j41(2, "bit-dialog", 1), r.EFF(3, "\n    "), r.qex(4, 2), r.EFF(5, "\n      "), r.j41(6, "p", 3), r.EFF(7), r.k0s(), r.EFF(8, "\n      "), r.j41(9, "div", 4), r.EFF(10, "\n        "), r.j41(11, "bit-form-field", 5), r.EFF(12, "\n          "), r.j41(13, "bit-label"), r.EFF(14), r.k0s(), r.EFF(15, "\n          "), r.nrm(16, "input", 6), r.EFF(17, "\n          "), r.DNE(18, R, 10, 15, "bit-hint", 7), r.EFF(19, "\n        "), r.k0s(), r.EFF(20, "\n      "), r.k0s(), r.EFF(21, "\n    "), r.bVm(), r.EFF(22, "\n    "), r.qex(23, 8), r.EFF(24, "\n      "), r.j41(25, "button", 9), r.EFF(26), r.nI1(27, "i18n"), r.k0s(), r.EFF(28, "\n      "), r.j41(29, "button", 10), r.EFF(30), r.nI1(31, "i18n"), r.k0s(), r.EFF(32, "\n    "), r.bVm(), r.EFF(33, "\n  "), r.k0s(), r.EFF(34, "\n"), r.k0s(), r.EFF(35, "\n")), 2 & n && (r.Y8G("formGroup", t.formGroup)("bitSubmit", t.submit), r.R7$(2), r.Y8G("title", t.title), r.R7$(5), r.JRh(t.body), r.R7$(7), r.JRh(t.storageFieldLabel), r.R7$(4), r.Y8G("ngIf", "Add" === t.dialogParams.type), r.R7$(8), r.SpI("\n        ", r.bMT(27, 9, "submit"), "\n      "), r.R7$(3), r.Y8G("bitDialogClose", t.ResultType.Closed), r.R7$(), r.SpI("\n        ", r.bMT(31, 11, "cancel"), "\n      "))
				},
				dependencies: [p.bT, s.qT, s.me, s.Q0, s.BC, s.cb, s.j4, s.JD, d.$, b.L, h.Q, m.I, f.m, E.m, g.s, v.J, I.h, S.r, p.oe, k.$],
				encapsulation: 2
			})
		},
		78650: (n, t, e) => {
			e.d(t, {
				D: () => M
			});
			var i = e(10436),
				o = e(56111),
				s = e(52981),
				a = e(39801),
				r = e(59032),
				c = e(88832),
				F = e(38410),
				l = e(22466),
				u = e(36572),
				p = e(58806),
				d = e(88016);
			const b = n => ({
				"text-strike": n
			});

			function h(n, t) {
				1 & n && (o.j41(0, "p", 5), o.EFF(1), o.nI1(2, "i18n"), o.k0s()), 2 & n && (o.R7$(), o.SpI("\n    ", o.bMT(2, 1, "noUnpaidInvoices"), "\n  "))
			}

			function m(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1, "\n            "), o.nrm(2, "i", 13), o.EFF(3), o.nI1(4, "i18n"), o.k0s()), 2 & n && (o.R7$(3), o.SpI("\n            ", o.bMT(4, 1, "paid"), "\n          "))
			}

			function f(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1, "\n            "), o.nrm(2, "i", 14), o.EFF(3), o.nI1(4, "i18n"), o.k0s()), 2 & n && (o.R7$(3), o.SpI("\n            ", o.bMT(4, 1, "unpaid"), "\n          "))
			}

			function E(n, t) {
				if (1 & n && (o.j41(0, "tr", 7), o.EFF(1, "\n        "), o.j41(2, "td", 8), o.EFF(3), o.nI1(4, "date"), o.k0s(), o.EFF(5, "\n        "), o.j41(6, "td", 8), o.EFF(7, "\n          "), o.j41(8, "a", 9), o.nI1(9, "i18n"), o.EFF(10, "\n            "), o.nrm(11, "i", 10), o.k0s(), o.EFF(12, "\n          "), o.j41(13, "a", 11), o.nI1(14, "i18n"), o.EFF(15), o.nI1(16, "i18n"), o.k0s(), o.EFF(17, "\n        "), o.k0s(), o.EFF(18, "\n        "), o.j41(19, "td", 8), o.EFF(20), o.nI1(21, "currency"), o.k0s(), o.EFF(22, "\n        "), o.j41(23, "td", 12), o.EFF(24, "\n          "), o.DNE(25, m, 5, 3, "span", 3), o.EFF(26, "\n          "), o.DNE(27, f, 5, 3, "span", 3), o.EFF(28, "\n        "), o.k0s(), o.EFF(29, "\n      "), o.k0s()), 2 & n) {
					const n = t.$implicit;
					o.R7$(3), o.JRh(o.i5U(4, 9, n.date, "mediumDate")), o.R7$(5), o.FS9("href", n.pdfUrl, o.B4B), o.FS9("appA11yTitle", o.bMT(9, 12, "downloadInvoice")), o.R7$(5), o.FS9("href", n.url, o.B4B), o.FS9("title", o.bMT(14, 14, "viewInvoice")), o.R7$(2), o.SpI("\n            ", o.i5U(16, 16, "invoiceNumber", n.number), ""), o.R7$(5), o.JRh(o.i5U(21, 19, n.amount, "$")), o.R7$(5), o.Y8G("ngIf", n.paid), o.R7$(2), o.Y8G("ngIf", !n.paid)
				}
			}

			function g(n, t) {
				if (1 & n && (o.EFF(0, "\n      "), o.DNE(1, E, 30, 22, "tr", 6), o.EFF(2, "\n    ")), 2 & n) {
					const n = o.XpG();
					o.R7$(), o.Y8G("ngForOf", n.openInvoices)
				}
			}

			function v(n, t) {
				1 & n && (o.j41(0, "p", 5), o.EFF(1), o.nI1(2, "i18n"), o.k0s()), 2 & n && (o.R7$(), o.SpI("\n    ", o.bMT(2, 1, "noPaidInvoices"), "\n  "))
			}

			function I(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1, "\n            "), o.nrm(2, "i", 13), o.EFF(3), o.nI1(4, "i18n"), o.k0s()), 2 & n && (o.R7$(3), o.SpI("\n            ", o.bMT(4, 1, "paid"), "\n          "))
			}

			function S(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1, "\n            "), o.nrm(2, "i", 14), o.EFF(3), o.nI1(4, "i18n"), o.k0s()), 2 & n && (o.R7$(3), o.SpI("\n            ", o.bMT(4, 1, "unpaid"), "\n          "))
			}

			function k(n, t) {
				if (1 & n && (o.j41(0, "tr", 7), o.EFF(1, "\n        "), o.j41(2, "td", 8), o.EFF(3), o.nI1(4, "date"), o.k0s(), o.EFF(5, "\n        "), o.j41(6, "td", 8), o.EFF(7, "\n          "), o.j41(8, "a", 9), o.nI1(9, "i18n"), o.EFF(10, "\n            "), o.nrm(11, "i", 10), o.k0s(), o.EFF(12, "\n          "), o.j41(13, "a", 11), o.nI1(14, "i18n"), o.EFF(15), o.nI1(16, "i18n"), o.k0s(), o.EFF(17, "\n        "), o.k0s(), o.EFF(18, "\n        "), o.j41(19, "td", 8), o.EFF(20), o.nI1(21, "currency"), o.k0s(), o.EFF(22, "\n        "), o.j41(23, "td", 12), o.EFF(24, "\n          "), o.DNE(25, I, 5, 3, "span", 3), o.EFF(26, "\n          "), o.DNE(27, S, 5, 3, "span", 3), o.EFF(28, "\n        "), o.k0s(), o.EFF(29, "\n      "), o.k0s()), 2 & n) {
					const n = t.$implicit;
					o.R7$(3), o.JRh(o.i5U(4, 9, n.date, "mediumDate")), o.R7$(5), o.FS9("href", n.pdfUrl, o.B4B), o.FS9("appA11yTitle", o.bMT(9, 12, "downloadInvoice")), o.R7$(5), o.FS9("href", n.url, o.B4B), o.FS9("title", o.bMT(14, 14, "viewInvoice")), o.R7$(2), o.SpI("\n            ", o.i5U(16, 16, "invoiceNumber", n.number), ""), o.R7$(5), o.JRh(o.i5U(21, 19, n.amount, "$")), o.R7$(5), o.Y8G("ngIf", n.paid), o.R7$(2), o.Y8G("ngIf", !n.paid)
				}
			}

			function y(n, t) {
				if (1 & n && (o.EFF(0, "\n      "), o.DNE(1, k, 30, 22, "tr", 6), o.EFF(2, "\n    ")), 2 & n) {
					const n = o.XpG();
					o.R7$(), o.Y8G("ngForOf", n.paidInvoices)
				}
			}

			function R(n, t) {
				1 & n && (o.j41(0, "p", 5), o.EFF(1), o.nI1(2, "i18n"), o.k0s()), 2 & n && (o.R7$(), o.SpI("\n    ", o.bMT(2, 1, "noTransactions"), "\n  "))
			}

			function $(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1), o.nI1(2, "i18n"), o.k0s()), 2 & n && (o.R7$(), o.SpI("\n            ", o.bMT(2, 1, "chargeNoun"), "\n          "))
			}

			function T(n, t) {
				1 & n && (o.j41(0, "span"), o.EFF(1), o.nI1(2, "i18n"), o.k0s()), 2 & n && (o.R7$(), o.JRh(o.bMT(2, 1, "refundNoun")))
			}

			function j(n, t) {
				if (1 & n && o.nrm(0, "i", 17), 2 & n) {
					const n = o.XpG().$implicit,
						t = o.XpG(3);
					o.Y8G("ngClass", t.paymentMethodClasses(n.paymentMethodType))
				}
			}

			function w(n, t) {
				if (1 & n && (o.j41(0, "tr", 7), o.EFF(1, "\n        "), o.j41(2, "td", 8), o.EFF(3), o.nI1(4, "date"), o.k0s(), o.EFF(5, "\n        "), o.j41(6, "td", 8), o.EFF(7, "\n          "), o.DNE(8, $, 3, 3, "span", 3), o.EFF(9, "\n          "), o.DNE(10, T, 3, 3, "span", 3), o.EFF(11, "\n        "), o.k0s(), o.EFF(12, "\n        "), o.j41(13, "td", 8), o.EFF(14, "\n          "), o.DNE(15, j, 1, 1, "i", 15), o.EFF(16), o.k0s(), o.EFF(17, "\n        "), o.j41(18, "td", 16), o.nI1(19, "i18n"), o.EFF(20), o.nI1(21, "currency"), o.k0s(), o.EFF(22, "\n      "), o.k0s()), 2 & n) {
					const n = t.$implicit,
						e = o.XpG(3);
					o.R7$(3), o.JRh(o.i5U(4, 8, n.createdDate, "mediumDate")), o.R7$(5), o.Y8G("ngIf", n.type === e.transactionType.Charge || n.type === e.transactionType.Credit), o.R7$(2), o.Y8G("ngIf", n.type === e.transactionType.Refund), o.R7$(5), o.Y8G("ngIf", n.paymentMethodType), o.R7$(), o.SpI("\n          ", n.details, "\n        "), o.R7$(2), o.FS9("title", o.bMT(19, 11, n.refunded ? "refunded" : "")), o.Y8G("ngClass", o.eq3(16, b, n.refunded)), o.R7$(2), o.SpI("\n          ", o.i5U(21, 13, n.amount, "$"), "\n        ")
				}
			}

			function G(n, t) {
				if (1 & n && (o.EFF(0, "\n      "), o.DNE(1, w, 23, 18, "tr", 6), o.EFF(2, "\n    ")), 2 & n) {
					const n = o.XpG(2);
					o.R7$(), o.Y8G("ngForOf", n.transactions)
				}
			}

			function U(n, t) {
				1 & n && (o.j41(0, "bit-table"), o.EFF(1, "\n    "), o.DNE(2, G, 3, 1, "ng-template", 2), o.EFF(3, "\n  "), o.k0s())
			}
			class M {
				constructor() {
					this.paymentMethodType = i.eq, this.transactionType = i.D_
				}
				paymentMethodClasses(n) {
					switch (n) {
						case i.eq.Card:
							return ["bwi-credit-card"];
						case i.eq.BankAccount:
						case i.eq.WireTransfer:
							return ["bwi-bank"];
						case i.eq.BitPay:
							return ["bwi-bitcoin text-warning"];
						case i.eq.PayPal:
							return ["bwi-paypal text-primary"];
						default:
							return []
					}
				}
			}
			M.ɵfac = function(n) {
				return new(n || M)
			}, M.ɵcmp = o.VBU({
				type: M,
				selectors: [
					["app-billing-history"]
				],
				inputs: {
					openInvoices: "openInvoices",
					paidInvoices: "paidInvoices",
					transactions: "transactions"
				},
				decls: 45,
				vars: 23,
				consts: [
					["bitTypography", "h3"],
					["bitTypography", "body1", 4, "ngIf"],
					["body", ""],
					[4, "ngIf"],
					[1, "tw-text-muted"],
					["bitTypography", "body1"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["bitCell", ""],
					["target", "_blank", "rel", "noreferrer", 1, "tw-mr-2", 3, "href", "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-file-pdf"],
					["bitLink", "", "target", "_blank", "rel", "noreferrer", 3, "href", "title"],
					["bitCell", "", 1, "tw-w-28"],
					["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success"],
					["aria-hidden", "true", 1, "bwi", "bwi-exclamation-circle", "tw-text-muted"],
					["class", "bwi bwi-fw", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"],
					["bitCell", "", 3, "ngClass", "title"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", 3, "ngClass"]
				],
				template: function(n, t) {
					1 & n && (o.j41(0, "bit-section"), o.EFF(1, "\n  "), o.j41(2, "h3", 0), o.EFF(3), o.nI1(4, "i18n"), o.nI1(5, "i18n"), o.k0s(), o.EFF(6, "\n  "), o.DNE(7, h, 3, 3, "p", 1), o.EFF(8, "\n  "), o.j41(9, "bit-table"), o.EFF(10, "\n    "), o.DNE(11, g, 3, 1, "ng-template", 2), o.EFF(12, "\n  "), o.k0s(), o.EFF(13, "\n"), o.k0s(), o.EFF(14, "\n"), o.j41(15, "bit-section"), o.EFF(16, "\n  "), o.j41(17, "h3", 0), o.EFF(18), o.nI1(19, "i18n"), o.nI1(20, "i18n"), o.k0s(), o.EFF(21, "\n  "), o.DNE(22, v, 3, 3, "p", 1), o.EFF(23, "\n  "), o.j41(24, "bit-table"), o.EFF(25, "\n    "), o.DNE(26, y, 3, 1, "ng-template", 2), o.EFF(27, "\n  "), o.k0s(), o.EFF(28, "\n"), o.k0s(), o.EFF(29, "\n"), o.j41(30, "bit-section"), o.EFF(31, "\n  "), o.j41(32, "h3", 0), o.EFF(33), o.nI1(34, "i18n"), o.k0s(), o.EFF(35, "\n  "), o.DNE(36, R, 3, 3, "p", 1), o.EFF(37, "\n  "), o.DNE(38, U, 4, 0, "bit-table", 3), o.EFF(39, "\n  "), o.j41(40, "small", 4), o.EFF(41), o.nI1(42, "i18n"), o.k0s(), o.EFF(43, "\n"), o.k0s(), o.EFF(44, "\n")), 2 & n && (o.R7$(3), o.Lme("", o.bMT(4, 10, "unpaid"), " ", o.bMT(5, 12, "invoices"), ""), o.R7$(4), o.Y8G("ngIf", !t.openInvoices || !t.openInvoices.length), o.R7$(11), o.Lme("", o.bMT(19, 14, "paid"), " ", o.bMT(20, 16, "invoices"), ""), o.R7$(4), o.Y8G("ngIf", !t.paidInvoices || !t.paidInvoices.length), o.R7$(11), o.JRh(o.bMT(34, 18, "transactions")), o.R7$(3), o.Y8G("ngIf", !t.transactions || !t.transactions.length), o.R7$(2), o.Y8G("ngIf", t.transactions && t.transactions.length), o.R7$(3), o.SpI("* ", o.i5U(42, 20, "chargesStatement", "BITWARDEN"), ""))
				},
				dependencies: [s.YU, s.Sq, s.bT, a.C, r.L, c.n, F.Q, l.Y, u._, u.O, p.r, s.oe, s.vh, d.$],
				encapsulation: 2
			})
		},
		97062: (n, t, e) => {
			e.d(t, {
				GM: () => y,
				vD: () => i
			});
			var i, o = e(81525),
				s = e(51757),
				a = e(56111),
				r = e(48180),
				c = e(50700),
				F = e(37115),
				l = e(69855),
				u = e(52981),
				p = e(26657),
				d = e(45154),
				b = e(56898),
				h = e(7730),
				m = e(6579),
				f = e(86226),
				E = e(99917),
				g = e(97553),
				v = e(43759),
				I = e(88016),
				S = function(n, t, e, i) {
					return new(e || (e = Promise))((function(o, s) {
						function a(n) {
							try {
								c(i.next(n))
							} catch (t) {
								s(t)
							}
						}

						function r(n) {
							try {
								c(i.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(a, r)
						}
						c((i = i.apply(n, t || [])).next())
					}))
				};

			function k(n, t) {
				if (1 & n && (a.j41(0, "option", 9), a.EFF(1), a.k0s()), 2 & n) {
					const n = t.$implicit;
					a.Y8G("ngValue", n.value), a.R7$(), a.SpI("\n            ", n.text, "\n          ")
				}
			}! function(n) {
				n.Closed = "closed", n.Submitted = "submitted"
			}(i || (i = {}));
			const y = (n, t) => n.open(R, t);
			class R {
				constructor(n, t, e, o, a, r, c) {
					this.dialogParams = n, this.dialogRef = t, this.formBuilder = e, this.billingApiService = o, this.i18nService = a, this.platformUtilsService = r, this.toastService = c, this.ResultType = i, this.MaxFeedbackLength = 400, this.reasons = [{
						value: null,
						text: this.i18nService.t("selectPlaceholder")
					}, {
						value: "missing_features",
						text: this.i18nService.t("missingFeatures")
					}, {
						value: "switched_service",
						text: this.i18nService.t("movingToAnotherTool")
					}, {
						value: "too_complex",
						text: this.i18nService.t("tooDifficultToUse")
					}, {
						value: "unused",
						text: this.i18nService.t("notUsingEnough")
					}, {
						value: "too_expensive",
						text: this.i18nService.t("tooExpensive")
					}, {
						value: "other",
						text: this.i18nService.t("other")
					}], this.formGroup = this.formBuilder.group({
						reason: [this.reasons[0].value, [s.k0.required]],
						feedback: ["", [s.k0.maxLength(this.MaxFeedbackLength)]]
					}), this.submit = () => S(this, void 0, void 0, (function*() {
						if (this.formGroup.markAllAsTouched(), this.formGroup.invalid) return;
						const n = {
							reason: this.formGroup.value.reason,
							feedback: this.formGroup.value.feedback
						};
						"Organization" === this.dialogParams.type ? yield this.billingApiService.cancelOrganizationSubscription(this.dialogParams.id, n): yield this.billingApiService.cancelPremiumUserSubscription(n), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("canceledSubscription")
						}), this.dialogRef.close(this.ResultType.Submitted)
					}))
				}
			}
			R.ɵfac = function(n) {
				return new(n || R)(a.rXU(o.Qs), a.rXU(o.ce), a.rXU(s.ok), a.rXU(r.P), a.rXU(c.W), a.rXU(F.y), a.rXU(l.f))
			}, R.ɵcmp = a.VBU({
				type: R,
				selectors: [
					["app-cancel-subscription-form"]
				],
				decls: 53,
				vars: 27,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["bitDialogTitle", "", 1, "tw-font-semibold"],
					["bitDialogContent", ""],
					["bitInput", "", "formControlName", "reason"],
					[3, "ngValue", 4, "ngFor", "ngForOf"],
					["rows", "4", "bitInput", "", "formControlName", "feedback"],
					["bitDialogFooter", ""],
					["bitButton", "", "bitFormButton", "", "buttonType", "primary", "type", "submit"],
					["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitDialogClose"],
					[3, "ngValue"]
				],
				template: function(n, t) {
					1 & n && (a.j41(0, "form", 0), a.EFF(1, "\n  "), a.j41(2, "bit-dialog"), a.EFF(3, "\n    "), a.j41(4, "span", 1), a.EFF(5), a.nI1(6, "i18n"), a.k0s(), a.EFF(7, "\n    "), a.j41(8, "div", 2), a.EFF(9, "\n      "), a.j41(10, "p"), a.EFF(11), a.nI1(12, "i18n"), a.k0s(), a.EFF(13, "\n      "), a.j41(14, "bit-form-field"), a.EFF(15, "\n        "), a.j41(16, "bit-label"), a.EFF(17), a.nI1(18, "i18n"), a.k0s(), a.EFF(19, "\n        "), a.j41(20, "select", 3), a.EFF(21, "\n          "), a.DNE(22, k, 2, 2, "option", 4), a.EFF(23, "\n        "), a.k0s(), a.EFF(24, "\n      "), a.k0s(), a.EFF(25, "\n      "), a.j41(26, "bit-form-field"), a.EFF(27, "\n        "), a.j41(28, "bit-label"), a.EFF(29), a.nI1(30, "i18n"), a.k0s(), a.EFF(31, "\n        "), a.nrm(32, "textarea", 5), a.EFF(33, "\n        "), a.j41(34, "bit-hint"), a.EFF(35), a.nI1(36, "i18n"), a.k0s(), a.EFF(37, "\n      "), a.k0s(), a.EFF(38, "\n    "), a.k0s(), a.EFF(39, "\n    "), a.qex(40, 6), a.EFF(41, "\n      "), a.j41(42, "button", 7), a.EFF(43), a.nI1(44, "i18n"), a.k0s(), a.EFF(45, "\n      "), a.j41(46, "button", 8), a.EFF(47), a.nI1(48, "i18n"), a.k0s(), a.EFF(49, "\n    "), a.bVm(), a.EFF(50, "\n  "), a.k0s(), a.EFF(51, "\n"), a.k0s(), a.EFF(52, "\n")), 2 & n && (a.Y8G("formGroup", t.formGroup)("bitSubmit", t.submit), a.R7$(5), a.SpI("\n      ", a.bMT(6, 11, "cancelSubscription"), "\n    "), a.R7$(6), a.JRh(a.bMT(12, 13, "sorryToSeeYouGo")), a.R7$(6), a.SpI("\n          ", a.bMT(18, 15, "selectCancellationReason"), "\n        "), a.R7$(5), a.Y8G("ngForOf", t.reasons), a.R7$(7), a.SpI("\n          ", a.bMT(30, 17, "anyOtherFeedback"), "\n        "), a.R7$(6), a.JRh(a.brH(36, 19, "charactersCurrentAndMaximum", t.formGroup.value.feedback.length, t.MaxFeedbackLength)), a.R7$(8), a.SpI("\n        ", a.bMT(44, 23, "cancelSubscription"), "\n      "), a.R7$(3), a.Y8G("bitDialogClose", t.ResultType.Closed), a.R7$(), a.SpI("\n        ", a.bMT(48, 25, "close"), "\n      "))
				},
				dependencies: [u.Sq, s.qT, s.xH, s.y7, s.me, s.wz, s.BC, s.cb, s.j4, s.JD, p.$, d.L, b.Q, h.I, m.m, f.m, E.s, g.J, v.h, I.$],
				encapsulation: 2
			})
		},
		33438: (n, t, e) => {
			var i;
			e.d(t, {
					Y: () => i
				}),
				function(n) {
					n.Updated = "updated", n.Cancelled = "cancelled"
				}(i || (i = {}))
		},
		13583: (n, t, e) => {
			e.d(t, {
				m: () => R
			});
			var i = e(56111),
				o = e(51757),
				s = e(10436),
				a = e(33438),
				r = e(12012),
				c = e(50700),
				F = e(37115),
				l = e(11224),
				u = e(69855),
				p = e(52981),
				d = e(3892),
				b = e(26657),
				h = e(45154),
				m = e(56898),
				f = e(86226),
				E = e(99917),
				g = e(97553),
				v = e(43759),
				I = e(88016),
				S = function(n, t, e, i) {
					return new(e || (e = Promise))((function(o, s) {
						function a(n) {
							try {
								c(i.next(n))
							} catch (t) {
								s(t)
							}
						}

						function r(n) {
							try {
								c(i.throw(n))
							} catch (t) {
								s(t)
							}
						}

						function c(n) {
							var t;
							n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
								n(t)
							}))).then(a, r)
						}
						c((i = i.apply(n, t || [])).next())
					}))
				};

			function k(n, t) {
				1 & n && (i.j41(0, "bit-label"), i.EFF(1), i.nI1(2, "i18n"), i.k0s()), 2 & n && (i.R7$(), i.JRh(i.bMT(2, 1, "licenseFile")))
			}

			function y(n, t) {
				if (1 & n && (i.j41(0, "button", 8), i.EFF(1), i.nI1(2, "i18n"), i.k0s()), 2 & n) {
					const n = i.XpG();
					i.Y8G("bitAction", n.cancel), i.R7$(), i.SpI("\n    ", i.bMT(2, 2, "cancel"), "\n  ")
				}
			}
			class R {
				constructor(n, t, e, o, s, r) {
					this.apiService = n, this.i18nService = t, this.platformUtilsService = e, this.organizationApiService = o, this.formBuilder = s, this.toastService = r, this.showCancel = !0, this.onUpdated = new i.bkB, this.onCanceled = new i.bkB, this.title = this.i18nService.t("updateLicense"), this.updateLicenseForm = this.formBuilder.group({
						file: [null]
					}), this.licenseFile = null, this.submit = () => S(this, void 0, void 0, (function*() {
						if (this.updateLicenseForm.markAllAsTouched(), this.updateLicenseForm.invalid) return;
						const n = this.licenseFile;
						if (null == n) return void this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("selectFile")
						});
						const t = new FormData;
						t.append("license", n);
						let e = null;
						return e = null == this.organizationId ? this.apiService.postAccountLicense(t) : this.organizationApiService.updateLicense(this.organizationId, t), this.formPromise = e.then((() => this.apiService.refreshIdentityToken())), yield this.formPromise, this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("licenseUploadSuccess")
						}), this.onUpdated.emit(), new Promise((n => n(a.Y.Updated)))
					})), this.cancel = () => {
						this.onCanceled.emit()
					}
				}
				ngOnInit() {
					return S(this, void 0, void 0, (function*() {
						(yield this.organizationApiService.get(this.organizationId)).plan.productTier !== s.K_.Families && (this.updateLicenseForm.setValidators([o.k0.required]), this.updateLicenseForm.updateValueAndValidity())
					}))
				}
				setSelectedFile(n) {
					const t = n.target,
						e = t.files.length > 0 ? t.files[0] : null;
					this.licenseFile = e
				}
			}
			R.ɵfac = function(n) {
				return new(n || R)(i.rXU(r.G), i.rXU(c.W), i.rXU(F.y), i.rXU(l.X), i.rXU(o.ok), i.rXU(u.f))
			}, R.ɵcmp = i.VBU({
				type: R,
				selectors: [
					["app-update-license"]
				],
				inputs: {
					organizationId: "organizationId",
					showCancel: "showCancel",
					showAutomaticSyncAndManualUpload: "showAutomaticSyncAndManualUpload"
				},
				outputs: {
					onUpdated: "onUpdated",
					onCanceled: "onCanceled"
				},
				decls: 29,
				vars: 17,
				consts: [
					["fileSelector", ""],
					[3, "formGroup", "bitSubmit"],
					[4, "ngIf"],
					[1, "tw-pb-1", "tw-pt-2"],
					["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"],
					["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"],
					["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""],
					["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction", 4, "ngIf"],
					["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction"]
				],
				template: function(n, t) {
					if (1 & n) {
						const n = i.RV6();
						i.j41(0, "form", 1), i.EFF(1, "\n  "), i.j41(2, "bit-form-field"), i.EFF(3, "\n    "), i.DNE(4, k, 3, 3, "bit-label", 2), i.EFF(5, "\n    "), i.j41(6, "div", 3), i.EFF(7, "\n      "), i.j41(8, "button", 4), i.bIt("click", (function() {
							i.eBV(n);
							const t = i.sdS(15);
							return i.Njj(t.click())
						})), i.EFF(9), i.nI1(10, "i18n"), i.k0s(), i.EFF(11), i.nI1(12, "i18n"), i.k0s(), i.EFF(13, "\n    "), i.j41(14, "input", 5, 0), i.bIt("change", (function(e) {
							return i.eBV(n), i.Njj(t.setSelectedFile(e))
						})), i.k0s(), i.EFF(16, "\n    "), i.j41(17, "bit-hint"), i.EFF(18), i.nI1(19, "i18n"), i.k0s(), i.EFF(20, "\n  "), i.k0s(), i.EFF(21, "\n  "), i.j41(22, "button", 6), i.EFF(23), i.nI1(24, "i18n"), i.k0s(), i.EFF(25, "\n  "), i.DNE(26, y, 3, 4, "button", 7), i.EFF(27, "\n"), i.k0s(), i.EFF(28, "\n")
					}
					2 & n && (i.Y8G("formGroup", t.updateLicenseForm)("bitSubmit", t.submit), i.R7$(4), i.Y8G("ngIf", t.showAutomaticSyncAndManualUpload), i.R7$(5), i.SpI("\n        ", i.bMT(10, 8, "chooseFile"), "\n      "), i.R7$(2), i.SpI("\n      ", t.licenseFile ? t.licenseFile.name : i.bMT(12, 10, "noFileChosen"), "\n    "), i.R7$(7), i.JRh(i.i5U(19, 12, "licenseFileDesc", t.organizationId ? "bitwarden_organization_license.json" : "bitwarden_premium_license.json")), i.R7$(5), i.SpI("\n    ", i.bMT(24, 15, "submit"), "\n  "), i.R7$(3), i.Y8G("ngIf", t.showCancel))
				},
				dependencies: [p.bT, o.qT, o.me, o.BC, o.cb, o.j4, o.JD, d.p, b.$, h.L, m.Q, f.m, E.s, g.J, v.h, I.$],
				encapsulation: 2
			})
		},
		32451: (n, t, e) => {
			e.d(t, {
				w: () => r
			});
			var i = e(56111),
				o = e(3204),
				s = e(1601),
				a = e(69023);

			function r(n) {
				return (0, a.Y)(n.defaultComponent, n.flaggedComponent, (() => (0, i.WQX)(s.w).getFeatureFlag$(n.featureFlag).pipe((0, o.T)((n => !0 === n)))), n.routeOptions)
			}
		}
	}
]);
//# sourceMappingURL=680.f006df0033be5030ef16.js.map