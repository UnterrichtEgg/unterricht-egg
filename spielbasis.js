"use strict";
// Gemeinsame Grundlage für die Berufsspiele (Schichtplan mit Phasen, Punkte, Sterne, Ergebnis an die Lernplattform)
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sternStr = n => "★".repeat(n) + "☆".repeat(3 - n);
const sterneFuer = p => p >= 90 ? 3 : p >= 75 ? 2 : p >= 50 ? 1 : 0;
const zahl = v => { const m = String(v ?? "").replace(/'/g, "").replace(",", ".").match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; };
let app, timerId = 0, hoeheT = 0;
const stopTimer = () => { cancelAnimationFrame(timerId); timerId = 0; };
function timer(ms, onTick, onEnd) {
  stopTimer();
  const t0 = performance.now();
  const step = now => { const rest = Math.max(0, 1 - (now - t0) / ms); onTick(rest); if (rest <= 0) { timerId = 0; onEnd(); } else timerId = requestAnimationFrame(step); };
  timerId = requestAnimationFrame(step);
  return () => Math.max(0, 1 - (performance.now() - t0) / ms);
}
function meldeHoehe() {
  clearTimeout(hoeheT);
  hoeheT = setTimeout(() => { try { if (parent !== window) parent.postMessage({ seekarteHoehe: document.documentElement.scrollHeight + 8 }, "*"); } catch (e) {} }, 60);
}
addEventListener("resize", meldeHoehe);
function zeige(html) {
  stopTimer();
  app.innerHTML = html;
  meldeHoehe();
  try { if (parent !== window) { const f = parent.document.getElementById("seekarte"); if (f) f.scrollIntoView({ block: "start" }); } else scrollTo(0, 0); } catch (e) { scrollTo(0, 0); }
}
const fb = (ok, text, klein = "") => `<p class="fb ${ok ? "ok" : "bad"}">${text}${klein ? `<small>${klein}</small>` : ""}</p>`;

// ------------------------------------------------------------ Spielrahmen
let SP = null, G = { niv: null, best: {} };
const E = () => G.niv === "e";
const fertig = k => G.best[k] != null;
const gesamt = () => SP.phasen.reduce((s, p) => s + (G.best[p.key] || 0), 0);
const MAXP = () => SP.phasen.length * 100;
const sichern = () => { try { localStorage.setItem(SP.speicher, JSON.stringify(G)); } catch (e) {} };

function starteSpiel(def) {
  SP = def; app = document.getElementById("app");
  try { const s = JSON.parse(localStorage.getItem(SP.speicher) || "null"); if (s && (s.niv === "g" || s.niv === "e")) G = { niv: s.niv, best: s.best || {} }; } catch (e) {}
  start();
}
function start() {
  if (G.niv) return hub();
  let wahl = null;
  zeige(`<div class="card stack pop">
    <span class="eyebrow">${esc(SP.beruf)} · Berufsspiel</span>
    <h1>${esc(SP.titel)}</h1>
    <p>${esc(SP.intro)}</p>
    <p class="muted">Du kannst die Stationen der Schicht in beliebiger Reihenfolge spielen und wiederholen. Es zählt dein bestes Ergebnis.</p>
    <div class="niv" role="group" aria-label="Niveau wählen">
      <button class="nivbtn" data-n="g" aria-pressed="false"><strong>Grundniveau</strong><span class="muted">Mehr Zeit und Hinweise.</span></button>
      <button class="nivbtn" data-n="e" aria-pressed="false"><strong>Erweitert</strong><span class="muted">Weniger Zeit, mehr Aufgaben, keine Hinweise.</span></button>
    </div>
    <div class="row"><button class="btn" id="los" disabled>Schicht beginnen</button></div>
  </div>`);
  $$(".nivbtn").forEach(b => b.onclick = () => { wahl = b.dataset.n; $$(".nivbtn").forEach(x => x.setAttribute("aria-pressed", String(x === b))); $("#los").disabled = false; });
  $("#los").onclick = () => { G = { niv: wahl, best: {} }; sichern(); ankunft(); };
}
function ankunft() {
  const a = SP.ankunft;
  zeige(`<div class="szene pop">${a.svg(false)}</div>
    <div class="card stack" style="margin-top:12px">
      <span class="eyebrow">${esc(a.uhr)} · Ankunft</span>
      <h2>${esc(a.titel)}</h2>
      ${a.text.map(t => `<p>${esc(t)}</p>`).join("")}
      <div class="row"><button class="btn" id="rein">${esc(a.knopf)}</button></div>
    </div>`);
  $("#rein").onclick = hub;
}
function planSvg() {
  const P = SP.plan, naechste = SP.phasen.find(p => !fertig(p.key));
  const z = P.zonen.map(o => {
    const ph = o.k ? phase(o.k) : null, done = ph && fertig(ph.key), next = ph && naechste && naechste.key === ph.key;
    const cls = (ph ? `hot${done ? " done" : ""}${next ? " next" : ""}` : "deko") + (o.f ? " farbig" : "");
    return `<g class="${cls}" ${ph ? `data-k="${ph.key}" tabindex="0" role="button" aria-label="${esc(o.label)}, ${esc(ph.uhr)} Uhr: ${esc(ph.t)}${done ? ", erledigt" : ""}"` : ""}>
      <rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" rx="6" style="fill:${o.f || "var(--zone)"}"/>
      ${o.innen || ""}
      <text class="zl" x="${o.x + o.w / 2}" y="${o.y + (o.ty || 26)}">${esc(o.label)}</text>
      ${ph ? `<text class="zi" x="${o.x + o.w / 2}" y="${o.y + o.h / 2 + 14}">${ph.ic}</text>
      <text class="zu" x="${o.x + o.w / 2}" y="${o.y + o.h - 12}">${esc(ph.uhr)}${done ? " ✓" : ""}</text>` : ""}
      ${next ? `<circle class="pin" cx="${o.x + o.w - 16}" cy="${o.y + 16}" r="9"/>` : ""}
    </g>`;
  }).join("");
  return `<svg class="plan" viewBox="0 0 ${P.w} ${P.h}" role="group" aria-label="${esc(P.titel)}">${P.unter || ""}${z}${P.ueber || ""}</svg>`;
}
function hub() {
  const n = SP.phasen.filter(p => fertig(p.key)).length, nx = SP.phasen.find(p => !fertig(p.key));
  zeige(`<div class="hud"><span class="t">${esc(SP.ic)} ${esc(SP.titel)}</span>
    <div class="pills"><span class="pill uhrpill">🕒 ${esc(nx ? nx.uhr : SP.feierabend.uhr)}</span><span class="pill">${E() ? "Erweitert" : "Grundniveau"}</span><span class="pill red">${gesamt()} / ${MAXP()} Punkte</span><span class="pill">${n} / ${SP.phasen.length}</span></div></div>
    <p class="muted" style="margin-bottom:10px">${n === 0 ? esc(SP.hubText) : nx ? `Weiter geht's: ${esc(nx.uhr)} Uhr, ${esc(nx.ort)}. Tippe im Plan auf den markierten Ort.` : "Schicht geschafft! Du kannst Stationen wiederholen und dich verbessern."}</p>
    <div class="mapwrap planwrap">${planSvg()}</div>
    <h3 style="margin:18px 0 10px">Dein Tagesablauf</h3>
    <ol class="zeitstrahl">${SP.phasen.map((p, i) => `<li><button class="phase ${fertig(p.key) ? "done" : ""}" data-i="${i}">
      <span class="zeitp">${esc(p.uhr)}</span>
      <span><span class="tt">${p.ic} ${esc(p.t)}</span><br><span class="sub">📍 ${esc(p.ort)} · ${esc(p.d)}</span></span>
      <span class="st">${fertig(p.key) ? sternStr(sterneFuer(G.best[p.key])) + ` <span class="muted" style="letter-spacing:0;font-size:.85rem">${G.best[p.key]} P.</span>` : `<span class="muted" style="letter-spacing:0;font-size:.85rem">offen</span>`}</span>
    </button></li>`).join("")}</ol>
    <div class="row" style="margin-top:18px;justify-content:space-between">
      ${n === SP.phasen.length ? `<button class="btn" id="schluss">🌇 Feierabend und Schichtbericht</button>` : "<span></span>"}
      <button class="btn ghost small" id="neu">Neu beginnen</button></div>`);
  $$(".phase").forEach(b => b.onclick = () => intro(SP.phasen[+b.dataset.i]));
  $$(".plan .hot").forEach(g => { const go = () => intro(phase(g.dataset.k)); g.addEventListener("click", go); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }); });
  let k = 0;
  $("#neu").onclick = () => { if (Date.now() - k < 4000) { G = { niv: null, best: {} }; sichern(); start(); } else { k = Date.now(); $("#neu").textContent = "Wirklich? Nochmals klicken"; } };
  if ($("#schluss")) $("#schluss").onclick = schluss;
}
function intro(p) {
  zeige(`<div class="hud"><span class="t"><span class="uhr">${esc(p.uhr)}</span> · 📍 ${esc(p.ort)}</span></div>
    ${p.bild ? `<div class="szene pop">${p.bild()}</div>` : ""}
    <div class="card stack" style="margin-top:12px">
      <div class="sprecher"><span class="ava" aria-hidden="true">${p.person[0]}</span><div><b>${esc(p.person[1])}</b><div class="blase">${esc(p.sagt)}</div></div></div>
      ${p.lage ? `<p class="muted">${esc(p.lage)}</p>` : ""}
      <div class="row"><button class="btn" id="los">${p.ic} ${esc(p.t)}: Los geht's</button><button class="btn ghost small" id="zurueck">← Zum Plan</button></div>
    </div>`);
  $("#los").onclick = () => p.run(); $("#zurueck").onclick = hub;
}
function rahmen(p, inhalt, status = "") {
  return `<div class="hud"><span class="t"><span class="uhr">${esc(p.uhr)}</span> · ${p.ic} ${esc(p.t)} <span class="muted" style="font-weight:400;font-size:.9rem">· ${esc(p.ort)}</span></span><div class="pills" id="status">${status}</div></div>${inhalt}
    <div class="row" style="margin-top:14px"><button class="btn ghost small" id="abbruch">← Zum Plan</button></div>`;
}
function phase(key) { return SP.phasen.find(p => p.key === key); }
function zeigePhase(key, inhalt, status) { zeige(rahmen(phase(key), inhalt, status)); $("#abbruch").onclick = () => { stopTimer(); hub(); }; }
function phaseEnde(key, pts, details = "") {
  stopTimer();
  pts = Math.max(0, Math.min(100, Math.round(pts)));
  const p = phase(key), alt = G.best[key], rekord = alt == null || pts > alt;
  if (rekord) G.best[key] = pts;
  sichern();
  const st = sterneFuer(pts);
  zeige(`<div class="card stack pop" style="text-align:center">
    <span class="eyebrow">${esc(p.uhr)} · Station geschafft</span>
    <h2>${p.ic} ${esc(p.t)}</h2>
    <p class="big">${pts}</p><p class="muted">von 100 Punkten</p>
    <p class="sterne" aria-label="${st} von 3 Sternen">${sternStr(st)}</p>
    ${details}
    ${p.merke ? `<p class="fb ok" style="text-align:left">Merke: <small>${esc(p.merke)}</small></p>` : ""}
    <p>${alt == null ? "Weiter zur nächsten Station!" : rekord ? `Neuer Rekord! Vorher: ${alt} Punkte.` : `Dein Rekord bleibt bei ${alt} Punkten.`}</p>
    <div class="row" style="justify-content:center">${(() => { const nx = SP.phasen.find(x => !fertig(x.key)); return nx ? `<button class="btn" id="naechste">Weiter: ${esc(nx.uhr)} ${esc(nx.ort)}</button>` : `<button class="btn" id="fa">🌇 Feierabend</button>`; })()}<button class="btn ghost" id="zk">Zum Plan</button><button class="btn ghost" id="nochmal">Nochmals spielen</button></div>
  </div>`);
  $("#zk").onclick = hub; $("#nochmal").onclick = () => p.run();
  if ($("#naechste")) $("#naechste").onclick = () => intro(SP.phasen.find(x => !fertig(x.key)));
  if ($("#fa")) $("#fa").onclick = schluss;
  if (SP.phasen.every(x => fertig(x.key))) melde();
}
function melde() {
  try { if (parent !== window) parent.postMessage({ seekarteErgebnis: { pts: gesamt(), max: MAXP(), res: SP.phasen.map(p => sterneFuer(G.best[p.key] || 0)), niv: G.niv } }, "*"); } catch (e) {}
}
function schluss() {
  const p = gesamt() / MAXP(), titel = SP.titelFuer(p);
  zeige(`<div class="szene pop">${SP.ankunft.svg(true)}</div>
    <div class="card stack pop" style="text-align:center;margin-top:12px">
    <span class="eyebrow">${esc(SP.feierabend.uhr)} · Feierabend</span>
    <p>${esc(SP.feierabend.text)}</p>
    <p class="big">${gesamt()} / ${MAXP()}</p>
    <h2>${esc(titel)}</h2>
    <p class="muted">${p >= .75 ? "Stark! Du bist bereit für deinen ersten Arbeitstag." : "Gut gemacht! Wiederhole die Stationen mit wenigen Sternen, dann wirst du noch sicherer."}</p>
    <div class="resgrid" style="text-align:left">${SP.phasen.map(x => `<div>${x.ic} ${esc(x.t)}<b>${sternStr(sterneFuer(G.best[x.key] || 0))}</b></div>`).join("")}</div>
    <div class="row" style="justify-content:center"><button class="btn" id="zk">Zum Plan</button></div>
  </div>`);
  $("#zk").onclick = hub;
  melde();
}

// Allgemeiner Fragenblock: eine Situation nach der anderen, Antwort wählen, Rückmeldung
function fragenRunde(key, fragen, { titel = "", zeit = 0, nach = null } = {}) {
  let r = 0, ok = 0, aktiv = false, rest = null;
  zeigePhase(key, `${titel ? `<p class="muted" style="margin-bottom:10px">${titel}</p>` : ""}${zeit ? `<div class="zeit" aria-hidden="true"><span id="bar"></span></div>` : ""}
    <div class="card stack" id="frage"></div><div id="fb" aria-live="polite"></div>`, `<span class="pill" id="runde"></span><span class="pill red" id="pkt"></span>`);
  function runde() {
    if (r >= fragen.length) return nach ? nach(ok / fragen.length * 100) : phaseEnde(key, ok / fragen.length * 100, `<p>${ok} von ${fragen.length} richtig</p>`);
    const f = fragen[r], ord = mische(f.o.map((_, i) => i)); aktiv = true;
    $("#runde").textContent = `${r + 1} / ${fragen.length}`; $("#pkt").textContent = `${ok} richtig`;
    $("#frage").innerHTML = `${f.bild ? `<div>${f.bild}</div>` : ""}<p class="frage">${f.q}</p><div class="opts">${ord.map(i => `<button class="opt" data-i="${i}">${esc(f.o[i])}</button>`).join("")}</div>`;
    $("#fb").innerHTML = "";
    $$("#frage .opt").forEach(b => b.onclick = () => antwort(+b.dataset.i));
    if (zeit) rest = timer(zeit, x => $("#bar").style.transform = `scaleX(${x})`, () => antwort(-1));
    meldeHoehe();
  }
  function antwort(i) {
    if (!aktiv) return; aktiv = false; stopTimer();
    const f = fragen[r], richtig = i === 0; if (richtig) ok++;
    $$("#frage .opt").forEach(b => { b.disabled = true; if (+b.dataset.i === 0) b.classList.add("right"); else if (+b.dataset.i === i) b.classList.add("wrong"); });
    $("#fb").innerHTML = fb(richtig, richtig ? "Richtig!" : i < 0 ? "Zeit abgelaufen." : "Leider nicht.", f.x || "") + `<div class="row" style="margin-top:10px"><button class="btn" id="weiter">Weiter</button></div>`;
    $("#pkt").textContent = `${ok} richtig`;
    $("#weiter").onclick = () => { r++; runde(); };
    meldeHoehe();
  }
  runde();
}
// Reihenfolge-Aufgabe: Schritte antippen
function reihenRunde(key, aufgaben, nach) {
  let r = 0, summe = 0;
  zeigePhase(key, `<div class="card stack" id="reihe"></div><div id="fb" aria-live="polite"></div>`, `<span class="pill" id="runde"></span>`);
  function runde() {
    if (r >= aufgaben.length) return nach(summe / aufgaben.length * 100);
    const a = aufgaben[r]; let ord; do { ord = mische(a.s.map((_, i) => i)); } while (ord.every((v, i) => v === i));
    const gew = [];
    $("#runde").textContent = `${r + 1} / ${aufgaben.length}`;
    $("#reihe").innerHTML = `<p class="frage">${esc(a.q)}</p><p class="muted">Tippe die Schritte in der richtigen Reihenfolge an.</p>
      <div class="reihe">${ord.map(i => `<button class="opt" data-i="${i}"><span class="pos"></span>${esc(a.s[i])}</button>`).join("")}</div>
      <div class="row"><button class="btn ghost small" id="reset">Neu ordnen</button><button class="btn" id="pruef" disabled>Prüfen</button></div>`;
    $("#fb").innerHTML = "";
    $$("#reihe .opt").forEach(b => b.onclick = () => { if (b.classList.contains("gewaehlt")) return; gew.push(+b.dataset.i); b.classList.add("gewaehlt"); b.querySelector(".pos").textContent = gew.length; $("#pruef").disabled = gew.length < a.s.length; });
    $("#reset").onclick = () => { gew.length = 0; $$("#reihe .opt").forEach(b => { b.classList.remove("gewaehlt"); b.querySelector(".pos").textContent = ""; }); $("#pruef").disabled = true; };
    $("#pruef").onclick = () => {
      const richtigePos = gew.filter((v, i) => v === i).length; summe += richtigePos / a.s.length;
      $$("#reihe .opt").forEach(b => { const i = +b.dataset.i; b.disabled = true; b.classList.add(gew.indexOf(i) === i ? "right" : "wrong"); });
      $("#reset").disabled = true; $("#pruef").disabled = true;
      $("#fb").innerHTML = fb(richtigePos === a.s.length, `${richtigePos} von ${a.s.length} Schritten am richtigen Platz.`, "Richtig: " + a.s.map((s, i) => `${i + 1}. ${s}`).join(" · ")) + `<div class="row" style="margin-top:10px"><button class="btn" id="weiter">Weiter</button></div>`;
      $("#weiter").onclick = () => { r++; runde(); };
      meldeHoehe();
    };
    meldeHoehe();
  }
  runde();
}
