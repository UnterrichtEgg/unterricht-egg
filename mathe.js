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
      if (t === "reihe") return { s: x[0], o: x[1], x: x[2], m: x[1].map((_, j) => (j * 3 + 1) % x[1].length) };
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

  window.MATHE_UNITS = units;
})();
