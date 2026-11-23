/* Neue Lese-Einheiten (Nov. 2026): MPA, Sprachen und Flaggen, erstes Auto, Formel 1, Motorrad, GTA 6 (3 Texte) */
(function () {
const U = [
  { id: "dl-mpa", r: "lberuf", typ: "text", texttitel: "Text", titel: "Arbeiten als MPA", kanal: "Berufsporträt", dauer: "ca. 170 Wörter",
    kurz: "Empfang, Labor, Röntgen: Medizinische Praxisassistentinnen und -assistenten sorgen dafür, dass eine Arztpraxis läuft.",
    vor: "Warst du schon einmal in einer Arztpraxis? Wer hat dich zuerst begrüsst, und was hat diese Person gemacht?",
    text: "Wer in eine Arztpraxis kommt, trifft zuerst nicht die Ärztin, sondern eine MPA. MPA heisst Medizinische Praxisassistentin oder Medizinischer Praxisassistent. Die MPA begrüsst die Patientinnen und Patienten, nimmt die Versichertenkarte entgegen und plant die Termine.\n\nAber die MPA arbeitet nicht nur am Empfang. Im Labor nimmt sie Blut ab und untersucht Blut oder Urin. Sie misst den Blutdruck, macht ein EKG, das zeigt, wie das Herz arbeitet, und macht Röntgenbilder. Sie gibt Spritzen und hilft der Ärztin bei kleinen Eingriffen. Danach reinigt und sterilisiert sie die Instrumente.\n\nAuch Büroarbeit gehört dazu: Die MPA schreibt Berichte, schickt Rechnungen an die Krankenkassen und bestellt Material wie Handschuhe oder Verbände.\n\nDie Lehre dauert drei Jahre und endet mit dem EFZ. Die Lernenden arbeiten in einer Praxis oder in einem Spital und gehen in die Berufsfachschule. Im ersten Lehrjahr verdienen sie etwa 400 bis 700 Franken im Monat.\n\nFür den Beruf braucht man Freude am Umgang mit Menschen, Geduld und eine genaue Arbeitsweise. Man muss auch in einer stressigen Situation ruhig bleiben.",
    wort: [["die Versichertenkarte","Karte der Krankenkasse, die man in der Praxis zeigt"],["das Labor","Raum, in dem man Blut, Urin usw. untersucht"],["der Eingriff","eine kleine Operation oder Behandlung"],["sterilisieren","so reinigen, dass keine Keime mehr da sind"],["die Krankenkasse","Versicherung, die Kosten für Arzt und Spital bezahlt"]],
    mc: [
      { q: "Wofür steht die Abkürzung MPA?", o: ["Medizinische Praxisassistentin / Medizinischer Praxisassistent","Mobile Pflege-Ausbildung","Medizinisches Personal im Ausland"], a: 0 },
      { q: "Was macht eine MPA im Labor?", o: ["Sie kocht Mittagessen","Sie nimmt Blut ab und untersucht Blut oder Urin","Sie repariert Computer"], a: 1 },
      { q: "Wie lange dauert die Lehre?", o: ["Zwei Jahre","Drei Jahre","Fünf Jahre"], a: 1 },
      { q: "Welche Eigenschaft braucht man laut Text?", o: ["Geduld","Viel Kraft in den Armen","Gute Noten in Sport"], a: 0 }
    ],
    rf: [
      { s: "Die MPA arbeitet nur am Empfang.", a: false, x: "Sie arbeitet auch im Labor, im Röntgen und im Büro." },
      { s: "Die MPA schickt Rechnungen an die Krankenkassen.", a: true },
      { s: "Lernende können in einer Praxis oder in einem Spital arbeiten.", a: true }
    ],
    offen: [
      { q: "Nenne drei medizinische Aufgaben einer MPA.", l: "Z. B. Blut abnehmen, Blut oder Urin untersuchen, Blutdruck messen, EKG, Röntgenbilder, Spritzen geben, bei Eingriffen helfen, Instrumente sterilisieren." },
      { q: "Welche Aufgabe würde dir am meisten Spass machen? Warum?", l: "Individuelle Antwort mit Begründung." }
    ] },

  { id: "wt-flaggen", r: "wwelt", typ: "text", texttitel: "Text", titel: "Sprachen und Flaggen der Welt", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Über 7000 Sprachen, fast 200 Flaggen und ein Land mit einer quadratischen Fahne: die Schweiz.",
    vor: "Welche Sprachen werden in eurer Klasse gesprochen? Macht eine Liste.",
    text: "Auf der Welt gibt es über 7000 Sprachen. Die meisten Menschen sprechen Englisch, wenn man auch alle zählt, die es als Fremdsprache gelernt haben. Als Muttersprache ist Chinesisch (Mandarin) am häufigsten. Viele Sprachen sind aber sehr klein: Nur wenige tausend Menschen sprechen sie. Etwa die Hälfte aller Sprachen könnte in diesem Jahrhundert verschwinden.\n\nAuch in der Schweiz gibt es viele Sprachen. Das Land hat vier Landessprachen: Deutsch, Französisch, Italienisch und Rätoromanisch. Dazu kommen Sprachen wie Albanisch, Portugiesisch, Serbisch oder Türkisch, die viele Familien zu Hause sprechen.\n\nJedes Land hat auch eine Flagge. Die meisten Flaggen sind rechteckig. Die Schweizer Flagge ist eine Ausnahme: Sie ist quadratisch. Nur der Vatikan hat ebenfalls eine quadratische Nationalflagge. Nepal hat sogar eine Flagge aus zwei Dreiecken.\n\nDie Farben und Zeichen einer Flagge haben oft eine Bedeutung. Auf der albanischen Flagge sieht man einen schwarzen Adler mit zwei Köpfen auf rotem Grund. Die Flagge des Kosovo zeigt die Umrisse des Landes und sechs Sterne. Sie stehen für die Bevölkerungsgruppen, die dort leben.",
    wort: [["die Muttersprache","die erste Sprache, die man als Kind lernt"],["die Landessprache","offizielle Sprache eines Landes"],["quadratisch","mit vier gleich langen Seiten"],["rechteckig","mit vier Ecken, zwei Seiten länger als die anderen"],["der Umriss","die äussere Linie einer Form"]],
    mc: [
      { q: "Wie viele Sprachen gibt es ungefähr auf der Welt?", o: ["Etwa 70","Über 7000","Genau 195"], a: 1 },
      { q: "Welche Sprache ist als Muttersprache am häufigsten?", o: ["Englisch","Chinesisch (Mandarin)","Deutsch"], a: 1 },
      { q: "Was ist besonders an der Schweizer Flagge?", o: ["Sie ist quadratisch","Sie hat drei Streifen","Sie ist grün"], a: 0 },
      { q: "Was sieht man auf der albanischen Flagge?", o: ["Einen Löwen","Einen Adler mit zwei Köpfen","Sechs Sterne"], a: 1 }
    ],
    rf: [
      { s: "Die Schweiz hat vier Landessprachen.", a: true },
      { s: "Alle Sprachen der Welt werden von Millionen Menschen gesprochen.", a: false, x: "Viele Sprachen sind sehr klein, nur wenige tausend Menschen sprechen sie." },
      { s: "Nepal hat eine Flagge aus zwei Dreiecken.", a: true }
    ],
    offen: [
      { q: "Nenne die vier Landessprachen der Schweiz.", l: "Deutsch, Französisch, Italienisch, Rätoromanisch." },
      { q: "Beschreibe die Flagge deines Herkunftslandes oder einer Flagge, die du magst. Was bedeuten Farben und Zeichen?", l: "Individuelle Beschreibung mit Farben, Formen und, wenn bekannt, ihrer Bedeutung." }
    ] },

  { id: "wt-erstesauto", r: "wmotor", typ: "text", texttitel: "Text", titel: "Mein erstes Auto: Was kostet das wirklich?", kanal: "Ratgeber", dauer: "ca. 170 Wörter",
    kurz: "Mit 17 lernen, mit 18 die Prüfung: Der Weg zum Führerausweis und die Kosten eines eigenen Autos.",
    vor: "Was glaubst du: Wie viel kostet ein Auto pro Monat, wenn man alles zusammenzählt? Schätze.",
    text: "Viele Jugendliche träumen vom eigenen Auto. In der Schweiz kann man den Lernfahrausweis schon mit 17 Jahren bekommen. Vorher braucht es einen Nothilfekurs, einen Sehtest und die Theorieprüfung. Wer jünger als 20 ist, muss danach mindestens ein Jahr lang üben, bevor er zur praktischen Prüfung darf. Diese kann man frühestens mit 18 machen.\n\nDer Führerausweis ist nicht gratis. Fahrstunden, Kurse und Prüfungen kosten zusammen oft 3000 bis 4000 Franken. Nach der Prüfung bekommt man den Führerausweis auf Probe. Die Probezeit dauert drei Jahre. Im ersten Jahr muss man einen Weiterbildungstag besuchen.\n\nRichtig teuer wird es mit dem eigenen Auto. Man bezahlt nicht nur den Kaufpreis. Dazu kommen Versicherung, Verkehrssteuer, Benzin oder Strom, Service, Reifen und vielleicht ein Parkplatz. Für junge Neulenkerinnen und Neulenker ist die Versicherung besonders teuer, weil sie öfter Unfälle haben. Ein kleines Auto kann so schnell 500 Franken und mehr pro Monat kosten.\n\nViele junge Menschen in der Stadt verzichten deshalb auf ein Auto. Sie fahren mit Zug, Bus und Velo oder teilen sich ein Auto mit anderen.",
    wort: [["der Lernfahrausweis","Ausweis, mit dem man in Begleitung das Autofahren üben darf"],["der Führerausweis","Dokument, das erlaubt, ein Auto zu fahren (in Deutschland: Führerschein)"],["die Probezeit","Zeit, in der man zeigen muss, dass man sicher fährt"],["die Verkehrssteuer","Steuer, die man jedes Jahr für ein Fahrzeug bezahlt"],["der Neulenker / die Neulenkerin","Person, die den Führerausweis erst seit kurzem hat"]],
    mc: [
      { q: "Ab welchem Alter kann man in der Schweiz den Lernfahrausweis für das Auto bekommen?", o: ["Ab 16","Ab 17","Ab 20"], a: 1 },
      { q: "Was braucht man vor dem Lernfahrausweis?", o: ["Nothilfekurs, Sehtest und Theorieprüfung","Ein eigenes Auto","Einen Motorradausweis"], a: 0 },
      { q: "Wie lange dauert die Probezeit?", o: ["Ein Jahr","Drei Jahre","Zehn Jahre"], a: 1 },
      { q: "Warum ist die Versicherung für junge Neulenker teuer?", o: ["Weil sie öfter Unfälle haben","Weil sie schneller fahren dürfen","Weil sie keinen Ausweis haben"], a: 0 }
    ],
    rf: [
      { s: "Wer jünger als 20 ist, muss mindestens ein Jahr mit dem Lernfahrausweis üben.", a: true },
      { s: "Der Führerausweis kostet fast nichts.", a: false, x: "Er kostet oft 3000 bis 4000 Franken." },
      { s: "Zu den Kosten eines Autos gehören auch Service und Reifen.", a: true }
    ],
    offen: [
      { q: "Zähle fünf Kosten auf, die ein eigenes Auto verursacht.", l: "Kaufpreis, Versicherung, Verkehrssteuer, Benzin oder Strom, Service, Reifen, Parkplatz." },
      { q: "Brauchst du später ein eigenes Auto? Begründe mit deinem Wohnort und deinem Beruf.", l: "Individuelle Antwort, z. B. ÖV-Verbindungen, Arbeitszeiten, Arbeitsort." }
    ] },

  { id: "wt-formel1", r: "wmotor", typ: "text", texttitel: "Text", titel: "Formel 1: Hightech aus Hinwil", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Nur ein paar Kilometer von Wetzikon entfernt werden Formel-1-Autos gebaut. Seit 2026 heisst das Team Audi.",
    vor: "Wusstest du, dass im Zürcher Oberland Formel-1-Autos gebaut werden? Was weisst du über die Formel 1?",
    text: "Die Formel 1 ist die bekannteste Rennserie der Welt. Die Autos fahren über 300 Kilometer pro Stunde. Eine Saison dauert von März bis Dezember und hat über 20 Rennen auf der ganzen Welt.\n\nSeit 2026 fahren elf Teams mit je zwei Fahrern. Neu ist das amerikanische Team Cadillac. Ein anderes Team hat eine besondere Verbindung zum Zürcher Oberland: Es hat seinen Sitz in Hinwil, nur wenige Kilometer von Wetzikon entfernt. Über 30 Jahre lang hiess es Sauber, nach seinem Gründer Peter Sauber. Seit 2026 gehört es dem deutschen Autohersteller Audi. In Hinwil werden die Rennautos entwickelt und gebaut.\n\nFür 2026 gibt es auch neue Regeln. Die Autos sind leichter, und etwa die Hälfte der Leistung kommt aus einem Elektromotor. Die Formel 1 will so umweltfreundlicher und für Autofirmen interessanter werden.\n\nIn der Schweiz selbst gibt es aber keine Formel-1-Rennen. Nach einem schweren Unfall in Frankreich im Jahr 1955 mit über 80 Toten hat die Schweiz Rundstreckenrennen verboten. Schweizer Fans müssen deshalb ins Ausland reisen, zum Beispiel nach Italien oder Österreich.",
    wort: [["die Rennserie","eine Reihe von Rennen über eine Saison"],["der Sitz (einer Firma)","der Ort, wo eine Firma ihr Hauptgebäude hat"],["der Gründer","Person, die etwas neu aufgebaut hat"],["die Leistung (Motor)","wie viel Kraft ein Motor hat"],["das Rundstreckenrennen","Rennen auf einer Strecke, auf der man viele Runden fährt"]],
    mc: [
      { q: "Wie viele Teams fahren seit 2026 in der Formel 1?", o: ["Zehn","Elf","Zwanzig"], a: 1 },
      { q: "Wo hat das Team von Audi seinen Sitz?", o: ["In Hinwil","In Genf","In Bern"], a: 0 },
      { q: "Wie hiess das Team vorher?", o: ["Ferrari","Sauber","Cadillac"], a: 1 },
      { q: "Warum gibt es in der Schweiz keine Formel-1-Rennen?", o: ["Weil es keine Strassen gibt","Weil Rundstreckenrennen seit einem Unfall 1955 verboten sind","Weil es zu kalt ist"], a: 1 }
    ],
    rf: [
      { s: "Jedes Team hat zwei Fahrer.", a: true },
      { s: "Seit 2026 kommt etwa die Hälfte der Leistung aus einem Elektromotor.", a: true },
      { s: "Cadillac ist ein Schweizer Team.", a: false, x: "Cadillac ist ein amerikanisches Team." }
    ],
    offen: [
      { q: "Warum will die Formel 1 mehr Elektromotoren einsetzen? Nenne einen Grund aus dem Text.", l: "Sie will umweltfreundlicher und für Autofirmen interessanter werden." },
      { q: "Würdest du gerne einmal in einem Formel-1-Team arbeiten? In welchem Beruf (z. B. Mechaniker, Informatikerin)?", l: "Individuelle Antwort mit Beruf und Begründung." }
    ] },

  { id: "wt-motorrad", r: "wmotor", typ: "text", texttitel: "Text", titel: "Mit 16 aufs Motorrad", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Seit 2021 dürfen Jugendliche in der Schweiz schon mit 16 ein 125er-Motorrad fahren. Was braucht es dafür, und wie gefährlich ist es?",
    vor: "Möchtest du einmal Motorrad oder Roller fahren? Warum oder warum nicht?",
    text: "Für viele Jugendliche bedeutet ein Motorrad Freiheit. Seit 2021 dürfen sie in der Schweiz schon ab 16 Jahren ein Motorrad der Kategorie A1 fahren. Das sind Motorräder mit höchstens 125 Kubikzentimetern und 11 Kilowatt, also etwa 15 PS. Vorher war das erst ab 18 erlaubt.\n\nAuf dem Weg zum Ausweis braucht man zuerst einen Nothilfekurs, einen Sehtest und die Theorieprüfung. Dann folgen ein obligatorischer Grundkurs mit einer Fahrlehrerin oder einem Fahrlehrer und schliesslich die praktische Prüfung. Ab 18 kann man mit der Kategorie A stärkere Motorräder fahren, zuerst aber mit einer Leistungsbeschränkung.\n\nMotorradfahren macht Spass, ist aber gefährlich. Bei einem Unfall gibt es keine Knautschzone und keinen Airbag. Ein Motorradfahrer verletzt sich bei einem Unfall viel häufiger schwer als ein Autofahrer. Viele Unfälle passieren, weil man zu schnell fährt oder weil Autofahrer das Motorrad übersehen.\n\nDeshalb ist die richtige Ausrüstung sehr wichtig: ein Helm, der gut sitzt, Handschuhe, eine Jacke und Hosen mit Protektoren sowie feste Stiefel. Und man sollte immer so fahren, dass man von anderen gesehen wird.",
    wort: [["der Kubikzentimeter (ccm)","Mass für die Grösse eines Motors"],["obligatorisch","man muss es machen, Pflicht"],["die Leistungsbeschränkung","die Kraft des Motors ist begrenzt"],["die Knautschzone","Teil eines Autos, der sich bei einem Unfall verformt und schützt"],["der Protektor","festes Polster in Kleidung, das bei einem Sturz schützt"]],
    mc: [
      { q: "Ab welchem Alter darf man seit 2021 ein 125er-Motorrad fahren?", o: ["Ab 14","Ab 16","Ab 18"], a: 1 },
      { q: "Was gehört zum Weg zum Ausweis?", o: ["Nothilfekurs, Sehtest, Theorie, Grundkurs, Prüfung","Nur ein Sehtest","Ein Brief an die Gemeinde"], a: 0 },
      { q: "Warum ist Motorradfahren gefährlich?", o: ["Weil es keinen Airbag und keine Knautschzone gibt","Weil Motorräder zu leise sind","Weil man nur nachts fahren darf"], a: 0 },
      { q: "Welche Ausrüstung nennt der Text?", o: ["Helm, Handschuhe, Jacke und Hosen mit Protektoren, Stiefel","Nur eine Sonnenbrille","Badehose und Sandalen"], a: 0 }
    ],
    rf: [
      { s: "Vor 2021 durfte man erst ab 18 eine 125er fahren.", a: true },
      { s: "Ab 18 darf man jedes Motorrad ohne Beschränkung fahren.", a: false, x: "Mit der Kategorie A fährt man zuerst mit einer Leistungsbeschränkung." },
      { s: "Manche Unfälle passieren, weil Autofahrer das Motorrad übersehen.", a: true }
    ],
    offen: [
      { q: "Nenne zwei Gründe, warum viele Motorradunfälle passieren.", l: "Zu schnelles Fahren und Autofahrer übersehen das Motorrad." },
      { q: "Was würdest du einer Kollegin oder einem Kollegen raten, die oder der mit 16 Motorrad fahren will? Schreibe zwei Tipps.", l: "Z. B. gute Schutzkleidung tragen, langsam fahren, gut sichtbar fahren, den Grundkurs ernst nehmen, Fahrtraining machen." }
    ] },

  { id: "wt-gta1", r: "wmotor", typ: "text", texttitel: "Text", titel: "GTA 6: das teuerste Spiel aller Zeiten", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Über zehn Jahre Entwicklung, mehr als eine Milliarde Dollar Kosten und ein Rekord am ersten Tag: die Geschichte von GTA 6.",
    vor: "Was weisst du schon über GTA 6? Was hast du darüber gehört oder gelesen?",
    text: "Am 19. November 2026 war es endlich so weit: Das Videospiel «Grand Theft Auto VI», kurz GTA 6, ist erschienen. Viele Fans haben sehr lange darauf gewartet. Der Vorgänger GTA 5 kam schon 2013 heraus, also 13 Jahre früher.\n\nDie Firma Rockstar Games hat über zehn Jahre an dem Spiel gearbeitet. Tausende Menschen waren daran beteiligt. Fachleute schätzen, dass die Entwicklung mehr als eine Milliarde US-Dollar gekostet hat. Damit ist GTA 6 wohl das teuerste Videospiel aller Zeiten. Der Start wurde zweimal verschoben: Zuerst war er für 2025 geplant, dann für Frühling 2026.\n\nDas Warten hat sich für die Firma gelohnt. Schon vor dem Start wurden 32,5 Millionen Exemplare verkauft. Am ersten Tag nahm das Spiel laut der Firma Take-Two 3,79 Milliarden US-Dollar ein. Das ist mehr als jeder Kinofilm an einem einzigen Tag.\n\nGTA 6 gibt es zuerst nur für die Konsolen PlayStation 5 und Xbox Series. Wann eine Version für den PC kommt, ist noch nicht bekannt. Wichtig: Das Spiel ist erst ab 18 Jahren freigegeben, weil es viel Gewalt zeigt.",
    wort: [["erscheinen","auf den Markt kommen, veröffentlicht werden"],["der Vorgänger","der Teil, der vorher herausgekommen ist"],["schätzen","ungefähr berechnen"],["das Exemplar","ein einzelnes Stück, z. B. ein verkauftes Spiel"],["die Konsole","Gerät zum Spielen von Videospielen am Fernseher"]],
    mc: [
      { q: "Wann ist GTA 6 erschienen?", o: ["Am 19. November 2026","Im Jahr 2013","Im Frühling 2025"], a: 0 },
      { q: "Wie viel hat die Entwicklung laut Fachleuten gekostet?", o: ["Etwa eine Million Dollar","Mehr als eine Milliarde Dollar","Gar nichts"], a: 1 },
      { q: "Wie oft wurde der Start verschoben?", o: ["Nie","Einmal","Zweimal"], a: 2 },
      { q: "Für welche Geräte ist GTA 6 zuerst erschienen?", o: ["Für PlayStation 5 und Xbox Series","Nur für das Handy","Für alle Geräte und den PC"], a: 0 }
    ],
    rf: [
      { s: "Zwischen GTA 5 und GTA 6 liegen 13 Jahre.", a: true },
      { s: "Vor dem Start wurde das Spiel kaum gekauft.", a: false, x: "Schon vor dem Start wurden 32,5 Millionen Exemplare verkauft." },
      { s: "GTA 6 ist ab 18 Jahren freigegeben.", a: true }
    ],
    offen: [
      { q: "Warum sagt man, dass GTA 6 einen Rekord aufgestellt hat? Nenne eine Zahl aus dem Text.", l: "Am ersten Tag 3,79 Milliarden Dollar Einnahmen (mehr als jeder Kinofilm an einem Tag) oder 32,5 Millionen verkaufte Exemplare vor dem Start." },
      { q: "Warum ist GTA 6 erst ab 18? Was denkst du über diese Regel?", l: "Weil es viel Gewalt zeigt. Meinung individuell." }
    ] },

  { id: "wt-gta2", r: "wmotor", typ: "text", texttitel: "Text", titel: "Willkommen in Leonida: die Welt von GTA 6", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Palmen, Strände und Sumpfgebiete: GTA 6 spielt in einer Fantasie-Version von Florida. Und schon vor dem Start gab es einen riesigen Datendiebstahl.",
    vor: "Warum spielen viele Videospiele in Städten, die echten Städten ähneln? Was ist der Vorteil?",
    text: "GTA 6 spielt im erfundenen US-Bundesstaat Leonida. Er sieht aus wie Florida im Südosten der USA. Die grösste Stadt heisst Vice City und erinnert an Miami: Es gibt Hochhäuser, Strände, Palmen und viel Verkehr. Ausserhalb der Stadt findet man Sumpfgebiete, kleine Dörfer und Inseln.\n\nIm Spiel steuert man zwei Hauptfiguren: Lucia und Jason. Sie sind ein Paar und geraten in die Welt der Kriminalität. Lucia ist seit vielen Jahren die erste Frau in der Hauptrolle. Viele vergleichen die beiden mit Bonnie und Clyde, einem berühmten Verbrecherpaar aus den USA der 1930er-Jahre.\n\nDie Entwickler haben die Welt sehr genau gestaltet. Sie haben Strassen, Geschäfte und Menschen in Florida beobachtet, damit alles echt wirkt.\n\nSchon lange vor dem Start gab es Aufregung. Im September 2022 drang ein Hacker in die Computer von Rockstar Games ein. Er stahl Videos aus einer frühen Version des Spiels und stellte sie ins Internet. Es war einer der grössten Leaks in der Geschichte der Videospiele. Der Täter war ein junger Mann aus England. Ein Gericht ordnete später an, dass er in eine geschlossene Klinik muss.",
    wort: [["erfunden","nicht echt, ausgedacht"],["der Bundesstaat","ein Teil der USA mit eigener Regierung, z. B. Florida"],["das Sumpfgebiet","nasses Land mit viel Wasser und Pflanzen"],["der Hacker","Person, die ohne Erlaubnis in fremde Computer eindringt"],["der Leak","wenn geheime Informationen an die Öffentlichkeit kommen"]],
    mc: [
      { q: "Wo spielt GTA 6?", o: ["Im erfundenen Bundesstaat Leonida","In der Schweiz","Auf dem Mond"], a: 0 },
      { q: "An welche echte Stadt erinnert Vice City?", o: ["An New York","An Miami","An London"], a: 1 },
      { q: "Wer sind die Hauptfiguren?", o: ["Lucia und Jason","Bonnie und Clyde","Tommy und Carl"], a: 0 },
      { q: "Was passierte im September 2022?", o: ["Das Spiel erschien","Ein Hacker stahl Videos aus dem Spiel und stellte sie ins Internet","Rockstar wurde verkauft"], a: 1 }
    ],
    rf: [
      { s: "Leonida sieht aus wie Florida.", a: true },
      { s: "Bonnie und Clyde waren ein berühmtes Verbrecherpaar.", a: true },
      { s: "Der Hacker wurde nie gefunden.", a: false, x: "Es war ein junger Mann aus England, ein Gericht entschied über ihn." }
    ],
    offen: [
      { q: "Was haben die Entwickler gemacht, damit die Spielwelt echt wirkt?", l: "Sie haben Strassen, Geschäfte und Menschen in Florida beobachtet." },
      { q: "Warum ist ein Leak für eine Firma ein grosses Problem? Nenne einen Grund.", l: "Z. B. Überraschungen gehen verloren, unfertiges Material wirkt schlecht, Geheimnisse und Ideen können gestohlen werden, Schaden für Ruf und Geld." }
    ] },

  { id: "wt-gta3", r: "wmotor", typ: "text", texttitel: "Text", titel: "Ab 18: Warum GTA 6 nicht für Kinder ist", kanal: "Sachtext", dauer: "ca. 170 Wörter",
    kurz: "Alle reden über GTA 6, aber das Spiel ist ab 18. Was bedeutet die Altersfreigabe, und wie gefährlich sind brutale Spiele?",
    vor: "Hast du schon ein Spiel gespielt, das für dein Alter nicht freigegeben war? Wie haben deine Eltern reagiert?",
    text: "GTA 6 ist das grösste Thema in vielen Pausenhöfen. Trotzdem ist das Spiel erst ab 18 Jahren freigegeben. Auf der Packung und im Online-Shop steht die Zahl 18 der PEGI. PEGI ist ein europäisches System. Es zeigt, für welches Alter ein Spiel geeignet ist. Auch in der Schweiz gilt es.\n\nGTA 6 bekommt die höchste Stufe, weil es viel Gewalt zeigt. Im Spiel kann man Autos stehlen, schiessen und Menschen verletzen. Es gibt auch Drogen und sexuelle Inhalte. Die Bilder sind sehr realistisch.\n\nMachen solche Spiele Jugendliche gewalttätig? Forscherinnen und Forscher haben das oft untersucht. Die meisten sagen: Nur weil jemand ein brutales Spiel spielt, wird er nicht zum Täter. Es gibt aber Hinweise, dass Jugendliche nach dem Spielen kurz aggressiver sein können. Bei Kindern können realistische Gewaltszenen auch Angst und Albträume auslösen.\n\nEin anderes Problem ist die Zeit. Grosse Spiele wie GTA sind so gemacht, dass man immer weiterspielen will. Wer jede Nacht bis spät spielt, schläft zu wenig und ist in der Schule müde. Fachleute raten deshalb: Altersfreigaben beachten, Spielzeiten abmachen und nicht vor dem Schlafen spielen.",
    wort: [["die Altersfreigabe","Angabe, ab welchem Alter etwas erlaubt oder geeignet ist"],["geeignet","passend, gut für jemanden"],["realistisch","so, dass es echt wirkt"],["gewalttätig","jemand, der andere schlägt oder verletzt"],["auslösen","der Grund für etwas sein, etwas beginnen lassen"]],
    mc: [
      { q: "Was ist PEGI?", o: ["Ein europäisches System für Altersfreigaben von Spielen","Eine Spielkonsole","Eine Firma, die GTA entwickelt hat"], a: 0 },
      { q: "Warum ist GTA 6 ab 18?", o: ["Weil es viel Gewalt, Drogen und sexuelle Inhalte zeigt","Weil es zu lang ist","Weil es teuer ist"], a: 0 },
      { q: "Was sagen die meisten Forschenden?", o: ["Brutale Spiele machen alle Jugendlichen zu Tätern","Ein brutales Spiel allein macht niemanden zum Täter","Spiele haben gar keine Wirkung"], a: 1 },
      { q: "Was raten Fachleute?", o: ["Jede Nacht lange spielen","Altersfreigaben beachten und Spielzeiten abmachen","Nur vor dem Schlafen spielen"], a: 1 }
    ],
    rf: [
      { s: "Das PEGI-System gilt auch in der Schweiz.", a: true },
      { s: "Bei Kindern können realistische Gewaltszenen Angst und Albträume auslösen.", a: true },
      { s: "Spielen bis spät in die Nacht hat keine Folgen für die Schule.", a: false, x: "Man schläft zu wenig und ist in der Schule müde." }
    ],
    offen: [
      { q: "Nenne zwei mögliche Probleme, wenn Kinder GTA 6 spielen.", l: "Z. B. Angst und Albträume, kurzfristig mehr Aggression, zu viel Zeit und zu wenig Schlaf, ungeeignete Inhalte (Drogen, Sex)." },
      { q: "Dein jüngerer Bruder (12) will GTA 6 spielen, weil alle darüber reden. Was sagst du ihm? Schreibe zwei bis drei Sätze.", l: "Individuelle Antwort, z. B. erklären, warum es ab 18 ist, Alternativen vorschlagen, mit den Eltern sprechen." }
    ] }
];

const S = {
"dl-mpa": {
  2: { vor: "Welche Fähigkeiten aus der Schule (z. B. Mathematik, Deutsch, Biologie) braucht man in einer Arztpraxis? Nenne Beispiele.",
    dauer: "ca. 250 Wörter", text: "Morgens um halb acht in einer Hausarztpraxis in Wetzikon: Das Telefon klingelt schon, bevor die Türe offen ist. Lara, 17, ist im zweiten Lehrjahr als Medizinische Praxisassistentin. Sie nimmt Anrufe entgegen, vergibt Termine und entscheidet mit ihrer Berufsbildnerin, wer heute noch kommen muss. Wer starke Brustschmerzen hat, darf nicht bis nächste Woche warten.\n\nIm Laufe des Tages wechselt Lara oft den Arbeitsplatz. Am Empfang begrüsst sie Patientinnen und Patienten und erfasst ihre Daten im Computer. Im Labor nimmt sie Blut ab und bestimmt zum Beispiel den Blutzucker. Im Röntgenraum stellt sie das Gerät ein und schützt die Patienten mit einer Bleischürze vor unnötiger Strahlung. Zwischendurch misst sie den Blutdruck, macht ein EKG oder verbindet eine Wunde. Nach jeder Behandlung reinigt sie die Instrumente und sterilisiert sie.\n\nViele Aufgaben sind administrativ. MPAs führen die Patientendossiers, schreiben Berichte für Spitäler, erstellen Rechnungen für die Krankenkassen und bestellen Medikamente und Material. Dabei müssen sie sehr genau arbeiten, denn ein Fehler bei einem Laborwert oder einer Rechnung kann Folgen haben. Ausserdem gilt die Schweigepflicht: Was in der Praxis besprochen wird, darf Lara niemandem erzählen, auch nicht ihren Freundinnen.\n\nDie Lehre dauert drei Jahre. Lara arbeitet vier Tage in der Praxis und geht einen bis zwei Tage in die Berufsfachschule. Dort lernt sie Fächer wie Anatomie, Labor, Röntgen und Administration. Der Lohn steigt von etwa 400 bis 700 Franken im ersten auf etwa 1200 bis 1500 Franken im dritten Lehrjahr.\n\n«Am schönsten ist es, wenn Patienten sich bedanken», sagt Lara. «Schwierig ist es, wenn jemand ungeduldig wird, weil das Wartezimmer voll ist.»",
    wort: [["die Berufsbildnerin","Person, die Lernende im Betrieb ausbildet"],["die Bleischürze","schwere Schürze, die vor Röntgenstrahlen schützt"],["administrativ","mit Büro und Verwaltung zu tun"],["das Patientendossier","Akte mit allen Informationen zu einer Patientin oder einem Patienten"],["die Schweigepflicht","Pflicht, nichts über Patienten weiterzuerzählen"]],
    mc: [
      { q: "Warum darf ein Patient mit starken Brustschmerzen nicht bis nächste Woche warten?", o: ["Weil es ein Notfall sein kann","Weil die Praxis dann geschlossen ist","Weil Lara frei hat","Weil er zu laut ist"], a: 0 },
      { q: "Wozu braucht man im Röntgen eine Bleischürze?", o: ["Gegen Kälte","Zum Schutz vor unnötiger Strahlung","Damit die Kleider sauber bleiben","Als Uniform"], a: 1 },
      { q: "Was bedeutet Schweigepflicht für Lara?", o: ["Sie darf in der Praxis nicht sprechen","Sie darf nichts über Patienten weitererzählen","Sie muss immer leise telefonieren","Sie darf keine Musik hören"], a: 1 },
      { q: "Wie viel verdient Lara ungefähr im dritten Lehrjahr?", o: ["100 bis 200 Franken","400 bis 700 Franken","1200 bis 1500 Franken","4000 Franken"], a: 2 }
    ],
    rf: [
      { s: "Lara arbeitet den ganzen Tag am gleichen Arbeitsplatz.", a: false, x: "Sie wechselt oft zwischen Empfang, Labor und Röntgen." },
      { s: "Ein Fehler bei einem Laborwert kann Folgen haben.", a: true },
      { s: "In der Berufsfachschule lernt Lara auch Anatomie.", a: true },
      { s: "Lara findet es schön, wenn sich Patienten bedanken.", a: true }
    ],
    offen: [
      { q: "Ordne Laras Aufgaben in drei Gruppen: Empfang, Medizin (Labor/Röntgen/Behandlung) und Büro. Nenne je zwei Aufgaben.", l: "Empfang: Telefon, Termine, Patienten begrüssen, Daten erfassen. Medizin: Blut abnehmen, Blutzucker, Röntgen, Blutdruck, EKG, Wunden verbinden, Instrumente sterilisieren. Büro: Dossiers, Berichte, Rechnungen, Bestellungen." },
      { q: "Warum ist die Schweigepflicht in diesem Beruf so wichtig? Erkläre mit einem Beispiel.", l: "Gesundheitsdaten sind sehr privat; Patienten müssen vertrauen können. Beispiel: Wenn eine Nachbarin von einer Krankheit erfährt, kann das peinlich oder schädlich sein." }
    ] },
  3: { vor: "Die Bevölkerung wird älter, und es gibt immer weniger Hausärztinnen und Hausärzte. Was bedeutet das für Berufe in der Arztpraxis?",
    dauer: "ca. 300 Wörter", text: "Wer an eine Arztpraxis denkt, denkt meist an die Ärztin oder den Arzt. Dabei hängt der Betrieb einer Praxis zu einem grossen Teil von den Medizinischen Praxisassistentinnen und -assistenten ab. Sie sind die erste Ansprechperson für Patientinnen und Patienten, organisieren die Abläufe und übernehmen viele medizinische Aufgaben selbstständig.\n\nDer Beruf verbindet drei Bereiche, die sonst oft getrennt sind. Erstens die Betreuung von Menschen: Am Empfang und am Telefon muss eine MPA freundlich bleiben, auch wenn das Wartezimmer voll ist und jemand ungeduldig wird. Sie muss ausserdem einschätzen, wie dringend ein Anliegen ist. Diese erste Einschätzung nennt man Triage. Zweitens medizinisch-technische Arbeiten: Blutentnahmen, Laboranalysen, EKG, Röntgenaufnahmen, Impfungen oder Wundversorgung. Hier ist Präzision gefragt, denn falsche Werte können zu einer falschen Behandlung führen. Drittens die Administration: Patientendossiers, Abrechnungen mit den Krankenkassen, Korrespondenz und die Verwaltung des Materiallagers.\n\nDiese Vielseitigkeit macht den Beruf attraktiv, verlangt aber auch viel. In der Lehre, die drei Jahre dauert, lernen die Lernenden in der Praxis, in der Berufsfachschule und in überbetrieblichen Kursen. Wer gute schulische Leistungen hat, kann zusätzlich die Berufsmaturität machen.\n\nDie Zukunftsaussichten sind gut. In der Schweiz fehlen Hausärztinnen und Hausärzte, gleichzeitig steigt die Zahl älterer Menschen mit chronischen Krankheiten wie Diabetes. Deshalb übernehmen gut ausgebildete MPAs immer mehr Verantwortung. Mit der Weiterbildung zur Medizinischen Praxiskoordinatorin können sie zum Beispiel chronisch kranke Patienten selbstständig beraten und begleiten oder eine Praxis organisatorisch leiten. Andere entscheiden sich nach der Lehre für eine höhere Fachschule, etwa in der Biomedizinischen Analytik oder in der Pflege.\n\nKritisch sehen viele Berufsleute allerdings den Lohn. Gemessen an der Verantwortung und der Belastung verdienen MPAs eher wenig. Zudem verlassen viele den Beruf nach einigen Jahren. Der Berufsverband fordert deshalb bessere Arbeitsbedingungen, damit die Fachkräfte bleiben.",
    wort: [["die Ansprechperson","Person, an die man sich mit Fragen wendet"],["die Triage","Einschätzung, wie dringend jemand Hilfe braucht"],["die Präzision","grosse Genauigkeit"],["chronisch","lange dauernd, nicht heilbar in kurzer Zeit"],["die Weiterbildung","Ausbildung nach der Lehre, um mehr zu können"],["der Berufsverband","Verein, der die Interessen eines Berufs vertritt"]],
    mc: [
      { q: "Welche drei Bereiche verbindet der Beruf laut Text?", o: ["Betreuung, medizinisch-technische Arbeiten, Administration","Kochen, Putzen, Einkaufen","Sport, Musik, Kunst","Bau, Holz, Metall"], a: 0 },
      { q: "Was ist mit «Triage» gemeint?", o: ["Das Sterilisieren von Instrumenten","Die erste Einschätzung, wie dringend ein Anliegen ist","Eine Abrechnung mit der Krankenkasse","Ein Röntgenbild"], a: 1 },
      { q: "Warum übernehmen MPAs laut Text immer mehr Verantwortung?", o: ["Weil es zu viele Ärzte gibt","Weil Hausärzte fehlen und mehr ältere, chronisch kranke Menschen betreut werden müssen","Weil Praxen schliessen","Weil Computer alles machen"], a: 1 },
      { q: "Was kritisieren viele Berufsleute?", o: ["Die langen Ferien","Den eher tiefen Lohn im Vergleich zur Verantwortung","Die zu kurze Lehre","Die vielen Patienten aus dem Ausland"], a: 1 }
    ],
    rf: [
      { s: "Mit der Weiterbildung zur Medizinischen Praxiskoordinatorin kann man chronisch kranke Patienten selbstständig begleiten.", a: true },
      { s: "Nach der MPA-Lehre gibt es keine Weiterbildungsmöglichkeiten.", a: false, x: "Es gibt z. B. die Praxiskoordinatorin oder höhere Fachschulen (Biomedizinische Analytik, Pflege)." },
      { s: "Viele MPAs verlassen den Beruf nach einigen Jahren.", a: true },
      { s: "Falsche Laborwerte können zu einer falschen Behandlung führen.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum gerade die Verbindung von Betreuung, Technik und Administration den Beruf anspruchsvoll macht.", l: "Man muss gleichzeitig freundlich und belastbar mit Menschen umgehen, technisch präzise arbeiten und administrativ genau sein; man wechselt oft zwischen sehr verschiedenen Aufgaben, oft unter Zeitdruck." },
      { q: "Der Text nennt Probleme im Gesundheitswesen (Hausärztemangel, mehr chronisch Kranke). Erkläre den Zusammenhang mit den Zukunftsaussichten für MPAs.", l: "Weil Ärztinnen fehlen und mehr Betreuung nötig ist, übernehmen MPAs mehr Aufgaben (Beratung, Begleitung); der Beruf wird wichtiger und es braucht mehr Fachkräfte." },
      { q: "Der Berufsverband fordert bessere Arbeitsbedingungen. Mache zwei konkrete Vorschläge und begründe sie.", l: "Z. B. höherer Lohn (Verantwortung anerkennen), planbare Arbeitszeiten, Weiterbildung bezahlen, mehr Personal gegen Stress; Begründung: Fachkräfte bleiben im Beruf." }
    ] }
},
"wt-flaggen": {
  2: { vor: "Wie viele Sprachen sprichst du? In welchen Situationen brauchst du welche Sprache?",
    dauer: "ca. 250 Wörter", text: "Fachleute zählen heute rund 7000 Sprachen auf der Welt. Sie sind sehr ungleich verteilt. Nur etwa zwei Dutzend Sprachen haben jeweils über 50 Millionen Sprecherinnen und Sprecher. Gleichzeitig gibt es tausende Sprachen, die nur noch von ein paar hundert oder tausend Menschen gesprochen werden, oft nur noch von älteren Leuten. Wenn Kinder eine Sprache nicht mehr lernen, stirbt sie aus. Forschende befürchten, dass bis Ende des Jahrhunderts etwa die Hälfte aller Sprachen verschwunden sein wird.\n\nDie Schweiz ist ein Beispiel für ein mehrsprachiges Land. Es gibt vier Landessprachen. Rund 60 Prozent der Bevölkerung nennen Deutsch als Hauptsprache, etwa 23 Prozent Französisch, etwa 8 Prozent Italienisch und weniger als ein Prozent Rätoromanisch. Ausserdem sprechen viele Menschen eine weitere Sprache, zum Beispiel Englisch, Portugiesisch oder Albanisch. Mehrsprachigkeit ist also für viele Schweizerinnen und Schweizer ganz normal.\n\nWie Sprachen gehören auch Flaggen zur Identität eines Landes. Viele Flaggen erzählen Geschichte. Das weisse Kreuz auf rotem Grund der Schweiz geht auf das Wappen des Kantons Schwyz zurück. Erst im 19. Jahrhundert wurde es zur offiziellen Fahne. Die Schweizer Flagge ist quadratisch. Diese Form hat sonst nur noch der Vatikan. Schiffe unter Schweizer Flagge benutzen allerdings eine rechteckige Version.\n\nAndere Flaggen zeigen Gemeinsamkeiten zwischen Ländern. Viele afrikanische Länder verwenden Grün, Gelb und Rot, viele arabische Länder Rot, Weiss, Schwarz und Grün. In Skandinavien tragen alle Länder ein Kreuz, das etwas nach links verschoben ist. Wer Flaggen genau anschaut, lernt also viel über die Geschichte der Welt.",
    wort: [["ungleich verteilt","nicht überall gleich viel"],["aussterben","ganz verschwinden"],["mehrsprachig","mit mehreren Sprachen"],["das Wappen","Zeichen einer Familie, Stadt oder eines Kantons"],["die Gemeinsamkeit","etwas, das gleich ist"]],
    mc: [
      { q: "Wann stirbt eine Sprache aus?", o: ["Wenn Kinder sie nicht mehr lernen","Wenn sie zu schwierig ist","Wenn sie keine Flagge hat","Wenn sie im Internet steht"], a: 0 },
      { q: "Wie viel Prozent der Schweizer Bevölkerung nennen Französisch als Hauptsprache?", o: ["Etwa 8 %","Etwa 23 %","Etwa 60 %","Weniger als 1 %"], a: 1 },
      { q: "Woher kommt das Schweizer Kreuz?", o: ["Vom Wappen des Kantons Schwyz","Von der dänischen Flagge","Vom Roten Kreuz","Aus Italien"], a: 0 },
      { q: "Welche Flagge benutzen Schiffe der Schweiz?", o: ["Eine quadratische","Eine rechteckige Version","Gar keine","Die Flagge der EU"], a: 1 }
    ],
    rf: [
      { s: "Nur etwa zwei Dutzend Sprachen haben jeweils über 50 Millionen Sprecher.", a: true },
      { s: "Rätoromanisch ist die häufigste Hauptsprache in der Schweiz.", a: false, x: "Weniger als ein Prozent nennen Rätoromanisch als Hauptsprache." },
      { s: "Das Schweizer Kreuz wurde im 19. Jahrhundert zur offiziellen Fahne.", a: true },
      { s: "Die skandinavischen Länder haben alle ein Kreuz in der Flagge.", a: true }
    ],
    offen: [
      { q: "Warum befürchten Forschende, dass viele Sprachen verschwinden? Erkläre mit dem Text.", l: "Viele Sprachen werden nur noch von wenigen, oft älteren Menschen gesprochen; wenn Kinder sie nicht mehr lernen, sterben sie aus." },
      { q: "Was zeigen Flaggen über die Geschichte der Welt? Nenne ein Beispiel aus dem Text.", l: "Z. B. das Schweizer Kreuz aus dem Wappen von Schwyz; gemeinsame Farben afrikanischer oder arabischer Länder; das skandinavische Kreuz." }
    ] },
  3: { vor: "Ist es ein Verlust für die Menschheit, wenn eine kleine Sprache verschwindet? Was geht dabei verloren?",
    dauer: "ca. 300 Wörter", text: "Sprachen und Flaggen haben auf den ersten Blick wenig miteinander zu tun. Doch beide sind Zeichen von Zugehörigkeit. Eine Sprache verbindet Menschen, die sich verstehen; eine Flagge macht sichtbar, wer zu einem Staat oder einer Gemeinschaft gehört. Genau deshalb sind beide oft Gegenstand von Konflikten.\n\nVon den rund 7000 Sprachen der Welt sind viele bedroht. Häufig verschwinden Sprachen nicht freiwillig. In vielen Ländern wurde Kindern früher verboten, in der Schule ihre Muttersprache zu sprechen, etwa indigenen Kindern in Kanada oder Australien. Heute verdrängen vor allem wirtschaftliche Gründe kleine Sprachen: Wer Arbeit finden will, lernt die grosse Landessprache oder Englisch. Mit einer Sprache geht jedoch mehr verloren als nur Wörter. Es verschwinden Geschichten, Lieder, Wissen über Pflanzen und Tiere und eine bestimmte Art, die Welt zu sehen.\n\nDie Schweiz versucht, ihre kleinste Landessprache zu schützen. Rätoromanisch wird nur noch von wenigen zehntausend Menschen gesprochen, vor allem im Kanton Graubünden. Bund und Kanton unterstützen Schulen, Medien und Bücher auf Rätoromanisch. Trotzdem wechseln viele Familien im Alltag ins Deutsche.\n\nAuch Flaggen sind nicht nur Stoff. Als der Kosovo 2008 seine Unabhängigkeit erklärte, wählte er bewusst eine neutrale Flagge: blauer Grund, die goldene Form des Landes und sechs weisse Sterne für die Bevölkerungsgruppen. Viele Menschen im Kosovo benutzen im Alltag aber die albanische Flagge mit dem schwarzen Doppeladler, weil sie sich damit stärker verbunden fühlen. Bei Fussballspielen zwischen der Schweiz und Serbien wurde der Doppeladler, mit den Händen geformt, sogar zum politischen Streitfall.\n\nIn einem mehrsprachigen und vielfältigen Land wie der Schweiz stellt sich deshalb eine wichtige Frage: Kann man sich mit mehreren Sprachen und mehreren Flaggen gleichzeitig verbunden fühlen? Für viele Jugendliche mit Wurzeln in einem anderen Land lautet die Antwort klar ja. Zu Hause sprechen sie Albanisch, Türkisch oder Portugiesisch, in der Schule Deutsch, und bei einer Weltmeisterschaft jubeln sie manchmal für zwei Mannschaften.",
    wort: [["die Zugehörigkeit","das Gefühl, zu einer Gruppe zu gehören"],["indigen","zur ursprünglichen Bevölkerung eines Gebiets gehörend"],["verdrängen","an den Rand schieben, ersetzen"],["neutral","keine Seite bevorzugend"],["der Streitfall","Sache, über die gestritten wird"],["die Wurzeln (einer Person)","die Herkunft einer Person oder ihrer Familie"]],
    mc: [
      { q: "Was haben Sprachen und Flaggen laut Text gemeinsam?", o: ["Beide sind Zeichen von Zugehörigkeit","Beide sind aus Stoff","Beide sind überall gleich","Beide gibt es nur in Europa"], a: 0 },
      { q: "Was verdrängt heute vor allem kleine Sprachen?", o: ["Wirtschaftliche Gründe, z. B. die Arbeitssuche","Das Wetter","Flaggen","Sport"], a: 0 },
      { q: "Warum wählte der Kosovo eine neutrale Flagge?", o: ["Um alle Bevölkerungsgruppen einzubeziehen","Weil Blau billig ist","Weil die alte Flagge verloren ging","Weil die Schweiz es verlangte"], a: 0 },
      { q: "Welche Haltung beschreibt der Schluss des Textes?", o: ["Man kann sich mit mehreren Sprachen und Flaggen verbunden fühlen","Man darf nur eine Flagge haben","Mehrsprachigkeit ist schlecht","Jugendliche interessieren sich nicht für Herkunft"], a: 0 }
    ],
    rf: [
      { s: "Indigenen Kindern in Kanada oder Australien wurde früher verboten, in der Schule ihre Muttersprache zu sprechen.", a: true },
      { s: "Mit einer Sprache gehen laut Text nur Wörter verloren.", a: false, x: "Es verschwinden auch Geschichten, Lieder, Wissen und eine Art, die Welt zu sehen." },
      { s: "Rätoromanisch wird vor allem im Kanton Graubünden gesprochen.", a: true },
      { s: "Die Flagge des Kosovo zeigt einen schwarzen Doppeladler.", a: false, x: "Das ist die albanische Flagge. Die kosovarische zeigt die Form des Landes und sechs Sterne." }
    ],
    offen: [
      { q: "Erkläre mit dem Text, warum Sprachen und Flaggen oft Gegenstand von Konflikten sind.", l: "Beide zeigen Zugehörigkeit und Identität; wer eine Sprache verbietet oder eine Flagge zeigt, sagt etwas darüber, wer dazugehört und wer nicht (Beispiele: Verbote in Schulen, Doppeladler bei Fussballspielen)." },
      { q: "Was tut die Schweiz für das Rätoromanische, und warum reicht das vielleicht nicht? Begründe.", l: "Unterstützung von Schulen, Medien, Büchern. Reicht vielleicht nicht, weil Familien im Alltag ins Deutsche wechseln und wirtschaftliche Gründe für grosse Sprachen sprechen." },
      { q: "«Man kann sich mit mehreren Sprachen und Flaggen gleichzeitig verbunden fühlen.» Nimm Stellung und beziehe dich auf eigene Erfahrungen oder Beobachtungen.", l: "Individuelle Stellungnahme mit Begründung und Beispielen (Familie, Schule, Sport)." }
    ] }
},
"wt-erstesauto": {
  2: { vor: "Welche Kosten hat ein Auto jeden Monat, auch wenn es nur in der Garage steht?",
    dauer: "ca. 250 Wörter", text: "Elias ist 18 und hat gerade die Autoprüfung bestanden. Jetzt möchte er ein eigenes Auto. Ein gebrauchter Kleinwagen für 8000 Franken scheint ihm günstig. Doch sein Onkel, der in einer Garage arbeitet, rechnet mit ihm nach.\n\nZuerst kommt der Weg zum Ausweis. Elias hat mit 17 den Nothilfekurs, den Sehtest und die Theorieprüfung gemacht und dann den Lernfahrausweis bekommen. Weil er jünger als 20 war, musste er mindestens zwölf Monate üben. Dazu kamen der Verkehrskundeunterricht, Fahrstunden und die Prüfung. Insgesamt hat er rund 3500 Franken bezahlt. Und es ist noch nicht vorbei: Innerhalb eines Jahres muss er einen Weiterbildungstag besuchen, und während drei Jahren hat er den Führerausweis auf Probe.\n\nDann rechnet der Onkel die Kosten für das Auto. Für einen jungen Neulenker ist die Versicherung teuer, gut 1500 Franken pro Jahr. Die Verkehrssteuer kostet je nach Kanton einige hundert Franken. Für Benzin rechnet Elias bei 10 000 Kilometern pro Jahr etwa 1300 Franken. Service, Reparaturen und Reifen kosten etwa 1000 Franken. Ein Parkplatz in der Nähe der Wohnung kostet 100 Franken pro Monat. Und weil ein Auto jedes Jahr an Wert verliert, muss man auch das einrechnen.\n\nAm Schluss staunt Elias: Sein Kleinwagen kostet ihn über 500 Franken pro Monat. Als Lernender im dritten Lehrjahr verdient er etwa 1300 Franken. Ein Abo für Zug und Bus im Kanton Zürich wäre deutlich günstiger. Elias entscheidet sich, noch ein Jahr zu sparen und für längere Fahrten ein Auto zu teilen.",
    wort: [["gebraucht","nicht neu, schon von jemandem benutzt"],["der Verkehrskundeunterricht (VKU)","Kurs, in dem man Verhalten im Verkehr lernt"],["an Wert verlieren","weniger wert werden"],["einrechnen","bei einer Rechnung mitzählen"],["das Abo","Fahrkarte für eine längere Zeit"]],
    mc: [
      { q: "Wie viel hat Elias für den Weg zum Ausweis ungefähr bezahlt?", o: ["350 Franken","3500 Franken","35 000 Franken","Nichts"], a: 1 },
      { q: "Warum musste Elias mindestens zwölf Monate mit dem Lernfahrausweis üben?", o: ["Weil er jünger als 20 war","Weil er durchgefallen ist","Weil sein Onkel es wollte","Weil er kein Auto hatte"], a: 0 },
      { q: "Welche Kosten sind für Elias am höchsten pro Jahr?", o: ["Versicherung","Reifen","Parkbusse","Waschanlage"], a: 0 },
      { q: "Wie entscheidet sich Elias am Schluss?", o: ["Er kauft sofort ein neues Auto","Er spart noch ein Jahr und teilt für längere Fahrten ein Auto","Er kauft ein Motorrad","Er gibt den Ausweis zurück"], a: 1 }
    ],
    rf: [
      { s: "Elias' Onkel arbeitet in einer Garage.", a: true },
      { s: "Die Verkehrssteuer ist in allen Kantonen gleich hoch.", a: false, x: "Sie ist je nach Kanton verschieden." },
      { s: "Ein Auto verliert jedes Jahr an Wert.", a: true },
      { s: "Das Auto kostet Elias weniger als 200 Franken pro Monat.", a: false, x: "Es kostet über 500 Franken pro Monat." }
    ],
    offen: [
      { q: "Rechne mit den Zahlen aus dem Text: Versicherung, Benzin, Service und Parkplatz für ein Jahr. Wie viel ist das ungefähr?", l: "1500 + 1300 + 1000 + 1200 (12 × 100) = etwa 5000 Franken pro Jahr, ohne Steuer und Wertverlust (also über 400 Franken pro Monat)." },
      { q: "Ist Elias' Entscheidung vernünftig? Begründe.", l: "Individuelle Antwort, z. B. ja: Kosten im Verhältnis zum Lehrlingslohn sehr hoch, ÖV günstiger; nein: wenn er für die Arbeit ein Auto braucht." }
    ] },
  3: { vor: "Junge Neulenkerinnen und Neulenker haben ein höheres Unfallrisiko. Welche Regeln könnten helfen?",
    dauer: "ca. 300 Wörter", text: "Für viele Jugendliche ist der Führerausweis ein Stück Freiheit. Die Schweiz hat den Weg dorthin in den letzten Jahren verändert, um Neulenkende sicherer zu machen. Seit 2021 kann man den Lernfahrausweis schon mit 17 Jahren beantragen. Wer jünger als 20 ist, darf aber erst nach mindestens zwölf Monaten Lernfahrzeit zur praktischen Prüfung. Die Idee dahinter: Wer länger und bei verschiedenen Bedingungen übt, zum Beispiel bei Regen, Schnee oder in der Nacht, macht später weniger Fehler. Die Beratungsstelle für Unfallverhütung empfiehlt, vor der Prüfung mehrere tausend Kilometer zu fahren.\n\nNach der Prüfung folgt die Probezeit von drei Jahren. Wer in dieser Zeit wegen einer mittelschweren oder schweren Verkehrsregelverletzung den Ausweis abgeben muss, bekommt ein zusätzliches Probejahr. Beim zweiten Mal wird der Ausweis annulliert, und man muss ganz von vorne beginnen, inklusive verkehrspsychologischer Abklärung. Für Neulenkende gilt zudem ein absolutes Alkoholverbot.\n\nDiese strengen Regeln haben einen Grund. Junge Lenkerinnen und vor allem junge Lenker sind in der Unfallstatistik übervertreten. Häufige Ursachen sind überhöhte Geschwindigkeit, Ablenkung durch das Handy und die Überschätzung der eigenen Fähigkeiten.\n\nNeben der Sicherheit spielt das Geld eine grosse Rolle. Die Ausbildung kostet mit Fahrstunden, Kursen und Gebühren schnell 3000 bis 4000 Franken. Ein eigenes Auto ist noch teurer. Der Touring Club Schweiz rechnet für einen Kleinwagen mit allen Kosten, also Wertverlust, Versicherung, Steuern, Treibstoff, Unterhalt und Parkplatz, mit mehreren hundert Franken pro Monat. Für junge Neulenkende sind die Versicherungsprämien wegen des höheren Risikos besonders hoch.\n\nGleichzeitig verändert sich die Einstellung zum Auto. In Städten wie Zürich oder Basel verzichten viele junge Menschen bewusst auf ein eigenes Auto. Sie nutzen den öffentlichen Verkehr, das Velo oder Carsharing. Auf dem Land dagegen ist ein Auto oft nötig, etwa für Arbeitszeiten am frühen Morgen. Ob sich der Führerausweis und ein eigenes Auto lohnen, hängt also stark von Wohnort, Beruf und Lebensstil ab.",
    wort: [["beantragen","offiziell um etwas bitten, ein Gesuch stellen"],["annullieren","für ungültig erklären"],["übervertreten","häufiger vorkommen, als es dem Anteil entspricht"],["die Überschätzung","wenn man denkt, man kann mehr, als man wirklich kann"],["die Prämie","Betrag, den man regelmässig für eine Versicherung bezahlt"],["das Carsharing","mehrere Personen benutzen gemeinsam Autos"]],
    mc: [
      { q: "Was ist die Idee hinter den zwölf Monaten Lernfahrzeit?", o: ["Wer länger und bei verschiedenen Bedingungen übt, macht später weniger Fehler","Die Fahrschulen sollen mehr verdienen","Man soll später Auto fahren","Man soll weniger fahren"], a: 0 },
      { q: "Was passiert beim zweiten Ausweisentzug in der Probezeit?", o: ["Nichts","Der Ausweis wird annulliert, und man muss neu beginnen","Man bekommt eine Busse von 20 Franken","Die Probezeit wird kürzer"], a: 1 },
      { q: "Welche Unfallursachen nennt der Text?", o: ["Zu hohe Geschwindigkeit, Handy, Selbstüberschätzung","Zu langsames Fahren","Zu viele Fahrstunden","Zu gute Reifen"], a: 0 },
      { q: "Wovon hängt laut Schluss ab, ob sich ein Auto lohnt?", o: ["Von Wohnort, Beruf und Lebensstil","Nur von der Farbe des Autos","Nur vom Alter","Vom Wetter"], a: 0 }
    ],
    rf: [
      { s: "Für Neulenkende gilt ein absolutes Alkoholverbot.", a: true },
      { s: "Bei einem ersten Ausweisentzug in der Probezeit verlängert sich die Probezeit um ein Jahr.", a: true },
      { s: "Auf dem Land brauchen die Menschen laut Text nie ein Auto.", a: false, x: "Auf dem Land ist ein Auto oft nötig, z. B. für frühe Arbeitszeiten." },
      { s: "Junge Lenker sind in der Unfallstatistik übervertreten.", a: true }
    ],
    offen: [
      { q: "Erkläre die Regeln für Neulenkende (Lernfahrzeit, Probezeit, Alkohol) und welches Ziel sie verfolgen.", l: "Mindestens 12 Monate Lernfahrzeit unter 20, drei Jahre Probezeit mit Verlängerung/Annullierung bei Verstössen, absolutes Alkoholverbot. Ziel: weniger Unfälle von unerfahrenen Lenkenden." },
      { q: "Warum sind die Versicherungsprämien für junge Neulenkende höher? Ist das fair? Begründe.", l: "Weil sie statistisch öfter Unfälle haben. Fairness individuell: z. B. fair, weil Risiko höher; unfair, weil vorsichtige junge Fahrer mitbezahlen." },
      { q: "Vergleiche die Situation in der Stadt und auf dem Land. Wo würdest du ein Auto brauchen? Beziehe dich auf deinen Wohnort und deinen künftigen Beruf.", l: "Individuelle Antwort mit Bezug auf ÖV, Arbeitszeiten, Wohnort." }
    ] }
},
"wt-formel1": {
  2: { vor: "Was glaubst du: Welche Berufe braucht es in einem Formel-1-Team ausser den Fahrern?",
    dauer: "ca. 250 Wörter", text: "Hinwil ist ein Dorf im Zürcher Oberland mit rund 12 000 Einwohnerinnen und Einwohnern. Trotzdem kennen Motorsportfans auf der ganzen Welt seinen Namen. Hier steht die Fabrik eines Formel-1-Teams.\n\nGegründet hat das Team der Schweizer Peter Sauber. Er begann in den 1970er-Jahren, Rennwagen zu bauen. 1993 fuhr sein Team zum ersten Mal in der Formel 1. Über 30 Jahre lang war Sauber das einzige Schweizer Team in der Königsklasse. Viele bekannte Fahrer begannen ihre Karriere hier, zum Beispiel der Finne Kimi Räikkönen, der später Weltmeister wurde. Ende 2025 ging die Ära Sauber zu Ende. Seit 2026 gehört das Team dem deutschen Autohersteller Audi und heisst Audi F1 Team. Die Autos werden weiterhin in Hinwil entwickelt, die Motoren kommen aus Neuburg an der Donau in Deutschland.\n\nIn der Fabrik arbeiten hunderte Menschen: Ingenieurinnen, Mechaniker, Informatikerinnen, Polymechaniker, Lackierer und viele mehr. Jedes Teil wird genau geplant, gebaut und getestet. Im Windkanal prüfen sie, wie die Luft um das Auto strömt. Ein Formel-1-Auto besteht aus tausenden Teilen, viele davon aus leichtem, sehr festem Karbon.\n\nDie Saison 2026 brachte grosse Veränderungen. Elf Teams mit 22 Fahrern stehen am Start, neu dabei ist Cadillac aus den USA. Die neuen Motoren holen etwa die Hälfte ihrer Leistung aus Strom, und sie fahren mit nachhaltigem Treibstoff. Die Autos sind leichter und kleiner geworden. Für Audi ist das Ziel klar: In einigen Jahren will das Team um den Weltmeistertitel fahren.",
    wort: [["die Königsklasse","die höchste und wichtigste Klasse in einer Sportart"],["die Ära","ein längerer Zeitabschnitt"],["der Windkanal","Anlage, in der man testet, wie Luft um ein Fahrzeug strömt"],["das Karbon","sehr leichter, fester Kunststoff mit Kohlenstofffasern"],["nachhaltig","so, dass es die Umwelt möglichst wenig belastet"]],
    mc: [
      { q: "Wann fuhr das Team von Peter Sauber zum ersten Mal in der Formel 1?", o: ["1955","1970","1993","2026"], a: 2 },
      { q: "Welcher spätere Weltmeister begann bei Sauber?", o: ["Kimi Räikkönen","Michael Schumacher","Lewis Hamilton","Max Verstappen"], a: 0 },
      { q: "Wo werden die Motoren für das Audi-Team gebaut?", o: ["In Hinwil","In Neuburg an der Donau","In den USA","In Italien"], a: 1 },
      { q: "Wozu dient ein Windkanal?", o: ["Um zu prüfen, wie Luft um das Auto strömt","Um die Fahrer zu trocknen","Um Motoren zu kühlen","Um Reifen aufzupumpen"], a: 0 }
    ],
    rf: [
      { s: "Sauber war über 30 Jahre lang das einzige Schweizer Formel-1-Team.", a: true },
      { s: "In der Fabrik in Hinwil arbeiten nur Rennfahrer.", a: false, x: "Dort arbeiten hunderte Menschen in vielen Berufen, z. B. Ingenieurinnen, Mechaniker, Informatikerinnen." },
      { s: "Seit 2026 stehen 22 Fahrer am Start.", a: true },
      { s: "Die neuen Motoren fahren mit nachhaltigem Treibstoff.", a: true }
    ],
    offen: [
      { q: "Nenne vier Berufe, die es in einem Formel-1-Team braucht.", l: "Z. B. Ingenieurin, Mechaniker, Informatikerin, Polymechaniker, Lackierer, Fahrer, Teamchef, Logistiker." },
      { q: "Was hat sich 2026 in der Formel 1 verändert? Nenne drei Punkte.", l: "Elf Teams (neu Cadillac), Audi übernimmt Sauber, etwa die Hälfte der Leistung aus Strom, nachhaltiger Treibstoff, leichtere und kleinere Autos." }
    ] },
  3: { vor: "Die Formel 1 verbraucht viel Energie und reist um die ganze Welt. Kann ein solcher Sport umweltfreundlich sein?",
    dauer: "ca. 300 Wörter", text: "Die Formel 1 ist ein Widerspruch auf Rädern. Einerseits ist sie ein Labor für Spitzentechnologie: Bremsen, Aerodynamik oder Hybridmotoren, die zuerst im Rennsport entwickelt wurden, fanden später den Weg in normale Autos. Andererseits steht sie für Lärm, enormen Energieverbrauch und einen Rennkalender, für den Teams und tonnenweise Material jedes Jahr mehrmals um die Welt geflogen werden.\n\nMit den Regeln für 2026 will die Formel 1 auf diese Kritik antworten. Die Motoren beziehen nun etwa die Hälfte ihrer Leistung aus einem Elektromotor, deutlich mehr als vorher. Der Verbrennungsmotor fährt mit vollständig nachhaltigem Treibstoff, der nicht aus Erdöl hergestellt wird. Die Autos sind leichter und sollen dank beweglicher Flügel effizienter fahren. Bis 2030 will die Serie insgesamt klimaneutral werden.\n\nDie neuen Regeln haben auch Autohersteller angelockt. Audi hat das Schweizer Team Sauber in Hinwil übernommen, nachdem dieses über 30 Jahre in der Formel 1 gefahren war. Ford arbeitet mit Red Bull zusammen, und mit Cadillac ist erstmals seit 2016 wieder ein elftes Team dabei. Für die Hersteller ist die Formel 1 Werbung und Forschungslabor zugleich: Was sie über Batterien und Effizienz lernen, wollen sie in ihren Serienautos nutzen.\n\nKritikerinnen und Kritiker überzeugt das nur teilweise. Sie weisen darauf hin, dass der grösste Teil der Emissionen nicht auf der Strecke entsteht, sondern durch Transporte und die Anreise hunderttausender Fans. Ausserdem finden immer mehr Rennen in Ländern statt, die viel Geld bezahlen, aber die Menschenrechte zu wenig achten.\n\nFür die Schweiz hat die Formel 1 eine besondere Geschichte. Nach dem Unglück von Le Mans 1955, bei dem über 80 Zuschauer starben, verbot die Schweiz Rundstreckenrennen. Das Verbot gilt bis heute, mit einer Ausnahme für Elektrorennen. Trotzdem ist die Schweiz eng mit der Formel 1 verbunden: In Hinwil wird weiterhin Spitzentechnologie entwickelt, und viele Zulieferer und Fachleute aus der Schweiz arbeiten für die Rennserie.",
    wort: [["der Widerspruch","zwei Dinge, die nicht zusammenpassen"],["die Aerodynamik","wie Luft um einen Körper strömt"],["effizient","mit wenig Energie viel erreichen"],["klimaneutral","ohne zusätzliche Treibhausgase für das Klima"],["die Emission","Ausstoss von Abgasen oder Schadstoffen"],["der Zulieferer","Firma, die Teile für ein Produkt liefert"]],
    mc: [
      { q: "Warum nennt der Text die Formel 1 einen «Widerspruch auf Rädern»?", o: ["Sie entwickelt Spitzentechnologie, verursacht aber viel Lärm, Energieverbrauch und Reisen","Die Autos fahren rückwärts","Es gibt keine Regeln","Die Fahrer sind Laien"], a: 0 },
      { q: "Woher kommt der Treibstoff für den Verbrennungsmotor seit 2026?", o: ["Aus Erdöl","Er ist vollständig nachhaltig und nicht aus Erdöl","Aus Holz","Es gibt keinen Treibstoff mehr"], a: 1 },
      { q: "Was ist für Autohersteller der Nutzen der Formel 1?", o: ["Werbung und Forschung, z. B. über Batterien","Nur Spass für die Chefs","Gratis Autos","Steuern sparen"], a: 0 },
      { q: "Was kritisieren Kritikerinnen und Kritiker?", o: ["Die meisten Emissionen entstehen durch Transporte und Anreise; Rennen in Ländern mit Menschenrechtsproblemen","Die Autos sind zu langsam","Es gibt zu wenig Teams","Die Fahrer verdienen zu wenig"], a: 0 }
    ],
    rf: [
      { s: "Bis 2030 will die Formel 1 klimaneutral werden.", a: true },
      { s: "Seit 2016 gab es immer elf Teams.", a: false, x: "Mit Cadillac ist 2026 erstmals seit 2016 wieder ein elftes Team dabei." },
      { s: "In der Schweiz sind Rundstreckenrennen seit 1955 verboten, ausser Elektrorennen.", a: true },
      { s: "Technik aus dem Rennsport findet manchmal den Weg in normale Autos.", a: true }
    ],
    offen: [
      { q: "Fasse zusammen, wie die Formel 1 mit den Regeln 2026 umweltfreundlicher werden will. Nenne mindestens drei Massnahmen.", l: "Etwa die Hälfte der Leistung elektrisch, vollständig nachhaltiger Treibstoff, leichtere und effizientere Autos (bewegliche Flügel), Ziel klimaneutral bis 2030." },
      { q: "Warum überzeugen diese Massnahmen die Kritiker nur teilweise? Erkläre.", l: "Der grösste Teil der Emissionen entsteht durch Transporte und Fan-Anreise, nicht auf der Strecke; ausserdem Kritik an Rennen in Ländern mit Menschenrechtsproblemen." },
      { q: "Soll die Schweiz das Verbot von Rundstreckenrennen aufheben, damit ein Formel-1-Rennen stattfinden kann? Nimm Stellung mit Argumenten.", l: "Individuelle Stellungnahme, z. B. dafür: Tourismus, Wirtschaft, Hinwil-Bezug; dagegen: Sicherheit, Lärm, Umwelt, Verkehr." }
    ] }
},
"wt-motorrad": {
  2: { vor: "Welche Vorteile und Nachteile hat ein Motorrad im Vergleich zu einem Auto? Erstelle eine kleine Liste.",
    dauer: "ca. 250 Wörter", text: "Noa ist 16 und macht eine Lehre als Automobil-Mechatronikerin. Ihr Lehrbetrieb liegt in einem Dorf, und am Morgen fährt noch kein Bus. Deshalb macht sie den Ausweis für ein 125er-Motorrad. Seit 2021 ist das in der Schweiz schon ab 16 Jahren möglich. Vorher mussten Jugendliche bis 18 warten.\n\nDer Weg zum Ausweis hat mehrere Schritte. Zuerst braucht Noa einen Nothilfekurs und einen Sehtest. Dann lernt sie für die Theorieprüfung. Danach bekommt sie den Lernfahrausweis der Kategorie A1. Mit diesem darf sie üben, aber nicht mit einer Mitfahrerin. Pflicht ist ein Grundkurs von zwölf Stunden bei einer Fahrschule. Dort lernt sie, richtig zu bremsen, Kurven zu fahren und Gefahren zu erkennen. Zum Schluss kommt die praktische Prüfung.\n\nNoa freut sich auf die Freiheit. Ein 125er ist günstig im Unterhalt und braucht wenig Benzin, oft nur zwei bis drei Liter auf 100 Kilometer. Auch die Versicherung kostet weniger als bei einem Auto.\n\nIhre Eltern machen sich aber Sorgen. Und die Zahlen geben ihnen teilweise recht: Gemessen an der gefahrenen Strecke verunfallen Motorradfahrende viel häufiger schwer als Autofahrende. Bei einem Sturz fehlt jeder Schutz, den ein Auto bietet. Deshalb hat Noa mit ihren Eltern Regeln abgemacht: Sie trägt immer die volle Schutzausrüstung, auch im Sommer. Sie fährt mit Licht und hält genug Abstand. Und im ersten Winter, wenn die Strassen vereist sind, nimmt sie das Velo und fährt früher los.\n\n«Ich weiss, dass ich vorsichtig sein muss», sagt Noa. «Aber ohne Motorrad käme ich gar nicht zur Arbeit.»",
    wort: [["die Automobil-Mechatronikerin","Berufsfrau, die Autos wartet und repariert, auch die Elektronik"],["der Lehrbetrieb","Firma, in der man die Lehre macht"],["der Unterhalt","Kosten und Arbeit, damit etwas gut funktioniert"],["verunfallen","einen Unfall haben"],["vereist","mit Eis bedeckt"]],
    mc: [
      { q: "Warum braucht Noa ein Motorrad?", o: ["Weil am Morgen noch kein Bus zu ihrem Lehrbetrieb fährt","Weil sie Rennfahrerin werden will","Weil ihre Freunde eins haben","Weil es gratis ist"], a: 0 },
      { q: "Was darf Noa mit dem Lernfahrausweis nicht?", o: ["Üben","Mit einer Mitfahrerin fahren","Einen Helm tragen","Tagsüber fahren"], a: 1 },
      { q: "Wie lange dauert der obligatorische Grundkurs?", o: ["Zwei Stunden","Zwölf Stunden","Eine Woche","Ein Jahr"], a: 1 },
      { q: "Was macht Noa im ersten Winter, wenn es eisig ist?", o: ["Sie fährt besonders schnell","Sie nimmt das Velo und fährt früher los","Sie bleibt zu Hause","Sie fährt ohne Licht"], a: 1 }
    ],
    rf: [
      { s: "Ein 125er braucht oft nur zwei bis drei Liter Benzin auf 100 Kilometer.", a: true },
      { s: "Motorradfahrende verunfallen gemessen an der Strecke seltener schwer als Autofahrende.", a: false, x: "Sie verunfallen viel häufiger schwer." },
      { s: "Noa trägt die Schutzausrüstung auch im Sommer.", a: true },
      { s: "Im Grundkurs lernt man unter anderem richtig zu bremsen.", a: true }
    ],
    offen: [
      { q: "Beschreibe die Schritte zum A1-Ausweis in der richtigen Reihenfolge.", l: "Nothilfekurs und Sehtest, Theorieprüfung, Lernfahrausweis A1, obligatorischer Grundkurs (12 Std.), praktische Prüfung." },
      { q: "Welche Regeln haben Noa und ihre Eltern abgemacht? Findest du sie sinnvoll? Begründe.", l: "Immer volle Schutzausrüstung, mit Licht fahren, Abstand halten, im Winter bei Eis Velo. Beurteilung individuell." }
    ] },
  3: { vor: "Sollte der Staat Jugendlichen gefährliche Freizeitbeschäftigungen erlauben, oder muss er sie schützen?",
    dauer: "ca. 300 Wörter", text: "Seit dem 1. Januar 2021 dürfen Jugendliche in der Schweiz bereits mit 16 Jahren Motorräder bis 125 Kubikzentimeter und 11 Kilowatt fahren. Vorher lag das Mindestalter bei 18 Jahren. Der Bund passte damit die Schweizer Regeln an jene vieler europäischer Länder an und reagierte auf ein praktisches Bedürfnis: Viele Lernende auf dem Land haben frühmorgens keine Verbindung mit dem öffentlichen Verkehr.\n\nDie Ausbildung ist gestuft. Nach Nothilfekurs, Sehtest und Basistheorieprüfung erhalten die Jugendlichen den Lernfahrausweis. Innerhalb weniger Monate müssen sie einen praktischen Grundkurs besuchen, bevor sie zur Prüfung antreten. Ab 18 Jahren können sie in die Kategorie A wechseln, fahren aber zuerst mit einer Leistungsbegrenzung auf 35 Kilowatt. Erst nach zwei Jahren unfallfreier Praxis dürfen sie unbeschränkt starke Maschinen fahren. Dieses Stufenmodell soll sicherstellen, dass Erfahrung und Motorleistung gemeinsam wachsen.\n\nUnbestritten ist, dass Motorradfahren riskanter ist als Autofahren. Pro gefahrenen Kilometer ist das Risiko, schwer verletzt oder getötet zu werden, um ein Vielfaches höher. Typische Unfallursachen sind nicht angepasste Geschwindigkeit, besonders in Kurven auf Landstrassen, und Situationen, in denen Autofahrende ein Motorrad übersehen, zum Beispiel beim Linksabbiegen. Fachleute der Unfallverhütung betonen deshalb, dass Schutzkleidung zwar Verletzungen mildert, Unfälle aber nicht verhindert. Entscheidend seien vorausschauendes Fahren, Sichtbarkeit und regelmässige Fahrtrainings.\n\nBefürworter der neuen Regelung argumentieren, dass Jugendliche auf einer modernen 125er mit ABS sicherer unterwegs seien als auf einem alten, schlecht gewarteten Roller. Ausserdem lernten sie früh, sich im Verkehr zu bewegen, was ihnen später auch als Autofahrende nütze. Kritische Stimmen hingegen befürchten mehr Unfälle bei einer Altersgruppe, die Risiken ohnehin oft unterschätzt.\n\nErste Zahlen zeigen ein gemischtes Bild: Die Zahl der jungen Motorradfahrenden ist deutlich gestiegen, und damit auch die Zahl der Unfälle in dieser Altersgruppe. Ob das Risiko pro Fahrerin oder Fahrer gestiegen ist, ist dagegen umstritten. Klar ist: Die Freiheit auf zwei Rädern verlangt viel Verantwortung.",
    wort: [["das Bedürfnis","etwas, das man braucht"],["gestuft","in mehreren Stufen nacheinander"],["unbestritten","alle sind sich einig"],["mildern","schwächer machen"],["vorausschauend","so, dass man an das denkt, was gleich passieren könnte"],["die Auswertung","genaue Untersuchung von Zahlen"]],
    mc: [
      { q: "Warum hat der Bund das Mindestalter gesenkt?", o: ["Um sich an andere europäische Länder anzupassen und weil Lernende auf dem Land früh keinen ÖV haben","Weil Motorräder billiger wurden","Weil es weniger Unfälle gab","Weil Autos verboten wurden"], a: 0 },
      { q: "Was ist das Ziel des Stufenmodells?", o: ["Erfahrung und Motorleistung sollen gemeinsam wachsen","Möglichst schnell das stärkste Motorrad fahren","Weniger Prüfungen","Mehr Geld für Fahrschulen"], a: 0 },
      { q: "Was sagen Fachleute über Schutzkleidung?", o: ["Sie mildert Verletzungen, verhindert aber keine Unfälle","Sie ist überflüssig","Sie verhindert alle Unfälle","Sie ist nur im Winter nötig"], a: 0 },
      { q: "Was zeigen die ersten Auswertungen?", o: ["Mehr junge Fahrende und mehr Unfälle; ob das Risiko pro Person gestiegen ist, ist umstritten","Keine Unfälle mehr","Weniger junge Fahrende","Das Gesetz wurde wieder abgeschafft"], a: 0 }
    ],
    rf: [
      { s: "Ab 18 kann man mit der Kategorie A zuerst nur Motorräder bis 35 Kilowatt fahren.", a: true },
      { s: "Nach zwei Jahren unfallfreier Praxis darf man unbeschränkt starke Motorräder fahren.", a: true },
      { s: "Ein häufiger Unfall ist, dass ein Autofahrer beim Linksabbiegen ein Motorrad übersieht.", a: true },
      { s: "Laut Text ist klar bewiesen, dass das Risiko pro Fahrerin oder Fahrer gesunken ist.", a: false, x: "Ob das Risiko pro Person gestiegen ist, ist umstritten." }
    ],
    offen: [
      { q: "Erkläre das Stufenmodell vom A1-Ausweis bis zum unbeschränkten Motorradausweis.", l: "Ab 16: A1 (125 ccm, 11 kW) mit Lernfahrausweis, Grundkurs und Prüfung. Ab 18: Kategorie A beschränkt auf 35 kW. Nach zwei Jahren unfallfreier Praxis: unbeschränkt." },
      { q: "Stelle die Argumente der Befürworter und der Kritiker der Regelung einander gegenüber.", l: "Befürworter: moderne 125er mit ABS sicherer als alte Roller, frühe Verkehrserfahrung, Mobilität für Lernende auf dem Land. Kritiker: mehr Unfälle, Jugendliche unterschätzen Risiken." },
      { q: "Der Text endet mit: «Die Freiheit auf zwei Rädern verlangt viel Verantwortung.» Was bedeutet Verantwortung konkret für eine junge Motorradfahrerin? Nenne mindestens drei Punkte.", l: "Z. B. Schutzausrüstung tragen, angepasste Geschwindigkeit, vorausschauend fahren, sichtbar sein, kein Alkohol, Motorrad warten, Fahrtrainings besuchen, keine Mitfahrenden ohne Ausweis." }
    ] }
},
"wt-gta1": {
  2: { vor: "Warum dauert die Entwicklung eines grossen Videospiels so lange? Was muss alles gemacht werden?",
    dauer: "ca. 250 Wörter", text: "Kein anderes Videospiel wurde so lange erwartet wie GTA 6. Der Vorgänger GTA 5 erschien 2013 und verkaufte sich bis heute über 200 Millionen Mal. Danach dauerte es dreizehn Jahre, bis am 19. November 2026 der nächste Teil auf den Markt kam.\n\nHinter dem Spiel steht das Studio Rockstar Games, das zur amerikanischen Firma Take-Two gehört. Tausende Entwicklerinnen und Entwickler in mehreren Ländern arbeiteten über zehn Jahre daran. Sie programmierten die Spielwelt, schrieben die Geschichte, nahmen Stimmen und Musik auf und testeten alles immer wieder. Fachleute schätzen die Kosten auf über eine Milliarde US-Dollar. Das ist mehr als für jeden Hollywood-Film.\n\nDer Weg zum Start war nicht einfach. Zuerst war das Spiel für Herbst 2025 angekündigt. Dann wurde es auf Mai 2026 verschoben, später noch einmal auf November 2026. Rockstar erklärte, man brauche mehr Zeit, um die Qualität zu sichern. Viele Fans waren enttäuscht, die Aktie von Take-Two fiel kurzzeitig.\n\nAm Ende hat sich das Warten für die Firma gelohnt. Schon vor dem Start wurden 32,5 Millionen Exemplare verkauft, ein Rekord. Am ersten Tag nahm das Spiel laut Take-Two weltweit 3,79 Milliarden Dollar ein. Damit war GTA 6 der grösste Start eines Unterhaltungsprodukts aller Zeiten, grösser als jeder Kinofilm und jede Konzerttour. Auf einer bekannten Bewertungsseite bekam es fast die volle Punktzahl.\n\nNicht alle sind zufrieden. PC-Spieler müssen warten, denn zum Start gab es das Spiel nur für PlayStation 5 und Xbox Series. Und das Spiel kostet rund 80 Dollar, mehr als die meisten anderen Spiele.",
    wort: [["auf den Markt kommen","zum Kauf angeboten werden"],["programmieren","Computerprogramme schreiben"],["ankündigen","sagen, dass etwas kommen wird"],["die Aktie","Anteil an einer Firma, den man kaufen und verkaufen kann"],["das Unterhaltungsprodukt","etwas zur Unterhaltung, z. B. Film, Musik, Spiel"]],
    mc: [
      { q: "Zu welcher Firma gehört Rockstar Games?", o: ["Zu Sony","Zu Take-Two","Zu Nintendo","Zu Microsoft"], a: 1 },
      { q: "Welche Arbeiten gehören laut Text zur Entwicklung?", o: ["Programmieren, Geschichte schreiben, Stimmen und Musik aufnehmen, testen","Nur Werbung machen","Nur Konsolen bauen","Kinofilme drehen"], a: 0 },
      { q: "Wie reagierte die Aktie von Take-Two auf die Verschiebung?", o: ["Sie stieg stark","Sie fiel kurzzeitig","Sie blieb gleich","Sie wurde verboten"], a: 1 },
      { q: "Wie viel kostet das Spiel ungefähr?", o: ["8 Dollar","80 Dollar","800 Dollar","Es ist gratis"], a: 1 }
    ],
    rf: [
      { s: "GTA 5 hat sich über 200 Millionen Mal verkauft.", a: true },
      { s: "GTA 6 war zuerst für Herbst 2025 angekündigt.", a: true },
      { s: "Zum Start gab es GTA 6 auch für den PC.", a: false, x: "Zum Start gab es das Spiel nur für PlayStation 5 und Xbox Series." },
      { s: "Laut Take-Two war GTA 6 der grösste Start eines Unterhaltungsprodukts aller Zeiten.", a: true }
    ],
    offen: [
      { q: "Erstelle eine kleine Zeitleiste zu GTA 6 mit mindestens vier Daten aus dem Text.", l: "2013 GTA 5; ursprünglich Herbst 2025 geplant; Verschiebung auf Mai 2026; Verschiebung auf November 2026; 19. November 2026 Start." },
      { q: "Warum hat Rockstar den Start verschoben, und was waren die Folgen?", l: "Mehr Zeit für die Qualität. Folgen: enttäuschte Fans, Aktie fiel kurzzeitig; am Ende trotzdem Rekordverkäufe." }
    ] },
  3: { vor: "Ein Spiel kostet über eine Milliarde Dollar. Ist es gut für die Gaming-Branche, wenn ein einziges Spiel so dominiert?",
    dauer: "ca. 300 Wörter", text: "Mit GTA 6 hat die Gaming-Branche ein neues Kapitel aufgeschlagen. Am 19. November 2026 erschien das Spiel nach über zehn Jahren Entwicklungszeit, und es übertraf alle Erwartungen. Laut dem Herausgeber Take-Two nahm es am ersten Tag weltweit 3,79 Milliarden US-Dollar ein. Bereits vor dem Start waren 32,5 Millionen Exemplare verkauft. Zum Vergleich: Der Vorgänger GTA 5 hatte 2013 am ersten Tag rund 800 Millionen Dollar umgesetzt.\n\nDiese Zahlen sind auch eine Folge enormer Investitionen. An der Entwicklung waren mehrere tausend Menschen beteiligt, die Kosten werden auf über eine Milliarde Dollar geschätzt. Ein solches Risiko kann sich nur ein Unternehmen leisten, das mit einer bekannten Marke fast sicher Erfolg hat. Kleinere Studios wichen deshalb aus: Mehrere Firmen verschoben ihre Spiele, um nicht gleichzeitig mit GTA 6 auf den Markt zu kommen.\n\nDer Erfolg hat jedoch Schattenseiten. Aus der Branche wird seit Jahren über «Crunch» berichtet, also lange Phasen mit sehr vielen Überstunden vor einer Veröffentlichung. Auch bei Rockstar gab es solche Vorwürfe. 2025 entliess das Studio zudem mehrere Dutzend Mitarbeitende, vor allem in Grossbritannien. Gewerkschaften warfen der Firma vor, sie habe Leute entlassen, die sich für bessere Arbeitsbedingungen organisiert hätten. Rockstar bestritt das und sprach von Verstössen gegen die Geheimhaltung.\n\nDie Geheimhaltung war tatsächlich ein grosses Thema. Schon 2022 hatte ein Hacker Videos aus einer frühen Version veröffentlicht. Rockstar wollte danach um jeden Preis verhindern, dass weitere Details zu früh bekannt werden.\n\nDiskutiert wird auch über den Preis. GTA 6 kostet rund 80 Dollar, eine teurere Version noch mehr. Manche befürchten, dass andere Firmen nachziehen und Spiele generell teurer werden. Andere argumentieren, dass ein Spiel mit hundert Stunden Spielzeit pro Stunde günstiger sei als ein Kinobesuch.\n\nFest steht: GTA 6 zeigt, wie gross und mächtig die Gaming-Branche geworden ist. Ein einziges Spiel kann heute mehr Geld einspielen als die erfolgreichsten Filme und dabei Arbeitsbedingungen, Preise und die Konkurrenz einer ganzen Branche beeinflussen.",
    wort: [["umsetzen","hier: verkaufen und dabei Geld einnehmen"],["die Investition","Geld, das man einsetzt, um später mehr zu gewinnen"],["ausweichen","aus dem Weg gehen"],["die Schattenseite","die negative Seite einer Sache"],["die Geheimhaltung","dafür sorgen, dass Informationen geheim bleiben"],["nachziehen","dasselbe tun wie andere"]],
    mc: [
      { q: "Wie viel setzte GTA 5 am ersten Tag um?", o: ["Etwa 80 Millionen Dollar","Etwa 800 Millionen Dollar","Etwa 3,79 Milliarden Dollar","Etwa 32 Milliarden Dollar"], a: 1 },
      { q: "Warum verschoben andere Firmen ihre Spiele?", o: ["Um nicht gleichzeitig mit GTA 6 auf den Markt zu kommen","Weil sie kein Geld hatten","Weil Rockstar es befahl","Weil Konsolen fehlten"], a: 0 },
      { q: "Was warfen Gewerkschaften Rockstar vor?", o: ["Leute entlassen zu haben, die sich für bessere Arbeitsbedingungen organisiert hatten","Zu viel Lohn bezahlt zu haben","Zu viele Ferien gegeben zu haben","Das Spiel zu früh veröffentlicht zu haben"], a: 0 },
      { q: "Welches Argument nennt der Text FÜR den hohen Preis?", o: ["Pro Stunde Spielzeit ist es günstiger als ein Kinobesuch","Alle Spiele kosten so viel","Der Preis ist gesetzlich vorgeschrieben","Man bekommt eine Konsole dazu"], a: 0 }
    ],
    rf: [
      { s: "Laut Text kann sich ein so grosses Risiko nur eine Firma mit einer bekannten Marke leisten.", a: true },
      { s: "Rockstar gab zu, dass es Gewerkschaftsmitglieder entlassen hatte.", a: false, x: "Rockstar bestritt das und sprach von Verstössen gegen die Geheimhaltung." },
      { s: "«Crunch» bedeutet lange Phasen mit sehr vielen Überstunden.", a: true },
      { s: "Manche befürchten, dass Spiele generell teurer werden.", a: true }
    ],
    offen: [
      { q: "Erkläre mit dem Text, wie GTA 6 die ganze Gaming-Branche beeinflusst. Nenne drei Bereiche.", l: "Konkurrenz (andere verschieben ihre Spiele), Preise (andere könnten nachziehen), Arbeitsbedingungen (Crunch, Entlassungen, Gewerkschaften), Umsätze/Rekorde." },
      { q: "Vergleiche die Zahlen von GTA 5 und GTA 6 am ersten Tag. Um wie viel Mal mehr hat GTA 6 eingenommen?", l: "3,79 Milliarden : 0,8 Milliarden ≈ 4,7-mal mehr (fast fünfmal)." },
      { q: "Sollten Käuferinnen und Käufer beim Kauf eines Spiels auch an die Arbeitsbedingungen der Entwickler denken? Nimm Stellung.", l: "Individuelle Stellungnahme, z. B. ja: Verantwortung wie bei Kleidung; nein/teilweise: Kunden haben wenig Einfluss, Verantwortung liegt bei Firmen und Gesetzen." }
    ] }
},
"wt-gta2": {
  2: { vor: "Videospiele werden oft «Open World» genannt. Was bedeutet das? Kennst du ein Beispiel?",
    dauer: "ca. 250 Wörter", text: "Wer GTA 6 startet, landet im Bundesstaat Leonida. Ihn gibt es in Wirklichkeit nicht, aber er ist klar nach dem Vorbild von Florida gestaltet. Das Herz der Spielwelt ist Vice City, die Spielversion von Miami. Fans kennen die Stadt schon aus dem Spiel «GTA: Vice City» von 2002, das in den 1980er-Jahren spielte. GTA 6 zeigt Vice City nun in der Gegenwart, mit Smartphones, sozialen Medien und modernen Autos.\n\nLeonida ist eine sogenannte Open World, eine offene Welt. Man kann sich frei bewegen und muss nicht einem festen Weg folgen. Neben der Grossstadt gibt es Strände, Sumpfgebiete mit Alligatoren, Inseln und kleine Orte auf dem Land. Die Spielwelt soll die grösste und dichteste sein, die Rockstar je gebaut hat.\n\nIm Zentrum der Geschichte stehen Lucia und Jason. Lucia ist die erste weibliche Hauptfigur der Hauptreihe seit dem allerersten GTA von 1997. Im ersten Trailer sitzt sie im Gefängnis. Zusammen mit Jason gerät sie immer tiefer in die Kriminalität. Viele vergleichen die beiden mit Bonnie und Clyde, einem Verbrecherpaar aus den USA der 1930er-Jahre.\n\nTypisch für GTA ist, dass das Spiel die amerikanische Gesellschaft übertreibt und sich darüber lustig macht. In GTA 6 geht es zum Beispiel um Influencer, verrückte Videos in sozialen Medien und um Menschen, die alles für Ruhm und Geld tun.\n\nUm die Welt so echt wie möglich zu machen, haben die Entwickler viel recherchiert. Sie sind durch Florida gereist, haben fotografiert, beobachtet und mit Menschen gesprochen. So soll jede Strasse und jedes Geschäft einzigartig wirken.",
    wort: [["das Vorbild","etwas, das man als Muster nimmt"],["die Gegenwart","die heutige Zeit"],["der Alligator","grosses Reptil, ähnlich wie ein Krokodil"],["sich lustig machen über","über etwas spotten, es lächerlich machen"],["recherchieren","Informationen suchen und sammeln"]],
    mc: [
      { q: "In welcher Zeit spielte «GTA: Vice City» von 2002?", o: ["In den 1980er-Jahren","In der Zukunft","Im Mittelalter","In der Gegenwart"], a: 0 },
      { q: "Was bedeutet «Open World»?", o: ["Man kann sich frei in der Spielwelt bewegen","Das Spiel ist gratis","Man spielt nur draussen","Die Welt ist leer"], a: 0 },
      { q: "Wo sieht man Lucia im ersten Trailer?", o: ["Im Gefängnis","Am Strand","In der Schule","Im Flugzeug"], a: 0 },
      { q: "Worüber macht sich GTA 6 laut Text lustig?", o: ["Über Influencer und Menschen, die alles für Ruhm und Geld tun","Über die Schweiz","Über Tiere","Über Sportler"], a: 0 }
    ],
    rf: [
      { s: "Leonida gibt es in Wirklichkeit.", a: false, x: "Leonida ist erfunden, aber nach dem Vorbild von Florida gestaltet." },
      { s: "In Leonida gibt es Sumpfgebiete mit Alligatoren.", a: true },
      { s: "Lucia ist die erste weibliche Hauptfigur der Hauptreihe seit dem allerersten GTA von 1997.", a: true },
      { s: "Die Entwickler sind für die Recherche durch Florida gereist.", a: true }
    ],
    offen: [
      { q: "Was ist der Unterschied zwischen Vice City im Spiel von 2002 und in GTA 6?", l: "2002 spielte es in den 1980er-Jahren; GTA 6 zeigt die Stadt in der Gegenwart mit Smartphones, sozialen Medien und modernen Autos." },
      { q: "Warum übertreiben die GTA-Spiele die amerikanische Gesellschaft? Was könnte das Ziel sein?", l: "Satire: Sie machen sich lustig über Probleme wie Gier, Ruhmsucht, soziale Medien; das soll unterhalten und zum Nachdenken anregen." }
    ] },
  3: { vor: "Darf man in einem Spiel echte Orte und echte Probleme zeigen, auch wenn man sie übertreibt? Wo ist die Grenze?",
    dauer: "ca. 300 Wörter", text: "Die Welt von GTA 6 ist erfunden und wirkt doch erstaunlich vertraut. Der fiktive Bundesstaat Leonida ist Florida nachempfunden, seine Metropole Vice City der Stadt Miami. Rockstar Games verfolgt damit ein Prinzip, das die Reihe seit Jahrzehnten prägt: reale Orte so umzubauen, dass sie wiedererkennbar sind, aber übertrieben und verzerrt erscheinen. Los Santos in GTA 5 war Los Angeles, Liberty City in GTA 4 New York.\n\nDiese Verzerrung ist kein Zufall, sondern Satire. GTA zeigt eine Gesellschaft, in der Geld, Gewalt und Aufmerksamkeit alles bestimmen. In GTA 6 rücken besonders soziale Medien in den Mittelpunkt: Menschen filmen alles, was um sie herum passiert, und machen selbst aus Verbrechen virale Videos. Florida eignet sich dafür besonders, denn der Bundesstaat ist im Internet für seltsame Nachrichten berühmt. Fans sprechen sogar vom «Florida Man», einem Internet-Witz über absurde Polizeimeldungen.\n\nAuch die Hauptfiguren Lucia und Jason passen in dieses Bild. Das Paar will einen Neuanfang und versucht, mit kriminellen Mitteln an Geld zu kommen. Dass mit Lucia erstmals seit Jahrzehnten eine Frau, noch dazu eine Latina, die Hauptrolle spielt, wurde von vielen als zeitgemäss gelobt. Miami hat einen sehr hohen Anteil an Menschen mit lateinamerikanischen Wurzeln.\n\nWie wertvoll Informationen über das Spiel waren, zeigte sich schon 2022. Damals verschaffte sich ein Hacker Zugang zu internen Systemen von Rockstar und veröffentlichte rund 90 Videos aus einer frühen Version. Es war einer der grössten Leaks der Spielegeschichte. Der Täter, ein junger Brite, hatte zuvor schon andere Firmen gehackt. Ein Gericht stellte später fest, dass er wegen einer psychischen Erkrankung nicht verhandlungsfähig war, und ordnete eine unbefristete Unterbringung in einer Klinik an.\n\nKritikerinnen und Kritiker fragen, ob ein Spiel, das Verbrechen zum Spass macht, problematisch ist, auch wenn es Satire sein will. Viele Spielerinnen und Spieler nehmen die Gesellschaftskritik nämlich kaum wahr. Für sie ist GTA vor allem ein grosser Spielplatz. Ob die Satire wirkt, hängt also auch davon ab, wie aufmerksam man spielt.",
    wort: [["fiktiv","erfunden, nicht real"],["nachempfinden","etwas so gestalten, dass es einem Vorbild ähnelt"],["verzerrt","nicht in den richtigen Proportionen, verändert dargestellt"],["die Satire","Kunstform, die Missstände übertreibt und lächerlich macht"],["viral","sehr schnell im Internet verbreitet"],["verhandlungsfähig","fähig, an einem Gerichtsverfahren teilzunehmen"]],
    mc: [
      { q: "Welches Prinzip verfolgt Rockstar bei seinen Spielwelten?", o: ["Reale Orte wiedererkennbar, aber übertrieben und verzerrt darstellen","Nur Fantasiewelten ohne Vorbild bauen","Echte Städte genau kopieren","Nur Dörfer zeigen"], a: 0 },
      { q: "Welche Stadt war das Vorbild für Los Santos in GTA 5?", o: ["New York","Los Angeles","Miami","Chicago"], a: 1 },
      { q: "Warum eignet sich Florida laut Text besonders für die Satire?", o: ["Weil es im Internet für seltsame Nachrichten berühmt ist","Weil es dort nie regnet","Weil dort Rockstar sitzt","Weil es keine sozialen Medien gibt"], a: 0 },
      { q: "Was entschied ein Gericht über den Hacker?", o: ["Er war wegen einer psychischen Erkrankung nicht verhandlungsfähig und muss in eine Klinik","Er wurde freigesprochen und bekam eine Stelle bei Rockstar","Er bekam eine kleine Busse","Er wurde nie gefunden"], a: 0 }
    ],
    rf: [
      { s: "In GTA 6 spielen soziale Medien eine wichtige Rolle.", a: true },
      { s: "Beim Leak 2022 wurden rund 90 Videos veröffentlicht.", a: true },
      { s: "Lucia wurde von vielen als unpassende Figur kritisiert.", a: false, x: "Sie wurde von vielen als zeitgemäss gelobt." },
      { s: "Laut Text nehmen viele Spielende die Gesellschaftskritik kaum wahr.", a: true }
    ],
    offen: [
      { q: "Erkläre mit Beispielen aus dem Text, was Satire in GTA 6 bedeutet.", l: "Übertreibung realer Probleme: Gesellschaft, in der Geld, Gewalt und Aufmerksamkeit alles bestimmen; Menschen filmen alles und machen Verbrechen zu viralen Videos; «Florida Man»." },
      { q: "Warum war Lucia als Hauptfigur für viele eine wichtige Neuerung? Begründe mit dem Text.", l: "Erste Frau in der Hauptrolle seit Jahrzehnten, Latina; passt zu Miami mit hohem lateinamerikanischem Bevölkerungsanteil; zeitgemäss." },
      { q: "«Ob die Satire wirkt, hängt davon ab, wie aufmerksam man spielt.» Stimmst du zu? Nimm Stellung mit Beispielen aus Spielen, Filmen oder Serien, die du kennst.", l: "Individuelle Stellungnahme mit Beispielen und Begründung." }
    ] }
},
"wt-gta3": {
  2: { vor: "Wer entscheidet in deiner Familie, welche Spiele du spielen darfst? Gibt es Regeln?",
    dauer: "ca. 250 Wörter", text: "Seit dem 19. November 2026 ist GTA 6 auf dem Markt, und auf vielen Pausenplätzen gibt es kaum ein anderes Thema. Dabei dürften viele Schülerinnen und Schüler das Spiel eigentlich gar nicht spielen. Es ist ab 18 Jahren freigegeben.\n\nIn Europa und in der Schweiz gilt für Videospiele das PEGI-System. PEGI steht für «Pan European Game Information». Es gibt fünf Altersstufen: 3, 7, 12, 16 und 18. Zusätzlich zeigen kleine Symbole, warum ein Spiel eine bestimmte Stufe bekommt, zum Beispiel wegen Gewalt, Drogen, Schimpfwörtern oder Glücksspiel. Seit 2025 gilt in der Schweiz schrittweise ein Gesetz zum Jugendschutz bei Filmen und Videospielen. Läden und Online-Shops müssen kontrollieren, dass Kinder keine Spiele kaufen, die für ihr Alter nicht freigegeben sind.\n\nGTA 6 bekommt die Stufe 18, weil es realistische Gewalt, Drogen, sexuelle Inhalte und viele Schimpfwörter enthält. Die Hauptfiguren sind Kriminelle, und der Spieler kann viele Verbrechen begehen.\n\nViele Eltern fragen sich, ob solche Spiele schädlich sind. Die Forschung gibt keine einfache Antwort. Die meisten Studien zeigen, dass brutale Spiele allein niemanden zum Gewalttäter machen. Viele andere Faktoren sind wichtiger, etwa die Familie, die Freunde oder eigene Probleme. Es gibt aber Hinweise, dass Kinder nach realistischen Gewaltszenen schlechter schlafen oder Angst haben.\n\nAuch die Spielzeit ist ein Thema. GTA 6 hat eine Geschichte von über 50 Stunden und unzählige Nebenaufgaben. Wer nicht aufpasst, spielt bis spät in die Nacht. Fachstellen empfehlen deshalb klare Abmachungen: feste Spielzeiten, keine Bildschirme vor dem Schlafen und Gespräche darüber, was man im Spiel erlebt.",
    wort: [["die Altersstufe","Einteilung nach Alter"],["das Symbol","kleines Bild, das etwas bedeutet"],["der Jugendschutz","Regeln, die Kinder und Jugendliche schützen sollen"],["schädlich","so, dass es schadet"],["der Faktor","ein Umstand, der etwas beeinflusst"]],
    mc: [
      { q: "Welche Altersstufen gibt es bei PEGI?", o: ["3, 7, 12, 16 und 18","5, 10, 15 und 20","Nur 18","6, 12 und 18"], a: 0 },
      { q: "Wozu dienen die kleinen Symbole bei PEGI?", o: ["Sie zeigen, warum ein Spiel eine bestimmte Stufe bekommt","Sie zeigen den Preis","Sie zeigen die Spielzeit","Sie sind nur Dekoration"], a: 0 },
      { q: "Was müssen Läden und Online-Shops seit dem neuen Gesetz tun?", o: ["Kontrollieren, dass Kinder keine Spiele für Ältere kaufen","Alle Spiele verbieten","Spiele gratis abgeben","Nichts"], a: 0 },
      { q: "Was zeigen die meisten Studien?", o: ["Brutale Spiele allein machen niemanden zum Gewalttäter","Alle Spieler werden gewalttätig","Spiele machen intelligenter","Spiele haben keinerlei Wirkung"], a: 0 }
    ],
    rf: [
      { s: "PEGI steht für «Pan European Game Information».", a: true },
      { s: "Für Gewalt bei Jugendlichen sind laut Text andere Faktoren wie Familie und Freunde wichtiger.", a: true },
      { s: "Die Geschichte von GTA 6 dauert nur etwa fünf Stunden.", a: false, x: "Sie dauert über 50 Stunden." },
      { s: "Fachstellen empfehlen, vor dem Schlafen keine Bildschirme zu benutzen.", a: true }
    ],
    offen: [
      { q: "Erkläre einer Person, die PEGI nicht kennt, wie das System funktioniert.", l: "Europäisches System mit fünf Altersstufen (3, 7, 12, 16, 18) und Symbolen für Inhalte wie Gewalt, Drogen, Schimpfwörter, Glücksspiel; zeigt, ab welchem Alter ein Spiel geeignet ist." },
      { q: "Welche zwei Abmachungen würdest du mit jüngeren Geschwistern zum Gamen treffen? Begründe.", l: "Z. B. feste Spielzeiten, nur altersgerechte Spiele, keine Bildschirme vor dem Schlafen, über Spiele sprechen; Begründung mit Schlaf, Schule, Inhalten." }
    ] },
  3: { vor: "Altersfreigaben sollen Kinder schützen. Trotzdem spielen viele Jugendliche Spiele ab 18. Wer trägt die Verantwortung?",
    dauer: "ca. 300 Wörter", text: "Kaum ein Spiel hat die Debatte über Gewalt in Videospielen so stark angeheizt wie die GTA-Reihe. Mit GTA 6, das am 19. November 2026 erschien, flammt sie erneut auf. Das Spiel trägt die höchste Altersfreigabe, PEGI 18. Es zeigt realistische Gewalt, Drogenkonsum und sexuelle Inhalte, und die Spielerinnen und Spieler steuern zwei Kriminelle. Trotzdem ist bekannt, dass viele Jugendliche unter 18 solche Spiele spielen, oft mit dem Wissen der Eltern.\n\nDie Schweiz hat darauf reagiert. Seit 2025 tritt schrittweise das Bundesgesetz über den Jugendschutz in den Bereichen Film und Videospiele in Kraft. Es verpflichtet Verkaufsstellen und Online-Shops, das Alter zu kontrollieren, und Plattformen müssen Systeme zur Alterskontrolle und für den Elternschutz anbieten. Wer gegen das Gesetz verstösst, kann gebüsst werden. Allerdings kann kein Gesetz verhindern, dass ein älterer Bruder ein Spiel weitergibt oder Eltern es ihren Kindern kaufen.\n\nWie gefährlich sind gewalttätige Spiele wirklich? Die Forschung ist sich in einem Punkt weitgehend einig: Es gibt keinen klaren Beweis, dass solche Spiele direkt zu realer Gewalt führen. Länder mit vielen Gamern haben nicht automatisch mehr Gewaltverbrechen. Einige Studien finden jedoch kurzfristige Effekte, etwa mehr aggressive Gedanken direkt nach dem Spielen. Besonders bei jüngeren Kindern können realistische Darstellungen Ängste und Schlafprobleme verursachen. Fachleute betonen ausserdem, dass sich nicht jedes Kind gleich entwickelt: Was ein stabiler Jugendlicher gut verarbeitet, kann für ein belastetes Kind schwierig sein.\n\nWeitere Fragen betreffen Zeit und Geld. Grosse Spiele sind so gestaltet, dass man immer weiterspielen möchte. Belohnungen, Ranglisten und neue Inhalte halten die Spielenden bei der Stange. Im Online-Modus von GTA können Spielerinnen und Spieler zudem echtes Geld für virtuelle Währung ausgeben, was besonders für Jugendliche schnell teuer wird.\n\nFür Medienpädagoginnen und Medienpädagogen ist deshalb klar: Verbote allein reichen nicht. Wichtiger sind Medienkompetenz, Gespräche zwischen Eltern und Kindern und klare Regeln. Wer versteht, wie ein Spiel gemacht ist und warum es fesselt, kann bewusster entscheiden, wann und wie viel er spielt.",
    wort: [["die Debatte","öffentliche Diskussion über ein Thema"],["anheizen","verstärken, lebhafter machen"],["verpflichten","zu etwas zwingen, Pflicht machen"],["verarbeiten","mit Erlebnissen innerlich umgehen"],["bei der Stange halten","dafür sorgen, dass jemand weitermacht"],["die Medienkompetenz","die Fähigkeit, Medien kritisch und sinnvoll zu nutzen"]],
    mc: [
      { q: "Was verlangt das Schweizer Jugendschutzgesetz seit 2025?", o: ["Alterskontrollen bei Verkaufsstellen und Online-Shops sowie Elternschutz auf Plattformen","Ein Verbot aller Videospiele","Gratis-Spiele für Jugendliche","Spielen nur in der Schule"], a: 0 },
      { q: "Worin ist sich die Forschung weitgehend einig?", o: ["Es gibt keinen klaren Beweis, dass Gewaltspiele direkt zu realer Gewalt führen","Gewaltspiele machen alle gewalttätig","Spiele haben gar keine Effekte","Nur Mädchen werden aggressiv"], a: 0 },
      { q: "Welches Risiko nennt der Text beim Online-Modus?", o: ["Man kann echtes Geld für virtuelle Währung ausgeben","Man kann sich nicht anmelden","Der Online-Modus ist gratis","Man kann nur allein spielen"], a: 0 },
      { q: "Was ist laut Medienpädagogen wichtiger als Verbote?", o: ["Medienkompetenz, Gespräche und klare Regeln","Noch strengere Strafen","Teurere Spiele","Keine Regeln"], a: 0 }
    ],
    rf: [
      { s: "Laut Text kann ein Gesetz nicht verhindern, dass Eltern ihren Kindern ein Spiel kaufen.", a: true },
      { s: "Länder mit vielen Gamern haben automatisch mehr Gewaltverbrechen.", a: false, x: "Sie haben nicht automatisch mehr Gewaltverbrechen." },
      { s: "Einige Studien finden kurzfristig mehr aggressive Gedanken nach dem Spielen.", a: true },
      { s: "Laut Fachleuten reagieren alle Kinder gleich auf Gewaltdarstellungen.", a: false, x: "Nicht jedes Kind entwickelt sich gleich; belastete Kinder können mehr Mühe haben." }
    ],
    offen: [
      { q: "Fasse zusammen, was die Forschung über Gewalt in Videospielen sagt. Unterscheide zwischen dem, was klar ist, und dem, was möglich ist.", l: "Klar: kein Beweis, dass Gewaltspiele direkt zu realer Gewalt führen. Möglich: kurzfristig aggressive Gedanken, Ängste und Schlafprobleme bei jüngeren Kindern, je nach Kind unterschiedlich." },
      { q: "Der Text nennt neben der Gewalt weitere Probleme. Erkläre zwei davon und wie man damit umgehen kann.", l: "Zeit (Spiele sind auf Weiterspielen ausgelegt: Belohnungen, Ranglisten) → feste Spielzeiten. Geld (echtes Geld für virtuelle Währung) → Ausgabenlimit, Elternschutz-Einstellungen." },
      { q: "Wer trägt die Hauptverantwortung dafür, dass Kinder keine Spiele ab 18 spielen: der Staat, die Firmen, die Eltern oder die Jugendlichen selbst? Nimm begründet Stellung.", l: "Individuelle, begründete Stellungnahme mit Bezug auf den Text (Gesetz, Grenzen des Gesetzes, Medienkompetenz, Elterngespräche)." }
    ] }
}
};

window.THEMEN2_UNITS = (window.THEMEN2_UNITS || []).concat(U);
window.STUFEN = window.STUFEN || {};
Object.assign(window.STUFEN, S);
})();
