"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[64], {
		40064: (n, i, t) => {
			t.r(i), t.d(i, {
				OrganizationSettingsModule: () => Jn
			});
			var e = t(25065),
				o = t(22976),
				a = t(37812),
				r = t(56111),
				s = t(89459),
				l = t(3204),
				c = t(67553),
				p = t(82468),
				F = t(1601),
				u = t(77259),
				d = t(95661),
				g = t(51757),
				m = t(66046),
				b = t(88565),
				h = t(44500),
				f = t(33338),
				E = t(93695),
				I = t(36790),
				y = t(14803),
				v = t(9477);
			var k = t(56953);
			class R {}
			var S = t(78781),
				w = t(22848),
				T = t(50342),
				$ = t(84431),
				j = t(71901),
				z = t(50700),
				A = t(37115),
				M = t(11224),
				G = t(21274),
				D = t(69855),
				C = t(52981),
				N = t(3892),
				x = t(26657),
				K = t(45154),
				B = t(57144),
				V = t(56898),
				U = t(50352),
				X = t(10672),
				O = t(90246),
				Y = t(86226),
				L = t(97553),
				P = t(43759),
				J = t(59032),
				q = t(58806),
				H = t(20464),
				W = t(46131),
				_ = t(88016),
				Q = function(n, i, t, e) {
					return new(t || (t = Promise))((function(o, a) {
						function r(n) {
							try {
								l(e.next(n))
							} catch (i) {
								a(i)
							}
						}

						function s(n) {
							try {
								l(e.throw(n))
							} catch (i) {
								a(i)
							}
						}

						function l(n) {
							var i;
							n.done ? o(n.value) : (i = n.value, i instanceof t ? i : new t((function(n) {
								n(i)
							}))).then(r, s)
						}
						l((e = e.apply(n, i || [])).next())
					}))
				};
			const Z = ["apiKeyTemplate"],
				nn = ["rotateApiKeyTemplate"];

			function tn(n, i) {
				1 & n && (r.j41(0, "div"), r.EFF(1, "\n    "), r.nrm(2, "i", 6), r.nI1(3, "i18n"), r.EFF(4, "\n    "), r.j41(5, "span", 7), r.EFF(6), r.nI1(7, "i18n"), r.k0s(), r.EFF(8, "\n  "), r.k0s()), 2 & n && (r.R7$(2), r.FS9("title", r.bMT(3, 2, "loading")), r.R7$(4), r.JRh(r.bMT(7, 4, "loading")))
			}

			function en(n, i) {
				if (1 & n && (r.j41(0, "form", 8), r.EFF(1, "\n    "), r.j41(2, "div", 9), r.EFF(3, "\n      "), r.j41(4, "div"), r.EFF(5, "\n        "), r.j41(6, "bit-form-field"), r.EFF(7, "\n          "), r.j41(8, "bit-label"), r.EFF(9), r.nI1(10, "i18n"), r.k0s(), r.EFF(11, "\n          "), r.nrm(12, "input", 10), r.EFF(13, "\n        "), r.k0s(), r.EFF(14, "\n        "), r.j41(15, "bit-form-field"), r.EFF(16, "\n          "), r.j41(17, "bit-label"), r.EFF(18), r.nI1(19, "i18n"), r.k0s(), r.EFF(20, "\n          "), r.nrm(21, "input", 11), r.EFF(22, "\n        "), r.k0s(), r.EFF(23, "\n      "), r.k0s(), r.EFF(24, "\n      "), r.j41(25, "div"), r.EFF(26, "\n        "), r.nrm(27, "bit-avatar", 12), r.EFF(28, "\n        "), r.j41(29, "app-account-fingerprint", 13), r.nI1(30, "i18n"), r.EFF(31, "\n        "), r.k0s(), r.EFF(32, "\n      "), r.k0s(), r.EFF(33, "\n    "), r.k0s(), r.EFF(34, "\n    "), r.j41(35, "button", 14), r.EFF(36), r.nI1(37, "i18n"), r.k0s(), r.EFF(38, "\n  "), r.k0s()), 2 & n) {
					const n = r.XpG();
					r.Y8G("bitSubmit", n.submit)("formGroup", n.formGroup), r.R7$(9), r.JRh(r.bMT(10, 10, "organizationName")), r.R7$(9), r.JRh(r.bMT(19, 12, "email")), r.R7$(9), r.Y8G("text", n.org.name)("id", n.org.id), r.R7$(2), r.FS9("fingerprintLabel", r.bMT(30, 14, "yourOrganizationsFingerprint")), r.Y8G("fingerprintMaterial", n.organizationId)("publicKeyBuffer", n.publicKeyBuffer), r.R7$(7), r.SpI("\n      ", r.bMT(37, 16, "save"), "\n    ")
				}
			}

			function on(n, i) {
				if (1 & n) {
					const n = r.RV6();
					r.qex(0), r.EFF(1, "\n    "), r.j41(2, "h1", 15), r.EFF(3), r.nI1(4, "i18n"), r.k0s(), r.EFF(5, "\n    "), r.j41(6, "p", 16), r.EFF(7), r.nI1(8, "i18n"), r.j41(9, "a", 17), r.EFF(10), r.nI1(11, "i18n"), r.k0s(), r.EFF(12, "\n    "), r.k0s(), r.EFF(13, "\n    "), r.j41(14, "button", 18), r.bIt("click", (function() {
						r.eBV(n);
						const i = r.XpG();
						return r.Njj(i.viewApiKey())
					})), r.EFF(15), r.nI1(16, "i18n"), r.k0s(), r.EFF(17, "\n    "), r.j41(18, "button", 18), r.bIt("click", (function() {
						r.eBV(n);
						const i = r.XpG();
						return r.Njj(i.rotateApiKey())
					})), r.EFF(19), r.nI1(20, "i18n"), r.k0s(), r.EFF(21, "\n  "), r.bVm()
				}
				2 & n && (r.R7$(3), r.JRh(r.bMT(4, 5, "apiKey")), r.R7$(4), r.SpI("\n      ", r.bMT(8, 7, "apiKeyDesc"), "\n      "), r.R7$(3), r.SpI("\n        ", r.bMT(11, 9, "learnMoreAboutApi"), "\n      "), r.R7$(5), r.SpI("\n      ", r.bMT(16, 11, "viewApiKey"), "\n    "), r.R7$(4), r.SpI("\n      ", r.bMT(20, 13, "rotateApiKey"), "\n    "))
			}

			function an(n, i) {
				if (1 & n && (r.j41(0, "form", 8), r.EFF(1, "\n    "), r.j41(2, "h1", 15), r.EFF(3), r.nI1(4, "i18n"), r.k0s(), r.EFF(5, "\n    "), r.j41(6, "p", 16), r.EFF(7), r.nI1(8, "i18n"), r.k0s(), r.EFF(9, "\n    "), r.j41(10, "bit-form-control"), r.EFF(11, "\n      "), r.j41(12, "bit-label"), r.EFF(13), r.nI1(14, "i18n"), r.k0s(), r.EFF(15, "\n      "), r.nrm(16, "input", 19), r.EFF(17, "\n    "), r.k0s(), r.EFF(18, "\n    "), r.j41(19, "bit-form-control"), r.EFF(20, "\n      "), r.j41(21, "bit-label"), r.EFF(22), r.nI1(23, "i18n"), r.k0s(), r.EFF(24, "\n      "), r.nrm(25, "input", 20), r.EFF(26, "\n    "), r.k0s(), r.EFF(27, "\n    "), r.j41(28, "bit-form-control"), r.EFF(29, "\n      "), r.j41(30, "bit-label"), r.EFF(31), r.nI1(32, "i18n"), r.k0s(), r.EFF(33, "\n      "), r.nrm(34, "input", 21), r.EFF(35, "\n    "), r.k0s(), r.EFF(36, "\n    "), r.j41(37, "button", 22), r.EFF(38), r.nI1(39, "i18n"), r.k0s(), r.EFF(40, "\n  "), r.k0s()), 2 & n) {
					const n = r.XpG();
					r.Y8G("bitSubmit", n.submitCollectionManagement)("formGroup", n.collectionManagementFormGroup), r.R7$(3), r.JRh(r.bMT(4, 8, "collectionManagement")), r.R7$(4), r.JRh(r.bMT(8, 10, "collectionManagementDesc")), r.R7$(6), r.JRh(r.bMT(14, 12, "allowAdminAccessToAllCollectionItemsDesc")), r.R7$(9), r.JRh(r.bMT(23, 14, "limitCollectionCreationDesc")), r.R7$(9), r.JRh(r.bMT(32, 16, "limitCollectionDeletionDesc")), r.R7$(7), r.SpI("\n      ", r.bMT(39, 18, "save"), "\n    ")
				}
			}

			function rn(n, i) {}

			function sn(n, i) {}
			class ln {
				constructor(n, i, t, e, o, a, r, s, l, c, p, F) {
					this.modalService = n, this.i18nService = i, this.route = t, this.platformUtilsService = e, this.keyService = o, this.router = a, this.organizationService = r, this.organizationApiService = s, this.dialogService = l, this.formBuilder = c, this.toastService = p, this.configService = F, this.selfHosted = !1, this.canEditSubscription = !0, this.loading = !0, this.canUseApi = !1, this.formGroup = this.formBuilder.group({
						orgName: this.formBuilder.control({
							value: "",
							disabled: !0
						}, {
							validators: [g.k0.required, g.k0.maxLength(50)],
							updateOn: "change"
						}),
						billingEmail: this.formBuilder.control({
							value: "",
							disabled: !0
						}, {
							validators: [g.k0.required, g.k0.email, g.k0.maxLength(256)]
						})
					}), this.collectionManagementFormGroup = this.formBuilder.group({
						limitCollectionCreation: this.formBuilder.control({
							value: !1,
							disabled: !1
						}),
						limitCollectionDeletion: this.formBuilder.control({
							value: !1,
							disabled: !1
						}),
						allowAdminAccessToAllCollectionItems: this.formBuilder.control({
							value: !1,
							disabled: !1
						})
					}), this.destroy$ = new m.B, this.submit = () => Q(this, void 0, void 0, (function*() {
						if (this.formGroup.markAllAsTouched(), this.formGroup.invalid) return;
						const n = new R;
						if (n.name = this.formGroup.get("orgName").disabled ? this.org.name : this.formGroup.value.orgName, n.billingEmail = this.formGroup.get("billingEmail").disabled ? this.org.billingEmail : this.formGroup.value.billingEmail, !this.org.hasPublicAndPrivateKeys) {
							const i = yield this.keyService.getOrgKey(this.organizationId), t = yield this.keyService.makeKeyPair(i);
							n.keys = new k.B(t[0], t[1].encryptedString)
						}
						yield this.organizationApiService.save(this.organizationId, n), this.toastService.showToast({
							variant: "success",
							title: null,
							message: this.i18nService.t("organizationUpdated")
						})
					})), this.submitCollectionManagement = () => Q(this, void 0, void 0, (function*() {})), this.purgeVault = () => Q(this, void 0, void 0, (function*() {
						const n = $.d.open(this.dialogService, {
							data: {
								organizationId: this.organizationId
							}
						});
						yield(0, b.s)(n.closed)
					}))
				}
				ngOnInit() {
					return Q(this, void 0, void 0, (function*() {
						this.selfHosted = !1, this.route.params.pipe((0, h.n)((n => this.organizationService.get$(n.organizationId))), (0, h.n)((n => (0, f.z)([(0, E.of)(n), (0, I.H)(this.organizationApiService.get(n.id)), (0, I.H)(this.organizationApiService.getKeys(n.id))]))), (0, y.Q)(this.destroy$)).subscribe((([n, i, t]) => {
							this.organizationId = n.id, this.canEditSubscription = n.canEditSubscription, this.canUseApi = n.useApi, this.selfHosted || (this.formGroup.get("orgName").enable(), this.canEditSubscription && this.formGroup.get("billingEmail").enable()), this.org = i, this.publicKeyBuffer = S.A.fromB64ToArray(null == t ? void 0 : t.publicKey), this.formGroup.patchValue({
								orgName: this.org.name,
								billingEmail: this.org.billingEmail
							}), this.collectionManagementFormGroup.patchValue({
								limitCollectionCreation: this.org.limitCollectionCreation,
								limitCollectionDeletion: this.org.limitCollectionDeletion,
								allowAdminAccessToAllCollectionItems: this.org.allowAdminAccessToAllCollectionItems
							}), this.loading = !1
						}))
					}))
				}
				ngOnDestroy() {
					this.destroy$.next(), this.destroy$.complete()
				}
				deleteOrganization() {
					return Q(this, void 0, void 0, (function*() {
						const n = (0, j.f$)(this.dialogService, {
							data: {
								organizationId: this.organizationId,
								requestType: "RegularDelete"
							}
						});
						(yield(0, b.s)(n.closed)) === j.ay.Deleted && this.router.navigate(["/"])
					}))
				}
				viewApiKey() {
					return Q(this, void 0, void 0, (function*() {
						yield T.V.open(this.dialogService, {
							data: {
								keyType: "organization",
								entityId: this.organizationId,
								postKey: this.organizationApiService.getOrCreateApiKey.bind(this.organizationApiService),
								scope: "api.organization",
								grantType: "client_credentials",
								apiKeyTitle: "apiKey",
								apiKeyWarning: "apiKeyWarning",
								apiKeyDescription: "apiKeyDesc"
							}
						})
					}))
				}
				rotateApiKey() {
					return Q(this, void 0, void 0, (function*() {
						yield T.V.open(this.dialogService, {
							data: {
								keyType: "organization",
								isRotation: !0,
								entityId: this.organizationId,
								postKey: this.organizationApiService.rotateApiKey.bind(this.organizationApiService),
								scope: "api.organization",
								grantType: "client_credentials",
								apiKeyTitle: "apiKey",
								apiKeyWarning: "apiKeyWarning",
								apiKeyDescription: "apiKeyRotateDesc"
							}
						})
					}))
				}
			}
			ln.ɵfac = function(n) {
				return new(n || ln)(r.rXU(v.B), r.rXU(z.W), r.rXU(s.nX), r.rXU(A.y), r.rXU(w.Lu), r.rXU(s.Ix), r.rXU(c.PV), r.rXU(M.X), r.rXU(G.o), r.rXU(g.ok), r.rXU(D.f), r.rXU(F.w))
			}, ln.ɵcmp = r.VBU({
				type: ln,
				selectors: [
					["app-org-account"]
				],
				viewQuery: function(n, i) {
					if (1 & n && (r.GBs(Z, 7, r.c1b), r.GBs(nn, 7, r.c1b)), 2 & n) {
						let n;
						r.mGM(n = r.lsd()) && (i.apiKeyModalRef = n.first), r.mGM(n = r.lsd()) && (i.rotateApiKeyModalRef = n.first)
					}
				},
				decls: 30,
				vars: 11,
				consts: [
					["apiKeyTemplate", ""],
					["rotateApiKeyTemplate", ""],
					[4, "ngIf"],
					[3, "bitSubmit", "formGroup", 4, "ngIf"],
					["type", "button", "bitButton", "", "buttonType", "danger", 3, "click"],
					["type", "button", "bitButton", "", "buttonType", "danger", 3, "bitAction"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[3, "bitSubmit", "formGroup"],
					[1, "tw-grid", "tw-grid-cols-2", "tw-gap-5"],
					["bitInput", "", "id", "orgName", "type", "text", "formControlName", "orgName"],
					["bitInput", "", "id", "billingEmail", "formControlName", "billingEmail", "type", "email"],
					["size", "large", 3, "text", "id"],
					[3, "fingerprintMaterial", "publicKeyBuffer", "fingerprintLabel"],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"],
					["bitTypography", "h1", 1, "tw-mt-16", "tw-pb-2.5"],
					["bitTypography", "body1"],
					["bitLink", "", "href", "https://docs.bitwarden.com", "target", "_blank", "rel", "noreferrer"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "allowAdminAccessToAllCollectionItems"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "limitCollectionCreation"],
					["type", "checkbox", "bitCheckbox", "", "formControlName", "limitCollectionDeletion"],
					["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", "id", "collectionManagementSubmitButton"]
				],
				template: function(n, i) {
					if (1 & n) {
						const n = r.RV6();
						r.nrm(0, "app-header"), r.EFF(1, "\n"), r.j41(2, "bit-container"), r.EFF(3, "\n  "), r.DNE(4, tn, 9, 6, "div", 2), r.EFF(5, "\n  "), r.DNE(6, en, 39, 18, "form", 3), r.EFF(7, "\n  "), r.DNE(8, on, 22, 15, "ng-container", 2), r.EFF(9, "\n  "), r.DNE(10, an, 41, 20, "form", 3), r.EFF(11, "\n\n  "), r.j41(12, "app-danger-zone"), r.EFF(13, "\n    "), r.j41(14, "button", 4), r.bIt("click", (function() {
							return r.eBV(n), r.Njj(i.deleteOrganization())
						})), r.EFF(15), r.nI1(16, "i18n"), r.k0s(), r.EFF(17, "\n    "), r.j41(18, "button", 5), r.EFF(19), r.nI1(20, "i18n"), r.k0s(), r.EFF(21, "\n  "), r.k0s(), r.EFF(22, "\n\n  "), r.DNE(23, rn, 0, 0, "ng-template", null, 0, r.C5r), r.EFF(25, "\n  "), r.DNE(26, sn, 0, 0, "ng-template", null, 1, r.C5r), r.EFF(28, "\n"), r.k0s(), r.EFF(29, "\n")
					}
					2 & n && (r.R7$(4), r.Y8G("ngIf", i.loading), r.R7$(2), r.Y8G("ngIf", i.org && !i.loading), r.R7$(2), r.Y8G("ngIf", i.canUseApi), r.R7$(2), r.Y8G("ngIf", i.org && !i.loading), r.R7$(5), r.SpI("\n      ", r.bMT(16, 7, "deleteOrganization"), "\n    "), r.R7$(3), r.Y8G("bitAction", i.purgeVault), r.R7$(), r.SpI("\n      ", r.bMT(20, 9, "purgeVault"), "\n    "))
				},
				dependencies: [C.bT, g.qT, g.me, g.Zm, g.BC, g.cb, g.j4, g.JD, N.p, x.$, K.L, B.f, V.Q, U.P, X.H, O.f, Y.m, L.J, P.h, J.L, q.r, H.f, W.t, o.l, _.$],
				encapsulation: 2
			});
			var cn = t(73276),
				pn = t(36359),
				Fn = t(14928),
				un = t(71804),
				dn = t(83516),
				gn = t(33818),
				mn = t(43600),
				bn = t(6804),
				hn = t(12012),
				fn = t(18499),
				En = t(58329),
				In = t(35500),
				yn = t(30958),
				vn = t(44432),
				kn = t(88646),
				Rn = function(n, i, t, e) {
					return new(t || (t = Promise))((function(o, a) {
						function r(n) {
							try {
								l(e.next(n))
							} catch (i) {
								a(i)
							}
						}

						function s(n) {
							try {
								l(e.throw(n))
							} catch (i) {
								a(i)
							}
						}

						function l(n) {
							var i;
							n.done ? o(n.value) : (i = n.value, i instanceof t ? i : new t((function(n) {
								n(i)
							}))).then(r, s)
						}
						l((e = e.apply(n, i || [])).next())
					}))
				};
			const Sn = n => ({
				"mt-5": n
			});

			function wn(n, i) {
				1 & n && r.nrm(0, "app-header")
			}

			function Tn(n, i) {
				1 & n && (r.j41(0, "h1"), r.EFF(1), r.nI1(2, "i18n"), r.k0s()), 2 & n && (r.R7$(), r.JRh(r.bMT(2, 1, "twoStepLogin")))
			}

			function $n(n, i) {
				1 & n && (r.j41(0, "h1"), r.EFF(1), r.nI1(2, "i18n"), r.k0s()), 2 & n && (r.R7$(), r.JRh(r.bMT(2, 1, "twoStepLoginEnforcement")))
			}

			function jn(n, i) {
				if (1 & n && (r.j41(0, "div", 11), r.EFF(1, "\n    "), r.DNE(2, Tn, 3, 3, "h1", 5), r.EFF(3, "\n    "), r.DNE(4, $n, 3, 3, "h1", 5), r.EFF(5, "\n  "), r.k0s()), 2 & n) {
					const n = r.XpG();
					r.R7$(2), r.Y8G("ngIf", !n.organizationId || !n.isEnterpriseOrg), r.R7$(2), r.Y8G("ngIf", n.organizationId && n.isEnterpriseOrg)
				}
			}

			function zn(n, i) {
				1 & n && (r.j41(0, "p"), r.EFF(1), r.nI1(2, "i18n"), r.k0s()), 2 & n && (r.R7$(), r.JRh(r.bMT(2, 1, "twoStepLoginDesc")))
			}

			function An(n, i) {
				1 & n && (r.qex(0), r.EFF(1), r.nI1(2, "i18n"), r.j41(3, "a", 13), r.EFF(4), r.nI1(5, "i18n"), r.k0s(), r.EFF(6, "\n        "), r.nrm(7, "br"), r.EFF(8), r.nI1(9, "i18n"), r.nrm(10, "br"), r.EFF(11, "\n        "), r.nrm(12, "br"), r.EFF(13, "\n        "), r.j41(14, "p"), r.EFF(15), r.nI1(16, "i18n"), r.k0s(), r.EFF(17, "\n      "), r.bVm()), 2 & n && (r.R7$(), r.SpI("\n        ", r.bMT(2, 4, "twoStepLoginEnterpriseDescStart"), "\n        "), r.R7$(3), r.SpI("", r.bMT(5, 6, "twoStepLoginPolicy"), "."), r.R7$(4), r.SpI("\n        ", r.bMT(9, 8, "twoStepLoginOrganizationDuoDesc"), "\n        "), r.R7$(7), r.JRh(r.bMT(16, 10, "twoStepLoginOrganizationSsoDesc")))
			}

			function Mn(n, i) {
				1 & n && (r.EFF(0), r.nI1(1, "i18n"), r.nrm(2, "br"), r.EFF(3), r.nI1(4, "i18n")), 2 & n && (r.SpI("\n        ", r.bMT(1, 2, "twoStepLoginTeamsDesc"), "\n        "), r.R7$(3), r.SpI("\n        ", r.bMT(4, 4, "twoStepLoginOrganizationDuoDesc"), "\n      "))
			}

			function Gn(n, i) {
				if (1 & n && (r.qex(0), r.EFF(1, "\n    "), r.j41(2, "p"), r.EFF(3, "\n      "), r.DNE(4, An, 18, 12, "ng-container", 12), r.EFF(5, "\n      "), r.DNE(6, Mn, 5, 6, "ng-template", null, 4, r.C5r), r.EFF(8, "\n    "), r.k0s(), r.EFF(9, "\n  "), r.bVm()), 2 & n) {
					const n = r.sdS(7),
						i = r.XpG();
					r.R7$(4), r.Y8G("ngIf", i.isEnterpriseOrg)("ngIfElse", n)
				}
			}

			function Dn(n, i) {
				if (1 & n) {
					const n = r.RV6();
					r.j41(0, "bit-callout", 14), r.EFF(1, "\n    "), r.j41(2, "p"), r.EFF(3), r.nI1(4, "i18n"), r.k0s(), r.EFF(5, "\n    "), r.j41(6, "button", 15), r.bIt("click", (function() {
						r.eBV(n);
						const i = r.XpG();
						return r.Njj(i.recoveryCode())
					})), r.EFF(7), r.nI1(8, "i18n"), r.k0s(), r.EFF(9, "\n  "), r.k0s()
				}
				2 & n && (r.R7$(3), r.JRh(r.bMT(4, 2, "twoStepLoginRecoveryWarning")), r.R7$(4), r.SpI("\n      ", r.bMT(8, 4, "viewRecoveryCode"), "\n    "))
			}

			function Cn(n, i) {
				1 & n && (r.j41(0, "small"), r.EFF(1, "\n      "), r.nrm(2, "i", 16), r.nI1(3, "i18n"), r.EFF(4, "\n      "), r.j41(5, "span", 17), r.EFF(6), r.nI1(7, "i18n"), r.k0s(), r.EFF(8, "\n    "), r.k0s()), 2 & n && (r.R7$(2), r.FS9("title", r.bMT(3, 2, "loading")), r.R7$(4), r.JRh(r.bMT(7, 4, "loading")))
			}

			function Nn(n, i) {
				1 & n && (r.j41(0, "bit-callout", 14), r.EFF(1), r.nI1(2, "i18n"), r.k0s()), 2 & n && (r.R7$(), r.SpI("\n    ", r.bMT(2, 1, "twoStepLoginPolicyUserWarning"), "\n  "))
			}

			function xn(n, i) {
				1 & n && (r.qex(0), r.EFF(1, "\n            "), r.nrm(2, "i", 26), r.nI1(3, "i18n"), r.EFF(4, "\n            "), r.j41(5, "span", 17), r.EFF(6), r.nI1(7, "i18n"), r.k0s(), r.EFF(8, "\n          "), r.bVm()), 2 & n && (r.R7$(2), r.FS9("title", r.bMT(3, 2, "enabled")), r.R7$(4), r.JRh(r.bMT(7, 4, "enabled")))
			}

			function Kn(n, i) {
				1 & n && r.nrm(0, "app-premium-badge")
			}

			function Bn(n, i) {
				if (1 & n) {
					const n = r.RV6();
					r.j41(0, "li", 18), r.EFF(1, "\n      "), r.j41(2, "div", 19), r.EFF(3, "\n        "), r.nrm(4, "auth-two-factor-icon", 20), r.EFF(5, "\n      "), r.k0s(), r.EFF(6, "\n      "), r.j41(7, "div", 21), r.EFF(8, "\n        "), r.j41(9, "h3", 22), r.EFF(10, "\n          "), r.j41(11, "div", 23), r.EFF(12), r.k0s(), r.EFF(13, "\n          "), r.DNE(14, xn, 9, 6, "ng-container", 5), r.EFF(15, "\n          "), r.DNE(16, Kn, 1, 0, "app-premium-badge", 5), r.EFF(17, "\n        "), r.k0s(), r.EFF(18), r.k0s(), r.EFF(19, "\n      "), r.j41(20, "div", 24), r.EFF(21, "\n        "), r.j41(22, "button", 25), r.nI1(23, "async"), r.bIt("click", (function() {
						const i = r.eBV(n).$implicit,
							t = r.XpG();
						return r.Njj(t.manage(i.type))
					})), r.EFF(24), r.nI1(25, "i18n"), r.k0s(), r.EFF(26, "\n      "), r.k0s(), r.EFF(27, "\n    "), r.k0s()
				}
				if (2 & n) {
					const n = i.$implicit,
						t = r.XpG();
					r.R7$(4), r.Y8G("provider", n.type)("name", n.name), r.R7$(7), r.Aen(n.enabled || n.premium ? "display:inline-block" : ""), r.R7$(), r.SpI("\n            ", n.name, "\n          "), r.R7$(2), r.Y8G("ngIf", n.enabled), r.R7$(2), r.Y8G("ngIf", n.premium), r.R7$(2), r.SpI("\n        ", n.description, "\n      "), r.R7$(4), r.Y8G("disabled", !r.bMT(23, 10, t.canAccessPremium$) && n.premium), r.R7$(2), r.SpI("\n          ", r.bMT(25, 12, "manage"), "\n        ")
				}
			}

			function Vn(n, i) {}

			function Un(n, i) {}

			function Xn(n, i) {}

			function On(n, i) {}
			class Yn extends mn.q {
				constructor(n, i, t, e, o, a, r, s, l) {
					super(n, i, t, e, o, s, l), this.route = a, this.organizationService = r, this.tabbedHeader = !1
				}
				ngOnInit() {
					const n = Object.create(null, {
						ngOnInit: {
							get: () => super.ngOnInit
						}
					});
					return Rn(this, void 0, void 0, (function*() {
						this.route.params.pipe((0, cn.H)((n => this.organizationService.get$(n.organizationId).pipe((0, l.T)((i => ({
							params: n,
							organization: i
						})))))), (0, pn.M)((n => Rn(this, void 0, void 0, (function*() {
							this.organizationId = n.params.organizationId, this.organization = n.organization
						})))), (0, cn.H)((() => Rn(this, void 0, void 0, (function*() {
							return yield n.ngOnInit.call(this)
						})))), (0, y.Q)(this.destroy$)).subscribe()
					}))
				}
				manage(n) {
					return Rn(this, void 0, void 0, (function*() {
						var i;
						switch (null === (i = this.twoFactorSetupSubscription) || void 0 === i || i.unsubscribe(), n) {
							case un.R.OrganizationDuo: {
								const i = bn.S.open(this.dialogService, {
										data: {
											type: n,
											organizationId: this.organizationId
										}
									}),
									t = yield(0, b.s)(i.closed);
								if (!t) return;
								const e = gn.U.open(this.dialogService, {
									data: {
										authResponse: t,
										organizationId: this.organizationId
									}
								});
								this.twoFactorSetupSubscription = e.componentInstance.onChangeStatus.pipe((0, Fn.$)(), (0, y.Q)(this.destroy$)).subscribe((n => {
									e.close(), this.updateStatus(n, un.R.OrganizationDuo)
								}));
								break
							}
						}
					}))
				}
				getTwoFactorProviders() {
					return this.apiService.getTwoFactorOrganizationProviders(this.organizationId)
				}
				filterProvider(n) {
					return n !== un.R.OrganizationDuo
				}
			}
			Yn.ɵfac = function(n) {
				return new(n || Yn)(r.rXU(G.o), r.rXU(hn.G), r.rXU(v.B), r.rXU(dn.U), r.rXU(fn.m), r.rXU(s.nX), r.rXU(c.PV), r.rXU(En.Q), r.rXU(In.Di))
			}, Yn.ɵcmp = r.VBU({
				type: Yn,
				selectors: [
					["app-two-factor-setup"]
				],
				features: [r.Vt3],
				decls: 38,
				vars: 14,
				consts: [
					["duoTemplate", ""],
					["emailTemplate", ""],
					["yubikeyTemplate", ""],
					["webAuthnTemplate", ""],
					["teamsDescription", ""],
					[4, "ngIf"],
					["class", "tabbed-header", 4, "ngIf"],
					["type", "warning", 4, "ngIf"],
					[3, "ngClass"],
					[1, "list-group", "list-group-2fa"],
					["class", "list-group-item d-flex align-items-center", 4, "ngFor", "ngForOf"],
					[1, "tabbed-header"],
					[4, "ngIf", "ngIfElse"],
					["bitLink", "", "routerLink", "../policies"],
					["type", "warning"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"],
					["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "bwi-fw", "text-muted", 3, "title"],
					[1, "tw-sr-only"],
					[1, "list-group-item", "d-flex", "align-items-center"],
					[1, "logo-2fa", "d-flex", "justify-content-center"],
					[3, "provider", "name"],
					[1, "mx-4"],
					[1, "mb-0"],
					[1, "font-weight-semibold", "tw-text-base"],
					[1, "ml-auto"],
					["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click", "disabled"],
					["aria-hidden", "true", 1, "bwi", "bwi-check", "text-success", "bwi-fw", 3, "title"]
				],
				template: function(n, i) {
					1 & n && (r.DNE(0, wn, 1, 0, "app-header", 5), r.EFF(1, "\n\n"), r.j41(2, "bit-container"), r.EFF(3, "\n  "), r.DNE(4, jn, 6, 2, "div", 6), r.EFF(5, "\n\n  "), r.DNE(6, zn, 3, 3, "p", 5), r.EFF(7, "\n  "), r.DNE(8, Gn, 10, 2, "ng-container", 5), r.EFF(9, "\n  "), r.DNE(10, Dn, 10, 6, "bit-callout", 7), r.EFF(11, "\n  "), r.j41(12, "h2", 8), r.EFF(13), r.nI1(14, "i18n"), r.DNE(15, Cn, 9, 6, "small", 5), r.EFF(16, "\n  "), r.k0s(), r.EFF(17, "\n  "), r.DNE(18, Nn, 3, 3, "bit-callout", 7), r.EFF(19, "\n  "), r.j41(20, "ul", 9), r.EFF(21, "\n    "), r.DNE(22, Bn, 28, 14, "li", 10), r.EFF(23, "\n  "), r.k0s(), r.EFF(24, "\n"), r.k0s(), r.EFF(25, "\n\n"), r.DNE(26, Vn, 0, 0, "ng-template", null, 0, r.C5r), r.EFF(28, "\n"), r.DNE(29, Un, 0, 0, "ng-template", null, 1, r.C5r), r.EFF(31, "\n"), r.DNE(32, Xn, 0, 0, "ng-template", null, 2, r.C5r), r.EFF(34, "\n"), r.DNE(35, On, 0, 0, "ng-template", null, 3, r.C5r), r.EFF(37, "\n")), 2 & n && (r.Y8G("ngIf", null != i.organizationId), r.R7$(4), r.Y8G("ngIf", null == i.organizationId), r.R7$(2), r.Y8G("ngIf", !i.organizationId), r.R7$(2), r.Y8G("ngIf", i.organizationId), r.R7$(2), r.Y8G("ngIf", !i.organizationId), r.R7$(2), r.Y8G("ngClass", r.eq3(12, Sn, !i.organizationId)), r.R7$(), r.SpI("\n    ", r.bMT(14, 10, "providers"), "\n    "), r.R7$(2), r.Y8G("ngIf", i.loading), r.R7$(3), r.Y8G("ngIf", i.showPolicyWarning), r.R7$(4), r.Y8G("ngForOf", i.providers))
				},
				dependencies: [C.YU, C.Sq, C.bT, s.Wk, yn.U, V.Q, vn.G, X.H, J.L, kn.a, H.f, C.Jj, _.$],
				encapsulation: 2
			});
			const Ln = [{
				path: "",
				canActivate: [(0, u.V)(c.Dl)],
				children: [{
					path: "",
					pathMatch: "full",
					canActivate: [(0, d.r)((function(n) {
						if (n.isOwner) return "account";
						if (n.canManagePolicies) return "policies";
						if (n.canAccessImport) return ["tools", "import"];
						if (n.canManageSso) return "sso";
						if (n.canManageScim) return "scim";
						if (n.canManageDeviceApprovals) return "device-approvals";
						return
					}))],
					children: []
				}, {
					path: "account",
					component: ln,
					canActivate: [(0, u.V)((n => n.isOwner))],
					data: {
						titleId: "organizationInfo"
					}
				}, {
					path: "two-factor",
					component: Yn,
					canActivate: [(0, u.V)((n => n.use2fa && n.isOwner))],
					data: {
						titleId: "twoStepLogin"
					}
				}, {
					path: "policies",
					component: a.sU,
					canActivate: [(0, u.V)((n => n.canManagePolicies))],
					data: {
						titleId: "policies"
					}
				}, {
					path: "tools",
					children: [{
						path: "import",
						loadComponent: () => Promise.all([t.e(173), t.e(807), t.e(506)]).then(t.bind(t, 79506)).then((n => n.OrgImportComponent)),
						canActivate: [(0, u.V)((n => n.canAccessImport))],
						data: {
							titleId: "importData"
						}
					}, {
						path: "export",
						loadComponent: () => Promise.all([t.e(573), t.e(619)]).then(t.bind(t, 28619)).then((n => n.OrganizationVaultExportComponent)),
						canMatch: [() => (0, r.WQX)(F.w).getFeatureFlag$(p.T.PM11360RemoveProviderExportPermission).pipe((0, l.T)((n => !0 === n)))],
						canActivate: [(0, u.V)((n => n.canAccessExport(!0)))],
						data: {
							titleId: "exportVault"
						}
					}, {
						path: "export",
						loadComponent: () => Promise.all([t.e(573), t.e(619)]).then(t.bind(t, 28619)).then((n => n.OrganizationVaultExportComponent)),
						canActivate: [(0, u.V)((n => n.canAccessExport(!1)))],
						data: {
							titleId: "exportVault"
						}
					}]
				}]
			}];
			class Pn {}
			Pn.ɵfac = function(n) {
				return new(n || Pn)
			}, Pn.ɵmod = r.$C({
				type: Pn
			}), Pn.ɵinj = r.G2t({
				imports: [s.iI.forChild(Ln), s.iI]
			});
			class Jn {}
			Jn.ɵfac = function(n) {
				return new(n || Jn)
			}, Jn.ɵmod = r.$C({
				type: Jn
			}), Jn.ɵinj = r.G2t({
				imports: [e.G, e.T, a.Hu, Pn, o.l]
			})
		}
	}
]);
//# sourceMappingURL=64.17e0ba738bb50077c946.js.map