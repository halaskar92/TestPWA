if (!self.define) { let e, i = {}; const c = (c, r) => (c = new URL(c + ".js", r).href, i[c] || new Promise((i => { if ("document" in self) { const e = document.createElement("script"); e.src = c, e.onload = i, document.head.appendChild(e) } else e = c, importScripts(c), i() })).then((() => { let e = i[c]; if (!e) throw new Error(`Module ${c} didn’t register its module`); return e }))); self.define = (r, s) => { const n = e || ("document" in self ? document.currentScript.src : "") || location.href; if (i[n]) return; let o = {}; const t = e => c(e, n), a = { module: { uri: n }, exports: o, require: t }; i[n] = Promise.all(r.map((e => a[e] || t(e)))).then((e => (s(...e), o))) } } define(["./workbox-926a8ce9"], (function (e) { "use strict"; self.addEventListener("message", (e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() })), e.precacheAndRoute([{ url: "index.html", revision: "43c0adf3faeebc0a8d91eb053ba1d68f" }, { url: "manifest.json", revision: "acd0a9684ec802fa4d85362dd06b280a" }, { url: "package-lock.json", revision: "60a88aaec3bf4ca9b3a3e621b7f70a43" }, { url: "package.json", revision: "36f5c46bab5012ec5fb5c31fd087dc04" }, { url: "pwabuilder-adv-sw.js", revision: "396551c13ecb7c9bd21e6dc2f3c49467" }], { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }) }));
//# sourceMappingURL=sw.js.map
