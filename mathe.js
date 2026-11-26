/* Mathematik · 3. Sek B · nach Lehrplan 21 / Stellwerk-Bereichen, Themen angelehnt an «Mathematik 3» (LMVZ). Eigene Aufgaben. */
(function () {
  const units = [];
  const varianten = s => { let v = [s, s.replace(/\s+/g, "")];
    const map = [[/·/g, "*"], [/·/g, ""], [/−/g, "-"], [/²/g, "^2"], [/²/g, "2"], [/³/g, "^3"]];
    map.forEach(([re, to]) => { v = v.concat(v.map(x => x.replace(re, to))); });
    return [...new Set(v)]; };
  const blk = ([t, a, items, o]) => {
    const i = items.map(x => {
      if (t === "wahl") return { s: x[0], o: x[1], k: x[2], x: x[3] };
      if (t === "luecke") return { s: x[0], k: [].concat(x[1]).flatMap(varianten), x: x[2] };
      if (t === "rechnen") return { s: x[0], k: x[1], e: x[2] || "", tol: x[3] || 0, x: x[4] };
      if (t === "zuordnen" || t === "paare") return { s: x[0], k: x[1], x: x[2] };
      if (t === "mehrfach") return { s: x[0], o: x[1], k: x[2], x: x[3] };
      if (t === "reihe") return { s: x[0], o: x[1], x: x[2], m: x[1].map((_, j) => (j + Math.ceil(x[1].length / 2)) % x[1].length) };
      if (t === "offen") return { s: x[0], h: x[1], x: x[2], l: x[3] };
    });
    return { t, a, o, i };
  };
  const BER = { mzv: "Zahl und Variable", mfr: "Form und Raum", mgf: "Grössen, Funktionen, Daten und Zufall" };
  function M(id, r, titel, kurz, L) {
    const lv = n => { const aufg = L[n].aufg.map(blk); return { regel: L[n].regel, regelTitel: "Merkwissen", bsp: L[n].bsp || [], aufg, mc: [], rf: [], offen: [], dauer: aufg.reduce((s, b) => s + b.i.length, 0) + " Aufgaben" }; };
    units.push(Object.assign({ id, r, typ: "sprache", titel, kurz, kanal: BER[r] }, lv(1)));
    window.STUFEN = window.STUFEN || {};
    window.STUFEN[id] = { 2: lv(2), 3: lv(3) };
  }
  const JN = ["ja", "nein"];

  // ================================================================ ZAHL UND VARIABLE
  M("ma-potenz", "mzv", "Potenzen und Wurzeln", "Hochzahlen, Quadratzahlen, Wurzeln und Zehnerpotenzen: kurz schreiben, was sonst sehr lang wäre.", {
    1: { regel: "Eine Potenz ist eine Kurzschreibweise für eine Multiplikation mit gleichen Faktoren: 2³ = 2 · 2 · 2 = 8. Die 2 heisst Basis, die 3 heisst Exponent (Hochzahl), die 8 ist der Potenzwert.\n\nDie Quadratwurzel ist die Umkehrung des Quadrierens: √49 = 7, weil 7² = 49.\n\nZehnerpotenzen: 10² = 100, 10³ = 1000. Die Hochzahl sagt, wie viele Nullen nach der 1 stehen.",
      bsp: [["Potenz", "5² = 5 · 5 = 25"], ["Wurzel", "√81 = 9, weil 9 · 9 = 81"], ["Zehnerpotenz", "10⁴ = 10 000"]],
      aufg: [
        ["rechnen", "Berechne den Potenzwert.", [["2⁴ =", 16], ["5² =", 25], ["3³ =", 27], ["10⁴ =", 10000], ["1⁷ =", 1, "", 0, "1 · 1 · 1 · … bleibt immer 1."]]],
        ["rechnen", "Berechne die Quadratwurzel.", [["√64 =", 8], ["√144 =", 12], ["√100 =", 10], ["√1 =", 1]]],
        ["wahl", "Wähle die richtige Antwort.", [["Was bedeutet 4³?", ["4 · 4 · 4", "4 · 3", "3 · 3 · 3 · 3"], 0], ["Welche Zahl ist eine Quadratzahl?", ["50", "81", "90"], 1, "81 = 9 · 9"], ["Ein Quadrat hat die Fläche 36 cm². Wie lang ist eine Seite?", ["6 cm", "9 cm", "18 cm"], 0, "√36 = 6"]]],
        ["paare", "In 2⁵ = 32: Wie heissen die Teile?", [["2 ist die …", 0], ["5 ist der …", 1], ["32 ist der …", 2]], ["Basis", "Exponent (Hochzahl)", "Potenzwert"]]
      ] },
    2: { regel: "Potenzen mit gleicher Basis multiplizieren: Exponenten addieren: a² · a³ = a⁵.\nPotenz einer Potenz: Exponenten multiplizieren: (a²)³ = a⁶.\nJede Zahl hoch 0 ist 1: 7⁰ = 1.\n\nNegative Basis: (−2)² = 4, aber (−2)³ = −8. Gerader Exponent ergibt eine positive Zahl.\n\nGrosse Zahlen schreibt man mit Zehnerpotenzen: 35 000 = 3,5 · 10⁴.",
      bsp: [["Multiplizieren", "2³ · 2² = 2⁵ = 32"], ["Potenz einer Potenz", "(3²)² = 3⁴ = 81"], ["Zehnerpotenz", "4 000 000 = 4 · 10⁶"]],
      aufg: [
        ["rechnen", "Berechne.", [["(−2)² =", 4], ["(−2)³ =", -8, "", 0, "(−2) · (−2) · (−2) = −8"], ["5⁰ =", 1], ["0,5² =", 0.25, "", 0.001], ["√0,25 =", 0.5, "", 0.001], ["Die dritte Wurzel aus 27 ist …", 3, "", 0, "3 · 3 · 3 = 27"]]],
        ["rechnen", "Schreibe als Zahl ohne Zehnerpotenz.", [["3,5 · 10⁴ =", 35000], ["2 · 10⁶ =", 2000000], ["7,2 · 10³ =", 7200]]],
        ["wahl", "Wende die Potenzregeln an.", [["a² · a³ =", ["a⁵", "a⁶", "2a⁵"], 0], ["(a²)³ =", ["a⁵", "a⁶", "a⁸"], 1], ["4 000 000 =", ["4 · 10⁵", "4 · 10⁶", "4 · 10⁷"], 1]]],
        ["mehrfach", "Welche Ausdrücke haben den Wert 64?", [["Kreuze alle an, die 64 ergeben.", ["2⁶", "8²", "4³", "6²"], [0, 1, 2], "6² = 36"]]]
      ] },
    3: { regel: "Potenzen dividieren: Exponenten subtrahieren: a⁸ : a³ = a⁵.\nNegative Exponenten: 10⁻² = 1/100 = 0,01.\n\nWissenschaftliche Schreibweise: Zahl zwischen 1 und 10 mal Zehnerpotenz: 0,0024 = 2,4 · 10⁻³.\n\nWurzeln schätzen: √50 liegt zwischen 7 und 8, weil 7² = 49 und 8² = 64.",
      bsp: [["Dividieren", "10⁶ : 10² = 10⁴"], ["Negativer Exponent", "10⁻³ = 0,001"], ["Schätzen", "√50 ≈ 7,1"]],
      aufg: [
        ["rechnen", "Berechne oder schreibe als Dezimalzahl.", [["10⁻² =", 0.01, "", 0.0001], ["2,4 · 10⁻³ =", 0.0024, "", 0.00001], ["(3 · 10⁴) · (2 · 10³) = 6 · 10 hoch …", 7, "", 0, "3 · 2 = 6, 10⁴ · 10³ = 10⁷"], ["Licht legt rund 300 000 km pro Sekunde zurück. 300 000 = 3 · 10 hoch …", 5]]],
        ["rechnen", "Wurzeln in Sachaufgaben (auf 1 Dezimale runden, wo nötig).", [["Ein quadratischer Platz hat 196 m² Fläche. Wie lang ist eine Seite?", 14, "m"], ["Ein Würfel hat 125 cm³ Volumen. Wie lang ist eine Kante?", 5, "cm", 0, "5 · 5 · 5 = 125"], ["√50 ≈ (auf 1 Dezimale)", 7.1, "", 0.05]]],
        ["wahl", "Wähle richtig.", [["a⁸ : a³ =", ["a⁵", "a¹¹", "a²⁴"], 0], ["√50 liegt zwischen …", ["6 und 7", "7 und 8", "25 und 26"], 1], ["0,000 6 in wissenschaftlicher Schreibweise:", ["6 · 10⁻³", "6 · 10⁻⁴", "0,6 · 10⁻⁴"], 1]]],
        ["offen", "Erkläre.", [["Warum ist (−3)² positiv, aber −3² negativ?", "Achte auf die Klammer.", "", "(−3)² = (−3) · (−3) = 9. Bei −3² wird nur die 3 quadriert und das Minus bleibt: −(3 · 3) = −9."]]]
      ] }
  });

  M("ma-terme", "mzv", "Terme aufstellen und vereinfachen", "Vom Bild zum Term: Muster beschreiben, Terme zusammenfassen und Klammern auflösen.", {
    1: { regel: "Ein Term ist ein Rechenausdruck mit Zahlen und Variablen (Buchstaben), z. B. 3a + 5.\n\nGleichartige Glieder kann man zusammenfassen: 3a + 5a = 8a. Verschiedene Variablen (a und b) darf man nicht zusammenfassen.\n\nSetzt man für die Variable eine Zahl ein, erhält man den Wert des Terms: 2x + 3 für x = 4 ergibt 2 · 4 + 3 = 11.",
      bsp: [["Zusammenfassen", "7x − 2x = 5x"], ["Nicht möglich", "2a + 3b bleibt 2a + 3b"], ["Einsetzen", "5a − 1 für a = 2: 10 − 1 = 9"]],
      aufg: [
        ["luecke", "Fasse zusammen.", [["3a + 5a = {}", "8a"], ["7x − 2x = {}", "5x"], ["4 · 3b = {}", "12b"], ["2a + 3b + a = {}", ["3a + 3b", "3b + 3a"]], ["x + x + x = {}", "3x"]]],
        ["rechnen", "Berechne den Wert des Terms.", [["2x + 3 für x = 4", 11], ["5a − 1 für a = 2", 9], ["3y + y für y = 5", 20], ["10 − 2n für n = 3", 4]]],
        ["wahl", "Welcher Term passt?", [["Das Doppelte einer Zahl x plus 7", ["2x + 7", "x + 27", "2(x + 7)"], 0], ["Umfang eines Quadrats mit Seitenlänge s", ["4s", "s²", "2s"], 0], ["Ein Kinoticket kostet 15 Fr. Kosten für n Tickets", ["15n", "n + 15", "15 : n"], 0]]]
      ] },
    2: { regel: "Klammern auflösen (Distributivgesetz): 3(x + 4) = 3x + 12. Jedes Glied in der Klammer wird multipliziert.\nAchtung Minus: −2(a − 5) = −2a + 10.\n\nAusklammern ist die Umkehrung: 6x + 9 = 3(2x + 3).\n\nVom Bild zum Term: Wächst ein Muster bei jeder Figur um gleich viele Teile, steht diese Zahl vor dem n.",
      bsp: [["Ausmultiplizieren", "4(2a + 1) = 8a + 4"], ["Ausklammern", "5x + 10 = 5(x + 2)"], ["Muster", "4, 7, 10, … → 3n + 1"]],
      aufg: [
        ["luecke", "Löse die Klammern auf.", [["3(x + 4) = {}", "3x + 12"], ["5(2a − 1) = {}", "10a − 5"], ["−2(a − 5) = {}", ["−2a + 10", "10 − 2a"]]]],
        ["luecke", "Vereinfache.", [["4x + 3y − x + 2y = {}", ["3x + 5y", "5y + 3x"]], ["6a + 2 − 4a + 5 = {}", ["2a + 7", "7 + 2a"]]]],
        ["luecke", "Klammere aus.", [["6x + 9 = 3({})", "2x + 3"], ["10a + 15 = 5({})", "2a + 3"]]],
        ["rechnen", "Vom Bild zum Term.", [["Eine Reihe aus Quadraten aus Streichhölzern: Figur 1 braucht 4, Figur 2 braucht 7, Figur 3 braucht 10 Hölzer. Wie viele braucht Figur 10?", 31, "Hölzer", 0, "Term 3n + 1: 3 · 10 + 1 = 31"], ["Wert von x² + 3x für x = −2", -2, "", 0, "4 − 6 = −2"]]],
        ["wahl", "Welcher Term beschreibt das Muster 4, 7, 10, 13, …?", [["Figur n hat … Teile", ["3n + 1", "4n", "n + 3"], 0]]]
      ] },
    3: { regel: "Zwei Klammern multiplizieren: Jedes Glied der ersten Klammer mit jedem Glied der zweiten: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.\n\nBinomische Formel: (a + b)² = a² + 2ab + b².\n\nFolgen: Bei 5, 8, 11, 14, … kommt immer 3 dazu. Term: 3n + 2 (für n = 1 ergibt sich 5).",
      bsp: [["Zwei Klammern", "(a + 1)(a + 4) = a² + 5a + 4"], ["Binom", "(x + 3)² = x² + 6x + 9"], ["Folge", "2, 6, 10, … → 4n − 2"]],
      aufg: [
        ["luecke", "Multipliziere aus und fasse zusammen.", [["(x + 2)(x + 3) = {}", "x² + 5x + 6"], ["(a + 4)² = {}", "a² + 8a + 16"], ["(y − 1)(y + 5) = {}", "y² + 4y − 5"]]],
        ["luecke", "Stelle einen Term für das n-te Glied auf.", [["5, 8, 11, 14, … → {}", "3n + 2"], ["2, 6, 10, 14, … → {}", "4n − 2"]]],
        ["rechnen", "Rechne.", [["Folge 5, 8, 11, 14, …: Wie heisst das 50. Glied?", 152, "", 0, "3 · 50 + 2 = 152"], ["Ein Rechteck ist (x + 3) cm lang und (x + 1) cm breit. Wie gross ist die Fläche für x = 4?", 35, "cm²", 0, "7 · 5 = 35"]]],
        ["mehrfach", "Welche Terme sind gleichwertig mit 2(x + 3)?", [["Kreuze alle an.", ["2x + 6", "2x + 3", "x + x + 6", "6 + 2x"], [0, 2, 3]]]],
        ["offen", "Erkläre.", [["Lena schreibt: 2(x + 3) = 2x + 3. Erkläre ihren Fehler.", "Was passiert mit der 3?", "", "Die 3 in der Klammer muss auch mit 2 multipliziert werden: 2x + 6."]]]
      ] }
  });

  M("ma-gleich", "mzv", "Gleichungen und Ungleichungen", "Unbekannte Zahlen finden: Gleichungen umformen, Zahlenrätsel und Sachaufgaben lösen.", {
    1: { regel: "Eine Gleichung ist wie eine Waage im Gleichgewicht. Man darf auf beiden Seiten das Gleiche tun: dieselbe Zahl addieren, subtrahieren, mit derselben Zahl multiplizieren oder dividieren.\n\nZiel: x steht allein auf einer Seite.\n\n2x + 3 = 13 | −3\n2x = 10 | : 2\nx = 5\n\nProbe: 2 · 5 + 3 = 13 ✓",
      bsp: [["Addieren", "x − 4 = 10 → x = 14"], ["Dividieren", "3x = 21 → x = 7"], ["Zwei Schritte", "2x + 3 = 13 → x = 5"]],
      aufg: [
        ["rechnen", "Löse die Gleichung. x = ?", [["x + 7 = 15", 8], ["x − 4 = 10", 14], ["3x = 21", 7], ["x : 5 = 6", 30], ["2x + 3 = 13", 5], ["4x − 1 = 11", 3]]],
        ["rechnen", "Zahlenrätsel.", [["Ich denke mir eine Zahl, verdopple sie und addiere 4. Das Ergebnis ist 20. Welche Zahl?", 8, "", 0, "2x + 4 = 20"], ["Ich denke mir eine Zahl, multipliziere sie mit 3 und subtrahiere 5. Ergebnis: 16.", 7, "", 0, "3x − 5 = 16"]]],
        ["reihe", "Bringe die Lösungsschritte in die richtige Reihenfolge.", [["Löse 2x + 5 = 17.", ["2x + 5 = 17", "2x = 12  (−5 auf beiden Seiten)", "x = 6  (: 2 auf beiden Seiten)", "Probe: 2 · 6 + 5 = 17"]]]]
      ] },
    2: { regel: "Steht x auf beiden Seiten, bringt man zuerst alle x auf eine Seite:\n5x − 8 = 2x + 7 | −2x\n3x − 8 = 7 | +8\n3x = 15 | : 3\nx = 5\n\nKlammern zuerst auflösen: 3(x − 2) = 12 → 3x − 6 = 12 → x = 6.\n\nUngleichung: x + 3 < 10 → x < 7. Die Lösung sind alle Zahlen kleiner als 7.",
      bsp: [["x auf beiden Seiten", "5x − 8 = 2x + 7 → x = 5"], ["Klammer", "3(x − 2) = 12 → x = 6"], ["Ungleichung", "x + 3 < 10 → x < 7"]],
      aufg: [
        ["rechnen", "Löse die Gleichung. x = ?", [["5x − 8 = 2x + 7", 5], ["3(x − 2) = 12", 6], ["x : 4 + 3 = 7", 16], ["7 − 2x = 1", 3], ["6x + 4 = 4x + 18", 7]]],
        ["wahl", "Löse die Ungleichung.", [["x + 3 < 10", ["x < 7", "x > 7", "x < 13"], 0], ["2x > 8", ["x > 4", "x < 4", "x > 16"], 0]]],
        ["rechnen", "Sachaufgaben: Stelle eine Gleichung auf und löse sie.", [["Ein Handyabo kostet 20 Fr. Grundgebühr plus 0,50 Fr. pro GB. Die Rechnung beträgt 32 Fr. Wie viele GB wurden gebraucht?", 24, "GB", 0, "20 + 0,5x = 32 → x = 24"], ["Mia ist 3 Jahre älter als Tim. Zusammen sind sie 29 Jahre alt. Wie alt ist Tim?", 13, "Jahre", 0, "x + x + 3 = 29"], ["Für eine Klassenreise zahlt jede Person 45 Fr. Dazu kommen 120 Fr. Kasse. Total 1110 Fr. Wie viele Personen?", 22, "Personen", 0, "45x + 120 = 1110"]]]
      ] },
    3: { regel: "Bei schwierigeren Gleichungen: 1. Klammern auflösen, 2. zusammenfassen, 3. x auf eine Seite bringen, 4. dividieren, 5. Probe.\n\nBrüche: mit dem Hauptnenner multiplizieren.\n(x + 3) : 2 = (x − 1) : 3 | · 6 → 3(x + 3) = 2(x − 1) → x = −11\n\nGleichungssystem: Zwei Gleichungen, zwei Unbekannte. Addiert man x + y = 12 und x − y = 4, fällt y weg: 2x = 16, x = 8, y = 4.",
      bsp: [["Klammern", "4(x + 1) − 2(x − 3) = 20 → x = 5"], ["System", "x + y = 12, x − y = 4 → x = 8, y = 4"]],
      aufg: [
        ["rechnen", "Löse die Gleichung. x = ?", [["4(x + 1) − 2(x − 3) = 20", 5, "", 0, "4x + 4 − 2x + 6 = 20 → 2x = 10"], ["(x + 3) : 2 = (x − 1) : 3", -11], ["0,5x + 2 = 0,2x + 5", 10]]],
        ["wahl", "Löse die Ungleichung.", [["3x − 5 ≥ 10", ["x ≥ 5", "x ≤ 5", "x ≥ 15"], 0], ["−2x < 6 (Achtung: bei Division durch eine negative Zahl dreht das Zeichen)", ["x < −3", "x > −3", "x > 3"], 1]]],
        ["rechnen", "Gleichungssystem: x + y = 12 und x − y = 4.", [["x =", 8], ["y =", 4]]],
        ["rechnen", "Sachaufgaben.", [["3 Erwachsene und 2 Kinder zahlen im Kino 78 Fr. Ein Kinderticket ist 6 Fr. günstiger als ein Erwachsenenticket. Wie viel kostet ein Erwachsenenticket?", 18, "Fr.", 0, "3x + 2(x − 6) = 78 → 5x = 90"], ["Ein Rechteck hat 50 cm Umfang. Die Länge ist 5 cm grösser als die Breite. Wie breit ist es?", 10, "cm", 0, "2(b + b + 5) = 50"]]]
      ] }
  });

  M("ma-prozent", "mzv", "Prozente im Alltag", "Rabatte, Lohnerhöhungen, Mehrwertsteuer und Lohnabzüge: Prozentrechnen, wie du es im Alltag und in der Lehre brauchst.", {
    1: { regel: "Prozent heisst «von Hundert»: 1 % = 1/100.\n\nProzentwert = Grundwert · Prozentsatz : 100.\n25 % von 80 = 80 · 25 : 100 = 20.\n\nWichtige Werte: 50 % = ½, 25 % = ¼, 10 % = 1/10, 75 % = ¾.\n\nRabatt: Der neue Preis ist der alte Preis minus Rabatt.",
      bsp: [["10 %", "10 % von 250 = 25"], ["25 %", "25 % von 80 = 20"], ["Rabatt", "120 Fr. − 30 % = 84 Fr."]],
      aufg: [
        ["rechnen", "Berechne den Prozentwert.", [["10 % von 250", 25], ["25 % von 80", 20], ["50 % von 36", 18], ["1 % von 900", 9], ["20 % von 45 Fr.", 9, "Fr."]]],
        ["rechnen", "Sachaufgaben.", [["Eine Jacke kostet 120 Fr. Es gibt 30 % Rabatt. Wie viel kostet sie jetzt?", 84, "Fr.", 0, "30 % von 120 = 36, 120 − 36 = 84"], ["Wie viele Prozent sind 15 von 60?", 25, "%"], ["In einer Klasse mit 20 Lernenden haben 5 eine Lehrstelle in der Logistik. Wie viel Prozent sind das?", 25, "%"]]],
        ["paare", "Welche Prozentangabe passt zum Bruch?", [["½", 0], ["¼", 1], ["¾", 2], ["1/10", 3]], ["50 %", "25 %", "75 %", "10 %"]]
      ] },
    2: { regel: "Grundwert gesucht: Wenn 30 % = 45 Fr., dann 1 % = 1,50 Fr., 100 % = 150 Fr.\n\nProzentuale Veränderung: Zunahme oder Abnahme durch alten Wert teilen.\nVon 80 auf 92: Zunahme 12, 12 : 80 = 0,15 = 15 %.\n\nMehrwertsteuer (MWST) in der Schweiz: Normalsatz 8,1 %.",
      bsp: [["Grundwert", "30 % = 45 → 100 % = 150"], ["Zunahme", "80 → 92: +15 %"], ["MWST", "200 Fr. + 8,1 % = 216.20 Fr."]],
      aufg: [
        ["rechnen", "Rechne.", [["30 % eines Betrags sind 45 Fr. Wie gross ist der ganze Betrag?", 150, "Fr."], ["Wie viel MWST (8,1 %) bezahlt man auf 200 Fr.?", 16.2, "Fr.", 0.001], ["Ein Lohn von 4200 Fr. steigt um 3 %. Neuer Lohn?", 4326, "Fr."], ["Ein Preis steigt von 80 Fr. auf 92 Fr. Um wie viel Prozent?", 15, "%"], ["Ein Velo kostete 250 Fr., jetzt 200 Fr. Um wie viel Prozent wurde es billiger?", 20, "%"], ["In einer Klasse sind 24 Lernende, 9 davon sind Mädchen. Wie viel Prozent sind Mädchen?", 37.5, "%", 0.05]]],
        ["wahl", "Wähle richtig.", [["Ein Preis wird um 10 % erhöht und danach um 10 % gesenkt. Ist er wieder gleich hoch?", ["Ja, genau gleich", "Nein, er ist tiefer", "Nein, er ist höher"], 1, "100 → 110 → 99"]]]
      ] },
    3: { regel: "Mehrere Veränderungen nacheinander: immer vom neuen Wert aus rechnen.\n200 Fr. −20 % = 160 Fr., dann −10 % = 144 Fr. Insgesamt sind das 28 % Rabatt, nicht 30 %.\n\nVom neuen Wert zurückrechnen: Nach 25 % Erhöhung kostet etwas 150 Fr. → 150 Fr. sind 125 % → 100 % = 120 Fr.\n\nLohnabzüge: Vom Bruttolohn werden AHV/IV/EO und ALV abgezogen (zusammen rund 6,4 %). Übrig bleibt der Nettolohn.",
      bsp: [["Zweimal Rabatt", "200 → 160 → 144"], ["Zurückrechnen", "150 = 125 % → 120 = 100 %"], ["Nettolohn", "1200 Fr. − 6,4 % = 1123.20 Fr."]],
      aufg: [
        ["rechnen", "Rechne.", [["Ein Artikel kostet 200 Fr. Zuerst 20 % Rabatt, danach noch 10 % auf den neuen Preis. Endpreis?", 144, "Fr."], ["Wie viel Prozent Rabatt sind das insgesamt?", 28, "%"], ["Nach einer Preiserhöhung um 25 % kostet ein Ticket 150 Fr. Wie viel kostete es vorher?", 120, "Fr."], ["Ein Lernender verdient brutto 1200 Fr. Abzüge 6,4 %. Nettolohn?", 1123.2, "Fr.", 0.01], ["Eine Gemeinde hat 12 000 Einwohner und wächst jedes Jahr um 2 %. Wie viele sind es nach 2 Jahren? (runden)", 12485, "Einwohner", 1, "12 000 · 1,02 · 1,02 = 12 484,8"]]],
        ["offen", "Erkläre.", [["Warum ergeben 20 % und danach 10 % Rabatt nicht 30 % Rabatt?", "Wovon werden die 10 % berechnet?", "", "Die 10 % werden vom schon reduzierten Preis berechnet, also von einem kleineren Grundwert. Darum ist der Gesamtrabatt kleiner (28 %)."]]]
      ] }
  });

  // ================================================================ FORM UND RAUM
  M("ma-aehnlich", "mfr", "Ähnliche Figuren und Massstab", "Pläne, Karten, Modelle und Vergrösserungen: Wie Längen, Flächen und Volumen sich beim Strecken verändern.", {
    1: { regel: "Massstab 1 : 100 heisst: 1 cm auf dem Plan sind 100 cm (= 1 m) in Wirklichkeit.\n\nKarte 1 : 25 000: 1 cm auf der Karte sind 25 000 cm = 250 m.\n\nVergrösserung 3 : 1: 1 cm in Wirklichkeit ist 3 cm auf dem Bild.\n\nZwei Figuren sind ähnlich, wenn sie gleich geformt sind: gleiche Winkel, alle Seiten im gleichen Verhältnis vergrössert oder verkleinert.",
      bsp: [["Plan 1 : 100", "5 cm → 5 m"], ["Karte 1 : 50 000", "2 cm → 1 km"], ["Vergrösserung 3 : 1", "2 cm → 6 cm"]],
      aufg: [
        ["rechnen", "Rechne in die Wirklichkeit um.", [["Plan 1 : 100: Eine Wand ist 5 cm lang. Wie lang ist sie in Wirklichkeit?", 5, "m"], ["Karte 1 : 25 000: 4 cm auf der Karte sind wie viele Kilometer?", 1, "km", 0, "4 · 25 000 cm = 100 000 cm = 1 km"], ["Karte 1 : 50 000: 6 cm sind wie viele Kilometer?", 3, "km"], ["Ein Modellauto im Massstab 1 : 18 ist 25 cm lang. Wie lang ist das echte Auto?", 4.5, "m", 0.01, "25 · 18 = 450 cm"]]],
        ["rechnen", "Vergrösserung.", [["Ein Insekt ist 2 cm lang. Im Buch ist es im Massstab 3 : 1 abgebildet. Wie lang ist es im Buch?", 6, "cm"]]],
        ["wahl", "Wähle richtig.", [["Was bedeutet der Massstab 1 : 100?", ["1 cm auf dem Plan = 1 m in Wirklichkeit", "1 m auf dem Plan = 1 cm in Wirklichkeit", "1 cm = 100 km"], 0], ["Ein Rechteck 2 cm × 3 cm wird auf 4 cm × 6 cm vergrössert. Sind die Rechtecke ähnlich?", ["Ja", "Nein"], 0, "Beide Seiten wurden mit 2 multipliziert."], ["Ein Rechteck 2 cm × 3 cm wird auf 4 cm × 5 cm verändert. Sind sie ähnlich?", ["Ja", "Nein"], 1]]],
        ["mehrfach", "Welche Figuren sind immer zueinander ähnlich?", [["Kreuze alle an.", ["alle Quadrate", "alle Rechtecke", "alle Kreise", "alle gleichseitigen Dreiecke"], [0, 2, 3], "Rechtecke können verschieden lang und breit sein."]]]
      ] },
    2: { regel: "Beim Strecken mit dem Faktor k werden alle Längen mal k genommen.\nDie Fläche wird mit k² multipliziert.\n\nBeispiel: k = 3. Ein Rechteck mit 6 cm² Fläche hat danach 6 · 9 = 54 cm².\n\nÄhnliche Dreiecke im Sonnenlicht: Stab und Baum werfen Schatten im gleichen Verhältnis.",
      bsp: [["Längen", "3 cm · 2,5 = 7,5 cm"], ["Flächen", "k = 3 → Fläche · 9"], ["Schatten", "2 m Stab : 3 m Schatten"]],
      aufg: [
        ["rechnen", "Ein Dreieck mit den Seiten 3 cm, 4 cm und 5 cm wird mit k = 2,5 gestreckt. Wie lang sind die neuen Seiten?", [["3 cm →", 7.5, "cm", 0.01], ["4 cm →", 10, "cm"], ["5 cm →", 12.5, "cm", 0.01]]],
        ["rechnen", "Rechne.", [["Ein Rechteck mit 6 cm² Fläche wird mit k = 3 gestreckt. Neue Fläche?", 54, "cm²"], ["Ein 2 m hoher Stab wirft einen 3 m langen Schatten. Ein Baum wirft gleichzeitig einen 18 m langen Schatten. Wie hoch ist der Baum?", 12, "m", 0, "18 : 3 = 6, 6 · 2 m = 12 m"], ["8 km in Wirklichkeit sind auf der Karte 16 cm. Massstab 1 : …?", 50000, "", 0, "800 000 cm : 16 = 50 000"]]],
        ["wahl", "Wähle richtig.", [["Ein Quadrat wird mit k = 2 vergrössert. Die Fläche wird …", ["doppelt so gross", "viermal so gross", "achtmal so gross"], 1]]]
      ] },
    3: { regel: "Beim Strecken mit dem Faktor k:\nLängen · k, Flächen · k², Volumen · k³.\n\nEin Würfel mit 2 cm Kante (8 cm³) wird mit k = 3 gestreckt: Kante 6 cm, Volumen 8 · 27 = 216 cm³.\n\nUmgekehrt: Ist eine Fläche 4-mal so gross, ist k = √4 = 2.",
      bsp: [["Volumen", "k = 3 → Volumen · 27"], ["Faktor aus Fläche", "Fläche · 9 → k = 3"]],
      aufg: [
        ["rechnen", "Rechne.", [["Ein Würfel mit 2 cm Kante wird mit k = 3 gestreckt. Wie gross ist das neue Volumen?", 216, "cm³"], ["Eine Fläche wird beim Vergrössern 4-mal so gross. Wie gross ist der Streckfaktor k?", 2], ["Ein Modellhaus im Massstab 1 : 50 hat eine Grundfläche von 4 dm². Wie viele m² hat das echte Haus?", 100, "m²", 0, "4 dm² · 2500 = 10 000 dm² = 100 m²"], ["Ein Foto 10 cm × 15 cm wird ähnlich vergrössert auf 30 cm Breite. Wie lang wird es?", 45, "cm"], ["Ein Spielzeugwürfel wiegt 50 g. Ein ähnlicher Würfel aus dem gleichen Material ist doppelt so lang. Wie schwer ist er?", 400, "g", 0, "Volumen · 8"]]],
        ["offen", "Erkläre.", [["Warum wird das Volumen bei doppelter Länge achtmal so gross?", "Denke an Länge, Breite und Höhe.", "", "Länge, Breite und Höhe werden je verdoppelt: 2 · 2 · 2 = 8."]]]
      ] }
  });

  M("ma-kegel", "mfr", "Zylinder, Kegel und Kugel", "Konservendose, Glace-Cornet und Fussball: Volumen und Oberfläche von runden Körpern. Rechne mit π ≈ 3,14.", {
    1: { regel: "Rechne mit π ≈ 3,14.\n\nZylinder: V = r² · π · h\nKegel: V = r² · π · h : 3 (ein Drittel des Zylinders mit gleicher Grundfläche und Höhe)\nKugel: V = 4/3 · π · r³\n\nr ist der Radius (halber Durchmesser).",
      bsp: [["Zylinder r = 3, h = 10", "9 · 3,14 · 10 = 282,6 cm³"], ["Kegel r = 3, h = 10", "282,6 : 3 = 94,2 cm³"], ["Kugel r = 3", "4/3 · 3,14 · 27 = 113,04 cm³"]],
      aufg: [
        ["rechnen", "Berechne das Volumen (π = 3,14, auf 1 Dezimale genau).", [["Zylinder: r = 3 cm, h = 10 cm", 282.6, "cm³", 0.5], ["Kegel: r = 3 cm, h = 10 cm", 94.2, "cm³", 0.5], ["Kugel: r = 3 cm", 113.04, "cm³", 0.5], ["Zylinder: r = 5 cm, h = 4 cm", 314, "cm³", 0.5]]],
        ["wahl", "Wähle richtig.", [["Wie oft passt ein Kegel in einen Zylinder mit gleicher Grundfläche und Höhe?", ["2-mal", "3-mal", "4-mal"], 1], ["Eine Kugel hat 10 cm Durchmesser. Wie gross ist der Radius?", ["5 cm", "10 cm", "20 cm"], 0]]],
        ["paare", "Welcher Körper ist es?", [["Glace-Cornet", 1], ["Konservendose", 0], ["Fussball", 2]], ["Zylinder", "Kegel", "Kugel"]]
      ] },
    2: { regel: "Kugeloberfläche: O = 4 · π · r²\nKegel: Die Mantellinie s ist die schräge Seite. Mit Pythagoras: s² = r² + h².\nKegelmantel: M = π · r · s\n\nUmrechnen: 1 Liter = 1 dm³ = 1000 cm³.",
      bsp: [["Kugeloberfläche r = 5", "4 · 3,14 · 25 = 314 cm²"], ["Mantellinie r = 3, h = 4", "s = 5"]],
      aufg: [
        ["rechnen", "Rechne mit π = 3,14.", [["Oberfläche einer Kugel mit r = 5 cm", 314, "cm²", 0.5], ["Ein Fussball hat 22 cm Durchmesser. Wie viele Liter Luft passen ungefähr hinein? (auf 1 Dezimale)", 5.6, "Liter", 0.1, "r = 11, V = 4/3 · 3,14 · 1331 ≈ 5572 cm³"], ["Ein Glace-Cornet hat 6 cm Durchmesser und ist 12 cm hoch. Volumen?", 113.04, "cm³", 0.5], ["Kegel mit r = 3 cm und h = 4 cm: Wie lang ist die Mantellinie s?", 5, "cm"], ["Kegel mit r = 3 cm und s = 5 cm: Wie gross ist der Mantel?", 47.1, "cm²", 0.2]]],
        ["wahl", "Wähle richtig.", [["Wie viele cm³ sind 2,5 Liter?", ["250 cm³", "2500 cm³", "25 000 cm³"], 1]]]
      ] },
    3: { regel: "Halbkugel: V = 2/3 · π · r³.\n\nZusammengesetzte Körper: Volumen der Teile addieren (z. B. Silo = Zylinder + Kegel).\n\nRadius aus dem Volumen: r³ = V : (4/3 · π), dann die dritte Wurzel ziehen.",
      bsp: [["Halbkugel r = 12", "2/3 · 3,14 · 1728 ≈ 3617 cm³"], ["Silo", "Zylinder + Kegel"]],
      aufg: [
        ["rechnen", "Rechne mit π = 3,14 (auf ganze Zahlen runden, wo nichts anderes steht).", [["Eine halbkugelförmige Schüssel hat innen 12 cm Radius. Wie viele Liter passen hinein? (1 Dezimale)", 3.6, "Liter", 0.1], ["Ein Silo besteht aus einem Zylinder (r = 2 m, h = 6 m) und einem Kegel als Dach (r = 2 m, h = 1,5 m). Volumen?", 81.64, "m³", 0.5, "75,36 + 6,28"], ["Eine Kugel hat ein Volumen von rund 4187 cm³. Wie gross ist ihr Radius?", 10, "cm", 0.2], ["Wie viele Kugeln mit 2 cm Radius kann man ungefähr aus einer Kugel mit 4 cm Radius giessen?", 8, "Kugeln", 0, "Radius doppelt → Volumen · 8"]]],
        ["offen", "Erkläre.", [["Ein Kegel und ein Zylinder haben dieselbe Grundfläche und Höhe. Der Zylinder fasst 3 Liter. Wie viel fasst der Kegel? Begründe.", "", "", "1 Liter, weil ein Kegel genau ein Drittel des Zylinders mit gleicher Grundfläche und Höhe ist."]]]
      ] }
  });

  M("ma-koerper", "mfr", "Prismen und regelmässige Körper", "Würfel, Quader, Prismen und die fünf platonischen Körper: Volumen, Oberfläche und die Formel von Euler.", {
    1: { regel: "Quader: V = Länge · Breite · Höhe. Oberfläche: O = 2 · (l·b + l·h + b·h).\nWürfel mit Kante a: V = a³, O = 6 · a².\n\nRegelmässige (platonische) Körper haben lauter gleiche, regelmässige Flächen. Es gibt genau fünf: Tetraeder (4 Dreiecke), Würfel (6 Quadrate), Oktaeder (8 Dreiecke), Dodekaeder (12 Fünfecke), Ikosaeder (20 Dreiecke).",
      bsp: [["Würfel a = 4", "V = 64 cm³, O = 96 cm²"], ["Quader 5 × 3 × 2", "V = 30 cm³"]],
      aufg: [
        ["rechnen", "Berechne.", [["Volumen eines Würfels mit 4 cm Kante", 64, "cm³"], ["Oberfläche eines Würfels mit 4 cm Kante", 96, "cm²"], ["Volumen eines Quaders 5 cm × 3 cm × 2 cm", 30, "cm³"], ["Oberfläche dieses Quaders", 62, "cm²", 0, "2 · (15 + 10 + 6) = 62"], ["Ein Aquarium ist 50 cm lang, 30 cm breit und 40 cm hoch. Wie viele Liter fasst es?", 60, "Liter", 0, "60 000 cm³ = 60 l"]]],
        ["wahl", "Wähle richtig.", [["Wie viele Ecken hat ein Würfel?", ["6", "8", "12"], 1], ["Wie viele Kanten hat ein Würfel?", ["8", "12", "24"], 1]]],
        ["paare", "Welche Flächen hat der Körper?", [["Tetraeder", 0], ["Würfel", 1], ["Oktaeder", 2], ["Dodekaeder", 3], ["Ikosaeder", 4]], ["4 Dreiecke", "6 Quadrate", "8 Dreiecke", "12 Fünfecke", "20 Dreiecke"]]
      ] },
    2: { regel: "Prisma: V = Grundfläche · Höhe. Die Grundfläche kann ein Dreieck, ein Sechseck usw. sein.\nZylinder-Oberfläche: O = 2 · r² · π + 2 · r · π · h.\n\nFormel von Euler für Körper ohne Löcher: Ecken + Flächen − Kanten = 2.\nWürfel: 8 + 6 − 12 = 2.",
      bsp: [["Dreiecksprisma", "G = 6 · 4 : 2 = 12 cm², V = 12 · 10 = 120 cm³"], ["Euler Oktaeder", "6 + 8 − 12 = 2"]],
      aufg: [
        ["rechnen", "Rechne (π = 3,14).", [["Ein Prisma hat ein Dreieck als Grundfläche (g = 6 cm, h = 4 cm). Die Höhe des Prismas ist 10 cm. Volumen?", 120, "cm³"], ["Oberfläche eines Zylinders mit r = 2 cm und h = 5 cm", 87.92, "cm²", 0.2], ["Ein Ikosaeder hat 12 Ecken und 20 Flächen. Wie viele Kanten hat es? (Euler)", 30], ["Ein Körper hat 6 Ecken und 12 Kanten. Wie viele Flächen hat er?", 8], ["Ein Tetraeder hat 4 Flächen und 6 Kanten. Wie viele Ecken?", 4]]],
        ["wahl", "Wähle richtig.", [["Ein Schwimmbecken ist 25 m lang, 10 m breit und 2 m tief. Wie viele m³ Wasser fasst es?", ["37 m³", "250 m³", "500 m³"], 2]]]
      ] },
    3: { regel: "Ein klassischer Fussball besteht aus 12 Fünfecken und 20 Sechsecken.\nEcken zählen: Jede Ecke gehört zu 3 Flächen.\nKanten zählen: Jede Kante gehört zu 2 Flächen.\n\nFüllzeiten: Volumen : Zufluss pro Minute = Minuten.",
      bsp: [["Fussball-Flächen", "12 + 20 = 32"], ["Kanten", "(12 · 5 + 20 · 6) : 2 = 90"]],
      aufg: [
        ["rechnen", "Der Fussball (12 Fünfecke, 20 Sechsecke).", [["Wie viele Flächen hat er?", 32], ["Wie viele Ecken? (Jede Ecke gehört zu 3 Flächen.)", 60, "", 0, "(60 + 120) : 3 = 60"], ["Wie viele Kanten? (Jede Kante gehört zu 2 Flächen.)", 90], ["Prüfe mit Euler: Ecken + Flächen − Kanten =", 2]]],
        ["rechnen", "Sachaufgaben.", [["Ein Pool (8 m × 4 m × 1,5 m) wird mit 400 Litern pro Minute gefüllt. Wie viele Stunden dauert es?", 2, "Stunden", 0, "48 m³ = 48 000 l, 48 000 : 400 = 120 min"], ["Eine sechseckige Bleistiftschachtel ist ein Prisma: Grundfläche 10 cm², Höhe 18 cm. Volumen?", 180, "cm³"]]],
        ["offen", "Erkläre.", [["Warum gibt es keinen regelmässigen Körper aus Sechsecken?", "Wie viele Grad haben 3 Sechseck-Winkel an einer Ecke?", "", "An einer Ecke müssen mindestens 3 Flächen zusammenkommen. 3 Sechsecke ergeben 3 · 120° = 360°: Das ist flach, es entsteht keine Ecke."]]]
      ] }
  });

  M("ma-pythagoras", "mfr", "Der Satz des Pythagoras", "Im rechtwinkligen Dreieck gilt a² + b² = c². Damit berechnest du Leitern, Diagonalen und Bildschirmgrössen.", {
    1: { regel: "Im rechtwinkligen Dreieck heissen die Seiten am rechten Winkel Katheten (a und b). Die längste Seite gegenüber dem rechten Winkel heisst Hypotenuse (c).\n\nSatz des Pythagoras: a² + b² = c².\n\nBeispiel: a = 3, b = 4 → c² = 9 + 16 = 25 → c = 5.",
      bsp: [["3, 4, 5", "9 + 16 = 25"], ["6, 8, 10", "36 + 64 = 100"]],
      aufg: [
        ["rechnen", "Berechne die Hypotenuse c.", [["a = 3 cm, b = 4 cm", 5, "cm"], ["a = 6 cm, b = 8 cm", 10, "cm"], ["a = 5 cm, b = 12 cm", 13, "cm"], ["a = 9 cm, b = 12 cm", 15, "cm"]]],
        ["rechnen", "Sachaufgabe.", [["Eine 5 m lange Leiter steht 3 m von der Wand entfernt. Wie hoch reicht sie?", 4, "m"]]],
        ["wahl", "Wähle richtig.", [["Wie heisst die längste Seite im rechtwinkligen Dreieck?", ["Kathete", "Hypotenuse", "Höhe"], 1], ["Für welche Dreiecke gilt der Satz des Pythagoras?", ["für alle Dreiecke", "nur für rechtwinklige Dreiecke", "nur für gleichseitige Dreiecke"], 1]]]
      ] },
    2: { regel: "Kathete gesucht: a² = c² − b².\n\nOft ist das Ergebnis keine ganze Zahl: c = √130 ≈ 11,40.\n\nPrüfen, ob ein Dreieck rechtwinklig ist: Gilt a² + b² = c²?",
      bsp: [["Kathete", "c = 10, a = 6 → b = 8"], ["Diagonale 12 × 5", "√169 = 13"]],
      aufg: [
        ["rechnen", "Rechne (auf 2 Dezimalen runden).", [["a = 7 cm, b = 9 cm. c = ?", 11.4, "cm", 0.01], ["c = 10 cm, a = 6 cm. b = ?", 8, "cm"], ["Diagonale eines Rechtecks 12 cm × 5 cm", 13, "cm"], ["Ein Fernseher ist 80 cm breit und 45 cm hoch. Wie lang ist die Diagonale?", 91.79, "cm", 0.02], ["Diagonale eines Quadrats mit 10 cm Seite", 14.14, "cm", 0.01]]],
        ["wahl", "Ist das Dreieck rechtwinklig?", [["Seiten 8 cm, 15 cm, 17 cm", JN, 0, "64 + 225 = 289 = 17²"], ["Seiten 5 cm, 6 cm, 8 cm", JN, 1, "25 + 36 = 61, aber 8² = 64"]]]
      ] },
    3: { regel: "Raumdiagonale eines Quaders: d² = l² + b² + h².\nHöhe im gleichseitigen Dreieck mit Seite s: h² = s² − (s/2)².\nAbstand zweier Punkte im Koordinatensystem: Unterschied in x und in y sind die Katheten.",
      bsp: [["Raumdiagonale 3, 4, 12", "9 + 16 + 144 = 169 → 13"], ["Punkte (1|2), (7|10)", "6² + 8² = 100 → 10"]],
      aufg: [
        ["rechnen", "Rechne (auf 2 Dezimalen runden).", [["Raumdiagonale eines Quaders 3 cm × 4 cm × 12 cm", 13, "cm"], ["Höhe eines gleichseitigen Dreiecks mit 6 cm Seite", 5.2, "cm", 0.01], ["Abstand der Punkte A(1|2) und B(7|10)", 10], ["Eine Rampe überwindet 1,2 m Höhe auf 5 m horizontaler Länge. Wie lang ist die Rampe?", 5.14, "m", 0.01], ["Passt ein 1 m langer Stab in eine Schachtel 60 cm × 50 cm × 50 cm? Länge der Raumdiagonale in cm:", 92.74, "cm", 0.02]]],
        ["wahl", "Passt der Stab aus der letzten Aufgabe hinein?", [["1 m langer Stab, Raumdiagonale ≈ 92,7 cm", ["Ja", "Nein"], 1]]],
        ["offen", "Erkläre.", [["Wie kannst du auf einer Baustelle ohne Winkelmesser einen rechten Winkel abstecken?", "Denke an 3, 4 und 5.", "", "Mit einem Seil 3 m, 4 m und 5 m abmessen: Weil 3² + 4² = 5², entsteht ein rechter Winkel."]]]
      ] }
  });

  // ================================================================ GRÖSSEN, FUNKTIONEN, DATEN UND ZUFALL
  M("ma-linear", "mgf", "Geraden und lineare Funktionen", "Taxitarife, Handyabos und Kerzen: Zusammenhänge mit y = m · x + q beschreiben und vergleichen.", {
    1: { regel: "Eine lineare Funktion hat die Form y = m · x + q.\nm ist die Steigung: Um so viel wächst y, wenn x um 1 grösser wird.\nq ist der y-Achsenabschnitt: Dort schneidet die Gerade die y-Achse.\n\nDer Graph ist immer eine Gerade. Ist q = 0, ist die Funktion proportional (Gerade durch den Nullpunkt).",
      bsp: [["y = 2x + 1", "x = 3 → y = 7"], ["Taxi", "6 Fr. + 3 Fr. pro km"]],
      aufg: [
        ["rechnen", "Wertetabelle zu y = 2x + 1. Berechne y.", [["x = 0", 1], ["x = 3", 7], ["x = −2", -3], ["x = 10", 21]]],
        ["rechnen", "Lies aus der Funktionsgleichung ab.", [["y = 3x − 2: Steigung m =", 3], ["y = 3x − 2: y-Achsenabschnitt q =", -2]]],
        ["rechnen", "Sachaufgabe.", [["Ein Taxi kostet 6 Fr. Grundtaxe plus 3 Fr. pro Kilometer. Wie viel kostet eine Fahrt von 10 km?", 36, "Fr."], ["Wie viele Kilometer kann man mit 30 Fr. fahren?", 8, "km"]]],
        ["wahl", "Wähle richtig.", [["Welche Funktion ist proportional?", ["y = 4x", "y = 4x + 1", "y = x + 4"], 0], ["Wie sieht der Graph einer linearen Funktion aus?", ["eine Gerade", "eine Kurve", "ein Kreis"], 0]]]
      ] },
    2: { regel: "Steigung aus zwei Punkten: m = (y₂ − y₁) : (x₂ − x₁).\nVon (1|3) nach (3|7): m = 4 : 2 = 2.\n\nNullstelle: Dort ist y = 0. Bei y = 2x − 6: 0 = 2x − 6 → x = 3.\n\nZwei Angebote vergleichen: Gleichung aufstellen, wo beide gleich teuer sind.",
      bsp: [["Steigung", "(1|3), (3|7) → m = 2"], ["Nullstelle", "y = 2x − 6 → x = 3"]],
      aufg: [
        ["rechnen", "Rechne.", [["Steigung der Geraden durch (1|3) und (3|7)", 2], ["Nullstelle von y = 2x − 6: x =", 3], ["Wie heisst q, wenn die Gerade mit m = 2 durch (1|3) geht?", 1, "", 0, "3 = 2 · 1 + q"]]],
        ["wahl", "Liegt der Punkt auf der Geraden?", [["P(2|5) auf y = 3x − 1?", JN, 0, "3 · 2 − 1 = 5"], ["Q(4|9) auf y = 2x + 3?", JN, 1, "2 · 4 + 3 = 11"]]],
        ["rechnen", "Handyabos: Abo A kostet 10 Fr. + 2 Fr. pro GB. Abo B kostet 20 Fr. + 1 Fr. pro GB.", [["Bei wie vielen GB sind beide gleich teuer?", 10, "GB", 0, "10 + 2x = 20 + x"], ["Wie viel kosten beide dann?", 30, "Fr."]]],
        ["wahl", "Welche Funktion ist nicht linear?", [["Wähle.", ["y = x²", "y = 5x − 3", "y = −x + 2"], 0]]]
      ] },
    3: { regel: "Ist die Steigung negativ, fällt die Gerade.\nParallele Geraden haben die gleiche Steigung.\nSchnittpunkt zweier Geraden: Terme gleichsetzen.\ny = x + 1 und y = −x + 5 → x + 1 = −x + 5 → x = 2, y = 3.",
      bsp: [["Gleichsetzen", "x + 1 = −x + 5 → (2|3)"], ["Fallende Gerade", "y = −2x + 4"]],
      aufg: [
        ["luecke", "Stelle die Funktionsgleichung auf.", [["Gerade durch (0|4) und (2|0): y = {}", ["−2x + 4", "4 − 2x"]], ["Parallele zu y = 3x − 1 durch (0|5): y = {}", ["3x + 5", "5 + 3x"]]]],
        ["rechnen", "Schnittpunkt von y = x + 1 und y = −x + 5.", [["x =", 2], ["y =", 3]]],
        ["rechnen", "Sachaufgabe: Eine Kerze ist 20 cm lang und brennt pro Stunde 1,5 cm ab.", [["Wie lang ist sie nach 4 Stunden?", 14, "cm"], ["Nach wie vielen Stunden ist sie noch 8 cm lang?", 8, "Stunden"], ["Nach wie vielen Stunden ist sie ganz abgebrannt? (auf 1 Dezimale)", 13.3, "Stunden", 0.05]]],
        ["offen", "Erkläre.", [["Was bedeutet die negative Steigung bei der Kerze?", "", "", "Die Länge nimmt mit der Zeit ab: pro Stunde 1,5 cm weniger. Die Gerade fällt."]]]
      ] }
  });

  M("ma-zins", "mgf", "Jahreszins und Marchzins", "Sparkonto, Zinsen und Kontostand: Wie viel bringt dein Geld auf der Bank? Angelehnt an das Thema 4a in «Mathematik 3».", {
    1: { regel: "Wer Geld auf der Bank hat (Kapital), bekommt dafür Zins.\nJahreszins = Kapital · Zinssatz : 100.\n\nBeispiel: 1000 Fr. zu 2 % → 1000 · 2 : 100 = 20 Fr. Zins pro Jahr.\nNeuer Kontostand nach einem Jahr: 1000 + 20 = 1020 Fr.",
      bsp: [["Kapital", "das Geld auf dem Konto"], ["Zinssatz", "z. B. 2 % pro Jahr"], ["Jahreszins", "1000 Fr. · 2 % = 20 Fr."]],
      aufg: [
        ["rechnen", "Berechne den Jahreszins.", [["1000 Fr. zu 2 %", 20, "Fr."], ["5000 Fr. zu 1,5 %", 75, "Fr."], ["800 Fr. zu 0,5 %", 4, "Fr."], ["12 000 Fr. zu 1 %", 120, "Fr."]]],
        ["rechnen", "Kontostand.", [["Auf einem Sparkonto liegen 2000 Fr. Zinssatz 1 %. Kontostand nach einem Jahr?", 2020, "Fr."], ["Lara spart jeden Monat 50 Fr. von ihrem Lehrlingslohn. Wie viel hat sie nach einem Jahr ohne Zins gespart?", 600, "Fr."]]],
        ["paare", "Welcher Begriff passt?", [["das Geld, das auf dem Konto liegt", 0], ["wie viel Prozent die Bank pro Jahr bezahlt", 1], ["der Betrag in Franken, den man für ein Jahr bekommt", 2]], ["Kapital", "Zinssatz", "Jahreszins"]]
      ] },
    2: { regel: "Liegt Geld nicht ein ganzes Jahr auf dem Konto, gibt es Marchzins (Zins für einen Teil des Jahres).\nIn der Schweiz rechnen Banken oft mit 360 Tagen pro Jahr und 30 Tagen pro Monat.\n\nMarchzins = Kapital · Zinssatz · Tage : (100 · 360)\n\nBeispiel: 3600 Fr. zu 2 % während 90 Tagen: 3600 · 2 · 90 : 36 000 = 18 Fr.",
      bsp: [["90 Tage", "ein Vierteljahr"], ["Marchzins", "3600 Fr., 2 %, 90 Tage → 18 Fr."]],
      aufg: [
        ["rechnen", "Berechne den Marchzins (360 Tage pro Jahr).", [["3600 Fr. zu 2 % während 90 Tagen", 18, "Fr."], ["6000 Fr. zu 1,5 % während 4 Monaten (120 Tage)", 30, "Fr."], ["7200 Fr. zu 1 % während 180 Tagen", 36, "Fr."]]],
        ["rechnen", "Gesuchte Grösse.", [["Bei 1,5 % Zins bekommt man 45 Fr. Jahreszins. Wie gross ist das Kapital?", 3000, "Fr."], ["Ein Kapital von 12 000 Fr. bringt 180 Fr. Jahreszins. Zinssatz?", 1.5, "%", 0.001], ["Wie viele Zinstage sind 7 Monate (Bankenregel)?", 210, "Tage"]]]
      ] },
    3: { regel: "Zinseszins: Bleibt der Zins auf dem Konto, bekommt man im nächsten Jahr auch auf den Zins wieder Zins.\nKapital nach n Jahren = Kapital · (1 + p/100)ⁿ.\n\nVerrechnungssteuer: Ist der Zins auf einem Konto höher als 200 Fr. im Jahr, zieht die Bank 35 % ab. Man bekommt das Geld zurück, wenn man es in der Steuererklärung angibt.",
      bsp: [["Zinseszins", "10 000 · 1,02 · 1,02 = 10 404"], ["Verrechnungssteuer", "35 % von 300 Fr. = 105 Fr."]],
      aufg: [
        ["rechnen", "Rechne.", [["10 000 Fr. werden 2 Jahre zu 2 % angelegt (Zinseszins). Kontostand?", 10404, "Fr."], ["Zinstage vom 1. März bis 31. Mai (Bankenregel)", 90, "Tage"], ["Sparplan: Am Anfang jedes Jahres zahlt Noah 1200 Fr. ein, Zins 2 %. Wie viel hat er nach 2 Jahren?", 2472.48, "Fr.", 0.01, "1200 · 1,02 = 1224; (1224 + 1200) · 1,02 = 2472,48"], ["Ein Zins von 300 Fr. unterliegt der Verrechnungssteuer (35 %). Wie viel zieht die Bank ab?", 105, "Fr."]]],
        ["wahl", "Wähle richtig.", [["Bei einem tiefen Zinssatz von 0,5 %: Wie lange dauert es ungefähr, bis sich ein Kapital verdoppelt?", ["etwa 14 Jahre", "etwa 140 Jahre", "etwa 1400 Jahre"], 1, "Faustregel: 70 : Zinssatz = 140 Jahre"]]],
        ["offen", "Erkläre.", [["Warum lohnt sich Sparen auch bei tiefen Zinsen?", "", "", "Z. B. man hat eine Reserve für Notfälle, das Geld ist sicher, regelmässiges Sparen summiert sich, Zinseszins wirkt langfristig."]]]
      ] }
  });

  M("ma-kredit", "mgf", "Konsumkredit und Leasing", "Ratenzahlung, Kredit und Leasing: Was kostet «jetzt kaufen, später zahlen» wirklich? Angelehnt an das Thema 4b in «Mathematik 3».", {
    1: { regel: "Bei einem Konsumkredit leiht man Geld bei einer Bank und zahlt es mit Zins zurück.\nBei Leasing mietet man z. B. ein Auto und zahlt monatlich. Es gehört einem nicht.\nBei Ratenzahlung zahlt man einen Kauf in mehreren Teilen ab.\n\nKredit und Leasing kosten fast immer mehr als ein Barkauf.",
      bsp: [["Raten", "960 Fr. in 12 Raten = 80 Fr. pro Monat"], ["Kreditzins", "5000 Fr. zu 10 % = 500 Fr. pro Jahr"]],
      aufg: [
        ["rechnen", "Rechne.", [["Ein Handy kostet 960 Fr. und wird in 12 gleichen Raten bezahlt. Wie gross ist eine Rate?", 80, "Fr."], ["Ein Kredit von 5000 Fr. kostet 10 % Zins pro Jahr. Zins für 1 Jahr?", 500, "Fr."], ["Wie viel muss man nach einem Jahr insgesamt zurückzahlen?", 5500, "Fr."], ["Eine Spielkonsole kostet 480 Fr. Ratenzahlung: 12 Raten à 45 Fr. Wie viel bezahlt man mehr?", 60, "Fr."]]],
        ["paare", "Was ist was?", [["Man mietet ein Auto und zahlt jeden Monat. Es gehört der Leasingfirma.", 0], ["Man leiht Geld bei einer Bank und zahlt es mit Zins zurück.", 1], ["Man zahlt den ganzen Preis sofort.", 2]], ["Leasing", "Konsumkredit", "Barkauf"]]
      ] },
    2: { regel: "Gesamtkosten Leasing = Anzahlung + Anzahl Raten · Rate.\nMehrkosten = Gesamtkosten − Barpreis.\nMehrkosten in Prozent = Mehrkosten : Barpreis · 100.",
      bsp: [["Leasing", "3000 + 48 · 299 = 17 352 Fr."], ["Mehrkosten in %", "120 : 1200 = 10 %"]],
      aufg: [
        ["rechnen", "Ein Auto kostet bar 16 000 Fr. Leasing: 3000 Fr. Anzahlung und 48 Raten à 299 Fr.", [["Gesamtkosten des Leasings", 17352, "Fr."], ["Mehrkosten gegenüber dem Barkauf", 1352, "Fr."]]],
        ["rechnen", "Rechne.", [["Kredit 8000 Fr., 9,9 % Jahreszins, 2 Jahre (vereinfacht: jedes Jahr Zins auf 8000 Fr.). Wie viel Zins insgesamt?", 1584, "Fr."], ["Ein Laptop kostet bar 1200 Fr. oder 12 Raten à 110 Fr. Wie viel Prozent Mehrkosten?", 10, "%"]]],
        ["wahl", "Wähle richtig.", [["Was passiert am Ende eines Leasingvertrags meistens?", ["Das Auto gehört dir automatisch.", "Du gibst das Auto zurück.", "Die Bank schenkt dir Geld."], 1]]]
      ] },
    3: { regel: "Kreditfähigkeit: Eine Bank darf in der Schweiz nur dann einen Konsumkredit geben, wenn man ihn innerhalb von 36 Monaten zurückzahlen kann, ohne unter das Existenzminimum zu fallen.\n\nBudget: Einnahmen − feste Ausgaben = frei verfügbares Geld. Eine Rate darf nur aus diesem Teil bezahlt werden.",
      bsp: [["36 Monate", "10 800 Fr. : 36 = 300 Fr. pro Monat"], ["Budget", "1100 − 650 = 450 Fr. frei"]],
      aufg: [
        ["rechnen", "Rechne.", [["Ein Kredit von 10 800 Fr. soll in 36 Monaten zurückgezahlt werden (ohne Zins). Monatsrate?", 300, "Fr."], ["Jan verdient als Lernender 1100 Fr. Feste Ausgaben: 650 Fr. Wie viel bleibt pro Monat?", 450, "Fr."], ["Jan will einen Roller für 3600 Fr. Er spart jeden Monat 300 Fr. Nach wie vielen Monaten kann er bar bezahlen?", 12, "Monate"], ["Mit einem Kredit (12 % Jahreszins, 1 Jahr) hätte er den Roller sofort. Wie viel Zins müsste er bezahlen?", 432, "Fr."]]],
        ["offen", "Nimm Stellung.", [["Soll Jan sparen oder einen Kredit aufnehmen? Begründe mit den Zahlen.", "", "", "Z. B. Sparen: kein Zins (432 Fr. gespart), kein Schuldenrisiko; Kredit nur sinnvoll, wenn er den Roller sofort für die Arbeit braucht."]]]
      ] }
  });

  M("ma-mobil", "mgf", "Mobilität: Geschwindigkeit, Zeit und Weg", "Zug, Velo und Auto: Geschwindigkeiten berechnen, umrechnen und Anhaltewege abschätzen. Angelehnt an das Thema 9a in «Mathematik 3».", {
    1: { regel: "Geschwindigkeit = Weg : Zeit (v = s : t).\nWeg = Geschwindigkeit · Zeit.\nZeit = Weg : Geschwindigkeit.\n\n120 km in 2 Stunden → 60 km/h.\n1 Stunde = 60 Minuten. 1,5 h = 90 min.",
      bsp: [["Geschwindigkeit", "120 km : 2 h = 60 km/h"], ["Weg", "15 km/h · 3 h = 45 km"], ["Zeit", "300 km : 100 km/h = 3 h"]],
      aufg: [
        ["rechnen", "Rechne.", [["Ein Auto fährt 120 km in 2 Stunden. Geschwindigkeit?", 60, "km/h"], ["Ein Velo fährt 3 Stunden mit 15 km/h. Wie weit kommt es?", 45, "km"], ["Wie lange braucht man für 300 km mit 100 km/h?", 3, "h"], ["Wie viele Minuten sind 1,5 Stunden?", 90, "min"], ["Ein Bus fährt 30 km/h. Wie weit kommt er in 20 Minuten?", 10, "km"]]],
        ["wahl", "Wähle richtig.", [["Welches ist am schnellsten?", ["ein Velo mit 20 km/h", "ein Fussgänger mit 5 km/h", "ein Zug mit 120 km/h"], 2], ["Welche Formel stimmt?", ["v = s : t", "v = s · t", "v = t : s"], 0]]]
      ] },
    2: { regel: "Umrechnen: km/h : 3,6 = m/s. m/s · 3,6 = km/h.\n90 km/h = 25 m/s.\n\nDurchschnittsgeschwindigkeit = ganzer Weg : ganze Zeit.\n\nFaustregeln Auto: Reaktionsweg = (v : 10) · 3 in m. Bremsweg = (v : 10)² in m. Anhalteweg = Reaktionsweg + Bremsweg.",
      bsp: [["Umrechnen", "36 km/h = 10 m/s"], ["Anhalteweg bei 50 km/h", "15 m + 25 m = 40 m"]],
      aufg: [
        ["rechnen", "Rechne.", [["90 km/h = … m/s", 25, "m/s"], ["10 m/s = … km/h", 36, "km/h"], ["Ein Auto fährt 2 h mit 80 km/h und 1 h mit 50 km/h. Durchschnittsgeschwindigkeit?", 70, "km/h", 0, "210 km : 3 h"], ["Eine S-Bahn fährt 24 km in 20 Minuten. Durchschnittsgeschwindigkeit?", 72, "km/h"]]],
        ["rechnen", "Anhalteweg bei 50 km/h (Faustregeln).", [["Reaktionsweg", 15, "m"], ["Bremsweg", 25, "m"], ["Anhalteweg", 40, "m"], ["Bremsweg bei 100 km/h", 100, "m"]]],
        ["wahl", "Die Geschwindigkeit verdoppelt sich. Was passiert mit dem Bremsweg?", [["Er wird …", ["doppelt so lang", "viermal so lang", "gleich lang"], 1]]]
      ] },
    3: { regel: "Begegnung: Zwei Fahrzeuge fahren aufeinander zu. Die Geschwindigkeiten addieren sich.\n300 km Abstand, 70 km/h und 80 km/h → 300 : 150 = 2 h.\n\nVerbrauch: Liter pro 100 km. Bei 6,5 l/100 km braucht man für 450 km 4,5 · 6,5 = 29,25 l.",
      bsp: [["Begegnung", "300 : (70 + 80) = 2 h"], ["Verbrauch", "450 km → 29,25 l"]],
      aufg: [
        ["rechnen", "Rechne.", [["Zwei Autos sind 300 km voneinander entfernt und fahren aufeinander zu (70 km/h und 80 km/h). Nach wie vielen Stunden treffen sie sich?", 2, "h"], ["Ein Auto braucht 6,5 l pro 100 km. Wie viel braucht es für 450 km?", 29.25, "l", 0.01], ["Benzin kostet 1,85 Fr. pro Liter. Wie viel kostet die Fahrt? (auf Rappen)", 54.11, "Fr.", 0.01], ["Ein Elektroauto braucht 16 kWh pro 100 km, Strom kostet 0,30 Fr. pro kWh. Kosten für 450 km?", 21.6, "Fr.", 0.01]]],
        ["rechnen", "Fahrplan: Ein Zug fährt um 07:12 ab und kommt um 08:03 an. Die Strecke ist 68 km lang.", [["Fahrzeit in Minuten", 51, "min"], ["Durchschnittsgeschwindigkeit", 80, "km/h"]]],
        ["offen", "Vergleiche.", [["Für den Arbeitsweg (6 km) wählt Ali zwischen Velo (20 min) und Bus (25 min mit Warten). Berechne die Velo-Geschwindigkeit und entscheide. Begründe mit Zahlen und weiteren Argumenten.", "", "", "Velo: 6 km in 20 min = 18 km/h. Z. B. Velo: schneller, gratis, Bewegung; Bus: wetterunabhängig, sicherer im Winter."]]]
      ] }
  });

  M("ma-kombi", "mgf", "Kombinatorik und Wahrscheinlichkeit", "Wie viele Möglichkeiten gibt es? Wie gross ist die Chance? Würfel, Codes und Kleider kombinieren. Angelehnt an das Thema 9b in «Mathematik 3».", {
    1: { regel: "Zählprinzip: Wählt man aus 3 T-Shirts und 2 Hosen, gibt es 3 · 2 = 6 Kombinationen.\n\nWahrscheinlichkeit = günstige Fälle : mögliche Fälle.\nWürfel: P(6) = 1/6. P(gerade Zahl) = 3/6 = 1/2 = 50 %.\n\nSicher: 100 %. Unmöglich: 0 %.",
      bsp: [["Kombinationen", "3 T-Shirts · 2 Hosen = 6"], ["Würfel", "P(gerade) = 50 %"]],
      aufg: [
        ["rechnen", "Wie viele Möglichkeiten?", [["3 T-Shirts und 2 Hosen", 6], ["Menü: 3 Vorspeisen, 4 Hauptgänge", 12], ["4 Jacken, 3 Mützen, 2 Paar Schuhe", 24]]],
        ["rechnen", "Wahrscheinlichkeit in Prozent (auf 1 Dezimale).", [["Münze: P(Kopf)", 50, "%"], ["Würfel: P(gerade Zahl)", 50, "%"], ["Würfel: P(6)", 16.7, "%", 0.05], ["In einem Sack sind 4 rote und 6 blaue Kugeln. P(rot)", 40, "%"]]],
        ["zuordnen", "Sicher, möglich oder unmöglich?", [["Mit einem normalen Würfel eine 7 würfeln", 2], ["Mit einem Würfel eine Zahl kleiner als 7 würfeln", 0], ["Mit einem Würfel eine 3 würfeln", 1]], ["sicher", "möglich", "unmöglich"]]
      ] },
    2: { regel: "Anordnungen: 4 Personen können sich auf 4 · 3 · 2 · 1 = 24 Arten in eine Reihe stellen.\nCodes: Bei 3 Stellen mit je 10 Ziffern gibt es 10 · 10 · 10 = 1000 Codes.\nHändeschütteln: 6 Personen geben sich alle die Hand: 6 · 5 : 2 = 15.\n\nZwei Würfel: 36 mögliche Ergebnisse.",
      bsp: [["Reihenfolge", "4 · 3 · 2 · 1 = 24"], ["PIN mit 4 Ziffern", "10 000"]],
      aufg: [
        ["rechnen", "Wie viele Möglichkeiten?", [["4 Personen stellen sich in eine Reihe", 24], ["Zahlenschloss mit 3 Ziffern (0–9)", 1000], ["PIN mit 4 Ziffern", 10000], ["6 Personen geben sich alle die Hand", 15], ["Aus 5 Kandidaten wird eine Präsidentin und eine Vizepräsidentin gewählt", 20]]],
        ["rechnen", "Wahrscheinlichkeit in Prozent (auf 1 Dezimale).", [["Zwei Würfel: P(Summe 7)", 16.7, "%", 0.05, "6 von 36 Möglichkeiten"], ["Urne mit 3 roten und 5 blauen Kugeln: P(rot)", 37.5, "%", 0.05], ["Zwei Würfel: P(Pasch, also zwei gleiche Zahlen)", 16.7, "%", 0.05]]]
      ] },
    3: { regel: "Ohne Zurücklegen ändert sich die Wahrscheinlichkeit beim zweiten Ziehen.\n3 rote, 5 blaue Kugeln: P(rot, rot) = 3/8 · 2/7 = 6/56 ≈ 10,7 %.\n\nMehrstufige Versuche: Wahrscheinlichkeiten entlang eines Pfades im Baumdiagramm multiplizieren.\n\nAuswahl ohne Reihenfolge: 2 aus 5 → 5 · 4 : 2 = 10.",
      bsp: [["Podest", "8 · 7 · 6 = 336"], ["2 aus 5", "10"], ["Zweimal Kopf", "½ · ½ = 25 %"]],
      aufg: [
        ["rechnen", "Rechne.", [["8 Läuferinnen: Wie viele verschiedene Podeste (Plätze 1, 2, 3) gibt es?", 336], ["Aus 5 Lernenden werden 2 für den Schülerrat gewählt. Wie viele Möglichkeiten?", 10], ["Zweimal Münze werfen: P(zweimal Kopf) in %", 25, "%"], ["3 rote und 5 blaue Kugeln, zweimal ohne Zurücklegen: P(zweimal rot) in % (1 Dezimale)", 10.7, "%", 0.05], ["Dreimal würfeln: P(dreimal 6) in % (2 Dezimalen)", 0.46, "%", 0.01, "1/216"]]],
        ["wahl", "Wähle richtig.", [["Bei 5 Münzwürfen kam fünfmal Kopf. Wie gross ist die Chance auf Kopf beim 6. Wurf?", ["kleiner als 50 %", "genau 50 %", "grösser als 50 %"], 1, "Die Münze hat kein Gedächtnis."]]],
        ["offen", "Erkläre.", [["Warum ist ein 6-stelliger PIN viel sicherer als ein 4-stelliger?", "", "", "4 Stellen: 10 000 Möglichkeiten, 6 Stellen: 1 000 000. Es gibt 100-mal mehr Möglichkeiten, Erraten ist viel schwieriger."]]]
      ] }
  });

  M("ma-daten", "mgf", "Daten auswerten: Umfrage und Statistik", "Mittelwert, Median, Diagramme und gute Umfragefragen. Angelehnt an das Thema 9c «Die Umfrage» in «Mathematik 3».", {
    1: { regel: "Mittelwert (Durchschnitt): alle Werte addieren und durch die Anzahl teilen.\nMedian: die Werte der Grösse nach ordnen. Der Wert in der Mitte ist der Median.\nSpannweite: grösster Wert − kleinster Wert.\n\nAnteil in Prozent: Teil : Ganzes · 100.",
      bsp: [["Mittelwert", "4, 6, 8, 10, 12 → 40 : 5 = 8"], ["Median", "3, 7, 9, 12, 20 → 9"], ["Spannweite", "20 − 3 = 17"]],
      aufg: [
        ["rechnen", "Rechne.", [["Mittelwert von 4, 6, 8, 10, 12", 8], ["Median von 3, 7, 9, 12, 20", 9], ["Spannweite von 3, 7, 9, 12, 20", 17], ["Mittelwert der Noten 4, 5, 6, 5, 5", 5], ["In einer Umfrage mit 25 Lernenden haben 10 ein Haustier. Wie viel Prozent?", 40, "%"]]],
        ["wahl", "Welches Diagramm passt am besten?", [["Anteile der Lehrberufe in der Klasse (zusammen 100 %)", ["Kreisdiagramm", "Liniendiagramm", "kein Diagramm"], 0], ["Temperatur im Laufe eines Tages", ["Kreisdiagramm", "Liniendiagramm", "Würfel"], 1]]]
      ] },
    2: { regel: "Median bei gerader Anzahl: Mittelwert der beiden mittleren Werte. 4, 8, 10, 14 → (8 + 10) : 2 = 9.\n\nKreisdiagramm: 100 % = 360°, also 1 % = 3,6°.\n\nGute Umfragefragen sind neutral. Suggestivfragen legen eine Antwort nahe.",
      bsp: [["Median gerade Anzahl", "4, 8, 10, 14 → 9"], ["Kreisdiagramm", "30 % → 108°"]],
      aufg: [
        ["rechnen", "Rechne.", [["Median von 4, 8, 10, 14", 9], ["Mittelwert der Noten 4,5; 5; 3,5; 4; 5,5", 4.5, "", 0.001], ["Wie viele Grad hat ein Sektor von 30 % im Kreisdiagramm?", 108, "°"], ["Ein Sektor hat 90°. Wie viel Prozent sind das?", 25, "%"]]],
        ["wahl", "Welche Frage ist neutral?", [["Umfrage zum Schulweg", ["Wie kommst du zur Schule?", "Du fährst doch sicher auch umweltfreundlich Velo, oder?", "Findest du Autofahren zur Schule nicht auch schlecht?"], 0]]],
        ["mehrfach", "Was macht eine Umfrage aussagekräftiger?", [["Kreuze alle an.", ["möglichst viele Befragte", "nur Freunde befragen", "neutrale Fragen", "Befragte aus verschiedenen Gruppen"], [0, 2, 3]]]]
      ] },
    3: { regel: "Ausreisser (sehr grosse oder kleine Werte) verändern den Mittelwert stark, den Median kaum.\n\nGewünschter Durchschnitt: Gesamtsumme, die nötig ist, minus bisherige Summe.\nNach 3 Noten mit Schnitt 4,5 (Summe 13,5) soll der Schnitt nach 4 Noten 4,75 sein: 4 · 4,75 = 19 → nötig: 19 − 13,5 = 5,5.",
      bsp: [["Ausreisser", "Löhne 4500, 4800, 5000, 5200, 15 000"], ["Nötige Note", "19 − 13,5 = 5,5"]],
      aufg: [
        ["rechnen", "Rechne.", [["Nach 3 Prüfungen hat Elif den Schnitt 4,5. Welche Note braucht sie in der 4. Prüfung für den Schnitt 4,75?", 5.5, "", 0.001], ["Löhne in einer kleinen Firma: 4500, 4800, 5000, 5200, 15 000 Fr. Mittelwert?", 6900, "Fr."], ["Median dieser Löhne?", 5000, "Fr."], ["Eine Klasse mit 20 Lernenden hat den Schnitt 4,6. Ein neuer Schüler mit Note 5,4 kommt dazu. Neuer Schnitt? (2 Dezimalen)", 4.64, "", 0.005, "(92 + 5,4) : 21 ≈ 4,64"]]],
        ["wahl", "Welcher Wert beschreibt den «typischen» Lohn in der Firma besser?", [["Wähle.", ["der Mittelwert (6900 Fr.)", "der Median (5000 Fr.)"], 1, "Der Chef-Lohn ist ein Ausreisser."]]],
        ["offen", "Nimm Stellung.", [["Eine Firma wirbt: «Bei uns verdienen alle im Schnitt 6900 Fr.» Ist das ehrlich? Begründe.", "", "", "Nicht ganz: Der Mittelwert wird durch einen sehr hohen Lohn nach oben gezogen; vier von fünf verdienen 5200 Fr. oder weniger. Der Median zeigt das besser."]]]
      ] }
  });

  // ================================================================ NEUE ÜBUNGEN
  M("ma-brueche", "mzv", "Brüche, Dezimalzahlen und negative Zahlen", "Grundlagen für alle Themen: Brüche kürzen und umrechnen, mit Dezimalzahlen und negativen Zahlen rechnen, runden und schätzen.", {
    1: { regel: "Brüche: Zähler oben, Nenner unten. ¾ heisst: 3 von 4 gleichen Teilen.\nKürzen: Zähler und Nenner durch die gleiche Zahl teilen: 6/8 = 3/4.\nBruch als Dezimalzahl: Zähler : Nenner. ¾ = 3 : 4 = 0,75.\n\nNegative Zahlen: Auf der Zahlengeraden links von 0. −5 ist kleiner als −2.\n−3 + 5 = 2, 2 − 7 = −5.",
      bsp: [["Kürzen", "6/8 = 3/4"], ["Dezimalzahl", "¾ = 0,75"], ["Negativ", "−3 + 5 = 2"]],
      aufg: [
        ["rechnen", "Schreibe als Dezimalzahl.", [["1/2 =", 0.5, "", 0.001], ["3/4 =", 0.75, "", 0.001], ["1/5 =", 0.2, "", 0.001], ["7/10 =", 0.7, "", 0.001], ["3/8 =", 0.375, "", 0.0001]]],
        ["luecke", "Kürze so weit wie möglich.", [["6/8 = {}", "3/4"], ["10/15 = {}", "2/3"], ["12/16 = {}", "3/4"], ["25/100 = {}", "1/4"]]],
        ["rechnen", "Rechne mit negativen Zahlen.", [["−3 + 5 =", 2], ["2 − 7 =", -5], ["−4 − 6 =", -10], ["−8 + 8 =", 0], ["Am Morgen ist es −6 °C, am Mittag 4 °C. Um wie viele Grad ist es wärmer geworden?", 10, "°C"]]],
        ["wahl", "Wähle richtig.", [["Welche Zahl ist am kleinsten?", ["−2", "−7", "0"], 1], ["Welcher Bruch ist am grössten?", ["1/2", "2/3", "3/5"], 1, "0,5 / 0,67 / 0,6"]]],
        ["rechnen", "Runde.", [["4,57 auf eine Dezimale", 4.6, "", 0.001], ["12 849 auf Tausender", 13000], ["0,963 auf zwei Dezimalen", 0.96, "", 0.001]]]
      ] },
    2: { regel: "Brüche addieren: gleichnamig machen (gleicher Nenner), dann Zähler addieren. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.\nBrüche multiplizieren: Zähler mal Zähler, Nenner mal Nenner. 2/3 · 3/4 = 6/12 = 1/2.\n«Von» heisst mal: ¾ von 60 = 45.\n\nMinus mal Minus gibt Plus: (−3) · (−4) = 12. Minus mal Plus gibt Minus: (−3) · 4 = −12.",
      bsp: [["Addieren", "1/2 + 1/3 = 5/6"], ["Multiplizieren", "2/3 · 3/4 = 1/2"], ["Vorzeichen", "(−3) · (−4) = 12"]],
      aufg: [
        ["luecke", "Rechne und kürze.", [["1/2 + 1/3 = {}", "5/6"], ["3/4 − 1/2 = {}", "1/4"], ["2/3 · 3/4 = {}", "1/2"], ["2/5 + 1/10 = {}", "1/2"]]],
        ["rechnen", "Rechne.", [["¾ von 60 =", 45], ["2/5 von 250 Fr. =", 100, "Fr."], ["(−3) · (−4) =", 12], ["(−3) · 4 =", -12], ["(−20) : 5 =", -4], ["−2 · (−3) · (−1) =", -6]]],
        ["rechnen", "Dezimalzahlen im Alltag.", [["Ein Einkauf kostet 12.35 Fr., 4.80 Fr. und 7.95 Fr. Total?", 25.1, "Fr.", 0.001], ["Du bezahlst mit einer 50er-Note. Wie viel bekommst du zurück?", 24.9, "Fr.", 0.001], ["0,8 · 0,5 =", 0.4, "", 0.001], ["3,6 : 0,4 =", 9]]],
        ["reihe", "Ordne von klein nach gross.", [["Zahlen", ["−3", "−0,5", "1/4", "0,3", "2/3"]]]]
      ] },
    3: { regel: "Brüche dividieren: mit dem Kehrwert multiplizieren: 3/4 : 1/2 = 3/4 · 2/1 = 3/2 = 1½.\nGemischte Zahlen: 2¼ = 9/4.\n\nPunkt vor Strich und Klammern zuerst – auch mit negativen Zahlen: −2 + 3 · (−4) = −2 − 12 = −14.\n\nÜberschlag: Runden und im Kopf rechnen, um Fehler zu finden.",
      bsp: [["Dividieren", "3/4 : 1/2 = 3/2"], ["Reihenfolge", "−2 + 3 · (−4) = −14"]],
      aufg: [
        ["luecke", "Rechne (als gekürzter Bruch).", [["3/4 : 1/2 = {}", "3/2"], ["2/3 : 4 = {}", "1/6"], ["1½ · 2/3 = {}", "1"], ["5/6 − 1/4 = {}", "7/12"]]],
        ["rechnen", "Rechne.", [["−2 + 3 · (−4) =", -14], ["(−5 + 2) · (−6) =", 18], ["20 − 4 · (3 − 8) =", 40], ["(−2)³ + 10 =", 2], ["Wie viele ¾-Liter-Flaschen kann man aus 12 Litern füllen?", 16, "Flaschen"]]],
        ["wahl", "Überschlag: Welches Ergebnis ist ungefähr richtig?", [["48,9 · 21,3", ["etwa 100", "etwa 1000", "etwa 10 000"], 1, "50 · 20 = 1000"], ["398 : 0,49", ["etwa 80", "etwa 200", "etwa 800"], 2, "400 : 0,5 = 800"]]],
        ["offen", "Erkläre.", [["Warum wird eine Zahl grösser, wenn man sie durch 0,5 teilt?", "Wie oft passt 0,5 in 1?", "", "Durch 0,5 teilen heisst fragen, wie oft 0,5 hineinpasst. In 1 passt 0,5 zweimal, darum verdoppelt sich die Zahl."]]]
      ] }
  });

  M("ma-kreis", "mfr", "Kreis, Flächen und Umfang", "Vom Rechteck bis zum Kreis: Flächen und Umfänge berechnen und zusammengesetzte Figuren zerlegen. Rechne mit π = 3,14.", {
    1: { regel: "Rechteck: A = Länge · Breite, u = 2 · (l + b).\nQuadrat: A = s · s, u = 4 · s.\nDreieck: A = Grundseite · Höhe : 2.\nKreis: A = r · r · π, u = d · π (π ≈ 3,14).\n\n1 m² = 100 dm² = 10 000 cm².",
      bsp: [["Rechteck 8 × 5", "A = 40 cm², u = 26 cm"], ["Dreieck g = 6, h = 4", "A = 12 cm²"], ["Kreis r = 10", "A = 314 cm², u = 62,8 cm"]],
      aufg: [
        ["rechnen", "Berechne.", [["Fläche eines Rechtecks 8 cm × 5 cm", 40, "cm²"], ["Umfang dieses Rechtecks", 26, "cm"], ["Fläche eines Quadrats mit 7 cm Seite", 49, "cm²"], ["Fläche eines Dreiecks: g = 6 cm, h = 4 cm", 12, "cm²"], ["Fläche eines Kreises mit r = 10 cm", 314, "cm²", 0.5], ["Umfang eines Kreises mit d = 10 cm", 31.4, "cm", 0.05]]],
        ["rechnen", "Sachaufgaben.", [["Ein Zimmer ist 4,5 m lang und 3 m breit. Wie viele m² Boden braucht es?", 13.5, "m²", 0.01], ["Ein Fussballfeld ist 105 m lang und 68 m breit. Fläche?", 7140, "m²"], ["Wie viele cm² sind 1 m²?", 10000, "cm²"]]],
        ["wahl", "Wähle richtig.", [["Wie heisst die Strecke vom Mittelpunkt zum Rand des Kreises?", ["Durchmesser", "Radius", "Umfang"], 1], ["Ein Kreis hat 8 cm Radius. Wie gross ist der Durchmesser?", ["4 cm", "16 cm", "64 cm"], 1]]]
      ] },
    2: { regel: "Parallelogramm: A = g · h.\nTrapez: A = (a + c) : 2 · h.\nKreisring: grosser Kreis minus kleiner Kreis.\nZusammengesetzte Figuren: in Rechtecke, Dreiecke und Kreisteile zerlegen.",
      bsp: [["Trapez a = 8, c = 4, h = 5", "A = 30 cm²"], ["Halbkreis r = 2", "A = 6,28 cm²"]],
      aufg: [
        ["rechnen", "Berechne (π = 3,14).", [["Parallelogramm: g = 9 cm, h = 4 cm", 36, "cm²"], ["Trapez: a = 8 cm, c = 4 cm, h = 5 cm", 30, "cm²"], ["Halbkreis mit r = 2 cm: Fläche", 6.28, "cm²", 0.01], ["Kreisring: R = 5 cm, r = 3 cm", 50.24, "cm²", 0.05], ["Ein Velorad hat 70 cm Durchmesser. Wie viele Meter fährt es bei einer Umdrehung?", 2.2, "m", 0.01, "70 · 3,14 = 219,8 cm"]]],
        ["rechnen", "Zusammengesetzte Figur: Ein Rechteck 10 m × 6 m mit einem Halbkreis (Durchmesser 6 m) an der schmalen Seite.", [["Fläche des Rechtecks", 60, "m²"], ["Fläche des Halbkreises", 14.13, "m²", 0.02], ["Gesamtfläche", 74.13, "m²", 0.05]]],
        ["wahl", "Ein Quadrat und ein Kreis haben beide den Umfang 40 cm. Welche Figur hat die grössere Fläche?", [["Wähle.", ["das Quadrat", "der Kreis", "beide gleich"], 1, "Quadrat 100 cm², Kreis etwa 127 cm²"]]]
      ] },
    3: { regel: "Radius aus der Fläche: r = √(A : π).\nRadius aus dem Umfang: r = u : (2 · π).\nKreisausschnitt (Sektor): A = r² · π · Winkel : 360°.",
      bsp: [["Aus der Fläche", "A = 78,5 → r = 5"], ["Sektor 90°, r = 4", "A = 12,56 cm²"]],
      aufg: [
        ["rechnen", "Rechne (π = 3,14, auf 2 Dezimalen).", [["Ein Kreis hat 78,5 cm² Fläche. Radius?", 5, "cm", 0.01], ["Ein Kreis hat 50 cm Umfang. Radius?", 7.96, "cm", 0.01], ["Kreisausschnitt 90°, r = 4 cm: Fläche", 12.56, "cm²", 0.01], ["Eine Pizza mit 30 cm Durchmesser wird in 8 gleiche Stücke geschnitten. Fläche eines Stücks?", 88.31, "cm²", 0.05], ["Eine runde Laufbahn hat innen 100 m Umfang. Wie lang ist eine Runde auf einer Bahn, die 1,2 m weiter aussen liegt?", 107.54, "m", 0.05, "Radius + 1,2 m → Umfang + 2 · 1,2 · 3,14 = + 7,54 m"]]],
        ["wahl", "Wähle richtig.", [["Der Radius eines Kreises wird verdoppelt. Die Fläche wird …", ["doppelt so gross", "viermal so gross", "dreimal so gross"], 1]]],
        ["offen", "Erkläre.", [["Eine Pizza mit 30 cm kostet 15 Fr., eine mit 40 cm kostet 24 Fr. Welche ist pro cm² günstiger? Rechne und begründe.", "Berechne die Flächen.", "", "30 cm: 706,5 cm² → 2,1 Rappen pro cm². 40 cm: 1256 cm² → 1,9 Rappen pro cm². Die grosse Pizza ist pro cm² günstiger."]]]
      ] }
  });

  M("ma-dreisatz", "mgf", "Proportionalität und Dreisatz", "Rezepte, Einkäufe und Arbeitszeiten: proportionale und umgekehrt proportionale Zusammenhänge erkennen und mit dem Dreisatz rechnen.", {
    1: { regel: "Proportional: doppelt so viel → doppelt so teuer. Beispiel: 3 kg kosten 12 Fr. → 1 kg kostet 4 Fr. → 5 kg kosten 20 Fr.\n\nDreisatz in drei Schritten:\n1. Was ist gegeben? (3 kg → 12 Fr.)\n2. Auf 1 umrechnen (1 kg → 4 Fr.)\n3. Auf das Gesuchte umrechnen (5 kg → 20 Fr.)",
      bsp: [["Gegeben", "3 kg → 12 Fr."], ["Auf 1", "1 kg → 4 Fr."], ["Gesucht", "5 kg → 20 Fr."]],
      aufg: [
        ["rechnen", "Dreisatz.", [["3 kg Äpfel kosten 12 Fr. Wie viel kosten 5 kg?", 20, "Fr."], ["4 Hefte kosten 6 Fr. Wie viel kosten 10 Hefte?", 15, "Fr."], ["Ein Auto braucht 6 Liter für 100 km. Wie viel für 250 km?", 15, "Liter"], ["Ein Lernender verdient 7.50 Fr. pro Stunde im Nebenjob. Wie viel für 12 Stunden?", 90, "Fr."], ["Ein Rezept für 4 Personen braucht 300 g Mehl. Wie viel für 6 Personen?", 450, "g"]]],
        ["zuordnen", "Proportional oder nicht?", [["Anzahl Brötchen und Preis", 0], ["Alter und Körpergrösse eines Menschen", 1], ["Liter Benzin und Preis", 0], ["Anzahl Personen und Dauer eines Fussballspiels", 1]], ["proportional", "nicht proportional"]],
        ["wahl", "Wähle richtig.", [["5 Kugeln Glace kosten 10 Fr. Was kostet 1 Kugel?", ["1 Fr.", "2 Fr.", "5 Fr."], 1]]]
      ] },
    2: { regel: "Umgekehrt proportional: doppelt so viele Personen → halb so viel Zeit.\nBeispiel: 4 Personen brauchen 6 Stunden. 1 Person braucht 24 Stunden. 8 Personen brauchen 3 Stunden.\n\nTipp: Bei «je mehr, desto weniger» ist es umgekehrt proportional.",
      bsp: [["Proportional", "mehr Ware → mehr Preis"], ["Umgekehrt", "mehr Personen → weniger Zeit"]],
      aufg: [
        ["rechnen", "Rechne.", [["4 Personen streichen einen Zaun in 6 Stunden. Wie lange brauchen 3 Personen?", 8, "Stunden"], ["Ein Vorrat reicht für 20 Tiere 15 Tage. Wie lange reicht er für 25 Tiere?", 12, "Tage"], ["7 m Stoff kosten 63 Fr. Was kosten 4,5 m?", 40.5, "Fr.", 0.01], ["Mit 50 km/h braucht man 36 Minuten. Wie lange mit 60 km/h?", 30, "min"], ["Für 2,4 kg Hackfleisch bezahlt man 38.40 Fr. Was kosten 750 g?", 12, "Fr."]]],
        ["zuordnen", "Proportional oder umgekehrt proportional?", [["Anzahl Arbeiter und Arbeitszeit", 1], ["Gewicht der Bananen und Preis", 0], ["Geschwindigkeit und Fahrzeit für eine feste Strecke", 1], ["Arbeitsstunden und Lohn", 0]], ["proportional", "umgekehrt proportional"]],
        ["reihe", "Ordne die Schritte des Dreisatzes.", [["5 Pizzen kosten 60 Fr. Was kosten 3 Pizzen?", ["5 Pizzen → 60 Fr.", "1 Pizza → 12 Fr.", "3 Pizzen → 36 Fr."]]]]
      ] },
    3: { regel: "Zusammengesetzter Dreisatz: Mehrere Grössen ändern sich. Schritt für Schritt rechnen und bei jeder Grösse überlegen: proportional oder umgekehrt?\n\n3 Maschinen stellen in 4 Stunden 600 Teile her. 1 Maschine in 1 Stunde: 600 : 3 : 4 = 50 Teile.",
      bsp: [["3 Maschinen, 4 h", "600 Teile"], ["1 Maschine, 1 h", "50 Teile"]],
      aufg: [
        ["rechnen", "Rechne.", [["3 Maschinen stellen in 4 Stunden 600 Teile her. Wie viele Teile stellen 5 Maschinen in 6 Stunden her?", 1500, "Teile"], ["6 Lernende kommissionieren in 2 Stunden 180 Aufträge. Wie viele Aufträge schaffen 4 Lernende in 3 Stunden?", 180, "Aufträge"], ["Ein Lastwagen braucht für 3 Fahrten à 120 km insgesamt 108 Liter Diesel. Wie viel braucht er für 5 Fahrten à 80 km?", 120, "Liter"], ["Ein Vorrat reicht 8 Personen 15 Tage. Nach 5 Tagen kommen 2 Personen dazu. Wie viele Tage reicht der Rest noch?", 8, "Tage", 0, "Rest: 8 Personen für 10 Tage = 80 Personentage. 80 : 10 Personen = 8 Tage"]]],
        ["offen", "Erkläre.", [["Ein Maler braucht für ein Zimmer 6 Stunden. Sind 6 Maler dann in 1 Stunde fertig? Was spricht dafür, was dagegen?", "", "", "Rechnerisch ja (umgekehrt proportional). In Wirklichkeit stören sie sich gegenseitig, es gibt zu wenig Platz und Pausen; das Modell gilt nur ungefähr."]]]
      ] }
  });

  M("ma-einheiten", "mgf", "Grössen und Einheiten umrechnen", "Längen, Flächen, Volumen, Gewichte und Zeiten umrechnen, wie es in jeder Lehre gebraucht wird.", {
    1: { regel: "Länge: 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm.\nGewicht: 1 t = 1000 kg, 1 kg = 1000 g.\nHohlmass: 1 l = 10 dl = 100 cl = 1000 ml.\nZeit: 1 h = 60 min, 1 min = 60 s, 1 Tag = 24 h.",
      bsp: [["Länge", "2,5 km = 2500 m"], ["Gewicht", "750 g = 0,75 kg"], ["Zeit", "2 h 15 min = 135 min"]],
      aufg: [
        ["rechnen", "Rechne um.", [["2,5 km = … m", 2500, "m"], ["350 cm = … m", 3.5, "m", 0.001], ["750 g = … kg", 0.75, "kg", 0.001], ["3 t = … kg", 3000, "kg"], ["1,5 l = … dl", 15, "dl"], ["250 ml = … l", 0.25, "l", 0.001], ["2 h 15 min = … min", 135, "min"], ["3 Tage = … h", 72, "h"]]],
        ["wahl", "Welche Einheit passt?", [["Ein Schulzimmer ist etwa 9 … lang.", ["mm", "m", "km"], 1], ["Ein Apfel wiegt etwa 150 …", ["g", "kg", "t"], 0], ["Eine Tasse fasst etwa 2 …", ["ml", "dl", "l"], 1]]]
      ] },
    2: { regel: "Flächen: 1 m² = 100 dm² = 10 000 cm². 1 a = 100 m², 1 ha = 100 a = 10 000 m².\nVolumen: 1 m³ = 1000 dm³, 1 dm³ = 1000 cm³.\n1 dm³ = 1 l. 1 cm³ = 1 ml.\n\nZeitangaben: 1,5 h = 1 h 30 min (nicht 1 h 50 min!).",
      bsp: [["Fläche", "3 m² = 30 000 cm²"], ["Volumen", "2,5 m³ = 2500 l"], ["Zeit", "0,25 h = 15 min"]],
      aufg: [
        ["rechnen", "Rechne um.", [["3 m² = … cm²", 30000, "cm²"], ["4500 m² = … a", 45, "a"], ["2 ha = … m²", 20000, "m²"], ["2,5 m³ = … l", 2500, "l"], ["750 cm³ = … l", 0.75, "l", 0.001], ["0,25 h = … min", 15, "min"], ["1,2 h = … min", 72, "min"], ["195 min = … h (als Dezimalzahl)", 3.25, "h", 0.001]]],
        ["wahl", "Wähle richtig.", [["1,5 h sind …", ["1 h 50 min", "1 h 30 min", "1 h 5 min"], 1], ["Wie viele Liter sind 1 m³?", ["100 l", "1000 l", "10 000 l"], 1]]]
      ] },
    3: { regel: "Zusammengesetzte Einheiten: km/h, Fr./kg, kg/m³ (Dichte).\nDichte = Masse : Volumen. Wasser hat 1 kg pro Liter.\n\nMassstäbe und Einheiten zusammen: zuerst alles in die gleiche Einheit umrechnen.",
      bsp: [["Dichte Wasser", "1 l → 1 kg"], ["Preis pro kg", "450 g für 3.60 Fr. → 8 Fr./kg"]],
      aufg: [
        ["rechnen", "Rechne.", [["450 g kosten 3.60 Fr. Preis pro kg?", 8, "Fr./kg"], ["Ein Becken (2 m × 1,5 m × 0,8 m) ist voll Wasser. Wie viele kg Wasser sind darin?", 2400, "kg"], ["Ein Lastwagen lädt 24 Paletten à 650 kg. Wie viele Tonnen sind das?", 15.6, "t", 0.001], ["Ein Wasserhahn tropft: 1 Tropfen pro Sekunde, 20 Tropfen = 1 ml. Wie viele Liter pro Tag?", 4.32, "l", 0.01, "86 400 Tropfen : 20 = 4320 ml"], ["Eine Arbeitswoche hat 42 Stunden 30 Minuten. Wie viele Stunden (Dezimalzahl) sind das?", 42.5, "h", 0.001]]],
        ["offen", "Erkläre.", [["Jemand rechnet: 2 h 45 min = 2,45 h. Was ist falsch, und wie heisst es richtig?", "", "", "Eine Stunde hat 60 Minuten, nicht 100. 45 min = 0,75 h, also 2 h 45 min = 2,75 h."]]]
      ] }
  });

  M("ma-sparen", "mgf", "Kontostand, Kontoauszug und Sparplan", "Zum Thema 4a: Gutschriften und Belastungen, Kontostand berechnen, Sparziele planen und Sparpläne mit Zins vergleichen.", {
    1: { regel: "Auf einem Kontoauszug stehen alle Bewegungen:\nGutschrift: Geld kommt aufs Konto (z. B. Lohn, Zins).\nBelastung: Geld geht vom Konto weg (z. B. Rechnung, Bargeldbezug).\n\nNeuer Kontostand = alter Kontostand + Gutschriften − Belastungen.",
      bsp: [["Gutschrift", "Lohn + 900 Fr."], ["Belastung", "Handyrechnung − 35 Fr."], ["Kontostand", "500 + 900 − 35 = 1365 Fr."]],
      aufg: [
        ["zuordnen", "Gutschrift oder Belastung?", [["Lohnzahlung", 0], ["Handyrechnung", 1], ["Zinsgutschrift der Bank", 0], ["Bargeldbezug am Automaten", 1], ["Kontoführungsgebühr", 1], ["Geldgeschenk von der Grossmutter (Überweisung)", 0]], ["Gutschrift", "Belastung"]],
        ["rechnen", "Berechne den neuen Kontostand.", [["Kontostand 820 Fr. Einzahlung 250 Fr., Auszahlung 175 Fr.", 895, "Fr."], ["Kontostand 1240 Fr. Lohn 950 Fr., Miete Zimmer 400 Fr., Krankenkasse 110 Fr.", 1680, "Fr."], ["Kontostand 60 Fr. Belastung 85 Fr. Neuer Kontostand?", -25, "Fr.", 0, "Das Konto ist überzogen."]]],
        ["rechnen", "Sparziel.", [["Mia spart jeden Monat 40 Fr. Wie viele Monate braucht sie für Kopfhörer für 280 Fr.?", 7, "Monate"], ["Leon will 1200 Fr. in einem Jahr sparen. Wie viel muss er pro Monat sparen?", 100, "Fr."]]],
        ["wahl", "Wähle richtig.", [["Was bedeutet ein negativer Kontostand?", ["Man hat Geld gespart.", "Das Konto ist überzogen, man schuldet der Bank Geld.", "Die Bank hat einen Fehler gemacht."], 1]]]
      ] },
    2: { regel: "Sparplan ohne Zins: Betrag pro Monat · Anzahl Monate.\nSparplan mit Zins (vereinfacht): Am Jahresende gibt es Zins auf das Geld, das schon da war.\n\nWer früh anfängt zu sparen, braucht pro Monat weniger.",
      bsp: [["12 · 50 Fr.", "600 Fr. pro Jahr"], ["Zins 1 % auf 1000 Fr.", "+ 10 Fr."]],
      aufg: [
        ["rechnen", "Kontoauszug von Noah für den März: Anfangssaldo 1430 Fr., Lohn + 1050 Fr., Handy − 39 Fr., ÖV-Abo − 67 Fr., Bargeld − 200 Fr., Online-Einkauf − 84.90 Fr.", [["Summe der Belastungen", 390.9, "Fr.", 0.001], ["Schlusssaldo Ende März", 2089.1, "Fr.", 0.001]]],
        ["rechnen", "Sparplan.", [["Ayla spart 3 Jahre lang jeden Monat 75 Fr. Wie viel hat sie ohne Zins?", 2700, "Fr."], ["Sie will ein Auto-Budget von 4000 Fr. in 2 Jahren. Wie viel pro Monat? (auf Franken aufrunden)", 167, "Fr.", 0, "4000 : 24 = 166,67 → 167 Fr."], ["Auf einem Konto liegen das ganze Jahr 2400 Fr. zu 0,75 %. Zins?", 18, "Fr."]]],
        ["mehrfach", "Was hilft beim Sparen?", [["Kreuze alle sinnvollen Tipps an.", ["Am Monatsanfang einen festen Betrag aufs Sparkonto überweisen", "Ein Budget machen", "Ratenkäufe für Kleider abschliessen", "Abos regelmässig überprüfen"], [0, 1, 3]]]]
      ] },
    3: { regel: "Sparplan mit Zinseszins: Jedes Jahr zum Kontostand die neue Einzahlung addieren und dann den Zins berechnen.\n\nJahr 1: 1000 Fr. · 1,02 = 1020 Fr.\nJahr 2: (1020 + 1000) · 1,02 = 2060,40 Fr.\n\nTeuerung (Inflation): Wenn die Preise stärker steigen als der Zins, verliert das Ersparte an Kaufkraft.",
      bsp: [["Jahr 1", "1020 Fr."], ["Jahr 2", "2060.40 Fr."], ["Kaufkraft", "Zins 0,5 %, Teuerung 1 % → etwa −0,5 %"]],
      aufg: [
        ["rechnen", "Sparplan: Am Anfang jedes Jahres 1000 Fr. einzahlen, Zins 2 %.", [["Kontostand Ende Jahr 1", 1020, "Fr."], ["Kontostand Ende Jahr 2", 2060.4, "Fr.", 0.01], ["Kontostand Ende Jahr 3 (auf Rappen)", 3121.61, "Fr.", 0.02, "(2060,40 + 1000) · 1,02 = 3121,61"], ["Wie viel davon sind Zinsen?", 121.61, "Fr.", 0.02]]],
        ["rechnen", "Vergleich.", [["Bank A: 0,5 % Zins, keine Gebühr. Bank B: 1 % Zins, aber 5 Fr. Gebühr pro Jahr. Du hast 1500 Fr. Wie viel mehr bekommst du bei der besseren Bank?", 2.5, "Fr.", 0.001, "A: 7.50 Fr.; B: 15 − 5 = 10 Fr."], ["Zins 0,5 %, Teuerung 1 %. Um wie viel Prozent verändert sich die Kaufkraft ungefähr?", -0.5, "%", 0.01]]],
        ["offen", "Nimm Stellung.", [["Sara (16) sagt: «Sparen lohnt sich nicht, die Zinsen sind viel zu klein.» Was antwortest du? Nutze Zahlen aus den Aufgaben.", "", "", "Z. B. der Zins ist klein, aber das Gesparte wächst vor allem durch regelmässige Einzahlungen (3 Jahre · 1000 Fr.); man hat eine Reserve für Notfälle oder die Lehre und braucht keinen teuren Kredit."]]]
      ] }
  });

  // ================================================================ ZUSATZAUFGABEN zu den bestehenden Übungen
  const EX = {
    "ma-potenz": {
      1: [
        ["rechnen", "Quadratzahlen und Wurzeln.", [["11² =", 121], ["13² =", 169], ["15² =", 225], ["20² =", 400], ["√225 =", 15], ["√400 =", 20]]],
        ["zuordnen", "Ist es eine Quadratzahl?", [["49", 0], ["60", 1], ["121", 0], ["200", 1], ["169", 0], ["1000", 1]], ["Quadratzahl", "keine Quadratzahl"]],
        ["wahl", "Wähle richtig.", [["Wie viele Nullen hat 10⁶?", ["5", "6", "7"], 1], ["Was ist grösser: 2⁵ oder 5²?", ["2⁵ = 32", "5² = 25", "beide gleich"], 0]]]
      ],
      2: [
        ["rechnen", "Berechne.", [["2³ · 2⁴ = 2 hoch …", 7], ["10⁵ : 10² = 10 hoch …", 3], ["3⁴ =", 81], ["(−1)⁹⁹ =", -1], ["1,2 · 10⁵ =", 120000], ["450 000 = 4,5 · 10 hoch …", 5], ["√(9 · 16) =", 12]]],
        ["zuordnen", "Ist das Ergebnis positiv oder negativ?", [["(−3)²", 0], ["(−3)³", 1], ["(−1)¹⁰", 0], ["−2⁴", 1]], ["positiv", "negativ"]]
      ],
      3: [
        ["rechnen", "Sehr grosse und sehr kleine Zahlen.", [["5 · 10⁻² =", 0.05, "", 0.0001], ["7,5 · 10⁻⁴ =", 0.00075, "", 0.000001], ["Ein Bakterium ist 2 · 10⁻⁶ m lang. Wie viele passen hintereinander auf 1 mm?", 500], ["Eine Festplatte hat 2 · 10¹² Byte. Ein Foto braucht 4 · 10⁶ Byte. Wie viele Fotos passen darauf?", 500000], ["√0,81 =", 0.9, "", 0.001], ["√200 ≈ (auf 1 Dezimale)", 14.1, "", 0.05]]],
        ["mehrfach", "Welche Zahlen sind kleiner als 1?", [["Kreuze alle an.", ["10⁻¹", "2⁰", "0,5²", "(−2)²"], [0, 2]]]],
        ["reihe", "Ordne von klein nach gross.", [["Zahlen", ["10⁻³", "0,5²", "2⁰", "√9", "2³"]]]]
      ]
    },
    "ma-terme": {
      1: [
        ["luecke", "Fasse zusammen.", [["9b − 4b = {}", "5b"], ["2 · 4x = {}", "8x"], ["3a + 2 + 4a = {}", ["7a + 2", "2 + 7a"]], ["6y : 3 = {}", "2y"]]],
        ["rechnen", "Setze ein.", [["4a + 2b für a = 3 und b = 1", 14], ["x² für x = 6", 36], ["3(n + 2) für n = 4", 18]]],
        ["wahl", "Welcher Term passt?", [["Ein Drittel einer Zahl x", ["x : 3", "3x", "x − 3"], 0], ["Fläche eines Rechtecks mit Länge a und Breite 4", ["4a", "a + 4", "2a + 8"], 0], ["Tim ist t Jahre alt. Seine Schwester ist 5 Jahre älter.", ["t + 5", "5t", "t − 5"], 0]]]
      ],
      2: [
        ["luecke", "Löse auf und vereinfache.", [["−3(2x − 4) = {}", ["−6x + 12", "12 − 6x"]], ["2(x + 3) + 4(x − 1) = {}", ["6x + 2", "2 + 6x"]], ["7a − (3a − 2) = {}", ["4a + 2", "2 + 4a"]], ["8a − 12 = 4({})", "2a − 3"]]],
        ["rechnen", "Vom Text zum Term.", [["Kinoabend: Ticket 16 Fr., Popcorn 7 Fr. pro Person. Wie viel kostet es für 6 Personen?", 138, "Fr.", 0, "Term: 23n"], ["Tische werden in einer Reihe zusammengestellt: 1 Tisch hat 4 Plätze, 2 Tische haben 6, 3 Tische haben 8 Plätze. Wie viele Plätze haben 12 Tische?", 26, "Plätze", 0, "Term: 2n + 2"]]],
        ["mehrfach", "Welche Terme sind gleichwertig mit 4x + 8?", [["Kreuze alle an.", ["4(x + 2)", "2(2x + 4)", "4x + 2 · 4", "8x + 4"], [0, 1, 2]]]]
      ],
      3: [
        ["luecke", "Multipliziere aus.", [["(x − 3)² = {}", "x² − 6x + 9"], ["(a + 5)(a − 5) = {}", "a² − 25"], ["(2x + 1)(x + 4) = {}", "2x² + 9x + 4"], ["x² + 5x = x({})", "x + 5"]]],
        ["rechnen", "Muster aus Plättchen: Figur n besteht aus n² + 2n Plättchen.", [["Wie viele Plättchen hat Figur 10?", 120], ["Welche Figur hat genau 63 Plättchen?", 7, "", 0, "7² + 14 = 63"]]],
        ["offen", "Erkläre.", [["Zeige mit einem Zahlenbeispiel, dass (a + b)² nicht gleich a² + b² ist.", "Setze z. B. a = 2 und b = 3 ein.", "", "(2 + 3)² = 25, aber 2² + 3² = 13. Es fehlt 2ab = 12."]]]
      ]
    },
    "ma-gleich": {
      1: [
        ["rechnen", "Löse die Gleichung. x = ?", [["x + 12 = 30", 18], ["5x = 45", 9], ["2x − 7 = 9", 8], ["x : 3 + 2 = 6", 12], ["10 = 3x + 1", 3]]],
        ["rechnen", "Sachaufgabe.", [["Lea kauft 3 gleiche Hefte und bezahlt mit 20 Fr. Sie bekommt 5.60 Fr. zurück. Wie viel kostet ein Heft?", 4.8, "Fr.", 0.001, "3x = 14,40"]]],
        ["wahl", "Welche Gleichung passt?", [["Das Dreifache einer Zahl ist 24.", ["3x = 24", "x + 3 = 24", "x : 3 = 24"], 0], ["Eine Zahl vermindert um 8 ergibt 15.", ["x − 8 = 15", "8 − x = 15", "8x = 15"], 0]]]
      ],
      2: [
        ["rechnen", "Löse die Gleichung. x = ?", [["8x − 3 = 5x + 12", 5], ["2(x + 5) = 3x + 4", 6], ["4 − 3x = x − 8", 3], ["(x + 4) : 3 = 5", 11]]],
        ["rechnen", "Sachaufgaben.", [["Ein Rechteck ist doppelt so lang wie breit. Der Umfang ist 54 cm. Wie breit ist es?", 9, "cm"], ["Arda hat 120 Fr. und spart 15 Fr. pro Woche. Ben hat 40 Fr. und spart 25 Fr. pro Woche. Nach wie vielen Wochen haben beide gleich viel?", 8, "Wochen"], ["Du hast 50 Fr. Ein Kinoticket kostet 14 Fr. Wie viele Tickets kannst du höchstens kaufen?", 3, "Tickets", 0, "14x ≤ 50"]]],
        ["reihe", "Bringe die Lösungsschritte in die richtige Reihenfolge.", [["Löse 3(x − 2) = 15.", ["3(x − 2) = 15", "3x − 6 = 15  (Klammer auflösen)", "3x = 21  (+6)", "x = 7  (: 3)", "Probe: 3 · (7 − 2) = 15"]]]]
      ],
      3: [
        ["rechnen", "Löse die Gleichung. x = ?", [["3(2x − 1) − 2(x + 4) = 9", 5], ["x : 2 + x : 3 = 10", 12], ["0,4(x − 5) = 0,2x + 1", 15]]],
        ["rechnen", "Gleichungssystem: 2x + y = 11 und x − y = 1.", [["x =", 4], ["y =", 3]]],
        ["rechnen", "Sachaufgaben.", [["Am Kiosk: 2 Glace und 3 Getränke kosten 13 Fr. 1 Glace und 1 Getränk kosten 5.50 Fr. Wie viel kostet ein Getränk?", 2, "Fr."], ["Und eine Glace?", 3.5, "Fr.", 0.001], ["Ein Vater ist dreimal so alt wie sein Sohn. In 12 Jahren ist er doppelt so alt. Wie alt ist der Sohn heute?", 12, "Jahre", 0, "3s + 12 = 2(s + 12)"]]]
      ]
    },
    "ma-prozent": {
      1: [
        ["rechnen", "Rechne.", [["75 % von 40", 30], ["5 % von 200", 10], ["30 % von 90", 27], ["Schuhe kosten 80 Fr., Rabatt 25 %. Neuer Preis?", 60, "Fr."], ["In einer Klasse mit 20 Lernenden haben 60 % schon eine Lehrstelle. Wie viele sind das?", 12, "Lernende"]]],
        ["paare", "Welche Dezimalzahl passt?", [["25 %", 0], ["50 %", 1], ["10 %", 2], ["5 %", 3]], ["0,25", "0,5", "0,1", "0,05"]],
        ["wahl", "Wähle richtig.", [["Was ist mehr: 20 % von 50 oder 50 % von 20?", ["20 % von 50", "50 % von 20", "gleich viel"], 2, "Beides ist 10."]]]
      ],
      2: [
        ["rechnen", "Rechne.", [["Ein Preis inklusive 8,1 % MWST beträgt 540.50 Fr. Wie hoch ist der Preis ohne MWST?", 500, "Fr."], ["Bei Barzahlung innert 10 Tagen gibt es 2 % Skonto auf 1250 Fr. Wie viel bezahlt man?", 1225, "Fr."], ["Wie viel Prozent sind 18 von 72?", 25, "%"], ["15 % eines Betrags sind 60 Fr. Wie gross ist der Betrag?", 400, "Fr."], ["Ein Akku hat 3000 mAh, die Anzeige zeigt 35 %. Wie viele mAh sind noch geladen?", 1050, "mAh"]]],
        ["mehrfach", "Welche Angaben sind gleich gross wie 0,2?", [["Kreuze alle an.", ["20 %", "1/5", "2 %", "0,20"], [0, 1, 3]]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Ein Preis steigt um 20 % und sinkt dann um 20 %. Um wie viel Prozent hat er sich insgesamt verändert? (mit Vorzeichen)", -4, "%"], ["Eine Miete von 1650 Fr. steigt um 2,5 %. Neue Miete?", 1691.25, "Fr.", 0.01], ["Nach 40 % Rabatt kostet ein Pullover 59.90 Fr. Wie viel kostete er vorher? (auf Rappen)", 99.83, "Fr.", 0.01], ["Die Arbeitslosenquote steigt von 2 % auf 3 %. Um wie viel Prozent ist sie gestiegen?", 50, "%"]]],
        ["wahl", "Die Quote steigt von 2 % auf 3 %. Wie viele Prozentpunkte sind das?", [["Wähle.", ["1 Prozentpunkt", "50 Prozentpunkte", "3 Prozentpunkte"], 0, "Prozentpunkte sind die Differenz der Prozentsätze."]]]
      ]
    },
    "ma-aehnlich": {
      1: [
        ["rechnen", "Rechne.", [["Plan 1 : 50: 8 cm auf dem Plan sind … m", 4, "m"], ["Karte 1 : 100 000: 3 cm sind … km", 3, "km"], ["Eine 12 m lange Wand wird im Massstab 1 : 200 gezeichnet. Wie lang ist sie auf dem Plan?", 6, "cm"], ["Eine Lok ist 20 m lang. Wie lang ist das Modell im Massstab 1 : 87? (auf 1 Dezimale)", 23, "cm", 0.1]]],
        ["zuordnen", "Vergrösserung, Verkleinerung oder Originalgrösse?", [["1 : 100", 0], ["5 : 1", 1], ["1 : 1", 2], ["1 : 25 000", 0], ["10 : 1", 1]], ["Verkleinerung", "Vergrösserung", "Originalgrösse"]]
      ],
      2: [
        ["rechnen", "Rechne.", [["Ein Dreieck hat die Seiten 4 cm, 6 cm, 8 cm. Bei einem ähnlichen Dreieck ist die längste Seite 12 cm. Wie lang ist die kürzeste?", 6, "cm"], ["Plan 1 : 100: Ein Zimmer ist 4 cm × 3 cm. Wie viele m² hat es?", 12, "m²"], ["Eine Strecke ist auf einer Karte 1 : 25 000 6 cm lang. Wie lang ist sie auf einer Karte 1 : 50 000?", 3, "cm"], ["Eine 1,60 m grosse Person wirft 2 m Schatten. Ein Turm wirft gleichzeitig 45 m Schatten. Wie hoch ist der Turm?", 36, "m"]]],
        ["wahl", "Ein Streckfaktor k = 0,5 bedeutet …", [["Wähle.", ["Vergrösserung auf das Doppelte", "Verkleinerung auf die Hälfte", "keine Veränderung"], 1]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Plan 1 : 200: Eine Fläche ist 15 cm² gross. Wie viele m² sind es in Wirklichkeit?", 60, "m²", 0, "15 · 40 000 = 600 000 cm²"], ["Eine Statue ist 3 m hoch. Ein massives Modell aus dem gleichen Material ist 30 cm hoch und wiegt 2 kg. Wie viel wiegt die Statue?", 2000, "kg", 0, "k = 10 → Gewicht · 1000"], ["Das Volumen wird beim Strecken 27-mal so gross. Streckfaktor k?", 3], ["Pizza 30 cm und 40 cm Durchmesser: Wie viel Mal grösser ist die Fläche der grossen? (2 Dezimalen)", 1.78, "", 0.01]]]
      ]
    },
    "ma-kegel": {
      1: [
        ["rechnen", "Rechne mit π = 3,14.", [["Kreisfläche mit r = 4 cm", 50.24, "cm²", 0.05], ["Kreisumfang mit d = 10 cm", 31.4, "cm", 0.05], ["Eine Konservendose hat r = 4 cm und h = 11 cm. Volumen?", 552.64, "cm³", 0.5], ["Wie viele Liter sind das ungefähr? (2 Dezimalen)", 0.55, "l", 0.01], ["Kugel mit r = 1 cm: Volumen (2 Dezimalen)", 4.19, "cm³", 0.01]]]
      ],
      2: [
        ["rechnen", "Rechne mit π = 3,14.", [["Kegel: d = 10 cm, h = 9 cm. Volumen?", 235.5, "cm³", 0.5], ["Kugel mit d = 6 cm: Oberfläche", 113.04, "cm²", 0.1], ["Mantel eines Zylinders (Etikett einer Dose): r = 3 cm, h = 10 cm", 188.4, "cm²", 0.1], ["Kugel mit d = 20 cm: Volumen in Litern (2 Dezimalen)", 4.19, "l", 0.01], ["Kegel mit r = 6 cm und h = 8 cm: Mantellinie s", 10, "cm"]]]
      ],
      3: [
        ["rechnen", "Rechne mit π = 3,14.", [["Ein zylindrischer Wassertank ist 2 m breit (Durchmesser) und 3 m hoch. Wie viele Liter fasst er?", 9420, "l", 1], ["Ein kegelförmiger Kieshaufen hat 2 m Radius und ist 1,2 m hoch. Volumen? (2 Dezimalen)", 5.02, "m³", 0.01], ["Die Erde ist ungefähr eine Kugel mit r = 6371 km. Oberfläche in Millionen km²? (auf 1 Dezimale)", 509.8, "Mio. km²", 0.5], ["Ein Zylinder soll 1 Liter fassen und hat r = 5 cm. Wie hoch muss er sein? (2 Dezimalen)", 12.74, "cm", 0.01]]]
      ]
    },
    "ma-koerper": {
      1: [
        ["rechnen", "Rechne.", [["Quader 10 cm × 4 cm × 3 cm: Volumen", 120, "cm³"], ["Ein Würfel mit 10 cm Kante fasst wie viele Liter?", 1, "l"], ["Oberfläche einer Schachtel 30 cm × 20 cm × 10 cm", 2200, "cm²"], ["Ein Würfel hat 150 cm² Oberfläche. Wie lang ist eine Kante?", 5, "cm", 0, "150 : 6 = 25 → 5"]]],
        ["mehrfach", "Welche Körper sind Prismen?", [["Kreuze alle an.", ["Würfel", "Quader", "Kugel", "Dreiecksprisma", "Kegel"], [0, 1, 3]]]]
      ],
      2: [
        ["rechnen", "Rechne (π = 3,14).", [["Ein Zelt ist ein Dreiecksprisma: Dreieck mit g = 2 m und h = 1,5 m, Länge 3 m. Volumen?", 4.5, "m³", 0.001], ["Ein Dodekaeder hat 20 Ecken und 12 Flächen. Wie viele Kanten?", 30], ["Zylinder r = 5 cm, h = 8 cm: Volumen", 628, "cm³", 0.5], ["Aquarium 60 cm × 30 cm × 35 cm: Wie viele Liter?", 63, "l"]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Dreiecksprisma: rechtwinkliges Dreieck mit den Seiten 3 cm, 4 cm, 5 cm, Länge 10 cm. Oberfläche?", 132, "cm²", 0, "2 · 6 + (3 + 4 + 5) · 10"], ["Ein Betonsockel ist 0,5 m × 0,5 m × 1 m. Beton wiegt 2,4 t pro m³. Wie viele kg wiegt der Sockel?", 600, "kg"]]],
        ["wahl", "Wähle richtig.", [["Wie viele verschiedene Würfelnetze gibt es?", ["6", "11", "24"], 1]]]
      ]
    },
    "ma-pythagoras": {
      1: [
        ["rechnen", "Berechne die gesuchte Seite.", [["a = 8 cm, b = 6 cm. c = ?", 10, "cm"], ["a = 12 cm, b = 16 cm. c = ?", 20, "cm"], ["c = 13 cm, a = 5 cm. b = ?", 12, "cm"], ["Diagonale eines Rechtecks 6 cm × 8 cm", 10, "cm"]]],
        ["wahl", "Ist das Dreieck rechtwinklig?", [["6 cm, 8 cm, 10 cm", JN, 0], ["4 cm, 5 cm, 6 cm", JN, 1], ["9 cm, 12 cm, 15 cm", JN, 0]]]
      ],
      2: [
        ["rechnen", "Rechne (2 Dezimalen).", [["Ein Handy ist 15 cm hoch und 7 cm breit. Diagonale?", 16.55, "cm", 0.01], ["Eine 6 m lange Leiter reicht 5,5 m hoch. Wie weit steht sie von der Wand weg?", 2.4, "m", 0.01], ["Eine Wiese ist 40 m × 30 m. Wie viele Meter spart man, wenn man diagonal statt aussen herum geht?", 20, "m"], ["Gleichschenkliges Dreieck: Basis 10 cm, Schenkel 13 cm. Höhe?", 12, "cm"]]]
      ],
      3: [
        ["rechnen", "Rechne (2 Dezimalen).", [["Raumdiagonale eines Würfels mit 10 cm Kante", 17.32, "cm", 0.01], ["Abstand der Punkte A(−2|1) und B(4|9)", 10], ["Ein Haus ist 8 m breit, der Dachfirst liegt 3 m über der Decke in der Mitte. Wie lang ist ein Dachsparren?", 5, "m"], ["Ein Fernseher hat 140 cm Diagonale und ist 122 cm breit. Wie hoch ist er?", 68.67, "cm", 0.05]]]
      ]
    },
    "ma-linear": {
      1: [
        ["rechnen", "Wertetabelle zu y = 3x − 1.", [["x = 0", -1], ["x = 2", 5], ["x = −1", -4]]],
        ["rechnen", "Sachaufgabe: Velo-Verleih 10 Fr. Grundgebühr plus 5 Fr. pro Stunde.", [["Kosten für 3 Stunden", 25, "Fr."], ["Wie viele Stunden für 40 Fr.?", 6, "h"]]],
        ["zuordnen", "Steigend, fallend oder konstant?", [["y = 2x + 1", 0], ["y = −x + 4", 1], ["y = 3", 2], ["y = −0,5x", 1]], ["steigend", "fallend", "konstant"]]
      ],
      2: [
        ["rechnen", "Rechne.", [["Steigung durch (0|2) und (4|10)", 2], ["Steigung durch (2|5) und (6|3)", -0.5, "", 0.001], ["Gerade mit m = 3 durch (2|7): q =", 1], ["Nullstelle von y = −2x + 8", 4]]],
        ["rechnen", "Strom: 12 Fr. Grundgebühr pro Monat plus 0.25 Fr. pro kWh.", [["Kosten bei 200 kWh", 62, "Fr."], ["Wie viele kWh bei 87 Fr.?", 300, "kWh"]]],
        ["luecke", "Funktionsgleichung für die Stromkosten y (x = kWh):", [["y = {}", ["0,25x + 12", "12 + 0,25x", "0.25x + 12"]]]]
      ],
      3: [
        ["rechnen", "Schnittpunkt von y = 2x − 1 und y = −x + 8.", [["x =", 3], ["y =", 5]]],
        ["luecke", "Gerade durch (1|1) und (3|7):", [["y = {}", ["3x − 2", "−2 + 3x"]]]],
        ["rechnen", "Fitness: Abo A kostet 50 Fr. pro Monat. Abo B kostet 20 Fr. plus 6 Fr. pro Besuch.", [["Bei wie vielen Besuchen pro Monat sind beide gleich teuer?", 5, "Besuche"], ["Was kostet B bei 8 Besuchen?", 68, "Fr."]]],
        ["offen", "Erkläre.", [["Wann lohnt sich Abo A, wann Abo B? Begründe mit den Zahlen.", "", "", "Bei weniger als 5 Besuchen pro Monat ist B günstiger, bei mehr als 5 Besuchen A."]]]
      ]
    },
    "ma-zins": {
      1: [
        ["rechnen", "Jahreszins.", [["2500 Fr. zu 0,8 %", 20, "Fr."], ["50 000 Fr. zu 1,25 %", 625, "Fr."], ["640 Fr. zu 0,25 %", 1.6, "Fr.", 0.001], ["Kontostand 1500 Fr., Zins 1 %. Kontostand nach einem Jahr?", 1515, "Fr."], ["Tara hat 3000 Fr. auf dem Jugendsparkonto (1,5 %). Wie viel Zins bekommt sie in einem Jahr?", 45, "Fr."]]],
        ["wahl", "Wähle richtig.", [["Bank A zahlt 0,5 %, Bank B zahlt 0,75 %. Wo bekommst du für 2000 Fr. mehr Zins?", ["Bank A", "Bank B", "gleich viel"], 1, "A: 10 Fr., B: 15 Fr."], ["Was passiert mit dem Zins, wenn das Kapital doppelt so gross ist?", ["Er bleibt gleich", "Er wird doppelt so gross", "Er wird halb so gross"], 1]]]
      ],
      2: [
        ["rechnen", "Marchzins (360 Tage, 30 Tage pro Monat).", [["9000 Fr. zu 1 % während 2 Monaten", 15, "Fr."], ["4800 Fr. zu 1,5 % während 45 Tagen", 9, "Fr."], ["25 000 Fr. zu 0,8 % vom 1. Januar bis 30. April (120 Tage), auf Rappen", 66.67, "Fr.", 0.01]]],
        ["rechnen", "Gesuchte Grösse beim Marchzins.", [["6000 Fr. zu 2 % bringen 20 Fr. Zins. Wie viele Tage?", 60, "Tage"], ["Bei 1,5 % gibt es in 90 Tagen 12 Fr. Zins. Kapital?", 3200, "Fr."], ["7200 Fr. bringen in 60 Tagen 12 Fr. Zins. Zinssatz?", 1, "%"], ["Am 1. Juli werden 3000 Fr. zu 1 % eingezahlt. Wie gross ist der Kontostand am 31. Dezember mit Zins?", 3015, "Fr.", 0, "180 Tage → 15 Fr."]]],
        ["reihe", "Ordne die Rechenschritte für den Marchzins.", [["5400 Fr. zu 2 % während 100 Tagen", ["Jahreszins: 5400 · 2 : 100 = 108 Fr.", "Zins pro Tag: 108 : 360 = 0.30 Fr.", "Marchzins: 0.30 · 100 = 30 Fr."]]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Zinstage vom 15. März bis 20. Juni (Bankenregel)", 95, "Tage", 0, "15 + 30 + 30 + 20"], ["5000 Fr. werden 3 Jahre zu 1,5 % angelegt (Zinseszins). Kontostand auf Rappen?", 5228.39, "Fr.", 0.02], ["Faustregel: Bei 2 % Zins verdoppelt sich ein Kapital nach etwa 72 : 2 Jahren. Wie viele?", 36, "Jahre"], ["Ein Kapital bringt in 8 Monaten zu 1,5 % genau 40 Fr. Zins. Wie gross ist das Kapital?", 4000, "Fr."]]],
        ["mehrfach", "Was erhöht den Zins, den du bekommst?", [["Kreuze alle an.", ["ein höherer Zinssatz", "ein grösseres Kapital", "eine längere Anlagedauer", "eine höhere Kontoführungsgebühr"], [0, 1, 2]]]]
      ]
    },
    "ma-kredit": {
      1: [
        ["rechnen", "Rechne.", [["Ein E-Bike kostet 2400 Fr. und wird in 24 Monatsraten ohne Zins bezahlt. Rate?", 100, "Fr."], ["Ein Fernseher kostet 900 Fr. oder 10 Raten à 99 Fr. Wie viel mehr kostet die Ratenzahlung?", 90, "Fr."], ["Leasing: 36 Raten à 250 Fr. Wie viel bezahlt man insgesamt?", 9000, "Fr."]]],
        ["mehrfach", "Was gehört zu den Risiken von Krediten und Leasing?", [["Kreuze alle an.", ["Man bezahlt mehr als beim Barkauf.", "Man kann sich verschulden.", "Man muss nie etwas zurückzahlen.", "Die Raten müssen auch bezahlt werden, wenn man den Job verliert."], [0, 1, 3]]]]
      ],
      2: [
        ["rechnen", "Rechne.", [["Ein Kredit von 6000 Fr. kostet 9 % Jahreszins. Zins für 18 Monate (vereinfacht: Zins immer auf 6000 Fr.)?", 810, "Fr."], ["Gesamtbetrag zum Zurückzahlen?", 6810, "Fr."], ["Monatsrate bei 18 Monaten (auf Rappen)", 378.33, "Fr.", 0.01]]],
        ["zuordnen", "Wer gehört zu welchem Begriff?", [["bezahlt beim Leasing jeden Monat", 0], ["besitzt das Auto beim Leasing", 1], ["leiht beim Konsumkredit das Geld aus", 2]], ["Leasingnehmer/in", "Leasinggeber (Firma)", "Kreditgeber (Bank)"]]
      ],
      3: [
        ["rechnen", "Leasing oder Kredit? Ein Auto kostet bar 24 000 Fr.", [["Leasing: 5000 Fr. Anzahlung, 48 Raten à 349 Fr., danach Rückgabe. Wie viel bezahlt man insgesamt?", 21752, "Fr."], ["Kredit: 24 000 Fr. zu 8,5 % während 4 Jahren (vereinfacht: Zins jedes Jahr auf 24 000 Fr.). Wie viel Zins?", 8160, "Fr."], ["Monatsrate beim Kredit (4 Jahre, mit Zins)", 670, "Fr.", 0.01, "(24 000 + 8160) : 48"]]],
        ["offen", "Vergleiche.", [["Beim Leasing bezahlt man weniger, aber das Auto gehört einem am Schluss nicht. Beim Kredit gehört es einem. Was würdest du einer Lernenden raten, die ein Auto für den Arbeitsweg braucht? Begründe.", "", "", "Z. B. ein günstiges Occasionsauto bar kaufen oder sparen; Leasing und Kredit belasten das Budget über Jahre; dazu kommen Versicherung, Service und Steuern."]]]
      ]
    },
    "ma-mobil": {
      1: [
        ["rechnen", "Rechne.", [["Ein Zug fährt 180 km in 1,5 h. Geschwindigkeit?", 120, "km/h"], ["Zu Fuss mit 5 km/h: Wie lange für 2,5 km? (in Minuten)", 30, "min"], ["Ein Velo fährt 18 km/h. Wie weit kommt es in 40 Minuten?", 12, "km"], ["Ein Flugzeug fliegt 2 h 30 min mit 800 km/h. Strecke?", 2000, "km"]]],
        ["zuordnen", "Welche Geschwindigkeit passt?", [["Fussgänger", 0], ["Velo in der Stadt", 1], ["Auto auf der Autobahn", 2], ["Schnellzug", 3]], ["5 km/h", "18 km/h", "120 km/h", "200 km/h"]]
      ],
      2: [
        ["rechnen", "Rechne.", [["Ein Sprinter läuft 100 m in 10 s. Geschwindigkeit in km/h?", 36, "km/h"], ["Anhalteweg bei 80 km/h (Faustregeln: Reaktionsweg + Bremsweg)", 88, "m", 0, "24 m + 64 m"], ["Ein Auto fährt hin 60 km mit 60 km/h und zurück 60 km mit 90 km/h. Durchschnittsgeschwindigkeit?", 72, "km/h", 0, "120 km : (1 h + 40 min)"]]],
        ["wahl", "Wähle richtig.", [["Hin mit 60 km/h, zurück mit 90 km/h: Ist der Durchschnitt 75 km/h?", ["Ja", "Nein, weniger", "Nein, mehr"], 1, "Man fährt länger langsam."]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Ein Velo (20 km/h) startet um 8:00. Ein Auto (80 km/h) fährt um 8:30 am gleichen Ort ab. Nach wie vielen Minuten (ab 8:30) holt das Auto das Velo ein?", 10, "min", 0, "Vorsprung 10 km, Unterschied 60 km/h"], ["Ein Lieferwagen fährt 135 km mit einem Verbrauch von 9,2 l/100 km. Wie viele Liter braucht er? (2 Dezimalen)", 12.42, "l", 0.01], ["Ein Zug ist 400 m lang und fährt mit 72 km/h durch einen 1,6 km langen Tunnel. Wie viele Sekunden dauert es, bis er ganz durch ist?", 100, "s", 0, "2000 m : 20 m/s"]]]
      ]
    },
    "ma-kombi": {
      1: [
        ["rechnen", "Wie viele Möglichkeiten?", [["Glace: 5 Sorten, Becher oder Cornet", 10], ["Zweimal eine Münze werfen (KK, KZ, ZK, ZZ)", 4], ["Drei verschiedene Bücher nebeneinander ins Regal stellen", 6]]],
        ["rechnen", "Wahrscheinlichkeit in Prozent.", [["Glücksrad mit 10 gleichen Feldern, 3 davon sind rot. P(rot)", 30, "%"], ["Würfel: P(Zahl grösser als 4)", 33.3, "%", 0.05], ["Kartenspiel mit 36 Karten, davon 9 Herz. P(Herz)", 25, "%"]]]
      ],
      2: [
        ["rechnen", "Rechne.", [["In einer Gruppe mit 8 Personen spielt jede gegen jede einmal. Wie viele Spiele?", 28], ["Ein Passwort hat 2 Buchstaben (26) und danach 2 Ziffern. Wie viele Passwörter gibt es?", 67600], ["Zwei Würfel: P(Summe 12) in % (2 Dezimalen)", 2.78, "%", 0.01], ["Zwei Würfel: P(Summe grösser als 9) in % (2 Dezimalen)", 16.67, "%", 0.01, "6 von 36: 4+6, 5+5, 6+4, 5+6, 6+5, 6+6"]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["In einer Klasse sind 12 Mädchen und 10 Knaben. Es werden zufällig 2 Personen gezogen. P(beide Mädchen) in % (1 Dezimale)", 28.6, "%", 0.05, "12/22 · 11/21"], ["Wie viele Möglichkeiten gibt es, aus 10 Personen ein Team aus 3 zu bilden?", 120, "", 0, "10 · 9 · 8 : 6"], ["Eine Prüfung hat 4 Ja/Nein-Fragen. Wie gross ist die Chance, durch Raten alle richtig zu haben? (in %, 2 Dezimalen)", 6.25, "%", 0.01]]]
      ]
    },
    "ma-daten": {
      1: [
        ["rechnen", "Umfrage zur Bildschirmzeit (Stunden pro Tag): 2, 3, 3, 4, 5, 3, 1", [["Mittelwert", 3], ["Median", 3], ["Modus (häufigster Wert)", 3], ["Spannweite", 4]]],
        ["rechnen", "Kreisdiagramm: In einer Klasse kommen 50 % mit dem Velo, 25 % zu Fuss, 25 % mit dem Bus.", [["Wie viele Grad hat der Sektor «Velo»?", 180, "°"], ["Wie viele Grad hat der Sektor «zu Fuss»?", 90, "°"]]]
      ],
      2: [
        ["rechnen", "Lehrlingslöhne im 1. Lehrjahr in Fr.: 650, 720, 800, 750, 900, 680", [["Mittelwert", 750, "Fr."], ["Median", 735, "Fr."], ["Spannweite", 250, "Fr."]]],
        ["mehrfach", "Welche Fragen sind für eine Umfrage gut geeignet?", [["Kreuze alle an.", ["Wie viele Stunden schläfst du pro Nacht?", "Findest du nicht auch, dass Handys verboten werden sollten?", "Welches Verkehrsmittel benutzt du für den Schulweg?", "Du gamest doch sicher zu viel, oder?"], [0, 2]]]]
      ],
      3: [
        ["rechnen", "Rechne.", [["Der Mittelwert von 5 Zahlen ist 12. Vier Zahlen sind 8, 10, 15, 11. Wie heisst die fünfte?", 16], ["In einer Umfrage mit 240 Personen sagen 30 %, sie fahren Velo. Wie viele Personen?", 72], ["Eine Grafik zeigt: Der Umsatz stieg von 1,2 Mio. auf 1,5 Mio. Fr. Um wie viel Prozent?", 25, "%"]]],
        ["offen", "Erkläre.", [["Eine Werbung zeigt ein Säulendiagramm, bei dem die y-Achse bei 95 % beginnt statt bei 0 %. Warum ist das irreführend?", "", "", "Kleine Unterschiede sehen riesig aus. Mit einer Achse ab 0 sieht man, dass der Unterschied in Wirklichkeit klein ist."]]]
      ]
    }
  };
  Object.keys(EX).forEach(id => {
    const u = units.find(x => x.id === id);
    [1, 2, 3].forEach(n => {
      const L = n === 1 ? u : window.STUFEN[id][n];
      L.aufg = L.aufg.concat((EX[id][n] || []).map(blk));
      L.dauer = L.aufg.reduce((s, b) => s + b.i.length, 0) + " Aufgaben";
    });
  });

  window.MATHE_UNITS = units;
})();
