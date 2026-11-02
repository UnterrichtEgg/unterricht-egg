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
  $("#los").onclick = () => { G = { niv: wahl, best: {} }; sichern(); hub(); };
}
function hub() {
  const n = SP.phasen.filter(p => fertig(p.key)).length;
  zeige(`<div class="hud"><span class="t">${esc(SP.ic)} ${esc(SP.titel)}</span>
    <div class="pills"><span class="pill">${E() ? "Erweitert" : "Grundniveau"}</span><span class="pill red">${gesamt()} / ${MAXP()} Punkte</span><span class="pill">${n} / ${SP.phasen.length} Stationen</span></div></div>
    <p class="muted" style="margin-bottom:12px">${n === 0 ? esc(SP.hubText) : n < SP.phasen.length ? "Weiter so! Wähle die nächste Station deiner Schicht." : "Schicht geschafft! Du kannst Stationen wiederholen und dich verbessern."}</p>
    <ol class="zeitstrahl">${SP.phasen.map((p, i) => `<li><button class="phase ${fertig(p.key) ? "done" : ""}" data-i="${i}">
      <span class="zeitp">${esc(p.uhr)}</span>
      <span><span class="tt">${p.ic} ${esc(p.t)}</span><br><span class="sub">${esc(p.d)}</span></span>
      <span class="st">${fertig(p.key) ? sternStr(sterneFuer(G.best[p.key])) + ` <span class="muted" style="letter-spacing:0;font-size:.85rem">${G.best[p.key]} P.</span>` : `<span class="muted" style="letter-spacing:0;font-size:.85rem">offen</span>`}</span>
    </button></li>`).join("")}</ol>
    <div class="row" style="margin-top:18px;justify-content:space-between">
      ${n === SP.phasen.length ? `<button class="btn" id="schluss">🏆 Schichtbericht</button>` : "<span></span>"}
      <button class="btn ghost small" id="neu">Neu beginnen</button></div>`);
  $$(".phase").forEach(b => b.onclick = () => SP.phasen[+b.dataset.i].run());
  let k = 0;
  $("#neu").onclick = () => { if (Date.now() - k < 4000) { G = { niv: null, best: {} }; sichern(); start(); } else { k = Date.now(); $("#neu").textContent = "Wirklich? Nochmals klicken"; } };
  if ($("#schluss")) $("#schluss").onclick = schluss;
}
function rahmen(p, inhalt, status = "") {
  return `<div class="hud"><span class="t"><span class="uhr">${esc(p.uhr)}</span> · ${p.ic} ${esc(p.t)}</span><div class="pills" id="status">${status}</div></div>${inhalt}
    <div class="row" style="margin-top:14px"><button class="btn ghost small" id="abbruch">← Zum Schichtplan</button></div>`;
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
    <div class="row" style="justify-content:center"><button class="btn" id="zk">Zum Schichtplan</button><button class="btn ghost" id="nochmal">Nochmals spielen</button></div>
  </div>`);
  $("#zk").onclick = hub; $("#nochmal").onclick = () => p.run();
  if (SP.phasen.every(x => fertig(x.key))) melde();
}
function melde() {
  try { if (parent !== window) parent.postMessage({ seekarteErgebnis: { pts: gesamt(), max: MAXP(), res: SP.phasen.map(p => sterneFuer(G.best[p.key] || 0)), niv: G.niv } }, "*"); } catch (e) {}
}
function schluss() {
  const p = gesamt() / MAXP(), titel = SP.titelFuer(p);
  zeige(`<div class="card stack pop" style="text-align:center">
    <span class="eyebrow">Schichtbericht</span>
    <p class="big">${gesamt()} / ${MAXP()}</p>
    <h2>${esc(titel)}</h2>
    <p class="muted">${p >= .75 ? "Stark! Du bist bereit für deinen ersten Arbeitstag." : "Gut gemacht! Wiederhole die Stationen mit wenigen Sternen, dann wirst du noch sicherer."}</p>
    <div class="resgrid" style="text-align:left">${SP.phasen.map(x => `<div>${x.ic} ${esc(x.t)}<b>${sternStr(sterneFuer(G.best[x.key] || 0))}</b></div>`).join("")}</div>
    <div class="row" style="justify-content:center"><button class="btn" id="zk">Zum Schichtplan</button></div>
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
