/* Sprache im Fokus · Deutsch: Rechtschreibung und Grammatik (3 Niveaus) */
(function () {
  const units = [];
  const prep = aufg => aufg.map(b => ({ t: b.t, a: b.a, o: b.o, i: b.i.map(x => {
    if (b.t === "wahl") return { s: x[0], o: x[1], k: x[2], x: x[3] };
    if (b.t === "luecke") return { s: x[0], k: [].concat(x[1]), x: x[2] };
    if (b.t === "fehler") { const t = x[0].split(/\s+/); return { s: x[0].replace(/\*/g, ""), f: t.findIndex(w => w.includes("*")), r: x[1], x: x[2] }; }
    if (b.t === "zuordnen") return { s: x[0], k: x[1], x: x[2] };
    if (b.t === "umformen") return { s: x[0], h: x[1], k: [].concat(x[2]), x: x[3] };
    if (b.t === "paare") return { s: x[0], k: x[1], x: x[2] };
    if (b.t === "mehrfach") return { s: x[0], o: x[1], k: x[2], x: x[3] };
    if (b.t === "markieren") { const seg = []; let last = 0, m; const re = /\[([+-])([^\]]+)\]/g;
      while ((m = re.exec(x[1]))) { if (m.index > last) seg.push({ t: x[1].slice(last, m.index), m: null }); seg.push({ t: m[2], m: m[1] === "+" }); last = re.lastIndex; }
      if (last < x[1].length) seg.push({ t: x[1].slice(last), m: null });
      return { titel: x[0], seg, k: seg.map((g, j) => g.m ? j : -1).filter(j => j >= 0), x: x[2] }; }
    if (b.t === "komma") { const t = x[0].split(/\s+/), k = []; t.forEach((w, j) => { if (/,$/.test(w)) k.push(j); }); return { s: t.map(w => w.replace(/,$/, "")).join(" "), k, x: x[1] }; }
  }) }));
  function U(id, r, titel, kurz, L) {
    const lv = n => { const aufg = prep(L[n].aufg); return { regel: L[n].regel, bsp: L[n].bsp || [], aufg, mc: [], rf: [], offen: [], dauer: aufg.reduce((s, b) => s + b.i.length, 0) + " Aufgaben" }; };
    units.push(Object.assign({ id, r, typ: "sprache", titel, kurz, kanal: r === "rrecht" ? "Rechtschreibung" : "Grammatik" }, lv(1)));
    window.STUFEN = window.STUFEN || {};
    window.STUFEN[id] = { 2: lv(2), 3: lv(3) };
  }
  const GK = ["Gross", "klein"];

  // ======================================================= RECHTSCHREIBUNG
  U("sp-gross", "rrecht", "Gross- und Kleinschreibung", "Nomen, Satzanfänge und Namen schreibt man gross. Aber wann wird aus einem Verb oder Adjektiv ein Nomen?", {
    1: {
      regel: "Nomen schreibt man gross. Nomen sind Lebewesen, Dinge, Gefühle und Ideen: der Hund, die Schule, das Glück. Vor einem Nomen kann ein Artikel stehen (der, die, das, ein, eine).\n\nGross schreibt man auch das erste Wort im Satz und Namen. Verben, Adjektive und die meisten anderen Wörter schreibt man klein.",
      bsp: [["Nomen", "der Ball, die Freude, das Training"], ["Satzanfang", "Heute regnet es."], ["Namen", "Wetzikon, Zürich, Lionel Messi"], ["klein", "laufen, schnell, heute, mit"]],
      aufg: [
        { t: "wahl", a: "Gross oder klein? Wähle die richtige Schreibung.", i: [
          ["Am Mittwoch haben wir {}.", ["Training", "training"], 0],
          ["Wir {} jeden Tag.", ["Trainieren", "trainieren"], 1],
          ["Das Wetter ist heute {}.", ["Schön", "schön"], 1],
          ["Ich habe keine {} vor der Prüfung.", ["Angst", "angst"], 0],
          ["Meine Schwester wohnt in {}.", ["Zürich", "zürich"], 0],
          ["{} gehen wir ins Kino.", ["Morgen", "morgen"], 0, "Am Satzanfang schreibt man gross."],
          ["Wir gehen {} ins Kino.", ["Morgen", "morgen"], 1, "«morgen» als Zeitangabe schreibt man klein."],
          ["Mein Bruder ist sehr {}.", ["Gross", "gross"], 1]
        ] },
        { t: "fehler", i: [
          ["Der *hund* bellt laut.", "Hund"],
          ["Ich *Lese* gern Comics.", "lese"],
          ["Die *schule* beginnt um acht Uhr.", "Schule"],
          ["Am Wochenende besuchen wir meine *oma*.", "Oma"],
          ["Sie hat eine neue *jacke* gekauft.", "Jacke"]
        ] }
      ]
    },
    2: {
      regel: "Auch Verben und Adjektive können zu Nomen werden. Dann schreibt man sie gross. Achte auf Signalwörter davor: einen Artikel (das, beim = bei dem, zum = zu dem) oder Wörter wie etwas, nichts, viel, wenig, alles.\n\nTageszeiten nach heute, gestern, morgen schreibt man gross: heute Abend. Wörter mit -s wie morgens, abends, montags schreibt man klein.",
      bsp: [["Verb → Nomen", "lesen → beim Lesen, das Schwimmen"], ["Adjektiv → Nomen", "neu → etwas Neues, nichts Gutes"], ["Tageszeit", "heute Abend, am Morgen – aber: abends, montags"]],
      aufg: [
        { t: "wahl", a: "Gross oder klein? Wähle die richtige Schreibung.", i: [
          ["Beim {} vergesse ich die Zeit.", ["Lesen", "lesen"], 0],
          ["Ich möchte heute Abend {}.", ["Lesen", "lesen"], 1],
          ["Hast du etwas {} erlebt?", ["Spannendes", "spannendes"], 0],
          ["Das Buch ist sehr {}.", ["Spannend", "spannend"], 1],
          ["Wir treffen uns heute {}.", ["Abend", "abend"], 0, "Nach heute, gestern, morgen schreibt man die Tageszeit gross."],
          ["Ich trainiere immer {}.", ["Abends", "abends"], 1, "Wörter mit -s wie abends oder morgens schreibt man klein."],
          ["Zum {} braucht man gute Schuhe.", ["Wandern", "wandern"], 0],
          ["Ich wünsche dir alles {}.", ["Gute", "gute"], 0]
        ] },
        { t: "fehler", i: [
          ["Das *lernen* für die Prüfung hat sich gelohnt.", "Lernen"],
          ["Er hat nichts *neues* erzählt.", "Neues"],
          ["Wir haben uns am *morgen* getroffen.", "Morgen"],
          ["Ich gehe *Montags* ins Training.", "montags"],
          ["Beim *essen* sprechen wir über den Tag.", "Essen"]
        ] },
        { t: "luecke", a: "Schreibe das Wort in der Klammer richtig: gross oder klein?", i: [
          ["Das {} macht mir Spass. (schwimmen)", "Schwimmen"],
          ["Wir {} am Samstag im See. (schwimmen)", "schwimmen"],
          ["Viel {} bei der Prüfung! (glück)", "Glück"],
          ["Ich habe etwas {} gekauft. (schön)", "Schönes", "etwas + Adjektiv als Nomen: etwas Schönes"]
        ] }
      ]
    },
    3: {
      regel: "Schwierige Fälle:\n\n1. Nominalisierungen erkennst du auch, wenn ein Adjektiv dazwischensteht: beim lauten Singen. 2. Die Höflichkeitsform schreibt man gross: Sie, Ihnen, Ihr. 3. Feste Wendungen schreibt man gross: im Allgemeinen, im Voraus, als Erstes. 4. «am» + Superlativ schreibt man klein: am schnellsten, am besten. 5. Ableitungen von Ortsnamen auf -er schreibt man gross (die Zürcher Altstadt), Adjektive auf -isch klein (schweizerisch).",
      bsp: [["Höflichkeitsform", "Können Sie mir helfen? Ich danke Ihnen."], ["feste Wendung", "im Allgemeinen, im Voraus"], ["Superlativ", "am schnellsten – aber: das Schönste"], ["Ortsnamen", "Zürcher Altstadt – schweizerischer Brauch"]],
      aufg: [
        { t: "wahl", a: "Gross oder klein? Wähle die richtige Schreibung.", i: [
          ["Frau Keller, können {} mir bitte helfen?", ["Sie", "sie"], 0, "Höflichkeitsform: gross."],
          ["Ich danke {} für Ihre Antwort.", ["Ihnen", "ihnen"], 0],
          ["Wer läuft am {}?", ["Schnellsten", "schnellsten"], 1, "«am» + Superlativ: klein."],
          ["Das ist das {}, was ich je gehört habe.", ["Schönste", "schönste"], 0, "«das Schönste» ist ein Nomen."],
          ["Wir besuchten die {} Altstadt.", ["Zürcher", "zürcher"], 0, "Ableitungen von Ortsnamen auf -er: gross."],
          ["Das ist ein {} Brauch.", ["Schweizerischer", "schweizerischer"], 1, "Adjektive auf -isch: klein."],
          ["Bitte bezahlen Sie im {}.", ["Voraus", "voraus"], 0],
          ["Beim lauten {} störst du die anderen.", ["Telefonieren", "telefonieren"], 0]
        ] },
        { t: "fehler", i: [
          ["Wir haben im *allgemeinen* wenig Zeit.", "Allgemeinen"],
          ["Er kam als *letzter* ins Ziel.", "Letzter"],
          ["Am *Besten* fragst du die Lehrerin.", "besten"],
          ["Das *blau* des Meeres ist wunderschön.", "Blau"],
          ["Sehr geehrte Frau Meier, ich danke *ihnen* für den Brief.", "Ihnen"]
        ] },
        { t: "luecke", a: "Bilde aus dem Wort in der Klammer ein Nomen und setze es ein.", i: [
          ["Wir spielen Fussball. Das {} macht uns Spass. (spielen)", "Spielen"],
          ["Sie hilft gern. Ihre {} ist bekannt. (hilfsbereit)", "Hilfsbereitschaft"],
          ["Er ist krank. Wegen seiner {} fehlt er. (krank)", "Krankheit"],
          ["Wir sind frei. Die {} ist uns wichtig. (frei)", "Freiheit"],
          ["Ich bin müde. Die {} kommt vom Training. (müde)", "Müdigkeit"]
        ] }
      ]
    }
  });

  const DD = ["das", "dass"];
  U("sp-dass", "rrecht", "das oder dass?", "«das» oder «dass»? Mit der Ersatzprobe findest du es heraus.", {
    1: {
      regel: "«das» ist ein Artikel (das Auto) oder ein Pronomen (Das stimmt. / Das Velo, das dort steht). Du kannst es durch «dieses», «jenes» oder «welches» ersetzen.\n\n«dass» ist eine Konjunktion. Sie leitet einen Nebensatz ein, oft nach Verben wie sagen, wissen, glauben, hoffen: Ich hoffe, dass du kommst. Hier kannst du nicht «welches» einsetzen.",
      bsp: [["das = Artikel", "das Velo, das Handy"], ["das = welches", "Das Velo, das (welches) dort steht"], ["dass = Konjunktion", "Ich weiss, dass du recht hast."]],
      aufg: [
        { t: "wahl", a: "«das» oder «dass»?", i: [
          ["{} Handy liegt auf dem Tisch.", DD, 0],
          ["Ich hoffe, {} du bald gesund wirst.", DD, 1],
          ["{} ist mein Lieblingslied.", ["Das", "Dass"], 0],
          ["Er sagt, {} er keine Zeit hat.", DD, 1],
          ["Kennst du {} Mädchen dort?", DD, 0],
          ["Wir wissen, {} die Prüfung schwer ist.", DD, 1],
          ["Das Velo, {} vor der Tür steht, gehört mir.", DD, 0, "Ersatzprobe: Das Velo, welches vor der Tür steht."],
          ["Es ist wichtig, {} du pünktlich bist.", DD, 1],
          ["{} Training beginnt um 18 Uhr.", ["Das", "Dass"], 0],
          ["Ich glaube, {} es morgen regnet.", DD, 1]
        ] }
      ]
    },
    2: {
      regel: "Ersatzprobe: Kannst du «dieses» oder «welches» einsetzen? Dann schreibst du «das». Geht das nicht, schreibst du «dass».\n\nAchtung: Nicht nach jedem Komma steht «dass». Auch Relativsätze beginnen nach einem Komma mit «das»: Das Buch, das ich lese, ist spannend. Ein Satz kann auch mit «Dass» beginnen: Dass du kommst, freut mich.",
      bsp: [["das (welches)", "Das Haus, das wir gekauft haben, ist alt."], ["dass", "Sie hat erzählt, dass sie umzieht."], ["Dass am Anfang", "Dass du kommst, freut mich."]],
      aufg: [
        { t: "wahl", a: "«das» oder «dass»?", i: [
          ["Das Buch, {} ich lese, ist spannend.", DD, 0],
          ["Ich glaube nicht, {} das stimmt.", DD, 1],
          ["Sie hat mir erzählt, {} sie umzieht.", DD, 1],
          ["Das Haus, {} wir gekauft haben, ist alt.", DD, 0],
          ["{} du kommst, freut mich sehr.", ["Das", "Dass"], 1, "«Dass du kommst» ist ein Nebensatz am Satzanfang."],
          ["Hast du {} gehört?", DD, 0, "Ersatzprobe: Hast du dieses gehört?"],
          ["Es ist schade, {} es regnet.", DD, 1],
          ["Das Spiel, {} gestern stattfand, war spannend.", DD, 0]
        ] },
        { t: "fehler", i: [
          ["Ich hoffe, *das* du kommst.", "dass"],
          ["Das Auto, *dass* dort parkiert ist, ist neu.", "das"],
          ["Er weiss, *das* er gewinnen kann.", "dass"],
          ["*Dass* Wetter ist heute schön.", "Das"],
          ["Ich finde es gut, *das* du hilfst.", "dass"]
        ] }
      ]
    },
    3: {
      regel: "Feste Verbindungen mit «dass»: sodass (oder: so dass), ohne dass, anstatt dass. In einem Satz können «dass» und «das» direkt hintereinander vorkommen: Ich glaube, dass das stimmt.\n\nAchtung: Nach «Ich hoffe,» kann auch ein Hauptsatz folgen: Ich hoffe, das Wetter wird besser. Hier ist «das» ein Artikel.",
      bsp: [["sodass", "Es regnete, sodass das Spiel ausfiel."], ["ohne dass", "Sie ging, ohne dass jemand es merkte."], ["dass das", "Ich glaube, dass das stimmt."]],
      aufg: [
        { t: "luecke", a: "Schreibe «das», «dass» oder «sodass» in die Lücke. Achte auf Gross- und Kleinschreibung.", i: [
          ["Ich glaube, {} das stimmt.", "dass"],
          ["Er ging, ohne {} er sich verabschiedete.", "dass"],
          ["Es regnete stark, {} das Spiel abgesagt wurde.", ["sodass", "so dass"], "sodass = mit der Folge, dass"],
          ["{} du das geschafft hast, ist super.", "Dass"],
          ["Das Problem, {} wir lösen müssen, ist gross.", "das"],
          ["Anstatt {} er lernte, spielte er Games.", "dass"],
          ["Ich hoffe, {} Wetter wird morgen besser.", "das", "Hier ist «das» ein Artikel: das Wetter."],
          ["Weisst du, {} das Training ausfällt?", "dass"]
        ] },
        { t: "fehler", i: [
          ["Sie meinte, *das* das Konzert ausverkauft sei.", "dass"],
          ["Das Lied, *dass* im Radio lief, gefällt mir.", "das"],
          ["Ohne *das* jemand es merkte, ging sie.", "dass"],
          ["Ich weiss, dass *dass* nicht einfach ist.", "das"]
        ] },
        { t: "umformen", a: "Verbinde die zwei Sätze mit «dass».", i: [
          ["Ich hoffe es. Du kommst morgen.", "Beginne mit: Ich hoffe, dass …", "Ich hoffe, dass du morgen kommst."],
          ["Er sagt es. Er hat keine Zeit.", "Beginne mit: Er sagt, dass …", "Er sagt, dass er keine Zeit hat."],
          ["Wir wissen es. Die Prüfung ist schwer.", "Beginne mit: Wir wissen, dass …", "Wir wissen, dass die Prüfung schwer ist."]
        ] }
      ]
    }
  });

  U("sp-sss", "rrecht", "s oder ss? ck und tz", "Kurzer oder langer Vokal? Daran erkennst du, ob ein Doppelkonsonant folgt. In der Schweiz schreibt man kein ß.", {
    1: {
      regel: "Nach einem kurzen Vokal (a, e, i, o, u) folgt oft ein doppelter Konsonant: Ball, Bett, Mutter. Statt kk schreibt man ck (Glück), statt zz schreibt man tz (Katze).\n\nIn der Schweiz schreibt man nie ß, sondern immer ss: Strasse, gross, Fussball.",
      bsp: [["kurzer Vokal", "Ball, Bett, nass"], ["ck statt kk", "Glück, packen, Rücken"], ["tz statt zz", "Katze, sitzen, Platz"], ["Schweiz: ss statt ß", "Strasse, gross, Fuss"]],
      aufg: [
        { t: "wahl", a: "Welche Schreibung ist richtig?", i: [
          ["Die {} schläft auf dem Sofa.", ["Katze", "Kaze"], 0],
          ["Ich wünsche dir viel {}.", ["Glük", "Glück"], 1],
          ["Wir spielen auf dem {}.", ["Plaz", "Platz"], 1],
          ["Die {} ist nass.", ["Strasse", "Strase"], 0],
          ["Mein Bruder ist sehr {}.", ["gros", "gross"], 1],
          ["Ich {} meinen Koffer.", ["packe", "pake"], 0],
          ["Am Abend gehe ich ins {}.", ["Bet", "Bett"], 1],
          ["Wir {} im Kreis.", ["sitzen", "sizen"], 0],
          ["Das Wasser ist {}.", ["nas", "nass"], 1]
        ] },
        { t: "fehler", i: [
          ["Der *Bal* rollt ins Tor.", "Ball"],
          ["Mein *Rüken* tut weh.", "Rücken"],
          ["Wir treffen uns an der *Strase*.", "Strasse"],
          ["Er hat eine kleine *Kaze*.", "Katze"],
          ["Ich trinke einen *Kafee*.", "Kaffee"]
        ] }
      ]
    },
    2: {
      regel: "s oder ss? Nach einem kurzen Vokal schreibt man meistens ss: Wasser, Klasse, essen, muss. Nach einem langen Vokal schreibt man meistens s: Hase, Rose, lesen, Reise. Wo man in Deutschland ß schreibt, schreibt man in der Schweiz ss: Füsse, Grüsse.\n\nNach l, n, r und nach einem langen Vokal steht kein ck und kein tz: Bank, Wolke, Herz, Schal.",
      bsp: [["ss nach kurzem Vokal", "Wasser, Klasse, muss"], ["s nach langem Vokal", "Hase, Rose, lesen"], ["kein ck, kein tz", "Bank, Wolke, Herz, Holz"]],
      aufg: [
        { t: "luecke", a: "Setze «s» oder «ss» ein.", i: [
          ["Das Wa{}er ist kalt.", "ss"],
          ["Ich le{}e gern Comics.", "s"],
          ["In unserer Kla{}e sind 20 Kinder.", "ss"],
          ["Die Ro{}e duftet.", "s"],
          ["Ich mu{} jetzt gehen.", "ss"],
          ["Wir machen eine Rei{}e nach Italien.", "s"],
          ["Meine Fü{}e tun weh.", "ss", "In der Schweiz: Füsse (in Deutschland: Füße)."],
          ["Das Ergebni{} ist gut.", "s"],
          ["Die Ergebni{}e sind gut.", "ss", "Ergebnis → Ergebnisse"],
          ["Viele Grü{}e aus Wetzikon!", "ss"]
        ] },
        { t: "wahl", a: "Welche Schreibung ist richtig?", i: [
          ["Ich sitze auf der {}.", ["Bank", "Banck"], 0],
          ["Am Himmel ist eine {}.", ["Wolke", "Wolcke"], 0],
          ["Mein {} klopft schnell.", ["Herz", "Hertz"], 0],
          ["Er {} mich an.", ["blickt", "blikt"], 0],
          ["Das ist ein grosser {}.", ["Schatz", "Schaz"], 0],
          ["Die {} liegt auf dem Bett.", ["Decke", "Deke"], 0],
          ["Der Tisch ist aus {}.", ["Holz", "Holtz"], 0]
        ] }
      ]
    },
    3: {
      regel: "Schwierige Fälle:\n\n1. Wörter auf -nis: Ergebnis, Zeugnis – in der Mehrzahl ss: Ergebnisse, Zeugnisse. 2. Bus – Busse. 3. Fremdwörter: Adresse, Interesse, Prozess, aber: Paket, Fabrik, Musik (ohne ck). 4. Verbformen: fassen – er fasst, giessen – er giesst, verletzen – verletzt.",
      bsp: [["-nis", "das Zeugnis – die Zeugnisse"], ["Fremdwörter mit ss", "Adresse, Interesse, Prozess"], ["Fremdwörter mit k", "Paket, Fabrik, Musik"]],
      aufg: [
        { t: "fehler", i: [
          ["Bitte schreib mir deine *Adrese*.", "Adresse"],
          ["Wir warten auf den *Buss*.", "Bus"],
          ["Ich habe ein gutes *Zeugniss*.", "Zeugnis"],
          ["Das *Packet* kam gestern an.", "Paket"],
          ["Sie hört gern *Musick*.", "Musik"],
          ["Er hat grosses *Intresse* an Autos.", "Interesse"],
          ["Wir besichtigen eine *Fabrick*.", "Fabrik"]
        ] },
        { t: "luecke", a: "Setze ein: s, ss, k, ck, z oder tz.", i: [
          ["Der Proze{} dauert lange.", "ss"],
          ["Ich trinke Ka{}ao.", "k"],
          ["Wir be{}ahlen an der Kasse.", "z"],
          ["Der Bä{}er backt Brot.", "ck"],
          ["Die Ka{}e miaut.", "tz"],
          ["Er hat sich am Knie verle{}t.", "tz"],
          ["Die Kenntni{}e sind wichtig.", "ss"],
          ["In der Pau{}e essen wir etwas.", "s"],
          ["Ich gie{}e die Blumen.", "ss"],
          ["Er fa{}t den Ball.", "ss"]
        ] }
      ]
    }
  });

  U("sp-dehnung", "rrecht", "Lange Vokale: ie, h und Doppelvokal", "Viel, Uhr, Meer: Wie schreibt man lange Vokale? Und welche Wörter klingen gleich, werden aber anders geschrieben?", {
    1: {
      regel: "Ein langes i schreibt man meistens ie: Liebe, spielen, Brief, viel.\n\nNach anderen langen Vokalen steht oft ein Dehnungs-h vor l, m, n oder r: Zahl, Uhr, fahren, nehmen, Lehrer. Einige Wörter haben einen Doppelvokal: Meer, Boot, Haar, Tee.",
      bsp: [["ie", "spielen, Brief, viel"], ["Dehnungs-h", "Zahl, fahren, Uhr, Lehrer"], ["Doppelvokal", "Meer, Boot, Haar, Tee"]],
      aufg: [
        { t: "wahl", a: "Welche Schreibung ist richtig?", i: [
          ["Wir {} Fussball.", ["spielen", "spilen"], 0],
          ["Ich schreibe einen {}.", ["Brif", "Brief"], 1],
          ["Wie viel {} ist es?", ["Ur", "Uhr"], 1],
          ["Wir fahren ans {}.", ["Meer", "Mer"], 0],
          ["Mein {} ist sehr nett.", ["Lerer", "Lehrer"], 1],
          ["Sie hat lange {}.", ["Haare", "Hare"], 0],
          ["Kannst du die {} lesen?", ["Zahl", "Zal"], 0],
          ["Ich {} mit dem Zug.", ["fare", "fahre"], 1],
          ["Ich trinke gern {}.", ["Tee", "Te"], 0]
        ] },
        { t: "fehler", i: [
          ["Ich habe einen *Feler* gemacht.", "Fehler"],
          ["Wir *spilen* draussen.", "spielen"],
          ["Das *Bot* fährt über den See.", "Boot"],
          ["Sie *wont* in Wetzikon.", "wohnt"],
          ["Wir haben *fil* gelernt.", "viel"]
        ] }
      ]
    },
    2: {
      regel: "Die meisten Wörter mit langem Vokal haben kein Dehnungszeichen: Name, Tag, holen, Krone.\n\nAusnahmen beim langen i: Fremdwörter schreibt man nur mit i (Kino, Maschine, Benzin, Tiger). Auch mir, dir, wir schreibt man ohne e. Die Pronomen ihm, ihn, ihr schreibt man mit ih.",
      bsp: [["ohne Dehnungszeichen", "Name, Tag, holen"], ["i in Fremdwörtern", "Kino, Maschine, Benzin"], ["ih", "ihm, ihn, ihr"]],
      aufg: [
        { t: "luecke", a: "Setze «i», «ie» oder «ih» ein.", i: [
          ["Wir gehen ins K{}no.", "i"],
          ["Ich gebe {}m das Buch.", "ih"],
          ["W{}r fahren nach Bern.", "i"],
          ["Der Br{}f ist angekommen.", "ie"],
          ["Hast du {}r geholfen?", "ih"],
          ["Das Benz{}n ist teuer.", "i"],
          ["Wir sp{}len Karten.", "ie"],
          ["Die Masch{}ne ist kaputt.", "i"],
          ["Ich habe {}n gestern gesehen.", "ih"],
          ["Der T{}ger lebt in Asien.", "i"]
        ] },
        { t: "wahl", a: "Mit oder ohne Dehnungs-h?", i: [
          ["Wie ist dein {}?", ["Name", "Nahme"], 0],
          ["Ich {} das Paket bei der Post ab.", ["hole", "hohle"], 0],
          ["Wir {} den Zug um acht.", ["nehmen", "nemen"], 0],
          ["Der König trägt eine {}.", ["Krone", "Krohne"], 0],
          ["Das Wasser ist {}.", ["kühl", "kül"], 0],
          ["Das Kind {} laut.", ["ruft", "ruhft"], 0]
        ] }
      ]
    },
    3: {
      regel: "Manche Wörter klingen gleich, haben aber eine andere Bedeutung und eine andere Schreibung: die Wahl (abstimmen) – der Wal (Tier); wahr (richtig) – war (sein); das Lied (Musik) – das Lid (Auge); malen (Bild) – mahlen (Mühle); der Stil (Art) – der Stiel (Apfel).\n\nBeim Umlaut fällt der Doppelvokal weg: der Saal – die Säle, das Boot – das Bötchen. Verben auf -ieren schreibt man mit ie: telefonieren, reparieren.",
      bsp: [["gleich klingend", "Wahl – Wal, wahr – war, Lied – Lid"], ["Umlaut", "Saal – Säle, Boot – Bötchen"], ["-ieren", "telefonieren, reparieren"]],
      aufg: [
        { t: "wahl", a: "Welches Wort passt?", i: [
          ["Im Herbst ist die {} des Parlaments.", ["Wahl", "Wal"], 0],
          ["Der {} ist das grösste Tier im Meer.", ["Wahl", "Wal"], 1],
          ["Das ist {}: Ich habe es selbst gesehen.", ["war", "wahr"], 1],
          ["Gestern {} ich krank.", ["war", "wahr"], 0],
          ["Sie sang ein schönes {}.", ["Lid", "Lied"], 1],
          ["Das Auge hat ein oberes und ein unteres {}.", ["Lid", "Lied"], 0],
          ["Der Müller {} das Korn.", ["malt", "mahlt"], 1],
          ["Im Zeichnen {} wir ein Bild.", ["malen", "mahlen"], 0],
          ["Der Apfel hängt am {}.", ["Stil", "Stiel"], 1],
          ["Sie hat einen modernen {}.", ["Stil", "Stiel"], 0]
        ] },
        { t: "fehler", i: [
          ["Wir *telefonihren* jeden Abend.", "telefonieren"],
          ["Die *Maschiene* macht Lärm.", "Maschine"],
          ["Er macht eine traurige *Mine*.", "Miene"],
          ["Das ist *warscheinlich* richtig.", "wahrscheinlich"],
          ["Das Konzert findet im grossen *Sahl* statt.", "Saal"],
          ["Die Schule hat zwei grosse *Saale*.", "Säle"]
        ] }
      ]
    }
  });

  U("sp-komma", "rrecht", "Kommas richtig setzen", "Aufzählungen, Nebensätze, Relativsätze: Wo braucht es ein Komma?", {
    1: {
      regel: "Bei Aufzählungen trennt ein Komma die Wörter. Vor «und» und «oder» steht in der Aufzählung kein Komma: Ich kaufe Brot, Käse und Milch.\n\nVor «aber» und «sondern» steht ein Komma: Ich bin müde, aber glücklich.",
      bsp: [["Aufzählung", "Brot, Käse und Milch"], ["kein Komma vor und/oder", "Tee oder Kaffee"], ["Komma vor aber/sondern", "klein, aber schnell"]],
      aufg: [
        { t: "komma", i: [
          ["Ich kaufe Brot, Käse, Milch und Eier."],
          ["Wir spielen Fussball, Basketball oder Volleyball."],
          ["Er ist klein, aber sehr schnell."],
          ["Das ist nicht mein Velo, sondern deins."],
          ["Am Montag, Dienstag und Freitag habe ich Training."],
          ["Sie spricht Deutsch, Albanisch, Englisch und ein wenig Französisch."],
          ["Der Film war lang, aber spannend."]
        ] },
        { t: "wahl", a: "Braucht es an der markierten Stelle ein Komma?", i: [
          ["Ich mag Pizza{} und Pasta.", ["Komma", "kein Komma"], 1],
          ["Ich bin müde{} aber zufrieden.", ["Komma", "kein Komma"], 0],
          ["Wir gehen nicht ins Kino{} sondern ins Schwimmbad.", ["Komma", "kein Komma"], 0],
          ["Möchtest du Tee{} oder Kaffee?", ["Komma", "kein Komma"], 1],
          ["Er kauft Äpfel{} Birnen und Bananen.", ["Komma", "kein Komma"], 0]
        ] }
      ]
    },
    2: {
      regel: "Hauptsatz und Nebensatz trennt man mit einem Komma. Ein Nebensatz beginnt oft mit weil, dass, wenn, obwohl, als, damit, ob, wann – und das Verb steht am Ende.\n\nDer Nebensatz kann vor oder nach dem Hauptsatz stehen: Ich bleibe zu Hause, weil ich krank bin. / Weil ich krank bin, bleibe ich zu Hause.",
      bsp: [["Nebensatz hinten", "Ich bleibe zu Hause, weil ich krank bin."], ["Nebensatz vorne", "Wenn es regnet, spielen wir drinnen."], ["Signalwörter", "weil, dass, wenn, obwohl, als, damit, ob"]],
      aufg: [
        { t: "komma", i: [
          ["Ich bleibe zu Hause, weil ich krank bin."],
          ["Wenn es regnet, spielen wir drinnen."],
          ["Sie hofft, dass sie die Lehrstelle bekommt."],
          ["Obwohl er müde war, ging er ins Training."],
          ["Als ich nach Hause kam, war niemand da."],
          ["Ich weiss nicht, ob er kommt."],
          ["Wir lernen viel, damit wir die Prüfung bestehen."],
          ["Weil das Wetter schön ist, gehen wir an den See."]
        ] },
        { t: "zuordnen", a: "Hauptsatz oder Nebensatz?", o: ["Hauptsatz", "Nebensatz"], i: [
          ["weil ich krank bin", 1],
          ["Ich bleibe zu Hause", 0],
          ["dass er morgen kommt", 1],
          ["wenn die Sonne scheint", 1],
          ["Wir gehen an den See", 0],
          ["obwohl es kalt ist", 1]
        ] }
      ]
    },
    3: {
      regel: "1. Relativsätze (mit der, die, das, welcher …) trennt man mit Kommas ab, auch in der Mitte des Satzes: Der Junge, der dort steht, ist mein Bruder.\n\n2. Gruppen mit «um … zu», «ohne … zu», «statt … zu» trennt man mit Komma ab: Er spart, um ein Töffli zu kaufen.\n\n3. Anreden und Ausrufe trennt man ab: Lara, kommst du? Ja, ich komme.",
      bsp: [["Relativsatz", "Der Junge, der dort steht, ist mein Bruder."], ["um … zu", "Er spart, um ein Töffli zu kaufen."], ["Anrede", "Lara, kommst du?"]],
      aufg: [
        { t: "komma", i: [
          ["Der Junge, der dort steht, ist mein Bruder."],
          ["Das Handy, das ich gekauft habe, ist kaputt."],
          ["Er spart Geld, um ein Töffli zu kaufen."],
          ["Sie ging, ohne sich zu verabschieden."],
          ["Lara, kommst du heute ins Training?"],
          ["Ja, ich habe die Aufgabe gemacht."],
          ["Die Stadt, in der ich wohne, liegt am See."],
          ["Mein Onkel, der in Basel wohnt, besucht uns morgen."],
          ["Wenn du Zeit hast, ruf mich an, damit wir alles besprechen können."]
        ] },
        { t: "zuordnen", a: "Sind die Kommas richtig gesetzt?", o: ["richtig", "falsch"], i: [
          ["Ich hoffe, dass du kommst.", 0],
          ["Ich gehe, nach Hause weil ich müde bin.", 1, "Richtig: Ich gehe nach Hause, weil ich müde bin."],
          ["Er rennt, um den Bus zu erwischen.", 0],
          ["Das Buch das ich lese, ist spannend.", 1, "Richtig: Das Buch, das ich lese, ist spannend."],
          ["Wir essen, und trinken.", 1, "Vor «und» steht hier kein Komma."],
          ["Obwohl es regnet, gehen wir spazieren.", 0]
        ] }
      ]
    }
  });

  U("sp-verwechsel", "rrecht", "Verwechslungswörter", "seit oder seid? wieder oder wider? Gleich klingende Wörter richtig schreiben.", {
    1: {
      regel: "Manche Wörter klingen gleich, werden aber anders geschrieben:\n\n«seit» sagt etwas über die Zeit (seit Montag). «seid» ist eine Form von «sein» (ihr seid). «war» ist eine Form von «sein» (ich war), «wahr» bedeutet richtig. «viel» bedeutet eine grosse Menge, «fiel» kommt von «fallen». «wieder» bedeutet nochmals.",
      bsp: [["seit – seid", "seit einer Stunde – ihr seid nett"], ["war – wahr", "ich war krank – das ist wahr"], ["viel – fiel", "viel Hunger – der Apfel fiel"]],
      aufg: [
        { t: "wahl", a: "Welches Wort passt?", i: [
          ["Ich warte {} einer Stunde.", ["seit", "seid"], 0],
          ["Ihr {} sehr nett.", ["seit", "seid"], 1],
          ["{} wann wohnst du hier?", ["Seit", "Seid"], 0],
          ["{} pünktlich!", ["Seit", "Seid"], 1],
          ["Gestern {} ich im Kino.", ["war", "wahr"], 0],
          ["Ist das {}?", ["war", "wahr"], 1],
          ["Ich komme morgen {}.", ["wieder", "wider"], 0],
          ["Der Apfel {} vom Baum.", ["viel", "fiel"], 1],
          ["Ich habe {} Hunger.", ["viel", "fiel"], 0],
          ["Das ist nicht {}!", ["war", "wahr"], 1]
        ] }
      ]
    },
    2: {
      regel: "Weitere Wortpaare:\n\n«tot» ist ein Adjektiv (der Vogel ist tot), «der Tod» ist ein Nomen. «ent-» ist eine Vorsilbe (entdecken, entscheiden). «end-» kommt von «Ende» (endlich, endgültig). «die Stadt» ist ein Ort, «statt» bedeutet anstelle. «fast» bedeutet beinahe, «fasst» kommt von «fassen». «wider» bedeutet gegen (widersprechen).",
      bsp: [["tot – Tod", "tot sein – der Tod"], ["ent- – end-", "entdecken – endlich"], ["Stadt – statt", "in der Stadt – statt zu lernen"], ["fast – fasst", "fast fertig – er fasst den Ball"]],
      aufg: [
        { t: "wahl", a: "Welches Wort oder welche Silbe passt?", i: [
          ["Der Vogel ist {}.", ["tot", "tod"], 0],
          ["Der {} des Königs kam plötzlich.", ["Tot", "Tod"], 1],
          ["Kolumbus {}deckte Amerika.", ["ent", "end"], 0],
          ["Die Ferien sind {}lich da!", ["ent", "end"], 1],
          ["Wir wohnen in einer grossen {}.", ["Stadt", "Statt"], 0],
          ["{} zu lernen, schaut er fern.", ["Stadt", "Statt"], 1],
          ["Er {} den Ball mit beiden Händen.", ["fast", "fasst"], 1],
          ["Ich bin {} fertig.", ["fast", "fasst"], 0],
          ["Das {}spricht der Regel.", ["wider", "wieder"], 0]
        ] },
        { t: "fehler", i: [
          ["Ihr *seit* heute sehr leise.", "seid"],
          ["Der Hund ist *tod*.", "tot"],
          ["Wir haben uns *wider* getroffen.", "wieder"],
          ["Der Baum *viel* im Sturm um.", "fiel"],
          ["Das Spiel ist *entlich* vorbei.", "endlich"]
        ] }
      ]
    },
    3: {
      regel: "Noch mehr Wortpaare: der Rat (Tipp) – das Rad (Velo); die Seite (Buch) – die Saite (Gitarre); lehren (unterrichten) – leeren (leer machen); der Wirt (Restaurant) – wird (werden).\n\n«tod-» als Verstärkung schreibt man mit d: todmüde, todernst. «wider» (gegen) steckt in Widerstand und widerlich.",
      bsp: [["Rat – Rad", "ein guter Rat – das Rad"], ["Seite – Saite", "Seite 20 – die Gitarrensaite"], ["lehren – leeren", "Mathe lehren – den Eimer leeren"], ["tod- als Verstärkung", "todmüde, todernst"]],
      aufg: [
        { t: "wahl", a: "Welches Wort passt?", i: [
          ["Ich habe einen guten {} bekommen.", ["Rat", "Rad"], 0],
          ["Mein Velo hat am hinteren {} einen Platten.", ["Rat", "Rad"], 1],
          ["Schlagt das Buch auf {} 20 auf.", ["Seite", "Saite"], 0],
          ["Die Gitarre hat sechs {}.", ["Seiten", "Saiten"], 1],
          ["Der Lehrer {} uns Mathematik.", ["lehrt", "leert"], 0],
          ["Sie {} den Abfalleimer.", ["lehrt", "leert"], 1],
          ["Der {} bringt das Essen.", ["Wirt", "wird"], 0],
          ["Es {} morgen kalt.", ["Wirt", "wird"], 1]
        ] },
        { t: "fehler", i: [
          ["*Seit* leise, das Baby schläft!", "Seid"],
          ["Das Essen ist *wiederlich*!", "widerlich"],
          ["Wir *endecken* eine Höhle.", "entdecken"],
          ["Nach dem Training bin ich *totmüde*.", "todmüde"],
          ["Wir haben keinen *Wiederstand* gespürt.", "Widerstand"]
        ] }
      ]
    }
  });

  // ======================================================= GRAMMATIK
  const WA1 = ["Nomen", "Verb", "Adjektiv"], WA2 = ["Nomen", "Verb", "Adjektiv", "Pronomen", "Präposition"], WA3 = ["Nomen", "Verb", "Adjektiv", "Pronomen", "Präposition", "Konjunktion", "Adverb"];
  U("sp-wortarten", "rgramm", "Wortarten", "Nomen, Verb, Adjektiv und mehr: Welche Aufgabe hat ein Wort im Satz?", {
    1: {
      regel: "Nomen bezeichnen Lebewesen, Dinge, Gefühle und Ideen. Man schreibt sie gross, sie haben einen Artikel: der Hund, die Freude.\n\nVerben sagen, was jemand tut oder was geschieht: laufen, schlafen, regnen. Adjektive sagen, wie etwas ist: gross, schnell, rot.",
      bsp: [["Nomen", "der Hund, die Lehrerin, das Glück"], ["Verb", "spielen, lesen, bellt"], ["Adjektiv", "rot, heiss, schwierig"]],
      aufg: [
        { t: "zuordnen", a: "Welche Wortart ist das markierte Wort?", o: WA1, i: [
          ["Der *Hund* bellt.", 0],
          ["Der Hund *bellt*.", 1],
          ["Das Auto ist *rot*.", 2],
          ["Wir *spielen* Fussball.", 1],
          ["Die *Freude* ist gross.", 0],
          ["Der Kaffee ist *heiss*.", 2],
          ["Ich *lese* ein Buch.", 1],
          ["Sie hat ein *schnelles* Velo.", 2],
          ["Die *Lehrerin* erklärt die Aufgabe.", 0],
          ["Er *schläft* lange.", 1],
          ["Das ist eine *schwierige* Frage.", 2],
          ["Wir haben viel *Glück*.", 0]
        ] }
      ]
    },
    2: {
      regel: "Zu Nomen, Verb und Adjektiv kommen zwei weitere Wortarten:\n\nPronomen stehen für ein Nomen oder begleiten es: ich, du, sie, mir, dir, unser, mein. Präpositionen zeigen Beziehungen, zum Beispiel Ort oder Zeit: auf, mit, ohne, nach, in.\n\nAchtung: Ein Verb kann zum Nomen werden (das Lesen).",
      bsp: [["Pronomen", "ich, sie, dir, unser"], ["Präposition", "auf, mit, ohne, nach"], ["Verb als Nomen", "das Lesen, beim Schwimmen"]],
      aufg: [
        { t: "zuordnen", a: "Welche Wortart ist das markierte Wort?", o: WA2, i: [
          ["*Sie* kommt morgen.", 3],
          ["Das Buch liegt *auf* dem Tisch.", 4],
          ["Wir fahren *mit* dem Zug.", 4],
          ["*Ich* habe Hunger.", 3],
          ["Das *Lesen* macht Spass.", 0, "Hier ist «Lesen» ein Nomen (das Lesen)."],
          ["Das Wetter wird *besser*.", 2],
          ["Ich gebe *dir* das Heft.", 3],
          ["Nach der Schule *treffen* wir uns.", 1],
          ["Er geht *ohne* Jacke.", 4],
          ["Die *Zukunft* ist offen.", 0],
          ["*Unser* Lehrer ist krank.", 3],
          ["Das Training war *anstrengend*.", 2]
        ] }
      ]
    },
    3: {
      regel: "Zwei weitere Wortarten:\n\nKonjunktionen verbinden Wörter oder Sätze: und, aber, oder, weil, dass, obwohl, während. Adverbien geben an, wann, wo, wie oder warum etwas geschieht, und verändern sich nie: heute, morgen, dort, gern, sehr.\n\nAchtung: Ein Wort kann je nach Satz eine andere Wortart sein. «während der Pause» = Präposition, «während ich lerne» = Konjunktion. In «Er läuft schnell» bleibt «schnell» ein Adjektiv, weil man es verändern kann (ein schneller Läufer).",
      bsp: [["Konjunktion", "und, aber, weil, dass, obwohl"], ["Adverb", "heute, dort, gern, sehr"], ["gleiches Wort", "während der Pause (Präposition) – während ich lerne (Konjunktion)"]],
      aufg: [
        { t: "zuordnen", a: "Welche Wortart ist das markierte Wort?", o: WA3, i: [
          ["Ich komme *morgen*.", 6],
          ["Er kommt nicht, *weil* er krank ist.", 5],
          ["Wir spielen *dort* Fussball.", 6],
          ["Sie ist müde, *aber* glücklich.", 5],
          ["Das *Schöne* an den Ferien ist die Freiheit.", 0],
          ["Er läuft *schnell*.", 2, "«schnell» kann man verändern (ein schneller Läufer). Darum ist es ein Adjektiv."],
          ["Ich spiele *gern* Gitarre.", 6],
          ["*Während* der Pause essen wir.", 4],
          ["*Während* ich lerne, hört er Musik.", 5],
          ["*Deine* Idee ist gut.", 3],
          ["Sie hat *sehr* gut gespielt.", 6],
          ["Wir *haben* gestern gewonnen.", 1, "«haben» ist hier ein Hilfsverb."],
          ["Ich weiss, *dass* du recht hast.", 5],
          ["Er wartet *seit* einer Stunde.", 4]
        ] }
      ]
    }
  });

  const F4 = ["Nominativ", "Genitiv", "Dativ", "Akkusativ"];
  U("sp-faelle", "rgramm", "Die vier Fälle", "Nominativ, Genitiv, Dativ, Akkusativ: Mit der richtigen Frage findest du den Fall.", {
    1: {
      regel: "Im Deutschen gibt es vier Fälle. Du findest sie mit Fragen:\n\nNominativ: Wer oder was? – Genitiv: Wessen? – Dativ: Wem? – Akkusativ: Wen oder was?\n\nDer Artikel zeigt den Fall: der Hund (Nominativ), des Hundes (Genitiv), dem Hund (Dativ), den Hund (Akkusativ).",
      bsp: [["Nominativ", "Der Hund bellt. (Wer bellt?)"], ["Genitiv", "der Ball des Hundes (Wessen Ball?)"], ["Dativ", "Ich gebe dem Hund Wasser. (Wem?)"], ["Akkusativ", "Ich sehe den Hund. (Wen?)"]],
      aufg: [
        { t: "zuordnen", a: "In welchem Fall steht der markierte Teil?", o: F4, i: [
          ["*Der Lehrer* erklärt die Aufgabe.", 0],
          ["Ich sehe *den Hund*.", 3],
          ["Ich gebe *dem Kind* einen Apfel.", 2],
          ["Das ist das Velo *des Nachbarn*.", 1],
          ["*Meine Schwester* singt gern.", 0],
          ["Wir besuchen *die Grossmutter*.", 3],
          ["Er hilft *seinem Freund*.", 2],
          ["Das Auto *meines Vaters* ist neu.", 1]
        ] },
        { t: "wahl", a: "Wähle den richtigen Artikel.", i: [
          ["{} Ball ist rund.", ["Der", "Den", "Dem"], 0],
          ["Ich sehe {} Mann.", ["der", "den", "dem"], 1],
          ["Ich danke {} Lehrerin.", ["die", "der", "den"], 1],
          ["Wir rufen {} Arzt.", ["der", "den", "dem"], 1],
          ["Gib {} Hund Wasser!", ["der", "den", "dem"], 2],
          ["Ich kenne {} Frau.", ["die", "der", "dem"], 0]
        ] }
      ]
    },
    2: {
      regel: "Auch ein, mein, sein, unser … verändern sich je nach Fall: ein Laptop – einen Laptop – einem Laptop.\n\nManche Verben verlangen immer den Dativ: helfen, danken, gratulieren, gehören, folgen. Im Plural heisst der Artikel im Dativ «den»: Wir danken den Eltern.",
      bsp: [["Akkusativ", "Ich habe einen neuen Laptop."], ["Dativ", "Ich gratuliere meinem Bruder."], ["Dativ Plural", "Er gibt den Kindern Schokolade."]],
      aufg: [
        { t: "luecke", a: "Setze das Wort in der Klammer in der richtigen Form ein.", i: [
          ["Ich habe {} neuen Laptop. (ein)", "einen"],
          ["Wir helfen {} alten Frau. (die)", "der"],
          ["Er schreibt {} Freund eine Nachricht. (sein)", "seinem"],
          ["{} Katze schläft. (unser)", "Unsere"],
          ["Ich gratuliere {} Bruder. (mein)", "meinem"],
          ["Sie sucht {} Schlüssel. (ihr)", "ihren"],
          ["Wir danken {} Eltern. (die)", "den"],
          ["Das ist das Haus {} Lehrers. (unser)", "unseres", "Genitiv: Wessen Haus? – unseres Lehrers"]
        ] },
        { t: "zuordnen", a: "In welchem Fall steht der markierte Teil?", o: F4, i: [
          ["Ich frage *die Lehrerin*.", 3, "fragen + Akkusativ: Wen frage ich?"],
          ["Das gehört *mir*.", 2],
          ["Wir warten auf *den Bus*.", 3],
          ["Trotz *des Regens* spielen wir.", 1],
          ["*Ihr* seid spät.", 0],
          ["Er folgt *dem Weg*.", 2]
        ] }
      ]
    },
    3: {
      regel: "Auch Adjektive verändern sich nach dem Fall: der neue Trainer – den neuen Trainer – dem neuen Trainer – des neuen Trainers.\n\nOhne Artikel zeigt das Adjektiv den Fall: kaltes Wasser, mit grosser Freude.",
      bsp: [["mit Artikel", "einen neuen Rucksack, der roten Jacke"], ["ohne Artikel", "kaltes Wasser, mit grosser Freude"], ["Genitiv", "das Ende des langen Tages"]],
      aufg: [
        { t: "luecke", a: "Ergänze die richtige Endung des Adjektivs.", i: [
          ["Ich kaufe einen neu{} Rucksack.", "en"],
          ["Wir wohnen in einem klein{} Dorf.", "en"],
          ["Das ist der Hund des alt{} Mannes.", "en"],
          ["Sie trägt eine rot{} Jacke.", "e"],
          ["Er hilft der neu{} Schülerin.", "en"],
          ["Mit gross{} Freude öffnete sie das Geschenk.", "er"],
          ["Ich trinke kalt{} Wasser.", "es"],
          ["Wir haben ein spannend{} Spiel gesehen.", "es"],
          ["Sie spricht mit ihrem best{} Freund.", "en"]
        ] },
        { t: "fehler", i: [
          ["Ich helfe *meinen* Bruder.", "meinem"],
          ["Wir gratulieren *den* Trainer.", "dem"],
          ["Das gehört *meinen* Schwester.", "meiner"],
          ["Er fragt *seinem* Vater.", "seinen"],
          ["Ich danke *dich* für die Hilfe.", "dir"],
          ["Sie besucht *ihrem* Onkel.", "ihren"]
        ] }
      ]
    }
  });

  U("sp-praep", "rgramm", "Präpositionen: Dativ oder Akkusativ?", "Mit dem Velo, für die Mutter, auf den Tisch oder auf dem Tisch? Präpositionen bestimmen den Fall.", {
    1: {
      regel: "Nach diesen Präpositionen steht immer der Dativ: aus, bei, mit, nach, seit, von, zu.\n\nNach diesen Präpositionen steht immer der Akkusativ: durch, für, gegen, ohne, um.\n\nKurzformen: zum = zu dem, zur = zu der, beim = bei dem, vom = von dem.",
      bsp: [["mit Dativ", "mit dem Velo, bei meiner Tante"], ["mit Akkusativ", "für die Mutter, durch den Park"], ["Kurzformen", "zum Arzt, zur Schule, beim Bäcker"]],
      aufg: [
        { t: "wahl", a: "Wähle die richtige Form.", i: [
          ["Ich fahre mit {} Velo.", ["das", "dem", "den"], 1],
          ["Das Geschenk ist für {} Mutter.", ["die", "der", "dem"], 0],
          ["Wir gehen durch {} Park.", ["der", "den", "dem"], 1],
          ["Sie kommt aus {} Schweiz.", ["die", "der", "dem"], 1],
          ["Er spielt gegen {} Bruder.", ["sein", "seinen", "seinem"], 1],
          ["Ich wohne bei {} Tante.", ["meine", "meiner", "meinen"], 1],
          ["Ohne {} Jacke ist es kalt.", ["eine", "einer", "einem"], 0],
          ["Nach {} Schule gehe ich nach Hause.", ["die", "der", "den"], 1],
          ["Wir gehen {} Arzt.", ["zum", "zur"], 0],
          ["Sie geht {} Schule.", ["zum", "zur"], 1]
        ] }
      ]
    },
    2: {
      regel: "Wechselpräpositionen: in, an, auf, über, unter, vor, hinter, neben, zwischen.\n\nFrage «Wo?» (Ort, keine Bewegung zu einem Ziel) → Dativ: Das Buch liegt auf dem Tisch.\nFrage «Wohin?» (Bewegung zu einem Ziel) → Akkusativ: Ich lege das Buch auf den Tisch.",
      bsp: [["Wo? → Dativ", "Wir sind im (in dem) Kino."], ["Wohin? → Akkusativ", "Wir gehen ins (in das) Kino."], ["Wechselpräpositionen", "in, an, auf, über, unter, vor, hinter, neben, zwischen"]],
      aufg: [
        { t: "wahl", a: "Wo? oder Wohin? Wähle die richtige Form.", i: [
          ["Ich lege das Buch auf {} Tisch.", ["den", "dem"], 0],
          ["Das Buch liegt auf {} Tisch.", ["den", "dem"], 1],
          ["Er hängt das Bild an {} Wand.", ["die", "der"], 0],
          ["Das Bild hängt an {} Wand.", ["die", "der"], 1],
          ["Die Katze springt unter {} Bett.", ["das", "dem"], 0],
          ["Die Katze schläft unter {} Bett.", ["das", "dem"], 1],
          ["Setz dich neben {} Freundin!", ["deine", "deiner"], 0],
          ["Ich sitze neben {} Freundin.", ["deine", "deiner"], 1]
        ] },
        { t: "zuordnen", a: "Wo? oder Wohin?", o: ["Wo? (Dativ)", "Wohin? (Akkusativ)"], i: [
          ["Ich gehe *in die Stadt*.", 1],
          ["Ich wohne *in der Stadt*.", 0],
          ["Wir legen die Jacken *auf das Sofa*.", 1],
          ["Die Jacken liegen *auf dem Sofa*.", 0],
          ["Er fährt *an den See*.", 1],
          ["Wir grillieren *am See*.", 0]
        ] }
      ]
    },
    3: {
      regel: "Nach wegen, trotz, während, statt und innerhalb steht der Genitiv: wegen des Staus, während der Pause.\n\nViele Verben haben eine feste Präposition: warten auf, sich freuen auf (Zukunft) / über (Gegenwart), Angst haben vor, sich interessieren für, teilnehmen an, träumen von, sich bewerben um, sich ärgern über.",
      bsp: [["Genitiv", "wegen des Staus, trotz ihrer Verletzung"], ["feste Präposition", "warten auf, Angst haben vor"], ["freuen auf / über", "Ich freue mich auf die Ferien. / über das Geschenk."]],
      aufg: [
        { t: "luecke", a: "Ergänze die passende Präposition.", i: [
          ["Ich warte {} den Bus.", "auf"],
          ["Sie interessiert sich {} Autos.", "für"],
          ["Er hat Angst {} Hunden.", "vor"],
          ["Wir freuen uns {} die Ferien.", "auf"],
          ["Ich nehme {} einem Wettbewerb teil.", "an"],
          ["Er träumt {} einem eigenen Auto.", "von"],
          ["Sie bewirbt sich {} eine Lehrstelle.", ["um", "für"]],
          ["Ich ärgere mich {} den Fehler.", "über"]
        ] },
        { t: "wahl", a: "Wähle die richtige Form (Genitiv).", i: [
          ["Wegen {} Staus kamen wir zu spät.", ["des", "dem", "den"], 0],
          ["Während {} Pause essen wir etwas.", ["die", "der", "den"], 1],
          ["Trotz {} Verletzung spielte sie weiter.", ["ihre", "ihrer", "ihrem"], 1],
          ["Statt {} Kuchens nehme ich Obst.", ["des", "dem", "den"], 0],
          ["Innerhalb {} Woche muss die Arbeit fertig sein.", ["eine", "einer", "einem"], 1]
        ] }
      ]
    }
  });

  const Z4 = ["Präsens", "Präteritum", "Perfekt", "Futur"], Z5 = ["Präsens", "Präteritum", "Perfekt", "Plusquamperfekt", "Futur"];
  U("sp-zeiten", "rgramm", "Zeitformen", "Präsens, Präteritum, Perfekt, Plusquamperfekt und Futur: Wann passiert etwas?", {
    1: {
      regel: "Präsens: Was jetzt passiert (ich spiele). Präteritum: Was früher passiert ist, oft in Geschichten (ich spielte, ich ging). Perfekt: Was früher passiert ist, oft beim Erzählen (ich habe gespielt, ich bin gegangen). Futur: Was später passiert (ich werde spielen).",
      bsp: [["Präsens", "ich spiele"], ["Präteritum", "ich spielte, ich ging"], ["Perfekt", "ich habe gespielt, ich bin gegangen"], ["Futur", "ich werde spielen"]],
      aufg: [
        { t: "zuordnen", a: "In welcher Zeitform steht das Verb?", o: Z4, i: [
          ["Ich *spiele* Fussball.", 0],
          ["Ich *spielte* Fussball.", 1],
          ["Ich *habe* Fussball *gespielt*.", 2],
          ["Ich *werde* Fussball *spielen*.", 3],
          ["Wir *gingen* nach Hause.", 1],
          ["Sie *ist* nach Bern *gefahren*.", 2],
          ["Er *liest* ein Buch.", 0],
          ["Ihr *werdet* es *sehen*.", 3]
        ] },
        { t: "luecke", a: "Setze das Verb im Präteritum ein.", i: [
          ["Gestern {} ich ins Kino. (gehen)", "ging"],
          ["Wir {} Pizza. (essen)", "assen"],
          ["Er {} einen Brief. (schreiben)", "schrieb"],
          ["Sie {} laut. (lachen)", "lachte"],
          ["Ich {} müde. (sein)", "war"],
          ["Wir {} keine Zeit. (haben)", "hatten"]
        ] }
      ]
    },
    2: {
      regel: "Perfekt mit «sein» oder «haben»? Mit «sein» bei Verben der Bewegung oder Veränderung (gehen, fahren, kommen, einschlafen, schmelzen), sonst mit «haben».\n\nPlusquamperfekt: Was vor einem anderen Ereignis in der Vergangenheit passiert war: Nachdem ich gegessen hatte, ging ich.",
      bsp: [["Perfekt mit sein", "Ich bin gefahren. Das Baby ist eingeschlafen."], ["Perfekt mit haben", "Wir haben geschlafen."], ["Plusquamperfekt", "Wir hatten schon bezahlt."]],
      aufg: [
        { t: "wahl", a: "«haben» oder «sein»?", i: [
          ["Ich {} nach Zürich gefahren.", ["habe", "bin"], 1],
          ["Wir {} lange geschlafen.", ["haben", "sind"], 0],
          ["Sie {} spät nach Hause gekommen.", ["hat", "ist"], 1],
          ["Er {} das Spiel gewonnen.", ["hat", "ist"], 0],
          ["Das Baby {} eingeschlafen.", ["hat", "ist"], 1],
          ["Ihr {} viel gelernt.", ["habt", "seid"], 0],
          ["Der Schnee {} geschmolzen.", ["hat", "ist"], 1]
        ] },
        { t: "luecke", a: "Setze das Partizip ein.", i: [
          ["Ich habe das Buch {}. (lesen)", "gelesen"],
          ["Wir sind ins Schwimmbad {}. (gehen)", "gegangen"],
          ["Hast du die Aufgabe {}? (verstehen)", "verstanden"],
          ["Sie hat mir {}. (helfen)", "geholfen"],
          ["Er ist zu spät {}. (aufstehen)", "aufgestanden"],
          ["Das Spiel hat um acht Uhr {}. (beginnen)", "begonnen"]
        ] },
        { t: "zuordnen", a: "In welcher Zeitform steht das Verb?", o: Z5, i: [
          ["Nachdem er *gegessen hatte*, ging er.", 3],
          ["Ich *bin* krank *gewesen*.", 2],
          ["Morgen *wird* es *schneien*.", 4],
          ["Sie *verlor* ihr Handy.", 1],
          ["Wir *hatten* schon *bezahlt*.", 3]
        ] }
      ]
    },
    3: {
      regel: "Viele häufige Verben sind unregelmässig: gehen – ging – gegangen, bringen – brachte – gebracht, denken – dachte – gedacht, werfen – warf – geworfen, wissen – wusste – gewusst.\n\nBeim Plusquamperfekt brauchst du «hatte» oder «war» und das Partizip: Ich hatte meinen Schlüssel vergessen.",
      bsp: [["unregelmässig", "bringen – brachte – gebracht"], ["Perfekt", "Der Zug ist angekommen."], ["Plusquamperfekt", "Ich hatte den Schlüssel vergessen."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz in der angegebenen Zeitform.", i: [
          ["Ich gehe ins Training.", "Perfekt", "Ich bin ins Training gegangen."],
          ["Wir essen im Restaurant.", "Präteritum", "Wir assen im Restaurant."],
          ["Sie schreibt die Prüfung.", "Futur", "Sie wird die Prüfung schreiben."],
          ["Er bringt das Paket.", "Perfekt", "Er hat das Paket gebracht."],
          ["Ich vergesse meinen Schlüssel.", "Plusquamperfekt", "Ich hatte meinen Schlüssel vergessen."],
          ["Die Kinder rennen über die Wiese.", "Präteritum", "Die Kinder rannten über die Wiese."],
          ["Der Zug kommt pünktlich an.", "Perfekt", "Der Zug ist pünktlich angekommen."]
        ] },
        { t: "fehler", i: [
          ["Gestern *gehte* ich ins Kino.", "ging"],
          ["Er hat den Ball weit *geworft*.", "geworfen"],
          ["Wir *haben* nach Hause gerannt.", "sind"],
          ["Sie *bringte* einen Kuchen mit.", "brachte"],
          ["Ich habe es nicht *gewisst*.", "gewusst"],
          ["Er *ist* sein Velo repariert.", "hat"]
        ] }
      ]
    }
  });

  U("sp-satzglieder", "rgramm", "Satzglieder", "Subjekt, Prädikat, Objekte und Adverbiale: Mit der Umstellprobe findest du die Teile eines Satzes.", {
    1: {
      regel: "Umstellprobe: Wörter, die beim Umstellen zusammenbleiben, bilden ein Satzglied. Die Mannschaft | lobt | der Trainer. → Der Trainer | lobt | die Mannschaft.\n\nDas Prädikat ist das Verb. Es steht im Aussagesatz an zweiter Stelle. Das Subjekt findest du mit der Frage «Wer oder was?». Das Objekt ergänzt das Verb: Wen oder was lobt der Trainer? – die Mannschaft.",
      bsp: [["Subjekt", "Der Trainer lobt die Mannschaft. (Wer lobt?)"], ["Prädikat", "Der Trainer lobt die Mannschaft."], ["Objekt", "Der Trainer lobt die Mannschaft. (Wen lobt er?)"]],
      aufg: [
        { t: "zuordnen", a: "Welches Satzglied ist markiert?", o: ["Subjekt", "Prädikat", "Objekt"], i: [
          ["*Der Trainer* lobt die Mannschaft.", 0],
          ["Der Trainer *lobt* die Mannschaft.", 1],
          ["Der Trainer lobt *die Mannschaft*.", 2],
          ["*Meine Freundin* kauft ein neues Handy.", 0],
          ["Meine Freundin kauft *ein neues Handy*.", 2],
          ["Am Abend *schauen* wir einen Film.", 1],
          ["Am Abend schauen *wir* einen Film.", 0],
          ["Am Abend schauen wir *einen Film*.", 2]
        ] },
        { t: "wahl", a: "Was ist das Subjekt im Satz?", i: [
          ["Heute kommt mein Onkel zu Besuch.", ["Heute", "mein Onkel", "zu Besuch"], 1],
          ["Den Ball wirft der Torhüter weit.", ["Den Ball", "der Torhüter", "weit"], 1],
          ["Im Sommer fahren wir ans Meer.", ["Im Sommer", "wir", "ans Meer"], 1],
          ["Das neue Velo gefällt mir.", ["Das neue Velo", "gefällt", "mir"], 0]
        ] }
      ]
    },
    2: {
      regel: "Es gibt verschiedene Objekte: Akkusativobjekt (Wen oder was?) und Dativobjekt (Wem?). Ich schenke meiner Mutter (Wem?) Blumen (Was?).\n\nAdverbiale (Umstandsbestimmungen) sagen, wann, wo, wie oder warum etwas geschieht: am Sonntag, vor dem Bahnhof, vorsichtig, wegen der Prüfung.",
      bsp: [["Dativobjekt", "Ich schenke meiner Mutter Blumen. (Wem?)"], ["Akkusativobjekt", "Ich schenke meiner Mutter Blumen. (Was?)"], ["Adverbiale", "Am Sonntag besuchen wir das Museum. (Wann?)"]],
      aufg: [
        { t: "zuordnen", a: "Welches Satzglied ist markiert?", o: ["Subjekt", "Prädikat", "Akkusativobjekt", "Dativobjekt", "Adverbiale"], i: [
          ["Ich schenke *meiner Mutter* Blumen.", 3],
          ["Ich schenke meiner Mutter *Blumen*.", 2],
          ["*Am Sonntag* besuchen wir das Museum.", 4],
          ["Der Hund *gehorcht* dem Besitzer.", 1],
          ["Der Hund gehorcht *dem Besitzer*.", 3],
          ["Sie wartet *vor dem Bahnhof*.", 4],
          ["*Mein bester Freund* hat Geburtstag.", 0],
          ["Wir lernen *wegen der Prüfung* viel.", 4],
          ["Der Lehrer erklärt *den Schülern* die Regel.", 3],
          ["Der Lehrer erklärt den Schülern *die Regel*.", 2],
          ["Er fährt *vorsichtig*.", 4],
          ["*Die Ferien* beginnen bald.", 0]
        ] }
      ]
    },
    3: {
      regel: "Adverbiale kann man genauer bestimmen:\n\nZeit (Wann? Wie lange? Seit wann?) – Ort (Wo? Wohin? Woher?) – Art und Weise (Wie?) – Grund (Warum?).\n\nIm Aussagesatz steht das Prädikat an zweiter Stelle. An die erste Stelle kann man ein anderes Satzglied stellen: Am Samstag spielen wir Fussball.",
      bsp: [["Zeit", "um sieben Uhr, seit Montag"], ["Ort", "in Wetzikon, ans Meer"], ["Art und Weise", "sehr leise, ohne Hilfe"], ["Grund", "wegen des Nebels, aus Angst"]],
      aufg: [
        { t: "zuordnen", a: "Welche Art von Adverbiale ist markiert?", o: ["Zeit (wann?)", "Ort (wo? wohin?)", "Art und Weise (wie?)", "Grund (warum?)"], i: [
          ["Wir treffen uns *um sieben Uhr*.", 0],
          ["Sie wohnt *in Wetzikon*.", 1],
          ["Er spricht *sehr leise*.", 2],
          ["*Wegen des Nebels* landete das Flugzeug später.", 3],
          ["*Nach der Schule* gehe ich ins Training.", 0],
          ["Wir fahren *ans Meer*.", 1],
          ["Sie löste die Aufgabe *ohne Hilfe*.", 2],
          ["*Aus Angst* sagte er nichts.", 3],
          ["Der Laden ist *seit Montag* geschlossen.", 0]
        ] },
        { t: "umformen", a: "Stelle den Satz um. Beginne mit dem angegebenen Satzglied.", i: [
          ["Wir spielen am Samstag Fussball.", "Beginne mit «Am Samstag».", "Am Samstag spielen wir Fussball."],
          ["Ich habe gestern meinen Freund getroffen.", "Beginne mit «Gestern».", "Gestern habe ich meinen Freund getroffen."],
          ["Der Zug fährt wegen eines Unfalls nicht.", "Beginne mit «Wegen eines Unfalls».", "Wegen eines Unfalls fährt der Zug nicht."],
          ["Meine Schwester schenkt mir ein Buch.", "Beginne mit «Ein Buch».", ["Ein Buch schenkt mir meine Schwester.", "Ein Buch schenkt meine Schwester mir."]]
        ] }
      ]
    }
  });

  U("sp-passiv", "rgramm", "Aktiv und Passiv", "Wer handelt – oder was geschieht? Aktiv- und Passivsätze erkennen und bilden.", {
    1: {
      regel: "Im Aktiv steht im Vordergrund, wer etwas tut: Der Koch kocht die Suppe.\n\nIm Passiv steht im Vordergrund, was geschieht: Die Suppe wird gekocht. Das Passiv bildet man mit «werden» und dem Partizip: wird gekocht, werden repariert.",
      bsp: [["Aktiv", "Der Mechaniker repariert das Auto."], ["Passiv (Einzahl)", "Das Auto wird repariert."], ["Passiv (Mehrzahl)", "Die Autos werden repariert."]],
      aufg: [
        { t: "zuordnen", a: "Aktiv oder Passiv?", o: ["Aktiv", "Passiv"], i: [
          ["Der Mechaniker repariert das Auto.", 0],
          ["Das Auto wird repariert.", 1],
          ["Die Briefe werden verschickt.", 1],
          ["Der Pöstler bringt die Briefe.", 0],
          ["Das Fenster wird geöffnet.", 1],
          ["Wir öffnen das Fenster.", 0],
          ["In der Schweiz wird viel Käse gegessen.", 1],
          ["Meine Mutter backt einen Kuchen.", 0]
        ] },
        { t: "wahl", a: "«wird» oder «werden»?", i: [
          ["Das Haus {} gebaut.", ["wird", "werden"], 0],
          ["Die Häuser {} gebaut.", ["wird", "werden"], 1],
          ["Der Rasen {} gemäht.", ["wird", "werden"], 0],
          ["Die Prüfungen {} korrigiert.", ["wird", "werden"], 1],
          ["Das Essen {} serviert.", ["wird", "werden"], 0]
        ] }
      ]
    },
    2: {
      regel: "So wird aus einem Aktivsatz ein Passivsatz: Das Akkusativobjekt wird zum Subjekt. Wer handelt, kann man mit «von» nennen.\n\nAktiv: Der Koch kocht die Suppe. → Passiv: Die Suppe wird vom Koch gekocht.",
      bsp: [["Aktiv", "Die Lehrerin korrigiert die Prüfung."], ["Passiv", "Die Prüfung wird von der Lehrerin korrigiert."], ["vom = von dem", "Die Suppe wird vom Koch gekocht."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz im Passiv. Nenne mit «von», wer handelt.", i: [
          ["Der Koch kocht die Suppe.", "Passiv", ["Die Suppe wird vom Koch gekocht.", "Die Suppe wird von dem Koch gekocht."]],
          ["Die Lehrerin korrigiert die Prüfung.", "Passiv", "Die Prüfung wird von der Lehrerin korrigiert."],
          ["Der Hund frisst das Futter.", "Passiv", ["Das Futter wird vom Hund gefressen.", "Das Futter wird von dem Hund gefressen."]],
          ["Der Trainer lobt die Spielerin.", "Passiv", ["Die Spielerin wird vom Trainer gelobt.", "Die Spielerin wird von dem Trainer gelobt."]],
          ["Viele Menschen besuchen das Museum.", "Passiv", "Das Museum wird von vielen Menschen besucht."]
        ] },
        { t: "luecke", a: "Setze das Partizip ein.", i: [
          ["Der Brief wird {}. (schreiben)", "geschrieben"],
          ["Die Tür wird {}. (schliessen)", "geschlossen"],
          ["Das Lied wird {}. (singen)", "gesungen"],
          ["Die Pizza wird {}. (bestellen)", "bestellt"],
          ["Der Dieb wird {}. (fangen)", "gefangen"]
        ] }
      ]
    },
    3: {
      regel: "Das Passiv gibt es in verschiedenen Zeitformen: Präsens: Die Brücke wird gebaut. Präteritum: Die Brücke wurde gebaut. Perfekt: Die Brücke ist gebaut worden.\n\nMit Modalverb: Die Brücke muss gebaut werden. Ein Satz mit «man» wird im Passiv ohne «von» gebildet: Man baute die Brücke 1950. → Die Brücke wurde 1950 gebaut.",
      bsp: [["Präteritum", "Die Brücke wurde gebaut."], ["Perfekt", "Die Brücke ist gebaut worden."], ["mit Modalverb", "Die Brücke muss gebaut werden."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz im Passiv in der angegebenen Form.", i: [
          ["Man baute die Brücke 1950.", "Passiv Präteritum", "Die Brücke wurde 1950 gebaut."],
          ["Die Polizei hat den Dieb gefasst.", "Passiv Perfekt", "Der Dieb ist von der Polizei gefasst worden."],
          ["Man muss die Hausaufgaben machen.", "Passiv mit «müssen»", "Die Hausaufgaben müssen gemacht werden."],
          ["Der Arzt hat die Patientin untersucht.", "Passiv Perfekt", ["Die Patientin ist vom Arzt untersucht worden.", "Die Patientin ist von dem Arzt untersucht worden."]],
          ["Man kann das Problem lösen.", "Passiv mit «können»", "Das Problem kann gelöst werden."],
          ["Die Firma stellte zwei Lernende ein.", "Passiv Präteritum", "Zwei Lernende wurden von der Firma eingestellt."]
        ] },
        { t: "zuordnen", a: "In welcher Zeitform steht der Passivsatz?", o: ["Präsens", "Präteritum", "Perfekt"], i: [
          ["Das Spiel wird abgesagt.", 0],
          ["Das Spiel wurde abgesagt.", 1],
          ["Das Spiel ist abgesagt worden.", 2],
          ["Die Fenster wurden geputzt.", 1],
          ["Der Rasen ist gemäht worden.", 2],
          ["Die Briefe werden sortiert.", 0]
        ] }
      ]
    }
  });

  // ======================================================= PRÄTERITUM
  const PP = ["Präsens", "Präteritum"], RU = ["regelmässig", "unregelmässig"];

  U("sp-praet1", "rgramm", "Präteritum 1: regelmässige Verben", "ich spielte, wir lachten, er wartete: So bildest du das Präteritum der regelmässigen Verben.", {
    1: {
      regel: "Das Präteritum braucht man vor allem beim Erzählen und Schreiben von Geschichten und Berichten.\n\nRegelmässige Verben: Stamm + -te. spielen → spiel → ich spielte.\n\nDer Wortstamm bleibt gleich, es kommt nur «-te» dazu.",
      bsp: [["spielen", "ich spielte"], ["lachen", "sie lachte"], ["kaufen", "er kaufte"], ["machen", "wir machten"]],
      aufg: [
        { t: "zuordnen", a: "Steht das Verb im Präsens oder im Präteritum?", o: PP, i: [
          ["Ich *spiele* Gitarre.", 0],
          ["Ich *spielte* Gitarre.", 1],
          ["Sie *lachte* laut.", 1],
          ["Er *kauft* ein Brot.", 0],
          ["Wir *machten* Hausaufgaben.", 1],
          ["Ihr *wohnt* in Wetzikon.", 0],
          ["Der Hund *bellte* die ganze Nacht.", 1],
          ["Du *hörst* Musik.", 0]
        ] },
        { t: "wahl", a: "Welche Form ist das Präteritum?", i: [
          ["Gestern {} ich lange.", ["spielte", "spiele"], 0],
          ["Letzte Woche {} wir einen Kuchen.", ["machen", "machten"], 1],
          ["Früher {} er in Uster.", ["wohnte", "wohnt"], 0],
          ["Am Montag {} sie Schuhe.", ["kauft", "kaufte"], 1],
          ["Im Sommer {} ich viel.", ["reiste", "reise"], 0],
          ["Gestern Abend {} wir einen Film.", ["schauen", "schauten"], 1],
          ["Vor einem Jahr {} er noch klein.", ["lebte", "lebt"], 0],
          ["Am Wochenende {} sie ihr Zimmer auf.", ["räumt", "räumte"], 1]
        ] },
        { t: "luecke", a: "Setze das Verb im Präteritum ein (ich / er / sie).", i: [
          ["Gestern {} ich mit Lea. (telefonieren)", "telefonierte"],
          ["Der Lehrer {} eine Frage. (stellen)", "stellte"],
          ["Ich {} mein Velo. (putzen)", "putzte"],
          ["Sie {} ein Bild. (malen)", "malte"],
          ["Er {} die Tür zu. (machen)", "machte"],
          ["Das Telefon {}. (klingeln)", "klingelte"],
          ["Ich {} den Tisch. (decken)", "deckte"],
          ["Mia {} laut. (lachen)", "lachte"]
        ] }
      ]
    },
    2: {
      regel: "Endungen im Präteritum: ich spielte, du spieltest, er/sie/es spielte, wir spielten, ihr spieltet, sie spielten.\n\nEndet der Stamm auf -t oder -d (oder ist er sonst schwer auszusprechen), kommt ein «e» dazu: warten → ich wartete, reden → er redete, öffnen → sie öffnete, rechnen → wir rechneten.",
      bsp: [["du", "du spieltest"], ["ihr", "ihr spieltet"], ["-t / -d", "ich wartete, er redete"], ["-n nach Konsonant", "sie öffnete, wir rechneten"]],
      aufg: [
        { t: "luecke", a: "Setze die passende Präteritumform ein.", i: [
          ["Du {} gestern sehr lange. (lernen)", "lerntest"],
          ["Ihr {} im Garten. (arbeiten)", "arbeitetet"],
          ["Wir {} auf den Bus. (warten)", "warteten"],
          ["Sie {} die Tür. (öffnen)", "öffnete"],
          ["Er {} mit seinem Chef. (reden)", "redete"],
          ["Du {} die Aufgabe richtig. (rechnen)", "rechnetest"],
          ["Die Kinder {} im Schnee. (spielen)", "spielten"],
          ["Ihr {} viel. (lachen)", "lachtet"]
        ] },
        { t: "wahl", a: "-te oder -ete? Wähle die richtige Form.", i: [
          ["Ich {} eine halbe Stunde.", ["warte", "wartete"], 1],
          ["Er {} ein Zimmer im Hotel.", ["buchte", "buchete"], 0],
          ["Sie {} den Hund an der Leine.", ["führte", "führete"], 0],
          ["Wir {} lange mit dem Lehrer.", ["redeten", "redten"], 0],
          ["Der Zug {} pünktlich.", ["startete", "startte"], 0],
          ["Ich {} das Geld.", ["zählete", "zählte"], 1]
        ] },
        { t: "fehler", a: "In jedem Satz ist eine Präteritumform falsch. Tippe sie an.", i: [
          ["Gestern *wartte* ich lange auf dich.", "wartete"],
          ["Du *spielte* sehr gut im Match.", "spieltest"],
          ["Wir *lachte* über den Witz.", "lachten"],
          ["Ihr *arbeitetet* gestern, aber er *arbeitet* nicht mit.", "arbeitete"],
          ["Er *öffnte* das Fenster.", "öffnete"],
          ["Die Schüler *lernt* für die Prüfung.", "lernten"]
        ] }
      ]
    },
    3: {
      regel: "Trennbare Verben: Die Vorsilbe steht am Satzende. aufräumen → Ich räumte mein Zimmer auf. einkaufen → Wir kauften im Coop ein.\n\nVerben auf -ieren sind regelmässig: telefonieren → telefonierte, reparieren → reparierte.\n\nTipp: Beim Umschreiben einer Geschichte ins Präteritum musst du jedes Verb prüfen.",
      bsp: [["aufräumen", "Ich räumte auf."], ["einkaufen", "Wir kauften ein."], ["reparieren", "Er reparierte das Velo."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz im Präteritum.", i: [
          ["Ich räume mein Zimmer auf.", "Präteritum", "Ich räumte mein Zimmer auf."],
          ["Wir kaufen im Coop ein.", "Präteritum", "Wir kauften im Coop ein."],
          ["Er repariert sein Velo.", "Präteritum", "Er reparierte sein Velo."],
          ["Du machst das Licht aus.", "Präteritum", "Du machtest das Licht aus."],
          ["Ihr wartet am Bahnhof.", "Präteritum", "Ihr wartetet am Bahnhof."],
          ["Die Lernenden stellen sich vor.", "Präteritum", "Die Lernenden stellten sich vor."]
        ] },
        { t: "markieren", a: "Tippe alle Verben im Präteritum an.", i: [
          ["Ein Morgen im Lager", "Um 6.45 Uhr [+erreichte] Luca das Lager. Er [+holte] seine Arbeitskleider und [+zog] sich um. Dann [+prüfte] er die Lieferscheine. Heute [-ist] er müde, aber gestern [+arbeitete] er sehr konzentriert."],
          ["Der Ausflug", "Die Klasse [+wanderte] auf den Bachtel. Oben [+machten] alle eine Pause. Wir [-wandern] gern, [+sagte] Nora. Dann [+regnete] es plötzlich."]
        ] },
        { t: "mehrfach", a: "Welche Formen sind richtig gebildet? (mehrere Antworten)", i: [
          ["warten, Präteritum", ["ich wartete", "ich wartte", "wir warteten", "du wartetest"], [0, 2, 3]],
          ["einkaufen, Präteritum", ["ich kaufte ein", "ich einkaufte", "wir kauften ein", "er kaufte ein"], [0, 2, 3]],
          ["öffnen, Präteritum", ["sie öffnete", "sie öffnte", "ihr öffnetet", "wir öffneten"], [0, 2, 3]],
          ["telefonieren, Präteritum", ["ich telefonierte", "du telefoniertest", "er telefonierete", "sie telefonierten"], [0, 1, 3]]
        ] }
      ]
    }
  });

  U("sp-praet2", "rgramm", "Präteritum 2: unregelmässige Verben", "ging, kam, sah, schrieb: Bei den unregelmässigen Verben ändert sich der Stammvokal. Diese Formen musst du lernen.", {
    1: {
      regel: "Bei den unregelmässigen (starken) Verben ändert sich im Präteritum der Wortstamm, oft der Vokal: gehen → ging, kommen → kam, sehen → sah, schreiben → schrieb.\n\nBei «ich» und «er/sie/es» gibt es keine Endung: ich ging, er ging.\n\nIn der Schweiz schreibt man ss statt ß: essen → ass, sitzen → sass.",
      bsp: [["gehen", "ich ging"], ["kommen", "er kam"], ["sehen", "sie sah"], ["essen", "ich ass"]],
      aufg: [
        { t: "paare", a: "Wähle zu jedem Verb die Präteritumform (ich / er).", o: ["fand", "las", "ging", "trank", "kam", "schrieb", "sah", "fuhr"], i: [
          ["gehen", 2], ["kommen", 4], ["sehen", 6], ["fahren", 7], ["schreiben", 5], ["lesen", 1], ["trinken", 3], ["finden", 0]
        ] },
        { t: "luecke", a: "Setze das Verb im Präteritum ein (ich / er / sie).", i: [
          ["Gestern {} ich früh ins Bett. (gehen)", "ging"],
          ["Er {} eine Nachricht. (schreiben)", "schrieb"],
          ["Sie {} mit dem Zug nach Zürich. (fahren)", "fuhr"],
          ["Ich {} einen Apfel. (essen)", "ass"],
          ["Lara {} ein spannendes Buch. (lesen)", "las"],
          ["Der Bus {} zu spät. (kommen)", "kam"],
          ["Ich {} einen Film. (sehen)", "sah"],
          ["Er {} ein Glas Wasser. (trinken)", "trank"]
        ] },
        { t: "wahl", a: "Welche Präteritumform ist richtig?", i: [
          ["Gestern {} ich nach Hause.", ["gehte", "ging"], 1],
          ["Sie {} mir ein Geschenk.", ["gab", "gebte"], 0],
          ["Er {} den Ball.", ["nahm", "nehmte"], 0],
          ["Ich {} lange.", ["schlafte", "schlief"], 1],
          ["Der Hund {} schnell.", ["lief", "laufte"], 0],
          ["Wir {} im Garten. (sitzen)", ["sitzten", "sassen"], 1]
        ] }
      ]
    },
    2: {
      regel: "Endungen bei unregelmässigen Verben: ich ging, du gingst, er/sie/es ging, wir gingen, ihr gingt, sie gingen.\n\nRegelmässig oder unregelmässig? Ändert sich der Stamm (singen → sang), ist das Verb unregelmässig. Bleibt er gleich und kommt -te dazu (spielen → spielte), ist es regelmässig.",
      bsp: [["du", "du gingst, du kamst"], ["wir", "wir gingen, wir kamen"], ["ihr", "ihr gingt, ihr kamt"], ["unregelmässig", "singen → sang"]],
      aufg: [
        { t: "luecke", a: "Setze die passende Präteritumform ein.", i: [
          ["Du {} gestern sehr schnell. (laufen)", "liefst"],
          ["Wir {} um 7 Uhr. (kommen)", "kamen"],
          ["Ihr {} viel Pizza. (essen)", "asst"],
          ["Die Gäste {} lange. (bleiben)", "blieben"],
          ["Du {} mir sehr. (helfen)", "halfst"],
          ["Wir {} unsere Freunde im Park. (treffen)", "trafen"],
          ["Ihr {} ein Lied. (singen)", "sangt"],
          ["Die Kinder {} laut. (rufen)", "riefen"]
        ] },
        { t: "zuordnen", a: "Ist das Verb regelmässig oder unregelmässig?", o: RU, i: [
          ["*spielte* (spielen)", 0],
          ["*sang* (singen)", 1],
          ["*kaufte* (kaufen)", 0],
          ["*fiel* (fallen)", 1],
          ["*wartete* (warten)", 0],
          ["*begann* (beginnen)", 1],
          ["*lernte* (lernen)", 0],
          ["*lag* (liegen)", 1]
        ] },
        { t: "fehler", a: "In jedem Satz ist eine Präteritumform falsch. Tippe sie an.", i: [
          ["Gestern *gehte* ich ins Training.", "ging"],
          ["Er *schreibte* einen langen Brief.", "schrieb"],
          ["Wir *fahrten* mit dem Velo zur Schule.", "fuhren"],
          ["Du *kamt* zu spät.", "kamst"],
          ["Sie *findete* ihren Schlüssel nicht.", "fand"],
          ["Ich *trinkte* einen Tee.", "trank"]
        ] }
      ]
    },
    3: {
      regel: "Weitere wichtige unregelmässige Verben: fallen → fiel, beginnen → begann, liegen → lag, stehen → stand, tun → tat, ziehen → zog, fliegen → flog, verlieren → verlor, vergessen → vergass, werden → wurde, schliessen → schloss, sprechen → sprach.\n\nTrennbare unregelmässige Verben: anfangen → Das Spiel fing an. aufstehen → Ich stand früh auf.",
      bsp: [["aufstehen", "Ich stand um 6 Uhr auf."], ["anfangen", "Die Schule fing an."], ["vergessen", "Er vergass sein Heft."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz im Präteritum.", i: [
          ["Ich stehe um 6 Uhr auf.", "Präteritum", "Ich stand um 6 Uhr auf."],
          ["Das Spiel fängt um 15 Uhr an.", "Präteritum", "Das Spiel fing um 15 Uhr an."],
          ["Er vergisst sein Turnzeug.", "Präteritum", "Er vergass sein Turnzeug."],
          ["Wir fliegen nach Spanien.", "Präteritum", "Wir flogen nach Spanien."],
          ["Sie spricht mit der Lehrerin.", "Präteritum", "Sie sprach mit der Lehrerin."],
          ["Die Kinder ziehen ihre Jacken an.", "Präteritum", "Die Kinder zogen ihre Jacken an."]
        ] },
        { t: "markieren", a: "Tippe alle unregelmässigen Verben im Präteritum an.", i: [
          ["Ein schlechter Tag", "Am Morgen [+verlor] Jan seinen Schlüssel. Er [-suchte] überall. Dann [+fand] er ihn unter dem Bett. Er [+lief] zum Bahnhof, aber der Zug [+fuhr] gerade ab. Er [-wartete] zehn Minuten."],
          ["Im Schwimmbad", "Wir [+gingen] ins Schwimmbad. Mira [+sprang] vom Dreimeterbrett. Ich [-kaufte] ein Glace. Später [+lagen] wir in der Sonne und [+tranken] Eistee."]
        ] },
        { t: "luecke", a: "Setze die richtige Präteritumform ein.", i: [
          ["Das Glas {} auf den Boden. (fallen)", "fiel"],
          ["Der Film {} um 20 Uhr. (beginnen)", "begann"],
          ["Ich {} neben der Tür. (stehen)", "stand"],
          ["Es {} langsam dunkel. (werden)", "wurde"],
          ["Du {} das Fenster. (schliessen)", "schlossest", "schlosst"],
          ["Ihr {} nichts. (tun)", "tatet"]
        ].map(x => x.length > 3 ? [x[0], [x[1], x[2]]] : x) }
      ]
    }
  });

  U("sp-praet3", "rgramm", "Präteritum 3: sein, haben, Modalverben, Mischverben", "war, hatte, konnte, musste, dachte, brachte: Die wichtigsten Präteritumformen auch für das Sprechen.", {
    1: {
      regel: "Diese Formen braucht man auch beim Sprechen sehr oft:\nsein → ich war, du warst, er war, wir waren, ihr wart, sie waren.\nhaben → ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten.\n\nModalverben verlieren im Präteritum den Umlaut: können → konnte, müssen → musste, dürfen → durfte, mögen → mochte. Dazu: wollen → wollte, sollen → sollte.",
      bsp: [["sein", "ich war, wir waren"], ["haben", "ich hatte, wir hatten"], ["können", "ich konnte"], ["müssen", "er musste"]],
      aufg: [
        { t: "wahl", a: "«war» oder «hatte»? Wähle die passende Form.", i: [
          ["Gestern {} ich krank.", ["war", "hatte"], 0],
          ["Wir {} keine Zeit.", ["waren", "hatten"], 1],
          ["Das Wetter {} schön.", ["war", "hatte"], 0],
          ["Du {} Glück.", ["warst", "hattest"], 1],
          ["Ihr {} sehr müde.", ["wart", "hattet"], 0],
          ["Sie {} Hunger.", ["waren", "hatten"], 1],
          ["Ich {} am Montag im Lager.", ["war", "hatte"], 0],
          ["Er {} einen Termin beim Arzt.", ["war", "hatte"], 1]
        ] },
        { t: "luecke", a: "Setze das Modalverb im Präteritum ein.", i: [
          ["Ich {} nicht kommen. (können)", "konnte"],
          ["Er {} früh aufstehen. (müssen)", "musste"],
          ["Wir {} länger bleiben. (dürfen)", "durften"],
          ["Sie {} ein Eis. (wollen)", "wollte"],
          ["Du {} das Zimmer aufräumen. (sollen)", "solltest"],
          ["Ich {} Spinat nicht. (mögen)", "mochte"],
          ["Ihr {} sehr gut singen. (können)", "konntet"],
          ["Die Lernenden {} Sicherheitsschuhe tragen. (müssen)", "mussten"]
        ] }
      ]
    },
    2: {
      regel: "Mischverben ändern den Stamm wie unregelmässige Verben, bekommen aber die Endung -te wie regelmässige Verben:\ndenken → dachte, bringen → brachte, wissen → wusste, kennen → kannte, rennen → rannte, nennen → nannte, senden → sandte (oder sendete).",
      bsp: [["denken", "ich dachte"], ["bringen", "er brachte"], ["wissen", "sie wusste"], ["kennen", "wir kannten"]],
      aufg: [
        { t: "luecke", a: "Setze das Mischverb im Präteritum ein.", i: [
          ["Ich {} an dich. (denken)", "dachte"],
          ["Er {} mir das Buch. (bringen)", "brachte"],
          ["Sie {} die Antwort nicht. (wissen)", "wusste"],
          ["Wir {} den Weg nicht. (kennen)", "kannten"],
          ["Du {} zum Bus. (rennen)", "ranntest"],
          ["Man {} ihn «Ben». (nennen)", "nannte"],
          ["Ihr {} alle Antworten. (wissen)", "wusstet"],
          ["Die Lernenden {} die Pakete ins Lager. (bringen)", "brachten"]
        ] },
        { t: "fehler", a: "In jedem Satz ist eine Form falsch. Tippe sie an.", i: [
          ["Ich *denkte* lange nach.", "dachte"],
          ["Er *bringte* Brötchen mit.", "brachte"],
          ["Wir *wissten* die Lösung.", "wussten"],
          ["Sie *könnte* gestern nicht kommen.", "konnte"],
          ["Du *müsstest* gestern lange warten.", "musstest"],
          ["Ihr *ward* sehr mutig.", "wart"]
        ] },
        { t: "paare", a: "Wähle zu jedem Verb die Präteritumform.", o: ["brachte", "konnte", "war", "wusste", "hatte", "dachte"], i: [
          ["sein", 2], ["haben", 4], ["denken", 5], ["bringen", 0], ["wissen", 3], ["können", 1]
        ] }
      ]
    },
    3: {
      regel: "Achtung Verwechslung: «konnte» (Präteritum, Vergangenheit) und «könnte» (Konjunktiv, Möglichkeit) sind verschieden. Gestern konnte ich nicht kommen. – Ich könnte morgen kommen.\nGenauso: musste / müsste, durfte / dürfte.\n\nIn einem Bericht stehen alle Verben, die Vergangenes erzählen, im Präteritum.",
      bsp: [["konnte", "Gestern konnte ich nicht."], ["könnte", "Morgen könnte ich vielleicht."], ["musste", "Er musste warten."]],
      aufg: [
        { t: "umformen", a: "Schreibe den Satz im Präteritum.", i: [
          ["Ich bin im Lager und habe viel Arbeit.", "Präteritum", "Ich war im Lager und hatte viel Arbeit."],
          ["Wir müssen die Pakete zählen.", "Präteritum", "Wir mussten die Pakete zählen."],
          ["Er weiss die Antwort.", "Präteritum", "Er wusste die Antwort."],
          ["Sie kann den Stapler nicht fahren.", "Präteritum", "Sie konnte den Stapler nicht fahren."],
          ["Du bringst die Lieferung zur Rampe.", "Präteritum", "Du brachtest die Lieferung zur Rampe."],
          ["Ihr dürft früher gehen.", "Präteritum", "Ihr durftet früher gehen."]
        ] },
        { t: "wahl", a: "Präteritum oder Möglichkeit? Wähle die passende Form.", i: [
          ["Gestern {} ich leider nicht kommen.", ["konnte", "könnte"], 0],
          ["Morgen {} ich vielleicht helfen.", ["konnte", "könnte"], 1],
          ["Letzte Woche {} er jeden Tag früh aufstehen.", ["musste", "müsste"], 0],
          ["Eigentlich {} ich mehr lernen.", ["musste", "müsste"], 1],
          ["Als Kind {} ich lange aufbleiben.", ["durfte", "dürfte"], 0],
          ["Das {} schwierig werden.", ["durfte", "dürfte"], 1]
        ] },
        { t: "mehrfach", a: "Welche Formen sind richtig? (mehrere Antworten)", i: [
          ["sein, Präteritum", ["ich war", "wir waren", "ihr ward", "du warst"], [0, 1, 3]],
          ["denken, Präteritum", ["ich dachte", "ich denkte", "wir dachten", "sie dachten"], [0, 2, 3]],
          ["können, Präteritum", ["ich konnte", "du konntest", "er könnte", "wir konnten"], [0, 1, 3]],
          ["wissen, Präteritum", ["er wusste", "er wisste", "ihr wusstet", "sie wussten"], [0, 2, 3]]
        ] },
        { t: "markieren", a: "Tippe alle Verben im Präteritum an.", i: [
          ["Mein erster Schnuppertag", "Ich [+war] sehr nervös. Ich [+wusste] nicht, was mich erwartet. Mein Betreuer [+hatte] viel Geduld. Ich [+durfte] Pakete scannen und [+brachte] sie ins Regal. Ich [-würde] gern wieder kommen."]
        ] }
      ]
    }
  });

  window.SPRACHE_UNITS = units;
})();
