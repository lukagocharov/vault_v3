(() => {
	var e;
	const t = "light",
		l = document.documentElement;
	let a = t;
	const o = null !== (e = window.localStorage.getItem("global_theming_selection")) && void 0 !== e ? e : (() => {
		const e = window.localStorage.getItem("global"),
			t = JSON.parse(e);
		return t ? t.theme : null
	})();
	o && (o.indexOf("system") > -1 ? a = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : o.indexOf("dark") > -1 && (a = "dark")), l.classList.contains("theme_" + a) || (l.classList.remove("theme_" + t), l.classList.add("theme_" + a))
})();
//# sourceMappingURL=theme_head.4cb181fc19f2a308ba73.js.map