"use strict";
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[573], {
		86573: (t, e, i) => {
			i.d(e, {
				i: () => Ft
			});
			var o, n = i(52981),
				r = i(56111),
				s = i(51757),
				a = i(14803),
				l = i(66046),
				c = i(83892),
				d = i(12610),
				p = i(3204),
				u = i(33338),
				h = i(44451),
				F = i(58625),
				f = i(49355),
				g = i(84965),
				m = i(52759),
				b = i(15623),
				y = i(78781),
				E = i(45154),
				v = i(26411),
				w = i(37579),
				x = i(29029),
				I = i(22191),
				S = i(8433),
				P = i(80351),
				T = i(8297),
				z = i(13894),
				k = i(9719);
			! function(t) {
				t[t.AccountEncrypted = 0] = "AccountEncrypted", t[t.FileEncrypted = 1] = "FileEncrypted"
			}(o || (o = {}));
			var $ = i(72245),
				j = i(67553),
				R = i(35500),
				D = i(88016),
				C = i(44432),
				G = function(t, e, i, o) {
					return new(i || (i = Promise))((function(n, r) {
						function s(t) {
							try {
								l(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								l(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function l(t) {
							var e;
							t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
								t(e)
							}))).then(s, a)
						}
						l((o = o.apply(t, e || [])).next())
					}))
				};

			function V(t, e) {
				if (1 & t && (r.qex(0), r.EFF(1, "\n  "), r.j41(2, "bit-callout", 1), r.nI1(3, "i18n"), r.EFF(4), r.nI1(5, "i18n"), r.k0s(), r.EFF(6, "\n"), r.bVm()), 2 & t) {
					const t = r.XpG();
					r.R7$(2), r.FS9("title", r.bMT(3, 2, t.scopeConfig.title)), r.R7$(2), r.SpI("\n    ", r.i5U(5, 4, t.scopeConfig.description, t.scopeConfig.scopeIdentifier), "\n  ")
				}
			}
			class B {
				get organizationId() {
					return this._organizationId
				}
				set organizationId(t) {
					this._organizationId = t, this.getScopeMessage(this._organizationId)
				}
				constructor(t, e) {
					this.organizationService = t, this.accountService = e, this.show = !1
				}
				ngOnInit() {
					return G(this, void 0, void 0, (function*() {
						(yield this.organizationService.hasOrganizations()) && (yield this.getScopeMessage(this.organizationId), this.show = !0)
					}))
				}
				getScopeMessage(t) {
					return G(this, void 0, void 0, (function*() {
						this.scopeConfig = null != t ? {
							title: "exportingOrganizationVaultTitle",
							description: "exportingOrganizationVaultDesc",
							scopeIdentifier: (yield this.organizationService.get(t)).name
						} : {
							title: "exportingPersonalVaultTitle",
							description: "exportingIndividualVaultDescription",
							scopeIdentifier: yield(0, $._)(this.accountService.activeAccount$.pipe((0, p.T)((t => null == t ? void 0 : t.email))))
						}
					}))
				}
			}
			B.ɵfac = function(t) {
				return new(t || B)(r.rXU(j.PV), r.rXU(R.Di))
			}, B.ɵcmp = r.VBU({
				type: B,
				selectors: [
					["tools-export-scope-callout"]
				],
				inputs: {
					organizationId: "organizationId"
				},
				standalone: !0,
				features: [r.aNF],
				decls: 2,
				vars: 1,
				consts: [
					[4, "ngIf"],
					["type", "info", 3, "title"]
				],
				template: function(t, e) {
					1 & t && (r.DNE(0, V, 7, 7, "ng-container", 0), r.EFF(1, "\n")), 2 & t && r.Y8G("ngIf", e.show)
				},
				dependencies: [n.MD, n.bT, F.p, D.$, P.j, C.G],
				encapsulation: 2
			});
			var M = i(50700),
				_ = i(69855),
				N = i(21274),
				O = i(81582),
				X = i(37115),
				U = i(18499),
				A = i(56962),
				Y = i(53127),
				J = i(93103),
				q = i(89946),
				L = i(86226),
				Q = i(99917),
				W = i(97553),
				H = i(43759),
				K = i(76356),
				Z = i(69896),
				tt = i(36288),
				et = i(33886),
				it = i(68923),
				ot = i(24374),
				nt = i(17721),
				rt = function(t, e, i, o) {
					return new(i || (i = Promise))((function(n, r) {
						function s(t) {
							try {
								l(o.next(t))
							} catch (e) {
								r(e)
							}
						}

						function a(t) {
							try {
								l(o.throw(t))
							} catch (e) {
								r(e)
							}
						}

						function l(t) {
							var e;
							t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
								t(e)
							}))).then(s, a)
						}
						l((o = o.apply(t, e || [])).next())
					}))
				};

			function st(t, e) {
				1 & t && (r.j41(0, "bit-callout", 6), r.nI1(1, "i18n"), r.EFF(2), r.nI1(3, "i18n"), r.k0s()), 2 & t && (r.FS9("title", r.bMT(1, 2, "vaultExportDisabled")), r.R7$(2), r.SpI("\n  ", r.bMT(3, 4, "personalVaultExportPolicyInEffect"), "\n"))
			}

			function at(t, e) {
				if (1 & t && r.nrm(0, "tools-export-scope-callout", 7), 2 & t) {
					const t = r.XpG();
					r.Y8G("organizationId", t.organizationId)
				}
			}

			function lt(t, e) {
				if (1 & t && r.nrm(0, "bit-option", 11), 2 & t) {
					const t = e.$implicit;
					r.Y8G("value", t.id)("label", t.name)
				}
			}

			function ct(t, e) {
				if (1 & t && (r.j41(0, "bit-form-field"), r.EFF(1, "\n      "), r.j41(2, "bit-label"), r.EFF(3), r.nI1(4, "i18n"), r.k0s(), r.EFF(5, "\n      "), r.j41(6, "bit-select", 8), r.EFF(7, "\n        "), r.nrm(8, "bit-option", 9), r.nI1(9, "i18n"), r.EFF(10, "\n        "), r.DNE(11, lt, 1, 2, "bit-option", 10), r.nI1(12, "async"), r.EFF(13, "\n      "), r.k0s(), r.EFF(14, "\n    "), r.k0s()), 2 & t) {
					const t = r.XpG(2);
					r.R7$(3), r.JRh(r.bMT(4, 3, "exportFrom")), r.R7$(5), r.Y8G("label", r.bMT(9, 5, "myVault")), r.R7$(3), r.Y8G("ngForOf", r.bMT(12, 7, t.organizations$))
				}
			}

			function dt(t, e) {
				if (1 & t && (r.qex(0), r.EFF(1, "\n    "), r.DNE(2, ct, 15, 9, "bit-form-field", 3), r.EFF(3, "\n  "), r.bVm()), 2 & t) {
					const t = e.ngIf;
					r.R7$(2), r.Y8G("ngIf", t.length > 0)
				}
			}

			function pt(t, e) {
				if (1 & t && r.nrm(0, "bit-option", 12), 2 & t) {
					const t = e.$implicit;
					r.Y8G("value", t.value)("label", t.name)
				}
			}

			function ut(t, e) {
				if (1 & t) {
					const t = r.RV6();
					r.qex(0), r.EFF(1, "\n      "), r.j41(2, "div", 16), r.EFF(3, "\n        "), r.j41(4, "bit-form-field"), r.EFF(5, "\n          "), r.j41(6, "bit-label"), r.EFF(7), r.nI1(8, "i18n"), r.k0s(), r.EFF(9, "\n          "), r.nrm(10, "input", 17), r.EFF(11, "\n          "), r.j41(12, "button", 18), r.mxI("toggledChange", (function(e) {
						r.eBV(t);
						const i = r.XpG(2);
						return r.DH7(i.showFilePassword, e) || (i.showFilePassword = e), r.Njj(e)
					})), r.k0s(), r.EFF(13, "\n          "), r.j41(14, "button", 19), r.bIt("click", (function() {
						r.eBV(t);
						const e = r.XpG(2);
						return r.Njj(e.generatePassword())
					})), r.k0s(), r.EFF(15, "\n          "), r.nrm(16, "button", 20), r.nI1(17, "i18n"), r.EFF(18, "\n          "), r.j41(19, "bit-hint"), r.EFF(20), r.nI1(21, "i18n"), r.k0s(), r.EFF(22, "\n        "), r.k0s(), r.EFF(23, "\n        "), r.j41(24, "tools-password-strength", 21), r.EFF(25, "\n        "), r.k0s(), r.EFF(26, "\n      "), r.k0s(), r.EFF(27, "\n      "), r.j41(28, "bit-form-field"), r.EFF(29, "\n        "), r.j41(30, "bit-label"), r.EFF(31), r.nI1(32, "i18n"), r.k0s(), r.EFF(33, "\n        "), r.nrm(34, "input", 22), r.EFF(35, "\n        "), r.j41(36, "button", 18), r.mxI("toggledChange", (function(e) {
						r.eBV(t);
						const i = r.XpG(2);
						return r.DH7(i.showFilePassword, e) || (i.showFilePassword = e), r.Njj(e)
					})), r.k0s(), r.EFF(37, "\n      "), r.k0s(), r.EFF(38, "\n    "), r.bVm()
				}
				if (2 & t) {
					const t = r.XpG(2);
					r.R7$(7), r.JRh(r.bMT(8, 10, "filePassword")), r.R7$(5), r.R50("toggled", t.showFilePassword), r.R7$(4), r.Y8G("disabled", !t.filePassword)("appCopyClick", t.filePassword)("valueLabel", r.bMT(17, 12, "password")), r.R7$(4), r.JRh(r.bMT(21, 14, "exportPasswordDescription")), r.R7$(4), r.Y8G("password", t.filePassword)("showText", !0), r.R7$(7), r.JRh(r.bMT(32, 16, "confirmFilePassword")), r.R7$(5), r.R50("toggled", t.showFilePassword)
				}
			}

			function ht(t, e) {
				if (1 & t && (r.qex(0), r.EFF(1, "\n    "), r.j41(2, "bit-radio-group", 13), r.EFF(3, "\n      "), r.j41(4, "bit-label"), r.EFF(5), r.nI1(6, "i18n"), r.k0s(), r.EFF(7, "\n\n      "), r.j41(8, "bit-radio-button", 14), r.EFF(9, "\n        "), r.j41(10, "bit-label"), r.EFF(11), r.nI1(12, "i18n"), r.k0s(), r.EFF(13, "\n        "), r.j41(14, "bit-hint"), r.EFF(15), r.nI1(16, "i18n"), r.k0s(), r.EFF(17, "\n      "), r.k0s(), r.EFF(18, "\n\n      "), r.j41(19, "bit-radio-button", 15), r.EFF(20, "\n        "), r.j41(21, "bit-label"), r.EFF(22), r.nI1(23, "i18n"), r.k0s(), r.EFF(24, "\n        "), r.j41(25, "bit-hint"), r.EFF(26), r.nI1(27, "i18n"), r.k0s(), r.EFF(28, "\n      "), r.k0s(), r.EFF(29, "\n    "), r.k0s(), r.EFF(30, "\n\n    "), r.DNE(31, ut, 39, 18, "ng-container", 3), r.EFF(32, "\n  "), r.bVm()), 2 & t) {
					const t = r.XpG();
					r.R7$(5), r.JRh(r.bMT(6, 8, "exportTypeHeading")), r.R7$(3), r.Y8G("value", t.encryptedExportType.AccountEncrypted), r.R7$(3), r.JRh(r.bMT(12, 10, "accountRestricted")), r.R7$(4), r.JRh(r.bMT(16, 12, "accountRestrictedOptionDescription")), r.R7$(4), r.Y8G("value", t.encryptedExportType.FileEncrypted), r.R7$(3), r.JRh(r.bMT(23, 14, "passwordProtected")), r.R7$(4), r.JRh(r.bMT(27, 16, "passwordProtectedOptionDescription")), r.R7$(5), r.Y8G("ngIf", t.fileEncryptionType == t.encryptedExportType.FileEncrypted)
				}
			}
			class Ft {
				get organizationId() {
					return this._organizationId
				}
				set organizationId(t) {
					this._organizationId = t, this.organizationService.get$(this._organizationId).pipe((0, a.Q)(this.destroy$)).subscribe((t => {
						this._organizationId = null == t ? void 0 : t.id
					}))
				}
				get disabledByPolicy() {
					return this._disabledByPolicy
				}
				constructor(t, e, i, n, a, c, d, p, u, h, F, f, g) {
					this.i18nService = t, this.toastService = e, this.exportService = i, this.eventCollectionService = n, this.passwordGenerationService = a, this.platformUtilsService = c, this.policyService = d, this.logService = p, this.formBuilder = u, this.fileDownloadService = h, this.dialogService = F, this.organizationService = f, this.collectionService = g, this.formLoading = new r.bkB, this.formDisabled = new r.bkB, this.onSuccessfulExport = new r.bkB, this.encryptedExportType = o, this._disabledByPolicy = !1, this.exportForm = this.formBuilder.group({
						vaultSelector: ["myVault", {
							nonNullable: !0,
							validators: [s.k0.required]
						}],
						format: ["json", s.k0.required],
						secret: [""],
						filePassword: ["", s.k0.required],
						confirmFilePassword: ["", s.k0.required],
						fileEncryptionType: [o.AccountEncrypted]
					}), this.formatOptions = [{
						name: ".json",
						value: "json"
					}, {
						name: ".csv",
						value: "csv"
					}, {
						name: ".json (Encrypted)",
						value: "encrypted_json"
					}], this.destroy$ = new l.B, this.onlyManagedCollections = !0, this.generatePassword = () => rt(this, void 0, void 0, (function*() {
						const [t] = yield this.passwordGenerationService.getOptions(), e = yield this.passwordGenerationService.generatePassword(t);
						this.exportForm.get("filePassword").setValue(e), this.exportForm.get("confirmFilePassword").setValue(e)
					})), this.submit = () => rt(this, void 0, void 0, (function*() {
						if (this.isFileEncryptedExport && this.filePassword != this.confirmFilePassword) return void this.toastService.showToast({
							variant: "error",
							title: this.i18nService.t("errorOccurred"),
							message: this.i18nService.t("filePasswordAndConfirmFilePasswordDoNotMatch")
						});
						if (this.exportForm.markAllAsTouched(), this.exportForm.invalid) return;
						if (this.disabledByPolicy) return void this.toastService.showToast({
							variant: "error",
							title: null,
							message: this.i18nService.t("personalVaultExportPolicyInEffect")
						});
						(yield this.verifyUser()) && (yield this.doExport())
					}))
				}
				ngOnInit() {
					return rt(this, void 0, void 0, (function*() {
						if (this.exportForm.statusChanges.pipe((0, a.Q)(this.destroy$)).subscribe((t => {
								this.formDisabled.emit("DISABLED" === t)
							})), this.policyService.policyAppliesToActiveUser$(m.tt.DisablePersonalVaultExport).pipe((0, a.Q)(this.destroy$)).subscribe((t => {
								this._disabledByPolicy = t, this.disabledByPolicy && this.exportForm.disable()
							})), (0, c.h)(this.exportForm.get("format").valueChanges, this.exportForm.get("fileEncryptionType").valueChanges).pipe((0, d.Z)(0), (0, a.Q)(this.destroy$)).subscribe((() => this.adjustValidators())), this.organizationId) return this.organizations$ = this.organizationService.memberOrganizations$.pipe((0, p.T)((t => t.filter((t => t.id == this.organizationId))))), this.exportForm.controls.vaultSelector.patchValue(this.organizationId), this.exportForm.controls.vaultSelector.disable(), void(this.onlyManagedCollections = !1);
						this.organizations$ = (0, u.z)({
							collections: this.collectionService.decryptedCollections$,
							memberOrganizations: this.organizationService.memberOrganizations$
						}).pipe((0, p.T)((({
							collections: t,
							memberOrganizations: e
						}) => {
							const i = new Set(t.filter((t => t.manage)).map((t => t.organizationId)));
							return e.filter((t => i.has(t.id))).sort(y.A.getSortFunction(this.i18nService, "name"))
						}))), this.exportForm.controls.vaultSelector.valueChanges.pipe((0, a.Q)(this.destroy$)).subscribe((t => {
							this.organizationId = "myVault" != t ? t : void 0
						})), this.exportForm.controls.vaultSelector.setValue("myVault")
					}))
				}
				ngAfterViewInit() {
					this.bitSubmit.loading$.pipe((0, a.Q)(this.destroy$)).subscribe((t => {
						this.formLoading.emit(t)
					}))
				}
				ngOnDestroy() {
					this.destroy$.next()
				}
				get encryptedFormat() {
					return "encrypted_json" === this.format
				}
				get isFileEncryptedExport() {
					return "encrypted_json" === this.format && this.fileEncryptionType === o.FileEncrypted
				}
				get isAccountEncryptedExport() {
					return "encrypted_json" === this.format && this.fileEncryptionType === o.AccountEncrypted
				}
				doExport() {
					return rt(this, void 0, void 0, (function*() {
						try {
							const t = yield this.getExportData();
							this.downloadFile(t), this.toastService.showToast({
								variant: "success",
								title: null,
								message: this.i18nService.t("exportSuccess")
							}), this.onSuccessfulExport.emit(this.organizationId), yield this.collectEvent(), this.exportForm.get("secret").setValue(""), this.exportForm.clearValidators()
						} catch (t) {
							this.logService.error(t)
						}
					}))
				}
				verifyUser() {
					return rt(this, void 0, void 0, (function*() {
						let t = "exportWarningDesc";
						this.isFileEncryptedExport ? t = "fileEncryptedExportWarningDesc" : this.isAccountEncryptedExport && (t = "encExportKeyWarningDesc");
						const e = yield g.GA.open(this.dialogService, {
							title: "confirmVaultExport",
							bodyText: t,
							confirmButtonOptions: {
								text: "exportVault",
								type: "primary"
							}
						});
						return "cancel" !== e.userAction && (!!e.verificationSuccess || (e.noAvailableClientVerificationMethods, !1))
					}))
				}
				getExportData() {
					return rt(this, void 0, void 0, (function*() {
						return y.A.isNullOrWhitespace(this.organizationId) ? this.exportService.getExport(this.format, this.filePassword) : this.exportService.getOrganizationExport(this.organizationId, this.format, this.filePassword, this.onlyManagedCollections)
					}))
				}
				getFileName(t) {
					this.organizationId && (t = "org");
					let e = this.format;
					return "encrypted_json" === this.format && (t = null == t ? "encrypted" : "encrypted_" + t, e = "json"), this.exportService.getFileName(t, e)
				}
				collectEvent() {
					return rt(this, void 0, void 0, (function*() {
						return this.organizationId ? yield this.eventCollectionService.collect(b.Bx.Organization_ClientExportedVault, null, !1, this.organizationId): yield this.eventCollectionService.collect(b.Bx.User_ClientExportedVault)
					}))
				}
				get format() {
					return this.exportForm.get("format").value
				}
				get filePassword() {
					return this.exportForm.get("filePassword").value
				}
				get confirmFilePassword() {
					return this.exportForm.get("confirmFilePassword").value
				}
				get fileEncryptionType() {
					return this.exportForm.get("fileEncryptionType").value
				}
				adjustValidators() {
					this.exportForm.get("confirmFilePassword").reset(), this.exportForm.get("filePassword").reset(), this.encryptedFormat && this.fileEncryptionType == o.FileEncrypted ? (this.exportForm.controls.filePassword.enable(), this.exportForm.controls.confirmFilePassword.enable()) : (this.exportForm.controls.filePassword.disable(), this.exportForm.controls.confirmFilePassword.disable())
				}
				downloadFile(t) {
					const e = this.getFileName();
					this.fileDownloadService.download({
						fileName: e,
						blobData: t,
						blobOptions: {
							type: "text/plain"
						}
					})
				}
			}
			Ft.ɵfac = function(t) {
				return new(t || Ft)(r.rXU(M.W), r.rXU(_.f), r.rXU(k.Os), r.rXU(O.c), r.rXU(z.JJ), r.rXU(X.y), r.rXU(U.m), r.rXU(A.K), r.rXU(s.ze), r.rXU(Y.y), r.rXU(N.o), r.rXU(j.PV), r.rXU(h.YD))
			}, Ft.ɵcmp = r.VBU({
				type: Ft,
				selectors: [
					["tools-export"]
				],
				viewQuery: function(t, e) {
					if (1 & t && (r.GBs(E.L, 5), r.GBs(f.k, 5)), 2 & t) {
						let t;
						r.mGM(t = r.lsd()) && (e.bitSubmit = t.first), r.mGM(t = r.lsd()) && (e.passwordStrengthComponent = t.first)
					}
				},
				inputs: {
					organizationId: "organizationId"
				},
				outputs: {
					formLoading: "formLoading",
					formDisabled: "formDisabled",
					onSuccessfulExport: "onSuccessfulExport"
				},
				standalone: !0,
				features: [r.aNF],
				decls: 24,
				vars: 12,
				consts: [
					["type", "danger", 3, "title", 4, "ngIf"],
					[3, "organizationId", 4, "ngIf"],
					["id", "export_form_exportForm", 3, "formGroup", "bitSubmit"],
					[4, "ngIf"],
					["formControlName", "format"],
					[3, "value", "label", 4, "ngFor", "ngForOf"],
					["type", "danger", 3, "title"],
					[3, "organizationId"],
					["formControlName", "vaultSelector"],
					["value", "myVault", "icon", "bwi-user", 3, "label"],
					["icon", "bwi-business", 3, "value", "label", 4, "ngFor", "ngForOf"],
					["icon", "bwi-business", 3, "value", "label"],
					[3, "value", "label"],
					["formControlName", "fileEncryptionType", "aria-label", "exportTypeHeading"],
					["id", "AccountEncrypted", "name", "fileEncryptionType", "checked", "fileEncryptionType === encryptedExportType.AccountEncrypted", 1, "tw-block", 3, "value"],
					["id", "FileEncrypted", "name", "fileEncryptionType", "checked", "fileEncryptionType === encryptedExportType.FileEncrypted", 1, "tw-block", 3, "value"],
					[1, "tw-mb-3"],
					["bitInput", "", "type", "password", "id", "filePassword", "formControlName", "filePassword", "name", "password"],
					["type", "button", "bitSuffix", "", "bitIconButton", "", "bitPasswordInputToggle", "", 3, "toggledChange", "toggled"],
					["type", "button", "bitIconButton", "bwi-generate", "appStopClick", "", "bitSuffix", "", 3, "click"],
					["type", "button", "bitIconButton", "bwi-clone", "appStopClick", "", "bitSuffix", "", "showToast", "", 3, "disabled", "appCopyClick", "valueLabel"],
					[3, "password", "showText"],
					["bitInput", "", "type", "password", "id", "confirmFilePassword", "formControlName", "confirmFilePassword", "name", "confirmFilePassword"]
				],
				template: function(t, e) {
					1 & t && (r.DNE(0, st, 4, 6, "bit-callout", 0), r.EFF(1, "\n"), r.DNE(2, at, 1, 1, "tools-export-scope-callout", 1), r.EFF(3, "\n\n"), r.j41(4, "form", 2), r.EFF(5, "\n  "), r.DNE(6, dt, 4, 1, "ng-container", 3), r.nI1(7, "async"), r.EFF(8, "\n\n  "), r.j41(9, "bit-form-field"), r.EFF(10, "\n    "), r.j41(11, "bit-label"), r.EFF(12), r.nI1(13, "i18n"), r.k0s(), r.EFF(14, "\n    "), r.j41(15, "bit-select", 4), r.EFF(16, "\n      "), r.DNE(17, pt, 1, 2, "bit-option", 5), r.EFF(18, "\n    "), r.k0s(), r.EFF(19, "\n  "), r.k0s(), r.EFF(20, "\n\n  "), r.DNE(21, ht, 33, 18, "ng-container", 3), r.EFF(22, "\n"), r.k0s(), r.EFF(23, "\n")), 2 & t && (r.Y8G("ngIf", e.disabledByPolicy), r.R7$(2), r.Y8G("ngIf", !e.disabledByPolicy), r.R7$(2), r.Y8G("formGroup", e.exportForm)("bitSubmit", e.submit), r.R7$(2), r.Y8G("ngIf", r.bMT(7, 8, e.organizations$)), r.R7$(6), r.JRh(r.bMT(13, 10, "fileFormat")), r.R7$(5), r.Y8G("ngForOf", e.formatOptions), r.R7$(4), r.Y8G("ngIf", "encrypted_json" === e.format))
				},
				dependencies: [n.MD, n.Sq, n.bT, n.Jj, s.X1, s.qT, s.me, s.BC, s.cb, s.j4, s.JD, F.p, J.Y, q.D, D.$, v.L, L.m, Q.s, W.J, H.h, K.e, Z.a, w.C, E.L, x.t, I.Q, tt.s, S.p, et.w, it.P, P.j, C.G, T.K, ot.d, nt.Y, B, f.k],
				encapsulation: 2
			})
		}
	}
]);
//# sourceMappingURL=573.27b951b69d1a788dbc42.js.map