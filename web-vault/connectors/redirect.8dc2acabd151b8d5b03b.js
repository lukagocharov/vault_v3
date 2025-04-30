window.addEventListener("load", (() => {
	const n = new URL(window.location.href).hash.substring(1);
	if (!n) throw new Error("No fragment found in URL. Cannot determine redirect.");
	const o = `${window.location.origin}/#/${n}`;
	window.location.href = o
}));
//# sourceMappingURL=redirect.8dc2acabd151b8d5b03b.js.map