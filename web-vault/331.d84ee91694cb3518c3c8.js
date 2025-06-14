"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[331], {
		40331: (t, e, n) => {
			n.r(e), n.d(e, {
				MembersModule: () => Ys
			});
			var i = n(7306),
				s = n(49355),
				o = n(84965),
				r = n(25065),
				a = n(5326),
				c = n(81525),
				l = n(51757),
				u = n(66046),
				F = n(72245),
				d = n(27442),
				p = n(44500),
				h = n(93695),
				m = n(3204),
				b = n(33338),
				g = n(14803),
				E = n(44451),
				f = n(52759),
				v = n(95919),
				I = n(10436),
				k = n(82468),
				y = n(81667),
				R = n(38766);

			function w(t) {
				return "" !== t.value && t.value && void 0 !== t.value.split(",").map((t => l.k0.email({
					value: t.trim()
				}))).find((t => null !== t)) ? {
					multipleEmails: {
						message: "multipleInputEmails"
					}
				} : null
			}

			function S(t, e, n) {
				return i => {
					if ("" === i.value || !i.value) return null;
					const s = Array.from(new Set(i.value.split(",").filter((t => t && "" !== t.trim() && !e.some((e => e === t.trim()))))));
					return !(t.productTierType !== I.K_.Free && t.productTierType !== I.K_.Families && t.productTierType !== I.K_.TeamsStarter) && e.length + s.length > t.seats ? {
						seatLimitReached: {
							message: n
						}
					} : null
				}
			}
			var $ = n(56111),
				G = n(50700),
				T = n(21274),
				j = n(69855),
				M = n(35500),
				U = n(67553),
				C = n(1601),
				D = n(52981),
				x = n(39801),
				N = n(3892),
				P = n(26657),
				Y = n(45154),
				z = n(47696),
				A = n(56898),
				X = n(50352),
				B = n(6579),
				V = n(90246),
				O = n(86226),
				J = n(99917),
				q = n(97553),
				K = n(43759),
				L = n(36288),
				W = n(59032),
				_ = n(24374),
				Q = n(17721),
				Z = n(88516),
				H = n(49608),
				tt = n(58806),
				et = n(43184),
				nt = n(78781),
				it = n(88016);

			function st(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "div"), $.EFF(1, "\n        "), $.j41(2, "bit-form-control"), $.EFF(3, "\n          "), $.j41(4, "input", 5), $.bIt("change", (function() {
						$.eBV(t);
						const e = $.XpG(2);
						return $.Njj(e.onChildCheck())
					})), $.k0s(), $.EFF(5, "\n          "), $.j41(6, "bit-label"), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n        "), $.k0s(), $.EFF(10, "\n      "), $.k0s()
				}
				if (2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(4), $.Y8G("formControl", t.value), $.R7$(3), $.JRh($.bMT(8, 2, t.key))
				}
			}

			function ot(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n      "), $.DNE(2, st, 11, 4, "div", 4), $.EFF(3, "\n    "), $.bVm()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG();
					$.R7$(2), $.Y8G("ngIf", t.key != n.parentId)
				}
			}
			class rt {
				constructor() {
					this.destroy$ = new u.B
				}
				get parentIndeterminate() {
					return this.children.some((([t, e]) => 1 == e.value)) && !this.children.every((([t, e]) => 1 == e.value))
				}
				ngOnInit() {
					this.checkboxes.controls[this.parentId].valueChanges.pipe((0, g.Q)(this.destroy$)).subscribe((t => {
						Object.values(this.checkboxes.controls).forEach((e => e.setValue(t, {
							emitEvent: !1
						})))
					}))
				}
				get parentCheckbox() {
					return this.checkboxes.controls[this.parentId]
				}
				get children() {
					return Object.entries(this.checkboxes.controls).filter((([t, e]) => t != this.parentId))
				}
				onChildCheck() {
					const t = this.children.every((([t, e]) => 1 == e.value));
					this.parentCheckbox.setValue(t, {
						emitEvent: !1
					})
				}
				key(t, e) {
					return e.key
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				pascalize(t) {
					return nt.A.camelToPascalCase(t)
				}
			}
			rt.ɵfac = function(t) {
				return new(t || rt)
			}, rt.ɵcmp = $.VBU({
				type: rt,
				selectors: [
					["app-nested-checkbox"]
				],
				inputs: {
					parentId: "parentId",
					checkboxes: "checkboxes"
				},
				decls: 18,
				vars: 10,
				consts: [
					[3, "formGroup"],
					["type", "checkbox", "bitCheckbox", "", 3, "formControlName", "indeterminate"],
					[1, "tw-ml-4"],
					[4, "ngFor", "ngForOf", "ngForTrackBy"],
					[4, "ngIf"],
					["type", "checkbox", "bitCheckbox", "", 3, "change", "formControl"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "div", 0), $.EFF(1, "\n  "), $.j41(2, "bit-form-control"), $.EFF(3, "\n    "), $.nrm(4, "input", 1), $.EFF(5, "\n    "), $.j41(6, "bit-label"), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n  "), $.k0s(), $.EFF(10, "\n  "), $.j41(11, "div", 2), $.EFF(12, "\n    "), $.DNE(13, ot, 4, 1, "ng-container", 3), $.nI1(14, "keyvalue"), $.EFF(15, "\n  "), $.k0s(), $.EFF(16, "\n"), $.k0s(), $.EFF(17, "\n")), 2 & t && ($.Y8G("formGroup", e.checkboxes), $.R7$(4), $.Y8G("formControlName", e.parentId)("indeterminate", e.parentIndeterminate), $.R7$(3), $.JRh($.bMT(8, 6, e.parentId)), $.R7$(6), $.Y8G("ngForOf", $.bMT(14, 8, e.checkboxes.controls))("ngForTrackBy", e.key))
				},
				dependencies: [D.Sq, D.bT, l.Zm, l.BC, l.cb, l.l_, l.j4, l.JD, X.P, V.f, O.m, D.lG, it.$],
				encapsulation: 2
			});
			var at = function(t, e, n, i) {
				return new(n || (n = Promise))((function(s, o) {
					function r(t) {
						try {
							c(i.next(t))
						} catch (e) {
							o(e)
						}
					}

					function a(t) {
						try {
							c(i.throw(t))
						} catch (e) {
							o(e)
						}
					}

					function c(t) {
						var e;
						t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(r, a)
					}
					c((i = i.apply(t, e || [])).next())
				}))
			};
			const ct = t => ({
				seats: t
			});

			function lt(t, e) {
				if (1 & t && ($.j41(0, "span", 16), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.R7$(), $.JRh(t.params.name)
				}
			}

			function ut(t, e) {
				1 & t && ($.j41(0, "span", 17), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "revoked")))
			}

			function Ft(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n        "), $.nrm(2, "i", 18), $.nI1(3, "i18n"), $.EFF(4, "\n        "), $.j41(5, "span", 19), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n      "), $.bVm()), 2 & t && ($.R7$(2), $.FS9("title", $.bMT(3, 2, "loading")), $.R7$(4), $.JRh($.bMT(7, 4, "loading")))
			}

			function dt(t, e) {
				if (1 & t && ($.j41(0, "bit-hint"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t) {
					const t = $.XpG().ngIf;
					$.R7$(), $.JRh($.i5U(2, 1, "inviteMultipleEmailDesc", t.seats))
				}
			}

			function pt(t, e) {
				1 & t && ($.j41(0, "bit-hint"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "inviteSingleEmailDesc")))
			}

			function ht(t, e) {
				1 & t && ($.j41(0, "bit-hint"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "inviteZeroEmailDesc")))
			}

			function mt(t, e) {
				if (1 & t && ($.j41(0, "bit-form-field"), $.EFF(1, "\n              "), $.j41(2, "bit-label"), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n              "), $.nrm(6, "input", 35), $.EFF(7, "\n\n              "), $.DNE(8, dt, 3, 4, "bit-hint", 7), $.EFF(9, "\n\n              "), $.DNE(10, pt, 3, 3, "bit-hint", 7), $.EFF(11, "\n\n              "), $.DNE(12, ht, 3, 3, "bit-hint", 7), $.EFF(13, "\n            "), $.k0s()), 2 & t) {
					const t = e.ngIf;
					$.R7$(3), $.JRh($.bMT(4, 4, "email")), $.R7$(5), $.Y8G("ngIf", t.seats > 1), $.R7$(2), $.Y8G("ngIf", 1 === t.seats), $.R7$(2), $.Y8G("ngIf", 0 === t.seats)
				}
			}

			function bt(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n            "), $.j41(2, "p", 34), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n            "), $.DNE(6, mt, 14, 6, "bit-form-field", 7), $.nI1(7, "async"), $.EFF(8, "\n          "), $.bVm()), 2 & t) {
					const t = $.XpG(2);
					$.R7$(3), $.JRh($.bMT(4, 2, "inviteUserDesc")), $.R7$(3), $.Y8G("ngIf", $.eq3(6, ct, $.bMT(7, 4, t.remainingSeats$)))
				}
			}

			function gt(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                  "), $.j41(2, "p"), $.EFF(3), $.nI1(4, "i18n"), $.j41(5, "a", 36), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8), $.nI1(9, "i18n"), $.k0s(), $.EFF(10, "\n                "), $.bVm()), 2 & t && ($.R7$(3), $.SpI("\n                    ", $.bMT(4, 3, "customDescNonEnterpriseStart"), ""), $.R7$(3), $.JRh($.bMT(7, 5, "customDescNonEnterpriseLink")), $.R7$(2), $.SpI("", $.bMT(9, 7, "customDescNonEnterpriseEnd"), "\n                  "))
			}

			function Et(t, e) {
				1 & t && ($.EFF(0, "\n                  "), $.j41(1, "p"), $.EFF(2), $.nI1(3, "i18n"), $.k0s(), $.EFF(4, "\n                ")), 2 & t && ($.R7$(2), $.JRh($.bMT(3, 1, "customDesc")))
			}

			function ft(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.qex(0), $.EFF(1, "\n            "), $.j41(2, "div", 37), $.EFF(3, "\n              "), $.j41(4, "div", 38), $.EFF(5, "\n                "), $.j41(6, "bit-form-control"), $.EFF(7, "\n                  "), $.nrm(8, "input", 39), $.EFF(9, "\n                  "), $.j41(10, "bit-label"), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n                "), $.k0s(), $.EFF(14, "\n                "), $.j41(15, "bit-form-control"), $.EFF(16, "\n                  "), $.nrm(17, "input", 40), $.EFF(18, "\n                  "), $.j41(19, "bit-label"), $.EFF(20), $.nI1(21, "i18n"), $.k0s(), $.EFF(22, "\n                "), $.k0s(), $.EFF(23, "\n                "), $.j41(24, "bit-form-control"), $.EFF(25, "\n                  "), $.nrm(26, "input", 41), $.EFF(27, "\n                  "), $.j41(28, "bit-label"), $.EFF(29), $.nI1(30, "i18n"), $.k0s(), $.EFF(31, "\n                "), $.k0s(), $.EFF(32, "\n              "), $.k0s(), $.EFF(33, "\n              "), $.j41(34, "div", 38), $.EFF(35, "\n                "), $.j41(36, "app-nested-checkbox", 42), $.EFF(37, "\n                "), $.k0s(), $.EFF(38, "\n              "), $.k0s(), $.EFF(39, "\n              "), $.j41(40, "div", 38), $.EFF(41, "\n                "), $.j41(42, "div", 43), $.EFF(43, "\n                  "), $.j41(44, "bit-form-control"), $.EFF(45, "\n                    "), $.nrm(46, "input", 44), $.EFF(47, "\n                    "), $.j41(48, "bit-label"), $.EFF(49), $.nI1(50, "i18n"), $.k0s(), $.EFF(51, "\n                  "), $.k0s(), $.EFF(52, "\n                  "), $.j41(53, "bit-form-control"), $.EFF(54, "\n                    "), $.nrm(55, "input", 45), $.EFF(56, "\n                    "), $.j41(57, "bit-label"), $.EFF(58), $.nI1(59, "i18n"), $.k0s(), $.EFF(60, "\n                  "), $.k0s(), $.EFF(61, "\n                  "), $.j41(62, "bit-form-control"), $.EFF(63, "\n                    "), $.nrm(64, "input", 46), $.EFF(65, "\n                    "), $.j41(66, "bit-label"), $.EFF(67), $.nI1(68, "i18n"), $.k0s(), $.EFF(69, "\n                  "), $.k0s(), $.EFF(70, "\n                  "), $.j41(71, "bit-form-control"), $.EFF(72, "\n                    "), $.j41(73, "input", 47), $.bIt("change", (function() {
						$.eBV(t);
						const e = $.XpG(2);
						return $.Njj(e.handleDependentPermissions())
					})), $.k0s(), $.EFF(74, "\n                    "), $.j41(75, "bit-label"), $.EFF(76), $.nI1(77, "i18n"), $.k0s(), $.EFF(78, "\n                  "), $.k0s(), $.EFF(79, "\n                  "), $.j41(80, "bit-form-control"), $.EFF(81, "\n                    "), $.j41(82, "input", 48), $.bIt("change", (function() {
						$.eBV(t);
						const e = $.XpG(2);
						return $.Njj(e.handleDependentPermissions())
					})), $.k0s(), $.EFF(83, "\n                    "), $.j41(84, "bit-label"), $.EFF(85), $.nI1(86, "i18n"), $.k0s(), $.EFF(87, "\n                  "), $.k0s(), $.EFF(88, "\n                "), $.k0s(), $.EFF(89, "\n              "), $.k0s(), $.EFF(90, "\n            "), $.k0s(), $.EFF(91, "\n          "), $.bVm()
				}
				if (2 & t) {
					const t = $.XpG(2);
					$.R7$(2), $.Y8G("formGroup", t.permissionsGroup), $.R7$(9), $.JRh($.bMT(12, 10, "accessEventLogs")), $.R7$(9), $.JRh($.bMT(21, 12, "accessImportExport")), $.R7$(9), $.JRh($.bMT(30, 14, "accessReports")), $.R7$(7), $.Y8G("checkboxes", t.permissionsGroup.controls.manageAllCollectionsGroup), $.R7$(13), $.JRh($.bMT(50, 16, "manageGroups")), $.R7$(9), $.JRh($.bMT(59, 18, "manageSso")), $.R7$(9), $.JRh($.bMT(68, 20, "managePolicies")), $.R7$(9), $.JRh($.bMT(77, 22, "manageUsers")), $.R7$(9), $.JRh($.bMT(86, 24, "manageAccountRecovery"))
				}
			}

			function vt(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n            "), $.j41(2, "h3", 49), $.EFF(3), $.nI1(4, "i18n"), $.j41(5, "a", 50), $.nI1(6, "i18n"), $.EFF(7, "\n                "), $.nrm(8, "i", 24), $.EFF(9, "\n              "), $.k0s(), $.EFF(10, "\n            "), $.k0s(), $.EFF(11, "\n            "), $.j41(12, "p", 51), $.EFF(13), $.nI1(14, "i18n"), $.k0s(), $.EFF(15, "\n            "), $.j41(16, "bit-form-control"), $.EFF(17, "\n              "), $.nrm(18, "input", 52), $.EFF(19, "\n              "), $.j41(20, "bit-label"), $.EFF(21), $.nI1(22, "i18n"), $.k0s(), $.EFF(23, "\n            "), $.k0s(), $.EFF(24, "\n          "), $.bVm()), 2 & t) {
					const t = $.XpG(2);
					$.R7$(3), $.SpI("\n              ", $.bMT(4, 5, "secretsManager"), "\n              "), $.R7$(2), $.FS9("appA11yTitle", $.bMT(6, 7, "learnMore")), $.R7$(8), $.JRh($.bMT(14, 9, "secretsManagerAccessDescription")), $.R7$(5), $.Y8G("disabled", t.isOnSecretsManagerStandalone), $.R7$(3), $.SpI("\n                ", $.bMT(22, 11, "userAccessSecretsManagerGA"), "\n              ")
				}
			}

			function It(t, e) {
				if (1 & t && ($.j41(0, "bit-tab", 21), $.nI1(1, "i18n"), $.EFF(2, "\n          "), $.j41(3, "div", 53), $.EFF(4), $.nI1(5, "async"), $.nI1(6, "i18n"), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n          "), $.nrm(9, "bit-access-selector", 54), $.nI1(10, "i18n"), $.nI1(11, "i18n"), $.nI1(12, "i18n"), $.nI1(13, "async"), $.EFF(14, "\n        "), $.k0s()), 2 & t) {
					const t = $.XpG(2);
					$.Y8G("label", $.bMT(1, 7, "groups")), $.R7$(4), $.SpI("\n            ", $.bMT(5, 9, t.restrictEditingSelf$) ? $.bMT(6, 11, "restrictedGroupAccess") : $.bMT(7, 13, "groupAccessUserDesc"), "\n          "), $.R7$(5), $.Y8G("items", t.groupAccessItems)("columnHeader", $.bMT(10, 15, "groups"))("selectorLabelText", $.bMT(11, 17, "selectGroups"))("emptySelectionText", $.bMT(12, 19, "noGroupsAdded"))("hideMultiSelect", $.bMT(13, 21, t.restrictEditingSelf$))
				}
			}

			function kt(t, e) {
				1 & t && ($.j41(0, "div", 53), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n            ", $.bMT(2, 1, "cannotAddYourselfToCollections"), "\n          "))
			}

			function yt(t, e) {
				1 & t && ($.j41(0, "span"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "userPermissionOverrideHelperDesc"), "\n            "))
			}

			function Rt(t, e) {
				1 & t && ($.j41(0, "span"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "restrictedCollectionAssignmentDesc"), "\n            "))
			}

			function wt(t, e) {
				if (1 & t && ($.j41(0, "div", 53), $.EFF(1, "\n            "), $.DNE(2, yt, 3, 3, "span", 7), $.EFF(3, "\n            "), $.DNE(4, Rt, 3, 3, "span", 7), $.nI1(5, "async"), $.EFF(6, "\n          "), $.k0s()), 2 & t) {
					const t = $.XpG().ngIf,
						e = $.XpG();
					$.R7$(2), $.Y8G("ngIf", t.useGroups), $.R7$(2), $.Y8G("ngIf", !$.bMT(5, 2, e.canAssignAccessToAnyCollection$))
				}
			}

			function St(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "bit-tab-group", 20), $.mxI("selectedIndexChange", (function(e) {
						$.eBV(t);
						const n = $.XpG();
						return $.DH7(n.tabIndex, e) || (n.tabIndex = e), $.Njj(e)
					})), $.EFF(1, "\n        "), $.j41(2, "bit-tab", 21), $.nI1(3, "i18n"), $.EFF(4, "\n          "), $.DNE(5, bt, 9, 8, "ng-container", 7), $.EFF(6, "\n          "), $.j41(7, "bit-radio-group", 22), $.EFF(8, "\n            "), $.j41(9, "bit-label"), $.EFF(10), $.nI1(11, "i18n"), $.j41(12, "a", 23), $.nI1(13, "i18n"), $.EFF(14, "\n                "), $.nrm(15, "i", 24), $.EFF(16, "\n              "), $.k0s(), $.EFF(17, "\n            "), $.k0s(), $.EFF(18, "\n            "), $.j41(19, "bit-radio-button", 25), $.EFF(20, "\n              "), $.j41(21, "bit-label"), $.EFF(22), $.nI1(23, "i18n"), $.k0s(), $.EFF(24, "\n              "), $.j41(25, "bit-hint"), $.EFF(26), $.nI1(27, "i18n"), $.k0s(), $.EFF(28, "\n            "), $.k0s(), $.EFF(29, "\n            "), $.j41(30, "bit-radio-button", 26), $.EFF(31, "\n              "), $.j41(32, "bit-label"), $.EFF(33), $.nI1(34, "i18n"), $.k0s(), $.EFF(35, "\n              "), $.j41(36, "bit-hint"), $.EFF(37), $.nI1(38, "i18n"), $.k0s(), $.EFF(39, "\n            "), $.k0s(), $.EFF(40, "\n            "), $.j41(41, "bit-radio-button", 27), $.EFF(42, "\n              "), $.j41(43, "bit-label"), $.EFF(44), $.nI1(45, "i18n"), $.k0s(), $.EFF(46, "\n              "), $.j41(47, "bit-hint"), $.EFF(48), $.nI1(49, "i18n"), $.k0s(), $.EFF(50, "\n            "), $.k0s(), $.EFF(51, "\n            "), $.j41(52, "bit-radio-button", 28), $.EFF(53, "\n              "), $.j41(54, "bit-label"), $.EFF(55), $.nI1(56, "i18n"), $.k0s(), $.EFF(57, "\n              "), $.j41(58, "bit-hint"), $.EFF(59, "\n                "), $.DNE(60, gt, 11, 9, "ng-container", 29), $.EFF(61, "\n                "), $.DNE(62, Et, 5, 3, "ng-template", null, 0, $.C5r), $.EFF(64, "\n              "), $.k0s(), $.EFF(65, "\n            "), $.k0s(), $.EFF(66, "\n          "), $.k0s(), $.EFF(67, "\n          "), $.DNE(68, ft, 92, 26, "ng-container", 7), $.EFF(69, "\n          "), $.DNE(70, vt, 25, 13, "ng-container", 7), $.EFF(71, "\n          "), $.j41(72, "bit-form-field"), $.EFF(73, "\n            "), $.j41(74, "bit-label"), $.EFF(75), $.nI1(76, "i18n"), $.k0s(), $.EFF(77, "\n            "), $.nrm(78, "input", 30), $.EFF(79, "\n            "), $.j41(80, "bit-hint"), $.EFF(81), $.nI1(82, "i18n"), $.k0s(), $.EFF(83, "\n          "), $.k0s(), $.EFF(84, "\n        "), $.k0s(), $.EFF(85, "\n        "), $.DNE(86, It, 15, 23, "bit-tab", 31), $.EFF(87, "\n        "), $.j41(88, "bit-tab", 21), $.nI1(89, "i18n"), $.EFF(90, "\n          "), $.DNE(91, kt, 3, 3, "div", 32), $.nI1(92, "async"), $.EFF(93, "\n          "), $.DNE(94, wt, 7, 4, "div", 32), $.nI1(95, "async"), $.nI1(96, "async"), $.EFF(97, "\n          "), $.nrm(98, "bit-access-selector", 33), $.nI1(99, "i18n"), $.nI1(100, "i18n"), $.nI1(101, "i18n"), $.nI1(102, "async"), $.k0s(), $.EFF(103, "\n      "), $.k0s()
				}
				if (2 & t) {
					const t = e.ngIf,
						n = $.sdS(63),
						i = $.XpG();
					$.R50("selectedIndex", i.tabIndex), $.R7$(2), $.Y8G("label", $.bMT(3, 34, "role")), $.R7$(3), $.Y8G("ngIf", !i.editMode), $.R7$(5), $.SpI("\n              ", $.bMT(11, 36, "memberRole"), "\n              "), $.R7$(2), $.FS9("appA11yTitle", $.bMT(13, 38, "learnMoreAboutMemberRoles")), $.R7$(7), $.Y8G("value", i.organizationUserType.User), $.R7$(3), $.JRh($.bMT(23, 40, "user")), $.R7$(4), $.JRh($.bMT(27, 42, "userDesc")), $.R7$(4), $.Y8G("value", i.organizationUserType.Admin), $.R7$(3), $.JRh($.bMT(34, 44, "admin")), $.R7$(4), $.JRh($.bMT(38, 46, "adminDesc")), $.R7$(4), $.Y8G("value", i.organizationUserType.Owner), $.R7$(3), $.JRh($.bMT(45, 48, "owner")), $.R7$(4), $.JRh($.bMT(49, 50, "ownerDesc")), $.R7$(4), $.Y8G("value", i.organizationUserType.Custom)("disabled", !t.useCustomPermissions || null), $.R7$(3), $.JRh($.bMT(56, 52, "custom")), $.R7$(5), $.Y8G("ngIf", !t.useCustomPermissions)("ngIfElse", n), $.R7$(8), $.Y8G("ngIf", i.customUserTypeSelected), $.R7$(2), $.Y8G("ngIf", t.useSecretsManager), $.R7$(5), $.JRh($.bMT(76, 54, "externalId")), $.R7$(6), $.JRh($.bMT(82, 56, "externalIdDesc")), $.R7$(5), $.Y8G("ngIf", t.useGroups), $.R7$(2), $.Y8G("label", $.bMT(89, 58, "collections")), $.R7$(3), $.Y8G("ngIf", $.bMT(92, 60, i.restrictEditingSelf$)), $.R7$(3), $.Y8G("ngIf", !$.bMT(95, 62, i.restrictEditingSelf$) && (t.useGroups || !$.bMT(96, 64, i.canAssignAccessToAnyCollection$))), $.R7$(4), $.Y8G("permissionMode", i.PermissionMode.Edit)("showGroupColumn", t.useGroups)("items", i.collectionAccessItems)("columnHeader", $.bMT(99, 66, "collection"))("selectorLabelText", $.bMT(100, 68, "selectCollections"))("emptySelectionText", $.bMT(101, 70, "noCollectionsAdded"))("hideMultiSelect", $.bMT(102, 72, i.restrictEditingSelf$))
				}
			}

			function $t(t, e) {
				if (1 & t && ($.j41(0, "button", 55), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("bitAction", t.restore)("disabled", t.loading), $.R7$(), $.SpI("\n          ", $.bMT(2, 3, "restoreAccess"), "\n        ")
				}
			}

			function Gt(t, e) {
				if (1 & t && ($.j41(0, "button", 55), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("bitAction", t.revoke)("disabled", t.loading), $.R7$(), $.SpI("\n          ", $.bMT(2, 3, "revokeAccess"), "\n        ")
				}
			}

			function Tt(t, e) {
				if (1 & t && ($.nrm(0, "button", 56), $.nI1(1, "i18n")), 2 & t) {
					const t = $.XpG();
					$.Y8G("appA11yTitle", $.bMT(1, 3, "remove"))("bitAction", t.remove)("disabled", t.loading)
				}
			}

			function jt(t, e) {
				if (1 & t && ($.nrm(0, "button", 57), $.nI1(1, "i18n")), 2 & t) {
					const t = $.XpG();
					$.Y8G("appA11yTitle", $.bMT(1, 3, "delete"))("bitAction", t.delete)("disabled", t.loading)
				}
			}
			var Mt, Ut;
			! function(t) {
				t[t.Role = 0] = "Role", t[t.Groups = 1] = "Groups", t[t.Collections = 2] = "Collections"
			}(Mt || (Mt = {})),
			function(t) {
				t.Saved = "saved", t.Canceled = "canceled", t.Deleted = "deleted", t.Revoked = "revoked", t.Restored = "restored"
			}(Ut || (Ut = {}));
			class Ct {
				get customUserTypeSelected() {
					return this.formGroup.value.type === f.D7.Custom
				}
				constructor(t, e, n, i, s, o, r, a, c, l, E, w, S) {
					var $;
					this.params = t, this.dialogRef = e, this.i18nService = n, this.formBuilder = i, this.collectionAdminService = s, this.groupService = o, this.userService = r, this.organizationUserApiService = a, this.dialogService = c, this.accountService = l, this.toastService = w, this.configService = S, this.loading = !0, this.editMode = !1, this.isRevoked = !1, this.access = "selected", this.collections = [], this.organizationUserType = f.D7, this.PermissionMode = R.ZC, this.showNoMasterPasswordWarning = !1, this.collectionAccessItems = [], this.groupAccessItems = [], this.formGroup = this.formBuilder.group({
						emails: [""],
						type: f.D7.User,
						externalId: this.formBuilder.control({
							value: "",
							disabled: !0
						}),
						accessSecretsManager: !1,
						access: [
							[]
						],
						groups: [
							[]
						]
					}), this.permissionsGroup = this.formBuilder.group({
						manageAllCollectionsGroup: this.formBuilder.group({
							manageAllCollections: !1,
							createNewCollections: !1,
							editAnyCollection: !1,
							deleteAnyCollection: !1
						}),
						accessEventLogs: !1,
						accessImportExport: !1,
						accessReports: !1,
						manageGroups: !1,
						manageSso: !1,
						managePolicies: !1,
						manageUsers: !1,
						manageResetPassword: !1
					}), this.accountDeprovisioningEnabled$ = this.configService.getFeatureFlag$(k.T.AccountDeprovisioning), this.destroy$ = new u.B, this.submit = () => at(this, void 0, void 0, (function*() {
						var t;
						if (this.formGroup.markAllAsTouched(), this.formGroup.invalid) return void(this.tabIndex !== Mt.Role && this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("fieldOnTabRequiresAttention", this.i18nService.t("role"))
						}));
						const e = yield(0, F._)(this.organization$);
						if (!e.useCustomPermissions && this.customUserTypeSelected) return void this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("customNonEnterpriseError")
						});
						const n = new y.dc;
						if (n.id = this.params.organizationUserId, n.organizationId = this.params.organizationId, n.type = this.formGroup.value.type, n.permissions = this.setRequestPermissions(null !== (t = n.permissions) && void 0 !== t ? t : new v.n, n.type !== f.D7.Custom), n.collections = this.formGroup.value.access.filter((t => t.type === R.Uv.Collection)).map(R.yo), n.groups = (yield(0, F._)(this.restrictEditingSelf$)) ? null : this.formGroup.value.groups.map((t => t.id)), n.accessSecretsManager = this.formGroup.value.accessSecretsManager, this.editMode) yield this.userService.save(n);
						else {
							n.id = this.params.organizationUserId;
							const t = e.productTierType === I.K_.TeamsStarter ? 10 : 20,
								i = [...new Set(this.formGroup.value.emails.trim().split(/\s*,\s*/))];
							if (i.length > t) return void this.formGroup.controls.emails.setErrors({
								tooManyEmails: {
									message: this.i18nService.t("tooManyEmails", t)
								}
							});
							if (e.hasReseller && this.params.numSeatsUsed + i.length > e.seats) return void this.formGroup.controls.emails.setErrors({
								tooManyEmails: {
									message: this.i18nService.t("seatLimitReachedContactYourProvider")
								}
							});
							yield this.userService.invite(i, n)
						}
						this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t(this.editMode ? "editedUserId" : "invitedUsers", this.params.name)
						}), this.close(Ut.Saved)
					})), this.remove = () => at(this, void 0, void 0, (function*() {
						if (!this.editMode) return;
						const t = this.params.usesKeyConnector ? "removeUserConfirmationKeyConnector" : "removeOrgUserConfirmation";
						let e = yield this.dialogService.openSimpleDialog({
							title: {
								key: "removeUserIdAccess",
								placeholders: [this.params.name]
							},
							content: {
								key: t
							},
							type: "warning"
						});
						return !!e && (!(this.showNoMasterPasswordWarning && (e = yield this.noMasterPasswordConfirmationDialog(), !e)) && (yield this.organizationUserApiService.removeOrganizationUser(this.params.organizationId, this.params.organizationUserId), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("removedUserId", this.params.name)
						}), void this.close(Ut.Deleted)))
					})), this.revoke = () => at(this, void 0, void 0, (function*() {
						if (!this.editMode) return;
						let t = yield this.dialogService.openSimpleDialog({
							title: {
								key: "revokeUserId",
								placeholders: [this.params.name]
							},
							content: {
								key: "revokeUserConfirmation"
							},
							acceptButtonText: {
								key: "revokeAccess"
							},
							type: "warning"
						});
						return !!t && (!(this.showNoMasterPasswordWarning && (t = yield this.noMasterPasswordConfirmationDialog(), !t)) && (yield this.organizationUserApiService.revokeOrganizationUser(this.params.organizationId, this.params.organizationUserId), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("revokedUserId", this.params.name)
						}), this.isRevoked = !0, void this.close(Ut.Revoked)))
					})), this.restore = () => at(this, void 0, void 0, (function*() {
						this.editMode && (yield this.organizationUserApiService.restoreOrganizationUser(this.params.organizationId, this.params.organizationUserId), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("restoredUserId", this.params.name)
						}), this.isRevoked = !1, this.close(Ut.Restored))
					})), this.delete = () => at(this, void 0, void 0, (function*() {
						if (!this.editMode) return;
						if (!(yield this.dialogService.openSimpleDialog({
								title: {
									key: "deleteOrganizationUser",
									placeholders: [this.params.name]
								},
								content: {
									key: "deleteOrganizationUserWarningDesc",
									placeholders: [this.params.name]
								},
								type: "warning",
								acceptButtonText: {
									key: "delete"
								},
								cancelButtonText: {
									key: "cancel"
								}
							}))) return !1;
						yield this.organizationUserApiService.deleteOrganizationUser(this.params.organizationId, this.params.organizationUserId), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("organizationUserDeleted", this.params.name)
						}), this.close(Ut.Deleted)
					})), this.ProductTierType = I.K_, this.organization$ = E.get$(this.params.organizationId).pipe((0, d.t)({
						refCount: !0,
						bufferSize: 1
					})), this.editMode = null != this.params.organizationUserId, this.tabIndex = null !== ($ = this.params.initialTab) && void 0 !== $ ? $ : Mt.Role, this.title = this.i18nService.t(this.editMode ? "editMember" : "inviteMember"), this.isOnSecretsManagerStandalone = this.params.isOnSecretsManagerStandalone, this.isOnSecretsManagerStandalone && this.formGroup.patchValue({
						accessSecretsManager: !0
					});
					const G = this.organization$.pipe((0, p.n)((t => t.useGroups ? this.groupService.getAllDetails(this.params.organizationId) : (0, h.of)([])))),
						T = this.params.organizationUserId ? this.userService.get(this.params.organizationId, this.params.organizationUserId) : (0, h.of)(null);
					this.allowAdminAccessToAllCollectionItems$ = this.organization$.pipe((0, m.T)((t => t.allowAdminAccessToAllCollectionItems))), this.restrictEditingSelf$ = (0, b.z)([this.allowAdminAccessToAllCollectionItems$, T, this.accountService.activeAccount$]).pipe((0, m.T)((([t, e, n]) => !t && null != e && e.userId == n.id)), (0, d.t)({
						refCount: !0,
						bufferSize: 1
					})), this.restrictEditingSelf$.pipe((0, g.Q)(this.destroy$)).subscribe((t => {
						t ? this.formGroup.controls.groups.disable() : this.formGroup.controls.groups.enable()
					})), this.canAssignAccessToAnyCollection$ = (0, b.z)([this.organization$, this.allowAdminAccessToAllCollectionItems$]).pipe((0, m.T)((([t, e]) => t.canEditAnyCollection || t.permissions.manageUsers && e))), (0, b.z)({
						organization: this.organization$,
						collections: this.collectionAdminService.getAll(this.params.organizationId),
						userDetails: T,
						groups: G
					}).pipe((0, g.Q)(this.destroy$)).subscribe((({
						organization: t,
						collections: e,
						userDetails: n,
						groups: i
					}) => {
						this.setFormValidators(t), this.groupAccessItems = [].concat(i.map((t => {
							return e = t, {
								type: R.Uv.Group,
								id: e.id,
								labelName: e.name,
								listName: e.name
							};
							var e
						}))), this.collectionAccessItems = e.map((e => Dt(e, t, null == n ? void 0 : e.users.find((t => t.id === n.id))))).filter((t => !t.readonly || (null == n ? void 0 : n.collections.some((e => e.id == t.id))))), null != n && this.loadOrganizationUser(n, i, e, t), this.loading = !1
					})), this.remainingSeats$ = this.organization$.pipe((0, m.T)((t => t.seats - this.params.numSeatsUsed)))
				}
				setFormValidators(t) {
					const e = [l.k0.required, w, S(t, this.params.allOrganizationUserEmails, this.i18nService.t("subscriptionUpgrade", t.seats))],
						n = this.formGroup.get("emails");
					n.setValidators(e), n.updateValueAndValidity()
				}
				loadOrganizationUser(t, e, n, i) {
					if (!t) throw new Error("Could not find user to edit.");
					this.isRevoked = t.status === f.Zx.Revoked, this.showNoMasterPasswordWarning = t.status > f.Zx.Invited && !1 === t.hasMasterPassword;
					const s = {
						createNewCollections: t.permissions.createNewCollections,
						editAnyCollection: t.permissions.editAnyCollection,
						deleteAnyCollection: t.permissions.deleteAnyCollection,
						manageAllCollections: t.permissions.createNewCollections && t.permissions.editAnyCollection && t.permissions.deleteAnyCollection
					};
					t.type === f.D7.Custom && this.permissionsGroup.patchValue({
						accessEventLogs: t.permissions.accessEventLogs,
						accessImportExport: t.permissions.accessImportExport,
						accessReports: t.permissions.accessReports,
						manageGroups: t.permissions.manageGroups,
						manageSso: t.permissions.manageSso,
						managePolicies: t.permissions.managePolicies,
						manageUsers: t.permissions.manageUsers,
						manageResetPassword: t.permissions.manageResetPassword,
						manageAllCollectionsGroup: s
					});
					const o = e.filter((e => t.groups.includes(e.id))).flatMap((t => t.collections.map((e => {
						const i = n.find((t => t.id === e.id));
						return {
							group: t,
							collection: i,
							accessSelection: e
						}
					}))));
					this.collectionAccessItems = this.collectionAccessItems.concat(o.map((({
						collection: t,
						accessSelection: e,
						group: n
					}) => Dt(t, i, e, n))));
					const r = function(t, e) {
							if (null == t) return [];
							return t.collections.filter((t => !e.find((e => e.id == t.id)).readonly)).map((t => ({
								id: t.id,
								type: R.Uv.Collection,
								permission: (0, R.Jh)(t)
							})))
						}(t, this.collectionAccessItems),
						a = function(t) {
							if (null == t) return [];
							return [].concat(t.map((t => ({
								id: t,
								type: R.Uv.Group
							}))))
						}(t.groups);
					this.formGroup.removeControl("emails"), this.formGroup.patchValue({
						type: t.type,
						externalId: t.externalId,
						access: r,
						accessSecretsManager: t.accessSecretsManager,
						groups: a
					})
				}
				check(t, e) {
					t.checked = null == e ? !t.checked : e, t.checked || (t.readOnly = !1)
				}
				selectAll(t) {
					this.collections.forEach((e => this.check(e, t)))
				}
				setRequestPermissions(t, e) {
					if (e) return new v.n;
					const n = {
						accessEventLogs: this.permissionsGroup.value.accessEventLogs,
						accessImportExport: this.permissionsGroup.value.accessImportExport,
						accessReports: this.permissionsGroup.value.accessReports,
						manageGroups: this.permissionsGroup.value.manageGroups,
						manageSso: this.permissionsGroup.value.manageSso,
						managePolicies: this.permissionsGroup.value.managePolicies,
						manageUsers: this.permissionsGroup.value.manageUsers,
						manageResetPassword: this.permissionsGroup.value.manageResetPassword,
						createNewCollections: this.permissionsGroup.value.manageAllCollectionsGroup.createNewCollections,
						editAnyCollection: this.permissionsGroup.value.manageAllCollectionsGroup.editAnyCollection,
						deleteAnyCollection: this.permissionsGroup.value.manageAllCollectionsGroup.deleteAnyCollection
					};
					return Object.assign(t, n)
				}
				handleDependentPermissions() {
					this.permissionsGroup.value.manageResetPassword && !this.permissionsGroup.value.manageUsers && (this.permissionsGroup.value.manageUsers = !0, document.getElementById("manageUsers").checked = !0, this.toastService.showToast({
						variant: "info",
						title: null,
						message: this.i18nService.t("accountRecoveryManageUsers")
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				cancel() {
					return at(this, void 0, void 0, (function*() {
						this.close(Ut.Canceled)
					}))
				}
				close(t) {
					this.dialogRef.close(t)
				}
				noMasterPasswordConfirmationDialog() {
					return this.dialogService.openSimpleDialog({
						title: {
							key: "removeOrgUserNoMasterPasswordTitle"
						},
						content: {
							key: "removeOrgUserNoMasterPasswordDesc",
							placeholders: [this.params.name]
						},
						type: "warning"
					})
				}
			}

			function Dt(t, e, n, i) {
				return {
					type: R.Uv.Collection,
					id: i ? `${t.id}-${i.id}` : t.id,
					labelName: t.name,
					listName: t.name,
					readonly: void 0 !== i || !t.canEditUserAccess(e),
					readonlyPermission: n ? (0, R.Jh)(n) : void 0,
					viaGroupName: null == i ? void 0 : i.name
				}
			}
			Ct.ɵfac = function(t) {
				return new(t || Ct)($.rXU(c.Qs), $.rXU(c.ce), $.rXU(G.W), $.rXU(l.ok), $.rXU(E.vE), $.rXU(y.nK), $.rXU(y.WW), $.rXU(E.uB), $.rXU(T.o), $.rXU(M.Di), $.rXU(U.PV), $.rXU(j.f), $.rXU(C.w))
			}, Ct.ɵcmp = $.VBU({
				type: Ct,
				selectors: [
					["ng-component"]
				],
				decls: 45,
				vars: 26,
				consts: [
					["enterprise", ""],
					[3, "formGroup", "bitSubmit"],
					["dialogSize", "large", 3, "disablePadding"],
					["bitDialogTitle", ""],
					["class", "tw-text-sm tw-normal-case tw-text-muted", 4, "ngIf"],
					["bitBadge", "", "variant", "secondary", 4, "ngIf"],
					["bitDialogContent", ""],
					[4, "ngIf"],
					[3, "selectedIndex", "selectedIndexChange", 4, "ngIf"],
					["bitDialogFooter", ""],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", 3, "disabled"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "click", "disabled"],
					[1, "tw-ml-auto"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitAction", "disabled", 4, "ngIf"],
					["type", "button", "bitIconButton", "bwi-close", "buttonType", "danger", "bitFormButton", "", 3, "appA11yTitle", "bitAction", "disabled", 4, "ngIf"],
					["type", "button", "bitIconButton", "bwi-trash", "buttonType", "danger", "bitFormButton", "", 3, "appA11yTitle", "bitAction", "disabled", 4, "ngIf"],
					[1, "tw-text-sm", "tw-normal-case", "tw-text-muted"],
					["bitBadge", "", "variant", "secondary"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "selectedIndexChange", "selectedIndex"],
					[3, "label"],
					["formControlName", "type"],
					["bitLink", "", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/user-types-access-control/", "slot", "end", 3, "appA11yTitle"],
					["aria-hidden", "true", 1, "bwi", "bwi-question-circle"],
					["id", "userTypeUser", 3, "value"],
					["id", "userTypeAdmin", 3, "value"],
					["id", "userTypeOwner", 3, "value"],
					["id", "userTypeCustom", 3, "value", "disabled"],
					[4, "ngIf", "ngIfElse"],
					["bitInput", "", "type", "text", "formControlName", "externalId"],
					[3, "label", 4, "ngIf"],
					["class", "tw-mb-6", 4, "ngIf"],
					["formControlName", "access", 3, "permissionMode", "showGroupColumn", "items", "columnHeader", "selectorLabelText", "emptySelectionText", "hideMultiSelect"],
					["bitTypography", "body1"],
					["id", "emails", "type", "text", "appAutoFocus", "", "bitInput", "", "formControlName", "emails"],
					["bitLink", "", "href", "https://bitwarden.com/contact/", "target", "_blank", "rel", "noreferrer"],
					[1, "tw-grid", "tw-grid-cols-12", "tw-gap-4", 3, "formGroup"],
					[1, "tw-col-span-4"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "accessEventLogs"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "accessImportExport"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "accessReports"],
					["parentId", "manageAllCollections", 3, "checkboxes"],
					[1, "tw-mb-3"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "manageGroups"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "manageSso"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "managePolicies"],
					["id", "manageUsers", "type", "checkbox", "bitCheckbox", "", "formControlName", "manageUsers", 3, "change"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "manageResetPassword", 3, "change"],
					[1, "tw-mt-4"],
					["bitLink", "", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/manage-your-organization/#access-to-secrets-manager", 3, "appA11yTitle"],
					[1, "tw-text-muted"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "accessSecretsManager", 3, "disabled"],
					[1, "tw-mb-6"],
					["formControlName", "groups", 3, "items", "columnHeader", "selectorLabelText", "emptySelectionText", "hideMultiSelect"],
					["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitAction", "disabled"],
					["type", "button", "bitIconButton", "bwi-close", "buttonType", "danger", "bitFormButton", "", 3, "appA11yTitle", "bitAction", "disabled"],
					["type", "button", "bitIconButton", "bwi-trash", "buttonType", "danger", "bitFormButton", "", 3, "appA11yTitle", "bitAction", "disabled"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "form", 1), $.EFF(1, "\n  "), $.j41(2, "bit-dialog", 2), $.EFF(3, "\n    "), $.j41(4, "span", 3), $.EFF(5), $.DNE(6, lt, 2, 1, "span", 4), $.EFF(7, "\n      "), $.DNE(8, ut, 3, 3, "span", 5), $.EFF(9, "\n    "), $.k0s(), $.EFF(10, "\n    "), $.j41(11, "div", 6), $.EFF(12, "\n      "), $.DNE(13, Ft, 9, 6, "ng-container", 7), $.EFF(14, "\n      "), $.DNE(15, St, 104, 74, "bit-tab-group", 8), $.nI1(16, "async"), $.EFF(17, "\n    "), $.k0s(), $.EFF(18, "\n    "), $.qex(19, 9), $.EFF(20, "\n      "), $.j41(21, "button", 10), $.EFF(22), $.nI1(23, "i18n"), $.k0s(), $.EFF(24, "\n      "), $.j41(25, "button", 11), $.bIt("click", (function() {
						return e.cancel()
					})), $.EFF(26), $.nI1(27, "i18n"), $.k0s(), $.EFF(28, "\n      "), $.j41(29, "div", 12), $.EFF(30, "\n        "), $.DNE(31, $t, 3, 5, "button", 13), $.EFF(32, "\n        "), $.DNE(33, Gt, 3, 5, "button", 13), $.EFF(34, "\n        "), $.DNE(35, Tt, 2, 5, "button", 14), $.nI1(36, "async"), $.EFF(37, "\n        "), $.DNE(38, jt, 2, 5, "button", 15), $.nI1(39, "async"), $.EFF(40, "\n      "), $.k0s(), $.EFF(41, "\n    "), $.bVm(), $.EFF(42, "\n  "), $.k0s(), $.EFF(43, "\n"), $.k0s(), $.EFF(44, "\n")), 2 & t && ($.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), $.R7$(2), $.Y8G("disablePadding", !e.loading), $.R7$(3), $.SpI("\n      ", e.title, "\n      "), $.R7$(), $.Y8G("ngIf", !e.loading && e.params.name), $.R7$(2), $.Y8G("ngIf", e.isRevoked), $.R7$(5), $.Y8G("ngIf", e.loading), $.R7$(2), $.Y8G("ngIf", $.bMT(16, 16, !e.loading && e.organization$)), $.R7$(6), $.Y8G("disabled", e.loading), $.R7$(), $.SpI("\n        ", $.bMT(23, 18, "save"), "\n      "), $.R7$(3), $.Y8G("disabled", e.loading), $.R7$(), $.SpI("\n        ", $.bMT(27, 20, "cancel"), "\n      "), $.R7$(5), $.Y8G("ngIf", e.editMode && e.isRevoked), $.R7$(2), $.Y8G("ngIf", e.editMode && !e.isRevoked), $.R7$(2), $.Y8G("ngIf", e.editMode && (!$.bMT(36, 22, e.accountDeprovisioningEnabled$) || !e.params.managedByOrganization)), $.R7$(3), $.Y8G("ngIf", e.editMode && $.bMT(39, 24, e.accountDeprovisioningEnabled$) && e.params.managedByOrganization))
				},
				dependencies: [D.bT, l.qT, l.me, l.Zm, l.BC, l.cb, l.j4, l.JD, x.C, N.p, P.$, Y.L, z.n, A.Q, X.P, B.m, V.f, O.m, J.s, q.J, K.h, L.s, W.L, _.d, Q.Y, Z.W, H.j, tt.r, et.t, rt, D.Jj, it.$],
				encapsulation: 2
			});
			var xt = n(8297);
			class Nt {}
			Nt.ɵfac = function(t) {
				return new(t || Nt)
			}, Nt.ɵmod = $.$C({
				type: Nt
			}), Nt.ɵinj = $.G2t({
				imports: [a.R, xt.K]
			});
			var Pt = n(89459),
				Yt = n(77259),
				zt = n(83731),
				At = n(73276),
				Xt = n(36790),
				Bt = n(88565),
				Vt = n(90171),
				Ot = n(9477),
				Jt = n(38449),
				qt = n(56953),
				Kt = n(39488),
				Lt = n(22848),
				Wt = n(16452),
				_t = n(16878),
				Qt = n(36006),
				Zt = n(12277),
				Ht = n(56962),
				te = n(35631),
				ee = n(7730),
				ne = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};
			class ie {
				constructor(t, e, n, i, s) {
					this.data = t, this.dialogRef = e, this.keyService = n, this.logService = i, this.organizationManagementPreferencesService = s, this.loading = !0, this.formGroup = new l.gE({
						dontAskAgain: new l.MJ(!1)
					}), this.submit = () => ne(this, void 0, void 0, (function*() {
						this.loading || (this.formGroup.value.dontAskAgain && (yield this.organizationManagementPreferencesService.autoConfirmFingerPrints.set(!0)), yield this.data.confirmUser(this.publicKey), this.dialogRef.close())
					})), this.name = t.name, this.userId = t.userId, this.publicKey = t.publicKey
				}
				ngOnInit() {
					return ne(this, void 0, void 0, (function*() {
						try {
							if (null != this.publicKey) {
								const t = yield this.keyService.getFingerprint(this.userId, this.publicKey);
								null != t && (this.fingerprint = t.join("-"))
							}
						} catch (t) {
							this.logService.error(t)
						}
						this.loading = !1
					}))
				}
				static open(t, e) {
					return t.open(ie, e)
				}
			}
			ie.ɵfac = function(t) {
				return new(t || ie)($.rXU(c.Qs), $.rXU(c.ce), $.rXU(Lt.Lu), $.rXU(Ht.K), $.rXU(te.y))
			}, ie.ɵcmp = $.VBU({
				type: ie,
				selectors: [
					["app-user-confirm"]
				],
				decls: 50,
				vars: 22,
				consts: [
					[3, "formGroup", "bitSubmit"],
					["dialogSize", "default"],
					["bitDialogTitle", ""],
					["bitTypography", "body1", 1, "tw-text-muted"],
					["bitDialogContent", ""],
					["bitTypography", "body1"],
					["bitLink", "", "href", "https://bitwarden.com/help/fingerprint-phrase/", "target", "_blank", "rel", "noreferrer"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "dontAskAgain"],
					["bitDialogFooter", ""],
					["bitButton", "", "bitFormButton", "", "type", "submit", "buttonType", "primary"],
					["bitButton", "", "bitFormButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "form", 0), $.EFF(1, "\n  "), $.j41(2, "bit-dialog", 1), $.EFF(3, "\n    "), $.j41(4, "span", 2), $.EFF(5), $.nI1(6, "i18n"), $.j41(7, "span", 3), $.EFF(8), $.k0s(), $.EFF(9, "\n    "), $.k0s(), $.EFF(10, "\n    "), $.qex(11, 4), $.EFF(12, "\n      "), $.j41(13, "p", 5), $.EFF(14), $.nI1(15, "i18n"), $.j41(16, "a", 6), $.EFF(17), $.nI1(18, "i18n"), $.k0s(), $.EFF(19, "\n      "), $.k0s(), $.EFF(20, "\n      "), $.j41(21, "p", 5), $.EFF(22, "\n        "), $.j41(23, "code"), $.EFF(24), $.k0s(), $.EFF(25, "\n      "), $.k0s(), $.EFF(26, "\n      "), $.j41(27, "bit-form-control"), $.EFF(28, "\n        "), $.nrm(29, "input", 7), $.EFF(30, "\n        "), $.j41(31, "bit-label"), $.EFF(32), $.nI1(33, "i18n"), $.k0s(), $.EFF(34, "\n      "), $.k0s(), $.EFF(35, "\n    "), $.bVm(), $.EFF(36, "\n    "), $.qex(37, 8), $.EFF(38, "\n      "), $.j41(39, "button", 9), $.EFF(40), $.nI1(41, "i18n"), $.k0s(), $.EFF(42, "\n      "), $.j41(43, "button", 10), $.EFF(44), $.nI1(45, "i18n"), $.k0s(), $.EFF(46, "\n    "), $.bVm(), $.EFF(47, "\n  "), $.k0s(), $.EFF(48, "\n"), $.k0s(), $.EFF(49, "\n")), 2 & t && ($.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), $.R7$(5), $.SpI("\n      ", $.bMT(6, 10, "confirmUser"), "\n      "), $.R7$(3), $.JRh(e.name), $.R7$(6), $.SpI("\n        ", $.bMT(15, 12, "fingerprintEnsureIntegrityVerify"), "\n        "), $.R7$(3), $.SpI("\n          ", $.bMT(18, 14, "learnMore"), ""), $.R7$(7), $.JRh(e.fingerprint), $.R7$(8), $.JRh($.bMT(33, 16, "dontAskFingerprintAgain")), $.R7$(8), $.SpI("\n        ", $.bMT(41, 18, "confirm"), "\n      "), $.R7$(4), $.SpI("\n        ", $.bMT(45, 20, "cancel"), "\n      "))
				},
				dependencies: [l.qT, l.Zm, l.BC, l.cb, l.j4, l.JD, P.$, Y.L, A.Q, X.P, ee.I, B.m, V.f, O.m, W.L, tt.r, it.$],
				encapsulation: 2
			});
			var se = n(55542);

			function oe(t, e) {
				return n => function(t, e) {
					return null == e ? t.status != f.Zx.Revoked : t.status === e
				}(n, e) && function(t, e) {
					var n;
					const i = null == e ? void 0 : e.toLowerCase();
					return !i || t.email.toLowerCase().includes(i) || t.id.toLowerCase().includes(i) || (null === (n = t.name) || void 0 === n ? void 0 : n.toLowerCase().includes(i))
				}(n, t)
			}
			class re extends se.s {
				set data(t) {
					var e, n, i, s, o, r, a, c, l, u;
					super.data = t, this.activeUserCount = null !== (n = null === (e = this.data) || void 0 === e ? void 0 : e.filter((t => t.status !== this.statusType.Revoked)).length) && void 0 !== n ? n : 0, this.invitedUserCount = null !== (s = null === (i = this.data) || void 0 === i ? void 0 : i.filter((t => t.status === this.statusType.Invited)).length) && void 0 !== s ? s : 0, this.acceptedUserCount = null !== (r = null === (o = this.data) || void 0 === o ? void 0 : o.filter((t => t.status === this.statusType.Accepted)).length) && void 0 !== r ? r : 0, this.confirmedUserCount = null !== (c = null === (a = this.data) || void 0 === a ? void 0 : a.filter((t => t.status === this.statusType.Confirmed)).length) && void 0 !== c ? c : 0, this.revokedUserCount = null !== (u = null === (l = this.data) || void 0 === l ? void 0 : l.filter((t => t.status === this.statusType.Revoked)).length) && void 0 !== u ? u : 0
				}
				get data() {
					return super.data
				}
				checkUser(t, e) {
					t.checked = null == e ? !t.checked : e
				}
				getCheckedUsers() {
					return this.data.filter((t => t.checked))
				}
				checkAllFilteredUsers(t) {
					t && this.uncheckAllUsers();
					const e = this.filteredData,
						n = e.length > 500 ? 500 : e.length;
					for (let i = 0; i < n; i++) this.checkUser(e[i], t)
				}
				uncheckAllUsers() {
					this.data.forEach((t => t.checked = !1))
				}
				removeUser(t) {
					this.data = this.data.filter((e => e != t))
				}
				replaceUser(t) {
					const e = this.data.findIndex((e => e.id === t.id));
					if (e > -1) {
						const n = this.data.slice();
						n[e] = t, this.data = n
					}
				}
			}
			var ae = n(12012),
				ce = n(2471),
				le = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};
			class ue {
				get showConfirmUsers() {
					return this.dataSource.activeUserCount > 1 && this.dataSource.confirmedUserCount > 0 && this.dataSource.confirmedUserCount < 3 && this.dataSource.acceptedUserCount > 0
				}
				get showBulkConfirmUsers() {
					return this.dataSource.acceptedUserCount > 0
				}
				get showBulkReinviteUsers() {
					return this.dataSource.invitedUserCount > 0
				}
				constructor(t, e, n, i, s, o, r, a, c) {
					this.apiService = t, this.i18nService = e, this.keyService = n, this.validationService = i, this.logService = s, this.userNamePipe = o, this.dialogService = r, this.organizationManagementPreferencesService = a, this.toastService = c, this.searchControl = new l.MJ("", {
						nonNullable: !0
					}), this.statusToggle = new _t.t(null), (0, b.z)([this.searchControl.valueChanges.pipe((0, Qt.B)(200)), this.statusToggle]).pipe((0, zt.pQ)()).subscribe((([t, e]) => this.dataSource.filter = oe(t, e)))
				}
				load() {
					return le(this, void 0, void 0, (function*() {
						const t = yield this.getUsers();
						t instanceof Zt.s ? this.dataSource.data = null != t.data && t.data.length > 0 ? t.data : [] : Array.isArray(t) && (this.dataSource.data = t), this.firstLoaded = !0
					}))
				}
				invite() {
					this.edit(null)
				}
				removeUserConfirmationDialog(t) {
					return le(this, void 0, void 0, (function*() {
						return this.dialogService.openSimpleDialog({
							title: this.userNamePipe.transform(t),
							content: {
								key: "removeUserConfirmation"
							},
							type: "warning"
						})
					}))
				}
				remove(t) {
					return le(this, void 0, void 0, (function*() {
						if (!(yield this.removeUserConfirmationDialog(t))) return !1;
						this.actionPromise = this.removeUser(t.id);
						try {
							yield this.actionPromise, this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("removedUserId", this.userNamePipe.transform(t))
							}), this.dataSource.removeUser(t)
						} catch (e) {
							this.validationService.showError(e)
						}
						this.actionPromise = null
					}))
				}
				reinvite(t) {
					return le(this, void 0, void 0, (function*() {
						if (null == this.actionPromise) {
							this.actionPromise = this.reinviteUser(t.id);
							try {
								yield this.actionPromise, this.toastService.showToast({
									variant: "success",
									title: null,
									message: this.i18nService.t("hasBeenReinvited", this.userNamePipe.transform(t))
								})
							} catch (e) {
								this.validationService.showError(e)
							}
							this.actionPromise = null
						}
					}))
				}
				confirm(t) {
					return le(this, void 0, void 0, (function*() {
						const e = e => le(this, void 0, void 0, (function*() {
							try {
								this.actionPromise = this.confirmUser(t, e), yield this.actionPromise, t.status = this.userStatusType.Confirmed, this.dataSource.replaceUser(t), this.toastService.showToast({
									variant: "success",
									title: null,
									message: this.i18nService.t("hasBeenConfirmed", this.userNamePipe.transform(t))
								})
							} catch (n) {
								throw this.validationService.showError(n), n
							} finally {
								this.actionPromise = null
							}
						}));
						if (null == this.actionPromise) try {
							const i = yield this.apiService.getUserPublicKey(t.userId), s = nt.A.fromB64ToArray(i.publicKey), o = yield(0, F._)(this.organizationManagementPreferencesService.autoConfirmFingerPrints.state$);
							if (null == o || !o) {
								const n = ie.open(this.dialogService, {
									data: {
										name: this.userNamePipe.transform(t),
										userId: null != t ? t.userId : null,
										publicKey: s,
										confirmUser: () => e(s)
									}
								});
								return void(yield(0, Bt.s)(n.closed))
							}
							try {
								const e = yield this.keyService.getFingerprint(t.userId, s);
								this.logService.info(`User's fingerprint: ${e.join("-")}`)
							} catch (n) {
								this.logService.error(n)
							}
							yield e(s)
						} catch (n) {
							this.logService.error(`Handled exception: ${n}`)
						}
					}))
				}
			}
			ue.ɵfac = function(t) {
				return new(t || ue)($.rXU(ae.G), $.rXU(G.W), $.rXU(Lt.Lu), $.rXU(ce.B), $.rXU(Ht.K), $.rXU(Vt.b), $.rXU(T.o), $.rXU(te.y), $.rXU(j.f))
			}, ue.ɵdir = $.FsC({
				type: ue
			});
			var Fe = n(65551),
				de = n(76876),
				pe = n(95637),
				he = n(873),
				me = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};
			class be {
				constructor(t, e, n) {
					this.keyService = t, this.encryptService = e, this.i18nService = n, this.publicKeys = new Map, this.fingerprints = new Map, this.statuses = new Map, this.done = !1, this.loading = !0, this.submit = () => me(this, void 0, void 0, (function*() {
						this.loading = !0;
						try {
							const t = yield this.getCryptoKey(), e = [];
							for (const n of this.filteredUsers) {
								const i = this.publicKeys.get(n.id);
								if (null == i) continue;
								const s = yield this.encryptService.rsaEncrypt(t.key, i);
								e.push({
									id: n.id,
									key: s.encryptedString
								})
							}(yield this.postConfirmRequest(e)).data.forEach((t => {
								const e = "" !== t.error ? t.error : this.i18nService.t("bulkConfirmMessage");
								this.statuses.set(t.id, e)
							})), this.done = !0
						} catch (t) {
							this.error = t.message
						}
						this.loading = !1
					}))
				}
				ngOnInit() {
					return me(this, void 0, void 0, (function*() {
						this.excludedUsers = this.users.filter((t => !this.isAccepted(t))), this.filteredUsers = this.users.filter((t => this.isAccepted(t))), this.filteredUsers.length <= 0 && (this.done = !0);
						const t = yield this.getPublicKeys();
						for (const e of t.data) {
							const t = nt.A.fromB64ToArray(e.key),
								n = yield this.keyService.getFingerprint(e.userId, t);
							null != n && (this.publicKeys.set(e.id, t), this.fingerprints.set(e.id, n.join("-")))
						}
						this.loading = !1
					}))
				}
			}
			be.ɵfac = function(t) {
				return new(t || be)($.rXU(Lt.Lu), $.rXU(he.N), $.rXU(G.W))
			}, be.ɵdir = $.FsC({
				type: be
			});
			var ge = n(57144),
				Ee = n(44432),
				fe = n(38410),
				ve = n(22466),
				Ie = n(36572),
				ke = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};

			function ye(t, e) {
				1 & t && ($.j41(0, "bit-callout", 8), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n      ", $.bMT(2, 1, "noSelectedUsersApplicable"), "\n    "))
			}

			function Re(t, e) {
				if (1 & t && ($.j41(0, "bit-callout", 9), $.nI1(1, "i18n"), $.EFF(2), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("title", $.bMT(1, 2, "error")), $.R7$(2), $.SpI("\n      ", t.error, "\n    ")
				}
			}

			function we(t, e) {
				if (1 & t && ($.j41(0, "p", 22), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function Se(t, e) {
				if (1 & t && ($.j41(0, "tr", 18), $.EFF(1, "\n            "), $.j41(2, "td", 19), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 20), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 14), $.EFF(9), $.DNE(10, we, 2, 1, "p", 21), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.j41(13, "td", 14), $.EFF(14), $.k0s(), $.EFF(15, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 5, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(4), $.SpI("\n              ", n.fingerprints.get(t.id), "\n            ")
				}
			}

			function $e(t, e) {
				if (1 & t && ($.j41(0, "p", 22), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function Ge(t, e) {
				if (1 & t && ($.j41(0, "tr", 23), $.EFF(1, "\n            "), $.j41(2, "td", 19), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 20), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 14), $.EFF(9), $.DNE(10, $e, 2, 1, "p", 21), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.j41(13, "td", 14), $.EFF(14), $.nI1(15, "i18n"), $.k0s(), $.EFF(16, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit;
					$.R7$(4), $.Y8G("text", $.bMT(5, 5, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(4), $.SpI("\n              ", $.bMT(15, 7, "bulkFilteredMessage"), "\n            ")
				}
			}

			function Te(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Se, 16, 7, "tr", 16), $.EFF(2, "\n          "), $.DNE(3, Ge, 17, 9, "tr", 17), $.EFF(4, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.filteredUsers), $.R7$(2), $.Y8G("ngForOf", t.excludedUsers)
				}
			}

			function je(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n      "), $.j41(2, "p", 10), $.EFF(3), $.nI1(4, "i18n"), $.j41(5, "a", 11), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n      "), $.k0s(), $.EFF(9, "\n      "), $.j41(10, "bit-table"), $.EFF(11, "\n        "), $.qex(12, 12), $.EFF(13, "\n          "), $.j41(14, "tr"), $.EFF(15, "\n            "), $.j41(16, "th", 13), $.EFF(17), $.nI1(18, "i18n"), $.k0s(), $.EFF(19, "\n            "), $.j41(20, "th", 14), $.EFF(21), $.nI1(22, "i18n"), $.k0s(), $.EFF(23, "\n          "), $.k0s(), $.EFF(24, "\n        "), $.bVm(), $.EFF(25, "\n        "), $.DNE(26, Te, 5, 2, "ng-template", 15), $.EFF(27, "\n      "), $.k0s(), $.EFF(28, "\n    "), $.bVm()), 2 & t && ($.R7$(3), $.SpI("\n        ", $.bMT(4, 4, "fingerprintEnsureIntegrityVerify"), "\n        "), $.R7$(3), $.SpI("\n          ", $.bMT(7, 6, "learnMore"), ""), $.R7$(11), $.JRh($.bMT(18, 8, "user")), $.R7$(4), $.JRh($.bMT(22, 10, "fingerprint")))
			}

			function Me(t, e) {
				if (1 & t && ($.j41(0, "p", 22), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function Ue(t, e) {
				if (1 & t && ($.j41(0, "td", 14), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit,
						e = $.XpG(3);
					$.R7$(), $.SpI("\n              ", e.statuses.get(t.id), "\n            ")
				}
			}

			function Ce(t, e) {
				1 & t && ($.j41(0, "td", 14), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "bulkFilteredMessage"), "\n            "))
			}

			function De(t, e) {
				if (1 & t && ($.j41(0, "tr", 18), $.EFF(1, "\n            "), $.j41(2, "td", 19), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 20), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 14), $.EFF(9), $.DNE(10, Me, 2, 1, "p", 21), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.DNE(13, Ue, 2, 1, "td", 24), $.EFF(14, "\n            "), $.DNE(15, Ce, 3, 3, "td", 24), $.EFF(16, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 6, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(3), $.Y8G("ngIf", n.statuses.has(t.id)), $.R7$(2), $.Y8G("ngIf", !n.statuses.has(t.id))
				}
			}

			function xe(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, De, 17, 8, "tr", 16), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.filteredUsers)
				}
			}

			function Ne(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n      "), $.j41(2, "bit-table"), $.EFF(3, "\n        "), $.qex(4, 12), $.EFF(5, "\n          "), $.j41(6, "tr"), $.EFF(7, "\n            "), $.j41(8, "th", 13), $.EFF(9), $.nI1(10, "i18n"), $.k0s(), $.EFF(11, "\n            "), $.j41(12, "th", 14), $.EFF(13), $.nI1(14, "i18n"), $.k0s(), $.EFF(15, "\n          "), $.k0s(), $.EFF(16, "\n        "), $.bVm(), $.EFF(17, "\n        "), $.DNE(18, xe, 3, 1, "ng-template", 15), $.EFF(19, "\n      "), $.k0s(), $.EFF(20, "\n    "), $.bVm()), 2 & t && ($.R7$(9), $.JRh($.bMT(10, 2, "user")), $.R7$(4), $.JRh($.bMT(14, 4, "status")))
			}

			function Pe(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 25), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG();
						return $.Njj(e.submit())
					})), $.EFF(1), $.nI1(2, "i18n"), $.k0s()
				}
				if (2 & t) {
					const t = $.XpG();
					$.Y8G("disabled", t.loading), $.R7$(), $.SpI("\n      ", $.bMT(2, 2, "confirm"), "\n    ")
				}
			}
			class Ye extends be {
				constructor(t, e, n, i, s, o) {
					super(t, n, s), this.keyService = t, this.dialogParams = e, this.encryptService = n, this.organizationUserApiService = i, this.i18nService = s, this.stateProvider = o, this.getCryptoKey = () => ke(this, void 0, void 0, (function*() {
						return yield(0, F._)(this.organizationKey$)
					})), this.getPublicKeys = () => ke(this, void 0, void 0, (function*() {
						return yield this.organizationUserApiService.postOrganizationUsersPublicKey(this.organizationId, this.filteredUsers.map((t => t.id)))
					})), this.isAccepted = t => t.status === f.Zx.Accepted, this.postConfirmRequest = t => ke(this, void 0, void 0, (function*() {
						const e = new E.Kc(t);
						return yield this.organizationUserApiService.postOrganizationUserBulkConfirm(this.organizationId, e)
					})), this.organizationId = e.organizationId, this.organizationKey$ = this.stateProvider.activeUserId$.pipe((0, p.n)((t => this.keyService.orgKeys$(t))), (0, m.T)((t => t[this.organizationId])), (0, zt.pQ)()), this.users = e.users
				}
				static open(t, e) {
					return t.open(Ye, e)
				}
			}
			Ye.ɵfac = function(t) {
				return new(t || Ye)($.rXU(Lt.Lu), $.rXU(c.Qs), $.rXU(he.N), $.rXU(E.uB), $.rXU(G.W), $.rXU(pe.v2))
			}, Ye.ɵcmp = $.VBU({
				type: Ye,
				selectors: [
					["ng-component"]
				],
				features: [$.Vt3],
				decls: 24,
				vars: 12,
				consts: [
					["dialogSize", "large", 3, "title", "loading"],
					["bitDialogContent", ""],
					["type", "danger", 4, "ngIf"],
					["type", "danger", 3, "title", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "click", 4, "ngIf"],
					["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""],
					["type", "danger"],
					["type", "danger", 3, "title"],
					["bitTypography", "body1"],
					["bitLink", "", "href", "https://bitwarden.com/help/fingerprint-phrase/", "target", "_blank", "rel", "noreferrer"],
					["header", ""],
					["bitCell", "", "colspan", "2"],
					["bitCell", ""],
					["body", ""],
					["bitRow", "", "alignContent", "middle", 4, "ngFor", "ngForOf"],
					["alignContent", "middle", 4, "ngFor", "ngForOf"],
					["bitRow", "", "alignContent", "middle"],
					["bitCell", "", 1, "tw-w-5"],
					["size", "small", 3, "text", "id"],
					["class", "tw-text-muted tw-text-sm", 4, "ngIf"],
					[1, "tw-text-muted", "tw-text-sm"],
					["alignContent", "middle"],
					["bitCell", "", 4, "ngIf"],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "click", "disabled"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "bit-dialog", 0), $.nI1(1, "i18n"), $.EFF(2, "\n  "), $.qex(3, 1), $.EFF(4, "\n    "), $.DNE(5, ye, 3, 3, "bit-callout", 2), $.EFF(6, "\n    "), $.DNE(7, Re, 3, 4, "bit-callout", 3), $.EFF(8, "\n    "), $.DNE(9, je, 29, 12, "ng-container", 4), $.EFF(10, "\n    "), $.DNE(11, Ne, 21, 6, "ng-container", 4), $.EFF(12, "\n  "), $.bVm(), $.EFF(13, "\n  "), $.qex(14, 5), $.EFF(15, "\n    "), $.DNE(16, Pe, 3, 4, "button", 6), $.EFF(17, "\n    "), $.j41(18, "button", 7), $.EFF(19), $.nI1(20, "i18n"), $.k0s(), $.EFF(21, "\n  "), $.bVm(), $.EFF(22, "\n"), $.k0s(), $.EFF(23, "\n")), 2 & t && ($.Y8G("title", $.bMT(1, 8, "confirmUsers"))("loading", e.loading), $.R7$(5), $.Y8G("ngIf", e.filteredUsers.length <= 0), $.R7$(2), $.Y8G("ngIf", e.error), $.R7$(2), $.Y8G("ngIf", !e.loading && !e.done), $.R7$(2), $.Y8G("ngIf", !e.loading && e.done), $.R7$(5), $.Y8G("ngIf", !e.done), $.R7$(3), $.SpI("\n      ", $.bMT(20, 10, "close"), "\n    "))
				},
				dependencies: [D.Sq, D.bT, ge.f, A.Q, Ee.G, ee.I, B.m, W.L, fe.Q, ve.Y, Ie._, Ie.O, tt.r, it.$, Vt.b],
				encapsulation: 2
			});
			var ze = function(t, e, n, i) {
				return new(n || (n = Promise))((function(s, o) {
					function r(t) {
						try {
							c(i.next(t))
						} catch (e) {
							o(e)
						}
					}

					function a(t) {
						try {
							c(i.throw(t))
						} catch (e) {
							o(e)
						}
					}

					function c(t) {
						var e;
						t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(r, a)
					}
					c((i = i.apply(t, e || [])).next())
				}))
			};

			function Ae(t, e) {
				1 & t && ($.j41(0, "bit-callout", 8), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n      ", $.bMT(2, 1, "noSelectedMembersApplicable"), "\n    "))
			}

			function Xe(t, e) {
				if (1 & t && ($.j41(0, "bit-callout", 9), $.nI1(1, "i18n"), $.EFF(2), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("title", $.bMT(1, 2, "error")), $.R7$(2), $.SpI("\n      ", t.error, "\n    ")
				}
			}

			function Be(t, e) {
				1 & t && ($.j41(0, "bit-callout", 14), $.EFF(1, "\n        "), $.j41(2, "p", 15), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n      "), $.k0s()), 2 & t && ($.R7$(3), $.JRh($.bMT(4, 1, "deleteManyOrganizationUsersWarningDesc")))
			}

			function Ve(t, e) {
				1 & t && ($.j41(0, "span", 23), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n                  ", $.bMT(2, 1, "invited"), "\n                "))
			}

			function Oe(t, e) {
				if (1 & t && ($.j41(0, "small", 24), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function Je(t, e) {
				if (1 & t && ($.j41(0, "tr", 17), $.EFF(1, "\n            "), $.j41(2, "td", 18), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 19), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 20), $.EFF(9, "\n              "), $.j41(10, "div"), $.EFF(11), $.DNE(12, Ve, 3, 3, "span", 21), $.EFF(13, "\n              "), $.k0s(), $.EFF(14, "\n              "), $.DNE(15, Oe, 2, 1, "small", 22), $.EFF(16, "\n            "), $.k0s(), $.EFF(17, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 5, t))("id", t.id), $.R7$(7), $.SpI("\n                ", t.email, "\n                "), $.R7$(), $.Y8G("ngIf", t.status === n.userStatusType.Invited), $.R7$(3), $.Y8G("ngIf", t.name)
				}
			}

			function qe(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Je, 18, 7, "tr", 16), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function Ke(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n      "), $.DNE(2, Be, 6, 3, "bit-callout", 10), $.EFF(3, "\n      "), $.j41(4, "bit-table"), $.EFF(5, "\n        "), $.qex(6, 11), $.EFF(7, "\n          "), $.j41(8, "tr"), $.EFF(9, "\n            "), $.j41(10, "th", 12), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n          "), $.k0s(), $.EFF(14, "\n        "), $.bVm(), $.EFF(15, "\n        "), $.DNE(16, qe, 3, 1, "ng-template", 13), $.EFF(17, "\n      "), $.k0s(), $.EFF(18, "\n    "), $.bVm()), 2 & t) {
					const t = $.XpG();
					$.R7$(2), $.Y8G("ngIf", t.users.length > 0 && !t.error), $.R7$(9), $.JRh($.bMT(12, 2, "member"))
				}
			}

			function Le(t, e) {
				if (1 & t && ($.j41(0, "small", 24), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function We(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit,
						e = $.XpG(3);
					$.R7$(), $.SpI("\n              ", e.statuses.get(t.id), "\n            ")
				}
			}

			function _e(t, e) {
				1 & t && ($.j41(0, "td", 20), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "bulkFilteredMessage"), "\n            "))
			}

			function Qe(t, e) {
				if (1 & t && ($.j41(0, "tr", 17), $.EFF(1, "\n            "), $.j41(2, "td", 18), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 19), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 20), $.EFF(9), $.DNE(10, Le, 2, 1, "small", 22), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.DNE(13, We, 2, 1, "td", 25), $.EFF(14, "\n            "), $.DNE(15, _e, 3, 3, "td", 25), $.EFF(16, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 6, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(3), $.Y8G("ngIf", n.statuses.has(t.id)), $.R7$(2), $.Y8G("ngIf", !n.statuses.has(t.id))
				}
			}

			function Ze(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Qe, 17, 8, "tr", 16), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function He(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n      "), $.j41(2, "bit-table"), $.EFF(3, "\n        "), $.qex(4, 11), $.EFF(5, "\n          "), $.j41(6, "tr"), $.EFF(7, "\n            "), $.j41(8, "th", 12), $.EFF(9), $.nI1(10, "i18n"), $.k0s(), $.EFF(11, "\n            "), $.j41(12, "th", 20), $.EFF(13), $.nI1(14, "i18n"), $.k0s(), $.EFF(15, "\n          "), $.k0s(), $.EFF(16, "\n        "), $.bVm(), $.EFF(17, "\n        "), $.DNE(18, Ze, 3, 1, "ng-template", 13), $.EFF(19, "\n      "), $.k0s(), $.EFF(20, "\n    "), $.bVm()), 2 & t && ($.R7$(9), $.JRh($.bMT(10, 2, "member")), $.R7$(4), $.JRh($.bMT(14, 4, "status")))
			}

			function tn(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 26), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG();
						return $.Njj(e.submit())
					})), $.EFF(1), $.nI1(2, "i18n"), $.k0s()
				}
				if (2 & t) {
					const t = $.XpG();
					$.Y8G("disabled", t.loading), $.R7$(), $.SpI("\n      ", $.bMT(2, 2, "deleteMembers"), "\n    ")
				}
			}
			class en {
				constructor(t, e, n) {
					this.dialogParams = t, this.i18nService = e, this.organizationUserApiService = n, this.loading = !1, this.done = !1, this.error = null, this.statuses = new Map, this.userStatusType = f.Zx, this.organizationId = t.organizationId, this.users = t.users
				}
				submit() {
					return ze(this, void 0, void 0, (function*() {
						try {
							this.loading = !0, this.error = null;
							(yield this.organizationUserApiService.deleteManyOrganizationUsers(this.organizationId, this.users.map((t => t.id)))).data.forEach((t => {
								this.statuses.set(t.id, t.error ? t.error : this.i18nService.t("deletedSuccessfully"))
							})), this.done = !0
						} catch (t) {
							this.error = t.message
						} finally {
							this.loading = !1
						}
					}))
				}
				static open(t, e) {
					return t.open(en, e)
				}
			}
			en.ɵfac = function(t) {
				return new(t || en)($.rXU(c.Qs), $.rXU(G.W), $.rXU(E.uB))
			}, en.ɵcmp = $.VBU({
				type: en,
				selectors: [
					["ng-component"]
				],
				decls: 24,
				vars: 11,
				consts: [
					["dialogSize", "large", 3, "title"],
					["bitDialogContent", ""],
					["type", "danger", 4, "ngIf"],
					["type", "danger", 3, "title", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "click", 4, "ngIf"],
					["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""],
					["type", "danger"],
					["type", "danger", 3, "title"],
					["type", "warning", 4, "ngIf"],
					["header", ""],
					["bitCell", "", "colspan", "2"],
					["body", ""],
					["type", "warning"],
					["bitTypography", "body1"],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["bitCell", "", 1, "tw-w-5"],
					["size", "small", 3, "text", "id"],
					["bitCell", ""],
					["bitBadge", "", "class", "tw-text-xs", "variant", "secondary", 4, "ngIf"],
					["class", "tw-text-muted tw-block", 4, "ngIf"],
					["bitBadge", "", "variant", "secondary", 1, "tw-text-xs"],
					[1, "tw-text-muted", "tw-block"],
					["bitCell", "", 4, "ngIf"],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "click", "disabled"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "bit-dialog", 0), $.nI1(1, "i18n"), $.EFF(2, "\n  "), $.qex(3, 1), $.EFF(4, "\n    "), $.DNE(5, Ae, 3, 3, "bit-callout", 2), $.EFF(6, "\n    "), $.DNE(7, Xe, 3, 4, "bit-callout", 3), $.EFF(8, "\n    "), $.DNE(9, Ke, 19, 4, "ng-container", 4), $.EFF(10, "\n    "), $.DNE(11, He, 21, 6, "ng-container", 4), $.EFF(12, "\n  "), $.bVm(), $.EFF(13, "\n  "), $.qex(14, 5), $.EFF(15, "\n    "), $.DNE(16, tn, 3, 4, "button", 6), $.EFF(17, "\n    "), $.j41(18, "button", 7), $.EFF(19), $.nI1(20, "i18n"), $.k0s(), $.EFF(21, "\n  "), $.bVm(), $.EFF(22, "\n"), $.k0s(), $.EFF(23, "\n")), 2 & t && ($.Y8G("title", $.bMT(1, 7, "deleteMembers")), $.R7$(5), $.Y8G("ngIf", e.users.length <= 0), $.R7$(2), $.Y8G("ngIf", e.error), $.R7$(2), $.Y8G("ngIf", !e.done), $.R7$(2), $.Y8G("ngIf", e.done), $.R7$(5), $.Y8G("ngIf", !e.done && e.users.length > 0), $.R7$(3), $.SpI("\n      ", $.bMT(20, 9, "close"), "\n    "))
				},
				dependencies: [D.Sq, D.bT, ge.f, z.n, A.Q, Ee.G, ee.I, B.m, fe.Q, ve.Y, Ie._, Ie.O, tt.r, it.$, Vt.b],
				encapsulation: 2
			});
			var nn = n(37115),
				sn = n(58270),
				on = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};

			function rn(t, e) {
				if (1 & t && ($.j41(0, "div", 16), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.SpI("\n                  ", t.email, "\n                ")
				}
			}

			function an(t, e) {
				if (1 & t && ($.j41(0, "tr", 11), $.EFF(1, "\n          "), $.j41(2, "td", 5), $.EFF(3, "\n            "), $.j41(4, "div", 12), $.EFF(5, "\n              "), $.nrm(6, "bit-avatar", 13), $.nI1(7, "userName"), $.EFF(8, "\n              "), $.j41(9, "div", 14), $.EFF(10, "\n                "), $.j41(11, "div"), $.EFF(12), $.nI1(13, "userName"), $.k0s(), $.EFF(14, "\n                "), $.DNE(15, rn, 2, 1, "div", 15), $.EFF(16, "\n              "), $.k0s(), $.EFF(17, "\n            "), $.k0s(), $.EFF(18, "\n          "), $.k0s(), $.EFF(19, "\n          "), $.j41(20, "td", 5), $.EFF(21), $.nI1(22, "userType"), $.k0s(), $.EFF(23, "\n        "), $.k0s()), 2 & t) {
					const t = e.$implicit;
					$.R7$(6), $.Y8G("text", $.bMT(7, 6, t))("id", t.userId)("color", t.avatarColor), $.R7$(6), $.SpI("\n                  ", $.bMT(13, 8, t), "\n                "), $.R7$(3), $.Y8G("ngIf", t.name), $.R7$(6), $.JRh($.bMT(22, 10, t.type))
				}
			}

			function cn(t, e) {
				if (1 & t && ($.EFF(0, "\n        "), $.DNE(1, an, 24, 12, "tr", 10), $.nI1(2, "async"), $.EFF(3, "\n      ")), 2 & t) {
					const t = e.$implicit;
					$.R7$(), $.Y8G("ngForOf", $.bMT(2, 1, t))
				}
			}
			class ln {
				constructor(t, e, n, i, s, o) {
					this.dialogRef = t, this.data = e, this.organizationUserApiService = n, this.platformUtilsService = i, this.i18nService = s, this.toastService = o, this.dataSource = new se.s, this.submit = () => on(this, void 0, void 0, (function*() {
						yield this.organizationUserApiService.putOrganizationUserBulkEnableSecretsManager(this.data.orgId, this.dataSource.data.map((t => t.id))), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("activatedAccessToSecretsManager")
						}), this.dialogRef.close()
					}))
				}
				ngOnInit() {
					this.dataSource.data = this.data.users
				}
				static open(t, e) {
					return t.open(ln, {
						data: e
					})
				}
			}
			ln.ɵfac = function(t) {
				return new(t || ln)($.rXU(c.ce), $.rXU(c.Qs), $.rXU(E.uB), $.rXU(nn.y), $.rXU(G.W), $.rXU(j.f))
			}, ln.ɵcmp = $.VBU({
				type: ln,
				selectors: [
					["ng-component"]
				],
				decls: 44,
				vars: 20,
				consts: [
					["dialogSize", "large"],
					["bitDialogTitle", ""],
					["bitDialogContent", ""],
					[3, "dataSource"],
					["header", ""],
					["bitCell", ""],
					["body", ""],
					["bitDialogFooter", ""],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"],
					["type", "button", "bitButton", "", "buttonType", "secondary", "bitDialogClose", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					[1, "tw-flex", "tw-items-center"],
					["size", "small", 1, "tw-mr-3", 3, "text", "id", "color"],
					[1, "tw-flex", "tw-flex-col"],
					["class", "tw-text-sm tw-text-muted", 4, "ngIf"],
					[1, "tw-text-sm", "tw-text-muted"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "bit-dialog", 0), $.EFF(1, "\n  "), $.j41(2, "span", 1), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n  "), $.j41(6, "span", 2), $.EFF(7, "\n    "), $.j41(8, "p"), $.EFF(9), $.nI1(10, "i18n"), $.k0s(), $.EFF(11, "\n    "), $.j41(12, "bit-table", 3), $.EFF(13, "\n      "), $.qex(14, 4), $.EFF(15, "\n        "), $.j41(16, "tr"), $.EFF(17, "\n          "), $.j41(18, "th", 5), $.EFF(19), $.nI1(20, "i18n"), $.k0s(), $.EFF(21, "\n          "), $.j41(22, "th", 5), $.EFF(23), $.nI1(24, "i18n"), $.k0s(), $.EFF(25, "\n        "), $.k0s(), $.EFF(26, "\n      "), $.bVm(), $.EFF(27, "\n      "), $.DNE(28, cn, 4, 3, "ng-template", 6), $.EFF(29, "\n    "), $.k0s(), $.EFF(30, "\n  "), $.k0s(), $.EFF(31, "\n  "), $.qex(32, 7), $.EFF(33, "\n    "), $.j41(34, "button", 8), $.EFF(35), $.nI1(36, "i18n"), $.k0s(), $.EFF(37, "\n    "), $.j41(38, "button", 9), $.EFF(39), $.nI1(40, "i18n"), $.k0s(), $.EFF(41, "\n  "), $.bVm(), $.EFF(42, "\n"), $.k0s(), $.EFF(43, "\n")), 2 & t && ($.R7$(3), $.JRh($.bMT(4, 8, "activateSecretsManager")), $.R7$(6), $.JRh($.bMT(10, 10, "bulkEnableSecretsManagerDescription")), $.R7$(3), $.Y8G("dataSource", e.dataSource), $.R7$(7), $.JRh($.bMT(20, 12, "member")), $.R7$(4), $.JRh($.bMT(24, 14, "role")), $.R7$(11), $.Y8G("bitAction", e.submit), $.R7$(), $.SpI("\n      ", $.bMT(36, 16, "activateAccess"), "\n    "), $.R7$(4), $.SpI("\n      ", $.bMT(40, 18, "close"), "\n    "))
				},
				dependencies: [D.Sq, D.bT, N.p, ge.f, A.Q, ee.I, B.m, fe.Q, ve.Y, Ie._, Ie.O, D.Jj, it.$, Vt.b, sn.c],
				encapsulation: 2
			});
			var un = function(t, e, n, i) {
				return new(n || (n = Promise))((function(s, o) {
					function r(t) {
						try {
							c(i.next(t))
						} catch (e) {
							o(e)
						}
					}

					function a(t) {
						try {
							c(i.throw(t))
						} catch (e) {
							o(e)
						}
					}

					function c(t) {
						var e;
						t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(r, a)
					}
					c((i = i.apply(t, e || [])).next())
				}))
			};
			class Fn {
				constructor(t) {
					this.i18nService = t, this.statuses = new Map, this.done = !1, this.loading = !1, this.submit = () => un(this, void 0, void 0, (function*() {
						this.loading = !0;
						try {
							(yield this.deleteUsers()).data.forEach((t => {
								const e = "" !== t.error ? t.error : this.i18nService.t("bulkRemovedMessage");
								this.statuses.set(t.id, e)
							})), this.done = !0
						} catch (t) {
							this.error = t.message
						}
						this.loading = !1
					}))
				}
			}

			function dn(t, e) {
				1 & t && ($.j41(0, "bit-callout", 8), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n      ", $.bMT(2, 1, "noSelectedUsersApplicable"), "\n    "))
			}

			function pn(t, e) {
				if (1 & t && ($.j41(0, "bit-callout", 9), $.nI1(1, "i18n"), $.EFF(2), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("title", $.bMT(1, 2, "error")), $.R7$(2), $.SpI("\n      ", t.error, "\n    ")
				}
			}

			function hn(t, e) {
				1 & t && ($.j41(0, "p", 16), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n          ", $.bMT(2, 1, "removeMembersWithoutMasterPasswordWarning"), "\n        "))
			}

			function mn(t, e) {
				if (1 & t && ($.j41(0, "bit-callout", 15), $.EFF(1, "\n        "), $.j41(2, "p", 16), $.EFF(3), $.k0s(), $.EFF(4, "\n        "), $.DNE(5, hn, 3, 3, "p", 17), $.EFF(6, "\n      "), $.k0s()), 2 & t) {
					const t = $.XpG(2);
					$.R7$(3), $.JRh(t.removeUsersWarning), $.R7$(2), $.Y8G("ngIf", t.showNoMasterPasswordWarning)
				}
			}

			function bn(t, e) {
				1 & t && ($.j41(0, "th", 18), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "details")))
			}

			function gn(t, e) {
				if (1 & t && ($.j41(0, "small", 24), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function En(t, e) {
				1 & t && ($.qex(0), $.EFF(1, " - "), $.bVm())
			}

			function fn(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                  "), $.nrm(2, "i", 26), $.EFF(3), $.nI1(4, "i18n"), $.bVm()), 2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "noMasterPassword"), "\n                "))
			}

			function vn(t, e) {
				if (1 & t && ($.j41(0, "td", 18), $.EFF(1, "\n              "), $.j41(2, "span", 25), $.EFF(3, "\n                "), $.DNE(4, En, 2, 0, "ng-container", 4), $.EFF(5, "\n                "), $.DNE(6, fn, 5, 3, "ng-container", 4), $.EFF(7, "\n              "), $.k0s(), $.EFF(8, "\n            "), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(4), $.Y8G("ngIf", !0 === t.hasMasterPassword), $.R7$(2), $.Y8G("ngIf", !1 === t.hasMasterPassword)
				}
			}

			function In(t, e) {
				if (1 & t && ($.j41(0, "tr", 20), $.EFF(1, "\n            "), $.j41(2, "td", 21), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 22), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 18), $.EFF(9), $.DNE(10, gn, 2, 1, "small", 23), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.DNE(13, vn, 9, 2, "td", 13), $.EFF(14, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 5, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(3), $.Y8G("ngIf", n.showNoMasterPasswordWarning)
				}
			}

			function kn(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, In, 15, 7, "tr", 19), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function yn(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n      "), $.DNE(2, mn, 7, 2, "bit-callout", 10), $.EFF(3, "\n      "), $.j41(4, "bit-table"), $.EFF(5, "\n        "), $.qex(6, 11), $.EFF(7, "\n          "), $.j41(8, "tr"), $.EFF(9, "\n            "), $.j41(10, "th", 12), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n            "), $.DNE(14, bn, 3, 3, "th", 13), $.EFF(15, "\n          "), $.k0s(), $.EFF(16, "\n        "), $.bVm(), $.EFF(17, "\n        "), $.DNE(18, kn, 3, 1, "ng-template", 14), $.EFF(19, "\n      "), $.k0s(), $.EFF(20, "\n    "), $.bVm()), 2 & t) {
					const t = $.XpG();
					$.R7$(2), $.Y8G("ngIf", t.users.length > 0 && !t.error), $.R7$(9), $.JRh($.bMT(12, 3, "user")), $.R7$(3), $.Y8G("ngIf", t.showNoMasterPasswordWarning)
				}
			}

			function Rn(t, e) {
				if (1 & t && ($.j41(0, "small", 24), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function wn(t, e) {
				if (1 & t && ($.j41(0, "td", 18), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit,
						e = $.XpG(3);
					$.R7$(), $.SpI("\n              ", e.statuses.get(t.id), "\n            ")
				}
			}

			function Sn(t, e) {
				1 & t && ($.j41(0, "td", 18), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "bulkFilteredMessage"), "\n            "))
			}

			function $n(t, e) {
				if (1 & t && ($.j41(0, "tr", 20), $.EFF(1, "\n            "), $.j41(2, "td", 21), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 22), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 18), $.EFF(9), $.DNE(10, Rn, 2, 1, "small", 23), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.DNE(13, wn, 2, 1, "td", 13), $.EFF(14, "\n            "), $.DNE(15, Sn, 3, 3, "td", 13), $.EFF(16, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(3);
					$.R7$(4), $.Y8G("text", $.bMT(5, 6, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(3), $.Y8G("ngIf", n.statuses.has(t.id)), $.R7$(2), $.Y8G("ngIf", !n.statuses.has(t.id))
				}
			}

			function Gn(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, $n, 17, 8, "tr", 19), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function Tn(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n      "), $.j41(2, "bit-table"), $.EFF(3, "\n        "), $.qex(4, 11), $.EFF(5, "\n          "), $.j41(6, "tr"), $.EFF(7, "\n            "), $.j41(8, "th", 12), $.EFF(9), $.nI1(10, "i18n"), $.k0s(), $.EFF(11, "\n            "), $.j41(12, "th", 18), $.EFF(13), $.nI1(14, "i18n"), $.k0s(), $.EFF(15, "\n          "), $.k0s(), $.EFF(16, "\n        "), $.bVm(), $.EFF(17, "\n        "), $.DNE(18, Gn, 3, 1, "ng-template", 14), $.EFF(19, "\n      "), $.k0s(), $.EFF(20, "\n    "), $.bVm()), 2 & t && ($.R7$(9), $.JRh($.bMT(10, 2, "user")), $.R7$(4), $.JRh($.bMT(14, 4, "status")))
			}

			function jn(t, e) {
				if (1 & t && ($.j41(0, "button", 27), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("disabled", t.loading)("bitAction", t.submit), $.R7$(), $.SpI("\n      ", $.bMT(2, 3, "removeMembers"), "\n    ")
				}
			}
			Fn.ɵfac = function(t) {
				return new(t || Fn)($.rXU(G.W))
			}, Fn.ɵdir = $.FsC({
				type: Fn
			});
			class Mn extends Fn {
				constructor(t, e, n) {
					super(e), this.dialogParams = t, this.i18nService = e, this.organizationUserApiService = n, this.deleteUsers = () => this.organizationUserApiService.removeManyOrganizationUsers(this.organizationId, this.users.map((t => t.id))), this.organizationId = t.organizationId, this.users = t.users, this.showNoMasterPasswordWarning = this.users.some((t => t.status > f.Zx.Invited && !1 === t.hasMasterPassword))
				}
				get removeUsersWarning() {
					return this.i18nService.t("removeOrgUsersConfirmation")
				}
				static open(t, e) {
					return t.open(Mn, e)
				}
			}
			Mn.ɵfac = function(t) {
				return new(t || Mn)($.rXU(c.Qs), $.rXU(G.W), $.rXU(E.uB))
			}, Mn.ɵcmp = $.VBU({
				type: Mn,
				selectors: [
					["ng-component"]
				],
				features: [$.Vt3],
				decls: 24,
				vars: 11,
				consts: [
					["dialogSize", "large", 3, "title"],
					["bitDialogContent", ""],
					["type", "danger", 4, "ngIf"],
					["type", "danger", 3, "title", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "bitAction", 4, "ngIf"],
					["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""],
					["type", "danger"],
					["type", "danger", 3, "title"],
					["type", "warning", 4, "ngIf"],
					["header", ""],
					["bitCell", "", "colspan", "2"],
					["bitCell", "", 4, "ngIf"],
					["body", ""],
					["type", "warning"],
					["bitTypography", "body1"],
					["bitTypography", "body1", 4, "ngIf"],
					["bitCell", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["bitCell", "", 1, "tw-w-5"],
					["size", "small", 3, "text", "id"],
					["class", "tw-text-muted tw-block", 4, "ngIf"],
					[1, "tw-text-muted", "tw-block"],
					[1, "tw-text-muted", "tw-block", "tw-lowercase"],
					["aria-hidden", "true", 1, "bwi", "bwi-exclamation-triangle"],
					["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "bitAction"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "bit-dialog", 0), $.nI1(1, "i18n"), $.EFF(2, "\n  "), $.qex(3, 1), $.EFF(4, "\n    "), $.DNE(5, dn, 3, 3, "bit-callout", 2), $.EFF(6, "\n    "), $.DNE(7, pn, 3, 4, "bit-callout", 3), $.EFF(8, "\n    "), $.DNE(9, yn, 21, 5, "ng-container", 4), $.EFF(10, "\n    "), $.DNE(11, Tn, 21, 6, "ng-container", 4), $.EFF(12, "\n  "), $.bVm(), $.EFF(13, "\n  "), $.qex(14, 5), $.EFF(15, "\n    "), $.DNE(16, jn, 3, 5, "button", 6), $.EFF(17, "\n    "), $.j41(18, "button", 7), $.EFF(19), $.nI1(20, "i18n"), $.k0s(), $.EFF(21, "\n  "), $.bVm(), $.EFF(22, "\n"), $.k0s(), $.EFF(23, "\n")), 2 & t && ($.Y8G("title", $.bMT(1, 7, "removeMembers")), $.R7$(5), $.Y8G("ngIf", e.users.length <= 0), $.R7$(2), $.Y8G("ngIf", e.error), $.R7$(2), $.Y8G("ngIf", !e.done), $.R7$(2), $.Y8G("ngIf", e.done), $.R7$(5), $.Y8G("ngIf", !e.done && e.users.length > 0), $.R7$(3), $.SpI("\n      ", $.bMT(20, 9, "close"), "\n    "))
				},
				dependencies: [D.Sq, D.bT, N.p, ge.f, A.Q, Ee.G, ee.I, B.m, fe.Q, ve.Y, Ie._, Ie.O, tt.r, it.$, Vt.b],
				encapsulation: 2
			});
			var Un = function(t, e, n, i) {
				return new(n || (n = Promise))((function(s, o) {
					function r(t) {
						try {
							c(i.next(t))
						} catch (e) {
							o(e)
						}
					}

					function a(t) {
						try {
							c(i.throw(t))
						} catch (e) {
							o(e)
						}
					}

					function c(t) {
						var e;
						t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(r, a)
					}
					c((i = i.apply(t, e || [])).next())
				}))
			};
			const Cn = t => ({
				enabled: t
			});

			function Dn(t, e) {
				if (1 & t && ($.j41(0, "h1"), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.JRh(t.bulkMemberTitle)
				}
			}

			function xn(t, e) {
				if (1 & t && ($.EFF(0, "\n      "), $.j41(1, "h1"), $.EFF(2), $.k0s(), $.EFF(3, "\n    ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(2), $.JRh(t.bulkTitle)
				}
			}

			function Nn(t, e) {
				1 & t && ($.j41(0, "bit-callout", 12), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n      ", $.bMT(2, 1, "noSelectedUsersApplicable"), "\n    "))
			}

			function Pn(t, e) {
				if (1 & t && ($.j41(0, "bit-callout", 12), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.SpI("\n      ", t.error, "\n    ")
				}
			}

			function Yn(t, e) {
				1 & t && ($.j41(0, "bit-callout", 13), $.nI1(1, "i18n"), $.EFF(2), $.nI1(3, "i18n"), $.k0s()), 2 & t && ($.FS9("title", $.bMT(1, 2, "nonCompliantMembersTitle")), $.R7$(2), $.SpI("\n      ", $.bMT(3, 4, "nonCompliantMembersError"), "\n    "))
			}

			function zn(t, e) {
				1 & t && ($.j41(0, "bit-callout", 15), $.EFF(1, "\n        "), $.j41(2, "p"), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n      "), $.k0s()), 2 & t && ($.R7$(3), $.JRh($.bMT(4, 1, "revokeUsersWarning")))
			}

			function An(t, e) {
				1 & t && ($.j41(0, "th", 20), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "details")))
			}

			function Xn(t, e) {
				if (1 & t && ($.j41(0, "small", 28), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function Bn(t, e) {
				1 & t && ($.qex(0), $.EFF(1, " - "), $.bVm())
			}

			function Vn(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                  "), $.nrm(2, "i", 30), $.EFF(3), $.nI1(4, "i18n"), $.bVm()), 2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "noMasterPassword"), "\n                "))
			}

			function On(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1, "\n              "), $.j41(2, "span", 29), $.EFF(3, "\n                "), $.DNE(4, Bn, 2, 0, "ng-container", 8), $.EFF(5, "\n                "), $.DNE(6, Vn, 5, 3, "ng-container", 8), $.EFF(7, "\n              "), $.k0s(), $.EFF(8, "\n            "), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(4), $.Y8G("ngIf", !0 === t.hasMasterPassword), $.R7$(2), $.Y8G("ngIf", !1 === t.hasMasterPassword)
				}
			}

			function Jn(t, e) {
				if (1 & t && ($.j41(0, "tr", 22), $.EFF(1, "\n            "), $.j41(2, "td", 23), $.EFF(3, "\n              "), $.j41(4, "div", 24), $.EFF(5, "\n                "), $.j41(6, "div", 25), $.EFF(7, "\n                  "), $.nrm(8, "bit-avatar", 26), $.nI1(9, "userName"), $.EFF(10, "\n                "), $.k0s(), $.EFF(11, "\n                "), $.j41(12, "div"), $.EFF(13), $.DNE(14, Xn, 2, 1, "small", 27), $.EFF(15, "\n                "), $.k0s(), $.EFF(16, "\n              "), $.k0s(), $.EFF(17, "\n            "), $.k0s(), $.EFF(18, "\n            "), $.DNE(19, On, 9, 2, "td", 18), $.EFF(20, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(5);
					$.R7$(8), $.Y8G("text", $.bMT(9, 5, t))("id", t.id), $.R7$(5), $.SpI("\n                  ", t.email, "\n                  "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(5), $.Y8G("ngIf", n.showNoMasterPasswordWarning)
				}
			}

			function qn(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Jn, 21, 7, "tr", 21), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(4);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function Kn(t, e) {
				if (1 & t && ($.j41(0, "bit-table"), $.EFF(1, "\n        "), $.qex(2, 16), $.EFF(3, "\n          "), $.j41(4, "tr"), $.EFF(5, "\n            "), $.j41(6, "th", 17), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n            "), $.DNE(10, An, 3, 3, "th", 18), $.EFF(11, "\n          "), $.k0s(), $.EFF(12, "\n        "), $.bVm(), $.EFF(13, "\n        "), $.DNE(14, qn, 3, 1, "ng-template", 19), $.EFF(15, "\n      "), $.k0s()), 2 & t) {
					const t = $.XpG(3);
					$.R7$(7), $.JRh($.bMT(8, 2, "member")), $.R7$(3), $.Y8G("ngIf", t.showNoMasterPasswordWarning)
				}
			}

			function Ln(t, e) {
				1 & t && ($.j41(0, "th", 20), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "details")))
			}

			function Wn(t, e) {
				if (1 & t && ($.j41(0, "small", 28), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function _n(t, e) {
				1 & t && ($.qex(0), $.EFF(1, " - "), $.bVm())
			}

			function Qn(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                  "), $.nrm(2, "i", 30), $.EFF(3), $.nI1(4, "i18n"), $.bVm()), 2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "noMasterPassword"), "\n                "))
			}

			function Zn(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1, "\n              "), $.j41(2, "span", 29), $.EFF(3, "\n                "), $.DNE(4, _n, 2, 0, "ng-container", 8), $.EFF(5, "\n                "), $.DNE(6, Qn, 5, 3, "ng-container", 8), $.EFF(7, "\n              "), $.k0s(), $.EFF(8, "\n            "), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(4), $.Y8G("ngIf", !0 === t.hasMasterPassword), $.R7$(2), $.Y8G("ngIf", !1 === t.hasMasterPassword)
				}
			}

			function Hn(t, e) {
				if (1 & t && ($.j41(0, "tr", 22), $.EFF(1, "\n            "), $.j41(2, "td", 23), $.EFF(3, "\n              "), $.nrm(4, "bit-avatar", 26), $.nI1(5, "userName"), $.EFF(6, "\n            "), $.k0s(), $.EFF(7, "\n            "), $.j41(8, "td", 20), $.EFF(9), $.DNE(10, Wn, 2, 1, "small", 27), $.EFF(11, "\n            "), $.k0s(), $.EFF(12, "\n            "), $.DNE(13, Zn, 9, 2, "td", 18), $.EFF(14, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(5);
					$.R7$(4), $.Y8G("text", $.bMT(5, 5, t))("id", t.id), $.R7$(5), $.SpI("\n              ", t.email, "\n              "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(3), $.Y8G("ngIf", n.showNoMasterPasswordWarning)
				}
			}

			function ti(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Hn, 15, 7, "tr", 21), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(4);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function ei(t, e) {
				if (1 & t && ($.j41(0, "bit-table"), $.EFF(1, "\n        "), $.qex(2, 16), $.EFF(3, "\n          "), $.j41(4, "tr"), $.EFF(5, "\n            "), $.j41(6, "th", 31), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n            "), $.DNE(10, Ln, 3, 3, "th", 18), $.EFF(11, "\n          "), $.k0s(), $.EFF(12, "\n        "), $.bVm(), $.EFF(13, "\n        "), $.DNE(14, ti, 3, 1, "ng-template", 19), $.EFF(15, "\n      "), $.k0s()), 2 & t) {
					const t = $.XpG(3);
					$.R7$(7), $.JRh($.bMT(8, 2, "user")), $.R7$(3), $.Y8G("ngIf", t.showNoMasterPasswordWarning)
				}
			}

			function ni(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n      "), $.DNE(2, zn, 6, 3, "bit-callout", 14), $.EFF(3, "\n\n      "), $.DNE(4, Kn, 16, 4, "bit-table", 8), $.EFF(5, "\n\n      "), $.DNE(6, ei, 16, 4, "bit-table", 8), $.EFF(7, "\n    "), $.bVm()), 2 & t) {
					const t = $.XpG().ngIf,
						e = $.XpG();
					$.R7$(2), $.Y8G("ngIf", e.users.length > 0 && !e.error && e.isRevoking), $.R7$(2), $.Y8G("ngIf", t.enabled), $.R7$(2), $.Y8G("ngIf", !t.enabled)
				}
			}

			function ii(t, e) {
				if (1 & t && ($.j41(0, "small", 28), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function si(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit,
						e = $.XpG(5);
					$.R7$(), $.SpI("\n              ", e.statuses.get(t.id), "\n            ")
				}
			}

			function oi(t, e) {
				1 & t && ($.j41(0, "td", 20), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "bulkFilteredMessage"), "\n            "))
			}

			function ri(t, e) {
				if (1 & t && ($.j41(0, "tr", 22), $.EFF(1, "\n            "), $.j41(2, "td", 23), $.EFF(3, "\n              "), $.j41(4, "div", 24), $.EFF(5, "\n                "), $.j41(6, "div", 25), $.EFF(7, "\n                  "), $.nrm(8, "bit-avatar", 26), $.nI1(9, "userName"), $.EFF(10, "\n                "), $.k0s(), $.EFF(11, "\n                "), $.j41(12, "div"), $.EFF(13), $.DNE(14, ii, 2, 1, "small", 27), $.EFF(15, "\n                "), $.k0s(), $.EFF(16, "\n              "), $.k0s(), $.EFF(17, "\n            "), $.k0s(), $.EFF(18, "\n            "), $.DNE(19, si, 2, 1, "td", 18), $.EFF(20, "\n            "), $.DNE(21, oi, 3, 3, "td", 18), $.EFF(22, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(5);
					$.R7$(8), $.Y8G("text", $.bMT(9, 6, t))("id", t.id), $.R7$(5), $.SpI("\n                  ", t.email, "\n                  "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(5), $.Y8G("ngIf", n.statuses.has(t.id)), $.R7$(2), $.Y8G("ngIf", !n.statuses.has(t.id))
				}
			}

			function ai(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, ri, 23, 8, "tr", 21), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(4);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function ci(t, e) {
				1 & t && ($.j41(0, "bit-table"), $.EFF(1, "\n        "), $.qex(2, 16), $.EFF(3, "\n          "), $.j41(4, "tr"), $.EFF(5, "\n            "), $.j41(6, "th", 17), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n            "), $.j41(10, "th", 20), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n          "), $.k0s(), $.EFF(14, "\n        "), $.bVm(), $.EFF(15, "\n        "), $.DNE(16, ai, 3, 1, "ng-template", 19), $.EFF(17, "\n      "), $.k0s()), 2 & t && ($.R7$(7), $.JRh($.bMT(8, 2, "member")), $.R7$(4), $.JRh($.bMT(12, 4, "status")))
			}

			function li(t, e) {
				if (1 & t && ($.j41(0, "small", 28), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.name)
				}
			}

			function ui(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit,
						e = $.XpG(5);
					$.R7$(), $.SpI("\n              ", e.statuses.get(t.id), "\n            ")
				}
			}

			function Fi(t, e) {
				1 & t && ($.j41(0, "td", 20), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.SpI("\n              ", $.bMT(2, 1, "bulkFilteredMessage"), "\n            "))
			}

			function di(t, e) {
				if (1 & t && ($.j41(0, "tr", 22), $.EFF(1, "\n            "), $.j41(2, "td", 23), $.EFF(3, "\n              "), $.j41(4, "div", 24), $.EFF(5, "\n                "), $.j41(6, "div", 25), $.EFF(7, "\n                  "), $.nrm(8, "bit-avatar", 26), $.nI1(9, "userName"), $.EFF(10, "\n                "), $.k0s(), $.EFF(11, "\n                "), $.j41(12, "div"), $.EFF(13), $.DNE(14, li, 2, 1, "small", 27), $.EFF(15, "\n                "), $.k0s(), $.EFF(16, "\n              "), $.k0s(), $.EFF(17, "\n            "), $.k0s(), $.EFF(18, "\n            "), $.DNE(19, ui, 2, 1, "td", 18), $.EFF(20, "\n            "), $.DNE(21, Fi, 3, 3, "td", 18), $.EFF(22, "\n          "), $.k0s()), 2 & t) {
					const t = e.$implicit,
						n = $.XpG(5);
					$.R7$(8), $.Y8G("text", $.bMT(9, 6, t))("id", t.id), $.R7$(5), $.SpI("\n                  ", t.email, "\n                  "), $.R7$(), $.Y8G("ngIf", t.name), $.R7$(5), $.Y8G("ngIf", n.statuses.has(t.id)), $.R7$(2), $.Y8G("ngIf", !n.statuses.has(t.id))
				}
			}

			function pi(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, di, 23, 8, "tr", 21), $.EFF(2, "\n        ")), 2 & t) {
					const t = $.XpG(4);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function hi(t, e) {
				1 & t && ($.j41(0, "bit-table"), $.EFF(1, "\n        "), $.qex(2, 16), $.EFF(3, "\n          "), $.j41(4, "tr"), $.EFF(5, "\n            "), $.j41(6, "th", 17), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n            "), $.j41(10, "th", 20), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n          "), $.k0s(), $.EFF(14, "\n        "), $.bVm(), $.EFF(15, "\n        "), $.DNE(16, pi, 3, 1, "ng-template", 19), $.EFF(17, "\n      "), $.k0s()), 2 & t && ($.R7$(7), $.JRh($.bMT(8, 2, "member")), $.R7$(4), $.JRh($.bMT(12, 4, "status")))
			}

			function mi(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n      "), $.DNE(2, ci, 18, 6, "bit-table", 8), $.EFF(3, "\n\n      "), $.DNE(4, hi, 18, 6, "bit-table", 8), $.EFF(5, "\n    "), $.bVm()), 2 & t) {
					const t = $.XpG().ngIf;
					$.R7$(2), $.Y8G("ngIf", t.enabled), $.R7$(2), $.Y8G("ngIf", !t.enabled)
				}
			}

			function bi(t, e) {
				if (1 & t && ($.j41(0, "button", 32), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().ngIf,
						e = $.XpG();
					$.Y8G("bitAction", e.submit), $.R7$(), $.SpI("\n      ", t.enabled ? e.bulkMemberTitle : e.bulkTitle, "\n    ")
				}
			}

			function gi(t, e) {
				if (1 & t && ($.j41(0, "bit-dialog", 2), $.EFF(1, "\n  "), $.qex(2, 3), $.EFF(3, "\n    "), $.DNE(4, Dn, 2, 1, "h1", 4), $.EFF(5, "\n    "), $.DNE(6, xn, 4, 1, "ng-template", null, 0, $.C5r), $.EFF(8, "\n  "), $.bVm(), $.EFF(9, "\n\n  "), $.j41(10, "div", 5), $.EFF(11, "\n    "), $.DNE(12, Nn, 3, 3, "bit-callout", 6), $.EFF(13, "\n\n    "), $.DNE(14, Pn, 2, 1, "bit-callout", 6), $.EFF(15, "\n\n    "), $.DNE(16, Yn, 4, 6, "bit-callout", 7), $.EFF(17, "\n\n    "), $.DNE(18, ni, 8, 3, "ng-container", 8), $.EFF(19, "\n\n    "), $.DNE(20, mi, 6, 2, "ng-container", 8), $.EFF(21, "\n  "), $.k0s(), $.EFF(22, "\n  "), $.qex(23, 9), $.EFF(24, "\n    "), $.DNE(25, bi, 2, 2, "button", 10), $.EFF(26, "\n    "), $.j41(27, "button", 11), $.EFF(28), $.nI1(29, "i18n"), $.k0s(), $.EFF(30, "\n  "), $.bVm(), $.EFF(31, "\n"), $.k0s()), 2 & t) {
					const t = e.ngIf,
						n = $.sdS(7),
						i = $.XpG();
					$.R7$(4), $.Y8G("ngIf", t.enabled)("ngIfElse", n), $.R7$(8), $.Y8G("ngIf", i.users.length <= 0), $.R7$(2), $.Y8G("ngIf", i.error), $.R7$(2), $.Y8G("ngIf", i.nonCompliantMembers && t.enabled), $.R7$(2), $.Y8G("ngIf", !i.done), $.R7$(2), $.Y8G("ngIf", i.done), $.R7$(5), $.Y8G("ngIf", !i.done && i.users.length > 0), $.R7$(3), $.SpI("\n      ", $.bMT(29, 9, "close"), "\n    ")
				}
			}
			class Ei {
				constructor(t, e, n, i) {
					this.i18nService = t, this.organizationUserApiService = e, this.configService = n, this.data = i, this.statuses = new Map, this.loading = !1, this.done = !1, this.showNoMasterPasswordWarning = !1, this.nonCompliantMembers = !1, this.submit = () => Un(this, void 0, void 0, (function*() {
						try {
							const t = yield this.performBulkUserAction(), e = this.isRevoking ? "bulkRevokedMessage" : "bulkRestoredMessage";
							t.data.forEach((t => Un(this, void 0, void 0, (function*() {
								const n = "" !== t.error ? this.i18nService.t("cannotRestoreAccessError") : this.i18nService.t(e);
								this.statuses.set(t.id, n), "" !== t.error && (this.nonCompliantMembers = !0)
							})))), this.done = !0
						} catch (t) {
							this.error = t.message
						}
					})), this.isRevoking = i.isRevoking, this.organizationId = i.organizationId, this.users = i.users, this.showNoMasterPasswordWarning = this.users.some((t => t.status > f.Zx.Invited && !1 === t.hasMasterPassword)), this.accountDeprovisioningEnabled$ = this.configService.getFeatureFlag$(k.T.AccountDeprovisioning)
				}
				get bulkTitle() {
					const t = this.isRevoking ? "revokeUsers" : "restoreUsers";
					return this.i18nService.t(t)
				}
				get bulkMemberTitle() {
					const t = this.isRevoking ? "revokeMembers" : "restoreMembers";
					return this.i18nService.t(t)
				}
				performBulkUserAction() {
					return Un(this, void 0, void 0, (function*() {
						const t = this.users.map((t => t.id));
						return this.isRevoking ? yield this.organizationUserApiService.revokeManyOrganizationUsers(this.organizationId, t): yield this.organizationUserApiService.restoreManyOrganizationUsers(this.organizationId, t)
					}))
				}
				static open(t, e) {
					return t.open(Ei, {
						data: e
					})
				}
			}
			Ei.ɵfac = function(t) {
				return new(t || Ei)($.rXU(G.W), $.rXU(E.uB), $.rXU(C.w), $.rXU(c.Qs))
			}, Ei.ɵcmp = $.VBU({
				type: Ei,
				selectors: [
					["app-bulk-restore-revoke"]
				],
				decls: 3,
				vars: 5,
				consts: [
					["nonMemberTitle", ""],
					["dialogSize", "large", 4, "ngIf"],
					["dialogSize", "large"],
					["bitDialogTitle", ""],
					[4, "ngIf", "ngIfElse"],
					["bitDialogContent", ""],
					["type", "danger", 4, "ngIf"],
					["type", "danger", 3, "title", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["type", "button", "bitButton", "", 3, "bitAction", 4, "ngIf"],
					["type", "button", "bitButton", "", "buttonType", "secondary", "bitDialogClose", ""],
					["type", "danger"],
					["type", "danger", 3, "title"],
					["type", "warning", 4, "ngIf"],
					["type", "warning"],
					["header", ""],
					["bitCell", "", 1, "tw-w-1/2"],
					["bitCell", "", 4, "ngIf"],
					["body", ""],
					["bitCell", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["bitCell", "", "width", "30"],
					[1, "tw-flex", "tw-items-center"],
					[1, "tw-flex", "tw-items-center", "tw-mr-6"],
					["size", "small", 3, "text", "id"],
					["class", "tw-block tw-text-muted", 4, "ngIf"],
					[1, "tw-block", "tw-text-muted"],
					[1, "tw-block", "tw-lowercase", "tw-text-muted"],
					["aria-hidden", "true", 1, "bwi", "bwi-exclamation-triangle"],
					["bitCell", "", "colspan", "2"],
					["type", "button", "bitButton", "", 3, "bitAction"]
				],
				template: function(t, e) {
					1 & t && ($.DNE(0, gi, 32, 11, "bit-dialog", 1), $.nI1(1, "async"), $.EFF(2, "\n")), 2 & t && $.Y8G("ngIf", $.eq3(3, Cn, $.bMT(1, 1, e.accountDeprovisioningEnabled$)))
				},
				dependencies: [D.Sq, D.bT, N.p, ge.f, A.Q, Ee.G, ee.I, B.m, fe.Q, ve.Y, Ie._, Ie.O, D.Jj, it.$, Vt.b],
				encapsulation: 2
			});
			var fi = function(t, e, n, i) {
				return new(n || (n = Promise))((function(s, o) {
					function r(t) {
						try {
							c(i.next(t))
						} catch (e) {
							o(e)
						}
					}

					function a(t) {
						try {
							c(i.throw(t))
						} catch (e) {
							o(e)
						}
					}

					function c(t) {
						var e;
						t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(r, a)
					}
					c((i = i.apply(t, e || [])).next())
				}))
			};

			function vi(t, e) {
				1 & t && ($.j41(0, "div", 6), $.EFF(1, "\n      "), $.nrm(2, "i", 7), $.nI1(3, "i18n"), $.EFF(4), $.nI1(5, "i18n"), $.k0s()), 2 & t && ($.R7$(2), $.FS9("title", $.bMT(3, 2, "loading")), $.R7$(2), $.SpI("\n      ", $.bMT(5, 4, "loading"), "\n    "))
			}

			function Ii(t, e) {
				if (1 & t && ($.j41(0, "small", 19), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.JRh(t.user.name)
				}
			}

			function ki(t, e) {
				if (1 & t && ($.j41(0, "td", 20), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.SpI("\n            ", t.message, "\n          ")
				}
			}

			function yi(t, e) {
				if (1 & t && ($.j41(0, "td", 10), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.SpI("\n            ", t.message, "\n          ")
				}
			}

			function Ri(t, e) {
				if (1 & t && ($.j41(0, "tr", 13), $.EFF(1, "\n          "), $.j41(2, "td", 14), $.EFF(3, "\n            "), $.nrm(4, "bit-avatar", 15), $.nI1(5, "userName"), $.EFF(6, "\n          "), $.k0s(), $.EFF(7, "\n          "), $.j41(8, "td", 10), $.EFF(9), $.DNE(10, Ii, 2, 1, "small", 16), $.EFF(11, "\n          "), $.k0s(), $.EFF(12, "\n          "), $.DNE(13, ki, 2, 1, "td", 17), $.EFF(14, "\n          "), $.DNE(15, yi, 2, 1, "td", 18), $.EFF(16, "\n        "), $.k0s()), 2 & t) {
					const t = e.$implicit;
					$.R7$(4), $.Y8G("text", $.bMT(5, 6, t.user))("id", t.user.id), $.R7$(5), $.SpI("\n            ", t.user.email, "\n            "), $.R7$(), $.Y8G("ngIf", t.user.name), $.R7$(3), $.Y8G("ngIf", t.error), $.R7$(2), $.Y8G("ngIf", !t.error)
				}
			}

			function wi(t, e) {
				if (1 & t && ($.EFF(0, "\n        "), $.DNE(1, Ri, 17, 8, "tr", 12), $.EFF(2, "\n      ")), 2 & t) {
					const t = $.XpG(2);
					$.R7$(), $.Y8G("ngForOf", t.users)
				}
			}

			function Si(t, e) {
				1 & t && ($.j41(0, "bit-table"), $.EFF(1, "\n      "), $.qex(2, 8), $.EFF(3, "\n        "), $.j41(4, "tr"), $.EFF(5, "\n          "), $.j41(6, "th", 9), $.EFF(7), $.nI1(8, "i18n"), $.k0s(), $.EFF(9, "\n          "), $.j41(10, "th", 10), $.EFF(11), $.nI1(12, "i18n"), $.k0s(), $.EFF(13, "\n        "), $.k0s(), $.EFF(14, "\n      "), $.bVm(), $.EFF(15, "\n      "), $.DNE(16, wi, 3, 1, "ng-template", 11), $.EFF(17, "\n    "), $.k0s()), 2 & t && ($.R7$(7), $.JRh($.bMT(8, 2, "user")), $.R7$(4), $.JRh($.bMT(12, 4, "status")))
			}
			class $i {
				constructor(t, e, n) {
					this.data = t, this.i18nService = e, this.logService = n, this.loading = !1
				}
				ngOnInit() {
					return fi(this, void 0, void 0, (function*() {
						this.loading = !0, yield this.showBulkStatus(this.data)
					}))
				}
				showBulkStatus(t) {
					return fi(this, void 0, void 0, (function*() {
						try {
							const e = (yield t.request).data.filter((t => "" !== t.error)).reduce(((t, e) => Object.assign(Object.assign({}, t), {
									[e.id]: e.error
								})), {}),
								n = t.filteredUsers.reduce(((t, e) => Object.assign(Object.assign({}, t), {
									[e.id]: e
								})), {});
							this.users = t.users.map((i => {
								var s;
								let o = null !== (s = e[i.id]) && void 0 !== s ? s : t.successfulMessage;
								return n.hasOwnProperty(i.id) || (o = this.i18nService.t("bulkFilteredMessage")), {
									user: i,
									error: e.hasOwnProperty(i.id),
									message: o
								}
							})), this.loading = !1
						} catch (e) {
							this.logService.error(e)
						}
					}))
				}
				static open(t, e) {
					return t.open($i, e)
				}
			}
			$i.ɵfac = function(t) {
				return new(t || $i)($.rXU(c.Qs), $.rXU(G.W), $.rXU(Ht.K))
			}, $i.ɵcmp = $.VBU({
				type: $i,
				selectors: [
					["app-bulk-status"]
				],
				decls: 18,
				vars: 8,
				consts: [
					["dialogSize", "large", 3, "title"],
					["bitDialogContent", ""],
					["class", "tw-text-center", 4, "ngIf"],
					[4, "ngIf"],
					["bitDialogFooter", ""],
					["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""],
					[1, "tw-text-center"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", 3, "title"],
					["header", ""],
					["colspan", "2", "bitCell", ""],
					["bitCell", ""],
					["body", ""],
					["bitRow", "", 4, "ngFor", "ngForOf"],
					["bitRow", ""],
					["width", "30", "bitCell", ""],
					["size", "small", 3, "text", "id"],
					["class", "text-muted d-block", 4, "ngIf"],
					["class", "tw-text-danger", "bitCell", "", 4, "ngIf"],
					["bitCell", "", 4, "ngIf"],
					[1, "text-muted", "d-block"],
					["bitCell", "", 1, "tw-text-danger"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "bit-dialog", 0), $.nI1(1, "i18n"), $.EFF(2, "\n  "), $.qex(3, 1), $.EFF(4, "\n    "), $.DNE(5, vi, 6, 6, "div", 2), $.EFF(6, "\n    "), $.DNE(7, Si, 18, 6, "bit-table", 3), $.EFF(8, "\n  "), $.bVm(), $.EFF(9, "\n  "), $.qex(10, 4), $.EFF(11, "\n    "), $.j41(12, "button", 5), $.EFF(13), $.nI1(14, "i18n"), $.k0s(), $.EFF(15, "\n  "), $.bVm(), $.EFF(16, "\n"), $.k0s(), $.EFF(17, "\n")), 2 & t && ($.Y8G("title", $.bMT(1, 4, "bulkConfirmStatus")), $.R7$(5), $.Y8G("ngIf", e.loading), $.R7$(2), $.Y8G("ngIf", !e.loading), $.R7$(6), $.SpI("\n      ", $.bMT(14, 6, "close"), "\n    "))
				},
				dependencies: [D.Sq, D.bT, ge.f, A.Q, ee.I, B.m, fe.Q, ve.Y, Ie._, Ie.O, it.$, Vt.b],
				encapsulation: 2
			});
			var Gi, Ti = n(13894),
				ji = n(15571),
				Mi = n(18499),
				Ui = n(57083),
				Ci = n(69896),
				Di = n(65113),
				xi = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};

			function Ni(t, e) {
				if (1 & t && ($.j41(0, "auth-password-callout", 13), $.EFF(1, "\n      "), $.k0s()), 2 & t) {
					const t = $.XpG();
					$.Y8G("policy", t.enforcedPolicyOptions)
				}
			}! function(t) {
				t.Ok = "ok"
			}(Gi || (Gi = {}));
			class Pi {
				constructor(t, e, n, i, s, o, r, a, c, F, d) {
					this.data = t, this.resetPasswordService = e, this.i18nService = n, this.platformUtilsService = i, this.passwordGenerationService = s, this.policyService = o, this.logService = r, this.dialogService = a, this.toastService = c, this.formBuilder = F, this.dialogRef = d, this.formGroup = this.formBuilder.group({
						newPassword: ["", l.k0.required]
					}), this.showPassword = !1, this.destroy$ = new u.B, this.submit = () => xi(this, void 0, void 0, (function*() {
						if (null == this.formGroup.value.newPassword || "" === this.formGroup.value.newPassword) return this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("masterPasswordRequired")
						}), !1;
						if (this.formGroup.value.newPassword.length < nt.A.minimumPasswordLength) return this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("masterPasswordMinlength", nt.A.minimumPasswordLength)
						}), !1;
						if (null == this.enforcedPolicyOptions || this.policyService.evaluateMasterPassword(this.passwordStrengthScore, this.formGroup.value.newPassword, this.enforcedPolicyOptions)) {
							if (this.passwordStrengthScore < 3) {
								if (!(yield this.dialogService.openSimpleDialog({
										title: {
											key: "weakMasterPassword"
										},
										content: {
											key: "weakMasterPasswordDesc"
										},
										type: "warning"
									}))) return !1
							}
							try {
								yield this.resetPasswordService.resetMasterPassword(this.formGroup.value.newPassword, this.data.email, this.data.id, this.data.organizationId), this.toastService.showToast({
									variant: "success",
									title: null,
									message: this.i18nService.t("resetPasswordSuccess")
								})
							} catch (t) {
								this.logService.error(t)
							}
							this.dialogRef.close(Gi.Ok)
						} else this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("masterPasswordPolicyRequirementsNotMet")
						})
					}))
				}
				ngOnInit() {
					return xi(this, void 0, void 0, (function*() {
						this.policyService.masterPasswordPolicyOptions$().pipe((0, g.Q)(this.destroy$)).subscribe((t => this.enforcedPolicyOptions = t))
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				get loggedOutWarningName() {
					return null != this.data.name ? this.data.name : this.i18nService.t("thisUser")
				}
				generatePassword() {
					return xi(this, void 0, void 0, (function*() {
						var t, e;
						const n = null !== (e = null === (t = yield this.passwordGenerationService.getOptions()) || void 0 === t ? void 0 : t[0]) && void 0 !== e ? e : {};
						this.formGroup.patchValue({
							newPassword: yield this.passwordGenerationService.generatePassword(n)
						}), this.passwordStrengthComponent.updatePasswordStrength(this.formGroup.value.newPassword)
					}))
				}
				togglePassword() {
					this.showPassword = !this.showPassword, document.getElementById("newPassword").focus()
				}
				copy() {
					const t = this.formGroup.value.newPassword;
					null != t && (this.platformUtilsService.copyToClipboard(t, {
						window
					}), this.toastService.showToast({
						variant: "info",
						title: null,
						message: this.i18nService.t("valueCopied", this.i18nService.t("password"))
					}))
				}
				getStrengthScore(t) {
					this.passwordStrengthScore = t
				}
			}
			Pi.open = (t, e) => t.open(Pi, e), Pi.ɵfac = function(t) {
				return new(t || Pi)($.rXU(c.Qs), $.rXU(ji.w), $.rXU(G.W), $.rXU(nn.y), $.rXU(Ti.JJ), $.rXU(Mi.m), $.rXU(Ht.K), $.rXU(T.o), $.rXU(j.f), $.rXU(l.ok), $.rXU(c.ce))
			}, Pi.ɵcmp = $.VBU({
				type: Pi,
				selectors: [
					["app-reset-password"]
				],
				viewQuery: function(t, e) {
					if (1 & t && $.GBs(s.k, 5), 2 & t) {
						let t;
						$.mGM(t = $.lsd()) && (e.passwordStrengthComponent = t.first)
					}
				},
				decls: 48,
				vars: 34,
				consts: [
					[3, "formGroup", "bitSubmit"],
					[3, "title", "subtitle"],
					["bitDialogContent", ""],
					["type", "warning"],
					["message", "resetPasswordMasterPasswordPolicyInEffect", 3, "policy", 4, "ngIf"],
					["id", "newPassword", "bitInput", "", "name", "NewPassword", "formControlName", "newPassword", "required", "", "appInputVerbatim", "", "autocomplete", "new-password", 3, "type"],
					["type", "button", "bitIconButton", "bwi-generate", "bitSuffix", "", 3, "click", "appA11yTitle"],
					["type", "button", "bitSuffix", "", "buttonType", "secondary", 3, "click", "bitIconButton", "appA11yTitle"],
					["type", "button", "bitSuffix", "", "bitIconButton", "bwi-clone", 3, "click", "appA11yTitle"],
					[3, "passwordStrengthScore", "password", "email", "showText"],
					["bitDialogFooter", ""],
					["bitButton", "", "buttonType", "primary", "bitFormButton", "", "type", "submit"],
					["bitButton", "", "buttonType", "secondary", "bitDialogClose", "", "type", "button"],
					["message", "resetPasswordMasterPasswordPolicyInEffect", 3, "policy"]
				],
				template: function(t, e) {
					1 & t && ($.j41(0, "form", 0), $.EFF(1, "\n  "), $.j41(2, "bit-dialog", 1), $.nI1(3, "i18n"), $.EFF(4, "\n    "), $.qex(5, 2), $.EFF(6, "\n      "), $.j41(7, "bit-callout", 3), $.EFF(8), $.nI1(9, "i18n"), $.k0s(), $.EFF(10, "\n      "), $.DNE(11, Ni, 2, 1, "auth-password-callout", 4), $.EFF(12, "\n      "), $.j41(13, "bit-form-field"), $.EFF(14, "\n        "), $.j41(15, "bit-label"), $.EFF(16), $.nI1(17, "i18n"), $.k0s(), $.EFF(18, "\n        "), $.nrm(19, "input", 5), $.EFF(20, "\n        "), $.j41(21, "button", 6), $.nI1(22, "i18n"), $.bIt("click", (function() {
						return e.generatePassword()
					})), $.k0s(), $.EFF(23, "\n        "), $.j41(24, "button", 7), $.nI1(25, "i18n"), $.bIt("click", (function() {
						return e.togglePassword()
					})), $.k0s(), $.EFF(26, "\n        "), $.j41(27, "button", 8), $.nI1(28, "i18n"), $.bIt("click", (function() {
						return e.copy()
					})), $.k0s(), $.EFF(29, "\n      "), $.k0s(), $.EFF(30, "\n      "), $.j41(31, "tools-password-strength", 9), $.bIt("passwordStrengthScore", (function(t) {
						return e.getStrengthScore(t)
					})), $.EFF(32, "\n      "), $.k0s(), $.EFF(33, "\n    "), $.bVm(), $.EFF(34, "\n    "), $.qex(35, 10), $.EFF(36, "\n      "), $.j41(37, "button", 11), $.EFF(38), $.nI1(39, "i18n"), $.k0s(), $.EFF(40, "\n      "), $.j41(41, "button", 12), $.EFF(42), $.nI1(43, "i18n"), $.k0s(), $.EFF(44, "\n    "), $.bVm(), $.EFF(45, "\n  "), $.k0s(), $.EFF(46, "\n"), $.k0s(), $.EFF(47, "\n")), 2 & t && ($.Y8G("formGroup", e.formGroup)("bitSubmit", e.submit), $.R7$(2), $.Y8G("title", $.bMT(3, 17, "recoverAccount"))("subtitle", e.data.name), $.R7$(6), $.SpI("", $.i5U(9, 19, "resetPasswordLoggedOutWarning", e.loggedOutWarningName), "\n      "), $.R7$(3), $.Y8G("ngIf", e.enforcedPolicyOptions), $.R7$(5), $.SpI("\n          ", $.bMT(17, 22, "newPassword"), "\n        "), $.R7$(3), $.Y8G("type", e.showPassword ? "text" : "password"), $.R7$(2), $.Y8G("appA11yTitle", $.bMT(22, 24, "generatePassword")), $.R7$(3), $.FS9("appA11yTitle", $.bMT(25, 26, "toggleVisibility")), $.Y8G("bitIconButton", e.showPassword ? "bwi-eye-slash" : "bwi-eye"), $.R7$(3), $.FS9("appA11yTitle", $.bMT(28, 28, "copyPassword")), $.R7$(4), $.Y8G("password", e.formGroup.value.newPassword)("email", e.data.email)("showText", !0), $.R7$(7), $.SpI("\n        ", $.bMT(39, 30, "save"), "\n      "), $.R7$(4), $.SpI("\n        ", $.bMT(43, 32, "cancel"), "\n      "))
				},
				dependencies: [D.bT, l.qT, l.me, l.BC, l.cb, l.YS, l.j4, l.JD, x.C, Ui.q, P.$, Y.L, A.Q, Ee.G, ee.I, B.m, O.m, q.J, K.h, Ci.a, L.s, Di.R, s.k, it.$],
				encapsulation: 2
			});
			var Yi = n(27866),
				zi = n(11224),
				Ai = n(48180),
				Xi = n(94438),
				Bi = n(13496),
				Vi = n(53997),
				Oi = n(82494),
				Ji = n(32924),
				qi = n(32316),
				Ki = n(12694),
				Li = n(16496),
				Wi = n(74594),
				_i = n(20464),
				Qi = function(t, e, n, i) {
					return new(n || (n = Promise))((function(s, o) {
						function r(t) {
							try {
								c(i.next(t))
							} catch (e) {
								o(e)
							}
						}

						function a(t) {
							try {
								c(i.throw(t))
							} catch (e) {
								o(e)
							}
						}

						function c(t) {
							var e;
							t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e)
							}))).then(r, a)
						}
						c((i = i.apply(t, e || [])).next())
					}))
				};
			const Zi = ["resetPasswordTemplate"];

			function Hi(t, e) {
				if (1 & t && ($.j41(0, "span", 11), $.EFF(1), $.k0s()), 2 & t) {
					const t = e.ngIf;
					$.R7$(), $.JRh(t)
				}
			}

			function ts(t, e) {
				if (1 & t && ($.j41(0, "span", 11), $.EFF(1), $.k0s()), 2 & t) {
					const t = e.ngIf;
					$.R7$(), $.JRh(t)
				}
			}

			function es(t, e) {
				if (1 & t && ($.j41(0, "span", 11), $.EFF(1), $.k0s()), 2 & t) {
					const t = e.ngIf;
					$.R7$(), $.JRh(t)
				}
			}

			function ns(t, e) {
				if (1 & t && ($.j41(0, "span", 11), $.EFF(1), $.k0s()), 2 & t) {
					const t = e.ngIf;
					$.R7$(), $.JRh(t)
				}
			}

			function is(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n  "), $.nrm(2, "i", 12), $.nI1(3, "i18n"), $.EFF(4, "\n  "), $.j41(5, "span", 13), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n"), $.bVm()), 2 & t && ($.R7$(2), $.FS9("title", $.bMT(3, 2, "loading")), $.R7$(4), $.JRh($.bMT(7, 4, "loading")))
			}

			function ss(t, e) {
				1 & t && ($.j41(0, "p"), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "noMembersInList")))
			}

			function os(t, e) {
				1 & t && ($.j41(0, "bit-callout", 28), $.nI1(1, "i18n"), $.EFF(2), $.nI1(3, "i18n"), $.k0s()), 2 & t && ($.FS9("title", $.bMT(1, 2, "confirmUsers")), $.R7$(2), $.SpI("\n      ", $.bMT(3, 4, "usersNeedConfirmed"), "\n    "))
			}

			function rs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.qex(0), $.EFF(1, "\n                  "), $.j41(2, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkEnableSM())
					})), $.EFF(3), $.nI1(4, "i18n"), $.k0s(), $.EFF(5, "\n                  "), $.nrm(6, "bit-menu-divider"), $.EFF(7, "\n                "), $.bVm()
				}
				2 & t && ($.R7$(3), $.SpI("\n                    ", $.bMT(4, 1, "activateSecretsManager"), "\n                  "))
			}

			function as(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkReinvite())
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 30), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "reinviteSelected"), "\n                "))
			}

			function cs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkConfirm())
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 31), $.EFF(3, "\n                    "), $.nrm(4, "i", 32), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI("\n                    ", $.bMT(6, 1, "confirmSelected"), "\n                  "))
			}

			function ls(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkRestore())
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 33), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "restoreAccess"), "\n                "))
			}

			function us(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkRevoke())
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 34), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "revokeAccess"), "\n                "))
			}

			function Fs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkRemove())
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 35), $.EFF(3, "\n                    "), $.nrm(4, "i", 36), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI("\n                    ", $.bMT(6, 1, "remove"), "\n                  "))
			}

			function ds(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG(3);
						return $.Njj(e.bulkDelete())
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 35), $.EFF(3, "\n                    "), $.nrm(4, "i", 37), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI("\n                    ", $.bMT(6, 1, "delete"), "\n                  "))
			}

			function ps(t, e) {
				1 & t && ($.j41(0, "span", 55), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "invited")))
			}

			function hs(t, e) {
				1 & t && ($.j41(0, "span", 56), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "needsConfirmation")))
			}

			function ms(t, e) {
				1 & t && ($.j41(0, "span", 55), $.EFF(1), $.nI1(2, "i18n"), $.k0s()), 2 & t && ($.R7$(), $.JRh($.bMT(2, 1, "revoked")))
			}

			function bs(t, e) {
				if (1 & t && ($.j41(0, "div", 57), $.EFF(1), $.k0s()), 2 & t) {
					const t = $.XpG().$implicit;
					$.R7$(), $.SpI("\n                    ", t.email, "\n                  ")
				}
			}

			function gs(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                "), $.nrm(2, "i", 58), $.nI1(3, "i18n"), $.EFF(4, "\n                "), $.j41(5, "span", 13), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n              "), $.bVm()), 2 & t && ($.R7$(2), $.FS9("title", $.bMT(3, 2, "userUsingTwoStep")), $.R7$(4), $.JRh($.bMT(7, 4, "userUsingTwoStep")))
			}

			function Es(t, e) {
				1 & t && ($.qex(0), $.EFF(1, "\n                "), $.nrm(2, "i", 59), $.nI1(3, "i18n"), $.EFF(4, "\n                "), $.j41(5, "span", 13), $.EFF(6), $.nI1(7, "i18n"), $.k0s(), $.EFF(8, "\n              "), $.bVm()), 2 & t && ($.R7$(2), $.FS9("title", $.bMT(3, 2, "enrolledAccountRecovery")), $.R7$(4), $.JRh($.bMT(7, 4, "enrolledAccountRecovery")))
			}

			function fs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.reinvite(e))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 60), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "resendInvitation"), "\n                "))
			}

			function vs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.confirm(e))
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 31), $.EFF(3, "\n                    "), $.nrm(4, "i", 61), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI(" ", $.bMT(6, 1, "confirm"), "\n                  "))
			}

			function Is(t, e) {
				1 & t && $.nrm(0, "bit-menu-divider")
			}

			function ks(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e, n.memberTab.Groups))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 62), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI(" ", $.bMT(4, 1, "groups"), "\n                "))
			}

			function ys(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.openEventsDialog(e))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 63), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI(" ", $.bMT(4, 1, "eventLogs"), "\n                "))
			}

			function Rs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.resetPassword(e))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 64), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI(" ", $.bMT(4, 1, "recoverAccount"), "\n                "))
			}

			function ws(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.restore(e))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 65), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "restoreAccess"), "\n                "))
			}

			function Ss(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.revoke(e))
					})), $.EFF(1, "\n                  "), $.nrm(2, "i", 66), $.EFF(3), $.nI1(4, "i18n"), $.k0s()
				}
				2 & t && ($.R7$(3), $.SpI("\n                  ", $.bMT(4, 1, "revokeAccess"), "\n                "))
			}

			function $s(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.remove(e))
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 35), $.EFF(3, "\n                    "), $.nrm(4, "i", 67), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI(" ", $.bMT(6, 1, "remove"), "\n                  "))
			}

			function Gs(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "button", 29), $.bIt("click", (function() {
						$.eBV(t);
						const e = $.XpG().$implicit,
							n = $.XpG(4);
						return $.Njj(n.deleteUser(e))
					})), $.EFF(1, "\n                  "), $.j41(2, "span", 35), $.EFF(3, "\n                    "), $.nrm(4, "i", 68), $.EFF(5), $.nI1(6, "i18n"), $.k0s(), $.EFF(7, "\n                "), $.k0s()
				}
				2 & t && ($.R7$(5), $.SpI("\n                    ", $.bMT(6, 1, "delete"), "\n                  "))
			}

			function Ts(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.j41(0, "tr", 39), $.EFF(1, "\n            "), $.j41(2, "td", 40), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.dataSource.checkUser(e))
					})), $.EFF(3, "\n              "), $.j41(4, "input", 41), $.mxI("ngModelChange", (function(e) {
						const n = $.eBV(t).$implicit;
						return $.DH7(n.checked, e) || (n.checked = e), $.Njj(e)
					})), $.k0s(), $.EFF(5, "\n            "), $.k0s(), $.EFF(6, "\n            "), $.j41(7, "td", 42), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e))
					})), $.EFF(8, "\n              "), $.j41(9, "div", 43), $.EFF(10, "\n                "), $.nrm(11, "bit-avatar", 44), $.nI1(12, "userName"), $.EFF(13, "\n                "), $.j41(14, "div", 45), $.EFF(15, "\n                  "), $.j41(16, "div"), $.EFF(17, "\n                    "), $.j41(18, "button", 46), $.EFF(19), $.k0s(), $.EFF(20, "\n                    "), $.DNE(21, ps, 3, 3, "span", 47), $.EFF(22, "\n                    "), $.DNE(23, hs, 3, 3, "span", 48), $.EFF(24, "\n                    "), $.DNE(25, ms, 3, 3, "span", 47), $.EFF(26, "\n                  "), $.k0s(), $.EFF(27, "\n                  "), $.DNE(28, bs, 2, 1, "div", 49), $.EFF(29, "\n                "), $.k0s(), $.EFF(30, "\n              "), $.k0s(), $.EFF(31, "\n            "), $.k0s(), $.EFF(32, "\n\n            "), $.j41(33, "td", 42), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e, n.organization.useGroups ? n.memberTab.Groups : n.memberTab.Collections))
					})), $.EFF(34, "\n              "), $.nrm(35, "bit-badge-list", 50), $.EFF(36, "\n            "), $.k0s(), $.EFF(37, "\n\n            "), $.j41(38, "td", 51), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e, n.memberTab.Role))
					})), $.EFF(39), $.nI1(40, "userType"), $.k0s(), $.EFF(41, "\n\n            "), $.j41(42, "td", 52), $.EFF(43, "\n              "), $.DNE(44, gs, 9, 6, "ng-container", 10), $.EFF(45, "\n              "), $.DNE(46, Es, 9, 6, "ng-container", 10), $.EFF(47, "\n            "), $.k0s(), $.EFF(48, "\n            "), $.j41(49, "td", 22), $.EFF(50, "\n              "), $.nrm(51, "button", 25), $.nI1(52, "i18n"), $.EFF(53, "\n\n              "), $.j41(54, "bit-menu", null, 2), $.EFF(56, "\n                "), $.DNE(57, fs, 5, 3, "button", 26), $.EFF(58, "\n                "), $.DNE(59, vs, 8, 3, "button", 26), $.EFF(60, "\n                "), $.DNE(61, Is, 1, 0, "bit-menu-divider", 10), $.EFF(62, "\n                "), $.j41(63, "button", 29), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e, n.memberTab.Role))
					})), $.EFF(64, "\n                  "), $.nrm(65, "i", 53), $.EFF(66), $.nI1(67, "i18n"), $.k0s(), $.EFF(68, "\n                "), $.DNE(69, ks, 5, 3, "button", 26), $.EFF(70, "\n                "), $.j41(71, "button", 29), $.bIt("click", (function() {
						const e = $.eBV(t).$implicit,
							n = $.XpG(4);
						return $.Njj(n.edit(e, n.memberTab.Collections))
					})), $.EFF(72, "\n                  "), $.nrm(73, "i", 54), $.EFF(74), $.nI1(75, "i18n"), $.k0s(), $.EFF(76, "\n                "), $.nrm(77, "bit-menu-divider"), $.EFF(78, "\n                "), $.DNE(79, ys, 5, 3, "button", 26), $.EFF(80, "\n                "), $.DNE(81, Rs, 5, 3, "button", 26), $.EFF(82, "\n                "), $.DNE(83, ws, 5, 3, "button", 26), $.EFF(84, "\n                "), $.DNE(85, Ss, 5, 3, "button", 26), $.EFF(86, "\n                "), $.DNE(87, $s, 8, 3, "button", 26), $.EFF(88, "\n                "), $.DNE(89, Gs, 8, 3, "button", 26), $.EFF(90, "\n              "), $.k0s(), $.EFF(91, "\n            "), $.k0s(), $.EFF(92, "\n          "), $.k0s()
				}
				if (2 & t) {
					let t;
					const n = e.$implicit,
						i = $.sdS(55),
						s = $.XpG(4);
					$.Y8G("ngClass", s.rowHeightClass), $.R7$(4), $.R50("ngModel", n.checked), $.R7$(7), $.Y8G("text", $.bMT(12, 29, n))("id", n.userId)("color", n.avatarColor), $.R7$(8), $.SpI("\n                      ", null !== (t = n.name) && void 0 !== t ? t : n.email, "\n                    "), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Invited), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Accepted), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Revoked), $.R7$(3), $.Y8G("ngIf", n.name), $.R7$(7), $.Y8G("items", s.organization.useGroups ? n.groupNames : n.collectionNames)("maxItems", 3), $.R7$(4), $.SpI("\n              ", $.bMT(40, 31, n.type), "\n            "), $.R7$(5), $.Y8G("ngIf", n.twoFactorEnabled), $.R7$(2), $.Y8G("ngIf", s.showEnrolledStatus(n)), $.R7$(5), $.FS9("appA11yTitle", $.bMT(52, 33, "options")), $.Y8G("bitMenuTriggerFor", i), $.R7$(6), $.Y8G("ngIf", n.status === s.userStatusType.Invited), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Accepted), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Accepted || n.status === s.userStatusType.Invited), $.R7$(5), $.SpI(" ", $.bMT(67, 35, "memberRole"), "\n                "), $.R7$(3), $.Y8G("ngIf", s.organization.useGroups), $.R7$(5), $.SpI(" ", $.bMT(75, 37, "collections"), "\n                "), $.R7$(5), $.Y8G("ngIf", s.organization.useEvents && n.status === s.userStatusType.Confirmed), $.R7$(2), $.Y8G("ngIf", s.allowResetPassword(n)), $.R7$(2), $.Y8G("ngIf", n.status === s.userStatusType.Revoked), $.R7$(2), $.Y8G("ngIf", n.status !== s.userStatusType.Revoked), $.R7$(2), $.Y8G("ngIf", !s.accountDeprovisioningEnabled || !n.managedByOrganization), $.R7$(2), $.Y8G("ngIf", s.accountDeprovisioningEnabled && n.managedByOrganization)
				}
			}

			function js(t, e) {
				if (1 & t && ($.EFF(0, "\n          "), $.DNE(1, Ts, 93, 39, "tr", 38), $.EFF(2, "\n        ")), 2 & t) {
					const t = e.$implicit;
					$.R7$(), $.Y8G("cdkVirtualForOf", t)
				}
			}

			function Ms(t, e) {
				if (1 & t) {
					const t = $.RV6();
					$.qex(0), $.EFF(1, "\n    "), $.DNE(2, os, 4, 6, "bit-callout", 14), $.EFF(3, "\n    "), $.EFF(4, "\n    "), $.j41(5, "cdk-virtual-scroll-viewport", 15), $.EFF(6, "\n      "), $.j41(7, "bit-table", 16), $.EFF(8, "\n        "), $.qex(9, 17), $.EFF(10, "\n          "), $.j41(11, "tr"), $.EFF(12, "\n            "), $.j41(13, "th", 18), $.EFF(14, "\n              "), $.j41(15, "input", 19), $.bIt("change", (function(e) {
						$.eBV(t);
						const n = $.XpG(2);
						return $.Njj(n.dataSource.checkAllFilteredUsers(e.target.checked))
					})), $.k0s(), $.EFF(16, "\n              "), $.j41(17, "label", 20), $.EFF(18), $.nI1(19, "i18n"), $.k0s(), $.EFF(20, "\n            "), $.k0s(), $.EFF(21, "\n            "), $.j41(22, "th", 21), $.EFF(23), $.nI1(24, "i18n"), $.k0s(), $.EFF(25, "\n            "), $.j41(26, "th", 22), $.EFF(27), $.nI1(28, "i18n"), $.k0s(), $.EFF(29, "\n            "), $.j41(30, "th", 23), $.EFF(31), $.nI1(32, "i18n"), $.k0s(), $.EFF(33, "\n            "), $.j41(34, "th", 22), $.EFF(35), $.nI1(36, "i18n"), $.k0s(), $.EFF(37, "\n            "), $.j41(38, "th", 24), $.EFF(39, "\n              "), $.nrm(40, "button", 25), $.nI1(41, "i18n"), $.EFF(42, "\n\n              "), $.j41(43, "bit-menu", null, 1), $.EFF(45, "\n                "), $.DNE(46, rs, 8, 3, "ng-container", 10), $.nI1(47, "async"), $.EFF(48, "\n                "), $.DNE(49, as, 5, 3, "button", 26), $.EFF(50, "\n                "), $.DNE(51, cs, 8, 3, "button", 26), $.EFF(52, "\n                "), $.DNE(53, ls, 5, 3, "button", 26), $.EFF(54, "\n                "), $.DNE(55, us, 5, 3, "button", 26), $.EFF(56, "\n                "), $.DNE(57, Fs, 8, 3, "button", 26), $.EFF(58, "\n                "), $.DNE(59, ds, 8, 3, "button", 26), $.EFF(60, "\n              "), $.k0s(), $.EFF(61, "\n            "), $.k0s(), $.EFF(62, "\n          "), $.k0s(), $.EFF(63, "\n        "), $.bVm(), $.EFF(64, "\n        "), $.DNE(65, js, 3, 1, "ng-template", 27), $.EFF(66, "\n      "), $.k0s(), $.EFF(67, "\n    "), $.k0s(), $.EFF(68, "\n  "), $.bVm()
				}
				if (2 & t) {
					const t = $.sdS(44),
						e = $.XpG(2);
					$.R7$(2), $.Y8G("ngIf", e.showConfirmUsers), $.R7$(3), $.Y8G("itemSize", e.rowHeight), $.R7$(2), $.Y8G("dataSource", e.dataSource), $.R7$(11), $.JRh($.bMT(19, 17, "all")), $.R7$(5), $.JRh($.bMT(24, 19, "name")), $.R7$(4), $.JRh($.bMT(28, 21, e.organization.useGroups ? "groups" : "collections")), $.R7$(4), $.JRh($.bMT(32, 23, "role")), $.R7$(4), $.JRh($.bMT(36, 25, "policies")), $.R7$(5), $.FS9("appA11yTitle", $.bMT(41, 27, "options")), $.Y8G("bitMenuTriggerFor", t), $.R7$(6), $.Y8G("ngIf", $.bMT(47, 29, e.canUseSecretsManager$)), $.R7$(3), $.Y8G("ngIf", e.showBulkReinviteUsers), $.R7$(2), $.Y8G("ngIf", e.showBulkConfirmUsers), $.R7$(2), $.Y8G("ngIf", e.showBulkRestoreUsers), $.R7$(2), $.Y8G("ngIf", e.showBulkRevokeUsers), $.R7$(2), $.Y8G("ngIf", e.showBulkRemoveUsers), $.R7$(2), $.Y8G("ngIf", e.showBulkDeleteUsers)
				}
			}

			function Us(t, e) {
				if (1 & t && ($.qex(0), $.EFF(1, "\n  "), $.DNE(2, ss, 3, 3, "p", 10), $.EFF(3, "\n  "), $.DNE(4, Ms, 69, 31, "ng-container", 10), $.EFF(5, "\n"), $.bVm()), 2 & t) {
					const t = $.XpG();
					$.R7$(2), $.Y8G("ngIf", !t.dataSource.filteredData.length), $.R7$(2), $.Y8G("ngIf", t.dataSource.filteredData.length)
				}
			}

			function Cs(t, e) {}
			class Ds extends re {
				constructor() {
					super(...arguments), this.statusType = f.Zx
				}
			}
			class xs extends ue {
				constructor(t, e, n, i, s, o, r, a, c, l, u, F, h, g, E, v, I, k, y, R, w, S, $) {
					super(t, e, i, o, r, a, c, n, l), this.encryptService = s, this.policyService = u, this.policyApiService = F, this.route = h, this.syncService = g, this.organizationService = E, this.organizationApiService = v, this.organizationUserApiService = I, this.router = k, this.groupService = y, this.collectionService = R, this.billingApiService = w, this.modalService = S, this.configService = $, this.userType = f.D7, this.userStatusType = f.Zx, this.memberTab = Mt, this.dataSource = new Ds, this.status = null, this.orgResetPasswordPolicyEnabled = !1, this.orgIsOnSecretsManagerStandalone = !1, this.accountDeprovisioningEnabled = !1, this.rowHeight = 69, this.rowHeightClass = "tw-h-[69px]";
					const G = this.route.params.pipe((0, At.H)((t => this.organizationService.get$(t.organizationId))), (0, d.t)({
						refCount: !0,
						bufferSize: 1
					}));
					this.canUseSecretsManager$ = G.pipe((0, m.T)((t => t.useSecretsManager)));
					const T = G.pipe((0, p.n)((t => t.isProviderUser ? (0, Xt.H)(this.policyApiService.getPolicies(t.id)).pipe((0, m.T)((t => Jt.P.fromListResponse(t)))) : this.policyService.policies$)));
					(0, b.z)([this.route.queryParams, T, G]).pipe((0, At.H)((t => Qi(this, [t], void 0, (function*([t, e, n]) {
						if (this.organization = n, this.organization.canManageUsersPassword && !this.organization.hasPublicAndPrivateKeys) {
							const t = yield this.keyService.getOrgKey(this.organization.id), e = yield this.keyService.makeKeyPair(t), n = new qt.B(e[0], e[1].encryptedString), i = yield this.organizationApiService.updateKeys(this.organization.id, n);
							if (null == i) throw new Error(this.i18nService.t("resetPasswordOrgKeysError"));
							this.organization.hasPublicAndPrivateKeys = null != i.publicKey && null != i.privateKey, yield this.syncService.fullSync(!0)
						}
						const i = e.filter((t => t.type === f.tt.ResetPassword)).find((t => t.organizationId === this.organization.id));
						if (this.orgResetPasswordPolicyEnabled = null == i ? void 0 : i.enabled, this.orgIsOnSecretsManagerStandalone = !1, yield this.load(), this.searchControl.setValue(t.search), null != t.viewEvents) {
							const e = this.dataSource.data.filter((e => e.id === t.viewEvents));
							e.length > 0 && e[0].status === f.Zx.Confirmed && this.openEventsDialog(e[0])
						}
					})))), (0, zt.pQ)()).subscribe()
				}
				ngOnInit() {
					return Qi(this, void 0, void 0, (function*() {
						this.accountDeprovisioningEnabled = yield this.configService.getFeatureFlag(k.T.AccountDeprovisioning)
					}))
				}
				getUsers() {
					return Qi(this, void 0, void 0, (function*() {
						var t;
						let e, n;
						const i = this.organizationUserApiService.getAllUsers(this.organization.id, {
							includeGroups: this.organization.useGroups,
							includeCollections: !this.organization.useGroups
						});
						this.organization.useGroups ? e = this.getGroupNameMap() : n = this.getCollectionNameMap();
						const [s, o, r] = yield Promise.all([i, e, n]);
						return null === (t = s.data) || void 0 === t ? void 0 : t.map((t => {
							var e, n;
							const i = Fe.i.fromResponse(t);
							return i.groupNames = i.groups.map((t => o.get(t))).sort(null === (e = this.i18nService.collator) || void 0 === e ? void 0 : e.compare), i.collectionNames = i.collections.map((t => r.get(t.id))).sort(null === (n = this.i18nService.collator) || void 0 === n ? void 0 : n.compare), i
						}))
					}))
				}
				getGroupNameMap() {
					return Qi(this, void 0, void 0, (function*() {
						const t = yield this.groupService.getAll(this.organization.id), e = new Map;
						return t.forEach((t => e.set(t.id, t.name))), e
					}))
				}
				getCollectionNameMap() {
					return Qi(this, void 0, void 0, (function*() {
						const t = new Map,
							e = (yield this.apiService.getCollections(this.organization.id)).data.map((t => new E.pM(new E.Fw(t))));
						return (yield this.collectionService.decryptMany(e)).forEach((e => t.set(e.id, e.name))), t
					}))
				}
				removeUser(t) {
					return this.organizationUserApiService.removeOrganizationUser(this.organization.id, t)
				}
				revokeUser(t) {
					return this.organizationUserApiService.revokeOrganizationUser(this.organization.id, t)
				}
				restoreUser(t) {
					return this.organizationUserApiService.restoreOrganizationUser(this.organization.id, t)
				}
				reinviteUser(t) {
					return this.organizationUserApiService.postOrganizationUserReinvite(this.organization.id, t)
				}
				confirmUser(t, e) {
					return Qi(this, void 0, void 0, (function*() {
						const n = yield this.keyService.getOrgKey(this.organization.id), i = yield this.encryptService.rsaEncrypt(n.key, e), s = new E.u2;
						s.key = i.encryptedString, yield this.organizationUserApiService.postOrganizationUserConfirm(this.organization.id, t.id, s)
					}))
				}
				revoke(t) {
					return Qi(this, void 0, void 0, (function*() {
						if (!(yield this.revokeUserConfirmationDialog(t))) return !1;
						this.actionPromise = this.revokeUser(t.id);
						try {
							yield this.actionPromise, this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("revokedUserId", this.userNamePipe.transform(t))
							}), yield this.load()
						} catch (e) {
							this.validationService.showError(e)
						}
						this.actionPromise = null
					}))
				}
				restore(t) {
					return Qi(this, void 0, void 0, (function*() {
						this.actionPromise = this.restoreUser(t.id);
						try {
							yield this.actionPromise, this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("restoredUserId", this.userNamePipe.transform(t))
							}), yield this.load()
						} catch (e) {
							this.validationService.showError(e)
						}
						this.actionPromise = null
					}))
				}
				allowResetPassword(t) {
					let e = !1;
					switch (this.organization.type) {
						case f.D7.Owner:
							e = !0;
							break;
						case f.D7.Admin:
							e = t.type !== f.D7.Owner;
							break;
						case f.D7.Custom:
							e = t.type !== f.D7.Owner && t.type !== f.D7.Admin
					}
					return this.organization.canManageUsersPassword && e && this.organization.useResetPassword && this.organization.hasPublicAndPrivateKeys && t.resetPasswordEnrolled && this.orgResetPasswordPolicyEnabled && t.status === f.Zx.Confirmed
				}
				showEnrolledStatus(t) {
					return this.organization.useResetPassword && t.resetPasswordEnrolled && this.orgResetPasswordPolicyEnabled
				}
				getManageBillingText() {
					return this.organization.canEditSubscription ? "ManageBilling" : "NoManageBilling"
				}
				getProductKey(t) {
					let e = "";
					switch (t) {
						case I.K_.Free:
							e = "freeOrg";
							break;
						case I.K_.TeamsStarter:
							e = "teamsStarterPlan";
							break;
						case I.K_.Families:
							e = "familiesPlan";
							break;
						default:
							throw new Error(`Unsupported product type: ${t}`)
					}
					return `${e}InvLimitReached${this.getManageBillingText()}`
				}
				getDialogContent() {
					return this.i18nService.t(this.getProductKey(this.organization.productTierType), this.organization.seats)
				}
				getAcceptButtonText() {
					if (!this.organization.canEditSubscription) return this.i18nService.t("ok");
					const t = this.organization.productTierType;
					if ((0, I.LF)(t)) throw new Error(`Unsupported product type: ${t}`);
					return this.i18nService.t("upgrade")
				}
				handleDialogClose(t) {
					return Qi(this, void 0, void 0, (function*() {
						if (!t || !this.organization.canEditSubscription) return;
						const e = this.organization.productTierType;
						if ((0, I.LF)(e)) throw new Error(`Unsupported product type: ${this.organization.productTierType}`);
						yield this.router.navigate(["/organizations", this.organization.id, "billing", "subscription"], {
							queryParams: {
								upgrade: !0
							}
						})
					}))
				}
				showSeatLimitReachedDialog() {
					return Qi(this, void 0, void 0, (function*() {
						const t = {
							title: this.i18nService.t("upgradeOrganization"),
							content: this.getDialogContent(),
							type: "primary",
							acceptButtonText: this.getAcceptButtonText()
						};
						this.organization.canEditSubscription || (t.cancelButtonText = null);
						const e = this.dialogService.openSimpleDialogRef(t);
						(0, F._)(e.closed).then(this.handleDialogClose.bind(this))
					}))
				}
				edit(t) {
					return Qi(this, arguments, void 0, (function*(t, e = Mt.Role) {
						var n, i;
						if (!t && this.organization.hasReseller && this.organization.seats === this.dataSource.confirmedUserCount) return void this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("seatLimitReached"),
							message: this.i18nService.t("contactYourProvider")
						});
						if (!t && this.dataSource.data.length === this.organization.seats && (this.organization.productTierType === I.K_.Free || this.organization.productTierType === I.K_.TeamsStarter || this.organization.productTierType === I.K_.Families)) {
							if (!this.organization.canEditSubscription) return void(yield this.showSeatLimitReachedDialog());
							const t = (0, Wt.IO)(this.dialogService, {
								data: {
									organizationId: this.organization.id,
									subscription: null,
									productTierType: this.organization.productTierType
								}
							});
							return void((yield(0, Bt.s)(t.closed)) === Wt.d1.Submitted && (yield this.load()))
						}
						const s = this.dataSource.confirmedUserCount + this.dataSource.invitedUserCount + this.dataSource.acceptedUserCount,
							o = (r = this.dialogService, a = {
								data: {
									name: this.userNamePipe.transform(t),
									organizationId: this.organization.id,
									organizationUserId: null != t ? t.id : null,
									allOrganizationUserEmails: null !== (i = null === (n = this.dataSource.data) || void 0 === n ? void 0 : n.map((t => t.email))) && void 0 !== i ? i : [],
									usesKeyConnector: null == t ? void 0 : t.usesKeyConnector,
									isOnSecretsManagerStandalone: this.orgIsOnSecretsManagerStandalone,
									initialTab: e,
									numSeatsUsed: s,
									managedByOrganization: null == t ? void 0 : t.managedByOrganization
								}
							}, r.open(Ct, a));
						var r, a;
						switch (yield(0, Bt.s)(o.closed)) {
							case Ut.Deleted:
								this.dataSource.removeUser(t);
								break;
							case Ut.Saved:
							case Ut.Revoked:
							case Ut.Restored:
								this.load()
						}
					}))
				}
				bulkRemove() {
					return Qi(this, void 0, void 0, (function*() {
						if (null != this.actionPromise) return;
						const t = Mn.open(this.dialogService, {
							data: {
								organizationId: this.organization.id,
								users: this.dataSource.getCheckedUsers()
							}
						});
						yield(0, Bt.s)(t.closed), yield this.load()
					}))
				}
				bulkDelete() {
					return Qi(this, void 0, void 0, (function*() {
						if (null != this.actionPromise) return;
						const t = en.open(this.dialogService, {
							data: {
								organizationId: this.organization.id,
								users: this.dataSource.getCheckedUsers()
							}
						});
						yield(0, Bt.s)(t.closed), yield this.load()
					}))
				}
				bulkRevoke() {
					return Qi(this, void 0, void 0, (function*() {
						yield this.bulkRevokeOrRestore(!0)
					}))
				}
				bulkRestore() {
					return Qi(this, void 0, void 0, (function*() {
						yield this.bulkRevokeOrRestore(!1)
					}))
				}
				bulkRevokeOrRestore(t) {
					return Qi(this, void 0, void 0, (function*() {
						if (null != this.actionPromise) return;
						const e = Ei.open(this.dialogService, {
							organizationId: this.organization.id,
							users: this.dataSource.getCheckedUsers(),
							isRevoking: t
						});
						yield(0, F._)(e.closed), yield this.load()
					}))
				}
				bulkReinvite() {
					return Qi(this, void 0, void 0, (function*() {
						if (null != this.actionPromise) return;
						const t = this.dataSource.getCheckedUsers(),
							e = t.filter((t => t.status === f.Zx.Invited));
						if (e.length <= 0) this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("noSelectedUsersApplicable")
						});
						else {
							try {
								const n = this.organizationUserApiService.postManyOrganizationUserReinvite(this.organization.id, e.map((t => t.id))),
									i = $i.open(this.dialogService, {
										data: {
											users: t,
											filteredUsers: e,
											request: n,
											successfulMessage: this.i18nService.t("bulkReinviteMessage")
										}
									});
								yield(0, Bt.s)(i.closed)
							} catch (n) {
								this.validationService.showError(n)
							}
							this.actionPromise = null
						}
					}))
				}
				bulkConfirm() {
					return Qi(this, void 0, void 0, (function*() {
						if (null != this.actionPromise) return;
						const t = Ye.open(this.dialogService, {
							data: {
								organizationId: this.organization.id,
								users: this.dataSource.getCheckedUsers()
							}
						});
						yield(0, Bt.s)(t.closed), yield this.load()
					}))
				}
				bulkEnableSM() {
					return Qi(this, void 0, void 0, (function*() {
						const t = this.dataSource.getCheckedUsers().filter((t => !t.accessSecretsManager));
						if (0 === t.length) return void this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("noSelectedUsersApplicable")
						});
						const e = ln.open(this.dialogService, {
							orgId: this.organization.id,
							users: t
						});
						yield(0, Bt.s)(e.closed), this.dataSource.uncheckAllUsers(), yield this.load()
					}))
				}
				openEventsDialog(t) {
					(0, de.l)(this.dialogService, {
						data: {
							name: this.userNamePipe.transform(t),
							organizationId: this.organization.id,
							entityId: t.id,
							showUser: !1,
							entity: "user"
						}
					})
				}
				resetPassword(t) {
					return Qi(this, void 0, void 0, (function*() {
						const e = Pi.open(this.dialogService, {
							data: {
								name: this.userNamePipe.transform(t),
								email: null != t ? t.email : null,
								organizationId: this.organization.id,
								id: null != t ? t.id : null
							}
						});
						(yield(0, Bt.s)(e.closed)) === Gi.Ok && (yield this.load())
					}))
				}
				removeUserConfirmationDialog(t) {
					return Qi(this, void 0, void 0, (function*() {
						const e = t.usesKeyConnector ? "removeUserConfirmationKeyConnector" : "removeOrgUserConfirmation";
						return !!(yield this.dialogService.openSimpleDialog({
							title: {
								key: "removeUserIdAccess",
								placeholders: [this.userNamePipe.transform(t)]
							},
							content: {
								key: e
							},
							type: "warning"
						})) && (!(t.status > f.Zx.Invited && !1 === t.hasMasterPassword) || (yield this.noMasterPasswordConfirmationDialog(t)))
					}))
				}
				revokeUserConfirmationDialog(t) {
					return Qi(this, void 0, void 0, (function*() {
						return !!(yield this.dialogService.openSimpleDialog({
							title: {
								key: "revokeAccess",
								placeholders: [this.userNamePipe.transform(t)]
							},
							content: this.i18nService.t("revokeUserConfirmation"),
							acceptButtonText: {
								key: "revokeAccess"
							},
							type: "warning"
						})) && (!(t.status > f.Zx.Invited && !1 === t.hasMasterPassword) || (yield this.noMasterPasswordConfirmationDialog(t)))
					}))
				}
				deleteUser(t) {
					return Qi(this, void 0, void 0, (function*() {
						if (!(yield this.dialogService.openSimpleDialog({
								title: {
									key: "deleteOrganizationUser",
									placeholders: [this.userNamePipe.transform(t)]
								},
								content: {
									key: "deleteOrganizationUserWarningDesc",
									placeholders: [this.userNamePipe.transform(t)]
								},
								type: "warning",
								acceptButtonText: {
									key: "delete"
								},
								cancelButtonText: {
									key: "cancel"
								}
							}))) return !1;
						this.actionPromise = this.organizationUserApiService.deleteOrganizationUser(this.organization.id, t.id);
						try {
							yield this.actionPromise, this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("organizationUserDeleted", this.userNamePipe.transform(t))
							}), this.dataSource.removeUser(t)
						} catch (e) {
							this.validationService.showError(e)
						}
						this.actionPromise = null
					}))
				}
				noMasterPasswordConfirmationDialog(t) {
					return Qi(this, void 0, void 0, (function*() {
						return this.dialogService.openSimpleDialog({
							title: {
								key: "removeOrgUserNoMasterPasswordTitle"
							},
							content: {
								key: "removeOrgUserNoMasterPasswordDesc",
								placeholders: [this.userNamePipe.transform(t)]
							},
							type: "warning"
						})
					}))
				}
				get showBulkConfirmUsers() {
					return this.accountDeprovisioningEnabled ? this.dataSource.getCheckedUsers().every((t => t.status == this.userStatusType.Accepted)) : super.showBulkConfirmUsers
				}
				get showBulkReinviteUsers() {
					return this.accountDeprovisioningEnabled ? this.dataSource.getCheckedUsers().every((t => t.status == this.userStatusType.Invited)) : super.showBulkReinviteUsers
				}
				get showBulkRestoreUsers() {
					return !this.accountDeprovisioningEnabled || this.dataSource.getCheckedUsers().every((t => t.status == this.userStatusType.Revoked))
				}
				get showBulkRevokeUsers() {
					return !this.accountDeprovisioningEnabled || this.dataSource.getCheckedUsers().every((t => t.status != this.userStatusType.Revoked))
				}
				get showBulkRemoveUsers() {
					return !this.accountDeprovisioningEnabled || this.dataSource.getCheckedUsers().every((t => !t.managedByOrganization))
				}
				get showBulkDeleteUsers() {
					if (!this.accountDeprovisioningEnabled) return !1;
					const t = [this.userStatusType.Accepted, this.userStatusType.Confirmed, this.userStatusType.Revoked];
					return this.dataSource.getCheckedUsers().every((e => e.managedByOrganization && t.includes(e.status)))
				}
			}
			xs.ɵfac = function(t) {
				return new(t || xs)($.rXU(ae.G), $.rXU(G.W), $.rXU(te.y), $.rXU(Lt.Lu), $.rXU(he.N), $.rXU(ce.B), $.rXU(Ht.K), $.rXU(Vt.b), $.rXU(T.o), $.rXU(j.f), $.rXU(Mi.m), $.rXU(Yi.m), $.rXU(Pt.nX), $.rXU(Kt.H), $.rXU(U.PV), $.rXU(zi.X), $.rXU(E.uB), $.rXU(Pt.Ix), $.rXU(y.nK), $.rXU(E.YD), $.rXU(Ai.P), $.rXU(Ot.B), $.rXU(C.w))
			}, xs.ɵcmp = $.VBU({
				type: xs,
				selectors: [
					["ng-component"]
				],
				viewQuery: function(t, e) {
					if (1 & t && $.GBs(Zi, 7, $.c1b), 2 & t) {
						let t;
						$.mGM(t = $.lsd()) && (e.resetPasswordModalRef = t.first)
					}
				},
				features: [$.Vt3],
				decls: 50,
				vars: 34,
				consts: [
					["resetPasswordTemplate", ""],
					["headerMenu", ""],
					["rowMenu", ""],
					[1, "tw-grow", 3, "formControl", "placeholder"],
					["type", "button", "bitButton", "", "buttonType", "primary", 3, "click", "disabled"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus", "bwi-fw"],
					[1, "tw-mb-4", "tw-flex", "tw-flex-col", "tw-space-y-4"],
					[3, "selectedChange", "selected"],
					[3, "value"],
					["bitBadge", "", "variant", "info", 4, "ngIf"],
					[4, "ngIf"],
					["bitBadge", "", "variant", "info"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					["type", "info", "icon", "bwi-check-circle", 3, "title", 4, "ngIf"],
					["scrollWindow", "", 1, "tw-pb-8", 3, "itemSize"],
					[3, "dataSource"],
					["header", ""],
					["bitCell", "", 1, "tw-w-20"],
					["type", "checkbox", "bitCheckbox", "", "id", "selectAll", 1, "tw-mr-1", 3, "change"],
					["for", "selectAll", 1, "tw-mb-0", "!tw-font-bold", "!tw-text-muted"],
					["bitCell", "", "bitSortable", "email", "default", ""],
					["bitCell", ""],
					["bitCell", "", "bitSortable", "type"],
					["bitCell", "", 1, "tw-w-10"],
					["type", "button", "bitIconButton", "bwi-ellipsis-v", "size", "small", 3, "bitMenuTriggerFor", "appA11yTitle"],
					["type", "button", "bitMenuItem", "", 3, "click", 4, "ngIf"],
					["body", ""],
					["type", "info", "icon", "bwi-check-circle", 3, "title"],
					["type", "button", "bitMenuItem", "", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-envelope"],
					[1, "tw-text-success"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-check"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-plus-circle"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-minus-circle"],
					[1, "tw-text-danger"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-close"],
					["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-trash"],
					["bitRow", "", "alignContent", "middle", 3, "ngClass", 4, "cdkVirtualFor", "cdkVirtualForOf"],
					["bitRow", "", "alignContent", "middle", 3, "ngClass"],
					["bitCell", "", 3, "click"],
					["type", "checkbox", "bitCheckbox", "", 3, "ngModelChange", "ngModel"],
					["bitCell", "", 1, "tw-cursor-pointer", 3, "click"],
					[1, "tw-flex", "tw-items-center"],
					["size", "small", 1, "tw-mr-3", 3, "text", "id", "color"],
					[1, "tw-flex", "tw-flex-col"],
					["type", "button", "bitLink", ""],
					["bitBadge", "", "class", "tw-text-xs", "variant", "secondary", 4, "ngIf"],
					["bitBadge", "", "class", "tw-text-xs", "variant", "warning", 4, "ngIf"],
					["class", "tw-text-sm tw-text-muted", 4, "ngIf"],
					["variant", "secondary", 3, "items", "maxItems"],
					["bitCell", "", 1, "tw-cursor-pointer", "tw-text-sm", "tw-text-muted", 3, "click"],
					["bitCell", "", 1, "tw-text-muted"],
					["aria-hidden", "true", 1, "bwi", "bwi-user"],
					["aria-hidden", "true", 1, "bwi", "bwi-collection"],
					["bitBadge", "", "variant", "secondary", 1, "tw-text-xs"],
					["bitBadge", "", "variant", "warning", 1, "tw-text-xs"],
					[1, "tw-text-sm", "tw-text-muted"],
					["aria-hidden", "true", 1, "bwi", "bwi-lock", 3, "title"],
					["aria-hidden", "true", 1, "bwi", "bwi-key", 3, "title"],
					["aria-hidden", "true", 1, "bwi", "bwi-envelope"],
					["aria-hidden", "true", 1, "bwi", "bwi-check"],
					["aria-hidden", "true", 1, "bwi", "bwi-users"],
					["aria-hidden", "true", 1, "bwi", "bwi-file-text"],
					["aria-hidden", "true", 1, "bwi", "bwi-key"],
					["aria-hidden", "true", 1, "bwi", "bwi-plus-circle"],
					["aria-hidden", "true", 1, "bwi", "bwi-minus-circle"],
					["aria-hidden", "true", 1, "bwi", "bwi-close"],
					["aria-hidden", "true", 1, "bwi", "bwi-trash"]
				],
				template: function(t, e) {
					if (1 & t) {
						const t = $.RV6();
						$.j41(0, "app-header"), $.EFF(1, "\n  "), $.nrm(2, "bit-search", 3), $.nI1(3, "i18n"), $.EFF(4, "\n\n  "), $.j41(5, "button", 4), $.bIt("click", (function() {
							return $.eBV(t), $.Njj(e.invite())
						})), $.EFF(6, "\n    "), $.nrm(7, "i", 5), $.EFF(8), $.nI1(9, "i18n"), $.k0s(), $.EFF(10, "\n"), $.k0s(), $.EFF(11, "\n\n"), $.j41(12, "div", 6), $.EFF(13, "\n  "), $.j41(14, "bit-toggle-group", 7), $.nI1(15, "i18n"), $.bIt("selectedChange", (function(n) {
							return $.eBV(t), $.Njj(e.statusToggle.next(n))
						})), $.EFF(16, "\n    "), $.j41(17, "bit-toggle", 8), $.EFF(18), $.nI1(19, "i18n"), $.DNE(20, Hi, 2, 1, "span", 9), $.EFF(21, "\n    "), $.k0s(), $.EFF(22, "\n\n    "), $.j41(23, "bit-toggle", 8), $.EFF(24), $.nI1(25, "i18n"), $.DNE(26, ts, 2, 1, "span", 9), $.EFF(27, "\n    "), $.k0s(), $.EFF(28, "\n\n    "), $.j41(29, "bit-toggle", 8), $.EFF(30), $.nI1(31, "i18n"), $.DNE(32, es, 2, 1, "span", 9), $.EFF(33, "\n    "), $.k0s(), $.EFF(34, "\n\n    "), $.j41(35, "bit-toggle", 8), $.EFF(36), $.nI1(37, "i18n"), $.DNE(38, ns, 2, 1, "span", 9), $.EFF(39, "\n    "), $.k0s(), $.EFF(40, "\n  "), $.k0s(), $.EFF(41, "\n"), $.k0s(), $.EFF(42, "\n"), $.DNE(43, is, 9, 6, "ng-container", 10), $.EFF(44, "\n"), $.DNE(45, Us, 6, 2, "ng-container", 10), $.EFF(46, "\n"), $.DNE(47, Cs, 0, 0, "ng-template", null, 0, $.C5r), $.EFF(49, "\n")
					}
					2 & t && ($.R7$(2), $.Y8G("formControl", e.searchControl)("placeholder", $.bMT(3, 20, "searchMembers")), $.R7$(3), $.Y8G("disabled", !e.firstLoaded), $.R7$(3), $.SpI("\n    ", $.bMT(9, 22, "inviteMember"), "\n  "), $.R7$(6), $.Y8G("selected", e.status), $.BMQ("aria-label", $.bMT(15, 24, "memberStatusFilter")), $.R7$(3), $.Y8G("value", null), $.R7$(), $.SpI("\n      ", $.bMT(19, 26, "all"), "\n      "), $.R7$(2), $.Y8G("ngIf", e.dataSource.activeUserCount), $.R7$(3), $.Y8G("value", e.userStatusType.Invited), $.R7$(), $.SpI("\n      ", $.bMT(25, 28, "invited"), "\n      "), $.R7$(2), $.Y8G("ngIf", e.dataSource.invitedUserCount), $.R7$(3), $.Y8G("value", e.userStatusType.Accepted), $.R7$(), $.SpI("\n      ", $.bMT(31, 30, "needsConfirmation"), "\n      "), $.R7$(2), $.Y8G("ngIf", e.dataSource.acceptedUserCount), $.R7$(3), $.Y8G("value", e.userStatusType.Revoked), $.R7$(), $.SpI("\n      ", $.bMT(37, 32, "revoked"), "\n      "), $.R7$(2), $.Y8G("ngIf", e.dataSource.revokedUserCount), $.R7$(5), $.Y8G("ngIf", !e.firstLoaded), $.R7$(2), $.Y8G("ngIf", e.firstLoaded))
				},
				dependencies: [D.YU, D.bT, l.Zm, l.BC, l.vS, l.l_, x.C, ge.f, Xi.p, z.n, A.Q, Ee.G, X.P, L.s, W.o, Bi.Z, Vi.O, Oi.w, Ji.M, fe.Q, ve.Y, qi.O, Ie._, Ie.O, Ki.H, Li.a, Wi.S, _i.f, i.yg, i.E$, i.d6, i.Zr, D.Jj, it.$, Vt.b, sn.c],
				encapsulation: 2
			});
			const Ns = [{
				path: "",
				component: xs,
				canActivate: [(0, Yt.V)(U.pe)],
				data: {
					titleId: "members"
				}
			}];
			class Ps {}
			Ps.ɵfac = function(t) {
				return new(t || Ps)
			}, Ps.ɵmod = $.$C({
				type: Ps
			}), Ps.ɵinj = $.G2t({
				imports: [Pt.iI.forChild(Ns), Pt.iI]
			});
			class Ys {}
			Ys.ɵfac = function(t) {
				return new(t || Ys)
			}, Ys.ɵmod = $.$C({
				type: Ys
			}), Ys.ɵinj = $.G2t({
				imports: [a.R, r.T, Ps, Nt, o.Rz, i.E9, s.k]
			})
		}
	}
]);
//# sourceMappingURL=331.d84ee91694cb3518c3c8.js.map