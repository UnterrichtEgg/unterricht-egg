// Lernwelt: Ortsansicht, Arbeitsaufträge (Stationen der Lernplattform) und Karteikarten im Spiel
const LW = {
  key: () => SP.speicher + "-auftraege",
  daten() { try { return JSON.parse(localStorage.getItem(LW.key()) || "{}"); } catch (e) { return {}; } },
  speichern(d) { try { localStorage.setItem(LW.key(), JSON.stringify(d)); } catch (e) {} },
  best(id) { const d = LW.daten()[id]; return d ? Math.max(...Object.values(d)) : null; },
  bestStufe(id, st) { const d = LW.daten()[id]; return d && d[st] != null ? d[st] : null; },
  unit(id) { return (window.BERUF_UNITS || []).find(u => u.id === id); },
  stufe(u, n) { return n === 1 ? Object.assign({}, u, { stufe: 1 }) : Object.assign({}, u, (window.STUFEN[u.id] || {})[n], { id: u.id, r: u.r, stufe: n }); },
  norm: s => String(s ?? "").replace(/ß/g, "ss").replace(/[„“”"«»‹›]/g, "").replace(/[’`]/g, "'").replace(/\s+/g, " ").replace(/\s+([,.!?:;])/g, "$1").trim().replace(/[.!?]+$/, "").trim().toLowerCase(),
  leer: v => v == null || v === "" || (Array.isArray(v) && !v.length),
  ok(b, it, v) {
    if (LW.leer(v)) return false;
    if (b.t === "wahl" || b.t === "zuordnen" || b.t === "paare") return v === it.k;
    if (b.t === "fehler") return v === it.f;
    if (b.t === "luecke" || b.t === "umformen") return it.k.some(k => LW.norm(k) === LW.norm(v));
    if (b.t === "reihe") return v.length === it.o.length && v.every((x, i) => x === i);
    if (b.t === "rechnen") { const z = zahl(v); return !isNaN(z) && Math.abs(z - it.k) <= (it.tol || 0) + 1e-9; }
    if (b.t === "offen") return String(v).trim().length >= 10;
    if (b.t === "mehrfach" || b.t === "markieren") return v.length === it.k.length && it.k.every(k => v.includes(k));
    return false;
  },
  richtig(b, it) {
    if (b.t === "wahl") return it.s.includes("{}") ? it.s.replace("{}", it.o[it.k]) : it.o[it.k];
    if (b.t === "zuordnen" || b.t === "paare") return b.o[it.k];
    if (b.t === "luecke") return it.s.replace("{}", it.k[0]);
    if (b.t === "fehler") return `«${it.s.split(/\s+/)[it.f].replace(/[.,!?:;]+$/, "")}» → ${it.r}`;
    if (b.t === "reihe") return it.o.map((x, i) => `${i + 1}. ${x}`).join(" · ");
    if (b.t === "rechnen") return String(it.k).replace(".", ",") + (it.e ? " " + it.e : "");
    if (b.t === "mehrfach") return it.k.map(k => it.o[k]).join(" · ");
    if (b.t === "markieren") return it.k.map(k => "«" + it.seg[k].t + "»").join(" · ");
    if (b.t === "offen") return "";
    return "";
  },
  ANL: { wahl: "Wähle die richtige Antwort.", zuordnen: "Ordne zu.", paare: "Welche Erklärung passt?", luecke: "Setze das fehlende Wort ein.", fehler: "Ein Wort ist falsch. Tippe es an.", reihe: "Tippe die Schritte in der richtigen Reihenfolge an.", rechnen: "Rechne. Schreibe nur die Zahl.", offen: "Schreibe deine Antwort in ganzen Sätzen.", mehrfach: "Mehrere Antworten sind richtig. Wähle alle.", markieren: "Tippe alle passenden Stellen an." }
};

// ------------------------------------------------------------ Ortsansicht
function ort(z) {
  const ph = z.k ? phase(z.k) : null, units = (z.units || []).map(LW.unit).filter(Boolean);
  const karten = z.karten && window.BERUF_KARTEN ? window.BERUF_KARTEN[z.karten] : null;
  zeige(`<div class="hud"><span class="t">📍 ${esc(z.label)}</span><div class="pills">${ph ? `<span class="pill uhrpill">🕒 ${esc(ph.uhr)}</span>` : ""}<span class="pill red">${gesamt()} / ${MAXP()} Punkte</span></div></div>
    ${z.bild ? `<div class="szene pop">${z.bild()}</div>` : ph && ph.bild ? `<div class="szene pop">${ph.bild()}</div>` : ""}
    <div class="card stack" style="margin-top:12px">
      ${z.person ? `<div class="sprecher"><span class="ava" aria-hidden="true">${z.person[0]}</span><div><b>${esc(z.person[1])}</b><div class="blase">${esc(z.sagt)}</div></div></div>` : ""}
      ${z.info ? `<p class="muted">${esc(z.info)}</p>` : ""}
    </div>
    ${ph ? `<h3 class="ort-h">⏱️ Schichtaufgabe</h3>
      <button class="auftrag-k schicht" id="schicht"><span class="ak-ic">${ph.ic}</span><span><b>${esc(ph.uhr)} · ${esc(ph.t)}</b><br><span class="muted">${esc(ph.d)}</span></span><span class="ak-st">${fertig(ph.key) ? sternStr(sterneFuer(G.best[ph.key])) : "offen"}</span></button>` : ""}
    ${units.length ? `<h3 class="ort-h">📋 Arbeitsaufträge an diesem Ort</h3><p class="muted" style="margin:-4px 0 10px">Jeder Auftrag hat einen Lerntext und Aufgaben in drei Niveaus. Deine Ergebnisse sieht deine Lehrperson.</p>
      <div class="auftraege">${units.map(u => `<div class="auftrag-k"><span class="ak-ic">📋</span><span><b>${esc(u.titel)}</b><br><span class="muted">${esc(u.kanal)} · ${esc(u.kurz)}</span>
        <span class="niveaus">${[1, 2, 3].map(n => { const b = LW.bestStufe(u.id, n); return `<button class="niv-b${n === (E() ? 2 : 1) && b == null ? " empf" : ""}" data-u="${u.id}" data-n="${n}" title="${["einfach", "mittel", "schwierig"][n - 1]}"><span class="st">${"★".repeat(n)}</span> ${["einfach", "mittel", "schwierig"][n - 1]}${b != null ? ` <small>${b >= 75 ? "✓ " : ""}${b}%</small>` : n === (E() ? 2 : 1) ? " <small>Start hier</small>" : ""}</button>`; }).join("")}</span></span></div>`).join("")}</div>` : ""}
    ${karten ? `<h3 class="ort-h">🗂️ Fachbegriffe</h3>
      <div class="auftraege"><button class="auftrag-k" id="kl"><span class="ak-ic">🗂️</span><span><b>Karteikarten lernen</b><br><span class="muted">${karten.karten.length} Fachbegriffe zum Umdrehen</span></span></button>
      <button class="auftrag-k" id="kq"><span class="ak-ic">⚡</span><span><b>Begriffe-Blitz</b><br><span class="muted">10 Begriffe gegen die Zeit erkennen${LW.daten()["karten-" + z.karten] ? ` · Rekord ${LW.daten()["karten-" + z.karten].quiz} von 10` : ""}</span></span></button></div>` : ""}
    <div class="row" style="margin-top:16px"><button class="btn ghost small" id="zplan">← Zum Plan</button></div>`);
  $("#zplan").onclick = hub;
  if ($("#schicht")) $("#schicht").onclick = () => intro(ph);
  $$(".niv-b").forEach(b => b.onclick = () => auftrag(b.dataset.u, +b.dataset.n, z));
  if ($("#kl")) $("#kl").onclick = () => kartenLernen(z.karten, z);
  if ($("#kq")) $("#kq").onclick = () => kartenBlitz(z.karten, z);
}

// ------------------------------------------------------------ Arbeitsauftrag (Station)
function auftrag(id, n, z) {
  const u = LW.stufe(LW.unit(id), n);
  zeige(`<div class="hud"><span class="t">📋 ${esc(u.titel)}</span><div class="pills"><span class="pill">${"★".repeat(n)} ${["einfach", "mittel", "schwierig"][n - 1]}</span><span class="pill">📍 ${esc(z.label)}</span></div></div>
    <div class="card stack merkblatt pop">
      ${z.person ? `<div class="sprecher"><span class="ava" aria-hidden="true">${z.person[0]}</span><div><b>${esc(z.person[1])}</b><div class="blase">Lies zuerst das Merkblatt. Danach gibt es ${u.aufg.reduce((s, b) => s + b.i.length, 0)} Aufgaben.</div></div></div>` : ""}
      <span class="eyebrow">Merkblatt</span>
      ${String(u.regel).split("\n\n").map(p => p.startsWith("» ") ? `<p class="lernbox">${esc(p.slice(2))}</p>` : `<p>${esc(p)}</p>`).join("")}
      ${u.bsp && u.bsp.length ? `<dl class="glossar">${u.bsp.map(w => `<div><dt>${esc(w[0])}</dt><dd>${esc(w[1])}</dd></div>`).join("")}</dl>` : ""}
      <div class="row"><button class="btn" id="start">Aufgaben starten</button><button class="btn ghost small" id="zort">← Zurück</button></div>
    </div>`);
  $("#zort").onclick = () => ort(z);
  $("#start").onclick = () => aufgaben(u, z);
}
function aufgaben(u, z) {
  const liste = []; u.aufg.forEach((b, bi) => b.i.forEach((it, ii) => liste.push({ b, bi, it, ii })));
  const sp = u.aufg.map(b => b.i.map(() => null));
  let r = 0, pkt = 0;
  zeige(`<div class="hud"><span class="t">📋 ${esc(u.titel)}</span><div class="pills"><span class="pill" id="az"></span><span class="pill red" id="ap"></span></div></div>
    <div class="zeit" aria-hidden="true"><span id="fort" style="transition:transform .3s"></span></div>
    <div class="card stack" id="aufg"></div><div id="fb" aria-live="polite"></div>
    <div class="row" style="margin-top:14px"><button class="btn ghost small" id="zab">← Auftrag abbrechen</button></div>`);
  $("#zab").onclick = () => ort(z);
  function zeigeItem() {
    if (r >= liste.length) return fertigAuftrag();
    const { b, it } = liste[r];
    $("#az").textContent = `Aufgabe ${r + 1} / ${liste.length}`; $("#ap").textContent = `${pkt} richtig`;
    $("#fort").style.transform = `scaleX(${r / liste.length})`;
    $("#aufg").innerHTML = `<span class="qtyp">${esc(b.a || LW.ANL[b.t])}</span>${itemHtml(b, it)}<div class="row"><button class="btn" id="pruef">Prüfen</button></div>`;
    $("#fb").innerHTML = "";
    bindItem(b, it);
    $("#pruef").onclick = () => pruefen();
    meldeHoehe();
  }
  function pruefen() {
    const { b, it, bi, ii } = liste[r], v = lesen(b, it);
    if (LW.leer(v) && $("#pruef").dataset.sicher !== "1") { $("#pruef").dataset.sicher = "1"; $("#pruef").textContent = "Ohne Antwort weiter"; $("#fb").innerHTML = `<p class="muted">Du hast noch nichts gewählt.</p>`; return; }
    sp[bi][ii] = v; const ok = LW.ok(b, it, v); if (ok) pkt++;
    markieren(b, it, v);
    const rt = LW.richtig(b, it);
    $("#fb").innerHTML = b.t === "offen" ? fb(ok, ok ? "Danke für deine Antwort!" : "Schreibe mindestens einen ganzen Satz.", it.x ? "Tipp: " + it.x : "")
      : fb(ok, ok ? ["Richtig!", "Super!", "Genau!", "Stark!"][r % 4] : "Leider nicht.", (ok ? "" : "Richtig: " + rt + (it.x ? " – " : "")) + (it.x || ""));
    $("#fb").insertAdjacentHTML("beforeend", `<div class="row" style="margin-top:10px"><button class="btn" id="weiter">${r + 1 < liste.length ? "Weiter" : "Auswertung"}</button></div>`);
    $("#pruef").disabled = true; $$("#aufg button, #aufg input, #aufg textarea, #aufg select").forEach(x => { if (x.id !== "weiter") x.disabled = true; });
    $("#ap").textContent = `${pkt} richtig`;
    $("#weiter").onclick = () => { r++; zeigeItem(); }; $("#weiter").focus({ preventScroll: true });
    meldeHoehe();
  }
  function fertigAuftrag() {
    const prozent = Math.round(pkt / liste.length * 100), d = LW.daten();
    d[u.id] = d[u.id] || {}; const alt = d[u.id][u.stufe]; if (alt == null || prozent > alt) d[u.id][u.stufe] = prozent; LW.speichern(d);
    try { if (parent !== window) parent.postMessage({ stationErgebnis: { id: u.id, stufe: u.stufe, sp } }, "*"); } catch (e) {}
    const st = sterneFuer(prozent);
    zeige(`<div class="card stack pop" style="text-align:center">
      <span class="eyebrow">Auftrag erledigt · ${"★".repeat(u.stufe)} ${["einfach", "mittel", "schwierig"][u.stufe - 1]}</span>
      <h2>📋 ${esc(u.titel)}</h2>
      <p class="big">${pkt} / ${liste.length}</p><p class="sterne" aria-label="${st} von 3 Sternen">${sternStr(st)}</p>
      <p class="muted" id="gespeichert">${parent !== window ? "Ergebnis wird für deine Lehrperson gespeichert …" : "Im eigenen Fenster wird das Ergebnis nur auf diesem Gerät gespeichert."}</p>
      <p>${prozent >= 90 && u.stufe < 3 ? "Super! Probier doch das nächste Niveau." : prozent < 50 ? "Lies das Merkblatt nochmals und versuche es erneut." : "Gut gemacht!"}</p>
      <div class="row" style="justify-content:center">${prozent >= 75 && u.stufe < 3 ? `<button class="btn" id="hoeher">${"★".repeat(u.stufe + 1)} Nächstes Niveau</button>` : `<button class="btn" id="nochmal">Nochmals</button>`}<button class="btn ghost" id="zort">Zurück: ${esc(z.label)}</button></div></div>`);
    $("#zort").onclick = () => ort(z);
    if ($("#hoeher")) $("#hoeher").onclick = () => auftrag(u.id, u.stufe + 1, z);
    if ($("#nochmal")) $("#nochmal").onclick = () => auftrag(u.id, u.stufe, z);
  }
  zeigeItem();
}
addEventListener("message", e => { if (e.data && e.data.stationGespeichert && $("#gespeichert")) $("#gespeichert").textContent = { ok: "✓ Gespeichert. Deine Lehrperson sieht dein Ergebnis.", lehrer: "Als Lehrperson wird nichts gespeichert.", fehler: "Speichern fehlgeschlagen. Prüfe die Internetverbindung und löse den Auftrag nochmals." }[e.data.stationGespeichert] || ""; });

// Darstellung je Aufgabentyp
function itemHtml(b, it) {
  const knopfe = (opts, cls = "opt") => `<div class="opts">${opts.map((o, j) => `<button class="${cls}" data-j="${j}">${esc(o)}</button>`).join("")}</div>`;
  if (b.t === "wahl") return `<p class="frage">${it.s.includes("{}") ? esc(it.s).replace("{}", "<span class='luecke'>___</span>") : esc(it.s)}</p>${knopfe(it.o)}`;
  if (b.t === "zuordnen") return `<p class="frage">${esc(it.s.replace(/\*(.+?)\*/g, "«$1»"))}</p>${knopfe(b.o)}`;
  if (b.t === "paare") return `<p class="frage">${esc(it.s)}</p>${knopfe(b.o)}`;
  if (b.t === "mehrfach") return `<p class="frage">${esc(it.s)}</p><div class="opts">${it.o.map((o, j) => `<button class="opt mf" data-j="${j}" aria-pressed="false"><span class="box">☐</span> ${esc(o)}</button>`).join("")}</div>`;
  if (b.t === "luecke") { const [a, c] = it.s.split("{}"); return `<p class="frage">${esc(a)}<input class="ein" id="ein" autocomplete="off" spellcheck="false" aria-label="Lücke">${esc(c || "")}</p>`; }
  if (b.t === "rechnen") return `<p class="frage">${esc(it.s)}</p><p><input class="ein" id="ein" inputmode="decimal" autocomplete="off" aria-label="Ergebnis"> ${esc(it.e || "")}</p>`;
  if (b.t === "offen") return `<p class="frage">${esc(it.s)}</p>${it.h ? `<p class="muted">${esc(it.h)}</p>` : ""}<textarea class="ein gross" id="ein" aria-label="Deine Antwort"></textarea>`;
  if (b.t === "fehler") return `<p class="toks">${it.s.split(/\s+/).map((w, j) => `<button class="tk" data-j="${j}" aria-pressed="false">${esc(w)}</button>`).join(" ")}</p>`;
  if (b.t === "markieren") return `<p class="muted">${esc(it.titel || "")}</p><p class="toks">${it.seg.map((g, j) => g.m == null ? esc(g.t) : `<button class="tk mk" data-j="${j}" aria-pressed="false">${esc(g.t)}</button>`).join("")}</p>`;
  if (b.t === "reihe") return `<p class="frage">${esc(it.s)}</p><div class="reihe">${it.m.map(j => `<button class="opt" data-j="${j}"><span class="pos"></span>${esc(it.o[j])}</button>`).join("")}</div><button class="btn ghost small" id="rreset" type="button">Neu ordnen</button>`;
  return "";
}
let AUSWAHL = null;
function bindItem(b, it) {
  AUSWAHL = b.t === "reihe" || b.t === "mehrfach" || b.t === "markieren" ? [] : null;
  if (["wahl", "zuordnen", "paare"].includes(b.t)) $$("#aufg .opts .opt").forEach(x => x.onclick = () => { $$("#aufg .opts .opt").forEach(y => y.classList.remove("gewaehlt")); x.classList.add("gewaehlt"); AUSWAHL = +x.dataset.j; });
  if (b.t === "mehrfach") $$("#aufg .mf").forEach(x => x.onclick = () => { const j = +x.dataset.j, an = !AUSWAHL.includes(j); AUSWAHL = an ? [...AUSWAHL, j] : AUSWAHL.filter(k => k !== j); x.setAttribute("aria-pressed", String(an)); x.classList.toggle("gewaehlt", an); x.querySelector(".box").textContent = an ? "☑" : "☐"; });
  if (b.t === "fehler") $$("#aufg .tk").forEach(x => x.onclick = () => { $$("#aufg .tk").forEach(y => y.setAttribute("aria-pressed", "false")); x.setAttribute("aria-pressed", "true"); AUSWAHL = +x.dataset.j; });
  if (b.t === "markieren") $$("#aufg .tk").forEach(x => x.onclick = () => { const j = +x.dataset.j, an = !AUSWAHL.includes(j); AUSWAHL = an ? [...AUSWAHL, j] : AUSWAHL.filter(k => k !== j); x.setAttribute("aria-pressed", String(an)); });
  if (b.t === "reihe") {
    $$("#aufg .reihe .opt").forEach(x => x.onclick = () => { if (x.classList.contains("gewaehlt")) return; AUSWAHL.push(+x.dataset.j); x.classList.add("gewaehlt"); x.querySelector(".pos").textContent = AUSWAHL.length; });
    $("#rreset").onclick = () => { AUSWAHL = []; $$("#aufg .reihe .opt").forEach(x => { x.classList.remove("gewaehlt"); x.querySelector(".pos").textContent = ""; }); };
  }
  const ein = $("#ein"); if (ein) { ein.focus({ preventScroll: true }); if (ein.tagName === "INPUT") ein.addEventListener("keydown", e => { if (e.key === "Enter") $("#pruef").click(); }); }
}
function lesen(b) {
  if (["luecke", "rechnen", "offen"].includes(b.t)) return $("#ein").value.trim();
  if (Array.isArray(AUSWAHL)) return AUSWAHL.slice();
  return AUSWAHL;
}
function markieren(b, it, v) {
  if (["wahl", "zuordnen", "paare"].includes(b.t)) $$("#aufg .opts .opt").forEach(x => { const j = +x.dataset.j; if (j === it.k) x.classList.add("right"); else if (j === v) x.classList.add("wrong"); });
  if (b.t === "mehrfach") $$("#aufg .mf").forEach(x => { const j = +x.dataset.j; if (it.k.includes(j)) x.classList.add("right"); else if ((v || []).includes(j)) x.classList.add("wrong"); });
  if (b.t === "fehler") $$("#aufg .tk").forEach(x => { const j = +x.dataset.j; if (j === it.f) x.classList.add("right"); else if (j === v) x.classList.add("wrong"); });
  if (b.t === "markieren") $$("#aufg .tk").forEach(x => { const j = +x.dataset.j, soll = it.k.includes(j), ist = (v || []).includes(j); if (soll) x.classList.add(ist ? "right" : "fehlt"); else if (ist) x.classList.add("wrong"); });
  if (b.t === "reihe") $$("#aufg .reihe .opt").forEach(x => { const j = +x.dataset.j, pos = (v || []).indexOf(j); x.classList.add(pos === j ? "right" : "wrong"); });
  if (["luecke", "rechnen"].includes(b.t)) $("#ein").classList.add(LW.ok(b, it, v) ? "right" : "wrong");
}

// ------------------------------------------------------------ Karteikarten
function kartenLernen(key, z) {
  const set = window.BERUF_KARTEN[key], karten = set.karten; let i = 0, hinten = false;
  const male = () => {
    zeige(`<div class="hud"><span class="t">🗂️ ${esc(set.titel)}</span><div class="pills"><span class="pill">Karte ${i + 1} / ${karten.length}</span></div></div>
      <p class="muted" style="margin-bottom:10px">Lies den Begriff und überlege, was er bedeutet. Tippe auf die Karte, um sie umzudrehen.</p>
      <button class="kk ${hinten ? "hinten" : ""}" id="kk">${hinten ? `<span class="muted">${esc(karten[i][0])}</span><br>${esc(karten[i][1])}` : `<b>${esc(karten[i][0])}</b><br><span class="muted">antippen zum Umdrehen</span>`}</button>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost" id="kz">← Zurück</button><button class="btn" id="kw">Weiter →</button></div>
      <div class="row" style="margin-top:14px"><button class="btn ghost small" id="zort">Zurück: ${esc(z.label)}</button><button class="btn ghost small" id="zq">⚡ Begriffe-Blitz</button></div>`);
    $("#kk").onclick = () => { hinten = !hinten; male(); };
    $("#kz").onclick = () => { i = (i - 1 + karten.length) % karten.length; hinten = false; male(); };
    $("#kw").onclick = () => { i = (i + 1) % karten.length; hinten = false; male(); };
    $("#zort").onclick = () => ort(z); $("#zq").onclick = () => kartenBlitz(key, z);
  };
  male();
}
function kartenBlitz(key, z) {
  const set = window.BERUF_KARTEN[key], fragen = mische(set.karten).slice(0, 10);
  let r = 0, ok = 0, aktiv = false;
  zeige(`<div class="hud"><span class="t">⚡ Begriffe-Blitz</span><div class="pills"><span class="pill" id="bz"></span><span class="pill red" id="bp"></span></div></div>
    <div class="zeit" aria-hidden="true"><span id="bar"></span></div><div class="card stack" id="bq"></div><div id="fb" aria-live="polite"></div>
    <div class="row" style="margin-top:14px"><button class="btn ghost small" id="zort">← Zurück</button></div>`);
  $("#zort").onclick = () => ort(z);
  function runde() {
    if (r >= fragen.length) {
      const d = LW.daten(), k = "karten-" + key; d[k] = { quiz: Math.max(ok, (d[k] || {}).quiz || 0) }; LW.speichern(d);
      return zeige(`<div class="card stack pop" style="text-align:center"><span class="eyebrow">Begriffe-Blitz</span><p class="big">${ok} / 10</p><p class="sterne">${sternStr(sterneFuer(ok * 10))}</p><p>${ok >= 9 ? "Fachbegriffe-Profi!" : ok >= 6 ? "Gut! Noch ein paar Begriffe üben." : "Lerne die Karteikarten nochmals und versuche es dann erneut."}</p>
        <div class="row" style="justify-content:center"><button class="btn" id="nb">Nochmals</button><button class="btn ghost" id="kl">Karteikarten lernen</button><button class="btn ghost" id="zo">Zurück: ${esc(z.label)}</button></div></div>`), $("#nb").onclick = () => kartenBlitz(key, z), $("#kl").onclick = () => kartenLernen(key, z), $("#zo").onclick = () => ort(z);
    }
    const f = fragen[r], falsch = mische(set.karten.filter(k => k[0] !== f[0])).slice(0, 3), opts = mische([f, ...falsch]);
    aktiv = true; $("#bz").textContent = `${r + 1} / 10`; $("#bp").textContent = `${ok} richtig`;
    $("#bq").innerHTML = `<span class="qtyp">Welcher Begriff passt?</span><p class="frage">${esc(f[1])}</p><div class="opts">${opts.map(o => `<button class="opt" data-t="${esc(o[0])}">${esc(o[0])}</button>`).join("")}</div>`;
    $("#fb").innerHTML = "";
    $$("#bq .opt").forEach(x => x.onclick = () => wahl(x.dataset.t));
    timer(E() ? 9000 : 15000, x => $("#bar").style.transform = `scaleX(${x})`, () => wahl(null));
    meldeHoehe();
  }
  function wahl(t) {
    if (!aktiv) return; aktiv = false; stopTimer();
    const f = fragen[r], richtig = t === f[0]; if (richtig) ok++;
    $$("#bq .opt").forEach(x => { x.disabled = true; if (x.dataset.t === f[0]) x.classList.add("right"); else if (x.dataset.t === t) x.classList.add("wrong"); });
    $("#fb").innerHTML = fb(richtig, richtig ? "Richtig!" : t == null ? "Zeit abgelaufen." : "Leider nicht.", `${f[0]}: ${f[1]}`);
    $("#bp").textContent = `${ok} richtig`;
    setTimeout(() => { r++; if ($("#bq")) runde(); }, richtig ? 900 : 2200);
  }
  runde();
}
