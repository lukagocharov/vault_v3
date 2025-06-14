/*! For license information please see 173.f2f4733f506e57eda013.js.LICENSE.txt */
(self.webpackChunk_bitwarden_web_vault = self.webpackChunk_bitwarden_web_vault || []).push([
	[173], {
		88961: function(e, t, r) {
			var i;
			e.exports = (i = i || function(e, t) {
				var i;
				if ("undefined" != typeof window && window.crypto && (i = window.crypto), "undefined" != typeof self && self.crypto && (i = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (i = globalThis.crypto), !i && "undefined" != typeof window && window.msCrypto && (i = window.msCrypto), !i && void 0 !== r.g && r.g.crypto && (i = r.g.crypto), !i) try {
					i = r(25156)
				} catch (g) {}
				var n = function() {
						if (i) {
							if ("function" == typeof i.getRandomValues) try {
								return i.getRandomValues(new Uint32Array(1))[0]
							} catch (g) {}
							if ("function" == typeof i.randomBytes) try {
								return i.randomBytes(4).readInt32LE()
							} catch (g) {}
						}
						throw new Error("Native crypto module could not be used to get secure random number.")
					},
					s = Object.create || function() {
						function e() {}
						return function(t) {
							var r;
							return e.prototype = t, r = new e, e.prototype = null, r
						}
					}(),
					a = {},
					o = a.lib = {},
					c = o.Base = {
						extend: function(e) {
							var t = s(this);
							return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
								t.$super.init.apply(this, arguments)
							}), t.init.prototype = t, t.$super = this, t
						},
						create: function() {
							var e = this.extend();
							return e.init.apply(e, arguments), e
						},
						init: function() {},
						mixIn: function(e) {
							for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
							e.hasOwnProperty("toString") && (this.toString = e.toString)
						},
						clone: function() {
							return this.init.prototype.extend(this)
						}
					},
					h = o.WordArray = c.extend({
						init: function(e, r) {
							e = this.words = e || [], this.sigBytes = r != t ? r : 4 * e.length
						},
						toString: function(e) {
							return (e || u).stringify(this)
						},
						concat: function(e) {
							var t = this.words,
								r = e.words,
								i = this.sigBytes,
								n = e.sigBytes;
							if (this.clamp(), i % 4)
								for (var s = 0; s < n; s++) {
									var a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
									t[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8
								} else
									for (var o = 0; o < n; o += 4) t[i + o >>> 2] = r[o >>> 2];
							return this.sigBytes += n, this
						},
						clamp: function() {
							var t = this.words,
								r = this.sigBytes;
							t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4)
						},
						clone: function() {
							var e = c.clone.call(this);
							return e.words = this.words.slice(0), e
						},
						random: function(e) {
							for (var t = [], r = 0; r < e; r += 4) t.push(n());
							return new h.init(t, e)
						}
					}),
					l = a.enc = {},
					u = l.Hex = {
						stringify: function(e) {
							for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
								var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
								i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
							}
							return i.join("")
						},
						parse: function(e) {
							for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
							return new h.init(r, t / 2)
						}
					},
					d = l.Latin1 = {
						stringify: function(e) {
							for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
								var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
								i.push(String.fromCharCode(s))
							}
							return i.join("")
						},
						parse: function(e) {
							for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
							return new h.init(r, t)
						}
					},
					f = l.Utf8 = {
						stringify: function(e) {
							try {
								return decodeURIComponent(escape(d.stringify(e)))
							} catch (t) {
								throw new Error("Malformed UTF-8 data")
							}
						},
						parse: function(e) {
							return d.parse(unescape(encodeURIComponent(e)))
						}
					},
					p = o.BufferedBlockAlgorithm = c.extend({
						reset: function() {
							this._data = new h.init, this._nDataBytes = 0
						},
						_append: function(e) {
							"string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
						},
						_process: function(t) {
							var r, i = this._data,
								n = i.words,
								s = i.sigBytes,
								a = this.blockSize,
								o = s / (4 * a),
								c = (o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0)) * a,
								l = e.min(4 * c, s);
							if (c) {
								for (var u = 0; u < c; u += a) this._doProcessBlock(n, u);
								r = n.splice(0, c), i.sigBytes -= l
							}
							return new h.init(r, l)
						},
						clone: function() {
							var e = c.clone.call(this);
							return e._data = this._data.clone(), e
						},
						_minBufferSize: 0
					}),
					_ = (o.Hasher = p.extend({
						cfg: c.extend(),
						init: function(e) {
							this.cfg = this.cfg.extend(e), this.reset()
						},
						reset: function() {
							p.reset.call(this), this._doReset()
						},
						update: function(e) {
							return this._append(e), this._process(), this
						},
						finalize: function(e) {
							return e && this._append(e), this._doFinalize()
						},
						blockSize: 16,
						_createHelper: function(e) {
							return function(t, r) {
								return new e.init(r).finalize(t)
							}
						},
						_createHmacHelper: function(e) {
							return function(t, r) {
								return new _.HMAC.init(e, r).finalize(t)
							}
						}
					}), a.algo = {});
				return a
			}(Math), i)
		},
		38822: function(e, t, r) {
			var i;
			e.exports = (i = r(88961), function() {
				var e = i,
					t = e.lib.WordArray;

				function r(e, r, i) {
					for (var n = [], s = 0, a = 0; a < r; a++)
						if (a % 4) {
							var o = i[e.charCodeAt(a - 1)] << a % 4 * 2 | i[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
							n[s >>> 2] |= o << 24 - s % 4 * 8, s++
						} return t.create(n, s)
				}
				e.enc.Base64 = {
					stringify: function(e) {
						var t = e.words,
							r = e.sigBytes,
							i = this._map;
						e.clamp();
						for (var n = [], s = 0; s < r; s += 3)
							for (var a = (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, o = 0; o < 4 && s + .75 * o < r; o++) n.push(i.charAt(a >>> 6 * (3 - o) & 63));
						var c = i.charAt(64);
						if (c)
							for (; n.length % 4;) n.push(c);
						return n.join("")
					},
					parse: function(e) {
						var t = e.length,
							i = this._map,
							n = this._reverseMap;
						if (!n) {
							n = this._reverseMap = [];
							for (var s = 0; s < i.length; s++) n[i.charCodeAt(s)] = s
						}
						var a = i.charAt(64);
						if (a) {
							var o = e.indexOf(a); - 1 !== o && (t = o)
						}
						return r(e, t, n)
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
				}
			}(), i.enc.Base64)
		},
		50526: function(e, t, r) {
			var i;
			e.exports = (i = r(88961), i.enc.Utf8)
		},
		34709: function(e, t, r) {
			var i;
			e.exports = (i = r(88961), function(e) {
				var t = i,
					r = t.lib,
					n = r.WordArray,
					s = r.Hasher,
					a = t.algo,
					o = [],
					c = [];
				! function() {
					function t(t) {
						for (var r = e.sqrt(t), i = 2; i <= r; i++)
							if (!(t % i)) return !1;
						return !0
					}

					function r(e) {
						return 4294967296 * (e - (0 | e)) | 0
					}
					for (var i = 2, n = 0; n < 64;) t(i) && (n < 8 && (o[n] = r(e.pow(i, .5))), c[n] = r(e.pow(i, 1 / 3)), n++), i++
				}();
				var h = [],
					l = a.SHA256 = s.extend({
						_doReset: function() {
							this._hash = new n.init(o.slice(0))
						},
						_doProcessBlock: function(e, t) {
							for (var r = this._hash.words, i = r[0], n = r[1], s = r[2], a = r[3], o = r[4], l = r[5], u = r[6], d = r[7], f = 0; f < 64; f++) {
								if (f < 16) h[f] = 0 | e[t + f];
								else {
									var p = h[f - 15],
										_ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
										g = h[f - 2],
										m = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
									h[f] = _ + h[f - 7] + m + h[f - 16]
								}
								var w = i & n ^ i & s ^ n & s,
									y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
									v = d + ((o << 26 | o >>> 6) ^ (o << 21 | o >>> 11) ^ (o << 7 | o >>> 25)) + (o & l ^ ~o & u) + c[f] + h[f];
								d = u, u = l, l = o, o = a + v | 0, a = s, s = n, n = i, i = v + (y + w) | 0
							}
							r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + s | 0, r[3] = r[3] + a | 0, r[4] = r[4] + o | 0, r[5] = r[5] + l | 0, r[6] = r[6] + u | 0, r[7] = r[7] + d | 0
						},
						_doFinalize: function() {
							var t = this._data,
								r = t.words,
								i = 8 * this._nDataBytes,
								n = 8 * t.sigBytes;
							return r[n >>> 5] |= 128 << 24 - n % 32, r[14 + (n + 64 >>> 9 << 4)] = e.floor(i / 4294967296), r[15 + (n + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * r.length, this._process(), this._hash
						},
						clone: function() {
							var e = s.clone.call(this);
							return e._hash = this._hash.clone(), e
						}
					});
				t.SHA256 = s._createHelper(l), t.HmacSHA256 = s._createHmacHelper(l)
			}(Math), i.SHA256)
		},
		74794: (e, t, r) => {
			var i = r(45202);
			e.exports = function e(t, r, i) {
				function n(a, o) {
					if (!r[a]) {
						if (!t[a]) {
							if (s) return s(a, !0);
							var c = new Error("Cannot find module '" + a + "'");
							throw c.code = "MODULE_NOT_FOUND", c
						}
						var h = r[a] = {
							exports: {}
						};
						t[a][0].call(h.exports, (function(e) {
							return n(t[a][1][e] || e)
						}), h, h.exports, e, t, r, i)
					}
					return r[a].exports
				}
				for (var s = void 0, a = 0; a < i.length; a++) n(i[a]);
				return n
			}({
				1: [function(e, t, r) {
					"use strict";
					var i = e("./utils"),
						n = e("./support"),
						s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					r.encode = function(e) {
						for (var t, r, n, a, o, c, h, l = [], u = 0, d = e.length, f = d, p = "string" !== i.getTypeOf(e); u < e.length;) f = d - u, n = p ? (t = e[u++], r = u < d ? e[u++] : 0, u < d ? e[u++] : 0) : (t = e.charCodeAt(u++), r = u < d ? e.charCodeAt(u++) : 0, u < d ? e.charCodeAt(u++) : 0), a = t >> 2, o = (3 & t) << 4 | r >> 4, c = 1 < f ? (15 & r) << 2 | n >> 6 : 64, h = 2 < f ? 63 & n : 64, l.push(s.charAt(a) + s.charAt(o) + s.charAt(c) + s.charAt(h));
						return l.join("")
					}, r.decode = function(e) {
						var t, r, i, a, o, c, h = 0,
							l = 0,
							u = "data:";
						if (e.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
						var d, f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
						if (e.charAt(e.length - 1) === s.charAt(64) && f--, e.charAt(e.length - 2) === s.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
						for (d = n.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); h < e.length;) t = s.indexOf(e.charAt(h++)) << 2 | (a = s.indexOf(e.charAt(h++))) >> 4, r = (15 & a) << 4 | (o = s.indexOf(e.charAt(h++))) >> 2, i = (3 & o) << 6 | (c = s.indexOf(e.charAt(h++))), d[l++] = t, 64 !== o && (d[l++] = r), 64 !== c && (d[l++] = i);
						return d
					}
				}, {
					"./support": 30,
					"./utils": 32
				}],
				2: [function(e, t, r) {
					"use strict";
					var i = e("./external"),
						n = e("./stream/DataWorker"),
						s = e("./stream/Crc32Probe"),
						a = e("./stream/DataLengthProbe");

					function o(e, t, r, i, n) {
						this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = i, this.compressedContent = n
					}
					o.prototype = {
						getContentWorker: function() {
							var e = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),
								t = this;
							return e.on("end", (function() {
								if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
							})), e
						},
						getCompressedWorker: function() {
							return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
						}
					}, o.createWorkerFrom = function(e, t, r) {
						return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t)
					}, t.exports = o
				}, {
					"./external": 6,
					"./stream/Crc32Probe": 25,
					"./stream/DataLengthProbe": 26,
					"./stream/DataWorker": 27
				}],
				3: [function(e, t, r) {
					"use strict";
					var i = e("./stream/GenericWorker");
					r.STORE = {
						magic: "\0\0",
						compressWorker: function() {
							return new i("STORE compression")
						},
						uncompressWorker: function() {
							return new i("STORE decompression")
						}
					}, r.DEFLATE = e("./flate")
				}, {
					"./flate": 7,
					"./stream/GenericWorker": 28
				}],
				4: [function(e, t, r) {
					"use strict";
					var i = e("./utils"),
						n = function() {
							for (var e, t = [], r = 0; r < 256; r++) {
								e = r;
								for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
								t[r] = e
							}
							return t
						}();
					t.exports = function(e, t) {
						return void 0 !== e && e.length ? "string" !== i.getTypeOf(e) ? function(e, t, r, i) {
							var s = n,
								a = i + r;
							e ^= -1;
							for (var o = i; o < a; o++) e = e >>> 8 ^ s[255 & (e ^ t[o])];
							return ~e
						}(0 | t, e, e.length, 0) : function(e, t, r, i) {
							var s = n,
								a = i + r;
							e ^= -1;
							for (var o = i; o < a; o++) e = e >>> 8 ^ s[255 & (e ^ t.charCodeAt(o))];
							return ~e
						}(0 | t, e, e.length, 0) : 0
					}
				}, {
					"./utils": 32
				}],
				5: [function(e, t, r) {
					"use strict";
					r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null
				}, {}],
				6: [function(e, t, r) {
					"use strict";
					var i = null;
					i = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
						Promise: i
					}
				}, {
					lie: 37
				}],
				7: [function(e, t, r) {
					"use strict";
					var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
						n = e("pako"),
						s = e("./utils"),
						a = e("./stream/GenericWorker"),
						o = i ? "uint8array" : "array";

					function c(e, t) {
						a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {}
					}
					r.magic = "\b\0", s.inherits(c, a), c.prototype.processChunk = function(e) {
						this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1)
					}, c.prototype.flush = function() {
						a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0)
					}, c.prototype.cleanUp = function() {
						a.prototype.cleanUp.call(this), this._pako = null
					}, c.prototype._createPako = function() {
						this._pako = new n[this._pakoAction]({
							raw: !0,
							level: this._pakoOptions.level || -1
						});
						var e = this;
						this._pako.onData = function(t) {
							e.push({
								data: t,
								meta: e.meta
							})
						}
					}, r.compressWorker = function(e) {
						return new c("Deflate", e)
					}, r.uncompressWorker = function() {
						return new c("Inflate", {})
					}
				}, {
					"./stream/GenericWorker": 28,
					"./utils": 32,
					pako: 38
				}],
				8: [function(e, t, r) {
					"use strict";

					function i(e, t) {
						var r, i = "";
						for (r = 0; r < t; r++) i += String.fromCharCode(255 & e), e >>>= 8;
						return i
					}

					function n(e, t, r, n, a, l) {
						var u, d, f = e.file,
							p = e.compression,
							_ = l !== o.utf8encode,
							g = s.transformTo("string", l(f.name)),
							m = s.transformTo("string", o.utf8encode(f.name)),
							w = f.comment,
							y = s.transformTo("string", l(w)),
							v = s.transformTo("string", o.utf8encode(w)),
							b = m.length !== f.name.length,
							k = v.length !== w.length,
							S = "",
							x = "",
							C = "",
							E = f.dir,
							A = f.date,
							z = {
								crc32: 0,
								compressedSize: 0,
								uncompressedSize: 0
							};
						t && !r || (z.crc32 = e.crc32, z.compressedSize = e.compressedSize, z.uncompressedSize = e.uncompressedSize);
						var I = 0;
						t && (I |= 8), _ || !b && !k || (I |= 2048);
						var T = 0,
							R = 0;
						E && (T |= 16), "UNIX" === a ? (R = 798, T |= function(e, t) {
							var r = e;
							return e || (r = t ? 16893 : 33204), (65535 & r) << 16
						}(f.unixPermissions, E)) : (R = 20, T |= function(e) {
							return 63 & (e || 0)
						}(f.dosPermissions)), u = A.getUTCHours(), u <<= 6, u |= A.getUTCMinutes(), u <<= 5, u |= A.getUTCSeconds() / 2, d = A.getUTCFullYear() - 1980, d <<= 4, d |= A.getUTCMonth() + 1, d <<= 5, d |= A.getUTCDate(), b && (x = i(1, 1) + i(c(g), 4) + m, S += "up" + i(x.length, 2) + x), k && (C = i(1, 1) + i(c(y), 4) + v, S += "uc" + i(C.length, 2) + C);
						var O = "";
						return O += "\n\0", O += i(I, 2), O += p.magic, O += i(u, 2), O += i(d, 2), O += i(z.crc32, 4), O += i(z.compressedSize, 4), O += i(z.uncompressedSize, 4), O += i(g.length, 2), O += i(S.length, 2), {
							fileRecord: h.LOCAL_FILE_HEADER + O + g + S,
							dirRecord: h.CENTRAL_FILE_HEADER + i(R, 2) + O + i(y.length, 2) + "\0\0\0\0" + i(T, 4) + i(n, 4) + g + S + y
						}
					}
					var s = e("../utils"),
						a = e("../stream/GenericWorker"),
						o = e("../utf8"),
						c = e("../crc32"),
						h = e("../signature");

					function l(e, t, r, i) {
						a.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = i, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
					}
					s.inherits(l, a), l.prototype.push = function(e) {
						var t = e.meta.percent || 0,
							r = this.entriesCount,
							i = this._sources.length;
						this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, a.prototype.push.call(this, {
							data: e.data,
							meta: {
								currentFile: this.currentFile,
								percent: r ? (t + 100 * (r - i - 1)) / r : 100
							}
						}))
					}, l.prototype.openedSource = function(e) {
						this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
						var t = this.streamFiles && !e.file.dir;
						if (t) {
							var r = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
							this.push({
								data: r.fileRecord,
								meta: {
									percent: 0
								}
							})
						} else this.accumulate = !0
					}, l.prototype.closedSource = function(e) {
						this.accumulate = !1;
						var t = this.streamFiles && !e.file.dir,
							r = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						if (this.dirRecords.push(r.dirRecord), t) this.push({
							data: function(e) {
								return h.DATA_DESCRIPTOR + i(e.crc32, 4) + i(e.compressedSize, 4) + i(e.uncompressedSize, 4)
							}(e),
							meta: {
								percent: 100
							}
						});
						else
							for (this.push({
									data: r.fileRecord,
									meta: {
										percent: 0
									}
								}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
						this.currentFile = null
					}, l.prototype.flush = function() {
						for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
							data: this.dirRecords[t],
							meta: {
								percent: 100
							}
						});
						var r = this.bytesWritten - e,
							n = function(e, t, r, n, a) {
								var o = s.transformTo("string", a(n));
								return h.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(e, 2) + i(e, 2) + i(t, 4) + i(r, 4) + i(o.length, 2) + o
							}(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
						this.push({
							data: n,
							meta: {
								percent: 100
							}
						})
					}, l.prototype.prepareNextSource = function() {
						this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
					}, l.prototype.registerPrevious = function(e) {
						this._sources.push(e);
						var t = this;
						return e.on("data", (function(e) {
							t.processChunk(e)
						})), e.on("end", (function() {
							t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end()
						})), e.on("error", (function(e) {
							t.error(e)
						})), this
					}, l.prototype.resume = function() {
						return !!a.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
					}, l.prototype.error = function(e) {
						var t = this._sources;
						if (!a.prototype.error.call(this, e)) return !1;
						for (var r = 0; r < t.length; r++) try {
							t[r].error(e)
						} catch (e) {}
						return !0
					}, l.prototype.lock = function() {
						a.prototype.lock.call(this);
						for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
					}, t.exports = l
				}, {
					"../crc32": 4,
					"../signature": 23,
					"../stream/GenericWorker": 28,
					"../utf8": 31,
					"../utils": 32
				}],
				9: [function(e, t, r) {
					"use strict";
					var i = e("../compressions"),
						n = e("./ZipFileWorker");
					r.generateWorker = function(e, t, r) {
						var s = new n(t.streamFiles, r, t.platform, t.encodeFileName),
							a = 0;
						try {
							e.forEach((function(e, r) {
								a++;
								var n = function(e, t) {
										var r = e || t,
											n = i[r];
										if (!n) throw new Error(r + " is not a valid compression method !");
										return n
									}(r.options.compression, t.compression),
									o = r.options.compressionOptions || t.compressionOptions || {},
									c = r.dir,
									h = r.date;
								r._compressWorker(n, o).withStreamInfo("file", {
									name: e,
									dir: c,
									date: h,
									comment: r.comment || "",
									unixPermissions: r.unixPermissions,
									dosPermissions: r.dosPermissions
								}).pipe(s)
							})), s.entriesCount = a
						} catch (e) {
							s.error(e)
						}
						return s
					}
				}, {
					"../compressions": 3,
					"./ZipFileWorker": 8
				}],
				10: [function(e, t, r) {
					"use strict";

					function i() {
						if (!(this instanceof i)) return new i;
						if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
						this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
							var e = new i;
							for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
							return e
						}
					}(i.prototype = e("./object")).loadAsync = e("./load"), i.support = e("./support"), i.defaults = e("./defaults"), i.version = "3.10.1", i.loadAsync = function(e, t) {
						return (new i).loadAsync(e, t)
					}, i.external = e("./external"), t.exports = i
				}, {
					"./defaults": 5,
					"./external": 6,
					"./load": 11,
					"./object": 15,
					"./support": 30
				}],
				11: [function(e, t, r) {
					"use strict";
					var i = e("./utils"),
						n = e("./external"),
						s = e("./utf8"),
						a = e("./zipEntries"),
						o = e("./stream/Crc32Probe"),
						c = e("./nodejsUtils");

					function h(e) {
						return new n.Promise((function(t, r) {
							var i = e.decompressed.getContentWorker().pipe(new o);
							i.on("error", (function(e) {
								r(e)
							})).on("end", (function() {
								i.streamInfo.crc32 !== e.decompressed.crc32 ? r(new Error("Corrupted zip : CRC32 mismatch")) : t()
							})).resume()
						}))
					}
					t.exports = function(e, t) {
						var r = this;
						return t = i.extend(t || {}, {
							base64: !1,
							checkCRC32: !1,
							optimizedBinaryString: !1,
							createFolders: !1,
							decodeFileName: s.utf8decode
						}), c.isNode && c.isStream(e) ? n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then((function(e) {
							var r = new a(t);
							return r.load(e), r
						})).then((function(e) {
							var r = [n.Promise.resolve(e)],
								i = e.files;
							if (t.checkCRC32)
								for (var s = 0; s < i.length; s++) r.push(h(i[s]));
							return n.Promise.all(r)
						})).then((function(e) {
							for (var n = e.shift(), s = n.files, a = 0; a < s.length; a++) {
								var o = s[a],
									c = o.fileNameStr,
									h = i.resolve(o.fileNameStr);
								r.file(h, o.decompressed, {
									binary: !0,
									optimizedBinaryString: !0,
									date: o.date,
									dir: o.dir,
									comment: o.fileCommentStr.length ? o.fileCommentStr : null,
									unixPermissions: o.unixPermissions,
									dosPermissions: o.dosPermissions,
									createFolders: t.createFolders
								}), o.dir || (r.file(h).unsafeOriginalName = c)
							}
							return n.zipComment.length && (r.comment = n.zipComment), r
						}))
					}
				}, {
					"./external": 6,
					"./nodejsUtils": 14,
					"./stream/Crc32Probe": 25,
					"./utf8": 31,
					"./utils": 32,
					"./zipEntries": 33
				}],
				12: [function(e, t, r) {
					"use strict";
					var i = e("../utils"),
						n = e("../stream/GenericWorker");

					function s(e, t) {
						n.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t)
					}
					i.inherits(s, n), s.prototype._bindStream = function(e) {
						var t = this;
						(this._stream = e).pause(), e.on("data", (function(e) {
							t.push({
								data: e,
								meta: {
									percent: 0
								}
							})
						})).on("error", (function(e) {
							t.isPaused ? this.generatedError = e : t.error(e)
						})).on("end", (function() {
							t.isPaused ? t._upstreamEnded = !0 : t.end()
						}))
					}, s.prototype.pause = function() {
						return !!n.prototype.pause.call(this) && (this._stream.pause(), !0)
					}, s.prototype.resume = function() {
						return !!n.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
					}, t.exports = s
				}, {
					"../stream/GenericWorker": 28,
					"../utils": 32
				}],
				13: [function(e, t, r) {
					"use strict";
					var i = e("readable-stream").Readable;

					function n(e, t, r) {
						i.call(this, t), this._helper = e;
						var n = this;
						e.on("data", (function(e, t) {
							n.push(e) || n._helper.pause(), r && r(t)
						})).on("error", (function(e) {
							n.emit("error", e)
						})).on("end", (function() {
							n.push(null)
						}))
					}
					e("../utils").inherits(n, i), n.prototype._read = function() {
						this._helper.resume()
					}, t.exports = n
				}, {
					"../utils": 32,
					"readable-stream": 16
				}],
				14: [function(e, t, r) {
					"use strict";
					t.exports = {
						isNode: "undefined" != typeof Buffer,
						newBufferFrom: function(e, t) {
							if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
							if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
							return new Buffer(e, t)
						},
						allocBuffer: function(e) {
							if (Buffer.alloc) return Buffer.alloc(e);
							var t = new Buffer(e);
							return t.fill(0), t
						},
						isBuffer: function(e) {
							return Buffer.isBuffer(e)
						},
						isStream: function(e) {
							return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume
						}
					}
				}, {}],
				15: [function(e, t, r) {
					"use strict";

					function i(e, t, r) {
						var i, n = s.getTypeOf(t),
							o = s.extend(r || {}, c);
						o.date = o.date || new Date, null !== o.compression && (o.compression = o.compression.toUpperCase()), "string" == typeof o.unixPermissions && (o.unixPermissions = parseInt(o.unixPermissions, 8)), o.unixPermissions && 16384 & o.unixPermissions && (o.dir = !0), o.dosPermissions && 16 & o.dosPermissions && (o.dir = !0), o.dir && (e = _(e)), o.createFolders && (i = p(e)) && g.call(this, i, !0);
						var u = "string" === n && !1 === o.binary && !1 === o.base64;
						r && void 0 !== r.binary || (o.binary = !u), (t instanceof h && 0 === t.uncompressedSize || o.dir || !t || 0 === t.length) && (o.base64 = !1, o.binary = !0, t = "", o.compression = "STORE", n = "string");
						var m = null;
						m = t instanceof h || t instanceof a ? t : d.isNode && d.isStream(t) ? new f(e, t) : s.prepareContent(e, t, o.binary, o.optimizedBinaryString, o.base64);
						var w = new l(e, m, o);
						this.files[e] = w
					}
					var n = e("./utf8"),
						s = e("./utils"),
						a = e("./stream/GenericWorker"),
						o = e("./stream/StreamHelper"),
						c = e("./defaults"),
						h = e("./compressedObject"),
						l = e("./zipObject"),
						u = e("./generate"),
						d = e("./nodejsUtils"),
						f = e("./nodejs/NodejsStreamInputAdapter"),
						p = function(e) {
							"/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
							var t = e.lastIndexOf("/");
							return 0 < t ? e.substring(0, t) : ""
						},
						_ = function(e) {
							return "/" !== e.slice(-1) && (e += "/"), e
						},
						g = function(e, t) {
							return t = void 0 !== t ? t : c.createFolders, e = _(e), this.files[e] || i.call(this, e, null, {
								dir: !0,
								createFolders: t
							}), this.files[e]
						};

					function m(e) {
						return "[object RegExp]" === Object.prototype.toString.call(e)
					}
					var w = {
						load: function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
						},
						forEach: function(e) {
							var t, r, i;
							for (t in this.files) i = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, i)
						},
						filter: function(e) {
							var t = [];
							return this.forEach((function(r, i) {
								e(r, i) && t.push(i)
							})), t
						},
						file: function(e, t, r) {
							if (1 !== arguments.length) return e = this.root + e, i.call(this, e, t, r), this;
							if (m(e)) {
								var n = e;
								return this.filter((function(e, t) {
									return !t.dir && n.test(e)
								}))
							}
							var s = this.files[this.root + e];
							return s && !s.dir ? s : null
						},
						folder: function(e) {
							if (!e) return this;
							if (m(e)) return this.filter((function(t, r) {
								return r.dir && e.test(t)
							}));
							var t = this.root + e,
								r = g.call(this, t),
								i = this.clone();
							return i.root = r.name, i
						},
						remove: function(e) {
							e = this.root + e;
							var t = this.files[e];
							if (t || ("/" !== e.slice(-1) && (e += "/"), t = this.files[e]), t && !t.dir) delete this.files[e];
							else
								for (var r = this.filter((function(t, r) {
										return r.name.slice(0, e.length) === e
									})), i = 0; i < r.length; i++) delete this.files[r[i].name];
							return this
						},
						generate: function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
						},
						generateInternalStream: function(e) {
							var t, r = {};
							try {
								if ((r = s.extend(e || {}, {
										streamFiles: !1,
										compression: "STORE",
										compressionOptions: null,
										type: "",
										platform: "DOS",
										comment: null,
										mimeType: "application/zip",
										encodeFileName: n.utf8encode
									})).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
								s.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
								var i = r.comment || this.comment || "";
								t = u.generateWorker(this, r, i)
							} catch (e) {
								(t = new a("error")).error(e)
							}
							return new o(t, r.type || "string", r.mimeType)
						},
						generateAsync: function(e, t) {
							return this.generateInternalStream(e).accumulate(t)
						},
						generateNodeStream: function(e, t) {
							return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t)
						}
					};
					t.exports = w
				}, {
					"./compressedObject": 2,
					"./defaults": 5,
					"./generate": 9,
					"./nodejs/NodejsStreamInputAdapter": 12,
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31,
					"./utils": 32,
					"./zipObject": 35
				}],
				16: [function(e, t, r) {
					"use strict";
					t.exports = e("stream")
				}, {
					stream: void 0
				}],
				17: [function(e, t, r) {
					"use strict";
					var i = e("./DataReader");

					function n(e) {
						i.call(this, e);
						for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
					}
					e("../utils").inherits(n, i), n.prototype.byteAt = function(e) {
						return this.data[this.zero + e]
					}, n.prototype.lastIndexOfSignature = function(e) {
						for (var t = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
							if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === i && this.data[s + 3] === n) return s - this.zero;
						return -1
					}, n.prototype.readAndCheckSignature = function(e) {
						var t = e.charCodeAt(0),
							r = e.charCodeAt(1),
							i = e.charCodeAt(2),
							n = e.charCodeAt(3),
							s = this.readData(4);
						return t === s[0] && r === s[1] && i === s[2] && n === s[3]
					}, n.prototype.readData = function(e) {
						if (this.checkOffset(e), 0 === e) return [];
						var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
						return this.index += e, t
					}, t.exports = n
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				18: [function(e, t, r) {
					"use strict";
					var i = e("../utils");

					function n(e) {
						this.data = e, this.length = e.length, this.index = 0, this.zero = 0
					}
					n.prototype = {
						checkOffset: function(e) {
							this.checkIndex(this.index + e)
						},
						checkIndex: function(e) {
							if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?")
						},
						setIndex: function(e) {
							this.checkIndex(e), this.index = e
						},
						skip: function(e) {
							this.setIndex(this.index + e)
						},
						byteAt: function() {},
						readInt: function(e) {
							var t, r = 0;
							for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
							return this.index += e, r
						},
						readString: function(e) {
							return i.transformTo("string", this.readData(e))
						},
						readData: function() {},
						lastIndexOfSignature: function() {},
						readAndCheckSignature: function() {},
						readDate: function() {
							var e = this.readInt(4);
							return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
						}
					}, t.exports = n
				}, {
					"../utils": 32
				}],
				19: [function(e, t, r) {
					"use strict";
					var i = e("./Uint8ArrayReader");

					function n(e) {
						i.call(this, e)
					}
					e("../utils").inherits(n, i), n.prototype.readData = function(e) {
						this.checkOffset(e);
						var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
						return this.index += e, t
					}, t.exports = n
				}, {
					"../utils": 32,
					"./Uint8ArrayReader": 21
				}],
				20: [function(e, t, r) {
					"use strict";
					var i = e("./DataReader");

					function n(e) {
						i.call(this, e)
					}
					e("../utils").inherits(n, i), n.prototype.byteAt = function(e) {
						return this.data.charCodeAt(this.zero + e)
					}, n.prototype.lastIndexOfSignature = function(e) {
						return this.data.lastIndexOf(e) - this.zero
					}, n.prototype.readAndCheckSignature = function(e) {
						return e === this.readData(4)
					}, n.prototype.readData = function(e) {
						this.checkOffset(e);
						var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
						return this.index += e, t
					}, t.exports = n
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				21: [function(e, t, r) {
					"use strict";
					var i = e("./ArrayReader");

					function n(e) {
						i.call(this, e)
					}
					e("../utils").inherits(n, i), n.prototype.readData = function(e) {
						if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
						var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
						return this.index += e, t
					}, t.exports = n
				}, {
					"../utils": 32,
					"./ArrayReader": 17
				}],
				22: [function(e, t, r) {
					"use strict";
					var i = e("../utils"),
						n = e("../support"),
						s = e("./ArrayReader"),
						a = e("./StringReader"),
						o = e("./NodeBufferReader"),
						c = e("./Uint8ArrayReader");
					t.exports = function(e) {
						var t = i.getTypeOf(e);
						return i.checkSupport(t), "string" !== t || n.uint8array ? "nodebuffer" === t ? new o(e) : n.uint8array ? new c(i.transformTo("uint8array", e)) : new s(i.transformTo("array", e)) : new a(e)
					}
				}, {
					"../support": 30,
					"../utils": 32,
					"./ArrayReader": 17,
					"./NodeBufferReader": 19,
					"./StringReader": 20,
					"./Uint8ArrayReader": 21
				}],
				23: [function(e, t, r) {
					"use strict";
					r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b"
				}, {}],
				24: [function(e, t, r) {
					"use strict";
					var i = e("./GenericWorker"),
						n = e("../utils");

					function s(e) {
						i.call(this, "ConvertWorker to " + e), this.destType = e
					}
					n.inherits(s, i), s.prototype.processChunk = function(e) {
						this.push({
							data: n.transformTo(this.destType, e.data),
							meta: e.meta
						})
					}, t.exports = s
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				25: [function(e, t, r) {
					"use strict";
					var i = e("./GenericWorker"),
						n = e("../crc32");

					function s() {
						i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
					}
					e("../utils").inherits(s, i), s.prototype.processChunk = function(e) {
						this.streamInfo.crc32 = n(e.data, this.streamInfo.crc32 || 0), this.push(e)
					}, t.exports = s
				}, {
					"../crc32": 4,
					"../utils": 32,
					"./GenericWorker": 28
				}],
				26: [function(e, t, r) {
					"use strict";
					var i = e("../utils"),
						n = e("./GenericWorker");

					function s(e) {
						n.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0)
					}
					i.inherits(s, n), s.prototype.processChunk = function(e) {
						if (e) {
							var t = this.streamInfo[this.propName] || 0;
							this.streamInfo[this.propName] = t + e.data.length
						}
						n.prototype.processChunk.call(this, e)
					}, t.exports = s
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				27: [function(e, t, r) {
					"use strict";
					var i = e("../utils"),
						n = e("./GenericWorker");

					function s(e) {
						n.call(this, "DataWorker");
						var t = this;
						this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then((function(e) {
							t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = i.getTypeOf(e), t.isPaused || t._tickAndRepeat()
						}), (function(e) {
							t.error(e)
						}))
					}
					i.inherits(s, n), s.prototype.cleanUp = function() {
						n.prototype.cleanUp.call(this), this.data = null
					}, s.prototype.resume = function() {
						return !!n.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0)
					}, s.prototype._tickAndRepeat = function() {
						this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
					}, s.prototype._tick = function() {
						if (this.isPaused || this.isFinished) return !1;
						var e = null,
							t = Math.min(this.max, this.index + 16384);
						if (this.index >= this.max) return this.end();
						switch (this.type) {
							case "string":
								e = this.data.substring(this.index, t);
								break;
							case "uint8array":
								e = this.data.subarray(this.index, t);
								break;
							case "array":
							case "nodebuffer":
								e = this.data.slice(this.index, t)
						}
						return this.index = t, this.push({
							data: e,
							meta: {
								percent: this.max ? this.index / this.max * 100 : 0
							}
						})
					}, t.exports = s
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				28: [function(e, t, r) {
					"use strict";

					function i(e) {
						this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
							data: [],
							end: [],
							error: []
						}, this.previous = null
					}
					i.prototype = {
						push: function(e) {
							this.emit("data", e)
						},
						end: function() {
							if (this.isFinished) return !1;
							this.flush();
							try {
								this.emit("end"), this.cleanUp(), this.isFinished = !0
							} catch (e) {
								this.emit("error", e)
							}
							return !0
						},
						error: function(e) {
							return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0)
						},
						on: function(e, t) {
							return this._listeners[e].push(t), this
						},
						cleanUp: function() {
							this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
						},
						emit: function(e, t) {
							if (this._listeners[e])
								for (var r = 0; r < this._listeners[e].length; r++) this._listeners[e][r].call(this, t)
						},
						pipe: function(e) {
							return e.registerPrevious(this)
						},
						registerPrevious: function(e) {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
							var t = this;
							return e.on("data", (function(e) {
								t.processChunk(e)
							})), e.on("end", (function() {
								t.end()
							})), e.on("error", (function(e) {
								t.error(e)
							})), this
						},
						pause: function() {
							return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
						},
						resume: function() {
							if (!this.isPaused || this.isFinished) return !1;
							var e = this.isPaused = !1;
							return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e
						},
						flush: function() {},
						processChunk: function(e) {
							this.push(e)
						},
						withStreamInfo: function(e, t) {
							return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this
						},
						mergeStreamInfo: function() {
							for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e])
						},
						lock: function() {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.isLocked = !0, this.previous && this.previous.lock()
						},
						toString: function() {
							var e = "Worker " + this.name;
							return this.previous ? this.previous + " -> " + e : e
						}
					}, t.exports = i
				}, {}],
				29: [function(e, t, r) {
					"use strict";
					var i = e("../utils"),
						n = e("./ConvertWorker"),
						s = e("./GenericWorker"),
						a = e("../base64"),
						o = e("../support"),
						c = e("../external"),
						h = null;
					if (o.nodestream) try {
						h = e("../nodejs/NodejsStreamOutputAdapter")
					} catch (e) {}

					function l(e, t) {
						return new c.Promise((function(r, n) {
							var s = [],
								o = e._internalType,
								c = e._outputType,
								h = e._mimeType;
							e.on("data", (function(e, r) {
								s.push(e), t && t(r)
							})).on("error", (function(e) {
								s = [], n(e)
							})).on("end", (function() {
								try {
									var e = function(e, t, r) {
										switch (e) {
											case "blob":
												return i.newBlob(i.transformTo("arraybuffer", t), r);
											case "base64":
												return a.encode(t);
											default:
												return i.transformTo(e, t)
										}
									}(c, function(e, t) {
										var r, i = 0,
											n = null,
											s = 0;
										for (r = 0; r < t.length; r++) s += t[r].length;
										switch (e) {
											case "string":
												return t.join("");
											case "array":
												return Array.prototype.concat.apply([], t);
											case "uint8array":
												for (n = new Uint8Array(s), r = 0; r < t.length; r++) n.set(t[r], i), i += t[r].length;
												return n;
											case "nodebuffer":
												return Buffer.concat(t);
											default:
												throw new Error("concat : unsupported type '" + e + "'")
										}
									}(o, s), h);
									r(e)
								} catch (e) {
									n(e)
								}
								s = []
							})).resume()
						}))
					}

					function u(e, t, r) {
						var a = t;
						switch (t) {
							case "blob":
							case "arraybuffer":
								a = "uint8array";
								break;
							case "base64":
								a = "string"
						}
						try {
							this._internalType = a, this._outputType = t, this._mimeType = r, i.checkSupport(a), this._worker = e.pipe(new n(a)), e.lock()
						} catch (e) {
							this._worker = new s("error"), this._worker.error(e)
						}
					}
					u.prototype = {
						accumulate: function(e) {
							return l(this, e)
						},
						on: function(e, t) {
							var r = this;
							return "data" === e ? this._worker.on(e, (function(e) {
								t.call(r, e.data, e.meta)
							})) : this._worker.on(e, (function() {
								i.delay(t, arguments, r)
							})), this
						},
						resume: function() {
							return i.delay(this._worker.resume, [], this._worker), this
						},
						pause: function() {
							return this._worker.pause(), this
						},
						toNodejsStream: function(e) {
							if (i.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
							return new h(this, {
								objectMode: "nodebuffer" !== this._outputType
							}, e)
						}
					}, t.exports = u
				}, {
					"../base64": 1,
					"../external": 6,
					"../nodejs/NodejsStreamOutputAdapter": 13,
					"../support": 30,
					"../utils": 32,
					"./ConvertWorker": 24,
					"./GenericWorker": 28
				}],
				30: [function(e, t, r) {
					"use strict";
					if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;
					else {
						var i = new ArrayBuffer(0);
						try {
							r.blob = 0 === new Blob([i], {
								type: "application/zip"
							}).size
						} catch (e) {
							try {
								var n = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
								n.append(i), r.blob = 0 === n.getBlob("application/zip").size
							} catch (e) {
								r.blob = !1
							}
						}
					}
					try {
						r.nodestream = !!e("readable-stream").Readable
					} catch (e) {
						r.nodestream = !1
					}
				}, {
					"readable-stream": 16
				}],
				31: [function(e, t, r) {
					"use strict";
					for (var i = e("./utils"), n = e("./support"), s = e("./nodejsUtils"), a = e("./stream/GenericWorker"), o = new Array(256), c = 0; c < 256; c++) o[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;

					function h() {
						a.call(this, "utf-8 decode"), this.leftOver = null
					}

					function l() {
						a.call(this, "utf-8 encode")
					}
					o[254] = o[254] = 1, r.utf8encode = function(e) {
						return n.nodebuffer ? s.newBufferFrom(e, "utf-8") : function(e) {
							var t, r, i, s, a, o = e.length,
								c = 0;
							for (s = 0; s < o; s++) 55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), s++), c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
							for (t = n.uint8array ? new Uint8Array(c) : new Array(c), s = a = 0; a < c; s++) 55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), s++), r < 128 ? t[a++] = r : (r < 2048 ? t[a++] = 192 | r >>> 6 : (r < 65536 ? t[a++] = 224 | r >>> 12 : (t[a++] = 240 | r >>> 18, t[a++] = 128 | r >>> 12 & 63), t[a++] = 128 | r >>> 6 & 63), t[a++] = 128 | 63 & r);
							return t
						}(e)
					}, r.utf8decode = function(e) {
						return n.nodebuffer ? i.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
							var t, r, n, s, a = e.length,
								c = new Array(2 * a);
							for (t = r = 0; t < a;)
								if ((n = e[t++]) < 128) c[r++] = n;
								else if (4 < (s = o[n])) c[r++] = 65533, t += s - 1;
							else {
								for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && t < a;) n = n << 6 | 63 & e[t++], s--;
								1 < s ? c[r++] = 65533 : n < 65536 ? c[r++] = n : (n -= 65536, c[r++] = 55296 | n >> 10 & 1023, c[r++] = 56320 | 1023 & n)
							}
							return c.length !== r && (c.subarray ? c = c.subarray(0, r) : c.length = r), i.applyFromCharCode(c)
						}(e = i.transformTo(n.uint8array ? "uint8array" : "array", e))
					}, i.inherits(h, a), h.prototype.processChunk = function(e) {
						var t = i.transformTo(n.uint8array ? "uint8array" : "array", e.data);
						if (this.leftOver && this.leftOver.length) {
							if (n.uint8array) {
								var s = t;
								(t = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), t.set(s, this.leftOver.length)
							} else t = this.leftOver.concat(t);
							this.leftOver = null
						}
						var a = function(e, t) {
								var r;
								for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
								return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t
							}(t),
							c = t;
						a !== t.length && (n.uint8array ? (c = t.subarray(0, a), this.leftOver = t.subarray(a, t.length)) : (c = t.slice(0, a), this.leftOver = t.slice(a, t.length))), this.push({
							data: r.utf8decode(c),
							meta: e.meta
						})
					}, h.prototype.flush = function() {
						this.leftOver && this.leftOver.length && (this.push({
							data: r.utf8decode(this.leftOver),
							meta: {}
						}), this.leftOver = null)
					}, r.Utf8DecodeWorker = h, i.inherits(l, a), l.prototype.processChunk = function(e) {
						this.push({
							data: r.utf8encode(e.data),
							meta: e.meta
						})
					}, r.Utf8EncodeWorker = l
				}, {
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./support": 30,
					"./utils": 32
				}],
				32: [function(e, t, r) {
					"use strict";
					var i = e("./support"),
						n = e("./base64"),
						s = e("./nodejsUtils"),
						a = e("./external");

					function o(e) {
						return e
					}

					function c(e, t) {
						for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
						return t
					}
					e("setimmediate"), r.newBlob = function(t, i) {
						r.checkSupport("blob");
						try {
							return new Blob([t], {
								type: i
							})
						} catch (e) {
							try {
								var n = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
								return n.append(t), n.getBlob(i)
							} catch (e) {
								throw new Error("Bug : can't construct the Blob.")
							}
						}
					};
					var h = {
						stringifyByChunk: function(e, t, r) {
							var i = [],
								n = 0,
								s = e.length;
							if (s <= r) return String.fromCharCode.apply(null, e);
							for (; n < s;) "array" === t || "nodebuffer" === t ? i.push(String.fromCharCode.apply(null, e.slice(n, Math.min(n + r, s)))) : i.push(String.fromCharCode.apply(null, e.subarray(n, Math.min(n + r, s)))), n += r;
							return i.join("")
						},
						stringifyByChar: function(e) {
							for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
							return t
						},
						applyCanBeUsed: {
							uint8array: function() {
								try {
									return i.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
								} catch (e) {
									return !1
								}
							}(),
							nodebuffer: function() {
								try {
									return i.nodebuffer && 1 === String.fromCharCode.apply(null, s.allocBuffer(1)).length
								} catch (e) {
									return !1
								}
							}()
						}
					};

					function l(e) {
						var t = 65536,
							i = r.getTypeOf(e),
							n = !0;
						if ("uint8array" === i ? n = h.applyCanBeUsed.uint8array : "nodebuffer" === i && (n = h.applyCanBeUsed.nodebuffer), n)
							for (; 1 < t;) try {
								return h.stringifyByChunk(e, i, t)
							} catch (e) {
								t = Math.floor(t / 2)
							}
						return h.stringifyByChar(e)
					}

					function u(e, t) {
						for (var r = 0; r < e.length; r++) t[r] = e[r];
						return t
					}
					r.applyFromCharCode = l;
					var d = {};
					d.string = {
						string: o,
						array: function(e) {
							return c(e, new Array(e.length))
						},
						arraybuffer: function(e) {
							return d.string.uint8array(e).buffer
						},
						uint8array: function(e) {
							return c(e, new Uint8Array(e.length))
						},
						nodebuffer: function(e) {
							return c(e, s.allocBuffer(e.length))
						}
					}, d.array = {
						string: l,
						array: o,
						arraybuffer: function(e) {
							return new Uint8Array(e).buffer
						},
						uint8array: function(e) {
							return new Uint8Array(e)
						},
						nodebuffer: function(e) {
							return s.newBufferFrom(e)
						}
					}, d.arraybuffer = {
						string: function(e) {
							return l(new Uint8Array(e))
						},
						array: function(e) {
							return u(new Uint8Array(e), new Array(e.byteLength))
						},
						arraybuffer: o,
						uint8array: function(e) {
							return new Uint8Array(e)
						},
						nodebuffer: function(e) {
							return s.newBufferFrom(new Uint8Array(e))
						}
					}, d.uint8array = {
						string: l,
						array: function(e) {
							return u(e, new Array(e.length))
						},
						arraybuffer: function(e) {
							return e.buffer
						},
						uint8array: o,
						nodebuffer: function(e) {
							return s.newBufferFrom(e)
						}
					}, d.nodebuffer = {
						string: l,
						array: function(e) {
							return u(e, new Array(e.length))
						},
						arraybuffer: function(e) {
							return d.nodebuffer.uint8array(e).buffer
						},
						uint8array: function(e) {
							return u(e, new Uint8Array(e.length))
						},
						nodebuffer: o
					}, r.transformTo = function(e, t) {
						if (t = t || "", !e) return t;
						r.checkSupport(e);
						var i = r.getTypeOf(t);
						return d[i][e](t)
					}, r.resolve = function(e) {
						for (var t = e.split("/"), r = [], i = 0; i < t.length; i++) {
							var n = t[i];
							"." === n || "" === n && 0 !== i && i !== t.length - 1 || (".." === n ? r.pop() : r.push(n))
						}
						return r.join("/")
					}, r.getTypeOf = function(e) {
						return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : i.nodebuffer && s.isBuffer(e) ? "nodebuffer" : i.uint8array && e instanceof Uint8Array ? "uint8array" : i.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0
					}, r.checkSupport = function(e) {
						if (!i[e.toLowerCase()]) throw new Error(e + " is not supported by this platform")
					}, r.MAX_VALUE_16BITS = 65535, r.MAX_VALUE_32BITS = -1, r.pretty = function(e) {
						var t, r, i = "";
						for (r = 0; r < (e || "").length; r++) i += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
						return i
					}, r.delay = function(e, t, r) {
						setImmediate((function() {
							e.apply(r || null, t || [])
						}))
					}, r.inherits = function(e, t) {
						function r() {}
						r.prototype = t.prototype, e.prototype = new r
					}, r.extend = function() {
						var e, t, r = {};
						for (e = 0; e < arguments.length; e++)
							for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
						return r
					}, r.prepareContent = function(e, t, s, o, h) {
						return a.Promise.resolve(t).then((function(e) {
							return i.blob && (e instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e))) && "undefined" != typeof FileReader ? new a.Promise((function(t, r) {
								var i = new FileReader;
								i.onload = function(e) {
									t(e.target.result)
								}, i.onerror = function(e) {
									r(e.target.error)
								}, i.readAsArrayBuffer(e)
							})) : e
						})).then((function(t) {
							var l = r.getTypeOf(t);
							return l ? ("arraybuffer" === l ? t = r.transformTo("uint8array", t) : "string" === l && (h ? t = n.decode(t) : s && !0 !== o && (t = function(e) {
								return c(e, i.uint8array ? new Uint8Array(e.length) : new Array(e.length))
							}(t))), t) : a.Promise.reject(new Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
						}))
					}
				}, {
					"./base64": 1,
					"./external": 6,
					"./nodejsUtils": 14,
					"./support": 30,
					setimmediate: 54
				}],
				33: [function(e, t, r) {
					"use strict";
					var i = e("./reader/readerFor"),
						n = e("./utils"),
						s = e("./signature"),
						a = e("./zipEntry"),
						o = e("./support");

					function c(e) {
						this.files = [], this.loadOptions = e
					}
					c.prototype = {
						checkSignature: function(e) {
							if (!this.reader.readAndCheckSignature(e)) {
								this.reader.index -= 4;
								var t = this.reader.readString(4);
								throw new Error("Corrupted zip or bug: unexpected signature (" + n.pretty(t) + ", expected " + n.pretty(e) + ")")
							}
						},
						isSignature: function(e, t) {
							var r = this.reader.index;
							this.reader.setIndex(e);
							var i = this.reader.readString(4) === t;
							return this.reader.setIndex(r), i
						},
						readBlockEndOfCentral: function() {
							this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
							var e = this.reader.readData(this.zipCommentLength),
								t = o.uint8array ? "uint8array" : "array",
								r = n.transformTo(t, e);
							this.zipComment = this.loadOptions.decodeFileName(r)
						},
						readBlockZip64EndOfCentral: function() {
							this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
							for (var e, t, r, i = this.zip64EndOfCentralSize - 44; 0 < i;) e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
								id: e,
								length: t,
								value: r
							}
						},
						readBlockZip64EndOfCentralLocator: function() {
							if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
						},
						readLocalFiles: function() {
							var e, t;
							for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes()
						},
						readCentralDir: function() {
							var e;
							for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e = new a({
								zip64: this.zip64
							}, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
							if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
						},
						readEndOfCentral: function() {
							var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
							if (e < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
							this.reader.setIndex(e);
							var t = e;
							if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS || this.centralDirRecords === n.MAX_VALUE_16BITS || this.centralDirSize === n.MAX_VALUE_32BITS || this.centralDirOffset === n.MAX_VALUE_32BITS) {
								if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
								if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
								this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
							}
							var r = this.centralDirOffset + this.centralDirSize;
							this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
							var i = t - r;
							if (0 < i) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = i);
							else if (i < 0) throw new Error("Corrupted zip: missing " + Math.abs(i) + " bytes.")
						},
						prepareReader: function(e) {
							this.reader = i(e)
						},
						load: function(e) {
							this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
						}
					}, t.exports = c
				}, {
					"./reader/readerFor": 22,
					"./signature": 23,
					"./support": 30,
					"./utils": 32,
					"./zipEntry": 34
				}],
				34: [function(e, t, r) {
					"use strict";
					var i = e("./reader/readerFor"),
						n = e("./utils"),
						s = e("./compressedObject"),
						a = e("./crc32"),
						o = e("./utf8"),
						c = e("./compressions"),
						h = e("./support");

					function l(e, t) {
						this.options = e, this.loadOptions = t
					}
					l.prototype = {
						isEncrypted: function() {
							return !(1 & ~this.bitFlag)
						},
						useUTF8: function() {
							return !(2048 & ~this.bitFlag)
						},
						readLocalPart: function(e) {
							var t, r;
							if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
							if (null === (t = function(e) {
									for (var t in c)
										if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e) return c[t];
									return null
								}(this.compressionMethod))) throw new Error("Corrupted zip : compression " + n.pretty(this.compressionMethod) + " unknown (inner file : " + n.transformTo("string", this.fileName) + ")");
							this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize))
						},
						readCentralPart: function(e) {
							this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
							var t = e.readInt(2);
							if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
							e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength)
						},
						processAttributes: function() {
							this.unixPermissions = null, this.dosPermissions = null;
							var e = this.versionMadeBy >> 8;
							this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0)
						},
						parseZIP64ExtraField: function() {
							if (this.extraFields[1]) {
								var e = i(this.extraFields[1].value);
								this.uncompressedSize === n.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === n.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === n.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === n.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4))
							}
						},
						readExtraFields: function(e) {
							var t, r, i, n = e.index + this.extraFieldsLength;
							for (this.extraFields || (this.extraFields = {}); e.index + 4 < n;) t = e.readInt(2), r = e.readInt(2), i = e.readData(r), this.extraFields[t] = {
								id: t,
								length: r,
								value: i
							};
							e.setIndex(n)
						},
						handleUTF8: function() {
							var e = h.uint8array ? "uint8array" : "array";
							if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
							else {
								var t = this.findExtraFieldUnicodePath();
								if (null !== t) this.fileNameStr = t;
								else {
									var r = n.transformTo(e, this.fileName);
									this.fileNameStr = this.loadOptions.decodeFileName(r)
								}
								var i = this.findExtraFieldUnicodeComment();
								if (null !== i) this.fileCommentStr = i;
								else {
									var s = n.transformTo(e, this.fileComment);
									this.fileCommentStr = this.loadOptions.decodeFileName(s)
								}
							}
						},
						findExtraFieldUnicodePath: function() {
							var e = this.extraFields[28789];
							if (e) {
								var t = i(e.value);
								return 1 !== t.readInt(1) || a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
							}
							return null
						},
						findExtraFieldUnicodeComment: function() {
							var e = this.extraFields[25461];
							if (e) {
								var t = i(e.value);
								return 1 !== t.readInt(1) || a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
							}
							return null
						}
					}, t.exports = l
				}, {
					"./compressedObject": 2,
					"./compressions": 3,
					"./crc32": 4,
					"./reader/readerFor": 22,
					"./support": 30,
					"./utf8": 31,
					"./utils": 32
				}],
				35: [function(e, t, r) {
					"use strict";

					function i(e, t, r) {
						this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
							compression: r.compression,
							compressionOptions: r.compressionOptions
						}
					}
					var n = e("./stream/StreamHelper"),
						s = e("./stream/DataWorker"),
						a = e("./utf8"),
						o = e("./compressedObject"),
						c = e("./stream/GenericWorker");
					i.prototype = {
						internalStream: function(e) {
							var t = null,
								r = "string";
							try {
								if (!e) throw new Error("No output type specified.");
								var i = "string" === (r = e.toLowerCase()) || "text" === r;
								"binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
								var s = !this._dataBinary;
								s && !i && (t = t.pipe(new a.Utf8EncodeWorker)), !s && i && (t = t.pipe(new a.Utf8DecodeWorker))
							} catch (e) {
								(t = new c("error")).error(e)
							}
							return new n(t, r, "")
						},
						async: function(e, t) {
							return this.internalStream(e).accumulate(t)
						},
						nodeStream: function(e, t) {
							return this.internalStream(e || "nodebuffer").toNodejsStream(t)
						},
						_compressWorker: function(e, t) {
							if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
							var r = this._decompressWorker();
							return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker)), o.createWorkerFrom(r, e, t)
						},
						_decompressWorker: function() {
							return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof c ? this._data : new s(this._data)
						}
					};
					for (var h = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
						}, u = 0; u < h.length; u++) i.prototype[h[u]] = l;
					t.exports = i
				}, {
					"./compressedObject": 2,
					"./stream/DataWorker": 27,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31
				}],
				36: [function(e, t, i) {
					(function(e) {
						"use strict";
						var r, i, n = e.MutationObserver || e.WebKitMutationObserver;
						if (n) {
							var s = 0,
								a = new n(l),
								o = e.document.createTextNode("");
							a.observe(o, {
								characterData: !0
							}), r = function() {
								o.data = s = ++s % 2
							}
						} else if (e.setImmediate || void 0 === e.MessageChannel) r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
							var t = e.document.createElement("script");
							t.onreadystatechange = function() {
								l(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
							}, e.document.documentElement.appendChild(t)
						} : function() {
							setTimeout(l, 0)
						};
						else {
							var c = new e.MessageChannel;
							c.port1.onmessage = l, r = function() {
								c.port2.postMessage(0)
							}
						}
						var h = [];

						function l() {
							var e, t;
							i = !0;
							for (var r = h.length; r;) {
								for (t = h, h = [], e = -1; ++e < r;) t[e]();
								r = h.length
							}
							i = !1
						}
						t.exports = function(e) {
							1 !== h.push(e) || i || r()
						}
					}).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
				}, {}],
				37: [function(e, t, r) {
					"use strict";
					var i = e("immediate");

					function n() {}
					var s = {},
						a = ["REJECTED"],
						o = ["FULFILLED"],
						c = ["PENDING"];

					function h(e) {
						if ("function" != typeof e) throw new TypeError("resolver must be a function");
						this.state = c, this.queue = [], this.outcome = void 0, e !== n && f(this, e)
					}

					function l(e, t, r) {
						this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected)
					}

					function u(e, t, r) {
						i((function() {
							var i;
							try {
								i = t(r)
							} catch (i) {
								return s.reject(e, i)
							}
							i === e ? s.reject(e, new TypeError("Cannot resolve promise with itself")) : s.resolve(e, i)
						}))
					}

					function d(e) {
						var t = e && e.then;
						if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
							t.apply(e, arguments)
						}
					}

					function f(e, t) {
						var r = !1;

						function i(t) {
							r || (r = !0, s.reject(e, t))
						}

						function n(t) {
							r || (r = !0, s.resolve(e, t))
						}
						var a = p((function() {
							t(n, i)
						}));
						"error" === a.status && i(a.value)
					}

					function p(e, t) {
						var r = {};
						try {
							r.value = e(t), r.status = "success"
						} catch (e) {
							r.status = "error", r.value = e
						}
						return r
					}(t.exports = h).prototype.finally = function(e) {
						if ("function" != typeof e) return this;
						var t = this.constructor;
						return this.then((function(r) {
							return t.resolve(e()).then((function() {
								return r
							}))
						}), (function(r) {
							return t.resolve(e()).then((function() {
								throw r
							}))
						}))
					}, h.prototype.catch = function(e) {
						return this.then(null, e)
					}, h.prototype.then = function(e, t) {
						if ("function" != typeof e && this.state === o || "function" != typeof t && this.state === a) return this;
						var r = new this.constructor(n);
						return this.state !== c ? u(r, this.state === o ? e : t, this.outcome) : this.queue.push(new l(r, e, t)), r
					}, l.prototype.callFulfilled = function(e) {
						s.resolve(this.promise, e)
					}, l.prototype.otherCallFulfilled = function(e) {
						u(this.promise, this.onFulfilled, e)
					}, l.prototype.callRejected = function(e) {
						s.reject(this.promise, e)
					}, l.prototype.otherCallRejected = function(e) {
						u(this.promise, this.onRejected, e)
					}, s.resolve = function(e, t) {
						var r = p(d, t);
						if ("error" === r.status) return s.reject(e, r.value);
						var i = r.value;
						if (i) f(e, i);
						else {
							e.state = o, e.outcome = t;
							for (var n = -1, a = e.queue.length; ++n < a;) e.queue[n].callFulfilled(t)
						}
						return e
					}, s.reject = function(e, t) {
						e.state = a, e.outcome = t;
						for (var r = -1, i = e.queue.length; ++r < i;) e.queue[r].callRejected(t);
						return e
					}, h.resolve = function(e) {
						return e instanceof this ? e : s.resolve(new this(n), e)
					}, h.reject = function(e) {
						var t = new this(n);
						return s.reject(t, e)
					}, h.all = function(e) {
						var t = this;
						if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
						var r = e.length,
							i = !1;
						if (!r) return this.resolve([]);
						for (var a = new Array(r), o = 0, c = -1, h = new this(n); ++c < r;) l(e[c], c);
						return h;

						function l(e, n) {
							t.resolve(e).then((function(e) {
								a[n] = e, ++o !== r || i || (i = !0, s.resolve(h, a))
							}), (function(e) {
								i || (i = !0, s.reject(h, e))
							}))
						}
					}, h.race = function(e) {
						var t = this;
						if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
						var r = e.length,
							i = !1;
						if (!r) return this.resolve([]);
						for (var a, o = -1, c = new this(n); ++o < r;) a = e[o], t.resolve(a).then((function(e) {
							i || (i = !0, s.resolve(c, e))
						}), (function(e) {
							i || (i = !0, s.reject(c, e))
						}));
						return c
					}
				}, {
					immediate: 36
				}],
				38: [function(e, t, r) {
					"use strict";
					var i = {};
					(0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = i
				}, {
					"./lib/deflate": 39,
					"./lib/inflate": 40,
					"./lib/utils/common": 41,
					"./lib/zlib/constants": 44
				}],
				39: [function(e, t, r) {
					"use strict";
					var i = e("./zlib/deflate"),
						n = e("./utils/common"),
						s = e("./utils/strings"),
						a = e("./zlib/messages"),
						o = e("./zlib/zstream"),
						c = Object.prototype.toString,
						h = 0,
						l = -1,
						u = 0,
						d = 8;

					function f(e) {
						if (!(this instanceof f)) return new f(e);
						this.options = n.assign({
							level: l,
							method: d,
							chunkSize: 16384,
							windowBits: 15,
							memLevel: 8,
							strategy: u,
							to: ""
						}, e || {});
						var t = this.options;
						t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o, this.strm.avail_out = 0;
						var r = i.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
						if (r !== h) throw new Error(a[r]);
						if (t.header && i.deflateSetHeader(this.strm, t.header), t.dictionary) {
							var p;
							if (p = "string" == typeof t.dictionary ? s.string2buf(t.dictionary) : "[object ArrayBuffer]" === c.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = i.deflateSetDictionary(this.strm, p)) !== h) throw new Error(a[r]);
							this._dict_set = !0
						}
					}

					function p(e, t) {
						var r = new f(t);
						if (r.push(e, !0), r.err) throw r.msg || a[r.err];
						return r.result
					}
					f.prototype.push = function(e, t) {
						var r, a, o = this.strm,
							l = this.options.chunkSize;
						if (this.ended) return !1;
						a = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? o.input = s.string2buf(e) : "[object ArrayBuffer]" === c.call(e) ? o.input = new Uint8Array(e) : o.input = e, o.next_in = 0, o.avail_in = o.input.length;
						do {
							if (0 === o.avail_out && (o.output = new n.Buf8(l), o.next_out = 0, o.avail_out = l), 1 !== (r = i.deflate(o, a)) && r !== h) return this.onEnd(r), !(this.ended = !0);
							0 !== o.avail_out && (0 !== o.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(s.buf2binstring(n.shrinkBuf(o.output, o.next_out))) : this.onData(n.shrinkBuf(o.output, o.next_out)))
						} while ((0 < o.avail_in || 0 === o.avail_out) && 1 !== r);
						return 4 === a ? (r = i.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === h) : 2 !== a || (this.onEnd(h), !(o.avail_out = 0))
					}, f.prototype.onData = function(e) {
						this.chunks.push(e)
					}, f.prototype.onEnd = function(e) {
						e === h && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
					}, r.Deflate = f, r.deflate = p, r.deflateRaw = function(e, t) {
						return (t = t || {}).raw = !0, p(e, t)
					}, r.gzip = function(e, t) {
						return (t = t || {}).gzip = !0, p(e, t)
					}
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/deflate": 46,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				40: [function(e, t, r) {
					"use strict";
					var i = e("./zlib/inflate"),
						n = e("./utils/common"),
						s = e("./utils/strings"),
						a = e("./zlib/constants"),
						o = e("./zlib/messages"),
						c = e("./zlib/zstream"),
						h = e("./zlib/gzheader"),
						l = Object.prototype.toString;

					function u(e) {
						if (!(this instanceof u)) return new u(e);
						this.options = n.assign({
							chunkSize: 16384,
							windowBits: 0,
							to: ""
						}, e || {});
						var t = this.options;
						t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c, this.strm.avail_out = 0;
						var r = i.inflateInit2(this.strm, t.windowBits);
						if (r !== a.Z_OK) throw new Error(o[r]);
						this.header = new h, i.inflateGetHeader(this.strm, this.header)
					}

					function d(e, t) {
						var r = new u(t);
						if (r.push(e, !0), r.err) throw r.msg || o[r.err];
						return r.result
					}
					u.prototype.push = function(e, t) {
						var r, o, c, h, u, d, f = this.strm,
							p = this.options.chunkSize,
							_ = this.options.dictionary,
							g = !1;
						if (this.ended) return !1;
						o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH, "string" == typeof e ? f.input = s.binstring2buf(e) : "[object ArrayBuffer]" === l.call(e) ? f.input = new Uint8Array(e) : f.input = e, f.next_in = 0, f.avail_in = f.input.length;
						do {
							if (0 === f.avail_out && (f.output = new n.Buf8(p), f.next_out = 0, f.avail_out = p), (r = i.inflate(f, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && _ && (d = "string" == typeof _ ? s.string2buf(_) : "[object ArrayBuffer]" === l.call(_) ? new Uint8Array(_) : _, r = i.inflateSetDictionary(this.strm, d)), r === a.Z_BUF_ERROR && !0 === g && (r = a.Z_OK, g = !1), r !== a.Z_STREAM_END && r !== a.Z_OK) return this.onEnd(r), !(this.ended = !0);
							f.next_out && (0 !== f.avail_out && r !== a.Z_STREAM_END && (0 !== f.avail_in || o !== a.Z_FINISH && o !== a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (c = s.utf8border(f.output, f.next_out), h = f.next_out - c, u = s.buf2string(f.output, c), f.next_out = h, f.avail_out = p - h, h && n.arraySet(f.output, f.output, c, h, 0), this.onData(u)) : this.onData(n.shrinkBuf(f.output, f.next_out)))), 0 === f.avail_in && 0 === f.avail_out && (g = !0)
						} while ((0 < f.avail_in || 0 === f.avail_out) && r !== a.Z_STREAM_END);
						return r === a.Z_STREAM_END && (o = a.Z_FINISH), o === a.Z_FINISH ? (r = i.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === a.Z_OK) : o !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), !(f.avail_out = 0))
					}, u.prototype.onData = function(e) {
						this.chunks.push(e)
					}, u.prototype.onEnd = function(e) {
						e === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
					}, r.Inflate = u, r.inflate = d, r.inflateRaw = function(e, t) {
						return (t = t || {}).raw = !0, d(e, t)
					}, r.ungzip = d
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/constants": 44,
					"./zlib/gzheader": 47,
					"./zlib/inflate": 49,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				41: [function(e, t, r) {
					"use strict";
					var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
					r.assign = function(e) {
						for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
							var r = t.shift();
							if (r) {
								if ("object" != typeof r) throw new TypeError(r + "must be non-object");
								for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
							}
						}
						return e
					}, r.shrinkBuf = function(e, t) {
						return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
					};
					var n = {
							arraySet: function(e, t, r, i, n) {
								if (t.subarray && e.subarray) e.set(t.subarray(r, r + i), n);
								else
									for (var s = 0; s < i; s++) e[n + s] = t[r + s]
							},
							flattenChunks: function(e) {
								var t, r, i, n, s, a;
								for (t = i = 0, r = e.length; t < r; t++) i += e[t].length;
								for (a = new Uint8Array(i), t = n = 0, r = e.length; t < r; t++) s = e[t], a.set(s, n), n += s.length;
								return a
							}
						},
						s = {
							arraySet: function(e, t, r, i, n) {
								for (var s = 0; s < i; s++) e[n + s] = t[r + s]
							},
							flattenChunks: function(e) {
								return [].concat.apply([], e)
							}
						};
					r.setTyped = function(e) {
						e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, n)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s))
					}, r.setTyped(i)
				}, {}],
				42: [function(e, t, r) {
					"use strict";
					var i = e("./common"),
						n = !0,
						s = !0;
					try {
						String.fromCharCode.apply(null, [0])
					} catch (e) {
						n = !1
					}
					try {
						String.fromCharCode.apply(null, new Uint8Array(1))
					} catch (e) {
						s = !1
					}
					for (var a = new i.Buf8(256), o = 0; o < 256; o++) a[o] = 252 <= o ? 6 : 248 <= o ? 5 : 240 <= o ? 4 : 224 <= o ? 3 : 192 <= o ? 2 : 1;

					function c(e, t) {
						if (t < 65537 && (e.subarray && s || !e.subarray && n)) return String.fromCharCode.apply(null, i.shrinkBuf(e, t));
						for (var r = "", a = 0; a < t; a++) r += String.fromCharCode(e[a]);
						return r
					}
					a[254] = a[254] = 1, r.string2buf = function(e) {
						var t, r, n, s, a, o = e.length,
							c = 0;
						for (s = 0; s < o; s++) 55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), s++), c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
						for (t = new i.Buf8(c), s = a = 0; a < c; s++) 55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), s++), r < 128 ? t[a++] = r : (r < 2048 ? t[a++] = 192 | r >>> 6 : (r < 65536 ? t[a++] = 224 | r >>> 12 : (t[a++] = 240 | r >>> 18, t[a++] = 128 | r >>> 12 & 63), t[a++] = 128 | r >>> 6 & 63), t[a++] = 128 | 63 & r);
						return t
					}, r.buf2binstring = function(e) {
						return c(e, e.length)
					}, r.binstring2buf = function(e) {
						for (var t = new i.Buf8(e.length), r = 0, n = t.length; r < n; r++) t[r] = e.charCodeAt(r);
						return t
					}, r.buf2string = function(e, t) {
						var r, i, n, s, o = t || e.length,
							h = new Array(2 * o);
						for (r = i = 0; r < o;)
							if ((n = e[r++]) < 128) h[i++] = n;
							else if (4 < (s = a[n])) h[i++] = 65533, r += s - 1;
						else {
							for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < o;) n = n << 6 | 63 & e[r++], s--;
							1 < s ? h[i++] = 65533 : n < 65536 ? h[i++] = n : (n -= 65536, h[i++] = 55296 | n >> 10 & 1023, h[i++] = 56320 | 1023 & n)
						}
						return c(h, i)
					}, r.utf8border = function(e, t) {
						var r;
						for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
						return r < 0 || 0 === r ? t : r + a[e[r]] > t ? r : t
					}
				}, {
					"./common": 41
				}],
				43: [function(e, t, r) {
					"use strict";
					t.exports = function(e, t, r, i) {
						for (var n = 65535 & e, s = e >>> 16 & 65535, a = 0; 0 !== r;) {
							for (r -= a = 2e3 < r ? 2e3 : r; s = s + (n = n + t[i++] | 0) | 0, --a;);
							n %= 65521, s %= 65521
						}
						return n | s << 16
					}
				}, {}],
				44: [function(e, t, r) {
					"use strict";
					t.exports = {
						Z_NO_FLUSH: 0,
						Z_PARTIAL_FLUSH: 1,
						Z_SYNC_FLUSH: 2,
						Z_FULL_FLUSH: 3,
						Z_FINISH: 4,
						Z_BLOCK: 5,
						Z_TREES: 6,
						Z_OK: 0,
						Z_STREAM_END: 1,
						Z_NEED_DICT: 2,
						Z_ERRNO: -1,
						Z_STREAM_ERROR: -2,
						Z_DATA_ERROR: -3,
						Z_BUF_ERROR: -5,
						Z_NO_COMPRESSION: 0,
						Z_BEST_SPEED: 1,
						Z_BEST_COMPRESSION: 9,
						Z_DEFAULT_COMPRESSION: -1,
						Z_FILTERED: 1,
						Z_HUFFMAN_ONLY: 2,
						Z_RLE: 3,
						Z_FIXED: 4,
						Z_DEFAULT_STRATEGY: 0,
						Z_BINARY: 0,
						Z_TEXT: 1,
						Z_UNKNOWN: 2,
						Z_DEFLATED: 8
					}
				}, {}],
				45: [function(e, t, r) {
					"use strict";
					var i = function() {
						for (var e, t = [], r = 0; r < 256; r++) {
							e = r;
							for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
							t[r] = e
						}
						return t
					}();
					t.exports = function(e, t, r, n) {
						var s = i,
							a = n + r;
						e ^= -1;
						for (var o = n; o < a; o++) e = e >>> 8 ^ s[255 & (e ^ t[o])];
						return ~e
					}
				}, {}],
				46: [function(e, t, r) {
					"use strict";
					var i, n = e("../utils/common"),
						s = e("./trees"),
						a = e("./adler32"),
						o = e("./crc32"),
						c = e("./messages"),
						h = 0,
						l = 4,
						u = 0,
						d = -2,
						f = -1,
						p = 4,
						_ = 2,
						g = 8,
						m = 9,
						w = 286,
						y = 30,
						v = 19,
						b = 2 * w + 1,
						k = 15,
						S = 3,
						x = 258,
						C = x + S + 1,
						E = 42,
						A = 113,
						z = 1,
						I = 2,
						T = 3,
						R = 4;

					function O(e, t) {
						return e.msg = c[t], t
					}

					function B(e) {
						return (e << 1) - (4 < e ? 9 : 0)
					}

					function P(e) {
						for (var t = e.length; 0 <= --t;) e[t] = 0
					}

					function U(e) {
						var t = e.state,
							r = t.pending;
						r > e.avail_out && (r = e.avail_out), 0 !== r && (n.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0))
					}

					function N(e, t) {
						s._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, U(e.strm)
					}

					function D(e, t) {
						e.pending_buf[e.pending++] = t
					}

					function F(e, t) {
						e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
					}

					function j(e, t) {
						var r, i, n = e.max_chain_length,
							s = e.strstart,
							a = e.prev_length,
							o = e.nice_match,
							c = e.strstart > e.w_size - C ? e.strstart - (e.w_size - C) : 0,
							h = e.window,
							l = e.w_mask,
							u = e.prev,
							d = e.strstart + x,
							f = h[s + a - 1],
							p = h[s + a];
						e.prev_length >= e.good_match && (n >>= 2), o > e.lookahead && (o = e.lookahead);
						do {
							if (h[(r = t) + a] === p && h[r + a - 1] === f && h[r] === h[s] && h[++r] === h[s + 1]) {
								s += 2, r++;
								do {} while (h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && s < d);
								if (i = x - (d - s), s = d - x, a < i) {
									if (e.match_start = t, o <= (a = i)) break;
									f = h[s + a - 1], p = h[s + a]
								}
							}
						} while ((t = u[t & l]) > c && 0 != --n);
						return a <= e.lookahead ? a : e.lookahead
					}

					function L(e) {
						var t, r, i, s, c, h, l, u, d, f, p = e.w_size;
						do {
							if (s = e.window_size - e.lookahead - e.strstart, e.strstart >= p + (p - C)) {
								for (n.arraySet(e.window, e.window, p, p, 0), e.match_start -= p, e.strstart -= p, e.block_start -= p, t = r = e.hash_size; i = e.head[--t], e.head[t] = p <= i ? i - p : 0, --r;);
								for (t = r = p; i = e.prev[--t], e.prev[t] = p <= i ? i - p : 0, --r;);
								s += p
							}
							if (0 === e.strm.avail_in) break;
							if (h = e.strm, l = e.window, u = e.strstart + e.lookahead, f = void 0, (d = s) < (f = h.avail_in) && (f = d), r = 0 === f ? 0 : (h.avail_in -= f, n.arraySet(l, h.input, h.next_in, f, u), 1 === h.state.wrap ? h.adler = a(h.adler, l, f, u) : 2 === h.state.wrap && (h.adler = o(h.adler, l, f, u)), h.next_in += f, h.total_in += f, f), e.lookahead += r, e.lookahead + e.insert >= S)
								for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + S - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < S)););
						} while (e.lookahead < C && 0 !== e.strm.avail_in)
					}

					function W(e, t) {
						for (var r, i;;) {
							if (e.lookahead < C) {
								if (L(e), e.lookahead < C && t === h) return z;
								if (0 === e.lookahead) break
							}
							if (r = 0, e.lookahead >= S && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + S - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - C && (e.match_length = j(e, r)), e.match_length >= S)
								if (i = s._tr_tally(e, e.strstart - e.match_start, e.match_length - S), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= S) {
									for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + S - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
									e.strstart++
								} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
							else i = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
							if (i && (N(e, !1), 0 === e.strm.avail_out)) return z
						}
						return e.insert = e.strstart < S - 1 ? e.strstart : S - 1, t === l ? (N(e, !0), 0 === e.strm.avail_out ? T : R) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? z : I
					}

					function M(e, t) {
						for (var r, i, n;;) {
							if (e.lookahead < C) {
								if (L(e), e.lookahead < C && t === h) return z;
								if (0 === e.lookahead) break
							}
							if (r = 0, e.lookahead >= S && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + S - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = S - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - C && (e.match_length = j(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === S && 4096 < e.strstart - e.match_start) && (e.match_length = S - 1)), e.prev_length >= S && e.match_length <= e.prev_length) {
								for (n = e.strstart + e.lookahead - S, i = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - S), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= n && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + S - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
								if (e.match_available = 0, e.match_length = S - 1, e.strstart++, i && (N(e, !1), 0 === e.strm.avail_out)) return z
							} else if (e.match_available) {
								if ((i = s._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return z
							} else e.match_available = 1, e.strstart++, e.lookahead--
						}
						return e.match_available && (i = s._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < S - 1 ? e.strstart : S - 1, t === l ? (N(e, !0), 0 === e.strm.avail_out ? T : R) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? z : I
					}

					function H(e, t, r, i, n) {
						this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = i, this.func = n
					}

					function Z() {
						this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new n.Buf16(2 * b), this.dyn_dtree = new n.Buf16(2 * (2 * y + 1)), this.bl_tree = new n.Buf16(2 * (2 * v + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new n.Buf16(k + 1), this.heap = new n.Buf16(2 * w + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new n.Buf16(2 * w + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
					}

					function q(e) {
						var t;
						return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = _, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : A, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = h, s._tr_init(t), u) : O(e, d)
					}

					function K(e) {
						var t = q(e);
						return t === u && function(e) {
							e.window_size = 2 * e.w_size, P(e.head), e.max_lazy_match = i[e.level].max_lazy, e.good_match = i[e.level].good_length, e.nice_match = i[e.level].nice_length, e.max_chain_length = i[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = S - 1, e.match_available = 0, e.ins_h = 0
						}(e.state), t
					}

					function $(e, t, r, i, s, a) {
						if (!e) return d;
						var o = 1;
						if (t === f && (t = 6), i < 0 ? (o = 0, i = -i) : 15 < i && (o = 2, i -= 16), s < 1 || m < s || r !== g || i < 8 || 15 < i || t < 0 || 9 < t || a < 0 || p < a) return O(e, d);
						8 === i && (i = 9);
						var c = new Z;
						return (e.state = c).strm = e, c.wrap = o, c.gzhead = null, c.w_bits = i, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = s + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + S - 1) / S), c.window = new n.Buf8(2 * c.w_size), c.head = new n.Buf16(c.hash_size), c.prev = new n.Buf16(c.w_size), c.lit_bufsize = 1 << s + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new n.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = a, c.method = r, K(e)
					}
					i = [new H(0, 0, 0, 0, (function(e, t) {
						var r = 65535;
						for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (L(e), 0 === e.lookahead && t === h) return z;
								if (0 === e.lookahead) break
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var i = e.block_start + r;
							if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, N(e, !1), 0 === e.strm.avail_out)) return z;
							if (e.strstart - e.block_start >= e.w_size - C && (N(e, !1), 0 === e.strm.avail_out)) return z
						}
						return e.insert = 0, t === l ? (N(e, !0), 0 === e.strm.avail_out ? T : R) : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), z)
					})), new H(4, 4, 8, 4, W), new H(4, 5, 16, 8, W), new H(4, 6, 32, 32, W), new H(4, 4, 16, 16, M), new H(8, 16, 32, 32, M), new H(8, 16, 128, 128, M), new H(8, 32, 128, 256, M), new H(32, 128, 258, 1024, M), new H(32, 258, 258, 4096, M)], r.deflateInit = function(e, t) {
						return $(e, t, g, 15, 8, 0)
					}, r.deflateInit2 = $, r.deflateReset = K, r.deflateResetKeep = q, r.deflateSetHeader = function(e, t) {
						return e && e.state ? 2 !== e.state.wrap ? d : (e.state.gzhead = t, u) : d
					}, r.deflate = function(e, t) {
						var r, n, a, c;
						if (!e || !e.state || 5 < t || t < 0) return e ? O(e, d) : d;
						if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== l) return O(e, 0 === e.avail_out ? -5 : d);
						if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === E)
							if (2 === n.wrap) e.adler = 0, D(n, 31), D(n, 139), D(n, 8), n.gzhead ? (D(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), D(n, 255 & n.gzhead.time), D(n, n.gzhead.time >> 8 & 255), D(n, n.gzhead.time >> 16 & 255), D(n, n.gzhead.time >> 24 & 255), D(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), D(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (D(n, 255 & n.gzhead.extra.length), D(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = o(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (D(n, 0), D(n, 0), D(n, 0), D(n, 0), D(n, 0), D(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), D(n, 3), n.status = A);
							else {
								var f = g + (n.w_bits - 8 << 4) << 8;
								f |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (f |= 32), f += 31 - f % 31, n.status = A, F(n, f), 0 !== n.strstart && (F(n, e.adler >>> 16), F(n, 65535 & e.adler)), e.adler = 1
							} if (69 === n.status)
							if (n.gzhead.extra) {
								for (a = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), U(e), a = n.pending, n.pending !== n.pending_buf_size));) D(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
								n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73)
							} else n.status = 73;
						if (73 === n.status)
							if (n.gzhead.name) {
								a = n.pending;
								do {
									if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), U(e), a = n.pending, n.pending === n.pending_buf_size)) {
										c = 1;
										break
									}
									c = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, D(n, c)
								} while (0 !== c);
								n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), 0 === c && (n.gzindex = 0, n.status = 91)
							} else n.status = 91;
						if (91 === n.status)
							if (n.gzhead.comment) {
								a = n.pending;
								do {
									if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), U(e), a = n.pending, n.pending === n.pending_buf_size)) {
										c = 1;
										break
									}
									c = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, D(n, c)
								} while (0 !== c);
								n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)), 0 === c && (n.status = 103)
							} else n.status = 103;
						if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && U(e), n.pending + 2 <= n.pending_buf_size && (D(n, 255 & e.adler), D(n, e.adler >> 8 & 255), e.adler = 0, n.status = A)) : n.status = A), 0 !== n.pending) {
							if (U(e), 0 === e.avail_out) return n.last_flush = -1, u
						} else if (0 === e.avail_in && B(t) <= B(r) && t !== l) return O(e, -5);
						if (666 === n.status && 0 !== e.avail_in) return O(e, -5);
						if (0 !== e.avail_in || 0 !== n.lookahead || t !== h && 666 !== n.status) {
							var p = 2 === n.strategy ? function(e, t) {
								for (var r;;) {
									if (0 === e.lookahead && (L(e), 0 === e.lookahead)) {
										if (t === h) return z;
										break
									}
									if (e.match_length = 0, r = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (N(e, !1), 0 === e.strm.avail_out)) return z
								}
								return e.insert = 0, t === l ? (N(e, !0), 0 === e.strm.avail_out ? T : R) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? z : I
							}(n, t) : 3 === n.strategy ? function(e, t) {
								for (var r, i, n, a, o = e.window;;) {
									if (e.lookahead <= x) {
										if (L(e), e.lookahead <= x && t === h) return z;
										if (0 === e.lookahead) break
									}
									if (e.match_length = 0, e.lookahead >= S && 0 < e.strstart && (i = o[n = e.strstart - 1]) === o[++n] && i === o[++n] && i === o[++n]) {
										a = e.strstart + x;
										do {} while (i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && n < a);
										e.match_length = x - (a - n), e.match_length > e.lookahead && (e.match_length = e.lookahead)
									}
									if (e.match_length >= S ? (r = s._tr_tally(e, 1, e.match_length - S), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (N(e, !1), 0 === e.strm.avail_out)) return z
								}
								return e.insert = 0, t === l ? (N(e, !0), 0 === e.strm.avail_out ? T : R) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? z : I
							}(n, t) : i[n.level].func(n, t);
							if (p !== T && p !== R || (n.status = 666), p === z || p === T) return 0 === e.avail_out && (n.last_flush = -1), u;
							if (p === I && (1 === t ? s._tr_align(n) : 5 !== t && (s._tr_stored_block(n, 0, 0, !1), 3 === t && (P(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), U(e), 0 === e.avail_out)) return n.last_flush = -1, u
						}
						return t !== l ? u : n.wrap <= 0 ? 1 : (2 === n.wrap ? (D(n, 255 & e.adler), D(n, e.adler >> 8 & 255), D(n, e.adler >> 16 & 255), D(n, e.adler >> 24 & 255), D(n, 255 & e.total_in), D(n, e.total_in >> 8 & 255), D(n, e.total_in >> 16 & 255), D(n, e.total_in >> 24 & 255)) : (F(n, e.adler >>> 16), F(n, 65535 & e.adler)), U(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? u : 1)
					}, r.deflateEnd = function(e) {
						var t;
						return e && e.state ? (t = e.state.status) !== E && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== A && 666 !== t ? O(e, d) : (e.state = null, t === A ? O(e, -3) : u) : d
					}, r.deflateSetDictionary = function(e, t) {
						var r, i, s, o, c, h, l, f, p = t.length;
						if (!e || !e.state) return d;
						if (2 === (o = (r = e.state).wrap) || 1 === o && r.status !== E || r.lookahead) return d;
						for (1 === o && (e.adler = a(e.adler, t, p, 0)), r.wrap = 0, p >= r.w_size && (0 === o && (P(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), f = new n.Buf8(r.w_size), n.arraySet(f, t, p - r.w_size, r.w_size, 0), t = f, p = r.w_size), c = e.avail_in, h = e.next_in, l = e.input, e.avail_in = p, e.next_in = 0, e.input = t, L(r); r.lookahead >= S;) {
							for (i = r.strstart, s = r.lookahead - (S - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + S - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, --s;);
							r.strstart = i, r.lookahead = S - 1, L(r)
						}
						return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = S - 1, r.match_available = 0, e.next_in = h, e.input = l, e.avail_in = c, r.wrap = o, u
					}, r.deflateInfo = "pako deflate (from Nodeca project)"
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./messages": 51,
					"./trees": 52
				}],
				47: [function(e, t, r) {
					"use strict";
					t.exports = function() {
						this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
					}
				}, {}],
				48: [function(e, t, r) {
					"use strict";
					t.exports = function(e, t) {
						var r, i, n, s, a, o, c, h, l, u, d, f, p, _, g, m, w, y, v, b, k, S, x, C, E;
						r = e.state, i = e.next_in, C = e.input, n = i + (e.avail_in - 5), s = e.next_out, E = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), c = r.dmax, h = r.wsize, l = r.whave, u = r.wnext, d = r.window, f = r.hold, p = r.bits, _ = r.lencode, g = r.distcode, m = (1 << r.lenbits) - 1, w = (1 << r.distbits) - 1;
						e: do {
							p < 15 && (f += C[i++] << p, p += 8, f += C[i++] << p, p += 8), y = _[f & m];
							t: for (;;) {
								if (f >>>= v = y >>> 24, p -= v, 0 == (v = y >>> 16 & 255)) E[s++] = 65535 & y;
								else {
									if (!(16 & v)) {
										if (!(64 & v)) {
											y = _[(65535 & y) + (f & (1 << v) - 1)];
											continue t
										}
										if (32 & v) {
											r.mode = 12;
											break e
										}
										e.msg = "invalid literal/length code", r.mode = 30;
										break e
									}
									b = 65535 & y, (v &= 15) && (p < v && (f += C[i++] << p, p += 8), b += f & (1 << v) - 1, f >>>= v, p -= v), p < 15 && (f += C[i++] << p, p += 8, f += C[i++] << p, p += 8), y = g[f & w];
									r: for (;;) {
										if (f >>>= v = y >>> 24, p -= v, !(16 & (v = y >>> 16 & 255))) {
											if (!(64 & v)) {
												y = g[(65535 & y) + (f & (1 << v) - 1)];
												continue r
											}
											e.msg = "invalid distance code", r.mode = 30;
											break e
										}
										if (k = 65535 & y, p < (v &= 15) && (f += C[i++] << p, (p += 8) < v && (f += C[i++] << p, p += 8)), c < (k += f & (1 << v) - 1)) {
											e.msg = "invalid distance too far back", r.mode = 30;
											break e
										}
										if (f >>>= v, p -= v, (v = s - a) < k) {
											if (l < (v = k - v) && r.sane) {
												e.msg = "invalid distance too far back", r.mode = 30;
												break e
											}
											if (x = d, (S = 0) === u) {
												if (S += h - v, v < b) {
													for (b -= v; E[s++] = d[S++], --v;);
													S = s - k, x = E
												}
											} else if (u < v) {
												if (S += h + u - v, (v -= u) < b) {
													for (b -= v; E[s++] = d[S++], --v;);
													if (S = 0, u < b) {
														for (b -= v = u; E[s++] = d[S++], --v;);
														S = s - k, x = E
													}
												}
											} else if (S += u - v, v < b) {
												for (b -= v; E[s++] = d[S++], --v;);
												S = s - k, x = E
											}
											for (; 2 < b;) E[s++] = x[S++], E[s++] = x[S++], E[s++] = x[S++], b -= 3;
											b && (E[s++] = x[S++], 1 < b && (E[s++] = x[S++]))
										} else {
											for (S = s - k; E[s++] = E[S++], E[s++] = E[S++], E[s++] = E[S++], 2 < (b -= 3););
											b && (E[s++] = E[S++], 1 < b && (E[s++] = E[S++]))
										}
										break
									}
								}
								break
							}
						} while (i < n && s < o);
						i -= b = p >> 3, f &= (1 << (p -= b << 3)) - 1, e.next_in = i, e.next_out = s, e.avail_in = i < n ? n - i + 5 : 5 - (i - n), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = f, r.bits = p
					}
				}, {}],
				49: [function(e, t, r) {
					"use strict";
					var i = e("../utils/common"),
						n = e("./adler32"),
						s = e("./crc32"),
						a = e("./inffast"),
						o = e("./inftrees"),
						c = 1,
						h = 2,
						l = 0,
						u = -2,
						d = 1,
						f = 852,
						p = 592;

					function _(e) {
						return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
					}

					function g() {
						this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
					}

					function m(e) {
						var t;
						return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = d, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new i.Buf32(f), t.distcode = t.distdyn = new i.Buf32(p), t.sane = 1, t.back = -1, l) : u
					}

					function w(e) {
						var t;
						return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, m(e)) : u
					}

					function y(e, t) {
						var r, i;
						return e && e.state ? (i = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? u : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = r, i.wbits = t, w(e))) : u
					}

					function v(e, t) {
						var r, i;
						return e ? (i = new g, (e.state = i).window = null, (r = y(e, t)) !== l && (e.state = null), r) : u
					}
					var b, k, S = !0;

					function x(e) {
						if (S) {
							var t;
							for (b = new i.Buf32(512), k = new i.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
							for (; t < 256;) e.lens[t++] = 9;
							for (; t < 280;) e.lens[t++] = 7;
							for (; t < 288;) e.lens[t++] = 8;
							for (o(c, e.lens, 0, 288, b, 0, e.work, {
									bits: 9
								}), t = 0; t < 32;) e.lens[t++] = 5;
							o(h, e.lens, 0, 32, k, 0, e.work, {
								bits: 5
							}), S = !1
						}
						e.lencode = b, e.lenbits = 9, e.distcode = k, e.distbits = 5
					}

					function C(e, t, r, n) {
						var s, a = e.state;
						return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new i.Buf8(a.wsize)), n >= a.wsize ? (i.arraySet(a.window, t, r - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (n < (s = a.wsize - a.wnext) && (s = n), i.arraySet(a.window, t, r - n, s, a.wnext), (n -= s) ? (i.arraySet(a.window, t, r - n, n, 0), a.wnext = n, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0
					}
					r.inflateReset = w, r.inflateReset2 = y, r.inflateResetKeep = m, r.inflateInit = function(e) {
						return v(e, 15)
					}, r.inflateInit2 = v, r.inflate = function(e, t) {
						var r, f, p, g, m, w, y, v, b, k, S, E, A, z, I, T, R, O, B, P, U, N, D, F, j = 0,
							L = new i.Buf8(4),
							W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
						if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return u;
						12 === (r = e.state).mode && (r.mode = 13), m = e.next_out, p = e.output, y = e.avail_out, g = e.next_in, f = e.input, w = e.avail_in, v = r.hold, b = r.bits, k = w, S = y, N = l;
						e: for (;;) switch (r.mode) {
							case d:
								if (0 === r.wrap) {
									r.mode = 13;
									break
								}
								for (; b < 16;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if (2 & r.wrap && 35615 === v) {
									L[r.check = 0] = 255 & v, L[1] = v >>> 8 & 255, r.check = s(r.check, L, 2, 0), b = v = 0, r.mode = 2;
									break
								}
								if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & v) << 8) + (v >> 8)) % 31) {
									e.msg = "incorrect header check", r.mode = 30;
									break
								}
								if (8 != (15 & v)) {
									e.msg = "unknown compression method", r.mode = 30;
									break
								}
								if (b -= 4, U = 8 + (15 & (v >>>= 4)), 0 === r.wbits) r.wbits = U;
								else if (U > r.wbits) {
									e.msg = "invalid window size", r.mode = 30;
									break
								}
								r.dmax = 1 << U, e.adler = r.check = 1, r.mode = 512 & v ? 10 : 12, b = v = 0;
								break;
							case 2:
								for (; b < 16;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if (r.flags = v, 8 != (255 & r.flags)) {
									e.msg = "unknown compression method", r.mode = 30;
									break
								}
								if (57344 & r.flags) {
									e.msg = "unknown header flags set", r.mode = 30;
									break
								}
								r.head && (r.head.text = v >> 8 & 1), 512 & r.flags && (L[0] = 255 & v, L[1] = v >>> 8 & 255, r.check = s(r.check, L, 2, 0)), b = v = 0, r.mode = 3;
							case 3:
								for (; b < 32;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								r.head && (r.head.time = v), 512 & r.flags && (L[0] = 255 & v, L[1] = v >>> 8 & 255, L[2] = v >>> 16 & 255, L[3] = v >>> 24 & 255, r.check = s(r.check, L, 4, 0)), b = v = 0, r.mode = 4;
							case 4:
								for (; b < 16;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								r.head && (r.head.xflags = 255 & v, r.head.os = v >> 8), 512 & r.flags && (L[0] = 255 & v, L[1] = v >>> 8 & 255, r.check = s(r.check, L, 2, 0)), b = v = 0, r.mode = 5;
							case 5:
								if (1024 & r.flags) {
									for (; b < 16;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									r.length = v, r.head && (r.head.extra_len = v), 512 & r.flags && (L[0] = 255 & v, L[1] = v >>> 8 & 255, r.check = s(r.check, L, 2, 0)), b = v = 0
								} else r.head && (r.head.extra = null);
								r.mode = 6;
							case 6:
								if (1024 & r.flags && (w < (E = r.length) && (E = w), E && (r.head && (U = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), i.arraySet(r.head.extra, f, g, E, U)), 512 & r.flags && (r.check = s(r.check, f, E, g)), w -= E, g += E, r.length -= E), r.length)) break e;
								r.length = 0, r.mode = 7;
							case 7:
								if (2048 & r.flags) {
									if (0 === w) break e;
									for (E = 0; U = f[g + E++], r.head && U && r.length < 65536 && (r.head.name += String.fromCharCode(U)), U && E < w;);
									if (512 & r.flags && (r.check = s(r.check, f, E, g)), w -= E, g += E, U) break e
								} else r.head && (r.head.name = null);
								r.length = 0, r.mode = 8;
							case 8:
								if (4096 & r.flags) {
									if (0 === w) break e;
									for (E = 0; U = f[g + E++], r.head && U && r.length < 65536 && (r.head.comment += String.fromCharCode(U)), U && E < w;);
									if (512 & r.flags && (r.check = s(r.check, f, E, g)), w -= E, g += E, U) break e
								} else r.head && (r.head.comment = null);
								r.mode = 9;
							case 9:
								if (512 & r.flags) {
									for (; b < 16;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									if (v !== (65535 & r.check)) {
										e.msg = "header crc mismatch", r.mode = 30;
										break
									}
									b = v = 0
								}
								r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
								break;
							case 10:
								for (; b < 32;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								e.adler = r.check = _(v), b = v = 0, r.mode = 11;
							case 11:
								if (0 === r.havedict) return e.next_out = m, e.avail_out = y, e.next_in = g, e.avail_in = w, r.hold = v, r.bits = b, 2;
								e.adler = r.check = 1, r.mode = 12;
							case 12:
								if (5 === t || 6 === t) break e;
							case 13:
								if (r.last) {
									v >>>= 7 & b, b -= 7 & b, r.mode = 27;
									break
								}
								for (; b < 3;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								switch (r.last = 1 & v, b -= 1, 3 & (v >>>= 1)) {
									case 0:
										r.mode = 14;
										break;
									case 1:
										if (x(r), r.mode = 20, 6 !== t) break;
										v >>>= 2, b -= 2;
										break e;
									case 2:
										r.mode = 17;
										break;
									case 3:
										e.msg = "invalid block type", r.mode = 30
								}
								v >>>= 2, b -= 2;
								break;
							case 14:
								for (v >>>= 7 & b, b -= 7 & b; b < 32;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if ((65535 & v) != (v >>> 16 ^ 65535)) {
									e.msg = "invalid stored block lengths", r.mode = 30;
									break
								}
								if (r.length = 65535 & v, b = v = 0, r.mode = 15, 6 === t) break e;
							case 15:
								r.mode = 16;
							case 16:
								if (E = r.length) {
									if (w < E && (E = w), y < E && (E = y), 0 === E) break e;
									i.arraySet(p, f, g, E, m), w -= E, g += E, y -= E, m += E, r.length -= E;
									break
								}
								r.mode = 12;
								break;
							case 17:
								for (; b < 14;) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if (r.nlen = 257 + (31 & v), v >>>= 5, b -= 5, r.ndist = 1 + (31 & v), v >>>= 5, b -= 5, r.ncode = 4 + (15 & v), v >>>= 4, b -= 4, 286 < r.nlen || 30 < r.ndist) {
									e.msg = "too many length or distance symbols", r.mode = 30;
									break
								}
								r.have = 0, r.mode = 18;
							case 18:
								for (; r.have < r.ncode;) {
									for (; b < 3;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									r.lens[W[r.have++]] = 7 & v, v >>>= 3, b -= 3
								}
								for (; r.have < 19;) r.lens[W[r.have++]] = 0;
								if (r.lencode = r.lendyn, r.lenbits = 7, D = {
										bits: r.lenbits
									}, N = o(0, r.lens, 0, 19, r.lencode, 0, r.work, D), r.lenbits = D.bits, N) {
									e.msg = "invalid code lengths set", r.mode = 30;
									break
								}
								r.have = 0, r.mode = 19;
							case 19:
								for (; r.have < r.nlen + r.ndist;) {
									for (; T = (j = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, R = 65535 & j, !((I = j >>> 24) <= b);) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									if (R < 16) v >>>= I, b -= I, r.lens[r.have++] = R;
									else {
										if (16 === R) {
											for (F = I + 2; b < F;) {
												if (0 === w) break e;
												w--, v += f[g++] << b, b += 8
											}
											if (v >>>= I, b -= I, 0 === r.have) {
												e.msg = "invalid bit length repeat", r.mode = 30;
												break
											}
											U = r.lens[r.have - 1], E = 3 + (3 & v), v >>>= 2, b -= 2
										} else if (17 === R) {
											for (F = I + 3; b < F;) {
												if (0 === w) break e;
												w--, v += f[g++] << b, b += 8
											}
											b -= I, U = 0, E = 3 + (7 & (v >>>= I)), v >>>= 3, b -= 3
										} else {
											for (F = I + 7; b < F;) {
												if (0 === w) break e;
												w--, v += f[g++] << b, b += 8
											}
											b -= I, U = 0, E = 11 + (127 & (v >>>= I)), v >>>= 7, b -= 7
										}
										if (r.have + E > r.nlen + r.ndist) {
											e.msg = "invalid bit length repeat", r.mode = 30;
											break
										}
										for (; E--;) r.lens[r.have++] = U
									}
								}
								if (30 === r.mode) break;
								if (0 === r.lens[256]) {
									e.msg = "invalid code -- missing end-of-block", r.mode = 30;
									break
								}
								if (r.lenbits = 9, D = {
										bits: r.lenbits
									}, N = o(c, r.lens, 0, r.nlen, r.lencode, 0, r.work, D), r.lenbits = D.bits, N) {
									e.msg = "invalid literal/lengths set", r.mode = 30;
									break
								}
								if (r.distbits = 6, r.distcode = r.distdyn, D = {
										bits: r.distbits
									}, N = o(h, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, D), r.distbits = D.bits, N) {
									e.msg = "invalid distances set", r.mode = 30;
									break
								}
								if (r.mode = 20, 6 === t) break e;
							case 20:
								r.mode = 21;
							case 21:
								if (6 <= w && 258 <= y) {
									e.next_out = m, e.avail_out = y, e.next_in = g, e.avail_in = w, r.hold = v, r.bits = b, a(e, S), m = e.next_out, p = e.output, y = e.avail_out, g = e.next_in, f = e.input, w = e.avail_in, v = r.hold, b = r.bits, 12 === r.mode && (r.back = -1);
									break
								}
								for (r.back = 0; T = (j = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, R = 65535 & j, !((I = j >>> 24) <= b);) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if (T && !(240 & T)) {
									for (O = I, B = T, P = R; T = (j = r.lencode[P + ((v & (1 << O + B) - 1) >> O)]) >>> 16 & 255, R = 65535 & j, !(O + (I = j >>> 24) <= b);) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									v >>>= O, b -= O, r.back += O
								}
								if (v >>>= I, b -= I, r.back += I, r.length = R, 0 === T) {
									r.mode = 26;
									break
								}
								if (32 & T) {
									r.back = -1, r.mode = 12;
									break
								}
								if (64 & T) {
									e.msg = "invalid literal/length code", r.mode = 30;
									break
								}
								r.extra = 15 & T, r.mode = 22;
							case 22:
								if (r.extra) {
									for (F = r.extra; b < F;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									r.length += v & (1 << r.extra) - 1, v >>>= r.extra, b -= r.extra, r.back += r.extra
								}
								r.was = r.length, r.mode = 23;
							case 23:
								for (; T = (j = r.distcode[v & (1 << r.distbits) - 1]) >>> 16 & 255, R = 65535 & j, !((I = j >>> 24) <= b);) {
									if (0 === w) break e;
									w--, v += f[g++] << b, b += 8
								}
								if (!(240 & T)) {
									for (O = I, B = T, P = R; T = (j = r.distcode[P + ((v & (1 << O + B) - 1) >> O)]) >>> 16 & 255, R = 65535 & j, !(O + (I = j >>> 24) <= b);) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									v >>>= O, b -= O, r.back += O
								}
								if (v >>>= I, b -= I, r.back += I, 64 & T) {
									e.msg = "invalid distance code", r.mode = 30;
									break
								}
								r.offset = R, r.extra = 15 & T, r.mode = 24;
							case 24:
								if (r.extra) {
									for (F = r.extra; b < F;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									r.offset += v & (1 << r.extra) - 1, v >>>= r.extra, b -= r.extra, r.back += r.extra
								}
								if (r.offset > r.dmax) {
									e.msg = "invalid distance too far back", r.mode = 30;
									break
								}
								r.mode = 25;
							case 25:
								if (0 === y) break e;
								if (E = S - y, r.offset > E) {
									if ((E = r.offset - E) > r.whave && r.sane) {
										e.msg = "invalid distance too far back", r.mode = 30;
										break
									}
									A = E > r.wnext ? (E -= r.wnext, r.wsize - E) : r.wnext - E, E > r.length && (E = r.length), z = r.window
								} else z = p, A = m - r.offset, E = r.length;
								for (y < E && (E = y), y -= E, r.length -= E; p[m++] = z[A++], --E;);
								0 === r.length && (r.mode = 21);
								break;
							case 26:
								if (0 === y) break e;
								p[m++] = r.length, y--, r.mode = 21;
								break;
							case 27:
								if (r.wrap) {
									for (; b < 32;) {
										if (0 === w) break e;
										w--, v |= f[g++] << b, b += 8
									}
									if (S -= y, e.total_out += S, r.total += S, S && (e.adler = r.check = r.flags ? s(r.check, p, S, m - S) : n(r.check, p, S, m - S)), S = y, (r.flags ? v : _(v)) !== r.check) {
										e.msg = "incorrect data check", r.mode = 30;
										break
									}
									b = v = 0
								}
								r.mode = 28;
							case 28:
								if (r.wrap && r.flags) {
									for (; b < 32;) {
										if (0 === w) break e;
										w--, v += f[g++] << b, b += 8
									}
									if (v !== (4294967295 & r.total)) {
										e.msg = "incorrect length check", r.mode = 30;
										break
									}
									b = v = 0
								}
								r.mode = 29;
							case 29:
								N = 1;
								break e;
							case 30:
								N = -3;
								break e;
							case 31:
								return -4;
							default:
								return u
						}
						return e.next_out = m, e.avail_out = y, e.next_in = g, e.avail_in = w, r.hold = v, r.bits = b, (r.wsize || S !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && C(e, e.output, e.next_out, S - e.avail_out) ? (r.mode = 31, -4) : (k -= e.avail_in, S -= e.avail_out, e.total_in += k, e.total_out += S, r.total += S, r.wrap && S && (e.adler = r.check = r.flags ? s(r.check, p, S, e.next_out - S) : n(r.check, p, S, e.next_out - S)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == k && 0 === S || 4 === t) && N === l && (N = -5), N)
					}, r.inflateEnd = function(e) {
						if (!e || !e.state) return u;
						var t = e.state;
						return t.window && (t.window = null), e.state = null, l
					}, r.inflateGetHeader = function(e, t) {
						var r;
						return e && e.state && 2 & (r = e.state).wrap ? ((r.head = t).done = !1, l) : u
					}, r.inflateSetDictionary = function(e, t) {
						var r, i = t.length;
						return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? u : 11 === r.mode && n(1, t, i, 0) !== r.check ? -3 : C(e, t, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, l) : u
					}, r.inflateInfo = "pako inflate (from Nodeca project)"
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./inffast": 48,
					"./inftrees": 50
				}],
				50: [function(e, t, r) {
					"use strict";
					var i = e("../utils/common"),
						n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
						s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
						a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
						o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
					t.exports = function(e, t, r, c, h, l, u, d) {
						var f, p, _, g, m, w, y, v, b, k = d.bits,
							S = 0,
							x = 0,
							C = 0,
							E = 0,
							A = 0,
							z = 0,
							I = 0,
							T = 0,
							R = 0,
							O = 0,
							B = null,
							P = 0,
							U = new i.Buf16(16),
							N = new i.Buf16(16),
							D = null,
							F = 0;
						for (S = 0; S <= 15; S++) U[S] = 0;
						for (x = 0; x < c; x++) U[t[r + x]]++;
						for (A = k, E = 15; 1 <= E && 0 === U[E]; E--);
						if (E < A && (A = E), 0 === E) return h[l++] = 20971520, h[l++] = 20971520, d.bits = 1, 0;
						for (C = 1; C < E && 0 === U[C]; C++);
						for (A < C && (A = C), S = T = 1; S <= 15; S++)
							if (T <<= 1, (T -= U[S]) < 0) return -1;
						if (0 < T && (0 === e || 1 !== E)) return -1;
						for (N[1] = 0, S = 1; S < 15; S++) N[S + 1] = N[S] + U[S];
						for (x = 0; x < c; x++) 0 !== t[r + x] && (u[N[t[r + x]]++] = x);
						if (w = 0 === e ? (B = D = u, 19) : 1 === e ? (B = n, P -= 257, D = s, F -= 257, 256) : (B = a, D = o, -1), S = C, m = l, I = x = O = 0, _ = -1, g = (R = 1 << (z = A)) - 1, 1 === e && 852 < R || 2 === e && 592 < R) return 1;
						for (;;) {
							for (y = S - I, b = u[x] < w ? (v = 0, u[x]) : u[x] > w ? (v = D[F + u[x]], B[P + u[x]]) : (v = 96, 0), f = 1 << S - I, C = p = 1 << z; h[m + (O >> I) + (p -= f)] = y << 24 | v << 16 | b, 0 !== p;);
							for (f = 1 << S - 1; O & f;) f >>= 1;
							if (0 !== f ? (O &= f - 1, O += f) : O = 0, x++, 0 == --U[S]) {
								if (S === E) break;
								S = t[r + u[x]]
							}
							if (A < S && (O & g) !== _) {
								for (0 === I && (I = A), m += C, T = 1 << (z = S - I); z + I < E && !((T -= U[z + I]) <= 0);) z++, T <<= 1;
								if (R += 1 << z, 1 === e && 852 < R || 2 === e && 592 < R) return 1;
								h[_ = O & g] = A << 24 | z << 16 | m - l
							}
						}
						return 0 !== O && (h[m + O] = S - I << 24 | 64 << 16), d.bits = A, 0
					}
				}, {
					"../utils/common": 41
				}],
				51: [function(e, t, r) {
					"use strict";
					t.exports = {
						2: "need dictionary",
						1: "stream end",
						0: "",
						"-1": "file error",
						"-2": "stream error",
						"-3": "data error",
						"-4": "insufficient memory",
						"-5": "buffer error",
						"-6": "incompatible version"
					}
				}, {}],
				52: [function(e, t, r) {
					"use strict";
					var i = e("../utils/common"),
						n = 0,
						s = 1;

					function a(e) {
						for (var t = e.length; 0 <= --t;) e[t] = 0
					}
					var o = 0,
						c = 29,
						h = 256,
						l = h + 1 + c,
						u = 30,
						d = 19,
						f = 2 * l + 1,
						p = 15,
						_ = 16,
						g = 7,
						m = 256,
						w = 16,
						y = 17,
						v = 18,
						b = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
						k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
						S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
						x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
						C = new Array(2 * (l + 2));
					a(C);
					var E = new Array(2 * u);
					a(E);
					var A = new Array(512);
					a(A);
					var z = new Array(256);
					a(z);
					var I = new Array(c);
					a(I);
					var T, R, O, B = new Array(u);

					function P(e, t, r, i, n) {
						this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = e && e.length
					}

					function U(e, t) {
						this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
					}

					function N(e) {
						return e < 256 ? A[e] : A[256 + (e >>> 7)]
					}

					function D(e, t) {
						e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
					}

					function F(e, t, r) {
						e.bi_valid > _ - r ? (e.bi_buf |= t << e.bi_valid & 65535, D(e, e.bi_buf), e.bi_buf = t >> _ - e.bi_valid, e.bi_valid += r - _) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r)
					}

					function j(e, t, r) {
						F(e, r[2 * t], r[2 * t + 1])
					}

					function L(e, t) {
						for (var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
						return r >>> 1
					}

					function W(e, t, r) {
						var i, n, s = new Array(p + 1),
							a = 0;
						for (i = 1; i <= p; i++) s[i] = a = a + r[i - 1] << 1;
						for (n = 0; n <= t; n++) {
							var o = e[2 * n + 1];
							0 !== o && (e[2 * n] = L(s[o]++, o))
						}
					}

					function M(e) {
						var t;
						for (t = 0; t < l; t++) e.dyn_ltree[2 * t] = 0;
						for (t = 0; t < u; t++) e.dyn_dtree[2 * t] = 0;
						for (t = 0; t < d; t++) e.bl_tree[2 * t] = 0;
						e.dyn_ltree[2 * m] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
					}

					function H(e) {
						8 < e.bi_valid ? D(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
					}

					function Z(e, t, r, i) {
						var n = 2 * t,
							s = 2 * r;
						return e[n] < e[s] || e[n] === e[s] && i[t] <= i[r]
					}

					function q(e, t, r) {
						for (var i = e.heap[r], n = r << 1; n <= e.heap_len && (n < e.heap_len && Z(t, e.heap[n + 1], e.heap[n], e.depth) && n++, !Z(t, i, e.heap[n], e.depth));) e.heap[r] = e.heap[n], r = n, n <<= 1;
						e.heap[r] = i
					}

					function K(e, t, r) {
						var i, n, s, a, o = 0;
						if (0 !== e.last_lit)
							for (; i = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], n = e.pending_buf[e.l_buf + o], o++, 0 === i ? j(e, n, t) : (j(e, (s = z[n]) + h + 1, t), 0 !== (a = b[s]) && F(e, n -= I[s], a), j(e, s = N(--i), r), 0 !== (a = k[s]) && F(e, i -= B[s], a)), o < e.last_lit;);
						j(e, m, t)
					}

					function $(e, t) {
						var r, i, n, s = t.dyn_tree,
							a = t.stat_desc.static_tree,
							o = t.stat_desc.has_stree,
							c = t.stat_desc.elems,
							h = -1;
						for (e.heap_len = 0, e.heap_max = f, r = 0; r < c; r++) 0 !== s[2 * r] ? (e.heap[++e.heap_len] = h = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
						for (; e.heap_len < 2;) s[2 * (n = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1, e.depth[n] = 0, e.opt_len--, o && (e.static_len -= a[2 * n + 1]);
						for (t.max_code = h, r = e.heap_len >> 1; 1 <= r; r--) q(e, s, r);
						for (n = c; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], q(e, s, 1), i = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = i, s[2 * n] = s[2 * r] + s[2 * i], e.depth[n] = (e.depth[r] >= e.depth[i] ? e.depth[r] : e.depth[i]) + 1, s[2 * r + 1] = s[2 * i + 1] = n, e.heap[1] = n++, q(e, s, 1), 2 <= e.heap_len;);
						e.heap[--e.heap_max] = e.heap[1],
							function(e, t) {
								var r, i, n, s, a, o, c = t.dyn_tree,
									h = t.max_code,
									l = t.stat_desc.static_tree,
									u = t.stat_desc.has_stree,
									d = t.stat_desc.extra_bits,
									_ = t.stat_desc.extra_base,
									g = t.stat_desc.max_length,
									m = 0;
								for (s = 0; s <= p; s++) e.bl_count[s] = 0;
								for (c[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < f; r++) g < (s = c[2 * c[2 * (i = e.heap[r]) + 1] + 1] + 1) && (s = g, m++), c[2 * i + 1] = s, h < i || (e.bl_count[s]++, a = 0, _ <= i && (a = d[i - _]), o = c[2 * i], e.opt_len += o * (s + a), u && (e.static_len += o * (l[2 * i + 1] + a)));
								if (0 !== m) {
									do {
										for (s = g - 1; 0 === e.bl_count[s];) s--;
										e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[g]--, m -= 2
									} while (0 < m);
									for (s = g; 0 !== s; s--)
										for (i = e.bl_count[s]; 0 !== i;) h < (n = e.heap[--r]) || (c[2 * n + 1] !== s && (e.opt_len += (s - c[2 * n + 1]) * c[2 * n], c[2 * n + 1] = s), i--)
								}
							}(e, t), W(s, h, e.bl_count)
					}

					function J(e, t, r) {
						var i, n, s = -1,
							a = t[1],
							o = 0,
							c = 7,
							h = 4;
						for (0 === a && (c = 138, h = 3), t[2 * (r + 1) + 1] = 65535, i = 0; i <= r; i++) n = a, a = t[2 * (i + 1) + 1], ++o < c && n === a || (o < h ? e.bl_tree[2 * n] += o : 0 !== n ? (n !== s && e.bl_tree[2 * n]++, e.bl_tree[2 * w]++) : o <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * v]++, s = n, h = (o = 0) === a ? (c = 138, 3) : n === a ? (c = 6, 3) : (c = 7, 4))
					}

					function G(e, t, r) {
						var i, n, s = -1,
							a = t[1],
							o = 0,
							c = 7,
							h = 4;
						for (0 === a && (c = 138, h = 3), i = 0; i <= r; i++)
							if (n = a, a = t[2 * (i + 1) + 1], !(++o < c && n === a)) {
								if (o < h)
									for (; j(e, n, e.bl_tree), 0 != --o;);
								else 0 !== n ? (n !== s && (j(e, n, e.bl_tree), o--), j(e, w, e.bl_tree), F(e, o - 3, 2)) : o <= 10 ? (j(e, y, e.bl_tree), F(e, o - 3, 3)) : (j(e, v, e.bl_tree), F(e, o - 11, 7));
								s = n, h = (o = 0) === a ? (c = 138, 3) : n === a ? (c = 6, 3) : (c = 7, 4)
							}
					}
					a(B);
					var V = !1;

					function Y(e, t, r, n) {
						F(e, (o << 1) + (n ? 1 : 0), 3),
							function(e, t, r, n) {
								H(e), n && (D(e, r), D(e, ~r)), i.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r
							}(e, t, r, !0)
					}
					r._tr_init = function(e) {
						V || (function() {
							var e, t, r, i, n, s = new Array(p + 1);
							for (i = r = 0; i < c - 1; i++)
								for (I[i] = r, e = 0; e < 1 << b[i]; e++) z[r++] = i;
							for (z[r - 1] = i, i = n = 0; i < 16; i++)
								for (B[i] = n, e = 0; e < 1 << k[i]; e++) A[n++] = i;
							for (n >>= 7; i < u; i++)
								for (B[i] = n << 7, e = 0; e < 1 << k[i] - 7; e++) A[256 + n++] = i;
							for (t = 0; t <= p; t++) s[t] = 0;
							for (e = 0; e <= 143;) C[2 * e + 1] = 8, e++, s[8]++;
							for (; e <= 255;) C[2 * e + 1] = 9, e++, s[9]++;
							for (; e <= 279;) C[2 * e + 1] = 7, e++, s[7]++;
							for (; e <= 287;) C[2 * e + 1] = 8, e++, s[8]++;
							for (W(C, l + 1, s), e = 0; e < u; e++) E[2 * e + 1] = 5, E[2 * e] = L(e, 5);
							T = new P(C, b, h + 1, l, p), R = new P(E, k, 0, u, p), O = new P(new Array(0), S, 0, d, g)
						}(), V = !0), e.l_desc = new U(e.dyn_ltree, T), e.d_desc = new U(e.dyn_dtree, R), e.bl_desc = new U(e.bl_tree, O), e.bi_buf = 0, e.bi_valid = 0, M(e)
					}, r._tr_stored_block = Y, r._tr_flush_block = function(e, t, r, i) {
						var a, o, c = 0;
						0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
							var t, r = 4093624447;
							for (t = 0; t <= 31; t++, r >>>= 1)
								if (1 & r && 0 !== e.dyn_ltree[2 * t]) return n;
							if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return s;
							for (t = 32; t < h; t++)
								if (0 !== e.dyn_ltree[2 * t]) return s;
							return n
						}(e)), $(e, e.l_desc), $(e, e.d_desc), c = function(e) {
							var t;
							for (J(e, e.dyn_ltree, e.l_desc.max_code), J(e, e.dyn_dtree, e.d_desc.max_code), $(e, e.bl_desc), t = d - 1; 3 <= t && 0 === e.bl_tree[2 * x[t] + 1]; t--);
							return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
						}(e), a = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = r + 5, r + 4 <= a && -1 !== t ? Y(e, t, r, i) : 4 === e.strategy || o === a ? (F(e, 2 + (i ? 1 : 0), 3), K(e, C, E)) : (F(e, 4 + (i ? 1 : 0), 3), function(e, t, r, i) {
							var n;
							for (F(e, t - 257, 5), F(e, r - 1, 5), F(e, i - 4, 4), n = 0; n < i; n++) F(e, e.bl_tree[2 * x[n] + 1], 3);
							G(e, e.dyn_ltree, t - 1), G(e, e.dyn_dtree, r - 1)
						}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), K(e, e.dyn_ltree, e.dyn_dtree)), M(e), i && H(e)
					}, r._tr_tally = function(e, t, r) {
						return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (z[r] + h + 1)]++, e.dyn_dtree[2 * N(t)]++), e.last_lit === e.lit_bufsize - 1
					}, r._tr_align = function(e) {
						F(e, 2, 3), j(e, m, C),
							function(e) {
								16 === e.bi_valid ? (D(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
							}(e)
					}
				}, {
					"../utils/common": 41
				}],
				53: [function(e, t, r) {
					"use strict";
					t.exports = function() {
						this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
					}
				}, {}],
				54: [function(e, t, n) {
					(function(e) {
						! function(e, t) {
							"use strict";
							if (!e.setImmediate) {
								var r, n, s, a, o = 1,
									c = {},
									h = !1,
									l = e.document,
									u = Object.getPrototypeOf && Object.getPrototypeOf(e);
								u = u && u.setTimeout ? u : e, r = "[object process]" === {}.toString.call(e.process) ? function(e) {
									i.nextTick((function() {
										f(e)
									}))
								} : function() {
									if (e.postMessage && !e.importScripts) {
										var t = !0,
											r = e.onmessage;
										return e.onmessage = function() {
											t = !1
										}, e.postMessage("", "*"), e.onmessage = r, t
									}
								}() ? (a = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", p, !1) : e.attachEvent("onmessage", p), function(t) {
									e.postMessage(a + t, "*")
								}) : e.MessageChannel ? ((s = new MessageChannel).port1.onmessage = function(e) {
									f(e.data)
								}, function(e) {
									s.port2.postMessage(e)
								}) : l && "onreadystatechange" in l.createElement("script") ? (n = l.documentElement, function(e) {
									var t = l.createElement("script");
									t.onreadystatechange = function() {
										f(e), t.onreadystatechange = null, n.removeChild(t), t = null
									}, n.appendChild(t)
								}) : function(e) {
									setTimeout(f, 0, e)
								}, u.setImmediate = function(e) {
									"function" != typeof e && (e = new Function("" + e));
									for (var t = new Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
									var n = {
										callback: e,
										args: t
									};
									return c[o] = n, r(o), o++
								}, u.clearImmediate = d
							}

							function d(e) {
								delete c[e]
							}

							function f(e) {
								if (h) setTimeout(f, 0, e);
								else {
									var r = c[e];
									if (r) {
										h = !0;
										try {
											! function(e) {
												var r = e.callback,
													i = e.args;
												switch (i.length) {
													case 0:
														r();
														break;
													case 1:
														r(i[0]);
														break;
													case 2:
														r(i[0], i[1]);
														break;
													case 3:
														r(i[0], i[1], i[2]);
														break;
													default:
														r.apply(t, i)
												}
											}(r)
										} finally {
											d(e), h = !1
										}
									}
								}
							}

							function p(t) {
								t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && f(+t.data.slice(a.length))
							}
						}("undefined" == typeof self ? void 0 === e ? this : e : self)
					}).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
				}, {}]
			}, {}, [10])(10)
		},
		44280: (e, t, r) => {
			"use strict";
			r.d(t, {
				hz: () => M
			});
			var i = r(88961),
				n = r(34709),
				s = r(38822),
				a = r(50526);

			function o(e) {
				this.message = e
			}
			o.prototype = new Error, o.prototype.name = "InvalidCharacterError";
			var c = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
				var t = String(e).replace(/=+$/, "");
				if (t.length % 4 == 1) throw new o("'atob' failed: The string to be decoded is not correctly encoded.");
				for (var r, i, n = 0, s = 0, a = ""; i = t.charAt(s++); ~i && (r = n % 4 ? 64 * r + i : i, n++ % 4) ? a += String.fromCharCode(255 & r >> (-2 * n & 6)) : 0) i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
				return a
			};

			function h(e) {
				var t = e.replace(/-/g, "+").replace(/_/g, "/");
				switch (t.length % 4) {
					case 0:
						break;
					case 2:
						t += "==";
						break;
					case 3:
						t += "=";
						break;
					default:
						throw "Illegal base64url string!"
				}
				try {
					return function(e) {
						return decodeURIComponent(c(e).replace(/(.)/g, (function(e, t) {
							var r = t.charCodeAt(0).toString(16).toUpperCase();
							return r.length < 2 && (r = "0" + r), "%" + r
						})))
					}(t)
				} catch (e) {
					return c(t)
				}
			}

			function l(e) {
				this.message = e
			}
			l.prototype = new Error, l.prototype.name = "InvalidTokenError";
			const u = function(e, t) {
				if ("string" != typeof e) throw new l("Invalid token specified");
				var r = !0 === (t = t || {}).header ? 0 : 1;
				try {
					return JSON.parse(h(e.split(".")[r]))
				} catch (e) {
					throw new l("Invalid token specified: " + e.message)
				}
			};
			var d, f, p, _ = {
					debug: () => {},
					info: () => {},
					warn: () => {},
					error: () => {}
				},
				g = (e => (e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG", e))(g || {});
			(p = g || (g = {})).reset = function() {
				d = 3, f = _
			}, p.setLevel = function(e) {
				if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
				d = e
			}, p.setLogger = function(e) {
				f = e
			};
			var m = class {
				constructor(e) {
					this._name = e
				}
				debug(...e) {
					d >= 4 && f.debug(m._format(this._name, this._method), ...e)
				}
				info(...e) {
					d >= 3 && f.info(m._format(this._name, this._method), ...e)
				}
				warn(...e) {
					d >= 2 && f.warn(m._format(this._name, this._method), ...e)
				}
				error(...e) {
					d >= 1 && f.error(m._format(this._name, this._method), ...e)
				}
				throw (e) {
					throw this.error(e), e
				}
				create(e) {
					const t = Object.create(this);
					return t._method = e, t.debug("begin"), t
				}
				static createStatic(e, t) {
					const r = new m(`${e}.${t}`);
					return r.debug("begin"), r
				}
				static _format(e, t) {
					const r = `[${e}]`;
					return t ? `${r} ${t}:` : r
				}
				static debug(e, ...t) {
					d >= 4 && f.debug(m._format(e), ...t)
				}
				static info(e, ...t) {
					d >= 3 && f.info(m._format(e), ...t)
				}
				static warn(e, ...t) {
					d >= 2 && f.warn(m._format(e), ...t)
				}
				static error(e, ...t) {
					d >= 1 && f.error(m._format(e), ...t)
				}
			};
			g.reset();
			var w = class {
					static _randomWord() {
						return i.lib.WordArray.random(1).words[0]
					}
					static generateUUIDv4() {
						return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e => (+e ^ w._randomWord() & 15 >> +e / 4).toString(16))).replace(/-/g, "")
					}
					static generateCodeVerifier() {
						return w.generateUUIDv4() + w.generateUUIDv4() + w.generateUUIDv4()
					}
					static generateCodeChallenge(e) {
						try {
							const t = n(e);
							return s.stringify(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
						} catch (t) {
							throw m.error("CryptoUtils.generateCodeChallenge", t), t
						}
					}
					static generateBasicAuth(e, t) {
						const r = a.parse([e, t].join(":"));
						return s.stringify(r)
					}
				},
				y = class {
					constructor(e) {
						this._name = e, this._logger = new m(`Event('${this._name}')`), this._callbacks = []
					}
					addHandler(e) {
						return this._callbacks.push(e), () => this.removeHandler(e)
					}
					removeHandler(e) {
						const t = this._callbacks.lastIndexOf(e);
						t >= 0 && this._callbacks.splice(t, 1)
					}
					raise(...e) {
						this._logger.debug("raise:", ...e);
						for (const t of this._callbacks) t(...e)
					}
				},
				v = class {
					static decode(e) {
						try {
							return u(e)
						} catch (t) {
							throw m.error("JwtUtils.decode", t), t
						}
					}
				},
				b = class extends y {
					constructor() {
						super(...arguments), this._logger = new m(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => {
							const e = this._expiration - b.getEpochTime();
							this._logger.debug("timer completes in", e), this._expiration <= b.getEpochTime() && (this.cancel(), super.raise())
						}
					}
					static getEpochTime() {
						return Math.floor(Date.now() / 1e3)
					}
					init(e) {
						const t = this._logger.create("init");
						e = Math.max(Math.floor(e), 1);
						const r = b.getEpochTime() + e;
						if (this.expiration === r && this._timerHandle) return void t.debug("skipping since already initialized for expiration at", this.expiration);
						this.cancel(), t.debug("using duration", e), this._expiration = r;
						const i = Math.min(e, 5);
						this._timerHandle = setInterval(this._callback, 1e3 * i)
					}
					get expiration() {
						return this._expiration
					}
					cancel() {
						this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null)
					}
				},
				k = class {
					static readParams(e, t = "query") {
						if (!e) throw new TypeError("Invalid URL");
						const r = new URL(e, "http://127.0.0.1")["fragment" === t ? "hash" : "search"];
						return new URLSearchParams(r.slice(1))
					}
				},
				S = class extends Error {
					constructor(e, t) {
						var r, i, n;
						if (super(e.error_description || e.error || ""), this.form = t, this.name = "ErrorResponse", !e.error) throw m.error("ErrorResponse", "No error passed"), new Error("No error passed");
						this.error = e.error, this.error_description = null != (r = e.error_description) ? r : null, this.error_uri = null != (i = e.error_uri) ? i : null, this.state = e.userState, this.session_state = null != (n = e.session_state) ? n : null, this.url_state = e.url_state
					}
				},
				x = class extends Error {
					constructor(e) {
						super(e), this.name = "ErrorTimeout"
					}
				},
				C = class {
					constructor() {
						this._logger = new m("InMemoryWebStorage"), this._data = {}
					}
					clear() {
						this._logger.create("clear"), this._data = {}
					}
					getItem(e) {
						return this._logger.create(`getItem('${e}')`), this._data[e]
					}
					setItem(e, t) {
						this._logger.create(`setItem('${e}')`), this._data[e] = t
					}
					removeItem(e) {
						this._logger.create(`removeItem('${e}')`), delete this._data[e]
					}
					get length() {
						return Object.getOwnPropertyNames(this._data).length
					}
					key(e) {
						return Object.getOwnPropertyNames(this._data)[e]
					}
				},
				E = class {
					constructor(e = [], t = null, r = {}) {
						this._jwtHandler = t, this._extraHeaders = r, this._logger = new m("JsonService"), this._contentTypes = [], this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt")
					}
					async fetchWithTimeout(e, t = {}) {
						const {
							timeoutInSeconds: r,
							...i
						} = t;
						if (!r) return await fetch(e, i);
						const n = new AbortController,
							s = setTimeout((() => n.abort()), 1e3 * r);
						try {
							return await fetch(e, {
								...t,
								signal: n.signal
							})
						} catch (a) {
							if (a instanceof DOMException && "AbortError" === a.name) throw new x("Network timed out");
							throw a
						} finally {
							clearTimeout(s)
						}
					}
					async getJson(e, {
						token: t,
						credentials: r
					} = {}) {
						const i = this._logger.create("getJson"),
							n = {
								Accept: this._contentTypes.join(", ")
							};
						let s;
						t && (i.debug("token passed, setting Authorization header"), n.Authorization = "Bearer " + t), this.appendExtraHeaders(n);
						try {
							i.debug("url:", e), s = await this.fetchWithTimeout(e, {
								method: "GET",
								headers: n,
								credentials: r
							})
						} catch (c) {
							throw i.error("Network Error"), c
						}
						i.debug("HTTP response received, status", s.status);
						const a = s.headers.get("Content-Type");
						if (a && !this._contentTypes.find((e => a.startsWith(e))) && i.throw(new Error(`Invalid response Content-Type: ${null!=a?a:"undefined"}, from URL: ${e}`)), s.ok && this._jwtHandler && (null == a ? void 0 : a.startsWith("application/jwt"))) return await this._jwtHandler(await s.text());
						let o;
						try {
							o = await s.json()
						} catch (c) {
							if (i.error("Error parsing JSON response", c), s.ok) throw c;
							throw new Error(`${s.statusText} (${s.status})`)
						}
						if (!s.ok) {
							if (i.error("Error from server:", o), o.error) throw new S(o);
							throw new Error(`${s.statusText} (${s.status}): ${JSON.stringify(o)}`)
						}
						return o
					}
					async postForm(e, {
						body: t,
						basicAuth: r,
						timeoutInSeconds: i,
						initCredentials: n
					}) {
						const s = this._logger.create("postForm"),
							a = {
								Accept: this._contentTypes.join(", "),
								"Content-Type": "application/x-www-form-urlencoded"
							};
						let o;
						void 0 !== r && (a.Authorization = "Basic " + r), this.appendExtraHeaders(a);
						try {
							s.debug("url:", e), o = await this.fetchWithTimeout(e, {
								method: "POST",
								headers: a,
								body: t,
								timeoutInSeconds: i,
								credentials: n
							})
						} catch (u) {
							throw s.error("Network error"), u
						}
						s.debug("HTTP response received, status", o.status);
						const c = o.headers.get("Content-Type");
						if (c && !this._contentTypes.find((e => c.startsWith(e)))) throw new Error(`Invalid response Content-Type: ${null!=c?c:"undefined"}, from URL: ${e}`);
						const h = await o.text();
						let l = {};
						if (h) try {
							l = JSON.parse(h)
						} catch (u) {
							if (s.error("Error parsing JSON response", u), o.ok) throw u;
							throw new Error(`${o.statusText} (${o.status})`)
						}
						if (!o.ok) {
							if (s.error("Error from server:", l), l.error) throw new S(l, t);
							throw new Error(`${o.statusText} (${o.status}): ${JSON.stringify(l)}`)
						}
						return l
					}
					appendExtraHeaders(e) {
						const t = this._logger.create("appendExtraHeaders"),
							r = Object.keys(this._extraHeaders),
							i = ["authorization", "accept", "content-type"];
						0 !== r.length && r.forEach((r => {
							if (i.includes(r.toLocaleLowerCase())) return void t.warn("Protected header could not be overridden", r, i);
							const n = "function" == typeof this._extraHeaders[r] ? this._extraHeaders[r]() : this._extraHeaders[r];
							n && "" !== n && (e[r] = n)
						}))
					}
				},
				A = class {
					constructor(e) {
						this._settings = e, this._logger = new m("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new E(["application/jwk-set+json"], null, this._settings.extraHeaders), this._settings.signingKeys && (this._logger.debug("using signingKeys from settings"), this._signingKeys = this._settings.signingKeys), this._settings.metadata && (this._logger.debug("using metadata from settings"), this._metadata = this._settings.metadata), this._settings.fetchRequestCredentials && (this._logger.debug("using fetchRequestCredentials from settings"), this._fetchRequestCredentials = this._settings.fetchRequestCredentials)
					}
					resetSigningKeys() {
						this._signingKeys = null
					}
					async getMetadata() {
						const e = this._logger.create("getMetadata");
						if (this._metadata) return e.debug("using cached values"), this._metadata;
						if (!this._metadataUrl) throw e.throw(new Error("No authority or metadataUrl configured on settings")), null;
						e.debug("getting metadata from", this._metadataUrl);
						const t = await this._jsonService.getJson(this._metadataUrl, {
							credentials: this._fetchRequestCredentials
						});
						return e.debug("merging remote JSON with seed metadata"), this._metadata = Object.assign({}, this._settings.metadataSeed, t), this._metadata
					}
					getIssuer() {
						return this._getMetadataProperty("issuer")
					}
					getAuthorizationEndpoint() {
						return this._getMetadataProperty("authorization_endpoint")
					}
					getUserInfoEndpoint() {
						return this._getMetadataProperty("userinfo_endpoint")
					}
					getTokenEndpoint(e = !0) {
						return this._getMetadataProperty("token_endpoint", e)
					}
					getCheckSessionIframe() {
						return this._getMetadataProperty("check_session_iframe", !0)
					}
					getEndSessionEndpoint() {
						return this._getMetadataProperty("end_session_endpoint", !0)
					}
					getRevocationEndpoint(e = !0) {
						return this._getMetadataProperty("revocation_endpoint", e)
					}
					getKeysEndpoint(e = !0) {
						return this._getMetadataProperty("jwks_uri", e)
					}
					async _getMetadataProperty(e, t = !1) {
						const r = this._logger.create(`_getMetadataProperty('${e}')`),
							i = await this.getMetadata();
						if (r.debug("resolved"), void 0 === i[e]) {
							if (!0 === t) return void r.warn("Metadata does not contain optional property");
							r.throw(new Error("Metadata does not contain property " + e))
						}
						return i[e]
					}
					async getSigningKeys() {
						const e = this._logger.create("getSigningKeys");
						if (this._signingKeys) return e.debug("returning signingKeys from cache"), this._signingKeys;
						const t = await this.getKeysEndpoint(!1);
						e.debug("got jwks_uri", t);
						const r = await this._jsonService.getJson(t);
						if (e.debug("got key set", r), !Array.isArray(r.keys)) throw e.throw(new Error("Missing keys on keyset")), null;
						return this._signingKeys = r.keys, this._signingKeys
					}
				},
				z = class {
					constructor({
						prefix: e = "oidc.",
						store: t = localStorage
					} = {}) {
						this._logger = new m("WebStorageStateStore"), this._store = t, this._prefix = e
					}
					async set(e, t) {
						this._logger.create(`set('${e}')`), e = this._prefix + e, await this._store.setItem(e, t)
					}
					async get(e) {
						this._logger.create(`get('${e}')`), e = this._prefix + e;
						return await this._store.getItem(e)
					}
					async remove(e) {
						this._logger.create(`remove('${e}')`), e = this._prefix + e;
						const t = await this._store.getItem(e);
						return await this._store.removeItem(e), t
					}
					async getAllKeys() {
						this._logger.create("getAllKeys");
						const e = await this._store.length,
							t = [];
						for (let r = 0; r < e; r++) {
							const e = await this._store.key(r);
							e && 0 === e.indexOf(this._prefix) && t.push(e.substr(this._prefix.length))
						}
						return t
					}
				},
				I = class {
					constructor({
						authority: e,
						metadataUrl: t,
						metadata: r,
						signingKeys: i,
						metadataSeed: n,
						client_id: s,
						client_secret: a,
						response_type: o = "code",
						scope: c = "openid",
						redirect_uri: h,
						post_logout_redirect_uri: l,
						client_authentication: u = "client_secret_post",
						prompt: d,
						display: f,
						max_age: p,
						ui_locales: _,
						acr_values: g,
						resource: m,
						response_mode: w = "query",
						filterProtocolClaims: y = !0,
						loadUserInfo: v = !1,
						staleStateAgeInSeconds: b = 900,
						clockSkewInSeconds: k = 300,
						userInfoJwtIssuer: S = "OP",
						mergeClaims: x = !1,
						disablePKCE: E = !1,
						stateStore: A,
						refreshTokenCredentials: I,
						revokeTokenAdditionalContentTypes: T,
						fetchRequestCredentials: R,
						refreshTokenAllowedScope: O,
						extraQueryParams: B = {},
						extraTokenParams: P = {},
						extraHeaders: U = {}
					}) {
						if (this.authority = e, t ? this.metadataUrl = t : (this.metadataUrl = e, e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = r, this.metadataSeed = n, this.signingKeys = i, this.client_id = s, this.client_secret = a, this.response_type = o, this.scope = c, this.redirect_uri = h, this.post_logout_redirect_uri = l, this.client_authentication = u, this.prompt = d, this.display = f, this.max_age = p, this.ui_locales = _, this.acr_values = g, this.resource = m, this.response_mode = w, this.filterProtocolClaims = null == y || y, this.loadUserInfo = !!v, this.staleStateAgeInSeconds = b, this.clockSkewInSeconds = k, this.userInfoJwtIssuer = S, this.mergeClaims = !!x, this.disablePKCE = !!E, this.revokeTokenAdditionalContentTypes = T, R && I && console.warn("Both fetchRequestCredentials and refreshTokenCredentials is set. Only fetchRequestCredentials will be used."), this.fetchRequestCredentials = R || (I || "same-origin"), A) this.stateStore = A;
						else {
							const e = "undefined" != typeof window ? window.localStorage : new C;
							this.stateStore = new z({
								store: e
							})
						}
						this.refreshTokenAllowedScope = O, this.extraQueryParams = B, this.extraTokenParams = P, this.extraHeaders = U
					}
				},
				T = class {
					constructor(e, t) {
						this._settings = e, this._metadataService = t, this._logger = new m("UserInfoService"), this._getClaimsFromJwt = async e => {
							const t = this._logger.create("_getClaimsFromJwt");
							try {
								const r = v.decode(e);
								return t.debug("JWT decoding successful"), r
							} catch (r) {
								throw t.error("Error parsing JWT response"), r
							}
						}, this._jsonService = new E(void 0, this._getClaimsFromJwt, this._settings.extraHeaders)
					}
					async getClaims(e) {
						const t = this._logger.create("getClaims");
						e || this._logger.throw(new Error("No token passed"));
						const r = await this._metadataService.getUserInfoEndpoint();
						t.debug("got userinfo url", r);
						const i = await this._jsonService.getJson(r, {
							token: e,
							credentials: this._settings.fetchRequestCredentials
						});
						return t.debug("got claims", i), i
					}
				},
				R = class {
					constructor(e, t) {
						this._settings = e, this._metadataService = t, this._logger = new m("TokenClient"), this._jsonService = new E(this._settings.revokeTokenAdditionalContentTypes, null, this._settings.extraHeaders)
					}
					async exchangeCode({
						grant_type: e = "authorization_code",
						redirect_uri: t = this._settings.redirect_uri,
						client_id: r = this._settings.client_id,
						client_secret: i = this._settings.client_secret,
						...n
					}) {
						const s = this._logger.create("exchangeCode");
						r || s.throw(new Error("A client_id is required")), t || s.throw(new Error("A redirect_uri is required")), n.code || s.throw(new Error("A code is required"));
						const a = new URLSearchParams({
							grant_type: e,
							redirect_uri: t
						});
						for (const [l, u] of Object.entries(n)) null != u && a.set(l, u);
						let o;
						switch (this._settings.client_authentication) {
							case "client_secret_basic":
								if (!i) throw s.throw(new Error("A client_secret is required")), null;
								o = w.generateBasicAuth(r, i);
								break;
							case "client_secret_post":
								a.append("client_id", r), i && a.append("client_secret", i)
						}
						const c = await this._metadataService.getTokenEndpoint(!1);
						s.debug("got token endpoint");
						const h = await this._jsonService.postForm(c, {
							body: a,
							basicAuth: o,
							initCredentials: this._settings.fetchRequestCredentials
						});
						return s.debug("got response"), h
					}
					async exchangeCredentials({
						grant_type: e = "password",
						client_id: t = this._settings.client_id,
						client_secret: r = this._settings.client_secret,
						scope: i = this._settings.scope,
						...n
					}) {
						const s = this._logger.create("exchangeCredentials");
						t || s.throw(new Error("A client_id is required"));
						const a = new URLSearchParams({
							grant_type: e,
							scope: i
						});
						for (const [l, u] of Object.entries(n)) null != u && a.set(l, u);
						let o;
						switch (this._settings.client_authentication) {
							case "client_secret_basic":
								if (!r) throw s.throw(new Error("A client_secret is required")), null;
								o = w.generateBasicAuth(t, r);
								break;
							case "client_secret_post":
								a.append("client_id", t), r && a.append("client_secret", r)
						}
						const c = await this._metadataService.getTokenEndpoint(!1);
						s.debug("got token endpoint");
						const h = await this._jsonService.postForm(c, {
							body: a,
							basicAuth: o,
							initCredentials: this._settings.fetchRequestCredentials
						});
						return s.debug("got response"), h
					}
					async exchangeRefreshToken({
						grant_type: e = "refresh_token",
						client_id: t = this._settings.client_id,
						client_secret: r = this._settings.client_secret,
						timeoutInSeconds: i,
						...n
					}) {
						const s = this._logger.create("exchangeRefreshToken");
						t || s.throw(new Error("A client_id is required")), n.refresh_token || s.throw(new Error("A refresh_token is required"));
						const a = new URLSearchParams({
							grant_type: e
						});
						for (const [l, u] of Object.entries(n)) Array.isArray(u) ? u.forEach((e => a.append(l, e))) : null != u && a.set(l, u);
						let o;
						switch (this._settings.client_authentication) {
							case "client_secret_basic":
								if (!r) throw s.throw(new Error("A client_secret is required")), null;
								o = w.generateBasicAuth(t, r);
								break;
							case "client_secret_post":
								a.append("client_id", t), r && a.append("client_secret", r)
						}
						const c = await this._metadataService.getTokenEndpoint(!1);
						s.debug("got token endpoint");
						const h = await this._jsonService.postForm(c, {
							body: a,
							basicAuth: o,
							timeoutInSeconds: i,
							initCredentials: this._settings.fetchRequestCredentials
						});
						return s.debug("got response"), h
					}
					async revoke(e) {
						var t;
						const r = this._logger.create("revoke");
						e.token || r.throw(new Error("A token is required"));
						const i = await this._metadataService.getRevocationEndpoint(!1);
						r.debug(`got revocation endpoint, revoking ${null!=(t=e.token_type_hint)?t:"default token type"}`);
						const n = new URLSearchParams;
						for (const [s, a] of Object.entries(e)) null != a && n.set(s, a);
						n.set("client_id", this._settings.client_id), this._settings.client_secret && n.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(i, {
							body: n
						}), r.debug("got response")
					}
				},
				O = class {
					constructor(e, t, r) {
						this._settings = e, this._metadataService = t, this._claimsService = r, this._logger = new m("ResponseValidator"), this._userInfoService = new T(this._settings, this._metadataService), this._tokenClient = new R(this._settings, this._metadataService)
					}
					async validateSigninResponse(e, t) {
						const r = this._logger.create("validateSigninResponse");
						this._processSigninState(e, t), r.debug("state processed"), await this._processCode(e, t), r.debug("code processed"), e.isOpenId && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, null == t ? void 0 : t.skipUserInfo, e.isOpenId), r.debug("claims processed")
					}
					async validateCredentialsResponse(e, t) {
						const r = this._logger.create("validateCredentialsResponse");
						e.isOpenId && e.id_token && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, t, e.isOpenId), r.debug("claims processed")
					}
					async validateRefreshResponse(e, t) {
						const r = this._logger.create("validateRefreshResponse");
						e.userState = t.data, null != e.session_state || (e.session_state = t.session_state), null != e.scope || (e.scope = t.scope), e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), r.debug("ID Token validated")), e.id_token || (e.id_token = t.id_token, e.profile = t.profile);
						const i = e.isOpenId && !!e.id_token;
						await this._processClaims(e, !1, i), r.debug("claims processed")
					}
					validateSignoutResponse(e, t) {
						const r = this._logger.create("validateSignoutResponse");
						if (t.id !== e.state && r.throw(new Error("State does not match")), r.debug("state validated"), e.userState = t.data, e.error) throw r.warn("Response was error", e.error), new S(e)
					}
					_processSigninState(e, t) {
						const r = this._logger.create("_processSigninState");
						if (t.id !== e.state && r.throw(new Error("State does not match")), t.client_id || r.throw(new Error("No client_id on state")), t.authority || r.throw(new Error("No authority on state")), this._settings.authority !== t.authority && r.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== t.client_id && r.throw(new Error("client_id mismatch on settings vs. signin state")), r.debug("state validated"), e.userState = t.data, e.url_state = t.url_state, null != e.scope || (e.scope = t.scope), e.error) throw r.warn("Response was error", e.error), new S(e);
						t.code_verifier && !e.code && r.throw(new Error("Expected code in response"))
					}
					async _processClaims(e, t = !1, r = !0) {
						const i = this._logger.create("_processClaims");
						if (e.profile = this._claimsService.filterProtocolClaims(e.profile), t || !this._settings.loadUserInfo || !e.access_token) return void i.debug("not loading user info");
						i.debug("loading user info");
						const n = await this._userInfoService.getClaims(e.access_token);
						i.debug("user info claims received from user info endpoint"), r && n.sub !== e.profile.sub && i.throw(new Error("subject from UserInfo response does not match subject in ID Token")), e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(n)), i.debug("user info claims received, updated profile:", e.profile)
					}
					async _processCode(e, t) {
						const r = this._logger.create("_processCode");
						if (e.code) {
							r.debug("Validating code");
							const i = await this._tokenClient.exchangeCode({
								client_id: t.client_id,
								client_secret: t.client_secret,
								code: e.code,
								redirect_uri: t.redirect_uri,
								code_verifier: t.code_verifier,
								...t.extraTokenParams
							});
							Object.assign(e, i)
						} else r.debug("No code to process")
					}
					_validateIdTokenAttributes(e, t) {
						var r;
						const i = this._logger.create("_validateIdTokenAttributes");
						i.debug("decoding ID Token JWT");
						const n = v.decode(null != (r = e.id_token) ? r : "");
						if (n.sub || i.throw(new Error("ID Token is missing a subject claim")), t) {
							const e = v.decode(t);
							n.sub !== e.sub && i.throw(new Error("sub in id_token does not match current sub")), n.auth_time && n.auth_time !== e.auth_time && i.throw(new Error("auth_time in id_token does not match original auth_time")), n.azp && n.azp !== e.azp && i.throw(new Error("azp in id_token does not match original azp")), !n.azp && e.azp && i.throw(new Error("azp not in id_token, but present in original id_token"))
						}
						e.profile = n
					}
				},
				B = class {
					constructor(e) {
						this.id = e.id || w.generateUUIDv4(), this.data = e.data, e.created && e.created > 0 ? this.created = e.created : this.created = b.getEpochTime(), this.request_type = e.request_type, this.url_state = e.url_state
					}
					toStorageString() {
						return new m("State").create("toStorageString"), JSON.stringify({
							id: this.id,
							data: this.data,
							created: this.created,
							request_type: this.request_type,
							url_state: this.url_state
						})
					}
					static fromStorageString(e) {
						return m.createStatic("State", "fromStorageString"), new B(JSON.parse(e))
					}
					static async clearStaleState(e, t) {
						const r = m.createStatic("State", "clearStaleState"),
							i = b.getEpochTime() - t,
							n = await e.getAllKeys();
						r.debug("got keys", n);
						for (let a = 0; a < n.length; a++) {
							const t = n[a],
								o = await e.get(t);
							let c = !1;
							if (o) try {
								const e = B.fromStorageString(o);
								r.debug("got item from key:", t, e.created), e.created <= i && (c = !0)
							} catch (s) {
								r.error("Error parsing state for key:", t, s), c = !0
							} else r.debug("no item in storage for key:", t), c = !0;
							c && (r.debug("removed item for key:", t), e.remove(t))
						}
					}
				},
				P = class extends B {
					constructor(e) {
						super(e), !0 === e.code_verifier ? this.code_verifier = w.generateCodeVerifier() : e.code_verifier && (this.code_verifier = e.code_verifier), this.code_verifier && (this.code_challenge = w.generateCodeChallenge(this.code_verifier)), this.authority = e.authority, this.client_id = e.client_id, this.redirect_uri = e.redirect_uri, this.scope = e.scope, this.client_secret = e.client_secret, this.extraTokenParams = e.extraTokenParams, this.response_mode = e.response_mode, this.skipUserInfo = e.skipUserInfo
					}
					toStorageString() {
						return new m("SigninState").create("toStorageString"), JSON.stringify({
							id: this.id,
							data: this.data,
							created: this.created,
							request_type: this.request_type,
							url_state: this.url_state,
							code_verifier: this.code_verifier,
							authority: this.authority,
							client_id: this.client_id,
							redirect_uri: this.redirect_uri,
							scope: this.scope,
							client_secret: this.client_secret,
							extraTokenParams: this.extraTokenParams,
							response_mode: this.response_mode,
							skipUserInfo: this.skipUserInfo
						})
					}
					static fromStorageString(e) {
						m.createStatic("SigninState", "fromStorageString");
						const t = JSON.parse(e);
						return new P(t)
					}
				},
				U = class {
					constructor({
						url: e,
						authority: t,
						client_id: r,
						redirect_uri: i,
						response_type: n,
						scope: s,
						state_data: a,
						response_mode: o,
						request_type: c,
						client_secret: h,
						nonce: l,
						url_state: u,
						resource: d,
						skipUserInfo: f,
						extraQueryParams: p,
						extraTokenParams: _,
						disablePKCE: g,
						...w
					}) {
						if (this._logger = new m("SigninRequest"), !e) throw this._logger.error("ctor: No url passed"), new Error("url");
						if (!r) throw this._logger.error("ctor: No client_id passed"), new Error("client_id");
						if (!i) throw this._logger.error("ctor: No redirect_uri passed"), new Error("redirect_uri");
						if (!n) throw this._logger.error("ctor: No response_type passed"), new Error("response_type");
						if (!s) throw this._logger.error("ctor: No scope passed"), new Error("scope");
						if (!t) throw this._logger.error("ctor: No authority passed"), new Error("authority");
						this.state = new P({
							data: a,
							request_type: c,
							url_state: u,
							code_verifier: !g,
							client_id: r,
							authority: t,
							redirect_uri: i,
							response_mode: o,
							client_secret: h,
							scope: s,
							extraTokenParams: _,
							skipUserInfo: f
						});
						const y = new URL(e);
						y.searchParams.append("client_id", r), y.searchParams.append("redirect_uri", i), y.searchParams.append("response_type", n), y.searchParams.append("scope", s), l && y.searchParams.append("nonce", l);
						let v = this.state.id;
						if (u && (v = `${v};${u}`), y.searchParams.append("state", v), this.state.code_challenge && (y.searchParams.append("code_challenge", this.state.code_challenge), y.searchParams.append("code_challenge_method", "S256")), d) {
							(Array.isArray(d) ? d : [d]).forEach((e => y.searchParams.append("resource", e)))
						}
						for (const [m, b] of Object.entries({
								response_mode: o,
								...w,
								...p
							})) null != b && y.searchParams.append(m, b.toString());
						this.url = y.href
					}
				},
				N = class {
					constructor(e) {
						if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = e.get("state"), this.session_state = e.get("session_state"), this.state) {
							const e = decodeURIComponent(this.state).split(";");
							this.state = e[0], e.length > 1 && (this.url_state = e.slice(1).join(";"))
						}
						this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri"), this.code = e.get("code")
					}
					get expires_in() {
						if (void 0 !== this.expires_at) return this.expires_at - b.getEpochTime()
					}
					set expires_in(e) {
						"string" == typeof e && (e = Number(e)), void 0 !== e && e >= 0 && (this.expires_at = Math.floor(e) + b.getEpochTime())
					}
					get isOpenId() {
						var e;
						return (null == (e = this.scope) ? void 0 : e.split(" ").includes("openid")) || !!this.id_token
					}
				},
				D = class {
					constructor({
						url: e,
						state_data: t,
						id_token_hint: r,
						post_logout_redirect_uri: i,
						extraQueryParams: n,
						request_type: s,
						client_id: a
					}) {
						if (this._logger = new m("SignoutRequest"), !e) throw this._logger.error("ctor: No url passed"), new Error("url");
						const o = new URL(e);
						r && o.searchParams.append("id_token_hint", r), a && o.searchParams.append("client_id", a), i && (o.searchParams.append("post_logout_redirect_uri", i), t && (this.state = new B({
							data: t,
							request_type: s
						}), o.searchParams.append("state", this.state.id)));
						for (const [c, h] of Object.entries({
								...n
							})) null != h && o.searchParams.append(c, h.toString());
						this.url = o.href
					}
				},
				F = class {
					constructor(e) {
						this.state = e.get("state"), this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri")
					}
				},
				j = ["nbf", "jti", "auth_time", "nonce", "acr", "amr", "azp", "at_hash"],
				L = ["sub", "iss", "aud", "exp", "iat"],
				W = class {
					constructor(e) {
						this._settings = e, this._logger = new m("ClaimsService")
					}
					filterProtocolClaims(e) {
						const t = {
							...e
						};
						if (this._settings.filterProtocolClaims) {
							let e;
							e = Array.isArray(this._settings.filterProtocolClaims) ? this._settings.filterProtocolClaims : j;
							for (const r of e) L.includes(r) || delete t[r]
						}
						return t
					}
					mergeClaims(e, t) {
						const r = {
							...e
						};
						for (const [i, n] of Object.entries(t))
							for (const e of Array.isArray(n) ? n : [n]) {
								const t = r[i];
								void 0 === t ? r[i] = e : Array.isArray(t) ? t.includes(e) || t.push(e) : r[i] !== e && ("object" == typeof e && this._settings.mergeClaims ? r[i] = this.mergeClaims(t, e) : r[i] = [t, e])
							}
						return r
					}
				},
				M = class {
					constructor(e, t) {
						this._logger = new m("OidcClient"), this.settings = e instanceof I ? e : new I(e), this.metadataService = null != t ? t : new A(this.settings), this._claimsService = new W(this.settings), this._validator = new O(this.settings, this.metadataService, this._claimsService), this._tokenClient = new R(this.settings, this.metadataService)
					}
					async createSigninRequest({
						state: e,
						request: t,
						request_uri: r,
						request_type: i,
						id_token_hint: n,
						login_hint: s,
						skipUserInfo: a,
						nonce: o,
						url_state: c,
						response_type: h = this.settings.response_type,
						scope: l = this.settings.scope,
						redirect_uri: u = this.settings.redirect_uri,
						prompt: d = this.settings.prompt,
						display: f = this.settings.display,
						max_age: p = this.settings.max_age,
						ui_locales: _ = this.settings.ui_locales,
						acr_values: g = this.settings.acr_values,
						resource: m = this.settings.resource,
						response_mode: w = this.settings.response_mode,
						extraQueryParams: y = this.settings.extraQueryParams,
						extraTokenParams: v = this.settings.extraTokenParams
					}) {
						const b = this._logger.create("createSigninRequest");
						if ("code" !== h) throw new Error("Only the Authorization Code flow (with PKCE) is supported");
						const k = await this.metadataService.getAuthorizationEndpoint();
						b.debug("Received authorization endpoint", k);
						const S = new U({
							url: k,
							authority: this.settings.authority,
							client_id: this.settings.client_id,
							redirect_uri: u,
							response_type: h,
							scope: l,
							state_data: e,
							url_state: c,
							prompt: d,
							display: f,
							max_age: p,
							ui_locales: _,
							id_token_hint: n,
							login_hint: s,
							acr_values: g,
							resource: m,
							request: t,
							request_uri: r,
							extraQueryParams: y,
							extraTokenParams: v,
							request_type: i,
							response_mode: w,
							client_secret: this.settings.client_secret,
							skipUserInfo: a,
							nonce: o,
							disablePKCE: this.settings.disablePKCE
						});
						await this.clearStaleState();
						const x = S.state;
						return await this.settings.stateStore.set(x.id, x.toStorageString()), S
					}
					async readSigninResponseState(e, t = !1) {
						const r = this._logger.create("readSigninResponseState"),
							i = new N(k.readParams(e, this.settings.response_mode));
						if (!i.state) throw r.throw(new Error("No state in response")), null;
						const n = await this.settings.stateStore[t ? "remove" : "get"](i.state);
						if (!n) throw r.throw(new Error("No matching state found in storage")), null;
						return {
							state: P.fromStorageString(n),
							response: i
						}
					}
					async processSigninResponse(e) {
						const t = this._logger.create("processSigninResponse"),
							{
								state: r,
								response: i
							} = await this.readSigninResponseState(e, !0);
						return t.debug("received state from storage; validating response"), await this._validator.validateSigninResponse(i, r), i
					}
					async processResourceOwnerPasswordCredentials({
						username: e,
						password: t,
						skipUserInfo: r = !1,
						extraTokenParams: i = {}
					}) {
						const n = await this._tokenClient.exchangeCredentials({
								username: e,
								password: t,
								...i
							}),
							s = new N(new URLSearchParams);
						return Object.assign(s, n), await this._validator.validateCredentialsResponse(s, r), s
					}
					async useRefreshToken({
						state: e,
						timeoutInSeconds: t
					}) {
						var r;
						const i = this._logger.create("useRefreshToken");
						let n;
						if (void 0 === this.settings.refreshTokenAllowedScope) n = e.scope;
						else {
							const t = this.settings.refreshTokenAllowedScope.split(" ");
							n = ((null == (r = e.scope) ? void 0 : r.split(" ")) || []).filter((e => t.includes(e))).join(" ")
						}
						const s = await this._tokenClient.exchangeRefreshToken({
								refresh_token: e.refresh_token,
								resource: e.resource,
								scope: n,
								timeoutInSeconds: t
							}),
							a = new N(new URLSearchParams);
						return Object.assign(a, s), i.debug("validating response", a), await this._validator.validateRefreshResponse(a, {
							...e,
							scope: n
						}), a
					}
					async createSignoutRequest({
						state: e,
						id_token_hint: t,
						client_id: r,
						request_type: i,
						post_logout_redirect_uri: n = this.settings.post_logout_redirect_uri,
						extraQueryParams: s = this.settings.extraQueryParams
					} = {}) {
						const a = this._logger.create("createSignoutRequest"),
							o = await this.metadataService.getEndSessionEndpoint();
						if (!o) throw a.throw(new Error("No end session endpoint")), null;
						a.debug("Received end session endpoint", o), r || !n || t || (r = this.settings.client_id);
						const c = new D({
							url: o,
							id_token_hint: t,
							client_id: r,
							post_logout_redirect_uri: n,
							state_data: e,
							extraQueryParams: s,
							request_type: i
						});
						await this.clearStaleState();
						const h = c.state;
						return h && (a.debug("Signout request has state to persist"), await this.settings.stateStore.set(h.id, h.toStorageString())), c
					}
					async readSignoutResponseState(e, t = !1) {
						const r = this._logger.create("readSignoutResponseState"),
							i = new F(k.readParams(e, this.settings.response_mode));
						if (!i.state) {
							if (r.debug("No state in response"), i.error) throw r.warn("Response was error:", i.error), new S(i);
							return {
								state: void 0,
								response: i
							}
						}
						const n = await this.settings.stateStore[t ? "remove" : "get"](i.state);
						if (!n) throw r.throw(new Error("No matching state found in storage")), null;
						return {
							state: B.fromStorageString(n),
							response: i
						}
					}
					async processSignoutResponse(e) {
						const t = this._logger.create("processSignoutResponse"),
							{
								state: r,
								response: i
							} = await this.readSignoutResponseState(e, !0);
						return r ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(i, r)) : t.debug("No state from storage; skipping response validation"), i
					}
					clearStaleState() {
						return this._logger.create("clearStaleState"), B.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds)
					}
					async revokeToken(e, t) {
						return this._logger.create("revokeToken"), await this._tokenClient.revoke({
							token: e,
							token_type_hint: t
						})
					}
				}
		}
	}
]);
//# sourceMappingURL=173.f2f4733f506e57eda013.js.map