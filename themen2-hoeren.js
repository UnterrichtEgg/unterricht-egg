/* Neue Hörverstehen-Einheiten (Nov. 2026): MPA, Flaggen, Autos, Formel 1, Motorrad, GTA 6 */
(function () {
const U = [
  { id: "h-mpa-zug", r: "beruf", yt: "x2EqflCmYQE", titel: "Arbeiten als MPA im Spital", kanal: "Zuger Kantonsspital · professional.ch", dauer: "Video, ca. 2 Min.",
    kurz: "Eine Medizinische Praxisassistentin erzählt, warum sie gerne im Zuger Kantonsspital arbeitet.",
    vor: "Wo kann eine Medizinische Praxisassistentin (MPA) überall arbeiten? Nenne zwei Orte.",
    wort: [["die Abteilung","ein Bereich im Spital, z. B. Notfall, Röntgen oder Geburtsabteilung"],["die Hebamme","Fachperson, die Frauen bei der Geburt hilft"],["die Nachtschicht","Arbeit in der Nacht"],["die Weiterbildung","nach der Lehre weiterlernen, z. B. in einem Kurs"]],
    mc: [
      { q: "Wo arbeitet die Frau im Video?", o: ["In einer Hausarztpraxis","Im Zuger Kantonsspital","In einer Apotheke"], a: 1 },
      { q: "Was fasziniert sie an ihrer Arbeit?", o: ["Die Zusammenarbeit zwischen den verschiedenen Abteilungen","Die langen Nachtschichten","Dass sie allein arbeitet"], a: 0 },
      { q: "Bis wann arbeitet man laut Video höchstens?", o: ["Bis 15 Uhr","Bis 17 Uhr","Bis 22 Uhr"], a: 1 }
    ],
    rf: [
      { s: "Als MPA im Zuger Kantonsspital hat man keinen Dienst am Wochenende.", a: true },
      { s: "Die Frau sagt, im Spital lerne man nichts Neues mehr.", a: false, x: "Sie sagt, man lernt immer wieder etwas Neues dazu." }
    ],
    offen: [
      { q: "Welche Vorteile hat die Stelle für eine junge Mutter? Nenne zwei.", l: "Man arbeitet höchstens bis 17 Uhr, hat keinen Dienst am Wochenende und keine Nachtschichten." },
      { q: "Würdest du lieber in einer Arztpraxis oder in einem Spital arbeiten? Begründe kurz.", l: "Individuelle Antwort mit Begründung, z. B. Spital: viele Abteilungen, Abwechslung; Praxis: kleineres Team, man kennt die Patienten." }
    ] },

  { id: "h-mfa-alltag", r: "beruf", yt: "tiEn0mIKDc0", titel: "Ein Arbeitstag als Medizinische Fachangestellte", kanal: "BR · Lohnt sich das?", dauer: "Video, ca. 11 Min.",
    kurz: "Melli (24) arbeitet in Deutschland als Medizinische Fachangestellte (MFA). In der Schweiz heisst der Beruf MPA. Wie sieht ihr Alltag aus?",
    vor: "Was denkst du: Welche Arbeiten erledigt eine MPA am Empfang einer Praxis? Nenne drei.",
    wort: [["die Anmeldung","der Empfang, wo sich Patientinnen und Patienten melden"],["die Spritze","damit gibt man ein Medikament mit einer Nadel"],["der Krankentransport","ein Fahrzeug, das kranke Menschen fährt"],["die Überstunden","Stunden, die man mehr arbeitet als vereinbart"]],
    mc: [
      { q: "Wie alt ist Melli?", o: ["18","24","35"], a: 1 },
      { q: "Was ärgert Melli bei der Arbeit an der Anmeldung besonders?", o: ["Wenn der Computer oder die Programme nicht funktionieren","Wenn zu viele Patienten lachen","Wenn sie Kaffee kochen muss"], a: 0 },
      { q: "Was ist Mellis Hobby?", o: ["Fussball","Reiten","Gamen"], a: 1 }
    ],
    rf: [
      { s: "Melli wohnt noch bei ihren Eltern.", a: true },
      { s: "Melli findet, dass sich ihr Beruf überhaupt nicht lohnt.", a: false, x: "Sie findet, es lohnt sich, weil sie Hobby und Arbeit gut verbinden kann." }
    ],
    offen: [
      { q: "Nenne drei Aufgaben, die Melli im Video erledigt.", l: "Z. B. Patienten an der Anmeldung aufnehmen (Karte, Geburtsdatum), telefonieren und Termine verschieben, eine Depot-Spritze vorbereiten und geben, einer Patientin helfen, auf den Krankentransport warten." },
      { q: "Was gefällt dir an diesem Beruf, was eher nicht? Schreibe je einen Satz.", l: "Individuelle Antwort, z. B. gefällt: Kontakt mit Menschen, Abwechslung; eher nicht: Stress am Telefon, Computerprobleme, Lohn." }
    ] },

  { id: "h-flaggen", r: "welt", yt: "6SaY9YZsIbo", titel: "Warum sehen sich viele Flaggen so ähnlich?", kanal: "Leon Ziegler", dauer: "Video, ca. 8 Min.",
    kurz: "Kreuze, Streifen, Sterne: Viele Länder haben ähnliche Flaggen. Das Video erklärt, warum.",
    vor: "Zeichne die Flagge deines Herkunftslandes oder der Schweiz. Was bedeuten die Farben?",
    wort: [["die Nationalflagge","die offizielle Fahne eines Landes"],["die Trikolore","eine Flagge mit drei gleich breiten Streifen"],["sich inspirieren lassen","eine Idee von jemand anderem übernehmen"],["die Unabhängigkeit","wenn ein Land frei ist und sich selbst regiert"]],
    mc: [
      { q: "Wie viele Länder gibt es laut Video (Vereinte Nationen) auf der Erde?", o: ["95","195","295"], a: 1 },
      { q: "Welches Land hat eine der ältesten Flaggen und gab Skandinavien das «Kreuz des Nordens»?", o: ["Dänemark","Italien","Brasilien"], a: 0 },
      { q: "Welche Farbe fehlt in fast allen Nationalflaggen?", o: ["Rot","Grün","Lila"], a: 2 }
    ],
    rf: [
      { s: "Eine Trikolore hat drei Streifen.", a: true },
      { s: "Die Flaggen von Australien und Neuseeland sehen sehr verschieden aus.", a: false, x: "Sie sind sich so ähnlich, dass man sie leicht verwechselt." }
    ],
    offen: [
      { q: "Wozu ist eine Nationalflagge da? Erkläre mit den Worten aus dem Video.", l: "Sie soll die Identität des Landes zeigen und das Land und seine Bewohner nach aussen vertreten, möglichst einfach und leicht verständlich." },
      { q: "Nenne zwei Gründe, warum sich Flaggen ähneln.", l: "Z. B. gemeinsame Geschichte, ein Land hat eine Flagge als Vorbild genommen (z. B. Niederlande → Russland), Kolonialismus, gemeinsame Werte oder Bewegungen (panafrikanische Farben), Zufall." }
    ] },

  { id: "h-eauto", r: "motor", yt: "ep5hKbPzC94", titel: "Elektroauto oder Verbrenner? Ein Vergleich", kanal: "ADAC · Unter Strom", dauer: "Video, ca. 6 Min.",
    kurz: "Marie vom ADAC fährt beide Autos und erklärt die Unterschiede: Laden, Starten, Geräusche, Reichweite.",
    vor: "Würdest du später lieber ein Elektroauto oder ein Benzinauto fahren? Warum?",
    wort: [["der Verbrenner","Auto mit Benzin- oder Dieselmotor"],["die Ladesäule","Ort, wo man ein Elektroauto mit Strom lädt"],["die Reichweite","wie weit ein Auto mit einer Ladung oder einem Tank fahren kann"],["das Warngeräusch","ein Ton, der andere auf etwas aufmerksam macht"]],
    mc: [
      { q: "Was muss man bei einem Elektroauto vor der Fahrt tun?", o: ["Das Ladekabel entfernen","Öl nachfüllen","Die Kupplung wechseln"], a: 0 },
      { q: "Womit ist ein Elektroauto beim Fahren vergleichbar?", o: ["Mit einem Fahrrad","Mit einem Auto mit Automatikgetriebe","Mit einem Lastwagen"], a: 1 },
      { q: "Warum haben neue Elektroautos ein künstliches Warngeräusch?", o: ["Damit Musik lauter klingt","Weil sie bei kleiner Geschwindigkeit fast nichts hören lassen","Weil es das Gesetz für Velos verlangt"], a: 1 }
    ],
    rf: [
      { s: "Ein Elektroauto kann man auch zu Hause laden.", a: true },
      { s: "Laut Video muss man das Autofahren für ein Elektroauto ganz neu lernen.", a: false, x: "Das Fahren ist nicht gross anders als mit einem Automatikauto." }
    ],
    offen: [
      { q: "Nenne zwei Vorteile des Elektroautos aus dem Video.", l: "Z. B. kein Weg zur Tankstelle, Vorheizen per App (kein Eiskratzen), leise und ohne Vibrationen, volles Drehmoment vom Stand weg (spritzig), Bremsenergie wird zurückgewonnen." },
      { q: "Was ist auf langen Strecken mit einem Elektroauto anders?", l: "Man muss Ladestopps planen und mehr Zeit einrechnen, weil Schnellladen länger dauert als Tanken." }
    ] },

  { id: "h-formel1", r: "motor", yt: "j_H--ZQr7pI", titel: "Einfach erklärt: Die Formel 1", kanal: "SPOOVE", dauer: "Video, ca. 4 Min.",
    kurz: "Punkte, Qualifying, Reifen und Flaggen: die wichtigsten Regeln der Formel 1 in vier Minuten. Achtung: Das Video ist von 2022, einige Zahlen haben sich seither geändert.",
    vor: "Kennst du ein Formel-1-Team oder einen Fahrer? Was weisst du darüber?",
    wort: [["der Rennstall","ein Team im Motorsport"],["die Startaufstellung","die Reihenfolge der Autos beim Start"],["die Pole-Position","der erste Startplatz ganz vorne"],["die Boxengasse","Strasse neben der Strecke, wo die Teams die Reifen wechseln"]],
    mc: [
      { q: "Wie viele Punkte bekommt der Sieger eines Rennens?", o: ["10","18","25"], a: 2 },
      { q: "Wofür ist das Qualifying da?", o: ["Es bestimmt die Startaufstellung","Es bestimmt den Weltmeister","Es testet das Wetter"], a: 0 },
      { q: "Was bedeutet die schwarz-weiss karierte Flagge?", o: ["Gefahr auf der Strecke","Zieldurchfahrt","Überholen verboten"], a: 1 }
    ],
    rf: [
      { s: "Jedes Team stellt zwei Fahrer.", a: true },
      { s: "Weiche Reifen halten am längsten.", a: false, x: "Weiche Reifen sind schneller, nutzen sich aber schneller ab. Harte halten länger." }
    ],
    offen: [
      { q: "Was muss man bei einer gelben Flagge tun?", l: "Langsamer fahren und nicht überholen, weil es eine Gefahr gibt, z. B. einen Unfall oder Teile auf der Strecke." },
      { q: "Erkläre in einem Satz, wie man Weltmeister wird.", l: "Wer über die ganze Saison die meisten Punkte sammelt, wird Weltmeister." }
    ] },

  { id: "h-motorrad", r: "motor", yt: "xGBC67f8yNY", titel: "Mit 16 aufs Motorrad: der A1-Ausweis in der Schweiz", kanal: "1000PS", dauer: "Video, ca. 13 Min.",
    kurz: "In der Schweiz darf man schon mit 16 ein 125er-Motorrad fahren. Ein Reporter fragt auf einer Kartbahn in der Westschweiz nach. Hinweis: Im Video wird teilweise mit Akzent gesprochen, die Tonqualität ist nicht überall gut.",
    vor: "Ab welchem Alter darf man in der Schweiz Töffli, Roller oder Motorrad fahren? Was weisst du schon?",
    wort: [["die 125er","Motorrad mit höchstens 125 Kubikzentimetern Hubraum"],["die Landstrasse","Strasse ausserhalb von Dörfern und Städten"],["überhöht","viel zu hoch"],["die Versicherung","man bezahlt jedes Jahr Geld, damit bei einem Unfall der Schaden bezahlt wird"]],
    mc: [
      { q: "Ab welchem Alter darf man in der Schweiz eine 125er fahren?", o: ["Ab 14","Ab 16","Ab 21"], a: 1 },
      { q: "Wo passieren laut Video die meisten Motorradunfälle?", o: ["Auf der Landstrasse","Im Dorf","Auf dem Parkplatz"], a: 0 },
      { q: "Wie viel Benzin braucht eine 125er laut Video etwa auf 100 Kilometer?", o: ["Etwa 2,3 Liter","Etwa 8 Liter","Etwa 15 Liter"], a: 0 }
    ],
    rf: [
      { s: "Viele Motorradunfälle haben mit zu hoher Geschwindigkeit zu tun.", a: true },
      { s: "Die Versicherung für eine 125er ist laut Video teurer als für ein altes Auto.", a: false, x: "Sie ist viel günstiger (136 Franken statt 721 Franken im Beispiel)." }
    ],
    offen: [
      { q: "Nenne zwei Gründe aus dem Video, die für eine 125er sprechen.", l: "Z. B. Spass, sparsam (wenig Benzin), günstige Versicherung, schmal und flink im Verkehr, gute Vorbereitung auf grössere Motorräder, gute Bremsen mit ABS." },
      { q: "Wie kann man laut Video das Risiko beim Motorradfahren kleiner machen?", l: "Die Geschwindigkeit den Verhältnissen anpassen und auf Landstrassen besonders vorsichtig fahren." }
    ] },

  { id: "h-gta-start", r: "motor", yt: "uBnjVdLIXmc", titel: "GTA 6: Ausnahmezustand vor dem Start", kanal: "tagesschau", dauer: "Video, ca. 3 Min.",
    kurz: "Kurz vor dem Start von GTA 6 im November 2026: Fans warten ungeduldig, Fachleute erwarten einen Ausnahmezustand.",
    vor: "Hast du schon einmal sehr lange auf ein Spiel, einen Film oder ein Konzert gewartet? Wie war das?",
    wort: [["vorbestellen","etwas kaufen, bevor es erscheint"],["verschieben","einen Termin später machen"],["die Vorfreude","Freude auf etwas, das bald kommt"],["die Krankmeldung","man meldet dem Arbeitgeber, dass man krank ist"]],
    mc: [
      { q: "Wer sind die Hauptfiguren in GTA 6?", o: ["Ein Paar, das kriminelle Aufträge erledigt","Zwei Polizisten","Eine Fussballmannschaft"], a: 0 },
      { q: "Ab welchem Alter ist GTA 6 freigegeben?", o: ["Ab 12","Ab 16","Ab 18"], a: 2 },
      { q: "Was ist mit «GTA-Grippe» gemeint?", o: ["Eine neue Krankheit","Leute nehmen frei oder melden sich krank, um zu spielen","Ein Virus im Spiel"], a: 1 }
    ],
    rf: [
      { s: "Der Termin für die Veröffentlichung wurde mehrmals verschoben.", a: true },
      { s: "Laut Sony wurde GTA 6 in ihrem Store kaum vorbestellt.", a: false, x: "Es soll das am häufigsten vorbestellte Spiel aller Zeiten in ihrem Online-Store sein." }
    ],
    offen: [
      { q: "Was erzählt der Fan Felice über GTA Online?", l: "Er hat dort vor zwölf Jahren seinen besten Freund kennengelernt." },
      { q: "Ist es eine gute Idee, sich krank zu melden, um ein Spiel zu spielen? Begründe.", l: "Individuelle Antwort, z. B. nein: unehrlich, Vertrauen beim Arbeitgeber geht verloren, kann Folgen haben; besser Ferien nehmen." }
    ] },

  { id: "h-gta-rekorde", r: "motor", yt: "0Ktdna4omzo", titel: "GTA 6: Bricht das Spiel alle Rekorde?", kanal: "tagesschau", dauer: "Video, ca. 8 Min.",
    kurz: "Am Starttag von GTA 6 spricht die Tagesschau mit dem Gaming-Journalisten Elias Alaoui über Kosten, Kritik und Rekorde.",
    vor: "Was glaubst du: Wie viel kostet es, ein grosses Videospiel zu entwickeln? Schätze.",
    wort: [["der Entwickler / die Entwicklerin","Person, die ein Spiel programmiert und gestaltet"],["die Bewertung","Urteil, wie gut etwas ist, z. B. mit Punkten"],["der Vorgänger","der Teil, der vorher erschienen ist"],["die Gewerkschaft","Verein, der sich für die Rechte von Arbeitnehmenden einsetzt"]],
    mc: [
      { q: "Wie viele Jahre liegen zwischen GTA 5 und GTA 6?", o: ["5 Jahre","13 Jahre","20 Jahre"], a: 1 },
      { q: "Wie viel hat die Entwicklung laut Fachleuten gekostet?", o: ["Mehr als eine Milliarde US-Dollar","Etwa 1 Million Dollar","Nichts, es war gratis"], a: 0 },
      { q: "Wie viele Punkte bekam das Spiel auf der Plattform Metacritic?", o: ["59 von 100","79 von 100","99 von 100"], a: 2 }
    ],
    rf: [
      { s: "Etwa 4700 Menschen haben an GTA 6 gearbeitet.", a: true },
      { s: "GTA 6 erschien zum Start auch für den PC.", a: false, x: "Zum Start gab es das Spiel nur für Xbox und PlayStation. Wann die PC-Version kommt, ist noch offen." }
    ],
    offen: [
      { q: "Was ist laut Elias die grösste Neuerung in GTA 6?", l: "Das Duo Lucia und Jason: Zwischen den beiden spürt man Wärme, das ist eine neue Dynamik für die Reihe." },
      { q: "Wie hat Rockstar Werbung für das Spiel gemacht?", l: "Mit grossen Plakaten in Städten, z. B. in Deutschland, London, New York (Times Square) und Miami. Die Spielwelt wurde in die Realität gebracht." }
    ] },

  { id: "h-gta-test", r: "motor", yt: "jPrEMyrWoTc", titel: "GTA 6: Ist das Spiel 80 Euro wert?", kanal: "PULS 24", dauer: "Video, ca. 7 Min.",
    kurz: "Ein Gaming-Journalist aus Österreich hat GTA 6 getestet. Er spricht über Grafik, Download, Preis und Spielzeit.",
    vor: "Wie viel Geld würdest du für ein Videospiel höchstens bezahlen? Warum?",
    wort: [["der Download-Code","ein Code, mit dem man ein Spiel aus dem Internet herunterlädt"],["die Disc","Scheibe (wie eine DVD), auf der früher Spiele verkauft wurden"],["die Nebenmission","eine zusätzliche Aufgabe neben der Hauptgeschichte"],["der Hype","grosse Begeisterung, über die alle reden"]],
    mc: [
      { q: "Was bekommt man im Geschäft, wenn man GTA 6 kauft?", o: ["Eine Disc","Nur einen Download-Code","Ein Buch"], a: 1 },
      { q: "Wie gross ist der Download laut Video?", o: ["12 GB","212 GB","2000 GB"], a: 1 },
      { q: "Wie lange dauert die Hauptgeschichte mindestens?", o: ["5 Stunden","50 Stunden","500 Stunden"], a: 1 }
    ],
    rf: [
      { s: "Der Journalist sagt, GTA 6 ist kein Spiel für Kinder.", a: true },
      { s: "Das Spiel ist laut Journalist sehr schwierig und nur für Profis.", a: false, x: "Es ist nicht schwierig und richtet sich an viele Personen." }
    ],
    offen: [
      { q: "Was macht das Spiel laut dem Journalisten so gut? Nenne zwei Punkte.", l: "Das Gameplay und die technische Umsetzung, viel Liebe zum Detail, jeder Ort ist einzigartig gestaltet, man entdeckt dauernd Neues, es gibt viel zu tun." },
      { q: "Warum gibt es keine Disc mehr? Und warum kritisieren das manche Leute?", l: "Der Download ist mit 212 GB sehr gross, das hätte viele Discs gebraucht. Kritik: Man kann das Spiel nicht weitergeben oder weiterverkaufen." }
    ] }
];

const S = {
"h-mpa-zug": {
  2: { vor: "Was ist dir an einem Arbeitsplatz wichtig: Lohn, Arbeitszeiten, Team oder Weiterbildung? Ordne nach Wichtigkeit.",
    wort: [["faszinieren","sehr interessieren, begeistern"],["der Umgang mit","wie man mit jemandem umgeht und spricht"],["abwechslungsreich","nicht immer gleich, mit vielen verschiedenen Aufgaben"],["profitieren von","einen Nutzen oder Vorteil von etwas haben"],["das Klima (im Team)","die Stimmung, wie man miteinander auskommt"]],
    mc: [
      { q: "Warum arbeitet die MPA im Zuger Kantonsspital?", o: ["Weil die Arbeit im Spital sie schon immer fasziniert hat","Weil es nahe bei ihrer Wohnung ist","Weil sie dort am meisten verdient","Weil sie keine andere Stelle gefunden hat"], a: 0 },
      { q: "Welche Arbeitszeiten nennt sie?", o: ["Nachtschichten und Wochenenddienst","Höchstens bis 17 Uhr, kein Wochenende, keine Nachtschichten","Nur am Wochenende","Nur am Nachmittag"], a: 1 },
      { q: "Von wem kann man laut Video im Spital etwas lernen?", o: ["Nur von den Ärzten","Von Ärzten, Hebammen und der Pflege","Nur aus Büchern","Von den Patientinnen und Patienten am Telefon"], a: 1 },
      { q: "Was hat sie selbst schon besucht?", o: ["Einen Sprachkurs in England","Einen internen Kurs für Führungspersonen","Eine Kochschule","Einen Fahrkurs"], a: 1 }
    ],
    rf: [
      { s: "Die Mitarbeitenden haben laut Video Freude am Beruf und am Umgang mit den Patientinnen und Patienten.", a: true },
      { s: "Das Spital unterstützt Weiterbildungen nur sehr wenig.", a: false, x: "Weiterbildungen werden sehr grosszügig unterstützt." },
      { s: "Zwischen Ärzten, Angestellten und MPAs herrscht laut Video ein gutes Klima.", a: true }
    ],
    offen: [
      { q: "Was meint sie mit dem Satz: «Man wird gefördert, aber auch gefordert»?", l: "Man bekommt Unterstützung, um sich weiterzuentwickeln (z. B. Weiterbildungen), aber man muss auch etwas leisten und Verantwortung übernehmen." },
      { q: "Beschreibe das Team im Zuger Kantonsspital mit drei Adjektiven aus dem Video.", l: "Z. B. freundlich, cool, familiär (gutes Klima, guter Draht zueinander)." }
    ] },
  3: { vor: "Ein Video eines Arbeitgebers ist auch Werbung. Woran erkennt man das? Woran sollte man denken, wenn man es anschaut?",
    wort: [["ausschliesslich","nur, ohne Ausnahme"],["in Anspruch nehmen","ein Angebot nutzen"],["einen guten Draht zueinander haben","sich gut verstehen"],["die Führungsperson","jemand, der ein Team leitet"],["das Arbeitgebervideo","Film, mit dem eine Firma neue Mitarbeitende sucht"]],
    mc: [
      { q: "Für wen ist das Video vor allem gemacht?", o: ["Für Patientinnen und Patienten","Für Personen, die eine neue Stelle suchen","Für Kinder in der Primarschule","Für Ärzte aus dem Ausland"], a: 1 },
      { q: "Welche Aussage über die Leute im Spital macht die MPA?", o: ["Es arbeiten ausschliesslich freundliche Menschen dort","Viele sind unfreundlich","Man sieht sich kaum","Alle arbeiten nur nachts"], a: 0 },
      { q: "Was erwartet laut Video neue Mitarbeitende?", o: ["Ein cooles Team und abwechslungsreiche Aufgaben","Viel Arbeit allein im Labor","Ein hoher Bonus","Ein eigenes Büro"], a: 0 },
      { q: "Warum erwähnt sie, dass sie junge Mutter ist?", o: ["Um zu zeigen, dass Familie und Beruf dort gut zusammenpassen","Weil ihr Kind auch im Spital arbeitet","Weil sie bald aufhört","Weil Mütter mehr Lohn bekommen"], a: 0 }
    ],
    rf: [
      { s: "Die MPA spricht im Video auch über Nachteile der Stelle.", a: false, x: "Sie nennt nur Vorteile, das Video ist Werbung für den Arbeitgeber." },
      { s: "Sie hat schon selbst von einer Weiterbildung profitiert.", a: true },
      { s: "Laut Video ist die Zusammenarbeit zwischen den Abteilungen für sie ein Grund, im Spital zu arbeiten.", a: true },
      { s: "Sie sagt, dass die Arbeit jeden Tag gleich ist.", a: false, x: "Sie sagt, die Arbeit ist sehr abwechslungsreich und spannend." }
    ],
    offen: [
      { q: "Das Video zeigt nur Vorteile. Welche Fragen würdest du der MPA stellen, um ein vollständigeres Bild zu bekommen? Schreibe zwei Fragen.", l: "Z. B. Was ist an deiner Arbeit anstrengend? Wie viel Stress gibt es am Empfang? Wie hoch ist der Lohn? Wie viele Lernende gibt es?" },
      { q: "Vergleiche die Arbeitsbedingungen im Video mit einem Beruf, der Nachtschichten hat (z. B. Pflege). Was sind Vor- und Nachteile?", l: "MPA im Spital (laut Video): regelmässige Arbeitszeiten, gut für Familie. Pflege: Schichtarbeit, Nacht- und Wochenenddienst, dafür evtl. Zuschläge und Arbeit direkt am Patientenbett." },
      { q: "Würde dich dieses Video überzeugen, dich zu bewerben? Begründe mit zwei Argumenten.", l: "Individuelle Stellungnahme mit Bezug zum Video (Arbeitszeiten, Team, Weiterbildung) und kritischem Blick (Werbung, nur Vorteile)." }
    ] }
},
"h-mfa-alltag": {
  2: { vor: "Welche Situationen in einer Arztpraxis oder einem Spital können stressig sein? Nenne drei.",
    wort: [["die Ambulanz","Ort, wo Patienten behandelt werden, ohne über Nacht zu bleiben"],["der Notfall","eine gefährliche Situation, in der man schnell helfen muss"],["die Überweisung","ein Schreiben, mit dem ein Arzt einen Patienten zu einem anderen schickt"],["sich übergeben","erbrechen"],["netto","Lohn, der nach allen Abzügen übrig bleibt"]],
    mc: [
      { q: "Wofür trägt Melli ein kleines Gerät (PNA) bei sich?", o: ["Um Musik zu hören","Um im Notfall Hilfe zu holen","Um Termine zu speichern","Um die Zeit zu messen"], a: 1 },
      { q: "Wie organisieren sich die Kolleginnen am Morgen?", o: ["Sie wechseln sich ab bei Anmeldung und Telefon","Melli macht immer das Telefon","Der Arzt entscheidet alles","Alle sitzen im Labor"], a: 0 },
      { q: "Wie oft kommt die Patientin für die Depot-Spritze?", o: ["Jeden Tag","Jede Woche","Alle vier Wochen","Einmal im Jahr"], a: 2 },
      { q: "Warum bleibt Melli lieber in der Klinik als in einer Praxis?", o: ["Weil man in der Praxis weniger verdient","Weil die Praxis zu weit weg ist","Weil sie in der Praxis keine Kollegen hat","Weil es in der Praxis keine Computer gibt"], a: 0 }
    ],
    rf: [
      { s: "Melli hat ihr Auto gekauft, damit sie einen Pferdeanhänger ziehen kann.", a: true },
      { s: "Der Krankentransport kam sofort.", a: false, x: "Die Patientin musste lange warten, weil Transporte ohne Notfall nacheinander gefahren werden." },
      { s: "Melli arbeitet normalerweise 38,5 Stunden pro Woche.", a: true }
    ],
    offen: [
      { q: "Was passiert mit der Patientin, die für die Spritze kam?", l: "Sie bekam die Spritze, danach ging es ihr nicht gut und sie musste sich übergeben. Sie wurde im Labor betreut und wartete lange auf den Krankentransport, der sie ins Heim zurückbrachte." },
      { q: "Wie nutzt Melli ihre Überstunden?", l: "Sie kann damit einen Tag freinehmen oder früher nach Hause gehen." }
    ] },
  3: { vor: "Ist ein Beruf nur dann gut, wenn er gut bezahlt ist? Was zählt sonst noch?",
    wort: [["finanzieren","etwas in Raten bezahlen, oft mit einem Kredit"],["die psychiatrische Institutsambulanz","Ort, wo Menschen mit psychischen Krankheiten ambulant behandelt werden"],["überfordert sein","zu viel auf einmal haben und es nicht schaffen"],["sich lohnen","sich auszahlen, einen Nutzen bringen"],["vergleichen","schauen, was gleich und was anders ist"],["das Gefälle","ein Unterschied, z. B. beim Lohn"]],
    mc: [
      { q: "Welche Aussage beschreibt Mellis Arbeitsalltag am besten?", o: ["Die Abläufe sind jeden Tag ähnlich, aber die Patienten sind verschieden","Jeder Tag ist völlig anders","Sie arbeitet nur am Computer","Sie hat keinen Kontakt zu Patienten"], a: 0 },
      { q: "Wie reagieren manche Anrufende, wenn ein Termin verschoben werden muss?", o: ["Sie bedanken sich immer","Sie werden oft wütend oder legen auf","Sie schicken Blumen","Sie kommen trotzdem"], a: 1 },
      { q: "Welche Zahl nennt Melli für den Lohn von Bekannten in Praxen?", o: ["Etwa 600 Euro netto","Etwa 1600 Euro netto","Etwa 4600 Euro netto","Etwa 16 000 Euro netto"], a: 1 },
      { q: "Was ist Mellis Fazit am Schluss?", o: ["Der Beruf lohnt sich in der Klinik, in der Praxis eher nicht","Der Beruf lohnt sich nirgends","Sie will sofort den Beruf wechseln","Sie verdient mehr als alle Freunde"], a: 0 }
    ],
    rf: [
      { s: "In der Ambulanz werden Menschen mit psychischen Krankheiten behandelt, zum Beispiel mit Depression oder ADHS.", a: true },
      { s: "Melli hat ihre Ausbildung in einer anderen Stadt gemacht.", a: false, x: "Sie hat die Ausbildung schon dort gemacht, wo sie jetzt arbeitet." },
      { s: "Melli reitet seit ihrem siebten Lebensjahr, mit einer Pause von drei Jahren.", a: true },
      { s: "Melli findet, dass ihr Lohn im Vergleich mit anderen Berufen eher tief ist.", a: true }
    ],
    offen: [
      { q: "In Deutschland heisst der Beruf «Medizinische Fachangestellte», in der Schweiz «Medizinische Praxisassistentin». Welche Aufgaben aus dem Video würde auch eine MPA in der Schweiz machen? Nenne drei.", l: "Z. B. Patienten empfangen und aufnehmen, Telefon und Termine, Spritzen vorbereiten und geben, Labor, Betreuung bei Notfällen, Administration (Transportschein)." },
      { q: "Melli sagt, der Beruf lohnt sich für sie, weil sie Hobby und Arbeit gut verbinden kann. Erkläre, was sie damit meint.", l: "Ihre Arbeitszeiten (38,5 Std., Überstunden abbauen, früher gehen) lassen ihr Zeit für ihr Pferd; der Lohn reicht, weil sie bei den Eltern wohnt und keine Miete zahlt." },
      { q: "Welche Eigenschaften braucht man laut dem Video für diesen Beruf? Begründe mit Situationen aus dem Film.", l: "Z. B. Geduld (Computerprobleme), Ruhe und Freundlichkeit (wütende Anrufer), Einfühlungsvermögen (kranke Patientin), Teamarbeit (Wechsel an der Anmeldung), Belastbarkeit (Notfälle)." }
    ] }
},
"h-flaggen": {
  2: { vor: "Kennst du zwei Länder mit sehr ähnlichen Flaggen? Welche?",
    wort: [["die Flaggenkunde","Wissenschaft, die sich mit Flaggen beschäftigt (Fachwort: Vexillologie)"],["die Kreuzzüge","Kriegszüge europäischer Christen im Mittelalter"],["übernehmen","etwas von jemand anderem nehmen und selbst brauchen"],["der Kolonialismus","Zeit, in der europäische Länder andere Länder eroberten und beherrschten"],["die Hemisphäre","eine Hälfte der Erdkugel, z. B. die Südhalbkugel"]],
    mc: [
      { q: "Was macht laut Video die Identität einer Nation aus?", o: ["Nur die Sprache","Geschichte, Kultur und die Bewohnerinnen und Bewohner","Die Grösse des Landes","Das Wetter"], a: 1 },
      { q: "Welche Flagge diente Zar Peter dem Grossen als Vorbild für Russland?", o: ["Die französische","Die niederländische","Die dänische","Die britische"], a: 1 },
      { q: "Warum haben Australien und Neuseeland das «Kreuz des Südens» in der Flagge?", o: ["Weil man dieses Sternbild nur auf der Südhalbkugel sieht","Weil sie es von Dänemark übernommen haben","Weil es Glück bringt","Weil es billig ist"], a: 0 },
      { q: "Welche Farben gelten als panafrikanische Farben?", o: ["Blau, Weiss, Rot","Grün, Gelb, Rot","Schwarz, Weiss, Lila","Orange, Blau, Grau"], a: 1 }
    ],
    rf: [
      { s: "Die Flagge Islands erinnert an die dänische, weil Island bis 1944 zu Dänemark gehörte.", a: true },
      { s: "Die französische Trikolore entstand während der Französischen Revolution.", a: true },
      { s: "Neuseeland hat 2015 eine neue Flagge eingeführt.", a: false, x: "Die Bevölkerung entschied sich gegen die neuen Vorschläge und behielt die alte Flagge." }
    ],
    offen: [
      { q: "Warum wurde Äthiopien ein Vorbild für viele afrikanische Flaggen?", l: "Äthiopien war nur kurz während des Zweiten Weltkriegs unter Kolonialherrschaft. Seine Farben Grün, Gelb und Rot wurden zum Zeichen für Unabhängigkeit und Zusammengehörigkeit." },
      { q: "Nenne zwei Flaggenpaare, die sich laut Video nur zufällig ähneln.", l: "Niederlande und Luxemburg, Rumänien und Tschad, Monaco und Indonesien (und umgekehrt Polen)." }
    ] },
  3: { vor: "Was passiert mit der Flagge, wenn ein Land unabhängig wird oder seine Regierung wechselt? Kennst du ein Beispiel?",
    wort: [["repräsentieren","vertreten, für etwas stehen"],["die Überlagerung","wenn mehrere Dinge übereinander liegen"],["kurzlebig","nur kurze Zeit bestehend"],["die Auflösung","das Ende eines Zusammenschlusses"],["der Staatenbund","Zusammenschluss mehrerer Staaten"],["panarabisch","alle arabischen Länder betreffend"]],
    mc: [
      { q: "Warum haben Kolumbien, Venezuela und Ecuador ähnliche Flaggen?", o: ["Sie gehörten bis 1830 zu einem gemeinsamen Staat","Sie haben einen Wettbewerb gemacht","Sie liegen in Afrika","Sie wurden von Dänemark erobert"], a: 0 },
      { q: "Woraus besteht die britische Flagge (Union Jack)?", o: ["Aus den Flaggen von England, Schottland und Nordirland","Aus den Farben von Paris","Aus dem Kreuz des Südens","Aus der Flagge von Wales und Irland"], a: 0 },
      { q: "Wie entstehen laut Video die panarabischen Farben aus den panafrikanischen?", o: ["Man tauscht Gelb durch Weiss aus","Man fügt Lila hinzu","Man dreht die Flagge um 180 Grad","Man nimmt nur Blau"], a: 0 },
      { q: "Welches Symbol aus dem Osmanischen Reich findet man bis heute in vielen Flaggen?", o: ["Den Halbmond mit Stern","Das Kreuz des Nordens","Die Maisonne","Den Adler"], a: 0 }
    ],
    rf: [
      { s: "Die Flagge der Niederlande stammt aus dem 16. Jahrhundert.", a: true },
      { s: "Die Farben Weiss, Blau und Rot werden auch panslawische Farben genannt.", a: true },
      { s: "Kanada hat den Union Jack bis heute in seiner Flagge.", a: false, x: "Kanada hat den Union Jack aus seiner Flagge gestrichen." },
      { s: "Die Sonne in den Flaggen von Argentinien und Uruguay stammt aus der Mythologie der Inka.", a: true }
    ],
    offen: [
      { q: "Erkläre an zwei Beispielen aus dem Video, wie Geschichte (z. B. Eroberung, Unabhängigkeit) Flaggen geprägt hat.", l: "Z. B. Kolonialismus: Union Jack in Commonwealth-Flaggen; Unabhängigkeit: panafrikanische Farben nach Äthiopien; gemeinsame Staaten: Gran Colombia, Zentralamerikanische Föderation; Osmanisches Reich: Halbmond." },
      { q: "Das Video sagt, Flaggen sollen ein Land «möglichst simpel» darstellen. Warum ist Einfachheit bei einer Flagge wichtig?", l: "Man soll sie schnell erkennen, leicht zeichnen und herstellen können, auch aus der Ferne oder klein (z. B. auf Schiffen, an Sportanlässen)." },
      { q: "Entwirf in Worten eine neue Flagge für eure Klasse. Welche Farben und Symbole wählst du, und wofür stehen sie?", l: "Individueller Entwurf mit Begründung der Farben und Symbole (z. B. Herkunftsländer, gemeinsame Werte), möglichst einfach." }
    ] }
},
"h-eauto": {
  2: { vor: "Was weisst du über das Laden eines Elektroautos? Wo und wie lange?",
    wort: [["die Standheizung","Heizung, die das Auto schon vor der Fahrt warm macht"],["das Schaltgetriebe","man wechselt die Gänge selbst mit Kupplung und Schalthebel"],["die Kupplung","Pedal, das man beim Schalten drückt"],["die Rekuperation","Bremsenergie wird zurück in Strom verwandelt"],["serienmässig","schon beim Kauf eingebaut, ohne Aufpreis"]],
    mc: [
      { q: "In welcher Reihenfolge zieht man das Ladekabel ab?", o: ["Zuerst am Auto, dann an der Ladesäule","Zuerst an der Ladesäule, dann am Auto","Egal","Man lässt es immer stecken"], a: 0 },
      { q: "Wie viel kostet eine Standheizung beim Verbrenner etwa extra?", o: ["Etwa 150 Euro","Etwa 1500 Euro","Etwa 15 000 Euro","Gar nichts"], a: 1 },
      { q: "Bis zu welcher Geschwindigkeit erzeugen Elektroautos ein Warngeräusch?", o: ["Bis 20 km/h","Bis 50 km/h","Bis 80 km/h","Bis 120 km/h"], a: 0 },
      { q: "Was passiert bei der Rekuperation?", o: ["Das Auto wird lauter","Beim Bremsen wird Energie in der Batterie gespeichert","Der Motor wird gekühlt","Die Reifen werden aufgepumpt"], a: 1 }
    ],
    rf: [
      { s: "Bei einem Elektroauto kommt die warme Luft schneller, weil die Heizung elektrisch ist.", a: true },
      { s: "Alle Elektroautos starten genau gleich.", a: false, x: "Bei einigen reicht das Bremspedal, andere haben einen Startknopf." },
      { s: "Das Warngeräusch hilft besonders Menschen mit Sehbehinderung und Kindern.", a: true }
    ],
    offen: [
      { q: "Beschreibe, wie man ein Auto mit Schaltgetriebe startet.", l: "Kupplung drücken, Schlüssel ins Zündschloss stecken, Zündung anmachen, Gang einlegen, losfahren." },
      { q: "Für wen ist ein Elektroauto laut Video gut geeignet?", l: "Für Leute, die nicht regelmässig mehr als 300 km pro Tag fahren." }
    ] },
  3: { vor: "Die Schweiz will weniger CO₂ ausstossen. Sind Elektroautos die Lösung oder braucht es mehr (z. B. ÖV, Velo)?",
    wort: [["das Drehmoment","die Kraft, mit der ein Motor die Räder dreht"],["subjektiv","nach eigenem Gefühl, nicht gemessen"],["zeitoptimiert","so, dass man möglichst wenig Zeit braucht"],["unverhältnismässig","viel mehr als nötig oder sinnvoll"],["die Bedenken","Sorgen, Zweifel"]],
    mc: [
      { q: "Warum fühlt sich ein Elektroauto leiser an, obwohl die gemessene Lautstärke im Auto ähnlich ist?", o: ["Weil es keine Motorvibrationen und kein Brummen gibt","Weil es kein Radio hat","Weil die Fenster dicker sind","Weil es langsamer fährt"], a: 0 },
      { q: "Warum fährt sich ein Elektroauto «spritziger»?", o: ["Weil es das volle Drehmoment vom Stand weg hat, ohne Schalten","Weil es leichter ist als ein Velo","Weil es mehr Gänge hat","Weil es Benzin braucht"], a: 0 },
      { q: "Was empfiehlt Marie auf langen Strecken für schnelles Laden?", o: ["Bei etwa 10 % laden und bei 80 % weiterfahren","Immer auf 100 % laden","Nur nachts laden","Nie unter 90 % fahren"], a: 0 },
      { q: "Warum soll man nicht immer bis 100 % laden, wenn man schnell weiter will?", o: ["Weil das letzte Stück sehr lange dauert","Weil die Batterie sonst explodiert","Weil es verboten ist","Weil es gratis ist"], a: 0 }
    ],
    rf: [
      { s: "Seit Juli 2021 müssen neu zugelassene Elektroautos ein akustisches Warnsystem haben.", a: true },
      { s: "Laut Video ist eine E-Auto-Batterie wie ein Benzintank, den man immer ganz füllen sollte.", a: false, x: "Sie ist kein Benzintank, der vollgetankt werden sollte." },
      { s: "Erfahrene E-Mobilisten fahren mit voller Batterie los und laden, wenn sie fast leer ist.", a: true },
      { s: "Viele Navigationssysteme können Ladestopps planen.", a: true }
    ],
    offen: [
      { q: "Vergleiche Elektroauto und Verbrenner in drei Punkten aus dem Video (z. B. Start, Heizung, Reichweite). Schreibe eine kleine Tabelle oder drei Sätze.", l: "Start: Verbrenner mit Schlüssel und Kupplung, E-Auto wie Automatik/Bremspedal oder Startknopf. Heizung: E-Auto elektrisch und vorheizbar, Verbrenner über Motorabwärme. Reichweite/Tanken: Verbrenner tanken schnell, E-Auto Ladestopps planen." },
      { q: "Das Video ist vom ADAC, einem Automobilclub. Ist das Video eher neutral oder eher für das Elektroauto? Begründe.", l: "Individuelle Einschätzung, z. B. eher positiv fürs E-Auto (viele Vorteile, Bedenken «meist unbegründet»), nennt aber auch Nachteile (Reichweite, längeres Laden)." },
      { q: "Würdest du dir als erstes Auto ein Elektroauto kaufen? Begründe mit Argumenten aus dem Video und eigenen Überlegungen (z. B. Preis, Laden zu Hause).", l: "Individuelle Stellungnahme mit Argumenten (Laden zu Hause möglich?, Strecken, Kosten, Umwelt)." }
    ] }
},
"h-formel1": {
  2: { vor: "Was glaubst du: Warum gibt es in der Formel 1 so viele Regeln?",
    wort: [["die Obergrenze","der höchste erlaubte Betrag"],["das freie Training","Trainingsfahrten vor dem Qualifying"],["der Verschleiss","wenn sich etwas durch Gebrauch abnutzt"],["die Mischung (Reifen)","wie weich oder hart ein Reifen ist"],["überrunden","einen langsameren Fahrer, der eine Runde zurück ist, überholen"]],
    mc: [
      { q: "Warum sehen sich die Autos in der Formel 1 auf den ersten Blick ähnlich?", o: ["Weil technische Regeln die Leistung in bestimmten Bereichen festlegen","Weil alle Teams dieselbe Farbe haben","Weil es nur eine Firma gibt","Weil sie aus Holz sind"], a: 0 },
      { q: "Wie viele Punkte bekommt der Zehnte?", o: ["0","1","5","10"], a: 1 },
      { q: "Was passiert am Ende von Q1?", o: ["Die Plätze 16 bis 20 scheiden aus","Alle fahren nach Hause","Der Weltmeister wird bestimmt","Die Reifen werden verboten"], a: 0 },
      { q: "Was bedeutet die blaue Flagge?", o: ["Regen","Man muss den Fahrer hinter sich zum Überrunden vorbeilassen","Die Strecke ist frei","Das Rennen ist abgebrochen"], a: 1 }
    ],
    rf: [
      { s: "Für die Saison 2022 wurde eine Budget-Obergrenze von 140 Millionen Dollar festgelegt.", a: true },
      { s: "Im Rennen muss man mindestens zwei verschiedene Reifenmischungen fahren.", a: true },
      { s: "In der Boxengasse darf man so schnell fahren, wie man will.", a: false, x: "Erlaubt sind je nach Strecke höchstens 60 oder 80 km/h." }
    ],
    offen: [
      { q: "Beschreibe den Ablauf eines Rennwochenendes vom Freitag bis Sonntag.", l: "Freitag: 1. und 2. freies Training. Samstag: 3. freies Training und Qualifying (Q1–Q3) für die Startaufstellung. Sonntag: Rennen." },
      { q: "Was ist der Vorteil und der Nachteil eines weichen Reifens?", l: "Vorteil: mehr Grip, schneller. Nachteil: nutzt sich schneller ab, man muss früher wechseln." }
    ] },
  3: { vor: "Die Formel 1 ändert immer wieder ihre Regeln. Warum ist es wichtig, bei einem Erklärvideo auf das Datum zu achten?",
    wort: [["der Wettbewerber","Teilnehmer in einem Wettkampf"],["annähernd","fast, ungefähr"],["die Konstrukteurswertung","Wertung der Teams (Hersteller der Autos)"],["das Reglement","alle offiziellen Regeln"],["die Session","ein Abschnitt, z. B. ein Training oder das Qualifying"],["das Safety Car","Sicherheitsauto, das die Rennautos bei Gefahr langsam anführt"]],
    mc: [
      { q: "Wie wird der Konstrukteurs-Weltmeister bestimmt?", o: ["Die Punkte beider Fahrer eines Teams werden zusammengezählt","Nur der beste Fahrer zählt","Das schnellste Auto im Training gewinnt","Die Fans stimmen ab"], a: 0 },
      { q: "Wofür gab es laut Video einen zusätzlichen Punkt?", o: ["Für die schnellste Runde, wenn der Fahrer in den Top 10 ist","Für den schönsten Helm","Für den letzten Platz","Für einen Unfall"], a: 0 },
      { q: "Was gilt, wenn das Safety Car auf der Strecke ist?", o: ["Nicht überholen und langsam hinter ihm fahren","Man darf schneller fahren","Alle müssen in die Box","Das Rennen ist sofort beendet"], a: 0 },
      { q: "Wie lange dauert Q3 laut Video?", o: ["18 Minuten","15 Minuten","12 Minuten","60 Minuten"], a: 2 }
    ],
    rf: [
      { s: "Die Regelung mit Q1, Q2 und Q3 gibt es seit 2006.", a: true },
      { s: "Mit Regenreifen darf man laut Reglement das ganze Rennen ohne Boxenstopp fahren.", a: true },
      { s: "Laut Video gibt es zwölf Teams.", a: false, x: "Im Video (2022) sind es zehn Teams. Seit 2026 sind es elf." },
      { s: "Die rote Flagge bedeutet Unterbrechung oder Abbruch.", a: true }
    ],
    offen: [
      { q: "Das Video ist von 2022. Seit 2026 gibt es elf Teams, und den Zusatzpunkt für die schnellste Runde gibt es nicht mehr. Welche Informationen aus dem Video sind dadurch veraltet? Nenne zwei.", l: "Zehn Teams und 20 Fahrer (heute 11 Teams, 22 Fahrer); Zusatzpunkt für die schnellste Runde; evtl. Anzahl Rennen (23) und Budgetzahl 2022." },
      { q: "Erkläre, warum die Reifenwahl ein wichtiger Teil der Taktik ist.", l: "Weiche Reifen sind schnell, nutzen sich aber schnell ab; harte halten länger. Man muss mindestens einmal wechseln und zwei Mischungen fahren, also planen, wann man in die Box kommt." },
      { q: "Die Regeln sollen allen Teams «annähernd gleiche Bedingungen» geben. Gelingt das deiner Meinung nach? Begründe.", l: "Individuelle Stellungnahme, z. B. Budgetgrenze und Technikregeln helfen; trotzdem gibt es grosse Unterschiede bei Geld, Erfahrung und Entwicklung." }
    ] }
},
"h-motorrad": {
  2: { vor: "Motorradfahren ist gefährlicher als Autofahren. Was kann man tun, um sicher zu fahren?",
    wort: [["die Fahrpraxis","Erfahrung, die man beim Fahren sammelt"],["das Adrenalin","Stoff im Körper bei Aufregung oder Gefahr"],["der Personenschaden","wenn bei einem Unfall Menschen verletzt werden"],["sparsam","braucht wenig (z. B. wenig Benzin)"],["das Segment","eine Gruppe von ähnlichen Produkten"]],
    mc: [
      { q: "Wo spielt die Reportage?", o: ["Auf einer Kartbahn in der Westschweiz","In Zürich am Bahnhof","In einer Fahrschule in Deutschland","Auf einer Autobahn"], a: 0 },
      { q: "Wie viel Prozent der Motorradunfälle passieren laut Video auf der Landstrasse?", o: ["Etwa 4 %","Etwa 25 %","Fast 74 %","100 %"], a: 2 },
      { q: "Wie hoch ist im Beispiel die Versicherung für eine 125er pro Jahr?", o: ["36 Franken","136 Franken","721 Franken","1360 Franken"], a: 1 },
      { q: "Was zeigt die Studie aus Melbourne (Australien)?", o: ["Wenn 10 % der Autofahrer auf Motorräder umsteigen, gibt es viel weniger Stau","Motorräder machen mehr Stau","Autos sind schneller","In Australien ist Motorradfahren verboten"], a: 0 }
    ],
    rf: [
      { s: "Fast die Hälfte der Motorradunfälle mit Verletzten hat mit zu hoher Geschwindigkeit zu tun.", a: true },
      { s: "Im Dorf passieren laut Video die meisten Unfälle.", a: false, x: "Im Ortsgebiet sind es nur 4,3 %, auf der Landstrasse 73,9 %." },
      { s: "Das Segment der 125er wächst laut Video ständig.", a: true }
    ],
    offen: [
      { q: "Warum ist eine moderne 125er laut dem Rennfahrer sicherer als ein 50er?", l: "Sie hat grosse Bremsen, ABS und einen effizienteren Motor; sie ist fast ein richtiges Motorrad." },
      { q: "Welche Sorgen haben laut Video viele Mütter und Partnerinnen? Wie antwortet das Video darauf?", l: "Sie haben Angst vor Unfällen. Das Video zeigt mit Statistiken, dass viele Unfälle auf Landstrassen und wegen zu hoher Geschwindigkeit passieren: Wer angepasst fährt, kann das Risiko senken." }
    ] },
  3: { vor: "Wer bezahlt ein Video, in dem Motorräder gezeigt werden? Warum ist das wichtig, wenn man das Video beurteilt?",
    wort: [["zwangsläufig","ohne andere Möglichkeit"],["die Vorstufe","ein Schritt vor dem eigentlichen Ziel"],["das Risiko minimieren","eine Gefahr so klein wie möglich machen"],["die Statistik","Zahlen, die zeigen, wie oft etwas vorkommt"],["einseitig","nur eine Seite oder Meinung zeigend"]],
    mc: [
      { q: "Welche Regel gilt laut Video für grössere Motorräder in der Schweiz?", o: ["Man braucht zwei Jahre Fahrpraxis, bevor man voll starke Motorräder fahren darf","Man darf sofort jedes Motorrad fahren","Nur Profis dürfen Motorrad fahren","Ab 16 darf man jedes Motorrad fahren"], a: 0 },
      { q: "Warum findet ein Yamaha-Mitarbeiter, dass man mit 16 anfangen sollte?", o: ["Man wird selbstständig, und es macht Spass","Weil es billiger als der Bus ist","Weil die Schule es verlangt","Weil Autos verboten werden"], a: 0 },
      { q: "Welchen Verbrauch nennt das Video für die sparsamsten Autos?", o: ["Etwa 2 Liter auf 100 km","Etwa 5 Liter auf 100 km","Etwa 12 Liter auf 100 km","Etwa 20 Liter auf 100 km"], a: 1 },
      { q: "Wie ist das Video insgesamt?", o: ["Es wirbt klar für das Motorradfahren mit 16","Es rät vom Motorradfahren ab","Es ist ein neutraler Nachrichtenbericht","Es geht nur ums Kartfahren"], a: 0 }
    ],
    rf: [
      { s: "Im Video kommen Personen von einem Motorradhersteller zu Wort.", a: true },
      { s: "Das Video sagt, dass Motorradfahren völlig ungefährlich ist.", a: false, x: "Es sagt, es gibt ungefährlichere Hobbys, aber man kann das Risiko senken." },
      { s: "Eine ältere 650er mit ähnlich viel PS wie ein altes Auto ist laut Video günstiger zu versichern als das Auto.", a: true },
      { s: "Laut Video hilft die Erfahrung auf einer 125er später beim Umstieg auf grössere Motorräder.", a: true }
    ],
    offen: [
      { q: "Das Video nennt viele Vorteile. Welche Nachteile oder Gefahren werden kaum besprochen? Nenne mindestens zwei.", l: "Z. B. bei Unfällen ist man ungeschützt, schwere Verletzungen, Wetter (Regen, Kälte), Kosten für Ausrüstung und Kurse, Unerfahrenheit junger Fahrer, Lärm." },
      { q: "Erkläre die Statistik aus dem Video: Was bedeuten 73,9 % und 4,3 %? Was folgt daraus für das eigene Fahren?", l: "73,9 % der Unfälle passieren auf der Landstrasse, nur 4,3 % im Ortsgebiet. Daraus folgt: Auf Landstrassen besonders vorsichtig fahren, Geschwindigkeit anpassen." },
      { q: "Sollen 16-Jährige Motorrad fahren dürfen? Nimm Stellung mit je einem Argument dafür und dagegen.", l: "Individuelle Stellungnahme, z. B. dafür: Selbstständigkeit, früh Erfahrung sammeln, günstig; dagegen: hohes Unfallrisiko, wenig Erfahrung im Verkehr." }
    ] }
},
"h-gta-start": {
  2: { vor: "Warum glaubst du, freuen sich so viele Menschen auf ein einziges Videospiel?",
    wort: [["der Raubüberfall","man nimmt mit Gewalt oder Drohung Geld oder Dinge weg"],["herunterladen (downloaden)","Daten aus dem Internet auf ein Gerät holen"],["die Erwartungshaltung","was man von etwas erwartet"],["der Personaler / die Personalerin","Person in einer Firma, die für das Personal zuständig ist"],["zocken","umgangssprachlich: Videospiele spielen"]],
    mc: [
      { q: "An welche echte Stadt erinnert «Vice City»?", o: ["An Miami","An Berlin","An Zürich","An Paris"], a: 0 },
      { q: "Was konnten die Fans zum Zeitpunkt des Videos schon tun?", o: ["Das Spiel herunterladen, aber noch nicht spielen","Das Spiel schon fertig spielen","Nur den Trailer ansehen","Gar nichts"], a: 0 },
      { q: "Was plant ein Fan in der Woche nach dem Start?", o: ["Eine Woche komplett durchspielen","Gar nicht spielen","Das Spiel verschenken","Nur zehn Minuten pro Tag spielen"], a: 0 },
      { q: "Warum ist GTA 6 erst ab 18?", o: ["Wegen drastischer Gewaltszenen","Weil es zu teuer ist","Weil es zu schwierig ist","Weil es nur auf Englisch ist"], a: 0 }
    ],
    rf: [
      { s: "Im Spiel können sich die Spielerinnen und Spieler eine andere Identität aufbauen.", a: true },
      { s: "Ein Fan sagt, es gebe eine Zeit vor GTA 6 und eine Zeit nach GTA 6.", a: true },
      { s: "Felice sagt, GTA sei nur Herumfahren und Schiessen.", a: false, x: "Er sagt, es ist mehr als das: manchmal einfach die Welt geniessen." }
    ],
    offen: [
      { q: "Was rät eine Fachperson den Personalabteilungen der Firmen? Warum?", l: "Sie sollen sich darauf einstellen, dass am Starttag mehr Krankmeldungen kommen, weil manche Leute spielen wollen («GTA-Grippe»)." },
      { q: "Was bedeutet GTA für Felice ausser Spielen? Erkläre.", l: "Er hat in GTA Online vor zwölf Jahren seinen besten Freund kennengelernt; das Spiel ist für ihn auch Gemeinschaft und Freundschaft." }
    ] },
  3: { vor: "Ein Nachrichtenbeitrag über ein Spiel: Ist das Information oder schon Werbung? Wo liegt die Grenze?",
    wort: [["anfixen","umgangssprachlich: neugierig und süchtig nach mehr machen"],["sprengen","hier: übertreffen, über eine Grenze gehen"],["das Ausmass","wie gross etwas ist"],["der Ausnahmezustand","Situation, in der alles anders ist als normal"],["sich ausleben","tun, was man gerne möchte"]],
    mc: [
      { q: "Was sollen die Szenen aus den Werbetrailern bei den Spielern bewirken?", o: ["Sie sollen sie neugierig und heiss auf das Spiel machen","Sie sollen sie warnen","Sie sollen sie langweilen","Sie sollen den Preis erklären"], a: 0 },
      { q: "Wie beschreibt eine Expertin den Hype um GTA 6?", o: ["So ein Ausmass habe man noch nie gesehen","Er sei kleiner als bei GTA 5","Er sei schon vorbei","Es gebe gar keinen Hype"], a: 0 },
      { q: "Was sagt ein Fan über das Spielen am Stück?", o: ["Er würde gerne drei Tage am Stück spielen, wenn es ginge","Er spielt nie","Er spielt nur mit seinen Eltern","Er spielt nur am Handy"], a: 0 },
      { q: "Welche Rolle spielt Sony im Beitrag?", o: ["Sony nennt GTA 6 das meistvorbestellte Spiel in seinem Online-Store","Sony hat das Spiel entwickelt","Sony verbietet das Spiel","Sony verkauft keine Konsolen mehr"], a: 0 }
    ],
    rf: [
      { s: "Der Beitrag zeigt nur Fans und nennt keine Altersfreigabe.", a: false, x: "Er nennt die Freigabe ab 18 wegen drastischer Gewaltszenen." },
      { s: "Die Hauptfiguren fahren in gestohlenen Autos durch Vice City.", a: true },
      { s: "Gaming-Experten rechnen zum Start mit einem Ausnahmezustand.", a: true },
      { s: "Laut Beitrag kann man sich in GTA 6 nur in einer kleinen Stadt bewegen.", a: false, x: "Es ist eine riesige, abwechslungsreiche Welt." }
    ],
    offen: [
      { q: "Der Beitrag zeigt begeisterte Fans. Welche kritischen Fragen fehlen? Nenne zwei.", l: "Z. B. Gewalt und Jugendschutz, Spielsucht und Zeit, Kosten, Arbeitsbedingungen der Entwickler, Folgen von Krankmeldungen." },
      { q: "Erkläre den Begriff «GTA-Grippe» und beurteile, ob das ein harmloser Spass ist.", l: "Leute nehmen Ferien oder melden sich krank, um zu spielen. Beurteilung: Ferien sind okay; falsche Krankmeldungen sind unehrlich und können arbeitsrechtliche Folgen haben." },
      { q: "Warum macht die Tagesschau überhaupt einen Beitrag über ein Videospiel? Nenne zwei Gründe.", l: "Z. B. es betrifft sehr viele Menschen, es ist ein wirtschaftliches Ereignis (Rekorde, Milliarden), gesellschaftliche Folgen (Krankmeldungen, Jugendschutz)." }
    ] }
},
"h-gta-rekorde": {
  2: { vor: "Was bedeutet es, wenn ein Spiel «schwarze Zahlen schreibt»?",
    wort: [["die Resonanz","die Reaktion, das Echo"],["das Kapital","Geld, mit dem man etwas aufbaut"],["schwarze Zahlen schreiben","Gewinn machen"],["die Konkurrenz","andere Firmen, die ähnliche Produkte verkaufen"],["das Marketing","alles, was eine Firma macht, damit ein Produkt bekannt wird und sich verkauft"]],
    mc: [
      { q: "Was wollen Lucia und Jason im Spiel?", o: ["Ein neues Leben, einen Neuanfang","Polizisten werden","Ein Restaurant eröffnen","Fussballprofis werden"], a: 0 },
      { q: "Welche Nebenbeschäftigungen nennt Elias? ", o: ["Nach Schätzen tauchen, Strassenrennen, Wild jagen","Kochen, Putzen, Waschen","Schule, Hausaufgaben, Prüfungen","Fussball, Tennis, Golf"], a: 0 },
      { q: "Was bedeutet «Grand Theft Auto» übersetzt?", o: ["Schwerer Autodiebstahl","Grosse Autoreise","Schnelles Auto","Teures Auto"], a: 0 },
      { q: "Was taten andere Spielefirmen wegen GTA 6?", o: ["Sie verschoben ihre Spiele","Sie senkten die Preise auf null","Sie kauften Rockstar","Sie machten Werbung für GTA 6"], a: 0 }
    ],
    rf: [
      { s: "Laut Sensor Tower gab es schon vor dem Start 17 Millionen Vorbestellungen.", a: true },
      { s: "Der Vorgänger GTA 5 hat sich knapp 235 Millionen Mal verkauft.", a: true },
      { s: "Elias sagt, GTA 6 sei weniger brutal als frühere Teile.", a: false, x: "Durch den höheren Detailgrad wirkt es noch brutaler und expliziter." }
    ],
    offen: [
      { q: "Warum musste GTA 6 laut Elias «nicht einmal rauskommen, um schwarze Zahlen zu schreiben»?", l: "Die Vorbestellungen brachten schon rund 1,65 Milliarden Dollar ein, mehr als die geschätzten Kosten von etwa einer Milliarde." },
      { q: "Was ist an den Hauptfiguren Lucia und Jason anders als bei früheren GTA-Teilen?", l: "Frühere Hauptfiguren waren rustikal und verbittert, bei Lucia und Jason spürt man Wärme und eine neue Dynamik als Duo." }
    ] },
  3: { vor: "Videospiele werden von tausenden Menschen gemacht. Unter welchen Bedingungen sollten sie arbeiten?",
    wort: [["die Innovationsbereitschaft","der Wille, Neues auszuprobieren"],["exzessiv","übertrieben, viel zu viel"],["der Crunch","Phase mit sehr vielen Überstunden vor dem Abschluss eines Spiels"],["bestreiten","sagen, dass etwas nicht stimmt"],["der Rechtsstreit","Streit vor Gericht"],["das Guerilla-Marketing","überraschende, ungewöhnliche Werbung im öffentlichen Raum"]],
    mc: [
      { q: "Warum ist GTA seit fast drei Jahrzehnten so erfolgreich, laut Elias?", o: ["Wegen der Innovationsbereitschaft: jeder Teil bringt etwas Neues","Weil es keine anderen Spiele gibt","Weil es gratis ist","Weil es für Kinder gemacht ist"], a: 0 },
      { q: "Was war bei GTA 3 neu?", o: ["Eine 3D-Stadt, die man frei begehen konnte","Drei Hauptfiguren","Eine Frau als Hauptfigur","Ein Online-Modus"], a: 0 },
      { q: "Worüber haben sich Entwicklerinnen und Entwickler in der Vergangenheit beschwert?", o: ["Über exzessive Überstunden","Über zu viel Ferien","Über zu hohe Löhne","Über zu wenig Arbeit"], a: 0 },
      { q: "Warum gab es einen Rechtsstreit mit Rockstar Games?", o: ["Rockstar hat 34 Mitarbeitende entlassen, die wohl in einer Gewerkschaft aktiv waren","Wegen eines gestohlenen Autos","Wegen eines Unfalls","Wegen der Spielmusik"], a: 0 }
    ],
    rf: [
      { s: "GTA 5 hatte drei Hauptfiguren, zwischen denen man wechseln konnte.", a: true },
      { s: "Rockstar gibt zu, dass die Entlassungen mit der Gewerkschaft zu tun hatten.", a: false, x: "Das Studio bestreitet das." },
      { s: "Zum Zeitpunkt des Interviews gab es noch kein Urteil im Rechtsstreit.", a: true },
      { s: "Elias glaubt, dass die PC-Version eher früher als später kommt.", a: true }
    ],
    offen: [
      { q: "Erkläre den Begriff «Crunch» und warum er in der Gaming-Branche ein Problem ist.", l: "Crunch sind Phasen mit sehr vielen Überstunden, oft vor dem Abschluss eines Spiels. Problem: Stress, Gesundheit, Familie und Privatleben leiden, Mitarbeitende kündigen." },
      { q: "Wie hat Rockstar laut Elias Werbung gemacht, und warum funktioniert das?", l: "Riesige Plakate in Grossstädten (Times Square, Miami, London, Deutschland): Die fiktive Welt wird in die Realität gebracht, das erzeugt Aufmerksamkeit (Guerilla-Marketing nach dem Vorbild von Plattenlabels)." },
      { q: "Das Spiel bricht Rekorde, aber es gibt auch Kritik (Gewalt, Sexualisierung, Arbeitsbedingungen). Wie sollte man als Kunde damit umgehen? Nimm Stellung.", l: "Individuelle Stellungnahme, z. B. sich informieren, Altersfreigabe beachten, kritisch bleiben, Arbeitsbedingungen ansprechen; oder: Kunst und Kritik trennen." }
    ] }
},
"h-gta-test": {
  2: { vor: "Spiele gibt es heute oft nur noch als Download. Was sind Vor- und Nachteile?",
    wort: [["freigeben","erlauben, dass etwas benutzt werden darf"],["der Knackpunkt","das grösste Problem, der entscheidende Punkt"],["kartografieren","genau aufzeichnen, wie eine Karte"],["anvisieren","als Ziel haben"],["die Ultimate Edition","teurere Spielversion mit zusätzlichen Inhalten"]],
    mc: [
      { q: "Ab wann konnte man das Spiel herunterladen?", o: ["Seit dem 10. November","Erst am Starttag","Schon seit einem Jahr","Gar nicht"], a: 0 },
      { q: "Warum lief der Start ohne Probleme mit den Servern?", o: ["Weil man das Spiel schon vorher herunterladen konnte","Weil niemand spielen wollte","Weil es nur in Österreich erschien","Weil es auf Disc verkauft wurde"], a: 0 },
      { q: "Wie beschreibt der Journalist das Spiel?", o: ["Als moderne Geschichte von Bonnie und Clyde","Als Fussballspiel","Als Lernspiel für Kinder","Als Kochsimulation"], a: 0 },
      { q: "Wie viele Verkäufe sind laut Video für das erste Jahr geplant?", o: ["4 bis 6 Millionen","40 bis 60 Millionen","400 bis 600 Millionen","1 Million"], a: 1 }
    ],
    rf: [
      { s: "Die Entwickler waren für die Recherche monatelang in Amerika unterwegs.", a: true },
      { s: "Die Geschichte ist in fünf Kapitel aufgeteilt.", a: true },
      { s: "Die Ultimate Edition kostet weniger als die Standardversion.", a: false, x: "Sie kostet mehr, fast 100 Euro." }
    ],
    offen: [
      { q: "Wie lange spielt man laut Journalist insgesamt, wenn man auch Nebenmissionen macht?", l: "Etwa 80 bis 100 Stunden (Hauptgeschichte mindestens 50 Stunden, über 100 Nebenmissionen)." },
      { q: "Was bekommt man in der Ultimate Edition zusätzlich?", l: "Zusätzliche Waffen, Figuren und Kleidung im Spiel." }
    ] },
  3: { vor: "Ein Testbericht soll ein Spiel beurteilen. Was macht einen guten, fairen Test aus?",
    wort: [["sensationell","aussergewöhnlich gut"],["einzigartig (unique)","es gibt es nur einmal"],["der Testbericht","Text oder Video, das ein Produkt beurteilt"],["die Gewaltdarstellung","wie Gewalt gezeigt wird"],["eingeschworen","sehr überzeugt, treu"]],
    mc: [
      { q: "Mit welchem Spiel vergleicht der Moderator die Wertung von 99 Punkten?", o: ["Mit Zelda, dem bisherigen Rekordhalter","Mit Fortnite","Mit FIFA","Mit Minecraft"], a: 0 },
      { q: "Was kann man laut Journalist bei der Gewalt im Spiel tun?", o: ["In manchen Bereichen etwas einstellen, aber sie bleibt vorhanden","Sie ganz ausschalten","Nichts, es gibt keine Gewalt","Sie nur online sehen"], a: 0 },
      { q: "Warum spielen laut Journalist mehrere Generationen GTA?", o: ["Die einen sind damit aufgewachsen, die anderen wollen es wegen des Internets spielen","Weil es Pflicht in der Schule ist","Weil es gratis ist","Weil es nur alte Leute spielen"], a: 0 },
      { q: "Welche Kritik am Verkauf erwähnt das Video?", o: ["Dass es keine Disc mehr gibt und man das Spiel nicht weitergeben kann","Dass es zu kurz ist","Dass es keine Musik hat","Dass man es nicht herunterladen kann"], a: 0 }
    ],
    rf: [
      { s: "Die Wertungen in den Tests liegen laut Journalist zwischen 97 und 100 %.", a: true },
      { s: "Der Journalist sagt, die Altersfreigabe ab 18 sei übertrieben.", a: false, x: "Er sagt, die Freigabe ab 18 ist gut so." },
      { s: "Laut Video waren die Entwickler zum Teil sogar mit Gangs unterwegs, um alles genau darzustellen.", a: true },
      { s: "Es gab 16 Millionen Vorbestellungen.", a: true }
    ],
    offen: [
      { q: "Der Journalist ist sehr begeistert. Ist sein Urteil glaubwürdig? Nenne ein Argument dafür und eines dagegen.", l: "Dafür: Er hat das Spiel getestet, kennt sich aus, andere Tests sind ähnlich. Dagegen: Gaming-Seiten profitieren vom Hype (Klicks), wenig Kritik, Test kurz nach Start." },
      { q: "Ist ein Spiel für 80 Euro (oder rund 100 Euro für die Ultimate Edition) teuer? Rechne aus, was eine Stunde Spielzeit kostet, wenn man 80 Stunden spielt, und beurteile.", l: "80 Euro : 80 Stunden = 1 Euro pro Stunde. Beurteilung individuell, z. B. Vergleich mit Kino (ca. 15 Fr. für 2 Std.)." },
      { q: "Der Moderator betont zweimal: «Nicht für Kinder.» Warum ist diese Botschaft gerade bei einem Hype wichtig?", l: "Weil wegen des Hypes auch Kinder und Jugendliche das Spiel wollen, alle darüber reden und Eltern es vielleicht kaufen; die Gewaltdarstellung ist nicht für Kinder geeignet." }
    ] }
}
};

window.THEMEN2_UNITS = (window.THEMEN2_UNITS || []).concat(U);
window.STUFEN = window.STUFEN || {};
Object.assign(window.STUFEN, S);
})();
