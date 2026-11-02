// Kantonsgrenzen und Seen: swiss-maps 4.7.0 (Daten BFS 2024), wird beim Laden vereinfacht.
(function () {
  if (window.KARTE) return;
  const B = "https://cdn.jsdelivr.net/npm/swiss-maps@4.7.0/2024/";
  const X0 = 2485000, Y1 = 1296000, S = 1000 / 350000;
  function parse(buf) {
    const dv = new DataView(buf); let o = 100; const out = [];
    while (o < buf.byteLength) {
      const len = dv.getInt32(o + 4, false) * 2, t = dv.getInt32(o + 8, true), rec = [];
      if (t === 5) {
        const np = dv.getInt32(o + 44, true), npt = dv.getInt32(o + 48, true), parts = [];
        for (let i = 0; i < np; i++) parts.push(dv.getInt32(o + 52 + 4 * i, true));
        const p0 = o + 52 + 4 * np;
        for (let i = 0; i < np; i++) {
          const a = parts[i], b = i + 1 < np ? parts[i + 1] : npt, ring = [];
          for (let k = a; k < b; k++) ring.push([(dv.getFloat64(p0 + 16 * k, true) - X0) * S, (Y1 - dv.getFloat64(p0 + 16 * k + 8, true)) * S]);
          rec.push(ring);
        }
      }
      out.push(rec); o += 8 + len;
    }
    return out;
  }
  function dp(pts, eps) {
    if (pts.length < 3) return pts;
    const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
    const st = [[0, pts.length - 1]];
    while (st.length) {
      const [a, b] = st.pop(); let md = 0, mi = -1;
      const [x1, y1] = pts[a], [x2, y2] = pts[b], dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
      for (let i = a + 1; i < b; i++) {
        const d = L < 1e-9 ? Math.hypot(pts[i][0] - x1, pts[i][1] - y1) : Math.abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / L;
        if (d > md) { md = d; mi = i; }
      }
      if (md > eps) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
    }
    return pts.filter((_, i) => keep[i]);
  }
  const flaeche = r => { let s = 0; for (let i = 0; i < r.length; i++) { const [a, b] = r[i], [c, d] = r[(i + 1) % r.length]; s += a * d - b * c; } return Math.abs(s / 2); };
  const pfad = (rings, eps, minA) => rings.filter(r => flaeche(r) >= minA).map(r => { const s = dp(r, eps); s.pop(); return "M" + s.map(p => (Math.round(p[0] * 10) / 10) + " " + (Math.round(p[1] * 10) / 10)).join("L") + "Z"; }).join("");
  const hole = f => fetch(B + f).then(r => { if (!r.ok) throw new Error(f); return r.arrayBuffer(); });
  window.KARTE_LADEN = Promise.all([hole("cantons.shp"), hole("lakes.shp")]).then(([c, l]) => {
    const C = parse(c).map(r => pfad(r, 0.55, 0.3));
    const L = parse(l).map(r => ({ a: r.reduce((s, x) => s + flaeche(x), 0), p: pfad(r, 0.6, 0.3) })).filter(x => x.a > 8).map(x => x.p);
    window.KARTE = { C, L };
  });
})();
