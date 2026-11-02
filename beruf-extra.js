/* Zusätzliche Aufgaben für die Berufliche Vorbereitung (werden an die Niveaus der Stationen angehängt).
   Neue Methoden: mehrfach (mehrere richtige Antworten) und markieren (Stellen im Text antippen: [+richtig] [-falsch]). */
window.BERUF_EXTRA = {
  // ======================================================= LOGISTIK
  "lo-check": {
    1: [
      ["mehrfach", "", [["Welche Einheiten messen ein Gewicht?", ["kg", "g", "cm", "t", "l"], [0, 1, 3]], ["Welche Rechnungen ergeben 60?", ["6 × 10", "5 × 12", "3 × 30", "100 − 40"], [0, 1, 3]]]],
      ["zuordnen", "Grösser oder kleiner als 1 kg?", ["mehr als 1 kg", "weniger als 1 kg"], [["1500 g", 0], ["800 g", 1], ["2 kg", 0], ["0,5 kg", 1]]],
      ["rechnen", "", [["Ein Regal hat 4 Ebenen mit je 5 Kisten. Wie viele Kisten sind es?", 20, "Kisten"], ["Du hast 50 Etiketten und brauchst 18. Wie viele bleiben übrig?", 32, "Etiketten"]]]
    ],
    2: [
      ["markieren", "Tippe alle Angaben an, die ein Gewicht sind.", [["Lieferschein", "Sendung Nr. 4471: [-12 Kartons], [+Gesamtgewicht 240 kg], [-Masse 120 × 80 cm], [+Karton je 20 kg], Lieferung am [-3. Mai]."]]],
      ["mehrfach", "", [["Welche Angaben sind gleich viel?", ["1 t", "1000 kg", "100 kg", "1 000 000 g"], [0, 1, 3]], ["Was brauchst du, um das Volumen eines Kartons zu berechnen?", ["Länge", "Breite", "Höhe", "Gewicht", "Farbe"], [0, 1, 2]]]],
      ["rechnen", "", [["Eine Palette ist 120 cm lang und 80 cm breit. Wie gross ist der Umfang in cm?", 400, "cm", 0, "2 × 120 + 2 × 80 = 400"], ["Ein Kunde bestellt ½ Palette mit 48 Kartons. Wie viele Kartons sind das?", 24, "Kartons"]]]
    ],
    3: [
      ["rechnen", "", [["Ein Container ist 12 m lang, 2,3 m breit und 2,4 m hoch. Wie gross ist das Volumen in m³? (auf eine Stelle nach dem Komma runden)", 66.2, "m³", 0.06, "12 × 2,3 × 2,4 = 66,24 m³"], ["5 Paletten kosten im Transport Fr. 175.–. Wie viel kosten 8 Paletten?", 280, "Franken", 0, "Dreisatz: 1 Palette = 35 Fr., 8 × 35 = 280"], ["⅖ von 350 Kartons sind beschädigt. Wie viele Kartons sind beschädigt?", 140, "Kartons", 0, "350 : 5 × 2 = 140"]]],
      ["markieren", "Tippe alle falschen Ergebnisse an.", [["Rechnungen", "[-4 × 25 = 100] · [+3 × 45 = 125] · [-1,5 t = 1500 kg] · [+250 g = 2,5 kg] · [-¼ von 80 = 20]"]]],
      ["wahl", "", [["Welche Rechnung passt? 9 Kartons kosten Fr. 54.–. Wie viel kosten 4 Kartons?", ["54 : 9 × 4", "54 × 9 : 4", "54 + 9 − 4"], 0, "Zuerst auf 1 Karton, dann auf 4."]]]
    ]
  },
  "lo-log": {
    1: [
      ["mehrfach", "", [["Was gehört zu den 6 R der Logistik?", ["richtige Ware", "richtige Menge", "richtige Farbe des Lastwagens", "richtiger Zeitpunkt", "richtiger Ort"], [0, 1, 3, 4]], ["Was ist Stückgut?", ["Karton", "Palette", "Sand", "Waschmaschine", "Heizöl"], [0, 1, 3]]]],
      ["paare", "", [["Glas", "Weinflasche, Konfitürenglas"], ["PET", "Getränkeflasche aus Kunststoff"], ["Sonderabfall", "Farben, Chemikalien"], ["Kehricht", "Restmüll im Gebührensack"]]]
    ],
    2: [
      ["markieren", "Tippe alle Stellen an, an denen die Ware (nicht die Information) fliesst.", [["Warenfluss", "Die Kundin [-schickt eine Bestellung]. Der Lieferant [+liefert die Schrauben ins Lager]. Das Lager [+bringt sie zur Montage]. Die Firma [-schreibt eine Rechnung]. Ein Lastwagen [+fährt die fertigen Velos zum Laden]."]]],
      ["mehrfach", "", [["Was gehört in die Separatsammlung?", ["Alu-Dosen", "PET-Flaschen", "Verschmutzte Windeln", "Altpapier", "Glas"], [0, 1, 3, 4]]]],
      ["wahl", "", [["Eine Firma kauft Stahl für ihre Fabrik ein. Welcher Bereich?", ["Beschaffungslogistik", "Distributionslogistik", "Entsorgungslogistik"], 0], ["Ein Onlineshop schickt Pakete an Kunden. Welcher Bereich?", ["Distributionslogistik", "Beschaffungslogistik", "Produktionslogistik"], 0]]]
    ],
    3: [
      ["markieren", "Tippe alle Verstösse gegen Datenschutz und Zutritt an.", [["Ein Tag im Lager", "Lea [+klebt ihr Passwort an den Bildschirm]. Tom [-meldet sich am Computer ab, bevor er geht]. Ein Besucher [+läuft ohne Begleitung durchs Lager]. Sara [+schickt die Kundenliste an ihre private E-Mail]. Marco [-trägt seinen Badge sichtbar]."]]],
      ["reihe", "", [["Ordne den Weg einer PET-Flasche im Kreislauf.", ["Flasche wird im Laden gekauft", "Getränk wird getrunken", "Flasche kommt in die PET-Sammlung", "Flaschen werden sortiert und gepresst", "Daraus entsteht neues Material"]]]],
      ["wahl", "Situation", [["Im Lager stehen 30 kaputte Elektrogeräte.", ["In den Kehricht", "Als Elektroschrott dem Recycling zuführen", "Auf den Parkplatz stellen"], 1]]]
    ]
  },
  "lo-a": {
    1: [
      ["mehrfach", "", [["Was gehört zur persönlichen Schutzausrüstung?", ["Sicherheitsschuhe", "Warnweste", "Handschuhe", "Kopfhörer mit Musik", "Sonnenbrille im Lager"], [0, 1, 2]], ["Welche Angaben stehen in einem Auftrag?", ["Artikel", "Menge", "Termin", "Lieblingsfarbe", "Adresse"], [0, 1, 2, 4]]]],
      ["wahl", "", [["Wer instruiert neue Mitarbeitende?", ["Erfahrene Mitarbeitende, auch Lernende im 3. Lehrjahr", "Niemand", "Die Kundschaft"], 0]]]
    ],
    2: [
      ["markieren", "Tippe in diesem Auftrag alle wichtigen Angaben an.", [["Auftrag 2051", "Guten Morgen! [+Bitte 24 Kartons Druckerpapier] [+an die Firma Huber AG, Wetzikon] liefern. [-Das Wetter ist heute schön.] [+Abholung durch den Chauffeur um 10:30 Uhr.] [-Viele Grüsse vom Team.]"]]],
      ["mehrfach", "", [["Welche Geräte musst du vor dem Einsatz prüfen?", ["Handhubwagen", "Scanner", "Gabelstapler", "Kaffeemaschine"], [0, 1, 2]]]],
      ["reihe", "", [["Ordne die drei Aufträge nach Dringlichkeit.", ["Notfall-Lieferung Medikamente, Abholung in 20 Minuten", "Expresspaket, Abholung um 12 Uhr", "Normaler Versand, Abholung morgen"]]]]
    ],
    3: [
      ["markieren", "Tippe alle Fehler bei der Vorbereitung an.", [["Morgen im Lager", "Noah [-liest den Auftrag ganz durch]. Dann [+nimmt er den Scanner mit leerem Akku]. Er [+trägt Turnschuhe]. Er [-prüft den Hubwagen]. Die Gabel ist verbogen, [+trotzdem benutzt er ihn]."]]],
      ["rechnen", "", [["Du hast 4 Aufträge. Jeder dauert 35 Minuten. Du beginnst um 07:00 Uhr. Um wie viel Uhr bist du fertig? (nur die Stunde, z. B. 9)", 9, "Uhr", 0, "4 × 35 = 140 Minuten = 2 h 20 min → 09:20"]]],
      ["wahl", "Situation", [["Der Auftrag ist auf Französisch und du verstehst ihn nicht ganz.", ["Ich rate", "Ich frage eine Kollegin oder die vorgesetzte Person", "Ich lege ihn weg"], 1]]]
    ]
  },
  "lo-b": {
    1: [
      ["mehrfach", "", [["Womit sparst du Energie im Lager?", ["Licht aus in leeren Räumen", "Motor abstellen beim Warten", "Tore schliessen im Winter", "Heizung voll aufdrehen bei offenem Tor"], [0, 1, 2]]]],
      ["wahl", "", [["Eine Kundin fragt freundlich nach ihrer Lieferung. Wie antwortest du?", ["«Keine Ahnung.»", "«Ich schaue gerne für Sie nach.»", "«Fragen Sie jemand anderen.»"], 1]]]
    ],
    2: [
      ["markieren", "Tippe alle Tätigkeiten an, die Abfall vermeiden.", [["Im Versand", "Wir [+verwenden Kartons wieder]. Wir [-packen kleine Teile in riesige Kartons]. Wir [+bestellen Füllmaterial aus Altpapier]. Wir [-werfen Paletten nach einmal Gebrauch weg]. Wir [+reparieren kaputte Paletten]."]]],
      ["mehrfach", "", [["Was gehört zu einer guten Dokumentation?", ["genau", "vollständig", "sofort", "erfunden", "am Monatsende"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Wo kann man die Arbeit verbessern? Tippe die Schwachstellen an.", [["Ablauf im Lager", "Die Picklisten werden [+von Hand abgeschrieben]. Die Gänge sind [-gut beschriftet]. Die schweren Artikel stehen [+ganz oben im Regal]. Die Kartons liegen [+im ganzen Lager verstreut]. Der Scanner [-zeigt den Platz an]."]]],
      ["rechnen", "", [["Pro Tag fallen 45 kg Karton an. Wie viele kg sind das in 5 Arbeitstagen?", 225, "kg"], ["Früher brauchte man für einen Auftrag 12 Minuten, nach einer Verbesserung nur 9. Wie viele Minuten spart man bei 40 Aufträgen?", 120, "Minuten", 0, "3 × 40 = 120"]]]
    ]
  },
  "lo-c": {
    1: [
      ["mehrfach", "", [["Was kontrollierst du im Wareneingang?", ["Anzahl Packstücke", "Schäden an der Verpackung", "Richtige Ware", "Lieblingsmusik des Chauffeurs"], [0, 1, 2]], ["Welche Zeichen zeigen Gefahrgut?", ["Flamme", "Totenkopf", "Herz", "Ätz-Zeichen", "Smiley"], [0, 1, 3]]]],
      ["rf", "", [["Bei Lebensmitteln geht zuerst hinaus, was zuerst abläuft.", true], ["Den Vorbehalt schreibt man auf einen Notizzettel.", false, "Er gehört auf den Lieferschein."]]]
    ],
    2: [
      ["markieren", "Tippe auf dem Lieferschein alle Abweichungen zur Bestellung an. Bestellt waren: 10 Stühle, 2 Tische, 4 Lampen.", [["Lieferschein", "Geliefert: [-10 Stühle] · [+3 Tische] · [+4 Lampen, 1 davon zerbrochen] · [-Lieferung am 12. Mai]"]]],
      ["mehrfach", "", [["Was gehört auf einen Vorbehalt?", ["Was fehlt oder kaputt ist", "Unterschrift Chauffeur", "Datum", "Dein Lieblingsessen"], [0, 1, 2]]]],
      ["rechnen", "", [["Im System sind 140 Stück. Bei der Inventur zählst du 133. Wie viele fehlen?", 7, "Stück"]]]
    ],
    3: [
      ["markieren", "Was ist bei diesem Wareneingang falsch gelaufen? Tippe die Fehler an.", [["Bericht", "Der Lastwagen kommt um 7 Uhr. Elena [+unterschreibt den Lieferschein sofort]. [+Danach fährt der Chauffeur weg.] Erst dann [+zählt sie die Kartons] und findet einen nassen Karton. Sie [-meldet es dem Teamleiter]."]]],
      ["rechnen", "", [["Tagesverbrauch 25 Stück, Lieferzeit 6 Tage, Sicherheitsbestand 40 Stück. Wie hoch ist der Meldebestand?", 190, "Stück", 0, "25 × 6 + 40 = 190"]]],
      ["reihe", "", [["Ordne nach FEFO (zuerst abgelaufen, zuerst hinaus).", ["Milch, Ablauf 2. März", "Milch, Ablauf 5. März", "Milch, Ablauf 9. März", "Milch, Ablauf 14. März"]]]]
    ]
  },
  "lo-d": {
    1: [
      ["mehrfach", "", [["Womit sicherst du Ladung?", ["Spanngurte", "Antirutschmatten", "Ladungsnetze", "Klebezettel"], [0, 1, 2]]]],
      ["wahl", "", [["Was ist eine Tour?", ["Eine Fahrt mit mehreren Lieferadressen", "Eine Ferienreise", "Ein Regal"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Fehler beim Beladen an.", [["Beladung", "Mia lädt [-die schweren Kisten zuerst unten] ein. Dann [+stellt sie Glasflaschen unter Zementsäcke]. Sie [+lässt einen Meter Lücke ohne Sicherung]. Am Schluss [-zieht sie die Spanngurte fest]."]]],
      ["mehrfach", "", [["Was sind Begleitpapiere?", ["Lieferschein", "Adressetikette", "Frachtbrief", "Zeitung"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Wann muss eine Retoure erfasst werden? Tippe die passenden Fälle an.", [["Fälle", "[+Die Kundin verweigert die Annahme.] [-Die Kundin unterschreibt und nimmt alles.] [+Ein Karton ist beschädigt und geht zurück.] [+Falsche Ware wurde geliefert.]"]]],
      ["rechnen", "", [["Ein Lastwagen hat 33 Palettenplätze. 26 sind besetzt. Wie viele Paletten passen noch hinein?", 7, "Paletten"], ["Die Tour ist 86 km lang. Der Lastwagen braucht 30 Liter auf 100 km. Wie viele Liter braucht er? (auf eine Stelle genau)", 25.8, "Liter", 0.05]]]
    ]
  },
  "lo-e": {
    1: [
      ["mehrfach", "", [["Was braucht eine vollständige Adresse?", ["Name", "Strasse und Nummer", "PLZ und Ort", "Telefonnummer der Grossmutter"], [0, 1, 2]]]],
      ["wahl", "", [["Wo arbeitet man in der Fachrichtung Distribution oft?", ["Bei der Post oder einem Paketdienst", "In einer Bäckerei", "In einer Schule"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Sendungen an, die du so nicht annehmen darfst.", [["Am Schalter", "[-Paket mit Büchern] · [+Paket mit Feuerwerk] · [-Brief mit Vertrag] · [+Paket mit auslaufendem Benzin] · [-Paket mit Kleidern]"]]],
      ["mehrfach", "", [["Welche PLZ gehören in die Region Zürich/Ostschweiz (beginnen mit 8)?", ["8620", "3011", "8400", "1201", "8050"], [0, 2, 4]]]]
    ],
    3: [
      ["markieren", "Tippe in der Adresse alles an, was fehlt oder falsch ist.", [["Adresse", "Herr Luca [-Rossi], [+Bahnhofstr.] (Nummer fehlt), [+862] [-Wetzikon]"]]],
      ["rechnen", "", [["Ein Paket kostet Fr. 9.70. Ein Kunde schickt 6 Pakete. Wie viel bezahlt er?", 58.2, "Franken", 0.001]]]
    ]
  },
  "lo-f": {
    1: [
      ["mehrfach", "", [["Was nimmst du am Morgen auf die Tour mit?", ["Scanner", "Sendungen in Gangfolge", "Abholungseinladungen", "Pickliste vom Lager"], [0, 1, 2]]]],
      ["rf", "", [["Bei einer Nachnahme bezahlt die Empfängerin bei der Übergabe.", true]]]
    ],
    2: [
      ["markieren", "Tippe alles an, was die Zustellerin falsch macht.", [["Tour", "Sina [-sortiert die Pakete in Gangfolge]. Beim ersten Haus [+wirft sie das Paket über den Zaun]. Beim zweiten [-hinterlässt sie eine Abholungseinladung]. Beim dritten [+lässt eine Fremde das Einschreiben unterschreiben]."]]],
      ["reihe", "", [["Ordne die Übergabe eines Einschreibens.", ["Klingeln und freundlich grüssen", "Empfängerin feststellen", "Unterschrift einholen", "Sendung scannen und übergeben"]]]]
    ],
    3: [
      ["rechnen", "", [["Du hast 120 Sendungen. Bis 10 Uhr hast du 45 zugestellt. Wie viel Prozent sind das?", 37.5, "%", 0.01]]],
      ["markieren", "Tippe alle Punkte an, die zur Rückwärtslogistik gehören.", [["Am Abend", "[+nicht zugestellte Sendungen zurückbringen] · [-neue Sendungen sortieren] · [+abgeholte Retouren abgeben] · [+leere Behälter zurückgeben] · [-Frühstück einkaufen]"]]]
    ]
  },
  "lo-g": {
    1: [
      ["mehrfach", "", [["Welche Waren brauchen Kühlung?", ["Joghurt", "Fleisch", "Schrauben", "Salat", "Bücher"], [0, 1, 3]]]],
      ["wahl", "", [["Was ist ein Blocklager?", ["Paletten stehen direkt aufeinander am Boden", "Ein Regal für kleine Teile", "Ein gekühlter Raum"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Gefahren am Regal an.", [["Kontrolle Regal 07", "[+Ein Regalpfosten ist verbogen.] [-Die Ebenen sind beschriftet.] [+Eine Palette ragt in den Gang.] [+Ein Karton liegt lose ganz oben.] [-Das Regal ist am Boden verschraubt.]"]]],
      ["mehrfach", "", [["Was zeigt der Computer bei einer guten Lagerverwaltung?", ["Bestand", "Lagerplatz", "Ein- und Ausgänge", "Pausenzeiten der Kunden"], [0, 1, 2]]]]
    ],
    3: [
      ["rechnen", "", [["Ein Palettenplatz kostet pro Monat Fr. 18.–. Die Firma mietet 45 Plätze. Wie viel kostet das pro Monat?", 810, "Franken"], ["Ein Artikel wird pro Woche 60-mal gebraucht. Wie oft ist das in einem Jahr mit 50 Arbeitswochen?", 3000, "Mal"]]],
      ["markieren", "Welche Waren gehören nah an die Kommissionierzone (oft gebraucht)? Tippe sie an.", [["Auswertung", "[+Druckerpapier: 120-mal pro Woche] · [-Weihnachtsdekoration: 2-mal pro Jahr] · [+Klebeband: 90-mal pro Woche] · [-Ersatzteil Maschine: 1-mal pro Monat]"]]]
    ]
  },
  "lo-h": {
    1: [
      ["mehrfach", "", [["Welche Kommissionierhilfen gibt es?", ["Pick by Scan", "Pick by Voice", "Pick by Light", "Pick by Zufall"], [0, 1, 2]]]],
      ["wahl", "", [["Was tust du mit einem leeren Lagerplatz auf der Pickliste?", ["Melden", "Etwas anderes nehmen", "Nichts sagen"], 0]]]
    ],
    2: [
      ["markieren", "Vergleiche Pickliste und Korb. Tippe die Fehler im Korb an. Pickliste: 3 Hefte A4, 1 Locher, 5 Bleistifte.", [["Korb", "[-3 Hefte A4] · [+1 Heftmaschine] · [+4 Bleistifte]"]]],
      ["mehrfach", "", [["Was ist beim Verpacken wichtig?", ["Schweres nach unten", "Hohlräume füllen", "Etikette sichtbar", "Karton offen lassen"], [0, 1, 2]]]]
    ],
    3: [
      ["reihe", "", [["Plane deinen Weg (Gang 1 ist am nächsten beim Start). Artikel in Gang 4, Gang 1 und Gang 3.", ["Artikel in Gang 1 holen", "Artikel in Gang 3 holen", "Artikel in Gang 4 holen", "Zurück zum Packplatz"]]]],
      ["markieren", "Tippe alle Ursachen an, die zu Kommissionierfehlern führen können.", [["Ursachen", "[+schlecht beschriftete Fächer] · [+Stress und Zeitdruck] · [-Kontrolle mit dem Scanner] · [+ähnliche Artikel nebeneinander] · [-gute Beleuchtung]"]]]
    ]
  },
  "lo-kunde": {
    1: [
      ["mehrfach", "", [["Was gehört zu einem guten Auftreten?", ["Pünktlichkeit", "Freundlich grüssen", "Saubere Kleidung", "Kaugummi kauen im Gespräch"], [0, 1, 2]]]],
      ["wahl", "", [["Was ist After-Sales?", ["Alles nach dem Kauf, z. B. Reklamation", "Werbung vor dem Kauf", "Die Kasse"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Ich-Botschaften an.", [["Gespräch", "[+Ich verstehe Ihren Ärger.] [-Sie haben doch selber falsch bestellt!] [+Ich kümmere mich sofort darum.] [-Das ist nicht mein Problem.] [+Ich melde mich bis 14 Uhr bei Ihnen.]"]]],
      ["mehrfach", "", [["Was hilft beim aktiven Zuhören?", ["Nachfragen", "Zusammenfassen", "Blickkontakt", "Gleichzeitig aufs Handy schauen"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Tippe alle Fehler im Telefonat an.", [["Telefonat", "«[+Ja?]» – «Guten Tag, hier ist Frau Weber, mein Paket fehlt.» – «[+Das kann nicht sein.] [-Ich schaue sofort nach.] [+Rufen Sie morgen nochmals an.]»"]]],
      ["reihe", "", [["Ordne die Bearbeitung einer Reklamation.", ["Anliegen anhören", "Sich für die Unannehmlichkeit entschuldigen", "Fakten klären", "Lösung anbieten", "Abmachung festhalten", "Später nachfragen, ob alles gut ist"]]]]
    ]
  },
  // ======================================================= FAGE
  "fg-check": {
    1: [
      ["mehrfach", "", [["Welche Werte gehören zu den Vitalzeichen?", ["Puls", "Blutdruck", "Temperatur", "Körpergrösse", "Atmung"], [0, 1, 2, 4]], ["Welche Uhrzeiten sind am Nachmittag?", ["14:00", "16:30", "08:15", "13:45"], [0, 1, 3]]]],
      ["zuordnen", "Wie viele ml ungefähr?", ["etwa 200 ml", "etwa 1000 ml"], [["Ein Glas Wasser", 0], ["Eine grosse Flasche (1 l)", 1], ["Eine Tasse Tee", 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Fachwörter aus der Pflege an.", [["Rapport", "Frau Bühler [+mobilisiert] sich heute selbst. Ihre [+Vitalzeichen] sind stabil. Sie [-freut sich] auf den Besuch. Wir machen eine [+Dekubitusprophylaxe]."]]],
      ["mehrfach", "", [["Welche Organe liegen im Bauch?", ["Magen", "Leber", "Lunge", "Darm", "Gehirn"], [0, 1, 3]]]],
      ["rechnen", "", [["Frau D. trinkt 5 Becher zu 150 ml. Wie viele ml sind das?", 750, "ml"]]]
    ],
    3: [
      ["rechnen", "", [["Ein Medikament wird um 07:00, 13:00 und 19:00 Uhr gegeben. Wie viele Stunden liegen zwischen der ersten und letzten Gabe?", 12, "Stunden"], ["Eine Bewohnerin soll 1,5 l trinken. Sie hat ⅔ davon getrunken. Wie viele ml sind das?", 1000, "ml", 0, "1500 : 3 × 2 = 1000"]]],
      ["markieren", "Tippe alle Angaben an, die falsch geschrieben sind.", [["Notizen", "[-Puls 72 pro Minute] · [+Temperatur 37,2 mmHg] · [-Blutdruck 125/80 mmHg] · [+Trinkmenge 1,2 kg]"]]]
    ]
  },
  "fg-a": {
    1: [
      ["mehrfach", "", [["Wer gehört zum Team im Gesundheitswesen?", ["Pflegefachperson", "Ärztin", "Physiotherapeut", "Fachfrau Gesundheit", "Paketzusteller"], [0, 1, 2, 3]]]],
      ["wahl", "", [["Was tust du, wenn eine Angehörige dich nach der Diagnose fragt?", ["Ich verweise an die zuständige Fachperson", "Ich erkläre alles", "Ich rate"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Verletzungen der Schweigepflicht an.", [["Feierabend", "Im Bus [+erzählt Lea von der Krankheit von Herrn B.]. Zu Hause [-sagt sie, dass sie einen strengen Tag hatte]. Auf Instagram [+postet sie ein Foto aus dem Zimmer einer Bewohnerin]. In der Übergabe [-berichtet sie dem Team über Frau K.]"]]],
      ["mehrfach", "", [["Woran erkennst du Veränderungen bei Klientinnen?", ["Hautfarbe", "Verhalten", "Schmerzen", "Appetit", "Lieblingsfarbe"], [0, 1, 2, 3]]]]
    ],
    3: [
      ["markieren", "Tippe alle Zeichen von fehlender Distanz an.", [["Beziehung", "Sara [+gibt einem Bewohner ihre private Handynummer]. Sie [-hört ihm aufmerksam zu]. Sie [+erzählt ihm von ihren Beziehungsproblemen]. Sie [-hält sich an die Abmachungen im Team]. Sie [+nimmt Geschenke an]."]]],
      ["wahl", "Situation", [["Eine Bewohnerin sagt: «Sie sind die Einzige, die mich versteht. Bleiben Sie heute Abend länger?»", ["Ich bleibe heimlich", "Ich zeige Verständnis, bleibe aber bei meiner Arbeitszeit und informiere das Team", "Ich gehe ohne etwas zu sagen"], 1]]]
    ]
  },
  "fg-b": {
    1: [
      ["mehrfach", "", [["Was gehört zur Körperpflege?", ["Waschen", "Zähne putzen", "Haare kämmen", "Fernsehen"], [0, 1, 2]], ["Was hilft gegen einen Dekubitus?", ["Lagewechsel", "Haut beobachten", "Genug trinken", "Lange still liegen"], [0, 1, 2]]]],
      ["wahl", "", [["Wofür braucht man einen Rollator?", ["Zum sicheren Gehen", "Zum Kochen", "Zum Schlafen"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Handlungen an, welche die Intimsphäre schützen.", [["Körperpflege", "Jan [+schliesst die Tür und den Vorhang]. Er [-deckt die ganze Bettdecke weg]. Er [+wäscht Teil für Teil und deckt wieder zu]. Er [-lässt die Tür offen, weil es warm ist]. Er [+fragt, ob es so in Ordnung ist]."]]],
      ["mehrfach", "", [["Was beobachtest du bei der Ausscheidung?", ["Menge", "Farbe", "Geruch", "Schmerzen beim Wasserlösen", "Uhrzeit des Fernsehprogramms"], [0, 1, 2, 3]]]]
    ],
    3: [
      ["markieren", "Wo fördert die FaGe die Ressourcen? Tippe die guten Stellen an.", [["Morgen", "Frau T. [+wäscht ihr Gesicht selbst]. Die FaGe [-zieht ihr schnell die Socken an, obwohl sie es könnte]. Sie [+legt die Kleider bereit, damit Frau T. selbst wählen kann]. Sie [+begleitet sie mit dem Rollator zum Frühstück]."]]],
      ["rechnen", "", [["Herr K. wird alle 3 Stunden umgelagert, zum ersten Mal um 06:00 Uhr. Wie oft wird er bis und mit 21:00 Uhr umgelagert?", 6, "Mal", 0, "06, 09, 12, 15, 18, 21 Uhr"]]]
    ]
  },
  "fg-c": {
    1: [
      ["mehrfach", "", [["Was tust du in einem Notfall?", ["Ruhe bewahren", "Hilfe holen", "Auf die eigene Sicherheit achten", "Davonlaufen"], [0, 1, 2]]]],
      ["paare", "", [["112", "Euro-Notruf"], ["1414", "Rega (Luftrettung)"], ["144", "Sanität"]]]
    ],
    2: [
      ["markieren", "Tippe alle hilfreichen Sätze für eine Person mit Demenz an.", [["Gespräch", "[+«Guten Morgen, Frau Meier, ich bin Lea.»] [-«Wissen Sie nicht mehr, wer ich bin?»] [+«Wir gehen jetzt zusammen zum Frühstück.»] [-«Das habe ich Ihnen schon fünfmal gesagt!»]"]]],
      ["mehrfach", "", [["Was ist am Lebensende wichtig?", ["Keine Schmerzen", "Ruhe", "Nähe von Angehörigen", "Viele Untersuchungen"], [0, 1, 2]]]]
    ],
    3: [
      ["reihe", "", [["Ordne den Notruf am Telefon (Sanität 144).", ["Wer ruft an und von wo?", "Was ist passiert?", "Wie viele Personen sind betroffen?", "Wie ist der Zustand?", "Rückfragen beantworten und nicht zuerst auflegen"]]]],
      ["markieren", "Tippe alle Anzeichen einer Krise an.", [["Beobachtung", "Herr V. [+isst seit drei Tagen kaum]. Er [+zieht sich zurück]. Er [-liest gern Zeitung]. Er [+sagt, alles sei sinnlos]. Er [-spielt am Nachmittag Karten]."]]]
    ]
  },
  "fg-d": {
    1: [
      ["mehrfach", "", [["Welche Werte sind bei Erwachsenen in Ruhe eher normal?", ["Puls 80", "Temperatur 36,9 °C", "Atmung 40 pro Minute", "Blutdruck 120/80"], [0, 1, 3]]]],
      ["wahl", "", [["Womit misst man die Temperatur?", ["Thermometer", "Waage", "Massband"], 0]]]
    ],
    2: [
      ["markieren", "Tippe in der Liste alle auffälligen Werte an (Erwachsene in Ruhe).", [["Messwerte", "Frau A.: [-Puls 76] · Herr B.: [+Temperatur 38,8 °C] · Frau C.: [+Atmung 30] · Herr D.: [-Blutdruck 122/78] · Frau E.: [+Puls 140]"]]],
      ["mehrfach", "", [["Was gehört zur 6-R-Regel?", ["richtige Person", "richtige Dosis", "richtiger Zeitpunkt", "richtige Lieblingsfarbe", "richtige Dokumentation"], [0, 1, 2, 4]]]]
    ],
    3: [
      ["rechnen", "", [["Ein Bewohner bekommt 3-mal täglich 2 Tabletten. Wie viele Tabletten braucht er in einer Woche?", 42, "Tabletten"], ["Einfuhr: 6 Becher Tee zu 200 ml und 1 Teller Suppe zu 300 ml. Ausfuhr: 1350 ml. Wie gross ist die Bilanz?", 150, "ml", 0, "1500 − 1350 = +150"]]],
      ["markieren", "Tippe alle Fehler beim Richten der Medikamente an.", [["Medikamente richten", "Nina [-liest die Verordnung]. Sie [+richtet die Tabletten für zwei Personen im gleichen Becher]. Sie [-kontrolliert Name und Zeit]. Sie [+lässt das Fach offen und geht weg]. Sie [+vergisst die Dokumentation]."]]]
    ]
  },
  "fg-e": {
    1: [
      ["mehrfach", "", [["Wann desinfizierst du die Hände?", ["Vor dem Kontakt mit der Klientin", "Nach dem Kontakt mit der Klientin", "Nach Kontakt mit Urin", "Nach dem Lesen der Zeitung im Pausenraum"], [0, 1, 2]]]],
      ["wahl", "", [["Wohin gehört eine gebrauchte Nadel?", ["In den Sicherheitsbehälter", "In den Papierkorb", "In die Kitteltasche"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Hygienefehler an.", [["Morgen auf der Station", "Tim [+trägt seinen Ehering]. Er [-desinfiziert die Hände vor dem Zimmer]. Er [+fasst nach dem Leeren der Urinflasche das Handy an]. Er [-trägt bei Kontakt mit Blut Handschuhe]. Er [+wischt sich die Hände an der Hose ab]."]]],
      ["mehrfach", "", [["Was gehört zur Schutzausrüstung?", ["Handschuhe", "Schürze", "Maske", "Schutzbrille", "Mütze aus Wolle"], [0, 1, 2, 3]]]]
    ],
    3: [
      ["markieren", "Tippe alle Massnahmen der Prävention an.", [["Gesund bleiben", "[+Grippeimpfung im Herbst] · [+Täglicher Spaziergang] · [-Viel Zucker und wenig Wasser] · [+Ausgewogen essen] · [-Wenig schlafen]"]]],
      ["reihe", "", [["Ordne: Was machst du nach einer Stichverletzung?", ["Wunde bluten lassen", "Wunde desinfizieren", "Sofort der vorgesetzten Person melden", "Nach Vorschrift untersuchen lassen und dokumentieren"]]]]
    ]
  },
  "fg-f": {
    1: [
      ["mehrfach", "", [["Welche Aktivitäten sind im Altersheim möglich?", ["Singen", "Spazieren", "Backen", "Gesellschaftsspiele"], [0, 1, 2, 3]]]],
      ["wahl", "", [["Was hilft gegen Einsamkeit?", ["Kontakte und Gespräche", "Allein im Zimmer bleiben", "Den Fernseher laut stellen"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Stellen an, an denen die Privatsphäre respektiert wird.", [["Nachmittag", "Die FaGe [+klopft und wartet auf eine Antwort]. Sie [-liest die Briefe der Bewohnerin]. Sie [+schliesst die Tür, wenn Besuch kommt]. Sie [-erzählt im Gang, wer zu Besuch war]."]]],
      ["mehrfach", "", [["Was gibt eine Tagesstruktur?", ["Sicherheit", "Orientierung", "Gewohnte Abläufe", "Chaos"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Herr G. war früher Gärtner und Musiker. Tippe die passenden Aktivitäten an.", [["Angebote", "[+Tomaten auf dem Balkon pflegen] · [-Computerkurs für Profis] · [+Mit der Mundharmonika spielen] · [+Blumen im Garten ansehen] · [-Marathon laufen]"]]],
      ["rechnen", "", [["Eine Aktivität dauert 45 Minuten und beginnt um 14:30 Uhr. Wann endet sie? (Minuten nach 15 Uhr)", 15, "Minuten nach 15 Uhr", 0, "14:30 + 45 min = 15:15"]]]
    ]
  },
  "fg-g": {
    1: [
      ["mehrfach", "", [["Was gehört zu einem sicheren Zimmer?", ["Freie Wege", "Gutes Licht", "Klingel in Reichweite", "Kabel quer über den Boden"], [0, 1, 2]]]],
      ["wahl", "", [["Wie oft wird Bettwäsche gewechselt?", ["Regelmässig und sofort, wenn sie schmutzig ist", "Einmal pro Jahr", "Nie"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle Stolperfallen an.", [["Zimmer 12", "Im Zimmer [+liegt ein Teppich mit hochstehendem Rand]. [-Das Licht ist hell.] [+Ein Kabel liegt quer zum Bad.] [+Die Hausschuhe stehen mitten im Weg.] [-Der Rollator steht neben dem Bett.]"]]],
      ["mehrfach", "", [["Was steht auf einem Pflegeetikett?", ["Waschtemperatur", "Trocknertauglich", "Bügeln", "Preis"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Tippe alle Fehler beim Umgang mit Wäsche an.", [["Wäsche", "Elif [+schüttelt die schmutzige Bettwäsche im Zimmer aus]. Sie [-legt infektiöse Wäsche in den speziellen Sack]. Sie [+wäscht den Wollpullover bei 90 °C]. Sie [-trägt Handschuhe bei verschmutzter Wäsche]."]]],
      ["rechnen", "", [["Eine Waschmaschine fasst 7 kg. Wie viele Maschinen brauchst du für 32 kg Wäsche?", 5, "Maschinen", 0, "32 : 7 = 4,6 → 5 Maschinen"]]]
    ]
  },
  "fg-h": {
    1: [
      ["mehrfach", "", [["Was gehört zum Datenschutz?", ["Passwort geheim halten", "Bildschirm sperren", "Keine Daten herumerzählen", "Kundenlisten im Bus lesen"], [0, 1, 2]]]],
      ["wahl", "", [["Was prüfst du bei Verbrauchsmaterial?", ["Das Ablaufdatum", "Die Farbe der Schachtel", "Den Preis im Internet"], 0]]]
    ],
    2: [
      ["markieren", "Tippe alle sachlichen (guten) Einträge an.", [["Pflegebericht", "[+08:30 Frau K. hat 2 Tassen Tee getrunken.] [-Frau K. ist wieder mal schwierig.] [+10:15 Puls 82, Temperatur 36,8 °C.] [-Herr L. nervt beim Waschen.] [+11:00 Herr L. lehnt das Duschen ab, er sei müde.]"]]],
      ["mehrfach", "", [["Was gehört zum Eintritt einer neuen Bewohnerin?", ["Zimmer vorbereiten", "Personalien erfassen", "Persönliche Gegenstände aufnehmen", "Alte Bewohner umziehen lassen"], [0, 1, 2]]]]
    ],
    3: [
      ["markieren", "Tippe alle Fehler bei der Materialbewirtschaftung an.", [["Materialraum", "[+Abgelaufene Kompressen liegen vorne.] [-Neue Ware wird hinten eingeräumt.] [+Die Handschuhe sind fast leer und niemand bestellt.] [-Die Ablaufdaten werden jeden Monat kontrolliert.]"]]],
      ["rechnen", "", [["Die Abteilung braucht pro Woche 350 Paar Handschuhe. Eine Packung hat 50 Paar. Wie viele Packungen braucht sie in 4 Wochen?", 28, "Packungen", 0, "350 × 4 = 1400; 1400 : 50 = 28"]]]
    ]
  }
};
